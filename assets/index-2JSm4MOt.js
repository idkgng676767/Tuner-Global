(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var Vd={exports:{}},Wl={};var sx;function ME(){if(sx)return Wl;sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,l){var u=null;if(l!==void 0&&(u=""+l),s.key!==void 0&&(u=""+s.key),"key"in s){l={};for(var f in s)f!=="key"&&(l[f]=s[f])}else l=s;return s=l.ref,{$$typeof:o,type:a,key:u,ref:s!==void 0?s:null,props:l}}return Wl.Fragment=t,Wl.jsx=n,Wl.jsxs=n,Wl}var ox;function EE(){return ox||(ox=1,Vd.exports=ME()),Vd.exports}var V=EE(),kd={exports:{}},ql={},Xd={exports:{}},Wd={};var lx;function bE(){return lx||(lx=1,(function(o){function t(z,G){var tt=z.length;z.push(G);t:for(;0<tt;){var ht=tt-1>>>1,vt=z[ht];if(0<s(vt,G))z[ht]=G,z[tt]=vt,tt=ht;else break t}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var G=z[0],tt=z.pop();if(tt!==G){z[0]=tt;t:for(var ht=0,vt=z.length,I=vt>>>1;ht<I;){var K=2*(ht+1)-1,St=z[K],yt=K+1,At=z[yt];if(0>s(St,tt))yt<vt&&0>s(At,St)?(z[ht]=At,z[yt]=tt,ht=yt):(z[ht]=St,z[K]=tt,ht=K);else if(yt<vt&&0>s(At,tt))z[ht]=At,z[yt]=tt,ht=yt;else break t}}return G}function s(z,G){var tt=z.sortIndex-G.sortIndex;return tt!==0?tt:z.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;o.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();o.unstable_now=function(){return u.now()-f}}var p=[],d=[],_=1,v=null,g=3,x=!1,M=!1,E=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var G=n(d);G!==null;){if(G.callback===null)a(d);else if(G.startTime<=z)a(d),G.sortIndex=G.expirationTime,t(p,G);else break;G=n(d)}}function P(z){if(E=!1,D(z),!M)if(n(p)!==null)M=!0,N||(N=!0,W());else{var G=n(d);G!==null&&X(P,G.startTime-z)}}var N=!1,O=-1,T=5,L=-1;function k(){return y?!0:!(o.unstable_now()-L<T)}function B(){if(y=!1,N){var z=o.unstable_now();L=z;var G=!0;try{t:{M=!1,E&&(E=!1,A(O),O=-1),x=!0;var tt=g;try{e:{for(D(z),v=n(p);v!==null&&!(v.expirationTime>z&&k());){var ht=v.callback;if(typeof ht=="function"){v.callback=null,g=v.priorityLevel;var vt=ht(v.expirationTime<=z);if(z=o.unstable_now(),typeof vt=="function"){v.callback=vt,D(z),G=!0;break e}v===n(p)&&a(p),D(z)}else a(p);v=n(p)}if(v!==null)G=!0;else{var I=n(d);I!==null&&X(P,I.startTime-z),G=!1}}break t}finally{v=null,g=tt,x=!1}G=void 0}}finally{G?W():N=!1}}}var W;if(typeof w=="function")W=function(){w(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,lt=$.port2;$.port1.onmessage=B,W=function(){lt.postMessage(null)}}else W=function(){S(B,0)};function X(z,G){O=S(function(){z(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var tt=g;g=G;try{return z()}finally{g=tt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var tt=g;g=z;try{return G()}finally{g=tt}},o.unstable_scheduleCallback=function(z,G,tt){var ht=o.unstable_now();switch(typeof tt=="object"&&tt!==null?(tt=tt.delay,tt=typeof tt=="number"&&0<tt?ht+tt:ht):tt=ht,z){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=tt+vt,z={id:_++,callback:G,priorityLevel:z,startTime:tt,expirationTime:vt,sortIndex:-1},tt>ht?(z.sortIndex=tt,t(d,z),n(p)===null&&z===n(d)&&(E?(A(O),O=-1):E=!0,X(P,tt-ht))):(z.sortIndex=vt,t(p,z),M||x||(M=!0,N||(N=!0,W()))),z},o.unstable_shouldYield=k,o.unstable_wrapCallback=function(z){var G=g;return function(){var tt=g;g=G;try{return z.apply(this,arguments)}finally{g=tt}}}})(Wd)),Wd}var cx;function TE(){return cx||(cx=1,Xd.exports=bE()),Xd.exports}var qd={exports:{}},le={};var ux;function AE(){if(ux)return le;ux=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,y={};function S(I,K,St){this.props=I,this.context=K,this.refs=y,this.updater=St||M}S.prototype.isReactComponent={},S.prototype.setState=function(I,K){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,K,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function A(){}A.prototype=S.prototype;function w(I,K,St){this.props=I,this.context=K,this.refs=y,this.updater=St||M}var D=w.prototype=new A;D.constructor=w,E(D,S.prototype),D.isPureReactComponent=!0;var P=Array.isArray;function N(){}var O={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(I,K,St){var yt=St.ref;return{$$typeof:o,type:I,key:K,ref:yt!==void 0?yt:null,props:St}}function k(I,K){return L(I.type,K,I.props)}function B(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function W(I){var K={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(St){return K[St]})}var $=/\/+/g;function lt(I,K){return typeof I=="object"&&I!==null&&I.key!=null?W(""+I.key):K.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(N,N):(I.status="pending",I.then(function(K){I.status==="pending"&&(I.status="fulfilled",I.value=K)},function(K){I.status==="pending"&&(I.status="rejected",I.reason=K)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function z(I,K,St,yt,At){var ct=typeof I;(ct==="undefined"||ct==="boolean")&&(I=null);var Mt=!1;if(I===null)Mt=!0;else switch(ct){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(I.$$typeof){case o:case t:Mt=!0;break;case _:return Mt=I._init,z(Mt(I._payload),K,St,yt,At)}}if(Mt)return At=At(I),Mt=yt===""?"."+lt(I,0):yt,P(At)?(St="",Mt!=null&&(St=Mt.replace($,"$&/")+"/"),z(At,K,St,"",function(ne){return ne})):At!=null&&(B(At)&&(At=k(At,St+(At.key==null||I&&I.key===At.key?"":(""+At.key).replace($,"$&/")+"/")+Mt)),K.push(At)),1;Mt=0;var Tt=yt===""?".":yt+":";if(P(I))for(var Ht=0;Ht<I.length;Ht++)yt=I[Ht],ct=Tt+lt(yt,Ht),Mt+=z(yt,K,St,ct,At);else if(Ht=x(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(yt=I.next()).done;)yt=yt.value,ct=Tt+lt(yt,Ht++),Mt+=z(yt,K,St,ct,At);else if(ct==="object"){if(typeof I.then=="function")return z(X(I),K,St,yt,At);throw K=String(I),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function G(I,K,St){if(I==null)return I;var yt=[],At=0;return z(I,yt,"","",function(ct){return K.call(St,ct,At++)}),yt}function tt(I){if(I._status===-1){var K=I._result;K=K(),K.then(function(St){(I._status===0||I._status===-1)&&(I._status=1,I._result=St)},function(St){(I._status===0||I._status===-1)&&(I._status=2,I._result=St)}),I._status===-1&&(I._status=0,I._result=K)}if(I._status===1)return I._result.default;throw I._result}var ht=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},vt={map:G,forEach:function(I,K,St){G(I,function(){K.apply(this,arguments)},St)},count:function(I){var K=0;return G(I,function(){K++}),K},toArray:function(I){return G(I,function(K){return K})||[]},only:function(I){if(!B(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=v,le.Children=vt,le.Component=S,le.Fragment=n,le.Profiler=s,le.PureComponent=w,le.StrictMode=a,le.Suspense=p,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,K,St){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var yt=E({},I.props),At=I.key;if(K!=null)for(ct in K.key!==void 0&&(At=""+K.key),K)!T.call(K,ct)||ct==="key"||ct==="__self"||ct==="__source"||ct==="ref"&&K.ref===void 0||(yt[ct]=K[ct]);var ct=arguments.length-2;if(ct===1)yt.children=St;else if(1<ct){for(var Mt=Array(ct),Tt=0;Tt<ct;Tt++)Mt[Tt]=arguments[Tt+2];yt.children=Mt}return L(I.type,At,yt)},le.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},le.createElement=function(I,K,St){var yt,At={},ct=null;if(K!=null)for(yt in K.key!==void 0&&(ct=""+K.key),K)T.call(K,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(At[yt]=K[yt]);var Mt=arguments.length-2;if(Mt===1)At.children=St;else if(1<Mt){for(var Tt=Array(Mt),Ht=0;Ht<Mt;Ht++)Tt[Ht]=arguments[Ht+2];At.children=Tt}if(I&&I.defaultProps)for(yt in Mt=I.defaultProps,Mt)At[yt]===void 0&&(At[yt]=Mt[yt]);return L(I,ct,At)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:f,render:I}},le.isValidElement=B,le.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:tt}},le.memo=function(I,K){return{$$typeof:d,type:I,compare:K===void 0?null:K}},le.startTransition=function(I){var K=O.T,St={};O.T=St;try{var yt=I(),At=O.S;At!==null&&At(St,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(N,ht)}catch(ct){ht(ct)}finally{K!==null&&St.types!==null&&(K.types=St.types),O.T=K}},le.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},le.use=function(I){return O.H.use(I)},le.useActionState=function(I,K,St){return O.H.useActionState(I,K,St)},le.useCallback=function(I,K){return O.H.useCallback(I,K)},le.useContext=function(I){return O.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,K){return O.H.useDeferredValue(I,K)},le.useEffect=function(I,K){return O.H.useEffect(I,K)},le.useEffectEvent=function(I){return O.H.useEffectEvent(I)},le.useId=function(){return O.H.useId()},le.useImperativeHandle=function(I,K,St){return O.H.useImperativeHandle(I,K,St)},le.useInsertionEffect=function(I,K){return O.H.useInsertionEffect(I,K)},le.useLayoutEffect=function(I,K){return O.H.useLayoutEffect(I,K)},le.useMemo=function(I,K){return O.H.useMemo(I,K)},le.useOptimistic=function(I,K){return O.H.useOptimistic(I,K)},le.useReducer=function(I,K,St){return O.H.useReducer(I,K,St)},le.useRef=function(I){return O.H.useRef(I)},le.useState=function(I){return O.H.useState(I)},le.useSyncExternalStore=function(I,K,St){return O.H.useSyncExternalStore(I,K,St)},le.useTransition=function(){return O.H.useTransition()},le.version="19.2.7",le}var fx;function Wm(){return fx||(fx=1,qd.exports=AE()),qd.exports}var jd={exports:{}},Wn={};var hx;function RE(){if(hx)return Wn;hx=1;var o=Wm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var u=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Wn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},Wn.flushSync=function(p){var d=u.T,_=a.p;try{if(u.T=null,a.p=2,p)return p()}finally{u.T=d,a.p=_,a.d.f()}},Wn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},Wn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Wn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:x}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Wn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},Wn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Wn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},Wn.requestFormReset=function(p){a.d.r(p)},Wn.unstable_batchedUpdates=function(p,d){return p(d)},Wn.useFormState=function(p,d,_){return u.H.useFormState(p,d,_)},Wn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Wn.version="19.2.7",Wn}var dx;function CE(){if(dx)return jd.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),jd.exports=RE(),jd.exports}var px;function wE(){if(px)return ql;px=1;var o=TE(),t=Wm(),n=CE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,c=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){r=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===c)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==c.return)r=h,c=m;else{for(var b=!1,U=h.child;U;){if(U===r){b=!0,r=h,c=m;break}if(U===c){b=!0,c=h,r=m;break}U=U.sibling}if(!b){for(U=m.child;U;){if(U===r){b=!0,r=m,c=h;break}if(U===c){b=!0,c=m,r=h;break}U=U.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==c)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),w=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),B=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function lt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case P:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case w:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:lt(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return lt(e(i))}catch{}}return null}var X=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,tt={pending:!1,data:null,method:null,action:null},ht=[],vt=-1;function I(e){return{current:e}}function K(e){0>vt||(e.current=ht[vt],ht[vt]=null,vt--)}function St(e,i){vt++,ht[vt]=e.current,e.current=i}var yt=I(null),At=I(null),ct=I(null),Mt=I(null);function Tt(e,i){switch(St(ct,i),St(At,e),St(yt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?wv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=wv(i),e=Dv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(yt),St(yt,e)}function Ht(){K(yt),K(At),K(ct)}function ne(e){e.memoizedState!==null&&St(Mt,e);var i=yt.current,r=Dv(i,e.type);i!==r&&(St(At,e),St(yt,r))}function Jt(e){At.current===e&&(K(yt),K(At)),Mt.current===e&&(K(Mt),Hl._currentValue=tt)}var Fe,ue;function Ut(e){if(Fe===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);Fe=i&&i[1]||"",ue=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Fe+e+ue}var ee=!1;function Kt(e,i){if(!e||ee)return"";ee=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(i){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ut){var ot=ut}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ut){ot=ut}e.call(xt.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=c.DetermineComponentFrameRoot(),b=m[0],U=m[1];if(b&&U){var H=b.split(`
`),nt=U.split(`
`);for(h=c=0;c<H.length&&!H[c].includes("DetermineComponentFrameRoot");)c++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(c===H.length||h===nt.length)for(c=H.length-1,h=nt.length-1;1<=c&&0<=h&&H[c]!==nt[h];)h--;for(;1<=c&&0<=h;c--,h--)if(H[c]!==nt[h]){if(c!==1||h!==1)do if(c--,h--,0>h||H[c]!==nt[h]){var pt=`
`+H[c].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=c&&0<=h);break}}}finally{ee=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?Ut(r):""}function _e(e,i){switch(e.tag){case 26:case 27:case 5:return Ut(e.type);case 16:return Ut("Lazy");case 13:return e.child!==i&&i!==null?Ut("Suspense Fallback"):Ut("Suspense");case 19:return Ut("SuspenseList");case 0:case 15:return Kt(e.type,!1);case 11:return Kt(e.type.render,!1);case 1:return Kt(e.type,!0);case 31:return Ut("Activity");default:return""}}function Re(e){try{var i="",r=null;do i+=_e(e,r),r=e,e=e.return;while(e);return i}catch(c){return`
Error generating stack: `+c.message+`
`+c.stack}}var Ie=Object.prototype.hasOwnProperty,Y=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,pe=o.unstable_shouldYield,Ce=o.unstable_requestPaint,Rt=o.unstable_now,$e=o.unstable_getCurrentPriorityLevel,F=o.unstable_ImmediatePriority,R=o.unstable_UserBlockingPriority,J=o.unstable_NormalPriority,gt=o.unstable_LowPriority,bt=o.unstable_IdlePriority,wt=o.log,Ot=o.unstable_setDisableYieldValue,ft=null,dt=null;function Pt(e){if(typeof wt=="function"&&Ot(e),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,e)}catch{}}var Ft=Math.clz32?Math.clz32:se,Nt=Math.log,Dt=Math.LN2;function se(e){return e>>>=0,e===0?32:31-(Nt(e)/Dt|0)|0}var oe=256,ge=262144,q=4194304;function Ct(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function mt(e,i,r){var c=e.pendingLanes;if(c===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var U=c&134217727;return U!==0?(c=U&~m,c!==0?h=Ct(c):(b&=U,b!==0?h=Ct(b):r||(r=U&~e,r!==0&&(h=Ct(r))))):(U=c&~m,U!==0?h=Ct(U):b!==0?h=Ct(b):r||(r=c&~e,r!==0&&(h=Ct(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function It(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Lt(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Et(){var e=q;return q<<=1,(q&62914560)===0&&(q=4194304),e}function Yt(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function ae(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ln(e,i,r,c,h,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var U=e.entanglements,H=e.expirationTimes,nt=e.hiddenUpdates;for(r=b&~r;0<r;){var pt=31-Ft(r),xt=1<<pt;U[pt]=0,H[pt]=-1;var ot=nt[pt];if(ot!==null)for(nt[pt]=null,pt=0;pt<ot.length;pt++){var ut=ot[pt];ut!==null&&(ut.lane&=-536870913)}r&=~xt}c!==0&&Oe(e,c,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function Oe(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var c=31-Ft(i);e.entangledLanes|=i,e.entanglements[c]=e.entanglements[c]|1073741824|r&261930}function Pi(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var c=31-Ft(r),h=1<<c;h&i|e[c]&i&&(e[c]|=i),r&=~h}}function pi(e,i){var r=i&-i;return r=(r&42)!==0?1:$r(r),(r&(e.suspendedLanes|i))!==0?0:r}function $r(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $o(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function tl(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:$v(e.type))}function el(e,i){var r=G.p;try{return G.p=e,i()}finally{G.p=r}}var kn=Math.random().toString(36).slice(2),gn="__reactFiber$"+kn,Pn="__reactProps$"+kn,Ra="__reactContainer$"+kn,sr="__reactEvents$"+kn,Ac="__reactListeners$"+kn,Gs="__reactHandles$"+kn,nl="__reactResources$"+kn,or="__reactMarker$"+kn;function il(e){delete e[gn],delete e[Pn],delete e[sr],delete e[Ac],delete e[Gs]}function lr(e){var i=e[gn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ra]||r[gn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=zv(e);e!==null;){if(r=e[gn])return r;e=zv(e)}return i}e=r,r=e.parentNode}return null}function cr(e){if(e=e[gn]||e[Ra]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function ts(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function ur(e){var i=e[nl];return i||(i=e[nl]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function yn(e){e[or]=!0}var Rc=new Set,C={};function Z(e,i){st(e,i),st(e+"Capture",i)}function st(e,i){for(C[e]=i,e=0;e<i.length;e++)Rc.add(i[e])}var it=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},Bt={};function Xt(e){return Ie.call(Bt,e)?!0:Ie.call(at,e)?!1:it.test(e)?Bt[e]=!0:(at[e]=!0,!1)}function zt(e,i,r){if(Xt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var c=i.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function qt(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Wt(e,i,r,c){if(c===null)e.removeAttribute(r);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+c)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qt(e,i,r){var c=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var h=c.get,m=c.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:c.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ue(e){if(!e._valueTracker){var i=fe(e)?"checked":"value";e._valueTracker=Qt(e,i,""+e[i])}}function an(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),c="";return e&&(c=fe(e)?e.checked?"true":"false":e.value),e=c,e!==r?(i.setValue(e),!0):!1}function Ze(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ge=/[\n"\\]/g;function He(e){return e.replace(Ge,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function kt(e,i,r,c,h,m,b,U){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$t(i)):e.value!==""+$t(i)&&(e.value=""+$t(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?ve(e,b,$t(i)):r!=null?ve(e,b,$t(r)):c!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),U!=null&&typeof U!="function"&&typeof U!="symbol"&&typeof U!="boolean"?e.name=""+$t(U):e.removeAttribute("name")}function Xn(e,i,r,c,h,m,b,U){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ue(e);return}r=r!=null?""+$t(r):"",i=i!=null?""+$t(i):r,U||i===e.value||(e.value=i),e.defaultValue=i}c=c??h,c=typeof c!="function"&&typeof c!="symbol"&&!!c,e.checked=U?e.checked:!!c,e.defaultChecked=!!c,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Ue(e)}function ve(e,i,r){i==="number"&&Ze(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function Cn(e,i,r,c){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&c&&(e[r].defaultSelected=!0)}else{for(r=""+$t(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,c&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function mi(e,i,r){if(i!=null&&(i=""+$t(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+$t(r):""}function Ji(e,i,r,c){if(i==null){if(c!=null){if(r!=null)throw Error(a(92));if(X(c)){if(1<c.length)throw Error(a(93));c=c[0]}r=c}r==null&&(r=""),i=r}r=$t(i),e.defaultValue=r,c=e.textContent,c===r&&c!==""&&c!==null&&(e.value=c),Ue(e)}function _i(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var Ve=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(e,i,r){var c=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?c?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":c?e.setProperty(i,r):typeof r!="number"||r===0||Ve.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function $i(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var c in r)!r.hasOwnProperty(c)||i!=null&&i.hasOwnProperty(c)||(c.indexOf("--")===0?e.setProperty(c,""):c==="float"?e.cssFloat="":e[c]="");for(var h in i)c=i[h],i.hasOwnProperty(h)&&r[h]!==c&&rn(e,h,c)}else for(var m in i)i.hasOwnProperty(m)&&rn(e,m,i[m])}function ze(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ua=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function es(e){return fr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ca(){}var If=null;function Gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Vs=null;function C0(e){var i=cr(e);if(i&&(e=i.stateNode)){var r=e[Pn]||null;t:switch(e=i.stateNode,i.type){case"input":if(kt(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+He(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var c=r[i];if(c!==e&&c.form===e.form){var h=c[Pn]||null;if(!h)throw Error(a(90));kt(c,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)c=r[i],c.form===e.form&&an(c)}break t;case"textarea":mi(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&Cn(e,!!r.multiple,i,!1)}}}var Hf=!1;function w0(e,i,r){if(Hf)return e(i,r);Hf=!0;try{var c=e(i);return c}finally{if(Hf=!1,(Hs!==null||Vs!==null)&&(pu(),Hs&&(i=Hs,e=Vs,Vs=Hs=null,C0(i),e)))for(i=0;i<e.length;i++)C0(e[i])}}function al(e,i){var r=e.stateNode;if(r===null)return null;var c=r[Pn]||null;if(c===null)return null;r=c[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(e=e.type,c=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!c;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var wa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vf=!1;if(wa)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{Vf=!1}var hr=null,kf=null,Cc=null;function D0(){if(Cc)return Cc;var e,i=kf,r=i.length,c,h="value"in hr?hr.value:hr.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var b=r-e;for(c=1;c<=b&&i[r-c]===h[m-c];c++);return Cc=h.slice(e,1<c?1-c:void 0)}function wc(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Dc(){return!0}function U0(){return!1}function ei(e){function i(r,c,h,m,b){this._reactName=r,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var U in e)e.hasOwnProperty(U)&&(r=e[U],this[U]=r?r(m):m[U]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Dc:U0,this.isPropagationStopped=U0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Dc)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Dc)},persist:function(){},isPersistent:Dc}),i}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uc=ei(ns),sl=v({},ns,{view:0,detail:0}),S1=ei(sl),Xf,Wf,ol,Nc=v({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ol&&(ol&&e.type==="mousemove"?(Xf=e.screenX-ol.screenX,Wf=e.screenY-ol.screenY):Wf=Xf=0,ol=e),Xf)},movementY:function(e){return"movementY"in e?e.movementY:Wf}}),N0=ei(Nc),y1=v({},Nc,{dataTransfer:0}),M1=ei(y1),E1=v({},sl,{relatedTarget:0}),qf=ei(E1),b1=v({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),T1=ei(b1),A1=v({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),R1=ei(A1),C1=v({},ns,{data:0}),L0=ei(C1),w1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},D1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},U1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N1(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=U1[e])?!!i[e]:!1}function jf(){return N1}var L1=v({},sl,{key:function(e){if(e.key){var i=w1[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=wc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?D1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(e){return e.type==="keypress"?wc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),O1=ei(L1),P1=v({},Nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O0=ei(P1),F1=v({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),z1=ei(F1),B1=v({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),I1=ei(B1),G1=v({},Nc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),H1=ei(G1),V1=v({},ns,{newState:0,oldState:0}),k1=ei(V1),X1=[9,13,27,32],Yf=wa&&"CompositionEvent"in window,ll=null;wa&&"documentMode"in document&&(ll=document.documentMode);var W1=wa&&"TextEvent"in window&&!ll,P0=wa&&(!Yf||ll&&8<ll&&11>=ll),F0=" ",z0=!1;function B0(e,i){switch(e){case"keyup":return X1.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ks=!1;function q1(e,i){switch(e){case"compositionend":return I0(i);case"keypress":return i.which!==32?null:(z0=!0,F0);case"textInput":return e=i.data,e===F0&&z0?null:e;default:return null}}function j1(e,i){if(ks)return e==="compositionend"||!Yf&&B0(e,i)?(e=D0(),Cc=kf=hr=null,ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return P0&&i.locale!=="ko"?null:i.data;default:return null}}var Y1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function G0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Y1[e.type]:i==="textarea"}function H0(e,i,r,c){Hs?Vs?Vs.push(c):Vs=[c]:Hs=c,i=yu(i,"onChange"),0<i.length&&(r=new Uc("onChange","change",null,r,c),e.push({event:r,listeners:i}))}var cl=null,ul=null;function Z1(e){Ev(e,0)}function Lc(e){var i=ts(e);if(an(i))return e}function V0(e,i){if(e==="change")return i}var k0=!1;if(wa){var Zf;if(wa){var Kf="oninput"in document;if(!Kf){var X0=document.createElement("div");X0.setAttribute("oninput","return;"),Kf=typeof X0.oninput=="function"}Zf=Kf}else Zf=!1;k0=Zf&&(!document.documentMode||9<document.documentMode)}function W0(){cl&&(cl.detachEvent("onpropertychange",q0),ul=cl=null)}function q0(e){if(e.propertyName==="value"&&Lc(ul)){var i=[];H0(i,ul,e,Gf(e)),w0(Z1,i)}}function K1(e,i,r){e==="focusin"?(W0(),cl=i,ul=r,cl.attachEvent("onpropertychange",q0)):e==="focusout"&&W0()}function Q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lc(ul)}function J1(e,i){if(e==="click")return Lc(i)}function $1(e,i){if(e==="input"||e==="change")return Lc(i)}function tM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gi=typeof Object.is=="function"?Object.is:tM;function fl(e,i){if(gi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),c=Object.keys(i);if(r.length!==c.length)return!1;for(c=0;c<r.length;c++){var h=r[c];if(!Ie.call(i,h)||!gi(e[h],i[h]))return!1}return!0}function j0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y0(e,i){var r=j0(e);e=0;for(var c;r;){if(r.nodeType===3){if(c=e+r.textContent.length,e<=i&&c>=i)return{node:r,offset:i-e};e=c}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=j0(r)}}function Z0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Z0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function K0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Ze(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Ze(e.document)}return i}function Qf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var eM=wa&&"documentMode"in document&&11>=document.documentMode,Xs=null,Jf=null,hl=null,$f=!1;function Q0(e,i,r){var c=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$f||Xs==null||Xs!==Ze(c)||(c=Xs,"selectionStart"in c&&Qf(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),hl&&fl(hl,c)||(hl=c,c=yu(Jf,"onSelect"),0<c.length&&(i=new Uc("onSelect","select",null,i,r),e.push({event:i,listeners:c}),i.target=Xs)))}function is(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Ws={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},th={},J0={};wa&&(J0=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function as(e){if(th[e])return th[e];if(!Ws[e])return e;var i=Ws[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in J0)return th[e]=i[r];return e}var $0=as("animationend"),t_=as("animationiteration"),e_=as("animationstart"),nM=as("transitionrun"),iM=as("transitionstart"),aM=as("transitioncancel"),n_=as("transitionend"),i_=new Map,eh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eh.push("scrollEnd");function ta(e,i){i_.set(e,i),Z(i,[e])}var Oc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Fi=[],qs=0,nh=0;function Pc(){for(var e=qs,i=nh=qs=0;i<e;){var r=Fi[i];Fi[i++]=null;var c=Fi[i];Fi[i++]=null;var h=Fi[i];Fi[i++]=null;var m=Fi[i];if(Fi[i++]=null,c!==null&&h!==null){var b=c.pending;b===null?h.next=h:(h.next=b.next,b.next=h),c.pending=h}m!==0&&a_(r,h,m)}}function Fc(e,i,r,c){Fi[qs++]=e,Fi[qs++]=i,Fi[qs++]=r,Fi[qs++]=c,nh|=c,e.lanes|=c,e=e.alternate,e!==null&&(e.lanes|=c)}function ih(e,i,r,c){return Fc(e,i,r,c),zc(e)}function rs(e,i){return Fc(e,null,null,i),zc(e)}function a_(e,i,r){e.lanes|=r;var c=e.alternate;c!==null&&(c.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,c=m.alternate,c!==null&&(c.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ft(r),e=m.hiddenUpdates,c=e[h],c===null?e[h]=[i]:c.push(i),i.lane=r|536870912),m):null}function zc(e){if(50<Ol)throw Ol=0,hd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var js={};function rM(e,i,r,c){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,i,r,c){return new rM(e,i,r,c)}function ah(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Da(e,i){var r=e.alternate;return r===null?(r=vi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function r_(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Bc(e,i,r,c,h,m){var b=0;if(c=e,typeof e=="function")ah(e)&&(b=1);else if(typeof e=="string")b=uE(e,r,yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=vi(31,r,i,h),e.elementType=L,e.lanes=m,e;case E:return ss(r.children,h,m,i);case y:b=8,h|=24;break;case S:return e=vi(12,r,i,h|2),e.elementType=S,e.lanes=m,e;case P:return e=vi(13,r,i,h),e.elementType=P,e.lanes=m,e;case N:return e=vi(19,r,i,h),e.elementType=N,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:b=10;break t;case A:b=9;break t;case D:b=11;break t;case O:b=14;break t;case T:b=16,c=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),c=null}return i=vi(b,r,i,h),i.elementType=e,i.type=c,i.lanes=m,i}function ss(e,i,r,c){return e=vi(7,e,c,i),e.lanes=r,e}function rh(e,i,r){return e=vi(6,e,null,i),e.lanes=r,e}function s_(e){var i=vi(18,null,null,0);return i.stateNode=e,i}function sh(e,i,r){return i=vi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var o_=new WeakMap;function zi(e,i){if(typeof e=="object"&&e!==null){var r=o_.get(e);return r!==void 0?r:(i={value:e,source:i,stack:Re(i)},o_.set(e,i),i)}return{value:e,source:i,stack:Re(i)}}var Ys=[],Zs=0,Ic=null,dl=0,Bi=[],Ii=0,dr=null,fa=1,ha="";function Ua(e,i){Ys[Zs++]=dl,Ys[Zs++]=Ic,Ic=e,dl=i}function l_(e,i,r){Bi[Ii++]=fa,Bi[Ii++]=ha,Bi[Ii++]=dr,dr=e;var c=fa;e=ha;var h=32-Ft(c)-1;c&=~(1<<h),r+=1;var m=32-Ft(i)+h;if(30<m){var b=h-h%5;m=(c&(1<<b)-1).toString(32),c>>=b,h-=b,fa=1<<32-Ft(i)+h|r<<h|c,ha=m+e}else fa=1<<m|r<<h|c,ha=e}function oh(e){e.return!==null&&(Ua(e,1),l_(e,1,0))}function lh(e){for(;e===Ic;)Ic=Ys[--Zs],Ys[Zs]=null,dl=Ys[--Zs],Ys[Zs]=null;for(;e===dr;)dr=Bi[--Ii],Bi[Ii]=null,ha=Bi[--Ii],Bi[Ii]=null,fa=Bi[--Ii],Bi[Ii]=null}function c_(e,i){Bi[Ii++]=fa,Bi[Ii++]=ha,Bi[Ii++]=dr,fa=i.id,ha=i.overflow,dr=e}var Fn=null,en=null,Ee=!1,pr=null,Gi=!1,ch=Error(a(519));function mr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw pl(zi(i,e)),ch}function u_(e){var i=e.stateNode,r=e.type,c=e.memoizedProps;switch(i[gn]=e,i[Pn]=c,r){case"dialog":Se("cancel",i),Se("close",i);break;case"iframe":case"object":case"embed":Se("load",i);break;case"video":case"audio":for(r=0;r<Fl.length;r++)Se(Fl[r],i);break;case"source":Se("error",i);break;case"img":case"image":case"link":Se("error",i),Se("load",i);break;case"details":Se("toggle",i);break;case"input":Se("invalid",i),Xn(i,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0);break;case"select":Se("invalid",i);break;case"textarea":Se("invalid",i),Ji(i,c.value,c.defaultValue,c.children)}r=c.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||c.suppressHydrationWarning===!0||Rv(i.textContent,r)?(c.popover!=null&&(Se("beforetoggle",i),Se("toggle",i)),c.onScroll!=null&&Se("scroll",i),c.onScrollEnd!=null&&Se("scrollend",i),c.onClick!=null&&(i.onclick=Ca),i=!0):i=!1,i||mr(e,!0)}function f_(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Fn=Fn.return}}function Ks(e){if(e!==Fn)return!1;if(!Ee)return f_(e),Ee=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Rd(e.type,e.memoizedProps)),r=!r),r&&en&&mr(e),f_(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Fv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));en=Fv(e)}else i===27?(i=en,wr(e.type)?(e=Nd,Nd=null,en=e):en=i):en=Fn?Vi(e.stateNode.nextSibling):null;return!0}function os(){en=Fn=null,Ee=!1}function uh(){var e=pr;return e!==null&&(ri===null?ri=e:ri.push.apply(ri,e),pr=null),e}function pl(e){pr===null?pr=[e]:pr.push(e)}var fh=I(null),ls=null,Na=null;function _r(e,i,r){St(fh,i._currentValue),i._currentValue=r}function La(e){e._currentValue=fh.current,K(fh)}function hh(e,i,r){for(;e!==null;){var c=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),e===r)break;e=e.return}}function dh(e,i,r,c){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var U=m;m=h;for(var H=0;H<i.length;H++)if(U.context===i[H]){m.lanes|=r,U=m.alternate,U!==null&&(U.lanes|=r),hh(m.return,r,e),c||(b=null);break t}m=U.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),hh(b,r,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function Qs(e,i,r,c){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var U=h.type;gi(h.pendingProps.value,b.value)||(e!==null?e.push(U):e=[U])}}else if(h===Mt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}h=h.return}e!==null&&dh(i,e,r,c),i.flags|=262144}function Gc(e){for(e=e.firstContext;e!==null;){if(!gi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cs(e){ls=e,Na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return h_(ls,e)}function Hc(e,i){return ls===null&&cs(e),h_(e,i)}function h_(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},Na===null){if(e===null)throw Error(a(308));Na=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Na=Na.next=i;return r}var sM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,c){e.push(c)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},oM=o.unstable_scheduleCallback,lM=o.unstable_NormalPriority,Mn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ph(){return{controller:new sM,data:new Map,refCount:0}}function ml(e){e.refCount--,e.refCount===0&&oM(lM,function(){e.controller.abort()})}var _l=null,mh=0,Js=0,$s=null;function cM(e,i){if(_l===null){var r=_l=[];mh=0,Js=vd(),$s={status:"pending",value:void 0,then:function(c){r.push(c)}}}return mh++,i.then(d_,d_),i}function d_(){if(--mh===0&&_l!==null){$s!==null&&($s.status="fulfilled");var e=_l;_l=null,Js=0,$s=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function uM(e,i){var r=[],c={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){c.status="fulfilled",c.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(c.status="rejected",c.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),c}var p_=z.S;z.S=function(e,i){Qg=Rt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&cM(e,i),p_!==null&&p_(e,i)};var us=I(null);function _h(){var e=us.current;return e!==null?e:Ke.pooledCache}function Vc(e,i){i===null?St(us,us.current):St(us,i.pool)}function m_(){var e=_h();return e===null?null:{parent:Mn._currentValue,pool:e}}var to=Error(a(460)),gh=Error(a(474)),kc=Error(a(542)),Xc={then:function(){}};function __(e){return e=e.status,e==="fulfilled"||e==="rejected"}function g_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Ca,Ca),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,x_(e),e;default:if(typeof i.status=="string")i.then(Ca,Ca);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(c){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=c}},function(c){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=c}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,x_(e),e}throw hs=i,to}}function fs(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(hs=r,to):r}}var hs=null;function v_(){if(hs===null)throw Error(a(459));var e=hs;return hs=null,e}function x_(e){if(e===to||e===kc)throw Error(a(483))}var eo=null,gl=0;function Wc(e){var i=gl;return gl+=1,eo===null&&(eo=[]),g_(eo,e,i)}function vl(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function qc(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function S_(e){function i(Q,j){if(e){var et=Q.deletions;et===null?(Q.deletions=[j],Q.flags|=16):et.push(j)}}function r(Q,j){if(!e)return null;for(;j!==null;)i(Q,j),j=j.sibling;return null}function c(Q){for(var j=new Map;Q!==null;)Q.key!==null?j.set(Q.key,Q):j.set(Q.index,Q),Q=Q.sibling;return j}function h(Q,j){return Q=Da(Q,j),Q.index=0,Q.sibling=null,Q}function m(Q,j,et){return Q.index=et,e?(et=Q.alternate,et!==null?(et=et.index,et<j?(Q.flags|=67108866,j):et):(Q.flags|=67108866,j)):(Q.flags|=1048576,j)}function b(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function U(Q,j,et,_t){return j===null||j.tag!==6?(j=rh(et,Q.mode,_t),j.return=Q,j):(j=h(j,et),j.return=Q,j)}function H(Q,j,et,_t){var te=et.type;return te===E?pt(Q,j,et.props.children,_t,et.key):j!==null&&(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&fs(te)===j.type)?(j=h(j,et.props),vl(j,et),j.return=Q,j):(j=Bc(et.type,et.key,et.props,null,Q.mode,_t),vl(j,et),j.return=Q,j)}function nt(Q,j,et,_t){return j===null||j.tag!==4||j.stateNode.containerInfo!==et.containerInfo||j.stateNode.implementation!==et.implementation?(j=sh(et,Q.mode,_t),j.return=Q,j):(j=h(j,et.children||[]),j.return=Q,j)}function pt(Q,j,et,_t,te){return j===null||j.tag!==7?(j=ss(et,Q.mode,_t,te),j.return=Q,j):(j=h(j,et),j.return=Q,j)}function xt(Q,j,et){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=rh(""+j,Q.mode,et),j.return=Q,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case x:return et=Bc(j.type,j.key,j.props,null,Q.mode,et),vl(et,j),et.return=Q,et;case M:return j=sh(j,Q.mode,et),j.return=Q,j;case T:return j=fs(j),xt(Q,j,et)}if(X(j)||W(j))return j=ss(j,Q.mode,et,null),j.return=Q,j;if(typeof j.then=="function")return xt(Q,Wc(j),et);if(j.$$typeof===w)return xt(Q,Hc(Q,j),et);qc(Q,j)}return null}function ot(Q,j,et,_t){var te=j!==null?j.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return te!==null?null:U(Q,j,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case x:return et.key===te?H(Q,j,et,_t):null;case M:return et.key===te?nt(Q,j,et,_t):null;case T:return et=fs(et),ot(Q,j,et,_t)}if(X(et)||W(et))return te!==null?null:pt(Q,j,et,_t,null);if(typeof et.then=="function")return ot(Q,j,Wc(et),_t);if(et.$$typeof===w)return ot(Q,j,Hc(Q,et),_t);qc(Q,et)}return null}function ut(Q,j,et,_t,te){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Q=Q.get(et)||null,U(j,Q,""+_t,te);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case x:return Q=Q.get(_t.key===null?et:_t.key)||null,H(j,Q,_t,te);case M:return Q=Q.get(_t.key===null?et:_t.key)||null,nt(j,Q,_t,te);case T:return _t=fs(_t),ut(Q,j,et,_t,te)}if(X(_t)||W(_t))return Q=Q.get(et)||null,pt(j,Q,_t,te,null);if(typeof _t.then=="function")return ut(Q,j,et,Wc(_t),te);if(_t.$$typeof===w)return ut(Q,j,et,Hc(j,_t),te);qc(j,_t)}return null}function jt(Q,j,et,_t){for(var te=null,Ne=null,Zt=j,de=j=0,Me=null;Zt!==null&&de<et.length;de++){Zt.index>de?(Me=Zt,Zt=null):Me=Zt.sibling;var Le=ot(Q,Zt,et[de],_t);if(Le===null){Zt===null&&(Zt=Me);break}e&&Zt&&Le.alternate===null&&i(Q,Zt),j=m(Le,j,de),Ne===null?te=Le:Ne.sibling=Le,Ne=Le,Zt=Me}if(de===et.length)return r(Q,Zt),Ee&&Ua(Q,de),te;if(Zt===null){for(;de<et.length;de++)Zt=xt(Q,et[de],_t),Zt!==null&&(j=m(Zt,j,de),Ne===null?te=Zt:Ne.sibling=Zt,Ne=Zt);return Ee&&Ua(Q,de),te}for(Zt=c(Zt);de<et.length;de++)Me=ut(Zt,Q,de,et[de],_t),Me!==null&&(e&&Me.alternate!==null&&Zt.delete(Me.key===null?de:Me.key),j=m(Me,j,de),Ne===null?te=Me:Ne.sibling=Me,Ne=Me);return e&&Zt.forEach(function(Or){return i(Q,Or)}),Ee&&Ua(Q,de),te}function ie(Q,j,et,_t){if(et==null)throw Error(a(151));for(var te=null,Ne=null,Zt=j,de=j=0,Me=null,Le=et.next();Zt!==null&&!Le.done;de++,Le=et.next()){Zt.index>de?(Me=Zt,Zt=null):Me=Zt.sibling;var Or=ot(Q,Zt,Le.value,_t);if(Or===null){Zt===null&&(Zt=Me);break}e&&Zt&&Or.alternate===null&&i(Q,Zt),j=m(Or,j,de),Ne===null?te=Or:Ne.sibling=Or,Ne=Or,Zt=Me}if(Le.done)return r(Q,Zt),Ee&&Ua(Q,de),te;if(Zt===null){for(;!Le.done;de++,Le=et.next())Le=xt(Q,Le.value,_t),Le!==null&&(j=m(Le,j,de),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return Ee&&Ua(Q,de),te}for(Zt=c(Zt);!Le.done;de++,Le=et.next())Le=ut(Zt,Q,de,Le.value,_t),Le!==null&&(e&&Le.alternate!==null&&Zt.delete(Le.key===null?de:Le.key),j=m(Le,j,de),Ne===null?te=Le:Ne.sibling=Le,Ne=Le);return e&&Zt.forEach(function(yE){return i(Q,yE)}),Ee&&Ua(Q,de),te}function Ye(Q,j,et,_t){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case x:t:{for(var te=et.key;j!==null;){if(j.key===te){if(te=et.type,te===E){if(j.tag===7){r(Q,j.sibling),_t=h(j,et.props.children),_t.return=Q,Q=_t;break t}}else if(j.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===T&&fs(te)===j.type){r(Q,j.sibling),_t=h(j,et.props),vl(_t,et),_t.return=Q,Q=_t;break t}r(Q,j);break}else i(Q,j);j=j.sibling}et.type===E?(_t=ss(et.props.children,Q.mode,_t,et.key),_t.return=Q,Q=_t):(_t=Bc(et.type,et.key,et.props,null,Q.mode,_t),vl(_t,et),_t.return=Q,Q=_t)}return b(Q);case M:t:{for(te=et.key;j!==null;){if(j.key===te)if(j.tag===4&&j.stateNode.containerInfo===et.containerInfo&&j.stateNode.implementation===et.implementation){r(Q,j.sibling),_t=h(j,et.children||[]),_t.return=Q,Q=_t;break t}else{r(Q,j);break}else i(Q,j);j=j.sibling}_t=sh(et,Q.mode,_t),_t.return=Q,Q=_t}return b(Q);case T:return et=fs(et),Ye(Q,j,et,_t)}if(X(et))return jt(Q,j,et,_t);if(W(et)){if(te=W(et),typeof te!="function")throw Error(a(150));return et=te.call(et),ie(Q,j,et,_t)}if(typeof et.then=="function")return Ye(Q,j,Wc(et),_t);if(et.$$typeof===w)return Ye(Q,j,Hc(Q,et),_t);qc(Q,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,j!==null&&j.tag===6?(r(Q,j.sibling),_t=h(j,et),_t.return=Q,Q=_t):(r(Q,j),_t=rh(et,Q.mode,_t),_t.return=Q,Q=_t),b(Q)):r(Q,j)}return function(Q,j,et,_t){try{gl=0;var te=Ye(Q,j,et,_t);return eo=null,te}catch(Zt){if(Zt===to||Zt===kc)throw Zt;var Ne=vi(29,Zt,null,Q.mode);return Ne.lanes=_t,Ne.return=Q,Ne}}}var ds=S_(!0),y_=S_(!1),gr=!1;function vh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xr(e,i,r){var c=e.updateQueue;if(c===null)return null;if(c=c.shared,(Pe&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,i=zc(e),a_(e,null,r),i}return Fc(e,c,i,r),zc(e)}function xl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,Pi(e,r)}}function Sh(e,i){var r=e.updateQueue,c=e.alternate;if(c!==null&&(c=c.updateQueue,r===c)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,callbacks:c.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var yh=!1;function Sl(){if(yh){var e=$s;if(e!==null)throw e}}function yl(e,i,r,c){yh=!1;var h=e.updateQueue;gr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,U=h.shared.pending;if(U!==null){h.shared.pending=null;var H=U,nt=H.next;H.next=null,b===null?m=nt:b.next=nt,b=H;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,U=pt.lastBaseUpdate,U!==b&&(U===null?pt.firstBaseUpdate=nt:U.next=nt,pt.lastBaseUpdate=H))}if(m!==null){var xt=h.baseState;b=0,pt=nt=H=null,U=m;do{var ot=U.lane&-536870913,ut=ot!==U.lane;if(ut?(ye&ot)===ot:(c&ot)===ot){ot!==0&&ot===Js&&(yh=!0),pt!==null&&(pt=pt.next={lane:0,tag:U.tag,payload:U.payload,callback:null,next:null});t:{var jt=e,ie=U;ot=i;var Ye=r;switch(ie.tag){case 1:if(jt=ie.payload,typeof jt=="function"){xt=jt.call(Ye,xt,ot);break t}xt=jt;break t;case 3:jt.flags=jt.flags&-65537|128;case 0:if(jt=ie.payload,ot=typeof jt=="function"?jt.call(Ye,xt,ot):jt,ot==null)break t;xt=v({},xt,ot);break t;case 2:gr=!0}}ot=U.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:U.tag,payload:U.payload,callback:U.callback,next:null},pt===null?(nt=pt=ut,H=xt):pt=pt.next=ut,b|=ot;if(U=U.next,U===null){if(U=h.shared.pending,U===null)break;ut=U,U=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);pt===null&&(H=xt),h.baseState=H,h.firstBaseUpdate=nt,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),br|=b,e.lanes=b,e.memoizedState=xt}}function M_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function E_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)M_(r[e],i)}var no=I(null),jc=I(0);function b_(e,i){e=Va,St(jc,e),St(no,i),Va=e|i.baseLanes}function Mh(){St(jc,Va),St(no,no.current)}function Eh(){Va=jc.current,K(no),K(jc)}var xi=I(null),Hi=null;function Sr(e){var i=e.alternate;St(vn,vn.current&1),St(xi,e),Hi===null&&(i===null||no.current!==null||i.memoizedState!==null)&&(Hi=e)}function bh(e){St(vn,vn.current),St(xi,e),Hi===null&&(Hi=e)}function T_(e){e.tag===22?(St(vn,vn.current),St(xi,e),Hi===null&&(Hi=e)):yr()}function yr(){St(vn,vn.current),St(xi,xi.current)}function Si(e){K(xi),Hi===e&&(Hi=null),K(vn)}var vn=I(0);function Yc(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Dd(r)||Ud(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Oa=0,he=null,qe=null,En=null,Zc=!1,io=!1,ps=!1,Kc=0,Ml=0,ao=null,fM=0;function hn(){throw Error(a(321))}function Th(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!gi(e[r],i[r]))return!1;return!0}function Ah(e,i,r,c,h,m){return Oa=m,he=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?lg:Hh,ps=!1,m=r(c,h),ps=!1,io&&(m=R_(i,r,c,h)),A_(e),m}function A_(e){z.H=Tl;var i=qe!==null&&qe.next!==null;if(Oa=0,En=qe=he=null,Zc=!1,Ml=0,ao=null,i)throw Error(a(300));e===null||bn||(e=e.dependencies,e!==null&&Gc(e)&&(bn=!0))}function R_(e,i,r,c){he=e;var h=0;do{if(io&&(ao=null),Ml=0,io=!1,25<=h)throw Error(a(301));if(h+=1,En=qe=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=cg,m=i(r,c)}while(io);return m}function hM(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?El(i):i,e=e.useState()[0],(qe!==null?qe.memoizedState:null)!==e&&(he.flags|=1024),i}function Rh(){var e=Kc!==0;return Kc=0,e}function Ch(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function wh(e){if(Zc){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Zc=!1}Oa=0,En=qe=he=null,io=!1,Ml=Kc=0,ao=null}function Jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?he.memoizedState=En=e:En=En.next=e,En}function xn(){if(qe===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var i=En===null?he.memoizedState:En.next;if(i!==null)En=i,qe=e;else{if(e===null)throw he.alternate===null?Error(a(467)):Error(a(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},En===null?he.memoizedState=En=e:En=En.next=e}return En}function Qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function El(e){var i=Ml;return Ml+=1,ao===null&&(ao=[]),e=g_(ao,e,i),i=he,(En===null?i.memoizedState:En.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?lg:Hh),e}function Jc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return El(e);if(e.$$typeof===w)return zn(e)}throw Error(a(438,String(e)))}function Dh(e){var i=null,r=he.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var c=he.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(i={data:c.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Qc(),he.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),c=0;c<e;c++)r[c]=k;return i.index++,r}function Pa(e,i){return typeof i=="function"?i(e):i}function $c(e){var i=xn();return Uh(i,qe,e)}function Uh(e,i,r){var c=e.queue;if(c===null)throw Error(a(311));c.lastRenderedReducer=r;var h=e.baseQueue,m=c.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,c.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var U=b=null,H=null,nt=i,pt=!1;do{var xt=nt.lane&-536870913;if(xt!==nt.lane?(ye&xt)===xt:(Oa&xt)===xt){var ot=nt.revertLane;if(ot===0)H!==null&&(H=H.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),xt===Js&&(pt=!0);else if((Oa&ot)===ot){nt=nt.next,ot===Js&&(pt=!0);continue}else xt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(U=H=xt,b=m):H=H.next=xt,he.lanes|=ot,br|=ot;xt=nt.action,ps&&r(m,xt),m=nt.hasEagerState?nt.eagerState:r(m,xt)}else ot={lane:xt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},H===null?(U=H=ot,b=m):H=H.next=ot,he.lanes|=xt,br|=xt;nt=nt.next}while(nt!==null&&nt!==i);if(H===null?b=m:H.next=U,!gi(m,e.memoizedState)&&(bn=!0,pt&&(r=$s,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=H,c.lastRenderedState=m}return h===null&&(c.lanes=0),[e.memoizedState,c.dispatch]}function Nh(e){var i=xn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var c=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);gi(m,i.memoizedState)||(bn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,c]}function C_(e,i,r){var c=he,h=xn(),m=Ee;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!gi((qe||h).memoizedState,r);if(b&&(h.memoizedState=r,bn=!0),h=h.queue,Ph(U_.bind(null,c,h,e),[e]),h.getSnapshot!==i||b||En!==null&&En.memoizedState.tag&1){if(c.flags|=2048,ro(9,{destroy:void 0},D_.bind(null,c,h,r,i),null),Ke===null)throw Error(a(349));m||(Oa&127)!==0||w_(c,i,r)}return r}function w_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=he.updateQueue,i===null?(i=Qc(),he.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function D_(e,i,r,c){i.value=r,i.getSnapshot=c,N_(i)&&L_(e)}function U_(e,i,r){return r(function(){N_(i)&&L_(e)})}function N_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!gi(e,r)}catch{return!0}}function L_(e){var i=rs(e,2);i!==null&&si(i,e,2)}function Lh(e){var i=Jn();if(typeof e=="function"){var r=e;if(e=r(),ps){Pt(!0);try{r()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},i}function O_(e,i,r,c){return e.baseState=r,Uh(e,qe,typeof c=="function"?c:Pa)}function dM(e,i,r,c,h){if(nu(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};z.T!==null?r(!0):m.isTransition=!1,c(m),r=i.pending,r===null?(m.next=i.pending=m,P_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function P_(e,i){var r=i.action,c=i.payload,h=e.state;if(i.isTransition){var m=z.T,b={};z.T=b;try{var U=r(h,c),H=z.S;H!==null&&H(b,U),F_(e,i,U)}catch(nt){Oh(e,i,nt)}finally{m!==null&&b.types!==null&&(m.types=b.types),z.T=m}}else try{m=r(h,c),F_(e,i,m)}catch(nt){Oh(e,i,nt)}}function F_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(c){z_(e,i,c)},function(c){return Oh(e,i,c)}):z_(e,i,r)}function z_(e,i,r){i.status="fulfilled",i.value=r,B_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,P_(e,r)))}function Oh(e,i,r){var c=e.pending;if(e.pending=null,c!==null){c=c.next;do i.status="rejected",i.reason=r,B_(i),i=i.next;while(i!==c)}e.action=null}function B_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function I_(e,i){return i}function G_(e,i){if(Ee){var r=Ke.formState;if(r!==null){t:{var c=he;if(Ee){if(en){e:{for(var h=en,m=Gi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Vi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){en=Vi(h.nextSibling),c=h.data==="F!";break t}}mr(c)}c=!1}c&&(i=r[0])}}return r=Jn(),r.memoizedState=r.baseState=i,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:I_,lastRenderedState:i},r.queue=c,r=rg.bind(null,he,c),c.dispatch=r,c=Lh(!1),m=Gh.bind(null,he,!1,c.queue),c=Jn(),h={state:i,dispatch:null,action:e,pending:null},c.queue=h,r=dM.bind(null,he,h,m,r),h.dispatch=r,c.memoizedState=e,[i,r,!1]}function H_(e){var i=xn();return V_(i,qe,e)}function V_(e,i,r){if(i=Uh(e,i,I_)[0],e=$c(Pa)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var c=El(i)}catch(b){throw b===to?kc:b}else c=i;i=xn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(he.flags|=2048,ro(9,{destroy:void 0},pM.bind(null,h,r),null)),[c,m,e]}function pM(e,i){e.action=i}function k_(e){var i=xn(),r=qe;if(r!==null)return V_(i,r,e);xn(),i=i.memoizedState,r=xn();var c=r.queue.dispatch;return r.memoizedState=e,[i,c,!1]}function ro(e,i,r,c){return e={tag:e,create:r,deps:c,inst:i,next:null},i=he.updateQueue,i===null&&(i=Qc(),he.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(c=r.next,r.next=e,e.next=c,i.lastEffect=e),e}function X_(){return xn().memoizedState}function tu(e,i,r,c){var h=Jn();he.flags|=e,h.memoizedState=ro(1|i,{destroy:void 0},r,c===void 0?null:c)}function eu(e,i,r,c){var h=xn();c=c===void 0?null:c;var m=h.memoizedState.inst;qe!==null&&c!==null&&Th(c,qe.memoizedState.deps)?h.memoizedState=ro(i,m,r,c):(he.flags|=e,h.memoizedState=ro(1|i,m,r,c))}function W_(e,i){tu(8390656,8,e,i)}function Ph(e,i){eu(2048,8,e,i)}function mM(e){he.flags|=4;var i=he.updateQueue;if(i===null)i=Qc(),he.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function q_(e){var i=xn().memoizedState;return mM({ref:i,nextImpl:e}),function(){if((Pe&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function j_(e,i){return eu(4,2,e,i)}function Y_(e,i){return eu(4,4,e,i)}function Z_(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function K_(e,i,r){r=r!=null?r.concat([e]):null,eu(4,4,Z_.bind(null,i,e),r)}function Fh(){}function Q_(e,i){var r=xn();i=i===void 0?null:i;var c=r.memoizedState;return i!==null&&Th(i,c[1])?c[0]:(r.memoizedState=[e,i],e)}function J_(e,i){var r=xn();i=i===void 0?null:i;var c=r.memoizedState;if(i!==null&&Th(i,c[1]))return c[0];if(c=e(),ps){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[c,i],c}function zh(e,i,r){return r===void 0||(Oa&1073741824)!==0&&(ye&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=$g(),he.lanes|=e,br|=e,r)}function $_(e,i,r,c){return gi(r,i)?r:no.current!==null?(e=zh(e,r,c),gi(e,i)||(bn=!0),e):(Oa&42)===0||(Oa&1073741824)!==0&&(ye&261930)===0?(bn=!0,e.memoizedState=r):(e=$g(),he.lanes|=e,br|=e,i)}function tg(e,i,r,c,h){var m=G.p;G.p=m!==0&&8>m?m:8;var b=z.T,U={};z.T=U,Gh(e,!1,i,r);try{var H=h(),nt=z.S;if(nt!==null&&nt(U,H),H!==null&&typeof H=="object"&&typeof H.then=="function"){var pt=uM(H,c);bl(e,i,pt,Ei(e))}else bl(e,i,c,Ei(e))}catch(xt){bl(e,i,{then:function(){},status:"rejected",reason:xt},Ei())}finally{G.p=m,b!==null&&U.types!==null&&(b.types=U.types),z.T=b}}function _M(){}function Bh(e,i,r,c){if(e.tag!==5)throw Error(a(476));var h=eg(e).queue;tg(e,h,i,tt,r===null?_M:function(){return ng(e),r(c)})}function eg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:tt,baseState:tt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:tt},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function ng(e){var i=eg(e);i.next===null&&(i=e.alternate.memoizedState),bl(e,i.next.queue,{},Ei())}function Ih(){return zn(Hl)}function ig(){return xn().memoizedState}function ag(){return xn().memoizedState}function gM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=Ei();e=vr(r);var c=xr(i,e,r);c!==null&&(si(c,i,r),xl(c,i,r)),i={cache:ph()},e.payload=i;return}i=i.return}}function vM(e,i,r){var c=Ei();r={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},nu(e)?sg(i,r):(r=ih(e,i,r,c),r!==null&&(si(r,e,c),og(r,i,c)))}function rg(e,i,r){var c=Ei();bl(e,i,r,c)}function bl(e,i,r,c){var h={lane:c,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(nu(e))sg(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,U=m(b,r);if(h.hasEagerState=!0,h.eagerState=U,gi(U,b))return Fc(e,i,h,0),Ke===null&&Pc(),!1}catch{}if(r=ih(e,i,h,c),r!==null)return si(r,e,c),og(r,i,c),!0}return!1}function Gh(e,i,r,c){if(c={lane:2,revertLane:vd(),gesture:null,action:c,hasEagerState:!1,eagerState:null,next:null},nu(e)){if(i)throw Error(a(479))}else i=ih(e,r,c,2),i!==null&&si(i,e,2)}function nu(e){var i=e.alternate;return e===he||i!==null&&i===he}function sg(e,i){io=Zc=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function og(e,i,r){if((r&4194048)!==0){var c=i.lanes;c&=e.pendingLanes,r|=c,i.lanes=r,Pi(e,r)}}var Tl={readContext:zn,use:Jc,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useLayoutEffect:hn,useInsertionEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useSyncExternalStore:hn,useId:hn,useHostTransitionStatus:hn,useFormState:hn,useActionState:hn,useOptimistic:hn,useMemoCache:hn,useCacheRefresh:hn};Tl.useEffectEvent=hn;var lg={readContext:zn,use:Jc,useCallback:function(e,i){return Jn().memoizedState=[e,i===void 0?null:i],e},useContext:zn,useEffect:W_,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,tu(4194308,4,Z_.bind(null,i,e),r)},useLayoutEffect:function(e,i){return tu(4194308,4,e,i)},useInsertionEffect:function(e,i){tu(4,2,e,i)},useMemo:function(e,i){var r=Jn();i=i===void 0?null:i;var c=e();if(ps){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[c,i],c},useReducer:function(e,i,r){var c=Jn();if(r!==void 0){var h=r(i);if(ps){Pt(!0);try{r(i)}finally{Pt(!1)}}}else h=i;return c.memoizedState=c.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},c.queue=e,e=e.dispatch=vM.bind(null,he,e),[c.memoizedState,e]},useRef:function(e){var i=Jn();return e={current:e},i.memoizedState=e},useState:function(e){e=Lh(e);var i=e.queue,r=rg.bind(null,he,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Fh,useDeferredValue:function(e,i){var r=Jn();return zh(r,e,i)},useTransition:function(){var e=Lh(!1);return e=tg.bind(null,he,e.queue,!0,!1),Jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var c=he,h=Jn();if(Ee){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Ke===null)throw Error(a(349));(ye&127)!==0||w_(c,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,W_(U_.bind(null,c,m,e),[e]),c.flags|=2048,ro(9,{destroy:void 0},D_.bind(null,c,m,r,i),null),r},useId:function(){var e=Jn(),i=Ke.identifierPrefix;if(Ee){var r=ha,c=fa;r=(c&~(1<<32-Ft(c)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Kc++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=fM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Ih,useFormState:G_,useActionState:G_,useOptimistic:function(e){var i=Jn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Gh.bind(null,he,!0,r),r.dispatch=i,[e,i]},useMemoCache:Dh,useCacheRefresh:function(){return Jn().memoizedState=gM.bind(null,he)},useEffectEvent:function(e){var i=Jn(),r={impl:e};return i.memoizedState=r,function(){if((Pe&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Hh={readContext:zn,use:Jc,useCallback:Q_,useContext:zn,useEffect:Ph,useImperativeHandle:K_,useInsertionEffect:j_,useLayoutEffect:Y_,useMemo:J_,useReducer:$c,useRef:X_,useState:function(){return $c(Pa)},useDebugValue:Fh,useDeferredValue:function(e,i){var r=xn();return $_(r,qe.memoizedState,e,i)},useTransition:function(){var e=$c(Pa)[0],i=xn().memoizedState;return[typeof e=="boolean"?e:El(e),i]},useSyncExternalStore:C_,useId:ig,useHostTransitionStatus:Ih,useFormState:H_,useActionState:H_,useOptimistic:function(e,i){var r=xn();return O_(r,qe,e,i)},useMemoCache:Dh,useCacheRefresh:ag};Hh.useEffectEvent=q_;var cg={readContext:zn,use:Jc,useCallback:Q_,useContext:zn,useEffect:Ph,useImperativeHandle:K_,useInsertionEffect:j_,useLayoutEffect:Y_,useMemo:J_,useReducer:Nh,useRef:X_,useState:function(){return Nh(Pa)},useDebugValue:Fh,useDeferredValue:function(e,i){var r=xn();return qe===null?zh(r,e,i):$_(r,qe.memoizedState,e,i)},useTransition:function(){var e=Nh(Pa)[0],i=xn().memoizedState;return[typeof e=="boolean"?e:El(e),i]},useSyncExternalStore:C_,useId:ig,useHostTransitionStatus:Ih,useFormState:k_,useActionState:k_,useOptimistic:function(e,i){var r=xn();return qe!==null?O_(r,qe,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Dh,useCacheRefresh:ag};cg.useEffectEvent=q_;function Vh(e,i,r,c){i=e.memoizedState,r=r(c,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var kh={enqueueSetState:function(e,i,r){e=e._reactInternals;var c=Ei(),h=vr(c);h.payload=i,r!=null&&(h.callback=r),i=xr(e,h,c),i!==null&&(si(i,e,c),xl(i,e,c))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var c=Ei(),h=vr(c);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=xr(e,h,c),i!==null&&(si(i,e,c),xl(i,e,c))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=Ei(),c=vr(r);c.tag=2,i!=null&&(c.callback=i),i=xr(e,c,r),i!==null&&(si(i,e,r),xl(i,e,r))}};function ug(e,i,r,c,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!fl(r,c)||!fl(h,m):!0}function fg(e,i,r,c){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,c),i.state!==e&&kh.enqueueReplaceState(i,i.state,null)}function ms(e,i){var r=i;if("ref"in i){r={};for(var c in i)c!=="ref"&&(r[c]=i[c])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function hg(e){Oc(e)}function dg(e){console.error(e)}function pg(e){Oc(e)}function iu(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(c){setTimeout(function(){throw c})}}function mg(e,i,r){try{var c=e.onCaughtError;c(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Xh(e,i,r){return r=vr(r),r.tag=3,r.payload={element:null},r.callback=function(){iu(e,i)},r}function _g(e){return e=vr(e),e.tag=3,e}function gg(e,i,r,c){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=c.value;e.payload=function(){return h(m)},e.callback=function(){mg(i,r,c)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){mg(i,r,c),typeof h!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var U=c.stack;this.componentDidCatch(c.value,{componentStack:U!==null?U:""})})}function xM(e,i,r,c,h){if(r.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(i=r.alternate,i!==null&&Qs(i,r,h,!0),r=xi.current,r!==null){switch(r.tag){case 31:case 13:return Hi===null?mu():r.alternate===null&&dn===0&&(dn=3),r.flags&=-257,r.flags|=65536,r.lanes=h,c===Xc?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([c]):i.add(c),md(e,c,h)),!1;case 22:return r.flags|=65536,c===Xc?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([c])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([c]):r.add(c)),md(e,c,h)),!1}throw Error(a(435,r.tag))}return md(e,c,h),mu(),!1}if(Ee)return i=xi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,c!==ch&&(e=Error(a(422),{cause:c}),pl(zi(e,r)))):(c!==ch&&(i=Error(a(423),{cause:c}),pl(zi(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,c=zi(c,r),h=Xh(e.stateNode,c,h),Sh(e,h),dn!==4&&(dn=2)),!1;var m=Error(a(520),{cause:c});if(m=zi(m,r),Ll===null?Ll=[m]:Ll.push(m),dn!==4&&(dn=2),i===null)return!0;c=zi(c,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Xh(r.stateNode,c,e),Sh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Tr===null||!Tr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=_g(h),gg(h,e,r,c),Sh(r,h),!1}r=r.return}while(r!==null);return!1}var Wh=Error(a(461)),bn=!1;function Bn(e,i,r,c){i.child=e===null?y_(i,null,r,c):ds(i,e.child,r,c)}function vg(e,i,r,c,h){r=r.render;var m=i.ref;if("ref"in c){var b={};for(var U in c)U!=="ref"&&(b[U]=c[U])}else b=c;return cs(i),c=Ah(e,i,r,b,m,h),U=Rh(),e!==null&&!bn?(Ch(e,i,h),Fa(e,i,h)):(Ee&&U&&oh(i),i.flags|=1,Bn(e,i,c,h),i.child)}function xg(e,i,r,c,h){if(e===null){var m=r.type;return typeof m=="function"&&!ah(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,Sg(e,i,m,c,h)):(e=Bc(r.type,null,c,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!$h(e,h)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:fl,r(b,c)&&e.ref===i.ref)return Fa(e,i,h)}return i.flags|=1,e=Da(m,c),e.ref=i.ref,e.return=i,i.child=e}function Sg(e,i,r,c,h){if(e!==null){var m=e.memoizedProps;if(fl(m,c)&&e.ref===i.ref)if(bn=!1,i.pendingProps=c=m,$h(e,h))(e.flags&131072)!==0&&(bn=!0);else return i.lanes=e.lanes,Fa(e,i,h)}return qh(e,i,r,c,h)}function yg(e,i,r,c){var h=c.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),c.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(c=i.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;c=h&~m}else c=0,i.child=null;return Mg(e,i,m,r,c)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vc(i,m!==null?m.cachePool:null),m!==null?b_(i,m):Mh(),T_(i);else return c=i.lanes=536870912,Mg(e,i,m!==null?m.baseLanes|r:r,r,c)}else m!==null?(Vc(i,m.cachePool),b_(i,m),yr(),i.memoizedState=null):(e!==null&&Vc(i,null),Mh(),yr());return Bn(e,i,h,r),i.child}function Al(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Mg(e,i,r,c,h){var m=_h();return m=m===null?null:{parent:Mn._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Vc(i,null),Mh(),T_(i),e!==null&&Qs(e,i,c,!0),i.childLanes=h,null}function au(e,i){return i=su({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Eg(e,i,r){return ds(i,e.child,null,r),e=au(i,i.pendingProps),e.flags|=2,Si(i),i.memoizedState=null,e}function SM(e,i,r){var c=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Ee){if(c.mode==="hidden")return e=au(i,c),i.lanes=536870912,Al(null,e);if(bh(i),(e=en)?(e=Pv(e,Gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:dr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=s_(e),r.return=i,i.child=r,Fn=i,en=null)):e=null,e===null)throw mr(i);return i.lanes=536870912,null}return au(i,c)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(bh(i),h)if(i.flags&256)i.flags&=-257,i=Eg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(bn||Qs(e,i,r,!1),h=(r&e.childLanes)!==0,bn||h){if(c=Ke,c!==null&&(b=pi(c,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,rs(e,b),si(c,e,b),Wh;mu(),i=Eg(e,i,r)}else e=m.treeContext,en=Vi(b.nextSibling),Fn=i,Ee=!0,pr=null,Gi=!1,e!==null&&c_(i,e),i=au(i,c),i.flags|=4096;return i}return e=Da(e.child,{mode:c.mode,children:c.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ru(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function qh(e,i,r,c,h){return cs(i),r=Ah(e,i,r,c,void 0,h),c=Rh(),e!==null&&!bn?(Ch(e,i,h),Fa(e,i,h)):(Ee&&c&&oh(i),i.flags|=1,Bn(e,i,r,h),i.child)}function bg(e,i,r,c,h,m){return cs(i),i.updateQueue=null,r=R_(i,c,r,h),A_(e),c=Rh(),e!==null&&!bn?(Ch(e,i,m),Fa(e,i,m)):(Ee&&c&&oh(i),i.flags|=1,Bn(e,i,r,m),i.child)}function Tg(e,i,r,c,h){if(cs(i),i.stateNode===null){var m=js,b=r.contextType;typeof b=="object"&&b!==null&&(m=zn(b)),m=new r(c,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=kh,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=c,m.state=i.memoizedState,m.refs={},vh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?zn(b):js,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(Vh(i,r,b,c),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&kh.enqueueReplaceState(m,m.state,null),yl(i,c,m,h),Sl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!0}else if(e===null){m=i.stateNode;var U=i.memoizedProps,H=ms(r,U);m.props=H;var nt=m.context,pt=r.contextType;b=js,typeof pt=="object"&&pt!==null&&(b=zn(pt));var xt=r.getDerivedStateFromProps;pt=typeof xt=="function"||typeof m.getSnapshotBeforeUpdate=="function",U=i.pendingProps!==U,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(U||nt!==b)&&fg(i,m,c,b),gr=!1;var ot=i.memoizedState;m.state=ot,yl(i,c,m,h),Sl(),nt=i.memoizedState,U||ot!==nt||gr?(typeof xt=="function"&&(Vh(i,r,xt,c),nt=i.memoizedState),(H=gr||ug(i,r,H,c,ot,nt,b))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=nt),m.props=c,m.state=nt,m.context=b,c=H):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{m=i.stateNode,xh(e,i),b=i.memoizedProps,pt=ms(r,b),m.props=pt,xt=i.pendingProps,ot=m.context,nt=r.contextType,H=js,typeof nt=="object"&&nt!==null&&(H=zn(nt)),U=r.getDerivedStateFromProps,(nt=typeof U=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==xt||ot!==H)&&fg(i,m,c,H),gr=!1,ot=i.memoizedState,m.state=ot,yl(i,c,m,h),Sl();var ut=i.memoizedState;b!==xt||ot!==ut||gr||e!==null&&e.dependencies!==null&&Gc(e.dependencies)?(typeof U=="function"&&(Vh(i,r,U,c),ut=i.memoizedState),(pt=gr||ug(i,r,pt,c,ot,ut,H)||e!==null&&e.dependencies!==null&&Gc(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(c,ut,H),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(c,ut,H)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ut),m.props=c,m.state=ut,m.context=H,c=pt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),c=!1)}return m=c,ru(e,i),c=(i.flags&128)!==0,m||c?(m=i.stateNode,r=c&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&c?(i.child=ds(i,e.child,null,h),i.child=ds(i,null,r,h)):Bn(e,i,r,h),i.memoizedState=m.state,e=i.child):e=Fa(e,i,h),e}function Ag(e,i,r,c){return os(),i.flags|=256,Bn(e,i,r,c),i.child}var jh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yh(e){return{baseLanes:e,cachePool:m_()}}function Zh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=Mi),e}function Rg(e,i,r){var c=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(vn.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(Ee){if(h?Sr(i):yr(),(e=en)?(e=Pv(e,Gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:dr!==null?{id:fa,overflow:ha}:null,retryLane:536870912,hydrationErrors:null},r=s_(e),r.return=i,i.child=r,Fn=i,en=null)):e=null,e===null)throw mr(i);return Ud(e)?i.lanes=32:i.lanes=536870912,null}var U=c.children;return c=c.fallback,h?(yr(),h=i.mode,U=su({mode:"hidden",children:U},h),c=ss(c,h,r,null),U.return=i,c.return=i,U.sibling=c,i.child=U,c=i.child,c.memoizedState=Yh(r),c.childLanes=Zh(e,b,r),i.memoizedState=jh,Al(null,c)):(Sr(i),Kh(i,U))}var H=e.memoizedState;if(H!==null&&(U=H.dehydrated,U!==null)){if(m)i.flags&256?(Sr(i),i.flags&=-257,i=Qh(e,i,r)):i.memoizedState!==null?(yr(),i.child=e.child,i.flags|=128,i=null):(yr(),U=c.fallback,h=i.mode,c=su({mode:"visible",children:c.children},h),U=ss(U,h,r,null),U.flags|=2,c.return=i,U.return=i,c.sibling=U,i.child=c,ds(i,e.child,null,r),c=i.child,c.memoizedState=Yh(r),c.childLanes=Zh(e,b,r),i.memoizedState=jh,i=Al(null,c));else if(Sr(i),Ud(U)){if(b=U.nextSibling&&U.nextSibling.dataset,b)var nt=b.dgst;b=nt,c=Error(a(419)),c.stack="",c.digest=b,pl({value:c,source:null,stack:null}),i=Qh(e,i,r)}else if(bn||Qs(e,i,r,!1),b=(r&e.childLanes)!==0,bn||b){if(b=Ke,b!==null&&(c=pi(b,r),c!==0&&c!==H.retryLane))throw H.retryLane=c,rs(e,c),si(b,e,c),Wh;Dd(U)||mu(),i=Qh(e,i,r)}else Dd(U)?(i.flags|=192,i.child=e.child,i=null):(e=H.treeContext,en=Vi(U.nextSibling),Fn=i,Ee=!0,pr=null,Gi=!1,e!==null&&c_(i,e),i=Kh(i,c.children),i.flags|=4096);return i}return h?(yr(),U=c.fallback,h=i.mode,H=e.child,nt=H.sibling,c=Da(H,{mode:"hidden",children:c.children}),c.subtreeFlags=H.subtreeFlags&65011712,nt!==null?U=Da(nt,U):(U=ss(U,h,r,null),U.flags|=2),U.return=i,c.return=i,c.sibling=U,i.child=c,Al(null,c),c=i.child,U=e.child.memoizedState,U===null?U=Yh(r):(h=U.cachePool,h!==null?(H=Mn._currentValue,h=h.parent!==H?{parent:H,pool:H}:h):h=m_(),U={baseLanes:U.baseLanes|r,cachePool:h}),c.memoizedState=U,c.childLanes=Zh(e,b,r),i.memoizedState=jh,Al(e.child,c)):(Sr(i),r=e.child,e=r.sibling,r=Da(r,{mode:"visible",children:c.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Kh(e,i){return i=su({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function su(e,i){return e=vi(22,e,null,i),e.lanes=0,e}function Qh(e,i,r){return ds(i,e.child,null,r),e=Kh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Cg(e,i,r){e.lanes|=i;var c=e.alternate;c!==null&&(c.lanes|=i),hh(e.return,i,r)}function Jh(e,i,r,c,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:r,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=c,b.tail=r,b.tailMode=h,b.treeForkCount=m)}function wg(e,i,r){var c=i.pendingProps,h=c.revealOrder,m=c.tail;c=c.children;var b=vn.current,U=(b&2)!==0;if(U?(b=b&1|2,i.flags|=128):b&=1,St(vn,b),Bn(e,i,c,r),c=Ee?dl:0,!U&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cg(e,r,i);else if(e.tag===19)Cg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&Yc(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),Jh(i,!1,h,r,m,c);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Yc(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}Jh(i,!0,r,null,m,c);break;case"together":Jh(i,!1,null,null,void 0,c);break;default:i.memoizedState=null}return i.child}function Fa(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),br|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Qs(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Da(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Da(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function $h(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Gc(e)))}function yM(e,i,r){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),_r(i,Mn,e.memoizedState.cache),os();break;case 27:case 5:ne(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:_r(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,bh(i),null;break;case 13:var c=i.memoizedState;if(c!==null)return c.dehydrated!==null?(Sr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?Rg(e,i,r):(Sr(i),e=Fa(e,i,r),e!==null?e.sibling:null);Sr(i);break;case 19:var h=(e.flags&128)!==0;if(c=(r&i.childLanes)!==0,c||(Qs(e,i,r,!1),c=(r&i.childLanes)!==0),h){if(c)return wg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),St(vn,vn.current),c)break;return null;case 22:return i.lanes=0,yg(e,i,r,i.pendingProps);case 24:_r(i,Mn,e.memoizedState.cache)}return Fa(e,i,r)}function Dg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)bn=!0;else{if(!$h(e,r)&&(i.flags&128)===0)return bn=!1,yM(e,i,r);bn=(e.flags&131072)!==0}else bn=!1,Ee&&(i.flags&1048576)!==0&&l_(i,dl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var c=i.pendingProps;if(e=fs(i.elementType),i.type=e,typeof e=="function")ah(e)?(c=ms(e,c),i.tag=1,i=Tg(null,i,e,c,r)):(i.tag=0,i=qh(null,i,e,c,r));else{if(e!=null){var h=e.$$typeof;if(h===D){i.tag=11,i=vg(null,i,e,c,r);break t}else if(h===O){i.tag=14,i=xg(null,i,e,c,r);break t}}throw i=lt(e)||e,Error(a(306,i,""))}}return i;case 0:return qh(e,i,i.type,i.pendingProps,r);case 1:return c=i.type,h=ms(c,i.pendingProps),Tg(e,i,c,h,r);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));c=i.pendingProps;var m=i.memoizedState;h=m.element,xh(e,i),yl(i,c,null,r);var b=i.memoizedState;if(c=b.cache,_r(i,Mn,c),c!==m.cache&&dh(i,[Mn],r,!0),Sl(),c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Ag(e,i,c,r);break t}else if(c!==h){h=zi(Error(a(424)),i),pl(h),i=Ag(e,i,c,r);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,en=Vi(e.firstChild),Fn=i,Ee=!0,pr=null,Gi=!0,r=y_(i,null,c,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(os(),c===h){i=Fa(e,i,r);break t}Bn(e,i,c,r)}i=i.child}return i;case 26:return ru(e,i),e===null?(r=Hv(i.type,null,i.pendingProps,null))?i.memoizedState=r:Ee||(r=i.type,e=i.pendingProps,c=Mu(ct.current).createElement(r),c[gn]=i,c[Pn]=e,In(c,r,e),yn(c),i.stateNode=c):i.memoizedState=Hv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ne(i),e===null&&Ee&&(c=i.stateNode=Bv(i.type,i.pendingProps,ct.current),Fn=i,Gi=!0,h=en,wr(i.type)?(Nd=h,en=Vi(c.firstChild)):en=h),Bn(e,i,i.pendingProps.children,r),ru(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Ee&&((h=c=en)&&(c=QM(c,i.type,i.pendingProps,Gi),c!==null?(i.stateNode=c,Fn=i,en=Vi(c.firstChild),Gi=!1,h=!0):h=!1),h||mr(i)),ne(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,c=m.children,Rd(h,m)?c=null:b!==null&&Rd(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=Ah(e,i,hM,null,null,r),Hl._currentValue=h),ru(e,i),Bn(e,i,c,r),i.child;case 6:return e===null&&Ee&&((e=r=en)&&(r=JM(r,i.pendingProps,Gi),r!==null?(i.stateNode=r,Fn=i,en=null,e=!0):e=!1),e||mr(i)),null;case 13:return Rg(e,i,r);case 4:return Tt(i,i.stateNode.containerInfo),c=i.pendingProps,e===null?i.child=ds(i,null,c,r):Bn(e,i,c,r),i.child;case 11:return vg(e,i,i.type,i.pendingProps,r);case 7:return Bn(e,i,i.pendingProps,r),i.child;case 8:return Bn(e,i,i.pendingProps.children,r),i.child;case 12:return Bn(e,i,i.pendingProps.children,r),i.child;case 10:return c=i.pendingProps,_r(i,i.type,c.value),Bn(e,i,c.children,r),i.child;case 9:return h=i.type._context,c=i.pendingProps.children,cs(i),h=zn(h),c=c(h),i.flags|=1,Bn(e,i,c,r),i.child;case 14:return xg(e,i,i.type,i.pendingProps,r);case 15:return Sg(e,i,i.type,i.pendingProps,r);case 19:return wg(e,i,r);case 31:return SM(e,i,r);case 22:return yg(e,i,r,i.pendingProps);case 24:return cs(i),c=zn(Mn),e===null?(h=_h(),h===null&&(h=Ke,m=ph(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:c,cache:h},vh(i),_r(i,Mn,h)):((e.lanes&r)!==0&&(xh(e,i),yl(i,null,null,r),Sl()),h=e.memoizedState,m=i.memoizedState,h.parent!==c?(h={parent:c,cache:c},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),_r(i,Mn,c)):(c=m.cache,_r(i,Mn,c),c!==h.cache&&dh(i,[Mn],r,!0))),Bn(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function za(e){e.flags|=4}function td(e,i,r,c,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(iv())e.flags|=8192;else throw hs=Xc,gh}else e.flags&=-16777217}function Ug(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qv(i))if(iv())e.flags|=8192;else throw hs=Xc,gh}function ou(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Et():536870912,e.lanes|=i,co|=i)}function Rl(e,i){if(!Ee)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var c=null;r!==null;)r.alternate!==null&&(c=r),r=r.sibling;c===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:c.sibling=null}}function nn(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,c=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags&65011712,c|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=c,e.childLanes=r,i}function MM(e,i,r){var c=i.pendingProps;switch(lh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(i),null;case 1:return nn(i),null;case 3:return r=i.stateNode,c=null,e!==null&&(c=e.memoizedState.cache),i.memoizedState.cache!==c&&(i.flags|=2048),La(Mn),Ht(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ks(i)?za(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,uh())),nn(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(za(i),m!==null?(nn(i),Ug(i,m)):(nn(i),td(i,h,null,c,r))):m?m!==e.memoizedState?(za(i),nn(i),Ug(i,m)):(nn(i),i.flags&=-16777217):(e=e.memoizedProps,e!==c&&za(i),nn(i),td(i,h,e,c,r)),null;case 27:if(Jt(i),r=ct.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return nn(i),null}e=yt.current,Ks(i)?u_(i):(e=Bv(h,c,r),i.stateNode=e,za(i))}return nn(i),null;case 5:if(Jt(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(!c){if(i.stateNode===null)throw Error(a(166));return nn(i),null}if(m=yt.current,Ks(i))u_(i);else{var b=Mu(ct.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof c.is=="string"?b.createElement("select",{is:c.is}):b.createElement("select"),c.multiple?m.multiple=!0:c.size&&(m.size=c.size);break;default:m=typeof c.is=="string"?b.createElement(h,{is:c.is}):b.createElement(h)}}m[gn]=i,m[Pn]=c;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(In(m,h,c),h){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break t;case"img":c=!0;break t;default:c=!1}c&&za(i)}}return nn(i),td(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==c&&za(i);else{if(typeof c!="string"&&i.stateNode===null)throw Error(a(166));if(e=ct.current,Ks(i)){if(e=i.stateNode,r=i.memoizedProps,c=null,h=Fn,h!==null)switch(h.tag){case 27:case 5:c=h.memoizedProps}e[gn]=i,e=!!(e.nodeValue===r||c!==null&&c.suppressHydrationWarning===!0||Rv(e.nodeValue,r)),e||mr(i,!0)}else e=Mu(e).createTextNode(c),e[gn]=i,i.stateNode=e}return nn(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(c=Ks(i),r!==null){if(e===null){if(!c)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[gn]=i}else os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),e=!1}else r=uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(Si(i),i):(Si(i),null);if((i.flags&128)!==0)throw Error(a(558))}return nn(i),null;case 13:if(c=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Ks(i),c!==null&&c.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[gn]=i}else os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nn(i),h=!1}else h=uh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Si(i),i):(Si(i),null)}return Si(i),(i.flags&128)!==0?(i.lanes=r,i):(r=c!==null,e=e!==null&&e.memoizedState!==null,r&&(c=i.child,h=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(h=c.alternate.memoizedState.cachePool.pool),m=null,c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(m=c.memoizedState.cachePool.pool),m!==h&&(c.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),ou(i,i.updateQueue),nn(i),null);case 4:return Ht(),e===null&&Md(i.stateNode.containerInfo),nn(i),null;case 10:return La(i.type),nn(i),null;case 19:if(K(vn),c=i.memoizedState,c===null)return nn(i),null;if(h=(i.flags&128)!==0,m=c.rendering,m===null)if(h)Rl(c,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Yc(e),m!==null){for(i.flags|=128,Rl(c,!1),e=m.updateQueue,i.updateQueue=e,ou(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)r_(r,e),r=r.sibling;return St(vn,vn.current&1|2),Ee&&Ua(i,c.treeForkCount),i.child}e=e.sibling}c.tail!==null&&Rt()>hu&&(i.flags|=128,h=!0,Rl(c,!1),i.lanes=4194304)}else{if(!h)if(e=Yc(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,ou(i,e),Rl(c,!0),c.tail===null&&c.tailMode==="hidden"&&!m.alternate&&!Ee)return nn(i),null}else 2*Rt()-c.renderingStartTime>hu&&r!==536870912&&(i.flags|=128,h=!0,Rl(c,!1),i.lanes=4194304);c.isBackwards?(m.sibling=i.child,i.child=m):(e=c.last,e!==null?e.sibling=m:i.child=m,c.last=m)}return c.tail!==null?(e=c.tail,c.rendering=e,c.tail=e.sibling,c.renderingStartTime=Rt(),e.sibling=null,r=vn.current,St(vn,h?r&1|2:r&1),Ee&&Ua(i,c.treeForkCount),e):(nn(i),null);case 22:case 23:return Si(i),Eh(),c=i.memoizedState!==null,e!==null?e.memoizedState!==null!==c&&(i.flags|=8192):c&&(i.flags|=8192),c?(r&536870912)!==0&&(i.flags&128)===0&&(nn(i),i.subtreeFlags&6&&(i.flags|=8192)):nn(i),r=i.updateQueue,r!==null&&ou(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048),e!==null&&K(us),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),La(Mn),nn(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function EM(e,i){switch(lh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return La(Mn),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return Jt(i),null;case 31:if(i.memoizedState!==null){if(Si(i),i.alternate===null)throw Error(a(340));os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(Si(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));os()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return K(vn),null;case 4:return Ht(),null;case 10:return La(i.type),null;case 22:case 23:return Si(i),Eh(),e!==null&&K(us),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return La(Mn),null;case 25:return null;default:return null}}function Ng(e,i){switch(lh(i),i.tag){case 3:La(Mn),Ht();break;case 26:case 27:case 5:Jt(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&Si(i);break;case 13:Si(i);break;case 19:K(vn);break;case 10:La(i.type);break;case 22:case 23:Si(i),Eh(),e!==null&&K(us);break;case 24:La(Mn)}}function Cl(e,i){try{var r=i.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){c=void 0;var m=r.create,b=r.inst;c=m(),b.destroy=c}r=r.next}while(r!==h)}}catch(U){Xe(i,i.return,U)}}function Mr(e,i,r){try{var c=i.updateQueue,h=c!==null?c.lastEffect:null;if(h!==null){var m=h.next;c=m;do{if((c.tag&e)===e){var b=c.inst,U=b.destroy;if(U!==void 0){b.destroy=void 0,h=i;var H=r,nt=U;try{nt()}catch(pt){Xe(h,H,pt)}}}c=c.next}while(c!==m)}}catch(pt){Xe(i,i.return,pt)}}function Lg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{E_(i,r)}catch(c){Xe(e,e.return,c)}}}function Og(e,i,r){r.props=ms(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(c){Xe(e,i,c)}}function wl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var c=e.stateNode;break;case 30:c=e.stateNode;break;default:c=e.stateNode}typeof r=="function"?e.refCleanup=r(c):r.current=c}}catch(h){Xe(e,i,h)}}function da(e,i){var r=e.ref,c=e.refCleanup;if(r!==null)if(typeof c=="function")try{c()}catch(h){Xe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){Xe(e,i,h)}else r.current=null}function Pg(e){var i=e.type,r=e.memoizedProps,c=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&c.focus();break t;case"img":r.src?c.src=r.src:r.srcSet&&(c.srcset=r.srcSet)}}catch(h){Xe(e,e.return,h)}}function ed(e,i,r){try{var c=e.stateNode;WM(c,e.type,r,i),c[Pn]=i}catch(h){Xe(e,e.return,h)}}function Fg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&wr(e.type)||e.tag===4}function nd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Fg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&wr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function id(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ca));else if(c!==4&&(c===27&&wr(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(id(e,i,r),e=e.sibling;e!==null;)id(e,i,r),e=e.sibling}function lu(e,i,r){var c=e.tag;if(c===5||c===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(c!==4&&(c===27&&wr(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(lu(e,i,r),e=e.sibling;e!==null;)lu(e,i,r),e=e.sibling}function zg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var c=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);In(i,c,r),i[gn]=e,i[Pn]=r}catch(m){Xe(e,e.return,m)}}var Ba=!1,Tn=!1,ad=!1,Bg=typeof WeakSet=="function"?WeakSet:Set,Nn=null;function bM(e,i){if(e=e.containerInfo,Td=wu,e=K0(e),Qf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,U=-1,H=-1,nt=0,pt=0,xt=e,ot=null;e:for(;;){for(var ut;xt!==r||h!==0&&xt.nodeType!==3||(U=b+h),xt!==m||c!==0&&xt.nodeType!==3||(H=b+c),xt.nodeType===3&&(b+=xt.nodeValue.length),(ut=xt.firstChild)!==null;)ot=xt,xt=ut;for(;;){if(xt===e)break e;if(ot===r&&++nt===h&&(U=b),ot===m&&++pt===c&&(H=b),(ut=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ut}r=U===-1||H===-1?null:{start:U,end:H}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ad={focusedElem:e,selectionRange:r},wu=!1,Nn=i;Nn!==null;)if(i=Nn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Nn=e;else for(;Nn!==null;){switch(i=Nn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,c=r.stateNode;try{var jt=ms(r.type,h);e=c.getSnapshotBeforeUpdate(jt,m),c.__reactInternalSnapshotBeforeUpdate=e}catch(ie){Xe(r,r.return,ie)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)wd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Nn=e;break}Nn=i.return}}function Ig(e,i,r){var c=r.flags;switch(r.tag){case 0:case 11:case 15:Ga(e,r),c&4&&Cl(5,r);break;case 1:if(Ga(e,r),c&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){Xe(r,r.return,b)}else{var h=ms(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){Xe(r,r.return,b)}}c&64&&Lg(r),c&512&&wl(r,r.return);break;case 3:if(Ga(e,r),c&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{E_(e,i)}catch(b){Xe(r,r.return,b)}}break;case 27:i===null&&c&4&&zg(r);case 26:case 5:Ga(e,r),i===null&&c&4&&Pg(r),c&512&&wl(r,r.return);break;case 12:Ga(e,r);break;case 31:Ga(e,r),c&4&&Vg(e,r);break;case 13:Ga(e,r),c&4&&kg(e,r),c&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=LM.bind(null,r),$M(e,r))));break;case 22:if(c=r.memoizedState!==null||Ba,!c){i=i!==null&&i.memoizedState!==null||Tn,h=Ba;var m=Tn;Ba=c,(Tn=i)&&!m?Ha(e,r,(r.subtreeFlags&8772)!==0):Ga(e,r),Ba=h,Tn=m}break;case 30:break;default:Ga(e,r)}}function Gg(e){var i=e.alternate;i!==null&&(e.alternate=null,Gg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&il(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,ni=!1;function Ia(e,i,r){for(r=r.child;r!==null;)Hg(e,i,r),r=r.sibling}function Hg(e,i,r){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,r)}catch{}switch(r.tag){case 26:Tn||da(r,i),Ia(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:Tn||da(r,i);var c=sn,h=ni;wr(r.type)&&(sn=r.stateNode,ni=!1),Ia(e,i,r),Bl(r.stateNode),sn=c,ni=h;break;case 5:Tn||da(r,i);case 6:if(c=sn,h=ni,sn=null,Ia(e,i,r),sn=c,ni=h,sn!==null)if(ni)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(r.stateNode)}catch(m){Xe(r,i,m)}else try{sn.removeChild(r.stateNode)}catch(m){Xe(r,i,m)}break;case 18:sn!==null&&(ni?(e=sn,Lv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),vo(e)):Lv(sn,r.stateNode));break;case 4:c=sn,h=ni,sn=r.stateNode.containerInfo,ni=!0,Ia(e,i,r),sn=c,ni=h;break;case 0:case 11:case 14:case 15:Mr(2,r,i),Tn||Mr(4,r,i),Ia(e,i,r);break;case 1:Tn||(da(r,i),c=r.stateNode,typeof c.componentWillUnmount=="function"&&Og(r,i,c)),Ia(e,i,r);break;case 21:Ia(e,i,r);break;case 22:Tn=(c=Tn)||r.memoizedState!==null,Ia(e,i,r),Tn=c;break;default:Ia(e,i,r)}}function Vg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vo(e)}catch(r){Xe(i,i.return,r)}}}function kg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vo(e)}catch(r){Xe(i,i.return,r)}}function TM(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Bg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Bg),i;default:throw Error(a(435,e.tag))}}function cu(e,i){var r=TM(e);i.forEach(function(c){if(!r.has(c)){r.add(c);var h=OM.bind(null,e,c);c.then(h,h)}})}function ii(e,i){var r=i.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],m=e,b=i,U=b;t:for(;U!==null;){switch(U.tag){case 27:if(wr(U.type)){sn=U.stateNode,ni=!1;break t}break;case 5:sn=U.stateNode,ni=!1;break t;case 3:case 4:sn=U.stateNode.containerInfo,ni=!0;break t}U=U.return}if(sn===null)throw Error(a(160));Hg(m,b,h),sn=null,ni=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Xg(i,e),i=i.sibling}var ea=null;function Xg(e,i){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ii(i,e),ai(e),c&4&&(Mr(3,e,e.return),Cl(3,e),Mr(5,e,e.return));break;case 1:ii(i,e),ai(e),c&512&&(Tn||r===null||da(r,r.return)),c&64&&Ba&&(e=e.updateQueue,e!==null&&(c=e.callbacks,c!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?c:r.concat(c))));break;case 26:var h=ea;if(ii(i,e),ai(e),c&512&&(Tn||r===null||da(r,r.return)),c&4){var m=r!==null?r.memoizedState:null;if(c=e.memoizedState,r===null)if(c===null)if(e.stateNode===null){t:{c=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(c){case"title":m=h.getElementsByTagName("title")[0],(!m||m[or]||m[gn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(c),h.head.insertBefore(m,h.querySelector("head > title"))),In(m,c,r),m[gn]=e,yn(m),c=m;break t;case"link":var b=Xv("link","href",h).get(c+(r.href||""));if(b){for(var U=0;U<b.length;U++)if(m=b[U],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(U,1);break e}}m=h.createElement(c),In(m,c,r),h.head.appendChild(m);break;case"meta":if(b=Xv("meta","content",h).get(c+(r.content||""))){for(U=0;U<b.length;U++)if(m=b[U],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(U,1);break e}}m=h.createElement(c),In(m,c,r),h.head.appendChild(m);break;default:throw Error(a(468,c))}m[gn]=e,yn(m),c=m}e.stateNode=c}else Wv(h,e.type,e.stateNode);else e.stateNode=kv(h,c,e.memoizedProps);else m!==c?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,c===null?Wv(h,e.type,e.stateNode):kv(h,c,e.memoizedProps)):c===null&&e.stateNode!==null&&ed(e,e.memoizedProps,r.memoizedProps)}break;case 27:ii(i,e),ai(e),c&512&&(Tn||r===null||da(r,r.return)),r!==null&&c&4&&ed(e,e.memoizedProps,r.memoizedProps);break;case 5:if(ii(i,e),ai(e),c&512&&(Tn||r===null||da(r,r.return)),e.flags&32){h=e.stateNode;try{_i(h,"")}catch(jt){Xe(e,e.return,jt)}}c&4&&e.stateNode!=null&&(h=e.memoizedProps,ed(e,h,r!==null?r.memoizedProps:h)),c&1024&&(ad=!0);break;case 6:if(ii(i,e),ai(e),c&4){if(e.stateNode===null)throw Error(a(162));c=e.memoizedProps,r=e.stateNode;try{r.nodeValue=c}catch(jt){Xe(e,e.return,jt)}}break;case 3:if(Tu=null,h=ea,ea=Eu(i.containerInfo),ii(i,e),ea=h,ai(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{vo(i.containerInfo)}catch(jt){Xe(e,e.return,jt)}ad&&(ad=!1,Wg(e));break;case 4:c=ea,ea=Eu(e.stateNode.containerInfo),ii(i,e),ai(e),ea=c;break;case 12:ii(i,e),ai(e);break;case 31:ii(i,e),ai(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,cu(e,c)));break;case 13:ii(i,e),ai(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(fu=Rt()),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,cu(e,c)));break;case 22:h=e.memoizedState!==null;var H=r!==null&&r.memoizedState!==null,nt=Ba,pt=Tn;if(Ba=nt||h,Tn=pt||H,ii(i,e),Tn=pt,Ba=nt,ai(e),c&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||H||Ba||Tn||_s(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){H=r=i;try{if(m=H.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{U=H.stateNode;var xt=H.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;U.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(jt){Xe(H,H.return,jt)}}}else if(i.tag===6){if(r===null){H=i;try{H.stateNode.nodeValue=h?"":H.memoizedProps}catch(jt){Xe(H,H.return,jt)}}}else if(i.tag===18){if(r===null){H=i;try{var ut=H.stateNode;h?Ov(ut,!0):Ov(H.stateNode,!1)}catch(jt){Xe(H,H.return,jt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}c&4&&(c=e.updateQueue,c!==null&&(r=c.retryQueue,r!==null&&(c.retryQueue=null,cu(e,r))));break;case 19:ii(i,e),ai(e),c&4&&(c=e.updateQueue,c!==null&&(e.updateQueue=null,cu(e,c)));break;case 30:break;case 21:break;default:ii(i,e),ai(e)}}function ai(e){var i=e.flags;if(i&2){try{for(var r,c=e.return;c!==null;){if(Fg(c)){r=c;break}c=c.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=nd(e);lu(e,m,h);break;case 5:var b=r.stateNode;r.flags&32&&(_i(b,""),r.flags&=-33);var U=nd(e);lu(e,U,b);break;case 3:case 4:var H=r.stateNode.containerInfo,nt=nd(e);id(e,nt,H);break;default:throw Error(a(161))}}catch(pt){Xe(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Wg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Wg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Ga(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ig(e,i.alternate,i),i=i.sibling}function _s(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Mr(4,i,i.return),_s(i);break;case 1:da(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&Og(i,i.return,r),_s(i);break;case 27:Bl(i.stateNode);case 26:case 5:da(i,i.return),_s(i);break;case 22:i.memoizedState===null&&_s(i);break;case 30:_s(i);break;default:_s(i)}e=e.sibling}}function Ha(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var c=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ha(h,m,r),Cl(4,m);break;case 1:if(Ha(h,m,r),c=m,h=c.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Xe(c,c.return,nt)}if(c=m,h=c.updateQueue,h!==null){var U=c.stateNode;try{var H=h.shared.hiddenCallbacks;if(H!==null)for(h.shared.hiddenCallbacks=null,h=0;h<H.length;h++)M_(H[h],U)}catch(nt){Xe(c,c.return,nt)}}r&&b&64&&Lg(m),wl(m,m.return);break;case 27:zg(m);case 26:case 5:Ha(h,m,r),r&&c===null&&b&4&&Pg(m),wl(m,m.return);break;case 12:Ha(h,m,r);break;case 31:Ha(h,m,r),r&&b&4&&Vg(h,m);break;case 13:Ha(h,m,r),r&&b&4&&kg(h,m);break;case 22:m.memoizedState===null&&Ha(h,m,r),wl(m,m.return);break;case 30:break;default:Ha(h,m,r)}i=i.sibling}}function rd(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&ml(r))}function sd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ml(e))}function na(e,i,r,c){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)qg(e,i,r,c),i=i.sibling}function qg(e,i,r,c){var h=i.flags;switch(i.tag){case 0:case 11:case 15:na(e,i,r,c),h&2048&&Cl(9,i);break;case 1:na(e,i,r,c);break;case 3:na(e,i,r,c),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&ml(e)));break;case 12:if(h&2048){na(e,i,r,c),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,U=m.onPostCommit;typeof U=="function"&&U(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(H){Xe(i,i.return,H)}}else na(e,i,r,c);break;case 31:na(e,i,r,c);break;case 13:na(e,i,r,c);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?na(e,i,r,c):Dl(e,i):m._visibility&2?na(e,i,r,c):(m._visibility|=2,so(e,i,r,c,(i.subtreeFlags&10256)!==0||!1)),h&2048&&rd(b,i);break;case 24:na(e,i,r,c),h&2048&&sd(i.alternate,i);break;default:na(e,i,r,c)}}function so(e,i,r,c,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,U=r,H=c,nt=b.flags;switch(b.tag){case 0:case 11:case 15:so(m,b,U,H,h),Cl(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?so(m,b,U,H,h):Dl(m,b):(pt._visibility|=2,so(m,b,U,H,h)),h&&nt&2048&&rd(b.alternate,b);break;case 24:so(m,b,U,H,h),h&&nt&2048&&sd(b.alternate,b);break;default:so(m,b,U,H,h)}i=i.sibling}}function Dl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,c=i,h=c.flags;switch(c.tag){case 22:Dl(r,c),h&2048&&rd(c.alternate,c);break;case 24:Dl(r,c),h&2048&&sd(c.alternate,c);break;default:Dl(r,c)}i=i.sibling}}var Ul=8192;function oo(e,i,r){if(e.subtreeFlags&Ul)for(e=e.child;e!==null;)jg(e,i,r),e=e.sibling}function jg(e,i,r){switch(e.tag){case 26:oo(e,i,r),e.flags&Ul&&e.memoizedState!==null&&fE(r,ea,e.memoizedState,e.memoizedProps);break;case 5:oo(e,i,r);break;case 3:case 4:var c=ea;ea=Eu(e.stateNode.containerInfo),oo(e,i,r),ea=c;break;case 22:e.memoizedState===null&&(c=e.alternate,c!==null&&c.memoizedState!==null?(c=Ul,Ul=16777216,oo(e,i,r),Ul=c):oo(e,i,r));break;default:oo(e,i,r)}}function Yg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Nl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Nn=c,Kg(c,e)}Yg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zg(e),e=e.sibling}function Zg(e){switch(e.tag){case 0:case 11:case 15:Nl(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:Nl(e);break;case 12:Nl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,uu(e)):Nl(e);break;default:Nl(e)}}function uu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var c=i[r];Nn=c,Kg(c,e)}Yg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Mr(8,i,i.return),uu(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,uu(i));break;default:uu(i)}e=e.sibling}}function Kg(e,i){for(;Nn!==null;){var r=Nn;switch(r.tag){case 0:case 11:case 15:Mr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var c=r.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:ml(r.memoizedState.cache)}if(c=r.child,c!==null)c.return=r,Nn=c;else t:for(r=e;Nn!==null;){c=Nn;var h=c.sibling,m=c.return;if(Gg(c),c===r){Nn=null;break t}if(h!==null){h.return=m,Nn=h;break t}Nn=m}}}var AM={getCacheForType:function(e){var i=zn(Mn),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return zn(Mn).controller.signal}},RM=typeof WeakMap=="function"?WeakMap:Map,Pe=0,Ke=null,xe=null,ye=0,ke=0,yi=null,Er=!1,lo=!1,od=!1,Va=0,dn=0,br=0,gs=0,ld=0,Mi=0,co=0,Ll=null,ri=null,cd=!1,fu=0,Qg=0,hu=1/0,du=null,Tr=null,wn=0,Ar=null,uo=null,ka=0,ud=0,fd=null,Jg=null,Ol=0,hd=null;function Ei(){return(Pe&2)!==0&&ye!==0?ye&-ye:z.T!==null?vd():tl()}function $g(){if(Mi===0)if((ye&536870912)===0||Ee){var e=ge;ge<<=1,(ge&3932160)===0&&(ge=262144),Mi=e}else Mi=536870912;return e=xi.current,e!==null&&(e.flags|=32),Mi}function si(e,i,r){(e===Ke&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(fo(e,0),Rr(e,ye,Mi,!1)),ae(e,r),((Pe&2)===0||e!==Ke)&&(e===Ke&&((Pe&2)===0&&(gs|=r),dn===4&&Rr(e,ye,Mi,!1)),pa(e))}function tv(e,i,r){if((Pe&6)!==0)throw Error(a(327));var c=!r&&(i&127)===0&&(i&e.expiredLanes)===0||It(e,i),h=c?DM(e,i):pd(e,i,!0),m=c;do{if(h===0){lo&&!c&&Rr(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!CM(r)){h=pd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var U=e;h=Ll;var H=U.current.memoizedState.isDehydrated;if(H&&(fo(U,b).flags|=256),b=pd(U,b,!1),b!==2){if(od&&!H){U.errorRecoveryDisabledLanes|=m,gs|=m,h=4;break t}m=ri,ri=h,m!==null&&(ri===null?ri=m:ri.push.apply(ri,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){fo(e,0),Rr(e,i,0,!0);break}t:{switch(c=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Rr(c,i,Mi,!Er);break t;case 2:ri=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=fu+300-Rt(),10<h)){if(Rr(c,i,Mi,!Er),mt(c,0,!0)!==0)break t;ka=i,c.timeoutHandle=Uv(ev.bind(null,c,r,ri,du,cd,i,Mi,gs,co,Er,m,"Throttled",-0,0),h);break t}ev(c,r,ri,du,cd,i,Mi,gs,co,Er,m,null,-0,0)}}break}while(!0);pa(e)}function ev(e,i,r,c,h,m,b,U,H,nt,pt,xt,ot,ut){if(e.timeoutHandle=-1,xt=i.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ca},jg(i,m,xt);var jt=(m&62914560)===m?fu-Rt():(m&4194048)===m?Qg-Rt():0;if(jt=hE(xt,jt),jt!==null){ka=m,e.cancelPendingCommit=jt(cv.bind(null,e,i,m,r,c,h,b,U,H,pt,xt,null,ot,ut)),Rr(e,m,b,!nt);return}}cv(e,i,m,r,c,h,b,U,H)}function CM(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var c=0;c<r.length;c++){var h=r[c],m=h.getSnapshot;h=h.value;try{if(!gi(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(e,i,r,c){i&=~ld,i&=~gs,e.suspendedLanes|=i,e.pingedLanes&=~i,c&&(e.warmLanes|=i),c=e.expirationTimes;for(var h=i;0<h;){var m=31-Ft(h),b=1<<m;c[m]=-1,h&=~b}r!==0&&Oe(e,r,i)}function pu(){return(Pe&6)===0?(Pl(0),!1):!0}function dd(){if(xe!==null){if(ke===0)var e=xe.return;else e=xe,Na=ls=null,wh(e),eo=null,gl=0,e=xe;for(;e!==null;)Ng(e.alternate,e),e=e.return;xe=null}}function fo(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,YM(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),ka=0,dd(),Ke=e,xe=r=Da(e.current,null),ye=i,ke=0,yi=null,Er=!1,lo=It(e,i),od=!1,co=Mi=ld=gs=br=dn=0,ri=Ll=null,cd=!1,(i&8)!==0&&(i|=i&32);var c=e.entangledLanes;if(c!==0)for(e=e.entanglements,c&=i;0<c;){var h=31-Ft(c),m=1<<h;i|=e[h],c&=~m}return Va=i,Pc(),r}function nv(e,i){he=null,z.H=Tl,i===to||i===kc?(i=v_(),ke=3):i===gh?(i=v_(),ke=4):ke=i===Wh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,yi=i,xe===null&&(dn=1,iu(e,zi(i,e.current)))}function iv(){var e=xi.current;return e===null?!0:(ye&4194048)===ye?Hi===null:(ye&62914560)===ye||(ye&536870912)!==0?e===Hi:!1}function av(){var e=z.H;return z.H=Tl,e===null?Tl:e}function rv(){var e=z.A;return z.A=AM,e}function mu(){dn=4,Er||(ye&4194048)!==ye&&xi.current!==null||(lo=!0),(br&134217727)===0&&(gs&134217727)===0||Ke===null||Rr(Ke,ye,Mi,!1)}function pd(e,i,r){var c=Pe;Pe|=2;var h=av(),m=rv();(Ke!==e||ye!==i)&&(du=null,fo(e,i)),i=!1;var b=dn;t:do try{if(ke!==0&&xe!==null){var U=xe,H=yi;switch(ke){case 8:dd(),b=6;break t;case 3:case 2:case 9:case 6:xi.current===null&&(i=!0);var nt=ke;if(ke=0,yi=null,ho(e,U,H,nt),r&&lo){b=0;break t}break;default:nt=ke,ke=0,yi=null,ho(e,U,H,nt)}}wM(),b=dn;break}catch(pt){nv(e,pt)}while(!0);return i&&e.shellSuspendCounter++,Na=ls=null,Pe=c,z.H=h,z.A=m,xe===null&&(Ke=null,ye=0,Pc()),b}function wM(){for(;xe!==null;)sv(xe)}function DM(e,i){var r=Pe;Pe|=2;var c=av(),h=rv();Ke!==e||ye!==i?(du=null,hu=Rt()+500,fo(e,i)):lo=It(e,i);t:do try{if(ke!==0&&xe!==null){i=xe;var m=yi;e:switch(ke){case 1:ke=0,yi=null,ho(e,i,m,1);break;case 2:case 9:if(__(m)){ke=0,yi=null,ov(i);break}i=function(){ke!==2&&ke!==9||Ke!==e||(ke=7),pa(e)},m.then(i,i);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:__(m)?(ke=0,yi=null,ov(i)):(ke=0,yi=null,ho(e,i,m,7));break;case 5:var b=null;switch(xe.tag){case 26:b=xe.memoizedState;case 5:case 27:var U=xe;if(b?qv(b):U.stateNode.complete){ke=0,yi=null;var H=U.sibling;if(H!==null)xe=H;else{var nt=U.return;nt!==null?(xe=nt,_u(nt)):xe=null}break e}}ke=0,yi=null,ho(e,i,m,5);break;case 6:ke=0,yi=null,ho(e,i,m,6);break;case 8:dd(),dn=6;break t;default:throw Error(a(462))}}UM();break}catch(pt){nv(e,pt)}while(!0);return Na=ls=null,z.H=c,z.A=h,Pe=r,xe!==null?0:(Ke=null,ye=0,Pc(),dn)}function UM(){for(;xe!==null&&!pe();)sv(xe)}function sv(e){var i=Dg(e.alternate,e,Va);e.memoizedProps=e.pendingProps,i===null?_u(e):xe=i}function ov(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=bg(r,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=bg(r,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:wh(i);default:Ng(r,i),i=xe=r_(i,Va),i=Dg(r,i,Va)}e.memoizedProps=e.pendingProps,i===null?_u(e):xe=i}function ho(e,i,r,c){Na=ls=null,wh(i),eo=null,gl=0;var h=i.return;try{if(xM(e,h,i,r,ye)){dn=1,iu(e,zi(r,e.current)),xe=null;return}}catch(m){if(h!==null)throw xe=h,m;dn=1,iu(e,zi(r,e.current)),xe=null;return}i.flags&32768?(Ee||c===1?e=!0:lo||(ye&536870912)!==0?e=!1:(Er=e=!0,(c===2||c===9||c===3||c===6)&&(c=xi.current,c!==null&&c.tag===13&&(c.flags|=16384))),lv(i,e)):_u(i)}function _u(e){var i=e;do{if((i.flags&32768)!==0){lv(i,Er);return}e=i.return;var r=MM(i.alternate,i,Va);if(r!==null){xe=r;return}if(i=i.sibling,i!==null){xe=i;return}xe=i=e}while(i!==null);dn===0&&(dn=5)}function lv(e,i){do{var r=EM(e.alternate,e);if(r!==null){r.flags&=32767,xe=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){xe=e;return}xe=e=r}while(e!==null);dn=6,xe=null}function cv(e,i,r,c,h,m,b,U,H){e.cancelPendingCommit=null;do gu();while(wn!==0);if((Pe&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=nh,ln(e,r,m,b,U,H),e===Ke&&(xe=Ke=null,ye=0),uo=i,Ar=e,ka=r,ud=m,fd=h,Jg=c,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,PM(J,function(){return pv(),null})):(e.callbackNode=null,e.callbackPriority=0),c=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||c){c=z.T,z.T=null,h=G.p,G.p=2,b=Pe,Pe|=4;try{bM(e,i,r)}finally{Pe=b,G.p=h,z.T=c}}wn=1,uv(),fv(),hv()}}function uv(){if(wn===1){wn=0;var e=Ar,i=uo,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=z.T,z.T=null;var c=G.p;G.p=2;var h=Pe;Pe|=4;try{Xg(i,e);var m=Ad,b=K0(e.containerInfo),U=m.focusedElem,H=m.selectionRange;if(b!==U&&U&&U.ownerDocument&&Z0(U.ownerDocument.documentElement,U)){if(H!==null&&Qf(U)){var nt=H.start,pt=H.end;if(pt===void 0&&(pt=nt),"selectionStart"in U)U.selectionStart=nt,U.selectionEnd=Math.min(pt,U.value.length);else{var xt=U.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),jt=U.textContent.length,ie=Math.min(H.start,jt),Ye=H.end===void 0?ie:Math.min(H.end,jt);!ut.extend&&ie>Ye&&(b=Ye,Ye=ie,ie=b);var Q=Y0(U,ie),j=Y0(U,Ye);if(Q&&j&&(ut.rangeCount!==1||ut.anchorNode!==Q.node||ut.anchorOffset!==Q.offset||ut.focusNode!==j.node||ut.focusOffset!==j.offset)){var et=xt.createRange();et.setStart(Q.node,Q.offset),ut.removeAllRanges(),ie>Ye?(ut.addRange(et),ut.extend(j.node,j.offset)):(et.setEnd(j.node,j.offset),ut.addRange(et))}}}}for(xt=[],ut=U;ut=ut.parentNode;)ut.nodeType===1&&xt.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof U.focus=="function"&&U.focus(),U=0;U<xt.length;U++){var _t=xt[U];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}wu=!!Td,Ad=Td=null}finally{Pe=h,G.p=c,z.T=r}}e.current=i,wn=2}}function fv(){if(wn===2){wn=0;var e=Ar,i=uo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=z.T,z.T=null;var c=G.p;G.p=2;var h=Pe;Pe|=4;try{Ig(e,i.alternate,i)}finally{Pe=h,G.p=c,z.T=r}}wn=3}}function hv(){if(wn===4||wn===3){wn=0,Ce();var e=Ar,i=uo,r=ka,c=Jg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?wn=5:(wn=0,uo=Ar=null,dv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Tr=null),$o(r),i=i.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,i,void 0,(i.current.flags&128)===128)}catch{}if(c!==null){i=z.T,h=G.p,G.p=2,z.T=null;try{for(var m=e.onRecoverableError,b=0;b<c.length;b++){var U=c[b];m(U.value,{componentStack:U.stack})}}finally{z.T=i,G.p=h}}(ka&3)!==0&&gu(),pa(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===hd?Ol++:(Ol=0,hd=e):Ol=0,Pl(0)}}function dv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,ml(i)))}function gu(){return uv(),fv(),hv(),pv()}function pv(){if(wn!==5)return!1;var e=Ar,i=ud;ud=0;var r=$o(ka),c=z.T,h=G.p;try{G.p=32>r?32:r,z.T=null,r=fd,fd=null;var m=Ar,b=ka;if(wn=0,uo=Ar=null,ka=0,(Pe&6)!==0)throw Error(a(331));var U=Pe;if(Pe|=4,Zg(m.current),qg(m,m.current,b,r),Pe=U,Pl(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,m)}catch{}return!0}finally{G.p=h,z.T=c,dv(e,i)}}function mv(e,i,r){i=zi(r,i),i=Xh(e.stateNode,i,2),e=xr(e,i,2),e!==null&&(ae(e,2),pa(e))}function Xe(e,i,r){if(e.tag===3)mv(e,e,r);else for(;i!==null;){if(i.tag===3){mv(i,e,r);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Tr===null||!Tr.has(c))){e=zi(r,e),r=_g(2),c=xr(i,r,2),c!==null&&(gg(r,c,i,e),ae(c,2),pa(c));break}}i=i.return}}function md(e,i,r){var c=e.pingCache;if(c===null){c=e.pingCache=new RM;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(r)||(od=!0,h.add(r),e=NM.bind(null,e,i,r),i.then(e,e))}function NM(e,i,r){var c=e.pingCache;c!==null&&c.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Ke===e&&(ye&r)===r&&(dn===4||dn===3&&(ye&62914560)===ye&&300>Rt()-fu?(Pe&2)===0&&fo(e,0):ld|=r,co===ye&&(co=0)),pa(e)}function _v(e,i){i===0&&(i=Et()),e=rs(e,i),e!==null&&(ae(e,i),pa(e))}function LM(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),_v(e,r)}function OM(e,i){var r=0;switch(e.tag){case 31:case 13:var c=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:c=e.stateNode;break;case 22:c=e.stateNode._retryCache;break;default:throw Error(a(314))}c!==null&&c.delete(i),_v(e,r)}function PM(e,i){return Y(e,i)}var vu=null,po=null,_d=!1,xu=!1,gd=!1,Cr=0;function pa(e){e!==po&&e.next===null&&(po===null?vu=po=e:po=po.next=e),xu=!0,_d||(_d=!0,zM())}function Pl(e,i){if(!gd&&xu){gd=!0;do for(var r=!1,c=vu;c!==null;){if(e!==0){var h=c.pendingLanes;if(h===0)var m=0;else{var b=c.suspendedLanes,U=c.pingedLanes;m=(1<<31-Ft(42|e)+1)-1,m&=h&~(b&~U),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,Sv(c,m))}else m=ye,m=mt(c,c===Ke?m:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(m&3)===0||It(c,m)||(r=!0,Sv(c,m));c=c.next}while(r);gd=!1}}function FM(){gv()}function gv(){xu=_d=!1;var e=0;Cr!==0&&jM()&&(e=Cr);for(var i=Rt(),r=null,c=vu;c!==null;){var h=c.next,m=vv(c,i);m===0?(c.next=null,r===null?vu=h:r.next=h,h===null&&(po=r)):(r=c,(e!==0||(m&3)!==0)&&(xu=!0)),c=h}wn!==0&&wn!==5||Pl(e),Cr!==0&&(Cr=0)}function vv(e,i){for(var r=e.suspendedLanes,c=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Ft(m),U=1<<b,H=h[b];H===-1?((U&r)===0||(U&c)!==0)&&(h[b]=Lt(U,i)):H<=i&&(e.expiredLanes|=U),m&=~U}if(i=Ke,r=ye,r=mt(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c=e.callbackNode,r===0||e===i&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return c!==null&&c!==null&&tn(c),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||It(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(c!==null&&tn(c),$o(r)){case 2:case 8:r=R;break;case 32:r=J;break;case 268435456:r=bt;break;default:r=J}return c=xv.bind(null,e),r=Y(r,c),e.callbackPriority=i,e.callbackNode=r,i}return c!==null&&c!==null&&tn(c),e.callbackPriority=2,e.callbackNode=null,2}function xv(e,i){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(gu()&&e.callbackNode!==r)return null;var c=ye;return c=mt(e,e===Ke?c:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),c===0?null:(tv(e,c,i),vv(e,Rt()),e.callbackNode!=null&&e.callbackNode===r?xv.bind(null,e):null)}function Sv(e,i){if(gu())return null;tv(e,i,!0)}function zM(){ZM(function(){(Pe&6)!==0?Y(F,FM):gv()})}function vd(){if(Cr===0){var e=Js;e===0&&(e=oe,oe<<=1,(oe&261888)===0&&(oe=256)),Cr=e}return Cr}function yv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:es(""+e)}function Mv(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function BM(e,i,r,c,h){if(i==="submit"&&r&&r.stateNode===h){var m=yv((h[Pn]||null).action),b=c.submitter;b&&(i=(i=b[Pn]||null)?yv(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var U=new Uc("action","action",null,c,h);e.push({event:U,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Cr!==0){var H=b?Mv(h,b):new FormData(h);Bh(r,{pending:!0,data:H,method:h.method,action:m},null,H)}}else typeof m=="function"&&(U.preventDefault(),H=b?Mv(h,b):new FormData(h),Bh(r,{pending:!0,data:H,method:h.method,action:m},m,H))},currentTarget:h}]})}}for(var xd=0;xd<eh.length;xd++){var Sd=eh[xd],IM=Sd.toLowerCase(),GM=Sd[0].toUpperCase()+Sd.slice(1);ta(IM,"on"+GM)}ta($0,"onAnimationEnd"),ta(t_,"onAnimationIteration"),ta(e_,"onAnimationStart"),ta("dblclick","onDoubleClick"),ta("focusin","onFocus"),ta("focusout","onBlur"),ta(nM,"onTransitionRun"),ta(iM,"onTransitionStart"),ta(aM,"onTransitionCancel"),ta(n_,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),Z("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Z("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Z("onBeforeInput",["compositionend","keypress","textInput","paste"]),Z("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Z("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),HM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl));function Ev(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var c=e[r],h=c.event;c=c.listeners;t:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var U=c[b],H=U.instance,nt=U.currentTarget;if(U=U.listener,H!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=nt;try{m(h)}catch(pt){Oc(pt)}h.currentTarget=null,m=H}else for(b=0;b<c.length;b++){if(U=c[b],H=U.instance,nt=U.currentTarget,U=U.listener,H!==m&&h.isPropagationStopped())break t;m=U,h.currentTarget=nt;try{m(h)}catch(pt){Oc(pt)}h.currentTarget=null,m=H}}}}function Se(e,i){var r=i[sr];r===void 0&&(r=i[sr]=new Set);var c=e+"__bubble";r.has(c)||(bv(i,e,2,!1),r.add(c))}function yd(e,i,r){var c=0;i&&(c|=4),bv(r,e,c,i)}var Su="_reactListening"+Math.random().toString(36).slice(2);function Md(e){if(!e[Su]){e[Su]=!0,Rc.forEach(function(r){r!=="selectionchange"&&(HM.has(r)||yd(r,!1,e),yd(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Su]||(i[Su]=!0,yd("selectionchange",!1,i))}}function bv(e,i,r,c){switch($v(i)){case 2:var h=mE;break;case 8:h=_E;break;default:h=zd}r=h.bind(null,i,r,e),h=void 0,!Vf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function Ed(e,i,r,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)t:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var U=c.stateNode.containerInfo;if(U===h)break;if(b===4)for(b=c.return;b!==null;){var H=b.tag;if((H===3||H===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;U!==null;){if(b=lr(U),b===null)return;if(H=b.tag,H===5||H===6||H===26||H===27){c=m=b;continue t}U=U.parentNode}}c=c.return}w0(function(){var nt=m,pt=Gf(r),xt=[];t:{var ot=i_.get(e);if(ot!==void 0){var ut=Uc,jt=e;switch(e){case"keypress":if(wc(r)===0)break t;case"keydown":case"keyup":ut=O1;break;case"focusin":jt="focus",ut=qf;break;case"focusout":jt="blur",ut=qf;break;case"beforeblur":case"afterblur":ut=qf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=N0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=M1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=z1;break;case $0:case t_:case e_:ut=T1;break;case n_:ut=I1;break;case"scroll":case"scrollend":ut=S1;break;case"wheel":ut=H1;break;case"copy":case"cut":case"paste":ut=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=O0;break;case"toggle":case"beforetoggle":ut=k1}var ie=(i&4)!==0,Ye=!ie&&(e==="scroll"||e==="scrollend"),Q=ie?ot!==null?ot+"Capture":null:ot;ie=[];for(var j=nt,et;j!==null;){var _t=j;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||Q===null||(_t=al(j,Q),_t!=null&&ie.push(zl(j,_t,et))),Ye)break;j=j.return}0<ie.length&&(ot=new ut(ot,jt,null,r,pt),xt.push({event:ot,listeners:ie}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&r!==If&&(jt=r.relatedTarget||r.fromElement)&&(lr(jt)||jt[Ra]))break t;if((ut||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(jt=r.relatedTarget||r.toElement,ut=nt,jt=jt?lr(jt):null,jt!==null&&(Ye=l(jt),ie=jt.tag,jt!==Ye||ie!==5&&ie!==27&&ie!==6)&&(jt=null)):(ut=null,jt=nt),ut!==jt)){if(ie=N0,_t="onMouseLeave",Q="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ie=O0,_t="onPointerLeave",Q="onPointerEnter",j="pointer"),Ye=ut==null?ot:ts(ut),et=jt==null?ot:ts(jt),ot=new ie(_t,j+"leave",ut,r,pt),ot.target=Ye,ot.relatedTarget=et,_t=null,lr(pt)===nt&&(ie=new ie(Q,j+"enter",jt,r,pt),ie.target=et,ie.relatedTarget=Ye,_t=ie),Ye=_t,ut&&jt)e:{for(ie=VM,Q=ut,j=jt,et=0,_t=Q;_t;_t=ie(_t))et++;_t=0;for(var te=j;te;te=ie(te))_t++;for(;0<et-_t;)Q=ie(Q),et--;for(;0<_t-et;)j=ie(j),_t--;for(;et--;){if(Q===j||j!==null&&Q===j.alternate){ie=Q;break e}Q=ie(Q),j=ie(j)}ie=null}else ie=null;ut!==null&&Tv(xt,ot,ut,ie,!1),jt!==null&&Ye!==null&&Tv(xt,Ye,jt,ie,!0)}}t:{if(ot=nt?ts(nt):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ne=V0;else if(G0(ot))if(k0)Ne=$1;else{Ne=Q1;var Zt=K1}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?nt&&ze(nt.elementType)&&(Ne=V0):Ne=J1;if(Ne&&(Ne=Ne(e,nt))){H0(xt,Ne,r,pt);break t}Zt&&Zt(e,ot,nt),e==="focusout"&&nt&&ot.type==="number"&&nt.memoizedProps.value!=null&&ve(ot,"number",ot.value)}switch(Zt=nt?ts(nt):window,e){case"focusin":(G0(Zt)||Zt.contentEditable==="true")&&(Xs=Zt,Jf=nt,hl=null);break;case"focusout":hl=Jf=Xs=null;break;case"mousedown":$f=!0;break;case"contextmenu":case"mouseup":case"dragend":$f=!1,Q0(xt,r,pt);break;case"selectionchange":if(eM)break;case"keydown":case"keyup":Q0(xt,r,pt)}var de;if(Yf)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else ks?B0(e,r)&&(Me="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Me="onCompositionStart");Me&&(P0&&r.locale!=="ko"&&(ks||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ks&&(de=D0()):(hr=pt,kf="value"in hr?hr.value:hr.textContent,ks=!0)),Zt=yu(nt,Me),0<Zt.length&&(Me=new L0(Me,e,null,r,pt),xt.push({event:Me,listeners:Zt}),de?Me.data=de:(de=I0(r),de!==null&&(Me.data=de)))),(de=W1?q1(e,r):j1(e,r))&&(Me=yu(nt,"onBeforeInput"),0<Me.length&&(Zt=new L0("onBeforeInput","beforeinput",null,r,pt),xt.push({event:Zt,listeners:Me}),Zt.data=de)),BM(xt,e,nt,r,pt)}Ev(xt,i)})}function zl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function yu(e,i){for(var r=i+"Capture",c=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=al(e,r),h!=null&&c.unshift(zl(e,h,m)),h=al(e,i),h!=null&&c.push(zl(e,h,m))),e.tag===3)return c;e=e.return}return[]}function VM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tv(e,i,r,c,h){for(var m=i._reactName,b=[];r!==null&&r!==c;){var U=r,H=U.alternate,nt=U.stateNode;if(U=U.tag,H!==null&&H===c)break;U!==5&&U!==26&&U!==27||nt===null||(H=nt,h?(nt=al(r,m),nt!=null&&b.unshift(zl(r,nt,H))):h||(nt=al(r,m),nt!=null&&b.push(zl(r,nt,H)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var kM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function Av(e){return(typeof e=="string"?e:""+e).replace(kM,`
`).replace(XM,"")}function Rv(e,i){return i=Av(i),Av(e)===i}function je(e,i,r,c,h,m){switch(r){case"children":typeof c=="string"?i==="body"||i==="textarea"&&c===""||_i(e,c):(typeof c=="number"||typeof c=="bigint")&&i!=="body"&&_i(e,""+c);break;case"className":qt(e,"class",c);break;case"tabIndex":qt(e,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":qt(e,r,c);break;case"style":$i(e,c,m);break;case"data":if(i!=="object"){qt(e,"data",c);break}case"src":case"href":if(c===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=es(""+c),e.setAttribute(r,c);break;case"action":case"formAction":if(typeof c=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&je(e,i,"name",h.name,h,null),je(e,i,"formEncType",h.formEncType,h,null),je(e,i,"formMethod",h.formMethod,h,null),je(e,i,"formTarget",h.formTarget,h,null)):(je(e,i,"encType",h.encType,h,null),je(e,i,"method",h.method,h,null),je(e,i,"target",h.target,h,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){e.removeAttribute(r);break}c=es(""+c),e.setAttribute(r,c);break;case"onClick":c!=null&&(e.onclick=Ca);break;case"onScroll":c!=null&&Se("scroll",e);break;case"onScrollEnd":c!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":e.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){e.removeAttribute("xlink:href");break}r=es(""+c),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""+c):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":c===!0?e.setAttribute(r,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?e.setAttribute(r,c):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?e.setAttribute(r,c):e.removeAttribute(r);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?e.removeAttribute(r):e.setAttribute(r,c);break;case"popover":Se("beforetoggle",e),Se("toggle",e),zt(e,"popover",c);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":zt(e,"is",c);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=ua.get(r)||r,zt(e,r,c))}}function bd(e,i,r,c,h,m){switch(r){case"style":$i(e,c,m);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(a(61));if(r=c.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof c=="string"?_i(e,c):(typeof c=="number"||typeof c=="bigint")&&_i(e,""+c);break;case"onScroll":c!=null&&Se("scroll",e);break;case"onScrollEnd":c!=null&&Se("scrollend",e);break;case"onClick":c!=null&&(e.onclick=Ca);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!C.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[Pn]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof c=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,c,h);break t}r in e?e[r]=c:c===!0?e.setAttribute(r,""):zt(e,r,c)}}}function In(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var c=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":c=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:je(e,i,m,b,r,null)}}h&&je(e,i,"srcSet",r.srcSet,r,null),c&&je(e,i,"src",r.src,r,null);return;case"input":Se("invalid",e);var U=m=b=h=null,H=null,nt=null;for(c in r)if(r.hasOwnProperty(c)){var pt=r[c];if(pt!=null)switch(c){case"name":h=pt;break;case"type":b=pt;break;case"checked":H=pt;break;case"defaultChecked":nt=pt;break;case"value":m=pt;break;case"defaultValue":U=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:je(e,i,c,pt,r,null)}}Xn(e,m,U,H,nt,b,h,!1);return;case"select":Se("invalid",e),c=b=m=null;for(h in r)if(r.hasOwnProperty(h)&&(U=r[h],U!=null))switch(h){case"value":m=U;break;case"defaultValue":b=U;break;case"multiple":c=U;default:je(e,i,h,U,r,null)}i=m,r=b,e.multiple=!!c,i!=null?Cn(e,!!c,i,!1):r!=null&&Cn(e,!!c,r,!0);return;case"textarea":Se("invalid",e),m=h=c=null;for(b in r)if(r.hasOwnProperty(b)&&(U=r[b],U!=null))switch(b){case"value":c=U;break;case"defaultValue":h=U;break;case"children":m=U;break;case"dangerouslySetInnerHTML":if(U!=null)throw Error(a(91));break;default:je(e,i,b,U,r,null)}Ji(e,c,h,m);return;case"option":for(H in r)r.hasOwnProperty(H)&&(c=r[H],c!=null)&&(H==="selected"?e.selected=c&&typeof c!="function"&&typeof c!="symbol":je(e,i,H,c,r,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(c=0;c<Fl.length;c++)Se(Fl[c],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(c=r[nt],c!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:je(e,i,nt,c,r,null)}return;default:if(ze(i)){for(pt in r)r.hasOwnProperty(pt)&&(c=r[pt],c!==void 0&&bd(e,i,pt,c,r,void 0));return}}for(U in r)r.hasOwnProperty(U)&&(c=r[U],c!=null&&je(e,i,U,c,r,null))}function WM(e,i,r,c){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,U=null,H=null,nt=null,pt=null;for(ut in r){var xt=r[ut];if(r.hasOwnProperty(ut)&&xt!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":H=xt;default:c.hasOwnProperty(ut)||je(e,i,ut,null,c,xt)}}for(var ot in c){var ut=c[ot];if(xt=r[ot],c.hasOwnProperty(ot)&&(ut!=null||xt!=null))switch(ot){case"type":m=ut;break;case"name":h=ut;break;case"checked":nt=ut;break;case"defaultChecked":pt=ut;break;case"value":b=ut;break;case"defaultValue":U=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==xt&&je(e,i,ot,ut,c,xt)}}kt(e,b,U,H,nt,pt,m,h);return;case"select":ut=b=U=ot=null;for(m in r)if(H=r[m],r.hasOwnProperty(m)&&H!=null)switch(m){case"value":break;case"multiple":ut=H;default:c.hasOwnProperty(m)||je(e,i,m,null,c,H)}for(h in c)if(m=c[h],H=r[h],c.hasOwnProperty(h)&&(m!=null||H!=null))switch(h){case"value":ot=m;break;case"defaultValue":U=m;break;case"multiple":b=m;default:m!==H&&je(e,i,h,m,c,H)}i=U,r=b,c=ut,ot!=null?Cn(e,!!r,ot,!1):!!c!=!!r&&(i!=null?Cn(e,!!r,i,!0):Cn(e,!!r,r?[]:"",!1));return;case"textarea":ut=ot=null;for(U in r)if(h=r[U],r.hasOwnProperty(U)&&h!=null&&!c.hasOwnProperty(U))switch(U){case"value":break;case"children":break;default:je(e,i,U,null,c,h)}for(b in c)if(h=c[b],m=r[b],c.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":ot=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&je(e,i,b,h,c,m)}mi(e,ot,ut);return;case"option":for(var jt in r)ot=r[jt],r.hasOwnProperty(jt)&&ot!=null&&!c.hasOwnProperty(jt)&&(jt==="selected"?e.selected=!1:je(e,i,jt,null,c,ot));for(H in c)ot=c[H],ut=r[H],c.hasOwnProperty(H)&&ot!==ut&&(ot!=null||ut!=null)&&(H==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":je(e,i,H,ot,c,ut));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in r)ot=r[ie],r.hasOwnProperty(ie)&&ot!=null&&!c.hasOwnProperty(ie)&&je(e,i,ie,null,c,ot);for(nt in c)if(ot=c[nt],ut=r[nt],c.hasOwnProperty(nt)&&ot!==ut&&(ot!=null||ut!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:je(e,i,nt,ot,c,ut)}return;default:if(ze(i)){for(var Ye in r)ot=r[Ye],r.hasOwnProperty(Ye)&&ot!==void 0&&!c.hasOwnProperty(Ye)&&bd(e,i,Ye,void 0,c,ot);for(pt in c)ot=c[pt],ut=r[pt],!c.hasOwnProperty(pt)||ot===ut||ot===void 0&&ut===void 0||bd(e,i,pt,ot,c,ut);return}}for(var Q in r)ot=r[Q],r.hasOwnProperty(Q)&&ot!=null&&!c.hasOwnProperty(Q)&&je(e,i,Q,null,c,ot);for(xt in c)ot=c[xt],ut=r[xt],!c.hasOwnProperty(xt)||ot===ut||ot==null&&ut==null||je(e,i,xt,ot,c,ut)}function Cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),c=0;c<r.length;c++){var h=r[c],m=h.transferSize,b=h.initiatorType,U=h.duration;if(m&&U&&Cv(b)){for(b=0,U=h.responseEnd,c+=1;c<r.length;c++){var H=r[c],nt=H.startTime;if(nt>U)break;var pt=H.transferSize,xt=H.initiatorType;pt&&Cv(xt)&&(H=H.responseEnd,b+=pt*(H<U?1:(U-nt)/(H-nt)))}if(--c,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Td=null,Ad=null;function Mu(e){return e.nodeType===9?e:e.ownerDocument}function wv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Rd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Cd=null;function jM(){var e=window.event;return e&&e.type==="popstate"?e===Cd?!1:(Cd=e,!0):(Cd=null,!1)}var Uv=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,ZM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(e){return Nv.resolve(null).then(e).catch(KM)}:Uv;function KM(e){setTimeout(function(){throw e})}function wr(e){return e==="head"}function Lv(e,i){var r=i,c=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(c===0){e.removeChild(h),vo(i);return}c--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")c++;else if(r==="html")Bl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Bl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,U=m.nodeName;m[or]||U==="SCRIPT"||U==="STYLE"||U==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Bl(e.ownerDocument.body);r=h}while(r);vo(i)}function Ov(e,i){var r=e;e=0;do{var c=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),c&&c.nodeType===8)if(r=c.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=c}while(r)}function wd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":wd(r),il(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function QM(e,i,r,c){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!c&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(c){if(!e[or])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Vi(e.nextSibling),e===null)break}return null}function JM(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Vi(e.nextSibling),e===null))return null;return e}function Pv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Vi(e.nextSibling),e===null))return null;return e}function Dd(e){return e.data==="$?"||e.data==="$~"}function Ud(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $M(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var c=function(){i(),r.removeEventListener("DOMContentLoaded",c)};r.addEventListener("DOMContentLoaded",c),e._reactRetry=c}}function Vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Nd=null;function Fv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Vi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function zv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Bv(e,i,r){switch(i=Mu(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Bl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);il(e)}var ki=new Map,Iv=new Set;function Eu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Xa=G.d;G.d={f:tE,r:eE,D:nE,C:iE,L:aE,m:rE,X:oE,S:sE,M:lE};function tE(){var e=Xa.f(),i=pu();return e||i}function eE(e){var i=cr(e);i!==null&&i.tag===5&&i.type==="form"?ng(i):Xa.r(e)}var mo=typeof document>"u"?null:document;function Gv(e,i,r){var c=mo;if(c&&typeof i=="string"&&i){var h=He(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),Iv.has(h)||(Iv.add(h),e={rel:e,crossOrigin:r,href:i},c.querySelector(h)===null&&(i=c.createElement("link"),In(i,"link",e),yn(i),c.head.appendChild(i)))}}function nE(e){Xa.D(e),Gv("dns-prefetch",e,null)}function iE(e,i){Xa.C(e,i),Gv("preconnect",e,i)}function aE(e,i,r){Xa.L(e,i,r);var c=mo;if(c&&e&&i){var h='link[rel="preload"][as="'+He(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+He(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+He(r.imageSizes)+'"]')):h+='[href="'+He(e)+'"]';var m=h;switch(i){case"style":m=_o(e);break;case"script":m=go(e)}ki.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),ki.set(m,e),c.querySelector(h)!==null||i==="style"&&c.querySelector(Il(m))||i==="script"&&c.querySelector(Gl(m))||(i=c.createElement("link"),In(i,"link",e),yn(i),c.head.appendChild(i)))}}function rE(e,i){Xa.m(e,i);var r=mo;if(r&&e){var c=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+He(c)+'"][href="'+He(e)+'"]',m=h;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=go(e)}if(!ki.has(m)&&(e=v({rel:"modulepreload",href:e},i),ki.set(m,e),r.querySelector(h)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Gl(m)))return}c=r.createElement("link"),In(c,"link",e),yn(c),r.head.appendChild(c)}}}function sE(e,i,r){Xa.S(e,i,r);var c=mo;if(c&&e){var h=ur(c).hoistableStyles,m=_o(e);i=i||"default";var b=h.get(m);if(!b){var U={loading:0,preload:null};if(b=c.querySelector(Il(m)))U.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=ki.get(m))&&Ld(e,r);var H=b=c.createElement("link");yn(H),In(H,"link",e),H._p=new Promise(function(nt,pt){H.onload=nt,H.onerror=pt}),H.addEventListener("load",function(){U.loading|=1}),H.addEventListener("error",function(){U.loading|=2}),U.loading|=4,bu(b,i,c)}b={type:"stylesheet",instance:b,count:1,state:U},h.set(m,b)}}}function oE(e,i){Xa.X(e,i);var r=mo;if(r&&e){var c=ur(r).hoistableScripts,h=go(e),m=c.get(h);m||(m=r.querySelector(Gl(h)),m||(e=v({src:e,async:!0},i),(i=ki.get(h))&&Od(e,i),m=r.createElement("script"),yn(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function lE(e,i){Xa.M(e,i);var r=mo;if(r&&e){var c=ur(r).hoistableScripts,h=go(e),m=c.get(h);m||(m=r.querySelector(Gl(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=ki.get(h))&&Od(e,i),m=r.createElement("script"),yn(m),In(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},c.set(h,m))}}function Hv(e,i,r,c){var h=(h=ct.current)?Eu(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=_o(r.href),r=ur(h).hoistableStyles,c=r.get(i),c||(c={type:"style",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=_o(r.href);var m=ur(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(Il(e)))&&!m._p&&(b.instance=m,b.state.loading=5),ki.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},ki.set(e,r),m||cE(h,e,r,b.state))),i&&c===null)throw Error(a(528,""));return b}if(i&&c!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=go(r),r=ur(h).hoistableScripts,c=r.get(i),c||(c={type:"script",instance:null,count:0,state:null},r.set(i,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function _o(e){return'href="'+He(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function Vv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function cE(e,i,r,c){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?c.loading=1:(i=e.createElement("link"),c.preload=i,i.addEventListener("load",function(){return c.loading|=1}),i.addEventListener("error",function(){return c.loading|=2}),In(i,"link",r),yn(i),e.head.appendChild(i))}function go(e){return'[src="'+He(e)+'"]'}function Gl(e){return"script[async]"+e}function kv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var c=e.querySelector('style[data-href~="'+He(r.href)+'"]');if(c)return i.instance=c,yn(c),c;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return c=(e.ownerDocument||e).createElement("style"),yn(c),In(c,"style",h),bu(c,r.precedence,e),i.instance=c;case"stylesheet":h=_o(r.href);var m=e.querySelector(Il(h));if(m)return i.state.loading|=4,i.instance=m,yn(m),m;c=Vv(r),(h=ki.get(h))&&Ld(c,h),m=(e.ownerDocument||e).createElement("link"),yn(m);var b=m;return b._p=new Promise(function(U,H){b.onload=U,b.onerror=H}),In(m,"link",c),i.state.loading|=4,bu(m,r.precedence,e),i.instance=m;case"script":return m=go(r.src),(h=e.querySelector(Gl(m)))?(i.instance=h,yn(h),h):(c=r,(h=ki.get(m))&&(c=v({},r),Od(c,h)),e=e.ownerDocument||e,h=e.createElement("script"),yn(h),In(h,"link",c),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(c=i.instance,i.state.loading|=4,bu(c,r.precedence,e));return i.instance}function bu(e,i,r){for(var c=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=c.length?c[c.length-1]:null,m=h,b=0;b<c.length;b++){var U=c[b];if(U.dataset.precedence===i)m=U;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Ld(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Od(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Tu=null;function Xv(e,i,r){if(Tu===null){var c=new Map,h=Tu=new Map;h.set(r,c)}else h=Tu,c=h.get(r),c||(c=new Map,h.set(r,c));if(c.has(e))return c;for(c.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[or]||m[gn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var U=c.get(b);U?U.push(m):c.set(b,[m])}}return c}function Wv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function uE(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function qv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function fE(e,i,r,c){if(r.type==="stylesheet"&&(typeof c.media!="string"||matchMedia(c.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=_o(c.href),m=i.querySelector(Il(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Au.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,yn(m);return}m=i.ownerDocument||i,c=Vv(c),(h=ki.get(h))&&Ld(c,h),m=m.createElement("link"),yn(m);var b=m;b._p=new Promise(function(U,H){b.onload=U,b.onerror=H}),In(m,"link",c),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Au.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Pd=0;function hE(e,i){return e.stylesheets&&e.count===0&&Cu(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var c=setTimeout(function(){if(e.stylesheets&&Cu(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Pd===0&&(Pd=62500*qM());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Cu(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Pd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(c),clearTimeout(h)}}:null}function Au(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function Cu(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,i.forEach(dE,e),Ru=null,Au.call(e))}function dE(e,i){if(!(i.state.loading&4)){var r=Ru.get(e);if(r)var c=r.get(null);else{r=new Map,Ru.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),c=b)}c&&r.set(null,c)}h=i.instance,b=h.getAttribute("data-precedence"),m=r.get(b)||c,m===c&&r.set(null,h),r.set(b,h),this.count++,c=Au.bind(this),h.addEventListener("load",c),h.addEventListener("error",c),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Hl={$$typeof:w,Provider:null,Consumer:null,_currentValue:tt,_currentValue2:tt,_threadCount:0};function pE(e,i,r,c,h,m,b,U,H){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yt(0),this.hiddenUpdates=Yt(null),this.identifierPrefix=c,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=H,this.incompleteTransitions=new Map}function jv(e,i,r,c,h,m,b,U,H,nt,pt,xt){return e=new pE(e,i,r,b,H,nt,pt,xt,U),i=1,m===!0&&(i|=24),m=vi(3,null,null,i),e.current=m,m.stateNode=e,i=ph(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:c,isDehydrated:r,cache:i},vh(m),e}function Yv(e){return e?(e=js,e):js}function Zv(e,i,r,c,h,m){h=Yv(h),c.context===null?c.context=h:c.pendingContext=h,c=vr(i),c.payload={element:r},m=m===void 0?null:m,m!==null&&(c.callback=m),r=xr(e,c,i),r!==null&&(si(r,e,i),xl(r,e,i))}function Kv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Fd(e,i){Kv(e,i),(e=e.alternate)&&Kv(e,i)}function Qv(e){if(e.tag===13||e.tag===31){var i=rs(e,67108864);i!==null&&si(i,e,67108864),Fd(e,67108864)}}function Jv(e){if(e.tag===13||e.tag===31){var i=Ei();i=$r(i);var r=rs(e,i);r!==null&&si(r,e,i),Fd(e,i)}}var wu=!0;function mE(e,i,r,c){var h=z.T;z.T=null;var m=G.p;try{G.p=2,zd(e,i,r,c)}finally{G.p=m,z.T=h}}function _E(e,i,r,c){var h=z.T;z.T=null;var m=G.p;try{G.p=8,zd(e,i,r,c)}finally{G.p=m,z.T=h}}function zd(e,i,r,c){if(wu){var h=Bd(c);if(h===null)Ed(e,i,c,Du,r),tx(e,c);else if(vE(h,e,i,r,c))c.stopPropagation();else if(tx(e,c),i&4&&-1<gE.indexOf(e)){for(;h!==null;){var m=cr(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ct(m.pendingLanes);if(b!==0){var U=m;for(U.pendingLanes|=2,U.entangledLanes|=2;b;){var H=1<<31-Ft(b);U.entanglements[1]|=H,b&=~H}pa(m),(Pe&6)===0&&(hu=Rt()+500,Pl(0))}}break;case 31:case 13:U=rs(m,2),U!==null&&si(U,m,2),pu(),Fd(m,2)}if(m=Bd(c),m===null&&Ed(e,i,c,Du,r),m===h)break;h=m}h!==null&&c.stopPropagation()}else Ed(e,i,c,null,r)}}function Bd(e){return e=Gf(e),Id(e)}var Du=null;function Id(e){if(Du=null,e=lr(e),e!==null){var i=l(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=u(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Du=e,null}function $v(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($e()){case F:return 2;case R:return 8;case J:case gt:return 32;case bt:return 268435456;default:return 32}default:return 32}}var Gd=!1,Dr=null,Ur=null,Nr=null,Vl=new Map,kl=new Map,Lr=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function tx(e,i){switch(e){case"focusin":case"focusout":Dr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Nr=null;break;case"pointerover":case"pointerout":Vl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(i.pointerId)}}function Xl(e,i,r,c,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=cr(i),i!==null&&Qv(i)),e):(e.eventSystemFlags|=c,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function vE(e,i,r,c,h){switch(i){case"focusin":return Dr=Xl(Dr,e,i,r,c,h),!0;case"dragenter":return Ur=Xl(Ur,e,i,r,c,h),!0;case"mouseover":return Nr=Xl(Nr,e,i,r,c,h),!0;case"pointerover":var m=h.pointerId;return Vl.set(m,Xl(Vl.get(m)||null,e,i,r,c,h)),!0;case"gotpointercapture":return m=h.pointerId,kl.set(m,Xl(kl.get(m)||null,e,i,r,c,h)),!0}return!1}function ex(e){var i=lr(e.target);if(i!==null){var r=l(i);if(r!==null){if(i=r.tag,i===13){if(i=u(r),i!==null){e.blockedOn=i,el(e.priority,function(){Jv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,el(e.priority,function(){Jv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Uu(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Bd(e.nativeEvent);if(r===null){r=e.nativeEvent;var c=new r.constructor(r.type,r);If=c,r.target.dispatchEvent(c),If=null}else return i=cr(r),i!==null&&Qv(i),e.blockedOn=r,!1;i.shift()}return!0}function nx(e,i,r){Uu(e)&&r.delete(i)}function xE(){Gd=!1,Dr!==null&&Uu(Dr)&&(Dr=null),Ur!==null&&Uu(Ur)&&(Ur=null),Nr!==null&&Uu(Nr)&&(Nr=null),Vl.forEach(nx),kl.forEach(nx)}function Nu(e,i){e.blockedOn===i&&(e.blockedOn=null,Gd||(Gd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,xE)))}var Lu=null;function ix(e){Lu!==e&&(Lu=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Lu===e&&(Lu=null);for(var i=0;i<e.length;i+=3){var r=e[i],c=e[i+1],h=e[i+2];if(typeof c!="function"){if(Id(c||r)===null)continue;break}var m=cr(r);m!==null&&(e.splice(i,3),i-=3,Bh(m,{pending:!0,data:h,method:r.method,action:c},c,h))}}))}function vo(e){function i(H){return Nu(H,e)}Dr!==null&&Nu(Dr,e),Ur!==null&&Nu(Ur,e),Nr!==null&&Nu(Nr,e),Vl.forEach(i),kl.forEach(i);for(var r=0;r<Lr.length;r++){var c=Lr[r];c.blockedOn===e&&(c.blockedOn=null)}for(;0<Lr.length&&(r=Lr[0],r.blockedOn===null);)ex(r),r.blockedOn===null&&Lr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(c=0;c<r.length;c+=3){var h=r[c],m=r[c+1],b=h[Pn]||null;if(typeof m=="function")b||ix(r);else if(b){var U=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[Pn]||null)U=b.formAction;else if(Id(h)!==null)continue}else U=b.action;typeof U=="function"?r[c+1]=U:(r.splice(c,3),c-=3),ix(r)}}}function ax(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),c||setTimeout(r,20)}function r(){if(!c&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var c=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){c=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Hd(e){this._internalRoot=e}Ou.prototype.render=Hd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,c=Ei();Zv(r,c,e,i,null,null)},Ou.prototype.unmount=Hd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Zv(e.current,2,null,e,null,null),pu(),i[Ra]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var i=tl();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Lr.length&&i!==0&&i<Lr[r].priority;r++);Lr.splice(r,0,e),r===0&&ex(e)}};var rx=t.version;if(rx!=="19.2.7")throw Error(a(527,rx,"19.2.7"));G.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var SE={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pu.isDisabled&&Pu.supportsFiber)try{ft=Pu.inject(SE),dt=Pu}catch{}}return ql.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,c="",h=hg,m=dg,b=pg;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=jv(e,1,!1,null,null,r,c,null,h,m,b,ax),e[Ra]=i.current,Md(e),new Hd(i)},ql.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var c=!1,h="",m=hg,b=dg,U=pg,H=null;return r!=null&&(r.unstable_strictMode===!0&&(c=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(U=r.onRecoverableError),r.formState!==void 0&&(H=r.formState)),i=jv(e,1,!0,i,r??null,c,h,H,m,b,U,ax),i.context=Yv(null),r=i.current,c=Ei(),c=$r(c),h=vr(c),h.callback=null,xr(r,h,c),r=c,i.current.lanes=r,ae(i,r),pa(i),e[Ra]=i.current,Md(e),new Ou(i)},ql.version="19.2.7",ql}var mx;function DE(){if(mx)return kd.exports;mx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kd.exports=wE(),kd.exports}var UE=DE(),Vt=Wm();const qm="184",NE=0,_x=1,LE=2,lf=1,OE=2,ec=3,Yr=0,ti=1,Ja=2,tr=0,zo=1,Bp=2,gx=3,vx=4,PE=5,As=100,FE=101,zE=102,BE=103,IE=104,GE=200,HE=201,VE=202,kE=203,Ip=204,Gp=205,XE=206,WE=207,qE=208,jE=209,YE=210,ZE=211,KE=212,QE=213,JE=214,Hp=0,Vp=1,kp=2,Vo=3,Xp=4,Wp=5,qp=6,jp=7,zS=0,$E=1,tb=2,Ea=0,BS=1,IS=2,GS=3,HS=4,VS=5,kS=6,XS=7,WS=300,Ps=301,ko=302,Yd=303,Zd=304,Uf=306,Yp=1e3,$a=1001,Zp=1002,Gn=1003,eb=1004,Fu=1005,Zn=1006,Kd=1007,Cs=1008,Ci=1009,qS=1010,jS=1011,cc=1012,jm=1013,Ta=1014,Sa=1015,nr=1016,Ym=1017,Zm=1018,uc=1020,YS=35902,ZS=35899,KS=1021,QS=1022,oa=1023,ir=1026,ws=1027,JS=1028,Km=1029,Fs=1030,Qm=1031,Jm=1033,cf=33776,uf=33777,ff=33778,hf=33779,Kp=35840,Qp=35841,Jp=35842,$p=35843,tm=36196,em=37492,nm=37496,im=37488,am=37489,gf=37490,rm=37491,sm=37808,om=37809,lm=37810,cm=37811,um=37812,fm=37813,hm=37814,dm=37815,pm=37816,mm=37817,_m=37818,gm=37819,vm=37820,xm=37821,Sm=36492,ym=36494,Mm=36495,Em=36283,bm=36284,vf=36285,Tm=36286,nb=3200,xx=0,ib=1,Hr="",Ai="srgb",xf="srgb-linear",Sf="linear",We="srgb",xo=7680,Sx=519,ab=512,rb=513,sb=514,$m=515,ob=516,lb=517,t0=518,cb=519,yx=35044,Mx="300 es",ya=2e3,fc=2001;function ub(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function hc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fb(){const o=hc("canvas");return o.style.display="block",o}const Ex={};function bx(...o){const t="THREE."+o.shift();console.log(t,...o)}function $S(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function re(...o){o=$S(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function we(...o){o=$S(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function Am(...o){const t=o.join(" ");t in Ex||(Ex[t]=!0,re(...o))}function hb(o,t,n){return new Promise(function(a,s){function l(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const db={[Hp]:Vp,[kp]:qp,[Xp]:jp,[Vo]:Wp,[Vp]:Hp,[qp]:kp,[jp]:Xp,[Wp]:Vo};class Bs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,t);t.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qd=Math.PI/180,Rm=180/Math.PI;function yc(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(qn[o&255]+qn[o>>8&255]+qn[o>>16&255]+qn[o>>24&255]+"-"+qn[t&255]+qn[t>>8&255]+"-"+qn[t>>16&15|64]+qn[t>>24&255]+"-"+qn[n&63|128]+qn[n>>8&255]+"-"+qn[n>>16&255]+qn[n>>24&255]+qn[a&255]+qn[a>>8&255]+qn[a>>16&255]+qn[a>>24&255]).toLowerCase()}function Te(o,t,n){return Math.max(t,Math.min(n,o))}function pb(o,t){return(o%t+t)%t}function Jd(o,t,n){return(1-n)*o+n*t}function jl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function oi(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const E0=class E0{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*s+t.x,this.y=l*s+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};E0.prototype.isVector2=!0;let Be=E0;class Qo{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,l,u,f){let p=a[s+0],d=a[s+1],_=a[s+2],v=a[s+3],g=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(v!==E||p!==g||d!==x||_!==M){let y=p*g+d*x+_*M+v*E;y<0&&(g=-g,x=-x,M=-M,E=-E,y=-y);let S=1-f;if(y<.9995){const A=Math.acos(y),w=Math.sin(A);S=Math.sin(S*A)/w,f=Math.sin(f*A)/w,p=p*S+g*f,d=d*S+x*f,_=_*S+M*f,v=v*S+E*f}else{p=p*S+g*f,d=d*S+x*f,_=_*S+M*f,v=v*S+E*f;const A=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=A,d*=A,_*=A,v*=A}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,l,u){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],v=l[u],g=l[u+1],x=l[u+2],M=l[u+3];return t[n]=f*M+_*v+p*x-d*g,t[n+1]=p*M+_*g+d*v-f*x,t[n+2]=d*M+_*x+f*g-p*v,t[n+3]=_*M-f*v-p*g-d*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,l=t._z,u=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),v=f(l/2),g=p(a/2),x=p(s/2),M=p(l/2);switch(u){case"XYZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"YXZ":this._x=g*_*v+d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"ZXY":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v-g*x*M;break;case"ZYX":this._x=g*_*v-d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v+g*x*M;break;case"YZX":this._x=g*_*v+d*x*M,this._y=d*x*v+g*_*M,this._z=d*_*M-g*x*v,this._w=d*_*v-g*x*M;break;case"XZY":this._x=g*_*v-d*x*M,this._y=d*x*v-g*_*M,this._z=d*_*M+g*x*v,this._w=d*_*v+g*x*M;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],l=n[8],u=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(_-p)*x,this._y=(l-d)*x,this._z=(u-s)*x}else if(a>f&&a>v){const x=2*Math.sqrt(1+a-f-v);this._w=(_-p)/x,this._x=.25*x,this._y=(s+u)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-a-v);this._w=(l-d)/x,this._x=(s+u)/x,this._y=.25*x,this._z=(p+_)/x}else{const x=2*Math.sqrt(1+v-a-f);this._w=(u-s)/x,this._x=(l+d)/x,this._y=(p+_)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,l=t._z,u=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+u*f+s*d-l*p,this._y=s*_+u*p+l*f-a*d,this._z=l*_+u*d+a*p-s*f,this._w=u*_-a*f-s*p-l*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,s=t._y,l=t._z,u=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,l=-l,u=-u,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const b0=class b0{constructor(t=0,n=0,a=0){this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Tx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*s,this.y=l[1]*n+l[4]*a+l[7]*s,this.z=l[2]*n+l[5]*a+l[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,l=t.x,u=t.y,f=t.z,p=t.w,d=2*(u*s-f*a),_=2*(f*n-l*s),v=2*(l*a-u*n);return this.x=n+p*d+u*v-f*_,this.y=a+p*_+f*d-l*v,this.z=s+p*v+l*_-u*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*s,this.y=l[1]*n+l[5]*a+l[9]*s,this.z=l[2]*n+l[6]*a+l[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,l=t.z,u=n.x,f=n.y,p=n.z;return this.x=s*p-l*f,this.y=l*u-a*p,this.z=a*f-s*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return $d.copy(this).projectOnVector(t),this.sub($d)}reflect(t){return this.sub($d.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Te(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};b0.prototype.isVector3=!0;let rt=b0;const $d=new rt,Tx=new Qo,T0=class T0{constructor(t,n,a,s,l,u,f,p,d){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,p,d)}set(t,n,a,s,l,u,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=u,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],x=a[5],M=a[8],E=s[0],y=s[3],S=s[6],A=s[1],w=s[4],D=s[7],P=s[2],N=s[5],O=s[8];return l[0]=u*E+f*A+p*P,l[3]=u*y+f*w+p*N,l[6]=u*S+f*D+p*O,l[1]=d*E+_*A+v*P,l[4]=d*y+_*w+v*N,l[7]=d*S+_*D+v*O,l[2]=g*E+x*A+M*P,l[5]=g*y+x*w+M*N,l[8]=g*S+x*D+M*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*u*_-n*f*d-a*l*_+a*f*p+s*l*d-s*u*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=_*u-f*d,g=f*p-_*l,x=d*l-u*p,M=n*v+a*g+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=v*E,t[1]=(s*d-_*a)*E,t[2]=(f*a-s*u)*E,t[3]=g*E,t[4]=(_*n-s*p)*E,t[5]=(s*l-f*n)*E,t[6]=x*E,t[7]=(a*p-d*n)*E,t[8]=(u*n-a*l)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,l,u,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*u+d*f)+u+t,-s*d,s*p,-s*(-d*u+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(tp.makeScale(t,n)),this}rotate(t){return this.premultiply(tp.makeRotation(-t)),this}translate(t,n){return this.premultiply(tp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}};T0.prototype.isMatrix3=!0;let ce=T0;const tp=new ce,Ax=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mb(){const o={enabled:!0,workingColorSpace:xf,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===We&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===We&&(s.r=Bo(s.r),s.g=Bo(s.g),s.b=Bo(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hr?Sf:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Am("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Am("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[xf]:{primaries:t,whitePoint:a,transfer:Sf,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:a,transfer:We,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),o}const be=mb();function er(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Bo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let So;class _b{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{So===void 0&&(So=hc("canvas")),So.width=t.width,So.height=t.height;const s=So.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=So}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=hc("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=er(l[u]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(er(n[a]/255)*255):n[a]=er(n[a]);return{data:n,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gb=0;class e0{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gb++}),this.uuid=yc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,f=s.length;u<f;u++)s[u].isDataTexture?l.push(ep(s[u].image)):l.push(ep(s[u]))}else l=ep(s);a.url=l}return n||(t.images[this.uuid]=a),a}}function ep(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?_b.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let vb=0;const np=new rt;class Kn extends Bs{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,a=$a,s=$a,l=Zn,u=Cs,f=oa,p=Ci,d=Kn.DEFAULT_ANISOTROPY,_=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=yc(),this.name="",this.source=new e0(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(np).x}get height(){return this.source.getSize(np).y}get depth(){return this.source.getSize(np).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){re(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==WS)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yp:t.x=t.x-Math.floor(t.x);break;case $a:t.x=t.x<0?0:1;break;case Zp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yp:t.y=t.y-Math.floor(t.y);break;case $a:t.y=t.y<0?0:1;break;case Zp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=WS;Kn.DEFAULT_ANISOTROPY=1;const A0=class A0{constructor(t=0,n=0,a=0,s=1){this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*s+u[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,l;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],x=p[5],M=p[9],E=p[2],y=p[6],S=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+E)<.1&&Math.abs(M+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,D=(x+1)/2,P=(S+1)/2,N=(_+g)/4,O=(v+E)/4,T=(M+y)/4;return w>D&&w>P?w<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(w),s=N/a,l=O/a):D>P?D<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(D),a=N/s,l=T/s):P<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(P),a=O/l,s=T/l),this.set(a,s,l,n),this}let A=Math.sqrt((y-M)*(y-M)+(v-E)*(v-E)+(g-_)*(g-_));return Math.abs(A)<.001&&(A=1),this.x=(y-M)/A,this.y=(v-E)/A,this.z=(g-_)/A,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Te(this.x,t.x,n.x),this.y=Te(this.y,t.y,n.y),this.z=Te(this.z,t.z,n.z),this.w=Te(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Te(this.x,t,n),this.y=Te(this.y,t,n),this.z=Te(this.z,t,n),this.w=Te(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Te(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};A0.prototype.isVector4=!0;let pn=A0;class xb extends Bs{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new pn(0,0,t,n),this.scissorTest=!1,this.viewport=new pn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:a.depth},l=new Kn(s),u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new e0(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ba extends xb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class ty extends Kn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sb extends Kn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=$a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Df=class Df{constructor(t,n,a,s,l,u,f,p,d,_,v,g,x,M,E,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,l,u,f,p,d,_,v,g,x,M,E,y)}set(t,n,a,s,l,u,f,p,d,_,v,g,x,M,E,y){const S=this.elements;return S[0]=t,S[4]=n,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=f,S[13]=p,S[2]=d,S[6]=_,S[10]=v,S[14]=g,S[3]=x,S[7]=M,S[11]=E,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Df().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/yo.setFromMatrixColumn(t,0).length(),l=1/yo.setFromMatrixColumn(t,1).length(),u=1/yo.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(l),v=Math.sin(l);if(t.order==="XYZ"){const g=u*_,x=u*v,M=f*_,E=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=x+M*d,n[5]=g-E*d,n[9]=-f*p,n[2]=E-g*d,n[6]=M+x*d,n[10]=u*p}else if(t.order==="YXZ"){const g=p*_,x=p*v,M=d*_,E=d*v;n[0]=g+E*f,n[4]=M*f-x,n[8]=u*d,n[1]=u*v,n[5]=u*_,n[9]=-f,n[2]=x*f-M,n[6]=E+g*f,n[10]=u*p}else if(t.order==="ZXY"){const g=p*_,x=p*v,M=d*_,E=d*v;n[0]=g-E*f,n[4]=-u*v,n[8]=M+x*f,n[1]=x+M*f,n[5]=u*_,n[9]=E-g*f,n[2]=-u*d,n[6]=f,n[10]=u*p}else if(t.order==="ZYX"){const g=u*_,x=u*v,M=f*_,E=f*v;n[0]=p*_,n[4]=M*d-x,n[8]=g*d+E,n[1]=p*v,n[5]=E*d+g,n[9]=x*d-M,n[2]=-d,n[6]=f*p,n[10]=u*p}else if(t.order==="YZX"){const g=u*p,x=u*d,M=f*p,E=f*d;n[0]=p*_,n[4]=E-g*v,n[8]=M*v+x,n[1]=v,n[5]=u*_,n[9]=-f*_,n[2]=-d*_,n[6]=x*v+M,n[10]=g-E*v}else if(t.order==="XZY"){const g=u*p,x=u*d,M=f*p,E=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+E,n[5]=u*_,n[9]=x*v-M,n[2]=M*v-x,n[6]=f*_,n[10]=E*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yb,t,Mb)}lookAt(t,n,a){const s=this.elements;return bi.subVectors(t,n),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),Pr.crossVectors(a,bi),Pr.lengthSq()===0&&(Math.abs(a.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),Pr.crossVectors(a,bi)),Pr.normalize(),zu.crossVectors(bi,Pr),s[0]=Pr.x,s[4]=zu.x,s[8]=bi.x,s[1]=Pr.y,s[5]=zu.y,s[9]=bi.y,s[2]=Pr.z,s[6]=zu.z,s[10]=bi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,l=this.elements,u=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],x=a[13],M=a[2],E=a[6],y=a[10],S=a[14],A=a[3],w=a[7],D=a[11],P=a[15],N=s[0],O=s[4],T=s[8],L=s[12],k=s[1],B=s[5],W=s[9],$=s[13],lt=s[2],X=s[6],z=s[10],G=s[14],tt=s[3],ht=s[7],vt=s[11],I=s[15];return l[0]=u*N+f*k+p*lt+d*tt,l[4]=u*O+f*B+p*X+d*ht,l[8]=u*T+f*W+p*z+d*vt,l[12]=u*L+f*$+p*G+d*I,l[1]=_*N+v*k+g*lt+x*tt,l[5]=_*O+v*B+g*X+x*ht,l[9]=_*T+v*W+g*z+x*vt,l[13]=_*L+v*$+g*G+x*I,l[2]=M*N+E*k+y*lt+S*tt,l[6]=M*O+E*B+y*X+S*ht,l[10]=M*T+E*W+y*z+S*vt,l[14]=M*L+E*$+y*G+S*I,l[3]=A*N+w*k+D*lt+P*tt,l[7]=A*O+w*B+D*X+P*ht,l[11]=A*T+w*W+D*z+P*vt,l[15]=A*L+w*$+D*G+P*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],l=t[12],u=t[1],f=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],x=t[14],M=t[3],E=t[7],y=t[11],S=t[15],A=p*x-d*g,w=f*x-d*v,D=f*g-p*v,P=u*x-d*_,N=u*g-p*_,O=u*v-f*_;return n*(E*A-y*w+S*D)-a*(M*A-y*P+S*N)+s*(M*w-E*P+S*O)-l*(M*D-E*N+y*O)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],l=t[3],u=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],x=t[11],M=t[12],E=t[13],y=t[14],S=t[15],A=n*f-a*u,w=n*p-s*u,D=n*d-l*u,P=a*p-s*f,N=a*d-l*f,O=s*d-l*p,T=_*E-v*M,L=_*y-g*M,k=_*S-x*M,B=v*y-g*E,W=v*S-x*E,$=g*S-x*y,lt=A*$-w*W+D*B+P*k-N*L+O*T;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/lt;return t[0]=(f*$-p*W+d*B)*X,t[1]=(s*W-a*$-l*B)*X,t[2]=(E*O-y*N+S*P)*X,t[3]=(g*N-v*O-x*P)*X,t[4]=(p*k-u*$-d*L)*X,t[5]=(n*$-s*k+l*L)*X,t[6]=(y*D-M*O-S*w)*X,t[7]=(_*O-g*D+x*w)*X,t[8]=(u*W-f*k+d*T)*X,t[9]=(a*k-n*W-l*T)*X,t[10]=(M*N-E*D+S*A)*X,t[11]=(v*D-_*N-x*A)*X,t[12]=(f*L-u*B-p*T)*X,t[13]=(n*B-a*L+s*T)*X,t[14]=(E*w-M*P-y*A)*X,t[15]=(_*P-v*w+g*A)*X,this}scale(t){const n=this.elements,a=t.x,s=t.y,l=t.z;return n[0]*=a,n[4]*=s,n[8]*=l,n[1]*=a,n[5]*=s,n[9]*=l,n[2]*=a,n[6]*=s,n[10]*=l,n[3]*=a,n[7]*=s,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),l=1-a,u=t.x,f=t.y,p=t.z,d=l*u,_=l*f;return this.set(d*u+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*u,0,d*p-s*f,_*p+s*u,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,l,u){return this.set(1,a,l,0,t,1,u,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,l=n._x,u=n._y,f=n._z,p=n._w,d=l+l,_=u+u,v=f+f,g=l*d,x=l*_,M=l*v,E=u*_,y=u*v,S=f*v,A=p*d,w=p*_,D=p*v,P=a.x,N=a.y,O=a.z;return s[0]=(1-(E+S))*P,s[1]=(x+D)*P,s[2]=(M-w)*P,s[3]=0,s[4]=(x-D)*N,s[5]=(1-(g+S))*N,s[6]=(y+A)*N,s[7]=0,s[8]=(M+w)*O,s[9]=(y-A)*O,s[10]=(1-(g+E))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const l=this.determinant();if(l===0)return a.set(1,1,1),n.identity(),this;let u=yo.set(s[0],s[1],s[2]).length();const f=yo.set(s[4],s[5],s[6]).length(),p=yo.set(s[8],s[9],s[10]).length();l<0&&(u=-u),ia.copy(this);const d=1/u,_=1/f,v=1/p;return ia.elements[0]*=d,ia.elements[1]*=d,ia.elements[2]*=d,ia.elements[4]*=_,ia.elements[5]*=_,ia.elements[6]*=_,ia.elements[8]*=v,ia.elements[9]*=v,ia.elements[10]*=v,n.setFromRotationMatrix(ia),a.x=u,a.y=f,a.z=p,this}makePerspective(t,n,a,s,l,u,f=ya,p=!1){const d=this.elements,_=2*l/(n-t),v=2*l/(a-s),g=(n+t)/(n-t),x=(a+s)/(a-s);let M,E;if(p)M=l/(u-l),E=u*l/(u-l);else if(f===ya)M=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(f===fc)M=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,l,u,f=ya,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-s),g=-(n+t)/(n-t),x=-(a+s)/(a-s);let M,E;if(p)M=1/(u-l),E=u/(u-l);else if(f===ya)M=-2/(u-l),E=-(u+l)/(u-l);else if(f===fc)M=-1/(u-l),E=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}};Df.prototype.isMatrix4=!0;let _n=Df;const yo=new rt,ia=new _n,yb=new rt(0,0,0),Mb=new rt(1,1,1),Pr=new rt,zu=new rt,bi=new rt,Cx=new _n,wx=new Qo;class zs{constructor(t=0,n=0,a=0,s=zs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,l=s[0],u=s[4],f=s[8],p=s[1],d=s[5],_=s[9],v=s[2],g=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Te(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Te(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Te(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Te(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,x),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Cx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return wx.setFromEuler(this),this.setFromQuaternion(wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zs.DEFAULT_ORDER="XYZ";class ey{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eb=0;const Dx=new rt,Mo=new Qo,Wa=new _n,Bu=new rt,Yl=new rt,bb=new rt,Tb=new Qo,Ux=new rt(1,0,0),Nx=new rt(0,1,0),Lx=new rt(0,0,1),Ox={type:"added"},Ab={type:"removed"},Eo={type:"childadded",child:null},ip={type:"childremoved",child:null};class Hn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const t=new rt,n=new zs,a=new Qo,s=new rt(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _n},normalMatrix:{value:new ce}}),this.matrix=new _n,this.matrixWorld=new _n,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.multiply(Mo),this}rotateOnWorldAxis(t,n){return Mo.setFromAxisAngle(t,n),this.quaternion.premultiply(Mo),this}rotateX(t){return this.rotateOnAxis(Ux,t)}rotateY(t){return this.rotateOnAxis(Nx,t)}rotateZ(t){return this.rotateOnAxis(Lx,t)}translateOnAxis(t,n){return Dx.copy(t).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ux,t)}translateY(t){return this.translateOnAxis(Nx,t)}translateZ(t){return this.translateOnAxis(Lx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wa.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Bu.copy(t):Bu.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Yl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wa.lookAt(Yl,Bu,this.up):Wa.lookAt(Bu,Yl,this.up),this.quaternion.setFromRotationMatrix(Wa),s&&(Wa.extractRotation(s.matrixWorld),Mo.setFromRotationMatrix(Wa),this.quaternion.premultiply(Mo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(we("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ox),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null):we("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Ab),ip.child=t,this.dispatchEvent(ip),ip.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ox),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,t,bb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yl,Tb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,s=t.z,l=this.matrix.elements;l[12]+=n-l[0]*n-l[4]*a-l[8]*s,l[13]+=a-l[1]*n-l[5]*a-l[9]*s,l[14]+=s-l[2]*n-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];l(t.shapes,v)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));s.material=f}else s.material=l(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(l(t.animations,p))}}if(n){const f=u(t.geometries),p=u(t.materials),d=u(t.textures),_=u(t.images),v=u(t.shapes),g=u(t.skeletons),x=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),x.length>0&&(a.animations=x),M.length>0&&(a.nodes=M)}return a.object=s,a;function u(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Hn.DEFAULT_UP=new rt(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class nc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Rb={type:"move"};class ap{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,l=null,u=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){u=!0;for(const E of t.hand.values()){const y=n.getJointPose(E,a),S=this._getHandJoint(d,E);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),x=.02,M=.005;d.inputState.pinching&&g>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:t,target:this})));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Rb)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new nc;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const ny={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Iu={h:0,s:0,l:0};function rp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class De{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=be.workingColorSpace){return this.r=t,this.g=n,this.b=a,be.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=be.workingColorSpace){if(t=pb(t,1),n=Te(n,0,1),a=Te(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=rp(u,l,t+1/3),this.g=rp(u,l,t),this.b=rp(u,l,t-1/3)}return be.colorSpaceToWorking(this,s),this}setStyle(t,n=Ai){function a(l){l!==void 0&&parseFloat(l)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=s[1],f=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:re("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Ai){const a=ny[t.toLowerCase()];return a!==void 0?this.setHex(a,n):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=er(t.r),this.g=er(t.g),this.b=er(t.b),this}copyLinearToSRGB(t){return this.r=Bo(t.r),this.g=Bo(t.g),this.b=Bo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return be.workingToColorSpace(jn.copy(this),t),Math.round(Te(jn.r*255,0,255))*65536+Math.round(Te(jn.g*255,0,255))*256+Math.round(Te(jn.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.workingToColorSpace(jn.copy(this),n);const a=jn.r,s=jn.g,l=jn.b,u=Math.max(a,s,l),f=Math.min(a,s,l);let p,d;const _=(f+u)/2;if(f===u)p=0,d=0;else{const v=u-f;switch(d=_<=.5?v/(u+f):v/(2-u-f),u){case a:p=(s-l)/v+(s<l?6:0);break;case s:p=(l-a)/v+2;break;case l:p=(a-s)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=be.workingColorSpace){return be.workingToColorSpace(jn.copy(this),n),t.r=jn.r,t.g=jn.g,t.b=jn.b,t}getStyle(t=Ai){be.workingToColorSpace(jn.copy(this),t);const n=jn.r,a=jn.g,s=jn.b;return t!==Ai?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+n,Fr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Fr),t.getHSL(Iu);const a=Jd(Fr.h,Iu.h,n),s=Jd(Fr.s,Iu.s,n),l=Jd(Fr.l,Iu.l,n);return this.setHSL(a,s,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*s,this.g=l[1]*n+l[4]*a+l[7]*s,this.b=l[2]*n+l[5]*a+l[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new De;De.NAMES=ny;class Cb extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zs,this.environmentIntensity=1,this.environmentRotation=new zs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const aa=new rt,qa=new rt,sp=new rt,ja=new rt,bo=new rt,To=new rt,Px=new rt,op=new rt,lp=new rt,cp=new rt,up=new pn,fp=new pn,hp=new pn;class sa{constructor(t=new rt,n=new rt,a=new rt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),aa.subVectors(t,n),s.cross(aa);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(t,n,a,s,l){aa.subVectors(s,n),qa.subVectors(a,n),sp.subVectors(t,n);const u=aa.dot(aa),f=aa.dot(qa),p=aa.dot(sp),d=qa.dot(qa),_=qa.dot(sp),v=u*d-f*f;if(v===0)return l.set(0,0,0),null;const g=1/v,x=(d*p-f*_)*g,M=(u*_-f*p)*g;return l.set(1-x-M,M,x)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,ja)===null?!1:ja.x>=0&&ja.y>=0&&ja.x+ja.y<=1}static getInterpolation(t,n,a,s,l,u,f,p){return this.getBarycoord(t,n,a,s,ja)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ja.x),p.addScaledVector(u,ja.y),p.addScaledVector(f,ja.z),p)}static getInterpolatedAttribute(t,n,a,s,l,u){return up.setScalar(0),fp.setScalar(0),hp.setScalar(0),up.fromBufferAttribute(t,n),fp.fromBufferAttribute(t,a),hp.fromBufferAttribute(t,s),u.setScalar(0),u.addScaledVector(up,l.x),u.addScaledVector(fp,l.y),u.addScaledVector(hp,l.z),u}static isFrontFacing(t,n,a,s){return aa.subVectors(a,n),qa.subVectors(t,n),aa.cross(qa).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return aa.subVectors(this.c,this.b),qa.subVectors(this.a,this.b),aa.cross(qa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return sa.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return sa.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,l){return sa.getInterpolation(t,this.a,this.b,this.c,n,a,s,l)}containsPoint(t){return sa.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return sa.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,l=this.c;let u,f;bo.subVectors(s,a),To.subVectors(l,a),op.subVectors(t,a);const p=bo.dot(op),d=To.dot(op);if(p<=0&&d<=0)return n.copy(a);lp.subVectors(t,s);const _=bo.dot(lp),v=To.dot(lp);if(_>=0&&v<=_)return n.copy(s);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return u=p/(p-_),n.copy(a).addScaledVector(bo,u);cp.subVectors(t,l);const x=bo.dot(cp),M=To.dot(cp);if(M>=0&&x<=M)return n.copy(l);const E=x*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(To,f);const y=_*M-x*v;if(y<=0&&v-_>=0&&x-M>=0)return Px.subVectors(l,s),f=(v-_)/(v-_+(x-M)),n.copy(s).addScaledVector(Px,f);const S=1/(y+E+g);return u=E*S,f=g*S,n.copy(a).addScaledVector(bo,u).addScaledVector(To,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Mc{constructor(t=new rt(1/0,1/0,1/0),n=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(ra.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(ra.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=ra.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,ra):ra.fromBufferAttribute(l,u),ra.applyMatrix4(t.matrixWorld),this.expandByPoint(ra);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gu.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Gu.copy(a.boundingBox)),Gu.applyMatrix4(t.matrixWorld),this.union(Gu)}const s=t.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ra),ra.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zl),Hu.subVectors(this.max,Zl),Ao.subVectors(t.a,Zl),Ro.subVectors(t.b,Zl),Co.subVectors(t.c,Zl),zr.subVectors(Ro,Ao),Br.subVectors(Co,Ro),vs.subVectors(Ao,Co);let n=[0,-zr.z,zr.y,0,-Br.z,Br.y,0,-vs.z,vs.y,zr.z,0,-zr.x,Br.z,0,-Br.x,vs.z,0,-vs.x,-zr.y,zr.x,0,-Br.y,Br.x,0,-vs.y,vs.x,0];return!dp(n,Ao,Ro,Co,Hu)||(n=[1,0,0,0,1,0,0,0,1],!dp(n,Ao,Ro,Co,Hu))?!1:(Vu.crossVectors(zr,Br),n=[Vu.x,Vu.y,Vu.z],dp(n,Ao,Ro,Co,Hu))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ra).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ra).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ya[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ya[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ya[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ya[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ya[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ya[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ya[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ya[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ya),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ya=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],ra=new rt,Gu=new Mc,Ao=new rt,Ro=new rt,Co=new rt,zr=new rt,Br=new rt,vs=new rt,Zl=new rt,Hu=new rt,Vu=new rt,xs=new rt;function dp(o,t,n,a,s){for(let l=0,u=o.length-3;l<=u;l+=3){xs.fromArray(o,l);const f=s.x*Math.abs(xs.x)+s.y*Math.abs(xs.y)+s.z*Math.abs(xs.z),p=t.dot(xs),d=n.dot(xs),_=a.dot(xs);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const An=new rt,ku=new Be;let wb=0;class la extends Bs{constructor(t,n,a=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=yx,this.updateRanges=[],this.gpuType=Sa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)ku.fromBufferAttribute(this,n),ku.applyMatrix3(t),this.setXY(n,ku.x,ku.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix3(t),this.setXYZ(n,An.x,An.y,An.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyMatrix4(t),this.setXYZ(n,An.x,An.y,An.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.applyNormalMatrix(t),this.setXYZ(n,An.x,An.y,An.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)An.fromBufferAttribute(this,n),An.transformDirection(t),this.setXYZ(n,An.x,An.y,An.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=jl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=oi(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=jl(n,this.array)),n}setX(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=jl(n,this.array)),n}setY(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=jl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=jl(n,this.array)),n}setW(t,n){return this.normalized&&(n=oi(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),s=oi(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,l){return t*=this.itemSize,this.normalized&&(n=oi(n,this.array),a=oi(a,this.array),s=oi(s,this.array),l=oi(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yx&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class iy extends la{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class ay extends la{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Zi extends la{constructor(t,n,a){super(new Float32Array(t),n,a)}}const Db=new Mc,Kl=new rt,pp=new rt;class Nf{constructor(t=new rt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):Db.setFromPoints(t).getCenter(a);let s=0;for(let l=0,u=t.length;l<u;l++)s=Math.max(s,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Kl.subVectors(t,this.center);const n=Kl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Kl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Kl.copy(t.center).add(pp)),this.expandByPoint(Kl.copy(t.center).sub(pp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Ub=0;const Xi=new _n,mp=new Hn,wo=new rt,Ti=new Mc,Ql=new Mc,Ln=new rt;class Qi extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ub(t)?ay:iy)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xi.makeRotationFromQuaternion(t),this.applyMatrix4(Xi),this}rotateX(t){return Xi.makeRotationX(t),this.applyMatrix4(Xi),this}rotateY(t){return Xi.makeRotationY(t),this.applyMatrix4(Xi),this}rotateZ(t){return Xi.makeRotationZ(t),this.applyMatrix4(Xi),this}translate(t,n,a){return Xi.makeTranslation(t,n,a),this.applyMatrix4(Xi),this}scale(t,n,a){return Xi.makeScale(t,n,a),this.applyMatrix4(Xi),this}lookAt(t){return mp.lookAt(t),mp.updateMatrix(),this.applyMatrix4(mp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wo).negate(),this.translate(wo.x,wo.y,wo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,l=t.length;s<l;s++){const u=t[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Zi(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const l=t[s];n.setXYZ(s,l.x,l.y,l.z||0)}t.length>n.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mc);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const l=n[a];Ti.setFromBufferAttribute(l),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&we('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nf);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){we("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const a=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];Ql.setFromBufferAttribute(f),this.morphTargetsRelative?(Ln.addVectors(Ti.min,Ql.min),Ti.expandByPoint(Ln),Ln.addVectors(Ti.max,Ql.max),Ti.expandByPoint(Ln)):(Ti.expandByPoint(Ql.min),Ti.expandByPoint(Ql.max))}Ti.getCenter(a);let s=0;for(let l=0,u=t.count;l<u;l++)Ln.fromBufferAttribute(t,l),s=Math.max(s,a.distanceToSquared(Ln));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Ln.fromBufferAttribute(f,d),p&&(wo.fromBufferAttribute(t,d),Ln.add(wo)),s=Math.max(s,a.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&we('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){we("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new la(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<a.count;T++)f[T]=new rt,p[T]=new rt;const d=new rt,_=new rt,v=new rt,g=new Be,x=new Be,M=new Be,E=new rt,y=new rt;function S(T,L,k){d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,L),v.fromBufferAttribute(a,k),g.fromBufferAttribute(l,T),x.fromBufferAttribute(l,L),M.fromBufferAttribute(l,k),_.sub(d),v.sub(d),x.sub(g),M.sub(g);const B=1/(x.x*M.y-M.x*x.y);isFinite(B)&&(E.copy(_).multiplyScalar(M.y).addScaledVector(v,-x.y).multiplyScalar(B),y.copy(v).multiplyScalar(x.x).addScaledVector(_,-M.x).multiplyScalar(B),f[T].add(E),f[L].add(E),f[k].add(E),p[T].add(y),p[L].add(y),p[k].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,L=A.length;T<L;++T){const k=A[T],B=k.start,W=k.count;for(let $=B,lt=B+W;$<lt;$+=3)S(t.getX($+0),t.getX($+1),t.getX($+2))}const w=new rt,D=new rt,P=new rt,N=new rt;function O(T){P.fromBufferAttribute(s,T),N.copy(P);const L=f[T];w.copy(L),w.sub(P.multiplyScalar(P.dot(L))).normalize(),D.crossVectors(N,L);const B=D.dot(p[T])<0?-1:1;u.setXYZW(T,w.x,w.y,w.z,B)}for(let T=0,L=A.length;T<L;++T){const k=A[T],B=k.start,W=k.count;for(let $=B,lt=B+W;$<lt;$+=3)O(t.getX($+0)),O(t.getX($+1)),O(t.getX($+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new la(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,x=a.count;g<x;g++)a.setXYZ(g,0,0,0);const s=new rt,l=new rt,u=new rt,f=new rt,p=new rt,d=new rt,_=new rt,v=new rt;if(t)for(let g=0,x=t.count;g<x;g+=3){const M=t.getX(g+0),E=t.getX(g+1),y=t.getX(g+2);s.fromBufferAttribute(n,M),l.fromBufferAttribute(n,E),u.fromBufferAttribute(n,y),_.subVectors(u,l),v.subVectors(s,l),_.cross(v),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,x=n.count;g<x;g+=3)s.fromBufferAttribute(n,g+0),l.fromBufferAttribute(n,g+1),u.fromBufferAttribute(n,g+2),_.subVectors(u,l),v.subVectors(s,l),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Ln.fromBufferAttribute(t,n),Ln.normalize(),t.setXYZ(n,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let x=0,M=0;for(let E=0,y=p.length;E<y;E++){f.isInterleavedBufferAttribute?x=p[E]*f.data.stride+f.offset:x=p[E]*_;for(let S=0;S<_;S++)g[M++]=d[x++]}return new la(g,_,v)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qi,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],x=t(g,a);p.push(x)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,p=u.length;f<p;f++){const d=u[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const x=d[v];_.push(x.toJSON(t.data))}_.length>0&&(s[p]=_,l=!0)}l&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],v=l[d];for(let g=0,x=v.length;g<x;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let d=0,_=u.length;d<_;d++){const v=u[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Nb=0;class Ec extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nb++}),this.uuid=yc(),this.name="",this.type="Material",this.blending=zo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=Gp,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){re(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(a.blending=this.blending),this.side!==Yr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Ip&&(a.blendSrc=this.blendSrc),this.blendDst!==Gp&&(a.blendDst=this.blendDst),this.blendEquation!==As&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Vo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const f in l){const p=l[f];delete p.metadata,u.push(p)}return u}if(n){const l=s(t.textures),u=s(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Za=new rt,_p=new rt,Xu=new rt,Ir=new rt,gp=new rt,Wu=new rt,vp=new rt;class ry{constructor(t=new rt,n=new rt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Za)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Za.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Za.copy(this.origin).addScaledVector(this.direction,n),Za.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){_p.copy(t).add(n).multiplyScalar(.5),Xu.copy(n).sub(t).normalize(),Ir.copy(this.origin).sub(_p);const l=t.distanceTo(n)*.5,u=-this.direction.dot(Xu),f=Ir.dot(this.direction),p=-Ir.dot(Xu),d=Ir.lengthSq(),_=Math.abs(1-u*u);let v,g,x,M;if(_>0)if(v=u*p-f,g=u*f-p,M=l*_,v>=0)if(g>=-M)if(g<=M){const E=1/_;v*=E,g*=E,x=v*(v+u*g+2*f)+g*(u*v+g+2*p)+d}else g=l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*p)+d;else g=-l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*p)+d;else g<=-M?(v=Math.max(0,-(-u*l+f)),g=v>0?-l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d):g<=M?(v=0,g=Math.min(Math.max(-l,-p),l),x=g*(g+2*p)+d):(v=Math.max(0,-(u*l+f)),g=v>0?l:Math.min(Math.max(-l,-p),l),x=-v*v+g*(g+2*p)+d);else g=u>0?-l:l,v=Math.max(0,-(u*g+f)),x=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(_p).addScaledVector(Xu,g),x}intersectSphere(t,n){Za.subVectors(t.center,this.origin);const a=Za.dot(this.direction),s=Za.dot(Za)-a*a,l=t.radius*t.radius;if(s>l)return null;const u=Math.sqrt(l-s),f=a-u,p=a+u;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,l,u,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),_>=0?(l=(t.min.y-g.y)*_,u=(t.max.y-g.y)*_):(l=(t.max.y-g.y)*_,u=(t.min.y-g.y)*_),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),v>=0?(f=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,Za)!==null}intersectTriangle(t,n,a,s,l){gp.subVectors(n,t),Wu.subVectors(a,t),vp.crossVectors(gp,Wu);let u=this.direction.dot(vp),f;if(u>0){if(s)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Ir.subVectors(this.origin,t);const p=f*this.direction.dot(Wu.crossVectors(Ir,Wu));if(p<0)return null;const d=f*this.direction.dot(gp.cross(Ir));if(d<0||p+d>u)return null;const _=-f*Ir.dot(vp);return _<0?null:this.at(_/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sy extends Ec{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zs,this.combine=zS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fx=new _n,Ss=new ry,qu=new Nf,zx=new rt,ju=new rt,Yu=new rt,Zu=new rt,xp=new rt,Ku=new rt,Bx=new rt,Qu=new rt;class ca extends Hn{constructor(t=new Qi,n=new sy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(l&&f){Ku.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],v=l[p];_!==0&&(xp.fromBufferAttribute(v,t),u?Ku.addScaledVector(xp,_):Ku.addScaledVector(xp.sub(n),_))}n.add(Ku)}return n}raycast(t,n){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qu.copy(a.boundingSphere),qu.applyMatrix4(l),Ss.copy(t.ray).recast(t.near),!(qu.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(qu,zx)===null||Ss.origin.distanceToSquared(zx)>(t.far-t.near)**2))&&(Fx.copy(l).invert(),Ss.copy(t.ray).applyMatrix4(Fx),!(a.boundingBox!==null&&Ss.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Ss)))}_computeIntersections(t,n,a){let s;const l=this.geometry,u=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,v=l.attributes.normal,g=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=u[y.materialIndex],A=Math.max(y.start,x.start),w=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let D=A,P=w;D<P;D+=3){const N=f.getX(D),O=f.getX(D+1),T=f.getX(D+2);s=Ju(this,S,t,a,d,_,v,N,O,T),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let y=M,S=E;y<S;y+=3){const A=f.getX(y),w=f.getX(y+1),D=f.getX(y+2);s=Ju(this,u,t,a,d,_,v,A,w,D),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(u))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=u[y.materialIndex],A=Math.max(y.start,x.start),w=Math.min(p.count,Math.min(y.start+y.count,x.start+x.count));for(let D=A,P=w;D<P;D+=3){const N=D,O=D+1,T=D+2;s=Ju(this,S,t,a,d,_,v,N,O,T),s&&(s.faceIndex=Math.floor(D/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(p.count,x.start+x.count);for(let y=M,S=E;y<S;y+=3){const A=y,w=y+1,D=y+2;s=Ju(this,u,t,a,d,_,v,A,w,D),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function Lb(o,t,n,a,s,l,u,f){let p;if(t.side===ti?p=a.intersectTriangle(u,l,s,!0,f):p=a.intersectTriangle(s,l,u,t.side===Yr,f),p===null)return null;Qu.copy(f),Qu.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Qu);return d<n.near||d>n.far?null:{distance:d,point:Qu.clone(),object:o}}function Ju(o,t,n,a,s,l,u,f,p,d){o.getVertexPosition(f,ju),o.getVertexPosition(p,Yu),o.getVertexPosition(d,Zu);const _=Lb(o,t,n,a,ju,Yu,Zu,Bx);if(_){const v=new rt;sa.getBarycoord(Bx,ju,Yu,Zu,v),s&&(_.uv=sa.getInterpolatedAttribute(s,f,p,d,v,new Be)),l&&(_.uv1=sa.getInterpolatedAttribute(l,f,p,d,v,new Be)),u&&(_.normal=sa.getInterpolatedAttribute(u,f,p,d,v,new rt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new rt,materialIndex:0};sa.getNormal(ju,Yu,Zu,g.normal),_.face=g,_.barycoord=v}return _}class Ob extends Kn{constructor(t=null,n=1,a=1,s,l,u,f,p,d=Gn,_=Gn,v,g){super(null,u,f,p,d,_,s,l,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Sp=new rt,Pb=new rt,Fb=new ce;class bs{constructor(t=new rt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=Sp.subVectors(a,n).cross(Pb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,a=!0){const s=t.delta(Sp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:n.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Fb.getNormalMatrix(t),s=this.coplanarPoint(Sp).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Nf,zb=new Be(.5,.5),$u=new rt;class n0{constructor(t=new bs,n=new bs,a=new bs,s=new bs,l=new bs,u=new bs){this.planes=[t,n,a,s,l,u]}set(t,n,a,s,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ya,a=!1){const s=this.planes,l=t.elements,u=l[0],f=l[1],p=l[2],d=l[3],_=l[4],v=l[5],g=l[6],x=l[7],M=l[8],E=l[9],y=l[10],S=l[11],A=l[12],w=l[13],D=l[14],P=l[15];if(s[0].setComponents(d-u,x-_,S-M,P-A).normalize(),s[1].setComponents(d+u,x+_,S+M,P+A).normalize(),s[2].setComponents(d+f,x+v,S+E,P+w).normalize(),s[3].setComponents(d-f,x-v,S-E,P-w).normalize(),a)s[4].setComponents(p,g,y,D).normalize(),s[5].setComponents(d-p,x-g,S-y,P-D).normalize();else if(s[4].setComponents(d-p,x-g,S-y,P-D).normalize(),n===ya)s[5].setComponents(d+p,x+g,S+y,P+D).normalize();else if(n===fc)s[5].setComponents(p,g,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const n=zb.distanceTo(t.center);return ys.radius=.7071067811865476+n,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if($u.x=s.normal.x>0?t.max.x:t.min.x,$u.y=s.normal.y>0?t.max.y:t.min.y,$u.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($u)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class oy extends Ec{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ix=new _n,Cm=new ry,tf=new Nf,ef=new rt;class Bb extends Hn{constructor(t=new Qi,n=new oy){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const a=this.geometry,s=this.matrixWorld,l=t.params.Points.threshold,u=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),tf.copy(a.boundingSphere),tf.applyMatrix4(s),tf.radius+=l,t.ray.intersectsSphere(tf)===!1)return;Ix.copy(s).invert(),Cm.copy(t.ray).applyMatrix4(Ix);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,d=a.index,v=a.attributes.position;if(d!==null){const g=Math.max(0,u.start),x=Math.min(d.count,u.start+u.count);for(let M=g,E=x;M<E;M++){const y=d.getX(M);ef.fromBufferAttribute(v,y),Gx(ef,y,p,s,t,n,this)}}else{const g=Math.max(0,u.start),x=Math.min(v.count,u.start+u.count);for(let M=g,E=x;M<E;M++)ef.fromBufferAttribute(v,M),Gx(ef,M,p,s,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gx(o,t,n,a,s,l,u){const f=Cm.distanceSqToPoint(o);if(f<n){const p=new rt;Cm.closestPointToPoint(o,p),p.applyMatrix4(a);const d=s.ray.origin.distanceTo(p);if(d<s.near||d>s.far)return;l.push({distance:d,distanceToRay:Math.sqrt(f),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:u})}}class ly extends Kn{constructor(t=[],n=Ps,a,s,l,u,f,p,d,_){super(t,n,a,s,l,u,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xo extends Kn{constructor(t,n,a=Ta,s,l,u,f=Gn,p=Gn,d,_=ir,v=1){if(_!==ir&&_!==ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,s,l,u,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new e0(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ib extends Xo{constructor(t,n=Ta,a=Ps,s,l,u=Gn,f=Gn,p,d=ir){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,s,l,u,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class cy extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bc extends Qi{constructor(t=1,n=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const f=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],_=[],v=[];let g=0,x=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,s,u,2),M("x","z","y",1,-1,t,a,-n,s,u,3),M("x","y","z",1,-1,t,n,a,s,l,4),M("x","y","z",-1,-1,t,n,-a,s,l,5),this.setIndex(p),this.setAttribute("position",new Zi(d,3)),this.setAttribute("normal",new Zi(_,3)),this.setAttribute("uv",new Zi(v,2));function M(E,y,S,A,w,D,P,N,O,T,L){const k=D/O,B=P/T,W=D/2,$=P/2,lt=N/2,X=O+1,z=T+1;let G=0,tt=0;const ht=new rt;for(let vt=0;vt<z;vt++){const I=vt*B-$;for(let K=0;K<X;K++){const St=K*k-W;ht[E]=St*A,ht[y]=I*w,ht[S]=lt,d.push(ht.x,ht.y,ht.z),ht[E]=0,ht[y]=0,ht[S]=N>0?1:-1,_.push(ht.x,ht.y,ht.z),v.push(K/O),v.push(1-vt/T),G+=1}}for(let vt=0;vt<T;vt++)for(let I=0;I<O;I++){const K=g+I+X*vt,St=g+I+X*(vt+1),yt=g+(I+1)+X*(vt+1),At=g+(I+1)+X*vt;p.push(K,St,At),p.push(St,yt,At),tt+=6}f.addGroup(x,tt,L),x+=tt,g+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bc(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Lf extends Qi{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const l=t/2,u=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,v=t/f,g=n/p,x=[],M=[],E=[],y=[];for(let S=0;S<_;S++){const A=S*g-u;for(let w=0;w<d;w++){const D=w*v-l;M.push(D,-A,0),E.push(0,0,1),y.push(w/f),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let A=0;A<f;A++){const w=A+d*S,D=A+d*(S+1),P=A+1+d*(S+1),N=A+1+d*S;x.push(w,D,N),x.push(D,P,N)}this.setIndex(x),this.setAttribute("position",new Zi(M,3)),this.setAttribute("normal",new Zi(E,3)),this.setAttribute("uv",new Zi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lf(t.width,t.height,t.widthSegments,t.heightSegments)}}class yf extends Qi{constructor(t=1,n=32,a=16,s=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const p=Math.min(u+f,Math.PI);let d=0;const _=[],v=new rt,g=new rt,x=[],M=[],E=[],y=[];for(let S=0;S<=a;S++){const A=[],w=S/a;let D=0;S===0&&u===0?D=.5/n:S===a&&p===Math.PI&&(D=-.5/n);for(let P=0;P<=n;P++){const N=P/n;v.x=-t*Math.cos(s+N*l)*Math.sin(u+w*f),v.y=t*Math.cos(u+w*f),v.z=t*Math.sin(s+N*l)*Math.sin(u+w*f),M.push(v.x,v.y,v.z),g.copy(v).normalize(),E.push(g.x,g.y,g.z),y.push(N+D,1-w),A.push(d++)}_.push(A)}for(let S=0;S<a;S++)for(let A=0;A<n;A++){const w=_[S][A+1],D=_[S][A],P=_[S+1][A],N=_[S+1][A+1];(S!==0||u>0)&&x.push(w,D,N),(S!==a-1||p<Math.PI)&&x.push(D,P,N)}this.setIndex(x),this.setAttribute("position",new Zi(M,3)),this.setAttribute("normal",new Zi(E,3)),this.setAttribute("uv",new Zi(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yf(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function Wo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];if(Hx(s))s.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone();else if(Array.isArray(s))if(Hx(s[0])){const l=[];for(let u=0,f=s.length;u<f;u++)l[u]=s[u].clone();t[n][a]=l}else t[n][a]=s.slice();else t[n][a]=s}}return t}function $n(o){const t={};for(let n=0;n<o.length;n++){const a=Wo(o[n]);for(const s in a)t[s]=a[s]}return t}function Hx(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function Gb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function uy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const Hb={clone:Wo,merge:$n};var Vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ec{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vb,this.fragmentShader=kb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wo(t.uniforms),this.uniformsGroups=Gb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?n.uniforms[s]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[s]={type:"m4",value:u.toArray()}:n.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Xb extends Ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wb extends Ec{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qb extends Ec{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yp={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(Vx(o)||(this.files[o]=t))},get:function(o){if(this.enabled!==!1&&!Vx(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Vx(o){try{const t=o.slice(o.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class jb{constructor(t,n,a){const s=this;let l=!1,u=0,f=0,p;const d=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=a,this._abortController=null,this.itemStart=function(_){f++,l===!1&&s.onStart!==void 0&&s.onStart(_,u,f),l=!0},this.itemEnd=function(_){u++,s.onProgress!==void 0&&s.onProgress(_,u,f),u===f&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(_){s.onError!==void 0&&s.onError(_)},this.resolveURL=function(_){return p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,v){return d.push(_,v),this},this.removeHandler=function(_){const v=d.indexOf(_);return v!==-1&&d.splice(v,2),this},this.getHandler=function(_){for(let v=0,g=d.length;v<g;v+=2){const x=d[v],M=d[v+1];if(x.global&&(x.lastIndex=0),x.test(_))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Yb=new jb;class i0{constructor(t){this.manager=t!==void 0?t:Yb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const a=this;return new Promise(function(s,l){a.load(t,s,n,l)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}i0.DEFAULT_MATERIAL_NAME="__DEFAULT";const Do=new WeakMap;class Zb extends i0{constructor(t){super(t)}load(t,n,a,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const l=this,u=yp.get(`image:${t}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(t),setTimeout(function(){n&&n(u),l.manager.itemEnd(t)},0);else{let v=Do.get(u);v===void 0&&(v=[],Do.set(u,v)),v.push({onLoad:n,onError:s})}return u}const f=hc("img");function p(){_(),n&&n(this);const v=Do.get(this)||[];for(let g=0;g<v.length;g++){const x=v[g];x.onLoad&&x.onLoad(this)}Do.delete(this),l.manager.itemEnd(t)}function d(v){_(),s&&s(v),yp.remove(`image:${t}`);const g=Do.get(this)||[];for(let x=0;x<g.length;x++){const M=g[x];M.onError&&M.onError(v)}Do.delete(this),l.manager.itemError(t),l.manager.itemEnd(t)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",d,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),yp.add(`image:${t}`,f),l.manager.itemStart(t),f.src=t,f}}class Kb extends i0{constructor(t){super(t)}load(t,n,a,s){const l=new Kn,u=new Zb(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(t,function(f){l.image=f,l.needsUpdate=!0,n!==void 0&&n(l)},a,s),l}}class fy extends Hn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new De(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Mp=new _n,kx=new rt,Xx=new rt;class Qb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Ci,this.map=null,this.mapPass=null,this.matrix=new _n,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new n0,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;kx.setFromMatrixPosition(t.matrixWorld),n.position.copy(kx),Xx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Xx),n.updateMatrixWorld(),Mp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mp,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===fc||n.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(Mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nf=new rt,af=new Qo,ma=new rt;class hy extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _n,this.projectionMatrix=new _n,this.projectionMatrixInverse=new _n,this.coordinateSystem=ya,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(nf,af,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,af,ma.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(nf,af,ma),ma.x===1&&ma.y===1&&ma.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(nf,af,ma.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new rt,Wx=new Be,qx=new Be;class qi extends hy{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Rm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rm*2*Math.atan(Math.tan(Qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Gr.x,Gr.y).multiplyScalar(-t/Gr.z)}getViewSize(t,n){return this.getViewBounds(t,Wx,qx),n.subVectors(qx,Wx)}setViewOffset(t,n,a,s,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Qd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*s/p,n-=u.offsetY*a/d,s*=u.width/p,a*=u.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class a0 extends hy{constructor(t=-1,n=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Jb extends Qb{constructor(){super(new a0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jx extends fy{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new Jb}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class $b extends fy{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Uo=-90,No=1;class tT extends Hn{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new qi(Uo,No,t,n);s.layers=this.layers,this.add(s);const l=new qi(Uo,No,t,n);l.layers=this.layers,this.add(l);const u=new qi(Uo,No,t,n);u.layers=this.layers,this.add(u);const f=new qi(Uo,No,t,n);f.layers=this.layers,this.add(f);const p=new qi(Uo,No,t,n);p.layers=this.layers,this.add(p);const d=new qi(Uo,No,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,l,u,f,p]=n;for(const d of n)this.remove(d);if(t===ya)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===fc)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(a,0,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(a,1,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,2,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),y&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,x),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class eT extends qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const R0=class R0{constructor(t,n,a,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let a=0;a<4;a++)this.elements[a]=t[a+n];return this}set(t,n,a,s){const l=this.elements;return l[0]=t,l[2]=n,l[1]=a,l[3]=s,this}};R0.prototype.isMatrix2=!0;let Yx=R0;function Zx(o,t,n,a){const s=nT(a);switch(n){case KS:return o*t;case JS:return o*t/s.components*s.byteLength;case Km:return o*t/s.components*s.byteLength;case Fs:return o*t*2/s.components*s.byteLength;case Qm:return o*t*2/s.components*s.byteLength;case QS:return o*t*3/s.components*s.byteLength;case oa:return o*t*4/s.components*s.byteLength;case Jm:return o*t*4/s.components*s.byteLength;case cf:case uf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ff:case hf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qp:case $p:return Math.max(o,16)*Math.max(t,8)/4;case Kp:case Jp:return Math.max(o,8)*Math.max(t,8)/2;case tm:case em:case im:case am:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case nm:case gf:case rm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sm:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case om:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case lm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case cm:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case um:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case fm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case hm:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case dm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case pm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case mm:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case _m:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case gm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case vm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case xm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Sm:case ym:case Mm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Em:case bm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vf:case Tm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function nT(o){switch(o){case Ci:case qS:return{byteLength:1,components:1};case cc:case jS:case nr:return{byteLength:2,components:1};case Ym:case Zm:return{byteLength:2,components:4};case Ta:case jm:case Sa:return{byteLength:4,components:1};case YS:case ZS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qm}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qm);function dy(){let o=null,t=!1,n=null,a=null;function s(l,u){n(l,u),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&o!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){o=l}}}function iT(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((x,M)=>x.start-M.start);let g=0;for(let x=1;x<v.length;x++){const M=v[g],E=v[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,v[g]=E)}v.length=g+1;for(let x=0,M=v.length;x<M;x++){const E=v[x];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function u(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:l,update:u}}var aT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_T=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ET=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,TT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,DT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,UT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,WT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,YT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,KT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$T=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,oA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,EA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,OA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,KA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$A=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,n2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,i2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,f2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,d2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,p2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,v2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,x2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,E2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,T2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,A2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,w2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,L2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,z2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,me={alphahash_fragment:aT,alphahash_pars_fragment:rT,alphamap_fragment:sT,alphamap_pars_fragment:oT,alphatest_fragment:lT,alphatest_pars_fragment:cT,aomap_fragment:uT,aomap_pars_fragment:fT,batching_pars_vertex:hT,batching_vertex:dT,begin_vertex:pT,beginnormal_vertex:mT,bsdfs:_T,iridescence_fragment:gT,bumpmap_pars_fragment:vT,clipping_planes_fragment:xT,clipping_planes_pars_fragment:ST,clipping_planes_pars_vertex:yT,clipping_planes_vertex:MT,color_fragment:ET,color_pars_fragment:bT,color_pars_vertex:TT,color_vertex:AT,common:RT,cube_uv_reflection_fragment:CT,defaultnormal_vertex:wT,displacementmap_pars_vertex:DT,displacementmap_vertex:UT,emissivemap_fragment:NT,emissivemap_pars_fragment:LT,colorspace_fragment:OT,colorspace_pars_fragment:PT,envmap_fragment:FT,envmap_common_pars_fragment:zT,envmap_pars_fragment:BT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:KT,envmap_vertex:GT,fog_vertex:HT,fog_pars_vertex:VT,fog_fragment:kT,fog_pars_fragment:XT,gradientmap_pars_fragment:WT,lightmap_pars_fragment:qT,lights_lambert_fragment:jT,lights_lambert_pars_fragment:YT,lights_pars_begin:ZT,lights_toon_fragment:QT,lights_toon_pars_fragment:JT,lights_phong_fragment:$T,lights_phong_pars_fragment:tA,lights_physical_fragment:eA,lights_physical_pars_fragment:nA,lights_fragment_begin:iA,lights_fragment_maps:aA,lights_fragment_end:rA,lightprobes_pars_fragment:sA,logdepthbuf_fragment:oA,logdepthbuf_pars_fragment:lA,logdepthbuf_pars_vertex:cA,logdepthbuf_vertex:uA,map_fragment:fA,map_pars_fragment:hA,map_particle_fragment:dA,map_particle_pars_fragment:pA,metalnessmap_fragment:mA,metalnessmap_pars_fragment:_A,morphinstance_vertex:gA,morphcolor_vertex:vA,morphnormal_vertex:xA,morphtarget_pars_vertex:SA,morphtarget_vertex:yA,normal_fragment_begin:MA,normal_fragment_maps:EA,normal_pars_fragment:bA,normal_pars_vertex:TA,normal_vertex:AA,normalmap_pars_fragment:RA,clearcoat_normal_fragment_begin:CA,clearcoat_normal_fragment_maps:wA,clearcoat_pars_fragment:DA,iridescence_pars_fragment:UA,opaque_fragment:NA,packing:LA,premultiplied_alpha_fragment:OA,project_vertex:PA,dithering_fragment:FA,dithering_pars_fragment:zA,roughnessmap_fragment:BA,roughnessmap_pars_fragment:IA,shadowmap_pars_fragment:GA,shadowmap_pars_vertex:HA,shadowmap_vertex:VA,shadowmask_pars_fragment:kA,skinbase_vertex:XA,skinning_pars_vertex:WA,skinning_vertex:qA,skinnormal_vertex:jA,specularmap_fragment:YA,specularmap_pars_fragment:ZA,tonemapping_fragment:KA,tonemapping_pars_fragment:QA,transmission_fragment:JA,transmission_pars_fragment:$A,uv_pars_fragment:t2,uv_pars_vertex:e2,uv_vertex:n2,worldpos_vertex:i2,background_vert:a2,background_frag:r2,backgroundCube_vert:s2,backgroundCube_frag:o2,cube_vert:l2,cube_frag:c2,depth_vert:u2,depth_frag:f2,distance_vert:h2,distance_frag:d2,equirect_vert:p2,equirect_frag:m2,linedashed_vert:_2,linedashed_frag:g2,meshbasic_vert:v2,meshbasic_frag:x2,meshlambert_vert:S2,meshlambert_frag:y2,meshmatcap_vert:M2,meshmatcap_frag:E2,meshnormal_vert:b2,meshnormal_frag:T2,meshphong_vert:A2,meshphong_frag:R2,meshphysical_vert:C2,meshphysical_frag:w2,meshtoon_vert:D2,meshtoon_frag:U2,points_vert:N2,points_frag:L2,shadow_vert:O2,shadow_frag:P2,sprite_vert:F2,sprite_frag:z2},Gt={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new rt},probesMax:{value:new rt},probesResolution:{value:new rt}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},va={basic:{uniforms:$n([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:$n([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:$n([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:$n([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:$n([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new De(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:$n([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:$n([Gt.points,Gt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:$n([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:$n([Gt.common,Gt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:$n([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:$n([Gt.sprite,Gt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distance:{uniforms:$n([Gt.common,Gt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distance_vert,fragmentShader:me.distance_frag},shadow:{uniforms:$n([Gt.lights,Gt.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};va.physical={uniforms:$n([va.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const rf={r:0,b:0,g:0},B2=new _n,py=new ce;py.set(-1,0,0,0,1,0,0,0,1);function I2(o,t,n,a,s,l){const u=new De(0);let f=s===!0?0:1,p,d,_=null,v=0,g=null;function x(A){let w=A.isScene===!0?A.background:null;if(w&&w.isTexture){const D=A.backgroundBlurriness>0;w=t.get(w,D)}return w}function M(A){let w=!1;const D=x(A);D===null?y(u,f):D&&D.isColor&&(y(D,1),w=!0);const P=o.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,l):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(o.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(A,w){const D=x(w);D&&(D.isCubeTexture||D.mapping===Uf)?(d===void 0&&(d=new ca(new bc(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Wo(va.backgroundCube.uniforms),vertexShader:va.backgroundCube.vertexShader,fragmentShader:va.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),d.material.uniforms.envMap.value=D,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(B2.makeRotationFromEuler(w.backgroundRotation)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(py),d.material.toneMapped=be.getTransfer(D.colorSpace)!==We,(_!==D||v!==D.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=D,v=D.version,g=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):D&&D.isTexture&&(p===void 0&&(p=new ca(new Lf(2,2),new Ki({name:"BackgroundMaterial",uniforms:Wo(va.background.uniforms),vertexShader:va.background.vertexShader,fragmentShader:va.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=D,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=be.getTransfer(D.colorSpace)!==We,D.matrixAutoUpdate===!0&&D.updateMatrix(),p.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=D,v=D.version,g=o.toneMapping),p.layers.enableAll(),A.unshift(p,p.geometry,p.material,0,0,null))}function y(A,w){A.getRGB(rf,uy(o)),n.buffers.color.setClear(rf.r,rf.g,rf.b,w,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(A,w=1){u.set(A),f=w,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(A){f=A,y(u,f)},render:M,addToRenderList:E,dispose:S}}function G2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=g(null);let l=s,u=!1;function f(B,W,$,lt,X){let z=!1;const G=v(B,lt,$,W);l!==G&&(l=G,d(l.object)),z=x(B,lt,$,X),z&&M(B,lt,$,X),X!==null&&t.update(X,o.ELEMENT_ARRAY_BUFFER),(z||u)&&(u=!1,D(B,W,$,lt),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return o.createVertexArray()}function d(B){return o.bindVertexArray(B)}function _(B){return o.deleteVertexArray(B)}function v(B,W,$,lt){const X=lt.wireframe===!0;let z=a[W.id];z===void 0&&(z={},a[W.id]=z);const G=B.isInstancedMesh===!0?B.id:0;let tt=z[G];tt===void 0&&(tt={},z[G]=tt);let ht=tt[$.id];ht===void 0&&(ht={},tt[$.id]=ht);let vt=ht[X];return vt===void 0&&(vt=g(p()),ht[X]=vt),vt}function g(B){const W=[],$=[],lt=[];for(let X=0;X<n;X++)W[X]=0,$[X]=0,lt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:lt,object:B,attributes:{},index:null}}function x(B,W,$,lt){const X=l.attributes,z=W.attributes;let G=0;const tt=$.getAttributes();for(const ht in tt)if(tt[ht].location>=0){const I=X[ht];let K=z[ht];if(K===void 0&&(ht==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),ht==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),I===void 0||I.attribute!==K||K&&I.data!==K.data)return!0;G++}return l.attributesNum!==G||l.index!==lt}function M(B,W,$,lt){const X={},z=W.attributes;let G=0;const tt=$.getAttributes();for(const ht in tt)if(tt[ht].location>=0){let I=z[ht];I===void 0&&(ht==="instanceMatrix"&&B.instanceMatrix&&(I=B.instanceMatrix),ht==="instanceColor"&&B.instanceColor&&(I=B.instanceColor));const K={};K.attribute=I,I&&I.data&&(K.data=I.data),X[ht]=K,G++}l.attributes=X,l.attributesNum=G,l.index=lt}function E(){const B=l.newAttributes;for(let W=0,$=B.length;W<$;W++)B[W]=0}function y(B){S(B,0)}function S(B,W){const $=l.newAttributes,lt=l.enabledAttributes,X=l.attributeDivisors;$[B]=1,lt[B]===0&&(o.enableVertexAttribArray(B),lt[B]=1),X[B]!==W&&(o.vertexAttribDivisor(B,W),X[B]=W)}function A(){const B=l.newAttributes,W=l.enabledAttributes;for(let $=0,lt=W.length;$<lt;$++)W[$]!==B[$]&&(o.disableVertexAttribArray($),W[$]=0)}function w(B,W,$,lt,X,z,G){G===!0?o.vertexAttribIPointer(B,W,$,X,z):o.vertexAttribPointer(B,W,$,lt,X,z)}function D(B,W,$,lt){E();const X=lt.attributes,z=$.getAttributes(),G=W.defaultAttributeValues;for(const tt in z){const ht=z[tt];if(ht.location>=0){let vt=X[tt];if(vt===void 0&&(tt==="instanceMatrix"&&B.instanceMatrix&&(vt=B.instanceMatrix),tt==="instanceColor"&&B.instanceColor&&(vt=B.instanceColor)),vt!==void 0){const I=vt.normalized,K=vt.itemSize,St=t.get(vt);if(St===void 0)continue;const yt=St.buffer,At=St.type,ct=St.bytesPerElement,Mt=At===o.INT||At===o.UNSIGNED_INT||vt.gpuType===jm;if(vt.isInterleavedBufferAttribute){const Tt=vt.data,Ht=Tt.stride,ne=vt.offset;if(Tt.isInstancedInterleavedBuffer){for(let Jt=0;Jt<ht.locationSize;Jt++)S(ht.location+Jt,Tt.meshPerAttribute);B.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Jt=0;Jt<ht.locationSize;Jt++)y(ht.location+Jt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Jt=0;Jt<ht.locationSize;Jt++)w(ht.location+Jt,K/ht.locationSize,At,I,Ht*ct,(ne+K/ht.locationSize*Jt)*ct,Mt)}else{if(vt.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)S(ht.location+Tt,vt.meshPerAttribute);B.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)y(ht.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Tt=0;Tt<ht.locationSize;Tt++)w(ht.location+Tt,K/ht.locationSize,At,I,K*ct,K/ht.locationSize*Tt*ct,Mt)}}else if(G!==void 0){const I=G[tt];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(ht.location,I);break;case 3:o.vertexAttrib3fv(ht.location,I);break;case 4:o.vertexAttrib4fv(ht.location,I);break;default:o.vertexAttrib1fv(ht.location,I)}}}}A()}function P(){L();for(const B in a){const W=a[B];for(const $ in W){const lt=W[$];for(const X in lt){const z=lt[X];for(const G in z)_(z[G].object),delete z[G];delete lt[X]}}delete a[B]}}function N(B){if(a[B.id]===void 0)return;const W=a[B.id];for(const $ in W){const lt=W[$];for(const X in lt){const z=lt[X];for(const G in z)_(z[G].object),delete z[G];delete lt[X]}}delete a[B.id]}function O(B){for(const W in a){const $=a[W];for(const lt in $){const X=$[lt];if(X[B.id]===void 0)continue;const z=X[B.id];for(const G in z)_(z[G].object),delete z[G];delete X[B.id]}}}function T(B){for(const W in a){const $=a[W],lt=B.isInstancedMesh===!0?B.id:0,X=$[lt];if(X!==void 0){for(const z in X){const G=X[z];for(const tt in G)_(G[tt].object),delete G[tt];delete X[z]}delete $[lt],Object.keys($).length===0&&delete a[W]}}}function L(){k(),u=!0,l!==s&&(l=s,d(l.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:L,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:y,disableUnusedAttributes:A}}function H2(o,t,n){let a;function s(p){a=p}function l(p,d){o.drawArrays(a,p,d),n.update(d,a,1)}function u(p,d,_){_!==0&&(o.drawArraysInstanced(a,p,d,_),n.update(d,a,_))}function f(p,d,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,p,0,d,0,_);let g=0;for(let x=0;x<_;x++)g+=d[x];n.update(g,a,1)}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function V2(o,t,n,a){let s;function l(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(O){return!(O!==oa&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const T=O===nr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ci&&a.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Sa&&!T)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(re("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:A,maxVaryings:w,maxFragmentUniforms:D,maxSamples:P,samples:N}}function k2(o){const t=this;let n=null,a=0,s=!1,l=!1;const u=new bs,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const x=v.length!==0||g||a!==0||s;return s=g,a=v.length,x},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,x){const M=v.clippingPlanes,E=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!s||M===null||M.length===0||l&&!y)l?_(null):d();else{const A=l?0:a,w=A*4;let D=S.clippingState||null;p.value=D,D=_(M,g,w,x);for(let P=0;P!==w;++P)D[P]=n[P];S.clippingState=D,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,x,M){const E=v!==null?v.length:0;let y=null;if(E!==0){if(y=p.value,M!==!0||y===null){const S=x+E*4,A=g.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<S)&&(y=new Float32Array(S));for(let w=0,D=x;w!==E;++w,D+=4)u.copy(v[w]).applyMatrix4(A,f),u.normal.toArray(y,D),y[D+3]=u.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,y}}const Vr=4,Kx=[.125,.215,.35,.446,.526,.582],Rs=20,X2=256,Jl=new a0,Qx=new De;let Ep=null,bp=0,Tp=0,Ap=!1;const W2=new rt;class Jx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,l={}){const{size:u=256,position:f=W2}=l;Ep=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ep,bp,Tp),this._renderer.xr.enabled=Ap,t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ps||t.mapping===ko?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ep=this._renderer.getRenderTarget(),bp=this._renderer.getActiveCubeFace(),Tp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:nr,format:oa,colorSpace:xf,depthBuffer:!1},s=$x(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$x(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=q2(l)),this._blurMaterial=Y2(l,t,n),this._ggxMaterial=j2(l,t,n)}return s}_compileMaterial(t){const n=new ca(new Qi,t);this._renderer.compile(n,Jl)}_sceneToCubeUV(t,n,a,s,l){const p=new qi(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,x=v.toneMapping;v.getClearColor(Qx),v.toneMapping=Ea,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ca(new bc,new sy({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let S=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,S=!0):(y.color.copy(Qx),S=!0);for(let w=0;w<6;w++){const D=w%3;D===0?(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[w],l.y,l.z)):D===1?(p.up.set(0,0,d[w]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[w],l.z)):(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[w]));const P=this._cubeSize;Lo(s,D*P,w>2?P:0,P,P),v.setRenderTarget(s),S&&v.render(E,p),v.render(t,p)}v.toneMapping=x,v.autoClear=g,t.background=A}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Ps||t.mapping===ko;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=eS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tS());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Lo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(u,Jl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[a];f.material=u;const p=u.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,x=v*g,{_lodMax:M}=this,E=this._sizeLods[a],y=3*E*(a>M-Vr?a-M+Vr:0),S=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=x,p.mipInt.value=M-n,Lo(l,y,S,3*E,2*E),s.setRenderTarget(l),s.render(f,Jl),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=M-a,Lo(t,y,S,3*E,2*E),s.setRenderTarget(t),s.render(f,Jl)}_blur(t,n,a,s,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,s,"latitudinal",l),this._halfBlur(u,t,a,a,s,"longitudinal",l)}_halfBlur(t,n,a,s,l,u,f){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&we("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[s];v.material=d;const g=d.uniforms,x=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Rs-1),E=l/M,y=isFinite(l)?1+Math.floor(_*E):Rs;y>Rs&&re(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Rs}`);const S=[];let A=0;for(let O=0;O<Rs;++O){const T=O/E,L=Math.exp(-T*T/2);S.push(L),O===0?A+=L:O<y&&(A+=2*L)}for(let O=0;O<S.length;O++)S[O]=S[O]/A;g.envMap.value=t.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:w}=this;g.dTheta.value=M,g.mipInt.value=w-a;const D=this._sizeLods[s],P=3*D*(s>w-Vr?s-w+Vr:0),N=4*(this._cubeSize-D);Lo(n,P,N,3*D,2*D),p.setRenderTarget(n),p.render(v,Jl)}}function q2(o){const t=[],n=[],a=[];let s=o;const l=o-Vr+1+Kx.length;for(let u=0;u<l;u++){const f=Math.pow(2,s);t.push(f);let p=1/f;u>o-Vr?p=Kx[u-o+Vr-1]:u===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],x=6,M=6,E=3,y=2,S=1,A=new Float32Array(E*M*x),w=new Float32Array(y*M*x),D=new Float32Array(S*M*x);for(let N=0;N<x;N++){const O=N%3*2/3-1,T=N>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];A.set(L,E*M*N),w.set(g,y*M*N);const k=[N,N,N,N,N,N];D.set(k,S*M*N)}const P=new Qi;P.setAttribute("position",new la(A,E)),P.setAttribute("uv",new la(w,y)),P.setAttribute("faceIndex",new la(D,S)),a.push(new ca(P,null)),s>Vr&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function $x(o,t,n){const a=new ba(o,t,n);return a.texture.mapping=Uf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Lo(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function j2(o,t,n){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:X2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Of(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Y2(o,t,n){const a=new Float32Array(Rs),s=new rt(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function tS(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function eS(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class my extends ba{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new ly(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bc(5,5,5),l=new Ki({name:"CubemapFromEquirect",uniforms:Wo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ti,blending:tr});l.uniforms.tEquirect.value=n;const u=new ca(s,l),f=n.minFilter;return n.minFilter===Cs&&(n.minFilter=Zn),new tT(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,s);t.setRenderTarget(l)}}function Z2(o){let t=new WeakMap,n=new WeakMap,a=null;function s(g,x=!1){return g==null?null:x?u(g):l(g)}function l(g){if(g&&g.isTexture){const x=g.mapping;if(x===Yd||x===Zd)if(t.has(g)){const M=t.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new my(M.height);return E.fromEquirectangularTexture(o,g),t.set(g,E),g.addEventListener("dispose",d),f(E.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const x=g.mapping,M=x===Yd||x===Zd,E=x===Ps||x===ko;if(M||E){let y=n.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return a===null&&(a=new Jx(o)),y=M?a.fromEquirectangular(g,y):a.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),y.texture;if(y!==void 0)return y.texture;{const A=g.image;return M&&A&&A.height>0||E&&A&&p(A)?(a===null&&(a=new Jx(o)),y=M?a.fromEquirectangular(g):a.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,n.set(g,y),g.addEventListener("dispose",_),y.texture):null}}}return g}function f(g,x){return x===Yd?g.mapping=Ps:x===Zd&&(g.mapping=ko),g}function p(g){let x=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&x++;return x===M}function d(g){const x=g.target;x.removeEventListener("dispose",d);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(g){const x=g.target;x.removeEventListener("dispose",_);const M=n.get(x);M!==void 0&&(n.delete(x),M.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:v}}function K2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&Am("WebGLRenderer: "+a+" extension not supported."),s}}}function Q2(o,t,n,a){const s={},l=new WeakMap;function u(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",u),delete s[g.id];const x=l.get(g);x&&(t.remove(x),l.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return s[g.id]===!0||(g.addEventListener("dispose",u),s[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const x in g)t.update(g[x],o.ARRAY_BUFFER)}function d(v){const g=[],x=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(x!==null){const A=x.array;E=x.version;for(let w=0,D=A.length;w<D;w+=3){const P=A[w+0],N=A[w+1],O=A[w+2];g.push(P,N,N,O,O,P)}}else{const A=M.array;E=M.version;for(let w=0,D=A.length/3-1;w<D;w+=3){const P=w+0,N=w+1,O=w+2;g.push(P,N,N,O,O,P)}}const y=new(M.count>=65535?ay:iy)(g,1);y.version=E;const S=l.get(v);S&&t.remove(S),l.set(v,y)}function _(v){const g=l.get(v);if(g){const x=v.index;x!==null&&g.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function J2(o,t,n){let a;function s(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function p(v,g){o.drawElements(a,g,l,v*u),n.update(g,a,1)}function d(v,g,x){x!==0&&(o.drawElementsInstanced(a,g,l,v*u,x),n.update(g,a,x))}function _(v,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,g,0,l,v,0,x);let E=0;for(let y=0;y<x;y++)E+=g[y];n.update(E,a,1)}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_}function $2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case o.TRIANGLES:n.triangles+=f*(l/3);break;case o.LINES:n.lines+=f*(l/2);break;case o.LINE_STRIP:n.lines+=f*(l-1);break;case o.LINE_LOOP:n.lines+=f*l;break;case o.POINTS:n.points+=f*l;break;default:we("WebGLInfo: Unknown draw mode:",u);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function t3(o,t,n){const a=new WeakMap,s=new pn;function l(u,f,p){const d=u.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let k=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",k)};var x=k;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let D=0;M===!0&&(D=1),E===!0&&(D=2),y===!0&&(D=3);let P=f.attributes.position.count*D,N=1;P>t.maxTextureSize&&(N=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const O=new Float32Array(P*N*4*v),T=new ty(O,P,N,v);T.type=Sa,T.needsUpdate=!0;const L=D*4;for(let B=0;B<v;B++){const W=S[B],$=A[B],lt=w[B],X=P*N*4*B;for(let z=0;z<W.count;z++){const G=z*L;M===!0&&(s.fromBufferAttribute(W,z),O[X+G+0]=s.x,O[X+G+1]=s.y,O[X+G+2]=s.z,O[X+G+3]=0),E===!0&&(s.fromBufferAttribute($,z),O[X+G+4]=s.x,O[X+G+5]=s.y,O[X+G+6]=s.z,O[X+G+7]=0),y===!0&&(s.fromBufferAttribute(lt,z),O[X+G+8]=s.x,O[X+G+9]=s.y,O[X+G+10]=s.z,O[X+G+11]=lt.itemSize===4?s.w:1)}}g={count:v,texture:T,size:new Be(P,N)},a.set(f,g),f.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",u.morphTexture,n);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const E=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:l}}function e3(o,t,n,a,s){let l=new WeakMap;function u(d){const _=s.render.frame,v=d.geometry,g=t.get(d,v);if(l.get(g)!==_&&(t.update(g),l.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),l.set(d,_))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return g}function f(){l=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:u,dispose:f}}const n3={[BS]:"LINEAR_TONE_MAPPING",[IS]:"REINHARD_TONE_MAPPING",[GS]:"CINEON_TONE_MAPPING",[HS]:"ACES_FILMIC_TONE_MAPPING",[kS]:"AGX_TONE_MAPPING",[XS]:"NEUTRAL_TONE_MAPPING",[VS]:"CUSTOM_TONE_MAPPING"};function i3(o,t,n,a,s){const l=new ba(t,n,{type:o,depthBuffer:a,stencilBuffer:s,depthTexture:a?new Xo(t,n):void 0}),u=new ba(t,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),f=new Qi;f.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const p=new Xb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ca(f,p),_=new a0(-1,1,1,-1,0,1);let v=null,g=null,x=!1,M,E=null,y=[],S=!1;this.setSize=function(A,w){l.setSize(A,w),u.setSize(A,w);for(let D=0;D<y.length;D++){const P=y[D];P.setSize&&P.setSize(A,w)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const w=l.width,D=l.height;for(let P=0;P<y.length;P++){const N=y[P];N.setSize&&N.setSize(w,D)}},this.begin=function(A,w){if(x||A.toneMapping===Ea&&y.length===0)return!1;if(E=w,w!==null){const D=w.width,P=w.height;(l.width!==D||l.height!==P)&&this.setSize(D,P)}return S===!1&&A.setRenderTarget(l),M=A.toneMapping,A.toneMapping=Ea,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=M,x=!0;let D=l,P=u;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(A,P,D,w),O.needsSwap!==!1)){const T=D;D=P,P=T}}if(v!==A.outputColorSpace||g!==A.toneMapping){v=A.outputColorSpace,g=A.toneMapping,p.defines={},be.getTransfer(v)===We&&(p.defines.SRGB_TRANSFER="");const N=n3[g];N&&(p.defines[N]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,A.setRenderTarget(E),A.render(d,_),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),f.dispose(),p.dispose()}}const _y=new Kn,wm=new Xo(1,1),gy=new ty,vy=new Sb,xy=new ly,nS=[],iS=[],aS=new Float32Array(16),rS=new Float32Array(9),sS=new Float32Array(4);function Jo(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let l=nS[s];if(l===void 0&&(l=new Float32Array(s),nS[s]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,o[u].toArray(l,f)}return l}function Dn(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Un(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Pf(o,t){let n=iS[t];n===void 0&&(n=new Int32Array(t),iS[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function a3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function r3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;o.uniform2fv(this.addr,t),Un(n,t)}}function s3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Dn(n,t))return;o.uniform3fv(this.addr,t),Un(n,t)}}function o3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;o.uniform4fv(this.addr,t),Un(n,t)}}function l3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Dn(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,a))return;sS.set(a),o.uniformMatrix2fv(this.addr,!1,sS),Un(n,a)}}function c3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Dn(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,a))return;rS.set(a),o.uniformMatrix3fv(this.addr,!1,rS),Un(n,a)}}function u3(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(Dn(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Un(n,t)}else{if(Dn(n,a))return;aS.set(a),o.uniformMatrix4fv(this.addr,!1,aS),Un(n,a)}}function f3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function h3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;o.uniform2iv(this.addr,t),Un(n,t)}}function d3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dn(n,t))return;o.uniform3iv(this.addr,t),Un(n,t)}}function p3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;o.uniform4iv(this.addr,t),Un(n,t)}}function m3(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function _3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Dn(n,t))return;o.uniform2uiv(this.addr,t),Un(n,t)}}function g3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Dn(n,t))return;o.uniform3uiv(this.addr,t),Un(n,t)}}function v3(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Dn(n,t))return;o.uniform4uiv(this.addr,t),Un(n,t)}}function x3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let l;this.type===o.SAMPLER_2D_SHADOW?(wm.compareFunction=n.isReversedDepthBuffer()?t0:$m,l=wm):l=_y,n.setTexture2D(t||l,s)}function S3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||vy,s)}function y3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||xy,s)}function M3(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||gy,s)}function E3(o){switch(o){case 5126:return a3;case 35664:return r3;case 35665:return s3;case 35666:return o3;case 35674:return l3;case 35675:return c3;case 35676:return u3;case 5124:case 35670:return f3;case 35667:case 35671:return h3;case 35668:case 35672:return d3;case 35669:case 35673:return p3;case 5125:return m3;case 36294:return _3;case 36295:return g3;case 36296:return v3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return S3;case 35680:case 36300:case 36308:case 36293:return y3;case 36289:case 36303:case 36311:case 36292:return M3}}function b3(o,t){o.uniform1fv(this.addr,t)}function T3(o,t){const n=Jo(t,this.size,2);o.uniform2fv(this.addr,n)}function A3(o,t){const n=Jo(t,this.size,3);o.uniform3fv(this.addr,n)}function R3(o,t){const n=Jo(t,this.size,4);o.uniform4fv(this.addr,n)}function C3(o,t){const n=Jo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function w3(o,t){const n=Jo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function D3(o,t){const n=Jo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function U3(o,t){o.uniform1iv(this.addr,t)}function N3(o,t){o.uniform2iv(this.addr,t)}function L3(o,t){o.uniform3iv(this.addr,t)}function O3(o,t){o.uniform4iv(this.addr,t)}function P3(o,t){o.uniform1uiv(this.addr,t)}function F3(o,t){o.uniform2uiv(this.addr,t)}function z3(o,t){o.uniform3uiv(this.addr,t)}function B3(o,t){o.uniform4uiv(this.addr,t)}function I3(o,t,n){const a=this.cache,s=t.length,l=Pf(n,s);Dn(a,l)||(o.uniform1iv(this.addr,l),Un(a,l));let u;this.type===o.SAMPLER_2D_SHADOW?u=wm:u=_y;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||u,l[f])}function G3(o,t,n){const a=this.cache,s=t.length,l=Pf(n,s);Dn(a,l)||(o.uniform1iv(this.addr,l),Un(a,l));for(let u=0;u!==s;++u)n.setTexture3D(t[u]||vy,l[u])}function H3(o,t,n){const a=this.cache,s=t.length,l=Pf(n,s);Dn(a,l)||(o.uniform1iv(this.addr,l),Un(a,l));for(let u=0;u!==s;++u)n.setTextureCube(t[u]||xy,l[u])}function V3(o,t,n){const a=this.cache,s=t.length,l=Pf(n,s);Dn(a,l)||(o.uniform1iv(this.addr,l),Un(a,l));for(let u=0;u!==s;++u)n.setTexture2DArray(t[u]||gy,l[u])}function k3(o){switch(o){case 5126:return b3;case 35664:return T3;case 35665:return A3;case 35666:return R3;case 35674:return C3;case 35675:return w3;case 35676:return D3;case 5124:case 35670:return U3;case 35667:case 35671:return N3;case 35668:case 35672:return L3;case 35669:case 35673:return O3;case 5125:return P3;case 36294:return F3;case 36295:return z3;case 36296:return B3;case 35678:case 36198:case 36298:case 36306:case 35682:return I3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return H3;case 36289:case 36303:case 36311:case 36292:return V3}}class X3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=E3(n.type)}}class W3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=k3(n.type)}}class q3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const f=s[l];f.setValue(t,n[f.id],a)}}}const Rp=/(\w+)(\])?(\[|\.)?/g;function oS(o,t){o.seq.push(t),o.map[t.id]=t}function j3(o,t,n){const a=o.name,s=a.length;for(Rp.lastIndex=0;;){const l=Rp.exec(a),u=Rp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&u+2===s){oS(n,d===void 0?new X3(f,o,t):new W3(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new q3(f),oS(n,v)),n=v}}}class df{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const f=t.getActiveUniform(n,u),p=t.getUniformLocation(n,f.name);j3(f,p,this)}const s=[],l=[];for(const u of this.seq)u.type===t.SAMPLER_2D_SHADOW||u.type===t.SAMPLER_CUBE_SHADOW||u.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(t,n,a,s){const l=this.map[n];l!==void 0&&l.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let l=0,u=n.length;l!==u;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,l=t.length;s!==l;++s){const u=t[s];u.id in n&&a.push(u)}return a}}function lS(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const Y3=37297;let Z3=0;function K3(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=s;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}const cS=new ce;function Q3(o){be._getMatrix(cS,be.workingColorSpace,o);const t=`mat3( ${cS.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(o)){case Sf:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function uS(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),l=(o.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+K3(o.getShaderSource(t),f)}else return l}function J3(o,t){const n=Q3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const $3={[BS]:"Linear",[IS]:"Reinhard",[GS]:"Cineon",[HS]:"ACESFilmic",[kS]:"AgX",[XS]:"Neutral",[VS]:"Custom"};function tR(o,t){const n=$3[t];return n===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const sf=new rt;function eR(){be.getLuminanceCoefficients(sf);const o=sf.x.toFixed(4),t=sf.y.toFixed(4),n=sf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ic).join(`
`)}function iR(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function aR(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=o.getActiveAttrib(t,s),u=l.name;let f=1;l.type===o.FLOAT_MAT2&&(f=2),l.type===o.FLOAT_MAT3&&(f=3),l.type===o.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:o.getAttribLocation(t,u),locationSize:f}}return n}function ic(o){return o!==""}function fS(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hS(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dm(o){return o.replace(rR,oR)}const sR=new Map;function oR(o,t){let n=me[t];if(n===void 0){const a=sR.get(t);if(a!==void 0)n=me[a],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Dm(n)}const lR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dS(o){return o.replace(lR,cR)}function cR(o,t,n,a){let s="";for(let l=parseInt(t);l<parseInt(n);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function pS(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const uR={[lf]:"SHADOWMAP_TYPE_PCF",[ec]:"SHADOWMAP_TYPE_VSM"};function fR(o){return uR[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hR={[Ps]:"ENVMAP_TYPE_CUBE",[ko]:"ENVMAP_TYPE_CUBE",[Uf]:"ENVMAP_TYPE_CUBE_UV"};function dR(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":hR[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const pR={[ko]:"ENVMAP_MODE_REFRACTION"};function mR(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":pR[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _R={[zS]:"ENVMAP_BLENDING_MULTIPLY",[$E]:"ENVMAP_BLENDING_MIX",[tb]:"ENVMAP_BLENDING_ADD"};function gR(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_R[o.combine]||"ENVMAP_BLENDING_NONE"}function vR(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function xR(o,t,n,a){const s=o.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const p=fR(n),d=dR(n),_=mR(n),v=gR(n),g=vR(n),x=nR(n),M=iR(l),E=s.createProgram();let y,S,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ic).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(ic).join(`
`),S.length>0&&(S+=`
`)):(y=[pS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ic).join(`
`),S=[pS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ea?"#define TONE_MAPPING":"",n.toneMapping!==Ea?me.tonemapping_pars_fragment:"",n.toneMapping!==Ea?tR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,J3("linearToOutputTexel",n.outputColorSpace),eR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ic).join(`
`)),u=Dm(u),u=fS(u,n),u=hS(u,n),f=Dm(f),f=fS(f,n),f=hS(f,n),u=dS(u),f=dS(f),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",n.glslVersion===Mx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=A+y+u,D=A+S+f,P=lS(s,s.VERTEX_SHADER,w),N=lS(s,s.FRAGMENT_SHADER,D);s.attachShader(E,P),s.attachShader(E,N),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function O(B){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(E)||"",$=s.getShaderInfoLog(P)||"",lt=s.getShaderInfoLog(N)||"",X=W.trim(),z=$.trim(),G=lt.trim();let tt=!0,ht=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(tt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,P,N);else{const vt=uS(s,P,"vertex"),I=uS(s,N,"fragment");we("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+X+`
`+vt+`
`+I)}else X!==""?re("WebGLProgram: Program Info Log:",X):(z===""||G==="")&&(ht=!1);ht&&(B.diagnostics={runnable:tt,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:S}})}s.deleteShader(P),s.deleteShader(N),T=new df(s,E),L=aR(s,E)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(E,Y3)),k},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Z3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=P,this.fragmentShader=N,this}let SR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(s)===!1&&(u.add(s),s.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new MR(t),n.set(t,a)),a}}class MR{constructor(t){this.id=SR++,this.code=t,this.usedTimes=0}}function ER(o){return o===Fs||o===gf||o===vf}function bR(o,t,n,a,s,l){const u=new ey,f=new yR,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,L,k,B,W,$){const lt=B.fog,X=W.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,tt=t.get(T.envMap||z,G),ht=tt&&tt.mapping===Uf?tt.image.height:null,vt=x[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&re("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,K=I!==void 0?I.length:0;let St=0;X.morphAttributes.position!==void 0&&(St=1),X.morphAttributes.normal!==void 0&&(St=2),X.morphAttributes.color!==void 0&&(St=3);let yt,At,ct,Mt;if(vt){const ae=va[vt];yt=ae.vertexShader,At=ae.fragmentShader}else yt=T.vertexShader,At=T.fragmentShader,f.update(T),ct=f.getVertexShaderID(T),Mt=f.getFragmentShaderID(T);const Tt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),ne=W.isInstancedMesh===!0,Jt=W.isBatchedMesh===!0,Fe=!!T.map,ue=!!T.matcap,Ut=!!tt,ee=!!T.aoMap,Kt=!!T.lightMap,_e=!!T.bumpMap,Re=!!T.normalMap,Ie=!!T.displacementMap,Y=!!T.emissiveMap,tn=!!T.metalnessMap,pe=!!T.roughnessMap,Ce=T.anisotropy>0,Rt=T.clearcoat>0,$e=T.dispersion>0,F=T.iridescence>0,R=T.sheen>0,J=T.transmission>0,gt=Ce&&!!T.anisotropyMap,bt=Rt&&!!T.clearcoatMap,wt=Rt&&!!T.clearcoatNormalMap,Ot=Rt&&!!T.clearcoatRoughnessMap,ft=F&&!!T.iridescenceMap,dt=F&&!!T.iridescenceThicknessMap,Pt=R&&!!T.sheenColorMap,Ft=R&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Dt=!!T.specularColorMap,se=!!T.specularIntensityMap,oe=J&&!!T.transmissionMap,ge=J&&!!T.thicknessMap,q=!!T.gradientMap,Ct=!!T.alphaMap,mt=T.alphaTest>0,It=!!T.alphaHash,Lt=!!T.extensions;let Et=Ea;T.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Et=o.toneMapping);const Yt={shaderID:vt,shaderType:T.type,shaderName:T.name,vertexShader:yt,fragmentShader:At,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Mt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Jt,batchingColor:Jt&&W._colorsTexture!==null,instancing:ne,instancingColor:ne&&W.instanceColor!==null,instancingMorph:ne&&W.morphTexture!==null,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:be.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Fe,matcap:ue,envMap:Ut,envMapMode:Ut&&tt.mapping,envMapCubeUVHeight:ht,aoMap:ee,lightMap:Kt,bumpMap:_e,normalMap:Re,displacementMap:Ie,emissiveMap:Y,normalMapObjectSpace:Re&&T.normalMapType===ib,normalMapTangentSpace:Re&&T.normalMapType===xx,packedNormalMap:Re&&T.normalMapType===xx&&ER(T.normalMap.format),metalnessMap:tn,roughnessMap:pe,anisotropy:Ce,anisotropyMap:gt,clearcoat:Rt,clearcoatMap:bt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Ot,dispersion:$e,iridescence:F,iridescenceMap:ft,iridescenceThicknessMap:dt,sheen:R,sheenColorMap:Pt,sheenRoughnessMap:Ft,specularMap:Nt,specularColorMap:Dt,specularIntensityMap:se,transmission:J,transmissionMap:oe,thicknessMap:ge,gradientMap:q,opaque:T.transparent===!1&&T.blending===zo&&T.alphaToCoverage===!1,alphaMap:Ct,alphaTest:mt,alphaHash:It,combine:T.combine,mapUv:Fe&&M(T.map.channel),aoMapUv:ee&&M(T.aoMap.channel),lightMapUv:Kt&&M(T.lightMap.channel),bumpMapUv:_e&&M(T.bumpMap.channel),normalMapUv:Re&&M(T.normalMap.channel),displacementMapUv:Ie&&M(T.displacementMap.channel),emissiveMapUv:Y&&M(T.emissiveMap.channel),metalnessMapUv:tn&&M(T.metalnessMap.channel),roughnessMapUv:pe&&M(T.roughnessMap.channel),anisotropyMapUv:gt&&M(T.anisotropyMap.channel),clearcoatMapUv:bt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&M(T.sheenRoughnessMap.channel),specularMapUv:Nt&&M(T.specularMap.channel),specularColorMapUv:Dt&&M(T.specularColorMap.channel),specularIntensityMapUv:se&&M(T.specularIntensityMap.channel),transmissionMapUv:oe&&M(T.transmissionMap.channel),thicknessMapUv:ge&&M(T.thicknessMap.channel),alphaMapUv:Ct&&M(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Re||Ce),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!X.attributes.uv&&(Fe||Ct),fog:!!lt,useFog:T.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Re===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:W.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:St,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&k.length>0,shadowMapType:o.shadowMap.type,toneMapping:Et,decodeVideoTexture:Fe&&T.map.isVideoTexture===!0&&be.getTransfer(T.map.colorSpace)===We,decodeVideoTextureEmissive:Y&&T.emissiveMap.isVideoTexture===!0&&be.getTransfer(T.emissiveMap.colorSpace)===We,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ja,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Lt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Lt&&T.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Yt.vertexUv1s=p.has(1),Yt.vertexUv2s=p.has(2),Yt.vertexUv3s=p.has(3),p.clear(),Yt}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)L.push(k),L.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(L,T),A(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function A(T,L){u.disableAll(),L.instancing&&u.enable(0),L.instancingColor&&u.enable(1),L.instancingMorph&&u.enable(2),L.matcap&&u.enable(3),L.envMap&&u.enable(4),L.normalMapObjectSpace&&u.enable(5),L.normalMapTangentSpace&&u.enable(6),L.clearcoat&&u.enable(7),L.iridescence&&u.enable(8),L.alphaTest&&u.enable(9),L.vertexColors&&u.enable(10),L.vertexAlphas&&u.enable(11),L.vertexUv1s&&u.enable(12),L.vertexUv2s&&u.enable(13),L.vertexUv3s&&u.enable(14),L.vertexTangents&&u.enable(15),L.anisotropy&&u.enable(16),L.alphaHash&&u.enable(17),L.batching&&u.enable(18),L.dispersion&&u.enable(19),L.batchingColor&&u.enable(20),L.gradientMap&&u.enable(21),L.packedNormalMap&&u.enable(22),L.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),L.fog&&u.enable(0),L.useFog&&u.enable(1),L.flatShading&&u.enable(2),L.logarithmicDepthBuffer&&u.enable(3),L.reversedDepthBuffer&&u.enable(4),L.skinning&&u.enable(5),L.morphTargets&&u.enable(6),L.morphNormals&&u.enable(7),L.morphColors&&u.enable(8),L.premultipliedAlpha&&u.enable(9),L.shadowMapEnabled&&u.enable(10),L.doubleSided&&u.enable(11),L.flipSided&&u.enable(12),L.useDepthPacking&&u.enable(13),L.dithering&&u.enable(14),L.transmission&&u.enable(15),L.sheen&&u.enable(16),L.opaque&&u.enable(17),L.pointsUvs&&u.enable(18),L.decodeVideoTexture&&u.enable(19),L.decodeVideoTextureEmissive&&u.enable(20),L.alphaToCoverage&&u.enable(21),L.numLightProbeGrids>0&&u.enable(22),T.push(u.mask)}function w(T){const L=x[T.type];let k;if(L){const B=va[L];k=Hb.clone(B.uniforms)}else k=T.uniforms;return k}function D(T,L){let k=_.get(L);return k!==void 0?++k.usedTimes:(k=new xR(o,L,T,s),d.push(k),_.set(L,k)),k}function P(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){f.remove(T)}function O(){f.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:w,acquireProgram:D,releaseProgram:P,releaseShaderCache:N,programs:d,dispose:O}}function TR(){let o=new WeakMap;function t(u){return o.has(u)}function n(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function a(u){o.delete(u)}function s(u,f,p){o.get(u)[f]=p}function l(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:l}}function AR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function mS(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function _S(){const o=[];let t=0;const n=[],a=[],s=[];function l(){t=0,n.length=0,a.length=0,s.length=0}function u(g){let x=0;return g.isInstancedMesh&&(x+=2),g.isSkinnedMesh&&(x+=1),x}function f(g,x,M,E,y,S){let A=o[t];return A===void 0?(A={id:g.id,object:g,geometry:x,material:M,materialVariant:u(g),groupOrder:E,renderOrder:g.renderOrder,z:y,group:S},o[t]=A):(A.id=g.id,A.object=g,A.geometry=x,A.material=M,A.materialVariant=u(g),A.groupOrder=E,A.renderOrder=g.renderOrder,A.z=y,A.group=S),t++,A}function p(g,x,M,E,y,S){const A=f(g,x,M,E,y,S);M.transmission>0?a.push(A):M.transparent===!0?s.push(A):n.push(A)}function d(g,x,M,E,y,S){const A=f(g,x,M,E,y,S);M.transmission>0?a.unshift(A):M.transparent===!0?s.unshift(A):n.unshift(A)}function _(g,x){n.length>1&&n.sort(g||AR),a.length>1&&a.sort(x||mS),s.length>1&&s.sort(x||mS)}function v(){for(let g=t,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:s,init:l,push:p,unshift:d,finish:v,sort:_}}function RR(){let o=new WeakMap;function t(a,s){const l=o.get(a);let u;return l===void 0?(u=new _S,o.set(a,[u])):s>=l.length?(u=new _S,l.push(u)):u=l[s],u}function n(){o=new WeakMap}return{get:t,dispose:n}}function CR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new rt,color:new De};break;case"SpotLight":n={position:new rt,direction:new rt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new rt,color:new De,distance:0,decay:0};break;case"HemisphereLight":n={direction:new rt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":n={color:new De,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[t.id]=n,n}}}function wR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let DR=0;function UR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function NR(o){const t=new CR,n=wR(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new rt);const s=new rt,l=new _n,u=new _n;function f(d){let _=0,v=0,g=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let x=0,M=0,E=0,y=0,S=0,A=0,w=0,D=0,P=0,N=0,O=0;d.sort(UR);for(let L=0,k=d.length;L<k;L++){const B=d[L],W=B.color,$=B.intensity,lt=B.distance;let X=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Fs?X=B.shadow.map.texture:X=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)_+=W.r*$,v+=W.g*$,g+=W.b*$;else if(B.isLightProbe){for(let z=0;z<9;z++)a.probe[z].addScaledVector(B.sh.coefficients[z],$);O++}else if(B.isDirectionalLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const G=B.shadow,tt=n.get(B);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,a.directionalShadow[x]=tt,a.directionalShadowMap[x]=X,a.directionalShadowMatrix[x]=B.shadow.matrix,A++}a.directional[x]=z,x++}else if(B.isSpotLight){const z=t.get(B);z.position.setFromMatrixPosition(B.matrixWorld),z.color.copy(W).multiplyScalar($),z.distance=lt,z.coneCos=Math.cos(B.angle),z.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),z.decay=B.decay,a.spot[E]=z;const G=B.shadow;if(B.map&&(a.spotLightMap[P]=B.map,P++,G.updateMatrices(B),B.castShadow&&N++),a.spotLightMatrix[E]=G.matrix,B.castShadow){const tt=n.get(B);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,a.spotShadow[E]=tt,a.spotShadowMap[E]=X,D++}E++}else if(B.isRectAreaLight){const z=t.get(B);z.color.copy(W).multiplyScalar($),z.halfWidth.set(B.width*.5,0,0),z.halfHeight.set(0,B.height*.5,0),a.rectArea[y]=z,y++}else if(B.isPointLight){const z=t.get(B);if(z.color.copy(B.color).multiplyScalar(B.intensity),z.distance=B.distance,z.decay=B.decay,B.castShadow){const G=B.shadow,tt=n.get(B);tt.shadowIntensity=G.intensity,tt.shadowBias=G.bias,tt.shadowNormalBias=G.normalBias,tt.shadowRadius=G.radius,tt.shadowMapSize=G.mapSize,tt.shadowCameraNear=G.camera.near,tt.shadowCameraFar=G.camera.far,a.pointShadow[M]=tt,a.pointShadowMap[M]=X,a.pointShadowMatrix[M]=B.shadow.matrix,w++}a.point[M]=z,M++}else if(B.isHemisphereLight){const z=t.get(B);z.skyColor.copy(B.color).multiplyScalar($),z.groundColor.copy(B.groundColor).multiplyScalar($),a.hemi[S]=z,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Gt.LTC_FLOAT_1,a.rectAreaLTC2=Gt.LTC_FLOAT_2):(a.rectAreaLTC1=Gt.LTC_HALF_1,a.rectAreaLTC2=Gt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==x||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==A||T.numPointShadows!==w||T.numSpotShadows!==D||T.numSpotMaps!==P||T.numLightProbes!==O)&&(a.directional.length=x,a.spot.length=E,a.rectArea.length=y,a.point.length=M,a.hemi.length=S,a.directionalShadow.length=A,a.directionalShadowMap.length=A,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=D,a.spotShadowMap.length=D,a.directionalShadowMatrix.length=A,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=D+P-N,a.spotLightMap.length=P,a.numSpotLightShadowsWithMaps=N,a.numLightProbes=O,T.directionalLength=x,T.pointLength=M,T.spotLength=E,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=A,T.numPointShadows=w,T.numSpotShadows=D,T.numSpotMaps=P,T.numLightProbes=O,a.version=DR++)}function p(d,_){let v=0,g=0,x=0,M=0,E=0;const y=_.matrixWorldInverse;for(let S=0,A=d.length;S<A;S++){const w=d[S];if(w.isDirectionalLight){const D=a.directional[v];D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),v++}else if(w.isSpotLight){const D=a.spot[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(y),x++}else if(w.isRectAreaLight){const D=a.rectArea[M];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),u.identity(),l.copy(w.matrixWorld),l.premultiply(y),u.extractRotation(l),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),M++}else if(w.isPointLight){const D=a.point[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(y),g++}else if(w.isHemisphereLight){const D=a.hemi[E];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(y),E++}}}return{setup:f,setupView:p,state:a}}function gS(o){const t=new NR(o),n=[],a=[],s=[];function l(g){v.camera=g,n.length=0,a.length=0,s.length=0}function u(g){n.push(g)}function f(g){a.push(g)}function p(g){s.push(g)}function d(){t.setup(n)}function _(g){t.setupView(n,g)}const v={lightsArray:n,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:_,pushLight:u,pushShadow:f,pushLightProbeGrid:p}}function LR(o){let t=new WeakMap;function n(s,l=0){const u=t.get(s);let f;return u===void 0?(f=new gS(o),t.set(s,[f])):l>=u.length?(f=new gS(o),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const OR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,FR=[new rt(1,0,0),new rt(-1,0,0),new rt(0,1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1)],zR=[new rt(0,-1,0),new rt(0,-1,0),new rt(0,0,1),new rt(0,0,-1),new rt(0,-1,0),new rt(0,-1,0)],vS=new _n,$l=new rt,Cp=new rt;function BR(o,t,n){let a=new n0;const s=new Be,l=new Be,u=new pn,f=new Wb,p=new qb,d={},_=n.maxTextureSize,v={[Yr]:ti,[ti]:Yr,[Ja]:Ja},g=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:OR,fragmentShader:PR}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const M=new Qi;M.setAttribute("position",new la(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ca(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lf;let S=this.type;this.render=function(N,O,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===OE&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lf);const L=o.getRenderTarget(),k=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),W=o.state;W.setBlending(tr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const $=S!==this.type;$&&O.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(X=>X.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,X=N.length;lt<X;lt++){const z=N[lt],G=z.shadow;if(G===void 0){re("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const tt=G.getFrameExtents();s.multiply(tt),l.copy(G.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(l.x=Math.floor(_/tt.x),s.x=l.x*tt.x,G.mapSize.x=l.x),s.y>_&&(l.y=Math.floor(_/tt.y),s.y=l.y*tt.y,G.mapSize.y=l.y));const ht=o.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ht,G.map===null||$===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ec){if(z.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ba(s.x,s.y,{format:Fs,type:nr,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new Xo(s.x,s.y,Sa),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=ir,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn}else z.isPointLight?(G.map=new my(s.x),G.map.depthTexture=new Ib(s.x,Ta)):(G.map=new ba(s.x,s.y),G.map.depthTexture=new Xo(s.x,s.y,Ta)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=ir,this.type===lf?(G.map.depthTexture.compareFunction=ht?t0:$m,G.map.depthTexture.minFilter=Zn,G.map.depthTexture.magFilter=Zn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn);G.camera.updateProjectionMatrix()}const vt=G.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<vt;I++){if(G.map.isWebGLCubeRenderTarget)o.setRenderTarget(G.map,I),o.clear();else{I===0&&(o.setRenderTarget(G.map),o.clear());const K=G.getViewport(I);u.set(l.x*K.x,l.y*K.y,l.x*K.z,l.y*K.w),W.viewport(u)}if(z.isPointLight){const K=G.camera,St=G.matrix,yt=z.distance||K.far;yt!==K.far&&(K.far=yt,K.updateProjectionMatrix()),$l.setFromMatrixPosition(z.matrixWorld),K.position.copy($l),Cp.copy(K.position),Cp.add(FR[I]),K.up.copy(zR[I]),K.lookAt(Cp),K.updateMatrixWorld(),St.makeTranslation(-$l.x,-$l.y,-$l.z),vS.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),G._frustum.setFromProjectionMatrix(vS,K.coordinateSystem,K.reversedDepth)}else G.updateMatrices(z);a=G.getFrustum(),D(O,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===ec&&A(G,T),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(L,k,B)};function A(N,O){const T=t.update(E);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ba(s.x,s.y,{format:Fs,type:nr})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(O,null,T,g,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(O,null,T,x,E,null)}function w(N,O,T,L){let k=null;const B=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)k=B;else if(k=T.isPointLight===!0?p:f,o.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const W=k.uuid,$=O.uuid;let lt=d[W];lt===void 0&&(lt={},d[W]=lt);let X=lt[$];X===void 0&&(X=k.clone(),lt[$]=X,O.addEventListener("dispose",P)),k=X}if(k.visible=O.visible,k.wireframe=O.wireframe,L===ec?k.side=O.shadowSide!==null?O.shadowSide:O.side:k.side=O.shadowSide!==null?O.shadowSide:v[O.side],k.alphaMap=O.alphaMap,k.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,k.map=O.map,k.clipShadows=O.clipShadows,k.clippingPlanes=O.clippingPlanes,k.clipIntersection=O.clipIntersection,k.displacementMap=O.displacementMap,k.displacementScale=O.displacementScale,k.displacementBias=O.displacementBias,k.wireframeLinewidth=O.wireframeLinewidth,k.linewidth=O.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const W=o.properties.get(k);W.light=T}return k}function D(N,O,T,L,k){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&k===ec)&&(!N.frustumCulled||a.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const $=t.update(N),lt=N.material;if(Array.isArray(lt)){const X=$.groups;for(let z=0,G=X.length;z<G;z++){const tt=X[z],ht=lt[tt.materialIndex];if(ht&&ht.visible){const vt=w(N,ht,L,k);N.onBeforeShadow(o,N,O,T,$,vt,tt),o.renderBufferDirect(T,null,$,vt,N,tt),N.onAfterShadow(o,N,O,T,$,vt,tt)}}}else if(lt.visible){const X=w(N,lt,L,k);N.onBeforeShadow(o,N,O,T,$,X,null),o.renderBufferDirect(T,null,$,X,N,null),N.onAfterShadow(o,N,O,T,$,X,null)}}const W=N.children;for(let $=0,lt=W.length;$<lt;$++)D(W[$],O,T,L,k)}function P(N){N.target.removeEventListener("dispose",P);for(const T in d){const L=d[T],k=N.target.uuid;k in L&&(L[k].dispose(),delete L[k])}}}function IR(o,t){function n(){let q=!1;const Ct=new pn;let mt=null;const It=new pn(0,0,0,0);return{setMask:function(Lt){mt!==Lt&&!q&&(o.colorMask(Lt,Lt,Lt,Lt),mt=Lt)},setLocked:function(Lt){q=Lt},setClear:function(Lt,Et,Yt,ae,ln){ln===!0&&(Lt*=ae,Et*=ae,Yt*=ae),Ct.set(Lt,Et,Yt,ae),It.equals(Ct)===!1&&(o.clearColor(Lt,Et,Yt,ae),It.copy(Ct))},reset:function(){q=!1,mt=null,It.set(-1,0,0,0)}}}function a(){let q=!1,Ct=!1,mt=null,It=null,Lt=null;return{setReversed:function(Et){if(Ct!==Et){const Yt=t.get("EXT_clip_control");Et?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Ct=Et;const ae=Lt;Lt=null,this.setClear(ae)}},getReversed:function(){return Ct},setTest:function(Et){Et?Tt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(Et){mt!==Et&&!q&&(o.depthMask(Et),mt=Et)},setFunc:function(Et){if(Ct&&(Et=db[Et]),It!==Et){switch(Et){case Hp:o.depthFunc(o.NEVER);break;case Vp:o.depthFunc(o.ALWAYS);break;case kp:o.depthFunc(o.LESS);break;case Vo:o.depthFunc(o.LEQUAL);break;case Xp:o.depthFunc(o.EQUAL);break;case Wp:o.depthFunc(o.GEQUAL);break;case qp:o.depthFunc(o.GREATER);break;case jp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}It=Et}},setLocked:function(Et){q=Et},setClear:function(Et){Lt!==Et&&(Lt=Et,Ct&&(Et=1-Et),o.clearDepth(Et))},reset:function(){q=!1,mt=null,It=null,Lt=null,Ct=!1}}}function s(){let q=!1,Ct=null,mt=null,It=null,Lt=null,Et=null,Yt=null,ae=null,ln=null;return{setTest:function(Oe){q||(Oe?Tt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(Oe){Ct!==Oe&&!q&&(o.stencilMask(Oe),Ct=Oe)},setFunc:function(Oe,Pi,pi){(mt!==Oe||It!==Pi||Lt!==pi)&&(o.stencilFunc(Oe,Pi,pi),mt=Oe,It=Pi,Lt=pi)},setOp:function(Oe,Pi,pi){(Et!==Oe||Yt!==Pi||ae!==pi)&&(o.stencilOp(Oe,Pi,pi),Et=Oe,Yt=Pi,ae=pi)},setLocked:function(Oe){q=Oe},setClear:function(Oe){ln!==Oe&&(o.clearStencil(Oe),ln=Oe)},reset:function(){q=!1,Ct=null,mt=null,It=null,Lt=null,Et=null,Yt=null,ae=null,ln=null}}}const l=new n,u=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},v={},g={},x=new WeakMap,M=[],E=null,y=!1,S=null,A=null,w=null,D=null,P=null,N=null,O=null,T=new De(0,0,0),L=0,k=!1,B=null,W=null,$=null,lt=null,X=null;const z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,tt=0;const ht=o.getParameter(o.VERSION);ht.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(ht)[1]),G=tt>=1):ht.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(ht)[1]),G=tt>=2);let vt=null,I={};const K=o.getParameter(o.SCISSOR_BOX),St=o.getParameter(o.VIEWPORT),yt=new pn().fromArray(K),At=new pn().fromArray(St);function ct(q,Ct,mt,It){const Lt=new Uint8Array(4),Et=o.createTexture();o.bindTexture(q,Et),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Yt=0;Yt<mt;Yt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,It,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(Ct+Yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Et}const Mt={};Mt[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Mt[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Mt[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Tt(o.DEPTH_TEST),u.setFunc(Vo),_e(!1),Re(_x),Tt(o.CULL_FACE),ee(tr);function Tt(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function Ht(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function ne(q,Ct){return g[q]!==Ct?(o.bindFramebuffer(q,Ct),g[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Jt(q,Ct){let mt=M,It=!1;if(q){mt=x.get(Ct),mt===void 0&&(mt=[],x.set(Ct,mt));const Lt=q.textures;if(mt.length!==Lt.length||mt[0]!==o.COLOR_ATTACHMENT0){for(let Et=0,Yt=Lt.length;Et<Yt;Et++)mt[Et]=o.COLOR_ATTACHMENT0+Et;mt.length=Lt.length,It=!0}}else mt[0]!==o.BACK&&(mt[0]=o.BACK,It=!0);It&&o.drawBuffers(mt)}function Fe(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const ue={[As]:o.FUNC_ADD,[FE]:o.FUNC_SUBTRACT,[zE]:o.FUNC_REVERSE_SUBTRACT};ue[BE]=o.MIN,ue[IE]=o.MAX;const Ut={[GE]:o.ZERO,[HE]:o.ONE,[VE]:o.SRC_COLOR,[Ip]:o.SRC_ALPHA,[YE]:o.SRC_ALPHA_SATURATE,[qE]:o.DST_COLOR,[XE]:o.DST_ALPHA,[kE]:o.ONE_MINUS_SRC_COLOR,[Gp]:o.ONE_MINUS_SRC_ALPHA,[jE]:o.ONE_MINUS_DST_COLOR,[WE]:o.ONE_MINUS_DST_ALPHA,[ZE]:o.CONSTANT_COLOR,[KE]:o.ONE_MINUS_CONSTANT_COLOR,[QE]:o.CONSTANT_ALPHA,[JE]:o.ONE_MINUS_CONSTANT_ALPHA};function ee(q,Ct,mt,It,Lt,Et,Yt,ae,ln,Oe){if(q===tr){y===!0&&(Ht(o.BLEND),y=!1);return}if(y===!1&&(Tt(o.BLEND),y=!0),q!==PE){if(q!==S||Oe!==k){if((A!==As||P!==As)&&(o.blendEquation(o.FUNC_ADD),A=As,P=As),Oe)switch(q){case zo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bp:o.blendFunc(o.ONE,o.ONE);break;case gx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:we("WebGLState: Invalid blending: ",q);break}else switch(q){case zo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Bp:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case gx:we("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vx:we("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:we("WebGLState: Invalid blending: ",q);break}w=null,D=null,N=null,O=null,T.set(0,0,0),L=0,S=q,k=Oe}return}Lt=Lt||Ct,Et=Et||mt,Yt=Yt||It,(Ct!==A||Lt!==P)&&(o.blendEquationSeparate(ue[Ct],ue[Lt]),A=Ct,P=Lt),(mt!==w||It!==D||Et!==N||Yt!==O)&&(o.blendFuncSeparate(Ut[mt],Ut[It],Ut[Et],Ut[Yt]),w=mt,D=It,N=Et,O=Yt),(ae.equals(T)===!1||ln!==L)&&(o.blendColor(ae.r,ae.g,ae.b,ln),T.copy(ae),L=ln),S=q,k=!1}function Kt(q,Ct){q.side===Ja?Ht(o.CULL_FACE):Tt(o.CULL_FACE);let mt=q.side===ti;Ct&&(mt=!mt),_e(mt),q.blending===zo&&q.transparent===!1?ee(tr):ee(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const It=q.stencilWrite;f.setTest(It),It&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Y(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Tt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function _e(q){B!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),B=q)}function Re(q){q!==NE?(Tt(o.CULL_FACE),q!==W&&(q===_x?o.cullFace(o.BACK):q===LE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),W=q}function Ie(q){q!==$&&(G&&o.lineWidth(q),$=q)}function Y(q,Ct,mt){q?(Tt(o.POLYGON_OFFSET_FILL),(lt!==Ct||X!==mt)&&(lt=Ct,X=mt,u.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,mt))):Ht(o.POLYGON_OFFSET_FILL)}function tn(q){q?Tt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function pe(q){q===void 0&&(q=o.TEXTURE0+z-1),vt!==q&&(o.activeTexture(q),vt=q)}function Ce(q,Ct,mt){mt===void 0&&(vt===null?mt=o.TEXTURE0+z-1:mt=vt);let It=I[mt];It===void 0&&(It={type:void 0,texture:void 0},I[mt]=It),(It.type!==q||It.texture!==Ct)&&(vt!==mt&&(o.activeTexture(mt),vt=mt),o.bindTexture(q,Ct||Mt[q]),It.type=q,It.texture=Ct)}function Rt(){const q=I[vt];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function $e(){try{o.compressedTexImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function F(){try{o.compressedTexImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function R(){try{o.texSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function J(){try{o.texSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function bt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function wt(){try{o.texStorage2D(...arguments)}catch(q){we("WebGLState:",q)}}function Ot(){try{o.texStorage3D(...arguments)}catch(q){we("WebGLState:",q)}}function ft(){try{o.texImage2D(...arguments)}catch(q){we("WebGLState:",q)}}function dt(){try{o.texImage3D(...arguments)}catch(q){we("WebGLState:",q)}}function Pt(q){return v[q]!==void 0?v[q]:o.getParameter(q)}function Ft(q,Ct){v[q]!==Ct&&(o.pixelStorei(q,Ct),v[q]=Ct)}function Nt(q){yt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),yt.copy(q))}function Dt(q){At.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),At.copy(q))}function se(q,Ct){let mt=d.get(Ct);mt===void 0&&(mt=new WeakMap,d.set(Ct,mt));let It=mt.get(q);It===void 0&&(It=o.getUniformBlockIndex(Ct,q.name),mt.set(q,It))}function oe(q,Ct){const It=d.get(Ct).get(q);p.get(Ct)!==It&&(o.uniformBlockBinding(Ct,It,q.__bindingPointIndex),p.set(Ct,It))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),u.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),_={},v={},vt=null,I={},g={},x=new WeakMap,M=[],E=null,y=!1,S=null,A=null,w=null,D=null,P=null,N=null,O=null,T=new De(0,0,0),L=0,k=!1,B=null,W=null,$=null,lt=null,X=null,yt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Tt,disable:Ht,bindFramebuffer:ne,drawBuffers:Jt,useProgram:Fe,setBlending:ee,setMaterial:Kt,setFlipSided:_e,setCullFace:Re,setLineWidth:Ie,setPolygonOffset:Y,setScissorTest:tn,activeTexture:pe,bindTexture:Ce,unbindTexture:Rt,compressedTexImage2D:$e,compressedTexImage3D:F,texImage2D:ft,texImage3D:dt,pixelStorei:Ft,getParameter:Pt,updateUBOMapping:se,uniformBlockBinding:oe,texStorage2D:wt,texStorage3D:Ot,texSubImage2D:R,texSubImage3D:J,compressedTexSubImage2D:gt,compressedTexSubImage3D:bt,scissor:Nt,viewport:Dt,reset:ge}}function GR(o,t,n,a,s,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Be,_=new WeakMap,v=new Set;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,R){return M?new OffscreenCanvas(F,R):hc("canvas")}function y(F,R,J){let gt=1;const bt=$e(F);if((bt.width>J||bt.height>J)&&(gt=J/Math.max(bt.width,bt.height)),gt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const wt=Math.floor(gt*bt.width),Ot=Math.floor(gt*bt.height);g===void 0&&(g=E(wt,Ot));const ft=R?E(wt,Ot):g;return ft.width=wt,ft.height=Ot,ft.getContext("2d").drawImage(F,0,0,wt,Ot),re("WebGLRenderer: Texture has been resized from ("+bt.width+"x"+bt.height+") to ("+wt+"x"+Ot+")."),ft}else return"data"in F&&re("WebGLRenderer: Image in DataTexture is too big ("+bt.width+"x"+bt.height+")."),F;return F}function S(F){return F.generateMipmaps}function A(F){o.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(F,R,J,gt,bt,wt=!1){if(F!==null){if(o[F]!==void 0)return o[F];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ot;gt&&(Ot=t.get("EXT_texture_norm16"),Ot||re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=R;if(R===o.RED&&(J===o.FLOAT&&(ft=o.R32F),J===o.HALF_FLOAT&&(ft=o.R16F),J===o.UNSIGNED_BYTE&&(ft=o.R8),J===o.UNSIGNED_SHORT&&Ot&&(ft=Ot.R16_EXT),J===o.SHORT&&Ot&&(ft=Ot.R16_SNORM_EXT)),R===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ft=o.R8UI),J===o.UNSIGNED_SHORT&&(ft=o.R16UI),J===o.UNSIGNED_INT&&(ft=o.R32UI),J===o.BYTE&&(ft=o.R8I),J===o.SHORT&&(ft=o.R16I),J===o.INT&&(ft=o.R32I)),R===o.RG&&(J===o.FLOAT&&(ft=o.RG32F),J===o.HALF_FLOAT&&(ft=o.RG16F),J===o.UNSIGNED_BYTE&&(ft=o.RG8),J===o.UNSIGNED_SHORT&&Ot&&(ft=Ot.RG16_EXT),J===o.SHORT&&Ot&&(ft=Ot.RG16_SNORM_EXT)),R===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ft=o.RG8UI),J===o.UNSIGNED_SHORT&&(ft=o.RG16UI),J===o.UNSIGNED_INT&&(ft=o.RG32UI),J===o.BYTE&&(ft=o.RG8I),J===o.SHORT&&(ft=o.RG16I),J===o.INT&&(ft=o.RG32I)),R===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),J===o.UNSIGNED_INT&&(ft=o.RGB32UI),J===o.BYTE&&(ft=o.RGB8I),J===o.SHORT&&(ft=o.RGB16I),J===o.INT&&(ft=o.RGB32I)),R===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),J===o.UNSIGNED_INT&&(ft=o.RGBA32UI),J===o.BYTE&&(ft=o.RGBA8I),J===o.SHORT&&(ft=o.RGBA16I),J===o.INT&&(ft=o.RGBA32I)),R===o.RGB&&(J===o.UNSIGNED_SHORT&&Ot&&(ft=Ot.RGB16_EXT),J===o.SHORT&&Ot&&(ft=Ot.RGB16_SNORM_EXT),J===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),R===o.RGBA){const dt=wt?Sf:be.getTransfer(bt);J===o.FLOAT&&(ft=o.RGBA32F),J===o.HALF_FLOAT&&(ft=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ft=dt===We?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT&&Ot&&(ft=Ot.RGBA16_EXT),J===o.SHORT&&Ot&&(ft=Ot.RGBA16_SNORM_EXT),J===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function P(F,R){let J;return F?R===null||R===Ta||R===uc?J=o.DEPTH24_STENCIL8:R===Sa?J=o.DEPTH32F_STENCIL8:R===cc&&(J=o.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Ta||R===uc?J=o.DEPTH_COMPONENT24:R===Sa?J=o.DEPTH_COMPONENT32F:R===cc&&(J=o.DEPTH_COMPONENT16),J}function N(F,R){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Gn&&F.minFilter!==Zn?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function O(F){const R=F.target;R.removeEventListener("dispose",O),L(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&v.delete(R)}function T(F){const R=F.target;R.removeEventListener("dispose",T),B(R)}function L(F){const R=a.get(F);if(R.__webglInit===void 0)return;const J=F.source,gt=x.get(J);if(gt){const bt=gt[R.__cacheKey];bt.usedTimes--,bt.usedTimes===0&&k(F),Object.keys(gt).length===0&&x.delete(J)}a.remove(F)}function k(F){const R=a.get(F);o.deleteTexture(R.__webglTexture);const J=F.source,gt=x.get(J);delete gt[R.__cacheKey],u.memory.textures--}function B(F){const R=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(R.__webglFramebuffer[gt]))for(let bt=0;bt<R.__webglFramebuffer[gt].length;bt++)o.deleteFramebuffer(R.__webglFramebuffer[gt][bt]);else o.deleteFramebuffer(R.__webglFramebuffer[gt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[gt])}else{if(Array.isArray(R.__webglFramebuffer))for(let gt=0;gt<R.__webglFramebuffer.length;gt++)o.deleteFramebuffer(R.__webglFramebuffer[gt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let gt=0;gt<R.__webglColorRenderbuffer.length;gt++)R.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[gt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const J=F.textures;for(let gt=0,bt=J.length;gt<bt;gt++){const wt=a.get(J[gt]);wt.__webglTexture&&(o.deleteTexture(wt.__webglTexture),u.memory.textures--),a.remove(J[gt])}a.remove(F)}let W=0;function $(){W=0}function lt(){return W}function X(F){W=F}function z(){const F=W;return F>=s.maxTextures&&re("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),W+=1,F}function G(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function tt(F,R){const J=a.get(F);if(F.isVideoTexture&&Ce(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&J.__version!==F.version){const gt=F.image;if(gt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(J,F,R);return}}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+R)}function ht(F,R){const J=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Ht(J,F,R);return}else F.isExternalTexture&&(J.__webglTexture=F.sourceTexture?F.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+R)}function vt(F,R){const J=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){Ht(J,F,R);return}n.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+R)}function I(F,R){const J=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&J.__version!==F.version){ne(J,F,R);return}n.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+R)}const K={[Yp]:o.REPEAT,[$a]:o.CLAMP_TO_EDGE,[Zp]:o.MIRRORED_REPEAT},St={[Gn]:o.NEAREST,[eb]:o.NEAREST_MIPMAP_NEAREST,[Fu]:o.NEAREST_MIPMAP_LINEAR,[Zn]:o.LINEAR,[Kd]:o.LINEAR_MIPMAP_NEAREST,[Cs]:o.LINEAR_MIPMAP_LINEAR},yt={[ab]:o.NEVER,[cb]:o.ALWAYS,[rb]:o.LESS,[$m]:o.LEQUAL,[sb]:o.EQUAL,[t0]:o.GEQUAL,[ob]:o.GREATER,[lb]:o.NOTEQUAL};function At(F,R){if(R.type===Sa&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Zn||R.magFilter===Kd||R.magFilter===Fu||R.magFilter===Cs||R.minFilter===Zn||R.minFilter===Kd||R.minFilter===Fu||R.minFilter===Cs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,K[R.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,K[R.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,K[R.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,St[R.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,St[R.minFilter]),R.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,yt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Gn||R.minFilter!==Fu&&R.minFilter!==Cs||R.type===Sa&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||a.get(R).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),a.get(R).__currentAnisotropy=R.anisotropy}}}function ct(F,R){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",O));const gt=R.source;let bt=x.get(gt);bt===void 0&&(bt={},x.set(gt,bt));const wt=G(R);if(wt!==F.__cacheKey){bt[wt]===void 0&&(bt[wt]={texture:o.createTexture(),usedTimes:0},u.memory.textures++,J=!0),bt[wt].usedTimes++;const Ot=bt[F.__cacheKey];Ot!==void 0&&(bt[F.__cacheKey].usedTimes--,Ot.usedTimes===0&&k(R)),F.__cacheKey=wt,F.__webglTexture=bt[wt].texture}return J}function Mt(F,R,J){return Math.floor(Math.floor(F/J)/R)}function Tt(F,R,J,gt){const wt=F.updateRanges;if(wt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,J,gt,R.data);else{wt.sort((Ft,Nt)=>Ft.start-Nt.start);let Ot=0;for(let Ft=1;Ft<wt.length;Ft++){const Nt=wt[Ot],Dt=wt[Ft],se=Nt.start+Nt.count,oe=Mt(Dt.start,R.width,4),ge=Mt(Nt.start,R.width,4);Dt.start<=se+1&&oe===ge&&Mt(Dt.start+Dt.count-1,R.width,4)===oe?Nt.count=Math.max(Nt.count,Dt.start+Dt.count-Nt.start):(++Ot,wt[Ot]=Dt)}wt.length=Ot+1;const ft=n.getParameter(o.UNPACK_ROW_LENGTH),dt=n.getParameter(o.UNPACK_SKIP_PIXELS),Pt=n.getParameter(o.UNPACK_SKIP_ROWS);n.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ft=0,Nt=wt.length;Ft<Nt;Ft++){const Dt=wt[Ft],se=Math.floor(Dt.start/4),oe=Math.ceil(Dt.count/4),ge=se%R.width,q=Math.floor(se/R.width),Ct=oe,mt=1;n.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(o.UNPACK_SKIP_ROWS,q),n.texSubImage2D(o.TEXTURE_2D,0,ge,q,Ct,mt,J,gt,R.data)}F.clearUpdateRanges(),n.pixelStorei(o.UNPACK_ROW_LENGTH,ft),n.pixelStorei(o.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(o.UNPACK_SKIP_ROWS,Pt)}}function Ht(F,R,J){let gt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(gt=o.TEXTURE_3D);const bt=ct(F,R),wt=R.source;n.bindTexture(gt,F.__webglTexture,o.TEXTURE0+J);const Ot=a.get(wt);if(wt.version!==Ot.__version||bt===!0){if(n.activeTexture(o.TEXTURE0+J),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const mt=be.getPrimaries(be.workingColorSpace),It=R.colorSpace===Hr?null:be.getPrimaries(R.colorSpace),Lt=R.colorSpace===Hr||mt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment);let dt=y(R.image,!1,s.maxTextureSize);dt=Rt(R,dt);const Pt=l.convert(R.format,R.colorSpace),Ft=l.convert(R.type);let Nt=D(R.internalFormat,Pt,Ft,R.normalized,R.colorSpace,R.isVideoTexture);At(gt,R);let Dt;const se=R.mipmaps,oe=R.isVideoTexture!==!0,ge=Ot.__version===void 0||bt===!0,q=wt.dataReady,Ct=N(R,dt);if(R.isDepthTexture)Nt=P(R.format===ws,R.type),ge&&(oe?n.texStorage2D(o.TEXTURE_2D,1,Nt,dt.width,dt.height):n.texImage2D(o.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Ft,null));else if(R.isDataTexture)if(se.length>0){oe&&ge&&n.texStorage2D(o.TEXTURE_2D,Ct,Nt,se[0].width,se[0].height);for(let mt=0,It=se.length;mt<It;mt++)Dt=se[mt],oe?q&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Pt,Ft,Dt.data):n.texImage2D(o.TEXTURE_2D,mt,Nt,Dt.width,Dt.height,0,Pt,Ft,Dt.data);R.generateMipmaps=!1}else oe?(ge&&n.texStorage2D(o.TEXTURE_2D,Ct,Nt,dt.width,dt.height),q&&Tt(R,dt,Pt,Ft)):n.texImage2D(o.TEXTURE_2D,0,Nt,dt.width,dt.height,0,Pt,Ft,dt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){oe&&ge&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Nt,se[0].width,se[0].height,dt.depth);for(let mt=0,It=se.length;mt<It;mt++)if(Dt=se[mt],R.format!==oa)if(Pt!==null)if(oe){if(q)if(R.layerUpdates.size>0){const Lt=Zx(Dt.width,Dt.height,R.format,R.type);for(const Et of R.layerUpdates){const Yt=Dt.data.subarray(Et*Lt/Dt.data.BYTES_PER_ELEMENT,(Et+1)*Lt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,Et,Dt.width,Dt.height,1,Pt,Yt)}R.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,dt.depth,Pt,Dt.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,mt,Nt,Dt.width,Dt.height,dt.depth,0,Dt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?q&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,mt,0,0,0,Dt.width,Dt.height,dt.depth,Pt,Ft,Dt.data):n.texImage3D(o.TEXTURE_2D_ARRAY,mt,Nt,Dt.width,Dt.height,dt.depth,0,Pt,Ft,Dt.data)}else{oe&&ge&&n.texStorage2D(o.TEXTURE_2D,Ct,Nt,se[0].width,se[0].height);for(let mt=0,It=se.length;mt<It;mt++)Dt=se[mt],R.format!==oa?Pt!==null?oe?q&&n.compressedTexSubImage2D(o.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Pt,Dt.data):n.compressedTexImage2D(o.TEXTURE_2D,mt,Nt,Dt.width,Dt.height,0,Dt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?q&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Dt.width,Dt.height,Pt,Ft,Dt.data):n.texImage2D(o.TEXTURE_2D,mt,Nt,Dt.width,Dt.height,0,Pt,Ft,Dt.data)}else if(R.isDataArrayTexture)if(oe){if(ge&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Nt,dt.width,dt.height,dt.depth),q)if(R.layerUpdates.size>0){const mt=Zx(dt.width,dt.height,R.format,R.type);for(const It of R.layerUpdates){const Lt=dt.data.subarray(It*mt/dt.data.BYTES_PER_ELEMENT,(It+1)*mt/dt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,It,dt.width,dt.height,1,Pt,Ft,Lt)}R.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Ft,dt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Ft,dt.data);else if(R.isData3DTexture)oe?(ge&&n.texStorage3D(o.TEXTURE_3D,Ct,Nt,dt.width,dt.height,dt.depth),q&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Pt,Ft,dt.data)):n.texImage3D(o.TEXTURE_3D,0,Nt,dt.width,dt.height,dt.depth,0,Pt,Ft,dt.data);else if(R.isFramebufferTexture){if(ge)if(oe)n.texStorage2D(o.TEXTURE_2D,Ct,Nt,dt.width,dt.height);else{let mt=dt.width,It=dt.height;for(let Lt=0;Lt<Ct;Lt++)n.texImage2D(o.TEXTURE_2D,Lt,Nt,mt,It,0,Pt,Ft,null),mt>>=1,It>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in o){const mt=o.canvas;if(mt.hasAttribute("layoutsubtree")||mt.setAttribute("layoutsubtree","true"),dt.parentNode!==mt){mt.appendChild(dt),v.add(R),mt.onpaint=ae=>{const ln=ae.changedElements;for(const Oe of v)ln.includes(Oe.image)&&(Oe.needsUpdate=!0)},mt.requestPaint();return}const It=0,Lt=o.RGBA,Et=o.RGBA,Yt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,It,Lt,Et,Yt,dt),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(se.length>0){if(oe&&ge){const mt=$e(se[0]);n.texStorage2D(o.TEXTURE_2D,Ct,Nt,mt.width,mt.height)}for(let mt=0,It=se.length;mt<It;mt++)Dt=se[mt],oe?q&&n.texSubImage2D(o.TEXTURE_2D,mt,0,0,Pt,Ft,Dt):n.texImage2D(o.TEXTURE_2D,mt,Nt,Pt,Ft,Dt);R.generateMipmaps=!1}else if(oe){if(ge){const mt=$e(dt);n.texStorage2D(o.TEXTURE_2D,Ct,Nt,mt.width,mt.height)}q&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Pt,Ft,dt)}else n.texImage2D(o.TEXTURE_2D,0,Nt,Pt,Ft,dt);S(R)&&A(gt),Ot.__version=wt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function ne(F,R,J){if(R.image.length!==6)return;const gt=ct(F,R),bt=R.source;n.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+J);const wt=a.get(bt);if(bt.version!==wt.__version||gt===!0){n.activeTexture(o.TEXTURE0+J);const Ot=be.getPrimaries(be.workingColorSpace),ft=R.colorSpace===Hr?null:be.getPrimaries(R.colorSpace),dt=R.colorSpace===Hr||Ot===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;n.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),n.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),n.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),n.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Pt=R.isCompressedTexture||R.image[0].isCompressedTexture,Ft=R.image[0]&&R.image[0].isDataTexture,Nt=[];for(let Et=0;Et<6;Et++)!Pt&&!Ft?Nt[Et]=y(R.image[Et],!0,s.maxCubemapSize):Nt[Et]=Ft?R.image[Et].image:R.image[Et],Nt[Et]=Rt(R,Nt[Et]);const Dt=Nt[0],se=l.convert(R.format,R.colorSpace),oe=l.convert(R.type),ge=D(R.internalFormat,se,oe,R.normalized,R.colorSpace),q=R.isVideoTexture!==!0,Ct=wt.__version===void 0||gt===!0,mt=bt.dataReady;let It=N(R,Dt);At(o.TEXTURE_CUBE_MAP,R);let Lt;if(Pt){q&&Ct&&n.texStorage2D(o.TEXTURE_CUBE_MAP,It,ge,Dt.width,Dt.height);for(let Et=0;Et<6;Et++){Lt=Nt[Et].mipmaps;for(let Yt=0;Yt<Lt.length;Yt++){const ae=Lt[Yt];R.format!==oa?se!==null?q?mt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,0,0,ae.width,ae.height,se,ae.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,ge,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,0,0,ae.width,ae.height,se,oe,ae.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt,ge,ae.width,ae.height,0,se,oe,ae.data)}}}else{if(Lt=R.mipmaps,q&&Ct){Lt.length>0&&It++;const Et=$e(Nt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,It,ge,Et.width,Et.height)}for(let Et=0;Et<6;Et++)if(Ft){q?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,Nt[Et].width,Nt[Et].height,se,oe,Nt[Et].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ge,Nt[Et].width,Nt[Et].height,0,se,oe,Nt[Et].data);for(let Yt=0;Yt<Lt.length;Yt++){const ln=Lt[Yt].image[Et].image;q?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,0,0,ln.width,ln.height,se,oe,ln.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,ge,ln.width,ln.height,0,se,oe,ln.data)}}else{q?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,0,0,se,oe,Nt[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,ge,se,oe,Nt[Et]);for(let Yt=0;Yt<Lt.length;Yt++){const ae=Lt[Yt];q?mt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,0,0,se,oe,ae.image[Et]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Yt+1,ge,se,oe,ae.image[Et])}}}S(R)&&A(o.TEXTURE_CUBE_MAP),wt.__version=bt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function Jt(F,R,J,gt,bt,wt){const Ot=l.convert(J.format,J.colorSpace),ft=l.convert(J.type),dt=D(J.internalFormat,Ot,ft,J.normalized,J.colorSpace),Pt=a.get(R),Ft=a.get(J);if(Ft.__renderTarget=R,!Pt.__hasExternalTextures){const Nt=Math.max(1,R.width>>wt),Dt=Math.max(1,R.height>>wt);bt===o.TEXTURE_3D||bt===o.TEXTURE_2D_ARRAY?n.texImage3D(bt,wt,dt,Nt,Dt,R.depth,0,Ot,ft,null):n.texImage2D(bt,wt,dt,Nt,Dt,0,Ot,ft,null)}n.bindFramebuffer(o.FRAMEBUFFER,F),pe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,bt,Ft.__webglTexture,0,tn(R)):(bt===o.TEXTURE_2D||bt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&bt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,bt,Ft.__webglTexture,wt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(F,R,J){if(o.bindRenderbuffer(o.RENDERBUFFER,F),R.depthBuffer){const gt=R.depthTexture,bt=gt&&gt.isDepthTexture?gt.type:null,wt=P(R.stencilBuffer,bt),Ot=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;pe(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(R),wt,R.width,R.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(R),wt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,wt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ot,o.RENDERBUFFER,F)}else{const gt=R.textures;for(let bt=0;bt<gt.length;bt++){const wt=gt[bt],Ot=l.convert(wt.format,wt.colorSpace),ft=l.convert(wt.type),dt=D(wt.internalFormat,Ot,ft,wt.normalized,wt.colorSpace);pe(R)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(R),dt,R.width,R.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(R),dt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,dt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ue(F,R,J){const gt=R.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const bt=a.get(R.depthTexture);if(bt.__renderTarget=R,(!bt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),gt){if(bt.__webglInit===void 0&&(bt.__webglInit=!0,R.depthTexture.addEventListener("dispose",O)),bt.__webglTexture===void 0){bt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,bt.__webglTexture),At(o.TEXTURE_CUBE_MAP,R.depthTexture);const Pt=l.convert(R.depthTexture.format),Ft=l.convert(R.depthTexture.type);let Nt;R.depthTexture.format===ir?Nt=o.DEPTH_COMPONENT24:R.depthTexture.format===ws&&(Nt=o.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Nt,R.width,R.height,0,Pt,Ft,null)}}else tt(R.depthTexture,0);const wt=bt.__webglTexture,Ot=tn(R),ft=gt?o.TEXTURE_CUBE_MAP_POSITIVE_X+J:o.TEXTURE_2D,dt=R.depthTexture.format===ws?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(R.depthTexture.format===ir)pe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,wt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,wt,0);else if(R.depthTexture.format===ws)pe(R)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,wt,0,Ot):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,wt,0);else throw new Error("Unknown depthTexture format")}function Ut(F){const R=a.get(F),J=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const gt=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),gt){const bt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,gt.removeEventListener("dispose",bt)};gt.addEventListener("dispose",bt),R.__depthDisposeCallback=bt}R.__boundDepthTexture=gt}if(F.depthTexture&&!R.__autoAllocateDepthBuffer)if(J)for(let gt=0;gt<6;gt++)ue(R.__webglFramebuffer[gt],F,gt);else{const gt=F.texture.mipmaps;gt&&gt.length>0?ue(R.__webglFramebuffer[0],F,0):ue(R.__webglFramebuffer,F,0)}else if(J){R.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[gt]),R.__webglDepthbuffer[gt]===void 0)R.__webglDepthbuffer[gt]=o.createRenderbuffer(),Fe(R.__webglDepthbuffer[gt],F,!1);else{const bt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=R.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,wt)}}else{const gt=F.texture.mipmaps;if(gt&&gt.length>0?n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Fe(R.__webglDepthbuffer,F,!1);else{const bt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,wt),o.framebufferRenderbuffer(o.FRAMEBUFFER,bt,o.RENDERBUFFER,wt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function ee(F,R,J){const gt=a.get(F);R!==void 0&&Jt(gt.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&Ut(F)}function Kt(F){const R=F.texture,J=a.get(F),gt=a.get(R);F.addEventListener("dispose",T);const bt=F.textures,wt=F.isWebGLCubeRenderTarget===!0,Ot=bt.length>1;if(Ot||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=R.version,u.memory.textures++),wt){J.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[ft]=[];for(let dt=0;dt<R.mipmaps.length;dt++)J.__webglFramebuffer[ft][dt]=o.createFramebuffer()}else J.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let ft=0;ft<R.mipmaps.length;ft++)J.__webglFramebuffer[ft]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let ft=0,dt=bt.length;ft<dt;ft++){const Pt=a.get(bt[ft]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=o.createTexture(),u.memory.textures++)}if(F.samples>0&&pe(F)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let ft=0;ft<bt.length;ft++){const dt=bt[ft];J.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[ft]);const Pt=l.convert(dt.format,dt.colorSpace),Ft=l.convert(dt.type),Nt=D(dt.internalFormat,Pt,Ft,dt.normalized,dt.colorSpace,F.isXRRenderTarget===!0),Dt=tn(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,Nt,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,J.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Fe(J.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(wt){n.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),At(o.TEXTURE_CUBE_MAP,R);for(let ft=0;ft<6;ft++)if(R.mipmaps&&R.mipmaps.length>0)for(let dt=0;dt<R.mipmaps.length;dt++)Jt(J.__webglFramebuffer[ft][dt],F,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,dt);else Jt(J.__webglFramebuffer[ft],F,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);S(R)&&A(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ot){for(let ft=0,dt=bt.length;ft<dt;ft++){const Pt=bt[ft],Ft=a.get(Pt);let Nt=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Nt=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Nt,Ft.__webglTexture),At(Nt,Pt),Jt(J.__webglFramebuffer,F,Pt,o.COLOR_ATTACHMENT0+ft,Nt,0),S(Pt)&&A(Nt)}n.unbindTexture()}else{let ft=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ft=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ft,gt.__webglTexture),At(ft,R),R.mipmaps&&R.mipmaps.length>0)for(let dt=0;dt<R.mipmaps.length;dt++)Jt(J.__webglFramebuffer[dt],F,R,o.COLOR_ATTACHMENT0,ft,dt);else Jt(J.__webglFramebuffer,F,R,o.COLOR_ATTACHMENT0,ft,0);S(R)&&A(ft),n.unbindTexture()}F.depthBuffer&&Ut(F)}function _e(F){const R=F.textures;for(let J=0,gt=R.length;J<gt;J++){const bt=R[J];if(S(bt)){const wt=w(F),Ot=a.get(bt).__webglTexture;n.bindTexture(wt,Ot),A(wt),n.unbindTexture()}}}const Re=[],Ie=[];function Y(F){if(F.samples>0){if(pe(F)===!1){const R=F.textures,J=F.width,gt=F.height;let bt=o.COLOR_BUFFER_BIT;const wt=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=a.get(F),ft=R.length>1;if(ft)for(let Pt=0;Pt<R.length;Pt++)n.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const dt=F.texture.mipmaps;dt&&dt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Pt=0;Pt<R.length;Pt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(bt|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(bt|=o.STENCIL_BUFFER_BIT)),ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const Ft=a.get(R[Pt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ft,0)}o.blitFramebuffer(0,0,J,gt,0,0,J,gt,bt,o.NEAREST),p===!0&&(Re.length=0,Ie.length=0,Re.push(o.COLOR_ATTACHMENT0+Pt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Re.push(wt),Ie.push(wt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Ie)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Pt=0;Pt<R.length;Pt++){n.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Pt]);const Ft=a.get(R[Pt]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Pt,o.TEXTURE_2D,Ft,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const R=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function tn(F){return Math.min(s.maxSamples,F.samples)}function pe(F){const R=a.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ce(F){const R=u.render.frame;_.get(F)!==R&&(_.set(F,R),F.update())}function Rt(F,R){const J=F.colorSpace,gt=F.format,bt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==xf&&J!==Hr&&(be.getTransfer(J)===We?(gt!==oa||bt!==Ci)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):we("WebGLTextures: Unsupported texture color space:",J)),R}function $e(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(d.width=F.naturalWidth||F.width,d.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(d.width=F.displayWidth,d.height=F.displayHeight):(d.width=F.width,d.height=F.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=$,this.getTextureUnits=lt,this.setTextureUnits=X,this.setTexture2D=tt,this.setTexture2DArray=ht,this.setTexture3D=vt,this.setTextureCube=I,this.rebindTextures=ee,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Jt,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HR(o,t){function n(a,s=Hr){let l;const u=be.getTransfer(s);if(a===Ci)return o.UNSIGNED_BYTE;if(a===Ym)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Zm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===YS)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===ZS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===qS)return o.BYTE;if(a===jS)return o.SHORT;if(a===cc)return o.UNSIGNED_SHORT;if(a===jm)return o.INT;if(a===Ta)return o.UNSIGNED_INT;if(a===Sa)return o.FLOAT;if(a===nr)return o.HALF_FLOAT;if(a===KS)return o.ALPHA;if(a===QS)return o.RGB;if(a===oa)return o.RGBA;if(a===ir)return o.DEPTH_COMPONENT;if(a===ws)return o.DEPTH_STENCIL;if(a===JS)return o.RED;if(a===Km)return o.RED_INTEGER;if(a===Fs)return o.RG;if(a===Qm)return o.RG_INTEGER;if(a===Jm)return o.RGBA_INTEGER;if(a===cf||a===uf||a===ff||a===hf)if(u===We)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===cf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===cf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ff)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===hf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Kp||a===Qp||a===Jp||a===$p)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Kp)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Qp)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Jp)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===$p)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===tm||a===em||a===nm||a===im||a===am||a===gf||a===rm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===tm||a===em)return u===We?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===nm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===im)return l.COMPRESSED_R11_EAC;if(a===am)return l.COMPRESSED_SIGNED_R11_EAC;if(a===gf)return l.COMPRESSED_RG11_EAC;if(a===rm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===sm||a===om||a===lm||a===cm||a===um||a===fm||a===hm||a===dm||a===pm||a===mm||a===_m||a===gm||a===vm||a===xm)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===sm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===om)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===lm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===cm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===um)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===fm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===hm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===dm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===pm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===mm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===_m)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===gm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===vm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===xm)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Sm||a===ym||a===Mm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Sm)return u===We?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ym)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Mm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Em||a===bm||a===vf||a===Tm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Em)return l.COMPRESSED_RED_RGTC1_EXT;if(a===bm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===vf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Tm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===uc?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const VR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new cy(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new Ki({vertexShader:VR,fragmentShader:kR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ca(new Lf(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WR extends Bs{constructor(t,n){super();const a=this;let s=null,l=1,u=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",y=new XR,S={},A=n.getContextAttributes();let w=null,D=null;const P=[],N=[],O=new Be;let T=null;const L=new qi;L.viewport=new pn;const k=new qi;k.viewport=new pn;const B=[L,k],W=new eT;let $=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ct){let Mt=P[ct];return Mt===void 0&&(Mt=new ap,P[ct]=Mt),Mt.getTargetRaySpace()},this.getControllerGrip=function(ct){let Mt=P[ct];return Mt===void 0&&(Mt=new ap,P[ct]=Mt),Mt.getGripSpace()},this.getHand=function(ct){let Mt=P[ct];return Mt===void 0&&(Mt=new ap,P[ct]=Mt),Mt.getHandSpace()};function X(ct){const Mt=N.indexOf(ct.inputSource);if(Mt===-1)return;const Tt=P[Mt];Tt!==void 0&&(Tt.update(ct.inputSource,ct.frame,d||u),Tt.dispatchEvent({type:ct.type,data:ct.inputSource}))}function z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let ct=0;ct<P.length;ct++){const Mt=N[ct];Mt!==null&&(N[ct]=null,P[ct].disconnect(Mt))}$=null,lt=null,y.reset();for(const ct in S)delete S[ct];t.setRenderTarget(w),x=null,g=null,v=null,s=null,D=null,At.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(O.width,O.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ct){l=ct,a.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ct){f=ct,a.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(ct){d=ct},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(s,n)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ct){if(s=ct,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),A.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(O),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ht=null,ne=null;A.depth&&(ne=A.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=A.stencil?ws:ir,Ht=A.stencil?uc:Ta);const Jt={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:l};v=this.getBinding(),g=v.createProjectionLayer(Jt),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),D=new ba(g.textureWidth,g.textureHeight,{format:oa,type:Ci,depthTexture:new Xo(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Tt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,n,Tt),s.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new ba(x.framebufferWidth,x.framebufferHeight,{format:oa,type:Ci,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await s.requestReferenceSpace(f),At.setContext(s),At.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ct){for(let Mt=0;Mt<ct.removed.length;Mt++){const Tt=ct.removed[Mt],Ht=N.indexOf(Tt);Ht>=0&&(N[Ht]=null,P[Ht].disconnect(Tt))}for(let Mt=0;Mt<ct.added.length;Mt++){const Tt=ct.added[Mt];let Ht=N.indexOf(Tt);if(Ht===-1){for(let Jt=0;Jt<P.length;Jt++)if(Jt>=N.length){N.push(Tt),Ht=Jt;break}else if(N[Jt]===null){N[Jt]=Tt,Ht=Jt;break}if(Ht===-1)break}const ne=P[Ht];ne&&ne.connect(Tt)}}const tt=new rt,ht=new rt;function vt(ct,Mt,Tt){tt.setFromMatrixPosition(Mt.matrixWorld),ht.setFromMatrixPosition(Tt.matrixWorld);const Ht=tt.distanceTo(ht),ne=Mt.projectionMatrix.elements,Jt=Tt.projectionMatrix.elements,Fe=ne[14]/(ne[10]-1),ue=ne[14]/(ne[10]+1),Ut=(ne[9]+1)/ne[5],ee=(ne[9]-1)/ne[5],Kt=(ne[8]-1)/ne[0],_e=(Jt[8]+1)/Jt[0],Re=Fe*Kt,Ie=Fe*_e,Y=Ht/(-Kt+_e),tn=Y*-Kt;if(Mt.matrixWorld.decompose(ct.position,ct.quaternion,ct.scale),ct.translateX(tn),ct.translateZ(Y),ct.matrixWorld.compose(ct.position,ct.quaternion,ct.scale),ct.matrixWorldInverse.copy(ct.matrixWorld).invert(),ne[10]===-1)ct.projectionMatrix.copy(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(Mt.projectionMatrixInverse);else{const pe=Fe+Y,Ce=ue+Y,Rt=Re-tn,$e=Ie+(Ht-tn),F=Ut*ue/Ce*pe,R=ee*ue/Ce*pe;ct.projectionMatrix.makePerspective(Rt,$e,F,R,pe,Ce),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert()}}function I(ct,Mt){Mt===null?ct.matrixWorld.copy(ct.matrix):ct.matrixWorld.multiplyMatrices(Mt.matrixWorld,ct.matrix),ct.matrixWorldInverse.copy(ct.matrixWorld).invert()}this.updateCamera=function(ct){if(s===null)return;let Mt=ct.near,Tt=ct.far;y.texture!==null&&(y.depthNear>0&&(Mt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),W.near=k.near=L.near=Mt,W.far=k.far=L.far=Tt,($!==W.near||lt!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),$=W.near,lt=W.far),W.layers.mask=ct.layers.mask|6,L.layers.mask=W.layers.mask&-5,k.layers.mask=W.layers.mask&-3;const Ht=ct.parent,ne=W.cameras;I(W,Ht);for(let Jt=0;Jt<ne.length;Jt++)I(ne[Jt],Ht);ne.length===2?vt(W,L,k):W.projectionMatrix.copy(L.projectionMatrix),K(ct,W,Ht)};function K(ct,Mt,Tt){Tt===null?ct.matrix.copy(Mt.matrixWorld):(ct.matrix.copy(Tt.matrixWorld),ct.matrix.invert(),ct.matrix.multiply(Mt.matrixWorld)),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.updateMatrixWorld(!0),ct.projectionMatrix.copy(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(Mt.projectionMatrixInverse),ct.isPerspectiveCamera&&(ct.fov=Rm*2*Math.atan(1/ct.projectionMatrix.elements[5]),ct.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&x===null))return p},this.setFoveation=function(ct){p=ct,g!==null&&(g.fixedFoveation=ct),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ct)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(ct){return S[ct]};let St=null;function yt(ct,Mt){if(_=Mt.getViewerPose(d||u),M=Mt,_!==null){const Tt=_.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let Ht=!1;Tt.length!==W.cameras.length&&(W.cameras.length=0,Ht=!0);for(let ue=0;ue<Tt.length;ue++){const Ut=Tt[ue];let ee=null;if(x!==null)ee=x.getViewport(Ut);else{const _e=v.getViewSubImage(g,Ut);ee=_e.viewport,ue===0&&(t.setRenderTargetTextures(D,_e.colorTexture,_e.depthStencilTexture),t.setRenderTarget(D))}let Kt=B[ue];Kt===void 0&&(Kt=new qi,Kt.layers.enable(ue),Kt.viewport=new pn,B[ue]=Kt),Kt.matrix.fromArray(Ut.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Ut.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ee.x,ee.y,ee.width,ee.height),ue===0&&(W.matrix.copy(Kt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ht===!0&&W.cameras.push(Kt)}const ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const ue=v.getDepthInformation(Tt[0]);ue&&ue.isValid&&ue.texture&&y.init(ue,s.renderState)}if(ne&&ne.includes("camera-access")&&E){t.state.unbindTexture(),v=a.getBinding();for(let ue=0;ue<Tt.length;ue++){const Ut=Tt[ue].camera;if(Ut){let ee=S[Ut];ee||(ee=new cy,S[Ut]=ee);const Kt=v.getCameraImage(Ut);ee.sourceTexture=Kt}}}}for(let Tt=0;Tt<P.length;Tt++){const Ht=N[Tt],ne=P[Tt];Ht!==null&&ne!==void 0&&ne.update(Ht,Mt,d||u)}St&&St(ct,Mt),Mt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Mt}),M=null}const At=new dy;At.setAnimationLoop(yt),this.setAnimationLoop=function(ct){St=ct},this.dispose=function(){}}}const qR=new _n,Sy=new ce;Sy.set(-1,0,0,0,1,0,0,0,1);function jR(o,t){function n(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,uy(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,A,w,D){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),_(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),g(y,S),S.isMeshPhysicalMaterial&&x(y,S,D)):S.isMeshMatcapMaterial?(l(y,S),M(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),E(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?p(y,S,A,w):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,n(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ti&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,n(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ti&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,n(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,n(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,n(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const A=t.get(S),w=A.envMap,D=A.envMapRotation;w&&(y.envMap.value=w,y.envMapRotation.value.setFromMatrix4(qR.makeRotationFromEuler(D)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Sy),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,n(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,n(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,A,w){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*A,y.scale.value=w*.5,S.map&&(y.map.value=S.map,n(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,n(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,n(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,n(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,n(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,A){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,n(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,n(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,n(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,n(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,n(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,n(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,n(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,n(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,n(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,n(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,n(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,n(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function E(y,S){const A=t.get(S).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function YR(o,t,n,a){let s={},l={},u=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,w){const D=w.program;a.uniformBlockBinding(A,D)}function d(A,w){let D=s[A.id];D===void 0&&(M(A),D=_(A),s[A.id]=D,A.addEventListener("dispose",y));const P=w.program;a.updateUBOMapping(A,P);const N=t.render.frame;l[A.id]!==N&&(g(A),l[A.id]=N)}function _(A){const w=v();A.__bindingPointIndex=w;const D=o.createBuffer(),P=A.__size,N=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,P,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,w,D),D}function v(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return we("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(A){const w=s[A.id],D=A.uniforms,P=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,w);for(let N=0,O=D.length;N<O;N++){const T=Array.isArray(D[N])?D[N]:[D[N]];for(let L=0,k=T.length;L<k;L++){const B=T[L];if(x(B,N,L,P)===!0){const W=B.__offset,$=Array.isArray(B.value)?B.value:[B.value];let lt=0;for(let X=0;X<$.length;X++){const z=$[X],G=E(z);typeof z=="number"||typeof z=="boolean"?(B.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,W+lt,B.__data)):z.isMatrix3?(B.__data[0]=z.elements[0],B.__data[1]=z.elements[1],B.__data[2]=z.elements[2],B.__data[3]=0,B.__data[4]=z.elements[3],B.__data[5]=z.elements[4],B.__data[6]=z.elements[5],B.__data[7]=0,B.__data[8]=z.elements[6],B.__data[9]=z.elements[7],B.__data[10]=z.elements[8],B.__data[11]=0):ArrayBuffer.isView(z)?B.__data.set(new z.constructor(z.buffer,z.byteOffset,B.__data.length)):(z.toArray(B.__data,lt),lt+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(A,w,D,P){const N=A.value,O=w+"_"+D;if(P[O]===void 0)return typeof N=="number"||typeof N=="boolean"?P[O]=N:ArrayBuffer.isView(N)?P[O]=N.slice():P[O]=N.clone(),!0;{const T=P[O];if(typeof N=="number"||typeof N=="boolean"){if(T!==N)return P[O]=N,!0}else{if(ArrayBuffer.isView(N))return!0;if(T.equals(N)===!1)return T.copy(N),!0}}return!1}function M(A){const w=A.uniforms;let D=0;const P=16;for(let O=0,T=w.length;O<T;O++){const L=Array.isArray(w[O])?w[O]:[w[O]];for(let k=0,B=L.length;k<B;k++){const W=L[k],$=Array.isArray(W.value)?W.value:[W.value];for(let lt=0,X=$.length;lt<X;lt++){const z=$[lt],G=E(z),tt=D%P,ht=tt%G.boundary,vt=tt+ht;D+=ht,vt!==0&&P-vt<G.storage&&(D+=P-vt),W.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=D,D+=G.storage}}}const N=D%P;return N>0&&(D+=P-N),A.__size=D,A.__cache={},this}function E(A){const w={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(w.boundary=16,w.storage=A.byteLength):re("WebGLRenderer: Unsupported uniform value type.",A),w}function y(A){const w=A.target;w.removeEventListener("dispose",y);const D=u.indexOf(w.__bindingPointIndex);u.splice(D,1),o.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function S(){for(const A in s)o.deleteBuffer(s[A]);u=[],s={},l={}}return{bind:p,update:d,dispose:S}}const ZR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _a=null;function KR(){return _a===null&&(_a=new Ob(ZR,16,16,Fs,nr),_a.name="DFG_LUT",_a.minFilter=Zn,_a.magFilter=Zn,_a.wrapS=$a,_a.wrapT=$a,_a.generateMipmaps=!1,_a.needsUpdate=!0),_a}class QR{constructor(t={}){const{canvas:n=fb(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:x=Ci}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=u;const E=x,y=new Set([Jm,Qm,Km]),S=new Set([Ci,Ta,cc,uc,Ym,Zm]),A=new Uint32Array(4),w=new Int32Array(4),D=new rt;let P=null,N=null;const O=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let B=!1,W=null;this._outputColorSpace=Ai;let $=0,lt=0,X=null,z=-1,G=null;const tt=new pn,ht=new pn;let vt=null;const I=new De(0);let K=0,St=n.width,yt=n.height,At=1,ct=null,Mt=null;const Tt=new pn(0,0,St,yt),Ht=new pn(0,0,St,yt);let ne=!1;const Jt=new n0;let Fe=!1,ue=!1;const Ut=new _n,ee=new rt,Kt=new pn,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Re=!1;function Ie(){return X===null?At:1}let Y=a;function tn(C,Z){return n.getContext(C,Z)}try{const C={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${qm}`),n.addEventListener("webglcontextlost",Et,!1),n.addEventListener("webglcontextrestored",Yt,!1),n.addEventListener("webglcontextcreationerror",ae,!1),Y===null){const Z="webgl2";if(Y=tn(Z,C),Y===null)throw tn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw we("WebGLRenderer: "+C.message),C}let pe,Ce,Rt,$e,F,R,J,gt,bt,wt,Ot,ft,dt,Pt,Ft,Nt,Dt,se,oe,ge,q,Ct,mt;function It(){pe=new K2(Y),pe.init(),q=new HR(Y,pe),Ce=new V2(Y,pe,t,q),Rt=new IR(Y,pe),Ce.reversedDepthBuffer&&g&&Rt.buffers.depth.setReversed(!0),$e=new $2(Y),F=new TR,R=new GR(Y,pe,Rt,F,Ce,q,$e),J=new Z2(k),gt=new iT(Y),Ct=new G2(Y,gt),bt=new Q2(Y,gt,$e,Ct),wt=new e3(Y,bt,gt,Ct,$e),se=new t3(Y,Ce,R),Ft=new k2(F),Ot=new bR(k,J,pe,Ce,Ct,Ft),ft=new jR(k,F),dt=new RR,Pt=new LR(pe),Dt=new I2(k,J,Rt,wt,M,p),Nt=new BR(k,wt,Ce),mt=new YR(Y,$e,Ce,Rt),oe=new H2(Y,pe,$e),ge=new J2(Y,pe,$e),$e.programs=Ot.programs,k.capabilities=Ce,k.extensions=pe,k.properties=F,k.renderLists=dt,k.shadowMap=Nt,k.state=Rt,k.info=$e}It(),E!==Ci&&(L=new i3(E,n.width,n.height,s,l));const Lt=new WR(k,Y);this.xr=Lt,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return At},this.setPixelRatio=function(C){C!==void 0&&(At=C,this.setSize(St,yt,!1))},this.getSize=function(C){return C.set(St,yt)},this.setSize=function(C,Z,st=!0){if(Lt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}St=C,yt=Z,n.width=Math.floor(C*At),n.height=Math.floor(Z*At),st===!0&&(n.style.width=C+"px",n.style.height=Z+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(St*At,yt*At).floor()},this.setDrawingBufferSize=function(C,Z,st){St=C,yt=Z,At=st,n.width=Math.floor(C*st),n.height=Math.floor(Z*st),this.setViewport(0,0,C,Z)},this.setEffects=function(C){if(E===Ci){we("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Z=0;Z<C.length;Z++)if(C[Z].isOutputPass===!0){re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(tt)},this.getViewport=function(C){return C.copy(Tt)},this.setViewport=function(C,Z,st,it){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,Z,st,it),Rt.viewport(tt.copy(Tt).multiplyScalar(At).round())},this.getScissor=function(C){return C.copy(Ht)},this.setScissor=function(C,Z,st,it){C.isVector4?Ht.set(C.x,C.y,C.z,C.w):Ht.set(C,Z,st,it),Rt.scissor(ht.copy(Ht).multiplyScalar(At).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(C){Rt.setScissorTest(ne=C)},this.setOpaqueSort=function(C){ct=C},this.setTransparentSort=function(C){Mt=C},this.getClearColor=function(C){return C.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,st=!0){let it=0;if(C){let at=!1;if(X!==null){const Bt=X.texture.format;at=y.has(Bt)}if(at){const Bt=X.texture.type,Xt=S.has(Bt),zt=Dt.getClearColor(),qt=Dt.getClearAlpha(),Wt=zt.r,$t=zt.g,fe=zt.b;Xt?(A[0]=Wt,A[1]=$t,A[2]=fe,A[3]=qt,Y.clearBufferuiv(Y.COLOR,0,A)):(w[0]=Wt,w[1]=$t,w[2]=fe,w[3]=qt,Y.clearBufferiv(Y.COLOR,0,w))}else it|=Y.COLOR_BUFFER_BIT}Z&&(it|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),st&&(it|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),it!==0&&Y.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),W=C},this.dispose=function(){n.removeEventListener("webglcontextlost",Et,!1),n.removeEventListener("webglcontextrestored",Yt,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),Dt.dispose(),dt.dispose(),Pt.dispose(),F.dispose(),J.dispose(),wt.dispose(),Ct.dispose(),mt.dispose(),Ot.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",tl),Lt.removeEventListener("sessionend",el),kn.stop()};function Et(C){C.preventDefault(),bx("WebGLRenderer: Context Lost."),B=!0}function Yt(){bx("WebGLRenderer: Context Restored."),B=!1;const C=$e.autoReset,Z=Nt.enabled,st=Nt.autoUpdate,it=Nt.needsUpdate,at=Nt.type;It(),$e.autoReset=C,Nt.enabled=Z,Nt.autoUpdate=st,Nt.needsUpdate=it,Nt.type=at}function ae(C){we("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ln(C){const Z=C.target;Z.removeEventListener("dispose",ln),Oe(Z)}function Oe(C){Pi(C),F.remove(C)}function Pi(C){const Z=F.get(C).programs;Z!==void 0&&(Z.forEach(function(st){Ot.releaseProgram(st)}),C.isShaderMaterial&&Ot.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,st,it,at,Bt){Z===null&&(Z=_e);const Xt=at.isMesh&&at.matrixWorld.determinant()<0,zt=lr(C,Z,st,it,at);Rt.setMaterial(it,Xt);let qt=st.index,Wt=1;if(it.wireframe===!0){if(qt=bt.getWireframeAttribute(st),qt===void 0)return;Wt=2}const $t=st.drawRange,fe=st.attributes.position;let Qt=$t.start*Wt,Ue=($t.start+$t.count)*Wt;Bt!==null&&(Qt=Math.max(Qt,Bt.start*Wt),Ue=Math.min(Ue,(Bt.start+Bt.count)*Wt)),qt!==null?(Qt=Math.max(Qt,0),Ue=Math.min(Ue,qt.count)):fe!=null&&(Qt=Math.max(Qt,0),Ue=Math.min(Ue,fe.count));const an=Ue-Qt;if(an<0||an===1/0)return;Ct.setup(at,it,zt,st,qt);let Ze,Ge=oe;if(qt!==null&&(Ze=gt.get(qt),Ge=ge,Ge.setIndex(Ze)),at.isMesh)it.wireframe===!0?(Rt.setLineWidth(it.wireframeLinewidth*Ie()),Ge.setMode(Y.LINES)):Ge.setMode(Y.TRIANGLES);else if(at.isLine){let He=it.linewidth;He===void 0&&(He=1),Rt.setLineWidth(He*Ie()),at.isLineSegments?Ge.setMode(Y.LINES):at.isLineLoop?Ge.setMode(Y.LINE_LOOP):Ge.setMode(Y.LINE_STRIP)}else at.isPoints?Ge.setMode(Y.POINTS):at.isSprite&&Ge.setMode(Y.TRIANGLES);if(at.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))Ge.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const He=at._multiDrawStarts,kt=at._multiDrawCounts,Xn=at._multiDrawCount,ve=qt?gt.get(qt).bytesPerElement:1,Cn=F.get(it).currentProgram.getUniforms();for(let mi=0;mi<Xn;mi++)Cn.setValue(Y,"_gl_DrawID",mi),Ge.render(He[mi]/ve,kt[mi])}else if(at.isInstancedMesh)Ge.renderInstances(Qt,an,at.count);else if(st.isInstancedBufferGeometry){const He=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,kt=Math.min(st.instanceCount,He);Ge.renderInstances(Qt,an,kt)}else Ge.render(Qt,an)};function pi(C,Z,st){C.transparent===!0&&C.side===Ja&&C.forceSinglePass===!1?(C.side=ti,C.needsUpdate=!0,Gs(C,Z,st),C.side=Yr,C.needsUpdate=!0,Gs(C,Z,st),C.side=Ja):Gs(C,Z,st)}this.compile=function(C,Z,st=null){st===null&&(st=C),N=Pt.get(st),N.init(Z),T.push(N),st.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),C!==st&&C.traverseVisible(function(at){at.isLight&&at.layers.test(Z.layers)&&(N.pushLight(at),at.castShadow&&N.pushShadow(at))}),N.setupLights();const it=new Set;return C.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const Bt=at.material;if(Bt)if(Array.isArray(Bt))for(let Xt=0;Xt<Bt.length;Xt++){const zt=Bt[Xt];pi(zt,st,at),it.add(zt)}else pi(Bt,st,at),it.add(Bt)}),N=T.pop(),it},this.compileAsync=function(C,Z,st=null){const it=this.compile(C,Z,st);return new Promise(at=>{function Bt(){if(it.forEach(function(Xt){F.get(Xt).currentProgram.isReady()&&it.delete(Xt)}),it.size===0){at(C);return}setTimeout(Bt,10)}pe.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let $r=null;function $o(C){$r&&$r(C)}function tl(){kn.stop()}function el(){kn.start()}const kn=new dy;kn.setAnimationLoop($o),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){$r=C,Lt.setAnimationLoop(C),C===null?kn.stop():kn.start()},Lt.addEventListener("sessionstart",tl),Lt.addEventListener("sessionend",el),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){we("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;W!==null&&W.renderStart(C,Z);const st=Lt.enabled===!0&&Lt.isPresenting===!0,it=L!==null&&(X===null||st)&&L.begin(k,X);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,Z,X),N=Pt.get(C,T.length),N.init(Z),N.state.textureUnits=R.getTextureUnits(),T.push(N),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Jt.setFromProjectionMatrix(Ut,ya,Z.reversedDepth),ue=this.localClippingEnabled,Fe=Ft.init(this.clippingPlanes,ue),P=dt.get(C,O.length),P.init(),O.push(P),Lt.enabled===!0&&Lt.isPresenting===!0){const Xt=k.xr.getDepthSensingMesh();Xt!==null&&gn(Xt,Z,-1/0,k.sortObjects)}gn(C,Z,0,k.sortObjects),P.finish(),k.sortObjects===!0&&P.sort(ct,Mt),Re=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Re&&Dt.addToRenderList(P,C),this.info.render.frame++,Fe===!0&&Ft.beginShadows();const at=N.state.shadowsArray;if(Nt.render(at,C,Z),Fe===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&L.hasRenderPass())===!1){const Xt=P.opaque,zt=P.transmissive;if(N.setupLights(),Z.isArrayCamera){const qt=Z.cameras;if(zt.length>0)for(let Wt=0,$t=qt.length;Wt<$t;Wt++){const fe=qt[Wt];Ra(Xt,zt,C,fe)}Re&&Dt.render(C);for(let Wt=0,$t=qt.length;Wt<$t;Wt++){const fe=qt[Wt];Pn(P,C,fe,fe.viewport)}}else zt.length>0&&Ra(Xt,zt,C,Z),Re&&Dt.render(C),Pn(P,C,Z)}X!==null&&lt===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),it&&L.end(k),C.isScene===!0&&C.onAfterRender(k,C,Z),Ct.resetDefaultState(),z=-1,G=null,T.pop(),T.length>0?(N=T[T.length-1],R.setTextureUnits(N.state.textureUnits),Fe===!0&&Ft.setGlobalState(k.clippingPlanes,N.state.camera)):N=null,O.pop(),O.length>0?P=O[O.length-1]:P=null,W!==null&&W.renderEnd()};function gn(C,Z,st,it){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)st=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Jt.intersectsSprite(C)){it&&Kt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ut);const Xt=wt.update(C),zt=C.material;zt.visible&&P.push(C,Xt,zt,st,Kt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Jt.intersectsObject(C))){const Xt=wt.update(C),zt=C.material;if(it&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Kt.copy(C.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),Kt.copy(Xt.boundingSphere.center)),Kt.applyMatrix4(C.matrixWorld).applyMatrix4(Ut)),Array.isArray(zt)){const qt=Xt.groups;for(let Wt=0,$t=qt.length;Wt<$t;Wt++){const fe=qt[Wt],Qt=zt[fe.materialIndex];Qt&&Qt.visible&&P.push(C,Xt,Qt,st,Kt.z,fe)}}else zt.visible&&P.push(C,Xt,zt,st,Kt.z,null)}}const Bt=C.children;for(let Xt=0,zt=Bt.length;Xt<zt;Xt++)gn(Bt[Xt],Z,st,it)}function Pn(C,Z,st,it){const{opaque:at,transmissive:Bt,transparent:Xt}=C;N.setupLightsView(st),Fe===!0&&Ft.setGlobalState(k.clippingPlanes,st),it&&Rt.viewport(tt.copy(it)),at.length>0&&sr(at,Z,st),Bt.length>0&&sr(Bt,Z,st),Xt.length>0&&sr(Xt,Z,st),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Ra(C,Z,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[it.id]===void 0){const Qt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[it.id]=new ba(1,1,{generateMipmaps:!0,type:Qt?nr:Ci,minFilter:Cs,samples:Math.max(4,Ce.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Bt=N.state.transmissionRenderTarget[it.id],Xt=it.viewport||tt;Bt.setSize(Xt.z*k.transmissionResolutionScale,Xt.w*k.transmissionResolutionScale);const zt=k.getRenderTarget(),qt=k.getActiveCubeFace(),Wt=k.getActiveMipmapLevel();k.setRenderTarget(Bt),k.getClearColor(I),K=k.getClearAlpha(),K<1&&k.setClearColor(16777215,.5),k.clear(),Re&&Dt.render(st);const $t=k.toneMapping;k.toneMapping=Ea;const fe=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),N.setupLightsView(it),Fe===!0&&Ft.setGlobalState(k.clippingPlanes,it),sr(C,st,it),R.updateMultisampleRenderTarget(Bt),R.updateRenderTargetMipmap(Bt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ue=0,an=Z.length;Ue<an;Ue++){const Ze=Z[Ue],{object:Ge,geometry:He,material:kt,group:Xn}=Ze;if(kt.side===Ja&&Ge.layers.test(it.layers)){const ve=kt.side;kt.side=ti,kt.needsUpdate=!0,Ac(Ge,st,it,He,kt,Xn),kt.side=ve,kt.needsUpdate=!0,Qt=!0}}Qt===!0&&(R.updateMultisampleRenderTarget(Bt),R.updateRenderTargetMipmap(Bt))}k.setRenderTarget(zt,qt,Wt),k.setClearColor(I,K),fe!==void 0&&(it.viewport=fe),k.toneMapping=$t}function sr(C,Z,st){const it=Z.isScene===!0?Z.overrideMaterial:null;for(let at=0,Bt=C.length;at<Bt;at++){const Xt=C[at],{object:zt,geometry:qt,group:Wt}=Xt;let $t=Xt.material;$t.allowOverride===!0&&it!==null&&($t=it),zt.layers.test(st.layers)&&Ac(zt,Z,st,qt,$t,Wt)}}function Ac(C,Z,st,it,at,Bt){C.onBeforeRender(k,Z,st,it,at,Bt),C.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),at.onBeforeRender(k,Z,st,it,C,Bt),at.transparent===!0&&at.side===Ja&&at.forceSinglePass===!1?(at.side=ti,at.needsUpdate=!0,k.renderBufferDirect(st,Z,it,at,C,Bt),at.side=Yr,at.needsUpdate=!0,k.renderBufferDirect(st,Z,it,at,C,Bt),at.side=Ja):k.renderBufferDirect(st,Z,it,at,C,Bt),C.onAfterRender(k,Z,st,it,at,Bt)}function Gs(C,Z,st){Z.isScene!==!0&&(Z=_e);const it=F.get(C),at=N.state.lights,Bt=N.state.shadowsArray,Xt=at.state.version,zt=Ot.getParameters(C,at.state,Bt,Z,st,N.state.lightProbeGridArray),qt=Ot.getProgramCacheKey(zt);let Wt=it.programs;it.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?Z.environment:null,it.fog=Z.fog;const $t=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;it.envMap=J.get(C.envMap||it.environment,$t),it.envMapRotation=it.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,Wt===void 0&&(C.addEventListener("dispose",ln),Wt=new Map,it.programs=Wt);let fe=Wt.get(qt);if(fe!==void 0){if(it.currentProgram===fe&&it.lightsStateVersion===Xt)return or(C,zt),fe}else zt.uniforms=Ot.getUniforms(C),W!==null&&C.isNodeMaterial&&W.build(C,st,zt),C.onBeforeCompile(zt,k),fe=Ot.acquireProgram(zt,qt),Wt.set(qt,fe),it.uniforms=zt.uniforms;const Qt=it.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Qt.clippingPlanes=Ft.uniform),or(C,zt),it.needsLights=ts(C),it.lightsStateVersion=Xt,it.needsLights&&(Qt.ambientLightColor.value=at.state.ambient,Qt.lightProbe.value=at.state.probe,Qt.directionalLights.value=at.state.directional,Qt.directionalLightShadows.value=at.state.directionalShadow,Qt.spotLights.value=at.state.spot,Qt.spotLightShadows.value=at.state.spotShadow,Qt.rectAreaLights.value=at.state.rectArea,Qt.ltc_1.value=at.state.rectAreaLTC1,Qt.ltc_2.value=at.state.rectAreaLTC2,Qt.pointLights.value=at.state.point,Qt.pointLightShadows.value=at.state.pointShadow,Qt.hemisphereLights.value=at.state.hemi,Qt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Qt.spotLightMatrix.value=at.state.spotLightMatrix,Qt.spotLightMap.value=at.state.spotLightMap,Qt.pointShadowMatrix.value=at.state.pointShadowMatrix),it.lightProbeGrid=N.state.lightProbeGridArray.length>0,it.currentProgram=fe,it.uniformsList=null,fe}function nl(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=df.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function or(C,Z){const st=F.get(C);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function il(C,Z){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;D.setFromMatrixPosition(Z.matrixWorld);for(let st=0,it=C.length;st<it;st++){const at=C[st];if(at.texture!==null&&at.boundingBox.containsPoint(D))return at}return null}function lr(C,Z,st,it,at){Z.isScene!==!0&&(Z=_e),R.resetTextureUnits();const Bt=Z.fog,Xt=it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial?Z.environment:null,zt=X===null?k.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:be.workingColorSpace,qt=it.isMeshStandardMaterial||it.isMeshLambertMaterial&&!it.envMap||it.isMeshPhongMaterial&&!it.envMap,Wt=J.get(it.envMap||Xt,qt),$t=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,fe=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Qt=!!st.morphAttributes.position,Ue=!!st.morphAttributes.normal,an=!!st.morphAttributes.color;let Ze=Ea;it.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ze=k.toneMapping);const Ge=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,He=Ge!==void 0?Ge.length:0,kt=F.get(it),Xn=N.state.lights;if(Fe===!0&&(ue===!0||C!==G)){const ze=C===G&&it.id===z;Ft.setState(it,C,ze)}let ve=!1;it.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Xn.state.version||kt.outputColorSpace!==zt||at.isBatchedMesh&&kt.batching===!1||!at.isBatchedMesh&&kt.batching===!0||at.isBatchedMesh&&kt.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&kt.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&kt.instancing===!1||!at.isInstancedMesh&&kt.instancing===!0||at.isSkinnedMesh&&kt.skinning===!1||!at.isSkinnedMesh&&kt.skinning===!0||at.isInstancedMesh&&kt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&kt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&kt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&kt.instancingMorph===!1&&at.morphTexture!==null||kt.envMap!==Wt||it.fog===!0&&kt.fog!==Bt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Ft.numPlanes||kt.numIntersection!==Ft.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==fe||kt.morphTargets!==Qt||kt.morphNormals!==Ue||kt.morphColors!==an||kt.toneMapping!==Ze||kt.morphTargetsCount!==He||!!kt.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(ve=!0):(ve=!0,kt.__version=it.version);let Cn=kt.currentProgram;ve===!0&&(Cn=Gs(it,Z,at),W&&it.isNodeMaterial&&W.onUpdateProgram(it,Cn,kt));let mi=!1,Ji=!1,_i=!1;const Ve=Cn.getUniforms(),rn=kt.uniforms;if(Rt.useProgram(Cn.program)&&(mi=!0,Ji=!0,_i=!0),it.id!==z&&(z=it.id,Ji=!0),kt.needsLights){const ze=il(N.state.lightProbeGridArray,at);kt.lightProbeGrid!==ze&&(kt.lightProbeGrid=ze,Ji=!0)}if(mi||G!==C){Rt.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ve.setValue(Y,"projectionMatrix",C.projectionMatrix),Ve.setValue(Y,"viewMatrix",C.matrixWorldInverse);const ua=Ve.map.cameraPosition;ua!==void 0&&ua.setValue(Y,ee.setFromMatrixPosition(C.matrixWorld)),Ce.logarithmicDepthBuffer&&Ve.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&Ve.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Ji=!0,_i=!0)}if(kt.needsLights&&(Xn.state.directionalShadowMap.length>0&&Ve.setValue(Y,"directionalShadowMap",Xn.state.directionalShadowMap,R),Xn.state.spotShadowMap.length>0&&Ve.setValue(Y,"spotShadowMap",Xn.state.spotShadowMap,R),Xn.state.pointShadowMap.length>0&&Ve.setValue(Y,"pointShadowMap",Xn.state.pointShadowMap,R)),at.isSkinnedMesh){Ve.setOptional(Y,at,"bindMatrix"),Ve.setOptional(Y,at,"bindMatrixInverse");const ze=at.skeleton;ze&&(ze.boneTexture===null&&ze.computeBoneTexture(),Ve.setValue(Y,"boneTexture",ze.boneTexture,R))}at.isBatchedMesh&&(Ve.setOptional(Y,at,"batchingTexture"),Ve.setValue(Y,"batchingTexture",at._matricesTexture,R),Ve.setOptional(Y,at,"batchingIdTexture"),Ve.setValue(Y,"batchingIdTexture",at._indirectTexture,R),Ve.setOptional(Y,at,"batchingColorTexture"),at._colorsTexture!==null&&Ve.setValue(Y,"batchingColorTexture",at._colorsTexture,R));const $i=st.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&se.update(at,st,Cn),(Ji||kt.receiveShadow!==at.receiveShadow)&&(kt.receiveShadow=at.receiveShadow,Ve.setValue(Y,"receiveShadow",at.receiveShadow)),(it.isMeshStandardMaterial||it.isMeshLambertMaterial||it.isMeshPhongMaterial)&&it.envMap===null&&Z.environment!==null&&(rn.envMapIntensity.value=Z.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=KR()),Ji){if(Ve.setValue(Y,"toneMappingExposure",k.toneMappingExposure),kt.needsLights&&cr(rn,_i),Bt&&it.fog===!0&&ft.refreshFogUniforms(rn,Bt),ft.refreshMaterialUniforms(rn,it,At,yt,N.state.transmissionRenderTarget[C.id]),kt.needsLights&&kt.lightProbeGrid){const ze=kt.lightProbeGrid;rn.probesSH.value=ze.texture,rn.probesMin.value.copy(ze.boundingBox.min),rn.probesMax.value.copy(ze.boundingBox.max),rn.probesResolution.value.copy(ze.resolution)}df.upload(Y,nl(kt),rn,R)}if(it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(df.upload(Y,nl(kt),rn,R),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&Ve.setValue(Y,"center",at.center),Ve.setValue(Y,"modelViewMatrix",at.modelViewMatrix),Ve.setValue(Y,"normalMatrix",at.normalMatrix),Ve.setValue(Y,"modelMatrix",at.matrixWorld),it.uniformsGroups!==void 0){const ze=it.uniformsGroups;for(let ua=0,fr=ze.length;ua<fr;ua++){const es=ze[ua];mt.update(es,Cn),mt.bind(es,Cn)}}return Cn}function cr(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function ts(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return lt},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(C,Z,st){const it=F.get(C);it.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),F.get(C.texture).__webglTexture=Z,F.get(C.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:st,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const st=F.get(C);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const ur=Y.createFramebuffer();this.setRenderTarget=function(C,Z=0,st=0){X=C,$=Z,lt=st;let it=null,at=!1,Bt=!1;if(C){const zt=F.get(C);if(zt.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(Y.FRAMEBUFFER,zt.__webglFramebuffer),tt.copy(C.viewport),ht.copy(C.scissor),vt=C.scissorTest,Rt.viewport(tt),Rt.scissor(ht),Rt.setScissorTest(vt),z=-1;return}else if(zt.__webglFramebuffer===void 0)R.setupRenderTarget(C);else if(zt.__hasExternalTextures)R.rebindTextures(C,F.get(C.texture).__webglTexture,F.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $t=C.depthTexture;if(zt.__boundDepthTexture!==$t){if($t!==null&&F.has($t)&&(C.width!==$t.image.width||C.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(C)}}const qt=C.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Bt=!0);const Wt=F.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Wt[Z])?it=Wt[Z][st]:it=Wt[Z],at=!0):C.samples>0&&R.useMultisampledRTT(C)===!1?it=F.get(C).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[st]:it=Wt,tt.copy(C.viewport),ht.copy(C.scissor),vt=C.scissorTest}else tt.copy(Tt).multiplyScalar(At).floor(),ht.copy(Ht).multiplyScalar(At).floor(),vt=ne;if(st!==0&&(it=ur),Rt.bindFramebuffer(Y.FRAMEBUFFER,it)&&Rt.drawBuffers(C,it),Rt.viewport(tt),Rt.scissor(ht),Rt.setScissorTest(vt),at){const zt=F.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+Z,zt.__webglTexture,st)}else if(Bt){const zt=Z;for(let qt=0;qt<C.textures.length;qt++){const Wt=F.get(C.textures[qt]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+qt,Wt.__webglTexture,st,zt)}}else if(C!==null&&st!==0){const zt=F.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,zt.__webglTexture,st)}z=-1},this.readRenderTargetPixels=function(C,Z,st,it,at,Bt,Xt,zt=0){if(!(C&&C.isWebGLRenderTarget)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){Rt.bindFramebuffer(Y.FRAMEBUFFER,qt);try{const Wt=C.textures[zt],$t=Wt.format,fe=Wt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+zt),!Ce.textureFormatReadable($t)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ce.textureTypeReadable(fe)){we("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-it&&st>=0&&st<=C.height-at&&Y.readPixels(Z,st,it,at,q.convert($t),q.convert(fe),Bt)}finally{const Wt=X!==null?F.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(Y.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,st,it,at,Bt,Xt,zt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=F.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(Z>=0&&Z<=C.width-it&&st>=0&&st<=C.height-at){Rt.bindFramebuffer(Y.FRAMEBUFFER,qt);const Wt=C.textures[zt],$t=Wt.format,fe=Wt.type;if(C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+zt),!Ce.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ce.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Bt.byteLength,Y.STREAM_READ),Y.readPixels(Z,st,it,at,q.convert($t),q.convert(fe),0);const Ue=X!==null?F.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(Y.FRAMEBUFFER,Ue);const an=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await hb(Y,an,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Bt),Y.deleteBuffer(Qt),Y.deleteSync(an),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,st=0){const it=Math.pow(2,-st),at=Math.floor(C.image.width*it),Bt=Math.floor(C.image.height*it),Xt=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;R.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,st,0,0,Xt,zt,at,Bt),Rt.unbindTexture()};const yn=Y.createFramebuffer(),Rc=Y.createFramebuffer();this.copyTextureToTexture=function(C,Z,st=null,it=null,at=0,Bt=0){let Xt,zt,qt,Wt,$t,fe,Qt,Ue,an;const Ze=C.isCompressedTexture?C.mipmaps[Bt]:C.image;if(st!==null)Xt=st.max.x-st.min.x,zt=st.max.y-st.min.y,qt=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,$t=st.min.y,fe=st.isBox3?st.min.z:0;else{const rn=Math.pow(2,-at);Xt=Math.floor(Ze.width*rn),zt=Math.floor(Ze.height*rn),C.isDataArrayTexture?qt=Ze.depth:C.isData3DTexture?qt=Math.floor(Ze.depth*rn):qt=1,Wt=0,$t=0,fe=0}it!==null?(Qt=it.x,Ue=it.y,an=it.z):(Qt=0,Ue=0,an=0);const Ge=q.convert(Z.format),He=q.convert(Z.type);let kt;Z.isData3DTexture?(R.setTexture3D(Z,0),kt=Y.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(R.setTexture2DArray(Z,0),kt=Y.TEXTURE_2D_ARRAY):(R.setTexture2D(Z,0),kt=Y.TEXTURE_2D),Rt.activeTexture(Y.TEXTURE0),Rt.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Rt.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Rt.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment);const Xn=Rt.getParameter(Y.UNPACK_ROW_LENGTH),ve=Rt.getParameter(Y.UNPACK_IMAGE_HEIGHT),Cn=Rt.getParameter(Y.UNPACK_SKIP_PIXELS),mi=Rt.getParameter(Y.UNPACK_SKIP_ROWS),Ji=Rt.getParameter(Y.UNPACK_SKIP_IMAGES);Rt.pixelStorei(Y.UNPACK_ROW_LENGTH,Ze.width),Rt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ze.height),Rt.pixelStorei(Y.UNPACK_SKIP_PIXELS,Wt),Rt.pixelStorei(Y.UNPACK_SKIP_ROWS,$t),Rt.pixelStorei(Y.UNPACK_SKIP_IMAGES,fe);const _i=C.isDataArrayTexture||C.isData3DTexture,Ve=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const rn=F.get(C),$i=F.get(Z),ze=F.get(rn.__renderTarget),ua=F.get($i.__renderTarget);Rt.bindFramebuffer(Y.READ_FRAMEBUFFER,ze.__webglFramebuffer),Rt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ua.__webglFramebuffer);for(let fr=0;fr<qt;fr++)_i&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,F.get(C).__webglTexture,at,fe+fr),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,F.get(Z).__webglTexture,Bt,an+fr)),Y.blitFramebuffer(Wt,$t,Xt,zt,Qt,Ue,Xt,zt,Y.DEPTH_BUFFER_BIT,Y.NEAREST);Rt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(at!==0||C.isRenderTargetTexture||F.has(C)){const rn=F.get(C),$i=F.get(Z);Rt.bindFramebuffer(Y.READ_FRAMEBUFFER,yn),Rt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Rc);for(let ze=0;ze<qt;ze++)_i?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,rn.__webglTexture,at,fe+ze):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,rn.__webglTexture,at),Ve?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$i.__webglTexture,Bt,an+ze):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,$i.__webglTexture,Bt),at!==0?Y.blitFramebuffer(Wt,$t,Xt,zt,Qt,Ue,Xt,zt,Y.COLOR_BUFFER_BIT,Y.NEAREST):Ve?Y.copyTexSubImage3D(kt,Bt,Qt,Ue,an+ze,Wt,$t,Xt,zt):Y.copyTexSubImage2D(kt,Bt,Qt,Ue,Wt,$t,Xt,zt);Rt.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Ve?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(kt,Bt,Qt,Ue,an,Xt,zt,qt,Ge,He,Ze.data):Z.isCompressedArrayTexture?Y.compressedTexSubImage3D(kt,Bt,Qt,Ue,an,Xt,zt,qt,Ge,Ze.data):Y.texSubImage3D(kt,Bt,Qt,Ue,an,Xt,zt,qt,Ge,He,Ze):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Bt,Qt,Ue,Xt,zt,Ge,He,Ze.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Bt,Qt,Ue,Ze.width,Ze.height,Ge,Ze.data):Y.texSubImage2D(Y.TEXTURE_2D,Bt,Qt,Ue,Xt,zt,Ge,He,Ze);Rt.pixelStorei(Y.UNPACK_ROW_LENGTH,Xn),Rt.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,ve),Rt.pixelStorei(Y.UNPACK_SKIP_PIXELS,Cn),Rt.pixelStorei(Y.UNPACK_SKIP_ROWS,mi),Rt.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ji),Bt===0&&Z.generateMipmaps&&Y.generateMipmap(kt),Rt.unbindTexture()},this.initRenderTarget=function(C){F.get(C).__webglFramebuffer===void 0&&R.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),Rt.unbindTexture()},this.resetState=function(){$=0,lt=0,X=null,Rt.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ya}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}function Ka(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function yy(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}var Ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},dc={duration:.5,overwrite:!1,delay:0},r0,Vn,on,ji=1e8,Je=1/ji,Um=Math.PI*2,JR=Um/4,$R=0,My=Math.sqrt,tC=Math.cos,eC=Math.sin,On=function(t){return typeof t=="string"},mn=function(t){return typeof t=="function"},ar=function(t){return typeof t=="number"},s0=function(t){return typeof t>"u"},Aa=function(t){return typeof t=="object"},ci=function(t){return t!==!1},o0=function(){return typeof window<"u"},of=function(t){return mn(t)||On(t)},Ey=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qn=Array.isArray,nC=/random\([^)]+\)/g,iC=/,\s*/g,xS=/(?:-?\.?\d|\.)+/gi,by=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Po=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ty=/[+-]=-?[.\d]+/,aC=/[^,'"\[\]\s]+/gi,rC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,un,ga,Nm,l0,Li={},Mf={},Ay,Ry=function(t){return(Mf=qo(t,Li))&&di},c0=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},pc=function(t,n){return!n&&console.warn(t)},Cy=function(t,n){return t&&(Li[t]=n)&&Mf&&(Mf[t]=n)||Li},mc=function(){return 0},sC={suppressEvents:!0,isStart:!0,kill:!1},pf={suppressEvents:!0,kill:!1},oC={suppressEvents:!0},u0={},qr=[],Lm={},wy,Ri={},Dp={},SS=30,mf=[],f0="",h0=function(t){var n=t[0],a,s;if(Aa(n)||mn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=mf.length;s--&&!mf[s].targetTest(n););a=mf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Qy(t[s],a)))||t.splice(s,1);return t},Us=function(t){return t._gsap||h0(Yi(t))[0]._gsap},Dy=function(t,n,a){return(a=t[n])&&mn(a)?t[n]():s0(a)&&t.getAttribute&&t.getAttribute(n)||a},ui=function(t,n){return(t=t.split(",")).forEach(n)||t},Sn=function(t){return Math.round(t*1e5)/1e5||0},cn=function(t){return Math.round(t*1e7)/1e7||0},Io=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},lC=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},Ef=function(){var t=qr.length,n=qr.slice(0),a,s;for(Lm={},qr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},d0=function(t){return!!(t._initted||t._startAt||t.add)},Uy=function(t,n,a,s){qr.length&&!Vn&&Ef(),t.render(n,a,!!(Vn&&n<0&&d0(t))),qr.length&&!Vn&&Ef()},Ny=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(aC).length<2?n:On(t)?t.trim():t},Ly=function(t){return t},Oi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},cC=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},qo=function(t,n){for(var a in n)t[a]=n[a];return t},yS=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Aa(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},bf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},sc=function(t){var n=t.parent||un,a=t.keyframes?cC(Qn(t.keyframes)):Oi;if(ci(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},uC=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},Oy=function(t,n,a,s,l){var u=t[s],f;if(l)for(f=n[l];u&&u[l]>f;)u=u._prev;return u?(n._next=u._next,u._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=u,n.parent=n._dp=t,n},Ff=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var l=n._prev,u=n._next;l?l._next=u:t[a]===n&&(t[a]=u),u?u._prev=l:t[s]===n&&(t[s]=l),n._next=n._prev=n.parent=null},Zr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ns=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},fC=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Om=function(t,n,a,s){return t._startAt&&(Vn?t._startAt.revert(pf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},hC=function o(t){return!t||t._ts&&o(t.parent)},MS=function(t){return t._repeat?jo(t._tTime,t=t.duration()+t._rDelay)*t:0},jo=function(t,n){var a=Math.floor(t=cn(t/n));return t&&a===t?a-1:a},Tf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},zf=function(t){return t._end=cn(t._start+(t._tDur/Math.abs(t._ts||t._rts||Je)||0))},Bf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=cn(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),zf(t),a._dirty||Ns(a,t)),t},Py=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Tf(t.rawTime(),n),(!n._dur||Tc(0,n.totalDuration(),a)-n._tTime>Je)&&n.render(a,!0)),Ns(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Je}},xa=function(t,n,a,s){return n.parent&&Zr(n),n._start=cn((ar(a)?a:a||t!==un?Wi(t,a,n):t._time)+n._delay),n._end=cn(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Oy(t,n,"_first","_last",t._sort?"_start":0),Pm(n)||(t._recent=n),s||Py(t,n),t._ts<0&&Bf(t,t._tTime),t},Fy=function(t,n){return(Li.ScrollTrigger||c0("scrollTrigger",n))&&Li.ScrollTrigger.create(n,t)},zy=function(t,n,a,s,l){if(m0(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!Vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&wy!==wi.frame)return qr.push(t),t._lazy=[l,s],1},dC=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Pm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},pC=function(t,n,a,s){var l=t.ratio,u=n<0||!n&&(!t._start&&dC(t)&&!(!t._initted&&Pm(t))||(t._ts<0||t._dp._ts<0)&&!Pm(t))?0:1,f=t._rDelay,p=0,d,_,v;if(f&&t._repeat&&(p=Tc(0,t._tDur,n),_=jo(p,f),t._yoyo&&_&1&&(u=1-u),_!==jo(t._tTime,f)&&(l=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==l||Vn||s||t._zTime===Je||!n&&t._zTime){if(!t._initted&&zy(t,n,s,a,p))return;for(v=t._zTime,t._zTime=n||(a?Je:0),a||(a=n&&!v),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=p,d=t._pt;d;)d.r(u,d.d),d=d._next;n<0&&Om(t,n,a,!0),t._onUpdate&&!a&&Di(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Di(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===u&&(u&&Zr(t,1),!a&&!Vn&&(Di(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},mC=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Yo=function(t,n,a,s){var l=t._repeat,u=cn(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=u/t._dur),t._dur=u,t._tDur=l?l<0?1e10:cn(u*(l+1)+t._rDelay*l):u,f>0&&!s&&Bf(t,t._tTime=t._tDur*f),t.parent&&zf(t),a||Ns(t.parent,t),t},ES=function(t){return t instanceof li?Ns(t):Yo(t,t._dur)},_C={_start:0,endTime:mc,totalDuration:mc},Wi=function o(t,n,a){var s=t.labels,l=t._recent||_C,u=t.duration()>=ji?l.endTime(!1):t._dur,f,p,d;return On(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=u),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Qn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:u+p)):n==null?u:+n},oc=function(t,n,a){var s=ar(n[1]),l=(s?2:1)+(t<2?0:1),u=n[l],f,p;if(s&&(u.duration=n[1]),u.parent=a,t){for(f=u,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=ci(p.vars.inherit)&&p.parent;u.immediateRender=ci(f.immediateRender),t<2?u.runBackwards=1:u.startAt=n[l-1]}return new Rn(n[0],u,n[l+1])},Jr=function(t,n){return t||t===0?n(t):n},Tc=function(t,n,a){return a<t?t:a>n?n:a},Yn=function(t,n){return!On(t)||!(n=rC.exec(t))?"":n[1]},gC=function(t,n,a){return Jr(a,function(s){return Tc(t,n,s)})},Fm=[].slice,By=function(t,n){return t&&Aa(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Aa(t[0]))&&!t.nodeType&&t!==ga},vC=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var l;return On(s)&&!n||By(s,1)?(l=a).push.apply(l,Yi(s)):a.push(s)})||a},Yi=function(t,n,a){return on&&!n&&on.selector?on.selector(t):On(t)&&!a&&(Nm||!Zo())?Fm.call((n||l0).querySelectorAll(t),0):Qn(t)?vC(t,a):By(t)?Fm.call(t,0):t?[t]:[]},zm=function(t){return t=Yi(t)[0]||pc("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Yi(n,a.querySelectorAll?a:a===t?pc("Invalid scope")||l0.createElement("div"):t)}},Iy=function(t){return t.sort(function(){return .5-Math.random()})},Gy=function(t){if(mn(t))return t;var n=Aa(t)?t:{each:t},a=Ls(n.ease),s=n.from||0,l=parseFloat(n.base)||0,u={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,v=s;return On(s)?_=v={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],v=s[1]),function(g,x,M){var E=(M||n).length,y=u[E],S,A,w,D,P,N,O,T,L;if(!y){if(L=n.grid==="auto"?0:(n.grid||[1,ji])[1],!L){for(O=-ji;O<(O=M[L++].getBoundingClientRect().left)&&L<E;);L<E&&L--}for(y=u[E]=[],S=p?Math.min(L,E)*_-.5:s%L,A=L===ji?0:p?E*v/L-.5:s/L|0,O=0,T=ji,N=0;N<E;N++)w=N%L-S,D=A-(N/L|0),y[N]=P=d?Math.abs(d==="y"?D:w):My(w*w+D*D),P>O&&(O=P),P<T&&(T=P);s==="random"&&Iy(y),y.max=O-T,y.min=T,y.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(L>E?E-1:d?d==="y"?E/L:L:Math.max(L,E/L))||0)*(s==="edges"?-1:1),y.b=E<0?l-E:l,y.u=Yn(n.amount||n.each)||0,a=a&&E<0?UC(a):a}return E=(y[g]-y.min)/y.max||0,cn(y.b+(a?a(E):E)*y.v)+y.u}},Bm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=cn(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(ar(a)?0:Yn(a))}},Hy=function(t,n){var a=Qn(t),s,l;return!a&&Aa(t)&&(s=a=t.radius||ji,t.values?(t=Yi(t.values),(l=!ar(t[0]))&&(s*=s)):t=Bm(t.increment)),Jr(n,a?mn(t)?function(u){return l=t(u),Math.abs(l-u)<=s?l:u}:function(u){for(var f=parseFloat(l?u.x:u),p=parseFloat(l?u.y:0),d=ji,_=0,v=t.length,g,x;v--;)l?(g=t[v].x-f,x=t[v].y-p,g=g*g+x*x):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!s||d<=s?t[_]:u,l||_===u||ar(u)?_:_+Yn(u)}:Bm(t))},Vy=function(t,n,a,s){return Jr(Qn(t)?!n:a===!0?!!(a=0):!s,function(){return Qn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},xC=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(l,u){return u(l)},s)}},SC=function(t,n){return function(a){return t(parseFloat(a))+(n||Yn(a))}},yC=function(t,n,a){return Xy(t,n,0,1,a)},ky=function(t,n,a){return Jr(a,function(s){return t[~~n(s)]})},MC=function o(t,n,a){var s=n-t;return Qn(t)?ky(t,o(0,t.length),n):Jr(a,function(l){return(s+(l-t)%s)%s+t})},EC=function o(t,n,a){var s=n-t,l=s*2;return Qn(t)?ky(t,o(0,t.length-1),n):Jr(a,function(u){return u=(l+(u-t)%l)%l||0,t+(u>s?l-u:u)})},_c=function(t){return t.replace(nC,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(iC);return Vy(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},Xy=function(t,n,a,s,l){var u=n-t,f=s-a;return Jr(l,function(p){return a+((p-t)/u*f||0)})},bC=function o(t,n,a,s){var l=isNaN(t+n)?0:function(x){return(1-x)*t+x*n};if(!l){var u=On(t),f={},p,d,_,v,g;if(a===!0&&(s=1)&&(a=null),u)t={p:t},n={p:n};else if(Qn(t)&&!Qn(n)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(o(t[d-1],t[d]));v--,l=function(M){M*=v;var E=Math.min(g,~~M);return _[E](M-E)},a=n}else s||(t=qo(Qn(t)?[]:{},t));if(!_){for(p in n)p0.call(f,t,p,"get",n[p]);l=function(M){return v0(M,f)||(u?t.p:t)}}}return Jr(a,l)},bS=function(t,n,a){var s=t.labels,l=ji,u,f,p;for(u in s)f=s[u]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=u,l=f);return p},Di=function(t,n,a){var s=t.vars,l=s[n],u=on,f=t._ctx,p,d,_;if(l)return p=s[n+"Params"],d=s.callbackScope||t,a&&qr.length&&Ef(),f&&(on=f),_=p?l.apply(d,p):l.call(d),on=u,_},ac=function(t){return Zr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vn),t.progress()<1&&Di(t,"onInterrupt"),t},Fo,Wy=[],qy=function(t){if(t)if(t=!t.name&&t.default||t,o0()||t.headless){var n=t.name,a=mn(t),s=n&&!a&&t.init?function(){this._props=[]}:t,l={init:mc,render:v0,add:p0,kill:HC,modifier:GC,rawVars:0},u={targetTest:0,get:0,getSetter:g0,aliases:{},register:0};if(Zo(),t!==s){if(Ri[n])return;Oi(s,Oi(bf(t,l),u)),qo(s.prototype,qo(l,bf(t,u))),Ri[s.prop=n]=s,t.targetTest&&(mf.push(s),u0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Cy(n,s),t.register&&t.register(di,s,fi)}else Wy.push(t)},Qe=255,rc={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Up=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*Qe+.5|0},jy=function(t,n,a){var s=t?ar(t)?[t>>16,t>>8&Qe,t&Qe]:0:rc.black,l,u,f,p,d,_,v,g,x,M;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),rc[t])s=rc[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),u=t.charAt(2),f=t.charAt(3),t="#"+l+l+u+u+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&Qe,s&Qe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&Qe,t&Qe]}else if(t.substr(0,3)==="hsl"){if(s=M=t.match(xS),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,u=_<=.5?_*(d+1):_+d-_*d,l=_*2-u,s.length>3&&(s[3]*=1),s[0]=Up(p+1/3,l,u),s[1]=Up(p,l,u),s[2]=Up(p-1/3,l,u);else if(~t.indexOf("="))return s=t.match(by),a&&s.length<4&&(s[3]=1),s}else s=t.match(xS)||rc.transparent;s=s.map(Number)}return n&&!M&&(l=s[0]/Qe,u=s[1]/Qe,f=s[2]/Qe,v=Math.max(l,u,f),g=Math.min(l,u,f),_=(v+g)/2,v===g?p=d=0:(x=v-g,d=_>.5?x/(2-v-g):x/(v+g),p=v===l?(u-f)/x+(u<f?6:0):v===u?(f-l)/x+2:(l-u)/x+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},Yy=function(t){var n=[],a=[],s=-1;return t.split(jr).forEach(function(l){var u=l.match(Po)||[];n.push.apply(n,u),a.push(s+=u.length+1)}),n.c=a,n},TS=function(t,n,a){var s="",l=(t+s).match(jr),u=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!l)return t;if(l=l.map(function(g){return(g=jy(g,n,1))&&u+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=Yy(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(jr,"1").split(Po),v=d.length-1;f<v;f++)s+=d[f]+(~p.indexOf(f)?l.shift()||u+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(jr),v=d.length-1;f<v;f++)s+=d[f]+l[f];return s+d[v]},jr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in rc)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),TC=/hsl[a]?\(/,Zy=function(t){var n=t.join(" "),a;if(jr.lastIndex=0,jr.test(n))return a=TC.test(n),t[1]=TS(t[1],a),t[0]=TS(t[0],a,Yy(t[1])),!0},gc,wi=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,l=1e3/240,u=l,f=[],p,d,_,v,g,x,M=function E(y){var S=o()-s,A=y===!0,w,D,P,N;if((S>t||S<0)&&(a+=S-n),s+=S,P=s-a,w=P-u,(w>0||A)&&(N=++v.frame,g=P-v.time*1e3,v.time=P=P/1e3,u+=w+(w>=l?4:l-w),D=1),A||(p=d(E)),D)for(x=0;x<f.length;x++)f[x](P,g,N,y)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(y){return g/(1e3/(y||60))},wake:function(){Ay&&(!Nm&&o0()&&(ga=Nm=window,l0=ga.document||{},Li.gsap=di,(ga.gsapVersions||(ga.gsapVersions=[])).push(di.version),Ry(Mf||ga.GreenSockGlobals||!ga.gsap&&ga||{}),Wy.forEach(qy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(y){return setTimeout(y,u-v.time*1e3+1|0)},gc=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),gc=0,d=mc},lagSmoothing:function(y,S){t=y||1/0,n=Math.min(S||33,t)},fps:function(y){l=1e3/(y||240),u=v.time*1e3+l},add:function(y,S,A){var w=S?function(D,P,N,O){y(D,P,N,O),v.remove(w)}:y;return v.remove(y),f[A?"unshift":"push"](w),Zo(),w},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},v})(),Zo=function(){return!gc&&wi.wake()},Ae={},AC=/^[\d.\-M][\d.\-,\s]/,RC=/["']/g,CC=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],l=1,u=a.length,f,p,d;l<u;l++)p=a[l],f=l!==u-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(RC,"").trim():+d,s=p.substr(f+1).trim();return n},wC=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},DC=function(t){var n=(t+"").split("("),a=Ae[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[CC(n[1])]:wC(t).split(",").map(Ny)):Ae._CE&&AC.test(t)?Ae._CE("",t):a},UC=function(t){return function(n){return 1-t(1-n)}},Ls=function(t,n){return t&&(mn(t)?t:Ae[t]||DC(t))||n},Is=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:s},u;return ui(t,function(f){Ae[f]=Li[f]=l,Ae[u=f.toLowerCase()]=a;for(var p in l)Ae[u+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ae[f+"."+p]=l[p]}),l},Ky=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Np=function o(t,n,a){var s=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),u=l/Um*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*eC((_-u)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:Ky(f);return l=Um/l,p.config=function(d,_){return o(t,d,_)},p},Lp=function o(t,n){n===void 0&&(n=1.70158);var a=function(u){return u?--u*u*((n+1)*u+n)+1:0},s=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:Ky(a);return s.config=function(l){return o(t,l)},s};ui("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Is(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ae.Linear.easeNone=Ae.none=Ae.Linear.easeIn;Is("Elastic",Np("in"),Np("out"),Np());(function(o,t){var n=1/t,a=2*n,s=2.5*n,l=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Is("Bounce",function(u){return 1-l(1-u)},l)})(7.5625,2.75);Is("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Is("Circ",function(o){return-(My(1-o*o)-1)});Is("Sine",function(o){return o===1?1:-tC(o*JR)+1});Is("Back",Lp("in"),Lp("out"),Lp());Ae.SteppedEase=Ae.steps=Li.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),l=n?1:0,u=1-Je;return function(f){return((s*Tc(0,u,f)|0)+l)*a}}};dc.ease=Ae["quad.out"];ui("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return f0+=o+","+o+"Params,"});var Qy=function(t,n){this.id=$R++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Dy,this.set=n?n.getSetter:g0},vc=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Yo(this,+n.duration,1,1),this.data=n.data,on&&(this._ctx=on,on.data.push(this)),gc||wi.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Zo(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Bf(this,a),!l._dp||l.parent||Py(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&xa(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Je||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),Uy(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+MS(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+MS(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,s):this._repeat?jo(this._tTime,l)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Tf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Je?0:this._rts,this.totalTime(Tc(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),zf(this),fC(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=cn(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&xa(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(ci(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Tf(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=oC);var s=Vn;return Vn=a,d0(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Vn=s,this},t.globalTime=function(a){for(var s=this,l=arguments.length?a:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,ES(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,ES(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Wi(this,a),ci(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,ci(s)),this._dur||(this._zTime=-Je),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Je:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=s&&l<this.endTime(!0)-Je)},t.eventCallback=function(a,s,l){var u=this.vars;return arguments.length>1?(s?(u[a]=s,l&&(u[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=s)):delete u[a],this):u[a]},t.then=function(a){var s=this,l=s._prom;return new Promise(function(u){var f=mn(a)?a:Ly,p=function(){var _=s.then;s.then=null,l&&l(),mn(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=_),u(f),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){ac(this)},o})();Oi(vc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var li=(function(o){yy(t,o);function t(a,s){var l;return a===void 0&&(a={}),l=o.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=ci(a.sortChildren),un&&xa(a.parent||un,Ka(l),s),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&Fy(Ka(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(s,l,u){return oc(0,arguments,this),this},n.from=function(s,l,u){return oc(1,arguments,this),this},n.fromTo=function(s,l,u,f){return oc(2,arguments,this),this},n.set=function(s,l,u){return l.duration=0,l.parent=this,sc(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Rn(s,l,Wi(this,u),1),this},n.call=function(s,l,u){return xa(this,Rn.delayedCall(0,s,l),u)},n.staggerTo=function(s,l,u,f,p,d,_){return u.duration=l,u.stagger=u.stagger||f,u.onComplete=d,u.onCompleteParams=_,u.parent=this,new Rn(s,u,Wi(this,p)),this},n.staggerFrom=function(s,l,u,f,p,d,_){return u.runBackwards=1,sc(u).immediateRender=ci(u.immediateRender),this.staggerTo(s,l,u,f,p,d,_)},n.staggerFromTo=function(s,l,u,f,p,d,_,v){return f.startAt=u,sc(f).immediateRender=ci(f.immediateRender),this.staggerTo(s,l,f,p,d,_,v)},n.render=function(s,l,u){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:cn(s),v=this._zTime<0!=s<0&&(this._initted||!d),g,x,M,E,y,S,A,w,D,P,N,O;if(this!==un&&_>p&&s>=0&&(_=p),_!==this._tTime||u||v){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),g=_,D=this._start,w=this._ts,S=!w,v&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(N=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,u);if(g=cn(_%y),_===p?(E=this._repeat,g=d):(P=cn(_/y),E=~~P,E&&E===P&&(g=d,E--),g>d&&(g=d)),P=jo(this._tTime,y),!f&&this._tTime&&P!==E&&this._tTime-P*y-this._dur<=0&&(P=E),N&&E&1&&(g=d-g,O=1),E!==P&&!this._lock){var T=N&&P&1,L=T===(N&&E&1);if(E<P&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(O?0:cn(E*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&Di(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1,P=E),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,L&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=mC(this,cn(f),cn(g)),A&&(_-=g-(g=A._start))),this._tTime=_,this._time=g,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&d&&!l&&!P&&(Di(this,"onStart"),this._tTime!==_))return this;if(g>=f&&s>=0)for(x=this._first;x;){if(M=x._next,(x._act||g>=x._start)&&x._ts&&A!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(g-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(g-x._start)*x._ts,l,u),g!==this._time||!this._ts&&!S){A=0,M&&(_+=this._zTime=-Je);break}}x=M}else{x=this._last;for(var k=s<0?s:g;x;){if(M=x._prev,(x._act||k<=x._end)&&x._ts&&A!==x){if(x.parent!==this)return this.render(s,l,u);if(x.render(x._ts>0?(k-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(k-x._start)*x._ts,l,u||Vn&&d0(x)),g!==this._time||!this._ts&&!S){A=0,M&&(_+=this._zTime=k?-Je:Je);break}}x=M}}if(A&&!l&&(this.pause(),A.render(g>=f?0:-Je)._zTime=g>=f?1:-1,this._ts))return this._start=D,zf(this),this.render(s,l,u);this._onUpdate&&!l&&Di(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(D===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Zr(this,1),!l&&!(s<0&&!f)&&(_||f||!p)&&(Di(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,l){var u=this;if(ar(l)||(l=Wi(this,l,s)),!(s instanceof vc)){if(Qn(s))return s.forEach(function(f){return u.add(f,l)}),this;if(On(s))return this.addLabel(s,l);if(mn(s))s=Rn.delayedCall(0,s);else return this}return this!==s?xa(this,s,l):this},n.getChildren=function(s,l,u,f){s===void 0&&(s=!0),l===void 0&&(l=!0),u===void 0&&(u=!0),f===void 0&&(f=-ji);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof Rn?l&&p.push(d):(u&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,l,u)))),d=d._next;return p},n.getById=function(s){for(var l=this.getChildren(1,1,1),u=l.length;u--;)if(l[u].vars.id===s)return l[u]},n.remove=function(s){return On(s)?this.removeLabel(s):mn(s)?this.killTweensOf(s):(s.parent===this&&Ff(this,s),s===this._recent&&(this._recent=this._last),Ns(this))},n.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=cn(wi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},n.addLabel=function(s,l){return this.labels[s]=Wi(this,l),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,l,u){var f=Rn.delayedCall(0,l||mc,u);return f.data="isPause",this._hasPause=1,xa(this,f,Wi(this,s))},n.removePause=function(s){var l=this._first;for(s=Wi(this,s);l;)l._start===s&&l.data==="isPause"&&Zr(l),l=l._next},n.killTweensOf=function(s,l,u){for(var f=this.getTweensOf(s,u),p=f.length;p--;)kr!==f[p]&&f[p].kill(s,l);return this},n.getTweensOf=function(s,l){for(var u=[],f=Yi(s),p=this._first,d=ar(l),_;p;)p instanceof Rn?lC(p._targets,f)&&(d?(!kr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&u.push(p):(_=p.getTweensOf(f,l)).length&&u.push.apply(u,_),p=p._next;return u},n.tweenTo=function(s,l){l=l||{};var u=this,f=Wi(u,s),p=l,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,x,M=Rn.to(u,Oi({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:u._time))/u.timeScale())||Je,onStart:function(){if(u.pause(),!x){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:u._time))/u.timeScale());M._dur!==y&&Yo(M,y,0,1).render(M._time,!0,!0),x=1}_&&_.apply(M,v||[])}},l));return g?M.render(0):M},n.tweenFromTo=function(s,l,u){return this.tweenTo(l,Oi({startAt:{time:Wi(this,s)}},u))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),bS(this,Wi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),bS(this,Wi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Je)},n.shiftChildren=function(s,l,u){u===void 0&&(u=0);var f=this._first,p=this.labels,d;for(s=cn(s);f;)f._start>=u&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in p)p[d]>=u&&(p[d]+=s);return Ns(this)},n.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,u;l;)u=l._next,this.remove(l),l=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ns(this)},n.totalDuration=function(s){var l=0,u=this,f=u._last,p=ji,d,_,v;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(v=u.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&u._sort&&f._ts&&!u._lock?(u._lock=1,xa(u,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!v&&!u._dp||v&&v.smoothChildTiming)&&(u._start+=cn(_/u._ts),u._time-=_,u._tTime-=_),u.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Yo(u,u===un&&u._time>l?u._time:l,1,1),u._dirty=0}return u._tDur},t.updateRoot=function(s){if(un._ts&&(Uy(un,Tf(s,un)),wy=wi.frame),wi.frame>=SS){SS+=Ni.autoSleep||120;var l=un._first;if((!l||!l._ts)&&Ni.autoSleep&&wi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||wi.sleep()}}},t})(vc);Oi(li.prototype,{_lock:0,_hasPause:0,_forcing:0});var NC=function(t,n,a,s,l,u,f){var p=new fi(this._pt,t,n,0,1,i1,null,l),d=0,_=0,v,g,x,M,E,y,S,A;for(p.b=a,p.e=s,a+="",s+="",(S=~s.indexOf("random("))&&(s=_c(s)),u&&(A=[a,s],u(A,t,n),a=A[0],s=A[1]),g=a.match(wp)||[];v=wp.exec(s);)M=v[0],E=s.substring(d,v.index),x?x=(x+1)%5:E.substr(-5)==="rgba("&&(x=1),M!==g[_++]&&(y=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:y,c:M.charAt(1)==="="?Io(y,M)-y:parseFloat(M)-y,m:x&&x<4?Math.round:0},d=wp.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,(Ty.test(s)||S)&&(p.e=0),this._pt=p,p},p0=function(t,n,a,s,l,u,f,p,d,_){mn(s)&&(s=s(l||0,t,u));var v=t[n],g=a!=="get"?a:mn(v)?d?t[n.indexOf("set")||!mn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():v,x=mn(v)?d?zC:e1:_0,M;if(On(s)&&(~s.indexOf("random(")&&(s=_c(s)),s.charAt(1)==="="&&(M=Io(g,s)+(Yn(g)||0),(M||M===0)&&(s=M))),!_||g!==s||Im)return!isNaN(g*s)&&s!==""?(M=new fi(this._pt,t,n,+g||0,s-(g||0),typeof v=="boolean"?IC:n1,0,x),d&&(M.fp=d),f&&M.modifier(f,this,t),this._pt=M):(!v&&!(n in t)&&c0(n,s),NC.call(this,t,n,g,s,x,p||Ni.stringFilter,d))},LC=function(t,n,a,s,l){if(mn(t)&&(t=lc(t,l,n,a,s)),!Aa(t)||t.style&&t.nodeType||Qn(t)||Ey(t))return On(t)?lc(t,l,n,a,s):t;var u={},f;for(f in t)u[f]=lc(t[f],l,n,a,s);return u},Jy=function(t,n,a,s,l,u){var f,p,d,_;if(Ri[t]&&(f=new Ri[t]).init(l,f.rawVars?n[t]:LC(n[t],s,l,u,a),a,s,u)!==!1&&(a._pt=p=new fi(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==Fo))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},kr,Im,m0=function o(t,n,a){var s=t.vars,l=s.ease,u=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,v=s.yoyoEase,g=s.keyframes,x=s.autoRevert,M=t._dur,E=t._startAt,y=t._targets,S=t.parent,A=S&&S.data==="nested"?S.vars.targets:y,w=t._overwrite==="auto"&&!r0,D=t.timeline,P=s.easeReverse||v,N,O,T,L,k,B,W,$,lt,X,z,G,tt;if(D&&(!g||!l)&&(l="none"),t._ease=Ls(l,dc.ease),t._rEase=P&&(Ls(P)||t._ease),t._from=!D&&!!s.runBackwards,t._from&&(t.ratio=1),!D||g&&!s.stagger){if($=y[0]?Us(y[0]).harness:0,G=$&&s[$.prop],N=bf(s,u0),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!x?E.render(-1,!0):E.revert(_&&M?pf:sC),E._lazy=0),u){if(Zr(t._startAt=Rn.set(y,Oi({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!E&&ci(p),startAt:null,delay:0,onUpdate:d&&function(){return Di(t,"onUpdate")},stagger:0},u))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vn||!f&&!x)&&t._startAt.revert(pf),f&&M&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&M&&!E){if(n&&(f=!1),T=Oi({overwrite:!1,data:"isFromStart",lazy:f&&!E&&ci(p),immediateRender:f,stagger:0,parent:S},N),G&&(T[$.prop]=G),Zr(t._startAt=Rn.set(y,T)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vn?t._startAt.revert(pf):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,Je,Je);else if(!n)return}for(t._pt=t._ptCache=0,p=M&&ci(p)||p&&!M,O=0;O<y.length;O++){if(k=y[O],W=k._gsap||h0(y)[O]._gsap,t._ptLookup[O]=X={},Lm[W.id]&&qr.length&&Ef(),z=A===y?O:A.indexOf(k),$&&(lt=new $).init(k,G||N,t,z,A)!==!1&&(t._pt=L=new fi(t._pt,k,lt.name,0,1,lt.render,lt,0,lt.priority),lt._props.forEach(function(ht){X[ht]=L}),lt.priority&&(B=1)),!$||G)for(T in N)Ri[T]&&(lt=Jy(T,N,t,z,k,A))?lt.priority&&(B=1):X[T]=L=p0.call(t,k,T,"get",N[T],z,A,0,s.stringFilter);t._op&&t._op[O]&&t.kill(k,t._op[O]),w&&t._pt&&(kr=t,un.killTweensOf(k,X,t.globalTime(n)),tt=!t.parent,kr=0),t._pt&&p&&(Lm[W.id]=1)}B&&a1(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!tt,g&&n<=0&&D.render(ji,!0,!0)},OC=function(t,n,a,s,l,u,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,v,g,x;if(!d)for(d=t._ptCache[n]=[],g=t._ptLookup,x=t._targets.length;x--;){if(_=g[x][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Im=1,t.vars[n]="+=0",m0(t,f),Im=0,p?pc(n+" not eligible for reset. Try splitting into individual properties"):1;d.push(_)}for(x=d.length;x--;)v=d[x],_=v._pt||v,_.s=(s||s===0)&&!l?s:_.s+(s||0)+u*_.c,_.c=a-_.s,v.e&&(v.e=Sn(a)+Yn(v.e)),v.b&&(v.b=_.s+Yn(v.b))},PC=function(t,n){var a=t[0]?Us(t[0]).harness:0,s=a&&a.aliases,l,u,f,p;if(!s)return n;l=qo({},n);for(u in s)if(u in l)for(p=s[u].split(","),f=p.length;f--;)l[p[f]]=l[u];return l},FC=function(t,n,a,s){var l=n.ease||s||"power1.inOut",u,f;if(Qn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(u in n)f=a[u]||(a[u]=[]),u==="ease"||f.push({t:parseFloat(t),v:n[u],e:l})},lc=function(t,n,a,s,l){return mn(t)?t.call(n,a,s,l):On(t)&&~t.indexOf("random(")?_c(t):t},$y=f0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",t1={};ui($y+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return t1[o]=1});var Rn=(function(o){yy(t,o);function t(a,s,l,u){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=o.call(this,u?s:sc(s))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,x=p.overwrite,M=p.keyframes,E=p.defaults,y=p.scrollTrigger,S=s.parent||un,A=(Qn(a)||Ey(a)?ar(a[0]):"length"in s)?[a]:Yi(a),w,D,P,N,O,T,L,k;if(f._targets=A.length?h0(A):pc("GSAP target "+a+" not found. https://gsap.com",!Ni.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,M||g||of(d)||of(_)){s=f.vars;var B=s.easeReverse||s.yoyoEase;if(w=f.timeline=new li({data:"nested",defaults:E||{},targets:S&&S.data==="nested"?S.vars.targets:A}),w.kill(),w.parent=w._dp=Ka(f),w._start=0,g||of(d)||of(_)){if(N=A.length,L=g&&Gy(g),Aa(g))for(O in g)~$y.indexOf(O)&&(k||(k={}),k[O]=g[O]);for(D=0;D<N;D++)P=bf(s,t1),P.stagger=0,B&&(P.easeReverse=B),k&&qo(P,k),T=A[D],P.duration=+lc(d,Ka(f),D,T,A),P.delay=(+lc(_,Ka(f),D,T,A)||0)-f._delay,!g&&N===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),w.to(T,P,L?L(D,T,A):0),w._ease=Ae.none;w.duration()?d=_=0:f.timeline=0}else if(M){sc(Oi(w.vars.defaults,{ease:"none"})),w._ease=Ls(M.ease||s.ease||"none");var W=0,$,lt,X;if(Qn(M))M.forEach(function(z){return w.to(A,z,">")}),w.duration();else{P={};for(O in M)O==="ease"||O==="easeEach"||FC(O,M[O],P,M.easeEach);for(O in P)for($=P[O].sort(function(z,G){return z.t-G.t}),W=0,D=0;D<$.length;D++)lt=$[D],X={ease:lt.e,duration:(lt.t-(D?$[D-1].t:0))/100*d},X[O]=lt.v,w.to(A,X,W),W+=X.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||f.duration(d=w.duration())}else f.timeline=0;return x===!0&&!r0&&(kr=Ka(f),un.killTweensOf(A),kr=0),xa(S,Ka(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!d&&!M&&f._start===cn(S._time)&&ci(v)&&hC(Ka(f))&&S.data!=="nested")&&(f._tTime=-Je,f.render(Math.max(0,-_)||0)),y&&Fy(Ka(f),y),f}var n=t.prototype;return n.render=function(s,l,u){var f=this._time,p=this._tDur,d=this._dur,_=s<0,v=s>p-Je&&!_?p:s<Je?0:s,g,x,M,E,y,S,A,w;if(!d)pC(this,s,l,u);else if(v!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,w=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,l,u);if(g=cn(v%E),v===p?(M=this._repeat,g=d):(y=cn(v/E),M=~~y,M&&M===y?(g=d,M--):g>d&&(g=d)),S=this._yoyo&&M&1,S&&(g=d-g),y=jo(this._tTime,E),g===f&&!u&&this._initted&&M===y)return this._tTime=v,this;M!==y&&this.vars.repeatRefresh&&!S&&!this._lock&&g!==E&&this._initted&&(this._lock=u=1,this.render(cn(E*M),!0).invalidate()._lock=0)}if(!this._initted){if(zy(this,_?s:g,u,l,v))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&M!==y))return this;if(d!==this._dur)return this.render(s,l,u)}if(this._rEase){var D=g<f;if(D!==this._inv){var P=D?f:d-f;this._inv=D,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=P?(D?-1:1)/P:0,this._invScale=D?-this.ratio:1-this.ratio,this._invEase=D?this._rEase:this._ease}this.ratio=A=this._invRatio+this._invScale*this._invEase((g-this._invTime)*this._invRecip)}else this.ratio=A=this._ease(g/d);if(this._from&&(this.ratio=A=1-A),this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!y&&(Di(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(A,x.d),x=x._next;w&&w.render(s<0?s:w._dur*w._ease(g/this._dur),l,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(_&&Om(this,s,l,u),Di(this,"onUpdate")),this._repeat&&M!==y&&this.vars.onRepeat&&!l&&this.parent&&Di(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&Om(this,s,!0,!0),(s||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&Zr(this,1),!l&&!(_&&!f)&&(v||f||S)&&(Di(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,l,u,f,p){gc||wi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||m0(this,d),_=this._ease(d/this._dur),OC(this,s,l,u,f,_,d,p)?this.resetTo(s,l,u,f,1):(Bf(this,0),this.parent||Oy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?ac(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,kr&&kr.vars.overwrite!==!0)._first||ac(this),this.parent&&u!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,p=s?Yi(s):f,d=this._ptLookup,_=this._pt,v,g,x,M,E,y,S;if((!l||l==="all")&&uC(f,p))return l==="all"&&(this._pt=0),ac(this);for(v=this._op=this._op||[],l!=="all"&&(On(l)&&(E={},ui(l,function(A){return E[A]=1}),l=E),l=PC(f,l)),S=f.length;S--;)if(~p.indexOf(f[S])){g=d[S],l==="all"?(v[S]=l,M=g,x={}):(x=v[S]=v[S]||{},M=l);for(E in M)y=g&&g[E],y&&((!("kill"in y.d)||y.d.kill(E)===!0)&&Ff(this,y,"_pt"),delete g[E]),x!=="all"&&(x[E]=1)}return this._initted&&!this._pt&&_&&ac(this),this},t.to=function(s,l){return new t(s,l,arguments[2])},t.from=function(s,l){return oc(1,arguments)},t.delayedCall=function(s,l,u,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},t.fromTo=function(s,l,u){return oc(2,arguments)},t.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(s,l)},t.killTweensOf=function(s,l,u){return un.killTweensOf(s,l,u)},t})(vc);Oi(Rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ui("staggerTo,staggerFrom,staggerFromTo",function(o){Rn[o]=function(){var t=new li,n=Fm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var _0=function(t,n,a){return t[n]=a},e1=function(t,n,a){return t[n](a)},zC=function(t,n,a,s){return t[n](s.fp,a)},BC=function(t,n,a){return t.setAttribute(n,a)},g0=function(t,n){return mn(t[n])?e1:s0(t[n])&&t.setAttribute?BC:_0},n1=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},IC=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},i1=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},v0=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},GC=function(t,n,a,s){for(var l=this._pt,u;l;)u=l._next,l.p===s&&l.modifier(t,n,a),l=u},HC=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Ff(this,n,"_pt"):n.dep||(a=1),n=s;return!a},VC=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},a1=function(t){for(var n=t._pt,a,s,l,u;n;){for(a=n._next,s=l;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:u)?n._prev._next=n:l=n,(n._next=s)?s._prev=n:u=n,n=a}t._pt=l},fi=(function(){function o(n,a,s,l,u,f,p,d,_){this.t=a,this.s=l,this.c=u,this.p=s,this.r=f||n1,this.d=p||this,this.set=d||_0,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,l){this.mSet=this.mSet||this.set,this.set=VC,this.m=a,this.mt=l,this.tween=s},o})();ui(f0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(o){return u0[o]=1});Li.TweenMax=Li.TweenLite=Rn;Li.TimelineLite=Li.TimelineMax=li;un=new li({sortChildren:!1,defaults:dc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ni.stringFilter=Zy;var Os=[],_f={},kC=[],AS=0,XC=0,Op=function(t){return(_f[t]||kC).map(function(n){return n()})},Gm=function(){var t=Date.now(),n=[];t-AS>2&&(Op("matchMediaInit"),Os.forEach(function(a){var s=a.queries,l=a.conditions,u,f,p,d;for(f in s)u=ga.matchMedia(s[f]).matches,u&&(p=1),u!==l[f]&&(l[f]=u,d=1);d&&(a.revert(),p&&n.push(a))}),Op("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),AS=t,Op("matchMedia"))},r1=(function(){function o(n,a){this.selector=a&&zm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=XC++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,l){mn(a)&&(l=s,s=a,a=mn);var u=this,f=function(){var d=on,_=u.selector,v;return d&&d!==u&&d.data.push(u),l&&(u.selector=zm(l)),on=u,v=s.apply(u,arguments),mn(v)&&u._r.push(v),on=d,u.selector=_,u.isReverted=!1,v};return u.last=f,a===mn?f(u,function(p){return u.add(null,p)}):a?u[a]=f:f},t.ignore=function(a){var s=on;on=null,a(this),on=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof Rn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof li?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Rn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var u=Os.length;u--;)Os[u].id===this.id&&Os.splice(u,1)},t.revert=function(a){this.kill(a||{})},o})(),WC=(function(){function o(n){this.contexts=[],this.scope=n,on&&on.data.push(this)}var t=o.prototype;return t.add=function(a,s,l){Aa(a)||(a={matches:a});var u=new r1(0,l||this.scope),f=u.conditions={},p,d,_;on&&!u.selector&&(u.selector=on.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=a;for(d in a)d==="all"?_=1:(p=ga.matchMedia(a[d]),p&&(Os.indexOf(u)<0&&Os.push(u),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Gm):p.addEventListener("change",Gm)));return _&&s(u,function(v){return u.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),Af={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return qy(s)})},timeline:function(t){return new li(t)},getTweensOf:function(t,n){return un.getTweensOf(t,n)},getProperty:function(t,n,a,s){On(t)&&(t=Yi(t)[0]);var l=Us(t||{}).get,u=a?Ly:Ny;return a==="native"&&(a=""),t&&(n?u((Ri[n]&&Ri[n].get||l)(t,n,a,s)):function(f,p,d){return u((Ri[f]&&Ri[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Yi(t),t.length>1){var s=t.map(function(_){return di.quickSetter(_,n,a)}),l=s.length;return function(_){for(var v=l;v--;)s[v](_)}}t=t[0]||{};var u=Ri[n],f=Us(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=u?function(_){var v=new u;Fo._pt=0,v.init(t,a?_+a:_,Fo,0,[t]),v.render(1,v),Fo._pt&&v0(1,Fo)}:f.set(t,p);return u?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,l=di.to(t,Oi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),u=function(p,d,_){return l.resetTo(n,p,d,_)};return u.tween=l,u},isTweening:function(t){return un.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ls(t.ease,dc.ease)),yS(dc,t||{})},config:function(t){return yS(Ni,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,l=t.defaults,u=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Ri[f]&&!Li[f]&&pc(n+" effect requires "+f+" plugin.")}),Dp[n]=function(f,p,d){return a(Yi(f),Oi(p||{},l),d)},u&&(li.prototype[n]=function(f,p,d){return this.add(Dp[n](f,Aa(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ae[t]=Ls(n)},parseEase:function(t,n){return arguments.length?Ls(t,n):Ae},getById:function(t){return un.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new li(t),s,l;for(a.smoothChildTiming=ci(t.smoothChildTiming),un.remove(a),a._dp=0,a._time=a._tTime=un._time,s=un._first;s;)l=s._next,(n||!(!s._dur&&s instanceof Rn&&s.vars.onComplete===s._targets[0]))&&xa(a,s,s._start-s._delay),s=l;return xa(un,a,0),a},context:function(t,n){return t?new r1(t,n):on},matchMedia:function(t){return new WC(t)},matchMediaRefresh:function(){return Os.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Gm()},addEventListener:function(t,n){var a=_f[t]||(_f[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=_f[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:MC,wrapYoyo:EC,distribute:Gy,random:Vy,snap:Hy,normalize:yC,getUnit:Yn,clamp:gC,splitColor:jy,toArray:Yi,selector:zm,mapRange:Xy,pipe:xC,unitize:SC,interpolate:bC,shuffle:Iy},install:Ry,effects:Dp,ticker:wi,updateRoot:li.updateRoot,plugins:Ri,globalTimeline:un,core:{PropTween:fi,globals:Cy,Tween:Rn,Timeline:li,Animation:vc,getCache:Us,_removeLinkedListItem:Ff,reverting:function(){return Vn},context:function(t){return t&&on&&(on.data.push(t),t._ctx=on),on},suppressOverwrites:function(t){return r0=t}}};ui("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Af[o]=Rn[o]});wi.add(li.updateRoot);Fo=Af.to({},{duration:0});var qC=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},jC=function(t,n){var a=t._targets,s,l,u;for(s in n)for(l=a.length;l--;)u=t._ptLookup[l][s],u&&(u=u.d)&&(u._pt&&(u=qC(u,s)),u&&u.modifier&&u.modifier(n[s],t,a[l],s))},Pp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,l,u){u._onInit=function(f){var p,d;if(On(l)&&(p={},ui(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}jC(f,l)}}}},di=Af.registerPlugin({name:"attr",init:function(t,n,a,s,l){var u,f,p;this.tween=a;for(u in n)p=t.getAttribute(u)||"",f=this.add(t,"setAttribute",(p||0)+"",n[u],s,l,0,0,u),f.op=u,f.b=p,this._props.push(u)},render:function(t,n){for(var a=n._pt;a;)Vn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Pp("roundProps",Bm),Pp("modifiers"),Pp("snap",Hy))||Af;Rn.version=li.version=di.version="3.15.0";Ay=1;o0()&&Zo();Ae.Power0;Ae.Power1;Ae.Power2;Ae.Power3;Ae.Power4;Ae.Linear;Ae.Quad;Ae.Cubic;Ae.Quart;Ae.Quint;Ae.Strong;Ae.Elastic;Ae.Back;Ae.SteppedEase;Ae.Bounce;Ae.Sine;Ae.Expo;Ae.Circ;var RS,Xr,Go,x0,Ds,CS,S0,YC=function(){return typeof window<"u"},rr={},Ts=180/Math.PI,Ho=Math.PI/180,Oo=Math.atan2,wS=1e8,y0=/([A-Z])/g,ZC=/(left|right|width|margin|padding|x)/i,KC=/[\s,\(]\S/,Ma={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Hm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},QC=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},JC=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},$C=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},tw=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},s1=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},o1=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},ew=function(t,n,a){return t.style[n]=a},nw=function(t,n,a){return t.style.setProperty(n,a)},iw=function(t,n,a){return t._gsap[n]=a},aw=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},rw=function(t,n,a,s,l){var u=t._gsap;u.scaleX=u.scaleY=a,u.renderTransform(l,u)},sw=function(t,n,a,s,l){var u=t._gsap;u[n]=a,u.renderTransform(l,u)},fn="transform",hi=fn+"Origin",ow=function o(t,n){var a=this,s=this.target,l=s.style,u=s._gsap;if(t in rr&&l){if(this.tfm=this.tfm||{},t!=="transform")t=Ma[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Qa(s,f)}):this.tfm[t]=u.x?u[t]:Qa(s,t),t===hi&&(this.tfm.zOrigin=u.zOrigin);else return Ma.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(fn)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(hi,n,"")),t=fn}(l||n)&&this.props.push(t,n,l[t])},l1=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},lw=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,l,u;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(y0,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=S0(),(!l||!l.isStart)&&!a[fn]&&(l1(a),s.zOrigin&&a[hi]&&(a[hi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},c1=function(t,n){var a={target:t,props:[],revert:lw,save:ow};return t._gsap||di.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},u1,Vm=function(t,n){var a=Xr.createElementNS?Xr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Xr.createElement(t);return a&&a.style?a:Xr.createElement(t)},Ui=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(y0,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Ko(n)||n,1)||""},DS="O,Moz,ms,Ms,Webkit".split(","),Ko=function(t,n,a){var s=n||Ds,l=s.style,u=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);u--&&!(DS[u]+t in l););return u<0?null:(u===3?"ms":u>=0?DS[u]:"")+t},km=function(){YC()&&window.document&&(RS=window,Xr=RS.document,Go=Xr.documentElement,Ds=Vm("div")||{style:{}},Vm("div"),fn=Ko(fn),hi=fn+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",u1=!!Ko("perspective"),S0=di.core.reverting,x0=1)},US=function(t){var n=t.ownerSVGElement,a=Vm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),l;s.style.display="block",a.appendChild(s),Go.appendChild(a);try{l=s.getBBox()}catch{}return a.removeChild(s),Go.removeChild(a),l},NS=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},f1=function(t){var n,a;try{n=t.getBBox()}catch{n=US(t),a=1}return n&&(n.width||n.height)||a||(n=US(t)),n&&!n.width&&!n.x&&!n.y?{x:+NS(t,["x","cx","x1"])||0,y:+NS(t,["y","cy","y1"])||0,width:0,height:0}:n},h1=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&f1(t))},Kr=function(t,n){if(n){var a=t.style,s;n in rr&&n!==hi&&(n=fn),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(y0,"-$1").toLowerCase())):a.removeAttribute(n)}},Wr=function(t,n,a,s,l,u){var f=new fi(t._pt,n,a,0,1,u?o1:s1);return t._pt=f,f.b=s,f.e=l,t._props.push(a),f},LS={deg:1,rad:1,turn:1},cw={grid:1,flex:1},Qr=function o(t,n,a,s){var l=parseFloat(a)||0,u=(a+"").trim().substr((l+"").length)||"px",f=Ds.style,p=ZC.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=s==="px",x=s==="%",M,E,y,S;if(s===u||!l||LS[s]||LS[u])return l;if(u!=="px"&&!g&&(l=o(t,n,a,"px")),S=t.getCTM&&h1(t),(x||u==="%")&&(rr[n]||~n.indexOf("adius")))return M=S?t.getBBox()[p?"width":"height"]:t[_],Sn(x?l/M*v:l/100*M);if(f[p?"width":"height"]=v+(g?u:s),E=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,S&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Xr||!E.appendChild)&&(E=Xr.body),y=E._gsap,y&&x&&y.width&&p&&y.time===wi.time&&!y.uncache)return Sn(l/y.width*v);if(x&&(n==="height"||n==="width")){var A=t.style[n];t.style[n]=v+s,M=t[_],A?t.style[n]=A:Kr(t,n)}else(x||u==="%")&&!cw[Ui(E,"display")]&&(f.position=Ui(t,"position")),E===t&&(f.position="static"),E.appendChild(Ds),M=Ds[_],E.removeChild(Ds),f.position="absolute";return p&&x&&(y=Us(E),y.time=wi.time,y.width=E[_]),Sn(g?M*l/v:M&&l?v/M*l:0)},Qa=function(t,n,a,s){var l;return x0||km(),n in Ma&&n!=="transform"&&(n=Ma[n],~n.indexOf(",")&&(n=n.split(",")[0])),rr[n]&&n!=="transform"?(l=Sc(t,s),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Cf(Ui(t,hi))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Rf[n]&&Rf[n](t,n,a)||Ui(t,n)||Dy(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?Qr(t,n,l,a)+a:l},uw=function(t,n,a,s){if(!a||a==="none"){var l=Ko(n,t,1),u=l&&Ui(t,l,1);u&&u!==a?(n=l,a=u):n==="borderColor"&&(a=Ui(t,"borderTopColor"))}var f=new fi(this._pt,t.style,n,0,1,i1),p=0,d=0,_,v,g,x,M,E,y,S,A,w,D,P;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ui(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[n],t.style[n]=s,s=Ui(t,n)||s,E?t.style[n]=E:Kr(t,n)),_=[a,s],Zy(_),a=_[0],s=_[1],g=a.match(Po)||[],P=s.match(Po)||[],P.length){for(;v=Po.exec(s);)y=v[0],A=s.substring(p,v.index),M?M=(M+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(M=1),y!==(E=g[d++]||"")&&(x=parseFloat(E)||0,D=E.substr((x+"").length),y.charAt(1)==="="&&(y=Io(x,y)+D),S=parseFloat(y),w=y.substr((S+"").length),p=Po.lastIndex-w.length,w||(w=w||Ni.units[n]||D,p===s.length&&(s+=w,f.e+=w)),D!==w&&(x=Qr(t,n,E,w)||0),f._pt={_next:f._pt,p:A||d===1?A:",",s:x,c:S-x,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?o1:s1;return Ty.test(s)&&(f.e=0),this._pt=f,f},OS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fw=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=OS[a]||a,n[1]=OS[s]||s,n.join(" ")},hw=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,l=n.u,u=a._gsap,f,p,d;if(l==="all"||l===!0)s.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],rr[f]&&(p=1,f=f==="transformOrigin"?hi:fn),Kr(a,f);p&&(Kr(a,fn),u&&(u.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Sc(a,1),u.uncache=1,l1(s)))}},Rf={clearProps:function(t,n,a,s,l){if(l.data!=="isFromStart"){var u=t._pt=new fi(t._pt,n,a,0,0,hw);return u.u=s,u.pr=-10,u.tween=l,t._props.push(a),1}}},xc=[1,0,0,1,0,0],d1={},p1=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},PS=function(t){var n=Ui(t,fn);return p1(n)?xc:n.substr(7).match(by).map(Sn)},M0=function(t,n){var a=t._gsap||Us(t),s=t.style,l=PS(t),u,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?xc:l):(l===xc&&!t.offsetParent&&t!==Go&&!a.svg&&(p=s.display,s.display="block",u=t.parentNode,(!u||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Go.appendChild(t)),l=PS(t),p?s.display=p:Kr(t,"display"),d&&(f?u.insertBefore(t,f):u?u.appendChild(t):Go.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Xm=function(t,n,a,s,l,u){var f=t._gsap,p=l||M0(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,x=p[0],M=p[1],E=p[2],y=p[3],S=p[4],A=p[5],w=n.split(" "),D=parseFloat(w[0])||0,P=parseFloat(w[1])||0,N,O,T,L;a?p!==xc&&(O=x*y-M*E)&&(T=D*(y/O)+P*(-E/O)+(E*A-y*S)/O,L=D*(-M/O)+P*(x/O)-(x*A-M*S)/O,D=T,P=L):(N=f1(t),D=N.x+(~w[0].indexOf("%")?D/100*N.width:D),P=N.y+(~(w[1]||w[0]).indexOf("%")?P/100*N.height:P)),s||s!==!1&&f.smooth?(S=D-d,A=P-_,f.xOffset=v+(S*x+A*E)-S,f.yOffset=g+(S*M+A*y)-A):f.xOffset=f.yOffset=0,f.xOrigin=D,f.yOrigin=P,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[hi]="0px 0px",u&&(Wr(u,f,"xOrigin",d,D),Wr(u,f,"yOrigin",_,P),Wr(u,f,"xOffset",v,f.xOffset),Wr(u,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",D+" "+P)},Sc=function(t,n){var a=t._gsap||new Qy(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,l=a.scaleX<0,u="px",f="deg",p=getComputedStyle(t),d=Ui(t,hi)||"0",_,v,g,x,M,E,y,S,A,w,D,P,N,O,T,L,k,B,W,$,lt,X,z,G,tt,ht,vt,I,K,St,yt,At;return _=v=g=E=y=S=A=w=D=0,x=M=1,a.svg=!!(t.getCTM&&h1(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[fn]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[fn]!=="none"?p[fn]:"")),s.scale=s.rotate=s.translate="none"),O=M0(t,a.svg),a.svg&&(a.uncache?(tt=t.getBBox(),d=a.xOrigin-tt.x+"px "+(a.yOrigin-tt.y)+"px",G=""):G=!n&&t.getAttribute("data-svg-origin"),Xm(t,G||d,!!G||a.originIsAbsolute,a.smooth!==!1,O)),P=a.xOrigin||0,N=a.yOrigin||0,O!==xc&&(B=O[0],W=O[1],$=O[2],lt=O[3],_=X=O[4],v=z=O[5],O.length===6?(x=Math.sqrt(B*B+W*W),M=Math.sqrt(lt*lt+$*$),E=B||W?Oo(W,B)*Ts:0,A=$||lt?Oo($,lt)*Ts+E:0,A&&(M*=Math.abs(Math.cos(A*Ho))),a.svg&&(_-=P-(P*B+N*$),v-=N-(P*W+N*lt))):(At=O[6],St=O[7],vt=O[8],I=O[9],K=O[10],yt=O[11],_=O[12],v=O[13],g=O[14],T=Oo(At,K),y=T*Ts,T&&(L=Math.cos(-T),k=Math.sin(-T),G=X*L+vt*k,tt=z*L+I*k,ht=At*L+K*k,vt=X*-k+vt*L,I=z*-k+I*L,K=At*-k+K*L,yt=St*-k+yt*L,X=G,z=tt,At=ht),T=Oo(-$,K),S=T*Ts,T&&(L=Math.cos(-T),k=Math.sin(-T),G=B*L-vt*k,tt=W*L-I*k,ht=$*L-K*k,yt=lt*k+yt*L,B=G,W=tt,$=ht),T=Oo(W,B),E=T*Ts,T&&(L=Math.cos(T),k=Math.sin(T),G=B*L+W*k,tt=X*L+z*k,W=W*L-B*k,z=z*L-X*k,B=G,X=tt),y&&Math.abs(y)+Math.abs(E)>359.9&&(y=E=0,S=180-S),x=Sn(Math.sqrt(B*B+W*W+$*$)),M=Sn(Math.sqrt(z*z+At*At)),T=Oo(X,z),A=Math.abs(T)>2e-4?T*Ts:0,D=yt?1/(yt<0?-yt:yt):0),a.svg&&(G=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!p1(Ui(t,fn)),G&&t.setAttribute("transform",G))),Math.abs(A)>90&&Math.abs(A)<270&&(l?(x*=-1,A+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,A+=A<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+u,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+u,a.z=g+u,a.scaleX=Sn(x),a.scaleY=Sn(M),a.rotation=Sn(E)+f,a.rotationX=Sn(y)+f,a.rotationY=Sn(S)+f,a.skewX=A+f,a.skewY=w+f,a.transformPerspective=D+u,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[hi]=Cf(d)),a.xOffset=a.yOffset=0,a.force3D=Ni.force3D,a.renderTransform=a.svg?pw:u1?m1:dw,a.uncache=0,a},Cf=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fp=function(t,n,a){var s=Yn(n);return Sn(parseFloat(n)+parseFloat(Qr(t,"x",a+"px",s)))+s},dw=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,m1(t,n)},Ms="0deg",tc="0px",Es=") ",m1=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,u=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,x=a.skewY,M=a.scaleX,E=a.scaleY,y=a.transformPerspective,S=a.force3D,A=a.target,w=a.zOrigin,D="",P=S==="auto"&&t&&t!==1||S===!0;if(w&&(v!==Ms||_!==Ms)){var N=parseFloat(_)*Ho,O=Math.sin(N),T=Math.cos(N),L;N=parseFloat(v)*Ho,L=Math.cos(N),u=Fp(A,u,O*L*-w),f=Fp(A,f,-Math.sin(N)*-w),p=Fp(A,p,T*L*-w+w)}y!==tc&&(D+="perspective("+y+Es),(s||l)&&(D+="translate("+s+"%, "+l+"%) "),(P||u!==tc||f!==tc||p!==tc)&&(D+=p!==tc||P?"translate3d("+u+", "+f+", "+p+") ":"translate("+u+", "+f+Es),d!==Ms&&(D+="rotate("+d+Es),_!==Ms&&(D+="rotateY("+_+Es),v!==Ms&&(D+="rotateX("+v+Es),(g!==Ms||x!==Ms)&&(D+="skew("+g+", "+x+Es),(M!==1||E!==1)&&(D+="scale("+M+", "+E+Es),A.style[fn]=D||"translate(0, 0)"},pw=function(t,n){var a=n||this,s=a.xPercent,l=a.yPercent,u=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,x=a.target,M=a.xOrigin,E=a.yOrigin,y=a.xOffset,S=a.yOffset,A=a.forceCSS,w=parseFloat(u),D=parseFloat(f),P,N,O,T,L;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Ho,d*=Ho,P=Math.cos(p)*v,N=Math.sin(p)*v,O=Math.sin(p-d)*-g,T=Math.cos(p-d)*g,d&&(_*=Ho,L=Math.tan(d-_),L=Math.sqrt(1+L*L),O*=L,T*=L,_&&(L=Math.tan(_),L=Math.sqrt(1+L*L),P*=L,N*=L)),P=Sn(P),N=Sn(N),O=Sn(O),T=Sn(T)):(P=v,T=g,N=O=0),(w&&!~(u+"").indexOf("px")||D&&!~(f+"").indexOf("px"))&&(w=Qr(x,"x",u,"px"),D=Qr(x,"y",f,"px")),(M||E||y||S)&&(w=Sn(w+M-(M*P+E*O)+y),D=Sn(D+E-(M*N+E*T)+S)),(s||l)&&(L=x.getBBox(),w=Sn(w+s/100*L.width),D=Sn(D+l/100*L.height)),L="matrix("+P+","+N+","+O+","+T+","+w+","+D+")",x.setAttribute("transform",L),A&&(x.style[fn]=L)},mw=function(t,n,a,s,l){var u=360,f=On(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?Ts:1),d=p-s,_=s+d+"deg",v,g;return f&&(v=l.split("_")[1],v==="short"&&(d%=u,d!==d%(u/2)&&(d+=d<0?u:-u)),v==="cw"&&d<0?d=(d+u*wS)%u-~~(d/u)*u:v==="ccw"&&d>0&&(d=(d-u*wS)%u-~~(d/u)*u)),t._pt=g=new fi(t._pt,n,a,s,d,QC),g.e=_,g.u="deg",t._props.push(a),g},FS=function(t,n){for(var a in n)t[a]=n[a];return t},_w=function(t,n,a){var s=FS({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",u=a.style,f,p,d,_,v,g,x,M;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),u[fn]=n,f=Sc(a,1),Kr(a,fn),a.setAttribute("transform",d)):(d=getComputedStyle(a)[fn],u[fn]=n,f=Sc(a,1),u[fn]=d);for(p in rr)d=s[p],_=f[p],d!==_&&l.indexOf(p)<0&&(x=Yn(d),M=Yn(_),v=x!==M?Qr(a,p,d,M):parseFloat(d),g=parseFloat(_),t._pt=new fi(t._pt,f,p,v,g-v,Hm),t._pt.u=M||0,t._props.push(p));FS(f,s)};ui("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",l="Left",u=(t<3?[n,a,s,l]:[n+l,n+a,s+a,s+l]).map(function(f){return t<2?o+f:"border"+f+o});Rf[t>1?"border"+o:o]=function(f,p,d,_,v){var g,x;if(arguments.length<4)return g=u.map(function(M){return Qa(f,M,d)}),x=g.join(" "),x.split(g[0]).length===5?g[0]:x;g=(_+"").split(" "),x={},u.forEach(function(M,E){return x[M]=g[E]=g[E]||g[(E-1)/2|0]}),f.init(p,x,v)}});var _1={name:"css",register:km,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,l){var u=this._props,f=t.style,p=a.vars.startAt,d,_,v,g,x,M,E,y,S,A,w,D,P,N,O,T,L;x0||km(),this.styles=this.styles||c1(t),T=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(Ri[E]&&Jy(E,n,a,s,t,l)))){if(x=typeof _,M=Rf[E],x==="function"&&(_=_.call(a,s,t,l),x=typeof _),x==="string"&&~_.indexOf("random(")&&(_=_c(_)),M)M(this,t,E,_,a)&&(O=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",jr.lastIndex=0,jr.test(d)||(y=Yn(d),S=Yn(_),S?y!==S&&(d=Qr(t,E,d,S)+S):y&&(_+=y)),this.add(f,"setProperty",d,_,s,l,0,0,E),u.push(E),T.push(E,0,f[E]);else if(x!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,s,t,l):p[E],On(d)&&~d.indexOf("random(")&&(d=_c(d)),Yn(d+"")||d==="auto"||(d+=Ni.units[E]||Yn(Qa(t,E))||""),(d+"").charAt(1)==="="&&(d=Qa(t,E))):d=Qa(t,E),g=parseFloat(d),A=x==="string"&&_.charAt(1)==="="&&_.substr(0,2),A&&(_=_.substr(2)),v=parseFloat(_),E in Ma&&(E==="autoAlpha"&&(g===1&&Qa(t,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,f.visibility),Wr(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=Ma[E],~E.indexOf(",")&&(E=E.split(",")[0]))),w=E in rr,w){if(this.styles.save(E),L=_,x==="string"&&_.substring(0,6)==="var(--"){if(_=Ui(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var k=t.style.perspective;t.style.perspective=_,_=Ui(t,"perspective"),k?t.style.perspective=k:Kr(t,"perspective")}v=parseFloat(_)}if(D||(P=t._gsap,P.renderTransform&&!n.parseTransform||Sc(t,n.parseTransform),N=n.smoothOrigin!==!1&&P.smooth,D=this._pt=new fi(this._pt,f,fn,0,1,P.renderTransform,P,0,-1),D.dep=1),E==="scale")this._pt=new fi(this._pt,P,"scaleY",P.scaleY,(A?Io(P.scaleY,A+v):v)-P.scaleY||0,Hm),this._pt.u=0,u.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push(hi,0,f[hi]),_=fw(_),P.svg?Xm(t,_,0,N,0,this):(S=parseFloat(_.split(" ")[2])||0,S!==P.zOrigin&&Wr(this,P,"zOrigin",P.zOrigin,S),Wr(this,f,E,Cf(d),Cf(_)));continue}else if(E==="svgOrigin"){Xm(t,_,1,N,0,this);continue}else if(E in d1){mw(this,P,E,g,A?Io(g,A+_):_);continue}else if(E==="smoothOrigin"){Wr(this,P,"smooth",P.smooth,_);continue}else if(E==="force3D"){P[E]=_;continue}else if(E==="transform"){_w(this,_,t);continue}}else E in f||(E=Ko(E)||E);if(w||(v||v===0)&&(g||g===0)&&!KC.test(_)&&E in f)y=(d+"").substr((g+"").length),v||(v=0),S=Yn(_)||(E in Ni.units?Ni.units[E]:y),y!==S&&(g=Qr(t,E,d,S)),this._pt=new fi(this._pt,w?P:f,E,g,(A?Io(g,A+v):v)-g,!w&&(S==="px"||E==="zIndex")&&n.autoRound!==!1?tw:Hm),this._pt.u=S||0,w&&L!==_?(this._pt.b=d,this._pt.e=L,this._pt.r=$C):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=JC);else if(E in f)uw.call(this,t,E,d,A?A+_:_);else if(E in t)this.add(t,E,d||t[E],A?A+_:_,s,l);else if(E!=="parseTransform"){c0(E,_);continue}w||(E in f?T.push(E,0,f[E]):typeof t[E]=="function"?T.push(E,2,t[E]()):T.push(E,1,d||t[E])),u.push(E)}}O&&a1(this)},render:function(t,n){if(n.tween._time||!S0())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Qa,aliases:Ma,getSetter:function(t,n,a){var s=Ma[n];return s&&s.indexOf(",")<0&&(n=s),n in rr&&n!==hi&&(t._gsap.x||Qa(t,"x"))?a&&CS===a?n==="scale"?aw:iw:(CS=a||{})&&(n==="scale"?rw:sw):t.style&&!s0(t.style[n])?ew:~n.indexOf("-")?nw:g0(t,n)},core:{_removeProperty:Kr,_getMatrix:M0}};di.utils.checkPrefix=Ko;di.core.getStyleSaver=c1;(function(o,t,n,a){var s=ui(o+","+t+","+n,function(l){rr[l]=1});ui(t,function(l){Ni.units[l]="deg",d1[l]=1}),Ma[s[13]]=o+","+t,ui(a,function(l){var u=l.split(":");Ma[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ui("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ni.units[o]="px"});di.registerPlugin(_1);var wf=di.registerPlugin(_1)||di;wf.core.Tween;const zp=3;function gw(o,t,n){const a=(90-o)*Math.PI/180,s=(t+180)*Math.PI/180;return new rt(-n*Math.sin(a)*Math.cos(s),n*Math.cos(a),n*Math.sin(a)*Math.sin(s))}function vw(o,t){return{y:-(t+180)*Math.PI/180,x:o*Math.PI/180}}const xw=`
varying vec3 vNormal;
varying vec3 vPosition;
varying vec2 vUv;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Sw=`
uniform vec3 uLandColor;
uniform vec3 uWaterColor;
uniform float uShowTexture;
uniform sampler2D uTexture;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

#define PI 3.141592653589793

vec2 latLngToUV(vec3 pos) {
  vec3 npos = normalize(pos);
  float u = 0.5 - atan(npos.z, npos.x) / (2.0 * PI);
  float v = 0.5 - asin(npos.y) / PI;
  return vec2(u, v);
}

float simplex3D(vec3 p) {
  return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 baseColor;
  
  if (uShowTexture > 0.5) {
    vec4 textureColor = texture2D(uTexture, vUv);
    float pattern = dot(textureColor.rgb, vec3(0.299, 0.587, 0.114));
    baseColor = pattern > 0.4 ? uLandColor : uWaterColor;
  } else {
    float lat = asin(normal.y);
    float lng = atan(normal.z, normal.x);
    vec2 uv = latLngToUV(normal);
    float noise = simplex3D(vec3(uv * 5.0, 0.0));
    baseColor = noise > 0.1 ? uLandColor : uWaterColor;
  }
  
  vec3 lightDir = normalize(vec3(5.0, 3.0, 5.0));
  float lightIntensity = max(dot(normal, lightDir), 0.0);
  vec3 finalColor = baseColor * (0.6 + 0.4 * lightIntensity);
  
  vec3 viewDir = normalize(-vPosition);
  float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
  finalColor += vec3(1.0) * fresnel * 0.15;
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`,yw=`
varying vec3 vNormal;
void main() {
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Mw=`
uniform vec3 uAtmosphereColor;
varying vec3 vNormal;
void main() {
  float viewDot = max(dot(vNormal, vec3(0, 0, 1.0)), 0.0);
  float intensity = pow(viewDot, 3.0);
  gl_FragColor = vec4(uAtmosphereColor, intensity * 0.4);
}
`;function Ew({stations:o,selectedStation:t,onStationClick:n}){const a=Vt.useRef(null),s=Vt.useRef(null),l=Vt.useRef(null),u=Vt.useRef(null),f=Vt.useRef(t);f.current=t;const p=Vt.useRef(n);p.current=n;const d=Vt.useRef(o);return d.current=o,Vt.useEffect(()=>{const _=a.current,v=s.current;if(!_||!v)return;const g=new Cb,x=new qi(45,_.clientWidth/_.clientHeight,.1,1e3);x.position.z=12;const M=new QR({canvas:v,antialias:!0,alpha:!0});M.setSize(_.clientWidth,_.clientHeight),M.setPixelRatio(Math.min(window.devicePixelRatio,2));const E=new nc;g.add(E);const y=new $b(16777215,.6);g.add(y);const S=new jx(16777215,1.2);S.position.set(5,3,5),g.add(S);const A=new jx(16777215,.3);A.position.set(-5,0,5),g.add(A);const w=new yf(zp,64,64),D=new Ki({vertexShader:xw,fragmentShader:Sw,uniforms:{uLandColor:{value:new De(15921124)},uWaterColor:{value:new De(12900305)},uShowTexture:{value:0},uTexture:{value:null}}}),P=new ca(w,D);E.add(P),new Kb().load("/earth-texture.jpg",Ut=>{Ut.colorSpace=Ai,D.uniforms.uTexture.value=Ut,D.uniforms.uShowTexture.value=1});const O=new yf(zp+.15,64,64),T=new Ki({vertexShader:yw,fragmentShader:Mw,uniforms:{uAtmosphereColor:{value:new De(15225902)}},side:ti,transparent:!0,blending:Bp}),L=new ca(O,T);E.add(L);const k=new Qi,B=2e3,W=new Float32Array(B*3);for(let Ut=0;Ut<B;Ut++){const ee=50+Math.random()*50,Kt=Math.random()*Math.PI*2,_e=Math.acos(2*Math.random()-1);W[Ut*3]=ee*Math.sin(_e)*Math.cos(Kt),W[Ut*3+1]=ee*Math.sin(_e)*Math.sin(Kt),W[Ut*3+2]=ee*Math.cos(_e)}k.setAttribute("position",new la(W,3));const $=new oy({size:2,sizeAttenuation:!0,transparent:!0,opacity:.6,color:16777215}),lt=new Bb(k,$);g.add(lt);const X=new Map;let z=0,G=0,tt=!1,ht=0,vt=0,I=!0,K=0,St=0;const yt={scene:g,camera:x,renderer:M,earthGroup:E,stars:lt,markers:X,animId:0,isAutoRotating:I};u.current=yt;function At(Ut){if(!Ut.geo_lat||!Ut.geo_long||X.has(Ut.stationuuid))return;const ee=document.createElement("div");ee.className="absolute pointer-events-auto cursor-pointer",ee.style.cssText="transform: translate(-50%, -50%); z-index: 10;";const Kt=document.createElement("div");Kt.className="relative";const _e=document.createElement("div");_e.className="absolute inset-0 rounded-full animate-pulse-ring",_e.style.cssText="border: 1px solid #E8542E; width: 8px; height: 8px;";const Re=document.createElement("div");Re.className="station-dot relative rounded-full transition-all duration-200",Re.style.cssText="width: 8px; height: 8px; background-color: #E8542E;",Kt.appendChild(_e),Kt.appendChild(Re),ee.appendChild(Kt);const Ie=document.createElement("div");Ie.className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-white/90 text-[#0A0A0A] opacity-0 transition-opacity duration-200 pointer-events-none",Ie.textContent=Ut.name.length>25?Ut.name.slice(0,25)+"...":Ut.name,ee.addEventListener("mouseenter",()=>{Ie.style.opacity="1"}),ee.addEventListener("mouseleave",()=>{Ie.style.opacity="0"}),ee.appendChild(Ie),ee.addEventListener("click",()=>{p.current(Ut)}),l.current&&l.current.appendChild(ee),X.set(Ut.stationuuid,ee)}d.current.forEach(At);function ct(){yt.animId=requestAnimationFrame(ct),Math.abs(z)<.001&&yt.isAutoRotating&&!tt&&(E.rotation.y+=.001),E.rotation.y+=z,E.rotation.x+=G,z*=.95,G*=.95,E.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,E.rotation.x)),lt.rotation.x=St*.02,lt.rotation.y=K*.02;const Ut=a.current;if(!Ut)return;const ee=Ut.clientWidth,Kt=Ut.clientHeight;yt.markers.forEach((_e,Re)=>{const Ie=d.current.find($e=>$e.stationuuid===Re);if(!Ie||Ie.geo_lat==null||Ie.geo_long==null){_e.style.display="none";return}const Y=gw(Ie.geo_lat,Ie.geo_long,zp+.1);if(Y.applyMatrix4(E.matrixWorld),Y.project(x),Y.z>1){_e.style.display="none";return}const tn=(Y.x*.5+.5)*ee,pe=(-Y.y*.5+.5)*Kt;_e.style.display="block",_e.style.transform=`translate(${tn-4}px, ${pe-4}px)`;const Ce=_e.querySelector(".station-dot"),Rt=f.current?.stationuuid===Re;Ce&&(Ce.style.width=Rt?"12px":"8px",Ce.style.height=Rt?"12px":"8px",Ce.style.backgroundColor=Rt?"#0A0A0A":"#E8542E")}),M.render(g,x)}ct();const Mt=Ut=>{tt=!0,I=!1,yt.isAutoRotating=!1,ht=Ut.clientX,vt=Ut.clientY},Tt=Ut=>{const ee=a.current;if(!ee||(K=Ut.clientX/ee.clientWidth*2-1,St=Ut.clientY/ee.clientHeight*2-1,!tt))return;const Kt=(Ut.clientX-ht)*.005,_e=(Ut.clientY-vt)*.005;z=Kt,G=_e,ht=Ut.clientX,vt=Ut.clientY},Ht=()=>{tt=!1};v.addEventListener("pointerdown",Mt),window.addEventListener("pointermove",Tt),window.addEventListener("pointerup",Ht);const ne=Ut=>{Ut.touches.length===1&&(tt=!0,I=!1,yt.isAutoRotating=!1,ht=Ut.touches[0].clientX,vt=Ut.touches[0].clientY)},Jt=Ut=>{if(!tt||Ut.touches.length!==1)return;Ut.preventDefault();const ee=(Ut.touches[0].clientX-ht)*.005,Kt=(Ut.touches[0].clientY-vt)*.005;z=ee,G=Kt,ht=Ut.touches[0].clientX,vt=Ut.touches[0].clientY},Fe=()=>{tt=!1};v.addEventListener("touchstart",ne,{passive:!0}),v.addEventListener("touchmove",Jt,{passive:!1}),v.addEventListener("touchend",Fe);const ue=()=>{const Ut=a.current;if(!Ut)return;const ee=Ut.clientWidth,Kt=Ut.clientHeight;x.aspect=ee/Kt,x.updateProjectionMatrix(),M.setSize(ee,Kt)};return window.addEventListener("resize",ue),()=>{cancelAnimationFrame(yt.animId),v.removeEventListener("pointerdown",Mt),window.removeEventListener("pointermove",Tt),window.removeEventListener("pointerup",Ht),v.removeEventListener("touchstart",ne),v.removeEventListener("touchmove",Jt),v.removeEventListener("touchend",Fe),window.removeEventListener("resize",ue),X.forEach(Ut=>Ut.remove()),M.dispose(),w.dispose(),D.dispose(),O.dispose(),T.dispose(),k.dispose(),$.dispose()}},[]),Vt.useEffect(()=>{const _=u.current;_&&o.forEach(v=>{if(!v.geo_lat||!v.geo_long||_.markers.has(v.stationuuid))return;const g=document.createElement("div");g.className="absolute pointer-events-auto cursor-pointer",g.style.cssText="transform: translate(-50%, -50%); z-index: 10;";const x=document.createElement("div");x.className="relative";const M=document.createElement("div");M.className="absolute inset-0 rounded-full animate-pulse-ring",M.style.cssText="border: 1px solid #E8542E; width: 8px; height: 8px;";const E=document.createElement("div");E.className="station-dot relative rounded-full transition-all duration-200",E.style.cssText="width: 8px; height: 8px; background-color: #E8542E;",x.appendChild(M),x.appendChild(E),g.appendChild(x);const y=document.createElement("div");y.className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] uppercase tracking-wider px-2 py-0.5 bg-white/90 text-[#0A0A0A] opacity-0 transition-opacity duration-200 pointer-events-none",y.textContent=v.name.length>25?v.name.slice(0,25)+"...":v.name,g.addEventListener("mouseenter",()=>{y.style.opacity="1"}),g.addEventListener("mouseleave",()=>{y.style.opacity="0"}),g.appendChild(y),g.addEventListener("click",()=>{p.current(v)}),l.current&&l.current.appendChild(g),_.markers.set(v.stationuuid,g)})},[o]),Vt.useEffect(()=>{const _=u.current;if(!_||!t||t.geo_lat==null||t.geo_long==null)return;_.isAutoRotating=!1;const v=vw(t.geo_lat,t.geo_long);wf.to(_.earthGroup.rotation,{x:v.x,y:v.y,duration:1.2,ease:"power2.inOut"})},[t]),V.jsxs("div",{"code-path":"src/components/Globe.tsx:513:5",ref:a,className:"absolute inset-0 touch-none",children:[V.jsx("canvas",{"code-path":"src/components/Globe.tsx:514:7",ref:s,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",zIndex:1}}),V.jsx("div",{"code-path":"src/components/Globe.tsx:525:7",ref:l,className:"absolute inset-0 pointer-events-none",style:{zIndex:2}})]})}function g1({analyser:o,isPlaying:t,width:n=120,height:a=40,barColor:s="#E8542E",className:l=""}){const u=Vt.useRef(null),f=Vt.useRef(0);return Vt.useEffect(()=>{const p=u.current;if(!p)return;const d=p.getContext("2d");if(!d)return;const _=48,v=n/_;function g(){if(f.current=requestAnimationFrame(g),d.clearRect(0,0,n,a),!t||!o){d.fillStyle=s;for(let M=0;M<_;M++){const E=a*.2,y=M*v,S=(a-E)/2;d.fillRect(y,S,v-1,E)}return}const x=new Uint8Array(o.frequencyBinCount);o.getByteFrequencyData(x),d.fillStyle=s;for(let M=0;M<_;M++){const E=Math.floor(M*(x.length/_)),y=x[E]/255*a*.8,S=M*v,A=a-y,w=Math.min(v/2,2);d.beginPath(),d.moveTo(S,A+w),d.arcTo(S,A,S+w,A,w),d.lineTo(S+v-1-w,A),d.arcTo(S+v-1,A,S+v-1,A+w,w),d.lineTo(S+v-1,a),d.lineTo(S,a),d.closePath(),d.fill()}}return g(),()=>{cancelAnimationFrame(f.current)}},[o,t,n,a,s]),V.jsx("canvas",{"code-path":"src/components/AudioVisualizer.tsx:81:5",ref:u,width:n,height:a,className:l,style:{width:n,height:a}})}function bw({station:o,isOpen:t,onClose:n,isPlaying:a,analyser:s,onTogglePlay:l,onAddFavorite:u,isFavorite:f}){const p=Vt.useRef(null);if(Vt.useEffect(()=>{p.current&&(t?wf.to(p.current,{x:0,duration:.4,ease:"power3.out"}):wf.to(p.current,{x:"100%",duration:.3,ease:"power3.in"}))},[t]),!o)return null;const d=o.tags?.split(",").filter(Boolean).slice(0,5)||[],_=o.countrycode?.toLowerCase()||"";return V.jsxs("div",{"code-path":"src/components/StationDetailPanel.tsx:52:5",ref:p,className:"fixed top-0 right-0 h-full bg-white overflow-y-auto z-50",style:{width:"400px",maxWidth:"100vw",transform:"translateX(100%)",boxShadow:"-8px 0 32px rgba(0,0,0,0.08)"},children:[V.jsx("button",{"code-path":"src/components/StationDetailPanel.tsx:63:7",onClick:n,className:"absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#6B6560] hover:text-[#E8542E] transition-colors z-10",children:V.jsxs("svg",{"code-path":"src/components/StationDetailPanel.tsx:67:9",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[V.jsx("line",{"code-path":"src/components/StationDetailPanel.tsx:68:11",x1:"4",y1:"4",x2:"16",y2:"16"}),V.jsx("line",{"code-path":"src/components/StationDetailPanel.tsx:69:11",x1:"16",y1:"4",x2:"4",y2:"16"})]})}),V.jsxs("div",{"code-path":"src/components/StationDetailPanel.tsx:73:7",className:"p-8 pt-16",children:[V.jsx("div",{"code-path":"src/components/StationDetailPanel.tsx:75:9",className:"w-16 h-16 rounded-full bg-[#F2EFE4] flex items-center justify-center overflow-hidden mb-6",children:o.favicon?V.jsx("img",{"code-path":"src/components/StationDetailPanel.tsx:77:13",src:o.favicon,alt:"",className:"w-12 h-12 object-contain",onError:v=>{v.target.style.display="none"}}):V.jsxs("svg",{"code-path":"src/components/StationDetailPanel.tsx:84:13",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"#6B6560",strokeWidth:"1.5",children:[V.jsx("circle",{"code-path":"src/components/StationDetailPanel.tsx:85:15",cx:"12",cy:"12",r:"3"}),V.jsx("path",{"code-path":"src/components/StationDetailPanel.tsx:86:15",d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]})}),V.jsx("h2",{"code-path":"src/components/StationDetailPanel.tsx:92:9",className:"font-serif text-[32px] leading-tight text-[#0A0A0A] mb-2",children:o.name}),V.jsxs("div",{"code-path":"src/components/StationDetailPanel.tsx:97:9",className:"flex items-center gap-2 text-[14px] text-[#6B6560] mb-6",children:[_&&V.jsx("img",{"code-path":"src/components/StationDetailPanel.tsx:99:13",src:`https://flagcdn.com/w20/${_}.png`,alt:o.country,className:"w-5 h-auto"}),V.jsx("span",{"code-path":"src/components/StationDetailPanel.tsx:105:11",children:o.country||"Unknown"}),d.length>0&&V.jsxs(V.Fragment,{children:[V.jsx("span",{"code-path":"src/components/StationDetailPanel.tsx:108:15",className:"text-[#6B6560]",children:"·"}),V.jsx("span",{"code-path":"src/components/StationDetailPanel.tsx:109:15",children:d.slice(0,3).join(", ")})]})]}),a&&V.jsx("div",{"code-path":"src/components/StationDetailPanel.tsx:116:11",className:"font-mono text-[11px] uppercase tracking-[0.12em] text-[#E8542E] mb-4",children:"NOW PLAYING"}),V.jsx("div",{"code-path":"src/components/StationDetailPanel.tsx:122:9",className:"mb-6",children:V.jsx(g1,{"code-path":"src/components/StationDetailPanel.tsx:123:11",analyser:s,isPlaying:a,width:336,height:60,barColor:"#E8542E"})}),V.jsx("button",{"code-path":"src/components/StationDetailPanel.tsx:133:9",onClick:l,className:"w-full py-3 bg-[#0A0A0A] text-[#F2EFE4] font-mono text-[14px] uppercase tracking-wider hover:bg-[#E8542E] transition-colors duration-200 rounded-md mb-6 flex items-center justify-center gap-2",children:a?V.jsxs(V.Fragment,{children:[V.jsxs("svg",{"code-path":"src/components/StationDetailPanel.tsx:139:15",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[V.jsx("rect",{"code-path":"src/components/StationDetailPanel.tsx:140:17",x:"3",y:"2",width:"4",height:"12"}),V.jsx("rect",{"code-path":"src/components/StationDetailPanel.tsx:141:17",x:"9",y:"2",width:"4",height:"12"})]}),"PAUSE"]}):V.jsxs(V.Fragment,{children:[V.jsx("svg",{"code-path":"src/components/StationDetailPanel.tsx:147:15",width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:V.jsx("polygon",{"code-path":"src/components/StationDetailPanel.tsx:148:17",points:"4,2 14,8 4,14"})}),"PLAY"]})}),(o.bitrate||o.codec)&&V.jsxs("div",{"code-path":"src/components/StationDetailPanel.tsx:157:11",className:"text-[12px] text-[#6B6560] mb-4 font-mono",children:[o.bitrate>0&&`${o.bitrate} kbps`,o.bitrate>0&&o.codec&&" · ",o.codec&&o.codec.toUpperCase()]}),o.homepage&&V.jsx("a",{"code-path":"src/components/StationDetailPanel.tsx:166:11",href:o.homepage,target:"_blank",rel:"noopener noreferrer",className:"inline-block text-[14px] uppercase font-mono tracking-wider text-[#E8542E] hover:underline mb-4",children:"Visit Website"}),V.jsx("button",{"code-path":"src/components/StationDetailPanel.tsx:177:9",onClick:()=>u(o),className:"block w-full py-3 border border-[#0A0A0A] text-[#0A0A0A] font-mono text-[14px] uppercase tracking-wider hover:bg-[#0A0A0A] hover:text-white transition-colors duration-200 rounded-md text-center",children:f?"Remove from Favorites":"Add to Favorites"})]})]})}function Tw({isOpen:o,onClose:t,onSearch:n,onStationClick:a,currentStation:s,favorites:l}){const[u,f]=Vt.useState(""),[p,d]=Vt.useState([]),[_,v]=Vt.useState(!1),g=Vt.useRef(null),x=Vt.useRef(null);Vt.useEffect(()=>{o?setTimeout(()=>g.current?.focus(),100):(f(""),d([]))},[o]);const M=Vt.useCallback(async S=>{if(!S.trim()){d([]);return}v(!0);try{const A=await n(S);d(A)}catch{d([])}finally{v(!1)}},[n]);Vt.useEffect(()=>(x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{M(u)},300),()=>{x.current&&clearTimeout(x.current)}),[u,M]);const E=S=>{S.key==="Escape"&&t()};if(!o)return null;const y=S=>S?.toLowerCase()||"";return V.jsxs("div",{"code-path":"src/components/SearchOverlay.tsx:62:5",className:"fixed inset-0 bg-[#F2EFE4]/95 backdrop-blur-md z-[150] flex flex-col",children:[V.jsxs("div",{"code-path":"src/components/SearchOverlay.tsx:64:7",className:"flex items-center justify-between px-8 py-4 border-b border-[#E8E4D9]",children:[V.jsx("span",{"code-path":"src/components/SearchOverlay.tsx:65:9",className:"font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560]",children:"Search Stations"}),V.jsx("button",{"code-path":"src/components/SearchOverlay.tsx:68:9",onClick:t,className:"w-10 h-10 flex items-center justify-center text-[#6B6560] hover:text-[#E8542E] transition-colors",children:V.jsxs("svg",{"code-path":"src/components/SearchOverlay.tsx:72:11",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[V.jsx("line",{"code-path":"src/components/SearchOverlay.tsx:73:13",x1:"4",y1:"4",x2:"16",y2:"16"}),V.jsx("line",{"code-path":"src/components/SearchOverlay.tsx:74:13",x1:"16",y1:"4",x2:"4",y2:"16"})]})})]}),V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:80:7",className:"px-8 py-6",children:V.jsx("input",{"code-path":"src/components/SearchOverlay.tsx:81:9",ref:g,type:"text",value:u,onChange:S=>f(S.target.value),onKeyDown:E,placeholder:"Search by station name, country, or genre...",className:"w-full bg-transparent border-b-2 border-[#0A0A0A] pb-3 font-serif text-[32px] text-[#0A0A0A] placeholder:text-[#6B6560] placeholder:text-[24px] focus:outline-none focus:border-[#E8542E] transition-colors"})}),V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:93:7",className:"flex-1 overflow-y-auto px-8 pb-8",children:_?V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:95:11",className:"flex items-center justify-center py-12",children:V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:96:13",className:"font-mono text-[12px] uppercase tracking-wider text-[#6B6560]",children:"Searching..."})}):p.length===0&&u.trim()?V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:99:11",className:"text-center py-12",children:V.jsx("p",{"code-path":"src/components/SearchOverlay.tsx:100:13",className:"font-serif text-[18px] text-[#6B6560]",children:"No stations found"})}):V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:103:11",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",children:p.map(S=>{const A=S.tags?.split(",").filter(Boolean).slice(0,3)||[],w=y(S.countrycode),D=s?.stationuuid===S.stationuuid;return V.jsxs("button",{"code-path":"src/components/SearchOverlay.tsx:110:17",onClick:()=>{a(S),t()},className:`flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${D?"bg-[#E8542E] text-white":"bg-white hover:-translate-y-0.5"}`,children:[V.jsx("div",{"code-path":"src/components/SearchOverlay.tsx:120:19",className:`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${D?"bg-white/20":"bg-[#F2EFE4]"}`,children:S.favicon?V.jsx("img",{"code-path":"src/components/SearchOverlay.tsx:122:23",src:S.favicon,alt:"",className:"w-8 h-8 object-contain",onError:P=>{P.target.style.display="none"}}):V.jsxs("svg",{"code-path":"src/components/SearchOverlay.tsx:129:23",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:D?"white":"#6B6560",strokeWidth:"1.5",children:[V.jsx("circle",{"code-path":"src/components/SearchOverlay.tsx:130:25",cx:"12",cy:"12",r:"3"}),V.jsx("path",{"code-path":"src/components/SearchOverlay.tsx:131:25",d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]})}),V.jsxs("div",{"code-path":"src/components/SearchOverlay.tsx:135:19",className:"flex-1 min-w-0",children:[V.jsx("h3",{"code-path":"src/components/SearchOverlay.tsx:136:21",className:`font-serif text-[16px] font-bold truncate ${D?"text-white":"text-[#0A0A0A]"}`,children:S.name}),V.jsxs("div",{"code-path":"src/components/SearchOverlay.tsx:139:21",className:`flex items-center gap-2 text-[12px] ${D?"text-white/80":"text-[#6B6560]"}`,children:[w&&V.jsx("img",{"code-path":"src/components/SearchOverlay.tsx:141:25",src:`https://flagcdn.com/w20/${w}.png`,alt:"",className:"w-4 h-auto"}),V.jsx("span",{"code-path":"src/components/SearchOverlay.tsx:143:23",className:"truncate",children:S.country||"Unknown"}),A.length>0&&V.jsxs(V.Fragment,{children:[V.jsx("span",{"code-path":"src/components/SearchOverlay.tsx:146:27",children:"·"}),V.jsx("span",{"code-path":"src/components/SearchOverlay.tsx:147:27",className:"truncate",children:A.join(", ")})]})]})]}),l.has(S.stationuuid)&&V.jsx("svg",{"code-path":"src/components/SearchOverlay.tsx:153:21",width:"14",height:"14",viewBox:"0 0 24 24",fill:D?"white":"#E8542E",className:"flex-shrink-0",children:V.jsx("path",{"code-path":"src/components/SearchOverlay.tsx:154:23",d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})]},S.stationuuid)})})})]})}function Aw({onNavClick:o,isPlaying:t}){const[n,a]=Vt.useState(!1),[s,l]=Vt.useState(!1);Vt.useEffect(()=>{const f=()=>{a(window.scrollY>100)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const u=[{label:"DISCOVER",section:"hero"},{label:"STATIONS",section:"popular"},{label:"GENRES",section:"genres"},{label:"ABOUT",section:"footer"}];return V.jsxs("nav",{"code-path":"src/sections/Navigation.tsx:28:5",className:"fixed top-0 left-0 right-0 h-16 z-[100] transition-all duration-300",style:{backgroundColor:n?"rgba(242, 238, 228, 0.95)":"transparent",backdropFilter:n?"blur(8px)":"none"},children:[V.jsxs("div",{"code-path":"src/sections/Navigation.tsx:35:7",className:"flex items-center justify-between h-full px-8 max-w-[1600px] mx-auto",children:[V.jsx("div",{"code-path":"src/sections/Navigation.tsx:37:9",className:"font-mono text-[14px] font-bold uppercase tracking-[0.2em] text-[#0A0A0A]",children:"TUNER"}),V.jsx("div",{"code-path":"src/sections/Navigation.tsx:42:9",className:"hidden md:flex items-center gap-8",children:u.map(f=>V.jsx("button",{"code-path":"src/sections/Navigation.tsx:44:13",onClick:()=>o(f.section),className:"font-serif text-[14px] uppercase tracking-[0.08em] text-[#0A0A0A] hover:text-[#E8542E] transition-colors duration-200",children:f.label},f.section))}),V.jsxs("div",{"code-path":"src/sections/Navigation.tsx:55:9",className:"flex items-center gap-4",children:[t&&V.jsxs("div",{"code-path":"src/sections/Navigation.tsx:58:13",className:"hidden md:flex items-center gap-2",children:[V.jsx("div",{"code-path":"src/sections/Navigation.tsx:59:15",className:"w-2 h-2 rounded-full bg-[#E8542E] animate-on-air"}),V.jsx("span",{"code-path":"src/sections/Navigation.tsx:60:15",className:"font-mono text-[10px] uppercase tracking-wider text-[#E8542E]",children:"LIVE"})]}),V.jsxs("button",{"code-path":"src/sections/Navigation.tsx:65:11",className:"md:hidden flex flex-col gap-1 p-2",onClick:()=>l(!s),children:[V.jsx("span",{"code-path":"src/sections/Navigation.tsx:69:13",className:`block w-5 h-0.5 bg-[#0A0A0A] transition-transform duration-200 ${s?"rotate-45 translate-y-1.5":""}`}),V.jsx("span",{"code-path":"src/sections/Navigation.tsx:70:13",className:`block w-5 h-0.5 bg-[#0A0A0A] transition-opacity duration-200 ${s?"opacity-0":""}`}),V.jsx("span",{"code-path":"src/sections/Navigation.tsx:71:13",className:`block w-5 h-0.5 bg-[#0A0A0A] transition-transform duration-200 ${s?"-rotate-45 -translate-y-1.5":""}`})]})]})]}),s&&V.jsx("div",{"code-path":"src/sections/Navigation.tsx:78:9",className:"md:hidden absolute top-16 left-0 right-0 bg-[#F2EFE4]/95 backdrop-blur-md border-t border-[#E8E4D9] py-4",children:u.map(f=>V.jsx("button",{"code-path":"src/sections/Navigation.tsx:80:13",onClick:()=>{o(f.section),l(!1)},className:"block w-full text-left px-8 py-3 font-serif text-[14px] uppercase tracking-[0.08em] text-[#0A0A0A] hover:text-[#E8542E] transition-colors",children:f.label},f.section))})]})}function Rw({stations:o,currentStation:t,onStationClick:n,favorites:a}){const s=Vt.useRef(null),l=u=>u?.toLowerCase()||"";return V.jsx("section",{"code-path":"src/sections/PopularStations.tsx:17:5",id:"popular",className:"relative bg-[#F2EFE4] py-24 px-8 z-10",children:V.jsxs("div",{"code-path":"src/sections/PopularStations.tsx:18:7",className:"max-w-[1400px] mx-auto",children:[V.jsx("h2",{"code-path":"src/sections/PopularStations.tsx:19:9",className:"font-serif text-[24px] uppercase tracking-[0.08em] text-[#0A0A0A] mb-8",children:"Popular Stations"}),V.jsx("div",{"code-path":"src/sections/PopularStations.tsx:23:9",ref:s,className:"flex gap-4 overflow-x-auto scrollbar-hide pb-4",children:o.map(u=>{const f=u.tags?.split(",").filter(Boolean).slice(0,3)||[],p=l(u.countrycode),d=t?.stationuuid===u.stationuuid;return V.jsxs("button",{"code-path":"src/sections/PopularStations.tsx:33:15",onClick:()=>n(u),className:"flex-shrink-0 w-[280px] bg-white rounded-lg p-5 text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer group",children:[V.jsxs("div",{"code-path":"src/sections/PopularStations.tsx:39:17",className:"flex items-center justify-between mb-3",children:[V.jsx("div",{"code-path":"src/sections/PopularStations.tsx:40:19",className:"w-10 h-10 rounded-full bg-[#F2EFE4] flex items-center justify-center overflow-hidden",children:u.favicon?V.jsx("img",{"code-path":"src/sections/PopularStations.tsx:42:23",src:u.favicon,alt:"",className:"w-7 h-7 object-contain",onError:_=>{_.target.style.display="none"}}):V.jsxs("svg",{"code-path":"src/sections/PopularStations.tsx:49:23",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#6B6560",strokeWidth:"1.5",children:[V.jsx("circle",{"code-path":"src/sections/PopularStations.tsx:50:25",cx:"12",cy:"12",r:"3"}),V.jsx("path",{"code-path":"src/sections/PopularStations.tsx:51:25",d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]})}),V.jsxs("div",{"code-path":"src/sections/PopularStations.tsx:55:19",className:"flex items-center gap-2",children:[p&&V.jsx("img",{"code-path":"src/sections/PopularStations.tsx:57:23",src:`https://flagcdn.com/w20/${p}.png`,alt:u.country,className:"w-5 h-auto"}),a.has(u.stationuuid)&&V.jsx("svg",{"code-path":"src/sections/PopularStations.tsx:64:23",width:"14",height:"14",viewBox:"0 0 24 24",fill:"#E8542E",stroke:"none",children:V.jsx("path",{"code-path":"src/sections/PopularStations.tsx:65:25",d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})]})]}),V.jsx("h3",{"code-path":"src/sections/PopularStations.tsx:72:17",className:"font-serif text-[16px] font-bold text-[#0A0A0A] mb-1 truncate",children:u.name}),V.jsx("p",{"code-path":"src/sections/PopularStations.tsx:77:17",className:"text-[12px] text-[#6B6560] mb-4 truncate",children:f.join(", ")||"General"}),V.jsx("span",{"code-path":"src/sections/PopularStations.tsx:82:17",className:`font-mono text-[14px] uppercase tracking-wider ${d?"text-[#E8542E]":"text-[#E8542E] group-hover:underline"}`,children:d?"PLAYING":"TUNE IN"})]},u.stationuuid)})})]})})}const v1="https://de1.api.radio-browser.info",Cw=async o=>{const t=await fetch(`${v1}${o}`,{headers:{"User-Agent":"TunerGlobal/1.0"}});if(!t.ok)throw new Error(`API error: ${t.status}`);return t.json()};function x1(){const[o,t]=Vt.useState(!1),[n,a]=Vt.useState(null),s=Vt.useCallback(async x=>{t(!0),a(null);try{return await Cw(x)}catch(M){return a(M instanceof Error?M.message:"Unknown error"),null}finally{t(!1)}},[]),l=Vt.useCallback(async(x,M=20)=>await s(`/json/stations/search?name=${encodeURIComponent(x)}&limit=${M}&order=clickcount&reverse=true`)||[],[s]),u=Vt.useCallback(async(x=20)=>await s(`/json/stations/topclick/${x}`)||[],[s]),f=Vt.useCallback(async(x,M=10)=>await s(`/json/stations/bycountrycodeexact/${encodeURIComponent(x)}?limit=${M}&order=clickcount&reverse=true`)||[],[s]),p=Vt.useCallback(async(x,M=10)=>await s(`/json/stations/bytag/${encodeURIComponent(x)}?limit=${M}&order=clickcount&reverse=true`)||[],[s]),d=Vt.useCallback(async(x=50)=>await s(`/json/stations/search?has_geo_info=true&limit=${x}&order=clickcount&reverse=true`)||[],[s]),_=Vt.useCallback(async()=>await s("/json/countries?order=stationcount&reverse=true")||[],[s]),v=Vt.useCallback(async()=>await s("/json/tags?order=stationcount&reverse=true")||[],[s]),g=Vt.useCallback(async x=>{try{await fetch(`${v1}/json/url/${x}`,{headers:{"User-Agent":"TunerGlobal/1.0"}})}catch{}},[]);return{loading:o,error:n,searchStations:l,getTopStations:u,getStationsByCountry:f,getStationsByTag:p,getStationsWithGeo:d,getCountries:_,getGenres:v,recordClick:g}}const ww=["Jazz","Electronic","Classical","News","Rock","Hip Hop","World","Ambient","Talk","Indie","Reggae","Blues"];function Dw({onStationClick:o,currentStation:t,favorites:n}){const[a,s]=Vt.useState("Jazz"),[l,u]=Vt.useState([]),{getStationsByTag:f,loading:p}=x1();Vt.useEffect(()=>{(async()=>{const v=await f(a,3);u(v)})()},[a,f]);const d=_=>_?.toLowerCase()||"";return V.jsx("section",{"code-path":"src/sections/GenreExplorer.tsx:32:5",id:"genres",className:"relative bg-white py-24 px-8 z-10",children:V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:33:7",className:"max-w-[1400px] mx-auto",children:V.jsxs("div",{"code-path":"src/sections/GenreExplorer.tsx:34:9",className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[V.jsxs("div",{"code-path":"src/sections/GenreExplorer.tsx:36:11",children:[V.jsx("h2",{"code-path":"src/sections/GenreExplorer.tsx:37:13",className:"font-serif text-[40px] leading-tight text-[#0A0A0A] mb-8",children:"Explore by Genre"}),V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:40:13",className:"flex flex-wrap gap-3",children:ww.map(_=>V.jsx("button",{"code-path":"src/sections/GenreExplorer.tsx:42:17",onClick:()=>s(_),className:`px-5 py-2 border rounded-full font-serif text-[14px] uppercase tracking-wider transition-all duration-200 ${a===_?"bg-[#E8542E] border-[#E8542E] text-white":"border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#E8542E] hover:border-[#E8542E] hover:text-white"}`,children:_},_))}),V.jsxs("p",{"code-path":"src/sections/GenreExplorer.tsx:57:13",className:"mt-8 text-[16px] text-[#6B6560] leading-relaxed",children:["Discover stations curated for the ",a.toLowerCase()," genre. From mainstream hits to underground gems, tune into the sound that moves you."]})]}),V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:63:11",children:p?V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:65:15",className:"flex items-center justify-center h-full",children:V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:66:17",className:"font-mono text-[12px] uppercase tracking-wider text-[#6B6560]",children:"Loading..."})}):V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:69:15",className:"space-y-3",children:l.map(_=>{const v=_.tags?.split(",").filter(Boolean).slice(0,3)||[],g=d(_.countrycode),x=t?.stationuuid===_.stationuuid;return V.jsxs("button",{"code-path":"src/sections/GenreExplorer.tsx:76:21",onClick:()=>o(_),className:"w-full flex items-center gap-4 bg-[#F2EFE4] rounded-lg p-4 text-left transition-transform duration-200 hover:-translate-y-0.5 cursor-pointer group",children:[V.jsx("div",{"code-path":"src/sections/GenreExplorer.tsx:81:23",className:"w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden",children:_.favicon?V.jsx("img",{"code-path":"src/sections/GenreExplorer.tsx:83:27",src:_.favicon,alt:"",className:"w-8 h-8 object-contain",onError:M=>{M.target.style.display="none"}}):V.jsxs("svg",{"code-path":"src/sections/GenreExplorer.tsx:90:27",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#6B6560",strokeWidth:"1.5",children:[V.jsx("circle",{"code-path":"src/sections/GenreExplorer.tsx:91:29",cx:"12",cy:"12",r:"3"}),V.jsx("path",{"code-path":"src/sections/GenreExplorer.tsx:92:29",d:"M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"})]})}),V.jsxs("div",{"code-path":"src/sections/GenreExplorer.tsx:96:23",className:"flex-1 min-w-0",children:[V.jsx("h3",{"code-path":"src/sections/GenreExplorer.tsx:97:25",className:"font-serif text-[16px] font-bold text-[#0A0A0A] truncate",children:_.name}),V.jsxs("div",{"code-path":"src/sections/GenreExplorer.tsx:100:25",className:"flex items-center gap-2 text-[12px] text-[#6B6560]",children:[g&&V.jsx("img",{"code-path":"src/sections/GenreExplorer.tsx:102:29",src:`https://flagcdn.com/w20/${g}.png`,alt:"",className:"w-4 h-auto"}),V.jsx("span",{"code-path":"src/sections/GenreExplorer.tsx:104:27",className:"truncate",children:_.country||"Unknown"}),v.length>0&&V.jsxs(V.Fragment,{children:[V.jsx("span",{"code-path":"src/sections/GenreExplorer.tsx:107:31",children:"·"}),V.jsx("span",{"code-path":"src/sections/GenreExplorer.tsx:108:31",className:"truncate",children:v.join(", ")})]})]})]}),V.jsx("span",{"code-path":"src/sections/GenreExplorer.tsx:113:23",className:`font-mono text-[12px] uppercase tracking-wider flex-shrink-0 ${x?"text-[#E8542E]":"text-[#E8542E] opacity-0 group-hover:opacity-100 transition-opacity"}`,children:x?"PLAYING":"TUNE IN"}),n.has(_.stationuuid)&&V.jsx("svg",{"code-path":"src/sections/GenreExplorer.tsx:117:25",width:"14",height:"14",viewBox:"0 0 24 24",fill:"#E8542E",className:"flex-shrink-0",children:V.jsx("path",{"code-path":"src/sections/GenreExplorer.tsx:118:27",d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})]},_.stationuuid)})})})]})})})}function Uw({stations:o,onStationClick:t,currentStation:n}){return V.jsx("section",{"code-path":"src/sections/RecentlyPlayed.tsx:11:5",className:"relative bg-[#F2EFE4] py-12 px-8 z-10",children:V.jsxs("div",{"code-path":"src/sections/RecentlyPlayed.tsx:12:7",className:"max-w-[1400px] mx-auto",children:[V.jsx("h2",{"code-path":"src/sections/RecentlyPlayed.tsx:13:9",className:"font-serif text-[24px] uppercase tracking-[0.08em] text-[#0A0A0A] mb-6",children:"Recently Played"}),V.jsx("div",{"code-path":"src/sections/RecentlyPlayed.tsx:17:9",className:"max-h-[300px] overflow-y-auto scrollbar-hide",children:o.length===0?V.jsx("p",{"code-path":"src/sections/RecentlyPlayed.tsx:19:13",className:"text-[14px] text-[#6B6560]",children:"No stations played yet. Start tuning!"}):o.map((a,s)=>{const l=n?.stationuuid===a.stationuuid;return V.jsxs("button",{"code-path":"src/sections/RecentlyPlayed.tsx:24:17",onClick:()=>t(a),className:`w-full flex items-center justify-between py-3 px-4 text-left transition-colors duration-200 rounded-md ${l?"bg-white":"hover:bg-white/50"}`,children:[V.jsx("span",{"code-path":"src/sections/RecentlyPlayed.tsx:31:19",className:`font-serif text-[14px] truncate ${l?"text-[#E8542E]":"text-[#0A0A0A]"}`,children:a.name}),V.jsx("span",{"code-path":"src/sections/RecentlyPlayed.tsx:34:19",className:"font-mono text-[12px] uppercase tracking-wider text-[#6B6560] flex-shrink-0",children:a.country||"Unknown"})]},`${a.stationuuid}-${s}`)})})]})})}function Nw(){const o=[{label:"About",href:"#"},{label:"API",href:"https://api.radio-browser.info/"},{label:"GitHub",href:"#"},{label:"Privacy",href:"#"}];return V.jsx("footer",{"code-path":"src/sections/Footer.tsx:10:5",id:"footer",className:"relative bg-[#0A0A0A] py-12 px-8 z-10",children:V.jsxs("div",{"code-path":"src/sections/Footer.tsx:11:7",className:"max-w-[1400px] mx-auto",children:[V.jsxs("div",{"code-path":"src/sections/Footer.tsx:12:9",className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",children:[V.jsxs("div",{"code-path":"src/sections/Footer.tsx:14:11",children:[V.jsx("h3",{"code-path":"src/sections/Footer.tsx:15:13",className:"font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4",children:"Links"}),V.jsx("div",{"code-path":"src/sections/Footer.tsx:16:13",className:"space-y-2",children:o.map(t=>V.jsx("a",{"code-path":"src/sections/Footer.tsx:18:17",href:t.href,className:"block font-serif text-[14px] text-[#F2EFE4] hover:text-[#E8542E] transition-colors duration-200",target:t.href.startsWith("http")?"_blank":void 0,rel:t.href.startsWith("http")?"noopener noreferrer":void 0,children:t.label},t.label))})]}),V.jsxs("div",{"code-path":"src/sections/Footer.tsx:32:11",children:[V.jsx("h3",{"code-path":"src/sections/Footer.tsx:33:13",className:"font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4",children:"Powered By"}),V.jsx("p",{"code-path":"src/sections/Footer.tsx:34:13",className:"font-serif text-[14px] text-[#F2EFE4]",children:"Radio Browser API — a community-driven open-source database of internet radio stations worldwide."})]}),V.jsxs("div",{"code-path":"src/sections/Footer.tsx:40:11",children:[V.jsx("h3",{"code-path":"src/sections/Footer.tsx:41:13",className:"font-mono text-[11px] uppercase tracking-[0.12em] text-[#6B6560] mb-4",children:"Connect"}),V.jsxs("div",{"code-path":"src/sections/Footer.tsx:42:13",className:"flex gap-4",children:[V.jsx("a",{"code-path":"src/sections/Footer.tsx:43:15",href:"#",className:"text-[#F2EFE4] hover:text-[#E8542E] transition-colors",children:V.jsx("svg",{"code-path":"src/sections/Footer.tsx:44:17",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:V.jsx("path",{"code-path":"src/sections/Footer.tsx:45:19",d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})}),V.jsx("a",{"code-path":"src/sections/Footer.tsx:48:15",href:"#",className:"text-[#F2EFE4] hover:text-[#E8542E] transition-colors",children:V.jsxs("svg",{"code-path":"src/sections/Footer.tsx:49:17",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[V.jsx("rect",{"code-path":"src/sections/Footer.tsx:50:19",x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),V.jsx("path",{"code-path":"src/sections/Footer.tsx:51:19",d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),V.jsx("line",{"code-path":"src/sections/Footer.tsx:52:19",x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),V.jsx("a",{"code-path":"src/sections/Footer.tsx:55:15",href:"#",className:"text-[#F2EFE4] hover:text-[#E8542E] transition-colors",children:V.jsx("svg",{"code-path":"src/sections/Footer.tsx:56:17",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:V.jsx("path",{"code-path":"src/sections/Footer.tsx:57:19",d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"})})})]})]})]}),V.jsx("div",{"code-path":"src/sections/Footer.tsx:65:9",className:"border-t border-[#6B6560]/30 pt-6",children:V.jsx("p",{"code-path":"src/sections/Footer.tsx:66:11",className:"font-mono text-[11px] uppercase tracking-wider text-[#6B6560]",children:"Tuner Global 2025"})})]})})}function Lw({station:o,isPlaying:t,isLoading:n,error:a,volume:s,isMuted:l,analyser:u,onTogglePlay:f,onVolumeChange:p,onToggleMute:d}){return o?V.jsx("div",{"code-path":"src/sections/AudioPlayer.tsx:32:5",className:"fixed bottom-0 left-0 right-0 h-[72px] bg-[#0A0A0A] z-[200] flex items-center px-6",children:V.jsxs("div",{"code-path":"src/sections/AudioPlayer.tsx:33:7",className:"flex items-center justify-between w-full max-w-[1600px] mx-auto",children:[V.jsxs("div",{"code-path":"src/sections/AudioPlayer.tsx:35:9",className:"flex items-center gap-3",children:[V.jsx(g1,{"code-path":"src/sections/AudioPlayer.tsx:36:11",analyser:u,isPlaying:t,width:120,height:40,barColor:"#E8542E"}),t&&V.jsxs("div",{"code-path":"src/sections/AudioPlayer.tsx:44:13",className:"hidden sm:flex items-center gap-1.5",children:[V.jsx("div",{"code-path":"src/sections/AudioPlayer.tsx:45:15",className:"w-2 h-2 rounded-full bg-[#E8542E] animate-on-air"}),V.jsx("span",{"code-path":"src/sections/AudioPlayer.tsx:46:15",className:"font-mono text-[10px] uppercase tracking-wider text-[#E8542E]",children:"ON AIR"})]})]}),V.jsxs("div",{"code-path":"src/sections/AudioPlayer.tsx:52:9",className:"flex items-center gap-4",children:[V.jsx("span",{"code-path":"src/sections/AudioPlayer.tsx:53:11",className:"font-serif text-[16px] text-[#F2EFE4] hidden sm:block max-w-[200px] truncate",children:o.name}),V.jsx("button",{"code-path":"src/sections/AudioPlayer.tsx:57:11",onClick:f,disabled:n,className:"w-10 h-10 rounded-full border border-[#F2EFE4] flex items-center justify-center text-[#F2EFE4] hover:border-[#E8542E] hover:text-[#E8542E] transition-colors duration-200 disabled:opacity-50",children:n?V.jsx("svg",{"code-path":"src/sections/AudioPlayer.tsx:63:15",width:"16",height:"16",viewBox:"0 0 16 16",className:"animate-spin",children:V.jsx("circle",{"code-path":"src/sections/AudioPlayer.tsx:64:17",cx:"8",cy:"8",r:"6",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeDasharray:"20 10"})}):t?V.jsxs("svg",{"code-path":"src/sections/AudioPlayer.tsx:67:15",width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:[V.jsx("rect",{"code-path":"src/sections/AudioPlayer.tsx:68:17",x:"2",y:"1",width:"3.5",height:"12",rx:"1"}),V.jsx("rect",{"code-path":"src/sections/AudioPlayer.tsx:69:17",x:"8.5",y:"1",width:"3.5",height:"12",rx:"1"})]}):V.jsx("svg",{"code-path":"src/sections/AudioPlayer.tsx:72:15",width:"14",height:"14",viewBox:"0 0 14 14",fill:"currentColor",children:V.jsx("polygon",{"code-path":"src/sections/AudioPlayer.tsx:73:17",points:"3,1 13,7 3,13"})})})]}),V.jsxs("div",{"code-path":"src/sections/AudioPlayer.tsx:80:9",className:"flex items-center gap-3",children:[a&&V.jsx("span",{"code-path":"src/sections/AudioPlayer.tsx:82:13",className:"font-mono text-[11px] uppercase tracking-wider text-[#E8542E] hidden md:block",children:a}),V.jsx("button",{"code-path":"src/sections/AudioPlayer.tsx:87:11",onClick:d,className:"text-[#F2EFE4] hover:text-[#E8542E] transition-colors",children:l||s===0?V.jsxs("svg",{"code-path":"src/sections/AudioPlayer.tsx:92:15",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[V.jsx("polygon",{"code-path":"src/sections/AudioPlayer.tsx:93:17",points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),V.jsx("line",{"code-path":"src/sections/AudioPlayer.tsx:94:17",x1:"23",y1:"9",x2:"17",y2:"15"}),V.jsx("line",{"code-path":"src/sections/AudioPlayer.tsx:95:17",x1:"17",y1:"9",x2:"23",y2:"15"})]}):V.jsxs("svg",{"code-path":"src/sections/AudioPlayer.tsx:98:15",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[V.jsx("polygon",{"code-path":"src/sections/AudioPlayer.tsx:99:17",points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5"}),V.jsx("path",{"code-path":"src/sections/AudioPlayer.tsx:100:17",d:"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"})]})}),V.jsx("input",{"code-path":"src/sections/AudioPlayer.tsx:105:11",type:"range",min:"0",max:"1",step:"0.01",value:l?0:s,onChange:_=>p(parseFloat(_.target.value)),className:"w-20 h-0.5 appearance-none bg-[#6B6560] rounded-full accent-[#E8542E] cursor-pointer",style:{background:`linear-gradient(to right, #E8542E ${(l?0:s)*100}%, #6B6560 ${(l?0:s)*100}%)`}})]})]})}):null}function Ow(){const o=Vt.useRef(null),t=Vt.useRef(null),n=Vt.useRef(null),a=Vt.useRef(null),[s,l]=Vt.useState({isPlaying:!1,isLoading:!1,volume:.8,isMuted:!1,error:null}),u=Vt.useCallback(()=>n.current,[]),f=Vt.useCallback(()=>{if(o.current){if(!t.current){const x=new AudioContext;t.current=x;const M=x.createAnalyser();M.fftSize=128,n.current=M;try{const E=x.createMediaElementSource(o.current);E.connect(M),M.connect(x.destination),a.current=E}catch{}}t.current.state==="suspended"&&t.current.resume()}},[]),p=Vt.useCallback(x=>{o.current||(o.current=new Audio,o.current.crossOrigin="anonymous");const M=o.current;if(M.src===x&&s.isPlaying){M.pause(),l(A=>({...A,isPlaying:!1,isLoading:!1}));return}if(M.src===x&&!s.isPlaying){f(),M.play().then(()=>{l(A=>({...A,isPlaying:!0,isLoading:!1,error:null}))}).catch(()=>{l(A=>({...A,error:"Playback failed"}))});return}l(A=>({...A,isLoading:!0,error:null,isPlaying:!1})),M.pause(),M.src=x,M.volume=s.volume,M.muted=s.isMuted,f();const E=()=>{M.play().then(()=>{l(A=>({...A,isPlaying:!0,isLoading:!1,error:null}))}).catch(()=>{l(A=>({...A,isLoading:!1,error:"Playback blocked"}))})},y=()=>{l(A=>({...A,isLoading:!1,error:"Stream unavailable",isPlaying:!1}))},S=()=>{l(A=>({...A,isPlaying:!1}))};M.addEventListener("canplay",E,{once:!0}),M.addEventListener("error",y,{once:!0}),M.addEventListener("ended",S,{once:!0})},[s.volume,s.isMuted,s.isPlaying,f]),d=Vt.useCallback(()=>{o.current&&(s.isPlaying?(o.current.pause(),l(x=>({...x,isPlaying:!1}))):(f(),o.current.play().then(()=>{l(x=>({...x,isPlaying:!0,error:null}))}).catch(()=>{l(x=>({...x,error:"Playback failed"}))})))},[s.isPlaying,f]),_=Vt.useCallback(x=>{o.current&&(o.current.volume=x),l(M=>({...M,volume:x}))},[]),v=Vt.useCallback(()=>{o.current&&(o.current.muted=!s.isMuted),l(x=>({...x,isMuted:!x.isMuted}))},[s.isMuted]),g=Vt.useCallback(()=>{o.current&&(o.current.pause(),o.current.src=""),l(x=>({...x,isPlaying:!1,isLoading:!1,error:null}))},[]);return Vt.useEffect(()=>()=>{o.current&&(o.current.pause(),o.current.src=""),t.current&&t.current.close()},[]),{...s,play:p,togglePlay:d,setVolume:_,toggleMute:v,stop:g,getAnalyser:u}}function Pw(){const[o,t]=Vt.useState([]),[n,a]=Vt.useState([]),[s,l]=Vt.useState(null),[u,f]=Vt.useState(!1),[p,d]=Vt.useState(!1),[_,v]=Vt.useState(()=>{try{const B=localStorage.getItem("tuner_favorites");return B?new Set(JSON.parse(B)):new Set}catch{return new Set}}),[g,x]=Vt.useState(()=>{try{const B=localStorage.getItem("tuner_recent");return B?JSON.parse(B):[]}catch{return[]}}),[M,E]=Vt.useState(1),y=Vt.useRef(null),S=Vt.useRef(null),{getTopStations:A,getStationsWithGeo:w,searchStations:D,recordClick:P}=x1(),N=Ow();Vt.useEffect(()=>{(async()=>{const[W,$]=await Promise.all([A(20),w(30)]);t(W),a($)})()},[A,w]),Vt.useEffect(()=>{const B=()=>{const W=window.scrollY,$=window.innerHeight,lt=Math.max(0,1-W/$);E(lt)};return window.addEventListener("scroll",B),()=>window.removeEventListener("scroll",B)},[]),Vt.useEffect(()=>{localStorage.setItem("tuner_favorites",JSON.stringify([..._]))},[_]),Vt.useEffect(()=>{localStorage.setItem("tuner_recent",JSON.stringify(g))},[g]),Vt.useEffect(()=>{const B=W=>{W.key==="/"&&!p&&(W.preventDefault(),d(!0)),W.key===" "&&s&&(W.preventDefault(),N.togglePlay())};return window.addEventListener("keydown",B),()=>window.removeEventListener("keydown",B)},[p,s,N]);const O=Vt.useCallback(B=>{l(B),f(!0);const W=B.url_resolved||B.url;W&&(N.play(W),P(B.stationuuid)),x($=>{const lt=$.filter(X=>X.stationuuid!==B.stationuuid);return[B,...lt].slice(0,10)})},[N,P]),T=Vt.useCallback(B=>{v(W=>{const $=new Set(W);return $.has(B.stationuuid)?$.delete(B.stationuuid):$.add(B.stationuuid),$})},[]),L=Vt.useCallback(B=>{if(B==="hero")window.scrollTo({top:0,behavior:"smooth"});else{const W=document.getElementById(B);W&&W.scrollIntoView({behavior:"smooth"})}},[]),k=Vt.useCallback(async B=>D(B,30),[D]);return V.jsxs("div",{"code-path":"src/App.tsx:140:5",className:"relative min-h-screen bg-[#F2EFE4]",children:[V.jsx("div",{"code-path":"src/App.tsx:142:7",className:"fixed inset-0 z-0",style:{opacity:M},children:V.jsx(Ew,{"code-path":"src/App.tsx:146:9",stations:n,selectedStation:s,onStationClick:O})}),V.jsx(Aw,{"code-path":"src/App.tsx:154:7",onNavClick:L,isPlaying:N.isPlaying}),V.jsxs("div",{"code-path":"src/App.tsx:160:7",ref:y,id:"hero",className:"relative z-10 h-screen flex items-start justify-start pointer-events-none",children:[V.jsxs("div",{"code-path":"src/App.tsx:165:9",className:"pt-32 pl-12 max-w-[500px]",children:[V.jsx("h1",{"code-path":"src/App.tsx:166:11",className:"font-serif text-[64px] leading-none text-[#0A0A0A] mb-4",style:{textShadow:"0 1px 8px rgba(242, 238, 228, 0.8)"},children:"Tune Into the World"}),V.jsx("p",{"code-path":"src/App.tsx:172:11",className:"font-serif text-[24px] text-[#6B6560]",style:{textShadow:"0 1px 8px rgba(242, 238, 228, 0.8)"},children:"50,000+ live radio stations. One click away."}),V.jsxs("button",{"code-path":"src/App.tsx:180:11",onClick:()=>d(!0),className:"pointer-events-auto mt-8 flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[#E8E4D9] hover:border-[#E8542E] transition-colors group",children:[V.jsxs("svg",{"code-path":"src/App.tsx:184:13",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"#6B6560",strokeWidth:"1.5",className:"group-hover:stroke-[#E8542E] transition-colors",children:[V.jsx("circle",{"code-path":"src/App.tsx:185:15",cx:"11",cy:"11",r:"8"}),V.jsx("line",{"code-path":"src/App.tsx:186:15",x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),V.jsxs("span",{"code-path":"src/App.tsx:188:13",className:"font-serif text-[14px] text-[#6B6560] group-hover:text-[#0A0A0A]",children:["Search stations... ",V.jsx("span",{"code-path":"src/App.tsx:189:34",className:"font-mono text-[11px]",children:"(Press /)"})]})]})]}),V.jsx("div",{"code-path":"src/App.tsx:195:9",className:"absolute bottom-8 left-1/2 -translate-x-1/2",children:V.jsx("svg",{"code-path":"src/App.tsx:196:11",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#E8542E",strokeWidth:"1.5",className:"animate-bounce-chevron",children:V.jsx("polyline",{"code-path":"src/App.tsx:205:13",points:"6 9 12 15 18 9"})})})]}),V.jsxs("div",{"code-path":"src/App.tsx:211:7",ref:S,className:"relative z-10",children:[V.jsx(Rw,{"code-path":"src/App.tsx:212:9",stations:o,currentStation:s,onStationClick:O,favorites:_}),V.jsx(Dw,{"code-path":"src/App.tsx:219:9",onStationClick:O,currentStation:s,favorites:_}),V.jsx(Uw,{"code-path":"src/App.tsx:225:9",stations:g,onStationClick:O,currentStation:s}),V.jsx(Nw,{"code-path":"src/App.tsx:231:9"})]}),V.jsx(bw,{"code-path":"src/App.tsx:235:7",station:s,isOpen:u,onClose:()=>f(!1),isPlaying:N.isPlaying,analyser:N.getAnalyser(),onTogglePlay:N.togglePlay,onAddFavorite:T,isFavorite:s?_.has(s.stationuuid):!1}),V.jsx(Tw,{"code-path":"src/App.tsx:247:7",isOpen:p,onClose:()=>d(!1),onSearch:k,onStationClick:O,currentStation:s,favorites:_}),V.jsx(Lw,{"code-path":"src/App.tsx:257:7",station:s,isPlaying:N.isPlaying,isLoading:N.isLoading,error:N.error,volume:N.volume,isMuted:N.isMuted,analyser:N.getAnalyser(),onTogglePlay:N.togglePlay,onVolumeChange:N.setVolume,onToggleMute:N.toggleMute})]})}UE.createRoot(document.getElementById("root")).render(V.jsx(Pw,{"code-path":"src/main.tsx:5:53"}));
