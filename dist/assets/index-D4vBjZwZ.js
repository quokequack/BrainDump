(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function br(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const ee={},Pt=[],Je=()=>{},zs=()=>!1,Cn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),kn=e=>e.startsWith("onUpdate:"),ge=Object.assign,vr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},si=Object.prototype.hasOwnProperty,Y=(e,t)=>si.call(e,t),F=Array.isArray,Nt=e=>fn(e)==="[object Map]",Ms=e=>fn(e)==="[object Set]",qr=e=>fn(e)==="[object Date]",V=e=>typeof e=="function",re=e=>typeof e=="string",Xe=e=>typeof e=="symbol",W=e=>e!==null&&typeof e=="object",Bs=e=>(W(e)||V(e))&&V(e.then)&&V(e.catch),Fs=Object.prototype.toString,fn=e=>Fs.call(e),oi=e=>fn(e).slice(8,-1),Us=e=>fn(e)==="[object Object]",hr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,$t=br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ii=/-\w/g,ke=In(e=>e.replace(ii,t=>t.slice(1).toUpperCase())),ai=/\B([A-Z])/g,Ot=In(e=>e.replace(ai,"-$1").toLowerCase()),Vs=In(e=>e.charAt(0).toUpperCase()+e.slice(1)),Un=In(e=>e?`on${Vs(e)}`:""),Ye=(e,t)=>!Object.is(e,t),Vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Gs=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},li=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Kr;const Ln=()=>Kr||(Kr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=re(r)?fi(r):yr(r);if(s)for(const o in s)t[o]=s[o]}return t}else if(re(e)||W(e))return e}const ci=/;(?![^(]*\))/g,di=/:([^]+)/,pi=/\/\*[^]*?\*\//g;function fi(e){const t={};return e.replace(pi,"").split(ci).forEach(n=>{if(n){const r=n.split(di);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function xr(e){let t="";if(re(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=xr(e[n]);r&&(t+=r+" ")}else if(W(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const mi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ui=br(mi);function Hs(e){return!!e||e===""}function gi(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Er(e[r],t[r]);return n}function Er(e,t){if(e===t)return!0;let n=qr(e),r=qr(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Xe(e),r=Xe(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?gi(e,t):!1;if(n=W(e),r=W(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,o=Object.keys(t).length;if(s!==o)return!1;for(const i in e){const a=e.hasOwnProperty(i),l=t.hasOwnProperty(i);if(a&&!l||!a&&l||!Er(e[i],t[i]))return!1}}return String(e)===String(t)}const js=e=>!!(e&&e.__v_isRef===!0),ie=e=>re(e)?e:e==null?"":F(e)||W(e)&&(e.toString===Fs||!V(e.toString))?js(e)?ie(e.value):JSON.stringify(e,qs,2):String(e),qs=(e,t)=>js(t)?qs(e,t.value):Nt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],o)=>(n[Gn(r,o)+" =>"]=s,n),{})}:Ms(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Gn(n))}:Xe(t)?Gn(t):W(t)&&!F(t)&&!Us(t)?String(t):t,Gn=(e,t="")=>{var n;return Xe(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let me;class bi{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&me&&(me.active?(this.parent=me,this.index=(me.scopes||(me.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=me;try{return me=this,t()}finally{me=n}}}on(){++this._on===1&&(this.prevScope=me,me=this)}off(){if(this._on>0&&--this._on===0){if(me===this)me=this.prevScope;else{let t=me;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function vi(){return me}let Z;const Hn=new WeakSet;class Ks{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,me&&(me.active?me.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Hn.has(this)&&(Hn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ws(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yr(this),Js(this);const t=Z,n=Ie;Z=this,Ie=!0;try{return this.fn()}finally{$s(this),Z=t,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Rr(t);this.deps=this.depsTail=void 0,Yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Hn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tr(this)&&this.run()}get dirty(){return tr(this)}}let Ys=0,Xt,Qt;function Ws(e,t=!1){if(e.flags|=8,t){e.next=Qt,Qt=e;return}e.next=Xt,Xt=e}function Ar(){Ys++}function wr(){if(--Ys>0)return;if(Qt){let t=Qt;for(Qt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Xt;){let t=Xt;for(Xt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Js(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function $s(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Rr(r),hi(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function tr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Xs(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Xs(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===sn)||(e.globalVersion=sn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!tr(e))))return;e.flags|=2;const t=e.dep,n=Z,r=Ie;Z=e,Ie=!0;try{Js(e);const s=e.fn(e._value);(t.version===0||Ye(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{Z=n,Ie=r,$s(e),e.flags&=-3}}function Rr(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Rr(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hi(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ie=!0;const Qs=[];function ot(){Qs.push(Ie),Ie=!1}function it(){const e=Qs.pop();Ie=e===void 0?!0:e}function Yr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let sn=0;class yi{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Sr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Z||!Ie||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new yi(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,Zs(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=r)}return n}trigger(t){this.version++,sn++,this.notify(t)}notify(t){Ar();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{wr()}}}function Zs(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Zs(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const nr=new WeakMap,Rt=Symbol(""),rr=Symbol(""),on=Symbol("");function be(e,t,n){if(Ie&&Z){let r=nr.get(e);r||nr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new Sr),s.map=r,s.key=n),s.track()}}function st(e,t,n,r,s,o){const i=nr.get(e);if(!i){sn++;return}const a=l=>{l&&l.trigger()};if(Ar(),t==="clear")i.forEach(a);else{const l=F(e),f=l&&hr(n);if(l&&n==="length"){const d=Number(r);i.forEach((m,g)=>{(g==="length"||g===on||!Xe(g)&&g>=d)&&a(m)})}else switch((n!==void 0||i.has(void 0))&&a(i.get(n)),f&&a(i.get(on)),t){case"add":l?f&&a(i.get("length")):(a(i.get(Rt)),Nt(e)&&a(i.get(rr)));break;case"delete":l||(a(i.get(Rt)),Nt(e)&&a(i.get(rr)));break;case"set":Nt(e)&&a(i.get(Rt));break}}wr()}function It(e){const t=K(e);return t===e?t:(be(t,"iterate",on),Ce(e)?t:t.map(Le))}function Dn(e){return be(e=K(e),"iterate",on),e}function qe(e,t){return at(e)?Bt(St(e)?Le(t):t):Le(t)}const xi={__proto__:null,[Symbol.iterator](){return jn(this,Symbol.iterator,e=>qe(this,e))},concat(...e){return It(this).concat(...e.map(t=>F(t)?It(t):t))},entries(){return jn(this,"entries",e=>(e[1]=qe(this,e[1]),e))},every(e,t){return et(this,"every",e,t,void 0,arguments)},filter(e,t){return et(this,"filter",e,t,n=>n.map(r=>qe(this,r)),arguments)},find(e,t){return et(this,"find",e,t,n=>qe(this,n),arguments)},findIndex(e,t){return et(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return et(this,"findLast",e,t,n=>qe(this,n),arguments)},findLastIndex(e,t){return et(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return et(this,"forEach",e,t,void 0,arguments)},includes(...e){return qn(this,"includes",e)},indexOf(...e){return qn(this,"indexOf",e)},join(e){return It(this).join(e)},lastIndexOf(...e){return qn(this,"lastIndexOf",e)},map(e,t){return et(this,"map",e,t,void 0,arguments)},pop(){return qt(this,"pop")},push(...e){return qt(this,"push",e)},reduce(e,...t){return Wr(this,"reduce",e,t)},reduceRight(e,...t){return Wr(this,"reduceRight",e,t)},shift(){return qt(this,"shift")},some(e,t){return et(this,"some",e,t,void 0,arguments)},splice(...e){return qt(this,"splice",e)},toReversed(){return It(this).toReversed()},toSorted(e){return It(this).toSorted(e)},toSpliced(...e){return It(this).toSpliced(...e)},unshift(...e){return qt(this,"unshift",e)},values(){return jn(this,"values",e=>qe(this,e))}};function jn(e,t,n){const r=Dn(e),s=r[t]();return r!==e&&!Ce(e)&&(s._next=s.next,s.next=()=>{const o=s._next();return o.done||(o.value=n(o.value)),o}),s}const Ei=Array.prototype;function et(e,t,n,r,s,o){const i=Dn(e),a=i!==e&&!Ce(e),l=i[t];if(l!==Ei[t]){const m=l.apply(e,o);return a?Le(m):m}let f=n;i!==e&&(a?f=function(m,g){return n.call(this,qe(e,m),g,e)}:n.length>2&&(f=function(m,g){return n.call(this,m,g,e)}));const d=l.call(i,f,r);return a&&s?s(d):d}function Wr(e,t,n,r){const s=Dn(e),o=s!==e&&!Ce(e);let i=n,a=!1;s!==e&&(o?(a=r.length===0,i=function(f,d,m){return a&&(a=!1,f=qe(e,f)),n.call(this,f,qe(e,d),m,e)}):n.length>3&&(i=function(f,d,m){return n.call(this,f,d,m,e)}));const l=s[t](i,...r);return a?qe(e,l):l}function qn(e,t,n){const r=K(e);be(r,"iterate",on);const s=r[t](...n);return(s===-1||s===!1)&&_r(n[0])?(n[0]=K(n[0]),r[t](...n)):s}function qt(e,t,n=[]){ot(),Ar();const r=K(e)[t].apply(e,n);return wr(),it(),r}const Ai=br("__proto__,__v_isRef,__isVue"),eo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xe));function wi(e){Xe(e)||(e=String(e));const t=K(this);return be(t,"has",e),t.hasOwnProperty(e)}class to{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(s?o?Di:oo:o?so:ro).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=F(t);if(!s){let l;if(i&&(l=xi[n]))return l;if(n==="hasOwnProperty")return wi}const a=Reflect.get(t,n,ve(t)?t:r);if((Xe(n)?eo.has(n):Ai(n))||(s||be(t,"get",n),o))return a;if(ve(a)){const l=i&&hr(n)?a:a.value;return s&&W(l)?or(l):l}return W(a)?s?or(a):Pn(a):a}}class no extends to{constructor(t=!1){super(!1,t)}set(t,n,r,s){let o=t[n];const i=F(t)&&hr(n);if(!this._isShallow){const f=at(o);if(!Ce(r)&&!at(r)&&(o=K(o),r=K(r)),!i&&ve(o)&&!ve(r))return f||(o.value=r),!0}const a=i?Number(n)<t.length:Y(t,n),l=Reflect.set(t,n,r,ve(t)?t:s);return t===K(s)&&(a?Ye(r,o)&&st(t,"set",n,r):st(t,"add",n,r)),l}deleteProperty(t,n){const r=Y(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&st(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!Xe(n)||!eo.has(n))&&be(t,"has",n),r}ownKeys(t){return be(t,"iterate",F(t)?"length":Rt),Reflect.ownKeys(t)}}class Ri extends to{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Si=new no,Ti=new Ri,Oi=new no(!0);const sr=e=>e,gn=e=>Reflect.getPrototypeOf(e);function _i(e,t,n){return function(...r){const s=this.__v_raw,o=K(s),i=Nt(o),a=e==="entries"||e===Symbol.iterator&&i,l=e==="keys"&&i,f=s[e](...r),d=n?sr:t?Bt:Le;return!t&&be(o,"iterate",l?rr:Rt),ge(Object.create(f),{next(){const{value:m,done:g}=f.next();return g?{value:m,done:g}:{value:a?[d(m[0]),d(m[1])]:d(m),done:g}}})}}function bn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Ci(e,t){const n={get(s){const o=this.__v_raw,i=K(o),a=K(s);e||(Ye(s,a)&&be(i,"get",s),be(i,"get",a));const{has:l}=gn(i),f=t?sr:e?Bt:Le;if(l.call(i,s))return f(o.get(s));if(l.call(i,a))return f(o.get(a));o!==i&&o.get(s)},get size(){const s=this.__v_raw;return!e&&be(K(s),"iterate",Rt),s.size},has(s){const o=this.__v_raw,i=K(o),a=K(s);return e||(Ye(s,a)&&be(i,"has",s),be(i,"has",a)),s===a?o.has(s):o.has(s)||o.has(a)},forEach(s,o){const i=this,a=i.__v_raw,l=K(a),f=t?sr:e?Bt:Le;return!e&&be(l,"iterate",Rt),a.forEach((d,m)=>s.call(o,f(d),f(m),i))}};return ge(n,e?{add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear")}:{add(s){const o=K(this),i=gn(o),a=K(s),l=!t&&!Ce(s)&&!at(s)?a:s;return i.has.call(o,l)||Ye(s,l)&&i.has.call(o,s)||Ye(a,l)&&i.has.call(o,a)||(o.add(l),st(o,"add",l,l)),this},set(s,o){!t&&!Ce(o)&&!at(o)&&(o=K(o));const i=K(this),{has:a,get:l}=gn(i);let f=a.call(i,s);f||(s=K(s),f=a.call(i,s));const d=l.call(i,s);return i.set(s,o),f?Ye(o,d)&&st(i,"set",s,o):st(i,"add",s,o),this},delete(s){const o=K(this),{has:i,get:a}=gn(o);let l=i.call(o,s);l||(s=K(s),l=i.call(o,s)),a&&a.call(o,s);const f=o.delete(s);return l&&st(o,"delete",s,void 0),f},clear(){const s=K(this),o=s.size!==0,i=s.clear();return o&&st(s,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_i(s,e,t)}),n}function Tr(e,t){const n=Ci(e,t);return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Y(n,s)&&s in r?n:r,s,o)}const ki={get:Tr(!1,!1)},Ii={get:Tr(!1,!0)},Li={get:Tr(!0,!1)};const ro=new WeakMap,so=new WeakMap,oo=new WeakMap,Di=new WeakMap;function Pi(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ni(e){return e.__v_skip||!Object.isExtensible(e)?0:Pi(oi(e))}function Pn(e){return at(e)?e:Or(e,!1,Si,ki,ro)}function io(e){return Or(e,!1,Oi,Ii,so)}function or(e){return Or(e,!0,Ti,Li,oo)}function Or(e,t,n,r,s){if(!W(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=Ni(e);if(o===0)return e;const i=s.get(e);if(i)return i;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function St(e){return at(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function at(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function _r(e){return e?!!e.__v_raw:!1}function K(e){const t=e&&e.__v_raw;return t?K(t):e}function zi(e){return!Y(e,"__v_skip")&&Object.isExtensible(e)&&Gs(e,"__v_skip",!0),e}const Le=e=>W(e)?Pn(e):e,Bt=e=>W(e)?or(e):e;function ve(e){return e?e.__v_isRef===!0:!1}function Mi(e){return ao(e,!1)}function Bi(e){return ao(e,!0)}function ao(e,t){return ve(e)?e:new Fi(e,t)}class Fi{constructor(t,n){this.dep=new Sr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:K(t),this._value=n?t:Le(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||Ce(t)||at(t);t=r?t:K(t),Ye(t,n)&&(this._rawValue=t,this._value=r?t:Le(t),this.dep.trigger())}}function ae(e){return ve(e)?e.value:e}const Ui={get:(e,t,n)=>t==="__v_raw"?e:ae(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ve(s)&&!ve(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function lo(e){return St(e)?e:new Proxy(e,Ui)}class Vi{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Sr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Ws(this,!0),!0}get value(){const t=this.dep.track();return Xs(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Gi(e,t,n=!1){let r,s;return V(e)?r=e:(r=e.get,s=e.set),new Vi(r,s,n)}const vn={},En=new WeakMap;let At;function Hi(e,t=!1,n=At){if(n){let r=En.get(n);r||En.set(n,r=[]),r.push(e)}}function ji(e,t,n=ee){const{immediate:r,deep:s,once:o,scheduler:i,augmentJob:a,call:l}=n,f=I=>s?I:Ce(I)||s===!1||s===0?gt(I,1):gt(I);let d,m,g,b,k=!1,S=!1;if(ve(e)?(m=()=>e.value,k=Ce(e)):St(e)?(m=()=>f(e),k=!0):F(e)?(S=!0,k=e.some(I=>St(I)||Ce(I)),m=()=>e.map(I=>{if(ve(I))return I.value;if(St(I))return f(I);if(V(I))return l?l(I,2):I()})):V(e)?t?m=l?()=>l(e,2):e:m=()=>{if(g){ot();try{g()}finally{it()}}const I=At;At=d;try{return l?l(e,3,[b]):e(b)}finally{At=I}}:m=Je,t&&s){const I=m,$=s===!0?1/0:s;m=()=>gt(I(),$)}const U=vi(),z=()=>{d.stop(),U&&U.active&&vr(U.effects,d)};if(o&&t){const I=t;t=(...$)=>{I(...$),z()}}let _=S?new Array(e.length).fill(vn):vn;const L=I=>{if(!(!(d.flags&1)||!d.dirty&&!I))if(t){const $=d.run();if(s||k||(S?$.some((pe,te)=>Ye(pe,_[te])):Ye($,_))){g&&g();const pe=At;At=d;try{const te=[$,_===vn?void 0:S&&_[0]===vn?[]:_,b];_=$,l?l(t,3,te):t(...te)}finally{At=pe}}}else d.run()};return a&&a(L),d=new Ks(m),d.scheduler=i?()=>i(L,!1):L,b=I=>Hi(I,!1,d),g=d.onStop=()=>{const I=En.get(d);if(I){if(l)l(I,4);else for(const $ of I)$();En.delete(d)}},t?r?L(!0):_=d.run():i?i(L.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function gt(e,t=1/0,n){if(t<=0||!W(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,ve(e))gt(e.value,t,n);else if(F(e))for(let r=0;r<e.length;r++)gt(e[r],t,n);else if(Ms(e)||Nt(e))e.forEach(r=>{gt(r,t,n)});else if(Us(e)){for(const r in e)gt(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&gt(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mn(e,t,n,r){try{return r?e(...r):e()}catch(s){Nn(s,t,n)}}function Qe(e,t,n,r){if(V(e)){const s=mn(e,t,n,r);return s&&Bs(s)&&s.catch(o=>{Nn(o,t,n)}),s}if(F(e)){const s=[];for(let o=0;o<e.length;o++)s.push(Qe(e[o],t,n,r));return s}}function Nn(e,t,n,r=!0){const s=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||ee;if(t){let a=t.parent;const l=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const d=a.ec;if(d){for(let m=0;m<d.length;m++)if(d[m](e,l,f)===!1)return}a=a.parent}if(o){ot(),mn(o,null,10,[e,l,f]),it();return}}qi(e,n,s,r,i)}function qi(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const xe=[];let je=-1;const zt=[];let mt=null,Lt=0;const co=Promise.resolve();let An=null;function po(e){const t=An||co;return e?t.then(this?e.bind(this):e):t}function Ki(e){let t=je+1,n=xe.length;for(;t<n;){const r=t+n>>>1,s=xe[r],o=an(s);o<e||o===e&&s.flags&2?t=r+1:n=r}return t}function Cr(e){if(!(e.flags&1)){const t=an(e),n=xe[xe.length-1];!n||!(e.flags&2)&&t>=an(n)?xe.push(e):xe.splice(Ki(t),0,e),e.flags|=1,fo()}}function fo(){An||(An=co.then(uo))}function Yi(e){F(e)?zt.push(...e):mt&&e.id===-1?mt.splice(Lt+1,0,e):e.flags&1||(zt.push(e),e.flags|=1),fo()}function Jr(e,t,n=je+1){for(;n<xe.length;n++){const r=xe[n];if(r&&r.flags&2){if(e&&r.id!==e.uid)continue;xe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function mo(e){if(zt.length){const t=[...new Set(zt)].sort((n,r)=>an(n)-an(r));if(zt.length=0,mt){mt.push(...t);return}for(mt=t,Lt=0;Lt<mt.length;Lt++){const n=mt[Lt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mt=null,Lt=0}}const an=e=>e.id==null?e.flags&2?-1:1/0:e.id;function uo(e){try{for(je=0;je<xe.length;je++){const t=xe[je];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),mn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;je<xe.length;je++){const t=xe[je];t&&(t.flags&=-2)}je=-1,xe.length=0,mo(),An=null,(xe.length||zt.length)&&uo()}}let We=null,go=null;function wn(e){const t=We;return We=e,go=e&&e.type.__scopeId||null,t}function De(e,t=We,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&Tn(-1);const o=wn(t);let i;try{i=e(...s)}finally{wn(o),r._d&&Tn(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function xt(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let l=a.dir[r];l&&(ot(),Qe(l,n,8,[e.el,a,e,t]),it())}}function hn(e,t){if(Ae){let n=Ae.provides;const r=Ae.parent&&Ae.parent.provides;r===n&&(n=Ae.provides=Object.create(r)),n[e]=t}}function $e(e,t,n=!1){const r=Ya();if(r||Mt){let s=Mt?Mt._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&V(t)?t.call(r&&r.proxy):t}}const Wi=Symbol.for("v-scx"),Ji=()=>$e(Wi);function yn(e,t,n){return bo(e,t,n)}function bo(e,t,n=ee){const{immediate:r,deep:s,flush:o,once:i}=n,a=ge({},n),l=t&&r||!t&&o!=="post";let f;if(dn){if(o==="sync"){const b=Ji();f=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=Je,b.resume=Je,b.pause=Je,b}}const d=Ae;a.call=(b,k,S)=>Qe(b,d,k,S);let m=!1;o==="post"?a.scheduler=b=>{Se(b,d&&d.suspense)}:o!=="sync"&&(m=!0,a.scheduler=(b,k)=>{k?b():Cr(b)}),a.augmentJob=b=>{t&&(b.flags|=4),m&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const g=ji(e,t,a);return dn&&(f?f.push(g):l&&g()),g}function $i(e,t,n){const r=this.proxy,s=re(e)?e.includes(".")?vo(r,e):()=>r[e]:e.bind(r,r);let o;V(t)?o=t:(o=t.handler,n=t);const i=un(this),a=bo(s,o.bind(r),n);return i(),a}function vo(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Xi=Symbol("_vte"),Qi=e=>e.__isTeleport,Zi=Symbol("_leaveCb");function kr(e,t){e.shapeFlag&6&&e.component?(e.transition=t,kr(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function vt(e,t){return V(e)?ge({name:e.name},t,{setup:e}):e}function ho(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $r(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const Rn=new WeakMap;function Zt(e,t,n,r,s=!1){if(F(e)){e.forEach((S,U)=>Zt(S,t&&(F(t)?t[U]:t),n,r,s));return}if(en(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zt(e,t,n,r.component.subTree);return}const o=r.shapeFlag&4?Pr(r.component):r.el,i=s?null:o,{i:a,r:l}=e,f=t&&t.r,d=a.refs===ee?a.refs={}:a.refs,m=a.setupState,g=K(m),b=m===ee?zs:S=>$r(d,S)?!1:Y(g,S),k=(S,U)=>!(U&&$r(d,U));if(f!=null&&f!==l){if(Xr(t),re(f))d[f]=null,b(f)&&(m[f]=null);else if(ve(f)){const S=t;k(f,S.k)&&(f.value=null),S.k&&(d[S.k]=null)}}if(V(l))mn(l,a,12,[i,d]);else{const S=re(l),U=ve(l);if(S||U){const z=()=>{if(e.f){const _=S?b(l)?m[l]:d[l]:k()||!e.k?l.value:d[e.k];if(s)F(_)&&vr(_,o);else if(F(_))_.includes(o)||_.push(o);else if(S)d[l]=[o],b(l)&&(m[l]=d[l]);else{const L=[o];k(l,e.k)&&(l.value=L),e.k&&(d[e.k]=L)}}else S?(d[l]=i,b(l)&&(m[l]=i)):U&&(k(l,e.k)&&(l.value=i),e.k&&(d[e.k]=i))};if(i){const _=()=>{z(),Rn.delete(e)};_.id=-1,Rn.set(e,_),Se(_,n)}else Xr(e),z()}}}function Xr(e){const t=Rn.get(e);t&&(t.flags|=8,Rn.delete(e))}Ln().requestIdleCallback;Ln().cancelIdleCallback;const en=e=>!!e.type.__asyncLoader,yo=e=>e.type.__isKeepAlive;function ea(e,t){xo(e,"a",t)}function ta(e,t){xo(e,"da",t)}function xo(e,t,n=Ae){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(zn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)yo(s.parent.vnode)&&na(r,t,n,s),s=s.parent}}function na(e,t,n,r){const s=zn(t,e,r,!0);Eo(()=>{vr(r[t],s)},n)}function zn(e,t,n=Ae,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{ot();const a=un(n),l=Qe(t,n,e,i);return a(),it(),l});return r?s.unshift(o):s.push(o),o}}const lt=e=>(t,n=Ae)=>{(!dn||e==="sp")&&zn(e,(...r)=>t(...r),n)},ra=lt("bm"),sa=lt("m"),oa=lt("bu"),ia=lt("u"),aa=lt("bum"),Eo=lt("um"),la=lt("sp"),ca=lt("rtg"),da=lt("rtc");function pa(e,t=Ae){zn("ec",e,t)}const fa=Symbol.for("v-ndc");function ln(e,t,n,r){let s;const o=n,i=F(e);if(i||re(e)){const a=i&&St(e);let l=!1,f=!1;a&&(l=!Ce(e),f=at(e),e=Dn(e)),s=new Array(e.length);for(let d=0,m=e.length;d<m;d++)s[d]=t(l?f?Bt(Le(e[d])):Le(e[d]):e[d],d,void 0,o)}else if(typeof e=="number"){s=new Array(e);for(let a=0;a<e;a++)s[a]=t(a+1,a,void 0,o)}else if(W(e))if(e[Symbol.iterator])s=Array.from(e,(a,l)=>t(a,l,void 0,o));else{const a=Object.keys(e);s=new Array(a.length);for(let l=0,f=a.length;l<f;l++){const d=a[l];s[l]=t(e[d],d,l,o)}}else s=[];return s}const ir=e=>e?Vo(e)?Pr(e):ir(e.parent):null,tn=ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ir(e.parent),$root:e=>ir(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wo(e),$forceUpdate:e=>e.f||(e.f=()=>{Cr(e.update)}),$nextTick:e=>e.n||(e.n=po.bind(e.proxy)),$watch:e=>$i.bind(e)}),Kn=(e,t)=>e!==ee&&!e.__isScriptSetup&&Y(e,t),ma={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:l}=e;if(t[0]!=="$"){const g=i[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(Kn(r,t))return i[t]=1,r[t];if(s!==ee&&Y(s,t))return i[t]=2,s[t];if(Y(o,t))return i[t]=3,o[t];if(n!==ee&&Y(n,t))return i[t]=4,n[t];ar&&(i[t]=0)}}const f=tn[t];let d,m;if(f)return t==="$attrs"&&be(e.attrs,"get",""),f(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==ee&&Y(n,t))return i[t]=4,n[t];if(m=l.config.globalProperties,Y(m,t))return m[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return Kn(s,t)?(s[t]=n,!0):r!==ee&&Y(r,t)?(r[t]=n,!0):Y(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:o,type:i}},a){let l;return!!(n[a]||e!==ee&&a[0]!=="$"&&Y(e,a)||Kn(t,a)||Y(o,a)||Y(r,a)||Y(tn,a)||Y(s.config.globalProperties,a)||(l=i.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Y(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Qr(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ar=!0;function ua(e){const t=wo(e),n=e.proxy,r=e.ctx;ar=!1,t.beforeCreate&&Zr(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:l,inject:f,created:d,beforeMount:m,mounted:g,beforeUpdate:b,updated:k,activated:S,deactivated:U,beforeDestroy:z,beforeUnmount:_,destroyed:L,unmounted:I,render:$,renderTracked:pe,renderTriggered:te,errorCaptured:ze,serverPrefetch:ct,expose:Me,inheritAttrs:dt,components:ht,directives:Be,filters:Ht}=t;if(f&&ga(f,r,null),i)for(const J in i){const j=i[J];V(j)&&(r[J]=j.bind(n))}if(s){const J=s.call(n,n);W(J)&&(e.data=Pn(J))}if(ar=!0,o)for(const J in o){const j=o[J],Ze=V(j)?j.bind(n,n):V(j.get)?j.get.bind(n,n):Je,pt=!V(j)&&V(j.set)?j.set.bind(n):Je,Fe=ue({get:Ze,set:pt});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>Fe.value,set:Re=>Fe.value=Re})}if(a)for(const J in a)Ao(a[J],r,n,J);if(l){const J=V(l)?l.call(n):l;Reflect.ownKeys(J).forEach(j=>{hn(j,J[j])})}d&&Zr(d,e,"c");function de(J,j){F(j)?j.forEach(Ze=>J(Ze.bind(n))):j&&J(j.bind(n))}if(de(ra,m),de(sa,g),de(oa,b),de(ia,k),de(ea,S),de(ta,U),de(pa,ze),de(da,pe),de(ca,te),de(aa,_),de(Eo,I),de(la,ct),F(Me))if(Me.length){const J=e.exposed||(e.exposed={});Me.forEach(j=>{Object.defineProperty(J,j,{get:()=>n[j],set:Ze=>n[j]=Ze,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===Je&&(e.render=$),dt!=null&&(e.inheritAttrs=dt),ht&&(e.components=ht),Be&&(e.directives=Be),ct&&ho(e)}function ga(e,t,n=Je){F(e)&&(e=lr(e));for(const r in e){const s=e[r];let o;W(s)?"default"in s?o=$e(s.from||r,s.default,!0):o=$e(s.from||r):o=$e(s),ve(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function Zr(e,t,n){Qe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ao(e,t,n,r){let s=r.includes(".")?vo(n,r):()=>n[r];if(re(e)){const o=t[e];V(o)&&yn(s,o)}else if(V(e))yn(s,e.bind(n));else if(W(e))if(F(e))e.forEach(o=>Ao(o,t,n,r));else{const o=V(e.handler)?e.handler.bind(n):t[e.handler];V(o)&&yn(s,o,e)}}function wo(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(f=>Sn(l,f,i,!0)),Sn(l,t,i)),W(t)&&o.set(t,l),l}function Sn(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Sn(e,o,n,!0),s&&s.forEach(i=>Sn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=ba[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const ba={data:es,props:ts,emits:ts,methods:Wt,computed:Wt,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:Wt,directives:Wt,watch:ha,provide:es,inject:va};function es(e,t){return t?e?function(){return ge(V(e)?e.call(this,this):e,V(t)?t.call(this,this):t)}:t:e}function va(e,t){return Wt(lr(e),lr(t))}function lr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function Wt(e,t){return e?ge(Object.create(null),e,t):t}function ts(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:ge(Object.create(null),Qr(e),Qr(t??{})):t}function ha(e,t){if(!e)return t;if(!t)return e;const n=ge(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function Ro(){return{app:null,config:{isNativeTag:zs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ya=0;function xa(e,t){return function(r,s=null){V(r)||(r=ge({},r)),s!=null&&!W(s)&&(s=null);const o=Ro(),i=new WeakSet,a=[];let l=!1;const f=o.app={_uid:ya++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:Za,get config(){return o.config},set config(d){},use(d,...m){return i.has(d)||(d&&V(d.install)?(i.add(d),d.install(f,...m)):V(d)&&(i.add(d),d(f,...m))),f},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),f},component(d,m){return m?(o.components[d]=m,f):o.components[d]},directive(d,m){return m?(o.directives[d]=m,f):o.directives[d]},mount(d,m,g){if(!l){const b=f._ceVNode||ce(r,s);return b.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),e(b,d,g),l=!0,f._container=d,d.__vue_app__=f,Pr(b.component)}},onUnmount(d){a.push(d)},unmount(){l&&(Qe(a,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,m){return o.provides[d]=m,f},runWithContext(d){const m=Mt;Mt=f;try{return d()}finally{Mt=m}}};return f}}let Mt=null;const Ea=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ke(t)}Modifiers`]||e[`${Ot(t)}Modifiers`];function Aa(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ee;let s=n;const o=t.startsWith("update:"),i=o&&Ea(r,t.slice(7));i&&(i.trim&&(s=n.map(d=>re(d)?d.trim():d)),i.number&&(s=n.map(li)));let a,l=r[a=Un(t)]||r[a=Un(ke(t))];!l&&o&&(l=r[a=Un(Ot(t))]),l&&Qe(l,e,6,s);const f=r[a+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Qe(f,e,6,s)}}const wa=new WeakMap;function So(e,t,n=!1){const r=n?wa:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!V(e)){const l=f=>{const d=So(f,t,!0);d&&(a=!0,ge(i,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!a?(W(e)&&r.set(e,null),null):(F(o)?o.forEach(l=>i[l]=null):ge(i,o),W(e)&&r.set(e,i),i)}function Mn(e,t){return!e||!Cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Y(e,t[0].toLowerCase()+t.slice(1))||Y(e,Ot(t))||Y(e,t))}function ns(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:i,attrs:a,emit:l,render:f,renderCache:d,props:m,data:g,setupState:b,ctx:k,inheritAttrs:S}=e,U=wn(e);let z,_;try{if(n.shapeFlag&4){const I=s||r,$=I;z=Ke(f.call($,I,d,m,b,g,k)),_=a}else{const I=t;z=Ke(I.length>1?I(m,{attrs:a,slots:i,emit:l}):I(m,null)),_=t.props?a:Ra(a)}}catch(I){nn.length=0,Nn(I,e,1),z=ce(bt)}let L=z;if(_&&S!==!1){const I=Object.keys(_),{shapeFlag:$}=L;I.length&&$&7&&(o&&I.some(kn)&&(_=Sa(_,o)),L=Ut(L,_,!1,!0))}return n.dirs&&(L=Ut(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&kr(L,n.transition),z=L,wn(U),z}const Ra=e=>{let t;for(const n in e)(n==="class"||n==="style"||Cn(n))&&((t||(t={}))[n]=e[n]);return t},Sa=(e,t)=>{const n={};for(const r in e)(!kn(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ta(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:l}=t,f=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?rs(r,i,f):!!i;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(To(i,r,g)&&!Mn(f,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?rs(r,i,f):!0:!!i;return!1}function rs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(To(t,e,o)&&!Mn(n,o))return!0}return!1}function To(e,t,n){const r=e[n],s=t[n];return n==="style"&&W(r)&&W(s)?!Er(r,s):r!==s}function Oa({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const Oo={},_o=()=>Object.create(Oo),Co=e=>Object.getPrototypeOf(e)===Oo;function _a(e,t,n,r=!1){const s={},o=_o();e.propsDefaults=Object.create(null),ko(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:io(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function Ca(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=K(s),[l]=e.propsOptions;let f=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Mn(e.emitsOptions,g))continue;const b=t[g];if(l)if(Y(o,g))b!==o[g]&&(o[g]=b,f=!0);else{const k=ke(g);s[k]=cr(l,a,k,b,e,!1)}else b!==o[g]&&(o[g]=b,f=!0)}}}else{ko(e,t,s,o)&&(f=!0);let d;for(const m in a)(!t||!Y(t,m)&&((d=Ot(m))===m||!Y(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(s[m]=cr(l,a,m,void 0,e,!0)):delete s[m]);if(o!==a)for(const m in o)(!t||!Y(t,m))&&(delete o[m],f=!0)}f&&st(e.attrs,"set","")}function ko(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let l in t){if($t(l))continue;const f=t[l];let d;s&&Y(s,d=ke(l))?!o||!o.includes(d)?n[d]=f:(a||(a={}))[d]=f:Mn(e.emitsOptions,l)||(!(l in r)||f!==r[l])&&(r[l]=f,i=!0)}if(o){const l=K(n),f=a||ee;for(let d=0;d<o.length;d++){const m=o[d];n[m]=cr(s,l,m,f[m],e,!Y(f,m))}}return i}function cr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=Y(i,"default");if(a&&r===void 0){const l=i.default;if(i.type!==Function&&!i.skipFactory&&V(l)){const{propsDefaults:f}=s;if(n in f)r=f[n];else{const d=un(s);r=f[n]=l.call(null,t),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}const ka=new WeakMap;function Io(e,t,n=!1){const r=n?ka:t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let l=!1;if(!V(e)){const d=m=>{l=!0;const[g,b]=Io(m,t,!0);ge(i,g),b&&a.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!l)return W(e)&&r.set(e,Pt),Pt;if(F(o))for(let d=0;d<o.length;d++){const m=ke(o[d]);ss(m)&&(i[m]=ee)}else if(o)for(const d in o){const m=ke(d);if(ss(m)){const g=o[d],b=i[m]=F(g)||V(g)?{type:g}:ge({},g),k=b.type;let S=!1,U=!0;if(F(k))for(let z=0;z<k.length;++z){const _=k[z],L=V(_)&&_.name;if(L==="Boolean"){S=!0;break}else L==="String"&&(U=!1)}else S=V(k)&&k.name==="Boolean";b[0]=S,b[1]=U,(S||Y(b,"default"))&&a.push(m)}}const f=[i,a];return W(e)&&r.set(e,f),f}function ss(e){return e[0]!=="$"&&!$t(e)}const Ir=e=>e==="_"||e==="_ctx"||e==="$stable",Lr=e=>F(e)?e.map(Ke):[Ke(e)],Ia=(e,t,n)=>{if(t._n)return t;const r=De((...s)=>Lr(t(...s)),n);return r._c=!1,r},Lo=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ir(s))continue;const o=e[s];if(V(o))t[s]=Ia(s,o,r);else if(o!=null){const i=Lr(o);t[s]=()=>i}}},Do=(e,t)=>{const n=Lr(t);e.slots.default=()=>n},Po=(e,t,n)=>{for(const r in t)(n||!Ir(r))&&(e[r]=t[r])},La=(e,t,n)=>{const r=e.slots=_o();if(e.vnode.shapeFlag&32){const s=t._;s?(Po(r,t,n),n&&Gs(r,"_",s,!0)):Lo(t,r)}else t&&Do(e,t)},Da=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=ee;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:Po(s,t,n):(o=!t.$stable,Lo(t,s)),i=t}else t&&(Do(e,t),i={default:1});if(o)for(const a in s)!Ir(a)&&i[a]==null&&delete s[a]},Se=Ba;function Pa(e){return Na(e)}function Na(e,t){const n=Ln();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:l,setText:f,setElementText:d,parentNode:m,nextSibling:g,setScopeId:b=Je,insertStaticContent:k}=e,S=(c,p,u,v=null,x=null,h=null,R=void 0,w=null,A=!!p.dynamicChildren)=>{if(c===p)return;c&&!Kt(c,p)&&(v=y(c),Re(c,x,h,!0),c=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:E,ref:N,shapeFlag:O}=p;switch(E){case Bn:U(c,p,u,v);break;case bt:z(c,p,u,v);break;case Wn:c==null&&_(p,u,v,R);break;case Ee:ht(c,p,u,v,x,h,R,w,A);break;default:O&1?$(c,p,u,v,x,h,R,w,A):O&6?Be(c,p,u,v,x,h,R,w,A):(O&64||O&128)&&E.process(c,p,u,v,x,h,R,w,A,D)}N!=null&&x?Zt(N,c&&c.ref,h,p||c,!p):N==null&&c&&c.ref!=null&&Zt(c.ref,null,h,c,!0)},U=(c,p,u,v)=>{if(c==null)r(p.el=a(p.children),u,v);else{const x=p.el=c.el;p.children!==c.children&&f(x,p.children)}},z=(c,p,u,v)=>{c==null?r(p.el=l(p.children||""),u,v):p.el=c.el},_=(c,p,u,v)=>{[c.el,c.anchor]=k(c.children,p,u,v,c.el,c.anchor)},L=({el:c,anchor:p},u,v)=>{let x;for(;c&&c!==p;)x=g(c),r(c,u,v),c=x;r(p,u,v)},I=({el:c,anchor:p})=>{let u;for(;c&&c!==p;)u=g(c),s(c),c=u;s(p)},$=(c,p,u,v,x,h,R,w,A)=>{if(p.type==="svg"?R="svg":p.type==="math"&&(R="mathml"),c==null)pe(p,u,v,x,h,R,w,A);else{const E=c.el&&c.el._isVueCE?c.el:null;try{E&&E._beginPatch(),ct(c,p,x,h,R,w,A)}finally{E&&E._endPatch()}}},pe=(c,p,u,v,x,h,R,w)=>{let A,E;const{props:N,shapeFlag:O,transition:P,dirs:M}=c;if(A=c.el=i(c.type,h,N&&N.is,N),O&8?d(A,c.children):O&16&&ze(c.children,A,null,v,x,Yn(c,h),R,w),M&&xt(c,null,v,"created"),te(A,c,c.scopeId,R,v),N){for(const X in N)X!=="value"&&!$t(X)&&o(A,X,null,N[X],h,v);"value"in N&&o(A,"value",null,N.value,h),(E=N.onVnodeBeforeMount)&&He(E,v,c)}M&&xt(c,null,v,"beforeMount");const H=za(x,P);H&&P.beforeEnter(A),r(A,p,u),((E=N&&N.onVnodeMounted)||H||M)&&Se(()=>{try{E&&He(E,v,c),H&&P.enter(A),M&&xt(c,null,v,"mounted")}finally{}},x)},te=(c,p,u,v,x)=>{if(u&&b(c,u),v)for(let h=0;h<v.length;h++)b(c,v[h]);if(x){let h=x.subTree;if(p===h||Bo(h.type)&&(h.ssContent===p||h.ssFallback===p)){const R=x.vnode;te(c,R,R.scopeId,R.slotScopeIds,x.parent)}}},ze=(c,p,u,v,x,h,R,w,A=0)=>{for(let E=A;E<c.length;E++){const N=c[E]=w?rt(c[E]):Ke(c[E]);S(null,N,p,u,v,x,h,R,w)}},ct=(c,p,u,v,x,h,R)=>{const w=p.el=c.el;let{patchFlag:A,dynamicChildren:E,dirs:N}=p;A|=c.patchFlag&16;const O=c.props||ee,P=p.props||ee;let M;if(u&&Et(u,!1),(M=P.onVnodeBeforeUpdate)&&He(M,u,p,c),N&&xt(p,c,u,"beforeUpdate"),u&&Et(u,!0),(O.innerHTML&&P.innerHTML==null||O.textContent&&P.textContent==null)&&d(w,""),E?Me(c.dynamicChildren,E,w,u,v,Yn(p,x),h):R||j(c,p,w,null,u,v,Yn(p,x),h,!1),A>0){if(A&16)dt(w,O,P,u,x);else if(A&2&&O.class!==P.class&&o(w,"class",null,P.class,x),A&4&&o(w,"style",O.style,P.style,x),A&8){const H=p.dynamicProps;for(let X=0;X<H.length;X++){const Q=H[X],oe=O[Q],fe=P[Q];(fe!==oe||Q==="value")&&o(w,Q,oe,fe,x,u)}}A&1&&c.children!==p.children&&d(w,p.children)}else!R&&E==null&&dt(w,O,P,u,x);((M=P.onVnodeUpdated)||N)&&Se(()=>{M&&He(M,u,p,c),N&&xt(p,c,u,"updated")},v)},Me=(c,p,u,v,x,h,R)=>{for(let w=0;w<p.length;w++){const A=c[w],E=p[w],N=A.el&&(A.type===Ee||!Kt(A,E)||A.shapeFlag&198)?m(A.el):u;S(A,E,N,null,v,x,h,R,!0)}},dt=(c,p,u,v,x)=>{if(p!==u){if(p!==ee)for(const h in p)!$t(h)&&!(h in u)&&o(c,h,p[h],null,x,v);for(const h in u){if($t(h))continue;const R=u[h],w=p[h];R!==w&&h!=="value"&&o(c,h,w,R,x,v)}"value"in u&&o(c,"value",p.value,u.value,x)}},ht=(c,p,u,v,x,h,R,w,A)=>{const E=p.el=c?c.el:a(""),N=p.anchor=c?c.anchor:a("");let{patchFlag:O,dynamicChildren:P,slotScopeIds:M}=p;M&&(w=w?w.concat(M):M),c==null?(r(E,u,v),r(N,u,v),ze(p.children||[],u,N,x,h,R,w,A)):O>0&&O&64&&P&&c.dynamicChildren&&c.dynamicChildren.length===P.length?(Me(c.dynamicChildren,P,u,x,h,R,w),(p.key!=null||x&&p===x.subTree)&&No(c,p,!0)):j(c,p,u,N,x,h,R,w,A)},Be=(c,p,u,v,x,h,R,w,A)=>{p.slotScopeIds=w,c==null?p.shapeFlag&512?x.ctx.activate(p,u,v,R,A):Ht(p,u,v,x,h,R,A):_t(c,p,A)},Ht=(c,p,u,v,x,h,R)=>{const w=c.component=Ka(c,v,x);if(yo(c)&&(w.ctx.renderer=D),Wa(w,!1,R),w.asyncDep){if(x&&x.registerDep(w,de,R),!c.el){const A=w.subTree=ce(bt);z(null,A,p,u),c.placeholder=A.el}}else de(w,c,p,u,x,h,R)},_t=(c,p,u)=>{const v=p.component=c.component;if(Ta(c,p,u))if(v.asyncDep&&!v.asyncResolved){J(v,p,u);return}else v.next=p,v.update();else p.el=c.el,v.vnode=p},de=(c,p,u,v,x,h,R)=>{const w=()=>{if(c.isMounted){let{next:O,bu:P,u:M,parent:H,vnode:X}=c;{const Ve=zo(c);if(Ve){O&&(O.el=X.el,J(c,O,R)),Ve.asyncDep.then(()=>{Se(()=>{c.isUnmounted||E()},x)});return}}let Q=O,oe;Et(c,!1),O?(O.el=X.el,J(c,O,R)):O=X,P&&Vn(P),(oe=O.props&&O.props.onVnodeBeforeUpdate)&&He(oe,H,O,X),Et(c,!0);const fe=ns(c),Ue=c.subTree;c.subTree=fe,S(Ue,fe,m(Ue.el),y(Ue),c,x,h),O.el=fe.el,Q===null&&Oa(c,fe.el),M&&Se(M,x),(oe=O.props&&O.props.onVnodeUpdated)&&Se(()=>He(oe,H,O,X),x)}else{let O;const{el:P,props:M}=p,{bm:H,m:X,parent:Q,root:oe,type:fe}=c,Ue=en(p);Et(c,!1),H&&Vn(H),!Ue&&(O=M&&M.onVnodeBeforeMount)&&He(O,Q,p),Et(c,!0);{oe.ce&&oe.ce._hasShadowRoot()&&oe.ce._injectChildStyle(fe,c.parent?c.parent.type:void 0);const Ve=c.subTree=ns(c);S(null,Ve,u,v,c,x,h),p.el=Ve.el}if(X&&Se(X,x),!Ue&&(O=M&&M.onVnodeMounted)){const Ve=p;Se(()=>He(O,Q,Ve),x)}(p.shapeFlag&256||Q&&en(Q.vnode)&&Q.vnode.shapeFlag&256)&&c.a&&Se(c.a,x),c.isMounted=!0,p=u=v=null}};c.scope.on();const A=c.effect=new Ks(w);c.scope.off();const E=c.update=A.run.bind(A),N=c.job=A.runIfDirty.bind(A);N.i=c,N.id=c.uid,A.scheduler=()=>Cr(N),Et(c,!0),E()},J=(c,p,u)=>{p.component=c;const v=c.vnode.props;c.vnode=p,c.next=null,Ca(c,p.props,v,u),Da(c,p.children,u),ot(),Jr(c),it()},j=(c,p,u,v,x,h,R,w,A=!1)=>{const E=c&&c.children,N=c?c.shapeFlag:0,O=p.children,{patchFlag:P,shapeFlag:M}=p;if(P>0){if(P&128){pt(E,O,u,v,x,h,R,w,A);return}else if(P&256){Ze(E,O,u,v,x,h,R,w,A);return}}M&8?(N&16&&_e(E,x,h),O!==E&&d(u,O)):N&16?M&16?pt(E,O,u,v,x,h,R,w,A):_e(E,x,h,!0):(N&8&&d(u,""),M&16&&ze(O,u,v,x,h,R,w,A))},Ze=(c,p,u,v,x,h,R,w,A)=>{c=c||Pt,p=p||Pt;const E=c.length,N=p.length,O=Math.min(E,N);let P;for(P=0;P<O;P++){const M=p[P]=A?rt(p[P]):Ke(p[P]);S(c[P],M,u,null,x,h,R,w,A)}E>N?_e(c,x,h,!0,!1,O):ze(p,u,v,x,h,R,w,A,O)},pt=(c,p,u,v,x,h,R,w,A)=>{let E=0;const N=p.length;let O=c.length-1,P=N-1;for(;E<=O&&E<=P;){const M=c[E],H=p[E]=A?rt(p[E]):Ke(p[E]);if(Kt(M,H))S(M,H,u,null,x,h,R,w,A);else break;E++}for(;E<=O&&E<=P;){const M=c[O],H=p[P]=A?rt(p[P]):Ke(p[P]);if(Kt(M,H))S(M,H,u,null,x,h,R,w,A);else break;O--,P--}if(E>O){if(E<=P){const M=P+1,H=M<N?p[M].el:v;for(;E<=P;)S(null,p[E]=A?rt(p[E]):Ke(p[E]),u,H,x,h,R,w,A),E++}}else if(E>P)for(;E<=O;)Re(c[E],x,h,!0),E++;else{const M=E,H=E,X=new Map;for(E=H;E<=P;E++){const Te=p[E]=A?rt(p[E]):Ke(p[E]);Te.key!=null&&X.set(Te.key,E)}let Q,oe=0;const fe=P-H+1;let Ue=!1,Ve=0;const jt=new Array(fe);for(E=0;E<fe;E++)jt[E]=0;for(E=M;E<=O;E++){const Te=c[E];if(oe>=fe){Re(Te,x,h,!0);continue}let Ge;if(Te.key!=null)Ge=X.get(Te.key);else for(Q=H;Q<=P;Q++)if(jt[Q-H]===0&&Kt(Te,p[Q])){Ge=Q;break}Ge===void 0?Re(Te,x,h,!0):(jt[Ge-H]=E+1,Ge>=Ve?Ve=Ge:Ue=!0,S(Te,p[Ge],u,null,x,h,R,w,A),oe++)}const Gr=Ue?Ma(jt):Pt;for(Q=Gr.length-1,E=fe-1;E>=0;E--){const Te=H+E,Ge=p[Te],Hr=p[Te+1],jr=Te+1<N?Hr.el||Mo(Hr):v;jt[E]===0?S(null,Ge,u,jr,x,h,R,w,A):Ue&&(Q<0||E!==Gr[Q]?Fe(Ge,u,jr,2):Q--)}}},Fe=(c,p,u,v,x=null)=>{const{el:h,type:R,transition:w,children:A,shapeFlag:E}=c;if(E&6){Fe(c.component.subTree,p,u,v);return}if(E&128){c.suspense.move(p,u,v);return}if(E&64){R.move(c,p,u,D);return}if(R===Ee){r(h,p,u);for(let O=0;O<A.length;O++)Fe(A[O],p,u,v);r(c.anchor,p,u);return}if(R===Wn){L(c,p,u);return}if(v!==2&&E&1&&w)if(v===0)w.beforeEnter(h),r(h,p,u),Se(()=>w.enter(h),x);else{const{leave:O,delayLeave:P,afterLeave:M}=w,H=()=>{c.ctx.isUnmounted?s(h):r(h,p,u)},X=()=>{h._isLeaving&&h[Zi](!0),O(h,()=>{H(),M&&M()})};P?P(h,H,X):X()}else r(h,p,u)},Re=(c,p,u,v=!1,x=!1)=>{const{type:h,props:R,ref:w,children:A,dynamicChildren:E,shapeFlag:N,patchFlag:O,dirs:P,cacheIndex:M,memo:H}=c;if(O===-2&&(x=!1),w!=null&&(ot(),Zt(w,null,u,c,!0),it()),M!=null&&(p.renderCache[M]=void 0),N&256){p.ctx.deactivate(c);return}const X=N&1&&P,Q=!en(c);let oe;if(Q&&(oe=R&&R.onVnodeBeforeUnmount)&&He(oe,p,c),N&6)yt(c.component,u,v);else{if(N&128){c.suspense.unmount(u,v);return}X&&xt(c,null,p,"beforeUnmount"),N&64?c.type.remove(c,p,u,D,v):E&&!E.hasOnce&&(h!==Ee||O>0&&O&64)?_e(E,p,u,!1,!0):(h===Ee&&O&384||!x&&N&16)&&_e(A,p,u),v&&Ct(c)}const fe=H!=null&&M==null;(Q&&(oe=R&&R.onVnodeUnmounted)||X||fe)&&Se(()=>{oe&&He(oe,p,c),X&&xt(c,null,p,"unmounted"),fe&&(c.el=null)},u)},Ct=c=>{const{type:p,el:u,anchor:v,transition:x}=c;if(p===Ee){kt(u,v);return}if(p===Wn){I(c);return}const h=()=>{s(u),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(c.shapeFlag&1&&x&&!x.persisted){const{leave:R,delayLeave:w}=x,A=()=>R(u,h);w?w(c.el,h,A):A()}else h()},kt=(c,p)=>{let u;for(;c!==p;)u=g(c),s(c),c=u;s(p)},yt=(c,p,u)=>{const{bum:v,scope:x,job:h,subTree:R,um:w,m:A,a:E}=c;os(A),os(E),v&&Vn(v),x.stop(),h&&(h.flags|=8,Re(R,c,p,u)),w&&Se(w,p),Se(()=>{c.isUnmounted=!0},p)},_e=(c,p,u,v=!1,x=!1,h=0)=>{for(let R=h;R<c.length;R++)Re(c[R],p,u,v,x)},y=c=>{if(c.shapeFlag&6)return y(c.component.subTree);if(c.shapeFlag&128)return c.suspense.next();const p=g(c.anchor||c.el),u=p&&p[Xi];return u?g(u):p};let C=!1;const T=(c,p,u)=>{let v;c==null?p._vnode&&(Re(p._vnode,null,null,!0),v=p._vnode.component):S(p._vnode||null,c,p,null,null,null,u),p._vnode=c,C||(C=!0,Jr(v),mo(),C=!1)},D={p:S,um:Re,m:Fe,r:Ct,mt:Ht,mc:ze,pc:j,pbc:Me,n:y,o:e};return{render:T,hydrate:void 0,createApp:xa(T)}}function Yn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Et({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function za(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function No(e,t,n=!1){const r=e.children,s=t.children;if(F(r)&&F(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=rt(s[o]),a.el=i.el),!n&&a.patchFlag!==-2&&No(i,a)),a.type===Bn&&(a.patchFlag===-1&&(a=s[o]=rt(a)),a.el=i.el),a.type===bt&&!a.el&&(a.el=i.el)}}function Ma(e){const t=e.slice(),n=[0];let r,s,o,i,a;const l=e.length;for(r=0;r<l;r++){const f=e[r];if(f!==0){if(s=n[n.length-1],e[s]<f){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<f?o=a+1:i=a;f<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}function zo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zo(t)}function os(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Mo(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Mo(t.subTree):null}const Bo=e=>e.__isSuspense;function Ba(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Yi(e)}const Ee=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),bt=Symbol.for("v-cmt"),Wn=Symbol.for("v-stc"),nn=[];let Oe=null;function se(e=!1){nn.push(Oe=e?null:[])}function Fa(){nn.pop(),Oe=nn[nn.length-1]||null}let cn=1;function Tn(e,t=!1){cn+=e,e<0&&Oe&&t&&(Oe.hasOnce=!0)}function Fo(e){return e.dynamicChildren=cn>0?Oe||Pt:null,Fa(),cn>0&&Oe&&Oe.push(e),e}function we(e,t,n,r,s,o){return Fo(B(e,t,n,r,s,o,!0))}function Ft(e,t,n,r,s){return Fo(ce(e,t,n,r,s,!0))}function On(e){return e?e.__v_isVNode===!0:!1}function Kt(e,t){return e.type===t.type&&e.key===t.key}const Uo=({key:e})=>e??null,xn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?re(e)||ve(e)||V(e)?{i:We,r:e,k:t,f:!!n}:e:null);function B(e,t=null,n=null,r=0,s=null,o=e===Ee?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Uo(t),ref:t&&xn(t),scopeId:go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:We};return a?(Dr(l,n),o&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),cn>0&&!i&&Oe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Oe.push(l),l}const ce=Ua;function Ua(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===fa)&&(e=bt),On(e)){const a=Ut(e,t,!0);return n&&Dr(a,n),cn>0&&!o&&Oe&&(a.shapeFlag&6?Oe[Oe.indexOf(e)]=a:Oe.push(a)),a.patchFlag=-2,a}if(Qa(e)&&(e=e.__vccOpts),t){t=Va(t);let{class:a,style:l}=t;a&&!re(a)&&(t.class=xr(a)),W(l)&&(_r(l)&&!F(l)&&(l=ge({},l)),t.style=yr(l))}const i=re(e)?1:Bo(e)?128:Qi(e)?64:W(e)?4:V(e)?2:0;return B(e,t,n,r,s,i,o,!0)}function Va(e){return e?_r(e)||Co(e)?ge({},e):e:null}function Ut(e,t,n=!1,r=!1){const{props:s,ref:o,patchFlag:i,children:a,transition:l}=e,f=t?Ha(s||{},t):s,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Uo(f),ref:t&&t.ref?n&&o?F(o)?o.concat(xn(t)):[o,xn(t)]:xn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ut(e.ssContent),ssFallback:e.ssFallback&&Ut(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&kr(d,l.clone(d)),d}function Tt(e=" ",t=0){return ce(Bn,null,e,t)}function Ga(e="",t=!1){return t?(se(),Ft(bt,null,e)):ce(bt,null,e)}function Ke(e){return e==null||typeof e=="boolean"?ce(bt):F(e)?ce(Ee,null,e.slice()):On(e)?rt(e):ce(Bn,null,String(e))}function rt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ut(e)}function Dr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Dr(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Co(t)?t._ctx=We:s===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else V(t)?(t={default:t,_ctx:We},n=32):(t=String(t),r&64?(n=16,t=[Tt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ha(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=xr([t.class,r.class]));else if(s==="style")t.style=yr([t.style,r.style]);else if(Cn(s)){const o=t[s],i=r[s];i&&o!==i&&!(F(o)&&o.includes(i))?t[s]=o?[].concat(o,i):i:i==null&&o==null&&!kn(s)&&(t[s]=i)}else s!==""&&(t[s]=r[s])}return t}function He(e,t,n,r=null){Qe(e,t,7,[n,r])}const ja=Ro();let qa=0;function Ka(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||ja,o={uid:qa++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new bi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,s),emitsOptions:So(r,s),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:r.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Aa.bind(null,o),e.ce&&e.ce(o),o}let Ae=null;const Ya=()=>Ae||We;let _n,dr;{const e=Ln(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),o=>{s.length>1?s.forEach(i=>i(o)):s[0](o)}};_n=t("__VUE_INSTANCE_SETTERS__",n=>Ae=n),dr=t("__VUE_SSR_SETTERS__",n=>dn=n)}const un=e=>{const t=Ae;return _n(e),e.scope.on(),()=>{e.scope.off(),_n(t)}},is=()=>{Ae&&Ae.scope.off(),_n(null)};function Vo(e){return e.vnode.shapeFlag&4}let dn=!1;function Wa(e,t=!1,n=!1){t&&dr(t);const{props:r,children:s}=e.vnode,o=Vo(e);_a(e,r,o,t),La(e,s,n||t);const i=o?Ja(e,t):void 0;return t&&dr(!1),i}function Ja(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,ma);const{setup:r}=n;if(r){ot();const s=e.setupContext=r.length>1?Xa(e):null,o=un(e),i=mn(r,e,0,[e.props,s]),a=Bs(i);if(it(),o(),(a||e.sp)&&!en(e)&&ho(e),a){if(i.then(is,is),t)return i.then(l=>{as(e,l)}).catch(l=>{Nn(l,e,0)});e.asyncDep=i}else as(e,i)}else Go(e)}function as(e,t,n){V(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:W(t)&&(e.setupState=lo(t)),Go(e)}function Go(e,t,n){const r=e.type;e.render||(e.render=r.render||Je);{const s=un(e);ot();try{ua(e)}finally{it(),s()}}}const $a={get(e,t){return be(e,"get",""),e[t]}};function Xa(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,$a),slots:e.slots,emit:e.emit,expose:t}}function Pr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(lo(zi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in tn)return tn[n](e)},has(t,n){return n in t||n in tn}})):e.proxy}function Qa(e){return V(e)&&"__vccOpts"in e}const ue=(e,t)=>Gi(e,t,dn);function Ho(e,t,n){try{Tn(-1);const r=arguments.length;return r===2?W(t)&&!F(t)?On(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&On(n)&&(n=[n]),ce(e,t,n))}finally{Tn(1)}}const Za="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let pr;const ls=typeof window<"u"&&window.trustedTypes;if(ls)try{pr=ls.createPolicy("vue",{createHTML:e=>e})}catch{}const jo=pr?e=>pr.createHTML(e):e=>e,el="http://www.w3.org/2000/svg",tl="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,cs=nt&&nt.createElement("template"),nl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?nt.createElementNS(el,e):t==="mathml"?nt.createElementNS(tl,e):n?nt.createElement(e,{is:n}):nt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>nt.createTextNode(e),createComment:e=>nt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>nt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{cs.innerHTML=jo(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const a=cs.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},rl=Symbol("_vtc");function sl(e,t,n){const r=e[rl];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ds=Symbol("_vod"),ol=Symbol("_vsh"),il=Symbol(""),al=/(?:^|;)\s*display\s*:/;function ll(e,t,n){const r=e.style,s=re(n);let o=!1;if(n&&!s){if(t)if(re(t))for(const i of t.split(";")){const a=i.slice(0,i.indexOf(":")).trim();n[a]==null&&Jt(r,a,"")}else for(const i in t)n[i]==null&&Jt(r,i,"");for(const i in n){i==="display"&&(o=!0);const a=n[i];a!=null?dl(e,i,!re(t)&&t?t[i]:void 0,a)||Jt(r,i,a):Jt(r,i,"")}}else if(s){if(t!==n){const i=r[il];i&&(n+=";"+i),r.cssText=n,o=al.test(n)}}else t&&e.removeAttribute("style");ds in e&&(e[ds]=o?r.display:"",e[ol]&&(r.display="none"))}const ps=/\s*!important$/;function Jt(e,t,n){if(F(n))n.forEach(r=>Jt(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=cl(e,t);ps.test(n)?e.setProperty(Ot(r),n.replace(ps,""),"important"):e[r]=n}}const fs=["Webkit","Moz","ms"],Jn={};function cl(e,t){const n=Jn[t];if(n)return n;let r=ke(t);if(r!=="filter"&&r in e)return Jn[t]=r;r=Vs(r);for(let s=0;s<fs.length;s++){const o=fs[s]+r;if(o in e)return Jn[t]=o}return t}function dl(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&re(r)&&n===r}const ms="http://www.w3.org/1999/xlink";function us(e,t,n,r,s,o=ui(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ms,t.slice(6,t.length)):e.setAttributeNS(ms,t,n):n==null||o&&!Hs(n)?e.removeAttribute(t):e.setAttribute(t,o?"":Xe(n)?String(n):n)}function gs(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jo(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Hs(n):n==null&&a==="string"?(n="",i=!0):a==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(s||t)}function pl(e,t,n,r){e.addEventListener(t,n,r)}function fl(e,t,n,r){e.removeEventListener(t,n,r)}const bs=Symbol("_vei");function ml(e,t,n,r,s=null){const o=e[bs]||(e[bs]={}),i=o[t];if(r&&i)i.value=r;else{const[a,l]=ul(t);if(r){const f=o[t]=vl(r,s);pl(e,a,f,l)}else i&&(fl(e,a,i,l),o[t]=void 0)}}const vs=/(?:Once|Passive|Capture)$/;function ul(e){let t;if(vs.test(e)){t={};let r;for(;r=e.match(vs);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let $n=0;const gl=Promise.resolve(),bl=()=>$n||(gl.then(()=>$n=0),$n=Date.now());function vl(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qe(hl(r,n.value),t,5,[r])};return n.value=e,n.attached=bl(),n}function hl(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const hs=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yl=(e,t,n,r,s,o)=>{const i=s==="svg";t==="class"?sl(e,r,i):t==="style"?ll(e,n,r):Cn(t)?kn(t)||ml(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):xl(e,t,r,i))?(gs(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&us(e,t,r,i,o,t!=="value")):e._isVueCE&&(El(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!re(r)))?gs(e,ke(t),r,o,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),us(e,t,r,i))};function xl(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&hs(t)&&V(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hs(t)&&re(n)?!1:t in e}function El(e,t){const n=e._def.props;if(!n)return!1;const r=ke(t);return Array.isArray(n)?n.some(s=>ke(s)===r):Object.keys(n).some(s=>ke(s)===r)}const Al=ge({patchProp:yl},nl);let ys;function wl(){return ys||(ys=Pa(Al))}const Rl=(...e)=>{const t=wl().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Tl(r);if(!s)return;const o=t._component;!V(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const i=n(s,!1,Sl(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t};function Sl(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Tl(e){return re(e)?document.querySelector(e):e}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Dt=typeof document<"u";function qo(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Ol(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&qo(e.default)}const q=Object.assign;function Xn(e,t){const n={};for(const r in t){const s=t[r];n[r]=Pe(s)?s.map(e):e(s)}return n}const rn=()=>{},Pe=Array.isArray;function xs(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Ko=/#/g,_l=/&/g,Cl=/\//g,kl=/=/g,Il=/\?/g,Yo=/\+/g,Ll=/%5B/g,Dl=/%5D/g,Wo=/%5E/g,Pl=/%60/g,Jo=/%7B/g,Nl=/%7C/g,$o=/%7D/g,zl=/%20/g;function Nr(e){return e==null?"":encodeURI(""+e).replace(Nl,"|").replace(Ll,"[").replace(Dl,"]")}function Ml(e){return Nr(e).replace(Jo,"{").replace($o,"}").replace(Wo,"^")}function fr(e){return Nr(e).replace(Yo,"%2B").replace(zl,"+").replace(Ko,"%23").replace(_l,"%26").replace(Pl,"`").replace(Jo,"{").replace($o,"}").replace(Wo,"^")}function Bl(e){return fr(e).replace(kl,"%3D")}function Fl(e){return Nr(e).replace(Ko,"%23").replace(Il,"%3F")}function Ul(e){return Fl(e).replace(Cl,"%2F")}function pn(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Vl=/\/$/,Gl=e=>e.replace(Vl,"");function Qn(e,t,n="/"){let r,s={},o="",i="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=t.slice(0,l),o=t.slice(l,a>0?a:t.length),s=e(o.slice(1))),a>=0&&(r=r||t.slice(0,a),i=t.slice(a,t.length)),r=Kl(r??t,n),{fullPath:r+o+i,path:r,query:s,hash:pn(i)}}function Hl(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Es(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function jl(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Vt(t.matched[r],n.matched[s])&&Xo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vt(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Xo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!ql(e[n],t[n]))return!1;return!0}function ql(e,t){return Pe(e)?As(e,t):Pe(t)?As(t,e):(e==null?void 0:e.valueOf())===(t==null?void 0:t.valueOf())}function As(e,t){return Pe(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Kl(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let o=n.length-1,i,a;for(i=0;i<r.length;i++)if(a=r[i],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(i).join("/")}const ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let mr=function(e){return e.pop="pop",e.push="push",e}({}),Zn=function(e){return e.back="back",e.forward="forward",e.unknown="",e}({});function Yl(e){if(!e)if(Dt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Gl(e)}const Wl=/^[^#]+#/;function Jl(e,t){return e.replace(Wl,"#")+t}function $l(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const Fn=()=>({left:window.scrollX,top:window.scrollY});function Xl(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=$l(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ws(e,t){return(history.state?history.state.position-t:-1)+e}const ur=new Map;function Ql(e,t){ur.set(e,t)}function Zl(e){const t=ur.get(e);return ur.delete(e),t}function ec(e){return typeof e=="string"||e&&typeof e=="object"}function Qo(e){return typeof e=="string"||typeof e=="symbol"}let ne=function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e}({});const Zo=Symbol("");ne.MATCHER_NOT_FOUND+"",ne.NAVIGATION_GUARD_REDIRECT+"",ne.NAVIGATION_ABORTED+"",ne.NAVIGATION_CANCELLED+"",ne.NAVIGATION_DUPLICATED+"";function Gt(e,t){return q(new Error,{type:e,[Zo]:!0},t)}function tt(e,t){return e instanceof Error&&Zo in e&&(t==null||!!(e.type&t))}const tc=["params","query","hash"];function nc(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const n of tc)n in e&&(t[n]=e[n]);return JSON.stringify(t,null,2)}function rc(e){const t={};if(e===""||e==="?")return t;const n=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Yo," "),o=s.indexOf("="),i=pn(o<0?s:s.slice(0,o)),a=o<0?null:pn(s.slice(o+1));if(i in t){let l=t[i];Pe(l)||(l=t[i]=[l]),l.push(a)}else t[i]=a}return t}function Rs(e){let t="";for(let n in e){const r=e[n];if(n=Bl(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Pe(r)?r.map(s=>s&&fr(s)):[r&&fr(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function sc(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Pe(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const oc=Symbol(""),Ss=Symbol(""),zr=Symbol(""),Mr=Symbol(""),gr=Symbol("");function Yt(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ut(e,t,n,r,s,o=i=>i()){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const f=g=>{g===!1?l(Gt(ne.NAVIGATION_ABORTED,{from:n,to:t})):g instanceof Error?l(g):ec(g)?l(Gt(ne.NAVIGATION_GUARD_REDIRECT,{from:t,to:g})):(i&&r.enterCallbacks[s]===i&&typeof g=="function"&&i.push(g),a())},d=o(()=>e.call(r&&r.instances[s],t,n,f));let m=Promise.resolve(d);e.length<3&&(m=m.then(f)),m.catch(g=>l(g))})}function er(e,t,n,r,s=o=>o()){const o=[];for(const i of e)for(const a in i.components){let l=i.components[a];if(!(t!=="beforeRouteEnter"&&!i.instances[a]))if(qo(l)){const f=(l.__vccOpts||l)[t];f&&o.push(ut(f,n,r,i,a,s))}else{let f=l();o.push(()=>f.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);const m=Ol(d)?d.default:d;i.mods[a]=d,i.components[a]=m;const g=(m.__vccOpts||m)[t];return g&&ut(g,n,r,i,a,s)()}))}}return o}function ic(e,t){const n=[],r=[],s=[],o=Math.max(t.matched.length,e.matched.length);for(let i=0;i<o;i++){const a=t.matched[i];a&&(e.matched.find(f=>Vt(f,a))?r.push(a):n.push(a));const l=e.matched[i];l&&(t.matched.find(f=>Vt(f,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let ac=()=>location.protocol+"//"+location.host;function ei(e,t){const{pathname:n,search:r,hash:s}=t,o=e.indexOf("#");if(o>-1){let i=s.includes(e.slice(o))?e.slice(o).length:1,a=s.slice(i);return a[0]!=="/"&&(a="/"+a),Es(a,"")}return Es(n,e)+r+s}function lc(e,t,n,r){let s=[],o=[],i=null;const a=({state:g})=>{const b=ei(e,location),k=n.value,S=t.value;let U=0;if(g){if(n.value=b,t.value=g,i&&i===k){i=null;return}U=S?g.position-S.position:0}else r(b);s.forEach(z=>{z(n.value,k,{delta:U,type:mr.pop,direction:U?U>0?Zn.forward:Zn.back:Zn.unknown})})};function l(){i=n.value}function f(g){s.push(g);const b=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return o.push(b),b}function d(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(q({},g.state,{scroll:Fn()}),"")}}function m(){for(const g of o)g();o=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:f,destroy:m}}function Ts(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Fn():null}}function cc(e){const{history:t,location:n}=window,r={value:ei(e,n)},s={value:t.state};s.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,f,d){const m=e.indexOf("#"),g=m>-1?(n.host&&document.querySelector("base")?e:e.slice(m))+l:ac()+e+l;try{t[d?"replaceState":"pushState"](f,"",g),s.value=f}catch(b){console.error(b),n[d?"replace":"assign"](g)}}function i(l,f){o(l,q({},t.state,Ts(s.value.back,l,s.value.forward,!0),f,{position:s.value.position}),!0),r.value=l}function a(l,f){const d=q({},s.value,t.state,{forward:l,scroll:Fn()});o(d.current,d,!0),o(l,q({},Ts(r.value,l,null),{position:d.position+1},f),!1),r.value=l}return{location:r,state:s,push:a,replace:i}}function dc(e){e=Yl(e);const t=cc(e),n=lc(e,t.state,t.location,t.replace);function r(o,i=!0){i||n.pauseListeners(),history.go(o)}const s=q({location:"",base:e,go:r,createHref:Jl.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}let wt=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e}({});var le=function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e}(le||{});const pc={type:wt.Static,value:""},fc=/[a-zA-Z0-9_]/;function mc(e){if(!e)return[[]];if(e==="/")return[[pc]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(b){throw new Error(`ERR (${n})/"${f}": ${b}`)}let n=le.Static,r=n;const s=[];let o;function i(){o&&s.push(o),o=[]}let a=0,l,f="",d="";function m(){f&&(n===le.Static?o.push({type:wt.Static,value:f}):n===le.Param||n===le.ParamRegExp||n===le.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),o.push({type:wt.Param,value:f,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),f="")}function g(){f+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==le.ParamRegExp){r=n,n=le.EscapeNext;continue}switch(n){case le.Static:l==="/"?(f&&m(),i()):l===":"?(m(),n=le.Param):g();break;case le.EscapeNext:g(),n=r;break;case le.Param:l==="("?n=le.ParamRegExp:fc.test(l)?g():(m(),n=le.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case le.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=le.ParamRegExpEnd:d+=l;break;case le.ParamRegExpEnd:m(),n=le.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:t("Unknown state");break}}return n===le.ParamRegExp&&t(`Unfinished custom RegExp for param "${f}"`),m(),i(),s}const Os="[^/]+?",uc={sensitive:!1,strict:!1,start:!0,end:!0};var ye=function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e}(ye||{});const gc=/[.+*?^${}()[\]/\\]/g;function bc(e,t){const n=q({},uc,t),r=[];let s=n.start?"^":"";const o=[];for(const f of e){const d=f.length?[]:[ye.Root];n.strict&&!f.length&&(s+="/");for(let m=0;m<f.length;m++){const g=f[m];let b=ye.Segment+(n.sensitive?ye.BonusCaseSensitive:0);if(g.type===wt.Static)m||(s+="/"),s+=g.value.replace(gc,"\\$&"),b+=ye.Static;else if(g.type===wt.Param){const{value:k,repeatable:S,optional:U,regexp:z}=g;o.push({name:k,repeatable:S,optional:U});const _=z||Os;if(_!==Os){b+=ye.BonusCustomRegExp;try{`${_}`}catch(I){throw new Error(`Invalid custom RegExp for param "${k}" (${_}): `+I.message)}}let L=S?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;m||(L=U&&f.length<2?`(?:/${L})`:"/"+L),U&&(L+="?"),s+=L,b+=ye.Dynamic,U&&(b+=ye.BonusOptional),S&&(b+=ye.BonusRepeatable),_===".*"&&(b+=ye.BonusWildcard)}d.push(b)}r.push(d)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=ye.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const i=new RegExp(s,n.sensitive?"":"i");function a(f){const d=f.match(i),m={};if(!d)return null;for(let g=1;g<d.length;g++){const b=d[g]||"",k=o[g-1];m[k.name]=b&&k.repeatable?b.split("/"):b}return m}function l(f){let d="",m=!1;for(const g of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const b of g)if(b.type===wt.Static)d+=b.value;else if(b.type===wt.Param){const{value:k,repeatable:S,optional:U}=b,z=k in f?f[k]:"";if(Pe(z)&&!S)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const _=Pe(z)?z.join("/"):z;if(!_)if(U)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${k}"`);d+=_}}return d||"/"}return{re:i,score:r,keys:o,parse:a,stringify:l}}function vc(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===ye.Static+ye.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===ye.Static+ye.Segment?1:-1:0}function ti(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const o=vc(r[n],s[n]);if(o)return o;n++}if(Math.abs(s.length-r.length)===1){if(_s(r))return 1;if(_s(s))return-1}return s.length-r.length}function _s(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hc={strict:!1,end:!0,sensitive:!1};function yc(e,t,n){const r=bc(mc(e.path),n),s=q(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function xc(e,t){const n=[],r=new Map;t=xs(hc,t);function s(m){return r.get(m)}function o(m,g,b){const k=!b,S=ks(m);S.aliasOf=b&&b.record;const U=xs(t,m),z=[S];if("alias"in m){const I=typeof m.alias=="string"?[m.alias]:m.alias;for(const $ of I)z.push(ks(q({},S,{components:b?b.record.components:S.components,path:$,aliasOf:b?b.record:S})))}let _,L;for(const I of z){const{path:$}=I;if(g&&$[0]!=="/"){const pe=g.record.path,te=pe[pe.length-1]==="/"?"":"/";I.path=g.record.path+($&&te+$)}if(_=yc(I,g,U),b?b.alias.push(_):(L=L||_,L!==_&&L.alias.push(_),k&&m.name&&!Is(_)&&i(m.name)),ni(_)&&l(_),S.children){const pe=S.children;for(let te=0;te<pe.length;te++)o(pe[te],_,b&&b.children[te])}b=b||_}return L?()=>{i(L)}:rn}function i(m){if(Qo(m)){const g=r.get(m);g&&(r.delete(m),n.splice(n.indexOf(g),1),g.children.forEach(i),g.alias.forEach(i))}else{const g=n.indexOf(m);g>-1&&(n.splice(g,1),m.record.name&&r.delete(m.record.name),m.children.forEach(i),m.alias.forEach(i))}}function a(){return n}function l(m){const g=wc(m,n);n.splice(g,0,m),m.record.name&&!Is(m)&&r.set(m.record.name,m)}function f(m,g){let b,k={},S,U;if("name"in m&&m.name){if(b=r.get(m.name),!b)throw Gt(ne.MATCHER_NOT_FOUND,{location:m});U=b.record.name,k=q(Cs(g.params,b.keys.filter(L=>!L.optional).concat(b.parent?b.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),m.params&&Cs(m.params,b.keys.map(L=>L.name))),S=b.stringify(k)}else if(m.path!=null)S=m.path,b=n.find(L=>L.re.test(S)),b&&(k=b.parse(S),U=b.record.name);else{if(b=g.name?r.get(g.name):n.find(L=>L.re.test(g.path)),!b)throw Gt(ne.MATCHER_NOT_FOUND,{location:m,currentLocation:g});U=b.record.name,k=q({},g.params,m.params),S=b.stringify(k)}const z=[];let _=b;for(;_;)z.unshift(_.record),_=_.parent;return{name:U,path:S,params:k,matched:z,meta:Ac(z)}}e.forEach(m=>o(m));function d(){n.length=0,r.clear()}return{addRoute:o,resolve:f,removeRoute:i,clearRoutes:d,getRoutes:a,getRecordMatcher:s}}function Cs(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ks(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Ec(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Ec(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Is(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ac(e){return e.reduce((t,n)=>q(t,n.meta),{})}function wc(e,t){let n=0,r=t.length;for(;n!==r;){const o=n+r>>1;ti(e,t[o])<0?r=o:n=o+1}const s=Rc(e);return s&&(r=t.lastIndexOf(s,r-1)),r}function Rc(e){let t=e;for(;t=t.parent;)if(ni(t)&&ti(e,t)===0)return t}function ni({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Ls(e){const t=$e(zr),n=$e(Mr),r=ue(()=>{const l=ae(e.to);return t.resolve(l)}),s=ue(()=>{const{matched:l}=r.value,{length:f}=l,d=l[f-1],m=n.matched;if(!d||!m.length)return-1;const g=m.findIndex(Vt.bind(null,d));if(g>-1)return g;const b=Ds(l[f-2]);return f>1&&Ds(d)===b&&m[m.length-1].path!==b?m.findIndex(Vt.bind(null,l[f-2])):g}),o=ue(()=>s.value>-1&&_c(n.params,r.value.params)),i=ue(()=>s.value>-1&&s.value===n.matched.length-1&&Xo(n.params,r.value.params));function a(l={}){if(Oc(l)){const f=t[ae(e.replace)?"replace":"push"](ae(e.to)).catch(rn);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>f),f}return Promise.resolve()}return{route:r,href:ue(()=>r.value.href),isActive:o,isExactActive:i,navigate:a}}function Sc(e){return e.length===1?e[0]:e}const Tc=vt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ls,setup(e,{slots:t}){const n=Pn(Ls(e)),{options:r}=$e(zr),s=ue(()=>({[Ps(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ps(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=t.default&&Sc(t.default(n));return e.custom?o:Ho("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},o)}}}),Ne=Tc;function Oc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _c(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Pe(s)||s.length!==r.length||r.some((o,i)=>o.valueOf()!==s[i].valueOf()))return!1}return!0}function Ds(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ps=(e,t,n)=>e??t??n,Cc=vt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=$e(gr),s=ue(()=>e.route||r.value),o=$e(Ss,0),i=ue(()=>{let f=ae(o);const{matched:d}=s.value;let m;for(;(m=d[f])&&!m.components;)f++;return f}),a=ue(()=>s.value.matched[i.value]);hn(Ss,ue(()=>i.value+1)),hn(oc,a),hn(gr,s);const l=Mi();return yn(()=>[l.value,a.value,e.name],([f,d,m],[g,b,k])=>{d&&(d.instances[m]=f,b&&b!==d&&f&&f===g&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),f&&d&&(!b||!Vt(d,b)||!g)&&(d.enterCallbacks[m]||[]).forEach(S=>S(f))},{flush:"post"}),()=>{const f=s.value,d=e.name,m=a.value,g=m&&m.components[d];if(!g)return Ns(n.default,{Component:g,route:f});const b=m.props[d],k=b?b===!0?f.params:typeof b=="function"?b(f):b:null,U=Ho(g,q({},k,t,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(m.instances[d]=null)},ref:l}));return Ns(n.default,{Component:U,route:f})||U}}});function Ns(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const ri=Cc;function kc(e){const t=xc(e.routes,e),n=e.parseQuery||rc,r=e.stringifyQuery||Rs,s=e.history,o=Yt(),i=Yt(),a=Yt(),l=Bi(ft);let f=ft;Dt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Xn.bind(null,y=>""+y),m=Xn.bind(null,Ul),g=Xn.bind(null,pn);function b(y,C){let T,D;return Qo(y)?(T=t.getRecordMatcher(y),D=C):D=y,t.addRoute(D,T)}function k(y){const C=t.getRecordMatcher(y);C&&t.removeRoute(C)}function S(){return t.getRoutes().map(y=>y.record)}function U(y){return!!t.getRecordMatcher(y)}function z(y,C){if(C=q({},C||l.value),typeof y=="string"){const u=Qn(n,y,C.path),v=t.resolve({path:u.path},C),x=s.createHref(u.fullPath);return q(u,v,{params:g(v.params),hash:pn(u.hash),redirectedFrom:void 0,href:x})}let T;if(y.path!=null)T=q({},y,{path:Qn(n,y.path,C.path).path});else{const u=q({},y.params);for(const v in u)u[v]==null&&delete u[v];T=q({},y,{params:m(u)}),C.params=m(C.params)}const D=t.resolve(T,C),G=y.hash||"";D.params=d(g(D.params));const c=Hl(r,q({},y,{hash:Ml(G),path:D.path})),p=s.createHref(c);return q({fullPath:c,hash:G,query:r===Rs?sc(y.query):y.query||{}},D,{redirectedFrom:void 0,href:p})}function _(y){return typeof y=="string"?Qn(n,y,l.value.path):q({},y)}function L(y,C){if(f!==y)return Gt(ne.NAVIGATION_CANCELLED,{from:C,to:y})}function I(y){return te(y)}function $(y){return I(q(_(y),{replace:!0}))}function pe(y,C){const T=y.matched[y.matched.length-1];if(T&&T.redirect){const{redirect:D}=T;let G=typeof D=="function"?D(y,C):D;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=_(G):{path:G},G.params={}),q({query:y.query,hash:y.hash,params:G.path!=null?{}:y.params},G)}}function te(y,C){const T=f=z(y),D=l.value,G=y.state,c=y.force,p=y.replace===!0,u=pe(T,D);if(u)return te(q(_(u),{state:typeof u=="object"?q({},G,u.state):G,force:c,replace:p}),C||T);const v=T;v.redirectedFrom=C;let x;return!c&&jl(r,D,T)&&(x=Gt(ne.NAVIGATION_DUPLICATED,{to:v,from:D}),Fe(D,D,!0,!1)),(x?Promise.resolve(x):Me(v,D)).catch(h=>tt(h)?tt(h,ne.NAVIGATION_GUARD_REDIRECT)?h:pt(h):j(h,v,D)).then(h=>{if(h){if(tt(h,ne.NAVIGATION_GUARD_REDIRECT))return te(q({replace:p},_(h.to),{state:typeof h.to=="object"?q({},G,h.to.state):G,force:c}),C||v)}else h=ht(v,D,!0,p,G);return dt(v,D,h),h})}function ze(y,C){const T=L(y,C);return T?Promise.reject(T):Promise.resolve()}function ct(y){const C=kt.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(y):y()}function Me(y,C){let T;const[D,G,c]=ic(y,C);T=er(D.reverse(),"beforeRouteLeave",y,C);for(const u of D)u.leaveGuards.forEach(v=>{T.push(ut(v,y,C))});const p=ze.bind(null,y,C);return T.push(p),_e(T).then(()=>{T=[];for(const u of o.list())T.push(ut(u,y,C));return T.push(p),_e(T)}).then(()=>{T=er(G,"beforeRouteUpdate",y,C);for(const u of G)u.updateGuards.forEach(v=>{T.push(ut(v,y,C))});return T.push(p),_e(T)}).then(()=>{T=[];for(const u of c)if(u.beforeEnter)if(Pe(u.beforeEnter))for(const v of u.beforeEnter)T.push(ut(v,y,C));else T.push(ut(u.beforeEnter,y,C));return T.push(p),_e(T)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),T=er(c,"beforeRouteEnter",y,C,ct),T.push(p),_e(T))).then(()=>{T=[];for(const u of i.list())T.push(ut(u,y,C));return T.push(p),_e(T)}).catch(u=>tt(u,ne.NAVIGATION_CANCELLED)?u:Promise.reject(u))}function dt(y,C,T){a.list().forEach(D=>ct(()=>D(y,C,T)))}function ht(y,C,T,D,G){const c=L(y,C);if(c)return c;const p=C===ft,u=Dt?history.state:{};T&&(D||p?s.replace(y.fullPath,q({scroll:p&&u&&u.scroll},G)):s.push(y.fullPath,G)),l.value=y,Fe(y,C,T,p),pt()}let Be;function Ht(){Be||(Be=s.listen((y,C,T)=>{if(!yt.listening)return;const D=z(y),G=pe(D,yt.currentRoute.value);if(G){te(q(G,{replace:!0,force:!0}),D).catch(rn);return}f=D;const c=l.value;Dt&&Ql(ws(c.fullPath,T.delta),Fn()),Me(D,c).catch(p=>tt(p,ne.NAVIGATION_ABORTED|ne.NAVIGATION_CANCELLED)?p:tt(p,ne.NAVIGATION_GUARD_REDIRECT)?(te(q(_(p.to),{force:!0}),D).then(u=>{tt(u,ne.NAVIGATION_ABORTED|ne.NAVIGATION_DUPLICATED)&&!T.delta&&T.type===mr.pop&&s.go(-1,!1)}).catch(rn),Promise.reject()):(T.delta&&s.go(-T.delta,!1),j(p,D,c))).then(p=>{p=p||ht(D,c,!1),p&&(T.delta&&!tt(p,ne.NAVIGATION_CANCELLED)?s.go(-T.delta,!1):T.type===mr.pop&&tt(p,ne.NAVIGATION_ABORTED|ne.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),dt(D,c,p)}).catch(rn)}))}let _t=Yt(),de=Yt(),J;function j(y,C,T){pt(y);const D=de.list();return D.length?D.forEach(G=>G(y,C,T)):console.error(y),Promise.reject(y)}function Ze(){return J&&l.value!==ft?Promise.resolve():new Promise((y,C)=>{_t.add([y,C])})}function pt(y){return J||(J=!y,Ht(),_t.list().forEach(([C,T])=>y?T(y):C()),_t.reset()),y}function Fe(y,C,T,D){const{scrollBehavior:G}=e;if(!Dt||!G)return Promise.resolve();const c=!T&&Zl(ws(y.fullPath,0))||(D||!T)&&history.state&&history.state.scroll||null;return po().then(()=>G(y,C,c)).then(p=>p&&Xl(p)).catch(p=>j(p,y,C))}const Re=y=>s.go(y);let Ct;const kt=new Set,yt={currentRoute:l,listening:!0,addRoute:b,removeRoute:k,clearRoutes:t.clearRoutes,hasRoute:U,getRoutes:S,resolve:z,options:e,push:I,replace:$,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:de.add,isReady:Ze,install(y){y.component("RouterLink",Ne),y.component("RouterView",ri),y.config.globalProperties.$router=yt,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ae(l)}),Dt&&!Ct&&l.value===ft&&(Ct=!0,I(s.location).catch(D=>{}));const C={};for(const D in ft)Object.defineProperty(C,D,{get:()=>l.value[D],enumerable:!0});y.provide(zr,yt),y.provide(Mr,io(C)),y.provide(gr,l);const T=y.unmount;kt.add(y),y.unmount=function(){kt.delete(y),kt.size<1&&(f=ft,Be&&Be(),Be=null,l.value=ft,Ct=!1,J=!1),T()}}};function _e(y){return y.reduce((C,T)=>C.then(()=>ct(T)),Promise.resolve())}return yt}function Br(e){return $e(Mr)}const Ic=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="slides-format" content="viewport">
    <title>Backup e Recovery – Oracle</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style type="text/tailwindcss">
        @theme {
            --color-bg: #160b13;
            --color-bg-deep: #080407;
            --color-surface: #2a1320;
            --color-text: #ffe8f2;
            --color-text-secondary: #d9b4c2;
            --color-text-muted: #a98895;
            --color-accent-1: #ff5c9a;
            --color-accent-2: #ff8fbd;
            --color-accent-3: #d6a84f;
            --color-glass-bg: rgba(255,255,255,0.05);
            --color-glass-border: rgba(255,255,255,0.09);
            --color-vignette: rgba(0,0,0,0.45);
            --font-display: 'Instrument Serif', serif;
            --font-body: 'Inter', sans-serif;
        }
    </style>
    <style>
        :root { --color-bg: #160b13; --color-text: #ffe8f2; --glow-color-rgb: 255,92,154; }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { background: var(--color-bg); margin: 0; }
        body { font-family: var(--font-body); color: var(--color-text); overflow: hidden; height: 100vh; width: 100vw; }
        .deck { width: 100vw; height: 100vh; position: relative; }
        .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transform: scale(0.95); transition: opacity 0.7s ease, transform 0.7s ease; pointer-events: none; overflow: hidden; }
        .slide.active { opacity: 1; transform: scale(1); pointer-events: all; }
        .slide > .content { position: relative; z-index: 2; width: 100%; max-width: 1100px; padding: clamp(1.2rem, 3vw, 3rem); }
        .nav-controls { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 14px; z-index: 100; background: var(--color-glass-bg); backdrop-filter: blur(10px); padding: 8px 22px; border-radius: 40px; border: 1px solid var(--color-glass-border); }
        .nav-btn { width: 36px; height: 36px; border: none; background: var(--color-glass-bg); color: var(--color-accent-1); border-radius: 50%; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .nav-btn:hover { background: var(--color-glass-border); }
        .slide-dots { display: flex; gap: 6px; }
        .slide-dots .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-glass-border); cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .slide-dots .dot.active { background: var(--color-accent-1); transform: scale(1.3); }
        .slide-counter { font-size: 0.75rem; color: var(--color-text-muted); min-width: 36px; text-align: center; }
        .reveal { opacity: 0; transform: translateY(20px); }
        .text-glow { text-shadow: 0 0 20px rgba(255,92,154,0.5), 0 0 40px rgba(255,92,154,0.2); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes float-slow { 0%{transform:translate(0,0) scale(1)} 25%{transform:translate(55px,-45px) scale(1.1)} 50%{transform:translate(-35px,35px) scale(0.92)} 75%{transform:translate(45px,18px) scale(1.07)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes float-drift { 0%{transform:translate(0,0) scale(1) rotate(0deg)} 33%{transform:translate(-45px,-55px) scale(1.13) rotate(3deg)} 66%{transform:translate(38px,28px) scale(0.9) rotate(-2deg)} 100%{transform:translate(0,0) scale(1) rotate(0deg)} }
        .gradient-mesh { position:absolute; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
        .blob { position:absolute; border-radius:50%; filter:blur(80px); animation:float-slow 11s ease-in-out infinite; }
        .blob:nth-child(2) { animation:float-drift 15s ease-in-out infinite; }
        .blob:nth-child(3) { animation:float-slow 19s ease-in-out infinite reverse; }
        .slide::before { content:''; position:absolute; inset:0; z-index:1; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); background-repeat:repeat; background-size:256px 256px; opacity:0.03; mix-blend-mode:overlay; }
        .slide::after { content:''; position:absolute; inset:0; z-index:1; pointer-events:none; background:radial-gradient(ellipse at center, transparent 50%, var(--color-vignette) 100%); }
        code { background: rgba(255,92,154,0.12); border: 1px solid rgba(255,92,154,0.2); border-radius: 4px; padding: 1px 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.82em; color: #ffb3cf; }
        .code-block { background: rgba(0,0,0,0.35); border: 1px solid rgba(255,92,154,0.2); border-radius: 8px; padding: 0.75rem 1rem; font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; color: #ffb3cf; line-height: 1.6; overflow: hidden; }
        .tag-pill { display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 0.65rem; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }
        .bar-fill { border-radius: 4px; height: 8px; }
        @media (max-width: 760px), (max-height: 620px) {
            html, body { height: 100dvh; overflow: hidden; }
            body { width: 100%; }
            .deck { width: 100%; height: 100dvh; }
            .slide { justify-content: flex-start !important; overflow-x: hidden !important; overflow-y: auto !important; padding: 1rem 0 6rem; }
            .slide > .content { max-width: 100%; padding: 1.1rem !important; }
            .slide [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
            .slide [style*="display:grid"] { gap: 0.75rem !important; }
            .slide [style*="display:flex"] { flex-wrap: wrap !important; }
            .slide [style*="font-size:100px"], .slide [style*="font-size:90px"], .slide [style*="font-size:96px"] { font-size: clamp(3rem, 18vw, 4.5rem) !important; }
            h1, h2, p, div, span { overflow-wrap: anywhere; }
            code, .code-block { max-width: 100%; overflow-wrap: anywhere; white-space: normal; }
            .code-block { overflow-x: auto; font-size: 0.68rem !important; }
            table { display: block; max-width: 100%; overflow-x: auto; white-space: nowrap; }
            .nav-controls { bottom: max(0.75rem, env(safe-area-inset-bottom)); width: calc(100% - 1.5rem); max-width: 28rem; justify-content: center; gap: 0.5rem; padding: 0.5rem 0.65rem; }
            .nav-btn { width: 2rem; height: 2rem; flex: 0 0 2rem; }
            .slide-dots { max-width: 45vw; overflow-x: auto; padding: 0.2rem; }
            .blob { transform: scale(0.72); filter: blur(56px); }
            canvas { pointer-events: none; }
        }
    </style>
</head>
<body>
<div class="mouse-spotlight" style="position:fixed;inset:0;z-index:99;pointer-events:none;"></div>
<div class="deck">

<!-- SLIDE 1: TITLE -->
<div class="slide active" data-slide="1">
    <div class="gradient-mesh">
        <div class="blob" style="width:520px;height:520px;top:-110px;right:-100px;background:var(--color-accent-1);opacity:.15;"></div>
        <div class="blob" style="width:320px;height:320px;bottom:-90px;left:-70px;background:var(--color-accent-3);opacity:.1;"></div>
        <div class="blob" style="width:220px;height:220px;top:38%;left:12%;background:var(--color-accent-2);opacity:.08;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:100px;margin-bottom:1rem;animation:float 3s ease-in-out infinite;" class="reveal">🛡️</div>
        <h1 class="font-display reveal" style="font-size:clamp(2.4rem,5.5vw,4.2rem);font-weight:900;background:linear-gradient(135deg,#ff5c9a,#ff8fbd,#d6a84f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.8rem;line-height:1.1;">Backup e Recovery</h1>
        <p class="reveal" style="font-size:clamp(.85rem,1.4vw,1.2rem);color:var(--color-text-muted);letter-spacing:5px;text-transform:uppercase;font-weight:300;">Oracle Database · Segurança e Disponibilidade</p>
        <div class="reveal" style="margin-top:2rem;display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(255,92,154,.15);color:#ffb3cf;border:1px solid rgba(255,92,154,.3);">LogMiner</span>
            <span class="tag-pill" style="background:rgba(214,168,79,.15);color:#f0cb77;border:1px solid rgba(214,168,79,.3);">Flashback</span>
            <span class="tag-pill" style="background:rgba(86,199,178,.12);color:#9ee0d3;border:1px solid rgba(86,199,178,.25);">Data Pump</span>
            <span class="tag-pill" style="background:rgba(168,85,247,.15);color:#f0b6cf;border:1px solid rgba(168,85,247,.3);">RMAN</span>
        </div>
    </div>
</div>

<!-- SLIDE 2: AGENDA -->
<div class="slide" data-slide="2">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-80px;right:-80px;background:var(--color-accent-1);opacity:.08;"></div>
        <div class="blob" style="width:240px;height:240px;bottom:-60px;left:-40px;background:var(--color-accent-2);opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.8rem,4vw,2.8rem);font-weight:700;margin-bottom:1.6rem;">Conteúdo <span style="color:var(--color-accent-1)">desta aula</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #ff5c9a;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.5rem;margin-bottom:.4rem;">🔍</div>
                <div style="font-weight:600;font-size:.95rem;margin-bottom:.3rem;">Categorias de Falhas</div>
                <div style="font-size:.8rem;color:var(--color-text-muted);">Instância, erros do usuário, perda de mídia, catástrofes</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #d6a84f;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.5rem;margin-bottom:.4rem;">📜</div>
                <div style="font-weight:600;font-size:.95rem;margin-bottom:.3rem;">LogMiner</div>
                <div style="font-size:.8rem;color:var(--color-text-muted);">6 passos para minerar REDO logs e auditar operações</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #e08ab6;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.5rem;margin-bottom:.4rem;">⚡</div>
                <div style="font-weight:600;font-size:.95rem;margin-bottom:.3rem;">Flashback</div>
                <div style="font-size:.8rem;color:var(--color-text-muted);">Drop, Table, Query, Version, Transaction, Data Archive, Database</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #56c7b2;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.5rem;margin-bottom:.4rem;">💾</div>
                <div style="font-weight:600;font-size:.95rem;margin-bottom:.3rem;">Data Pump + RMAN</div>
                <div style="font-size:.8rem;color:var(--color-text-muted);">EXPDP/IMPDP, backup incremental, restore, CDB/PDB</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 3: CATEGORIAS DE FALHAS -->
<div class="slide" data-slide="3">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-70px;right:-70px;background:var(--color-accent-1);opacity:.08;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-40px;background:var(--color-accent-3);opacity:.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:var(--color-accent-1);text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:600;margin-bottom:.5rem;">O que pode acontecer?</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:700;margin-bottom:1.4rem;">Categorias de <span style="color:var(--color-accent-3)">Falhas</span></h2>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.25);border-radius:10px;padding:.9rem;text-align:center;">
                <div style="font-size:1.8rem;margin-bottom:.5rem;">⚡</div>
                <div style="font-weight:700;font-size:.85rem;color:#ffb3cf;margin-bottom:.4rem;">Falha na Instância</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);line-height:1.5;">Falta de energia, hardware, processos background. Recuperação <strong style="color:#9ee0d3">automática</strong> via SMON.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.25);border-radius:10px;padding:.9rem;text-align:center;">
                <div style="font-size:1.8rem;margin-bottom:.5rem;">👤</div>
                <div style="font-weight:700;font-size:.85rem;color:#f0cb77;margin-bottom:.4rem;">Erros do Usuário</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);line-height:1.5;">DROP/TRUNCATE TABLE, UPDATE/DELETE sem WHERE correto. Usar Flashback, LogMiner ou Export.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:.9rem;text-align:center;">
                <div style="font-size:1.8rem;margin-bottom:.5rem;">💿</div>
                <div style="font-weight:700;font-size:.85rem;color:#ffb0c4;margin-bottom:.4rem;">Perda de Mídia</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);line-height:1.5;">Arquivo corrompido/perdido. Exige cópias físicas. Solução: RMAN, ASM, clusters.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.25);border-radius:10px;padding:.9rem;text-align:center;">
                <div style="font-size:1.8rem;margin-bottom:.5rem;">🌪️</div>
                <div style="font-weight:700;font-size:.85rem;color:#f0b6cf;margin-bottom:.4rem;">Catástrofes</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);line-height:1.5;">Perda total do data center. Requer site backup, espelhamento remoto, RMAN + clusters.</div>
            </div>
        </div>
        <div class="reveal" style="margin-top:1rem;background:rgba(255,92,154,.08);border:1px solid rgba(255,92,154,.2);border-radius:8px;padding:.7rem 1rem;font-size:.78rem;color:var(--color-text-secondary);">
            💡 <strong>Cluster options:</strong> Ativo/Passivo (Active Data Guard) · Ativo/Ativo (Oracle RAC)
        </div>
    </div>
</div>

<!-- SLIDE 4: LOGMINER INTRO -->
<div class="slide" data-slide="4">
    <div class="gradient-mesh">
        <div class="blob" style="width:370px;height:370px;top:-80px;right:-80px;background:#d6a84f;opacity:.08;"></div>
        <div class="blob" style="width:230px;height:230px;bottom:-55px;left:-40px;background:var(--color-accent-1);opacity:.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#d6a84f;text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:600;margin-bottom:.5rem;">Erros do Usuário</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.6rem,3.5vw,2.4rem);font-weight:700;margin-bottom:1.2rem;">LogMiner — <span style="color:#f0cb77">6 Passos</span></h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">1</span><span style="font-size:.85rem;font-weight:600;">Supplemental Log</span></div>
                <code style="font-size:.68rem;display:block;padding:.4rem .6rem;">ALTER DATABASE ADD<br>SUPPLEMENTAL LOG DATA;</code>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">2</span><span style="font-size:.85rem;font-weight:600;">Configurar Dicionário</span></div>
                <div style="font-size:.72rem;color:var(--color-text-muted);line-height:1.5;">Online Catalog, Redo Log Files ou Flat File. Online é o mais simples e direto.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">3</span><span style="font-size:.85rem;font-weight:600;">Especificar REDOs</span></div>
                <code style="font-size:.68rem;display:block;padding:.4rem .6rem;">DBMS_LOGMNR.ADD_LOGFILE(<br>LogFileName, options);</code>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">4</span><span style="font-size:.85rem;font-weight:600;">Iniciar LogMiner</span></div>
                <code style="font-size:.68rem;display:block;padding:.4rem .6rem;">DBMS_LOGMNR.START_LOGMNR(<br>OPTIONS => DICT_FROM_<br>ONLINE_CATALOG + <br>CONTINUOUS_MINE);</code>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">5</span><span style="font-size:.85rem;font-weight:600;">Consultar Conteúdo</span></div>
                <code style="font-size:.68rem;display:block;padding:.4rem .6rem;">SELECT OPERATION,<br>SQL_REDO, SQL_UNDO<br>FROM V$LOGMNR_CONTENTS;</code>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.2);border-radius:10px;padding:.85rem;">
                <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.5rem;"><span style="background:#d6a84f;color:#000;border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;">6</span><span style="font-size:.85rem;font-weight:600;">Encerrar Sessão</span></div>
                <code style="font-size:.68rem;display:block;padding:.4rem .6rem;">EXECUTE DBMS_LOGMNR<br>.END_LOGMNR;</code>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 5: FLASHBACK TECNOLOGIAS -->
<div class="slide" data-slide="5">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-75px;right:-75px;background:#e08ab6;opacity:.1;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-40px;background:var(--color-accent-2);opacity:.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#e08ab6;text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:600;margin-bottom:.5rem;">Erros do Usuário</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1.2rem;">Flashback Technologies — <span style="color:#f0b6cf">Visão Geral</span></h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">⚡ Flashback Drop</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Recycle Bin</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Desfaz um DROP TABLE. Tabela vai para RECYCLEBIN com nome <code>BIN$...</code></div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">📋 Flashback Table</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Dados de Undo</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Retorna tabela a SCN/TIMESTAMP anterior. Exige <code>ENABLE ROW MOVEMENT</code>.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">🔎 Flashback Query</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Dados de Undo</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Consulta dados de um ponto no passado via <code>AS OF SCN</code> ou <code>AS OF TIMESTAMP</code>.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">🕐 Flashback Versions</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Dados de Undo</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Vê todas as versões de linhas num intervalo via <code>VERSIONS BETWEEN</code>.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">🔄 Flashback Transaction</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Dados de Undo</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Reverte transação e dependentes via <code>TRANSACTION_BACKOUT</code>. Opções: CASCADE, NOCASCADE_FORCE.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(168,85,247,.2);border-radius:9px;padding:.8rem;">
                <div style="font-weight:700;font-size:.83rem;color:#f0b6cf;margin-bottom:.3rem;">🗄️ Flashback Database</div>
                <div style="font-size:.72rem;color:var(--color-text-muted);margin-bottom:.4rem;">Fonte: <span style="color:#ffe8f2">Flashback Logs</span></div>
                <div style="font-size:.72rem;color:var(--color-text-secondary);">Reverte o banco inteiro. Requer modo ARCHIVELOG + FRA + <code>ALTER DATABASE FLASHBACK ON</code>.</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 6: FLASHBACK QUERY & TABLE -->
<div class="slide" data-slide="6">
    <div class="gradient-mesh">
        <div class="blob" style="width:340px;height:340px;top:-70px;right:-70px;background:#e08ab6;opacity:.08;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-45px;left:-40px;background:var(--color-accent-1);opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:1.1rem;">Flashback Query & <span style="color:#f0b6cf">Table</span> — Comandos</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">🔎 Flashback Query — por Sessão</div>
                <div class="code-block">-- Habilita toda a sessão num SCN
EXECUTE DBMS_FLASHBACK
  .ENABLE_AT_SYSTEM_CHANGE_NUMBER(scn);

-- ou por timestamp
EXECUTE DBMS_FLASHBACK
  .ENABLE_AT_TIME(TO_TIMESTAMP(...));

-- Desabilita
EXECUTE DBMS_FLASHBACK.DISABLE;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">🔎 Flashback Query — por Comando</div>
                <div class="code-block">-- AS OF SCN
SELECT * FROM emp
AS OF SCN 1254890;

-- AS OF TIMESTAMP (1h atrás)
SELECT * FROM emp
AS OF TIMESTAMP
  (SYSTIMESTAMP - INTERVAL '1' HOUR);</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">📋 Flashback Table</div>
                <div class="code-block">-- Habilitar Row Movement
ALTER TABLE emp ENABLE ROW MOVEMENT;

-- Retornar ao SCN
FLASHBACK TABLE emp TO SCN 1254890;

-- Retornar ao Timestamp
FLASHBACK TABLE emp TO TIMESTAMP
  TO_TIMESTAMP('2025-04-16 14:00:00',
    'YYYY-MM-DD HH24:MI:SS');</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">🗑️ Flashback Drop (Recyclebin)</div>
                <div class="code-block">-- Recuperar tabela da lixeira
FLASHBACK TABLE emp
  TO BEFORE DROP
  [RENAME TO emp_restored];

-- Limpar lixeira
PURGE TABLE emp;
PURGE RECYCLEBIN;
PURGE DBA_RECYCLEBIN;

-- Ligar/desligar Recyclebin
ALTER SESSION SET recyclebin = ON;</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 7: FLASHBACK DATA ARCHIVE -->
<div class="slide" data-slide="7">
    <div class="gradient-mesh">
        <div class="blob" style="width:340px;height:340px;top:-70px;right:-70px;background:#e08ab6;opacity:.08;"></div>
        <div class="blob" style="width:200px;height:200px;bottom:-45px;left:-35px;background:#d6a84f;opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:.9rem;">Flashback Data Archive — <span style="color:#f0cb77">Histórico Permanente</span></h2>
        <div class="reveal" style="background:rgba(214,168,79,.08);border:1px solid rgba(214,168,79,.2);border-radius:8px;padding:.6rem 1rem;font-size:.78rem;color:#f0cb77;margin-bottom:.9rem;">
            ⚠️ Flashback Table/Query usam UNDO (temporário). Flashback Data Archive guarda histórico por anos em tablespace dedicada.
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0cb77;margin-bottom:.5rem;">📦 Criar e Habilitar</div>
                <div class="code-block">-- Criar archive com retenção 5 anos
CREATE FLASHBACK ARCHIVE meu_arqfda
  TABLESPACE ts_flashback
  RETENTION 5 YEAR;

-- Habilitar na tabela (usa DEFAULT)
ALTER TABLE emp FLASHBACK ARCHIVE;

-- Habilitar com archive específico
ALTER TABLE emp
  FLASHBACK ARCHIVE meu_arqfda;

-- Desabilitar
ALTER TABLE emp NO FLASHBACK ARCHIVE;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0cb77;margin-bottom:.5rem;">🔍 Consultar e Gerenciar</div>
                <div class="code-block">-- Consultar histórico completo
SELECT versions_starttime,
       versions_operation, emp.*
FROM emp
VERSIONS BETWEEN TIMESTAMP
  MINVALUE AND MAXVALUE;

-- Views de monitoramento
SELECT * FROM DBA_FLASHBACK_ARCHIVE;
SELECT * FROM DBA_FLASHBACK_ARCHIVE_TABLES;
SELECT * FROM DBA_FLASHBACK_ARCHIVE_TS;

-- Excluir archive
DROP FLASHBACK ARCHIVE meu_arqfda;</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 8: DATA PUMP -->
<div class="slide" data-slide="8">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-75px;right:-75px;background:#56c7b2;opacity:.08;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-50px;left:-40px;background:var(--color-accent-1);opacity:.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#56c7b2;text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:600;margin-bottom:.5rem;">Exportação e Importação</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:1rem;">Data Pump — <span style="color:#9ee0d3">EXPDP / IMPDP</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#9ee0d3;margin-bottom:.5rem;">⚙️ Configuração</div>
                <div class="code-block">-- 1. Criar diretório Oracle
CREATE DIRECTORY dpump_dir
  AS '/u01/backup';

-- 2. Conceder privilégios
GRANT READ, WRITE ON DIRECTORY
  dpump_dir TO hr;

-- 3. Grant de ROLEs especiais
GRANT DATAPUMP_EXP_FULL_DATABASE
  TO hr;
GRANT DATAPUMP_IMP_FULL_DATABASE
  TO hr;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#9ee0d3;margin-bottom:.5rem;">▶️ Execução</div>
                <div class="code-block">-- Export completo
expdp user/pass FULL=y
  DIRECTORY=dpump_dir
  DUMPFILE=full.dmp LOGFILE=exp.log

-- Import completo
impdp user/pass FULL=y
  DIRECTORY=dpump_dir
  DUMPFILE=full.dmp LOGFILE=imp.log

-- Parâmetros avançados
REMAP_SCHEMA=hr:scott
QUERY=dept:"WHERE id < 120"
EXCLUDE=PACKAGE
CONTENT=DATA_ONLY</div>
            </div>
        </div>
        <div class="reveal" style="margin-top:.9rem;display:grid;grid-template-columns:repeat(4,1fr);gap:.6rem;">
            <div style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.2);border-radius:8px;padding:.6rem;text-align:center;font-size:.72rem;">
                <div style="color:#9ee0d3;font-weight:700;">DBA_DATAPUMP_JOBS</div>
                <div style="color:var(--color-text-muted);">Jobs ativos</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.2);border-radius:8px;padding:.6rem;text-align:center;font-size:.72rem;">
                <div style="color:#9ee0d3;font-weight:700;">USER_DATAPUMP_JOBS</div>
                <div style="color:var(--color-text-muted);">Jobs do usuário</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.2);border-radius:8px;padding:.6rem;text-align:center;font-size:.72rem;">
                <div style="color:#9ee0d3;font-weight:700;">DBA_DATAPUMP_SESSIONS</div>
                <div style="color:var(--color-text-muted);">Sessões conectadas</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.2);border-radius:8px;padding:.6rem;text-align:center;font-size:.72rem;">
                <div style="color:#9ee0d3;font-weight:700;">V$SESSION_LONGOPS</div>
                <div style="color:var(--color-text-muted);">Progresso do job</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 9: RMAN CONFIG -->
<div class="slide" data-slide="9">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-75px;right:-75px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-50px;left:-40px;background:#e08ab6;opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:var(--color-accent-1);text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:600;margin-bottom:.5rem;">Backup Físico</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:1rem;">RMAN — <span style="color:#ffb3cf">Configuração</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb3cf;margin-bottom:.5rem;">⚙️ Configurar RMAN</div>
                <div class="code-block">-- Conectar
RMAN TARGET SYS/pass@BANCO
     CATALOG rman/rman@BANCO

-- Ver configurações
RMAN> SHOW ALL;

-- Destino dos backups
CONFIGURE CHANNEL DEVICE TYPE DISK
  FORMAT 'c:\\backup\\%U';

-- Autobackup controlfile
CONFIGURE CONTROLFILE AUTOBACKUP ON;
CONFIGURE CONTROLFILE AUTOBACKUP
  FORMAT FOR DEVICE TYPE DISK
  TO FORMAT 'c:\\backup\\%F';

-- Política de retenção
CONFIGURE RETENTION POLICY TO
  RECOVERY WINDOW OF 2 DAYS;
-- ou por redundância
CONFIGURE RETENTION POLICY TO
  REDUNDANCY 3;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb3cf;margin-bottom:.5rem;">▶️ Executar Backup</div>
                <div class="code-block">-- Full backup + archivelogs
BACKUP DATABASE PLUS ARCHIVELOG;

-- Só controlfile
BACKUP CURRENT CONTROLFILE;

-- Backup incremental nível 0 (base)
BACKUP INCREMENTAL LEVEL 0
  DATABASE PLUS ARCHIVELOG;

-- Incremental diferencial nível 1
BACKUP INCREMENTAL LEVEL 1
  DATABASE;

-- Incremental cumulativo
BACKUP INCREMENTAL LEVEL 1
  CUMULATIVE DATABASE;

-- Script complexo
RUN {
  BACKUP DATABASE PLUS ARCHIVELOG;
  BACKUP CURRENT CONTROLFILE;
};</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 10: RMAN RESTORE & RECOVER -->
<div class="slide" data-slide="10">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-75px;right:-75px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-50px;left:-40px;background:#56c7b2;opacity:.07;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:1rem;">RMAN — <span style="color:#9ee0d3">Restore & Recover</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#9ee0d3;margin-bottom:.5rem;">🔄 Recover Completo</div>
                <div class="code-block">RMAN> startup force nomount;

-- Restaura controlfile do autobackup
RMAN> RESTORE CONTROLFILE
       FROM AUTOBACKUP;

RMAN> startup force mount;

-- Restaura e recupera banco
RMAN> RESTORE DATABASE;
RMAN> RECOVER DATABASE;
RMAN> ALTER DATABASE OPEN;

-- Se recover incompleto:
RMAN> ALTER DATABASE OPEN RESETLOGS;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#9ee0d3;margin-bottom:.5rem;">⏱️ Recover Incompleto (PITR)</div>
                <div class="code-block">RUN {
  SET UNTIL SCN 1418901;
  RESTORE DATABASE;
  RECOVER DATABASE;
}
ALTER DATABASE OPEN RESETLOGS;

-- Ou por data/hora
RUN {
  SET UNTIL TIME
    "TO_DATE('23-DEC-2013 12:00:00',
     'DD-MON-YYYY HH24:MI:SS')";
  RESTORE DATABASE;
  RECOVER DATABASE;
}
ALTER DATABASE OPEN RESETLOGS;</div>
            </div>
        </div>
        <div class="reveal" style="margin-top:.9rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;">
            <div style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.2);border-radius:8px;padding:.6rem;font-size:.72rem;">
                <div style="color:#ffb3cf;font-weight:700;margin-bottom:.3rem;">REPORT NEED BACKUP</div>
                <div style="color:var(--color-text-muted);">Verifica arquivos sem backup</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.2);border-radius:8px;padding:.6rem;font-size:.72rem;">
                <div style="color:#ffb3cf;font-weight:700;margin-bottom:.3rem;">LIST BACKUP SUMMARY</div>
                <div style="color:var(--color-text-muted);">Lista backups realizados</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.2);border-radius:8px;padding:.6rem;font-size:.72rem;">
                <div style="color:#ffb3cf;font-weight:700;margin-bottom:.3rem;">RESTORE DATABASE VALIDATE</div>
                <div style="color:var(--color-text-muted);">Valida sem fazer restore</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 11: CDB/PDB BACKUP -->
<div class="slide" data-slide="11">
    <div class="gradient-mesh">
        <div class="blob" style="width:340px;height:340px;top:-70px;right:-70px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-45px;left:-40px;background:#e08ab6;opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.1rem);font-weight:700;margin-bottom:1rem;">RMAN com <span style="color:#ffb3cf">CDB e PDBs</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb3cf;margin-bottom:.5rem;">💾 Backup CDB/PDB</div>
                <div class="code-block">-- Full CDB (inclui todos PDBs)
RMAN> BACKUP DATABASE PLUS ARCHIVELOG;

-- Só ROOT container
RMAN> BACKUP DATABASE ROOT;

-- PDB específico (conectado ao CDB)
RMAN> BACKUP PLUGGABLE DATABASE
       pdb1, pdb2;

-- Tablespace de PDB específico
RMAN> BACKUP TABLESPACE
       pdb1:system, pdb1:users;

-- Conectado diretamente no PDB
RMAN> BACKUP DATABASE;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb3cf;margin-bottom:.5rem;">🔄 Recovery CDB/PDB</div>
                <div class="code-block">-- Recovery completo do CDB
RUN {
  SHUTDOWN IMMEDIATE;
  STARTUP MOUNT;
  RESTORE DATABASE;
  RECOVER DATABASE;
  ALTER DATABASE OPEN;
}

-- Recovery de PDB específico
RUN {
  ALTER PLUGGABLE DATABASE pdb1 CLOSE;
  RESTORE PLUGGABLE DATABASE pdb1;
  RECOVER PLUGGABLE DATABASE pdb1;
  ALTER PLUGGABLE DATABASE pdb1
    OPEN;
}

-- PITR em PDB
SET UNTIL TIME "TO_DATE(...)";
RESTORE PLUGGABLE DATABASE pdb1;
RECOVER PLUGGABLE DATABASE pdb1;
ALTER PLUGGABLE DATABASE pdb1
  OPEN RESETLOGS;</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 12: ENCERRAMENTO -->
<div class="slide" data-slide="12">
    <div class="gradient-mesh">
        <div class="blob" style="width:520px;height:520px;top:-110px;right:-100px;background:var(--color-accent-1);opacity:.14;"></div>
        <div class="blob" style="width:320px;height:320px;bottom:-90px;left:-70px;background:#e08ab6;opacity:.1;"></div>
        <div class="blob" style="width:200px;height:200px;top:35%;left:10%;background:#d6a84f;opacity:.08;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:90px;margin-bottom:.8rem;animation:float 3s ease-in-out infinite;" class="reveal">✅</div>
        <h1 class="font-display reveal" style="font-size:clamp(2rem,5vw,3.8rem);font-weight:900;background:linear-gradient(135deg,#ff5c9a,#ff8fbd,#d6a84f);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.8rem;">Bons Estudos!</h1>
        <p class="reveal" style="font-size:clamp(.85rem,1.4vw,1.1rem);color:var(--color-text-muted);letter-spacing:4px;text-transform:uppercase;margin-bottom:1.5rem;">Backup e Recovery — Oracle Database</p>
        <div class="reveal" style="display:flex;justify-content:center;gap:.8rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(255,92,154,.15);color:#ffb3cf;border:1px solid rgba(255,92,154,.3);">LogMiner · 6 Passos</span>
            <span class="tag-pill" style="background:rgba(168,85,247,.15);color:#f0b6cf;border:1px solid rgba(168,85,247,.3);">Flashback · 7 Tipos</span>
            <span class="tag-pill" style="background:rgba(86,199,178,.12);color:#9ee0d3;border:1px solid rgba(86,199,178,.25);">Data Pump EXPDP/IMPDP</span>
            <span class="tag-pill" style="background:rgba(214,168,79,.15);color:#f0cb77;border:1px solid rgba(214,168,79,.3);">RMAN Backup & Recovery</span>
        </div>
    </div>
</div>

</div><!-- end .deck -->

<div class="nav-controls">
    <button class="nav-btn" onclick="changeSlide(-1)">&#8249;</button>
    <div class="slide-dots" id="dots"></div>
    <button class="nav-btn" onclick="changeSlide(1)">&#8250;</button>
    <span class="slide-counter" id="counter">1 / 12</span>
</div>

<script>
let current = 1;
const total = document.querySelectorAll('.slide').length;
const dotsContainer = document.getElementById('dots');
const counter = document.getElementById('counter');
for (let i = 1; i <= total; i++) { const dot = document.createElement('div'); dot.className = 'dot' + (i === 1 ? ' active' : ''); dot.onclick = () => goToSlide(i); dotsContainer.appendChild(dot); }
function goToSlide(n) {
    const prev = document.querySelector('.slide.active');
    const next = document.querySelector(\`.slide[data-slide="\${n}"]\`);
    if (prev) prev.classList.remove('active');
    if (next) { next.classList.add('active'); animateSlide(next); }
    current = n; updateNav();
}
function changeSlide(dir) { let next = current + dir; if (next < 1) next = total; if (next > total) next = 1; goToSlide(next); }
function updateNav() { document.querySelectorAll('.dot').forEach((d, i) => { d.classList.toggle('active', i + 1 === current); }); counter.textContent = current + ' / ' + total; }
document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); } });
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
document.addEventListener('touchend', (e) => { const diff = touchStartX - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 1 : -1); });
function animateSlide(slide) {
    slide.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.offsetHeight;
        const delay = i * 0.08;
        el.style.transition = \`opacity 0.35s ease \${delay}s, transform 0.35s ease \${delay}s\`;
        el.style.opacity = '1'; el.style.transform = 'translateY(0px)';
    });
}
document.addEventListener('mousemove', (e) => {
    const spotlight = document.querySelector('.mouse-spotlight');
    if (spotlight) spotlight.style.background = \`radial-gradient(600px circle at \${e.clientX}px \${e.clientY}px, rgba(255,92,154,0.06), transparent 40%)\`;
});
window.initParticles = function(canvas, options) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d'); canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    const count = options.count || 55; let mx = -1000, my = -1000;
    const particles = Array.from({ length: count }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2.5 + 0.8, alpha: Math.random() * 0.35 + 0.1 }));
    canvas.addEventListener('mousemove', (e) => { const rect = canvas.getBoundingClientRect(); mx = e.clientX - rect.left; my = e.clientY - rect.top; });
    canvas.addEventListener('mouseleave', () => { mx = -1000; my = -1000; });
    (function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            const dx = p.x - mx, dy = p.y - my, dist = Math.sqrt(dx*dx+dy*dy);
            if (dist < 120) { const force = (120-dist)/120*2; p.vx += (dx/dist)*force*0.1; p.vy += (dy/dist)*force*0.1; }
            p.vx *= 0.98; p.vy *= 0.98; p.x += p.vx; p.y += p.vy;
            if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
            if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fillStyle = \`rgba(255,92,154,\${p.alpha})\`; ctx.fill();
        });
        requestAnimationFrame(animate);
    })();
};
document.querySelectorAll('.particle-canvas').forEach(c => window.initParticles(c, { count: 55 }));
try { animateSlide(document.querySelector('.slide.active')); } catch(e) {}
<\/script>
</body>
</html>
`,Lc=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="slides-format" content="viewport">
    <title>Plano de Recuperação de Desastres – Oracle</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style type="text/tailwindcss">
        @theme {
            --color-bg: #160b13;
            --color-bg-deep: #080407;
            --color-surface: #2a1320;
            --color-text: #ffe8f2;
            --color-text-secondary: #d9b4c2;
            --color-text-muted: #a98895;
            --color-accent-1: #d76ba3;
            --color-accent-2: #e08ab6;
            --color-accent-3: #ff4f8b;
            --color-glass-bg: rgba(255,255,255,0.05);
            --color-glass-border: rgba(255,255,255,0.09);
            --color-vignette: rgba(0,0,0,0.5);
            --font-display: 'Instrument Serif', serif;
            --font-body: 'Inter', sans-serif;
        }
    </style>
    <style>
        :root { --color-bg: #160b13; --color-text: #ffe8f2; --glow-color-rgb: 215,107,163; }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { background: var(--color-bg); margin: 0; }
        body { font-family: var(--font-body); color: var(--color-text); overflow: hidden; height: 100vh; width: 100vw; }
        .deck { width: 100vw; height: 100vh; position: relative; }
        .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transform: scale(0.95); transition: opacity 0.7s ease, transform 0.7s ease; pointer-events: none; overflow: hidden; }
        .slide.active { opacity: 1; transform: scale(1); pointer-events: all; }
        .slide > .content { position: relative; z-index: 2; width: 100%; max-width: 1100px; padding: clamp(1.2rem, 3vw, 3rem); }
        .nav-controls { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 14px; z-index: 100; background: var(--color-glass-bg); backdrop-filter: blur(10px); padding: 8px 22px; border-radius: 40px; border: 1px solid var(--color-glass-border); }
        .nav-btn { width: 36px; height: 36px; border: none; background: var(--color-glass-bg); color: var(--color-accent-1); border-radius: 50%; font-size: 1.1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .nav-btn:hover { background: var(--color-glass-border); }
        .slide-dots { display: flex; gap: 6px; }
        .slide-dots .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-glass-border); cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .slide-dots .dot.active { background: var(--color-accent-1); transform: scale(1.3); }
        .slide-counter { font-size: 0.75rem; color: var(--color-text-muted); min-width: 36px; text-align: center; }
        .reveal { opacity: 0; transform: translateY(20px); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes float-slow { 0%{transform:translate(0,0) scale(1)} 25%{transform:translate(55px,-45px) scale(1.1)} 50%{transform:translate(-35px,35px) scale(0.92)} 75%{transform:translate(45px,18px) scale(1.07)} 100%{transform:translate(0,0) scale(1)} }
        @keyframes float-drift { 0%{transform:translate(0,0) scale(1) rotate(0deg)} 33%{transform:translate(-45px,-55px) scale(1.13) rotate(3deg)} 66%{transform:translate(38px,28px) scale(0.9) rotate(-2deg)} 100%{transform:translate(0,0) scale(1) rotate(0deg)} }
        .gradient-mesh { position:absolute; inset:0; z-index:0; overflow:hidden; pointer-events:none; }
        .blob { position:absolute; border-radius:50%; filter:blur(80px); animation:float-slow 11s ease-in-out infinite; }
        .blob:nth-child(2) { animation:float-drift 15s ease-in-out infinite; }
        .blob:nth-child(3) { animation:float-slow 19s ease-in-out infinite reverse; }
        .slide::before { content:''; position:absolute; inset:0; z-index:1; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); background-repeat:repeat; background-size:256px 256px; opacity:0.03; mix-blend-mode:overlay; }
        .slide::after { content:''; position:absolute; inset:0; z-index:1; pointer-events:none; background:radial-gradient(ellipse at center, transparent 50%, var(--color-vignette) 100%); }
        code { background: rgba(215,107,163,0.15); border: 1px solid rgba(215,107,163,0.25); border-radius: 4px; padding: 1px 6px; font-family: 'JetBrains Mono', monospace; font-size: 0.82em; color: #f0b6cf; }
        .code-block { background: rgba(0,0,0,0.4); border: 1px solid rgba(215,107,163,0.2); border-radius: 8px; padding: 0.7rem 0.9rem; font-family: 'JetBrains Mono', monospace; font-size: 0.7rem; color: #f0b6cf; line-height: 1.6; }
        .tag-pill { display:inline-block; padding:2px 10px; border-radius:20px; font-size:.65rem; font-weight:600; letter-spacing:.06em; text-transform:uppercase; }
        @media (max-width: 760px), (max-height: 620px) {
            html, body { height: 100dvh; overflow: hidden; }
            body { width: 100%; }
            .deck { width: 100%; height: 100dvh; }
            .slide { justify-content: flex-start !important; overflow-x: hidden !important; overflow-y: auto !important; padding: 1rem 0 6rem; }
            .slide > .content { max-width: 100%; padding: 1.1rem !important; }
            .slide [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
            .slide [style*="display:grid"] { gap: 0.75rem !important; }
            .slide [style*="display:flex"] { flex-wrap: wrap !important; }
            .slide [style*="font-size:100px"], .slide [style*="font-size:90px"], .slide [style*="font-size:96px"] { font-size: clamp(3rem, 18vw, 4.5rem) !important; }
            h1, h2, p, div, span { overflow-wrap: anywhere; }
            code, .code-block { max-width: 100%; overflow-wrap: anywhere; white-space: normal; }
            .code-block { overflow-x: auto; font-size: 0.68rem !important; }
            table { display: block; max-width: 100%; overflow-x: auto; white-space: nowrap; }
            .nav-controls { bottom: max(0.75rem, env(safe-area-inset-bottom)); width: calc(100% - 1.5rem); max-width: 28rem; justify-content: center; gap: 0.5rem; padding: 0.5rem 0.65rem; }
            .nav-btn { width: 2rem; height: 2rem; flex: 0 0 2rem; }
            .slide-dots { max-width: 45vw; overflow-x: auto; padding: 0.2rem; }
            .blob { transform: scale(0.72); filter: blur(56px); }
            canvas { pointer-events: none; }
        }
    </style>
</head>
<body>
<div class="mouse-spotlight" style="position:fixed;inset:0;z-index:99;pointer-events:none;"></div>
<div class="deck">

<!-- SLIDE 1: TÍTULO -->
<div class="slide active" data-slide="1">
    <div class="gradient-mesh">
        <div class="blob" style="width:520px;height:520px;top:-110px;right:-100px;background:var(--color-accent-1);opacity:.15;"></div>
        <div class="blob" style="width:320px;height:320px;bottom:-90px;left:-70px;background:var(--color-accent-3);opacity:.1;"></div>
        <div class="blob" style="width:220px;height:220px;top:38%;left:12%;background:var(--color-accent-2);opacity:.08;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:96px;margin-bottom:.8rem;animation:float 3s ease-in-out infinite;" class="reveal">🚨</div>
        <h1 class="font-display reveal" style="font-size:clamp(2.2rem,5vw,3.8rem);font-weight:900;background:linear-gradient(135deg,#d76ba3,#e08ab6,#ff4f8b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.8rem;line-height:1.1;">Plano de Recuperação<br>de Desastres</h1>
        <p class="reveal" style="font-size:clamp(.8rem,1.3vw,1.1rem);color:var(--color-text-muted);letter-spacing:5px;text-transform:uppercase;font-weight:300;">Oracle Database · DRP · Continuidade de Negócios</p>
        <div class="reveal" style="margin-top:1.8rem;display:flex;justify-content:center;gap:.8rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(215,107,163,.15);color:#f0b6cf;border:1px solid rgba(215,107,163,.3);">RTO / RPO</span>
            <span class="tag-pill" style="background:rgba(255,79,139,.15);color:#ffb0c4;border:1px solid rgba(255,79,139,.3);">CIA – Confidencialidade</span>
            <span class="tag-pill" style="background:rgba(255,92,154,.15);color:#ffb3cf;border:1px solid rgba(255,92,154,.3);">Data Guard</span>
            <span class="tag-pill" style="background:rgba(86,199,178,.12);color:#9ee0d3;border:1px solid rgba(86,199,178,.25);">Oracle RAC</span>
            <span class="tag-pill" style="background:rgba(214,168,79,.15);color:#f0cb77;border:1px solid rgba(214,168,79,.3);">TDE Criptografia</span>
        </div>
    </div>
</div>

<!-- SLIDE 2: AGENDA -->
<div class="slide" data-slide="2">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-75px;right:-75px;background:var(--color-accent-1);opacity:.08;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-55px;left:-40px;background:var(--color-accent-2);opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.8rem,3.8vw,2.6rem);font-weight:700;margin-bottom:1.4rem;">Conteúdo <span style="color:var(--color-accent-2)">deste módulo</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #d76ba3;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.4rem;margin-bottom:.4rem;">🛡️</div>
                <div style="font-weight:600;font-size:.92rem;margin-bottom:.3rem;">Princípios CIA</div>
                <div style="font-size:.78rem;color:var(--color-text-muted);">Confidencialidade, Integridade e Disponibilidade — base da segurança da informação</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #ff4f8b;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.4rem;margin-bottom:.4rem;">⚠️</div>
                <div style="font-weight:600;font-size:.92rem;margin-bottom:.3rem;">Ativos, Ameaças e Riscos</div>
                <div style="font-size:.78rem;color:var(--color-text-muted);">Software, hardware, dados e pessoas — vulnerabilidades e ameaças naturais/intencionais</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #ff5c9a;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.4rem;margin-bottom:.4rem;">📊</div>
                <div style="font-weight:600;font-size:.92rem;margin-bottom:.3rem;">Indicadores: RTO e RPO</div>
                <div style="font-size:.78rem;color:var(--color-text-muted);">MTBF, MTTR, RTO e RPO — métricas que guiam as decisões de proteção e recuperação</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);backdrop-filter:blur(12px);border:1px solid var(--color-glass-border);border-left:4px solid #56c7b2;border-radius:10px;padding:1rem 1.2rem;">
                <div style="font-size:1.4rem;margin-bottom:.4rem;">📋</div>
                <div style="font-weight:600;font-size:.92rem;margin-bottom:.3rem;">DRP — Plano de Ação</div>
                <div style="font-size:.78rem;color:var(--color-text-muted);">Estrutura do plano: ameaça → atividade preventiva → roteiros RMAN pós-incidente</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 3: CIA - PRINCÍPIOS -->
<div class="slide" data-slide="3">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-75px;right:-75px;background:#ff4f8b;opacity:.09;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-40px;background:var(--color-accent-1);opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff4f8b;text-transform:uppercase;letter-spacing:.1em;font-size:.75rem;font-weight:600;margin-bottom:.4rem;">Fundamentos</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.6rem,3.5vw,2.3rem);font-weight:700;margin-bottom:1.2rem;">Tríade CIA — <span style="color:#ffb0c4">Segurança da Informação</span></h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-bottom:1rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.25);border-radius:10px;padding:1rem;text-align:center;">
                <div style="font-size:2rem;margin-bottom:.5rem;">🔒</div>
                <div style="font-weight:700;color:#f0b6cf;font-size:.9rem;margin-bottom:.4rem;">Confidencialidade</div>
                <div style="font-size:.74rem;color:var(--color-text-muted);line-height:1.5;">Somente a pessoa correta acessa a informação. Oracle: <strong style="color:#ffe8f2">USERS, ROLES, TDE</strong></div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.25);border-radius:10px;padding:1rem;text-align:center;">
                <div style="font-size:2rem;margin-bottom:.5rem;">✅</div>
                <div style="font-weight:700;color:#ffb0c4;font-size:.9rem;margin-bottom:.4rem;">Integridade</div>
                <div style="font-size:.74rem;color:var(--color-text-muted);line-height:1.5;">Informação não alterada de forma indevida. Oracle: <strong style="color:#ffe8f2">Audit, LogMiner, Flashback</strong></div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.25);border-radius:10px;padding:1rem;text-align:center;">
                <div style="font-size:2rem;margin-bottom:.5rem;">🟢</div>
                <div style="font-weight:700;color:#9ee0d3;font-size:.9rem;margin-bottom:.4rem;">Disponibilidade</div>
                <div style="font-size:.74rem;color:var(--color-text-muted);line-height:1.5;">Informação acessível quando necessário. Oracle: <strong style="color:#ffe8f2">RMAN, Data Guard, RAC</strong></div>
            </div>
        </div>
        <div class="reveal" style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem;">
            <div style="background:rgba(215,107,163,.07);border:1px solid rgba(215,107,163,.18);border-radius:8px;padding:.7rem 1rem;font-size:.76rem;">
                <strong style="color:#f0b6cf;">Confidencialidade + Integridade:</strong>
                <span style="color:var(--color-text-secondary);"> Criptografia em trânsito e em repouso, trilhas de auditoria, arquivos de Log.</span>
            </div>
            <div style="background:rgba(86,199,178,.06);border:1px solid rgba(86,199,178,.18);border-radius:8px;padding:.7rem 1rem;font-size:.76rem;">
                <strong style="color:#9ee0d3;">Integridade + Disponibilidade:</strong>
                <span style="color:var(--color-text-secondary);"> Backup/Recovery, Flashback, PROFILE de recursos, Database Resource Manager.</span>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 4: AMEAÇAS, ATIVOS E RISCOS -->
<div class="slide" data-slide="4">
    <div class="gradient-mesh">
        <div class="blob" style="width:340px;height:340px;top:-70px;right:-70px;background:#ff4f8b;opacity:.08;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-45px;left:-40px;background:var(--color-accent-2);opacity:.06;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1rem;">Ativos, Ameaças e <span style="color:#ffb0c4">Riscos</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:.9rem;">
            <div class="reveal">
                <p style="font-size:.78rem;font-weight:600;color:#ffb0c4;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem;">Tipos de Ameaças</p>
                <div style="display:flex;flex-direction:column;gap:.5rem;">
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.2);border-radius:8px;padding:.65rem .9rem;font-size:.76rem;">
                        <strong style="color:#ffb0c4;">🌪️ Naturais</strong> — fogo, inundação, falta de energia, intempéries
                    </div>
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.2);border-radius:8px;padding:.65rem .9rem;font-size:.76rem;">
                        <strong style="color:#ffb0c4;">🎯 Intencionais</strong> — fraudes, sabotagem, espionagem, invasões, furto de dados
                    </div>
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.2);border-radius:8px;padding:.65rem .9rem;font-size:.76rem;">
                        <strong style="color:#ffb0c4;">😶 Involuntárias</strong> — erros de usuários, falta de conhecimento, descuido
                    </div>
                </div>
            </div>
            <div class="reveal">
                <p style="font-size:.78rem;font-weight:600;color:#f0b6cf;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem;">Ativos e Vulnerabilidades</p>
                <div style="display:flex;flex-direction:column;gap:.5rem;">
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:8px;padding:.6rem .9rem;font-size:.74rem;"><strong style="color:#f0b6cf;">💻 Software</strong> — falhas de atualização, configuração, implementação</div>
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:8px;padding:.6rem .9rem;font-size:.74rem;"><strong style="color:#f0b6cf;">🖥️ Hardware</strong> — infraestrutura elétrica, inundações, falhas físicas</div>
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:8px;padding:.6rem .9rem;font-size:.74rem;"><strong style="color:#f0b6cf;">📁 Dados</strong> — controle de acesso deficiente, política de backup inadequada</div>
                    <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:8px;padding:.6rem .9rem;font-size:.74rem;"><strong style="color:#f0b6cf;">👥 Pessoas</strong> — resistência às práticas de segurança, descuido</div>
                </div>
            </div>
        </div>
        <div class="reveal" style="margin-top:.9rem;background:rgba(214,168,79,.08);border:1px solid rgba(214,168,79,.2);border-radius:8px;padding:.65rem 1rem;font-size:.76rem;color:#f0cb77;">
            📌 <strong>Risco</strong> = probabilidade de que uma ameaça explore uma vulnerabilidade, causando danos. <em>"A segurança deve ser proporcional ao valor do que se protege."</em> — Thomas Wadlow
        </div>
    </div>
</div>

<!-- SLIDE 5: INDICADORES RTO/RPO -->
<div class="slide" data-slide="5">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-75px;right:-75px;background:#ff5c9a;opacity:.09;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-55px;left:-40px;background:var(--color-accent-1);opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:.1em;font-size:.75rem;font-weight:600;margin-bottom:.4rem;">Métricas</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1.2rem;">Indicadores que <span style="color:#ffb3cf">guiam as soluções</span></h2>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem;margin-bottom:1rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.25);border-radius:10px;padding:1rem;">
                <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                    <span style="background:rgba(255,92,154,.2);color:#ffb3cf;border-radius:6px;padding:.2rem .6rem;font-size:.72rem;font-weight:700;">MTBF</span>
                    <span style="font-weight:600;font-size:.9rem;">Mean Time Between Failure</span>
                </div>
                <div style="font-size:.76rem;color:var(--color-text-muted);">Tempo médio entre falhas. Quanto maior, mais confiável o sistema. Mede a <strong style="color:#ffe8f2">frequência</strong> com que falhas ocorrem.</div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.25);border-radius:10px;padding:1rem;">
                <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                    <span style="background:rgba(255,92,154,.2);color:#ffb3cf;border-radius:6px;padding:.2rem .6rem;font-size:.72rem;font-weight:700;">MTTR</span>
                    <span style="font-weight:600;font-size:.9rem;">Mean Time To Recover</span>
                </div>
                <div style="font-size:.76rem;color:var(--color-text-muted);">Tempo médio para recuperação após uma falha. Quanto menor, mais ágil a equipe. Mede a <strong style="color:#ffe8f2">eficiência</strong> do processo de recuperação.</div>
            </div>
            <div class="reveal" style="background:rgba(215,107,163,.1);border:2px solid rgba(215,107,163,.35);border-radius:10px;padding:1rem;">
                <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                    <span style="background:#d76ba3;color:#fff;border-radius:6px;padding:.2rem .6rem;font-size:.72rem;font-weight:700;">RTO</span>
                    <span style="font-weight:600;font-size:.9rem;">Recovery Time Objective</span>
                </div>
                <div style="font-size:.76rem;color:var(--color-text-secondary);">Tempo <strong style="color:#f0b6cf">máximo aceitável</strong> para recuperação após incidente. Ex: "O banco deve estar de volta em <strong style="color:#f0b6cf">4 horas</strong>". Define qual tecnologia usar (RMAN, Data Guard, RAC).</div>
            </div>
            <div class="reveal" style="background:rgba(255,79,139,.1);border:2px solid rgba(255,79,139,.35);border-radius:10px;padding:1rem;">
                <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem;">
                    <span style="background:#ff4f8b;color:#fff;border-radius:6px;padding:.2rem .6rem;font-size:.72rem;font-weight:700;">RPO</span>
                    <span style="font-weight:600;font-size:.9rem;">Recovery Point Objective</span>
                </div>
                <div style="font-size:.76rem;color:var(--color-text-secondary);">Perda de dados <strong style="color:#ffb0c4">máxima aceitável</strong>. Ex: "Não podemos perder mais de <strong style="color:#ffb0c4">1 hora</strong> de transações". Define frequência do backup e uso de archivelog.</div>
            </div>
        </div>
        <div class="reveal" style="background:rgba(214,168,79,.07);border:1px solid rgba(214,168,79,.2);border-radius:8px;padding:.6rem 1rem;font-size:.75rem;color:#f0cb77;">
            💡 <strong>RTO pequeno</strong> → Data Guard / RAC (failover automático) &nbsp;|&nbsp; <strong>RPO pequeno</strong> → ARCHIVELOG + RMAN + Data Guard Sync
        </div>
    </div>
</div>

<!-- SLIDE 6: INDISPONIBILIDADE E SOLUÇÕES ORACLE -->
<div class="slide" data-slide="6">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-48px;left:-40px;background:#56c7b2;opacity:.07;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1rem;">Tipos de Indisponibilidade e <span style="color:#9ee0d3">Soluções Oracle</span></h2>
        <div style="display:flex;flex-direction:column;gap:.7rem;">
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(214,168,79,.25);border-radius:9px;padding:.8rem 1rem;display:grid;grid-template-columns:1fr 2fr;gap:1rem;align-items:start;">
                <div>
                    <div style="font-weight:700;color:#f0cb77;font-size:.85rem;margin-bottom:.3rem;">⚡ Lentidão / Indisponibilidade Relativa</div>
                    <div style="font-size:.72rem;color:var(--color-text-muted);">Usuário consome recursos excessivos</div>
                </div>
                <div style="font-size:.75rem;color:var(--color-text-secondary);line-height:1.6;">
                    <strong style="color:#f0cb77;">Solução:</strong> <code>CREATE PROFILE</code> com limites de <code>CPU_PER_SESSION</code>, <code>SESSIONS_PER_USER</code>, <code>IDLE_TIME</code> + <strong>Database Resource Manager</strong> (DBMS_RESOURCE_MANAGER)
                </div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.25);border-radius:9px;padding:.8rem 1rem;display:grid;grid-template-columns:1fr 2fr;gap:1rem;align-items:start;">
                <div>
                    <div style="font-weight:700;color:#ffb0c4;font-size:.85rem;margin-bottom:.3rem;">🔴 Queda sem Avaria Permanente</div>
                    <div style="font-size:.72rem;color:var(--color-text-muted);">Ex: falta de energia, crash de instância</div>
                </div>
                <div style="font-size:.75rem;color:var(--color-text-secondary);line-height:1.6;">
                    <strong style="color:#ffb0c4;">Solução:</strong> Recuperação <strong>automática</strong> pelo processo <code>SMON</code> após <code>STARTUP</code>. Configurar <code>FAST_START_MTTR_TARGET</code> para limitar tempo de recovery.
                </div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.25);border-radius:9px;padding:.8rem 1rem;display:grid;grid-template-columns:1fr 2fr;gap:1rem;align-items:start;">
                <div>
                    <div style="font-weight:700;color:#f0b6cf;font-size:.85rem;margin-bottom:.3rem;">🟠 Avaria de Software/Hardware</div>
                    <div style="font-size:.72rem;color:var(--color-text-muted);">Servidor inutilizado temporariamente</div>
                </div>
                <div style="font-size:.75rem;color:var(--color-text-secondary);line-height:1.6;">
                    <strong style="color:#f0b6cf;">Solução:</strong> <strong>Active Data Guard</strong> (Ativo/Passivo) — standby sempre pronto para assumir. <code>ALTER DATABASE RECOVER MANAGED STANDBY DATABASE</code>
                </div>
            </div>
            <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,92,154,.25);border-radius:9px;padding:.8rem 1rem;display:grid;grid-template-columns:1fr 2fr;gap:1rem;align-items:start;">
                <div>
                    <div style="font-weight:700;color:#ffb3cf;font-size:.85rem;margin-bottom:.3rem;">💀 Perda Total do Data Center</div>
                    <div style="font-size:.72rem;color:var(--color-text-muted);">Catástrofe — prédio, região</div>
                </div>
                <div style="font-size:.75rem;color:var(--color-text-secondary);line-height:1.6;">
                    <strong style="color:#ffb3cf;">Solução:</strong> <strong>Oracle RAC</strong> (Ativo/Ativo) em site remoto + espelhamento ASM + RMAN com backups offsite. <code>DATA GUARD FAR SYNC</code> para RPO zero.
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 7: CONFIDENCIALIDADE - CRIPTOGRAFIA TDE -->
<div class="slide" data-slide="7">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:#ff4f8b;opacity:.08;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-48px;left:-40px;background:var(--color-accent-1);opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff4f8b;text-transform:uppercase;letter-spacing:.1em;font-size:.75rem;font-weight:600;margin-bottom:.4rem;">Confidencialidade</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1rem;">Criptografia — <span style="color:#ffb0c4">TDE e Network</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb0c4;margin-bottom:.5rem;">🔐 TDE — Transparent Data Encryption</div>
                <div class="code-block">-- Criar wallet (keystore)
ADMINISTER KEY MANAGEMENT
  CREATE KEYSTORE '/etc/oracle/wallet'
  IDENTIFIED BY "SenhaForte#1";

-- Abrir keystore
ADMINISTER KEY MANAGEMENT
  SET KEYSTORE OPEN
  IDENTIFIED BY "SenhaForte#1";

-- Ativar chave master
ADMINISTER KEY MANAGEMENT
  SET KEY IDENTIFIED BY "SenhaForte#1"
  WITH BACKUP;

-- Criptografar coluna
ALTER TABLE hr.employees
  MODIFY (salary ENCRYPT USING AES256);

-- Criptografar tablespace
ALTER TABLESPACE ts_dados
  ENCRYPTION ONLINE ENCRYPT;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#ffb0c4;margin-bottom:.5rem;">🌐 Criptografia em Rede (sqlnet.ora)</div>
                <div class="code-block">-- sqlnet.ora (servidor)
SQLNET.ENCRYPTION_SERVER = REQUIRED
SQLNET.ENCRYPTION_TYPES_SERVER =
  (AES256, AES192, AES128)
SQLNET.CRYPTO_CHECKSUM_SERVER =
  REQUIRED

-- sqlnet.ora (cliente)
SQLNET.ENCRYPTION_CLIENT = REQUESTED
SQLNET.ENCRYPTION_TYPES_CLIENT =
  (AES256)

-- Verificar sessão criptografada
SELECT network_service_banner
FROM v$session_connect_info
WHERE sid = SYS_CONTEXT('USERENV','SID');</div>
                <div style="margin-top:.8rem;background:rgba(215,107,163,.08);border:1px solid rgba(215,107,163,.2);border-radius:7px;padding:.55rem .8rem;font-size:.72rem;color:var(--color-text-secondary);">
                    💡 TDE protege dados <strong style="color:#f0b6cf">em repouso</strong> (arquivos, backups). sqlnet.ora protege dados <strong style="color:#f0b6cf">em trânsito</strong> (rede).
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 8: AUDITORIA -->
<div class="slide" data-slide="8">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-48px;left:-40px;background:#ff4f8b;opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:var(--color-accent-2);text-transform:uppercase;letter-spacing:.1em;font-size:.75rem;font-weight:600;margin-bottom:.4rem;">Trilhas de Auditoria</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1rem;">Unified Auditing — <span style="color:#f0b6cf">Comandos</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">⚙️ Configurar Políticas</div>
                <div class="code-block">-- Criar política de auditoria
CREATE AUDIT POLICY pol_dml
  ACTIONS INSERT, UPDATE, DELETE
  ON hr.employees;

-- Habilitar política
AUDIT POLICY pol_dml;

-- Auditoria de sistema (DDL)
CREATE AUDIT POLICY pol_ddl
  ACTIONS CREATE TABLE, DROP TABLE,
          ALTER TABLE;
AUDIT POLICY pol_ddl;

-- Auditoria de login
AUDIT POLICY ORA_LOGON_FAILURES;</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.85rem;color:#f0b6cf;margin-bottom:.5rem;">🔍 Consultar Trilhas</div>
                <div class="code-block">-- Consultar registros de auditoria
SELECT dbusername, action_name,
       object_name, event_timestamp,
       return_code
FROM unified_audit_trail
WHERE object_name = 'EMPLOYEES'
ORDER BY event_timestamp DESC;

-- Logins com falha
SELECT dbusername, event_timestamp,
       return_code
FROM unified_audit_trail
WHERE action_name = 'LOGON'
AND return_code != 0;

-- Ver políticas ativas
SELECT * FROM audit_unified_policies
WHERE enabled_opt = 'BY SESSION';</div>
            </div>
        </div>
        <div class="reveal" style="margin-top:.8rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;">
            <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:7px;padding:.55rem;text-align:center;font-size:.7rem;">
                <div style="color:#f0b6cf;font-weight:700;">UNIFIED_AUDIT_TRAIL</div>
                <div style="color:var(--color-text-muted);">Trilha consolidada</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:7px;padding:.55rem;text-align:center;font-size:.7rem;">
                <div style="color:#f0b6cf;font-weight:700;">DBA_AUDIT_POLICIES</div>
                <div style="color:var(--color-text-muted);">Políticas definidas</div>
            </div>
            <div style="background:var(--color-glass-bg);border:1px solid rgba(215,107,163,.2);border-radius:7px;padding:.55rem;text-align:center;font-size:.7rem;">
                <div style="color:#f0b6cf;font-weight:700;">V$XML_AUDIT_TRAIL</div>
                <div style="color:var(--color-text-muted);">Auditoria em XML</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 9: DRP - PLANO DE AÇÃO -->
<div class="slide" data-slide="9">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:#56c7b2;opacity:.08;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-48px;left:-40px;background:var(--color-accent-1);opacity:.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#56c7b2;text-transform:uppercase;letter-spacing:.1em;font-size:.75rem;font-weight:600;margin-bottom:.4rem;">PCN / DRP</p>
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1rem;">Plano de Continuidade — <span style="color:#9ee0d3">Estrutura PLN-100</span></h2>
        <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(86,199,178,.2);border-radius:10px;overflow:hidden;margin-bottom:.9rem;">
            <div style="background:rgba(86,199,178,.12);padding:.5rem 1rem;font-size:.75rem;font-weight:700;color:#9ee0d3;letter-spacing:.05em;">PLANO DE RECUPERAÇÃO DE DESASTRE: PLN-100 — Perda de DataFiles do banco PRODUCAO</div>
            <table style="width:100%;border-collapse:collapse;font-size:.72rem;">
                <thead>
                    <tr style="background:rgba(86,199,178,.08);">
                        <th style="padding:.45rem .8rem;text-align:left;color:#9ee0d3;border-bottom:1px solid rgba(86,199,178,.15);width:40%;">Atividade Preventiva</th>
                        <th style="padding:.45rem .8rem;text-align:left;color:#9ee0d3;border-bottom:1px solid rgba(86,199,178,.15);width:30%;">Periodicidade</th>
                        <th style="padding:.45rem .8rem;text-align:left;color:#9ee0d3;border-bottom:1px solid rgba(86,199,178,.15);">Responsável</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);">Conferir log do backup completo</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">Seg–Sex às 8h</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                    <tr>
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);">Testar backup — recovery em ambiente de teste</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">Sábado às 8h</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="reveal" style="background:var(--color-glass-bg);border:1px solid rgba(255,79,139,.2);border-radius:10px;overflow:hidden;">
            <div style="background:rgba(255,79,139,.1);padding:.5rem 1rem;font-size:.75rem;font-weight:700;color:#ffb0c4;letter-spacing:.05em;">APÓS A AMEAÇA SE CONCRETIZAR</div>
            <table style="width:100%;border-collapse:collapse;font-size:.72rem;">
                <tbody>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);width:45%;">Comunicar ao Gerente de Dados</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">O mais rápido possível</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);">Restaurar arquivos danificados da FRA</td>
                        <td style="padding:.4rem .8rem;color:#ffb0c4;font-weight:600;font-family:monospace;">ROTEIRO-01</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.05);">
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);">Complementar restore do backup em disco</td>
                        <td style="padding:.4rem .8rem;color:#ffb0c4;font-weight:600;font-family:monospace;">ROTEIRO-02</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                    <tr>
                        <td style="padding:.4rem .8rem;color:var(--color-text-secondary);">Complementar restore do backup em Fita</td>
                        <td style="padding:.4rem .8rem;color:#ffb0c4;font-weight:600;font-family:monospace;">ROTEIRO-03</td>
                        <td style="padding:.4rem .8rem;color:var(--color-text-muted);">DBA</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- SLIDE 10: DRP - ROTEIROS RMAN -->
<div class="slide" data-slide="10">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-48px;left:-40px;background:#56c7b2;opacity:.07;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3vw,2rem);font-weight:700;margin-bottom:1rem;">Roteiros de Recovery — <span style="color:#ffb3cf">RMAN Passo a Passo</span></h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <div class="reveal">
                <div style="font-weight:600;font-size:.82rem;color:#9ee0d3;margin-bottom:.4rem;">📋 ROTEIRO-01 — Restaurar da FRA</div>
                <div class="code-block">-- Identificar arquivo danificado
SELECT file#, name, status
FROM v$datafile WHERE status='RECOVER';

-- Conectar RMAN
RMAN TARGET /

-- Restaurar datafile específico
RUN {
  SQL "ALTER DATABASE DATAFILE 5
       OFFLINE";
  RESTORE DATAFILE 5;
  RECOVER DATAFILE 5;
  SQL "ALTER DATABASE DATAFILE 5
       ONLINE";
}</div>
            </div>
            <div class="reveal">
                <div style="font-weight:600;font-size:.82rem;color:#ffb3cf;margin-bottom:.4rem;">📋 ROTEIRO-02 — Restore do Backup em Disco</div>
                <div class="code-block">-- Especificar localização do backup
RMAN> CATALOG START WITH
  '/u01/backup/';

-- Listar backups disponíveis
RMAN> LIST BACKUP OF DATAFILE 5;

-- Restaurar a partir do backup
RUN {
  SET UNTIL SCN <ultimo_scn_valido>;
  RESTORE DATAFILE 5;
  RECOVER DATAFILE 5;
  SQL "ALTER DATABASE DATAFILE 5
       ONLINE";
}

-- Verificar consistência
RMAN> VALIDATE DATABASE;</div>
            </div>
        </div>
        <div class="reveal" style="margin-top:.8rem;background:rgba(214,168,79,.07);border:1px solid rgba(214,168,79,.2);border-radius:8px;padding:.6rem 1rem;font-size:.74rem;color:#f0cb77;">
            ⚠️ ROTEIRO-03 (Fita): mesma lógica do ROTEIRO-02, mas primeiro <code>CATALOG</code> aponta para o dispositivo de fita. Necessário ter RMAN configurado com <code>CONFIGURE CHANNEL DEVICE TYPE SBT</code>.
        </div>
    </div>
</div>

<!-- SLIDE 11: MAPEAMENTO AMEAÇA → SOLUÇÃO -->
<div class="slide" data-slide="11">
    <div class="gradient-mesh">
        <div class="blob" style="width:345px;height:345px;top:-72px;right:-72px;background:var(--color-accent-1);opacity:.09;"></div>
        <div class="blob" style="width:215px;height:215px;bottom:-48px;left:-40px;background:#ff4f8b;opacity:.07;"></div>
    </div>
    <div class="content">
        <h2 class="font-display reveal" style="font-size:clamp(1.5rem,3.2vw,2.2rem);font-weight:700;margin-bottom:1.1rem;">Ameaça <span style="color:#f0b6cf">→</span> Recurso Oracle</h2>
        <div style="overflow:hidden;border-radius:10px;border:1px solid var(--color-glass-border);" class="reveal">
            <table style="width:100%;border-collapse:collapse;font-size:.74rem;">
                <thead>
                    <tr style="background:rgba(215,107,163,.15);">
                        <th style="padding:.5rem .8rem;text-align:left;color:#f0b6cf;font-weight:600;">Ameaça / Problema</th>
                        <th style="padding:.5rem .8rem;text-align:left;color:#f0b6cf;font-weight:600;">Recurso Oracle</th>
                        <th style="padding:.5rem .8rem;text-align:left;color:#f0b6cf;font-weight:600;">Comando / Objeto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Acesso indevido a dados</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">Users / Roles / Profiles</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">GRANT, REVOKE, CREATE ROLE</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Espionagem de dados em trânsito</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">Network Encryption</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">sqlnet.ora ENCRYPTION_SERVER</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Roubo de datafiles / backup</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">TDE</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">ALTER TABLESPACE ENCRYPT</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">UPDATE/DELETE errado pelo usuário</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">Flashback / LogMiner</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">AS OF SCN, TRANSACTION_BACKOUT</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">DROP TABLE acidental</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">Flashback Drop</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">FLASHBACK TABLE t TO BEFORE DROP</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Usuário sobrecarrega o sistema</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">PROFILE / Resource Manager</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">CPU_PER_SESSION, IDLE_TIME</td>
                    </tr>
                    <tr style="border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.02);">
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Perda de datafiles / corrupção</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">RMAN</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">RESTORE/RECOVER DATABASE</td>
                    </tr>
                    <tr>
                        <td style="padding:.45rem .8rem;color:var(--color-text-secondary);">Queda / catástrofe total</td>
                        <td style="padding:.45rem .8rem;color:#f0cb77;">Data Guard / Oracle RAC</td>
                        <td style="padding:.45rem .8rem;font-family:monospace;color:#e08ab6;font-size:.7rem;">FAILOVER / SWITCHOVER</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

<!-- SLIDE 12: ENCERRAMENTO -->
<div class="slide" data-slide="12">
    <div class="gradient-mesh">
        <div class="blob" style="width:520px;height:520px;top:-110px;right:-100px;background:var(--color-accent-1);opacity:.14;"></div>
        <div class="blob" style="width:320px;height:320px;bottom:-90px;left:-70px;background:#ff4f8b;opacity:.1;"></div>
        <div class="blob" style="width:200px;height:200px;top:35%;left:10%;background:var(--color-accent-2);opacity:.08;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:88px;margin-bottom:.8rem;animation:float 3s ease-in-out infinite;" class="reveal">🎯</div>
        <h1 class="font-display reveal" style="font-size:clamp(2rem,5vw,3.6rem);font-weight:900;background:linear-gradient(135deg,#d76ba3,#e08ab6,#ff4f8b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.8rem;">Bons Estudos!</h1>
        <p class="reveal" style="font-size:clamp(.8rem,1.3vw,1.05rem);color:var(--color-text-muted);letter-spacing:4px;text-transform:uppercase;margin-bottom:1.5rem;">Plano de Recuperação de Desastres — Oracle</p>
        <div class="reveal" style="display:flex;justify-content:center;gap:.7rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(255,79,139,.15);color:#ffb0c4;border:1px solid rgba(255,79,139,.3);">CIA — Confidencialidade · Integridade · Disponibilidade</span>
            <span class="tag-pill" style="background:rgba(215,107,163,.15);color:#f0b6cf;border:1px solid rgba(215,107,163,.3);">RTO / RPO</span>
            <span class="tag-pill" style="background:rgba(86,199,178,.12);color:#9ee0d3;border:1px solid rgba(86,199,178,.25);">DRP · PCN</span>
            <span class="tag-pill" style="background:rgba(214,168,79,.15);color:#f0cb77;border:1px solid rgba(214,168,79,.3);">TDE · Audit · RMAN · Data Guard</span>
        </div>
    </div>
</div>

</div><!-- end .deck -->
<div class="nav-controls">
    <button class="nav-btn" onclick="changeSlide(-1)">&#8249;</button>
    <div class="slide-dots" id="dots"></div>
    <button class="nav-btn" onclick="changeSlide(1)">&#8250;</button>
    <span class="slide-counter" id="counter">1 / 12</span>
</div>
<script>
let current = 1;
const total = document.querySelectorAll('.slide').length;
const dotsContainer = document.getElementById('dots');
const counter = document.getElementById('counter');
for (let i = 1; i <= total; i++) { const dot = document.createElement('div'); dot.className = 'dot' + (i === 1 ? ' active' : ''); dot.onclick = () => goToSlide(i); dotsContainer.appendChild(dot); }
function goToSlide(n) {
    const prev = document.querySelector('.slide.active');
    const next = document.querySelector(\`.slide[data-slide="\${n}"]\`);
    if (prev) prev.classList.remove('active');
    if (next) { next.classList.add('active'); animateSlide(next); }
    current = n; updateNav();
}
function changeSlide(dir) { let n = current + dir; if (n < 1) n = total; if (n > total) n = 1; goToSlide(n); }
function updateNav() { document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i + 1 === current)); counter.textContent = current + ' / ' + total; }
document.addEventListener('keydown', e => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); } });
let tx = 0;
document.addEventListener('touchstart', e => tx = e.touches[0].clientX);
document.addEventListener('touchend', e => { const d = tx - e.changedTouches[0].clientX; if (Math.abs(d) > 50) changeSlide(d > 0 ? 1 : -1); });
function animateSlide(slide) {
    slide.querySelectorAll('.reveal').forEach((el, i) => {
        el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.offsetHeight;
        el.style.transition = \`opacity 0.35s ease \${i*0.08}s, transform 0.35s ease \${i*0.08}s\`;
        el.style.opacity = '1'; el.style.transform = 'translateY(0)';
    });
}
document.addEventListener('mousemove', e => {
    const s = document.querySelector('.mouse-spotlight');
    if (s) s.style.background = \`radial-gradient(600px circle at \${e.clientX}px \${e.clientY}px, rgba(215,107,163,0.06), transparent 40%)\`;
});
window.initParticles = function(canvas, opts) {
    if (!canvas) return;
    const ctx = canvas.getContext('2d'); canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
    let mx = -1000, my = -1000;
    const ps = Array.from({length: opts.count||55}, () => ({ x: Math.random()*canvas.width, y: Math.random()*canvas.height, vx:(Math.random()-.5)*.3, vy:(Math.random()-.5)*.3, size:Math.random()*2.5+.8, alpha:Math.random()*.35+.1 }));
    canvas.addEventListener('mousemove', e => { const r = canvas.getBoundingClientRect(); mx = e.clientX-r.left; my = e.clientY-r.top; });
    canvas.addEventListener('mouseleave', () => { mx=-1000; my=-1000; });
    (function a() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ps.forEach(p => {
            const dx=p.x-mx,dy=p.y-my,d=Math.sqrt(dx*dx+dy*dy);
            if(d<120){const f=(120-d)/120*2;p.vx+=(dx/d)*f*.1;p.vy+=(dy/d)*f*.1;}
            p.vx*=.98;p.vy*=.98;p.x+=p.vx;p.y+=p.vy;
            if(p.x<0)p.x=canvas.width;if(p.x>canvas.width)p.x=0;
            if(p.y<0)p.y=canvas.height;if(p.y>canvas.height)p.y=0;
            ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fillStyle=\`rgba(215,107,163,\${p.alpha})\`;ctx.fill();
        });
        requestAnimationFrame(a);
    })();
};
document.querySelectorAll('.particle-canvas').forEach(c => window.initParticles(c, {count:55}));
try { animateSlide(document.querySelector('.slide.active')); } catch(e){}
<\/script>
</body>
</html>
`,Dc=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="slides-format" content="viewport">
    <title>Segurança em Banco de Dados — Usuários, Privilégios e Roles</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style type="text/tailwindcss">
        @theme {
            --color-bg: #160b13;
            --color-bg-deep: #080407;
            --color-surface: #2a1320;
            --color-text: #ffe8f2;
            --color-text-secondary: #d9b4c2;
            --color-text-muted: #a98895;
            --color-accent-1: #ff5c9a;
            --color-accent-2: #d76ba3;
            --color-accent-3: #56c7b2;
            --color-glass-bg: rgba(255,255,255,0.05);
            --color-glass-border: rgba(255,255,255,0.08);
            --color-vignette: rgba(0,0,0,0.45);
            --font-display: 'JetBrains Mono', monospace;
            --font-body: 'Inter', sans-serif;
        }
    </style>
    <style>
        :root { --color-bg: #160b13; --color-text: #ffe8f2; --glow-color-rgb: 255,92,154; }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { background: var(--color-bg); margin: 0; }
        body { font-family: 'Inter', sans-serif; color: var(--color-text); overflow: hidden; height: 100vh; width: 100vw; }
        .deck { width: 100vw; height: 100vh; position: relative; }
        .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transform: scale(0.95); transition: opacity 0.7s ease, transform 0.7s ease; pointer-events: none; overflow: hidden; }
        .slide.active { opacity: 1; transform: scale(1); pointer-events: all; }
        .slide > .content { position: relative; z-index: 2; width: 100%; max-width: 1100px; padding: clamp(1.5rem, 4vw, 3.5rem); }
        .nav-controls { position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 16px; z-index: 100; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 10px 24px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.08); }
        .nav-btn { width: 38px; height: 38px; border: none; background: rgba(255,255,255,0.06); color: #ff5c9a; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .nav-btn:hover { background: rgba(255,92,154,0.15); }
        .slide-dots { display: flex; gap: 8px; }
        .slide-dots .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .slide-dots .dot.active { background: #ff5c9a; transform: scale(1.3); }
        .slide-counter { font-size: 0.75rem; color: #a98895; min-width: 40px; text-align: center; font-family: 'JetBrains Mono', monospace; }
        .reveal { opacity: 0; transform: translateY(20px); }
        .text-glow { text-shadow: 0 0 20px rgba(255,92,154,0.5), 0 0 40px rgba(255,92,154,0.2); }
        .stat-glow { text-shadow: 0 0 30px rgba(255,92,154,0.6), 0 0 60px rgba(255,92,154,0.25); }
        @keyframes glow-pulse {
            0%, 100% { text-shadow: 0 0 20px rgba(255,92,154,0.5), 0 0 40px rgba(255,92,154,0.2); }
            50% { text-shadow: 0 0 30px rgba(255,92,154,0.8), 0 0 60px rgba(255,92,154,0.3); }
        }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        @keyframes float-slow { 0% { transform: translate(0,0) scale(1); } 25% { transform: translate(60px,-50px) scale(1.12); } 50% { transform: translate(-40px,40px) scale(0.9); } 75% { transform: translate(50px,20px) scale(1.08); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes float-drift { 0% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(-50px,-60px) scale(1.15) rotate(3deg); } 66% { transform: translate(40px,30px) scale(0.88) rotate(-2deg); } 100% { transform: translate(0,0) scale(1) rotate(0deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .gradient-mesh { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); animation: float-slow 10s ease-in-out infinite; }
        .blob:nth-child(2) { animation: float-drift 14s ease-in-out infinite; }
        .blob:nth-child(3) { animation: float-slow 18s ease-in-out infinite reverse; }
        .slide::before { content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); background-repeat: repeat; background-size: 256px 256px; opacity: 0.03; mix-blend-mode: overlay; }
        .slide::after { content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none; background: radial-gradient(ellipse at center, transparent 50%, var(--color-vignette) 100%); }
        code, .code-block { font-family: 'JetBrains Mono', monospace; }
        .code-block { background: rgba(255,92,154,0.06); border: 1px solid rgba(255,92,154,0.15); border-left: 3px solid #ff5c9a; border-radius: 8px; padding: 0.8rem 1.2rem; font-size: clamp(0.7rem, 1.2vw, 0.85rem); color: #ffb3cf; line-height: 1.7; }
        .code-block .kw { color: #d76ba3; font-weight: 700; }
        .code-block .val { color: #56c7b2; }
        .code-block .cmt { color: #7f5b67; font-style: italic; }
        .tag-pill { display: inline-block; padding: 0.15rem 0.6rem; border-radius: 999px; font-size: 0.7rem; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.05em; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(255,92,154,0.12); }
        @media (max-width: 760px), (max-height: 620px) {
            html, body { height: 100dvh; overflow: hidden; }
            body { width: 100%; }
            .deck { width: 100%; height: 100dvh; }
            .slide { justify-content: flex-start !important; overflow-x: hidden !important; overflow-y: auto !important; padding: 1rem 0 6rem; }
            .slide > .content { max-width: 100%; padding: 1.1rem !important; }
            .slide [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
            .slide [style*="display:grid"] { gap: 0.75rem !important; }
            .slide [style*="display:flex"] { flex-wrap: wrap !important; }
            .slide [style*="font-size:100px"], .slide [style*="font-size:90px"], .slide [style*="font-size:96px"] { font-size: clamp(3rem, 18vw, 4.5rem) !important; }
            h1, h2, p, div, span { overflow-wrap: anywhere; }
            code, .code-block { max-width: 100%; overflow-wrap: anywhere; white-space: normal; }
            .code-block { overflow-x: auto; font-size: 0.68rem !important; }
            table { display: block; max-width: 100%; overflow-x: auto; white-space: nowrap; }
            .nav-controls { bottom: max(0.75rem, env(safe-area-inset-bottom)); width: calc(100% - 1.5rem); max-width: 28rem; justify-content: center; gap: 0.5rem; padding: 0.5rem 0.65rem; }
            .nav-btn { width: 2rem; height: 2rem; flex: 0 0 2rem; }
            .slide-dots { max-width: 45vw; overflow-x: auto; padding: 0.2rem; }
            .blob { transform: scale(0.72); filter: blur(56px); }
            canvas { pointer-events: none; }
        }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.2s !important; } }
    </style>
</head>
<body>
<div class="mouse-spotlight" style="position:fixed;inset:0;z-index:99;pointer-events:none;"></div>
<div class="deck">

<!-- SLIDE 1: TITLE -->
<div class="slide slide-1 active" data-slide="1">
    <div class="gradient-mesh">
        <div class="blob" style="width:500px;height:500px;top:-120px;right:-100px;background:#ff5c9a;opacity:0.12;"></div>
        <div class="blob" style="width:350px;height:350px;bottom:-80px;left:-60px;background:#d76ba3;opacity:0.1;"></div>
        <div class="blob" style="width:220px;height:220px;top:45%;left:20%;background:#56c7b2;opacity:0.08;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:90px;margin-bottom:1rem;animation:float 3s ease-in-out infinite;" class="reveal">🔐</div>
        <h1 class="font-display reveal glow-pulse" style="font-size:clamp(2rem,5vw,3.8rem);font-weight:900;background:linear-gradient(135deg,#ff5c9a,#d76ba3,#56c7b2);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-0.02em;margin-bottom:0.8rem;">Segurança em Banco de Dados</h1>
        <p class="reveal" style="font-size:clamp(0.85rem,1.5vw,1.1rem);color:#a98895;letter-spacing:0.3em;text-transform:uppercase;font-weight:400;">Usuários · Privilégios · Roles — Oracle SQL</p>
        <div class="reveal" style="margin-top:2rem;display:flex;justify-content:center;gap:1rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(255,92,154,0.12);color:#ff5c9a;border:1px solid rgba(255,92,154,0.2);">CREATE USER</span>
            <span class="tag-pill" style="background:rgba(215,107,163,0.12);color:#d76ba3;border:1px solid rgba(215,107,163,0.2);">GRANT / REVOKE</span>
            <span class="tag-pill" style="background:rgba(86,199,178,0.12);color:#56c7b2;border:1px solid rgba(86,199,178,0.2);">CREATE ROLE</span>
            <span class="tag-pill" style="background:rgba(214,168,79,0.12);color:#d6a84f;border:1px solid rgba(214,168,79,0.2);">DROP USER</span>
        </div>
    </div>
</div>

<!-- SLIDE 2: AGENDA -->
<div class="slide slide-2" data-slide="2">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-80px;right:-80px;background:#ff5c9a;opacity:0.07;"></div>
        <div class="blob" style="width:250px;height:250px;bottom:-50px;left:-40px;background:#d76ba3;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.5rem;">Conteúdo</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.8rem,3.5vw,2.6rem);font-weight:800;margin-bottom:2rem;">O que vamos aprender?</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;" class="reveal">
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-left:3px solid #ff5c9a;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">👤</div>
                <div style="color:#ff5c9a;font-weight:700;font-size:1rem;margin-bottom:0.4rem;">01 — Usuários</div>
                <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">CREATE USER · ALTER USER · DROP USER · Autenticação · Tablespace · Quotas</div>
            </div>
            <div class="card-hover" style="background:rgba(215,107,163,0.06);border:1px solid rgba(215,107,163,0.12);border-left:3px solid #d76ba3;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">🔑</div>
                <div style="color:#d76ba3;font-weight:700;font-size:1rem;margin-bottom:0.4rem;">02 — Privilégios</div>
                <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">GRANT · REVOKE · De Sistema · De Objetos · WITH ADMIN/GRANT OPTION</div>
            </div>
            <div class="card-hover" style="background:rgba(86,199,178,0.06);border:1px solid rgba(86,199,178,0.12);border-left:3px solid #56c7b2;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">🎭</div>
                <div style="color:#56c7b2;font-weight:700;font-size:1rem;margin-bottom:0.4rem;">03 — Roles (Papéis)</div>
                <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">CREATE ROLE · ALTER ROLE · SET ROLE · DROP ROLE · Ativação/Desativação</div>
            </div>
            <div class="card-hover" style="background:rgba(214,168,79,0.06);border:1px solid rgba(214,168,79,0.12);border-left:3px solid #d6a84f;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">📊</div>
                <div style="color:#d6a84f;font-weight:700;font-size:1rem;margin-bottom:0.4rem;">04 — Consultas DBA</div>
                <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">DBA_USERS · DBA_SYS_PRIVS · DBA_ROLES · SESSION_PRIVS · Views do sistema</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 3: CREATE USER -->
<div class="slide slide-3" data-slide="3">
    <div class="gradient-mesh">
        <div class="blob" style="width:400px;height:400px;top:-100px;right:-80px;background:#ff5c9a;opacity:0.08;"></div>
        <div class="blob" style="width:200px;height:200px;bottom:-40px;left:-30px;background:#56c7b2;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">01 — Usuários</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.6rem,3vw,2.3rem);font-weight:800;margin-bottom:1.2rem;">CREATE USER — Criando um Usuário</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div class="reveal">
                <div class="code-block">
<span class="kw">CREATE USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">senha123</span><br>
&nbsp;&nbsp;<span class="kw">DEFAULT TABLESPACE</span> <span class="val">users</span><br>
&nbsp;&nbsp;<span class="kw">TEMPORARY TABLESPACE</span> <span class="val">temp</span><br>
&nbsp;&nbsp;<span class="kw">QUOTA</span> 100M <span class="kw">ON</span> <span class="val">users</span><br>
&nbsp;&nbsp;<span class="kw">ACCOUNT UNLOCK</span>;<br>
<br>
<span class="cmt">-- Forçar troca de senha no primeiro acesso</span><br>
<span class="kw">CREATE USER</span> maria<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">tmp</span><br>
&nbsp;&nbsp;<span class="kw">PASSWORD EXPIRE</span><br>
&nbsp;&nbsp;<span class="kw">ACCOUNT LOCK</span>;
                </div>
            </div>
            <div class="reveal" style="display:flex;flex-direction:column;gap:0.7rem;">
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.8rem 1rem;">
                    <div style="color:#ff5c9a;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.35rem;font-family:'JetBrains Mono',monospace;">IDENTIFIED BY</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.4;">Define a senha para autenticação via banco de dados. Alternativa: EXTERNALLY (SO) ou via rede (SSL, LDAP).</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.8rem 1rem;">
                    <div style="color:#56c7b2;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.35rem;font-family:'JetBrains Mono',monospace;">QUOTA {K|M|G} ON tablespace</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.4;">Limita o espaço que o usuário pode usar no tablespace. UNLIMITED remove o limite — mas o privilégio UNLIMITED TABLESPACE tem prioridade.</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.8rem 1rem;">
                    <div style="color:#d6a84f;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.35rem;font-family:'JetBrains Mono',monospace;">PASSWORD EXPIRE / ACCOUNT LOCK</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.4;">EXPIRE força troca na próxima conexão. LOCK bloqueia o acesso imediatamente.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 4: ALTER / DROP USER -->
<div class="slide slide-4" data-slide="4">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-80px;left:-60px;background:#d76ba3;opacity:0.08;"></div>
        <div class="blob" style="width:200px;height:200px;bottom:-50px;right:-40px;background:#ff5c9a;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">01 — Usuários</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:1.2rem;">ALTER USER & DROP USER</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div class="reveal">
                <p style="color:#d76ba3;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">ALTER USER — Alteração</p>
                <div class="code-block">
<span class="cmt">-- Trocar senha</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">novaSenha</span>;<br>
<br>
<span class="cmt">-- Alterar tablespace e quota</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">DEFAULT TABLESPACE</span> <span class="val">dados</span><br>
&nbsp;&nbsp;<span class="kw">QUOTA UNLIMITED ON</span> <span class="val">dados</span>;<br>
<br>
<span class="cmt">-- Bloquear conta</span><br>
<span class="kw">ALTER USER</span> joao <span class="kw">ACCOUNT LOCK</span>;<br>
<br>
<span class="cmt">-- Definir tablespace padrão global</span><br>
<span class="kw">ALTER DATABASE DEFAULT TABLESPACE</span> <span class="val">users</span>;<br>
<span class="kw">ALTER DATABASE DEFAULT TEMPORARY TABLESPACE</span> <span class="val">temp</span>;
                </div>
            </div>
            <div class="reveal">
                <p style="color:#ff789f;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">DROP USER — Exclusão</p>
                <div class="code-block">
<span class="cmt">-- Remover usuário sem objetos</span><br>
<span class="kw">DROP USER</span> joao;<br>
<br>
<span class="cmt">-- Remover usuário E todos os objetos</span><br>
<span class="cmt">-- do schema (tabelas, views, etc.)</span><br>
<span class="kw">DROP USER</span> joao <span class="kw">CASCADE</span>;<br>
<br>
<span class="cmt">-- ⚠️  Não é possível remover</span><br>
<span class="cmt">--     usuário conectado no momento</span>
                </div>
                <div style="background:rgba(255,120,159,0.08);border:1px solid rgba(255,120,159,0.15);border-radius:8px;padding:0.8rem 1rem;margin-top:0.8rem;">
                    <div style="color:#ff789f;font-size:0.72rem;font-weight:700;margin-bottom:0.3rem;">⚠️ CASCADE é irreversível</div>
                    <div style="color:#d9b4c2;font-size:0.78rem;line-height:1.4;">Remove tabelas, views, índices e todos os objetos do schema do usuário. Não há como desfazer sem backup.</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 5: TIPOS DE PRIVILÉGIOS -->
<div class="slide slide-5" data-slide="5">
    <div class="gradient-mesh">
        <div class="blob" style="width:400px;height:400px;top:-100px;right:-80px;background:#d76ba3;opacity:0.09;"></div>
        <div class="blob" style="width:250px;height:250px;bottom:-60px;left:-40px;background:#ff5c9a;opacity:0.07;"></div>
    </div>
    <canvas class="particle-canvas-ambient" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#d76ba3;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">02 — Privilégios</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.6rem,3vw,2.3rem);font-weight:800;margin-bottom:1.2rem;">Tipos de Privilégios</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">
            <div class="reveal">
                <div style="background:rgba(215,107,163,0.07);border:1px solid rgba(215,107,163,0.15);border-left:3px solid #d76ba3;border-radius:10px;padding:1.1rem 1.3rem;">
                    <div style="color:#d76ba3;font-weight:700;font-size:0.95rem;margin-bottom:0.6rem;">🌐 Privilégios de Sistema</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.6;">
                        Controlam <strong style="color:#ffe8f2;">operações no banco inteiro</strong>.<br><br>
                        <span class="tag-pill" style="background:rgba(215,107,163,0.1);color:#d76ba3;">Todo o sistema</span> <span style="color:#a98895;font-size:0.75rem;margin-left:4px;">CREATE TABLESPACE, CREATE SESSION</span><br><br>
                        <span class="tag-pill" style="background:rgba(215,107,163,0.1);color:#d76ba3;">Qualquer schema</span> <span style="color:#a98895;font-size:0.75rem;margin-left:4px;">CREATE ANY TABLE</span><br><br>
                        <span class="tag-pill" style="background:rgba(215,107,163,0.1);color:#d76ba3;">Próprio schema</span> <span style="color:#a98895;font-size:0.75rem;margin-left:4px;">CREATE TABLE</span>
                    </div>
                </div>
            </div>
            <div class="reveal">
                <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.15);border-left:3px solid #56c7b2;border-radius:10px;padding:1.1rem 1.3rem;">
                    <div style="color:#56c7b2;font-weight:700;font-size:0.95rem;margin-bottom:0.6rem;">📋 Privilégios de Objetos</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">Controlam ações sobre <strong style="color:#ffe8f2;">objetos específicos</strong>.</div>
                    <table style="width:100%;margin-top:0.7rem;font-size:0.72rem;border-collapse:collapse;">
                        <tr style="color:#ff5c9a;">
                            <th style="text-align:left;padding:0.2rem 0.4rem;font-family:'JetBrains Mono',monospace;">Privilégio</th>
                            <th style="text-align:center;padding:0.2rem;">Tab</th>
                            <th style="text-align:center;padding:0.2rem;">View</th>
                            <th style="text-align:center;padding:0.2rem;">Seq</th>
                            <th style="text-align:center;padding:0.2rem;">Proc</th>
                        </tr>
                        <tr style="color:#d9b4c2;border-top:1px solid rgba(255,255,255,0.06);">
                            <td style="padding:0.2rem 0.4rem;font-family:'JetBrains Mono',monospace;color:#ffb3cf;">SELECT</td>
                            <td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#7f5b67;">—</td>
                        </tr>
                        <tr style="color:#d9b4c2;border-top:1px solid rgba(255,255,255,0.06);">
                            <td style="padding:0.2rem 0.4rem;font-family:'JetBrains Mono',monospace;color:#ffb3cf;">INSERT/UPDATE/DELETE</td>
                            <td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#7f5b67;">—</td><td style="text-align:center;color:#7f5b67;">—</td>
                        </tr>
                        <tr style="color:#d9b4c2;border-top:1px solid rgba(255,255,255,0.06);">
                            <td style="padding:0.2rem 0.4rem;font-family:'JetBrains Mono',monospace;color:#ffb3cf;">EXECUTE</td>
                            <td style="text-align:center;color:#7f5b67;">—</td><td style="text-align:center;color:#7f5b67;">—</td><td style="text-align:center;color:#7f5b67;">—</td><td style="text-align:center;color:#56c7b2;">✓</td>
                        </tr>
                        <tr style="color:#d9b4c2;border-top:1px solid rgba(255,255,255,0.06);">
                            <td style="padding:0.2rem 0.4rem;font-family:'JetBrains Mono',monospace;color:#ffb3cf;">ALTER / INDEX</td>
                            <td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#56c7b2;">✓</td><td style="text-align:center;color:#7f5b67;">—</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 6: GRANT -->
<div class="slide slide-6" data-slide="6">
    <div class="gradient-mesh">
        <div class="blob" style="width:380px;height:380px;top:-90px;right:-70px;background:#56c7b2;opacity:0.07;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-30px;background:#d76ba3;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#56c7b2;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">02 — Privilégios</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:1.2rem;">GRANT — Concedendo Privilégios</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#d76ba3;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">De Sistema</p>
                <div class="code-block reveal">
<span class="cmt">-- Sintaxe</span><br>
<span class="kw">GRANT</span> system_privilege<br>
&nbsp;&nbsp;<span class="kw">TO</span> user | role | <span class="val">PUBLIC</span><br>
&nbsp;&nbsp;[<span class="kw">WITH ADMIN OPTION</span>];<br>
<br>
<span class="cmt">-- Exemplos</span><br>
<span class="kw">GRANT</span> <span class="val">CREATE SESSION</span> <span class="kw">TO</span> joao;<br>
<span class="kw">GRANT</span> <span class="val">CREATE TABLE</span> <span class="kw">TO</span> maria<br>
&nbsp;&nbsp;<span class="kw">WITH ADMIN OPTION</span>;<br>
<span class="kw">GRANT</span> <span class="val">CREATE SESSION</span> <span class="kw">TO PUBLIC</span>;
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#56c7b2;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">De Objetos</p>
                <div class="code-block reveal">
<span class="cmt">-- Sintaxe</span><br>
<span class="kw">GRANT</span> object_privilege [(colunas)]<br>
&nbsp;&nbsp;| <span class="val">ALL</span> [PRIVILEGES]<br>
&nbsp;&nbsp;<span class="kw">ON</span> objeto<br>
&nbsp;&nbsp;<span class="kw">TO</span> user | role | <span class="val">PUBLIC</span><br>
&nbsp;&nbsp;[<span class="kw">WITH GRANT OPTION</span>];<br>
<br>
<span class="cmt">-- Exemplos reais</span><br>
<span class="kw">GRANT</span> <span class="val">SELECT, INSERT, UPDATE, DELETE</span><br>
&nbsp;&nbsp;<span class="kw">ON</span> TAB_VEICULOS <span class="kw">TO</span> RO_FROTA;<br>
<span class="kw">GRANT</span> <span class="val">EXECUTE</span> <span class="kw">ON</span> PC_ESCALA <span class="kw">TO</span> RO_ESCALA;<br>
<span class="kw">GRANT</span> <span class="val">UPDATE</span> (STA_CONTRATO)<br>
&nbsp;&nbsp;<span class="kw">ON</span> TAB_CONTRATO <span class="kw">TO</span> RO_SUPERVISOR;<br>
<span class="kw">GRANT</span> <span class="val">ALL ON</span> TAB_CONVERSAO <span class="kw">TO</span> joao<br>
&nbsp;&nbsp;<span class="kw">WITH GRANT OPTION</span>;
                </div>
            </div>
        </div>
        <div class="reveal" style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:0.8rem;">
            <div style="background:rgba(215,107,163,0.07);border:1px solid rgba(215,107,163,0.15);border-radius:8px;padding:0.7rem 1rem;font-size:0.78rem;">
                <strong style="color:#d76ba3;">WITH ADMIN OPTION</strong> <span style="color:#d9b4c2;">(sistema) → permite ao recebedor conceder, revogar e até <em>eliminar</em> o privilégio para outros.</span>
            </div>
            <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.15);border-radius:8px;padding:0.7rem 1rem;font-size:0.78rem;">
                <strong style="color:#56c7b2;">WITH GRANT OPTION</strong> <span style="color:#d9b4c2;">(objetos) → permite ao recebedor conceder o privilégio a outros usuários.</span>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 7: REVOKE -->
<div class="slide slide-7" data-slide="7">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-80px;left:-60px;background:#ff789f;opacity:0.07;"></div>
        <div class="blob" style="width:200px;height:200px;bottom:-40px;right:-30px;background:#d76ba3;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#ff789f;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">02 — Privilégios</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:1.2rem;">REVOKE — Revogando Privilégios</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#d76ba3;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">De Sistema</p>
                <div class="code-block reveal">
<span class="kw">REVOKE</span> system_privilege<br>
&nbsp;&nbsp;<span class="kw">FROM</span> user | role | <span class="val">PUBLIC</span>;<br>
<br>
<span class="cmt">-- Qualquer admin com ADMIN OPTION</span><br>
<span class="cmt">-- pode revogar de qualquer usuário,</span><br>
<span class="cmt">-- mesmo sem ter concedido antes</span>
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#ff789f;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">De Objetos</p>
                <div class="code-block reveal">
<span class="kw">REVOKE</span> object_privilege | <span class="val">ALL</span> [PRIVILEGES]<br>
&nbsp;&nbsp;<span class="kw">ON</span> objeto<br>
&nbsp;&nbsp;<span class="kw">FROM</span> user | role | <span class="val">PUBLIC</span><br>
&nbsp;&nbsp;[<span class="kw">CASCADE CONSTRAINTS</span>];<br>
<br>
<span class="cmt">-- CASCADE CONSTRAINTS remove restrições</span><br>
<span class="cmt">-- de integridade referencial criadas</span><br>
<span class="cmt">-- pelo revogado via REFERENCES ou ALL</span>
                </div>
            </div>
        </div>
        <div class="reveal" style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:0.9rem;">
            <div style="background:rgba(255,120,159,0.07);border:1px solid rgba(255,120,159,0.15);border-radius:8px;padding:0.7rem 1rem;font-size:0.79rem;">
                <strong style="color:#ff789f;">Sistema:</strong> <span style="color:#d9b4c2;">Quem tem ADMIN OPTION pode revogar de <em>qualquer</em> usuário.</span>
            </div>
            <div style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.15);border-radius:8px;padding:0.7rem 1rem;font-size:0.79rem;">
                <strong style="color:#d6a84f;">Objetos:</strong> <span style="color:#d9b4c2;">Somente <em>quem concedeu</em> o privilégio pode revogá-lo.</span>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 8: ROLES -->
<div class="slide slide-8" data-slide="8">
    <div class="gradient-mesh">
        <div class="blob" style="width:420px;height:420px;top:-100px;right:-80px;background:#56c7b2;opacity:0.08;"></div>
        <div class="blob" style="width:230px;height:230px;bottom:-50px;left:-30px;background:#ff5c9a;opacity:0.07;"></div>
    </div>
    <canvas class="particle-canvas-ambient" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#56c7b2;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">03 — Roles</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:0.8rem;">CREATE ROLE & Gerenciamento</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#56c7b2;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">Criar e Alterar</p>
                <div class="code-block reveal">
<span class="cmt">-- Role sem senha</span><br>
<span class="kw">CREATE ROLE</span> ro_vendedor<br>
&nbsp;&nbsp;<span class="kw">NOT IDENTIFIED</span>;<br>
<br>
<span class="cmt">-- Role com senha (mais segura)</span><br>
<span class="kw">CREATE ROLE</span> ro_supervisor<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">segredo</span>;<br>
<br>
<span class="cmt">-- Alterar autenticação da role</span><br>
<span class="kw">ALTER ROLE</span> ro_supervisor<br>
&nbsp;&nbsp;<span class="kw">NOT IDENTIFIED</span>;<br>
<br>
<span class="cmt">-- Eliminar role (revoga de todos)</span><br>
<span class="kw">DROP ROLE</span> ro_vendedor;
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#ff5c9a;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">Conceder e Revogar Roles</p>
                <div class="code-block reveal">
<span class="cmt">-- Conceder role a usuário</span><br>
<span class="kw">GRANT</span> ro_vendedor <span class="kw">TO</span> joao;<br>
<span class="kw">GRANT</span> ro_supervisor <span class="kw">TO</span> maria<br>
&nbsp;&nbsp;<span class="kw">WITH ADMIN OPTION</span>;<br>
<br>
<span class="cmt">-- Atribuir privilégios à role</span><br>
<span class="kw">GRANT</span> <span class="val">SELECT</span> <span class="kw">ON</span> TAB_CLIENTE<br>
&nbsp;&nbsp;<span class="kw">TO</span> ro_vendedor;<br>
<br>
<span class="cmt">-- Revogar role do usuário</span><br>
<span class="kw">REVOKE</span> ro_vendedor <span class="kw">FROM</span> joao;
                </div>
                <div class="reveal" style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.12);border-radius:8px;padding:0.7rem 1rem;margin-top:0.7rem;font-size:0.78rem;">
                    <strong style="color:#56c7b2;">WITH ADMIN OPTION</strong> <span style="color:#d9b4c2;">em roles permite ao recebedor também conceder, revogar, alterar ou eliminar a role.</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 9: SET ROLE / ALTER USER DEFAULT ROLE -->
<div class="slide slide-9" data-slide="9">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-80px;right:-60px;background:#d6a84f;opacity:0.07;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-30px;background:#56c7b2;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#d6a84f;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">03 — Roles</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:1.2rem;">Ativação e Desativação de Roles</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#d6a84f;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">ALTER USER — Roles padrão no logon</p>
                <div class="code-block reveal">
<span class="cmt">-- Nenhuma role ativa ao conectar</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">DEFAULT ROLE NONE</span>;<br>
<br>
<span class="cmt">-- Ativar somente uma role</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">DEFAULT ROLE</span> ro_gerente;<br>
<br>
<span class="cmt">-- Todas exceto uma</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">DEFAULT ROLE ALL EXCEPT</span> ro_supervisor;<br>
<br>
<span class="cmt">-- Restaurar todas</span><br>
<span class="kw">ALTER USER</span> joao <span class="kw">DEFAULT ROLE ALL</span>;
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#ff5c9a;font-size:0.78rem;font-weight:600;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">SET ROLE — Durante a sessão</p>
                <div class="code-block reveal">
<span class="cmt">-- Desativar todas as roles agora</span><br>
<span class="kw">SET ROLE NONE</span>;<br>
<br>
<span class="cmt">-- Ativar role com senha</span><br>
<span class="kw">SET ROLE</span> ro_gerente<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">teste</span>;<br>
<br>
<span class="cmt">-- Ativar todas as roles concedidas</span><br>
<span class="kw">SET ROLE ALL</span>;<br>
<span class="cmt">-- (só funciona se nenhuma tem senha)</span><br>
<br>
<span class="cmt">-- Todas exceto uma</span><br>
<span class="kw">SET ROLE ALL EXCEPT</span> ro_supervisor;
                </div>
                <div class="reveal" style="background:rgba(255,92,154,0.07);border:1px solid rgba(255,92,154,0.12);border-radius:8px;padding:0.7rem 1rem;margin-top:0.7rem;font-size:0.78rem;">
                    <strong style="color:#ff5c9a;">Dica:</strong> <span style="color:#d9b4c2;">DBMS_SESSION.SET_ROLE também pode ativar/desativar roles via PL/SQL dentro de procedures.</span>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 10: VIEWS DE CONSULTA / CONSIDERAÇÕES FINAIS -->
<div class="slide slide-10" data-slide="10">
    <div class="gradient-mesh">
        <div class="blob" style="width:460px;height:460px;top:-110px;right:-90px;background:#ff5c9a;opacity:0.1;"></div>
        <div class="blob" style="width:300px;height:300px;bottom:-70px;left:-50px;background:#d76ba3;opacity:0.08;"></div>
        <div class="blob" style="width:180px;height:180px;top:40%;left:15%;background:#56c7b2;opacity:0.06;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">04 — Referência</p>
        <h2 class="reveal font-display" style="font-size:clamp(1.6rem,3vw,2.3rem);font-weight:800;margin-bottom:1rem;">Views de Consulta & Resumo</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.8rem;" class="reveal">
            <div style="background:rgba(255,92,154,0.07);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <div style="color:#ff5c9a;font-weight:700;font-size:0.82rem;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">👤 Usuários</div>
                <div style="display:flex;flex-direction:column;gap:0.3rem;">
                    <code style="color:#ffb3cf;font-size:0.75rem;background:rgba(255,92,154,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_USERS</code>
                    <code style="color:#ffb3cf;font-size:0.75rem;background:rgba(255,92,154,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_TS_QUOTAS</code>
                </div>
            </div>
            <div style="background:rgba(215,107,163,0.07);border:1px solid rgba(215,107,163,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <div style="color:#d76ba3;font-weight:700;font-size:0.82rem;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🔑 Privilégios</div>
                <div style="display:flex;flex-direction:column;gap:0.3rem;">
                    <code style="color:#a5b4fc;font-size:0.75rem;background:rgba(215,107,163,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_SYS_PRIVS</code>
                    <code style="color:#a5b4fc;font-size:0.75rem;background:rgba(215,107,163,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_TAB_PRIVS</code>
                    <code style="color:#a5b4fc;font-size:0.75rem;background:rgba(215,107,163,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_COL_PRIVS</code>
                    <code style="color:#a5b4fc;font-size:0.75rem;background:rgba(215,107,163,0.08);padding:0.2rem 0.5rem;border-radius:4px;">SESSION_PRIVS</code>
                </div>
            </div>
            <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <div style="color:#56c7b2;font-weight:700;font-size:0.82rem;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🎭 Roles</div>
                <div style="display:flex;flex-direction:column;gap:0.3rem;">
                    <code style="color:#6ee7b7;font-size:0.75rem;background:rgba(86,199,178,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_ROLES</code>
                    <code style="color:#6ee7b7;font-size:0.75rem;background:rgba(86,199,178,0.08);padding:0.2rem 0.5rem;border-radius:4px;">DBA_ROLE_PRIVS</code>
                    <code style="color:#6ee7b7;font-size:0.75rem;background:rgba(86,199,178,0.08);padding:0.2rem 0.5rem;border-radius:4px;">ROLE_SYS_PRIVS</code>
                    <code style="color:#6ee7b7;font-size:0.75rem;background:rgba(86,199,178,0.08);padding:0.2rem 0.5rem;border-radius:4px;">SESSION_ROLES</code>
                </div>
            </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.7rem;margin-top:0.8rem;" class="reveal">
            <div style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.12);border-left:3px solid #d6a84f;border-radius:8px;padding:0.7rem 1rem;font-size:0.78rem;">
                <strong style="color:#d6a84f;">Roles predefinidas:</strong> <span style="color:#d9b4c2;">CONNECT, RESOURCE e DBA — já existem no Oracle por padrão.</span>
            </div>
            <div style="background:rgba(255,120,159,0.07);border:1px solid rgba(255,120,159,0.12);border-left:3px solid #ff789f;border-radius:8px;padding:0.7rem 1rem;font-size:0.78rem;">
                <strong style="color:#ff789f;">SYSDBA / SYSOPER:</strong> <span style="color:#d9b4c2;">Privilégios especiais para startup, shutdown, backup e recovery do banco.</span>
            </div>
        </div>
    </div>
</div>

</div>

<div class="nav-controls">
    <button class="nav-btn" onclick="changeSlide(-1)">&#8249;</button>
    <div class="slide-dots" id="dots"></div>
    <button class="nav-btn" onclick="changeSlide(1)">&#8250;</button>
    <span class="slide-counter" id="counter">1 / 10</span>
</div>

<script>
    let current = 1;
    const total = document.querySelectorAll('.slide').length;
    const dotsContainer = document.getElementById('dots');
    const counter = document.getElementById('counter');
    for (let i = 1; i <= total; i++) { const dot = document.createElement('div'); dot.className = 'dot' + (i === 1 ? ' active' : ''); dot.onclick = () => goToSlide(i); dotsContainer.appendChild(dot); }
    function goToSlide(n) {
        const prev = document.querySelector('.slide.active');
        const next = document.querySelector(\`.slide[data-slide="\${n}"]\`);
        if (prev) prev.classList.remove('active');
        if (next) { next.classList.add('active'); animateSlide(next); }
        current = n; updateNav();
    }
    function changeSlide(dir) { let next = current + dir; if (next < 1) next = total; if (next > total) next = 1; goToSlide(next); }
    function updateNav() { document.querySelectorAll('.dot').forEach((d, i) => { d.classList.toggle('active', i + 1 === current); }); counter.textContent = current + ' / ' + total; }
    document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); } });
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    document.addEventListener('touchend', (e) => { const diff = touchStartX - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 1 : -1); });
    function animateSlide(slide) {
        slide.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
            el.offsetHeight;
            const delay = i * 0.07;
            el.style.transition = \`opacity 0.35s ease \${delay}s, transform 0.35s ease \${delay}s\`;
            el.style.opacity = '1'; el.style.transform = 'translateY(0px)';
        });
    }
    document.addEventListener('mousemove', (e) => {
        const spotlight = document.querySelector('.mouse-spotlight');
        if (spotlight) spotlight.style.background = \`radial-gradient(600px circle at \${e.clientX}px \${e.clientY}px, rgba(255,92,154,0.05), transparent 40%)\`;
    });
    window.initParticles = function(canvas, options) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
        const interactive = options.interactive !== false;
        const count = options.count || (interactive ? 55 : 18);
        let mx = -1000, my = -1000;
        const particles = Array.from({ length: count }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2.5 + 0.8, alpha: Math.random() * 0.3 + 0.08 }));
        if (interactive) { canvas.addEventListener('mousemove', (e) => { const rect = canvas.getBoundingClientRect(); mx = e.clientX - rect.left; my = e.clientY - rect.top; }); canvas.addEventListener('mouseleave', () => { mx = -1000; my = -1000; }); }
        (function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                if (interactive) { const dx = p.x - mx, dy = p.y - my, dist = Math.sqrt(dx * dx + dy * dy); if (dist < 120) { const force = (120 - dist) / 120 * 2; p.vx += (dx / dist) * force * 0.1; p.vy += (dy / dist) * force * 0.1; } }
                p.vx *= 0.98; p.vy *= 0.98; p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = \`rgba(255,92,154,\${p.alpha})\`; ctx.fill();
            });
            requestAnimationFrame(animate);
        })();
    };
    document.querySelectorAll('.particle-canvas').forEach(c => window.initParticles(c, { interactive: true, count: 55 }));
    document.querySelectorAll('.particle-canvas-ambient').forEach(c => window.initParticles(c, { interactive: false, count: 18 }));
    try { animateSlide(document.querySelector('.slide.active')); } catch(e) {}
<\/script>
</body>
</html>
`,Pc=`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="slides-format" content="viewport">
    <title>Segurança em BD — Senhas e Recursos (PROFILE)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"><\/script>
    <style type="text/tailwindcss">
        @theme {
            --color-bg: #160b13;
            --color-bg-deep: #080407;
            --color-surface: #2a1320;
            --color-text: #ffe8f2;
            --color-text-secondary: #d9b4c2;
            --color-text-muted: #a98895;
            --color-accent-1: #e08ab6;
            --color-accent-2: #f472b6;
            --color-accent-3: #ff5c9a;
            --color-glass-bg: rgba(255,255,255,0.05);
            --color-glass-border: rgba(255,255,255,0.08);
            --color-vignette: rgba(0,0,0,0.45);
            --font-display: 'JetBrains Mono', monospace;
            --font-body: 'Inter', sans-serif;
        }
    </style>
    <style>
        :root { --color-bg: #160b13; --color-text: #ffe8f2; --glow-color-rgb: 224,138,182; }
        *, *::before, *::after { box-sizing: border-box; }
        html, body { background: var(--color-bg); margin: 0; }
        body { font-family: 'Inter', sans-serif; color: var(--color-text); overflow: hidden; height: 100vh; width: 100vw; }
        .deck { width: 100vw; height: 100vh; position: relative; }
        .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: var(--color-bg); display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; transform: scale(0.95); transition: opacity 0.7s ease, transform 0.7s ease; pointer-events: none; overflow: hidden; }
        .slide.active { opacity: 1; transform: scale(1); pointer-events: all; }
        .slide > .content { position: relative; z-index: 2; width: 100%; max-width: 1100px; padding: clamp(1.5rem, 4vw, 3.5rem); }
        .nav-controls { position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%); display: flex; align-items: center; gap: 16px; z-index: 100; background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 10px 24px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.08); }
        .nav-btn { width: 38px; height: 38px; border: none; background: rgba(255,255,255,0.06); color: #e08ab6; border-radius: 50%; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
        .nav-btn:hover { background: rgba(224,138,182,0.18); }
        .slide-dots { display: flex; gap: 8px; }
        .slide-dots .dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); cursor: pointer; transition: background 0.3s, transform 0.3s; }
        .slide-dots .dot.active { background: #e08ab6; transform: scale(1.3); }
        .slide-counter { font-size: 0.75rem; color: #a98895; min-width: 40px; text-align: center; font-family: 'JetBrains Mono', monospace; }
        .reveal { opacity: 0; transform: translateY(20px); }
        @keyframes glow-pulse { 0%, 100% { text-shadow: 0 0 20px rgba(224,138,182,0.5), 0 0 40px rgba(224,138,182,0.2); } 50% { text-shadow: 0 0 30px rgba(224,138,182,0.8), 0 0 60px rgba(224,138,182,0.3); } }
        .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
        @keyframes float-slow { 0% { transform: translate(0,0) scale(1); } 25% { transform: translate(60px,-50px) scale(1.12); } 50% { transform: translate(-40px,40px) scale(0.9); } 75% { transform: translate(50px,20px) scale(1.08); } 100% { transform: translate(0,0) scale(1); } }
        @keyframes float-drift { 0% { transform: translate(0,0) scale(1) rotate(0deg); } 33% { transform: translate(-50px,-60px) scale(1.15) rotate(3deg); } 66% { transform: translate(40px,30px) scale(0.88) rotate(-2deg); } 100% { transform: translate(0,0) scale(1) rotate(0deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        .gradient-mesh { position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none; }
        .blob { position: absolute; border-radius: 50%; filter: blur(80px); animation: float-slow 10s ease-in-out infinite; }
        .blob:nth-child(2) { animation: float-drift 14s ease-in-out infinite; }
        .blob:nth-child(3) { animation: float-slow 18s ease-in-out infinite reverse; }
        .slide::before { content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); background-repeat: repeat; background-size: 256px 256px; opacity: 0.03; mix-blend-mode: overlay; }
        .slide::after { content: ''; position: absolute; inset: 0; z-index: 1; pointer-events: none; background: radial-gradient(ellipse at center, transparent 50%, var(--color-vignette) 100%); }
        .code-block { background: rgba(224,138,182,0.06); border: 1px solid rgba(224,138,182,0.15); border-left: 3px solid #e08ab6; border-radius: 8px; padding: 0.8rem 1.2rem; font-size: clamp(0.68rem, 1.1vw, 0.82rem); color: #f0b6cf; line-height: 1.8; font-family: 'JetBrains Mono', monospace; }
        .code-block .kw { color: #f472b6; font-weight: 700; }
        .code-block .val { color: #56c7b2; }
        .code-block .cmt { color: #7f5b67; font-style: italic; }
        .code-block .num { color: #d6a84f; }
        .tag-pill { display: inline-block; padding: 0.15rem 0.6rem; border-radius: 999px; font-size: 0.7rem; font-weight: 600; font-family: 'JetBrains Mono', monospace; letter-spacing: 0.04em; }
        .card-hover { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card-hover:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(224,138,182,0.12); }
        @media (max-width: 760px), (max-height: 620px) {
            html, body { height: 100dvh; overflow: hidden; }
            body { width: 100%; }
            .deck { width: 100%; height: 100dvh; }
            .slide { justify-content: flex-start !important; overflow-x: hidden !important; overflow-y: auto !important; padding: 1rem 0 6rem; }
            .slide > .content { max-width: 100%; padding: 1.1rem !important; }
            .slide [style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
            .slide [style*="display:grid"] { gap: 0.75rem !important; }
            .slide [style*="display:flex"] { flex-wrap: wrap !important; }
            .slide [style*="font-size:100px"], .slide [style*="font-size:90px"], .slide [style*="font-size:96px"] { font-size: clamp(3rem, 18vw, 4.5rem) !important; }
            h1, h2, p, div, span { overflow-wrap: anywhere; }
            code, .code-block { max-width: 100%; overflow-wrap: anywhere; white-space: normal; }
            .code-block { overflow-x: auto; font-size: 0.68rem !important; }
            table { display: block; max-width: 100%; overflow-x: auto; white-space: nowrap; }
            .nav-controls { bottom: max(0.75rem, env(safe-area-inset-bottom)); width: calc(100% - 1.5rem); max-width: 28rem; justify-content: center; gap: 0.5rem; padding: 0.5rem 0.65rem; }
            .nav-btn { width: 2rem; height: 2rem; flex: 0 0 2rem; }
            .slide-dots { max-width: 45vw; overflow-x: auto; padding: 0.2rem; }
            .blob { transform: scale(0.72); filter: blur(56px); }
            canvas { pointer-events: none; }
        }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.2s !important; } }
    </style>
</head>
<body>
<div class="mouse-spotlight" style="position:fixed;inset:0;z-index:99;pointer-events:none;"></div>
<div class="deck">

<!-- SLIDE 1: TITLE -->
<div class="slide slide-1 active" data-slide="1">
    <div class="gradient-mesh">
        <div class="blob" style="width:500px;height:500px;top:-120px;right:-100px;background:#e08ab6;opacity:0.13;"></div>
        <div class="blob" style="width:350px;height:350px;bottom:-80px;left:-60px;background:#f472b6;opacity:0.1;"></div>
        <div class="blob" style="width:220px;height:220px;top:45%;left:20%;background:#ff5c9a;opacity:0.07;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content text-center">
        <div style="font-size:90px;margin-bottom:1rem;animation:float 3s ease-in-out infinite;" class="reveal">🛡️</div>
        <h1 class="reveal glow-pulse" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.8rem,4.5vw,3.5rem);font-weight:900;background:linear-gradient(135deg,#e08ab6,#f472b6,#ff5c9a);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-0.02em;margin-bottom:0.8rem;">Segurança em Banco de Dados</h1>
        <p class="reveal" style="font-size:clamp(0.8rem,1.4vw,1rem);color:#a98895;letter-spacing:0.3em;text-transform:uppercase;">Perfis de Senha e Recursos — Oracle SQL</p>
        <div class="reveal" style="margin-top:2rem;display:flex;justify-content:center;gap:0.8rem;flex-wrap:wrap;">
            <span class="tag-pill" style="background:rgba(224,138,182,0.12);color:#e08ab6;border:1px solid rgba(224,138,182,0.2);">CREATE PROFILE</span>
            <span class="tag-pill" style="background:rgba(244,114,182,0.12);color:#f472b6;border:1px solid rgba(244,114,182,0.2);">ALTER PROFILE</span>
            <span class="tag-pill" style="background:rgba(255,92,154,0.12);color:#ff5c9a;border:1px solid rgba(255,92,154,0.2);">DROP PROFILE</span>
            <span class="tag-pill" style="background:rgba(214,168,79,0.12);color:#d6a84f;border:1px solid rgba(214,168,79,0.2);">ALTER SYSTEM</span>
        </div>
    </div>
</div>

<!-- SLIDE 2: AGENDA -->
<div class="slide slide-2" data-slide="2">
    <div class="gradient-mesh">
        <div class="blob" style="width:350px;height:350px;top:-80px;right:-60px;background:#e08ab6;opacity:0.07;"></div>
        <div class="blob" style="width:250px;height:250px;bottom:-50px;left:-40px;background:#f472b6;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#e08ab6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.5rem;">Conteúdo</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.7rem,3.2vw,2.4rem);font-weight:800;margin-bottom:1.8rem;">O que vamos aprender?</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;" class="reveal">
            <div class="card-hover" style="background:rgba(224,138,182,0.06);border:1px solid rgba(224,138,182,0.12);border-left:3px solid #e08ab6;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">🔐</div>
                <div style="color:#e08ab6;font-weight:700;font-size:0.95rem;margin-bottom:0.4rem;">01 — O que é PROFILE?</div>
                <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">Regras e limites por usuário · DEFAULT profile · Sessões atuais não afetadas</div>
            </div>
            <div class="card-hover" style="background:rgba(244,114,182,0.06);border:1px solid rgba(244,114,182,0.12);border-left:3px solid #f472b6;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">🔑</div>
                <div style="color:#f472b6;font-weight:700;font-size:0.95rem;margin-bottom:0.4rem;">02 — Segurança de Senhas</div>
                <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">FAILED_LOGIN_ATTEMPTS · PASSWORD_LOCK_TIME · LIFE_TIME · GRACE_TIME · REUSE · VERIFY_FUNCTION</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-left:3px solid #ff5c9a;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">⚙️</div>
                <div style="color:#ff5c9a;font-weight:700;font-size:0.95rem;margin-bottom:0.4rem;">03 — Limites de Recursos</div>
                <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">Nível de Sessão e Chamada · CPU · I/O · IDLE_TIME · COMPOSITE_LIMIT · RESOURCE_LIMIT</div>
            </div>
            <div class="card-hover" style="background:rgba(214,168,79,0.06);border:1px solid rgba(214,168,79,0.12);border-left:3px solid #d6a84f;border-radius:10px;padding:1.2rem 1.5rem;">
                <div style="font-size:1.8rem;margin-bottom:0.5rem;">🛠️</div>
                <div style="color:#d6a84f;font-weight:700;font-size:0.95rem;margin-bottom:0.4rem;">04 — Criar, Alterar e Remover</div>
                <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">CREATE · ALTER · DROP PROFILE · CASCADE · Views DBA_PROFILES · DBA_USERS</div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 3: O QUE É PROFILE -->
<div class="slide slide-3" data-slide="3">
    <div class="gradient-mesh">
        <div class="blob" style="width:400px;height:400px;top:-100px;right:-70px;background:#e08ab6;opacity:0.08;"></div>
        <div class="blob" style="width:200px;height:200px;bottom:-40px;left:-30px;background:#ff5c9a;opacity:0.06;"></div>
    </div>
    <canvas class="particle-canvas-ambient" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#e08ab6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">01 — PROFILE</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.5rem,2.8vw,2.2rem);font-weight:800;margin-bottom:1.2rem;">O que é um Perfil (PROFILE)?</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">
            <div style="display:flex;flex-direction:column;gap:0.7rem;" class="reveal">
                <div style="background:rgba(224,138,182,0.07);border:1px solid rgba(224,138,182,0.13);border-radius:8px;padding:0.85rem 1rem;">
                    <div style="color:#e08ab6;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.3rem;font-family:'JetBrains Mono',monospace;">📦 Definição</div>
                    <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">Conjunto nomeado de <strong style="color:#ffe8f2;">regras e limites</strong> para senha e uso de recursos. Atribuído a usuários na criação ou via <code style="color:#e08ab6;font-size:0.78rem;">ALTER USER</code>.</div>
                </div>
                <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.13);border-radius:8px;padding:0.85rem 1rem;">
                    <div style="color:#56c7b2;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.3rem;font-family:'JetBrains Mono',monospace;">✅ Pode</div>
                    <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">Estar <strong style="color:#ffe8f2;">ativado ou desativado</strong>. Ser atribuído a múltiplos usuários. Ser alterado a qualquer momento.</div>
                </div>
                <div style="background:rgba(255,120,159,0.07);border:1px solid rgba(255,120,159,0.13);border-radius:8px;padding:0.85rem 1rem;">
                    <div style="color:#ff789f;font-size:0.72rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.3rem;font-family:'JetBrains Mono',monospace;">❌ Não pode</div>
                    <div style="color:#d9b4c2;font-size:0.82rem;line-height:1.5;">Ser atribuído a <strong style="color:#ffe8f2;">ROLES ou outros PROFILEs</strong>. Afetar <strong style="color:#ffe8f2;">sessões já ativas</strong> no momento da alteração.</div>
                </div>
            </div>
            <div class="reveal">
                <div style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.13);border-left:3px solid #d6a84f;border-radius:10px;padding:1rem 1.2rem;margin-bottom:0.8rem;">
                    <div style="color:#d6a84f;font-weight:700;font-size:0.85rem;margin-bottom:0.4rem;">⭐ PROFILE DEFAULT</div>
                    <div style="color:#d9b4c2;font-size:0.8rem;line-height:1.5;">Todo usuário criado sem especificar um profile recebe automaticamente o <strong style="color:#ffe8f2;">DEFAULT</strong>. Ele <strong style="color:#ff789f;">não pode ser eliminado</strong>, mas pode ser alterado.</div>
                </div>
                <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:1rem 1.2rem;">
                    <div style="color:#e08ab6;font-weight:700;font-size:0.85rem;margin-bottom:0.6rem;">📋 Dois grupos de parâmetros</div>
                    <div style="display:flex;flex-direction:column;gap:0.4rem;">
                        <div style="display:flex;align-items:center;gap:0.6rem;"><span style="width:10px;height:10px;border-radius:50%;background:#f472b6;flex-shrink:0;"></span><span style="color:#d9b4c2;font-size:0.8rem;"><strong style="color:#f472b6;">Senhas</strong> — controle de complexidade, bloqueio, expiração e histórico</span></div>
                        <div style="display:flex;align-items:center;gap:0.6rem;"><span style="width:10px;height:10px;border-radius:50%;background:#ff5c9a;flex-shrink:0;"></span><span style="color:#d9b4c2;font-size:0.8rem;"><strong style="color:#ff5c9a;">Recursos</strong> — CPU, I/O, sessões simultâneas, tempo de inatividade</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 4: SENHAS — BLOQUEIO E EXPIRAÇÃO -->
<div class="slide slide-4" data-slide="4">
    <div class="gradient-mesh">
        <div class="blob" style="width:380px;height:380px;top:-90px;right:-70px;background:#f472b6;opacity:0.08;"></div>
        <div class="blob" style="width:210px;height:210px;bottom:-50px;left:-30px;background:#e08ab6;opacity:0.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#f472b6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">02 — Senhas</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.6vw,2rem);font-weight:800;margin-bottom:1.1rem;">Bloqueio de Conta &amp; Expiração</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#f472b6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🔒 Bloqueio de Conta</p>
                <div style="display:flex;flex-direction:column;gap:0.6rem;" class="reveal">
                    <div style="background:rgba(244,114,182,0.07);border:1px solid rgba(244,114,182,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#f472b6;font-size:0.8rem;font-weight:700;">FAILED_LOGIN_ATTEMPTS</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Número de tentativas de login <strong style="color:#ffe8f2;">malsucedidas</strong> antes de bloquear a conta. Ex: <code style="color:#d6a84f;">3</code> tentativas.</div>
                    </div>
                    <div style="background:rgba(244,114,182,0.07);border:1px solid rgba(244,114,182,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#f472b6;font-size:0.8rem;font-weight:700;">PASSWORD_LOCK_TIME</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Quantos <strong style="color:#ffe8f2;">dias</strong> a conta fica bloqueada após exceder as tentativas. Use <code style="color:#d6a84f;">1/1440</code> para 1 minuto.</div>
                    </div>
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#e08ab6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">⏰ Expiração e Vencimento</p>
                <div style="display:flex;flex-direction:column;gap:0.6rem;" class="reveal">
                    <div style="background:rgba(224,138,182,0.07);border:1px solid rgba(224,138,182,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#e08ab6;font-size:0.8rem;font-weight:700;">PASSWORD_LIFE_TIME</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Duração da senha em <strong style="color:#ffe8f2;">dias</strong>. Após esse período a senha expira. Ex: <code style="color:#d6a84f;">30</code> dias.</div>
                    </div>
                    <div style="background:rgba(224,138,182,0.07);border:1px solid rgba(224,138,182,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#e08ab6;font-size:0.8rem;font-weight:700;">PASSWORD_GRACE_TIME</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Período de tolerância em <strong style="color:#ffe8f2;">dias</strong> para troca após o primeiro login com a senha expirada. Ex: <code style="color:#d6a84f;">5</code> dias.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="reveal" style="background:rgba(255,92,154,0.07);border:1px solid rgba(255,92,154,0.13);border-radius:8px;padding:0.7rem 1.2rem;margin-top:0.8rem;font-size:0.8rem;">
            <strong style="color:#ff5c9a;">⏱️ Frações de dia:</strong> <span style="color:#d9b4c2;">Para períodos menores que 1 dia, use frações. Ex: 1 hora = <code style="color:#d6a84f;">1/24</code> | 5 minutos = <code style="color:#d6a84f;">5/1440</code></span>
        </div>
    </div>
</div>

<!-- SLIDE 5: SENHAS — HISTÓRICO E VERIFICAÇÃO -->
<div class="slide slide-5" data-slide="5">
    <div class="gradient-mesh">
        <div class="blob" style="width:380px;height:380px;top:-90px;left:-60px;background:#e08ab6;opacity:0.08;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;right:-40px;background:#56c7b2;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#f472b6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">02 — Senhas</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.6vw,2rem);font-weight:800;margin-bottom:1.1rem;">Histórico &amp; Verificação de Complexidade</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#56c7b2;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🔁 Histórico de Senha</p>
                <div style="display:flex;flex-direction:column;gap:0.6rem;" class="reveal">
                    <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#56c7b2;font-size:0.8rem;font-weight:700;">PASSWORD_REUSE_TIME</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Número de <strong style="color:#ffe8f2;">dias</strong> que devem passar antes de reutilizar a mesma senha.</div>
                    </div>
                    <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.13);border-radius:8px;padding:0.8rem 1rem;">
                        <code style="color:#56c7b2;font-size:0.8rem;font-weight:700;">PASSWORD_REUSE_MAX</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Número de <strong style="color:#ffe8f2;">vezes</strong> que a senha precisa ser trocada antes de poder reutilizá-la.</div>
                    </div>
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#e08ab6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🔍 Verificação de Complexidade</p>
                <div class="reveal" style="background:rgba(224,138,182,0.07);border:1px solid rgba(224,138,182,0.13);border-radius:8px;padding:0.85rem 1rem;margin-bottom:0.6rem;">
                    <code style="color:#e08ab6;font-size:0.8rem;font-weight:700;">PASSWORD_VERIFY_FUNCTION</code>
                    <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Função PL/SQL que valida a senha. Pode ser a <strong style="color:#ffe8f2;">VERIFY_FUNCTION</strong> do Oracle ou uma criada pelo DBA.</div>
                </div>
                <div class="reveal" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:0.85rem 1rem;">
                    <div style="color:#d6a84f;font-size:0.75rem;font-weight:700;margin-bottom:0.4rem;">Regras da VERIFY_FUNCTION (Oracle):</div>
                    <ul style="color:#d9b4c2;font-size:0.77rem;line-height:1.6;margin:0;padding-left:1.2rem;">
                        <li>Mínimo de <strong style="color:#ffe8f2;">4 caracteres</strong></li>
                        <li>Não pode ser igual ao <strong style="color:#ffe8f2;">nome do usuário</strong></li>
                        <li>Pelo menos <strong style="color:#ffe8f2;">1 letra, 1 número e 1 especial</strong></li>
                        <li>Pelo menos <strong style="color:#ffe8f2;">3 letras diferentes</strong> da senha anterior</li>
                        <li>Criada pelo script <code style="color:#e08ab6;">utlpwdmg.sql</code></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 6: LIMITES DE RECURSOS — SESSÃO -->
<div class="slide slide-6" data-slide="6">
    <div class="gradient-mesh">
        <div class="blob" style="width:400px;height:400px;top:-90px;right:-70px;background:#ff5c9a;opacity:0.08;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-30px;background:#e08ab6;opacity:0.06;"></div>
    </div>
    <canvas class="particle-canvas-ambient" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#ff5c9a;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">03 — Recursos</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.6vw,2rem);font-weight:800;margin-bottom:1.1rem;">Limites de Recursos — Nível de Sessão</h2>
        <p class="reveal" style="color:#d9b4c2;font-size:0.82rem;margin-bottom:0.9rem;">Aplicados <strong style="color:#ff5c9a;">a cada conexão</strong>. Ao exceder, o usuário é <strong style="color:#ff789f;">desconectado</strong> (erro ORA-02391).</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;" class="reveal">
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">SESSIONS_PER_USER</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Número de sessões <strong style="color:#ffe8f2;">simultâneas</strong> permitidas para o usuário.</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">CONNECT_TIME</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Tempo máximo de conexão em <strong style="color:#ffe8f2;">minutos</strong>.</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">IDLE_TIME</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Período máximo de <strong style="color:#ffe8f2;">inatividade</strong> em minutos.</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">CPU_PER_SESSION</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Tempo total de CPU em <strong style="color:#ffe8f2;">centésimos de segundo</strong>.</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">LOGICAL_READS_PER_SESSION</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Número de <strong style="color:#ffe8f2;">blocos</strong> lidos (físicos + lógicos).</div>
            </div>
            <div class="card-hover" style="background:rgba(255,92,154,0.06);border:1px solid rgba(255,92,154,0.12);border-radius:10px;padding:0.9rem 1rem;">
                <code style="color:#ff5c9a;font-size:0.77rem;font-weight:700;display:block;margin-bottom:0.35rem;">PRIVATE_SGA</code>
                <div style="color:#d9b4c2;font-size:0.76rem;line-height:1.4;">Espaço privado na SGA em <strong style="color:#ffe8f2;">bytes</strong> (apenas Shared Server).</div>
            </div>
        </div>
        <div class="reveal" style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.13);border-radius:8px;padding:0.7rem 1.1rem;margin-top:0.8rem;font-size:0.79rem;">
            <strong style="color:#d6a84f;">COMPOSITE_LIMIT:</strong> <span style="color:#d9b4c2;">Limite ponderado que combina CONNECT_TIME + CPU_PER_SESSION + LOGICAL_READS + PRIVATE_SGA em "unidades de serviço". Modificado via <code style="color:#d6a84f;">ALTER RESOURCE_COST</code>.</span>
        </div>
    </div>
</div>

<!-- SLIDE 7: LIMITES — CHAMADA + ATIVAR -->
<div class="slide slide-7" data-slide="7">
    <div class="gradient-mesh">
        <div class="blob" style="width:360px;height:360px;top:-80px;left:-50px;background:#56c7b2;opacity:0.07;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;right:-30px;background:#ff5c9a;opacity:0.06;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#56c7b2;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">03 — Recursos</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.5vw,2rem);font-weight:800;margin-bottom:1.1rem;">Limites por Chamada &amp; Ativação</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#56c7b2;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">⚡ Nível de Chamada (por instrução SQL)</p>
                <div style="display:flex;flex-direction:column;gap:0.6rem;" class="reveal">
                    <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.13);border-left:3px solid #56c7b2;border-radius:8px;padding:0.85rem 1rem;">
                        <code style="color:#56c7b2;font-size:0.8rem;font-weight:700;">CPU_PER_CALL</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Tempo de CPU por instrução em <strong style="color:#ffe8f2;">centésimos de segundo</strong>.</div>
                    </div>
                    <div style="background:rgba(86,199,178,0.07);border:1px solid rgba(86,199,178,0.13);border-left:3px solid #56c7b2;border-radius:8px;padding:0.85rem 1rem;">
                        <code style="color:#56c7b2;font-size:0.8rem;font-weight:700;">LOGICAL_READS_PER_CALL</code>
                        <div style="color:#d9b4c2;font-size:0.78rem;margin-top:0.3rem;line-height:1.4;">Número de blocos lidos por <strong style="color:#ffe8f2;">instrução SQL</strong>.</div>
                    </div>
                    <div style="background:rgba(255,120,159,0.07);border:1px solid rgba(255,120,159,0.13);border-radius:8px;padding:0.8rem 1rem;margin-top:0.2rem;">
                        <div style="color:#ff789f;font-size:0.75rem;font-weight:700;margin-bottom:0.3rem;">⚠️ Ao exceder o limite por chamada:</div>
                        <ul style="color:#d9b4c2;font-size:0.76rem;line-height:1.5;margin:0;padding-left:1.1rem;">
                            <li>A instrução é <strong style="color:#ffe8f2;">interrompida e revertida</strong> (ROLLBACK automático)</li>
                            <li>Instruções anteriores <strong style="color:#ffe8f2;">permanecem intactas</strong></li>
                            <li>O usuário <strong style="color:#ffe8f2;">continua conectado</strong></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <p class="reveal" style="color:#d6a84f;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">🔋 Ativando limites de recursos</p>
                <div class="reveal">
                    <div style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.13);border-radius:8px;padding:0.85rem 1rem;margin-bottom:0.7rem;">
                        <div style="color:#d6a84f;font-size:0.8rem;font-weight:700;margin-bottom:0.3rem;">Parâmetro RESOURCE_LIMIT</div>
                        <div style="color:#d9b4c2;font-size:0.78rem;line-height:1.4;">Os limites de recursos do PROFILE só são <strong style="color:#ffe8f2;">efetivos</strong> se o parâmetro estiver <code style="color:#56c7b2;">TRUE</code>.</div>
                    </div>
                    <div class="code-block">
<span class="cmt">-- Ativar limites de recursos</span><br>
<span class="kw">ALTER SYSTEM SET</span> RESOURCE_LIMIT = <span class="val">TRUE</span>;<br>
<br>
<span class="cmt">-- Desativar limites de recursos</span><br>
<span class="kw">ALTER SYSTEM SET</span> RESOURCE_LIMIT = <span class="val">FALSE</span>;<br>
<br>
<span class="cmt">-- Válido até o banco ser desligado</span>
                    </div>
                    <div style="background:rgba(255,92,154,0.07);border:1px solid rgba(255,92,154,0.12);border-radius:8px;padding:0.7rem 1rem;margin-top:0.6rem;font-size:0.78rem;">
                        <strong style="color:#ff5c9a;">Nota:</strong> <span style="color:#d9b4c2;">Os limites de <strong style="color:#ffe8f2;">senha</strong> estão sempre ativos, independente do RESOURCE_LIMIT.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 8: CREATE / ALTER / DROP PROFILE -->
<div class="slide slide-8" data-slide="8">
    <div class="gradient-mesh">
        <div class="blob" style="width:400px;height:400px;top:-90px;right:-70px;background:#e08ab6;opacity:0.09;"></div>
        <div class="blob" style="width:220px;height:220px;bottom:-50px;left:-30px;background:#f472b6;opacity:0.07;"></div>
    </div>
    <div class="content">
        <p class="reveal" style="color:#e08ab6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">04 — Comandos</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.5vw,2rem);font-weight:800;margin-bottom:1rem;">CREATE, ALTER e DROP PROFILE</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.1rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#e08ab6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.4rem;font-family:'JetBrains Mono',monospace;">CREATE PROFILE — Exemplo completo</p>
                <div class="code-block reveal">
<span class="kw">CREATE PROFILE</span> pro_gerente <span class="kw">LIMIT</span><br>
&nbsp;&nbsp;<span class="cmt">-- Senha</span><br>
&nbsp;&nbsp;FAILED_LOGIN_ATTEMPTS  <span class="num">3</span><br>
&nbsp;&nbsp;PASSWORD_LOCK_TIME     <span class="val">UNLIMITED</span><br>
&nbsp;&nbsp;PASSWORD_LIFE_TIME     <span class="num">30</span>  <span class="cmt">-- dias</span><br>
&nbsp;&nbsp;PASSWORD_GRACE_TIME    <span class="num">5</span>   <span class="cmt">-- dias</span><br>
&nbsp;&nbsp;PASSWORD_REUSE_TIME    <span class="num">30</span>  <span class="cmt">-- dias</span><br>
&nbsp;&nbsp;PASSWORD_VERIFY_FUNCTION <span class="val">DEFAULT</span><br>
&nbsp;&nbsp;<span class="cmt">-- Recursos</span><br>
&nbsp;&nbsp;SESSIONS_PER_USER      <span class="val">UNLIMITED</span><br>
&nbsp;&nbsp;CONNECT_TIME           <span class="num">45</span><br>
&nbsp;&nbsp;CPU_PER_CALL           <span class="num">3000</span><br>
&nbsp;&nbsp;LOGICAL_READS_PER_CALL <span class="num">1000</span><br>
&nbsp;&nbsp;PRIVATE_SGA            <span class="val">15K</span><br>
&nbsp;&nbsp;COMPOSITE_LIMIT        <span class="num">5000000</span>;
                </div>
            </div>
            <div style="display:flex;flex-direction:column;gap:0.7rem;">
                <div>
                    <p class="reveal" style="color:#f472b6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.4rem;font-family:'JetBrains Mono',monospace;">ALTER PROFILE — Modificar</p>
                    <div class="code-block reveal">
<span class="cmt">-- Alterar parâmetros do DEFAULT</span><br>
<span class="kw">ALTER PROFILE</span> <span class="val">DEFAULT</span> <span class="kw">LIMIT</span><br>
&nbsp;&nbsp;PASSWORD_LIFE_TIME     <span class="num">60</span><br>
&nbsp;&nbsp;PASSWORD_GRACE_TIME    <span class="num">10</span><br>
&nbsp;&nbsp;FAILED_LOGIN_ATTEMPTS  <span class="num">3</span><br>
&nbsp;&nbsp;PASSWORD_LOCK_TIME     <span class="val">1/1440</span>; <span class="cmt">-- 1 min</span>
                    </div>
                </div>
                <div>
                    <p class="reveal" style="color:#ff789f;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.4rem;font-family:'JetBrains Mono',monospace;">DROP PROFILE — Excluir</p>
                    <div class="code-block reveal">
<span class="cmt">-- Remover perfil (sem usuários)</span><br>
<span class="kw">DROP PROFILE</span> pro_gerente;<br>
<br>
<span class="cmt">-- Remove e re-atribui DEFAULT</span><br>
<span class="cmt">-- aos usuários do perfil</span><br>
<span class="kw">DROP PROFILE</span> pro_gerente <span class="kw">CASCADE</span>;<br>
<br>
<span class="cmt">-- ⚠️  DEFAULT não pode ser removido!</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SLIDE 9: ASSIGN + VIEWS -->
<div class="slide slide-9" data-slide="9">
    <div class="gradient-mesh">
        <div class="blob" style="width:450px;height:450px;top:-110px;right:-90px;background:#e08ab6;opacity:0.1;"></div>
        <div class="blob" style="width:280px;height:280px;bottom:-60px;left:-50px;background:#f472b6;opacity:0.08;"></div>
        <div class="blob" style="width:180px;height:180px;top:40%;left:15%;background:#ff5c9a;opacity:0.06;"></div>
    </div>
    <canvas class="particle-canvas" style="position:absolute;inset:0;z-index:1;"></canvas>
    <div class="content">
        <p class="reveal" style="color:#e08ab6;text-transform:uppercase;letter-spacing:0.2em;font-size:0.75rem;font-family:'JetBrains Mono',monospace;margin-bottom:0.4rem;">04 — Referência</p>
        <h2 class="reveal" style="font-family:'JetBrains Mono',monospace;font-size:clamp(1.4rem,2.5vw,2rem);font-weight:800;margin-bottom:1rem;">Atribuir Profile &amp; Consultar Informações</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:1.1rem;align-items:start;">
            <div>
                <p class="reveal" style="color:#f472b6;font-size:0.75rem;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.4rem;font-family:'JetBrains Mono',monospace;">Atribuir profile ao usuário</p>
                <div class="code-block reveal">
<span class="cmt">-- Na criação do usuário</span><br>
<span class="kw">CREATE USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">IDENTIFIED BY</span> <span class="val">senha123</span><br>
&nbsp;&nbsp;<span class="kw">PROFILE</span> pro_gerente;<br>
<br>
<span class="cmt">-- Alterando perfil existente</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">PROFILE</span> pro_gerente;<br>
<br>
<span class="cmt">-- Voltar ao perfil padrão</span><br>
<span class="kw">ALTER USER</span> joao<br>
&nbsp;&nbsp;<span class="kw">PROFILE</span> <span class="val">DEFAULT</span>;
                </div>
            </div>
            <div class="reveal" style="display:flex;flex-direction:column;gap:0.7rem;">
                <div style="background:rgba(224,138,182,0.07);border:1px solid rgba(224,138,182,0.13);border-radius:10px;padding:0.9rem 1.1rem;">
                    <div style="color:#e08ab6;font-weight:700;font-size:0.85rem;margin-bottom:0.5rem;font-family:'JetBrains Mono',monospace;">📊 Views de Consulta</div>
                    <div style="display:flex;flex-direction:column;gap:0.3rem;">
                        <div style="display:flex;align-items:center;gap:0.5rem;"><code style="background:rgba(224,138,182,0.1);color:#f0b6cf;padding:0.15rem 0.5rem;border-radius:4px;font-size:0.75rem;">DBA_PROFILES</code><span style="color:#d9b4c2;font-size:0.77rem;">— todos os parâmetros dos perfis</span></div>
                        <div style="display:flex;align-items:center;gap:0.5rem;"><code style="background:rgba(224,138,182,0.1);color:#f0b6cf;padding:0.15rem 0.5rem;border-radius:4px;font-size:0.75rem;">DBA_USERS</code><span style="color:#d9b4c2;font-size:0.77rem;">— profile atribuído a cada usuário</span></div>
                    </div>
                </div>
                <div style="background:rgba(255,92,154,0.07);border:1px solid rgba(255,92,154,0.12);border-left:3px solid #ff5c9a;border-radius:8px;padding:0.8rem 1rem;font-size:0.78rem;">
                    <strong style="color:#ff5c9a;">Limites de senha</strong> <span style="color:#d9b4c2;">são sempre verificados pelo Oracle, independente do <code style="color:#ff5c9a;">RESOURCE_LIMIT</code>.</span>
                </div>
                <div style="background:rgba(214,168,79,0.07);border:1px solid rgba(214,168,79,0.12);border-left:3px solid #d6a84f;border-radius:8px;padding:0.8rem 1rem;font-size:0.78rem;">
                    <strong style="color:#d6a84f;">Recurso avançado:</strong> <span style="color:#d9b4c2;">Para controle mais sofisticado de recursos, use o <em>Database Resource Manager</em> (DBMS_RESOURCE_MANAGER).</span>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

<div class="nav-controls">
    <button class="nav-btn" onclick="changeSlide(-1)">&#8249;</button>
    <div class="slide-dots" id="dots"></div>
    <button class="nav-btn" onclick="changeSlide(1)">&#8250;</button>
    <span class="slide-counter" id="counter">1 / 9</span>
</div>

<script>
    let current = 1;
    const total = document.querySelectorAll('.slide').length;
    const dotsContainer = document.getElementById('dots');
    const counter = document.getElementById('counter');
    for (let i = 1; i <= total; i++) { const dot = document.createElement('div'); dot.className = 'dot' + (i === 1 ? ' active' : ''); dot.onclick = () => goToSlide(i); dotsContainer.appendChild(dot); }
    function goToSlide(n) {
        const prev = document.querySelector('.slide.active');
        const next = document.querySelector(\`.slide[data-slide="\${n}"]\`);
        if (prev) prev.classList.remove('active');
        if (next) { next.classList.add('active'); animateSlide(next); }
        current = n; updateNav();
    }
    function changeSlide(dir) { let next = current + dir; if (next < 1) next = total; if (next > total) next = 1; goToSlide(next); }
    function updateNav() { document.querySelectorAll('.dot').forEach((d, i) => { d.classList.toggle('active', i + 1 === current); }); counter.textContent = current + ' / ' + total; }
    document.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); } if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); } });
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; });
    document.addEventListener('touchend', (e) => { const diff = touchStartX - e.changedTouches[0].clientX; if (Math.abs(diff) > 50) changeSlide(diff > 0 ? 1 : -1); });
    function animateSlide(slide) {
        slide.querySelectorAll('.reveal').forEach((el, i) => {
            el.style.transition = 'none'; el.style.opacity = '0'; el.style.transform = 'translateY(20px)';
            el.offsetHeight;
            const delay = i * 0.07;
            el.style.transition = \`opacity 0.35s ease \${delay}s, transform 0.35s ease \${delay}s\`;
            el.style.opacity = '1'; el.style.transform = 'translateY(0px)';
        });
    }
    document.addEventListener('mousemove', (e) => {
        const spotlight = document.querySelector('.mouse-spotlight');
        if (spotlight) spotlight.style.background = \`radial-gradient(600px circle at \${e.clientX}px \${e.clientY}px, rgba(224,138,182,0.05), transparent 40%)\`;
    });
    window.initParticles = function(canvas, options) {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight;
        const interactive = options.interactive !== false;
        const count = options.count || (interactive ? 55 : 18);
        let mx = -1000, my = -1000;
        const particles = Array.from({ length: count }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 2.5 + 0.8, alpha: Math.random() * 0.25 + 0.07 }));
        if (interactive) { canvas.addEventListener('mousemove', (e) => { const rect = canvas.getBoundingClientRect(); mx = e.clientX - rect.left; my = e.clientY - rect.top; }); canvas.addEventListener('mouseleave', () => { mx = -1000; my = -1000; }); }
        (function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                if (interactive) { const dx = p.x - mx, dy = p.y - my, dist = Math.sqrt(dx * dx + dy * dy); if (dist < 120) { const force = (120 - dist) / 120 * 2; p.vx += (dx / dist) * force * 0.1; p.vy += (dy / dist) * force * 0.1; } }
                p.vx *= 0.98; p.vy *= 0.98; p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = \`rgba(224,138,182,\${p.alpha})\`; ctx.fill();
            });
            requestAnimationFrame(animate);
        })();
    };
    document.querySelectorAll('.particle-canvas').forEach(c => window.initParticles(c, { interactive: true, count: 55 }));
    document.querySelectorAll('.particle-canvas-ambient').forEach(c => window.initParticles(c, { interactive: false, count: 18 }));
    try { animateSlide(document.querySelector('.slide.active')); } catch(e) {}
<\/script>
</body>
</html>
`,Fr=[{slug:"trabalho",title:"Trabalho",description:"Registros práticos, decisões e aprendizados de rotina profissional."},{slug:"estudos",title:"Estudos",description:"Notas gerais, revisões e materiais de apoio para aprendizado contínuo."},{slug:"escola",title:"Escola",description:"Disciplinas organizadas por período e conteúdo acadêmico."}],Ur=[{slug:"banco-de-dados",title:"Banco de Dados",category:"escola",period:"4o periodo",description:"Materiais sobre Oracle, seguranca, backup, recovery e administracao.",posts:[{slug:"backup-recovery-oracle",title:"Backup e Recovery Oracle",description:"Conceitos e praticas de recuperacao em Oracle.",html:Ic},{slug:"drp-oracle",title:"DRP Oracle",description:"Plano de recuperacao de desastre aplicado a Oracle.",html:Lc},{slug:"seguranca-banco-dados",title:"Seguranca em Banco de Dados",description:"Controles e boas praticas para proteger bancos de dados.",html:Dc},{slug:"senhas-recursos-profile",title:"Senhas, Recursos e Profile",description:"Politicas de senhas, limites de recursos e profiles.",html:Pc}]}];function Nc(e){return Fr.find(t=>t.slug===e)}function zc(e){return Ur.filter(t=>t.category===e)}function Vr(e){return Ur.find(t=>t.slug===e)}function Mc(e,t){var n;return(n=Vr(e))==null?void 0:n.posts.find(r=>r.slug===t)}const Bc={class:"app-shell"},Fc={class:"site-header"},Uc={class:"nav-links","aria-label":"Categorias"},Vc=vt({__name:"App",setup(e){return(t,n)=>(se(),we("div",Bc,[B("header",Fc,[ce(ae(Ne),{class:"brand",to:"/"},{default:De(()=>[...n[0]||(n[0]=[Tt("BrainDump",-1)])]),_:1}),B("nav",Uc,[(se(!0),we(Ee,null,ln(ae(Fr),r=>(se(),Ft(ae(Ne),{key:r.slug,to:`/${r.slug}`},{default:De(()=>[Tt(ie(r.title),1)]),_:2},1032,["to"]))),128))])]),B("main",null,[ce(ae(ri))])]))}}),Gc="/img/power.ico",Hc={class:"grid-section","aria-label":"Categorias"},jc={class:"content-section"},qc={class:"list"},Kc=vt({__name:"HomeView",setup(e){return(t,n)=>(se(),we(Ee,null,[n[2]||(n[2]=B("section",{class:"hero"},[B("div",{class:"power-mark","aria-hidden":"true"},[B("img",{src:Gc,alt:""})]),B("p",{class:"eyebrow"},"Miniblog pessoal"),B("h1",null,"Notas organizadas para trabalho, estudos e escola."),B("p",null," Um espaco simples para reunir materiais, disciplinas e registros curtos de aprendizado. ")],-1)),B("section",Hc,[(se(!0),we(Ee,null,ln(ae(Fr),r=>(se(),Ft(ae(Ne),{key:r.slug,class:"card",to:`/${r.slug}`},{default:De(()=>[n[0]||(n[0]=B("span",{class:"card-label"},"Categoria",-1)),B("h2",null,ie(r.title),1),B("p",null,ie(r.description),1)]),_:2},1032,["to"]))),128))]),B("section",jc,[n[1]||(n[1]=B("div",{class:"section-heading"},[B("span",{class:"card-label"},"Disciplinas"),B("h2",null,"Rotas disponiveis")],-1)),B("div",qc,[(se(!0),we(Ee,null,ln(ae(Ur),r=>(se(),Ft(ae(Ne),{key:r.slug,class:"list-item",to:`/escola/${r.slug}`},{default:De(()=>[B("strong",null,ie(r.title),1),B("span",null,ie(r.period)+" · "+ie(r.posts.length)+" posts",1)]),_:2},1032,["to"]))),128))])])],64))}}),Yc={key:0,class:"content-section"},Wc={class:"section-heading"},Jc={key:0,class:"grid-section compact"},$c={class:"card-label"},Xc={key:1,class:"empty-state"},Qc=vt({__name:"CategoryView",setup(e){const t=Br(),n=ue(()=>Nc(String(t.params.category))),r=ue(()=>zc(String(t.params.category)));return(s,o)=>n.value?(se(),we("section",Yc,[B("div",Wc,[o[0]||(o[0]=B("span",{class:"card-label"},"Categoria",-1)),B("h1",null,ie(n.value.title),1),B("p",null,ie(n.value.description),1)]),r.value.length?(se(),we("div",Jc,[(se(!0),we(Ee,null,ln(r.value,i=>(se(),Ft(ae(Ne),{key:i.slug,class:"card",to:`/escola/${i.slug}`},{default:De(()=>[B("span",$c,ie(i.period),1),B("h2",null,ie(i.title),1),B("p",null,ie(i.description),1)]),_:2},1032,["to"]))),128))])):(se(),we("p",Xc,"Nenhuma disciplina ou post cadastrado nesta categoria ainda."))])):Ga("",!0)}}),Zc={key:0,class:"content-section"},ed={class:"section-heading"},td={class:"card-label"},nd={class:"list"},rd={key:1,class:"content-section"},sd=vt({__name:"SubjectView",setup(e){const t=Br(),n=ue(()=>Vr(String(t.params.subject)));return(r,s)=>n.value?(se(),we("section",Zc,[B("div",ed,[B("span",td,ie(n.value.period),1),B("h1",null,ie(n.value.title),1),B("p",null,ie(n.value.description),1)]),B("div",nd,[(se(!0),we(Ee,null,ln(n.value.posts,o=>(se(),Ft(ae(Ne),{key:o.slug,class:"list-item",to:`/escola/${n.value.slug}/${o.slug}`},{default:De(()=>[B("strong",null,ie(o.title),1),B("span",null,ie(o.description),1)]),_:2},1032,["to"]))),128))])])):(se(),we("section",rd,[s[1]||(s[1]=B("h1",null,"Disciplina nao encontrada",-1)),ce(ae(Ne),{class:"text-link",to:"/escola"},{default:De(()=>[...s[0]||(s[0]=[Tt("Voltar para escola",-1)])]),_:1})]))}}),od={key:0,class:"reader"},id={class:"reader-header"},ad=["title","srcdoc"],ld={key:1,class:"content-section"},cd=vt({__name:"PostView",setup(e){const t=Br(),n=ue(()=>String(t.params.subject)),r=ue(()=>Vr(n.value)),s=ue(()=>Mc(n.value,String(t.params.post)));return(o,i)=>r.value&&s.value?(se(),we("article",od,[B("div",id,[ce(ae(Ne),{class:"text-link",to:`/escola/${r.value.slug}`},{default:De(()=>[Tt("Voltar para "+ie(r.value.title),1)]),_:1},8,["to"]),B("h1",null,ie(s.value.title),1),B("p",null,ie(s.value.description),1)]),B("iframe",{class:"post-frame",title:s.value.title,srcdoc:s.value.html,sandbox:"allow-scripts"},null,8,ad)])):(se(),we("section",ld,[i[1]||(i[1]=B("h1",null,"Post nao encontrado",-1)),ce(ae(Ne),{class:"text-link",to:"/escola"},{default:De(()=>[...i[0]||(i[0]=[Tt("Voltar para escola",-1)])]),_:1})]))}}),dd={class:"content-section"},pd=vt({__name:"NotFoundView",setup(e){return(t,n)=>(se(),we("section",dd,[n[1]||(n[1]=B("span",{class:"card-label"},"404",-1)),n[2]||(n[2]=B("h1",null,"Pagina nao encontrada",-1)),n[3]||(n[3]=B("p",null,"A rota solicitada nao existe neste miniblog.",-1)),ce(ae(Ne),{class:"text-link",to:"/"},{default:De(()=>[...n[0]||(n[0]=[Tt("Voltar para o inicio",-1)])]),_:1})]))}}),fd=kc({history:dc(),routes:[{path:"/",name:"home",component:Kc},{path:"/:category(trabalho|estudos|escola)",name:"category",component:Qc},{path:"/escola/:subject",name:"subject",component:sd},{path:"/escola/:subject/:post",name:"post",component:cd},{path:"/:pathMatch(.*)*",name:"not-found",component:pd}]});Rl(Vc).use(fd).mount("#app");
