var Kp=Object.defineProperty;var Zp=(n,t,e)=>t in n?Kp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Qt=(n,t,e)=>Zp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const pe={},as=[],$n=()=>{},Of=()=>!1,pa=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ma=n=>n.startsWith("onUpdate:"),Fe=Object.assign,Vc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Jp=Object.prototype.hasOwnProperty,ie=(n,t)=>Jp.call(n,t),Gt=Array.isArray,Oi=n=>qr(n)==="[object Map]",yi=n=>qr(n)==="[object Set]",Tu=n=>qr(n)==="[object Date]",jt=n=>typeof n=="function",be=n=>typeof n=="string",Yn=n=>typeof n=="symbol",ue=n=>n!==null&&typeof n=="object",Ff=n=>(ue(n)||jt(n))&&jt(n.then)&&jt(n.catch),Bf=Object.prototype.toString,qr=n=>Bf.call(n),Qp=n=>qr(n).slice(8,-1),zf=n=>qr(n)==="[object Object]",Hc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},tm=/-\w/g,Qe=ga(n=>n.replace(tm,t=>t.slice(1).toUpperCase())),em=/\B([A-Z])/g,_s=ga(n=>n.replace(em,"-$1").toLowerCase()),_a=ga(n=>n.charAt(0).toUpperCase()+n.slice(1)),Oa=ga(n=>n?`on${_a(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Vo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},kf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},va=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let wu;const xa=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ze(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?rm(i):Ze(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||ue(n))return n}const nm=/;(?![^(]*\))/g,im=/:([^]+)/,sm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function rm(n){const t={};return n.replace(sm,e=>e.startsWith("/*")?"":e).split(nm).forEach(e=>{if(e){const i=e.split(im);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ui(n){let t="";if(be(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=ui(n[e]);i&&(t+=i+" ")}else if(ue(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",am=kc(om);function Vf(n){return!!n||n===""}function lm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Un(n[s],t[s],e);return i}function Au(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Un(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function cm(n,t,e){let i=Oi(n),s=Oi(t);if(i||s||(i=yi(n),s=yi(t),i||s))return i&&s?Au(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Un(n[a],t[a],e))return!1}return String(n)===String(t)}function Cu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Un(n,t,e){if(n===t)return!0;let i=Tu(n),s=Tu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Yn(n),s=Yn(t),i||s?n===t:(i=Gt(n),s=Gt(t),i||s?i&&s?Cu(n,t,e,lm):!1:(i=ue(n),s=ue(t),i||s?!i||!s?!1:Cu(n,t,e,cm):String(n)===String(t))))}function Gc(n,t){return n.findIndex(e=>Un(e,t))}const Hf=n=>!!(n&&n.__v_isRef===!0),Et=n=>be(n)?n:n==null?"":Gt(n)||ue(n)&&(n.toString===Bf||!jt(n.toString))?Hf(n)?Et(n.value):JSON.stringify(n,Gf,2):String(n),Gf=(n,t)=>Hf(t)?Gf(n,t.value):Oi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Fa(i,r)+" =>"]=s,e),{})}:yi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Fa(e))}:Yn(t)?Fa(t):ue(t)&&!Gt(t)&&!zf(t)?String(t):t,Fa=(n,t="")=>{var e;return Yn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class um{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ue&&(Ue.active?(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ue;try{return Ue=this,t()}finally{Ue=e}}}on(){++this._on===1&&(this.prevScope=Ue,Ue=this)}off(){if(this._on>0&&--this._on===0){if(Ue===this)Ue=this.prevScope;else{let t=Ue;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dm(){return Ue}let ge;const Ba=new WeakSet;class Wf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ue&&(Ue.active?Ue.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ba.has(this)&&(Ba.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$f(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ru(this),Yf(this);const t=ge,e=Pn;ge=this,Pn=!0;try{return this.fn()}finally{qf(this),ge=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$c(t);this.deps=this.depsTail=void 0,Ru(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ba.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Il(this)&&this.run()}get dirty(){return Il(this)}}let Xf=0,Dr,Lr;function $f(n,t=!1){if(n.flags|=8,t){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function Wc(){Xf++}function Xc(){if(--Xf>0)return;if(Lr){let t=Lr;for(Lr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Dr;){let t=Dr;for(Dr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Yf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),$c(i),fm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Il(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(jf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function jf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Il(n))))return;n.flags|=2;const t=n.dep,e=ge,i=Pn;ge=n,Pn=!0;try{Yf(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ge=e,Pn=i,qf(n),n.flags&=-3}}function $c(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)$c(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function fm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const Kf=[];function qn(){Kf.push(Pn),Pn=!1}function jn(){const n=Kf.pop();Pn=n===void 0?!0:n}function Ru(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ge;ge=void 0;try{t()}finally{ge=e}}}let Br=0;class hm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ge||!Pn||ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ge)e=this.activeLink=new hm(ge,this),ge.deps?(e.prevDep=ge.depsTail,ge.depsTail.nextDep=e,ge.depsTail=e):ge.deps=ge.depsTail=e,Zf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ge.depsTail,e.nextDep=void 0,ge.depsTail.nextDep=e,ge.depsTail=e,ge.deps===e&&(ge.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){Wc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Xc()}}}function Zf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Zf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ul=new WeakMap,ds=Symbol(""),Nl=Symbol(""),zr=Symbol("");function Ve(n,t,e){if(Pn&&ge){let i=Ul.get(n);i||Ul.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Yc),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const o=Ul.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Wc(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&Hc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zr||!Yn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(zr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Oi(n)&&a(o.get(Nl)));break;case"delete":l||(a(o.get(ds)),Oi(n)&&a(o.get(Nl)));break;case"set":Oi(n)&&a(o.get(ds));break}}Xc()}function Ms(n){const t=ae(n);return t===n||(Ve(t,"iterate",zr),_n(n))?t:Kn(n)?Bi(n)?t.map(e=>Vi(xn(e))):t.map(Vi):t.map(xn)}function ya(n){return Ve(n=ae(n),"iterate",zr),n}function kn(n,t){return Kn(n)?Vi(Bi(n)?xn(t):t):xn(t)}const pm={__proto__:null,[Symbol.iterator](){return za(this,Symbol.iterator,n=>kn(this,n))},concat(...n){return Ms(this).concat(...n.map(t=>Gt(t)?Ms(t):t))},entries(){return za(this,"entries",n=>(n[1]=kn(this,n[1]),n))},every(n,t){return ti(this,"every",n,t,void 0,arguments)},filter(n,t){return ti(this,"filter",n,t,e=>e.map(i=>kn(this,i)),arguments)},find(n,t){return ti(this,"find",n,t,e=>kn(this,e),arguments)},findIndex(n,t){return ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ti(this,"findLast",n,t,e=>kn(this,e),arguments)},findLastIndex(n,t){return ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return Ms(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,t){return ti(this,"map",n,t,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...t){return Du(this,"reduce",n,t)},reduceRight(n,...t){return Du(this,"reduceRight",n,t)},shift(){return fr(this,"shift")},some(n,t){return ti(this,"some",n,t,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return Ms(this).toReversed()},toSorted(n){return Ms(this).toSorted(n)},toSpliced(...n){return Ms(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return za(this,"values",n=>kn(this,n))}};function za(n,t,e){const i=ya(n),s=i[t],r=s.call(i);if(i!==n&&!_n(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Pu(r.next(),e),s!==Jf[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Pu(r._next(),e)}return r}function Pu(n,t){return n.done||(n.value=t(n.value)),n}const Jf=Array.prototype;function ti(n,t,e,i,s,r){const o=ya(n),a=o!==n&&!_n(n),l=o[t];if(l!==Jf[t]){const d=l.apply(n,r);return a?xn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,kn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Du(n,t,e,i){const s=ya(n),r=s!==n&&!_n(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=kn(n,c)),e.call(this,c,kn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?kn(n,l):l}function ka(n,t,e){const i=ae(n);Ve(i,"iterate",zr);const s=i[t](...e);return(s===-1||s===!1)&&Kc(e[0])?(e[0]=ae(e[0]),i[t](...e)):s}function fr(n,t,e=[]){qn(),Wc();const i=ae(n)[t].apply(n,e);return Xc(),jn(),i}const mm=kc("__proto__,__v_isRef,__isVue"),Qf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Yn));function gm(n){Yn(n)||(n=String(n));const t=ae(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class th{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?wm:sh:r?ih:nh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=pm[e]))return l;if(e==="hasOwnProperty")return gm}const a=Reflect.get(t,e,Ge(t)?t:i);if((Yn(e)?Qf.has(e):mm(e))||(s||Ve(t,"get",e),r))return a;if(Ge(a)){const l=o&&Hc(e)?a:a.value;return s&&ue(l)?Fl(l):l}return ue(a)?s?Fl(a):Fi(a):a}}class eh extends th{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Gt(t)&&Hc(e);if(!this._isShallow){const c=Kn(r);if(!_n(i)&&!Kn(i)&&(r=ae(r),i=ae(i)),!o&&Ge(r)&&!Ge(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,Ge(t)?t:s);return t===ae(s)&&l&&(a?Wn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Yn(e)||!Qf.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Gt(t)?"length":ds),Reflect.ownKeys(t)}}class _m extends th{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const vm=new eh,xm=new _m,ym=new eh(!0);const Ol=n=>n,so=n=>Reflect.getPrototypeOf(n);function Mm(n,t,e){return function(...i){const s=this.__v_raw,r=ae(s),o=Oi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ol:t?Vi:xn;return!t&&Ve(r,"iterate",l?Nl:ds),Fe(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ro(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sm(n,t){const e={get(s){const r=this.__v_raw,o=ae(r),a=ae(s);n||(Wn(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=so(o),c=t?Ol:n?Vi:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(ae(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=ae(r),a=ae(s);return n||(Wn(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ae(a),c=t?Ol:n?Vi:xn;return!n&&Ve(l,"iterate",ds),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Fe(e,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){const r=ae(this),o=so(r),a=ae(s),l=!t&&!_n(s)&&!Kn(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!_n(r)&&!Kn(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=so(o);let c=a.call(o,s);c||(s=ae(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ae(this),{has:o,get:a}=so(r);let l=o.call(r,s);l||(s=ae(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ae(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Mm(s,n,t)}),e}function qc(n,t){const e=Sm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ie(e,s)&&s in i?e:i,s,r)}const bm={get:qc(!1,!1)},Em={get:qc(!1,!0)},Tm={get:qc(!0,!1)};const nh=new WeakMap,ih=new WeakMap,sh=new WeakMap,wm=new WeakMap;function Am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fi(n){return Kn(n)?n:jc(n,!1,vm,bm,nh)}function rh(n){return jc(n,!1,ym,Em,ih)}function Fl(n){return jc(n,!0,xm,Tm,sh)}function jc(n,t,e,i,s){if(!ue(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Am(Qp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Bi(n){return Kn(n)?Bi(n.__v_raw):!!(n&&n.__v_isReactive)}function Kn(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function Kc(n){return n?!!n.__v_raw:!1}function ae(n){const t=n&&n.__v_raw;return t?ae(t):n}function Cm(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&kf(n,"__v_skip",!0),n}const xn=n=>ue(n)?Fi(n):n,Vi=n=>ue(n)?Fl(n):n;function Ge(n){return n?n.__v_isRef===!0:!1}function ce(n){return oh(n,!1)}function Rm(n){return oh(n,!0)}function oh(n,t){return Ge(n)?n:new Pm(n,t)}class Pm{constructor(t,e){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ae(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||_n(t)||Kn(t);t=i?t:ae(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function Ee(n){return Ge(n)?n.value:n}const Dm={get:(n,t,e)=>t==="__v_raw"?n:Ee(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ge(s)&&!Ge(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function ah(n){return Bi(n)?n:new Proxy(n,Dm)}class Lm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return $f(this,!0),!0}get value(){const t=this.dep.track();return jf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Im(n,t,e=!1){let i,s;return jt(n)?i=n:(i=n.get,s=n.set),new Lm(i,s,e)}const oo={},Jo=new WeakMap;let es;function Um(n,t=!1,e=es){if(e){let i=Jo.get(e);i||Jo.set(e,i=[]),i.push(n)}}function Nm(n,t,e=pe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=b=>s?b:_n(b)||s===!1||s===0?hi(b,1):hi(b);let u,d,f,h,_=!1,v=!1;if(Ge(n)?(d=()=>n.value,_=_n(n)):Bi(n)?(d=()=>c(n),_=!0):Gt(n)?(v=!0,_=n.some(b=>Bi(b)||_n(b)),d=()=>n.map(b=>{if(Ge(b))return b.value;if(Bi(b))return c(b);if(jt(b))return l?l(b,2):b()})):jt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){qn();try{f()}finally{jn()}}const b=es;es=u;try{return l?l(n,3,[h]):n(h)}finally{es=b}}:d=$n,t&&s){const b=d,F=s===!0?1/0:s;d=()=>hi(b(),F)}const m=dm(),p=()=>{u.stop(),m&&m.active&&Vc(m.effects,u)};if(r&&t){const b=t;t=(...F)=>{try{return b(...F)}finally{p()}}}let R=v?new Array(n.length).fill(oo):oo;const w=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(t){const F=u.run();if(b||s||_||(v?F.some((z,U)=>Wn(z,R[U])):Wn(F,R))){const z=es;qn();try{f&&f(),es=u;const U=[F,R===oo?void 0:v&&R[0]===oo?[]:R,h];R=F,l?l(t,3,U):t(...U)}finally{es=z,jn()}}}else u.run()};return a&&a(w),u=new Wf(d),u.scheduler=o?()=>o(w,!1):w,h=b=>Um(b,!1,u),f=u.onStop=()=>{const b=Jo.get(u);if(b){if(l)l(b,4);else for(const F of b)F();Jo.delete(u)}},t?i?w(!0):R=u.run():o?o(w.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function hi(n,t=1/0,e){if(t<=0||!ue(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ge(n))hi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)hi(n[i],t,e);else if(yi(n)||Oi(n))n.forEach(i=>{hi(i,t,e)});else if(zf(n)){for(const i in n)hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,t,e,i){try{return i?n(...i):n()}catch(s){Ma(s,t,e)}}function Nn(n,t,e,i){if(jt(n)){const s=jr(n,t,e,i);return s&&Ff(s)&&s.catch(r=>{Ma(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],t,e,i));return s}}function Ma(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){qn(),jr(r,null,10,[n,l,c]),jn();return}}Om(n,e,s,i,o)}function Om(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const qe=[];let wn=-1;const Vn=[];let Li=null,ks=0;const lh=Promise.resolve();let Qo=null;function Zc(n){const t=Qo||lh;return n?t.then(this?n.bind(this):n):t}function Fm(n){let t=wn+1,e=qe.length;for(;t<e;){const i=t+e>>>1,s=qe[i],r=kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Jc(n){if(!(n.flags&1)){const t=kr(n),e=qe[qe.length-1];!e||!(n.flags&2)&&t>=kr(e)?qe.push(n):qe.splice(Fm(t),0,n),n.flags|=1,ch()}}function ch(){Qo||(Qo=lh.then(fh))}function Bm(n){if(!Gt(n))Li&&n.id===-1?Li.splice(ks+1,0,n):n.flags&1||(Vn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Vn.push(n[t]);ch()}function uh(n,t,e,i=wn+1){for(;i<qe.length;i++){const s=qe[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;qe.splice(i,1),i=n?i-1:wn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dh(n,t,e=0){if(Vn.length){let i=Vn,s=0;if(t){i=[];for(let o=0;o<Vn.length;o++){const a=Vn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Vn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>kr(o)-kr(a));if(Vn.length=s,Li){for(let o=0;o<r.length;o++)Li.push(r[o]);return}for(Li=r,ks=0;ks<Li.length;ks++){const o=Li[ks];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Li=null,ks=0}}let Va=!1;function zm(n,t){if(Va){n();return}const e=t===void 0?void 0:new Set(Vn);n(),Va=!0;try{uh(void 0,t),dh(void 0,e,t)}finally{Va=!1}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fh(n){try{for(wn=0;wn<qe.length;wn++){const t=qe[wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;wn<qe.length;wn++){const t=qe[wn];t&&(t.flags&=-2)}wn=-1,qe.length=0,dh(),Qo=null,(qe.length||Vn.length)&&fh()}}let un=null,hh=null;function ta(n){const t=un;return un=n,hh=n&&n.type.__scopeId||null,t}function ph(n,t=un,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&sa(-1);const r=ta(t),o=hs.length;let a;try{a=n(...s)}finally{for(let l=hs.length;l>o;l--)Bh();ta(r),i._d&&sa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Te(n,t){if(un===null)return n;const e=wa(un),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=pe]=t[s];r&&(jt(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Yi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qn(),Nn(l,e,8,[n.el,a,n,t]),jn())}}function Ho(n,t){if(He){let e=He.provides;const i=He.parent&&He.parent.provides;i===e&&(e=He.provides=Object.create(i)),e[n]=t}}function Dn(n,t,e=!1){const i=Fg();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&jt(t)?t.call(i&&i.proxy):t}}const km=Symbol.for("v-scx"),Vm=()=>Dn(km);function fs(n,t,e){return mh(n,t,e)}function mh(n,t,e=pe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Fe({},e),l=t&&i||!t&&r!=="post";let c;if(Xr){if(r==="sync"){const h=Vm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=$n,h.resume=$n,h.pause=$n,h}}const u=He;a.call=(h,_,v)=>Nn(h,u,_,v);let d=!1;r==="post"?a.scheduler=h=>{h.i=u,sn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():Jc(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Nm(n,t,a);return Xr&&(c?c.push(f):l&&f()),f}function Hm(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?gh(i,n):()=>i[n]:n.bind(i,i);let r;jt(t)?r=t:(r=t.handler,e=t);const o=Jr(this),a=mh(s,r.bind(i),e);return o(),a}function gh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Gm=Symbol("_vte"),Sa=n=>n.__isTeleport,Ha=Symbol("_leaveCb");function Wm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==On){t=e;break}}return t}function _h(n){if(!Qc(n))return Sa(n.type)&&n.children?Wm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&jt(e.default))return e.default()}}function ea(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;ea(Sa(e.type)&&_h(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Ne&&Gt(n.children)){const e=Th(n.children,!1);e&&ea(e,t)}}function Bl(n){if(n.component)return Bl(n.component.subTree);if(n.type===Ne){const t=Gt(n.children)&&Th(n.children,!1);return t?Bl(t):void 0}if(n.type!==On)return n}function Xi(n,t){return jt(n)?Fe({name:n.name},t,{setup:n}):n}function vh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Lu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const na=new WeakMap;function Ir(n,t,e,i,s=!1){if(Gt(n)){n.forEach((v,m)=>Ir(v,t&&(Gt(t)?t[m]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?wa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,d=a.setupState,f=ae(d),h=d===pe?Of:v=>Lu(u,v)?!1:ie(f,v),_=(v,m)=>!(m&&Lu(u,m));if(c!=null&&c!==l){if(Iu(t),be(c))u[c]=null,h(c)&&(d[c]=null);else if(Ge(c)){const v=t;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(jt(l))jr(l,a,12,[o,u]);else{const v=be(l),m=Ge(l);if(v||m){const p=()=>{if(n.f){const R=v?h(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Gt(R)&&Vc(R,r);else if(Gt(R))R.includes(r)||R.push(r);else if(v)u[l]=[r],h(l)&&(d[l]=u[l]);else{const w=[r];_(l,n.k)&&(l.value=w),n.k&&(u[n.k]=w)}}else v?(u[l]=o,h(l)&&(d[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{p(),na.delete(n)};R.id=-1,na.set(n,R),sn(R,e)}else Iu(n),p()}}}function Iu(n){const t=na.get(n);t&&(t.flags|=8,na.delete(n))}xa().requestIdleCallback;xa().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,Qc=n=>n.type.__isKeepAlive;function Xm(n,t){xh(n,"a",t)}function $m(n,t){xh(n,"da",t)}function xh(n,t,e=He){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ba(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Qc(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=ba(t,n,i,!0);Zr(()=>{Vc(i[t],s)},e)}function ba(n,t,e=He,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{qn();const a=Jr(e),l=Nn(t,e,n,o);return a(),jn(),l});return i?s.unshift(r):s.push(r),r}}const Si=n=>(t,e=He)=>{(!Xr||n==="sp")&&ba(n,(...i)=>t(...i),e)},qm=Si("bm"),Kr=Si("m"),jm=Si("bu"),Km=Si("u"),Zm=Si("bum"),Zr=Si("um"),Jm=Si("sp"),Qm=Si("rtg"),tg=Si("rtc");function eg(n,t=He){ba("ec",n,t)}const ng="components";function yh(n,t){return sg(ng,n,!0,t)||n}const ig=Symbol.for("v-ndc");function sg(n,t,e=!0,i=!1){const s=un||He;if(s){const r=s.type;{const a=Hg(r,!1);if(a&&(a===t||a===Qe(t)||a===_a(Qe(t))))return r}const o=Uu(s[n]||r[n],t)||Uu(s.appContext[n],t);return!o&&i?r:o}}function Uu(n,t){return n&&(n[t]||n[Qe(t)]||n[_a(Qe(t))])}function Hs(n,t,e,i){let s;const r=e,o=Gt(n);if(o||be(n)){const a=o&&Bi(n);let l=!1,c=!1;a&&(l=!_n(n),c=Kn(n),n=ya(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?Vi(xn(n[u])):xn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ue(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const zl=n=>n?Hh(n)?wa(n):zl(n.parent):null,Nr=Fe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>zl(n.parent),$root:n=>zl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Sh(n),$forceUpdate:n=>n.f||(n.f=()=>{Jc(n.update)}),$nextTick:n=>n.n||(n.n=Zc.bind(n.proxy)),$watch:n=>Hm.bind(n)}),Ga=(n,t)=>n!==pe&&!n.__isScriptSetup&&ie(n,t),rg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ga(i,t))return o[t]=1,i[t];if(s!==pe&&ie(s,t))return o[t]=2,s[t];if(ie(r,t))return o[t]=3,r[t];if(e!==pe&&ie(e,t))return o[t]=4,e[t];kl&&(o[t]=0)}}const c=Nr[t];let u,d;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==pe&&ie(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ie(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ga(s,t)?(s[t]=e,!0):i!==pe&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==pe&&a[0]!=="$"&&ie(n,a)||Ga(t,a)||ie(r,a)||ie(i,a)||ie(Nr,a)||ie(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Nu(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let kl=!0;function og(n){const t=Sh(n),e=n.proxy,i=n.ctx;kl=!1,t.beforeCreate&&Ou(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:w,unmounted:b,render:F,renderTracked:z,renderTriggered:U,errorCaptured:H,serverPrefetch:C,expose:T,inheritAttrs:N,components:lt,directives:tt,filters:mt}=t;if(c&&ag(c,i,null),o)for(const k in o){const G=o[k];jt(G)&&(i[k]=G.bind(e))}if(s){const k=s.call(e,e);ue(k)&&(n.data=Fi(k))}if(kl=!0,r)for(const k in r){const G=r[k],ft=jt(G)?G.bind(e,e):jt(G.get)?G.get.bind(e,e):$n,L=!jt(G)&&jt(G.set)?G.set.bind(e):$n,D=Ke({get:ft,set:L});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>D.value,set:ut=>D.value=ut})}if(a)for(const k in a)Mh(a[k],i,e,k);if(l){const k=jt(l)?l.call(e):l;Reflect.ownKeys(k).forEach(G=>{Ho(G,k[G])})}u&&Ou(u,n,"c");function W(k,G){Gt(G)?G.forEach(ft=>k(ft.bind(e))):G&&k(G.bind(e))}if(W(qm,d),W(Kr,f),W(jm,h),W(Km,_),W(Xm,v),W($m,m),W(eg,H),W(tg,z),W(Qm,U),W(Zm,R),W(Zr,b),W(Jm,C),Gt(T))if(T.length){const k=n.exposed||(n.exposed={});T.forEach(G=>{Object.defineProperty(k,G,{get:()=>e[G],set:ft=>e[G]=ft,enumerable:!0})})}else n.exposed||(n.exposed={});F&&n.render===$n&&(n.render=F),N!=null&&(n.inheritAttrs=N),lt&&(n.components=lt),tt&&(n.directives=tt),C&&vh(n)}function ag(n,t,e=$n){Gt(n)&&(n=Vl(n));for(const i in n){const s=n[i];let r;ue(s)?"default"in s?r=Dn(s.from||i,s.default,!0):r=Dn(s.from||i):r=Dn(s),Ge(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Ou(n,t,e){Nn(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Mh(n,t,e,i){let s=i.includes(".")?gh(e,i):()=>e[i];if(be(n)){const r=t[n];jt(r)&&fs(s,r)}else if(jt(n))fs(s,n.bind(e));else if(ue(n))if(Gt(n))n.forEach(r=>Mh(r,t,e,i));else{const r=jt(n.handler)?n.handler.bind(e):t[n.handler];jt(r)&&fs(s,r,n)}}function Sh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ia(l,c,o,!0)),ia(l,t,o)),ue(t)&&r.set(t,l),l}function ia(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ia(n,r,e,!0),s&&s.forEach(o=>ia(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=lg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const lg={data:Fu,props:Bu,emits:Bu,methods:Er,computed:Er,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:Er,directives:Er,watch:ug,provide:Fu,inject:cg};function Fu(n,t){return t?n?function(){return Fe(jt(n)?n.call(this,this):n,jt(t)?t.call(this,this):t)}:t:n}function cg(n,t){return Er(Vl(n),Vl(t))}function Vl(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Xe(n,t){return n?[...new Set([].concat(n,t))]:t}function Er(n,t){return n?Fe(Object.create(null),n,t):t}function Bu(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Fe(Object.create(null),Nu(n),Nu(t??{})):t}function ug(n,t){if(!n)return t;if(!t)return n;const e=Fe(Object.create(null),n);for(const i in t)e[i]=Xe(n[i],t[i]);return e}function bh(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dg=0;function fg(n,t){return function(i,s=null){jt(i)||(i=Fe({},i)),s!=null&&!ue(s)&&(s=null);const r=bh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:dg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Wg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&jt(u.install)?(o.add(u),u.install(c,...d)):jt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Le(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,wa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=$s;$s=c;try{return u()}finally{$s=d}}};return c}}let $s=null;const hg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${_s(t)}Modifiers`];function pg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||pe;let s=e;const r=t.startsWith("update:"),o=r&&hg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>be(u)?u.trim():u)),o.number&&(s=s.map(va)));let a,l=i[a=Oa(t)]||i[a=Oa(Qe(t))];!l&&r&&(l=i[a=Oa(_s(t))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}const mg=new WeakMap;function Eh(n,t,e=!1){const i=e?mg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!jt(n)){const l=c=>{const u=Eh(c,t,!0);u&&(a=!0,Fe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ue(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Fe(o,r),ue(n)&&i.set(n,o),o)}function Ea(n,t){return!n||!pa(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,_s(t))||ie(n,t))}function zu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:v}=n,m=ta(n);let p,R;try{if(e.shapeFlag&4){const b=s||i,F=b;p=Hn(c.call(F,b,u,d,h,f,_)),R=a}else{const b=t;p=Hn(b.length>1?b(d,{attrs:a,slots:o,emit:l}):b(d,null)),R=t.props?a:gg(a)}}catch(b){hs.length=0,Ma(b,n,1),p=Le(On)}let w=p;if(R&&v!==!1){const b=Object.keys(R),{shapeFlag:F}=w;b.length&&F&7&&(r&&b.some(ma)&&(R=_g(R,r)),w=Zs(w,R,!1,!0))}if(e.dirs&&(w=Zs(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(e.dirs):e.dirs),e.transition){const b=Sa(w.type)&&_h(w)||w;ea(b,e.transition)}return p=w,ta(m),p}function Th(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Hr(s)){if(s.type!==On||s.children==="v-if"){if(e)return;e=s}}else return}return e}const gg=n=>{let t;for(const e in n)(e==="class"||e==="style"||pa(e))&&((t||(t={}))[e]=n[e]);return t},_g=(n,t)=>{const e={};for(const i in n)(!ma(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function vg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?ku(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(wh(o,i,f)&&!Ea(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ku(i,o,c):!0:!!o;return!1}function ku(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ie(n,r)||wh(t,n,r)&&!Ea(e,r))return!0}return!1}function wh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ue(i)&&ue(s)?!Un(i,s):i!==s}function xg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ah={},Ch=()=>Object.create(Ah),Rh=n=>Object.getPrototypeOf(n)===Ah;function yg(n,t,e,i=!1){const s={},r=Ch();n.propsDefaults=Object.create(null),Ph(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:rh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Mg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ae(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ea(n.emitsOptions,f))continue;const h=t[f];if(l)if(ie(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const _=Qe(f);s[_]=Hl(l,a,_,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Ph(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ie(t,d)&&((u=_s(d))===d||!ie(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Hl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ie(t,d))&&(delete r[d],c=!0)}c&&fi(n.attrs,"set","")}function Ph(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Pr(l))continue;const c=t[l];let u;s&&ie(s,u=Qe(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ea(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ae(e),c=a||pe;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Hl(s,l,d,c[d],n,!ie(c,d))}}return o}function Hl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&jt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Jr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(e))&&(i=!0))}return i}const Sg=new WeakMap;function Dh(n,t,e=!1){const i=e?Sg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!jt(n)){const u=d=>{l=!0;const[f,h]=Dh(d,t,!0);Fe(o,f),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ue(n)&&i.set(n,as),as;if(Gt(r))for(let u=0;u<r.length;u++){const d=Qe(r[u]);Vu(d)&&(o[d]=pe)}else if(r)for(const u in r){const d=Qe(u);if(Vu(d)){const f=r[u],h=o[d]=Gt(f)||jt(f)?{type:f}:Fe({},f),_=h.type;let v=!1,m=!0;if(Gt(_))for(let p=0;p<_.length;++p){const R=_[p],w=jt(R)&&R.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(m=!1)}else v=jt(_)&&_.name==="Boolean";h[0]=v,h[1]=m,(v||ie(h,"default"))&&a.push(d)}}const c=[o,a];return ue(n)&&i.set(n,c),c}function Vu(n){return n[0]!=="$"&&!Pr(n)}const tu=n=>n==="_"||n==="_ctx"||n==="$stable",eu=n=>Gt(n)?n.map(Hn):[Hn(n)],bg=(n,t,e)=>{if(t._n)return t;const i=ph((...s)=>eu(t(...s)),e);return i._c=!1,i},Lh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(tu(s))continue;const r=n[s];if(jt(r))t[s]=bg(s,r,i);else if(r!=null){const o=eu(r);t[s]=()=>o}}},Ih=(n,t)=>{const e=eu(t);n.slots.default=()=>e},Uh=(n,t,e)=>{for(const i in t)(e||!tu(i))&&(n[i]=t[i])},Eg=(n,t,e)=>{const i=n.slots=Ch();if(n.vnode.shapeFlag&32){const s=t._;s?(Uh(i,t,e),e&&kf(i,"_",s,!0)):Lh(t,i)}else t&&Ih(n,t)},Tg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Uh(s,t,e):(r=!t.$stable,Lh(t,s)),o=t}else t&&(Ih(n,t),o={default:1});if(r)for(const a in s)!tu(a)&&o[a]==null&&delete s[a]},sn=Pg;function wg(n){return Ag(n)}function Ag(n,t){const e=xa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=$n,insertStaticContent:_}=n,v=(E,P,B,S=null,Z=null,K=null,it=void 0,st=null,q=!!P.dynamicChildren)=>{if(E===P)return;E&&!hr(E,P)&&(S=I(E),ut(E,Z,K,!0),E=null),P.patchFlag===-2&&(q=!1,P.dynamicChildren=null),P.dynamicChildren&&E&&E.dynamicChildren&&E.dynamicChildren.hasOnce&&(P.dynamicChildren===as&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:y,ref:x,shapeFlag:g}=P;switch(y){case Ta:m(E,P,B,S);break;case On:p(E,P,B,S);break;case Go:E==null&&R(P,B,S,it);break;case Ne:lt(E,P,B,S,Z,K,it,st,q);break;default:g&1?F(E,P,B,S,Z,K,it,st,q):g&6?tt(E,P,B,S,Z,K,it,st,q):(g&64||g&128)&&y.process(E,P,B,S,Z,K,it,st,q,et)}x!=null&&Z?Ir(x,E&&E.ref,K,P||E,!P):x==null&&E&&E.ref!=null&&Ir(E.ref,null,K,E,!0)},m=(E,P,B,S)=>{if(E==null)i(P.el=a(P.children),B,S);else{const Z=P.el=E.el;P.children!==E.children&&c(Z,P.children)}},p=(E,P,B,S)=>{E==null?i(P.el=l(P.children||""),B,S):P.el=E.el},R=(E,P,B,S)=>{[E.el,E.anchor]=_(E.children,P,B,S,E.el,E.anchor)},w=({el:E,anchor:P},B,S)=>{let Z;for(;E&&E!==P;)Z=f(E),i(E,B,S),E=Z;i(P,B,S)},b=({el:E,anchor:P})=>{let B;for(;E&&E!==P;)B=f(E),s(E),E=B;s(P)},F=(E,P,B,S,Z,K,it,st,q)=>{if(P.type==="svg"?it="svg":P.type==="math"&&(it="mathml"),E==null)z(P,B,S,Z,K,it,st,q);else{const y=E.el&&E.el._isVueCE?E.el:null;try{y&&y._beginPatch(),C(E,P,Z,K,it,st,q)}finally{y&&y._endPatch()}}},z=(E,P,B,S,Z,K,it,st)=>{let q,y;const{props:x,shapeFlag:g,transition:O,dirs:J}=E;if(q=E.el=o(E.type,K,x&&x.is,x),g&8?u(q,E.children):g&16&&H(E.children,q,null,S,Z,Wa(E,K),it,st),J&&Yi(E,null,S,"created"),U(q,E,E.scopeId,it,S),x){for(const nt in x)nt!=="value"&&!Pr(nt)&&r(q,nt,null,x[nt],K,S);"value"in x&&r(q,"value",null,x.value,K),(y=x.onVnodeBeforeMount)&&zn(y,S,E)}J&&Yi(E,null,S,"beforeMount");const rt=Cg(Z,O);rt&&O.beforeEnter(q),i(q,P,B),((y=x&&x.onVnodeMounted)||rt||J)&&sn(()=>{try{y&&zn(y,S,E),rt&&O.enter(q),J&&Yi(E,null,S,"mounted")}finally{}},Z)},U=(E,P,B,S,Z)=>{if(B&&h(E,B),S)for(let K=0;K<S.length;K++)h(E,S[K]);if(Z){let K=Z.subTree;if(P===K||Fh(K.type)&&(K.ssContent===P||K.ssFallback===P)){const it=Z.vnode;U(E,it,it.scopeId,it.slotScopeIds,Z.parent)}}},H=(E,P,B,S,Z,K,it,st,q=0)=>{for(let y=q;y<E.length;y++){const x=E[y]=st?di(E[y]):Hn(E[y]);v(null,x,P,B,S,Z,K,it,st)}},C=(E,P,B,S,Z,K,it)=>{const st=P.el=E.el;let{patchFlag:q,dynamicChildren:y,dirs:x}=P;q|=E.patchFlag&16;const g=E.props||pe,O=P.props||pe;let J;if(B&&qi(B,!1),(J=O.onVnodeBeforeUpdate)&&zn(J,B,P,E),x&&Yi(P,E,B,"beforeUpdate"),B&&qi(B,!0),y&&(!E.dynamicChildren||E.dynamicChildren.length!==y.length)&&(q=0,it=!1,y=null),(g.innerHTML&&O.innerHTML==null||g.textContent&&O.textContent==null)&&u(st,""),y?T(E.dynamicChildren,y,st,B,S,Wa(P,Z),K):it||G(E,P,st,null,B,S,Wa(P,Z),K,!1),q>0){if(q&16)N(st,g,O,B,Z);else if(q&2&&g.class!==O.class&&r(st,"class",null,O.class,Z),q&4&&r(st,"style",g.style,O.style,Z),q&8){const rt=P.dynamicProps;for(let nt=0;nt<rt.length;nt++){const wt=rt[nt],yt=g[wt],pt=O[wt];(pt!==yt||wt==="value")&&r(st,wt,yt,pt,Z,B)}}q&1&&E.children!==P.children&&u(st,P.children)}else!it&&y==null&&N(st,g,O,B,Z);((J=O.onVnodeUpdated)||x)&&sn(()=>{J&&zn(J,B,P,E),x&&Yi(P,E,B,"updated")},S)},T=(E,P,B,S,Z,K,it)=>{for(let st=0;st<P.length;st++){const q=E[st],y=P[st],x=q.el||Gl(q),g=x&&(q.type===Ne||!hr(q,y)||q.shapeFlag&198)?d(x):B;v(q,y,g,null,S,Z,K,it,!0)}},N=(E,P,B,S,Z)=>{if(P!==B){if(P!==pe)for(const K in P)!Pr(K)&&!(K in B)&&r(E,K,P[K],null,Z,S);for(const K in B){if(Pr(K))continue;const it=B[K],st=P[K];it!==st&&K!=="value"&&r(E,K,st,it,Z,S)}"value"in B&&r(E,"value",P.value,B.value,Z)}},lt=(E,P,B,S,Z,K,it,st,q)=>{const y=P.el=E?E.el:a(""),x=P.anchor=E?E.anchor:a("");let{patchFlag:g,dynamicChildren:O,slotScopeIds:J}=P;J&&(st=st?st.concat(J):J),E==null?(i(y,B,S),i(x,B,S),H(P.children||[],B,x,Z,K,it,st,q)):g>0&&g&64&&O&&E.dynamicChildren&&E.dynamicChildren.length===O.length?(T(E.dynamicChildren,O,B,Z,K,it,st),(P.key!=null||Z&&P===Z.subTree)&&Nh(E,P,!0)):G(E,P,B,x,Z,K,it,st,q)},tt=(E,P,B,S,Z,K,it,st,q)=>{P.slotScopeIds=st,E==null?P.shapeFlag&512?Z.ctx.activate(P,B,S,it,q):mt(P,B,S,Z,K,it,q):ht(E,P,q)},mt=(E,P,B,S,Z,K,it)=>{const st=E.component=Og(E,S,Z);if(Qc(E)&&(st.ctx.renderer=et),Bg(st,!1,it),st.asyncDep){if(Z&&Z.registerDep(st,W,it,K),!E.el){const q=st.subTree=Le(On);p(null,q,P,B),E.placeholder=q.el}}else W(st,E,P,B,Z,K,it)},ht=(E,P,B)=>{const S=P.component=E.component;if(vg(E,P,B))if(S.asyncDep&&!S.asyncResolved){P.el=E.el,P.placeholder=E.placeholder,k(S,P,B);return}else S.next=P,S.update();else P.el=E.el,P.placeholder=E.placeholder,S.vnode=P},W=(E,P,B,S,Z,K,it)=>{const st=()=>{if(E.isMounted){let{next:g,bu:O,u:J,parent:rt,vnode:nt}=E;{const _t=Oh(E);if(_t){g&&(g.el=nt.el,k(E,g,it)),_t.asyncDep.then(()=>{sn(()=>{E.isUnmounted||y()},Z)});return}}let wt=g,yt;qi(E,!1),g?(g.el=nt.el,k(E,g,it)):g=nt,O&&Vo(O),(yt=g.props&&g.props.onVnodeBeforeUpdate)&&zn(yt,rt,g,nt),qi(E,!0);const pt=zu(E),Rt=E.subTree;E.subTree=pt,v(Rt,pt,d(Rt.el),I(Rt),E,Z,K),g.el=pt.el,wt===null&&xg(E,pt.el),J&&sn(J,Z),(yt=g.props&&g.props.onVnodeUpdated)&&sn(()=>zn(yt,rt,g,nt),Z)}else{let g;const{el:O,props:J}=P,{bm:rt,m:nt,parent:wt,root:yt,type:pt}=E,Rt=Ur(P);qi(E,!1),rt&&Vo(rt),!Rt&&(g=J&&J.onVnodeBeforeMount)&&zn(g,wt,P),qi(E,!0);{yt.ce&&yt.ce._hasShadowRoot()&&yt.ce._injectChildStyle(pt,E.parent?E.parent.type:void 0);const _t=E.subTree=zu(E);v(null,_t,B,S,E,Z,K),P.el=_t.el}if(nt&&sn(nt,Z),!Rt&&(g=J&&J.onVnodeMounted)){const _t=P;sn(()=>zn(g,wt,_t),Z)}(P.shapeFlag&256||wt&&Ur(wt.vnode)&&wt.vnode.shapeFlag&256)&&E.a&&sn(E.a,Z),E.isMounted=!0,P=B=S=null}};E.scope.on();const q=E.effect=new Wf(st);E.scope.off();const y=E.update=q.run.bind(q),x=E.job=q.runIfDirty.bind(q);x.i=E,x.id=E.uid,q.scheduler=()=>Jc(x),qi(E,!0),y()},k=(E,P,B)=>{P.component=E;const S=E.vnode.props;E.vnode=P,E.next=null,Mg(E,P.props,S,B),Tg(E,P.children,B),qn(),uh(E),jn()},G=(E,P,B,S,Z,K,it,st,q=!1)=>{const y=E&&E.children,x=E?E.shapeFlag:0,g=P.children,{patchFlag:O,shapeFlag:J}=P;if(O>0){if(O&128){L(y,g,B,S,Z,K,it,st,q);return}else if(O&256){ft(y,g,B,S,Z,K,it,st,q);return}}J&8?(x&16&&xt(y,Z,K),g!==y&&u(B,g)):x&16?J&16?L(y,g,B,S,Z,K,it,st,q):xt(y,Z,K,!0):(x&8&&u(B,""),J&16&&H(g,B,S,Z,K,it,st,q))},ft=(E,P,B,S,Z,K,it,st,q)=>{E=E||as,P=P||as;const y=E.length,x=P.length,g=Math.min(y,x);let O;for(O=0;O<g;O++){const J=P[O]=q?di(P[O]):Hn(P[O]);v(E[O],J,B,null,Z,K,it,st,q)}y>x?xt(E,Z,K,!0,!1,g):H(P,B,S,Z,K,it,st,q,g)},L=(E,P,B,S,Z,K,it,st,q)=>{let y=0;const x=P.length;let g=E.length-1,O=x-1;for(;y<=g&&y<=O;){const J=E[y],rt=P[y]=q?di(P[y]):Hn(P[y]);if(hr(J,rt))v(J,rt,B,null,Z,K,it,st,q);else break;y++}for(;y<=g&&y<=O;){const J=E[g],rt=P[O]=q?di(P[O]):Hn(P[O]);if(hr(J,rt))v(J,rt,B,null,Z,K,it,st,q);else break;g--,O--}if(y>g){if(y<=O){const J=O+1,rt=J<x?P[J].el:S;for(;y<=O;)v(null,P[y]=q?di(P[y]):Hn(P[y]),B,rt,Z,K,it,st,q),y++}}else if(y>O)for(;y<=g;)ut(E[y],Z,K,!0),y++;else{const J=y,rt=y,nt=new Map;for(y=rt;y<=O;y++){const It=P[y]=q?di(P[y]):Hn(P[y]);It.key!=null&&nt.set(It.key,y)}let wt,yt=0;const pt=O-rt+1;let Rt=!1,_t=0;const bt=new Array(pt);for(y=0;y<pt;y++)bt[y]=0;for(y=J;y<=g;y++){const It=E[y];if(yt>=pt){ut(It,Z,K,!0);continue}let Mt;if(It.key!=null)Mt=nt.get(It.key);else for(wt=rt;wt<=O;wt++)if(bt[wt-rt]===0&&hr(It,P[wt])){Mt=wt;break}Mt===void 0?ut(It,Z,K,!0):(bt[Mt-rt]=y+1,Mt>=_t?_t=Mt:Rt=!0,v(It,P[Mt],B,null,Z,K,it,st,q),yt++)}const Nt=Rt?Rg(bt):as;for(wt=Nt.length-1,y=pt-1;y>=0;y--){const It=rt+y,Mt=P[It],kt=P[It+1],Ut=It+1<x?kt.el||Gl(kt):S;bt[y]===0?v(null,Mt,B,Ut,Z,K,it,st,q):Rt&&(wt<0||y!==Nt[wt]?D(Mt,B,Ut,2):wt--)}}},D=(E,P,B,S,Z=null)=>{const{el:K,type:it,transition:st,children:q,shapeFlag:y}=E;if(y&6){D(E.component.subTree,P,B,S);return}if(y&128){E.suspense.move(P,B,S);return}if(y&64){it.move(E,P,B,et);return}if(it===Ne){i(K,P,B);for(let g=0;g<q.length;g++)D(q[g],P,B,S);i(E.anchor,P,B);return}if(it===Go){w(E,P,B);return}if(S!==2&&y&1&&st)if(S===0)st.persisted&&!K[Ha]?i(K,P,B):(st.beforeEnter(K),i(K,P,B),sn(()=>st.enter(K),Z));else{const{leave:g,delayLeave:O,afterLeave:J}=st,rt=()=>{E.ctx.isUnmounted?s(K):i(K,P,B)},nt=()=>{const wt=K._isLeaving||!!K[Ha];K._isLeaving&&K[Ha](!0),st.persisted&&!wt?rt():g(K,()=>{rt(),J&&J()})};O?O(K,rt,nt):nt()}else i(K,P,B)},ut=(E,P,B,S=!1,Z=!1)=>{const{type:K,props:it,ref:st,children:q,dynamicChildren:y,shapeFlag:x,patchFlag:g,dirs:O,cacheIndex:J,memo:rt}=E;if((g===-2||y&&y.hasOnce)&&(Z=!1),st!=null&&(qn(),Ir(st,null,B,E,!0),jn()),J!=null&&(!E.ctx||E.ctx===P)&&(P.renderCache[J]=void 0),x&256){P.ctx.deactivate(E);return}const nt=x&1&&O,wt=!Ur(E);let yt;if(wt&&(yt=it&&it.onVnodeBeforeUnmount)&&zn(yt,P,E),x&6)ct(E.component,B,S);else{if(x&128){E.suspense.unmount(B,S);return}nt&&Yi(E,null,P,"beforeUnmount"),x&64?E.type.remove(E,P,B,et,S):y&&!y.hasOnce&&(K!==Ne||g>0&&g&64)?xt(y,P,B,!1,!0):(K===Ne&&g&384||!Z&&x&16)&&xt(q,P,B),S&&Tt(E)}const pt=rt!=null&&J==null;(wt&&(yt=it&&it.onVnodeUnmounted)||nt||pt)&&sn(()=>{yt&&zn(yt,P,E),nt&&Yi(E,null,P,"unmounted"),pt&&(E.el=null)},B)},Tt=E=>{const{type:P,el:B,anchor:S,transition:Z}=E,K=P===Ne;if(K&&!Z){j(B,S);return}if(P===Go){b(E),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave();return}const it=K?Bl(E):E,st=()=>{K?d(B)&&j(B,S):s(B),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(it&&it.shapeFlag&1&&Z&&!Z.persisted){const{leave:q,delayLeave:y}=Z,x=it.el,g=()=>q(x,st);y?y(x,st,g):g()}else st()},j=(E,P)=>{let B;for(;E!==P;)B=f(E),s(E),E=B;s(P)},ct=(E,P,B)=>{const{bum:S,scope:Z,job:K,subTree:it,um:st,m:q,a:y}=E;Hu(q),Hu(y),S&&Vo(S),Z.stop(),K?(K.flags|=8,ut(it,E,P,B)):E.vnode.el&&it&&(it.transition=E.vnode.transition,ut(it,E,P,B)),st&&sn(st,P),sn(()=>{E.isUnmounted=!0},P)},xt=(E,P,B,S=!1,Z=!1,K=0)=>{for(let it=K;it<E.length;it++)ut(E[it],P,B,S,Z)},I=E=>{if(E.shapeFlag&6)return I(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const P=f(E.anchor||E.el),B=P&&P[Gm];return B?f(B):P},Q=(E,P,B)=>{const S=E&&P._vnode?void 0:E&&E.component?E.component.uid:Ng();zm(()=>{E==null?P._vnode&&ut(P._vnode,null,null,!0):v(P._vnode||null,E,P,null,null,null,B),P._vnode=E},S)},et={p:v,um:ut,m:D,r:Tt,mt,mc:H,pc:G,pbc:T,n:I,o:n};return{render:Q,hydrate:void 0,createApp:fg(Q)}}function Wa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Cg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Nh(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Nh(o,a)),a.type===Ta&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function Rg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Oh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Oh(t)}function Hu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Gl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Gl(t.subTree):null}const Fh=n=>n.__isSuspense;function Pg(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):Bm(n)}const Ne=Symbol.for("v-fgt"),Ta=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),hs=[];let dn=null;function Ht(n=!1){hs.push(dn=n?null:[])}function Bh(){hs.pop(),dn=hs[hs.length-1]||null}let Vr=1;function sa(n,t=!1){Vr+=n,n<0&&dn&&t&&(dn.hasOnce=!0)}function zh(n){return n.dynamicChildren=Vr>0?dn||as:null,Bh(),Vr>0&&dn&&dn.push(n),n}function Wt(n,t,e,i,s,r){return zh(M(n,t,e,i,s,r,!0))}function nu(n,t,e,i,s){return zh(Le(n,t,e,i,s,!0))}function Hr(n){return n?n.__v_isVNode===!0:!1}function hr(n,t){return n.type===t.type&&n.key===t.key}const kh=({key:n})=>n??null,Wo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||Ge(n)||jt(n)?{i:un,r:n,k:t,f:!!e}:n:null);function M(n,t=null,e=null,i=0,s=null,r=n===Ne?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&kh(t),ref:t&&Wo(t),scopeId:hh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:un};return a?(ra(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),Vr>0&&!o&&dn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dn.push(l),l}const Le=Dg;function Dg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===ig)&&(n=On),Hr(n)){const a=Zs(n,t,!0);return e&&ra(a,e),Vr>0&&!r&&dn&&(a.shapeFlag&6?dn[dn.indexOf(n)]=a:dn.push(a)),a.patchFlag=-2,a}if(Gg(n)&&(n=n.__vccOpts),t){t=Lg(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=ui(a)),ue(l)&&(Kc(l)&&!Gt(l)&&(l=Fe({},l)),t.style=Ze(l))}const o=be(n)?1:Fh(n)?128:Sa(n)?64:ue(n)?4:jt(n)?2:0;return M(n,t,e,i,s,o,r,!0)}function Lg(n){return n?Kc(n)||Rh(n)?Fe({},n):n:null}function Zs(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ig(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kh(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Wo(t)):[r,Wo(t)]:Wo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Ne?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zs(n.ssContent),ssFallback:n.ssFallback&&Zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ea(u,l.clone(u)),u}function zt(n=" ",t=0){return Le(Ta,null,n,t)}function Gr(n,t){const e=Le(Go,null,n);return e.staticCount=t,e}function Oe(n="",t=!1){return t?(Ht(),nu(On,null,n)):Le(On,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Le(On):Gt(n)?Le(Ne,null,n.slice()):Hr(n)?di(n):Le(Ta,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zs(n)}function ra(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ra(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Rh(t)?t._ctx=un:s===3&&un&&(un.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(jt(t)){if(i&65){ra(n,{default:t});return}t={default:t,_ctx:un},e=32}else t=String(t),i&64?(e=16,t=[zt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ig(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ui([t.class,i.class]));else if(s==="style")t.style=Ze([t.style,i.style]);else if(pa(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ma(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function zn(n,t,e,i=null){Nn(n,t,7,[e,i])}const Ug=bh();let Vh=0;function Ng(){return Vh}function Og(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Ug,r={uid:Vh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dh(i,s),emitsOptions:Eh(i,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=pg.bind(null,r),n.ce&&n.ce(r),r}let He=null;const Fg=()=>He||un;let oa,Wr;{const n=xa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oa=t("__VUE_INSTANCE_SETTERS__",e=>He=e),Wr=t("__VUE_SSR_SETTERS__",e=>Xr=e)}const Jr=n=>{const t=He;return oa(n),n.scope.on(),()=>{n.scope.off(),oa(t)}},Gu=()=>{He&&He.scope.off(),oa(null)};function Hh(n){return n.vnode.shapeFlag&4}let Xr=!1;function Bg(n,t=!1,e=!1){t&&Wr(t);const{props:i,children:s}=n.vnode,r=Hh(n);yg(n,i,r,t),Eg(n,s,e||t);const o=r?zg(n,t):void 0;return t&&Wr(!1),o}function zg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rg);const{setup:i}=e;if(i){qn();const s=n.setupContext=i.length>1?Vg(n):null,r=Jr(n),o=jr(i,n,0,[n.props,s]),a=Ff(o);if(jn(),r(),(a||n.sp)&&!Ur(n)&&vh(n),a){if(o.then(Gu,Gu),t)return o.then(l=>{Wr(!0);try{Wu(n,l,t)}finally{Wr(!1)}}).catch(l=>{Ma(l,n,0)});n.asyncDep=o}else Wu(n,o)}else Gh(n)}function Wu(n,t,e){jt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ue(t)&&(n.setupState=ah(t)),Gh(n)}function Gh(n,t,e){const i=n.type;n.render||(n.render=i.render||$n);{const s=Jr(n);qn();try{og(n)}finally{jn(),s()}}}const kg={get(n,t){return Ve(n,"get",""),n[t]}};function Vg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,kg),slots:n.slots,emit:n.emit,expose:t}}function wa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(ah(Cm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Nr)return Nr[e](n)},has(t,e){return e in t||e in Nr}})):n.proxy}function Hg(n,t=!0){return jt(n)?n.displayName||n.name:n.name||t&&n.__name}function Gg(n){return jt(n)&&"__vccOpts"in n}const Ke=(n,t)=>Im(n,t,Xr);function Wh(n,t,e){try{sa(-1);const i=arguments.length;return i===2?ue(t)&&!Gt(t)?Hr(t)?Le(n,null,[t]):Le(n,t):Le(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Hr(e)&&(e=[e]),Le(n,t,e))}finally{sa(1)}}const Wg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Wl;const Xu=typeof window<"u"&&window.trustedTypes;if(Xu)try{Wl=Xu.createPolicy("vue",{createHTML:n=>n})}catch{}const Xh=Wl?n=>Wl.createHTML(n):n=>n,Xg="http://www.w3.org/2000/svg",$g="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,$u=ci&&ci.createElement("template"),Yg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ci.createElementNS(Xg,n):t==="mathml"?ci.createElementNS($g,n):e?ci.createElement(n,{is:e}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{$u.innerHTML=Xh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=$u.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},qg=Symbol("_vtc");function jg(n,t,e){const i=n[qg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const aa=Symbol("_vod"),$h=Symbol("_vsh"),Yu={name:"show",beforeMount(n,{value:t},{transition:e}){n[aa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):pr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),pr(n,!0),i.enter(n)):i.leave(n,()=>{pr(n,!1)}):pr(n,t))},beforeUnmount(n,{value:t}){pr(n,t)}};function pr(n,t){n.style.display=t?n[aa]:"none",n[$h]=!t}const Kg=Symbol(""),Zg=/(?:^|;)\s*display\s*:/;function Jg(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Tr(i,a,"")}else for(const o in t)e[o]==null&&Tr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?t_(n,o,!be(t)&&t?t[o]:void 0,a)||Tr(i,o,a):Tr(i,o,"")}}else if(s){if(t!==e){const o=i[Kg];o&&(e+=";"+o),i.cssText=e,r=Zg.test(e)}}else t&&n.removeAttribute("style");aa in n&&((!s||t!==e)&&(n[aa]=r?i.display:""),n[$h]&&(i.display="none"))}const ao=/\s*!important$/;function Tr(n,t,e){if(Gt(e))e.forEach(i=>Tr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))ao.test(e)?n.setProperty(t,e.replace(ao,""),"important"):n.setProperty(t,e);else{const i=Qg(n,t);ao.test(e)?n.setProperty(_s(i),e.replace(ao,""),"important"):n[i]=e}}const qu=["Webkit","Moz","ms"],Xa={};function Qg(n,t){const e=Xa[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return Xa[t]=i;i=_a(i);for(let s=0;s<qu.length;s++){const r=qu[s]+i;if(r in n)return Xa[t]=r}return t}function t_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const ju="http://www.w3.org/1999/xlink";function Ku(n,t,e,i,s,r=am(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ju,t.slice(6,t.length)):n.setAttributeNS(ju,t,e):e==null||r&&!Vf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Yn(e)?String(e):e)}function Zu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Xh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Vf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function pi(n,t,e,i){n.addEventListener(t,e,i)}function e_(n,t,e,i){n.removeEventListener(t,e,i)}const Ju=Symbol("_vei");function n_(n,t,e,i,s=null){const r=n[Ju]||(n[Ju]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=r_(t);if(i){const c=r[t]=l_(i,s);pi(n,a,c,l)}else o&&(e_(n,a,o,l),r[t]=void 0)}}const i_=/(Once|Passive|Capture)$/,s_=/^on:?(?:Once|Passive|Capture)$/;function r_(n){let t,e;for(;(e=n.match(i_))&&!s_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):_s(n.slice(2)),t]}let $a=0;const o_=Promise.resolve(),a_=()=>$a||(o_.then(()=>$a=0),$a=Date.now());function l_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Gt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Nn(c,t,5,a)}}else Nn(s,t,5,[i])};return e.value=n,e.attached=a_(),e}const Qu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,c_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?jg(n,i,o):t==="style"?Jg(n,e,i):pa(t)?ma(t)||n_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):u_(n,t,i,o))?(Zu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ku(n,t,i,o,r,t!=="value")):n._isVueCE&&(d_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?Zu(n,Qe(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ku(n,t,i,o))};function u_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Qu(t)&&jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qu(t)&&be(e)?!1:t in n}function d_(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(s=>Qe(s)===i):Object.keys(e).some(s=>Qe(s)===i)}const Hi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Vo(t,e):t};function f_(n){n.target.composing=!0}function td(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fn=Symbol("_assign"),lo=Symbol("_initialValue");function Ya(n,t,e){return t&&(n=n.trim()),e&&(n=va(n)),n}const ei={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[lo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[lo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[fn]=Hi(s);const r=i||s.props&&s.props.type==="number";pi(n,t?"change":"input",o=>{o.target.composing||n[fn](Ya(n.value,e,r))}),(e||r)&&pi(n,"change",()=>{n.value=Ya(n.value,e,r)}),t||(pi(n,"compositionstart",f_),pi(n,"compositionend",td),pi(n,"change",td))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[lo];delete n[lo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[fn](Ya(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[fn]=Hi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?va(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},wr={deep:!0,created(n,t,e){n[fn]=Hi(e),pi(n,"change",()=>{const i=n._modelValue,s=Js(n),r=n.checked,o=n[fn];if(Gt(i)){const a=Gc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(yi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Yh(n,r))})},mounted:ed,beforeUpdate(n,t,e){n[fn]=Hi(e),ed(n,t,e)}};function ed(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Gt(t))s=Gc(t,i.props.value)>-1;else if(yi(t))s=t.has(i.props.value);else{if(t===e)return;s=Un(t,Yh(n,!0))}n.checked!==s&&(n.checked=s)}const nd={created(n,{value:t},e){n.checked=Un(t,e.props.value),n[fn]=Hi(e),pi(n,"change",()=>{n[fn](Js(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[fn]=Hi(i),t!==e&&(n.checked=Un(t,i.props.value))}},Xl={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?va(Js(l)):Js(l)),r=n.multiple,o=r?yi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Gt(o)?s.slice():s:o];try{n[fn](o)}finally{Zc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[fn]=Hi(i)},mounted(n,{value:t}){id(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[fn]=Hi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!h_(t,e[1],e[0]))&&id(n,t)}};function h_(n,t,e){if(!e||Gt(n))return Un(n,t);if(yi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function id(n,t){const e=n.multiple,i=Gt(t);if(!(e&&!i&&!yi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Js(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Gc(t,a)>-1}else o.selected=t.has(a);else if(Un(Js(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Js(n){return"_value"in n?n._value:n.value}function Yh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const p_=["ctrl","shift","alt","meta"],m_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>p_.some(e=>n[`${e}Key`]&&!t.includes(e))},is=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=m_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},g_=Fe({patchProp:c_},Yg);let sd;function __(){return sd||(sd=wg(g_))}const v_=(...n)=>{const t=__().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=y_(i);if(!s)return;const r=t._component;!jt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,x_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function x_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function y_(n){return be(n)?document.querySelector(n):n}const qh=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},M_={};function S_(n,t){const e=yh("router-view");return Ht(),nu(e)}const b_=qh(M_,[["render",S_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Vs=typeof document<"u";function jh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function E_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&jh(n.default)}const oe=Object.assign;function qa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Fn(s)?s.map(n):n(s)}return e}const Or=()=>{},Fn=Array.isArray;function rd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Kh=/#/g,T_=/&/g,w_=/\//g,A_=/=/g,C_=/\?/g,Zh=/\+/g,R_=/%5B/g,P_=/%5D/g,Jh=/%5E/g,D_=/%60/g,Qh=/%7B/g,L_=/%7C/g,tp=/%7D/g,I_=/%20/g;function iu(n){return n==null?"":encodeURI(""+n).replace(L_,"|").replace(R_,"[").replace(P_,"]")}function U_(n){return iu(n).replace(Qh,"{").replace(tp,"}").replace(Jh,"^")}function $l(n){return iu(n).replace(Zh,"%2B").replace(I_,"+").replace(Kh,"%23").replace(T_,"%26").replace(D_,"`").replace(Qh,"{").replace(tp,"}").replace(Jh,"^")}function N_(n){return $l(n).replace(A_,"%3D")}function O_(n){return iu(n).replace(Kh,"%23").replace(C_,"%3F")}function F_(n){return O_(n).replace(w_,"%2F")}function $r(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const B_=/\/$/,z_=n=>n.replace(B_,"");function ja(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=G_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:$r(o)}}function k_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function od(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function V_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Qs(t.matched[i],e.matched[s])&&ep(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Qs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ep(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!H_(n[e],t[e]))return!1;return!0}function H_(n,t){return Fn(n)?ad(n,t):Fn(t)?ad(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function ad(n,t){return Fn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function G_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Yl=function(n){return n.pop="pop",n.push="push",n}({}),Ka=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function W_(n){if(!n)if(Vs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),z_(n)}const X_=/^[^#]+#/;function $_(n,t){return n.replace(X_,"#")+t}function Y_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Aa=()=>({left:window.scrollX,top:window.scrollY});function q_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Y_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ld(n,t){return(history.state?history.state.position-t:-1)+n}const ql=new Map;function j_(n,t){ql.set(n,t)}function K_(n){const t=ql.get(n);return ql.delete(n),t}function Z_(n){return typeof n=="string"||n&&typeof n=="object"}function np(n){return typeof n=="string"||typeof n=="symbol"}let Me=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const ip=Symbol("");Me.MATCHER_NOT_FOUND+"",Me.NAVIGATION_GUARD_REDIRECT+"",Me.NAVIGATION_ABORTED+"",Me.NAVIGATION_CANCELLED+"",Me.NAVIGATION_DUPLICATED+"";function tr(n,t){return oe(new Error,{type:n,[ip]:!0},t)}function ni(n,t){return n instanceof Error&&ip in n&&(t==null||!!(n.type&t))}const J_=["params","query","hash"];function Q_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of J_)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function tv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Zh," "),r=s.indexOf("="),o=$r(r<0?s:s.slice(0,r)),a=r<0?null:$r(s.slice(r+1));if(o in t){let l=t[o];Fn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function cd(n){let t="";for(let e in n){const i=n[e];if(e=N_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Fn(i)?i.map(s=>s&&$l(s)):[i&&$l(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function ev(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const nv=Symbol(""),ud=Symbol(""),Ca=Symbol(""),su=Symbol(""),jl=Symbol("");function mr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Ii(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(tr(Me.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):Z_(f)?l(tr(Me.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Za(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(jh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ii(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=E_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Ii(f,e,i,o,a,s)()}))}}return r}function iv(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Qs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Qs(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sv=()=>location.protocol+"//"+location.host;function sp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),od(a,"")}return od(e,n)+i+s}function rv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=sp(n,location),_=e.value,v=t.value;let m=0;if(f){if(e.value=h,t.value=f,o&&o===_){o=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(e.value,_,{delta:m,type:Yl.pop,direction:m?m>0?Ka.forward:Ka.back:Ka.unknown})})};function l(){o=e.value}function c(f){s.push(f);const h=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(oe({},f.state,{scroll:Aa()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function dd(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Aa():null}}function ov(n){const{history:t,location:e}=window,i={value:sp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:sv()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),e[u?"replace":"assign"](f)}}function o(l,c){r(l,oe({},t.state,dd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=oe({},s.value,t.state,{forward:l,scroll:Aa()});r(u.current,u,!0),r(l,oe({},dd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function av(n){n=W_(n);const t=ov(n),e=rv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=oe({location:"",base:n,go:i,createHref:$_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function lv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),av(n)}let ls=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ce=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ce||{});const cv={type:ls.Static,value:""},uv=/[a-zA-Z0-9_]/;function dv(n){if(!n)return[[]];if(n==="/")return[[cv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=Ce.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ce.Static?r.push({type:ls.Static,value:c}):e===Ce.Param||e===Ce.ParamRegExp||e===Ce.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ls.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ce.ParamRegExp){i=e,e=Ce.EscapeNext;continue}switch(e){case Ce.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ce.Param):f();break;case Ce.EscapeNext:f(),e=i;break;case Ce.Param:l==="("?e=Ce.ParamRegExp:uv.test(l)?f():(d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ce.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ce.ParamRegExpEnd:u+=l;break;case Ce.ParamRegExpEnd:d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const fd="[^/]+?",fv={sensitive:!1,strict:!1,start:!0,end:!0};var Ye=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ye||{});const hv=/[.+*?^${}()[\]/\\]/g;function pv(n,t){const e=oe({},fv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Ye.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Ye.Segment+(e.sensitive?Ye.BonusCaseSensitive:0);if(f.type===ls.Static)d||(s+="/"),s+=f.value.replace(hv,"\\$&"),h+=Ye.Static;else if(f.type===ls.Param){const{value:_,repeatable:v,optional:m,regexp:p}=f;r.push({name:_,repeatable:v,optional:m});const R=p||fd;if(R!==fd){h+=Ye.BonusCustomRegExp;try{`${R}`}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+b.message)}}let w=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(w=m&&c.length<2?`(?:/${w})`:"/"+w),m&&(w+="?"),s+=w,h+=Ye.Dynamic,m&&(h+=Ye.BonusOptional),v&&(h+=Ye.BonusRepeatable),R===".*"&&(h+=Ye.BonusWildcard)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Ye.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=r[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===ls.Static)u+=h.value;else if(h.type===ls.Param){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(Fn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=Fn(p)?p.join("/"):p;if(!R)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function mv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ye.Static+Ye.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ye.Static+Ye.Segment?1:-1:0}function rp(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=mv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(hd(i))return 1;if(hd(s))return-1}return s.length-i.length}function hd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const gv={strict:!1,end:!0,sensitive:!1};function _v(n,t,e){const i=pv(dv(n.path),e),s=oe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function vv(n,t){const e=[],i=new Map;t=rd(gv,t);function s(d){return i.get(d)}function r(d,f,h){const _=!h,v=md(d);v.aliasOf=h&&h.record;const m=rd(t,d),p=[v];if("alias"in d){const b=typeof d.alias=="string"?[d.alias]:d.alias;for(const F of b)p.push(md(oe({},v,{components:h?h.record.components:v.components,path:F,aliasOf:h?h.record:v})))}let R,w;for(const b of p){const{path:F}=b;if(f&&F[0]!=="/"){const z=f.record.path,U=z[z.length-1]==="/"?"":"/";b.path=f.record.path+(F&&U+F)}if(R=_v(b,f,m),h?h.alias.push(R):(w=w||R,w!==R&&w.alias.push(R),_&&d.name&&!gd(R)&&o(d.name)),op(R)&&l(R),v.children){const z=v.children;for(let U=0;U<z.length;U++)r(z[U],R,h&&h.children[U])}h=h||R}return w?()=>{o(w)}:Or}function o(d){if(np(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Mv(d,e);e.splice(f,0,d),d.record.name&&!gd(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw tr(Me.MATCHER_NOT_FOUND,{location:d});m=h.record.name,_=oe(pd(f.params,h.keys.filter(w=>!w.optional).concat(h.parent?h.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&pd(d.params,h.keys.map(w=>w.name))),v=h.stringify(_)}else if(d.path!=null)v=d.path,h=e.find(w=>w.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):e.find(w=>w.re.test(f.path)),!h)throw tr(Me.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,_=oe({},f.params,d.params),v=h.stringify(_)}const p=[];let R=h;for(;R;)p.unshift(R.record),R=R.parent;return{name:m,path:v,params:_,matched:p,meta:yv(p)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function pd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function md(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:xv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function gd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function yv(n){return n.reduce((t,e)=>oe(t,e.meta),{})}function Mv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;rp(n,t[r])<0?i=r:e=r+1}const s=Sv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Sv(n){let t=n;for(;t=t.parent;)if(op(t)&&rp(n,t)===0)return t}function op({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function _d(n){const t=Dn(Ca),e=Dn(su),i=Ke(()=>{const l=Ee(n.to);return t.resolve(l)}),s=Ke(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(Qs.bind(null,u));if(f>-1)return f;const h=vd(l[c-2]);return c>1&&vd(u)===h&&d[d.length-1].path!==h?d.findIndex(Qs.bind(null,l[c-2])):f}),r=Ke(()=>s.value>-1&&Av(e.params,i.value.params)),o=Ke(()=>s.value>-1&&s.value===e.matched.length-1&&ep(e.params,i.value.params));function a(l={}){if(wv(l)){const c=t[Ee(n.replace)?"replace":"push"](Ee(n.to)).catch(Or);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ke(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function bv(n){return n.length===1?n[0]:n}const Ev=Xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_d,setup(n,{slots:t}){const e=Fi(_d(n)),{options:i}=Dn(Ca),s=Ke(()=>({[xd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[xd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&bv(t.default(e));return n.custom?r:Wh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Tv=Ev;function wv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Av(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Fn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function vd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const xd=(n,t,e)=>n??t??e,Cv=Xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Dn(jl),s=Ke(()=>n.route||i.value),r=Dn(ud,0),o=Ke(()=>{let c=Ee(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ke(()=>s.value.matched[o.value]);Ho(ud,Ke(()=>o.value+1)),Ho(nv,a),Ho(jl,s);const l=ce();return fs(()=>[l.value,a.value,n.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Qs(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return yd(e.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Wh(f,oe({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return yd(e.default,{Component:m,route:c})||m}}});function yd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Rv=Cv;function Pv(n){const t=vv(n.routes,n),e=n.parseQuery||tv,i=n.stringifyQuery||cd,s=n.history,r=mr(),o=mr(),a=mr(),l=Rm(Ti);let c=Ti;Vs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,I=>""+I),d=qa.bind(null,F_),f=qa.bind(null,$r);function h(I,Q){let et,gt;return np(I)?(et=t.getRecordMatcher(I),gt=Q):gt=I,t.addRoute(gt,et)}function _(I){const Q=t.getRecordMatcher(I);Q&&t.removeRoute(Q)}function v(){return t.getRoutes().map(I=>I.record)}function m(I){return!!t.getRecordMatcher(I)}function p(I,Q){if(Q=oe({},Q||l.value),typeof I=="string"){const S=ja(e,I,Q.path),Z=t.resolve({path:S.path},Q),K=s.createHref(S.fullPath);return oe(S,Z,{params:f(Z.params),hash:$r(S.hash),redirectedFrom:void 0,href:K})}let et;if(I.path!=null)et=oe({},I,{path:ja(e,I.path,Q.path).path});else{const S=oe({},I.params);for(const Z in S)S[Z]==null&&delete S[Z];et=oe({},I,{params:d(S)}),Q.params=d(Q.params)}const gt=t.resolve(et,Q),E=I.hash||"";gt.params=u(f(gt.params));const P=k_(i,oe({},I,{hash:U_(E),path:gt.path})),B=s.createHref(P);return oe({fullPath:P,hash:E,query:i===cd?ev(I.query):I.query||{}},gt,{redirectedFrom:void 0,href:B})}function R(I){return typeof I=="string"?ja(e,I,l.value.path):oe({},I)}function w(I,Q){if(c!==I)return tr(Me.NAVIGATION_CANCELLED,{from:Q,to:I})}function b(I){return U(I)}function F(I){return b(oe(R(I),{replace:!0}))}function z(I,Q){const et=I.matched[I.matched.length-1];if(et&&et.redirect){const{redirect:gt}=et;let E=typeof gt=="function"?gt(I,Q):gt;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=R(E):{path:E},E.params={}),oe({query:I.query,hash:I.hash,params:E.path!=null?{}:I.params},E)}}function U(I,Q){const et=c=p(I),gt=l.value,E=I.state,P=I.force,B=I.replace===!0,S=z(et,gt);if(S)return U(oe(R(S),{state:typeof S=="object"?oe({},E,S.state):E,force:P,replace:B}),Q||et);const Z=et;Z.redirectedFrom=Q;let K;return!P&&V_(i,gt,et)&&(K=tr(Me.NAVIGATION_DUPLICATED,{to:Z,from:gt}),D(gt,gt,!0,!1)),(K?Promise.resolve(K):T(Z,gt)).catch(it=>ni(it)?ni(it,Me.NAVIGATION_GUARD_REDIRECT)?it:L(it):G(it,Z,gt)).then(it=>{if(it){if(ni(it,Me.NAVIGATION_GUARD_REDIRECT))return U(oe({replace:B},R(it.to),{state:typeof it.to=="object"?oe({},E,it.to.state):E,force:P}),Q||Z)}else it=lt(Z,gt,!0,B,E);return N(Z,gt,it),it})}function H(I,Q){const et=w(I,Q);return et?Promise.reject(et):Promise.resolve()}function C(I){const Q=j.values().next().value;return Q&&typeof Q.runWithContext=="function"?Q.runWithContext(I):I()}function T(I,Q){let et;const[gt,E,P]=iv(I,Q);et=Za(gt.reverse(),"beforeRouteLeave",I,Q);for(const S of gt)S.leaveGuards.forEach(Z=>{et.push(Ii(Z,I,Q))});const B=H.bind(null,I,Q);return et.push(B),xt(et).then(()=>{et=[];for(const S of r.list())et.push(Ii(S,I,Q));return et.push(B),xt(et)}).then(()=>{et=Za(E,"beforeRouteUpdate",I,Q);for(const S of E)S.updateGuards.forEach(Z=>{et.push(Ii(Z,I,Q))});return et.push(B),xt(et)}).then(()=>{et=[];for(const S of P)if(S.beforeEnter)if(Fn(S.beforeEnter))for(const Z of S.beforeEnter)et.push(Ii(Z,I,Q));else et.push(Ii(S.beforeEnter,I,Q));return et.push(B),xt(et)}).then(()=>(I.matched.forEach(S=>S.enterCallbacks={}),et=Za(P,"beforeRouteEnter",I,Q,C),et.push(B),xt(et))).then(()=>{et=[];for(const S of o.list())et.push(Ii(S,I,Q));return et.push(B),xt(et)}).catch(S=>ni(S,Me.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function N(I,Q,et){a.list().forEach(gt=>C(()=>gt(I,Q,et)))}function lt(I,Q,et,gt,E){const P=w(I,Q);if(P)return P;const B=Q===Ti,S=Vs?history.state:{};et&&(gt||B?s.replace(I.fullPath,oe({scroll:B&&S&&S.scroll},E)):s.push(I.fullPath,E)),l.value=I,D(I,Q,et,B),L()}let tt;function mt(){tt||(tt=s.listen((I,Q,et)=>{if(!ct.listening)return;const gt=p(I),E=z(gt,ct.currentRoute.value);if(E){U(oe(E,{replace:!0,force:!0}),gt).catch(Or);return}c=gt;const P=l.value;Vs&&j_(ld(P.fullPath,et.delta),Aa()),T(gt,P).catch(B=>ni(B,Me.NAVIGATION_ABORTED|Me.NAVIGATION_CANCELLED)?B:ni(B,Me.NAVIGATION_GUARD_REDIRECT)?(U(oe(R(B.to),{force:!0}),gt).then(S=>{ni(S,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&!et.delta&&et.type===Yl.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):(et.delta&&s.go(-et.delta,!1),G(B,gt,P))).then(B=>{B=B||lt(gt,P,!1),B&&(et.delta&&!ni(B,Me.NAVIGATION_CANCELLED)?s.go(-et.delta,!1):et.type===Yl.pop&&ni(B,Me.NAVIGATION_ABORTED|Me.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(gt,P,B)}).catch(Or)}))}let ht=mr(),W=mr(),k;function G(I,Q,et){L(I);const gt=W.list();return gt.length?gt.forEach(E=>E(I,Q,et)):console.error(I),Promise.reject(I)}function ft(){return k&&l.value!==Ti?Promise.resolve():new Promise((I,Q)=>{ht.add([I,Q])})}function L(I){return k||(k=!I,mt(),ht.list().forEach(([Q,et])=>I?et(I):Q()),ht.reset()),I}function D(I,Q,et,gt){const{scrollBehavior:E}=n;if(!Vs||!E)return Promise.resolve();const P=!et&&K_(ld(I.fullPath,0))||(gt||!et)&&history.state&&history.state.scroll||null;return Zc().then(()=>E(I,Q,P)).then(B=>B&&q_(B)).catch(B=>G(B,I,Q))}const ut=I=>s.go(I);let Tt;const j=new Set,ct={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:b,replace:F,go:ut,back:()=>ut(-1),forward:()=>ut(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:ft,install(I){I.component("RouterLink",Tv),I.component("RouterView",Rv),I.config.globalProperties.$router=ct,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(l)}),Vs&&!Tt&&l.value===Ti&&(Tt=!0,b(s.location).catch(gt=>{}));const Q={};for(const gt in Ti)Object.defineProperty(Q,gt,{get:()=>l.value[gt],enumerable:!0});I.provide(Ca,ct),I.provide(su,rh(Q)),I.provide(jl,l);const et=I.unmount;j.add(I),I.unmount=function(){j.delete(I),j.size<1&&(c=Ti,tt&&tt(),tt=null,l.value=Ti,Tt=!1,k=!1),et()}}};function xt(I){return I.reduce((Q,et)=>Q.then(()=>C(et)),Promise.resolve())}return ct}function Dv(){return Dn(Ca)}function Lv(n){return Dn(su)}var ru={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var L=new OffscreenCanvas(1,1),D=L.getContext("2d");D.fillRect(0,0,1,1);var ut=L.transferToImageBitmap();D.createPattern(ut,"no-repeat")}catch{return!1}return!0}();function l(){}function c(L){var D=e.exports.Promise,ut=D!==void 0?D:t.Promise;return typeof ut=="function"?new ut(L):(L(l,l),null)}var u=function(L,D){return{transform:function(ut){if(L)return ut;if(D.has(ut))return D.get(ut);var Tt=new OffscreenCanvas(ut.width,ut.height),j=Tt.getContext("2d");return j.drawImage(ut,0,0),D.set(ut,Tt),Tt},clear:function(){D.clear()}}}(a,new Map),d=function(){var L=Math.floor(16.666666666666668),D,ut,Tt={},j=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(ct){var xt=Math.random();return Tt[xt]=requestAnimationFrame(function I(Q){j===Q||j+L-1<Q?(j=Q,delete Tt[xt],ct()):Tt[xt]=requestAnimationFrame(I)}),xt},ut=function(ct){Tt[ct]&&cancelAnimationFrame(Tt[ct])}):(D=function(ct){return setTimeout(ct,L)},ut=function(ct){return clearTimeout(ct)}),{frame:D,cancel:ut}}(),f=function(){var L,D,ut={};function Tt(j){function ct(xt,I){j.postMessage({options:xt||{},callback:I})}j.init=function(I){var Q=I.transferControlToOffscreen();j.postMessage({canvas:Q},[Q])},j.fire=function(I,Q,et){if(D)return ct(I,null),D;var gt=Math.random().toString(36).slice(2);return D=c(function(E){function P(B){B.data.callback===gt&&(delete ut[gt],j.removeEventListener("message",P),D=null,u.clear(),et(),E())}j.addEventListener("message",P),ct(I,gt),ut[gt]=P.bind(null,{data:{callback:gt}})}),D},j.reset=function(){j.postMessage({reset:!0});for(var I in ut)ut[I](),delete ut[I]}}return function(){if(L)return L;if(!i&&r){var j=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{L=new Worker(URL.createObjectURL(new Blob([j])))}catch(ct){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ct),null}Tt(L)}return L}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(L,D){return D?D(L):L}function v(L){return L!=null}function m(L,D,ut){return _(L&&v(L[D])?L[D]:h[D],ut)}function p(L){return L<0?0:Math.floor(L)}function R(L,D){return Math.floor(Math.random()*(D-L))+L}function w(L){return parseInt(L,16)}function b(L){return L.map(F)}function F(L){var D=String(L).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:w(D.substring(0,2)),g:w(D.substring(2,4)),b:w(D.substring(4,6))}}function z(L){var D=m(L,"origin",Object);return D.x=m(D,"x",Number),D.y=m(D,"y",Number),D}function U(L){L.width=document.documentElement.clientWidth,L.height=document.documentElement.clientHeight}function H(L){var D=L.getBoundingClientRect();L.width=D.width,L.height=D.height}function C(L){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=L,D}function T(L,D,ut,Tt,j,ct,xt,I,Q){L.save(),L.translate(D,ut),L.rotate(ct),L.scale(Tt,j),L.arc(0,0,1,xt,I,Q),L.restore()}function N(L){var D=L.angle*(Math.PI/180),ut=L.spread*(Math.PI/180);return{x:L.x,y:L.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:L.startVelocity*.5+Math.random()*L.startVelocity,angle2D:-D+(.5*ut-Math.random()*ut),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:L.color,shape:L.shape,tick:0,totalTicks:L.ticks,decay:L.decay,drift:L.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:L.gravity*3,ovalScalar:.6,scalar:L.scalar,flat:L.flat}}function lt(L,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var ut=D.tick++/D.totalTicks,Tt=D.x+D.random*D.tiltCos,j=D.y+D.random*D.tiltSin,ct=D.wobbleX+D.random*D.tiltCos,xt=D.wobbleY+D.random*D.tiltSin;if(L.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-ut)+")",L.beginPath(),o&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))L.fill(k(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(ct-Tt)*.1,Math.abs(xt-j)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var I=Math.PI/10*D.wobble,Q=Math.abs(ct-Tt)*.1,et=Math.abs(xt-j)*.1,gt=D.shape.bitmap.width*D.scalar,E=D.shape.bitmap.height*D.scalar,P=new DOMMatrix([Math.cos(I)*Q,Math.sin(I)*Q,-Math.sin(I)*et,Math.cos(I)*et,D.x,D.y]);P.multiplySelf(new DOMMatrix(D.shape.matrix));var B=L.createPattern(u.transform(D.shape.bitmap),"no-repeat");B.setTransform(P),L.globalAlpha=1-ut,L.fillStyle=B,L.fillRect(D.x-gt/2,D.y-E/2,gt,E),L.globalAlpha=1}else if(D.shape==="circle")L.ellipse?L.ellipse(D.x,D.y,Math.abs(ct-Tt)*D.ovalScalar,Math.abs(xt-j)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):T(L,D.x,D.y,Math.abs(ct-Tt)*D.ovalScalar,Math.abs(xt-j)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var S=Math.PI/2*3,Z=4*D.scalar,K=8*D.scalar,it=D.x,st=D.y,q=5,y=Math.PI/q;q--;)it=D.x+Math.cos(S)*K,st=D.y+Math.sin(S)*K,L.lineTo(it,st),S+=y,it=D.x+Math.cos(S)*Z,st=D.y+Math.sin(S)*Z,L.lineTo(it,st),S+=y;else L.moveTo(Math.floor(D.x),Math.floor(D.y)),L.lineTo(Math.floor(D.wobbleX),Math.floor(j)),L.lineTo(Math.floor(ct),Math.floor(xt)),L.lineTo(Math.floor(Tt),Math.floor(D.wobbleY));return L.closePath(),L.fill(),D.tick<D.totalTicks}function tt(L,D,ut,Tt,j){var ct=D.slice(),xt=L.getContext("2d"),I,Q,et=c(function(gt){function E(){I=Q=null,xt.clearRect(0,0,Tt.width,Tt.height),u.clear(),j(),gt()}function P(){i&&!(Tt.width===s.width&&Tt.height===s.height)&&(Tt.width=L.width=s.width,Tt.height=L.height=s.height),!Tt.width&&!Tt.height&&(ut(L),Tt.width=L.width,Tt.height=L.height),xt.clearRect(0,0,Tt.width,Tt.height),ct=ct.filter(function(B){return lt(xt,B)}),ct.length?I=d.frame(P):E()}I=d.frame(P),Q=E});return{addFettis:function(gt){return ct=ct.concat(gt),et},canvas:L,promise:et,reset:function(){I&&d.cancel(I),Q&&Q()}}}function mt(L,D){var ut=!L,Tt=!!m(D||{},"resize"),j=!1,ct=m(D,"disableForReducedMotion",Boolean),xt=r&&!!m(D||{},"useWorker"),I=xt?f():null,Q=ut?U:H,et=L&&I?!!L.__confetti_initialized:!1,gt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,E;function P(S,Z,K){for(var it=m(S,"particleCount",p),st=m(S,"angle",Number),q=m(S,"spread",Number),y=m(S,"startVelocity",Number),x=m(S,"decay",Number),g=m(S,"gravity",Number),O=m(S,"drift",Number),J=m(S,"colors",b),rt=m(S,"ticks",Number),nt=m(S,"shapes"),wt=m(S,"scalar"),yt=!!m(S,"flat"),pt=z(S),Rt=it,_t=[],bt=L.width*pt.x,Nt=L.height*pt.y;Rt--;)_t.push(N({x:bt,y:Nt,angle:st,spread:q,startVelocity:y,color:J[Rt%J.length],shape:nt[R(0,nt.length)],ticks:rt,decay:x,gravity:g,drift:O,scalar:wt,flat:yt}));return E?E.addFettis(_t):(E=tt(L,_t,Q,Z,K),E.promise)}function B(S){var Z=ct||m(S,"disableForReducedMotion",Boolean),K=m(S,"zIndex",Number);if(Z&&gt)return c(function(y){y()});ut&&E?L=E.canvas:ut&&!L&&(L=C(K),document.body.appendChild(L)),Tt&&!et&&Q(L);var it={width:L.width,height:L.height};I&&!et&&I.init(L),et=!0,I&&(L.__confetti_initialized=!0);function st(){if(I){var y={getBoundingClientRect:function(){if(!ut)return L.getBoundingClientRect()}};Q(y),I.postMessage({resize:{width:y.width,height:y.height}});return}it.width=it.height=null}function q(){E=null,Tt&&(j=!1,t.removeEventListener("resize",st)),ut&&L&&(document.body.contains(L)&&document.body.removeChild(L),L=null,et=!1)}return Tt&&!j&&(j=!0,t.addEventListener("resize",st,!1)),I?I.fire(S,it,q):P(S,it,q)}return B.reset=function(){I&&I.reset(),E&&E.reset()},B}var ht;function W(){return ht||(ht=mt(null,{useWorker:!0,resize:!0})),ht}function k(L,D,ut,Tt,j,ct,xt){var I=new Path2D(L),Q=new Path2D;Q.addPath(I,new DOMMatrix(D));var et=new Path2D;return et.addPath(Q,new DOMMatrix([Math.cos(xt)*j,Math.sin(xt)*j,-Math.sin(xt)*ct,Math.cos(xt)*ct,ut,Tt])),et}function G(L){if(!o)throw new Error("path confetti are not supported in this browser");var D,ut;typeof L=="string"?D=L:(D=L.path,ut=L.matrix);var Tt=new Path2D(D),j=document.createElement("canvas"),ct=j.getContext("2d");if(!ut){for(var xt=1e3,I=xt,Q=xt,et=0,gt=0,E,P,B=0;B<xt;B+=2)for(var S=0;S<xt;S+=2)ct.isPointInPath(Tt,B,S,"nonzero")&&(I=Math.min(I,B),Q=Math.min(Q,S),et=Math.max(et,B),gt=Math.max(gt,S));E=et-I,P=gt-Q;var Z=10,K=Math.min(Z/E,Z/P);ut=[K,0,0,K,-Math.round(E/2+I)*K,-Math.round(P/2+Q)*K]}return{type:"path",path:D,matrix:ut}}function ft(L){var D,ut=1,Tt="#000000",j='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof L=="string"?D=L:(D=L.text,ut="scalar"in L?L.scalar:ut,j="fontFamily"in L?L.fontFamily:j,Tt="color"in L?L.color:Tt);var ct=10*ut,xt=""+ct+"px "+j,I=new OffscreenCanvas(ct,ct),Q=I.getContext("2d");Q.font=xt;var et=Q.measureText(D),gt=Math.ceil(et.actualBoundingBoxRight+et.actualBoundingBoxLeft),E=Math.ceil(et.actualBoundingBoxAscent+et.actualBoundingBoxDescent),P=2,B=et.actualBoundingBoxLeft+P,S=et.actualBoundingBoxAscent+P;gt+=P+P,E+=P+P,I=new OffscreenCanvas(gt,E),Q=I.getContext("2d"),Q.font=xt,Q.fillStyle=Tt,Q.fillText(D,B,S);var Z=1/ut;return{type:"bitmap",bitmap:I.transferToImageBitmap(),matrix:[Z,0,0,Z,-gt*Z/2,-E*Z/2]}}e.exports=function(){return W().apply(this,arguments)},e.exports.reset=function(){W().reset()},e.exports.create=mt,e.exports.shapeFromPath=G,e.exports.shapeFromText=ft})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),ru,!1);const Iv=ru.exports;ru.exports.create;const Uv={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},Nv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px"}},Ov={style:{display:"flex","align-items":"center",gap:"14px","font-size":"11px","font-weight":"bold"}},Fv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Bv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},zv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},kv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Md=300,Vv=Xi({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=ce(null),s=ce(null),r=Fi({vin:!0,vout:!0,iin:!0,iout:!0}),o=[];let a=0;function l(d){o.push(d),o.length>Md&&o.shift()}fs(()=>e.latestSample,d=>{d&&l(d)});function c(){const d=s.value;if(!d||!i.value)return;const f=d.width=i.value.clientWidth,h=d.height=i.value.clientHeight,_=d.getContext("2d");if(!_)return;_.fillStyle="#121519",_.fillRect(0,0,f,h);const v=45,m=15,p=15,R=25,w=f-v-m,b=h-p-R;if(w<=10||b<=10)return;_.strokeStyle="#1e2530",_.lineWidth=1,_.setLineDash([3,3]);const F=5;for(let N=0;N<=F;N++){const lt=p+b/F*N;_.beginPath(),_.moveTo(v,lt),_.lineTo(v+w,lt),_.stroke()}const z=8;for(let N=0;N<=z;N++){const lt=v+w/z*N;_.beginPath(),_.moveTo(lt,p),_.lineTo(lt,p+b),_.stroke()}_.setLineDash([]),_.strokeStyle="#2d3748",_.strokeRect(v,p,w,b);let U=15,H=4;o.forEach(N=>{N.vin>U&&(U=N.vin+2),N.vout>U&&(U=N.vout+2),N.iin>H&&(H=N.iin+1),N.iout>H&&(H=N.iout+1)}),_.fillStyle="#718096",_.font="10px Consolas, monospace",_.textAlign="right",_.textBaseline="middle";for(let N=0;N<=F;N++){const lt=p+b/F*N,tt=U-U/F*N;_.fillText(`${tt.toFixed(1)}V`,v-6,lt)}if(o.length<2){_.fillStyle="#4a5568",_.textAlign="center",_.fillText("等待采样数据流...",v+w/2,p+b/2);return}const C=_;function T(N,lt,tt){if(!C)return;C.strokeStyle=lt,C.lineWidth=1.6,C.beginPath();const mt=o.length;for(let ht=0;ht<mt;ht++){const W=v+ht/(Md-1)*w,k=o[ht][N]||0,G=p+b-Math.max(0,k)/tt*b;ht===0?C.moveTo(W,G):C.lineTo(W,G)}C.stroke()}r.vin&&T("vin","#00d2ff",U),r.vout&&T("vout","#ffd166",U),r.iin&&T("iin","#06d6a0",H*(U/H)),r.iout&&T("iout","#ef476f",H*(U/H))}function u(){c(),a=requestAnimationFrame(u)}return Kr(()=>{u()}),Zr(()=>{cancelAnimationFrame(a)}),t({clear(){o.length=0}}),(d,f)=>(Ht(),Wt("div",Uv,[M("div",Nv,[f[8]||(f[8]=M("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[M("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),zt(" 实时参数时域波形 (Real-time Waveforms) ")],-1)),M("div",Ov,[M("label",Fv,[Te(M("input",{type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=h=>r.vin=h)},null,512),[[wr,r.vin]]),f[4]||(f[4]=zt(" Vin (电源电压) ",-1))]),M("label",Bv,[Te(M("input",{type:"checkbox","onUpdate:modelValue":f[1]||(f[1]=h=>r.vout=h)},null,512),[[wr,r.vout]]),f[5]||(f[5]=zt(" Vout (负载电压) ",-1))]),M("label",zv,[Te(M("input",{type:"checkbox","onUpdate:modelValue":f[2]||(f[2]=h=>r.iin=h)},null,512),[[wr,r.iin]]),f[6]||(f[6]=zt(" Iin (电源电流) ",-1))]),M("label",kv,[Te(M("input",{type:"checkbox","onUpdate:modelValue":f[3]||(f[3]=h=>r.iout=h)},null,512),[[wr,r.iout]]),f[7]||(f[7]=zt(" Iout (负载电流) ",-1))])])]),M("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519"}},[M("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512)],512)]))}}),Hv={class:"modal-card",style:{"max-width":"680px"}},Gv={class:"modal-header"},Wv={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},Xv={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},$v={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},Yv={style:{display:"flex","align-items":"center",gap:"8px"}},qv={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},jv={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},Kv={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},Zv={style:{color:"#ecc94b"}},Jv={style:{color:"#63b3ed"}},Qv={style:{color:"#e2e8f0"}},t0={style:{color:"#48bb78"}},e0={style:{display:"flex","align-items":"center",gap:"6px"}},n0=["onClick"],i0=["onClick"],s0=["onClick"],r0={class:"modal-footer"},o0=Xi({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ht(),Wt("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=is(i=>t.$emit("close"),["self"]))},[M("div",Hv,[M("div",Gv,[e[5]||(e[5]=M("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[M("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("circle",{cx:"12",cy:"12",r:"10"}),M("polyline",{points:"12 6 12 12 16 14"})]),zt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),M("div",Wv,[n.records.length===0?(Ht(),Wt("div",Xv," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Oe("",!0),(Ht(!0),Wt(Ne,null,Hs(n.records,i=>{var s,r;return Ht(),Wt("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[M("div",$v,[M("div",Yv,[M("span",qv,Et(i.title),1),M("span",jv,Et(new Date(i.createdAt).toLocaleString()),1)]),M("div",Kv,[M("span",null,[e[6]||(e[6]=zt("电压: ",-1)),M("b",Zv,Et(i.config.voltageMin)+"V ~ "+Et(i.config.voltageMax)+"V",1)]),M("span",null,[e[7]||(e[7]=zt("负载: ",-1)),M("b",Jv,Et(i.config.loadMin)+" ~ "+Et(i.config.loadMax)+" ("+Et(i.config.loadMode)+")",1)]),M("span",null,[e[8]||(e[8]=zt("点数: ",-1)),M("b",Qv,Et(i.points.length),1)]),M("span",null,[e[9]||(e[9]=zt("最高效率: ",-1)),M("b",t0,Et(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),M("div",e0,[M("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),zt(" 进入数据查看 ",-1)])],8,n0),M("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,i0),M("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"3 6 5 6 21 6"}),M("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,s0)])],32)}),128))]),M("div",r0,[M("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Oe("",!0)}}),a0={class:"modal-card",style:{"max-width":"520px"}},l0={class:"modal-header"},c0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},u0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},d0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},f0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},h0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},p0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},m0={style:{display:"flex","align-items":"center",gap:"6px"}},g0=["disabled"],_0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},v0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},x0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},y0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},M0={style:{display:"flex","align-items":"center",gap:"6px"}},S0=["disabled"],b0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},E0={class:"modal-footer"},T0=Xi({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=ce(9600),e=ce(9600);return(i,s)=>n.isOpen?(Ht(),Wt("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=is(r=>i.$emit("close"),["self"]))},[M("div",a0,[M("div",l0,[s[10]||(s[10]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),M("div",c0,[M("div",u0,[s[11]||(s[11]=M("div",null,[M("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),zt(" 内置仿真演示驱动 (Virtual Simulation) ")]),M("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),M("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),M("div",d0,[M("div",f0,[M("span",h0,[M("span",{style:Ze([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=zt(" 直流电源 (RIGOL DP700) ",-1))]),M("span",p0,Et(n.psuPortName),1)]),M("div",m0,[Te(M("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,g0),[[Xl,t.value,void 0,{number:!0}]]),n.psuConnected?(Ht(),Wt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),M("div",_0,[M("div",v0,[M("span",x0,[M("span",{style:Ze([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=zt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),M("span",y0,Et(n.loadPortName),1)]),M("div",M0,[Te(M("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,S0),[[Xl,e.value,void 0,{number:!0}]]),n.loadConnected?(Ht(),Wt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Oe("",!0):(Ht(),Wt("div",b0,[...s[16]||(s[16]=[zt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),M("b",null,"【启用仿真】",-1),zt("无障碍测试。 ",-1)])]))]),M("div",E0,[M("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Oe("",!0)}});class w0{constructor(){Qt(this,"connected",!0);Qt(this,"outputOn",!1);Qt(this,"targetVoltage",5);Qt(this,"currentVoltage",0);Qt(this,"lastVoltage",0);Qt(this,"voltageChangeTime",0);Qt(this,"currentLimit",3);Qt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}}class A0{constructor(){Qt(this,"connected",!0);Qt(this,"inputOn",!1);Qt(this,"mode","CC");Qt(this,"targetCurrent",1);Qt(this,"currentCurrent",0);Qt(this,"lastCurrent",0);Qt(this,"targetPower",10);Qt(this,"currentPower",0);Qt(this,"lastPower",0);Qt(this,"loadChangeTime",0);Qt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}setMode(t){this.mode=t}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if((t??10)<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class Sd{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setOutput(t){return`:OUTP CH1,${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT? CH1
`,`:MEAS:CURR? CH1
`,`:MEAS:POWE? CH1
`]}}class co{static setMode(t){return`:SOUR:FUNC ${t}
`}static setCurrent(t){return`:SOUR:CURR ${t.toFixed(3)}
`}static setPower(t){return`:SOUR:POW ${t.toFixed(3)}
`}static setInput(t){return`:SOUR:INP ${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT?
`,`:MEAS:CURR?
`,`:MEAS:POW?
`]}}class bd{constructor(t){Qt(this,"type");Qt(this,"isVirtual",!0);Qt(this,"port",null);Qt(this,"reader",null);Qt(this,"writer",null);Qt(this,"encoder",null);Qt(this,"decoder",null);Qt(this,"readBuffer","");Qt(this,"isDisconnecting",!1);Qt(this,"onLostCallback",null);Qt(this,"disconnectListener",null);Qt(this,"virtualPsu",new w0);Qt(this,"virtualLoad",new A0);Qt(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");try{await this.writer.write(t)}catch(e){throw this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(e==null?void 0:e.message)||e}`),e}}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const os=class os{constructor(){Qt(this,"psu",new bd("PSU"));Qt(this,"load",new bd("LOAD"));Qt(this,"onDeviceLostListener",null);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason};const e=this.load.checkAlive();return e.alive?{ok:!0}:(this.load.handleDeviceLost(e.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:e.reason})}static getInstance(){return os.instance||(os.instance=new os),os.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(Sd.setVoltageAndLimit(e,i)),await this.psu.write(Sd.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(co.setMode(e)),e==="CC"?await this.load.write(co.setCurrent(i)):await this.load.write(co.setPower(i)),await this.load.write(co.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};Qt(os,"instance");let Kl=os;const C0="PowerChipTesterDB",R0=1,yn="test_runs",ap=5;function Ra(){return new Promise((n,t)=>{const e=indexedDB.open(C0,R0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(yn)||s.createObjectStore(yn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function P0(n){const t=await Ra(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([yn],"readwrite");r.objectStore(yn).put(e),r.oncomplete=async()=>{try{await I0(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function lp(){const n=await Ra();return new Promise((t,e)=>{const o=n.transaction([yn],"readonly").objectStore(yn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<ap?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function D0(n){const t=await Ra();return new Promise((e,i)=>{const o=t.transaction([yn],"readonly").objectStore(yn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function L0(n){const t=await Ra();return new Promise((e,i)=>{const s=t.transaction([yn],"readwrite");s.objectStore(yn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function I0(n){return new Promise((t,e)=>{const s=n.transaction([yn],"readwrite").objectStore(yn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>ap&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function Xo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(h=>`"${h}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(h=>{const _=n.voltageSteps.map(v=>{const m=n.points.find(p=>Math.abs(p.voltageTarget-v)<1e-4&&Math.abs(p.loadTarget-h)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${h}",${_.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(h=>{i.push([h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),`"${h.loadMode}"`,h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2),`"${h.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压/负载跳变前后0.1s的暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.1s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(h=>{i.push([h.relTime.toFixed(4),h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),h.stepRelTime.toFixed(4),h.isValidForAvg?'"YES"':'"NO(0.1s过滤)"',h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const U0={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},N0={class:"menubar"},O0={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},F0={style:{display:"flex","align-items":"center",gap:"5px"}},B0={style:{display:"flex","align-items":"center",gap:"5px"}},z0={class:"panel-left"},k0={class:"group-box"},V0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},H0={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},G0={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"6px"}},W0=["value"],X0={style:{display:"flex","align-items":"center",gap:"4px"}},$0=["value"],Y0={class:"group-box"},q0={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},j0={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},K0={style:{"margin-bottom":"6px"}},Z0={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},J0=["disabled"],Q0=["disabled"],tx=["disabled"],ex={style:{"margin-bottom":"6px"}},nx={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},ix={style:{display:"flex",gap:"4px"}},sx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},rx=["disabled"],ox={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},ax=["disabled"],lx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},cx={style:{"font-size":"10px",color:"#a0aec0"}},ux=["disabled"],dx={style:{"font-size":"10px",color:"#a0aec0"}},fx=["disabled"],hx={style:{"font-size":"10px",color:"#a0aec0"}},px=["disabled"],mx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},gx=["disabled"],_x=["disabled"],vx=["disabled"],xx={class:"group-box"},yx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Mx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Sx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},bx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Ex={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Tx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},wx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Ax={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Cx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Rx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Px={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Dx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},Lx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Ix={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},Ux={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},Nx={style:{display:"flex","flex-direction":"column",gap:"6px"}},Ox={style:{display:"flex",gap:"6px"}},Fx=["disabled"],Bx=["disabled"],zx={class:"panel-right"},kx={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},Vx={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},Hx={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},Gx={style:{color:"#48bb78"}},Wx={style:{flex:"1",overflow:"auto"}},Xx={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},$x={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},Yx={style:{padding:"4px 6px"}},qx={style:{padding:"4px 6px"}},jx={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},Kx={style:{padding:"4px 6px"}},Zx={style:{padding:"4px 6px"}},Jx={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},Qx={style:{padding:"4px 6px"}},ty={style:{padding:"4px 6px"}},ey={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},ny={key:0,style:{color:"#48bb78"}},iy={key:1,style:{color:"#00d2ff"}},sy={key:2,style:{color:"#4a5568"}},ry={style:{padding:"4px 6px","text-align":"center"}},oy={class:"statusbar"},ay={key:0,style:{color:"#48bb78"}},ly={key:1},cy={class:"device-lost-modal"},uy={class:"device-lost-header"},dy={class:"device-lost-body"},fy={class:"device-lost-info-grid"},hy={class:"info-row"},py={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},my={class:"info-row"},gy={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},_y={class:"info-row"},vy={class:"info-val"},xy={class:"info-row"},yy={class:"info-val",style:{"font-family":"monospace"}},My={class:"device-lost-footer"},Sy=Xi({__name:"ConsoleView",setup(n){const t=Kl.getInstance(),e=ce(null),i=ce(!1),s=ce(!1),r=ce(!0),o=ce([]),a=Fi({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),l=ce(null),c=ce(void 0),u=ce([]),d=ce(!1),f=ce(!1),h=ce("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let _=null,v=null;const m=Fi({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),p=ce([]),R=ce([]),w=ce([]),b=ce(null),F=Fi({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),z=Ke(()=>{const q=Math.max(1,Math.floor((m.voltageMax-m.voltageMin)/m.voltageStep)+1),y=Math.max(1,Math.floor((m.loadMax-m.loadMin)/m.loadStep)+1);return q*y}),U=Ke(()=>w.value.filter(q=>q.status==="completed").length),H=Ke(()=>w.value.filter(q=>q.status==="completed"));function C(q){e.value=e.value===q?null:q}function T(){e.value=null}function N(){const q=[];for(let O=m.voltageMin;O<=m.voltageMax+1e-5;O+=m.voltageStep)q.push(Math.round(O*100)/100);const y=[];for(let O=m.loadMin;O<=m.loadMax+1e-5;O+=m.loadStep)y.push(Math.round(O*100)/100);p.value=q,R.value=y;const x=[];let g=1;for(const O of q)for(const J of y)x.push({stepIndex:g++,voltageTarget:O,loadTarget:J,loadMode:m.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});w.value=x,F.totalSteps=x.length,F.currentStep=0,F.progressPercent=0}function lt(q,y,x){console.error(`%c[SERIAL DEVICE LOST] %c${q} (${y}): ${x}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),a.visible=!0,a.deviceType=q,a.deviceName=y,a.reason=x,a.timestamp=new Date().toLocaleTimeString(),d.value&&(f.value=!0,h.value=`⚠️ 警告: 检测到串口设备【${y}】异常断开/丢失！测试已自动紧急暂停。`,t.emergencyStopAll().catch(()=>{}))}function tt(){a.visible=!1,s.value=!0}async function mt(){a.visible=!1,r.value=!0,t.autoConnectVirtual(),h.value="已切换为仿真驱动模式，测试已恢复",f.value=!1}async function ht(){a.visible=!1,_&&_.abort(),await k()}async function W(){t.isBothConnected()||t.autoConnectVirtual(),N(),u.value=[],l.value&&l.value.clear(),c.value=void 0,d.value=!0,f.value=!1,_=new AbortController,h.value="正在执行全自动 2D 矩阵效率测试...",D();const q=performance.now();try{let y=0;for(let x=0;x<w.value.length&&!_.signal.aborted;x++){for(;f.value&&!_.signal.aborted;)await new Promise(Mt=>setTimeout(Mt,200));const g=w.value[x];g.status="running",F.activeTargetV=g.voltageTarget,F.activeTargetLoad=g.loadTarget,F.currentStep=x+1,h.value=`正在测试步 #${g.stepIndex} (Vin: ${g.voltageTarget.toFixed(2)}V, 负载: ${g.loadTarget.toFixed(2)}${g.loadMode})...`;try{await t.setPsuOutput(!0,g.voltageTarget,m.inputCurrentLimit),await t.setLoadInput(!0,m.loadMode,g.loadTarget)}catch(Mt){for(lt("PSU",t.psu.state.model,`发送控制指令失败: ${(Mt==null?void 0:Mt.message)||Mt}`);f.value&&!_.signal.aborted;)await new Promise(kt=>setTimeout(kt,200));if(_.signal.aborted)break}const O=m.stepDwellTime*1e3,J=m.stepDwellTime,rt=.1,nt=Math.max(10,Math.round(1e3/(m.sampleRateHz||8))),wt=performance.now(),yt=[],pt=[],Rt=[],_t=[],bt=[],Nt=[];let It=0;for(;It<O&&!_.signal.aborted;){for(;f.value&&!_.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));const Mt=performance.now();It=Mt-wt;const kt=It/1e3,Ut=(Mt-q)/1e3;if(!t.checkHealth().ok){for(;f.value&&!_.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));if(_.signal.aborted)break}const V=J>.2?kt>=rt&&kt<=J-rt:!0,St=t.measure();F.vin=St.vin,F.iin=St.iin,F.pin=St.pin,F.vout=St.vout,F.iout=St.iout,F.pout=St.pout,F.efficiency=St.efficiency,c.value={t:Mt,vin:St.vin,vout:St.vout,iin:St.iin,iout:St.iout};const dt={timestamp:Date.now(),relTime:Math.round(Ut*1e3)/1e3,stepIndex:g.stepIndex,voltageTarget:g.voltageTarget,loadTarget:g.loadTarget,stepRelTime:Math.round(kt*1e3)/1e3,isValidForAvg:V,vin:St.vin,iin:St.iin,pin:St.pin,vout:St.vout,iout:St.iout,pout:St.pout,efficiency:St.efficiency};u.value.push(dt),V&&(yt.push(St.vin),pt.push(St.iin),Rt.push(St.pin),_t.push(St.vout),bt.push(St.iout),Nt.push(St.pout));const vt=performance.now()-Mt,Dt=Math.max(2,nt-vt);await new Promise(Ct=>setTimeout(Ct,Dt))}if(yt.length>0){const Mt=yt.length;g.vin=Math.round(yt.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.iin=Math.round(pt.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.pin=Math.round(Rt.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.vout=Math.round(_t.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.iout=Math.round(bt.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.pout=Math.round(Nt.reduce((kt,Ut)=>kt+Ut,0)/Mt*1e3)/1e3,g.efficiency=g.pin>.001?Math.min(100,Math.max(0,Math.round(g.pout/g.pin*1e4)/100)):0}else{const Mt=t.measure();g.vin=Mt.vin,g.iin=Mt.iin,g.pin=Mt.pin,g.vout=Mt.vout,g.iout=Mt.iout,g.pout=Mt.pout,g.efficiency=Mt.efficiency}g.status="completed",g.timestamp=Date.now(),y++,F.progressPercent=y/w.value.length*100}_.signal.aborted||await k()}catch(y){console.error("Test execution error:",y),h.value="测试执行异常: "+String(y),alert("测试执行过程中发生异常："+String(y))}finally{d.value=!1,f.value=!1,ut()}}async function k(){await t.emergencyStopAll(),h.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const q=w.value.filter(bt=>bt.status==="completed");let y=0,x=100,g=0,O;q.forEach(bt=>{bt.efficiency>y&&(y=bt.efficiency,O=bt),bt.efficiency<x&&(x=bt.efficiency),g+=bt.efficiency});const J=q.length>0?g/q.length:0,rt=`test_${Date.now()}`,nt=new Date,wt=JSON.parse(JSON.stringify(m)),yt=JSON.parse(JSON.stringify(w.value)),pt=O?JSON.parse(JSON.stringify(O)):void 0,Rt=JSON.parse(JSON.stringify(u.value)),_t={id:rt,title:`芯片双向矩阵扫描 [${m.voltageMin}V-${m.voltageMax}V | ${m.loadMode}]`,createdAt:nt.toISOString(),config:wt,voltageSteps:[...p.value],loadSteps:[...R.value],points:yt,rawSamples:Rt,summary:{totalPoints:w.value.length,completedPoints:q.length,maxEfficiency:Math.round(y*100)/100,minEfficiency:Math.round(x*100)/100,avgEfficiency:Math.round(J*100)/100,optimalPoint:pt,durationSeconds:Math.round(q.length*m.stepDwellTime)}};b.value=_t,await P0(_t),await I(),Iv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),Tt(rt)}function G(){f.value=!0,h.value="测试已暂停"}function ft(){f.value=!1,h.value="测试已继续运行"}async function L(){_&&_.abort(),d.value=!1,f.value=!1,await t.emergencyStopAll(),ut(),h.value="测试已手动终止"}function D(){v&&clearInterval(v),v=window.setInterval(()=>{if(t.checkHealth(),!d.value){const q=t.measure();F.vin=q.vin,F.iin=q.iin,F.pin=q.pin,F.vout=q.vout,F.iout=q.iout,F.pout=q.pout,F.efficiency=q.efficiency}},200)}function ut(){v&&(clearInterval(v),v=null)}function Tt(q){var O;const y=q||((O=b.value)==null?void 0:O.id);if(!y){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const g=`${window.location.href.split("#")[0]}#/result/${y}`;window.open(g,"_blank")}function j(){if(b.value)Xo(b.value);else if(H.value.length>0){const q={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(m)),voltageSteps:[...p.value],loadSteps:[...R.value],points:JSON.parse(JSON.stringify(w.value)),rawSamples:JSON.parse(JSON.stringify(u.value)),summary:{totalPoints:w.value.length,completedPoints:H.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};Xo(q)}else alert("当前无可用测试数据可供导出！")}function ct(q){Xo(q)}async function xt(q){await L0(q),await I()}async function I(){try{o.value=await lp()}catch(q){console.warn("Failed to load history:",q)}}async function Q(){await I(),i.value=!0}function et(){w.value=[],u.value=[],b.value=null,c.value=void 0,l.value&&l.value.clear(),N(),h.value="图表与数据已清空"}function gt(){r.value?(t.autoConnectVirtual(),h.value="已启用内置仿真驱动模式 (Virtual Mode)"):(t.psu.disconnect(),t.load.disconnect(),h.value="已关闭仿真模式，请配置物理串口设备")}function E(){t.psu.state.connected?(t.psu.disconnect(),h.value="电源串口已断开"):s.value=!0}function P(){t.load.state.connected?(t.load.disconnect(),h.value="电子负载串口已断开"):s.value=!0}function B(){r.value=!0,t.autoConnectVirtual(),s.value=!1,h.value="仿真驱动已就绪"}async function S(q){try{await t.psu.connectPhysical(q),r.value=!1,h.value=`电源串口已连接 (${q}bps)`}catch(y){alert("连接电源串口失败: "+((y==null?void 0:y.message)||y))}}async function Z(){await t.psu.disconnect(),h.value="电源串口已断开"}async function K(q){try{await t.load.connectPhysical(q),r.value=!1,h.value=`负载串口已连接 (${q}bps)`}catch(y){alert("连接负载串口失败: "+((y==null?void 0:y.message)||y))}}async function it(){await t.load.disconnect(),h.value="负载串口已断开"}function st(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}return Kr(async()=>{t.setOnDeviceLost(lt),t.autoConnectVirtual(),N(),D(),await I()}),Zr(()=>{ut()}),(q,y)=>(Ht(),Wt("div",U0,[M("div",N0,[M("div",{class:ui(["menu-item",{active:e.value==="file"}]),onClick:y[3]||(y[3]=x=>C("file"))},[y[36]||(y[36]=zt(" 文件 (File) ",-1)),e.value==="file"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[2]||(y[2]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[0]||(y[0]=x=>{j(),T()})},[...y[33]||(y[33]=[M("span",null,"导出测试结果 CSV (Export CSV)...",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),y[35]||(y[35]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:y[1]||(y[1]=x=>T())},[...y[34]||(y[34]=[M("span",null,"退出 (Exit)",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Oe("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="view"}]),onClick:y[6]||(y[6]=x=>C("view"))},[y[38]||(y[38]=zt(" 视图 (View) ",-1)),e.value==="view"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[5]||(y[5]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[4]||(y[4]=x=>{et(),T()})},[...y[37]||(y[37]=[M("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Oe("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="tools"}]),onClick:y[10]||(y[10]=x=>C("tools"))},[y[42]||(y[42]=zt(" 工具 (Tools) ",-1)),e.value==="tools"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[9]||(y[9]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[7]||(y[7]=x=>{Q(),T()})},[...y[39]||(y[39]=[M("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),M("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),y[41]||(y[41]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:y[8]||(y[8]=x=>{s.value=!0,T()})},[...y[40]||(y[40]=[M("span",null,"打开串口硬件连接设置...",-1)])])])):Oe("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="help"}]),onClick:y[13]||(y[13]=x=>C("help"))},[y[44]||(y[44]=zt(" 帮助 (Help) ",-1)),e.value==="help"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[12]||(y[12]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[11]||(y[11]=x=>{st(),T()})},[...y[43]||(y[43]=[M("span",null,"关于工作台 (About Workbench)...",-1)])])])):Oe("",!0)],2),M("div",O0,[M("span",F0,[M("span",{style:Ze([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),zt(" 电源: "+Et(Ee(t).psu.state.portName),1)]),M("span",B0,[M("span",{style:Ze([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),zt(" 负载: "+Et(Ee(t).load.state.portName),1)]),b.value?(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:y[14]||(y[14]=x=>Tt(b.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...y[45]||(y[45]=[M("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),zt(" 打开 3D/2D 数据视图 ",-1)])])):Oe("",!0)])]),M("div",{class:"workbench-body",onClick:T},[M("div",z0,[M("div",k0,[y[49]||(y[49]=M("div",{class:"group-title"},[M("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),M("div",V0,[M("label",H0,[Te(M("input",{type:"checkbox","onUpdate:modelValue":y[15]||(y[15]=x=>r.value=x),onChange:gt},null,544),[[wr,r.value]]),y[46]||(y[46]=zt(" 🧪 启用仿真演示模式 ",-1))]),M("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:y[16]||(y[16]=x=>s.value=!0)}," ⚙ 配置 ")]),M("div",G0,[y[47]||(y[47]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,W0),M("button",{class:ui(["btn",Ee(t).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:E},Et(Ee(t).psu.state.connected?"断开":"连接"),3)]),M("div",X0,[y[48]||(y[48]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,$0),M("button",{class:ui(["btn",Ee(t).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:P},Et(Ee(t).load.state.connected?"断开":"连接"),3)])]),M("div",Y0,[M("div",q0,[y[50]||(y[50]=M("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),M("span",j0," 总点数: "+Et(z.value)+" 点 ",1)]),M("div",K0,[y[54]||(y[54]=M("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),M("div",Z0,[M("div",null,[y[51]||(y[51]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[17]||(y[17]=x=>m.voltageMin=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,J0),[[ei,m.voltageMin,void 0,{number:!0}]])]),M("div",null,[y[52]||(y[52]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[18]||(y[18]=x=>m.voltageMax=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,Q0),[[ei,m.voltageMax,void 0,{number:!0}]])]),M("div",null,[y[53]||(y[53]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[19]||(y[19]=x=>m.voltageStep=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,tx),[[ei,m.voltageStep,void 0,{number:!0}]])])])]),M("div",ex,[M("div",nx,[y[57]||(y[57]=M("span",null,"负载扫描范围 (Load):",-1)),M("div",ix,[M("label",sx,[Te(M("input",{type:"radio",value:"CC","onUpdate:modelValue":y[20]||(y[20]=x=>m.loadMode=x),disabled:d.value},null,8,rx),[[nd,m.loadMode]]),y[55]||(y[55]=zt(" CC恒流 ",-1))]),M("label",ox,[Te(M("input",{type:"radio",value:"CW","onUpdate:modelValue":y[21]||(y[21]=x=>m.loadMode=x),disabled:d.value},null,8,ax),[[nd,m.loadMode]]),y[56]||(y[56]=zt(" CW恒功率 ",-1))])])]),M("div",lx,[M("div",null,[M("span",cx,"起始("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Te(M("input",{type:"number","onUpdate:modelValue":y[22]||(y[22]=x=>m.loadMin=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,ux),[[ei,m.loadMin,void 0,{number:!0}]])]),M("div",null,[M("span",dx,"终止("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Te(M("input",{type:"number","onUpdate:modelValue":y[23]||(y[23]=x=>m.loadMax=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,fx),[[ei,m.loadMax,void 0,{number:!0}]])]),M("div",null,[M("span",hx,"步长("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Te(M("input",{type:"number","onUpdate:modelValue":y[24]||(y[24]=x=>m.loadStep=x),disabled:d.value,step:"0.1",style:{width:"100%"}},null,8,px),[[ei,m.loadStep,void 0,{number:!0}]])])])]),M("div",mx,[M("div",null,[y[58]||(y[58]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[25]||(y[25]=x=>m.inputCurrentLimit=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,gx),[[ei,m.inputCurrentLimit,void 0,{number:!0}]])]),M("div",null,[y[59]||(y[59]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[26]||(y[26]=x=>m.stepDwellTime=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,_x),[[ei,m.stepDwellTime,void 0,{number:!0}]])]),M("div",null,[y[60]||(y[60]=M("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),Te(M("input",{type:"number","onUpdate:modelValue":y[27]||(y[27]=x=>m.sampleRateHz=x),disabled:d.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,vx),[[ei,m.sampleRateHz,void 0,{number:!0}]])])])]),M("div",xx,[y[74]||(y[74]=M("div",{class:"group-title"},[M("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),M("div",yx,[M("div",Mx,[y[62]||(y[62]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),M("div",Sx,[zt(Et(F.vin.toFixed(3))+" ",1),y[61]||(y[61]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",bx,[y[64]||(y[64]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),M("div",Ex,[zt(Et(F.vout.toFixed(3))+" ",1),y[63]||(y[63]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",Tx,[y[66]||(y[66]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),M("div",wx,[zt(Et(F.iin.toFixed(3))+" ",1),y[65]||(y[65]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Ax,[y[68]||(y[68]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),M("div",Cx,[zt(Et(F.iout.toFixed(3))+" ",1),y[67]||(y[67]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Rx,[y[70]||(y[70]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),M("div",Px,[zt(Et(F.pin.toFixed(3))+" ",1),y[69]||(y[69]=M("span",{style:{"font-size":"10px"}},"W",-1))])]),M("div",Dx,[y[72]||(y[72]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),M("div",Lx,[zt(Et(F.pout.toFixed(3))+" ",1),y[71]||(y[71]=M("span",{style:{"font-size":"10px"}},"W",-1))])])]),M("div",Ix,[y[73]||(y[73]=M("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),M("span",Ux,Et(F.efficiency.toFixed(2))+" % ",1)])]),M("div",Nx,[d.value?f.value?(Ht(),Wt("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:ft}," ▶ 继续测试 ")):(Ht(),Wt("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:G}," ⏸ 暂停测试 ")):(Ht(),Wt("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:W}," ▶ 开始矩阵测试 ")),M("div",Ox,[M("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!d.value,onClick:L}," ⏹ 结束 ",8,Fx),M("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:H.value.length===0,onClick:j}," 📊 导出CSV ",8,Bx)])])]),M("div",zx,[Le(Vv,{ref_key:"waveformRef",ref:l,"latest-sample":c.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),M("div",kx,[M("div",Vx,[y[76]||(y[76]=M("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),M("span",Hx,[y[75]||(y[75]=zt(" 已完成: ",-1)),M("b",Gx,Et(U.value),1),zt(" / "+Et(w.value.length)+" 步 ",1)])]),M("div",Wx,[M("table",Xx,[y[77]||(y[77]=M("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[M("tr",{style:{"border-bottom":"1px solid #2d3748"}},[M("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),M("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),M("th",{style:{padding:"5px 6px"}},"目标负载"),M("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),M("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),M("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),M("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),M("tbody",null,[(Ht(!0),Wt(Ne,null,Hs(w.value,x=>(Ht(),Wt("tr",{key:x.stepIndex,style:Ze([{"border-bottom":"1px solid #1e2530"},{backgroundColor:x.status==="running"?"#1a365d":"transparent"}])},[M("td",$x,"#"+Et(x.stepIndex),1),M("td",Yx,Et(x.voltageTarget.toFixed(2)),1),M("td",qx,Et(x.loadTarget.toFixed(2))+" "+Et(x.loadMode),1),M("td",jx,Et(x.status!=="pending"?x.vin.toFixed(4):"--"),1),M("td",Kx,Et(x.status!=="pending"?x.iin.toFixed(4):"--"),1),M("td",Zx,Et(x.status!=="pending"?x.pin.toFixed(4):"--"),1),M("td",Jx,Et(x.status!=="pending"?x.vout.toFixed(4):"--"),1),M("td",Qx,Et(x.status!=="pending"?x.iout.toFixed(4):"--"),1),M("td",ty,Et(x.status!=="pending"?x.pout.toFixed(4):"--"),1),M("td",ey,[x.status==="completed"?(Ht(),Wt("span",ny,Et(x.efficiency.toFixed(2))+"% ",1)):x.status==="running"?(Ht(),Wt("span",iy,"测定中")):(Ht(),Wt("span",sy,"--"))]),M("td",ry,[M("span",{style:Ze([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:x.status==="completed"?"#22543d":x.status==="running"?"#2b6cb0":"#2d3748",color:x.status==="completed"?"#9ae6b4":x.status==="running"?"#bee3f8":"#718096"}])},Et(x.status==="completed"?"已完成":x.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),M("div",oy,[M("span",null,Et(h.value),1),d.value?(Ht(),Wt("span",ay," 正在测试第 "+Et(F.currentStep)+" / "+Et(F.totalSteps)+" 点 ("+Et(F.progressPercent.toFixed(1))+"%) ",1)):(Ht(),Wt("span",ly,"就绪 (Ready)"))]),Le(o0,{"is-open":i.value,records:o.value,onClose:y[28]||(y[28]=x=>i.value=!1),onOpenResult:Tt,onExportCsv:ct,onDeleteRecord:xt},null,8,["is-open","records"]),Le(T0,{"is-open":s.value,"psu-connected":Ee(t).psu.state.connected,"psu-port-name":Ee(t).psu.state.portName,"load-connected":Ee(t).load.state.connected,"load-port-name":Ee(t).load.state.portName,"web-serial-supported":Ee(t).psu.isWebSerialSupported(),onClose:y[29]||(y[29]=x=>s.value=!1),onConnectVirtual:B,onConnectPhysicalPsu:S,onDisconnectPsu:Z,onConnectPhysicalLoad:K,onDisconnectLoad:it},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),a.visible?(Ht(),Wt("div",{key:0,class:"device-lost-overlay",onClick:y[32]||(y[32]=is(x=>a.visible=!1,["self"]))},[M("div",cy,[M("div",uy,[y[78]||(y[78]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 串口硬件设备异常丢失警告！ </span></div>',1)),M("button",{class:"btn",style:{padding:"2px 7px"},onClick:y[30]||(y[30]=x=>a.visible=!1)},"✕")]),M("div",dy,[y[83]||(y[83]=M("div",{class:"device-lost-alert-banner"},[M("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 检测到串口通信链路中断 / 硬件连接丢失！ "),M("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，电源输出已安全切断。 ")],-1)),M("div",fy,[M("div",hy,[y[79]||(y[79]=M("span",{class:"info-label"},"丢失仪器:",-1)),M("span",py,Et(a.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+Et(a.deviceName),1)]),M("div",my,[y[80]||(y[80]=M("span",{class:"info-label"},"异常原因:",-1)),M("span",gy,Et(a.reason),1)]),M("div",_y,[y[81]||(y[81]=M("span",{class:"info-label"},"测试进度:",-1)),M("span",vy,"已完成 "+Et(U.value)+" / "+Et(w.value.length)+" 点 (当前步已挂起)",1)]),M("div",xy,[y[82]||(y[82]=M("span",{class:"info-label"},"发生时间:",-1)),M("span",yy,Et(a.timestamp),1)])]),y[84]||(y[84]=M("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查设备电源及 USB 串口线物理连接。重新连接后可点击【恢复测试】无缝继续；亦可一键切换为内置仿真模式继续验证。 ",-1))]),M("div",My,[M("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:tt}," ⚙ 重新连接串口硬件 "),M("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:mt}," 🧪 切换仿真模式并继续测试 "),M("button",{class:"btn btn-danger",onClick:ht}," 💾 终止测试并保存已测结果 "),M("button",{class:"btn",onClick:y[31]||(y[31]=x=>a.visible=!1)}," 保持暂停 ")])])])):Oe("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ou="170",Ys={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},by=0,Ed=1,Ey=2,cp=1,Ty=2,li=3,Gi=0,rn=1,mi=2,zi=0,qs=1,Td=2,wd=3,Ad=4,wy=5,ss=100,Ay=101,Cy=102,Ry=103,Py=104,Dy=200,Ly=201,Iy=202,Uy=203,Zl=204,Jl=205,Ny=206,Oy=207,Fy=208,By=209,zy=210,ky=211,Vy=212,Hy=213,Gy=214,Ql=0,tc=1,ec=2,er=3,nc=4,ic=5,sc=6,rc=7,up=0,Wy=1,Xy=2,vi=0,$y=1,Yy=2,qy=3,jy=4,Ky=5,Zy=6,Jy=7,dp=300,nr=301,ir=302,oc=303,ac=304,Pa=306,lc=1e3,cs=1001,cc=1002,Ln=1003,Qy=1004,uo=1005,An=1006,Ja=1007,us=1008,Mi=1009,fp=1010,hp=1011,Yr=1012,au=1013,ps=1014,gi=1015,Qr=1016,lu=1017,cu=1018,sr=1020,pp=35902,mp=1021,gp=1022,Cn=1023,_p=1024,vp=1025,js=1026,rr=1027,xp=1028,uu=1029,yp=1030,du=1031,fu=1033,$o=33776,Yo=33777,qo=33778,jo=33779,uc=35840,dc=35841,fc=35842,hc=35843,pc=36196,mc=37492,gc=37496,_c=37808,vc=37809,xc=37810,yc=37811,Mc=37812,Sc=37813,bc=37814,Ec=37815,Tc=37816,wc=37817,Ac=37818,Cc=37819,Rc=37820,Pc=37821,Ko=36492,Dc=36494,Lc=36495,Mp=36283,Ic=36284,Uc=36285,Nc=36286,tM=3200,eM=3201,Sp=0,nM=1,Ni="",mn="srgb",ar="srgb-linear",Da="linear",de="srgb",Ss=7680,Cd=519,iM=512,sM=513,rM=514,bp=515,oM=516,aM=517,lM=518,cM=519,Oc=35044,Rd="300 es",_i=2e3,la=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Fc=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function uM(n,t){return(n%t+t)%t}function Qa(n,t,e){return(1-e)*n+e*t}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dM={DEG2RAD:Fr};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=s[0],m=s[3],p=s[6],R=s[1],w=s[4],b=s[7],F=s[2],z=s[5],U=s[8];return r[0]=o*v+a*R+l*F,r[3]=o*m+a*w+l*z,r[6]=o*p+a*b+l*U,r[1]=c*v+u*R+d*F,r[4]=c*m+u*w+d*z,r[7]=c*p+u*b+d*U,r[2]=f*v+h*R+_*F,r[5]=f*m+h*w+_*z,r[8]=f*p+h*b+_*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=e*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(tl.makeScale(t,e)),this}rotate(t){return this.premultiply(tl.makeRotation(-t)),this}translate(t,e){return this.premultiply(tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Zt;function Ep(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fM(){const n=ca("canvas");return n.style.display="block",n}const Pd={};function Ar(n){n in Pd||(Pd[n]=!0,console.warn(n))}function hM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function pM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function mM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=xi(n.r),n.g=xi(n.g),n.b=xi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ni?Da:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function xi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Dd=[.64,.33,.3,.6,.15,.06],Ld=[.2126,.7152,.0722],Id=[.3127,.329],Ud=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nd=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[ar]:{primaries:Dd,whitePoint:Id,transfer:Da,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:Ld,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:Dd,whitePoint:Id,transfer:de,toXYZ:Ud,fromXYZ:Nd,luminanceCoefficients:Ld,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}});let bs;class gM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=ca("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ca("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(xi(e[i]/255)*255):e[i]=xi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let _M=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(el(s[o].image)):r.push(el(s[o]))}else r=el(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function el(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?gM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vM=0;class tn extends vs{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=cs,s=cs,r=An,o=us,a=Cn,l=Mi,c=tn.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=ki(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lc:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case cc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lc:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case cc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=dp;tn.DEFAULT_ANISOTROPY=1;class Se{constructor(t=0,e=0,i=0,s=1){Se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,b=(h+1)/2,F=(p+1)/2,z=(u+f)/4,U=(d+v)/4,H=(_+m)/4;return w>b&&w>F?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=z/i,r=U/i):b>F?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=z/s,r=H/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=U/r,s=H/r),this.set(i,s,r,e),this}let R=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(d-v)/R,this.z=(f-u)/R,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xM extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends xM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wp extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class yM extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==h||u!==_){let m=1-a;const p=l*f+c*h+u*_+d*v,R=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const F=Math.sqrt(w),z=Math.atan2(F,p*R);m=Math.sin(m*z)/F,a=Math.sin(a*z)/F}const b=a*R;if(l=l*m+f*b,c=c*m+h*b,u=u*m+_*b,d=d*m+v*b,m===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=F,c*=F,u*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*h-c*f,t[e+1]=l*_+u*f+c*d-a*h,t[e+2]=c*_+u*h+a*f-l*d,t[e+3]=u*_-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,i=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Od.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Od.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nl.copy(this).projectOnVector(t),this.sub(nl)}reflect(t){return this.sub(nl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nl=new Y,Od=new gs;class to{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gr),ho.subVectors(this.max,gr),Es.subVectors(t.a,gr),Ts.subVectors(t.b,gr),ws.subVectors(t.c,gr),wi.subVectors(Ts,Es),Ai.subVectors(ws,Ts),ji.subVectors(Es,ws);let e=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-ji.z,ji.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,ji.z,0,-ji.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-ji.y,ji.x,0];return!il(e,Es,Ts,ws,ho)||(e=[1,0,0,0,1,0,0,0,1],!il(e,Es,Ts,ws,ho))?!1:(po.crossVectors(wi,Ai),e=[po.x,po.y,po.z],il(e,Es,Ts,ws,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],bn=new Y,fo=new to,Es=new Y,Ts=new Y,ws=new Y,wi=new Y,Ai=new Y,ji=new Y,gr=new Y,ho=new Y,po=new Y,Ki=new Y;function il(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const MM=new to,_r=new Y,sl=new Y;class La{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):MM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_r.subVectors(t,this.center);const e=_r.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_r,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_r.copy(t.center).add(sl)),this.expandByPoint(_r.copy(t.center).sub(sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new Y,rl=new Y,mo=new Y,Ci=new Y,ol=new Y,go=new Y,al=new Y;class Ia{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){rl.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Ci.copy(this.origin).sub(rl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Ci.dot(this.direction),l=-Ci.dot(mo),c=Ci.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(rl).addScaledVector(mo,f),h}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){ol.subVectors(e,t),go.subVectors(i,t),al.crossVectors(ol,go);let o=this.direction.dot(al),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(Ci,go));if(l<0)return null;const c=a*this.direction.dot(ol.cross(Ci));if(c<0||l+c>o)return null;const u=-a*Ci.dot(al);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+h*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f+v*a,e[4]=_*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+h*a,e[1]=h+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=_*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=_*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+_,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-_,e[2]=_*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(SM,t,bM)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ri.crossVectors(i,an),Ri.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ri.crossVectors(i,an)),Ri.normalize(),_o.crossVectors(an,Ri),s[0]=Ri.x,s[4]=_o.x,s[8]=an.x,s[1]=Ri.y,s[5]=_o.y,s[9]=an.y,s[2]=Ri.z,s[6]=_o.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],R=i[3],w=i[7],b=i[11],F=i[15],z=s[0],U=s[4],H=s[8],C=s[12],T=s[1],N=s[5],lt=s[9],tt=s[13],mt=s[2],ht=s[6],W=s[10],k=s[14],G=s[3],ft=s[7],L=s[11],D=s[15];return r[0]=o*z+a*T+l*mt+c*G,r[4]=o*U+a*N+l*ht+c*ft,r[8]=o*H+a*lt+l*W+c*L,r[12]=o*C+a*tt+l*k+c*D,r[1]=u*z+d*T+f*mt+h*G,r[5]=u*U+d*N+f*ht+h*ft,r[9]=u*H+d*lt+f*W+h*L,r[13]=u*C+d*tt+f*k+h*D,r[2]=_*z+v*T+m*mt+p*G,r[6]=_*U+v*N+m*ht+p*ft,r[10]=_*H+v*lt+m*W+p*L,r[14]=_*C+v*tt+m*k+p*D,r[3]=R*z+w*T+b*mt+F*G,r[7]=R*U+w*N+b*ht+F*ft,r[11]=R*H+w*lt+b*W+F*L,r[15]=R*C+w*tt+b*k+F*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+v*(+e*l*h-e*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+e*c*d-e*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],_=t[12],v=t[13],m=t[14],p=t[15],R=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,w=_*f*c-u*m*c-_*l*h+o*m*h+u*l*p-o*f*p,b=u*v*c-_*d*c+_*a*h-o*v*h-u*a*p+o*d*p,F=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,z=e*R+i*w+s*b+r*F;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return t[0]=R*U,t[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*U,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*U,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*U,t[4]=w*U,t[5]=(u*m*r-_*f*r+_*s*h-e*m*h-u*s*p+e*f*p)*U,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*U,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*h+e*l*h)*U,t[8]=b*U,t[9]=(_*d*r-u*v*r-_*i*h+e*v*h+u*i*p-e*d*p)*U,t[10]=(o*v*r-_*a*r+_*i*c-e*v*c-o*i*p+e*a*p)*U,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*h-e*a*h)*U,t[12]=F*U,t[13]=(u*v*s-_*d*s+_*i*f-e*v*f-u*i*m+e*d*m)*U,t[14]=(_*a*s-o*v*s-_*i*l+e*v*l+o*i*m-e*a*m)*U,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*U,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,v=o*u,m=o*d,p=a*d,R=l*c,w=l*u,b=l*d,F=i.x,z=i.y,U=i.z;return s[0]=(1-(v+p))*F,s[1]=(h+b)*F,s[2]=(_-w)*F,s[3]=0,s[4]=(h-b)*z,s[5]=(1-(f+p))*z,s[6]=(m+R)*z,s[7]=0,s[8]=(_+w)*U,s[9]=(m-R)*U,s[10]=(1-(f+v))*U,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,u=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=_i){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let h,_;if(a===_i)h=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===la)h=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_i){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,h=(i+s)*u;let _,v;if(a===_i)_=(o+r)*d,v=-2*d;else if(a===la)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const As=new Y,En=new xe,SM=new Y(0,0,0),bM=new Y(1,1,1),Ri=new Y,_o=new Y,an=new Y,Fd=new xe,Bd=new gs;class Zn{constructor(t=0,e=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Fd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bd.setFromEuler(this),this.setFromQuaternion(Bd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let EM=0;const zd=new Y,Cs=new gs,ri=new xe,vo=new Y,vr=new Y,TM=new Y,wM=new gs,kd=new Y(1,0,0),Vd=new Y(0,1,0),Hd=new Y(0,0,1),Gd={type:"added"},AM={type:"removed"},Rs={type:"childadded",child:null},ll={type:"childremoved",child:null};class Ie extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new Y,e=new Zn,i=new gs,s=new Y(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new Zt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(kd,t)}rotateY(t){return this.rotateOnAxis(Vd,t)}rotateZ(t){return this.rotateOnAxis(Hd,t)}translateOnAxis(t,e){return zd.copy(t).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kd,t)}translateY(t){return this.translateOnAxis(Vd,t)}translateZ(t){return this.translateOnAxis(Hd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vo.copy(t):vo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(vr,vo,this.up):ri.lookAt(vo,vr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ri),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Gd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(AM),ll.child=t,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Gd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,t,TM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vr,wM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new Y(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new Y,oi=new Y,cl=new Y,ai=new Y,Ps=new Y,Ds=new Y,Wd=new Y,ul=new Y,dl=new Y,fl=new Y,hl=new Se,pl=new Se,ml=new Se;class cn{constructor(t=new Y,e=new Y,i=new Y){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),oi.subVectors(i,e),cl.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(oi),l=Tn.dot(cl),c=oi.dot(oi),u=oi.dot(cl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return hl.setScalar(0),pl.setScalar(0),ml.setScalar(0),hl.fromBufferAttribute(t,e),pl.fromBufferAttribute(t,i),ml.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(hl,r.x),o.addScaledVector(pl,r.y),o.addScaledVector(ml,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),oi.subVectors(t,e),Tn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Tn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return cn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return cn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ds.subVectors(r,i),ul.subVectors(t,i);const l=Ps.dot(ul),c=Ds.dot(ul);if(l<=0&&c<=0)return e.copy(i);dl.subVectors(t,s);const u=Ps.dot(dl),d=Ds.dot(dl);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ps,o);fl.subVectors(t,r);const h=Ps.dot(fl),_=Ds.dot(fl);if(_>=0&&h<=_)return e.copy(r);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ds,a);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Wd.subVectors(r,s),a=(d-u)/(d-u+(h-_)),e.copy(s).addScaledVector(Wd,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function gl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=uM(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=gl(o,r,t+1/3),this.g=gl(o,r,t),this.b=gl(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=mn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const i=Ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(je(ke.r*255,0,255))*65536+Math.round(je(ke.g*255,0,255))*256+Math.round(je(ke.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=mn){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pi),this.setHSL(Pi.h+t,Pi.s+e,Pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pi),t.getHSL(xo);const i=Qa(Pi.h,xo.h,e),s=Qa(Pi.s,xo.s,e),r=Qa(Pi.l,xo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new $t;$t.NAMES=Ap;let CM=0;class xs extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=ki(),this.name="",this.blending=qs,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Zl&&(i.blendSrc=this.blendSrc),this.blendDst!==Jl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cp extends xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new Y,yo=new Xt;class In{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Oc&&(t.usage=this.usage),t}}class Rp extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pp extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}}let RM=0;const pn=new xe,_l=new Ie,Ls=new Y,ln=new to,xr=new to,De=new Y;class Je extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Pp:Rp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return _l.lookAt(t),_l.updateMatrix(),this.applyMatrix4(_l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new La);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];xr.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(ln.min,xr.min),ln.expandByPoint(De),De.addVectors(ln.max,xr.max),ln.expandByPoint(De)):(ln.expandByPoint(xr.min),ln.expandByPoint(xr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),De.add(Ls)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new Y,l[H]=new Y;const c=new Y,u=new Y,d=new Y,f=new Xt,h=new Xt,_=new Xt,v=new Y,m=new Y;function p(H,C,T){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,H),h.fromBufferAttribute(r,C),_.fromBufferAttribute(r,T),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const N=1/(h.x*_.y-_.x*h.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(N),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(N),a[H].add(v),a[C].add(v),a[T].add(v),l[H].add(m),l[C].add(m),l[T].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let H=0,C=R.length;H<C;++H){const T=R[H],N=T.start,lt=T.count;for(let tt=N,mt=N+lt;tt<mt;tt+=3)p(t.getX(tt+0),t.getX(tt+1),t.getX(tt+2))}const w=new Y,b=new Y,F=new Y,z=new Y;function U(H){F.fromBufferAttribute(s,H),z.copy(F);const C=a[H];w.copy(C),w.sub(F.multiplyScalar(F.dot(C))).normalize(),b.crossVectors(z,C);const N=b.dot(l[H])<0?-1:1;o.setXYZW(H,w.x,w.y,w.z,N)}for(let H=0,C=R.length;H<C;++H){const T=R[H],N=T.start,lt=T.count;for(let tt=N,mt=N+lt;tt<mt;tt+=3)U(t.getX(tt+0)),U(t.getX(tt+1)),U(t.getX(tt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new Y,r=new Y,o=new Y,a=new Y,l=new Y,c=new Y,u=new Y,d=new Y;if(t)for(let f=0,h=t.count;f<h;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new In(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xd=new xe,Zi=new Ia,Mo=new La,$d=new Y,So=new Y,bo=new Y,Eo=new Y,vl=new Y,To=new Y,Yd=new Y,wo=new Y;class Rn extends Ie{constructor(t=new Je,e=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(vl.fromBufferAttribute(d,t),o?To.addScaledVector(vl,u):To.addScaledVector(vl.sub(e),u))}e.add(To)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Mo,$d)===null||Zi.origin.distanceToSquared($d)>(t.far-t.near)**2))&&(Xd.copy(r).invert(),Zi.copy(t.ray).applyMatrix4(Xd),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],R=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=R,F=w;b<F;b+=3){const z=a.getX(b),U=a.getX(b+1),H=a.getX(b+2);s=Ao(this,p,t,i,c,u,d,z,U,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const R=a.getX(m),w=a.getX(m+1),b=a.getX(m+2);s=Ao(this,o,t,i,c,u,d,R,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],R=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=R,F=w;b<F;b+=3){const z=b,U=b+1,H=b+2;s=Ao(this,p,t,i,c,u,d,z,U,H),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const R=m,w=m+1,b=m+2;s=Ao(this,o,t,i,c,u,d,R,w,b),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function PM(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:n}}function Ao(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,bo),n.getVertexPosition(c,Eo);const u=PM(n,t,e,i,So,bo,Eo,Yd);if(u){const d=new Y;cn.getBarycoord(Yd,So,bo,Eo,d),s&&(u.uv=cn.getInterpolatedAttribute(s,a,l,c,d,new Xt)),r&&(u.uv1=cn.getInterpolatedAttribute(r,a,l,c,d,new Xt)),o&&(u.normal=cn.getInterpolatedAttribute(o,a,l,c,d,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new Y,materialIndex:0};cn.getNormal(So,bo,Eo,f.normal),u.face=f,u.barycoord=d}return u}class lr extends Je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function _(v,m,p,R,w,b,F,z,U,H,C){const T=b/U,N=F/H,lt=b/2,tt=F/2,mt=z/2,ht=U+1,W=H+1;let k=0,G=0;const ft=new Y;for(let L=0;L<W;L++){const D=L*N-tt;for(let ut=0;ut<ht;ut++){const Tt=ut*T-lt;ft[v]=Tt*R,ft[m]=D*w,ft[p]=mt,c.push(ft.x,ft.y,ft.z),ft[v]=0,ft[m]=0,ft[p]=z>0?1:-1,u.push(ft.x,ft.y,ft.z),d.push(ut/U),d.push(1-L/H),k+=1}}for(let L=0;L<H;L++)for(let D=0;D<U;D++){const ut=f+D+ht*L,Tt=f+D+ht*(L+1),j=f+(D+1)+ht*(L+1),ct=f+(D+1)+ht*L;l.push(ut,Tt,ct),l.push(Tt,j,ct),G+=6}a.addGroup(h,G,C),h+=G,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function $e(n){const t={};for(let e=0;e<n.length;e++){const i=or(n[e]);for(const s in i)t[s]=i[s]}return t}function DM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const LM={clone:or,merge:$e};var IM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=DM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lp extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new Y,qd=new Xt,jd=new Xt;class gn extends Lp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Fc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,qd,jd),e.subVectors(jd,qd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Us=1;class NM extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gn(Is,Us,t,e);s.layers=this.layers,this.add(s);const r=new gn(Is,Us,t,e);r.layers=this.layers,this.add(r);const o=new gn(Is,Us,t,e);o.layers=this.layers,this.add(o);const a=new gn(Is,Us,t,e);a.layers=this.layers,this.add(a);const l=new gn(Is,Us,t,e);l.layers=this.layers,this.add(l);const c=new gn(Is,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Ip extends tn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class OM extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ip(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:zi});r.uniforms.tEquirect.value=e;const o=new Rn(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=An),new NM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const xl=new Y,FM=new Y,BM=new Zt;class Ui{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=xl.subVectors(i,e).cross(FM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(xl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||BM.getNormalMatrix(t),s=this.coplanarPoint(xl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new La,Co=new Y;class pu{constructor(t=new Ui,e=new Ui,i=new Ui,s=new Ui,r=new Ui,o=new Ui){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],_=s[9],v=s[10],m=s[11],p=s[12],R=s[13],w=s[14],b=s[15];if(i[0].setComponents(l-r,f-c,m-h,b-p).normalize(),i[1].setComponents(l+r,f+c,m+h,b+p).normalize(),i[2].setComponents(l+o,f+u,m+_,b+R).normalize(),i[3].setComponents(l-o,f-u,m-_,b-R).normalize(),i[4].setComponents(l-a,f-d,m-v,b-w).normalize(),e===_i)i[5].setComponents(l+a,f+d,m+v,b+w).normalize();else if(e===la)i[5].setComponents(a,d,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Up(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function zM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class eo extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const R=p*f-o;for(let w=0;w<c;w++){const b=w*d-r;_.push(b,-R,0),v.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const w=R+c*p,b=R+c*(p+1),F=R+1+c*(p+1),z=R+1+c*p;h.push(w,b,z),h.push(b,F,z)}this.setIndex(h),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var kM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VM=`#ifdef USE_ALPHAHASH
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
#endif`,HM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$M=`#ifdef USE_AOMAP
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
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QM=`#ifdef USE_IRIDESCENCE
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
#endif`,tS=`#ifdef USE_BUMPMAP
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
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,oS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cS=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,uS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dS=`vec3 transformedNormal = objectNormal;
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
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gS="gl_FragColor = linearToOutputTexel( gl_FragColor );",_S=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yS=`#ifdef USE_ENVMAP
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
#endif`,MS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
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
#endif`,bS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AS=`#ifdef USE_GRADIENTMAP
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
}`,CS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DS=`uniform bool receiveShadow;
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
#endif`,LS=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,US=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,BS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zS=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,VS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$S=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jS=`#if defined( USE_POINTS_UV )
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
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eb=`#ifdef USE_MORPHTARGETS
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
#endif`,nb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ib=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lb=`#ifdef USE_NORMALMAP
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
#endif`,cb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ub=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,mb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_b=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Sb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Eb=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Tb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wb=`#ifdef USE_SKINNING
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
#endif`,Ab=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cb=`#ifdef USE_SKINNING
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
#endif`,Rb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Db=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ib=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ub=`#ifdef USE_TRANSMISSION
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kb=`uniform sampler2D t2D;
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
}`,Vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`#include <common>
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
}`,$b=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Yb=`#define DISTANCE
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
}`,qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`uniform float scale;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,tE=`uniform vec3 diffuse;
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
}`,eE=`#define LAMBERT
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
}`,nE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,iE=`#define MATCAP
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
}`,sE=`#define MATCAP
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
}`,rE=`#define NORMAL
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
}`,oE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aE=`#define PHONG
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
}`,lE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,cE=`#define STANDARD
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
}`,uE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,dE=`#define TOON
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
}`,fE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,hE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_E=`uniform float rotation;
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
}`,vE=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:kM,alphahash_pars_fragment:VM,alphamap_fragment:HM,alphamap_pars_fragment:GM,alphatest_fragment:WM,alphatest_pars_fragment:XM,aomap_fragment:$M,aomap_pars_fragment:YM,batching_pars_vertex:qM,batching_vertex:jM,begin_vertex:KM,beginnormal_vertex:ZM,bsdfs:JM,iridescence_fragment:QM,bumpmap_pars_fragment:tS,clipping_planes_fragment:eS,clipping_planes_pars_fragment:nS,clipping_planes_pars_vertex:iS,clipping_planes_vertex:sS,color_fragment:rS,color_pars_fragment:oS,color_pars_vertex:aS,color_vertex:lS,common:cS,cube_uv_reflection_fragment:uS,defaultnormal_vertex:dS,displacementmap_pars_vertex:fS,displacementmap_vertex:hS,emissivemap_fragment:pS,emissivemap_pars_fragment:mS,colorspace_fragment:gS,colorspace_pars_fragment:_S,envmap_fragment:vS,envmap_common_pars_fragment:xS,envmap_pars_fragment:yS,envmap_pars_vertex:MS,envmap_physical_pars_fragment:LS,envmap_vertex:SS,fog_vertex:bS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:AS,lightmap_pars_fragment:CS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:PS,lights_pars_begin:DS,lights_toon_fragment:IS,lights_toon_pars_fragment:US,lights_phong_fragment:NS,lights_phong_pars_fragment:OS,lights_physical_fragment:FS,lights_physical_pars_fragment:BS,lights_fragment_begin:zS,lights_fragment_maps:kS,lights_fragment_end:VS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:GS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:XS,map_fragment:$S,map_pars_fragment:YS,map_particle_fragment:qS,map_particle_pars_fragment:jS,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphinstance_vertex:JS,morphcolor_vertex:QS,morphnormal_vertex:tb,morphtarget_pars_vertex:eb,morphtarget_vertex:nb,normal_fragment_begin:ib,normal_fragment_maps:sb,normal_pars_fragment:rb,normal_pars_vertex:ob,normal_vertex:ab,normalmap_pars_fragment:lb,clearcoat_normal_fragment_begin:cb,clearcoat_normal_fragment_maps:ub,clearcoat_pars_fragment:db,iridescence_pars_fragment:fb,opaque_fragment:hb,packing:pb,premultiplied_alpha_fragment:mb,project_vertex:gb,dithering_fragment:_b,dithering_pars_fragment:vb,roughnessmap_fragment:xb,roughnessmap_pars_fragment:yb,shadowmap_pars_fragment:Mb,shadowmap_pars_vertex:Sb,shadowmap_vertex:bb,shadowmask_pars_fragment:Eb,skinbase_vertex:Tb,skinning_pars_vertex:wb,skinning_vertex:Ab,skinnormal_vertex:Cb,specularmap_fragment:Rb,specularmap_pars_fragment:Pb,tonemapping_fragment:Db,tonemapping_pars_fragment:Lb,transmission_fragment:Ib,transmission_pars_fragment:Ub,uv_pars_fragment:Nb,uv_pars_vertex:Ob,uv_vertex:Fb,worldpos_vertex:Bb,background_vert:zb,background_frag:kb,backgroundCube_vert:Vb,backgroundCube_frag:Hb,cube_vert:Gb,cube_frag:Wb,depth_vert:Xb,depth_frag:$b,distanceRGBA_vert:Yb,distanceRGBA_frag:qb,equirect_vert:jb,equirect_frag:Kb,linedashed_vert:Zb,linedashed_frag:Jb,meshbasic_vert:Qb,meshbasic_frag:tE,meshlambert_vert:eE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:sE,meshnormal_vert:rE,meshnormal_frag:oE,meshphong_vert:aE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:_E,sprite_frag:vE},Pt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Gn={basic:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:$e([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:$e([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:$e([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:$e([Pt.points,Pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:$e([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:$e([Pt.common,Pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:$e([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:$e([Pt.sprite,Pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:$e([Pt.common,Pt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:$e([Pt.lights,Pt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Gn.physical={uniforms:$e([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ro={r:0,b:0,g:0},Qi=new Zn,xE=new xe;function yE(n,t,e,i,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function _(R){let w=R.isScene===!0?R.background:null;return w&&w.isTexture&&(w=(R.backgroundBlurriness>0?e:t).get(w)),w}function v(R){let w=!1;const b=_(R);b===null?p(a,l):b&&b.isColor&&(p(b,1),w=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,w){const b=_(w);b&&(b.isCubeTexture||b.mapping===Pa)?(u===void 0&&(u=new Rn(new lr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,z,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(w.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(Qi)),u.material.toneMapped=te.getTransfer(b.colorSpace)!==de,(d!==b||f!==b.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,f=b.version,h=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Rn(new eo(2,2),new Wi({name:"BackgroundMaterial",uniforms:or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=te.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||f!==b.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,f=b.version,h=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,w){R.getRGB(Ro,Dp(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(R,w=1){a.set(R),l=w,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:v,addToRenderList:m}}function ME(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,N,lt,tt,mt){let ht=!1;const W=d(tt,lt,N);r!==W&&(r=W,c(r.object)),ht=h(T,tt,lt,mt),ht&&_(T,tt,lt,mt),mt!==null&&t.update(mt,n.ELEMENT_ARRAY_BUFFER),(ht||o)&&(o=!1,b(T,N,lt,tt),mt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function d(T,N,lt){const tt=lt.wireframe===!0;let mt=i[T.id];mt===void 0&&(mt={},i[T.id]=mt);let ht=mt[N.id];ht===void 0&&(ht={},mt[N.id]=ht);let W=ht[tt];return W===void 0&&(W=f(l()),ht[tt]=W),W}function f(T){const N=[],lt=[],tt=[];for(let mt=0;mt<e;mt++)N[mt]=0,lt[mt]=0,tt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:lt,attributeDivisors:tt,object:T,attributes:{},index:null}}function h(T,N,lt,tt){const mt=r.attributes,ht=N.attributes;let W=0;const k=lt.getAttributes();for(const G in k)if(k[G].location>=0){const L=mt[G];let D=ht[G];if(D===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(D=T.instanceColor)),L===void 0||L.attribute!==D||D&&L.data!==D.data)return!0;W++}return r.attributesNum!==W||r.index!==tt}function _(T,N,lt,tt){const mt={},ht=N.attributes;let W=0;const k=lt.getAttributes();for(const G in k)if(k[G].location>=0){let L=ht[G];L===void 0&&(G==="instanceMatrix"&&T.instanceMatrix&&(L=T.instanceMatrix),G==="instanceColor"&&T.instanceColor&&(L=T.instanceColor));const D={};D.attribute=L,L&&L.data&&(D.data=L.data),mt[G]=D,W++}r.attributes=mt,r.attributesNum=W,r.index=tt}function v(){const T=r.newAttributes;for(let N=0,lt=T.length;N<lt;N++)T[N]=0}function m(T){p(T,0)}function p(T,N){const lt=r.newAttributes,tt=r.enabledAttributes,mt=r.attributeDivisors;lt[T]=1,tt[T]===0&&(n.enableVertexAttribArray(T),tt[T]=1),mt[T]!==N&&(n.vertexAttribDivisor(T,N),mt[T]=N)}function R(){const T=r.newAttributes,N=r.enabledAttributes;for(let lt=0,tt=N.length;lt<tt;lt++)N[lt]!==T[lt]&&(n.disableVertexAttribArray(lt),N[lt]=0)}function w(T,N,lt,tt,mt,ht,W){W===!0?n.vertexAttribIPointer(T,N,lt,mt,ht):n.vertexAttribPointer(T,N,lt,tt,mt,ht)}function b(T,N,lt,tt){v();const mt=tt.attributes,ht=lt.getAttributes(),W=N.defaultAttributeValues;for(const k in ht){const G=ht[k];if(G.location>=0){let ft=mt[k];if(ft===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(ft=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(ft=T.instanceColor)),ft!==void 0){const L=ft.normalized,D=ft.itemSize,ut=t.get(ft);if(ut===void 0)continue;const Tt=ut.buffer,j=ut.type,ct=ut.bytesPerElement,xt=j===n.INT||j===n.UNSIGNED_INT||ft.gpuType===au;if(ft.isInterleavedBufferAttribute){const I=ft.data,Q=I.stride,et=ft.offset;if(I.isInstancedInterleavedBuffer){for(let gt=0;gt<G.locationSize;gt++)p(G.location+gt,I.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let gt=0;gt<G.locationSize;gt++)m(G.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let gt=0;gt<G.locationSize;gt++)w(G.location+gt,D/G.locationSize,j,L,Q*ct,(et+D/G.locationSize*gt)*ct,xt)}else{if(ft.isInstancedBufferAttribute){for(let I=0;I<G.locationSize;I++)p(G.location+I,ft.meshPerAttribute);T.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let I=0;I<G.locationSize;I++)m(G.location+I);n.bindBuffer(n.ARRAY_BUFFER,Tt);for(let I=0;I<G.locationSize;I++)w(G.location+I,D/G.locationSize,j,L,D*ct,D/G.locationSize*I*ct,xt)}}else if(W!==void 0){const L=W[k];if(L!==void 0)switch(L.length){case 2:n.vertexAttrib2fv(G.location,L);break;case 3:n.vertexAttrib3fv(G.location,L);break;case 4:n.vertexAttrib4fv(G.location,L);break;default:n.vertexAttrib1fv(G.location,L)}}}}R()}function F(){H();for(const T in i){const N=i[T];for(const lt in N){const tt=N[lt];for(const mt in tt)u(tt[mt].object),delete tt[mt];delete N[lt]}delete i[T]}}function z(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const lt in N){const tt=N[lt];for(const mt in tt)u(tt[mt].object),delete tt[mt];delete N[lt]}delete i[T.id]}function U(T){for(const N in i){const lt=i[N];if(lt[T.id]===void 0)continue;const tt=lt[T.id];for(const mt in tt)u(tt[mt].object),delete tt[mt];delete lt[T.id]}}function H(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:z,releaseStatesOfProgram:U,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function SE(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bE(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(U){return!(U!==Cn&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(U){const H=U===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Mi&&i.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==gi&&!H)}function l(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),F=_>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:F,maxSamples:z}}function EE(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ui,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,w=R*4;let b=p.clippingState||null;l.value=b,b=u(_,f,w,h);for(let F=0;F!==w;++F)b[F]=e[F];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,b=h;w!==v;++w,b+=4)o.copy(d[w]).applyMatrix4(R,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function TE(n){let t=new WeakMap;function e(o,a){return a===oc?o.mapping=nr:a===ac&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===oc||a===ac)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Np extends Lp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ws=4,Kd=[.125,.215,.35,.446,.526,.582],rs=20,yl=new Np,Zd=new $t;let Ml=null,Sl=0,bl=0,El=!1;const ns=(1+Math.sqrt(5))/2,Ns=1/ns,Jd=[new Y(-ns,Ns,0),new Y(ns,Ns,0),new Y(-Ns,0,ns),new Y(Ns,0,ns),new Y(0,ns,-Ns),new Y(0,ns,Ns),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class Qd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ml,Sl,bl),this._renderer.xr.enabled=El,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ml=this._renderer.getRenderTarget(),Sl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Qr,format:Cn,colorSpace:ar,depthBuffer:!1},s=tf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wE(r)),this._blurMaterial=AE(r,t,e)}return s}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,yl)}_sceneToCubeUV(t,e,i,s){const a=new gn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Zd),u.toneMapping=vi,u.autoClear=!1;const h=new Cp({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Rn(new lr,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy(Zd),v=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const w=this._cubeSize;Po(s,R*w,p>2?w:0,w,w),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ef());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Jd[(s-r-1)%Jd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Rn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*rs-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let R=0;for(let U=0;U<rs;++U){const H=U/v,C=Math.exp(-H*H/2);p.push(C),U===0?R+=C:U<m&&(R+=2*C)}for(let U=0;U<p.length;U++)p[U]=p[U]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-i;const b=this._sizeLods[s],F=3*b*(s>w-Ws?s-w+Ws:0),z=4*(this._cubeSize-b);Po(e,F,z,3*b,2*b),l.setRenderTarget(e),l.render(d,yl)}}function wE(n){const t=[],e=[],i=[];let s=n;const r=n-Ws+1+Kd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ws?l=Kd[o-n+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,v=3,m=2,p=1,R=new Float32Array(v*_*h),w=new Float32Array(m*_*h),b=new Float32Array(p*_*h);for(let z=0;z<h;z++){const U=z%3*2/3-1,H=z>2?0:-1,C=[U,H,0,U+2/3,H,0,U+2/3,H+1,0,U,H,0,U+2/3,H+1,0,U,H+1,0];R.set(C,v*_*z),w.set(f,m*_*z);const T=[z,z,z,z,z,z];b.set(T,p*_*z)}const F=new Je;F.setAttribute("position",new In(R,v)),F.setAttribute("uv",new In(w,m)),F.setAttribute("faceIndex",new In(b,p)),t.push(F),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function tf(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=Pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function AE(n,t,e){const i=new Float32Array(rs),s=new Y(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:mu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function ef(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function nf(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function CE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===oc||l===ac,u=l===nr||l===ir;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qd(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new Qd(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function RE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function PE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const _ in h){const v=h[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,_=d.attributes.position;let v=0;if(h!==null){const R=h.array;v=h.version;for(let w=0,b=R.length;w<b;w+=3){const F=R[w+0],z=R[w+1],U=R[w+2];f.push(F,z,z,U,U,F)}}else if(_!==void 0){const R=_.array;v=_.version;for(let w=0,b=R.length/3-1;w<b;w+=3){const F=w+0,z=w+1,U=w+2;f.push(F,z,z,U,U,F)}}else return;const m=new(Ep(f)?Pp:Rp)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function DE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,_){_!==0&&(n.drawElementsInstanced(i,h,r,f*o,_),e.update(h,i,_))}function u(f,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];e.update(m,i,1)}function d(f,h,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,_);let p=0;for(let R=0;R<_;R++)p+=h[R]*v[R];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function LE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function IE(n,t,e){const i=new WeakMap,s=new Se;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var h=T;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let F=a.attributes.position.count*b,z=1;F>t.maxTextureSize&&(z=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const U=new Float32Array(F*z*4*d),H=new wp(U,F,z,d);H.type=gi,H.needsUpdate=!0;const C=b*4;for(let N=0;N<d;N++){const lt=p[N],tt=R[N],mt=w[N],ht=F*z*4*N;for(let W=0;W<lt.count;W++){const k=W*C;_===!0&&(s.fromBufferAttribute(lt,W),U[ht+k+0]=s.x,U[ht+k+1]=s.y,U[ht+k+2]=s.z,U[ht+k+3]=0),v===!0&&(s.fromBufferAttribute(tt,W),U[ht+k+4]=s.x,U[ht+k+5]=s.y,U[ht+k+6]=s.z,U[ht+k+7]=0),m===!0&&(s.fromBufferAttribute(mt,W),U[ht+k+8]=s.x,U[ht+k+9]=s.y,U[ht+k+10]=s.z,U[ht+k+11]=mt.itemSize===4?s.w:1)}}f={count:d,texture:H,size:new Xt(F,z)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function UE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Op extends tn{constructor(t,e,i,s,r,o,a,l,c,u=js){if(u!==js&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=ps),i===void 0&&u===rr&&(i=sr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fp=new tn,sf=new Op(1,1),Bp=new wp,zp=new yM,kp=new Ip,rf=[],of=[],af=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function cr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ua(n,t){let e=of[t];e===void 0&&(e=new Int32Array(t),of[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function NE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function OE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function FE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function BE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function zE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;cf.set(i),n.uniformMatrix2fv(this.addr,!1,cf),Pe(e,i)}}function kE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;lf.set(i),n.uniformMatrix3fv(this.addr,!1,lf),Pe(e,i)}}function VE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;af.set(i),n.uniformMatrix4fv(this.addr,!1,af),Pe(e,i)}}function HE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function GE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function WE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function XE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function $E(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function YE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function qE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function jE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function KE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(sf.compareFunction=bp,r=sf):r=Fp,e.setTexture2D(t||r,s)}function ZE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zp,s)}function JE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||kp,s)}function QE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Bp,s)}function t1(n){switch(n){case 5126:return NE;case 35664:return OE;case 35665:return FE;case 35666:return BE;case 35674:return zE;case 35675:return kE;case 35676:return VE;case 5124:case 35670:return HE;case 35667:case 35671:return GE;case 35668:case 35672:return WE;case 35669:case 35673:return XE;case 5125:return $E;case 36294:return YE;case 36295:return qE;case 36296:return jE;case 35678:case 36198:case 36298:case 36306:case 35682:return KE;case 35679:case 36299:case 36307:return ZE;case 35680:case 36300:case 36308:case 36293:return JE;case 36289:case 36303:case 36311:case 36292:return QE}}function e1(n,t){n.uniform1fv(this.addr,t)}function n1(n,t){const e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function i1(n,t){const e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function s1(n,t){const e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function r1(n,t){const e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function o1(n,t){const e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function a1(n,t){const e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function l1(n,t){n.uniform1iv(this.addr,t)}function c1(n,t){n.uniform2iv(this.addr,t)}function u1(n,t){n.uniform3iv(this.addr,t)}function d1(n,t){n.uniform4iv(this.addr,t)}function f1(n,t){n.uniform1uiv(this.addr,t)}function h1(n,t){n.uniform2uiv(this.addr,t)}function p1(n,t){n.uniform3uiv(this.addr,t)}function m1(n,t){n.uniform4uiv(this.addr,t)}function g1(n,t,e){const i=this.cache,s=t.length,r=Ua(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fp,r[o])}function _1(n,t,e){const i=this.cache,s=t.length,r=Ua(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zp,r[o])}function v1(n,t,e){const i=this.cache,s=t.length,r=Ua(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kp,r[o])}function x1(n,t,e){const i=this.cache,s=t.length,r=Ua(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bp,r[o])}function y1(n){switch(n){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}class M1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=t1(e.type)}}class S1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=y1(e.type)}}class b1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Tl=/(\w+)(\])?(\[|\.)?/g;function uf(n,t){n.seq.push(t),n.map[t.id]=t}function E1(n,t,e){const i=n.name,s=i.length;for(Tl.lastIndex=0;;){const r=Tl.exec(i),o=Tl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){uf(e,c===void 0?new M1(a,n,t):new S1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new b1(a),uf(e,d)),e=d}}}class Zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);E1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function df(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const T1=37297;let w1=0;function A1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const ff=new Zt;function C1(n){te._getMatrix(ff,te.workingColorSpace,n);const t=`mat3( ${ff.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Da:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function hf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+A1(n.getShaderSource(t),o)}else return s}function R1(n,t){const e=C1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function P1(n,t){let e;switch(t){case $y:e="Linear";break;case Yy:e="Reinhard";break;case qy:e="Cineon";break;case jy:e="ACESFilmic";break;case Zy:e="AgX";break;case Jy:e="Neutral";break;case Ky:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new Y;function D1(){te.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function I1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function U1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function pf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(n){return n.replace(N1,F1)}const O1=new Map;function F1(n,t){let e=Jt[t];if(e===void 0){const i=O1.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Bc(e)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(n){return n.replace(B1,z1)}function z1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _f(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Ty?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function V1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Pa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function G1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case up:t="ENVMAP_BLENDING_MULTIPLY";break;case Wy:t="ENVMAP_BLENDING_MIX";break;case Xy:t="ENVMAP_BLENDING_ADD";break}return t}function W1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function X1(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=k1(e),c=V1(e),u=H1(e),d=G1(e),f=W1(e),h=L1(e),_=I1(r),v=s.createProgram();let m,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[_f(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==vi?P1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,R1("linearToOutputTexel",e.outputColorSpace),D1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Bc(o),o=pf(o,e),o=mf(o,e),a=Bc(a),a=pf(a,e),a=mf(a,e),o=gf(o),a=gf(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=R+m+o,b=R+p+a,F=df(s,s.VERTEX_SHADER,w),z=df(s,s.FRAGMENT_SHADER,b);s.attachShader(v,F),s.attachShader(v,z),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function U(N){if(n.debug.checkShaderErrors){const lt=s.getProgramInfoLog(v).trim(),tt=s.getShaderInfoLog(F).trim(),mt=s.getShaderInfoLog(z).trim();let ht=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ht=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,F,z);else{const k=hf(s,F,"vertex"),G=hf(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+lt+`
`+k+`
`+G)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(tt===""||mt==="")&&(W=!1);W&&(N.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:tt,prefix:m},fragmentShader:{log:mt,prefix:p}})}s.deleteShader(F),s.deleteShader(z),H=new Zo(s,v),C=U1(s,v)}let H;this.getUniforms=function(){return H===void 0&&U(this),H};let C;this.getAttributes=function(){return C===void 0&&U(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,T1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=w1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=F,this.fragmentShader=z,this}let $1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new q1(t),e.set(t,i)),i}}class q1{constructor(t){this.id=$1++,this.code=t,this.usedTimes=0}}function j1(n,t,e,i,s,r,o){const a=new hu,l=new Y1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,T,N,lt,tt){const mt=lt.fog,ht=tt.geometry,W=C.isMeshStandardMaterial?lt.environment:null,k=(C.isMeshStandardMaterial?e:t).get(C.envMap||W),G=k&&k.mapping===Pa?k.image.height:null,ft=_[C.type];C.precision!==null&&(h=s.getMaxPrecision(C.precision),h!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",h,"instead."));const L=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,D=L!==void 0?L.length:0;let ut=0;ht.morphAttributes.position!==void 0&&(ut=1),ht.morphAttributes.normal!==void 0&&(ut=2),ht.morphAttributes.color!==void 0&&(ut=3);let Tt,j,ct,xt;if(ft){const le=Gn[ft];Tt=le.vertexShader,j=le.fragmentShader}else Tt=C.vertexShader,j=C.fragmentShader,l.update(C),ct=l.getVertexShaderID(C),xt=l.getFragmentShaderID(C);const I=n.getRenderTarget(),Q=n.state.buffers.depth.getReversed(),et=tt.isInstancedMesh===!0,gt=tt.isBatchedMesh===!0,E=!!C.map,P=!!C.matcap,B=!!k,S=!!C.aoMap,Z=!!C.lightMap,K=!!C.bumpMap,it=!!C.normalMap,st=!!C.displacementMap,q=!!C.emissiveMap,y=!!C.metalnessMap,x=!!C.roughnessMap,g=C.anisotropy>0,O=C.clearcoat>0,J=C.dispersion>0,rt=C.iridescence>0,nt=C.sheen>0,wt=C.transmission>0,yt=g&&!!C.anisotropyMap,pt=O&&!!C.clearcoatMap,Rt=O&&!!C.clearcoatNormalMap,_t=O&&!!C.clearcoatRoughnessMap,bt=rt&&!!C.iridescenceMap,Nt=rt&&!!C.iridescenceThicknessMap,It=nt&&!!C.sheenColorMap,Mt=nt&&!!C.sheenRoughnessMap,kt=!!C.specularMap,Ut=!!C.specularColorMap,ne=!!C.specularIntensityMap,V=wt&&!!C.transmissionMap,St=wt&&!!C.thicknessMap,dt=!!C.gradientMap,vt=!!C.alphaMap,Dt=C.alphaTest>0,Ct=!!C.alphaHash,Yt=!!C.extensions;let ye=vi;C.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=n.toneMapping);const Be={shaderID:ft,shaderType:C.type,shaderName:C.name,vertexShader:Tt,fragmentShader:j,defines:C.defines,customVertexShaderID:ct,customFragmentShaderID:xt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:h,batching:gt,batchingColor:gt&&tt._colorsTexture!==null,instancing:et,instancingColor:et&&tt.instanceColor!==null,instancingMorph:et&&tt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:I===null?n.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ar,alphaToCoverage:!!C.alphaToCoverage,map:E,matcap:P,envMap:B,envMapMode:B&&k.mapping,envMapCubeUVHeight:G,aoMap:S,lightMap:Z,bumpMap:K,normalMap:it,displacementMap:f&&st,emissiveMap:q,normalMapObjectSpace:it&&C.normalMapType===nM,normalMapTangentSpace:it&&C.normalMapType===Sp,metalnessMap:y,roughnessMap:x,anisotropy:g,anisotropyMap:yt,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:_t,dispersion:J,iridescence:rt,iridescenceMap:bt,iridescenceThicknessMap:Nt,sheen:nt,sheenColorMap:It,sheenRoughnessMap:Mt,specularMap:kt,specularColorMap:Ut,specularIntensityMap:ne,transmission:wt,transmissionMap:V,thicknessMap:St,gradientMap:dt,opaque:C.transparent===!1&&C.blending===qs&&C.alphaToCoverage===!1,alphaMap:vt,alphaTest:Dt,alphaHash:Ct,combine:C.combine,mapUv:E&&v(C.map.channel),aoMapUv:S&&v(C.aoMap.channel),lightMapUv:Z&&v(C.lightMap.channel),bumpMapUv:K&&v(C.bumpMap.channel),normalMapUv:it&&v(C.normalMap.channel),displacementMapUv:st&&v(C.displacementMap.channel),emissiveMapUv:q&&v(C.emissiveMap.channel),metalnessMapUv:y&&v(C.metalnessMap.channel),roughnessMapUv:x&&v(C.roughnessMap.channel),anisotropyMapUv:yt&&v(C.anisotropyMap.channel),clearcoatMapUv:pt&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:It&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(C.sheenRoughnessMap.channel),specularMapUv:kt&&v(C.specularMap.channel),specularColorMapUv:Ut&&v(C.specularColorMap.channel),specularIntensityMapUv:ne&&v(C.specularIntensityMap.channel),transmissionMapUv:V&&v(C.transmissionMap.channel),thicknessMapUv:St&&v(C.thicknessMap.channel),alphaMapUv:vt&&v(C.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(it||g),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:tt.isPoints===!0&&!!ht.attributes.uv&&(E||vt),fog:!!mt,useFog:C.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Q,skinning:tt.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:ye,decodeVideoTexture:E&&C.map.isVideoTexture===!0&&te.getTransfer(C.map.colorSpace)===de,decodeVideoTextureEmissive:q&&C.emissiveMap.isVideoTexture===!0&&te.getTransfer(C.emissiveMap.colorSpace)===de,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===mi,flipSided:C.side===rn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Yt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&C.extensions.multiDraw===!0||gt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)T.push(N),T.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(R(T,C),w(T,C),T.push(n.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function R(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function w(C,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),C.push(a.mask)}function b(C){const T=_[C.type];let N;if(T){const lt=Gn[T];N=LM.clone(lt.uniforms)}else N=C.uniforms;return N}function F(C,T){let N;for(let lt=0,tt=u.length;lt<tt;lt++){const mt=u[lt];if(mt.cacheKey===T){N=mt,++N.usedTimes;break}}return N===void 0&&(N=new X1(n,T,C,r),u.push(N)),N}function z(C){if(--C.usedTimes===0){const T=u.indexOf(C);u[T]=u[u.length-1],u.pop(),C.destroy()}}function U(C){l.remove(C)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:F,releaseProgram:z,releaseShaderCache:U,programs:u,dispose:H}}function K1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Z1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function vf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,h,_,v,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||Z1),i.length>1&&i.sort(f||vf),s.length>1&&s.sort(f||vf)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function J1(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new xf,n.set(i,[o])):s>=r.length?(o=new xf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Q1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new $t};break;case"SpotLight":e={position:new Y,direction:new Y,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return n[t.id]=e,e}}}function tT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let eT=0;function nT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function iT(n){const t=new Q1,e=tT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const s=new Y,r=new xe,o=new xe;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,R=0,w=0,b=0,F=0,z=0,U=0;c.sort(nT);for(let C=0,T=c.length;C<T;C++){const N=c[C],lt=N.color,tt=N.intensity,mt=N.distance,ht=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=lt.r*tt,d+=lt.g*tt,f+=lt.b*tt;else if(N.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(N.sh.coefficients[W],tt);U++}else if(N.isDirectionalLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const k=N.shadow,G=e.get(N);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.directionalShadow[h]=G,i.directionalShadowMap[h]=ht,i.directionalShadowMatrix[h]=N.shadow.matrix,R++}i.directional[h]=W,h++}else if(N.isSpotLight){const W=t.get(N);W.position.setFromMatrixPosition(N.matrixWorld),W.color.copy(lt).multiplyScalar(tt),W.distance=mt,W.coneCos=Math.cos(N.angle),W.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),W.decay=N.decay,i.spot[v]=W;const k=N.shadow;if(N.map&&(i.spotLightMap[F]=N.map,F++,k.updateMatrices(N),N.castShadow&&z++),i.spotLightMatrix[v]=k.matrix,N.castShadow){const G=e.get(N);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,i.spotShadow[v]=G,i.spotShadowMap[v]=ht,b++}v++}else if(N.isRectAreaLight){const W=t.get(N);W.color.copy(lt).multiplyScalar(tt),W.halfWidth.set(N.width*.5,0,0),W.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=W,m++}else if(N.isPointLight){const W=t.get(N);if(W.color.copy(N.color).multiplyScalar(N.intensity),W.distance=N.distance,W.decay=N.decay,N.castShadow){const k=N.shadow,G=e.get(N);G.shadowIntensity=k.intensity,G.shadowBias=k.bias,G.shadowNormalBias=k.normalBias,G.shadowRadius=k.radius,G.shadowMapSize=k.mapSize,G.shadowCameraNear=k.camera.near,G.shadowCameraFar=k.camera.far,i.pointShadow[_]=G,i.pointShadowMap[_]=ht,i.pointShadowMatrix[_]=N.shadow.matrix,w++}i.point[_]=W,_++}else if(N.isHemisphereLight){const W=t.get(N);W.skyColor.copy(N.color).multiplyScalar(tt),W.groundColor.copy(N.groundColor).multiplyScalar(tt),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const H=i.hash;(H.directionalLength!==h||H.pointLength!==_||H.spotLength!==v||H.rectAreaLength!==m||H.hemiLength!==p||H.numDirectionalShadows!==R||H.numPointShadows!==w||H.numSpotShadows!==b||H.numSpotMaps!==F||H.numLightProbes!==U)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=b+F-z,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=U,H.directionalLength=h,H.pointLength=_,H.spotLength=v,H.rectAreaLength=m,H.hemiLength=p,H.numDirectionalShadows=R,H.numPointShadows=w,H.numSpotShadows=b,H.numSpotMaps=F,H.numLightProbes=U,i.version=eT++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const w=c[p];if(w.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),d++}else if(w.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(w.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const b=i.hemi[v];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function yf(n){const t=new iT(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sT(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new yf(n),t.set(s,[a])):r>=o.length?(a=new yf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class rT extends xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oT extends xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const aT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cT(n,t,e){let i=new pu;const s=new Xt,r=new Xt,o=new Se,a=new rT({depthPacking:eM}),l=new oT,c={},u=e.maxTextureSize,d={[Gi]:rn,[rn]:Gi,[mi]:mi},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:aT,fragmentShader:lT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let p=this.type;this.render=function(z,U,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||z.length===0)return;const C=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),lt=n.state;lt.setBlending(zi),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const tt=p!==li&&this.type===li,mt=p===li&&this.type!==li;for(let ht=0,W=z.length;ht<W;ht++){const k=z[ht],G=k.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ft=G.getFrameExtents();if(s.multiply(ft),r.copy(G.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,G.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,G.mapSize.y=r.y)),G.map===null||tt===!0||mt===!0){const D=this.type!==li?{minFilter:Ln,magFilter:Ln}:{};G.map!==null&&G.map.dispose(),G.map=new ms(s.x,s.y,D),G.map.texture.name=k.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const L=G.getViewportCount();for(let D=0;D<L;D++){const ut=G.getViewport(D);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),lt.viewport(o),G.updateMatrices(k,D),i=G.getFrustum(),b(U,H,G.camera,k,this.type)}G.isPointLightShadow!==!0&&this.type===li&&R(G,H),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,T,N)};function R(z,U){const H=t.update(v);f.defines.VSM_SAMPLES!==z.blurSamples&&(f.defines.VSM_SAMPLES=z.blurSamples,h.defines.VSM_SAMPLES=z.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=z.map.texture,f.uniforms.resolution.value=z.mapSize,f.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(U,null,H,f,v,null),h.uniforms.shadow_pass.value=z.mapPass.texture,h.uniforms.resolution.value=z.mapSize,h.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(U,null,H,h,v,null)}function w(z,U,H,C){let T=null;const N=H.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(N!==void 0)T=N;else if(T=H.isPointLight===!0?l:a,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const lt=T.uuid,tt=U.uuid;let mt=c[lt];mt===void 0&&(mt={},c[lt]=mt);let ht=mt[tt];ht===void 0&&(ht=T.clone(),mt[tt]=ht,U.addEventListener("dispose",F)),T=ht}if(T.visible=U.visible,T.wireframe=U.wireframe,C===li?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:d[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const lt=n.properties.get(T);lt.light=H}return T}function b(z,U,H,C,T){if(z.visible===!1)return;if(z.layers.test(U.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===li)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,z.matrixWorld);const tt=t.update(z),mt=z.material;if(Array.isArray(mt)){const ht=tt.groups;for(let W=0,k=ht.length;W<k;W++){const G=ht[W],ft=mt[G.materialIndex];if(ft&&ft.visible){const L=w(z,ft,C,T);z.onBeforeShadow(n,z,U,H,tt,L,G),n.renderBufferDirect(H,null,tt,L,z,G),z.onAfterShadow(n,z,U,H,tt,L,G)}}}else if(mt.visible){const ht=w(z,mt,C,T);z.onBeforeShadow(n,z,U,H,tt,ht,null),n.renderBufferDirect(H,null,tt,ht,z,null),z.onAfterShadow(n,z,U,H,tt,ht,null)}}const lt=z.children;for(let tt=0,mt=lt.length;tt<mt;tt++)b(lt[tt],U,H,C,T)}function F(z){z.target.removeEventListener("dispose",F);for(const H in c){const C=c[H],T=z.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const uT={[Ql]:tc,[ec]:sc,[nc]:rc,[er]:ic,[tc]:Ql,[sc]:ec,[rc]:nc,[ic]:er};function dT(n,t){function e(){let V=!1;const St=new Se;let dt=null;const vt=new Se(0,0,0,0);return{setMask:function(Dt){dt!==Dt&&!V&&(n.colorMask(Dt,Dt,Dt,Dt),dt=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,Ct,Yt,ye,Be){Be===!0&&(Dt*=ye,Ct*=ye,Yt*=ye),St.set(Dt,Ct,Yt,ye),vt.equals(St)===!1&&(n.clearColor(Dt,Ct,Yt,ye),vt.copy(St))},reset:function(){V=!1,dt=null,vt.set(-1,0,0,0)}}}function i(){let V=!1,St=!1,dt=null,vt=null,Dt=null;return{setReversed:function(Ct){if(St!==Ct){const Yt=t.get("EXT_clip_control");St?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const ye=Dt;Dt=null,this.setClear(ye)}St=Ct},getReversed:function(){return St},setTest:function(Ct){Ct?I(n.DEPTH_TEST):Q(n.DEPTH_TEST)},setMask:function(Ct){dt!==Ct&&!V&&(n.depthMask(Ct),dt=Ct)},setFunc:function(Ct){if(St&&(Ct=uT[Ct]),vt!==Ct){switch(Ct){case Ql:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case ec:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case nc:n.depthFunc(n.EQUAL);break;case ic:n.depthFunc(n.GEQUAL);break;case sc:n.depthFunc(n.GREATER);break;case rc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){Dt!==Ct&&(St&&(Ct=1-Ct),n.clearDepth(Ct),Dt=Ct)},reset:function(){V=!1,dt=null,vt=null,Dt=null,St=!1}}}function s(){let V=!1,St=null,dt=null,vt=null,Dt=null,Ct=null,Yt=null,ye=null,Be=null;return{setTest:function(le){V||(le?I(n.STENCIL_TEST):Q(n.STENCIL_TEST))},setMask:function(le){St!==le&&!V&&(n.stencilMask(le),St=le)},setFunc:function(le,Mn,Jn){(dt!==le||vt!==Mn||Dt!==Jn)&&(n.stencilFunc(le,Mn,Jn),dt=le,vt=Mn,Dt=Jn)},setOp:function(le,Mn,Jn){(Ct!==le||Yt!==Mn||ye!==Jn)&&(n.stencilOp(le,Mn,Jn),Ct=le,Yt=Mn,ye=Jn)},setLocked:function(le){V=le},setClear:function(le){Be!==le&&(n.clearStencil(le),Be=le)},reset:function(){V=!1,St=null,dt=null,vt=null,Dt=null,Ct=null,Yt=null,ye=null,Be=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,R=null,w=null,b=null,F=null,z=null,U=new $t(0,0,0),H=0,C=!1,T=null,N=null,lt=null,tt=null,mt=null;const ht=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=k>=1):G.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=k>=2);let ft=null,L={};const D=n.getParameter(n.SCISSOR_BOX),ut=n.getParameter(n.VIEWPORT),Tt=new Se().fromArray(D),j=new Se().fromArray(ut);function ct(V,St,dt,vt){const Dt=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(V,Ct),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<dt;Yt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(St,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(St+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Ct}const xt={};xt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),xt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),I(n.DEPTH_TEST),o.setFunc(er),K(!1),it(Ed),I(n.CULL_FACE),S(zi);function I(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function Q(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function et(V,St){return d[V]!==St?(n.bindFramebuffer(V,St),d[V]=St,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=St),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=St),!0):!1}function gt(V,St){let dt=h,vt=!1;if(V){dt=f.get(St),dt===void 0&&(dt=[],f.set(St,dt));const Dt=V.textures;if(dt.length!==Dt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Yt=Dt.length;Ct<Yt;Ct++)dt[Ct]=n.COLOR_ATTACHMENT0+Ct;dt.length=Dt.length,vt=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(dt)}function E(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const P={[ss]:n.FUNC_ADD,[Ay]:n.FUNC_SUBTRACT,[Cy]:n.FUNC_REVERSE_SUBTRACT};P[Ry]=n.MIN,P[Py]=n.MAX;const B={[Dy]:n.ZERO,[Ly]:n.ONE,[Iy]:n.SRC_COLOR,[Zl]:n.SRC_ALPHA,[zy]:n.SRC_ALPHA_SATURATE,[Fy]:n.DST_COLOR,[Ny]:n.DST_ALPHA,[Uy]:n.ONE_MINUS_SRC_COLOR,[Jl]:n.ONE_MINUS_SRC_ALPHA,[By]:n.ONE_MINUS_DST_COLOR,[Oy]:n.ONE_MINUS_DST_ALPHA,[ky]:n.CONSTANT_COLOR,[Vy]:n.ONE_MINUS_CONSTANT_COLOR,[Hy]:n.CONSTANT_ALPHA,[Gy]:n.ONE_MINUS_CONSTANT_ALPHA};function S(V,St,dt,vt,Dt,Ct,Yt,ye,Be,le){if(V===zi){v===!0&&(Q(n.BLEND),v=!1);return}if(v===!1&&(I(n.BLEND),v=!0),V!==wy){if(V!==m||le!==C){if((p!==ss||b!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,b=ss),le)switch(V){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFunc(n.ONE,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Td:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ad:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,w=null,F=null,z=null,U.set(0,0,0),H=0,m=V,C=le}return}Dt=Dt||St,Ct=Ct||dt,Yt=Yt||vt,(St!==p||Dt!==b)&&(n.blendEquationSeparate(P[St],P[Dt]),p=St,b=Dt),(dt!==R||vt!==w||Ct!==F||Yt!==z)&&(n.blendFuncSeparate(B[dt],B[vt],B[Ct],B[Yt]),R=dt,w=vt,F=Ct,z=Yt),(ye.equals(U)===!1||Be!==H)&&(n.blendColor(ye.r,ye.g,ye.b,Be),U.copy(ye),H=Be),m=V,C=!1}function Z(V,St){V.side===mi?Q(n.CULL_FACE):I(n.CULL_FACE);let dt=V.side===rn;St&&(dt=!dt),K(dt),V.blending===qs&&V.transparent===!1?S(zi):S(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const vt=V.stencilWrite;a.setTest(vt),vt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?I(n.SAMPLE_ALPHA_TO_COVERAGE):Q(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function it(V){V!==by?(I(n.CULL_FACE),V!==N&&(V===Ed?n.cullFace(n.BACK):V===Ey?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Q(n.CULL_FACE),N=V}function st(V){V!==lt&&(W&&n.lineWidth(V),lt=V)}function q(V,St,dt){V?(I(n.POLYGON_OFFSET_FILL),(tt!==St||mt!==dt)&&(n.polygonOffset(St,dt),tt=St,mt=dt)):Q(n.POLYGON_OFFSET_FILL)}function y(V){V?I(n.SCISSOR_TEST):Q(n.SCISSOR_TEST)}function x(V){V===void 0&&(V=n.TEXTURE0+ht-1),ft!==V&&(n.activeTexture(V),ft=V)}function g(V,St,dt){dt===void 0&&(ft===null?dt=n.TEXTURE0+ht-1:dt=ft);let vt=L[dt];vt===void 0&&(vt={type:void 0,texture:void 0},L[dt]=vt),(vt.type!==V||vt.texture!==St)&&(ft!==dt&&(n.activeTexture(dt),ft=dt),n.bindTexture(V,St||xt[V]),vt.type=V,vt.texture=St)}function O(){const V=L[ft];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function _t(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(V){Tt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),Tt.copy(V))}function Mt(V){j.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),j.copy(V))}function kt(V,St){let dt=c.get(St);dt===void 0&&(dt=new WeakMap,c.set(St,dt));let vt=dt.get(V);vt===void 0&&(vt=n.getUniformBlockIndex(St,V.name),dt.set(V,vt))}function Ut(V,St){const vt=c.get(St).get(V);l.get(St)!==vt&&(n.uniformBlockBinding(St,vt,V.__bindingPointIndex),l.set(St,vt))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,L={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,R=null,w=null,b=null,F=null,z=null,U=new $t(0,0,0),H=0,C=!1,T=null,N=null,lt=null,tt=null,mt=null,Tt.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:I,disable:Q,bindFramebuffer:et,drawBuffers:gt,useProgram:E,setBlending:S,setMaterial:Z,setFlipSided:K,setCullFace:it,setLineWidth:st,setPolygonOffset:q,setScissorTest:y,activeTexture:x,bindTexture:g,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:bt,texImage3D:Nt,updateUBOMapping:kt,uniformBlockBinding:Ut,texStorage2D:Rt,texStorage3D:_t,texSubImage2D:nt,texSubImage3D:wt,compressedTexSubImage2D:yt,compressedTexSubImage3D:pt,scissor:It,viewport:Mt,reset:ne}}function Mf(n,t,e,i){const s=fT(i);switch(e){case mp:return n*t;case _p:return n*t;case vp:return n*t*2;case xp:return n*t/s.components*s.byteLength;case uu:return n*t/s.components*s.byteLength;case yp:return n*t*2/s.components*s.byteLength;case du:return n*t*2/s.components*s.byteLength;case gp:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case fu:return n*t*4/s.components*s.byteLength;case $o:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case dc:case hc:return Math.max(n,16)*Math.max(t,8)/4;case uc:case fc:return Math.max(n,8)*Math.max(t,8)/2;case pc:case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Dc:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mp:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Uc:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function fT(n){switch(n){case Mi:case fp:return{byteLength:1,components:1};case Yr:case hp:case Qr:return{byteLength:2,components:1};case lu:case cu:return{byteLength:2,components:4};case ps:case au:case gi:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function hT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return h?new OffscreenCanvas(x,g):ca("canvas")}function v(x,g,O){let J=1;const rt=y(x);if((rt.width>O||rt.height>O)&&(J=O/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const nt=Math.floor(J*rt.width),wt=Math.floor(J*rt.height);d===void 0&&(d=_(nt,wt));const yt=g?_(nt,wt):d;return yt.width=nt,yt.height=wt,yt.getContext("2d").drawImage(x,0,0,nt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+nt+"x"+wt+")."),yt}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(x,g,O,J,rt=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let nt=g;if(g===n.RED&&(O===n.FLOAT&&(nt=n.R32F),O===n.HALF_FLOAT&&(nt=n.R16F),O===n.UNSIGNED_BYTE&&(nt=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(nt=n.R8UI),O===n.UNSIGNED_SHORT&&(nt=n.R16UI),O===n.UNSIGNED_INT&&(nt=n.R32UI),O===n.BYTE&&(nt=n.R8I),O===n.SHORT&&(nt=n.R16I),O===n.INT&&(nt=n.R32I)),g===n.RG&&(O===n.FLOAT&&(nt=n.RG32F),O===n.HALF_FLOAT&&(nt=n.RG16F),O===n.UNSIGNED_BYTE&&(nt=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(nt=n.RG8UI),O===n.UNSIGNED_SHORT&&(nt=n.RG16UI),O===n.UNSIGNED_INT&&(nt=n.RG32UI),O===n.BYTE&&(nt=n.RG8I),O===n.SHORT&&(nt=n.RG16I),O===n.INT&&(nt=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(nt=n.RGB8UI),O===n.UNSIGNED_SHORT&&(nt=n.RGB16UI),O===n.UNSIGNED_INT&&(nt=n.RGB32UI),O===n.BYTE&&(nt=n.RGB8I),O===n.SHORT&&(nt=n.RGB16I),O===n.INT&&(nt=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(nt=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(nt=n.RGBA16UI),O===n.UNSIGNED_INT&&(nt=n.RGBA32UI),O===n.BYTE&&(nt=n.RGBA8I),O===n.SHORT&&(nt=n.RGBA16I),O===n.INT&&(nt=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(nt=n.RGB9_E5),g===n.RGBA){const wt=rt?Da:te.getTransfer(J);O===n.FLOAT&&(nt=n.RGBA32F),O===n.HALF_FLOAT&&(nt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(nt=wt===de?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function b(x,g){let O;return x?g===null||g===ps||g===sr?O=n.DEPTH24_STENCIL8:g===gi?O=n.DEPTH32F_STENCIL8:g===Yr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ps||g===sr?O=n.DEPTH_COMPONENT24:g===gi?O=n.DEPTH_COMPONENT32F:g===Yr&&(O=n.DEPTH_COMPONENT16),O}function F(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==An?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function z(x){const g=x.target;g.removeEventListener("dispose",z),H(g),g.isVideoTexture&&u.delete(g)}function U(x){const g=x.target;g.removeEventListener("dispose",U),T(g)}function H(x){const g=i.get(x);if(g.__webglInit===void 0)return;const O=x.source,J=f.get(O);if(J){const rt=J[g.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&C(x),Object.keys(J).length===0&&f.delete(O)}i.remove(x)}function C(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const O=x.source,J=f.get(O);delete J[g.__cacheKey],o.memory.textures--}function T(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let rt=0;rt<g.__webglFramebuffer[J].length;rt++)n.deleteFramebuffer(g.__webglFramebuffer[J][rt]);else n.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)n.deleteFramebuffer(g.__webglFramebuffer[J]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=x.textures;for(let J=0,rt=O.length;J<rt;J++){const nt=i.get(O[J]);nt.__webglTexture&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(x)}let N=0;function lt(){N=0}function tt(){const x=N;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),N+=1,x}function mt(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function ht(x,g){const O=i.get(x);if(x.isVideoTexture&&st(x),x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){const J=x.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,x,g);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function W(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){j(O,x,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function k(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){j(O,x,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function G(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){ct(O,x,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const ft={[lc]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[cc]:n.MIRRORED_REPEAT},L={[Ln]:n.NEAREST,[Qy]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Ja]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},D={[iM]:n.NEVER,[cM]:n.ALWAYS,[sM]:n.LESS,[bp]:n.LEQUAL,[rM]:n.EQUAL,[lM]:n.GEQUAL,[oM]:n.GREATER,[aM]:n.NOTEQUAL};function ut(x,g){if(g.type===gi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===An||g.magFilter===Ja||g.magFilter===uo||g.magFilter===us||g.minFilter===An||g.minFilter===Ja||g.minFilter===uo||g.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ft[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ft[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ft[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,L[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,L[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,D[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ln||g.minFilter!==uo&&g.minFilter!==us||g.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Tt(x,g){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",z));const J=g.source;let rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));const nt=mt(g);if(nt!==x.__cacheKey){rt[nt]===void 0&&(rt[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),rt[nt].usedTimes++;const wt=rt[x.__cacheKey];wt!==void 0&&(rt[x.__cacheKey].usedTimes--,wt.usedTimes===0&&C(g)),x.__cacheKey=nt,x.__webglTexture=rt[nt].texture}return O}function j(x,g,O){let J=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=n.TEXTURE_3D);const rt=Tt(x,g),nt=g.source;e.bindTexture(J,x.__webglTexture,n.TEXTURE0+O);const wt=i.get(nt);if(nt.version!==wt.__version||rt===!0){e.activeTexture(n.TEXTURE0+O);const yt=te.getPrimaries(te.workingColorSpace),pt=g.colorSpace===Ni?null:te.getPrimaries(g.colorSpace),Rt=g.colorSpace===Ni||yt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let _t=v(g.image,!1,s.maxTextureSize);_t=q(g,_t);const bt=r.convert(g.format,g.colorSpace),Nt=r.convert(g.type);let It=w(g.internalFormat,bt,Nt,g.colorSpace,g.isVideoTexture);ut(J,g);let Mt;const kt=g.mipmaps,Ut=g.isVideoTexture!==!0,ne=wt.__version===void 0||rt===!0,V=nt.dataReady,St=F(g,_t);if(g.isDepthTexture)It=b(g.format===rr,g.type),ne&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,It,_t.width,_t.height):e.texImage2D(n.TEXTURE_2D,0,It,_t.width,_t.height,0,bt,Nt,null));else if(g.isDataTexture)if(kt.length>0){Ut&&ne&&e.texStorage2D(n.TEXTURE_2D,St,It,kt[0].width,kt[0].height);for(let dt=0,vt=kt.length;dt<vt;dt++)Mt=kt[dt],Ut?V&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,bt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,dt,It,Mt.width,Mt.height,0,bt,Nt,Mt.data);g.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(n.TEXTURE_2D,St,It,_t.width,_t.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t.width,_t.height,bt,Nt,_t.data)):e.texImage2D(n.TEXTURE_2D,0,It,_t.width,_t.height,0,bt,Nt,_t.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,It,kt[0].width,kt[0].height,_t.depth);for(let dt=0,vt=kt.length;dt<vt;dt++)if(Mt=kt[dt],g.format!==Cn)if(bt!==null)if(Ut){if(V)if(g.layerUpdates.size>0){const Dt=Mf(Mt.width,Mt.height,g.format,g.type);for(const Ct of g.layerUpdates){const Yt=Mt.data.subarray(Ct*Dt/Mt.data.BYTES_PER_ELEMENT,(Ct+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,Ct,Mt.width,Mt.height,1,bt,Yt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,_t.depth,bt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,It,Mt.width,Mt.height,_t.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,Mt.width,Mt.height,_t.depth,bt,Nt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,It,Mt.width,Mt.height,_t.depth,0,bt,Nt,Mt.data)}else{Ut&&ne&&e.texStorage2D(n.TEXTURE_2D,St,It,kt[0].width,kt[0].height);for(let dt=0,vt=kt.length;dt<vt;dt++)Mt=kt[dt],g.format!==Cn?bt!==null?Ut?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?V&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,Mt.width,Mt.height,bt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,dt,It,Mt.width,Mt.height,0,bt,Nt,Mt.data)}else if(g.isDataArrayTexture)if(Ut){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,St,It,_t.width,_t.height,_t.depth),V)if(g.layerUpdates.size>0){const dt=Mf(_t.width,_t.height,g.format,g.type);for(const vt of g.layerUpdates){const Dt=_t.data.subarray(vt*dt/_t.data.BYTES_PER_ELEMENT,(vt+1)*dt/_t.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,_t.width,_t.height,1,bt,Nt,Dt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_t.width,_t.height,_t.depth,bt,Nt,_t.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,_t.width,_t.height,_t.depth,0,bt,Nt,_t.data);else if(g.isData3DTexture)Ut?(ne&&e.texStorage3D(n.TEXTURE_3D,St,It,_t.width,_t.height,_t.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_t.width,_t.height,_t.depth,bt,Nt,_t.data)):e.texImage3D(n.TEXTURE_3D,0,It,_t.width,_t.height,_t.depth,0,bt,Nt,_t.data);else if(g.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(n.TEXTURE_2D,St,It,_t.width,_t.height);else{let dt=_t.width,vt=_t.height;for(let Dt=0;Dt<St;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,It,dt,vt,0,bt,Nt,null),dt>>=1,vt>>=1}}else if(kt.length>0){if(Ut&&ne){const dt=y(kt[0]);e.texStorage2D(n.TEXTURE_2D,St,It,dt.width,dt.height)}for(let dt=0,vt=kt.length;dt<vt;dt++)Mt=kt[dt],Ut?V&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,bt,Nt,Mt):e.texImage2D(n.TEXTURE_2D,dt,It,bt,Nt,Mt);g.generateMipmaps=!1}else if(Ut){if(ne){const dt=y(_t);e.texStorage2D(n.TEXTURE_2D,St,It,dt.width,dt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Nt,_t)}else e.texImage2D(n.TEXTURE_2D,0,It,bt,Nt,_t);m(g)&&p(J),wt.__version=nt.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function ct(x,g,O){if(g.image.length!==6)return;const J=Tt(x,g),rt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+O);const nt=i.get(rt);if(rt.version!==nt.__version||J===!0){e.activeTexture(n.TEXTURE0+O);const wt=te.getPrimaries(te.workingColorSpace),yt=g.colorSpace===Ni?null:te.getPrimaries(g.colorSpace),pt=g.colorSpace===Ni||wt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const Rt=g.isCompressedTexture||g.image[0].isCompressedTexture,_t=g.image[0]&&g.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!Rt&&!_t?bt[vt]=v(g.image[vt],!0,s.maxCubemapSize):bt[vt]=_t?g.image[vt].image:g.image[vt],bt[vt]=q(g,bt[vt]);const Nt=bt[0],It=r.convert(g.format,g.colorSpace),Mt=r.convert(g.type),kt=w(g.internalFormat,It,Mt,g.colorSpace),Ut=g.isVideoTexture!==!0,ne=nt.__version===void 0||J===!0,V=rt.dataReady;let St=F(g,Nt);ut(n.TEXTURE_CUBE_MAP,g);let dt;if(Rt){Ut&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,kt,Nt.width,Nt.height);for(let vt=0;vt<6;vt++){dt=bt[vt].mipmaps;for(let Dt=0;Dt<dt.length;Dt++){const Ct=dt[Dt];g.format!==Cn?It!==null?Ut?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,0,0,Ct.width,Ct.height,It,Mt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt,kt,Ct.width,Ct.height,0,It,Mt,Ct.data)}}}else{if(dt=g.mipmaps,Ut&&ne){dt.length>0&&St++;const vt=y(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,kt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(_t){Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,It,Mt,bt[vt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,kt,bt[vt].width,bt[vt].height,0,It,Mt,bt[vt].data);for(let Dt=0;Dt<dt.length;Dt++){const Yt=dt[Dt].image[vt].image;Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,Yt.width,Yt.height,It,Mt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,kt,Yt.width,Yt.height,0,It,Mt,Yt.data)}}else{Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,It,Mt,bt[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,kt,It,Mt,bt[vt]);for(let Dt=0;Dt<dt.length;Dt++){const Ct=dt[Dt];Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,0,0,It,Mt,Ct.image[vt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Dt+1,kt,It,Mt,Ct.image[vt])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),nt.__version=rt.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function xt(x,g,O,J,rt,nt){const wt=r.convert(O.format,O.colorSpace),yt=r.convert(O.type),pt=w(O.internalFormat,wt,yt,O.colorSpace),Rt=i.get(g),_t=i.get(O);if(_t.__renderTarget=g,!Rt.__hasExternalTextures){const bt=Math.max(1,g.width>>nt),Nt=Math.max(1,g.height>>nt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,nt,pt,bt,Nt,g.depth,0,wt,yt,null):e.texImage2D(rt,nt,pt,bt,Nt,0,wt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),it(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,rt,_t.__webglTexture,0,K(g)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,rt,_t.__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function I(x,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const J=g.depthTexture,rt=J&&J.isDepthTexture?J.type:null,nt=b(g.stencilBuffer,rt),wt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=K(g);it(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,nt,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,nt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,nt,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,x)}else{const J=g.textures;for(let rt=0;rt<J.length;rt++){const nt=J[rt],wt=r.convert(nt.format,nt.colorSpace),yt=r.convert(nt.type),pt=w(nt.internalFormat,wt,yt,nt.colorSpace),Rt=K(g);O&&it(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,pt,g.width,g.height):it(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,pt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,pt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Q(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ht(g.depthTexture,0);const rt=J.__webglTexture,nt=K(g);if(g.depthTexture.format===js)it(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(g.depthTexture.format===rr)it(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function et(x){const g=i.get(x),O=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const J=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const rt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),g.__depthDisposeCallback=rt}g.__boundDepthTexture=J}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Q(g.__webglFramebuffer,x)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=n.createRenderbuffer(),I(g.__webglDepthbuffer[J],x,!1);else{const rt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,nt=g.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,nt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),I(g.__webglDepthbuffer,x,!1);else{const J=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(x,g,O){const J=i.get(x);g!==void 0&&xt(J.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&et(x)}function E(x){const g=x.texture,O=i.get(x),J=i.get(g);x.addEventListener("dispose",U);const rt=x.textures,nt=x.isWebGLCubeRenderTarget===!0,wt=rt.length>1;if(wt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=g.version,o.memory.textures++),nt){O.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[yt]=[];for(let pt=0;pt<g.mipmaps.length;pt++)O.__webglFramebuffer[yt][pt]=n.createFramebuffer()}else O.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let yt=0;yt<g.mipmaps.length;yt++)O.__webglFramebuffer[yt]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(wt)for(let yt=0,pt=rt.length;yt<pt;yt++){const Rt=i.get(rt[yt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&it(x)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let yt=0;yt<rt.length;yt++){const pt=rt[yt];O.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[yt]);const Rt=r.convert(pt.format,pt.colorSpace),_t=r.convert(pt.type),bt=w(pt.internalFormat,Rt,_t,pt.colorSpace,x.isXRRenderTarget===!0),Nt=K(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,bt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,O.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),I(O.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ut(n.TEXTURE_CUBE_MAP,g);for(let yt=0;yt<6;yt++)if(g.mipmaps&&g.mipmaps.length>0)for(let pt=0;pt<g.mipmaps.length;pt++)xt(O.__webglFramebuffer[yt][pt],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,pt);else xt(O.__webglFramebuffer[yt],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let yt=0,pt=rt.length;yt<pt;yt++){const Rt=rt[yt],_t=i.get(Rt);e.bindTexture(n.TEXTURE_2D,_t.__webglTexture),ut(n.TEXTURE_2D,Rt),xt(O.__webglFramebuffer,x,Rt,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(yt=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,J.__webglTexture),ut(yt,g),g.mipmaps&&g.mipmaps.length>0)for(let pt=0;pt<g.mipmaps.length;pt++)xt(O.__webglFramebuffer[pt],x,g,n.COLOR_ATTACHMENT0,yt,pt);else xt(O.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,yt,0);m(g)&&p(yt),e.unbindTexture()}x.depthBuffer&&et(x)}function P(x){const g=x.textures;for(let O=0,J=g.length;O<J;O++){const rt=g[O];if(m(rt)){const nt=R(x),wt=i.get(rt).__webglTexture;e.bindTexture(nt,wt),p(nt),e.unbindTexture()}}}const B=[],S=[];function Z(x){if(x.samples>0){if(it(x)===!1){const g=x.textures,O=x.width,J=x.height;let rt=n.COLOR_BUFFER_BIT;const nt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(x),yt=g.length>1;if(yt)for(let pt=0;pt<g.length;pt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let pt=0;pt<g.length;pt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const Rt=i.get(g[pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,O,J,0,0,O,J,rt,n.NEAREST),l===!0&&(B.length=0,S.length=0,B.push(n.COLOR_ATTACHMENT0+pt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(B.push(nt),S.push(nt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,B))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let pt=0;pt<g.length;pt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[pt]);const Rt=i.get(g[pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function K(x){return Math.min(s.maxSamples,x.samples)}function it(x){const g=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function st(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function q(x,g){const O=x.colorSpace,J=x.format,rt=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==ar&&O!==Ni&&(te.getTransfer(O)===de?(J!==Cn||rt!==Mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function y(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=tt,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=G,this.rebindTextures=gt,this.setupRenderTarget=E,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=it}function pT(n,t){function e(i,s=Ni){let r;const o=te.getTransfer(s);if(i===Mi)return n.UNSIGNED_BYTE;if(i===lu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===cu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fp)return n.BYTE;if(i===hp)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===au)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===Cn)return n.RGBA;if(i===_p)return n.LUMINANCE;if(i===vp)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===xp)return n.RED;if(i===uu)return n.RED_INTEGER;if(i===yp)return n.RG;if(i===du)return n.RG_INTEGER;if(i===fu)return n.RGBA_INTEGER;if(i===$o||i===Yo||i===qo||i===jo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===uc||i===dc||i===fc||i===hc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===uc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pc||i===mc||i===gc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===pc||i===mc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Dc||i===Lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mp||i===Ic||i===Uc||i===Nc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class mT extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const _T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vT=`
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

}`;class xT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:_T,fragmentShader:vT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yT extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const v=new xT,m=e.getContextAttributes();let p=null,R=null;const w=[],b=[],F=new Xt;let z=null;const U=new gn;U.viewport=new Se;const H=new gn;H.viewport=new Se;const C=[U,H],T=new mT;let N=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ct=w[j];return ct===void 0&&(ct=new wl,w[j]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(j){let ct=w[j];return ct===void 0&&(ct=new wl,w[j]=ct),ct.getGripSpace()},this.getHand=function(j){let ct=w[j];return ct===void 0&&(ct=new wl,w[j]=ct),ct.getHandSpace()};function tt(j){const ct=b.indexOf(j.inputSource);if(ct===-1)return;const xt=w[ct];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||o),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function mt(){s.removeEventListener("select",tt),s.removeEventListener("selectstart",tt),s.removeEventListener("selectend",tt),s.removeEventListener("squeeze",tt),s.removeEventListener("squeezestart",tt),s.removeEventListener("squeezeend",tt),s.removeEventListener("end",mt),s.removeEventListener("inputsourceschange",ht);for(let j=0;j<w.length;j++){const ct=b[j];ct!==null&&(b[j]=null,w[j].disconnect(ct))}N=null,lt=null,v.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,R=null,Tt.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",tt),s.addEventListener("selectstart",tt),s.addEventListener("selectend",tt),s.addEventListener("squeeze",tt),s.addEventListener("squeezestart",tt),s.addEventListener("squeezeend",tt),s.addEventListener("end",mt),s.addEventListener("inputsourceschange",ht),m.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new ms(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:Mi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,xt=null,I=null;m.depth&&(I=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?rr:js,xt=m.stencil?sr:ps);const Q={colorFormat:e.RGBA8,depthFormat:I,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Q),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ms(f.textureWidth,f.textureHeight,{format:Cn,type:Mi,depthTexture:new Op(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ht(j){for(let ct=0;ct<j.removed.length;ct++){const xt=j.removed[ct],I=b.indexOf(xt);I>=0&&(b[I]=null,w[I].disconnect(xt))}for(let ct=0;ct<j.added.length;ct++){const xt=j.added[ct];let I=b.indexOf(xt);if(I===-1){for(let et=0;et<w.length;et++)if(et>=b.length){b.push(xt),I=et;break}else if(b[et]===null){b[et]=xt,I=et;break}if(I===-1)break}const Q=w[I];Q&&Q.connect(xt)}}const W=new Y,k=new Y;function G(j,ct,xt){W.setFromMatrixPosition(ct.matrixWorld),k.setFromMatrixPosition(xt.matrixWorld);const I=W.distanceTo(k),Q=ct.projectionMatrix.elements,et=xt.projectionMatrix.elements,gt=Q[14]/(Q[10]-1),E=Q[14]/(Q[10]+1),P=(Q[9]+1)/Q[5],B=(Q[9]-1)/Q[5],S=(Q[8]-1)/Q[0],Z=(et[8]+1)/et[0],K=gt*S,it=gt*Z,st=I/(-S+Z),q=st*-S;if(ct.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(q),j.translateZ(st),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Q[10]===-1)j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const y=gt+st,x=E+st,g=K-q,O=it+(I-q),J=P*E/x*y,rt=B*E/x*y;j.projectionMatrix.makePerspective(g,O,J,rt,y,x),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,ct){ct===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ct.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ct=j.near,xt=j.far;v.texture!==null&&(v.depthNear>0&&(ct=v.depthNear),v.depthFar>0&&(xt=v.depthFar)),T.near=H.near=U.near=ct,T.far=H.far=U.far=xt,(N!==T.near||lt!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,lt=T.far),U.layers.mask=j.layers.mask|2,H.layers.mask=j.layers.mask|4,T.layers.mask=U.layers.mask|H.layers.mask;const I=j.parent,Q=T.cameras;ft(T,I);for(let et=0;et<Q.length;et++)ft(Q[et],I);Q.length===2?G(T,U,H):T.projectionMatrix.copy(U.projectionMatrix),L(j,T,I)};function L(j,ct,xt){xt===null?j.matrix.copy(ct.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(ct.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ct.projectionMatrix),j.projectionMatrixInverse.copy(ct.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Fc*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let D=null;function ut(j,ct){if(u=ct.getViewerPose(c||o),_=ct,u!==null){const xt=u.views;h!==null&&(t.setRenderTargetFramebuffer(R,h.framebuffer),t.setRenderTarget(R));let I=!1;xt.length!==T.cameras.length&&(T.cameras.length=0,I=!0);for(let et=0;et<xt.length;et++){const gt=xt[et];let E=null;if(h!==null)E=h.getViewport(gt);else{const B=d.getViewSubImage(f,gt);E=B.viewport,et===0&&(t.setRenderTargetTextures(R,B.colorTexture,f.ignoreDepthValues?void 0:B.depthStencilTexture),t.setRenderTarget(R))}let P=C[et];P===void 0&&(P=new gn,P.layers.enable(et),P.viewport=new Se,C[et]=P),P.matrix.fromArray(gt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(gt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(E.x,E.y,E.width,E.height),et===0&&(T.matrix.copy(P.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),I===!0&&T.cameras.push(P)}const Q=s.enabledFeatures;if(Q&&Q.includes("depth-sensing")){const et=d.getDepthInformation(xt[0]);et&&et.isValid&&et.texture&&v.init(t,et,s.renderState)}}for(let xt=0;xt<w.length;xt++){const I=b[xt],Q=w[xt];I!==null&&Q!==void 0&&Q.update(I,ct,c||o)}D&&D(j,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),_=null}const Tt=new Up;Tt.setAnimationLoop(ut),this.setAnimationLoop=function(j){D=j},this.dispose=function(){}}}const ts=new Zn,MT=new xe;function ST(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,w,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=t.get(p),w=R.envMap,b=R.envMapRotation;w&&(m.envMap.value=w,ts.copy(b),ts.x*=-1,ts.y*=-1,ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(MT.makeRotationFromEuler(ts)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const R=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const b=w.program;i.uniformBlockBinding(R,b)}function c(R,w){let b=s[R.id];b===void 0&&(_(R),b=u(R),s[R.id]=b,R.addEventListener("dispose",m));const F=w.program;i.updateUBOMapping(R,F);const z=t.render.frame;r[R.id]!==z&&(f(R),r[R.id]=z)}function u(R){const w=d();R.__bindingPointIndex=w;const b=n.createBuffer(),F=R.__size,z=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,F,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const w=s[R.id],b=R.uniforms,F=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let z=0,U=b.length;z<U;z++){const H=Array.isArray(b[z])?b[z]:[b[z]];for(let C=0,T=H.length;C<T;C++){const N=H[C];if(h(N,z,C,F)===!0){const lt=N.__offset,tt=Array.isArray(N.value)?N.value:[N.value];let mt=0;for(let ht=0;ht<tt.length;ht++){const W=tt[ht],k=v(W);typeof W=="number"||typeof W=="boolean"?(N.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,lt+mt,N.__data)):W.isMatrix3?(N.__data[0]=W.elements[0],N.__data[1]=W.elements[1],N.__data[2]=W.elements[2],N.__data[3]=0,N.__data[4]=W.elements[3],N.__data[5]=W.elements[4],N.__data[6]=W.elements[5],N.__data[7]=0,N.__data[8]=W.elements[6],N.__data[9]=W.elements[7],N.__data[10]=W.elements[8],N.__data[11]=0):(W.toArray(N.__data,mt),mt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,lt,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(R,w,b,F){const z=R.value,U=w+"_"+b;if(F[U]===void 0)return typeof z=="number"||typeof z=="boolean"?F[U]=z:F[U]=z.clone(),!0;{const H=F[U];if(typeof z=="number"||typeof z=="boolean"){if(H!==z)return F[U]=z,!0}else if(H.equals(z)===!1)return H.copy(z),!0}return!1}function _(R){const w=R.uniforms;let b=0;const F=16;for(let U=0,H=w.length;U<H;U++){const C=Array.isArray(w[U])?w[U]:[w[U]];for(let T=0,N=C.length;T<N;T++){const lt=C[T],tt=Array.isArray(lt.value)?lt.value:[lt.value];for(let mt=0,ht=tt.length;mt<ht;mt++){const W=tt[mt],k=v(W),G=b%F,ft=G%k.boundary,L=G+ft;b+=ft,L!==0&&F-L<k.storage&&(b+=F-L),lt.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=b,b+=k.storage}}}const z=b%F;return z>0&&(b+=F-z),R.__size=b,R.__cache={},this}function v(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function m(R){const w=R.target;w.removeEventListener("dispose",m);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class ET{constructor(t={}){const{canvas:e=fM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const R=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=vi,this.toneMappingExposure=1;const b=this;let F=!1,z=0,U=0,H=null,C=-1,T=null;const N=new Se,lt=new Se;let tt=null;const mt=new $t(0);let ht=0,W=e.width,k=e.height,G=1,ft=null,L=null;const D=new Se(0,0,W,k),ut=new Se(0,0,W,k);let Tt=!1;const j=new pu;let ct=!1,xt=!1;const I=new xe,Q=new xe,et=new Y,gt=new Se,E={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function B(){return H===null?G:1}let S=i;function Z(A,X){return e.getContext(A,X)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ou}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),S===null){const X="webgl2";if(S=Z(X,A),S===null)throw Z(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let K,it,st,q,y,x,g,O,J,rt,nt,wt,yt,pt,Rt,_t,bt,Nt,It,Mt,kt,Ut,ne,V;function St(){K=new RE(S),K.init(),Ut=new pT(S,K),it=new bE(S,K,t,Ut),st=new dT(S,K),it.reverseDepthBuffer&&f&&st.buffers.depth.setReversed(!0),q=new LE(S),y=new K1,x=new hT(S,K,st,y,it,Ut,q),g=new TE(b),O=new CE(b),J=new zM(S),ne=new ME(S,J),rt=new PE(S,J,q,ne),nt=new UE(S,rt,J,q),It=new IE(S,it,x),_t=new EE(y),wt=new j1(b,g,O,K,it,ne,_t),yt=new ST(b,y),pt=new J1,Rt=new sT(K),Nt=new yE(b,g,O,st,nt,h,l),bt=new cT(b,nt,it),V=new bT(S,q,it,st),Mt=new SE(S,K,q),kt=new DE(S,K,q),q.programs=wt.programs,b.capabilities=it,b.extensions=K,b.properties=y,b.renderLists=pt,b.shadowMap=bt,b.state=st,b.info=q}St();const dt=new yT(b,S);this.xr=dt,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=K.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=K.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(W,k,!1))},this.getSize=function(A){return A.set(W,k)},this.setSize=function(A,X,ot=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,k=X,e.width=Math.floor(A*G),e.height=Math.floor(X*G),ot===!0&&(e.style.width=A+"px",e.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(W*G,k*G).floor()},this.setDrawingBufferSize=function(A,X,ot){W=A,k=X,G=ot,e.width=Math.floor(A*ot),e.height=Math.floor(X*ot),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(D)},this.setViewport=function(A,X,ot,at){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,X,ot,at),st.viewport(N.copy(D).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(ut)},this.setScissor=function(A,X,ot,at){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,X,ot,at),st.scissor(lt.copy(ut).multiplyScalar(G).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(A){st.setScissorTest(Tt=A)},this.setOpaqueSort=function(A){ft=A},this.setTransparentSort=function(A){L=A},this.getClearColor=function(A){return A.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(A=!0,X=!0,ot=!0){let at=0;if(A){let $=!1;if(H!==null){const At=H.texture.format;$=At===fu||At===du||At===uu}if($){const At=H.texture.type,Lt=At===Mi||At===ps||At===Yr||At===sr||At===lu||At===cu,Ot=Nt.getClearColor(),Ft=Nt.getClearAlpha(),qt=Ot.r,Kt=Ot.g,Bt=Ot.b;Lt?(_[0]=qt,_[1]=Kt,_[2]=Bt,_[3]=Ft,S.clearBufferuiv(S.COLOR,0,_)):(v[0]=qt,v[1]=Kt,v[2]=Bt,v[3]=Ft,S.clearBufferiv(S.COLOR,0,v))}else at|=S.COLOR_BUFFER_BIT}X&&(at|=S.DEPTH_BUFFER_BIT),ot&&(at|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),pt.dispose(),Rt.dispose(),y.dispose(),g.dispose(),O.dispose(),nt.dispose(),ne.dispose(),V.dispose(),wt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",_u),dt.removeEventListener("sessionend",vu),$i.stop()};function vt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=q.autoReset,X=bt.enabled,ot=bt.autoUpdate,at=bt.needsUpdate,$=bt.type;St(),q.autoReset=A,bt.enabled=X,bt.autoUpdate=ot,bt.needsUpdate=at,bt.type=$}function Ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const X=A.target;X.removeEventListener("dispose",Yt),ye(X)}function ye(A){Be(A),y.remove(A)}function Be(A){const X=y.get(A).programs;X!==void 0&&(X.forEach(function(ot){wt.releaseProgram(ot)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ot,at,$,At){X===null&&(X=E);const Lt=$.isMesh&&$.matrixWorld.determinant()<0,Ot=Yp(A,X,ot,at,$);st.setMaterial(at,Lt);let Ft=ot.index,qt=1;if(at.wireframe===!0){if(Ft=rt.getWireframeAttribute(ot),Ft===void 0)return;qt=2}const Kt=ot.drawRange,Bt=ot.attributes.position;let ee=Kt.start*qt,me=(Kt.start+Kt.count)*qt;At!==null&&(ee=Math.max(ee,At.start*qt),me=Math.min(me,(At.start+At.count)*qt)),Ft!==null?(ee=Math.max(ee,0),me=Math.min(me,Ft.count)):Bt!=null&&(ee=Math.max(ee,0),me=Math.min(me,Bt.count));const _e=me-ee;if(_e<0||_e===1/0)return;ne.setup($,at,Ot,ot,Ft);let en,se=Mt;if(Ft!==null&&(en=J.get(Ft),se=kt,se.setIndex(en)),$.isMesh)at.wireframe===!0?(st.setLineWidth(at.wireframeLinewidth*B()),se.setMode(S.LINES)):se.setMode(S.TRIANGLES);else if($.isLine){let Vt=at.linewidth;Vt===void 0&&(Vt=1),st.setLineWidth(Vt*B()),$.isLineSegments?se.setMode(S.LINES):$.isLineLoop?se.setMode(S.LINE_LOOP):se.setMode(S.LINE_STRIP)}else $.isPoints?se.setMode(S.POINTS):$.isSprite&&se.setMode(S.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)se.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))se.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Vt=$._multiDrawStarts,Qn=$._multiDrawCounts,re=$._multiDrawCount,Sn=Ft?J.get(Ft).bytesPerElement:1,ys=y.get(at).currentProgram.getUniforms();for(let on=0;on<re;on++)ys.setValue(S,"_gl_DrawID",on),se.render(Vt[on]/Sn,Qn[on])}else if($.isInstancedMesh)se.renderInstances(ee,_e,$.count);else if(ot.isInstancedBufferGeometry){const Vt=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Qn=Math.min(ot.instanceCount,Vt);se.renderInstances(ee,_e,Qn)}else se.render(ee,_e)};function le(A,X,ot){A.transparent===!0&&A.side===mi&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,io(A,X,ot),A.side=Gi,A.needsUpdate=!0,io(A,X,ot),A.side=mi):io(A,X,ot)}this.compile=function(A,X,ot=null){ot===null&&(ot=A),p=Rt.get(ot),p.init(X),w.push(p),ot.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),A!==ot&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(p.pushLight($),$.castShadow&&p.pushShadow($))}),p.setupLights();const at=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const At=$.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ot=At[Lt];le(Ot,ot,$),at.add(Ot)}else le(At,ot,$),at.add(At)}),w.pop(),p=null,at},this.compileAsync=function(A,X,ot=null){const at=this.compile(A,X,ot);return new Promise($=>{function At(){if(at.forEach(function(Lt){y.get(Lt).currentProgram.isReady()&&at.delete(Lt)}),at.size===0){$(A);return}setTimeout(At,10)}K.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Mn=null;function Jn(A){Mn&&Mn(A)}function _u(){$i.stop()}function vu(){$i.start()}const $i=new Up;$i.setAnimationLoop(Jn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){Mn=A,dt.setAnimationLoop(A),A===null?$i.stop():$i.start()},dt.addEventListener("sessionstart",_u),dt.addEventListener("sessionend",vu),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(X),X=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,X,H),p=Rt.get(A,w.length),p.init(X),w.push(p),Q.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(Q),xt=this.localClippingEnabled,ct=_t.init(this.clippingPlanes,xt),m=pt.get(A,R.length),m.init(),R.push(m),dt.enabled===!0&&dt.isPresenting===!0){const At=b.xr.getDepthSensingMesh();At!==null&&Na(At,X,-1/0,b.sortObjects)}Na(A,X,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ft,L),P=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,P&&Nt.addToRenderList(m,A),this.info.render.frame++,ct===!0&&_t.beginShadows();const ot=p.state.shadowsArray;bt.render(ot,A,X),ct===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,$=m.transmissive;if(p.setupLights(),X.isArrayCamera){const At=X.cameras;if($.length>0)for(let Lt=0,Ot=At.length;Lt<Ot;Lt++){const Ft=At[Lt];yu(at,$,A,Ft)}P&&Nt.render(A);for(let Lt=0,Ot=At.length;Lt<Ot;Lt++){const Ft=At[Lt];xu(m,A,Ft,Ft.viewport)}}else $.length>0&&yu(at,$,A,X),P&&Nt.render(A),xu(m,A,X);H!==null&&(x.updateMultisampleRenderTarget(H),x.updateRenderTargetMipmap(H)),A.isScene===!0&&A.onAfterRender(b,A,X),ne.resetDefaultState(),C=-1,T=null,w.pop(),w.length>0?(p=w[w.length-1],ct===!0&&_t.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Na(A,X,ot,at){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){at&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const Lt=nt.update(A),Ot=A.material;Ot.visible&&m.push(A,Lt,Ot,ot,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Lt=nt.update(A),Ot=A.material;if(at&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),gt.copy(Lt.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(Ot)){const Ft=Lt.groups;for(let qt=0,Kt=Ft.length;qt<Kt;qt++){const Bt=Ft[qt],ee=Ot[Bt.materialIndex];ee&&ee.visible&&m.push(A,Lt,ee,ot,gt.z,Bt)}}else Ot.visible&&m.push(A,Lt,Ot,ot,gt.z,null)}}const At=A.children;for(let Lt=0,Ot=At.length;Lt<Ot;Lt++)Na(At[Lt],X,ot,at)}function xu(A,X,ot,at){const $=A.opaque,At=A.transmissive,Lt=A.transparent;p.setupLightsView(ot),ct===!0&&_t.setGlobalState(b.clippingPlanes,ot),at&&st.viewport(N.copy(at)),$.length>0&&no($,X,ot),At.length>0&&no(At,X,ot),Lt.length>0&&no(Lt,X,ot),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function yu(A,X,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new ms(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Qr:Mi,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const At=p.state.transmissionRenderTarget[at.id],Lt=at.viewport||N;At.setSize(Lt.z,Lt.w);const Ot=b.getRenderTarget();b.setRenderTarget(At),b.getClearColor(mt),ht=b.getClearAlpha(),ht<1&&b.setClearColor(16777215,.5),b.clear(),P&&Nt.render(ot);const Ft=b.toneMapping;b.toneMapping=vi;const qt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),ct===!0&&_t.setGlobalState(b.clippingPlanes,at),no(A,ot,at),x.updateMultisampleRenderTarget(At),x.updateRenderTargetMipmap(At),K.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Bt=0,ee=X.length;Bt<ee;Bt++){const me=X[Bt],_e=me.object,en=me.geometry,se=me.material,Vt=me.group;if(se.side===mi&&_e.layers.test(at.layers)){const Qn=se.side;se.side=rn,se.needsUpdate=!0,Mu(_e,ot,at,en,se,Vt),se.side=Qn,se.needsUpdate=!0,Kt=!0}}Kt===!0&&(x.updateMultisampleRenderTarget(At),x.updateRenderTargetMipmap(At))}b.setRenderTarget(Ot),b.setClearColor(mt,ht),qt!==void 0&&(at.viewport=qt),b.toneMapping=Ft}function no(A,X,ot){const at=X.isScene===!0?X.overrideMaterial:null;for(let $=0,At=A.length;$<At;$++){const Lt=A[$],Ot=Lt.object,Ft=Lt.geometry,qt=at===null?Lt.material:at,Kt=Lt.group;Ot.layers.test(ot.layers)&&Mu(Ot,X,ot,Ft,qt,Kt)}}function Mu(A,X,ot,at,$,At){A.onBeforeRender(b,X,ot,at,$,At),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(b,X,ot,at,A,At),$.transparent===!0&&$.side===mi&&$.forceSinglePass===!1?($.side=rn,$.needsUpdate=!0,b.renderBufferDirect(ot,X,at,$,A,At),$.side=Gi,$.needsUpdate=!0,b.renderBufferDirect(ot,X,at,$,A,At),$.side=mi):b.renderBufferDirect(ot,X,at,$,A,At),A.onAfterRender(b,X,ot,at,$,At)}function io(A,X,ot){X.isScene!==!0&&(X=E);const at=y.get(A),$=p.state.lights,At=p.state.shadowsArray,Lt=$.state.version,Ot=wt.getParameters(A,$.state,At,X,ot),Ft=wt.getProgramCacheKey(Ot);let qt=at.programs;at.environment=A.isMeshStandardMaterial?X.environment:null,at.fog=X.fog,at.envMap=(A.isMeshStandardMaterial?O:g).get(A.envMap||at.environment),at.envMapRotation=at.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",Yt),qt=new Map,at.programs=qt);let Kt=qt.get(Ft);if(Kt!==void 0){if(at.currentProgram===Kt&&at.lightsStateVersion===Lt)return bu(A,Ot),Kt}else Ot.uniforms=wt.getUniforms(A),A.onBeforeCompile(Ot,b),Kt=wt.acquireProgram(Ot,Ft),qt.set(Ft,Kt),at.uniforms=Ot.uniforms;const Bt=at.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Bt.clippingPlanes=_t.uniform),bu(A,Ot),at.needsLights=jp(A),at.lightsStateVersion=Lt,at.needsLights&&(Bt.ambientLightColor.value=$.state.ambient,Bt.lightProbe.value=$.state.probe,Bt.directionalLights.value=$.state.directional,Bt.directionalLightShadows.value=$.state.directionalShadow,Bt.spotLights.value=$.state.spot,Bt.spotLightShadows.value=$.state.spotShadow,Bt.rectAreaLights.value=$.state.rectArea,Bt.ltc_1.value=$.state.rectAreaLTC1,Bt.ltc_2.value=$.state.rectAreaLTC2,Bt.pointLights.value=$.state.point,Bt.pointLightShadows.value=$.state.pointShadow,Bt.hemisphereLights.value=$.state.hemi,Bt.directionalShadowMap.value=$.state.directionalShadowMap,Bt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Bt.spotShadowMap.value=$.state.spotShadowMap,Bt.spotLightMatrix.value=$.state.spotLightMatrix,Bt.spotLightMap.value=$.state.spotLightMap,Bt.pointShadowMap.value=$.state.pointShadowMap,Bt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=Kt,at.uniformsList=null,Kt}function Su(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Zo.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function bu(A,X){const ot=y.get(A);ot.outputColorSpace=X.outputColorSpace,ot.batching=X.batching,ot.batchingColor=X.batchingColor,ot.instancing=X.instancing,ot.instancingColor=X.instancingColor,ot.instancingMorph=X.instancingMorph,ot.skinning=X.skinning,ot.morphTargets=X.morphTargets,ot.morphNormals=X.morphNormals,ot.morphColors=X.morphColors,ot.morphTargetsCount=X.morphTargetsCount,ot.numClippingPlanes=X.numClippingPlanes,ot.numIntersection=X.numClipIntersection,ot.vertexAlphas=X.vertexAlphas,ot.vertexTangents=X.vertexTangents,ot.toneMapping=X.toneMapping}function Yp(A,X,ot,at,$){X.isScene!==!0&&(X=E),x.resetTextureUnits();const At=X.fog,Lt=at.isMeshStandardMaterial?X.environment:null,Ot=H===null?b.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ar,Ft=(at.isMeshStandardMaterial?O:g).get(at.envMap||Lt),qt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,Kt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Bt=!!ot.morphAttributes.position,ee=!!ot.morphAttributes.normal,me=!!ot.morphAttributes.color;let _e=vi;at.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(_e=b.toneMapping);const en=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,se=en!==void 0?en.length:0,Vt=y.get(at),Qn=p.state.lights;if(ct===!0&&(xt===!0||A!==T)){const hn=A===T&&at.id===C;_t.setState(at,A,hn)}let re=!1;at.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Qn.state.version||Vt.outputColorSpace!==Ot||$.isBatchedMesh&&Vt.batching===!1||!$.isBatchedMesh&&Vt.batching===!0||$.isBatchedMesh&&Vt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Vt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Vt.instancing===!1||!$.isInstancedMesh&&Vt.instancing===!0||$.isSkinnedMesh&&Vt.skinning===!1||!$.isSkinnedMesh&&Vt.skinning===!0||$.isInstancedMesh&&Vt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Vt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Vt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Vt.instancingMorph===!1&&$.morphTexture!==null||Vt.envMap!==Ft||at.fog===!0&&Vt.fog!==At||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==_t.numPlanes||Vt.numIntersection!==_t.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==Kt||Vt.morphTargets!==Bt||Vt.morphNormals!==ee||Vt.morphColors!==me||Vt.toneMapping!==_e||Vt.morphTargetsCount!==se)&&(re=!0):(re=!0,Vt.__version=at.version);let Sn=Vt.currentProgram;re===!0&&(Sn=io(at,X,$));let ys=!1,on=!1,ur=!1;const ve=Sn.getUniforms(),Bn=Vt.uniforms;if(st.useProgram(Sn.program)&&(ys=!0,on=!0,ur=!0),at.id!==C&&(C=at.id,on=!0),ys||T!==A){st.buffers.depth.getReversed()?(I.copy(A.projectionMatrix),pM(I),mM(I),ve.setValue(S,"projectionMatrix",I)):ve.setValue(S,"projectionMatrix",A.projectionMatrix),ve.setValue(S,"viewMatrix",A.matrixWorldInverse);const bi=ve.map.cameraPosition;bi!==void 0&&bi.setValue(S,et.setFromMatrixPosition(A.matrixWorld)),it.logarithmicDepthBuffer&&ve.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ve.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,on=!0,ur=!0)}if($.isSkinnedMesh){ve.setOptional(S,$,"bindMatrix"),ve.setOptional(S,$,"bindMatrixInverse");const hn=$.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),ve.setValue(S,"boneTexture",hn.boneTexture,x))}$.isBatchedMesh&&(ve.setOptional(S,$,"batchingTexture"),ve.setValue(S,"batchingTexture",$._matricesTexture,x),ve.setOptional(S,$,"batchingIdTexture"),ve.setValue(S,"batchingIdTexture",$._indirectTexture,x),ve.setOptional(S,$,"batchingColorTexture"),$._colorsTexture!==null&&ve.setValue(S,"batchingColorTexture",$._colorsTexture,x));const dr=ot.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&It.update($,ot,Sn),(on||Vt.receiveShadow!==$.receiveShadow)&&(Vt.receiveShadow=$.receiveShadow,ve.setValue(S,"receiveShadow",$.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Bn.envMap.value=Ft,Bn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&X.environment!==null&&(Bn.envMapIntensity.value=X.environmentIntensity),on&&(ve.setValue(S,"toneMappingExposure",b.toneMappingExposure),Vt.needsLights&&qp(Bn,ur),At&&at.fog===!0&&yt.refreshFogUniforms(Bn,At),yt.refreshMaterialUniforms(Bn,at,G,k,p.state.transmissionRenderTarget[A.id]),Zo.upload(S,Su(Vt),Bn,x)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Zo.upload(S,Su(Vt),Bn,x),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ve.setValue(S,"center",$.center),ve.setValue(S,"modelViewMatrix",$.modelViewMatrix),ve.setValue(S,"normalMatrix",$.normalMatrix),ve.setValue(S,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const hn=at.uniformsGroups;for(let bi=0,Ei=hn.length;bi<Ei;bi++){const Eu=hn[bi];V.update(Eu,Sn),V.bind(Eu,Sn)}}return Sn}function qp(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function jp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,X,ot){y.get(A.texture).__webglTexture=X,y.get(A.depthTexture).__webglTexture=ot;const at=y.get(A);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const ot=y.get(A);ot.__webglFramebuffer=X,ot.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,ot=0){H=A,z=X,U=ot;let at=!0,$=null,At=!1,Lt=!1;if(A){const Ft=y.get(A);if(Ft.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(S.FRAMEBUFFER,null),at=!1;else if(Ft.__webglFramebuffer===void 0)x.setupRenderTarget(A);else if(Ft.__hasExternalTextures)x.rebindTextures(A,y.get(A.texture).__webglTexture,y.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Bt=A.depthTexture;if(Ft.__boundDepthTexture!==Bt){if(Bt!==null&&y.has(Bt)&&(A.width!==Bt.image.width||A.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Lt=!0);const Kt=y.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[X])?$=Kt[X][ot]:$=Kt[X],At=!0):A.samples>0&&x.useMultisampledRTT(A)===!1?$=y.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?$=Kt[ot]:$=Kt,N.copy(A.viewport),lt.copy(A.scissor),tt=A.scissorTest}else N.copy(D).multiplyScalar(G).floor(),lt.copy(ut).multiplyScalar(G).floor(),tt=Tt;if(st.bindFramebuffer(S.FRAMEBUFFER,$)&&at&&st.drawBuffers(A,$),st.viewport(N),st.scissor(lt),st.setScissorTest(tt),At){const Ft=y.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,ot)}else if(Lt){const Ft=y.get(A.texture),qt=X||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ft.__webglTexture,ot||0,qt)}C=-1},this.readRenderTargetPixels=function(A,X,ot,at,$,At,Lt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){st.bindFramebuffer(S.FRAMEBUFFER,Ot);try{const Ft=A.texture,qt=Ft.format,Kt=Ft.type;if(!it.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-at&&ot>=0&&ot<=A.height-$&&S.readPixels(X,ot,at,$,Ut.convert(qt),Ut.convert(Kt),At)}finally{const Ft=H!==null?y.get(H).__webglFramebuffer:null;st.bindFramebuffer(S.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(A,X,ot,at,$,At,Lt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=y.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ot=Ot[Lt]),Ot){const Ft=A.texture,qt=Ft.format,Kt=Ft.type;if(!it.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-at&&ot>=0&&ot<=A.height-$){st.bindFramebuffer(S.FRAMEBUFFER,Ot);const Bt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Bt),S.bufferData(S.PIXEL_PACK_BUFFER,At.byteLength,S.STREAM_READ),S.readPixels(X,ot,at,$,Ut.convert(qt),Ut.convert(Kt),0);const ee=H!==null?y.get(H).__webglFramebuffer:null;st.bindFramebuffer(S.FRAMEBUFFER,ee);const me=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await hM(S,me,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Bt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,At),S.deleteBuffer(Bt),S.deleteSync(me),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,ot=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const at=Math.pow(2,-ot),$=Math.floor(A.image.width*at),At=Math.floor(A.image.height*at),Lt=X!==null?X.x:0,Ot=X!==null?X.y:0;x.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,ot,0,0,Lt,Ot,$,At),st.unbindTexture()},this.copyTextureToTexture=function(A,X,ot=null,at=null,$=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,A=arguments[1],X=arguments[2],$=arguments[3]||0,ot=null);let At,Lt,Ot,Ft,qt,Kt,Bt,ee,me;const _e=A.isCompressedTexture?A.mipmaps[$]:A.image;ot!==null?(At=ot.max.x-ot.min.x,Lt=ot.max.y-ot.min.y,Ot=ot.isBox3?ot.max.z-ot.min.z:1,Ft=ot.min.x,qt=ot.min.y,Kt=ot.isBox3?ot.min.z:0):(At=_e.width,Lt=_e.height,Ot=_e.depth||1,Ft=0,qt=0,Kt=0),at!==null?(Bt=at.x,ee=at.y,me=at.z):(Bt=0,ee=0,me=0);const en=Ut.convert(X.format),se=Ut.convert(X.type);let Vt;X.isData3DTexture?(x.setTexture3D(X,0),Vt=S.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(x.setTexture2DArray(X,0),Vt=S.TEXTURE_2D_ARRAY):(x.setTexture2D(X,0),Vt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,X.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,X.unpackAlignment);const Qn=S.getParameter(S.UNPACK_ROW_LENGTH),re=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Sn=S.getParameter(S.UNPACK_SKIP_PIXELS),ys=S.getParameter(S.UNPACK_SKIP_ROWS),on=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,_e.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,_e.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ft),S.pixelStorei(S.UNPACK_SKIP_ROWS,qt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Kt);const ur=A.isDataArrayTexture||A.isData3DTexture,ve=X.isDataArrayTexture||X.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Bn=y.get(A),dr=y.get(X),hn=y.get(Bn.__renderTarget),bi=y.get(dr.__renderTarget);st.bindFramebuffer(S.READ_FRAMEBUFFER,hn.__webglFramebuffer),st.bindFramebuffer(S.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Ei=0;Ei<Ot;Ei++)ur&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,y.get(A).__webglTexture,$,Kt+Ei),A.isDepthTexture?(ve&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,y.get(X).__webglTexture,$,me+Ei),S.blitFramebuffer(Ft,qt,At,Lt,Bt,ee,At,Lt,S.DEPTH_BUFFER_BIT,S.NEAREST)):ve?S.copyTexSubImage3D(Vt,$,Bt,ee,me+Ei,Ft,qt,At,Lt):S.copyTexSubImage2D(Vt,$,Bt,ee,me+Ei,Ft,qt,At,Lt);st.bindFramebuffer(S.READ_FRAMEBUFFER,null),st.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ve?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(Vt,$,Bt,ee,me,At,Lt,Ot,en,se,_e.data):X.isCompressedArrayTexture?S.compressedTexSubImage3D(Vt,$,Bt,ee,me,At,Lt,Ot,en,_e.data):S.texSubImage3D(Vt,$,Bt,ee,me,At,Lt,Ot,en,se,_e):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,$,Bt,ee,At,Lt,en,se,_e.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,$,Bt,ee,_e.width,_e.height,en,_e.data):S.texSubImage2D(S.TEXTURE_2D,$,Bt,ee,At,Lt,en,se,_e);S.pixelStorei(S.UNPACK_ROW_LENGTH,Qn),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,re),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Sn),S.pixelStorei(S.UNPACK_SKIP_ROWS,ys),S.pixelStorei(S.UNPACK_SKIP_IMAGES,on),$===0&&X.generateMipmaps&&S.generateMipmap(Vt),st.unbindTexture()},this.copyTextureToTexture3D=function(A,X,ot=null,at=null,$=0){return A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,A=arguments[2],X=arguments[3],$=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,ot,at,$)},this.initRenderTarget=function(A){y.get(A).__webglFramebuffer===void 0&&x.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?x.setTextureCube(A,0):A.isData3DTexture?x.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?x.setTexture2DArray(A,0):x.setTexture2D(A,0),st.unbindTexture()},this.resetState=function(){z=0,U=0,H=null,st.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class TT extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new Y;class ua{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new In(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ua(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vp extends xs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Os;const yr=new Y,Fs=new Y,Bs=new Y,zs=new Xt,Mr=new Xt,Hp=new xe,Lo=new Y,Sr=new Y,Io=new Y,Sf=new Xt,Al=new Xt,bf=new Xt;class AT extends Ie{constructor(t=new Vp){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new wT(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new ua(i,3,0,!1)),Os.setAttribute("uv",new ua(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Uo(Lo.set(-.5,-.5,0),Bs,o,Fs,s,r),Uo(Sr.set(.5,-.5,0),Bs,o,Fs,s,r),Uo(Io.set(.5,.5,0),Bs,o,Fs,s,r),Sf.set(0,0),Al.set(1,0),bf.set(1,1);let a=t.ray.intersectTriangle(Lo,Sr,Io,!1,yr);if(a===null&&(Uo(Sr.set(-.5,.5,0),Bs,o,Fs,s,r),Al.set(0,1),a=t.ray.intersectTriangle(Lo,Io,Sr,!1,yr),a===null))return;const l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:cn.getInterpolation(yr,Lo,Sr,Io,Sf,Al,bf,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uo(n,t,e,i,s,r){zs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Mr.x=r*zs.x-s*zs.y,Mr.y=s*zs.x+r*zs.y):Mr.copy(zs),n.copy(t),n.x+=Mr.x,n.y+=Mr.y,n.applyMatrix4(Hp)}class da extends xs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new Y,ha=new Y,Ef=new xe,br=new Ia,No=new La,Cl=new Y,Tf=new Y;class Rr extends Ie{constructor(t=new Je,e=new da){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)fa.fromBufferAttribute(e,s-1),ha.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fa.distanceTo(ha);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Ef.copy(s).invert(),br.copy(t.ray).applyMatrix4(Ef);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=h,m=_-1;v<m;v+=c){const p=u.getX(v),R=u.getX(v+1),w=Oo(this,t,br,l,p,R);w&&e.push(w)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(h),p=Oo(this,t,br,l,v,m);p&&e.push(p)}}else{const h=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=h,m=_-1;v<m;v+=c){const p=Oo(this,t,br,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Oo(this,t,br,l,_-1,h);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(fa.fromBufferAttribute(o,s),ha.fromBufferAttribute(o,r),e.distanceSqToSegment(fa,ha,Cl,Tf)>i)return;Cl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Cl);if(!(l<t.near||l>t.far))return{distance:l,point:Tf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const wf=new Y,Af=new Y;class Gp extends Rr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)wf.fromBufferAttribute(e,s),Af.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+wf.distanceTo(Af);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class CT extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Fo=new Y,Bo=new Y,Rl=new Y,zo=new cn;class RT extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Fr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:p}=zo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),zo.getNormal(Rl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){const w=(R+1)%3,b=d[R],F=d[w],z=zo[u[R]],U=zo[u[w]],H=`${b}_${F}`,C=`${F}_${b}`;C in f&&f[C]?(Rl.dot(f[C].normal)<=r&&(h.push(z.x,z.y,z.z),h.push(U.x,U.y,U.z)),f[C]=null):H in f||(f[H]={index0:c[R],index1:c[w],normal:Rl.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:m}=f[_];Fo.fromBufferAttribute(a,v),Bo.fromBufferAttribute(a,m),h.push(Fo.x,Fo.y,Fo.z),h.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new vn(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Cf extends xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wp extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Pl=new xe,Rf=new Y,Pf=new Y;class PT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Rf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rf),Pf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pf),e.updateMatrixWorld(),Pl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Pl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class DT extends PT{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dl extends Wp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new DT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class LT extends Wp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Df=new xe;class IT{constructor(t,e,i=0,s=1/0){this.ray=new Ia(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new hu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Df.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Df),this}intersectObject(t,e=!0,i=[]){return zc(t,this,i,e),i.sort(Lf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)zc(t[s],this,i,e);return i.sort(Lf),i}}function Lf(n,t){return n.distance-t.distance}function zc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)zc(r[o],t,e,!0)}}class If{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(je(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class UT extends Gp{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,h=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const u=new Je;u.setAttribute("position",new vn(l,3)),u.setAttribute("color",new vn(c,3));const d=new da({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class NT extends vs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ou}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ou);const Uf={type:"change"},gu={type:"start"},Xp={type:"end"},ko=new Ia,Nf=new Ui,OT=Math.cos(70*dM.DEG2RAD),Ae=new Y,nn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ll=1e-6;class FT extends NT{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ys.ROTATE,MIDDLE:Ys.DOLLY,RIGHT:Ys.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new gs,this._lastTargetPosition=new Y,this._quat=new gs().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new If,this._sphericalDelta=new If,this._scale=1,this._panOffset=new Y,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new Y,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zT.bind(this),this._onPointerDown=BT.bind(this),this._onPointerUp=kT.bind(this),this._onContextMenu=YT.bind(this),this._onMouseWheel=GT.bind(this),this._onKeyDown=WT.bind(this),this._onTouchStart=XT.bind(this),this._onTouchMove=$T.bind(this),this._onMouseDown=VT.bind(this),this._onMouseMove=HT.bind(this),this._interceptControlDown=qT.bind(this),this._interceptControlUp=jT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Uf),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new Y(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new Y(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ko.origin.copy(this.object.position),ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ko.direction))<OT?this.object.lookAt(this.target):(Nf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ko.intersectPlane(Nf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ll||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ll||this._lastTargetPosition.distanceToSquared(this.target)>Ll?(this.dispatchEvent(Uf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function BT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function zT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function kT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xp),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function VT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case Ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case Ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(gu)}function HT(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function GT(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(gu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xp))}function WT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function XT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(gu)}function $T(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function YT(n){this.enabled!==!1&&n.preventDefault()}function qT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const KT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},ZT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},JT={style:{display:"flex","align-items":"center",gap:"8px"}},QT={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},tw={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},ew={style:{color:"#00d2ff","font-weight":"bold"}},nw={style:{color:"#ecc94b"}},iw={style:{color:"#e2e8f0"}},sw={style:{color:"#e2e8f0"}},rw={style:{color:"#63b3ed"}},ow={style:{color:"#e2e8f0"}},aw={style:{color:"#e2e8f0"}},lw={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},cw={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},uw={style:{display:"flex","align-items":"center",gap:"6px"}},dw={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},fw={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},hw={style:{color:"#48bb78"}},pw={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},mw={style:{color:"#ecc94b"}},gw={style:{color:"#63b3ed"}},_w=Xi({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=ce(null),i=ce(null),s=ce("current"),r=ce({visible:!1,x:0,y:0}),o=Ke(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(W){s.value=W,C()}let l,c,u,d,f,h,_,v=[],m=null,p=new Xs,R=new Xs,w=null;function b(W){const ft=Math.max(0,Math.min(1,(W-65)/31)),L=new $t;return ft<.25?L.lerpColors(new $t(16007006),new $t(16347926),ft/.25):ft<.5?L.lerpColors(new $t(16347926),new $t(15381256),(ft-.25)/.25):ft<.75?L.lerpColors(new $t(15381256),new $t(1096065),(ft-.5)/.25):ft<.9?L.lerpColors(new $t(1096065),new $t(440020),(ft-.75)/.15):L.lerpColors(new $t(440020),new $t(9133302),(ft-.9)/.1),L}function F(W,k=24,G="#94a3b8"){const ft=document.createElement("canvas");ft.width=512,ft.height=128;const L=ft.getContext("2d");L.fillStyle="transparent",L.fillRect(0,0,ft.width,ft.height),L.font=`bold ${k*2}px "Fira Code", monospace`,L.fillStyle=G,L.textAlign="center",L.textBaseline="middle",L.fillText(W,ft.width/2,ft.height/2);const D=new CT(ft);D.minFilter=An;const ut=new Vp({map:D,transparent:!0,depthWrite:!1}),Tt=new AT(ut);return Tt.scale.set(4,1,1),Tt}function z(){if(!c||!d||!e.value)return;const W=e.value.clientWidth||800,k=e.value.clientHeight||600;if(W===0||k===0)return;c.aspect=W/k,c.updateProjectionMatrix();const G=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(x=>x.voltageTarget))]:[12],ft=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(x=>x.loadTarget))]:[1],L=Math.max(1,G.length),D=Math.max(1,ft.length),ut=Math.max(18,Math.min(65,L*2.2)),Tt=Math.max(18,Math.min(65,D*2.2)),j=12,ct=ut+8,xt=Tt+8,I=j+4,Q=c.fov*Math.PI/180,et=Math.max(.1,c.aspect),gt=(ct+xt)*.72,P=(I*1.1+(ct+xt)*.35)/(2*Math.tan(Q/2)*.74),B=gt/(2*Math.tan(Q/2)*et*.74),S=Math.max(P,B,22),Z=.56,K=Math.PI/4,it=j*.38,st=S*Math.cos(Z)*Math.sin(K),q=it+S*Math.sin(Z),y=S*Math.cos(Z)*Math.cos(K);c.position.set(st,q,y),c.near=.5,c.far=Math.max(3e3,S*25),c.updateProjectionMatrix(),d.target.set(0,it,0),d.minDistance=Math.max(5,S*.15),d.maxDistance=Math.max(120,S*6),d.update()}function U(){z()}function H(){if(!e.value)return;const W=e.value.clientWidth||800,k=e.value.clientHeight||600;l=new TT,l.background=new $t(461588),l.fog=null,c=new gn(45,W/k,.5,3e3),u=new ET({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(W,k),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=vi,e.value.appendChild(u.domElement),d=new FT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const G=new LT(16777215,.88);l.add(G);const ft=new Dl(16777215,.45);ft.position.set(40,60,40),l.add(ft);const L=new Dl(16777215,.35);L.position.set(-40,50,-40),l.add(L);const D=new Dl(16777215,.25);D.position.set(0,40,-50),l.add(D),h=new IT,_=new Xt(-999,-999),l.add(p),l.add(R),w=new ResizeObserver(()=>{ht()}),w.observe(e.value),window.addEventListener("resize",ht),e.value.addEventListener("mousemove",T),e.value.addEventListener("mouseleave",N),C(),z(),mt()}function C(){if(!l)return;for(;p.children.length>0;){const pt=p.children[0];p.remove(pt)}for(;R.children.length>0;){const pt=R.children[0];R.remove(pt)}v=[],m=null,i.value=null,r.value.visible=!1;const W=t.points;if(!W||W.length===0)return;const k=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((pt,Rt)=>pt-Rt):[...new Set(W.map(pt=>pt.voltageTarget))].sort((pt,Rt)=>pt-Rt),G=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((pt,Rt)=>pt-Rt):[...new Set(W.map(pt=>pt.loadTarget))].sort((pt,Rt)=>pt-Rt),ft=Math.max(1,k.length),L=Math.max(1,G.length),D=Math.max(18,Math.min(65,ft*2.2)),ut=Math.max(18,Math.min(65,L*2.2)),Tt=12,j=ft>1?D/(ft-1):D,ct=L>1?ut/(L-1):ut,xt=Math.max(.12,Math.min(1.5,j*.7)),I=Math.max(.12,Math.min(1.5,ct*.7)),Q=new Map;W.forEach(pt=>{if(pt.status==="completed"||pt.timestamp>0){const Rt=`${pt.voltageTarget.toFixed(3)}_${pt.loadTarget.toFixed(3)}`;Q.set(Rt,pt)}});const gt=Math.max(D,ut)+14,E=Math.max(12,Math.min(40,Math.max(ft,L))),P=new UT(gt,E,165063,1976635);P.position.set(0,0,0),p.add(P);const B=new eo(gt*1.4,gt*1.4),S=new Cf({color:725280,roughness:.7,metalness:.1}),Z=new Rn(B,S);Z.rotation.x=-Math.PI/2,Z.position.y=-.05,Z.receiveShadow=!0,p.add(Z);const K=new da({color:3718648,linewidth:2}),it=new Je().setFromPoints([new Y(-D/2-1,0,ut/2+1),new Y(D/2+2,0,ut/2+1)]);p.add(new Rr(it,K));const st=F("X: 输入电压 Vin (V)",22,"#38bdf8");st.position.set(0,.4,ut/2+3.2),st.scale.set(7.5,1.9,1),p.add(st);const q=10,y=Math.max(1,Math.ceil(ft/q));k.forEach((pt,Rt)=>{if(Rt%y===0||Rt===ft-1){const _t=-D/2+(ft>1?Rt/(ft-1)*D:0),bt=F(`${pt}V`,16,"#94a3b8");bt.position.set(_t,.2,ut/2+1.8),bt.scale.set(Math.min(3.2,j*1.5),.9,1),p.add(bt)}});const x=new Je().setFromPoints([new Y(-D/2-1,0,-ut/2-1),new Y(-D/2-1,0,ut/2+2)]);p.add(new Rr(x,K));const g=s.value==="power"||t.loadMode==="CW",O=g?"W":"A",rt=F(g?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");rt.position.set(-D/2-3.8,.4,0),rt.scale.set(8.5,2.1,1),p.add(rt);const nt=Math.max(1,Math.ceil(L/q));G.forEach((pt,Rt)=>{if(Rt%nt===0||Rt===L-1){const _t=-ut/2+(L>1?Rt/(L-1)*ut:0),bt=F(`${pt}${O}`,16,"#94a3b8");bt.position.set(-D/2-2.2,.2,_t),bt.scale.set(Math.min(3.2,ct*1.5),.9,1),p.add(bt)}});const wt=new Je().setFromPoints([new Y(-D/2-1,0,ut/2+1),new Y(-D/2-1,Tt+1.5,ut/2+1)]);p.add(new Rr(wt,K));const yt=F("Z: 转换效率 η (%)",22,"#10b981");yt.position.set(-D/2-1,Tt+2.4,ut/2+1),yt.scale.set(7.5,1.9,1),p.add(yt),[20,40,60,80,100].forEach(pt=>{const Rt=pt/100*Tt,_t=F(`${pt}%`,16,"#6ee7b7");_t.position.set(-D/2-2,Rt,ut/2+1),_t.scale.set(2.8,.8,1),p.add(_t);const bt=new Je().setFromPoints([new Y(-D/2-.8,Rt,ut/2+1),new Y(-D/2-.2,Rt,ut/2+1)]);p.add(new Rr(bt,K))}),k.forEach((pt,Rt)=>{G.forEach((_t,bt)=>{const Nt=`${pt.toFixed(3)}_${_t.toFixed(3)}`,It=Q.get(Nt);if(!It)return;const Mt=-D/2+(ft>1?Rt/(ft-1)*D:0),kt=-ut/2+(L>1?bt/(L-1)*ut:0),Ut=Math.max(.5,Math.min(100,It.efficiency)),ne=Math.max(.2,Ut/100*Tt),V=new lr(xt,ne,I);V.translate(0,ne/2,0),V.computeBoundingBox(),V.computeBoundingSphere();const St=b(Ut),dt=new Cf({color:St,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),vt=new Rn(V,dt);vt.position.set(Mt,0,kt),vt.castShadow=!0,vt.receiveShadow=!0,vt.__barPoint=It;const Dt=new RT(V),Ct=new da({color:16777215,transparent:!0,opacity:.25}),Yt=new Gp(Dt,Ct);vt.add(Yt),R.add(vt),vt.scale.set(1,.01,1),v.push({mesh:vt,wireframe:Yt,point:It,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ne,material:dt,origColor:St.clone()})})}),z()}function T(W){if(!e.value)return;const k=e.value.getBoundingClientRect();_.x=(W.clientX-k.left)/k.width*2-1,_.y=-((W.clientY-k.top)/k.height)*2+1,r.value.x=W.clientX-k.left,r.value.y=W.clientY-k.top}function N(){_.x=-999,_.y=-999,r.value.visible=!1,m&&lt()}function lt(){m&&(m.targetElevation=0,m.wireframe.material.opacity=.25,m.wireframe.material.color.set(16777215),m=null,i.value=null,r.value.visible=!1)}function tt(){if(!c||!l||v.length===0)return;h.setFromCamera(_,c);const W=v.map(G=>G.mesh),k=h.intersectObjects(W,!1);if(k.length>0){const G=k[0].object,ft=v.find(L=>L.mesh===G);ft&&ft!==m&&(m&&lt(),m=ft,i.value=ft.point,r.value.visible=!0,ft.targetElevation=1.2,ft.wireframe.material.opacity=.9,ft.wireframe.material.color.set(54015))}else m&&lt()}function mt(){f=requestAnimationFrame(mt),d&&d.update(),tt(),v.forEach(W=>{W.currentScaleY+=(W.targetScaleY-W.currentScaleY)*.1,W.mesh.scale.y=W.currentScaleY,W.currentElevation+=(W.targetElevation-W.currentElevation)*.15,W.mesh.position.y=W.baseY+W.currentElevation}),u&&l&&c&&u.render(l,c)}function ht(){if(!e.value||!u||!c)return;const W=e.value.clientWidth,k=e.value.clientHeight;W===0||k===0||(c.aspect=W/k,c.updateProjectionMatrix(),u.setSize(W,k))}return fs(()=>t.points,()=>{C()},{deep:!0}),Kr(()=>{H()}),Zr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",ht),w&&(w.disconnect(),w=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(W,k)=>(Ht(),Wt("div",KT,[M("div",ZT,[M("div",JT,[k[2]||(k[2]=Gr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5e3b1907><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-5e3b1907></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-5e3b1907></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-5e3b1907></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-5e3b1907>3D 空间特征柱状图</span>',2)),M("span",QT,"| X: Vin | Y: "+Et(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ht(),Wt("div",tw,[M("span",ew," 选定点 #"+Et(i.value.stepIndex)+": ",1),M("span",null,[k[3]||(k[3]=zt("Vin: ",-1)),M("b",nw,Et(i.value.vin.toFixed(3))+"V",1)]),M("span",null,[k[4]||(k[4]=zt("Iin: ",-1)),M("b",iw,Et(i.value.iin.toFixed(3))+"A",1)]),M("span",null,[k[5]||(k[5]=zt("Pin: ",-1)),M("b",sw,Et(i.value.pin.toFixed(3))+"W",1)]),M("span",null,[k[6]||(k[6]=zt("Vout: ",-1)),M("b",rw,Et(i.value.vout.toFixed(3))+"V",1)]),M("span",null,[k[7]||(k[7]=zt("Iout: ",-1)),M("b",ow,Et(i.value.iout.toFixed(3))+"A",1)]),M("span",null,[k[8]||(k[8]=zt("Pout: ",-1)),M("b",aw,Et(i.value.pout.toFixed(3))+"W",1)]),M("span",lw," 效率 η: "+Et(i.value.efficiency.toFixed(2))+"% ",1)])):(Ht(),Wt("div",cw,[...k[9]||(k[9]=[M("span",{style:{color:"#ecc94b"}},"💡",-1),M("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),M("div",uw,[M("div",dw,[M("button",{class:"btn",style:Ze({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[0]||(k[0]=G=>a("current"))}," Y: 负载电流 (A) ",4),M("button",{class:"btn",style:Ze({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[1]||(k[1]=G=>a("power"))}," Y: 输出功率 (W) ",4)]),M("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:U,title:"重置视角"}," 重置视角 ")])]),M("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ht(),Wt("div",{key:0,style:Ze([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[M("div",fw,[M("span",null,"采样点 #"+Et(i.value.stepIndex),1),M("span",hw,"η = "+Et(i.value.efficiency.toFixed(2))+"%",1)]),M("div",pw,[M("div",null,[k[10]||(k[10]=zt("Vin: ",-1)),M("span",mw,Et(i.value.vin.toFixed(2))+"V",1)]),M("div",null,[k[11]||(k[11]=zt("Vout: ",-1)),M("span",gw,Et(i.value.vout.toFixed(2))+"V",1)]),M("div",null,[k[12]||(k[12]=zt("Iin: ",-1)),M("span",null,Et(i.value.iin.toFixed(3))+"A",1)]),M("div",null,[k[13]||(k[13]=zt("Iout: ",-1)),M("span",null,Et(i.value.iout.toFixed(3))+"A",1)]),M("div",null,[k[14]||(k[14]=zt("Pin: ",-1)),M("span",null,Et(i.value.pin.toFixed(2))+"W",1)]),M("div",null,[k[15]||(k[15]=zt("Pout: ",-1)),M("span",null,Et(i.value.pout.toFixed(2))+"W",1)])])],4)):Oe("",!0),k[16]||(k[16]=Gr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-5e3b1907><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-5e3b1907><span data-v-5e3b1907>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-5e3b1907>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-5e3b1907></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-5e3b1907><span data-v-5e3b1907>&lt;70% 低效</span><span data-v-5e3b1907>85%</span><span data-v-5e3b1907>&gt;95% 高效</span></div></div>',1))],512)]))}}),vw=qh(_w,[["__scopeId","data-v-5e3b1907"]]),xw={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},yw={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},Mw={style:{display:"flex","align-items":"center",gap:"12px"}},Sw={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},bw={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},Ew={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},Tw={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},ww={style:{color:"#68d391","font-size":"13px"}},Aw={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},Cw={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},Rw={style:{color:"#4fd1c5","font-size":"12px"}},Pw={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},Dw={style:{color:"#ecc94b"}},Lw={style:{display:"flex","align-items":"center",gap:"8px"}},Iw={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},Uw=["value"],Nw={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},Ow={style:{width:"100%",height:"100%",position:"relative"}},Fw={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},Bw={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},zw={style:{flex:"1",overflow:"auto",padding:"12px"}},kw={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},Vw={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},Hw={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},Gw={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},Ww=["onClick"],Xw={key:1,style:{color:"#4a5568"}},$w={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},Yw={style:{color:"#63b3ed","font-weight":"bold"}},qw={style:{color:"#ecc94b"}},jw={style:{color:"#63b3ed"}},Kw={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},Zw=Xi({__name:"Result3DView",setup(n){const t=Lv(),e=Dv(),i=ce(null),s=ce([]),r=ce(""),o=ce(null),a=ce("3d");async function l(){const _=t.params.id||"";if(s.value=await lp(),_){const v=await D0(_);if(v){i.value=v,r.value=v.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(_,v){if(i.value)return i.value.points.find(m=>Math.abs(m.voltageTarget-_)<1e-4&&Math.abs(m.loadTarget-v)<1e-4)}function u(_){return _>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:_>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:_>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&Xo(i.value)}function h(){window.opener?window.close():e.push("/")}return fs(()=>t.params.id,()=>{l()}),Kr(()=>{l()}),(_,v)=>{var p,R,w,b,F,z,U,H;const m=yh("router-link");return Ht(),Wt("div",xw,[M("header",yw,[M("div",Mw,[Le(m,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:ph(()=>[...v[5]||(v[5]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"15 18 9 12 15 6"})],-1),zt(" 控制台 ",-1)])]),_:1}),M("div",null,[M("div",Sw,[M("span",null,Et(((p=i.value)==null?void 0:p.title)||"测试结果数据查看"),1),v[6]||(v[6]=M("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),M("div",bw," 测试时间: "+Et(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+Et((w=(R=i.value)==null?void 0:R.config)==null?void 0:w.voltageMin)+"V~"+Et((F=(b=i.value)==null?void 0:b.config)==null?void 0:F.voltageMax)+"V, "+Et((U=(z=i.value)==null?void 0:z.config)==null?void 0:U.loadMode),1)])]),(H=i.value)!=null&&H.summary?(Ht(),Wt("div",Ew,[M("div",Tw,[M("span",null,[v[7]||(v[7]=zt("峰值效率 η_max: ",-1)),M("b",ww,Et(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ht(),Wt("span",Aw," (@"+Et(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+Et(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Oe("",!0)]),M("div",Cw,[M("span",null,[v[8]||(v[8]=zt("平均效率 η_avg: ",-1)),M("b",Rw,Et(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),M("div",Pw,[M("span",null,[v[9]||(v[9]=zt("矩阵测试点: ",-1)),M("b",Dw,Et(i.value.points.length)+" 点",1)])])])):Oe("",!0),M("div",Lw,[M("div",Iw,[M("button",{class:"btn",style:Ze({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:v[0]||(v[0]=C=>a.value="3d")}," 3D 空间柱状图 ",4),M("button",{class:"btn",style:Ze({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:v[1]||(v[1]=C=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?Te((Ht(),Wt("select",{key:0,"onUpdate:modelValue":v[2]||(v[2]=C=>r.value=C),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ht(!0),Wt(Ne,null,Hs(s.value,C=>(Ht(),Wt("option",{key:C.id,value:C.id},Et(C.title),9,Uw))),128))],544)),[[Xl,r.value]]):Oe("",!0),i.value?(Ht(),Wt("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[...v[10]||(v[10]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),zt(" 下载 CSV ",-1)])])):Oe("",!0),M("button",{class:"btn",style:{padding:"4px 8px"},onClick:h,title:"关闭页面"}," ✕ ")])]),M("div",Nw,[Te(M("div",Ow,[i.value&&i.value.points.length>0?(Ht(),nu(vw,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ht(),Wt("div",Fw," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[Yu,a.value==="3d"]]),Te(M("div",Bw,[v[17]||(v[17]=Gr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),M("div",zw,[i.value?(Ht(),Wt("table",kw,[M("thead",null,[M("tr",Vw,[M("th",Hw," 负载 ("+Et(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ht(!0),Wt(Ne,null,Hs(i.value.voltageSteps,C=>(Ht(),Wt("th",{key:C,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},Et(C)+"V ",1))),128))])]),M("tbody",null,[(Ht(!0),Wt(Ne,null,Hs(i.value.loadSteps,C=>(Ht(),Wt("tr",{key:C,style:{"border-bottom":"1px solid #2d3748"}},[M("td",Gw,Et(C)+Et(i.value.config.loadMode==="CC"?"A":"W"),1),(Ht(!0),Wt(Ne,null,Hs(i.value.voltageSteps,T=>(Ht(),Wt("td",{key:T,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:v[3]||(v[3]=N=>N.currentTarget.style.transform="scale(1.04)"),onMouseleave:v[4]||(v[4]=N=>N.currentTarget.style.transform="scale(1.0)"),onClick:N=>o.value=c(T,C)||null},[c(T,C)?(Ht(),Wt("div",{key:0,style:Ze([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(T,C).efficiency)])},Et(c(T,C).efficiency.toFixed(2))+"% ",5)):(Ht(),Wt("span",Xw,"--"))],40,Ww))),128))]))),128))])])):Oe("",!0)]),o.value?(Ht(),Wt("div",$w,[M("span",Yw," 选定点 (#"+Et(o.value.stepIndex)+"): ",1),M("span",null,"目标: "+Et(o.value.voltageTarget)+"V / "+Et(o.value.loadTarget)+Et(o.value.loadMode),1),M("span",null,[v[11]||(v[11]=zt("实测Vin: ",-1)),M("b",qw,Et(o.value.vin.toFixed(3))+"V",1)]),M("span",null,[v[12]||(v[12]=zt("实测Iin: ",-1)),M("b",null,Et(o.value.iin.toFixed(3))+"A",1)]),M("span",null,[v[13]||(v[13]=zt("实测Pin: ",-1)),M("b",null,Et(o.value.pin.toFixed(3))+"W",1)]),M("span",null,[v[14]||(v[14]=zt("实测Vout: ",-1)),M("b",jw,Et(o.value.vout.toFixed(3))+"V",1)]),M("span",null,[v[15]||(v[15]=zt("实测Iout: ",-1)),M("b",null,Et(o.value.iout.toFixed(3))+"A",1)]),M("span",null,[v[16]||(v[16]=zt("实测Pout: ",-1)),M("b",null,Et(o.value.pout.toFixed(3))+"W",1)]),M("span",Kw," 效率 η: "+Et(o.value.efficiency.toFixed(2))+"% ",1)])):Oe("",!0)],512),[[Yu,a.value==="matrix"]])])])}}}),Jw=[{path:"/",name:"Console",component:Sy},{path:"/result/:id",name:"Result3D",component:Zw,props:!0}],Qw=Pv({history:lv(),routes:Jw}),$p=v_(b_);$p.use(Qw);$p.mount("#app");
