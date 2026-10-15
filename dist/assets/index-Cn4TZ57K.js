var Jp=Object.defineProperty;var Qp=(n,t,e)=>t in n?Jp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Xt=(n,t,e)=>Qp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const xe={},fs=[],Jn=()=>{},Vf=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ma=n=>n.startsWith("onUpdate:"),Ge=Object.assign,$c=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},tm=Object.prototype.hasOwnProperty,ce=(n,t)=>tm.call(n,t),Wt=Array.isArray,Gi=n=>Qr(n)==="[object Map]",wi=n=>Qr(n)==="[object Set]",Pu=n=>Qr(n)==="[object Date]",Kt=n=>typeof n=="function",Re=n=>typeof n=="string",Qn=n=>typeof n=="symbol",me=n=>n!==null&&typeof n=="object",kf=n=>(me(n)||Kt(n))&&Kt(n.then)&&Kt(n.catch),Hf=Object.prototype.toString,Qr=n=>Hf.call(n),em=n=>Qr(n).slice(8,-1),Gf=n=>Qr(n)==="[object Object]",Xc=n=>Re(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nm=/-\w/g,nn=Sa(n=>n.replace(nm,t=>t.slice(1).toUpperCase())),im=/\B([A-Z])/g,Zi=Sa(n=>n.replace(im,"-$1").toLowerCase()),Ea=Sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=Sa(n=>n?`on${Ea(n)}`:""),Kn=(n,t)=>!Object.is(n,t),Xo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Wf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},wa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Lu;const Ta=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pe(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Re(i)?am(i):pe(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Re(n)||me(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,om=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function am(n){const t={};return n.replace(om,e=>e.startsWith("/*")?"":e).split(sm).forEach(e=>{if(e){const i=e.split(rm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function pi(n){let t="";if(Re(n))t=n;else if(Wt(n))for(let e=0;e<n.length;e++){const i=pi(n[e]);i&&(t+=i+" ")}else if(me(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",cm=Wc(lm);function $f(n){return!!n||n===""}function um(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Vn(n[s],t[s],e);return i}function Du(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Vn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function dm(n,t,e){let i=Gi(n),s=Gi(t);if(i||s||(i=wi(n),s=wi(t),i||s))return i&&s?Du(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Vn(n[a],t[a],e))return!1}return String(n)===String(t)}function Iu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Vn(n,t,e){if(n===t)return!0;let i=Pu(n),s=Pu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Qn(n),s=Qn(t),i||s?n===t:(i=Wt(n),s=Wt(t),i||s?i&&s?Iu(n,t,e,um):!1:(i=me(n),s=me(t),i||s?!i||!s?!1:Iu(n,t,e,dm):String(n)===String(t))))}function qc(n,t){return n.findIndex(e=>Vn(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),yt=n=>Re(n)?n:n==null?"":Wt(n)||me(n)&&(n.toString===Hf||!Kt(n.toString))?Xf(n)?yt(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,t)=>Xf(t)?qf(n,t.value):Gi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ga(i,r)+" =>"]=s,e),{})}:wi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ga(e))}:Qn(t)?Ga(t):me(t)&&!Wt(t)&&!Gf(t)?String(t):t,Ga=(n,t="")=>{var e;return Qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class fm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&He&&(He.active?(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){if(this._on>0&&--this._on===0){if(He===this)He=this.prevScope;else{let t=He;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hm(){return He}let be;const Wa=new WeakSet;class jf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&(He.active?He.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Zf(this);const t=be,e=On;be=this,On=!0;try{return this.fn()}finally{Jf(this),be=t,On=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kc(t);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zl(this)&&this.run()}get dirty(){return zl(this)}}let Yf=0,Or,Fr;function Kf(n,t=!1){if(n.flags|=8,t){n.next=Fr,Fr=n;return}n.next=Or,Or=n}function jc(){Yf++}function Yc(){if(--Yf>0)return;if(Fr){let t=Fr;for(Fr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Or;){let t=Or;for(Or=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Zf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Kc(i),pm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function zl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!zl(n))))return;n.flags|=2;const t=n.dep,e=be,i=On;be=n,On=!0;try{Zf(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{be=e,On=i,Jf(n),n.flags&=-3}}function Kc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Kc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let On=!0;const th=[];function ti(){th.push(On),On=!1}function ei(){const n=th.pop();On=n===void 0?!0:n}function Uu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=be;be=void 0;try{t()}finally{be=e}}}let Gr=0;class mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!On||be===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==be)e=this.activeLink=new mm(be,this),be.deps?(e.prevDep=be.depsTail,be.depsTail.nextDep=e,be.depsTail=e):be.deps=be.depsTail=e,eh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=be.depsTail,e.nextDep=void 0,be.depsTail.nextDep=e,be.depsTail=e,be.deps===e&&(be.deps=i)}return e}trigger(t){this.version++,Gr++,this.notify(t)}notify(t){jc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function eh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)eh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vl=new WeakMap,gs=Symbol(""),kl=Symbol(""),Wr=Symbol("");function Xe(n,t,e){if(On&&be){let i=Vl.get(n);i||Vl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Zc),s.map=i,s.key=e),s.track()}}function gi(n,t,e,i,s,r){const o=Vl.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(jc(),t==="clear")o.forEach(a);else{const l=Wt(n),c=l&&Xc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Wr||!Qn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Wr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Gi(n)&&a(o.get(kl)));break;case"delete":l||(a(o.get(gs)),Gi(n)&&a(o.get(kl)));break;case"set":Gi(n)&&a(o.get(gs));break}}Yc()}function ws(n){const t=he(n);return t===n||(Xe(t,"iterate",Wr),Sn(n))?t:ni(n)?Wi(n)?t.map(e=>qi(wn(e))):t.map(qi):t.map(wn)}function Aa(n){return Xe(n=he(n),"iterate",Wr),n}function Xn(n,t){return ni(n)?qi(Wi(n)?wn(t):t):wn(t)}const gm={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,n=>Xn(this,n))},concat(...n){return ws(this).concat(...n.map(t=>Wt(t)?ws(t):t))},entries(){return $a(this,"entries",n=>(n[1]=Xn(this,n[1]),n))},every(n,t){return ri(this,"every",n,t,void 0,arguments)},filter(n,t){return ri(this,"filter",n,t,e=>e.map(i=>Xn(this,i)),arguments)},find(n,t){return ri(this,"find",n,t,e=>Xn(this,e),arguments)},findIndex(n,t){return ri(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ri(this,"findLast",n,t,e=>Xn(this,e),arguments)},findLastIndex(n,t){return ri(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ri(this,"forEach",n,t,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,t){return ri(this,"map",n,t,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return vr(this,"shift")},some(n,t){return ri(this,"some",n,t,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return $a(this,"values",n=>Xn(this,n))}};function $a(n,t,e){const i=Aa(n),s=i[t],r=s.call(i);if(i!==n&&!Sn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Nu(r.next(),e),s!==nh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Nu(r._next(),e)}return r}function Nu(n,t){return n.done||(n.value=t(n.value)),n}const nh=Array.prototype;function ri(n,t,e,i,s,r){const o=Aa(n),a=o!==n&&!Sn(n),l=o[t];if(l!==nh[t]){const d=l.apply(n,r);return a?wn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Xn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,t,e,i){const s=Aa(n),r=s!==n&&!Sn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Xn(n,c)),e.call(this,c,Xn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Xn(n,l):l}function Xa(n,t,e){const i=he(n);Xe(i,"iterate",Wr);const s=i[t](...e);return(s===-1||s===!1)&&tu(e[0])?(e[0]=he(e[0]),i[t](...e)):s}function vr(n,t,e=[]){ti(),jc();const i=he(n)[t].apply(n,e);return Yc(),ei(),i}const _m=Wc("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function vm(n){Qn(n)||(n=String(n));const t=he(this);return Xe(t,"has",n),t.hasOwnProperty(n)}class sh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Cm:lh:r?ah:oh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Wt(t);if(!s){let l;if(o&&(l=gm[e]))return l;if(e==="hasOwnProperty")return vm}const a=Reflect.get(t,e,je(t)?t:i);if((Qn(e)?ih.has(e):_m(e))||(s||Xe(t,"get",e),r))return a;if(je(a)){const l=o&&Xc(e)?a:a.value;return s&&me(l)?Gl(l):l}return me(a)?s?Gl(a):Mn(a):a}}class rh extends sh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Wt(t)&&Xc(e);if(!this._isShallow){const c=ni(r);if(!Sn(i)&&!ni(i)&&(r=he(r),i=he(i)),!o&&je(r)&&!je(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ce(t,e),l=Reflect.set(t,e,i,je(t)?t:s);return t===he(s)&&l&&(a?Kn(i,r)&&gi(t,"set",e,i):gi(t,"add",e,i)),l}deleteProperty(t,e){const i=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&gi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Qn(e)||!ih.has(e))&&Xe(t,"has",e),i}ownKeys(t){return Xe(t,"iterate",Wt(t)?"length":gs),Reflect.ownKeys(t)}}class xm extends sh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ym=new rh,bm=new xm,Mm=new rh(!0);const Hl=n=>n,co=n=>Reflect.getPrototypeOf(n);function Sm(n,t,e){return function(...i){const s=this.__v_raw,r=he(s),o=Gi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Hl:t?qi:wn;return!t&&Xe(r,"iterate",l?kl:gs),Ge(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function uo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Em(n,t){const e={get(s){const r=this.__v_raw,o=he(r),a=he(s);n||(Kn(s,a)&&Xe(o,"get",s),Xe(o,"get",a));const{has:l}=co(o),c=t?Hl:n?qi:wn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xe(he(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=he(r),a=he(s);return n||(Kn(s,a)&&Xe(o,"has",s),Xe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=he(a),c=t?Hl:n?qi:wn;return!n&&Xe(l,"iterate",gs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Ge(e,n?{add:uo("add"),set:uo("set"),delete:uo("delete"),clear:uo("clear")}:{add(s){const r=he(this),o=co(r),a=he(s),l=!t&&!Sn(s)&&!ni(s)?a:s;return o.has.call(r,l)||Kn(s,l)&&o.has.call(r,s)||Kn(a,l)&&o.has.call(r,a)||(r.add(l),gi(r,"add",l,l)),this},set(s,r){!t&&!Sn(r)&&!ni(r)&&(r=he(r));const o=he(this),{has:a,get:l}=co(o);let c=a.call(o,s);c||(s=he(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&gi(o,"set",s,r):gi(o,"add",s,r),this},delete(s){const r=he(this),{has:o,get:a}=co(r);let l=o.call(r,s);l||(s=he(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&gi(r,"delete",s,void 0),c},clear(){const s=he(this),r=s.size!==0,o=s.clear();return r&&gi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Sm(s,n,t)}),e}function Jc(n,t){const e=Em(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ce(e,s)&&s in i?e:i,s,r)}const wm={get:Jc(!1,!1)},Tm={get:Jc(!1,!0)},Am={get:Jc(!0,!1)};const oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Cm=new WeakMap;function Rm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mn(n){return ni(n)?n:Qc(n,!1,ym,wm,oh)}function ch(n){return Qc(n,!1,Mm,Tm,ah)}function Gl(n){return Qc(n,!0,bm,Am,lh)}function Qc(n,t,e,i,s){if(!me(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Rm(em(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Wi(n){return ni(n)?Wi(n.__v_raw):!!(n&&n.__v_isReactive)}function ni(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function tu(n){return n?!!n.__v_raw:!1}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function Pm(n){return!ce(n,"__v_skip")&&Object.isExtensible(n)&&Wf(n,"__v_skip",!0),n}const wn=n=>me(n)?Mn(n):n,qi=n=>me(n)?Gl(n):n;function je(n){return n?n.__v_isRef===!0:!1}function Yt(n){return uh(n,!1)}function Lm(n){return uh(n,!0)}function uh(n,t){return je(n)?n:new Dm(n,t)}class Dm{constructor(t,e){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:he(t),this._value=e?t:wn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Sn(t)||ni(t);t=i?t:he(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:wn(t),this.dep.trigger())}}function Jt(n){return je(n)?n.value:n}const Im={get:(n,t,e)=>t==="__v_raw"?n:Jt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return je(s)&&!je(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function dh(n){return Wi(n)?n:new Proxy(n,Im)}class Um{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Kf(this,!0),!0}get value(){const t=this.dep.track();return Qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nm(n,t,e=!1){let i,s;return Kt(n)?i=n:(i=n.get,s=n.set),new Um(i,s,e)}const fo={},ia=new WeakMap;let os;function Om(n,t=!1,e=os){if(e){let i=ia.get(e);i||ia.set(e,i=[]),i.push(n)}}function Fm(n,t,e=xe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:Sn(S)||s===!1||s===0?_i(S,1):_i(S);let u,d,f,p,v=!1,_=!1;if(je(n)?(d=()=>n.value,v=Sn(n)):Wi(n)?(d=()=>c(n),v=!0):Wt(n)?(_=!0,v=n.some(S=>Wi(S)||Sn(S)),d=()=>n.map(S=>{if(je(S))return S.value;if(Wi(S))return c(S);if(Kt(S))return l?l(S,2):S()})):Kt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){ti();try{f()}finally{ei()}}const S=os;os=u;try{return l?l(n,3,[p]):n(p)}finally{os=S}}:d=Jn,t&&s){const S=d,q=s===!0?1/0:s;d=()=>_i(S(),q)}const g=hm(),h=()=>{u.stop(),g&&g.active&&$c(g.effects,u)};if(r&&t){const S=t;t=(...q)=>{try{return S(...q)}finally{h()}}}let D=_?new Array(n.length).fill(fo):fo;const P=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const q=u.run();if(S||s||v||(_?q.some((F,O)=>Kn(F,D[O])):Kn(q,D))){const F=os;ti();try{f&&f(),os=u;const O=[q,D===fo?void 0:_&&D[0]===fo?[]:D,p];D=q,l?l(t,3,O):t(...O)}finally{os=F,ei()}}}else u.run()};return a&&a(P),u=new jf(d),u.scheduler=o?()=>o(P,!1):P,p=S=>Om(S,!1,u),f=u.onStop=()=>{const S=ia.get(u);if(S){if(l)l(S,4);else for(const q of S)q();ia.delete(u)}},t?i?P(!0):D=u.run():o?o(P.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function _i(n,t=1/0,e){if(t<=0||!me(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,je(n))_i(n.value,t,e);else if(Wt(n))for(let i=0;i<n.length;i++)_i(n[i],t,e);else if(wi(n)||Gi(n))n.forEach(i=>{_i(i,t,e)});else if(Gf(n)){for(const i in n)_i(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_i(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(n,t,e,i){try{return i?n(...i):n()}catch(s){Ca(s,t,e)}}function kn(n,t,e,i){if(Kt(n)){const s=to(n,t,e,i);return s&&kf(s)&&s.catch(r=>{Ca(r,t,e)}),s}if(Wt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],t,e,i));return s}}function Ca(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||xe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){ti(),to(r,null,10,[n,l,c]),ei();return}}Bm(n,e,s,i,o)}function Bm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Qe=[];let Dn=-1;const qn=[];let Bi=null,Ws=0;const fh=Promise.resolve();let sa=null;function eu(n){const t=sa||fh;return n?t.then(this?n.bind(this):n):t}function zm(n){let t=Dn+1,e=Qe.length;for(;t<e;){const i=t+e>>>1,s=Qe[i],r=$r(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function nu(n){if(!(n.flags&1)){const t=$r(n),e=Qe[Qe.length-1];!e||!(n.flags&2)&&t>=$r(e)?Qe.push(n):Qe.splice(zm(t),0,n),n.flags|=1,hh()}}function hh(){sa||(sa=fh.then(gh))}function Vm(n){if(!Wt(n))Bi&&n.id===-1?Bi.splice(Ws+1,0,n):n.flags&1||(qn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)qn.push(n[t]);hh()}function ph(n,t,e,i=Dn+1){for(;i<Qe.length;i++){const s=Qe[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;Qe.splice(i,1),i=n?i-1:Dn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(n,t,e=0){if(qn.length){let i=qn,s=0;if(t){i=[];for(let o=0;o<qn.length;o++){const a=qn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?qn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>$r(o)-$r(a));if(qn.length=s,Bi){for(let o=0;o<r.length;o++)Bi.push(r[o]);return}for(Bi=r,Ws=0;Ws<Bi.length;Ws++){const o=Bi[Ws];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Bi=null,Ws=0}}let qa=!1;function km(n,t){if(qa){n();return}const e=t===void 0?void 0:new Set(qn);n(),qa=!0;try{ph(void 0,t),mh(void 0,e,t)}finally{qa=!1}}const $r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gh(n){try{for(Dn=0;Dn<Qe.length;Dn++){const t=Qe[Dn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),to(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Dn<Qe.length;Dn++){const t=Qe[Dn];t&&(t.flags&=-2)}Dn=-1,Qe.length=0,mh(),sa=null,(Qe.length||qn.length)&&gh()}}let mn=null,_h=null;function ra(n){const t=mn;return mn=n,_h=n&&n.type.__scopeId||null,t}function iu(n,t=mn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ca(-1);const r=ra(t),o=vs.length;let a;try{a=n(...s)}finally{for(let l=vs.length;l>o;l--)Vh();ra(r),i._d&&ca(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function re(n,t){if(mn===null)return n;const e=Ia(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=xe]=t[s];r&&(Kt(r)&&(r={mounted:r,updated:r}),r.deep&&_i(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ti(),kn(l,e,8,[n.el,a,n,t]),ei())}}function qo(n,t){if(qe){let e=qe.provides;const i=qe.parent&&qe.parent.provides;i===e&&(e=qe.provides=Object.create(i)),e[n]=t}}function Fn(n,t,e=!1){const i=zg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Kt(t)?t.call(i&&i.proxy):t}}const Hm=Symbol.for("v-scx"),Gm=()=>Fn(Hm);function _s(n,t,e){return vh(n,t,e)}function vh(n,t,e=xe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ge({},e),l=t&&i||!t&&r!=="post";let c;if(Kr){if(r==="sync"){const p=Gm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Jn,p.resume=Jn,p.pause=Jn,p}}const u=qe;a.call=(p,v,_)=>kn(p,u,v,_);let d=!1;r==="post"?a.scheduler=p=>{p.i=u,ln(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,v)=>{v?p():nu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Fm(n,t,a);return Kr&&(c?c.push(f):l&&f()),f}function Wm(n,t,e){const i=this.proxy,s=Re(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;Kt(t)?r=t:(r=t.handler,e=t);const o=eo(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ra=n=>n.__isTeleport,ja=Symbol("_leaveCb");function Xm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Hn){t=e;break}}return t}function yh(n){if(!su(n))return Ra(n.type)&&n.children?Xm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Kt(e.default))return e.default()}}function oa(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;oa(Ra(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Le&&Wt(n.children)){const e=Ah(n.children,!1);e&&oa(e,t)}}function Wl(n){if(n.component)return Wl(n.component.subTree);if(n.type===Le){const t=Wt(n.children)&&Ah(n.children,!1);return t?Wl(t):void 0}if(n.type!==Hn)return n}function Ai(n,t){return Kt(n)?Ge({name:n.name},t,{setup:n}):n}function bh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const aa=new WeakMap;function Br(n,t,e,i,s=!1){if(Wt(n)){n.forEach((_,g)=>Br(_,t&&(Wt(t)?t[g]:t),e,i,s));return}if(zr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Br(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ia(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===xe?a.refs={}:a.refs,d=a.setupState,f=he(d),p=d===xe?Vf:_=>Fu(u,_)?!1:ce(f,_),v=(_,g)=>!(g&&Fu(u,g));if(c!=null&&c!==l){if(Bu(t),Re(c))u[c]=null,p(c)&&(d[c]=null);else if(je(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Kt(l))to(l,a,12,[o,u]);else{const _=Re(l),g=je(l);if(_||g){const h=()=>{if(n.f){const D=_?p(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Wt(D)&&$c(D,r);else if(Wt(D))D.includes(r)||D.push(r);else if(_)u[l]=[r],p(l)&&(d[l]=u[l]);else{const P=[r];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else _?(u[l]=o,p(l)&&(d[l]=o)):g&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const D=()=>{h(),aa.delete(n)};D.id=-1,aa.set(n,D),ln(D,e)}else Bu(n),h()}}}function Bu(n){const t=aa.get(n);t&&(t.flags|=8,aa.delete(n))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const zr=n=>!!n.type.__asyncLoader,su=n=>n.type.__isKeepAlive;function qm(n,t){Mh(n,"a",t)}function jm(n,t){Mh(n,"da",t)}function Mh(n,t,e=qe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)su(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=Pa(t,n,i,!0);dr(()=>{$c(i[t],s)},e)}function Pa(n,t,e=qe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ti();const a=eo(e),l=kn(t,e,n,o);return a(),ei(),l});return i?s.unshift(r):s.push(r),r}}const Ci=n=>(t,e=qe)=>{(!Kr||n==="sp")&&Pa(n,(...i)=>t(...i),e)},Km=Ci("bm"),ur=Ci("m"),Zm=Ci("bu"),Jm=Ci("u"),Qm=Ci("bum"),dr=Ci("um"),tg=Ci("sp"),eg=Ci("rtg"),ng=Ci("rtc");function ig(n,t=qe){Pa("ec",n,t)}const sg="components";function ru(n,t){return og(sg,n,!0,t)||n}const rg=Symbol.for("v-ndc");function og(n,t,e=!0,i=!1){const s=mn||qe;if(s){const r=s.type;{const a=Wg(r,!1);if(a&&(a===t||a===nn(t)||a===Ea(nn(t))))return r}const o=zu(s[n]||r[n],t)||zu(s.appContext[n],t);return!o&&i?r:o}}function zu(n,t){return n&&(n[t]||n[nn(t)]||n[Ea(nn(t))])}function yi(n,t,e,i){let s;const r=e,o=Wt(n);if(o||Re(n)){const a=o&&Wi(n);let l=!1,c=!1;a&&(l=!Sn(n),c=ni(n),n=Aa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?qi(wn(n[u])):wn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(me(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const $l=n=>n?Wh(n)?Ia(n):$l(n.parent):null,Vr=Ge(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Eh(n),$forceUpdate:n=>n.f||(n.f=()=>{nu(n.update)}),$nextTick:n=>n.n||(n.n=eu.bind(n.proxy)),$watch:n=>Wm.bind(n)}),Ya=(n,t)=>n!==xe&&!n.__isScriptSetup&&ce(n,t),ag={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ya(i,t))return o[t]=1,i[t];if(s!==xe&&ce(s,t))return o[t]=2,s[t];if(ce(r,t))return o[t]=3,r[t];if(e!==xe&&ce(e,t))return o[t]=4,e[t];Xl&&(o[t]=0)}}const c=Vr[t];let u,d;if(c)return t==="$attrs"&&Xe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==xe&&ce(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ce(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ya(s,t)?(s[t]=e,!0):i!==xe&&ce(i,t)?(i[t]=e,!0):ce(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==xe&&a[0]!=="$"&&ce(n,a)||Ya(t,a)||ce(r,a)||ce(i,a)||ce(Vr,a)||ce(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ce(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Vu(n){return Wt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Xl=!0;function lg(n){const t=Eh(n),e=n.proxy,i=n.ctx;Xl=!1,t.beforeCreate&&ku(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:v,activated:_,deactivated:g,beforeDestroy:h,beforeUnmount:D,destroyed:P,unmounted:S,render:q,renderTracked:F,renderTriggered:O,errorCaptured:U,serverPrefetch:M,expose:E,inheritAttrs:w,components:ot,directives:rt,filters:at}=t;if(c&&cg(c,i,null),o)for(const z in o){const X=o[z];Kt(X)&&(i[z]=X.bind(e))}if(s){const z=s.call(e,e);me(z)&&(n.data=Mn(z))}if(Xl=!0,r)for(const z in r){const X=r[z],dt=Kt(X)?X.bind(e,e):Kt(X.get)?X.get.bind(e,e):Jn,N=!Kt(X)&&Kt(X.set)?X.set.bind(e):Jn,I=ze({get:dt,set:N});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>I.value,set:ft=>I.value=ft})}if(a)for(const z in a)Sh(a[z],i,e,z);if(l){const z=Kt(l)?l.call(e):l;Reflect.ownKeys(z).forEach(X=>{qo(X,z[X])})}u&&ku(u,n,"c");function W(z,X){Wt(X)?X.forEach(dt=>z(dt.bind(e))):X&&z(X.bind(e))}if(W(Km,d),W(ur,f),W(Zm,p),W(Jm,v),W(qm,_),W(jm,g),W(ig,U),W(ng,F),W(eg,O),W(Qm,D),W(dr,S),W(tg,M),Wt(E))if(E.length){const z=n.exposed||(n.exposed={});E.forEach(X=>{Object.defineProperty(z,X,{get:()=>e[X],set:dt=>e[X]=dt,enumerable:!0})})}else n.exposed||(n.exposed={});q&&n.render===Jn&&(n.render=q),w!=null&&(n.inheritAttrs=w),ot&&(n.components=ot),rt&&(n.directives=rt),M&&bh(n)}function cg(n,t,e=Jn){Wt(n)&&(n=ql(n));for(const i in n){const s=n[i];let r;me(s)?"default"in s?r=Fn(s.from||i,s.default,!0):r=Fn(s.from||i):r=Fn(s),je(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ku(n,t,e){kn(Wt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(Re(n)){const r=t[n];Kt(r)&&_s(s,r)}else if(Kt(n))_s(s,n.bind(e));else if(me(n))if(Wt(n))n.forEach(r=>Sh(r,t,e,i));else{const r=Kt(n.handler)?n.handler.bind(e):t[n.handler];Kt(r)&&_s(s,r,n)}}function Eh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>la(l,c,o,!0)),la(l,t,o)),me(t)&&r.set(t,l),l}function la(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&la(n,r,e,!0),s&&s.forEach(o=>la(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ug[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ug={data:Hu,props:Gu,emits:Gu,methods:Pr,computed:Pr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Pr,directives:Pr,watch:fg,provide:Hu,inject:dg};function Hu(n,t){return t?n?function(){return Ge(Kt(n)?n.call(this,this):n,Kt(t)?t.call(this,this):t)}:t:n}function dg(n,t){return Pr(ql(n),ql(t))}function ql(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function Pr(n,t){return n?Ge(Object.create(null),n,t):t}function Gu(n,t){return n?Wt(n)&&Wt(t)?[...new Set([...n,...t])]:Ge(Object.create(null),Vu(n),Vu(t??{})):t}function fg(n,t){if(!n)return t;if(!t)return n;const e=Ge(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function pg(n,t){return function(i,s=null){Kt(i)||(i=Ge({},i)),s!=null&&!me(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Kt(u.install)?(o.add(u),u.install(c,...d)):Kt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ue(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ia(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ys;Ys=c;try{return u()}finally{Ys=d}}};return c}}let Ys=null;const mg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${nn(t)}Modifiers`]||n[`${Zi(t)}Modifiers`];function gg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||xe;let s=e;const r=t.startsWith("update:"),o=r&&mg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Re(u)?u.trim():u)),o.number&&(s=s.map(wa)));let a,l=i[a=Ha(t)]||i[a=Ha(nn(t))];!l&&r&&(l=i[a=Ha(Zi(t))]),l&&kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(c,n,6,s)}}const _g=new WeakMap;function Th(n,t,e=!1){const i=e?_g:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Kt(n)){const l=c=>{const u=Th(c,t,!0);u&&(a=!0,Ge(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(me(n)&&i.set(n,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Ge(o,r),me(n)&&i.set(n,o),o)}function La(n,t){return!n||!ba(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ce(n,t[0].toLowerCase()+t.slice(1))||ce(n,Zi(t))||ce(n,t))}function Wu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:v,inheritAttrs:_}=n,g=ra(n);let h,D;try{if(e.shapeFlag&4){const S=s||i,q=S;h=jn(c.call(q,S,u,d,p,f,v)),D=a}else{const S=t;h=jn(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),D=t.props?a:vg(a)}}catch(S){vs.length=0,Ca(S,n,1),h=Ue(Hn)}let P=h;if(D&&_!==!1){const S=Object.keys(D),{shapeFlag:q}=P;S.length&&q&7&&(r&&S.some(Ma)&&(D=xg(D,r)),P=tr(P,D,!1,!0))}if(e.dirs&&(P=tr(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(e.dirs):e.dirs),e.transition){const S=Ra(P.type)&&yh(P)||P;oa(S,e.transition)}return h=P,ra(g),h}function Ah(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(qr(s)){if(s.type!==Hn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const vg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ba(e))&&((t||(t={}))[e]=n[e]);return t},xg=(n,t)=>{const e={};for(const i in n)(!Ma(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function yg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ch(o,i,f)&&!La(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ce(n,r)||Ch(t,n,r)&&!La(e,r))return!0}return!1}function Ch(n,t,e){const i=n[e],s=t[e];return e==="style"&&me(i)&&me(s)?!Vn(i,s):i!==s}function bg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Rh={},Ph=()=>Object.create(Rh),Lh=n=>Object.getPrototypeOf(n)===Rh;function Mg(n,t,e,i=!1){const s={},r=Ph();n.propsDefaults=Object.create(null),Dh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ch(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=he(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(La(n.emitsOptions,f))continue;const p=t[f];if(l)if(ce(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const v=nn(f);s[v]=jl(l,a,v,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Dh(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ce(t,d)&&((u=Zi(d))===d||!ce(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=jl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ce(t,d))&&(delete r[d],c=!0)}c&&gi(n.attrs,"set","")}function Dh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Nr(l))continue;const c=t[l];let u;s&&ce(s,u=nn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:La(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=he(e),c=a||xe;for(let u=0;u<r.length;u++){const d=r[u];e[d]=jl(s,l,d,c[d],n,!ce(c,d))}}return o}function jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ce(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Kt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=eo(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Zi(e))&&(i=!0))}return i}const Eg=new WeakMap;function Ih(n,t,e=!1){const i=e?Eg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Kt(n)){const u=d=>{l=!0;const[f,p]=Ih(d,t,!0);Ge(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return me(n)&&i.set(n,fs),fs;if(Wt(r))for(let u=0;u<r.length;u++){const d=nn(r[u]);Xu(d)&&(o[d]=xe)}else if(r)for(const u in r){const d=nn(u);if(Xu(d)){const f=r[u],p=o[d]=Wt(f)||Kt(f)?{type:f}:Ge({},f),v=p.type;let _=!1,g=!0;if(Wt(v))for(let h=0;h<v.length;++h){const D=v[h],P=Kt(D)&&D.name;if(P==="Boolean"){_=!0;break}else P==="String"&&(g=!1)}else _=Kt(v)&&v.name==="Boolean";p[0]=_,p[1]=g,(_||ce(p,"default"))&&a.push(d)}}const c=[o,a];return me(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!Nr(n)}const ou=n=>n==="_"||n==="_ctx"||n==="$stable",au=n=>Wt(n)?n.map(jn):[jn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=iu((...s)=>au(t(...s)),e);return i._c=!1,i},Uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ou(s))continue;const r=n[s];if(Kt(r))t[s]=wg(s,r,i);else if(r!=null){const o=au(r);t[s]=()=>o}}},Nh=(n,t)=>{const e=au(t);n.slots.default=()=>e},Oh=(n,t,e)=>{for(const i in t)(e||!ou(i))&&(n[i]=t[i])},Tg=(n,t,e)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const s=t._;s?(Oh(i,t,e),e&&Wf(i,"_",s,!0)):Uh(t,i)}else t&&Nh(n,t)},Ag=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=xe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Oh(s,t,e):(r=!t.$stable,Uh(t,s)),o=t}else t&&(Nh(n,t),o={default:1});if(r)for(const a in s)!ou(a)&&o[a]==null&&delete s[a]},ln=Dg;function Cg(n){return Rg(n)}function Rg(n,t){const e=Ta();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Jn,insertStaticContent:v}=n,_=(y,C,V,b=null,it=null,et=null,lt=void 0,ct=null,Mt=!!C.dynamicChildren)=>{if(y===C)return;y&&!xr(y,C)&&(b=B(y),ft(y,it,et,!0),y=null),C.patchFlag===-2&&(Mt=!1,C.dynamicChildren=null),C.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(C.dynamicChildren===fs&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:Q,ref:T,shapeFlag:x}=C;switch(Q){case Da:g(y,C,V,b);break;case Hn:h(y,C,V,b);break;case jo:y==null&&D(C,V,b,lt);break;case Le:ot(y,C,V,b,it,et,lt,ct,Mt);break;default:x&1?q(y,C,V,b,it,et,lt,ct,Mt):x&6?rt(y,C,V,b,it,et,lt,ct,Mt):(x&64||x&128)&&Q.process(y,C,V,b,it,et,lt,ct,Mt,Y)}T!=null&&it?Br(T,y&&y.ref,et,C||y,!C):T==null&&y&&y.ref!=null&&Br(y.ref,null,et,y,!0)},g=(y,C,V,b)=>{if(y==null)i(C.el=a(C.children),V,b);else{const it=C.el=y.el;C.children!==y.children&&c(it,C.children)}},h=(y,C,V,b)=>{y==null?i(C.el=l(C.children||""),V,b):C.el=y.el},D=(y,C,V,b)=>{[y.el,y.anchor]=v(y.children,C,V,b,y.el,y.anchor)},P=({el:y,anchor:C},V,b)=>{let it;for(;y&&y!==C;)it=f(y),i(y,V,b),y=it;i(C,V,b)},S=({el:y,anchor:C})=>{let V;for(;y&&y!==C;)V=f(y),s(y),y=V;s(C)},q=(y,C,V,b,it,et,lt,ct,Mt)=>{if(C.type==="svg"?lt="svg":C.type==="math"&&(lt="mathml"),y==null)F(C,V,b,it,et,lt,ct,Mt);else{const Q=y.el&&y.el._isVueCE?y.el:null;try{Q&&Q._beginPatch(),M(y,C,it,et,lt,ct,Mt)}finally{Q&&Q._endPatch()}}},F=(y,C,V,b,it,et,lt,ct)=>{let Mt,Q;const{props:T,shapeFlag:x,transition:k,dirs:st}=y;if(Mt=y.el=o(y.type,et,T&&T.is,T),x&8?u(Mt,y.children):x&16&&U(y.children,Mt,null,b,it,Ka(y,et),lt,ct),st&&Ji(y,null,b,"created"),O(Mt,y,y.scopeId,lt,b),T){for(const H in T)H!=="value"&&!Nr(H)&&r(Mt,H,null,T[H],et,b);"value"in T&&r(Mt,"value",null,T.value,et),(Q=T.onVnodeBeforeMount)&&$n(Q,b,y)}st&&Ji(y,null,b,"beforeMount");const mt=Pg(it,k);mt&&k.beforeEnter(Mt),i(Mt,C,V),((Q=T&&T.onVnodeMounted)||mt||st)&&ln(()=>{try{Q&&$n(Q,b,y),mt&&k.enter(Mt),st&&Ji(y,null,b,"mounted")}finally{}},it)},O=(y,C,V,b,it)=>{if(V&&p(y,V),b)for(let et=0;et<b.length;et++)p(y,b[et]);if(it){let et=it.subTree;if(C===et||zh(et.type)&&(et.ssContent===C||et.ssFallback===C)){const lt=it.vnode;O(y,lt,lt.scopeId,lt.slotScopeIds,it.parent)}}},U=(y,C,V,b,it,et,lt,ct,Mt=0)=>{for(let Q=Mt;Q<y.length;Q++){const T=y[Q]=ct?mi(y[Q]):jn(y[Q]);_(null,T,C,V,b,it,et,lt,ct)}},M=(y,C,V,b,it,et,lt)=>{const ct=C.el=y.el;let{patchFlag:Mt,dynamicChildren:Q,dirs:T}=C;Mt|=y.patchFlag&16;const x=y.props||xe,k=C.props||xe;let st;if(V&&Qi(V,!1),(st=k.onVnodeBeforeUpdate)&&$n(st,V,C,y),T&&Ji(C,y,V,"beforeUpdate"),V&&Qi(V,!0),Q&&(!y.dynamicChildren||y.dynamicChildren.length!==Q.length)&&(Mt=0,lt=!1,Q=null),(x.innerHTML&&k.innerHTML==null||x.textContent&&k.textContent==null)&&u(ct,""),Q?E(y.dynamicChildren,Q,ct,V,b,Ka(C,it),et):lt||X(y,C,ct,null,V,b,Ka(C,it),et,!1),Mt>0){if(Mt&16)w(ct,x,k,V,it);else if(Mt&2&&x.class!==k.class&&r(ct,"class",null,k.class,it),Mt&4&&r(ct,"style",x.style,k.style,it),Mt&8){const mt=C.dynamicProps;for(let H=0;H<mt.length;H++){const R=mt[H],j=x[R],vt=k[R];(vt!==j||R==="value")&&r(ct,R,j,vt,it,V)}}Mt&1&&y.children!==C.children&&u(ct,C.children)}else!lt&&Q==null&&w(ct,x,k,V,it);((st=k.onVnodeUpdated)||T)&&ln(()=>{st&&$n(st,V,C,y),T&&Ji(C,y,V,"updated")},b)},E=(y,C,V,b,it,et,lt)=>{for(let ct=0;ct<C.length;ct++){const Mt=y[ct],Q=C[ct],T=Mt.el||Yl(Mt),x=T&&(Mt.type===Le||!xr(Mt,Q)||Mt.shapeFlag&198)?d(T):V;_(Mt,Q,x,null,b,it,et,lt,!0)}},w=(y,C,V,b,it)=>{if(C!==V){if(C!==xe)for(const et in C)!Nr(et)&&!(et in V)&&r(y,et,C[et],null,it,b);for(const et in V){if(Nr(et))continue;const lt=V[et],ct=C[et];lt!==ct&&et!=="value"&&r(y,et,ct,lt,it,b)}"value"in V&&r(y,"value",C.value,V.value,it)}},ot=(y,C,V,b,it,et,lt,ct,Mt)=>{const Q=C.el=y?y.el:a(""),T=C.anchor=y?y.anchor:a("");let{patchFlag:x,dynamicChildren:k,slotScopeIds:st}=C;st&&(ct=ct?ct.concat(st):st),y==null?(i(Q,V,b),i(T,V,b),U(C.children||[],V,T,it,et,lt,ct,Mt)):x>0&&x&64&&k&&y.dynamicChildren&&y.dynamicChildren.length===k.length?(E(y.dynamicChildren,k,V,it,et,lt,ct),(C.key!=null||it&&C===it.subTree)&&Fh(y,C,!0)):X(y,C,V,T,it,et,lt,ct,Mt)},rt=(y,C,V,b,it,et,lt,ct,Mt)=>{C.slotScopeIds=ct,y==null?C.shapeFlag&512?it.ctx.activate(C,V,b,lt,Mt):at(C,V,b,it,et,lt,Mt):xt(y,C,Mt)},at=(y,C,V,b,it,et,lt)=>{const ct=y.component=Bg(y,b,it);if(su(y)&&(ct.ctx.renderer=Y),Vg(ct,!1,lt),ct.asyncDep){if(it&&it.registerDep(ct,W,lt,et),!y.el){const Mt=ct.subTree=Ue(Hn);h(null,Mt,C,V),y.placeholder=Mt.el}}else W(ct,y,C,V,it,et,lt)},xt=(y,C,V)=>{const b=C.component=y.component;if(yg(y,C,V))if(b.asyncDep&&!b.asyncResolved){C.el=y.el,C.placeholder=y.placeholder,z(b,C,V);return}else b.next=C,b.update();else C.el=y.el,C.placeholder=y.placeholder,b.vnode=C},W=(y,C,V,b,it,et,lt)=>{const ct=()=>{if(y.isMounted){let{next:x,bu:k,u:st,parent:mt,vnode:H}=y;{const Et=Bh(y);if(Et){x&&(x.el=H.el,z(y,x,lt)),Et.asyncDep.then(()=>{ln(()=>{y.isUnmounted||Q()},it)});return}}let R=x,j;Qi(y,!1),x?(x.el=H.el,z(y,x,lt)):x=H,k&&Xo(k),(j=x.props&&x.props.onVnodeBeforeUpdate)&&$n(j,mt,x,H),Qi(y,!0);const vt=Wu(y),bt=y.subTree;y.subTree=vt,_(bt,vt,d(bt.el),B(bt),y,it,et),x.el=vt.el,R===null&&bg(y,vt.el),st&&ln(st,it),(j=x.props&&x.props.onVnodeUpdated)&&ln(()=>$n(j,mt,x,H),it)}else{let x;const{el:k,props:st}=C,{bm:mt,m:H,parent:R,root:j,type:vt}=y,bt=zr(C);Qi(y,!1),mt&&Xo(mt),!bt&&(x=st&&st.onVnodeBeforeMount)&&$n(x,R,C),Qi(y,!0);{j.ce&&j.ce._hasShadowRoot()&&j.ce._injectChildStyle(vt,y.parent?y.parent.type:void 0);const Et=y.subTree=Wu(y);_(null,Et,V,b,y,it,et),C.el=Et.el}if(H&&ln(H,it),!bt&&(x=st&&st.onVnodeMounted)){const Et=C;ln(()=>$n(x,R,Et),it)}(C.shapeFlag&256||R&&zr(R.vnode)&&R.vnode.shapeFlag&256)&&y.a&&ln(y.a,it),y.isMounted=!0,C=V=b=null}};y.scope.on();const Mt=y.effect=new jf(ct);y.scope.off();const Q=y.update=Mt.run.bind(Mt),T=y.job=Mt.runIfDirty.bind(Mt);T.i=y,T.id=y.uid,Mt.scheduler=()=>nu(T),Qi(y,!0),Q()},z=(y,C,V)=>{C.component=y;const b=y.vnode.props;y.vnode=C,y.next=null,Sg(y,C.props,b,V),Ag(y,C.children,V),ti(),ph(y),ei()},X=(y,C,V,b,it,et,lt,ct,Mt=!1)=>{const Q=y&&y.children,T=y?y.shapeFlag:0,x=C.children,{patchFlag:k,shapeFlag:st}=C;if(k>0){if(k&128){N(Q,x,V,b,it,et,lt,ct,Mt);return}else if(k&256){dt(Q,x,V,b,it,et,lt,ct,Mt);return}}st&8?(T&16&&ht(Q,it,et),x!==Q&&u(V,x)):T&16?st&16?N(Q,x,V,b,it,et,lt,ct,Mt):ht(Q,it,et,!0):(T&8&&u(V,""),st&16&&U(x,V,b,it,et,lt,ct,Mt))},dt=(y,C,V,b,it,et,lt,ct,Mt)=>{y=y||fs,C=C||fs;const Q=y.length,T=C.length,x=Math.min(Q,T);let k;for(k=0;k<x;k++){const st=C[k]=Mt?mi(C[k]):jn(C[k]);_(y[k],st,V,null,it,et,lt,ct,Mt)}Q>T?ht(y,it,et,!0,!1,x):U(C,V,b,it,et,lt,ct,Mt,x)},N=(y,C,V,b,it,et,lt,ct,Mt)=>{let Q=0;const T=C.length;let x=y.length-1,k=T-1;for(;Q<=x&&Q<=k;){const st=y[Q],mt=C[Q]=Mt?mi(C[Q]):jn(C[Q]);if(xr(st,mt))_(st,mt,V,null,it,et,lt,ct,Mt);else break;Q++}for(;Q<=x&&Q<=k;){const st=y[x],mt=C[k]=Mt?mi(C[k]):jn(C[k]);if(xr(st,mt))_(st,mt,V,null,it,et,lt,ct,Mt);else break;x--,k--}if(Q>x){if(Q<=k){const st=k+1,mt=st<T?C[st].el:b;for(;Q<=k;)_(null,C[Q]=Mt?mi(C[Q]):jn(C[Q]),V,mt,it,et,lt,ct,Mt),Q++}}else if(Q>k)for(;Q<=x;)ft(y[Q],it,et,!0),Q++;else{const st=Q,mt=Q,H=new Map;for(Q=mt;Q<=k;Q++){const Ut=C[Q]=Mt?mi(C[Q]):jn(C[Q]);Ut.key!=null&&H.set(Ut.key,Q)}let R,j=0;const vt=k-mt+1;let bt=!1,Et=0;const Tt=new Array(vt);for(Q=0;Q<vt;Q++)Tt[Q]=0;for(Q=st;Q<=x;Q++){const Ut=y[Q];if(j>=vt){ft(Ut,it,et,!0);continue}let Ct;if(Ut.key!=null)Ct=H.get(Ut.key);else for(R=mt;R<=k;R++)if(Tt[R-mt]===0&&xr(Ut,C[R])){Ct=R;break}Ct===void 0?ft(Ut,it,et,!0):(Tt[Ct-mt]=Q+1,Ct>=Et?Et=Ct:bt=!0,_(Ut,C[Ct],V,null,it,et,lt,ct,Mt),j++)}const Bt=bt?Lg(Tt):fs;for(R=Bt.length-1,Q=vt-1;Q>=0;Q--){const Ut=mt+Q,Ct=C[Ut],Zt=C[Ut+1],Gt=Ut+1<T?Zt.el||Yl(Zt):b;Tt[Q]===0?_(null,Ct,V,Gt,it,et,lt,ct,Mt):bt&&(R<0||Q!==Bt[R]?I(Ct,V,Gt,2):R--)}}},I=(y,C,V,b,it=null)=>{const{el:et,type:lt,transition:ct,children:Mt,shapeFlag:Q}=y;if(Q&6){I(y.component.subTree,C,V,b);return}if(Q&128){y.suspense.move(C,V,b);return}if(Q&64){lt.move(y,C,V,Y);return}if(lt===Le){i(et,C,V);for(let x=0;x<Mt.length;x++)I(Mt[x],C,V,b);i(y.anchor,C,V);return}if(lt===jo){P(y,C,V);return}if(b!==2&&Q&1&&ct)if(b===0)ct.persisted&&!et[ja]?i(et,C,V):(ct.beforeEnter(et),i(et,C,V),ln(()=>ct.enter(et),it));else{const{leave:x,delayLeave:k,afterLeave:st}=ct,mt=()=>{y.ctx.isUnmounted?s(et):i(et,C,V)},H=()=>{const R=et._isLeaving||!!et[ja];et._isLeaving&&et[ja](!0),ct.persisted&&!R?mt():x(et,()=>{mt(),st&&st()})};k?k(et,mt,H):H()}else i(et,C,V)},ft=(y,C,V,b=!1,it=!1)=>{const{type:et,props:lt,ref:ct,children:Mt,dynamicChildren:Q,shapeFlag:T,patchFlag:x,dirs:k,cacheIndex:st,memo:mt}=y;if((x===-2||Q&&Q.hasOnce)&&(it=!1),ct!=null&&(ti(),Br(ct,null,V,y,!0),ei()),st!=null&&(!y.ctx||y.ctx===C)&&(C.renderCache[st]=void 0),T&256){C.ctx.deactivate(y);return}const H=T&1&&k,R=!zr(y);let j;if(R&&(j=lt&&lt.onVnodeBeforeUnmount)&&$n(j,C,y),T&6)nt(y.component,V,b);else{if(T&128){y.suspense.unmount(V,b);return}H&&Ji(y,null,C,"beforeUnmount"),T&64?y.type.remove(y,C,V,Y,b):Q&&!Q.hasOnce&&(et!==Le||x>0&&x&64)?ht(Q,C,V,!1,!0):(et===Le&&x&384||!it&&T&16)&&ht(Mt,C,V),b&&K(y)}const vt=mt!=null&&st==null;(R&&(j=lt&&lt.onVnodeUnmounted)||H||vt)&&ln(()=>{j&&$n(j,C,y),H&&Ji(y,null,C,"unmounted"),vt&&(y.el=null)},V)},K=y=>{const{type:C,el:V,anchor:b,transition:it}=y,et=C===Le;if(et&&!it){L(V,b);return}if(C===jo){S(y),it&&!it.persisted&&it.afterLeave&&it.afterLeave();return}const lt=et?Wl(y):y,ct=()=>{et?d(V)&&L(V,b):s(V),it&&!it.persisted&&it.afterLeave&&it.afterLeave()};if(lt&&lt.shapeFlag&1&&it&&!it.persisted){const{leave:Mt,delayLeave:Q}=it,T=lt.el,x=()=>Mt(T,ct);Q?Q(T,ct,x):x()}else ct()},L=(y,C)=>{let V;for(;y!==C;)V=f(y),s(y),y=V;s(C)},nt=(y,C,V)=>{const{bum:b,scope:it,job:et,subTree:lt,um:ct,m:Mt,a:Q}=y;qu(Mt),qu(Q),b&&Xo(b),it.stop(),et?(et.flags|=8,ft(lt,y,C,V)):y.vnode.el&&lt&&(lt.transition=y.vnode.transition,ft(lt,y,C,V)),ct&&ln(ct,C),ln(()=>{y.isUnmounted=!0},C)},ht=(y,C,V,b=!1,it=!1,et=0)=>{for(let lt=et;lt<y.length;lt++)ft(y[lt],C,V,b,it)},B=y=>{if(y.shapeFlag&6)return B(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const C=f(y.anchor||y.el),V=C&&C[$m];return V?f(V):C},$=(y,C,V)=>{const b=y&&C._vnode?void 0:y&&y.component?y.component.uid:Fg();km(()=>{y==null?C._vnode&&ft(C._vnode,null,null,!0):_(C._vnode||null,y,C,null,null,null,V),C._vnode=y},b)},Y={p:_,um:ft,m:I,r:K,mt:at,mc:U,pc:X,pbc:E,n:B,o:n};return{render:$,hydrate:void 0,createApp:pg($)}}function Ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Fh(n,t,e=!1){const i=n.children,s=t.children;if(Wt(i)&&Wt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=mi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Fh(o,a)),a.type===Da&&(a.patchFlag===-1&&(a=s[r]=mi(a)),a.el=o.el),a.type===Hn&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bh(t)}function qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Yl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Yl(t.subTree):null}const zh=n=>n.__isSuspense;function Dg(n,t){t&&t.pendingBranch?Wt(n)?t.effects.push(...n):t.effects.push(n):Vm(n)}const Le=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),vs=[];let gn=null;function Nt(n=!1){vs.push(gn=n?null:[])}function Vh(){vs.pop(),gn=vs[vs.length-1]||null}let Xr=1;function ca(n,t=!1){Xr+=n,n<0&&gn&&t&&(gn.hasOnce=!0)}function kh(n){return n.dynamicChildren=Xr>0?gn||fs:null,Vh(),Xr>0&&gn&&gn.push(n),n}function Ot(n,t,e,i,s,r){return kh(m(n,t,e,i,s,r,!0))}function lu(n,t,e,i,s){return kh(Ue(n,t,e,i,s,!0))}function qr(n){return n?n.__v_isVNode===!0:!1}function xr(n,t){return n.type===t.type&&n.key===t.key}const Hh=({key:n})=>n??null,Yo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Re(n)||je(n)||Kt(n)?{i:mn,r:n,k:t,f:!!e}:n:null);function m(n,t=null,e=null,i=0,s=null,r=n===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hh(t),ref:t&&Yo(t),scopeId:_h,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(ua(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Re(e)?8:16),Xr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ue=Ig;function Ig(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===rg)&&(n=Hn),qr(n)){const a=tr(n,t,!0);return e&&ua(a,e),Xr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ug(t);let{class:a,style:l}=t;a&&!Re(a)&&(t.class=pi(a)),me(l)&&(tu(l)&&!Wt(l)&&(l=Ge({},l)),t.style=pe(l))}const o=Re(n)?1:zh(n)?128:Ra(n)?64:me(n)?4:Kt(n)?2:0;return m(n,t,e,i,s,o,r,!0)}function Ug(n){return n?tu(n)||Lh(n)?Ge({},n):n:null}function tr(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ng(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hh(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(Yo(t)):[r,Yo(t)]:Yo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Le?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&tr(n.ssContent),ssFallback:n.ssFallback&&tr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&oa(u,l.clone(u)),u}function Dt(n=" ",t=0){return Ue(Da,null,n,t)}function jr(n,t){const e=Ue(jo,null,n);return e.staticCount=t,e}function Te(n="",t=!1){return t?(Nt(),lu(Hn,null,n)):Ue(Hn,null,n)}function jn(n){return n==null||typeof n=="boolean"?Ue(Hn):Wt(n)?Ue(Le,null,n.slice()):qr(n)?mi(n):Ue(Da,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:tr(n)}function ua(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ua(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=mn:s===3&&mn&&(mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Kt(t)){if(i&65){ua(n,{default:t});return}t={default:t,_ctx:mn},e=32}else t=String(t),i&64?(e=16,t=[Dt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ng(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=pi([t.class,i.class]));else if(s==="style")t.style=pe([t.style,i.style]);else if(ba(s)){const r=t[s],o=i[s];o&&r!==o&&!(Wt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ma(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function $n(n,t,e,i=null){kn(n,t,7,[e,i])}const Og=wh();let Gh=0;function Fg(){return Gh}function Bg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Og,r={uid:Gh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:i.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=gg.bind(null,r),n.ce&&n.ce(r),r}let qe=null;const zg=()=>qe||mn;let da,Yr;{const n=Ta(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};da=t("__VUE_INSTANCE_SETTERS__",e=>qe=e),Yr=t("__VUE_SSR_SETTERS__",e=>Kr=e)}const eo=n=>{const t=qe;return da(n),n.scope.on(),()=>{n.scope.off(),da(t)}},ju=()=>{qe&&qe.scope.off(),da(null)};function Wh(n){return n.vnode.shapeFlag&4}let Kr=!1;function Vg(n,t=!1,e=!1){t&&Yr(t);const{props:i,children:s}=n.vnode,r=Wh(n);Mg(n,i,r,t),Tg(n,s,e||t);const o=r?kg(n,t):void 0;return t&&Yr(!1),o}function kg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ag);const{setup:i}=e;if(i){ti();const s=n.setupContext=i.length>1?Gg(n):null,r=eo(n),o=to(i,n,0,[n.props,s]),a=kf(o);if(ei(),r(),(a||n.sp)&&!zr(n)&&bh(n),a){if(o.then(ju,ju),t)return o.then(l=>{Yr(!0);try{Yu(n,l,t)}finally{Yr(!1)}}).catch(l=>{Ca(l,n,0)});n.asyncDep=o}else Yu(n,o)}else $h(n)}function Yu(n,t,e){Kt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:me(t)&&(n.setupState=dh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||Jn);{const s=eo(n);ti();try{lg(n)}finally{ei(),s()}}}const Hg={get(n,t){return Xe(n,"get",""),n[t]}};function Gg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Hg),slots:n.slots,emit:n.emit,expose:t}}function Ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Pm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Vr)return Vr[e](n)},has(t,e){return e in t||e in Vr}})):n.proxy}function Wg(n,t=!0){return Kt(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return Kt(n)&&"__vccOpts"in n}const ze=(n,t)=>Nm(n,t,Kr);function Xh(n,t,e){try{ca(-1);const i=arguments.length;return i===2?me(t)&&!Wt(t)?qr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&qr(e)&&(e=[e]),Ue(n,t,e))}finally{ca(1)}}const Xg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{Kl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const qh=Kl?n=>Kl.createHTML(n):n=>n,qg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Zu=hi&&hi.createElement("template"),Yg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?hi.createElementNS(qg,n):t==="mathml"?hi.createElementNS(jg,n):e?hi.createElement(n,{is:e}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Zu.innerHTML=qh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Kg=Symbol("_vtc");function Zg(n,t,e){const i=n[Kg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const fa=Symbol("_vod"),jh=Symbol("_vsh"),Ju={name:"show",beforeMount(n,{value:t},{transition:e}){n[fa]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):yr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),yr(n,!0),i.enter(n)):i.leave(n,()=>{yr(n,!1)}):yr(n,t))},beforeUnmount(n,{value:t}){yr(n,t)}};function yr(n,t){n.style.display=t?n[fa]:"none",n[jh]=!t}const Jg=Symbol(""),Qg=/(?:^|;)\s*display\s*:/;function t_(n,t,e){const i=n.style,s=Re(e);let r=!1;if(e&&!s){if(t)if(Re(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Lr(i,a,"")}else for(const o in t)e[o]==null&&Lr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?n_(n,o,!Re(t)&&t?t[o]:void 0,a)||Lr(i,o,a):Lr(i,o,"")}}else if(s){if(t!==e){const o=i[Jg];o&&(e+=";"+o),i.cssText=e,r=Qg.test(e)}}else t&&n.removeAttribute("style");fa in n&&((!s||t!==e)&&(n[fa]=r?i.display:""),n[jh]&&(i.display="none"))}const ho=/\s*!important$/;function Lr(n,t,e){if(Wt(e))e.forEach(i=>Lr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))ho.test(e)?n.setProperty(t,e.replace(ho,""),"important"):n.setProperty(t,e);else{const i=e_(n,t);ho.test(e)?n.setProperty(Zi(i),e.replace(ho,""),"important"):n[i]=e}}const Qu=["Webkit","Moz","ms"],Za={};function e_(n,t){const e=Za[t];if(e)return e;let i=nn(t);if(i!=="filter"&&i in n)return Za[t]=i;i=Ea(i);for(let s=0;s<Qu.length;s++){const r=Qu[s]+i;if(r in n)return Za[t]=r}return t}function n_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Re(i)&&e===i}const td="http://www.w3.org/1999/xlink";function ed(n,t,e,i,s,r=cm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(td,t.slice(6,t.length)):n.setAttributeNS(td,t,e):e==null||r&&!$f(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Qn(e)?String(e):e)}function nd(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?qh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=$f(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function vi(n,t,e,i){n.addEventListener(t,e,i)}function i_(n,t,e,i){n.removeEventListener(t,e,i)}const id=Symbol("_vei");function s_(n,t,e,i,s=null){const r=n[id]||(n[id]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=a_(t);if(i){const c=r[t]=u_(i,s);vi(n,a,c,l)}else o&&(i_(n,a,o,l),r[t]=void 0)}}const r_=/(Once|Passive|Capture)$/,o_=/^on:?(?:Once|Passive|Capture)$/;function a_(n){let t,e;for(;(e=n.match(r_))&&!o_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Zi(n.slice(2)),t]}let Ja=0;const l_=Promise.resolve(),c_=()=>Ja||(l_.then(()=>Ja=0),Ja=Date.now());function u_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Wt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&kn(c,t,5,a)}}else kn(s,t,5,[i])};return e.value=n,e.attached=c_(),e}const sd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Zg(n,i,o):t==="style"?t_(n,e,i):ba(t)?Ma(t)||s_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):f_(n,t,i,o))?(nd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ed(n,t,i,o,r,t!=="value")):n._isVueCE&&(h_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Re(i)))?nd(n,nn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ed(n,t,i,o))};function f_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sd(t)&&Kt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sd(t)&&Re(e)?!1:t in n}function h_(n,t){const e=n._def.props;if(!e)return!1;const i=nn(t);return Array.isArray(e)?e.some(s=>nn(s)===i):Object.keys(e).some(s=>nn(s)===i)}const ji=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Wt(t)?e=>Xo(t,e):t};function p_(n){n.target.composing=!0}function rd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),po=Symbol("_initialValue");function Qa(n,t,e){return t&&(n=n.trim()),e&&(n=wa(n)),n}const Be={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[po]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[po]=n.defaultValue.replace(/\r\n?/g,`
`))),n[_n]=ji(s);const r=i||s.props&&s.props.type==="number";vi(n,t?"change":"input",o=>{o.target.composing||n[_n](Qa(n.value,e,r))}),(e||r)&&vi(n,"change",()=>{n.value=Qa(n.value,e,r)}),t||(vi(n,"compositionstart",p_),vi(n,"compositionend",rd),vi(n,"change",rd))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[po];delete n[po],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[_n](Qa(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[_n]=ji(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?wa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},zi={deep:!0,created(n,t,e){n[_n]=ji(e),vi(n,"change",()=>{const i=n._modelValue,s=er(n),r=n.checked,o=n[_n];if(Wt(i)){const a=qc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(wi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Yh(n,r))})},mounted:od,beforeUpdate(n,t,e){n[_n]=ji(e),od(n,t,e)}};function od(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Wt(t))s=qc(t,i.props.value)>-1;else if(wi(t))s=t.has(i.props.value);else{if(t===e)return;s=Vn(t,Yh(n,!0))}n.checked!==s&&(n.checked=s)}const ad={created(n,{value:t},e){n.checked=Vn(t,e.props.value),n[_n]=ji(e),vi(n,"change",()=>{n[_n](er(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[_n]=ji(i),t!==e&&(n.checked=Vn(t,i.props.value))}},ha={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,vi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?wa(er(l)):er(l)),r=n.multiple,o=r?wi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Wt(o)?s.slice():s:o];try{n[_n](o)}finally{eu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[_n]=ji(i)},mounted(n,{value:t}){ld(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[_n]=ji(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!m_(t,e[1],e[0]))&&ld(n,t)}};function m_(n,t,e){if(!e||Wt(n))return Vn(n,t);if(wi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function ld(n,t){const e=n.multiple,i=Wt(t);if(!(e&&!i&&!wi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=er(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=qc(t,a)>-1}else o.selected=t.has(a);else if(Vn(er(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function er(n){return"_value"in n?n._value:n.value}function Yh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const g_=["ctrl","shift","alt","meta"],__={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>g_.some(e=>n[`${e}Key`]&&!t.includes(e))},ls=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=__[t[o]];if(a&&a(s,t))return}return n(s,...r)})},v_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cd=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=s=>{if(!("key"in s))return;const r=Zi(s.key);if(t.some(o=>o===r||v_[o]===r))return n(s)})},x_=Ge({patchProp:d_},Yg);let ud;function y_(){return ud||(ud=Cg(x_))}const b_=(...n)=>{const t=y_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=S_(i);if(!s)return;const r=t._component;!Kt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,M_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function M_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function S_(n){return Re(n)?document.querySelector(n):n}const cu=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},E_={};function w_(n,t){const e=ru("router-view");return Nt(),lu(e)}const T_=cu(E_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const $s=typeof document<"u";function Kh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function A_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kh(n.default)}const fe=Object.assign;function tl(n,t){const e={};for(const i in t){const s=t[i];e[i]=Gn(s)?s.map(n):n(s)}return e}const kr=()=>{},Gn=Array.isArray;function dd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Zh=/#/g,C_=/&/g,R_=/\//g,P_=/=/g,L_=/\?/g,Jh=/\+/g,D_=/%5B/g,I_=/%5D/g,Qh=/%5E/g,U_=/%60/g,tp=/%7B/g,N_=/%7C/g,ep=/%7D/g,O_=/%20/g;function uu(n){return n==null?"":encodeURI(""+n).replace(N_,"|").replace(D_,"[").replace(I_,"]")}function F_(n){return uu(n).replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function Zl(n){return uu(n).replace(Jh,"%2B").replace(O_,"+").replace(Zh,"%23").replace(C_,"%26").replace(U_,"`").replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function B_(n){return Zl(n).replace(P_,"%3D")}function z_(n){return uu(n).replace(Zh,"%23").replace(L_,"%3F")}function V_(n){return z_(n).replace(R_,"%2F")}function Zr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const k_=/\/$/,H_=n=>n.replace(k_,"");function el(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=X_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Zr(o)}}function G_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function fd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function W_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&nr(t.matched[i],e.matched[s])&&np(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function nr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function np(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return Gn(n)?hd(n,t):Gn(t)?hd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function hd(n,t){return Gn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function X_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Jl=function(n){return n.pop="pop",n.push="push",n}({}),nl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function q_(n){if(!n)if($s){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),H_(n)}const j_=/^[^#]+#/;function Y_(n,t){return n.replace(j_,"#")+t}function K_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ua=()=>({left:window.scrollX,top:window.scrollY});function Z_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=K_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pd(n,t){return(history.state?history.state.position-t:-1)+n}const Ql=new Map;function J_(n,t){Ql.set(n,t)}function Q_(n){const t=Ql.get(n);return Ql.delete(n),t}function tv(n){return typeof n=="string"||n&&typeof n=="object"}function ip(n){return typeof n=="string"||typeof n=="symbol"}let Ae=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sp=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function ir(n,t){return fe(new Error,{type:n,[sp]:!0},t)}function oi(n,t){return n instanceof Error&&sp in n&&(t==null||!!(n.type&t))}const ev=["params","query","hash"];function nv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of ev)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function iv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Jh," "),r=s.indexOf("="),o=Zr(r<0?s:s.slice(0,r)),a=r<0?null:Zr(s.slice(r+1));if(o in t){let l=t[o];Gn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function md(n){let t="";for(let e in n){const i=n[e];if(e=B_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Gn(i)?i.map(s=>s&&Zl(s)):[i&&Zl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function sv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const rv=Symbol(""),gd=Symbol(""),Na=Symbol(""),du=Symbol(""),tc=Symbol("");function br(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Vi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(ir(Ae.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):tv(f)?l(ir(Ae.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function il(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Vi(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=A_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Vi(f,e,i,o,a,s)()}))}}return r}function ov(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>nr(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>nr(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av=()=>location.protocol+"//"+location.host;function rp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),fd(a,"")}return fd(e,n)+i+s}function lv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=rp(n,location),v=e.value,_=t.value;let g=0;if(f){if(e.value=p,t.value=f,o&&o===v){o=null;return}g=_?f.position-_.position:0}else i(p);s.forEach(h=>{h(e.value,v,{delta:g,type:Jl.pop,direction:g?g>0?nl.forward:nl.back:nl.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(fe({},f.state,{scroll:Ua()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function _d(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ua():null}}function cv(n){const{history:t,location:e}=window,i={value:rp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:av()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){r(l,fe({},t.state,_d(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=fe({},s.value,t.state,{forward:l,scroll:Ua()});r(u.current,u,!0),r(l,fe({},_d(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function uv(n){n=q_(n);const t=cv(n),e=lv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=fe({location:"",base:n,go:i,createHref:Y_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),uv(n)}let hs=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ie=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ie||{});const fv={type:hs.Static,value:""},hv=/[a-zA-Z0-9_]/;function pv(n){if(!n)return[[]];if(n==="/")return[[fv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=Ie.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ie.Static?r.push({type:hs.Static,value:c}):e===Ie.Param||e===Ie.ParamRegExp||e===Ie.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:hs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ie.ParamRegExp){i=e,e=Ie.EscapeNext;continue}switch(e){case Ie.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ie.Param):f();break;case Ie.EscapeNext:f(),e=i;break;case Ie.Param:l==="("?e=Ie.ParamRegExp:hv.test(l)?f():(d(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ie.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ie.ParamRegExpEnd:u+=l;break;case Ie.ParamRegExpEnd:d(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const vd="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var Je=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Je||{});const gv=/[.+*?^${}()[\]/\\]/g;function _v(n,t){const e=fe({},mv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Je.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Je.Segment+(e.sensitive?Je.BonusCaseSensitive:0);if(f.type===hs.Static)d||(s+="/"),s+=f.value.replace(gv,"\\$&"),p+=Je.Static;else if(f.type===hs.Param){const{value:v,repeatable:_,optional:g,regexp:h}=f;r.push({name:v,repeatable:_,optional:g});const D=h||vd;if(D!==vd){p+=Je.BonusCustomRegExp;try{`${D}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+S.message)}}let P=_?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(P=g&&c.length<2?`(?:/${P})`:"/"+P),g&&(P+="?"),s+=P,p+=Je.Dynamic,g&&(p+=Je.BonusOptional),_&&(p+=Je.BonusRepeatable),D===".*"&&(p+=Je.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Je.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=r[f-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===hs.Static)u+=p.value;else if(p.type===hs.Param){const{value:v,repeatable:_,optional:g}=p,h=v in c?c[v]:"";if(Gn(h)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=Gn(h)?h.join("/"):h;if(!D)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function vv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Je.Static+Je.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Je.Static+Je.Segment?1:-1:0}function op(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=vv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(xd(i))return 1;if(xd(s))return-1}return s.length-i.length}function xd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const xv={strict:!1,end:!0,sensitive:!1};function yv(n,t,e){const i=_v(pv(n.path),e),s=fe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bv(n,t){const e=[],i=new Map;t=dd(xv,t);function s(d){return i.get(d)}function r(d,f,p){const v=!p,_=bd(d);_.aliasOf=p&&p.record;const g=dd(t,d),h=[_];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const q of S)h.push(bd(fe({},_,{components:p?p.record.components:_.components,path:q,aliasOf:p?p.record:_})))}let D,P;for(const S of h){const{path:q}=S;if(f&&q[0]!=="/"){const F=f.record.path,O=F[F.length-1]==="/"?"":"/";S.path=f.record.path+(q&&O+q)}if(D=yv(S,f,g),p?p.alias.push(D):(P=P||D,P!==D&&P.alias.push(D),v&&d.name&&!Md(D)&&o(d.name)),ap(D)&&l(D),_.children){const F=_.children;for(let O=0;O<F.length;O++)r(F[O],D,p&&p.children[O])}p=p||D}return P?()=>{o(P)}:kr}function o(d){if(ip(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Ev(d,e);e.splice(f,0,d),d.record.name&&!Md(d)&&i.set(d.record.name,d)}function c(d,f){let p,v={},_,g;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw ir(Ae.MATCHER_NOT_FOUND,{location:d});g=p.record.name,v=fe(yd(f.params,p.keys.filter(P=>!P.optional).concat(p.parent?p.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&yd(d.params,p.keys.map(P=>P.name))),_=p.stringify(v)}else if(d.path!=null)_=d.path,p=e.find(P=>P.re.test(_)),p&&(v=p.parse(_),g=p.record.name);else{if(p=f.name?i.get(f.name):e.find(P=>P.re.test(f.path)),!p)throw ir(Ae.MATCHER_NOT_FOUND,{location:d,currentLocation:f});g=p.record.name,v=fe({},f.params,d.params),_=p.stringify(v)}const h=[];let D=p;for(;D;)h.unshift(D.record),D=D.parent;return{name:g,path:_,params:v,matched:h,meta:Sv(h)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function bd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Md(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sv(n){return n.reduce((t,e)=>fe(t,e.meta),{})}function Ev(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;op(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(ap(t)&&op(n,t)===0)return t}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Sd(n){const t=Fn(Na),e=Fn(du),i=ze(()=>{const l=Jt(n.to);return t.resolve(l)}),s=ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(nr.bind(null,u));if(f>-1)return f;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&d[d.length-1].path!==p?d.findIndex(nr.bind(null,l[c-2])):f}),r=ze(()=>s.value>-1&&Pv(e.params,i.value.params)),o=ze(()=>s.value>-1&&s.value===e.matched.length-1&&np(e.params,i.value.params));function a(l={}){if(Rv(l)){const c=t[Jt(n.replace)?"replace":"push"](Jt(n.to)).catch(kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Tv(n){return n.length===1?n[0]:n}const Av=Ai({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sd,setup(n,{slots:t}){const e=Mn(Sd(n)),{options:i}=Fn(Na),s=ze(()=>({[wd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[wd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Tv(t.default(e));return n.custom?r:Xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Cv=Av;function Rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Pv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Gn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Ed(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const wd=(n,t,e)=>n??t??e,Lv=Ai({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Fn(tc),s=ze(()=>n.route||i.value),r=Fn(gd,0),o=ze(()=>{let c=Jt(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ze(()=>s.value.matched[o.value]);qo(gd,ze(()=>o.value+1)),qo(rv,a),qo(tc,s);const l=Yt();return _s(()=>[l.value,a.value,n.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!nr(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Td(e.default,{Component:f,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Xh(f,fe({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Td(e.default,{Component:g,route:c})||g}}});function Td(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Dv=Lv;function Iv(n){const t=bv(n.routes,n),e=n.parseQuery||iv,i=n.stringifyQuery||md,s=n.history,r=br(),o=br(),a=br(),l=Lm(Li);let c=Li;$s&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,B=>""+B),d=tl.bind(null,V_),f=tl.bind(null,Zr);function p(B,$){let Y,ut;return ip(B)?(Y=t.getRecordMatcher(B),ut=$):ut=B,t.addRoute(ut,Y)}function v(B){const $=t.getRecordMatcher(B);$&&t.removeRoute($)}function _(){return t.getRoutes().map(B=>B.record)}function g(B){return!!t.getRecordMatcher(B)}function h(B,$){if($=fe({},$||l.value),typeof B=="string"){const b=el(e,B,$.path),it=t.resolve({path:b.path},$),et=s.createHref(b.fullPath);return fe(b,it,{params:f(it.params),hash:Zr(b.hash),redirectedFrom:void 0,href:et})}let Y;if(B.path!=null)Y=fe({},B,{path:el(e,B.path,$.path).path});else{const b=fe({},B.params);for(const it in b)b[it]==null&&delete b[it];Y=fe({},B,{params:d(b)}),$.params=d($.params)}const ut=t.resolve(Y,$),y=B.hash||"";ut.params=u(f(ut.params));const C=G_(i,fe({},B,{hash:F_(y),path:ut.path})),V=s.createHref(C);return fe({fullPath:C,hash:y,query:i===md?sv(B.query):B.query||{}},ut,{redirectedFrom:void 0,href:V})}function D(B){return typeof B=="string"?el(e,B,l.value.path):fe({},B)}function P(B,$){if(c!==B)return ir(Ae.NAVIGATION_CANCELLED,{from:$,to:B})}function S(B){return O(B)}function q(B){return S(fe(D(B),{replace:!0}))}function F(B,$){const Y=B.matched[B.matched.length-1];if(Y&&Y.redirect){const{redirect:ut}=Y;let y=typeof ut=="function"?ut(B,$):ut;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=D(y):{path:y},y.params={}),fe({query:B.query,hash:B.hash,params:y.path!=null?{}:B.params},y)}}function O(B,$){const Y=c=h(B),ut=l.value,y=B.state,C=B.force,V=B.replace===!0,b=F(Y,ut);if(b)return O(fe(D(b),{state:typeof b=="object"?fe({},y,b.state):y,force:C,replace:V}),$||Y);const it=Y;it.redirectedFrom=$;let et;return!C&&W_(i,ut,Y)&&(et=ir(Ae.NAVIGATION_DUPLICATED,{to:it,from:ut}),I(ut,ut,!0,!1)),(et?Promise.resolve(et):E(it,ut)).catch(lt=>oi(lt)?oi(lt,Ae.NAVIGATION_GUARD_REDIRECT)?lt:N(lt):X(lt,it,ut)).then(lt=>{if(lt){if(oi(lt,Ae.NAVIGATION_GUARD_REDIRECT))return O(fe({replace:V},D(lt.to),{state:typeof lt.to=="object"?fe({},y,lt.to.state):y,force:C}),$||it)}else lt=ot(it,ut,!0,V,y);return w(it,ut,lt),lt})}function U(B,$){const Y=P(B,$);return Y?Promise.reject(Y):Promise.resolve()}function M(B){const $=L.values().next().value;return $&&typeof $.runWithContext=="function"?$.runWithContext(B):B()}function E(B,$){let Y;const[ut,y,C]=ov(B,$);Y=il(ut.reverse(),"beforeRouteLeave",B,$);for(const b of ut)b.leaveGuards.forEach(it=>{Y.push(Vi(it,B,$))});const V=U.bind(null,B,$);return Y.push(V),ht(Y).then(()=>{Y=[];for(const b of r.list())Y.push(Vi(b,B,$));return Y.push(V),ht(Y)}).then(()=>{Y=il(y,"beforeRouteUpdate",B,$);for(const b of y)b.updateGuards.forEach(it=>{Y.push(Vi(it,B,$))});return Y.push(V),ht(Y)}).then(()=>{Y=[];for(const b of C)if(b.beforeEnter)if(Gn(b.beforeEnter))for(const it of b.beforeEnter)Y.push(Vi(it,B,$));else Y.push(Vi(b.beforeEnter,B,$));return Y.push(V),ht(Y)}).then(()=>(B.matched.forEach(b=>b.enterCallbacks={}),Y=il(C,"beforeRouteEnter",B,$,M),Y.push(V),ht(Y))).then(()=>{Y=[];for(const b of o.list())Y.push(Vi(b,B,$));return Y.push(V),ht(Y)}).catch(b=>oi(b,Ae.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function w(B,$,Y){a.list().forEach(ut=>M(()=>ut(B,$,Y)))}function ot(B,$,Y,ut,y){const C=P(B,$);if(C)return C;const V=$===Li,b=$s?history.state:{};Y&&(ut||V?s.replace(B.fullPath,fe({scroll:V&&b&&b.scroll},y)):s.push(B.fullPath,y)),l.value=B,I(B,$,Y,V),N()}let rt;function at(){rt||(rt=s.listen((B,$,Y)=>{if(!nt.listening)return;const ut=h(B),y=F(ut,nt.currentRoute.value);if(y){O(fe(y,{replace:!0,force:!0}),ut).catch(kr);return}c=ut;const C=l.value;$s&&J_(pd(C.fullPath,Y.delta),Ua()),E(ut,C).catch(V=>oi(V,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?V:oi(V,Ae.NAVIGATION_GUARD_REDIRECT)?(O(fe(D(V.to),{force:!0}),ut).then(b=>{oi(b,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===Jl.pop&&s.go(-1,!1)}).catch(kr),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),X(V,ut,C))).then(V=>{V=V||ot(ut,C,!1),V&&(Y.delta&&!oi(V,Ae.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===Jl.pop&&oi(V,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),w(ut,C,V)}).catch(kr)}))}let xt=br(),W=br(),z;function X(B,$,Y){N(B);const ut=W.list();return ut.length?ut.forEach(y=>y(B,$,Y)):console.error(B),Promise.reject(B)}function dt(){return z&&l.value!==Li?Promise.resolve():new Promise((B,$)=>{xt.add([B,$])})}function N(B){return z||(z=!B,at(),xt.list().forEach(([$,Y])=>B?Y(B):$()),xt.reset()),B}function I(B,$,Y,ut){const{scrollBehavior:y}=n;if(!$s||!y)return Promise.resolve();const C=!Y&&Q_(pd(B.fullPath,0))||(ut||!Y)&&history.state&&history.state.scroll||null;return eu().then(()=>y(B,$,C)).then(V=>V&&Z_(V)).catch(V=>X(V,B,$))}const ft=B=>s.go(B);let K;const L=new Set,nt={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:_,resolve:h,options:n,push:S,replace:q,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:dt,install(B){B.component("RouterLink",Cv),B.component("RouterView",Dv),B.config.globalProperties.$router=nt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Jt(l)}),$s&&!K&&l.value===Li&&(K=!0,S(s.location).catch(ut=>{}));const $={};for(const ut in Li)Object.defineProperty($,ut,{get:()=>l.value[ut],enumerable:!0});B.provide(Na,nt),B.provide(du,ch($)),B.provide(tc,l);const Y=B.unmount;L.add(B),B.unmount=function(){L.delete(B),L.size<1&&(c=Li,rt&&rt(),rt=null,l.value=Li,K=!1,z=!1),Y()}}};function ht(B){return B.reduce(($,Y)=>$.then(()=>M(Y)),Promise.resolve())}return nt}function lp(){return Fn(Na)}function Uv(n){return Fn(du)}var fu={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),I=N.getContext("2d");I.fillRect(0,0,1,1);var ft=N.transferToImageBitmap();I.createPattern(ft,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var I=e.exports.Promise,ft=I!==void 0?I:t.Promise;return typeof ft=="function"?new ft(N):(N(l,l),null)}var u=function(N,I){return{transform:function(ft){if(N)return ft;if(I.has(ft))return I.get(ft);var K=new OffscreenCanvas(ft.width,ft.height),L=K.getContext("2d");return L.drawImage(ft,0,0),I.set(ft,K),K},clear:function(){I.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),I,ft,K={},L=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(I=function(nt){var ht=Math.random();return K[ht]=requestAnimationFrame(function B($){L===$||L+N-1<$?(L=$,delete K[ht],nt()):K[ht]=requestAnimationFrame(B)}),ht},ft=function(nt){K[nt]&&cancelAnimationFrame(K[nt])}):(I=function(nt){return setTimeout(nt,N)},ft=function(nt){return clearTimeout(nt)}),{frame:I,cancel:ft}}(),f=function(){var N,I,ft={};function K(L){function nt(ht,B){L.postMessage({options:ht||{},callback:B})}L.init=function(B){var $=B.transferControlToOffscreen();L.postMessage({canvas:$},[$])},L.fire=function(B,$,Y){if(I)return nt(B,null),I;var ut=Math.random().toString(36).slice(2);return I=c(function(y){function C(V){V.data.callback===ut&&(delete ft[ut],L.removeEventListener("message",C),I=null,u.clear(),Y(),y())}L.addEventListener("message",C),nt(B,ut),ft[ut]=C.bind(null,{data:{callback:ut}})}),I},L.reset=function(){L.postMessage({reset:!0});for(var B in ft)ft[B](),delete ft[B]}}return function(){if(N)return N;if(!i&&r){var L=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([L])))}catch(nt){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",nt),null}K(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(N,I){return I?I(N):N}function _(N){return N!=null}function g(N,I,ft){return v(N&&_(N[I])?N[I]:p[I],ft)}function h(N){return N<0?0:Math.floor(N)}function D(N,I){return Math.floor(Math.random()*(I-N))+N}function P(N){return parseInt(N,16)}function S(N){return N.map(q)}function q(N){var I=String(N).replace(/[^0-9a-f]/gi,"");return I.length<6&&(I=I[0]+I[0]+I[1]+I[1]+I[2]+I[2]),{r:P(I.substring(0,2)),g:P(I.substring(2,4)),b:P(I.substring(4,6))}}function F(N){var I=g(N,"origin",Object);return I.x=g(I,"x",Number),I.y=g(I,"y",Number),I}function O(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function U(N){var I=N.getBoundingClientRect();N.width=I.width,N.height=I.height}function M(N){var I=document.createElement("canvas");return I.style.position="fixed",I.style.top="0px",I.style.left="0px",I.style.pointerEvents="none",I.style.zIndex=N,I}function E(N,I,ft,K,L,nt,ht,B,$){N.save(),N.translate(I,ft),N.rotate(nt),N.scale(K,L),N.arc(0,0,1,ht,B,$),N.restore()}function w(N){var I=N.angle*(Math.PI/180),ft=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-I+(.5*ft-Math.random()*ft),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function ot(N,I){I.x+=Math.cos(I.angle2D)*I.velocity+I.drift,I.y+=Math.sin(I.angle2D)*I.velocity+I.gravity,I.velocity*=I.decay,I.flat?(I.wobble=0,I.wobbleX=I.x+10*I.scalar,I.wobbleY=I.y+10*I.scalar,I.tiltSin=0,I.tiltCos=0,I.random=1):(I.wobble+=I.wobbleSpeed,I.wobbleX=I.x+10*I.scalar*Math.cos(I.wobble),I.wobbleY=I.y+10*I.scalar*Math.sin(I.wobble),I.tiltAngle+=.1,I.tiltSin=Math.sin(I.tiltAngle),I.tiltCos=Math.cos(I.tiltAngle),I.random=Math.random()+2);var ft=I.tick++/I.totalTicks,K=I.x+I.random*I.tiltCos,L=I.y+I.random*I.tiltSin,nt=I.wobbleX+I.random*I.tiltCos,ht=I.wobbleY+I.random*I.tiltSin;if(N.fillStyle="rgba("+I.color.r+", "+I.color.g+", "+I.color.b+", "+(1-ft)+")",N.beginPath(),o&&I.shape.type==="path"&&typeof I.shape.path=="string"&&Array.isArray(I.shape.matrix))N.fill(z(I.shape.path,I.shape.matrix,I.x,I.y,Math.abs(nt-K)*.1,Math.abs(ht-L)*.1,Math.PI/10*I.wobble));else if(I.shape.type==="bitmap"){var B=Math.PI/10*I.wobble,$=Math.abs(nt-K)*.1,Y=Math.abs(ht-L)*.1,ut=I.shape.bitmap.width*I.scalar,y=I.shape.bitmap.height*I.scalar,C=new DOMMatrix([Math.cos(B)*$,Math.sin(B)*$,-Math.sin(B)*Y,Math.cos(B)*Y,I.x,I.y]);C.multiplySelf(new DOMMatrix(I.shape.matrix));var V=N.createPattern(u.transform(I.shape.bitmap),"no-repeat");V.setTransform(C),N.globalAlpha=1-ft,N.fillStyle=V,N.fillRect(I.x-ut/2,I.y-y/2,ut,y),N.globalAlpha=1}else if(I.shape==="circle")N.ellipse?N.ellipse(I.x,I.y,Math.abs(nt-K)*I.ovalScalar,Math.abs(ht-L)*I.ovalScalar,Math.PI/10*I.wobble,0,2*Math.PI):E(N,I.x,I.y,Math.abs(nt-K)*I.ovalScalar,Math.abs(ht-L)*I.ovalScalar,Math.PI/10*I.wobble,0,2*Math.PI);else if(I.shape==="star")for(var b=Math.PI/2*3,it=4*I.scalar,et=8*I.scalar,lt=I.x,ct=I.y,Mt=5,Q=Math.PI/Mt;Mt--;)lt=I.x+Math.cos(b)*et,ct=I.y+Math.sin(b)*et,N.lineTo(lt,ct),b+=Q,lt=I.x+Math.cos(b)*it,ct=I.y+Math.sin(b)*it,N.lineTo(lt,ct),b+=Q;else N.moveTo(Math.floor(I.x),Math.floor(I.y)),N.lineTo(Math.floor(I.wobbleX),Math.floor(L)),N.lineTo(Math.floor(nt),Math.floor(ht)),N.lineTo(Math.floor(K),Math.floor(I.wobbleY));return N.closePath(),N.fill(),I.tick<I.totalTicks}function rt(N,I,ft,K,L){var nt=I.slice(),ht=N.getContext("2d"),B,$,Y=c(function(ut){function y(){B=$=null,ht.clearRect(0,0,K.width,K.height),u.clear(),L(),ut()}function C(){i&&!(K.width===s.width&&K.height===s.height)&&(K.width=N.width=s.width,K.height=N.height=s.height),!K.width&&!K.height&&(ft(N),K.width=N.width,K.height=N.height),ht.clearRect(0,0,K.width,K.height),nt=nt.filter(function(V){return ot(ht,V)}),nt.length?B=d.frame(C):y()}B=d.frame(C),$=y});return{addFettis:function(ut){return nt=nt.concat(ut),Y},canvas:N,promise:Y,reset:function(){B&&d.cancel(B),$&&$()}}}function at(N,I){var ft=!N,K=!!g(I||{},"resize"),L=!1,nt=g(I,"disableForReducedMotion",Boolean),ht=r&&!!g(I||{},"useWorker"),B=ht?f():null,$=ft?O:U,Y=N&&B?!!N.__confetti_initialized:!1,ut=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,y;function C(b,it,et){for(var lt=g(b,"particleCount",h),ct=g(b,"angle",Number),Mt=g(b,"spread",Number),Q=g(b,"startVelocity",Number),T=g(b,"decay",Number),x=g(b,"gravity",Number),k=g(b,"drift",Number),st=g(b,"colors",S),mt=g(b,"ticks",Number),H=g(b,"shapes"),R=g(b,"scalar"),j=!!g(b,"flat"),vt=F(b),bt=lt,Et=[],Tt=N.width*vt.x,Bt=N.height*vt.y;bt--;)Et.push(w({x:Tt,y:Bt,angle:ct,spread:Mt,startVelocity:Q,color:st[bt%st.length],shape:H[D(0,H.length)],ticks:mt,decay:T,gravity:x,drift:k,scalar:R,flat:j}));return y?y.addFettis(Et):(y=rt(N,Et,$,it,et),y.promise)}function V(b){var it=nt||g(b,"disableForReducedMotion",Boolean),et=g(b,"zIndex",Number);if(it&&ut)return c(function(Q){Q()});ft&&y?N=y.canvas:ft&&!N&&(N=M(et),document.body.appendChild(N)),K&&!Y&&$(N);var lt={width:N.width,height:N.height};B&&!Y&&B.init(N),Y=!0,B&&(N.__confetti_initialized=!0);function ct(){if(B){var Q={getBoundingClientRect:function(){if(!ft)return N.getBoundingClientRect()}};$(Q),B.postMessage({resize:{width:Q.width,height:Q.height}});return}lt.width=lt.height=null}function Mt(){y=null,K&&(L=!1,t.removeEventListener("resize",ct)),ft&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Y=!1)}return K&&!L&&(L=!0,t.addEventListener("resize",ct,!1)),B?B.fire(b,lt,Mt):C(b,lt,Mt)}return V.reset=function(){B&&B.reset(),y&&y.reset()},V}var xt;function W(){return xt||(xt=at(null,{useWorker:!0,resize:!0})),xt}function z(N,I,ft,K,L,nt,ht){var B=new Path2D(N),$=new Path2D;$.addPath(B,new DOMMatrix(I));var Y=new Path2D;return Y.addPath($,new DOMMatrix([Math.cos(ht)*L,Math.sin(ht)*L,-Math.sin(ht)*nt,Math.cos(ht)*nt,ft,K])),Y}function X(N){if(!o)throw new Error("path confetti are not supported in this browser");var I,ft;typeof N=="string"?I=N:(I=N.path,ft=N.matrix);var K=new Path2D(I),L=document.createElement("canvas"),nt=L.getContext("2d");if(!ft){for(var ht=1e3,B=ht,$=ht,Y=0,ut=0,y,C,V=0;V<ht;V+=2)for(var b=0;b<ht;b+=2)nt.isPointInPath(K,V,b,"nonzero")&&(B=Math.min(B,V),$=Math.min($,b),Y=Math.max(Y,V),ut=Math.max(ut,b));y=Y-B,C=ut-$;var it=10,et=Math.min(it/y,it/C);ft=[et,0,0,et,-Math.round(y/2+B)*et,-Math.round(C/2+$)*et]}return{type:"path",path:I,matrix:ft}}function dt(N){var I,ft=1,K="#000000",L='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?I=N:(I=N.text,ft="scalar"in N?N.scalar:ft,L="fontFamily"in N?N.fontFamily:L,K="color"in N?N.color:K);var nt=10*ft,ht=""+nt+"px "+L,B=new OffscreenCanvas(nt,nt),$=B.getContext("2d");$.font=ht;var Y=$.measureText(I),ut=Math.ceil(Y.actualBoundingBoxRight+Y.actualBoundingBoxLeft),y=Math.ceil(Y.actualBoundingBoxAscent+Y.actualBoundingBoxDescent),C=2,V=Y.actualBoundingBoxLeft+C,b=Y.actualBoundingBoxAscent+C;ut+=C+C,y+=C+C,B=new OffscreenCanvas(ut,y),$=B.getContext("2d"),$.font=ht,$.fillStyle=K,$.fillText(I,V,b);var it=1/ft;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[it,0,0,it,-ut*it/2,-y*it/2]}}e.exports=function(){return W().apply(this,arguments)},e.exports.reset=function(){W().reset()},e.exports.create=at,e.exports.shapeFromPath=X,e.exports.shapeFromText=dt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),fu,!1);const Nv=fu.exports;fu.exports.create;const Ov={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden","user-select":"none"}},Fv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px",gap:"8px"}},Bv={style:{display:"flex","align-items":"center",gap:"12px","font-size":"11px","font-weight":"bold","white-space":"nowrap"}},zv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 电源输入电压"},Vv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 芯片输出电压"},kv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 电源输入电流"},Hv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 芯片负载电流"},Gv={style:{height:"30px","background-color":"#15191e","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-size":"11px",gap:"12px","overflow-x":"auto"}},Wv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},$v={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Xv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #1e3a8a"}},qv=["disabled"],jv=["disabled"],Yv={style:{display:"flex","align-items":"center",gap:"2px"}},Kv=["onClick","title"],Zv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Jv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Qv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #065f46"}},t0=["disabled"],e0=["disabled"],n0={style:{display:"flex","align-items":"center",gap:"2px"}},i0=["onClick","title"],s0={style:{"font-weight":"bold","border-bottom":"1px solid #2d3748","padding-bottom":"2px","margin-bottom":"3px",display:"flex","justify-content":"space-between",gap:"10px"}},r0={style:{color:"#94a3b8"}},o0={style:{color:"#ecc94b"}},a0={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"2px 10px"}},mo=300,l0=Ai({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=Yt(null),s=Yt(null),r=Mn({vin:!0,vout:!0,iin:!0,iout:!0}),o=Mn({auto:!0,min:0,max:20}),a=Mn({auto:!0,min:0,max:5});function l(O){o.auto=!1,o.min=0,o.max=O}function c(O){a.auto=!1,a.min=0,a.max=O}const u=[];let d=0;const f=Yt(null),p=Yt(0),v=Yt(0);function _(O){u.push(O),u.length>mo&&u.shift()}_s(()=>e.latestSample,O=>{O&&_(O)});function g(){const O=s.value;if(!O||!i.value)return;const U=i.value.clientWidth,M=i.value.clientHeight;if(U===0||M===0)return;const E=window.devicePixelRatio||1;O.width=Math.floor(U*E),O.height=Math.floor(M*E);const w=O.getContext("2d");if(!w)return;w.scale(E,E),w.fillStyle="#121519",w.fillRect(0,0,U,M);const ot=52,rt=52,at=22,xt=22,W=U-ot-rt,z=M-at-xt;if(W<=10||z<=10)return;let X=o.min,dt=o.max;if(o.auto){let $=10,Y=0;if(u.length>0){let ut=0,y=0;if(u.forEach(C=>{r.vin&&(C.vin>ut&&(ut=C.vin),C.vin<y&&(y=C.vin)),r.vout&&(C.vout>ut&&(ut=C.vout),C.vout<y&&(y=C.vout))}),ut>0){const C=ut*1.15;C<=15?$=Math.max(5,Math.ceil(C)):C<=30?$=Math.ceil(C/5)*5:C<=100?$=Math.ceil(C/10)*10:$=Math.ceil(C/20)*20}}X=Y,dt=$,o.min=X,o.max=dt}dt<=X&&(dt=X+1);const N=dt-X;let I=a.min,ft=a.max;if(a.auto){let $=3,Y=0;if(u.length>0){let ut=0,y=0;if(u.forEach(C=>{r.iin&&(C.iin>ut&&(ut=C.iin),C.iin<y&&(y=C.iin)),r.iout&&(C.iout>ut&&(ut=C.iout),C.iout<y&&(y=C.iout))}),ut>0){const C=ut*1.2;C<=2?$=Math.max(.5,Math.ceil(C*10)/10):C<=10?$=Math.ceil(C):$=Math.ceil(C/2)*2}}I=Y,ft=$,a.min=I,a.max=ft}ft<=I&&(ft=I+.1);const K=ft-I,L=5,nt=8;w.strokeStyle="#1e293b",w.lineWidth=1,w.setLineDash([3,3]);for(let $=0;$<=L;$++){const Y=at+z/L*$;w.beginPath(),w.moveTo(ot,Y),w.lineTo(ot+W,Y),w.stroke()}for(let $=0;$<=nt;$++){const Y=ot+W/nt*$;w.beginPath(),w.moveTo(Y,at),w.lineTo(Y,at+z),w.stroke()}w.setLineDash([]),w.strokeStyle="#334155",w.lineWidth=1,w.strokeRect(ot,at,W,z),w.font='10px "Consolas", monospace',w.textAlign="right",w.textBaseline="middle",w.fillStyle="#38bdf8";for(let $=0;$<=L;$++){const Y=at+z/L*$,ut=dt-N/L*$,y=N>=10?`${ut.toFixed(1)}V`:`${ut.toFixed(2)}V`;w.fillText(y,ot-6,Y),w.strokeStyle="#0284c7",w.beginPath(),w.moveTo(ot-4,Y),w.lineTo(ot,Y),w.stroke()}w.textAlign="left",w.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',w.fillStyle="#00d2ff",w.fillText("⚡ 电压 (V)",ot-34,at-8),w.font='10px "Consolas", monospace',w.textAlign="left",w.textBaseline="middle",w.fillStyle="#34d399";for(let $=0;$<=L;$++){const Y=at+z/L*$,ut=ft-K/L*$,y=K>=5?`${ut.toFixed(2)}A`:`${ut.toFixed(3)}A`;w.fillText(y,ot+W+6,Y),w.strokeStyle="#059669",w.beginPath(),w.moveTo(ot+W,Y),w.lineTo(ot+W+4,Y),w.stroke()}if(w.textAlign="right",w.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',w.fillStyle="#06d6a0",w.fillText("🔋 电流 (A)",ot+W+34,at-8),w.font='10px "Consolas", monospace',w.fillStyle="#64748b",w.textAlign="center",w.textBaseline="top",u.length>1){const $=u[0].t,Y=u[u.length-1].t,ut=Math.max(.1,(Y-$)/1e3);for(let y=0;y<=nt;y+=2){const C=ot+W/nt*y,V=ut*(1-y/nt),b=y===nt?"0.0s":`-${V.toFixed(1)}s`;w.fillText(b,C,at+z+5)}}else w.fillText("时间轴 (Time)",ot+W/2,at+z+5);if(u.length<2){w.fillStyle="#475569",w.font='12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',w.textAlign="center",w.textBaseline="middle",w.fillText("⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...",ot+W/2,at+z/2);return}w.save(),w.beginPath(),w.rect(ot,at,W,z),w.clip();function ht($,Y){if(!w)return;w.strokeStyle=Y,w.lineWidth=1.8,w.beginPath();const ut=u.length;for(let y=0;y<ut;y++){const C=ot+y/(mo-1)*W,V=u[y][$],b=at+z-(V-X)/N*z;y===0?w.moveTo(C,b):w.lineTo(C,b)}w.stroke()}function B($,Y){if(!w)return;w.strokeStyle=Y,w.lineWidth=1.8,w.beginPath();const ut=u.length;for(let y=0;y<ut;y++){const C=ot+y/(mo-1)*W,V=u[y][$],b=at+z-(V-I)/K*z;y===0?w.moveTo(C,b):w.lineTo(C,b)}w.stroke()}if(r.vin&&ht("vin","#00d2ff"),r.vout&&ht("vout","#ffd166"),r.iin&&B("iin","#06d6a0"),r.iout&&B("iout","#ef476f"),f.value&&p.value>=ot&&p.value<=ot+W){w.strokeStyle="#94a3b8",w.lineWidth=1,w.setLineDash([2,2]),w.beginPath(),w.moveTo(p.value,at),w.lineTo(p.value,at+z),w.stroke(),w.setLineDash([]);const $=f.value;if(r.vin){const Y=at+z-($.vin-X)/N*z;w.fillStyle="#00d2ff",w.beginPath(),w.arc(p.value,Y,3.5,0,Math.PI*2),w.fill()}if(r.vout){const Y=at+z-($.vout-X)/N*z;w.fillStyle="#ffd166",w.beginPath(),w.arc(p.value,Y,3.5,0,Math.PI*2),w.fill()}if(r.iin){const Y=at+z-($.iin-I)/K*z;w.fillStyle="#06d6a0",w.beginPath(),w.arc(p.value,Y,3.5,0,Math.PI*2),w.fill()}if(r.iout){const Y=at+z-($.iout-I)/K*z;w.fillStyle="#ef476f",w.beginPath(),w.arc(p.value,Y,3.5,0,Math.PI*2),w.fill()}}w.restore()}function h(O){if(!i.value)return;const U=i.value.getBoundingClientRect(),M=O.clientX-U.left,E=O.clientY-U.top,w=52,rt=U.width-w-52;if(M>=w&&M<=w+rt&&u.length>1){const at=(M-w)/rt,xt=Math.min(u.length-1,Math.max(0,Math.round(at*(mo-1)))),W=u[xt];if(W){const z=u[0].t,dt=(u[u.length-1].t-z)/1e3,N=(W.t-z)/1e3,I=dt-N;f.value={idx:xt+1,relTime:I>.05?`-${I.toFixed(2)}s`:"最新点",vin:W.vin,vout:W.vout,iin:W.iin,iout:W.iout},p.value=M,v.value=E;return}}f.value=null}function D(){f.value=null}function P(O){if(!i.value)return;const U=i.value.getBoundingClientRect(),M=O.clientX-U.left,E=U.width,w=52,ot=52,rt=O.deltaY<0?-1:1;if(M<=w+35){O.preventDefault(),o.auto=!1;const at=Math.max(1,o.max-o.min),xt=at>20?5:at>5?2:1;o.max=Math.max(o.min+1,Math.round((o.max+rt*xt)*10)/10)}else if(M>=E-ot-35){O.preventDefault(),a.auto=!1;const at=Math.max(.2,a.max-a.min),xt=at>5?1:at>1?.5:.2;a.max=Math.max(a.min+.2,Math.round((a.max+rt*xt)*10)/10)}}function S(O){if(!i.value)return;const U=i.value.getBoundingClientRect(),M=O.clientX-U.left,E=U.width;M<=52+35?o.auto=!0:M>=E-52-35&&(a.auto=!0)}function q(){u.length=0,f.value=null}function F(){g(),d=requestAnimationFrame(F)}return ur(()=>{F()}),dr(()=>{cancelAnimationFrame(d)}),t({clear:q}),(O,U)=>(Nt(),Ot("div",Ov,[m("div",Fv,[U[18]||(U[18]=m("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[m("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Dt(" 实时参数时域波形 (双纵坐标轴) ")],-1)),m("div",Bv,[m("label",zv,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[0]||(U[0]=M=>r.vin=M)},null,512),[[zi,r.vin]]),U[14]||(U[14]=Dt(" Vin (电源电压) ",-1))]),m("label",Vv,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[1]||(U[1]=M=>r.vout=M)},null,512),[[zi,r.vout]]),U[15]||(U[15]=Dt(" Vout (负载电压) ",-1))]),m("label",kv,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[2]||(U[2]=M=>r.iin=M)},null,512),[[zi,r.iin]]),U[16]||(U[16]=Dt(" Iin (电源电流) ",-1))]),m("label",Hv,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[3]||(U[3]=M=>r.iout=M)},null,512),[[zi,r.iout]]),U[17]||(U[17]=Dt(" Iout (负载电流) ",-1))])]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"10.5px","background-color":"#2d3748",color:"#a0aec0",border:"1px solid #4a5568"},onClick:q,title:"清空当前波形缓存"}," 清空波形 ")]),m("div",Gv,[m("div",Wv,[U[24]||(U[24]=m("span",{style:{color:"#00d2ff","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," ⚡ 左纵轴 (电压): ",-1)),m("label",$v,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[4]||(U[4]=M=>o.auto=M)},null,512),[[zi,o.auto]]),U[19]||(U[19]=m("span",null,"自适应",-1))]),m("div",Xv,[U[20]||(U[20]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),re(m("input",{type:"number","onUpdate:modelValue":U[5]||(U[5]=M=>o.min=M),disabled:o.auto,onChange:U[6]||(U[6]=M=>o.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围下限",step:"1"},null,40,qv),[[Be,o.min,void 0,{number:!0}]]),U[21]||(U[21]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),re(m("input",{type:"number","onUpdate:modelValue":U[7]||(U[7]=M=>o.max=M),disabled:o.auto,onChange:U[8]||(U[8]=M=>o.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围上限",step:"1"},null,40,jv),[[Be,o.max,void 0,{number:!0}]]),U[22]||(U[22]=m("span",{style:{color:"#38bdf8","font-weight":"bold","font-size":"10.5px"}},"V",-1))]),m("div",Yv,[U[23]||(U[23]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Nt(),Ot(Le,null,yi([15,30,60],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>l(M),title:`锁定 0 ~ ${M}V 范围`},yt(M)+"V ",9,Kv)),64))])]),m("div",Zv,[U[30]||(U[30]=m("span",{style:{color:"#06d6a0","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," 🔋 右纵轴 (电流): ",-1)),m("label",Jv,[re(m("input",{type:"checkbox","onUpdate:modelValue":U[9]||(U[9]=M=>a.auto=M)},null,512),[[zi,a.auto]]),U[25]||(U[25]=m("span",null,"自适应",-1))]),m("div",Qv,[U[26]||(U[26]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),re(m("input",{type:"number","onUpdate:modelValue":U[10]||(U[10]=M=>a.min=M),disabled:a.auto,onChange:U[11]||(U[11]=M=>a.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围下限",step:"0.5"},null,40,t0),[[Be,a.min,void 0,{number:!0}]]),U[27]||(U[27]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),re(m("input",{type:"number","onUpdate:modelValue":U[12]||(U[12]=M=>a.max=M),disabled:a.auto,onChange:U[13]||(U[13]=M=>a.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围上限",step:"0.5"},null,40,e0),[[Be,a.max,void 0,{number:!0}]]),U[28]||(U[28]=m("span",{style:{color:"#34d399","font-weight":"bold","font-size":"10.5px"}},"A",-1))]),m("div",n0,[U[29]||(U[29]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Nt(),Ot(Le,null,yi([2,5,10],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>c(M),title:`锁定 0 ~ ${M}A 范围`},yt(M)+"A ",9,i0)),64))])])]),m("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519",cursor:"crosshair",overflow:"hidden"},onMousemove:h,onMouseleave:D,onWheel:P,onDblclick:S},[m("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512),f.value?(Nt(),Ot("div",{key:0,style:pe([{left:`${p.value}px`,top:`${v.value}px`},{position:"absolute",transform:"translate(-50%, -100%)","margin-top":"-10px","pointer-events":"none","z-index":"20","background-color":"rgba(22, 27, 34, 0.95)",border:"1px solid #38bdf8","border-radius":"4px",padding:"5px 8px","font-family":"'Consolas', monospace","font-size":"10.5px",color:"#e2e8f0","box-shadow":"0 4px 12px rgba(0,0,0,0.7)","white-space":"nowrap"}])},[m("div",s0,[m("span",r0,"采样点 #"+yt(f.value.idx),1),m("span",o0,yt(f.value.relTime),1)]),m("div",a0,[m("div",null,[U[31]||(U[31]=m("span",{style:{color:"#00d2ff","font-weight":"bold"}},"Vin:",-1)),Dt(" "+yt(f.value.vin.toFixed(3))+"V",1)]),m("div",null,[U[32]||(U[32]=m("span",{style:{color:"#06d6a0","font-weight":"bold"}},"Iin:",-1)),Dt(" "+yt(f.value.iin.toFixed(3))+"A",1)]),m("div",null,[U[33]||(U[33]=m("span",{style:{color:"#ffd166","font-weight":"bold"}},"Vout:",-1)),Dt(" "+yt(f.value.vout.toFixed(3))+"V",1)]),m("div",null,[U[34]||(U[34]=m("span",{style:{color:"#ef476f","font-weight":"bold"}},"Iout:",-1)),Dt(" "+yt(f.value.iout.toFixed(3))+"A",1)])])],4)):Te("",!0)],544)]))}}),c0=cu(l0,[["__scopeId","data-v-50507eef"]]),u0={class:"modal-card",style:{"max-width":"680px"}},d0={class:"modal-header"},f0={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},h0={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},p0={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},m0={style:{display:"flex","align-items":"center",gap:"8px"}},g0={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},_0={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},v0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},x0={style:{color:"#ecc94b"}},y0={style:{color:"#63b3ed"}},b0={style:{color:"#e2e8f0"}},M0={style:{color:"#48bb78"}},S0={style:{display:"flex","align-items":"center",gap:"6px"}},E0=["onClick"],w0=["onClick"],T0=["onClick"],A0={class:"modal-footer"},C0=Ai({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Nt(),Ot("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=ls(i=>t.$emit("close"),["self"]))},[m("div",u0,[m("div",d0,[e[5]||(e[5]=m("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[m("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("circle",{cx:"12",cy:"12",r:"10"}),m("polyline",{points:"12 6 12 12 16 14"})]),Dt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),m("div",f0,[n.records.length===0?(Nt(),Ot("div",h0," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Te("",!0),(Nt(!0),Ot(Le,null,yi(n.records,i=>{var s,r;return Nt(),Ot("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[m("div",p0,[m("div",m0,[m("span",g0,yt(i.title),1),m("span",_0,yt(new Date(i.createdAt).toLocaleString()),1)]),m("div",v0,[m("span",null,[e[6]||(e[6]=Dt("电压: ",-1)),m("b",x0,yt(i.config.voltageMin)+"V ~ "+yt(i.config.voltageMax)+"V",1)]),m("span",null,[e[7]||(e[7]=Dt("负载: ",-1)),m("b",y0,yt(i.config.loadMin)+" ~ "+yt(i.config.loadMax)+" ("+yt(i.config.loadMode)+")",1)]),m("span",null,[e[8]||(e[8]=Dt("点数: ",-1)),m("b",b0,yt(i.points.length),1)]),m("span",null,[e[9]||(e[9]=Dt("最高效率: ",-1)),m("b",M0,yt(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),m("div",S0,[m("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 进入数据查看 ",-1)])],8,E0),m("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,w0),m("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"3 6 5 6 21 6"}),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,T0)])],32)}),128))]),m("div",A0,[m("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Te("",!0)}}),R0={class:"modal-card",style:{"max-width":"520px"}},P0={class:"modal-header"},L0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},D0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},I0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},U0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},N0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},O0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},F0={style:{display:"flex","align-items":"center",gap:"6px"}},B0=["disabled"],z0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},V0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},k0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},H0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},G0={style:{display:"flex","align-items":"center",gap:"6px"}},W0=["disabled"],$0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},X0={class:"modal-footer"},q0=Ai({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=Yt(9600),e=Yt(9600);return(i,s)=>n.isOpen?(Nt(),Ot("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=ls(r=>i.$emit("close"),["self"]))},[m("div",R0,[m("div",P0,[s[10]||(s[10]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),m("div",L0,[m("div",D0,[s[11]||(s[11]=m("div",null,[m("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[m("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Dt(" 内置仿真演示驱动 (Virtual Simulation) ")]),m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),m("div",I0,[m("div",U0,[m("span",N0,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Dt(" 直流电源 (RIGOL DP700) ",-1))]),m("span",O0,yt(n.psuPortName),1)]),m("div",F0,[re(m("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[m("option",{value:9600},"9600 bps (标准)",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1),m("option",{value:115200},"115200 bps",-1)])],8,B0),[[ha,t.value,void 0,{number:!0}]]),n.psuConnected?(Nt(),Ot("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Nt(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),m("div",z0,[m("div",V0,[m("span",k0,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Dt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),m("span",H0,yt(n.loadPortName),1)]),m("div",G0,[re(m("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[m("option",{value:9600},"9600 bps (标准)",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1),m("option",{value:115200},"115200 bps",-1)])],8,W0),[[ha,e.value,void 0,{number:!0}]]),n.loadConnected?(Nt(),Ot("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Nt(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Te("",!0):(Nt(),Ot("div",$0,[...s[16]||(s[16]=[Dt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),m("b",null,"【启用仿真】",-1),Dt("无障碍测试。 ",-1)])]))]),m("div",X0,[m("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Te("",!0)}});class j0{constructor(){Xt(this,"connected",!0);Xt(this,"outputOn",!1);Xt(this,"targetVoltage",5);Xt(this,"currentVoltage",0);Xt(this,"lastVoltage",0);Xt(this,"voltageChangeTime",0);Xt(this,"currentLimit",3);Xt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}getTargetVoltage(){return this.targetVoltage}getCurrentLimit(){return this.currentLimit}}class Y0{constructor(){Xt(this,"connected",!0);Xt(this,"inputOn",!1);Xt(this,"isShort",!1);Xt(this,"mode","CC");Xt(this,"targetCurrent",1);Xt(this,"currentCurrent",0);Xt(this,"lastCurrent",0);Xt(this,"targetPower",10);Xt(this,"currentPower",0);Xt(this,"lastPower",0);Xt(this,"targetVoltage",5);Xt(this,"targetResistance",5);Xt(this,"loadChangeTime",0);Xt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}getMode(){return this.mode}setMode(t){this.mode=t,this.loadChangeTime=performance.now()}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}setVoltage(t){this.targetVoltage=Math.max(.1,t),this.loadChangeTime=performance.now()}setResistance(t){this.targetResistance=Math.max(.1,t),this.loadChangeTime=performance.now()}getTargetCurrent(){return this.targetCurrent}getTargetPower(){return this.targetPower}getTargetVoltage(){return this.targetVoltage}getTargetResistance(){return this.targetResistance}setShort(t){this.isShort=t}isShortOn(){return this.isShort}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if(this.isShort){const l=.04+(Math.random()-.5)*.01,c=10+(Math.random()-.5)*.02;return{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(c*1e3)/1e3),pout:Math.max(0,Math.round(l*c*1e3)/1e3)}}const e=t??10;if(e<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CW"){this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CV"){const l=this.targetVoltage+(Math.random()-.5)*.003;return o=Math.max(.1,Math.min(15,(e-l)*1.5))+(Math.random()-.5)*.005,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{const l=r+(Math.random()-.5)*.003;return o=Math.max(.01,l/this.targetResistance)+(Math.random()-.5)*.002,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class hn{static apply(t,e){return`:APPLy CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setVoltageAndLimit(t,e){return hn.apply(t,e)}static getApply(){return`:APPLy? CH1
`}static setOutput(t){return`:OUTPut CH1,${t?"ON":"OFF"}
`}static getOutput(){return`:OUTPut? CH1
`}static measureAll(){return`:MEASure:ALL? CH1
`}}class we{static setMode(t){let e="CURR";return t==="CC"?e="CURR":t==="CV"?e="VOLT":t==="CW"?e="POW":t==="CR"&&(e="RES"),`:MODE ${e}
`}static getMode(){return`:MODE?
`}static setCurrent(t){return`:CURR ${t.toFixed(3)}
`}static getCurrent(){return`:CURR?
`}static setPower(t){return`:POW ${t.toFixed(3)}
`}static getPower(){return`:POW?
`}static setVoltage(t){return`:VOLT ${t.toFixed(3)}
`}static getVoltage(){return`:VOLT?
`}static setResistance(t){return`:RES ${t.toFixed(3)}
`}static getResistance(){return`:RES?
`}static setInput(t){return`:INP ${t?"1":"0"}
`}static getInput(){return`:INP?
`}static setShort(t){return`:INP:SHOR ${t?"1":"0"}
`}static getShort(){return`:INP:SHOR?
`}static clearProtection(){return`:INP 0
`}static measureVolt(){return`:MEAS:VOLT?
`}static measureCurr(){return`:MEAS:CURR?
`}static measurePow(){return`:MEAS:POW?
`}static measureRes(){return`:MEAS:RES?
`}}class Ad{constructor(t){Xt(this,"type");Xt(this,"isVirtual",!0);Xt(this,"port",null);Xt(this,"reader",null);Xt(this,"writer",null);Xt(this,"encoder",null);Xt(this,"decoder",null);Xt(this,"readBuffer","");Xt(this,"isDisconnecting",!1);Xt(this,"onLostCallback",null);Xt(this,"disconnectListener",null);Xt(this,"commandQueue",Promise.resolve());Xt(this,"virtualPsu",new j0);Xt(this,"virtualLoad",new Y0);Xt(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}handleDeviceUnresponsive(t){this.isDisconnecting||(console.warn(`[WebSerial 仪器未响应] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");return new Promise((e,i)=>{this.commandQueue=this.commandQueue.then(async()=>{try{const s=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();if(!s){e();return}const r=s+`
`;await this.writer.write(r);const a=this.type==="PSU"&&(s.toUpperCase().includes(":APPL")||s.toUpperCase().includes(":OUTP"))?500:15;await new Promise(l=>setTimeout(l,a)),e()}catch(s){this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(s==null?void 0:s.message)||s}`),i(s)}})})}}async query(t,e=350,i=1){if(this.isVirtual)return this.handleVirtualQuery(t);if(!this.state.connected||!this.writer)throw new Error(`[${this.type}] 串口未连接，无法执行查询指令`);return new Promise((s,r)=>{this.commandQueue=this.commandQueue.then(async()=>{let o=null;for(let a=0;a<=i;a++)try{const l=await this.executePhysicalQuery(t,e);s(l);return}catch(l){o=l,a<i&&await new Promise(c=>setTimeout(c,20))}r(o)})})}async executePhysicalQuery(t,e){if(!this.writer||!this.state.connected)throw new Error("串口未连接或已丢失写入句柄");const i=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();if(!i)throw new Error("查询指令为空");const s=i+`
`;this.readBuffer="";try{await this.writer.write(s)}catch(l){throw this.handleDeviceLost(`向串口发送指令失败: ${(l==null?void 0:l.message)||l}`),l}const r=performance.now(),o=i.toUpperCase();for(;performance.now()-r<e;){const l=this.readBuffer.search(/[\r\n]/);if(l!==-1){const c=this.readBuffer.slice(0,l).trim();let u=l;for(;u<this.readBuffer.length&&(this.readBuffer[u]==="\r"||this.readBuffer[u]===`
`);)u++;if(this.readBuffer=this.readBuffer.slice(u),!c)continue;const d=c.toUpperCase();if(d===o||d===o.replace(/^:/,""))continue;return await new Promise(f=>setTimeout(f,15)),c}await new Promise(c=>setTimeout(c,8))}const a=this.readBuffer.trim();if(this.readBuffer="",a)return a;throw new Error(`[${this.type}] 设备未响应指令 (超时 ${e}ms): ${i}`)}handleVirtualQuery(t){const e=t.trim().toUpperCase();if(this.type==="PSU"){if(e.includes("*IDN?"))return"RIGOL TECHNOLOGIES,DP711,DP7A234500001,00.01.02";if(e.includes(":MEAS:ALL")||e.includes(":MEASURE:ALL")||e.includes(":MEAS")){const i=this.virtualPsu.measure();return`${i.vin.toFixed(3)},${i.iin.toFixed(3)},${i.pin.toFixed(3)}`}return e.includes(":APPL?")?`${this.virtualPsu.getTargetVoltage().toFixed(3)},${this.virtualPsu.getCurrentLimit().toFixed(3)}`:e.includes(":OUTP?")||e.includes(":OUTPUT?")?this.virtualPsu.isOutputOn()?"ON":"OFF":e.includes(":VOLT?")||e.includes(":VOLTAGE?")?this.virtualPsu.getTargetVoltage().toFixed(3):e.includes(":CURR?")||e.includes(":CURRENT?")?this.virtualPsu.getCurrentLimit().toFixed(3):"OK"}else{if(e.includes("*IDN?"))return"UNI-T,UTL8511,UTL8500A10098,V1.04";if(e.includes(":MEAS:VOLT?"))return this.virtualLoad.measure().vout.toFixed(3);if(e.includes(":MEAS:CURR?"))return this.virtualLoad.measure().iout.toFixed(3);if(e.includes(":MEAS:POW?"))return this.virtualLoad.measure().pout.toFixed(3);if(e.includes(":MEAS:RES?")){const i=this.virtualLoad.measure();return(i.iout>.001?i.vout/i.iout:9999).toFixed(3)}if(e.includes(":INP:SHOR?"))return this.virtualLoad.isShortOn()?"1":"0";if(e.includes(":INP?")||e.includes(":INPUT?"))return this.virtualLoad.isInputOn()?"1":"0";if(e.includes(":MODE?")||e.includes(":FUNC?")){const i=this.virtualLoad.getMode();return i==="CC"?"CURR":i==="CV"?"VOLT":i==="CW"?"POW":"RES"}return e.includes(":CURR?")?this.virtualLoad.getTargetCurrent().toFixed(3):e.includes(":VOLT?")?this.virtualLoad.getTargetVoltage().toFixed(3):e.includes(":POW?")?this.virtualLoad.getTargetPower().toFixed(3):e.includes(":RES?")?this.virtualLoad.getTargetResistance().toFixed(3):"OK"}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const ds=class ds{constructor(){Xt(this,"psu",new Ad("PSU"));Xt(this,"load",new Ad("LOAD"));Xt(this,"onDeviceLostListener",null);Xt(this,"cachedTelemetry",{vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0});Xt(this,"lastPsuStatus",{outputOn:!1,setVoltage:0,setCurrentLimit:0});Xt(this,"lastLoadStatus",{inputOn:!1,mode:"CC",targetVal:0,isShort:!1});Xt(this,"isTesting",!1);Xt(this,"psuConsecutiveFailures",0);Xt(this,"loadConsecutiveFailures",0);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}resetFailureCounters(){this.psuConsecutiveFailures=0,this.loadConsecutiveFailures=0}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason};const e=this.load.checkAlive();return e.alive?{ok:!0}:(this.load.handleDeviceLost(e.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:e.reason})}static getInstance(){return ds.instance||(ds.instance=new ds),ds.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.resetFailureCounters(),this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){if(this.psu.isVirtual)this.psu.virtualPsu.setOutput(t),t&&(this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i));else if(t){const s=Math.abs(this.lastPsuStatus.setVoltage-e)>1e-4,r=Math.abs(this.lastPsuStatus.setCurrentLimit-i)>1e-4;(s||r||!this.lastPsuStatus.outputOn)&&await this.psu.write(hn.setVoltageAndLimit(e,i)),this.lastPsuStatus.outputOn||await this.psu.write(hn.setOutput(!0))}else await this.psu.write(hn.setOutput(!1));this.lastPsuStatus.outputOn=t,t&&(this.lastPsuStatus.setVoltage=e,this.lastPsuStatus.setCurrentLimit=i)}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):e==="CW"?this.load.virtualLoad.setPower(i):e==="CV"?this.load.virtualLoad.setVoltage(i):e==="CR"&&this.load.virtualLoad.setResistance(i)):(await this.load.write(we.setMode(e)),e==="CC"?await this.load.write(we.setCurrent(i)):e==="CW"?await this.load.write(we.setPower(i)):e==="CV"?await this.load.write(we.setVoltage(i)):e==="CR"&&await this.load.write(we.setResistance(i)),await this.load.write(we.setInput(t))),this.lastLoadStatus.inputOn=t,this.lastLoadStatus.mode=e,this.lastLoadStatus.targetVal=i}async measurePsu(){if(this.psu.isVirtual)return this.psu.virtualPsu.measure();if(!this.psu.state.connected){if(this.isTesting)throw this.psu.handleDeviceLost("直流电源串口未连接"),new Error("直流电源串口未连接");return{vin:0,iin:0,pin:0}}try{const t=await this.psu.query(hn.measureAll(),400,1),e=t.split(",").map(i=>parseFloat(i.trim()));if(e.length>=2&&!isNaN(e[0])&&!isNaN(e[1])){const i=Math.max(0,e[0]),s=Math.max(0,e[1]),r=e.length>=3&&!isNaN(e[2])?Math.max(0,e[2]):Math.round(i*s*1e3)/1e3;return this.psuConsecutiveFailures=0,{vin:i,iin:s,pin:r}}throw new Error(`电源返回遥测数据格式无效: "${t}"`)}catch(t){if(this.psuConsecutiveFailures++,console.warn(`[PSU measureAll error count: ${this.psuConsecutiveFailures}]:`,t),this.isTesting&&this.psuConsecutiveFailures>=2)throw this.psu.handleDeviceUnresponsive(`直流电源突然未响应指令 (超时无回复): ${(t==null?void 0:t.message)||t}`),new Error(`直流电源 [RIGOL DP700] 突然未响应指令: ${(t==null?void 0:t.message)||t}`);return{vin:0,iin:0,pin:0}}}async measureLoad(t){if(this.load.isVirtual)return this.load.virtualLoad.measure(t);if(!this.load.state.connected){if(this.isTesting)throw this.load.handleDeviceLost("电子负载串口未连接"),new Error("电子负载串口未连接");return{vout:0,iout:0,pout:0}}try{const e=await this.load.query(we.measureVolt(),350,1),i=await this.load.query(we.measureCurr(),350,1),s=parseFloat(e),r=parseFloat(i);if(!isNaN(s)&&!isNaN(r)&&e.trim()!==""&&i.trim()!==""){this.loadConsecutiveFailures=0;const o=Math.round(s*r*1e3)/1e3;return{vout:Math.max(0,s),iout:Math.max(0,r),pout:o}}throw new Error(`负载返回遥测数据格式无效: V="${e}", I="${i}"`)}catch(e){if(this.loadConsecutiveFailures++,console.warn(`[LOAD measure error count: ${this.loadConsecutiveFailures}]:`,e),this.isTesting&&this.loadConsecutiveFailures>=2)throw this.load.handleDeviceUnresponsive(`电子负载突然未响应指令 (超时无回复): ${(e==null?void 0:e.message)||e}`),new Error(`电子负载 [UNI-T UTL8500] 突然未响应指令: ${(e==null?void 0:e.message)||e}`);return{vout:0,iout:0,pout:0}}}async measureAsync(){const t=await this.measurePsu(),e=await this.measureLoad(t.vin),i=t.pin>.01?e.pout/t.pin*100:0,s={vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))};return this.cachedTelemetry=s,s}measure(){if(this.psu.isVirtual&&this.load.isVirtual){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}return this.cachedTelemetry}async queryPsuStatus(){if(this.psu.isVirtual){const t={outputOn:this.psu.virtualPsu.isOutputOn(),setVoltage:this.psu.virtualPsu.getTargetVoltage(),setCurrentLimit:this.psu.virtualPsu.getCurrentLimit()};return this.lastPsuStatus=t,t}if(!this.psu.state.connected)return this.lastPsuStatus;try{const t=await this.psu.query(hn.getOutput(),300),e=t.toUpperCase().includes("ON")||t.trim()==="1";let i=this.lastPsuStatus.setVoltage,s=this.lastPsuStatus.setCurrentLimit;const r=await this.psu.query(hn.getApply(),300);if(r&&r.includes(",")){const a=r.split(",").map(l=>parseFloat(l.trim()));isNaN(a[0])||(i=a[0]),a.length>=2&&!isNaN(a[1])&&(s=a[1])}const o={outputOn:e,setVoltage:i,setCurrentLimit:s};return this.lastPsuStatus=o,o}catch(t){return console.warn("[queryPsuStatus error]:",t),this.lastPsuStatus}}async queryLoadStatus(){if(this.load.isVirtual){const t=this.load.virtualLoad.getMode();let e=0;t==="CC"?e=this.load.virtualLoad.getTargetCurrent():t==="CW"?e=this.load.virtualLoad.getTargetPower():t==="CV"?e=this.load.virtualLoad.getTargetVoltage():t==="CR"&&(e=this.load.virtualLoad.getTargetResistance());const i={inputOn:this.load.virtualLoad.isInputOn(),mode:t,targetVal:e,isShort:this.load.virtualLoad.isShortOn()};return this.lastLoadStatus=i,i}if(!this.load.state.connected)return this.lastLoadStatus;try{const t=await this.load.query(we.getInput(),250),e=await this.load.query(we.getMode(),250),i=t.includes("1")||t.toUpperCase().includes("ON");let s=this.lastLoadStatus.mode;const r=e.toUpperCase().trim();r.includes("CURR")?s="CC":r.includes("VOLT")?s="CV":r.includes("POW")?s="CW":r.includes("RES")&&(s="CR");let o=we.getCurrent();s==="CV"?o=we.getVoltage():s==="CW"?o=we.getPower():s==="CR"&&(o=we.getResistance());const a=await this.load.query(o,250),l=parseFloat(a),c=isNaN(l)?this.lastLoadStatus.targetVal:l,u={inputOn:i,mode:s,targetVal:c,isShort:!1};return this.lastLoadStatus=u,u}catch(t){return console.warn("[queryLoadStatus error]:",t),this.lastLoadStatus}}async setPsuVoltageOnly(t){const e=this.lastPsuStatus.setCurrentLimit>0?this.lastPsuStatus.setCurrentLimit:3;this.psu.isVirtual?this.psu.virtualPsu.setVoltage(t):Math.abs(this.lastPsuStatus.setVoltage-t)>1e-4&&await this.psu.write(hn.apply(t,e)),this.lastPsuStatus.setVoltage=t}async setPsuCurrentLimitOnly(t){const e=this.lastPsuStatus.setVoltage>0?this.lastPsuStatus.setVoltage:5;this.psu.isVirtual?this.psu.virtualPsu.setCurrentLimit(t):Math.abs(this.lastPsuStatus.setCurrentLimit-t)>1e-4&&await this.psu.write(hn.apply(e,t)),this.lastPsuStatus.setCurrentLimit=t}async setPsuOutputState(t){this.psu.isVirtual?this.psu.virtualPsu.setOutput(t):await this.psu.write(hn.setOutput(t)),this.lastPsuStatus.outputOn=t}async setLoadModeAndValue(t,e){this.load.isVirtual?(this.load.virtualLoad.setMode(t),t==="CC"?this.load.virtualLoad.setCurrent(e):t==="CW"?this.load.virtualLoad.setPower(e):t==="CV"?this.load.virtualLoad.setVoltage(e):t==="CR"&&this.load.virtualLoad.setResistance(e)):(await this.load.write(we.setMode(t)),t==="CC"?await this.load.write(we.setCurrent(e)):t==="CW"?await this.load.write(we.setPower(e)):t==="CV"?await this.load.write(we.setVoltage(e)):t==="CR"&&await this.load.write(we.setResistance(e))),this.lastLoadStatus.mode=t,this.lastLoadStatus.targetVal=e}async setLoadInputState(t){this.load.isVirtual?this.load.virtualLoad.setInput(t):await this.load.write(we.setInput(t)),this.lastLoadStatus.inputOn=t}async setLoadShortState(t){this.load.isVirtual?this.load.virtualLoad.setShort(t):await this.load.write(we.setShort(t)),this.lastLoadStatus.isShort=t}async clearLoadProtectionState(){this.load.isVirtual||await this.load.write(we.clearProtection())}async sendPsuRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.psu.query(e):(await this.psu.write(e),"已发送指令至电源串口"):""}async sendLoadRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.load.query(e):(await this.load.write(e),"已发送指令至负载串口"):""}async emergencyStopAll(){try{this.psu.isVirtual?this.psu.virtualPsu.setOutput(!1):this.psu.state.connected&&await this.psu.write(hn.setOutput(!1))}catch(t){console.warn("[PSU emergency stop output off error]:",t)}this.lastPsuStatus.outputOn=!1;try{this.load.isVirtual?this.load.virtualLoad.setInput(!1):this.load.state.connected&&await this.load.write(we.setInput(!1))}catch(t){console.warn("[LOAD emergency stop input off error]:",t)}this.lastLoadStatus.inputOn=!1}};Xt(ds,"instance");let pa=ds;const K0="PowerChipTesterDB",Z0=1,Tn="test_runs",cp=5;function Oa(){return new Promise((n,t)=>{const e=indexedDB.open(K0,Z0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(Tn)||s.createObjectStore(Tn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function J0(n){const t=await Oa(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([Tn],"readwrite");r.objectStore(Tn).put(e),r.oncomplete=async()=>{try{await ex(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Oa();return new Promise((t,e)=>{const o=n.transaction([Tn],"readonly").objectStore(Tn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Q0(n){const t=await Oa();return new Promise((e,i)=>{const o=t.transaction([Tn],"readonly").objectStore(Tn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function tx(n){const t=await Oa();return new Promise((e,i)=>{const s=t.transaction([Tn],"readwrite");s.objectStore(Tn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function ex(n){return new Promise((t,e)=>{const s=n.transaction([Tn],"readwrite").objectStore(Tn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function Ko(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(p=>`"${p}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(p=>{const v=n.voltageSteps.map(_=>{const g=n.points.find(h=>Math.abs(h.voltageTarget-_)<1e-4&&Math.abs(h.loadTarget-p)<1e-4);return g&&g.status==="completed"?g.efficiency.toFixed(2):'""'});i.push(`"${p}",${v.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(p=>{i.push([p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),`"${p.loadMode}"`,p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2),`"${p.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压切换后0.5s内被忽略的数据及步间暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.5s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(p=>{i.push([p.relTime.toFixed(4),p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),p.stepRelTime.toFixed(4),p.isValidForAvg?'"YES"':'"NO(0.5s切换/暂态过滤)"',p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const nx={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},ix={class:"menubar"},sx={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},rx={style:{display:"flex","align-items":"center",gap:"5px"}},ox={style:{display:"flex","align-items":"center",gap:"5px"}},ax={class:"panel-left"},lx={class:"group-box"},cx={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},ux={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},dx={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"4px"}},fx=["value"],hx={key:0,style:{"margin-bottom":"6px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},px={style:{display:"flex","align-items":"center",gap:"4px"}},mx=["value"],gx={key:1,style:{"margin-top":"4px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},_x={class:"group-box"},vx={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},xx={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},yx={style:{"margin-bottom":"6px"}},bx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Mx=["disabled"],Sx=["disabled"],Ex=["disabled"],wx={style:{"margin-bottom":"6px"}},Tx={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},Ax={style:{display:"flex",gap:"4px"}},Cx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Rx=["disabled"],Px={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Lx=["disabled"],Dx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Ix={style:{"font-size":"10px",color:"#a0aec0"}},Ux=["disabled"],Nx={style:{"font-size":"10px",color:"#a0aec0"}},Ox=["disabled"],Fx={style:{"font-size":"10px",color:"#a0aec0"}},Bx=["disabled"],zx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Vx=["disabled"],kx=["disabled"],Hx=["disabled"],Gx={class:"group-box"},Wx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},$x={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Xx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},jx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Yx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},Kx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Zx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},ty={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},ey={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},ny={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},iy={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},sy={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},ry={style:{display:"flex","flex-direction":"column",gap:"6px"}},oy={style:{display:"flex",gap:"6px"}},ay=["disabled"],ly=["disabled"],cy={class:"panel-right"},uy={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},dy={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},fy={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},hy={style:{color:"#48bb78"}},py={style:{flex:"1",overflow:"auto"}},my={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},gy={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},_y={style:{padding:"4px 6px"}},vy={style:{padding:"4px 6px"}},xy={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},yy={style:{padding:"4px 6px"}},by={style:{padding:"4px 6px"}},My={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},Sy={style:{padding:"4px 6px"}},Ey={style:{padding:"4px 6px"}},wy={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},Ty={key:0,style:{color:"#48bb78"}},Ay={key:1,style:{color:"#00d2ff"}},Cy={key:2,style:{color:"#4a5568"}},Ry={style:{padding:"4px 6px","text-align":"center"}},Py={class:"statusbar"},Ly={key:0,style:{color:"#48bb78"}},Dy={key:1},Iy={class:"device-lost-modal"},Uy={class:"device-lost-header"},Ny={class:"device-lost-body"},Oy={class:"device-lost-info-grid"},Fy={class:"info-row"},By={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},zy={class:"info-row"},Vy={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},ky={class:"info-row"},Hy={class:"info-val"},Gy={class:"info-row"},Wy={class:"info-val",style:{"font-family":"monospace"}},$y={class:"device-lost-footer"},Xy=Ai({__name:"ConsoleView",setup(n){const t=lp(),e=pa.getInstance(),i=Yt(null),s=Yt(!1),r=Yt(!1),o=Yt(!0),a=Yt([]),l=Mn({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),c=Yt(null),u=Yt(void 0),d=Yt([]),f=Yt(!1),p=Yt(!1),v=Yt("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let _=null,g=null;const h=Mn({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),D=Yt([]),P=Yt([]),S=Yt([]),q=Yt(null),F=Mn({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),O=ze(()=>{const H=Math.max(1,Math.floor((h.voltageMax-h.voltageMin)/h.voltageStep)+1),R=Math.max(1,Math.floor((h.loadMax-h.loadMin)/h.loadStep)+1);return H*R}),U=ze(()=>S.value.filter(H=>H.status==="completed").length),M=ze(()=>S.value.filter(H=>H.status==="completed"));function E(H){i.value=i.value===H?null:H}function w(){i.value=null}function ot(){const H=[];for(let bt=h.voltageMin;bt<=h.voltageMax+1e-5;bt+=h.voltageStep)H.push(Math.round(bt*100)/100);const R=[];for(let bt=h.loadMin;bt<=h.loadMax+1e-5;bt+=h.loadStep)R.push(Math.round(bt*100)/100);D.value=H,P.value=R;const j=[];let vt=1;for(const bt of H)for(const Et of R)j.push({stepIndex:vt++,voltageTarget:bt,loadTarget:Et,loadMode:h.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});S.value=j,F.totalSteps=j.length,F.currentStep=0,F.progressPercent=0}function rt(H,R,j){console.error(`%c[SERIAL DEVICE LOST] %c${H} (${R}): ${j}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),l.visible=!0,l.deviceType=H,l.deviceName=R,l.reason=j,l.timestamp=new Date().toLocaleTimeString(),f.value&&(p.value=!0,v.value=`⚠️ 警告: 检测到串口设备【${R}】异常断开/丢失！测试已自动紧急暂停。`,e.emergencyStopAll().catch(()=>{}))}function at(){l.visible=!1,r.value=!0}async function xt(){e.resetFailureCounters();try{v.value="正在检测仪器响应并尝试恢复...",!e.psu.isVirtual&&e.psu.state.connected&&await e.psu.query(hn.getApply(),400),!e.load.isVirtual&&e.load.state.connected&&await e.load.query(we.getMode(),400),f.value&&F.activeTargetV>0&&(await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad)),l.visible=!1,p.value=!1,v.value="仪器通信已恢复正常，测试继续进行..."}catch(H){v.value=`⚠️ 恢复失败: ${(H==null?void 0:H.message)||H}，请检查物理设备与连接`}}async function W(){if(l.visible=!1,o.value=!0,e.autoConnectVirtual(),e.resetFailureCounters(),f.value&&F.activeTargetV>0)try{await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad)}catch(H){console.warn("Re-apply virtual step targets warning:",H)}v.value="已切换为仿真驱动模式，测试已恢复继续",p.value=!1}async function z(){l.visible=!1,_&&_.abort(),await dt()}async function X(){e.isBothConnected()||e.autoConnectVirtual(),ot(),d.value=[],c.value&&c.value.clear(),u.value=void 0,f.value=!0,p.value=!1,e.isTesting=!0,e.resetFailureCounters(),_=new AbortController,v.value="正在执行全自动 2D 矩阵效率测试...",nt();const H=performance.now();try{let R=0,j=-999999;for(let vt=0;vt<S.value.length&&!_.signal.aborted;vt++){for(;p.value&&!_.signal.aborted;)await new Promise(wt=>setTimeout(wt,200));const bt=S.value[vt];bt.status="running",F.activeTargetV=bt.voltageTarget,F.activeTargetLoad=bt.loadTarget,F.currentStep=vt+1;const Et=vt===0||Math.abs(bt.voltageTarget-j)>1e-4;if(j=bt.voltageTarget,Et){v.value=`正在切换电压至 ${bt.voltageTarget.toFixed(2)}V，下发设置并等待 0.5s 电源就绪...`;try{await e.setPsuOutput(!0,bt.voltageTarget,h.inputCurrentLimit)}catch(wt){for(rt("PSU",e.psu.state.model,`直流电源下发控制指令未响应/写入失败: ${(wt==null?void 0:wt.message)||wt}`);p.value&&!_.signal.aborted;)await new Promise(Ft=>setTimeout(Ft,200));if(_.signal.aborted)break}}try{await e.setLoadInput(!0,h.loadMode,bt.loadTarget)}catch(wt){for(rt("LOAD",e.load.state.model,`电子负载下发控制指令未响应/写入失败: ${(wt==null?void 0:wt.message)||wt}`);p.value&&!_.signal.aborted;)await new Promise(Ft=>setTimeout(Ft,200));if(_.signal.aborted)break}if(_.signal.aborted)break;v.value=`正在测试步 #${bt.stepIndex} (Vin: ${bt.voltageTarget.toFixed(2)}V, 负载: ${bt.loadTarget.toFixed(2)}${bt.loadMode})...`;const Tt=h.stepDwellTime*1e3,Bt=h.stepDwellTime,Ut=.1,Ct=Math.max(10,Math.round(1e3/(h.sampleRateHz||8))),Zt=performance.now(),Gt=[],ie=[],G=[],Rt=[],_t=[],St=[];let Pt=0;for(;Pt<Tt&&!_.signal.aborted;){for(;p.value&&!_.signal.aborted;)await new Promise(rn=>setTimeout(rn,200));const wt=performance.now();Pt=wt-Zt;const Ft=Pt/1e3,se=(wt-H)/1e3;if(!e.checkHealth().ok){for(;p.value&&!_.signal.aborted;)await new Promise(rn=>setTimeout(rn,200));if(_.signal.aborted)break}const ae=Bt>.2?Ft>=Ut&&Ft<=Bt-Ut:!0;let ne;try{ne=await e.measureAsync()}catch{for(;p.value&&!_.signal.aborted;)await new Promise(mr=>setTimeout(mr,200));if(_.signal.aborted)break;continue}F.vin=ne.vin,F.iin=ne.iin,F.pin=ne.pin,F.vout=ne.vout,F.iout=ne.iout,F.pout=ne.pout,F.efficiency=ne.efficiency,u.value={t:wt,vin:ne.vin,vout:ne.vout,iin:ne.iin,iout:ne.iout};const An={timestamp:Date.now(),relTime:Math.round(se*1e3)/1e3,stepIndex:bt.stepIndex,voltageTarget:bt.voltageTarget,loadTarget:bt.loadTarget,stepRelTime:Math.round(Ft*1e3)/1e3,isValidForAvg:ae,vin:ne.vin,iin:ne.iin,pin:ne.pin,vout:ne.vout,iout:ne.iout,pout:ne.pout,efficiency:ne.efficiency};d.value.push(An),ae&&(Gt.push(ne.vin),ie.push(ne.iin),G.push(ne.pin),Rt.push(ne.vout),_t.push(ne.iout),St.push(ne.pout));const ro=performance.now()-wt,oo=Math.max(2,Ct-ro);await new Promise(rn=>setTimeout(rn,oo))}if(Gt.length>0){const wt=Gt.length;bt.vin=Math.round(Gt.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.iin=Math.round(ie.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.pin=Math.round(G.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.vout=Math.round(Rt.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.iout=Math.round(_t.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.pout=Math.round(St.reduce((Ft,se)=>Ft+se,0)/wt*1e3)/1e3,bt.efficiency=bt.pin>.001?Math.min(100,Math.max(0,Math.round(bt.pout/bt.pin*1e4)/100)):0}else{const wt=e.measure();bt.vin=wt.vin,bt.iin=wt.iin,bt.pin=wt.pin,bt.vout=wt.vout,bt.iout=wt.iout,bt.pout=wt.pout,bt.efficiency=wt.efficiency}bt.status="completed",bt.timestamp=Date.now(),R++,F.progressPercent=R/S.value.length*100}_.signal.aborted||await dt()}catch(R){console.error("Test execution error:",R),v.value="测试执行异常: "+String(R),alert("测试执行过程中发生异常："+String(R))}finally{f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),ht()}}async function dt(){await e.emergencyStopAll(),v.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const H=S.value.filter(G=>G.status==="completed");let R=0,j=100,vt=0,bt;H.forEach(G=>{G.efficiency>R&&(R=G.efficiency,bt=G),G.efficiency<j&&(j=G.efficiency),vt+=G.efficiency});const Et=H.length>0?vt/H.length:0,Tt=`test_${Date.now()}`,Bt=new Date,Ut=JSON.parse(JSON.stringify(h)),Ct=JSON.parse(JSON.stringify(S.value)),Zt=bt?JSON.parse(JSON.stringify(bt)):void 0,Gt=JSON.parse(JSON.stringify(d.value)),ie={id:Tt,title:`芯片双向矩阵扫描 [${h.voltageMin}V-${h.voltageMax}V | ${h.loadMode}]`,createdAt:Bt.toISOString(),config:Ut,voltageSteps:[...D.value],loadSteps:[...P.value],points:Ct,rawSamples:Gt,summary:{totalPoints:S.value.length,completedPoints:H.length,maxEfficiency:Math.round(R*100)/100,minEfficiency:Math.round(j*100)/100,avgEfficiency:Math.round(Et*100)/100,optimalPoint:Zt,durationSeconds:Math.round(H.length*h.stepDwellTime)}};q.value=ie,await J0(ie),await y(),Nv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),B(Tt)}function N(){p.value=!0,v.value="测试已暂停"}async function I(){e.resetFailureCounters();try{F.activeTargetV>0&&(await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad))}catch(H){console.warn("Re-applying step targets on resume warning:",H)}l.visible=!1,p.value=!1,v.value="测试已继续运行"}async function ft(){_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),ht(),v.value="测试已手动终止，仪器输出已安全切断"}let K=!1,L=0;function nt(){g&&clearInterval(g),g=window.setInterval(async()=>{if(e.checkHealth(),!f.value&&!K){K=!0;try{if(e.psu.state.connected||e.load.state.connected){const H=await e.measureAsync();F.vin=H.vin,F.iin=H.iin,F.pin=H.pin,F.vout=H.vout,F.iout=H.iout,F.pout=H.pout,F.efficiency=H.efficiency,L++,L%4===0&&(e.psu.state.connected&&await e.queryPsuStatus(),e.load.state.connected&&await e.queryLoadStatus())}}catch{}finally{K=!1}}},500)}function ht(){g&&(clearInterval(g),g=null)}function B(H){var bt;const R=H||((bt=q.value)==null?void 0:bt.id);if(!R){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const vt=`${window.location.href.split("#")[0]}#/result/${R}`;window.open(vt,"_blank")}function $(){if(q.value)Ko(q.value);else if(M.value.length>0){const H={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(h)),voltageSteps:[...D.value],loadSteps:[...P.value],points:JSON.parse(JSON.stringify(S.value)),rawSamples:JSON.parse(JSON.stringify(d.value)),summary:{totalPoints:S.value.length,completedPoints:M.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};Ko(H)}else alert("当前无可用测试数据可供导出！")}function Y(H){Ko(H)}async function ut(H){await tx(H),await y()}async function y(){try{a.value=await up()}catch(H){console.warn("Failed to load history:",H)}}async function C(){await y(),s.value=!0}function V(){S.value=[],d.value=[],q.value=null,u.value=void 0,c.value&&c.value.clear(),ot(),v.value="图表与数据已清空"}function b(){o.value?(e.autoConnectVirtual(),v.value="已启用内置仿真驱动模式 (Virtual Mode)"):(e.psu.disconnect(),e.load.disconnect(),v.value="已关闭仿真模式，请配置物理串口设备")}function it(){e.psu.state.connected?(e.psu.disconnect(),v.value="电源串口已断开"):r.value=!0}function et(){e.load.state.connected?(e.load.disconnect(),v.value="电子负载串口已断开"):r.value=!0}function lt(){o.value=!0,e.autoConnectVirtual(),r.value=!1,v.value="仿真驱动已就绪"}async function ct(H){try{await e.psu.connectPhysical(H),e.resetFailureCounters(),o.value=!1,v.value=`电源串口已连接 (${H}bps)`,await e.queryPsuStatus()}catch(R){alert("连接电源串口失败: "+((R==null?void 0:R.message)||R))}}async function Mt(){await e.psu.disconnect(),v.value="电源串口已断开"}async function Q(H){try{await e.load.connectPhysical(H),e.resetFailureCounters(),o.value=!1,v.value=`负载串口已连接 (${H}bps)`,await e.queryLoadStatus()}catch(R){alert("连接负载串口失败: "+((R==null?void 0:R.message)||R))}}async function T(){await e.load.disconnect(),v.value="负载串口已断开"}function x(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}function k(){t.push("/single-instrument")}function st(H){(H.ctrlKey||H.metaKey)&&(H.key==="d"||H.key==="D")&&(H.preventDefault(),k())}function mt(){e.emergencyStopAll().catch(()=>{})}return ur(async()=>{e.setOnDeviceLost(rt),e.autoConnectVirtual(),ot(),nt(),await y(),window.addEventListener("keydown",st),window.addEventListener("beforeunload",mt)}),dr(()=>{_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,e.emergencyStopAll().catch(()=>{}),ht(),window.removeEventListener("keydown",st),window.removeEventListener("beforeunload",mt)}),(H,R)=>(Nt(),Ot("div",nx,[m("div",ix,[m("div",{class:pi(["menu-item",{active:i.value==="file"}]),onClick:R[3]||(R[3]=j=>E("file"))},[R[38]||(R[38]=Dt(" 文件 (File) ",-1)),i.value==="file"?(Nt(),Ot("div",{key:0,class:"dropdown-menu",onClick:R[2]||(R[2]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:R[0]||(R[0]=j=>{$(),w()})},[...R[35]||(R[35]=[m("span",null,"导出测试结果 CSV (Export CSV)...",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),R[37]||(R[37]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:R[1]||(R[1]=j=>w())},[...R[36]||(R[36]=[m("span",null,"退出 (Exit)",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Te("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="view"}]),onClick:R[6]||(R[6]=j=>E("view"))},[R[40]||(R[40]=Dt(" 视图 (View) ",-1)),i.value==="view"?(Nt(),Ot("div",{key:0,class:"dropdown-menu",onClick:R[5]||(R[5]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:R[4]||(R[4]=j=>{V(),w()})},[...R[39]||(R[39]=[m("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Te("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="tools"}]),onClick:R[11]||(R[11]=j=>E("tools"))},[R[46]||(R[46]=Dt(" 工具 (Tools) ",-1)),i.value==="tools"?(Nt(),Ot("div",{key:0,class:"dropdown-menu",onClick:R[10]||(R[10]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:R[7]||(R[7]=j=>{C(),w()})},[...R[41]||(R[41]=[m("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),m("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),R[44]||(R[44]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:R[8]||(R[8]=j=>{k(),w()})},[...R[42]||(R[42]=[m("span",{style:{color:"#48bb78","font-weight":"bold"}},"🔧 单仪器测试 / 硬件单体调试工具...",-1),m("span",{style:{"font-size":"10px",color:"#48bb78","font-family":"monospace"}},"Ctrl+D",-1)])]),R[45]||(R[45]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:R[9]||(R[9]=j=>{r.value=!0,w()})},[...R[43]||(R[43]=[m("span",null,"打开串口硬件连接设置...",-1)])])])):Te("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="help"}]),onClick:R[14]||(R[14]=j=>E("help"))},[R[48]||(R[48]=Dt(" 帮助 (Help) ",-1)),i.value==="help"?(Nt(),Ot("div",{key:0,class:"dropdown-menu",onClick:R[13]||(R[13]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:R[12]||(R[12]=j=>{x(),w()})},[...R[47]||(R[47]=[m("span",null,"关于工作台 (About Workbench)...",-1)])])])):Te("",!0)],2),m("div",sx,[m("span",rx,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Jt(e).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 电源: "+yt(Jt(e).psu.state.portName)+" ",1),Jt(e).psu.state.connected?(Nt(),Ot("span",{key:0,style:pe({color:Jt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+yt(Jt(e).lastPsuStatus.outputOn?"输出:ON":"输出:OFF")+"] ",5)):Te("",!0)]),m("span",ox,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Jt(e).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 负载: "+yt(Jt(e).load.state.portName)+" ",1),Jt(e).load.state.connected?(Nt(),Ot("span",{key:0,style:pe({color:Jt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+yt(Jt(e).lastLoadStatus.inputOn?"带载:ON":"带载:OFF")+"] ",5)):Te("",!0)]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold","background-color":"#234e52",color:"#81e6d9",border:"1px solid #319795"},onClick:R[15]||(R[15]=j=>k()),title:"打开电源/负载底层单仪器独立调试工作台 (Ctrl+D)"}," 🔧 单仪器测试 "),q.value?(Nt(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:R[16]||(R[16]=j=>B(q.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...R[49]||(R[49]=[m("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 打开 3D/2D 数据视图 ",-1)])])):Te("",!0)])]),m("div",{class:"workbench-body",onClick:w},[m("div",ax,[m("div",lx,[R[55]||(R[55]=m("div",{class:"group-title"},[m("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),m("div",cx,[m("label",ux,[re(m("input",{type:"checkbox","onUpdate:modelValue":R[17]||(R[17]=j=>o.value=j),onChange:b},null,544),[[zi,o.value]]),R[50]||(R[50]=Dt(" 🧪 启用仿真演示模式 ",-1))]),m("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:R[18]||(R[18]=j=>r.value=!0)}," ⚙ 配置 ")]),m("div",dx,[R[51]||(R[51]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),m("input",{type:"text",readonly:"",value:Jt(e).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,fx),m("button",{class:pi(["btn",Jt(e).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:it},yt(Jt(e).psu.state.connected?"断开":"连接"),3)]),Jt(e).psu.state.connected?(Nt(),Ot("div",hx,[R[52]||(R[52]=m("span",{style:{color:"#a0aec0"}},"电源状态:",-1)),m("span",{style:pe({color:Jt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 输出: "+yt(Jt(e).lastPsuStatus.outputOn?"ON (已开启)":"OFF (已关闭)"),5)])):Te("",!0),m("div",px,[R[53]||(R[53]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),m("input",{type:"text",readonly:"",value:Jt(e).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,mx),m("button",{class:pi(["btn",Jt(e).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:et},yt(Jt(e).load.state.connected?"断开":"连接"),3)]),Jt(e).load.state.connected?(Nt(),Ot("div",gx,[R[54]||(R[54]=m("span",{style:{color:"#a0aec0"}},"负载状态:",-1)),m("span",{style:pe({color:Jt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 带载: "+yt(Jt(e).lastLoadStatus.inputOn?"ON (带载中)":"OFF (已停止)")+" ("+yt(Jt(e).lastLoadStatus.mode)+") ",5)])):Te("",!0)]),m("div",_x,[m("div",vx,[R[56]||(R[56]=m("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),m("span",xx," 总点数: "+yt(O.value)+" 点 ",1)]),m("div",yx,[R[60]||(R[60]=m("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),m("div",bx,[m("div",null,[R[57]||(R[57]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[19]||(R[19]=j=>h.voltageMin=j),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Mx),[[Be,h.voltageMin,void 0,{number:!0}]])]),m("div",null,[R[58]||(R[58]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[20]||(R[20]=j=>h.voltageMax=j),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Sx),[[Be,h.voltageMax,void 0,{number:!0}]])]),m("div",null,[R[59]||(R[59]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[21]||(R[21]=j=>h.voltageStep=j),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ex),[[Be,h.voltageStep,void 0,{number:!0}]])])])]),m("div",wx,[m("div",Tx,[R[63]||(R[63]=m("span",null,"负载扫描范围 (Load):",-1)),m("div",Ax,[m("label",Cx,[re(m("input",{type:"radio",value:"CC","onUpdate:modelValue":R[22]||(R[22]=j=>h.loadMode=j),disabled:f.value},null,8,Rx),[[ad,h.loadMode]]),R[61]||(R[61]=Dt(" CC恒流 ",-1))]),m("label",Px,[re(m("input",{type:"radio",value:"CW","onUpdate:modelValue":R[23]||(R[23]=j=>h.loadMode=j),disabled:f.value},null,8,Lx),[[ad,h.loadMode]]),R[62]||(R[62]=Dt(" CW恒功率 ",-1))])])]),m("div",Dx,[m("div",null,[m("span",Ix,"起始("+yt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":R[24]||(R[24]=j=>h.loadMin=j),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ux),[[Be,h.loadMin,void 0,{number:!0}]])]),m("div",null,[m("span",Nx,"终止("+yt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":R[25]||(R[25]=j=>h.loadMax=j),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ox),[[Be,h.loadMax,void 0,{number:!0}]])]),m("div",null,[m("span",Fx,"步长("+yt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":R[26]||(R[26]=j=>h.loadStep=j),disabled:f.value,step:"0.1",style:{width:"100%"}},null,8,Bx),[[Be,h.loadStep,void 0,{number:!0}]])])])]),m("div",zx,[m("div",null,[R[64]||(R[64]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[27]||(R[27]=j=>h.inputCurrentLimit=j),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Vx),[[Be,h.inputCurrentLimit,void 0,{number:!0}]])]),m("div",null,[R[65]||(R[65]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[28]||(R[28]=j=>h.stepDwellTime=j),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,kx),[[Be,h.stepDwellTime,void 0,{number:!0}]])]),m("div",null,[R[66]||(R[66]=m("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),re(m("input",{type:"number","onUpdate:modelValue":R[29]||(R[29]=j=>h.sampleRateHz=j),disabled:f.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,Hx),[[Be,h.sampleRateHz,void 0,{number:!0}]])])])]),m("div",Gx,[R[80]||(R[80]=m("div",{class:"group-title"},[m("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),m("div",Wx,[m("div",$x,[R[68]||(R[68]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),m("div",Xx,[Dt(yt(F.vin.toFixed(3))+" ",1),R[67]||(R[67]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",qx,[R[70]||(R[70]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),m("div",jx,[Dt(yt(F.vout.toFixed(3))+" ",1),R[69]||(R[69]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",Yx,[R[72]||(R[72]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),m("div",Kx,[Dt(yt(F.iin.toFixed(3))+" ",1),R[71]||(R[71]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Zx,[R[74]||(R[74]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),m("div",Jx,[Dt(yt(F.iout.toFixed(3))+" ",1),R[73]||(R[73]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Qx,[R[76]||(R[76]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),m("div",ty,[Dt(yt(F.pin.toFixed(3))+" ",1),R[75]||(R[75]=m("span",{style:{"font-size":"10px"}},"W",-1))])]),m("div",ey,[R[78]||(R[78]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),m("div",ny,[Dt(yt(F.pout.toFixed(3))+" ",1),R[77]||(R[77]=m("span",{style:{"font-size":"10px"}},"W",-1))])])]),m("div",iy,[R[79]||(R[79]=m("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),m("span",sy,yt(F.efficiency.toFixed(2))+" % ",1)])]),m("div",ry,[f.value?p.value?(Nt(),Ot("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:I}," ▶ 继续测试 ")):(Nt(),Ot("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:N}," ⏸ 暂停测试 ")):(Nt(),Ot("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:X}," ▶ 开始矩阵测试 ")),m("div",oy,[m("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!f.value,onClick:ft}," ⏹ 结束 ",8,ay),m("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:M.value.length===0,onClick:$}," 📊 导出CSV ",8,ly)])])]),m("div",cy,[Ue(c0,{ref_key:"waveformRef",ref:c,"latest-sample":u.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),m("div",uy,[m("div",dy,[R[82]||(R[82]=m("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),m("span",fy,[R[81]||(R[81]=Dt(" 已完成: ",-1)),m("b",hy,yt(U.value),1),Dt(" / "+yt(S.value.length)+" 步 ",1)])]),m("div",py,[m("table",my,[R[83]||(R[83]=m("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[m("tr",{style:{"border-bottom":"1px solid #2d3748"}},[m("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),m("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),m("th",{style:{padding:"5px 6px"}},"目标负载"),m("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),m("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),m("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),m("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),m("tbody",null,[(Nt(!0),Ot(Le,null,yi(S.value,j=>(Nt(),Ot("tr",{key:j.stepIndex,style:pe([{"border-bottom":"1px solid #1e2530"},{backgroundColor:j.status==="running"?"#1a365d":"transparent"}])},[m("td",gy,"#"+yt(j.stepIndex),1),m("td",_y,yt(j.voltageTarget.toFixed(2)),1),m("td",vy,yt(j.loadTarget.toFixed(2))+" "+yt(j.loadMode),1),m("td",xy,yt(j.status!=="pending"?j.vin.toFixed(4):"--"),1),m("td",yy,yt(j.status!=="pending"?j.iin.toFixed(4):"--"),1),m("td",by,yt(j.status!=="pending"?j.pin.toFixed(4):"--"),1),m("td",My,yt(j.status!=="pending"?j.vout.toFixed(4):"--"),1),m("td",Sy,yt(j.status!=="pending"?j.iout.toFixed(4):"--"),1),m("td",Ey,yt(j.status!=="pending"?j.pout.toFixed(4):"--"),1),m("td",wy,[j.status==="completed"?(Nt(),Ot("span",Ty,yt(j.efficiency.toFixed(2))+"% ",1)):j.status==="running"?(Nt(),Ot("span",Ay,"测定中")):(Nt(),Ot("span",Cy,"--"))]),m("td",Ry,[m("span",{style:pe([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:j.status==="completed"?"#22543d":j.status==="running"?"#2b6cb0":"#2d3748",color:j.status==="completed"?"#9ae6b4":j.status==="running"?"#bee3f8":"#718096"}])},yt(j.status==="completed"?"已完成":j.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),m("div",Py,[m("span",null,yt(v.value),1),f.value?(Nt(),Ot("span",Ly," 正在测试第 "+yt(F.currentStep)+" / "+yt(F.totalSteps)+" 点 ("+yt(F.progressPercent.toFixed(1))+"%) ",1)):(Nt(),Ot("span",Dy,"就绪 (Ready)"))]),Ue(C0,{"is-open":s.value,records:a.value,onClose:R[30]||(R[30]=j=>s.value=!1),onOpenResult:B,onExportCsv:Y,onDeleteRecord:ut},null,8,["is-open","records"]),Ue(q0,{"is-open":r.value,"psu-connected":Jt(e).psu.state.connected,"psu-port-name":Jt(e).psu.state.portName,"load-connected":Jt(e).load.state.connected,"load-port-name":Jt(e).load.state.portName,"web-serial-supported":Jt(e).psu.isWebSerialSupported(),onClose:R[31]||(R[31]=j=>r.value=!1),onConnectVirtual:lt,onConnectPhysicalPsu:ct,onDisconnectPsu:Mt,onConnectPhysicalLoad:Q,onDisconnectLoad:T},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),l.visible?(Nt(),Ot("div",{key:0,class:"device-lost-overlay",onClick:R[34]||(R[34]=ls(j=>l.visible=!1,["self"]))},[m("div",Iy,[m("div",Uy,[R[84]||(R[84]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 仪器突然未响应指令 / 串口通信异常告警！ </span></div>',1)),m("button",{class:"btn",style:{padding:"2px 7px"},onClick:R[32]||(R[32]=j=>l.visible=!1)},"✕")]),m("div",Ny,[R[89]||(R[89]=m("div",{class:"device-lost-alert-banner"},[m("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 测试过程中仪器突然停止响应指令或连接中断！ "),m("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，仪器输出已安全保护切断。 ")],-1)),m("div",Oy,[m("div",Fy,[R[85]||(R[85]=m("span",{class:"info-label"},"未响应仪器:",-1)),m("span",By,yt(l.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+yt(l.deviceName),1)]),m("div",zy,[R[86]||(R[86]=m("span",{class:"info-label"},"异常详情:",-1)),m("span",Vy,yt(l.reason),1)]),m("div",ky,[R[87]||(R[87]=m("span",{class:"info-label"},"测试进度:",-1)),m("span",Hy,"已完成 "+yt(U.value)+" / "+yt(S.value.length)+" 点 (当前步已挂起)",1)]),m("div",Gy,[R[88]||(R[88]=m("span",{class:"info-label"},"发生时间:",-1)),m("span",Wy,yt(l.timestamp),1)])]),R[90]||(R[90]=m("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查仪器面板状态、USB 串口线连接或仪器供电。排除故障后可点击【重试并恢复测试】继续执行；亦可切换为仿真模式或终止并保存数据。 ",-1))]),m("div",$y,[m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:xt}," ▶ 重试并恢复测试 "),m("button",{class:"btn",style:{"font-weight":"bold","border-color":"#4a5568"},onClick:at}," ⚙ 重新连接串口硬件 "),m("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:W}," 🧪 切换仿真模式继续 "),m("button",{class:"btn btn-danger",onClick:z}," 💾 终止测试并保存已测结果 "),m("button",{class:"btn",onClick:R[33]||(R[33]=j=>l.visible=!1)}," 保持暂停 ")])])])):Te("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",Ks={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qy=0,Cd=1,jy=2,dp=1,Yy=2,fi=3,Yi=0,cn=1,xi=2,$i=0,Zs=1,Rd=2,Pd=3,Ld=4,Ky=5,cs=100,Zy=101,Jy=102,Qy=103,tb=104,eb=200,nb=201,ib=202,sb=203,ec=204,nc=205,rb=206,ob=207,ab=208,lb=209,cb=210,ub=211,db=212,fb=213,hb=214,ic=0,sc=1,rc=2,sr=3,oc=4,ac=5,lc=6,cc=7,fp=0,pb=1,mb=2,Si=0,gb=1,_b=2,vb=3,xb=4,yb=5,bb=6,Mb=7,hp=300,rr=301,or=302,uc=303,dc=304,Fa=306,fc=1e3,ps=1001,hc=1002,Bn=1003,Sb=1004,go=1005,In=1006,sl=1007,ms=1008,Ti=1009,pp=1010,mp=1011,Jr=1012,pu=1013,xs=1014,bi=1015,no=1016,mu=1017,gu=1018,ar=1020,gp=35902,_p=1021,vp=1022,Un=1023,xp=1024,yp=1025,Js=1026,lr=1027,bp=1028,_u=1029,Mp=1030,vu=1031,xu=1033,Zo=33776,Jo=33777,Qo=33778,ta=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,yc=37496,bc=37808,Mc=37809,Sc=37810,Ec=37811,wc=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Pc=37817,Lc=37818,Dc=37819,Ic=37820,Uc=37821,ea=36492,Nc=36494,Oc=36495,Sp=36283,Fc=36284,Bc=36285,zc=36286,Eb=3200,wb=3201,Ep=0,Tb=1,Hi="",yn="srgb",fr="srgb-linear",Ba="linear",ge="srgb",Ts=7680,Dd=519,Ab=512,Cb=513,Rb=514,wp=515,Pb=516,Lb=517,Db=518,Ib=519,Vc=35044,Id="300 es",Mi=2e3,ma=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,kc=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Ub(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nb={DEG2RAD:Hr};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=s[0],g=s[3],h=s[6],D=s[1],P=s[4],S=s[7],q=s[2],F=s[5],O=s[8];return r[0]=o*_+a*D+l*q,r[3]=o*g+a*P+l*F,r[6]=o*h+a*S+l*O,r[1]=c*_+u*D+d*q,r[4]=c*g+u*P+d*F,r[7]=c*h+u*S+d*O,r[2]=f*_+p*D+v*q,r[5]=f*g+p*P+v*F,r[8]=f*h+p*S+v*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,v=e*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new te;function Tp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ob(){const n=ga("canvas");return n.style.display="block",n}const Ud={};function Dr(n){n in Ud||(Ud[n]=!0,console.warn(n))}function Fb(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bb(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zb(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=Qs(n.r),n.g=Qs(n.g),n.b=Qs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nd=[.64,.33,.3,.6,.15,.06],Od=[.2126,.7152,.0722],Fd=[.3127,.329],Bd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[fr]:{primaries:Nd,whitePoint:Fd,transfer:Ba,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:Nd,whitePoint:Fd,transfer:ge,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}});let As;class Vb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=ga("canvas")),As.width=t.width,As.height=t.height;const i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kb=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hb=0;class sn extends Ms{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ps,s=ps,r=In,o=ms,a=Un,l=Ti,c=sn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Xi(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fc:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fc:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=hp;sn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(c+1)/2,S=(p+1)/2,q=(h+1)/2,F=(u+f)/4,O=(d+_)/4,U=(v+g)/4;return P>S&&P>q?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=F/i,r=O/i):S>q?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=F/s,r=U/s):q<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(q),i=O/r,s=U/r),this.set(i,s,r,e),this}let D=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(D)<.001&&(D=1),this.x=(g-v)/D,this.y=(d-_)/D,this.z=(f-u)/D,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gb extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends Gb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cp extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wb extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let g=1-a;const h=l*f+c*p+u*v+d*_,D=h>=0?1:-1,P=1-h*h;if(P>Number.EPSILON){const q=Math.sqrt(P),F=Math.atan2(q,h*D);g=Math.sin(g*F)/q,a=Math.sin(a*F)/q}const S=a*D;if(l=l*g+f*S,c=c*g+p*S,u=u*g+v*S,d=d*g+_*S,g===1-a){const q=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=q,c*=q,u*=q,d*=q}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+u*d+l*p-c*f,t[e+1]=l*v+u*f+c*d-a*p,t[e+2]=c*v+u*p+a*f-l*d,t[e+3]=u*v-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,i=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new tt,Vd=new bs;class io{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_o.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(t.matrixWorld),this.union(_o)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),vo.subVectors(this.max,Mr),Cs.subVectors(t.a,Mr),Rs.subVectors(t.b,Mr),Ps.subVectors(t.c,Mr),Di.subVectors(Rs,Cs),Ii.subVectors(Ps,Rs),ts.subVectors(Cs,Ps);let e=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-ts.z,ts.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,ts.z,0,-ts.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-ts.y,ts.x,0];return!cl(e,Cs,Rs,Ps,vo)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Cs,Rs,Ps,vo))?!1:(xo.crossVectors(Di,Ii),e=[xo.x,xo.y,xo.z],cl(e,Cs,Rs,Ps,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ai=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],Rn=new tt,_o=new io,Cs=new tt,Rs=new tt,Ps=new tt,Di=new tt,Ii=new tt,ts=new tt,Mr=new tt,vo=new tt,xo=new tt,es=new tt;function cl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $b=new io,Sr=new tt,ul=new tt;class za{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$b.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(ul)),this.expandByPoint(Sr.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new tt,dl=new tt,yo=new tt,Ui=new tt,fl=new tt,bo=new tt,hl=new tt;class Va{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),yo.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(yo),a=Ui.dot(this.direction),l=-Ui.dot(yo),c=Ui.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dl).addScaledVector(yo,f),p}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),bo.subVectors(i,t),hl.crossVectors(fl,bo);let o=this.direction.dot(hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);const l=a*this.direction.dot(bo.crossVectors(Ui,bo));if(l<0)return null;const c=a*this.direction.dot(fl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(hl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f+_*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=v*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=v*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+v,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xb,t,qb)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ni.crossVectors(i,dn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ni.crossVectors(i,dn)),Ni.normalize(),Mo.crossVectors(dn,Ni),s[0]=Ni.x,s[4]=Mo.x,s[8]=dn.x,s[1]=Ni.y,s[5]=Mo.y,s[9]=dn.y,s[2]=Ni.z,s[6]=Mo.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],g=i[10],h=i[14],D=i[3],P=i[7],S=i[11],q=i[15],F=s[0],O=s[4],U=s[8],M=s[12],E=s[1],w=s[5],ot=s[9],rt=s[13],at=s[2],xt=s[6],W=s[10],z=s[14],X=s[3],dt=s[7],N=s[11],I=s[15];return r[0]=o*F+a*E+l*at+c*X,r[4]=o*O+a*w+l*xt+c*dt,r[8]=o*U+a*ot+l*W+c*N,r[12]=o*M+a*rt+l*z+c*I,r[1]=u*F+d*E+f*at+p*X,r[5]=u*O+d*w+f*xt+p*dt,r[9]=u*U+d*ot+f*W+p*N,r[13]=u*M+d*rt+f*z+p*I,r[2]=v*F+_*E+g*at+h*X,r[6]=v*O+_*w+g*xt+h*dt,r[10]=v*U+_*ot+g*W+h*N,r[14]=v*M+_*rt+g*z+h*I,r[3]=D*F+P*E+S*at+q*X,r[7]=D*O+P*w+S*xt+q*dt,r[11]=D*U+P*ot+S*W+q*N,r[15]=D*M+P*rt+S*z+q*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],v=t[3],_=t[7],g=t[11],h=t[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],v=t[12],_=t[13],g=t[14],h=t[15],D=d*g*c-_*f*c+_*l*p-a*g*p-d*l*h+a*f*h,P=v*f*c-u*g*c-v*l*p+o*g*p+u*l*h-o*f*h,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,q=v*d*l-u*_*l-v*a*f+o*_*f+u*a*g-o*d*g,F=e*D+i*P+s*S+r*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=D*O,t[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*h-i*f*h)*O,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*h+i*l*h)*O,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*O,t[4]=P*O,t[5]=(u*g*r-v*f*r+v*s*p-e*g*p-u*s*h+e*f*h)*O,t[6]=(v*l*r-o*g*r-v*s*c+e*g*c+o*s*h-e*l*h)*O,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*O,t[8]=S*O,t[9]=(v*d*r-u*_*r-v*i*p+e*_*p+u*i*h-e*d*h)*O,t[10]=(o*_*r-v*a*r+v*i*c-e*_*c-o*i*h+e*a*h)*O,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*O,t[12]=q*O,t[13]=(u*_*s-v*d*s+v*i*f-e*_*f-u*i*g+e*d*g)*O,t[14]=(v*a*s-o*_*s-v*i*l+e*_*l+o*i*g-e*a*g)*O,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,v=r*d,_=o*u,g=o*d,h=a*d,D=l*c,P=l*u,S=l*d,q=i.x,F=i.y,O=i.z;return s[0]=(1-(_+h))*q,s[1]=(p+S)*q,s[2]=(v-P)*q,s[3]=0,s[4]=(p-S)*F,s[5]=(1-(f+h))*F,s[6]=(g+D)*F,s[7]=0,s[8]=(v+P)*O,s[9]=(g-D)*O,s[10]=(1-(f+_))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,u=1/o,d=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Mi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,v;if(a===Mi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ma)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Mi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u;let v,_;if(a===Mi)v=(o+r)*d,_=-2*d;else if(a===ma)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ls=new tt,Pn=new Ee,Xb=new tt(0,0,0),qb=new tt(1,1,1),Ni=new tt,Mo=new tt,dn=new tt,kd=new Ee,Hd=new bs;class ii{constructor(t=0,e=0,i=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jb=0;const Gd=new tt,Ds=new bs,ci=new Ee,So=new tt,Er=new tt,Yb=new tt,Kb=new bs,Wd=new tt(1,0,0),$d=new tt(0,1,0),Xd=new tt(0,0,1),qd={type:"added"},Zb={type:"removed"},Is={type:"childadded",child:null},pl={type:"childremoved",child:null};class Ve extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new tt,e=new ii,i=new bs,s=new tt(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ee},normalMatrix:{value:new te}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?So.copy(t):So.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Er,So,this.up):ci.lookAt(So,Er,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ci),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zb),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Yb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new tt(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new tt,ui=new tt,ml=new tt,di=new tt,Us=new tt,Ns=new tt,jd=new tt,gl=new tt,_l=new tt,vl=new tt,xl=new Ce,yl=new Ce,bl=new Ce;class pn{constructor(t=new tt,e=new tt,i=new tt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ui.subVectors(i,e),ml.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot(ml),c=ui.dot(ui),u=ui.dot(ml),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return xl.setScalar(0),yl.setScalar(0),bl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ui.subVectors(t,e),Ln.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Ns.subVectors(r,i),gl.subVectors(t,i);const l=Us.dot(gl),c=Ns.dot(gl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,s);const u=Us.dot(_l),d=Ns.dot(_l);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Us,o);vl.subVectors(t,r);const p=Us.dot(vl),v=Ns.dot(vl);if(v>=0&&p<=v)return e.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ns,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return jd.subVectors(r,s),a=(d-u)/(d-u+(p-v)),e.copy(s).addScaledVector(jd,a);const h=1/(g+_+f);return o=_*h,a=f*h,e.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Ub(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const i=Rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(tn($e.r*255,0,255))*65536+Math.round(tn($e.g*255,0,255))*256+Math.round(tn($e.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=yn){oe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(Eo);const i=rl(Oi.h,Eo.h,e),s=rl(Oi.s,Eo.s,e),r=rl(Oi.l,Eo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new qt;qt.NAMES=Rp;let Jb=0;class Ss extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=Xi(),this.name="",this.blending=Zs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pp extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new tt,wo=new $t;class zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wo.fromBufferAttribute(this,e),wo.applyMatrix3(t),this.setXY(e,wo.x,wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}}class Lp extends zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dp extends zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class En extends zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Qb=0;const xn=new Ee,Sl=new Ve,Os=new tt,fn=new io,wr=new io,Fe=new tt;class en extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Dp:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(fn.min,wr.min),fn.expandByPoint(Fe),Fe.addVectors(fn.max,wr.max),fn.expandByPoint(Fe)):(fn.expandByPoint(wr.min),fn.expandByPoint(wr.max))}fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),Fe.add(Os)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new tt,l[U]=new tt;const c=new tt,u=new tt,d=new tt,f=new $t,p=new $t,v=new $t,_=new tt,g=new tt;function h(U,M,E){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,E),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(w),a[U].add(_),a[M].add(_),a[E].add(_),l[U].add(g),l[M].add(g),l[E].add(g))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let U=0,M=D.length;U<M;++U){const E=D[U],w=E.start,ot=E.count;for(let rt=w,at=w+ot;rt<at;rt+=3)h(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const P=new tt,S=new tt,q=new tt,F=new tt;function O(U){q.fromBufferAttribute(s,U),F.copy(q);const M=a[U];P.copy(M),P.sub(q.multiplyScalar(q.dot(M))).normalize(),S.crossVectors(F,M);const w=S.dot(l[U])<0?-1:1;o.setXYZW(U,P.x,P.y,P.z,w)}for(let U=0,M=D.length;U<M;++U){const E=D[U],w=E.start,ot=E.count;for(let rt=w,at=w+ot;rt<at;rt+=3)O(t.getX(rt+0)),O(t.getX(rt+1)),O(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new tt,r=new tt,o=new tt,a=new tt,l=new tt,c=new tt,u=new tt,d=new tt;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new zn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new Ee,ns=new Va,To=new za,Kd=new tt,Ao=new tt,Co=new tt,Ro=new tt,El=new tt,Po=new tt,Zd=new tt,Lo=new tt;class Nn extends Ve{constructor(t=new en,e=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(El.fromBufferAttribute(d,t),o?Po.addScaledVector(El,u):Po.addScaledVector(El.sub(e),u))}e.add(Po)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),To.copy(i.boundingSphere),To.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(To.containsPoint(ns.origin)===!1&&(ns.intersectSphere(To,Kd)===null||ns.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(Yd.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],D=Math.max(g.start,p.start),P=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=D,q=P;S<q;S+=3){const F=a.getX(S),O=a.getX(S+1),U=a.getX(S+2);s=Do(this,h,t,i,c,u,d,F,O,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const D=a.getX(g),P=a.getX(g+1),S=a.getX(g+2);s=Do(this,o,t,i,c,u,d,D,P,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],D=Math.max(g.start,p.start),P=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=D,q=P;S<q;S+=3){const F=S,O=S+1,U=S+2;s=Do(this,h,t,i,c,u,d,F,O,U),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const D=g,P=g+1,S=g+2;s=Do(this,o,t,i,c,u,d,D,P,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function tM(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;Lo.copy(a),Lo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Lo);return c<e.near||c>e.far?null:{distance:c,point:Lo.clone(),object:n}}function Do(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Ao),n.getVertexPosition(l,Co),n.getVertexPosition(c,Ro);const u=tM(n,t,e,i,Ao,Co,Ro,Zd);if(u){const d=new tt;pn.getBarycoord(Zd,Ao,Co,Ro,d),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,d,new $t)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,d,new $t)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,d,new tt),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new tt,materialIndex:0};pn.getNormal(Ao,Co,Ro,f.normal),u.face=f,u.barycoord=d}return u}class hr extends en{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(d,2));function v(_,g,h,D,P,S,q,F,O,U,M){const E=S/O,w=q/U,ot=S/2,rt=q/2,at=F/2,xt=O+1,W=U+1;let z=0,X=0;const dt=new tt;for(let N=0;N<W;N++){const I=N*w-rt;for(let ft=0;ft<xt;ft++){const K=ft*E-ot;dt[_]=K*D,dt[g]=I*P,dt[h]=at,c.push(dt.x,dt.y,dt.z),dt[_]=0,dt[g]=0,dt[h]=F>0?1:-1,u.push(dt.x,dt.y,dt.z),d.push(ft/O),d.push(1-N/U),z+=1}}for(let N=0;N<U;N++)for(let I=0;I<O;I++){const ft=f+I+xt*N,K=f+I+xt*(N+1),L=f+(I+1)+xt*(N+1),nt=f+(I+1)+xt*N;l.push(ft,K,nt),l.push(K,L,nt),X+=6}a.addGroup(p,X,M),p+=X,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=cr(n[e]);for(const s in i)t[s]=i[s]}return t}function eM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ip(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const nM={clone:cr,merge:Ze};var iM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=eM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Up extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new tt,Jd=new $t,Qd=new $t;class bn extends Up{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Bs=1;class rM extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new bn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);const o=new bn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new bn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new bn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new bn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Np extends sn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:rr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oM extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Np(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new hr(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});r.uniforms.tEquirect.value=e;const o=new Nn(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=In),new rM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new tt,aM=new tt,lM=new te;class ki{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(aM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||lM.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new za,Io=new tt;class bu{constructor(t=new ki,e=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],_=s[10],g=s[11],h=s[12],D=s[13],P=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,g-p,S-h).normalize(),i[1].setComponents(l+r,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+v,S+D).normalize(),i[3].setComponents(l-o,f-u,g-v,S-D).normalize(),i[4].setComponents(l-a,f-d,g-_,S-P).normalize(),e===Mi)i[5].setComponents(l+a,f+d,g+_,S+P).normalize();else if(e===ma)i[5].setComponents(a,d,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class so extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],v=[],_=[],g=[];for(let h=0;h<u;h++){const D=h*f-o;for(let P=0;P<c;P++){const S=P*d-r;v.push(S,-D,0),_.push(0,0,1),g.push(P/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let D=0;D<a;D++){const P=D+c*h,S=D+c*(h+1),q=D+1+c*(h+1),F=D+1+c*h;p.push(P,S,F),p.push(S,q,F)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
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
#endif`,xM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,SM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,LM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IM=`#define PI 3.141592653589793
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
} // validated`,UM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VM="gl_FragColor = linearToOutputTexel( gl_FragColor );",kM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,JM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e1=`uniform bool receiveShadow;
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
#endif`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a1=`PhysicalMaterial material;
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
#endif`,l1=`struct PhysicalMaterial {
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
}`,c1=`
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
#endif`,u1=`#if defined( RE_IndirectDiffuse )
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
#endif`,d1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x1=`#if defined( USE_POINTS_UV )
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
#endif`,y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,M1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,S1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,T1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,C1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,R1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,F1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,k1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,X1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j1=`float getShadowMask() {
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
}`,Y1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,J1=`#ifdef USE_SKINNING
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
#endif`,Q1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,_S=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,ES=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,RS=`#define NORMAL
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
}`,PS=`#define NORMAL
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
}`,LS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,IS=`#define STANDARD
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
}`,US=`#define STANDARD
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
}`,NS=`#define TOON
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
}`,OS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,BS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,VS=`uniform vec3 color;
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
}`,kS=`uniform float rotation;
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
}`,HS=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:uM,alphahash_pars_fragment:dM,alphamap_fragment:fM,alphamap_pars_fragment:hM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:_M,batching_pars_vertex:vM,batching_vertex:xM,begin_vertex:yM,beginnormal_vertex:bM,bsdfs:MM,iridescence_fragment:SM,bumpmap_pars_fragment:EM,clipping_planes_fragment:wM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:AM,clipping_planes_vertex:CM,color_fragment:RM,color_pars_fragment:PM,color_pars_vertex:LM,color_vertex:DM,common:IM,cube_uv_reflection_fragment:UM,defaultnormal_vertex:NM,displacementmap_pars_vertex:OM,displacementmap_vertex:FM,emissivemap_fragment:BM,emissivemap_pars_fragment:zM,colorspace_fragment:VM,colorspace_pars_fragment:kM,envmap_fragment:HM,envmap_common_pars_fragment:GM,envmap_pars_fragment:WM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:n1,envmap_vertex:XM,fog_vertex:qM,fog_pars_vertex:jM,fog_fragment:YM,fog_pars_fragment:KM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:JM,lights_lambert_fragment:QM,lights_lambert_pars_fragment:t1,lights_pars_begin:e1,lights_toon_fragment:i1,lights_toon_pars_fragment:s1,lights_phong_fragment:r1,lights_phong_pars_fragment:o1,lights_physical_fragment:a1,lights_physical_pars_fragment:l1,lights_fragment_begin:c1,lights_fragment_maps:u1,lights_fragment_end:d1,logdepthbuf_fragment:f1,logdepthbuf_pars_fragment:h1,logdepthbuf_pars_vertex:p1,logdepthbuf_vertex:m1,map_fragment:g1,map_pars_fragment:_1,map_particle_fragment:v1,map_particle_pars_fragment:x1,metalnessmap_fragment:y1,metalnessmap_pars_fragment:b1,morphinstance_vertex:M1,morphcolor_vertex:S1,morphnormal_vertex:E1,morphtarget_pars_vertex:w1,morphtarget_vertex:T1,normal_fragment_begin:A1,normal_fragment_maps:C1,normal_pars_fragment:R1,normal_pars_vertex:P1,normal_vertex:L1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:U1,clearcoat_pars_fragment:N1,iridescence_pars_fragment:O1,opaque_fragment:F1,packing:B1,premultiplied_alpha_fragment:z1,project_vertex:V1,dithering_fragment:k1,dithering_pars_fragment:H1,roughnessmap_fragment:G1,roughnessmap_pars_fragment:W1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:X1,shadowmap_vertex:q1,shadowmask_pars_fragment:j1,skinbase_vertex:Y1,skinning_pars_vertex:K1,skinning_vertex:Z1,skinnormal_vertex:J1,specularmap_fragment:Q1,specularmap_pars_fragment:tS,tonemapping_fragment:eS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:sS,uv_pars_fragment:rS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:xS,equirect_frag:yS,linedashed_vert:bS,linedashed_frag:MS,meshbasic_vert:SS,meshbasic_frag:ES,meshlambert_vert:wS,meshlambert_frag:TS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:IS,meshphysical_frag:US,meshtoon_vert:NS,meshtoon_frag:OS,points_vert:FS,points_frag:BS,shadow_vert:zS,shadow_frag:VS,sprite_vert:kS,sprite_frag:HS},Lt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Yn={basic:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ze([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ze([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ze([Lt.points,Lt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ze([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ze([Lt.common,Lt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ze([Lt.sprite,Lt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ze([Lt.common,Lt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ze([Lt.lights,Lt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Yn.physical={uniforms:Ze([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Uo={r:0,b:0,g:0},ss=new ii,GS=new Ee;function WS(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function v(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?e:t).get(P)),P}function _(D){let P=!1;const S=v(D);S===null?h(a,l):S&&S.isColor&&(h(S,1),P=!0);const q=n.xr.getEnvironmentBlendMode();q==="additive"?i.buffers.color.setClear(0,0,0,1,o):q==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(D,P){const S=v(P);S&&(S.isCubeTexture||S.mapping===Fa)?(u===void 0&&(u=new Nn(new hr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:cr(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(q,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(P.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(ss)),u.material.toneMapped=oe.getTransfer(S.colorSpace)!==ge,(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nn(new so(2,2),new Ki({name:"BackgroundMaterial",uniforms:cr(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=oe.getTransfer(S.colorSpace)!==ge,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function h(D,P){D.getRGB(Uo,Ip(n)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,P,o)}return{getClearColor:function(){return a},setClearColor:function(D,P=1){a.set(D),l=P,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,h(a,l)},render:_,addToRenderList:g}}function $S(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,w,ot,rt,at){let xt=!1;const W=d(rt,ot,w);r!==W&&(r=W,c(r.object)),xt=p(E,rt,ot,at),xt&&v(E,rt,ot,at),at!==null&&t.update(at,n.ELEMENT_ARRAY_BUFFER),(xt||o)&&(o=!1,S(E,w,ot,rt),at!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(at).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,w,ot){const rt=ot.wireframe===!0;let at=i[E.id];at===void 0&&(at={},i[E.id]=at);let xt=at[w.id];xt===void 0&&(xt={},at[w.id]=xt);let W=xt[rt];return W===void 0&&(W=f(l()),xt[rt]=W),W}function f(E){const w=[],ot=[],rt=[];for(let at=0;at<e;at++)w[at]=0,ot[at]=0,rt[at]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:ot,attributeDivisors:rt,object:E,attributes:{},index:null}}function p(E,w,ot,rt){const at=r.attributes,xt=w.attributes;let W=0;const z=ot.getAttributes();for(const X in z)if(z[X].location>=0){const N=at[X];let I=xt[X];if(I===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),N===void 0||N.attribute!==I||I&&N.data!==I.data)return!0;W++}return r.attributesNum!==W||r.index!==rt}function v(E,w,ot,rt){const at={},xt=w.attributes;let W=0;const z=ot.getAttributes();for(const X in z)if(z[X].location>=0){let N=xt[X];N===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(N=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(N=E.instanceColor));const I={};I.attribute=N,N&&N.data&&(I.data=N.data),at[X]=I,W++}r.attributes=at,r.attributesNum=W,r.index=rt}function _(){const E=r.newAttributes;for(let w=0,ot=E.length;w<ot;w++)E[w]=0}function g(E){h(E,0)}function h(E,w){const ot=r.newAttributes,rt=r.enabledAttributes,at=r.attributeDivisors;ot[E]=1,rt[E]===0&&(n.enableVertexAttribArray(E),rt[E]=1),at[E]!==w&&(n.vertexAttribDivisor(E,w),at[E]=w)}function D(){const E=r.newAttributes,w=r.enabledAttributes;for(let ot=0,rt=w.length;ot<rt;ot++)w[ot]!==E[ot]&&(n.disableVertexAttribArray(ot),w[ot]=0)}function P(E,w,ot,rt,at,xt,W){W===!0?n.vertexAttribIPointer(E,w,ot,at,xt):n.vertexAttribPointer(E,w,ot,rt,at,xt)}function S(E,w,ot,rt){_();const at=rt.attributes,xt=ot.getAttributes(),W=w.defaultAttributeValues;for(const z in xt){const X=xt[z];if(X.location>=0){let dt=at[z];if(dt===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(dt=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(dt=E.instanceColor)),dt!==void 0){const N=dt.normalized,I=dt.itemSize,ft=t.get(dt);if(ft===void 0)continue;const K=ft.buffer,L=ft.type,nt=ft.bytesPerElement,ht=L===n.INT||L===n.UNSIGNED_INT||dt.gpuType===pu;if(dt.isInterleavedBufferAttribute){const B=dt.data,$=B.stride,Y=dt.offset;if(B.isInstancedInterleavedBuffer){for(let ut=0;ut<X.locationSize;ut++)h(X.location+ut,B.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ut=0;ut<X.locationSize;ut++)g(X.location+ut);n.bindBuffer(n.ARRAY_BUFFER,K);for(let ut=0;ut<X.locationSize;ut++)P(X.location+ut,I/X.locationSize,L,N,$*nt,(Y+I/X.locationSize*ut)*nt,ht)}else{if(dt.isInstancedBufferAttribute){for(let B=0;B<X.locationSize;B++)h(X.location+B,dt.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let B=0;B<X.locationSize;B++)g(X.location+B);n.bindBuffer(n.ARRAY_BUFFER,K);for(let B=0;B<X.locationSize;B++)P(X.location+B,I/X.locationSize,L,N,I*nt,I/X.locationSize*B*nt,ht)}}else if(W!==void 0){const N=W[z];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(X.location,N);break;case 3:n.vertexAttrib3fv(X.location,N);break;case 4:n.vertexAttrib4fv(X.location,N);break;default:n.vertexAttrib1fv(X.location,N)}}}}D()}function q(){U();for(const E in i){const w=i[E];for(const ot in w){const rt=w[ot];for(const at in rt)u(rt[at].object),delete rt[at];delete w[ot]}delete i[E]}}function F(E){if(i[E.id]===void 0)return;const w=i[E.id];for(const ot in w){const rt=w[ot];for(const at in rt)u(rt[at].object),delete rt[at];delete w[ot]}delete i[E.id]}function O(E){for(const w in i){const ot=i[w];if(ot[E.id]===void 0)continue;const rt=ot[E.id];for(const at in rt)u(rt[at].object),delete rt[at];delete ot[E.id]}}function U(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:M,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:g,disableUnusedAttributes:D}}function XS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Un&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const U=O===no&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ti&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!U)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),q=v>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:S,vertexTextures:q,maxSamples:F}}function jS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ki,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const D=r?0:i,P=D*4;let S=h.clippingState||null;l.value=S,S=u(v,f,P,p);for(let q=0;q!==P;++q)S[q]=e[q];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=D}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const h=p+_*4,D=f.matrixWorldInverse;a.getNormalMatrix(D),(g===null||g.length<h)&&(g=new Float32Array(h));for(let P=0,S=p;P!==_;++P,S+=4)o.copy(d[P]).applyMatrix4(D,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function YS(n){let t=new WeakMap;function e(o,a){return a===uc?o.mapping=rr:a===dc&&(o.mapping=or),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===dc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new oM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Fp extends Up{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,tf=[.125,.215,.35,.446,.526,.582],us=20,Tl=new Fp,ef=new qt;let Al=null,Cl=0,Rl=0,Pl=!1;const as=(1+Math.sqrt(5))/2,zs=1/as,nf=[new tt(-as,zs,0),new tt(as,zs,0),new tt(-zs,0,as),new tt(zs,0,as),new tt(0,as,-zs),new tt(0,as,zs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===rr||t.mapping===or?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:no,format:Un,colorSpace:fr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(r)),this._blurMaterial=ZS(r,t,e)}return s}_compileMaterial(t){const e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,s){const a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ef),u.toneMapping=Si,u.autoClear=!1;const p=new Pp({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new Nn(new hr,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(ef),_=!0);for(let h=0;h<6;h++){const D=h%3;D===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):D===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const P=this._cubeSize;No(s,D*P,h>2?P:0,P,P),u.setRenderTarget(s),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===rr||t.mapping===or;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;No(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Tl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),_=r/v,g=isFinite(r)?1+Math.floor(u*_):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const h=[];let D=0;for(let O=0;O<us;++O){const U=O/_,M=Math.exp(-U*U/2);h.push(M),O===0?D+=M:O<g&&(D+=2*M)}for(let O=0;O<h.length;O++)h[O]=h[O]/D;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:P}=this;f.dTheta.value=v,f.mipInt.value=P-i;const S=this._sizeLods[s],q=3*S*(s>P-qs?s-P+qs:0),F=4*(this._cubeSize-S);No(e,q,F,3*S,2*S),l.setRenderTarget(e),l.render(d,Tl)}}function KS(n){const t=[],e=[],i=[];let s=n;const r=n-qs+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qs?l=tf[o-n+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,g=2,h=1,D=new Float32Array(_*v*p),P=new Float32Array(g*v*p),S=new Float32Array(h*v*p);for(let F=0;F<p;F++){const O=F%3*2/3-1,U=F>2?0:-1,M=[O,U,0,O+2/3,U,0,O+2/3,U+1,0,O,U,0,O+2/3,U+1,0,O,U+1,0];D.set(M,_*v*F),P.set(f,g*v*F);const E=[F,F,F,F,F,F];S.set(E,h*v*F)}const q=new en;q.setAttribute("position",new zn(D,_)),q.setAttribute("uv",new zn(P,g)),q.setAttribute("faceIndex",new zn(S,h)),t.push(q),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){const i=new ys(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ZS(n,t,e){const i=new Float32Array(us),s=new tt(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function of(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function af(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Mu(){return`

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
	`}function JS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uc||l===dc,u=l===rr||l===or;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function QS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,h=_.length;g<h;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let g=0,h=_.length;g<h;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const D=p.array;_=p.version;for(let P=0,S=D.length;P<S;P+=3){const q=D[P+0],F=D[P+1],O=D[P+2];f.push(q,F,F,O,O,q)}}else if(v!==void 0){const D=v.array;_=v.version;for(let P=0,S=D.length/3-1;P<S;P+=3){const q=P+0,F=P+1,O=P+2;f.push(q,F,F,O,O,q)}}else return;const g=new(Tp(f)?Dp:Lp)(f,1);g.version=_;const h=r.get(d);h&&t.remove(h),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,f*o,v),e.update(p,i,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];e.update(g,i,1)}function d(f,p,v,_){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,v);let h=0;for(let D=0;D<v;D++)h+=p[D]*_[D];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function iE(n,t,e){const i=new WeakMap,s=new Ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let q=a.attributes.position.count*S,F=1;q>t.maxTextureSize&&(F=Math.ceil(q/t.maxTextureSize),q=t.maxTextureSize);const O=new Float32Array(q*F*4*d),U=new Cp(O,q,F,d);U.type=bi,U.needsUpdate=!0;const M=S*4;for(let w=0;w<d;w++){const ot=h[w],rt=D[w],at=P[w],xt=q*F*4*w;for(let W=0;W<ot.count;W++){const z=W*M;v===!0&&(s.fromBufferAttribute(ot,W),O[xt+z+0]=s.x,O[xt+z+1]=s.y,O[xt+z+2]=s.z,O[xt+z+3]=0),_===!0&&(s.fromBufferAttribute(rt,W),O[xt+z+4]=s.x,O[xt+z+5]=s.y,O[xt+z+6]=s.z,O[xt+z+7]=0),g===!0&&(s.fromBufferAttribute(at,W),O[xt+z+8]=s.x,O[xt+z+9]=s.y,O[xt+z+10]=s.z,O[xt+z+11]=at.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new $t(q,F)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function sE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bp extends sn{constructor(t,e,i,s,r,o,a,l,c,u=Js){if(u!==Js&&u!==lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Js&&(i=xs),i===void 0&&u===lr&&(i=ar),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zp=new sn,lf=new Bp(1,1),Vp=new Cp,kp=new Wb,Hp=new Np,cf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function pr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function aE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function lE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function cE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Oe(e,i)}}function uE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Oe(e,i)}}function dE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;df.set(i),n.uniformMatrix4fv(this.addr,!1,df),Oe(e,i)}}function fE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function pE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function gE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function vE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function xE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function yE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=wp,r=lf):r=zp,e.setTexture2D(t||r,s)}function bE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kp,s)}function ME(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hp,s)}function SE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function EE(n){switch(n){case 5126:return rE;case 35664:return oE;case 35665:return aE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return dE;case 5124:case 35670:return fE;case 35667:case 35671:return hE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return _E;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return SE}}function wE(n,t){n.uniform1fv(this.addr,t)}function TE(n,t){const e=pr(t,this.size,2);n.uniform2fv(this.addr,e)}function AE(n,t){const e=pr(t,this.size,3);n.uniform3fv(this.addr,e)}function CE(n,t){const e=pr(t,this.size,4);n.uniform4fv(this.addr,e)}function RE(n,t){const e=pr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function PE(n,t){const e=pr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function LE(n,t){const e=pr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function DE(n,t){n.uniform1iv(this.addr,t)}function IE(n,t){n.uniform2iv(this.addr,t)}function UE(n,t){n.uniform3iv(this.addr,t)}function NE(n,t){n.uniform4iv(this.addr,t)}function OE(n,t){n.uniform1uiv(this.addr,t)}function FE(n,t){n.uniform2uiv(this.addr,t)}function BE(n,t){n.uniform3uiv(this.addr,t)}function zE(n,t){n.uniform4uiv(this.addr,t)}function VE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zp,r[o])}function kE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kp,r[o])}function HE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hp,r[o])}function GE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function WE(n){switch(n){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return IE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return OE;case 36294:return FE;case 36295:return BE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return GE}}class $E{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=EE(e.type)}}class XE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WE(e.type)}}class qE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function jE(n,t,e){const i=n.name,s=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pf(e,c===void 0?new $E(a,n,t):new XE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new qE(a),pf(e,d)),e=d}}}class na{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const YE=37297;let KE=0;function ZE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gf=new te;function JE(n){oe._getMatrix(gf,oe.workingColorSpace,n);const t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _f(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ZE(n.getShaderSource(t),o)}else return s}function QE(n,t){const e=JE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tw(n,t){let e;switch(t){case gb:e="Linear";break;case _b:e="Reinhard";break;case vb:e="Cineon";break;case xb:e="ACESFilmic";break;case bb:e="AgX";break;case Mb:e="Neutral";break;case yb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Oo=new tt;function ew(){oe.getLuminanceCoefficients(Oo);const n=Oo.x.toFixed(4),t=Oo.y.toFixed(4),e=Oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function iw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ir(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(n){return n.replace(rw,aw)}const ow=new Map;function aw(n,t){let e=ee[t];if(e===void 0){const i=ow.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hc(e)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(lw,cw)}function cw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function uw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function dw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case rr:case or:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case or:t="ENVMAP_MODE_REFRACTION";break}return t}function hw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:t="ENVMAP_BLENDING_MULTIPLY";break;case pb:t="ENVMAP_BLENDING_MIX";break;case mb:t="ENVMAP_BLENDING_ADD";break}return t}function pw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=uw(e),c=dw(e),u=fw(e),d=hw(e),f=pw(e),p=nw(e),v=iw(r),_=s.createProgram();let g,h,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),h.length>0&&(h+=`
`)):(g=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),h=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?ee.tonemapping_pars_fragment:"",e.toneMapping!==Si?tw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,QE("linearToOutputTexel",e.outputColorSpace),ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=Hc(o),o=vf(o,e),o=xf(o,e),a=Hc(a),a=vf(a,e),a=xf(a,e),o=yf(o),a=yf(a),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const P=D+g+o,S=D+h+a,q=mf(s,s.VERTEX_SHADER,P),F=mf(s,s.FRAGMENT_SHADER,S);s.attachShader(_,q),s.attachShader(_,F),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function O(w){if(n.debug.checkShaderErrors){const ot=s.getProgramInfoLog(_).trim(),rt=s.getShaderInfoLog(q).trim(),at=s.getShaderInfoLog(F).trim();let xt=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(xt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,q,F);else{const z=_f(s,q,"vertex"),X=_f(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+ot+`
`+z+`
`+X)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(rt===""||at==="")&&(W=!1);W&&(w.diagnostics={runnable:xt,programLog:ot,vertexShader:{log:rt,prefix:g},fragmentShader:{log:at,prefix:h}})}s.deleteShader(q),s.deleteShader(F),U=new na(s,_),M=sw(s,_)}let U;this.getUniforms=function(){return U===void 0&&O(this),U};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,YE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=q,this.fragmentShader=F,this}let gw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vw(t),e.set(t,i)),i}}class vw{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function xw(n,t,e,i,s,r,o){const a=new yu,l=new _w,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,w,ot,rt){const at=ot.fog,xt=rt.geometry,W=M.isMeshStandardMaterial?ot.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),X=z&&z.mapping===Fa?z.image.height:null,dt=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const N=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,I=N!==void 0?N.length:0;let ft=0;xt.morphAttributes.position!==void 0&&(ft=1),xt.morphAttributes.normal!==void 0&&(ft=2),xt.morphAttributes.color!==void 0&&(ft=3);let K,L,nt,ht;if(dt){const ae=Yn[dt];K=ae.vertexShader,L=ae.fragmentShader}else K=M.vertexShader,L=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),ht=l.getFragmentShaderID(M);const B=n.getRenderTarget(),$=n.state.buffers.depth.getReversed(),Y=rt.isInstancedMesh===!0,ut=rt.isBatchedMesh===!0,y=!!M.map,C=!!M.matcap,V=!!z,b=!!M.aoMap,it=!!M.lightMap,et=!!M.bumpMap,lt=!!M.normalMap,ct=!!M.displacementMap,Mt=!!M.emissiveMap,Q=!!M.metalnessMap,T=!!M.roughnessMap,x=M.anisotropy>0,k=M.clearcoat>0,st=M.dispersion>0,mt=M.iridescence>0,H=M.sheen>0,R=M.transmission>0,j=x&&!!M.anisotropyMap,vt=k&&!!M.clearcoatMap,bt=k&&!!M.clearcoatNormalMap,Et=k&&!!M.clearcoatRoughnessMap,Tt=mt&&!!M.iridescenceMap,Bt=mt&&!!M.iridescenceThicknessMap,Ut=H&&!!M.sheenColorMap,Ct=H&&!!M.sheenRoughnessMap,Zt=!!M.specularMap,Gt=!!M.specularColorMap,ie=!!M.specularIntensityMap,G=R&&!!M.transmissionMap,Rt=R&&!!M.thicknessMap,_t=!!M.gradientMap,St=!!M.alphaMap,Pt=M.alphaTest>0,wt=!!M.alphaHash,Ft=!!M.extensions;let se=Si;M.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(se=n.toneMapping);const ke={shaderID:dt,shaderType:M.type,shaderName:M.name,vertexShader:K,fragmentShader:L,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ut,batchingColor:ut&&rt._colorsTexture!==null,instancing:Y,instancingColor:Y&&rt.instanceColor!==null,instancingMorph:Y&&rt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:fr,alphaToCoverage:!!M.alphaToCoverage,map:y,matcap:C,envMap:V,envMapMode:V&&z.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:it,bumpMap:et,normalMap:lt,displacementMap:f&&ct,emissiveMap:Mt,normalMapObjectSpace:lt&&M.normalMapType===Tb,normalMapTangentSpace:lt&&M.normalMapType===Ep,metalnessMap:Q,roughnessMap:T,anisotropy:x,anisotropyMap:j,clearcoat:k,clearcoatMap:vt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Et,dispersion:st,iridescence:mt,iridescenceMap:Tt,iridescenceThicknessMap:Bt,sheen:H,sheenColorMap:Ut,sheenRoughnessMap:Ct,specularMap:Zt,specularColorMap:Gt,specularIntensityMap:ie,transmission:R,transmissionMap:G,thicknessMap:Rt,gradientMap:_t,opaque:M.transparent===!1&&M.blending===Zs&&M.alphaToCoverage===!1,alphaMap:St,alphaTest:Pt,alphaHash:wt,combine:M.combine,mapUv:y&&_(M.map.channel),aoMapUv:b&&_(M.aoMap.channel),lightMapUv:it&&_(M.lightMap.channel),bumpMapUv:et&&_(M.bumpMap.channel),normalMapUv:lt&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:Mt&&_(M.emissiveMap.channel),metalnessMapUv:Q&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:vt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:bt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:Zt&&_(M.specularMap.channel),specularColorMapUv:Gt&&_(M.specularColorMap.channel),specularIntensityMapUv:ie&&_(M.specularIntensityMap.channel),transmissionMapUv:G&&_(M.transmissionMap.channel),thicknessMapUv:Rt&&_(M.thicknessMap.channel),alphaMapUv:St&&_(M.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(lt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!xt.attributes.uv&&(y||St),fog:!!at,useFog:M.fog===!0,fogExp2:!!at&&at.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:$,skinning:rt.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ft,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:y&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:Mt&&M.emissiveMap.isVideoTexture===!0&&oe.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)E.push(w),E.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(D(E,M),P(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function D(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function P(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=v[M.type];let w;if(E){const ot=Yn[E];w=nM.clone(ot.uniforms)}else w=M.uniforms;return w}function q(M,E){let w;for(let ot=0,rt=u.length;ot<rt;ot++){const at=u[ot];if(at.cacheKey===E){w=at,++w.usedTimes;break}}return w===void 0&&(w=new mw(n,E,M,r),u.push(w)),w}function F(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function O(M){l.remove(M)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:q,releaseProgram:F,releaseShaderCache:O,programs:u,dispose:U}}function yw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,v,_,g){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=g),t++,h}function a(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||bw),i.length>1&&i.sort(f||Mf),s.length>1&&s.sort(f||Mf)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Mw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sf,n.set(i,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Sw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new qt};break;case"SpotLight":e={position:new tt,direction:new tt,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return n[t.id]=e,e}}}function Ew(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ww=0;function Tw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Aw(n){const t=new Sw,e=Ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new tt);const s=new tt,r=new Ee,o=new Ee;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,g=0,h=0,D=0,P=0,S=0,q=0,F=0,O=0;c.sort(Tw);for(let M=0,E=c.length;M<E;M++){const w=c[M],ot=w.color,rt=w.intensity,at=w.distance,xt=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=ot.r*rt,d+=ot.g*rt,f+=ot.b*rt;else if(w.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(w.sh.coefficients[W],rt);O++}else if(w.isDirectionalLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const z=w.shadow,X=e.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=xt,i.directionalShadowMatrix[p]=w.shadow.matrix,D++}i.directional[p]=W,p++}else if(w.isSpotLight){const W=t.get(w);W.position.setFromMatrixPosition(w.matrixWorld),W.color.copy(ot).multiplyScalar(rt),W.distance=at,W.coneCos=Math.cos(w.angle),W.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),W.decay=w.decay,i.spot[_]=W;const z=w.shadow;if(w.map&&(i.spotLightMap[q]=w.map,q++,z.updateMatrices(w),w.castShadow&&F++),i.spotLightMatrix[_]=z.matrix,w.castShadow){const X=e.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=xt,S++}_++}else if(w.isRectAreaLight){const W=t.get(w);W.color.copy(ot).multiplyScalar(rt),W.halfWidth.set(w.width*.5,0,0),W.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=W,g++}else if(w.isPointLight){const W=t.get(w);if(W.color.copy(w.color).multiplyScalar(w.intensity),W.distance=w.distance,W.decay=w.decay,w.castShadow){const z=w.shadow,X=e.get(w);X.shadowIntensity=z.intensity,X.shadowBias=z.bias,X.shadowNormalBias=z.normalBias,X.shadowRadius=z.radius,X.shadowMapSize=z.mapSize,X.shadowCameraNear=z.camera.near,X.shadowCameraFar=z.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=xt,i.pointShadowMatrix[v]=w.shadow.matrix,P++}i.point[v]=W,v++}else if(w.isHemisphereLight){const W=t.get(w);W.skyColor.copy(w.color).multiplyScalar(rt),W.groundColor.copy(w.groundColor).multiplyScalar(rt),i.hemi[h]=W,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==v||U.spotLength!==_||U.rectAreaLength!==g||U.hemiLength!==h||U.numDirectionalShadows!==D||U.numPointShadows!==P||U.numSpotShadows!==S||U.numSpotMaps!==q||U.numLightProbes!==O)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=S+q-F,i.spotLightMap.length=q,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=O,U.directionalLength=p,U.pointLength=v,U.spotLength=_,U.rectAreaLength=g,U.hemiLength=h,U.numDirectionalShadows=D,U.numPointShadows=P,U.numSpotShadows=S,U.numSpotMaps=q,U.numLightProbes=O,i.version=ww++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const g=u.matrixWorldInverse;for(let h=0,D=c.length;h<D;h++){const P=c[h];if(P.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(P.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(P.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(P.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(P.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(P.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(P.width*.5,0,0),S.halfHeight.set(0,P.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(P.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(P.matrixWorld),S.position.applyMatrix4(g),f++}else if(P.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(P.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ef(n){const t=new Aw(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(n),t.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Rw extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pw extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dw=`uniform sampler2D shadow_pass;
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
}`;function Iw(n,t,e){let i=new bu;const s=new $t,r=new $t,o=new Ce,a=new Rw({depthPacking:wb}),l=new Pw,c={},u=e.maxTextureSize,d={[Yi]:cn,[cn]:Yi,[xi]:xi},f=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Lw,fragmentShader:Dw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let h=this.type;this.render=function(F,O,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),ot=n.state;ot.setBlending($i),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const rt=h!==fi&&this.type===fi,at=h===fi&&this.type!==fi;for(let xt=0,W=F.length;xt<W;xt++){const z=F[xt],X=z.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const dt=X.getFrameExtents();if(s.multiply(dt),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/dt.x),s.x=r.x*dt.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/dt.y),s.y=r.y*dt.y,X.mapSize.y=r.y)),X.map===null||rt===!0||at===!0){const I=this.type!==fi?{minFilter:Bn,magFilter:Bn}:{};X.map!==null&&X.map.dispose(),X.map=new ys(s.x,s.y,I),X.map.texture.name=z.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const N=X.getViewportCount();for(let I=0;I<N;I++){const ft=X.getViewport(I);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),ot.viewport(o),X.updateMatrices(z,I),i=X.getFrustum(),S(O,U,X.camera,z,this.type)}X.isPointLightShadow!==!0&&this.type===fi&&D(X,U),X.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(M,E,w)};function D(F,O){const U=t.update(_);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(O,null,U,f,_,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(O,null,U,p,_,null)}function P(F,O,U,M){let E=null;const w=U.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(w!==void 0)E=w;else if(E=U.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ot=E.uuid,rt=O.uuid;let at=c[ot];at===void 0&&(at={},c[ot]=at);let xt=at[rt];xt===void 0&&(xt=E.clone(),at[rt]=xt,O.addEventListener("dispose",q)),E=xt}if(E.visible=O.visible,E.wireframe=O.wireframe,M===fi?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:d[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ot=n.properties.get(E);ot.light=U}return E}function S(F,O,U,M,E){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===fi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,F.matrixWorld);const rt=t.update(F),at=F.material;if(Array.isArray(at)){const xt=rt.groups;for(let W=0,z=xt.length;W<z;W++){const X=xt[W],dt=at[X.materialIndex];if(dt&&dt.visible){const N=P(F,dt,M,E);F.onBeforeShadow(n,F,O,U,rt,N,X),n.renderBufferDirect(U,null,rt,N,F,X),F.onAfterShadow(n,F,O,U,rt,N,X)}}}else if(at.visible){const xt=P(F,at,M,E);F.onBeforeShadow(n,F,O,U,rt,xt,null),n.renderBufferDirect(U,null,rt,xt,F,null),F.onAfterShadow(n,F,O,U,rt,xt,null)}}const ot=F.children;for(let rt=0,at=ot.length;rt<at;rt++)S(ot[rt],O,U,M,E)}function q(F){F.target.removeEventListener("dispose",q);for(const U in c){const M=c[U],E=F.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const Uw={[ic]:sc,[rc]:lc,[oc]:cc,[sr]:ac,[sc]:ic,[lc]:rc,[cc]:oc,[ac]:sr};function Nw(n,t){function e(){let G=!1;const Rt=new Ce;let _t=null;const St=new Ce(0,0,0,0);return{setMask:function(Pt){_t!==Pt&&!G&&(n.colorMask(Pt,Pt,Pt,Pt),_t=Pt)},setLocked:function(Pt){G=Pt},setClear:function(Pt,wt,Ft,se,ke){ke===!0&&(Pt*=se,wt*=se,Ft*=se),Rt.set(Pt,wt,Ft,se),St.equals(Rt)===!1&&(n.clearColor(Pt,wt,Ft,se),St.copy(Rt))},reset:function(){G=!1,_t=null,St.set(-1,0,0,0)}}}function i(){let G=!1,Rt=!1,_t=null,St=null,Pt=null;return{setReversed:function(wt){if(Rt!==wt){const Ft=t.get("EXT_clip_control");Rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const se=Pt;Pt=null,this.setClear(se)}Rt=wt},getReversed:function(){return Rt},setTest:function(wt){wt?B(n.DEPTH_TEST):$(n.DEPTH_TEST)},setMask:function(wt){_t!==wt&&!G&&(n.depthMask(wt),_t=wt)},setFunc:function(wt){if(Rt&&(wt=Uw[wt]),St!==wt){switch(wt){case ic:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case rc:n.depthFunc(n.LESS);break;case sr:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case lc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=wt}},setLocked:function(wt){G=wt},setClear:function(wt){Pt!==wt&&(Rt&&(wt=1-wt),n.clearDepth(wt),Pt=wt)},reset:function(){G=!1,_t=null,St=null,Pt=null,Rt=!1}}}function s(){let G=!1,Rt=null,_t=null,St=null,Pt=null,wt=null,Ft=null,se=null,ke=null;return{setTest:function(ae){G||(ae?B(n.STENCIL_TEST):$(n.STENCIL_TEST))},setMask:function(ae){Rt!==ae&&!G&&(n.stencilMask(ae),Rt=ae)},setFunc:function(ae,ne,An){(_t!==ae||St!==ne||Pt!==An)&&(n.stencilFunc(ae,ne,An),_t=ae,St=ne,Pt=An)},setOp:function(ae,ne,An){(wt!==ae||Ft!==ne||se!==An)&&(n.stencilOp(ae,ne,An),wt=ae,Ft=ne,se=An)},setLocked:function(ae){G=ae},setClear:function(ae){ke!==ae&&(n.clearStencil(ae),ke=ae)},reset:function(){G=!1,Rt=null,_t=null,St=null,Pt=null,wt=null,Ft=null,se=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,D=null,P=null,S=null,q=null,F=null,O=new qt(0,0,0),U=0,M=!1,E=null,w=null,ot=null,rt=null,at=null;const xt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,z=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=z>=1):X.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=z>=2);let dt=null,N={};const I=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),K=new Ce().fromArray(I),L=new Ce().fromArray(ft);function nt(G,Rt,_t,St){const Pt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(G,wt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<_t;Ft++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Rt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return wt}const ht={};ht[n.TEXTURE_2D]=nt(n.TEXTURE_2D,n.TEXTURE_2D,1),ht[n.TEXTURE_CUBE_MAP]=nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ht[n.TEXTURE_2D_ARRAY]=nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ht[n.TEXTURE_3D]=nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(sr),et(!1),lt(Cd),B(n.CULL_FACE),b($i);function B(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function $(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function Y(G,Rt){return d[G]!==Rt?(n.bindFramebuffer(G,Rt),d[G]=Rt,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Rt),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ut(G,Rt){let _t=p,St=!1;if(G){_t=f.get(Rt),_t===void 0&&(_t=[],f.set(Rt,_t));const Pt=G.textures;if(_t.length!==Pt.length||_t[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,Ft=Pt.length;wt<Ft;wt++)_t[wt]=n.COLOR_ATTACHMENT0+wt;_t.length=Pt.length,St=!0}}else _t[0]!==n.BACK&&(_t[0]=n.BACK,St=!0);St&&n.drawBuffers(_t)}function y(G){return v!==G?(n.useProgram(G),v=G,!0):!1}const C={[cs]:n.FUNC_ADD,[Zy]:n.FUNC_SUBTRACT,[Jy]:n.FUNC_REVERSE_SUBTRACT};C[Qy]=n.MIN,C[tb]=n.MAX;const V={[eb]:n.ZERO,[nb]:n.ONE,[ib]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[cb]:n.SRC_ALPHA_SATURATE,[ab]:n.DST_COLOR,[rb]:n.DST_ALPHA,[sb]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[lb]:n.ONE_MINUS_DST_COLOR,[ob]:n.ONE_MINUS_DST_ALPHA,[ub]:n.CONSTANT_COLOR,[db]:n.ONE_MINUS_CONSTANT_COLOR,[fb]:n.CONSTANT_ALPHA,[hb]:n.ONE_MINUS_CONSTANT_ALPHA};function b(G,Rt,_t,St,Pt,wt,Ft,se,ke,ae){if(G===$i){_===!0&&($(n.BLEND),_=!1);return}if(_===!1&&(B(n.BLEND),_=!0),G!==Ky){if(G!==g||ae!==M){if((h!==cs||S!==cs)&&(n.blendEquation(n.FUNC_ADD),h=cs,S=cs),ae)switch(G){case Zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}D=null,P=null,q=null,F=null,O.set(0,0,0),U=0,g=G,M=ae}return}Pt=Pt||Rt,wt=wt||_t,Ft=Ft||St,(Rt!==h||Pt!==S)&&(n.blendEquationSeparate(C[Rt],C[Pt]),h=Rt,S=Pt),(_t!==D||St!==P||wt!==q||Ft!==F)&&(n.blendFuncSeparate(V[_t],V[St],V[wt],V[Ft]),D=_t,P=St,q=wt,F=Ft),(se.equals(O)===!1||ke!==U)&&(n.blendColor(se.r,se.g,se.b,ke),O.copy(se),U=ke),g=G,M=!1}function it(G,Rt){G.side===xi?$(n.CULL_FACE):B(n.CULL_FACE);let _t=G.side===cn;Rt&&(_t=!_t),et(_t),G.blending===Zs&&G.transparent===!1?b($i):b(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const St=G.stencilWrite;a.setTest(St),St&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Mt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):$(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(G){E!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),E=G)}function lt(G){G!==qy?(B(n.CULL_FACE),G!==w&&(G===Cd?n.cullFace(n.BACK):G===jy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):$(n.CULL_FACE),w=G}function ct(G){G!==ot&&(W&&n.lineWidth(G),ot=G)}function Mt(G,Rt,_t){G?(B(n.POLYGON_OFFSET_FILL),(rt!==Rt||at!==_t)&&(n.polygonOffset(Rt,_t),rt=Rt,at=_t)):$(n.POLYGON_OFFSET_FILL)}function Q(G){G?B(n.SCISSOR_TEST):$(n.SCISSOR_TEST)}function T(G){G===void 0&&(G=n.TEXTURE0+xt-1),dt!==G&&(n.activeTexture(G),dt=G)}function x(G,Rt,_t){_t===void 0&&(dt===null?_t=n.TEXTURE0+xt-1:_t=dt);let St=N[_t];St===void 0&&(St={type:void 0,texture:void 0},N[_t]=St),(St.type!==G||St.texture!==Rt)&&(dt!==_t&&(n.activeTexture(_t),dt=_t),n.bindTexture(G,Rt||ht[G]),St.type=G,St.texture=Rt)}function k(){const G=N[dt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function R(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function j(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function bt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Et(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ut(G){K.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),K.copy(G))}function Ct(G){L.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),L.copy(G))}function Zt(G,Rt){let _t=c.get(Rt);_t===void 0&&(_t=new WeakMap,c.set(Rt,_t));let St=_t.get(G);St===void 0&&(St=n.getUniformBlockIndex(Rt,G.name),_t.set(G,St))}function Gt(G,Rt){const St=c.get(Rt).get(G);l.get(Rt)!==St&&(n.uniformBlockBinding(Rt,St,G.__bindingPointIndex),l.set(Rt,St))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},dt=null,N={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,D=null,P=null,S=null,q=null,F=null,O=new qt(0,0,0),U=0,M=!1,E=null,w=null,ot=null,rt=null,at=null,K.set(0,0,n.canvas.width,n.canvas.height),L.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:$,bindFramebuffer:Y,drawBuffers:ut,useProgram:y,setBlending:b,setMaterial:it,setFlipSided:et,setCullFace:lt,setLineWidth:ct,setPolygonOffset:Mt,setScissorTest:Q,activeTexture:T,bindTexture:x,unbindTexture:k,compressedTexImage2D:st,compressedTexImage3D:mt,texImage2D:Tt,texImage3D:Bt,updateUBOMapping:Zt,uniformBlockBinding:Gt,texStorage2D:bt,texStorage3D:Et,texSubImage2D:H,texSubImage3D:R,compressedTexSubImage2D:j,compressedTexSubImage3D:vt,scissor:Ut,viewport:Ct,reset:ie}}function wf(n,t,e,i){const s=Ow(i);switch(e){case _p:return n*t;case xp:return n*t;case yp:return n*t*2;case bp:return n*t/s.components*s.byteLength;case _u:return n*t/s.components*s.byteLength;case Mp:return n*t*2/s.components*s.byteLength;case vu:return n*t*2/s.components*s.byteLength;case vp:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case xu:return n*t*4/s.components*s.byteLength;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:case _c:return Math.max(n,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(t,8)/2;case vc:case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ea:case Nc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sp:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ow(n){switch(n){case Ti:case pp:return{byteLength:1,components:1};case Jr:case mp:case no:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case xs:case pu:case bi:return{byteLength:4,components:1};case gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Fw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,x){return p?new OffscreenCanvas(T,x):ga("canvas")}function _(T,x,k){let st=1;const mt=Q(T);if((mt.width>k||mt.height>k)&&(st=k/Math.max(mt.width,mt.height)),st<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const H=Math.floor(st*mt.width),R=Math.floor(st*mt.height);d===void 0&&(d=v(H,R));const j=x?v(H,R):d;return j.width=H,j.height=R,j.getContext("2d").drawImage(T,0,0,H,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+H+"x"+R+")."),j}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),T;return T}function g(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function D(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(T,x,k,st,mt=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let H=x;if(x===n.RED&&(k===n.FLOAT&&(H=n.R32F),k===n.HALF_FLOAT&&(H=n.R16F),k===n.UNSIGNED_BYTE&&(H=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.R8UI),k===n.UNSIGNED_SHORT&&(H=n.R16UI),k===n.UNSIGNED_INT&&(H=n.R32UI),k===n.BYTE&&(H=n.R8I),k===n.SHORT&&(H=n.R16I),k===n.INT&&(H=n.R32I)),x===n.RG&&(k===n.FLOAT&&(H=n.RG32F),k===n.HALF_FLOAT&&(H=n.RG16F),k===n.UNSIGNED_BYTE&&(H=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RG8UI),k===n.UNSIGNED_SHORT&&(H=n.RG16UI),k===n.UNSIGNED_INT&&(H=n.RG32UI),k===n.BYTE&&(H=n.RG8I),k===n.SHORT&&(H=n.RG16I),k===n.INT&&(H=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGB8UI),k===n.UNSIGNED_SHORT&&(H=n.RGB16UI),k===n.UNSIGNED_INT&&(H=n.RGB32UI),k===n.BYTE&&(H=n.RGB8I),k===n.SHORT&&(H=n.RGB16I),k===n.INT&&(H=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),k===n.UNSIGNED_INT&&(H=n.RGBA32UI),k===n.BYTE&&(H=n.RGBA8I),k===n.SHORT&&(H=n.RGBA16I),k===n.INT&&(H=n.RGBA32I)),x===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),x===n.RGBA){const R=mt?Ba:oe.getTransfer(st);k===n.FLOAT&&(H=n.RGBA32F),k===n.HALF_FLOAT&&(H=n.RGBA16F),k===n.UNSIGNED_BYTE&&(H=R===ge?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&t.get("EXT_color_buffer_float"),H}function S(T,x){let k;return T?x===null||x===xs||x===ar?k=n.DEPTH24_STENCIL8:x===bi?k=n.DEPTH32F_STENCIL8:x===Jr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===ar?k=n.DEPTH_COMPONENT24:x===bi?k=n.DEPTH_COMPONENT32F:x===Jr&&(k=n.DEPTH_COMPONENT16),k}function q(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Bn&&T.minFilter!==In?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function F(T){const x=T.target;x.removeEventListener("dispose",F),U(x),x.isVideoTexture&&u.delete(x)}function O(T){const x=T.target;x.removeEventListener("dispose",O),E(x)}function U(T){const x=i.get(T);if(x.__webglInit===void 0)return;const k=T.source,st=f.get(k);if(st){const mt=st[x.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&M(T),Object.keys(st).length===0&&f.delete(k)}i.remove(T)}function M(T){const x=i.get(T);n.deleteTexture(x.__webglTexture);const k=T.source,st=f.get(k);delete st[x.__cacheKey],o.memory.textures--}function E(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(x.__webglFramebuffer[st]))for(let mt=0;mt<x.__webglFramebuffer[st].length;mt++)n.deleteFramebuffer(x.__webglFramebuffer[st][mt]);else n.deleteFramebuffer(x.__webglFramebuffer[st]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[st])}else{if(Array.isArray(x.__webglFramebuffer))for(let st=0;st<x.__webglFramebuffer.length;st++)n.deleteFramebuffer(x.__webglFramebuffer[st]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let st=0;st<x.__webglColorRenderbuffer.length;st++)x.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[st]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=T.textures;for(let st=0,mt=k.length;st<mt;st++){const H=i.get(k[st]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),i.remove(k[st])}i.remove(T)}let w=0;function ot(){w=0}function rt(){const T=w;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),w+=1,T}function at(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function xt(T,x){const k=i.get(T);if(T.isVideoTexture&&ct(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const st=T.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{L(k,T,x);return}}e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function W(T,x){const k=i.get(T);if(T.version>0&&k.__version!==T.version){L(k,T,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function z(T,x){const k=i.get(T);if(T.version>0&&k.__version!==T.version){L(k,T,x);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function X(T,x){const k=i.get(T);if(T.version>0&&k.__version!==T.version){nt(k,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const dt={[fc]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},N={[Bn]:n.NEAREST,[Sb]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},I={[Ab]:n.NEVER,[Ib]:n.ALWAYS,[Cb]:n.LESS,[wp]:n.LEQUAL,[Rb]:n.EQUAL,[Db]:n.GEQUAL,[Pb]:n.GREATER,[Lb]:n.NOTEQUAL};function ft(T,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===In||x.magFilter===sl||x.magFilter===go||x.magFilter===ms||x.minFilter===In||x.minFilter===sl||x.minFilter===go||x.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,dt[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,dt[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,dt[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,N[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,I[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bn||x.minFilter!==go&&x.minFilter!==ms||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function K(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",F));const st=x.source;let mt=f.get(st);mt===void 0&&(mt={},f.set(st,mt));const H=at(x);if(H!==T.__cacheKey){mt[H]===void 0&&(mt[H]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),mt[H].usedTimes++;const R=mt[T.__cacheKey];R!==void 0&&(mt[T.__cacheKey].usedTimes--,R.usedTimes===0&&M(x)),T.__cacheKey=H,T.__webglTexture=mt[H].texture}return k}function L(T,x,k){let st=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=n.TEXTURE_3D);const mt=K(T,x),H=x.source;e.bindTexture(st,T.__webglTexture,n.TEXTURE0+k);const R=i.get(H);if(H.version!==R.__version||mt===!0){e.activeTexture(n.TEXTURE0+k);const j=oe.getPrimaries(oe.workingColorSpace),vt=x.colorSpace===Hi?null:oe.getPrimaries(x.colorSpace),bt=x.colorSpace===Hi||j===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Et=_(x.image,!1,s.maxTextureSize);Et=Mt(x,Et);const Tt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type);let Ut=P(x.internalFormat,Tt,Bt,x.colorSpace,x.isVideoTexture);ft(st,x);let Ct;const Zt=x.mipmaps,Gt=x.isVideoTexture!==!0,ie=R.__version===void 0||mt===!0,G=H.dataReady,Rt=q(x,Et);if(x.isDepthTexture)Ut=S(x.format===lr,x.type),ie&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Ut,Et.width,Et.height):e.texImage2D(n.TEXTURE_2D,0,Ut,Et.width,Et.height,0,Tt,Bt,null));else if(x.isDataTexture)if(Zt.length>0){Gt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Zt[0].width,Zt[0].height);for(let _t=0,St=Zt.length;_t<St;_t++)Ct=Zt[_t],Gt?G&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,_t,Ut,Ct.width,Ct.height,0,Tt,Bt,Ct.data);x.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Et.width,Et.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Et.width,Et.height,Tt,Bt,Et.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,Et.width,Et.height,0,Tt,Bt,Et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ut,Zt[0].width,Zt[0].height,Et.depth);for(let _t=0,St=Zt.length;_t<St;_t++)if(Ct=Zt[_t],x.format!==Un)if(Tt!==null)if(Gt){if(G)if(x.layerUpdates.size>0){const Pt=wf(Ct.width,Ct.height,x.format,x.type);for(const wt of x.layerUpdates){const Ft=Ct.data.subarray(wt*Pt/Ct.data.BYTES_PER_ELEMENT,(wt+1)*Pt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,wt,Ct.width,Ct.height,1,Tt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,Et.depth,Tt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,_t,Ut,Ct.width,Ct.height,Et.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,_t,0,0,0,Ct.width,Ct.height,Et.depth,Tt,Bt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,_t,Ut,Ct.width,Ct.height,Et.depth,0,Tt,Bt,Ct.data)}else{Gt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Zt[0].width,Zt[0].height);for(let _t=0,St=Zt.length;_t<St;_t++)Ct=Zt[_t],x.format!==Un?Tt!==null?Gt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,_t,Ut,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?G&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Ct.width,Ct.height,Tt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,_t,Ut,Ct.width,Ct.height,0,Tt,Bt,Ct.data)}else if(x.isDataArrayTexture)if(Gt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Ut,Et.width,Et.height,Et.depth),G)if(x.layerUpdates.size>0){const _t=wf(Et.width,Et.height,x.format,x.type);for(const St of x.layerUpdates){const Pt=Et.data.subarray(St*_t/Et.data.BYTES_PER_ELEMENT,(St+1)*_t/Et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,Et.width,Et.height,1,Tt,Bt,Pt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Bt,Et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,Et.width,Et.height,Et.depth,0,Tt,Bt,Et.data);else if(x.isData3DTexture)Gt?(ie&&e.texStorage3D(n.TEXTURE_3D,Rt,Ut,Et.width,Et.height,Et.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Tt,Bt,Et.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,Et.width,Et.height,Et.depth,0,Tt,Bt,Et.data);else if(x.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(n.TEXTURE_2D,Rt,Ut,Et.width,Et.height);else{let _t=Et.width,St=Et.height;for(let Pt=0;Pt<Rt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Ut,_t,St,0,Tt,Bt,null),_t>>=1,St>>=1}}else if(Zt.length>0){if(Gt&&ie){const _t=Q(Zt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Ut,_t.width,_t.height)}for(let _t=0,St=Zt.length;_t<St;_t++)Ct=Zt[_t],Gt?G&&e.texSubImage2D(n.TEXTURE_2D,_t,0,0,Tt,Bt,Ct):e.texImage2D(n.TEXTURE_2D,_t,Ut,Tt,Bt,Ct);x.generateMipmaps=!1}else if(Gt){if(ie){const _t=Q(Et);e.texStorage2D(n.TEXTURE_2D,Rt,Ut,_t.width,_t.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Bt,Et)}else e.texImage2D(n.TEXTURE_2D,0,Ut,Tt,Bt,Et);g(x)&&h(st),R.__version=H.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function nt(T,x,k){if(x.image.length!==6)return;const st=K(T,x),mt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);const H=i.get(mt);if(mt.version!==H.__version||st===!0){e.activeTexture(n.TEXTURE0+k);const R=oe.getPrimaries(oe.workingColorSpace),j=x.colorSpace===Hi?null:oe.getPrimaries(x.colorSpace),vt=x.colorSpace===Hi||R===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const bt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let St=0;St<6;St++)!bt&&!Et?Tt[St]=_(x.image[St],!0,s.maxCubemapSize):Tt[St]=Et?x.image[St].image:x.image[St],Tt[St]=Mt(x,Tt[St]);const Bt=Tt[0],Ut=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Zt=P(x.internalFormat,Ut,Ct,x.colorSpace),Gt=x.isVideoTexture!==!0,ie=H.__version===void 0||st===!0,G=mt.dataReady;let Rt=q(x,Bt);ft(n.TEXTURE_CUBE_MAP,x);let _t;if(bt){Gt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Zt,Bt.width,Bt.height);for(let St=0;St<6;St++){_t=Tt[St].mipmaps;for(let Pt=0;Pt<_t.length;Pt++){const wt=_t[Pt];x.format!==Un?Ut!==null?Gt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,wt.width,wt.height,Ut,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,Zt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,0,0,wt.width,wt.height,Ut,Ct,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt,Zt,wt.width,wt.height,0,Ut,Ct,wt.data)}}}else{if(_t=x.mipmaps,Gt&&ie){_t.length>0&&Rt++;const St=Q(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Zt,St.width,St.height)}for(let St=0;St<6;St++)if(Et){Gt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Tt[St].width,Tt[St].height,Ut,Ct,Tt[St].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Zt,Tt[St].width,Tt[St].height,0,Ut,Ct,Tt[St].data);for(let Pt=0;Pt<_t.length;Pt++){const Ft=_t[Pt].image[St].image;Gt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,Ft.width,Ft.height,Ut,Ct,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,Zt,Ft.width,Ft.height,0,Ut,Ct,Ft.data)}}else{Gt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Ut,Ct,Tt[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Zt,Ut,Ct,Tt[St]);for(let Pt=0;Pt<_t.length;Pt++){const wt=_t[Pt];Gt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,0,0,Ut,Ct,wt.image[St]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+St,Pt+1,Zt,Ut,Ct,wt.image[St])}}}g(x)&&h(n.TEXTURE_CUBE_MAP),H.__version=mt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ht(T,x,k,st,mt,H){const R=r.convert(k.format,k.colorSpace),j=r.convert(k.type),vt=P(k.internalFormat,R,j,k.colorSpace),bt=i.get(x),Et=i.get(k);if(Et.__renderTarget=x,!bt.__hasExternalTextures){const Tt=Math.max(1,x.width>>H),Bt=Math.max(1,x.height>>H);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,H,vt,Tt,Bt,x.depth,0,R,j,null):e.texImage2D(mt,H,vt,Tt,Bt,0,R,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,mt,Et.__webglTexture,0,et(x)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,mt,Et.__webglTexture,H),e.bindFramebuffer(n.FRAMEBUFFER,null)}function B(T,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){const st=x.depthTexture,mt=st&&st.isDepthTexture?st.type:null,H=S(x.stencilBuffer,mt),R=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=et(x);lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,H,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,H,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,H,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,R,n.RENDERBUFFER,T)}else{const st=x.textures;for(let mt=0;mt<st.length;mt++){const H=st[mt],R=r.convert(H.format,H.colorSpace),j=r.convert(H.type),vt=P(H.internalFormat,R,j,H.colorSpace),bt=et(x);k&&lt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,vt,x.width,x.height):lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,vt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,vt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function $(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(x.depthTexture);st.__renderTarget=x,(!st.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),xt(x.depthTexture,0);const mt=st.__webglTexture,H=et(x);if(x.depthTexture.format===Js)lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0);else if(x.depthTexture.format===lr)lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Y(T){const x=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const st=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){const mt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",mt)};st.addEventListener("dispose",mt),x.__depthDisposeCallback=mt}x.__boundDepthTexture=st}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");$(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=n.createRenderbuffer(),B(x.__webglDepthbuffer[st],T,!1);else{const mt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=x.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,H)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),B(x.__webglDepthbuffer,T,!1);else{const st=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(T,x,k){const st=i.get(T);x!==void 0&&ht(st.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Y(T)}function y(T){const x=T.texture,k=i.get(T),st=i.get(x);T.addEventListener("dispose",O);const mt=T.textures,H=T.isWebGLCubeRenderTarget===!0,R=mt.length>1;if(R||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=x.version,o.memory.textures++),H){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let vt=0;vt<x.mipmaps.length;vt++)k.__webglFramebuffer[j][vt]=n.createFramebuffer()}else k.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(R)for(let j=0,vt=mt.length;j<vt;j++){const bt=i.get(mt[j]);bt.__webglTexture===void 0&&(bt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&lt(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<mt.length;j++){const vt=mt[j];k.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[j]);const bt=r.convert(vt.format,vt.colorSpace),Et=r.convert(vt.type),Tt=P(vt.internalFormat,bt,Et,vt.colorSpace,T.isXRRenderTarget===!0),Bt=et(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Tt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,k.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),B(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),ft(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ht(k.__webglFramebuffer[j][vt],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,vt);else ht(k.__webglFramebuffer[j],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);g(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(R){for(let j=0,vt=mt.length;j<vt;j++){const bt=mt[j],Et=i.get(bt);e.bindTexture(n.TEXTURE_2D,Et.__webglTexture),ft(n.TEXTURE_2D,bt),ht(k.__webglFramebuffer,T,bt,n.COLOR_ATTACHMENT0+j,n.TEXTURE_2D,0),g(bt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,st.__webglTexture),ft(j,x),x.mipmaps&&x.mipmaps.length>0)for(let vt=0;vt<x.mipmaps.length;vt++)ht(k.__webglFramebuffer[vt],T,x,n.COLOR_ATTACHMENT0,j,vt);else ht(k.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,j,0);g(x)&&h(j),e.unbindTexture()}T.depthBuffer&&Y(T)}function C(T){const x=T.textures;for(let k=0,st=x.length;k<st;k++){const mt=x[k];if(g(mt)){const H=D(T),R=i.get(mt).__webglTexture;e.bindTexture(H,R),h(H),e.unbindTexture()}}}const V=[],b=[];function it(T){if(T.samples>0){if(lt(T)===!1){const x=T.textures,k=T.width,st=T.height;let mt=n.COLOR_BUFFER_BIT;const H=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=i.get(T),j=x.length>1;if(j)for(let vt=0;vt<x.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,R.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,R.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,R.__webglColorRenderbuffer[vt]);const bt=i.get(x[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,bt,0)}n.blitFramebuffer(0,0,k,st,0,0,k,st,mt,n.NEAREST),l===!0&&(V.length=0,b.length=0,V.push(n.COLOR_ATTACHMENT0+vt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(V.push(H),b.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,V))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let vt=0;vt<x.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,R.__webglColorRenderbuffer[vt]);const bt=i.get(x[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,R.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function et(T){return Math.min(s.maxSamples,T.samples)}function lt(T){const x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function Mt(T,x){const k=T.colorSpace,st=T.format,mt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==fr&&k!==Hi&&(oe.getTransfer(k)===ge?(st!==Un||mt!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=ot,this.setTexture2D=xt,this.setTexture2DArray=W,this.setTexture3D=z,this.setTextureCube=X,this.rebindTextures=ut,this.setupRenderTarget=y,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=lt}function Bw(n,t){function e(i,s=Hi){let r;const o=oe.getTransfer(s);if(i===Ti)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===no)return n.HALF_FLOAT;if(i===_p)return n.ALPHA;if(i===vp)return n.RGB;if(i===Un)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===yp)return n.LUMINANCE_ALPHA;if(i===Js)return n.DEPTH_COMPONENT;if(i===lr)return n.DEPTH_STENCIL;if(i===bp)return n.RED;if(i===_u)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===vu)return n.RG_INTEGER;if(i===xu)return n.RGBA_INTEGER;if(i===Zo||i===Jo||i===Qo||i===ta)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===xc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===Mc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ea||i===Nc||i===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ea)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Fc||i===Bc||i===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ea)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class zw extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class js extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hw=`
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

}`;class Gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ki({vertexShader:kw,fragmentShader:Hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=new Gw,g=e.getContextAttributes();let h=null,D=null;const P=[],S=[],q=new $t;let F=null;const O=new bn;O.viewport=new Ce;const U=new bn;U.viewport=new Ce;const M=[O,U],E=new zw;let w=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let nt=P[L];return nt===void 0&&(nt=new Dl,P[L]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(L){let nt=P[L];return nt===void 0&&(nt=new Dl,P[L]=nt),nt.getGripSpace()},this.getHand=function(L){let nt=P[L];return nt===void 0&&(nt=new Dl,P[L]=nt),nt.getHandSpace()};function rt(L){const nt=S.indexOf(L.inputSource);if(nt===-1)return;const ht=P[nt];ht!==void 0&&(ht.update(L.inputSource,L.frame,c||o),ht.dispatchEvent({type:L.type,data:L.inputSource}))}function at(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",at),s.removeEventListener("inputsourceschange",xt);for(let L=0;L<P.length;L++){const nt=S[L];nt!==null&&(S[L]=null,P[L].disconnect(nt))}w=null,ot=null,_.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,D=null,K.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(q.width,q.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){r=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(L){if(s=L,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",at),s.addEventListener("inputsourceschange",xt),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(q),s.renderState.layers===void 0){const nt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),D=new ys(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let nt=null,ht=null,B=null;g.depth&&(B=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=g.stencil?lr:Js,ht=g.stencil?ar:xs);const $={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer($),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),D=new ys(f.textureWidth,f.textureHeight,{format:Un,type:Ti,depthTexture:new Bp(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),K.setContext(s),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function xt(L){for(let nt=0;nt<L.removed.length;nt++){const ht=L.removed[nt],B=S.indexOf(ht);B>=0&&(S[B]=null,P[B].disconnect(ht))}for(let nt=0;nt<L.added.length;nt++){const ht=L.added[nt];let B=S.indexOf(ht);if(B===-1){for(let Y=0;Y<P.length;Y++)if(Y>=S.length){S.push(ht),B=Y;break}else if(S[Y]===null){S[Y]=ht,B=Y;break}if(B===-1)break}const $=P[B];$&&$.connect(ht)}}const W=new tt,z=new tt;function X(L,nt,ht){W.setFromMatrixPosition(nt.matrixWorld),z.setFromMatrixPosition(ht.matrixWorld);const B=W.distanceTo(z),$=nt.projectionMatrix.elements,Y=ht.projectionMatrix.elements,ut=$[14]/($[10]-1),y=$[14]/($[10]+1),C=($[9]+1)/$[5],V=($[9]-1)/$[5],b=($[8]-1)/$[0],it=(Y[8]+1)/Y[0],et=ut*b,lt=ut*it,ct=B/(-b+it),Mt=ct*-b;if(nt.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Mt),L.translateZ(ct),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert(),$[10]===-1)L.projectionMatrix.copy(nt.projectionMatrix),L.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Q=ut+ct,T=y+ct,x=et-Mt,k=lt+(B-Mt),st=C*y/T*Q,mt=V*y/T*Q;L.projectionMatrix.makePerspective(x,k,st,mt,Q,T),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}}function dt(L,nt){nt===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(nt.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(s===null)return;let nt=L.near,ht=L.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),E.near=U.near=O.near=nt,E.far=U.far=O.far=ht,(w!==E.near||ot!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),w=E.near,ot=E.far),O.layers.mask=L.layers.mask|2,U.layers.mask=L.layers.mask|4,E.layers.mask=O.layers.mask|U.layers.mask;const B=L.parent,$=E.cameras;dt(E,B);for(let Y=0;Y<$.length;Y++)dt($[Y],B);$.length===2?X(E,O,U):E.projectionMatrix.copy(O.projectionMatrix),N(L,E,B)};function N(L,nt,ht){ht===null?L.matrix.copy(nt.matrixWorld):(L.matrix.copy(ht.matrixWorld),L.matrix.invert(),L.matrix.multiply(nt.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(nt.projectionMatrix),L.projectionMatrixInverse.copy(nt.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=kc*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(L){l=L,f!==null&&(f.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let I=null;function ft(L,nt){if(u=nt.getViewerPose(c||o),v=nt,u!==null){const ht=u.views;p!==null&&(t.setRenderTargetFramebuffer(D,p.framebuffer),t.setRenderTarget(D));let B=!1;ht.length!==E.cameras.length&&(E.cameras.length=0,B=!0);for(let Y=0;Y<ht.length;Y++){const ut=ht[Y];let y=null;if(p!==null)y=p.getViewport(ut);else{const V=d.getViewSubImage(f,ut);y=V.viewport,Y===0&&(t.setRenderTargetTextures(D,V.colorTexture,f.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(D))}let C=M[Y];C===void 0&&(C=new bn,C.layers.enable(Y),C.viewport=new Ce,M[Y]=C),C.matrix.fromArray(ut.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(ut.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(y.x,y.y,y.width,y.height),Y===0&&(E.matrix.copy(C.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),B===!0&&E.cameras.push(C)}const $=s.enabledFeatures;if($&&$.includes("depth-sensing")){const Y=d.getDepthInformation(ht[0]);Y&&Y.isValid&&Y.texture&&_.init(t,Y,s.renderState)}}for(let ht=0;ht<P.length;ht++){const B=S[ht],$=P[ht];B!==null&&$!==void 0&&$.update(B,nt,c||o)}I&&I(L,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),v=null}const K=new Op;K.setAnimationLoop(ft),this.setAnimationLoop=function(L){I=L},this.dispose=function(){}}}const rs=new ii,$w=new Ee;function Xw(n,t){function e(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Ip(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,D,P,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),_(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,D,P):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,e(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===cn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,e(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===cn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,e(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,e(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const D=t.get(h),P=D.envMap,S=D.envMapRotation;P&&(g.envMap.value=P,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4($w.makeRotationFromEuler(rs)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,D,P){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*D,g.scale.value=P*.5,h.map&&(g.map.value=h.map,e(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,D){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=D.texture,g.transmissionSamplerSize.value.set(D.width,D.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const D=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(D.matrixWorld),g.nearDistance.value=D.shadow.camera.near,g.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,P){const S=P.program;i.uniformBlockBinding(D,S)}function c(D,P){let S=s[D.id];S===void 0&&(v(D),S=u(D),s[D.id]=S,D.addEventListener("dispose",g));const q=P.program;i.updateUBOMapping(D,q);const F=t.render.frame;r[D.id]!==F&&(f(D),r[D.id]=F)}function u(D){const P=d();D.__bindingPointIndex=P;const S=n.createBuffer(),q=D.__size,F=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,q,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,S),S}function d(){for(let D=0;D<a;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){const P=s[D.id],S=D.uniforms,q=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let F=0,O=S.length;F<O;F++){const U=Array.isArray(S[F])?S[F]:[S[F]];for(let M=0,E=U.length;M<E;M++){const w=U[M];if(p(w,F,M,q)===!0){const ot=w.__offset,rt=Array.isArray(w.value)?w.value:[w.value];let at=0;for(let xt=0;xt<rt.length;xt++){const W=rt[xt],z=_(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,ot+at,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,at),at+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ot,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(D,P,S,q){const F=D.value,O=P+"_"+S;if(q[O]===void 0)return typeof F=="number"||typeof F=="boolean"?q[O]=F:q[O]=F.clone(),!0;{const U=q[O];if(typeof F=="number"||typeof F=="boolean"){if(U!==F)return q[O]=F,!0}else if(U.equals(F)===!1)return U.copy(F),!0}return!1}function v(D){const P=D.uniforms;let S=0;const q=16;for(let O=0,U=P.length;O<U;O++){const M=Array.isArray(P[O])?P[O]:[P[O]];for(let E=0,w=M.length;E<w;E++){const ot=M[E],rt=Array.isArray(ot.value)?ot.value:[ot.value];for(let at=0,xt=rt.length;at<xt;at++){const W=rt[at],z=_(W),X=S%q,dt=X%z.boundary,N=X+dt;S+=dt,N!==0&&q-N<z.storage&&(S+=q-N),ot.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=S,S+=z.storage}}}const F=S%q;return F>0&&(S+=q-F),D.__size=S,D.__cache={},this}function _(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function g(D){const P=D.target;P.removeEventListener("dispose",g);const S=o.indexOf(P.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function h(){for(const D in s)n.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class jw{constructor(t={}){const{canvas:e=Ob(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const D=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Si,this.toneMappingExposure=1;const S=this;let q=!1,F=0,O=0,U=null,M=-1,E=null;const w=new Ce,ot=new Ce;let rt=null;const at=new qt(0);let xt=0,W=e.width,z=e.height,X=1,dt=null,N=null;const I=new Ce(0,0,W,z),ft=new Ce(0,0,W,z);let K=!1;const L=new bu;let nt=!1,ht=!1;const B=new Ee,$=new Ee,Y=new tt,ut=new Ce,y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let C=!1;function V(){return U===null?X:1}let b=i;function it(A,Z){return e.getContext(A,Z)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),b===null){const Z="webgl2";if(b=it(Z,A),b===null)throw it(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let et,lt,ct,Mt,Q,T,x,k,st,mt,H,R,j,vt,bt,Et,Tt,Bt,Ut,Ct,Zt,Gt,ie,G;function Rt(){et=new QS(b),et.init(),Gt=new Bw(b,et),lt=new qS(b,et,t,Gt),ct=new Nw(b,et),lt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),Mt=new nE(b),Q=new yw,T=new Fw(b,et,ct,Q,lt,Gt,Mt),x=new YS(S),k=new JS(S),st=new cM(b),ie=new $S(b,st),mt=new tE(b,st,Mt,ie),H=new sE(b,mt,st,Mt),Ut=new iE(b,lt,T),Et=new jS(Q),R=new xw(S,x,k,et,lt,ie,Et),j=new Xw(S,Q),vt=new Mw,bt=new Cw(et),Bt=new WS(S,x,k,ct,H,p,l),Tt=new Iw(S,H,lt),G=new qw(b,Mt,lt,ct),Ct=new XS(b,et,Mt),Zt=new eE(b,et,Mt),Mt.programs=R.programs,S.capabilities=lt,S.extensions=et,S.properties=Q,S.renderLists=vt,S.shadowMap=Tt,S.state=ct,S.info=Mt}Rt();const _t=new Ww(S,b);this.xr=_t,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(W,z,!1))},this.getSize=function(A){return A.set(W,z)},this.setSize=function(A,Z,pt=!0){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,z=Z,e.width=Math.floor(A*X),e.height=Math.floor(Z*X),pt===!0&&(e.style.width=A+"px",e.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(W*X,z*X).floor()},this.setDrawingBufferSize=function(A,Z,pt){W=A,z=Z,X=pt,e.width=Math.floor(A*pt),e.height=Math.floor(Z*pt),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(w)},this.getViewport=function(A){return A.copy(I)},this.setViewport=function(A,Z,pt,gt){A.isVector4?I.set(A.x,A.y,A.z,A.w):I.set(A,Z,pt,gt),ct.viewport(w.copy(I).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(ft)},this.setScissor=function(A,Z,pt,gt){A.isVector4?ft.set(A.x,A.y,A.z,A.w):ft.set(A,Z,pt,gt),ct.scissor(ot.copy(ft).multiplyScalar(X).round())},this.getScissorTest=function(){return K},this.setScissorTest=function(A){ct.setScissorTest(K=A)},this.setOpaqueSort=function(A){dt=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(A=!0,Z=!0,pt=!0){let gt=0;if(A){let J=!1;if(U!==null){const At=U.texture.format;J=At===xu||At===vu||At===_u}if(J){const At=U.texture.type,It=At===Ti||At===xs||At===Jr||At===ar||At===mu||At===gu,zt=Bt.getClearColor(),Vt=Bt.getClearAlpha(),jt=zt.r,Qt=zt.g,kt=zt.b;It?(v[0]=jt,v[1]=Qt,v[2]=kt,v[3]=Vt,b.clearBufferuiv(b.COLOR,0,v)):(_[0]=jt,_[1]=Qt,_[2]=kt,_[3]=Vt,b.clearBufferiv(b.COLOR,0,_))}else gt|=b.COLOR_BUFFER_BIT}Z&&(gt|=b.DEPTH_BUFFER_BIT),pt&&(gt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),vt.dispose(),bt.dispose(),Q.dispose(),x.dispose(),k.dispose(),H.dispose(),ie.dispose(),G.dispose(),R.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",ro),_t.removeEventListener("sessionend",oo),rn.stop()};function St(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),q=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),q=!1;const A=Mt.autoReset,Z=Tt.enabled,pt=Tt.autoUpdate,gt=Tt.needsUpdate,J=Tt.type;Rt(),Mt.autoReset=A,Tt.enabled=Z,Tt.autoUpdate=pt,Tt.needsUpdate=gt,Tt.type=J}function wt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){const Z=A.target;Z.removeEventListener("dispose",Ft),se(Z)}function se(A){ke(A),Q.remove(A)}function ke(A){const Z=Q.get(A).programs;Z!==void 0&&(Z.forEach(function(pt){R.releaseProgram(pt)}),A.isShaderMaterial&&R.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,pt,gt,J,At){Z===null&&(Z=y);const It=J.isMesh&&J.matrixWorld.determinant()<0,zt=Yp(A,Z,pt,gt,J);ct.setMaterial(gt,It);let Vt=pt.index,jt=1;if(gt.wireframe===!0){if(Vt=mt.getWireframeAttribute(pt),Vt===void 0)return;jt=2}const Qt=pt.drawRange,kt=pt.attributes.position;let le=Qt.start*jt,ye=(Qt.start+Qt.count)*jt;At!==null&&(le=Math.max(le,At.start*jt),ye=Math.min(ye,(At.start+At.count)*jt)),Vt!==null?(le=Math.max(le,0),ye=Math.min(ye,Vt.count)):kt!=null&&(le=Math.max(le,0),ye=Math.min(ye,kt.count));const Me=ye-le;if(Me<0||Me===1/0)return;ie.setup(J,gt,zt,pt,Vt);let on,ue=Ct;if(Vt!==null&&(on=st.get(Vt),ue=Zt,ue.setIndex(on)),J.isMesh)gt.wireframe===!0?(ct.setLineWidth(gt.wireframeLinewidth*V()),ue.setMode(b.LINES)):ue.setMode(b.TRIANGLES);else if(J.isLine){let Ht=gt.linewidth;Ht===void 0&&(Ht=1),ct.setLineWidth(Ht*V()),J.isLineSegments?ue.setMode(b.LINES):J.isLineLoop?ue.setMode(b.LINE_LOOP):ue.setMode(b.LINE_STRIP)}else J.isPoints?ue.setMode(b.POINTS):J.isSprite&&ue.setMode(b.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ue.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ue.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Ht=J._multiDrawStarts,si=J._multiDrawCounts,de=J._multiDrawCount,Cn=Vt?st.get(Vt).bytesPerElement:1,Es=Q.get(gt).currentProgram.getUniforms();for(let un=0;un<de;un++)Es.setValue(b,"_gl_DrawID",un),ue.render(Ht[un]/Cn,si[un])}else if(J.isInstancedMesh)ue.renderInstances(le,Me,J.count);else if(pt.isInstancedBufferGeometry){const Ht=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,si=Math.min(pt.instanceCount,Ht);ue.renderInstances(le,Me,si)}else ue.render(le,Me)};function ae(A,Z,pt){A.transparent===!0&&A.side===xi&&A.forceSinglePass===!1?(A.side=cn,A.needsUpdate=!0,lo(A,Z,pt),A.side=Yi,A.needsUpdate=!0,lo(A,Z,pt),A.side=xi):lo(A,Z,pt)}this.compile=function(A,Z,pt=null){pt===null&&(pt=A),h=bt.get(pt),h.init(Z),P.push(h),pt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),A!==pt&&A.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const gt=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){const zt=At[It];ae(zt,pt,J),gt.add(zt)}else ae(At,pt,J),gt.add(At)}),P.pop(),h=null,gt},this.compileAsync=function(A,Z,pt=null){const gt=this.compile(A,Z,pt);return new Promise(J=>{function At(){if(gt.forEach(function(It){Q.get(It).currentProgram.isReady()&&gt.delete(It)}),gt.size===0){J(A);return}setTimeout(At,10)}et.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ne=null;function An(A){ne&&ne(A)}function ro(){rn.stop()}function oo(){rn.start()}const rn=new Op;rn.setAnimationLoop(An),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(A){ne=A,_t.setAnimationLoop(A),A===null?rn.stop():rn.start()},_t.addEventListener("sessionstart",ro),_t.addEventListener("sessionend",oo),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(q===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(Z),Z=_t.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,Z,U),h=bt.get(A,P.length),h.init(Z),P.push(h),$.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),L.setFromProjectionMatrix($),ht=this.localClippingEnabled,nt=Et.init(this.clippingPlanes,ht),g=vt.get(A,D.length),g.init(),D.push(g),_t.enabled===!0&&_t.isPresenting===!0){const At=S.xr.getDepthSensingMesh();At!==null&&mr(At,Z,-1/0,S.sortObjects)}mr(A,Z,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(dt,N),C=_t.enabled===!1||_t.isPresenting===!1||_t.hasDepthSensing()===!1,C&&Bt.addToRenderList(g,A),this.info.render.frame++,nt===!0&&Et.beginShadows();const pt=h.state.shadowsArray;Tt.render(pt,A,Z),nt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=g.opaque,J=g.transmissive;if(h.setupLights(),Z.isArrayCamera){const At=Z.cameras;if(J.length>0)for(let It=0,zt=At.length;It<zt;It++){const Vt=At[It];wu(gt,J,A,Vt)}C&&Bt.render(A);for(let It=0,zt=At.length;It<zt;It++){const Vt=At[It];Eu(g,A,Vt,Vt.viewport)}}else J.length>0&&wu(gt,J,A,Z),C&&Bt.render(A),Eu(g,A,Z);U!==null&&(T.updateMultisampleRenderTarget(U),T.updateRenderTargetMipmap(U)),A.isScene===!0&&A.onAfterRender(S,A,Z),ie.resetDefaultState(),M=-1,E=null,P.pop(),P.length>0?(h=P[P.length-1],nt===!0&&Et.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,D.pop(),D.length>0?g=D[D.length-1]:g=null};function mr(A,Z,pt,gt){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)pt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||L.intersectsSprite(A)){gt&&ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4($);const It=H.update(A),zt=A.material;zt.visible&&g.push(A,It,zt,pt,ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||L.intersectsObject(A))){const It=H.update(A),zt=A.material;if(gt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ut.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ut.copy(It.boundingSphere.center)),ut.applyMatrix4(A.matrixWorld).applyMatrix4($)),Array.isArray(zt)){const Vt=It.groups;for(let jt=0,Qt=Vt.length;jt<Qt;jt++){const kt=Vt[jt],le=zt[kt.materialIndex];le&&le.visible&&g.push(A,It,le,pt,ut.z,kt)}}else zt.visible&&g.push(A,It,zt,pt,ut.z,null)}}const At=A.children;for(let It=0,zt=At.length;It<zt;It++)mr(At[It],Z,pt,gt)}function Eu(A,Z,pt,gt){const J=A.opaque,At=A.transmissive,It=A.transparent;h.setupLightsView(pt),nt===!0&&Et.setGlobalState(S.clippingPlanes,pt),gt&&ct.viewport(w.copy(gt)),J.length>0&&ao(J,Z,pt),At.length>0&&ao(At,Z,pt),It.length>0&&ao(It,Z,pt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function wu(A,Z,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[gt.id]===void 0&&(h.state.transmissionRenderTarget[gt.id]=new ys(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?no:Ti,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const At=h.state.transmissionRenderTarget[gt.id],It=gt.viewport||w;At.setSize(It.z,It.w);const zt=S.getRenderTarget();S.setRenderTarget(At),S.getClearColor(at),xt=S.getClearAlpha(),xt<1&&S.setClearColor(16777215,.5),S.clear(),C&&Bt.render(pt);const Vt=S.toneMapping;S.toneMapping=Si;const jt=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),h.setupLightsView(gt),nt===!0&&Et.setGlobalState(S.clippingPlanes,gt),ao(A,pt,gt),T.updateMultisampleRenderTarget(At),T.updateRenderTargetMipmap(At),et.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,le=Z.length;kt<le;kt++){const ye=Z[kt],Me=ye.object,on=ye.geometry,ue=ye.material,Ht=ye.group;if(ue.side===xi&&Me.layers.test(gt.layers)){const si=ue.side;ue.side=cn,ue.needsUpdate=!0,Tu(Me,pt,gt,on,ue,Ht),ue.side=si,ue.needsUpdate=!0,Qt=!0}}Qt===!0&&(T.updateMultisampleRenderTarget(At),T.updateRenderTargetMipmap(At))}S.setRenderTarget(zt),S.setClearColor(at,xt),jt!==void 0&&(gt.viewport=jt),S.toneMapping=Vt}function ao(A,Z,pt){const gt=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,At=A.length;J<At;J++){const It=A[J],zt=It.object,Vt=It.geometry,jt=gt===null?It.material:gt,Qt=It.group;zt.layers.test(pt.layers)&&Tu(zt,Z,pt,Vt,jt,Qt)}}function Tu(A,Z,pt,gt,J,At){A.onBeforeRender(S,Z,pt,gt,J,At),A.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(S,Z,pt,gt,A,At),J.transparent===!0&&J.side===xi&&J.forceSinglePass===!1?(J.side=cn,J.needsUpdate=!0,S.renderBufferDirect(pt,Z,gt,J,A,At),J.side=Yi,J.needsUpdate=!0,S.renderBufferDirect(pt,Z,gt,J,A,At),J.side=xi):S.renderBufferDirect(pt,Z,gt,J,A,At),A.onAfterRender(S,Z,pt,gt,J,At)}function lo(A,Z,pt){Z.isScene!==!0&&(Z=y);const gt=Q.get(A),J=h.state.lights,At=h.state.shadowsArray,It=J.state.version,zt=R.getParameters(A,J.state,At,Z,pt),Vt=R.getProgramCacheKey(zt);let jt=gt.programs;gt.environment=A.isMeshStandardMaterial?Z.environment:null,gt.fog=Z.fog,gt.envMap=(A.isMeshStandardMaterial?k:x).get(A.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",Ft),jt=new Map,gt.programs=jt);let Qt=jt.get(Vt);if(Qt!==void 0){if(gt.currentProgram===Qt&&gt.lightsStateVersion===It)return Cu(A,zt),Qt}else zt.uniforms=R.getUniforms(A),A.onBeforeCompile(zt,S),Qt=R.acquireProgram(zt,Vt),jt.set(Vt,Qt),gt.uniforms=zt.uniforms;const kt=gt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(kt.clippingPlanes=Et.uniform),Cu(A,zt),gt.needsLights=Zp(A),gt.lightsStateVersion=It,gt.needsLights&&(kt.ambientLightColor.value=J.state.ambient,kt.lightProbe.value=J.state.probe,kt.directionalLights.value=J.state.directional,kt.directionalLightShadows.value=J.state.directionalShadow,kt.spotLights.value=J.state.spot,kt.spotLightShadows.value=J.state.spotShadow,kt.rectAreaLights.value=J.state.rectArea,kt.ltc_1.value=J.state.rectAreaLTC1,kt.ltc_2.value=J.state.rectAreaLTC2,kt.pointLights.value=J.state.point,kt.pointLightShadows.value=J.state.pointShadow,kt.hemisphereLights.value=J.state.hemi,kt.directionalShadowMap.value=J.state.directionalShadowMap,kt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,kt.spotShadowMap.value=J.state.spotShadowMap,kt.spotLightMatrix.value=J.state.spotLightMatrix,kt.spotLightMap.value=J.state.spotLightMap,kt.pointShadowMap.value=J.state.pointShadowMap,kt.pointShadowMatrix.value=J.state.pointShadowMatrix),gt.currentProgram=Qt,gt.uniformsList=null,Qt}function Au(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=na.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Cu(A,Z){const pt=Q.get(A);pt.outputColorSpace=Z.outputColorSpace,pt.batching=Z.batching,pt.batchingColor=Z.batchingColor,pt.instancing=Z.instancing,pt.instancingColor=Z.instancingColor,pt.instancingMorph=Z.instancingMorph,pt.skinning=Z.skinning,pt.morphTargets=Z.morphTargets,pt.morphNormals=Z.morphNormals,pt.morphColors=Z.morphColors,pt.morphTargetsCount=Z.morphTargetsCount,pt.numClippingPlanes=Z.numClippingPlanes,pt.numIntersection=Z.numClipIntersection,pt.vertexAlphas=Z.vertexAlphas,pt.vertexTangents=Z.vertexTangents,pt.toneMapping=Z.toneMapping}function Yp(A,Z,pt,gt,J){Z.isScene!==!0&&(Z=y),T.resetTextureUnits();const At=Z.fog,It=gt.isMeshStandardMaterial?Z.environment:null,zt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:fr,Vt=(gt.isMeshStandardMaterial?k:x).get(gt.envMap||It),jt=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Qt=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),kt=!!pt.morphAttributes.position,le=!!pt.morphAttributes.normal,ye=!!pt.morphAttributes.color;let Me=Si;gt.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Me=S.toneMapping);const on=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ue=on!==void 0?on.length:0,Ht=Q.get(gt),si=h.state.lights;if(nt===!0&&(ht===!0||A!==E)){const vn=A===E&&gt.id===M;Et.setState(gt,A,vn)}let de=!1;gt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==si.state.version||Ht.outputColorSpace!==zt||J.isBatchedMesh&&Ht.batching===!1||!J.isBatchedMesh&&Ht.batching===!0||J.isBatchedMesh&&Ht.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ht.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ht.instancing===!1||!J.isInstancedMesh&&Ht.instancing===!0||J.isSkinnedMesh&&Ht.skinning===!1||!J.isSkinnedMesh&&Ht.skinning===!0||J.isInstancedMesh&&Ht.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ht.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ht.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ht.instancingMorph===!1&&J.morphTexture!==null||Ht.envMap!==Vt||gt.fog===!0&&Ht.fog!==At||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Et.numPlanes||Ht.numIntersection!==Et.numIntersection)||Ht.vertexAlphas!==jt||Ht.vertexTangents!==Qt||Ht.morphTargets!==kt||Ht.morphNormals!==le||Ht.morphColors!==ye||Ht.toneMapping!==Me||Ht.morphTargetsCount!==ue)&&(de=!0):(de=!0,Ht.__version=gt.version);let Cn=Ht.currentProgram;de===!0&&(Cn=lo(gt,Z,J));let Es=!1,un=!1,gr=!1;const Se=Cn.getUniforms(),Wn=Ht.uniforms;if(ct.useProgram(Cn.program)&&(Es=!0,un=!0,gr=!0),gt.id!==M&&(M=gt.id,un=!0),Es||E!==A){ct.buffers.depth.getReversed()?(B.copy(A.projectionMatrix),Bb(B),zb(B),Se.setValue(b,"projectionMatrix",B)):Se.setValue(b,"projectionMatrix",A.projectionMatrix),Se.setValue(b,"viewMatrix",A.matrixWorldInverse);const Ri=Se.map.cameraPosition;Ri!==void 0&&Ri.setValue(b,Y.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&Se.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Se.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,un=!0,gr=!0)}if(J.isSkinnedMesh){Se.setOptional(b,J,"bindMatrix"),Se.setOptional(b,J,"bindMatrixInverse");const vn=J.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Se.setValue(b,"boneTexture",vn.boneTexture,T))}J.isBatchedMesh&&(Se.setOptional(b,J,"batchingTexture"),Se.setValue(b,"batchingTexture",J._matricesTexture,T),Se.setOptional(b,J,"batchingIdTexture"),Se.setValue(b,"batchingIdTexture",J._indirectTexture,T),Se.setOptional(b,J,"batchingColorTexture"),J._colorsTexture!==null&&Se.setValue(b,"batchingColorTexture",J._colorsTexture,T));const _r=pt.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Ut.update(J,pt,Cn),(un||Ht.receiveShadow!==J.receiveShadow)&&(Ht.receiveShadow=J.receiveShadow,Se.setValue(b,"receiveShadow",J.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Wn.envMap.value=Vt,Wn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&Z.environment!==null&&(Wn.envMapIntensity.value=Z.environmentIntensity),un&&(Se.setValue(b,"toneMappingExposure",S.toneMappingExposure),Ht.needsLights&&Kp(Wn,gr),At&&gt.fog===!0&&j.refreshFogUniforms(Wn,At),j.refreshMaterialUniforms(Wn,gt,X,z,h.state.transmissionRenderTarget[A.id]),na.upload(b,Au(Ht),Wn,T)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(na.upload(b,Au(Ht),Wn,T),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Se.setValue(b,"center",J.center),Se.setValue(b,"modelViewMatrix",J.modelViewMatrix),Se.setValue(b,"normalMatrix",J.normalMatrix),Se.setValue(b,"modelMatrix",J.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const vn=gt.uniformsGroups;for(let Ri=0,Pi=vn.length;Ri<Pi;Ri++){const Ru=vn[Ri];G.update(Ru,Cn),G.bind(Ru,Cn)}}return Cn}function Kp(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Zp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(A,Z,pt){Q.get(A.texture).__webglTexture=Z,Q.get(A.depthTexture).__webglTexture=pt;const gt=Q.get(A);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,Z){const pt=Q.get(A);pt.__webglFramebuffer=Z,pt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(A,Z=0,pt=0){U=A,F=Z,O=pt;let gt=!0,J=null,At=!1,It=!1;if(A){const Vt=Q.get(A);if(Vt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(b.FRAMEBUFFER,null),gt=!1;else if(Vt.__webglFramebuffer===void 0)T.setupRenderTarget(A);else if(Vt.__hasExternalTextures)T.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const kt=A.depthTexture;if(Vt.__boundDepthTexture!==kt){if(kt!==null&&Q.has(kt)&&(A.width!==kt.image.width||A.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(It=!0);const Qt=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qt[Z])?J=Qt[Z][pt]:J=Qt[Z],At=!0):A.samples>0&&T.useMultisampledRTT(A)===!1?J=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Qt)?J=Qt[pt]:J=Qt,w.copy(A.viewport),ot.copy(A.scissor),rt=A.scissorTest}else w.copy(I).multiplyScalar(X).floor(),ot.copy(ft).multiplyScalar(X).floor(),rt=K;if(ct.bindFramebuffer(b.FRAMEBUFFER,J)&&gt&&ct.drawBuffers(A,J),ct.viewport(w),ct.scissor(ot),ct.setScissorTest(rt),At){const Vt=Q.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,pt)}else if(It){const Vt=Q.get(A.texture),jt=Z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Vt.__webglTexture,pt||0,jt)}M=-1},this.readRenderTargetPixels=function(A,Z,pt,gt,J,At,It){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){ct.bindFramebuffer(b.FRAMEBUFFER,zt);try{const Vt=A.texture,jt=Vt.format,Qt=Vt.type;if(!lt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-gt&&pt>=0&&pt<=A.height-J&&b.readPixels(Z,pt,gt,J,Gt.convert(jt),Gt.convert(Qt),At)}finally{const Vt=U!==null?Q.get(U).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,pt,gt,J,At,It){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){const Vt=A.texture,jt=Vt.format,Qt=Vt.type;if(!lt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=A.width-gt&&pt>=0&&pt<=A.height-J){ct.bindFramebuffer(b.FRAMEBUFFER,zt);const kt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,kt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels(Z,pt,gt,J,Gt.convert(jt),Gt.convert(Qt),0);const le=U!==null?Q.get(U).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,le);const ye=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Fb(b,ye,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,kt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(kt),b.deleteSync(ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Z=null,pt=0){A.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,A=arguments[1]);const gt=Math.pow(2,-pt),J=Math.floor(A.image.width*gt),At=Math.floor(A.image.height*gt),It=Z!==null?Z.x:0,zt=Z!==null?Z.y:0;T.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,pt,0,0,It,zt,J,At),ct.unbindTexture()},this.copyTextureToTexture=function(A,Z,pt=null,gt=null,J=0){A.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,A=arguments[1],Z=arguments[2],J=arguments[3]||0,pt=null);let At,It,zt,Vt,jt,Qt,kt,le,ye;const Me=A.isCompressedTexture?A.mipmaps[J]:A.image;pt!==null?(At=pt.max.x-pt.min.x,It=pt.max.y-pt.min.y,zt=pt.isBox3?pt.max.z-pt.min.z:1,Vt=pt.min.x,jt=pt.min.y,Qt=pt.isBox3?pt.min.z:0):(At=Me.width,It=Me.height,zt=Me.depth||1,Vt=0,jt=0,Qt=0),gt!==null?(kt=gt.x,le=gt.y,ye=gt.z):(kt=0,le=0,ye=0);const on=Gt.convert(Z.format),ue=Gt.convert(Z.type);let Ht;Z.isData3DTexture?(T.setTexture3D(Z,0),Ht=b.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(T.setTexture2DArray(Z,0),Ht=b.TEXTURE_2D_ARRAY):(T.setTexture2D(Z,0),Ht=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment);const si=b.getParameter(b.UNPACK_ROW_LENGTH),de=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(b.UNPACK_SKIP_PIXELS),Es=b.getParameter(b.UNPACK_SKIP_ROWS),un=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Me.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Me.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,jt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Qt);const gr=A.isDataArrayTexture||A.isData3DTexture,Se=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Wn=Q.get(A),_r=Q.get(Z),vn=Q.get(Wn.__renderTarget),Ri=Q.get(_r.__renderTarget);ct.bindFramebuffer(b.READ_FRAMEBUFFER,vn.__webglFramebuffer),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Pi=0;Pi<zt;Pi++)gr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,J,Qt+Pi),A.isDepthTexture?(Se&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(Z).__webglTexture,J,ye+Pi),b.blitFramebuffer(Vt,jt,At,It,kt,le,At,It,b.DEPTH_BUFFER_BIT,b.NEAREST)):Se?b.copyTexSubImage3D(Ht,J,kt,le,ye+Pi,Vt,jt,At,It):b.copyTexSubImage2D(Ht,J,kt,le,ye+Pi,Vt,jt,At,It);ct.bindFramebuffer(b.READ_FRAMEBUFFER,null),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Ht,J,kt,le,ye,At,It,zt,on,ue,Me.data):Z.isCompressedArrayTexture?b.compressedTexSubImage3D(Ht,J,kt,le,ye,At,It,zt,on,Me.data):b.texSubImage3D(Ht,J,kt,le,ye,At,It,zt,on,ue,Me):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,kt,le,At,It,on,ue,Me.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,kt,le,Me.width,Me.height,on,Me.data):b.texSubImage2D(b.TEXTURE_2D,J,kt,le,At,It,on,ue,Me);b.pixelStorei(b.UNPACK_ROW_LENGTH,si),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Es),b.pixelStorei(b.UNPACK_SKIP_IMAGES,un),J===0&&Z.generateMipmaps&&b.generateMipmap(Ht),ct.unbindTexture()},this.copyTextureToTexture3D=function(A,Z,pt=null,gt=null,J=0){return A.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pt=arguments[0]||null,gt=arguments[1]||null,A=arguments[2],Z=arguments[3],J=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,Z,pt,gt,J)},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&T.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?T.setTextureCube(A,0):A.isData3DTexture?T.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?T.setTexture2DArray(A,0):T.setTexture2D(A,0),ct.unbindTexture()},this.resetState=function(){F=0,O=0,U=null,ct.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Yw extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new tt;class _a{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new zn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gp extends Ss{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vs;const Tr=new tt,ks=new tt,Hs=new tt,Gs=new $t,Ar=new $t,Wp=new Ee,Fo=new tt,Cr=new tt,Bo=new tt,Tf=new $t,Il=new $t,Af=new $t;class Zw extends Ve{constructor(t=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new en;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Kw(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new _a(i,3,0,!1)),Vs.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new $t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;zo(Fo.set(-.5,-.5,0),Hs,o,ks,s,r),zo(Cr.set(.5,-.5,0),Hs,o,ks,s,r),zo(Bo.set(.5,.5,0),Hs,o,ks,s,r),Tf.set(0,0),Il.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(Fo,Cr,Bo,!1,Tr);if(a===null&&(zo(Cr.set(-.5,.5,0),Hs,o,ks,s,r),Il.set(0,1),a=t.ray.intersectTriangle(Fo,Bo,Cr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:pn.getInterpolation(Tr,Fo,Cr,Bo,Tf,Il,Af,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zo(n,t,e,i,s,r){Gs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ar.x=r*Gs.x-s*Gs.y,Ar.y=s*Gs.x+r*Gs.y):Ar.copy(Gs),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(Wp)}class va extends Ss{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new tt,ya=new tt,Cf=new Ee,Rr=new Va,Vo=new za,Ul=new tt,Rf=new tt;class Ur extends Ve{constructor(t=new en,e=new va){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)xa.fromBufferAttribute(e,s-1),ya.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xa.distanceTo(ya);t.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),Vo.radius+=r,t.ray.intersectsSphere(Vo)===!1)return;Cf.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=u.getX(_),D=u.getX(_+1),P=ko(this,t,Rr,l,h,D);P&&e.push(P)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(p),h=ko(this,t,Rr,l,_,g);h&&e.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=ko(this,t,Rr,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=ko(this,t,Rr,l,v-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ko(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(xa.fromBufferAttribute(o,s),ya.fromBufferAttribute(o,r),e.distanceSqToSegment(xa,ya,Ul,Rf)>i)return;Ul.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:Rf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pf=new tt,Lf=new tt;class $p extends Ur{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);t.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jw extends sn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Ho=new tt,Go=new tt,Nl=new tt,Wo=new pn;class Qw extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Hr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:h}=Wo;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Wo.getNormal(Nl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let D=0;D<3;D++){const P=(D+1)%3,S=d[D],q=d[P],F=Wo[u[D]],O=Wo[u[P]],U=`${S}_${q}`,M=`${q}_${S}`;M in f&&f[M]?(Nl.dot(f[M].normal)<=r&&(p.push(F.x,F.y,F.z),p.push(O.x,O.y,O.z)),f[M]=null):U in f||(f[U]={index0:c[D],index1:c[P],normal:Nl.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:g}=f[v];Ho.fromBufferAttribute(a,_),Go.fromBufferAttribute(a,g),p.push(Ho.x,Ho.y,Ho.z),p.push(Go.x,Go.y,Go.z)}this.setAttribute("position",new En(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Df extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new Ee,If=new tt,Uf=new tt;class tT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eT extends tT{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new eT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nT extends Xp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nf=new Ee;class iT{constructor(t,e,i=0,s=1/0){this.ray=new Va(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,i=[]){return Gc(t,this,i,e),i.sort(Of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Gc(t[s],this,i,e);return i.sort(Of),i}}function Of(n,t){return n.distance-t.distance}function Gc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Gc(r[o],t,e,!0)}}class Ff{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sT extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new qt(i),s=new qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=e;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new en;u.setAttribute("position",new En(l,3)),u.setAttribute("color",new En(c,3));const d=new va({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class rT extends Ms{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Bf={type:"change"},Su={type:"start"},qp={type:"end"},$o=new Va,zf=new ki,oT=Math.cos(70*Nb.DEG2RAD),De=new tt,an=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class aT extends rT{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ks.ROTATE,MIDDLE:Ks.DOLLY,RIGHT:Ks.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new bs,this._lastTargetPosition=new tt,this._quat=new bs().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new tt,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new tt,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cT.bind(this),this._onPointerDown=lT.bind(this),this._onPointerUp=uT.bind(this),this._onContextMenu=_T.bind(this),this._onMouseWheel=hT.bind(this),this._onKeyDown=pT.bind(this),this._onTouchStart=mT.bind(this),this._onTouchMove=gT.bind(this),this._onMouseDown=dT.bind(this),this._onMouseMove=fT.bind(this),this._interceptControlDown=vT.bind(this),this._interceptControlUp=xT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=De.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new tt(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new tt(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($o.origin.copy(this.object.position),$o.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($o.direction))<oT?this.object.lookAt(this.target):(zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),$o.intersectPlane(zf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function uT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qp),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Su)}function fT(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hT(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qp))}function pT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function mT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Su)}function gT(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function _T(n){this.enabled!==!1&&n.preventDefault()}function vT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},bT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},MT={style:{display:"flex","align-items":"center",gap:"8px"}},ST={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},ET={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},wT={style:{color:"#00d2ff","font-weight":"bold"}},TT={style:{color:"#ecc94b"}},AT={style:{color:"#e2e8f0"}},CT={style:{color:"#e2e8f0"}},RT={style:{color:"#63b3ed"}},PT={style:{color:"#e2e8f0"}},LT={style:{color:"#e2e8f0"}},DT={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},IT={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},UT={style:{display:"flex","align-items":"center",gap:"6px"}},NT={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},OT={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},FT={style:{color:"#48bb78"}},BT={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},zT={style:{color:"#ecc94b"}},VT={style:{color:"#63b3ed"}},kT=Ai({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=Yt(null),i=Yt(null),s=Yt("current"),r=Yt({visible:!1,x:0,y:0}),o=ze(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(W){s.value=W,M()}let l,c,u,d,f,p,v,_=[],g=null,h=new js,D=new js,P=null;function S(W){const dt=Math.max(0,Math.min(1,(W-65)/31)),N=new qt;return dt<.25?N.lerpColors(new qt(16007006),new qt(16347926),dt/.25):dt<.5?N.lerpColors(new qt(16347926),new qt(15381256),(dt-.25)/.25):dt<.75?N.lerpColors(new qt(15381256),new qt(1096065),(dt-.5)/.25):dt<.9?N.lerpColors(new qt(1096065),new qt(440020),(dt-.75)/.15):N.lerpColors(new qt(440020),new qt(9133302),(dt-.9)/.1),N}function q(W,z=24,X="#94a3b8"){const dt=document.createElement("canvas");dt.width=512,dt.height=128;const N=dt.getContext("2d");N.fillStyle="transparent",N.fillRect(0,0,dt.width,dt.height),N.font=`bold ${z*2}px "Fira Code", monospace`,N.fillStyle=X,N.textAlign="center",N.textBaseline="middle",N.fillText(W,dt.width/2,dt.height/2);const I=new Jw(dt);I.minFilter=In;const ft=new Gp({map:I,transparent:!0,depthWrite:!1}),K=new Zw(ft);return K.scale.set(4,1,1),K}function F(){if(!c||!d||!e.value)return;const W=e.value.clientWidth||800,z=e.value.clientHeight||600;if(W===0||z===0)return;c.aspect=W/z,c.updateProjectionMatrix();const X=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(T=>T.voltageTarget))]:[12],dt=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(T=>T.loadTarget))]:[1],N=Math.max(1,X.length),I=Math.max(1,dt.length),ft=Math.max(18,Math.min(65,N*2.2)),K=Math.max(18,Math.min(65,I*2.2)),L=12,nt=ft+8,ht=K+8,B=L+4,$=c.fov*Math.PI/180,Y=Math.max(.1,c.aspect),ut=(nt+ht)*.72,C=(B*1.1+(nt+ht)*.35)/(2*Math.tan($/2)*.74),V=ut/(2*Math.tan($/2)*Y*.74),b=Math.max(C,V,22),it=.56,et=Math.PI/4,lt=L*.38,ct=b*Math.cos(it)*Math.sin(et),Mt=lt+b*Math.sin(it),Q=b*Math.cos(it)*Math.cos(et);c.position.set(ct,Mt,Q),c.near=.5,c.far=Math.max(3e3,b*25),c.updateProjectionMatrix(),d.target.set(0,lt,0),d.minDistance=Math.max(5,b*.15),d.maxDistance=Math.max(120,b*6),d.update()}function O(){F()}function U(){if(!e.value)return;const W=e.value.clientWidth||800,z=e.value.clientHeight||600;l=new Yw,l.background=new qt(461588),l.fog=null,c=new bn(45,W/z,.5,3e3),u=new jw({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(W,z),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=Si,e.value.appendChild(u.domElement),d=new aT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const X=new nT(16777215,.88);l.add(X);const dt=new Fl(16777215,.45);dt.position.set(40,60,40),l.add(dt);const N=new Fl(16777215,.35);N.position.set(-40,50,-40),l.add(N);const I=new Fl(16777215,.25);I.position.set(0,40,-50),l.add(I),p=new iT,v=new $t(-999,-999),l.add(h),l.add(D),P=new ResizeObserver(()=>{xt()}),P.observe(e.value),window.addEventListener("resize",xt),e.value.addEventListener("mousemove",E),e.value.addEventListener("mouseleave",w),M(),F(),at()}function M(){if(!l)return;for(;h.children.length>0;){const vt=h.children[0];h.remove(vt)}for(;D.children.length>0;){const vt=D.children[0];D.remove(vt)}_=[],g=null,i.value=null,r.value.visible=!1;const W=t.points;if(!W||W.length===0)return;const z=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((vt,bt)=>vt-bt):[...new Set(W.map(vt=>vt.voltageTarget))].sort((vt,bt)=>vt-bt),X=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((vt,bt)=>vt-bt):[...new Set(W.map(vt=>vt.loadTarget))].sort((vt,bt)=>vt-bt),dt=Math.max(1,z.length),N=Math.max(1,X.length),I=Math.max(18,Math.min(65,dt*2.2)),ft=Math.max(18,Math.min(65,N*2.2)),K=12,L=dt>1?I/(dt-1):I,nt=N>1?ft/(N-1):ft,ht=Math.max(.12,Math.min(1.5,L*.7)),B=Math.max(.12,Math.min(1.5,nt*.7)),$=new Map;W.forEach(vt=>{if(vt.status==="completed"||vt.timestamp>0){const bt=`${vt.voltageTarget.toFixed(3)}_${vt.loadTarget.toFixed(3)}`;$.set(bt,vt)}});const ut=Math.max(I,ft)+14,y=Math.max(12,Math.min(40,Math.max(dt,N))),C=new sT(ut,y,165063,1976635);C.position.set(0,0,0),h.add(C);const V=new so(ut*1.4,ut*1.4),b=new Df({color:725280,roughness:.7,metalness:.1}),it=new Nn(V,b);it.rotation.x=-Math.PI/2,it.position.y=-.05,it.receiveShadow=!0,h.add(it);const et=new va({color:3718648,linewidth:2}),lt=new en().setFromPoints([new tt(-I/2-1,0,ft/2+1),new tt(I/2+2,0,ft/2+1)]);h.add(new Ur(lt,et));const ct=q("X: 输入电压 Vin (V)",22,"#38bdf8");ct.position.set(0,.4,ft/2+3.2),ct.scale.set(7.5,1.9,1),h.add(ct);const Mt=10,Q=Math.max(1,Math.ceil(dt/Mt));z.forEach((vt,bt)=>{if(bt%Q===0||bt===dt-1){const Et=-I/2+(dt>1?bt/(dt-1)*I:0),Tt=q(`${vt}V`,16,"#94a3b8");Tt.position.set(Et,.2,ft/2+1.8),Tt.scale.set(Math.min(3.2,L*1.5),.9,1),h.add(Tt)}});const T=new en().setFromPoints([new tt(-I/2-1,0,-ft/2-1),new tt(-I/2-1,0,ft/2+2)]);h.add(new Ur(T,et));const x=s.value==="power"||t.loadMode==="CW",k=x?"W":"A",mt=q(x?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");mt.position.set(-I/2-3.8,.4,0),mt.scale.set(8.5,2.1,1),h.add(mt);const H=Math.max(1,Math.ceil(N/Mt));X.forEach((vt,bt)=>{if(bt%H===0||bt===N-1){const Et=-ft/2+(N>1?bt/(N-1)*ft:0),Tt=q(`${vt}${k}`,16,"#94a3b8");Tt.position.set(-I/2-2.2,.2,Et),Tt.scale.set(Math.min(3.2,nt*1.5),.9,1),h.add(Tt)}});const R=new en().setFromPoints([new tt(-I/2-1,0,ft/2+1),new tt(-I/2-1,K+1.5,ft/2+1)]);h.add(new Ur(R,et));const j=q("Z: 转换效率 η (%)",22,"#10b981");j.position.set(-I/2-1,K+2.4,ft/2+1),j.scale.set(7.5,1.9,1),h.add(j),[20,40,60,80,100].forEach(vt=>{const bt=vt/100*K,Et=q(`${vt}%`,16,"#6ee7b7");Et.position.set(-I/2-2,bt,ft/2+1),Et.scale.set(2.8,.8,1),h.add(Et);const Tt=new en().setFromPoints([new tt(-I/2-.8,bt,ft/2+1),new tt(-I/2-.2,bt,ft/2+1)]);h.add(new Ur(Tt,et))}),z.forEach((vt,bt)=>{X.forEach((Et,Tt)=>{const Bt=`${vt.toFixed(3)}_${Et.toFixed(3)}`,Ut=$.get(Bt);if(!Ut)return;const Ct=-I/2+(dt>1?bt/(dt-1)*I:0),Zt=-ft/2+(N>1?Tt/(N-1)*ft:0),Gt=Math.max(.5,Math.min(100,Ut.efficiency)),ie=Math.max(.2,Gt/100*K),G=new hr(ht,ie,B);G.translate(0,ie/2,0),G.computeBoundingBox(),G.computeBoundingSphere();const Rt=S(Gt),_t=new Df({color:Rt,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),St=new Nn(G,_t);St.position.set(Ct,0,Zt),St.castShadow=!0,St.receiveShadow=!0,St.__barPoint=Ut;const Pt=new Qw(G),wt=new va({color:16777215,transparent:!0,opacity:.25}),Ft=new $p(Pt,wt);St.add(Ft),D.add(St),St.scale.set(1,.01,1),_.push({mesh:St,wireframe:Ft,point:Ut,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ie,material:_t,origColor:Rt.clone()})})}),F()}function E(W){if(!e.value)return;const z=e.value.getBoundingClientRect();v.x=(W.clientX-z.left)/z.width*2-1,v.y=-((W.clientY-z.top)/z.height)*2+1,r.value.x=W.clientX-z.left,r.value.y=W.clientY-z.top}function w(){v.x=-999,v.y=-999,r.value.visible=!1,g&&ot()}function ot(){g&&(g.targetElevation=0,g.wireframe.material.opacity=.25,g.wireframe.material.color.set(16777215),g=null,i.value=null,r.value.visible=!1)}function rt(){if(!c||!l||_.length===0)return;p.setFromCamera(v,c);const W=_.map(X=>X.mesh),z=p.intersectObjects(W,!1);if(z.length>0){const X=z[0].object,dt=_.find(N=>N.mesh===X);dt&&dt!==g&&(g&&ot(),g=dt,i.value=dt.point,r.value.visible=!0,dt.targetElevation=1.2,dt.wireframe.material.opacity=.9,dt.wireframe.material.color.set(54015))}else g&&ot()}function at(){f=requestAnimationFrame(at),d&&d.update(),rt(),_.forEach(W=>{W.currentScaleY+=(W.targetScaleY-W.currentScaleY)*.1,W.mesh.scale.y=W.currentScaleY,W.currentElevation+=(W.targetElevation-W.currentElevation)*.15,W.mesh.position.y=W.baseY+W.currentElevation}),u&&l&&c&&u.render(l,c)}function xt(){if(!e.value||!u||!c)return;const W=e.value.clientWidth,z=e.value.clientHeight;W===0||z===0||(c.aspect=W/z,c.updateProjectionMatrix(),u.setSize(W,z))}return _s(()=>t.points,()=>{M()},{deep:!0}),ur(()=>{U()}),dr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",xt),P&&(P.disconnect(),P=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(W,z)=>(Nt(),Ot("div",yT,[m("div",bT,[m("div",MT,[z[2]||(z[2]=jr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5e3b1907><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-5e3b1907></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-5e3b1907></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-5e3b1907></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-5e3b1907>3D 空间特征柱状图</span>',2)),m("span",ST,"| X: Vin | Y: "+yt(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Nt(),Ot("div",ET,[m("span",wT," 选定点 #"+yt(i.value.stepIndex)+": ",1),m("span",null,[z[3]||(z[3]=Dt("Vin: ",-1)),m("b",TT,yt(i.value.vin.toFixed(3))+"V",1)]),m("span",null,[z[4]||(z[4]=Dt("Iin: ",-1)),m("b",AT,yt(i.value.iin.toFixed(3))+"A",1)]),m("span",null,[z[5]||(z[5]=Dt("Pin: ",-1)),m("b",CT,yt(i.value.pin.toFixed(3))+"W",1)]),m("span",null,[z[6]||(z[6]=Dt("Vout: ",-1)),m("b",RT,yt(i.value.vout.toFixed(3))+"V",1)]),m("span",null,[z[7]||(z[7]=Dt("Iout: ",-1)),m("b",PT,yt(i.value.iout.toFixed(3))+"A",1)]),m("span",null,[z[8]||(z[8]=Dt("Pout: ",-1)),m("b",LT,yt(i.value.pout.toFixed(3))+"W",1)]),m("span",DT," 效率 η: "+yt(i.value.efficiency.toFixed(2))+"% ",1)])):(Nt(),Ot("div",IT,[...z[9]||(z[9]=[m("span",{style:{color:"#ecc94b"}},"💡",-1),m("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),m("div",UT,[m("div",NT,[m("button",{class:"btn",style:pe({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:z[0]||(z[0]=X=>a("current"))}," Y: 负载电流 (A) ",4),m("button",{class:"btn",style:pe({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:z[1]||(z[1]=X=>a("power"))}," Y: 输出功率 (W) ",4)]),m("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:O,title:"重置视角"}," 重置视角 ")])]),m("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Nt(),Ot("div",{key:0,style:pe([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[m("div",OT,[m("span",null,"采样点 #"+yt(i.value.stepIndex),1),m("span",FT,"η = "+yt(i.value.efficiency.toFixed(2))+"%",1)]),m("div",BT,[m("div",null,[z[10]||(z[10]=Dt("Vin: ",-1)),m("span",zT,yt(i.value.vin.toFixed(2))+"V",1)]),m("div",null,[z[11]||(z[11]=Dt("Vout: ",-1)),m("span",VT,yt(i.value.vout.toFixed(2))+"V",1)]),m("div",null,[z[12]||(z[12]=Dt("Iin: ",-1)),m("span",null,yt(i.value.iin.toFixed(3))+"A",1)]),m("div",null,[z[13]||(z[13]=Dt("Iout: ",-1)),m("span",null,yt(i.value.iout.toFixed(3))+"A",1)]),m("div",null,[z[14]||(z[14]=Dt("Pin: ",-1)),m("span",null,yt(i.value.pin.toFixed(2))+"W",1)]),m("div",null,[z[15]||(z[15]=Dt("Pout: ",-1)),m("span",null,yt(i.value.pout.toFixed(2))+"W",1)])])],4)):Te("",!0),z[16]||(z[16]=jr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-5e3b1907><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-5e3b1907><span data-v-5e3b1907>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-5e3b1907>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-5e3b1907></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-5e3b1907><span data-v-5e3b1907>&lt;70% 低效</span><span data-v-5e3b1907>85%</span><span data-v-5e3b1907>&gt;95% 高效</span></div></div>',1))],512)]))}}),HT=cu(kT,[["__scopeId","data-v-5e3b1907"]]),GT={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},WT={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},$T={style:{display:"flex","align-items":"center",gap:"12px"}},XT={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},qT={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},jT={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},YT={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},KT={style:{color:"#68d391","font-size":"13px"}},ZT={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},JT={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},QT={style:{color:"#4fd1c5","font-size":"12px"}},tA={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},eA={style:{color:"#ecc94b"}},nA={style:{display:"flex","align-items":"center",gap:"8px"}},iA={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},sA=["value"],rA={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},oA={style:{width:"100%",height:"100%",position:"relative"}},aA={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},lA={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},cA={style:{flex:"1",overflow:"auto",padding:"12px"}},uA={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},dA={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},fA={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},hA={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},pA=["onClick"],mA={key:1,style:{color:"#4a5568"}},gA={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},_A={style:{color:"#63b3ed","font-weight":"bold"}},vA={style:{color:"#ecc94b"}},xA={style:{color:"#63b3ed"}},yA={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},bA=Ai({__name:"Result3DView",setup(n){const t=Uv(),e=lp(),i=Yt(null),s=Yt([]),r=Yt(""),o=Yt(null),a=Yt("3d");async function l(){const v=t.params.id||"";if(s.value=await up(),v){const _=await Q0(v);if(_){i.value=_,r.value=_.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(v,_){if(i.value)return i.value.points.find(g=>Math.abs(g.voltageTarget-v)<1e-4&&Math.abs(g.loadTarget-_)<1e-4)}function u(v){return v>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:v>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:v>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&Ko(i.value)}function p(){window.opener?window.close():e.push("/")}return _s(()=>t.params.id,()=>{l()}),ur(()=>{l()}),(v,_)=>{var h,D,P,S,q,F,O,U;const g=ru("router-link");return Nt(),Ot("div",GT,[m("header",WT,[m("div",$T,[Ue(g,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:iu(()=>[..._[5]||(_[5]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 控制台 ",-1)])]),_:1}),m("div",null,[m("div",XT,[m("span",null,yt(((h=i.value)==null?void 0:h.title)||"测试结果数据查看"),1),_[6]||(_[6]=m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),m("div",qT," 测试时间: "+yt(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+yt((P=(D=i.value)==null?void 0:D.config)==null?void 0:P.voltageMin)+"V~"+yt((q=(S=i.value)==null?void 0:S.config)==null?void 0:q.voltageMax)+"V, "+yt((O=(F=i.value)==null?void 0:F.config)==null?void 0:O.loadMode),1)])]),(U=i.value)!=null&&U.summary?(Nt(),Ot("div",jT,[m("div",YT,[m("span",null,[_[7]||(_[7]=Dt("峰值效率 η_max: ",-1)),m("b",KT,yt(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Nt(),Ot("span",ZT," (@"+yt(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+yt(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Te("",!0)]),m("div",JT,[m("span",null,[_[8]||(_[8]=Dt("平均效率 η_avg: ",-1)),m("b",QT,yt(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),m("div",tA,[m("span",null,[_[9]||(_[9]=Dt("矩阵测试点: ",-1)),m("b",eA,yt(i.value.points.length)+" 点",1)])])])):Te("",!0),m("div",nA,[m("div",iA,[m("button",{class:"btn",style:pe({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[0]||(_[0]=M=>a.value="3d")}," 3D 空间柱状图 ",4),m("button",{class:"btn",style:pe({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[1]||(_[1]=M=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?re((Nt(),Ot("select",{key:0,"onUpdate:modelValue":_[2]||(_[2]=M=>r.value=M),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Nt(!0),Ot(Le,null,yi(s.value,M=>(Nt(),Ot("option",{key:M.id,value:M.id},yt(M.title),9,sA))),128))],544)),[[ha,r.value]]):Te("",!0),i.value?(Nt(),Ot("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[..._[10]||(_[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Dt(" 下载 CSV ",-1)])])):Te("",!0),m("button",{class:"btn",style:{padding:"4px 8px"},onClick:p,title:"关闭页面"}," ✕ ")])]),m("div",rA,[re(m("div",oA,[i.value&&i.value.points.length>0?(Nt(),lu(HT,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Nt(),Ot("div",aA," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[Ju,a.value==="3d"]]),re(m("div",lA,[_[17]||(_[17]=jr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),m("div",cA,[i.value?(Nt(),Ot("table",uA,[m("thead",null,[m("tr",dA,[m("th",fA," 负载 ("+yt(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Nt(!0),Ot(Le,null,yi(i.value.voltageSteps,M=>(Nt(),Ot("th",{key:M,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},yt(M)+"V ",1))),128))])]),m("tbody",null,[(Nt(!0),Ot(Le,null,yi(i.value.loadSteps,M=>(Nt(),Ot("tr",{key:M,style:{"border-bottom":"1px solid #2d3748"}},[m("td",hA,yt(M)+yt(i.value.config.loadMode==="CC"?"A":"W"),1),(Nt(!0),Ot(Le,null,yi(i.value.voltageSteps,E=>(Nt(),Ot("td",{key:E,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:_[3]||(_[3]=w=>w.currentTarget.style.transform="scale(1.04)"),onMouseleave:_[4]||(_[4]=w=>w.currentTarget.style.transform="scale(1.0)"),onClick:w=>o.value=c(E,M)||null},[c(E,M)?(Nt(),Ot("div",{key:0,style:pe([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(E,M).efficiency)])},yt(c(E,M).efficiency.toFixed(2))+"% ",5)):(Nt(),Ot("span",mA,"--"))],40,pA))),128))]))),128))])])):Te("",!0)]),o.value?(Nt(),Ot("div",gA,[m("span",_A," 选定点 (#"+yt(o.value.stepIndex)+"): ",1),m("span",null,"目标: "+yt(o.value.voltageTarget)+"V / "+yt(o.value.loadTarget)+yt(o.value.loadMode),1),m("span",null,[_[11]||(_[11]=Dt("实测Vin: ",-1)),m("b",vA,yt(o.value.vin.toFixed(3))+"V",1)]),m("span",null,[_[12]||(_[12]=Dt("实测Iin: ",-1)),m("b",null,yt(o.value.iin.toFixed(3))+"A",1)]),m("span",null,[_[13]||(_[13]=Dt("实测Pin: ",-1)),m("b",null,yt(o.value.pin.toFixed(3))+"W",1)]),m("span",null,[_[14]||(_[14]=Dt("实测Vout: ",-1)),m("b",xA,yt(o.value.vout.toFixed(3))+"V",1)]),m("span",null,[_[15]||(_[15]=Dt("实测Iout: ",-1)),m("b",null,yt(o.value.iout.toFixed(3))+"A",1)]),m("span",null,[_[16]||(_[16]=Dt("实测Pout: ",-1)),m("b",null,yt(o.value.pout.toFixed(3))+"W",1)]),m("span",yA," 效率 η: "+yt(o.value.efficiency.toFixed(2))+"% ",1)])):Te("",!0)],512),[[Ju,a.value==="matrix"]])])])}}}),MA={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},SA={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},EA={style:{display:"flex","align-items":"center",gap:"12px"}},wA={style:{display:"flex","align-items":"center",gap:"10px"}},TA={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},AA={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},CA={style:{flex:"1","border-right":"1px solid #2d3748",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},RA={class:"group-box",style:{"margin-top":"0","border-color":"#2b6cb0"}},PA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},LA={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},DA={style:{"font-family":"monospace",color:"#63b3ed"}},IA={style:{display:"flex","align-items":"center",gap:"6px"}},UA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},NA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},OA={style:{display:"flex",gap:"6px"}},FA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},BA={style:{display:"flex",gap:"6px"}},zA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},VA={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},kA={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},HA={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},GA={style:{"margin-bottom":"12px"}},WA={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},$A={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ecc94b"}},XA={style:{color:"#ecc94b","font-weight":"bold","font-size":"16px"}},qA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #48bb78"}},jA={style:{color:"#48bb78","font-weight":"bold","font-size":"16px"}},YA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},KA={style:{color:"#ed8936","font-weight":"bold","font-size":"16px"}},ZA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},JA={style:{display:"flex",gap:"6px"}},QA={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},tC={class:"group-box",style:{"margin-top":"0","border-color":"#c05621"}},eC={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},nC={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},iC={style:{"font-family":"monospace",color:"#ed8936"}},sC={style:{display:"flex","align-items":"center",gap:"6px"}},rC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},oC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},aC={style:{display:"flex",gap:"6px"}},lC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},cC={style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},uC={style:{color:"#ed8936","font-family":"monospace"}},dC={style:{display:"flex",gap:"6px"}},fC=["step"],hC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},pC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},mC={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},gC={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},_C={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},vC={style:{"margin-bottom":"12px"}},xC={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},yC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #63b3ed"}},bC={style:{color:"#63b3ed","font-weight":"bold","font-size":"15px"}},MC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},SC={style:{color:"#ed8936","font-weight":"bold","font-size":"15px"}},EC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #f56565"}},wC={style:{color:"#f56565","font-weight":"bold","font-size":"15px"}},TC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #9f7aea"}},AC={style:{color:"#b794f4","font-weight":"bold","font-size":"15px"}},CC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},RC={style:{display:"flex",gap:"6px"}},PC={style:{height:"180px","background-color":"#0d1117","border-top":"1px solid #2d3748",display:"flex","flex-direction":"column"}},LC={style:{height:"28px","background-color":"#161b22","border-bottom":"1px solid #30363d",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 12px","font-size":"11px","font-weight":"bold"}},DC={style:{color:"#6e7681"}},IC={key:0,style:{color:"#484f58","font-style":"italic"}},UC=Ai({__name:"SingleInstrumentView",setup(n){const t=pa.getInstance(),e=Yt(t.psu.isVirtual),i=Yt(5),s=Yt(2),r=Yt(!1),o=Yt(""),a=Mn({vin:0,iin:0,pin:0}),l=Yt("CC"),c=Yt(1),u=Yt(!1),d=Yt(!1),f=Yt(""),p=Mn({vout:0,iout:0,pout:0,r:0}),v=Yt([]),_=Yt(null);function g(K,L="#7ee787"){const nt=new Date().toLocaleTimeString();v.value.push({time:nt,text:K,color:L}),v.value.length>300&&v.value.shift(),setTimeout(()=>{_.value&&(_.value.scrollTop=_.value.scrollHeight)},10)}const h=ze(()=>{switch(l.value){case"CC":return"A";case"CV":return"V";case"CW":return"W";case"CR":return"Ω"}}),D=ze(()=>{switch(l.value){case"CC":return"0 ~ 30A (步进 0.1A)";case"CV":return"0 ~ 60V (步进 0.5V)";case"CW":return"0 ~ 150W (步进 1W)";case"CR":return"0.1 ~ 1000Ω (步进 1Ω)"}}),P=ze(()=>{switch(l.value){case"CC":return .1;case"CV":return .5;case"CW":return 1;case"CR":return .5}});function S(){switch(l.value){case"CC":c.value=1;break;case"CV":c.value=5;break;case"CW":c.value=10;break;case"CR":c.value=5;break}}async function q(){try{await t.setPsuVoltageOnly(i.value),g(`[PSU] 设置电压指令成功 (:APPLy CH1,${i.value.toFixed(3)},${s.value.toFixed(3)}) -> ${i.value.toFixed(3)} V`,"#ecc94b")}catch(K){g(`[PSU 错误] 设置电压失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function F(){try{await t.setPsuCurrentLimitOnly(s.value),g(`[PSU] 设置限流指令成功 (:APPLy CH1,${i.value.toFixed(3)},${s.value.toFixed(3)}) -> ${s.value.toFixed(3)} A`,"#48bb78")}catch(K){g(`[PSU 错误] 设置限流失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function O(K){try{await t.setPsuOutput(K,i.value,s.value),r.value=K,g(`[PSU] 电源输出开关指令已生效 -> ${K?"开启 (ON)":"关闭 (OFF)"}`,K?"#3fb950":"#f85149")}catch(L){g(`[PSU 错误] 输出切换失败: ${(L==null?void 0:L.message)||L}`,"#f85149")}}async function U(){const K=o.value.trim();if(K){g(`[PSU TX] >> ${K}`,"#58a6ff");try{const L=await t.sendPsuRawSCPI(K);g(`[PSU RX] << ${L}`,"#7ee787")}catch(L){g(`[PSU ERR] << ${(L==null?void 0:L.message)||L}`,"#f85149")}o.value=""}}async function M(){if(t.psu.state.connected)await t.psu.disconnect(),r.value=!1,g("[PSU] 电源连接已断开","#a0aec0");else try{if(e.value)t.psu.connectVirtual(),g("[PSU] 虚拟仿真电源驱动已连接","#3fb950");else{await t.psu.connectPhysical(9600),g("[PSU] 物理电源串口连接成功","#3fb950");const K=await t.queryPsuStatus();r.value=K.outputOn,K.setVoltage>0&&(i.value=K.setVoltage),K.setCurrentLimit>0&&(s.value=K.setCurrentLimit)}}catch(K){g(`[PSU 错误] 连接失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function E(){try{await t.setLoadModeAndValue(l.value,c.value),g(`[LOAD] 应用设定成功: 模式=${l.value}, 目标值=${c.value} ${h.value}`,"#ed8936")}catch(K){g(`[LOAD 错误] 应用负载设定失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function w(K){try{await t.setLoadModeAndValue(l.value,c.value),await t.setLoadInputState(K),u.value=K,g(`[LOAD] 负载带载开关已生效 -> ${K?"带载中 (ON)":"停止带载 (OFF)"}`,K?"#3fb950":"#f85149")}catch(L){g(`[LOAD 错误] 带载开关失败: ${(L==null?void 0:L.message)||L}`,"#f85149")}}async function ot(){d.value=!d.value;try{await t.setLoadShortState(d.value),g(`[LOAD] 短路测试状态切换 -> ${d.value?"短路开启 (ON)":"短路关闭 (OFF)"}`,"#e3b341")}catch(K){g(`[LOAD 错误] 短路测试指令失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function rt(){try{await t.clearLoadProtectionState(),g("[LOAD] 保护状态已复位 (:INP 0)","#58a6ff")}catch(K){g(`[LOAD 错误] 清除保护失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}async function at(){const K=f.value.trim();if(K){g(`[LOAD TX] >> ${K}`,"#f0883e");try{const L=await t.sendLoadRawSCPI(K);g(`[LOAD RX] << ${L}`,"#7ee787")}catch(L){g(`[LOAD ERR] << ${(L==null?void 0:L.message)||L}`,"#f85149")}f.value=""}}async function xt(){if(t.load.state.connected)await t.load.disconnect(),u.value=!1,g("[LOAD] 电子负载连接已断开","#a0aec0");else try{if(e.value)t.load.connectVirtual(),g("[LOAD] 虚拟仿真电子负载驱动已连接","#3fb950");else{await t.load.connectPhysical(9600),g("[LOAD] 物理电子负载串口连接成功","#3fb950");const K=await t.queryLoadStatus();u.value=K.inputOn,l.value=K.mode,K.targetVal>0&&(c.value=K.targetVal)}}catch(K){g(`[LOAD 错误] 连接失败: ${(K==null?void 0:K.message)||K}`,"#f85149")}}function W(){e.value?(t.autoConnectVirtual(),g("🧪 已切换至虚拟仿真演示模式","#3fb950")):(t.emergencyStopAll(),t.psu.disconnect(),t.load.disconnect(),g("🔌 已切换至物理真实串口模式，请点击连接打开串口","#58a6ff"))}async function z(){await t.emergencyStopAll(),r.value=!1,u.value=!1,g("🛑 紧急停止已触发: 电源输出已关闭，负载已停止带载","#f85149")}let X=null,dt=!1,N=0;async function I(){if(!dt){dt=!0;try{const K=await t.measureAsync();if(a.vin=K.vin,a.iin=K.iin,a.pin=K.pin,p.vout=K.vout,p.iout=K.iout,p.pout=K.pout,p.r=K.iout>.005?K.vout/K.iout:0,N++,N%4===0){if(t.psu.state.connected){const L=await t.queryPsuStatus();r.value=L.outputOn;const nt=document.activeElement;(nt==null?void 0:nt.getAttribute("data-field"))!=="psuSetV"&&L.setVoltage>0&&(i.value=L.setVoltage),(nt==null?void 0:nt.getAttribute("data-field"))!=="psuSetI"&&L.setCurrentLimit>0&&(s.value=L.setCurrentLimit)}if(t.load.state.connected){const L=await t.queryLoadStatus();u.value=L.inputOn,d.value=L.isShort;const nt=document.activeElement;(nt==null?void 0:nt.getAttribute("data-field"))!=="loadMode"&&(l.value=L.mode),(nt==null?void 0:nt.getAttribute("data-field"))!=="loadParamVal"&&L.targetVal>0&&(c.value=L.targetVal)}}}catch{}finally{dt=!1}}}function ft(){t.emergencyStopAll().catch(()=>{})}return ur(()=>{g("单仪器测试工作台已启动就绪。可独立调试电源电压/限流/开关与电子负载四模拉载。","#58a6ff"),X=window.setInterval(I,350),window.addEventListener("beforeunload",ft)}),dr(()=>{X&&clearInterval(X),window.removeEventListener("beforeunload",ft)}),(K,L)=>{const nt=ru("router-link");return Nt(),Ot("div",MA,[m("header",SA,[m("div",EA,[Ue(nt,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回测试工作台主界面"},{default:iu(()=>[...L[12]||(L[12]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 返回控制台 ",-1)])]),_:1}),L[13]||(L[13]=m("div",null,[m("div",{style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},[m("span",null,"🔧 仪器底层单体测试与硬件调试工作台 (Single Instrument Debugger)"),m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#2c5282",color:"#90cdf4",border:"1px solid #3182ce"}}," 单仪器独立控制 ")]),m("div",{style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}}," 支持电源独立加压/限流/开关输出，负载四模(CC/CV/CP/CR)单独带载，以及原始 SCPI 串口收发 ")],-1))]),m("div",wA,[m("label",TA,[re(m("input",{type:"checkbox","onUpdate:modelValue":L[0]||(L[0]=ht=>e.value=ht),onChange:W},null,544),[[zi,e.value]]),L[14]||(L[14]=Dt(" 🧪 仿真演示驱动 ",-1))]),m("button",{class:"btn btn-danger",style:{padding:"4px 12px","font-weight":"bold","font-size":"11.5px"},onClick:z}," 🛑 一键关闭所有输出 ")])]),m("div",AA,[m("div",CA,[m("div",RA,[L[26]||(L[26]=m("div",{class:"group-title",style:{color:"#63b3ed"}},[m("span",null,"⚡ 高精度直流电源单体测试 (RIGOL DP700 系列)")],-1)),m("div",PA,[m("div",LA,[m("span",{style:pe([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Jt(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),L[15]||(L[15]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"电源状态:",-1)),m("span",DA,yt(Jt(t).psu.state.portName),1)]),m("div",IA,[m("button",{class:"btn",style:pe([{backgroundColor:Jt(t).psu.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:M},yt(Jt(t).psu.state.connected?"断开连接":"连接电源"),5)])]),m("div",UA,[m("div",NA,[L[16]||(L[16]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定输出电压 (V):"),m("span",{style:{color:"#ecc94b","font-family":"monospace"}},"0 ~ 60V")],-1)),m("div",OA,[re(m("input",{type:"number","onUpdate:modelValue":L[1]||(L[1]=ht=>i.value=ht),"data-field":"psuSetV",step:"0.5",min:"0",max:"60",style:{flex:"1","font-weight":"bold",color:"#ecc94b","font-size":"14px"}},null,512),[[Be,i.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:q}," 应用电压 ")])]),m("div",FA,[L[17]||(L[17]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定最大限流 (A):"),m("span",{style:{color:"#48bb78","font-family":"monospace"}},"0 ~ 10A")],-1)),m("div",BA,[re(m("input",{type:"number","onUpdate:modelValue":L[2]||(L[2]=ht=>s.value=ht),"data-field":"psuSetI",step:"0.1",min:"0.1",max:"10",style:{flex:"1","font-weight":"bold",color:"#48bb78","font-size":"14px"}},null,512),[[Be,s.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:F}," 应用限流 ")])])]),m("div",zA,[m("button",{class:"btn",style:pe([{backgroundColor:r.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:r.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:L[3]||(L[3]=ht=>O(!0))}," ▶ 开始输出 (Output ON) ",4),m("button",{class:"btn",style:pe([{backgroundColor:r.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:L[4]||(L[4]=ht=>O(!1))}," ⏹ 停止输出 (Output OFF) ",4)]),m("div",VA,[r.value?(Nt(),Ot("span",kA," ● 电源通道输出已开启 (ON) ")):(Nt(),Ot("span",HA," ○ 电源通道输出已关闭 (OFF) "))]),m("div",GA,[L[24]||(L[24]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 电源实测遥测数据 (Telemetry): ",-1)),m("div",WA,[m("div",$A,[L[19]||(L[19]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vin:",-1)),m("div",XA,[Dt(yt(a.vin.toFixed(3))+" ",1),L[18]||(L[18]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",qA,[L[21]||(L[21]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iin:",-1)),m("div",jA,[Dt(yt(a.iin.toFixed(3))+" ",1),L[20]||(L[20]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",YA,[L[23]||(L[23]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pin:",-1)),m("div",KA,[Dt(yt(a.pin.toFixed(3))+" ",1),L[22]||(L[22]=m("span",{style:{"font-size":"10px"}},"W",-1))])])])]),m("div",ZA,[L[25]||(L[25]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送电源原始 SCPI 指令 (如 :MEAS:ALL? 或 *IDN?):",-1)),m("div",JA,[re(m("input",{type:"text","onUpdate:modelValue":L[5]||(L[5]=ht=>o.value=ht),placeholder:":APPL CH1,12,2 或 :OUTP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(U,["enter"])},null,544),[[Be,o.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:U}," 发送指令 ")])])])]),m("div",QA,[m("div",tC,[L[40]||(L[40]=m("div",{class:"group-title",style:{color:"#ed8936"}},[m("span",null,"🔋 可编程电子负载单体测试 (UNI-T UTL8500 系列)")],-1)),m("div",eC,[m("div",nC,[m("span",{style:pe([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Jt(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),L[27]||(L[27]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"负载状态:",-1)),m("span",iC,yt(Jt(t).load.state.portName),1)]),m("div",sC,[m("button",{class:"btn",style:pe([{backgroundColor:Jt(t).load.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:xt},yt(Jt(t).load.state.connected?"断开连接":"连接负载"),5)])]),m("div",rC,[m("div",oC,[L[29]||(L[29]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px"}}," 工作模式选择: ",-1)),m("div",aC,[re(m("select",{"onUpdate:modelValue":L[6]||(L[6]=ht=>l.value=ht),"data-field":"loadMode",style:{flex:"1","font-weight":"bold",color:"#63b3ed"},onChange:S},[...L[28]||(L[28]=[m("option",{value:"CC"},"CC (定电流模式)",-1),m("option",{value:"CV"},"CV (定电压模式)",-1),m("option",{value:"CW"},"CP/CW (定功率模式)",-1),m("option",{value:"CR"},"CR (定电阻模式)",-1)])],544),[[ha,l.value]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:E}," 应用模式 ")])]),m("div",lC,[m("div",cC,[m("span",null,"设定值 ("+yt(h.value)+"):",1),m("span",uC,yt(D.value),1)]),m("div",dC,[re(m("input",{type:"number","onUpdate:modelValue":L[7]||(L[7]=ht=>c.value=ht),"data-field":"loadParamVal",step:P.value,min:"0",style:{flex:"1","font-weight":"bold",color:"#ed8936","font-size":"14px"}},null,8,fC),[[Be,c.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:E}," 应用设定 ")])])]),m("div",hC,[m("button",{class:"btn",style:pe([{backgroundColor:d.value?"#744210":"#2d3748",borderColor:"#d69e2e",color:"#fbd38d"},{padding:"6px","font-size":"11.5px","font-weight":"bold"}]),onClick:ot}," ⚡ "+yt(d.value?"退出短路测试 (Short OFF)":"短路测试 (Short ON)"),5),m("button",{class:"btn",style:{"background-color":"#2d3748",color:"#90cdf4","border-color":"#3182ce",padding:"6px","font-size":"11.5px","font-weight":"bold"},onClick:rt}," 🛡️ 清除保护状态 (Clear Prot) ")]),m("div",pC,[m("button",{class:"btn",style:pe([{backgroundColor:u.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:u.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:L[8]||(L[8]=ht=>w(!0))}," ▶ 开始带载 (Input ON) ",4),m("button",{class:"btn",style:pe([{backgroundColor:u.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:L[9]||(L[9]=ht=>w(!1))}," ⏹ 停止带载 (Input OFF) ",4)]),m("div",mC,[u.value?(Nt(),Ot("span",gC," ● 电子负载正在拉载 (ON) ")):(Nt(),Ot("span",_C," ○ 电子负载带载已关闭 (OFF) "))]),m("div",vC,[L[38]||(L[38]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 负载实测遥测数据 (Telemetry): ",-1)),m("div",xC,[m("div",yC,[L[31]||(L[31]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vout:",-1)),m("div",bC,[Dt(yt(p.vout.toFixed(3))+" ",1),L[30]||(L[30]=m("span",{style:{"font-size":"9px"}},"V",-1))])]),m("div",MC,[L[33]||(L[33]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iout:",-1)),m("div",SC,[Dt(yt(p.iout.toFixed(3))+" ",1),L[32]||(L[32]=m("span",{style:{"font-size":"9px"}},"A",-1))])]),m("div",EC,[L[35]||(L[35]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pout:",-1)),m("div",wC,[Dt(yt(p.pout.toFixed(3))+" ",1),L[34]||(L[34]=m("span",{style:{"font-size":"9px"}},"W",-1))])]),m("div",TC,[L[37]||(L[37]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"等效电阻 R:",-1)),m("div",AC,[Dt(yt(p.r.toFixed(2))+" ",1),L[36]||(L[36]=m("span",{style:{"font-size":"9px"}},"Ω",-1))])])])]),m("div",CC,[L[39]||(L[39]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送负载原始 SCPI 指令 (如 :MEAS:VOLT? 或 :SOUR:CURR 2.0):",-1)),m("div",RC,[re(m("input",{type:"text","onUpdate:modelValue":L[10]||(L[10]=ht=>f.value=ht),placeholder:":SOUR:FUNC CC 或 :SOUR:INP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(at,["enter"])},null,544),[[Be,f.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:at}," 发送指令 ")])])])])]),m("div",PC,[m("div",LC,[L[41]||(L[41]=m("span",{style:{color:"#7ee787",display:"flex","align-items":"center",gap:"6px"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("polyline",{points:"4 17 10 11 4 5"}),m("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]),Dt(" 底盘通信终端交互日志 (Serial & SCPI Terminal Log) ")],-1)),m("button",{class:"btn",style:{padding:"1px 6px","font-size":"10px"},onClick:L[11]||(L[11]=ht=>v.value=[])}," 清空日志 ")]),m("div",{ref_key:"logContainerRef",ref:_,style:{flex:"1","overflow-y":"auto",padding:"8px 12px","font-family":"'Consolas', monospace","font-size":"11px","line-height":"1.5",color:"#7ee787"}},[(Nt(!0),Ot(Le,null,yi(v.value,(ht,B)=>(Nt(),Ot("div",{key:B,style:pe({color:ht.color})},[m("span",DC,"["+yt(ht.time)+"]",1),Dt(" "+yt(ht.text),1)],4))),128)),v.value.length===0?(Nt(),Ot("div",IC," 等待指令输入与硬件交互... ")):Te("",!0)],512)])])}}}),NC=[{path:"/",name:"Console",component:Xy},{path:"/single-instrument",name:"SingleInstrument",component:UC},{path:"/debug",redirect:"/single-instrument"},{path:"/result/:id",name:"Result3D",component:bA,props:!0}],OC=Iv({history:dv(),routes:NC}),jp=b_(T_);jp.use(OC);jp.mount("#app");
