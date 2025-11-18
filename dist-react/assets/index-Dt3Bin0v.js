function qc(e,n){for(var t=0;t<n.length;t++){const l=n[t];if(typeof l!="string"&&!Array.isArray(l)){for(const s in l)if(s!=="default"&&!(s in e)){const r=Object.getOwnPropertyDescriptor(l,s);r&&Object.defineProperty(e,s,r.get?r:{enumerable:!0,get:()=>l[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Jc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var So={exports:{}},hs={},ko={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),Zc=Symbol.for("react.portal"),eu=Symbol.for("react.fragment"),nu=Symbol.for("react.strict_mode"),tu=Symbol.for("react.profiler"),lu=Symbol.for("react.provider"),su=Symbol.for("react.context"),ru=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),iu=Symbol.for("react.memo"),ou=Symbol.for("react.lazy"),si=Symbol.iterator;function du(e){return e===null||typeof e!="object"?null:(e=si&&e[si]||e["@@iterator"],typeof e=="function"?e:null)}var jo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Co=Object.assign,No={};function gt(e,n,t){this.props=e,this.context=n,this.refs=No,this.updater=t||jo}gt.prototype.isReactComponent={};gt.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};gt.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Po(){}Po.prototype=gt.prototype;function aa(e,n,t){this.props=e,this.context=n,this.refs=No,this.updater=t||jo}var ia=aa.prototype=new Po;ia.constructor=aa;Co(ia,gt.prototype);ia.isPureReactComponent=!0;var ri=Array.isArray,_o=Object.prototype.hasOwnProperty,oa={current:null},Fo={key:!0,ref:!0,__self:!0,__source:!0};function Ro(e,n,t){var l,s={},r=null,a=null;if(n!=null)for(l in n.ref!==void 0&&(a=n.ref),n.key!==void 0&&(r=""+n.key),n)_o.call(n,l)&&!Fo.hasOwnProperty(l)&&(s[l]=n[l]);var i=arguments.length-2;if(i===1)s.children=t;else if(1<i){for(var o=Array(i),c=0;c<i;c++)o[c]=arguments[c+2];s.children=o}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)s[l]===void 0&&(s[l]=i[l]);return{$$typeof:al,type:e,key:r,ref:a,props:s,_owner:oa.current}}function cu(e,n){return{$$typeof:al,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function da(e){return typeof e=="object"&&e!==null&&e.$$typeof===al}function uu(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var ai=/\/+/g;function Is(e,n){return typeof e=="object"&&e!==null&&e.key!=null?uu(""+e.key):n.toString(36)}function Rl(e,n,t,l,s){var r=typeof e;(r==="undefined"||r==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(r){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case al:case Zc:a=!0}}if(a)return a=e,s=s(a),e=l===""?"."+Is(a,0):l,ri(s)?(t="",e!=null&&(t=e.replace(ai,"$&/")+"/"),Rl(s,n,t,"",function(c){return c})):s!=null&&(da(s)&&(s=cu(s,t+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ai,"$&/")+"/")+e)),n.push(s)),1;if(a=0,l=l===""?".":l+":",ri(e))for(var i=0;i<e.length;i++){r=e[i];var o=l+Is(r,i);a+=Rl(r,n,t,o,s)}else if(o=du(e),typeof o=="function")for(e=o.call(e),i=0;!(r=e.next()).done;)r=r.value,o=l+Is(r,i++),a+=Rl(r,n,t,o,s);else if(r==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function vl(e,n,t){if(e==null)return e;var l=[],s=0;return Rl(e,l,"","",function(r){return n.call(t,r,s++)}),l}function pu(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Ll={transition:null},gu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Ll,ReactCurrentOwner:oa};function Lo(){throw Error("act(...) is not supported in production builds of React.")}L.Children={map:vl,forEach:function(e,n,t){vl(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return vl(e,function(){n++}),n},toArray:function(e){return vl(e,function(n){return n})||[]},only:function(e){if(!da(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=gt;L.Fragment=eu;L.Profiler=tu;L.PureComponent=aa;L.StrictMode=nu;L.Suspense=au;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gu;L.act=Lo;L.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Co({},e.props),s=e.key,r=e.ref,a=e._owner;if(n!=null){if(n.ref!==void 0&&(r=n.ref,a=oa.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(o in n)_o.call(n,o)&&!Fo.hasOwnProperty(o)&&(l[o]=n[o]===void 0&&i!==void 0?i[o]:n[o])}var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){i=Array(o);for(var c=0;c<o;c++)i[c]=arguments[c+2];l.children=i}return{$$typeof:al,type:e.type,key:s,ref:r,props:l,_owner:a}};L.createContext=function(e){return e={$$typeof:su,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lu,_context:e},e.Consumer=e};L.createElement=Ro;L.createFactory=function(e){var n=Ro.bind(null,e);return n.type=e,n};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:ru,render:e}};L.isValidElement=da;L.lazy=function(e){return{$$typeof:ou,_payload:{_status:-1,_result:e},_init:pu}};L.memo=function(e,n){return{$$typeof:iu,type:e,compare:n===void 0?null:n}};L.startTransition=function(e){var n=Ll.transition;Ll.transition={};try{e()}finally{Ll.transition=n}};L.unstable_act=Lo;L.useCallback=function(e,n){return de.current.useCallback(e,n)};L.useContext=function(e){return de.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return de.current.useDeferredValue(e)};L.useEffect=function(e,n){return de.current.useEffect(e,n)};L.useId=function(){return de.current.useId()};L.useImperativeHandle=function(e,n,t){return de.current.useImperativeHandle(e,n,t)};L.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};L.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};L.useMemo=function(e,n){return de.current.useMemo(e,n)};L.useReducer=function(e,n,t){return de.current.useReducer(e,n,t)};L.useRef=function(e){return de.current.useRef(e)};L.useState=function(e){return de.current.useState(e)};L.useSyncExternalStore=function(e,n,t){return de.current.useSyncExternalStore(e,n,t)};L.useTransition=function(){return de.current.useTransition()};L.version="18.3.1";ko.exports=L;var E=ko.exports;const To=Jc(E),vu=qc({__proto__:null,default:To},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hu=E,xu=Symbol.for("react.element"),fu=Symbol.for("react.fragment"),mu=Object.prototype.hasOwnProperty,bu=hu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yu={key:!0,ref:!0,__self:!0,__source:!0};function zo(e,n,t){var l,s={},r=null,a=null;t!==void 0&&(r=""+t),n.key!==void 0&&(r=""+n.key),n.ref!==void 0&&(a=n.ref);for(l in n)mu.call(n,l)&&!yu.hasOwnProperty(l)&&(s[l]=n[l]);if(e&&e.defaultProps)for(l in n=e.defaultProps,n)s[l]===void 0&&(s[l]=n[l]);return{$$typeof:xu,type:e,key:r,ref:a,props:s,_owner:bu.current}}hs.Fragment=fu;hs.jsx=zo;hs.jsxs=zo;So.exports=hs;var d=So.exports,dr={},Oo={exports:{}},ye={},Io={exports:{}},Uo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(C,F){var R=C.length;C.push(F);e:for(;0<R;){var H=R-1>>>1,q=C[H];if(0<s(q,F))C[H]=F,C[R]=q,R=H;else break e}}function t(C){return C.length===0?null:C[0]}function l(C){if(C.length===0)return null;var F=C[0],R=C.pop();if(R!==F){C[0]=R;e:for(var H=0,q=C.length,pl=q>>>1;H<pl;){var wn=2*(H+1)-1,Os=C[wn],En=wn+1,gl=C[En];if(0>s(Os,R))En<q&&0>s(gl,Os)?(C[H]=gl,C[En]=R,H=En):(C[H]=Os,C[wn]=R,H=wn);else if(En<q&&0>s(gl,R))C[H]=gl,C[En]=R,H=En;else break e}}return F}function s(C,F){var R=C.sortIndex-F.sortIndex;return R!==0?R:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var r=performance;e.unstable_now=function(){return r.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var o=[],c=[],h=1,p=null,x=3,m=!1,b=!1,y=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(C){for(var F=t(c);F!==null;){if(F.callback===null)l(c);else if(F.startTime<=C)l(c),F.sortIndex=F.expirationTime,n(o,F);else break;F=t(c)}}function f(C){if(y=!1,v(C),!b)if(t(o)!==null)b=!0,Ts(S);else{var F=t(c);F!==null&&zs(f,F.startTime-C)}}function S(C,F){b=!1,y&&(y=!1,g(_),_=-1),m=!0;var R=x;try{for(v(F),p=t(o);p!==null&&(!(p.expirationTime>F)||C&&!Pe());){var H=p.callback;if(typeof H=="function"){p.callback=null,x=p.priorityLevel;var q=H(p.expirationTime<=F);F=e.unstable_now(),typeof q=="function"?p.callback=q:p===t(o)&&l(o),v(F)}else l(o);p=t(o)}if(p!==null)var pl=!0;else{var wn=t(c);wn!==null&&zs(f,wn.startTime-F),pl=!1}return pl}finally{p=null,x=R,m=!1}}var N=!1,P=null,_=-1,V=5,T=-1;function Pe(){return!(e.unstable_now()-T<V)}function ft(){if(P!==null){var C=e.unstable_now();T=C;var F=!0;try{F=P(!0,C)}finally{F?mt():(N=!1,P=null)}}else N=!1}var mt;if(typeof u=="function")mt=function(){u(ft)};else if(typeof MessageChannel<"u"){var li=new MessageChannel,Xc=li.port2;li.port1.onmessage=ft,mt=function(){Xc.postMessage(null)}}else mt=function(){k(ft,0)};function Ts(C){P=C,N||(N=!0,mt())}function zs(C,F){_=k(function(){C(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){b||m||(b=!0,Ts(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return x},e.unstable_getFirstCallbackNode=function(){return t(o)},e.unstable_next=function(C){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var R=x;x=F;try{return C()}finally{x=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=x;x=C;try{return F()}finally{x=R}},e.unstable_scheduleCallback=function(C,F,R){var H=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?H+R:H):R=H,C){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=R+q,C={id:h++,callback:F,priorityLevel:C,startTime:R,expirationTime:q,sortIndex:-1},R>H?(C.sortIndex=R,n(c,C),t(o)===null&&C===t(c)&&(y?(g(_),_=-1):y=!0,zs(f,R-H))):(C.sortIndex=q,n(o,C),b||m||(b=!0,Ts(S))),C},e.unstable_shouldYield=Pe,e.unstable_wrapCallback=function(C){var F=x;return function(){var R=x;x=F;try{return C.apply(this,arguments)}finally{x=R}}}})(Uo);Io.exports=Uo;var wu=Io.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eu=E,be=wu;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Mo=new Set,$t={};function In(e,n){at(e,n),at(e+"Capture",n)}function at(e,n){for($t[e]=n,e=0;e<n.length;e++)Mo.add(n[e])}var Qe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cr=Object.prototype.hasOwnProperty,Su=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ii={},oi={};function ku(e){return cr.call(oi,e)?!0:cr.call(ii,e)?!1:Su.test(e)?oi[e]=!0:(ii[e]=!0,!1)}function ju(e,n,t,l){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cu(e,n,t,l){if(n===null||typeof n>"u"||ju(e,n,t,l))return!0;if(l)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ce(e,n,t,l,s,r,a){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=s,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=r,this.removeEmptyString=a}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ce(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var ca=/[\-:]([a-z])/g;function ua(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(ca,ua);te[n]=new ce(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(ca,ua);te[n]=new ce(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(ca,ua);te[n]=new ce(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function pa(e,n,t,l){var s=te.hasOwnProperty(n)?te[n]:null;(s!==null?s.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(Cu(n,t,s,l)&&(t=null),l||s===null?ku(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):s.mustUseProperty?e[s.propertyName]=t===null?s.type===3?!1:"":t:(n=s.attributeName,l=s.attributeNamespace,t===null?e.removeAttribute(n):(s=s.type,t=s===3||s===4&&t===!0?"":""+t,l?e.setAttributeNS(l,n,t):e.setAttribute(n,t))))}var Xe=Eu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,hl=Symbol.for("react.element"),Bn=Symbol.for("react.portal"),An=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),ur=Symbol.for("react.profiler"),Do=Symbol.for("react.provider"),Wo=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),pr=Symbol.for("react.suspense"),gr=Symbol.for("react.suspense_list"),ha=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),$o=Symbol.for("react.offscreen"),di=Symbol.iterator;function bt(e){return e===null||typeof e!="object"?null:(e=di&&e[di]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Us;function Pt(e){if(Us===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Us=n&&n[1]||""}return`
`+Us+e}var Ms=!1;function Ds(e,n){if(!e||Ms)return"";Ms=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(c){var l=c}Reflect.construct(e,[],n)}else{try{n.call()}catch(c){l=c}e.call(n.prototype)}else{try{throw Error()}catch(c){l=c}e()}}catch(c){if(c&&l&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),r=l.stack.split(`
`),a=s.length-1,i=r.length-1;1<=a&&0<=i&&s[a]!==r[i];)i--;for(;1<=a&&0<=i;a--,i--)if(s[a]!==r[i]){if(a!==1||i!==1)do if(a--,i--,0>i||s[a]!==r[i]){var o=`
`+s[a].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=a&&0<=i);break}}}finally{Ms=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Pt(e):""}function Nu(e){switch(e.tag){case 5:return Pt(e.type);case 16:return Pt("Lazy");case 13:return Pt("Suspense");case 19:return Pt("SuspenseList");case 0:case 2:case 15:return e=Ds(e.type,!1),e;case 11:return e=Ds(e.type.render,!1),e;case 1:return e=Ds(e.type,!0),e;default:return""}}function vr(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case An:return"Fragment";case Bn:return"Portal";case ur:return"Profiler";case ga:return"StrictMode";case pr:return"Suspense";case gr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wo:return(e.displayName||"Context")+".Consumer";case Do:return(e._context.displayName||"Context")+".Provider";case va:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ha:return n=e.displayName||null,n!==null?n:vr(e.type)||"Memo";case Je:n=e._payload,e=e._init;try{return vr(e(n))}catch{}}return null}function Pu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vr(n);case 8:return n===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bo(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function _u(e){var n=Bo(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),l=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var s=t.get,r=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(a){l=""+a,r.call(this,a)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function xl(e){e._valueTracker||(e._valueTracker=_u(e))}function Ao(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),l="";return e&&(l=Bo(e)?e.checked?"true":"false":e.value),e=l,e!==t?(n.setValue(e),!0):!1}function Al(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hr(e,n){var t=n.checked;return B({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ci(e,n){var t=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;t=hn(n.value!=null?n.value:t),e._wrapperState={initialChecked:l,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Vo(e,n){n=n.checked,n!=null&&pa(e,"checked",n,!1)}function xr(e,n){Vo(e,n);var t=hn(n.value),l=n.type;if(t!=null)l==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fr(e,n.type,t):n.hasOwnProperty("defaultValue")&&fr(e,n.type,hn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ui(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fr(e,n,t){(n!=="number"||Al(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var _t=Array.isArray;function et(e,n,t,l){if(e=e.options,n){n={};for(var s=0;s<t.length;s++)n["$"+t[s]]=!0;for(t=0;t<e.length;t++)s=n.hasOwnProperty("$"+e[t].value),e[t].selected!==s&&(e[t].selected=s),s&&l&&(e[t].defaultSelected=!0)}else{for(t=""+hn(t),n=null,s=0;s<e.length;s++){if(e[s].value===t){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function mr(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return B({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pi(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(_t(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:hn(t)}}function Ho(e,n){var t=hn(n.value),l=hn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),l!=null&&(e.defaultValue=""+l)}function gi(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Qo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function br(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Qo(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var fl,Ko=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,l,s){MSApp.execUnsafeLocalFunction(function(){return e(n,t,l,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=fl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Bt(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Lt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fu=["Webkit","ms","Moz","O"];Object.keys(Lt).forEach(function(e){Fu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Lt[n]=Lt[e]})});function Yo(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Lt.hasOwnProperty(e)&&Lt[e]?(""+n).trim():n+"px"}function Go(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var l=t.indexOf("--")===0,s=Yo(t,n[t],l);t==="float"&&(t="cssFloat"),l?e.setProperty(t,s):e[t]=s}}var Ru=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yr(e,n){if(n){if(Ru[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function wr(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Er=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sr=null,nt=null,tt=null;function vi(e){if(e=dl(e)){if(typeof Sr!="function")throw Error(w(280));var n=e.stateNode;n&&(n=ys(n),Sr(e.stateNode,e.type,n))}}function Xo(e){nt?tt?tt.push(e):tt=[e]:nt=e}function qo(){if(nt){var e=nt,n=tt;if(tt=nt=null,vi(e),n)for(e=0;e<n.length;e++)vi(n[e])}}function Jo(e,n){return e(n)}function Zo(){}var Ws=!1;function ed(e,n,t){if(Ws)return e(n,t);Ws=!0;try{return Jo(e,n,t)}finally{Ws=!1,(nt!==null||tt!==null)&&(Zo(),qo())}}function At(e,n){var t=e.stateNode;if(t===null)return null;var l=ys(t);if(l===null)return null;t=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var kr=!1;if(Qe)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){kr=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{kr=!1}function Lu(e,n,t,l,s,r,a,i,o){var c=Array.prototype.slice.call(arguments,3);try{n.apply(t,c)}catch(h){this.onError(h)}}var Tt=!1,Vl=null,Hl=!1,jr=null,Tu={onError:function(e){Tt=!0,Vl=e}};function zu(e,n,t,l,s,r,a,i,o){Tt=!1,Vl=null,Lu.apply(Tu,arguments)}function Ou(e,n,t,l,s,r,a,i,o){if(zu.apply(this,arguments),Tt){if(Tt){var c=Vl;Tt=!1,Vl=null}else throw Error(w(198));Hl||(Hl=!0,jr=c)}}function Un(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function nd(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function hi(e){if(Un(e)!==e)throw Error(w(188))}function Iu(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,l=n;;){var s=t.return;if(s===null)break;var r=s.alternate;if(r===null){if(l=s.return,l!==null){t=l;continue}break}if(s.child===r.child){for(r=s.child;r;){if(r===t)return hi(s),e;if(r===l)return hi(s),n;r=r.sibling}throw Error(w(188))}if(t.return!==l.return)t=s,l=r;else{for(var a=!1,i=s.child;i;){if(i===t){a=!0,t=s,l=r;break}if(i===l){a=!0,l=s,t=r;break}i=i.sibling}if(!a){for(i=r.child;i;){if(i===t){a=!0,t=r,l=s;break}if(i===l){a=!0,l=r,t=s;break}i=i.sibling}if(!a)throw Error(w(189))}}if(t.alternate!==l)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function td(e){return e=Iu(e),e!==null?ld(e):null}function ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=ld(e);if(n!==null)return n;e=e.sibling}return null}var sd=be.unstable_scheduleCallback,xi=be.unstable_cancelCallback,Uu=be.unstable_shouldYield,Mu=be.unstable_requestPaint,Q=be.unstable_now,Du=be.unstable_getCurrentPriorityLevel,fa=be.unstable_ImmediatePriority,rd=be.unstable_UserBlockingPriority,Ql=be.unstable_NormalPriority,Wu=be.unstable_LowPriority,ad=be.unstable_IdlePriority,xs=null,De=null;function $u(e){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(xs,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Vu,Bu=Math.log,Au=Math.LN2;function Vu(e){return e>>>=0,e===0?32:31-(Bu(e)/Au|0)|0}var ml=64,bl=4194304;function Ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Kl(e,n){var t=e.pendingLanes;if(t===0)return 0;var l=0,s=e.suspendedLanes,r=e.pingedLanes,a=t&268435455;if(a!==0){var i=a&~s;i!==0?l=Ft(i):(r&=a,r!==0&&(l=Ft(r)))}else a=t&~s,a!==0?l=Ft(a):r!==0&&(l=Ft(r));if(l===0)return 0;if(n!==0&&n!==l&&!(n&s)&&(s=l&-l,r=n&-n,s>=r||s===16&&(r&4194240)!==0))return n;if(l&4&&(l|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=l;0<n;)t=31-Te(n),s=1<<t,l|=e[t],n&=~s;return l}function Hu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qu(e,n){for(var t=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,r=e.pendingLanes;0<r;){var a=31-Te(r),i=1<<a,o=s[a];o===-1?(!(i&t)||i&l)&&(s[a]=Hu(i,n)):o<=n&&(e.expiredLanes|=i),r&=~i}}function Cr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=ml;return ml<<=1,!(ml&4194240)&&(ml=64),e}function $s(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function il(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Te(n),e[n]=t}function Ku(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<t;){var s=31-Te(t),r=1<<s;n[s]=0,l[s]=-1,e[s]=-1,t&=~r}}function ma(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var l=31-Te(t),s=1<<l;s&n|e[l]&n&&(e[l]|=n),t&=~s}}var O=0;function od(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var dd,ba,cd,ud,pd,Nr=!1,yl=[],rn=null,an=null,on=null,Vt=new Map,Ht=new Map,en=[],Yu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fi(e,n){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Vt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ht.delete(n.pointerId)}}function wt(e,n,t,l,s,r){return e===null||e.nativeEvent!==r?(e={blockedOn:n,domEventName:t,eventSystemFlags:l,nativeEvent:r,targetContainers:[s]},n!==null&&(n=dl(n),n!==null&&ba(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function Gu(e,n,t,l,s){switch(n){case"focusin":return rn=wt(rn,e,n,t,l,s),!0;case"dragenter":return an=wt(an,e,n,t,l,s),!0;case"mouseover":return on=wt(on,e,n,t,l,s),!0;case"pointerover":var r=s.pointerId;return Vt.set(r,wt(Vt.get(r)||null,e,n,t,l,s)),!0;case"gotpointercapture":return r=s.pointerId,Ht.set(r,wt(Ht.get(r)||null,e,n,t,l,s)),!0}return!1}function gd(e){var n=Cn(e.target);if(n!==null){var t=Un(n);if(t!==null){if(n=t.tag,n===13){if(n=nd(t),n!==null){e.blockedOn=n,pd(e.priority,function(){cd(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Pr(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Er=l,t.target.dispatchEvent(l),Er=null}else return n=dl(t),n!==null&&ba(n),e.blockedOn=t,!1;n.shift()}return!0}function mi(e,n,t){Tl(e)&&t.delete(n)}function Xu(){Nr=!1,rn!==null&&Tl(rn)&&(rn=null),an!==null&&Tl(an)&&(an=null),on!==null&&Tl(on)&&(on=null),Vt.forEach(mi),Ht.forEach(mi)}function Et(e,n){e.blockedOn===n&&(e.blockedOn=null,Nr||(Nr=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Xu)))}function Qt(e){function n(s){return Et(s,e)}if(0<yl.length){Et(yl[0],e);for(var t=1;t<yl.length;t++){var l=yl[t];l.blockedOn===e&&(l.blockedOn=null)}}for(rn!==null&&Et(rn,e),an!==null&&Et(an,e),on!==null&&Et(on,e),Vt.forEach(n),Ht.forEach(n),t=0;t<en.length;t++)l=en[t],l.blockedOn===e&&(l.blockedOn=null);for(;0<en.length&&(t=en[0],t.blockedOn===null);)gd(t),t.blockedOn===null&&en.shift()}var lt=Xe.ReactCurrentBatchConfig,Yl=!0;function qu(e,n,t,l){var s=O,r=lt.transition;lt.transition=null;try{O=1,ya(e,n,t,l)}finally{O=s,lt.transition=r}}function Ju(e,n,t,l){var s=O,r=lt.transition;lt.transition=null;try{O=4,ya(e,n,t,l)}finally{O=s,lt.transition=r}}function ya(e,n,t,l){if(Yl){var s=Pr(e,n,t,l);if(s===null)qs(e,n,l,Gl,t),fi(e,l);else if(Gu(s,e,n,t,l))l.stopPropagation();else if(fi(e,l),n&4&&-1<Yu.indexOf(e)){for(;s!==null;){var r=dl(s);if(r!==null&&dd(r),r=Pr(e,n,t,l),r===null&&qs(e,n,l,Gl,t),r===s)break;s=r}s!==null&&l.stopPropagation()}else qs(e,n,l,null,t)}}var Gl=null;function Pr(e,n,t,l){if(Gl=null,e=xa(l),e=Cn(e),e!==null)if(n=Un(e),n===null)e=null;else if(t=n.tag,t===13){if(e=nd(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Gl=e,null}function vd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Du()){case fa:return 1;case rd:return 4;case Ql:case Wu:return 16;case ad:return 536870912;default:return 16}default:return 16}}var tn=null,wa=null,zl=null;function hd(){if(zl)return zl;var e,n=wa,t=n.length,l,s="value"in tn?tn.value:tn.textContent,r=s.length;for(e=0;e<t&&n[e]===s[e];e++);var a=t-e;for(l=1;l<=a&&n[t-l]===s[r-l];l++);return zl=s.slice(e,1<l?1-l:void 0)}function Ol(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wl(){return!0}function bi(){return!1}function we(e){function n(t,l,s,r,a){this._reactName=t,this._targetInst=s,this.type=l,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(r):r[i]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?wl:bi,this.isPropagationStopped=bi,this}return B(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var vt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ea=we(vt),ol=B({},vt,{view:0,detail:0}),Zu=we(ol),Bs,As,St,fs=B({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==St&&(St&&e.type==="mousemove"?(Bs=e.screenX-St.screenX,As=e.screenY-St.screenY):As=Bs=0,St=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:As}}),yi=we(fs),ep=B({},fs,{dataTransfer:0}),np=we(ep),tp=B({},ol,{relatedTarget:0}),Vs=we(tp),lp=B({},vt,{animationName:0,elapsedTime:0,pseudoElement:0}),sp=we(lp),rp=B({},vt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ap=we(rp),ip=B({},vt,{data:0}),wi=we(ip),op={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function up(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=cp[e])?!!n[e]:!1}function Sa(){return up}var pp=B({},ol,{key:function(e){if(e.key){var n=op[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sa,charCode:function(e){return e.type==="keypress"?Ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gp=we(pp),vp=B({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ei=we(vp),hp=B({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sa}),xp=we(hp),fp=B({},vt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mp=we(fp),bp=B({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yp=we(bp),wp=[9,13,27,32],ka=Qe&&"CompositionEvent"in window,zt=null;Qe&&"documentMode"in document&&(zt=document.documentMode);var Ep=Qe&&"TextEvent"in window&&!zt,xd=Qe&&(!ka||zt&&8<zt&&11>=zt),Si=" ",ki=!1;function fd(e,n){switch(e){case"keyup":return wp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vn=!1;function Sp(e,n){switch(e){case"compositionend":return md(n);case"keypress":return n.which!==32?null:(ki=!0,Si);case"textInput":return e=n.data,e===Si&&ki?null:e;default:return null}}function kp(e,n){if(Vn)return e==="compositionend"||!ka&&fd(e,n)?(e=hd(),zl=wa=tn=null,Vn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return xd&&n.locale!=="ko"?null:n.data;default:return null}}var jp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ji(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!jp[e.type]:n==="textarea"}function bd(e,n,t,l){Xo(l),n=Xl(n,"onChange"),0<n.length&&(t=new Ea("onChange","change",null,t,l),e.push({event:t,listeners:n}))}var Ot=null,Kt=null;function Cp(e){Fd(e,0)}function ms(e){var n=Kn(e);if(Ao(n))return e}function Np(e,n){if(e==="change")return n}var yd=!1;if(Qe){var Hs;if(Qe){var Qs="oninput"in document;if(!Qs){var Ci=document.createElement("div");Ci.setAttribute("oninput","return;"),Qs=typeof Ci.oninput=="function"}Hs=Qs}else Hs=!1;yd=Hs&&(!document.documentMode||9<document.documentMode)}function Ni(){Ot&&(Ot.detachEvent("onpropertychange",wd),Kt=Ot=null)}function wd(e){if(e.propertyName==="value"&&ms(Kt)){var n=[];bd(n,Kt,e,xa(e)),ed(Cp,n)}}function Pp(e,n,t){e==="focusin"?(Ni(),Ot=n,Kt=t,Ot.attachEvent("onpropertychange",wd)):e==="focusout"&&Ni()}function _p(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ms(Kt)}function Fp(e,n){if(e==="click")return ms(n)}function Rp(e,n){if(e==="input"||e==="change")return ms(n)}function Lp(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Lp;function Yt(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),l=Object.keys(n);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var s=t[l];if(!cr.call(n,s)||!Oe(e[s],n[s]))return!1}return!0}function Pi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _i(e,n){var t=Pi(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=n&&l>=n)return{node:t,offset:n-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Pi(t)}}function Ed(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ed(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Sd(){for(var e=window,n=Al();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Al(e.document)}return n}function ja(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Tp(e){var n=Sd(),t=e.focusedElem,l=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&Ed(t.ownerDocument.documentElement,t)){if(l!==null&&ja(t)){if(n=l.start,e=l.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=t.textContent.length,r=Math.min(l.start,s);l=l.end===void 0?r:Math.min(l.end,s),!e.extend&&r>l&&(s=l,l=r,r=s),s=_i(t,r);var a=_i(t,l);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),r>l?(e.addRange(n),e.extend(a.node,a.offset)):(n.setEnd(a.node,a.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zp=Qe&&"documentMode"in document&&11>=document.documentMode,Hn=null,_r=null,It=null,Fr=!1;function Fi(e,n,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Fr||Hn==null||Hn!==Al(l)||(l=Hn,"selectionStart"in l&&ja(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),It&&Yt(It,l)||(It=l,l=Xl(_r,"onSelect"),0<l.length&&(n=new Ea("onSelect","select",null,n,t),e.push({event:n,listeners:l}),n.target=Hn)))}function El(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Qn={animationend:El("Animation","AnimationEnd"),animationiteration:El("Animation","AnimationIteration"),animationstart:El("Animation","AnimationStart"),transitionend:El("Transition","TransitionEnd")},Ks={},kd={};Qe&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function bs(e){if(Ks[e])return Ks[e];if(!Qn[e])return e;var n=Qn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in kd)return Ks[e]=n[t];return e}var jd=bs("animationend"),Cd=bs("animationiteration"),Nd=bs("animationstart"),Pd=bs("transitionend"),_d=new Map,Ri="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fn(e,n){_d.set(e,n),In(n,[e])}for(var Ys=0;Ys<Ri.length;Ys++){var Gs=Ri[Ys],Op=Gs.toLowerCase(),Ip=Gs[0].toUpperCase()+Gs.slice(1);fn(Op,"on"+Ip)}fn(jd,"onAnimationEnd");fn(Cd,"onAnimationIteration");fn(Nd,"onAnimationStart");fn("dblclick","onDoubleClick");fn("focusin","onFocus");fn("focusout","onBlur");fn(Pd,"onTransitionEnd");at("onMouseEnter",["mouseout","mouseover"]);at("onMouseLeave",["mouseout","mouseover"]);at("onPointerEnter",["pointerout","pointerover"]);at("onPointerLeave",["pointerout","pointerover"]);In("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));In("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));In("onBeforeInput",["compositionend","keypress","textInput","paste"]);In("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));In("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));In("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Up=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rt));function Li(e,n,t){var l=e.type||"unknown-event";e.currentTarget=t,Ou(l,n,void 0,e),e.currentTarget=null}function Fd(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],s=l.event;l=l.listeners;e:{var r=void 0;if(n)for(var a=l.length-1;0<=a;a--){var i=l[a],o=i.instance,c=i.currentTarget;if(i=i.listener,o!==r&&s.isPropagationStopped())break e;Li(s,i,c),r=o}else for(a=0;a<l.length;a++){if(i=l[a],o=i.instance,c=i.currentTarget,i=i.listener,o!==r&&s.isPropagationStopped())break e;Li(s,i,c),r=o}}}if(Hl)throw e=jr,Hl=!1,jr=null,e}function U(e,n){var t=n[Or];t===void 0&&(t=n[Or]=new Set);var l=e+"__bubble";t.has(l)||(Rd(n,e,2,!1),t.add(l))}function Xs(e,n,t){var l=0;n&&(l|=4),Rd(t,e,l,n)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Gt(e){if(!e[Sl]){e[Sl]=!0,Mo.forEach(function(t){t!=="selectionchange"&&(Up.has(t)||Xs(t,!1,e),Xs(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Sl]||(n[Sl]=!0,Xs("selectionchange",!1,n))}}function Rd(e,n,t,l){switch(vd(n)){case 1:var s=qu;break;case 4:s=Ju;break;default:s=ya}t=s.bind(null,n,t,e),s=void 0,!kr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(n,t,{capture:!0,passive:s}):e.addEventListener(n,t,!0):s!==void 0?e.addEventListener(n,t,{passive:s}):e.addEventListener(n,t,!1)}function qs(e,n,t,l,s){var r=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var i=l.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(a===4)for(a=l.return;a!==null;){var o=a.tag;if((o===3||o===4)&&(o=a.stateNode.containerInfo,o===s||o.nodeType===8&&o.parentNode===s))return;a=a.return}for(;i!==null;){if(a=Cn(i),a===null)return;if(o=a.tag,o===5||o===6){l=r=a;continue e}i=i.parentNode}}l=l.return}ed(function(){var c=r,h=xa(t),p=[];e:{var x=_d.get(e);if(x!==void 0){var m=Ea,b=e;switch(e){case"keypress":if(Ol(t)===0)break e;case"keydown":case"keyup":m=gp;break;case"focusin":b="focus",m=Vs;break;case"focusout":b="blur",m=Vs;break;case"beforeblur":case"afterblur":m=Vs;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yi;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=xp;break;case jd:case Cd:case Nd:m=sp;break;case Pd:m=mp;break;case"scroll":m=Zu;break;case"wheel":m=yp;break;case"copy":case"cut":case"paste":m=ap;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Ei}var y=(n&4)!==0,k=!y&&e==="scroll",g=y?x!==null?x+"Capture":null:x;y=[];for(var u=c,v;u!==null;){v=u;var f=v.stateNode;if(v.tag===5&&f!==null&&(v=f,g!==null&&(f=At(u,g),f!=null&&y.push(Xt(u,f,v)))),k)break;u=u.return}0<y.length&&(x=new m(x,b,null,t,h),p.push({event:x,listeners:y}))}}if(!(n&7)){e:{if(x=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",x&&t!==Er&&(b=t.relatedTarget||t.fromElement)&&(Cn(b)||b[Ke]))break e;if((m||x)&&(x=h.window===h?h:(x=h.ownerDocument)?x.defaultView||x.parentWindow:window,m?(b=t.relatedTarget||t.toElement,m=c,b=b?Cn(b):null,b!==null&&(k=Un(b),b!==k||b.tag!==5&&b.tag!==6)&&(b=null)):(m=null,b=c),m!==b)){if(y=yi,f="onMouseLeave",g="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ei,f="onPointerLeave",g="onPointerEnter",u="pointer"),k=m==null?x:Kn(m),v=b==null?x:Kn(b),x=new y(f,u+"leave",m,t,h),x.target=k,x.relatedTarget=v,f=null,Cn(h)===c&&(y=new y(g,u+"enter",b,t,h),y.target=v,y.relatedTarget=k,f=y),k=f,m&&b)n:{for(y=m,g=b,u=0,v=y;v;v=$n(v))u++;for(v=0,f=g;f;f=$n(f))v++;for(;0<u-v;)y=$n(y),u--;for(;0<v-u;)g=$n(g),v--;for(;u--;){if(y===g||g!==null&&y===g.alternate)break n;y=$n(y),g=$n(g)}y=null}else y=null;m!==null&&Ti(p,x,m,y,!1),b!==null&&k!==null&&Ti(p,k,b,y,!0)}}e:{if(x=c?Kn(c):window,m=x.nodeName&&x.nodeName.toLowerCase(),m==="select"||m==="input"&&x.type==="file")var S=Np;else if(ji(x))if(yd)S=Rp;else{S=_p;var N=Pp}else(m=x.nodeName)&&m.toLowerCase()==="input"&&(x.type==="checkbox"||x.type==="radio")&&(S=Fp);if(S&&(S=S(e,c))){bd(p,S,t,h);break e}N&&N(e,x,c),e==="focusout"&&(N=x._wrapperState)&&N.controlled&&x.type==="number"&&fr(x,"number",x.value)}switch(N=c?Kn(c):window,e){case"focusin":(ji(N)||N.contentEditable==="true")&&(Hn=N,_r=c,It=null);break;case"focusout":It=_r=Hn=null;break;case"mousedown":Fr=!0;break;case"contextmenu":case"mouseup":case"dragend":Fr=!1,Fi(p,t,h);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":Fi(p,t,h)}var P;if(ka)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Vn?fd(e,t)&&(_="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(_="onCompositionStart");_&&(xd&&t.locale!=="ko"&&(Vn||_!=="onCompositionStart"?_==="onCompositionEnd"&&Vn&&(P=hd()):(tn=h,wa="value"in tn?tn.value:tn.textContent,Vn=!0)),N=Xl(c,_),0<N.length&&(_=new wi(_,e,null,t,h),p.push({event:_,listeners:N}),P?_.data=P:(P=md(t),P!==null&&(_.data=P)))),(P=Ep?Sp(e,t):kp(e,t))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(h=new wi("onBeforeInput","beforeinput",null,t,h),p.push({event:h,listeners:c}),h.data=P))}Fd(p,n)})}function Xt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Xl(e,n){for(var t=n+"Capture",l=[];e!==null;){var s=e,r=s.stateNode;s.tag===5&&r!==null&&(s=r,r=At(e,t),r!=null&&l.unshift(Xt(e,r,s)),r=At(e,n),r!=null&&l.push(Xt(e,r,s))),e=e.return}return l}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ti(e,n,t,l,s){for(var r=n._reactName,a=[];t!==null&&t!==l;){var i=t,o=i.alternate,c=i.stateNode;if(o!==null&&o===l)break;i.tag===5&&c!==null&&(i=c,s?(o=At(t,r),o!=null&&a.unshift(Xt(t,o,i))):s||(o=At(t,r),o!=null&&a.push(Xt(t,o,i)))),t=t.return}a.length!==0&&e.push({event:n,listeners:a})}var Mp=/\r\n?/g,Dp=/\u0000|\uFFFD/g;function zi(e){return(typeof e=="string"?e:""+e).replace(Mp,`
`).replace(Dp,"")}function kl(e,n,t){if(n=zi(n),zi(e)!==n&&t)throw Error(w(425))}function ql(){}var Rr=null,Lr=null;function Tr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zr=typeof setTimeout=="function"?setTimeout:void 0,Wp=typeof clearTimeout=="function"?clearTimeout:void 0,Oi=typeof Promise=="function"?Promise:void 0,$p=typeof queueMicrotask=="function"?queueMicrotask:typeof Oi<"u"?function(e){return Oi.resolve(null).then(e).catch(Bp)}:zr;function Bp(e){setTimeout(function(){throw e})}function Js(e,n){var t=n,l=0;do{var s=t.nextSibling;if(e.removeChild(t),s&&s.nodeType===8)if(t=s.data,t==="/$"){if(l===0){e.removeChild(s),Qt(n);return}l--}else t!=="$"&&t!=="$?"&&t!=="$!"||l++;t=s}while(t);Qt(n)}function dn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Ii(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var ht=Math.random().toString(36).slice(2),Me="__reactFiber$"+ht,qt="__reactProps$"+ht,Ke="__reactContainer$"+ht,Or="__reactEvents$"+ht,Ap="__reactListeners$"+ht,Vp="__reactHandles$"+ht;function Cn(e){var n=e[Me];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ke]||t[Me]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Ii(e);e!==null;){if(t=e[Me])return t;e=Ii(e)}return n}e=t,t=e.parentNode}return null}function dl(e){return e=e[Me]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function ys(e){return e[qt]||null}var Ir=[],Yn=-1;function mn(e){return{current:e}}function M(e){0>Yn||(e.current=Ir[Yn],Ir[Yn]=null,Yn--)}function I(e,n){Yn++,Ir[Yn]=e.current,e.current=n}var xn={},ae=mn(xn),ge=mn(!1),Rn=xn;function it(e,n){var t=e.type.contextTypes;if(!t)return xn;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var s={},r;for(r in t)s[r]=n[r];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function Jl(){M(ge),M(ae)}function Ui(e,n,t){if(ae.current!==xn)throw Error(w(168));I(ae,n),I(ge,t)}function Ld(e,n,t){var l=e.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return t;l=l.getChildContext();for(var s in l)if(!(s in n))throw Error(w(108,Pu(e)||"Unknown",s));return B({},t,l)}function Zl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xn,Rn=ae.current,I(ae,e),I(ge,ge.current),!0}function Mi(e,n,t){var l=e.stateNode;if(!l)throw Error(w(169));t?(e=Ld(e,n,Rn),l.__reactInternalMemoizedMergedChildContext=e,M(ge),M(ae),I(ae,e)):M(ge),I(ge,t)}var Be=null,ws=!1,Zs=!1;function Td(e){Be===null?Be=[e]:Be.push(e)}function Hp(e){ws=!0,Td(e)}function bn(){if(!Zs&&Be!==null){Zs=!0;var e=0,n=O;try{var t=Be;for(O=1;e<t.length;e++){var l=t[e];do l=l(!0);while(l!==null)}Be=null,ws=!1}catch(s){throw Be!==null&&(Be=Be.slice(e+1)),sd(fa,bn),s}finally{O=n,Zs=!1}}return null}var Gn=[],Xn=0,es=null,ns=0,Ee=[],Se=0,Ln=null,Ae=1,Ve="";function kn(e,n){Gn[Xn++]=ns,Gn[Xn++]=es,es=e,ns=n}function zd(e,n,t){Ee[Se++]=Ae,Ee[Se++]=Ve,Ee[Se++]=Ln,Ln=e;var l=Ae;e=Ve;var s=32-Te(l)-1;l&=~(1<<s),t+=1;var r=32-Te(n)+s;if(30<r){var a=s-s%5;r=(l&(1<<a)-1).toString(32),l>>=a,s-=a,Ae=1<<32-Te(n)+s|t<<s|l,Ve=r+e}else Ae=1<<r|t<<s|l,Ve=e}function Ca(e){e.return!==null&&(kn(e,1),zd(e,1,0))}function Na(e){for(;e===es;)es=Gn[--Xn],Gn[Xn]=null,ns=Gn[--Xn],Gn[Xn]=null;for(;e===Ln;)Ln=Ee[--Se],Ee[Se]=null,Ve=Ee[--Se],Ee[Se]=null,Ae=Ee[--Se],Ee[Se]=null}var me=null,fe=null,D=!1,Le=null;function Od(e,n){var t=ke(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Di(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,me=e,fe=dn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,me=e,fe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=Ln!==null?{id:Ae,overflow:Ve}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=ke(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,me=e,fe=null,!0):!1;default:return!1}}function Ur(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mr(e){if(D){var n=fe;if(n){var t=n;if(!Di(e,n)){if(Ur(e))throw Error(w(418));n=dn(t.nextSibling);var l=me;n&&Di(e,n)?Od(l,t):(e.flags=e.flags&-4097|2,D=!1,me=e)}}else{if(Ur(e))throw Error(w(418));e.flags=e.flags&-4097|2,D=!1,me=e}}}function Wi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;me=e}function jl(e){if(e!==me)return!1;if(!D)return Wi(e),D=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!Tr(e.type,e.memoizedProps)),n&&(n=fe)){if(Ur(e))throw Id(),Error(w(418));for(;n;)Od(e,n),n=dn(n.nextSibling)}if(Wi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){fe=dn(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}fe=null}}else fe=me?dn(e.stateNode.nextSibling):null;return!0}function Id(){for(var e=fe;e;)e=dn(e.nextSibling)}function ot(){fe=me=null,D=!1}function Pa(e){Le===null?Le=[e]:Le.push(e)}var Qp=Xe.ReactCurrentBatchConfig;function kt(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var l=t.stateNode}if(!l)throw Error(w(147,e));var s=l,r=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===r?n.ref:(n=function(a){var i=s.refs;a===null?delete i[r]:i[r]=a},n._stringRef=r,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Cl(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function $i(e){var n=e._init;return n(e._payload)}function Ud(e){function n(g,u){if(e){var v=g.deletions;v===null?(g.deletions=[u],g.flags|=16):v.push(u)}}function t(g,u){if(!e)return null;for(;u!==null;)n(g,u),u=u.sibling;return null}function l(g,u){for(g=new Map;u!==null;)u.key!==null?g.set(u.key,u):g.set(u.index,u),u=u.sibling;return g}function s(g,u){return g=gn(g,u),g.index=0,g.sibling=null,g}function r(g,u,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<u?(g.flags|=2,u):v):(g.flags|=2,u)):(g.flags|=1048576,u)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function i(g,u,v,f){return u===null||u.tag!==6?(u=ar(v,g.mode,f),u.return=g,u):(u=s(u,v),u.return=g,u)}function o(g,u,v,f){var S=v.type;return S===An?h(g,u,v.props.children,f,v.key):u!==null&&(u.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&$i(S)===u.type)?(f=s(u,v.props),f.ref=kt(g,u,v),f.return=g,f):(f=Bl(v.type,v.key,v.props,null,g.mode,f),f.ref=kt(g,u,v),f.return=g,f)}function c(g,u,v,f){return u===null||u.tag!==4||u.stateNode.containerInfo!==v.containerInfo||u.stateNode.implementation!==v.implementation?(u=ir(v,g.mode,f),u.return=g,u):(u=s(u,v.children||[]),u.return=g,u)}function h(g,u,v,f,S){return u===null||u.tag!==7?(u=Fn(v,g.mode,f,S),u.return=g,u):(u=s(u,v),u.return=g,u)}function p(g,u,v){if(typeof u=="string"&&u!==""||typeof u=="number")return u=ar(""+u,g.mode,v),u.return=g,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case hl:return v=Bl(u.type,u.key,u.props,null,g.mode,v),v.ref=kt(g,null,u),v.return=g,v;case Bn:return u=ir(u,g.mode,v),u.return=g,u;case Je:var f=u._init;return p(g,f(u._payload),v)}if(_t(u)||bt(u))return u=Fn(u,g.mode,v,null),u.return=g,u;Cl(g,u)}return null}function x(g,u,v,f){var S=u!==null?u.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return S!==null?null:i(g,u,""+v,f);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:return v.key===S?o(g,u,v,f):null;case Bn:return v.key===S?c(g,u,v,f):null;case Je:return S=v._init,x(g,u,S(v._payload),f)}if(_t(v)||bt(v))return S!==null?null:h(g,u,v,f,null);Cl(g,v)}return null}function m(g,u,v,f,S){if(typeof f=="string"&&f!==""||typeof f=="number")return g=g.get(v)||null,i(u,g,""+f,S);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case hl:return g=g.get(f.key===null?v:f.key)||null,o(u,g,f,S);case Bn:return g=g.get(f.key===null?v:f.key)||null,c(u,g,f,S);case Je:var N=f._init;return m(g,u,v,N(f._payload),S)}if(_t(f)||bt(f))return g=g.get(v)||null,h(u,g,f,S,null);Cl(u,f)}return null}function b(g,u,v,f){for(var S=null,N=null,P=u,_=u=0,V=null;P!==null&&_<v.length;_++){P.index>_?(V=P,P=null):V=P.sibling;var T=x(g,P,v[_],f);if(T===null){P===null&&(P=V);break}e&&P&&T.alternate===null&&n(g,P),u=r(T,u,_),N===null?S=T:N.sibling=T,N=T,P=V}if(_===v.length)return t(g,P),D&&kn(g,_),S;if(P===null){for(;_<v.length;_++)P=p(g,v[_],f),P!==null&&(u=r(P,u,_),N===null?S=P:N.sibling=P,N=P);return D&&kn(g,_),S}for(P=l(g,P);_<v.length;_++)V=m(P,g,_,v[_],f),V!==null&&(e&&V.alternate!==null&&P.delete(V.key===null?_:V.key),u=r(V,u,_),N===null?S=V:N.sibling=V,N=V);return e&&P.forEach(function(Pe){return n(g,Pe)}),D&&kn(g,_),S}function y(g,u,v,f){var S=bt(v);if(typeof S!="function")throw Error(w(150));if(v=S.call(v),v==null)throw Error(w(151));for(var N=S=null,P=u,_=u=0,V=null,T=v.next();P!==null&&!T.done;_++,T=v.next()){P.index>_?(V=P,P=null):V=P.sibling;var Pe=x(g,P,T.value,f);if(Pe===null){P===null&&(P=V);break}e&&P&&Pe.alternate===null&&n(g,P),u=r(Pe,u,_),N===null?S=Pe:N.sibling=Pe,N=Pe,P=V}if(T.done)return t(g,P),D&&kn(g,_),S;if(P===null){for(;!T.done;_++,T=v.next())T=p(g,T.value,f),T!==null&&(u=r(T,u,_),N===null?S=T:N.sibling=T,N=T);return D&&kn(g,_),S}for(P=l(g,P);!T.done;_++,T=v.next())T=m(P,g,_,T.value,f),T!==null&&(e&&T.alternate!==null&&P.delete(T.key===null?_:T.key),u=r(T,u,_),N===null?S=T:N.sibling=T,N=T);return e&&P.forEach(function(ft){return n(g,ft)}),D&&kn(g,_),S}function k(g,u,v,f){if(typeof v=="object"&&v!==null&&v.type===An&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case hl:e:{for(var S=v.key,N=u;N!==null;){if(N.key===S){if(S=v.type,S===An){if(N.tag===7){t(g,N.sibling),u=s(N,v.props.children),u.return=g,g=u;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Je&&$i(S)===N.type){t(g,N.sibling),u=s(N,v.props),u.ref=kt(g,N,v),u.return=g,g=u;break e}t(g,N);break}else n(g,N);N=N.sibling}v.type===An?(u=Fn(v.props.children,g.mode,f,v.key),u.return=g,g=u):(f=Bl(v.type,v.key,v.props,null,g.mode,f),f.ref=kt(g,u,v),f.return=g,g=f)}return a(g);case Bn:e:{for(N=v.key;u!==null;){if(u.key===N)if(u.tag===4&&u.stateNode.containerInfo===v.containerInfo&&u.stateNode.implementation===v.implementation){t(g,u.sibling),u=s(u,v.children||[]),u.return=g,g=u;break e}else{t(g,u);break}else n(g,u);u=u.sibling}u=ir(v,g.mode,f),u.return=g,g=u}return a(g);case Je:return N=v._init,k(g,u,N(v._payload),f)}if(_t(v))return b(g,u,v,f);if(bt(v))return y(g,u,v,f);Cl(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,u!==null&&u.tag===6?(t(g,u.sibling),u=s(u,v),u.return=g,g=u):(t(g,u),u=ar(v,g.mode,f),u.return=g,g=u),a(g)):t(g,u)}return k}var dt=Ud(!0),Md=Ud(!1),ts=mn(null),ls=null,qn=null,_a=null;function Fa(){_a=qn=ls=null}function Ra(e){var n=ts.current;M(ts),e._currentValue=n}function Dr(e,n,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===t)break;e=e.return}}function st(e,n){ls=e,_a=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(pe=!0),e.firstContext=null)}function Ce(e){var n=e._currentValue;if(_a!==e)if(e={context:e,memoizedValue:n,next:null},qn===null){if(ls===null)throw Error(w(308));qn=e,ls.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return n}var Nn=null;function La(e){Nn===null?Nn=[e]:Nn.push(e)}function Dd(e,n,t,l){var s=n.interleaved;return s===null?(t.next=t,La(n)):(t.next=s.next,s.next=t),n.interleaved=t,Ye(e,l)}function Ye(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var Ze=!1;function Ta(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function He(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function cn(e,n,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,z&2){var s=l.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),l.pending=n,Ye(e,t)}return s=l.interleaved,s===null?(n.next=n,La(l)):(n.next=s.next,s.next=n),l.interleaved=n,Ye(e,t)}function Il(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,ma(e,t)}}function Bi(e,n){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var s=null,r=null;if(t=t.firstBaseUpdate,t!==null){do{var a={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};r===null?s=r=a:r=r.next=a,t=t.next}while(t!==null);r===null?s=r=n:r=r.next=n}else s=r=n;t={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:r,shared:l.shared,effects:l.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function ss(e,n,t,l){var s=e.updateQueue;Ze=!1;var r=s.firstBaseUpdate,a=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var o=i,c=o.next;o.next=null,a===null?r=c:a.next=c,a=o;var h=e.alternate;h!==null&&(h=h.updateQueue,i=h.lastBaseUpdate,i!==a&&(i===null?h.firstBaseUpdate=c:i.next=c,h.lastBaseUpdate=o))}if(r!==null){var p=s.baseState;a=0,h=c=o=null,i=r;do{var x=i.lane,m=i.eventTime;if((l&x)===x){h!==null&&(h=h.next={eventTime:m,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var b=e,y=i;switch(x=n,m=t,y.tag){case 1:if(b=y.payload,typeof b=="function"){p=b.call(m,p,x);break e}p=b;break e;case 3:b.flags=b.flags&-65537|128;case 0:if(b=y.payload,x=typeof b=="function"?b.call(m,p,x):b,x==null)break e;p=B({},p,x);break e;case 2:Ze=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,x=s.effects,x===null?s.effects=[i]:x.push(i))}else m={eventTime:m,lane:x,tag:i.tag,payload:i.payload,callback:i.callback,next:null},h===null?(c=h=m,o=p):h=h.next=m,a|=x;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;x=i,i=x.next,x.next=null,s.lastBaseUpdate=x,s.shared.pending=null}}while(!0);if(h===null&&(o=p),s.baseState=o,s.firstBaseUpdate=c,s.lastBaseUpdate=h,n=s.shared.interleaved,n!==null){s=n;do a|=s.lane,s=s.next;while(s!==n)}else r===null&&(s.shared.lanes=0);zn|=a,e.lanes=a,e.memoizedState=p}}function Ai(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var l=e[n],s=l.callback;if(s!==null){if(l.callback=null,l=t,typeof s!="function")throw Error(w(191,s));s.call(l)}}}var cl={},We=mn(cl),Jt=mn(cl),Zt=mn(cl);function Pn(e){if(e===cl)throw Error(w(174));return e}function za(e,n){switch(I(Zt,n),I(Jt,e),I(We,cl),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:br(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=br(n,e)}M(We),I(We,n)}function ct(){M(We),M(Jt),M(Zt)}function $d(e){Pn(Zt.current);var n=Pn(We.current),t=br(n,e.type);n!==t&&(I(Jt,e),I(We,t))}function Oa(e){Jt.current===e&&(M(We),M(Jt))}var W=mn(0);function rs(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var er=[];function Ia(){for(var e=0;e<er.length;e++)er[e]._workInProgressVersionPrimary=null;er.length=0}var Ul=Xe.ReactCurrentDispatcher,nr=Xe.ReactCurrentBatchConfig,Tn=0,$=null,G=null,J=null,as=!1,Ut=!1,el=0,Kp=0;function le(){throw Error(w(321))}function Ua(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Oe(e[t],n[t]))return!1;return!0}function Ma(e,n,t,l,s,r){if(Tn=r,$=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ul.current=e===null||e.memoizedState===null?qp:Jp,e=t(l,s),Ut){r=0;do{if(Ut=!1,el=0,25<=r)throw Error(w(301));r+=1,J=G=null,n.updateQueue=null,Ul.current=Zp,e=t(l,s)}while(Ut)}if(Ul.current=is,n=G!==null&&G.next!==null,Tn=0,J=G=$=null,as=!1,n)throw Error(w(300));return e}function Da(){var e=el!==0;return el=0,e}function Ue(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?$.memoizedState=J=e:J=J.next=e,J}function Ne(){if(G===null){var e=$.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var n=J===null?$.memoizedState:J.next;if(n!==null)J=n,G=e;else{if(e===null)throw Error(w(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?$.memoizedState=J=e:J=J.next=e}return J}function nl(e,n){return typeof n=="function"?n(e):n}function tr(e){var n=Ne(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var l=G,s=l.baseQueue,r=t.pending;if(r!==null){if(s!==null){var a=s.next;s.next=r.next,r.next=a}l.baseQueue=s=r,t.pending=null}if(s!==null){r=s.next,l=l.baseState;var i=a=null,o=null,c=r;do{var h=c.lane;if((Tn&h)===h)o!==null&&(o=o.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),l=c.hasEagerState?c.eagerState:e(l,c.action);else{var p={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};o===null?(i=o=p,a=l):o=o.next=p,$.lanes|=h,zn|=h}c=c.next}while(c!==null&&c!==r);o===null?a=l:o.next=i,Oe(l,n.memoizedState)||(pe=!0),n.memoizedState=l,n.baseState=a,n.baseQueue=o,t.lastRenderedState=l}if(e=t.interleaved,e!==null){s=e;do r=s.lane,$.lanes|=r,zn|=r,s=s.next;while(s!==e)}else s===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function lr(e){var n=Ne(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var l=t.dispatch,s=t.pending,r=n.memoizedState;if(s!==null){t.pending=null;var a=s=s.next;do r=e(r,a.action),a=a.next;while(a!==s);Oe(r,n.memoizedState)||(pe=!0),n.memoizedState=r,n.baseQueue===null&&(n.baseState=r),t.lastRenderedState=r}return[r,l]}function Bd(){}function Ad(e,n){var t=$,l=Ne(),s=n(),r=!Oe(l.memoizedState,s);if(r&&(l.memoizedState=s,pe=!0),l=l.queue,Wa(Qd.bind(null,t,l,e),[e]),l.getSnapshot!==n||r||J!==null&&J.memoizedState.tag&1){if(t.flags|=2048,tl(9,Hd.bind(null,t,l,s,n),void 0,null),Z===null)throw Error(w(349));Tn&30||Vd(t,n,s)}return s}function Vd(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hd(e,n,t,l){n.value=t,n.getSnapshot=l,Kd(n)&&Yd(e)}function Qd(e,n,t){return t(function(){Kd(n)&&Yd(e)})}function Kd(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Oe(e,t)}catch{return!0}}function Yd(e){var n=Ye(e,1);n!==null&&ze(n,e,1,-1)}function Vi(e){var n=Ue();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:nl,lastRenderedState:e},n.queue=e,e=e.dispatch=Xp.bind(null,$,e),[n.memoizedState,e]}function tl(e,n,t,l){return e={tag:e,create:n,destroy:t,deps:l,next:null},n=$.updateQueue,n===null?(n={lastEffect:null,stores:null},$.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,n.lastEffect=e)),e}function Gd(){return Ne().memoizedState}function Ml(e,n,t,l){var s=Ue();$.flags|=e,s.memoizedState=tl(1|n,t,void 0,l===void 0?null:l)}function Es(e,n,t,l){var s=Ne();l=l===void 0?null:l;var r=void 0;if(G!==null){var a=G.memoizedState;if(r=a.destroy,l!==null&&Ua(l,a.deps)){s.memoizedState=tl(n,t,r,l);return}}$.flags|=e,s.memoizedState=tl(1|n,t,r,l)}function Hi(e,n){return Ml(8390656,8,e,n)}function Wa(e,n){return Es(2048,8,e,n)}function Xd(e,n){return Es(4,2,e,n)}function qd(e,n){return Es(4,4,e,n)}function Jd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Zd(e,n,t){return t=t!=null?t.concat([e]):null,Es(4,4,Jd.bind(null,n,e),t)}function $a(){}function ec(e,n){var t=Ne();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Ua(n,l[1])?l[0]:(t.memoizedState=[e,n],e)}function nc(e,n){var t=Ne();n=n===void 0?null:n;var l=t.memoizedState;return l!==null&&n!==null&&Ua(n,l[1])?l[0]:(e=e(),t.memoizedState=[e,n],e)}function tc(e,n,t){return Tn&21?(Oe(t,n)||(t=id(),$.lanes|=t,zn|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=t)}function Yp(e,n){var t=O;O=t!==0&&4>t?t:4,e(!0);var l=nr.transition;nr.transition={};try{e(!1),n()}finally{O=t,nr.transition=l}}function lc(){return Ne().memoizedState}function Gp(e,n,t){var l=pn(e);if(t={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null},sc(e))rc(n,t);else if(t=Dd(e,n,t,l),t!==null){var s=oe();ze(t,e,l,s),ac(t,n,l)}}function Xp(e,n,t){var l=pn(e),s={lane:l,action:t,hasEagerState:!1,eagerState:null,next:null};if(sc(e))rc(n,s);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=n.lastRenderedReducer,r!==null))try{var a=n.lastRenderedState,i=r(a,t);if(s.hasEagerState=!0,s.eagerState=i,Oe(i,a)){var o=n.interleaved;o===null?(s.next=s,La(n)):(s.next=o.next,o.next=s),n.interleaved=s;return}}catch{}finally{}t=Dd(e,n,s,l),t!==null&&(s=oe(),ze(t,e,l,s),ac(t,n,l))}}function sc(e){var n=e.alternate;return e===$||n!==null&&n===$}function rc(e,n){Ut=as=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function ac(e,n,t){if(t&4194240){var l=n.lanes;l&=e.pendingLanes,t|=l,n.lanes=t,ma(e,t)}}var is={readContext:Ce,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},qp={readContext:Ce,useCallback:function(e,n){return Ue().memoizedState=[e,n===void 0?null:n],e},useContext:Ce,useEffect:Hi,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Ml(4194308,4,Jd.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Ml(4194308,4,e,n)},useInsertionEffect:function(e,n){return Ml(4,2,e,n)},useMemo:function(e,n){var t=Ue();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var l=Ue();return n=t!==void 0?t(n):n,l.memoizedState=l.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Gp.bind(null,$,e),[l.memoizedState,e]},useRef:function(e){var n=Ue();return e={current:e},n.memoizedState=e},useState:Vi,useDebugValue:$a,useDeferredValue:function(e){return Ue().memoizedState=e},useTransition:function(){var e=Vi(!1),n=e[0];return e=Yp.bind(null,e[1]),Ue().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var l=$,s=Ue();if(D){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),Z===null)throw Error(w(349));Tn&30||Vd(l,n,t)}s.memoizedState=t;var r={value:t,getSnapshot:n};return s.queue=r,Hi(Qd.bind(null,l,r,e),[e]),l.flags|=2048,tl(9,Hd.bind(null,l,r,t,n),void 0,null),t},useId:function(){var e=Ue(),n=Z.identifierPrefix;if(D){var t=Ve,l=Ae;t=(l&~(1<<32-Te(l)-1)).toString(32)+t,n=":"+n+"R"+t,t=el++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Kp++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Jp={readContext:Ce,useCallback:ec,useContext:Ce,useEffect:Wa,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:qd,useMemo:nc,useReducer:tr,useRef:Gd,useState:function(){return tr(nl)},useDebugValue:$a,useDeferredValue:function(e){var n=Ne();return tc(n,G.memoizedState,e)},useTransition:function(){var e=tr(nl)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Bd,useSyncExternalStore:Ad,useId:lc,unstable_isNewReconciler:!1},Zp={readContext:Ce,useCallback:ec,useContext:Ce,useEffect:Wa,useImperativeHandle:Zd,useInsertionEffect:Xd,useLayoutEffect:qd,useMemo:nc,useReducer:lr,useRef:Gd,useState:function(){return lr(nl)},useDebugValue:$a,useDeferredValue:function(e){var n=Ne();return G===null?n.memoizedState=e:tc(n,G.memoizedState,e)},useTransition:function(){var e=lr(nl)[0],n=Ne().memoizedState;return[e,n]},useMutableSource:Bd,useSyncExternalStore:Ad,useId:lc,unstable_isNewReconciler:!1};function Fe(e,n){if(e&&e.defaultProps){n=B({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Wr(e,n,t,l){n=e.memoizedState,t=t(l,n),t=t==null?n:B({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Ss={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var l=oe(),s=pn(e),r=He(l,s);r.payload=n,t!=null&&(r.callback=t),n=cn(e,r,s),n!==null&&(ze(n,e,s,l),Il(n,e,s))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var l=oe(),s=pn(e),r=He(l,s);r.tag=1,r.payload=n,t!=null&&(r.callback=t),n=cn(e,r,s),n!==null&&(ze(n,e,s,l),Il(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=oe(),l=pn(e),s=He(t,l);s.tag=2,n!=null&&(s.callback=n),n=cn(e,s,l),n!==null&&(ze(n,e,l,t),Il(n,e,l))}};function Qi(e,n,t,l,s,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,r,a):n.prototype&&n.prototype.isPureReactComponent?!Yt(t,l)||!Yt(s,r):!0}function ic(e,n,t){var l=!1,s=xn,r=n.contextType;return typeof r=="object"&&r!==null?r=Ce(r):(s=ve(n)?Rn:ae.current,l=n.contextTypes,r=(l=l!=null)?it(e,s):xn),n=new n(t,r),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ss,e.stateNode=n,n._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=r),n}function Ki(e,n,t,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,l),n.state!==e&&Ss.enqueueReplaceState(n,n.state,null)}function $r(e,n,t,l){var s=e.stateNode;s.props=t,s.state=e.memoizedState,s.refs={},Ta(e);var r=n.contextType;typeof r=="object"&&r!==null?s.context=Ce(r):(r=ve(n)?Rn:ae.current,s.context=it(e,r)),s.state=e.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Wr(e,n,r,t),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Ss.enqueueReplaceState(s,s.state,null),ss(e,t,s,l),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function ut(e,n){try{var t="",l=n;do t+=Nu(l),l=l.return;while(l);var s=t}catch(r){s=`
Error generating stack: `+r.message+`
`+r.stack}return{value:e,source:n,stack:s,digest:null}}function sr(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function Br(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var eg=typeof WeakMap=="function"?WeakMap:Map;function oc(e,n,t){t=He(-1,t),t.tag=3,t.payload={element:null};var l=n.value;return t.callback=function(){ds||(ds=!0,Jr=l),Br(e,n)},t}function dc(e,n,t){t=He(-1,t),t.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var s=n.value;t.payload=function(){return l(s)},t.callback=function(){Br(e,n)}}var r=e.stateNode;return r!==null&&typeof r.componentDidCatch=="function"&&(t.callback=function(){Br(e,n),typeof l!="function"&&(un===null?un=new Set([this]):un.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})}),t}function Yi(e,n,t){var l=e.pingCache;if(l===null){l=e.pingCache=new eg;var s=new Set;l.set(n,s)}else s=l.get(n),s===void 0&&(s=new Set,l.set(n,s));s.has(t)||(s.add(t),e=vg.bind(null,e,n,t),n.then(e,e))}function Gi(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Xi(e,n,t,l,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=He(-1,1),n.tag=2,cn(t,n,1))),t.lanes|=1),e)}var ng=Xe.ReactCurrentOwner,pe=!1;function ie(e,n,t,l){n.child=e===null?Md(n,null,t,l):dt(n,e.child,t,l)}function qi(e,n,t,l,s){t=t.render;var r=n.ref;return st(n,s),l=Ma(e,n,t,l,r,s),t=Da(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Ge(e,n,s)):(D&&t&&Ca(n),n.flags|=1,ie(e,n,l,s),n.child)}function Ji(e,n,t,l,s){if(e===null){var r=t.type;return typeof r=="function"&&!Ga(r)&&r.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=r,cc(e,n,r,l,s)):(e=Bl(t.type,null,l,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(r=e.child,!(e.lanes&s)){var a=r.memoizedProps;if(t=t.compare,t=t!==null?t:Yt,t(a,l)&&e.ref===n.ref)return Ge(e,n,s)}return n.flags|=1,e=gn(r,l),e.ref=n.ref,e.return=n,n.child=e}function cc(e,n,t,l,s){if(e!==null){var r=e.memoizedProps;if(Yt(r,l)&&e.ref===n.ref)if(pe=!1,n.pendingProps=l=r,(e.lanes&s)!==0)e.flags&131072&&(pe=!0);else return n.lanes=e.lanes,Ge(e,n,s)}return Ar(e,n,t,l,s)}function uc(e,n,t){var l=n.pendingProps,s=l.children,r=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Zn,xe),xe|=t;else{if(!(t&1073741824))return e=r!==null?r.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,I(Zn,xe),xe|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=r!==null?r.baseLanes:t,I(Zn,xe),xe|=l}else r!==null?(l=r.baseLanes|t,n.memoizedState=null):l=t,I(Zn,xe),xe|=l;return ie(e,n,s,t),n.child}function pc(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ar(e,n,t,l,s){var r=ve(t)?Rn:ae.current;return r=it(n,r),st(n,s),t=Ma(e,n,t,l,r,s),l=Da(),e!==null&&!pe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Ge(e,n,s)):(D&&l&&Ca(n),n.flags|=1,ie(e,n,t,s),n.child)}function Zi(e,n,t,l,s){if(ve(t)){var r=!0;Zl(n)}else r=!1;if(st(n,s),n.stateNode===null)Dl(e,n),ic(n,t,l),$r(n,t,l,s),l=!0;else if(e===null){var a=n.stateNode,i=n.memoizedProps;a.props=i;var o=a.context,c=t.contextType;typeof c=="object"&&c!==null?c=Ce(c):(c=ve(t)?Rn:ae.current,c=it(n,c));var h=t.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==l||o!==c)&&Ki(n,a,l,c),Ze=!1;var x=n.memoizedState;a.state=x,ss(n,l,a,s),o=n.memoizedState,i!==l||x!==o||ge.current||Ze?(typeof h=="function"&&(Wr(n,t,h,l),o=n.memoizedState),(i=Ze||Qi(n,t,i,l,x,o,c))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(n.flags|=4194308)):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=o),a.props=l,a.state=o,a.context=c,l=i):(typeof a.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{a=n.stateNode,Wd(e,n),i=n.memoizedProps,c=n.type===n.elementType?i:Fe(n.type,i),a.props=c,p=n.pendingProps,x=a.context,o=t.contextType,typeof o=="object"&&o!==null?o=Ce(o):(o=ve(t)?Rn:ae.current,o=it(n,o));var m=t.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==p||x!==o)&&Ki(n,a,l,o),Ze=!1,x=n.memoizedState,a.state=x,ss(n,l,a,s);var b=n.memoizedState;i!==p||x!==b||ge.current||Ze?(typeof m=="function"&&(Wr(n,t,m,l),b=n.memoizedState),(c=Ze||Qi(n,t,c,l,x,b,o)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,b,o),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,b,o)),typeof a.componentDidUpdate=="function"&&(n.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=b),a.props=l,a.state=b,a.context=o,l=c):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(n.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&x===e.memoizedState||(n.flags|=1024),l=!1)}return Vr(e,n,t,l,r,s)}function Vr(e,n,t,l,s,r){pc(e,n);var a=(n.flags&128)!==0;if(!l&&!a)return s&&Mi(n,t,!1),Ge(e,n,r);l=n.stateNode,ng.current=n;var i=a&&typeof t.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,e!==null&&a?(n.child=dt(n,e.child,null,r),n.child=dt(n,null,i,r)):ie(e,n,i,r),n.memoizedState=l.state,s&&Mi(n,t,!0),n.child}function gc(e){var n=e.stateNode;n.pendingContext?Ui(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Ui(e,n.context,!1),za(e,n.containerInfo)}function eo(e,n,t,l,s){return ot(),Pa(s),n.flags|=256,ie(e,n,t,l),n.child}var Hr={dehydrated:null,treeContext:null,retryLane:0};function Qr(e){return{baseLanes:e,cachePool:null,transitions:null}}function vc(e,n,t){var l=n.pendingProps,s=W.current,r=!1,a=(n.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(r=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),I(W,s&1),e===null)return Mr(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(a=l.children,e=l.fallback,r?(l=n.mode,r=n.child,a={mode:"hidden",children:a},!(l&1)&&r!==null?(r.childLanes=0,r.pendingProps=a):r=Cs(a,l,0,null),e=Fn(e,l,t,null),r.return=n,e.return=n,r.sibling=e,n.child=r,n.child.memoizedState=Qr(t),n.memoizedState=Hr,e):Ba(n,a));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return tg(e,n,a,l,i,s,t);if(r){r=l.fallback,a=n.mode,s=e.child,i=s.sibling;var o={mode:"hidden",children:l.children};return!(a&1)&&n.child!==s?(l=n.child,l.childLanes=0,l.pendingProps=o,n.deletions=null):(l=gn(s,o),l.subtreeFlags=s.subtreeFlags&14680064),i!==null?r=gn(i,r):(r=Fn(r,a,t,null),r.flags|=2),r.return=n,l.return=n,l.sibling=r,n.child=l,l=r,r=n.child,a=e.child.memoizedState,a=a===null?Qr(t):{baseLanes:a.baseLanes|t,cachePool:null,transitions:a.transitions},r.memoizedState=a,r.childLanes=e.childLanes&~t,n.memoizedState=Hr,l}return r=e.child,e=r.sibling,l=gn(r,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=t),l.return=n,l.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=l,n.memoizedState=null,l}function Ba(e,n){return n=Cs({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Nl(e,n,t,l){return l!==null&&Pa(l),dt(n,e.child,null,t),e=Ba(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tg(e,n,t,l,s,r,a){if(t)return n.flags&256?(n.flags&=-257,l=sr(Error(w(422))),Nl(e,n,a,l)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(r=l.fallback,s=n.mode,l=Cs({mode:"visible",children:l.children},s,0,null),r=Fn(r,s,a,null),r.flags|=2,l.return=n,r.return=n,l.sibling=r,n.child=l,n.mode&1&&dt(n,e.child,null,a),n.child.memoizedState=Qr(a),n.memoizedState=Hr,r);if(!(n.mode&1))return Nl(e,n,a,null);if(s.data==="$!"){if(l=s.nextSibling&&s.nextSibling.dataset,l)var i=l.dgst;return l=i,r=Error(w(419)),l=sr(r,l,void 0),Nl(e,n,a,l)}if(i=(a&e.childLanes)!==0,pe||i){if(l=Z,l!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(l.suspendedLanes|a)?0:s,s!==0&&s!==r.retryLane&&(r.retryLane=s,Ye(e,s),ze(l,e,s,-1))}return Ya(),l=sr(Error(w(421))),Nl(e,n,a,l)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=hg.bind(null,e),s._reactRetry=n,null):(e=r.treeContext,fe=dn(s.nextSibling),me=n,D=!0,Le=null,e!==null&&(Ee[Se++]=Ae,Ee[Se++]=Ve,Ee[Se++]=Ln,Ae=e.id,Ve=e.overflow,Ln=n),n=Ba(n,l.children),n.flags|=4096,n)}function no(e,n,t){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Dr(e.return,n,t)}function rr(e,n,t,l,s){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:s}:(r.isBackwards=n,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=t,r.tailMode=s)}function hc(e,n,t){var l=n.pendingProps,s=l.revealOrder,r=l.tail;if(ie(e,n,l.children,t),l=W.current,l&2)l=l&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&no(e,t,n);else if(e.tag===19)no(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(I(W,l),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(t=n.child,s=null;t!==null;)e=t.alternate,e!==null&&rs(e)===null&&(s=t),t=t.sibling;t=s,t===null?(s=n.child,n.child=null):(s=t.sibling,t.sibling=null),rr(n,!1,s,t,r);break;case"backwards":for(t=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&rs(e)===null){n.child=s;break}e=s.sibling,s.sibling=t,t=s,s=e}rr(n,!0,t,null,r);break;case"together":rr(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Dl(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ge(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),zn|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=gn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=gn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function lg(e,n,t){switch(n.tag){case 3:gc(n),ot();break;case 5:$d(n);break;case 1:ve(n.type)&&Zl(n);break;case 4:za(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,s=n.memoizedProps.value;I(ts,l._currentValue),l._currentValue=s;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(I(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?vc(e,n,t):(I(W,W.current&1),e=Ge(e,n,t),e!==null?e.sibling:null);I(W,W.current&1);break;case 19:if(l=(t&n.childLanes)!==0,e.flags&128){if(l)return hc(e,n,t);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),I(W,W.current),l)break;return null;case 22:case 23:return n.lanes=0,uc(e,n,t)}return Ge(e,n,t)}var xc,Kr,fc,mc;xc=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Kr=function(){};fc=function(e,n,t,l){var s=e.memoizedProps;if(s!==l){e=n.stateNode,Pn(We.current);var r=null;switch(t){case"input":s=hr(e,s),l=hr(e,l),r=[];break;case"select":s=B({},s,{value:void 0}),l=B({},l,{value:void 0}),r=[];break;case"textarea":s=mr(e,s),l=mr(e,l),r=[];break;default:typeof s.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=ql)}yr(t,l);var a;t=null;for(c in s)if(!l.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var i=s[c];for(a in i)i.hasOwnProperty(a)&&(t||(t={}),t[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($t.hasOwnProperty(c)?r||(r=[]):(r=r||[]).push(c,null));for(c in l){var o=l[c];if(i=s!=null?s[c]:void 0,l.hasOwnProperty(c)&&o!==i&&(o!=null||i!=null))if(c==="style")if(i){for(a in i)!i.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||(t||(t={}),t[a]="");for(a in o)o.hasOwnProperty(a)&&i[a]!==o[a]&&(t||(t={}),t[a]=o[a])}else t||(r||(r=[]),r.push(c,t)),t=o;else c==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,i=i?i.__html:void 0,o!=null&&i!==o&&(r=r||[]).push(c,o)):c==="children"?typeof o!="string"&&typeof o!="number"||(r=r||[]).push(c,""+o):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($t.hasOwnProperty(c)?(o!=null&&c==="onScroll"&&U("scroll",e),r||i===o||(r=[])):(r=r||[]).push(c,o))}t&&(r=r||[]).push("style",t);var c=r;(n.updateQueue=c)&&(n.flags|=4)}};mc=function(e,n,t,l){t!==l&&(n.flags|=4)};function jt(e,n){if(!D)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function se(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(n)for(var s=e.child;s!==null;)t|=s.lanes|s.childLanes,l|=s.subtreeFlags&14680064,l|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)t|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=t,n}function sg(e,n,t){var l=n.pendingProps;switch(Na(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(n),null;case 1:return ve(n.type)&&Jl(),se(n),null;case 3:return l=n.stateNode,ct(),M(ge),M(ae),Ia(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(jl(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Le!==null&&(na(Le),Le=null))),Kr(e,n),se(n),null;case 5:Oa(n);var s=Pn(Zt.current);if(t=n.type,e!==null&&n.stateNode!=null)fc(e,n,t,l,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(w(166));return se(n),null}if(e=Pn(We.current),jl(n)){l=n.stateNode,t=n.type;var r=n.memoizedProps;switch(l[Me]=n,l[qt]=r,e=(n.mode&1)!==0,t){case"dialog":U("cancel",l),U("close",l);break;case"iframe":case"object":case"embed":U("load",l);break;case"video":case"audio":for(s=0;s<Rt.length;s++)U(Rt[s],l);break;case"source":U("error",l);break;case"img":case"image":case"link":U("error",l),U("load",l);break;case"details":U("toggle",l);break;case"input":ci(l,r),U("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!r.multiple},U("invalid",l);break;case"textarea":pi(l,r),U("invalid",l)}yr(t,r),s=null;for(var a in r)if(r.hasOwnProperty(a)){var i=r[a];a==="children"?typeof i=="string"?l.textContent!==i&&(r.suppressHydrationWarning!==!0&&kl(l.textContent,i,e),s=["children",i]):typeof i=="number"&&l.textContent!==""+i&&(r.suppressHydrationWarning!==!0&&kl(l.textContent,i,e),s=["children",""+i]):$t.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&U("scroll",l)}switch(t){case"input":xl(l),ui(l,r,!0);break;case"textarea":xl(l),gi(l);break;case"select":case"option":break;default:typeof r.onClick=="function"&&(l.onclick=ql)}l=s,n.updateQueue=l,l!==null&&(n.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(t,{is:l.is}):(e=a.createElement(t),t==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,t),e[Me]=n,e[qt]=l,xc(e,n,!1,!1),n.stateNode=e;e:{switch(a=wr(t,l),t){case"dialog":U("cancel",e),U("close",e),s=l;break;case"iframe":case"object":case"embed":U("load",e),s=l;break;case"video":case"audio":for(s=0;s<Rt.length;s++)U(Rt[s],e);s=l;break;case"source":U("error",e),s=l;break;case"img":case"image":case"link":U("error",e),U("load",e),s=l;break;case"details":U("toggle",e),s=l;break;case"input":ci(e,l),s=hr(e,l),U("invalid",e);break;case"option":s=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},s=B({},l,{value:void 0}),U("invalid",e);break;case"textarea":pi(e,l),s=mr(e,l),U("invalid",e);break;default:s=l}yr(t,s),i=s;for(r in i)if(i.hasOwnProperty(r)){var o=i[r];r==="style"?Go(e,o):r==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&Ko(e,o)):r==="children"?typeof o=="string"?(t!=="textarea"||o!=="")&&Bt(e,o):typeof o=="number"&&Bt(e,""+o):r!=="suppressContentEditableWarning"&&r!=="suppressHydrationWarning"&&r!=="autoFocus"&&($t.hasOwnProperty(r)?o!=null&&r==="onScroll"&&U("scroll",e):o!=null&&pa(e,r,o,a))}switch(t){case"input":xl(e),ui(e,l,!1);break;case"textarea":xl(e),gi(e);break;case"option":l.value!=null&&e.setAttribute("value",""+hn(l.value));break;case"select":e.multiple=!!l.multiple,r=l.value,r!=null?et(e,!!l.multiple,r,!1):l.defaultValue!=null&&et(e,!!l.multiple,l.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ql)}switch(t){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return se(n),null;case 6:if(e&&n.stateNode!=null)mc(e,n,e.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(w(166));if(t=Pn(Zt.current),Pn(We.current),jl(n)){if(l=n.stateNode,t=n.memoizedProps,l[Me]=n,(r=l.nodeValue!==t)&&(e=me,e!==null))switch(e.tag){case 3:kl(l.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&kl(l.nodeValue,t,(e.mode&1)!==0)}r&&(n.flags|=4)}else l=(t.nodeType===9?t:t.ownerDocument).createTextNode(l),l[Me]=n,n.stateNode=l}return se(n),null;case 13:if(M(W),l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(D&&fe!==null&&n.mode&1&&!(n.flags&128))Id(),ot(),n.flags|=98560,r=!1;else if(r=jl(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(w(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(w(317));r[Me]=n}else ot(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;se(n),r=!1}else Le!==null&&(na(Le),Le=null),r=!0;if(!r)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?X===0&&(X=3):Ya())),n.updateQueue!==null&&(n.flags|=4),se(n),null);case 4:return ct(),Kr(e,n),e===null&&Gt(n.stateNode.containerInfo),se(n),null;case 10:return Ra(n.type._context),se(n),null;case 17:return ve(n.type)&&Jl(),se(n),null;case 19:if(M(W),r=n.memoizedState,r===null)return se(n),null;if(l=(n.flags&128)!==0,a=r.rendering,a===null)if(l)jt(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(a=rs(e),a!==null){for(n.flags|=128,jt(r,!1),l=a.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=t,t=n.child;t!==null;)r=t,e=l,r.flags&=14680066,a=r.alternate,a===null?(r.childLanes=0,r.lanes=e,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=a.childLanes,r.lanes=a.lanes,r.child=a.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=a.memoizedProps,r.memoizedState=a.memoizedState,r.updateQueue=a.updateQueue,r.type=a.type,e=a.dependencies,r.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return I(W,W.current&1|2),n.child}e=e.sibling}r.tail!==null&&Q()>pt&&(n.flags|=128,l=!0,jt(r,!1),n.lanes=4194304)}else{if(!l)if(e=rs(a),e!==null){if(n.flags|=128,l=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),jt(r,!0),r.tail===null&&r.tailMode==="hidden"&&!a.alternate&&!D)return se(n),null}else 2*Q()-r.renderingStartTime>pt&&t!==1073741824&&(n.flags|=128,l=!0,jt(r,!1),n.lanes=4194304);r.isBackwards?(a.sibling=n.child,n.child=a):(t=r.last,t!==null?t.sibling=a:n.child=a,r.last=a)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.renderingStartTime=Q(),n.sibling=null,t=W.current,I(W,l?t&1|2:t&1),n):(se(n),null);case 22:case 23:return Ka(),l=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?xe&1073741824&&(se(n),n.subtreeFlags&6&&(n.flags|=8192)):se(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function rg(e,n){switch(Na(n),n.tag){case 1:return ve(n.type)&&Jl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ct(),M(ge),M(ae),Ia(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return Oa(n),null;case 13:if(M(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));ot()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(W),null;case 4:return ct(),null;case 10:return Ra(n.type._context),null;case 22:case 23:return Ka(),null;case 24:return null;default:return null}}var Pl=!1,re=!1,ag=typeof WeakSet=="function"?WeakSet:Set,j=null;function Jn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(l){A(e,n,l)}else t.current=null}function Yr(e,n,t){try{t()}catch(l){A(e,n,l)}}var to=!1;function ig(e,n){if(Rr=Yl,e=Sd(),ja(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var s=l.anchorOffset,r=l.focusNode;l=l.focusOffset;try{t.nodeType,r.nodeType}catch{t=null;break e}var a=0,i=-1,o=-1,c=0,h=0,p=e,x=null;n:for(;;){for(var m;p!==t||s!==0&&p.nodeType!==3||(i=a+s),p!==r||l!==0&&p.nodeType!==3||(o=a+l),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)x=p,p=m;for(;;){if(p===e)break n;if(x===t&&++c===s&&(i=a),x===r&&++h===l&&(o=a),(m=p.nextSibling)!==null)break;p=x,x=p.parentNode}p=m}t=i===-1||o===-1?null:{start:i,end:o}}else t=null}t=t||{start:0,end:0}}else t=null;for(Lr={focusedElem:e,selectionRange:t},Yl=!1,j=n;j!==null;)if(n=j,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,j=e;else for(;j!==null;){n=j;try{var b=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(b!==null){var y=b.memoizedProps,k=b.memoizedState,g=n.stateNode,u=g.getSnapshotBeforeUpdate(n.elementType===n.type?y:Fe(n.type,y),k);g.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var v=n.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(f){A(n,n.return,f)}if(e=n.sibling,e!==null){e.return=n.return,j=e;break}j=n.return}return b=to,to=!1,b}function Mt(e,n,t){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var s=l=l.next;do{if((s.tag&e)===e){var r=s.destroy;s.destroy=void 0,r!==void 0&&Yr(n,t,r)}s=s.next}while(s!==l)}}function ks(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var l=t.create;t.destroy=l()}t=t.next}while(t!==n)}}function Gr(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function bc(e){var n=e.alternate;n!==null&&(e.alternate=null,bc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Me],delete n[qt],delete n[Or],delete n[Ap],delete n[Vp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xr(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=ql));else if(l!==4&&(e=e.child,e!==null))for(Xr(e,n,t),e=e.sibling;e!==null;)Xr(e,n,t),e=e.sibling}function qr(e,n,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(qr(e,n,t),e=e.sibling;e!==null;)qr(e,n,t),e=e.sibling}var ee=null,Re=!1;function qe(e,n,t){for(t=t.child;t!==null;)wc(e,n,t),t=t.sibling}function wc(e,n,t){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(xs,t)}catch{}switch(t.tag){case 5:re||Jn(t,n);case 6:var l=ee,s=Re;ee=null,qe(e,n,t),ee=l,Re=s,ee!==null&&(Re?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(Re?(e=ee,t=t.stateNode,e.nodeType===8?Js(e.parentNode,t):e.nodeType===1&&Js(e,t),Qt(e)):Js(ee,t.stateNode));break;case 4:l=ee,s=Re,ee=t.stateNode.containerInfo,Re=!0,qe(e,n,t),ee=l,Re=s;break;case 0:case 11:case 14:case 15:if(!re&&(l=t.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){s=l=l.next;do{var r=s,a=r.destroy;r=r.tag,a!==void 0&&(r&2||r&4)&&Yr(t,n,a),s=s.next}while(s!==l)}qe(e,n,t);break;case 1:if(!re&&(Jn(t,n),l=t.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=t.memoizedProps,l.state=t.memoizedState,l.componentWillUnmount()}catch(i){A(t,n,i)}qe(e,n,t);break;case 21:qe(e,n,t);break;case 22:t.mode&1?(re=(l=re)||t.memoizedState!==null,qe(e,n,t),re=l):qe(e,n,t);break;default:qe(e,n,t)}}function so(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ag),n.forEach(function(l){var s=xg.bind(null,e,l);t.has(l)||(t.add(l),l.then(s,s))})}}function _e(e,n){var t=n.deletions;if(t!==null)for(var l=0;l<t.length;l++){var s=t[l];try{var r=e,a=n,i=a;e:for(;i!==null;){switch(i.tag){case 5:ee=i.stateNode,Re=!1;break e;case 3:ee=i.stateNode.containerInfo,Re=!0;break e;case 4:ee=i.stateNode.containerInfo,Re=!0;break e}i=i.return}if(ee===null)throw Error(w(160));wc(r,a,s),ee=null,Re=!1;var o=s.alternate;o!==null&&(o.return=null),s.return=null}catch(c){A(s,n,c)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ec(n,e),n=n.sibling}function Ec(e,n){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_e(n,e),Ie(e),l&4){try{Mt(3,e,e.return),ks(3,e)}catch(y){A(e,e.return,y)}try{Mt(5,e,e.return)}catch(y){A(e,e.return,y)}}break;case 1:_e(n,e),Ie(e),l&512&&t!==null&&Jn(t,t.return);break;case 5:if(_e(n,e),Ie(e),l&512&&t!==null&&Jn(t,t.return),e.flags&32){var s=e.stateNode;try{Bt(s,"")}catch(y){A(e,e.return,y)}}if(l&4&&(s=e.stateNode,s!=null)){var r=e.memoizedProps,a=t!==null?t.memoizedProps:r,i=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{i==="input"&&r.type==="radio"&&r.name!=null&&Vo(s,r),wr(i,a);var c=wr(i,r);for(a=0;a<o.length;a+=2){var h=o[a],p=o[a+1];h==="style"?Go(s,p):h==="dangerouslySetInnerHTML"?Ko(s,p):h==="children"?Bt(s,p):pa(s,h,p,c)}switch(i){case"input":xr(s,r);break;case"textarea":Ho(s,r);break;case"select":var x=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!r.multiple;var m=r.value;m!=null?et(s,!!r.multiple,m,!1):x!==!!r.multiple&&(r.defaultValue!=null?et(s,!!r.multiple,r.defaultValue,!0):et(s,!!r.multiple,r.multiple?[]:"",!1))}s[qt]=r}catch(y){A(e,e.return,y)}}break;case 6:if(_e(n,e),Ie(e),l&4){if(e.stateNode===null)throw Error(w(162));s=e.stateNode,r=e.memoizedProps;try{s.nodeValue=r}catch(y){A(e,e.return,y)}}break;case 3:if(_e(n,e),Ie(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{Qt(n.containerInfo)}catch(y){A(e,e.return,y)}break;case 4:_e(n,e),Ie(e);break;case 13:_e(n,e),Ie(e),s=e.child,s.flags&8192&&(r=s.memoizedState!==null,s.stateNode.isHidden=r,!r||s.alternate!==null&&s.alternate.memoizedState!==null||(Ha=Q())),l&4&&so(e);break;case 22:if(h=t!==null&&t.memoizedState!==null,e.mode&1?(re=(c=re)||h,_e(n,e),re=c):_e(n,e),Ie(e),l&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(p=j=h;j!==null;){switch(x=j,m=x.child,x.tag){case 0:case 11:case 14:case 15:Mt(4,x,x.return);break;case 1:Jn(x,x.return);var b=x.stateNode;if(typeof b.componentWillUnmount=="function"){l=x,t=x.return;try{n=l,b.props=n.memoizedProps,b.state=n.memoizedState,b.componentWillUnmount()}catch(y){A(l,t,y)}}break;case 5:Jn(x,x.return);break;case 22:if(x.memoizedState!==null){ao(p);continue}}m!==null?(m.return=x,j=m):ao(p)}h=h.sibling}e:for(h=null,p=e;;){if(p.tag===5){if(h===null){h=p;try{s=p.stateNode,c?(r=s.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"):(i=p.stateNode,o=p.memoizedProps.style,a=o!=null&&o.hasOwnProperty("display")?o.display:null,i.style.display=Yo("display",a))}catch(y){A(e,e.return,y)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){A(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:_e(n,e),Ie(e),l&4&&so(e);break;case 21:break;default:_e(n,e),Ie(e)}}function Ie(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(yc(t)){var l=t;break e}t=t.return}throw Error(w(160))}switch(l.tag){case 5:var s=l.stateNode;l.flags&32&&(Bt(s,""),l.flags&=-33);var r=lo(e);qr(e,r,s);break;case 3:case 4:var a=l.stateNode.containerInfo,i=lo(e);Xr(e,i,a);break;default:throw Error(w(161))}}catch(o){A(e,e.return,o)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function og(e,n,t){j=e,Sc(e)}function Sc(e,n,t){for(var l=(e.mode&1)!==0;j!==null;){var s=j,r=s.child;if(s.tag===22&&l){var a=s.memoizedState!==null||Pl;if(!a){var i=s.alternate,o=i!==null&&i.memoizedState!==null||re;i=Pl;var c=re;if(Pl=a,(re=o)&&!c)for(j=s;j!==null;)a=j,o=a.child,a.tag===22&&a.memoizedState!==null?io(s):o!==null?(o.return=a,j=o):io(s);for(;r!==null;)j=r,Sc(r),r=r.sibling;j=s,Pl=i,re=c}ro(e)}else s.subtreeFlags&8772&&r!==null?(r.return=s,j=r):ro(e)}}function ro(e){for(;j!==null;){var n=j;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:re||ks(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!re)if(t===null)l.componentDidMount();else{var s=n.elementType===n.type?t.memoizedProps:Fe(n.type,t.memoizedProps);l.componentDidUpdate(s,t.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var r=n.updateQueue;r!==null&&Ai(n,r,l);break;case 3:var a=n.updateQueue;if(a!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Ai(n,a,t)}break;case 5:var i=n.stateNode;if(t===null&&n.flags&4){t=i;var o=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&t.focus();break;case"img":o.src&&(t.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var c=n.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Qt(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}re||n.flags&512&&Gr(n)}catch(x){A(n,n.return,x)}}if(n===e){j=null;break}if(t=n.sibling,t!==null){t.return=n.return,j=t;break}j=n.return}}function ao(e){for(;j!==null;){var n=j;if(n===e){j=null;break}var t=n.sibling;if(t!==null){t.return=n.return,j=t;break}j=n.return}}function io(e){for(;j!==null;){var n=j;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{ks(4,n)}catch(o){A(n,t,o)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var s=n.return;try{l.componentDidMount()}catch(o){A(n,s,o)}}var r=n.return;try{Gr(n)}catch(o){A(n,r,o)}break;case 5:var a=n.return;try{Gr(n)}catch(o){A(n,a,o)}}}catch(o){A(n,n.return,o)}if(n===e){j=null;break}var i=n.sibling;if(i!==null){i.return=n.return,j=i;break}j=n.return}}var dg=Math.ceil,os=Xe.ReactCurrentDispatcher,Aa=Xe.ReactCurrentOwner,je=Xe.ReactCurrentBatchConfig,z=0,Z=null,K=null,ne=0,xe=0,Zn=mn(0),X=0,ll=null,zn=0,js=0,Va=0,Dt=null,ue=null,Ha=0,pt=1/0,$e=null,ds=!1,Jr=null,un=null,_l=!1,ln=null,cs=0,Wt=0,Zr=null,Wl=-1,$l=0;function oe(){return z&6?Q():Wl!==-1?Wl:Wl=Q()}function pn(e){return e.mode&1?z&2&&ne!==0?ne&-ne:Qp.transition!==null?($l===0&&($l=id()),$l):(e=O,e!==0||(e=window.event,e=e===void 0?16:vd(e.type)),e):1}function ze(e,n,t,l){if(50<Wt)throw Wt=0,Zr=null,Error(w(185));il(e,t,l),(!(z&2)||e!==Z)&&(e===Z&&(!(z&2)&&(js|=t),X===4&&nn(e,ne)),he(e,l),t===1&&z===0&&!(n.mode&1)&&(pt=Q()+500,ws&&bn()))}function he(e,n){var t=e.callbackNode;Qu(e,n);var l=Kl(e,e===Z?ne:0);if(l===0)t!==null&&xi(t),e.callbackNode=null,e.callbackPriority=0;else if(n=l&-l,e.callbackPriority!==n){if(t!=null&&xi(t),n===1)e.tag===0?Hp(oo.bind(null,e)):Td(oo.bind(null,e)),$p(function(){!(z&6)&&bn()}),t=null;else{switch(od(l)){case 1:t=fa;break;case 4:t=rd;break;case 16:t=Ql;break;case 536870912:t=ad;break;default:t=Ql}t=Rc(t,kc.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function kc(e,n){if(Wl=-1,$l=0,z&6)throw Error(w(327));var t=e.callbackNode;if(rt()&&e.callbackNode!==t)return null;var l=Kl(e,e===Z?ne:0);if(l===0)return null;if(l&30||l&e.expiredLanes||n)n=us(e,l);else{n=l;var s=z;z|=2;var r=Cc();(Z!==e||ne!==n)&&($e=null,pt=Q()+500,_n(e,n));do try{pg();break}catch(i){jc(e,i)}while(!0);Fa(),os.current=r,z=s,K!==null?n=0:(Z=null,ne=0,n=X)}if(n!==0){if(n===2&&(s=Cr(e),s!==0&&(l=s,n=ea(e,s))),n===1)throw t=ll,_n(e,0),nn(e,l),he(e,Q()),t;if(n===6)nn(e,l);else{if(s=e.current.alternate,!(l&30)&&!cg(s)&&(n=us(e,l),n===2&&(r=Cr(e),r!==0&&(l=r,n=ea(e,r))),n===1))throw t=ll,_n(e,0),nn(e,l),he(e,Q()),t;switch(e.finishedWork=s,e.finishedLanes=l,n){case 0:case 1:throw Error(w(345));case 2:jn(e,ue,$e);break;case 3:if(nn(e,l),(l&130023424)===l&&(n=Ha+500-Q(),10<n)){if(Kl(e,0)!==0)break;if(s=e.suspendedLanes,(s&l)!==l){oe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=zr(jn.bind(null,e,ue,$e),n);break}jn(e,ue,$e);break;case 4:if(nn(e,l),(l&4194240)===l)break;for(n=e.eventTimes,s=-1;0<l;){var a=31-Te(l);r=1<<a,a=n[a],a>s&&(s=a),l&=~r}if(l=s,l=Q()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*dg(l/1960))-l,10<l){e.timeoutHandle=zr(jn.bind(null,e,ue,$e),l);break}jn(e,ue,$e);break;case 5:jn(e,ue,$e);break;default:throw Error(w(329))}}}return he(e,Q()),e.callbackNode===t?kc.bind(null,e):null}function ea(e,n){var t=Dt;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=us(e,n),e!==2&&(n=ue,ue=t,n!==null&&na(n)),e}function na(e){ue===null?ue=e:ue.push.apply(ue,e)}function cg(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var l=0;l<t.length;l++){var s=t[l],r=s.getSnapshot;s=s.value;try{if(!Oe(r(),s))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function nn(e,n){for(n&=~Va,n&=~js,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Te(n),l=1<<t;e[t]=-1,n&=~l}}function oo(e){if(z&6)throw Error(w(327));rt();var n=Kl(e,0);if(!(n&1))return he(e,Q()),null;var t=us(e,n);if(e.tag!==0&&t===2){var l=Cr(e);l!==0&&(n=l,t=ea(e,l))}if(t===1)throw t=ll,_n(e,0),nn(e,n),he(e,Q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,jn(e,ue,$e),he(e,Q()),null}function Qa(e,n){var t=z;z|=1;try{return e(n)}finally{z=t,z===0&&(pt=Q()+500,ws&&bn())}}function On(e){ln!==null&&ln.tag===0&&!(z&6)&&rt();var n=z;z|=1;var t=je.transition,l=O;try{if(je.transition=null,O=1,e)return e()}finally{O=l,je.transition=t,z=n,!(z&6)&&bn()}}function Ka(){xe=Zn.current,M(Zn)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wp(t)),K!==null)for(t=K.return;t!==null;){var l=t;switch(Na(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Jl();break;case 3:ct(),M(ge),M(ae),Ia();break;case 5:Oa(l);break;case 4:ct();break;case 13:M(W);break;case 19:M(W);break;case 10:Ra(l.type._context);break;case 22:case 23:Ka()}t=t.return}if(Z=e,K=e=gn(e.current,null),ne=xe=n,X=0,ll=null,Va=js=zn=0,ue=Dt=null,Nn!==null){for(n=0;n<Nn.length;n++)if(t=Nn[n],l=t.interleaved,l!==null){t.interleaved=null;var s=l.next,r=t.pending;if(r!==null){var a=r.next;r.next=s,l.next=a}t.pending=l}Nn=null}return e}function jc(e,n){do{var t=K;try{if(Fa(),Ul.current=is,as){for(var l=$.memoizedState;l!==null;){var s=l.queue;s!==null&&(s.pending=null),l=l.next}as=!1}if(Tn=0,J=G=$=null,Ut=!1,el=0,Aa.current=null,t===null||t.return===null){X=1,ll=n,K=null;break}e:{var r=e,a=t.return,i=t,o=n;if(n=ne,i.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var c=o,h=i,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var x=h.alternate;x?(h.updateQueue=x.updateQueue,h.memoizedState=x.memoizedState,h.lanes=x.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Gi(a);if(m!==null){m.flags&=-257,Xi(m,a,i,r,n),m.mode&1&&Yi(r,c,n),n=m,o=c;var b=n.updateQueue;if(b===null){var y=new Set;y.add(o),n.updateQueue=y}else b.add(o);break e}else{if(!(n&1)){Yi(r,c,n),Ya();break e}o=Error(w(426))}}else if(D&&i.mode&1){var k=Gi(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Xi(k,a,i,r,n),Pa(ut(o,i));break e}}r=o=ut(o,i),X!==4&&(X=2),Dt===null?Dt=[r]:Dt.push(r),r=a;do{switch(r.tag){case 3:r.flags|=65536,n&=-n,r.lanes|=n;var g=oc(r,o,n);Bi(r,g);break e;case 1:i=o;var u=r.type,v=r.stateNode;if(!(r.flags&128)&&(typeof u.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(un===null||!un.has(v)))){r.flags|=65536,n&=-n,r.lanes|=n;var f=dc(r,i,n);Bi(r,f);break e}}r=r.return}while(r!==null)}Pc(t)}catch(S){n=S,K===t&&t!==null&&(K=t=t.return);continue}break}while(!0)}function Cc(){var e=os.current;return os.current=is,e===null?is:e}function Ya(){(X===0||X===3||X===2)&&(X=4),Z===null||!(zn&268435455)&&!(js&268435455)||nn(Z,ne)}function us(e,n){var t=z;z|=2;var l=Cc();(Z!==e||ne!==n)&&($e=null,_n(e,n));do try{ug();break}catch(s){jc(e,s)}while(!0);if(Fa(),z=t,os.current=l,K!==null)throw Error(w(261));return Z=null,ne=0,X}function ug(){for(;K!==null;)Nc(K)}function pg(){for(;K!==null&&!Uu();)Nc(K)}function Nc(e){var n=Fc(e.alternate,e,xe);e.memoizedProps=e.pendingProps,n===null?Pc(e):K=n,Aa.current=null}function Pc(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=rg(t,n),t!==null){t.flags&=32767,K=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,K=null;return}}else if(t=sg(t,n,xe),t!==null){K=t;return}if(n=n.sibling,n!==null){K=n;return}K=n=e}while(n!==null);X===0&&(X=5)}function jn(e,n,t){var l=O,s=je.transition;try{je.transition=null,O=1,gg(e,n,t,l)}finally{je.transition=s,O=l}return null}function gg(e,n,t,l){do rt();while(ln!==null);if(z&6)throw Error(w(327));t=e.finishedWork;var s=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var r=t.lanes|t.childLanes;if(Ku(e,r),e===Z&&(K=Z=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||_l||(_l=!0,Rc(Ql,function(){return rt(),null})),r=(t.flags&15990)!==0,t.subtreeFlags&15990||r){r=je.transition,je.transition=null;var a=O;O=1;var i=z;z|=4,Aa.current=null,ig(e,t),Ec(t,e),Tp(Lr),Yl=!!Rr,Lr=Rr=null,e.current=t,og(t),Mu(),z=i,O=a,je.transition=r}else e.current=t;if(_l&&(_l=!1,ln=e,cs=s),r=e.pendingLanes,r===0&&(un=null),$u(t.stateNode),he(e,Q()),n!==null)for(l=e.onRecoverableError,t=0;t<n.length;t++)s=n[t],l(s.value,{componentStack:s.stack,digest:s.digest});if(ds)throw ds=!1,e=Jr,Jr=null,e;return cs&1&&e.tag!==0&&rt(),r=e.pendingLanes,r&1?e===Zr?Wt++:(Wt=0,Zr=e):Wt=0,bn(),null}function rt(){if(ln!==null){var e=od(cs),n=je.transition,t=O;try{if(je.transition=null,O=16>e?16:e,ln===null)var l=!1;else{if(e=ln,ln=null,cs=0,z&6)throw Error(w(331));var s=z;for(z|=4,j=e.current;j!==null;){var r=j,a=r.child;if(j.flags&16){var i=r.deletions;if(i!==null){for(var o=0;o<i.length;o++){var c=i[o];for(j=c;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:Mt(8,h,r)}var p=h.child;if(p!==null)p.return=h,j=p;else for(;j!==null;){h=j;var x=h.sibling,m=h.return;if(bc(h),h===c){j=null;break}if(x!==null){x.return=m,j=x;break}j=m}}}var b=r.alternate;if(b!==null){var y=b.child;if(y!==null){b.child=null;do{var k=y.sibling;y.sibling=null,y=k}while(y!==null)}}j=r}}if(r.subtreeFlags&2064&&a!==null)a.return=r,j=a;else e:for(;j!==null;){if(r=j,r.flags&2048)switch(r.tag){case 0:case 11:case 15:Mt(9,r,r.return)}var g=r.sibling;if(g!==null){g.return=r.return,j=g;break e}j=r.return}}var u=e.current;for(j=u;j!==null;){a=j;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,j=v;else e:for(a=u;j!==null;){if(i=j,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:ks(9,i)}}catch(S){A(i,i.return,S)}if(i===a){j=null;break e}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}if(z=s,bn(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(xs,e)}catch{}l=!0}return l}finally{O=t,je.transition=n}}return!1}function co(e,n,t){n=ut(t,n),n=oc(e,n,1),e=cn(e,n,1),n=oe(),e!==null&&(il(e,1,n),he(e,n))}function A(e,n,t){if(e.tag===3)co(e,e,t);else for(;n!==null;){if(n.tag===3){co(n,e,t);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(un===null||!un.has(l))){e=ut(t,e),e=dc(n,e,1),n=cn(n,e,1),e=oe(),n!==null&&(il(n,1,e),he(n,e));break}}n=n.return}}function vg(e,n,t){var l=e.pingCache;l!==null&&l.delete(n),n=oe(),e.pingedLanes|=e.suspendedLanes&t,Z===e&&(ne&t)===t&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Ha?_n(e,0):Va|=t),he(e,n)}function _c(e,n){n===0&&(e.mode&1?(n=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):n=1);var t=oe();e=Ye(e,n),e!==null&&(il(e,n,t),he(e,t))}function hg(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_c(e,t)}function xg(e,n){var t=0;switch(e.tag){case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(t=s.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(w(314))}l!==null&&l.delete(n),_c(e,t)}var Fc;Fc=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||ge.current)pe=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return pe=!1,lg(e,n,t);pe=!!(e.flags&131072)}else pe=!1,D&&n.flags&1048576&&zd(n,ns,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Dl(e,n),e=n.pendingProps;var s=it(n,ae.current);st(n,t),s=Ma(null,n,l,e,s,t);var r=Da();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(l)?(r=!0,Zl(n)):r=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Ta(n),s.updater=Ss,n.stateNode=s,s._reactInternals=n,$r(n,l,e,t),n=Vr(null,n,l,!0,r,t)):(n.tag=0,D&&r&&Ca(n),ie(null,n,s,t),n=n.child),n;case 16:l=n.elementType;e:{switch(Dl(e,n),e=n.pendingProps,s=l._init,l=s(l._payload),n.type=l,s=n.tag=mg(l),e=Fe(l,e),s){case 0:n=Ar(null,n,l,e,t);break e;case 1:n=Zi(null,n,l,e,t);break e;case 11:n=qi(null,n,l,e,t);break e;case 14:n=Ji(null,n,l,Fe(l.type,e),t);break e}throw Error(w(306,l,""))}return n;case 0:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:Fe(l,s),Ar(e,n,l,s,t);case 1:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:Fe(l,s),Zi(e,n,l,s,t);case 3:e:{if(gc(n),e===null)throw Error(w(387));l=n.pendingProps,r=n.memoizedState,s=r.element,Wd(e,n),ss(n,l,null,t);var a=n.memoizedState;if(l=a.element,r.isDehydrated)if(r={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},n.updateQueue.baseState=r,n.memoizedState=r,n.flags&256){s=ut(Error(w(423)),n),n=eo(e,n,l,t,s);break e}else if(l!==s){s=ut(Error(w(424)),n),n=eo(e,n,l,t,s);break e}else for(fe=dn(n.stateNode.containerInfo.firstChild),me=n,D=!0,Le=null,t=Md(n,null,l,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(ot(),l===s){n=Ge(e,n,t);break e}ie(e,n,l,t)}n=n.child}return n;case 5:return $d(n),e===null&&Mr(n),l=n.type,s=n.pendingProps,r=e!==null?e.memoizedProps:null,a=s.children,Tr(l,s)?a=null:r!==null&&Tr(l,r)&&(n.flags|=32),pc(e,n),ie(e,n,a,t),n.child;case 6:return e===null&&Mr(n),null;case 13:return vc(e,n,t);case 4:return za(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=dt(n,null,l,t):ie(e,n,l,t),n.child;case 11:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:Fe(l,s),qi(e,n,l,s,t);case 7:return ie(e,n,n.pendingProps,t),n.child;case 8:return ie(e,n,n.pendingProps.children,t),n.child;case 12:return ie(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(l=n.type._context,s=n.pendingProps,r=n.memoizedProps,a=s.value,I(ts,l._currentValue),l._currentValue=a,r!==null)if(Oe(r.value,a)){if(r.children===s.children&&!ge.current){n=Ge(e,n,t);break e}}else for(r=n.child,r!==null&&(r.return=n);r!==null;){var i=r.dependencies;if(i!==null){a=r.child;for(var o=i.firstContext;o!==null;){if(o.context===l){if(r.tag===1){o=He(-1,t&-t),o.tag=2;var c=r.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?o.next=o:(o.next=h.next,h.next=o),c.pending=o}}r.lanes|=t,o=r.alternate,o!==null&&(o.lanes|=t),Dr(r.return,t,n),i.lanes|=t;break}o=o.next}}else if(r.tag===10)a=r.type===n.type?null:r.child;else if(r.tag===18){if(a=r.return,a===null)throw Error(w(341));a.lanes|=t,i=a.alternate,i!==null&&(i.lanes|=t),Dr(a,t,n),a=r.sibling}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===n){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}ie(e,n,s.children,t),n=n.child}return n;case 9:return s=n.type,l=n.pendingProps.children,st(n,t),s=Ce(s),l=l(s),n.flags|=1,ie(e,n,l,t),n.child;case 14:return l=n.type,s=Fe(l,n.pendingProps),s=Fe(l.type,s),Ji(e,n,l,s,t);case 15:return cc(e,n,n.type,n.pendingProps,t);case 17:return l=n.type,s=n.pendingProps,s=n.elementType===l?s:Fe(l,s),Dl(e,n),n.tag=1,ve(l)?(e=!0,Zl(n)):e=!1,st(n,t),ic(n,l,s),$r(n,l,s,t),Vr(null,n,l,!0,e,t);case 19:return hc(e,n,t);case 22:return uc(e,n,t)}throw Error(w(156,n.tag))};function Rc(e,n){return sd(e,n)}function fg(e,n,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ke(e,n,t,l){return new fg(e,n,t,l)}function Ga(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return Ga(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===ha)return 14}return 2}function gn(e,n){var t=e.alternate;return t===null?(t=ke(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Bl(e,n,t,l,s,r){var a=2;if(l=e,typeof e=="function")Ga(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case An:return Fn(t.children,s,r,n);case ga:a=8,s|=8;break;case ur:return e=ke(12,t,n,s|2),e.elementType=ur,e.lanes=r,e;case pr:return e=ke(13,t,n,s),e.elementType=pr,e.lanes=r,e;case gr:return e=ke(19,t,n,s),e.elementType=gr,e.lanes=r,e;case $o:return Cs(t,s,r,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Do:a=10;break e;case Wo:a=9;break e;case va:a=11;break e;case ha:a=14;break e;case Je:a=16,l=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=ke(a,t,n,s),n.elementType=e,n.type=l,n.lanes=r,n}function Fn(e,n,t,l){return e=ke(7,e,l,n),e.lanes=t,e}function Cs(e,n,t,l){return e=ke(22,e,l,n),e.elementType=$o,e.lanes=t,e.stateNode={isHidden:!1},e}function ar(e,n,t){return e=ke(6,e,null,n),e.lanes=t,e}function ir(e,n,t){return n=ke(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function bg(e,n,t,l,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$s(0),this.expirationTimes=$s(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$s(0),this.identifierPrefix=l,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Xa(e,n,t,l,s,r,a,i,o){return e=new bg(e,n,t,i,o),n===1?(n=1,r===!0&&(n|=8)):n=0,r=ke(3,null,null,n),e.current=r,r.stateNode=e,r.memoizedState={element:l,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ta(r),e}function yg(e,n,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Bn,key:l==null?null:""+l,children:e,containerInfo:n,implementation:t}}function Lc(e){if(!e)return xn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(ve(t))return Ld(e,t,n)}return n}function Tc(e,n,t,l,s,r,a,i,o){return e=Xa(t,l,!0,e,s,r,a,i,o),e.context=Lc(null),t=e.current,l=oe(),s=pn(t),r=He(l,s),r.callback=n??null,cn(t,r,s),e.current.lanes=s,il(e,s,l),he(e,l),e}function Ns(e,n,t,l){var s=n.current,r=oe(),a=pn(s);return t=Lc(t),n.context===null?n.context=t:n.pendingContext=t,n=He(r,a),n.payload={element:e},l=l===void 0?null:l,l!==null&&(n.callback=l),e=cn(s,n,a),e!==null&&(ze(e,s,a,r),Il(e,s,a)),a}function ps(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function uo(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function qa(e,n){uo(e,n),(e=e.alternate)&&uo(e,n)}function wg(){return null}var zc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ja(e){this._internalRoot=e}Ps.prototype.render=Ja.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Ns(e,n,null,null)};Ps.prototype.unmount=Ja.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;On(function(){Ns(null,e,null,null)}),n[Ke]=null}};function Ps(e){this._internalRoot=e}Ps.prototype.unstable_scheduleHydration=function(e){if(e){var n=ud();e={blockedOn:null,target:e,priority:n};for(var t=0;t<en.length&&n!==0&&n<en[t].priority;t++);en.splice(t,0,e),t===0&&gd(e)}};function Za(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function po(){}function Eg(e,n,t,l,s){if(s){if(typeof l=="function"){var r=l;l=function(){var c=ps(a);r.call(c)}}var a=Tc(n,l,e,0,null,!1,!1,"",po);return e._reactRootContainer=a,e[Ke]=a.current,Gt(e.nodeType===8?e.parentNode:e),On(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof l=="function"){var i=l;l=function(){var c=ps(o);i.call(c)}}var o=Xa(e,0,!1,null,null,!1,!1,"",po);return e._reactRootContainer=o,e[Ke]=o.current,Gt(e.nodeType===8?e.parentNode:e),On(function(){Ns(n,o,t,l)}),o}function Fs(e,n,t,l,s){var r=t._reactRootContainer;if(r){var a=r;if(typeof s=="function"){var i=s;s=function(){var o=ps(a);i.call(o)}}Ns(n,a,e,s)}else a=Eg(t,n,e,s,l);return ps(a)}dd=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Ft(n.pendingLanes);t!==0&&(ma(n,t|1),he(n,Q()),!(z&6)&&(pt=Q()+500,bn()))}break;case 13:On(function(){var l=Ye(e,1);if(l!==null){var s=oe();ze(l,e,1,s)}}),qa(e,1)}};ba=function(e){if(e.tag===13){var n=Ye(e,134217728);if(n!==null){var t=oe();ze(n,e,134217728,t)}qa(e,134217728)}};cd=function(e){if(e.tag===13){var n=pn(e),t=Ye(e,n);if(t!==null){var l=oe();ze(t,e,n,l)}qa(e,n)}};ud=function(){return O};pd=function(e,n){var t=O;try{return O=e,n()}finally{O=t}};Sr=function(e,n,t){switch(n){case"input":if(xr(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var l=t[n];if(l!==e&&l.form===e.form){var s=ys(l);if(!s)throw Error(w(90));Ao(l),xr(l,s)}}}break;case"textarea":Ho(e,t);break;case"select":n=t.value,n!=null&&et(e,!!t.multiple,n,!1)}};Jo=Qa;Zo=On;var Sg={usingClientEntryPoint:!1,Events:[dl,Kn,ys,Xo,qo,Qa]},Ct={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kg={bundleType:Ct.bundleType,version:Ct.version,rendererPackageName:Ct.rendererPackageName,rendererConfig:Ct.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Xe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:Ct.findFiberByHostInstance||wg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{xs=Fl.inject(kg),De=Fl}catch{}}ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sg;ye.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Za(n))throw Error(w(200));return yg(e,n,null,t)};ye.createRoot=function(e,n){if(!Za(e))throw Error(w(299));var t=!1,l="",s=zc;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Xa(e,1,!1,null,null,t,!1,l,s),e[Ke]=n.current,Gt(e.nodeType===8?e.parentNode:e),new Ja(n)};ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=td(n),e=e===null?null:e.stateNode,e};ye.flushSync=function(e){return On(e)};ye.hydrate=function(e,n,t){if(!_s(n))throw Error(w(200));return Fs(null,e,n,!0,t)};ye.hydrateRoot=function(e,n,t){if(!Za(e))throw Error(w(405));var l=t!=null&&t.hydratedSources||null,s=!1,r="",a=zc;if(t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),n=Tc(n,null,e,1,t??null,s,!1,r,a),e[Ke]=n.current,Gt(e),l)for(e=0;e<l.length;e++)t=l[e],s=t._getVersion,s=s(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,s]:n.mutableSourceEagerHydrationData.push(t,s);return new Ps(n)};ye.render=function(e,n,t){if(!_s(n))throw Error(w(200));return Fs(null,e,n,!1,t)};ye.unmountComponentAtNode=function(e){if(!_s(e))throw Error(w(40));return e._reactRootContainer?(On(function(){Fs(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};ye.unstable_batchedUpdates=Qa;ye.unstable_renderSubtreeIntoContainer=function(e,n,t,l){if(!_s(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return Fs(e,n,t,!1,l)};ye.version="18.3.1-next-f1338f8080-20240426";function Oc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Oc)}catch(e){console.error(e)}}Oc(),Oo.exports=ye;var jg=Oo.exports,go=jg;dr.createRoot=go.createRoot,dr.hydrateRoot=go.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},sl.apply(this,arguments)}var sn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(sn||(sn={}));const vo="popstate";function Cg(e){e===void 0&&(e={});function n(l,s){let{pathname:r,search:a,hash:i}=l.location;return ta("",{pathname:r,search:a,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(l,s){return typeof s=="string"?s:gs(s)}return Pg(n,t,null,e)}function Y(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function ei(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Ng(){return Math.random().toString(36).substr(2,8)}function ho(e,n){return{usr:e.state,key:e.key,idx:n}}function ta(e,n,t,l){return t===void 0&&(t=null),sl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?xt(n):n,{state:t,key:n&&n.key||l||Ng()})}function gs(e){let{pathname:n="/",search:t="",hash:l=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),l&&l!=="#"&&(n+=l.charAt(0)==="#"?l:"#"+l),n}function xt(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let l=e.indexOf("?");l>=0&&(n.search=e.substr(l),e=e.substr(0,l)),e&&(n.pathname=e)}return n}function Pg(e,n,t,l){l===void 0&&(l={});let{window:s=document.defaultView,v5Compat:r=!1}=l,a=s.history,i=sn.Pop,o=null,c=h();c==null&&(c=0,a.replaceState(sl({},a.state,{idx:c}),""));function h(){return(a.state||{idx:null}).idx}function p(){i=sn.Pop;let k=h(),g=k==null?null:k-c;c=k,o&&o({action:i,location:y.location,delta:g})}function x(k,g){i=sn.Push;let u=ta(y.location,k,g);c=h()+1;let v=ho(u,c),f=y.createHref(u);try{a.pushState(v,"",f)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(f)}r&&o&&o({action:i,location:y.location,delta:1})}function m(k,g){i=sn.Replace;let u=ta(y.location,k,g);c=h();let v=ho(u,c),f=y.createHref(u);a.replaceState(v,"",f),r&&o&&o({action:i,location:y.location,delta:0})}function b(k){let g=s.location.origin!=="null"?s.location.origin:s.location.href,u=typeof k=="string"?k:gs(k);return u=u.replace(/ $/,"%20"),Y(g,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,g)}let y={get action(){return i},get location(){return e(s,a)},listen(k){if(o)throw new Error("A history only accepts one active listener");return s.addEventListener(vo,p),o=k,()=>{s.removeEventListener(vo,p),o=null}},createHref(k){return n(s,k)},createURL:b,encodeLocation(k){let g=b(k);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:x,replace:m,go(k){return a.go(k)}};return y}var xo;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(xo||(xo={}));function _g(e,n,t){return t===void 0&&(t="/"),Fg(e,n,t)}function Fg(e,n,t,l){let s=typeof n=="string"?xt(n):n,r=ni(s.pathname||"/",t);if(r==null)return null;let a=Ic(e);Rg(a);let i=null;for(let o=0;i==null&&o<a.length;++o){let c=Ag(r);i=Wg(a[o],c)}return i}function Ic(e,n,t,l){n===void 0&&(n=[]),t===void 0&&(t=[]),l===void 0&&(l="");let s=(r,a,i)=>{let o={relativePath:i===void 0?r.path||"":i,caseSensitive:r.caseSensitive===!0,childrenIndex:a,route:r};o.relativePath.startsWith("/")&&(Y(o.relativePath.startsWith(l),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(l.length));let c=vn([l,o.relativePath]),h=t.concat(o);r.children&&r.children.length>0&&(Y(r.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ic(r.children,n,h,c)),!(r.path==null&&!r.index)&&n.push({path:c,score:Mg(c,r.index),routesMeta:h})};return e.forEach((r,a)=>{var i;if(r.path===""||!((i=r.path)!=null&&i.includes("?")))s(r,a);else for(let o of Uc(r.path))s(r,a,o)}),n}function Uc(e){let n=e.split("/");if(n.length===0)return[];let[t,...l]=n,s=t.endsWith("?"),r=t.replace(/\?$/,"");if(l.length===0)return s?[r,""]:[r];let a=Uc(l.join("/")),i=[];return i.push(...a.map(o=>o===""?r:[r,o].join("/"))),s&&i.push(...a),i.map(o=>e.startsWith("/")&&o===""?"/":o)}function Rg(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Dg(n.routesMeta.map(l=>l.childrenIndex),t.routesMeta.map(l=>l.childrenIndex)))}const Lg=/^:[\w-]+$/,Tg=3,zg=2,Og=1,Ig=10,Ug=-2,fo=e=>e==="*";function Mg(e,n){let t=e.split("/"),l=t.length;return t.some(fo)&&(l+=Ug),n&&(l+=zg),t.filter(s=>!fo(s)).reduce((s,r)=>s+(Lg.test(r)?Tg:r===""?Og:Ig),l)}function Dg(e,n){return e.length===n.length&&e.slice(0,-1).every((l,s)=>l===n[s])?e[e.length-1]-n[n.length-1]:0}function Wg(e,n,t){let{routesMeta:l}=e,s={},r="/",a=[];for(let i=0;i<l.length;++i){let o=l[i],c=i===l.length-1,h=r==="/"?n:n.slice(r.length)||"/",p=$g({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},h),x=o.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:vn([r,p.pathname]),pathnameBase:Yg(vn([r,p.pathnameBase])),route:x}),p.pathnameBase!=="/"&&(r=vn([r,p.pathnameBase]))}return a}function $g(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,l]=Bg(e.path,e.caseSensitive,e.end),s=n.match(t);if(!s)return null;let r=s[0],a=r.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:l.reduce((c,h,p)=>{let{paramName:x,isOptional:m}=h;if(x==="*"){let y=i[p]||"";a=r.slice(0,r.length-y.length).replace(/(.)\/+$/,"$1")}const b=i[p];return m&&!b?c[x]=void 0:c[x]=(b||"").replace(/%2F/g,"/"),c},{}),pathname:r,pathnameBase:a,pattern:e}}function Bg(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),ei(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,o)=>(l.push({paramName:i,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),l]}function Ag(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return ei(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function ni(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,l=e.charAt(t);return l&&l!=="/"?null:e.slice(t)||"/"}const Vg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hg=e=>Vg.test(e);function Qg(e,n){n===void 0&&(n="/");let{pathname:t,search:l="",hash:s=""}=typeof e=="string"?xt(e):e,r;if(t)if(Hg(t))r=t;else{if(t.includes("//")){let a=t;t=t.replace(/\/\/+/g,"/"),ei(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+t))}t.startsWith("/")?r=mo(t.substring(1),"/"):r=mo(t,n)}else r=n;return{pathname:r,search:Gg(l),hash:Xg(s)}}function mo(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function or(e,n,t,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Kg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Mc(e,n){let t=Kg(e);return n?t.map((l,s)=>s===t.length-1?l.pathname:l.pathnameBase):t.map(l=>l.pathnameBase)}function Dc(e,n,t,l){l===void 0&&(l=!1);let s;typeof e=="string"?s=xt(e):(s=sl({},e),Y(!s.pathname||!s.pathname.includes("?"),or("?","pathname","search",s)),Y(!s.pathname||!s.pathname.includes("#"),or("#","pathname","hash",s)),Y(!s.search||!s.search.includes("#"),or("#","search","hash",s)));let r=e===""||s.pathname==="",a=r?"/":s.pathname,i;if(a==null)i=t;else{let p=n.length-1;if(!l&&a.startsWith("..")){let x=a.split("/");for(;x[0]==="..";)x.shift(),p-=1;s.pathname=x.join("/")}i=p>=0?n[p]:"/"}let o=Qg(s,i),c=a&&a!=="/"&&a.endsWith("/"),h=(r||a===".")&&t.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const vn=e=>e.join("/").replace(/\/\/+/g,"/"),Yg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wc=["post","put","patch","delete"];new Set(Wc);const Jg=["get",...Wc];new Set(Jg);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rl(){return rl=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},rl.apply(this,arguments)}const ti=E.createContext(null),Zg=E.createContext(null),Mn=E.createContext(null),Rs=E.createContext(null),yn=E.createContext({outlet:null,matches:[],isDataRoute:!1}),$c=E.createContext(null);function ev(e,n){let{relative:t}=n===void 0?{}:n;ul()||Y(!1);let{basename:l,navigator:s}=E.useContext(Mn),{hash:r,pathname:a,search:i}=Ac(e,{relative:t}),o=a;return l!=="/"&&(o=a==="/"?l:vn([l,a])),s.createHref({pathname:o,search:i,hash:r})}function ul(){return E.useContext(Rs)!=null}function Ls(){return ul()||Y(!1),E.useContext(Rs).location}function Bc(e){E.useContext(Mn).static||E.useLayoutEffect(e)}function nv(){let{isDataRoute:e}=E.useContext(yn);return e?hv():tv()}function tv(){ul()||Y(!1);let e=E.useContext(ti),{basename:n,future:t,navigator:l}=E.useContext(Mn),{matches:s}=E.useContext(yn),{pathname:r}=Ls(),a=JSON.stringify(Mc(s,t.v7_relativeSplatPath)),i=E.useRef(!1);return Bc(()=>{i.current=!0}),E.useCallback(function(c,h){if(h===void 0&&(h={}),!i.current)return;if(typeof c=="number"){l.go(c);return}let p=Dc(c,JSON.parse(a),r,h.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:vn([n,p.pathname])),(h.replace?l.replace:l.push)(p,h.state,h)},[n,l,a,r,e])}function lv(){let{matches:e}=E.useContext(yn),n=e[e.length-1];return n?n.params:{}}function Ac(e,n){let{relative:t}=n===void 0?{}:n,{future:l}=E.useContext(Mn),{matches:s}=E.useContext(yn),{pathname:r}=Ls(),a=JSON.stringify(Mc(s,l.v7_relativeSplatPath));return E.useMemo(()=>Dc(e,JSON.parse(a),r,t==="path"),[e,a,r,t])}function sv(e,n){return rv(e,n)}function rv(e,n,t,l){ul()||Y(!1);let{navigator:s}=E.useContext(Mn),{matches:r}=E.useContext(yn),a=r[r.length-1],i=a?a.params:{};a&&a.pathname;let o=a?a.pathnameBase:"/";a&&a.route;let c=Ls(),h;if(n){var p;let k=typeof n=="string"?xt(n):n;o==="/"||(p=k.pathname)!=null&&p.startsWith(o)||Y(!1),h=k}else h=c;let x=h.pathname||"/",m=x;if(o!=="/"){let k=o.replace(/^\//,"").split("/");m="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let b=_g(e,{pathname:m}),y=cv(b&&b.map(k=>Object.assign({},k,{params:Object.assign({},i,k.params),pathname:vn([o,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?o:vn([o,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),r,t,l);return n&&y?E.createElement(Rs.Provider,{value:{location:rl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:sn.Pop}},y):y}function av(){let e=vv(),n=qg(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},n),t?E.createElement("pre",{style:s},t):null,null)}const iv=E.createElement(av,null);class ov extends E.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?E.createElement(yn.Provider,{value:this.props.routeContext},E.createElement($c.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dv(e){let{routeContext:n,match:t,children:l}=e,s=E.useContext(ti);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),E.createElement(yn.Provider,{value:n},l)}function cv(e,n,t,l){var s;if(n===void 0&&(n=[]),t===void 0&&(t=null),l===void 0&&(l=null),e==null){var r;if(!t)return null;if(t.errors)e=t.matches;else if((r=l)!=null&&r.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let a=e,i=(s=t)==null?void 0:s.errors;if(i!=null){let h=a.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id])!==void 0);h>=0||Y(!1),a=a.slice(0,Math.min(a.length,h+1))}let o=!1,c=-1;if(t&&l&&l.v7_partialHydration)for(let h=0;h<a.length;h++){let p=a[h];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=h),p.route.id){let{loaderData:x,errors:m}=t,b=p.route.loader&&x[p.route.id]===void 0&&(!m||m[p.route.id]===void 0);if(p.route.lazy||b){o=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((h,p,x)=>{let m,b=!1,y=null,k=null;t&&(m=i&&p.route.id?i[p.route.id]:void 0,y=p.route.errorElement||iv,o&&(c<0&&x===0?(xv("route-fallback"),b=!0,k=null):c===x&&(b=!0,k=p.route.hydrateFallbackElement||null)));let g=n.concat(a.slice(0,x+1)),u=()=>{let v;return m?v=y:b?v=k:p.route.Component?v=E.createElement(p.route.Component,null):p.route.element?v=p.route.element:v=h,E.createElement(dv,{match:p,routeContext:{outlet:h,matches:g,isDataRoute:t!=null},children:v})};return t&&(p.route.ErrorBoundary||p.route.errorElement||x===0)?E.createElement(ov,{location:t.location,revalidation:t.revalidation,component:y,error:m,children:u(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):u()},null)}var Vc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Vc||{}),Hc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Hc||{});function uv(e){let n=E.useContext(ti);return n||Y(!1),n}function pv(e){let n=E.useContext(Zg);return n||Y(!1),n}function gv(e){let n=E.useContext(yn);return n||Y(!1),n}function Qc(e){let n=gv(),t=n.matches[n.matches.length-1];return t.route.id||Y(!1),t.route.id}function vv(){var e;let n=E.useContext($c),t=pv(),l=Qc();return n!==void 0?n:(e=t.errors)==null?void 0:e[l]}function hv(){let{router:e}=uv(Vc.UseNavigateStable),n=Qc(Hc.UseNavigateStable),t=E.useRef(!1);return Bc(()=>{t.current=!0}),E.useCallback(function(s,r){r===void 0&&(r={}),t.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,rl({fromRouteId:n},r)))},[e,n])}const bo={};function xv(e,n,t){bo[e]||(bo[e]=!0)}function fv(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function la(e){Y(!1)}function mv(e){let{basename:n="/",children:t=null,location:l,navigationType:s=sn.Pop,navigator:r,static:a=!1,future:i}=e;ul()&&Y(!1);let o=n.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:o,navigator:r,static:a,future:rl({v7_relativeSplatPath:!1},i)}),[o,i,r,a]);typeof l=="string"&&(l=xt(l));let{pathname:h="/",search:p="",hash:x="",state:m=null,key:b="default"}=l,y=E.useMemo(()=>{let k=ni(h,o);return k==null?null:{location:{pathname:k,search:p,hash:x,state:m,key:b},navigationType:s}},[o,h,p,x,m,b,s]);return y==null?null:E.createElement(Mn.Provider,{value:c},E.createElement(Rs.Provider,{children:t,value:y}))}function bv(e){let{children:n,location:t}=e;return sv(sa(n),t)}new Promise(()=>{});function sa(e,n){n===void 0&&(n=[]);let t=[];return E.Children.forEach(e,(l,s)=>{if(!E.isValidElement(l))return;let r=[...n,s];if(l.type===E.Fragment){t.push.apply(t,sa(l.props.children,r));return}l.type!==la&&Y(!1),!l.props.index||!l.props.children||Y(!1);let a={id:l.props.id||r.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(a.children=sa(l.props.children,r)),t.push(a)}),t}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ra(){return ra=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ra.apply(this,arguments)}function yv(e,n){if(e==null)return{};var t={},l=Object.keys(e),s,r;for(r=0;r<l.length;r++)s=l[r],!(n.indexOf(s)>=0)&&(t[s]=e[s]);return t}function wv(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ev(e,n){return e.button===0&&(!n||n==="_self")&&!wv(e)}const Sv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kv="6";try{window.__reactRouterVersion=kv}catch{}const jv="startTransition",yo=vu[jv];function Cv(e){let{basename:n,children:t,future:l,window:s}=e,r=E.useRef();r.current==null&&(r.current=Cg({window:s,v5Compat:!0}));let a=r.current,[i,o]=E.useState({action:a.action,location:a.location}),{v7_startTransition:c}=l||{},h=E.useCallback(p=>{c&&yo?yo(()=>o(p)):o(p)},[o,c]);return E.useLayoutEffect(()=>a.listen(h),[a,h]),E.useEffect(()=>fv(l),[l]),E.createElement(mv,{basename:n,children:t,location:i.location,navigationType:i.action,navigator:a,future:l})}const Nv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vs=E.forwardRef(function(n,t){let{onClick:l,relative:s,reloadDocument:r,replace:a,state:i,target:o,to:c,preventScrollReset:h,viewTransition:p}=n,x=yv(n,Sv),{basename:m}=E.useContext(Mn),b,y=!1;if(typeof c=="string"&&Pv.test(c)&&(b=c,Nv))try{let v=new URL(window.location.href),f=c.startsWith("//")?new URL(v.protocol+c):new URL(c),S=ni(f.pathname,m);f.origin===v.origin&&S!=null?c=S+f.search+f.hash:y=!0}catch{}let k=ev(c,{relative:s}),g=_v(c,{replace:a,state:i,target:o,preventScrollReset:h,relative:s,viewTransition:p});function u(v){l&&l(v),v.defaultPrevented||g(v)}return E.createElement("a",ra({},x,{href:b||k,onClick:y||r?l:u,ref:t,target:o}))});var wo;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(wo||(wo={}));var Eo;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Eo||(Eo={}));function _v(e,n){let{target:t,replace:l,state:s,preventScrollReset:r,relative:a,viewTransition:i}=n===void 0?{}:n,o=nv(),c=Ls(),h=Ac(e,{relative:a});return E.useCallback(p=>{if(Ev(p,t)){p.preventDefault();let x=l!==void 0?l:gs(c)===gs(h);o(e,{replace:x,state:s,preventScrollReset:r,relative:a,viewTransition:i})}},[c,o,h,l,s,t,e,r,a,i])}const Kc={cittas:[{id:1,name:"සෝමනස්ස සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Pleasant feeling with wrong view, accompanied, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:19,descriptionSi:"සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති මූල නැති සිත",descriptionEn:"Pleasant feeling with wrong view, accompanied, rootless consciousness"},{id:2,name:"සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Pleasant feeling with wrong view, accompanied, with prompting consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:21,descriptionSi:"සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති සසංස්කාරික සිත",descriptionEn:"Pleasant feeling with wrong view, accompanied, with prompting consciousness"},{id:3,name:"සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Pleasant feeling with wrong view, dissociated, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:19,descriptionSi:"සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති මූල නැති සිත",descriptionEn:"Pleasant feeling with wrong view, dissociated, rootless consciousness"},{id:4,name:"සෝමනස්ස සහගත දෘෂ්ඨිගත විප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Pleasant feeling with wrong view, dissociated, with prompting consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:21,descriptionSi:"සුඛ වේදනාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති සසංස්කාරික සිත",descriptionEn:"Pleasant feeling with wrong view, dissociated, with prompting consciousness"},{id:5,name:"උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with wrong view, accompanied, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:18,descriptionSi:"උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති මූල නැති සිත",descriptionEn:"Equanimity with wrong view, accompanied, rootless consciousness"},{id:6,name:"උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Equanimity with wrong view, accompanied, with prompting consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:20,descriptionSi:"උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ එක්ව ඇති සසංස්කාරික සිත",descriptionEn:"Equanimity with wrong view, accompanied, with prompting consciousness"},{id:7,name:"උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with wrong view, dissociated, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:18,descriptionSi:"උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති මූල නැති සිත",descriptionEn:"Equanimity with wrong view, dissociated, rootless consciousness"},{id:8,name:"උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Equanimity with wrong view, dissociated, with prompting consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ලෝභ මූල",subcategoryEn:"Greed Root",chaithasikaCount:20,descriptionSi:"උපේක්ෂාව සහිත දෘෂ්ටිය සමඟ වෙන්ව ඇති සසංස්කාරික සිත",descriptionEn:"Equanimity with wrong view, dissociated, with prompting consciousness"},{id:9,name:"දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Unpleasant feeling with aversion, accompanied, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ද්වේශ මූල",subcategoryEn:"Hatred Root",chaithasikaCount:20,descriptionSi:"දුක් වේදනාව සහිත පටිඝය සමඟ එක්ව ඇති මූල නැති සිත",descriptionEn:"Unpleasant feeling with aversion, accompanied, rootless consciousness"},{id:10,name:"දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Unpleasant feeling with aversion, accompanied, with prompting consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"ද්වේශ මූල",subcategoryEn:"Hatred Root",chaithasikaCount:22,descriptionSi:"දුක් වේදනාව සහිත පටිඝය සමඟ එක්ව ඇති සසංස්කාරික සිත",descriptionEn:"Unpleasant feeling with aversion, accompanied, with prompting consciousness"},{id:11,name:"උපේක්ෂා සහගත විචිකිච්ඡා සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with doubt, accompanied, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"මෝහ මූල",subcategoryEn:"Delusion Root",chaithasikaCount:18,descriptionSi:"උපේක්ෂාව සහිත විචිකිච්ඡාව සමඟ එක්ව ඇති මූල නැති සිත",descriptionEn:"Equanimity with doubt, accompanied, rootless consciousness"},{id:12,name:"උපේක්ෂා සහගත උද්ධච්ච සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with restlessness, accompanied, rootless consciousness",category:"අකුසල්",categoryEn:"Unwholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"මෝහ මූල",subcategoryEn:"Delusion Root",chaithasikaCount:18,descriptionSi:"උපේක්ෂාව සහිත උද්ධච්චය සමඟ එක්ව ඇති මූල නැති සිත",descriptionEn:"Equanimity with restlessness, accompanied, rootless consciousness"},{id:13,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Pleasant feeling with knowledge, accompanied, rootless consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:38,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති කුසල් සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, rootless consciousness"},{id:14,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Pleasant feeling with knowledge, accompanied, with prompting consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:38,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික කුසල් සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, with prompting consciousness"},{id:15,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Pleasant feeling with knowledge, dissociated, rootless consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:37,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති කුසල් සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, rootless consciousness"},{id:16,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Pleasant feeling with knowledge, dissociated, with prompting consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:37,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික කුසල් සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, with prompting consciousness"},{id:17,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with knowledge, accompanied, rootless consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:37,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති කුසල් සිත",descriptionEn:"Equanimity with knowledge, accompanied, rootless consciousness"},{id:18,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Equanimity with knowledge, accompanied, with prompting consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:37,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික කුසල් සිත",descriptionEn:"Equanimity with knowledge, accompanied, with prompting consciousness"},{id:19,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත",nameEn:"Equanimity with knowledge, dissociated, rootless consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:36,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති කුසල් සිත",descriptionEn:"Equanimity with knowledge, dissociated, rootless consciousness"},{id:20,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත",nameEn:"Equanimity with knowledge, dissociated, with prompting consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර කුසල්",subcategoryEn:"Sensuous Sphere Wholesome",chaithasikaCount:36,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික කුසල් සිත",descriptionEn:"Equanimity with knowledge, dissociated, with prompting consciousness"},{id:21,name:"විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිතය",nameEn:"First jhana with initial and sustained application",category:"කුසල්",categoryEn:"Wholesome",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර කුසල්",subcategoryEn:"Form Sphere Wholesome",chaithasikaCount:34,descriptionSi:"විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන සිත",descriptionEn:"First jhana with initial and sustained application"},{id:22,name:"විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිතය",nameEn:"Second jhana with sustained application",category:"කුසල්",categoryEn:"Wholesome",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර කුසල්",subcategoryEn:"Form Sphere Wholesome",chaithasikaCount:32,descriptionSi:"විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන සිත",descriptionEn:"Second jhana with sustained application"},{id:23,name:"ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන සිතය",nameEn:"Third jhana with joy",category:"කුසල්",categoryEn:"Wholesome",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර කුසල්",subcategoryEn:"Form Sphere Wholesome",chaithasikaCount:31,descriptionSi:"ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන සිත",descriptionEn:"Third jhana with joy"},{id:24,name:"සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිතය",nameEn:"Fourth jhana with happiness",category:"කුසල්",categoryEn:"Wholesome",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර කුසල්",subcategoryEn:"Form Sphere Wholesome",chaithasikaCount:30,descriptionSi:"සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන සිත",descriptionEn:"Fourth jhana with happiness"},{id:25,name:"උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිතය",nameEn:"Fifth jhana with equanimity",category:"කුසල්",categoryEn:"Wholesome",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර කුසල්",subcategoryEn:"Form Sphere Wholesome",chaithasikaCount:30,descriptionSi:"උපේක්ෂා ඒකාග්‍රතා සහිත පංචම ධ්‍යාන සිත",descriptionEn:"Fifth jhana with equanimity"},{id:26,name:"ආකාසානඤ්චායතන කුසල් සිත",nameEn:"Space infinity consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"අරූපාවචර",typeEn:"Formless Sphere",subcategory:"අරූපාවචර කුසල්",subcategoryEn:"Formless Sphere Wholesome",chaithasikaCount:30,descriptionSi:"ආකාසානඤ්චායතන කුසල් සිත",descriptionEn:"Space infinity consciousness"},{id:27,name:"විඤ්ඤාණඤ්චායතන කුසල් සිත",nameEn:"Consciousness infinity consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"අරූපාවචර",typeEn:"Formless Sphere",subcategory:"අරූපාවචර කුසල්",subcategoryEn:"Formless Sphere Wholesome",chaithasikaCount:30,descriptionSi:"විඤ්ඤාණඤ්චායතන කුසල් සිත",descriptionEn:"Consciousness infinity consciousness"},{id:28,name:"ආකිඤ්චඤ්ඤායතන කුසල් සිත",nameEn:"Nothingness consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"අරූපාවචර",typeEn:"Formless Sphere",subcategory:"අරූපාවචර කුසල්",subcategoryEn:"Formless Sphere Wholesome",chaithasikaCount:30,descriptionSi:"ආකිඤ්චඤ්ඤායතන කුසල් සිත",descriptionEn:"Nothingness consciousness"},{id:29,name:"නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත",nameEn:"Neither perception nor non-perception consciousness",category:"කුසල්",categoryEn:"Wholesome",type:"අරූපාවචර",typeEn:"Formless Sphere",subcategory:"අරූපාවචර කුසල්",subcategoryEn:"Formless Sphere Wholesome",chaithasikaCount:30,descriptionSi:"නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත",descriptionEn:"Neither perception nor non-perception consciousness"},{id:30,name:"ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",nameEn:"First jhana stream-enterer path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",descriptionEn:"First jhana stream-enterer path consciousness"},{id:31,name:"ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",nameEn:"First jhana stream-enterer fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",descriptionEn:"First jhana stream-enterer fruition consciousness"},{id:32,name:"ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය",nameEn:"First jhana once-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය",descriptionEn:"First jhana once-returner path consciousness"},{id:33,name:"ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය",nameEn:"First jhana once-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය",descriptionEn:"First jhana once-returner fruition consciousness"},{id:34,name:"ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය",nameEn:"First jhana non-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය",descriptionEn:"First jhana non-returner path consciousness"},{id:35,name:"ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය",nameEn:"First jhana non-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය",descriptionEn:"First jhana non-returner fruition consciousness"},{id:36,name:"ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය",nameEn:"First jhana arahant path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන අරහත්ත මග්ග චිත්තය",descriptionEn:"First jhana arahant path consciousness"},{id:37,name:"ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය",nameEn:"First jhana arahant fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:36,descriptionSi:"ප්‍රථම ධ්‍යාන අරහත්ත ඵල චිත්තය",descriptionEn:"First jhana arahant fruition consciousness"},{id:38,name:"ද්විතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",nameEn:"Second jhana stream-enterer path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",descriptionEn:"Second jhana stream-enterer path consciousness"},{id:39,name:"ද්විතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",nameEn:"Second jhana stream-enterer fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",descriptionEn:"Second jhana stream-enterer fruition consciousness"},{id:40,name:"ද්විතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය",nameEn:"Second jhana once-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය",descriptionEn:"Second jhana once-returner path consciousness"},{id:41,name:"ද්විතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය",nameEn:"Second jhana once-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය",descriptionEn:"Second jhana once-returner fruition consciousness"},{id:42,name:"ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය",nameEn:"Second jhana non-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය",descriptionEn:"Second jhana non-returner path consciousness"},{id:43,name:"ද්විතීය ධ්‍යාන අනාගාමි ඵල චිත්තය",nameEn:"Second jhana non-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන අනාගාමි ඵල චිත්තය",descriptionEn:"Second jhana non-returner fruition consciousness"},{id:44,name:"ද්විතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය",nameEn:"Second jhana arahant path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය",descriptionEn:"Second jhana arahant path consciousness"},{id:45,name:"ද්විතීය ධ්‍යාන අරහත්ත ඵල චිත්තය",nameEn:"Second jhana arahant fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:34,descriptionSi:"ද්විතීය ධ්‍යාන අරහත්ත ඵල චිත්තය",descriptionEn:"Second jhana arahant fruition consciousness"},{id:46,name:"තෘතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",nameEn:"Third jhana stream-enterer path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",descriptionEn:"Third jhana stream-enterer path consciousness"},{id:47,name:"තෘතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",nameEn:"Third jhana stream-enterer fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",descriptionEn:"Third jhana stream-enterer fruition consciousness"},{id:48,name:"තෘතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය",nameEn:"Third jhana once-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන සකදාගාමී මග්ග චිත්තය",descriptionEn:"Third jhana once-returner path consciousness"},{id:49,name:"තෘතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය",nameEn:"Third jhana once-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන සකදාගාමී ඵල චිත්තය",descriptionEn:"Third jhana once-returner fruition consciousness"},{id:50,name:"තෘතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය",nameEn:"Third jhana non-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය",descriptionEn:"Third jhana non-returner path consciousness"},{id:51,name:"තෘතීය ධ්‍යාන අනාගාමි ඵල චිත්තය",nameEn:"Third jhana non-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන අනාගාමි ඵල චිත්තය",descriptionEn:"Third jhana non-returner fruition consciousness"},{id:52,name:"තෘතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය",nameEn:"Third jhana arahant path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන අරහත්ත මග්ග චිත්තය",descriptionEn:"Third jhana arahant path consciousness"},{id:53,name:"තෘතීය ධ්‍යාන අරහත්ත ඵල චිත්තය",nameEn:"Third jhana arahant fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:33,descriptionSi:"තෘතීය ධ්‍යාන අරහත්ත ඵල චිත්තය",descriptionEn:"Third jhana arahant fruition consciousness"},{id:54,name:"චතුර්ථ ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",nameEn:"Fourth jhana stream-enterer path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",descriptionEn:"Fourth jhana stream-enterer path consciousness"},{id:55,name:"චතුර්ථ ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",nameEn:"Fourth jhana stream-enterer fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",descriptionEn:"Fourth jhana stream-enterer fruition consciousness"},{id:56,name:"චතුර්ථ ධ්‍යාන සකදාගාමී මග්ග චිත්තය",nameEn:"Fourth jhana once-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන සකදාගාමී මග්ග චිත්තය",descriptionEn:"Fourth jhana once-returner path consciousness"},{id:57,name:"චතුර්ථ ධ්‍යාන සකදාගාමී ඵල චිත්තය",nameEn:"Fourth jhana once-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන සකදාගාමී ඵල චිත්තය",descriptionEn:"Fourth jhana once-returner fruition consciousness"},{id:58,name:"චතුර්ථ ධ්‍යාන අනාගාමි මග්ග චිත්තය",nameEn:"Fourth jhana non-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන අනාගාමි මග්ග චිත්තය",descriptionEn:"Fourth jhana non-returner path consciousness"},{id:59,name:"චතුර්ථ ධ්‍යාන අනාගාමි ඵල චිත්තය",nameEn:"Fourth jhana non-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන අනාගාමි ඵල චිත්තය",descriptionEn:"Fourth jhana non-returner fruition consciousness"},{id:60,name:"චතුර්ථ ධ්‍යාන අරහත්ත මග්ග චිත්තය",nameEn:"Fourth jhana arahant path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන අරහත්ත මග්ග චිත්තය",descriptionEn:"Fourth jhana arahant path consciousness"},{id:61,name:"චතුර්ථ ධ්‍යාන අරහත්ත ඵල චිත්තය",nameEn:"Fourth jhana arahant fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:32,descriptionSi:"චතුර්ථ ධ්‍යාන අරහත්ත ඵල චිත්තය",descriptionEn:"Fourth jhana arahant fruition consciousness"},{id:62,name:"පංචම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",nameEn:"Fifth jhana stream-enterer path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",descriptionEn:"Fifth jhana stream-enterer path consciousness"},{id:63,name:"පංචම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",nameEn:"Fifth jhana stream-enterer fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",descriptionEn:"Fifth jhana stream-enterer fruition consciousness"},{id:64,name:"පංචම ධ්‍යාන සකදාගාමී මග්ග චිත්තය",nameEn:"Fifth jhana once-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන සකදාගාමී මග්ග චිත්තය",descriptionEn:"Fifth jhana once-returner path consciousness"},{id:65,name:"පංචම ධ්‍යාන සකදාගාමී ඵල චිත්තය",nameEn:"Fifth jhana once-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන සකදාගාමී ඵල චිත්තය",descriptionEn:"Fifth jhana once-returner fruition consciousness"},{id:66,name:"පංචම ධ්‍යාන අනාගාමි මග්ග චිත්තය",nameEn:"Fifth jhana non-returner path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන අනාගාමි මග්ග චිත්තය",descriptionEn:"Fifth jhana non-returner path consciousness"},{id:67,name:"පංචම ධ්‍යාන අනාගාමි ඵල චිත්තය",nameEn:"Fifth jhana non-returner fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන අනාගාමි ඵල චිත්තය",descriptionEn:"Fifth jhana non-returner fruition consciousness"},{id:68,name:"පංචම ධ්‍යාන අරහත්ත මග්ග චිත්තය",nameEn:"Fifth jhana arahant path consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"මග්ග",typeEn:"Path",subcategory:"ලෝකෝත්තර මග්ග",subcategoryEn:"Supramundane Path",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන අරහත්ත මග්ග චිත්තය",descriptionEn:"Fifth jhana arahant path consciousness"},{id:69,name:"පංචම ධ්‍යාන අරහත්ත ඵල චිත්තය",nameEn:"Fifth jhana arahant fruition consciousness",category:"ලෝකෝත්තර",categoryEn:"Supramundane",type:"ඵල",typeEn:"Fruition",subcategory:"ලෝකෝත්තර ඵල",subcategoryEn:"Supramundane Fruition",chaithasikaCount:30,descriptionSi:"පංචම ධ්‍යාන අරහත්ත ඵල චිත්තය",descriptionEn:"Fifth jhana arahant fruition consciousness"},{id:70,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත",nameEn:"Pleasant feeling with knowledge, accompanied, rootless resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:33,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති විපාක සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, rootless resultant consciousness"},{id:71,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත",nameEn:"Pleasant feeling with knowledge, accompanied, with prompting resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:33,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික විපාක සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, with prompting resultant consciousness"},{id:72,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත",nameEn:"Pleasant feeling with knowledge, dissociated, rootless resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:32,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති විපාක සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, rootless resultant consciousness"},{id:73,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත",nameEn:"Pleasant feeling with knowledge, dissociated, with prompting resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:32,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික විපාක සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, with prompting resultant consciousness"},{id:74,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික විපාක සිත",nameEn:"Equanimity with knowledge, accompanied, rootless resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:32,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති විපාක සිත",descriptionEn:"Equanimity with knowledge, accompanied, rootless resultant consciousness"},{id:75,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික විපාක සිත",nameEn:"Equanimity with knowledge, accompanied, with prompting resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:32,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික විපාක සිත",descriptionEn:"Equanimity with knowledge, accompanied, with prompting resultant consciousness"},{id:76,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික විපාක සිත",nameEn:"Equanimity with knowledge, dissociated, rootless resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:31,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති විපාක සිත",descriptionEn:"Equanimity with knowledge, dissociated, rootless resultant consciousness"},{id:77,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික විපාක සිත",nameEn:"Equanimity with knowledge, dissociated, with prompting resultant consciousness",category:"විපාක",categoryEn:"Resultant",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර විපාක",subcategoryEn:"Sensuous Sphere Resultant",chaithasikaCount:31,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික විපාක සිත",descriptionEn:"Equanimity with knowledge, dissociated, with prompting resultant consciousness"},{id:78,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත",nameEn:"Pleasant feeling with knowledge, accompanied, rootless functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:35,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති ක්‍රියා සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, rootless functional consciousness"},{id:79,name:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත",nameEn:"Pleasant feeling with knowledge, accompanied, with prompting functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:35,descriptionSi:"සුඛ වේදනාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික ක්‍රියා සිත",descriptionEn:"Pleasant feeling with knowledge, accompanied, with prompting functional consciousness"},{id:80,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත",nameEn:"Pleasant feeling with knowledge, dissociated, rootless functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:34,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති ක්‍රියා සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, rootless functional consciousness"},{id:81,name:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත",nameEn:"Pleasant feeling with knowledge, dissociated, with prompting functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:34,descriptionSi:"සුඛ වේදනාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික ක්‍රියා සිත",descriptionEn:"Pleasant feeling with knowledge, dissociated, with prompting functional consciousness"},{id:82,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත",nameEn:"Equanimity with knowledge, accompanied, rootless functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:34,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති මූල නැති ක්‍රියා සිත",descriptionEn:"Equanimity with knowledge, accompanied, rootless functional consciousness"},{id:83,name:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත",nameEn:"Equanimity with knowledge, accompanied, with prompting functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:34,descriptionSi:"උපේක්ෂාව සහිත ඤාණය සමඟ එක්ව ඇති සසංස්කාරික ක්‍රියා සිත",descriptionEn:"Equanimity with knowledge, accompanied, with prompting functional consciousness"},{id:84,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික ක්‍රියා සිත",nameEn:"Equanimity with knowledge, dissociated, rootless functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:33,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති මූල නැති ක්‍රියා සිත",descriptionEn:"Equanimity with knowledge, dissociated, rootless functional consciousness"},{id:85,name:"උපේක්ෂා සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික ක්‍රියා සිත",nameEn:"Equanimity with knowledge, dissociated, with prompting functional consciousness",category:"ක්‍රියා",categoryEn:"Functional",type:"කාමාවචර",typeEn:"Sensuous Sphere",subcategory:"කාමාවචර ක්‍රියා",subcategoryEn:"Sensuous Sphere Functional",chaithasikaCount:33,descriptionSi:"උපේක්ෂාව සහිත ඥානය සමඟ වෙන්ව ඇති සසංස්කාරික ක්‍රියා සිත",descriptionEn:"Equanimity with knowledge, dissociated, with prompting functional consciousness"},{id:86,name:"විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන විපාක සිතය",nameEn:"First jhana resultant consciousness with initial and sustained application",category:"විපාක",categoryEn:"Resultant",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර විපාක",subcategoryEn:"Form Sphere Resultant",chaithasikaCount:35,descriptionSi:"විතර්ක විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන විපාක සිත",descriptionEn:"First jhana resultant consciousness with initial and sustained application"},{id:87,name:"විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන විපාක සිතය",nameEn:"Second jhana resultant consciousness with sustained application",category:"විපාක",categoryEn:"Resultant",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර විපාක",subcategoryEn:"Form Sphere Resultant",chaithasikaCount:34,descriptionSi:"විචාර ප්‍රීති සුඛ ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යාන විපාක සිත",descriptionEn:"Second jhana resultant consciousness with sustained application"},{id:88,name:"ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන විපාක සිතය",nameEn:"Third jhana resultant consciousness with joy",category:"විපාක",categoryEn:"Resultant",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර විපාක",subcategoryEn:"Form Sphere Resultant",chaithasikaCount:33,descriptionSi:"ප්‍රීති සුඛ ඒකාග්‍රතා සහිත තෘතීය ධ්‍යාන විපාක සිත",descriptionEn:"Third jhana resultant consciousness with joy"},{id:89,name:"සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන විපාක සිතය",nameEn:"Fourth jhana resultant consciousness with happiness",category:"විපාක",categoryEn:"Resultant",type:"රූපාවචර",typeEn:"Form Sphere",subcategory:"රූපාවචර විපාක",subcategoryEn:"Form Sphere Resultant",chaithasikaCount:32,descriptionSi:"සුඛ ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යාන විපාක සිත",descriptionEn:"Fourth jhana resultant consciousness with happiness"}]},Fv=e=>Kc.cittas.find(n=>n.id===parseInt(e)),Yc=()=>Kc.cittas,Rv=12e3,Nt=[{src:new URL("/assets/view-zen-buddha-statue-spirituality-min-D71rG0MA.jpg",import.meta.url).href,position:"center 20%"},{src:new URL("/assets/view-buddha-statuette-with-incense-min--9-cmNN6.jpg",import.meta.url).href},{src:new URL("/assets/view-buddha-statuette-min-Cx5jT_dh.jpg",import.meta.url).href},{src:new URL("/assets/view-zen-buddha-statue-spirituality%20(1)-QixKCFL4.jpg",import.meta.url).href},{src:new URL("/assets/freepik__this-is-an-outdoor-photograph-of-a-buddha-statuede__69926-BvJnA2Ua.png",import.meta.url).href},{src:new URL("/assets/freepik__sunlit-stone-buddha-statue-under-a-sprawling-tree-__9048-BWWILMyI.png",import.meta.url).href},{src:new URL("/assets/Dambulla-Cave-temple-Culturale-Triangle-sri-lanka%20(1)-DL_p5wzk.jpg",import.meta.url).href},{src:new URL("/assets/old-vatadage-pillars-anuradhapura-sri-lanka-november-view-preserved-front-ruwanwelisaya-stupa-november-83224462%20(1)-DQqw48Vu.png",import.meta.url).href},{src:new URL("/assets/things-to-do-in-sri-lanka_adams-peak-CR7no70x.png",import.meta.url).href},{src:new URL("/assets/Why%20You%20Should%20Visit%20Dambulla%20Cave%20Temple%20in%20Sri%20Lanka%20(1)-DysHVIgr.jpeg",import.meta.url).href},{src:new URL("/assets/16344616755_a516594ea7_h-Ceodu2g1.jpg",import.meta.url).href},{src:new URL("/assets/ChatGPT%20Image%20Nov%206_%202025_%2012_40_32%20PM-fYEMo5sW.png",import.meta.url).href}];function Lv(){const[e,n]=E.useState(""),[t,l]=E.useState(""),[s,r]=E.useState(0),a=Yc();E.useEffect(()=>{if(Nt.length<=1)return;const p=setInterval(()=>{r(x=>(x+1)%Nt.length)},Rv);return()=>clearInterval(p)},[]);const i=E.useMemo(()=>a.filter(p=>{var b,y;const x=p.name.toLowerCase().includes(e.toLowerCase())||((b=p.nameEn)==null?void 0:b.toLowerCase().includes(e.toLowerCase()))||((y=p.descriptionSi)==null?void 0:y.toLowerCase().includes(e.toLowerCase())),m=!t||p.category===t;return x&&m}),[e,t,a]),o=E.useMemo(()=>[...new Set(a.map(p=>p.category))],[a]),c=(s-1+Nt.length)%Nt.length,h=p=>p===s?"hero-bg-image active":p===c?"hero-bg-image prev":"hero-bg-image next";return d.jsxs("div",{className:"home",children:[d.jsxs("section",{className:"hero",children:[d.jsx("div",{className:"hero-background-slider","aria-hidden":"true",children:Nt.map((p,x)=>d.jsx("div",{className:h(x),style:{backgroundImage:`url(${p.src})`,backgroundPosition:p.position||"center center"}},p.src))}),d.jsx("div",{className:"hero-overlay","aria-hidden":"true"}),d.jsx("div",{className:"hero-container",children:d.jsxs("div",{className:"hero-content",children:[d.jsx("p",{className:"hero-pretitle",children:"Abhidhamma Study Tool"}),d.jsx("h1",{className:"hero-title",children:"නමෝ තස්ස භගවතෝ අරහතෝ සම්මා සම්බුද්ධස්ස !!!"}),d.jsx("p",{className:"hero-subtitle",children:"අභිධර්මය - ඔබට දැනුනු තැනින් දකින්න"}),d.jsx("blockquote",{className:"hero-quote",children:d.jsx("span",{children:'"බුදුවරයන් ලොව පහල වීමෙන් ලෝකයට ලැබෙන විශිෂ්ට ධර්මය අභිධර්ම පිටකය ය"'})}),d.jsxs("div",{className:"hero-actions",children:[d.jsxs("a",{href:"#citta-table",className:"btn btn-primary",children:[d.jsx("i",{className:"fas fa-table"})," චිත්ත චෛතසික වගුව"]}),d.jsxs("a",{href:"#citta-table",className:"btn btn-secondary",children:[d.jsx("i",{className:"fas fa-brain"})," අභිධර්මය අත්විඳිමු"]})]}),d.jsxs("div",{className:"hero-stats",children:[d.jsxs("div",{className:"hero-stat-card",children:[d.jsx("p",{className:"hero-stat-value",children:"89"}),d.jsx("p",{className:"hero-stat-label",children:"සිත්"})]}),d.jsxs("div",{className:"hero-stat-card",children:[d.jsx("p",{className:"hero-stat-value",children:"52"}),d.jsx("p",{className:"hero-stat-label",children:"චෛතසික"})]}),d.jsxs("div",{className:"hero-stat-card",children:[d.jsx("p",{className:"hero-stat-value",children:a.length}),d.jsx("p",{className:"hero-stat-label",children:"දත්ත"})]})]})]})})]}),d.jsx("section",{id:"citta-table",className:"citta-table-section",children:d.jsxs("div",{className:"container",children:[d.jsx("h2",{className:"section-title",children:"චිත්ත චෛතසික වගුව"}),d.jsxs("div",{className:"filters",children:[d.jsx("input",{type:"text",className:"search-input",placeholder:"සොයන්න...",value:e,onChange:p=>n(p.target.value)}),d.jsxs("select",{className:"category-filter",value:t,onChange:p=>l(p.target.value),children:[d.jsx("option",{value:"",children:"සියලුම කාණ්ඩ"}),o.map(p=>d.jsx("option",{value:p,children:p},p))]})]}),d.jsx("div",{className:"table-container",children:d.jsxs("table",{className:"citta-table",children:[d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsx("th",{children:"ID"}),d.jsx("th",{children:"නම"}),d.jsx("th",{children:"කාණ්ඩය"}),d.jsx("th",{children:"වර්ගය"}),d.jsx("th",{children:"විස්තර"}),d.jsx("th",{children:"ක්‍රියා"})]})}),d.jsx("tbody",{children:i.map(p=>{var x;return d.jsxs("tr",{children:[d.jsx("td",{children:p.id}),d.jsx("td",{children:p.name}),d.jsx("td",{children:d.jsx("span",{className:`category-badge category-${((x=p.categoryEn)==null?void 0:x.toLowerCase().replace(/\s+/g,"-"))||"default"}`,children:p.category})}),d.jsx("td",{children:p.type}),d.jsx("td",{children:p.descriptionSi||p.description}),d.jsx("td",{children:d.jsxs(vs,{to:`/citta/${p.id}`,className:"view-details-btn",children:[d.jsx("i",{className:"fas fa-eye"})," විස්තර"]})})]},p.id)})})]})})]})})]})}const Tv={1:{id:1,title:"සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත අසංඛාරික සිත",levels:{level1:`<div class="content-box green">
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">😊</span>
                                <span class="text-lg"><strong>සතුටින්</strong> යුක්ත සිතක්</span>
                            </p>
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">❌</span>
                                <span class="text-lg"><strong>වැරදි විශ්වාසයක්</strong> තියෙනවා</span>
                            </p>
                            <p class="flex items-center gap-3">
                                <span class="text-4xl">🌱</span>
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවූ (අසංඛාරික)</span>
                            </p>
                        </div>
                        <div class="content-box yellow">
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>
                            <p class="italic leading-relaxed text-gray-700">
                                "මේ ලෝකයේ තියෙන්නේ මේ ජීවිතේ විතරයි! කර්මයක් නැහැ, පුනර්භවයක් නැහැ!  
                                මම මේ සල්ලි ටිකෙන් සතුටින් ජීවත් වෙනවා!"  
                                → මිථ්‍යා දෘෂ්ටිය + ලෝභය + සතුට → අතිශයින්ම භයානක!
                            </p>`,level2:`<div class="space-y-6">
                    <div class="grid-2">
                        <div class="content-box blue">
                            <h4 class="font-bold text-xl text-blue-900 mb-3">සෝමනස්ස සහගත</h4>
                            <p class="text-lg">මානසික සතුට (ප්‍රීති + සුඛ වේදනා)</p>
                            <p class="text-sm mt-2 text-blue-700">අකුසල ප්‍රීතියක් – කාම රාගයෙන් බැඳුණු සතුට</p>
                        </div>
                        <div class="content-box red">
                            <h4 class="font-bold text-xl text-red-900 mb-3">දිට්ඨිගත සම්ප්‍රයුක්ත</h4>
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය එක්ක බැඳුණු සිත</p>
                            <p class="text-sm mt-2 text-red-700">දිට්ඨි චෛතසිකය යෙදෙනවා → තිහේතුක අකුසල</p>
                        </div>
                        <div class="content-box green-border">
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංඛාරික</h4>
                            <p class="text-lg">ස්වභාවිකව ඇතිවූ සිතක්</p>
                            <p class="text-sm mt-2 text-green-700">අනුන් පෙළඹවූවා නැහැ, තමන්ටම හටගත්තා</p>`,level3:`<div class="content-box purple">
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>
                    <div class="grid-3">
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">12</div>
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">8</div>
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>
                            <p class="text-sm text-purple-600 mt-2">පළමුවැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">54</div>
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>
                        </div>
                    </div>
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4 text-sm">
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික ⭐</div>
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත සසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත සසංඛාරික`,level4:`<div class="content-box orange">
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 22ක් යෙදේ</h3>
                    <div class="grid-2">
                        <div class="bg-white p-5 rounded-xl shadow">
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="grid-2 gap-2 text-sm">
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>
                    <div class="grid-2">
                        <div class="space-y-6">
                            <div class="bg-white p-6 rounded-2xl shadow">
                                <h4 class="font-bold text-xl text-red-800 mb-3">ප්‍රිය අරමුණු + මිථ්‍යා දෘෂ්ටිය</h4>
                                <ul class="space-y-3 text-lg">
                                    <li class="flex gap-3 items-center"><span class="text-2xl">💰</span> <span>මුදල් ගැන සතුට</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">⭐</span> <span>කීර්තිය</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🏖️</span> <span>සැපවිත්</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content-box yellow">
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>
                            <ol class="space-y-4 text-lg">
                                <li class="bg-white p-4 rounded-lg shadow">"කර්මය නැහැ කියලා තේරුණා! මම full enjoy!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"දානය දෙනකන් ඉන්නේ මෝඩයෝ!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මරණින් පස්සේ නැහැ – අද සතුටින්!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"බුදුන් වහන්සේ කියපු ඒවා බය කතා!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මම මේ සල්ලි ටිකෙන් සුපිරි ජීවිතයක් ගත කරනවා!"</li>
                            </ol>`,level6:`<div class="content-box indigo">
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">1</p>
                            <p class="text-center">අකුසල සිත් අතරින් පළමුවැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>
                            <ul class="space-y-3">
                                <li><strong>හේතු:</strong> 3 (අලෝභ, අදෝස, අමෝහ නැත → ලෝභ, දෝස, මෝහ)</li>
                                <li><strong>ඤාණ:</strong> ඤාණ සම්පයුත් (දිට්ඨි තියෙන නිසා)</li>
                                <li><strong>වේදනා:</strong> සෝමනස්ස</li>
                                <li><strong>භූමි:</strong> කාමාවචර</li>
                            </ul>`,level7:`<div class="space-y-8">
                    <div class="content-box red">
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>
                        <div class="grid-3">
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔥</p>
                                <p class="font-bold">නිරය ගමනය</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">👻</p>
                                <p class="font-bold">ප්‍රේත ලෝකය</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔄</p>
                                <p class="font-bold">සසර දිගු වීම</p>`}},2:{id:2,title:"සෝමනස්ස සහගත දිට්ඨිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">😊</span>
                                <span class="text-lg"><strong>සතුටින්</strong> යුක්ත සිතක්</span>
                            </p>
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">❌</span>
                                <span class="text-lg"><strong>වැරදි විශ්වාසයක්</strong> තියෙනවා</span>
                            </p>
                            <p class="flex items-center gap-3">
                                <span class="text-4xl">👥</span>
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (සසංස්කාරික)</span>
                            </p>
                        </div>
                        <div class="content-box yellow">
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>
                            <p class="italic leading-relaxed text-gray-700">
                                "ඔව්, කර්මයක් නැහැ කියලා මට තේරුණා!  
                                මගේ යාළුවා කිව්වා 'අද enjoy කරමු, මොකට බය වෙන්නේ?' කියලා…  
                                එතකොට මටත් ඒක ගැලපුණා! සතුටින් ගියා party එකට!"  
                                → මිථ්‍යා දෘෂ්ටිය + ලෝභය + අනුන්ගේ පෙළඹවීම
                            </p>`,level2:`<div class="space-y-6">
                    <div class="grid-2">
                        <div class="content-box blue">
                            <h4 class="font-bold text-xl text-blue-900 mb-3">සෝමනස්ස සහගත</h4>
                            <p class="text-lg">මානසික සතුට (ප්‍රීති + සුඛ වේදනා)</p>
                            <p class="text-sm mt-2 text-blue-700">අකුසල ප්‍රීතියක් – කාම රාගයෙන් බැඳුණු</p>
                        </div>
                        <div class="content-box red">
                            <h4 class="font-bold text-xl text-red-900 mb-3">දිට්ඨිගත සම්ප්‍රයුක්ත</h4>
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය එක්ක බැඳුණු සිත</p>
                            <p class="text-sm mt-2 text-red-700">දිට්ඨි චෛතසිකය යෙදෙනවා → තිහේතුක අකුසල</p>
                        </div>
                        <div class="content-box orange">
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>
                            <p class="text-lg">අනුන් පෙළඹවීමෙන් ඇතිවූ සිත</p>
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, මාධ්‍ය, පරිසරය බලපෑම් කළා</p>`,level3:`<div class="content-box purple">
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>
                    <div class="grid-3">
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">12</div>
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">8</div>
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>
                            <p class="text-sm text-purple-600 mt-2">දෙවැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">54</div>
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>
                        </div>
                    </div>
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4 text-sm">
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික ⭐</div>
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 22ක් යෙදේ</h3>
                    <div class="grid-2">
                        <div class="bg-white p-5 rounded-xl shadow">
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="grid-2 gap-2 text-sm">
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>
                    <div class="grid-2">
                        <div class="space-y-6">
                            <div class="bg-white p-6 rounded-2xl shadow">
                                <h4 class="font-bold text-xl text-red-800 mb-3">අනුන්ගේ පෙළඹවීම + මිථ්‍යා දෘෂ්ටිය</h4>
                                <ul class="space-y-3 text-lg">
                                    <li class="flex gap-3 items-center"><span class="text-2xl">👥</span> <span>යාළුවෝ කිව්වා "කර්මය නැහැ"</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">📱</span> <span>Social media වලින් බලපෑම</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🎉</span> <span>පාර්ටි එකකට ආරාධනා</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content-box yellow">
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>
                            <ol class="space-y-4 text-lg">
                                <li class="bg-white p-4 rounded-lg shadow">"යාළුවා කිව්වා 'අද party එකට එමු, මොකට බය වෙන්නේ?' – ගියා!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"TikTok එකේ video එකකින් තේරුණා කර්මය නැහැ කියලා!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"ගුරුවරයා කිව්වා 'දානයෙන් වැඩක් නැහැ' – ඒක ඇත්ත කියලා හිතුණා"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ crush කිව්වා 'එකට ජීවත් වෙමු' – ගියා!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"YouTube එකේ atheist එකෙක් කිව්වා බුදුන් වහන්සේ myth – ඒක ඇත්ත!"</li>
                            </ol>`,level6:`<div class="content-box indigo">
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">2</p>
                            <p class="text-center">අකුසල සිත් අතරින් දෙවැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>
                            <ul class="space-y-3">
                                <li><strong>හේතු:</strong> 3 (ලෝභ, මෝහ, දෝස-මාන-ඉස්සා යම් තරමකින්)</li>
                                <li><strong>ඤාණ:</strong> ඤාණ සම්පයුත් (දිට්ඨි තියෙන නිසා)</li>
                                <li><strong>වේදනා:</strong> සෝමනස්ස</li>
                                <li><strong>භූමි:</strong> කාමාවචර</li>
                            </ul>`,level7:`<div class="space-y-8">
                    <div class="content-box red">
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>
                        <div class="grid-3">
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔥</p>
                                <p class="font-bold">නිරය ගමනය</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">👥</p>
                                <p class="font-bold">අනුන්ටත් බලපෑම</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔄</p>
                                <p class="font-bold">සසර දිගු වීම</p>`}},3:{id:3,title:"සෝමනස්ස සහගත දිට්ඨිගත විප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">😊</span>
                                <span class="text-lg"><strong>සතුටින්</strong> යුක්ත සිතක්</span>
                            </p>
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">✅</span>
                                <span class="text-lg"><strong>වැරදි විශ්වාසයක්</strong> නැත</span>
                            </p>
                            <p class="flex items-center gap-3">
                                <span class="text-4xl">🌱</span>
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවූ (අසංස්කාරික)</span>
                            </p>
                        </div>
                        <div class="content-box yellow">
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>
                            <p class="italic leading-relaxed text-gray-700">
                                "මේ ලස්සන කාර් එක මට ලැබුණා! සුපිරි සතුටුයි!"  
                                → මේ සතුටට පිටුපසින් "කර්මය නැහැ" වගේ වැරදි මතයක් නැහැ.  
                                ඒත් තෘෂ්ණාව තියෙනවා → අකුසලයි!
                            </p>`,level2:`<div class="space-y-6">
                    <div class="grid-2">
                        <div class="content-box blue">
                            <h4 class="font-bold text-xl text-blue-900 mb-3">සෝමනස්ස සහගත</h4>
                            <p class="text-lg">මානසික සතුට (ප්‍රීති + සුඛ වේදනා)</p>
                            <p class="text-sm mt-2 text-blue-700">අකුසල ප්‍රීතියක් – කාම රාගයෙන් බැඳුණු සතුට</p>
                        </div>
                        <div class="content-box purple">
                            <h4 class="font-bold text-xl text-purple-900 mb-3">දිට්ඨිගත විප්‍රයුක්ත</h4>
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය නැත (දිට්ඨි චෛතසිකය යෙදෙන්නේ නැහැ)</p>
                            <p class="text-sm mt-2 text-purple-700">ඒත් ලෝභය තියෙනවා → තෘෂ්ණාවෙන් බැඳුණු සතුට</p>
                        </div>
                        <div class="content-box green-border">
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>
                            <p class="text-lg">ස්වභාවිකව ඇතිවූ සිතක්</p>
                            <p class="text-sm mt-2 text-green-700">අනුන් පෙළඹවූවා නැහැ, තමන්ටම හටගත්තා</p>`,level3:`<div class="content-box purple">
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>
                    <div class="grid-3">
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">12</div>
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">8</div>
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>
                            <p class="text-sm text-purple-600 mt-2">තුන්වැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">54</div>
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>
                        </div>
                    </div>
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4 text-sm">
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි අසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංස්කාරික ⭐</div>
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ඛා දිට්ඨි අසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ඛා දිට්ඨි සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 19ක් යෙදේ</h3>
                    <div class="grid-2">
                        <div class="bg-white p-5 rounded-xl shadow">
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="grid-2 gap-2 text-sm">
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>
                    <div class="grid-2">
                        <div class="space-y-6">
                            <div class="bg-white p-6 rounded-2xl shadow">
                                <h4 class="font-bold text-xl text-red-800 mb-3">ප්‍රිය අරමුණු + තෘෂ්ණාව</h4>
                                <ul class="space-y-3 text-lg">
                                    <li class="flex gap-3 items-center"><span class="text-2xl">💰</span> <span>මුදල්, ස්වර්ණාභරණ</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🚗</span> <span>ලස්සන කාර්, ගෙයක්</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🏆</span> <span>ප්‍රශංසා, ජයග්‍රහණ</span></li>
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🍔</span> <span>රස කෑම</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="content-box yellow">
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>
                            <ol class="space-y-4 text-lg">
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ නව ජංගම දුරකථනය සුපිරි! සතුටුයි!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ ලස්සන ඇඳුම ගැන සතුටුයි!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ ප්‍රියතම ක්‍රීඩකයා ජයග්‍රහණය කළා! සතුටුයි!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මේ රස කෑම සුපිරි!"</li>
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ ඡායාරූපයට ලයික් 1000යි!"</li>
                            </ol>`,level6:`<div class="content-box indigo">
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">3</p>
                            <p class="text-center">අකුසල සිත් අතරින් තුන්වැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl">
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>
                            <ul class="space-y-3">
                                <li><strong>හේතු:</strong> 2 (ලෝභ, මෝහ)</li>
                                <li><strong>ඤාණ:</strong> ඤාණ විප්‍රයුක්ත (දිට්ඨි නැති නිසා)</li>
                                <li><strong>වේදනා:</strong> සෝමනස්ස</li>
                                <li><strong>භූමි:</strong> කාමාවචර</li>
                            </ul>`,level7:`<div class="space-y-8">
                    <div class="content-box red">
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>
                        <div class="grid-3">
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🧠</p>
                                <p class="font-bold">මනසේ අස්ථාවරත්වය</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔥</p>
                                <p class="font-bold">අපායගත වීමේ හේතු</p>
                            </div>
                            <div class="bg-white p-6 rounded-2xl text-center">
                                <p class="text-6xl mb-3">🔄</p>
                                <p class="font-bold">සසර දිගු වීම</p>`}},4:{id:4,title:"සෝමනස්ස සහගත දෘෂ්ඨිගත විප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😊</span>\r
                                <span class="text-lg"><strong>සතුටින්</strong> යුක්ත සිතක්</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">✅</span>\r
                                <span class="text-lg"><strong>වැරදි විශ්වාසයක්</strong> නැත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">👥</span>\r
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (සසංස්කාරික)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-gray-700">\r
                                "අයියේ, මේ ලස්සන ඇඳුම ගමුද? ගත්තොත් සුපිරි look එකක්!"  \r
                                → යාළුවා පෙළඹෙව්වා → මටත් හිතුණා "ඔව් ගමු!"  \r
                                → මිථ්‍යා දෘෂ්ටියක් නැත, ඒත් ලෝභය තියෙනවා → අකුසලයි!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box blue">\r
                            <h4 class="font-bold text-xl text-blue-900 mb-3">සෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">මානසික සතුට (ප්‍රීති + සුඛ වේදනා)</p>\r
                            <p class="text-sm mt-2 text-blue-700">අකුසල ප්‍රීතියක් – තෘෂ්ණාවෙන් බැඳුණු</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">දෘෂ්ඨිගත විප්‍රයුක්ත</h4>\r
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය නැත</p>\r
                            <p class="text-sm mt-2 text-purple-700">දිට්ඨි චෛතසිකය යෙදෙන්නේ නැහැ → ද්විහේතුක</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>\r
                            <p class="text-lg">අනුන්ගේ පෙළඹවීමෙන් ඇතිවූ</p>\r
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, වෙළඳ උපක්‍රම, සමාජ බලපෑම්</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">හතරවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ඛා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ඛා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">\r
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 19ක් යෙදේ</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-5 rounded-xl shadow">\r
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-2 text-sm">\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>\r
                    <div class="grid-2">\r
                        <div class="space-y-6">\r
                            <div class="bg-white p-6 rounded-2xl shadow">\r
                                <h4 class="font-bold text-xl text-red-800 mb-3">අනුන්ගේ පෙළඹවීම + තෘෂ්ණාව</h4>\r
                                <ul class="space-y-3 text-lg">\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">👥</span> <span>යාළුවෝ කියනවා "ගමු! ගමු!"</span></li>\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🛍️</span> <span>Sale එකේ advertisement</span></li>\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">📱</span> <span>Influencer එකෙක් promote කරනවා</span></li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>\r
                            <ol class="space-y-4 text-lg">\r
                                <li class="bg-white p-4 rounded-lg shadow">"යාළුවා කිව්වා මේ phone එක best – ගත්තා!"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"Sale එකේ 50% off – ගන්න ඕනෑ!"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"Instagram එකේ ඇඳුමක් දැක්කා – order කළා!"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"අයියා කිව්වා මේ bike එක cool – ගත්තා!"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"TikTok shop එකේ viral බඩුව – ගත්තා!"</li>\r
                            </ol>`,level6:`<div class="content-box indigo">\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>\r
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">4</p>\r
                            <p class="text-center">අකුසල සිත් අතරින් හතරවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>\r
                            <ul class="space-y-3">\r
                                <li><strong>හේතු:</strong> 2 (ලෝභ, මෝහ)</li>\r
                                <li><strong>ඤාණ:</strong> ඤාණ විප්‍රයුක්ත (දිට්ඨි නැති නිසා)</li>\r
                                <li><strong>වේදනා:</strong> සෝමනස්ස</li>\r
                                <li><strong>භූමි:</strong> කාමාවචර</li>\r
                            </ul>`,level7:`<div class="space-y-8">\r
                    <div class="content-box red">\r
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>\r
                        <div class="grid-3">\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">💳</p>\r
                                <p class="font-bold">ණය බර</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">😔</p>\r
                                <p class="font-bold">පසුතැවීම</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔄</p>\r
                                <p class="font-bold">සසර දිගු වීම</p>`}},5:{id:5,title:"උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැත,</strong> දුකුත් නැත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">❌</span>\r
                                <span class="text-lg"><strong>මිථ්‍යා දෘෂ්ටිය</strong> තියෙනවා</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවූ (අසංස්කාරික)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-gray-700">\r
                                "කර්මයක් නැහැ, පුනර්භවයක් නැහැ, දානයෙන් වැඩක් නැහැ…  \r
                                ඒක තමයි ඇත්ත! මම ඒක දන්නවා.  \r
                                ඒ නිසා මම කල්පනා කරනවා: 'මොනවා කරන්නද ජීවිතේ?'"  \r
                                → සතුටක් නැත, ඒත් මිථ්‍යා දෘෂ්ටියෙන් බැඳුණු සිතක්!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                            <p class="text-sm mt-2 text-gray-700">අකුසල උපේක්ෂා – තෘෂ්ණාවෙන් බැඳුණු උදාසීනත්වය</p>\r
                        </div>\r
                        <div class="content-box red">\r
                            <h4 class="font-bold text-xl text-red-900 mb-3">දෘෂ්ටිගත සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය එක්ක බැඳුණු සිත</p>\r
                            <p class="text-sm mt-2 text-red-700">දිට්ඨි චෛතසිකය යෙදෙනවා → තිහේතුක අකුසල</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිතක්</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ – ස්වභාවිකව ඇතිවුණා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">පස්වැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">5. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත අසංස්කාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">\r
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 21ක් යෙදේ</h3>\r
                    \r
                    <div class="text-center mb-6">\r
                        <p class="text-5xl font-black text-red-700">දිට්ඨි තියෙන නිසා → 21!</p>\r
                        <p class="text-lg text-orange-800">(පීති නැති නිසා සෝමනස්ස වලට තිබුණු 22න් එකක් අඩුයි)</p>\r
                    </div>\r
\r
                    <div class="grid-2">\r
                        <div class="bg-white p-5 rounded-xl shadow">\r
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-2 text-sm">\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>\r
                    <div class="grid-2">\r
                        <div class="space-y-6">\r
                            <div class="bg-white p-6 rounded-2xl shadow">\r
                                <h4 class="font-bold text-xl text-red-800 mb-3">මිථ්‍යා දෘෂ්ටිය + උදාසීනත්වය</h4>\r
                                <ul class="space-y-3 text-lg">\r
                                    <li>"කර්මය නැහැ" කියලා හිතනවා</li>\r
                                    <li>ඒක ගැන සතුටුත් නැහැ, දුකුත් නැහැ</li>\r
                                    <li>ඒත් ඒ විශ්වාසය තදින් තියෙනවා</li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>\r
                            <ol class="space-y-4 text-lg">\r
                                <li class="bg-white p-4 rounded-lg shadow">"කර්මයක් නැහැ කියලා මට තේරුණා. ඒක ඇත්ත."</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"දානය දෙනකන් ඉන්නේ මෝඩයෝ. මම දන්නවා ඒක වැඩක් නැහැ කියලා."</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"මරණින් පස්සේ නැහැ. ඒක මම තහවුරු කරගත්තා."</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"බුදුන් වහන්සේ කියපු ඒවා බය කතා. මම ඒක දන්නවා."</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"පන්සල් යනකන් ඉන්නේ අඥානයෝ. මම ඒක තේරුම් ගත්තා."</li>\r
                            </ol>`,level6:`<div class="content-box indigo">\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>\r
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">5</p>\r
                            <p class="text-center">අකුසල සිත් අතරින් පස්වැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>\r
                            <ul class="space-y-3">\r
                                <li><strong>හේතු:</strong> 3 (ලෝභ, මෝහ, දෝස-මාන-ඉස්සා යම් තරමකින්)</li>\r
                                <li><strong>ඤාණ:</strong> ඤාණ සම්පයුත් (දිට්ඨි තියෙන නිසා)</li>\r
                                <li><strong>වේදනා:</strong> උපේක්ෂා</li>\r
                                <li><strong>භූමි:</strong> කාමාවචර</li>\r
                            </ul>`,level7:`<div class="space-y-8">\r
                    <div class="content-box red">\r
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>\r
                        <div class="grid-3">\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔥</p>\r
                                <p class="font-bold">නිරය ගමනය</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">👁️</p>\r
                                <p class="font-bold">අන්ධ බව</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔄</p>\r
                                <p class="font-bold">සසර දිගුම</p>`}},6:{id:6,title:"උපේක්ෂා සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැහැ,</strong> දුකුත් නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">❌</span>\r
                                <span class="text-lg"><strong>මිථ්‍යා දෘෂ්ටිය</strong> තදින් තියෙනවා</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">👥</span>\r
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (සසංස්කාරික)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-gray-700">\r
                                "අයියේ, මේ ලෝකයේ කර්මයක් නැහැ කියලා මට තේරුණා.  \r
                                මගේ යාළුවා කිව්වා 'ඔව් බන්, ඒක ඇත්ත! දානය දෙනකන් ඉන්නේ මෝඩයෝ' කියලා…  \r
                                එතකොට මටත් ඒක ගැලපුණා. ඒක ඇත්ත කියලා මම දැන් හිතනවා."  \r
                                → උදාසීනයි, ඒත් මිථ්‍යා දෘෂ්ටිය අනුන්ගෙන් ආවා!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                            <p class="text-sm mt-2 text-gray-700">අකුසල උපේක්ෂා – තෘෂ්ණාවෙන් බැඳුණු උදාසීනත්වය</p>\r
                        </div>\r
                        <div class="content-box red">\r
                            <h4 class="font-bold text-xl text-red-900 mb-3">දෘෂ්ටිගත සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-red-700">දිට්ඨි චෛතසිකය යෙදෙනවා → තිහේතුක</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>\r
                            <p class="text-lg">අනුන් පෙළඹවීමෙන් ඇතිවූ</p>\r
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, මාධ්‍ය, සමාජය බලපෑම් කළා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">හයවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">6. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">\r
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 21ක් යෙදේ</h3>\r
                    \r
                    <div class="text-center mb-6">\r
                        <p class="text-5xl font-black text-red-700">දිට්ඨි තියෙන නිසා → 21!</p>\r
                    </div>\r
\r
                    <div class="grid-2">\r
                        <div class="bg-white p-5 rounded-xl shadow">\r
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-2 text-sm">\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-2xl font-bold text-red-900 mb-8 text-center">මෙම සිත ඇතිවන්නේ කවදාද?</h3>\r
                    <div class="grid-2">\r
                        <div class="space-y-6">\r
                            <div class="bg-white p-6 rounded-2xl shadow">\r
                                <h4 class="font-bold text-xl text-red-800 mb-3">අනුන්ගේ බලපෑම + මිථ්‍යා දෘෂ්ටිය</h4>\r
                                <ul class="space-y-3 text-lg">\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">👥</span> <span>යාළුවෝ කියනවා "කර්මය නැහැ"</span></li>\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">📱</span> <span>Social media එකකින් බලපෑම</span></li>\r
                                    <li class="flex gap-3 items-center"><span class="text-2xl">🎥</span> <span>අන්තර්ජාලයේ video එකකින් තහවුරු වුණා</span></li>\r
                                </ul>\r
                            </div>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 5ක්</h4>\r
                            <ol class="space-y-4 text-lg">\r
                                <li class="bg-white p-4 rounded-lg shadow">"යාළුවා කිව්වා 'කර්මය නැහැ' – ඒක ඇත්ත කියලා මටත් හිතුණා"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"YouTube එකේ video එකකින් තේරුණා දානයෙන් වැඩක් නැහැ කියලා"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"TikTok එකේ atheist කෙනෙක් කිව්වා 'මරණින් පස්සේ නැහැ' – ඒක ඇත්ත!"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"ගුරුවරයෙක් කිව්වා 'බුදුන් වහන්සේ myth' – මම ඒක තහවුරු කළා"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"Facebook group එකක ලෝකයේ ඇත්ත තියෙනවා කියලා post එකක් – ඒක මම share කළා"</li>\r
                            </ol>`,level6:`<div class="content-box indigo">\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>\r
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">6</p>\r
                            <p class="text-center">අකුසල සිත් අතරින් හයවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>\r
                            <ul class="space-y-3">\r
                                <li><strong>හේතු:</strong> 3 (ලෝභ, මෝහ + දෝස/මාන/ඉස්සා යම් තරමකින්)</li>\r
                                <li><strong>ඤාණ:</strong> ඤාණ සම්පයුත්</li>\r
                                <li><strong>වේදනා:</strong> උපේක්ෂා</li>\r
                                <li><strong>භූමි:</strong> කාමාවචර</li>\r
                            </ul>`,level7:`<div class="space-y-8">\r
                    <div class="content-box red">\r
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>\r
                        <div class="grid-3">\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔥</p>\r
                                <p class="font-bold">නිරය ගමනය</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">📢</p>\r
                                <p class="font-bold">අනුන්ටත් බලපෑම</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔄</p>\r
                                <p class="font-bold">සසර දිගුම</p>`}},7:{id:7,title:"උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැහැ,</strong> දුකුත් නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">✅</span>\r
                                <span class="text-lg"><strong>මිථ්‍යා දෘෂ්ටියක්</strong> නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-gray-700">\r
                                "මම හිතුවා 'අද රෑට කන්න බත් තියෙනවාද?'  \r
                                ඒක ගැන සතුටුත් නැහැ, දුකුත් නැහැ…  \r
                                ඒත් ඒක ගැනම ටිකක් ලෝභයක් තියෙනවා."  \r
                                → සාමාන්‍ය දවසක උදාසීන ලෝභ සිතක්!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                            <p class="text-sm mt-2 text-gray-700">අකුසල උපේක්ෂා – තෘෂ්ණාවෙන් බැඳුණු උදාසීනත්වය</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">දෘෂ්ටිගත විප්‍රයුක්ත</h4>\r
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය නැත</p>\r
                            <p class="text-sm mt-2 text-purple-700">දිට්ඨි චෛතසිකය යෙදෙන්නේ නැහැ → ද්විහේතුක</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිත</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">හතවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold">7. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white">8. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box orange">\r
                    <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 18ක් යෙදේ</h3>\r
                    \r
                    <div class="text-center mb-6">\r
                        <p class="text-5xl font-black text-orange-700">දිට්ඨි නැත → පීති නැත → 18!</p>\r
                    </div>\r
\r
                    <div class="grid-2">\r
                        <div class="bg-white p-5 rounded-xl shadow">\r
                            <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-2 text-sm">\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <div class="grid-2">\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-4">උදාහරණ 6ක්</h4>\r
                            <ol class="space-y-4 text-lg">\r
                                <li class="bg-white p-4 rounded-lg shadow">"අද රෑට කන්න තියෙනවද?"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"මේ මගේ pen එක කොහෙද?"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"අද රෑට චිත්‍රපටියක් බලමුද?"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"මගේ phone charge එක කීයද?"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"අද කෑමට බිත්තර තියෙනවද?"</li>\r
                                <li class="bg-white p-4 rounded-lg shadow">"මේ මගේ shoes කොහෙද?"</li>\r
                            </ol>\r
                        </div>\r
                        <div class="space-y-6">\r
                            <div class="bg-white p-6 rounded-2xl shadow">\r
                                <h4 class="font-bold text-xl text-red-800 mb-3">මොකක්ද මේ සිත?</h4>\r
                                <p class="text-lg">දවසේ 90%ක් තියෙන්නේ මේ සිත!</p>\r
                                <p class="text-lg mt-3">කිසිම වැරදි විශ්වාසයක් නැති, ඒත් ලෝභයෙන් බැඳුණු උදාසීන සිතක්.</p>`,level6:`<div class="content-box indigo">\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">89 සිත් පද්ධතියේ තැන</h4>\r
                            <p class="text-5xl font-bold text-center text-indigo-700 my-6">7</p>\r
                            <p class="text-center">අකුසල සිත් අතරින් හතවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl">\r
                            <h4 class="font-bold text-xl text-indigo-900 mb-4">හේතු විභාගය</h4>\r
                            <ul class="space-y-3">\r
                                <li><strong>හේතු:</strong> 2 (ලෝභ, මෝහ)</li>\r
                                <li><strong>ඤාණ:</strong> ඤාණ විප්‍රයුක්ත</li>\r
                                <li><strong>වේදනා:</strong> උපේක්ෂා</li>\r
                                <li><strong>භූමි:</strong> කාමාවචර</li>\r
                            </ul>`,level7:`<div class="space-y-8">\r
                    <div class="content-box red">\r
                        <h3 class="text-2xl font-bold text-red-900 mb-6 text-center">අනිෂ්ට විපාක</h3>\r
                        <div class="grid-3">\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">⏰</p>\r
                                <p class="font-bold">කාලය නාස්තිය</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">😴</p>\r
                                <p class="font-bold">අලසකම</p>\r
                            </div>\r
                            <div class="bg-white p-6 rounded-2xl text-center">\r
                                <p class="text-6xl mb-3">🔄</p>\r
                                <p class="font-bold">සසර දිගුම</p>`}},8:{id:8,title:"උපේක්ෂා සහගත දෘෂ්ටිගත විප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැහැ,</strong> දුකුත් නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">✅</span>\r
                                <span class="text-lg"><strong>මිථ්‍යා දෘෂ්ටියක්</strong> නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">👥</span>\r
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (යාළුවා / sale / ad)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "අයියේ, මේ phone එක 30% off! ගමු ගමු!"  \r
                                → මටත් හිතුණා "ඔව් ගමු…"  \r
                                → සතුටක් නැත, ඒත් ගන්න හිතුණා → අකුසල ලෝභය!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">දෘෂ්ටිගත විප්‍රයුක්ත</h4>\r
                            <p class="text-lg">මිථ්‍යා දෘෂ්ටිය නැත</p>\r
                            <p class="text-sm mt-2 text-purple-700">දිට්ඨි චෛතසිකය එන්නේ නැහැ → ද්විහේතුක</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>\r
                            <p class="text-lg">අනුන්ගේ පෙළඹවීමෙන් ඇතිවූ</p>\r
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, advertisement, influencer, sale</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">ලෝභමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">අටවැන්න (අන්තිම!)</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">ලෝභමූල සිත් 8 – සම්පූර්ණ ලැයිස්තුව</h4>\r
                        <div class="grid-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">5. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">6. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white">7. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold animate-pulse">8. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික ⭐`,level4:`<div class="content-box orange">\r
                    <h3 class="text-3xl font-bold text-orange-900 mb-8 text-center">\r
                        දිට්ඨි නැත + පීති නැත = 18 චෛතසික\r
                    </h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3 text-lg">\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center font-medium">මනසිකාර`,level5:`<div class="content-box red">\r
                    <div class="grid-2">\r
                        <div>\r
                            <h3 class="text-2xl font-bold text-red-900 mb-6">දවසේ 70%ක් තියෙන සිත!</h3>\r
                            <ol class="space-y-4 text-lg">\r
                                <li class="bg-white p-4 rounded-xl shadow">"යාළුවා කිව්වා මේ shoes එක best – ගමු!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"Sale එකේ 40% off – ගන්න ඕනෑ!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"Instagram එකේ bag එකක් දැක්කා – order කළා"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"TikTok shop එකේ viral බඩුව – ගත්තා!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"අයියා කිව්වා මේ laptop එක cool – ගමු!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"Advertisement එකේ phone එක ලස්සනයි – ගන්නවා!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"Flash sale එකේ watch එක – ගත්තා!"</li>\r
                                <li class="bg-white p-4 rounded-xl shadow">"Group chat එකේ ඇඳුමක් share කළා – order කළා!"</li>\r
                            </ol>`,level6:null,level7:null}},9:{id:9,title:"දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😢</span>\r
                                <span class="text-lg"><strong>දුක</strong> සහගත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😠</span>\r
                                <span class="text-lg"><strong>කේන්තිය</strong> / පටිඝය</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "අයියා මට කෑගැහුවා…  \r
                                මට එහෙම කරන්න ඕනෑ නැහැ!  \r
                                මට ගොඩක් කේන්ති ගියා!"  \r
                                → මේ තමයි පළමු දෝසමූල සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-3">\r
                        <div class="content-box red">\r
                            <h4 class="font-bold text-xl text-red-900 mb-3">දෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">දුක සහගත වේදනාව</p>\r
                            <p class="text-sm mt-2 text-red-700">අකුසල දුක – ක්‍රෝධයෙන් බැඳුණු</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">පටිඝ සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">කේන්තිය එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-orange-700">පටිඝ චෛතසිකය තදින් යෙදෙනවා</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවුණා</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">2</div>\r
                            <p class="font-bold text-purple-700">දෝසමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">පළමුවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-red-200 to-orange-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-red-900 mb-4">දෝසමූල සිත් 2</h4>\r
                        <div class="grid-2 gap-6 text-lg">\r
                            <div class="p-5 bg-yellow-400 rounded-xl font-bold text-center animate-pulse">\r
                                1. දෝමනස්ස පටිඝ අසංඛාරික ⭐\r
                            </div>\r
                            <div class="p-5 bg-white/90 rounded-xl text-center">\r
                                2. දෝමනස්ස පටිඝ සසංඛාරික`,level4:`<div class="content-box orange">\r
                    <div class="text-center mb-8">\r
                        <p class="text-5xl font-black text-red-700">පටිඝය තියෙන නිසා → 20!</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        මේ සිත ඇතිවෙන හැම මොහොතකම...\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">අම්මා කෑගැහුවා → කේන්ති ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">යාළුවා බනිනවා → හිතට රිදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">කවුද මගේ pen එක ගත්තේ? → කේන්ති!</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">මේ ලෝකය අසාධාරණයි → තරහයි</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මට තනියම වැඩේ දෙනවා? → කේන්ති</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මාව තෝරලා නැත්තේ? → හිතට රිදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මට like එකක් නැත්තේ? → කේන්ති</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මාව ignore කරන්නේ? → තරහයි</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මම ජූනියර්? → කේන්ති ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-600">\r
                            <p class="text-lg font-medium">ඇයි මගේ කෑම අඩුයි? → හිතට රිදුණා</p>`,level6:null,level7:null}},10:{id:10,title:"දෝමනස්ස සහගත පටිඝ සම්ප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😢</span>\r
                                <span class="text-lg"><strong>දුක</strong> සහගත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😠</span>\r
                                <span class="text-lg"><strong>කේන්තිය</strong> තදින්</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">👥</span>\r
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (යාළුවා/මාධ්‍ය/කතා)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "අයියේ, ඒ කෙනා කියලා තියෙනවා මගේ ගැන ලස්සන කතාවක්…  \r
                                මට ගොඩක් කේන්ති ගියා! ඒක ඇත්තද?"  \r
                                → තමන්ටම නොව, අනුන්ගෙන් ආපු කේන්තිය!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-3">\r
                        <div class="content-box red">\r
                            <h4 class="font-bold text-xl text-red-900 mb-3">දෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">දුක සහගත වේදනාව</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">පටිඝ සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">කේන්තිය එක්ක බැඳුණු</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">සසංස්කාරික</h4>\r
                            <p class="text-lg">අනුන් පෙළඹවීමෙන් ඇතිවූ</p>\r
                            <p class="text-sm mt-2 text-purple-700">කට්ට කතා, gossip, news, social media</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">2</div>\r
                            <p class="font-bold text-purple-700">දෝසමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">අන්තිම එක</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-red-300 to-rose-300 p-8 rounded-2xl">\r
                        <h4 class="font-bold text-2xl text-red-900 mb-6 text-center">දෝසමූල සිත් 2 – සම්පූර්ණයි!</h4>\r
                        <div class="grid-2 gap-8 text-xl">\r
                            <div class="p-6 bg-white/90 rounded-xl text-center">\r
                                1. දෝමනස්ස පටිඝ අසංඛාරික\r
                            </div>\r
                            <div class="p-6 bg-yellow-500 rounded-xl font-bold text-center animate-pulse shadow-2xl">\r
                                2. දෝමනස්ස පටිඝ සසංඛාරික ⭐`,level4:`<div class="content-box orange">\r
                    <div class="text-center mb-8">\r
                        <p class="text-5xl font-black text-red-700">දෝසමූල සිත්වලටම එකම චෛතසික 20!</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        අනුන් පෙළඹවපු කේන්තිය – මේ තමයි සසංස්කාරික!\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">WhatsApp group එකේ මගේ ගැන කතාවක් → කේන්ති ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">Instagram comment එකකින් හිතට රිදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">TikTok video එකකින් තරහ ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">News එකකින් රටේ අසාධාරණය → කේන්ති!</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">යාළුවා කිව්වා 'උඹව බනිනවා' → හිතට රිදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">Office gossip එකකින් කේන්ති ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">Facebook post එකකින් තරහ ගියා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">Twitter thread එකකින් කේන්ති!</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">YouTube comment එකකින් හිතට රිදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-red-700">\r
                            <p class="text-lg font-medium">Family chat එකේ මගේ ගැන කතාවක් → කේන්ති!</p>`,level6:null,level7:null}},11:{id:11,title:"උපේක්ෂා සහගත විචිකිච්ඡා සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැහැ</strong>, දුකුත් නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">❓</span>\r
                                <span class="text-lg"><strong>"මේක ඇත්තද?</strong> නැත්තම්?"</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "කර්මය ඇත්තද? බුදුන් වහන්සේ ඇත්තද?  \r
                                මරණින් පස්සේ තියෙනවද?  \r
                                මට 100% විශ්වාසයක් නැහැ…"  \r
                                → මේ තමයි විචිකිච්ඡා සම්ප්‍රයුක්ත සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-3">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">විචිකිච්ඡා සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">සැකය එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-purple-700">විචිකිච්ඡා චෛතසිකය තදින් යෙදෙනවා</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවුණා</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">2</div>\r
                            <p class="font-bold text-purple-700">මෝහමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">පළමුවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-gray-300 to-slate-300 p-8 rounded-2xl">\r
                        <h4 class="font-bold text-2xl text-gray-900 mb-6 text-center">මෝහමූල සිත් 2</h4>\r
                        <div class="grid-2 gap-8 text-xl">\r
                            <div class="p-6 bg-yellow-400 rounded-xl font-bold text-center animate-pulse">\r
                                1. උපේක්ෂා විචිකිච්ඡා අසංඛාරික ⭐\r
                            </div>\r
                            <div class="p-6 bg-white/90 rounded-xl text-center">\r
                                2. උපේක්ෂා උද්ධච්ච සම්ප්‍රයුක්ත`,level4:`<div class="content-box orange">\r
                    <div class="text-center mb-8">\r
                        <p class="text-5xl font-black text-gray-800">විචිකිච්ඡා තියෙන නිසා → 19!</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        "මට තේරෙන්නේ නැහැ… විශ්වාස කරන්න බැහැ…"\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">කර්මය ඇත්තද? මොකටද ඒක?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">බුදුන් වහන්සේ ඇත්තද? myth ද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">මරණින් පස්සේ තියෙනවද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">පින් ඇත්තද? නැත්තම්?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">නිර්වාණය ඇත්තද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">දේවාලයේ දෙයක් තියෙනවද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">ජ්‍යෝතිෂ්‍ය ඇත්තද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700">\r
                            <p class="text-lg font-medium">මේ ලෝකයේ ඇත්තක් තියෙනවද?</p>`,level6:null,level7:null}},12:{id:12,title:"උපේක්ෂා සහගත උද්ධච්ච සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>සතුටුත් නැහැ</strong>, දුකුත් නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">🌊</span>\r
                                <span class="text-lg"><strong>හිත එක තැනක</strong> නැවතුණේ නැහැ</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "මම දැන් මොකක් කරන්නද?  \r
                                මේක කරමුද? නැත්නම් එක?  \r
                                අනේ හිත එක තැනක නැහැ!"  \r
                                → මේ තමයි උද්ධච්ච සම්ප්‍රයුක්ත සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                            <p class="text-sm mt-2 text-gray-700">අකුසල උපේක්ෂා – නිශ්චිතභාවයක් නැති තත්ත්වය</p>\r
                        </div>\r
                        <div class="content-box purple">\r
                            <h4 class="font-bold text-xl text-purple-900 mb-3">උද්ධච්ච සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">උද්ධච්චය එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-purple-700">හිත එක තැනක නවතින්නේ නැහැ → සැම සිතකම තියෙන අකුසල චෛතසිකය</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිත</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">12</div>\r
                            <p class="font-bold text-purple-700">අකුසල සිත්</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">2</div>\r
                            <p class="font-bold text-purple-700">මෝහමූල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">අන්තිම එක</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">54</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර සිත්</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-purple-200 to-pink-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-purple-900 mb-4">අකුසල 12 – සම්පූර්ණයි!</h4>\r
                        <div class="grid-4 gap-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white-80">1. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">2. සෝමනස්ස දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">3. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">4. සෝමනස්ස දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">5. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා දිට්ඨි සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත අසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා දිට්ඨි විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">9. දෝමනස්ස පටිඝ අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">10. දෝමනස්ස පටිඝ සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">11. උපේක්ෂා විචිකිච්ඡා අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-400 font-bold animate-pulse">12. උපේක්ෂා උද්ධච්ච සම්ප්‍රයුක්ත ⭐`,level4:`<div class="space-y-6">\r
                    <div class="content-box orange">\r
                        <h3 class="text-2xl font-bold text-orange-900 mb-6 text-center">මෙම සිතෙහි චෛතසික 18ක් යෙදේ</h3>\r
                        <div class="text-center mb-6">\r
                            <p class="text-5xl font-black text-orange-700">දිට්ඨි නැත → පීති නැත → 18!</p>\r
                        </div>\r
                        <div class="grid-2">\r
                            <div class="bg-white p-5 rounded-xl shadow">\r
                                <h4 class="font-bold text-blue-800 mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                                <div class="grid-2 gap-2 text-sm">\r
                                    <div class="bg-blue-100 p-2 rounded text-center">ඵස්ස</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">වේදනා</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">සඤ්ඤා</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">චේතනා</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">ඒකග්ගතා</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                    <div class="bg-blue-100 p-2 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        "හිත එක තැනක නැහැ… නොසන්සුන්කම…"\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">මම දැන් මොකක් කරන්නද? මේකද? එකද?</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">හිත එක තැනක නැහැ, මෙන්න මෙන්න යනවා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">බණ ඇසීමේදී හිත වෙන තැනකට යනවා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">භාවනා කරද්දී හිත නොසන්සුන්</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">වැඩ කරද්දී හිත වෙන දේවල් හිතෙනවා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">කියවීමේදී හිත එක තැනක නැහැ</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">සිතීමේදී හිත නොසන්සුන්, චංචල</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-purple-700">\r
                            <p class="text-lg font-medium">ඕනෑම විට හිත නොසන්සුන්කම ඇතිවනවා</p>`,level6:null,level7:null}},13:{id:13,title:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😊</span>\r
                                <span class="text-lg"><strong>සතුට</strong> සහගත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">🧠</span>\r
                                <span class="text-lg"><strong>ඤාණය</strong> තියෙනවා</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "අද මම රෝහලට ගියා…  \r
                                ඒ ගමනේදී බුදුන් වහන්සේගේ ධර්මය මට තේරුණා…  \r
                                කර්මය, අනිත්‍ය, දුක්ඛ, අනත්ත – සැම එකක්ම පැහැදිලි වුණා!  \r
                                හිතට ලැබුණේ ලොකු සතුටක්!"  \r
                                → මේ තමයි පළමු මහා කුසල සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box pink">\r
                            <h4 class="font-bold text-xl text-pink-900 mb-3">සෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">ප්‍රීති සහගත වේදනාව</p>\r
                            <p class="text-sm mt-2 text-pink-700">කුසල ප්‍රීතිය – ධර්මානුභාවයෙන් බැඳුණු සතුට</p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-3">ඤාණ සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">ප්‍රඥාව එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-yellow-700">අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ චෛතසික තුනම තියෙනවා</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිත</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ – ස්වභාවිකවම ධර්මය තේරුණා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">මහා කුසල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">පළමුවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">24</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර කුසල</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">89/121</div>\r
                            <p class="font-bold text-purple-700">සියලු සිත් අතර</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-amber-900 mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 gap-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-yellow-500 font-bold animate-pulse">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංඛාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white-80">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසංඛාරික`,level4:`<div class="content-box gold">\r
                    <h3 class="text-3xl font-bold text-amber-900 mb-8 text-center">\r
                        ත්‍රිහේතුක + ඤාණ සම්ප්‍රයුක්ත = ලෝකයේ හොඳම සිත!\r
                    </h3>\r
                    <div class="text-center mb-8">\r
                        <p class="text-6xl font-black text-amber-700">38 චෛතසික!</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        මේ සිත ඇතිවෙන ලස්සන මොහොත්!\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">දානය දෙනකොට හිතේ ලැබුණු සතුට + තේරුම</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">සීලය රකිනකොට ධර්මය තේරුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">භාවනා කරද්දී අනිත්‍ය තේරුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">බණ අහනකොට හිත පැහැදුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මෙත්තාව පතුරවද්දී සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">අනත්ත තේරුණු මොහොත</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">කරුණාවෙන් උදව් කරද්දී</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මුදිතාවෙන් සතුටු වුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">පිංකමක් කරද්දී ඤාණය උපන්නා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ධර්ම දානය දුන්නු මොහොත</p>`,level6:null,level7:null}},14:{id:14,title:"සෝමනස්ස සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😊</span>\r
                                <span class="text-lg"><strong>සතුට</strong> සහගත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">🧠</span>\r
                                <span class="text-lg"><strong>ඤාණය</strong> තියෙනවා</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">👥</span>\r
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (සසංස්කාරික)</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "අයියේ, මේ ධර්ම දේශනාව අහමුද? ඒකෙන් හිත පැහැදිලි වෙයි!"  \r
                                → යාළුවා පෙළඹෙව්වා → මටත් හිතුණා "ඔව් අහමු…"  \r
                                → ධර්මය තේරුණා → සතුට ලැබුණා → මහා කුසලයි!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box pink">\r
                            <h4 class="font-bold text-xl text-pink-900 mb-3">සෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">ප්‍රීති සහගත වේදනාව</p>\r
                            <p class="text-sm mt-2 text-pink-700">කුසල ප්‍රීතිය – ධර්මානුභාවයෙන් බැඳුණු සතුට</p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-3">ඤාණ සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">ප්‍රඥාව එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-yellow-700">අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ චෛතසික තුනම තියෙනවා</p>\r
                        </div>\r
                        <div class="content-box orange">\r
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>\r
                            <p class="text-lg">අනුන්ගේ පෙළඹවීමෙන් ඇතිවූ</p>\r
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, ගුරුවරයා, මාධ්‍ය බලපෑම් කළා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">මහා කුසල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">දෙවැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">24</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර කුසල</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">89/121</div>\r
                            <p class="font-bold text-purple-700">සියලු සිත් අතර</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-amber-900 mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 gap-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white-80">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-500 font-bold animate-pulse">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white-80">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසංඛාරික`,level4:`<div class="content-box gold">\r
                    <h3 class="text-3xl font-bold text-amber-900 mb-8 text-center">\r
                        ත්‍රිහේතුක + ඤාණ සම්ප්‍රයුක්ත + සසංස්කාරික = 37 චෛතසික!\r
                    </h3>\r
                    <div class="text-center mb-8">\r
                        <p class="text-6xl font-black text-amber-700">සසංස්කාරික නිසා → 37!</p>\r
                        <p class="text-lg text-amber-800 mt-2">(අසංස්කාරිකට වඩා 1ක් වැඩි - විතක්ක චෛතසිකය තවත් එකක් එකතු වෙනවා)</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        අනුන්ගේ පෙළඹවීමෙන් ඇතිවෙන ලස්සන මොහොත්!\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">යාළුවා කිව්වා "ධර්ම දේශනාව අහමු" → අහා ධර්මය තේරුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ගුරුවරයා පෙළඹව්වා "දානය දෙමු" → දී සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මිත්‍රයා කිව්වා "භාවනා කරමු" → කර ඤාණය උපන්නා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">පන්සලේ ගුරුවරයා කිව්වා "සීලය රකිමු" → රැක සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">යාළුවා පෙළඹව්වා "මෙත්තාව පතුරවමු" → පතුරවා සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ගුරුවරයා කිව්වා "ධර්ම පොත කියවමු" → කියවා තේරුම් ගත්තා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මිත්‍රයා පෙළඹව්වා "කරුණාවෙන් උදව් කරමු" → කර සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">යාළුවා කිව්වා "පින්කමක් කරමු" → කර ඤාණය උපන්නා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ගුරුවරයා පෙළඹව්වා "ධර්ම දානය දෙමු" → දී සතුට ලැබුණා</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මිත්‍රයා කිව්වා "බණ අහමු" → අහා හිත පැහැදුණා</p>`,level6:null,level7:null}},15:{id:15,title:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😊</span>\r
                                <span class="text-lg"><strong>සතුට</strong> සහගත</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">❌</span>\r
                                <span class="text-lg"><strong>ඤාණය</strong> නැහැ (විප්‍රයුක්ත)</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "මම දානය දුන්නා…  \r
                                ඒකෙන් හිතට ලැබුණේ සතුටක්!  \r
                                ඒත් ධර්මය ගැන ගැඹුරු තේරුමක් නැහැ…  \r
                                ඒත් තවමත් මහා කුසලයි!"  \r
                                → මේ තමයි තුන්වැන්න මහා කුසල සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box pink">\r
                            <h4 class="font-bold text-xl text-pink-900 mb-3">සෝමනස්ස සහගත</h4>\r
                            <p class="text-lg">ප්‍රීති සහගත වේදනාව</p>\r
                            <p class="text-sm mt-2 text-pink-700">කුසල ප්‍රීතිය – ධර්මානුභාවයෙන් බැඳුණු සතුට</p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-3">ඥාන විප්‍රයුක්ත</h4>\r
                            <p class="text-lg">ඤාණය නැහැ (විප්‍රයුක්ත = යෙදී නැති)</p>\r
                            <p class="text-sm mt-2 text-yellow-700">අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ චෛතසික තුනම නැහැ</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිත</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ – ස්වභාවිකවම ඇතිවුණා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">මහා කුසල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">තුන්වැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">24</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර කුසල</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">89/121</div>\r
                            <p class="font-bold text-purple-700">සියලු සිත් අතර</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-amber-900 mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 gap-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white-80">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-500 font-bold animate-pulse">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසංඛාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white-80">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසංඛාරික`,level4:`<div class="content-box gold">\r
                    <h3 class="text-3xl font-bold text-amber-900 mb-8 text-center">\r
                        ත්‍රිහේතුක + ඤාණ විප්‍රයුක්ත = 36 චෛතසික!\r
                    </h3>\r
                    <div class="text-center mb-8">\r
                        <p class="text-6xl font-black text-amber-700">ඤාණය නැති නිසා → 36!</p>\r
                        <p class="text-lg text-amber-800 mt-2">(ඤාණ සම්ප්‍රයුක්තට වඩා 2ක් අඩු - අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ තුනම නැහැ)</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        ඤාණය නැතත් මහා කුසලයි - මේ සිත ඇතිවෙන මොහොත්!\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">දානය දෙනකොට සතුට ලැබුණා (ධර්මය ගැන ගැඹුරු තේරුමක් නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">සීලය රකිනකොට සතුට ලැබුණා (ධර්මය තේරුම් ගත්තේ නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මෙත්තාව පතුරවද්දී සතුට ලැබුණා (ඤාණය නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">කරුණාවෙන් උදව් කරද්දී සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">මුදිතාවෙන් සතුටු වුණා (ඤාණය නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">පිංකමක් කරද්දී සතුට ලැබුණා (ධර්මය ගැන ගැඹුරු තේරුමක් නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ධර්ම දානය දුන්නු මොහොත (ධර්මය ගැන තේරුමක් නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">බණ අහනකොට සතුට ලැබුණා (ධර්මය තේරුම් ගත්තේ නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">භාවනා කරද්දී සතුට ලැබුණා (ඤාණය නැහැ)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">සද්ධාවෙන් පින්කමක් කරද්දී සතුට ලැබුණා (ඤාණය නැහැ)</p>`,level6:null,level7:null}},16:{id:16,title:"සෝමනස්ස සහගත ඥාන විප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="content-box green">
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">😊</span>
                                <span class="text-lg"><strong>සතුට</strong> සහගත</span>
                            </p>
                            <p class="flex items-center gap-3 mb-3">
                                <span class="text-4xl">❌</span>
                                <span class="text-lg"><strong>ඤාණය</strong> නැහැ (විප්‍රයුක්ත)</span>
                            </p>
                            <p class="flex items-center gap-3">
                                <span class="text-4xl">👥</span>
                                <span class="text-lg"><strong>අනුන්</strong> පෙළඹවූ (සසංස්කාරික)</span>
                            </p>
                        </div>
                        <div class="content-box yellow">
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>
                            <p class="italic leading-relaxed text-lg text-gray-700">
                                "අද මම දන් දුන්නා…  
                                හිතට ලැබුණේ ලොකු සතුටක්!  
                                ඒත් ඒකෙන් වෙන්නේ මොකක්ද කියලා මම තේරුම් ගත්තේ නැහැ."  
                                → සතුට තියෙනවා, ඒත් ඤාණය නැහැ → මහා කුසලයි!
                            </p>`,level2:`<div class="space-y-6">
                    <div class="grid-2">
                        <div class="content-box pink">
                            <h4 class="font-bold text-xl text-pink-900 mb-3">සෝමනස්ස සහගත</h4>
                            <p class="text-lg">ප්‍රීති සහගත වේදනාව</p>
                            <p class="text-sm mt-2 text-pink-700">කුසල ප්‍රීතිය – ධර්මානුභාවයෙන් බැඳුණු සතුට</p>
                        </div>
                        <div class="content-box purple">
                            <h4 class="font-bold text-xl text-purple-900 mb-3">ඥාන විප්‍රයුක්ත</h4>
                            <p class="text-lg">ඤාණය නැති සිතක්</p>
                            <p class="text-sm mt-2 text-purple-700">ප්‍රඥා චෛතසිකය යෙදෙන්නේ නැහැ → ත්‍රිහේතුක</p>
                        </div>
                        <div class="content-box orange">
                            <h4 class="font-bold text-xl text-orange-900 mb-3">සසංස්කාරික</h4>
                            <p class="text-lg">අනුන්ගේ පෙළඹවීමෙන් ඇතිවූ</p>
                            <p class="text-sm mt-2 text-orange-700">යාළුවෝ, ගුරුවරයා, මාධ්‍ය බලපෑම් කළා</p>`,level3:`<div class="content-box purple">
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>
                    <div class="grid-3">
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">8</div>
                            <p class="font-bold text-purple-700">මහා කුසල සිත්</p>
                            <p class="text-sm text-purple-600 mt-2">හතරවැන්න</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">24</div>
                            <p class="font-bold text-purple-700">කාමාවචර කුසල</p>
                        </div>
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">
                            <div class="text-5xl mb-3">89/121</div>
                            <p class="font-bold text-purple-700">සියලු සිත් අතර</p>
                        </div>
                    </div>
                    <div class="mt-10 bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl">
                        <h4 class="font-bold text-xl text-amber-900 mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4 gap-4 text-sm">
                            <div class="p-3 rounded-lg bg-white-80">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white-80">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white-80">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-yellow-500 font-bold animate-pulse">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසංස්කාරික ⭐</div>
                            <div class="p-3 rounded-lg bg-white-80">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික</div>
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසංඛාරික</div>
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box gold">
                    <h3 class="text-3xl font-bold text-amber-900 mb-8 text-center">
                        ත්‍රිහේතුක + ඤාණ විප්‍රයුක්ත + සසංස්කාරික = 36 චෛතසික!
                    </h3>
                    <div class="text-center mb-8">
                        <p class="text-6xl font-black text-amber-700">ඤාණය නැති + සසංස්කාරික නිසා → 36!</p>
                        <p class="text-lg text-amber-800 mt-2">(ඤාණ සම්ප්‍රයුක්ත සසංස්කාරිකට වඩා 1ක් අඩු - අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ තුනම නැහැ, ඒත් විතක්ක තියෙනවා)</p>
                    </div>
                    <div class="grid-2">
                        <div class="bg-white p-6 rounded-2xl shadow-xl">
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="grid-2 gap-3">
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">
                        අනුන්ගේ පෙළඹවීමෙන් ඇතිවෙන ලස්සන මොහොත්!
                    </h3>
                    <div class="grid-2 gap-6">
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">යාළුවා කිව්වා "දන් දෙමු" → දී සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">ගුරුවරයා පෙළඹව්වා "සීලය රකිමු" → රැක සතුට ලැබුණා (ඤාණය නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">මිත්‍රයා කිව්වා "මෙත්තාව පතුරවමු" → පතුරවා සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">යාළුවා පෙළඹව්වා "කරුණාවෙන් උදව් කරමු" → කර සතුට ලැබුණා (ඤාණය නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">ගුරුවරයා කිව්වා "ධර්ම දානය දෙමු" → දී සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">මිත්‍රයා පෙළඹව්වා "බණ අහමු" → අහා සතුට ලැබුණා (ධර්මය තේරුම් ගත්තේ නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">යාළුවා කිව්වා "පිංකමක් කරමු" → කර සතුට ලැබුණා (ඤාණය නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">ගුරුවරයා පෙළඹව්වා "මුදිතාව පතුරවමු" → පතුරවා සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">මිත්‍රයා කිව්වා "භාවනා කරමු" → කර සතුට ලැබුණා (ඤාණය නැහැ)</p>
                        </div>
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">
                            <p class="text-lg font-medium">යාළුවා පෙළඹව්වා "සද්ධාවෙන් පින්කමක් කරමු" → කර සතුට ලැබුණා (ධර්මය ගැන තේරුමක් නැහැ)</p>`,level6:null,level7:null}},17:{id:17,title:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="content-box green">\r
                    <h3 class="text-2xl font-bold text-green-900 mb-6 text-center">ඉතා සරලෙන් කිව්වොත්...</h3>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-xl shadow-md">\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">😐</span>\r
                                <span class="text-lg"><strong>මැදිහත්</strong> බව (උපේක්ෂා)</span>\r
                            </p>\r
                            <p class="flex items-center gap-3 mb-3">\r
                                <span class="text-4xl">✨</span>\r
                                <span class="text-lg"><strong>ඤාණය</strong> තියෙනවා</span>\r
                            </p>\r
                            <p class="flex items-center gap-3">\r
                                <span class="text-4xl">🌱</span>\r
                                <span class="text-lg"><strong>තමන්ටම</strong> ඇතිවුණා</span>\r
                            </p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <p class="font-bold text-yellow-900 mb-3">උදාහරණ:</p>\r
                            <p class="italic leading-relaxed text-lg text-gray-700">\r
                                "මම කල්පනා කළා ජීවිතේ ගැන…  \r
                                ඒකෙන් මට තේරුණා කර්මය, අනිත්‍ය, දුක්ඛ, අනත්ත.  \r
                                හිතට ලැබුණේ මැදිහත් බවක්, ඒත් ඤාණය උපන්නා!"  \r
                                → මේ තමයි පස්වැන්න මහා කුසල සිත!\r
                            </p>`,level2:`<div class="space-y-6">\r
                    <div class="grid-2">\r
                        <div class="content-box gray">\r
                            <h4 class="font-bold text-xl text-gray-900 mb-3">උපේක්ෂා සහගත</h4>\r
                            <p class="text-lg">මැදිහත් බව – සතුටක් නැත, දුකක් නැත</p>\r
                            <p class="text-sm mt-2 text-gray-700">කුසල උපේක්ෂා – ධර්මානුභාවයෙන් බැඳුණු මැදිහත්බව</p>\r
                        </div>\r
                        <div class="content-box yellow">\r
                            <h4 class="font-bold text-xl text-yellow-900 mb-3">ඤාණ සම්ප්‍රයුක්ත</h4>\r
                            <p class="text-lg">ප්‍රඥාව එක්ක බැඳුණු</p>\r
                            <p class="text-sm mt-2 text-yellow-700">අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ චෛතසික තුනම තියෙනවා</p>\r
                        </div>\r
                        <div class="content-box green-border">\r
                            <h4 class="font-bold text-xl text-green-900 mb-3">අසංස්කාරික</h4>\r
                            <p class="text-lg">තමන්ටම ඇතිවූ සිත</p>\r
                            <p class="text-sm mt-2 text-green-700">කවුරුත් පෙළඹවලා නැහැ – ස්වභාවිකවම ධර්මය තේරුණා</p>`,level3:`<div class="content-box purple">\r
                    <h3 class="text-2xl font-bold text-purple-900 mb-6 text-center">මෙම සිත අයත් වන්නේ...</h3>\r
                    <div class="grid-3">\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">8</div>\r
                            <p class="font-bold text-purple-700">මහා කුසල සිත්</p>\r
                            <p class="text-sm text-purple-600 mt-2">පස්වැන්න</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">24</div>\r
                            <p class="font-bold text-purple-700">කාමාවචර කුසල</p>\r
                        </div>\r
                        <div class="bg-white p-6 rounded-2xl text-center shadow-lg">\r
                            <div class="text-5xl mb-3">89/121</div>\r
                            <p class="font-bold text-purple-700">සියලු සිත් අතර</p>\r
                        </div>\r
                    </div>\r
                    <div class="mt-10 bg-gradient-to-r from-amber-200 to-yellow-200 p-6 rounded-2xl">\r
                        <h4 class="font-bold text-xl text-amber-900 mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4 gap-4 text-sm">\r
                            <div class="p-3 rounded-lg bg-white-80">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-yellow-500 font-bold animate-pulse">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසංඛාරික ⭐</div>\r
                            <div class="p-3 rounded-lg bg-white-80">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසංඛාරික</div>\r
                            <div class="p-3 rounded-lg bg-white-80">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසංස්කාරික`,level4:`<div class="content-box gold">\r
                    <h3 class="text-3xl font-bold text-amber-900 mb-8 text-center">\r
                        ත්‍රිහේතුක + ඤාණ සම්ප්‍රයුක්ත + අසංස්කාරික = 38 චෛතසික!\r
                    </h3>\r
                    <div class="text-center mb-8">\r
                        <p class="text-6xl font-black text-amber-700">ඤාණය තියෙන + අසංස්කාරික නිසා → 38!</p>\r
                        <p class="text-lg text-amber-800 mt-2">(සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසංස්කාරිකට සමාන - උපේක්ෂා වේදනාව වෙනස්)</p>\r
                    </div>\r
                    <div class="grid-2">\r
                        <div class="bg-white p-6 rounded-2xl shadow-xl">\r
                            <h4 class="font-bold text-blue-800 text-xl mb-4">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="grid-2 gap-3">\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඵස්ස</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">වේදනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">සඤ්ඤා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">චේතනා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ඒකග්ගතා</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">ජීවිතින්ද්‍රිය</div>\r
                                <div class="bg-blue-100 p-3 rounded text-center">මනසිකාර`,level5:`<div class="content-box red">\r
                    <h3 class="text-3xl font-bold text-red-900 mb-8 text-center">\r
                        උපේක්ෂා + ඤාණය තියෙන ලස්සන මොහොත්!\r
                    </h3>\r
                    <div class="grid-2 gap-6">\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">කල්පනා කරද්දී ධර්මය තේරුණා → මැදිහත් බවක් ලැබුණා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">අනිත්‍ය, දුක්ඛ, අනත්ත තේරුම් ගත්තු මොහොත → උපේක්ෂාව උපන්නා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">කර්මය ගැන තේරුම් ගත්තු මොහොත → මැදිහත් බවක් ලැබුණා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ධර්මය අසනකොට තේරුම් ගත්තා → උපේක්ෂාව උපන්නා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">භාවනා කරද්දී ධර්මය තේරුණා → මැදිහත් බවක් ලැබුණා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">සම්මා දිට්ඨිය ලැබුණු මොහොත → උපේක්ෂාව උපන්නා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">යෝනිසෝ මනසිකාරයෙන් ධර්මය තේරුණා → මැදිහත් බවක් ලැබුණා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">ධර්මය ගැන කල්පනා කරද්දී තේරුම් ගත්තා → උපේක්ෂාව උපන්නා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">කල්‍යාණ මිත්‍රයන්ගෙන් ධර්මය අසා තේරුම් ගත්තා → මැදිහත් බවක් ලැබුණා (ඤාණය තියෙනවා)</p>\r
                        </div>\r
                        <div class="bg-white p-5 rounded-xl shadow-lg border-l-8 border-yellow-500">\r
                            <p class="text-lg font-medium">සද්ධර්මය අසා ධර්මය තේරුණා → උපේක්ෂාව උපන්නා (ඤාණය තියෙනවා)</p>`,level6:null,level7:null}},18:{id:18,title:"උපේක්ෂා සහගත ඤාණ සම්ප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},19:{id:19,title:"උපේක්ෂා සහගත ඤාණ විප්‍රයුක්ත අසංස්කාරික සිත",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">සෘජු වශයෙන්</h3>
                        <ul>
                            <li><strong>උපේක්ෂා:</strong> මනසෙහි සතුටු හෝ දුක නැති මැදිහත්භාවයක්.</li>
                            <li><strong>ඤාණ විප්‍රයුක්ත:</strong> ඤාණය, පඤ්ඤා, අමෝහ නොමැති – ද්විහේතුක.</li>
                            <li><strong>අසංස්කාරික:</strong> අත්‍යවශ්‍යයෙන් ස්වයං ස්පූර්තියෙන් – අයෙකු පෙළඹුවේ නැහැ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p class="leading-relaxed">
                            "මම දන් දීලා හෝ පින්කමක් කරලා, හැම දේම මැදිහත් හිතකින් කළා. පව් හොඳ මග ගැන ගැඹුරු අවබෝධයක් හිමිවුණේ නැහැ, ඒත් හිතට කුසල උත්සාහයක් ඇති වුණා." → උපේක්ෂා + ඤාණ නැති + ස්වභාවික = මහා කුසලයි.
                        </p>`,level2:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"උපේක්ෂා"</h3>
                        <ul>
                            <li>සතුට හෝ දුක නොමැති, සමාන මනෝභාවයක්.</li>
                            <li>උපේක්ෂා භාවනාවෙන් ඇතිවන මැදිහත්වීම.</li>
                            <li>කාර්යයන් සාමාන්‍යව සිදු කරන අතර, ව්‍යාකූල නොවන චිත්තයක්.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">"ඤාණ විප්‍රයුක්ත"</h3>
                        <ul>
                            <li>ඤාණය (පඤ්ඤා) යෙදී නැති – අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ චෛතසික 3ක් නොමැති.</li>
                            <li>හේතු 2ක් (අලෝභ, අදෝස) පමණයි – ද්විහේතුක.</li>
                            <li>නිවැරදි දහම ගැන ගැඹුරු අවබෝධය නොමැති.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අසංස්කාරික"</h3>
                        <ul>
                            <li>අනුන්ගේ උපදෙස් නැතිව ස්වයංව ඇතිවී.</li>
                            <li>පෙර පිරිමැසුම හෝ පවතින උපක්‍රමයක් නිසා ස්වභාවිකව පැනනගි.</li>
                            <li>විතක්ක චෛතසිකය නොමැති (අතුරුපත් සංකේතයක්).</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">මහා කුසල සිත් 8 තිබෙන සංවිධානයේ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">8</p>
                            <p class="font-bold">මහා කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">අංක 7 – උපේක්ෂා, ඤාණ විප්‍රයුක්ත, අසංස්කාරික</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">34</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">ඤාණය හා විතක්ක නොමැති නිසා 34</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89/121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත වර්ගීකරණයේ තැන</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top:1.6rem;">
                        <h4 class="font-bold text-lg mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසං</div>
                            <div class="badge">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසං</div>
                            <div class="badge">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසං</div>
                            <div class="badge">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසං</div>
                            <div class="badge">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසං</div>
                            <div class="badge">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසං</div>
                            <div class="badge" style="background: rgba(56,189,248,0.28); color:#0f172a; font-weight:700;">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසං ⭐</div>
                            <div class="badge">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසං`,level4:`<div class="content-box">
                    <h3 class="text-center text-2xl font-bold mb-6">ඤාණ නැති + විතක්ක නැති නිසා → 34 චෛතසික!</h3>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්ගතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 16</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. උපන් හිතක් – කවුරුත් නොකියවාම දැනටමත් පින්කමක් කිරීමට තැත් කිරීම (මැදිහත්, ඤාණ නැති).</div>
                    <div class="example-card">2. දවසෙ වැඩ කරද්දී ස්වයංවම නරක සිතක් නැතිව ජීවත් වීම – නමුත් ධර්මය ගැන ගැඹුරු අවබෝධයක් නැති.</div>
                    <div class="example-card">3. යමෙක්ට උදව් කළා – හිතට සතුටක් නැතිව මැදිහත් තමන්ගේ කර්තව්‍යය කළා.</div>
                    <div class="example-card">4. දන් දීලා හෝ බණ අහලා – ඉගැන්වීමට කොයි කෙනෙක්වත් නොතිබුණත් තමාටම හිතුණා.</div>
                    <div class="example-card">5. සදාචාරය රකිනකොට – නිවැරදි මඟ ගැන සිතා සතුටක් නැතිව ධර්මය අනුගමනය කිරීම.</div>
                    <div class="example-card">6. විපස්සනා හෝ ධර්ම ව්‍යාපෘතියක් නොව, උපන් හිතකින් පවත්වන උපකාරී ක්‍රියා.</div>
                    <div class="example-card">7. දොරටු බලා ගැනීම – "මට මෙය කරන්න ඕන" කියලා මැදිහත් බවෙන් කරන්නේ මුල් පරමිතාවෙන්.</div>
                    <div class="example-card">8. ආගමික නිතිකර්මයක් ස්වෙන් අනුගමනය කළත්, ඤාණය නැති නිසා ගැඹුරු අවබෝධයක් නොකැමති.</div>
                    <div class="example-card">9. ව්‍යාපෘතියකට හිතේ උනන්දුවෙන් නියුතු වීම – සතුට හෝ දුක නැතිව මහන්සි වෙන ලක්ෂණය.</div>
                    <div class="example-card">10. අධිකාරි කෙනෙකුට හිතුණා – සමාජයට හොඳ කරන්න, නමුත් ධර්මය ගැන දැනුමක් නොමැතිව.`,level6:null,level7:null}},20:{id:20,title:"උපේක්ෂා සහගත ඤාණ විප්‍රයුක්ත සසංස්කාරික සිත",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">සරල වචන 3කින්</h3>
                        <ul>
                            <li><strong>උපේක්ෂා:</strong> මැදිහත්, ව්‍යාකූල නොවන මනසක්.</li>
                            <li><strong>ඤාණ විප්‍රයුක්ත:</strong> පඤ්ඤා නොමැති; අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ නොමැති.</li>
                            <li><strong>සසංස්කාරික:</strong> අනුන්ගේ උපදෙස් හෝ උපකාරයෙන් (ගුරු, මිත්‍ර) ඇතිවූ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">පිළිගැනීමේ උදාහරණය</h3>
                        <p class="leading-relaxed">
                            "ගුරුතුමා කියලා දුන්නා – සමාධි නං තනියම නිදාගත්තොත් හොඳයි. මම ඒ උපදෙස් මත
                            මැදිහත් මනසකින් පින් වැඩ කරනවා. ගැඹුරු ඤාණයක් නොඑනවත් මට එය හදාගෙන
                            පවතිනවා" → උපේක්ෂා + ඤාණ නැති + සසංස්කාරික.
                        </p>`,level2:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"උපේක්ෂා"</h3>
                        <ul>
                            <li>සමානාත්මතාවය – ලොකියාහරණයක් නොමැතිව සමාන මනස.</li>
                            <li>භාවනාවෙන් පවත්නා උපාය – ප්‍රමිතියෙන් නිර්විතක් පසුබැසීම.</li>
                            <li>සතුට හෝ දුඃඛය නොපෙනෙන මෘදු අවස්ථාව.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">"ඤාණ විප්‍රයුක්ත"</h3>
                        <ul>
                            <li>පඤ්ඤා නොමැති නිසා – අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ අඩත.</li>
                            <li>ද්විහේතුක – අලෝභ + අදෝස ම කීර්තිය.</li>
                            <li>අන්‍යෝන්‍ය වැටුප් දැනුමක් නොමැති (අවබෝධය shallow).</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"සසංස්කාරික"</h3>
                        <ul>
                            <li>උපදේශ/වග්ගලයෙන් හදාගන්නා ලද – උබදානී.</li>
                            <li>විතක්ක චෛතසිකය එකතු වෙයි (අනුන් පෙන්වා දී යොමු කිරීම නිසා).</li>
                            <li>ගුරුන්, මිතුරන්, ග්‍රන්ථ හෝ ආගමික උපදෙස් වල බලපෑම.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">මහා කුසල ඉරිසියාව තුළ අන්තිම සිත</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">8</p>
                            <p class="font-bold">මහා කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">අනුක්‍රමයේ අටවැන්න</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">35</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">ඤාණ අඩුව + විතක්ක සහිත</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89/121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත සංඛ්‍යාගාරයෙහි ස්ථානය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">මහා කුසල 8 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge">1. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත අසං</div>
                            <div class="badge">2. සෝමනස්ස ඤාණ සම්ප්‍රයුක්ත සසං</div>
                            <div class="badge">3. සෝමනස්ස ඤාණ විප්‍රයුක්ත අසං</div>
                            <div class="badge">4. සෝමනස්ස ඤාණ විප්‍රයුක්ත සසං</div>
                            <div class="badge">5. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත අසං</div>
                            <div class="badge">6. උපේක්ෂා ඤාණ සම්ප්‍රයුක්ත සසං</div>
                            <div class="badge">7. උපේක්ෂා ඤාණ විප්‍රයුක්ත අසං</div>
                            <div class="badge" style="background: rgba(16,185,129,0.32); color:#064e3b; font-weight:700;">8. උපේක්ෂා ඤාණ විප්‍රයුක්ත සසං ⭐`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">ඤාණ ත්‍රිත්වය නොමැති නිසා 3ක් අඩු – නමුත් සසංස්කාරික නිසා <strong>විතක්ක</strong> පවතිනවා → 35</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්ගතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 16</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. භාවනා ගුරුවරයාගේ උපදෙස් අනුව පිරිසිදු මැදිහත් භාවයක් ඇති කරද්දී – ඤාණය නොපැමිණෙයි, නමුත් කුසල වෙයි.</div>
                    <div class="example-card">2. දන් දීමක් භාවිතා කරනකොට, ගුරුතුමාගේ "උපේක්ෂාවෙන් කරන්න" යන උපදෙස් අනුගමනය කිරීම.</div>
                    <div class="example-card">3. සමාජ සේවාවක් මාර්ග උපදෙස් යටතේ ක්‍රියාත්මක කරන අතර, අන් අයගේ නිර්දේශයකට අනුව.</div>
                    <div class="example-card">4. විදර්ශනා අනුශාසනයට අනුව වැඩි අවබෝධයකින් තොරව පසුබැසීම.</div>
                    <div class="example-card">5. බණ අහන මගපෙන්වීමකින් පසුව – "සතුටට හෝ දුකට යන්න එපා" කියා පෙළඹවීම.</div>
                    <div class="example-card">6. ආගමික මූලධර්ම ගුරුවරයා කියා දුන් ව්‍යවස්ථාමය වැඩපිළිවෙලක් අනුව සමාජය සේවය කිරීම.</div>
                    <div class="example-card">7. පවුලේ වැඩසටහනක් – උදාර ක්‍රියාවක් – ගුරු මගපෙන්වීමෙන් පසු කෙරෙන උපකාර.</div>
                    <div class="example-card">8. කල්‍යාණ මිත්‍රයක් "මැදිහත් වෙමු" කියා උපදේශ කිරීමෙන් පසු ගැඹුරු අවබෝධයක් නොමැතිව කුසල දේකින්.</div>
                    <div class="example-card">9. සදාචාර උපාය සැලසුම් – උපදෙස් හිඟ නොව, සංවිධානයක නායකත්වය යටතේ.</div>
                    <div class="example-card">10. දීප්තිමත් බණ දේශනා ඇසුවත් – අන් අයගේ මඟපෙන්වීම යටතේ මැදිහත් සේවය කිරීම.`,level6:null,level7:null}},21:{id:21,title:"විතර්ක • විචාර • ප්‍රීති • සුඛ • ඒකාග්‍රතා සහිත ප්‍රථම ධ්‍යාන කුසල සිත",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">ක්‍රියාකාරී අංග 5</h3>
                        <ul>
                            <li><strong>විතර්ක:</strong> සිත අරමුණට මුලින් යොමු කිරීම.</li>
                            <li><strong>විචාර:</strong> අරමුණ මතදීම තබාගැනීම.</li>
                            <li><strong>ප්‍රීති:</strong> භාවනා සාර්ථක වීමේ ප්‍රමෝදය.</li>
                            <li><strong>සුඛ:</strong> මානසික සුවය – කාමික නොව පවතින සැනසිල්ල.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> එකම අරමුණ මත දිරවූ මනස.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">භාවනා අනුව එන ආකෘතිය</h3>
                        <p class="leading-relaxed">
                            "කාය පසාරා සිතුවිල්ලකින් මට රූප ධ්‍යානාවට පිවිසිය හැකි විය. සිත නිතර අරමුණ
                            වෙත යොමු කළා (විතර්ක) – එම අරමුණ පුරා ගෙන ආකාශය මත තබාගත්තා (විචාර).
                            භාවනාවේ ප්‍රීතිය (පීති) සහ සුඛයත් සමග එකම අරමුණ මත ධ්‍යානික ඒකාග්‍රතාව
                            නිරන්තර විය." → මෙය ප්‍රථම ධ්‍යානයේ කුසල චිත්තයයි.
                        </p>`,level2:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">වචන විස්තරයන්</h3>
                        <ul>
                            <li><strong>විතර්ක:</strong> සිත අරමුණට මුල් වරට තල්ලු කිරීම (applied thought).</li>
                            <li><strong>විචාර:</strong> එම අරමුණය හසුරුවාගෙන තබා ගැනීම (sustained thought).</li>
                            <li><strong>ප්‍රීති:</strong> අභිසාරී ප්‍රමෝදයක් – ආත්මීය සතුට, කාමික නොවේ.</li>
                            <li><strong>සුඛ:</strong> ලාභාගත මානසික සැනසිල්ල – පීතියට පසු විවේක සුවය.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> එකම අරමුණෙහි සදාකාලික ස්ථාවර සමාධිය.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">රූපාවචර කුසලයේ විශේෂත්වය</h3>
                        <ul>
                            <li>මෙය <strong>භාවනාව</strong> (රූපභාවනා) මඟින් පමණක් ඇති වේ.</li>
                            <li><strong>පංච නීවරණ</strong> දුරු කරගත් පසුව මෙය ඇතිවේ.</li>
                            <li><strong>ස්වභාවිකව ත්‍රිහේතුක</strong> යි – අමෝහය හා පඤ්ඤා චෛතසිකය හා එක්.</li>
                            <li>පෘථග්ජනිකයාට මේ ධ්‍යානය කේන්ද්‍රීය අරමුණ යොමු කිරීම හා තබා ගැනීමේ ශිල්පයයි.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">රූපාවචර ධ්‍යාන ක්‍රමය තුළ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">5</p>
                            <p class="font-bold">රූපාවචර කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">පළමුවැන්න – පංචකිය ධ්‍යානය</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">15</p>
                            <p class="font-bold">රූපාවචර සිත් සමස්ත ගණන</p>
                            <p class="text-sm text-gray-600 mt-2">කුසල • විපාක • ක්‍රියා</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89 / 121</p>
                            <p class="font-bold">අභිධම්මය චිත්ත ලෝකය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">රූප කුසල සිත් 5 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge" style="background: rgba(16,185,129,0.36); color:#064e3b; font-weight:700;">1. ප්‍රථම ධ්‍යානය ⭐</div>
                            <div class="badge">2. දුතිය ධ්‍යානය</div>
                            <div class="badge">3. තතිය ධ්‍යානය</div>
                            <div class="badge">4. චතුත්ථ ධ්‍යානය</div>
                            <div class="badge">5. පඤ්චම ධ්‍යානය</div>
                        </div>
                        <p class="text-sm text-gray-600 mt-3">පළමුවැන්න පංචජ්හානික අංග සියල්ලම පවතින එකම රූප කුසල චිත්තයයි.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">ත්‍රිහේතුක වන්නේ – අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ ලැබීම නිසා 36 චෛතසික.</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතාව</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. ආනාපාන භාවනාව ආරම්භ කළ භාවනාකරු – හුස්මට සිත අරමුණ කර, නැවත නැවත යොමු කරන විතර්කය පුහුණු කළ මොහොත.</div>
                    <div class="example-card">2. ක්ෂීරසමූහකේ මත එකග්‍රවීම – උපදේශය මත සිත තබාගෙන විචාරයෙන් අරමුණට හුරු කිරීම.</div>
                    <div class="example-card">3. භාවනා ගුරුවරයෙක් අනුග්‍රහයෙන් අවරුද්දක උත්සාහයෙන් පංච නීවරණ දුරු කළ පසු ලැබූ ප්‍රීති.</div>
                    <div class="example-card">4. බ්‍රහ්මවිහාර මෛත්‍රී භාවනාව හරහා වූ ප්‍රථම ධ්‍යානය – සිත තනි අරමුණකට සෙමින් ගෙන යාම.</div>
                    <div class="example-card">5. පසුරු ධ්‍යානය (කසීණ භාවනා) – විතර්ක, විචාර ශිල්පයෙන් කසීණ පටල මත මනස තබාගැනීම.</div>
                    <div class="example-card">6. කාය සංඥා නිවැරදිව ඇරඹූ විට ලැබූ ප්‍රමෝදය (ප්‍රීති) හා අවසන් වෙද්දී ඇති සැනසීම (සුඛ).</div>
                    <div class="example-card">7. ධර්ම දේශනාවක් අසා භාවනා රීඛාව අනුගමනය කළ පසු අභ්‍යන්තර ඒකාග්‍රතාව සමග ලැබූ අරමුණ.</div>
                    <div class="example-card">8. ගෞතම බුද්ධයාගේ උපදෙස් අනුව පංච නීවරණ නසන සමානක් – පංචධාංජන අංගවලින් සමන්වය වූ සිත.</div>
                    <div class="example-card">9. විපස්සනාසින්ඛා හැර මෘදු භාවනා අරමුණක් මත නිරන්තරයෙන් එක්කොට සෙනඟා වීම.</div>
                    <div class="example-card">10. භාවනා පින්වතුන්ට උපදෙස් දෙමින් විතර්කය – විචාරය – ප්‍රීති – සුඛ – ඒකාග්‍රතාව ලබා ගැනීමේ ක්‍රමය පැහැදිලි කිරීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී හා අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>ධර්මසංගණී 14 – රූප කුසල චිත්ත විභාගයේ පළමු කුසල සිත.</li>
                        <li>පංච නීවරණය මැඩලීම: කාමචන්දා, පටිඝ, ළගේ, උද්ධච්ච-කුක්කුච්ච, විචිකිච්ඡා.</li>
                        <li>පංච ජ්හානික අංග සමග ජ්හානික සම්මන්ත්‍රණය: (අ) පංචකිය – පසුපස ධ්‍යානයේ අංග අඩුවෙන ආකාරය.</li>
                        <li>කර්මය: රූපලෝකී යාමේ ප්‍රබල කුසල විෂයය – භූමි ප්‍රමණයෙන් ප්‍රධාන.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">භාවනා සංවිධාන</h3>
                    <ul>
                        <li>අනාරම්භක අරමුණක් (කසීණ/අනුසටි/බ්‍රහ්මවිහාර) හරහා වර්ධනය.</li>
                        <li>ප්‍රථම ධ්‍යානයේ සමාධිය සුරැකීමට යෝනිසෝ මනසිකාරය, සති, පඤ්ඤා අවශ්‍ය.</li>
                        <li>ජ්හානික නිවැරදි වීමෙන් පසුව විපස්සනා භාවනාවට පදනම සකස් වේ.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">කාර්යශීල ප්‍රතිඵල</h3>
                        <ul>
                            <li>රූපලෝකී භූමියෙහි උපපතියක්, දීර්ඝ සමාධි බලයක්.</li>
                            <li>මනාසික විශුද්ධිය, කාම චිත්ත සෝමසැනසීම, මහගත ප්‍රමෝදය.</li>
                            <li>දෙවියන්ගේ රූප ලෝක සන්සුන් භාවය, සමාධි වැඩිවීම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිකාර / ප්‍රගති මාර්ග</h3>
                        <ul>
                            <li>පංච නීවරණ දුරලන සෑම මොහොතකම නිරන්තර පාළනය.</li>
                            <li>සටන් වඳ වීමට එය විපස්සනාවට මඟ පෙන්වීම – අනිත්‍ය, දුක්ඛ, අනාත්ම විමර්ශනය.</li>
                            <li>මනා භාවනා ගුරු උපදෙස්, සති-සමථය සංයුක්ත කිරීම.</li>
                        </ul>`}},22:{id:22,title:"විචාර • ප්‍රීති • සුඛ • ඒකාග්‍රතා සහිත ද්විතීය ධ්‍යානය",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">අංග 4ක්</h3>
                        <ul>
                            <li><strong>විතර්කය නැත:</strong> පළමු ධ්‍යානයේ මුල් වූ අරමුණට යොමු කිරීම අවශ්‍ය නැතිවේ.</li>
                            <li><strong>විචාර:</strong> අරමුණ මතදීම තබාගැනීම (sustained thought) තනිවම පවතී.</li>
                            <li><strong>ප්‍රීති & සුඛ:</strong> මනස පිරිසිදු වීමේ ප්‍රමෝදය සහ සුඛය.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> පවතින සමාධිය තවදුරටත් ශක්තිමත් වේ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණය</h3>
                        <p class="leading-relaxed">
                            "විතර්කයෙන් අරමුණට යොමු කළ පළමු ධ්‍යානයෙන් පසු, දැන් මට අරමුණට නැවත යොමුවීමට අවශ්‍ය නැහැ.
                            සිත ස්වයං අරමුණේ නවතිලා, ප්‍රීතිය, සුඛය සහ එකග්‍රතාව පමණක් පවතින සිතක්."
                        </p>`,level2:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"විචාර"</h3>
                        <ul>
                            <li>අරමුණ නිරන්තර තබාගැනීමේ සාරාංශය.</li>
                            <li>විතර්කය නැති වුවත් අරමුණ නොසැලී තබා ගෙන යයි.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ප්‍රීති & සුඛ"</h3>
                        <ul>
                            <li>ජ්හානය පවත්වාගෙන යාමෙන් ලැබෙන අභ්‍යන්තර ප්‍රමෝදය.</li>
                            <li>පීති – සටන් හෝ අධික සංවේගය; සුඛ – නිශ්චල සැනසීම.</li>
                        </ul>
                    </div>
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"ඒකාග්‍රතා"</h3>
                        <ul>
                            <li>තවදුරටත් වඩා තද එකග්‍රතාව.</li>
                            <li>විතර්කය නැතිවීමේ ප්‍රතිඵලයක් ලෙස විචාර + ඒකාග්‍රතා වැඩිවේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">රූප ධ්‍යානයේ ක්‍රමය තුළ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">5</p>
                            <p class="font-bold">රූපාවචර කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">දෙවැන්න – විතර්ක නසාගත් තත්වය</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">35</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">විතර්ක නොමැති නිසා 36 → 35</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89/121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත ප්‍රණාලයේ තැන</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">රූප කුසල සිත් 5 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge">1. ප්‍රථම ධ්‍යානය</div>
                            <div class="badge" style="background: rgba(16,185,129,0.35); color:#064e3b; font-weight:700;">2. ද්විතීය ධ්‍යානය ⭐</div>
                            <div class="badge">3. තතිය ධ්‍යානය</div>
                            <div class="badge">4. චතුත්ථ ධ්‍යානය</div>
                            <div class="badge">5. පඤ්චම ධ්‍යානය</div>
                        </div>
                        <p class="text-sm text-gray-600 mt-3">දෙවැන්න වීමෙන් විතර්ක අවසන්; අනෙක් අංග ඔරලෝසු කර තිබේ.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">විතර්ක නොමැති, නමුත් අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ පැවතියි → ත්‍රිහේතුක, චෛතසික 35.</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. පළමු ධ්‍යානය රැඳවීමෙන් පසු, විතර්කය ස්වයං නාශ වන තෙක් භාවනා කර විචාර පමණක් පවත්වා ගැනීම.</div>
                    <div class="example-card">2. කසීණ පටලයේ නිර්මාණය සම්පූර්ණ වීමෙන් පසු, මනස අරමුණේ තබා ගැනීමෙන් ප්‍රීති-සුඛ වැඩිවීම.</div>
                    <div class="example-card">3. භාවනා ගුරුවරයා වශයෙන් "දැන් විතරක් අරමුණට යොමු කරන්න ඕනෙ නැහැ" යන්න අනුගමනය කිරීම.</div>
                    <div class="example-card">4. බ්‍රහ්මවිහාර මෛත්‍රී භාවනාව කළ විට – කාලයක් පසු වලා වීරිය හා සති තුළ විචාරය පමණක් පවතින අවස්ථාව.</div>
                    <div class="example-card">5. අනුසටි භාවනාවෙන් රූප කසීණ වර්ධනයට පසු රූප ධ්‍යානයට යන අවස්ථාව.</div>
                    <div class="example-card">6. පස් නීවරණය අඩාල වීරිය හා සති වලින් මෙහෙයවූ පසු ක්ෂීරසමූහකේ පිරිමැසුම.</div>
                    <div class="example-card">7. භාවනා මිතුරන් අනුගමනය කිරීමෙන් ප්‍රීති, සුඛය සහ ඒකාග්‍රතාව සමඟ විචාරය ශක්තිමත් කිරීම.</div>
                    <div class="example-card">8. සමාධියේ ආරම්භක හුස්ම සංඥාව අත්හැර සිත ස්වයං විචාරක තත්වයට ගෙනයාම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-3">ධර්මසංගණී සහ අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>රූප කුසල චිත්ත 2 – ද්විතීය ධ්‍යානය, විතර්ක අත්හරිමින්.</li>
                        <li>පංච නීවරණ තදින් නාසනය. විචිකිච්ඡාවක් නොමැති.</li>
                        <li>විතර්ක නැතිවීම, වැඩි උචිත සමාධිය හා ප්‍රසන්න පීති.</li>
                        <li>විපාක හා ක්‍රියා චිත්ත සමඟ එකම විෂයයක් – රූප විපාක, රූප ක්‍රියා.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-3">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>පළමු ධ්‍යානයේ තද අරගලයක් (විතර්ක) අත්හැර – ස්වයං සෙමෙ සැලීම.</li>
                        <li>පීති හා සුඛයෙන් අභ්‍යන්තර සැනසීම වැඩිවේ; ඒකාග්‍රතාව දීර්ඝ වේ.</li>
                        <li>මෙම මට්ටම විදර්ශනා පදනමට ඉතා ගැලපේ; පිටුපසින් විපස්සනාට පදනම.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිඵල</h3>
                        <ul>
                            <li>අභ්‍යන්තර සමාධි ශක්තිය වැඩිවේ; රූප ලෝකයේ උපදින්න හැක.</li>
                            <li>පීති-සුඛය මගින් භාවනා ක්‍රියාවාශීතාව වැඩිවේ.</li>
                            <li>පසුව තවදුරටත් විපස්සනා කල හැකි පදනම සකසයි.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිකාර / ප්‍රවර්ධන</h3>
                        <ul>
                            <li>සති-සමථ දෙකම නිරන්තර පුහුණු කිරීම.</li>
                            <li>අයුක්තිමත් ප්‍රීති සන්තෘප්තියට ඇලී නොවැටීම.</li>
                            <li>සමාරම්භක උත්සාහය නොවැඩෙන විට සදාකාලික සරණ වීම.</li>
                        </ul>`}},23:{id:23,title:"ප්‍රීති • සුඛ • ඒකාග්‍රතා සහිත තෘතීය ධ්‍යානය",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">අංග 3ක් තනිව පවතී</h3>
                        <ul>
                            <li><strong>විතර්ක • විචාර අත්හැරලා</strong> – ජ්හානික සිත දැන් ස්වයං වැඩේ කරයි.</li>
                            <li><strong>පීති:</strong> සමාධිමය ප්‍රමෝදය තවමත් සජීවිය.</li>
                            <li><strong>සුඛ:</strong> වැඩි වශයෙන් නිශ්චල සැප හැඟීම.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> අරමුණ මත තදින් තබාගැනීම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">සරිලන උදාහරණය</h3>
                        <p class="leading-relaxed">"විතර්කය, විචාරය පුරෝගාමීව අහුරු කරගෙන ඇති භාවනාකරුට, දැන් ඒ දෙක අවශ්‍ය නැහැ. සිත ප්‍රමෝදයෙන් (පීති) සහ සුවයෙන් (සුඛ) පිරිනිහිටමින්, එක් අරමුණක (ඒකාග්‍රතාව) පමණක් රැඳී සිටීම තෘතීය ධ්‍යානයයි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"පීති"</h3>
                        <ul>
                            <li>අභිසාරී ප්‍රමෝදයක් – හෘද සම්ප්‍රාප්තිය.</li>
                            <li>විතර්කය අහිමි වුවත් පීතිය තවම පවතින අවස්ථාව.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"සුඛ"</h3>
                        <ul>
                            <li>ප්‍රීතියට පසු ඇතිහිටින මනෝසන්තුෂ්ට සැනසීම.</li>
                            <li>කාමික සුඛ නොව – භාවනාවේ උපන් සුවය.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ඒකාග්‍රතා"</h3>
                        <ul>
                            <li>අරමුණ නොසැලී තබා ගැනීම – සමාධිය.</li>
                            <li>නිවැරදි මනසිකාරය සමඟ තවත් බරවත් වේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">රූප ධ්‍යානයේ ප්‍රගතිය තුළ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">5</p>
                            <p class="font-bold">රූපාවචර කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">තුන්වැන්න – ජ්හානික අංග 3ක් පමණක්.</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">34</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">විතර්ක + විචාර නොමැති නිසා හිස්.</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89/121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පුංජය තුළ</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">රූප කුසල සිත් 5 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge">1. ප්‍රථම ධ්‍යානය</div>
                            <div class="badge">2. දුතිය ධ්‍යානය</div>
                            <div class="badge" style="background: rgba(16,185,129,0.36); color:#065f46; font-weight:700;">3. තෘතීය ධ්‍යානය ⭐</div>
                            <div class="badge">4. චතුත්ථ ධ්‍යානය</div>
                            <div class="badge">5. පඤ්චම ධ්‍යානය</div>
                        </div>
                        <p class="text-sm text-gray-600 mt-3">තෘතීය ධ්‍යානය = විචාර අත්හැර – පීති • සුඛ • සමාධිය පමණක් පවත්වාගැනීමේ සවිස්තර පියවර.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">ත්‍රිහේතුක රූප කුසලයක් – අමෝහ, පඤ්ඤින්ද්‍රිය, ඤාණ පවතින අතර විතර්ක • විචාර නසා ඇත.</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. පළමු හා දෙවන ධ්‍යානය නිරන්තර රැඳවූ භාවනාකරුගේ සිත, විචාරය ස්වයං නසාගෙන පීති • සුඛ පමණක් පවතින අවස්ථාව.</div>
                    <div class="example-card">2. කසීණ පටලය මත මනස ස්ථාපිත කළ විට, නැවත නැවත අරමුණට යොමු කිරීම අවශ්‍ය නොවී සුවය පමණක් මතුවීම.</div>
                    <div class="example-card">3. මෛත්‍රී භාවනාවේ ප්‍රගතිය තුළ, ප්‍රීතිය අන්තරා හුන් වුවත්, සිත ප්‍රීති • සුඛ සමඟ පමණක් රැඳී සිටීම.</div>
                    <div class="example-card">4. අනුසටි භාවනාකරුගේ අභ්‍යන්තර සන්සුන් තත්ත්වය – හුස්ම සංඥාව භාරේ නැතිව ධ්‍යානික සුවය පමණක් පවතින යාම.</div>
                    <div class="example-card">5. බ්‍රහ්ම විහාර භාවනාවකදී වඩාත් නිශ්චල සමාධියට යාම, සිතේ ප්‍රීති • සුඛය පමණක් ඉතිරිවීම.</div>
                    <div class="example-card">6. පංච නීවරණය සම්පූර්ණයෙන් නිරෝජනය වූ පසු, සති හා සමාධි උදව්වෙන් පීති • සුඛ තුළ වසන මොහොත.</div>
                    <div class="example-card">7. භාවනා ගුරුවරයෙකුගේ උපදෙස් මත විචාර අත්හැරීමේ අත්දැකීම ලැබීම.</div>
                    <div class="example-card">8. විදර්ශනා සඳහා පෙර සමාධිය තවදුරටත් ශක්තිමත් කිරීමට මේ ධ්‍යානය භාවිත කිරීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>රූප කුසල චිත්ත තුන්වැන්න ලෙස මතක් වේ.</li>
                        <li>විචාර අත්හැරීම – භාවනා පියවර තුන්වෙනි අවස්ථාව.</li>
                        <li>පීති • සුඛ • ඒකාග්‍රතාව තුළින් විද්‍යාත්මක සුවය ශක්තිමත් වේ.</li>
                        <li>විපාක හා ක්‍රියා චිත්ත තුනක ඇතුළත් – රූපාවචර විපාක / ක්‍රියා.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>ස්වභාවිකව තද සමාධිය – අරමුණට නැවත නැවත යොමු කිරීම අවශ්‍ය නැත.</li>
                        <li>පීති සනීපයෙන් ප්‍රකාශ වන අතර, විචාර ඉවත් වීම නිසා සිත තවදුරටත් නිශ්චල වේ.</li>
                        <li>ඊළඟ පියවර (චතුත්ථ ධ්‍යානය) සඳහා පීති අත්හැරීමට මෙය පදනම වේ.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිඵල</h3>
                        <ul>
                            <li>රූප භූමියේ උපදින්නට හේතු වන උපකාරී කුසල කර්ම.</li>
                            <li>පීති සහ සුඛ මඟින් සමාධිය දිගුකාලීනව පවත්වා ගැනීම.</li>
                            <li>විදර්ශනා භාවනාවට දෘඪ පදනම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිකාර / පවත්වීම</h3>
                        <ul>
                            <li>අතිරික්ත ප්‍රීතියට ඇලී නොවීම – සමුදය බලවා දැකීම.</li>
                            <li>අවවාදයක්: පීති අත්හැර ඊළඟ පියවරට (චතුත්ථ) මඟ පෙන්වීම.</li>
                            <li>සති-පඤ්ඤා සමඟ සමාධිය විපස්සනාට පරිවර්තනය.</li>
                        </ul>`}},24:{id:24,title:"සුඛ • ඒකාග්‍රතා සහිත චතුර්ථ ධ්‍යානය",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">අංග 2ක් පමණයි</h3>
                        <ul>
                            <li><strong>පීතිය ඉවත්:</strong> තෘතීය ධ්‍යානයේ පීතිය සන්සුන් විවේකයක් බවට පරිවර්තනය වේ.</li>
                            <li><strong>සුඛ:</strong> තුලපත්රණ නැති, නිශ්චල මානසික සැනසීම පමණක්.</li>
                            <li><strong>එකග්‍රතා:</strong> අරමුණට නොසැලී රැඳෙන්නාවූ තද සමාධිය.</li>
                            <li><strong>සංවේගයේ නවතා:</strong> සිත ප්‍රවෘත්තියේ දැඩි සන්සුන්තාව.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">සරිලන උදාහරණය</h3>
                        <p class="leading-relaxed">"තෘතීය ධ්‍යානයේ පීතිය දියවී ඉතිරිවූ ශාන්ත සුවය හා අර්ථවත් එකග්‍රතාව පමණක් පවතී. මෙහි සන්සුන් භාවය බලවත් නිසා සිත ප්‍රතිසංස්කරණයකින් තොරව අරමුණ මත නිරන්තර ව විවේකීව හිඳී."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"සුඛ"</h3>
                        <ul>
                            <li>අභිධම්මයෙහි පස්කමට අයත් – ජ්හානික සුවය.</li>
                            <li>පීතියට වඩා සන්සුන්, මනෝසන්තුෂ්ට විවේක සුව.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"එකග්‍රතා"</h3>
                        <ul>
                            <li>ජ්හානික සමාධිය සවිමත්ව පවතී.</li>
                            <li>අරමුණ මත සිත ලේසිව රඳවීමට හැකි තත්වය.</li>
                        </ul>
                    </div>
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"පීතිය නොමැතිවීම"</h3>
                        <ul>
                            <li>භාවනාවේ සංවේගී ප්‍රීතිය නාස්ති – පැහැදිලි සන්සුන් බව පවතී.</li>
                            <li>ඊළඟ පියවර (පඤ්චම ධ්‍යානය) සඳහා පෙර පදනම.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">රූප ධ්‍යානයේ පියවර තුළ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">5</p>
                            <p class="font-bold">රූපාවචර කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">සිව්වැන්න – පීතියෙන් පහවුණු නිරවද්‍ය සුව</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">33</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">විතර්ක • විචාර • පීති අහිමි</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89/121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය තුළ</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">රූප කුසල සිත් 5 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge">1. ප්‍රථම ධ්‍යානය</div>
                            <div class="badge">2. දුතිය ධ්‍යානය</div>
                            <div class="badge">3. තෘතීය ධ්‍යානය</div>
                            <div class="badge" style="background: rgba(56,189,248,0.32); color:#0f172a; font-weight:700;">4. චතුර්ථ ධ්‍යානය ⭐</div>
                            <div class="badge">5. පඤ්චම ධ්‍යානය</div>
                        </div>
                        <p class="text-sm text-gray-600 mt-3">සිව්වැන්න = පීතිය නොමැතිව සුව හා සමාධිය පමණක් පවතින නිරවද්‍ය සුංණත භාවය.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">ත්‍රිහේතුක රූප කුසලය – අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ පවතින නමුත් විතර්ක, විචාර, පීති අහිමි.</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. තෘතීය ධ්‍යානය දිගු කලක් රැඳවූ භාවනාකරු, ප්‍රීතිය සන්සුන් කරන්න දැනුවත්ව උත්සාහ කළ විට සිත සුව පමණක් රඳවයි.</div>
                    <div class="example-card">2. කසීණ භාවනාවේ පටල මත නිරන්තරව සිත තබාගෙන, සංවේගී ප්‍රීතිය අඩු කර සුව + සමාධිය පමණක් පවත්වාගැනීම.</div>
                    <div class="example-card">3. මෛත්‍රී භාවනාවකදී ප්‍රීතිය අඩාල වී, අලුත් සන්සුන් සුව හා නිශ්ශබ්ද සමාධි පමණක් ඉතිරිවීම.</div>
                    <div class="example-card">4. සතිපට්ඨාන භාවනාව මගින් විවේකී සතිකරණය – සුව හා කෙලෙසක් සමාධිය පමණක් සකස් කිරීම.</div>
                    <div class="example-card">5. භාවනා ගුරුවරයාගේ උපදෙස් අනුව "පීතිය මැඩපැවැත්විම" පුහුණු කිරීම – සිත නිශ්චල සුවේ රඳවනු ලැබීම.</div>
                    <div class="example-card">6. විදර්ශනා සූදානමක් ලෙස, ප්‍රමුදිත ප්‍රීතිය හුදු සන්සුන් සුවට පරිවර්තනය කිරීම.</div>
                    <div class="example-card">7. නිර්මාණාත්මක සමාධියේ යෙදුණූ භාවනාකරුකට, උද්ධච්ච නැතිව සුව + සමාධිය පමණක් පවතින අවස්ථාව.</div>
                    <div class="example-card">8. හිමිදිරි භාවනාවකදී, ශක්තිමත් විවේක සුව හරහා සිත තවත් පියවරට (පඤ්චම) සූදානම් කිරීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>රූප කුසල චිත්ත සටහනේ සිව්වැන්න ලෙස සඳහන්යි.</li>
                        <li>පංච නීවරණ සම්පූර්ණයෙන් නිරෝධ වී – සුව හා සමාධිය පමණක් පවතින ගැඹුරු ස්ථානය.</li>
                        <li>පීතියක් නොමැතිවීම නිසා සිතේ ප්‍රමෝදය පරාජය වෙයි; විවේකමය ආලෝකය පවතී.</li>
                        <li>විපාක සහ ක්‍රියා චිත්ත සමඟ අදාළ 2 වෙනත් චිත්තවලද මේම ව්‍යුහය පවතී.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>තෘතීය ධ්‍යානයේ ප්‍රීතිය මෙන්ම සන්සුන් සුවට පරිවර්තනය කළ යුතුයි.</li>
                        <li>නව පීතියක් සොයා යන්නේ නැතිව, අභ්‍යන්තර සන්සුන් බව සවිමත් කිරීම යටතේ.</li>
                        <li>ඊළඟ පියවර – පඤ්චම ධ්‍යානය (උපේක්ෂා + ඒකාග්‍රතා) සඳහා දළපහේ පදනම.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිඵල</h3>
                        <ul>
                            <li>රූප භූමියේ භාවප්‍රතිසන්ධියට උපකාරී කුසල කර්මය.</li>
                            <li>ශක්තිමත් සමාධියක් නිසා විදර්ශනා භාවනාවට ඉතා සුදුසු පදනම.</li>
                            <li>සංවේගී ප්‍රමෝදය නොමැති නිසා මානසික සන්සුන් බව විශේෂිතයි.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිකාර / පවත්වා ගැනීම</h3>
                        <ul>
                            <li>සුවට ඇලුනු බවක් ඇති නොවීම – සුවද අනිච්ච බව විමර්ශනය.</li>
                            <li>සමුදය කෝණක් නොවැඩි වීමට යෝනිසෝ මනසිකාරය වැඩීම.</li>
                            <li>ඊළඟ පියවර (පඤ්චම ධ්‍යානය) සඳහා උපාය: සුව දියවී උපේක්ෂාව ඉතිරි වීම.</li>
                        </ul>`}},25:{id:25,title:"උපේක්ෂා • ඒකාග්‍රතා සහිත පංචම ධ්‍යානය",levels:{level1:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="text-xl font-bold mb-4">තනි වශයෙන් ඉතිරිවන අංග 2</h3>
                        <ul>
                            <li><strong>උපේක්ෂා:</strong> සතුට සන්සුන් සුව පවා ඉක්මවා ගිය නිර්වාණ සදාකාලික මැදිහත් බව.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> කිසිදු සංවේගයක් නොමැතිව එක අරමුණ මත පවතින පරම සමාධිය.</li>
                            <li><strong>පීති • සුඛ නොමැත:</strong> හැඟීම් ධාරාව පසුපසට හැරුණු නිසා සුවද නොවේ; සීතල උපේක්ෂාවේ නවතම සන්සුන් බව පමණක්.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">සරල උදාහරණය</h3>
                        <p class="leading-relaxed">"භාවනා පියවර 1 සිට 4 දක්වා පීතිය, සුවය අඩුව අඩුව දියවී තිබේ. දැන් මට පාහේ ආවේ, සිත තුළ හරිම නිශ්චල උපේක්ෂාවක්. කිසිම භාවයක් නැතිව මහත් සමාධියක් පවතින ලෝකය."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"උපේක්ෂා"</h3>
                        <ul>
                            <li>කෙළෙසක් සතුටට හෝ දුක්කයට නැවිසීම; පරම සමබුද්ධ සමාන ක්ෂණික නිර්වේදිතය.</li>
                            <li>පංචම ධ්‍යානයේ තනි වේදනා – පාණතිකා උපේක්ෂා වේදනාව.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"එකග්‍රතා"</h3>
                        <ul>
                            <li>මේ මට්ටමේදී සමාධිය වඩාත් පිරිසිදුයි; කිසිදු සංවේගයකින් නැතිව අරමුණ එදා පැවතියි.</li>
                        </ul>
                    </div>
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">"පීති නැතිවීම"</h3>
                        <ul>
                            <li>තෘතීය දෙසින් සුව පමණක් ඉතිරි වූයේ නම්, දැන් සුව ද නිරෝධවේ.</li>
                            <li>අවික්ල සමාධියට පෙර කෙලෙසක් සුවට ඇලීම නැති වෙයි.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6">රූප ධ්‍යානයේ අවසාන් පියවර</h3>
                    <div class="grid-3">
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">5</p>
                            <p class="font-bold">රූපාවචර කුසල සිත්</p>
                            <p class="text-sm text-gray-600 mt-2">අන්තිම (5) වැනි සමාධිය.</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">32</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-gray-600 mt-2">විතර්ක • විචාර • පීති • සුඛ අහිමි.</p>
                        </div>
                        <div class="content-box neutral">
                            <p class="text-5xl font-black mb-2">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත ලෝකය තුළ</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">රූප කුසල සිත් 5 – සංඛ්‍යා ක්‍රමය</h4>
                        <div class="grid-4">
                            <div class="badge">1. ප්‍රථම ධ්‍යානය</div>
                            <div class="badge">2. දුතිය ධ්‍යානය</div>
                            <div class="badge">3. තෘතීය ධ්‍යානය</div>
                            <div class="badge">4. චතුර්ථ ධ්‍යානය</div>
                            <div class="badge" style="background: rgba(14,165,233,0.28); color:#0f172a; font-weight:700;">5. පංචම ධ්‍යානය ⭐</div>
                        </div>
                        <p class="text-sm text-gray-600 mt-3">උපේක්ෂා + ඒකාග්‍රතා පමණක් පවතින අවසන් රූප ධ්‍යානය; ඊළඟට අරූප ධ්‍යානයට පිවිසීමට දොරටුව.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6">ත්‍රිහේතුක රූප කුසලය – අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ පවතින අතර, ජ්හානික අංග ලෙස උපේක්ෂා • ඒකාග්‍රතා පමණක් ඉතිරිවෙයි.</p>
                    <div class="grid-2">
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා (උපේක්ෂා)</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box neutral">
                            <h4 class="font-bold mb-3">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. තෘතීය ධ්‍යානයේ පීතිය සන්සුන් කිරීම – සුව ද අත්හරුන විට ඉතිරිවන්නේ උපේක්ෂා ප්‍රමුඛ සමාධිය.</div>
                    <div class="example-card">2. කසීණ භාවනාවේ අරමුණ භාරයට ගෙන, සංවේගී ප්‍රීතිය නවා, පරම උපේක්ෂාව මතු කිරීම.</div>
                    <div class="example-card">3. මෛත්‍රී භාවනාව උපේක්ෂා බ්‍රහ්මවිහාරය වෙත උක්සේ දැමූ විට ඇතිවන නිශ්චල චිත්තස්ථීතිය.</div>
                    <div class="example-card">4. සතිපට්ඨාන භාවනාව මඟින් සුවද දුක්ද උපේක්ෂාවෙන් දකින සන්සුන් තත්වය.</div>
                    <div class="example-card">5. කල්‍යාලාභූත භාවනා ගුරුවරයකුගේ උපදෙස් අනුව "සුවට ඇලීම" අත්හරින අත්දැකීම.</div>
                    <div class="example-card">6. අරූප ධ්‍යානයට පිවිසීමට පෙර අවශ්‍ය සමාධි පදනම සේ මේ මට්ටම රැඳවීම.</div>
                    <div class="example-card">7. විදර්ශනා භාවනාවට පෙර සමාපත්තියක් ලෙස උපේක්ෂා සමඟ ජ්හානය පවත්වාගැනීම.</div>
                    <div class="example-card">8. ප්‍රාඥ මාර්ගවල සමාධිය ප්‍රගුණ කිරීමට සුවට අලූතින් අදාල නොවී උපේක්ෂාවේ සම්මතය.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>රූප කුසල චිත්ත සටහනේ අන්තිම (පස්වැනි) චිත්තය ලෙස දක්වා ඇත.</li>
                        <li>ජ්හානික අංග – උපේක්ෂා • ඒකාග්‍රතා පමණක්; අනෙක් අංග (විතර්ක, විචාර, පීති, සුඛ) වගකීම් අවසන්.</li>
                        <li>අරූප සමාපත්තියට පිවිසීමට පෙර අවශ්‍ය පිරිසිදු සමාධිය මෙයි.</li>
                        <li>විපාක හා ක්‍රියා චිත්තවලද මේම ව්‍යුහයක් පවතින බව අභිධම්මය විග්‍රහ කීවේය.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>විතර්ක → විචාර → පීති → සුඛ → උපේක්ෂා ලෙස අංග අතික්‍රමණයේ අවසාන පියවර.</li>
                        <li>පරම සන්සුන් බව නිසා ආශාවට හෝ ආදරයෙන් අළුත්වැඩියා නොවී; උපේක්ෂා සාරවත්.</li>
                        <li>මම මට්ටමෙන් පසු සමාධි අරූපික ලෝකයේ යාච්ඤා සඳහා පදනම සකස් කරයි.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box neutral">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිඵල</h3>
                        <ul>
                            <li>රූප බ්‍රහ්ම ලෝක උපතට වඩාත් ශක්තිමත් කුසල කර්ම.</li>
                            <li>උපේක්ෂාව පදනම් වන නිසා සංඛාරයන් අත්හර විදර්ශනාට පහසු වේ.</li>
                            <li>සිත් නිරාඛ්‍යානාත්මක සන්සුන් බව තුළ පව් දුරලීමට පදනම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">ප්‍රතිකාර / පවත්වා ගැනීම</h3>
                        <ul>
                            <li>උපේක්ෂාවට ඇළුන නිසා "සඵල තත්ත්වයෙන්" අහංකාර නොවීම.</li>
                            <li>උපේක්ෂාව නිසා සැප මට්ටම අමතක නොවී, තවදුරටත් නිරවද්‍ය දර්ශනය පිළිබඳ විමර්ශනය.</li>
                            <li>ඊළඟට අරූප සමාපත්තියට පියවර – ආකාශානඤ්චායතන ආදී 4 මට්ටම්.</li>
                        </ul>`}},26:{id:26,title:"ආකාසානඤ්චායතන කුසල් සිත",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-sky-200">අරූප ධ්‍යානයට පළමු පියවර</h3>
                        <ul>
                            <li><strong>අරමුණ:</strong> "අසීමිත අවකාශය" – රූප කසීණ පටල විශාල කර, "මෙම පටලයට අසීමිත අවකාශයක් ඇත" යැයි සන්නිවේදනය.</li>
                            <li><strong>උපේක්ෂාව:</strong> සතුට/සුඛ දියවී පරම මැදිහත් බව පමණක් ඉතිරිවීම.</li>
                            <li><strong>ඒකාග්‍රතාව:</strong> එකම අසීමිත අවකාශ අරමුණ මත මනස රඳා සිටීම.</li>
                            <li><strong>රූප සීමාව ඉක්මවීම:</strong> රූප කසීණ පටලය පසුබැස සදාකාලික අවකාශ මනස ගෙන යාම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">සරල උදාහරණය</h3>
                        <p>"සඳුරුව තිබූ කසීණ පටලය දැන් මා වැද නොවෙයි. එය නිරාවර්තනය කර, 'මෙය අග නැති අවකාශයක්' ලෙස සිත ගෙන ගියෙමි. මට උදාසීනයක් පමණක් තවමත් පවතී – කිසිදු විවේගයක් නැතිව අසීමිතත්වයට බැඳී තිබෙන සතුට."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ආකාසානඤ්චායතනය"</h3>
                        <ul>
                            <li>"Ākāsa" = අවකාශය. "Ananta" = අසීමිත. "Āyatana" = අභ්‍යන්තර ප්‍රදේශය.</li>
                            <li>කසීණ පටලය සම්පූර්ණයෙන් සිරස් යැවීමෙන් පසු "අසීමිත අවකාශයක්" මනසට ගෙන ඒම.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අරූපාවචර"</h3>
                        <ul>
                            <li>රූප නොපිළිබඳ; ආයාතවස්තු නැති අභ්‍යන්තර ක්ෂේත්‍ර.</li>
                            <li>අරූප ධ්‍යානයන් – අවකාශ, විඤ්ඤාණ, අකිඤ්චඤ්ඤත්, නේවසඤ්ඤානාසඤ්ඤායතන.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-sky-200">නව අරමුණ</h3>
                        <ul>
                            <li>"මෙම අවකාශයට අග නැත" යන මනසික ප්‍රකාශය සසඳා, එකම අරමුණට ගිලීම.</li>
                            <li>ඔබේ චිත්ත ප්‍රවාහය අවකාශයෙන් එතර වෙමින්, ප්‍රදේශ අසීමිත බවට විවේකීව බලා ගැනීම.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-sky-200">අරූප ධ්‍යානයේ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-sky-200">4</p>
                            <p class="font-bold">අරූපාවචර කුසල් සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">මෙය පළමුවැනි (අසීමිත අවකාශ).</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-sky-200">32</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ජ්හානික අංග – උපේක්ෂා + ඒකාග්‍රතා පමණක්.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-sky-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">අරූප කුසල සිත් 4 – සංඛ්‍යා පද්ධතිය</h4>
                        <div class="grid-4">
                            <div class="badge" style="background: rgba(59, 130, 246, 0.32); color:#f1f5f9; font-weight:700;">1. ආකාසානඤ්චායතන ⭐</div>
                            <div class="badge">2. විඤ්ඤාණාඤ්චායතන</div>
                            <div class="badge">3. අකිඤ්චඤ්ඤායතන</div>
                            <div class="badge">4. නේවසඤ්ඤානාසඤ්ඤායතන</div>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">අරූප ධ්‍යානය #1 – අසීමිත අවකාශය තේරුම් ගෙන ඒම. රූප ධ්‍යානයේ 5 වන සමාධිය පදනමයි.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-sky-200">ත්‍රිහේතුක රූපාතික්‍රාන්ත කුසල – අමෝහ + පඤ්ඤින්ද්‍රිය + ඤාණ සමඟ, උපේක්ෂාව සහ ඒකාග්‍රතාව පමණක් ජ්හානික අංග ලෙස.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-sky-200">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">වේදනා (උපේක්ෂා)</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-sky-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. රූප ධ්‍යානය 5 ලඟා කර හුන් භාවනාකරු කසීණ පටලය පසුබැසදී "මෙම පටලයේ පසුපස අවකාශය අසීමිතයි" යැයි මනසට ගෙන යයි.</div>
                    <div class="example-card">2. අවකාශය දිගු කාලයක් බලා, සංසාර සීමාවක් නැති බව මෙනෙහි කිරීමෙන් උපේක්ෂාව පමණක් ඉතිරිවීම.</div>
                    <div class="example-card">3. මෛත්‍රී භාවනාවේ උපේක්ෂා බ්‍රහ්මවිහාරයෙන් අවකාශය අසීමිත බවට ආවේගය.</div>
                    <div class="example-card">4. ධර්ම අවවාදයට අනුව "අගමික වෙනස්කම් ඉක්මවා අසීමිත අවකාශය මත" සිත තැබීම.</div>
                    <div class="example-card">5. විදර්ශනා භාවනාවකදී අවකාශය නිර්වචනය නොහැකි බව දැනීමෙන් හඳුනාගත් ශුද්ධ විය; සුවට නොඇලී උපේක්ෂාව මතු වීම.</div>
                    <div class="example-card">6. උපේක්ෂාව සවිමත්ව සුරක්ෂිත කිරීම සඳහා නිතරම "අසීමිත අවකාශ" යන අරමුණට පසු පස යොමු කිරීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>අරූප ධ්‍යානය තුළ පළමු කුසල චිත්තය ලෙස දක්වා ඇත – "අකාසානඤ්චායතන සමාපත්තිය".</li>
                        <li>රූප ධ්‍යානයේ පදනමක් නොමැතිව මෙය ඇතිවිය නොහැක; පළමුවෙන් චතුර්ථ/පංචම ධ්‍යානය අවශ්‍යය.</li>
                        <li>වේදනා – උපේක්ෂා. ජවානික ක්‍රියා 7 වලින් අවකාශ අසීමිත බව මතුකිරීම.</li>
                        <li>විපාක/ක්‍රියා චිත්තවලද (අරූප විපාක, අරූප ක්‍රියා) මෙය ඒකාග්‍රතාවමත පවතී.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>කසීණ පටලය අවසන් කර, සිත "පටලයෙන් මතු" වූ අවකාශය දක්වයි.</li>
                        <li>අසීමිත අරමුණක් නිසා මනස තුළිත බව නොපවති – උපේක්ෂාව සමඟ සමාධිය.</li>
                        <li>ඊළඟ පියවර – "විඤ්ඤාණාඤ්චායතනය" (අසීමිත විඤ්ඤාණ) වෙත සූදානම් වෙමු.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-sky-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>අරූප බ්‍රහ්ම ලෝක (අසීමිත අවකාශ බ්‍රහ්ම) උපතට අතිශයින් දායක කුසලයෙන්.</li>
                            <li>සංසාර දෘෂ්ටිය අඩු කිරීම – රූපයේ ඇලීම අඩු වීම.</li>
                            <li>විදර්ශනා භාවනාවට වඩාත් සුදුසු උපේක්ෂාමය පදනම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම සහ අවදානම්</h3>
                        <ul>
                            <li>අසීමිත අවකාශය තුළ "අත්මය" හෝ "අනිච්ච • දුක්ඛ • අනාත්ම" ලෙස වැරදි අර්ථකථනය නොකිරීම.</li>
                            <li>අරූප සමාධියට ඇලී නොවී – එයද අනිච්ච බවින් විමර්ශනය.</li>
                            <li>ඊළඟ පියවර – විඤ්ඤාණාඤ්චායතනයට දොරටුව, නිතරම සමාධිය ශක්තිමත් කළ පසු පමණක් සිදුකිරීම.</li>
                        </ul>`}},27:{id:27,title:"විඤ්ඤාණඤ්චායතන කුසල් සිත",levels:{level1:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="text-xl font-bold mb-4 text-sky-200">අසීමිත විඤ්ඤාණය</h3>\r
                        <ul>\r
                            <li>පළමු අරූප ධ්‍යානයෙන් (අසීමිත අවකාශ) පසු, දැන් එම අවකාශයට වැසුණු විඤ්ඤාණය අසීමිත ලෙස දිගුවයි.</li>\r
                            <li><strong>අරමුණ:</strong> "අසීමිත විඤ්ඤාණයක් ඇත" යන සරල අර්ථය – සිත ඔබේ දැනීමත්, විඤ්ඤාණත් අග නැති බව ලෙස වේ.</li>\r
                            <li><strong>වේදනා:</strong> උපේක්ෂා පමණක් – සතුට/දුක්ක නොවේ.</li>\r
                            <li><strong>ඒකාග්‍රතා:</strong> මෙම අසීමිත විඤ්ඤාණ මත අඛණ්ඩව රඳා සිටීම.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>\r
                        <p>"අසීමිත අවකාශය මත මනස රඳවා තිබෙන අතර, දැන් මට එම අවකාශය තුළ පවතින විඤ්ඤාණය අසීමිත බව අත්විදිමි. මගේ දැනීම කෙතරම් පළලට දියවෙයිදැයි මනස දකින්නේය. කිසිදු සතුටක් නැත, අනේකෝසී උදාසීන බව පමණයි."</p>`,level2:`<div class="grid-2">\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"විඤ්ඤාණඤ්චායතනය"</h3>\r
                        <ul>\r
                            <li>"විඤ්ඤාණ" = දැනීම; "අනන්ත" = අසීමිත; "ආයතන" = අභ්‍යන්තර කලාප.</li>\r
                            <li>අවකාශය අසීමිත බව පසුතැවී – දැන් ඒ තුළ ඇති දැනීමත් අසීමිත යැයි සන්නිවේදනය.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"අරූප ධ්‍යානය #2"</h3>\r
                        <ul>\r
                            <li>අරූප මට්ටමට යන ශ්‍රේණියේ දෙවැන්න.</li>\r
                            <li>අරමුණ අවකාශයෙන් විඤ්ඤාණයට මාරු වී ඇත.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-sky-200">නිවැරදි අරමුණ</h3>\r
                        <ul>\r
                            <li>කසීණ පටල මත "අසීමිත අවකාශය" සඟවූ පසු, එම අවකාශය අසීමිත වුවද, එයත් දැනගන්නා මනස අසීමිත වීම.</li>\r
                            <li>"මේ දැනීමේ අවකාශයට අවසන් නෑ" යැයි අවබෝධ කර ගෙන, අන් කිසිවක් සලකා බැලීම නොකිරීම.</li>\r
                        </ul>`,level3:`<div class="content-box">\r
                    <h3 class="text-2xl font-bold text-center mb-6 text-sky-200">අරූප සමාධි මාලාවේ තැන</h3>\r
                    <div class="grid-3">\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-sky-200">4</p>\r
                            <p class="font-bold">අරූප කුසල සිත්</p>\r
                            <p class="text-sm text-slate-200 mt-2">මෙය දෙවැන්න – අසීමිත විඤ්ඤාණය.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-sky-200">32</p>\r
                            <p class="font-bold">චෛතසික සංයුතිය</p>\r
                            <p class="text-sm text-slate-200 mt-2">ජ්හානික අංග – උපේක්ෂා + ඒකාග්‍රතා පමණක්.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-sky-200">89 / 121</p>\r
                            <p class="font-bold">අභිධම්මයේ සම්පූර්ණ පද්ධතිය</p>\r
                        </div>\r
                    </div>\r
                    <div class="content-box highlight" style="margin-top: 1.6rem;">\r
                        <h4 class="font-bold text-lg mb-4">අරූප කුසල සිත් 4 – සංඛ්‍යා පද්ධතිය</h4>\r
                        <div class="grid-4">\r
                            <div class="badge">1. ආකාසානඤ්චායතන</div>\r
                            <div class="badge" style="background: rgba(16, 185, 129, 0.32); color:#f1f5f9; font-weight:700;">2. විඤ්ඤාණඤ්චායතන ⭐</div>\r
                            <div class="badge">3. අකිඤ්චඤ්ඤායතන</div>\r
                            <div class="badge">4. නේවසඤ්ඤානාසඤ්ඤායතන</div>\r
                        </div>\r
                        <p class="text-sm text-slate-200 mt-3">අරූප ධ්‍යානය #2 – දැනීම/විඤ්ඤාණය අසීමිත බව අත්විඳීම. පසු පියවරට (අකිඤ්චඤ්ඤායතන) යාමට මෙය පදනමයි.</p>`,level4:`<div class="content-box">\r
                    <p class="text-center text-lg font-semibold mb-6 text-sky-200">තත්ත්වය රූපාවචර පංචම ධ්‍යානයට සමානයි – උපේක්ෂා හා ඒකාග්‍රතා ප්‍රමුඛ, ත්‍රිහේතුක චිත්තය.</p>\r
                    <div class="grid-2">\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-sky-200">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="badge-list">\r
                                <span class="badge">ඵස්ස</span>\r
                                <span class="badge">උපේක්ෂා වේදනා</span>\r
                                <span class="badge">සඤ්ඤා</span>\r
                                <span class="badge">චේතනා</span>\r
                                <span class="badge">ඒකාග්‍රතා</span>\r
                                <span class="badge">ජීවිතින්ද්‍රිය</span>\r
                                <span class="badge">මනසිකාර</span>\r
                            </div>\r
                        </div>\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-sky-200">කුසල සාධාරණ 19</h4>\r
                            <div class="grid-3">\r
                                <span class="badge">අලෝභ</span>\r
                                <span class="badge">අදෝස</span>\r
                                <span class="badge">අමෝහ</span>\r
                                <span class="badge">සද්ධා</span>\r
                                <span class="badge">සති</span>\r
                                <span class="badge">හිරි</span>\r
                                <span class="badge">ඔත්තප්ප</span>\r
                                <span class="badge">කාය පසද්ධි</span>\r
                                <span class="badge">චිත්ත පසද්ධි</span>\r
                                <span class="badge">කාය ලහුතා</span>\r
                                <span class="badge">චිත්ත ලහුතා</span>\r
                                <span class="badge">කාය මුදුතා</span>\r
                                <span class="badge">චිත්ත මුදුතා</span>\r
                                <span class="badge">කාය කම්මඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>\r
                                <span class="badge">කාය පාගුඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>\r
                                <span class="badge">කායුජුකතා</span>\r
                                <span class="badge">චිත්තුජුකතා</span>\r
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>\r
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">\r
                    <div class="example-card">1. ආකාසානඤ්චායතන සමාපත්තිය දිගු කාලයක් රඳවාගෙන, "මෙම අවකාශය දැනෙන විඤ්ඤාණය අසීමිතයි" යැයි මනසට ගෙනයයි.</div>\r
                    <div class="example-card">2. භාවනාකරු පළමුවෙන් සේරුම රූප සංකල්ප අවසන් කර තිබුණු නිසා මොහුට අවකාශය පෝෂණය වීමෙන් පසු විඤ්ඤාණය ද විශාල වන අත්දැකීම.</div>\r
                    <div class="example-card">3. සමුද්‍රයක් මෙන් දැනෙන අවකාශය තුළ තනි ජල බුබුලක් මෙන් මොහුගේ දැනීම දීර්ඝ වීම – "මේක අග නැති දැනීමක්" යැයි පෙළඹීම්.</div>\r
                    <div class="example-card">4. අරූප සමාධියට නිරන්තර උත්සාහ දැක්වූ භාවනාකරුගේ චිත්තය, සතුට නොපෙනී උපේක්ෂාවෙන් විඤ්ඤාණය පසුබැස බැලීම.</div>\r
                    <div class="example-card">5. උපේක්ෂා භාවනාව වශයෙන්, "සියලු සත්ත්‍වයන්ගේ අවකාශය ද සදාකාලික විඤ්ඤාණයෙන් යුත්" යැයි හුරුකිරීම.</div>\r
                    <div class="example-card">6. සතිපට්ඨාන වඩන කෙනෙකුට, "මාගේ දැනීමක් අකඩේ පිහිටයි" යැයි නැවත නැවත සලකාබැලීමෙන් උපේක්ඛාව ශක්තිමත් කිරීම.`,level6:`<div class="content-box">\r
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>\r
                    <ul>\r
                        <li>අරූප ධ්‍යානයේ දෙවැන්න ලෙස විස්තර වේ: ආකාසානඤ්චායතනය පසුකර, විඤ්ඤාණඅනන්තය සලස්වයි.</li>\r
                        <li>රූප ධ්‍යානයට ආශ්‍රිතව – චතුර්ථ/පංචම ධ්‍යානය පදනම නැතිනම් මෙය නොපත්වේ.</li>\r
                        <li>වේදනා: උපේක්ෂා – ජවාන ක්‍රියා 7 කට අදාළ වේ.</li>\r
                        <li>විපාක හා ක්‍රියා චිත්තවලද එකම සංයුතිය: අරූප විපාක/ක්‍රියා සිත්.</li>\r
                    </ul>\r
                </div>\r
                <div class="content-box highlight">\r
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>\r
                    <ul>\r
                        <li>අවකාශ මත නිරන්තර ව සිට "දැනීම" මත දෘෂ්ටිය පාලනය.</li>\r
                        <li>උපේක්ෂා – ඒකාග්‍රතා තවදුරටත් පිරිසිදු වෙයි; සතුට/සුවනම් නැත.</li>\r
                        <li>ඊළඟ පියවර: අකිඤ්චඤ්ඤායතනය (කිසිවක් නැති යන සංකල්පය) වෙත සූදානම.</li>\r
                    </ul>`,level7:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-sky-200">ප්‍රතිඵල</h3>\r
                        <ul>\r
                            <li>අසීමිත විඤ්ඤාණ බ්‍රහ්ම ලෝකයට උපදිය හැකි ශක්තිමත් කුසල කර්මයක්.</li>\r
                            <li>දැනීමේ සීමාවක් නැති බව දැනීම නිසා ව්‍යාපාරික ඇලීම් අඩුවේ.</li>\r
                            <li>විදර්ශනා භාවනාවට උපරිම උපේක්ෂා පදනම සකසයි.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවදානම්</h3>\r
                        <ul>\r
                            <li>"මෙම අසීමිත විඤ්ඤාණයම නිරපේක්ෂ සත්‍යයක්" යැයි ක්‍රමවිරහිත දෘෂ්ටියෙන් වැළකීම.</li>\r
                            <li>උපේක්ෂාවට ඇලී නොවී, එයද අනිච්ච/දුක්ඛ/අනාත්ම ලෙස විමර්ශනය.</li>\r
                            <li>ඊළඟ පියවරට (අකිඤ්ඤායතන) යන්නේ සීමා රහිත ප්‍රතිරුපක දැක්මක් පසුගිය පිරිසිදු සමාධිය තුළ පමණි.</li>\r
                        </ul>`}},28:{id:28,title:"අකිඤ්චඤ්ඤායතන කුසල් සිත",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-emerald-200">"කිසිවක් නැත" යන අරමුණ</h3>
                        <ul>
                            <li>අසීමිත විඤ්ඤාණය (කෙරෙහී පෙර පියවර) මත මනස දීප්තිමත් වූ පසු, දැන් එයත් අහෝසි කරනවා: "මෙහි කිසිවක් නැත".</li>
                            <li><strong>උපේක්ෂාව:</strong> සියලු විවේග නසාලා, මනස වෙසෙන අවසාන දර්ශනය.</li>
                            <li><strong>ඒකාග්‍රතා:</strong> "කිසිවක් නැත" යන විචාර රහිත අරමුණ මත අඛණ්ඩතාව.</li>
                            <li><strong>අවුකාශ:</strong> අවකාශ/විඤ්ඤාණය දෙකම අකර්මණීයයි, ඉතිරිවන්නේ "අකිඤ්චං" – කිසිවක් නැති ස්වභාවය.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"අසීමිත විඤ්ඤාණය යැයි සිතාගත් මිනිසුන් මෙන් මම දැන් දැනෙන්නේ එයත් සුන්බුදුයි. එක් මොහොතකින්ම මම 'මෙහි කිසිවක් නැත' යයි සරල අරමුණක් මතම රැඳී සිටිමි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අකිඤ්චඤ්ඤායතනය"</h3>
                        <ul>
                            <li>අ = නැති බව; කිඤ්චි = කිසිවක්; අයතන = අභ්‍යන්තර දොරටුව.</li>
                            <li>"Nothingness" – කිසිවක් නැත යන කල්පිත අරමුණ.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">අරූපයේ තවත් මට්ටම</h3>
                        <ul>
                            <li>අසීමිත විඤ්ඤාණයෙන් පසු, ඒද අතර කිසිවක් නැති බවයි මනස අත්විදින්නේ.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-emerald-200">ඔබේ අභ්‍යන්තර මතකය</h3>
                        <ul>
                            <li>අපූරු අරමුණක් නොව – කෙලෙසක් "නිර්භාවය" උපකල්පනය.</li>
                            <li>"මෙහි කිසිවක් නැත" යන නිරාවද්‍ය සංකල්පය අඛණ්ඩව රඳවා ගැනීම.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-emerald-200">අරූප සමාධි මාලාවේ තැන</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-emerald-200">4</p>
                            <p class="font-bold">අරූප කුසල සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">මෙය තුන්වැන්න – nothingness.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-emerald-200">32</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ජ්හානික අංග – උපේක්ෂා/ඒකාග්‍රතා.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-emerald-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">අරූප කුසල සංඛ්‍යා</h4>
                        <div class="grid-4">
                            <div class="badge">1. ආකාසානඤ්චායතන</div>
                            <div class="badge">2. විඤ්ඤාණඤ්චායතන</div>
                            <div class="badge" style="background: rgba(34, 197, 94, 0.32); color:#f1f5f9; font-weight:700;">3. අකිඤ්චඤ්ඤායතන ⭐</div>
                            <div class="badge">4. නේවසඤ්ඤානාසඤ්ඤායතන</div>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">අරූප ධ්‍යානය #3 – කිසිවක් නැති බව මත මනස රඳින්නට උත්සාහ කිරීම. ඊළඟ පියවර: සීමාවෙන් පසු නේවසඤ්ඤානාසඤ්ඤායතනය.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-emerald-200">අරූප ධ්‍යානය 2/3/4 සියල්ලෙහි චෛතසික සංයුතිය එකම – උපේක්ෂා + ඒකාග්‍රතා සහිත ත්‍රිහේතුක දර්ශනය.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-emerald-200">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">උපේක්ෂා වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-emerald-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. අසීමිත විඤ්ඤාණ සමාපත්තිය තිබෙන කෙනෙකු "මෙම විඤ්ඤාණයද කිසිවක් නොව" යැයි නිරන්තර මෙනෙහි කරයි.</div>
                    <div class="example-card">2. රූප හා විඤ්ඤාණ දෙකම අතහැර, පහසු අවස්ථාවක "කැමැත්තට සුදුසු කිසිවක් නැත" යැයි හුරුකිරීම.</div>
                    <div class="example-card">3. උපේක්ෂා වඩන භාවනාකරු විසින්, සියලු අත්දැකීම්ම අලාකාරයක් නැති බවට පරිවර්තනය.</div>
                    <div class="example-card">4. සතිපට්ඨාන භාවනාවකදී ලෝකය "නිර්භාව" ලෙස දැකීම – රූපයක්, දැනීමක්, අගයක් නැති බව.</div>
                    <div class="example-card">5. භාවනා ගුරුවරයාගේ උපදෙස් අනුව "අසීමිත විඤ්ඤාණය"ට පසු "කිසිවක් නැත" යන අරමුණට මාරු වීම.</div>
                    <div class="example-card">6. දිගු කාලයක් සමාධිය රඳවාගත් පසු ධර්මයේ නිරවද්‍යය දර්ශනය – ලෝකීය සංකල්ප කොතරම් නිශ්සාරද යන්න.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>අරූප ධ්‍යානයේ තුන්වන කුසල චිත්තය.</li>
                        <li>අවකාශ/විඤ්ඤාණයෙහි අසීමිතත්වය පසුකර – "කිසිවක් නැත" යන සංකල්පය නිර්මාණය.</li>
                        <li>වේදනා – උපේක්ෂා. ක්‍රියා/විපාක චිත්තවලද සමාන ව්‍යුහය.</li>
                        <li>රූප ධ්‍යානයෙන් සිත පිරිසිදු නොකර මෙයට නො ලඟා වෙයි.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>
                    <ul>
                        <li>අරමුණ අඩු කිරීම: කසීණ → අවකාශ → විඤ්ඤාණ → nothingness.</li>
                        <li>මෙය අරූප ධ්‍යානයේ අවසාන පෙර පියවර; ඊළඟට "නේවසඤ්ඤානාසඤ්ඤා" (න සැවීම, න අසැවීම).</li>
                        <li>බලවත් උපේක්ෂා/ඒකාග්‍රතා වේ.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-emerald-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>අකිඤ්චඤ්ඤායතන බ්‍රහ්ම ලෝකයට උපත ලබා ගත හැකි ශක්තිමත් කුසල කර්ම.</li>
                            <li>සංකල්ප හා අර්ථ සීමා ඉවතට; එම නිසා විදර්ශනාට සුදුසු උපේක්ෂාමය පදනම.</li>
                            <li>අනිත්‍ය සත්‍යය පැහැදිලි කර ගැනීමට ද්‍රව්‍ය වස්තුරූපයෙන් හැළී සිටීම.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>"කිසිවක් නැත" යන සංකල්පයට අකල්හි අසත්‍ය තේරුම් (උච්ඡේද දෘෂ්ටිය) නොමෙහෙයවීම.</li>
                            <li>අසීමිත nothingness ද නිශ්චල නොවන බව – එය අනිච්ච බවින් විමර්ශනය.</li>
                            <li>නේවසඤ්ඤානාසඤ්ඤායතනයට යාමට සූදානම – වැලි කතාවක් නොවී බොහෝ සමාධිය.</li>
                        </ul>`}},29:{id:29,title:"නේවසංඤ්ඤා නාසඤ්ඤායතන කුසල් සිත",levels:{level1:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="text-xl font-bold mb-4 text-emerald-200">"න සැවීම, න අසැවීම" යන අරමුණ</h3>\r
                        <ul>\r
                            <li>අකිඤ්චඤ්ඤායතනය (කෙරෙහී පෙර පියවර) මත මනස ස්ථාවර වූ පසු, දැන් එයත් ඉක්මවා: "මෙහි සැවීමක් නැත, අසැවීමක් නැත" යන අති සූක්ෂ්ම අරමුණ.</li>\r
                            <li><strong>උපේක්ෂාව:</strong> සියලු විවේග හා සංකල්ප ඉවතට, මනස අති සූක්ෂ්ම අවස්ථාවක.</li>\r
                            <li><strong>ඒකාග්‍රතා:</strong> "නේවසඤ්ඤානාසඤ්ඤා" යන අති සූක්ෂ්ම අරමුණ මත අඛණ්ඩතාව.</li>\r
                            <li><strong>සූක්ෂ්මතාව:</strong> ලෝකීය සමාධියේ අන්තිම මට්ටම – සැවීම/අසැවීම දෙකම නැති බව.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>\r
                        <p>"කිසිවක් නැත යැයි සිතාගත් මිනිසුන් මෙන් මම දැන් දැනෙන්නේ එයත් අධිකයි. එක් මොහොතකින්ම මම 'මෙහි සැවීමක් නැත, අසැවීමක් නැත' යයි අති සූක්ෂ්ම අරමුණක් මතම රැඳී සිටිමි."</p>`,level2:`<div class="grid-2">\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"නේවසඤ්ඤානාසඤ්ඤායතනය"</h3>\r
                        <ul>\r
                            <li>න = නැත; සඤ්ඤා = සැවීම/සංඥාව; නාසඤ්ඤා = අසැවීම/සංඥා නැති බව; අයතන = අභ්‍යන්තර දොරටුව.</li>\r
                            <li>"Neither perception nor non-perception" – සැවීමත් නැත, අසැවීමත් නැත යන අති සූක්ෂ්ම අරමුණ.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">අරූපයේ අන්තිම මට්ටම</h3>\r
                        <ul>\r
                            <li>අකිඤ්චඤ්ඤායතනයෙන් පසු, ඒද අතික්‍රමණය කර – "න සැවීම, න අසැවීම" යන අති සූක්ෂ්ම සංකල්පය නිර්මාණය.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-emerald-200">ඔබේ අභ්‍යන්තර මතකය</h3>\r
                        <ul>\r
                            <li>ලෝකීය සමාධියේ අන්තිම සීමාව – සැවීම/අසැවීම දෙකම ඉක්මවා යන අවස්ථාව.</li>\r
                            <li>"නේවසඤ්ඤානාසඤ්ඤා" යන අති සූක්ෂ්ම සංකල්පය අඛණ්ඩව රඳවා ගැනීම.</li>\r
                        </ul>`,level3:`<div class="content-box">\r
                    <h3 class="text-2xl font-bold text-center mb-6 text-emerald-200">අරූප සමාධි මාලාවේ අන්තිම තැන</h3>\r
                    <div class="grid-3">\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-emerald-200">4</p>\r
                            <p class="font-bold">අරූප කුසල සිත්</p>\r
                            <p class="text-sm text-slate-200 mt-2">මෙය සිව්වැන්න – neither perception nor non-perception.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-emerald-200">30</p>\r
                            <p class="font-bold">චෛතසික සංයුතිය</p>\r
                            <p class="text-sm text-slate-200 mt-2">ජ්හානික අංග – උපේක්ෂා/ඒකාග්‍රතා (සඤ්ඤා අති සූක්ෂ්ම).</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-emerald-200">89 / 121</p>\r
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>\r
                        </div>\r
                    </div>\r
                    <div class="content-box highlight" style="margin-top: 1.6rem;">\r
                        <h4 class="font-bold text-lg mb-4">අරූප කුසල සංඛ්‍යා</h4>\r
                        <div class="grid-4">\r
                            <div class="badge">1. ආකාසානඤ්චායතන</div>\r
                            <div class="badge">2. විඤ්ඤාණඤ්චායතන</div>\r
                            <div class="badge">3. අකිඤ්චඤ්ඤායතන</div>\r
                            <div class="badge" style="background: rgba(34, 197, 94, 0.32); color:#f1f5f9; font-weight:700;">4. නේවසඤ්ඤානාසඤ්ඤායතන ⭐</div>\r
                        </div>\r
                        <p class="text-sm text-slate-200 mt-3">අරූප ධ්‍යානය #4 – ලෝකීය සමාධියේ අන්තිම මට්ටම. සැවීම/අසැවීම දෙකම ඉක්මවා යන අති සූක්ෂ්ම අවස්ථාව. ඊළඟ පියවර: ලෝකූත්තර සමාධිය (මග්ග සමාපත්තිය).</p>`,level4:`<div class="content-box">\r
                    <p class="text-center text-lg font-semibold mb-6 text-emerald-200">නේවසඤ්ඤානාසඤ්ඤායතනයේ චෛතසික සංයුතිය – උපේක්ෂා + ඒකාග්‍රතා සහිත ත්‍රිහේතුක දර්ශනය. සඤ්ඤා අති සූක්ෂ්ම (න සැවීම, න අසැවීම).</p>\r
                    <div class="grid-2">\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-emerald-200">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="badge-list">\r
                                <span class="badge">ඵස්ස</span>\r
                                <span class="badge">උපේක්ෂා වේදනා</span>\r
                                <span class="badge">සඤ්ඤා (අති සූක්ෂ්ම)</span>\r
                                <span class="badge">චේතනා</span>\r
                                <span class="badge">ඒකාග්‍රතා</span>\r
                                <span class="badge">ජීවිතින්ද්‍රිය</span>\r
                                <span class="badge">මනසිකාර</span>\r
                            </div>\r
                        </div>\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-emerald-200">කුසල සාධාරණ 19</h4>\r
                            <div class="grid-3">\r
                                <span class="badge">අලෝභ</span>\r
                                <span class="badge">අදෝස</span>\r
                                <span class="badge">අමෝහ</span>\r
                                <span class="badge">සද්ධා</span>\r
                                <span class="badge">සති</span>\r
                                <span class="badge">හිරි</span>\r
                                <span class="badge">ඔත්තප්ප</span>\r
                                <span class="badge">කාය පසද්ධි</span>\r
                                <span class="badge">චිත්ත පසද්ධි</span>\r
                                <span class="badge">කාය ලහුතා</span>\r
                                <span class="badge">චිත්ත ලහුතා</span>\r
                                <span class="badge">කාය මුදුතා</span>\r
                                <span class="badge">චිත්ත මුදුතා</span>\r
                                <span class="badge">කාය කම්මඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>\r
                                <span class="badge">කාය පාගුඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>\r
                                <span class="badge">කායුජුකතා</span>\r
                                <span class="badge">චිත්තුජුකතා</span>\r
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>\r
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">\r
                    <div class="example-card">1. අකිඤ්චඤ්ඤායතන සමාපත්තිය තිබෙන කෙනෙකු "මෙම 'කිසිවක් නැත' යන සංකල්පයද අධිකයි" යැයි නිරන්තර මෙනෙහි කරයි.</div>\r
                    <div class="example-card">2. ලෝකීය සමාධියේ අන්තිම සීමාවට පැමිණ, "සැවීම/අසැවීම දෙකම ඉක්මවා යන" අවස්ථාව.</div>\r
                    <div class="example-card">3. උපේක්ෂා වඩන භාවනාකරු විසින්, සියලු අත්දැකීම්ම අති සූක්ෂ්ම බවට පරිවර්තනය.</div>\r
                    <div class="example-card">4. සතිපට්ඨාන භාවනාවකදී ලෝකය "න සැවීම, න අසැවීම" ලෙස දැකීම – සංකල්පවල අන්තිම සීමාව.</div>\r
                    <div class="example-card">5. භාවනා ගුරුවරයාගේ උපදෙස් අනුව "අකිඤ්චඤ්ඤායතනය"ට පසු "නේවසඤ්ඤානාසඤ්ඤා" යන අරමුණට මාරු වීම.</div>\r
                    <div class="example-card">6. දිගු කාලයක් සමාධිය රඳවාගත් පසු ධර්මයේ නිරවද්‍යය දර්ශනය – ලෝකීය සංකල්පවල අන්තිම සීමාව.`,level6:`<div class="content-box">\r
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>\r
                    <ul>\r
                        <li>අරූප ධ්‍යානයේ සිව්වන හා අන්තිම කුසල චිත්තය.</li>\r
                        <li>අකිඤ්චඤ්ඤායතනයෙහි "කිසිවක් නැත" යන සංකල්පය පසුකර – "න සැවීම, න අසැවීම" යන අති සූක්ෂ්ම සංකල්පය නිර්මාණය.</li>\r
                        <li>වේදනා – උපේක්ෂා. ක්‍රියා/විපාක චිත්තවලද සමාන ව්‍යුහය.</li>\r
                        <li>රූප ධ්‍යානයෙන් සිත පිරිසිදු නොකර මෙයට නො ලඟා වෙයි.</li>\r
                    </ul>\r
                </div>\r
                <div class="content-box highlight">\r
                    <h3 class="font-bold text-lg mb-4">සමාධි ප්‍රගතිය</h3>\r
                    <ul>\r
                        <li>අරමුණ අඩු කිරීම: කසීණ → අවකාශ → විඤ්ඤාණ → nothingness → neither perception nor non-perception.</li>\r
                        <li>මෙය ලෝකීය සමාධියේ අන්තිම මට්ටම; ඊළඟට ලෝකූත්තර සමාධිය (මග්ග සමාපත්තිය).</li>\r
                        <li>බලවත් උපේක්ෂා/ඒකාග්‍රතා වේ. සඤ්ඤා අති සූක්ෂ්ම (න සැවීම, න අසැවීම).</li>\r
                    </ul>`,level7:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-emerald-200">ප්‍රතිඵල</h3>\r
                        <ul>\r
                            <li>නේවසඤ්ඤානාසඤ්ඤායතන බ්‍රහ්ම ලෝකයට උපත ලබා ගත හැකි ශක්තිමත් කුසල කර්ම.</li>\r
                            <li>ලෝකීය සමාධියේ අන්තිම සීමාව; එම නිසා විදර්ශනාට සුදුසු උපේක්ෂාමය පදනම.</li>\r
                            <li>අනිත්‍ය සත්‍යය පැහැදිලි කර ගැනීමට ද්‍රව්‍ය වස්තුරූපයෙන් හැළී සිටීම.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>\r
                        <ul>\r
                            <li>"න සැවීම, න අසැවීම" යන සංකල්පයට අකල්හි අසත්‍ය තේරුම් (උච්ඡේද දෘෂ්ටිය) නොමෙහෙයවීම.</li>\r
                            <li>අති සූක්ෂ්ම "neither perception nor non-perception" ද නිශ්චල නොවන බව – එය අනිච්ච බවින් විමර්ශනය.</li>\r
                            <li>ලෝකූත්තර සමාධියට (මග්ග සමාපත්තිය) යාමට සූදානම – වැලි කතාවක් නොවී බොහෝ සමාධිය.</li>\r
                        </ul>`}},30:{id:30,title:"ප්‍රථම ධ්‍යාන සෝතාපත්ති මග්ග චිත්තය",levels:{level1:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="text-xl font-bold mb-4 text-purple-200">ලෝකීය සිත්වලින් ලෝකූත්තර සිතට</h3>\r
                        <ul>\r
                            <li>මෙය ලෝකීය සිත්වලින් ලෝකූත්තර සිතට පැමිණීමේ ප්‍රථම මොහොතයි – සෝතාපන්න මග්ගය.</li>\r
                            <li><strong>මග්ග චිත්තය:</strong> නිවන අරමුණ කරගෙන, සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නසන සිත.</li>\r
                            <li><strong>ප්‍රථම ධ්‍යාන:</strong> විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා සහිත සමාධිය.</li>\r
                            <li><strong>ලෝකූත්තර:</strong> ලෝකය ඉක්මවා යන, නිවන දකින, කෙලෙස් නසන සිත.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>\r
                        <p>"විදර්ශනා භාවනාවේදී, අනිත්‍ය, දුඃඛ, අනාත්ම යන ත්‍රිලක්ෂණය පැහැදිලිව දැකීමෙන්, මගේ සිත ලෝකීය සිත්වලින් ඉවත්ව ලෝකූත්තර සිතට පැමිණියේය. එම මොහොතේදී සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසී ගියේය."</p>`,level2:`<div class="grid-2">\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"සෝතාපත්ති මග්ග"</h3>\r
                        <ul>\r
                            <li>සෝත = ගංගාව; අපත්ති = පැමිණීම; මග්ග = මාර්ගය.</li>\r
                            <li>"Stream-entry" – සංසාර ගංගාවට ප්‍රථම වරට පැමිණීමේ මාර්ගය.</li>\r
                            <li>සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නසන මාර්ගය.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"ලෝකූත්තර"</h3>\r
                        <ul>\r
                            <li>ලෝක = ලෝකය; උත්තර = ඉක්මවා යන.</li>\r
                            <li>"Supramundane" – ලෝකීය සිත්වලින් ඉවත්ව, නිවන දකින සිත.</li>\r
                            <li>ලෝකීය සිත්වලට වඩා උසස්, නිවන අරමුණ කරගෙන ඇති සිත.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"මග්ග චිත්තය"</h3>\r
                        <ul>\r
                            <li>මග්ග = මාර්ගය; චිත්ත = සිත.</li>\r
                            <li>කෙලෙස් නසන, නිවන දකින, ඵල චිත්තයට පෙර පැමිණෙන සිත.</li>\r
                            <li>මෙය එක් මොහොතක් පමණක් පවතී – එහි පසුව ඵල චිත්තය පැමිණේ.</li>\r
                        </ul>`,level3:`<div class="content-box">\r
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර සිත්වල තැන</h3>\r
                    <div class="grid-3">\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>\r
                            <p class="font-bold">ලෝකූත්තර සිත්</p>\r
                            <p class="text-sm text-slate-200 mt-2">මෙය ප්‍රථමය – සෝතාපන්න මග්ගය.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>\r
                            <p class="font-bold">චෛතසික සංයුතිය</p>\r
                            <p class="text-sm text-slate-200 mt-2">ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>\r
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>\r
                        </div>\r
                    </div>\r
                    <div class="content-box highlight" style="margin-top: 1.6rem;">\r
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර මග්ග සිත් 8</h4>\r
                        <div class="grid-4">\r
                            <div class="badge" style="background: rgba(168, 85, 247, 0.32); color:#f1f5f9; font-weight:700;">1. සෝතාපන්න (ප්‍රථම) ⭐</div>\r
                            <div class="badge">2. සකදාගාමී</div>\r
                            <div class="badge">3. අනාගාමී</div>\r
                            <div class="badge">4. අරහත්ත</div>\r
                        </div>\r
                        <p class="text-sm text-slate-200 mt-3">සෝතාපන්න මග්ගය – ලෝකූත්තර සිත්වල ප්‍රථමය. සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නසන මාර්ගය. ඊළඟ පියවර: සෝතාපන්න ඵලය.</p>`,level4:`<div class="content-box">\r
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">ලෝකූත්තර මග්ග චිත්තයේ චෛතසික සංයුතිය – ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ චෛතසික.</p>\r
                    <div class="grid-2">\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="badge-list">\r
                                <span class="badge">ඵස්ස</span>\r
                                <span class="badge">සෝමනස්ස වේදනා</span>\r
                                <span class="badge">සඤ්ඤා</span>\r
                                <span class="badge">චේතනා</span>\r
                                <span class="badge">ඒකාග්‍රතා</span>\r
                                <span class="badge">ජීවිතින්ද්‍රිය</span>\r
                                <span class="badge">මනසිකාර</span>\r
                            </div>\r
                        </div>\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>\r
                            <div class="grid-3">\r
                                <span class="badge">අලෝභ</span>\r
                                <span class="badge">අදෝස</span>\r
                                <span class="badge">අමෝහ</span>\r
                                <span class="badge">සද්ධා</span>\r
                                <span class="badge">සති</span>\r
                                <span class="badge">හිරි</span>\r
                                <span class="badge">ඔත්තප්ප</span>\r
                                <span class="badge">කාය පසද්ධි</span>\r
                                <span class="badge">චිත්ත පසද්ධි</span>\r
                                <span class="badge">කාය ලහුතා</span>\r
                                <span class="badge">චිත්ත ලහුතා</span>\r
                                <span class="badge">කාය මුදුතා</span>\r
                                <span class="badge">චිත්ත මුදුතා</span>\r
                                <span class="badge">කාය කම්මඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>\r
                                <span class="badge">කාය පාගුඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>\r
                                <span class="badge">කායුජුකතා</span>\r
                                <span class="badge">චිත්තුජුකතා</span>\r
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>\r
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">\r
                    <div class="example-card">1. විදර්ශනා භාවනාවේදී, අනිත්‍ය, දුඃඛ, අනාත්ම යන ත්‍රිලක්ෂණය පැහැදිලිව දැකීමෙන්, සිත ලෝකීය සිත්වලින් ඉවත්ව ලෝකූත්තර සිතට පැමිණීම.</div>\r
                    <div class="example-card">2. සතිපට්ඨාන භාවනාවේදී, කය, වේදනා, සිත, ධර්ම යන සතර අරමුණු මත විදර්ශනා කරන විට, ත්‍රිලක්ෂණය පැහැදිලිව දැකීම.</div>\r
                    <div class="example-card">3. භාවනා ගුරුවරයාගේ උපදෙස් අනුව, නිවන අරමුණ කරගෙන, ප්‍රථම ධ්‍යාන සමාපත්තිය රඳවාගෙන, විදර්ශනා කරන විට.</div>\r
                    <div class="example-card">4. දිගු කාලයක් විදර්ශනා භාවනාව කරන විට, ත්‍රිලක්ෂණය පැහැදිලිව දැකීමෙන්, සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසී යාම.</div>\r
                    <div class="example-card">5. ධර්මය අසන විට, ත්‍රිලක්ෂණය පැහැදිලිව දැකීමෙන්, සිත ලෝකීය සිත්වලින් ඉවත්ව ලෝකූත්තර සිතට පැමිණීම.</div>\r
                    <div class="example-card">6. ප්‍රථම ධ්‍යාන සමාපත්තිය රඳවාගෙන, නිවන අරමුණ කරගෙන, විදර්ශනා කරන විට, ලෝකූත්තර සිතට පැමිණීම.`,level6:`<div class="content-box">\r
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>\r
                    <ul>\r
                        <li>ලෝකූත්තර මග්ග චිත්තයන්ගේ ප්‍රථමය – සෝතාපන්න මග්ගය.</li>\r
                        <li>නිවන අරමුණ කරගෙන, සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නසන සිත.</li>\r
                        <li>ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ චෛතසික සමඟ ඇතිවේ.</li>\r
                        <li>මෙය එක් මොහොතක් පමණක් පවතී – එහි පසුව සෝතාපන්න ඵල චිත්තය පැමිණේ.</li>\r
                    </ul>\r
                </div>\r
                <div class="content-box highlight">\r
                    <h3 class="font-bold text-lg mb-4">ලෝකීය සිත්වලින් ලෝකූත්තර සිතට</h3>\r
                    <ul>\r
                        <li>ලෝකීය සිත්වලට වඩා උසස් – නිවන අරමුණ කරගෙන ඇති සිත.</li>\r
                        <li>කෙලෙස් නසන ශක්තිය – සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නසන ශක්තිය.</li>\r
                        <li>මග්ග චිත්තයට පසුව ඵල චිත්තය පැමිණේ – නිවන අනුභව කරන සිත.</li>\r
                    </ul>`,level7:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>\r
                        <ul>\r
                            <li>සෝතාපන්න ඵලයට පැමිණීම – සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසී යාම.</li>\r
                            <li>සංසාරයේ අවසානයට පැමිණීමේ ප්‍රථම පියවර – උත්තරීතර මග්ගයන්ට පැමිණීමේ හැකියාව.</li>\r
                            <li>නිවන දැකීම – ලෝකීය සිත්වලට නොහැකි, නිවන අරමුණ කරගෙන ඇති සිත.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>\r
                        <ul>\r
                            <li>මග්ග චිත්තය එක් මොහොතක් පමණක් පවතී – එහි පසුව ඵල චිත්තය පැමිණේ.</li>\r
                            <li>විදර්ශනා භාවනාව නොනවත්වා කරගෙන යාම – උත්තරීතර මග්ගයන්ට පැමිණීමට.</li>\r
                            <li>සෝතාපන්න ඵලය අනුභව කරන විට, නිවන අනුභව කරන සිත පැමිණේ.</li>\r
                        </ul>`}},31:{id:31,title:"ප්‍රථම ධ්‍යාන සෝතාපත්ති ඵල චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-purple-200">නිවන අනුභව කරන සිත</h3>
                        <ul>
                            <li>මග්ග චිත්තයට පසුව, එක් මොහොතකින්ම පැමිණෙන ඵල චිත්තය – නිවන අනුභව කරන සිත.</li>
                            <li><strong>ඵල චිත්තය:</strong> මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන සිත.</li>
                            <li><strong>නිවන අනුභව:</strong> මග්ග චිත්තය විසින් දක්නා ලද නිවන අරමුණ කරගෙන, එය අනුභව කරන සිත.</li>
                            <li><strong>පුනරාවර්තනය:</strong> මග්ග චිත්තය එක් වරක් පමණක් පැමිණේ, නමුත් ඵල චිත්තය නැවත නැවත පැමිණිය හැකිය.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"මග්ග චිත්තය විසින් සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසූ පසු, එක් මොහොතකින්ම ඵල චිත්තය පැමිණියේය. එම ඵල චිත්තය නිවන අරමුණ කරගෙන, නිවන අනුභව කරන සිතයි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"සෝතාපත්ති ඵල"</h3>
                        <ul>
                            <li>සෝතාපත්ති = සෝවාන්; ඵල = ප්‍රතිඵලය.</li>
                            <li>"Stream-entry fruition" – සෝවාන් මග්ගයේ ප්‍රතිඵලය.</li>
                            <li>මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන සිත.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ඵල චිත්තය"</h3>
                        <ul>
                            <li>ඵල = ප්‍රතිඵලය; චිත්ත = සිත.</li>
                            <li>මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන සිත.</li>
                            <li>මග්ග චිත්තයට පසුව පැමිණෙන, නිවන අනුභව කරන සිත.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"මග්ග හා ඵල"</h3>
                        <ul>
                            <li>මග්ග චිත්තය: කෙලෙස් නසන සිත (එක් වරක් පමණක් පැමිණේ).</li>
                            <li>ඵල චිත්තය: නිවන අනුභව කරන සිත (නැවත නැවත පැමිණිය හැකිය).</li>
                            <li>මග්ග චිත්තයට පසුව, එක් මොහොතකින්ම ඵල චිත්තය පැමිණේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර විපාක සිත්වල තැන</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>
                            <p class="font-bold">ලෝකූත්තර සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">මෙය දෙවැන්න – සෝතාපන්න ඵලය.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර ඵල සිත් 8</h4>
                        <div class="grid-4">
                            <div class="badge" style="background: rgba(168, 85, 247, 0.32); color:#f1f5f9; font-weight:700;">1. සෝතාපන්න (ප්‍රථම) ⭐</div>
                            <div class="badge">2. සකදාගාමී</div>
                            <div class="badge">3. අනාගාමී</div>
                            <div class="badge">4. අරහත්ත</div>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">සෝතාපන්න ඵලය – ලෝකූත්තර විපාක සිත්වල ප්‍රථමය. මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන, නිවන අනුභව කරන සිත. මග්ග චිත්තයට පසුව, එක් මොහොතකින්ම පැමිණේ.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">ලෝකූත්තර ඵල චිත්තයේ චෛතසික සංයුතිය – ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ චෛතසික. මග්ග චිත්තයට සමාන ව්‍යුහයක්.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. මග්ග චිත්තය විසින් සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසූ පසු, එක් මොහොතකින්ම ඵල චිත්තය පැමිණීම.</div>
                    <div class="example-card">2. සෝතාපන්නයෙකු විසින්, නිවන අනුභව කිරීමට අභිලාෂයක් ඇති විට, ඵල සමාපත්තියට පැමිණීම.</div>
                    <div class="example-card">3. භාවනා කරන විට, මග්ග චිත්තයට පසුව, ඵල චිත්තය නැවත නැවත පැමිණීම.</div>
                    <div class="example-card">4. සෝතාපන්නයෙකු විසින්, නිවන අනුභව කිරීමට අභිලාෂයක් ඇති විට, ඵල සමාපත්තියට පැමිණීම.</div>
                    <div class="example-card">5. විදර්ශනා භාවනාවේදී, මග්ග චිත්තයට පසුව, ඵල චිත්තය නැවත නැවත පැමිණීම.</div>
                    <div class="example-card">6. සෝතාපන්නයෙකු විසින්, නිවන අනුභව කිරීමට අභිලාෂයක් ඇති විට, ඵල සමාපත්තියට පැමිණීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>ලෝකූත්තර විපාක චිත්තයන්ගේ ප්‍රථමය – සෝතාපන්න ඵලය.</li>
                        <li>මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන සිත.</li>
                        <li>ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ චෛතසික සමඟ ඇතිවේ.</li>
                        <li>මග්ග චිත්තයට පසුව, එක් මොහොතකින්ම පැමිණේ. නැවත නැවත පැමිණිය හැකිය.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">මග්ග හා ඵල</h3>
                    <ul>
                        <li>මග්ග චිත්තය: කෙලෙස් නසන සිත (එක් වරක් පමණක් පැමිණේ).</li>
                        <li>ඵල චිත්තය: නිවන අනුභව කරන සිත (නැවත නැවත පැමිණිය හැකිය).</li>
                        <li>මග්ග චිත්තයට පසුව, එක් මොහොතකින්ම ඵල චිත්තය පැමිණේ.</li>
                        <li>ඵල සමාපත්තිය: ඵල චිත්තය නැවත නැවත පැමිණීමට අභිලාෂයක් ඇති විට.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>නිවන අනුභව කිරීම – මග්ග චිත්තය විසින් දක්නා ලද නිවන අරමුණ කරගෙන, එය අනුභව කරන සිත.</li>
                            <li>සෝතාපන්න ඵලය අනුභව කිරීම – සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනයන් නැසූ ප්‍රතිඵලය අනුභව කරන සිත.</li>
                            <li>ඵල සමාපත්තියට පැමිණීම – ඵල චිත්තය නැවත නැවත පැමිණීමට අභිලාෂයක් ඇති විට.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>ඵල චිත්තය නැවත නැවත පැමිණිය හැකිය – ඵල සමාපත්තියට පැමිණීමට අභිලාෂයක් ඇති විට.</li>
                            <li>විදර්ශනා භාවනාව නොනවත්වා කරගෙන යාම – උත්තරීතර මග්ගයන්ට පැමිණීමට.</li>
                            <li>ඵල සමාපත්තිය අනුභව කරන විට, නිවන අනුභව කරන සිත පැමිණේ.</li>
                        </ul>`}},32:{id:32,title:"ප්‍රථම ධ්‍යාන සකදාගාමී මග්ග චිත්තය",levels:{level1:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="text-xl font-bold mb-4 text-purple-200">සෝතාපන්නයෙන් සකදාගාමී වෙත පියවර</h3>\r
                        <ul>\r
                            <li><strong>සකදාගාමී මග්ගය:</strong> ලෝකූත්තර මග්ග සිතුවල දෙවැනි බව; සෝතාපන්න මග්ගයෙන් පසු උඩට යන මංචු.</li>\r
                            <li><strong>එක් මොහොතක් පමණයි:</strong> මග්ග චිත්තය සෑම අවස්ථාවකම එක වරක් පමණක් පැනනගී.</li>\r
                            <li><strong>අරමුණ:</strong> රූප රාගය සහ පටිඝය (කේලබල) තදින් දිරවා දුර්වල කිරීම.</li>\r
                            <li><strong>නිවන අරමුණ:</strong> පළමුවර සෝතාපත්ති මග්ගයේ දක්න ලද නිවන මත නැවුම් දර්ශනයක් කරමින්, වැඩි හේතුක සමාධියෙන් කෙලෙස් හෙළනු ලබයි.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>\r
                        <p>"සෝතාපන්න පිරිසෙහි අධිෂ්ඨාන කළ භාවනාකරුවෙකු, ප්‍රථම ධ්‍යාන සමාධිය පැවැත්වගෙන විදර්ශනා ප්‍රායෝගික ක්‍රියාවක් කරයි. සත්‍යතයන්ට ගායනය කරමින් කෙලෙස් ව්‍යාපාරය දකිති. එම අවසාන මොහොතේ, සකදාගාමී මග්ග චිත්තය එක්තා වූයේ රූපරාගය සහ පටිඝය දැඩිව දිරවා දුර්වල කිරීම සඳහාය."</p>`,level2:`<div class="grid-2">\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"සකදාගාමී"</h3>\r
                        <ul>\r
                            <li>සකෘද් + ආගාමී = "එක් වරක්" + "ආගමනය" → එක් වරක් පමණක් මෙ ලොවට නැවත පැමිණෙන කීවිය.</li>\r
                            <li>මෙම මග්ග චිත්තය නිසා, රූපරාගය සහ පටිඝය දැඩිව දසනාතුර වෙයි; එමනිසා තවත් වරක් පමණක් සංසාරෙහි ගමනාගමනය සිදුවේ.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"මග්ග"</h3>\r
                        <ul>\r
                            <li>මග්ග = මාර්ග; කෙලෙස් නසන මඟ.</li>\r
                            <li>ලෝකූත්තර මග්ග පිහිටයි: සම්මා ධර්ම විපස්සනා සත්ත්වයට නිවන දැක්වීම.</li>\r
                            <li>තල්මූලික අයුරු: මෙය කෙලෙස් හෙළන උලෙලක්; අදහස් කිරීමට නොව, ක්‍රියාත්මක කරන සච්චිකරණය.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යාන"</h3>\r
                        <ul>\r
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා – ධ්‍යාන අංග 5 හරහා සමාධිය.</li>\r
                            <li>ලෝකූත්තර මග්ගයට රූපාවචර මට්ටමේ ශක්තියක් ලබාදෙයි.</li>\r
                            <li>සමථ පදවීමෙන් උපරිම ස්ථානයක් ලබා දෙයි.</li>\r
                        </ul>`,level3:`<div class="content-box">\r
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර මග්ග සිත් 8 තුළ තැන</h3>\r
                    <div class="grid-3">\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>\r
                            <p class="font-bold">ලෝකූත්තර සිත්වල ගණන</p>\r
                            <p class="text-sm text-slate-200 mt-2">මග්ග 8 • ඵල 8 (සම්භාර සහ විපාක ඇතුළු).</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>\r
                            <p class="font-bold">චෛතසික සංයුතිය</p>\r
                            <p class="text-sm text-slate-200 mt-2">ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර මග්ගංග.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>\r
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>\r
                        </div>\r
                    </div>\r
                    <div class="content-box highlight" style="margin-top: 1.6rem;">\r
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර මග්ග සිත් 8</h4>\r
                        <div class="grid-4">\r
                            <div class="badge">1. සෝතාපත්ති මග්ගය</div>\r
                            <div class="badge" style="background: rgba(168, 85, 247, 0.32); color:#0f172a; font-weight:700;">2. සකදාගාමී මග්ගය ⭐</div>\r
                            <div class="badge">3. අනාගාමී මග්ගය</div>\r
                            <div class="badge">4. අරහත්ත මග්ගය</div>\r
                        </div>\r
                        <p class="text-sm text-slate-200 mt-3">සකදාගාමී මග්ගය නිසා, කාමරාගය සහ පටිඝය දැඩිව දිරවී දුර්වල වේ. ස්වල්ප සංසාර පාරිභෝගික වශයෙන් තව වරක් පමණක් මෙ ලොවට නැවත පැමිණෙන තත්වය නිර්ණය කරයි.</p>`,level4:`<div class="content-box">\r
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">සමඟ සකදාගාමී මග්ගයට, මග්ගංග 8 සහ ප්‍රථම ධ්‍යාන අංග 5 සමඟින් පිරිනැමුණු ලෝකූත්තර චෛතසික ව්‍යුහයක්.</p>\r
                    <div class="grid-2">\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="badge-list">\r
                                <span class="badge">ඵස්ස</span>\r
                                <span class="badge">සෝමනස්ස වේදනා</span>\r
                                <span class="badge">සඤ්ඤා</span>\r
                                <span class="badge">චේතනා</span>\r
                                <span class="badge">ඒකාග්‍රතා</span>\r
                                <span class="badge">ජීවිතින්ද්‍රිය</span>\r
                                <span class="badge">මනසිකාර</span>\r
                            </div>\r
                        </div>\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>\r
                            <div class="grid-3">\r
                                <span class="badge">අලෝභ</span>\r
                                <span class="badge">අදෝස</span>\r
                                <span class="badge">අමෝහ</span>\r
                                <span class="badge">සද්ධා</span>\r
                                <span class="badge">සති</span>\r
                                <span class="badge">හිරි</span>\r
                                <span class="badge">ඔත්තප්ප</span>\r
                                <span class="badge">කාය පසද්ධි</span>\r
                                <span class="badge">චිත්ත පසද්ධි</span>\r
                                <span class="badge">කාය ලහුතා</span>\r
                                <span class="badge">චිත්ත ලහුතා</span>\r
                                <span class="badge">කාය මුදුතා</span>\r
                                <span class="badge">චිත්ත මුදුතා</span>\r
                                <span class="badge">කාය කම්මඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>\r
                                <span class="badge">කාය පාගුඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>\r
                                <span class="badge">කායුජුකතා</span>\r
                                <span class="badge">චිත්තුජුකතා</span>\r
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>\r
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">\r
                    <div class="example-card">1. සෝතාපන්න භාවනාකරුවෙකු, ප්‍රථම ධ්‍යාන සමාධිය ගැඹුරු කර ගනිමින් පස් යෝගාවචර කලපරම්පරා යෙදි තුළ විදර්ශනා අභ්‍යසය තවදුරටත් ඉහළ දියත් කිරීම.</div>\r
                    <div class="example-card">2. සත්‍යත්‍රය සකස් කර, නාම රූපය වෙන්කිරීමෙන් පසුව උපපාදව ග්‍රහණය කරන විට උදාවන පටිච්ච සමුප්පාද දර්ශනයෙන් රූපරාගය සහ පටිඝය කම්පනය.</div>\r
                    <div class="example-card">3. කාමඤ්චා වස්තු වෙත අළුත් අයුරුින් තබන සම්බන්ධතාවය දුර්වල වීම; රූපවස්තු මත සෙමින් ප්‍රීතිය පහව යාම.</div>\r
                    <div class="example-card">4. පටිඝය නිරොධය: තර්ජනයකට හේතු වූ දරුණු සිද්ධියක් සිහිකරද්දී, කේළම නගින උණුසුම නැතිව සන්සුන් බවක් පැන නගීම.</div>\r
                    <div class="example-card">5. සකදාගාමී මග්ග කාලයේ ඉතුරු වූ කුසල මුල් නිසා, කාය විවරණය හා ශීලය ඉතා දෘඪව පැවැත්වීම, මෙන්ම සමාධි පදවීම වායාමකින් ඉහළට ගනිම.</div>\r
                    <div class="example-card">6. අනුස්සති භාවනාවක් (බුද්ධානුස්සති, ධම්මානුස්සති) ලබාගත් නිවන අරමුණ සිහිපත් කරමින් මාර්ග අවස්ථාවට පසුබැසීම.`,level6:`<div class="content-box">\r
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>\r
                    <ul>\r
                        <li>සකදාගාමී මග්ග චිත්තය ලෝකූත්තර මග්ග සිත්තවල දෙවැනි තැන; සෝතාපත්ති මග්ගය හා ඵලය පසුබසී ඇත.</li>\r
                        <li>ප්‍රථම ධ්‍යාන අංග හරහා සමාධි ශක්තිය ඉතා පිරිහී නොමිලේ. එය විදර්ශනා ප්‍රඥාවට පදනමක් වේ.</li>\r
                        <li>කැමැත්ත සහ ද්වෙෂය දැඩියෙන් දිරවීම නිසා, සත්ත්වයා සෑම විටම සන්සුන්, සාර්ථක වීමේ දුර්වල තත්වයක් පවත්වයි.</li>\r
                        <li>කෙලෙස් නසන නියමිත පිළිවෙල: රූපරාගය හා පටිඝය දුර්වල කිරීම → සකදාගාමී දශාවට සුදානම.</li>\r
                    </ul>\r
                </div>\r
                <div class="content-box highlight">\r
                    <h3 class="font-bold text-lg mb-4">මග්ග චිත්තයක ප්‍රායෝගික ලක්ෂණ</h3>\r
                    <ul>\r
                        <li>ඵලයට පූර්වගාමී සිත; ඒ නිසා එක් වරක් පමණක් පැනනගී.</li>\r
                        <li>ආයුෂය දිගු කලාතුරකින් ද අනුස්සරණය කිරීමෙන් ඵල සමාපත්තියෙන් පාදක වේ.</li>\r
                        <li>සෝතාපන්න සිතට වඩා සම්මා වායාමයෙන් හා සම්මා සමාධියෙන් ජ්‍යාතික ශක්තිය වැඩියෙන් පවතී.</li>\r
                        <li>ඉතිරි සංයෝජනන් අවසන් කිරීමට අනාගාමී මග්ගයට යන්න අවශ්‍ය බුද්ධිමය සහ භාවනාමය පදනම මෙයින් සකසයි.</li>\r
                    </ul>`,level7:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>\r
                        <ul>\r
                            <li>කාමරාගය හා පටිඝය දැඩිව දිරවා දුර්වල කිරීම; එමනිසා ඇතිවන්නේ සකදාගාමී සත්ත්වත්වය.</li>\r
                            <li>සංසාරයට එක් වරක් පමණක් නැවත පැමිණීමක් බවේ විස්වාසය, විදර්ශනා දැඩිවිම.</li>\r
                            <li>සමහර පෘෂ්ඨ පුරුෂයාගේ බුද්ධි රසයක්, විදර්ශනා භාවනාවට වැඩි කැමැත්ත.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>\r
                        <ul>\r
                            <li>අනාගාමී මග්ගයට යාමට, කාමරාගය හුදෙක් දුර්වල කිරීමෙන් මට්ටම් නැවත ඉහළට ගෙන යායුතුය.</li>\r
                            <li>සෝතාපන්න වියදීම, ශීල ව්‍යාප්ති, විදර්ශනා නිරන්තර කටයුතු ලෙස පවත්වා ගැනීම.</li>\r
                            <li>සමාධි පදවීම (ප්‍රථම ධ්‍යාන) නිසි ලෙස ව්‍යාප්ති කර ගනිමින් වැඩි ධ්‍යාන මට්ටම් වෙත යාම.</li>\r
                        </ul>`}},33:{id:33,title:"ප්‍රථම ධ්‍යාන සකදාගාමී ඵල චිත්තය",levels:{level1:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="text-xl font-bold mb-4 text-purple-200">සකදාගාමී මග්ගයෙන් පසු ඇතිවන නිවන අනුභවය</h3>\r
                        <ul>\r
                            <li><strong>ඵල චිත්තය:</strong> සකදාගාමී මග්ග චිත්තයට පසු, එක් මොහොතකින්ම නිවන අරමුණ කරගෙන නිවන අනුභව කරන සිත.</li>\r
                            <li><strong>අරමුණ:</strong> මග්ගයෙන් දිරවූ කාමරාගය හා පටිඝය නිවා හරින සුළු ශේෂතාව අවසන් කරමින් නිවන අනුභවය දිගටම පැවැත්වීම.</li>\r
                            <li><strong>නිති අනුභවය:</strong> ඵල සමාපත්තිය ප්‍රායෝගික කිරීමෙන්, මෙම ඵල චිත්තය නැවත නැවත ඇති කර නිවන අනුභවය දිගටම පවත්වා ගනී.</li>\r
                            <li><strong>සකදාගාමී අත්දැකීම්:</strong> කාම වස්තුන් පිළිබඳ උණුසුම බොහෝ විට අඩු වී, කේලබලය බොහෝ තරම් සන්සුන් බව.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>\r
                        <p>"සකදාගාමී මග්ගය සිදුවූ සෙකත් භාවනාකරුවෙකු විශේෂ ඵල සමාපත්තියට පසුබැසීද්දී, ස්වල්ප මොහොතකින්ම සකදාගාමී ඵල චිත්තය පෙති කොට නිවන අනුභවය සිහිපත් කරයි. එහිදී කාමරාගය සහ පටිඝය පේන වශයෙන්ම දුර්වල බව හඳුනාගත හැකි වේ."</p>`,level2:`<div class="grid-2">\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"සකදාගාමී"</h3>\r
                        <ul>\r
                            <li>සකෘද් + ආගාමී = එක් වරක් + ආගමනය.</li>\r
                            <li>සකදාගාමී සත්වයාගේ ඵලය ලෙස, සංසාරයට තවත් එක් වරක් පමණක් පැමිණීමට හේතු වන අර්ථය.</li>\r
                            <li>මග්ගයෙන් දිරවූ කාමරාගය හා පටිඝය නිසා, නැවත පැමිණීම පමණක් ඉතිරි වේ.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box highlight">\r
                        <h3 class="font-bold text-lg mb-3">"ඵල"</h3>\r
                        <ul>\r
                            <li>ඵල = ප්‍රතිඵලය; මග්ගෙන් ලැබෙන නිවන අනුභවය.</li>\r
                            <li>මග්ග චිත්තය විසින් නැසූ කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන සිත.</li>\r
                            <li>තවත් වරක් පමණක් ඇතිවීමට සකදාගාමී සත්ත්වත්වයය.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යාන"</h3>\r
                        <ul>\r
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා – සකදාගාමී ඵලයට පදනම් වන ධ්‍යාන ශක්තිය.</li>\r
                            <li>සමථ සමාධියෙන් උපරිම පසුබැසීමක් තුළින් නිවන අනුභවය තහවුරු කරයි.</li>\r
                            <li>ඵල සමාපත්තිය විට, ఇదే ධ්‍යාන ශක්තිය නැවත ඉක්මන් ලෙස සක්‍රීය වෙයි.</li>\r
                        </ul>`,level3:`<div class="content-box">\r
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර විපාක සිත්වල තැන</h3>\r
                    <div class="grid-3">\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>\r
                            <p class="font-bold">ලෝකූත්තර සිත්</p>\r
                            <p class="text-sm text-slate-200 mt-2">මග්ග 8 • ඵල 8: මෙය දෙවැනි ඵල සිත.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>\r
                            <p class="font-bold">චෛතසික සංයුතිය</p>\r
                            <p class="text-sm text-slate-200 mt-2">ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර විශේෂ චෛතසික.</p>\r
                        </div>\r
                        <div class="content-box">\r
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>\r
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>\r
                        </div>\r
                    </div>\r
                    <div class="content-box highlight" style="margin-top: 1.6rem;">\r
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර ඵල සිත් 8</h4>\r
                        <div class="grid-4">\r
                            <div class="badge">1. සෝතාපත්ති ඵලය</div>\r
                            <div class="badge" style="background: rgba(168, 85, 247, 0.32); color:#0f172a; font-weight:700;">2. සකදාගාමී ඵලය ⭐</div>\r
                            <div class="badge">3. අනාගාමී ඵලය</div>\r
                            <div class="badge">4. අරහත්ත ඵලය</div>\r
                        </div>\r
                        <p class="text-sm text-slate-200 mt-3">සකදාගාමී ඵලය – කාමරාගය හා පටිඝය දුර්වල කිරීමේ ප්‍රතිඵලය. සකදාගාමී මග්ගයෙන් පසු නිරන්තරයෙන් පවත්නා නිවන අත්දැකීම.</p>`,level4:`<div class="content-box">\r
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">ලෝකූත්තර විපාක චිත්තයක් ලෙස, මග්ග චිත්තයට සමාන චෛතසික සංයුතියක් (36) යොදාගෙන නිවන අනුභවය සිදුවේ.</p>\r
                    <div class="grid-2">\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බ චිත්ත සාධාරණ 7</h4>\r
                            <div class="badge-list">\r
                                <span class="badge">ඵස්ස</span>\r
                                <span class="badge">සෝමනස්ස වේදනා</span>\r
                                <span class="badge">සඤ්ඤා</span>\r
                                <span class="badge">චේතනා</span>\r
                                <span class="badge">ඒකාග්‍රතා</span>\r
                                <span class="badge">ජීවිතින්ද්‍රිය</span>\r
                                <span class="badge">මනසිකාර</span>\r
                            </div>\r
                        </div>\r
                        <div class="content-box">\r
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>\r
                            <div class="grid-3">\r
                                <span class="badge">අලෝභ</span>\r
                                <span class="badge">අදෝස</span>\r
                                <span class="badge">අමෝහ</span>\r
                                <span class="badge">සද්ධා</span>\r
                                <span class="badge">සති</span>\r
                                <span class="badge">හිරි</span>\r
                                <span class="badge">ඔත්තප්ප</span>\r
                                <span class="badge">කාය පසද්ධි</span>\r
                                <span class="badge">චිත්ත පසද්ධි</span>\r
                                <span class="badge">කාය ලහුතා</span>\r
                                <span class="badge">චිත්ත ලහුතා</span>\r
                                <span class="badge">කාය මුදුතා</span>\r
                                <span class="badge">චිත්ත මුදුතා</span>\r
                                <span class="badge">කාය කම්මඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>\r
                                <span class="badge">කාය පාගුඤ්ඤතා</span>\r
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>\r
                                <span class="badge">කායුජුකතා</span>\r
                                <span class="badge">චිත්තුජුකතා</span>\r
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>\r
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">\r
                    <div class="example-card">1. සකදාගාමී මග්ගය උත්පාදනය වූ පසු, එක් මොහොතකින්ම සකදාගාමී ඵල චිත්තය පැන නැඟී නිවන අනුභවය කිරීමට.</div>\r
                    <div class="example-card">2. ඵල සමාපත්තියට පසුබැසීමේදීද, පසුගිය මග්ග අත්දැකීම් මත පදනම්ව ලැබෙන නිවන අනුභවය වේ.</div>\r
                    <div class="example-card">3. කාම වස්තුන්ගෙන් වරින් වර ඇද හැරීමෙන් පසු, නිවන අනුභවය මත ගැඹුරු අවධානයක් කෙරෙන විට, ඵල චිත්තය ඔලුවේ දැනෙන සන්සුන් බව.</div>\r
                    <div class="example-card">4. දිරවූ පටිඝ ශේෂයන් ඉතිරි වුවද, කාම විෂයන්ට පේශාචික නැතැයි සිතමින් සන්සුන් වෙමින් ඉදිරියට යාම.</div>\r
                    <div class="example-card">5. බුද්ධානුස්සති හෝ නිවනනුස්සති භාවනාවකදී, පසුගිය මග්ග අත්දැකීම් මත පදනම්ව ලැබෙන නිවන අනුභවය වේ.</div>\r
                    <div class="example-card">6. සංඝ සභාවක අඥානයක් හෙතුවෙන් නැවත නැවත ඵල සමාපත්තියට පසුබැසීම, සකදාගාමීවරයාගේ සන්සුන් භාවය වර්ධනය.`,level6:`<div class="content-box">\r
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>\r
                    <ul>\r
                        <li>සකදාගාමී ඵල චිත්තය, ලෝකූත්තර විපාක චිත්ත ද්විතිීය තැන; රූපරාගය හා පටිඝය දිරවීමේ ප්‍රතිඵලය.</li>\r
                        <li>මග්ග චිත්තය වැනි චෛතසික සංයුතියක් ඇති නමුත්, මෙහිදී ක්‍රියා කෙරෙන්නේ නිවන අනුභවයට.</li>\r
                        <li>කෙලෙස් නිරෝධය – තවදුරටත් කාමරාගය හා පටිඝය සම්පූර්ණ නාශයට පදනම තබයි; ඉදිරියට අනාගාමී මග්ගය සඳහා මඟ සකසයි.</li>\r
                        <li>ඵල සමාපත්තිය: සකදාගාමීවරයාට අවශ්‍ය විට දිගටම නිවන අනුභවය සහ පිරිසිදු සමාධිය රැස් කිරීමට අවස්ථාව.</li>\r
                    </ul>\r
                </div>\r
                <div class="content-box highlight">\r
                    <h3 class="font-bold text-lg mb-4">ප්‍රායෝගික විග්‍රහය</h3>\r
                    <ul>\r
                        <li>ඵල චිත්තය නැවත නැවත පැමිණිය හැකි අතර, ඒ සඳහා ඵල සමාපත්තිය ප්‍රායෝගික වශයෙන් භාවිතා කරයි.</li>\r
                        <li>සෝතාපත්ති ඵලය හෝ අනාගාමී ඵලය පසුබැසීමේදීද, පසුගිය මග්ග අත්දැකීම් මත පදනම්ව ලැබෙන නිවන අනුභවය වේ.</li>\r
                        <li>ඵල අනුභවය වැඩි වීමත් සමඟ, කාම වස්තුන් පිළිබඳ ආකර්ෂණය තව තව අඩුවෙයි.</li>\r
                        <li>ඵල චිත්තයෙන් පසු, භාවනාව තවදුරටත් ඉහළට ගෙන යාමෙන් අනාගාමී මග්ගයට එළඹීම පහසු වේ.</li>\r
                    </ul>`,level7:`<div class="grid-2">\r
                    <div class="content-box">\r
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>\r
                        <ul>\r
                            <li>නිවන අනුභවය වැඩි වීම; සකදාගාමී මග්ගයෙන් දිරවූ කාමරාගය හා පටිඝය තව තව හීන වෙයි.</li>\r
                            <li>සංසාරයට තවත් එක් වරක් පමණක් නැවත පැමිණීමේ තීරණය පැහැදිලි වීම.</li>\r
                            <li>සන්සුන්, සීමිත රූපරාග පිළිබඳ සමාධානකාරී අභිලාෂයක්.</li>\r
                        </ul>\r
                    </div>\r
                    <div class="content-box warning">\r
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>\r
                        <ul>\r
                            <li>ඵල සමාපත්තිය නිරන්තරයෙන් භාවිතා කර නිවන අනුභවය ශක්තිමත් කර ගැනීම.</li>\r
                            <li>අනාගාමී මග්ගයට සූදානම් වීම සඳහා, තවදුරටත් විදර්ශනා භාවනාව ඉහළට ගෙන යාම.</li>\r
                            <li>කාම සිත් පැමිණෙන අවස්ථා සටහන් කර, සීමිත ශේෂයන් නිරන්තරයෙන් විශ්ලේෂණය කිරීම.</li>\r
                        </ul>`}},34:{id:34,title:"ප්‍රථම ධ්‍යාන අනාගාමි මග්ග චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-purple-200">කාම රාග පටිඝ සම්පූර්ණ නිරෝධය</h3>
                        <ul>
                            <li><strong>අනාගාමි මග්ගය:</strong> ලෝකූත්තර මග්ග සිතුවල තුන්වැනි පියවර; කාම රාගය සහ පටිඝය සම්පූර්ණයෙන් නසී.</li>
                            <li><strong>මෙ ලෝවට නැවත නොආපසු යාම:</strong> කාම රාගයත්, පටිඝයත් නැතිවීම නිසා තවත් කාම භවයක ජනනයක් නොවෙයි.</li>
                            <li><strong>එක් මොහොතක් පමණයි:</strong> සියලු මග්ග චිත්ත මෙන් මෙයත් එක් වරක් පමණක් පැනනගී.</li>
                            <li><strong>නිවන අරමුණ:</strong> පූර්ව මග්ගයන්ගේ නිවන දර්ශනය මත, මෙම මග්ගය නිවන අනුභවය මගින් කාම ආශ්‍රිත කෙලෙස් සම්පූර්ණයෙන් කපා හැරේ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"සකදාගාමී භාවනාකරුවෙකු නිවන අනුභවය මත ඵල සමාපත්තියෙන් නැවත පසුබැසි, කාම වස්තුන් පිළිබඳ ඉතිරි සැලැස්ම සටහන් කරයි. විදර්ශනා අවධානයේදී නාම-රූප පරීක්‍ෂණයෙන් අනාගාමි මග්ග චිත්තය එක් මොහොතකින් පැනනගී කාමරාගය සහ පටිඝය සම්පූර්ණයෙන්ම නසයි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අනාගාමි"</h3>
                        <ul>
                            <li>අ + ආගාමි = නැවත නොආගමනය (කාම ලෝකට).</li>
                            <li>කාම රාගය හා පටිඝය සම්පූර්ණයෙන් නසී → කාම භවයට නැවත හෝ අවලම්බී නොවයි.</li>
                            <li>බ්‍රහ්ම ලෝකට පමණක් පසුව සිදුවන ප්‍රතිසංඛ්‍යානය.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"මග්ග"</h3>
                        <ul>
                            <li>මග්ග = මාර්ගය; කෙලෙස් නසන සිත.</li>
                            <li>ලෝකූත්තරයි – නිවනට පාර පෙන්වයි.</li>
                            <li>අනාගාමී මග්ගය – අයුෂ්සම්පත්තියෙන් නිවන සත්‍යය දකිමින් කාම රාගය හා පටිඝය නසන සිත.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යාන"</h3>
                        <ul>
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා – ධ්‍යාන අංග 5.</li>
                            <li>අනාගාමී මග්ගයටත්, බුහුමැලි සමාධියක් ලෙස ශක්තිය ලබාදෙයි.</li>
                            <li>ධ්‍යාන ශක්තිය නිසා ගැඹුරු විදර්ශනා අවබෝධයක් මතු වේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර මග්ග සිත්වල තැන</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>
                            <p class="font-bold">ලෝකූත්තර සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">මග්ග 8 • ඵල 8. මෙය තුන්වැනි මග්ගය.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ප්‍රථම ධ්‍යාන සාධාරණ + ලෝකූත්තර මග්ගංග.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර මග්ග සිත් 8</h4>
                        <div class="grid-4">
                            <div class="badge">1. සෝතාපත්ති මග්ගය</div>
                            <div class="badge">2. සකදාගාමී මග්ගය</div>
                            <div class="badge" style="background: rgba(168, 85, 247, 0.32); color:#0f172a; font-weight:700;">3. අනාගාමි මග්ගය ⭐</div>
                            <div class="badge">4. අරහත්ත මග්ගය</div>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">අනාගාමි මග්ගය – කාමරාගය සහ පටිඝය සම්පූර්ණයෙන් නසන ලෝකූත්තර මග්ගය. මෙයින් පසුව කුමන ලෝකයටත් නැවත වීමේ අවස්ථාව ඇති කරන්නේ රූපාවචර හෝ අරූපාවචර භවයන්ට පමණි.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">අනාගාමි මග්ගය, පූර්ව මග්ගයන්ට සමාන චෛතසික ව්‍යුහයක් භාවිතා කරයි. නමුත් අරමුණ – කාම ආශාව සම්පූර්ණයෙන් නසන එකම මග්ගය.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බ චිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. සකදාගාමීවෙකු, කාම රාගය පිළිබඳ ඉතිරි සලසුණු අවධානයක් සැල පිළිබඳ පරීක්ෂණයට භාවිතා කර, නිවන අරමුණේදී අනාගාමි මග්ගයට එළඹීම.</div>
                    <div class="example-card">2. නොමිලඳ පටිඝය ක්‍රියාත්මක වන අවස්ථාවක් සොයාගෙන, උදාවන දෙස බලාපොරොත්තුවෙන් අනුව, ඒ සථි සම්පජඤ්ඤයෙන් දකිමින් නසන මග්ගය.</div>
                    <div class="example-card">3. කාම සන්දර්භයන්ගෙන් සංසාරික සෞඛ්‍ය අත්දැකීමෙන් හුදකලා සමාධිය තුළ සත්‍යතයන්ට ගැඹුරුව යොමු වී අනාගාමි මග්ගය.</div>
                    <div class="example-card">4. නිවන අත්දැකීම නැවත නැවත සිහිකරමින් ඵල සමාපත්තිය පුහුණුකර අනාගාමි මග්ගයට අවශ්‍ය සමාධි ශක්තිය ඉහළට ගෙන යාම.</div>
                    <div class="example-card">5. කාම නිෂ්ඵල භාවය සහ කෙලෙස්වල ව්‍යාමුහීමට ඔරොත්තු දැයි, භව නිරොධය අරමුනට දක්වා රූප ශ්‍රෙෂ්ඨ භාවනාවකින් නුසුදුසු විට අනාගාමි මග්ගය.</div>
                    <div class="example-card">6. කුසල මිත්‍රසහ සමුගම්‍ය සර්ව ශීල සංයමය පිහිටුවා, අනාගාමි මග්ගයට සුදුසු සංස්කාරී භාවය.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>අනාගාමි මග්ග චිත්තය – කාම රාගය සහ පටිඝය සම්පූර්ණයෙන් නසා, කාම ලෝවට නැවත නොපැමිණෙන තීරණය කෙරෙන, ප්‍රථම ධ්‍යානයේ ශක්තියෙන් යුත් ත්‍රිහේතුක සිතකි!</li>
                        <li>ඒකාග්‍රතා අතිශයින් ශක්තිමත් සහ විදර්ශනා ප්‍රඥාව පරිණත වේ.</li>
                        <li>සද්ධාව, සති, පඤ්ඤාව, වායාමය ඉතා කාර්යක්ෂමයෙන් ක්‍රියාත්මක වේ – එබැවින් කෙලෙස් වෙනස් වෙන්නේම නැහැ.</li>
                        <li>ඉතිරි සංයෝජනන්: රූපරාග, අරූපරාග, මාන, උද්ධච්ච, අඤ්ඤාණ ආදී සම්පූර්ණ නාශය අරහත්ත මග්ගය තුළ සිදුවේ.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">ප්‍රායෝගික සටහන්</h3>
                    <ul>
                        <li>අනාගාමි මග්ගය සම්පූර්ණ වූ විට, කාම ලෝකයේ කෝණසියෙන් වෙනස් රාශියක් දැනේ – කාම විෂයන්ට ආකර්ෂණය සම්පූර්ණයෙන් නසයි.</li>
                        <li>සිත්ත වෘත්තිය ඉතා සන්සුන්, මනාප ද්‍රව්‍ය නැතිවීමෙන් පසුත් සතුටින් සිටීම.</li>
                        <li>සමාධි හඳුනාගැනීම්: ප්‍රථම ධ්‍යාන සමාධිය නිසා, මග්ග මොහොතේදී ප්‍රබල පීඩනයක් නොමැතිව නිදිසු සන්සුන් බවක් පැන නගී.</li>
                        <li>ඊළඟ පියවර – අනාගාමි ඵලය (ප්‍රථම ධ්‍යාන අනාගාමි ඵල චිත්තය) එක් මොහොතකින්ම පසුව පැමිණේ.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>කාම රාගය සහ පටිඝය සම්පූර්ණයෙන් නසයි.</li>
                            <li>අනාගාමි සත්ත්වත්වය – කාම ලෝකට නැවත නොපැමිණීම.</li>
                            <li>ඊළඟ පියවර සඳහා (අනාගාමි ඵලය හා අරහත්ත මග්ගයට) ශක්තිමත් මූලිකයක්.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>අනාගාමි මග්ග වටිනාකම මත සදාකාලික භාවනාව නිරන්තරයෙන් පවත්වා ගන්න.</li>
                            <li>රූපරාග සහ අරූපරාග කෙලෙස් අනාගාමී ඵලය හා අරහත්ත මග්ගය සඳහා විදර්ශනා තුළ විග්‍රහ කරන්න.</li>
                            <li>නිවන අනුභවය නිරන්තරයෙන් සිහිපත් කර, සින්හල පද්ධතික කාලය බෙදාගැනීමෙන් ඵල සමාපත්තිය පුහුණු කරන්න.</li>
                        </ul>`}},35:{id:35,title:"ප්‍රථම ධ්‍යානයේ අනාගාමි ඵල චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-purple-200">කාම බන්ධන දුරු කළ පසු ඇතිවන නිවන අත්දැකීම</h3>
                        <ul>
                            <li>අනාගාමි මග්ගය සිදු වූ තැනින්ම, එක් මොහොතකින් නිවන අනුභවය උත්පාදනය වෙයි.</li>
                            <li>කාමරාගය සහ පටිඝය සම්පූර්ණයෙන් නසන ලද නිසා, කාම ලෝවට නැවත අවශ්‍ය නොවේ.</li>
                            <li>සන්සුන් සොම්නස්සයේ දිගටම පවත්නා හැඟීමක්, කාම විෂයන්ගෙන් හුදකලා වූ නිදහස.</li>
                            <li>ඵල සමාපත්තිය භාවිතයෙන්, මෙම අත්දැකීම නැවත නැවත කැඳවා ගත හැක.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණය</h3>
                        <p>"වෙනස් වූ දර්ශනයක් මත, සකදාගාමී විය යුතු කාම ආශාවන් දිරවා දැමූ භාවනාකරුවා, නිවන අරමුණට සම්මථයෙන් ඇදී යන විට අනාගාමි මග්ගය උප්පන්න විය. වහාම පසුව ඇති වූ අනාගාමි ඵල චිත්තය කාම පාසිකාවලින් සම්පූර්ණ නිදහසක් ලෙස හැඟුණි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අනාගාමි"</h3>
                        <ul>
                            <li>අ + ආගාමි = නැවත නොආගමනය. කාම භවයට නැවත ජනනයක් නොවීම.</li>
                            <li>කාමරාගය සහ පටිඝය සම්පූර්ණයෙන් දිරවා දැමූ නිසා, ඉදිරියට රූප හෝ අරූප බ්‍රහ්ම ලෝවකට පමණක් අභිසංඛාරය වෙයි.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ඵල"</h3>
                        <ul>
                            <li>මග්ගයෙන් නසාගත් කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන විපාක චිත්තය.</li>
                            <li>නිවන අරමුණ කරගෙන, ඵල සමාපත්තියන් මගින් නැවත නැවත පිලිගත් සන්සුන් අත්දැකීම.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යානය"</h3>
                        <ul>
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා – ධ්‍යානයේ පදනම් අංග 5.</li>
                            <li>කාර්යසාධක සමාධිය නිසා, විදර්ශනා ප්‍රඥාව ලෝකූත්තර පියවරට පහසුවෙන් පිරිසිදු වේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර විපාක සිතුවල මූලික තැන</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>
                            <p class="font-bold">ලෝකූත්තර සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">මග්ග 8 • ඵල 8 • සම්මාධි සම්භාර 24. මේ අතරින් තුන්වැනි ඵලය.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">සබ්බචිත්ත සාධාරණ 7 + කුසල සාධාරණ 19 + ප්‍රථම ධ්‍යානයේ විශේෂ අංග.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ලෝකූත්තර පියවර තුලින්, නිවන මග දිගු කිරීම සඳහා අවශ්‍ය අත්දැකීම.</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">ලෝකූත්තර ඵල සිත් 8</h4>
                        <div class="grid-4">
                            <span class="badge">1. සෝතාපන් ඵලය</span>
                            <span class="badge">2. සකදාගාමි ඵලය</span>
                            <span class="badge" style="background: rgba(192, 132, 252, 0.32); color:#0f172a; font-weight:700;">3. අනාගාමි ඵලය ⭐</span>
                            <span class="badge">4. අරහත්ත ඵලය</span>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">මෙම ඵලය තුළින් කාමරාගය සහ පටිඝය නැවත නොඇතිවී නිවන අනුභවය සුරකින්නට හැක.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">අනාගාමි මග්ගයට සමාන චෛතසික සංයුතියක්, නමුත් මෙහිදී ක්‍රියාත්මක වන්නේ නිවන අනුභවය සඳහායි.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. විදර්ශනා භාවනාවේදී සකදාගාමී ශේෂ කාම රාග හැඟීම් නිරීක්ෂණය කරමින් ඉතිරි පැසසුම් දිරවා අනාගාමි මග්ගයට පසුබැසීම.</div>
                    <div class="example-card">2. ඵල සමාපත්තියට සුදානම් වූ පුද්ගලයෙකු, ප්‍රථම ධ්‍යානයේ සමාධි බලයෙන් නිවන අනුභවය නැවත කැඳවීම.</div>
                    <div class="example-card">3. දුෂ්කර සමාජික සිදුවීම් අතර කාම ආශාව නැතිව සන්සුන්ව සිටීම, කෙලෙස් දැඩිව අඩුවී ඇති බවට පසෙකින් නිවන අත්දැකීම.</div>
                    <div class="example-card">4. කාම විෂයන් අභිමුඛ නොවූ ජීවන රීති සවිමත් කරමින්, බ්‍රහ්මවිහාර භාවනාවට සම්බන්ධව ජීවිතය අනුකූල කිරීම.</div>
                    <div class="example-card">5. අනාගාමි මග්ගය සැලකුනු මනෝවිශ්ලේෂණ අත්දැකීමක් මත, කාමියා විශේෂ අවස්ථාවලට නොගැටෙන සහනශීලී හැසිරීම.</div>
                    <div class="example-card">6. ඵල සමාපත්තිය නිතර භාවිතයෙන් නිවන අනුභවය පුහුණු කර, අනාගාමි ඵලය නිරන්තරයෙන් පවත්වා ගැනීම.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ අවබෝධය</h3>
                    <ul>
                        <li>අනාගාමි ඵල චිත්තය ලෝකූත්තර විපාක චිත්තවල තුන්වැනි තැන දැක්වෙයි; අනාගාමි මග්ගයෙන් නසන ලද කෙලෙස්වල ප්‍රතිඵලය.</li>
                        <li>චෛතසික 36 සම්පුර්ණ වශයෙන් එකතුවී, ධ්‍යානයේ අධිෂ්ඨාන බලයත් සමඟ නිවන අනුභවය පිරිසිදු කරයි.</li>
                        <li>කෙලෙස් නිරෝධය: කාමරාගය සහ පටිඝය සම්පූර්ණයෙන් නසා, ඉතිරිවන්නේ රූපරාග, අරූපරාග, මාන, උද්ධච්ච, අඤ්ඤාණ ආදී රූප-අරූප බන්ධන පමණි.</li>
                        <li>මෙය එක් වරක් පමණක් උත්පාදනය වුවද, ඵල සමාපත්තිය මඟින් එය පුනරාවර්තනය කළ හැක.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">ප්‍රායෝගික අවධාරණ</h3>
                    <ul>
                        <li>නිවන අත්දැකීම නිතර සිහිපත් කර ගැනීමට ඵල සමාපත්තිය භාවිතයෙන්, කාම විෂයන්ට නැවත ඇදෙන්නට ඉඩ නොදේ.</li>
                        <li>විතර්ක-විචාර යුත් ප්‍රථම ධ්‍යානයේ ඒකාග්‍රතා, නිවන අරමුණට නිරතුරුව යොමු වන අතර අනාගාමිවරයාට සම්පත් වට්ටවුම් කළ හැක.</li>
                        <li>අනාගාමි ඵලය, අරහත්ත මග්ගයට පසුබැසීමේ බිම් සකස් කිරීමේ ප්‍රධාන උපකරණයයි.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>කාම රාගය සහ පටිඝය නැවත නැගී නැගීමක් නොවී, කාම ලෝවට නැවත පැමිණීම අවලංගු වේ.</li>
                            <li>නිවන අනුභවය ගැඹුරු රසයක් ලෙස පවත්වා ගැනීම, සන්තුෂ්ඨිය හා උපේක්ෂා බැබළෙයි.</li>
                            <li>අරහත්ත මග්ගයට අවශ්‍ය පදනම – ඉතිරි සංයෝජනන් නසන්නට අභ්‍යාසය පහසු කරයි.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>ඵල සමාපත්තිය නිතර භාවිතයෙන් නිවන අත්දැකීම ශක්තිමත් කරගෙන, මාන හා උද්ධච්ච වැනි ඉතිරි සංයෝජනන් නසන අරහත්ත මග්ගයට පියවර තබන්න.</li>
                            <li>රූපරාග හා අරූපරාග දිගටම දිරවනු සඳහා, විශේෂයෙන් අරූප සමාපත්ති පුහුණුවට යොමු වෙන්න.</li>
                            <li>ධම්ම සංස්ථාවන්, සජීවී භාවනාවන්, නිශ්චල විවෙකය – මේ සියල්ල අරහත්ත මග්ගයට පියවර.</li>
                        </ul>`}},36:{id:36,title:"ප්‍රථම ධ්‍යානයේ අරහත්ත මග්ග චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-purple-200">සියලු කෙලෙස් නසා නිවනට පැමිණෙන මග</h3>
                        <ul>
                            <li>අරහත්ත මග්ගය යනු ලෝකූත්තර මග්ගවල අවසන් පියවරයි; සංසාරයේ සියලු සංයෝජන නසයි.</li>
                            <li>අනාගාමී මග්ගයට පසුව ඉතිරිව තිබුණු රූපරාග, අරූපරාග, මාන, උද්ධච්ච, අඤ්ඤාණ යන කෙලෙස් දිරවාදමයි.</li>
                            <li>එක් මොහොතකින් පමණක් පැනනගින මෙම සිත, නිරෝධ සත්‍යය සම්පූර්ණයෙන් හැදෑරීමෙනි.</li>
                            <li>මෙම මග්ගය සමඟින් හුදෙක් නිවන පමණක් රැගෙන පවතින අරහන්ත ආලෝකය අවබෝධ වේ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"අනාගාමී අත්දැකීම් තිරසාර කරමින් වේදනාවත්, සඤ්ඤාවත්, සංඛාරය පරීක්ෂා කරන භාවනාකරුවෙකුන්ට, අනිත්‍ය - දුඃඛ - අනත්ත ලක්ෂණ සකස් වූ මොහොතකින් අරහත්ත මග්ගය පැන නැගිණ. එම මොහොතේ ඉතිරි කෙලෙස් සම්පූර්ණයෙන් විනාශ විය."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අරහත්"</h3>
                        <ul>
                            <li>"අරහන්ත" = පුරුෂෝත්තම, දූශන කෙලෙස් නසා ලෝකයාට අනුමෝදනීය.</li>
                            <li>සංසාරය පුරා පිළිපදින්නට වු සියලු කෙලෙස් අන්ත කර මනස පිරිශුද්ධ බවට පත් කිරීම.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"මග්ග"</h3>
                        <ul>
                            <li>මග්ගය යනු මාර්ගය; කෙලෙස් තදින් නසා නිවන සත්‍යය පිළිබඳ අවබෝධය දක්වන ක්‍රියා.</li>
                            <li>ලෝකූත්තර මග්ගවල අවසානය වන නිසා, සම්පූර්ණ නිවන පූර්ණත්වය ලබා දිය හැක.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යානය"</h3>
                        <ul>
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා යන අංග මගින් පදනම් වූ සමාධිය.</li>
                            <li>අරහත්ත මග්ගයෙහිද, මනස බලවත් සන්සුන් බවක් සහිතව ලක්ෂණ ත්‍රය නිරන්තරයෙන් දකින්නට උපකාරී වේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර මග්ග සිත්වල අවසාන පියවර</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">8</p>
                            <p class="font-bold">ලෝකූත්තර මග්ග</p>
                            <p class="text-sm text-slate-200 mt-2">සෝතාපත්ති, සකදාගාමි, අනාගාමි, අරහත් – සෑම මග්ගයකම ප්‍රථම ධ්‍යාන සංයුතිය.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">සබ්බචිත්ත සාධාරණ 7 + කුසල සාධාරණ 19 + ධ්‍යානයට අදාළ 10 කෙටි.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                            <p class="text-sm text-slate-200 mt-2">අரහත්ත මග්ගය භාවනාවේ සම්භාරය අවසානය කරයි; අරහත්ත ඵලයට මඟ සකස් කරයි.</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">අරහත් මග්ගයේ කෙලෙස් නිරෝධය</h4>
                        <div class="grid-4">
                            <span class="badge">රූපරාග</span>
                            <span class="badge">අරූපරාග</span>
                            <span class="badge">මාන</span>
                            <span class="badge">උද්ධච්ච</span>
                            <span class="badge">අවෙජ්ඣ (අවජ්ඣා/අඤ්ඤාණ)</span>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">මෙම කෙලෙස් නසන ලද බැවින්, සංසාරයේ තවත් කිසිදු උපපත්තියක් නොතුළත් අරහන්තාව සාක්ෂාත් වේ.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">අරහත්ත මග්ග චිත්තය, පූර්ව මග්ගයන්ට සමාන චෛතසික සංයුතියක් තිබුණද, මෙහි අරමුණ – සියලු කෙලෙස් නතර කිරීම.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. අනාගාමිවරයෙකු, භව නිරෝධය සම්පූර්ණයෙන් දක්නට නාම-රූප සංඛාරයකින් පරික්ෂණය කරන විට අරහත්ත මග්ගය උත්පාදනය.</div>
                    <div class="example-card">2. ඵල සමාපත්තියෙන් නිවන අනුභවය යළි සිහිපත් කරනුයේදී, අවසන් සීතලත්වය ලෙස කෙලෙස් නිරෝධය අවබෝධ වීම.</div>
                    <div class="example-card">3. විදර්ශනා භාවනාවේදී, අනිත්‍ය - දුඃඛ - අනත්ත ලක්ෂණය සියළු වස්තුමිදුලේ නිරන්තරයෙන් දකිමින් අරහත්ත මග්ගය වෙත උඩුගත වීම.</div>
                    <div class="example-card">4. ක්‍රියාකාරී බවට පත් වූ සම්මා සති, සම්මා වායාම, සම්මා සමාධි, සම්මා ජීවය – මෙම අංග දිරවා උපදේශනීය ක්‍රියාකලාවන් අවසන් කරන මොහොත.</div>
                    <div class="example-card">5. අනුස්සති භාවනාවන් (බුද්ධ, ධම්ම, සංඝ) නැවත නැවත සිහිපත් කරමින්, අභිසංකාර කෙලෙස් දුර කර අරහත් මග්ගය වෙත පියවර තැබීම.</div>
                    <div class="example-card">6. නිර්වාණානුස්සතියෙන් පිරිසිදු වූ අවබෝධයෙන්, කෙසේවුවත් අරහත් මග්ගය සමඟ නිරෝධ සත්‍යය නිරහංකාර වශයෙන් සම්පූර්ණ කරයි.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ දැක්වීම</h3>
                    <ul>
                        <li>අරහත්ත මග්ග චිත්තය ලෝකූත්තර මග්ගවල අවසන් පියවරයි; මෙහිදී ක්‍රීයාව නිවා බුද්ධත්වය අවසන් කරයි.</li>
                        <li>සම්මා දිට්ඨි සහ සම්මා සංකප්ප යන මග්ගංග, ඉතිරි කෙලෙස් අංගූරය අස්සේදී කපයි.</li>
                        <li>කෙලෙස් නිරෝධය: රූපරාග, අරූපරාග, මාන, උද්ධච්ච, අඤ්ඤාණ – සංසාරය පුරා පැවති ශේෂයන් තනි මොහොතකින් සිඳි යයි.</li>
                        <li>අරහත් බවට පත් වීමෙන් පසුව, ඉදිරියේ දී ඇතිවන්නේ අරහත් සුවය පමණකි; සංසාරික කාර්යයන් අවසන් වේ.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">ප්‍රායෝගික අවබෝධ</h3>
                    <ul>
                        <li>මෙම මග්ගය එක් වරක් පමණක් වූ නිසා, අරහත් ඵල සමාපත්තිය භාවිතයෙන් නිවන අනුභවය නිතර පිළිගත යුතුය.</li>
                        <li>ආශ්‍රිත චාරිත්‍රය සඳහා උත්තරීතර සන්සුන් ක්‍රියාවන් පවත්වා, අරහත් ඵලය සඳහා අවකාශ සකස් කරන්න.</li>
                        <li>අනුප්පාදීසෙස පරිනිබ්බානය වෙත පිවිසීමට වූ විවේකය වඩාගෙන, දහම් ව්‍යාප්තියට සේවය කරන්න.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>සියලු කෙලෙස් නස්වා අරහන්ත බවට පැමිණීම; සංසාර ගමන අවසන් කිරීම.</li>
                            <li>මරණාන්තර භවභංග නොසිදුවේ; පරිනිබ්බානයට පමණක් ඉතිරි වේ.</li>
                            <li>ආශ්‍රිත ගෝත්‍ර පරිවර්තනය: සෙසු ලෝකික බලපෑම් වලින් නිදහස් වූ නිදානීය චිත්ත සමාධිය.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>මග්ගය එක් වරක් පමණක් වූ නිසා, අරහත් ඵල සමාපත්තිය භාවිතයෙන් නිවන අනුභවය නිතර පිළිගත යුතුය.</li>
                            <li>ආශ්‍රිත චාරිත්‍රය සඳහා උත්තරීතර සන්සුන් ක්‍රියාවන් පවත්වා, අරහත් ඵලය සඳහා අවකාශ සකස් කරන්න.</li>
                            <li>අනුප්පාදීසෙස පරිනිබ්බානය වෙත පිවිසීමට වූ විවේකය වඩාගෙන, දහම් ව්‍යාප්තියට සේවය කරන්න.</li>
                        </ul>`}},37:{id:37,title:"ප්‍රථම ධ්‍යානයේ අරහත්ත ඵල චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-purple-200">අවසාන නිවන අත්දැකීම</h3>
                        <ul>
                            <li>අරහත්ත මග්ගයට වහාම පසුව ඇතිවන, නිවන අරමුණ කරගෙන නිවන සත්‍යය සම්පූර්ණයෙන් අත්විඳෙන සිත.</li>
                            <li>සංසාරය පුරා පැවති සියලු කෙලෙස් සදාකාලිකව නසන ලද නිසා, මෙහිදී කෙලෙස් නැවත නැගී නැගීමක් නොකළේය.</li>
                            <li>අරහත් භාවයට ලත් පුද්ගලයාට, ඵල සමාපත්තිය මගින් මෙම නිවන අත්දැකීම නැවත නැවත කෙරෙහි කැඳවිය හැක.</li>
                            <li>සංසාරික දුක අවසන්ව, නිරන්තර නිදහස සහ අසම්භව ජීවිතය ආරම්භ වන්නේ මෙහිදීය.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"අනාගාමී වියෝගයෙන් පසු නිරන්තර විපස්සනා භාවනාව කරමින් සිටි අයෙකුට, සිතේ ඉතිරි ශේෂයන් පරීක්ෂා කරන විට අරහත්ත මග්ගය උද්භව විය. එම මොහොතේම අරහත්ත ඵල චිත්තය නිවන සත්‍යය සම්පූර්ණයෙන් අත්විඳීමට අවකාශ ලැබීය."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"අරහත්"</h3>
                        <ul>
                            <li>අරහත් = අරහන්ත = සාප්පුළුම් කළ කෙලෙස් නැති කර අසර්වජ්ජ නීතියෙන් යුතු පුද්ගලයා.</li>
                            <li>අනවශ්‍ය සංසාරික ධර්ම හෝ අඛණ්ඩ කෙලෙස් ඉතිරි නොවන, අසම්භව අවස්ථාව.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ඵල"</h3>
                        <ul>
                            <li>මග්ගයෙන් නසාගත් කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන ලෝකූත්තර විපාක.</li>
                            <li>අරහත්ත මග්ගයට පසුව, නිවන සත්‍යය සම්පූර්ණයෙන් අත්විඳීම සඳහා ඇතිවන සිත.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-purple-200">"ප්‍රථම ධ්‍යානය"</h3>
                        <ul>
                            <li>විතර්ක, විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා – ධ්‍යානයේ අංග 5 ක් මගින් බලාපොරොත්තු වූ සමාධිය.</li>
                            <li>ලක්ෂණ ත්‍රය ඉතා පැහැදිලිව දැක්වීමටත්, නිවන අත්දැකීම පිරිසිදු කිරීමටත් මේ ධ්‍යානය උදව් කරයි.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-purple-200">ලෝකූත්තර විපාක සිතුවල අවසාන පියවර</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">40</p>
                            <p class="font-bold">ලෝකූත්තර සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">අරහත්ත මග්ගය හා ඵලය සමඟ ලෝකූත්තර මග්ග-ඵල චක්‍රය සම්පූර්ණය වෙයි.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">36</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">සබ්බචිත්ත සාධාරණ 7 + කුසල සාධාරණ 19 + ධ්‍යානයට අදාළ විශේෂ 10.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-purple-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ලෝකූත්තර ඵල සිතුවල අවසාන සිත – නිවන සත්‍යය සදාතනික කරයි.</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">අරහත්ත ඵලයේ කෙලෙස් නිවාන</h4>
                        <div class="grid-4">
                            <span class="badge">රූපරාග නිරෝධය</span>
                            <span class="badge">අරූපරාග නිරෝධය</span>
                            <span class="badge">මාන සම්පූර්ණ නාශය</span>
                            <span class="badge">උද්ධච්ච නිවාන</span>
                            <span class="badge">අඤ්ඤාණ නිවාන</span>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">අරහත්ත මග්ගයෙන් නසන ලද කෙලෙස්වල ප්‍රතිඵලය අරහත්ත ඵලය තුළින් අත්විඳෙයි; නව කෙලෙස් උත්පාදනයක් නැත.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-purple-200">අරහත්ත මග්ගයට සමාන චෛතසික සංයුතියක්, නමුත් මෙහිදී කෙලෙස් රහිත නිවන අනුභවය පවත්වා ගැනීමට ක්‍රියාකරයි.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-purple-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:null,level6:null,level7:null}},38:{id:38,title:"ද්විතීය ධ්‍යානයේ සෝතාපත්ති මග්ග චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-blue-200">ප්‍රථම ධ්‍යානයෙන් ඉදිරියට සෝතාපත්ති මඟ</h3>
                        <ul>
                            <li>සෝතාපත්ති මග්ගය දෙවැනි ධ්‍යානයේ සමාධිය මත පදනම් වී ඇති අවස්ථාවකි; විතර්කය නැතිව ගැඹුරු සමාධියක් මත නිවන දුටුවේය.</li>
                            <li>අරමුණ සමානයි: සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස යන තුන් සංයෝජනන් නසන එකේ.</li>
                            <li>නමුත් මෙහි ප්‍රාධානත්වය – මනස නිශ්ශබ්ද කර, විතර්ක නැති සමාධියකින් ලොවට බලපෑම් අඩු වූ මොහොතක නිවන දකින්නේය.</li>
                            <li>එක් මොහොතකින් පමණක් පැනනගිනුත් ද, සමාධි ගැඹුර නිසා අවබෝධය වැඩි ඉදිමට පත්වේ.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"ප්‍රථම ධ්‍යාන අරමුණ වටහාගෙන, භාවනාකරුගේ සිත තවත් සන්සුන් විට, විතර්කය ස්වයංක්‍රියව සන්සුන් වී දීප්ත සමාධියක් මතුවිය. එම අවස්ථාවේ නිවනාවද සෝතාපත්ති මග්ගය සමඟ දෙවැනි ධ්‍යානයට අයත් දීප්තිමත් අවබෝධයක් ලෙස පැමිණිණි."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ද්විතීය ධ්‍යානය"</h3>
                        <ul>
                            <li>විතර්කය නොමැති, නමුත් විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා සහිත ධ්‍යානය.</li>
                            <li>සමාධි සන්සුන් වීම වැඩිවේ; මනස තුළ කථනය (vitakka) නැතිවී නිරන්තර ප්‍රවාහයක් ඇතිවේ.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"සෝතාපත්ති මග්ග"</h3>
                        <ul>
                            <li>සංසාර මාර්ගයේ පළමු මග්ග – සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස නසයි.</li>
                            <li>මෙහිදී සමාධි ඉහළ නිසා, මේ කෙලෙස් විනාශය වැඩි විද්වත් අවබෝධයකින් සිදුවේ.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">"මග්ග"</h3>
                        <ul>
                            <li>මග්ගය = මාර්ගය; නිවනට පාර පෙන්වයි, කුශල චෛතසික 35 සමඟ දිග හැරේ.</li>
                            <li>දෙවැනි ධ්‍යානයේ මග්ගය විතර්කයක් අතහැරී නිසඹර සමාධිය උදෙසා යොමු වේ.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-blue-200">ද්විතීය ධ්‍යානයේ ලෝකූත්තර මග්ගය</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">8</p>
                            <p class="font-bold">ලෝකූත්තර මග්ග</p>
                            <p class="text-sm text-slate-200 mt-2">සෝතාපත්ති මග්ගයෙන් අරහත් මග්ගය දක්වා ධ්‍යාන 5 වලින් බෙදාගත් සංයුතිය.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">35</p>
                            <p class="font-bold">චෛතසික ගණන</p>
                            <p class="text-sm text-slate-200 mt-2">විචාර, ප්‍රීති, සුඛ, ඒකාග්‍රතා සමඟ – විතර්කය නොමැති නිසා 35කට පසුවෙයි.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                            <p class="text-sm text-slate-200 mt-2">ලෝකූත්තර මග්ග පද්ධතිය ගැඹුරු සමාධි මට්ටම් අනුව පංච ධ්‍යානයට බෙදේ.</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">ද්විතීය ධ්‍යානයේ විශේෂ ලක්ෂණ</h4>
                        <div class="grid-4">
                            <span class="badge">විතර්කය නොමැති</span>
                            <span class="badge">විචාර ඉතිරිය</span>
                            <span class="badge">ප්‍රීති පිරිහීම</span>
                            <span class="badge">සුඛ - ඒකාග්‍රතා වැඩි</span>
                            <span class="badge">සමථයක අසීරුභාවය</span>
                        </div>
                        <p class="text-sm text-slate-200 mt-3">සමාධිය තවත් මනස සන්සුන් කරයි; නිවන අවබෝධයට නිරතුරුව උපකාරී නව සුවය බිහි වයි.</p>`,level4:`<div class="content-box">
                    <p class="text-center text-lg font-semibold mb-6 text-blue-200">විතර්කය අතහැර, විචාර මත පදනම් වූ සමාධියයි. ඒ අනුව චෛතසික සංයුතිය 35කට යටත්වේ.</p>
                    <div class="grid-2">
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-blue-200">සබ්බචිත්ත සාධාරණ 7</h4>
                            <div class="badge-list">
                                <span class="badge">ඵස්ස</span>
                                <span class="badge">සෝමනස්ස වේදනා</span>
                                <span class="badge">සඤ්ඤා</span>
                                <span class="badge">චේතනා</span>
                                <span class="badge">ඒකාග්‍රතා</span>
                                <span class="badge">ජීවිතින්ද්‍රිය</span>
                                <span class="badge">මනසිකාර</span>
                            </div>
                        </div>
                        <div class="content-box">
                            <h4 class="font-bold mb-3 text-blue-200">කුසල සාධාරණ 19</h4>
                            <div class="grid-3">
                                <span class="badge">අලෝභ</span>
                                <span class="badge">අදෝස</span>
                                <span class="badge">අමෝහ</span>
                                <span class="badge">සද්ධා</span>
                                <span class="badge">සති</span>
                                <span class="badge">හිරි</span>
                                <span class="badge">ඔත්තප්ප</span>
                                <span class="badge">කාය පසද්ධි</span>
                                <span class="badge">චිත්ත පසද්ධි</span>
                                <span class="badge">කාය ලහුතා</span>
                                <span class="badge">චිත්ත ලහුතා</span>
                                <span class="badge">කාය මුදුතා</span>
                                <span class="badge">චිත්ත මුදුතා</span>
                                <span class="badge">කාය කම්මඤ්ඤතා</span>
                                <span class="badge">චිත්ත කම්මඤ්ඤතා</span>
                                <span class="badge">කාය පාගුඤ්ඤතා</span>
                                <span class="badge">චිත්ත පාගුඤ්ඤතා</span>
                                <span class="badge">කායුජුකතා</span>
                                <span class="badge">චිත්තුජුකතා</span>
                                <span class="badge">පඤ්ඤින්ද්‍රිය</span>
                                <span class="badge">ඤාණ</span>`,level5:`<div class="grid-2">
                    <div class="example-card">1. පළමු ධ්‍යානය හොඳින් පවත්වාගෙන විදර්ශනා භාවනාව ඉහළට ගෙන ගියේදී, විතර්ක ඉවත් වීමත් සමඟ දෙවැනි ධ්‍යානයේ ආශ්වාදයෙන් මග්ගය පැන නැගීම.</div>
                    <div class="example-card">2. සතිපට්ඨාන භාවිතයෙන් නාම-රූප දර්ශනය තවත් සන්සුන් වූ විට, මනස නිශ්ශබ්දව නිවන අරමුණට යොමුකළ අවස්ථාව.</div>
                    <div class="example-card">3. අභිධම්මයෙහි දීපවාන යුග ගැඹුරු අවබෝධයක් මත, සෝතාපත්ති මග්ගය දෙවැනි ධ්‍යානයේ ශක්තියෙන් යුත් නිර්ණායක අවබෝධයක් වීම.</div>
                    <div class="example-card">4. විද්‍යාලෝකයෙන් ස්වල්ප තොරව සමාධිය රැස් කරගෙන, සක්කාය දිට්ඨිය ශක්තිමත් විග්‍රහයෙන් බිඳෙන මොහොත.</div>
                    <div class="example-card">5. උසස් භාවනා සංස්ථානයක, භාවනා නිලධාරීන්ට දෙවැනි ධ්‍යානයේ සමාධිය ඉගැන්වීමේදී සිදුවන සෝතාපත්ති මග්ග අත්දැකීම.</div>
                    <div class="example-card">6. සතියෙන් පිරුණු අනුස්සතියක් දීර්ඝකාලීනව පවත්වාගෙන සිටියදී, කෙලෙස්වල ගැඹුරු අත්දැකීමෙන් සැකය නිසා විචිකිච්ඡාව නසන අවස්ථාව.`,level6:`<div class="content-box">
                    <h3 class="font-bold text-lg mb-4">ධර්මසංගණී • අභිධම්මත්ථ සංගහ</h3>
                    <ul>
                        <li>සෝතාපත්ති මග්ගය පෙරවදින ලෝකූත්තර මග්ගවල පළමු සිතයි; ධ්‍යානයට අනුව පංචවර්ගයක් තිබේ.</li>
                        <li>ද්විතීය ධ්‍යානයේදී විතර්කය නොපවතින නිසා, චෛතසික සංඛ්‍යාව 35කට අඩුවේ, ඒකට විචාරය ඉතිරිවී සමාධිය සැපදෙයි.</li>
                        <li>ගැඹුරු සමාධිය නිසා විචිකිච්ඡා හා දිට්ඨි බිඳ දැමීම තවත් බොහෝ විවේචනාත්මක අවබෝධයකින් සිදුවේ.</li>
                        <li>මග්ගයට වහාම පසුව සෝතාපත්ති ඵලය දිස්විය යුතුය; එහිදී කිසිදු විචිකිච්ඡා ඉතිරි නොවේ.</li>
                    </ul>
                </div>
                <div class="content-box highlight">
                    <h3 class="font-bold text-lg mb-4">ප්‍රායෝගික සටහන්</h3>
                    <ul>
                        <li>නිවන් දසුන හරහා සෝතාපත්ති තත්ත්වයට පැමිණීමේ අත්දැකීම ප්‍රථම ධ්‍යානයට වඩා සන්සුන් සමාධියක් මත ද සාර්ථක වේ.</li>
                        <li>මෙය උසස් සමාධියක් ඇති පිරිස්ට පෙන්වයි: සමාධිය සහ විපස්සනා එක්ව ඇති විට, නිවන දසුන ගැඹුරු වේ.</li>
                        <li>පෙර ගැඹුරු මග්ග අත්දැකීම් සොයා හඳුනා ගැනීමට, අනාගතයේ උත්තරීතර මග්ගයන්ට ශක්තිමත් පදනමක් සකස් කරයි.</li>
                    </ul>`,level7:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත් පරාමාස සම්පූර්ණයෙන් නසයි.</li>
                            <li>සෝතාපත්ති ඵලයට මඟ සකස් කරමින් නිවන දසුන තවත් විශීෂ්ට ගැඹුරකින් තබයි.</li>
                            <li>සමාධිය ගැඹුරු වීම නිසා, සමාධි සිව් මග්ගයන්ටත් ශක්තිමත් මගවීමක් ලබාදෙයි.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="font-bold text-lg mb-3">පවත්වා ගැනීම / අවවාද</h3>
                        <ul>
                            <li>සම්බන්ධිත සමාධිය රැගෙන යාමට දෛනික සතිපට්ඨාන අභ්‍යාසය පවත්වා ගන්න.</li>
                            <li>සෝතාපත්ති ඵල සමාපත්තියෙන් නිවන අත්දැකීම නිතර പുതുക്കා ගන්න.</li>
                            <li>ඉදිරියට සකදාගාමී මග්ගය සඳහා විපස්සනා භාවනාව තවදුරටත් හෙළි කරන්න.</li>
                        </ul>`}},39:{id:39,title:"ද්විතීය ධ්‍යානයේ සෝතාපත්ති ඵල චිත්තය",levels:{level1:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="text-xl font-bold mb-4 text-blue-200">නිශ්ශබ්ද සමාධියේ නිවන අත්දැකීම</h3>
                        <ul>
                            <li>සෝතාපත්ති මග්ගයට වහාම පසුව, දෙවැනි ධ්‍යානයේ සමාධිය මත නිවන අනුභවය දිගටම පැවැත්වෙන සිත.</li>
                            <li>විතර්කය නැතිවී විචාර-ප්‍රීති-සුඛ-ඒකාග්‍රතා සමඟ සිත නිශ්ශබ්දව ඇති අතර නිවන සැලවීම අඩුයි.</li>
                            <li>සෝතාපත්ති ඵල සමාපත්තියෙන්, නිවන අත්දැකීම නිතර නිවෙස් වශයෙන් අත්විඳිය හැක.</li>
                            <li>සක්කාය දිට්ඨි, විචිකිච්ඡා, සීලබ්බත පරාමාස නැවත නැගී නැගීමක් නොවේ; සෝතාපත්ති මට්ටම පිරී ඇත.</li>
                        </ul>
                    </div>
                    <div class="content-box warning">
                        <h3 class="text-xl font-bold mb-3">උදාහරණයක්</h3>
                        <p>"සෝතාපත්ති මග්ගයෙන් පූර්ව පළමු ධ්‍යානයේ සිටි භාවනාකරුවෙකු, විතර්කයෙන් ඉවත් වී දෙවැනි ධ්‍යානයට ගිය මොහොතේ, සෝතාපත්ති ඵල චිත්තය අදහස් කළ නිවන සුවය සන්සුන් ස්මෘතියක් ලෙස නිරන්තරයෙන් පවත්වා ගත්තේය."</p>`,level2:`<div class="grid-2">
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ව්‍යාවචර ධ්‍යානය"</h3>
                        <ul>
                            <li>ද්විතීය ධ්‍යානයේ විශේෂය: විතර්කය අවසන්; සමාධිය නිරන්තර ප්‍රවාහයකින් පිරී ඇත.</li>
                            <li>සුඛ, ප්‍රීති, ඒකාග්‍රතා සහිත නිර්මල භාවය නිසා නිවන අත්විඳීම සන්සුන් වීමෙන් පිරී ඇත.</li>
                        </ul>
                    </div>
                    <div class="content-box highlight">
                        <h3 class="font-bold text-lg mb-3">"ඵල"</h3>
                        <ul>
                            <li>මග්ගයෙන් නසාගත් කෙලෙස්වල ප්‍රතිඵලය අනුභව කරන ලෝකූත්තර විපාකයි.</li>
                            <li>දෙවැනි ධ්‍යානයේදී එය ඉතා නිශ්ශබ්ද සතුටක් ලෙස අත්විඳී; නව කර්ම බීජයක් නොසෑදේ.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">"සෝතාපත්ති"</h3>
                        <ul>
                            <li>සංසාරයේ නිරන්තරය දුරලමින්, සක්කාය දිට්ඨි සහ විචිකිච්ඡා වැනි මුල් ඉඳුරම් නසන අවසන් ආරම්භය.</li>
                            <li>ඵලය තුළින් අරමුණ – නිවන අත්විඳීම හා විවේචනාත්මක සන්සුන් සංහිතාව.</li>
                        </ul>`,level3:`<div class="content-box">
                    <h3 class="text-2xl font-bold text-center mb-6 text-blue-200">ලෝකූත්තර ඵල සිතුවල දෙවැනි ධ්‍යානයේ පැහැදිලි කිරීම</h3>
                    <div class="grid-3">
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">40</p>
                            <p class="font-bold">ලෝකූත්තර සිත්</p>
                            <p class="text-sm text-slate-200 mt-2">ඵල සිතුවල පළමු අදියර සෝතාපත්ති; ධ්‍යානය අනුව 5 වර්ගයට බෙදේ.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">35</p>
                            <p class="font-bold">චෛතසික සංයුතිය</p>
                            <p class="text-sm text-slate-200 mt-2">විචාර-ප්‍රීති-සුඛ-ඒකාග්‍රතා + ලෝකූත්තර විශේෂ; විතර්කය නොමැති නිසා 35.</p>
                        </div>
                        <div class="content-box">
                            <p class="text-5xl font-black mb-2 text-blue-200">89 / 121</p>
                            <p class="font-bold">සම්පූර්ණ චිත්ත පද්ධතිය</p>
                            <p class="text-sm text-slate-200 mt-2">මෙය සෝතාපත්ති ඵලවල දෙවැනි ධ්‍යානය – ලෝකූත්තර ව්‍යුහයේ පළමු අදියර.</p>
                        </div>
                    </div>
                    <div class="content-box highlight" style="margin-top: 1.6rem;">
                        <h4 class="font-bold text-lg mb-4">ද්විතීය ධ්‍යානයේ විශේෂ ලක්ෂණ</h4>
                        <div class="grid-4">
                            <span class="badge">විතර්කය නැතිවීම</span>
                            <span class="badge">විචාර-ප්‍රීති-සුඛ</span>
                            <span class="badge">තවත් නිශ්ශබ්ද බවක්</span>
                            <span class="badge">ප්‍රතිඵල</span>`,level4:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">ප්‍රතිඵල</h3>
                        <ul>
                            <li>මග්ගයෙන් නසාගත් කෙලෙස්වල ප්‍රතිඵලය අනුභව කරමින් නිවන සුවය සකස් කරයි.</li>
                            <li>සෝතාපත්ති නිරෝධය නිසා කාමරාග සහ පටිඝ ශක්තිමත් ලෙස අඩුවෙයි.</li>
                            <li>දෙවැනි ධ්‍යානයේ සමාධිය නිසා අභ්‍යන්තර සන්සුන් භාවය තවත් ගැඹුරු වෙයි.</li>
                        </ul>
                    </div>
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">ප්‍රතිඵල ප්‍රතිඵල</h3>
                        <ul>
                            <li>ඵල සමාපත්තිය නිතර භාවිතයෙන් නිවන අත්දැකීම ශක්තිමත් කරගන්න.</li>
                            <li>විතර්කය නැතිවූ සමාධිය රැක ගැනීමට නිරන්තර සතිපට්ඨාන භාවිතා කරන්න.</li>
                            <li>අනාගත සකදාගාමී මග්ගයට පහසු වීමට දෛනික වාසියක් ලෙස හිත, වචන, කම්මන්ත පිරිසිදු කිරීම.</li>
                        </ul>`,level5:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">ප්‍රායෝගික සටහන්</h3>
                        <ul>
                            <li>ඵල සමාපත්තිය තුළින් දෙවැනි ධ්‍යානයේ සමාධිය වඩා ගැඹුරුව යයි; නිවන සුවය ඉතා සැහැල්ලු බවක් ලෙස දැනේ.</li>
                            <li>සකදාගාමී මග්ගය වෙත ගමන් කරන විට, මෙම ඵල සමාපත්තිය අනුගමනය කළහොත් උසස් සමාධිය රැකගත හැක.</li>
                            <li>නිවන අත්දැකීම නිතර සිහිපත් කර ගැනීමෙන් සංසර බිය හා සංවේග බොහෝවිට ක්‍රියාවලියට රස දෙයි.</li>
                        </ul>`,level6:`<div class="grid-2">
                    <div class="content-box">
                        <h3 class="font-bold text-lg mb-3 text-blue-200">ප්‍රතිඵල ප්‍රතිඵල</h3>
                        <ul>
                            <li>ඵල සමාපත්තිය නිතර භාවිතයෙන් නිවන අත්දැකීම ශක්තිමත් කරගන්න.</li>
                            <li>විතර්කය නැතිවූ සමාධිය රැක ගැනීමට නිරන්තර සතිපට්ඨාන භාවිතා කරන්න.</li>
                            <li>අනාගත සකදාගාමී මග්ගයට පහසු වීමට දෛනික වාසියක් ලෙස හිත, වචන, කම්මන්ත පිරිසිදු කිරීම.</li>
                        </ul>`,level7:null}},40:{id:40,title:"ද්විතීය ධ්‍යානයේ සකදාගාමී මග්ග චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},41:{id:41,title:"ද්විතීය ධ්‍යානයේ සකදාගාමී ඵල චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},42:{id:42,title:"ද්විතීය ධ්‍යාන අනාගාමි මග්ග චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},43:{id:43,title:"ද්විතීය ධ්‍යානයේ අනාගාමි ඵල චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},44:{id:44,title:"ද්විතීය ධ්‍යානයේ අරහත්ත මග්ග චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}},45:{id:45,title:"ද්විතීය ධ්‍යානයේ අරහත්ත ඵල චිත්තය",levels:{level1:null,level2:null,level3:null,level4:null,level5:null,level6:null,level7:null}}},zv=Tv||{};function Ov(e){var l,s,r,a,i,o,c,h;const n=Yc().find(p=>p.id===parseInt(e));if(!n)return null;const t=zv[e];return{id:e,citta:n,levels:{level1:((l=t==null?void 0:t.levels)==null?void 0:l.level1)||Iv(n),level2:((s=t==null?void 0:t.levels)==null?void 0:s.level2)||Uv(n),level3:((r=t==null?void 0:t.levels)==null?void 0:r.level3)||Mv(n),level4:((a=t==null?void 0:t.levels)==null?void 0:a.level4)||Dv(n),level5:((i=t==null?void 0:t.levels)==null?void 0:i.level5)||Wv(n),level6:((o=t==null?void 0:t.levels)==null?void 0:o.level6)||$v(n),level7:((c=t==null?void 0:t.levels)==null?void 0:c.level7)||Bv(n),summary:(h=t==null?void 0:t.levels)==null?void 0:h.summary}}}function Iv(e){return{summary:[`${e.category} සිතක්`,`${e.type} ලෝකයේ`,`චෛතසික ${e.chaithasikaCount}ක් සහිත`],example:e.descriptionSi}}function Uv(e){return{words:e.name.split(" ").filter(t=>t.length>2).map(t=>({word:t,meaning:`${t} වචනයේ අර්ථය...`,explanation:"විස්තරය..."}))}}function Mv(e){return{categories:[{name:e.category,description:`${e.category} සිත්`},{name:e.subcategory,description:`${e.subcategory} වර්ගය`},{name:e.type,description:`${e.type} ලෝකය`}]}}function Dv(e){return{count:e.chaithasikaCount,groups:{common:["ඵස්ස","වේදනා","සඤ්ඤා","චේතනා","ඒකග්ගතා","ජීවිතින්ද්‍රිය","මනසිකාර"],...e.category==="අකුසල්"?{unwholesome:["මෝහ","අහිරික","අනොත්තප්ප","උද්ධච්ච"]}:{}}}}function Wv(e){return{examples:[`උදාහරණ 1: ${e.name} ඇතිවන අවස්ථාවක්...`,"උදාහරණ 2: ප්‍රායෝගික ජීවිතයේදී...","උදාහරණ 3: මෙය සිදුවන විට..."]}}function $v(e){return{position:e.id,hetu:{category:e.category,subcategory:e.subcategory,type:e.type},analysis:`${e.name} - ගැඹුරු විශ්ලේෂණය`}}function Bv(e){const n=e.category==="අකුසල්";return{vipaka:n?["නිරය ගමනය","ප්‍රේත ලෝකය","සසර දිගු වීම"]:["සුගති ගමනය","කුසල විපාක","මාර්ගයට ළඟා වීම"],remedies:n?["සම්මා දිට්ඨිය වැඩීම","කල්‍යාණ මිත්‍රයන් සමඟ එකතු වීම","ධර්මය අසන්නට යාම"]:["කුසල සිත වැඩීම","ධර්ම ශ්‍රවණය","ධ්‍යාන භාවනා"]}}function Av(){const{id:e}=lv(),[n,t]=E.useState(null),[l,s]=E.useState(null),[r,a]=E.useState({lvl1:!0,lvl2:!1,lvl3:!1,lvl4:!1,lvl5:!1,lvl6:!1,lvl7:!1});E.useEffect(()=>{const c=Fv(e);if(t(c),c){const h=Ov(e);s(h)}},[e]);const i=c=>{a(h=>({...h,[c]:!h[c]}))};if(!n||!l)return d.jsx("div",{className:"citta-detail",children:d.jsx("div",{className:"container",children:d.jsx("p",{children:"Loading..."})})});const o=l.levels;return d.jsx("div",{className:"citta-detail",children:d.jsxs("div",{className:"container",children:[d.jsxs(vs,{to:"/",className:"back-link",children:[d.jsx("i",{className:"fas fa-arrow-left"})," ආපසු"]}),d.jsx("div",{className:"hero-header",children:d.jsxs("div",{className:"hero-content",children:[d.jsxs("div",{className:"hero-title-section",children:[d.jsx("i",{className:"fas fa-brain hero-icon"}),d.jsxs("div",{children:[d.jsx("h1",{className:"hero-title",children:n.name}),d.jsx("p",{className:"hero-subtitle",children:n.descriptionSi})]})]}),d.jsxs("div",{className:"hero-badges",children:[d.jsxs("span",{className:"hero-badge",children:["ID: ",n.id]}),d.jsx("span",{className:"hero-badge",children:n.category}),d.jsx("span",{className:"hero-badge",children:n.type}),d.jsxs("span",{className:"hero-badge",children:[n.chaithasikaCount," චෛතසික"]})]})]})}),d.jsxs("div",{className:"sections",children:[d.jsx(Sn,{id:"lvl1",title:"මට්ටම 1 • සරලම අර්ථය",icon:"fa-lightbulb",color:"green",isExpanded:r.lvl1,onToggle:()=>i("lvl1"),children:d.jsx(Vv,{citta:n,levelData:o.level1})}),d.jsx(Sn,{id:"lvl2",title:"මට්ටම 2 • වචන විග්‍රහය",icon:"fa-book",color:"blue",isExpanded:r.lvl2,onToggle:()=>i("lvl2"),children:d.jsx(Hv,{citta:n,levelData:o.level2})}),d.jsx(Sn,{id:"lvl3",title:"මට්ටම 3 • අභිධර්ම වර්ගීකරණය",icon:"fa-brain",color:"purple",isExpanded:r.lvl3,onToggle:()=>i("lvl3"),children:d.jsx(Qv,{citta:n,levelData:o.level3})}),d.jsx(Sn,{id:"lvl4",title:`මට්ටම 4 • චෛතසික සංයුතිය (${n.chaithasikaCount})`,icon:"fa-heart",color:"orange",isExpanded:r.lvl4,onToggle:()=>i("lvl4"),children:d.jsx(Kv,{citta:n,levelData:o.level4})}),d.jsx(Sn,{id:"lvl5",title:"මට්ටම 5 • උදාහරණ",icon:"fa-exclamation-circle",color:"red",isExpanded:r.lvl5,onToggle:()=>i("lvl5"),children:d.jsx(Yv,{citta:n,levelData:o.level5})}),d.jsx(Sn,{id:"lvl6",title:"මට්ටම 6 • ගැඹුරු අභිධර්ම විශ්ලේෂණය",icon:"fa-brain",color:"indigo",isExpanded:r.lvl6,onToggle:()=>i("lvl6"),children:d.jsx(Gv,{citta:n,levelData:o.level6})}),d.jsx(Sn,{id:"lvl7",title:"මට්ටම 7 • විපාක හා ප්‍රතිකාර",icon:"fa-exclamation-circle",color:"red",isExpanded:r.lvl7,onToggle:()=>i("lvl7"),children:d.jsx(Xv,{citta:n,levelData:o.level7})})]}),d.jsxs("div",{className:"summary-section",children:[d.jsxs("h2",{className:"summary-title",children:[d.jsx("i",{className:"fas fa-info-circle"}),"සාරාංශය – ඉක්මන් සිහිකිරීම"]}),d.jsx(qv,{citta:n,levelData:o.summary})]}),d.jsxs("div",{className:"footer-section",children:[d.jsx("p",{className:"footer-title",children:"සාධු! සාධු! සාධු!"}),d.jsx("p",{className:"footer-subtitle",children:n.name})]})]})})}function Sn({id:e,title:n,icon:t,color:l,isExpanded:s,onToggle:r,children:a}){const i={green:"green",blue:"blue",purple:"purple",orange:"orange",red:"red",indigo:"indigo"},o={green:"#059669",blue:"#2563eb",purple:"#7c3aed",orange:"#f59e0b",red:"#dc2626",indigo:"#6366f1"};return d.jsxs("div",{className:"section-card",children:[d.jsxs("button",{className:`section-header ${i[l]}`,onClick:r,children:[d.jsxs("div",{className:"section-title-content",children:[d.jsx("i",{className:`fas ${t||"fa-circle"} section-icon`,style:{color:o[l]}}),d.jsx("h2",{className:"section-title",children:n})]}),d.jsx("i",{className:`fas fa-chevron-${s?"up":"down"} section-chevron`,style:{color:o[l]}})]}),s&&d.jsx("div",{className:`section-content ${s?"expanded":""}`,id:e,children:a})]})}const Gc=e=>e?typeof e=="string"?e:typeof e=="object"&&typeof e.html=="string"?e.html:null:null,Dn=e=>{const n=Gc(e);return typeof n=="string"&&/<\/?[a-z][\s\S]*>/i.test(n.trim())};function Wn({content:e}){const n=Gc(e);return n?d.jsx("div",{className:"rich-html-block",dangerouslySetInnerHTML:{__html:n}}):null}function Vv({citta:e,levelData:n}){return Dn(n)?d.jsx(Wn,{content:n}):d.jsxs("div",{className:"content-box green",children:[d.jsx("h3",{className:"text-2xl font-bold text-green-900 mb-6 text-center",children:"ඉතා සරලෙන් කිව්වොත්..."}),d.jsxs("div",{className:"grid-2",children:[d.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-md",children:[d.jsxs("p",{className:"flex items-center gap-3 mb-3",children:[d.jsx("span",{className:"text-4xl",children:"😐"}),d.jsxs("span",{className:"text-lg",children:[d.jsx("strong",{children:e.category==="අකුසල්"?"අකුසල":"කුසල"})," සිතක්"]})]}),d.jsxs("p",{className:"flex items-center gap-3 mb-3",children:[d.jsx("span",{className:"text-4xl",children:"📍"}),d.jsxs("span",{className:"text-lg",children:[d.jsx("strong",{children:e.type})," ලෝකයේ"]})]}),d.jsxs("p",{className:"flex items-center gap-3",children:[d.jsx("span",{className:"text-4xl",children:"🌱"}),d.jsxs("span",{className:"text-lg",children:[d.jsx("strong",{children:"තමන්ටම"})," ඇතිවුණා"]})]})]}),d.jsxs("div",{className:"content-box yellow",children:[d.jsx("p",{className:"font-bold text-yellow-900 mb-3",children:"උදාහරණ:"}),d.jsx("p",{className:"italic leading-relaxed text-lg text-gray-700",children:e.descriptionSi})]})]})]})}function Hv({citta:e,levelData:n}){if(Dn(n))return d.jsx(Wn,{content:n});const t=n;if(typeof t=="string")return d.jsx("div",{className:"space-y-6",children:d.jsx("div",{className:"bg-white p-6 rounded-xl shadow-md",children:d.jsx("p",{className:"text-lg leading-relaxed",children:t})})});const l=(t==null?void 0:t.words)||e.name.split(" ").filter(s=>s.length>2);return d.jsx("div",{className:"space-y-6",children:d.jsx("div",{className:"grid-3",children:l.slice(0,3).map((s,r)=>{const a=typeof s=="string"?{word:s}:s;return d.jsxs("div",{className:`content-box ${r===0?"gray":r===1?"purple":"green-border"}`,children:[d.jsx("h4",{className:"font-bold text-xl mb-3",children:a.word}),d.jsx("p",{className:"text-lg",children:a.meaning||"වචන විග්‍රහය..."}),a.explanation&&d.jsx("p",{className:"text-sm mt-2 text-gray-600",children:a.explanation})]},r)})})})}function Qv({citta:e,levelData:n}){return Dn(n)?d.jsx(Wn,{content:n}):d.jsxs("div",{className:"content-box purple",children:[d.jsx("h3",{className:"text-2xl font-bold text-purple-900 mb-6 text-center",children:"මෙම සිත අයත් වන්නේ..."}),d.jsxs("div",{className:"grid-3",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center shadow-lg",children:[d.jsx("div",{className:"text-5xl mb-3",children:e.id}),d.jsx("p",{className:"font-bold text-purple-700",children:"චිත්ත අංකය"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center shadow-lg",children:[d.jsx("p",{className:"font-bold text-purple-700",children:e.category}),d.jsx("p",{className:"text-sm text-purple-600 mt-2",children:e.categoryEn})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center shadow-lg",children:[d.jsx("p",{className:"font-bold text-purple-700",children:e.type}),d.jsx("p",{className:"text-sm text-purple-600 mt-2",children:e.typeEn})]})]})]})}function Kv({citta:e,levelData:n}){if(Dn(n))return d.jsx(Wn,{content:n});const t=["ඵස්ස","වේදනා","සඤ්ඤා","චේතනා","ඒකග්ගතා","ජීවිතින්ද්‍රිය","මනසිකාර"],l=["මෝහ","අහිරික","අනොත්තප්ප","උද්ධච්ච"];return d.jsxs("div",{className:"content-box orange",children:[d.jsx("div",{className:"text-center mb-8",children:d.jsxs("p",{className:"text-5xl font-black text-gray-800",children:["චෛතසික ",e.chaithasikaCount,"ක්!"]})}),d.jsxs("div",{className:"grid-2",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-xl",children:[d.jsx("h4",{className:"font-bold text-blue-800 text-xl mb-4",children:"සබ්බ චිත්ත සාධාරණ 7"}),d.jsx("div",{className:"grid-2 gap-3",children:t.map((s,r)=>d.jsx("div",{className:"bg-blue-100 p-3 rounded text-center",children:s},r))})]}),e.category==="අකුසල්"&&d.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-xl",children:[d.jsx("h4",{className:"font-bold text-red-800 text-xl mb-4",children:"අකුසල සාධාරණ 4"}),d.jsx("div",{className:"space-y-3",children:l.map((s,r)=>d.jsx("div",{className:"bg-red-100 p-3 rounded text-center",children:s},r))})]})]})]})}function Yv({citta:e,levelData:n}){const t=n;if(typeof t=="string")return d.jsx("div",{className:"content-box red",children:d.jsx("div",{className:"bg-white p-6 rounded-xl shadow-md",children:d.jsx("p",{className:"text-lg leading-relaxed",children:t})})});const l=(t==null?void 0:t.examples)||["උදාහරණ 1: මෙම සිත ඇතිවන අවස්ථා...","උදාහරණ 2: ප්‍රායෝගික ජීවිතයේදී...","උදාහරණ 3: මෙය සිදුවන විට..."];return d.jsxs("div",{className:"content-box red",children:[d.jsxs("h3",{className:"text-3xl font-bold text-red-900 mb-8 text-center",children:[e.name," - උදාහරණ"]}),d.jsx("div",{className:"grid-2 gap-6",children:l.map((s,r)=>d.jsx("div",{className:"bg-white p-5 rounded-xl shadow-lg border-l-8 border-gray-700",children:d.jsx("p",{className:"text-lg font-medium",children:s})},r))})]})}function Gv({citta:e,levelData:n}){return Dn(n)?d.jsx(Wn,{content:n}):d.jsx("div",{className:"content-box indigo",children:d.jsxs("div",{className:"grid-2",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl",children:[d.jsx("h4",{className:"font-bold text-xl text-indigo-900 mb-4",children:"89 සිත් පද්ධතියේ තැන"}),d.jsx("p",{className:"text-5xl font-bold text-center text-indigo-700 my-6",children:e.id}),d.jsxs("p",{className:"text-center",children:[e.category," සිත් අතරින්"]})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl",children:[d.jsx("h4",{className:"font-bold text-xl text-indigo-900 mb-4",children:"හේතු විභාගය"}),d.jsxs("ul",{className:"space-y-3",children:[d.jsxs("li",{children:[d.jsx("strong",{children:"වර්ගය:"})," ",e.subcategory]}),d.jsxs("li",{children:[d.jsx("strong",{children:"ලෝකය:"})," ",e.type]}),d.jsxs("li",{children:[d.jsx("strong",{children:"චෛතසික:"})," ",e.chaithasikaCount,"ක්"]}),d.jsxs("li",{children:[d.jsx("strong",{children:"වර්ගීකරණය:"})," ",e.category]})]})]})]})})}function Xv({citta:e,levelData:n}){if(Dn(n))return d.jsx(Wn,{content:n});const t=e.category==="අකුසල්";return d.jsxs("div",{className:"space-y-8",children:[t?d.jsxs("div",{className:"content-box red",children:[d.jsx("h3",{className:"text-2xl font-bold text-red-900 mb-6 text-center",children:"අනිෂ්ට විපාක"}),d.jsxs("div",{className:"grid-3",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"🔥"}),d.jsx("p",{className:"font-bold",children:"නිරය ගමනය"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"👻"}),d.jsx("p",{className:"font-bold",children:"ප්‍රේත ලෝකය"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"🔄"}),d.jsx("p",{className:"font-bold",children:"සසර දිගු වීම"})]})]})]}):d.jsxs("div",{className:"content-box green",children:[d.jsx("h3",{className:"text-2xl font-bold text-green-900 mb-6 text-center",children:"ශුභ විපාක"}),d.jsxs("div",{className:"grid-3",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"🌟"}),d.jsx("p",{className:"font-bold",children:"සුගති ගමනය"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"✨"}),d.jsx("p",{className:"font-bold",children:"කුසල විපාක"})]}),d.jsxs("div",{className:"bg-white p-6 rounded-2xl text-center",children:[d.jsx("p",{className:"text-6xl mb-3",children:"🕊️"}),d.jsx("p",{className:"font-bold",children:"මාර්ගයට ළඟා වීම"})]})]})]}),d.jsxs("div",{className:"content-box green-border",children:[d.jsx("h3",{className:"text-2xl font-bold text-green-900 mb-6 text-center",children:t?"ප්‍රතිකාර – දුරු කරන්නේ කෙසේද?":"වැඩිදියුණු කරන්නේ කෙසේද?"}),d.jsxs("div",{className:"grid-2",children:[d.jsxs("div",{className:"bg-white p-6 rounded-2xl",children:[d.jsx("h4",{className:"font-bold text-xl text-green-800 mb-4",children:"කළ යුතු දේ"}),d.jsx("ul",{className:"space-y-3",children:t?d.jsxs(d.Fragment,{children:[d.jsx("li",{children:"සම්මා දිට්ඨිය වැඩීම"}),d.jsx("li",{children:"කල්‍යාණ මිත්‍රයන් සමඟ එකතු වීම"}),d.jsx("li",{children:"ධර්මය අසන්නට යාම"}),d.jsx("li",{children:"යෝනිසෝ මනසිකාරය"})]}):d.jsxs(d.Fragment,{children:[d.jsx("li",{children:"කුසල සිත වැඩීම"}),d.jsx("li",{children:"ධර්ම ශ්‍රවණය"}),d.jsx("li",{children:"ධ්‍යාන භාවනා"}),d.jsx("li",{children:"සීලය පවත්වා ගැනීම"})]})})]}),d.jsx("div",{className:"bg-gradient-to-r from-green-200 to-emerald-200 p-6 rounded-2xl",children:d.jsx("p",{className:"text-xl font-bold text-green-900 text-center",children:t?"දිට්ඨිය නැති කළොත් ලෝභයත් නැත!":"කුසල සිත වැඩීම මාර්ගයට මග!"})})]})]})]})}function qv({citta:e,levelData:n}){return Dn(n)?d.jsx(Wn,{content:n}):d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"summary-grid",children:[d.jsxs("div",{className:"summary-card",children:[d.jsx("p",{className:"text-6xl mb-3",children:"📍"}),d.jsx("p",{className:"text-2xl font-bold",children:e.category})]}),d.jsxs("div",{className:"summary-card",children:[d.jsx("p",{className:"text-6xl mb-3",children:"🌐"}),d.jsx("p",{className:"text-2xl font-bold",children:e.type})]}),d.jsxs("div",{className:"summary-card",children:[d.jsx("p",{className:"text-6xl mb-3",children:"❤️"}),d.jsxs("p",{className:"text-2xl font-bold",children:[e.chaithasikaCount," චෛතසික"]})]}),d.jsxs("div",{className:"summary-card",children:[d.jsx("p",{className:"text-6xl mb-3",children:"#"}),d.jsxs("p",{className:"text-2xl font-bold",children:["අංක ",e.id]})]})]}),d.jsx("p",{className:"summary-highlight",children:e.name})]})}function Jv({children:e}){return d.jsxs("div",{className:"app",children:[d.jsx("nav",{className:"navbar",children:d.jsxs("div",{className:"nav-container",children:[d.jsxs(vs,{to:"/",className:"nav-logo",children:[d.jsx("i",{className:"fas fa-lotus"}),d.jsx("span",{children:"අභිධර්මය"})]}),d.jsxs("ul",{className:"nav-menu",children:[d.jsx("li",{children:d.jsx(vs,{to:"/",children:"මුල් පිටුව"})}),d.jsx("li",{children:d.jsx("a",{href:"#citta-table",children:"චිත්ත වගුව"})})]})]})}),d.jsx("main",{className:"main-content",children:e}),d.jsx("footer",{className:"footer",children:d.jsx("p",{children:"© 2024 අභිධර්මය - චිත්ත චෛතසික මෙවලම"})})]})}function Zv(){return d.jsx(Jv,{children:d.jsxs(bv,{children:[d.jsx(la,{path:"/",element:d.jsx(Lv,{})}),d.jsx(la,{path:"/citta/:id",element:d.jsx(Av,{})})]})})}dr.createRoot(document.getElementById("root")).render(d.jsx(To.StrictMode,{children:d.jsx(Cv,{children:d.jsx(Zv,{})})}));
