var Jp=Object.defineProperty;var Qp=(n,t,e)=>t in n?Jp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Xt=(n,t,e)=>Qp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const xe={},fs=[],Jn=()=>{},Vf=()=>!1,ba=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ma=n=>n.startsWith("onUpdate:"),Ge=Object.assign,$c=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},tm=Object.prototype.hasOwnProperty,ce=(n,t)=>tm.call(n,t),Wt=Array.isArray,Gi=n=>to(n)==="[object Map]",wi=n=>to(n)==="[object Set]",Pu=n=>to(n)==="[object Date]",Zt=n=>typeof n=="function",Re=n=>typeof n=="string",Qn=n=>typeof n=="symbol",me=n=>n!==null&&typeof n=="object",kf=n=>(me(n)||Zt(n))&&Zt(n.then)&&Zt(n.catch),Hf=Object.prototype.toString,to=n=>Hf.call(n),em=n=>to(n).slice(8,-1),Gf=n=>to(n)==="[object Object]",Xc=n=>Re(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Or=Wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Sa=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nm=/-\w/g,nn=Sa(n=>n.replace(nm,t=>t.slice(1).toUpperCase())),im=/\B([A-Z])/g,Zi=Sa(n=>n.replace(im,"-$1").toLowerCase()),Ea=Sa(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ha=Sa(n=>n?`on${Ea(n)}`:""),Kn=(n,t)=>!Object.is(n,t),qo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Wf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},wa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Lu;const Ta=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pe(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Re(i)?am(i):pe(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Re(n)||me(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,om=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function am(n){const t={};return n.replace(om,e=>e.startsWith("/*")?"":e).split(sm).forEach(e=>{if(e){const i=e.split(rm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function pi(n){let t="";if(Re(n))t=n;else if(Wt(n))for(let e=0;e<n.length;e++){const i=pi(n[e]);i&&(t+=i+" ")}else if(me(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",cm=Wc(lm);function $f(n){return!!n||n===""}function um(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Vn(n[s],t[s],e);return i}function Du(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Vn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function dm(n,t,e){let i=Gi(n),s=Gi(t);if(i||s||(i=wi(n),s=wi(t),i||s))return i&&s?Du(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Vn(n[a],t[a],e))return!1}return String(n)===String(t)}function Iu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Vn(n,t,e){if(n===t)return!0;let i=Pu(n),s=Pu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Qn(n),s=Qn(t),i||s?n===t:(i=Wt(n),s=Wt(t),i||s?i&&s?Iu(n,t,e,um):!1:(i=me(n),s=me(t),i||s?!i||!s?!1:Iu(n,t,e,dm):String(n)===String(t))))}function qc(n,t){return n.findIndex(e=>Vn(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),xt=n=>Re(n)?n:n==null?"":Wt(n)||me(n)&&(n.toString===Hf||!Zt(n.toString))?Xf(n)?xt(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,t)=>Xf(t)?qf(n,t.value):Gi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ga(i,r)+" =>"]=s,e),{})}:wi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ga(e))}:Qn(t)?Ga(t):me(t)&&!Wt(t)&&!Gf(t)?String(t):t,Ga=(n,t="")=>{var e;return Qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let He;class fm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&He&&(He.active?(this.parent=He,this.index=(He.scopes||(He.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=He;try{return He=this,t()}finally{He=e}}}on(){++this._on===1&&(this.prevScope=He,He=this)}off(){if(this._on>0&&--this._on===0){if(He===this)He=this.prevScope;else{let t=He;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hm(){return He}let be;const Wa=new WeakSet;class jf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,He&&(He.active?He.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Zf(this);const t=be,e=On;be=this,On=!0;try{return this.fn()}finally{Jf(this),be=t,On=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Kc(t);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zl(this)&&this.run()}get dirty(){return zl(this)}}let Yf=0,Fr,Br;function Kf(n,t=!1){if(n.flags|=8,t){n.next=Br,Br=n;return}n.next=Fr,Fr=n}function jc(){Yf++}function Yc(){if(--Yf>0)return;if(Br){let t=Br;for(Br=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Fr;){let t=Fr;for(Fr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Zf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Kc(i),pm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function zl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Wr)||(n.globalVersion=Wr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!zl(n))))return;n.flags|=2;const t=n.dep,e=be,i=On;be=n,On=!0;try{Zf(n);const s=n.fn(n._value);(t.version===0||Kn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{be=e,On=i,Jf(n),n.flags&=-3}}function Kc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Kc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let On=!0;const th=[];function ti(){th.push(On),On=!1}function ei(){const n=th.pop();On=n===void 0?!0:n}function Uu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=be;be=void 0;try{t()}finally{be=e}}}let Wr=0;class mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!be||!On||be===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==be)e=this.activeLink=new mm(be,this),be.deps?(e.prevDep=be.depsTail,be.depsTail.nextDep=e,be.depsTail=e):be.deps=be.depsTail=e,eh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=be.depsTail,e.nextDep=void 0,be.depsTail.nextDep=e,be.depsTail=e,be.deps===e&&(be.deps=i)}return e}trigger(t){this.version++,Wr++,this.notify(t)}notify(t){jc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Yc()}}}function eh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)eh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Vl=new WeakMap,gs=Symbol(""),kl=Symbol(""),$r=Symbol("");function Xe(n,t,e){if(On&&be){let i=Vl.get(n);i||Vl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Zc),s.map=i,s.key=e),s.track()}}function gi(n,t,e,i,s,r){const o=Vl.get(n);if(!o){Wr++;return}const a=l=>{l&&l.trigger()};if(jc(),t==="clear")o.forEach(a);else{const l=Wt(n),c=l&&Xc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===$r||!Qn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get($r)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Gi(n)&&a(o.get(kl)));break;case"delete":l||(a(o.get(gs)),Gi(n)&&a(o.get(kl)));break;case"set":Gi(n)&&a(o.get(gs));break}}Yc()}function ws(n){const t=he(n);return t===n||(Xe(t,"iterate",$r),Sn(n))?t:ni(n)?Wi(n)?t.map(e=>qi(wn(e))):t.map(qi):t.map(wn)}function Aa(n){return Xe(n=he(n),"iterate",$r),n}function Xn(n,t){return ni(n)?qi(Wi(n)?wn(t):t):wn(t)}const gm={__proto__:null,[Symbol.iterator](){return $a(this,Symbol.iterator,n=>Xn(this,n))},concat(...n){return ws(this).concat(...n.map(t=>Wt(t)?ws(t):t))},entries(){return $a(this,"entries",n=>(n[1]=Xn(this,n[1]),n))},every(n,t){return ri(this,"every",n,t,void 0,arguments)},filter(n,t){return ri(this,"filter",n,t,e=>e.map(i=>Xn(this,i)),arguments)},find(n,t){return ri(this,"find",n,t,e=>Xn(this,e),arguments)},findIndex(n,t){return ri(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ri(this,"findLast",n,t,e=>Xn(this,e),arguments)},findLastIndex(n,t){return ri(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ri(this,"forEach",n,t,void 0,arguments)},includes(...n){return Xa(this,"includes",n)},indexOf(...n){return Xa(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return Xa(this,"lastIndexOf",n)},map(n,t){return ri(this,"map",n,t,void 0,arguments)},pop(){return xr(this,"pop")},push(...n){return xr(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return xr(this,"shift")},some(n,t){return ri(this,"some",n,t,void 0,arguments)},splice(...n){return xr(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return xr(this,"unshift",n)},values(){return $a(this,"values",n=>Xn(this,n))}};function $a(n,t,e){const i=Aa(n),s=i[t],r=s.call(i);if(i!==n&&!Sn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Nu(r.next(),e),s!==nh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Nu(r._next(),e)}return r}function Nu(n,t){return n.done||(n.value=t(n.value)),n}const nh=Array.prototype;function ri(n,t,e,i,s,r){const o=Aa(n),a=o!==n&&!Sn(n),l=o[t];if(l!==nh[t]){const d=l.apply(n,r);return a?wn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Xn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,t,e,i){const s=Aa(n),r=s!==n&&!Sn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Xn(n,c)),e.call(this,c,Xn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Xn(n,l):l}function Xa(n,t,e){const i=he(n);Xe(i,"iterate",$r);const s=i[t](...e);return(s===-1||s===!1)&&tu(e[0])?(e[0]=he(e[0]),i[t](...e)):s}function xr(n,t,e=[]){ti(),jc();const i=he(n)[t].apply(n,e);return Yc(),ei(),i}const _m=Wc("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Qn));function vm(n){Qn(n)||(n=String(n));const t=he(this);return Xe(t,"has",n),t.hasOwnProperty(n)}class sh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Cm:lh:r?ah:oh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Wt(t);if(!s){let l;if(o&&(l=gm[e]))return l;if(e==="hasOwnProperty")return vm}const a=Reflect.get(t,e,je(t)?t:i);if((Qn(e)?ih.has(e):_m(e))||(s||Xe(t,"get",e),r))return a;if(je(a)){const l=o&&Xc(e)?a:a.value;return s&&me(l)?Gl(l):l}return me(a)?s?Gl(a):Mn(a):a}}class rh extends sh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Wt(t)&&Xc(e);if(!this._isShallow){const c=ni(r);if(!Sn(i)&&!ni(i)&&(r=he(r),i=he(i)),!o&&je(r)&&!je(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ce(t,e),l=Reflect.set(t,e,i,je(t)?t:s);return t===he(s)&&l&&(a?Kn(i,r)&&gi(t,"set",e,i):gi(t,"add",e,i)),l}deleteProperty(t,e){const i=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&gi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Qn(e)||!ih.has(e))&&Xe(t,"has",e),i}ownKeys(t){return Xe(t,"iterate",Wt(t)?"length":gs),Reflect.ownKeys(t)}}class xm extends sh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ym=new rh,bm=new xm,Mm=new rh(!0);const Hl=n=>n,uo=n=>Reflect.getPrototypeOf(n);function Sm(n,t,e){return function(...i){const s=this.__v_raw,r=he(s),o=Gi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Hl:t?qi:wn;return!t&&Xe(r,"iterate",l?kl:gs),Ge(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function fo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Em(n,t){const e={get(s){const r=this.__v_raw,o=he(r),a=he(s);n||(Kn(s,a)&&Xe(o,"get",s),Xe(o,"get",a));const{has:l}=uo(o),c=t?Hl:n?qi:wn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Xe(he(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=he(r),a=he(s);return n||(Kn(s,a)&&Xe(o,"has",s),Xe(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=he(a),c=t?Hl:n?qi:wn;return!n&&Xe(l,"iterate",gs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Ge(e,n?{add:fo("add"),set:fo("set"),delete:fo("delete"),clear:fo("clear")}:{add(s){const r=he(this),o=uo(r),a=he(s),l=!t&&!Sn(s)&&!ni(s)?a:s;return o.has.call(r,l)||Kn(s,l)&&o.has.call(r,s)||Kn(a,l)&&o.has.call(r,a)||(r.add(l),gi(r,"add",l,l)),this},set(s,r){!t&&!Sn(r)&&!ni(r)&&(r=he(r));const o=he(this),{has:a,get:l}=uo(o);let c=a.call(o,s);c||(s=he(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Kn(r,u)&&gi(o,"set",s,r):gi(o,"add",s,r),this},delete(s){const r=he(this),{has:o,get:a}=uo(r);let l=o.call(r,s);l||(s=he(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&gi(r,"delete",s,void 0),c},clear(){const s=he(this),r=s.size!==0,o=s.clear();return r&&gi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Sm(s,n,t)}),e}function Jc(n,t){const e=Em(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ce(e,s)&&s in i?e:i,s,r)}const wm={get:Jc(!1,!1)},Tm={get:Jc(!1,!0)},Am={get:Jc(!0,!1)};const oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Cm=new WeakMap;function Rm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mn(n){return ni(n)?n:Qc(n,!1,ym,wm,oh)}function ch(n){return Qc(n,!1,Mm,Tm,ah)}function Gl(n){return Qc(n,!0,bm,Am,lh)}function Qc(n,t,e,i,s){if(!me(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Rm(em(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Wi(n){return ni(n)?Wi(n.__v_raw):!!(n&&n.__v_isReactive)}function ni(n){return!!(n&&n.__v_isReadonly)}function Sn(n){return!!(n&&n.__v_isShallow)}function tu(n){return n?!!n.__v_raw:!1}function he(n){const t=n&&n.__v_raw;return t?he(t):n}function Pm(n){return!ce(n,"__v_skip")&&Object.isExtensible(n)&&Wf(n,"__v_skip",!0),n}const wn=n=>me(n)?Mn(n):n,qi=n=>me(n)?Gl(n):n;function je(n){return n?n.__v_isRef===!0:!1}function jt(n){return uh(n,!1)}function Lm(n){return uh(n,!0)}function uh(n,t){return je(n)?n:new Dm(n,t)}class Dm{constructor(t,e){this.dep=new Zc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:he(t),this._value=e?t:wn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||Sn(t)||ni(t);t=i?t:he(t),Kn(t,e)&&(this._rawValue=t,this._value=i?t:wn(t),this.dep.trigger())}}function Kt(n){return je(n)?n.value:n}const Im={get:(n,t,e)=>t==="__v_raw"?n:Kt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return je(s)&&!je(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function dh(n){return Wi(n)?n:new Proxy(n,Im)}class Um{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Zc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Wr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&be!==this)return Kf(this,!0),!0}get value(){const t=this.dep.track();return Qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nm(n,t,e=!1){let i,s;return Zt(n)?i=n:(i=n.get,s=n.set),new Um(i,s,e)}const ho={},sa=new WeakMap;let os;function Om(n,t=!1,e=os){if(e){let i=sa.get(e);i||sa.set(e,i=[]),i.push(n)}}function Fm(n,t,e=xe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:Sn(S)||s===!1||s===0?_i(S,1):_i(S);let u,d,f,p,v=!1,_=!1;if(je(n)?(d=()=>n.value,v=Sn(n)):Wi(n)?(d=()=>c(n),v=!0):Wt(n)?(_=!0,v=n.some(S=>Wi(S)||Sn(S)),d=()=>n.map(S=>{if(je(S))return S.value;if(Wi(S))return c(S);if(Zt(S))return l?l(S,2):S()})):Zt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){ti();try{f()}finally{ei()}}const S=os;os=u;try{return l?l(n,3,[p]):n(p)}finally{os=S}}:d=Jn,t&&s){const S=d,j=s===!0?1/0:s;d=()=>_i(S(),j)}const g=hm(),h=()=>{u.stop(),g&&g.active&&$c(g.effects,u)};if(r&&t){const S=t;t=(...j)=>{try{return S(...j)}finally{h()}}}let w=_?new Array(n.length).fill(ho):ho;const L=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const j=u.run();if(S||s||v||(_?j.some((B,O)=>Kn(B,w[O])):Kn(j,w))){const B=os;ti();try{f&&f(),os=u;const O=[j,w===ho?void 0:_&&w[0]===ho?[]:w,p];w=j,l?l(t,3,O):t(...O)}finally{os=B,ei()}}}else u.run()};return a&&a(L),u=new jf(d),u.scheduler=o?()=>o(L,!1):L,p=S=>Om(S,!1,u),f=u.onStop=()=>{const S=sa.get(u);if(S){if(l)l(S,4);else for(const j of S)j();sa.delete(u)}},t?i?L(!0):w=u.run():o?o(L.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function _i(n,t=1/0,e){if(t<=0||!me(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,je(n))_i(n.value,t,e);else if(Wt(n))for(let i=0;i<n.length;i++)_i(n[i],t,e);else if(wi(n)||Gi(n))n.forEach(i=>{_i(i,t,e)});else if(Gf(n)){for(const i in n)_i(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&_i(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function eo(n,t,e,i){try{return i?n(...i):n()}catch(s){Ca(s,t,e)}}function kn(n,t,e,i){if(Zt(n)){const s=eo(n,t,e,i);return s&&kf(s)&&s.catch(r=>{Ca(r,t,e)}),s}if(Wt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(kn(n[r],t,e,i));return s}}function Ca(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||xe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){ti(),eo(r,null,10,[n,l,c]),ei();return}}Bm(n,e,s,i,o)}function Bm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Qe=[];let Dn=-1;const qn=[];let Bi=null,Ws=0;const fh=Promise.resolve();let ra=null;function eu(n){const t=ra||fh;return n?t.then(this?n.bind(this):n):t}function zm(n){let t=Dn+1,e=Qe.length;for(;t<e;){const i=t+e>>>1,s=Qe[i],r=Xr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function nu(n){if(!(n.flags&1)){const t=Xr(n),e=Qe[Qe.length-1];!e||!(n.flags&2)&&t>=Xr(e)?Qe.push(n):Qe.splice(zm(t),0,n),n.flags|=1,hh()}}function hh(){ra||(ra=fh.then(gh))}function Vm(n){if(!Wt(n))Bi&&n.id===-1?Bi.splice(Ws+1,0,n):n.flags&1||(qn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)qn.push(n[t]);hh()}function ph(n,t,e,i=Dn+1){for(;i<Qe.length;i++){const s=Qe[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;Qe.splice(i,1),i=n?i-1:Dn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(n,t,e=0){if(qn.length){let i=qn,s=0;if(t){i=[];for(let o=0;o<qn.length;o++){const a=qn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?qn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Xr(o)-Xr(a));if(qn.length=s,Bi){for(let o=0;o<r.length;o++)Bi.push(r[o]);return}for(Bi=r,Ws=0;Ws<Bi.length;Ws++){const o=Bi[Ws];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Bi=null,Ws=0}}let qa=!1;function km(n,t){if(qa){n();return}const e=t===void 0?void 0:new Set(qn);n(),qa=!0;try{ph(void 0,t),mh(void 0,e,t)}finally{qa=!1}}const Xr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gh(n){try{for(Dn=0;Dn<Qe.length;Dn++){const t=Qe[Dn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),eo(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Dn<Qe.length;Dn++){const t=Qe[Dn];t&&(t.flags&=-2)}Dn=-1,Qe.length=0,mh(),ra=null,(Qe.length||qn.length)&&gh()}}let mn=null,_h=null;function oa(n){const t=mn;return mn=n,_h=n&&n.type.__scopeId||null,t}function iu(n,t=mn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ua(-1);const r=oa(t),o=vs.length;let a;try{a=n(...s)}finally{for(let l=vs.length;l>o;l--)Vh();oa(r),i._d&&ua(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function re(n,t){if(mn===null)return n;const e=Ia(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=xe]=t[s];r&&(Zt(r)&&(r={mounted:r,updated:r}),r.deep&&_i(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ti(),kn(l,e,8,[n.el,a,n,t]),ei())}}function jo(n,t){if(qe){let e=qe.provides;const i=qe.parent&&qe.parent.provides;i===e&&(e=qe.provides=Object.create(i)),e[n]=t}}function Fn(n,t,e=!1){const i=zg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Zt(t)?t.call(i&&i.proxy):t}}const Hm=Symbol.for("v-scx"),Gm=()=>Fn(Hm);function _s(n,t,e){return vh(n,t,e)}function vh(n,t,e=xe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ge({},e),l=t&&i||!t&&r!=="post";let c;if(Zr){if(r==="sync"){const p=Gm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Jn,p.resume=Jn,p.pause=Jn,p}}const u=qe;a.call=(p,v,_)=>kn(p,u,v,_);let d=!1;r==="post"?a.scheduler=p=>{p.i=u,ln(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,v)=>{v?p():nu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Fm(n,t,a);return Zr&&(c?c.push(f):l&&f()),f}function Wm(n,t,e){const i=this.proxy,s=Re(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;Zt(t)?r=t:(r=t.handler,e=t);const o=no(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ra=n=>n.__isTeleport,ja=Symbol("_leaveCb");function Xm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Hn){t=e;break}}return t}function yh(n){if(!su(n))return Ra(n.type)&&n.children?Xm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Zt(e.default))return e.default()}}function aa(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;aa(Ra(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Le&&Wt(n.children)){const e=Ah(n.children,!1);e&&aa(e,t)}}function Wl(n){if(n.component)return Wl(n.component.subTree);if(n.type===Le){const t=Wt(n.children)&&Ah(n.children,!1);return t?Wl(t):void 0}if(n.type!==Hn)return n}function Ai(n,t){return Zt(n)?Ge({name:n.name},t,{setup:n}):n}function bh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const la=new WeakMap;function zr(n,t,e,i,s=!1){if(Wt(n)){n.forEach((_,g)=>zr(_,t&&(Wt(t)?t[g]:t),e,i,s));return}if(Vr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ia(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===xe?a.refs={}:a.refs,d=a.setupState,f=he(d),p=d===xe?Vf:_=>Fu(u,_)?!1:ce(f,_),v=(_,g)=>!(g&&Fu(u,g));if(c!=null&&c!==l){if(Bu(t),Re(c))u[c]=null,p(c)&&(d[c]=null);else if(je(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Zt(l))eo(l,a,12,[o,u]);else{const _=Re(l),g=je(l);if(_||g){const h=()=>{if(n.f){const w=_?p(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Wt(w)&&$c(w,r);else if(Wt(w))w.includes(r)||w.push(r);else if(_)u[l]=[r],p(l)&&(d[l]=u[l]);else{const L=[r];v(l,n.k)&&(l.value=L),n.k&&(u[n.k]=L)}}else _?(u[l]=o,p(l)&&(d[l]=o)):g&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{h(),la.delete(n)};w.id=-1,la.set(n,w),ln(w,e)}else Bu(n),h()}}}function Bu(n){const t=la.get(n);t&&(t.flags|=8,la.delete(n))}Ta().requestIdleCallback;Ta().cancelIdleCallback;const Vr=n=>!!n.type.__asyncLoader,su=n=>n.type.__isKeepAlive;function qm(n,t){Mh(n,"a",t)}function jm(n,t){Mh(n,"da",t)}function Mh(n,t,e=qe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Pa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)su(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=Pa(t,n,i,!0);fr(()=>{$c(i[t],s)},e)}function Pa(n,t,e=qe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ti();const a=no(e),l=kn(t,e,n,o);return a(),ei(),l});return i?s.unshift(r):s.push(r),r}}const Ci=n=>(t,e=qe)=>{(!Zr||n==="sp")&&Pa(n,(...i)=>t(...i),e)},Km=Ci("bm"),dr=Ci("m"),Zm=Ci("bu"),Jm=Ci("u"),Qm=Ci("bum"),fr=Ci("um"),tg=Ci("sp"),eg=Ci("rtg"),ng=Ci("rtc");function ig(n,t=qe){Pa("ec",n,t)}const sg="components";function ru(n,t){return og(sg,n,!0,t)||n}const rg=Symbol.for("v-ndc");function og(n,t,e=!0,i=!1){const s=mn||qe;if(s){const r=s.type;{const a=Wg(r,!1);if(a&&(a===t||a===nn(t)||a===Ea(nn(t))))return r}const o=zu(s[n]||r[n],t)||zu(s.appContext[n],t);return!o&&i?r:o}}function zu(n,t){return n&&(n[t]||n[nn(t)]||n[Ea(nn(t))])}function yi(n,t,e,i){let s;const r=e,o=Wt(n);if(o||Re(n)){const a=o&&Wi(n);let l=!1,c=!1;a&&(l=!Sn(n),c=ni(n),n=Aa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?qi(wn(n[u])):wn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(me(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const $l=n=>n?Wh(n)?Ia(n):$l(n.parent):null,kr=Ge(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>$l(n.parent),$root:n=>$l(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Eh(n),$forceUpdate:n=>n.f||(n.f=()=>{nu(n.update)}),$nextTick:n=>n.n||(n.n=eu.bind(n.proxy)),$watch:n=>Wm.bind(n)}),Ya=(n,t)=>n!==xe&&!n.__isScriptSetup&&ce(n,t),ag={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ya(i,t))return o[t]=1,i[t];if(s!==xe&&ce(s,t))return o[t]=2,s[t];if(ce(r,t))return o[t]=3,r[t];if(e!==xe&&ce(e,t))return o[t]=4,e[t];Xl&&(o[t]=0)}}const c=kr[t];let u,d;if(c)return t==="$attrs"&&Xe(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==xe&&ce(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ce(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ya(s,t)?(s[t]=e,!0):i!==xe&&ce(i,t)?(i[t]=e,!0):ce(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==xe&&a[0]!=="$"&&ce(n,a)||Ya(t,a)||ce(r,a)||ce(i,a)||ce(kr,a)||ce(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ce(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Vu(n){return Wt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Xl=!0;function lg(n){const t=Eh(n),e=n.proxy,i=n.ctx;Xl=!1,t.beforeCreate&&ku(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:v,activated:_,deactivated:g,beforeDestroy:h,beforeUnmount:w,destroyed:L,unmounted:S,render:j,renderTracked:B,renderTriggered:O,errorCaptured:I,serverPrefetch:M,expose:E,inheritAttrs:T,components:ot,directives:rt,filters:ct}=t;if(c&&cg(c,i,null),o)for(const k in o){const q=o[k];Zt(q)&&(i[k]=q.bind(e))}if(s){const k=s.call(e,e);me(k)&&(n.data=Mn(k))}if(Xl=!0,r)for(const k in r){const q=r[k],mt=Zt(q)?q.bind(e,e):Zt(q.get)?q.get.bind(e,e):Jn,N=!Zt(q)&&Zt(q.set)?q.set.bind(e):Jn,D=ze({get:mt,set:N});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>D.value,set:dt=>D.value=dt})}if(a)for(const k in a)Sh(a[k],i,e,k);if(l){const k=Zt(l)?l.call(e):l;Reflect.ownKeys(k).forEach(q=>{jo(q,k[q])})}u&&ku(u,n,"c");function $(k,q){Wt(q)?q.forEach(mt=>k(mt.bind(e))):q&&k(q.bind(e))}if($(Km,d),$(dr,f),$(Zm,p),$(Jm,v),$(qm,_),$(jm,g),$(ig,I),$(ng,B),$(eg,O),$(Qm,w),$(fr,S),$(tg,M),Wt(E))if(E.length){const k=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(k,q,{get:()=>e[q],set:mt=>e[q]=mt,enumerable:!0})})}else n.exposed||(n.exposed={});j&&n.render===Jn&&(n.render=j),T!=null&&(n.inheritAttrs=T),ot&&(n.components=ot),rt&&(n.directives=rt),M&&bh(n)}function cg(n,t,e=Jn){Wt(n)&&(n=ql(n));for(const i in n){const s=n[i];let r;me(s)?"default"in s?r=Fn(s.from||i,s.default,!0):r=Fn(s.from||i):r=Fn(s),je(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ku(n,t,e){kn(Wt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(Re(n)){const r=t[n];Zt(r)&&_s(s,r)}else if(Zt(n))_s(s,n.bind(e));else if(me(n))if(Wt(n))n.forEach(r=>Sh(r,t,e,i));else{const r=Zt(n.handler)?n.handler.bind(e):t[n.handler];Zt(r)&&_s(s,r,n)}}function Eh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ca(l,c,o,!0)),ca(l,t,o)),me(t)&&r.set(t,l),l}function ca(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ca(n,r,e,!0),s&&s.forEach(o=>ca(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ug[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ug={data:Hu,props:Gu,emits:Gu,methods:Lr,computed:Lr,beforeCreate:Ke,created:Ke,beforeMount:Ke,mounted:Ke,beforeUpdate:Ke,updated:Ke,beforeDestroy:Ke,beforeUnmount:Ke,destroyed:Ke,unmounted:Ke,activated:Ke,deactivated:Ke,errorCaptured:Ke,serverPrefetch:Ke,components:Lr,directives:Lr,watch:fg,provide:Hu,inject:dg};function Hu(n,t){return t?n?function(){return Ge(Zt(n)?n.call(this,this):n,Zt(t)?t.call(this,this):t)}:t:n}function dg(n,t){return Lr(ql(n),ql(t))}function ql(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ke(n,t){return n?[...new Set([].concat(n,t))]:t}function Lr(n,t){return n?Ge(Object.create(null),n,t):t}function Gu(n,t){return n?Wt(n)&&Wt(t)?[...new Set([...n,...t])]:Ge(Object.create(null),Vu(n),Vu(t??{})):t}function fg(n,t){if(!n)return t;if(!t)return n;const e=Ge(Object.create(null),n);for(const i in t)e[i]=Ke(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:Vf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function pg(n,t){return function(i,s=null){Zt(i)||(i=Ge({},i)),s!=null&&!me(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Zt(u.install)?(o.add(u),u.install(c,...d)):Zt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ue(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ia(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(kn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ys;Ys=c;try{return u()}finally{Ys=d}}};return c}}let Ys=null;const mg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${nn(t)}Modifiers`]||n[`${Zi(t)}Modifiers`];function gg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||xe;let s=e;const r=t.startsWith("update:"),o=r&&mg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Re(u)?u.trim():u)),o.number&&(s=s.map(wa)));let a,l=i[a=Ha(t)]||i[a=Ha(nn(t))];!l&&r&&(l=i[a=Ha(Zi(t))]),l&&kn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,kn(c,n,6,s)}}const _g=new WeakMap;function Th(n,t,e=!1){const i=e?_g:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Zt(n)){const l=c=>{const u=Th(c,t,!0);u&&(a=!0,Ge(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(me(n)&&i.set(n,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Ge(o,r),me(n)&&i.set(n,o),o)}function La(n,t){return!n||!ba(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ce(n,t[0].toLowerCase()+t.slice(1))||ce(n,Zi(t))||ce(n,t))}function Wu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:v,inheritAttrs:_}=n,g=oa(n);let h,w;try{if(e.shapeFlag&4){const S=s||i,j=S;h=jn(c.call(j,S,u,d,p,f,v)),w=a}else{const S=t;h=jn(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),w=t.props?a:vg(a)}}catch(S){vs.length=0,Ca(S,n,1),h=Ue(Hn)}let L=h;if(w&&_!==!1){const S=Object.keys(w),{shapeFlag:j}=L;S.length&&j&7&&(r&&S.some(Ma)&&(w=xg(w,r)),L=er(L,w,!1,!0))}if(e.dirs&&(L=er(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(e.dirs):e.dirs),e.transition){const S=Ra(L.type)&&yh(L)||L;aa(S,e.transition)}return h=L,oa(g),h}function Ah(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(jr(s)){if(s.type!==Hn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const vg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ba(e))&&((t||(t={}))[e]=n[e]);return t},xg=(n,t)=>{const e={};for(const i in n)(!Ma(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function yg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ch(o,i,f)&&!La(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ce(n,r)||Ch(t,n,r)&&!La(e,r))return!0}return!1}function Ch(n,t,e){const i=n[e],s=t[e];return e==="style"&&me(i)&&me(s)?!Vn(i,s):i!==s}function bg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Rh={},Ph=()=>Object.create(Rh),Lh=n=>Object.getPrototypeOf(n)===Rh;function Mg(n,t,e,i=!1){const s={},r=Ph();n.propsDefaults=Object.create(null),Dh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ch(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=he(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(La(n.emitsOptions,f))continue;const p=t[f];if(l)if(ce(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const v=nn(f);s[v]=jl(l,a,v,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Dh(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ce(t,d)&&((u=Zi(d))===d||!ce(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=jl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ce(t,d))&&(delete r[d],c=!0)}c&&gi(n.attrs,"set","")}function Dh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Or(l))continue;const c=t[l];let u;s&&ce(s,u=nn(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:La(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=he(e),c=a||xe;for(let u=0;u<r.length;u++){const d=r[u];e[d]=jl(s,l,d,c[d],n,!ce(c,d))}}return o}function jl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ce(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Zt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=no(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Zi(e))&&(i=!0))}return i}const Eg=new WeakMap;function Ih(n,t,e=!1){const i=e?Eg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Zt(n)){const u=d=>{l=!0;const[f,p]=Ih(d,t,!0);Ge(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return me(n)&&i.set(n,fs),fs;if(Wt(r))for(let u=0;u<r.length;u++){const d=nn(r[u]);Xu(d)&&(o[d]=xe)}else if(r)for(const u in r){const d=nn(u);if(Xu(d)){const f=r[u],p=o[d]=Wt(f)||Zt(f)?{type:f}:Ge({},f),v=p.type;let _=!1,g=!0;if(Wt(v))for(let h=0;h<v.length;++h){const w=v[h],L=Zt(w)&&w.name;if(L==="Boolean"){_=!0;break}else L==="String"&&(g=!1)}else _=Zt(v)&&v.name==="Boolean";p[0]=_,p[1]=g,(_||ce(p,"default"))&&a.push(d)}}const c=[o,a];return me(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!Or(n)}const ou=n=>n==="_"||n==="_ctx"||n==="$stable",au=n=>Wt(n)?n.map(jn):[jn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=iu((...s)=>au(t(...s)),e);return i._c=!1,i},Uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(ou(s))continue;const r=n[s];if(Zt(r))t[s]=wg(s,r,i);else if(r!=null){const o=au(r);t[s]=()=>o}}},Nh=(n,t)=>{const e=au(t);n.slots.default=()=>e},Oh=(n,t,e)=>{for(const i in t)(e||!ou(i))&&(n[i]=t[i])},Tg=(n,t,e)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const s=t._;s?(Oh(i,t,e),e&&Wf(i,"_",s,!0)):Uh(t,i)}else t&&Nh(n,t)},Ag=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=xe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Oh(s,t,e):(r=!t.$stable,Uh(t,s)),o=t}else t&&(Nh(n,t),o={default:1});if(r)for(const a in s)!ou(a)&&o[a]==null&&delete s[a]},ln=Dg;function Cg(n){return Rg(n)}function Rg(n,t){const e=Ta();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Jn,insertStaticContent:v}=n,_=(y,R,H,b=null,it=null,nt=null,at=void 0,lt=null,bt=!!R.dynamicChildren)=>{if(y===R)return;y&&!yr(y,R)&&(b=U(y),dt(y,it,nt,!0),y=null),R.patchFlag===-2&&(bt=!1,R.dynamicChildren=null),R.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(R.dynamicChildren===fs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:tt,ref:A,shapeFlag:x}=R;switch(tt){case Da:g(y,R,H,b);break;case Hn:h(y,R,H,b);break;case Yo:y==null&&w(R,H,b,at);break;case Le:ot(y,R,H,b,it,nt,at,lt,bt);break;default:x&1?j(y,R,H,b,it,nt,at,lt,bt):x&6?rt(y,R,H,b,it,nt,at,lt,bt):(x&64||x&128)&&tt.process(y,R,H,b,it,nt,at,lt,bt,K)}A!=null&&it?zr(A,y&&y.ref,nt,R||y,!R):A==null&&y&&y.ref!=null&&zr(y.ref,null,nt,y,!0)},g=(y,R,H,b)=>{if(y==null)i(R.el=a(R.children),H,b);else{const it=R.el=y.el;R.children!==y.children&&c(it,R.children)}},h=(y,R,H,b)=>{y==null?i(R.el=l(R.children||""),H,b):R.el=y.el},w=(y,R,H,b)=>{[y.el,y.anchor]=v(y.children,R,H,b,y.el,y.anchor)},L=({el:y,anchor:R},H,b)=>{let it;for(;y&&y!==R;)it=f(y),i(y,H,b),y=it;i(R,H,b)},S=({el:y,anchor:R})=>{let H;for(;y&&y!==R;)H=f(y),s(y),y=H;s(R)},j=(y,R,H,b,it,nt,at,lt,bt)=>{if(R.type==="svg"?at="svg":R.type==="math"&&(at="mathml"),y==null)B(R,H,b,it,nt,at,lt,bt);else{const tt=y.el&&y.el._isVueCE?y.el:null;try{tt&&tt._beginPatch(),M(y,R,it,nt,at,lt,bt)}finally{tt&&tt._endPatch()}}},B=(y,R,H,b,it,nt,at,lt)=>{let bt,tt;const{props:A,shapeFlag:x,transition:G,dirs:st}=y;if(bt=y.el=o(y.type,nt,A&&A.is,A),x&8?u(bt,y.children):x&16&&I(y.children,bt,null,b,it,Ka(y,nt),at,lt),st&&Ji(y,null,b,"created"),O(bt,y,y.scopeId,at,b),A){for(const W in A)W!=="value"&&!Or(W)&&r(bt,W,null,A[W],nt,b);"value"in A&&r(bt,"value",null,A.value,nt),(tt=A.onVnodeBeforeMount)&&$n(tt,b,y)}st&&Ji(y,null,b,"beforeMount");const ht=Pg(it,G);ht&&G.beforeEnter(bt),i(bt,R,H),((tt=A&&A.onVnodeMounted)||ht||st)&&ln(()=>{try{tt&&$n(tt,b,y),ht&&G.enter(bt),st&&Ji(y,null,b,"mounted")}finally{}},it)},O=(y,R,H,b,it)=>{if(H&&p(y,H),b)for(let nt=0;nt<b.length;nt++)p(y,b[nt]);if(it){let nt=it.subTree;if(R===nt||zh(nt.type)&&(nt.ssContent===R||nt.ssFallback===R)){const at=it.vnode;O(y,at,at.scopeId,at.slotScopeIds,it.parent)}}},I=(y,R,H,b,it,nt,at,lt,bt=0)=>{for(let tt=bt;tt<y.length;tt++){const A=y[tt]=lt?mi(y[tt]):jn(y[tt]);_(null,A,R,H,b,it,nt,at,lt)}},M=(y,R,H,b,it,nt,at)=>{const lt=R.el=y.el;let{patchFlag:bt,dynamicChildren:tt,dirs:A}=R;bt|=y.patchFlag&16;const x=y.props||xe,G=R.props||xe;let st;if(H&&Qi(H,!1),(st=G.onVnodeBeforeUpdate)&&$n(st,H,R,y),A&&Ji(R,y,H,"beforeUpdate"),H&&Qi(H,!0),tt&&(!y.dynamicChildren||y.dynamicChildren.length!==tt.length)&&(bt=0,at=!1,tt=null),(x.innerHTML&&G.innerHTML==null||x.textContent&&G.textContent==null)&&u(lt,""),tt?E(y.dynamicChildren,tt,lt,H,b,Ka(R,it),nt):at||q(y,R,lt,null,H,b,Ka(R,it),nt,!1),bt>0){if(bt&16)T(lt,x,G,H,it);else if(bt&2&&x.class!==G.class&&r(lt,"class",null,G.class,it),bt&4&&r(lt,"style",x.style,G.style,it),bt&8){const ht=R.dynamicProps;for(let W=0;W<ht.length;W++){const P=ht[W],Y=x[P],_t=G[P];(_t!==Y||P==="value")&&r(lt,P,Y,_t,it,H)}}bt&1&&y.children!==R.children&&u(lt,R.children)}else!at&&tt==null&&T(lt,x,G,H,it);((st=G.onVnodeUpdated)||A)&&ln(()=>{st&&$n(st,H,R,y),A&&Ji(R,y,H,"updated")},b)},E=(y,R,H,b,it,nt,at)=>{for(let lt=0;lt<R.length;lt++){const bt=y[lt],tt=R[lt],A=bt.el||Yl(bt),x=A&&(bt.type===Le||!yr(bt,tt)||bt.shapeFlag&198)?d(A):H;_(bt,tt,x,null,b,it,nt,at,!0)}},T=(y,R,H,b,it)=>{if(R!==H){if(R!==xe)for(const nt in R)!Or(nt)&&!(nt in H)&&r(y,nt,R[nt],null,it,b);for(const nt in H){if(Or(nt))continue;const at=H[nt],lt=R[nt];at!==lt&&nt!=="value"&&r(y,nt,lt,at,it,b)}"value"in H&&r(y,"value",R.value,H.value,it)}},ot=(y,R,H,b,it,nt,at,lt,bt)=>{const tt=R.el=y?y.el:a(""),A=R.anchor=y?y.anchor:a("");let{patchFlag:x,dynamicChildren:G,slotScopeIds:st}=R;st&&(lt=lt?lt.concat(st):st),y==null?(i(tt,H,b),i(A,H,b),I(R.children||[],H,A,it,nt,at,lt,bt)):x>0&&x&64&&G&&y.dynamicChildren&&y.dynamicChildren.length===G.length?(E(y.dynamicChildren,G,H,it,nt,at,lt),(R.key!=null||it&&R===it.subTree)&&Fh(y,R,!0)):q(y,R,H,A,it,nt,at,lt,bt)},rt=(y,R,H,b,it,nt,at,lt,bt)=>{R.slotScopeIds=lt,y==null?R.shapeFlag&512?it.ctx.activate(R,H,b,at,bt):ct(R,H,b,it,nt,at,bt):vt(y,R,bt)},ct=(y,R,H,b,it,nt,at)=>{const lt=y.component=Bg(y,b,it);if(su(y)&&(lt.ctx.renderer=K),Vg(lt,!1,at),lt.asyncDep){if(it&&it.registerDep(lt,$,at,nt),!y.el){const bt=lt.subTree=Ue(Hn);h(null,bt,R,H),y.placeholder=bt.el}}else $(lt,y,R,H,it,nt,at)},vt=(y,R,H)=>{const b=R.component=y.component;if(yg(y,R,H))if(b.asyncDep&&!b.asyncResolved){R.el=y.el,R.placeholder=y.placeholder,k(b,R,H);return}else b.next=R,b.update();else R.el=y.el,R.placeholder=y.placeholder,b.vnode=R},$=(y,R,H,b,it,nt,at)=>{const lt=()=>{if(y.isMounted){let{next:x,bu:G,u:st,parent:ht,vnode:W}=y;{const St=Bh(y);if(St){x&&(x.el=W.el,k(y,x,at)),St.asyncDep.then(()=>{ln(()=>{y.isUnmounted||tt()},it)});return}}let P=x,Y;Qi(y,!1),x?(x.el=W.el,k(y,x,at)):x=W,G&&qo(G),(Y=x.props&&x.props.onVnodeBeforeUpdate)&&$n(Y,ht,x,W),Qi(y,!0);const _t=Wu(y),yt=y.subTree;y.subTree=_t,_(yt,_t,d(yt.el),U(yt),y,it,nt),x.el=_t.el,P===null&&bg(y,_t.el),st&&ln(st,it),(Y=x.props&&x.props.onVnodeUpdated)&&ln(()=>$n(Y,ht,x,W),it)}else{let x;const{el:G,props:st}=R,{bm:ht,m:W,parent:P,root:Y,type:_t}=y,yt=Vr(R);Qi(y,!1),ht&&qo(ht),!yt&&(x=st&&st.onVnodeBeforeMount)&&$n(x,P,R),Qi(y,!0);{Y.ce&&Y.ce._hasShadowRoot()&&Y.ce._injectChildStyle(_t,y.parent?y.parent.type:void 0);const St=y.subTree=Wu(y);_(null,St,H,b,y,it,nt),R.el=St.el}if(W&&ln(W,it),!yt&&(x=st&&st.onVnodeMounted)){const St=R;ln(()=>$n(x,P,St),it)}(R.shapeFlag&256||P&&Vr(P.vnode)&&P.vnode.shapeFlag&256)&&y.a&&ln(y.a,it),y.isMounted=!0,R=H=b=null}};y.scope.on();const bt=y.effect=new jf(lt);y.scope.off();const tt=y.update=bt.run.bind(bt),A=y.job=bt.runIfDirty.bind(bt);A.i=y,A.id=y.uid,bt.scheduler=()=>nu(A),Qi(y,!0),tt()},k=(y,R,H)=>{R.component=y;const b=y.vnode.props;y.vnode=R,y.next=null,Sg(y,R.props,b,H),Ag(y,R.children,H),ti(),ph(y),ei()},q=(y,R,H,b,it,nt,at,lt,bt=!1)=>{const tt=y&&y.children,A=y?y.shapeFlag:0,x=R.children,{patchFlag:G,shapeFlag:st}=R;if(G>0){if(G&128){N(tt,x,H,b,it,nt,at,lt,bt);return}else if(G&256){mt(tt,x,H,b,it,nt,at,lt,bt);return}}st&8?(A&16&&F(tt,it,nt),x!==tt&&u(H,x)):A&16?st&16?N(tt,x,H,b,it,nt,at,lt,bt):F(tt,it,nt,!0):(A&8&&u(H,""),st&16&&I(x,H,b,it,nt,at,lt,bt))},mt=(y,R,H,b,it,nt,at,lt,bt)=>{y=y||fs,R=R||fs;const tt=y.length,A=R.length,x=Math.min(tt,A);let G;for(G=0;G<x;G++){const st=R[G]=bt?mi(R[G]):jn(R[G]);_(y[G],st,H,null,it,nt,at,lt,bt)}tt>A?F(y,it,nt,!0,!1,x):I(R,H,b,it,nt,at,lt,bt,x)},N=(y,R,H,b,it,nt,at,lt,bt)=>{let tt=0;const A=R.length;let x=y.length-1,G=A-1;for(;tt<=x&&tt<=G;){const st=y[tt],ht=R[tt]=bt?mi(R[tt]):jn(R[tt]);if(yr(st,ht))_(st,ht,H,null,it,nt,at,lt,bt);else break;tt++}for(;tt<=x&&tt<=G;){const st=y[x],ht=R[G]=bt?mi(R[G]):jn(R[G]);if(yr(st,ht))_(st,ht,H,null,it,nt,at,lt,bt);else break;x--,G--}if(tt>x){if(tt<=G){const st=G+1,ht=st<A?R[st].el:b;for(;tt<=G;)_(null,R[tt]=bt?mi(R[tt]):jn(R[tt]),H,ht,it,nt,at,lt,bt),tt++}}else if(tt>G)for(;tt<=x;)dt(y[tt],it,nt,!0),tt++;else{const st=tt,ht=tt,W=new Map;for(tt=ht;tt<=G;tt++){const Nt=R[tt]=bt?mi(R[tt]):jn(R[tt]);Nt.key!=null&&W.set(Nt.key,tt)}let P,Y=0;const _t=G-ht+1;let yt=!1,St=0;const Tt=new Array(_t);for(tt=0;tt<_t;tt++)Tt[tt]=0;for(tt=st;tt<=x;tt++){const Nt=y[tt];if(Y>=_t){dt(Nt,it,nt,!0);continue}let Ct;if(Nt.key!=null)Ct=W.get(Nt.key);else for(P=ht;P<=G;P++)if(Tt[P-ht]===0&&yr(Nt,R[P])){Ct=P;break}Ct===void 0?dt(Nt,it,nt,!0):(Tt[Ct-ht]=tt+1,Ct>=St?St=Ct:yt=!0,_(Nt,R[Ct],H,null,it,nt,at,lt,bt),Y++)}const Bt=yt?Lg(Tt):fs;for(P=Bt.length-1,tt=_t-1;tt>=0;tt--){const Nt=ht+tt,Ct=R[Nt],Jt=R[Nt+1],Gt=Nt+1<A?Jt.el||Yl(Jt):b;Tt[tt]===0?_(null,Ct,H,Gt,it,nt,at,lt,bt):yt&&(P<0||tt!==Bt[P]?D(Ct,H,Gt,2):P--)}}},D=(y,R,H,b,it=null)=>{const{el:nt,type:at,transition:lt,children:bt,shapeFlag:tt}=y;if(tt&6){D(y.component.subTree,R,H,b);return}if(tt&128){y.suspense.move(R,H,b);return}if(tt&64){at.move(y,R,H,K);return}if(at===Le){i(nt,R,H);for(let x=0;x<bt.length;x++)D(bt[x],R,H,b);i(y.anchor,R,H);return}if(at===Yo){L(y,R,H);return}if(b!==2&&tt&1&&lt)if(b===0)lt.persisted&&!nt[ja]?i(nt,R,H):(lt.beforeEnter(nt),i(nt,R,H),ln(()=>lt.enter(nt),it));else{const{leave:x,delayLeave:G,afterLeave:st}=lt,ht=()=>{y.ctx.isUnmounted?s(nt):i(nt,R,H)},W=()=>{const P=nt._isLeaving||!!nt[ja];nt._isLeaving&&nt[ja](!0),lt.persisted&&!P?ht():x(nt,()=>{ht(),st&&st()})};G?G(nt,ht,W):W()}else i(nt,R,H)},dt=(y,R,H,b=!1,it=!1)=>{const{type:nt,props:at,ref:lt,children:bt,dynamicChildren:tt,shapeFlag:A,patchFlag:x,dirs:G,cacheIndex:st,memo:ht}=y;if((x===-2||tt&&tt.hasOnce)&&(it=!1),lt!=null&&(ti(),zr(lt,null,H,y,!0),ei()),st!=null&&(!y.ctx||y.ctx===R)&&(R.renderCache[st]=void 0),A&256){R.ctx.deactivate(y);return}const W=A&1&&G,P=!Vr(y);let Y;if(P&&(Y=at&&at.onVnodeBeforeUnmount)&&$n(Y,R,y),A&6)z(y.component,H,b);else{if(A&128){y.suspense.unmount(H,b);return}W&&Ji(y,null,R,"beforeUnmount"),A&64?y.type.remove(y,R,H,K,b):tt&&!tt.hasOnce&&(nt!==Le||x>0&&x&64)?F(tt,R,H,!1,!0):(nt===Le&&x&384||!it&&A&16)&&F(bt,R,H),b&&wt(y)}const _t=ht!=null&&st==null;(P&&(Y=at&&at.onVnodeUnmounted)||W||_t)&&ln(()=>{Y&&$n(Y,R,y),W&&Ji(y,null,R,"unmounted"),_t&&(y.el=null)},H)},wt=y=>{const{type:R,el:H,anchor:b,transition:it}=y,nt=R===Le;if(nt&&!it){Z(H,b);return}if(R===Yo){S(y),it&&!it.persisted&&it.afterLeave&&it.afterLeave();return}const at=nt?Wl(y):y,lt=()=>{nt?d(H)&&Z(H,b):s(H),it&&!it.persisted&&it.afterLeave&&it.afterLeave()};if(at&&at.shapeFlag&1&&it&&!it.persisted){const{leave:bt,delayLeave:tt}=it,A=at.el,x=()=>bt(A,lt);tt?tt(A,lt,x):x()}else lt()},Z=(y,R)=>{let H;for(;y!==R;)H=f(y),s(y),y=H;s(R)},z=(y,R,H)=>{const{bum:b,scope:it,job:nt,subTree:at,um:lt,m:bt,a:tt}=y;qu(bt),qu(tt),b&&qo(b),it.stop(),nt?(nt.flags|=8,dt(at,y,R,H)):y.vnode.el&&at&&(at.transition=y.vnode.transition,dt(at,y,R,H)),lt&&ln(lt,R),ln(()=>{y.isUnmounted=!0},R)},F=(y,R,H,b=!1,it=!1,nt=0)=>{for(let at=nt;at<y.length;at++)dt(y[at],R,H,b,it)},U=y=>{if(y.shapeFlag&6)return U(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const R=f(y.anchor||y.el),H=R&&R[$m];return H?f(H):R},V=(y,R,H)=>{const b=y&&R._vnode?void 0:y&&y.component?y.component.uid:Fg();km(()=>{y==null?R._vnode&&dt(R._vnode,null,null,!0):_(R._vnode||null,y,R,null,null,null,H),R._vnode=y},b)},K={p:_,um:dt,m:D,r:wt,mt:ct,mc:I,pc:q,pbc:E,n:U,o:n};return{render:V,hydrate:void 0,createApp:pg(V)}}function Ka({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Fh(n,t,e=!1){const i=n.children,s=t.children;if(Wt(i)&&Wt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=mi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Fh(o,a)),a.type===Da&&(a.patchFlag===-1&&(a=s[r]=mi(a)),a.el=o.el),a.type===Hn&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bh(t)}function qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Yl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Yl(t.subTree):null}const zh=n=>n.__isSuspense;function Dg(n,t){t&&t.pendingBranch?Wt(n)?t.effects.push(...n):t.effects.push(n):Vm(n)}const Le=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Hn=Symbol.for("v-cmt"),Yo=Symbol.for("v-stc"),vs=[];let gn=null;function Ut(n=!1){vs.push(gn=n?null:[])}function Vh(){vs.pop(),gn=vs[vs.length-1]||null}let qr=1;function ua(n,t=!1){qr+=n,n<0&&gn&&t&&(gn.hasOnce=!0)}function kh(n){return n.dynamicChildren=qr>0?gn||fs:null,Vh(),qr>0&&gn&&gn.push(n),n}function Ot(n,t,e,i,s,r){return kh(m(n,t,e,i,s,r,!0))}function lu(n,t,e,i,s){return kh(Ue(n,t,e,i,s,!0))}function jr(n){return n?n.__v_isVNode===!0:!1}function yr(n,t){return n.type===t.type&&n.key===t.key}const Hh=({key:n})=>n??null,Ko=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Re(n)||je(n)||Zt(n)?{i:mn,r:n,k:t,f:!!e}:n:null);function m(n,t=null,e=null,i=0,s=null,r=n===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hh(t),ref:t&&Ko(t),scopeId:_h,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(da(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Re(e)?8:16),qr>0&&!o&&gn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&gn.push(l),l}const Ue=Ig;function Ig(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===rg)&&(n=Hn),jr(n)){const a=er(n,t,!0);return e&&da(a,e),qr>0&&!r&&gn&&(a.shapeFlag&6?gn[gn.indexOf(n)]=a:gn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ug(t);let{class:a,style:l}=t;a&&!Re(a)&&(t.class=pi(a)),me(l)&&(tu(l)&&!Wt(l)&&(l=Ge({},l)),t.style=pe(l))}const o=Re(n)?1:zh(n)?128:Ra(n)?64:me(n)?4:Zt(n)?2:0;return m(n,t,e,i,s,o,r,!0)}function Ug(n){return n?tu(n)||Lh(n)?Ge({},n):n:null}function er(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ng(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hh(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(Ko(t)):[r,Ko(t)]:Ko(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Le?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&aa(u,l.clone(u)),u}function Dt(n=" ",t=0){return Ue(Da,null,n,t)}function Yr(n,t){const e=Ue(Yo,null,n);return e.staticCount=t,e}function Ee(n="",t=!1){return t?(Ut(),lu(Hn,null,n)):Ue(Hn,null,n)}function jn(n){return n==null||typeof n=="boolean"?Ue(Hn):Wt(n)?Ue(Le,null,n.slice()):jr(n)?mi(n):Ue(Da,null,String(n))}function mi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function da(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),da(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=mn:s===3&&mn&&(mn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Zt(t)){if(i&65){da(n,{default:t});return}t={default:t,_ctx:mn},e=32}else t=String(t),i&64?(e=16,t=[Dt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ng(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=pi([t.class,i.class]));else if(s==="style")t.style=pe([t.style,i.style]);else if(ba(s)){const r=t[s],o=i[s];o&&r!==o&&!(Wt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Ma(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function $n(n,t,e,i=null){kn(n,t,7,[e,i])}const Og=wh();let Gh=0;function Fg(){return Gh}function Bg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Og,r={uid:Gh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:i.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=gg.bind(null,r),n.ce&&n.ce(r),r}let qe=null;const zg=()=>qe||mn;let fa,Kr;{const n=Ta(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};fa=t("__VUE_INSTANCE_SETTERS__",e=>qe=e),Kr=t("__VUE_SSR_SETTERS__",e=>Zr=e)}const no=n=>{const t=qe;return fa(n),n.scope.on(),()=>{n.scope.off(),fa(t)}},ju=()=>{qe&&qe.scope.off(),fa(null)};function Wh(n){return n.vnode.shapeFlag&4}let Zr=!1;function Vg(n,t=!1,e=!1){t&&Kr(t);const{props:i,children:s}=n.vnode,r=Wh(n);Mg(n,i,r,t),Tg(n,s,e||t);const o=r?kg(n,t):void 0;return t&&Kr(!1),o}function kg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ag);const{setup:i}=e;if(i){ti();const s=n.setupContext=i.length>1?Gg(n):null,r=no(n),o=eo(i,n,0,[n.props,s]),a=kf(o);if(ei(),r(),(a||n.sp)&&!Vr(n)&&bh(n),a){if(o.then(ju,ju),t)return o.then(l=>{Kr(!0);try{Yu(n,l,t)}finally{Kr(!1)}}).catch(l=>{Ca(l,n,0)});n.asyncDep=o}else Yu(n,o)}else $h(n)}function Yu(n,t,e){Zt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:me(t)&&(n.setupState=dh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||Jn);{const s=no(n);ti();try{lg(n)}finally{ei(),s()}}}const Hg={get(n,t){return Xe(n,"get",""),n[t]}};function Gg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Hg),slots:n.slots,emit:n.emit,expose:t}}function Ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Pm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in kr)return kr[e](n)},has(t,e){return e in t||e in kr}})):n.proxy}function Wg(n,t=!0){return Zt(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return Zt(n)&&"__vccOpts"in n}const ze=(n,t)=>Nm(n,t,Zr);function Xh(n,t,e){try{ua(-1);const i=arguments.length;return i===2?me(t)&&!Wt(t)?jr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&jr(e)&&(e=[e]),Ue(n,t,e))}finally{ua(1)}}const Xg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{Kl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const qh=Kl?n=>Kl.createHTML(n):n=>n,qg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Zu=hi&&hi.createElement("template"),Yg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?hi.createElementNS(qg,n):t==="mathml"?hi.createElementNS(jg,n):e?hi.createElement(n,{is:e}):hi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>hi.createTextNode(n),createComment:n=>hi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Zu.innerHTML=qh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Kg=Symbol("_vtc");function Zg(n,t,e){const i=n[Kg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ha=Symbol("_vod"),jh=Symbol("_vsh"),Ju={name:"show",beforeMount(n,{value:t},{transition:e}){n[ha]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):br(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),br(n,!0),i.enter(n)):i.leave(n,()=>{br(n,!1)}):br(n,t))},beforeUnmount(n,{value:t}){br(n,t)}};function br(n,t){n.style.display=t?n[ha]:"none",n[jh]=!t}const Jg=Symbol(""),Qg=/(?:^|;)\s*display\s*:/;function t_(n,t,e){const i=n.style,s=Re(e);let r=!1;if(e&&!s){if(t)if(Re(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Dr(i,a,"")}else for(const o in t)e[o]==null&&Dr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?n_(n,o,!Re(t)&&t?t[o]:void 0,a)||Dr(i,o,a):Dr(i,o,"")}}else if(s){if(t!==e){const o=i[Jg];o&&(e+=";"+o),i.cssText=e,r=Qg.test(e)}}else t&&n.removeAttribute("style");ha in n&&((!s||t!==e)&&(n[ha]=r?i.display:""),n[jh]&&(i.display="none"))}const po=/\s*!important$/;function Dr(n,t,e){if(Wt(e))e.forEach(i=>Dr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))po.test(e)?n.setProperty(t,e.replace(po,""),"important"):n.setProperty(t,e);else{const i=e_(n,t);po.test(e)?n.setProperty(Zi(i),e.replace(po,""),"important"):n[i]=e}}const Qu=["Webkit","Moz","ms"],Za={};function e_(n,t){const e=Za[t];if(e)return e;let i=nn(t);if(i!=="filter"&&i in n)return Za[t]=i;i=Ea(i);for(let s=0;s<Qu.length;s++){const r=Qu[s]+i;if(r in n)return Za[t]=r}return t}function n_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Re(i)&&e===i}const td="http://www.w3.org/1999/xlink";function ed(n,t,e,i,s,r=cm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(td,t.slice(6,t.length)):n.setAttributeNS(td,t,e):e==null||r&&!$f(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Qn(e)?String(e):e)}function nd(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?qh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=$f(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function vi(n,t,e,i){n.addEventListener(t,e,i)}function i_(n,t,e,i){n.removeEventListener(t,e,i)}const id=Symbol("_vei");function s_(n,t,e,i,s=null){const r=n[id]||(n[id]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=a_(t);if(i){const c=r[t]=u_(i,s);vi(n,a,c,l)}else o&&(i_(n,a,o,l),r[t]=void 0)}}const r_=/(Once|Passive|Capture)$/,o_=/^on:?(?:Once|Passive|Capture)$/;function a_(n){let t,e;for(;(e=n.match(r_))&&!o_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Zi(n.slice(2)),t]}let Ja=0;const l_=Promise.resolve(),c_=()=>Ja||(l_.then(()=>Ja=0),Ja=Date.now());function u_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Wt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&kn(c,t,5,a)}}else kn(s,t,5,[i])};return e.value=n,e.attached=c_(),e}const sd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Zg(n,i,o):t==="style"?t_(n,e,i):ba(t)?Ma(t)||s_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):f_(n,t,i,o))?(nd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ed(n,t,i,o,r,t!=="value")):n._isVueCE&&(h_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Re(i)))?nd(n,nn(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ed(n,t,i,o))};function f_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sd(t)&&Zt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sd(t)&&Re(e)?!1:t in n}function h_(n,t){const e=n._def.props;if(!e)return!1;const i=nn(t);return Array.isArray(e)?e.some(s=>nn(s)===i):Object.keys(e).some(s=>nn(s)===i)}const ji=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Wt(t)?e=>qo(t,e):t};function p_(n){n.target.composing=!0}function rd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const _n=Symbol("_assign"),mo=Symbol("_initialValue");function Qa(n,t,e){return t&&(n=n.trim()),e&&(n=wa(n)),n}const Be={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[mo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[mo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[_n]=ji(s);const r=i||s.props&&s.props.type==="number";vi(n,t?"change":"input",o=>{o.target.composing||n[_n](Qa(n.value,e,r))}),(e||r)&&vi(n,"change",()=>{n.value=Qa(n.value,e,r)}),t||(vi(n,"compositionstart",p_),vi(n,"compositionend",rd),vi(n,"change",rd))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[mo];delete n[mo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[_n](Qa(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[_n]=ji(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?wa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},zi={deep:!0,created(n,t,e){n[_n]=ji(e),vi(n,"change",()=>{const i=n._modelValue,s=nr(n),r=n.checked,o=n[_n];if(Wt(i)){const a=qc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(wi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Yh(n,r))})},mounted:od,beforeUpdate(n,t,e){n[_n]=ji(e),od(n,t,e)}};function od(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Wt(t))s=qc(t,i.props.value)>-1;else if(wi(t))s=t.has(i.props.value);else{if(t===e)return;s=Vn(t,Yh(n,!0))}n.checked!==s&&(n.checked=s)}const ad={created(n,{value:t},e){n.checked=Vn(t,e.props.value),n[_n]=ji(e),vi(n,"change",()=>{n[_n](nr(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[_n]=ji(i),t!==e&&(n.checked=Vn(t,i.props.value))}},Ks={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,vi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?wa(nr(l)):nr(l)),r=n.multiple,o=r?wi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Wt(o)?s.slice():s:o];try{n[_n](o)}finally{eu(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[_n]=ji(i)},mounted(n,{value:t}){ld(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[_n]=ji(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!m_(t,e[1],e[0]))&&ld(n,t)}};function m_(n,t,e){if(!e||Wt(n))return Vn(n,t);if(wi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function ld(n,t){const e=n.multiple,i=Wt(t);if(!(e&&!i&&!wi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=nr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=qc(t,a)>-1}else o.selected=t.has(a);else if(Vn(nr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function nr(n){return"_value"in n?n._value:n.value}function Yh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const g_=["ctrl","shift","alt","meta"],__={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>g_.some(e=>n[`${e}Key`]&&!t.includes(e))},ls=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=__[t[o]];if(a&&a(s,t))return}return n(s,...r)})},v_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cd=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=s=>{if(!("key"in s))return;const r=Zi(s.key);if(t.some(o=>o===r||v_[o]===r))return n(s)})},x_=Ge({patchProp:d_},Yg);let ud;function y_(){return ud||(ud=Cg(x_))}const b_=(...n)=>{const t=y_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=S_(i);if(!s)return;const r=t._component;!Zt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,M_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function M_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function S_(n){return Re(n)?document.querySelector(n):n}const cu=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},E_={};function w_(n,t){const e=ru("router-view");return Ut(),lu(e)}const T_=cu(E_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const $s=typeof document<"u";function Kh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function A_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kh(n.default)}const fe=Object.assign;function tl(n,t){const e={};for(const i in t){const s=t[i];e[i]=Gn(s)?s.map(n):n(s)}return e}const Hr=()=>{},Gn=Array.isArray;function dd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Zh=/#/g,C_=/&/g,R_=/\//g,P_=/=/g,L_=/\?/g,Jh=/\+/g,D_=/%5B/g,I_=/%5D/g,Qh=/%5E/g,U_=/%60/g,tp=/%7B/g,N_=/%7C/g,ep=/%7D/g,O_=/%20/g;function uu(n){return n==null?"":encodeURI(""+n).replace(N_,"|").replace(D_,"[").replace(I_,"]")}function F_(n){return uu(n).replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function Zl(n){return uu(n).replace(Jh,"%2B").replace(O_,"+").replace(Zh,"%23").replace(C_,"%26").replace(U_,"`").replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function B_(n){return Zl(n).replace(P_,"%3D")}function z_(n){return uu(n).replace(Zh,"%23").replace(L_,"%3F")}function V_(n){return z_(n).replace(R_,"%2F")}function Jr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const k_=/\/$/,H_=n=>n.replace(k_,"");function el(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=X_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Jr(o)}}function G_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function fd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function W_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&ir(t.matched[i],e.matched[s])&&np(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ir(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function np(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return Gn(n)?hd(n,t):Gn(t)?hd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function hd(n,t){return Gn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function X_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Jl=function(n){return n.pop="pop",n.push="push",n}({}),nl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function q_(n){if(!n)if($s){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),H_(n)}const j_=/^[^#]+#/;function Y_(n,t){return n.replace(j_,"#")+t}function K_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ua=()=>({left:window.scrollX,top:window.scrollY});function Z_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=K_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pd(n,t){return(history.state?history.state.position-t:-1)+n}const Ql=new Map;function J_(n,t){Ql.set(n,t)}function Q_(n){const t=Ql.get(n);return Ql.delete(n),t}function tv(n){return typeof n=="string"||n&&typeof n=="object"}function ip(n){return typeof n=="string"||typeof n=="symbol"}let Ae=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sp=Symbol("");Ae.MATCHER_NOT_FOUND+"",Ae.NAVIGATION_GUARD_REDIRECT+"",Ae.NAVIGATION_ABORTED+"",Ae.NAVIGATION_CANCELLED+"",Ae.NAVIGATION_DUPLICATED+"";function sr(n,t){return fe(new Error,{type:n,[sp]:!0},t)}function oi(n,t){return n instanceof Error&&sp in n&&(t==null||!!(n.type&t))}const ev=["params","query","hash"];function nv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of ev)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function iv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Jh," "),r=s.indexOf("="),o=Jr(r<0?s:s.slice(0,r)),a=r<0?null:Jr(s.slice(r+1));if(o in t){let l=t[o];Gn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function md(n){let t="";for(let e in n){const i=n[e];if(e=B_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Gn(i)?i.map(s=>s&&Zl(s)):[i&&Zl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function sv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Gn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const rv=Symbol(""),gd=Symbol(""),Na=Symbol(""),du=Symbol(""),tc=Symbol("");function Mr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Vi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(sr(Ae.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):tv(f)?l(sr(Ae.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function il(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Vi(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=A_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Vi(f,e,i,o,a,s)()}))}}return r}function ov(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>ir(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>ir(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av=()=>location.protocol+"//"+location.host;function rp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),fd(a,"")}return fd(e,n)+i+s}function lv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=rp(n,location),v=e.value,_=t.value;let g=0;if(f){if(e.value=p,t.value=f,o&&o===v){o=null;return}g=_?f.position-_.position:0}else i(p);s.forEach(h=>{h(e.value,v,{delta:g,type:Jl.pop,direction:g?g>0?nl.forward:nl.back:nl.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(fe({},f.state,{scroll:Ua()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function _d(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ua():null}}function cv(n){const{history:t,location:e}=window,i={value:rp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:av()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){r(l,fe({},t.state,_d(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=fe({},s.value,t.state,{forward:l,scroll:Ua()});r(u.current,u,!0),r(l,fe({},_d(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function uv(n){n=q_(n);const t=cv(n),e=lv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=fe({location:"",base:n,go:i,createHref:Y_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),uv(n)}let hs=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ie=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ie||{});const fv={type:hs.Static,value:""},hv=/[a-zA-Z0-9_]/;function pv(n){if(!n)return[[]];if(n==="/")return[[fv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=Ie.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ie.Static?r.push({type:hs.Static,value:c}):e===Ie.Param||e===Ie.ParamRegExp||e===Ie.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:hs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ie.ParamRegExp){i=e,e=Ie.EscapeNext;continue}switch(e){case Ie.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ie.Param):f();break;case Ie.EscapeNext:f(),e=i;break;case Ie.Param:l==="("?e=Ie.ParamRegExp:hv.test(l)?f():(d(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ie.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ie.ParamRegExpEnd:u+=l;break;case Ie.ParamRegExpEnd:d(),e=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const vd="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var Je=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Je||{});const gv=/[.+*?^${}()[\]/\\]/g;function _v(n,t){const e=fe({},mv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Je.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Je.Segment+(e.sensitive?Je.BonusCaseSensitive:0);if(f.type===hs.Static)d||(s+="/"),s+=f.value.replace(gv,"\\$&"),p+=Je.Static;else if(f.type===hs.Param){const{value:v,repeatable:_,optional:g,regexp:h}=f;r.push({name:v,repeatable:_,optional:g});const w=h||vd;if(w!==vd){p+=Je.BonusCustomRegExp;try{`${w}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+S.message)}}let L=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=g&&c.length<2?`(?:/${L})`:"/"+L),g&&(L+="?"),s+=L,p+=Je.Dynamic,g&&(p+=Je.BonusOptional),_&&(p+=Je.BonusRepeatable),w===".*"&&(p+=Je.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Je.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=r[f-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===hs.Static)u+=p.value;else if(p.type===hs.Param){const{value:v,repeatable:_,optional:g}=p,h=v in c?c[v]:"";if(Gn(h)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=Gn(h)?h.join("/"):h;if(!w)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function vv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Je.Static+Je.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Je.Static+Je.Segment?1:-1:0}function op(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=vv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(xd(i))return 1;if(xd(s))return-1}return s.length-i.length}function xd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const xv={strict:!1,end:!0,sensitive:!1};function yv(n,t,e){const i=_v(pv(n.path),e),s=fe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bv(n,t){const e=[],i=new Map;t=dd(xv,t);function s(d){return i.get(d)}function r(d,f,p){const v=!p,_=bd(d);_.aliasOf=p&&p.record;const g=dd(t,d),h=[_];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of S)h.push(bd(fe({},_,{components:p?p.record.components:_.components,path:j,aliasOf:p?p.record:_})))}let w,L;for(const S of h){const{path:j}=S;if(f&&j[0]!=="/"){const B=f.record.path,O=B[B.length-1]==="/"?"":"/";S.path=f.record.path+(j&&O+j)}if(w=yv(S,f,g),p?p.alias.push(w):(L=L||w,L!==w&&L.alias.push(w),v&&d.name&&!Md(w)&&o(d.name)),ap(w)&&l(w),_.children){const B=_.children;for(let O=0;O<B.length;O++)r(B[O],w,p&&p.children[O])}p=p||w}return L?()=>{o(L)}:Hr}function o(d){if(ip(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Ev(d,e);e.splice(f,0,d),d.record.name&&!Md(d)&&i.set(d.record.name,d)}function c(d,f){let p,v={},_,g;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw sr(Ae.MATCHER_NOT_FOUND,{location:d});g=p.record.name,v=fe(yd(f.params,p.keys.filter(L=>!L.optional).concat(p.parent?p.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&yd(d.params,p.keys.map(L=>L.name))),_=p.stringify(v)}else if(d.path!=null)_=d.path,p=e.find(L=>L.re.test(_)),p&&(v=p.parse(_),g=p.record.name);else{if(p=f.name?i.get(f.name):e.find(L=>L.re.test(f.path)),!p)throw sr(Ae.MATCHER_NOT_FOUND,{location:d,currentLocation:f});g=p.record.name,v=fe({},f.params,d.params),_=p.stringify(v)}const h=[];let w=p;for(;w;)h.unshift(w.record),w=w.parent;return{name:g,path:_,params:v,matched:h,meta:Sv(h)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function bd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Md(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sv(n){return n.reduce((t,e)=>fe(t,e.meta),{})}function Ev(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;op(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(ap(t)&&op(n,t)===0)return t}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Sd(n){const t=Fn(Na),e=Fn(du),i=ze(()=>{const l=Kt(n.to);return t.resolve(l)}),s=ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(ir.bind(null,u));if(f>-1)return f;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&d[d.length-1].path!==p?d.findIndex(ir.bind(null,l[c-2])):f}),r=ze(()=>s.value>-1&&Pv(e.params,i.value.params)),o=ze(()=>s.value>-1&&s.value===e.matched.length-1&&np(e.params,i.value.params));function a(l={}){if(Rv(l)){const c=t[Kt(n.replace)?"replace":"push"](Kt(n.to)).catch(Hr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Tv(n){return n.length===1?n[0]:n}const Av=Ai({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sd,setup(n,{slots:t}){const e=Mn(Sd(n)),{options:i}=Fn(Na),s=ze(()=>({[wd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[wd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Tv(t.default(e));return n.custom?r:Xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Cv=Av;function Rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Pv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Gn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Ed(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const wd=(n,t,e)=>n??t??e,Lv=Ai({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Fn(tc),s=ze(()=>n.route||i.value),r=Fn(gd,0),o=ze(()=>{let c=Kt(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ze(()=>s.value.matched[o.value]);jo(gd,ze(()=>o.value+1)),jo(rv,a),jo(tc,s);const l=jt();return _s(()=>[l.value,a.value,n.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ir(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Td(e.default,{Component:f,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Xh(f,fe({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Td(e.default,{Component:g,route:c})||g}}});function Td(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Dv=Lv;function Iv(n){const t=bv(n.routes,n),e=n.parseQuery||iv,i=n.stringifyQuery||md,s=n.history,r=Mr(),o=Mr(),a=Mr(),l=Lm(Li);let c=Li;$s&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=tl.bind(null,U=>""+U),d=tl.bind(null,V_),f=tl.bind(null,Jr);function p(U,V){let K,ut;return ip(U)?(K=t.getRecordMatcher(U),ut=V):ut=U,t.addRoute(ut,K)}function v(U){const V=t.getRecordMatcher(U);V&&t.removeRoute(V)}function _(){return t.getRoutes().map(U=>U.record)}function g(U){return!!t.getRecordMatcher(U)}function h(U,V){if(V=fe({},V||l.value),typeof U=="string"){const b=el(e,U,V.path),it=t.resolve({path:b.path},V),nt=s.createHref(b.fullPath);return fe(b,it,{params:f(it.params),hash:Jr(b.hash),redirectedFrom:void 0,href:nt})}let K;if(U.path!=null)K=fe({},U,{path:el(e,U.path,V.path).path});else{const b=fe({},U.params);for(const it in b)b[it]==null&&delete b[it];K=fe({},U,{params:d(b)}),V.params=d(V.params)}const ut=t.resolve(K,V),y=U.hash||"";ut.params=u(f(ut.params));const R=G_(i,fe({},U,{hash:F_(y),path:ut.path})),H=s.createHref(R);return fe({fullPath:R,hash:y,query:i===md?sv(U.query):U.query||{}},ut,{redirectedFrom:void 0,href:H})}function w(U){return typeof U=="string"?el(e,U,l.value.path):fe({},U)}function L(U,V){if(c!==U)return sr(Ae.NAVIGATION_CANCELLED,{from:V,to:U})}function S(U){return O(U)}function j(U){return S(fe(w(U),{replace:!0}))}function B(U,V){const K=U.matched[U.matched.length-1];if(K&&K.redirect){const{redirect:ut}=K;let y=typeof ut=="function"?ut(U,V):ut;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=w(y):{path:y},y.params={}),fe({query:U.query,hash:U.hash,params:y.path!=null?{}:U.params},y)}}function O(U,V){const K=c=h(U),ut=l.value,y=U.state,R=U.force,H=U.replace===!0,b=B(K,ut);if(b)return O(fe(w(b),{state:typeof b=="object"?fe({},y,b.state):y,force:R,replace:H}),V||K);const it=K;it.redirectedFrom=V;let nt;return!R&&W_(i,ut,K)&&(nt=sr(Ae.NAVIGATION_DUPLICATED,{to:it,from:ut}),D(ut,ut,!0,!1)),(nt?Promise.resolve(nt):E(it,ut)).catch(at=>oi(at)?oi(at,Ae.NAVIGATION_GUARD_REDIRECT)?at:N(at):q(at,it,ut)).then(at=>{if(at){if(oi(at,Ae.NAVIGATION_GUARD_REDIRECT))return O(fe({replace:H},w(at.to),{state:typeof at.to=="object"?fe({},y,at.to.state):y,force:R}),V||it)}else at=ot(it,ut,!0,H,y);return T(it,ut,at),at})}function I(U,V){const K=L(U,V);return K?Promise.reject(K):Promise.resolve()}function M(U){const V=Z.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(U):U()}function E(U,V){let K;const[ut,y,R]=ov(U,V);K=il(ut.reverse(),"beforeRouteLeave",U,V);for(const b of ut)b.leaveGuards.forEach(it=>{K.push(Vi(it,U,V))});const H=I.bind(null,U,V);return K.push(H),F(K).then(()=>{K=[];for(const b of r.list())K.push(Vi(b,U,V));return K.push(H),F(K)}).then(()=>{K=il(y,"beforeRouteUpdate",U,V);for(const b of y)b.updateGuards.forEach(it=>{K.push(Vi(it,U,V))});return K.push(H),F(K)}).then(()=>{K=[];for(const b of R)if(b.beforeEnter)if(Gn(b.beforeEnter))for(const it of b.beforeEnter)K.push(Vi(it,U,V));else K.push(Vi(b.beforeEnter,U,V));return K.push(H),F(K)}).then(()=>(U.matched.forEach(b=>b.enterCallbacks={}),K=il(R,"beforeRouteEnter",U,V,M),K.push(H),F(K))).then(()=>{K=[];for(const b of o.list())K.push(Vi(b,U,V));return K.push(H),F(K)}).catch(b=>oi(b,Ae.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function T(U,V,K){a.list().forEach(ut=>M(()=>ut(U,V,K)))}function ot(U,V,K,ut,y){const R=L(U,V);if(R)return R;const H=V===Li,b=$s?history.state:{};K&&(ut||H?s.replace(U.fullPath,fe({scroll:H&&b&&b.scroll},y)):s.push(U.fullPath,y)),l.value=U,D(U,V,K,H),N()}let rt;function ct(){rt||(rt=s.listen((U,V,K)=>{if(!z.listening)return;const ut=h(U),y=B(ut,z.currentRoute.value);if(y){O(fe(y,{replace:!0,force:!0}),ut).catch(Hr);return}c=ut;const R=l.value;$s&&J_(pd(R.fullPath,K.delta),Ua()),E(ut,R).catch(H=>oi(H,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_CANCELLED)?H:oi(H,Ae.NAVIGATION_GUARD_REDIRECT)?(O(fe(w(H.to),{force:!0}),ut).then(b=>{oi(b,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===Jl.pop&&s.go(-1,!1)}).catch(Hr),Promise.reject()):(K.delta&&s.go(-K.delta,!1),q(H,ut,R))).then(H=>{H=H||ot(ut,R,!1),H&&(K.delta&&!oi(H,Ae.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===Jl.pop&&oi(H,Ae.NAVIGATION_ABORTED|Ae.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),T(ut,R,H)}).catch(Hr)}))}let vt=Mr(),$=Mr(),k;function q(U,V,K){N(U);const ut=$.list();return ut.length?ut.forEach(y=>y(U,V,K)):console.error(U),Promise.reject(U)}function mt(){return k&&l.value!==Li?Promise.resolve():new Promise((U,V)=>{vt.add([U,V])})}function N(U){return k||(k=!U,ct(),vt.list().forEach(([V,K])=>U?K(U):V()),vt.reset()),U}function D(U,V,K,ut){const{scrollBehavior:y}=n;if(!$s||!y)return Promise.resolve();const R=!K&&Q_(pd(U.fullPath,0))||(ut||!K)&&history.state&&history.state.scroll||null;return eu().then(()=>y(U,V,R)).then(H=>H&&Z_(H)).catch(H=>q(H,U,V))}const dt=U=>s.go(U);let wt;const Z=new Set,z={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:_,resolve:h,options:n,push:S,replace:j,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:mt,install(U){U.component("RouterLink",Cv),U.component("RouterView",Dv),U.config.globalProperties.$router=z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),$s&&!wt&&l.value===Li&&(wt=!0,S(s.location).catch(ut=>{}));const V={};for(const ut in Li)Object.defineProperty(V,ut,{get:()=>l.value[ut],enumerable:!0});U.provide(Na,z),U.provide(du,ch(V)),U.provide(tc,l);const K=U.unmount;Z.add(U),U.unmount=function(){Z.delete(U),Z.size<1&&(c=Li,rt&&rt(),rt=null,l.value=Li,wt=!1,k=!1),K()}}};function F(U){return U.reduce((V,K)=>V.then(()=>M(K)),Promise.resolve())}return z}function lp(){return Fn(Na)}function Uv(n){return Fn(du)}var fu={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),D=N.getContext("2d");D.fillRect(0,0,1,1);var dt=N.transferToImageBitmap();D.createPattern(dt,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var D=e.exports.Promise,dt=D!==void 0?D:t.Promise;return typeof dt=="function"?new dt(N):(N(l,l),null)}var u=function(N,D){return{transform:function(dt){if(N)return dt;if(D.has(dt))return D.get(dt);var wt=new OffscreenCanvas(dt.width,dt.height),Z=wt.getContext("2d");return Z.drawImage(dt,0,0),D.set(dt,wt),wt},clear:function(){D.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),D,dt,wt={},Z=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(z){var F=Math.random();return wt[F]=requestAnimationFrame(function U(V){Z===V||Z+N-1<V?(Z=V,delete wt[F],z()):wt[F]=requestAnimationFrame(U)}),F},dt=function(z){wt[z]&&cancelAnimationFrame(wt[z])}):(D=function(z){return setTimeout(z,N)},dt=function(z){return clearTimeout(z)}),{frame:D,cancel:dt}}(),f=function(){var N,D,dt={};function wt(Z){function z(F,U){Z.postMessage({options:F||{},callback:U})}Z.init=function(U){var V=U.transferControlToOffscreen();Z.postMessage({canvas:V},[V])},Z.fire=function(U,V,K){if(D)return z(U,null),D;var ut=Math.random().toString(36).slice(2);return D=c(function(y){function R(H){H.data.callback===ut&&(delete dt[ut],Z.removeEventListener("message",R),D=null,u.clear(),K(),y())}Z.addEventListener("message",R),z(U,ut),dt[ut]=R.bind(null,{data:{callback:ut}})}),D},Z.reset=function(){Z.postMessage({reset:!0});for(var U in dt)dt[U](),delete dt[U]}}return function(){if(N)return N;if(!i&&r){var Z=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([Z])))}catch(z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",z),null}wt(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(N,D){return D?D(N):N}function _(N){return N!=null}function g(N,D,dt){return v(N&&_(N[D])?N[D]:p[D],dt)}function h(N){return N<0?0:Math.floor(N)}function w(N,D){return Math.floor(Math.random()*(D-N))+N}function L(N){return parseInt(N,16)}function S(N){return N.map(j)}function j(N){var D=String(N).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:L(D.substring(0,2)),g:L(D.substring(2,4)),b:L(D.substring(4,6))}}function B(N){var D=g(N,"origin",Object);return D.x=g(D,"x",Number),D.y=g(D,"y",Number),D}function O(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function I(N){var D=N.getBoundingClientRect();N.width=D.width,N.height=D.height}function M(N){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=N,D}function E(N,D,dt,wt,Z,z,F,U,V){N.save(),N.translate(D,dt),N.rotate(z),N.scale(wt,Z),N.arc(0,0,1,F,U,V),N.restore()}function T(N){var D=N.angle*(Math.PI/180),dt=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-D+(.5*dt-Math.random()*dt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function ot(N,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var dt=D.tick++/D.totalTicks,wt=D.x+D.random*D.tiltCos,Z=D.y+D.random*D.tiltSin,z=D.wobbleX+D.random*D.tiltCos,F=D.wobbleY+D.random*D.tiltSin;if(N.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-dt)+")",N.beginPath(),o&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))N.fill(k(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(z-wt)*.1,Math.abs(F-Z)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var U=Math.PI/10*D.wobble,V=Math.abs(z-wt)*.1,K=Math.abs(F-Z)*.1,ut=D.shape.bitmap.width*D.scalar,y=D.shape.bitmap.height*D.scalar,R=new DOMMatrix([Math.cos(U)*V,Math.sin(U)*V,-Math.sin(U)*K,Math.cos(U)*K,D.x,D.y]);R.multiplySelf(new DOMMatrix(D.shape.matrix));var H=N.createPattern(u.transform(D.shape.bitmap),"no-repeat");H.setTransform(R),N.globalAlpha=1-dt,N.fillStyle=H,N.fillRect(D.x-ut/2,D.y-y/2,ut,y),N.globalAlpha=1}else if(D.shape==="circle")N.ellipse?N.ellipse(D.x,D.y,Math.abs(z-wt)*D.ovalScalar,Math.abs(F-Z)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):E(N,D.x,D.y,Math.abs(z-wt)*D.ovalScalar,Math.abs(F-Z)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var b=Math.PI/2*3,it=4*D.scalar,nt=8*D.scalar,at=D.x,lt=D.y,bt=5,tt=Math.PI/bt;bt--;)at=D.x+Math.cos(b)*nt,lt=D.y+Math.sin(b)*nt,N.lineTo(at,lt),b+=tt,at=D.x+Math.cos(b)*it,lt=D.y+Math.sin(b)*it,N.lineTo(at,lt),b+=tt;else N.moveTo(Math.floor(D.x),Math.floor(D.y)),N.lineTo(Math.floor(D.wobbleX),Math.floor(Z)),N.lineTo(Math.floor(z),Math.floor(F)),N.lineTo(Math.floor(wt),Math.floor(D.wobbleY));return N.closePath(),N.fill(),D.tick<D.totalTicks}function rt(N,D,dt,wt,Z){var z=D.slice(),F=N.getContext("2d"),U,V,K=c(function(ut){function y(){U=V=null,F.clearRect(0,0,wt.width,wt.height),u.clear(),Z(),ut()}function R(){i&&!(wt.width===s.width&&wt.height===s.height)&&(wt.width=N.width=s.width,wt.height=N.height=s.height),!wt.width&&!wt.height&&(dt(N),wt.width=N.width,wt.height=N.height),F.clearRect(0,0,wt.width,wt.height),z=z.filter(function(H){return ot(F,H)}),z.length?U=d.frame(R):y()}U=d.frame(R),V=y});return{addFettis:function(ut){return z=z.concat(ut),K},canvas:N,promise:K,reset:function(){U&&d.cancel(U),V&&V()}}}function ct(N,D){var dt=!N,wt=!!g(D||{},"resize"),Z=!1,z=g(D,"disableForReducedMotion",Boolean),F=r&&!!g(D||{},"useWorker"),U=F?f():null,V=dt?O:I,K=N&&U?!!N.__confetti_initialized:!1,ut=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,y;function R(b,it,nt){for(var at=g(b,"particleCount",h),lt=g(b,"angle",Number),bt=g(b,"spread",Number),tt=g(b,"startVelocity",Number),A=g(b,"decay",Number),x=g(b,"gravity",Number),G=g(b,"drift",Number),st=g(b,"colors",S),ht=g(b,"ticks",Number),W=g(b,"shapes"),P=g(b,"scalar"),Y=!!g(b,"flat"),_t=B(b),yt=at,St=[],Tt=N.width*_t.x,Bt=N.height*_t.y;yt--;)St.push(T({x:Tt,y:Bt,angle:lt,spread:bt,startVelocity:tt,color:st[yt%st.length],shape:W[w(0,W.length)],ticks:ht,decay:A,gravity:x,drift:G,scalar:P,flat:Y}));return y?y.addFettis(St):(y=rt(N,St,V,it,nt),y.promise)}function H(b){var it=z||g(b,"disableForReducedMotion",Boolean),nt=g(b,"zIndex",Number);if(it&&ut)return c(function(tt){tt()});dt&&y?N=y.canvas:dt&&!N&&(N=M(nt),document.body.appendChild(N)),wt&&!K&&V(N);var at={width:N.width,height:N.height};U&&!K&&U.init(N),K=!0,U&&(N.__confetti_initialized=!0);function lt(){if(U){var tt={getBoundingClientRect:function(){if(!dt)return N.getBoundingClientRect()}};V(tt),U.postMessage({resize:{width:tt.width,height:tt.height}});return}at.width=at.height=null}function bt(){y=null,wt&&(Z=!1,t.removeEventListener("resize",lt)),dt&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,K=!1)}return wt&&!Z&&(Z=!0,t.addEventListener("resize",lt,!1)),U?U.fire(b,at,bt):R(b,at,bt)}return H.reset=function(){U&&U.reset(),y&&y.reset()},H}var vt;function $(){return vt||(vt=ct(null,{useWorker:!0,resize:!0})),vt}function k(N,D,dt,wt,Z,z,F){var U=new Path2D(N),V=new Path2D;V.addPath(U,new DOMMatrix(D));var K=new Path2D;return K.addPath(V,new DOMMatrix([Math.cos(F)*Z,Math.sin(F)*Z,-Math.sin(F)*z,Math.cos(F)*z,dt,wt])),K}function q(N){if(!o)throw new Error("path confetti are not supported in this browser");var D,dt;typeof N=="string"?D=N:(D=N.path,dt=N.matrix);var wt=new Path2D(D),Z=document.createElement("canvas"),z=Z.getContext("2d");if(!dt){for(var F=1e3,U=F,V=F,K=0,ut=0,y,R,H=0;H<F;H+=2)for(var b=0;b<F;b+=2)z.isPointInPath(wt,H,b,"nonzero")&&(U=Math.min(U,H),V=Math.min(V,b),K=Math.max(K,H),ut=Math.max(ut,b));y=K-U,R=ut-V;var it=10,nt=Math.min(it/y,it/R);dt=[nt,0,0,nt,-Math.round(y/2+U)*nt,-Math.round(R/2+V)*nt]}return{type:"path",path:D,matrix:dt}}function mt(N){var D,dt=1,wt="#000000",Z='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?D=N:(D=N.text,dt="scalar"in N?N.scalar:dt,Z="fontFamily"in N?N.fontFamily:Z,wt="color"in N?N.color:wt);var z=10*dt,F=""+z+"px "+Z,U=new OffscreenCanvas(z,z),V=U.getContext("2d");V.font=F;var K=V.measureText(D),ut=Math.ceil(K.actualBoundingBoxRight+K.actualBoundingBoxLeft),y=Math.ceil(K.actualBoundingBoxAscent+K.actualBoundingBoxDescent),R=2,H=K.actualBoundingBoxLeft+R,b=K.actualBoundingBoxAscent+R;ut+=R+R,y+=R+R,U=new OffscreenCanvas(ut,y),V=U.getContext("2d"),V.font=F,V.fillStyle=wt,V.fillText(D,H,b);var it=1/dt;return{type:"bitmap",bitmap:U.transferToImageBitmap(),matrix:[it,0,0,it,-ut*it/2,-y*it/2]}}e.exports=function(){return $().apply(this,arguments)},e.exports.reset=function(){$().reset()},e.exports.create=ct,e.exports.shapeFromPath=q,e.exports.shapeFromText=mt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),fu,!1);const Nv=fu.exports;fu.exports.create;const Ov={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden","user-select":"none"}},Fv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px",gap:"8px"}},Bv={style:{display:"flex","align-items":"center",gap:"12px","font-size":"11px","font-weight":"bold","white-space":"nowrap"}},zv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 电源输入电压"},Vv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 芯片输出电压"},kv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 电源输入电流"},Hv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 芯片负载电流"},Gv={style:{height:"30px","background-color":"#15191e","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-size":"11px",gap:"12px","overflow-x":"auto"}},Wv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},$v={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Xv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #1e3a8a"}},qv=["disabled"],jv=["disabled"],Yv={style:{display:"flex","align-items":"center",gap:"2px"}},Kv=["onClick","title"],Zv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Jv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Qv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #065f46"}},t0=["disabled"],e0=["disabled"],n0={style:{display:"flex","align-items":"center",gap:"2px"}},i0=["onClick","title"],s0={style:{"font-weight":"bold","border-bottom":"1px solid #2d3748","padding-bottom":"2px","margin-bottom":"3px",display:"flex","justify-content":"space-between",gap:"10px"}},r0={style:{color:"#94a3b8"}},o0={style:{color:"#ecc94b"}},a0={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"2px 10px"}},go=300,l0=Ai({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=jt(null),s=jt(null),r=Mn({vin:!0,vout:!0,iin:!0,iout:!0}),o=Mn({auto:!0,min:0,max:20}),a=Mn({auto:!0,min:0,max:5});function l(O){o.auto=!1,o.min=0,o.max=O}function c(O){a.auto=!1,a.min=0,a.max=O}const u=[];let d=0;const f=jt(null),p=jt(0),v=jt(0);function _(O){u.push(O),u.length>go&&u.shift()}_s(()=>e.latestSample,O=>{O&&_(O)});function g(){const O=s.value;if(!O||!i.value)return;const I=i.value.clientWidth,M=i.value.clientHeight;if(I===0||M===0)return;const E=window.devicePixelRatio||1;O.width=Math.floor(I*E),O.height=Math.floor(M*E);const T=O.getContext("2d");if(!T)return;T.scale(E,E),T.fillStyle="#121519",T.fillRect(0,0,I,M);const ot=52,rt=52,ct=22,vt=22,$=I-ot-rt,k=M-ct-vt;if($<=10||k<=10)return;let q=o.min,mt=o.max;if(o.auto){let V=10,K=0;if(u.length>0){let ut=0,y=0;if(u.forEach(R=>{r.vin&&(R.vin>ut&&(ut=R.vin),R.vin<y&&(y=R.vin)),r.vout&&(R.vout>ut&&(ut=R.vout),R.vout<y&&(y=R.vout))}),ut>0){const R=ut*1.15;R<=15?V=Math.max(5,Math.ceil(R)):R<=30?V=Math.ceil(R/5)*5:R<=100?V=Math.ceil(R/10)*10:V=Math.ceil(R/20)*20}}q=K,mt=V,o.min=q,o.max=mt}mt<=q&&(mt=q+1);const N=mt-q;let D=a.min,dt=a.max;if(a.auto){let V=3,K=0;if(u.length>0){let ut=0,y=0;if(u.forEach(R=>{r.iin&&(R.iin>ut&&(ut=R.iin),R.iin<y&&(y=R.iin)),r.iout&&(R.iout>ut&&(ut=R.iout),R.iout<y&&(y=R.iout))}),ut>0){const R=ut*1.2;R<=2?V=Math.max(.5,Math.ceil(R*10)/10):R<=10?V=Math.ceil(R):V=Math.ceil(R/2)*2}}D=K,dt=V,a.min=D,a.max=dt}dt<=D&&(dt=D+.1);const wt=dt-D,Z=5,z=8;T.strokeStyle="#1e293b",T.lineWidth=1,T.setLineDash([3,3]);for(let V=0;V<=Z;V++){const K=ct+k/Z*V;T.beginPath(),T.moveTo(ot,K),T.lineTo(ot+$,K),T.stroke()}for(let V=0;V<=z;V++){const K=ot+$/z*V;T.beginPath(),T.moveTo(K,ct),T.lineTo(K,ct+k),T.stroke()}T.setLineDash([]),T.strokeStyle="#334155",T.lineWidth=1,T.strokeRect(ot,ct,$,k),T.font='10px "Consolas", monospace',T.textAlign="right",T.textBaseline="middle",T.fillStyle="#38bdf8";for(let V=0;V<=Z;V++){const K=ct+k/Z*V,ut=mt-N/Z*V,y=N>=10?`${ut.toFixed(1)}V`:`${ut.toFixed(2)}V`;T.fillText(y,ot-6,K),T.strokeStyle="#0284c7",T.beginPath(),T.moveTo(ot-4,K),T.lineTo(ot,K),T.stroke()}T.textAlign="left",T.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',T.fillStyle="#00d2ff",T.fillText("⚡ 电压 (V)",ot-34,ct-8),T.font='10px "Consolas", monospace',T.textAlign="left",T.textBaseline="middle",T.fillStyle="#34d399";for(let V=0;V<=Z;V++){const K=ct+k/Z*V,ut=dt-wt/Z*V,y=wt>=5?`${ut.toFixed(2)}A`:`${ut.toFixed(3)}A`;T.fillText(y,ot+$+6,K),T.strokeStyle="#059669",T.beginPath(),T.moveTo(ot+$,K),T.lineTo(ot+$+4,K),T.stroke()}if(T.textAlign="right",T.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',T.fillStyle="#06d6a0",T.fillText("🔋 电流 (A)",ot+$+34,ct-8),T.font='10px "Consolas", monospace',T.fillStyle="#64748b",T.textAlign="center",T.textBaseline="top",u.length>1){const V=u[0].t,K=u[u.length-1].t,ut=Math.max(.1,(K-V)/1e3);for(let y=0;y<=z;y+=2){const R=ot+$/z*y,H=ut*(1-y/z),b=y===z?"0.0s":`-${H.toFixed(1)}s`;T.fillText(b,R,ct+k+5)}}else T.fillText("时间轴 (Time)",ot+$/2,ct+k+5);if(u.length<2){T.fillStyle="#475569",T.font='12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',T.textAlign="center",T.textBaseline="middle",T.fillText("⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...",ot+$/2,ct+k/2);return}T.save(),T.beginPath(),T.rect(ot,ct,$,k),T.clip();function F(V,K){if(!T)return;T.strokeStyle=K,T.lineWidth=1.8,T.beginPath();const ut=u.length;for(let y=0;y<ut;y++){const R=ot+y/(go-1)*$,H=u[y][V],b=ct+k-(H-q)/N*k;y===0?T.moveTo(R,b):T.lineTo(R,b)}T.stroke()}function U(V,K){if(!T)return;T.strokeStyle=K,T.lineWidth=1.8,T.beginPath();const ut=u.length;for(let y=0;y<ut;y++){const R=ot+y/(go-1)*$,H=u[y][V],b=ct+k-(H-D)/wt*k;y===0?T.moveTo(R,b):T.lineTo(R,b)}T.stroke()}if(r.vin&&F("vin","#00d2ff"),r.vout&&F("vout","#ffd166"),r.iin&&U("iin","#06d6a0"),r.iout&&U("iout","#ef476f"),f.value&&p.value>=ot&&p.value<=ot+$){T.strokeStyle="#94a3b8",T.lineWidth=1,T.setLineDash([2,2]),T.beginPath(),T.moveTo(p.value,ct),T.lineTo(p.value,ct+k),T.stroke(),T.setLineDash([]);const V=f.value;if(r.vin){const K=ct+k-(V.vin-q)/N*k;T.fillStyle="#00d2ff",T.beginPath(),T.arc(p.value,K,3.5,0,Math.PI*2),T.fill()}if(r.vout){const K=ct+k-(V.vout-q)/N*k;T.fillStyle="#ffd166",T.beginPath(),T.arc(p.value,K,3.5,0,Math.PI*2),T.fill()}if(r.iin){const K=ct+k-(V.iin-D)/wt*k;T.fillStyle="#06d6a0",T.beginPath(),T.arc(p.value,K,3.5,0,Math.PI*2),T.fill()}if(r.iout){const K=ct+k-(V.iout-D)/wt*k;T.fillStyle="#ef476f",T.beginPath(),T.arc(p.value,K,3.5,0,Math.PI*2),T.fill()}}T.restore()}function h(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=O.clientY-I.top,T=52,rt=I.width-T-52;if(M>=T&&M<=T+rt&&u.length>1){const ct=(M-T)/rt,vt=Math.min(u.length-1,Math.max(0,Math.round(ct*(go-1)))),$=u[vt];if($){const k=u[0].t,mt=(u[u.length-1].t-k)/1e3,N=($.t-k)/1e3,D=mt-N;f.value={idx:vt+1,relTime:D>.05?`-${D.toFixed(2)}s`:"最新点",vin:$.vin,vout:$.vout,iin:$.iin,iout:$.iout},p.value=M,v.value=E;return}}f.value=null}function w(){f.value=null}function L(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=I.width,T=52,ot=52,rt=O.deltaY<0?-1:1;if(M<=T+35){O.preventDefault(),o.auto=!1;const ct=Math.max(1,o.max-o.min),vt=ct>20?5:ct>5?2:1;o.max=Math.max(o.min+1,Math.round((o.max+rt*vt)*10)/10)}else if(M>=E-ot-35){O.preventDefault(),a.auto=!1;const ct=Math.max(.2,a.max-a.min),vt=ct>5?1:ct>1?.5:.2;a.max=Math.max(a.min+.2,Math.round((a.max+rt*vt)*10)/10)}}function S(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=I.width;M<=52+35?o.auto=!0:M>=E-52-35&&(a.auto=!0)}function j(){u.length=0,f.value=null}function B(){g(),d=requestAnimationFrame(B)}return dr(()=>{B()}),fr(()=>{cancelAnimationFrame(d)}),t({clear:j}),(O,I)=>(Ut(),Ot("div",Ov,[m("div",Fv,[I[18]||(I[18]=m("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[m("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Dt(" 实时参数时域波形 (双纵坐标轴) ")],-1)),m("div",Bv,[m("label",zv,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[0]||(I[0]=M=>r.vin=M)},null,512),[[zi,r.vin]]),I[14]||(I[14]=Dt(" Vin (电源电压) ",-1))]),m("label",Vv,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[1]||(I[1]=M=>r.vout=M)},null,512),[[zi,r.vout]]),I[15]||(I[15]=Dt(" Vout (负载电压) ",-1))]),m("label",kv,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[2]||(I[2]=M=>r.iin=M)},null,512),[[zi,r.iin]]),I[16]||(I[16]=Dt(" Iin (电源电流) ",-1))]),m("label",Hv,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[3]||(I[3]=M=>r.iout=M)},null,512),[[zi,r.iout]]),I[17]||(I[17]=Dt(" Iout (负载电流) ",-1))])]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"10.5px","background-color":"#2d3748",color:"#a0aec0",border:"1px solid #4a5568"},onClick:j,title:"清空当前波形缓存"}," 清空波形 ")]),m("div",Gv,[m("div",Wv,[I[24]||(I[24]=m("span",{style:{color:"#00d2ff","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," ⚡ 左纵轴 (电压): ",-1)),m("label",$v,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[4]||(I[4]=M=>o.auto=M)},null,512),[[zi,o.auto]]),I[19]||(I[19]=m("span",null,"自适应",-1))]),m("div",Xv,[I[20]||(I[20]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),re(m("input",{type:"number","onUpdate:modelValue":I[5]||(I[5]=M=>o.min=M),disabled:o.auto,onChange:I[6]||(I[6]=M=>o.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围下限",step:"1"},null,40,qv),[[Be,o.min,void 0,{number:!0}]]),I[21]||(I[21]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),re(m("input",{type:"number","onUpdate:modelValue":I[7]||(I[7]=M=>o.max=M),disabled:o.auto,onChange:I[8]||(I[8]=M=>o.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围上限",step:"1"},null,40,jv),[[Be,o.max,void 0,{number:!0}]]),I[22]||(I[22]=m("span",{style:{color:"#38bdf8","font-weight":"bold","font-size":"10.5px"}},"V",-1))]),m("div",Yv,[I[23]||(I[23]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ut(),Ot(Le,null,yi([15,30,60],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>l(M),title:`锁定 0 ~ ${M}V 范围`},xt(M)+"V ",9,Kv)),64))])]),m("div",Zv,[I[30]||(I[30]=m("span",{style:{color:"#06d6a0","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," 🔋 右纵轴 (电流): ",-1)),m("label",Jv,[re(m("input",{type:"checkbox","onUpdate:modelValue":I[9]||(I[9]=M=>a.auto=M)},null,512),[[zi,a.auto]]),I[25]||(I[25]=m("span",null,"自适应",-1))]),m("div",Qv,[I[26]||(I[26]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),re(m("input",{type:"number","onUpdate:modelValue":I[10]||(I[10]=M=>a.min=M),disabled:a.auto,onChange:I[11]||(I[11]=M=>a.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围下限",step:"0.5"},null,40,t0),[[Be,a.min,void 0,{number:!0}]]),I[27]||(I[27]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),re(m("input",{type:"number","onUpdate:modelValue":I[12]||(I[12]=M=>a.max=M),disabled:a.auto,onChange:I[13]||(I[13]=M=>a.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围上限",step:"0.5"},null,40,e0),[[Be,a.max,void 0,{number:!0}]]),I[28]||(I[28]=m("span",{style:{color:"#34d399","font-weight":"bold","font-size":"10.5px"}},"A",-1))]),m("div",n0,[I[29]||(I[29]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ut(),Ot(Le,null,yi([2,5,10],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>c(M),title:`锁定 0 ~ ${M}A 范围`},xt(M)+"A ",9,i0)),64))])])]),m("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519",cursor:"crosshair",overflow:"hidden"},onMousemove:h,onMouseleave:w,onWheel:L,onDblclick:S},[m("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512),f.value?(Ut(),Ot("div",{key:0,style:pe([{left:`${p.value}px`,top:`${v.value}px`},{position:"absolute",transform:"translate(-50%, -100%)","margin-top":"-10px","pointer-events":"none","z-index":"20","background-color":"rgba(22, 27, 34, 0.95)",border:"1px solid #38bdf8","border-radius":"4px",padding:"5px 8px","font-family":"'Consolas', monospace","font-size":"10.5px",color:"#e2e8f0","box-shadow":"0 4px 12px rgba(0,0,0,0.7)","white-space":"nowrap"}])},[m("div",s0,[m("span",r0,"采样点 #"+xt(f.value.idx),1),m("span",o0,xt(f.value.relTime),1)]),m("div",a0,[m("div",null,[I[31]||(I[31]=m("span",{style:{color:"#00d2ff","font-weight":"bold"}},"Vin:",-1)),Dt(" "+xt(f.value.vin.toFixed(3))+"V",1)]),m("div",null,[I[32]||(I[32]=m("span",{style:{color:"#06d6a0","font-weight":"bold"}},"Iin:",-1)),Dt(" "+xt(f.value.iin.toFixed(3))+"A",1)]),m("div",null,[I[33]||(I[33]=m("span",{style:{color:"#ffd166","font-weight":"bold"}},"Vout:",-1)),Dt(" "+xt(f.value.vout.toFixed(3))+"V",1)]),m("div",null,[I[34]||(I[34]=m("span",{style:{color:"#ef476f","font-weight":"bold"}},"Iout:",-1)),Dt(" "+xt(f.value.iout.toFixed(3))+"A",1)])])],4)):Ee("",!0)],544)]))}}),c0=cu(l0,[["__scopeId","data-v-50507eef"]]),u0={class:"modal-card",style:{"max-width":"680px"}},d0={class:"modal-header"},f0={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},h0={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},p0={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},m0={style:{display:"flex","align-items":"center",gap:"8px"}},g0={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},_0={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},v0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},x0={style:{color:"#ecc94b"}},y0={style:{color:"#63b3ed"}},b0={style:{color:"#e2e8f0"}},M0={style:{color:"#48bb78"}},S0={style:{display:"flex","align-items":"center",gap:"6px"}},E0=["onClick"],w0=["onClick"],T0=["onClick"],A0={class:"modal-footer"},C0=Ai({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ut(),Ot("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=ls(i=>t.$emit("close"),["self"]))},[m("div",u0,[m("div",d0,[e[5]||(e[5]=m("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[m("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("circle",{cx:"12",cy:"12",r:"10"}),m("polyline",{points:"12 6 12 12 16 14"})]),Dt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),m("div",f0,[n.records.length===0?(Ut(),Ot("div",h0," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Ee("",!0),(Ut(!0),Ot(Le,null,yi(n.records,i=>{var s,r;return Ut(),Ot("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[m("div",p0,[m("div",m0,[m("span",g0,xt(i.title),1),m("span",_0,xt(new Date(i.createdAt).toLocaleString()),1)]),m("div",v0,[m("span",null,[e[6]||(e[6]=Dt("电压: ",-1)),m("b",x0,xt(i.config.voltageMin)+"V ~ "+xt(i.config.voltageMax)+"V",1)]),m("span",null,[e[7]||(e[7]=Dt("负载: ",-1)),m("b",y0,xt(i.config.loadMin)+" ~ "+xt(i.config.loadMax)+" ("+xt(i.config.loadMode)+")",1)]),m("span",null,[e[8]||(e[8]=Dt("点数: ",-1)),m("b",b0,xt(i.points.length),1)]),m("span",null,[e[9]||(e[9]=Dt("最高效率: ",-1)),m("b",M0,xt(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),m("div",S0,[m("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 进入数据查看 ",-1)])],8,E0),m("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,w0),m("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"3 6 5 6 21 6"}),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,T0)])],32)}),128))]),m("div",A0,[m("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Ee("",!0)}}),R0={class:"modal-card",style:{"max-width":"520px"}},P0={class:"modal-header"},L0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},D0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},I0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},U0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},N0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},O0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},F0={style:{display:"flex","align-items":"center",gap:"6px"}},B0=["disabled"],z0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},V0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},k0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},H0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},G0={style:{display:"flex","align-items":"center",gap:"6px"}},W0=["disabled"],$0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},X0={class:"modal-footer"},q0=Ai({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=jt(115200),e=jt(115200);return(i,s)=>n.isOpen?(Ut(),Ot("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=ls(r=>i.$emit("close"),["self"]))},[m("div",R0,[m("div",P0,[s[10]||(s[10]=Yr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),m("div",L0,[m("div",D0,[s[11]||(s[11]=m("div",null,[m("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[m("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Dt(" 内置仿真演示驱动 (Virtual Simulation) ")]),m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),m("div",I0,[m("div",U0,[m("span",N0,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Dt(" 直流电源 (RIGOL DP700) ",-1))]),m("span",O0,xt(n.psuPortName),1)]),m("div",F0,[re(m("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[m("option",{value:115200},"115200 bps (默认)",-1),m("option",{value:9600},"9600 bps",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1)])],8,B0),[[Ks,t.value,void 0,{number:!0}]]),n.psuConnected?(Ut(),Ot("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ut(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),m("div",z0,[m("div",V0,[m("span",k0,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Dt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),m("span",H0,xt(n.loadPortName),1)]),m("div",G0,[re(m("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[m("option",{value:115200},"115200 bps (默认)",-1),m("option",{value:9600},"9600 bps",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1)])],8,W0),[[Ks,e.value,void 0,{number:!0}]]),n.loadConnected?(Ut(),Ot("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ut(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Ee("",!0):(Ut(),Ot("div",$0,[...s[16]||(s[16]=[Dt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),m("b",null,"【启用仿真】",-1),Dt("无障碍测试。 ",-1)])]))]),m("div",X0,[m("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Ee("",!0)}});class j0{constructor(){Xt(this,"connected",!0);Xt(this,"outputOn",!1);Xt(this,"targetVoltage",5);Xt(this,"currentVoltage",0);Xt(this,"lastVoltage",0);Xt(this,"voltageChangeTime",0);Xt(this,"currentLimit",3);Xt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}getTargetVoltage(){return this.targetVoltage}getCurrentLimit(){return this.currentLimit}}class Y0{constructor(){Xt(this,"connected",!0);Xt(this,"inputOn",!1);Xt(this,"isShort",!1);Xt(this,"mode","CC");Xt(this,"targetCurrent",1);Xt(this,"currentCurrent",0);Xt(this,"lastCurrent",0);Xt(this,"targetPower",10);Xt(this,"currentPower",0);Xt(this,"lastPower",0);Xt(this,"targetVoltage",5);Xt(this,"targetResistance",5);Xt(this,"loadChangeTime",0);Xt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}getMode(){return this.mode}setMode(t){this.mode=t,this.loadChangeTime=performance.now()}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}setVoltage(t){this.targetVoltage=Math.max(.1,t),this.loadChangeTime=performance.now()}setResistance(t){this.targetResistance=Math.max(.1,t),this.loadChangeTime=performance.now()}getTargetCurrent(){return this.targetCurrent}getTargetPower(){return this.targetPower}getTargetVoltage(){return this.targetVoltage}getTargetResistance(){return this.targetResistance}setShort(t){this.isShort=t}isShortOn(){return this.isShort}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if(this.isShort){const l=.04+(Math.random()-.5)*.01,c=10+(Math.random()-.5)*.02;return{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(c*1e3)/1e3),pout:Math.max(0,Math.round(l*c*1e3)/1e3)}}const e=t??10;if(e<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CW"){this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CV"){const l=this.targetVoltage+(Math.random()-.5)*.003;return o=Math.max(.1,Math.min(15,(e-l)*1.5))+(Math.random()-.5)*.005,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{const l=r+(Math.random()-.5)*.003;return o=Math.max(.01,l/this.targetResistance)+(Math.random()-.5)*.002,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class hn{static apply(t,e){return`:APPLy CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setVoltageAndLimit(t,e){return hn.apply(t,e)}static getApply(){return`:APPLy? CH1
`}static setOutput(t){return`:OUTPut CH1,${t?"ON":"OFF"}
`}static getOutput(){return`:OUTPut? CH1
`}static measureAll(){return`:MEASure:ALL? CH1
`}}class Te{static setMode(t){let e="CURR";return t==="CC"?e="CURR":t==="CV"?e="VOLT":t==="CW"?e="POW":t==="CR"&&(e="RES"),`:MODE ${e}
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
`}}class Ad{constructor(t){Xt(this,"type");Xt(this,"isVirtual",!1);Xt(this,"port",null);Xt(this,"reader",null);Xt(this,"writer",null);Xt(this,"encoder",null);Xt(this,"decoder",null);Xt(this,"readBuffer","");Xt(this,"isDisconnecting",!1);Xt(this,"onLostCallback",null);Xt(this,"disconnectListener",null);Xt(this,"commandQueue",Promise.resolve());Xt(this,"virtualPsu",new j0);Xt(this,"virtualLoad",new Y0);Xt(this,"state",{connected:!1,portName:"未连接",isVirtual:!1,model:"",baudRate:115200});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}handleDeviceUnresponsive(t){this.isDisconnecting||(console.warn(`[WebSerial 仪器未响应] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=115200){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.isVirtual=!1,this.state.isVirtual=!1,this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");return new Promise((e,i)=>{this.commandQueue=this.commandQueue.then(async()=>{try{const s=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();if(!s){e();return}const r=s+`
`;await this.writer.write(r);const a=this.type==="PSU"&&(s.toUpperCase().includes(":APPL")||s.toUpperCase().includes(":OUTP"))?500:15;await new Promise(l=>setTimeout(l,a)),e()}catch(s){this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(s==null?void 0:s.message)||s}`),i(s)}})})}}async query(t,e=350,i=1){if(this.isVirtual)return this.handleVirtualQuery(t);if(!this.state.connected||!this.writer)throw new Error(`[${this.type}] 串口未连接，无法执行查询指令`);return new Promise((s,r)=>{this.commandQueue=this.commandQueue.then(async()=>{let o=null;for(let a=0;a<=i;a++)try{const l=await this.executePhysicalQuery(t,e);s(l);return}catch(l){o=l,a<i&&await new Promise(c=>setTimeout(c,20))}r(o)})})}async executePhysicalQuery(t,e){if(!this.writer||!this.state.connected)throw new Error("串口未连接或已丢失写入句柄");const i=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();if(!i)throw new Error("查询指令为空");const s=i+`
`;this.readBuffer="";try{await this.writer.write(s)}catch(l){throw this.handleDeviceLost(`向串口发送指令失败: ${(l==null?void 0:l.message)||l}`),l}const r=performance.now(),o=i.toUpperCase();for(;performance.now()-r<e;){const l=this.readBuffer.search(/[\r\n]/);if(l!==-1){const c=this.readBuffer.slice(0,l).trim();let u=l;for(;u<this.readBuffer.length&&(this.readBuffer[u]==="\r"||this.readBuffer[u]===`
`);)u++;if(this.readBuffer=this.readBuffer.slice(u),!c)continue;const d=c.toUpperCase();if(d===o||d===o.replace(/^:/,""))continue;return await new Promise(f=>setTimeout(f,15)),c}await new Promise(c=>setTimeout(c,8))}const a=this.readBuffer.trim();if(this.readBuffer="",a)return a;throw new Error(`[${this.type}] 设备未响应指令 (超时 ${e}ms): ${i}`)}handleVirtualQuery(t){const e=t.trim().toUpperCase();if(this.type==="PSU"){if(e.includes("*IDN?"))return"RIGOL TECHNOLOGIES,DP711,DP7A234500001,00.01.02";if(e.includes(":MEAS:ALL")||e.includes(":MEASURE:ALL")||e.includes(":MEAS")){const i=this.virtualPsu.measure();return`${i.vin.toFixed(3)},${i.iin.toFixed(3)},${i.pin.toFixed(3)}`}return e.includes(":APPL?")?`${this.virtualPsu.getTargetVoltage().toFixed(3)},${this.virtualPsu.getCurrentLimit().toFixed(3)}`:e.includes(":OUTP?")||e.includes(":OUTPUT?")?this.virtualPsu.isOutputOn()?"ON":"OFF":e.includes(":VOLT?")||e.includes(":VOLTAGE?")?this.virtualPsu.getTargetVoltage().toFixed(3):e.includes(":CURR?")||e.includes(":CURRENT?")?this.virtualPsu.getCurrentLimit().toFixed(3):"OK"}else{if(e.includes("*IDN?"))return"UNI-T,UTL8511,UTL8500A10098,V1.04";if(e.includes(":MEAS:VOLT?"))return this.virtualLoad.measure().vout.toFixed(3);if(e.includes(":MEAS:CURR?"))return this.virtualLoad.measure().iout.toFixed(3);if(e.includes(":MEAS:POW?"))return this.virtualLoad.measure().pout.toFixed(3);if(e.includes(":MEAS:RES?")){const i=this.virtualLoad.measure();return(i.iout>.001?i.vout/i.iout:9999).toFixed(3)}if(e.includes(":INP:SHOR?"))return this.virtualLoad.isShortOn()?"1":"0";if(e.includes(":INP?")||e.includes(":INPUT?"))return this.virtualLoad.isInputOn()?"1":"0";if(e.includes(":MODE?")||e.includes(":FUNC?")){const i=this.virtualLoad.getMode();return i==="CC"?"CURR":i==="CV"?"VOLT":i==="CW"?"POW":"RES"}return e.includes(":CURR?")?this.virtualLoad.getTargetCurrent().toFixed(3):e.includes(":VOLT?")?this.virtualLoad.getTargetVoltage().toFixed(3):e.includes(":POW?")?this.virtualLoad.getTargetPower().toFixed(3):e.includes(":RES?")?this.virtualLoad.getTargetResistance().toFixed(3):"OK"}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const ds=class ds{constructor(){Xt(this,"psu",new Ad("PSU"));Xt(this,"load",new Ad("LOAD"));Xt(this,"onDeviceLostListener",null);Xt(this,"cachedTelemetry",{vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0});Xt(this,"lastPsuStatus",{outputOn:!1,setVoltage:0,setCurrentLimit:0});Xt(this,"lastLoadStatus",{inputOn:!1,mode:"CC",targetVal:0,isShort:!1});Xt(this,"isTesting",!1);Xt(this,"psuConsecutiveFailures",0);Xt(this,"loadConsecutiveFailures",0);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}resetFailureCounters(){this.psuConsecutiveFailures=0,this.loadConsecutiveFailures=0}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){if(this.psu.state.connected){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason}}if(this.load.state.connected){const t=this.load.checkAlive();if(!t.alive)return this.load.handleDeviceLost(t.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:t.reason}}return{ok:!0}}static getInstance(){return ds.instance||(ds.instance=new ds),ds.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.resetFailureCounters(),this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){if(this.psu.isVirtual)this.psu.virtualPsu.setOutput(t),t&&(this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i));else if(t){const s=Math.abs(this.lastPsuStatus.setVoltage-e)>1e-4,r=Math.abs(this.lastPsuStatus.setCurrentLimit-i)>1e-4;(s||r||!this.lastPsuStatus.outputOn)&&await this.psu.write(hn.setVoltageAndLimit(e,i)),this.lastPsuStatus.outputOn||await this.psu.write(hn.setOutput(!0))}else await this.psu.write(hn.setOutput(!1));this.lastPsuStatus.outputOn=t,t&&(this.lastPsuStatus.setVoltage=e,this.lastPsuStatus.setCurrentLimit=i)}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):e==="CW"?this.load.virtualLoad.setPower(i):e==="CV"?this.load.virtualLoad.setVoltage(i):e==="CR"&&this.load.virtualLoad.setResistance(i)):(await this.load.write(Te.setMode(e)),e==="CC"?await this.load.write(Te.setCurrent(i)):e==="CW"?await this.load.write(Te.setPower(i)):e==="CV"?await this.load.write(Te.setVoltage(i)):e==="CR"&&await this.load.write(Te.setResistance(i)),await this.load.write(Te.setInput(t))),this.lastLoadStatus.inputOn=t,this.lastLoadStatus.mode=e,this.lastLoadStatus.targetVal=i}async measurePsu(){if(this.psu.isVirtual)return this.psu.virtualPsu.measure();if(!this.psu.state.connected){if(this.isTesting)throw this.psu.handleDeviceLost("直流电源串口未连接"),new Error("直流电源串口未连接");return{vin:0,iin:0,pin:0}}try{const t=await this.psu.query(hn.measureAll(),400,1),e=t.split(",").map(i=>parseFloat(i.trim()));if(e.length>=2&&!isNaN(e[0])&&!isNaN(e[1])){const i=Math.max(0,e[0]),s=Math.max(0,e[1]),r=e.length>=3&&!isNaN(e[2])?Math.max(0,e[2]):Math.round(i*s*1e3)/1e3;return this.psuConsecutiveFailures=0,{vin:i,iin:s,pin:r}}throw new Error(`电源返回遥测数据格式无效: "${t}"`)}catch(t){if(this.psuConsecutiveFailures++,console.warn(`[PSU measureAll error count: ${this.psuConsecutiveFailures}]:`,t),this.isTesting&&this.psuConsecutiveFailures>=2)throw this.psu.handleDeviceUnresponsive(`直流电源突然未响应指令 (超时无回复): ${(t==null?void 0:t.message)||t}`),new Error(`直流电源 [RIGOL DP700] 突然未响应指令: ${(t==null?void 0:t.message)||t}`);return{vin:0,iin:0,pin:0}}}async measureLoad(t){if(this.load.isVirtual)return this.load.virtualLoad.measure(t);if(!this.load.state.connected){if(this.isTesting)throw this.load.handleDeviceLost("电子负载串口未连接"),new Error("电子负载串口未连接");return{vout:0,iout:0,pout:0}}try{const e=await this.load.query(Te.measureVolt(),350,1),i=await this.load.query(Te.measureCurr(),350,1),s=parseFloat(e),r=parseFloat(i);if(!isNaN(s)&&!isNaN(r)&&e.trim()!==""&&i.trim()!==""){this.loadConsecutiveFailures=0;const o=Math.round(s*r*1e3)/1e3;return{vout:Math.max(0,s),iout:Math.max(0,r),pout:o}}throw new Error(`负载返回遥测数据格式无效: V="${e}", I="${i}"`)}catch(e){if(this.loadConsecutiveFailures++,console.warn(`[LOAD measure error count: ${this.loadConsecutiveFailures}]:`,e),this.isTesting&&this.loadConsecutiveFailures>=2)throw this.load.handleDeviceUnresponsive(`电子负载突然未响应指令 (超时无回复): ${(e==null?void 0:e.message)||e}`),new Error(`电子负载 [UNI-T UTL8500] 突然未响应指令: ${(e==null?void 0:e.message)||e}`);return{vout:0,iout:0,pout:0}}}async measureAsync(){const t=await this.measurePsu(),e=await this.measureLoad(t.vin),i=t.pin>.01?e.pout/t.pin*100:0,s={vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))};return this.cachedTelemetry=s,s}measure(){if(this.psu.isVirtual&&this.load.isVirtual){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}return this.cachedTelemetry}async queryPsuStatus(){if(this.psu.isVirtual){const t={outputOn:this.psu.virtualPsu.isOutputOn(),setVoltage:this.psu.virtualPsu.getTargetVoltage(),setCurrentLimit:this.psu.virtualPsu.getCurrentLimit()};return this.lastPsuStatus=t,t}if(!this.psu.state.connected)return this.lastPsuStatus;try{const t=await this.psu.query(hn.getOutput(),300),e=t.toUpperCase().includes("ON")||t.trim()==="1";let i=this.lastPsuStatus.setVoltage,s=this.lastPsuStatus.setCurrentLimit;const r=await this.psu.query(hn.getApply(),300);if(r&&r.includes(",")){const a=r.split(",").map(l=>parseFloat(l.trim()));isNaN(a[0])||(i=a[0]),a.length>=2&&!isNaN(a[1])&&(s=a[1])}const o={outputOn:e,setVoltage:i,setCurrentLimit:s};return this.lastPsuStatus=o,o}catch(t){return console.warn("[queryPsuStatus error]:",t),this.lastPsuStatus}}async queryLoadStatus(){if(this.load.isVirtual){const t=this.load.virtualLoad.getMode();let e=0;t==="CC"?e=this.load.virtualLoad.getTargetCurrent():t==="CW"?e=this.load.virtualLoad.getTargetPower():t==="CV"?e=this.load.virtualLoad.getTargetVoltage():t==="CR"&&(e=this.load.virtualLoad.getTargetResistance());const i={inputOn:this.load.virtualLoad.isInputOn(),mode:t,targetVal:e,isShort:this.load.virtualLoad.isShortOn()};return this.lastLoadStatus=i,i}if(!this.load.state.connected)return this.lastLoadStatus;try{const t=await this.load.query(Te.getInput(),250),e=await this.load.query(Te.getMode(),250),i=t.includes("1")||t.toUpperCase().includes("ON");let s=this.lastLoadStatus.mode;const r=e.toUpperCase().trim();r.includes("CURR")?s="CC":r.includes("VOLT")?s="CV":r.includes("POW")?s="CW":r.includes("RES")&&(s="CR");let o=Te.getCurrent();s==="CV"?o=Te.getVoltage():s==="CW"?o=Te.getPower():s==="CR"&&(o=Te.getResistance());const a=await this.load.query(o,250),l=parseFloat(a),c=isNaN(l)?this.lastLoadStatus.targetVal:l,u={inputOn:i,mode:s,targetVal:c,isShort:!1};return this.lastLoadStatus=u,u}catch(t){return console.warn("[queryLoadStatus error]:",t),this.lastLoadStatus}}async setPsuVoltageOnly(t){const e=this.lastPsuStatus.setCurrentLimit>0?this.lastPsuStatus.setCurrentLimit:3;this.psu.isVirtual?this.psu.virtualPsu.setVoltage(t):Math.abs(this.lastPsuStatus.setVoltage-t)>1e-4&&await this.psu.write(hn.apply(t,e)),this.lastPsuStatus.setVoltage=t}async setPsuCurrentLimitOnly(t){const e=this.lastPsuStatus.setVoltage>0?this.lastPsuStatus.setVoltage:5;this.psu.isVirtual?this.psu.virtualPsu.setCurrentLimit(t):Math.abs(this.lastPsuStatus.setCurrentLimit-t)>1e-4&&await this.psu.write(hn.apply(e,t)),this.lastPsuStatus.setCurrentLimit=t}async setPsuOutputState(t){this.psu.isVirtual?this.psu.virtualPsu.setOutput(t):await this.psu.write(hn.setOutput(t)),this.lastPsuStatus.outputOn=t}async setLoadModeAndValue(t,e){this.load.isVirtual?(this.load.virtualLoad.setMode(t),t==="CC"?this.load.virtualLoad.setCurrent(e):t==="CW"?this.load.virtualLoad.setPower(e):t==="CV"?this.load.virtualLoad.setVoltage(e):t==="CR"&&this.load.virtualLoad.setResistance(e)):(await this.load.write(Te.setMode(t)),t==="CC"?await this.load.write(Te.setCurrent(e)):t==="CW"?await this.load.write(Te.setPower(e)):t==="CV"?await this.load.write(Te.setVoltage(e)):t==="CR"&&await this.load.write(Te.setResistance(e))),this.lastLoadStatus.mode=t,this.lastLoadStatus.targetVal=e}async setLoadInputState(t){this.load.isVirtual?this.load.virtualLoad.setInput(t):await this.load.write(Te.setInput(t)),this.lastLoadStatus.inputOn=t}async setLoadShortState(t){this.load.isVirtual?this.load.virtualLoad.setShort(t):await this.load.write(Te.setShort(t)),this.lastLoadStatus.isShort=t}async clearLoadProtectionState(){this.load.isVirtual||await this.load.write(Te.clearProtection())}async sendPsuRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.psu.query(e):(await this.psu.write(e),"已发送指令至电源串口"):""}async sendLoadRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.load.query(e):(await this.load.write(e),"已发送指令至负载串口"):""}async emergencyStopAll(){try{this.psu.isVirtual?this.psu.virtualPsu.setOutput(!1):this.psu.state.connected&&await this.psu.write(hn.setOutput(!1))}catch(t){console.warn("[PSU emergency stop output off error]:",t)}this.lastPsuStatus.outputOn=!1;try{this.load.isVirtual?this.load.virtualLoad.setInput(!1):this.load.state.connected&&await this.load.write(Te.setInput(!1))}catch(t){console.warn("[LOAD emergency stop input off error]:",t)}this.lastLoadStatus.inputOn=!1}};Xt(ds,"instance");let pa=ds;const K0="PowerChipTesterDB",Z0=1,Tn="test_runs",cp=5;function Oa(){return new Promise((n,t)=>{const e=indexedDB.open(K0,Z0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(Tn)||s.createObjectStore(Tn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function J0(n){const t=await Oa(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([Tn],"readwrite");r.objectStore(Tn).put(e),r.oncomplete=async()=>{try{await ex(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Oa();return new Promise((t,e)=>{const o=n.transaction([Tn],"readonly").objectStore(Tn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Q0(n){const t=await Oa();return new Promise((e,i)=>{const o=t.transaction([Tn],"readonly").objectStore(Tn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function tx(n){const t=await Oa();return new Promise((e,i)=>{const s=t.transaction([Tn],"readwrite");s.objectStore(Tn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function ex(n){return new Promise((t,e)=>{const s=n.transaction([Tn],"readwrite").objectStore(Tn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function Zo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(p=>`"${p}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(p=>{const v=n.voltageSteps.map(_=>{const g=n.points.find(h=>Math.abs(h.voltageTarget-_)<1e-4&&Math.abs(h.loadTarget-p)<1e-4);return g&&g.status==="completed"?g.efficiency.toFixed(2):'""'});i.push(`"${p}",${v.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(p=>{i.push([p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),`"${p.loadMode}"`,p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2),`"${p.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压切换后0.5s内被忽略的数据及步间暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.5s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(p=>{i.push([p.relTime.toFixed(4),p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),p.stepRelTime.toFixed(4),p.isValidForAvg?'"YES"':'"NO(0.5s切换/暂态过滤)"',p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const nx={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},ix={class:"menubar"},sx={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},rx={style:{display:"flex","align-items":"center",gap:"5px"}},ox={style:{display:"flex","align-items":"center",gap:"5px"}},ax={class:"panel-left"},lx={class:"group-box"},cx={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},ux={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},dx={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"4px"}},fx=["value"],hx={key:0,style:{"margin-bottom":"6px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},px={style:{display:"flex","align-items":"center",gap:"4px"}},mx=["value"],gx={key:1,style:{"margin-top":"4px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},_x={class:"group-box"},vx={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},xx={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},yx={style:{"margin-bottom":"6px"}},bx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Mx=["disabled"],Sx=["disabled"],Ex=["disabled"],wx={style:{"margin-bottom":"6px"}},Tx={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},Ax={style:{display:"flex",gap:"4px"}},Cx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Rx=["disabled"],Px={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Lx=["disabled"],Dx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Ix={style:{"font-size":"10px",color:"#a0aec0"}},Ux=["disabled"],Nx={style:{"font-size":"10px",color:"#a0aec0"}},Ox=["disabled"],Fx={style:{"font-size":"10px",color:"#a0aec0"}},Bx=["disabled"],zx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Vx=["disabled"],kx=["disabled"],Hx=["disabled"],Gx={class:"group-box"},Wx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},$x={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Xx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},jx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Yx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},Kx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Zx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},ty={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},ey={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},ny={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},iy={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},sy={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},ry={style:{display:"flex","flex-direction":"column",gap:"6px"}},oy={style:{display:"flex",gap:"6px"}},ay=["disabled"],ly=["disabled"],cy={class:"panel-right"},uy={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},dy={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},fy={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},hy={style:{color:"#48bb78"}},py={style:{flex:"1",overflow:"auto"}},my={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},gy={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},_y={style:{padding:"4px 6px"}},vy={style:{padding:"4px 6px"}},xy={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},yy={style:{padding:"4px 6px"}},by={style:{padding:"4px 6px"}},My={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},Sy={style:{padding:"4px 6px"}},Ey={style:{padding:"4px 6px"}},wy={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},Ty={key:0,style:{color:"#48bb78"}},Ay={key:1,style:{color:"#00d2ff"}},Cy={key:2,style:{color:"#4a5568"}},Ry={style:{padding:"4px 6px","text-align":"center"}},Py={class:"statusbar"},Ly={key:0,style:{color:"#48bb78"}},Dy={key:1},Iy={class:"device-lost-modal"},Uy={class:"device-lost-header"},Ny={class:"device-lost-body"},Oy={class:"device-lost-info-grid"},Fy={class:"info-row"},By={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},zy={class:"info-row"},Vy={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},ky={class:"info-row"},Hy={class:"info-val"},Gy={class:"info-row"},Wy={class:"info-val",style:{"font-family":"monospace"}},$y={class:"device-lost-footer"},Xy=Ai({__name:"ConsoleView",setup(n){const t=lp(),e=pa.getInstance(),i=jt(null),s=jt(!1),r=jt(!1),o=jt(!1),a=jt([]),l=Mn({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),c=jt(null),u=jt(void 0),d=jt([]),f=jt(!1),p=jt(!1),v=jt("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let _=null,g=null;const h=Mn({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),w=jt([]),L=jt([]),S=jt([]),j=jt(null),B=Mn({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),O=ze(()=>{const W=Math.max(1,Math.floor((h.voltageMax-h.voltageMin)/h.voltageStep)+1),P=Math.max(1,Math.floor((h.loadMax-h.loadMin)/h.loadStep)+1);return W*P}),I=ze(()=>S.value.filter(W=>W.status==="completed").length),M=ze(()=>S.value.filter(W=>W.status==="completed"));function E(W){i.value=i.value===W?null:W}function T(){i.value=null}function ot(){const W=[];for(let yt=h.voltageMin;yt<=h.voltageMax+1e-5;yt+=h.voltageStep)W.push(Math.round(yt*100)/100);const P=[];for(let yt=h.loadMin;yt<=h.loadMax+1e-5;yt+=h.loadStep)P.push(Math.round(yt*100)/100);w.value=W,L.value=P;const Y=[];let _t=1;for(const yt of W)for(const St of P)Y.push({stepIndex:_t++,voltageTarget:yt,loadTarget:St,loadMode:h.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});S.value=Y,B.totalSteps=Y.length,B.currentStep=0,B.progressPercent=0}function rt(W,P,Y){console.error(`%c[SERIAL DEVICE LOST] %c${W} (${P}): ${Y}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),l.visible=!0,l.deviceType=W,l.deviceName=P,l.reason=Y,l.timestamp=new Date().toLocaleTimeString(),f.value&&(p.value=!0,v.value=`⚠️ 警告: 检测到串口设备【${P}】异常断开/丢失！测试已自动紧急暂停。`,e.emergencyStopAll().catch(()=>{}))}function ct(){l.visible=!1,r.value=!0}async function vt(){e.resetFailureCounters();try{v.value="正在检测仪器响应并尝试恢复...",!e.psu.isVirtual&&e.psu.state.connected&&await e.psu.query(hn.getApply(),400),!e.load.isVirtual&&e.load.state.connected&&await e.load.query(Te.getMode(),400),f.value&&B.activeTargetV>0&&(await e.setPsuOutput(!0,B.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,B.activeTargetLoad)),l.visible=!1,p.value=!1,v.value="仪器通信已恢复正常，测试继续进行..."}catch(W){v.value=`⚠️ 恢复失败: ${(W==null?void 0:W.message)||W}，请检查物理设备与连接`}}async function $(){if(l.visible=!1,o.value=!0,e.autoConnectVirtual(),e.resetFailureCounters(),f.value&&B.activeTargetV>0)try{await e.setPsuOutput(!0,B.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,B.activeTargetLoad)}catch(W){console.warn("Re-apply virtual step targets warning:",W)}v.value="已切换为仿真驱动模式，测试已恢复继续",p.value=!1}async function k(){l.visible=!1,_&&_.abort(),await mt()}async function q(){if(!e.isBothConnected())if(o.value)e.autoConnectVirtual();else{r.value=!0,v.value="未检测到仪器硬件连接，请先配置串口（默认 115200bps）或开启仿真演示模式",alert(`未检测到物理仪器连接！

请在弹出的【仪器串口硬件连接】窗口中选择对应的串口设备（默认波特率 115200）；
或在左侧面板顶部勾选【🧪 启用仿真演示模式】以进行虚拟测试。`);return}ot(),d.value=[],c.value&&c.value.clear(),u.value=void 0,f.value=!0,p.value=!1,e.isTesting=!0,e.resetFailureCounters(),_=new AbortController,v.value="正在执行全自动 2D 矩阵效率测试...",z();const W=performance.now();try{let P=0,Y=-999999;for(let _t=0;_t<S.value.length&&!_.signal.aborted;_t++){for(;p.value&&!_.signal.aborted;)await new Promise(Et=>setTimeout(Et,200));const yt=S.value[_t];yt.status="running",B.activeTargetV=yt.voltageTarget,B.activeTargetLoad=yt.loadTarget,B.currentStep=_t+1;const St=_t===0||Math.abs(yt.voltageTarget-Y)>1e-4;if(Y=yt.voltageTarget,St){v.value=`正在切换电压至 ${yt.voltageTarget.toFixed(2)}V，下发设置并等待 0.5s 电源就绪...`;try{await e.setPsuOutput(!0,yt.voltageTarget,h.inputCurrentLimit)}catch(Et){for(rt("PSU",e.psu.state.model,`直流电源下发控制指令未响应/写入失败: ${(Et==null?void 0:Et.message)||Et}`);p.value&&!_.signal.aborted;)await new Promise(Ft=>setTimeout(Ft,200));if(_.signal.aborted)break}}try{await e.setLoadInput(!0,h.loadMode,yt.loadTarget)}catch(Et){for(rt("LOAD",e.load.state.model,`电子负载下发控制指令未响应/写入失败: ${(Et==null?void 0:Et.message)||Et}`);p.value&&!_.signal.aborted;)await new Promise(Ft=>setTimeout(Ft,200));if(_.signal.aborted)break}if(_.signal.aborted)break;v.value=`正在测试步 #${yt.stepIndex} (Vin: ${yt.voltageTarget.toFixed(2)}V, 负载: ${yt.loadTarget.toFixed(2)}${yt.loadMode})...`;const Tt=h.stepDwellTime*1e3,Bt=h.stepDwellTime,Nt=.1,Ct=Math.max(10,Math.round(1e3/(h.sampleRateHz||8))),Jt=performance.now(),Gt=[],ie=[],X=[],Rt=[],gt=[],Mt=[];let Pt=0;for(;Pt<Tt&&!_.signal.aborted;){for(;p.value&&!_.signal.aborted;)await new Promise(rn=>setTimeout(rn,200));const Et=performance.now();Pt=Et-Jt;const Ft=Pt/1e3,se=(Et-W)/1e3;if(!e.checkHealth().ok){for(;p.value&&!_.signal.aborted;)await new Promise(rn=>setTimeout(rn,200));if(_.signal.aborted)break}const ae=Bt>.2?Ft>=Nt&&Ft<=Bt-Nt:!0;let ne;try{ne=await e.measureAsync()}catch{for(;p.value&&!_.signal.aborted;)await new Promise(gr=>setTimeout(gr,200));if(_.signal.aborted)break;continue}B.vin=ne.vin,B.iin=ne.iin,B.pin=ne.pin,B.vout=ne.vout,B.iout=ne.iout,B.pout=ne.pout,B.efficiency=ne.efficiency,u.value={t:Et,vin:ne.vin,vout:ne.vout,iin:ne.iin,iout:ne.iout};const An={timestamp:Date.now(),relTime:Math.round(se*1e3)/1e3,stepIndex:yt.stepIndex,voltageTarget:yt.voltageTarget,loadTarget:yt.loadTarget,stepRelTime:Math.round(Ft*1e3)/1e3,isValidForAvg:ae,vin:ne.vin,iin:ne.iin,pin:ne.pin,vout:ne.vout,iout:ne.iout,pout:ne.pout,efficiency:ne.efficiency};d.value.push(An),ae&&(Gt.push(ne.vin),ie.push(ne.iin),X.push(ne.pin),Rt.push(ne.vout),gt.push(ne.iout),Mt.push(ne.pout));const oo=performance.now()-Et,ao=Math.max(2,Ct-oo);await new Promise(rn=>setTimeout(rn,ao))}if(Gt.length>0){const Et=Gt.length;yt.vin=Math.round(Gt.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.iin=Math.round(ie.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.pin=Math.round(X.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.vout=Math.round(Rt.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.iout=Math.round(gt.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.pout=Math.round(Mt.reduce((Ft,se)=>Ft+se,0)/Et*1e3)/1e3,yt.efficiency=yt.pin>.001?Math.min(100,Math.max(0,Math.round(yt.pout/yt.pin*1e4)/100)):0}else{const Et=e.measure();yt.vin=Et.vin,yt.iin=Et.iin,yt.pin=Et.pin,yt.vout=Et.vout,yt.iout=Et.iout,yt.pout=Et.pout,yt.efficiency=Et.efficiency}yt.status="completed",yt.timestamp=Date.now(),P++,B.progressPercent=P/S.value.length*100}_.signal.aborted||await mt()}catch(P){console.error("Test execution error:",P),v.value="测试执行异常: "+String(P),alert("测试执行过程中发生异常："+String(P))}finally{f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),F()}}async function mt(){await e.emergencyStopAll(),v.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const W=S.value.filter(X=>X.status==="completed");let P=0,Y=100,_t=0,yt;W.forEach(X=>{X.efficiency>P&&(P=X.efficiency,yt=X),X.efficiency<Y&&(Y=X.efficiency),_t+=X.efficiency});const St=W.length>0?_t/W.length:0,Tt=`test_${Date.now()}`,Bt=new Date,Nt=JSON.parse(JSON.stringify(h)),Ct=JSON.parse(JSON.stringify(S.value)),Jt=yt?JSON.parse(JSON.stringify(yt)):void 0,Gt=JSON.parse(JSON.stringify(d.value)),ie={id:Tt,title:`芯片双向矩阵扫描 [${h.voltageMin}V-${h.voltageMax}V | ${h.loadMode}]`,createdAt:Bt.toISOString(),config:Nt,voltageSteps:[...w.value],loadSteps:[...L.value],points:Ct,rawSamples:Gt,summary:{totalPoints:S.value.length,completedPoints:W.length,maxEfficiency:Math.round(P*100)/100,minEfficiency:Math.round(Y*100)/100,avgEfficiency:Math.round(St*100)/100,optimalPoint:Jt,durationSeconds:Math.round(W.length*h.stepDwellTime)}};j.value=ie,await J0(ie),await y(),Nv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),U(Tt)}function N(){p.value=!0,v.value="测试已暂停"}async function D(){e.resetFailureCounters();try{B.activeTargetV>0&&(await e.setPsuOutput(!0,B.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,B.activeTargetLoad))}catch(W){console.warn("Re-applying step targets on resume warning:",W)}l.visible=!1,p.value=!1,v.value="测试已继续运行"}async function dt(){_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),F(),v.value="测试已手动终止，仪器输出已安全切断"}let wt=!1,Z=0;function z(){g&&clearInterval(g),g=window.setInterval(async()=>{if(e.checkHealth(),!f.value&&!wt){wt=!0;try{if(e.psu.state.connected||e.load.state.connected){const W=await e.measureAsync();B.vin=W.vin,B.iin=W.iin,B.pin=W.pin,B.vout=W.vout,B.iout=W.iout,B.pout=W.pout,B.efficiency=W.efficiency,Z++,Z%4===0&&(e.psu.state.connected&&await e.queryPsuStatus(),e.load.state.connected&&await e.queryLoadStatus())}}catch{}finally{wt=!1}}},500)}function F(){g&&(clearInterval(g),g=null)}function U(W){var yt;const P=W||((yt=j.value)==null?void 0:yt.id);if(!P){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const _t=`${window.location.href.split("#")[0]}#/result/${P}`;window.open(_t,"_blank")}function V(){if(j.value)Zo(j.value);else if(M.value.length>0){const W={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(h)),voltageSteps:[...w.value],loadSteps:[...L.value],points:JSON.parse(JSON.stringify(S.value)),rawSamples:JSON.parse(JSON.stringify(d.value)),summary:{totalPoints:S.value.length,completedPoints:M.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};Zo(W)}else alert("当前无可用测试数据可供导出！")}function K(W){Zo(W)}async function ut(W){await tx(W),await y()}async function y(){try{a.value=await up()}catch(W){console.warn("Failed to load history:",W)}}async function R(){await y(),s.value=!0}function H(){S.value=[],d.value=[],j.value=null,u.value=void 0,c.value&&c.value.clear(),ot(),v.value="图表与数据已清空"}function b(){o.value?(e.autoConnectVirtual(),v.value="已启用内置仿真驱动模式 (Virtual Mode)"):(e.psu.disconnect(),e.load.disconnect(),v.value="已关闭仿真模式，请配置物理串口设备")}function it(){e.psu.state.connected?(e.psu.disconnect(),v.value="电源串口已断开"):r.value=!0}function nt(){e.load.state.connected?(e.load.disconnect(),v.value="电子负载串口已断开"):r.value=!0}function at(){o.value=!0,e.autoConnectVirtual(),r.value=!1,v.value="仿真驱动已就绪"}async function lt(W){try{await e.psu.connectPhysical(W),e.resetFailureCounters(),o.value=!1,v.value=`电源串口已连接 (${W}bps)`,await e.queryPsuStatus()}catch(P){alert("连接电源串口失败: "+((P==null?void 0:P.message)||P))}}async function bt(){await e.psu.disconnect(),v.value="电源串口已断开"}async function tt(W){try{await e.load.connectPhysical(W),e.resetFailureCounters(),o.value=!1,v.value=`负载串口已连接 (${W}bps)`,await e.queryLoadStatus()}catch(P){alert("连接负载串口失败: "+((P==null?void 0:P.message)||P))}}async function A(){await e.load.disconnect(),v.value="负载串口已断开"}function x(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}function G(){t.push("/single-instrument")}function st(W){(W.ctrlKey||W.metaKey)&&(W.key==="d"||W.key==="D")&&(W.preventDefault(),G())}function ht(){e.emergencyStopAll().catch(()=>{})}return dr(async()=>{e.setOnDeviceLost(rt),o.value&&e.autoConnectVirtual(),ot(),z(),await y(),window.addEventListener("keydown",st),window.addEventListener("beforeunload",ht)}),fr(()=>{_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,e.emergencyStopAll().catch(()=>{}),F(),window.removeEventListener("keydown",st),window.removeEventListener("beforeunload",ht)}),(W,P)=>(Ut(),Ot("div",nx,[m("div",ix,[m("div",{class:pi(["menu-item",{active:i.value==="file"}]),onClick:P[3]||(P[3]=Y=>E("file"))},[P[38]||(P[38]=Dt(" 文件 (File) ",-1)),i.value==="file"?(Ut(),Ot("div",{key:0,class:"dropdown-menu",onClick:P[2]||(P[2]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:P[0]||(P[0]=Y=>{V(),T()})},[...P[35]||(P[35]=[m("span",null,"导出测试结果 CSV (Export CSV)...",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),P[37]||(P[37]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:P[1]||(P[1]=Y=>T())},[...P[36]||(P[36]=[m("span",null,"退出 (Exit)",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Ee("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="view"}]),onClick:P[6]||(P[6]=Y=>E("view"))},[P[40]||(P[40]=Dt(" 视图 (View) ",-1)),i.value==="view"?(Ut(),Ot("div",{key:0,class:"dropdown-menu",onClick:P[5]||(P[5]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:P[4]||(P[4]=Y=>{H(),T()})},[...P[39]||(P[39]=[m("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Ee("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="tools"}]),onClick:P[11]||(P[11]=Y=>E("tools"))},[P[46]||(P[46]=Dt(" 工具 (Tools) ",-1)),i.value==="tools"?(Ut(),Ot("div",{key:0,class:"dropdown-menu",onClick:P[10]||(P[10]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:P[7]||(P[7]=Y=>{R(),T()})},[...P[41]||(P[41]=[m("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),m("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),P[44]||(P[44]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:P[8]||(P[8]=Y=>{G(),T()})},[...P[42]||(P[42]=[m("span",{style:{color:"#48bb78","font-weight":"bold"}},"🔧 单仪器测试 / 硬件单体调试工具...",-1),m("span",{style:{"font-size":"10px",color:"#48bb78","font-family":"monospace"}},"Ctrl+D",-1)])]),P[45]||(P[45]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:P[9]||(P[9]=Y=>{r.value=!0,T()})},[...P[43]||(P[43]=[m("span",null,"打开串口硬件连接设置...",-1)])])])):Ee("",!0)],2),m("div",{class:pi(["menu-item",{active:i.value==="help"}]),onClick:P[14]||(P[14]=Y=>E("help"))},[P[48]||(P[48]=Dt(" 帮助 (Help) ",-1)),i.value==="help"?(Ut(),Ot("div",{key:0,class:"dropdown-menu",onClick:P[13]||(P[13]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:P[12]||(P[12]=Y=>{x(),T()})},[...P[47]||(P[47]=[m("span",null,"关于工作台 (About Workbench)...",-1)])])])):Ee("",!0)],2),m("div",sx,[m("span",rx,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Kt(e).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 电源: "+xt(Kt(e).psu.state.portName)+" ",1),Kt(e).psu.state.connected?(Ut(),Ot("span",{key:0,style:pe({color:Kt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+xt(Kt(e).lastPsuStatus.outputOn?"输出:ON":"输出:OFF")+"] ",5)):Ee("",!0)]),m("span",ox,[m("span",{style:pe([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Kt(e).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 负载: "+xt(Kt(e).load.state.portName)+" ",1),Kt(e).load.state.connected?(Ut(),Ot("span",{key:0,style:pe({color:Kt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+xt(Kt(e).lastLoadStatus.inputOn?"带载:ON":"带载:OFF")+"] ",5)):Ee("",!0)]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold","background-color":"#234e52",color:"#81e6d9",border:"1px solid #319795"},onClick:P[15]||(P[15]=Y=>G()),title:"打开电源/负载底层单仪器独立调试工作台 (Ctrl+D)"}," 🔧 单仪器测试 "),j.value?(Ut(),Ot("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:P[16]||(P[16]=Y=>U(j.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...P[49]||(P[49]=[m("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 打开 3D/2D 数据视图 ",-1)])])):Ee("",!0)])]),m("div",{class:"workbench-body",onClick:T},[m("div",ax,[m("div",lx,[P[55]||(P[55]=m("div",{class:"group-title"},[m("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),m("div",cx,[m("label",ux,[re(m("input",{type:"checkbox","onUpdate:modelValue":P[17]||(P[17]=Y=>o.value=Y),onChange:b},null,544),[[zi,o.value]]),P[50]||(P[50]=Dt(" 🧪 启用仿真演示模式 ",-1))]),m("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:P[18]||(P[18]=Y=>r.value=!0)}," ⚙ 配置 ")]),m("div",dx,[P[51]||(P[51]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),m("input",{type:"text",readonly:"",value:Kt(e).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,fx),m("button",{class:pi(["btn",Kt(e).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:it},xt(Kt(e).psu.state.connected?"断开":"连接"),3)]),Kt(e).psu.state.connected?(Ut(),Ot("div",hx,[P[52]||(P[52]=m("span",{style:{color:"#a0aec0"}},"电源状态:",-1)),m("span",{style:pe({color:Kt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 输出: "+xt(Kt(e).lastPsuStatus.outputOn?"ON (已开启)":"OFF (已关闭)"),5)])):Ee("",!0),m("div",px,[P[53]||(P[53]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),m("input",{type:"text",readonly:"",value:Kt(e).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,mx),m("button",{class:pi(["btn",Kt(e).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:nt},xt(Kt(e).load.state.connected?"断开":"连接"),3)]),Kt(e).load.state.connected?(Ut(),Ot("div",gx,[P[54]||(P[54]=m("span",{style:{color:"#a0aec0"}},"负载状态:",-1)),m("span",{style:pe({color:Kt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 带载: "+xt(Kt(e).lastLoadStatus.inputOn?"ON (带载中)":"OFF (已停止)")+" ("+xt(Kt(e).lastLoadStatus.mode)+") ",5)])):Ee("",!0)]),m("div",_x,[m("div",vx,[P[56]||(P[56]=m("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),m("span",xx," 总点数: "+xt(O.value)+" 点 ",1)]),m("div",yx,[P[60]||(P[60]=m("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),m("div",bx,[m("div",null,[P[57]||(P[57]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[19]||(P[19]=Y=>h.voltageMin=Y),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Mx),[[Be,h.voltageMin,void 0,{number:!0}]])]),m("div",null,[P[58]||(P[58]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[20]||(P[20]=Y=>h.voltageMax=Y),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Sx),[[Be,h.voltageMax,void 0,{number:!0}]])]),m("div",null,[P[59]||(P[59]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[21]||(P[21]=Y=>h.voltageStep=Y),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ex),[[Be,h.voltageStep,void 0,{number:!0}]])])])]),m("div",wx,[m("div",Tx,[P[63]||(P[63]=m("span",null,"负载扫描范围 (Load):",-1)),m("div",Ax,[m("label",Cx,[re(m("input",{type:"radio",value:"CC","onUpdate:modelValue":P[22]||(P[22]=Y=>h.loadMode=Y),disabled:f.value},null,8,Rx),[[ad,h.loadMode]]),P[61]||(P[61]=Dt(" CC恒流 ",-1))]),m("label",Px,[re(m("input",{type:"radio",value:"CW","onUpdate:modelValue":P[23]||(P[23]=Y=>h.loadMode=Y),disabled:f.value},null,8,Lx),[[ad,h.loadMode]]),P[62]||(P[62]=Dt(" CW恒功率 ",-1))])])]),m("div",Dx,[m("div",null,[m("span",Ix,"起始("+xt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":P[24]||(P[24]=Y=>h.loadMin=Y),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ux),[[Be,h.loadMin,void 0,{number:!0}]])]),m("div",null,[m("span",Nx,"终止("+xt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":P[25]||(P[25]=Y=>h.loadMax=Y),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ox),[[Be,h.loadMax,void 0,{number:!0}]])]),m("div",null,[m("span",Fx,"步长("+xt(h.loadMode==="CC"?"A":"W")+"):",1),re(m("input",{type:"number","onUpdate:modelValue":P[26]||(P[26]=Y=>h.loadStep=Y),disabled:f.value,step:"0.1",style:{width:"100%"}},null,8,Bx),[[Be,h.loadStep,void 0,{number:!0}]])])])]),m("div",zx,[m("div",null,[P[64]||(P[64]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[27]||(P[27]=Y=>h.inputCurrentLimit=Y),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Vx),[[Be,h.inputCurrentLimit,void 0,{number:!0}]])]),m("div",null,[P[65]||(P[65]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[28]||(P[28]=Y=>h.stepDwellTime=Y),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,kx),[[Be,h.stepDwellTime,void 0,{number:!0}]])]),m("div",null,[P[66]||(P[66]=m("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),re(m("input",{type:"number","onUpdate:modelValue":P[29]||(P[29]=Y=>h.sampleRateHz=Y),disabled:f.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,Hx),[[Be,h.sampleRateHz,void 0,{number:!0}]])])])]),m("div",Gx,[P[80]||(P[80]=m("div",{class:"group-title"},[m("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),m("div",Wx,[m("div",$x,[P[68]||(P[68]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),m("div",Xx,[Dt(xt(B.vin.toFixed(3))+" ",1),P[67]||(P[67]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",qx,[P[70]||(P[70]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),m("div",jx,[Dt(xt(B.vout.toFixed(3))+" ",1),P[69]||(P[69]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",Yx,[P[72]||(P[72]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),m("div",Kx,[Dt(xt(B.iin.toFixed(3))+" ",1),P[71]||(P[71]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Zx,[P[74]||(P[74]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),m("div",Jx,[Dt(xt(B.iout.toFixed(3))+" ",1),P[73]||(P[73]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Qx,[P[76]||(P[76]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),m("div",ty,[Dt(xt(B.pin.toFixed(3))+" ",1),P[75]||(P[75]=m("span",{style:{"font-size":"10px"}},"W",-1))])]),m("div",ey,[P[78]||(P[78]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),m("div",ny,[Dt(xt(B.pout.toFixed(3))+" ",1),P[77]||(P[77]=m("span",{style:{"font-size":"10px"}},"W",-1))])])]),m("div",iy,[P[79]||(P[79]=m("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),m("span",sy,xt(B.efficiency.toFixed(2))+" % ",1)])]),m("div",ry,[f.value?p.value?(Ut(),Ot("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:D}," ▶ 继续测试 ")):(Ut(),Ot("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:N}," ⏸ 暂停测试 ")):(Ut(),Ot("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:q}," ▶ 开始矩阵测试 ")),m("div",oy,[m("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!f.value,onClick:dt}," ⏹ 结束 ",8,ay),m("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:M.value.length===0,onClick:V}," 📊 导出CSV ",8,ly)])])]),m("div",cy,[Ue(c0,{ref_key:"waveformRef",ref:c,"latest-sample":u.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),m("div",uy,[m("div",dy,[P[82]||(P[82]=m("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),m("span",fy,[P[81]||(P[81]=Dt(" 已完成: ",-1)),m("b",hy,xt(I.value),1),Dt(" / "+xt(S.value.length)+" 步 ",1)])]),m("div",py,[m("table",my,[P[83]||(P[83]=m("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[m("tr",{style:{"border-bottom":"1px solid #2d3748"}},[m("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),m("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),m("th",{style:{padding:"5px 6px"}},"目标负载"),m("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),m("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),m("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),m("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),m("tbody",null,[(Ut(!0),Ot(Le,null,yi(S.value,Y=>(Ut(),Ot("tr",{key:Y.stepIndex,style:pe([{"border-bottom":"1px solid #1e2530"},{backgroundColor:Y.status==="running"?"#1a365d":"transparent"}])},[m("td",gy,"#"+xt(Y.stepIndex),1),m("td",_y,xt(Y.voltageTarget.toFixed(2)),1),m("td",vy,xt(Y.loadTarget.toFixed(2))+" "+xt(Y.loadMode),1),m("td",xy,xt(Y.status!=="pending"?Y.vin.toFixed(4):"--"),1),m("td",yy,xt(Y.status!=="pending"?Y.iin.toFixed(4):"--"),1),m("td",by,xt(Y.status!=="pending"?Y.pin.toFixed(4):"--"),1),m("td",My,xt(Y.status!=="pending"?Y.vout.toFixed(4):"--"),1),m("td",Sy,xt(Y.status!=="pending"?Y.iout.toFixed(4):"--"),1),m("td",Ey,xt(Y.status!=="pending"?Y.pout.toFixed(4):"--"),1),m("td",wy,[Y.status==="completed"?(Ut(),Ot("span",Ty,xt(Y.efficiency.toFixed(2))+"% ",1)):Y.status==="running"?(Ut(),Ot("span",Ay,"测定中")):(Ut(),Ot("span",Cy,"--"))]),m("td",Ry,[m("span",{style:pe([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:Y.status==="completed"?"#22543d":Y.status==="running"?"#2b6cb0":"#2d3748",color:Y.status==="completed"?"#9ae6b4":Y.status==="running"?"#bee3f8":"#718096"}])},xt(Y.status==="completed"?"已完成":Y.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),m("div",Py,[m("span",null,xt(v.value),1),f.value?(Ut(),Ot("span",Ly," 正在测试第 "+xt(B.currentStep)+" / "+xt(B.totalSteps)+" 点 ("+xt(B.progressPercent.toFixed(1))+"%) ",1)):(Ut(),Ot("span",Dy,"就绪 (Ready)"))]),Ue(C0,{"is-open":s.value,records:a.value,onClose:P[30]||(P[30]=Y=>s.value=!1),onOpenResult:U,onExportCsv:K,onDeleteRecord:ut},null,8,["is-open","records"]),Ue(q0,{"is-open":r.value,"psu-connected":Kt(e).psu.state.connected,"psu-port-name":Kt(e).psu.state.portName,"load-connected":Kt(e).load.state.connected,"load-port-name":Kt(e).load.state.portName,"web-serial-supported":Kt(e).psu.isWebSerialSupported(),onClose:P[31]||(P[31]=Y=>r.value=!1),onConnectVirtual:at,onConnectPhysicalPsu:lt,onDisconnectPsu:bt,onConnectPhysicalLoad:tt,onDisconnectLoad:A},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),l.visible?(Ut(),Ot("div",{key:0,class:"device-lost-overlay",onClick:P[34]||(P[34]=ls(Y=>l.visible=!1,["self"]))},[m("div",Iy,[m("div",Uy,[P[84]||(P[84]=Yr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 仪器突然未响应指令 / 串口通信异常告警！ </span></div>',1)),m("button",{class:"btn",style:{padding:"2px 7px"},onClick:P[32]||(P[32]=Y=>l.visible=!1)},"✕")]),m("div",Ny,[P[89]||(P[89]=m("div",{class:"device-lost-alert-banner"},[m("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 测试过程中仪器突然停止响应指令或连接中断！ "),m("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，仪器输出已安全保护切断。 ")],-1)),m("div",Oy,[m("div",Fy,[P[85]||(P[85]=m("span",{class:"info-label"},"未响应仪器:",-1)),m("span",By,xt(l.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+xt(l.deviceName),1)]),m("div",zy,[P[86]||(P[86]=m("span",{class:"info-label"},"异常详情:",-1)),m("span",Vy,xt(l.reason),1)]),m("div",ky,[P[87]||(P[87]=m("span",{class:"info-label"},"测试进度:",-1)),m("span",Hy,"已完成 "+xt(I.value)+" / "+xt(S.value.length)+" 点 (当前步已挂起)",1)]),m("div",Gy,[P[88]||(P[88]=m("span",{class:"info-label"},"发生时间:",-1)),m("span",Wy,xt(l.timestamp),1)])]),P[90]||(P[90]=m("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查仪器面板状态、USB 串口线连接或仪器供电。排除故障后可点击【重试并恢复测试】继续执行；亦可切换为仿真模式或终止并保存数据。 ",-1))]),m("div",$y,[m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:vt}," ▶ 重试并恢复测试 "),m("button",{class:"btn",style:{"font-weight":"bold","border-color":"#4a5568"},onClick:ct}," ⚙ 重新连接串口硬件 "),m("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:$}," 🧪 切换仿真模式继续 "),m("button",{class:"btn btn-danger",onClick:k}," 💾 终止测试并保存已测结果 "),m("button",{class:"btn",onClick:P[33]||(P[33]=Y=>l.visible=!1)}," 保持暂停 ")])])])):Ee("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hu="170",Zs={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qy=0,Cd=1,jy=2,dp=1,Yy=2,fi=3,Yi=0,cn=1,xi=2,$i=0,Js=1,Rd=2,Pd=3,Ld=4,Ky=5,cs=100,Zy=101,Jy=102,Qy=103,tb=104,eb=200,nb=201,ib=202,sb=203,ec=204,nc=205,rb=206,ob=207,ab=208,lb=209,cb=210,ub=211,db=212,fb=213,hb=214,ic=0,sc=1,rc=2,rr=3,oc=4,ac=5,lc=6,cc=7,fp=0,pb=1,mb=2,Si=0,gb=1,_b=2,vb=3,xb=4,yb=5,bb=6,Mb=7,hp=300,or=301,ar=302,uc=303,dc=304,Fa=306,fc=1e3,ps=1001,hc=1002,Bn=1003,Sb=1004,_o=1005,In=1006,sl=1007,ms=1008,Ti=1009,pp=1010,mp=1011,Qr=1012,pu=1013,xs=1014,bi=1015,io=1016,mu=1017,gu=1018,lr=1020,gp=35902,_p=1021,vp=1022,Un=1023,xp=1024,yp=1025,Qs=1026,cr=1027,bp=1028,_u=1029,Mp=1030,vu=1031,xu=1033,Jo=33776,Qo=33777,ta=33778,ea=33779,pc=35840,mc=35841,gc=35842,_c=35843,vc=36196,xc=37492,yc=37496,bc=37808,Mc=37809,Sc=37810,Ec=37811,wc=37812,Tc=37813,Ac=37814,Cc=37815,Rc=37816,Pc=37817,Lc=37818,Dc=37819,Ic=37820,Uc=37821,na=36492,Nc=36494,Oc=36495,Sp=36283,Fc=36284,Bc=36285,zc=36286,Eb=3200,wb=3201,Ep=0,Tb=1,Hi="",yn="srgb",hr="srgb-linear",Ba="linear",ge="srgb",Ts=7680,Dd=519,Ab=512,Cb=513,Rb=514,wp=515,Pb=516,Lb=517,Db=518,Ib=519,Vc=35044,Id="300 es",Mi=2e3,ma=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const We=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gr=Math.PI/180,kc=180/Math.PI;function Xi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(We[n&255]+We[n>>8&255]+We[n>>16&255]+We[n>>24&255]+"-"+We[t&255]+We[t>>8&255]+"-"+We[t>>16&15|64]+We[t>>24&255]+"-"+We[e&63|128]+We[e>>8&255]+"-"+We[e>>16&255]+We[e>>24&255]+We[i&255]+We[i>>8&255]+We[i>>16&255]+We[i>>24&255]).toLowerCase()}function tn(n,t,e){return Math.max(t,Math.min(e,n))}function Ub(n,t){return(n%t+t)%t}function rl(n,t,e){return(1-e)*n+e*t}function Zn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function _e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Nb={DEG2RAD:Gr};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=s[0],g=s[3],h=s[6],w=s[1],L=s[4],S=s[7],j=s[2],B=s[5],O=s[8];return r[0]=o*_+a*w+l*j,r[3]=o*g+a*L+l*B,r[6]=o*h+a*S+l*O,r[1]=c*_+u*w+d*j,r[4]=c*g+u*L+d*B,r[7]=c*h+u*S+d*O,r[2]=f*_+p*w+v*j,r[5]=f*g+p*L+v*B,r[8]=f*h+p*S+v*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,v=e*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ol.makeScale(t,e)),this}rotate(t){return this.premultiply(ol.makeRotation(-t)),this}translate(t,e){return this.premultiply(ol.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ol=new te;function Tp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ob(){const n=ga("canvas");return n.style.display="block",n}const Ud={};function Ir(n){n in Ud||(Ud[n]=!0,console.warn(n))}function Fb(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Bb(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function zb(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(n.r=Ei(n.r),n.g=Ei(n.g),n.b=Ei(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Hi?Ba:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nd=[.64,.33,.3,.6,.15,.06],Od=[.2126,.7152,.0722],Fd=[.3127,.329],Bd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[hr]:{primaries:Nd,whitePoint:Fd,transfer:Ba,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:Nd,whitePoint:Fd,transfer:ge,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}});let As;class Vb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=ga("canvas")),As.width=t.width,As.height=t.height;const i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ga("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ei(e[i]/255)*255):e[i]=Ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kb=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Xi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(al(s[o].image)):r.push(al(s[o]))}else r=al(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function al(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Vb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hb=0;class sn extends Ms{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,i=ps,s=ps,r=In,o=ms,a=Un,l=Ti,c=sn.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=Xi(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fc:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case hc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fc:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case hc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=hp;sn.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(c+1)/2,S=(p+1)/2,j=(h+1)/2,B=(u+f)/4,O=(d+_)/4,I=(v+g)/4;return L>S&&L>j?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=B/i,r=O/i):S>j?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=B/s,r=I/s):j<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(j),i=O/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gb extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new sn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends Gb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cp extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wb extends sn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let g=1-a;const h=l*f+c*p+u*v+d*_,w=h>=0?1:-1,L=1-h*h;if(L>Number.EPSILON){const j=Math.sqrt(L),B=Math.atan2(j,h*w);g=Math.sin(g*B)/j,a=Math.sin(a*B)/j}const S=a*w;if(l=l*g+f*S,c=c*g+p*S,u=u*g+v*S,d=d*g+_*S,g===1-a){const j=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=j,c*=j,u*=j,d*=j}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+u*d+l*p-c*f,t[e+1]=l*v+u*f+c*d-a*p,t[e+2]=c*v+u*p+a*f-l*d,t[e+3]=u*v-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,e=0,i=0){et.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ll.copy(this).projectOnVector(t),this.sub(ll)}reflect(t){return this.sub(ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(tn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ll=new et,Vd=new bs;class so{constructor(t=new et(1/0,1/0,1/0),e=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Rn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Rn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Rn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Rn):Rn.fromBufferAttribute(r,o),Rn.applyMatrix4(t.matrixWorld),this.expandByPoint(Rn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(t.matrixWorld),this.union(vo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Rn),Rn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),xo.subVectors(this.max,Sr),Cs.subVectors(t.a,Sr),Rs.subVectors(t.b,Sr),Ps.subVectors(t.c,Sr),Di.subVectors(Rs,Cs),Ii.subVectors(Ps,Rs),ts.subVectors(Cs,Ps);let e=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-ts.z,ts.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,ts.z,0,-ts.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-ts.y,ts.x,0];return!cl(e,Cs,Rs,Ps,xo)||(e=[1,0,0,0,1,0,0,0,1],!cl(e,Cs,Rs,Ps,xo))?!1:(yo.crossVectors(Di,Ii),e=[yo.x,yo.y,yo.z],cl(e,Cs,Rs,Ps,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Rn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Rn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ai=[new et,new et,new et,new et,new et,new et,new et,new et],Rn=new et,vo=new so,Cs=new et,Rs=new et,Ps=new et,Di=new et,Ii=new et,ts=new et,Sr=new et,xo=new et,yo=new et,es=new et;function cl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $b=new so,Er=new et,ul=new et;class za{constructor(t=new et,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):$b.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Er.subVectors(t,this.center);const e=Er.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Er,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ul.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Er.copy(t.center).add(ul)),this.expandByPoint(Er.copy(t.center).sub(ul))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new et,dl=new et,bo=new et,Ui=new et,fl=new et,Mo=new et,hl=new et;class Va{constructor(t=new et,e=new et(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){dl.copy(t).add(e).multiplyScalar(.5),bo.copy(e).sub(t).normalize(),Ui.copy(this.origin).sub(dl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bo),a=Ui.dot(this.direction),l=-Ui.dot(bo),c=Ui.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(dl).addScaledVector(bo,f),p}intersectSphere(t,e){li.subVectors(t.center,this.origin);const i=li.dot(this.direction),s=li.dot(li)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,i,s,r){fl.subVectors(e,t),Mo.subVectors(i,t),hl.crossVectors(fl,Mo);let o=this.direction.dot(hl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,t);const l=a*this.direction.dot(Mo.crossVectors(Ui,Mo));if(l<0)return null;const c=a*this.direction.dot(fl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(hl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f+_*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=v*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=v*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+v,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xb,t,qb)}lookAt(t,e,i){const s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ni.crossVectors(i,dn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ni.crossVectors(i,dn)),Ni.normalize(),So.crossVectors(dn,Ni),s[0]=Ni.x,s[4]=So.x,s[8]=dn.x,s[1]=Ni.y,s[5]=So.y,s[9]=dn.y,s[2]=Ni.z,s[6]=So.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],g=i[10],h=i[14],w=i[3],L=i[7],S=i[11],j=i[15],B=s[0],O=s[4],I=s[8],M=s[12],E=s[1],T=s[5],ot=s[9],rt=s[13],ct=s[2],vt=s[6],$=s[10],k=s[14],q=s[3],mt=s[7],N=s[11],D=s[15];return r[0]=o*B+a*E+l*ct+c*q,r[4]=o*O+a*T+l*vt+c*mt,r[8]=o*I+a*ot+l*$+c*N,r[12]=o*M+a*rt+l*k+c*D,r[1]=u*B+d*E+f*ct+p*q,r[5]=u*O+d*T+f*vt+p*mt,r[9]=u*I+d*ot+f*$+p*N,r[13]=u*M+d*rt+f*k+p*D,r[2]=v*B+_*E+g*ct+h*q,r[6]=v*O+_*T+g*vt+h*mt,r[10]=v*I+_*ot+g*$+h*N,r[14]=v*M+_*rt+g*k+h*D,r[3]=w*B+L*E+S*ct+j*q,r[7]=w*O+L*T+S*vt+j*mt,r[11]=w*I+L*ot+S*$+j*N,r[15]=w*M+L*rt+S*k+j*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],v=t[3],_=t[7],g=t[11],h=t[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],v=t[12],_=t[13],g=t[14],h=t[15],w=d*g*c-_*f*c+_*l*p-a*g*p-d*l*h+a*f*h,L=v*f*c-u*g*c-v*l*p+o*g*p+u*l*h-o*f*h,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,j=v*d*l-u*_*l-v*a*f+o*_*f+u*a*g-o*d*g,B=e*w+i*L+s*S+r*j;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=w*O,t[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*h-i*f*h)*O,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*h+i*l*h)*O,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*O,t[4]=L*O,t[5]=(u*g*r-v*f*r+v*s*p-e*g*p-u*s*h+e*f*h)*O,t[6]=(v*l*r-o*g*r-v*s*c+e*g*c+o*s*h-e*l*h)*O,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*O,t[8]=S*O,t[9]=(v*d*r-u*_*r-v*i*p+e*_*p+u*i*h-e*d*h)*O,t[10]=(o*_*r-v*a*r+v*i*c-e*_*c-o*i*h+e*a*h)*O,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*O,t[12]=j*O,t[13]=(u*_*s-v*d*s+v*i*f-e*_*f-u*i*g+e*d*g)*O,t[14]=(v*a*s-o*_*s-v*i*l+e*_*l+o*i*g-e*a*g)*O,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,v=r*d,_=o*u,g=o*d,h=a*d,w=l*c,L=l*u,S=l*d,j=i.x,B=i.y,O=i.z;return s[0]=(1-(_+h))*j,s[1]=(p+S)*j,s[2]=(v-L)*j,s[3]=0,s[4]=(p-S)*B,s[5]=(1-(f+h))*B,s[6]=(g+w)*B,s[7]=0,s[8]=(v+L)*O,s[9]=(g-w)*O,s[10]=(1-(f+_))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Pn.copy(this);const c=1/r,u=1/o,d=1/a;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,e.setFromRotationMatrix(Pn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Mi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,v;if(a===Mi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ma)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Mi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u;let v,_;if(a===Mi)v=(o+r)*d,_=-2*d;else if(a===ma)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ls=new et,Pn=new we,Xb=new et(0,0,0),qb=new et(1,1,1),Ni=new et,So=new et,dn=new et,kd=new we,Hd=new bs;class ii{constructor(t=0,e=0,i=0,s=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class yu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jb=0;const Gd=new et,Ds=new bs,ci=new we,Eo=new et,wr=new et,Yb=new et,Kb=new bs,Wd=new et(1,0,0),$d=new et(0,1,0),Xd=new et(0,0,1),qd={type:"added"},Zb={type:"removed"},Is={type:"childadded",child:null},pl={type:"childremoved",child:null};class Ve extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new et,e=new ii,i=new bs,s=new et(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new we},normalMatrix:{value:new te}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Eo.copy(t):Eo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(wr,Eo,this.up):ci.lookAt(Eo,wr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(ci),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zb),pl.child=t,this.dispatchEvent(pl),pl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,t,Yb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wr,Kb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new et(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new et,ui=new et,ml=new et,di=new et,Us=new et,Ns=new et,jd=new et,gl=new et,_l=new et,vl=new et,xl=new Ce,yl=new Ce,bl=new Ce;class pn{constructor(t=new et,e=new et,i=new et){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ln.subVectors(t,e),s.cross(Ln);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Ln.subVectors(s,e),ui.subVectors(i,e),ml.subVectors(t,e);const o=Ln.dot(Ln),a=Ln.dot(ui),l=Ln.dot(ml),c=ui.dot(ui),u=ui.dot(ml),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,di.x),l.addScaledVector(o,di.y),l.addScaledVector(a,di.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return xl.setScalar(0),yl.setScalar(0),bl.setScalar(0),xl.fromBufferAttribute(t,e),yl.fromBufferAttribute(t,i),bl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xl,r.x),o.addScaledVector(yl,r.y),o.addScaledVector(bl,r.z),o}static isFrontFacing(t,e,i,s){return Ln.subVectors(i,e),ui.subVectors(t,e),Ln.cross(ui).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Ln.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return pn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Ns.subVectors(r,i),gl.subVectors(t,i);const l=Us.dot(gl),c=Ns.dot(gl);if(l<=0&&c<=0)return e.copy(i);_l.subVectors(t,s);const u=Us.dot(_l),d=Ns.dot(_l);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Us,o);vl.subVectors(t,r);const p=Us.dot(vl),v=Ns.dot(vl);if(v>=0&&p<=v)return e.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ns,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return jd.subVectors(r,s),a=(d-u)/(d-u+(p-v)),e.copy(s).addScaledVector(jd,a);const h=1/(g+_+f);return o=_*h,a=f*h,e.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=yn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=i,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=oe.workingColorSpace){if(t=Ub(t,1),e=tn(e,0,1),i=tn(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Ml(o,r,t+1/3),this.g=Ml(o,r,t),this.b=Ml(o,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=yn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=yn){const i=Rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yn){return oe.fromWorkingColorSpace($e.copy(this),t),Math.round(tn($e.r*255,0,255))*65536+Math.round(tn($e.g*255,0,255))*256+Math.round(tn($e.b*255,0,255))}getHexString(t=yn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace($e.copy(this),e);const i=$e.r,s=$e.g,r=$e.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=yn){oe.fromWorkingColorSpace($e.copy(this),t);const e=$e.r,i=$e.g,s=$e.b;return t!==yn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(wo);const i=rl(Oi.h,wo.h,e),s=rl(Oi.s,wo.s,e),r=rl(Oi.l,wo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $e=new qt;qt.NAMES=Rp;let Jb=0;class Ss extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jb++}),this.uuid=Xi(),this.name="",this.blending=Js,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=nc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ec&&(i.blendSrc=this.blendSrc),this.blendDst!==nc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pp extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new et,To=new $t;class zn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vc,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)To.fromBufferAttribute(this,e),To.applyMatrix3(t),this.setXY(e,To.x,To.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vc&&(t.usage=this.usage),t}}class Lp extends zn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dp extends zn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class En extends zn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Qb=0;const xn=new we,Sl=new Ve,Os=new et,fn=new so,Tr=new so,Fe=new et;class en extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qb++}),this.uuid=Xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Dp:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new En(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Tr.setFromBufferAttribute(a),this.morphTargetsRelative?(Fe.addVectors(fn.min,Tr.min),fn.expandByPoint(Fe),Fe.addVectors(fn.max,Tr.max),fn.expandByPoint(Fe)):(fn.expandByPoint(Tr.min),fn.expandByPoint(Tr.max))}fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Fe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Fe.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),Fe.add(Os)),s=Math.max(s,i.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new et,l[I]=new et;const c=new et,u=new et,d=new et,f=new $t,p=new $t,v=new $t,_=new et,g=new et;function h(I,M,E){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,E),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const T=1/(p.x*v.y-v.x*p.y);isFinite(T)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(T),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(T),a[I].add(_),a[M].add(_),a[E].add(_),l[I].add(g),l[M].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,M=w.length;I<M;++I){const E=w[I],T=E.start,ot=E.count;for(let rt=T,ct=T+ot;rt<ct;rt+=3)h(t.getX(rt+0),t.getX(rt+1),t.getX(rt+2))}const L=new et,S=new et,j=new et,B=new et;function O(I){j.fromBufferAttribute(s,I),B.copy(j);const M=a[I];L.copy(M),L.sub(j.multiplyScalar(j.dot(M))).normalize(),S.crossVectors(B,M);const T=S.dot(l[I])<0?-1:1;o.setXYZW(I,L.x,L.y,L.z,T)}for(let I=0,M=w.length;I<M;++I){const E=w[I],T=E.start,ot=E.count;for(let rt=T,ct=T+ot;rt<ct;rt+=3)O(t.getX(rt+0)),O(t.getX(rt+1)),O(t.getX(rt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new et,r=new et,o=new et,a=new et,l=new et,c=new et,u=new et,d=new et;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new zn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new we,ns=new Va,Ao=new za,Kd=new et,Co=new et,Ro=new et,Po=new et,El=new et,Lo=new et,Zd=new et,Do=new et;class Nn extends Ve{constructor(t=new en,e=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(El.fromBufferAttribute(d,t),o?Lo.addScaledVector(El,u):Lo.addScaledVector(El.sub(e),u))}e.add(Lo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Ao.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Ao,Kd)===null||ns.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(Yd.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],w=Math.max(g.start,p.start),L=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,j=L;S<j;S+=3){const B=a.getX(S),O=a.getX(S+1),I=a.getX(S+2);s=Io(this,h,t,i,c,u,d,B,O,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const w=a.getX(g),L=a.getX(g+1),S=a.getX(g+2);s=Io(this,o,t,i,c,u,d,w,L,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],w=Math.max(g.start,p.start),L=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,j=L;S<j;S+=3){const B=S,O=S+1,I=S+2;s=Io(this,h,t,i,c,u,d,B,O,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const w=g,L=g+1,S=g+2;s=Io(this,o,t,i,c,u,d,w,L,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function t1(n,t,e,i,s,r,o,a){let l;if(t.side===cn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;Do.copy(a),Do.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Do);return c<e.near||c>e.far?null:{distance:c,point:Do.clone(),object:n}}function Io(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Co),n.getVertexPosition(l,Ro),n.getVertexPosition(c,Po);const u=t1(n,t,e,i,Co,Ro,Po,Zd);if(u){const d=new et;pn.getBarycoord(Zd,Co,Ro,Po,d),s&&(u.uv=pn.getInterpolatedAttribute(s,a,l,c,d,new $t)),r&&(u.uv1=pn.getInterpolatedAttribute(r,a,l,c,d,new $t)),o&&(u.normal=pn.getInterpolatedAttribute(o,a,l,c,d,new et),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new et,materialIndex:0};pn.getNormal(Co,Ro,Po,f.normal),u.face=f,u.barycoord=d}return u}class pr extends en{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new En(c,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(d,2));function v(_,g,h,w,L,S,j,B,O,I,M){const E=S/O,T=j/I,ot=S/2,rt=j/2,ct=B/2,vt=O+1,$=I+1;let k=0,q=0;const mt=new et;for(let N=0;N<$;N++){const D=N*T-rt;for(let dt=0;dt<vt;dt++){const wt=dt*E-ot;mt[_]=wt*w,mt[g]=D*L,mt[h]=ct,c.push(mt.x,mt.y,mt.z),mt[_]=0,mt[g]=0,mt[h]=B>0?1:-1,u.push(mt.x,mt.y,mt.z),d.push(dt/O),d.push(1-N/I),k+=1}}for(let N=0;N<I;N++)for(let D=0;D<O;D++){const dt=f+D+vt*N,wt=f+D+vt*(N+1),Z=f+(D+1)+vt*(N+1),z=f+(D+1)+vt*N;l.push(dt,wt,z),l.push(wt,Z,z),q+=6}a.addGroup(p,q,M),p+=q,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ze(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const s in i)t[s]=i[s]}return t}function e1(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ip(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const n1={clone:ur,merge:Ze};var i1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i1,this.fragmentShader=s1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=e1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Up extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Mi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new et,Jd=new $t,Qd=new $t;class bn extends Up{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=kc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kc*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Bs=1;class r1 extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new bn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);const o=new bn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new bn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new bn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new bn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Np extends sn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class o1 extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Np(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new Ki({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$i});r.uniforms.tEquirect.value=e;const o=new Nn(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=In),new r1(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const wl=new et,a1=new et,l1=new te;class ki{constructor(t=new et(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=wl.subVectors(i,e).cross(a1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(wl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||l1.getNormalMatrix(t),s=this.coplanarPoint(wl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new za,Uo=new et;class bu{constructor(t=new ki,e=new ki,i=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],_=s[10],g=s[11],h=s[12],w=s[13],L=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,g-p,S-h).normalize(),i[1].setComponents(l+r,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+v,S+w).normalize(),i[3].setComponents(l-o,f-u,g-v,S-w).normalize(),i[4].setComponents(l-a,f-d,g-_,S-L).normalize(),e===Mi)i[5].setComponents(l+a,f+d,g+_,S+L).normalize();else if(e===ma)i[5].setComponents(a,d,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Uo.x=s.normal.x>0?t.max.x:t.min.x,Uo.y=s.normal.y>0?t.max.y:t.min.y,Uo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function c1(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class ro extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],v=[],_=[],g=[];for(let h=0;h<u;h++){const w=h*f-o;for(let L=0;L<c;L++){const S=L*d-r;v.push(S,-w,0),_.push(0,0,1),g.push(L/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const L=w+c*h,S=w+c*(h+1),j=w+1+c*(h+1),B=w+1+c*h;p.push(L,S,B),p.push(S,j,B)}this.setIndex(p),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(_,3)),this.setAttribute("uv",new En(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,E1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I1=`#define PI 3.141592653589793
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
} // validated`,U1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",k1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
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
}`,J1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eM=`uniform bool receiveShadow;
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
#endif`,nM=`#ifdef USE_ENVMAP
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
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
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
#endif`,lM=`struct PhysicalMaterial {
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
}`,cM=`
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
#endif`,uM=`#if defined( RE_IndirectDiffuse )
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
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xM=`#if defined( USE_POINTS_UV )
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
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
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
#endif`,TM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
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
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$M=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
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
#endif`,QM=`float specularStrength;
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
}`,ee={alphahash_fragment:u1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:_1,batching_pars_vertex:v1,batching_vertex:x1,begin_vertex:y1,beginnormal_vertex:b1,bsdfs:M1,iridescence_fragment:S1,bumpmap_pars_fragment:E1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:R1,color_pars_fragment:P1,color_pars_vertex:L1,color_vertex:D1,common:I1,cube_uv_reflection_fragment:U1,defaultnormal_vertex:N1,displacementmap_pars_vertex:O1,displacementmap_vertex:F1,emissivemap_fragment:B1,emissivemap_pars_fragment:z1,colorspace_fragment:V1,colorspace_pars_fragment:k1,envmap_fragment:H1,envmap_common_pars_fragment:G1,envmap_pars_fragment:W1,envmap_pars_vertex:$1,envmap_physical_pars_fragment:nM,envmap_vertex:X1,fog_vertex:q1,fog_pars_vertex:j1,fog_fragment:Y1,fog_pars_fragment:K1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:J1,lights_lambert_fragment:Q1,lights_lambert_pars_fragment:tM,lights_pars_begin:eM,lights_toon_fragment:iM,lights_toon_pars_fragment:sM,lights_phong_fragment:rM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:dM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:_M,map_particle_fragment:vM,map_particle_pars_fragment:xM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:bM,morphinstance_vertex:MM,morphcolor_vertex:SM,morphnormal_vertex:EM,morphtarget_pars_vertex:wM,morphtarget_vertex:TM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:PM,normal_vertex:LM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:OM,opaque_fragment:FM,packing:BM,premultiplied_alpha_fragment:zM,project_vertex:VM,dithering_fragment:kM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:$M,shadowmap_pars_vertex:XM,shadowmap_vertex:qM,shadowmask_pars_fragment:jM,skinbase_vertex:YM,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:tS,tonemapping_fragment:eS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:sS,uv_pars_fragment:rS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:_S,distanceRGBA_frag:vS,equirect_vert:xS,equirect_frag:yS,linedashed_vert:bS,linedashed_frag:MS,meshbasic_vert:SS,meshbasic_frag:ES,meshlambert_vert:wS,meshlambert_frag:TS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:PS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:IS,meshphysical_frag:US,meshtoon_vert:NS,meshtoon_frag:OS,points_vert:FS,points_frag:BS,shadow_vert:zS,shadow_frag:VS,sprite_vert:kS,sprite_frag:HS},Lt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Yn={basic:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ze([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ze([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ze([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ze([Lt.points,Lt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ze([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ze([Lt.common,Lt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ze([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ze([Lt.sprite,Lt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ze([Lt.common,Lt.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ze([Lt.lights,Lt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};Yn.physical={uniforms:Ze([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const No={r:0,b:0,g:0},ss=new ii,GS=new we;function WS(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function v(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?e:t).get(L)),L}function _(w){let L=!1;const S=v(w);S===null?h(a,l):S&&S.isColor&&(h(S,1),L=!0);const j=n.xr.getEnvironmentBlendMode();j==="additive"?i.buffers.color.setClear(0,0,0,1,o):j==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,L){const S=v(L);S&&(S.isCubeTexture||S.mapping===Fa)?(u===void 0&&(u=new Nn(new pr(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:ur(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(j,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(L.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(ss)),u.material.toneMapped=oe.getTransfer(S.colorSpace)!==ge,(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nn(new ro(2,2),new Ki({name:"BackgroundMaterial",uniforms:ur(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=oe.getTransfer(S.colorSpace)!==ge,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,L){w.getRGB(No,Ip(n)),i.buffers.color.setClear(No.r,No.g,No.b,L,o)}return{getClearColor:function(){return a},setClearColor:function(w,L=1){a.set(w),l=L,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:_,addToRenderList:g}}function $S(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,T,ot,rt,ct){let vt=!1;const $=d(rt,ot,T);r!==$&&(r=$,c(r.object)),vt=p(E,rt,ot,ct),vt&&v(E,rt,ot,ct),ct!==null&&t.update(ct,n.ELEMENT_ARRAY_BUFFER),(vt||o)&&(o=!1,S(E,T,ot,rt),ct!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,T,ot){const rt=ot.wireframe===!0;let ct=i[E.id];ct===void 0&&(ct={},i[E.id]=ct);let vt=ct[T.id];vt===void 0&&(vt={},ct[T.id]=vt);let $=vt[rt];return $===void 0&&($=f(l()),vt[rt]=$),$}function f(E){const T=[],ot=[],rt=[];for(let ct=0;ct<e;ct++)T[ct]=0,ot[ct]=0,rt[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:ot,attributeDivisors:rt,object:E,attributes:{},index:null}}function p(E,T,ot,rt){const ct=r.attributes,vt=T.attributes;let $=0;const k=ot.getAttributes();for(const q in k)if(k[q].location>=0){const N=ct[q];let D=vt[q];if(D===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(D=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(D=E.instanceColor)),N===void 0||N.attribute!==D||D&&N.data!==D.data)return!0;$++}return r.attributesNum!==$||r.index!==rt}function v(E,T,ot,rt){const ct={},vt=T.attributes;let $=0;const k=ot.getAttributes();for(const q in k)if(k[q].location>=0){let N=vt[q];N===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(N=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(N=E.instanceColor));const D={};D.attribute=N,N&&N.data&&(D.data=N.data),ct[q]=D,$++}r.attributes=ct,r.attributesNum=$,r.index=rt}function _(){const E=r.newAttributes;for(let T=0,ot=E.length;T<ot;T++)E[T]=0}function g(E){h(E,0)}function h(E,T){const ot=r.newAttributes,rt=r.enabledAttributes,ct=r.attributeDivisors;ot[E]=1,rt[E]===0&&(n.enableVertexAttribArray(E),rt[E]=1),ct[E]!==T&&(n.vertexAttribDivisor(E,T),ct[E]=T)}function w(){const E=r.newAttributes,T=r.enabledAttributes;for(let ot=0,rt=T.length;ot<rt;ot++)T[ot]!==E[ot]&&(n.disableVertexAttribArray(ot),T[ot]=0)}function L(E,T,ot,rt,ct,vt,$){$===!0?n.vertexAttribIPointer(E,T,ot,ct,vt):n.vertexAttribPointer(E,T,ot,rt,ct,vt)}function S(E,T,ot,rt){_();const ct=rt.attributes,vt=ot.getAttributes(),$=T.defaultAttributeValues;for(const k in vt){const q=vt[k];if(q.location>=0){let mt=ct[k];if(mt===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(mt=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(mt=E.instanceColor)),mt!==void 0){const N=mt.normalized,D=mt.itemSize,dt=t.get(mt);if(dt===void 0)continue;const wt=dt.buffer,Z=dt.type,z=dt.bytesPerElement,F=Z===n.INT||Z===n.UNSIGNED_INT||mt.gpuType===pu;if(mt.isInterleavedBufferAttribute){const U=mt.data,V=U.stride,K=mt.offset;if(U.isInstancedInterleavedBuffer){for(let ut=0;ut<q.locationSize;ut++)h(q.location+ut,U.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ut=0;ut<q.locationSize;ut++)g(q.location+ut);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let ut=0;ut<q.locationSize;ut++)L(q.location+ut,D/q.locationSize,Z,N,V*z,(K+D/q.locationSize*ut)*z,F)}else{if(mt.isInstancedBufferAttribute){for(let U=0;U<q.locationSize;U++)h(q.location+U,mt.meshPerAttribute);E.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let U=0;U<q.locationSize;U++)g(q.location+U);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let U=0;U<q.locationSize;U++)L(q.location+U,D/q.locationSize,Z,N,D*z,D/q.locationSize*U*z,F)}}else if($!==void 0){const N=$[k];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(q.location,N);break;case 3:n.vertexAttrib3fv(q.location,N);break;case 4:n.vertexAttrib4fv(q.location,N);break;default:n.vertexAttrib1fv(q.location,N)}}}}w()}function j(){I();for(const E in i){const T=i[E];for(const ot in T){const rt=T[ot];for(const ct in rt)u(rt[ct].object),delete rt[ct];delete T[ot]}delete i[E]}}function B(E){if(i[E.id]===void 0)return;const T=i[E.id];for(const ot in T){const rt=T[ot];for(const ct in rt)u(rt[ct].object),delete rt[ct];delete T[ot]}delete i[E.id]}function O(E){for(const T in i){const ot=i[T];if(ot[E.id]===void 0)continue;const rt=ot[E.id];for(const ct in rt)u(rt[ct].object),delete rt[ct];delete ot[E.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:j,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function XS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qS(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Un&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const I=O===io&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==Ti&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==bi&&!I)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),j=v>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:S,vertexTextures:j,maxSamples:B}}function jS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new ki,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const w=r?0:i,L=w*4;let S=h.clippingState||null;l.value=S,S=u(v,f,L,p);for(let j=0;j!==L;++j)S[j]=e[j];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const h=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<h)&&(g=new Float32Array(h));for(let L=0,S=p;L!==_;++L,S+=4)o.copy(d[L]).applyMatrix4(w,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function YS(n){let t=new WeakMap;function e(o,a){return a===uc?o.mapping=or:a===dc&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uc||a===dc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new o1(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Fp extends Up{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,tf=[.125,.215,.35,.446,.526,.582],us=20,Tl=new Fp,ef=new qt;let Al=null,Cl=0,Rl=0,Pl=!1;const as=(1+Math.sqrt(5))/2,zs=1/as,nf=[new et(-as,zs,0),new et(as,zs,0),new et(-zs,0,as),new et(zs,0,as),new et(0,as,-zs),new et(0,as,zs),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Al,Cl,Rl),this._renderer.xr.enabled=Pl,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Al=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Rl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:io,format:Un,colorSpace:hr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=KS(r)),this._blurMaterial=ZS(r,t,e)}return s}_compileMaterial(t){const e=new Nn(this._lodPlanes[0],t);this._renderer.compile(e,Tl)}_sceneToCubeUV(t,e,i,s){const a=new bn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ef),u.toneMapping=Si,u.autoClear=!1;const p=new Pp({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),v=new Nn(new pr,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(ef),_=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const L=this._cubeSize;Oo(s,w*L,h>2?L:0,L,L),u.setRenderTarget(s),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Nn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Oo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Tl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Nn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),_=r/v,g=isFinite(r)?1+Math.floor(u*_):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const h=[];let w=0;for(let O=0;O<us;++O){const I=O/_,M=Math.exp(-I*I/2);h.push(M),O===0?w+=M:O<g&&(w+=2*M)}for(let O=0;O<h.length;O++)h[O]=h[O]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:L}=this;f.dTheta.value=v,f.mipInt.value=L-i;const S=this._sizeLods[s],j=3*S*(s>L-qs?s-L+qs:0),B=4*(this._cubeSize-S);Oo(e,j,B,3*S,2*S),l.setRenderTarget(e),l.render(d,Tl)}}function KS(n){const t=[],e=[],i=[];let s=n;const r=n-qs+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qs?l=tf[o-n+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,g=2,h=1,w=new Float32Array(_*v*p),L=new Float32Array(g*v*p),S=new Float32Array(h*v*p);for(let B=0;B<p;B++){const O=B%3*2/3-1,I=B>2?0:-1,M=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];w.set(M,_*v*B),L.set(f,g*v*B);const E=[B,B,B,B,B,B];S.set(E,h*v*B)}const j=new en;j.setAttribute("position",new zn(w,_)),j.setAttribute("uv",new zn(L,g)),j.setAttribute("faceIndex",new zn(S,h)),t.push(j),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){const i=new ys(n,t,e);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Oo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ZS(n,t,e){const i=new Float32Array(us),s=new et(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mu(),fragmentShader:`

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
	`}function JS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uc||l===dc,u=l===or||l===ar;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function QS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ir("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function tE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,h=_.length;g<h;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let g=0,h=_.length;g<h;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let L=0,S=w.length;L<S;L+=3){const j=w[L+0],B=w[L+1],O=w[L+2];f.push(j,B,B,O,O,j)}}else if(v!==void 0){const w=v.array;_=v.version;for(let L=0,S=w.length/3-1;L<S;L+=3){const j=L+0,B=L+1,O=L+2;f.push(j,B,B,O,O,j)}}else return;const g=new(Tp(f)?Dp:Lp)(f,1);g.version=_;const h=r.get(d);h&&t.remove(h),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,f*o,v),e.update(p,i,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];e.update(g,i,1)}function d(f,p,v,_){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,v);let h=0;for(let w=0;w<v;w++)h+=p[w]*_[w];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function nE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function iE(n,t,e){const i=new WeakMap,s=new Ce;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],L=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let j=a.attributes.position.count*S,B=1;j>t.maxTextureSize&&(B=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const O=new Float32Array(j*B*4*d),I=new Cp(O,j,B,d);I.type=bi,I.needsUpdate=!0;const M=S*4;for(let T=0;T<d;T++){const ot=h[T],rt=w[T],ct=L[T],vt=j*B*4*T;for(let $=0;$<ot.count;$++){const k=$*M;v===!0&&(s.fromBufferAttribute(ot,$),O[vt+k+0]=s.x,O[vt+k+1]=s.y,O[vt+k+2]=s.z,O[vt+k+3]=0),_===!0&&(s.fromBufferAttribute(rt,$),O[vt+k+4]=s.x,O[vt+k+5]=s.y,O[vt+k+6]=s.z,O[vt+k+7]=0),g===!0&&(s.fromBufferAttribute(ct,$),O[vt+k+8]=s.x,O[vt+k+9]=s.y,O[vt+k+10]=s.z,O[vt+k+11]=ct.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new $t(j,B)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function sE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bp extends sn{constructor(t,e,i,s,r,o,a,l,c,u=Qs){if(u!==Qs&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=xs),i===void 0&&u===cr&&(i=lr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zp=new sn,lf=new Bp(1,1),Vp=new Cp,kp=new Wb,Hp=new Np,cf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ne(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Oe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ka(n,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2fv(this.addr,t),Oe(e,t)}}function aE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;n.uniform3fv(this.addr,t),Oe(e,t)}}function lE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4fv(this.addr,t),Oe(e,t)}}function cE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Oe(e,i)}}function uE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Oe(e,i)}}function dE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ne(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Ne(e,i))return;df.set(i),n.uniformMatrix4fv(this.addr,!1,df),Oe(e,i)}}function fE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2iv(this.addr,t),Oe(e,t)}}function pE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3iv(this.addr,t),Oe(e,t)}}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4iv(this.addr,t),Oe(e,t)}}function gE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function _E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;n.uniform2uiv(this.addr,t),Oe(e,t)}}function vE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;n.uniform3uiv(this.addr,t),Oe(e,t)}}function xE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;n.uniform4uiv(this.addr,t),Oe(e,t)}}function yE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=wp,r=lf):r=zp,e.setTexture2D(t||r,s)}function bE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kp,s)}function ME(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hp,s)}function SE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function EE(n){switch(n){case 5126:return rE;case 35664:return oE;case 35665:return aE;case 35666:return lE;case 35674:return cE;case 35675:return uE;case 35676:return dE;case 5124:case 35670:return fE;case 35667:case 35671:return hE;case 35668:case 35672:return pE;case 35669:case 35673:return mE;case 5125:return gE;case 36294:return _E;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return ME;case 36289:case 36303:case 36311:case 36292:return SE}}function wE(n,t){n.uniform1fv(this.addr,t)}function TE(n,t){const e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function AE(n,t){const e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function CE(n,t){const e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function RE(n,t){const e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function PE(n,t){const e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function LE(n,t){const e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function DE(n,t){n.uniform1iv(this.addr,t)}function IE(n,t){n.uniform2iv(this.addr,t)}function UE(n,t){n.uniform3iv(this.addr,t)}function NE(n,t){n.uniform4iv(this.addr,t)}function OE(n,t){n.uniform1uiv(this.addr,t)}function FE(n,t){n.uniform2uiv(this.addr,t)}function BE(n,t){n.uniform3uiv(this.addr,t)}function zE(n,t){n.uniform4uiv(this.addr,t)}function VE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zp,r[o])}function kE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kp,r[o])}function HE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hp,r[o])}function GE(n,t,e){const i=this.cache,s=t.length,r=ka(e,s);Ne(i,r)||(n.uniform1iv(this.addr,r),Oe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function WE(n){switch(n){case 5126:return wE;case 35664:return TE;case 35665:return AE;case 35666:return CE;case 35674:return RE;case 35675:return PE;case 35676:return LE;case 5124:case 35670:return DE;case 35667:case 35671:return IE;case 35668:case 35672:return UE;case 35669:case 35673:return NE;case 5125:return OE;case 36294:return FE;case 36295:return BE;case 36296:return zE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return HE;case 36289:case 36303:case 36311:case 36292:return GE}}class $E{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=EE(e.type)}}class XE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WE(e.type)}}class qE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function jE(n,t,e){const i=n.name,s=i.length;for(Ll.lastIndex=0;;){const r=Ll.exec(i),o=Ll.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pf(e,c===void 0?new $E(a,n,t):new XE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new qE(a),pf(e,d)),e=d}}}class ia{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);jE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const YE=37297;let KE=0;function ZE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gf=new te;function JE(n){oe._getMatrix(gf,oe.workingColorSpace,n);const t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(n)){case Ba:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _f(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ZE(n.getShaderSource(t),o)}else return s}function QE(n,t){const e=JE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tw(n,t){let e;switch(t){case gb:e="Linear";break;case _b:e="Reinhard";break;case vb:e="Cineon";break;case xb:e="ACESFilmic";break;case bb:e="AgX";break;case Mb:e="Neutral";break;case yb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fo=new et;function ew(){oe.getLuminanceCoefficients(Fo);const n=Fo.x.toFixed(4),t=Fo.y.toFixed(4),e=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ur).join(`
`)}function iw(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function sw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ur(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(n){return n.replace(rw,aw)}const ow=new Map;function aw(n,t){let e=ee[t];if(e===void 0){const i=ow.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Hc(e)}const lw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(lw,cw)}function cw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function uw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Yy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===fi&&(t="SHADOWMAP_TYPE_VSM"),t}function dw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Fa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function hw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:t="ENVMAP_BLENDING_MULTIPLY";break;case pb:t="ENVMAP_BLENDING_MIX";break;case mb:t="ENVMAP_BLENDING_ADD";break}return t}function pw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function mw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=uw(e),c=dw(e),u=fw(e),d=hw(e),f=pw(e),p=nw(e),v=iw(r),_=s.createProgram();let g,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ur).join(`
`),h.length>0&&(h+=`
`)):(g=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ur).join(`
`),h=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Si?"#define TONE_MAPPING":"",e.toneMapping!==Si?ee.tonemapping_pars_fragment:"",e.toneMapping!==Si?tw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,QE("linearToOutputTexel",e.outputColorSpace),ew(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ur).join(`
`)),o=Hc(o),o=vf(o,e),o=xf(o,e),a=Hc(a),a=vf(a,e),a=xf(a,e),o=yf(o),a=yf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const L=w+g+o,S=w+h+a,j=mf(s,s.VERTEX_SHADER,L),B=mf(s,s.FRAGMENT_SHADER,S);s.attachShader(_,j),s.attachShader(_,B),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function O(T){if(n.debug.checkShaderErrors){const ot=s.getProgramInfoLog(_).trim(),rt=s.getShaderInfoLog(j).trim(),ct=s.getShaderInfoLog(B).trim();let vt=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(vt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,j,B);else{const k=_f(s,j,"vertex"),q=_f(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+ot+`
`+k+`
`+q)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(rt===""||ct==="")&&($=!1);$&&(T.diagnostics={runnable:vt,programLog:ot,vertexShader:{log:rt,prefix:g},fragmentShader:{log:ct,prefix:h}})}s.deleteShader(j),s.deleteShader(B),I=new ia(s,_),M=sw(s,_)}let I;this.getUniforms=function(){return I===void 0&&O(this),I};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,YE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=KE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=j,this.fragmentShader=B,this}let gw=0;class _w{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new vw(t),e.set(t,i)),i}}class vw{constructor(t){this.id=gw++,this.code=t,this.usedTimes=0}}function xw(n,t,e,i,s,r,o){const a=new yu,l=new _w,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,T,ot,rt){const ct=ot.fog,vt=rt.geometry,$=M.isMeshStandardMaterial?ot.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||$),q=k&&k.mapping===Fa?k.image.height:null,mt=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const N=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,D=N!==void 0?N.length:0;let dt=0;vt.morphAttributes.position!==void 0&&(dt=1),vt.morphAttributes.normal!==void 0&&(dt=2),vt.morphAttributes.color!==void 0&&(dt=3);let wt,Z,z,F;if(mt){const ae=Yn[mt];wt=ae.vertexShader,Z=ae.fragmentShader}else wt=M.vertexShader,Z=M.fragmentShader,l.update(M),z=l.getVertexShaderID(M),F=l.getFragmentShaderID(M);const U=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),K=rt.isInstancedMesh===!0,ut=rt.isBatchedMesh===!0,y=!!M.map,R=!!M.matcap,H=!!k,b=!!M.aoMap,it=!!M.lightMap,nt=!!M.bumpMap,at=!!M.normalMap,lt=!!M.displacementMap,bt=!!M.emissiveMap,tt=!!M.metalnessMap,A=!!M.roughnessMap,x=M.anisotropy>0,G=M.clearcoat>0,st=M.dispersion>0,ht=M.iridescence>0,W=M.sheen>0,P=M.transmission>0,Y=x&&!!M.anisotropyMap,_t=G&&!!M.clearcoatMap,yt=G&&!!M.clearcoatNormalMap,St=G&&!!M.clearcoatRoughnessMap,Tt=ht&&!!M.iridescenceMap,Bt=ht&&!!M.iridescenceThicknessMap,Nt=W&&!!M.sheenColorMap,Ct=W&&!!M.sheenRoughnessMap,Jt=!!M.specularMap,Gt=!!M.specularColorMap,ie=!!M.specularIntensityMap,X=P&&!!M.transmissionMap,Rt=P&&!!M.thicknessMap,gt=!!M.gradientMap,Mt=!!M.alphaMap,Pt=M.alphaTest>0,Et=!!M.alphaHash,Ft=!!M.extensions;let se=Si;M.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(se=n.toneMapping);const ke={shaderID:mt,shaderType:M.type,shaderName:M.name,vertexShader:wt,fragmentShader:Z,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:F,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ut,batchingColor:ut&&rt._colorsTexture!==null,instancing:K,instancingColor:K&&rt.instanceColor!==null,instancingMorph:K&&rt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:hr,alphaToCoverage:!!M.alphaToCoverage,map:y,matcap:R,envMap:H,envMapMode:H&&k.mapping,envMapCubeUVHeight:q,aoMap:b,lightMap:it,bumpMap:nt,normalMap:at,displacementMap:f&&lt,emissiveMap:bt,normalMapObjectSpace:at&&M.normalMapType===Tb,normalMapTangentSpace:at&&M.normalMapType===Ep,metalnessMap:tt,roughnessMap:A,anisotropy:x,anisotropyMap:Y,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:yt,clearcoatRoughnessMap:St,dispersion:st,iridescence:ht,iridescenceMap:Tt,iridescenceThicknessMap:Bt,sheen:W,sheenColorMap:Nt,sheenRoughnessMap:Ct,specularMap:Jt,specularColorMap:Gt,specularIntensityMap:ie,transmission:P,transmissionMap:X,thicknessMap:Rt,gradientMap:gt,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:Mt,alphaTest:Pt,alphaHash:Et,combine:M.combine,mapUv:y&&_(M.map.channel),aoMapUv:b&&_(M.aoMap.channel),lightMapUv:it&&_(M.lightMap.channel),bumpMapUv:nt&&_(M.bumpMap.channel),normalMapUv:at&&_(M.normalMap.channel),displacementMapUv:lt&&_(M.displacementMap.channel),emissiveMapUv:bt&&_(M.emissiveMap.channel),metalnessMapUv:tt&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:Y&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:yt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:Jt&&_(M.specularMap.channel),specularColorMapUv:Gt&&_(M.specularColorMap.channel),specularIntensityMapUv:ie&&_(M.specularIntensityMap.channel),transmissionMapUv:X&&_(M.transmissionMap.channel),thicknessMapUv:Rt&&_(M.thicknessMap.channel),alphaMapUv:Mt&&_(M.alphaMap.channel),vertexTangents:!!vt.attributes.tangent&&(at||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!vt.attributes.uv&&(y||Mt),fog:!!ct,useFog:M.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:V,skinning:rt.isSkinnedMesh===!0,morphTargets:vt.morphAttributes.position!==void 0,morphNormals:vt.morphAttributes.normal!==void 0,morphColors:vt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&T.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:y&&M.map.isVideoTexture===!0&&oe.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&oe.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xi,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ft&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&M.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const T in M.defines)E.push(T),E.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(w(E,M),L(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function w(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function L(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=v[M.type];let T;if(E){const ot=Yn[E];T=n1.clone(ot.uniforms)}else T=M.uniforms;return T}function j(M,E){let T;for(let ot=0,rt=u.length;ot<rt;ot++){const ct=u[ot];if(ct.cacheKey===E){T=ct,++T.usedTimes;break}}return T===void 0&&(T=new mw(n,E,M,r),u.push(T)),T}function B(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function O(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:j,releaseProgram:B,releaseShaderCache:O,programs:u,dispose:I}}function yw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function bw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,v,_,g){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=g),t++,h}function a(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||bw),i.length>1&&i.sort(f||Mf),s.length>1&&s.sort(f||Mf)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Mw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sf,n.set(i,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Sw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new et,color:new qt};break;case"SpotLight":e={position:new et,direction:new et,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new et,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new et,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new et,halfWidth:new et,halfHeight:new et};break}return n[t.id]=e,e}}}function Ew(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let ww=0;function Tw(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Aw(n){const t=new Sw,e=Ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new et);const s=new et,r=new we,o=new we;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,g=0,h=0,w=0,L=0,S=0,j=0,B=0,O=0;c.sort(Tw);for(let M=0,E=c.length;M<E;M++){const T=c[M],ot=T.color,rt=T.intensity,ct=T.distance,vt=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=ot.r*rt,d+=ot.g*rt,f+=ot.b*rt;else if(T.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(T.sh.coefficients[$],rt);O++}else if(T.isDirectionalLight){const $=t.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const k=T.shadow,q=e.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=vt,i.directionalShadowMatrix[p]=T.shadow.matrix,w++}i.directional[p]=$,p++}else if(T.isSpotLight){const $=t.get(T);$.position.setFromMatrixPosition(T.matrixWorld),$.color.copy(ot).multiplyScalar(rt),$.distance=ct,$.coneCos=Math.cos(T.angle),$.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),$.decay=T.decay,i.spot[_]=$;const k=T.shadow;if(T.map&&(i.spotLightMap[j]=T.map,j++,k.updateMatrices(T),T.castShadow&&B++),i.spotLightMatrix[_]=k.matrix,T.castShadow){const q=e.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=vt,S++}_++}else if(T.isRectAreaLight){const $=t.get(T);$.color.copy(ot).multiplyScalar(rt),$.halfWidth.set(T.width*.5,0,0),$.halfHeight.set(0,T.height*.5,0),i.rectArea[g]=$,g++}else if(T.isPointLight){const $=t.get(T);if($.color.copy(T.color).multiplyScalar(T.intensity),$.distance=T.distance,$.decay=T.decay,T.castShadow){const k=T.shadow,q=e.get(T);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=vt,i.pointShadowMatrix[v]=T.shadow.matrix,L++}i.point[v]=$,v++}else if(T.isHemisphereLight){const $=t.get(T);$.skyColor.copy(T.color).multiplyScalar(rt),$.groundColor.copy(T.groundColor).multiplyScalar(rt),i.hemi[h]=$,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==h||I.numDirectionalShadows!==w||I.numPointShadows!==L||I.numSpotShadows!==S||I.numSpotMaps!==j||I.numLightProbes!==O)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=S+j-B,i.spotLightMap.length=j,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=O,I.directionalLength=p,I.pointLength=v,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=h,I.numDirectionalShadows=w,I.numPointShadows=L,I.numSpotShadows=S,I.numSpotMaps=j,I.numLightProbes=O,i.version=ww++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const g=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const L=c[h];if(L.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(L.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(L.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(L.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(L.width*.5,0,0),S.halfHeight.set(0,L.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(L.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),f++}else if(L.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(L.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ef(n){const t=new Aw(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(n),t.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Rw extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pw extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lw=`void main() {
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
}`;function Iw(n,t,e){let i=new bu;const s=new $t,r=new $t,o=new Ce,a=new Rw({depthPacking:wb}),l=new Pw,c={},u=e.maxTextureSize,d={[Yi]:cn,[cn]:Yi,[xi]:xi},f=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Lw,fragmentShader:Dw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new en;v.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let h=this.type;this.render=function(B,O,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||B.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),ot=n.state;ot.setBlending($i),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const rt=h!==fi&&this.type===fi,ct=h===fi&&this.type!==fi;for(let vt=0,$=B.length;vt<$;vt++){const k=B[vt],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const mt=q.getFrameExtents();if(s.multiply(mt),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/mt.x),s.x=r.x*mt.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/mt.y),s.y=r.y*mt.y,q.mapSize.y=r.y)),q.map===null||rt===!0||ct===!0){const D=this.type!==fi?{minFilter:Bn,magFilter:Bn}:{};q.map!==null&&q.map.dispose(),q.map=new ys(s.x,s.y,D),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const N=q.getViewportCount();for(let D=0;D<N;D++){const dt=q.getViewport(D);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),ot.viewport(o),q.updateMatrices(k,D),i=q.getFrustum(),S(O,I,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===fi&&w(q,I),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(M,E,T)};function w(B,O){const I=t.update(_);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,p.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(O,null,I,f,_,null),p.uniforms.shadow_pass.value=B.mapPass.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(O,null,I,p,_,null)}function L(B,O,I,M){let E=null;const T=I.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(T!==void 0)E=T;else if(E=I.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const ot=E.uuid,rt=O.uuid;let ct=c[ot];ct===void 0&&(ct={},c[ot]=ct);let vt=ct[rt];vt===void 0&&(vt=E.clone(),ct[rt]=vt,O.addEventListener("dispose",j)),E=vt}if(E.visible=O.visible,E.wireframe=O.wireframe,M===fi?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:d[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const ot=n.properties.get(E);ot.light=I}return E}function S(B,O,I,M,E){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&E===fi)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,B.matrixWorld);const rt=t.update(B),ct=B.material;if(Array.isArray(ct)){const vt=rt.groups;for(let $=0,k=vt.length;$<k;$++){const q=vt[$],mt=ct[q.materialIndex];if(mt&&mt.visible){const N=L(B,mt,M,E);B.onBeforeShadow(n,B,O,I,rt,N,q),n.renderBufferDirect(I,null,rt,N,B,q),B.onAfterShadow(n,B,O,I,rt,N,q)}}}else if(ct.visible){const vt=L(B,ct,M,E);B.onBeforeShadow(n,B,O,I,rt,vt,null),n.renderBufferDirect(I,null,rt,vt,B,null),B.onAfterShadow(n,B,O,I,rt,vt,null)}}const ot=B.children;for(let rt=0,ct=ot.length;rt<ct;rt++)S(ot[rt],O,I,M,E)}function j(B){B.target.removeEventListener("dispose",j);for(const I in c){const M=c[I],E=B.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const Uw={[ic]:sc,[rc]:lc,[oc]:cc,[rr]:ac,[sc]:ic,[lc]:rc,[cc]:oc,[ac]:rr};function Nw(n,t){function e(){let X=!1;const Rt=new Ce;let gt=null;const Mt=new Ce(0,0,0,0);return{setMask:function(Pt){gt!==Pt&&!X&&(n.colorMask(Pt,Pt,Pt,Pt),gt=Pt)},setLocked:function(Pt){X=Pt},setClear:function(Pt,Et,Ft,se,ke){ke===!0&&(Pt*=se,Et*=se,Ft*=se),Rt.set(Pt,Et,Ft,se),Mt.equals(Rt)===!1&&(n.clearColor(Pt,Et,Ft,se),Mt.copy(Rt))},reset:function(){X=!1,gt=null,Mt.set(-1,0,0,0)}}}function i(){let X=!1,Rt=!1,gt=null,Mt=null,Pt=null;return{setReversed:function(Et){if(Rt!==Et){const Ft=t.get("EXT_clip_control");Rt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const se=Pt;Pt=null,this.setClear(se)}Rt=Et},getReversed:function(){return Rt},setTest:function(Et){Et?U(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(Et){gt!==Et&&!X&&(n.depthMask(Et),gt=Et)},setFunc:function(Et){if(Rt&&(Et=Uw[Et]),Mt!==Et){switch(Et){case ic:n.depthFunc(n.NEVER);break;case sc:n.depthFunc(n.ALWAYS);break;case rc:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case oc:n.depthFunc(n.EQUAL);break;case ac:n.depthFunc(n.GEQUAL);break;case lc:n.depthFunc(n.GREATER);break;case cc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Et}},setLocked:function(Et){X=Et},setClear:function(Et){Pt!==Et&&(Rt&&(Et=1-Et),n.clearDepth(Et),Pt=Et)},reset:function(){X=!1,gt=null,Mt=null,Pt=null,Rt=!1}}}function s(){let X=!1,Rt=null,gt=null,Mt=null,Pt=null,Et=null,Ft=null,se=null,ke=null;return{setTest:function(ae){X||(ae?U(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(ae){Rt!==ae&&!X&&(n.stencilMask(ae),Rt=ae)},setFunc:function(ae,ne,An){(gt!==ae||Mt!==ne||Pt!==An)&&(n.stencilFunc(ae,ne,An),gt=ae,Mt=ne,Pt=An)},setOp:function(ae,ne,An){(Et!==ae||Ft!==ne||se!==An)&&(n.stencilOp(ae,ne,An),Et=ae,Ft=ne,se=An)},setLocked:function(ae){X=ae},setClear:function(ae){ke!==ae&&(n.clearStencil(ae),ke=ae)},reset:function(){X=!1,Rt=null,gt=null,Mt=null,Pt=null,Et=null,Ft=null,se=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,w=null,L=null,S=null,j=null,B=null,O=new qt(0,0,0),I=0,M=!1,E=null,T=null,ot=null,rt=null,ct=null;const vt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,k=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),$=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),$=k>=2);let mt=null,N={};const D=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),wt=new Ce().fromArray(D),Z=new Ce().fromArray(dt);function z(X,Rt,gt,Mt){const Pt=new Uint8Array(4),Et=n.createTexture();n.bindTexture(X,Et),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<gt;Ft++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Rt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Rt+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return Et}const F={};F[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),F[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),F[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),F[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(rr),nt(!1),at(Cd),U(n.CULL_FACE),b($i);function U(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function V(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function K(X,Rt){return d[X]!==Rt?(n.bindFramebuffer(X,Rt),d[X]=Rt,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Rt),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Rt),!0):!1}function ut(X,Rt){let gt=p,Mt=!1;if(X){gt=f.get(Rt),gt===void 0&&(gt=[],f.set(Rt,gt));const Pt=X.textures;if(gt.length!==Pt.length||gt[0]!==n.COLOR_ATTACHMENT0){for(let Et=0,Ft=Pt.length;Et<Ft;Et++)gt[Et]=n.COLOR_ATTACHMENT0+Et;gt.length=Pt.length,Mt=!0}}else gt[0]!==n.BACK&&(gt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(gt)}function y(X){return v!==X?(n.useProgram(X),v=X,!0):!1}const R={[cs]:n.FUNC_ADD,[Zy]:n.FUNC_SUBTRACT,[Jy]:n.FUNC_REVERSE_SUBTRACT};R[Qy]=n.MIN,R[tb]=n.MAX;const H={[eb]:n.ZERO,[nb]:n.ONE,[ib]:n.SRC_COLOR,[ec]:n.SRC_ALPHA,[cb]:n.SRC_ALPHA_SATURATE,[ab]:n.DST_COLOR,[rb]:n.DST_ALPHA,[sb]:n.ONE_MINUS_SRC_COLOR,[nc]:n.ONE_MINUS_SRC_ALPHA,[lb]:n.ONE_MINUS_DST_COLOR,[ob]:n.ONE_MINUS_DST_ALPHA,[ub]:n.CONSTANT_COLOR,[db]:n.ONE_MINUS_CONSTANT_COLOR,[fb]:n.CONSTANT_ALPHA,[hb]:n.ONE_MINUS_CONSTANT_ALPHA};function b(X,Rt,gt,Mt,Pt,Et,Ft,se,ke,ae){if(X===$i){_===!0&&(V(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),X!==Ky){if(X!==g||ae!==M){if((h!==cs||S!==cs)&&(n.blendEquation(n.FUNC_ADD),h=cs,S=cs),ae)switch(X){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,L=null,j=null,B=null,O.set(0,0,0),I=0,g=X,M=ae}return}Pt=Pt||Rt,Et=Et||gt,Ft=Ft||Mt,(Rt!==h||Pt!==S)&&(n.blendEquationSeparate(R[Rt],R[Pt]),h=Rt,S=Pt),(gt!==w||Mt!==L||Et!==j||Ft!==B)&&(n.blendFuncSeparate(H[gt],H[Mt],H[Et],H[Ft]),w=gt,L=Mt,j=Et,B=Ft),(se.equals(O)===!1||ke!==I)&&(n.blendColor(se.r,se.g,se.b,ke),O.copy(se),I=ke),g=X,M=!1}function it(X,Rt){X.side===xi?V(n.CULL_FACE):U(n.CULL_FACE);let gt=X.side===cn;Rt&&(gt=!gt),nt(gt),X.blending===Js&&X.transparent===!1?b($i):b(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Mt=X.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function nt(X){E!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),E=X)}function at(X){X!==qy?(U(n.CULL_FACE),X!==T&&(X===Cd?n.cullFace(n.BACK):X===jy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),T=X}function lt(X){X!==ot&&($&&n.lineWidth(X),ot=X)}function bt(X,Rt,gt){X?(U(n.POLYGON_OFFSET_FILL),(rt!==Rt||ct!==gt)&&(n.polygonOffset(Rt,gt),rt=Rt,ct=gt)):V(n.POLYGON_OFFSET_FILL)}function tt(X){X?U(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function A(X){X===void 0&&(X=n.TEXTURE0+vt-1),mt!==X&&(n.activeTexture(X),mt=X)}function x(X,Rt,gt){gt===void 0&&(mt===null?gt=n.TEXTURE0+vt-1:gt=mt);let Mt=N[gt];Mt===void 0&&(Mt={type:void 0,texture:void 0},N[gt]=Mt),(Mt.type!==X||Mt.texture!==Rt)&&(mt!==gt&&(n.activeTexture(gt),mt=gt),n.bindTexture(X,Rt||F[X]),Mt.type=X,Mt.texture=Rt)}function G(){const X=N[mt];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function P(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Y(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function St(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(X){wt.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),wt.copy(X))}function Ct(X){Z.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),Z.copy(X))}function Jt(X,Rt){let gt=c.get(Rt);gt===void 0&&(gt=new WeakMap,c.set(Rt,gt));let Mt=gt.get(X);Mt===void 0&&(Mt=n.getUniformBlockIndex(Rt,X.name),gt.set(X,Mt))}function Gt(X,Rt){const Mt=c.get(Rt).get(X);l.get(Rt)!==Mt&&(n.uniformBlockBinding(Rt,Mt,X.__bindingPointIndex),l.set(Rt,Mt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},mt=null,N={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,w=null,L=null,S=null,j=null,B=null,O=new qt(0,0,0),I=0,M=!1,E=null,T=null,ot=null,rt=null,ct=null,wt.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:V,bindFramebuffer:K,drawBuffers:ut,useProgram:y,setBlending:b,setMaterial:it,setFlipSided:nt,setCullFace:at,setLineWidth:lt,setPolygonOffset:bt,setScissorTest:tt,activeTexture:A,bindTexture:x,unbindTexture:G,compressedTexImage2D:st,compressedTexImage3D:ht,texImage2D:Tt,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:yt,texStorage3D:St,texSubImage2D:W,texSubImage3D:P,compressedTexSubImage2D:Y,compressedTexSubImage3D:_t,scissor:Nt,viewport:Ct,reset:ie}}function wf(n,t,e,i){const s=Ow(i);switch(e){case _p:return n*t;case xp:return n*t;case yp:return n*t*2;case bp:return n*t/s.components*s.byteLength;case _u:return n*t/s.components*s.byteLength;case Mp:return n*t*2/s.components*s.byteLength;case vu:return n*t*2/s.components*s.byteLength;case vp:return n*t*3/s.components*s.byteLength;case Un:return n*t*4/s.components*s.byteLength;case xu:return n*t*4/s.components*s.byteLength;case Jo:case Qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:case _c:return Math.max(n,16)*Math.max(t,8)/4;case pc:case gc:return Math.max(n,8)*Math.max(t,8)/2;case vc:case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case yc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Dc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Uc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case na:case Nc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sp:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Bc:case zc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ow(n){switch(n){case Ti:case pp:return{byteLength:1,components:1};case Qr:case mp:case io:return{byteLength:2,components:1};case mu:case gu:return{byteLength:2,components:4};case xs:case pu:case bi:return{byteLength:4,components:1};case gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Fw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return p?new OffscreenCanvas(A,x):ga("canvas")}function _(A,x,G){let st=1;const ht=tt(A);if((ht.width>G||ht.height>G)&&(st=G/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const W=Math.floor(st*ht.width),P=Math.floor(st*ht.height);d===void 0&&(d=v(W,P));const Y=x?v(W,P):d;return Y.width=W,Y.height=P,Y.getContext("2d").drawImage(A,0,0,W,P),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+W+"x"+P+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),A;return A}function g(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(A,x,G,st,ht=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let W=x;if(x===n.RED&&(G===n.FLOAT&&(W=n.R32F),G===n.HALF_FLOAT&&(W=n.R16F),G===n.UNSIGNED_BYTE&&(W=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(W=n.R8UI),G===n.UNSIGNED_SHORT&&(W=n.R16UI),G===n.UNSIGNED_INT&&(W=n.R32UI),G===n.BYTE&&(W=n.R8I),G===n.SHORT&&(W=n.R16I),G===n.INT&&(W=n.R32I)),x===n.RG&&(G===n.FLOAT&&(W=n.RG32F),G===n.HALF_FLOAT&&(W=n.RG16F),G===n.UNSIGNED_BYTE&&(W=n.RG8)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(W=n.RG8UI),G===n.UNSIGNED_SHORT&&(W=n.RG16UI),G===n.UNSIGNED_INT&&(W=n.RG32UI),G===n.BYTE&&(W=n.RG8I),G===n.SHORT&&(W=n.RG16I),G===n.INT&&(W=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(W=n.RGB8UI),G===n.UNSIGNED_SHORT&&(W=n.RGB16UI),G===n.UNSIGNED_INT&&(W=n.RGB32UI),G===n.BYTE&&(W=n.RGB8I),G===n.SHORT&&(W=n.RGB16I),G===n.INT&&(W=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),G===n.UNSIGNED_INT&&(W=n.RGBA32UI),G===n.BYTE&&(W=n.RGBA8I),G===n.SHORT&&(W=n.RGBA16I),G===n.INT&&(W=n.RGBA32I)),x===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),x===n.RGBA){const P=ht?Ba:oe.getTransfer(st);G===n.FLOAT&&(W=n.RGBA32F),G===n.HALF_FLOAT&&(W=n.RGBA16F),G===n.UNSIGNED_BYTE&&(W=P===ge?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&t.get("EXT_color_buffer_float"),W}function S(A,x){let G;return A?x===null||x===xs||x===lr?G=n.DEPTH24_STENCIL8:x===bi?G=n.DEPTH32F_STENCIL8:x===Qr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===lr?G=n.DEPTH_COMPONENT24:x===bi?G=n.DEPTH_COMPONENT32F:x===Qr&&(G=n.DEPTH_COMPONENT16),G}function j(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Bn&&A.minFilter!==In?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function B(A){const x=A.target;x.removeEventListener("dispose",B),I(x),x.isVideoTexture&&u.delete(x)}function O(A){const x=A.target;x.removeEventListener("dispose",O),E(x)}function I(A){const x=i.get(A);if(x.__webglInit===void 0)return;const G=A.source,st=f.get(G);if(st){const ht=st[x.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&M(A),Object.keys(st).length===0&&f.delete(G)}i.remove(A)}function M(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const G=A.source,st=f.get(G);delete st[x.__cacheKey],o.memory.textures--}function E(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(x.__webglFramebuffer[st]))for(let ht=0;ht<x.__webglFramebuffer[st].length;ht++)n.deleteFramebuffer(x.__webglFramebuffer[st][ht]);else n.deleteFramebuffer(x.__webglFramebuffer[st]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[st])}else{if(Array.isArray(x.__webglFramebuffer))for(let st=0;st<x.__webglFramebuffer.length;st++)n.deleteFramebuffer(x.__webglFramebuffer[st]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let st=0;st<x.__webglColorRenderbuffer.length;st++)x.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[st]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=A.textures;for(let st=0,ht=G.length;st<ht;st++){const W=i.get(G[st]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(G[st])}i.remove(A)}let T=0;function ot(){T=0}function rt(){const A=T;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),T+=1,A}function ct(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function vt(A,x){const G=i.get(A);if(A.isVideoTexture&&lt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const st=A.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(G,A,x);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function $(A,x){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Z(G,A,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function k(A,x){const G=i.get(A);if(A.version>0&&G.__version!==A.version){Z(G,A,x);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function q(A,x){const G=i.get(A);if(A.version>0&&G.__version!==A.version){z(G,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}const mt={[fc]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[hc]:n.MIRRORED_REPEAT},N={[Bn]:n.NEAREST,[Sb]:n.NEAREST_MIPMAP_NEAREST,[_o]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[sl]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},D={[Ab]:n.NEVER,[Ib]:n.ALWAYS,[Cb]:n.LESS,[wp]:n.LEQUAL,[Rb]:n.EQUAL,[Db]:n.GEQUAL,[Pb]:n.GREATER,[Lb]:n.NOTEQUAL};function dt(A,x){if(x.type===bi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===In||x.magFilter===sl||x.magFilter===_o||x.magFilter===ms||x.minFilter===In||x.minFilter===sl||x.minFilter===_o||x.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,mt[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,mt[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,mt[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,N[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,D[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Bn||x.minFilter!==_o&&x.minFilter!==ms||x.type===bi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function wt(A,x){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",B));const st=x.source;let ht=f.get(st);ht===void 0&&(ht={},f.set(st,ht));const W=ct(x);if(W!==A.__cacheKey){ht[W]===void 0&&(ht[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ht[W].usedTimes++;const P=ht[A.__cacheKey];P!==void 0&&(ht[A.__cacheKey].usedTimes--,P.usedTimes===0&&M(x)),A.__cacheKey=W,A.__webglTexture=ht[W].texture}return G}function Z(A,x,G){let st=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=n.TEXTURE_3D);const ht=wt(A,x),W=x.source;e.bindTexture(st,A.__webglTexture,n.TEXTURE0+G);const P=i.get(W);if(W.version!==P.__version||ht===!0){e.activeTexture(n.TEXTURE0+G);const Y=oe.getPrimaries(oe.workingColorSpace),_t=x.colorSpace===Hi?null:oe.getPrimaries(x.colorSpace),yt=x.colorSpace===Hi||Y===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let St=_(x.image,!1,s.maxTextureSize);St=bt(x,St);const Tt=r.convert(x.format,x.colorSpace),Bt=r.convert(x.type);let Nt=L(x.internalFormat,Tt,Bt,x.colorSpace,x.isVideoTexture);dt(st,x);let Ct;const Jt=x.mipmaps,Gt=x.isVideoTexture!==!0,ie=P.__version===void 0||ht===!0,X=W.dataReady,Rt=j(x,St);if(x.isDepthTexture)Nt=S(x.format===cr,x.type),ie&&(Gt?e.texStorage2D(n.TEXTURE_2D,1,Nt,St.width,St.height):e.texImage2D(n.TEXTURE_2D,0,Nt,St.width,St.height,0,Tt,Bt,null));else if(x.isDataTexture)if(Jt.length>0){Gt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,Jt[0].width,Jt[0].height);for(let gt=0,Mt=Jt.length;gt<Mt;gt++)Ct=Jt[gt],Gt?X&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Tt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,gt,Nt,Ct.width,Ct.height,0,Tt,Bt,Ct.data);x.generateMipmaps=!1}else Gt?(ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,St.width,St.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,St.width,St.height,Tt,Bt,St.data)):e.texImage2D(n.TEXTURE_2D,0,Nt,St.width,St.height,0,Tt,Bt,St.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Gt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Nt,Jt[0].width,Jt[0].height,St.depth);for(let gt=0,Mt=Jt.length;gt<Mt;gt++)if(Ct=Jt[gt],x.format!==Un)if(Tt!==null)if(Gt){if(X)if(x.layerUpdates.size>0){const Pt=wf(Ct.width,Ct.height,x.format,x.type);for(const Et of x.layerUpdates){const Ft=Ct.data.subarray(Et*Pt/Ct.data.BYTES_PER_ELEMENT,(Et+1)*Pt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,Et,Ct.width,Ct.height,1,Tt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,St.depth,Tt,Ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,gt,Nt,Ct.width,Ct.height,St.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,St.depth,Tt,Bt,Ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,gt,Nt,Ct.width,Ct.height,St.depth,0,Tt,Bt,Ct.data)}else{Gt&&ie&&e.texStorage2D(n.TEXTURE_2D,Rt,Nt,Jt[0].width,Jt[0].height);for(let gt=0,Mt=Jt.length;gt<Mt;gt++)Ct=Jt[gt],x.format!==Un?Tt!==null?Gt?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Tt,Ct.data):e.compressedTexImage2D(n.TEXTURE_2D,gt,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?X&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Tt,Bt,Ct.data):e.texImage2D(n.TEXTURE_2D,gt,Nt,Ct.width,Ct.height,0,Tt,Bt,Ct.data)}else if(x.isDataArrayTexture)if(Gt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,Nt,St.width,St.height,St.depth),X)if(x.layerUpdates.size>0){const gt=wf(St.width,St.height,x.format,x.type);for(const Mt of x.layerUpdates){const Pt=St.data.subarray(Mt*gt/St.data.BYTES_PER_ELEMENT,(Mt+1)*gt/St.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,St.width,St.height,1,Tt,Bt,Pt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Tt,Bt,St.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Nt,St.width,St.height,St.depth,0,Tt,Bt,St.data);else if(x.isData3DTexture)Gt?(ie&&e.texStorage3D(n.TEXTURE_3D,Rt,Nt,St.width,St.height,St.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Tt,Bt,St.data)):e.texImage3D(n.TEXTURE_3D,0,Nt,St.width,St.height,St.depth,0,Tt,Bt,St.data);else if(x.isFramebufferTexture){if(ie)if(Gt)e.texStorage2D(n.TEXTURE_2D,Rt,Nt,St.width,St.height);else{let gt=St.width,Mt=St.height;for(let Pt=0;Pt<Rt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Nt,gt,Mt,0,Tt,Bt,null),gt>>=1,Mt>>=1}}else if(Jt.length>0){if(Gt&&ie){const gt=tt(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Rt,Nt,gt.width,gt.height)}for(let gt=0,Mt=Jt.length;gt<Mt;gt++)Ct=Jt[gt],Gt?X&&e.texSubImage2D(n.TEXTURE_2D,gt,0,0,Tt,Bt,Ct):e.texImage2D(n.TEXTURE_2D,gt,Nt,Tt,Bt,Ct);x.generateMipmaps=!1}else if(Gt){if(ie){const gt=tt(St);e.texStorage2D(n.TEXTURE_2D,Rt,Nt,gt.width,gt.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Bt,St)}else e.texImage2D(n.TEXTURE_2D,0,Nt,Tt,Bt,St);g(x)&&h(st),P.__version=W.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function z(A,x,G){if(x.image.length!==6)return;const st=wt(A,x),ht=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const W=i.get(ht);if(ht.version!==W.__version||st===!0){e.activeTexture(n.TEXTURE0+G);const P=oe.getPrimaries(oe.workingColorSpace),Y=x.colorSpace===Hi?null:oe.getPrimaries(x.colorSpace),_t=x.colorSpace===Hi||P===Y?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const yt=x.isCompressedTexture||x.image[0].isCompressedTexture,St=x.image[0]&&x.image[0].isDataTexture,Tt=[];for(let Mt=0;Mt<6;Mt++)!yt&&!St?Tt[Mt]=_(x.image[Mt],!0,s.maxCubemapSize):Tt[Mt]=St?x.image[Mt].image:x.image[Mt],Tt[Mt]=bt(x,Tt[Mt]);const Bt=Tt[0],Nt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type),Jt=L(x.internalFormat,Nt,Ct,x.colorSpace),Gt=x.isVideoTexture!==!0,ie=W.__version===void 0||st===!0,X=ht.dataReady;let Rt=j(x,Bt);dt(n.TEXTURE_CUBE_MAP,x);let gt;if(yt){Gt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Jt,Bt.width,Bt.height);for(let Mt=0;Mt<6;Mt++){gt=Tt[Mt].mipmaps;for(let Pt=0;Pt<gt.length;Pt++){const Et=gt[Pt];x.format!==Un?Nt!==null?Gt?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt,0,0,Et.width,Et.height,Nt,Et.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt,Jt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt,0,0,Et.width,Et.height,Nt,Ct,Et.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt,Jt,Et.width,Et.height,0,Nt,Ct,Et.data)}}}else{if(gt=x.mipmaps,Gt&&ie){gt.length>0&&Rt++;const Mt=tt(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Rt,Jt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(St){Gt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Tt[Mt].width,Tt[Mt].height,Nt,Ct,Tt[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Tt[Mt].width,Tt[Mt].height,0,Nt,Ct,Tt[Mt].data);for(let Pt=0;Pt<gt.length;Pt++){const Ft=gt[Pt].image[Mt].image;Gt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt+1,0,0,Ft.width,Ft.height,Nt,Ct,Ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt+1,Jt,Ft.width,Ft.height,0,Nt,Ct,Ft.data)}}else{Gt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Nt,Ct,Tt[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Jt,Nt,Ct,Tt[Mt]);for(let Pt=0;Pt<gt.length;Pt++){const Et=gt[Pt];Gt?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt+1,0,0,Nt,Ct,Et.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Pt+1,Jt,Nt,Ct,Et.image[Mt])}}}g(x)&&h(n.TEXTURE_CUBE_MAP),W.__version=ht.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function F(A,x,G,st,ht,W){const P=r.convert(G.format,G.colorSpace),Y=r.convert(G.type),_t=L(G.internalFormat,P,Y,G.colorSpace),yt=i.get(x),St=i.get(G);if(St.__renderTarget=x,!yt.__hasExternalTextures){const Tt=Math.max(1,x.width>>W),Bt=Math.max(1,x.height>>W);ht===n.TEXTURE_3D||ht===n.TEXTURE_2D_ARRAY?e.texImage3D(ht,W,_t,Tt,Bt,x.depth,0,P,Y,null):e.texImage2D(ht,W,_t,Tt,Bt,0,P,Y,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,ht,St.__webglTexture,0,nt(x)):(ht===n.TEXTURE_2D||ht>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,ht,St.__webglTexture,W),e.bindFramebuffer(n.FRAMEBUFFER,null)}function U(A,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const st=x.depthTexture,ht=st&&st.isDepthTexture?st.type:null,W=S(x.stencilBuffer,ht),P=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=nt(x);at(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,W,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,W,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,W,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,P,n.RENDERBUFFER,A)}else{const st=x.textures;for(let ht=0;ht<st.length;ht++){const W=st[ht],P=r.convert(W.format,W.colorSpace),Y=r.convert(W.type),_t=L(W.internalFormat,P,Y,W.colorSpace),yt=nt(x);G&&at(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,_t,x.width,x.height):at(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,_t,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,_t,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(x.depthTexture);st.__renderTarget=x,(!st.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),vt(x.depthTexture,0);const ht=st.__webglTexture,W=nt(x);if(x.depthTexture.format===Qs)at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ht,0);else if(x.depthTexture.format===cr)at(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function K(A){const x=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const st=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){const ht=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),x.__depthDisposeCallback=ht}x.__boundDepthTexture=st}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");V(x.__webglFramebuffer,A)}else if(G){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=n.createRenderbuffer(),U(x.__webglDepthbuffer[st],A,!1);else{const ht=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=x.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,W)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),U(x.__webglDepthbuffer,A,!1);else{const st=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ht),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,ht)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(A,x,G){const st=i.get(A);x!==void 0&&F(st.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&K(A)}function y(A){const x=A.texture,G=i.get(A),st=i.get(x);A.addEventListener("dispose",O);const ht=A.textures,W=A.isWebGLCubeRenderTarget===!0,P=ht.length>1;if(P||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=x.version,o.memory.textures++),W){G.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[Y]=[];for(let _t=0;_t<x.mipmaps.length;_t++)G.__webglFramebuffer[Y][_t]=n.createFramebuffer()}else G.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)G.__webglFramebuffer[Y]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(P)for(let Y=0,_t=ht.length;Y<_t;Y++){const yt=i.get(ht[Y]);yt.__webglTexture===void 0&&(yt.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&at(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Y=0;Y<ht.length;Y++){const _t=ht[Y];G.__webglColorRenderbuffer[Y]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Y]);const yt=r.convert(_t.format,_t.colorSpace),St=r.convert(_t.type),Tt=L(_t.internalFormat,yt,St,_t.colorSpace,A.isXRRenderTarget===!0),Bt=nt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,Tt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Y,n.RENDERBUFFER,G.__webglColorRenderbuffer[Y])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),U(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),dt(n.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)F(G.__webglFramebuffer[Y][_t],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,_t);else F(G.__webglFramebuffer[Y],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);g(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(P){for(let Y=0,_t=ht.length;Y<_t;Y++){const yt=ht[Y],St=i.get(yt);e.bindTexture(n.TEXTURE_2D,St.__webglTexture),dt(n.TEXTURE_2D,yt),F(G.__webglFramebuffer,A,yt,n.COLOR_ATTACHMENT0+Y,n.TEXTURE_2D,0),g(yt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let Y=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Y,st.__webglTexture),dt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let _t=0;_t<x.mipmaps.length;_t++)F(G.__webglFramebuffer[_t],A,x,n.COLOR_ATTACHMENT0,Y,_t);else F(G.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,Y,0);g(x)&&h(Y),e.unbindTexture()}A.depthBuffer&&K(A)}function R(A){const x=A.textures;for(let G=0,st=x.length;G<st;G++){const ht=x[G];if(g(ht)){const W=w(A),P=i.get(ht).__webglTexture;e.bindTexture(W,P),h(W),e.unbindTexture()}}}const H=[],b=[];function it(A){if(A.samples>0){if(at(A)===!1){const x=A.textures,G=A.width,st=A.height;let ht=n.COLOR_BUFFER_BIT;const W=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,P=i.get(A),Y=x.length>1;if(Y)for(let _t=0;_t<x.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,P.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,P.__webglFramebuffer);for(let _t=0;_t<x.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ht|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ht|=n.STENCIL_BUFFER_BIT)),Y){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,P.__webglColorRenderbuffer[_t]);const yt=i.get(x[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,yt,0)}n.blitFramebuffer(0,0,G,st,0,0,G,st,ht,n.NEAREST),l===!0&&(H.length=0,b.length=0,H.push(n.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(H.push(W),b.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Y)for(let _t=0;_t<x.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,P.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,P.__webglColorRenderbuffer[_t]);const yt=i.get(x[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,P.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,yt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,P.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function nt(A){return Math.min(s.maxSamples,A.samples)}function at(A){const x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function lt(A){const x=o.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function bt(A,x){const G=A.colorSpace,st=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==hr&&G!==Hi&&(oe.getTransfer(G)===ge?(st!==Un||ht!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function tt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=rt,this.resetTextureUnits=ot,this.setTexture2D=vt,this.setTexture2DArray=$,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=ut,this.setupRenderTarget=y,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=F,this.useMultisampledRTT=at}function Bw(n,t){function e(i,s=Hi){let r;const o=oe.getTransfer(s);if(i===Ti)return n.UNSIGNED_BYTE;if(i===mu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===gu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Qr)return n.UNSIGNED_SHORT;if(i===pu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===bi)return n.FLOAT;if(i===io)return n.HALF_FLOAT;if(i===_p)return n.ALPHA;if(i===vp)return n.RGB;if(i===Un)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===yp)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===bp)return n.RED;if(i===_u)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===vu)return n.RG_INTEGER;if(i===xu)return n.RGBA_INTEGER;if(i===Jo||i===Qo||i===ta||i===ea)if(o===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Jo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Jo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pc||i===mc||i===gc||i===_c)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===pc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_c)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vc||i===xc||i===yc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===vc||i===xc)return o===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===yc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===bc||i===Mc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc||i===Ic||i===Uc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ec)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ac)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Cc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ic)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uc)return o===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===na||i===Nc||i===Oc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===na)return o===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Oc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Fc||i===Bc||i===zc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===na)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class zw extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class js extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vw={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const kw=`
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

}`;class Gw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ki({vertexShader:kw,fragmentShader:Hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nn(new ro(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ww extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=new Gw,g=e.getContextAttributes();let h=null,w=null;const L=[],S=[],j=new $t;let B=null;const O=new bn;O.viewport=new Ce;const I=new bn;I.viewport=new Ce;const M=[O,I],E=new zw;let T=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let z=L[Z];return z===void 0&&(z=new Dl,L[Z]=z),z.getTargetRaySpace()},this.getControllerGrip=function(Z){let z=L[Z];return z===void 0&&(z=new Dl,L[Z]=z),z.getGripSpace()},this.getHand=function(Z){let z=L[Z];return z===void 0&&(z=new Dl,L[Z]=z),z.getHandSpace()};function rt(Z){const z=S.indexOf(Z.inputSource);if(z===-1)return;const F=L[z];F!==void 0&&(F.update(Z.inputSource,Z.frame,c||o),F.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ct(){s.removeEventListener("select",rt),s.removeEventListener("selectstart",rt),s.removeEventListener("selectend",rt),s.removeEventListener("squeeze",rt),s.removeEventListener("squeezestart",rt),s.removeEventListener("squeezeend",rt),s.removeEventListener("end",ct),s.removeEventListener("inputsourceschange",vt);for(let Z=0;Z<L.length;Z++){const z=S[Z];z!==null&&(S[Z]=null,L[Z].disconnect(z))}T=null,ot=null,_.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,w=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(B),t.setSize(j.width,j.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",rt),s.addEventListener("selectstart",rt),s.addEventListener("selectend",rt),s.addEventListener("squeeze",rt),s.addEventListener("squeezestart",rt),s.addEventListener("squeezeend",rt),s.addEventListener("end",ct),s.addEventListener("inputsourceschange",vt),g.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(j),s.renderState.layers===void 0){const z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ys(p.framebufferWidth,p.framebufferHeight,{format:Un,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let z=null,F=null,U=null;g.depth&&(U=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=g.stencil?cr:Qs,F=g.stencil?lr:xs);const V={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(V),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ys(f.textureWidth,f.textureHeight,{format:Un,type:Ti,depthTexture:new Bp(f.textureWidth,f.textureHeight,F,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function vt(Z){for(let z=0;z<Z.removed.length;z++){const F=Z.removed[z],U=S.indexOf(F);U>=0&&(S[U]=null,L[U].disconnect(F))}for(let z=0;z<Z.added.length;z++){const F=Z.added[z];let U=S.indexOf(F);if(U===-1){for(let K=0;K<L.length;K++)if(K>=S.length){S.push(F),U=K;break}else if(S[K]===null){S[K]=F,U=K;break}if(U===-1)break}const V=L[U];V&&V.connect(F)}}const $=new et,k=new et;function q(Z,z,F){$.setFromMatrixPosition(z.matrixWorld),k.setFromMatrixPosition(F.matrixWorld);const U=$.distanceTo(k),V=z.projectionMatrix.elements,K=F.projectionMatrix.elements,ut=V[14]/(V[10]-1),y=V[14]/(V[10]+1),R=(V[9]+1)/V[5],H=(V[9]-1)/V[5],b=(V[8]-1)/V[0],it=(K[8]+1)/K[0],nt=ut*b,at=ut*it,lt=U/(-b+it),bt=lt*-b;if(z.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(bt),Z.translateZ(lt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),V[10]===-1)Z.projectionMatrix.copy(z.projectionMatrix),Z.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const tt=ut+lt,A=y+lt,x=nt-bt,G=at+(U-bt),st=R*y/A*tt,ht=H*y/A*tt;Z.projectionMatrix.makePerspective(x,G,st,ht,tt,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function mt(Z,z){z===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(z.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let z=Z.near,F=Z.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(F=_.depthFar)),E.near=I.near=O.near=z,E.far=I.far=O.far=F,(T!==E.near||ot!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),T=E.near,ot=E.far),O.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,E.layers.mask=O.layers.mask|I.layers.mask;const U=Z.parent,V=E.cameras;mt(E,U);for(let K=0;K<V.length;K++)mt(V[K],U);V.length===2?q(E,O,I):E.projectionMatrix.copy(O.projectionMatrix),N(Z,E,U)};function N(Z,z,F){F===null?Z.matrix.copy(z.matrixWorld):(Z.matrix.copy(F.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(z.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(z.projectionMatrix),Z.projectionMatrixInverse.copy(z.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=kc*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let D=null;function dt(Z,z){if(u=z.getViewerPose(c||o),v=z,u!==null){const F=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let U=!1;F.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let K=0;K<F.length;K++){const ut=F[K];let y=null;if(p!==null)y=p.getViewport(ut);else{const H=d.getViewSubImage(f,ut);y=H.viewport,K===0&&(t.setRenderTargetTextures(w,H.colorTexture,f.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(w))}let R=M[K];R===void 0&&(R=new bn,R.layers.enable(K),R.viewport=new Ce,M[K]=R),R.matrix.fromArray(ut.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ut.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(y.x,y.y,y.width,y.height),K===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),U===!0&&E.cameras.push(R)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){const K=d.getDepthInformation(F[0]);K&&K.isValid&&K.texture&&_.init(t,K,s.renderState)}}for(let F=0;F<L.length;F++){const U=S[F],V=L[F];U!==null&&V!==void 0&&V.update(U,z,c||o)}D&&D(Z,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),v=null}const wt=new Op;wt.setAnimationLoop(dt),this.setAnimationLoop=function(Z){D=Z},this.dispose=function(){}}}const rs=new ii,$w=new we;function Xw(n,t){function e(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Ip(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,w,L,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),_(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,w,L):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,e(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===cn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,e(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===cn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,e(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,e(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const w=t.get(h),L=w.envMap,S=w.envMapRotation;L&&(g.envMap.value=L,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4($w.makeRotationFromEuler(rs)),g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,w,L){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*w,g.scale.value=L*.5,h.map&&(g.map.value=h.map,e(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,w){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const w=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,L){const S=L.program;i.uniformBlockBinding(w,S)}function c(w,L){let S=s[w.id];S===void 0&&(v(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",g));const j=L.program;i.updateUBOMapping(w,j);const B=t.render.frame;r[w.id]!==B&&(f(w),r[w.id]=B)}function u(w){const L=d();w.__bindingPointIndex=L;const S=n.createBuffer(),j=w.__size,B=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,j,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const L=s[w.id],S=w.uniforms,j=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let B=0,O=S.length;B<O;B++){const I=Array.isArray(S[B])?S[B]:[S[B]];for(let M=0,E=I.length;M<E;M++){const T=I[M];if(p(T,B,M,j)===!0){const ot=T.__offset,rt=Array.isArray(T.value)?T.value:[T.value];let ct=0;for(let vt=0;vt<rt.length;vt++){const $=rt[vt],k=_($);typeof $=="number"||typeof $=="boolean"?(T.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,ot+ct,T.__data)):$.isMatrix3?(T.__data[0]=$.elements[0],T.__data[1]=$.elements[1],T.__data[2]=$.elements[2],T.__data[3]=0,T.__data[4]=$.elements[3],T.__data[5]=$.elements[4],T.__data[6]=$.elements[5],T.__data[7]=0,T.__data[8]=$.elements[6],T.__data[9]=$.elements[7],T.__data[10]=$.elements[8],T.__data[11]=0):($.toArray(T.__data,ct),ct+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ot,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,L,S,j){const B=w.value,O=L+"_"+S;if(j[O]===void 0)return typeof B=="number"||typeof B=="boolean"?j[O]=B:j[O]=B.clone(),!0;{const I=j[O];if(typeof B=="number"||typeof B=="boolean"){if(I!==B)return j[O]=B,!0}else if(I.equals(B)===!1)return I.copy(B),!0}return!1}function v(w){const L=w.uniforms;let S=0;const j=16;for(let O=0,I=L.length;O<I;O++){const M=Array.isArray(L[O])?L[O]:[L[O]];for(let E=0,T=M.length;E<T;E++){const ot=M[E],rt=Array.isArray(ot.value)?ot.value:[ot.value];for(let ct=0,vt=rt.length;ct<vt;ct++){const $=rt[ct],k=_($),q=S%j,mt=q%k.boundary,N=q+mt;S+=mt,N!==0&&j-N<k.storage&&(S+=j-N),ot.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=S,S+=k.storage}}}const B=S%j;return B>0&&(S+=j-B),w.__size=S,w.__cache={},this}function _(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),L}function g(w){const L=w.target;L.removeEventListener("dispose",g);const S=o.indexOf(L.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class jw{constructor(t={}){const{canvas:e=Ob(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const w=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Si,this.toneMappingExposure=1;const S=this;let j=!1,B=0,O=0,I=null,M=-1,E=null;const T=new Ce,ot=new Ce;let rt=null;const ct=new qt(0);let vt=0,$=e.width,k=e.height,q=1,mt=null,N=null;const D=new Ce(0,0,$,k),dt=new Ce(0,0,$,k);let wt=!1;const Z=new bu;let z=!1,F=!1;const U=new we,V=new we,K=new et,ut=new Ce,y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function H(){return I===null?q:1}let b=i;function it(C,J){return e.getContext(C,J)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hu}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Et,!1),b===null){const J="webgl2";if(b=it(J,C),b===null)throw it(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let nt,at,lt,bt,tt,A,x,G,st,ht,W,P,Y,_t,yt,St,Tt,Bt,Nt,Ct,Jt,Gt,ie,X;function Rt(){nt=new QS(b),nt.init(),Gt=new Bw(b,nt),at=new qS(b,nt,t,Gt),lt=new Nw(b,nt),at.reverseDepthBuffer&&f&&lt.buffers.depth.setReversed(!0),bt=new nE(b),tt=new yw,A=new Fw(b,nt,lt,tt,at,Gt,bt),x=new YS(S),G=new JS(S),st=new c1(b),ie=new $S(b,st),ht=new tE(b,st,bt,ie),W=new sE(b,ht,st,bt),Nt=new iE(b,at,A),St=new jS(tt),P=new xw(S,x,G,nt,at,ie,St),Y=new Xw(S,tt),_t=new Mw,yt=new Cw(nt),Bt=new WS(S,x,G,lt,W,p,l),Tt=new Iw(S,W,at),X=new qw(b,bt,at,lt),Ct=new XS(b,nt,bt),Jt=new eE(b,nt,bt),bt.programs=P.programs,S.capabilities=at,S.extensions=nt,S.properties=tt,S.renderLists=_t,S.shadowMap=Tt,S.state=lt,S.info=bt}Rt();const gt=new Ww(S,b);this.xr=gt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=nt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=nt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize($,k,!1))},this.getSize=function(C){return C.set($,k)},this.setSize=function(C,J,ft=!0){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,k=J,e.width=Math.floor(C*q),e.height=Math.floor(J*q),ft===!0&&(e.style.width=C+"px",e.style.height=J+"px"),this.setViewport(0,0,C,J)},this.getDrawingBufferSize=function(C){return C.set($*q,k*q).floor()},this.setDrawingBufferSize=function(C,J,ft){$=C,k=J,q=ft,e.width=Math.floor(C*ft),e.height=Math.floor(J*ft),this.setViewport(0,0,C,J)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,J,ft,pt){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,J,ft,pt),lt.viewport(T.copy(D).multiplyScalar(q).round())},this.getScissor=function(C){return C.copy(dt)},this.setScissor=function(C,J,ft,pt){C.isVector4?dt.set(C.x,C.y,C.z,C.w):dt.set(C,J,ft,pt),lt.scissor(ot.copy(dt).multiplyScalar(q).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(C){lt.setScissorTest(wt=C)},this.setOpaqueSort=function(C){mt=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(C=!0,J=!0,ft=!0){let pt=0;if(C){let Q=!1;if(I!==null){const At=I.texture.format;Q=At===xu||At===vu||At===_u}if(Q){const At=I.texture.type,It=At===Ti||At===xs||At===Qr||At===lr||At===mu||At===gu,zt=Bt.getClearColor(),Vt=Bt.getClearAlpha(),Yt=zt.r,Qt=zt.g,kt=zt.b;It?(v[0]=Yt,v[1]=Qt,v[2]=kt,v[3]=Vt,b.clearBufferuiv(b.COLOR,0,v)):(_[0]=Yt,_[1]=Qt,_[2]=kt,_[3]=Vt,b.clearBufferiv(b.COLOR,0,_))}else pt|=b.COLOR_BUFFER_BIT}J&&(pt|=b.DEPTH_BUFFER_BIT),ft&&(pt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(pt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Et,!1),_t.dispose(),yt.dispose(),tt.dispose(),x.dispose(),G.dispose(),W.dispose(),ie.dispose(),X.dispose(),P.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",oo),gt.removeEventListener("sessionend",ao),rn.stop()};function Mt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const C=bt.autoReset,J=Tt.enabled,ft=Tt.autoUpdate,pt=Tt.needsUpdate,Q=Tt.type;Rt(),bt.autoReset=C,Tt.enabled=J,Tt.autoUpdate=ft,Tt.needsUpdate=pt,Tt.type=Q}function Et(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ft(C){const J=C.target;J.removeEventListener("dispose",Ft),se(J)}function se(C){ke(C),tt.remove(C)}function ke(C){const J=tt.get(C).programs;J!==void 0&&(J.forEach(function(ft){P.releaseProgram(ft)}),C.isShaderMaterial&&P.releaseShaderCache(C))}this.renderBufferDirect=function(C,J,ft,pt,Q,At){J===null&&(J=y);const It=Q.isMesh&&Q.matrixWorld.determinant()<0,zt=Yp(C,J,ft,pt,Q);lt.setMaterial(pt,It);let Vt=ft.index,Yt=1;if(pt.wireframe===!0){if(Vt=ht.getWireframeAttribute(ft),Vt===void 0)return;Yt=2}const Qt=ft.drawRange,kt=ft.attributes.position;let le=Qt.start*Yt,ye=(Qt.start+Qt.count)*Yt;At!==null&&(le=Math.max(le,At.start*Yt),ye=Math.min(ye,(At.start+At.count)*Yt)),Vt!==null?(le=Math.max(le,0),ye=Math.min(ye,Vt.count)):kt!=null&&(le=Math.max(le,0),ye=Math.min(ye,kt.count));const Me=ye-le;if(Me<0||Me===1/0)return;ie.setup(Q,pt,zt,ft,Vt);let on,ue=Ct;if(Vt!==null&&(on=st.get(Vt),ue=Jt,ue.setIndex(on)),Q.isMesh)pt.wireframe===!0?(lt.setLineWidth(pt.wireframeLinewidth*H()),ue.setMode(b.LINES)):ue.setMode(b.TRIANGLES);else if(Q.isLine){let Ht=pt.linewidth;Ht===void 0&&(Ht=1),lt.setLineWidth(Ht*H()),Q.isLineSegments?ue.setMode(b.LINES):Q.isLineLoop?ue.setMode(b.LINE_LOOP):ue.setMode(b.LINE_STRIP)}else Q.isPoints?ue.setMode(b.POINTS):Q.isSprite&&ue.setMode(b.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)ue.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(nt.get("WEBGL_multi_draw"))ue.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ht=Q._multiDrawStarts,si=Q._multiDrawCounts,de=Q._multiDrawCount,Cn=Vt?st.get(Vt).bytesPerElement:1,Es=tt.get(pt).currentProgram.getUniforms();for(let un=0;un<de;un++)Es.setValue(b,"_gl_DrawID",un),ue.render(Ht[un]/Cn,si[un])}else if(Q.isInstancedMesh)ue.renderInstances(le,Me,Q.count);else if(ft.isInstancedBufferGeometry){const Ht=ft._maxInstanceCount!==void 0?ft._maxInstanceCount:1/0,si=Math.min(ft.instanceCount,Ht);ue.renderInstances(le,Me,si)}else ue.render(le,Me)};function ae(C,J,ft){C.transparent===!0&&C.side===xi&&C.forceSinglePass===!1?(C.side=cn,C.needsUpdate=!0,co(C,J,ft),C.side=Yi,C.needsUpdate=!0,co(C,J,ft),C.side=xi):co(C,J,ft)}this.compile=function(C,J,ft=null){ft===null&&(ft=C),h=yt.get(ft),h.init(J),L.push(h),ft.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(h.pushLight(Q),Q.castShadow&&h.pushShadow(Q))}),C!==ft&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(h.pushLight(Q),Q.castShadow&&h.pushShadow(Q))}),h.setupLights();const pt=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const At=Q.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){const zt=At[It];ae(zt,ft,Q),pt.add(zt)}else ae(At,ft,Q),pt.add(At)}),L.pop(),h=null,pt},this.compileAsync=function(C,J,ft=null){const pt=this.compile(C,J,ft);return new Promise(Q=>{function At(){if(pt.forEach(function(It){tt.get(It).currentProgram.isReady()&&pt.delete(It)}),pt.size===0){Q(C);return}setTimeout(At,10)}nt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let ne=null;function An(C){ne&&ne(C)}function oo(){rn.stop()}function ao(){rn.start()}const rn=new Op;rn.setAnimationLoop(An),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(C){ne=C,gt.setAnimationLoop(C),C===null?rn.stop():rn.start()},gt.addEventListener("sessionstart",oo),gt.addEventListener("sessionend",ao),this.render=function(C,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(J),J=gt.getCamera()),C.isScene===!0&&C.onBeforeRender(S,C,J,I),h=yt.get(C,L.length),h.init(J),L.push(h),V.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Z.setFromProjectionMatrix(V),F=this.localClippingEnabled,z=St.init(this.clippingPlanes,F),g=_t.get(C,w.length),g.init(),w.push(g),gt.enabled===!0&&gt.isPresenting===!0){const At=S.xr.getDepthSensingMesh();At!==null&&gr(At,J,-1/0,S.sortObjects)}gr(C,J,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(mt,N),R=gt.enabled===!1||gt.isPresenting===!1||gt.hasDepthSensing()===!1,R&&Bt.addToRenderList(g,C),this.info.render.frame++,z===!0&&St.beginShadows();const ft=h.state.shadowsArray;Tt.render(ft,C,J),z===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset();const pt=g.opaque,Q=g.transmissive;if(h.setupLights(),J.isArrayCamera){const At=J.cameras;if(Q.length>0)for(let It=0,zt=At.length;It<zt;It++){const Vt=At[It];wu(pt,Q,C,Vt)}R&&Bt.render(C);for(let It=0,zt=At.length;It<zt;It++){const Vt=At[It];Eu(g,C,Vt,Vt.viewport)}}else Q.length>0&&wu(pt,Q,C,J),R&&Bt.render(C),Eu(g,C,J);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),C.isScene===!0&&C.onAfterRender(S,C,J),ie.resetDefaultState(),M=-1,E=null,L.pop(),L.length>0?(h=L[L.length-1],z===!0&&St.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function gr(C,J,ft,pt){if(C.visible===!1)return;if(C.layers.test(J.layers)){if(C.isGroup)ft=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(J);else if(C.isLight)h.pushLight(C),C.castShadow&&h.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){pt&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(V);const It=W.update(C),zt=C.material;zt.visible&&g.push(C,It,zt,ft,ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const It=W.update(C),zt=C.material;if(pt&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),ut.copy(It.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(V)),Array.isArray(zt)){const Vt=It.groups;for(let Yt=0,Qt=Vt.length;Yt<Qt;Yt++){const kt=Vt[Yt],le=zt[kt.materialIndex];le&&le.visible&&g.push(C,It,le,ft,ut.z,kt)}}else zt.visible&&g.push(C,It,zt,ft,ut.z,null)}}const At=C.children;for(let It=0,zt=At.length;It<zt;It++)gr(At[It],J,ft,pt)}function Eu(C,J,ft,pt){const Q=C.opaque,At=C.transmissive,It=C.transparent;h.setupLightsView(ft),z===!0&&St.setGlobalState(S.clippingPlanes,ft),pt&&lt.viewport(T.copy(pt)),Q.length>0&&lo(Q,J,ft),At.length>0&&lo(At,J,ft),It.length>0&&lo(It,J,ft),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function wu(C,J,ft,pt){if((ft.isScene===!0?ft.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[pt.id]===void 0&&(h.state.transmissionRenderTarget[pt.id]=new ys(1,1,{generateMipmaps:!0,type:nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float")?io:Ti,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const At=h.state.transmissionRenderTarget[pt.id],It=pt.viewport||T;At.setSize(It.z,It.w);const zt=S.getRenderTarget();S.setRenderTarget(At),S.getClearColor(ct),vt=S.getClearAlpha(),vt<1&&S.setClearColor(16777215,.5),S.clear(),R&&Bt.render(ft);const Vt=S.toneMapping;S.toneMapping=Si;const Yt=pt.viewport;if(pt.viewport!==void 0&&(pt.viewport=void 0),h.setupLightsView(pt),z===!0&&St.setGlobalState(S.clippingPlanes,pt),lo(C,ft,pt),A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let kt=0,le=J.length;kt<le;kt++){const ye=J[kt],Me=ye.object,on=ye.geometry,ue=ye.material,Ht=ye.group;if(ue.side===xi&&Me.layers.test(pt.layers)){const si=ue.side;ue.side=cn,ue.needsUpdate=!0,Tu(Me,ft,pt,on,ue,Ht),ue.side=si,ue.needsUpdate=!0,Qt=!0}}Qt===!0&&(A.updateMultisampleRenderTarget(At),A.updateRenderTargetMipmap(At))}S.setRenderTarget(zt),S.setClearColor(ct,vt),Yt!==void 0&&(pt.viewport=Yt),S.toneMapping=Vt}function lo(C,J,ft){const pt=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,At=C.length;Q<At;Q++){const It=C[Q],zt=It.object,Vt=It.geometry,Yt=pt===null?It.material:pt,Qt=It.group;zt.layers.test(ft.layers)&&Tu(zt,J,ft,Vt,Yt,Qt)}}function Tu(C,J,ft,pt,Q,At){C.onBeforeRender(S,J,ft,pt,Q,At),C.modelViewMatrix.multiplyMatrices(ft.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(S,J,ft,pt,C,At),Q.transparent===!0&&Q.side===xi&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,S.renderBufferDirect(ft,J,pt,Q,C,At),Q.side=Yi,Q.needsUpdate=!0,S.renderBufferDirect(ft,J,pt,Q,C,At),Q.side=xi):S.renderBufferDirect(ft,J,pt,Q,C,At),C.onAfterRender(S,J,ft,pt,Q,At)}function co(C,J,ft){J.isScene!==!0&&(J=y);const pt=tt.get(C),Q=h.state.lights,At=h.state.shadowsArray,It=Q.state.version,zt=P.getParameters(C,Q.state,At,J,ft),Vt=P.getProgramCacheKey(zt);let Yt=pt.programs;pt.environment=C.isMeshStandardMaterial?J.environment:null,pt.fog=J.fog,pt.envMap=(C.isMeshStandardMaterial?G:x).get(C.envMap||pt.environment),pt.envMapRotation=pt.environment!==null&&C.envMap===null?J.environmentRotation:C.envMapRotation,Yt===void 0&&(C.addEventListener("dispose",Ft),Yt=new Map,pt.programs=Yt);let Qt=Yt.get(Vt);if(Qt!==void 0){if(pt.currentProgram===Qt&&pt.lightsStateVersion===It)return Cu(C,zt),Qt}else zt.uniforms=P.getUniforms(C),C.onBeforeCompile(zt,S),Qt=P.acquireProgram(zt,Vt),Yt.set(Vt,Qt),pt.uniforms=zt.uniforms;const kt=pt.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=St.uniform),Cu(C,zt),pt.needsLights=Zp(C),pt.lightsStateVersion=It,pt.needsLights&&(kt.ambientLightColor.value=Q.state.ambient,kt.lightProbe.value=Q.state.probe,kt.directionalLights.value=Q.state.directional,kt.directionalLightShadows.value=Q.state.directionalShadow,kt.spotLights.value=Q.state.spot,kt.spotLightShadows.value=Q.state.spotShadow,kt.rectAreaLights.value=Q.state.rectArea,kt.ltc_1.value=Q.state.rectAreaLTC1,kt.ltc_2.value=Q.state.rectAreaLTC2,kt.pointLights.value=Q.state.point,kt.pointLightShadows.value=Q.state.pointShadow,kt.hemisphereLights.value=Q.state.hemi,kt.directionalShadowMap.value=Q.state.directionalShadowMap,kt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,kt.spotShadowMap.value=Q.state.spotShadowMap,kt.spotLightMatrix.value=Q.state.spotLightMatrix,kt.spotLightMap.value=Q.state.spotLightMap,kt.pointShadowMap.value=Q.state.pointShadowMap,kt.pointShadowMatrix.value=Q.state.pointShadowMatrix),pt.currentProgram=Qt,pt.uniformsList=null,Qt}function Au(C){if(C.uniformsList===null){const J=C.currentProgram.getUniforms();C.uniformsList=ia.seqWithValue(J.seq,C.uniforms)}return C.uniformsList}function Cu(C,J){const ft=tt.get(C);ft.outputColorSpace=J.outputColorSpace,ft.batching=J.batching,ft.batchingColor=J.batchingColor,ft.instancing=J.instancing,ft.instancingColor=J.instancingColor,ft.instancingMorph=J.instancingMorph,ft.skinning=J.skinning,ft.morphTargets=J.morphTargets,ft.morphNormals=J.morphNormals,ft.morphColors=J.morphColors,ft.morphTargetsCount=J.morphTargetsCount,ft.numClippingPlanes=J.numClippingPlanes,ft.numIntersection=J.numClipIntersection,ft.vertexAlphas=J.vertexAlphas,ft.vertexTangents=J.vertexTangents,ft.toneMapping=J.toneMapping}function Yp(C,J,ft,pt,Q){J.isScene!==!0&&(J=y),A.resetTextureUnits();const At=J.fog,It=pt.isMeshStandardMaterial?J.environment:null,zt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hr,Vt=(pt.isMeshStandardMaterial?G:x).get(pt.envMap||It),Yt=pt.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,Qt=!!ft.attributes.tangent&&(!!pt.normalMap||pt.anisotropy>0),kt=!!ft.morphAttributes.position,le=!!ft.morphAttributes.normal,ye=!!ft.morphAttributes.color;let Me=Si;pt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Me=S.toneMapping);const on=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,ue=on!==void 0?on.length:0,Ht=tt.get(pt),si=h.state.lights;if(z===!0&&(F===!0||C!==E)){const vn=C===E&&pt.id===M;St.setState(pt,C,vn)}let de=!1;pt.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==si.state.version||Ht.outputColorSpace!==zt||Q.isBatchedMesh&&Ht.batching===!1||!Q.isBatchedMesh&&Ht.batching===!0||Q.isBatchedMesh&&Ht.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Ht.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Ht.instancing===!1||!Q.isInstancedMesh&&Ht.instancing===!0||Q.isSkinnedMesh&&Ht.skinning===!1||!Q.isSkinnedMesh&&Ht.skinning===!0||Q.isInstancedMesh&&Ht.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ht.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ht.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ht.instancingMorph===!1&&Q.morphTexture!==null||Ht.envMap!==Vt||pt.fog===!0&&Ht.fog!==At||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==St.numPlanes||Ht.numIntersection!==St.numIntersection)||Ht.vertexAlphas!==Yt||Ht.vertexTangents!==Qt||Ht.morphTargets!==kt||Ht.morphNormals!==le||Ht.morphColors!==ye||Ht.toneMapping!==Me||Ht.morphTargetsCount!==ue)&&(de=!0):(de=!0,Ht.__version=pt.version);let Cn=Ht.currentProgram;de===!0&&(Cn=co(pt,J,Q));let Es=!1,un=!1,_r=!1;const Se=Cn.getUniforms(),Wn=Ht.uniforms;if(lt.useProgram(Cn.program)&&(Es=!0,un=!0,_r=!0),pt.id!==M&&(M=pt.id,un=!0),Es||E!==C){lt.buffers.depth.getReversed()?(U.copy(C.projectionMatrix),Bb(U),zb(U),Se.setValue(b,"projectionMatrix",U)):Se.setValue(b,"projectionMatrix",C.projectionMatrix),Se.setValue(b,"viewMatrix",C.matrixWorldInverse);const Ri=Se.map.cameraPosition;Ri!==void 0&&Ri.setValue(b,K.setFromMatrixPosition(C.matrixWorld)),at.logarithmicDepthBuffer&&Se.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(pt.isMeshPhongMaterial||pt.isMeshToonMaterial||pt.isMeshLambertMaterial||pt.isMeshBasicMaterial||pt.isMeshStandardMaterial||pt.isShaderMaterial)&&Se.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,un=!0,_r=!0)}if(Q.isSkinnedMesh){Se.setOptional(b,Q,"bindMatrix"),Se.setOptional(b,Q,"bindMatrixInverse");const vn=Q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Se.setValue(b,"boneTexture",vn.boneTexture,A))}Q.isBatchedMesh&&(Se.setOptional(b,Q,"batchingTexture"),Se.setValue(b,"batchingTexture",Q._matricesTexture,A),Se.setOptional(b,Q,"batchingIdTexture"),Se.setValue(b,"batchingIdTexture",Q._indirectTexture,A),Se.setOptional(b,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Se.setValue(b,"batchingColorTexture",Q._colorsTexture,A));const vr=ft.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Nt.update(Q,ft,Cn),(un||Ht.receiveShadow!==Q.receiveShadow)&&(Ht.receiveShadow=Q.receiveShadow,Se.setValue(b,"receiveShadow",Q.receiveShadow)),pt.isMeshGouraudMaterial&&pt.envMap!==null&&(Wn.envMap.value=Vt,Wn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),pt.isMeshStandardMaterial&&pt.envMap===null&&J.environment!==null&&(Wn.envMapIntensity.value=J.environmentIntensity),un&&(Se.setValue(b,"toneMappingExposure",S.toneMappingExposure),Ht.needsLights&&Kp(Wn,_r),At&&pt.fog===!0&&Y.refreshFogUniforms(Wn,At),Y.refreshMaterialUniforms(Wn,pt,q,k,h.state.transmissionRenderTarget[C.id]),ia.upload(b,Au(Ht),Wn,A)),pt.isShaderMaterial&&pt.uniformsNeedUpdate===!0&&(ia.upload(b,Au(Ht),Wn,A),pt.uniformsNeedUpdate=!1),pt.isSpriteMaterial&&Se.setValue(b,"center",Q.center),Se.setValue(b,"modelViewMatrix",Q.modelViewMatrix),Se.setValue(b,"normalMatrix",Q.normalMatrix),Se.setValue(b,"modelMatrix",Q.matrixWorld),pt.isShaderMaterial||pt.isRawShaderMaterial){const vn=pt.uniformsGroups;for(let Ri=0,Pi=vn.length;Ri<Pi;Ri++){const Ru=vn[Ri];X.update(Ru,Cn),X.bind(Ru,Cn)}}return Cn}function Kp(C,J){C.ambientLightColor.needsUpdate=J,C.lightProbe.needsUpdate=J,C.directionalLights.needsUpdate=J,C.directionalLightShadows.needsUpdate=J,C.pointLights.needsUpdate=J,C.pointLightShadows.needsUpdate=J,C.spotLights.needsUpdate=J,C.spotLightShadows.needsUpdate=J,C.rectAreaLights.needsUpdate=J,C.hemisphereLights.needsUpdate=J}function Zp(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(C,J,ft){tt.get(C.texture).__webglTexture=J,tt.get(C.depthTexture).__webglTexture=ft;const pt=tt.get(C);pt.__hasExternalTextures=!0,pt.__autoAllocateDepthBuffer=ft===void 0,pt.__autoAllocateDepthBuffer||nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,J){const ft=tt.get(C);ft.__webglFramebuffer=J,ft.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(C,J=0,ft=0){I=C,B=J,O=ft;let pt=!0,Q=null,At=!1,It=!1;if(C){const Vt=tt.get(C);if(Vt.__useDefaultFramebuffer!==void 0)lt.bindFramebuffer(b.FRAMEBUFFER,null),pt=!1;else if(Vt.__webglFramebuffer===void 0)A.setupRenderTarget(C);else if(Vt.__hasExternalTextures)A.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const kt=C.depthTexture;if(Vt.__boundDepthTexture!==kt){if(kt!==null&&tt.has(kt)&&(C.width!==kt.image.width||C.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(C)}}const Yt=C.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);const Qt=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qt[J])?Q=Qt[J][ft]:Q=Qt[J],At=!0):C.samples>0&&A.useMultisampledRTT(C)===!1?Q=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Qt)?Q=Qt[ft]:Q=Qt,T.copy(C.viewport),ot.copy(C.scissor),rt=C.scissorTest}else T.copy(D).multiplyScalar(q).floor(),ot.copy(dt).multiplyScalar(q).floor(),rt=wt;if(lt.bindFramebuffer(b.FRAMEBUFFER,Q)&&pt&&lt.drawBuffers(C,Q),lt.viewport(T),lt.scissor(ot),lt.setScissorTest(rt),At){const Vt=tt.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+J,Vt.__webglTexture,ft)}else if(It){const Vt=tt.get(C.texture),Yt=J||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Vt.__webglTexture,ft||0,Yt)}M=-1},this.readRenderTargetPixels=function(C,J,ft,pt,Q,At,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){lt.bindFramebuffer(b.FRAMEBUFFER,zt);try{const Vt=C.texture,Yt=Vt.format,Qt=Vt.type;if(!at.textureFormatReadable(Yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=C.width-pt&&ft>=0&&ft<=C.height-Q&&b.readPixels(J,ft,pt,Q,Gt.convert(Yt),Gt.convert(Qt),At)}finally{const Vt=I!==null?tt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(C,J,ft,pt,Q,At,It){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(zt=zt[It]),zt){const Vt=C.texture,Yt=Vt.format,Qt=Vt.type;if(!at.textureFormatReadable(Yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=C.width-pt&&ft>=0&&ft<=C.height-Q){lt.bindFramebuffer(b.FRAMEBUFFER,zt);const kt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,kt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels(J,ft,pt,Q,Gt.convert(Yt),Gt.convert(Qt),0);const le=I!==null?tt.get(I).__webglFramebuffer:null;lt.bindFramebuffer(b.FRAMEBUFFER,le);const ye=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Fb(b,ye,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,kt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(kt),b.deleteSync(ye),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,J=null,ft=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1]);const pt=Math.pow(2,-ft),Q=Math.floor(C.image.width*pt),At=Math.floor(C.image.height*pt),It=J!==null?J.x:0,zt=J!==null?J.y:0;A.setTexture2D(C,0),b.copyTexSubImage2D(b.TEXTURE_2D,ft,0,0,It,zt,Q,At),lt.unbindTexture()},this.copyTextureToTexture=function(C,J,ft=null,pt=null,Q=0){C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture function signature has changed."),pt=arguments[0]||null,C=arguments[1],J=arguments[2],Q=arguments[3]||0,ft=null);let At,It,zt,Vt,Yt,Qt,kt,le,ye;const Me=C.isCompressedTexture?C.mipmaps[Q]:C.image;ft!==null?(At=ft.max.x-ft.min.x,It=ft.max.y-ft.min.y,zt=ft.isBox3?ft.max.z-ft.min.z:1,Vt=ft.min.x,Yt=ft.min.y,Qt=ft.isBox3?ft.min.z:0):(At=Me.width,It=Me.height,zt=Me.depth||1,Vt=0,Yt=0,Qt=0),pt!==null?(kt=pt.x,le=pt.y,ye=pt.z):(kt=0,le=0,ye=0);const on=Gt.convert(J.format),ue=Gt.convert(J.type);let Ht;J.isData3DTexture?(A.setTexture3D(J,0),Ht=b.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(A.setTexture2DArray(J,0),Ht=b.TEXTURE_2D_ARRAY):(A.setTexture2D(J,0),Ht=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,J.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,J.unpackAlignment);const si=b.getParameter(b.UNPACK_ROW_LENGTH),de=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(b.UNPACK_SKIP_PIXELS),Es=b.getParameter(b.UNPACK_SKIP_ROWS),un=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Me.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Me.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Yt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Qt);const _r=C.isDataArrayTexture||C.isData3DTexture,Se=J.isDataArrayTexture||J.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){const Wn=tt.get(C),vr=tt.get(J),vn=tt.get(Wn.__renderTarget),Ri=tt.get(vr.__renderTarget);lt.bindFramebuffer(b.READ_FRAMEBUFFER,vn.__webglFramebuffer),lt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let Pi=0;Pi<zt;Pi++)_r&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,Q,Qt+Pi),C.isDepthTexture?(Se&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,tt.get(J).__webglTexture,Q,ye+Pi),b.blitFramebuffer(Vt,Yt,At,It,kt,le,At,It,b.DEPTH_BUFFER_BIT,b.NEAREST)):Se?b.copyTexSubImage3D(Ht,Q,kt,le,ye+Pi,Vt,Yt,At,It):b.copyTexSubImage2D(Ht,Q,kt,le,ye+Pi,Vt,Yt,At,It);lt.bindFramebuffer(b.READ_FRAMEBUFFER,null),lt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Se?C.isDataTexture||C.isData3DTexture?b.texSubImage3D(Ht,Q,kt,le,ye,At,It,zt,on,ue,Me.data):J.isCompressedArrayTexture?b.compressedTexSubImage3D(Ht,Q,kt,le,ye,At,It,zt,on,Me.data):b.texSubImage3D(Ht,Q,kt,le,ye,At,It,zt,on,ue,Me):C.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,kt,le,At,It,on,ue,Me.data):C.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,kt,le,Me.width,Me.height,on,Me.data):b.texSubImage2D(b.TEXTURE_2D,Q,kt,le,At,It,on,ue,Me);b.pixelStorei(b.UNPACK_ROW_LENGTH,si),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,de),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Es),b.pixelStorei(b.UNPACK_SKIP_IMAGES,un),Q===0&&J.generateMipmaps&&b.generateMipmap(Ht),lt.unbindTexture()},this.copyTextureToTexture3D=function(C,J,ft=null,pt=null,Q=0){return C.isTexture!==!0&&(Ir("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ft=arguments[0]||null,pt=arguments[1]||null,C=arguments[2],J=arguments[3],Q=arguments[4]||0),Ir('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,J,ft,pt,Q)},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&A.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?A.setTextureCube(C,0):C.isData3DTexture?A.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?A.setTexture2DArray(C,0):A.setTexture2D(C,0),lt.unbindTexture()},this.resetState=function(){B=0,O=0,I=null,lt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Yw extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Kw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vc,this.updateRanges=[],this.version=0,this.uuid=Xi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new et;class _a{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Zn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=_e(e,this.array),i=_e(i,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new zn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new _a(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gp extends Ss{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Vs;const Ar=new et,ks=new et,Hs=new et,Gs=new $t,Cr=new $t,Wp=new we,Bo=new et,Rr=new et,zo=new et,Tf=new $t,Il=new $t,Af=new $t;class Zw extends Ve{constructor(t=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",Vs===void 0){Vs=new en;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Kw(e,5);Vs.setIndex([0,1,2,0,2,3]),Vs.setAttribute("position",new _a(i,3,0,!1)),Vs.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=Vs,this.material=t,this.center=new $t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Vo(Bo.set(-.5,-.5,0),Hs,o,ks,s,r),Vo(Rr.set(.5,-.5,0),Hs,o,ks,s,r),Vo(zo.set(.5,.5,0),Hs,o,ks,s,r),Tf.set(0,0),Il.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(Bo,Rr,zo,!1,Ar);if(a===null&&(Vo(Rr.set(-.5,.5,0),Hs,o,ks,s,r),Il.set(0,1),a=t.ray.intersectTriangle(Bo,zo,Rr,!1,Ar),a===null))return;const l=t.ray.origin.distanceTo(Ar);l<t.near||l>t.far||e.push({distance:l,point:Ar.clone(),uv:pn.getInterpolation(Ar,Bo,Rr,zo,Tf,Il,Af,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Vo(n,t,e,i,s,r){Gs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Cr.x=r*Gs.x-s*Gs.y,Cr.y=s*Gs.x+r*Gs.y):Cr.copy(Gs),n.copy(t),n.x+=Cr.x,n.y+=Cr.y,n.applyMatrix4(Wp)}class va extends Ss{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new et,ya=new et,Cf=new we,Pr=new Va,ko=new za,Ul=new et,Rf=new et;class Nr extends Ve{constructor(t=new en,e=new va){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)xa.fromBufferAttribute(e,s-1),ya.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=xa.distanceTo(ya);t.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,t.ray.intersectsSphere(ko)===!1)return;Cf.copy(s).invert(),Pr.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=u.getX(_),w=u.getX(_+1),L=Ho(this,t,Pr,l,h,w);L&&e.push(L)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(p),h=Ho(this,t,Pr,l,_,g);h&&e.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=Ho(this,t,Pr,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=Ho(this,t,Pr,l,v-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ho(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(xa.fromBufferAttribute(o,s),ya.fromBufferAttribute(o,r),e.distanceSqToSegment(xa,ya,Ul,Rf)>i)return;Ul.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ul);if(!(l<t.near||l>t.far))return{distance:l,point:Rf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pf=new et,Lf=new et;class $p extends Nr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);t.setAttribute("lineDistance",new En(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jw extends sn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Go=new et,Wo=new et,Nl=new et,$o=new pn;class Qw extends en{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Gr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:h}=$o;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),$o.getNormal(Nl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const L=(w+1)%3,S=d[w],j=d[L],B=$o[u[w]],O=$o[u[L]],I=`${S}_${j}`,M=`${j}_${S}`;M in f&&f[M]?(Nl.dot(f[M].normal)<=r&&(p.push(B.x,B.y,B.z),p.push(O.x,O.y,O.z)),f[M]=null):I in f||(f[I]={index0:c[w],index1:c[L],normal:Nl.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:g}=f[v];Go.fromBufferAttribute(a,_),Wo.fromBufferAttribute(a,g),p.push(Go.x,Go.y,Go.z),p.push(Wo.x,Wo.y,Wo.z)}this.setAttribute("position",new En(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Df extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new we,If=new et,Uf=new et;class tT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bu,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class eT extends tT{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fl extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new eT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class nT extends Xp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nf=new we;class iT{constructor(t,e,i=0,s=1/0){this.ray=new Va(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new yu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,i=[]){return Gc(t,this,i,e),i.sort(Of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Gc(t[s],this,i,e);return i.sort(Of),i}}function Of(n,t){return n.distance-t.distance}function Gc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Gc(r[o],t,e,!0)}}class Ff{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sT extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new qt(i),s=new qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=e;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new en;u.setAttribute("position",new En(l,3)),u.setAttribute("color",new En(c,3));const d=new va({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class rT extends Ms{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hu);const Bf={type:"change"},Su={type:"start"},qp={type:"end"},Xo=new Va,zf=new ki,oT=Math.cos(70*Nb.DEG2RAD),De=new et,an=2*Math.PI,ve={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Bl=1e-6;class aT extends rT{constructor(t,e=null){super(t,e),this.state=ve.NONE,this.enabled=!0,this.target=new et,this.cursor=new et,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new et,this._lastQuaternion=new bs,this._lastTargetPosition=new et,this._quat=new bs().setFromUnitVectors(t.up,new et(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new et,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new et,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cT.bind(this),this._onPointerDown=lT.bind(this),this._onPointerUp=uT.bind(this),this._onContextMenu=_T.bind(this),this._onMouseWheel=hT.bind(this),this._onKeyDown=pT.bind(this),this._onTouchStart=mT.bind(this),this._onTouchMove=gT.bind(this),this._onMouseDown=dT.bind(this),this._onMouseMove=fT.bind(this),this._interceptControlDown=vT.bind(this),this._interceptControlUp=xT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=ve.NONE}update(t=null){const e=this.object.position;De.copy(e).sub(this.target),De.applyQuaternion(this._quat),this._spherical.setFromVector3(De),this.autoRotate&&this.state===ve.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=an:i>Math.PI&&(i-=an),s<-Math.PI?s+=an:s>Math.PI&&(s-=an),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(De.setFromSpherical(this._spherical),De.applyQuaternion(this._quatInverse),e.copy(this.target).add(De),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=De.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new et(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new et(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=De.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Xo.origin.copy(this.object.position),Xo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xo.direction))<oT?this.object.lookAt(this.target):(zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xo.intersectPlane(zf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Bl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Bl||this._lastTargetPosition.distanceToSquared(this.target)>Bl?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?an/60*this.autoRotateSpeed*t:an/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){De.setFromMatrixColumn(e,0),De.multiplyScalar(-t),this._panOffset.add(De)}_panUp(t,e){this.screenSpacePanning===!0?De.setFromMatrixColumn(e,1):(De.setFromMatrixColumn(e,0),De.crossVectors(this.object.up,De)),De.multiplyScalar(t),this._panOffset.add(De)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;De.copy(s).sub(this.target);let r=De.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(an*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-an*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(an*this._rotateDelta.x/e.clientHeight),this._rotateUp(an*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function cT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function uT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qp),this.state=ve.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ve.DOLLY;break;case Zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}break;case Zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ve.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ve.PAN}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Su)}function fT(n){switch(this.state){case ve.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ve.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ve.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function hT(n){this.enabled===!1||this.enableZoom===!1||this.state!==ve.NONE||(n.preventDefault(),this.dispatchEvent(Su),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qp))}function pT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function mT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ve.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ve.TOUCH_PAN;break;default:this.state=ve.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ve.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ve.TOUCH_DOLLY_ROTATE;break;default:this.state=ve.NONE}break;default:this.state=ve.NONE}this.state!==ve.NONE&&this.dispatchEvent(Su)}function gT(n){switch(this._trackPointer(n),this.state){case ve.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ve.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ve.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ve.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ve.NONE}}function _T(n){this.enabled!==!1&&n.preventDefault()}function vT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},bT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},MT={style:{display:"flex","align-items":"center",gap:"8px"}},ST={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},ET={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},wT={style:{color:"#00d2ff","font-weight":"bold"}},TT={style:{color:"#ecc94b"}},AT={style:{color:"#e2e8f0"}},CT={style:{color:"#e2e8f0"}},RT={style:{color:"#63b3ed"}},PT={style:{color:"#e2e8f0"}},LT={style:{color:"#e2e8f0"}},DT={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},IT={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},UT={style:{display:"flex","align-items":"center",gap:"6px"}},NT={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},OT={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},FT={style:{color:"#48bb78"}},BT={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},zT={style:{color:"#ecc94b"}},VT={style:{color:"#63b3ed"}},kT=Ai({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=jt(null),i=jt(null),s=jt("current"),r=jt({visible:!1,x:0,y:0}),o=ze(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a($){s.value=$,M()}let l,c,u,d,f,p,v,_=[],g=null,h=new js,w=new js,L=null;function S($){const mt=Math.max(0,Math.min(1,($-65)/31)),N=new qt;return mt<.25?N.lerpColors(new qt(16007006),new qt(16347926),mt/.25):mt<.5?N.lerpColors(new qt(16347926),new qt(15381256),(mt-.25)/.25):mt<.75?N.lerpColors(new qt(15381256),new qt(1096065),(mt-.5)/.25):mt<.9?N.lerpColors(new qt(1096065),new qt(440020),(mt-.75)/.15):N.lerpColors(new qt(440020),new qt(9133302),(mt-.9)/.1),N}function j($,k=24,q="#94a3b8"){const mt=document.createElement("canvas");mt.width=512,mt.height=128;const N=mt.getContext("2d");N.fillStyle="transparent",N.fillRect(0,0,mt.width,mt.height),N.font=`bold ${k*2}px "Fira Code", monospace`,N.fillStyle=q,N.textAlign="center",N.textBaseline="middle",N.fillText($,mt.width/2,mt.height/2);const D=new Jw(mt);D.minFilter=In;const dt=new Gp({map:D,transparent:!0,depthWrite:!1}),wt=new Zw(dt);return wt.scale.set(4,1,1),wt}function B(){if(!c||!d||!e.value)return;const $=e.value.clientWidth||800,k=e.value.clientHeight||600;if($===0||k===0)return;c.aspect=$/k,c.updateProjectionMatrix();const q=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(A=>A.voltageTarget))]:[12],mt=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(A=>A.loadTarget))]:[1],N=Math.max(1,q.length),D=Math.max(1,mt.length),dt=Math.max(18,Math.min(65,N*2.2)),wt=Math.max(18,Math.min(65,D*2.2)),Z=12,z=dt+8,F=wt+8,U=Z+4,V=c.fov*Math.PI/180,K=Math.max(.1,c.aspect),ut=(z+F)*.72,R=(U*1.1+(z+F)*.35)/(2*Math.tan(V/2)*.74),H=ut/(2*Math.tan(V/2)*K*.74),b=Math.max(R,H,22),it=.56,nt=Math.PI/4,at=Z*.38,lt=b*Math.cos(it)*Math.sin(nt),bt=at+b*Math.sin(it),tt=b*Math.cos(it)*Math.cos(nt);c.position.set(lt,bt,tt),c.near=.5,c.far=Math.max(3e3,b*25),c.updateProjectionMatrix(),d.target.set(0,at,0),d.minDistance=Math.max(5,b*.15),d.maxDistance=Math.max(120,b*6),d.update()}function O(){B()}function I(){if(!e.value)return;const $=e.value.clientWidth||800,k=e.value.clientHeight||600;l=new Yw,l.background=new qt(461588),l.fog=null,c=new bn(45,$/k,.5,3e3),u=new jw({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize($,k),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=Si,e.value.appendChild(u.domElement),d=new aT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const q=new nT(16777215,.88);l.add(q);const mt=new Fl(16777215,.45);mt.position.set(40,60,40),l.add(mt);const N=new Fl(16777215,.35);N.position.set(-40,50,-40),l.add(N);const D=new Fl(16777215,.25);D.position.set(0,40,-50),l.add(D),p=new iT,v=new $t(-999,-999),l.add(h),l.add(w),L=new ResizeObserver(()=>{vt()}),L.observe(e.value),window.addEventListener("resize",vt),e.value.addEventListener("mousemove",E),e.value.addEventListener("mouseleave",T),M(),B(),ct()}function M(){if(!l)return;for(;h.children.length>0;){const _t=h.children[0];h.remove(_t)}for(;w.children.length>0;){const _t=w.children[0];w.remove(_t)}_=[],g=null,i.value=null,r.value.visible=!1;const $=t.points;if(!$||$.length===0)return;const k=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((_t,yt)=>_t-yt):[...new Set($.map(_t=>_t.voltageTarget))].sort((_t,yt)=>_t-yt),q=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((_t,yt)=>_t-yt):[...new Set($.map(_t=>_t.loadTarget))].sort((_t,yt)=>_t-yt),mt=Math.max(1,k.length),N=Math.max(1,q.length),D=Math.max(18,Math.min(65,mt*2.2)),dt=Math.max(18,Math.min(65,N*2.2)),wt=12,Z=mt>1?D/(mt-1):D,z=N>1?dt/(N-1):dt,F=Math.max(.12,Math.min(1.5,Z*.7)),U=Math.max(.12,Math.min(1.5,z*.7)),V=new Map;$.forEach(_t=>{if(_t.status==="completed"||_t.timestamp>0){const yt=`${_t.voltageTarget.toFixed(3)}_${_t.loadTarget.toFixed(3)}`;V.set(yt,_t)}});const ut=Math.max(D,dt)+14,y=Math.max(12,Math.min(40,Math.max(mt,N))),R=new sT(ut,y,165063,1976635);R.position.set(0,0,0),h.add(R);const H=new ro(ut*1.4,ut*1.4),b=new Df({color:725280,roughness:.7,metalness:.1}),it=new Nn(H,b);it.rotation.x=-Math.PI/2,it.position.y=-.05,it.receiveShadow=!0,h.add(it);const nt=new va({color:3718648,linewidth:2}),at=new en().setFromPoints([new et(-D/2-1,0,dt/2+1),new et(D/2+2,0,dt/2+1)]);h.add(new Nr(at,nt));const lt=j("X: 输入电压 Vin (V)",22,"#38bdf8");lt.position.set(0,.4,dt/2+3.2),lt.scale.set(7.5,1.9,1),h.add(lt);const bt=10,tt=Math.max(1,Math.ceil(mt/bt));k.forEach((_t,yt)=>{if(yt%tt===0||yt===mt-1){const St=-D/2+(mt>1?yt/(mt-1)*D:0),Tt=j(`${_t}V`,16,"#94a3b8");Tt.position.set(St,.2,dt/2+1.8),Tt.scale.set(Math.min(3.2,Z*1.5),.9,1),h.add(Tt)}});const A=new en().setFromPoints([new et(-D/2-1,0,-dt/2-1),new et(-D/2-1,0,dt/2+2)]);h.add(new Nr(A,nt));const x=s.value==="power"||t.loadMode==="CW",G=x?"W":"A",ht=j(x?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");ht.position.set(-D/2-3.8,.4,0),ht.scale.set(8.5,2.1,1),h.add(ht);const W=Math.max(1,Math.ceil(N/bt));q.forEach((_t,yt)=>{if(yt%W===0||yt===N-1){const St=-dt/2+(N>1?yt/(N-1)*dt:0),Tt=j(`${_t}${G}`,16,"#94a3b8");Tt.position.set(-D/2-2.2,.2,St),Tt.scale.set(Math.min(3.2,z*1.5),.9,1),h.add(Tt)}});const P=new en().setFromPoints([new et(-D/2-1,0,dt/2+1),new et(-D/2-1,wt+1.5,dt/2+1)]);h.add(new Nr(P,nt));const Y=j("Z: 转换效率 η (%)",22,"#10b981");Y.position.set(-D/2-1,wt+2.4,dt/2+1),Y.scale.set(7.5,1.9,1),h.add(Y),[20,40,60,80,100].forEach(_t=>{const yt=_t/100*wt,St=j(`${_t}%`,16,"#6ee7b7");St.position.set(-D/2-2,yt,dt/2+1),St.scale.set(2.8,.8,1),h.add(St);const Tt=new en().setFromPoints([new et(-D/2-.8,yt,dt/2+1),new et(-D/2-.2,yt,dt/2+1)]);h.add(new Nr(Tt,nt))}),k.forEach((_t,yt)=>{q.forEach((St,Tt)=>{const Bt=`${_t.toFixed(3)}_${St.toFixed(3)}`,Nt=V.get(Bt);if(!Nt)return;const Ct=-D/2+(mt>1?yt/(mt-1)*D:0),Jt=-dt/2+(N>1?Tt/(N-1)*dt:0),Gt=Math.max(.5,Math.min(100,Nt.efficiency)),ie=Math.max(.2,Gt/100*wt),X=new pr(F,ie,U);X.translate(0,ie/2,0),X.computeBoundingBox(),X.computeBoundingSphere();const Rt=S(Gt),gt=new Df({color:Rt,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),Mt=new Nn(X,gt);Mt.position.set(Ct,0,Jt),Mt.castShadow=!0,Mt.receiveShadow=!0,Mt.__barPoint=Nt;const Pt=new Qw(X),Et=new va({color:16777215,transparent:!0,opacity:.25}),Ft=new $p(Pt,Et);Mt.add(Ft),w.add(Mt),Mt.scale.set(1,.01,1),_.push({mesh:Mt,wireframe:Ft,point:Nt,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ie,material:gt,origColor:Rt.clone()})})}),B()}function E($){if(!e.value)return;const k=e.value.getBoundingClientRect();v.x=($.clientX-k.left)/k.width*2-1,v.y=-(($.clientY-k.top)/k.height)*2+1,r.value.x=$.clientX-k.left,r.value.y=$.clientY-k.top}function T(){v.x=-999,v.y=-999,r.value.visible=!1,g&&ot()}function ot(){g&&(g.targetElevation=0,g.wireframe.material.opacity=.25,g.wireframe.material.color.set(16777215),g=null,i.value=null,r.value.visible=!1)}function rt(){if(!c||!l||_.length===0)return;p.setFromCamera(v,c);const $=_.map(q=>q.mesh),k=p.intersectObjects($,!1);if(k.length>0){const q=k[0].object,mt=_.find(N=>N.mesh===q);mt&&mt!==g&&(g&&ot(),g=mt,i.value=mt.point,r.value.visible=!0,mt.targetElevation=1.2,mt.wireframe.material.opacity=.9,mt.wireframe.material.color.set(54015))}else g&&ot()}function ct(){f=requestAnimationFrame(ct),d&&d.update(),rt(),_.forEach($=>{$.currentScaleY+=($.targetScaleY-$.currentScaleY)*.1,$.mesh.scale.y=$.currentScaleY,$.currentElevation+=($.targetElevation-$.currentElevation)*.15,$.mesh.position.y=$.baseY+$.currentElevation}),u&&l&&c&&u.render(l,c)}function vt(){if(!e.value||!u||!c)return;const $=e.value.clientWidth,k=e.value.clientHeight;$===0||k===0||(c.aspect=$/k,c.updateProjectionMatrix(),u.setSize($,k))}return _s(()=>t.points,()=>{M()},{deep:!0}),dr(()=>{I()}),fr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",vt),L&&(L.disconnect(),L=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),($,k)=>(Ut(),Ot("div",yT,[m("div",bT,[m("div",MT,[k[2]||(k[2]=Yr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5e3b1907><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-5e3b1907></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-5e3b1907></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-5e3b1907></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-5e3b1907>3D 空间特征柱状图</span>',2)),m("span",ST,"| X: Vin | Y: "+xt(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ut(),Ot("div",ET,[m("span",wT," 选定点 #"+xt(i.value.stepIndex)+": ",1),m("span",null,[k[3]||(k[3]=Dt("Vin: ",-1)),m("b",TT,xt(i.value.vin.toFixed(3))+"V",1)]),m("span",null,[k[4]||(k[4]=Dt("Iin: ",-1)),m("b",AT,xt(i.value.iin.toFixed(3))+"A",1)]),m("span",null,[k[5]||(k[5]=Dt("Pin: ",-1)),m("b",CT,xt(i.value.pin.toFixed(3))+"W",1)]),m("span",null,[k[6]||(k[6]=Dt("Vout: ",-1)),m("b",RT,xt(i.value.vout.toFixed(3))+"V",1)]),m("span",null,[k[7]||(k[7]=Dt("Iout: ",-1)),m("b",PT,xt(i.value.iout.toFixed(3))+"A",1)]),m("span",null,[k[8]||(k[8]=Dt("Pout: ",-1)),m("b",LT,xt(i.value.pout.toFixed(3))+"W",1)]),m("span",DT," 效率 η: "+xt(i.value.efficiency.toFixed(2))+"% ",1)])):(Ut(),Ot("div",IT,[...k[9]||(k[9]=[m("span",{style:{color:"#ecc94b"}},"💡",-1),m("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),m("div",UT,[m("div",NT,[m("button",{class:"btn",style:pe({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[0]||(k[0]=q=>a("current"))}," Y: 负载电流 (A) ",4),m("button",{class:"btn",style:pe({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[1]||(k[1]=q=>a("power"))}," Y: 输出功率 (W) ",4)]),m("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:O,title:"重置视角"}," 重置视角 ")])]),m("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ut(),Ot("div",{key:0,style:pe([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[m("div",OT,[m("span",null,"采样点 #"+xt(i.value.stepIndex),1),m("span",FT,"η = "+xt(i.value.efficiency.toFixed(2))+"%",1)]),m("div",BT,[m("div",null,[k[10]||(k[10]=Dt("Vin: ",-1)),m("span",zT,xt(i.value.vin.toFixed(2))+"V",1)]),m("div",null,[k[11]||(k[11]=Dt("Vout: ",-1)),m("span",VT,xt(i.value.vout.toFixed(2))+"V",1)]),m("div",null,[k[12]||(k[12]=Dt("Iin: ",-1)),m("span",null,xt(i.value.iin.toFixed(3))+"A",1)]),m("div",null,[k[13]||(k[13]=Dt("Iout: ",-1)),m("span",null,xt(i.value.iout.toFixed(3))+"A",1)]),m("div",null,[k[14]||(k[14]=Dt("Pin: ",-1)),m("span",null,xt(i.value.pin.toFixed(2))+"W",1)]),m("div",null,[k[15]||(k[15]=Dt("Pout: ",-1)),m("span",null,xt(i.value.pout.toFixed(2))+"W",1)])])],4)):Ee("",!0),k[16]||(k[16]=Yr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-5e3b1907><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-5e3b1907><span data-v-5e3b1907>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-5e3b1907>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-5e3b1907></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-5e3b1907><span data-v-5e3b1907>&lt;70% 低效</span><span data-v-5e3b1907>85%</span><span data-v-5e3b1907>&gt;95% 高效</span></div></div>',1))],512)]))}}),HT=cu(kT,[["__scopeId","data-v-5e3b1907"]]),GT={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},WT={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},$T={style:{display:"flex","align-items":"center",gap:"12px"}},XT={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},qT={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},jT={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},YT={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},KT={style:{color:"#68d391","font-size":"13px"}},ZT={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},JT={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},QT={style:{color:"#4fd1c5","font-size":"12px"}},tA={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},eA={style:{color:"#ecc94b"}},nA={style:{display:"flex","align-items":"center",gap:"8px"}},iA={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},sA=["value"],rA={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},oA={style:{width:"100%",height:"100%",position:"relative"}},aA={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},lA={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},cA={style:{flex:"1",overflow:"auto",padding:"12px"}},uA={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},dA={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},fA={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},hA={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},pA=["onClick"],mA={key:1,style:{color:"#4a5568"}},gA={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},_A={style:{color:"#63b3ed","font-weight":"bold"}},vA={style:{color:"#ecc94b"}},xA={style:{color:"#63b3ed"}},yA={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},bA=Ai({__name:"Result3DView",setup(n){const t=Uv(),e=lp(),i=jt(null),s=jt([]),r=jt(""),o=jt(null),a=jt("3d");async function l(){const v=t.params.id||"";if(s.value=await up(),v){const _=await Q0(v);if(_){i.value=_,r.value=_.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(v,_){if(i.value)return i.value.points.find(g=>Math.abs(g.voltageTarget-v)<1e-4&&Math.abs(g.loadTarget-_)<1e-4)}function u(v){return v>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:v>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:v>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&Zo(i.value)}function p(){window.opener?window.close():e.push("/")}return _s(()=>t.params.id,()=>{l()}),dr(()=>{l()}),(v,_)=>{var h,w,L,S,j,B,O,I;const g=ru("router-link");return Ut(),Ot("div",GT,[m("header",WT,[m("div",$T,[Ue(g,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:iu(()=>[..._[5]||(_[5]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 控制台 ",-1)])]),_:1}),m("div",null,[m("div",XT,[m("span",null,xt(((h=i.value)==null?void 0:h.title)||"测试结果数据查看"),1),_[6]||(_[6]=m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),m("div",qT," 测试时间: "+xt(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+xt((L=(w=i.value)==null?void 0:w.config)==null?void 0:L.voltageMin)+"V~"+xt((j=(S=i.value)==null?void 0:S.config)==null?void 0:j.voltageMax)+"V, "+xt((O=(B=i.value)==null?void 0:B.config)==null?void 0:O.loadMode),1)])]),(I=i.value)!=null&&I.summary?(Ut(),Ot("div",jT,[m("div",YT,[m("span",null,[_[7]||(_[7]=Dt("峰值效率 η_max: ",-1)),m("b",KT,xt(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ut(),Ot("span",ZT," (@"+xt(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+xt(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Ee("",!0)]),m("div",JT,[m("span",null,[_[8]||(_[8]=Dt("平均效率 η_avg: ",-1)),m("b",QT,xt(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),m("div",tA,[m("span",null,[_[9]||(_[9]=Dt("矩阵测试点: ",-1)),m("b",eA,xt(i.value.points.length)+" 点",1)])])])):Ee("",!0),m("div",nA,[m("div",iA,[m("button",{class:"btn",style:pe({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[0]||(_[0]=M=>a.value="3d")}," 3D 空间柱状图 ",4),m("button",{class:"btn",style:pe({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[1]||(_[1]=M=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?re((Ut(),Ot("select",{key:0,"onUpdate:modelValue":_[2]||(_[2]=M=>r.value=M),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ut(!0),Ot(Le,null,yi(s.value,M=>(Ut(),Ot("option",{key:M.id,value:M.id},xt(M.title),9,sA))),128))],544)),[[Ks,r.value]]):Ee("",!0),i.value?(Ut(),Ot("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[..._[10]||(_[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Dt(" 下载 CSV ",-1)])])):Ee("",!0),m("button",{class:"btn",style:{padding:"4px 8px"},onClick:p,title:"关闭页面"}," ✕ ")])]),m("div",rA,[re(m("div",oA,[i.value&&i.value.points.length>0?(Ut(),lu(HT,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ut(),Ot("div",aA," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[Ju,a.value==="3d"]]),re(m("div",lA,[_[17]||(_[17]=Yr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),m("div",cA,[i.value?(Ut(),Ot("table",uA,[m("thead",null,[m("tr",dA,[m("th",fA," 负载 ("+xt(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ut(!0),Ot(Le,null,yi(i.value.voltageSteps,M=>(Ut(),Ot("th",{key:M,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},xt(M)+"V ",1))),128))])]),m("tbody",null,[(Ut(!0),Ot(Le,null,yi(i.value.loadSteps,M=>(Ut(),Ot("tr",{key:M,style:{"border-bottom":"1px solid #2d3748"}},[m("td",hA,xt(M)+xt(i.value.config.loadMode==="CC"?"A":"W"),1),(Ut(!0),Ot(Le,null,yi(i.value.voltageSteps,E=>(Ut(),Ot("td",{key:E,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:_[3]||(_[3]=T=>T.currentTarget.style.transform="scale(1.04)"),onMouseleave:_[4]||(_[4]=T=>T.currentTarget.style.transform="scale(1.0)"),onClick:T=>o.value=c(E,M)||null},[c(E,M)?(Ut(),Ot("div",{key:0,style:pe([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(E,M).efficiency)])},xt(c(E,M).efficiency.toFixed(2))+"% ",5)):(Ut(),Ot("span",mA,"--"))],40,pA))),128))]))),128))])])):Ee("",!0)]),o.value?(Ut(),Ot("div",gA,[m("span",_A," 选定点 (#"+xt(o.value.stepIndex)+"): ",1),m("span",null,"目标: "+xt(o.value.voltageTarget)+"V / "+xt(o.value.loadTarget)+xt(o.value.loadMode),1),m("span",null,[_[11]||(_[11]=Dt("实测Vin: ",-1)),m("b",vA,xt(o.value.vin.toFixed(3))+"V",1)]),m("span",null,[_[12]||(_[12]=Dt("实测Iin: ",-1)),m("b",null,xt(o.value.iin.toFixed(3))+"A",1)]),m("span",null,[_[13]||(_[13]=Dt("实测Pin: ",-1)),m("b",null,xt(o.value.pin.toFixed(3))+"W",1)]),m("span",null,[_[14]||(_[14]=Dt("实测Vout: ",-1)),m("b",xA,xt(o.value.vout.toFixed(3))+"V",1)]),m("span",null,[_[15]||(_[15]=Dt("实测Iout: ",-1)),m("b",null,xt(o.value.iout.toFixed(3))+"A",1)]),m("span",null,[_[16]||(_[16]=Dt("实测Pout: ",-1)),m("b",null,xt(o.value.pout.toFixed(3))+"W",1)]),m("span",yA," 效率 η: "+xt(o.value.efficiency.toFixed(2))+"% ",1)])):Ee("",!0)],512),[[Ju,a.value==="matrix"]])])])}}}),MA={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},SA={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},EA={style:{display:"flex","align-items":"center",gap:"12px"}},wA={style:{display:"flex","align-items":"center",gap:"10px"}},TA={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},AA={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},CA={style:{flex:"1","border-right":"1px solid #2d3748",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},RA={class:"group-box",style:{"margin-top":"0","border-color":"#2b6cb0"}},PA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},LA={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},DA={style:{"font-family":"monospace",color:"#63b3ed"}},IA={style:{display:"flex","align-items":"center",gap:"6px"}},UA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},NA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},OA={style:{display:"flex",gap:"6px"}},FA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},BA={style:{display:"flex",gap:"6px"}},zA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},VA={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},kA={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},HA={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},GA={style:{"margin-bottom":"12px"}},WA={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},$A={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ecc94b"}},XA={style:{color:"#ecc94b","font-weight":"bold","font-size":"16px"}},qA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #48bb78"}},jA={style:{color:"#48bb78","font-weight":"bold","font-size":"16px"}},YA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},KA={style:{color:"#ed8936","font-weight":"bold","font-size":"16px"}},ZA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},JA={style:{display:"flex",gap:"6px"}},QA={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},tC={class:"group-box",style:{"margin-top":"0","border-color":"#c05621"}},eC={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},nC={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},iC={style:{"font-family":"monospace",color:"#ed8936"}},sC={style:{display:"flex","align-items":"center",gap:"6px"}},rC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},oC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},aC={style:{display:"flex",gap:"6px"}},lC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},cC={style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},uC={style:{color:"#ed8936","font-family":"monospace"}},dC={style:{display:"flex",gap:"6px"}},fC=["step"],hC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},pC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},mC={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},gC={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},_C={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},vC={style:{"margin-bottom":"12px"}},xC={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},yC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #63b3ed"}},bC={style:{color:"#63b3ed","font-weight":"bold","font-size":"15px"}},MC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},SC={style:{color:"#ed8936","font-weight":"bold","font-size":"15px"}},EC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #f56565"}},wC={style:{color:"#f56565","font-weight":"bold","font-size":"15px"}},TC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #9f7aea"}},AC={style:{color:"#b794f4","font-weight":"bold","font-size":"15px"}},CC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},RC={style:{display:"flex",gap:"6px"}},PC={style:{height:"180px","background-color":"#0d1117","border-top":"1px solid #2d3748",display:"flex","flex-direction":"column"}},LC={style:{height:"28px","background-color":"#161b22","border-bottom":"1px solid #30363d",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 12px","font-size":"11px","font-weight":"bold"}},DC={style:{color:"#6e7681"}},IC={key:0,style:{color:"#484f58","font-style":"italic"}},UC=Ai({__name:"SingleInstrumentView",setup(n){const t=pa.getInstance(),e=jt(!1),i=jt(115200),s=jt(115200),r=jt(5),o=jt(2),a=jt(!1),l=jt(""),c=Mn({vin:0,iin:0,pin:0}),u=jt("CC"),d=jt(1),f=jt(!1),p=jt(!1),v=jt(""),_=Mn({vout:0,iout:0,pout:0,r:0}),g=jt([]),h=jt(null);function w(z,F="#7ee787"){const U=new Date().toLocaleTimeString();g.value.push({time:U,text:z,color:F}),g.value.length>300&&g.value.shift(),setTimeout(()=>{h.value&&(h.value.scrollTop=h.value.scrollHeight)},10)}const L=ze(()=>{switch(u.value){case"CC":return"A";case"CV":return"V";case"CW":return"W";case"CR":return"Ω"}}),S=ze(()=>{switch(u.value){case"CC":return"0 ~ 30A (步进 0.1A)";case"CV":return"0 ~ 60V (步进 0.5V)";case"CW":return"0 ~ 150W (步进 1W)";case"CR":return"0.1 ~ 1000Ω (步进 1Ω)"}}),j=ze(()=>{switch(u.value){case"CC":return .1;case"CV":return .5;case"CW":return 1;case"CR":return .5}});function B(){switch(u.value){case"CC":d.value=1;break;case"CV":d.value=5;break;case"CW":d.value=10;break;case"CR":d.value=5;break}}async function O(){try{await t.setPsuVoltageOnly(r.value),w(`[PSU] 设置电压指令成功 (:APPLy CH1,${r.value.toFixed(3)},${o.value.toFixed(3)}) -> ${r.value.toFixed(3)} V`,"#ecc94b")}catch(z){w(`[PSU 错误] 设置电压失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function I(){try{await t.setPsuCurrentLimitOnly(o.value),w(`[PSU] 设置限流指令成功 (:APPLy CH1,${r.value.toFixed(3)},${o.value.toFixed(3)}) -> ${o.value.toFixed(3)} A`,"#48bb78")}catch(z){w(`[PSU 错误] 设置限流失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function M(z){try{await t.setPsuOutput(z,r.value,o.value),a.value=z,w(`[PSU] 电源输出开关指令已生效 -> ${z?"开启 (ON)":"关闭 (OFF)"}`,z?"#3fb950":"#f85149")}catch(F){w(`[PSU 错误] 输出切换失败: ${(F==null?void 0:F.message)||F}`,"#f85149")}}async function E(){const z=l.value.trim();if(z){w(`[PSU TX] >> ${z}`,"#58a6ff");try{const F=await t.sendPsuRawSCPI(z);w(`[PSU RX] << ${F}`,"#7ee787")}catch(F){w(`[PSU ERR] << ${(F==null?void 0:F.message)||F}`,"#f85149")}l.value=""}}async function T(){if(t.psu.state.connected)await t.psu.disconnect(),a.value=!1,w("[PSU] 电源连接已断开","#a0aec0");else try{if(e.value)t.psu.connectVirtual(),w("[PSU] 虚拟仿真电源驱动已连接","#3fb950");else{await t.psu.connectPhysical(i.value),w(`[PSU] 物理电源串口连接成功 (${i.value}bps)`,"#3fb950");const z=await t.queryPsuStatus();a.value=z.outputOn,z.setVoltage>0&&(r.value=z.setVoltage),z.setCurrentLimit>0&&(o.value=z.setCurrentLimit)}}catch(z){w(`[PSU 错误] 连接失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function ot(){try{await t.setLoadModeAndValue(u.value,d.value),w(`[LOAD] 应用设定成功: 模式=${u.value}, 目标值=${d.value} ${L.value}`,"#ed8936")}catch(z){w(`[LOAD 错误] 应用负载设定失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function rt(z){try{await t.setLoadModeAndValue(u.value,d.value),await t.setLoadInputState(z),f.value=z,w(`[LOAD] 负载带载开关已生效 -> ${z?"带载中 (ON)":"停止带载 (OFF)"}`,z?"#3fb950":"#f85149")}catch(F){w(`[LOAD 错误] 带载开关失败: ${(F==null?void 0:F.message)||F}`,"#f85149")}}async function ct(){p.value=!p.value;try{await t.setLoadShortState(p.value),w(`[LOAD] 短路测试状态切换 -> ${p.value?"短路开启 (ON)":"短路关闭 (OFF)"}`,"#e3b341")}catch(z){w(`[LOAD 错误] 短路测试指令失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function vt(){try{await t.clearLoadProtectionState(),w("[LOAD] 保护状态已复位 (:INP 0)","#58a6ff")}catch(z){w(`[LOAD 错误] 清除保护失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function $(){const z=v.value.trim();if(z){w(`[LOAD TX] >> ${z}`,"#f0883e");try{const F=await t.sendLoadRawSCPI(z);w(`[LOAD RX] << ${F}`,"#7ee787")}catch(F){w(`[LOAD ERR] << ${(F==null?void 0:F.message)||F}`,"#f85149")}v.value=""}}async function k(){if(t.load.state.connected)await t.load.disconnect(),f.value=!1,w("[LOAD] 电子负载连接已断开","#a0aec0");else try{if(e.value)t.load.connectVirtual(),w("[LOAD] 虚拟仿真电子负载驱动已连接","#3fb950");else{await t.load.connectPhysical(s.value),w(`[LOAD] 物理电子负载串口连接成功 (${s.value}bps)`,"#3fb950");const z=await t.queryLoadStatus();f.value=z.inputOn,u.value=z.mode,z.targetVal>0&&(d.value=z.targetVal)}}catch(z){w(`[LOAD 错误] 连接失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}function q(){e.value?(t.autoConnectVirtual(),w("🧪 已切换至虚拟仿真演示模式","#3fb950")):(t.emergencyStopAll(),t.psu.disconnect(),t.load.disconnect(),w("🔌 已切换至物理真实串口模式，请点击连接打开串口","#58a6ff"))}async function mt(){await t.emergencyStopAll(),a.value=!1,f.value=!1,w("🛑 紧急停止已触发: 电源输出已关闭，负载已停止带载","#f85149")}let N=null,D=!1,dt=0;async function wt(){if(!D){D=!0;try{const z=await t.measureAsync();if(c.vin=z.vin,c.iin=z.iin,c.pin=z.pin,_.vout=z.vout,_.iout=z.iout,_.pout=z.pout,_.r=z.iout>.005?z.vout/z.iout:0,dt++,dt%4===0){if(t.psu.state.connected){const F=await t.queryPsuStatus();a.value=F.outputOn;const U=document.activeElement;(U==null?void 0:U.getAttribute("data-field"))!=="psuSetV"&&F.setVoltage>0&&(r.value=F.setVoltage),(U==null?void 0:U.getAttribute("data-field"))!=="psuSetI"&&F.setCurrentLimit>0&&(o.value=F.setCurrentLimit)}if(t.load.state.connected){const F=await t.queryLoadStatus();f.value=F.inputOn,p.value=F.isShort;const U=document.activeElement;(U==null?void 0:U.getAttribute("data-field"))!=="loadMode"&&(u.value=F.mode),(U==null?void 0:U.getAttribute("data-field"))!=="loadParamVal"&&F.targetVal>0&&(d.value=F.targetVal)}}}catch{}finally{D=!1}}}function Z(){t.emergencyStopAll().catch(()=>{})}return dr(()=>{w("单仪器测试工作台已启动就绪。可独立调试电源电压/限流/开关与电子负载四模拉载。","#58a6ff"),N=window.setInterval(wt,350),window.addEventListener("beforeunload",Z)}),fr(()=>{N&&clearInterval(N),window.removeEventListener("beforeunload",Z)}),(z,F)=>{const U=ru("router-link");return Ut(),Ot("div",MA,[m("header",SA,[m("div",EA,[Ue(U,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回测试工作台主界面"},{default:iu(()=>[...F[14]||(F[14]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 返回控制台 ",-1)])]),_:1}),F[15]||(F[15]=m("div",null,[m("div",{style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},[m("span",null,"🔧 仪器底层单体测试与硬件调试工作台 (Single Instrument Debugger)"),m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#2c5282",color:"#90cdf4",border:"1px solid #3182ce"}}," 单仪器独立控制 ")]),m("div",{style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}}," 支持电源独立加压/限流/开关输出，负载四模(CC/CV/CP/CR)单独带载，以及原始 SCPI 串口收发 ")],-1))]),m("div",wA,[m("label",TA,[re(m("input",{type:"checkbox","onUpdate:modelValue":F[0]||(F[0]=V=>e.value=V),onChange:q},null,544),[[zi,e.value]]),F[16]||(F[16]=Dt(" 🧪 仿真演示驱动 ",-1))]),m("button",{class:"btn btn-danger",style:{padding:"4px 12px","font-weight":"bold","font-size":"11.5px"},onClick:mt}," 🛑 一键关闭所有输出 ")])]),m("div",AA,[m("div",CA,[m("div",RA,[F[29]||(F[29]=m("div",{class:"group-title",style:{color:"#63b3ed"}},[m("span",null,"⚡ 高精度直流电源单体测试 (RIGOL DP700 系列)")],-1)),m("div",PA,[m("div",LA,[m("span",{style:pe([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Kt(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),F[17]||(F[17]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"电源状态:",-1)),m("span",DA,xt(Kt(t).psu.state.portName),1)]),m("div",IA,[!Kt(t).psu.state.connected&&!e.value?re((Ut(),Ot("select",{key:0,"onUpdate:modelValue":F[1]||(F[1]=V=>i.value=V),style:{padding:"2px 4px","font-size":"11px",background:"#1a202c",color:"#e2e8f0",border:"1px solid #4a5568","border-radius":"4px"},title:"选择电源波特率"},[...F[18]||(F[18]=[m("option",{value:115200},"115200",-1),m("option",{value:9600},"9600",-1),m("option",{value:19200},"19200",-1),m("option",{value:38400},"38400",-1)])],512)),[[Ks,i.value,void 0,{number:!0}]]):Ee("",!0),m("button",{class:"btn",style:pe([{backgroundColor:Kt(t).psu.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:T},xt(Kt(t).psu.state.connected?"断开连接":"连接电源"),5)])]),m("div",UA,[m("div",NA,[F[19]||(F[19]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定输出电压 (V):"),m("span",{style:{color:"#ecc94b","font-family":"monospace"}},"0 ~ 60V")],-1)),m("div",OA,[re(m("input",{type:"number","onUpdate:modelValue":F[2]||(F[2]=V=>r.value=V),"data-field":"psuSetV",step:"0.5",min:"0",max:"60",style:{flex:"1","font-weight":"bold",color:"#ecc94b","font-size":"14px"}},null,512),[[Be,r.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:O}," 应用电压 ")])]),m("div",FA,[F[20]||(F[20]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定最大限流 (A):"),m("span",{style:{color:"#48bb78","font-family":"monospace"}},"0 ~ 10A")],-1)),m("div",BA,[re(m("input",{type:"number","onUpdate:modelValue":F[3]||(F[3]=V=>o.value=V),"data-field":"psuSetI",step:"0.1",min:"0.1",max:"10",style:{flex:"1","font-weight":"bold",color:"#48bb78","font-size":"14px"}},null,512),[[Be,o.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:I}," 应用限流 ")])])]),m("div",zA,[m("button",{class:"btn",style:pe([{backgroundColor:a.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:a.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:F[4]||(F[4]=V=>M(!0))}," ▶ 开始输出 (Output ON) ",4),m("button",{class:"btn",style:pe([{backgroundColor:a.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:F[5]||(F[5]=V=>M(!1))}," ⏹ 停止输出 (Output OFF) ",4)]),m("div",VA,[a.value?(Ut(),Ot("span",kA," ● 电源通道输出已开启 (ON) ")):(Ut(),Ot("span",HA," ○ 电源通道输出已关闭 (OFF) "))]),m("div",GA,[F[27]||(F[27]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 电源实测遥测数据 (Telemetry): ",-1)),m("div",WA,[m("div",$A,[F[22]||(F[22]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vin:",-1)),m("div",XA,[Dt(xt(c.vin.toFixed(3))+" ",1),F[21]||(F[21]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",qA,[F[24]||(F[24]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iin:",-1)),m("div",jA,[Dt(xt(c.iin.toFixed(3))+" ",1),F[23]||(F[23]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",YA,[F[26]||(F[26]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pin:",-1)),m("div",KA,[Dt(xt(c.pin.toFixed(3))+" ",1),F[25]||(F[25]=m("span",{style:{"font-size":"10px"}},"W",-1))])])])]),m("div",ZA,[F[28]||(F[28]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送电源原始 SCPI 指令 (如 :MEAS:ALL? 或 *IDN?):",-1)),m("div",JA,[re(m("input",{type:"text","onUpdate:modelValue":F[6]||(F[6]=V=>l.value=V),placeholder:":APPL CH1,12,2 或 :OUTP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(E,["enter"])},null,544),[[Be,l.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:E}," 发送指令 ")])])])]),m("div",QA,[m("div",tC,[F[44]||(F[44]=m("div",{class:"group-title",style:{color:"#ed8936"}},[m("span",null,"🔋 可编程电子负载单体测试 (UNI-T UTL8500 系列)")],-1)),m("div",eC,[m("div",nC,[m("span",{style:pe([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Kt(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),F[30]||(F[30]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"负载状态:",-1)),m("span",iC,xt(Kt(t).load.state.portName),1)]),m("div",sC,[!Kt(t).load.state.connected&&!e.value?re((Ut(),Ot("select",{key:0,"onUpdate:modelValue":F[7]||(F[7]=V=>s.value=V),style:{padding:"2px 4px","font-size":"11px",background:"#1a202c",color:"#e2e8f0",border:"1px solid #4a5568","border-radius":"4px"},title:"选择负载波特率"},[...F[31]||(F[31]=[m("option",{value:115200},"115200",-1),m("option",{value:9600},"9600",-1),m("option",{value:19200},"19200",-1),m("option",{value:38400},"38400",-1)])],512)),[[Ks,s.value,void 0,{number:!0}]]):Ee("",!0),m("button",{class:"btn",style:pe([{backgroundColor:Kt(t).load.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:k},xt(Kt(t).load.state.connected?"断开连接":"连接负载"),5)])]),m("div",rC,[m("div",oC,[F[33]||(F[33]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px"}}," 工作模式选择: ",-1)),m("div",aC,[re(m("select",{"onUpdate:modelValue":F[8]||(F[8]=V=>u.value=V),"data-field":"loadMode",style:{flex:"1","font-weight":"bold",color:"#63b3ed"},onChange:B},[...F[32]||(F[32]=[m("option",{value:"CC"},"CC (定电流模式)",-1),m("option",{value:"CV"},"CV (定电压模式)",-1),m("option",{value:"CW"},"CP/CW (定功率模式)",-1),m("option",{value:"CR"},"CR (定电阻模式)",-1)])],544),[[Ks,u.value]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:ot}," 应用模式 ")])]),m("div",lC,[m("div",cC,[m("span",null,"设定值 ("+xt(L.value)+"):",1),m("span",uC,xt(S.value),1)]),m("div",dC,[re(m("input",{type:"number","onUpdate:modelValue":F[9]||(F[9]=V=>d.value=V),"data-field":"loadParamVal",step:j.value,min:"0",style:{flex:"1","font-weight":"bold",color:"#ed8936","font-size":"14px"}},null,8,fC),[[Be,d.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:ot}," 应用设定 ")])])]),m("div",hC,[m("button",{class:"btn",style:pe([{backgroundColor:p.value?"#744210":"#2d3748",borderColor:"#d69e2e",color:"#fbd38d"},{padding:"6px","font-size":"11.5px","font-weight":"bold"}]),onClick:ct}," ⚡ "+xt(p.value?"退出短路测试 (Short OFF)":"短路测试 (Short ON)"),5),m("button",{class:"btn",style:{"background-color":"#2d3748",color:"#90cdf4","border-color":"#3182ce",padding:"6px","font-size":"11.5px","font-weight":"bold"},onClick:vt}," 🛡️ 清除保护状态 (Clear Prot) ")]),m("div",pC,[m("button",{class:"btn",style:pe([{backgroundColor:f.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:f.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:F[10]||(F[10]=V=>rt(!0))}," ▶ 开始带载 (Input ON) ",4),m("button",{class:"btn",style:pe([{backgroundColor:f.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:F[11]||(F[11]=V=>rt(!1))}," ⏹ 停止带载 (Input OFF) ",4)]),m("div",mC,[f.value?(Ut(),Ot("span",gC," ● 电子负载正在拉载 (ON) ")):(Ut(),Ot("span",_C," ○ 电子负载带载已关闭 (OFF) "))]),m("div",vC,[F[42]||(F[42]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 负载实测遥测数据 (Telemetry): ",-1)),m("div",xC,[m("div",yC,[F[35]||(F[35]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vout:",-1)),m("div",bC,[Dt(xt(_.vout.toFixed(3))+" ",1),F[34]||(F[34]=m("span",{style:{"font-size":"9px"}},"V",-1))])]),m("div",MC,[F[37]||(F[37]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iout:",-1)),m("div",SC,[Dt(xt(_.iout.toFixed(3))+" ",1),F[36]||(F[36]=m("span",{style:{"font-size":"9px"}},"A",-1))])]),m("div",EC,[F[39]||(F[39]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pout:",-1)),m("div",wC,[Dt(xt(_.pout.toFixed(3))+" ",1),F[38]||(F[38]=m("span",{style:{"font-size":"9px"}},"W",-1))])]),m("div",TC,[F[41]||(F[41]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"等效电阻 R:",-1)),m("div",AC,[Dt(xt(_.r.toFixed(2))+" ",1),F[40]||(F[40]=m("span",{style:{"font-size":"9px"}},"Ω",-1))])])])]),m("div",CC,[F[43]||(F[43]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送负载原始 SCPI 指令 (如 :MEAS:VOLT? 或 :SOUR:CURR 2.0):",-1)),m("div",RC,[re(m("input",{type:"text","onUpdate:modelValue":F[12]||(F[12]=V=>v.value=V),placeholder:":SOUR:FUNC CC 或 :SOUR:INP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd($,["enter"])},null,544),[[Be,v.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:$}," 发送指令 ")])])])])]),m("div",PC,[m("div",LC,[F[45]||(F[45]=m("span",{style:{color:"#7ee787",display:"flex","align-items":"center",gap:"6px"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("polyline",{points:"4 17 10 11 4 5"}),m("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]),Dt(" 底盘通信终端交互日志 (Serial & SCPI Terminal Log) ")],-1)),m("button",{class:"btn",style:{padding:"1px 6px","font-size":"10px"},onClick:F[13]||(F[13]=V=>g.value=[])}," 清空日志 ")]),m("div",{ref_key:"logContainerRef",ref:h,style:{flex:"1","overflow-y":"auto",padding:"8px 12px","font-family":"'Consolas', monospace","font-size":"11px","line-height":"1.5",color:"#7ee787"}},[(Ut(!0),Ot(Le,null,yi(g.value,(V,K)=>(Ut(),Ot("div",{key:K,style:pe({color:V.color})},[m("span",DC,"["+xt(V.time)+"]",1),Dt(" "+xt(V.text),1)],4))),128)),g.value.length===0?(Ut(),Ot("div",IC," 等待指令输入与硬件交互... ")):Ee("",!0)],512)])])}}}),NC=[{path:"/",name:"Console",component:Xy},{path:"/single-instrument",name:"SingleInstrument",component:UC},{path:"/debug",redirect:"/single-instrument"},{path:"/result/:id",name:"Result3D",component:bA,props:!0}],OC=Iv({history:dv(),routes:NC}),jp=b_(T_);jp.use(OC);jp.mount("#app");
