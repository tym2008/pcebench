var Jp=Object.defineProperty;var Qp=(n,t,e)=>t in n?Jp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Xt=(n,t,e)=>Qp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const _e={},fs=[],Kn=()=>{},zf=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),ze=Object.assign,Gc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},tm=Object.prototype.hasOwnProperty,oe=(n,t)=>tm.call(n,t),Ht=Array.isArray,Hi=n=>Qr(n)==="[object Map]",Ei=n=>Qr(n)==="[object Set]",Pu=n=>Qr(n)==="[object Date]",Jt=n=>typeof n=="function",Ce=n=>typeof n=="string",Zn=n=>typeof n=="symbol",he=n=>n!==null&&typeof n=="object",kf=n=>(he(n)||Jt(n))&&Jt(n.then)&&Jt(n.catch),Hf=Object.prototype.toString,Qr=n=>Hf.call(n),em=n=>Qr(n).slice(8,-1),Gf=n=>Qr(n)==="[object Object]",Wc=n=>Ce(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Nr=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nm=/-\w/g,en=ya(n=>n.replace(nm,t=>t.slice(1).toUpperCase())),im=/\B([A-Z])/g,Ki=ya(n=>n.replace(im,"-$1").toLowerCase()),ba=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),za=ya(n=>n?`on${ba(n)}`:""),jn=(n,t)=>!Object.is(n,t),Wo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Wf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ma=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Lu;const Sa=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function de(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ce(i)?am(i):de(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ce(n)||he(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,om=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function am(n){const t={};return n.replace(om,e=>e.startsWith("/*")?"":e).split(sm).forEach(e=>{if(e){const i=e.split(rm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function hi(n){let t="";if(Ce(n))t=n;else if(Ht(n))for(let e=0;e<n.length;e++){const i=hi(n[e]);i&&(t+=i+" ")}else if(he(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",cm=Hc(lm);function $f(n){return!!n||n===""}function um(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Bn(n[s],t[s],e);return i}function Du(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Bn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function dm(n,t,e){let i=Hi(n),s=Hi(t);if(i||s||(i=Ei(n),s=Ei(t),i||s))return i&&s?Du(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Bn(n[a],t[a],e))return!1}return String(n)===String(t)}function Iu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Bn(n,t,e){if(n===t)return!0;let i=Pu(n),s=Pu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Zn(n),s=Zn(t),i||s?n===t:(i=Ht(n),s=Ht(t),i||s?i&&s?Iu(n,t,e,um):!1:(i=he(n),s=he(t),i||s?!i||!s?!1:Iu(n,t,e,dm):String(n)===String(t))))}function $c(n,t){return n.findIndex(e=>Bn(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),yt=n=>Ce(n)?n:n==null?"":Ht(n)||he(n)&&(n.toString===Hf||!Jt(n.toString))?Xf(n)?yt(n.value):JSON.stringify(n,qf,2):String(n),qf=(n,t)=>Xf(t)?qf(n,t.value):Hi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[ka(i,r)+" =>"]=s,e),{})}:Ei(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>ka(e))}:Zn(t)?ka(t):he(t)&&!Ht(t)&&!Gf(t)?String(t):t,ka=(n,t="")=>{var e;return Zn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class fm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hm(){return Ve}let xe;const Ha=new WeakSet;class jf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ha.has(this)&&(Ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Zf(this);const t=xe,e=Un;xe=this,Un=!0;try{return this.fn()}finally{Jf(this),xe=t,Un=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)jc(t);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let Yf=0,Or,Fr;function Kf(n,t=!1){if(n.flags|=8,t){n.next=Fr,Fr=n;return}n.next=Or,Or=n}function Xc(){Yf++}function qc(){if(--Yf>0)return;if(Fr){let t=Fr;for(Fr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Or;){let t=Or;for(Or=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Zf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),jc(i),pm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Fl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gr)||(n.globalVersion=Gr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fl(n))))return;n.flags|=2;const t=n.dep,e=xe,i=Un;xe=n,Un=!0;try{Zf(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,Un=i,Jf(n),n.flags&=-3}}function jc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)jc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Un=!0;const th=[];function Jn(){th.push(Un),Un=!1}function Qn(){const n=th.pop();Un=n===void 0?!0:n}function Uu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let Gr=0;class mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!Un||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new mm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,eh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=i)}return e}trigger(t){this.version++,Gr++,this.notify(t)}notify(t){Xc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{qc()}}}function eh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)eh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bl=new WeakMap,gs=Symbol(""),Vl=Symbol(""),Wr=Symbol("");function $e(n,t,e){if(Un&&xe){let i=Bl.get(n);i||Bl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Yc),s.map=i,s.key=e),s.track()}}function mi(n,t,e,i,s,r){const o=Bl.get(n);if(!o){Gr++;return}const a=l=>{l&&l.trigger()};if(Xc(),t==="clear")o.forEach(a);else{const l=Ht(n),c=l&&Wc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Wr||!Zn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Wr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(gs)),Hi(n)&&a(o.get(Vl)));break;case"delete":l||(a(o.get(gs)),Hi(n)&&a(o.get(Vl)));break;case"set":Hi(n)&&a(o.get(gs));break}}qc()}function ws(n){const t=ue(n);return t===n||($e(t,"iterate",Wr),bn(n))?t:ti(n)?Gi(n)?t.map(e=>Xi(Sn(e))):t.map(Xi):t.map(Sn)}function Ea(n){return $e(n=ue(n),"iterate",Wr),n}function Wn(n,t){return ti(n)?Xi(Gi(n)?Sn(t):t):Sn(t)}const gm={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,n=>Wn(this,n))},concat(...n){return ws(this).concat(...n.map(t=>Ht(t)?ws(t):t))},entries(){return Ga(this,"entries",n=>(n[1]=Wn(this,n[1]),n))},every(n,t){return si(this,"every",n,t,void 0,arguments)},filter(n,t){return si(this,"filter",n,t,e=>e.map(i=>Wn(this,i)),arguments)},find(n,t){return si(this,"find",n,t,e=>Wn(this,e),arguments)},findIndex(n,t){return si(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return si(this,"findLast",n,t,e=>Wn(this,e),arguments)},findLastIndex(n,t){return si(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return si(this,"forEach",n,t,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return ws(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,t){return si(this,"map",n,t,void 0,arguments)},pop(){return vr(this,"pop")},push(...n){return vr(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return vr(this,"shift")},some(n,t){return si(this,"some",n,t,void 0,arguments)},splice(...n){return vr(this,"splice",n)},toReversed(){return ws(this).toReversed()},toSorted(n){return ws(this).toSorted(n)},toSpliced(...n){return ws(this).toSpliced(...n)},unshift(...n){return vr(this,"unshift",n)},values(){return Ga(this,"values",n=>Wn(this,n))}};function Ga(n,t,e){const i=Ea(n),s=i[t],r=s.call(i);if(i!==n&&!bn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Nu(r.next(),e),s!==nh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Nu(r._next(),e)}return r}function Nu(n,t){return n.done||(n.value=t(n.value)),n}const nh=Array.prototype;function si(n,t,e,i,s,r){const o=Ea(n),a=o!==n&&!bn(n),l=o[t];if(l!==nh[t]){const d=l.apply(n,r);return a?Sn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Wn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,t,e,i){const s=Ea(n),r=s!==n&&!bn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Wn(n,c)),e.call(this,c,Wn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Wn(n,l):l}function Wa(n,t,e){const i=ue(n);$e(i,"iterate",Wr);const s=i[t](...e);return(s===-1||s===!1)&&Jc(e[0])?(e[0]=ue(e[0]),i[t](...e)):s}function vr(n,t,e=[]){Jn(),Xc();const i=ue(n)[t].apply(n,e);return qc(),Qn(),i}const _m=Hc("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Zn));function vm(n){Zn(n)||(n=String(n));const t=ue(this);return $e(t,"has",n),t.hasOwnProperty(n)}class sh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Cm:lh:r?ah:oh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ht(t);if(!s){let l;if(o&&(l=gm[e]))return l;if(e==="hasOwnProperty")return vm}const a=Reflect.get(t,e,qe(t)?t:i);if((Zn(e)?ih.has(e):_m(e))||(s||$e(t,"get",e),r))return a;if(qe(a)){const l=o&&Wc(e)?a:a.value;return s&&he(l)?kl(l):l}return he(a)?s?kl(a):yn(a):a}}class rh extends sh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ht(t)&&Wc(e);if(!this._isShallow){const c=ti(r);if(!bn(i)&&!ti(i)&&(r=ue(r),i=ue(i)),!o&&qe(r)&&!qe(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,qe(t)?t:s);return t===ue(s)&&l&&(a?jn(i,r)&&mi(t,"set",e,i):mi(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&mi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Zn(e)||!ih.has(e))&&$e(t,"has",e),i}ownKeys(t){return $e(t,"iterate",Ht(t)?"length":gs),Reflect.ownKeys(t)}}class xm extends sh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ym=new rh,bm=new xm,Mm=new rh(!0);const zl=n=>n,ao=n=>Reflect.getPrototypeOf(n);function Sm(n,t,e){return function(...i){const s=this.__v_raw,r=ue(s),o=Hi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?zl:t?Xi:Sn;return!t&&$e(r,"iterate",l?Vl:gs),ze(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function lo(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Em(n,t){const e={get(s){const r=this.__v_raw,o=ue(r),a=ue(s);n||(jn(s,a)&&$e(o,"get",s),$e(o,"get",a));const{has:l}=ao(o),c=t?zl:n?Xi:Sn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$e(ue(s),"iterate",gs),s.size},has(s){const r=this.__v_raw,o=ue(r),a=ue(s);return n||(jn(s,a)&&$e(o,"has",s),$e(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ue(a),c=t?zl:n?Xi:Sn;return!n&&$e(l,"iterate",gs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return ze(e,n?{add:lo("add"),set:lo("set"),delete:lo("delete"),clear:lo("clear")}:{add(s){const r=ue(this),o=ao(r),a=ue(s),l=!t&&!bn(s)&&!ti(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),mi(r,"add",l,l)),this},set(s,r){!t&&!bn(r)&&!ti(r)&&(r=ue(r));const o=ue(this),{has:a,get:l}=ao(o);let c=a.call(o,s);c||(s=ue(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?jn(r,u)&&mi(o,"set",s,r):mi(o,"add",s,r),this},delete(s){const r=ue(this),{has:o,get:a}=ao(r);let l=o.call(r,s);l||(s=ue(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&mi(r,"delete",s,void 0),c},clear(){const s=ue(this),r=s.size!==0,o=s.clear();return r&&mi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Sm(s,n,t)}),e}function Kc(n,t){const e=Em(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const wm={get:Kc(!1,!1)},Tm={get:Kc(!1,!0)},Am={get:Kc(!0,!1)};const oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Cm=new WeakMap;function Rm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yn(n){return ti(n)?n:Zc(n,!1,ym,wm,oh)}function ch(n){return Zc(n,!1,Mm,Tm,ah)}function kl(n){return Zc(n,!0,bm,Am,lh)}function Zc(n,t,e,i,s){if(!he(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Rm(em(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Gi(n){return ti(n)?Gi(n.__v_raw):!!(n&&n.__v_isReactive)}function ti(n){return!!(n&&n.__v_isReadonly)}function bn(n){return!!(n&&n.__v_isShallow)}function Jc(n){return n?!!n.__v_raw:!1}function ue(n){const t=n&&n.__v_raw;return t?ue(t):n}function Pm(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&Wf(n,"__v_skip",!0),n}const Sn=n=>he(n)?yn(n):n,Xi=n=>he(n)?kl(n):n;function qe(n){return n?n.__v_isRef===!0:!1}function jt(n){return uh(n,!1)}function Lm(n){return uh(n,!0)}function uh(n,t){return qe(n)?n:new Dm(n,t)}class Dm{constructor(t,e){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ue(t),this._value=e?t:Sn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||bn(t)||ti(t);t=i?t:ue(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:Sn(t),this.dep.trigger())}}function Zt(n){return qe(n)?n.value:n}const Im={get:(n,t,e)=>t==="__v_raw"?n:Zt(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return qe(s)&&!qe(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function dh(n){return Gi(n)?n:new Proxy(n,Im)}class Um{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Kf(this,!0),!0}get value(){const t=this.dep.track();return Qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nm(n,t,e=!1){let i,s;return Jt(n)?i=n:(i=n.get,s=n.set),new Um(i,s,e)}const co={},ea=new WeakMap;let os;function Om(n,t=!1,e=os){if(e){let i=ea.get(e);i||ea.set(e,i=[]),i.push(n)}}function Fm(n,t,e=_e){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:bn(S)||s===!1||s===0?gi(S,1):gi(S);let u,d,f,p,v=!1,_=!1;if(qe(n)?(d=()=>n.value,v=bn(n)):Gi(n)?(d=()=>c(n),v=!0):Ht(n)?(_=!0,v=n.some(S=>Gi(S)||bn(S)),d=()=>n.map(S=>{if(qe(S))return S.value;if(Gi(S))return c(S);if(Jt(S))return l?l(S,2):S()})):Jt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){Jn();try{f()}finally{Qn()}}const S=os;os=u;try{return l?l(n,3,[p]):n(p)}finally{os=S}}:d=Kn,t&&s){const S=d,j=s===!0?1/0:s;d=()=>gi(S(),j)}const g=hm(),h=()=>{u.stop(),g&&g.active&&Gc(g.effects,u)};if(r&&t){const S=t;t=(...j)=>{try{return S(...j)}finally{h()}}}let w=_?new Array(n.length).fill(co):co;const L=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const j=u.run();if(S||s||v||(_?j.some((F,O)=>jn(F,w[O])):jn(j,w))){const F=os;Jn();try{f&&f(),os=u;const O=[j,w===co?void 0:_&&w[0]===co?[]:w,p];w=j,l?l(t,3,O):t(...O)}finally{os=F,Qn()}}}else u.run()};return a&&a(L),u=new jf(d),u.scheduler=o?()=>o(L,!1):L,p=S=>Om(S,!1,u),f=u.onStop=()=>{const S=ea.get(u);if(S){if(l)l(S,4);else for(const j of S)j();ea.delete(u)}},t?i?L(!0):w=u.run():o?o(L.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function gi(n,t=1/0,e){if(t<=0||!he(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,qe(n))gi(n.value,t,e);else if(Ht(n))for(let i=0;i<n.length;i++)gi(n[i],t,e);else if(Ei(n)||Hi(n))n.forEach(i=>{gi(i,t,e)});else if(Gf(n)){for(const i in n)gi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function to(n,t,e,i){try{return i?n(...i):n()}catch(s){wa(s,t,e)}}function Vn(n,t,e,i){if(Jt(n)){const s=to(n,t,e,i);return s&&kf(s)&&s.catch(r=>{wa(r,t,e)}),s}if(Ht(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Vn(n[r],t,e,i));return s}}function wa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||_e;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Jn(),to(r,null,10,[n,l,c]),Qn();return}}Bm(n,e,s,i,o)}function Bm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Je=[];let Pn=-1;const $n=[];let Fi=null,Ws=0;const fh=Promise.resolve();let na=null;function Qc(n){const t=na||fh;return n?t.then(this?n.bind(this):n):t}function Vm(n){let t=Pn+1,e=Je.length;for(;t<e;){const i=t+e>>>1,s=Je[i],r=$r(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function tu(n){if(!(n.flags&1)){const t=$r(n),e=Je[Je.length-1];!e||!(n.flags&2)&&t>=$r(e)?Je.push(n):Je.splice(Vm(t),0,n),n.flags|=1,hh()}}function hh(){na||(na=fh.then(gh))}function zm(n){if(!Ht(n))Fi&&n.id===-1?Fi.splice(Ws+1,0,n):n.flags&1||($n.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)$n.push(n[t]);hh()}function ph(n,t,e,i=Pn+1){for(;i<Je.length;i++){const s=Je[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;Je.splice(i,1),i=n?i-1:Pn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(n,t,e=0){if($n.length){let i=$n,s=0;if(t){i=[];for(let o=0;o<$n.length;o++){const a=$n[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?$n[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>$r(o)-$r(a));if($n.length=s,Fi){for(let o=0;o<r.length;o++)Fi.push(r[o]);return}for(Fi=r,Ws=0;Ws<Fi.length;Ws++){const o=Fi[Ws];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Fi=null,Ws=0}}let $a=!1;function km(n,t){if($a){n();return}const e=t===void 0?void 0:new Set($n);n(),$a=!0;try{ph(void 0,t),mh(void 0,e,t)}finally{$a=!1}}const $r=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gh(n){try{for(Pn=0;Pn<Je.length;Pn++){const t=Je[Pn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),to(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pn<Je.length;Pn++){const t=Je[Pn];t&&(t.flags&=-2)}Pn=-1,Je.length=0,mh(),na=null,(Je.length||$n.length)&&gh()}}let hn=null,_h=null;function ia(n){const t=hn;return hn=n,_h=n&&n.type.__scopeId||null,t}function eu(n,t=hn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&aa(-1);const r=ia(t),o=vs.length;let a;try{a=n(...s)}finally{for(let l=vs.length;l>o;l--)zh();ia(r),i._d&&aa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ne(n,t){if(hn===null)return n;const e=Pa(hn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=_e]=t[s];r&&(Jt(r)&&(r={mounted:r,updated:r}),r.deep&&gi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ji(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Jn(),Vn(l,e,8,[n.el,a,n,t]),Qn())}}function $o(n,t){if(Xe){let e=Xe.provides;const i=Xe.parent&&Xe.parent.provides;i===e&&(e=Xe.provides=Object.create(i)),e[n]=t}}function Nn(n,t,e=!1){const i=Vg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Jt(t)?t.call(i&&i.proxy):t}}const Hm=Symbol.for("v-scx"),Gm=()=>Nn(Hm);function _s(n,t,e){return vh(n,t,e)}function vh(n,t,e=_e){const{immediate:i,deep:s,flush:r,once:o}=e,a=ze({},e),l=t&&i||!t&&r!=="post";let c;if(Kr){if(r==="sync"){const p=Gm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Kn,p.resume=Kn,p.pause=Kn,p}}const u=Xe;a.call=(p,v,_)=>Vn(p,u,v,_);let d=!1;r==="post"?a.scheduler=p=>{p.i=u,on(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,v)=>{v?p():tu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Fm(n,t,a);return Kr&&(c?c.push(f):l&&f()),f}function Wm(n,t,e){const i=this.proxy,s=Ce(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;Jt(t)?r=t:(r=t.handler,e=t);const o=eo(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ta=n=>n.__isTeleport,Xa=Symbol("_leaveCb");function Xm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==zn){t=e;break}}return t}function yh(n){if(!nu(n))return Ta(n.type)&&n.children?Xm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Jt(e.default))return e.default()}}function sa(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;sa(Ta(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Pe&&Ht(n.children)){const e=Ah(n.children,!1);e&&sa(e,t)}}function Hl(n){if(n.component)return Hl(n.component.subTree);if(n.type===Pe){const t=Ht(n.children)&&Ah(n.children,!1);return t?Hl(t):void 0}if(n.type!==zn)return n}function Ti(n,t){return Jt(n)?ze({name:n.name},t,{setup:n}):n}function bh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ra=new WeakMap;function Br(n,t,e,i,s=!1){if(Ht(n)){n.forEach((_,g)=>Br(_,t&&(Ht(t)?t[g]:t),e,i,s));return}if(Vr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Br(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Pa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===_e?a.refs={}:a.refs,d=a.setupState,f=ue(d),p=d===_e?zf:_=>Fu(u,_)?!1:oe(f,_),v=(_,g)=>!(g&&Fu(u,g));if(c!=null&&c!==l){if(Bu(t),Ce(c))u[c]=null,p(c)&&(d[c]=null);else if(qe(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Jt(l))to(l,a,12,[o,u]);else{const _=Ce(l),g=qe(l);if(_||g){const h=()=>{if(n.f){const w=_?p(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Ht(w)&&Gc(w,r);else if(Ht(w))w.includes(r)||w.push(r);else if(_)u[l]=[r],p(l)&&(d[l]=u[l]);else{const L=[r];v(l,n.k)&&(l.value=L),n.k&&(u[n.k]=L)}}else _?(u[l]=o,p(l)&&(d[l]=o)):g&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{h(),ra.delete(n)};w.id=-1,ra.set(n,w),on(w,e)}else Bu(n),h()}}}function Bu(n){const t=ra.get(n);t&&(t.flags|=8,ra.delete(n))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Vr=n=>!!n.type.__asyncLoader,nu=n=>n.type.__isKeepAlive;function qm(n,t){Mh(n,"a",t)}function jm(n,t){Mh(n,"da",t)}function Mh(n,t,e=Xe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Aa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)nu(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=Aa(t,n,i,!0);fr(()=>{Gc(i[t],s)},e)}function Aa(n,t,e=Xe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Jn();const a=eo(e),l=Vn(t,e,n,o);return a(),Qn(),l});return i?s.unshift(r):s.push(r),r}}const Ai=n=>(t,e=Xe)=>{(!Kr||n==="sp")&&Aa(n,(...i)=>t(...i),e)},Km=Ai("bm"),dr=Ai("m"),Zm=Ai("bu"),Jm=Ai("u"),Qm=Ai("bum"),fr=Ai("um"),tg=Ai("sp"),eg=Ai("rtg"),ng=Ai("rtc");function ig(n,t=Xe){Aa("ec",n,t)}const sg="components";function iu(n,t){return og(sg,n,!0,t)||n}const rg=Symbol.for("v-ndc");function og(n,t,e=!0,i=!1){const s=hn||Xe;if(s){const r=s.type;{const a=Wg(r,!1);if(a&&(a===t||a===en(t)||a===ba(en(t))))return r}const o=Vu(s[n]||r[n],t)||Vu(s.appContext[n],t);return!o&&i?r:o}}function Vu(n,t){return n&&(n[t]||n[en(t)]||n[ba(en(t))])}function xi(n,t,e,i){let s;const r=e,o=Ht(n);if(o||Ce(n)){const a=o&&Gi(n);let l=!1,c=!1;a&&(l=!bn(n),c=ti(n),n=Ea(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?Xi(Sn(n[u])):Sn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(he(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Gl=n=>n?Wh(n)?Pa(n):Gl(n.parent):null,zr=ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gl(n.parent),$root:n=>Gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Eh(n),$forceUpdate:n=>n.f||(n.f=()=>{tu(n.update)}),$nextTick:n=>n.n||(n.n=Qc.bind(n.proxy)),$watch:n=>Wm.bind(n)}),qa=(n,t)=>n!==_e&&!n.__isScriptSetup&&oe(n,t),ag={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(qa(i,t))return o[t]=1,i[t];if(s!==_e&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==_e&&oe(e,t))return o[t]=4,e[t];Wl&&(o[t]=0)}}const c=zr[t];let u,d;if(c)return t==="$attrs"&&$e(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==_e&&oe(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,oe(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return qa(s,t)?(s[t]=e,!0):i!==_e&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==_e&&a[0]!=="$"&&oe(n,a)||qa(t,a)||oe(r,a)||oe(i,a)||oe(zr,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function zu(n){return Ht(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wl=!0;function lg(n){const t=Eh(n),e=n.proxy,i=n.ctx;Wl=!1,t.beforeCreate&&ku(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:v,activated:_,deactivated:g,beforeDestroy:h,beforeUnmount:w,destroyed:L,unmounted:S,render:j,renderTracked:F,renderTriggered:O,errorCaptured:I,serverPrefetch:M,expose:E,inheritAttrs:A,components:at,directives:it,filters:dt}=t;if(c&&cg(c,i,null),o)for(const k in o){const q=o[k];Jt(q)&&(i[k]=q.bind(e))}if(s){const k=s.call(e,e);he(k)&&(n.data=yn(k))}if(Wl=!0,r)for(const k in r){const q=r[k],_t=Jt(q)?q.bind(e,e):Jt(q.get)?q.get.bind(e,e):Kn,N=!Jt(q)&&Jt(q.set)?q.set.bind(e):Kn,D=Fe({get:_t,set:N});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>D.value,set:ht=>D.value=ht})}if(a)for(const k in a)Sh(a[k],i,e,k);if(l){const k=Jt(l)?l.call(e):l;Reflect.ownKeys(k).forEach(q=>{$o(q,k[q])})}u&&ku(u,n,"c");function W(k,q){Ht(q)?q.forEach(_t=>k(_t.bind(e))):q&&k(q.bind(e))}if(W(Km,d),W(dr,f),W(Zm,p),W(Jm,v),W(qm,_),W(jm,g),W(ig,I),W(ng,F),W(eg,O),W(Qm,w),W(fr,S),W(tg,M),Ht(E))if(E.length){const k=n.exposed||(n.exposed={});E.forEach(q=>{Object.defineProperty(k,q,{get:()=>e[q],set:_t=>e[q]=_t,enumerable:!0})})}else n.exposed||(n.exposed={});j&&n.render===Kn&&(n.render=j),A!=null&&(n.inheritAttrs=A),at&&(n.components=at),it&&(n.directives=it),M&&bh(n)}function cg(n,t,e=Kn){Ht(n)&&(n=$l(n));for(const i in n){const s=n[i];let r;he(s)?"default"in s?r=Nn(s.from||i,s.default,!0):r=Nn(s.from||i):r=Nn(s),qe(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function ku(n,t,e){Vn(Ht(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(Ce(n)){const r=t[n];Jt(r)&&_s(s,r)}else if(Jt(n))_s(s,n.bind(e));else if(he(n))if(Ht(n))n.forEach(r=>Sh(r,t,e,i));else{const r=Jt(n.handler)?n.handler.bind(e):t[n.handler];Jt(r)&&_s(s,r,n)}}function Eh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>oa(l,c,o,!0)),oa(l,t,o)),he(t)&&r.set(t,l),l}function oa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&oa(n,r,e,!0),s&&s.forEach(o=>oa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ug[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ug={data:Hu,props:Gu,emits:Gu,methods:Pr,computed:Pr,beforeCreate:Ye,created:Ye,beforeMount:Ye,mounted:Ye,beforeUpdate:Ye,updated:Ye,beforeDestroy:Ye,beforeUnmount:Ye,destroyed:Ye,unmounted:Ye,activated:Ye,deactivated:Ye,errorCaptured:Ye,serverPrefetch:Ye,components:Pr,directives:Pr,watch:fg,provide:Hu,inject:dg};function Hu(n,t){return t?n?function(){return ze(Jt(n)?n.call(this,this):n,Jt(t)?t.call(this,this):t)}:t:n}function dg(n,t){return Pr($l(n),$l(t))}function $l(n){if(Ht(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ye(n,t){return n?[...new Set([].concat(n,t))]:t}function Pr(n,t){return n?ze(Object.create(null),n,t):t}function Gu(n,t){return n?Ht(n)&&Ht(t)?[...new Set([...n,...t])]:ze(Object.create(null),zu(n),zu(t??{})):t}function fg(n,t){if(!n)return t;if(!t)return n;const e=ze(Object.create(null),n);for(const i in t)e[i]=Ye(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function pg(n,t){return function(i,s=null){Jt(i)||(i=ze({},i)),s!=null&&!he(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Jt(u.install)?(o.add(u),u.install(c,...d)):Jt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ie(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Pa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Vn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ys;Ys=c;try{return u()}finally{Ys=d}}};return c}}let Ys=null;const mg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${en(t)}Modifiers`]||n[`${Ki(t)}Modifiers`];function gg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||_e;let s=e;const r=t.startsWith("update:"),o=r&&mg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ce(u)?u.trim():u)),o.number&&(s=s.map(Ma)));let a,l=i[a=za(t)]||i[a=za(en(t))];!l&&r&&(l=i[a=za(Ki(t))]),l&&Vn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Vn(c,n,6,s)}}const _g=new WeakMap;function Th(n,t,e=!1){const i=e?_g:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Jt(n)){const l=c=>{const u=Th(c,t,!0);u&&(a=!0,ze(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(he(n)&&i.set(n,null),null):(Ht(r)?r.forEach(l=>o[l]=null):ze(o,r),he(n)&&i.set(n,o),o)}function Ca(n,t){return!n||!va(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,Ki(t))||oe(n,t))}function Wu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:v,inheritAttrs:_}=n,g=ia(n);let h,w;try{if(e.shapeFlag&4){const S=s||i,j=S;h=Xn(c.call(j,S,u,d,p,f,v)),w=a}else{const S=t;h=Xn(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),w=t.props?a:vg(a)}}catch(S){vs.length=0,wa(S,n,1),h=Ie(zn)}let L=h;if(w&&_!==!1){const S=Object.keys(w),{shapeFlag:j}=L;S.length&&j&7&&(r&&S.some(xa)&&(w=xg(w,r)),L=er(L,w,!1,!0))}if(e.dirs&&(L=er(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(e.dirs):e.dirs),e.transition){const S=Ta(L.type)&&yh(L)||L;sa(S,e.transition)}return h=L,ia(g),h}function Ah(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(qr(s)){if(s.type!==zn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const vg=n=>{let t;for(const e in n)(e==="class"||e==="style"||va(e))&&((t||(t={}))[e]=n[e]);return t},xg=(n,t)=>{const e={};for(const i in n)(!xa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function yg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ch(o,i,f)&&!Ca(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!oe(n,r)||Ch(t,n,r)&&!Ca(e,r))return!0}return!1}function Ch(n,t,e){const i=n[e],s=t[e];return e==="style"&&he(i)&&he(s)?!Bn(i,s):i!==s}function bg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Rh={},Ph=()=>Object.create(Rh),Lh=n=>Object.getPrototypeOf(n)===Rh;function Mg(n,t,e,i=!1){const s={},r=Ph();n.propsDefaults=Object.create(null),Dh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ch(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ue(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ca(n.emitsOptions,f))continue;const p=t[f];if(l)if(oe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const v=en(f);s[v]=Xl(l,a,v,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Dh(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!oe(t,d)&&((u=Ki(d))===d||!oe(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Xl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!oe(t,d))&&(delete r[d],c=!0)}c&&mi(n.attrs,"set","")}function Dh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Nr(l))continue;const c=t[l];let u;s&&oe(s,u=en(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ue(e),c=a||_e;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Xl(s,l,d,c[d],n,!oe(c,d))}}return o}function Xl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Jt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=eo(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ki(e))&&(i=!0))}return i}const Eg=new WeakMap;function Ih(n,t,e=!1){const i=e?Eg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Jt(n)){const u=d=>{l=!0;const[f,p]=Ih(d,t,!0);ze(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return he(n)&&i.set(n,fs),fs;if(Ht(r))for(let u=0;u<r.length;u++){const d=en(r[u]);Xu(d)&&(o[d]=_e)}else if(r)for(const u in r){const d=en(u);if(Xu(d)){const f=r[u],p=o[d]=Ht(f)||Jt(f)?{type:f}:ze({},f),v=p.type;let _=!1,g=!0;if(Ht(v))for(let h=0;h<v.length;++h){const w=v[h],L=Jt(w)&&w.name;if(L==="Boolean"){_=!0;break}else L==="String"&&(g=!1)}else _=Jt(v)&&v.name==="Boolean";p[0]=_,p[1]=g,(_||oe(p,"default"))&&a.push(d)}}const c=[o,a];return he(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!Nr(n)}const su=n=>n==="_"||n==="_ctx"||n==="$stable",ru=n=>Ht(n)?n.map(Xn):[Xn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=eu((...s)=>ru(t(...s)),e);return i._c=!1,i},Uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(su(s))continue;const r=n[s];if(Jt(r))t[s]=wg(s,r,i);else if(r!=null){const o=ru(r);t[s]=()=>o}}},Nh=(n,t)=>{const e=ru(t);n.slots.default=()=>e},Oh=(n,t,e)=>{for(const i in t)(e||!su(i))&&(n[i]=t[i])},Tg=(n,t,e)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const s=t._;s?(Oh(i,t,e),e&&Wf(i,"_",s,!0)):Uh(t,i)}else t&&Nh(n,t)},Ag=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=_e;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Oh(s,t,e):(r=!t.$stable,Uh(t,s)),o=t}else t&&(Nh(n,t),o={default:1});if(r)for(const a in s)!su(a)&&o[a]==null&&delete s[a]},on=Dg;function Cg(n){return Rg(n)}function Rg(n,t){const e=Sa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=Kn,insertStaticContent:v}=n,_=(y,R,H,b=null,nt=null,et=null,lt=void 0,ct=null,bt=!!R.dynamicChildren)=>{if(y===R)return;y&&!xr(y,R)&&(b=U(y),ht(y,nt,et,!0),y=null),R.patchFlag===-2&&(bt=!1,R.dynamicChildren=null),R.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(R.dynamicChildren===fs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:Q,ref:C,shapeFlag:x}=R;switch(Q){case Ra:g(y,R,H,b);break;case zn:h(y,R,H,b);break;case Xo:y==null&&w(R,H,b,lt);break;case Pe:at(y,R,H,b,nt,et,lt,ct,bt);break;default:x&1?j(y,R,H,b,nt,et,lt,ct,bt):x&6?it(y,R,H,b,nt,et,lt,ct,bt):(x&64||x&128)&&Q.process(y,R,H,b,nt,et,lt,ct,bt,Y)}C!=null&&nt?Br(C,y&&y.ref,et,R||y,!R):C==null&&y&&y.ref!=null&&Br(y.ref,null,et,y,!0)},g=(y,R,H,b)=>{if(y==null)i(R.el=a(R.children),H,b);else{const nt=R.el=y.el;R.children!==y.children&&c(nt,R.children)}},h=(y,R,H,b)=>{y==null?i(R.el=l(R.children||""),H,b):R.el=y.el},w=(y,R,H,b)=>{[y.el,y.anchor]=v(y.children,R,H,b,y.el,y.anchor)},L=({el:y,anchor:R},H,b)=>{let nt;for(;y&&y!==R;)nt=f(y),i(y,H,b),y=nt;i(R,H,b)},S=({el:y,anchor:R})=>{let H;for(;y&&y!==R;)H=f(y),s(y),y=H;s(R)},j=(y,R,H,b,nt,et,lt,ct,bt)=>{if(R.type==="svg"?lt="svg":R.type==="math"&&(lt="mathml"),y==null)F(R,H,b,nt,et,lt,ct,bt);else{const Q=y.el&&y.el._isVueCE?y.el:null;try{Q&&Q._beginPatch(),M(y,R,nt,et,lt,ct,bt)}finally{Q&&Q._endPatch()}}},F=(y,R,H,b,nt,et,lt,ct)=>{let bt,Q;const{props:C,shapeFlag:x,transition:G,dirs:st}=y;if(bt=y.el=o(y.type,et,C&&C.is,C),x&8?u(bt,y.children):x&16&&I(y.children,bt,null,b,nt,ja(y,et),lt,ct),st&&Ji(y,null,b,"created"),O(bt,y,y.scopeId,lt,b),C){for(const ut in C)ut!=="value"&&!Nr(ut)&&r(bt,ut,null,C[ut],et,b);"value"in C&&r(bt,"value",null,C.value,et),(Q=C.onVnodeBeforeMount)&&Gn(Q,b,y)}st&&Ji(y,null,b,"beforeMount");const mt=Pg(nt,G);mt&&G.beforeEnter(bt),i(bt,R,H),((Q=C&&C.onVnodeMounted)||mt||st)&&on(()=>{try{Q&&Gn(Q,b,y),mt&&G.enter(bt),st&&Ji(y,null,b,"mounted")}finally{}},nt)},O=(y,R,H,b,nt)=>{if(H&&p(y,H),b)for(let et=0;et<b.length;et++)p(y,b[et]);if(nt){let et=nt.subTree;if(R===et||Vh(et.type)&&(et.ssContent===R||et.ssFallback===R)){const lt=nt.vnode;O(y,lt,lt.scopeId,lt.slotScopeIds,nt.parent)}}},I=(y,R,H,b,nt,et,lt,ct,bt=0)=>{for(let Q=bt;Q<y.length;Q++){const C=y[Q]=ct?pi(y[Q]):Xn(y[Q]);_(null,C,R,H,b,nt,et,lt,ct)}},M=(y,R,H,b,nt,et,lt)=>{const ct=R.el=y.el;let{patchFlag:bt,dynamicChildren:Q,dirs:C}=R;bt|=y.patchFlag&16;const x=y.props||_e,G=R.props||_e;let st;if(H&&Qi(H,!1),(st=G.onVnodeBeforeUpdate)&&Gn(st,H,R,y),C&&Ji(R,y,H,"beforeUpdate"),H&&Qi(H,!0),Q&&(!y.dynamicChildren||y.dynamicChildren.length!==Q.length)&&(bt=0,lt=!1,Q=null),(x.innerHTML&&G.innerHTML==null||x.textContent&&G.textContent==null)&&u(ct,""),Q?E(y.dynamicChildren,Q,ct,H,b,ja(R,nt),et):lt||q(y,R,ct,null,H,b,ja(R,nt),et,!1),bt>0){if(bt&16)A(ct,x,G,H,nt);else if(bt&2&&x.class!==G.class&&r(ct,"class",null,G.class,nt),bt&4&&r(ct,"style",x.style,G.style,nt),bt&8){const mt=R.dynamicProps;for(let ut=0;ut<mt.length;ut++){const ot=mt[ut],T=x[ot],$=G[ot];($!==T||ot==="value")&&r(ct,ot,T,$,nt,H)}}bt&1&&y.children!==R.children&&u(ct,R.children)}else!lt&&Q==null&&A(ct,x,G,H,nt);((st=G.onVnodeUpdated)||C)&&on(()=>{st&&Gn(st,H,R,y),C&&Ji(R,y,H,"updated")},b)},E=(y,R,H,b,nt,et,lt)=>{for(let ct=0;ct<R.length;ct++){const bt=y[ct],Q=R[ct],C=bt.el||ql(bt),x=C&&(bt.type===Pe||!xr(bt,Q)||bt.shapeFlag&198)?d(C):H;_(bt,Q,x,null,b,nt,et,lt,!0)}},A=(y,R,H,b,nt)=>{if(R!==H){if(R!==_e)for(const et in R)!Nr(et)&&!(et in H)&&r(y,et,R[et],null,nt,b);for(const et in H){if(Nr(et))continue;const lt=H[et],ct=R[et];lt!==ct&&et!=="value"&&r(y,et,ct,lt,nt,b)}"value"in H&&r(y,"value",R.value,H.value,nt)}},at=(y,R,H,b,nt,et,lt,ct,bt)=>{const Q=R.el=y?y.el:a(""),C=R.anchor=y?y.anchor:a("");let{patchFlag:x,dynamicChildren:G,slotScopeIds:st}=R;st&&(ct=ct?ct.concat(st):st),y==null?(i(Q,H,b),i(C,H,b),I(R.children||[],H,C,nt,et,lt,ct,bt)):x>0&&x&64&&G&&y.dynamicChildren&&y.dynamicChildren.length===G.length?(E(y.dynamicChildren,G,H,nt,et,lt,ct),(R.key!=null||nt&&R===nt.subTree)&&Fh(y,R,!0)):q(y,R,H,C,nt,et,lt,ct,bt)},it=(y,R,H,b,nt,et,lt,ct,bt)=>{R.slotScopeIds=ct,y==null?R.shapeFlag&512?nt.ctx.activate(R,H,b,lt,bt):dt(R,H,b,nt,et,lt,bt):xt(y,R,bt)},dt=(y,R,H,b,nt,et,lt)=>{const ct=y.component=Bg(y,b,nt);if(nu(y)&&(ct.ctx.renderer=Y),zg(ct,!1,lt),ct.asyncDep){if(nt&&nt.registerDep(ct,W,lt,et),!y.el){const bt=ct.subTree=Ie(zn);h(null,bt,R,H),y.placeholder=bt.el}}else W(ct,y,R,H,nt,et,lt)},xt=(y,R,H)=>{const b=R.component=y.component;if(yg(y,R,H))if(b.asyncDep&&!b.asyncResolved){R.el=y.el,R.placeholder=y.placeholder,k(b,R,H);return}else b.next=R,b.update();else R.el=y.el,R.placeholder=y.placeholder,b.vnode=R},W=(y,R,H,b,nt,et,lt)=>{const ct=()=>{if(y.isMounted){let{next:x,bu:G,u:st,parent:mt,vnode:ut}=y;{const rt=Bh(y);if(rt){x&&(x.el=ut.el,k(y,x,lt)),rt.asyncDep.then(()=>{on(()=>{y.isUnmounted||Q()},nt)});return}}let ot=x,T;Qi(y,!1),x?(x.el=ut.el,k(y,x,lt)):x=ut,G&&Wo(G),(T=x.props&&x.props.onVnodeBeforeUpdate)&&Gn(T,mt,x,ut),Qi(y,!0);const $=Wu(y),Tt=y.subTree;y.subTree=$,_(Tt,$,d(Tt.el),U(Tt),y,nt,et),x.el=$.el,ot===null&&bg(y,$.el),st&&on(st,nt),(T=x.props&&x.props.onVnodeUpdated)&&on(()=>Gn(T,mt,x,ut),nt)}else{let x;const{el:G,props:st}=R,{bm:mt,m:ut,parent:ot,root:T,type:$}=y,Tt=Vr(R);Qi(y,!1),mt&&Wo(mt),!Tt&&(x=st&&st.onVnodeBeforeMount)&&Gn(x,ot,R),Qi(y,!0);{T.ce&&T.ce._hasShadowRoot()&&T.ce._injectChildStyle($,y.parent?y.parent.type:void 0);const rt=y.subTree=Wu(y);_(null,rt,H,b,y,nt,et),R.el=rt.el}if(ut&&on(ut,nt),!Tt&&(x=st&&st.onVnodeMounted)){const rt=R;on(()=>Gn(x,ot,rt),nt)}(R.shapeFlag&256||ot&&Vr(ot.vnode)&&ot.vnode.shapeFlag&256)&&y.a&&on(y.a,nt),y.isMounted=!0,R=H=b=null}};y.scope.on();const bt=y.effect=new jf(ct);y.scope.off();const Q=y.update=bt.run.bind(bt),C=y.job=bt.runIfDirty.bind(bt);C.i=y,C.id=y.uid,bt.scheduler=()=>tu(C),Qi(y,!0),Q()},k=(y,R,H)=>{R.component=y;const b=y.vnode.props;y.vnode=R,y.next=null,Sg(y,R.props,b,H),Ag(y,R.children,H),Jn(),ph(y),Qn()},q=(y,R,H,b,nt,et,lt,ct,bt=!1)=>{const Q=y&&y.children,C=y?y.shapeFlag:0,x=R.children,{patchFlag:G,shapeFlag:st}=R;if(G>0){if(G&128){N(Q,x,H,b,nt,et,lt,ct,bt);return}else if(G&256){_t(Q,x,H,b,nt,et,lt,ct,bt);return}}st&8?(C&16&&B(Q,nt,et),x!==Q&&u(H,x)):C&16?st&16?N(Q,x,H,b,nt,et,lt,ct,bt):B(Q,nt,et,!0):(C&8&&u(H,""),st&16&&I(x,H,b,nt,et,lt,ct,bt))},_t=(y,R,H,b,nt,et,lt,ct,bt)=>{y=y||fs,R=R||fs;const Q=y.length,C=R.length,x=Math.min(Q,C);let G;for(G=0;G<x;G++){const st=R[G]=bt?pi(R[G]):Xn(R[G]);_(y[G],st,H,null,nt,et,lt,ct,bt)}Q>C?B(y,nt,et,!0,!1,x):I(R,H,b,nt,et,lt,ct,bt,x)},N=(y,R,H,b,nt,et,lt,ct,bt)=>{let Q=0;const C=R.length;let x=y.length-1,G=C-1;for(;Q<=x&&Q<=G;){const st=y[Q],mt=R[Q]=bt?pi(R[Q]):Xn(R[Q]);if(xr(st,mt))_(st,mt,H,null,nt,et,lt,ct,bt);else break;Q++}for(;Q<=x&&Q<=G;){const st=y[x],mt=R[G]=bt?pi(R[G]):Xn(R[G]);if(xr(st,mt))_(st,mt,H,null,nt,et,lt,ct,bt);else break;x--,G--}if(Q>x){if(Q<=G){const st=G+1,mt=st<C?R[st].el:b;for(;Q<=G;)_(null,R[Q]=bt?pi(R[Q]):Xn(R[Q]),H,mt,nt,et,lt,ct,bt),Q++}}else if(Q>G)for(;Q<=x;)ht(y[Q],nt,et,!0),Q++;else{const st=Q,mt=Q,ut=new Map;for(Q=mt;Q<=G;Q++){const Rt=R[Q]=bt?pi(R[Q]):Xn(R[Q]);Rt.key!=null&&ut.set(Rt.key,Q)}let ot,T=0;const $=G-mt+1;let Tt=!1,rt=0;const wt=new Array($);for(Q=0;Q<$;Q++)wt[Q]=0;for(Q=st;Q<=x;Q++){const Rt=y[Q];if(T>=$){ht(Rt,nt,et,!0);continue}let St;if(Rt.key!=null)St=ut.get(Rt.key);else for(ot=mt;ot<=G;ot++)if(wt[ot-mt]===0&&xr(Rt,R[ot])){St=ot;break}St===void 0?ht(Rt,nt,et,!0):(wt[St-mt]=Q+1,St>=rt?rt=St:Tt=!0,_(Rt,R[St],H,null,nt,et,lt,ct,bt),T++)}const Ut=Tt?Lg(wt):fs;for(ot=Ut.length-1,Q=$-1;Q>=0;Q--){const Rt=mt+Q,St=R[Rt],Gt=R[Rt+1],$t=Rt+1<C?Gt.el||ql(Gt):b;wt[Q]===0?_(null,St,H,$t,nt,et,lt,ct,bt):Tt&&(ot<0||Q!==Ut[ot]?D(St,H,$t,2):ot--)}}},D=(y,R,H,b,nt=null)=>{const{el:et,type:lt,transition:ct,children:bt,shapeFlag:Q}=y;if(Q&6){D(y.component.subTree,R,H,b);return}if(Q&128){y.suspense.move(R,H,b);return}if(Q&64){lt.move(y,R,H,Y);return}if(lt===Pe){i(et,R,H);for(let x=0;x<bt.length;x++)D(bt[x],R,H,b);i(y.anchor,R,H);return}if(lt===Xo){L(y,R,H);return}if(b!==2&&Q&1&&ct)if(b===0)ct.persisted&&!et[Xa]?i(et,R,H):(ct.beforeEnter(et),i(et,R,H),on(()=>ct.enter(et),nt));else{const{leave:x,delayLeave:G,afterLeave:st}=ct,mt=()=>{y.ctx.isUnmounted?s(et):i(et,R,H)},ut=()=>{const ot=et._isLeaving||!!et[Xa];et._isLeaving&&et[Xa](!0),ct.persisted&&!ot?mt():x(et,()=>{mt(),st&&st()})};G?G(et,mt,ut):ut()}else i(et,R,H)},ht=(y,R,H,b=!1,nt=!1)=>{const{type:et,props:lt,ref:ct,children:bt,dynamicChildren:Q,shapeFlag:C,patchFlag:x,dirs:G,cacheIndex:st,memo:mt}=y;if((x===-2||Q&&Q.hasOnce)&&(nt=!1),ct!=null&&(Jn(),Br(ct,null,H,y,!0),Qn()),st!=null&&(!y.ctx||y.ctx===R)&&(R.renderCache[st]=void 0),C&256){R.ctx.deactivate(y);return}const ut=C&1&&G,ot=!Vr(y);let T;if(ot&&(T=lt&&lt.onVnodeBeforeUnmount)&&Gn(T,R,y),C&6)z(y.component,H,b);else{if(C&128){y.suspense.unmount(H,b);return}ut&&Ji(y,null,R,"beforeUnmount"),C&64?y.type.remove(y,R,H,Y,b):Q&&!Q.hasOnce&&(et!==Pe||x>0&&x&64)?B(Q,R,H,!1,!0):(et===Pe&&x&384||!nt&&C&16)&&B(bt,R,H),b&&Et(y)}const $=mt!=null&&st==null;(ot&&(T=lt&&lt.onVnodeUnmounted)||ut||$)&&on(()=>{T&&Gn(T,R,y),ut&&Ji(y,null,R,"unmounted"),$&&(y.el=null)},H)},Et=y=>{const{type:R,el:H,anchor:b,transition:nt}=y,et=R===Pe;if(et&&!nt){K(H,b);return}if(R===Xo){S(y),nt&&!nt.persisted&&nt.afterLeave&&nt.afterLeave();return}const lt=et?Hl(y):y,ct=()=>{et?d(H)&&K(H,b):s(H),nt&&!nt.persisted&&nt.afterLeave&&nt.afterLeave()};if(lt&&lt.shapeFlag&1&&nt&&!nt.persisted){const{leave:bt,delayLeave:Q}=nt,C=lt.el,x=()=>bt(C,ct);Q?Q(C,ct,x):x()}else ct()},K=(y,R)=>{let H;for(;y!==R;)H=f(y),s(y),y=H;s(R)},z=(y,R,H)=>{const{bum:b,scope:nt,job:et,subTree:lt,um:ct,m:bt,a:Q}=y;qu(bt),qu(Q),b&&Wo(b),nt.stop(),et?(et.flags|=8,ht(lt,y,R,H)):y.vnode.el&&lt&&(lt.transition=y.vnode.transition,ht(lt,y,R,H)),ct&&on(ct,R),on(()=>{y.isUnmounted=!0},R)},B=(y,R,H,b=!1,nt=!1,et=0)=>{for(let lt=et;lt<y.length;lt++)ht(y[lt],R,H,b,nt)},U=y=>{if(y.shapeFlag&6)return U(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const R=f(y.anchor||y.el),H=R&&R[$m];return H?f(H):R},V=(y,R,H)=>{const b=y&&R._vnode?void 0:y&&y.component?y.component.uid:Fg();km(()=>{y==null?R._vnode&&ht(R._vnode,null,null,!0):_(R._vnode||null,y,R,null,null,null,H),R._vnode=y},b)},Y={p:_,um:ht,m:D,r:Et,mt:dt,mc:I,pc:q,pbc:E,n:U,o:n};return{render:V,hydrate:void 0,createApp:pg(V)}}function ja({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Fh(n,t,e=!1){const i=n.children,s=t.children;if(Ht(i)&&Ht(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=pi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Fh(o,a)),a.type===Ra&&(a.patchFlag===-1&&(a=s[r]=pi(a)),a.el=o.el),a.type===zn&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bh(t)}function qu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function ql(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?ql(t.subTree):null}const Vh=n=>n.__isSuspense;function Dg(n,t){t&&t.pendingBranch?Ht(n)?t.effects.push(...n):t.effects.push(n):zm(n)}const Pe=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),vs=[];let pn=null;function Ot(n=!1){vs.push(pn=n?null:[])}function zh(){vs.pop(),pn=vs[vs.length-1]||null}let Xr=1;function aa(n,t=!1){Xr+=n,n<0&&pn&&t&&(pn.hasOnce=!0)}function kh(n){return n.dynamicChildren=Xr>0?pn||fs:null,zh(),Xr>0&&pn&&pn.push(n),n}function Ft(n,t,e,i,s,r){return kh(m(n,t,e,i,s,r,!0))}function ou(n,t,e,i,s){return kh(Ie(n,t,e,i,s,!0))}function qr(n){return n?n.__v_isVNode===!0:!1}function xr(n,t){return n.type===t.type&&n.key===t.key}const Hh=({key:n})=>n??null,qo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ce(n)||qe(n)||Jt(n)?{i:hn,r:n,k:t,f:!!e}:n:null);function m(n,t=null,e=null,i=0,s=null,r=n===Pe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hh(t),ref:t&&qo(t),scopeId:_h,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:hn};return a?(la(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ce(e)?8:16),Xr>0&&!o&&pn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pn.push(l),l}const Ie=Ig;function Ig(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===rg)&&(n=zn),qr(n)){const a=er(n,t,!0);return e&&la(a,e),Xr>0&&!r&&pn&&(a.shapeFlag&6?pn[pn.indexOf(n)]=a:pn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ug(t);let{class:a,style:l}=t;a&&!Ce(a)&&(t.class=hi(a)),he(l)&&(Jc(l)&&!Ht(l)&&(l=ze({},l)),t.style=de(l))}const o=Ce(n)?1:Vh(n)?128:Ta(n)?64:he(n)?4:Jt(n)?2:0;return m(n,t,e,i,s,o,r,!0)}function Ug(n){return n?Jc(n)||Lh(n)?ze({},n):n:null}function er(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ng(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hh(c),ref:t&&t.ref?e&&r?Ht(r)?r.concat(qo(t)):[r,qo(t)]:qo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Pe?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&sa(u,l.clone(u)),u}function Lt(n=" ",t=0){return Ie(Ra,null,n,t)}function jr(n,t){const e=Ie(Xo,null,n);return e.staticCount=t,e}function Me(n="",t=!1){return t?(Ot(),ou(zn,null,n)):Ie(zn,null,n)}function Xn(n){return n==null||typeof n=="boolean"?Ie(zn):Ht(n)?Ie(Pe,null,n.slice()):qr(n)?pi(n):Ie(Ra,null,String(n))}function pi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function la(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ht(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),la(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=hn:s===3&&hn&&(hn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Jt(t)){if(i&65){la(n,{default:t});return}t={default:t,_ctx:hn},e=32}else t=String(t),i&64?(e=16,t=[Lt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ng(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=hi([t.class,i.class]));else if(s==="style")t.style=de([t.style,i.style]);else if(va(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ht(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!xa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Gn(n,t,e,i=null){Vn(n,t,7,[e,i])}const Og=wh();let Gh=0;function Fg(){return Gh}function Bg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Og,r={uid:Gh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:i.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=gg.bind(null,r),n.ce&&n.ce(r),r}let Xe=null;const Vg=()=>Xe||hn;let ca,Yr;{const n=Sa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ca=t("__VUE_INSTANCE_SETTERS__",e=>Xe=e),Yr=t("__VUE_SSR_SETTERS__",e=>Kr=e)}const eo=n=>{const t=Xe;return ca(n),n.scope.on(),()=>{n.scope.off(),ca(t)}},ju=()=>{Xe&&Xe.scope.off(),ca(null)};function Wh(n){return n.vnode.shapeFlag&4}let Kr=!1;function zg(n,t=!1,e=!1){t&&Yr(t);const{props:i,children:s}=n.vnode,r=Wh(n);Mg(n,i,r,t),Tg(n,s,e||t);const o=r?kg(n,t):void 0;return t&&Yr(!1),o}function kg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ag);const{setup:i}=e;if(i){Jn();const s=n.setupContext=i.length>1?Gg(n):null,r=eo(n),o=to(i,n,0,[n.props,s]),a=kf(o);if(Qn(),r(),(a||n.sp)&&!Vr(n)&&bh(n),a){if(o.then(ju,ju),t)return o.then(l=>{Yr(!0);try{Yu(n,l,t)}finally{Yr(!1)}}).catch(l=>{wa(l,n,0)});n.asyncDep=o}else Yu(n,o)}else $h(n)}function Yu(n,t,e){Jt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:he(t)&&(n.setupState=dh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||Kn);{const s=eo(n);Jn();try{lg(n)}finally{Qn(),s()}}}const Hg={get(n,t){return $e(n,"get",""),n[t]}};function Gg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Hg),slots:n.slots,emit:n.emit,expose:t}}function Pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Pm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in zr)return zr[e](n)},has(t,e){return e in t||e in zr}})):n.proxy}function Wg(n,t=!0){return Jt(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return Jt(n)&&"__vccOpts"in n}const Fe=(n,t)=>Nm(n,t,Kr);function Xh(n,t,e){try{aa(-1);const i=arguments.length;return i===2?he(t)&&!Ht(t)?qr(t)?Ie(n,null,[t]):Ie(n,t):Ie(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&qr(e)&&(e=[e]),Ie(n,t,e))}finally{aa(1)}}const Xg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{jl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const qh=jl?n=>jl.createHTML(n):n=>n,qg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Zu=fi&&fi.createElement("template"),Yg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?fi.createElementNS(qg,n):t==="mathml"?fi.createElementNS(jg,n):e?fi.createElement(n,{is:e}):fi.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>fi.createTextNode(n),createComment:n=>fi.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>fi.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Zu.innerHTML=qh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Kg=Symbol("_vtc");function Zg(n,t,e){const i=n[Kg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ua=Symbol("_vod"),jh=Symbol("_vsh"),Ju={name:"show",beforeMount(n,{value:t},{transition:e}){n[ua]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):yr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),yr(n,!0),i.enter(n)):i.leave(n,()=>{yr(n,!1)}):yr(n,t))},beforeUnmount(n,{value:t}){yr(n,t)}};function yr(n,t){n.style.display=t?n[ua]:"none",n[jh]=!t}const Jg=Symbol(""),Qg=/(?:^|;)\s*display\s*:/;function t_(n,t,e){const i=n.style,s=Ce(e);let r=!1;if(e&&!s){if(t)if(Ce(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Lr(i,a,"")}else for(const o in t)e[o]==null&&Lr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?n_(n,o,!Ce(t)&&t?t[o]:void 0,a)||Lr(i,o,a):Lr(i,o,"")}}else if(s){if(t!==e){const o=i[Jg];o&&(e+=";"+o),i.cssText=e,r=Qg.test(e)}}else t&&n.removeAttribute("style");ua in n&&((!s||t!==e)&&(n[ua]=r?i.display:""),n[jh]&&(i.display="none"))}const uo=/\s*!important$/;function Lr(n,t,e){if(Ht(e))e.forEach(i=>Lr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))uo.test(e)?n.setProperty(t,e.replace(uo,""),"important"):n.setProperty(t,e);else{const i=e_(n,t);uo.test(e)?n.setProperty(Ki(i),e.replace(uo,""),"important"):n[i]=e}}const Qu=["Webkit","Moz","ms"],Ya={};function e_(n,t){const e=Ya[t];if(e)return e;let i=en(t);if(i!=="filter"&&i in n)return Ya[t]=i;i=ba(i);for(let s=0;s<Qu.length;s++){const r=Qu[s]+i;if(r in n)return Ya[t]=r}return t}function n_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ce(i)&&e===i}const td="http://www.w3.org/1999/xlink";function ed(n,t,e,i,s,r=cm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(td,t.slice(6,t.length)):n.setAttributeNS(td,t,e):e==null||r&&!$f(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Zn(e)?String(e):e)}function nd(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?qh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=$f(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function _i(n,t,e,i){n.addEventListener(t,e,i)}function i_(n,t,e,i){n.removeEventListener(t,e,i)}const id=Symbol("_vei");function s_(n,t,e,i,s=null){const r=n[id]||(n[id]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=a_(t);if(i){const c=r[t]=u_(i,s);_i(n,a,c,l)}else o&&(i_(n,a,o,l),r[t]=void 0)}}const r_=/(Once|Passive|Capture)$/,o_=/^on:?(?:Once|Passive|Capture)$/;function a_(n){let t,e;for(;(e=n.match(r_))&&!o_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Ki(n.slice(2)),t]}let Ka=0;const l_=Promise.resolve(),c_=()=>Ka||(l_.then(()=>Ka=0),Ka=Date.now());function u_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ht(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Vn(c,t,5,a)}}else Vn(s,t,5,[i])};return e.value=n,e.attached=c_(),e}const sd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Zg(n,i,o):t==="style"?t_(n,e,i):va(t)?xa(t)||s_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):f_(n,t,i,o))?(nd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ed(n,t,i,o,r,t!=="value")):n._isVueCE&&(h_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ce(i)))?nd(n,en(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ed(n,t,i,o))};function f_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sd(t)&&Jt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sd(t)&&Ce(e)?!1:t in n}function h_(n,t){const e=n._def.props;if(!e)return!1;const i=en(t);return Array.isArray(e)?e.some(s=>en(s)===i):Object.keys(e).some(s=>en(s)===i)}const qi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ht(t)?e=>Wo(t,e):t};function p_(n){n.target.composing=!0}function rd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mn=Symbol("_assign"),fo=Symbol("_initialValue");function Za(n,t,e){return t&&(n=n.trim()),e&&(n=Ma(n)),n}const We={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[fo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[fo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[mn]=qi(s);const r=i||s.props&&s.props.type==="number";_i(n,t?"change":"input",o=>{o.target.composing||n[mn](Za(n.value,e,r))}),(e||r)&&_i(n,"change",()=>{n.value=Za(n.value,e,r)}),t||(_i(n,"compositionstart",p_),_i(n,"compositionend",rd),_i(n,"change",rd))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[fo];delete n[fo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[mn](Za(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[mn]=qi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ma(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Bi={deep:!0,created(n,t,e){n[mn]=qi(e),_i(n,"change",()=>{const i=n._modelValue,s=nr(n),r=n.checked,o=n[mn];if(Ht(i)){const a=$c(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Ei(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(Yh(n,r))})},mounted:od,beforeUpdate(n,t,e){n[mn]=qi(e),od(n,t,e)}};function od(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Ht(t))s=$c(t,i.props.value)>-1;else if(Ei(t))s=t.has(i.props.value);else{if(t===e)return;s=Bn(t,Yh(n,!0))}n.checked!==s&&(n.checked=s)}const ad={created(n,{value:t},e){n.checked=Bn(t,e.props.value),n[mn]=qi(e),_i(n,"change",()=>{n[mn](nr(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[mn]=qi(i),t!==e&&(n.checked=Bn(t,i.props.value))}},Ks={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,_i(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Ma(nr(l)):nr(l)),r=n.multiple,o=r?Ei(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Ht(o)?s.slice():s:o];try{n[mn](o)}finally{Qc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[mn]=qi(i)},mounted(n,{value:t}){ld(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[mn]=qi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!m_(t,e[1],e[0]))&&ld(n,t)}};function m_(n,t,e){if(!e||Ht(n))return Bn(n,t);if(Ei(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function ld(n,t){const e=n.multiple,i=Ht(t);if(!(e&&!i&&!Ei(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=nr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=$c(t,a)>-1}else o.selected=t.has(a);else if(Bn(nr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function nr(n){return"_value"in n?n._value:n.value}function Yh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const g_=["ctrl","shift","alt","meta"],__={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>g_.some(e=>n[`${e}Key`]&&!t.includes(e))},ls=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=__[t[o]];if(a&&a(s,t))return}return n(s,...r)})},v_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cd=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=s=>{if(!("key"in s))return;const r=Ki(s.key);if(t.some(o=>o===r||v_[o]===r))return n(s)})},x_=ze({patchProp:d_},Yg);let ud;function y_(){return ud||(ud=Cg(x_))}const b_=(...n)=>{const t=y_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=S_(i);if(!s)return;const r=t._component;!Jt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,M_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function M_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function S_(n){return Ce(n)?document.querySelector(n):n}const au=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},E_={};function w_(n,t){const e=iu("router-view");return Ot(),ou(e)}const T_=au(E_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const $s=typeof document<"u";function Kh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function A_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kh(n.default)}const ce=Object.assign;function Ja(n,t){const e={};for(const i in t){const s=t[i];e[i]=kn(s)?s.map(n):n(s)}return e}const kr=()=>{},kn=Array.isArray;function dd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Zh=/#/g,C_=/&/g,R_=/\//g,P_=/=/g,L_=/\?/g,Jh=/\+/g,D_=/%5B/g,I_=/%5D/g,Qh=/%5E/g,U_=/%60/g,tp=/%7B/g,N_=/%7C/g,ep=/%7D/g,O_=/%20/g;function lu(n){return n==null?"":encodeURI(""+n).replace(N_,"|").replace(D_,"[").replace(I_,"]")}function F_(n){return lu(n).replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function Yl(n){return lu(n).replace(Jh,"%2B").replace(O_,"+").replace(Zh,"%23").replace(C_,"%26").replace(U_,"`").replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function B_(n){return Yl(n).replace(P_,"%3D")}function V_(n){return lu(n).replace(Zh,"%23").replace(L_,"%3F")}function z_(n){return V_(n).replace(R_,"%2F")}function Zr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const k_=/\/$/,H_=n=>n.replace(k_,"");function Qa(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=X_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Zr(o)}}function G_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function fd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function W_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&ir(t.matched[i],e.matched[s])&&np(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function ir(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function np(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return kn(n)?hd(n,t):kn(t)?hd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function hd(n,t){return kn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function X_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Pi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Kl=function(n){return n.pop="pop",n.push="push",n}({}),tl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function q_(n){if(!n)if($s){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),H_(n)}const j_=/^[^#]+#/;function Y_(n,t){return n.replace(j_,"#")+t}function K_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function Z_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=K_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pd(n,t){return(history.state?history.state.position-t:-1)+n}const Zl=new Map;function J_(n,t){Zl.set(n,t)}function Q_(n){const t=Zl.get(n);return Zl.delete(n),t}function tv(n){return typeof n=="string"||n&&typeof n=="object"}function ip(n){return typeof n=="string"||typeof n=="symbol"}let Te=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sp=Symbol("");Te.MATCHER_NOT_FOUND+"",Te.NAVIGATION_GUARD_REDIRECT+"",Te.NAVIGATION_ABORTED+"",Te.NAVIGATION_CANCELLED+"",Te.NAVIGATION_DUPLICATED+"";function sr(n,t){return ce(new Error,{type:n,[sp]:!0},t)}function ri(n,t){return n instanceof Error&&sp in n&&(t==null||!!(n.type&t))}const ev=["params","query","hash"];function nv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of ev)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function iv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Jh," "),r=s.indexOf("="),o=Zr(r<0?s:s.slice(0,r)),a=r<0?null:Zr(s.slice(r+1));if(o in t){let l=t[o];kn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function md(n){let t="";for(let e in n){const i=n[e];if(e=B_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(kn(i)?i.map(s=>s&&Yl(s)):[i&&Yl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function sv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const rv=Symbol(""),gd=Symbol(""),Da=Symbol(""),cu=Symbol(""),Jl=Symbol("");function br(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Vi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(sr(Te.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):tv(f)?l(sr(Te.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function el(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Vi(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=A_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Vi(f,e,i,o,a,s)()}))}}return r}function ov(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>ir(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>ir(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av=()=>location.protocol+"//"+location.host;function rp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),fd(a,"")}return fd(e,n)+i+s}function lv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=rp(n,location),v=e.value,_=t.value;let g=0;if(f){if(e.value=p,t.value=f,o&&o===v){o=null;return}g=_?f.position-_.position:0}else i(p);s.forEach(h=>{h(e.value,v,{delta:g,type:Kl.pop,direction:g?g>0?tl.forward:tl.back:tl.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ce({},f.state,{scroll:La()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function _d(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?La():null}}function cv(n){const{history:t,location:e}=window,i={value:rp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:av()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){r(l,ce({},t.state,_d(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ce({},s.value,t.state,{forward:l,scroll:La()});r(u.current,u,!0),r(l,ce({},_d(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function uv(n){n=q_(n);const t=cv(n),e=lv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ce({location:"",base:n,go:i,createHref:Y_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),uv(n)}let hs=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var De=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(De||{});const fv={type:hs.Static,value:""},hv=/[a-zA-Z0-9_]/;function pv(n){if(!n)return[[]];if(n==="/")return[[fv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=De.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===De.Static?r.push({type:hs.Static,value:c}):e===De.Param||e===De.ParamRegExp||e===De.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:hs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==De.ParamRegExp){i=e,e=De.EscapeNext;continue}switch(e){case De.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=De.Param):f();break;case De.EscapeNext:f(),e=i;break;case De.Param:l==="("?e=De.ParamRegExp:hv.test(l)?f():(d(),e=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case De.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=De.ParamRegExpEnd:u+=l;break;case De.ParamRegExpEnd:d(),e=De.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===De.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const vd="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var Ze=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ze||{});const gv=/[.+*?^${}()[\]/\\]/g;function _v(n,t){const e=ce({},mv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Ze.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Ze.Segment+(e.sensitive?Ze.BonusCaseSensitive:0);if(f.type===hs.Static)d||(s+="/"),s+=f.value.replace(gv,"\\$&"),p+=Ze.Static;else if(f.type===hs.Param){const{value:v,repeatable:_,optional:g,regexp:h}=f;r.push({name:v,repeatable:_,optional:g});const w=h||vd;if(w!==vd){p+=Ze.BonusCustomRegExp;try{`${w}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${w}): `+S.message)}}let L=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(L=g&&c.length<2?`(?:/${L})`:"/"+L),g&&(L+="?"),s+=L,p+=Ze.Dynamic,g&&(p+=Ze.BonusOptional),_&&(p+=Ze.BonusRepeatable),w===".*"&&(p+=Ze.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Ze.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",v=r[f-1];d[v.name]=p&&v.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===hs.Static)u+=p.value;else if(p.type===hs.Param){const{value:v,repeatable:_,optional:g}=p,h=v in c?c[v]:"";if(kn(h)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const w=kn(h)?h.join("/"):h;if(!w)if(g)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function vv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ze.Static+Ze.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ze.Static+Ze.Segment?1:-1:0}function op(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=vv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(xd(i))return 1;if(xd(s))return-1}return s.length-i.length}function xd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const xv={strict:!1,end:!0,sensitive:!1};function yv(n,t,e){const i=_v(pv(n.path),e),s=ce(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bv(n,t){const e=[],i=new Map;t=dd(xv,t);function s(d){return i.get(d)}function r(d,f,p){const v=!p,_=bd(d);_.aliasOf=p&&p.record;const g=dd(t,d),h=[_];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const j of S)h.push(bd(ce({},_,{components:p?p.record.components:_.components,path:j,aliasOf:p?p.record:_})))}let w,L;for(const S of h){const{path:j}=S;if(f&&j[0]!=="/"){const F=f.record.path,O=F[F.length-1]==="/"?"":"/";S.path=f.record.path+(j&&O+j)}if(w=yv(S,f,g),p?p.alias.push(w):(L=L||w,L!==w&&L.alias.push(w),v&&d.name&&!Md(w)&&o(d.name)),ap(w)&&l(w),_.children){const F=_.children;for(let O=0;O<F.length;O++)r(F[O],w,p&&p.children[O])}p=p||w}return L?()=>{o(L)}:kr}function o(d){if(ip(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Ev(d,e);e.splice(f,0,d),d.record.name&&!Md(d)&&i.set(d.record.name,d)}function c(d,f){let p,v={},_,g;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw sr(Te.MATCHER_NOT_FOUND,{location:d});g=p.record.name,v=ce(yd(f.params,p.keys.filter(L=>!L.optional).concat(p.parent?p.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&yd(d.params,p.keys.map(L=>L.name))),_=p.stringify(v)}else if(d.path!=null)_=d.path,p=e.find(L=>L.re.test(_)),p&&(v=p.parse(_),g=p.record.name);else{if(p=f.name?i.get(f.name):e.find(L=>L.re.test(f.path)),!p)throw sr(Te.MATCHER_NOT_FOUND,{location:d,currentLocation:f});g=p.record.name,v=ce({},f.params,d.params),_=p.stringify(v)}const h=[];let w=p;for(;w;)h.unshift(w.record),w=w.parent;return{name:g,path:_,params:v,matched:h,meta:Sv(h)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function bd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Md(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sv(n){return n.reduce((t,e)=>ce(t,e.meta),{})}function Ev(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;op(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(ap(t)&&op(n,t)===0)return t}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Sd(n){const t=Nn(Da),e=Nn(cu),i=Fe(()=>{const l=Zt(n.to);return t.resolve(l)}),s=Fe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(ir.bind(null,u));if(f>-1)return f;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&d[d.length-1].path!==p?d.findIndex(ir.bind(null,l[c-2])):f}),r=Fe(()=>s.value>-1&&Pv(e.params,i.value.params)),o=Fe(()=>s.value>-1&&s.value===e.matched.length-1&&np(e.params,i.value.params));function a(l={}){if(Rv(l)){const c=t[Zt(n.replace)?"replace":"push"](Zt(n.to)).catch(kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Fe(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Tv(n){return n.length===1?n[0]:n}const Av=Ti({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sd,setup(n,{slots:t}){const e=yn(Sd(n)),{options:i}=Nn(Da),s=Fe(()=>({[wd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[wd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Tv(t.default(e));return n.custom?r:Xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Cv=Av;function Rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Pv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!kn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Ed(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const wd=(n,t,e)=>n??t??e,Lv=Ti({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Nn(Jl),s=Fe(()=>n.route||i.value),r=Nn(gd,0),o=Fe(()=>{let c=Zt(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Fe(()=>s.value.matched[o.value]);$o(gd,Fe(()=>o.value+1)),$o(rv,a),$o(Jl,s);const l=jt();return _s(()=>[l.value,a.value,n.name],([c,u,d],[f,p,v])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!ir(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Td(e.default,{Component:f,route:c});const p=d.props[u],v=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Xh(f,ce({},v,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Td(e.default,{Component:g,route:c})||g}}});function Td(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Dv=Lv;function Iv(n){const t=bv(n.routes,n),e=n.parseQuery||iv,i=n.stringifyQuery||md,s=n.history,r=br(),o=br(),a=br(),l=Lm(Pi);let c=Pi;$s&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,U=>""+U),d=Ja.bind(null,z_),f=Ja.bind(null,Zr);function p(U,V){let Y,ft;return ip(U)?(Y=t.getRecordMatcher(U),ft=V):ft=U,t.addRoute(ft,Y)}function v(U){const V=t.getRecordMatcher(U);V&&t.removeRoute(V)}function _(){return t.getRoutes().map(U=>U.record)}function g(U){return!!t.getRecordMatcher(U)}function h(U,V){if(V=ce({},V||l.value),typeof U=="string"){const b=Qa(e,U,V.path),nt=t.resolve({path:b.path},V),et=s.createHref(b.fullPath);return ce(b,nt,{params:f(nt.params),hash:Zr(b.hash),redirectedFrom:void 0,href:et})}let Y;if(U.path!=null)Y=ce({},U,{path:Qa(e,U.path,V.path).path});else{const b=ce({},U.params);for(const nt in b)b[nt]==null&&delete b[nt];Y=ce({},U,{params:d(b)}),V.params=d(V.params)}const ft=t.resolve(Y,V),y=U.hash||"";ft.params=u(f(ft.params));const R=G_(i,ce({},U,{hash:F_(y),path:ft.path})),H=s.createHref(R);return ce({fullPath:R,hash:y,query:i===md?sv(U.query):U.query||{}},ft,{redirectedFrom:void 0,href:H})}function w(U){return typeof U=="string"?Qa(e,U,l.value.path):ce({},U)}function L(U,V){if(c!==U)return sr(Te.NAVIGATION_CANCELLED,{from:V,to:U})}function S(U){return O(U)}function j(U){return S(ce(w(U),{replace:!0}))}function F(U,V){const Y=U.matched[U.matched.length-1];if(Y&&Y.redirect){const{redirect:ft}=Y;let y=typeof ft=="function"?ft(U,V):ft;return typeof y=="string"&&(y=y.includes("?")||y.includes("#")?y=w(y):{path:y},y.params={}),ce({query:U.query,hash:U.hash,params:y.path!=null?{}:U.params},y)}}function O(U,V){const Y=c=h(U),ft=l.value,y=U.state,R=U.force,H=U.replace===!0,b=F(Y,ft);if(b)return O(ce(w(b),{state:typeof b=="object"?ce({},y,b.state):y,force:R,replace:H}),V||Y);const nt=Y;nt.redirectedFrom=V;let et;return!R&&W_(i,ft,Y)&&(et=sr(Te.NAVIGATION_DUPLICATED,{to:nt,from:ft}),D(ft,ft,!0,!1)),(et?Promise.resolve(et):E(nt,ft)).catch(lt=>ri(lt)?ri(lt,Te.NAVIGATION_GUARD_REDIRECT)?lt:N(lt):q(lt,nt,ft)).then(lt=>{if(lt){if(ri(lt,Te.NAVIGATION_GUARD_REDIRECT))return O(ce({replace:H},w(lt.to),{state:typeof lt.to=="object"?ce({},y,lt.to.state):y,force:R}),V||nt)}else lt=at(nt,ft,!0,H,y);return A(nt,ft,lt),lt})}function I(U,V){const Y=L(U,V);return Y?Promise.reject(Y):Promise.resolve()}function M(U){const V=K.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(U):U()}function E(U,V){let Y;const[ft,y,R]=ov(U,V);Y=el(ft.reverse(),"beforeRouteLeave",U,V);for(const b of ft)b.leaveGuards.forEach(nt=>{Y.push(Vi(nt,U,V))});const H=I.bind(null,U,V);return Y.push(H),B(Y).then(()=>{Y=[];for(const b of r.list())Y.push(Vi(b,U,V));return Y.push(H),B(Y)}).then(()=>{Y=el(y,"beforeRouteUpdate",U,V);for(const b of y)b.updateGuards.forEach(nt=>{Y.push(Vi(nt,U,V))});return Y.push(H),B(Y)}).then(()=>{Y=[];for(const b of R)if(b.beforeEnter)if(kn(b.beforeEnter))for(const nt of b.beforeEnter)Y.push(Vi(nt,U,V));else Y.push(Vi(b.beforeEnter,U,V));return Y.push(H),B(Y)}).then(()=>(U.matched.forEach(b=>b.enterCallbacks={}),Y=el(R,"beforeRouteEnter",U,V,M),Y.push(H),B(Y))).then(()=>{Y=[];for(const b of o.list())Y.push(Vi(b,U,V));return Y.push(H),B(Y)}).catch(b=>ri(b,Te.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function A(U,V,Y){a.list().forEach(ft=>M(()=>ft(U,V,Y)))}function at(U,V,Y,ft,y){const R=L(U,V);if(R)return R;const H=V===Pi,b=$s?history.state:{};Y&&(ft||H?s.replace(U.fullPath,ce({scroll:H&&b&&b.scroll},y)):s.push(U.fullPath,y)),l.value=U,D(U,V,Y,H),N()}let it;function dt(){it||(it=s.listen((U,V,Y)=>{if(!z.listening)return;const ft=h(U),y=F(ft,z.currentRoute.value);if(y){O(ce(y,{replace:!0,force:!0}),ft).catch(kr);return}c=ft;const R=l.value;$s&&J_(pd(R.fullPath,Y.delta),La()),E(ft,R).catch(H=>ri(H,Te.NAVIGATION_ABORTED|Te.NAVIGATION_CANCELLED)?H:ri(H,Te.NAVIGATION_GUARD_REDIRECT)?(O(ce(w(H.to),{force:!0}),ft).then(b=>{ri(b,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===Kl.pop&&s.go(-1,!1)}).catch(kr),Promise.reject()):(Y.delta&&s.go(-Y.delta,!1),q(H,ft,R))).then(H=>{H=H||at(ft,R,!1),H&&(Y.delta&&!ri(H,Te.NAVIGATION_CANCELLED)?s.go(-Y.delta,!1):Y.type===Kl.pop&&ri(H,Te.NAVIGATION_ABORTED|Te.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ft,R,H)}).catch(kr)}))}let xt=br(),W=br(),k;function q(U,V,Y){N(U);const ft=W.list();return ft.length?ft.forEach(y=>y(U,V,Y)):console.error(U),Promise.reject(U)}function _t(){return k&&l.value!==Pi?Promise.resolve():new Promise((U,V)=>{xt.add([U,V])})}function N(U){return k||(k=!U,dt(),xt.list().forEach(([V,Y])=>U?Y(U):V()),xt.reset()),U}function D(U,V,Y,ft){const{scrollBehavior:y}=n;if(!$s||!y)return Promise.resolve();const R=!Y&&Q_(pd(U.fullPath,0))||(ft||!Y)&&history.state&&history.state.scroll||null;return Qc().then(()=>y(U,V,R)).then(H=>H&&Z_(H)).catch(H=>q(H,U,V))}const ht=U=>s.go(U);let Et;const K=new Set,z={currentRoute:l,listening:!0,addRoute:p,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:_,resolve:h,options:n,push:S,replace:j,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:W.add,isReady:_t,install(U){U.component("RouterLink",Cv),U.component("RouterView",Dv),U.config.globalProperties.$router=z,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Zt(l)}),$s&&!Et&&l.value===Pi&&(Et=!0,S(s.location).catch(ft=>{}));const V={};for(const ft in Pi)Object.defineProperty(V,ft,{get:()=>l.value[ft],enumerable:!0});U.provide(Da,z),U.provide(cu,ch(V)),U.provide(Jl,l);const Y=U.unmount;K.add(U),U.unmount=function(){K.delete(U),K.size<1&&(c=Pi,it&&it(),it=null,l.value=Pi,Et=!1,k=!1),Y()}}};function B(U){return U.reduce((V,Y)=>V.then(()=>M(Y)),Promise.resolve())}return z}function lp(){return Nn(Da)}function Uv(n){return Nn(cu)}var uu={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),D=N.getContext("2d");D.fillRect(0,0,1,1);var ht=N.transferToImageBitmap();D.createPattern(ht,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var D=e.exports.Promise,ht=D!==void 0?D:t.Promise;return typeof ht=="function"?new ht(N):(N(l,l),null)}var u=function(N,D){return{transform:function(ht){if(N)return ht;if(D.has(ht))return D.get(ht);var Et=new OffscreenCanvas(ht.width,ht.height),K=Et.getContext("2d");return K.drawImage(ht,0,0),D.set(ht,Et),Et},clear:function(){D.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),D,ht,Et={},K=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(z){var B=Math.random();return Et[B]=requestAnimationFrame(function U(V){K===V||K+N-1<V?(K=V,delete Et[B],z()):Et[B]=requestAnimationFrame(U)}),B},ht=function(z){Et[z]&&cancelAnimationFrame(Et[z])}):(D=function(z){return setTimeout(z,N)},ht=function(z){return clearTimeout(z)}),{frame:D,cancel:ht}}(),f=function(){var N,D,ht={};function Et(K){function z(B,U){K.postMessage({options:B||{},callback:U})}K.init=function(U){var V=U.transferControlToOffscreen();K.postMessage({canvas:V},[V])},K.fire=function(U,V,Y){if(D)return z(U,null),D;var ft=Math.random().toString(36).slice(2);return D=c(function(y){function R(H){H.data.callback===ft&&(delete ht[ft],K.removeEventListener("message",R),D=null,u.clear(),Y(),y())}K.addEventListener("message",R),z(U,ft),ht[ft]=R.bind(null,{data:{callback:ft}})}),D},K.reset=function(){K.postMessage({reset:!0});for(var U in ht)ht[U](),delete ht[U]}}return function(){if(N)return N;if(!i&&r){var K=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([K])))}catch(z){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",z),null}Et(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(N,D){return D?D(N):N}function _(N){return N!=null}function g(N,D,ht){return v(N&&_(N[D])?N[D]:p[D],ht)}function h(N){return N<0?0:Math.floor(N)}function w(N,D){return Math.floor(Math.random()*(D-N))+N}function L(N){return parseInt(N,16)}function S(N){return N.map(j)}function j(N){var D=String(N).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:L(D.substring(0,2)),g:L(D.substring(2,4)),b:L(D.substring(4,6))}}function F(N){var D=g(N,"origin",Object);return D.x=g(D,"x",Number),D.y=g(D,"y",Number),D}function O(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function I(N){var D=N.getBoundingClientRect();N.width=D.width,N.height=D.height}function M(N){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=N,D}function E(N,D,ht,Et,K,z,B,U,V){N.save(),N.translate(D,ht),N.rotate(z),N.scale(Et,K),N.arc(0,0,1,B,U,V),N.restore()}function A(N){var D=N.angle*(Math.PI/180),ht=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-D+(.5*ht-Math.random()*ht),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function at(N,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var ht=D.tick++/D.totalTicks,Et=D.x+D.random*D.tiltCos,K=D.y+D.random*D.tiltSin,z=D.wobbleX+D.random*D.tiltCos,B=D.wobbleY+D.random*D.tiltSin;if(N.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-ht)+")",N.beginPath(),o&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))N.fill(k(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(z-Et)*.1,Math.abs(B-K)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var U=Math.PI/10*D.wobble,V=Math.abs(z-Et)*.1,Y=Math.abs(B-K)*.1,ft=D.shape.bitmap.width*D.scalar,y=D.shape.bitmap.height*D.scalar,R=new DOMMatrix([Math.cos(U)*V,Math.sin(U)*V,-Math.sin(U)*Y,Math.cos(U)*Y,D.x,D.y]);R.multiplySelf(new DOMMatrix(D.shape.matrix));var H=N.createPattern(u.transform(D.shape.bitmap),"no-repeat");H.setTransform(R),N.globalAlpha=1-ht,N.fillStyle=H,N.fillRect(D.x-ft/2,D.y-y/2,ft,y),N.globalAlpha=1}else if(D.shape==="circle")N.ellipse?N.ellipse(D.x,D.y,Math.abs(z-Et)*D.ovalScalar,Math.abs(B-K)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):E(N,D.x,D.y,Math.abs(z-Et)*D.ovalScalar,Math.abs(B-K)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var b=Math.PI/2*3,nt=4*D.scalar,et=8*D.scalar,lt=D.x,ct=D.y,bt=5,Q=Math.PI/bt;bt--;)lt=D.x+Math.cos(b)*et,ct=D.y+Math.sin(b)*et,N.lineTo(lt,ct),b+=Q,lt=D.x+Math.cos(b)*nt,ct=D.y+Math.sin(b)*nt,N.lineTo(lt,ct),b+=Q;else N.moveTo(Math.floor(D.x),Math.floor(D.y)),N.lineTo(Math.floor(D.wobbleX),Math.floor(K)),N.lineTo(Math.floor(z),Math.floor(B)),N.lineTo(Math.floor(Et),Math.floor(D.wobbleY));return N.closePath(),N.fill(),D.tick<D.totalTicks}function it(N,D,ht,Et,K){var z=D.slice(),B=N.getContext("2d"),U,V,Y=c(function(ft){function y(){U=V=null,B.clearRect(0,0,Et.width,Et.height),u.clear(),K(),ft()}function R(){i&&!(Et.width===s.width&&Et.height===s.height)&&(Et.width=N.width=s.width,Et.height=N.height=s.height),!Et.width&&!Et.height&&(ht(N),Et.width=N.width,Et.height=N.height),B.clearRect(0,0,Et.width,Et.height),z=z.filter(function(H){return at(B,H)}),z.length?U=d.frame(R):y()}U=d.frame(R),V=y});return{addFettis:function(ft){return z=z.concat(ft),Y},canvas:N,promise:Y,reset:function(){U&&d.cancel(U),V&&V()}}}function dt(N,D){var ht=!N,Et=!!g(D||{},"resize"),K=!1,z=g(D,"disableForReducedMotion",Boolean),B=r&&!!g(D||{},"useWorker"),U=B?f():null,V=ht?O:I,Y=N&&U?!!N.__confetti_initialized:!1,ft=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,y;function R(b,nt,et){for(var lt=g(b,"particleCount",h),ct=g(b,"angle",Number),bt=g(b,"spread",Number),Q=g(b,"startVelocity",Number),C=g(b,"decay",Number),x=g(b,"gravity",Number),G=g(b,"drift",Number),st=g(b,"colors",S),mt=g(b,"ticks",Number),ut=g(b,"shapes"),ot=g(b,"scalar"),T=!!g(b,"flat"),$=F(b),Tt=lt,rt=[],wt=N.width*$.x,Ut=N.height*$.y;Tt--;)rt.push(A({x:wt,y:Ut,angle:ct,spread:bt,startVelocity:Q,color:st[Tt%st.length],shape:ut[w(0,ut.length)],ticks:mt,decay:C,gravity:x,drift:G,scalar:ot,flat:T}));return y?y.addFettis(rt):(y=it(N,rt,V,nt,et),y.promise)}function H(b){var nt=z||g(b,"disableForReducedMotion",Boolean),et=g(b,"zIndex",Number);if(nt&&ft)return c(function(Q){Q()});ht&&y?N=y.canvas:ht&&!N&&(N=M(et),document.body.appendChild(N)),Et&&!Y&&V(N);var lt={width:N.width,height:N.height};U&&!Y&&U.init(N),Y=!0,U&&(N.__confetti_initialized=!0);function ct(){if(U){var Q={getBoundingClientRect:function(){if(!ht)return N.getBoundingClientRect()}};V(Q),U.postMessage({resize:{width:Q.width,height:Q.height}});return}lt.width=lt.height=null}function bt(){y=null,Et&&(K=!1,t.removeEventListener("resize",ct)),ht&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,Y=!1)}return Et&&!K&&(K=!0,t.addEventListener("resize",ct,!1)),U?U.fire(b,lt,bt):R(b,lt,bt)}return H.reset=function(){U&&U.reset(),y&&y.reset()},H}var xt;function W(){return xt||(xt=dt(null,{useWorker:!0,resize:!0})),xt}function k(N,D,ht,Et,K,z,B){var U=new Path2D(N),V=new Path2D;V.addPath(U,new DOMMatrix(D));var Y=new Path2D;return Y.addPath(V,new DOMMatrix([Math.cos(B)*K,Math.sin(B)*K,-Math.sin(B)*z,Math.cos(B)*z,ht,Et])),Y}function q(N){if(!o)throw new Error("path confetti are not supported in this browser");var D,ht;typeof N=="string"?D=N:(D=N.path,ht=N.matrix);var Et=new Path2D(D),K=document.createElement("canvas"),z=K.getContext("2d");if(!ht){for(var B=1e3,U=B,V=B,Y=0,ft=0,y,R,H=0;H<B;H+=2)for(var b=0;b<B;b+=2)z.isPointInPath(Et,H,b,"nonzero")&&(U=Math.min(U,H),V=Math.min(V,b),Y=Math.max(Y,H),ft=Math.max(ft,b));y=Y-U,R=ft-V;var nt=10,et=Math.min(nt/y,nt/R);ht=[et,0,0,et,-Math.round(y/2+U)*et,-Math.round(R/2+V)*et]}return{type:"path",path:D,matrix:ht}}function _t(N){var D,ht=1,Et="#000000",K='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?D=N:(D=N.text,ht="scalar"in N?N.scalar:ht,K="fontFamily"in N?N.fontFamily:K,Et="color"in N?N.color:Et);var z=10*ht,B=""+z+"px "+K,U=new OffscreenCanvas(z,z),V=U.getContext("2d");V.font=B;var Y=V.measureText(D),ft=Math.ceil(Y.actualBoundingBoxRight+Y.actualBoundingBoxLeft),y=Math.ceil(Y.actualBoundingBoxAscent+Y.actualBoundingBoxDescent),R=2,H=Y.actualBoundingBoxLeft+R,b=Y.actualBoundingBoxAscent+R;ft+=R+R,y+=R+R,U=new OffscreenCanvas(ft,y),V=U.getContext("2d"),V.font=B,V.fillStyle=Et,V.fillText(D,H,b);var nt=1/ht;return{type:"bitmap",bitmap:U.transferToImageBitmap(),matrix:[nt,0,0,nt,-ft*nt/2,-y*nt/2]}}e.exports=function(){return W().apply(this,arguments)},e.exports.reset=function(){W().reset()},e.exports.create=dt,e.exports.shapeFromPath=q,e.exports.shapeFromText=_t})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),uu,!1);const Nv=uu.exports;uu.exports.create;const Ov={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden","user-select":"none"}},Fv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px",gap:"8px"}},Bv={style:{display:"flex","align-items":"center",gap:"12px","font-size":"11px","font-weight":"bold","white-space":"nowrap"}},Vv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 电源输入电压"},zv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 芯片输出电压"},kv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 电源输入电流"},Hv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 芯片负载电流"},Gv={style:{height:"30px","background-color":"#15191e","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-size":"11px",gap:"12px","overflow-x":"auto"}},Wv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},$v={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Xv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #1e3a8a"}},qv=["disabled"],jv=["disabled"],Yv={style:{display:"flex","align-items":"center",gap:"2px"}},Kv=["onClick","title"],Zv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Jv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Qv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #065f46"}},t0=["disabled"],e0=["disabled"],n0={style:{display:"flex","align-items":"center",gap:"2px"}},i0=["onClick","title"],s0={style:{"font-weight":"bold","border-bottom":"1px solid #2d3748","padding-bottom":"2px","margin-bottom":"3px",display:"flex","justify-content":"space-between",gap:"10px"}},r0={style:{color:"#94a3b8"}},o0={style:{color:"#ecc94b"}},a0={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"2px 10px"}},ho=300,l0=Ti({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=jt(null),s=jt(null),r=yn({vin:!0,vout:!0,iin:!0,iout:!0}),o=yn({auto:!0,min:0,max:20}),a=yn({auto:!0,min:0,max:5});function l(O){o.auto=!1,o.min=0,o.max=O}function c(O){a.auto=!1,a.min=0,a.max=O}const u=[];let d=0;const f=jt(null),p=jt(0),v=jt(0);function _(O){u.push(O),u.length>ho&&u.shift()}_s(()=>e.latestSample,O=>{O&&_(O)});function g(){const O=s.value;if(!O||!i.value)return;const I=i.value.clientWidth,M=i.value.clientHeight;if(I===0||M===0)return;const E=window.devicePixelRatio||1;O.width=Math.floor(I*E),O.height=Math.floor(M*E);const A=O.getContext("2d");if(!A)return;A.scale(E,E),A.fillStyle="#121519",A.fillRect(0,0,I,M);const at=52,it=52,dt=22,xt=22,W=I-at-it,k=M-dt-xt;if(W<=10||k<=10)return;let q=o.min,_t=o.max;if(o.auto){let V=10,Y=0;if(u.length>0){let ft=0,y=0;if(u.forEach(R=>{r.vin&&(R.vin>ft&&(ft=R.vin),R.vin<y&&(y=R.vin)),r.vout&&(R.vout>ft&&(ft=R.vout),R.vout<y&&(y=R.vout))}),ft>0){const R=ft*1.15;R<=15?V=Math.max(5,Math.ceil(R)):R<=30?V=Math.ceil(R/5)*5:R<=100?V=Math.ceil(R/10)*10:V=Math.ceil(R/20)*20}}q=Y,_t=V,o.min=q,o.max=_t}_t<=q&&(_t=q+1);const N=_t-q;let D=a.min,ht=a.max;if(a.auto){let V=3,Y=0;if(u.length>0){let ft=0,y=0;if(u.forEach(R=>{r.iin&&(R.iin>ft&&(ft=R.iin),R.iin<y&&(y=R.iin)),r.iout&&(R.iout>ft&&(ft=R.iout),R.iout<y&&(y=R.iout))}),ft>0){const R=ft*1.2;R<=2?V=Math.max(.5,Math.ceil(R*10)/10):R<=10?V=Math.ceil(R):V=Math.ceil(R/2)*2}}D=Y,ht=V,a.min=D,a.max=ht}ht<=D&&(ht=D+.1);const Et=ht-D,K=5,z=8;A.strokeStyle="#1e293b",A.lineWidth=1,A.setLineDash([3,3]);for(let V=0;V<=K;V++){const Y=dt+k/K*V;A.beginPath(),A.moveTo(at,Y),A.lineTo(at+W,Y),A.stroke()}for(let V=0;V<=z;V++){const Y=at+W/z*V;A.beginPath(),A.moveTo(Y,dt),A.lineTo(Y,dt+k),A.stroke()}A.setLineDash([]),A.strokeStyle="#334155",A.lineWidth=1,A.strokeRect(at,dt,W,k),A.font='10px "Consolas", monospace',A.textAlign="right",A.textBaseline="middle",A.fillStyle="#38bdf8";for(let V=0;V<=K;V++){const Y=dt+k/K*V,ft=_t-N/K*V,y=N>=10?`${ft.toFixed(1)}V`:`${ft.toFixed(2)}V`;A.fillText(y,at-6,Y),A.strokeStyle="#0284c7",A.beginPath(),A.moveTo(at-4,Y),A.lineTo(at,Y),A.stroke()}A.textAlign="left",A.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.fillStyle="#00d2ff",A.fillText("⚡ 电压 (V)",at-34,dt-8),A.font='10px "Consolas", monospace',A.textAlign="left",A.textBaseline="middle",A.fillStyle="#34d399";for(let V=0;V<=K;V++){const Y=dt+k/K*V,ft=ht-Et/K*V,y=Et>=5?`${ft.toFixed(2)}A`:`${ft.toFixed(3)}A`;A.fillText(y,at+W+6,Y),A.strokeStyle="#059669",A.beginPath(),A.moveTo(at+W,Y),A.lineTo(at+W+4,Y),A.stroke()}if(A.textAlign="right",A.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.fillStyle="#06d6a0",A.fillText("🔋 电流 (A)",at+W+34,dt-8),A.font='10px "Consolas", monospace',A.fillStyle="#64748b",A.textAlign="center",A.textBaseline="top",u.length>1){const V=u[0].t,Y=u[u.length-1].t,ft=Math.max(.1,(Y-V)/1e3);for(let y=0;y<=z;y+=2){const R=at+W/z*y,H=ft*(1-y/z),b=y===z?"0.0s":`-${H.toFixed(1)}s`;A.fillText(b,R,dt+k+5)}}else A.fillText("时间轴 (Time)",at+W/2,dt+k+5);if(u.length<2){A.fillStyle="#475569",A.font='12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.textAlign="center",A.textBaseline="middle",A.fillText("⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...",at+W/2,dt+k/2);return}A.save(),A.beginPath(),A.rect(at,dt,W,k),A.clip();function B(V,Y){if(!A)return;A.strokeStyle=Y,A.lineWidth=1.8,A.beginPath();const ft=u.length;for(let y=0;y<ft;y++){const R=at+y/(ho-1)*W,H=u[y][V],b=dt+k-(H-q)/N*k;y===0?A.moveTo(R,b):A.lineTo(R,b)}A.stroke()}function U(V,Y){if(!A)return;A.strokeStyle=Y,A.lineWidth=1.8,A.beginPath();const ft=u.length;for(let y=0;y<ft;y++){const R=at+y/(ho-1)*W,H=u[y][V],b=dt+k-(H-D)/Et*k;y===0?A.moveTo(R,b):A.lineTo(R,b)}A.stroke()}if(r.vin&&B("vin","#00d2ff"),r.vout&&B("vout","#ffd166"),r.iin&&U("iin","#06d6a0"),r.iout&&U("iout","#ef476f"),f.value&&p.value>=at&&p.value<=at+W){A.strokeStyle="#94a3b8",A.lineWidth=1,A.setLineDash([2,2]),A.beginPath(),A.moveTo(p.value,dt),A.lineTo(p.value,dt+k),A.stroke(),A.setLineDash([]);const V=f.value;if(r.vin){const Y=dt+k-(V.vin-q)/N*k;A.fillStyle="#00d2ff",A.beginPath(),A.arc(p.value,Y,3.5,0,Math.PI*2),A.fill()}if(r.vout){const Y=dt+k-(V.vout-q)/N*k;A.fillStyle="#ffd166",A.beginPath(),A.arc(p.value,Y,3.5,0,Math.PI*2),A.fill()}if(r.iin){const Y=dt+k-(V.iin-D)/Et*k;A.fillStyle="#06d6a0",A.beginPath(),A.arc(p.value,Y,3.5,0,Math.PI*2),A.fill()}if(r.iout){const Y=dt+k-(V.iout-D)/Et*k;A.fillStyle="#ef476f",A.beginPath(),A.arc(p.value,Y,3.5,0,Math.PI*2),A.fill()}}A.restore()}function h(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=O.clientY-I.top,A=52,it=I.width-A-52;if(M>=A&&M<=A+it&&u.length>1){const dt=(M-A)/it,xt=Math.min(u.length-1,Math.max(0,Math.round(dt*(ho-1)))),W=u[xt];if(W){const k=u[0].t,_t=(u[u.length-1].t-k)/1e3,N=(W.t-k)/1e3,D=_t-N;f.value={idx:xt+1,relTime:D>.05?`-${D.toFixed(2)}s`:"最新点",vin:W.vin,vout:W.vout,iin:W.iin,iout:W.iout},p.value=M,v.value=E;return}}f.value=null}function w(){f.value=null}function L(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=I.width,A=52,at=52,it=O.deltaY<0?-1:1;if(M<=A+35){O.preventDefault(),o.auto=!1;const dt=Math.max(1,o.max-o.min),xt=dt>20?5:dt>5?2:1;o.max=Math.max(o.min+1,Math.round((o.max+it*xt)*10)/10)}else if(M>=E-at-35){O.preventDefault(),a.auto=!1;const dt=Math.max(.2,a.max-a.min),xt=dt>5?1:dt>1?.5:.2;a.max=Math.max(a.min+.2,Math.round((a.max+it*xt)*10)/10)}}function S(O){if(!i.value)return;const I=i.value.getBoundingClientRect(),M=O.clientX-I.left,E=I.width;M<=52+35?o.auto=!0:M>=E-52-35&&(a.auto=!0)}function j(){u.length=0,f.value=null}function F(){g(),d=requestAnimationFrame(F)}return dr(()=>{F()}),fr(()=>{cancelAnimationFrame(d)}),t({clear:j}),(O,I)=>(Ot(),Ft("div",Ov,[m("div",Fv,[I[18]||(I[18]=m("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[m("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Lt(" 实时参数时域波形 (双纵坐标轴) ")],-1)),m("div",Bv,[m("label",Vv,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[0]||(I[0]=M=>r.vin=M)},null,512),[[Bi,r.vin]]),I[14]||(I[14]=Lt(" Vin (电源电压) ",-1))]),m("label",zv,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[1]||(I[1]=M=>r.vout=M)},null,512),[[Bi,r.vout]]),I[15]||(I[15]=Lt(" Vout (负载电压) ",-1))]),m("label",kv,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[2]||(I[2]=M=>r.iin=M)},null,512),[[Bi,r.iin]]),I[16]||(I[16]=Lt(" Iin (电源电流) ",-1))]),m("label",Hv,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[3]||(I[3]=M=>r.iout=M)},null,512),[[Bi,r.iout]]),I[17]||(I[17]=Lt(" Iout (负载电流) ",-1))])]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"10.5px","background-color":"#2d3748",color:"#a0aec0",border:"1px solid #4a5568"},onClick:j,title:"清空当前波形缓存"}," 清空波形 ")]),m("div",Gv,[m("div",Wv,[I[24]||(I[24]=m("span",{style:{color:"#00d2ff","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," ⚡ 左纵轴 (电压): ",-1)),m("label",$v,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[4]||(I[4]=M=>o.auto=M)},null,512),[[Bi,o.auto]]),I[19]||(I[19]=m("span",null,"自适应",-1))]),m("div",Xv,[I[20]||(I[20]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),ne(m("input",{type:"number","onUpdate:modelValue":I[5]||(I[5]=M=>o.min=M),disabled:o.auto,onChange:I[6]||(I[6]=M=>o.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围下限",step:"1"},null,40,qv),[[We,o.min,void 0,{number:!0}]]),I[21]||(I[21]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),ne(m("input",{type:"number","onUpdate:modelValue":I[7]||(I[7]=M=>o.max=M),disabled:o.auto,onChange:I[8]||(I[8]=M=>o.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围上限",step:"1"},null,40,jv),[[We,o.max,void 0,{number:!0}]]),I[22]||(I[22]=m("span",{style:{color:"#38bdf8","font-weight":"bold","font-size":"10.5px"}},"V",-1))]),m("div",Yv,[I[23]||(I[23]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ot(),Ft(Pe,null,xi([15,30,60],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>l(M),title:`锁定 0 ~ ${M}V 范围`},yt(M)+"V ",9,Kv)),64))])]),m("div",Zv,[I[30]||(I[30]=m("span",{style:{color:"#06d6a0","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," 🔋 右纵轴 (电流): ",-1)),m("label",Jv,[ne(m("input",{type:"checkbox","onUpdate:modelValue":I[9]||(I[9]=M=>a.auto=M)},null,512),[[Bi,a.auto]]),I[25]||(I[25]=m("span",null,"自适应",-1))]),m("div",Qv,[I[26]||(I[26]=m("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),ne(m("input",{type:"number","onUpdate:modelValue":I[10]||(I[10]=M=>a.min=M),disabled:a.auto,onChange:I[11]||(I[11]=M=>a.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围下限",step:"0.5"},null,40,t0),[[We,a.min,void 0,{number:!0}]]),I[27]||(I[27]=m("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),ne(m("input",{type:"number","onUpdate:modelValue":I[12]||(I[12]=M=>a.max=M),disabled:a.auto,onChange:I[13]||(I[13]=M=>a.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围上限",step:"0.5"},null,40,e0),[[We,a.max,void 0,{number:!0}]]),I[28]||(I[28]=m("span",{style:{color:"#34d399","font-weight":"bold","font-size":"10.5px"}},"A",-1))]),m("div",n0,[I[29]||(I[29]=m("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ot(),Ft(Pe,null,xi([2,5,10],M=>m("button",{key:M,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:E=>c(M),title:`锁定 0 ~ ${M}A 范围`},yt(M)+"A ",9,i0)),64))])])]),m("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519",cursor:"crosshair",overflow:"hidden"},onMousemove:h,onMouseleave:w,onWheel:L,onDblclick:S},[m("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512),f.value?(Ot(),Ft("div",{key:0,style:de([{left:`${p.value}px`,top:`${v.value}px`},{position:"absolute",transform:"translate(-50%, -100%)","margin-top":"-10px","pointer-events":"none","z-index":"20","background-color":"rgba(22, 27, 34, 0.95)",border:"1px solid #38bdf8","border-radius":"4px",padding:"5px 8px","font-family":"'Consolas', monospace","font-size":"10.5px",color:"#e2e8f0","box-shadow":"0 4px 12px rgba(0,0,0,0.7)","white-space":"nowrap"}])},[m("div",s0,[m("span",r0,"采样点 #"+yt(f.value.idx),1),m("span",o0,yt(f.value.relTime),1)]),m("div",a0,[m("div",null,[I[31]||(I[31]=m("span",{style:{color:"#00d2ff","font-weight":"bold"}},"Vin:",-1)),Lt(" "+yt(f.value.vin.toFixed(3))+"V",1)]),m("div",null,[I[32]||(I[32]=m("span",{style:{color:"#06d6a0","font-weight":"bold"}},"Iin:",-1)),Lt(" "+yt(f.value.iin.toFixed(3))+"A",1)]),m("div",null,[I[33]||(I[33]=m("span",{style:{color:"#ffd166","font-weight":"bold"}},"Vout:",-1)),Lt(" "+yt(f.value.vout.toFixed(3))+"V",1)]),m("div",null,[I[34]||(I[34]=m("span",{style:{color:"#ef476f","font-weight":"bold"}},"Iout:",-1)),Lt(" "+yt(f.value.iout.toFixed(3))+"A",1)])])],4)):Me("",!0)],544)]))}}),c0=au(l0,[["__scopeId","data-v-50507eef"]]),u0={class:"modal-card",style:{"max-width":"680px"}},d0={class:"modal-header"},f0={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},h0={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},p0={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},m0={style:{display:"flex","align-items":"center",gap:"8px"}},g0={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},_0={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},v0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},x0={style:{color:"#ecc94b"}},y0={style:{color:"#63b3ed"}},b0={style:{color:"#e2e8f0"}},M0={style:{color:"#48bb78"}},S0={style:{display:"flex","align-items":"center",gap:"6px"}},E0=["onClick"],w0=["onClick"],T0=["onClick"],A0={class:"modal-footer"},C0=Ti({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ot(),Ft("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=ls(i=>t.$emit("close"),["self"]))},[m("div",u0,[m("div",d0,[e[5]||(e[5]=m("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[m("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("circle",{cx:"12",cy:"12",r:"10"}),m("polyline",{points:"12 6 12 12 16 14"})]),Lt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),m("div",f0,[n.records.length===0?(Ot(),Ft("div",h0," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Me("",!0),(Ot(!0),Ft(Pe,null,xi(n.records,i=>{var s,r;return Ot(),Ft("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[m("div",p0,[m("div",m0,[m("span",g0,yt(i.title),1),m("span",_0,yt(new Date(i.createdAt).toLocaleString()),1)]),m("div",v0,[m("span",null,[e[6]||(e[6]=Lt("电压: ",-1)),m("b",x0,yt(i.config.voltageMin)+"V ~ "+yt(i.config.voltageMax)+"V",1)]),m("span",null,[e[7]||(e[7]=Lt("负载: ",-1)),m("b",y0,yt(i.config.loadMin)+" ~ "+yt(i.config.loadMax)+" ("+yt(i.config.loadMode)+")",1)]),m("span",null,[e[8]||(e[8]=Lt("点数: ",-1)),m("b",b0,yt(i.points.length),1)]),m("span",null,[e[9]||(e[9]=Lt("最高效率: ",-1)),m("b",M0,yt(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),m("div",S0,[m("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Lt(" 进入数据查看 ",-1)])],8,E0),m("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,w0),m("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"3 6 5 6 21 6"}),m("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,T0)])],32)}),128))]),m("div",A0,[m("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Me("",!0)}}),R0={class:"modal-card",style:{"max-width":"520px"}},P0={class:"modal-header"},L0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},D0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},I0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},U0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},N0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},O0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},F0={style:{display:"flex","align-items":"center",gap:"6px"}},B0=["disabled"],V0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},z0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},k0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},H0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},G0={style:{display:"flex","align-items":"center",gap:"6px"}},W0=["disabled"],$0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},X0={class:"modal-footer"},q0=Ti({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=jt(115200),e=jt(115200);return(i,s)=>n.isOpen?(Ot(),Ft("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=ls(r=>i.$emit("close"),["self"]))},[m("div",R0,[m("div",P0,[s[10]||(s[10]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),m("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),m("div",L0,[m("div",D0,[s[11]||(s[11]=m("div",null,[m("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[m("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Lt(" 内置仿真演示驱动 (Virtual Simulation) ")]),m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),m("div",I0,[m("div",U0,[m("span",N0,[m("span",{style:de([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Lt(" 直流电源 (RIGOL DP700) ",-1))]),m("span",O0,yt(n.psuPortName),1)]),m("div",F0,[ne(m("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[m("option",{value:115200},"115200 bps (默认)",-1),m("option",{value:9600},"9600 bps",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1)])],8,B0),[[Ks,t.value,void 0,{number:!0}]]),n.psuConnected?(Ot(),Ft("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ot(),Ft("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),m("div",V0,[m("div",z0,[m("span",k0,[m("span",{style:de([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Lt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),m("span",H0,yt(n.loadPortName),1)]),m("div",G0,[ne(m("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[m("option",{value:115200},"115200 bps (默认)",-1),m("option",{value:9600},"9600 bps",-1),m("option",{value:19200},"19200 bps",-1),m("option",{value:38400},"38400 bps",-1)])],8,W0),[[Ks,e.value,void 0,{number:!0}]]),n.loadConnected?(Ot(),Ft("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ot(),Ft("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Me("",!0):(Ot(),Ft("div",$0,[...s[16]||(s[16]=[Lt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),m("b",null,"【启用仿真】",-1),Lt("无障碍测试。 ",-1)])]))]),m("div",X0,[m("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Me("",!0)}});class j0{constructor(){Xt(this,"connected",!0);Xt(this,"outputOn",!1);Xt(this,"targetVoltage",5);Xt(this,"currentVoltage",0);Xt(this,"lastVoltage",0);Xt(this,"voltageChangeTime",0);Xt(this,"currentLimit",3);Xt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}getTargetVoltage(){return this.targetVoltage}getCurrentLimit(){return this.currentLimit}}class Y0{constructor(){Xt(this,"connected",!0);Xt(this,"inputOn",!1);Xt(this,"isShort",!1);Xt(this,"mode","CC");Xt(this,"targetCurrent",1);Xt(this,"currentCurrent",0);Xt(this,"lastCurrent",0);Xt(this,"targetPower",10);Xt(this,"currentPower",0);Xt(this,"lastPower",0);Xt(this,"targetVoltage",5);Xt(this,"targetResistance",5);Xt(this,"loadChangeTime",0);Xt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}getMode(){return this.mode}setMode(t){this.mode=t,this.loadChangeTime=performance.now()}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}setVoltage(t){this.targetVoltage=Math.max(.1,t),this.loadChangeTime=performance.now()}setResistance(t){this.targetResistance=Math.max(.1,t),this.loadChangeTime=performance.now()}getTargetCurrent(){return this.targetCurrent}getTargetPower(){return this.targetPower}getTargetVoltage(){return this.targetVoltage}getTargetResistance(){return this.targetResistance}setShort(t){this.isShort=t}isShortOn(){return this.isShort}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if(this.isShort){const l=.04+(Math.random()-.5)*.01,c=10+(Math.random()-.5)*.02;return{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(c*1e3)/1e3),pout:Math.max(0,Math.round(l*c*1e3)/1e3)}}const e=t??10;if(e<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CW"){this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CV"){const l=this.targetVoltage+(Math.random()-.5)*.003;return o=Math.max(.1,Math.min(15,(e-l)*1.5))+(Math.random()-.5)*.005,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{const l=r+(Math.random()-.5)*.003;return o=Math.max(.01,l/this.targetResistance)+(Math.random()-.5)*.002,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class dn{static apply(t,e){return`:APPLy CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setVoltageAndLimit(t,e){return dn.apply(t,e)}static getApply(){return`:APPLy? CH1
`}static setOutput(t){return`:OUTPut CH1,${t?"ON":"OFF"}
`}static getOutput(){return`:OUTPut? CH1
`}static measureAll(){return`:MEASure:ALL? CH1
`}}class Ee{static setMode(t){let e="CURR";return t==="CC"?e="CURR":t==="CV"?e="VOLT":t==="CW"?e="POW":t==="CR"&&(e="RES"),`:MODE ${e}
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
`);)u++;if(this.readBuffer=this.readBuffer.slice(u),!c)continue;const d=c.toUpperCase();if(d===o||d===o.replace(/^:/,""))continue;return await new Promise(f=>setTimeout(f,15)),c}await new Promise(c=>setTimeout(c,8))}const a=this.readBuffer.trim();if(this.readBuffer="",a)return a;throw new Error(`[${this.type}] 设备未响应指令 (超时 ${e}ms): ${i}`)}handleVirtualQuery(t){const e=t.trim().toUpperCase();if(this.type==="PSU"){if(e.includes("*IDN?"))return"RIGOL TECHNOLOGIES,DP711,DP7A234500001,00.01.02";if(e.includes(":MEAS:ALL")||e.includes(":MEASURE:ALL")||e.includes(":MEAS")){const i=this.virtualPsu.measure();return`${i.vin.toFixed(3)},${i.iin.toFixed(3)},${i.pin.toFixed(3)}`}return e.includes(":APPL?")?`${this.virtualPsu.getTargetVoltage().toFixed(3)},${this.virtualPsu.getCurrentLimit().toFixed(3)}`:e.includes(":OUTP?")||e.includes(":OUTPUT?")?this.virtualPsu.isOutputOn()?"ON":"OFF":e.includes(":VOLT?")||e.includes(":VOLTAGE?")?this.virtualPsu.getTargetVoltage().toFixed(3):e.includes(":CURR?")||e.includes(":CURRENT?")?this.virtualPsu.getCurrentLimit().toFixed(3):"OK"}else{if(e.includes("*IDN?"))return"UNI-T,UTL8511,UTL8500A10098,V1.04";if(e.includes(":MEAS:VOLT?"))return this.virtualLoad.measure().vout.toFixed(3);if(e.includes(":MEAS:CURR?"))return this.virtualLoad.measure().iout.toFixed(3);if(e.includes(":MEAS:POW?"))return this.virtualLoad.measure().pout.toFixed(3);if(e.includes(":MEAS:RES?")){const i=this.virtualLoad.measure();return(i.iout>.001?i.vout/i.iout:9999).toFixed(3)}if(e.includes(":INP:SHOR?"))return this.virtualLoad.isShortOn()?"1":"0";if(e.includes(":INP?")||e.includes(":INPUT?"))return this.virtualLoad.isInputOn()?"1":"0";if(e.includes(":MODE?")||e.includes(":FUNC?")){const i=this.virtualLoad.getMode();return i==="CC"?"CURR":i==="CV"?"VOLT":i==="CW"?"POW":"RES"}return e.includes(":CURR?")?this.virtualLoad.getTargetCurrent().toFixed(3):e.includes(":VOLT?")?this.virtualLoad.getTargetVoltage().toFixed(3):e.includes(":POW?")?this.virtualLoad.getTargetPower().toFixed(3):e.includes(":RES?")?this.virtualLoad.getTargetResistance().toFixed(3):"OK"}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const ds=class ds{constructor(){Xt(this,"psu",new Ad("PSU"));Xt(this,"load",new Ad("LOAD"));Xt(this,"onDeviceLostListener",null);Xt(this,"cachedTelemetry",{vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0});Xt(this,"lastPsuStatus",{outputOn:!1,setVoltage:0,setCurrentLimit:0});Xt(this,"lastLoadStatus",{inputOn:!1,mode:"CC",targetVal:0,isShort:!1});Xt(this,"isTesting",!1);Xt(this,"psuConsecutiveFailures",0);Xt(this,"loadConsecutiveFailures",0);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}resetFailureCounters(){this.psuConsecutiveFailures=0,this.loadConsecutiveFailures=0}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){if(this.psu.state.connected){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason}}if(this.load.state.connected){const t=this.load.checkAlive();if(!t.alive)return this.load.handleDeviceLost(t.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:t.reason}}return{ok:!0}}static getInstance(){return ds.instance||(ds.instance=new ds),ds.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.resetFailureCounters(),this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){if(this.psu.isVirtual)this.psu.virtualPsu.setOutput(t),t&&(this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i));else if(t){const s=Math.abs(this.lastPsuStatus.setVoltage-e)>1e-4,r=Math.abs(this.lastPsuStatus.setCurrentLimit-i)>1e-4;(s||r||!this.lastPsuStatus.outputOn)&&await this.psu.write(dn.setVoltageAndLimit(e,i)),this.lastPsuStatus.outputOn||await this.psu.write(dn.setOutput(!0))}else await this.psu.write(dn.setOutput(!1));this.lastPsuStatus.outputOn=t,t&&(this.lastPsuStatus.setVoltage=e,this.lastPsuStatus.setCurrentLimit=i)}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):e==="CW"?this.load.virtualLoad.setPower(i):e==="CV"?this.load.virtualLoad.setVoltage(i):e==="CR"&&this.load.virtualLoad.setResistance(i)):(await this.load.write(Ee.setMode(e)),e==="CC"?await this.load.write(Ee.setCurrent(i)):e==="CW"?await this.load.write(Ee.setPower(i)):e==="CV"?await this.load.write(Ee.setVoltage(i)):e==="CR"&&await this.load.write(Ee.setResistance(i)),await this.load.write(Ee.setInput(t))),this.lastLoadStatus.inputOn=t,this.lastLoadStatus.mode=e,this.lastLoadStatus.targetVal=i}async measurePsu(){if(this.psu.isVirtual)return this.psu.virtualPsu.measure();if(!this.psu.state.connected){if(this.isTesting)throw this.psu.handleDeviceLost("直流电源串口未连接"),new Error("直流电源串口未连接");return{vin:0,iin:0,pin:0}}try{const t=await this.psu.query(dn.measureAll(),400,1),e=t.split(",").map(i=>parseFloat(i.trim()));if(e.length>=2&&!isNaN(e[0])&&!isNaN(e[1])){const i=Math.max(0,e[0]),s=Math.max(0,e[1]),r=e.length>=3&&!isNaN(e[2])?Math.max(0,e[2]):Math.round(i*s*1e3)/1e3;return this.psuConsecutiveFailures=0,{vin:i,iin:s,pin:r}}throw new Error(`电源返回遥测数据格式无效: "${t}"`)}catch(t){if(this.psuConsecutiveFailures++,console.warn(`[PSU measureAll error count: ${this.psuConsecutiveFailures}]:`,t),this.isTesting&&this.psuConsecutiveFailures>=2)throw this.psu.handleDeviceUnresponsive(`直流电源突然未响应指令 (超时无回复): ${(t==null?void 0:t.message)||t}`),new Error(`直流电源 [RIGOL DP700] 突然未响应指令: ${(t==null?void 0:t.message)||t}`);return{vin:0,iin:0,pin:0}}}async measureLoad(t){if(this.load.isVirtual)return this.load.virtualLoad.measure(t);if(!this.load.state.connected){if(this.isTesting)throw this.load.handleDeviceLost("电子负载串口未连接"),new Error("电子负载串口未连接");return{vout:0,iout:0,pout:0}}try{const e=await this.load.query(Ee.measureVolt(),350,1),i=await this.load.query(Ee.measureCurr(),350,1),s=parseFloat(e),r=parseFloat(i);if(!isNaN(s)&&!isNaN(r)&&e.trim()!==""&&i.trim()!==""){this.loadConsecutiveFailures=0;const o=Math.round(s*r*1e3)/1e3;return{vout:Math.max(0,s),iout:Math.max(0,r),pout:o}}throw new Error(`负载返回遥测数据格式无效: V="${e}", I="${i}"`)}catch(e){if(this.loadConsecutiveFailures++,console.warn(`[LOAD measure error count: ${this.loadConsecutiveFailures}]:`,e),this.isTesting&&this.loadConsecutiveFailures>=2)throw this.load.handleDeviceUnresponsive(`电子负载突然未响应指令 (超时无回复): ${(e==null?void 0:e.message)||e}`),new Error(`电子负载 [UNI-T UTL8500] 突然未响应指令: ${(e==null?void 0:e.message)||e}`);return{vout:0,iout:0,pout:0}}}async measureAsync(){const t=await this.measurePsu(),e=await this.measureLoad(t.vin),i=t.pin>.01?e.pout/t.pin*100:0,s={vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))};return this.cachedTelemetry=s,s}measure(){if(this.psu.isVirtual&&this.load.isVirtual){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}return this.cachedTelemetry}async queryPsuStatus(){if(this.psu.isVirtual){const t={outputOn:this.psu.virtualPsu.isOutputOn(),setVoltage:this.psu.virtualPsu.getTargetVoltage(),setCurrentLimit:this.psu.virtualPsu.getCurrentLimit()};return this.lastPsuStatus=t,t}if(!this.psu.state.connected)return this.lastPsuStatus;try{const t=await this.psu.query(dn.getOutput(),300),e=t.toUpperCase().includes("ON")||t.trim()==="1";let i=this.lastPsuStatus.setVoltage,s=this.lastPsuStatus.setCurrentLimit;const r=await this.psu.query(dn.getApply(),300);if(r&&r.includes(",")){const a=r.split(",").map(l=>parseFloat(l.trim()));isNaN(a[0])||(i=a[0]),a.length>=2&&!isNaN(a[1])&&(s=a[1])}const o={outputOn:e,setVoltage:i,setCurrentLimit:s};return this.lastPsuStatus=o,o}catch(t){return console.warn("[queryPsuStatus error]:",t),this.lastPsuStatus}}async queryLoadStatus(){if(this.load.isVirtual){const t=this.load.virtualLoad.getMode();let e=0;t==="CC"?e=this.load.virtualLoad.getTargetCurrent():t==="CW"?e=this.load.virtualLoad.getTargetPower():t==="CV"?e=this.load.virtualLoad.getTargetVoltage():t==="CR"&&(e=this.load.virtualLoad.getTargetResistance());const i={inputOn:this.load.virtualLoad.isInputOn(),mode:t,targetVal:e,isShort:this.load.virtualLoad.isShortOn()};return this.lastLoadStatus=i,i}if(!this.load.state.connected)return this.lastLoadStatus;try{const t=await this.load.query(Ee.getInput(),250),e=await this.load.query(Ee.getMode(),250),i=t.includes("1")||t.toUpperCase().includes("ON");let s=this.lastLoadStatus.mode;const r=e.toUpperCase().trim();r.includes("CURR")?s="CC":r.includes("VOLT")?s="CV":r.includes("POW")?s="CW":r.includes("RES")&&(s="CR");let o=Ee.getCurrent();s==="CV"?o=Ee.getVoltage():s==="CW"?o=Ee.getPower():s==="CR"&&(o=Ee.getResistance());const a=await this.load.query(o,250),l=parseFloat(a),c=isNaN(l)?this.lastLoadStatus.targetVal:l,u={inputOn:i,mode:s,targetVal:c,isShort:!1};return this.lastLoadStatus=u,u}catch(t){return console.warn("[queryLoadStatus error]:",t),this.lastLoadStatus}}async setPsuVoltageOnly(t){const e=this.lastPsuStatus.setCurrentLimit>0?this.lastPsuStatus.setCurrentLimit:3;this.psu.isVirtual?this.psu.virtualPsu.setVoltage(t):Math.abs(this.lastPsuStatus.setVoltage-t)>1e-4&&await this.psu.write(dn.apply(t,e)),this.lastPsuStatus.setVoltage=t}async setPsuCurrentLimitOnly(t){const e=this.lastPsuStatus.setVoltage>0?this.lastPsuStatus.setVoltage:5;this.psu.isVirtual?this.psu.virtualPsu.setCurrentLimit(t):Math.abs(this.lastPsuStatus.setCurrentLimit-t)>1e-4&&await this.psu.write(dn.apply(e,t)),this.lastPsuStatus.setCurrentLimit=t}async setPsuOutputState(t){this.psu.isVirtual?this.psu.virtualPsu.setOutput(t):await this.psu.write(dn.setOutput(t)),this.lastPsuStatus.outputOn=t}async setLoadModeAndValue(t,e){this.load.isVirtual?(this.load.virtualLoad.setMode(t),t==="CC"?this.load.virtualLoad.setCurrent(e):t==="CW"?this.load.virtualLoad.setPower(e):t==="CV"?this.load.virtualLoad.setVoltage(e):t==="CR"&&this.load.virtualLoad.setResistance(e)):(await this.load.write(Ee.setMode(t)),t==="CC"?await this.load.write(Ee.setCurrent(e)):t==="CW"?await this.load.write(Ee.setPower(e)):t==="CV"?await this.load.write(Ee.setVoltage(e)):t==="CR"&&await this.load.write(Ee.setResistance(e))),this.lastLoadStatus.mode=t,this.lastLoadStatus.targetVal=e}async setLoadInputState(t){this.load.isVirtual?this.load.virtualLoad.setInput(t):await this.load.write(Ee.setInput(t)),this.lastLoadStatus.inputOn=t}async setLoadShortState(t){this.load.isVirtual?this.load.virtualLoad.setShort(t):await this.load.write(Ee.setShort(t)),this.lastLoadStatus.isShort=t}async clearLoadProtectionState(){this.load.isVirtual||await this.load.write(Ee.clearProtection())}async sendPsuRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.psu.query(e):(await this.psu.write(e),"已发送指令至电源串口"):""}async sendLoadRawSCPI(t){const e=t.replace(/\r/g,"").replace(/[\r\n]+$/g,"").trim();return e?e.includes("?")?await this.load.query(e):(await this.load.write(e),"已发送指令至负载串口"):""}async emergencyStopAll(){try{this.psu.isVirtual?this.psu.virtualPsu.setOutput(!1):this.psu.state.connected&&await this.psu.write(dn.setOutput(!1))}catch(t){console.warn("[PSU emergency stop output off error]:",t)}this.lastPsuStatus.outputOn=!1;try{this.load.isVirtual?this.load.virtualLoad.setInput(!1):this.load.state.connected&&await this.load.write(Ee.setInput(!1))}catch(t){console.warn("[LOAD emergency stop input off error]:",t)}this.lastLoadStatus.inputOn=!1}};Xt(ds,"instance");let da=ds;const K0="PowerChipTesterDB",Z0=1,En="test_runs",cp=5;function Ia(){return new Promise((n,t)=>{const e=indexedDB.open(K0,Z0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(En)||s.createObjectStore(En,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function J0(n){const t=await Ia(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([En],"readwrite");r.objectStore(En).put(e),r.oncomplete=async()=>{try{await ex(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Ia();return new Promise((t,e)=>{const o=n.transaction([En],"readonly").objectStore(En).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Q0(n){const t=await Ia();return new Promise((e,i)=>{const o=t.transaction([En],"readonly").objectStore(En).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function tx(n){const t=await Ia();return new Promise((e,i)=>{const s=t.transaction([En],"readwrite");s.objectStore(En).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function ex(n){return new Promise((t,e)=>{const s=n.transaction([En],"readwrite").objectStore(En),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function jo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(p=>`"${p}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(p=>{const v=n.voltageSteps.map(_=>{const g=n.points.find(h=>Math.abs(h.voltageTarget-_)<1e-4&&Math.abs(h.loadTarget-p)<1e-4);return g&&g.status==="completed"?g.efficiency.toFixed(2):'""'});i.push(`"${p}",${v.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(p=>{i.push([p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),`"${p.loadMode}"`,p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2),`"${p.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压切换后0.5s内被忽略的数据及步间暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.5s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(p=>{i.push([p.relTime.toFixed(4),p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),p.stepRelTime.toFixed(4),p.isValidForAvg?'"YES"':'"NO(0.5s切换/暂态过滤)"',p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const nx={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},ix={class:"menubar"},sx={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},rx={style:{display:"flex","align-items":"center",gap:"5px"}},ox={style:{display:"flex","align-items":"center",gap:"5px"}},ax={class:"panel-left"},lx={class:"group-box"},cx={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},ux={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},dx={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"4px"}},fx=["value"],hx={key:0,style:{"margin-bottom":"6px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},px={style:{display:"flex","align-items":"center",gap:"4px"}},mx=["value"],gx={key:1,style:{"margin-top":"4px","font-size":"10px",display:"flex","justify-content":"space-between","align-items":"center",background:"#121519",padding:"2px 6px","border-radius":"3px",border:"1px solid #2d3748"}},_x={class:"group-box"},vx={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},xx={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},yx={style:{"margin-bottom":"6px"}},bx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Mx=["disabled"],Sx=["disabled"],Ex=["disabled"],wx={style:{"margin-bottom":"6px"}},Tx={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},Ax={style:{display:"flex",gap:"4px"}},Cx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Rx=["disabled"],Px={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Lx=["disabled"],Dx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Ix={style:{"font-size":"10px",color:"#a0aec0"}},Ux=["disabled"],Nx={style:{"font-size":"10px",color:"#a0aec0"}},Ox=["disabled"],Fx={style:{"font-size":"10px",color:"#a0aec0"}},Bx=["disabled"],Vx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"6px"}},zx=["disabled"],kx={class:"group-box"},Hx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Gx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Wx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},$x={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Xx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Yx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Kx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Zx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},ty={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},ey={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},ny={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},iy={style:{display:"flex","flex-direction":"column",gap:"6px"}},sy={style:{display:"flex",gap:"6px"}},ry=["disabled"],oy=["disabled"],ay={class:"panel-right"},ly={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},cy={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},uy={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},dy={style:{color:"#48bb78"}},fy={style:{flex:"1",overflow:"auto"}},hy={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},py={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},my={style:{padding:"4px 6px"}},gy={style:{padding:"4px 6px"}},_y={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},vy={style:{padding:"4px 6px"}},xy={style:{padding:"4px 6px"}},yy={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},by={style:{padding:"4px 6px"}},My={style:{padding:"4px 6px"}},Sy={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},Ey={key:0,style:{color:"#48bb78"}},wy={key:1,style:{color:"#00d2ff"}},Ty={key:2,style:{color:"#4a5568"}},Ay={style:{padding:"4px 6px","text-align":"center"}},Cy={class:"statusbar"},Ry={key:0,style:{color:"#48bb78"}},Py={key:1},Ly={class:"device-lost-modal"},Dy={class:"device-lost-header"},Iy={class:"device-lost-body"},Uy={class:"device-lost-info-grid"},Ny={class:"info-row"},Oy={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},Fy={class:"info-row"},By={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},Vy={class:"info-row"},zy={class:"info-val"},ky={class:"info-row"},Hy={class:"info-val",style:{"font-family":"monospace"}},Gy={class:"device-lost-footer"},Wy=Ti({__name:"ConsoleView",setup(n){const t=lp(),e=da.getInstance(),i=jt(null),s=jt(!1),r=jt(!1),o=jt(!1),a=jt([]),l=yn({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),c=jt(null),u=jt(void 0),d=jt([]),f=jt(!1),p=jt(!1),v=jt("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let _=null,g=null;const h=yn({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:.8}),w=jt([]),L=jt([]),S=jt([]),j=jt(null),F=yn({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),O=Fe(()=>{const ot=Math.max(1,Math.floor((h.voltageMax-h.voltageMin)/h.voltageStep)+1),T=Math.max(1,Math.floor((h.loadMax-h.loadMin)/h.loadStep)+1);return ot*T}),I=Fe(()=>S.value.filter(ot=>ot.status==="completed").length),M=Fe(()=>S.value.filter(ot=>ot.status==="completed"));function E(ot){i.value=i.value===ot?null:ot}function A(){i.value=null}function at(){const ot=[];for(let rt=h.voltageMin;rt<=h.voltageMax+1e-5;rt+=h.voltageStep)ot.push(Math.round(rt*100)/100);const T=[];for(let rt=h.loadMin;rt<=h.loadMax+1e-5;rt+=h.loadStep)T.push(Math.round(rt*100)/100);w.value=ot,L.value=T;const $=[];let Tt=1;for(const rt of ot)for(const wt of T)$.push({stepIndex:Tt++,voltageTarget:rt,loadTarget:wt,loadMode:h.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});S.value=$,F.totalSteps=$.length,F.currentStep=0,F.progressPercent=0}function it(ot,T,$){console.error(`%c[SERIAL DEVICE LOST] %c${ot} (${T}): ${$}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),l.visible=!0,l.deviceType=ot,l.deviceName=T,l.reason=$,l.timestamp=new Date().toLocaleTimeString(),f.value&&(p.value=!0,v.value=`⚠️ 警告: 检测到串口设备【${T}】异常断开/丢失！测试已自动紧急暂停。`,e.emergencyStopAll().catch(()=>{}))}function dt(){l.visible=!1,r.value=!0}async function xt(){e.resetFailureCounters();try{v.value="正在检测仪器响应并尝试恢复...",!e.psu.isVirtual&&e.psu.state.connected&&await e.psu.query(dn.getApply(),400),!e.load.isVirtual&&e.load.state.connected&&await e.load.query(Ee.getMode(),400),f.value&&F.activeTargetV>0&&(await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad)),l.visible=!1,p.value=!1,v.value="仪器通信已恢复正常，测试继续进行..."}catch(ot){v.value=`⚠️ 恢复失败: ${(ot==null?void 0:ot.message)||ot}，请检查物理设备与连接`}}async function W(){if(l.visible=!1,o.value=!0,e.autoConnectVirtual(),e.resetFailureCounters(),f.value&&F.activeTargetV>0)try{await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad)}catch(ot){console.warn("Re-apply virtual step targets warning:",ot)}v.value="已切换为仿真驱动模式，测试已恢复继续",p.value=!1}async function k(){l.visible=!1,_&&_.abort(),await N()}function q(ot,T,$,Tt){const rt=performance.now(),wt=(rt-Tt)/1e3;F.vin=T.vin,F.iin=T.iin,F.pin=T.pin,F.vout=T.vout,F.iout=T.iout,F.pout=T.pout,F.efficiency=T.efficiency,u.value={t:rt,vin:T.vin,vout:T.vout,iin:T.iin,iout:T.iout};const Ut={timestamp:Date.now(),relTime:Math.round(wt*1e3)/1e3,stepIndex:ot.stepIndex,voltageTarget:ot.voltageTarget,loadTarget:ot.loadTarget,stepRelTime:$,isValidForAvg:!0,vin:T.vin,iin:T.iin,pin:T.pin,vout:T.vout,iout:T.iout,pout:T.pout,efficiency:T.efficiency};d.value.push(Ut)}async function _t(){if(!e.isBothConnected())if(o.value)e.autoConnectVirtual();else{r.value=!0,v.value="未检测到仪器硬件连接，请先配置串口（默认 115200bps）或开启仿真演示模式",alert(`未检测到物理仪器连接！

请在弹出的【仪器串口硬件连接】窗口中选择对应的串口设备（默认波特率 115200）；
或在左侧面板顶部勾选【🧪 启用仿真演示模式】以进行虚拟测试。`);return}at(),d.value=[],c.value&&c.value.clear(),u.value=void 0,f.value=!0,p.value=!1,e.isTesting=!0,e.resetFailureCounters(),_=new AbortController,v.value="正在执行全自动 2D 矩阵效率测试...",B();const ot=performance.now();try{let T=0,$=-999999;for(let Tt=0;Tt<S.value.length&&!_.signal.aborted;Tt++){for(;p.value&&!_.signal.aborted;)await new Promise(St=>setTimeout(St,200));const rt=S.value[Tt];rt.status="running",F.activeTargetV=rt.voltageTarget,F.activeTargetLoad=rt.loadTarget,F.currentStep=Tt+1;const wt=Tt===0||Math.abs(rt.voltageTarget-$)>1e-4;if($=rt.voltageTarget,wt){v.value=`正在切换电压至 ${rt.voltageTarget.toFixed(2)}V，下发设置并等待 0.5s 电源就绪...`;try{await e.setPsuOutput(!0,rt.voltageTarget,h.inputCurrentLimit)}catch(St){for(it("PSU",e.psu.state.model,`直流电源下发控制指令未响应/写入失败: ${(St==null?void 0:St.message)||St}`);p.value&&!_.signal.aborted;)await new Promise(Gt=>setTimeout(Gt,200));if(_.signal.aborted)break}}try{await e.setLoadInput(!0,h.loadMode,rt.loadTarget)}catch(St){for(it("LOAD",e.load.state.model,`电子负载下发控制指令未响应/写入失败: ${(St==null?void 0:St.message)||St}`);p.value&&!_.signal.aborted;)await new Promise(Gt=>setTimeout(Gt,200));if(_.signal.aborted)break}if(_.signal.aborted||(v.value=`正在测试步 #${rt.stepIndex} (Vin: ${rt.voltageTarget.toFixed(2)}V, 负载: ${rt.loadTarget.toFixed(2)}${rt.loadMode}): 参数已切换，静默等待 0.5s (禁止读取)...`,await new Promise(St=>setTimeout(St,500)),_.signal.aborted))break;for(;p.value&&!_.signal.aborted;)await new Promise(St=>setTimeout(St,200));if(_.signal.aborted)break;v.value=`测试步 #${rt.stepIndex}: 0.5s 节点采样 (1/2)...`;let Ut;try{Ut=await e.measureAsync()}catch(St){for(it("PSU","仪器通信",`0.5s 节点采样未响应: ${(St==null?void 0:St.message)||St}`);p.value&&!_.signal.aborted;)await new Promise(Gt=>setTimeout(Gt,200));if(_.signal.aborted)break;Ut=await e.measureAsync()}if(q(rt,Ut,.5,ot),v.value=`测试步 #${rt.stepIndex}: 保持稳态，等待 0.3s 二次采样...`,await new Promise(St=>setTimeout(St,300)),_.signal.aborted)break;for(;p.value&&!_.signal.aborted;)await new Promise(St=>setTimeout(St,200));if(_.signal.aborted)break;v.value=`测试步 #${rt.stepIndex}: 0.8s 节点采样 (2/2)...`;let Rt;try{Rt=await e.measureAsync()}catch(St){for(it("PSU","仪器通信",`0.8s 节点二次采样未响应: ${(St==null?void 0:St.message)||St}`);p.value&&!_.signal.aborted;)await new Promise(Gt=>setTimeout(Gt,200));if(_.signal.aborted)break;Rt=await e.measureAsync()}q(rt,Rt,.8,ot),rt.vin=Math.round((Ut.vin+Rt.vin)/2*1e3)/1e3,rt.iin=Math.round((Ut.iin+Rt.iin)/2*1e3)/1e3,rt.pin=Math.round((Ut.pin+Rt.pin)/2*1e3)/1e3,rt.vout=Math.round((Ut.vout+Rt.vout)/2*1e3)/1e3,rt.iout=Math.round((Ut.iout+Rt.iout)/2*1e3)/1e3,rt.pout=Math.round((Ut.pout+Rt.pout)/2*1e3)/1e3,rt.efficiency=rt.pin>.001?Math.min(100,Math.max(0,Math.round(rt.pout/rt.pin*1e4)/100)):0,rt.status="completed",rt.timestamp=Date.now(),T++,F.progressPercent=T/S.value.length*100}_.signal.aborted||await N()}catch(T){console.error("Test execution error:",T),v.value="测试执行异常: "+String(T),alert("测试执行过程中发生异常："+String(T))}finally{f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),U()}}async function N(){await e.emergencyStopAll(),v.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const ot=S.value.filter(Ct=>Ct.status==="completed");let T=0,$=100,Tt=0,rt;ot.forEach(Ct=>{Ct.efficiency>T&&(T=Ct.efficiency,rt=Ct),Ct.efficiency<$&&($=Ct.efficiency),Tt+=Ct.efficiency});const wt=ot.length>0?Tt/ot.length:0,Ut=`test_${Date.now()}`,Rt=new Date,St=JSON.parse(JSON.stringify(h)),Gt=JSON.parse(JSON.stringify(S.value)),$t=rt?JSON.parse(JSON.stringify(rt)):void 0,se=JSON.parse(JSON.stringify(d.value)),X={id:Ut,title:`芯片双向矩阵扫描 [${h.voltageMin}V-${h.voltageMax}V | ${h.loadMode}]`,createdAt:Rt.toISOString(),config:St,voltageSteps:[...w.value],loadSteps:[...L.value],points:Gt,rawSamples:se,summary:{totalPoints:S.value.length,completedPoints:ot.length,maxEfficiency:Math.round(T*100)/100,minEfficiency:Math.round($*100)/100,avgEfficiency:Math.round(wt*100)/100,optimalPoint:$t,durationSeconds:Math.round(ot.length*(h.stepDwellTime||.8))}};j.value=X,await J0(X),await R(),Nv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),V(Ut)}function D(){p.value=!0,v.value="测试已暂停"}async function ht(){e.resetFailureCounters();try{F.activeTargetV>0&&(await e.setPsuOutput(!0,F.activeTargetV,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,F.activeTargetLoad))}catch(ot){console.warn("Re-applying step targets on resume warning:",ot)}l.visible=!1,p.value=!1,v.value="测试已继续运行"}async function Et(){_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,await e.emergencyStopAll(),U(),v.value="测试已手动终止，仪器输出已安全切断"}let K=!1,z=0;function B(){g&&clearInterval(g),g=window.setInterval(async()=>{if(e.checkHealth(),!f.value&&!K){K=!0;try{if(e.psu.state.connected||e.load.state.connected){const ot=await e.measureAsync();F.vin=ot.vin,F.iin=ot.iin,F.pin=ot.pin,F.vout=ot.vout,F.iout=ot.iout,F.pout=ot.pout,F.efficiency=ot.efficiency,z++,z%4===0&&(e.psu.state.connected&&await e.queryPsuStatus(),e.load.state.connected&&await e.queryLoadStatus())}}catch{}finally{K=!1}}},500)}function U(){g&&(clearInterval(g),g=null)}function V(ot){var rt;const T=ot||((rt=j.value)==null?void 0:rt.id);if(!T){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const Tt=`${window.location.href.split("#")[0]}#/result/${T}`;window.open(Tt,"_blank")}function Y(){if(j.value)jo(j.value);else if(M.value.length>0){const ot={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(h)),voltageSteps:[...w.value],loadSteps:[...L.value],points:JSON.parse(JSON.stringify(S.value)),rawSamples:JSON.parse(JSON.stringify(d.value)),summary:{totalPoints:S.value.length,completedPoints:M.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};jo(ot)}else alert("当前无可用测试数据可供导出！")}function ft(ot){jo(ot)}async function y(ot){await tx(ot),await R()}async function R(){try{a.value=await up()}catch(ot){console.warn("Failed to load history:",ot)}}async function H(){await R(),s.value=!0}function b(){S.value=[],d.value=[],j.value=null,u.value=void 0,c.value&&c.value.clear(),at(),v.value="图表与数据已清空"}function nt(){o.value?(e.autoConnectVirtual(),v.value="已启用内置仿真驱动模式 (Virtual Mode)"):(e.psu.disconnect(),e.load.disconnect(),v.value="已关闭仿真模式，请配置物理串口设备")}function et(){e.psu.state.connected?(e.psu.disconnect(),v.value="电源串口已断开"):r.value=!0}function lt(){e.load.state.connected?(e.load.disconnect(),v.value="电子负载串口已断开"):r.value=!0}function ct(){o.value=!0,e.autoConnectVirtual(),r.value=!1,v.value="仿真驱动已就绪"}async function bt(ot){try{await e.psu.connectPhysical(ot),e.resetFailureCounters(),o.value=!1,v.value=`电源串口已连接 (${ot}bps)`,await e.queryPsuStatus()}catch(T){alert("连接电源串口失败: "+((T==null?void 0:T.message)||T))}}async function Q(){await e.psu.disconnect(),v.value="电源串口已断开"}async function C(ot){try{await e.load.connectPhysical(ot),e.resetFailureCounters(),o.value=!1,v.value=`负载串口已连接 (${ot}bps)`,await e.queryLoadStatus()}catch(T){alert("连接负载串口失败: "+((T==null?void 0:T.message)||T))}}async function x(){await e.load.disconnect(),v.value="负载串口已断开"}function G(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}function st(){t.push("/single-instrument")}function mt(ot){(ot.ctrlKey||ot.metaKey)&&(ot.key==="d"||ot.key==="D")&&(ot.preventDefault(),st())}function ut(){e.emergencyStopAll().catch(()=>{})}return dr(async()=>{e.setOnDeviceLost(it),o.value&&e.autoConnectVirtual(),at(),B(),await R(),window.addEventListener("keydown",mt),window.addEventListener("beforeunload",ut)}),fr(()=>{_&&_.abort(),f.value=!1,p.value=!1,e.isTesting=!1,e.emergencyStopAll().catch(()=>{}),U(),window.removeEventListener("keydown",mt),window.removeEventListener("beforeunload",ut)}),(ot,T)=>(Ot(),Ft("div",nx,[m("div",ix,[m("div",{class:hi(["menu-item",{active:i.value==="file"}]),onClick:T[3]||(T[3]=$=>E("file"))},[T[36]||(T[36]=Lt(" 文件 (File) ",-1)),i.value==="file"?(Ot(),Ft("div",{key:0,class:"dropdown-menu",onClick:T[2]||(T[2]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:T[0]||(T[0]=$=>{Y(),A()})},[...T[33]||(T[33]=[m("span",null,"导出测试结果 CSV (Export CSV)...",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),T[35]||(T[35]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:T[1]||(T[1]=$=>A())},[...T[34]||(T[34]=[m("span",null,"退出 (Exit)",-1),m("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Me("",!0)],2),m("div",{class:hi(["menu-item",{active:i.value==="view"}]),onClick:T[6]||(T[6]=$=>E("view"))},[T[38]||(T[38]=Lt(" 视图 (View) ",-1)),i.value==="view"?(Ot(),Ft("div",{key:0,class:"dropdown-menu",onClick:T[5]||(T[5]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:T[4]||(T[4]=$=>{b(),A()})},[...T[37]||(T[37]=[m("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Me("",!0)],2),m("div",{class:hi(["menu-item",{active:i.value==="tools"}]),onClick:T[11]||(T[11]=$=>E("tools"))},[T[44]||(T[44]=Lt(" 工具 (Tools) ",-1)),i.value==="tools"?(Ot(),Ft("div",{key:0,class:"dropdown-menu",onClick:T[10]||(T[10]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:T[7]||(T[7]=$=>{H(),A()})},[...T[39]||(T[39]=[m("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),m("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),T[42]||(T[42]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:T[8]||(T[8]=$=>{st(),A()})},[...T[40]||(T[40]=[m("span",{style:{color:"#48bb78","font-weight":"bold"}},"🔧 单仪器测试 / 硬件单体调试工具...",-1),m("span",{style:{"font-size":"10px",color:"#48bb78","font-family":"monospace"}},"Ctrl+D",-1)])]),T[43]||(T[43]=m("div",{class:"dropdown-divider"},null,-1)),m("div",{class:"dropdown-item",onClick:T[9]||(T[9]=$=>{r.value=!0,A()})},[...T[41]||(T[41]=[m("span",null,"打开串口硬件连接设置...",-1)])])])):Me("",!0)],2),m("div",{class:hi(["menu-item",{active:i.value==="help"}]),onClick:T[14]||(T[14]=$=>E("help"))},[T[46]||(T[46]=Lt(" 帮助 (Help) ",-1)),i.value==="help"?(Ot(),Ft("div",{key:0,class:"dropdown-menu",onClick:T[13]||(T[13]=ls(()=>{},["stop"]))},[m("div",{class:"dropdown-item",onClick:T[12]||(T[12]=$=>{G(),A()})},[...T[45]||(T[45]=[m("span",null,"关于工作台 (About Workbench)...",-1)])])])):Me("",!0)],2),m("div",sx,[m("span",rx,[m("span",{style:de([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Zt(e).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Lt(" 电源: "+yt(Zt(e).psu.state.portName)+" ",1),Zt(e).psu.state.connected?(Ot(),Ft("span",{key:0,style:de({color:Zt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+yt(Zt(e).lastPsuStatus.outputOn?"输出:ON":"输出:OFF")+"] ",5)):Me("",!0)]),m("span",ox,[m("span",{style:de([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Zt(e).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Lt(" 负载: "+yt(Zt(e).load.state.portName)+" ",1),Zt(e).load.state.connected?(Ot(),Ft("span",{key:0,style:de({color:Zt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ["+yt(Zt(e).lastLoadStatus.inputOn?"带载:ON":"带载:OFF")+"] ",5)):Me("",!0)]),m("button",{class:"btn",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold","background-color":"#234e52",color:"#81e6d9",border:"1px solid #319795"},onClick:T[15]||(T[15]=$=>st()),title:"打开电源/负载底层单仪器独立调试工作台 (Ctrl+D)"}," 🔧 单仪器测试 "),j.value?(Ot(),Ft("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:T[16]||(T[16]=$=>V(j.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...T[47]||(T[47]=[m("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),m("polyline",{points:"15 3 21 3 21 9"}),m("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Lt(" 打开 3D/2D 数据视图 ",-1)])])):Me("",!0)])]),m("div",{class:"workbench-body",onClick:A},[m("div",ax,[m("div",lx,[T[53]||(T[53]=m("div",{class:"group-title"},[m("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),m("div",cx,[m("label",ux,[ne(m("input",{type:"checkbox","onUpdate:modelValue":T[17]||(T[17]=$=>o.value=$),onChange:nt},null,544),[[Bi,o.value]]),T[48]||(T[48]=Lt(" 🧪 启用仿真演示模式 ",-1))]),m("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:T[18]||(T[18]=$=>r.value=!0)}," ⚙ 配置 ")]),m("div",dx,[T[49]||(T[49]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),m("input",{type:"text",readonly:"",value:Zt(e).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,fx),m("button",{class:hi(["btn",Zt(e).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:et},yt(Zt(e).psu.state.connected?"断开":"连接"),3)]),Zt(e).psu.state.connected?(Ot(),Ft("div",hx,[T[50]||(T[50]=m("span",{style:{color:"#a0aec0"}},"电源状态:",-1)),m("span",{style:de({color:Zt(e).lastPsuStatus.outputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 输出: "+yt(Zt(e).lastPsuStatus.outputOn?"ON (已开启)":"OFF (已关闭)"),5)])):Me("",!0),m("div",px,[T[51]||(T[51]=m("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),m("input",{type:"text",readonly:"",value:Zt(e).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,mx),m("button",{class:hi(["btn",Zt(e).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:lt},yt(Zt(e).load.state.connected?"断开":"连接"),3)]),Zt(e).load.state.connected?(Ot(),Ft("div",gx,[T[52]||(T[52]=m("span",{style:{color:"#a0aec0"}},"负载状态:",-1)),m("span",{style:de({color:Zt(e).lastLoadStatus.inputOn?"#68d391":"#fc8181",fontWeight:"bold"})}," ● 带载: "+yt(Zt(e).lastLoadStatus.inputOn?"ON (带载中)":"OFF (已停止)")+" ("+yt(Zt(e).lastLoadStatus.mode)+") ",5)])):Me("",!0)]),m("div",_x,[m("div",vx,[T[54]||(T[54]=m("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),m("span",xx," 总点数: "+yt(O.value)+" 点 ",1)]),m("div",yx,[T[58]||(T[58]=m("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),m("div",bx,[m("div",null,[T[55]||(T[55]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),ne(m("input",{type:"number","onUpdate:modelValue":T[19]||(T[19]=$=>h.voltageMin=$),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Mx),[[We,h.voltageMin,void 0,{number:!0}]])]),m("div",null,[T[56]||(T[56]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),ne(m("input",{type:"number","onUpdate:modelValue":T[20]||(T[20]=$=>h.voltageMax=$),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Sx),[[We,h.voltageMax,void 0,{number:!0}]])]),m("div",null,[T[57]||(T[57]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),ne(m("input",{type:"number","onUpdate:modelValue":T[21]||(T[21]=$=>h.voltageStep=$),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ex),[[We,h.voltageStep,void 0,{number:!0}]])])])]),m("div",wx,[m("div",Tx,[T[61]||(T[61]=m("span",null,"负载扫描范围 (Load):",-1)),m("div",Ax,[m("label",Cx,[ne(m("input",{type:"radio",value:"CC","onUpdate:modelValue":T[22]||(T[22]=$=>h.loadMode=$),disabled:f.value},null,8,Rx),[[ad,h.loadMode]]),T[59]||(T[59]=Lt(" CC恒流 ",-1))]),m("label",Px,[ne(m("input",{type:"radio",value:"CW","onUpdate:modelValue":T[23]||(T[23]=$=>h.loadMode=$),disabled:f.value},null,8,Lx),[[ad,h.loadMode]]),T[60]||(T[60]=Lt(" CW恒功率 ",-1))])])]),m("div",Dx,[m("div",null,[m("span",Ix,"起始("+yt(h.loadMode==="CC"?"A":"W")+"):",1),ne(m("input",{type:"number","onUpdate:modelValue":T[24]||(T[24]=$=>h.loadMin=$),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ux),[[We,h.loadMin,void 0,{number:!0}]])]),m("div",null,[m("span",Nx,"终止("+yt(h.loadMode==="CC"?"A":"W")+"):",1),ne(m("input",{type:"number","onUpdate:modelValue":T[25]||(T[25]=$=>h.loadMax=$),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ox),[[We,h.loadMax,void 0,{number:!0}]])]),m("div",null,[m("span",Fx,"步长("+yt(h.loadMode==="CC"?"A":"W")+"):",1),ne(m("input",{type:"number","onUpdate:modelValue":T[26]||(T[26]=$=>h.loadStep=$),disabled:f.value,step:"0.1",style:{width:"100%"}},null,8,Bx),[[We,h.loadStep,void 0,{number:!0}]])])])]),m("div",Vx,[m("div",null,[T[62]||(T[62]=m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),ne(m("input",{type:"number","onUpdate:modelValue":T[27]||(T[27]=$=>h.inputCurrentLimit=$),disabled:f.value,step:"0.5",style:{width:"100%","font-weight":"bold"}},null,8,zx),[[We,h.inputCurrentLimit,void 0,{number:!0}]])]),T[63]||(T[63]=m("div",null,[m("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步进采样时序机制:"),m("div",{style:{"font-size":"10.5px",color:"#68d391","font-weight":"bold",padding:"2px 0","font-family":"monospace"},title:"切换后0.5s禁读，0.5s节点采样，等待0.3s二次采样，随后下一步"}," 0.5s静默+0.3s采样 ")],-1))])]),m("div",kx,[T[77]||(T[77]=m("div",{class:"group-title"},[m("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),m("div",Hx,[m("div",Gx,[T[65]||(T[65]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),m("div",Wx,[Lt(yt(F.vin.toFixed(3))+" ",1),T[64]||(T[64]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",$x,[T[67]||(T[67]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),m("div",Xx,[Lt(yt(F.vout.toFixed(3))+" ",1),T[66]||(T[66]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",qx,[T[69]||(T[69]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),m("div",jx,[Lt(yt(F.iin.toFixed(3))+" ",1),T[68]||(T[68]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Yx,[T[71]||(T[71]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),m("div",Kx,[Lt(yt(F.iout.toFixed(3))+" ",1),T[70]||(T[70]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",Zx,[T[73]||(T[73]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),m("div",Jx,[Lt(yt(F.pin.toFixed(3))+" ",1),T[72]||(T[72]=m("span",{style:{"font-size":"10px"}},"W",-1))])]),m("div",Qx,[T[75]||(T[75]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),m("div",ty,[Lt(yt(F.pout.toFixed(3))+" ",1),T[74]||(T[74]=m("span",{style:{"font-size":"10px"}},"W",-1))])])]),m("div",ey,[T[76]||(T[76]=m("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),m("span",ny,yt(F.efficiency.toFixed(2))+" % ",1)])]),m("div",iy,[f.value?p.value?(Ot(),Ft("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:ht}," ▶ 继续测试 ")):(Ot(),Ft("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:D}," ⏸ 暂停测试 ")):(Ot(),Ft("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:_t}," ▶ 开始矩阵测试 ")),m("div",sy,[m("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!f.value,onClick:Et}," ⏹ 结束 ",8,ry),m("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:M.value.length===0,onClick:Y}," 📊 导出CSV ",8,oy)])])]),m("div",ay,[Ie(c0,{ref_key:"waveformRef",ref:c,"latest-sample":u.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),m("div",ly,[m("div",cy,[T[79]||(T[79]=m("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),m("span",uy,[T[78]||(T[78]=Lt(" 已完成: ",-1)),m("b",dy,yt(I.value),1),Lt(" / "+yt(S.value.length)+" 步 ",1)])]),m("div",fy,[m("table",hy,[T[80]||(T[80]=m("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[m("tr",{style:{"border-bottom":"1px solid #2d3748"}},[m("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),m("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),m("th",{style:{padding:"5px 6px"}},"目标负载"),m("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),m("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),m("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),m("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),m("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),m("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),m("tbody",null,[(Ot(!0),Ft(Pe,null,xi(S.value,$=>(Ot(),Ft("tr",{key:$.stepIndex,style:de([{"border-bottom":"1px solid #1e2530"},{backgroundColor:$.status==="running"?"#1a365d":"transparent"}])},[m("td",py,"#"+yt($.stepIndex),1),m("td",my,yt($.voltageTarget.toFixed(2)),1),m("td",gy,yt($.loadTarget.toFixed(2))+" "+yt($.loadMode),1),m("td",_y,yt($.status!=="pending"?$.vin.toFixed(4):"--"),1),m("td",vy,yt($.status!=="pending"?$.iin.toFixed(4):"--"),1),m("td",xy,yt($.status!=="pending"?$.pin.toFixed(4):"--"),1),m("td",yy,yt($.status!=="pending"?$.vout.toFixed(4):"--"),1),m("td",by,yt($.status!=="pending"?$.iout.toFixed(4):"--"),1),m("td",My,yt($.status!=="pending"?$.pout.toFixed(4):"--"),1),m("td",Sy,[$.status==="completed"?(Ot(),Ft("span",Ey,yt($.efficiency.toFixed(2))+"% ",1)):$.status==="running"?(Ot(),Ft("span",wy,"测定中")):(Ot(),Ft("span",Ty,"--"))]),m("td",Ay,[m("span",{style:de([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:$.status==="completed"?"#22543d":$.status==="running"?"#2b6cb0":"#2d3748",color:$.status==="completed"?"#9ae6b4":$.status==="running"?"#bee3f8":"#718096"}])},yt($.status==="completed"?"已完成":$.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),m("div",Cy,[m("span",null,yt(v.value),1),f.value?(Ot(),Ft("span",Ry," 正在测试第 "+yt(F.currentStep)+" / "+yt(F.totalSteps)+" 点 ("+yt(F.progressPercent.toFixed(1))+"%) ",1)):(Ot(),Ft("span",Py,"就绪 (Ready)"))]),Ie(C0,{"is-open":s.value,records:a.value,onClose:T[28]||(T[28]=$=>s.value=!1),onOpenResult:V,onExportCsv:ft,onDeleteRecord:y},null,8,["is-open","records"]),Ie(q0,{"is-open":r.value,"psu-connected":Zt(e).psu.state.connected,"psu-port-name":Zt(e).psu.state.portName,"load-connected":Zt(e).load.state.connected,"load-port-name":Zt(e).load.state.portName,"web-serial-supported":Zt(e).psu.isWebSerialSupported(),onClose:T[29]||(T[29]=$=>r.value=!1),onConnectVirtual:ct,onConnectPhysicalPsu:bt,onDisconnectPsu:Q,onConnectPhysicalLoad:C,onDisconnectLoad:x},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),l.visible?(Ot(),Ft("div",{key:0,class:"device-lost-overlay",onClick:T[32]||(T[32]=ls($=>l.visible=!1,["self"]))},[m("div",Ly,[m("div",Dy,[T[81]||(T[81]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 仪器突然未响应指令 / 串口通信异常告警！ </span></div>',1)),m("button",{class:"btn",style:{padding:"2px 7px"},onClick:T[30]||(T[30]=$=>l.visible=!1)},"✕")]),m("div",Iy,[T[86]||(T[86]=m("div",{class:"device-lost-alert-banner"},[m("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 测试过程中仪器突然停止响应指令或连接中断！ "),m("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，仪器输出已安全保护切断。 ")],-1)),m("div",Uy,[m("div",Ny,[T[82]||(T[82]=m("span",{class:"info-label"},"未响应仪器:",-1)),m("span",Oy,yt(l.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+yt(l.deviceName),1)]),m("div",Fy,[T[83]||(T[83]=m("span",{class:"info-label"},"异常详情:",-1)),m("span",By,yt(l.reason),1)]),m("div",Vy,[T[84]||(T[84]=m("span",{class:"info-label"},"测试进度:",-1)),m("span",zy,"已完成 "+yt(I.value)+" / "+yt(S.value.length)+" 点 (当前步已挂起)",1)]),m("div",ky,[T[85]||(T[85]=m("span",{class:"info-label"},"发生时间:",-1)),m("span",Hy,yt(l.timestamp),1)])]),T[87]||(T[87]=m("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查仪器面板状态、USB 串口线连接或仪器供电。排除故障后可点击【重试并恢复测试】继续执行；亦可切换为仿真模式或终止并保存数据。 ",-1))]),m("div",Gy,[m("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:xt}," ▶ 重试并恢复测试 "),m("button",{class:"btn",style:{"font-weight":"bold","border-color":"#4a5568"},onClick:dt}," ⚙ 重新连接串口硬件 "),m("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:W}," 🧪 切换仿真模式继续 "),m("button",{class:"btn btn-danger",onClick:k}," 💾 终止测试并保存已测结果 "),m("button",{class:"btn",onClick:T[31]||(T[31]=$=>l.visible=!1)}," 保持暂停 ")])])])):Me("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="170",Zs={ROTATE:0,DOLLY:1,PAN:2},Xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$y=0,Cd=1,Xy=2,dp=1,qy=2,di=3,ji=0,an=1,vi=2,Wi=0,Js=1,Rd=2,Pd=3,Ld=4,jy=5,cs=100,Yy=101,Ky=102,Zy=103,Jy=104,Qy=200,tb=201,eb=202,nb=203,Ql=204,tc=205,ib=206,sb=207,rb=208,ob=209,ab=210,lb=211,cb=212,ub=213,db=214,ec=0,nc=1,ic=2,rr=3,sc=4,rc=5,oc=6,ac=7,fp=0,fb=1,hb=2,Mi=0,pb=1,mb=2,gb=3,_b=4,vb=5,xb=6,yb=7,hp=300,or=301,ar=302,lc=303,cc=304,Ua=306,uc=1e3,ps=1001,dc=1002,On=1003,bb=1004,po=1005,Ln=1006,nl=1007,ms=1008,wi=1009,pp=1010,mp=1011,Jr=1012,fu=1013,xs=1014,yi=1015,no=1016,hu=1017,pu=1018,lr=1020,gp=35902,_p=1021,vp=1022,Dn=1023,xp=1024,yp=1025,Qs=1026,cr=1027,bp=1028,mu=1029,Mp=1030,gu=1031,_u=1033,Yo=33776,Ko=33777,Zo=33778,Jo=33779,fc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,yc=37809,bc=37810,Mc=37811,Sc=37812,Ec=37813,wc=37814,Tc=37815,Ac=37816,Cc=37817,Rc=37818,Pc=37819,Lc=37820,Dc=37821,Qo=36492,Ic=36494,Uc=36495,Sp=36283,Nc=36284,Oc=36285,Fc=36286,Mb=3200,Sb=3201,Ep=0,Eb=1,ki="",vn="srgb",hr="srgb-linear",Na="linear",pe="srgb",Ts=7680,Dd=519,wb=512,Tb=513,Ab=514,wp=515,Cb=516,Rb=517,Pb=518,Lb=519,Bc=35044,Id="300 es",bi=2e3,fa=2001;class Ms{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,Vc=180/Math.PI;function $i(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function Db(n,t){return(n%t+t)%t}function il(n,t,e){return(1-e)*n+e*t}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ib={DEG2RAD:Hr};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,i,s,r,o,a,l,c){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],v=i[8],_=s[0],g=s[3],h=s[6],w=s[1],L=s[4],S=s[7],j=s[2],F=s[5],O=s[8];return r[0]=o*_+a*w+l*j,r[3]=o*g+a*L+l*F,r[6]=o*h+a*S+l*O,r[1]=c*_+u*w+d*j,r[4]=c*g+u*L+d*F,r[7]=c*h+u*S+d*O,r[2]=f*_+p*w+v*j,r[5]=f*g+p*L+v*F,r[8]=f*h+p*S+v*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,v=e*d+i*f+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new te;function Tp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ub(){const n=ha("canvas");return n.style.display="block",n}const Ud={};function Dr(n){n in Ud||(Ud[n]=!0,console.warn(n))}function Nb(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ob(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fb(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(n.r=Si(n.r),n.g=Si(n.g),n.b=Si(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(n.r=tr(n.r),n.g=tr(n.g),n.b=tr(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?Na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Si(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function tr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nd=[.64,.33,.3,.6,.15,.06],Od=[.2126,.7152,.0722],Fd=[.3127,.329],Bd=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vd=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[hr]:{primaries:Nd,whitePoint:Fd,transfer:Na,toXYZ:Bd,fromXYZ:Vd,luminanceCoefficients:Od,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:Nd,whitePoint:Fd,transfer:pe,toXYZ:Bd,fromXYZ:Vd,luminanceCoefficients:Od,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let As;class Bb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{As===void 0&&(As=ha("canvas")),As.width=t.width,As.height=t.height;const i=As.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=As}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Si(e[i]/255)*255):e[i]=Si(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Vb=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zb=0;class nn extends Ms{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=ps,s=ps,r=Ln,o=ms,a=Dn,l=wi,c=nn.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=$i(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uc:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uc:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=hp;nn.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,i=0,s=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],v=l[9],_=l[2],g=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const L=(c+1)/2,S=(p+1)/2,j=(h+1)/2,F=(u+f)/4,O=(d+_)/4,I=(v+g)/4;return L>S&&L>j?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=F/i,r=O/i):S>j?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=F/s,r=I/s):j<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(j),i=O/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((g-v)*(g-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kb extends Ms{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends kb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cp extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hb extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=On,this.minFilter=On,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=v,t[e+3]=_;return}if(d!==_||l!==f||c!==p||u!==v){let g=1-a;const h=l*f+c*p+u*v+d*_,w=h>=0?1:-1,L=1-h*h;if(L>Number.EPSILON){const j=Math.sqrt(L),F=Math.atan2(j,h*w);g=Math.sin(g*F)/j,a=Math.sin(a*F)/j}const S=a*w;if(l=l*g+f*S,c=c*g+p*S,u=u*g+v*S,d=d*g+_*S,g===1-a){const j=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=j,c*=j,u*=j,d*=j}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+u*d+l*p-c*f,t[e+1]=l*v+u*f+c*d-a*p,t[e+2]=c*v+u*p+a*f-l*d,t[e+3]=u*v-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"YXZ":this._x=f*u*d+c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"ZXY":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d-f*p*v;break;case"ZYX":this._x=f*u*d-c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d+f*p*v;break;case"YZX":this._x=f*u*d+c*p*v,this._y=c*p*d+f*u*v,this._z=c*u*v-f*p*d,this._w=c*u*d-f*p*v;break;case"XZY":this._x=f*u*d-c*p*v,this._y=c*p*d-f*u*v,this._z=c*u*v+f*p*d,this._w=c*u*d+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,e=0,i=0){tt.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new tt,zd=new bs;class io{constructor(t=new tt(1/0,1/0,1/0),e=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(An.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(An.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=An.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(t.matrixWorld),this.expandByPoint(An);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,An),An.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),go.subVectors(this.max,Mr),Cs.subVectors(t.a,Mr),Rs.subVectors(t.b,Mr),Ps.subVectors(t.c,Mr),Li.subVectors(Rs,Cs),Di.subVectors(Ps,Rs),ts.subVectors(Cs,Ps);let e=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ts.z,ts.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ts.z,0,-ts.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ts.y,ts.x,0];return!al(e,Cs,Rs,Ps,go)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Cs,Rs,Ps,go))?!1:(_o.crossVectors(Li,Di),e=[_o.x,_o.y,_o.z],al(e,Cs,Rs,Ps,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,An).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(An).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const oi=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],An=new tt,mo=new io,Cs=new tt,Rs=new tt,Ps=new tt,Li=new tt,Di=new tt,ts=new tt,Mr=new tt,go=new tt,_o=new tt,es=new tt;function al(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){es.fromArray(n,r);const a=s.x*Math.abs(es.x)+s.y*Math.abs(es.y)+s.z*Math.abs(es.z),l=t.dot(es),c=e.dot(es),u=i.dot(es);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gb=new io,Sr=new tt,ll=new tt;class Oa{constructor(t=new tt,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Gb.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);const e=Sr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Sr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(ll)),this.expandByPoint(Sr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new tt,cl=new tt,vo=new tt,Ii=new tt,ul=new tt,xo=new tt,dl=new tt;class Fa{constructor(t=new tt,e=new tt(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){cl.copy(t).add(e).multiplyScalar(.5),vo.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(cl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(vo),a=Ii.dot(this.direction),l=-Ii.dot(vo),c=Ii.lengthSq(),u=Math.abs(1-o*o);let d,f,p,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cl).addScaledVector(vo,f),p}intersectSphere(t,e){ai.subVectors(t.center,this.origin);const i=ai.dot(this.direction),s=ai.dot(ai)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,i,s,r){ul.subVectors(e,t),xo.subVectors(i,t),dl.crossVectors(ul,xo);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ii.subVectors(this.origin,t);const l=a*this.direction.dot(xo.crossVectors(Ii,xo));if(l<0)return null;const c=a*this.direction.dot(ul.cross(Ii));if(c<0||l+c>o)return null;const u=-a*Ii.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,v,_,g){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=v,h[11]=_,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ls.setFromMatrixColumn(t,0).length(),r=1/Ls.setFromMatrixColumn(t,1).length(),o=1/Ls.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+v*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=v+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f+_*a,e[4]=v*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-v,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,v=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=v*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=v*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+v,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=p*d-v,e[2]=v*d-p,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wb,t,$b)}lookAt(t,e,i){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ui.crossVectors(i,cn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ui.crossVectors(i,cn)),Ui.normalize(),yo.crossVectors(cn,Ui),s[0]=Ui.x,s[4]=yo.x,s[8]=cn.x,s[1]=Ui.y,s[5]=yo.y,s[9]=cn.y,s[2]=Ui.z,s[6]=yo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],v=i[2],_=i[6],g=i[10],h=i[14],w=i[3],L=i[7],S=i[11],j=i[15],F=s[0],O=s[4],I=s[8],M=s[12],E=s[1],A=s[5],at=s[9],it=s[13],dt=s[2],xt=s[6],W=s[10],k=s[14],q=s[3],_t=s[7],N=s[11],D=s[15];return r[0]=o*F+a*E+l*dt+c*q,r[4]=o*O+a*A+l*xt+c*_t,r[8]=o*I+a*at+l*W+c*N,r[12]=o*M+a*it+l*k+c*D,r[1]=u*F+d*E+f*dt+p*q,r[5]=u*O+d*A+f*xt+p*_t,r[9]=u*I+d*at+f*W+p*N,r[13]=u*M+d*it+f*k+p*D,r[2]=v*F+_*E+g*dt+h*q,r[6]=v*O+_*A+g*xt+h*_t,r[10]=v*I+_*at+g*W+h*N,r[14]=v*M+_*it+g*k+h*D,r[3]=w*F+L*E+S*dt+j*q,r[7]=w*O+L*A+S*xt+j*_t,r[11]=w*I+L*at+S*W+j*N,r[15]=w*M+L*it+S*k+j*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],v=t[3],_=t[7],g=t[11],h=t[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],v=t[12],_=t[13],g=t[14],h=t[15],w=d*g*c-_*f*c+_*l*p-a*g*p-d*l*h+a*f*h,L=v*f*c-u*g*c-v*l*p+o*g*p+u*l*h-o*f*h,S=u*_*c-v*d*c+v*a*p-o*_*p-u*a*h+o*d*h,j=v*d*l-u*_*l-v*a*f+o*_*f+u*a*g-o*d*g,F=e*w+i*L+s*S+r*j;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=w*O,t[1]=(_*f*r-d*g*r-_*s*p+i*g*p+d*s*h-i*f*h)*O,t[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*h+i*l*h)*O,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*O,t[4]=L*O,t[5]=(u*g*r-v*f*r+v*s*p-e*g*p-u*s*h+e*f*h)*O,t[6]=(v*l*r-o*g*r-v*s*c+e*g*c+o*s*h-e*l*h)*O,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*O,t[8]=S*O,t[9]=(v*d*r-u*_*r-v*i*p+e*_*p+u*i*h-e*d*h)*O,t[10]=(o*_*r-v*a*r+v*i*c-e*_*c-o*i*h+e*a*h)*O,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*O,t[12]=j*O,t[13]=(u*_*s-v*d*s+v*i*f-e*_*f-u*i*g+e*d*g)*O,t[14]=(v*a*s-o*_*s-v*i*l+e*_*l+o*i*g-e*a*g)*O,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,v=r*d,_=o*u,g=o*d,h=a*d,w=l*c,L=l*u,S=l*d,j=i.x,F=i.y,O=i.z;return s[0]=(1-(_+h))*j,s[1]=(p+S)*j,s[2]=(v-L)*j,s[3]=0,s[4]=(p-S)*F,s[5]=(1-(f+h))*F,s[6]=(g+w)*F,s[7]=0,s[8]=(v+L)*O,s[9]=(g-w)*O,s[10]=(1-(f+_))*O,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ls.set(s[0],s[1],s[2]).length();const o=Ls.set(s[4],s[5],s[6]).length(),a=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Cn.copy(this);const c=1/r,u=1/o,d=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=bi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,v;if(a===bi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===fa)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=bi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u;let v,_;if(a===bi)v=(o+r)*d,_=-2*d;else if(a===fa)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ls=new tt,Cn=new Se,Wb=new tt(0,0,0),$b=new tt(1,1,1),Ui=new tt,yo=new tt,cn=new tt,kd=new Se,Hd=new bs;class ei{constructor(t=0,e=0,i=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return kd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xb=0;const Gd=new tt,Ds=new bs,li=new Se,bo=new tt,Er=new tt,qb=new tt,jb=new bs,Wd=new tt(1,0,0),$d=new tt(0,1,0),Xd=new tt(0,0,1),qd={type:"added"},Yb={type:"removed"},Is={type:"childadded",child:null},fl={type:"childremoved",child:null};class Be extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new tt,e=new ei,i=new bs,s=new tt(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new te}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(t,e){return Ds.setFromAxisAngle(t,e),this.quaternion.premultiply(Ds),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?bo.copy(t):bo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Er,bo,this.up):li.lookAt(bo,Er,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(li),this.quaternion.premultiply(Ds.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yb),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qd),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,qb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,jb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Be.DEFAULT_UP=new tt(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new tt,ci=new tt,hl=new tt,ui=new tt,Us=new tt,Ns=new tt,jd=new tt,pl=new tt,ml=new tt,gl=new tt,_l=new Ae,vl=new Ae,xl=new Ae;class fn{constructor(t=new tt,e=new tt,i=new tt){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Rn.subVectors(t,e),s.cross(Rn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Rn.subVectors(s,e),ci.subVectors(i,e),hl.subVectors(t,e);const o=Rn.dot(Rn),a=Rn.dot(ci),l=Rn.dot(hl),c=ci.dot(ci),u=ci.dot(hl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),vl.setScalar(0),xl.setScalar(0),_l.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,i,s){return Rn.subVectors(i,e),ci.subVectors(t,e),Rn.cross(ci).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Rn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return fn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return fn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return fn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return fn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return fn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Us.subVectors(s,i),Ns.subVectors(r,i),pl.subVectors(t,i);const l=Us.dot(pl),c=Ns.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,s);const u=Us.dot(ml),d=Ns.dot(ml);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Us,o);gl.subVectors(t,r);const p=Us.dot(gl),v=Ns.dot(gl);if(v>=0&&p<=v)return e.copy(r);const _=p*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ns,a);const g=u*v-p*d;if(g<=0&&d-u>=0&&p-v>=0)return jd.subVectors(r,s),a=(d-u)/(d-u+(p-v)),e.copy(s).addScaledVector(jd,a);const h=1/(g+_+f);return o=_*h,a=f*h,e.copy(i).addScaledVector(Us,o).addScaledVector(Ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Db(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=yl(o,r,t+1/3),this.g=yl(o,r,t),this.b=yl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const i=Rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return ie.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Qe(Ge.r*255,0,255))*65536+Math.round(Qe(Ge.g*255,0,255))*256+Math.round(Qe(Ge.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ge.copy(this),e);const i=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=vn){ie.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,i=Ge.g,s=Ge.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Mo);const i=il(Ni.h,Mo.h,e),s=il(Ni.s,Mo.s,e),r=il(Ni.l,Mo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new qt;qt.NAMES=Rp;let Kb=0;class Ss extends Ms{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=$i(),this.name="",this.blending=Js,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=tc,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=rr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==cs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==rr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pp extends Ss{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Re=new tt,So=new Wt;class Fn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)So.fromBufferAttribute(this,e),So.applyMatrix3(t),this.setXY(e,So.x,So.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}}class Lp extends Fn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dp extends Fn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mn extends Fn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zb=0;const _n=new Se,bl=new Be,Os=new tt,un=new io,wr=new io,Oe=new tt;class tn extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Dp:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new te().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(un.min,wr.min),un.expandByPoint(Oe),Oe.addVectors(un.max,wr.max),un.expandByPoint(Oe)):(un.expandByPoint(wr.min),un.expandByPoint(wr.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(Os.fromBufferAttribute(t,c),Oe.add(Os)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new tt,l[I]=new tt;const c=new tt,u=new tt,d=new tt,f=new Wt,p=new Wt,v=new Wt,_=new tt,g=new tt;function h(I,M,E){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),f.fromBufferAttribute(r,I),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,E),u.sub(c),d.sub(c),p.sub(f),v.sub(f);const A=1/(p.x*v.y-v.x*p.y);isFinite(A)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(A),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(A),a[I].add(_),a[M].add(_),a[E].add(_),l[I].add(g),l[M].add(g),l[E].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,M=w.length;I<M;++I){const E=w[I],A=E.start,at=E.count;for(let it=A,dt=A+at;it<dt;it+=3)h(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const L=new tt,S=new tt,j=new tt,F=new tt;function O(I){j.fromBufferAttribute(s,I),F.copy(j);const M=a[I];L.copy(M),L.sub(j.multiplyScalar(j.dot(M))).normalize(),S.crossVectors(F,M);const A=S.dot(l[I])<0?-1:1;o.setXYZW(I,L.x,L.y,L.z,A)}for(let I=0,M=w.length;I<M;++I){const E=w[I],A=E.start,at=E.count;for(let it=A,dt=A+at;it<dt;it+=3)O(t.getX(it+0)),O(t.getX(it+1)),O(t.getX(it+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new tt,r=new tt,o=new tt,a=new tt,l=new tt,c=new tt,u=new tt,d=new tt;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let h=0;h<u;h++)f[v++]=c[p++]}return new Fn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yd=new Se,ns=new Fa,Eo=new Oa,Kd=new tt,wo=new tt,To=new tt,Ao=new tt,Ml=new tt,Co=new tt,Zd=new tt,Ro=new tt;class In extends Be{constructor(t=new tn,e=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ml.fromBufferAttribute(d,t),o?Co.addScaledVector(Ml,u):Co.addScaledVector(Ml.sub(e),u))}e.add(Co)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),ns.copy(t.ray).recast(t.near),!(Eo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Eo,Kd)===null||ns.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(Yd.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Yd),!(i.boundingBox!==null&&ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ns)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],w=Math.max(g.start,p.start),L=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,j=L;S<j;S+=3){const F=a.getX(S),O=a.getX(S+1),I=a.getX(S+2);s=Po(this,h,t,i,c,u,d,F,O,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const w=a.getX(g),L=a.getX(g+1),S=a.getX(g+2);s=Po(this,o,t,i,c,u,d,w,L,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const g=f[v],h=o[g.materialIndex],w=Math.max(g.start,p.start),L=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=w,j=L;S<j;S+=3){const F=S,O=S+1,I=S+2;s=Po(this,h,t,i,c,u,d,F,O,I),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=v,h=_;g<h;g+=3){const w=g,L=g+1,S=g+2;s=Po(this,o,t,i,c,u,d,w,L,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Jb(n,t,e,i,s,r,o,a){let l;if(t.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;Ro.copy(a),Ro.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:n}}function Po(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,wo),n.getVertexPosition(l,To),n.getVertexPosition(c,Ao);const u=Jb(n,t,e,i,wo,To,Ao,Zd);if(u){const d=new tt;fn.getBarycoord(Zd,wo,To,Ao,d),s&&(u.uv=fn.getInterpolatedAttribute(s,a,l,c,d,new Wt)),r&&(u.uv1=fn.getInterpolatedAttribute(r,a,l,c,d,new Wt)),o&&(u.normal=fn.getInterpolatedAttribute(o,a,l,c,d,new tt),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new tt,materialIndex:0};fn.getNormal(wo,To,Ao,f.normal),u.face=f,u.barycoord=d}return u}class pr extends tn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(d,2));function v(_,g,h,w,L,S,j,F,O,I,M){const E=S/O,A=j/I,at=S/2,it=j/2,dt=F/2,xt=O+1,W=I+1;let k=0,q=0;const _t=new tt;for(let N=0;N<W;N++){const D=N*A-it;for(let ht=0;ht<xt;ht++){const Et=ht*E-at;_t[_]=Et*w,_t[g]=D*L,_t[h]=dt,c.push(_t.x,_t.y,_t.z),_t[_]=0,_t[g]=0,_t[h]=F>0?1:-1,u.push(_t.x,_t.y,_t.z),d.push(ht/O),d.push(1-N/I),k+=1}}for(let N=0;N<I;N++)for(let D=0;D<O;D++){const ht=f+D+xt*N,Et=f+D+xt*(N+1),K=f+(D+1)+xt*(N+1),z=f+(D+1)+xt*N;l.push(ht,Et,z),l.push(Et,K,z),q+=6}a.addGroup(p,q,M),p+=q,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const s in i)t[s]=i[s]}return t}function Qb(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ip(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const t1={clone:ur,merge:Ke};var e1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ss{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e1,this.fragmentShader=n1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Qb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Up extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=bi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new tt,Jd=new Wt,Qd=new Wt;class xn extends Up{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vc*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Fs=-90,Bs=1;class i1 extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Fs,Bs,t,e);s.layers=this.layers,this.add(s);const r=new xn(Fs,Bs,t,e);r.layers=this.layers,this.add(r);const o=new xn(Fs,Bs,t,e);o.layers=this.layers,this.add(o);const a=new xn(Fs,Bs,t,e);a.layers=this.layers,this.add(a);const l=new xn(Fs,Bs,t,e);l.layers=this.layers,this.add(l);const c=new xn(Fs,Bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Np extends nn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class s1 extends ys{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Np(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pr(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Wi});r.uniforms.tEquirect.value=e;const o=new In(s,r),a=e.minFilter;return e.minFilter===ms&&(e.minFilter=Ln),new i1(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Sl=new tt,r1=new tt,o1=new te;class zi{constructor(t=new tt(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Sl.subVectors(i,e).cross(r1.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||o1.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Oa,Lo=new tt;class xu{constructor(t=new zi,e=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],v=s[9],_=s[10],g=s[11],h=s[12],w=s[13],L=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,g-p,S-h).normalize(),i[1].setComponents(l+r,f+c,g+p,S+h).normalize(),i[2].setComponents(l+o,f+u,g+v,S+w).normalize(),i[3].setComponents(l-o,f-u,g-v,S-w).normalize(),i[4].setComponents(l-a,f-d,g-_,S-L).normalize(),e===bi)i[5].setComponents(l+a,f+d,g+_,S+L).normalize();else if(e===fa)i[5].setComponents(a,d,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Lo.x=s.normal.x>0?t.max.x:t.min.x,Lo.y=s.normal.y>0?t.max.y:t.min.y,Lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function a1(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<d.length;p++){const v=d[f],_=d[p];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,v=d.length;p<v;p++){const _=d[p];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class so extends tn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],v=[],_=[],g=[];for(let h=0;h<u;h++){const w=h*f-o;for(let L=0;L<c;L++){const S=L*d-r;v.push(S,-w,0),_.push(0,0,1),g.push(L/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const L=w+c*h,S=w+c*(h+1),j=w+1+c*(h+1),F=w+1+c*h;p.push(L,S,F),p.push(S,j,F)}this.setIndex(p),this.setAttribute("position",new Mn(v,3)),this.setAttribute("normal",new Mn(_,3)),this.setAttribute("uv",new Mn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new so(t.width,t.height,t.widthSegments,t.heightSegments)}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
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
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
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
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b1=`#ifdef USE_IRIDESCENCE
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
#endif`,M1=`#ifdef USE_BUMPMAP
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,L1=`#define PI 3.141592653589793
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
} // validated`,D1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I1=`vec3 transformedNormal = objectNormal;
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
#endif`,U1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,O1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B1="gl_FragColor = linearToOutputTexel( gl_FragColor );",V1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,G1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Y1=`#ifdef USE_GRADIENTMAP
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
}`,K1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
#endif`,tM=`#ifdef USE_ENVMAP
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
#endif`,eM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rM=`PhysicalMaterial material;
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
#endif`,oM=`struct PhysicalMaterial {
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
}`,aM=`
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
#endif`,lM=`#if defined( RE_IndirectDiffuse )
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_M=`#if defined( USE_POINTS_UV )
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
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`#ifdef USE_MORPHTARGETS
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
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,TM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PM=`#ifdef USE_NORMALMAP
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
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XM=`float getShadowMask() {
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
}`,qM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jM=`#ifdef USE_SKINNING
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
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
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
#endif`,ZM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#ifdef USE_TRANSMISSION
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lS=`uniform sampler2D t2D;
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`#include <common>
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
}`,pS=`#if DEPTH_PACKING == 3200
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
}`,mS=`#define DISTANCE
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
}`,gS=`#define DISTANCE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`uniform float scale;
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
}`,yS=`uniform vec3 diffuse;
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
}`,bS=`#include <common>
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
}`,MS=`uniform vec3 diffuse;
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
}`,SS=`#define LAMBERT
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
}`,ES=`#define LAMBERT
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
}`,wS=`#define MATCAP
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
}`,TS=`#define MATCAP
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
}`,AS=`#define NORMAL
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
}`,CS=`#define NORMAL
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
}`,RS=`#define PHONG
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
}`,PS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,DS=`#define STANDARD
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
}`,IS=`#define TOON
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
}`,US=`#define TOON
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
}`,NS=`uniform float size;
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
}`,OS=`uniform vec3 diffuse;
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
}`,FS=`#include <common>
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
}`,BS=`uniform vec3 color;
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
}`,VS=`uniform float rotation;
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
}`,zS=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:l1,alphahash_pars_fragment:c1,alphamap_fragment:u1,alphamap_pars_fragment:d1,alphatest_fragment:f1,alphatest_pars_fragment:h1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:g1,batching_vertex:_1,begin_vertex:v1,beginnormal_vertex:x1,bsdfs:y1,iridescence_fragment:b1,bumpmap_pars_fragment:M1,clipping_planes_fragment:S1,clipping_planes_pars_fragment:E1,clipping_planes_pars_vertex:w1,clipping_planes_vertex:T1,color_fragment:A1,color_pars_fragment:C1,color_pars_vertex:R1,color_vertex:P1,common:L1,cube_uv_reflection_fragment:D1,defaultnormal_vertex:I1,displacementmap_pars_vertex:U1,displacementmap_vertex:N1,emissivemap_fragment:O1,emissivemap_pars_fragment:F1,colorspace_fragment:B1,colorspace_pars_fragment:V1,envmap_fragment:z1,envmap_common_pars_fragment:k1,envmap_pars_fragment:H1,envmap_pars_vertex:G1,envmap_physical_pars_fragment:tM,envmap_vertex:W1,fog_vertex:$1,fog_pars_vertex:X1,fog_fragment:q1,fog_pars_fragment:j1,gradientmap_pars_fragment:Y1,lightmap_pars_fragment:K1,lights_lambert_fragment:Z1,lights_lambert_pars_fragment:J1,lights_pars_begin:Q1,lights_toon_fragment:eM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:sM,lights_physical_fragment:rM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:cM,logdepthbuf_fragment:uM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:fM,logdepthbuf_vertex:hM,map_fragment:pM,map_pars_fragment:mM,map_particle_fragment:gM,map_particle_pars_fragment:_M,metalnessmap_fragment:vM,metalnessmap_pars_fragment:xM,morphinstance_vertex:yM,morphcolor_vertex:bM,morphnormal_vertex:MM,morphtarget_pars_vertex:SM,morphtarget_vertex:EM,normal_fragment_begin:wM,normal_fragment_maps:TM,normal_pars_fragment:AM,normal_pars_vertex:CM,normal_vertex:RM,normalmap_pars_fragment:PM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:IM,iridescence_pars_fragment:UM,opaque_fragment:NM,packing:OM,premultiplied_alpha_fragment:FM,project_vertex:BM,dithering_fragment:VM,dithering_pars_fragment:zM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:GM,shadowmap_pars_vertex:WM,shadowmap_vertex:$M,shadowmask_pars_fragment:XM,skinbase_vertex:qM,skinning_pars_vertex:jM,skinning_vertex:YM,skinnormal_vertex:KM,specularmap_fragment:ZM,specularmap_pars_fragment:JM,tonemapping_fragment:QM,tonemapping_pars_fragment:tS,transmission_fragment:eS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:sS,uv_vertex:rS,worldpos_vertex:oS,background_vert:aS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:dS,cube_frag:fS,depth_vert:hS,depth_frag:pS,distanceRGBA_vert:mS,distanceRGBA_frag:gS,equirect_vert:_S,equirect_frag:vS,linedashed_vert:xS,linedashed_frag:yS,meshbasic_vert:bS,meshbasic_frag:MS,meshlambert_vert:SS,meshlambert_frag:ES,meshmatcap_vert:wS,meshmatcap_frag:TS,meshnormal_vert:AS,meshnormal_frag:CS,meshphong_vert:RS,meshphong_frag:PS,meshphysical_vert:LS,meshphysical_frag:DS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:NS,points_frag:OS,shadow_vert:FS,shadow_frag:BS,sprite_vert:VS,sprite_frag:zS},Pt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},qn={basic:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Ke([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Ke([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Ke([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new qt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Ke([Pt.points,Pt.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Ke([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Ke([Pt.common,Pt.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Ke([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Ke([Pt.sprite,Pt.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:Ke([Pt.common,Pt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:Ke([Pt.lights,Pt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};qn.physical={uniforms:Ke([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Do={r:0,b:0,g:0},ss=new ei,kS=new Se;function HS(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function v(w){let L=w.isScene===!0?w.background:null;return L&&L.isTexture&&(L=(w.backgroundBlurriness>0?e:t).get(L)),L}function _(w){let L=!1;const S=v(w);S===null?h(a,l):S&&S.isColor&&(h(S,1),L=!0);const j=n.xr.getEnvironmentBlendMode();j==="additive"?i.buffers.color.setClear(0,0,0,1,o):j==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,L){const S=v(L);S&&(S.isCubeTexture||S.mapping===Ua)?(u===void 0&&(u=new In(new pr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:ur(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(j,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(L.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(ss)),u.material.toneMapped=ie.getTransfer(S.colorSpace)!==pe,(d!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new In(new so(2,2),new Yi({name:"BackgroundMaterial",uniforms:ur(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=ie.getTransfer(S.colorSpace)!==pe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function h(w,L){w.getRGB(Do,Ip(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,L,o)}return{getClearColor:function(){return a},setClearColor:function(w,L=1){a.set(w),l=L,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,h(a,l)},render:_,addToRenderList:g}}function GS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(E,A,at,it,dt){let xt=!1;const W=d(it,at,A);r!==W&&(r=W,c(r.object)),xt=p(E,it,at,dt),xt&&v(E,it,at,dt),dt!==null&&t.update(dt,n.ELEMENT_ARRAY_BUFFER),(xt||o)&&(o=!1,S(E,A,at,it),dt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(dt).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function d(E,A,at){const it=at.wireframe===!0;let dt=i[E.id];dt===void 0&&(dt={},i[E.id]=dt);let xt=dt[A.id];xt===void 0&&(xt={},dt[A.id]=xt);let W=xt[it];return W===void 0&&(W=f(l()),xt[it]=W),W}function f(E){const A=[],at=[],it=[];for(let dt=0;dt<e;dt++)A[dt]=0,at[dt]=0,it[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:at,attributeDivisors:it,object:E,attributes:{},index:null}}function p(E,A,at,it){const dt=r.attributes,xt=A.attributes;let W=0;const k=at.getAttributes();for(const q in k)if(k[q].location>=0){const N=dt[q];let D=xt[q];if(D===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(D=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(D=E.instanceColor)),N===void 0||N.attribute!==D||D&&N.data!==D.data)return!0;W++}return r.attributesNum!==W||r.index!==it}function v(E,A,at,it){const dt={},xt=A.attributes;let W=0;const k=at.getAttributes();for(const q in k)if(k[q].location>=0){let N=xt[q];N===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(N=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(N=E.instanceColor));const D={};D.attribute=N,N&&N.data&&(D.data=N.data),dt[q]=D,W++}r.attributes=dt,r.attributesNum=W,r.index=it}function _(){const E=r.newAttributes;for(let A=0,at=E.length;A<at;A++)E[A]=0}function g(E){h(E,0)}function h(E,A){const at=r.newAttributes,it=r.enabledAttributes,dt=r.attributeDivisors;at[E]=1,it[E]===0&&(n.enableVertexAttribArray(E),it[E]=1),dt[E]!==A&&(n.vertexAttribDivisor(E,A),dt[E]=A)}function w(){const E=r.newAttributes,A=r.enabledAttributes;for(let at=0,it=A.length;at<it;at++)A[at]!==E[at]&&(n.disableVertexAttribArray(at),A[at]=0)}function L(E,A,at,it,dt,xt,W){W===!0?n.vertexAttribIPointer(E,A,at,dt,xt):n.vertexAttribPointer(E,A,at,it,dt,xt)}function S(E,A,at,it){_();const dt=it.attributes,xt=at.getAttributes(),W=A.defaultAttributeValues;for(const k in xt){const q=xt[k];if(q.location>=0){let _t=dt[k];if(_t===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(_t=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(_t=E.instanceColor)),_t!==void 0){const N=_t.normalized,D=_t.itemSize,ht=t.get(_t);if(ht===void 0)continue;const Et=ht.buffer,K=ht.type,z=ht.bytesPerElement,B=K===n.INT||K===n.UNSIGNED_INT||_t.gpuType===fu;if(_t.isInterleavedBufferAttribute){const U=_t.data,V=U.stride,Y=_t.offset;if(U.isInstancedInterleavedBuffer){for(let ft=0;ft<q.locationSize;ft++)h(q.location+ft,U.meshPerAttribute);E.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ft=0;ft<q.locationSize;ft++)g(q.location+ft);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let ft=0;ft<q.locationSize;ft++)L(q.location+ft,D/q.locationSize,K,N,V*z,(Y+D/q.locationSize*ft)*z,B)}else{if(_t.isInstancedBufferAttribute){for(let U=0;U<q.locationSize;U++)h(q.location+U,_t.meshPerAttribute);E.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let U=0;U<q.locationSize;U++)g(q.location+U);n.bindBuffer(n.ARRAY_BUFFER,Et);for(let U=0;U<q.locationSize;U++)L(q.location+U,D/q.locationSize,K,N,D*z,D/q.locationSize*U*z,B)}}else if(W!==void 0){const N=W[k];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(q.location,N);break;case 3:n.vertexAttrib3fv(q.location,N);break;case 4:n.vertexAttrib4fv(q.location,N);break;default:n.vertexAttrib1fv(q.location,N)}}}}w()}function j(){I();for(const E in i){const A=i[E];for(const at in A){const it=A[at];for(const dt in it)u(it[dt].object),delete it[dt];delete A[at]}delete i[E]}}function F(E){if(i[E.id]===void 0)return;const A=i[E.id];for(const at in A){const it=A[at];for(const dt in it)u(it[dt].object),delete it[dt];delete A[at]}delete i[E.id]}function O(E){for(const A in i){const at=i[A];if(at[E.id]===void 0)continue;const it=at[E.id];for(const dt in it)u(it[dt].object),delete it[dt];delete at[E.id]}}function I(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:j,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function WS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let v=0;v<d;v++)p+=u[v];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $S(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(O){return!(O!==Dn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const I=O===no&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==wi&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==yi&&!I)}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),j=v>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:w,maxVaryings:L,maxFragmentUniforms:S,vertexTextures:j,maxSamples:F}}function XS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new zi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const v=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,h=n.get(d);if(!s||v===null||v.length===0||r&&!g)r?u(null):c();else{const w=r?0:i,L=w*4;let S=h.clippingState||null;l.value=S,S=u(v,f,L,p);for(let j=0;j!==L;++j)S[j]=e[j];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,v){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const h=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<h)&&(g=new Float32Array(h));for(let L=0,S=p;L!==_;++L,S+=4)o.copy(d[L]).applyMatrix4(w,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function qS(n){let t=new WeakMap;function e(o,a){return a===lc?o.mapping=or:a===cc&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===cc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new s1(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Fp extends Up{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qs=4,tf=[.125,.215,.35,.446,.526,.582],us=20,El=new Fp,ef=new qt;let wl=null,Tl=0,Al=0,Cl=!1;const as=(1+Math.sqrt(5))/2,Vs=1/as,nf=[new tt(-as,Vs,0),new tt(as,Vs,0),new tt(-Vs,0,as),new tt(Vs,0,as),new tt(0,as,-Vs),new tt(0,as,Vs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,Tl,Al),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Io(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:no,format:Dn,colorSpace:hr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(r)),this._blurMaterial=YS(r,t,e)}return s}_compileMaterial(t){const e=new In(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ef),u.toneMapping=Mi,u.autoClear=!1;const p=new Pp({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),v=new In(new pr,p);let _=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(ef),_=!0);for(let h=0;h<6;h++){const w=h%3;w===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):w===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const L=this._cubeSize;Io(s,w*L,h>2?L:0,L,L),u.setRenderTarget(s),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===or||t.mapping===ar;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Io(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,El)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new In(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*us-1),_=r/v,g=isFinite(r)?1+Math.floor(u*_):us;g>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const h=[];let w=0;for(let O=0;O<us;++O){const I=O/_,M=Math.exp(-I*I/2);h.push(M),O===0?w+=M:O<g&&(w+=2*M)}for(let O=0;O<h.length;O++)h[O]=h[O]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:L}=this;f.dTheta.value=v,f.mipInt.value=L-i;const S=this._sizeLods[s],j=3*S*(s>L-qs?s-L+qs:0),F=4*(this._cubeSize-S);Io(e,j,F,3*S,2*S),l.setRenderTarget(e),l.render(d,El)}}function jS(n){const t=[],e=[],i=[];let s=n;const r=n-qs+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qs?l=tf[o-n+qs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,v=6,_=3,g=2,h=1,w=new Float32Array(_*v*p),L=new Float32Array(g*v*p),S=new Float32Array(h*v*p);for(let F=0;F<p;F++){const O=F%3*2/3-1,I=F>2?0:-1,M=[O,I,0,O+2/3,I,0,O+2/3,I+1,0,O,I,0,O+2/3,I+1,0,O,I+1,0];w.set(M,_*v*F),L.set(f,g*v*F);const E=[F,F,F,F,F,F];S.set(E,h*v*F)}const j=new tn;j.setAttribute("position",new Fn(w,_)),j.setAttribute("uv",new Fn(L,g)),j.setAttribute("faceIndex",new Fn(S,h)),t.push(j),s>qs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){const i=new ys(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function YS(n,t,e){const i=new Float32Array(us),s=new tt(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function of(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function af(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function KS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lc||l===cc,u=l===or||l===ar;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ZS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Dr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function JS(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let g=0,h=_.length;g<h;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const _=p[v];for(let g=0,h=_.length;g<h;g++)t.update(_[g],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,v=d.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let L=0,S=w.length;L<S;L+=3){const j=w[L+0],F=w[L+1],O=w[L+2];f.push(j,F,F,O,O,j)}}else if(v!==void 0){const w=v.array;_=v.version;for(let L=0,S=w.length/3-1;L<S;L+=3){const j=L+0,F=L+1,O=L+2;f.push(j,F,F,O,O,j)}}else return;const g=new(Tp(f)?Dp:Lp)(f,1);g.version=_;const h=r.get(d);h&&t.remove(h),r.set(d,g)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function QS(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,f*o,v),e.update(p,i,v))}function u(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,v);let g=0;for(let h=0;h<v;h++)g+=p[h];e.update(g,i,1)}function d(f,p,v,_){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],_[h]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,_,0,v);let h=0;for(let w=0;w<v;w++)h+=p[w]*_[w];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function eE(n,t,e){const i=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let E=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],L=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let j=a.attributes.position.count*S,F=1;j>t.maxTextureSize&&(F=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const O=new Float32Array(j*F*4*d),I=new Cp(O,j,F,d);I.type=yi,I.needsUpdate=!0;const M=S*4;for(let A=0;A<d;A++){const at=h[A],it=w[A],dt=L[A],xt=j*F*4*A;for(let W=0;W<at.count;W++){const k=W*M;v===!0&&(s.fromBufferAttribute(at,W),O[xt+k+0]=s.x,O[xt+k+1]=s.y,O[xt+k+2]=s.z,O[xt+k+3]=0),_===!0&&(s.fromBufferAttribute(it,W),O[xt+k+4]=s.x,O[xt+k+5]=s.y,O[xt+k+6]=s.z,O[xt+k+7]=0),g===!0&&(s.fromBufferAttribute(dt,W),O[xt+k+8]=s.x,O[xt+k+9]=s.y,O[xt+k+10]=s.z,O[xt+k+11]=dt.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new Wt(j,F)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bp extends nn{constructor(t,e,i,s,r,o,a,l,c,u=Qs){if(u!==Qs&&u!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qs&&(i=xs),i===void 0&&u===cr&&(i=lr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vp=new nn,lf=new Bp(1,1),zp=new Cp,kp=new Hb,Hp=new Np,cf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function iE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function aE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Ne(e,i)}}function lE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Ne(e,i)}}function cE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;df.set(i),n.uniformMatrix4fv(this.addr,!1,df),Ne(e,i)}}function uE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function fE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function pE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function gE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function _E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function vE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=wp,r=lf):r=Vp,e.setTexture2D(t||r,s)}function xE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||kp,s)}function yE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hp,s)}function bE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||zp,s)}function ME(n){switch(n){case 5126:return iE;case 35664:return sE;case 35665:return rE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return bE}}function SE(n,t){n.uniform1fv(this.addr,t)}function EE(n,t){const e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function wE(n,t){const e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function TE(n,t){const e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function AE(n,t){const e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function CE(n,t){const e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function RE(n,t){const e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function PE(n,t){n.uniform1iv(this.addr,t)}function LE(n,t){n.uniform2iv(this.addr,t)}function DE(n,t){n.uniform3iv(this.addr,t)}function IE(n,t){n.uniform4iv(this.addr,t)}function UE(n,t){n.uniform1uiv(this.addr,t)}function NE(n,t){n.uniform2uiv(this.addr,t)}function OE(n,t){n.uniform3uiv(this.addr,t)}function FE(n,t){n.uniform4uiv(this.addr,t)}function BE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Vp,r[o])}function VE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||kp,r[o])}function zE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hp,r[o])}function kE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||zp,r[o])}function HE(n){switch(n){case 5126:return SE;case 35664:return EE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return NE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return VE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return kE}}class GE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ME(e.type)}}class WE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HE(e.type)}}class $E{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function XE(n,t,e){const i=n.name,s=i.length;for(Rl.lastIndex=0;;){const r=Rl.exec(i),o=Rl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pf(e,c===void 0?new GE(a,n,t):new WE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new $E(a),pf(e,d)),e=d}}}class ta{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);XE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const qE=37297;let jE=0;function YE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gf=new te;function KE(n){ie._getMatrix(gf,ie.workingColorSpace,n);const t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _f(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+YE(n.getShaderSource(t),o)}else return s}function ZE(n,t){const e=KE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function JE(n,t){let e;switch(t){case pb:e="Linear";break;case mb:e="Reinhard";break;case gb:e="Cineon";break;case _b:e="ACESFilmic";break;case xb:e="AgX";break;case yb:e="Neutral";break;case vb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Uo=new tt;function QE(){ie.getLuminanceCoefficients(Uo);const n=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function ew(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ir(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(iw,rw)}const sw=new Map;function rw(n,t){let e=ee[t];if(e===void 0){const i=sw.get(t);if(i!==void 0)e=ee[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(ow,aw)}function aw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function lw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===qy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===di&&(t="SHADOWMAP_TYPE_VSM"),t}function cw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case or:case ar:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ar:t="ENVMAP_MODE_REFRACTION";break}return t}function dw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:t="ENVMAP_BLENDING_MULTIPLY";break;case fb:t="ENVMAP_BLENDING_MIX";break;case hb:t="ENVMAP_BLENDING_ADD";break}return t}function fw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lw(e),c=cw(e),u=uw(e),d=dw(e),f=fw(e),p=tw(e),v=ew(r),_=s.createProgram();let g,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ir).join(`
`),h.length>0&&(h+=`
`)):(g=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),h=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mi?"#define TONE_MAPPING":"",e.toneMapping!==Mi?ee.tonemapping_pars_fragment:"",e.toneMapping!==Mi?JE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,ZE("linearToOutputTexel",e.outputColorSpace),QE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ir).join(`
`)),o=zc(o),o=vf(o,e),o=xf(o,e),a=zc(a),a=vf(a,e),a=xf(a,e),o=yf(o),a=yf(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const L=w+g+o,S=w+h+a,j=mf(s,s.VERTEX_SHADER,L),F=mf(s,s.FRAGMENT_SHADER,S);s.attachShader(_,j),s.attachShader(_,F),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function O(A){if(n.debug.checkShaderErrors){const at=s.getProgramInfoLog(_).trim(),it=s.getShaderInfoLog(j).trim(),dt=s.getShaderInfoLog(F).trim();let xt=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(xt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,j,F);else{const k=_f(s,j,"vertex"),q=_f(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+at+`
`+k+`
`+q)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(it===""||dt==="")&&(W=!1);W&&(A.diagnostics={runnable:xt,programLog:at,vertexShader:{log:it,prefix:g},fragmentShader:{log:dt,prefix:h}})}s.deleteShader(j),s.deleteShader(F),I=new ta(s,_),M=nw(s,_)}let I;this.getUniforms=function(){return I===void 0&&O(this),I};let M;this.getAttributes=function(){return M===void 0&&O(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,qE)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=j,this.fragmentShader=F,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gw(t),e.set(t,i)),i}}class gw{constructor(t){this.id=pw++,this.code=t,this.usedTimes=0}}function _w(n,t,e,i,s,r,o){const a=new vu,l=new mw,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,E,A,at,it){const dt=at.fog,xt=it.geometry,W=M.isMeshStandardMaterial?at.environment:null,k=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),q=k&&k.mapping===Ua?k.image.height:null,_t=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const N=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,D=N!==void 0?N.length:0;let ht=0;xt.morphAttributes.position!==void 0&&(ht=1),xt.morphAttributes.normal!==void 0&&(ht=2),xt.morphAttributes.color!==void 0&&(ht=3);let Et,K,z,B;if(_t){const fe=qn[_t];Et=fe.vertexShader,K=fe.fragmentShader}else Et=M.vertexShader,K=M.fragmentShader,l.update(M),z=l.getVertexShaderID(M),B=l.getFragmentShaderID(M);const U=n.getRenderTarget(),V=n.state.buffers.depth.getReversed(),Y=it.isInstancedMesh===!0,ft=it.isBatchedMesh===!0,y=!!M.map,R=!!M.matcap,H=!!k,b=!!M.aoMap,nt=!!M.lightMap,et=!!M.bumpMap,lt=!!M.normalMap,ct=!!M.displacementMap,bt=!!M.emissiveMap,Q=!!M.metalnessMap,C=!!M.roughnessMap,x=M.anisotropy>0,G=M.clearcoat>0,st=M.dispersion>0,mt=M.iridescence>0,ut=M.sheen>0,ot=M.transmission>0,T=x&&!!M.anisotropyMap,$=G&&!!M.clearcoatMap,Tt=G&&!!M.clearcoatNormalMap,rt=G&&!!M.clearcoatRoughnessMap,wt=mt&&!!M.iridescenceMap,Ut=mt&&!!M.iridescenceThicknessMap,Rt=ut&&!!M.sheenColorMap,St=ut&&!!M.sheenRoughnessMap,Gt=!!M.specularMap,$t=!!M.specularColorMap,se=!!M.specularIntensityMap,X=ot&&!!M.transmissionMap,Ct=ot&&!!M.thicknessMap,vt=!!M.gradientMap,Mt=!!M.alphaMap,It=M.alphaTest>0,Dt=!!M.alphaHash,Yt=!!M.extensions;let we=Mi;M.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(we=n.toneMapping);const ke={shaderID:_t,shaderType:M.type,shaderName:M.name,vertexShader:Et,fragmentShader:K,defines:M.defines,customVertexShaderID:z,customFragmentShaderID:B,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ft,batchingColor:ft&&it._colorsTexture!==null,instancing:Y,instancingColor:Y&&it.instanceColor!==null,instancingMorph:Y&&it.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:hr,alphaToCoverage:!!M.alphaToCoverage,map:y,matcap:R,envMap:H,envMapMode:H&&k.mapping,envMapCubeUVHeight:q,aoMap:b,lightMap:nt,bumpMap:et,normalMap:lt,displacementMap:f&&ct,emissiveMap:bt,normalMapObjectSpace:lt&&M.normalMapType===Eb,normalMapTangentSpace:lt&&M.normalMapType===Ep,metalnessMap:Q,roughnessMap:C,anisotropy:x,anisotropyMap:T,clearcoat:G,clearcoatMap:$,clearcoatNormalMap:Tt,clearcoatRoughnessMap:rt,dispersion:st,iridescence:mt,iridescenceMap:wt,iridescenceThicknessMap:Ut,sheen:ut,sheenColorMap:Rt,sheenRoughnessMap:St,specularMap:Gt,specularColorMap:$t,specularIntensityMap:se,transmission:ot,transmissionMap:X,thicknessMap:Ct,gradientMap:vt,opaque:M.transparent===!1&&M.blending===Js&&M.alphaToCoverage===!1,alphaMap:Mt,alphaTest:It,alphaHash:Dt,combine:M.combine,mapUv:y&&_(M.map.channel),aoMapUv:b&&_(M.aoMap.channel),lightMapUv:nt&&_(M.lightMap.channel),bumpMapUv:et&&_(M.bumpMap.channel),normalMapUv:lt&&_(M.normalMap.channel),displacementMapUv:ct&&_(M.displacementMap.channel),emissiveMapUv:bt&&_(M.emissiveMap.channel),metalnessMapUv:Q&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:T&&_(M.anisotropyMap.channel),clearcoatMapUv:$&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:St&&_(M.sheenRoughnessMap.channel),specularMapUv:Gt&&_(M.specularMap.channel),specularColorMapUv:$t&&_(M.specularColorMap.channel),specularIntensityMapUv:se&&_(M.specularIntensityMap.channel),transmissionMapUv:X&&_(M.transmissionMap.channel),thicknessMapUv:Ct&&_(M.thicknessMap.channel),alphaMapUv:Mt&&_(M.alphaMap.channel),vertexTangents:!!xt.attributes.tangent&&(lt||x),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!xt.attributes.uv&&(y||Mt),fog:!!dt,useFog:M.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:V,skinning:it.isSkinnedMesh===!0,morphTargets:xt.morphAttributes.position!==void 0,morphNormals:xt.morphAttributes.normal!==void 0,morphColors:xt.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ht,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:we,decodeVideoTexture:y&&M.map.isVideoTexture===!0&&ie.getTransfer(M.map.colorSpace)===pe,decodeVideoTextureEmissive:bt&&M.emissiveMap.isVideoTexture===!0&&ie.getTransfer(M.emissiveMap.colorSpace)===pe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===vi,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Yt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&M.extensions.multiDraw===!0||ft)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ke.vertexUv1s=c.has(1),ke.vertexUv2s=c.has(2),ke.vertexUv3s=c.has(3),c.clear(),ke}function h(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const A in M.defines)E.push(A),E.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(w(E,M),L(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function w(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function L(M,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const E=v[M.type];let A;if(E){const at=qn[E];A=t1.clone(at.uniforms)}else A=M.uniforms;return A}function j(M,E){let A;for(let at=0,it=u.length;at<it;at++){const dt=u[at];if(dt.cacheKey===E){A=dt,++A.usedTimes;break}}return A===void 0&&(A=new hw(n,E,M,r),u.push(A)),A}function F(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function O(M){l.remove(M)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:S,acquireProgram:j,releaseProgram:F,releaseShaderCache:O,programs:u,dispose:I}}function vw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,v,_,g){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:v,renderOrder:d.renderOrder,z:_,group:g},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=_,h.group=g),t++,h}function a(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,v,_,g){const h=o(d,f,p,v,_,g);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||xw),i.length>1&&i.sort(f||Mf),s.length>1&&s.sort(f||Mf)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function yw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sf,n.set(i,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function bw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new qt};break;case"SpotLight":e={position:new tt,direction:new tt,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return n[t.id]=e,e}}}function Mw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Sw=0;function Ew(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ww(n){const t=new bw,e=Mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new tt);const s=new tt,r=new Se,o=new Se;function a(c){let u=0,d=0,f=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,v=0,_=0,g=0,h=0,w=0,L=0,S=0,j=0,F=0,O=0;c.sort(Ew);for(let M=0,E=c.length;M<E;M++){const A=c[M],at=A.color,it=A.intensity,dt=A.distance,xt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=at.r*it,d+=at.g*it,f+=at.b*it;else if(A.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(A.sh.coefficients[W],it);O++}else if(A.isDirectionalLight){const W=t.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const k=A.shadow,q=e.get(A);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.directionalShadow[p]=q,i.directionalShadowMap[p]=xt,i.directionalShadowMatrix[p]=A.shadow.matrix,w++}i.directional[p]=W,p++}else if(A.isSpotLight){const W=t.get(A);W.position.setFromMatrixPosition(A.matrixWorld),W.color.copy(at).multiplyScalar(it),W.distance=dt,W.coneCos=Math.cos(A.angle),W.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),W.decay=A.decay,i.spot[_]=W;const k=A.shadow;if(A.map&&(i.spotLightMap[j]=A.map,j++,k.updateMatrices(A),A.castShadow&&F++),i.spotLightMatrix[_]=k.matrix,A.castShadow){const q=e.get(A);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=xt,S++}_++}else if(A.isRectAreaLight){const W=t.get(A);W.color.copy(at).multiplyScalar(it),W.halfWidth.set(A.width*.5,0,0),W.halfHeight.set(0,A.height*.5,0),i.rectArea[g]=W,g++}else if(A.isPointLight){const W=t.get(A);if(W.color.copy(A.color).multiplyScalar(A.intensity),W.distance=A.distance,W.decay=A.decay,A.castShadow){const k=A.shadow,q=e.get(A);q.shadowIntensity=k.intensity,q.shadowBias=k.bias,q.shadowNormalBias=k.normalBias,q.shadowRadius=k.radius,q.shadowMapSize=k.mapSize,q.shadowCameraNear=k.camera.near,q.shadowCameraFar=k.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=xt,i.pointShadowMatrix[v]=A.shadow.matrix,L++}i.point[v]=W,v++}else if(A.isHemisphereLight){const W=t.get(A);W.skyColor.copy(A.color).multiplyScalar(it),W.groundColor.copy(A.groundColor).multiplyScalar(it),i.hemi[h]=W,h++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==h||I.numDirectionalShadows!==w||I.numPointShadows!==L||I.numSpotShadows!==S||I.numSpotMaps!==j||I.numLightProbes!==O)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=S+j-F,i.spotLightMap.length=j,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=O,I.directionalLength=p,I.pointLength=v,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=h,I.numDirectionalShadows=w,I.numPointShadows=L,I.numSpotShadows=S,I.numSpotMaps=j,I.numLightProbes=O,i.version=Sw++)}function l(c,u){let d=0,f=0,p=0,v=0,_=0;const g=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const L=c[h];if(L.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(L.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),p++}else if(L.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(L.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(L.width*.5,0,0),S.halfHeight.set(0,L.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(L.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(L.matrixWorld),S.position.applyMatrix4(g),f++}else if(L.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(L.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ef(n){const t=new ww(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(n),t.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Aw extends Ss{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cw extends Ss{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pw=`uniform sampler2D shadow_pass;
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
}`;function Lw(n,t,e){let i=new xu;const s=new Wt,r=new Wt,o=new Ae,a=new Aw({depthPacking:Sb}),l=new Cw,c={},u=e.maxTextureSize,d={[ji]:an,[an]:ji,[vi]:vi},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Rw,fragmentShader:Pw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new tn;v.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new In(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let h=this.type;this.render=function(F,O,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const M=n.getRenderTarget(),E=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),at=n.state;at.setBlending(Wi),at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const it=h!==di&&this.type===di,dt=h===di&&this.type!==di;for(let xt=0,W=F.length;xt<W;xt++){const k=F[xt],q=k.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const _t=q.getFrameExtents();if(s.multiply(_t),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_t.x),s.x=r.x*_t.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_t.y),s.y=r.y*_t.y,q.mapSize.y=r.y)),q.map===null||it===!0||dt===!0){const D=this.type!==di?{minFilter:On,magFilter:On}:{};q.map!==null&&q.map.dispose(),q.map=new ys(s.x,s.y,D),q.map.texture.name=k.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();const N=q.getViewportCount();for(let D=0;D<N;D++){const ht=q.getViewport(D);o.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),at.viewport(o),q.updateMatrices(k,D),i=q.getFrustum(),S(O,I,q.camera,k,this.type)}q.isPointLightShadow!==!0&&this.type===di&&w(q,I),q.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(M,E,A)};function w(F,O){const I=t.update(_);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,p.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ys(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(O,null,I,f,_,null),p.uniforms.shadow_pass.value=F.mapPass.texture,p.uniforms.resolution.value=F.mapSize,p.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(O,null,I,p,_,null)}function L(F,O,I,M){let E=null;const A=I.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(A!==void 0)E=A;else if(E=I.isPointLight===!0?l:a,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const at=E.uuid,it=O.uuid;let dt=c[at];dt===void 0&&(dt={},c[at]=dt);let xt=dt[it];xt===void 0&&(xt=E.clone(),dt[it]=xt,O.addEventListener("dispose",j)),E=xt}if(E.visible=O.visible,E.wireframe=O.wireframe,M===di?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:d[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const at=n.properties.get(E);at.light=I}return E}function S(F,O,I,M,E){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&E===di)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,F.matrixWorld);const it=t.update(F),dt=F.material;if(Array.isArray(dt)){const xt=it.groups;for(let W=0,k=xt.length;W<k;W++){const q=xt[W],_t=dt[q.materialIndex];if(_t&&_t.visible){const N=L(F,_t,M,E);F.onBeforeShadow(n,F,O,I,it,N,q),n.renderBufferDirect(I,null,it,N,F,q),F.onAfterShadow(n,F,O,I,it,N,q)}}}else if(dt.visible){const xt=L(F,dt,M,E);F.onBeforeShadow(n,F,O,I,it,xt,null),n.renderBufferDirect(I,null,it,xt,F,null),F.onAfterShadow(n,F,O,I,it,xt,null)}}const at=F.children;for(let it=0,dt=at.length;it<dt;it++)S(at[it],O,I,M,E)}function j(F){F.target.removeEventListener("dispose",j);for(const I in c){const M=c[I],E=F.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}const Dw={[ec]:nc,[ic]:oc,[sc]:ac,[rr]:rc,[nc]:ec,[oc]:ic,[ac]:sc,[rc]:rr};function Iw(n,t){function e(){let X=!1;const Ct=new Ae;let vt=null;const Mt=new Ae(0,0,0,0);return{setMask:function(It){vt!==It&&!X&&(n.colorMask(It,It,It,It),vt=It)},setLocked:function(It){X=It},setClear:function(It,Dt,Yt,we,ke){ke===!0&&(It*=we,Dt*=we,Yt*=we),Ct.set(It,Dt,Yt,we),Mt.equals(Ct)===!1&&(n.clearColor(It,Dt,Yt,we),Mt.copy(Ct))},reset:function(){X=!1,vt=null,Mt.set(-1,0,0,0)}}}function i(){let X=!1,Ct=!1,vt=null,Mt=null,It=null;return{setReversed:function(Dt){if(Ct!==Dt){const Yt=t.get("EXT_clip_control");Ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const we=It;It=null,this.setClear(we)}Ct=Dt},getReversed:function(){return Ct},setTest:function(Dt){Dt?U(n.DEPTH_TEST):V(n.DEPTH_TEST)},setMask:function(Dt){vt!==Dt&&!X&&(n.depthMask(Dt),vt=Dt)},setFunc:function(Dt){if(Ct&&(Dt=Dw[Dt]),Mt!==Dt){switch(Dt){case ec:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case rr:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=Dt}},setLocked:function(Dt){X=Dt},setClear:function(Dt){It!==Dt&&(Ct&&(Dt=1-Dt),n.clearDepth(Dt),It=Dt)},reset:function(){X=!1,vt=null,Mt=null,It=null,Ct=!1}}}function s(){let X=!1,Ct=null,vt=null,Mt=null,It=null,Dt=null,Yt=null,we=null,ke=null;return{setTest:function(fe){X||(fe?U(n.STENCIL_TEST):V(n.STENCIL_TEST))},setMask:function(fe){Ct!==fe&&!X&&(n.stencilMask(fe),Ct=fe)},setFunc:function(fe,wn,ni){(vt!==fe||Mt!==wn||It!==ni)&&(n.stencilFunc(fe,wn,ni),vt=fe,Mt=wn,It=ni)},setOp:function(fe,wn,ni){(Dt!==fe||Yt!==wn||we!==ni)&&(n.stencilOp(fe,wn,ni),Dt=fe,Yt=wn,we=ni)},setLocked:function(fe){X=fe},setClear:function(fe){ke!==fe&&(n.clearStencil(fe),ke=fe)},reset:function(){X=!1,Ct=null,vt=null,Mt=null,It=null,Dt=null,Yt=null,we=null,ke=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,w=null,L=null,S=null,j=null,F=null,O=new qt(0,0,0),I=0,M=!1,E=null,A=null,at=null,it=null,dt=null;const xt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,k=0;const q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=k>=1):q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=k>=2);let _t=null,N={};const D=n.getParameter(n.SCISSOR_BOX),ht=n.getParameter(n.VIEWPORT),Et=new Ae().fromArray(D),K=new Ae().fromArray(ht);function z(X,Ct,vt,Mt){const It=new Uint8Array(4),Dt=n.createTexture();n.bindTexture(X,Dt),n.texParameteri(X,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(X,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<vt;Yt++)X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,It):n.texImage2D(Ct+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,It);return Dt}const B={};B[n.TEXTURE_2D]=z(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(rr),et(!1),lt(Cd),U(n.CULL_FACE),b(Wi);function U(X){u[X]!==!0&&(n.enable(X),u[X]=!0)}function V(X){u[X]!==!1&&(n.disable(X),u[X]=!1)}function Y(X,Ct){return d[X]!==Ct?(n.bindFramebuffer(X,Ct),d[X]=Ct,X===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ct),X===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ft(X,Ct){let vt=p,Mt=!1;if(X){vt=f.get(Ct),vt===void 0&&(vt=[],f.set(Ct,vt));const It=X.textures;if(vt.length!==It.length||vt[0]!==n.COLOR_ATTACHMENT0){for(let Dt=0,Yt=It.length;Dt<Yt;Dt++)vt[Dt]=n.COLOR_ATTACHMENT0+Dt;vt.length=It.length,Mt=!0}}else vt[0]!==n.BACK&&(vt[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(vt)}function y(X){return v!==X?(n.useProgram(X),v=X,!0):!1}const R={[cs]:n.FUNC_ADD,[Yy]:n.FUNC_SUBTRACT,[Ky]:n.FUNC_REVERSE_SUBTRACT};R[Zy]=n.MIN,R[Jy]=n.MAX;const H={[Qy]:n.ZERO,[tb]:n.ONE,[eb]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[ab]:n.SRC_ALPHA_SATURATE,[rb]:n.DST_COLOR,[ib]:n.DST_ALPHA,[nb]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[ob]:n.ONE_MINUS_DST_COLOR,[sb]:n.ONE_MINUS_DST_ALPHA,[lb]:n.CONSTANT_COLOR,[cb]:n.ONE_MINUS_CONSTANT_COLOR,[ub]:n.CONSTANT_ALPHA,[db]:n.ONE_MINUS_CONSTANT_ALPHA};function b(X,Ct,vt,Mt,It,Dt,Yt,we,ke,fe){if(X===Wi){_===!0&&(V(n.BLEND),_=!1);return}if(_===!1&&(U(n.BLEND),_=!0),X!==jy){if(X!==g||fe!==M){if((h!==cs||S!==cs)&&(n.blendEquation(n.FUNC_ADD),h=cs,S=cs),fe)switch(X){case Js:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}w=null,L=null,j=null,F=null,O.set(0,0,0),I=0,g=X,M=fe}return}It=It||Ct,Dt=Dt||vt,Yt=Yt||Mt,(Ct!==h||It!==S)&&(n.blendEquationSeparate(R[Ct],R[It]),h=Ct,S=It),(vt!==w||Mt!==L||Dt!==j||Yt!==F)&&(n.blendFuncSeparate(H[vt],H[Mt],H[Dt],H[Yt]),w=vt,L=Mt,j=Dt,F=Yt),(we.equals(O)===!1||ke!==I)&&(n.blendColor(we.r,we.g,we.b,ke),O.copy(we),I=ke),g=X,M=!1}function nt(X,Ct){X.side===vi?V(n.CULL_FACE):U(n.CULL_FACE);let vt=X.side===an;Ct&&(vt=!vt),et(vt),X.blending===Js&&X.transparent===!1?b(Wi):b(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Mt=X.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),bt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):V(n.SAMPLE_ALPHA_TO_COVERAGE)}function et(X){E!==X&&(X?n.frontFace(n.CW):n.frontFace(n.CCW),E=X)}function lt(X){X!==$y?(U(n.CULL_FACE),X!==A&&(X===Cd?n.cullFace(n.BACK):X===Xy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):V(n.CULL_FACE),A=X}function ct(X){X!==at&&(W&&n.lineWidth(X),at=X)}function bt(X,Ct,vt){X?(U(n.POLYGON_OFFSET_FILL),(it!==Ct||dt!==vt)&&(n.polygonOffset(Ct,vt),it=Ct,dt=vt)):V(n.POLYGON_OFFSET_FILL)}function Q(X){X?U(n.SCISSOR_TEST):V(n.SCISSOR_TEST)}function C(X){X===void 0&&(X=n.TEXTURE0+xt-1),_t!==X&&(n.activeTexture(X),_t=X)}function x(X,Ct,vt){vt===void 0&&(_t===null?vt=n.TEXTURE0+xt-1:vt=_t);let Mt=N[vt];Mt===void 0&&(Mt={type:void 0,texture:void 0},N[vt]=Mt),(Mt.type!==X||Mt.texture!==Ct)&&(_t!==vt&&(n.activeTexture(vt),_t=vt),n.bindTexture(X,Ct||B[X]),Mt.type=X,Mt.texture=Ct)}function G(){const X=N[_t];X!==void 0&&X.type!==void 0&&(n.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function st(){try{n.compressedTexImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{n.texSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function T(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{n.texStorage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(){try{n.texImage3D.apply(n,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(X){Et.equals(X)===!1&&(n.scissor(X.x,X.y,X.z,X.w),Et.copy(X))}function St(X){K.equals(X)===!1&&(n.viewport(X.x,X.y,X.z,X.w),K.copy(X))}function Gt(X,Ct){let vt=c.get(Ct);vt===void 0&&(vt=new WeakMap,c.set(Ct,vt));let Mt=vt.get(X);Mt===void 0&&(Mt=n.getUniformBlockIndex(Ct,X.name),vt.set(X,Mt))}function $t(X,Ct){const Mt=c.get(Ct).get(X);l.get(Ct)!==Mt&&(n.uniformBlockBinding(Ct,Mt,X.__bindingPointIndex),l.set(Ct,Mt))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},_t=null,N={},d={},f=new WeakMap,p=[],v=null,_=!1,g=null,h=null,w=null,L=null,S=null,j=null,F=null,O=new qt(0,0,0),I=0,M=!1,E=null,A=null,at=null,it=null,dt=null,Et.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:V,bindFramebuffer:Y,drawBuffers:ft,useProgram:y,setBlending:b,setMaterial:nt,setFlipSided:et,setCullFace:lt,setLineWidth:ct,setPolygonOffset:bt,setScissorTest:Q,activeTexture:C,bindTexture:x,unbindTexture:G,compressedTexImage2D:st,compressedTexImage3D:mt,texImage2D:wt,texImage3D:Ut,updateUBOMapping:Gt,uniformBlockBinding:$t,texStorage2D:Tt,texStorage3D:rt,texSubImage2D:ut,texSubImage3D:ot,compressedTexSubImage2D:T,compressedTexSubImage3D:$,scissor:Rt,viewport:St,reset:se}}function wf(n,t,e,i){const s=Uw(i);switch(e){case _p:return n*t;case xp:return n*t;case yp:return n*t*2;case bp:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case Mp:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case vp:return n*t*3/s.components*s.byteLength;case Dn:return n*t*4/s.components*s.byteLength;case _u:return n*t*4/s.components*s.byteLength;case Yo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zo:case Jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:case mc:return Math.max(n,16)*Math.max(t,8)/4;case fc:case pc:return Math.max(n,8)*Math.max(t,8)/2;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qo:case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sp:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uw(n){switch(n){case wi:case pp:return{byteLength:1,components:1};case Jr:case mp:case no:return{byteLength:2,components:1};case hu:case pu:return{byteLength:2,components:4};case xs:case fu:case yi:return{byteLength:4,components:1};case gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Nw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,x){return p?new OffscreenCanvas(C,x):ha("canvas")}function _(C,x,G){let st=1;const mt=Q(C);if((mt.width>G||mt.height>G)&&(st=G/Math.max(mt.width,mt.height)),st<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ut=Math.floor(st*mt.width),ot=Math.floor(st*mt.height);d===void 0&&(d=v(ut,ot));const T=x?v(ut,ot):d;return T.width=ut,T.height=ot,T.getContext("2d").drawImage(C,0,0,ut,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+mt.width+"x"+mt.height+") to ("+ut+"x"+ot+")."),T}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+mt.width+"x"+mt.height+")."),C;return C}function g(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function L(C,x,G,st,mt=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ut=x;if(x===n.RED&&(G===n.FLOAT&&(ut=n.R32F),G===n.HALF_FLOAT&&(ut=n.R16F),G===n.UNSIGNED_BYTE&&(ut=n.R8)),x===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ut=n.R8UI),G===n.UNSIGNED_SHORT&&(ut=n.R16UI),G===n.UNSIGNED_INT&&(ut=n.R32UI),G===n.BYTE&&(ut=n.R8I),G===n.SHORT&&(ut=n.R16I),G===n.INT&&(ut=n.R32I)),x===n.RG&&(G===n.FLOAT&&(ut=n.RG32F),G===n.HALF_FLOAT&&(ut=n.RG16F),G===n.UNSIGNED_BYTE&&(ut=n.RG8)),x===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(ut=n.RG8UI),G===n.UNSIGNED_SHORT&&(ut=n.RG16UI),G===n.UNSIGNED_INT&&(ut=n.RG32UI),G===n.BYTE&&(ut=n.RG8I),G===n.SHORT&&(ut=n.RG16I),G===n.INT&&(ut=n.RG32I)),x===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(ut=n.RGB8UI),G===n.UNSIGNED_SHORT&&(ut=n.RGB16UI),G===n.UNSIGNED_INT&&(ut=n.RGB32UI),G===n.BYTE&&(ut=n.RGB8I),G===n.SHORT&&(ut=n.RGB16I),G===n.INT&&(ut=n.RGB32I)),x===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(ut=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(ut=n.RGBA16UI),G===n.UNSIGNED_INT&&(ut=n.RGBA32UI),G===n.BYTE&&(ut=n.RGBA8I),G===n.SHORT&&(ut=n.RGBA16I),G===n.INT&&(ut=n.RGBA32I)),x===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(ut=n.RGB9_E5),x===n.RGBA){const ot=mt?Na:ie.getTransfer(st);G===n.FLOAT&&(ut=n.RGBA32F),G===n.HALF_FLOAT&&(ut=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ut=ot===pe?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ut=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ut=n.RGB5_A1)}return(ut===n.R16F||ut===n.R32F||ut===n.RG16F||ut===n.RG32F||ut===n.RGBA16F||ut===n.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function S(C,x){let G;return C?x===null||x===xs||x===lr?G=n.DEPTH24_STENCIL8:x===yi?G=n.DEPTH32F_STENCIL8:x===Jr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===lr?G=n.DEPTH_COMPONENT24:x===yi?G=n.DEPTH_COMPONENT32F:x===Jr&&(G=n.DEPTH_COMPONENT16),G}function j(C,x){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==On&&C.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function F(C){const x=C.target;x.removeEventListener("dispose",F),I(x),x.isVideoTexture&&u.delete(x)}function O(C){const x=C.target;x.removeEventListener("dispose",O),E(x)}function I(C){const x=i.get(C);if(x.__webglInit===void 0)return;const G=C.source,st=f.get(G);if(st){const mt=st[x.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&M(C),Object.keys(st).length===0&&f.delete(G)}i.remove(C)}function M(C){const x=i.get(C);n.deleteTexture(x.__webglTexture);const G=C.source,st=f.get(G);delete st[x.__cacheKey],o.memory.textures--}function E(C){const x=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(x.__webglFramebuffer[st]))for(let mt=0;mt<x.__webglFramebuffer[st].length;mt++)n.deleteFramebuffer(x.__webglFramebuffer[st][mt]);else n.deleteFramebuffer(x.__webglFramebuffer[st]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[st])}else{if(Array.isArray(x.__webglFramebuffer))for(let st=0;st<x.__webglFramebuffer.length;st++)n.deleteFramebuffer(x.__webglFramebuffer[st]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let st=0;st<x.__webglColorRenderbuffer.length;st++)x.__webglColorRenderbuffer[st]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[st]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=C.textures;for(let st=0,mt=G.length;st<mt;st++){const ut=i.get(G[st]);ut.__webglTexture&&(n.deleteTexture(ut.__webglTexture),o.memory.textures--),i.remove(G[st])}i.remove(C)}let A=0;function at(){A=0}function it(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function dt(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function xt(C,x){const G=i.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){const st=C.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,C,x);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+x)}function W(C,x){const G=i.get(C);if(C.version>0&&G.__version!==C.version){K(G,C,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+x)}function k(C,x){const G=i.get(C);if(C.version>0&&G.__version!==C.version){K(G,C,x);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+x)}function q(C,x){const G=i.get(C);if(C.version>0&&G.__version!==C.version){z(G,C,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+x)}const _t={[uc]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},N={[On]:n.NEAREST,[bb]:n.NEAREST_MIPMAP_NEAREST,[po]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[nl]:n.LINEAR_MIPMAP_NEAREST,[ms]:n.LINEAR_MIPMAP_LINEAR},D={[wb]:n.NEVER,[Lb]:n.ALWAYS,[Tb]:n.LESS,[wp]:n.LEQUAL,[Ab]:n.EQUAL,[Pb]:n.GEQUAL,[Cb]:n.GREATER,[Rb]:n.NOTEQUAL};function ht(C,x){if(x.type===yi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===nl||x.magFilter===po||x.magFilter===ms||x.minFilter===Ln||x.minFilter===nl||x.minFilter===po||x.minFilter===ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,_t[x.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,_t[x.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,_t[x.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,N[x.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,D[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===On||x.minFilter!==po&&x.minFilter!==ms||x.type===yi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Et(C,x){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",F));const st=x.source;let mt=f.get(st);mt===void 0&&(mt={},f.set(st,mt));const ut=dt(x);if(ut!==C.__cacheKey){mt[ut]===void 0&&(mt[ut]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),mt[ut].usedTimes++;const ot=mt[C.__cacheKey];ot!==void 0&&(mt[C.__cacheKey].usedTimes--,ot.usedTimes===0&&M(x)),C.__cacheKey=ut,C.__webglTexture=mt[ut].texture}return G}function K(C,x,G){let st=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(st=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(st=n.TEXTURE_3D);const mt=Et(C,x),ut=x.source;e.bindTexture(st,C.__webglTexture,n.TEXTURE0+G);const ot=i.get(ut);if(ut.version!==ot.__version||mt===!0){e.activeTexture(n.TEXTURE0+G);const T=ie.getPrimaries(ie.workingColorSpace),$=x.colorSpace===ki?null:ie.getPrimaries(x.colorSpace),Tt=x.colorSpace===ki||T===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let rt=_(x.image,!1,s.maxTextureSize);rt=bt(x,rt);const wt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type);let Rt=L(x.internalFormat,wt,Ut,x.colorSpace,x.isVideoTexture);ht(st,x);let St;const Gt=x.mipmaps,$t=x.isVideoTexture!==!0,se=ot.__version===void 0||mt===!0,X=ut.dataReady,Ct=j(x,rt);if(x.isDepthTexture)Rt=S(x.format===cr,x.type),se&&($t?e.texStorage2D(n.TEXTURE_2D,1,Rt,rt.width,rt.height):e.texImage2D(n.TEXTURE_2D,0,Rt,rt.width,rt.height,0,wt,Ut,null));else if(x.isDataTexture)if(Gt.length>0){$t&&se&&e.texStorage2D(n.TEXTURE_2D,Ct,Rt,Gt[0].width,Gt[0].height);for(let vt=0,Mt=Gt.length;vt<Mt;vt++)St=Gt[vt],$t?X&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,wt,Ut,St.data):e.texImage2D(n.TEXTURE_2D,vt,Rt,St.width,St.height,0,wt,Ut,St.data);x.generateMipmaps=!1}else $t?(se&&e.texStorage2D(n.TEXTURE_2D,Ct,Rt,rt.width,rt.height),X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,rt.width,rt.height,wt,Ut,rt.data)):e.texImage2D(n.TEXTURE_2D,0,Rt,rt.width,rt.height,0,wt,Ut,rt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$t&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Rt,Gt[0].width,Gt[0].height,rt.depth);for(let vt=0,Mt=Gt.length;vt<Mt;vt++)if(St=Gt[vt],x.format!==Dn)if(wt!==null)if($t){if(X)if(x.layerUpdates.size>0){const It=wf(St.width,St.height,x.format,x.type);for(const Dt of x.layerUpdates){const Yt=St.data.subarray(Dt*It/St.data.BYTES_PER_ELEMENT,(Dt+1)*It/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,Dt,St.width,St.height,1,wt,Yt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,rt.depth,wt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,vt,Rt,St.width,St.height,rt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?X&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,vt,0,0,0,St.width,St.height,rt.depth,wt,Ut,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,vt,Rt,St.width,St.height,rt.depth,0,wt,Ut,St.data)}else{$t&&se&&e.texStorage2D(n.TEXTURE_2D,Ct,Rt,Gt[0].width,Gt[0].height);for(let vt=0,Mt=Gt.length;vt<Mt;vt++)St=Gt[vt],x.format!==Dn?wt!==null?$t?X&&e.compressedTexSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,vt,Rt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?X&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,St.width,St.height,wt,Ut,St.data):e.texImage2D(n.TEXTURE_2D,vt,Rt,St.width,St.height,0,wt,Ut,St.data)}else if(x.isDataArrayTexture)if($t){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Rt,rt.width,rt.height,rt.depth),X)if(x.layerUpdates.size>0){const vt=wf(rt.width,rt.height,x.format,x.type);for(const Mt of x.layerUpdates){const It=rt.data.subarray(Mt*vt/rt.data.BYTES_PER_ELEMENT,(Mt+1)*vt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,rt.width,rt.height,1,wt,Ut,It)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,wt,Ut,rt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Rt,rt.width,rt.height,rt.depth,0,wt,Ut,rt.data);else if(x.isData3DTexture)$t?(se&&e.texStorage3D(n.TEXTURE_3D,Ct,Rt,rt.width,rt.height,rt.depth),X&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,wt,Ut,rt.data)):e.texImage3D(n.TEXTURE_3D,0,Rt,rt.width,rt.height,rt.depth,0,wt,Ut,rt.data);else if(x.isFramebufferTexture){if(se)if($t)e.texStorage2D(n.TEXTURE_2D,Ct,Rt,rt.width,rt.height);else{let vt=rt.width,Mt=rt.height;for(let It=0;It<Ct;It++)e.texImage2D(n.TEXTURE_2D,It,Rt,vt,Mt,0,wt,Ut,null),vt>>=1,Mt>>=1}}else if(Gt.length>0){if($t&&se){const vt=Q(Gt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Rt,vt.width,vt.height)}for(let vt=0,Mt=Gt.length;vt<Mt;vt++)St=Gt[vt],$t?X&&e.texSubImage2D(n.TEXTURE_2D,vt,0,0,wt,Ut,St):e.texImage2D(n.TEXTURE_2D,vt,Rt,wt,Ut,St);x.generateMipmaps=!1}else if($t){if(se){const vt=Q(rt);e.texStorage2D(n.TEXTURE_2D,Ct,Rt,vt.width,vt.height)}X&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Ut,rt)}else e.texImage2D(n.TEXTURE_2D,0,Rt,wt,Ut,rt);g(x)&&h(st),ot.__version=ut.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function z(C,x,G){if(x.image.length!==6)return;const st=Et(C,x),mt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const ut=i.get(mt);if(mt.version!==ut.__version||st===!0){e.activeTexture(n.TEXTURE0+G);const ot=ie.getPrimaries(ie.workingColorSpace),T=x.colorSpace===ki?null:ie.getPrimaries(x.colorSpace),$=x.colorSpace===ki||ot===T?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);const Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,rt=x.image[0]&&x.image[0].isDataTexture,wt=[];for(let Mt=0;Mt<6;Mt++)!Tt&&!rt?wt[Mt]=_(x.image[Mt],!0,s.maxCubemapSize):wt[Mt]=rt?x.image[Mt].image:x.image[Mt],wt[Mt]=bt(x,wt[Mt]);const Ut=wt[0],Rt=r.convert(x.format,x.colorSpace),St=r.convert(x.type),Gt=L(x.internalFormat,Rt,St,x.colorSpace),$t=x.isVideoTexture!==!0,se=ut.__version===void 0||st===!0,X=mt.dataReady;let Ct=j(x,Ut);ht(n.TEXTURE_CUBE_MAP,x);let vt;if(Tt){$t&&se&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Gt,Ut.width,Ut.height);for(let Mt=0;Mt<6;Mt++){vt=wt[Mt].mipmaps;for(let It=0;It<vt.length;It++){const Dt=vt[It];x.format!==Dn?Rt!==null?$t?X&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It,0,0,Dt.width,Dt.height,Rt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It,Gt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It,0,0,Dt.width,Dt.height,Rt,St,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It,Gt,Dt.width,Dt.height,0,Rt,St,Dt.data)}}}else{if(vt=x.mipmaps,$t&&se){vt.length>0&&Ct++;const Mt=Q(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Gt,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(rt){$t?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,wt[Mt].width,wt[Mt].height,Rt,St,wt[Mt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Gt,wt[Mt].width,wt[Mt].height,0,Rt,St,wt[Mt].data);for(let It=0;It<vt.length;It++){const Yt=vt[It].image[Mt].image;$t?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It+1,0,0,Yt.width,Yt.height,Rt,St,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It+1,Gt,Yt.width,Yt.height,0,Rt,St,Yt.data)}}else{$t?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Rt,St,wt[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Gt,Rt,St,wt[Mt]);for(let It=0;It<vt.length;It++){const Dt=vt[It];$t?X&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It+1,0,0,Rt,St,Dt.image[Mt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,It+1,Gt,Rt,St,Dt.image[Mt])}}}g(x)&&h(n.TEXTURE_CUBE_MAP),ut.__version=mt.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function B(C,x,G,st,mt,ut){const ot=r.convert(G.format,G.colorSpace),T=r.convert(G.type),$=L(G.internalFormat,ot,T,G.colorSpace),Tt=i.get(x),rt=i.get(G);if(rt.__renderTarget=x,!Tt.__hasExternalTextures){const wt=Math.max(1,x.width>>ut),Ut=Math.max(1,x.height>>ut);mt===n.TEXTURE_3D||mt===n.TEXTURE_2D_ARRAY?e.texImage3D(mt,ut,$,wt,Ut,x.depth,0,ot,T,null):e.texImage2D(mt,ut,$,wt,Ut,0,ot,T,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,mt,rt.__webglTexture,0,et(x)):(mt===n.TEXTURE_2D||mt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,st,mt,rt.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function U(C,x,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),x.depthBuffer){const st=x.depthTexture,mt=st&&st.isDepthTexture?st.type:null,ut=S(x.stencilBuffer,mt),ot=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,T=et(x);lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T,ut,x.width,x.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,T,ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,C)}else{const st=x.textures;for(let mt=0;mt<st.length;mt++){const ut=st[mt],ot=r.convert(ut.format,ut.colorSpace),T=r.convert(ut.type),$=L(ut.internalFormat,ot,T,ut.colorSpace),Tt=et(x);G&&lt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Tt,$,x.width,x.height):lt(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Tt,$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function V(C,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const st=i.get(x.depthTexture);st.__renderTarget=x,(!st.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),xt(x.depthTexture,0);const mt=st.__webglTexture,ut=et(x);if(x.depthTexture.format===Qs)lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,mt,0);else if(x.depthTexture.format===cr)lt(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,mt,0);else throw new Error("Unknown depthTexture format")}function Y(C){const x=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const st=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),st){const mt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,st.removeEventListener("dispose",mt)};st.addEventListener("dispose",mt),x.__depthDisposeCallback=mt}x.__boundDepthTexture=st}if(C.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");V(x.__webglFramebuffer,C)}else if(G){x.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[st]),x.__webglDepthbuffer[st]===void 0)x.__webglDepthbuffer[st]=n.createRenderbuffer(),U(x.__webglDepthbuffer[st],C,!1);else{const mt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[st];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,ut)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),U(x.__webglDepthbuffer,C,!1);else{const st=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,mt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(C,x,G){const st=i.get(C);x!==void 0&&B(st.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Y(C)}function y(C){const x=C.texture,G=i.get(C),st=i.get(x);C.addEventListener("dispose",O);const mt=C.textures,ut=C.isWebGLCubeRenderTarget===!0,ot=mt.length>1;if(ot||(st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture()),st.__version=x.version,o.memory.textures++),ut){G.__webglFramebuffer=[];for(let T=0;T<6;T++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[T]=[];for(let $=0;$<x.mipmaps.length;$++)G.__webglFramebuffer[T][$]=n.createFramebuffer()}else G.__webglFramebuffer[T]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let T=0;T<x.mipmaps.length;T++)G.__webglFramebuffer[T]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ot)for(let T=0,$=mt.length;T<$;T++){const Tt=i.get(mt[T]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&lt(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let T=0;T<mt.length;T++){const $=mt[T];G.__webglColorRenderbuffer[T]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[T]);const Tt=r.convert($.format,$.colorSpace),rt=r.convert($.type),wt=L($.internalFormat,Tt,rt,$.colorSpace,C.isXRRenderTarget===!0),Ut=et(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ut,wt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,G.__webglColorRenderbuffer[T])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),U(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),ht(n.TEXTURE_CUBE_MAP,x);for(let T=0;T<6;T++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)B(G.__webglFramebuffer[T][$],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+T,$);else B(G.__webglFramebuffer[T],C,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);g(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let T=0,$=mt.length;T<$;T++){const Tt=mt[T],rt=i.get(Tt);e.bindTexture(n.TEXTURE_2D,rt.__webglTexture),ht(n.TEXTURE_2D,Tt),B(G.__webglFramebuffer,C,Tt,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,0),g(Tt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let T=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(T=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(T,st.__webglTexture),ht(T,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)B(G.__webglFramebuffer[$],C,x,n.COLOR_ATTACHMENT0,T,$);else B(G.__webglFramebuffer,C,x,n.COLOR_ATTACHMENT0,T,0);g(x)&&h(T),e.unbindTexture()}C.depthBuffer&&Y(C)}function R(C){const x=C.textures;for(let G=0,st=x.length;G<st;G++){const mt=x[G];if(g(mt)){const ut=w(C),ot=i.get(mt).__webglTexture;e.bindTexture(ut,ot),h(ut),e.unbindTexture()}}}const H=[],b=[];function nt(C){if(C.samples>0){if(lt(C)===!1){const x=C.textures,G=C.width,st=C.height;let mt=n.COLOR_BUFFER_BIT;const ut=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(C),T=x.length>1;if(T)for(let $=0;$<x.length;$++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let $=0;$<x.length;$++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(mt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(mt|=n.STENCIL_BUFFER_BIT)),T){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[$]);const Tt=i.get(x[$]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Tt,0)}n.blitFramebuffer(0,0,G,st,0,0,G,st,mt,n.NEAREST),l===!0&&(H.length=0,b.length=0,H.push(n.COLOR_ATTACHMENT0+$),C.depthBuffer&&C.resolveDepthBuffer===!1&&(H.push(ut),b.push(ut),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,H))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),T)for(let $=0;$<x.length;$++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,ot.__webglColorRenderbuffer[$]);const Tt=i.get(x[$]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.TEXTURE_2D,Tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function et(C){return Math.min(s.maxSamples,C.samples)}function lt(C){const x=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(C){const x=o.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function bt(C,x){const G=C.colorSpace,st=C.format,mt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==hr&&G!==ki&&(ie.getTransfer(G)===pe?(st!==Dn||mt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Q(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=at,this.setTexture2D=xt,this.setTexture2DArray=W,this.setTexture3D=k,this.setTextureCube=q,this.rebindTextures=ft,this.setupRenderTarget=y,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=B,this.useMultisampledRTT=lt}function Ow(n,t){function e(i,s=ki){let r;const o=ie.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Jr)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===no)return n.HALF_FLOAT;if(i===_p)return n.ALPHA;if(i===vp)return n.RGB;if(i===Dn)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===yp)return n.LUMINANCE_ALPHA;if(i===Qs)return n.DEPTH_COMPONENT;if(i===cr)return n.DEPTH_STENCIL;if(i===bp)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===Yo||i===Ko||i===Zo||i===Jo)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===hc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gc||i===_c)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xc||i===yc||i===bc||i===Mc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Qo)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Nc||i===Oc||i===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===lr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Fw extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class js extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,i),h=this._getHandJoint(c,_);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Vw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zw=`
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

}`;class kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:Vw,fragmentShader:zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new In(new so(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends Ms{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,v=null;const _=new kw,g=e.getContextAttributes();let h=null,w=null;const L=[],S=[],j=new Wt;let F=null;const O=new xn;O.viewport=new Ae;const I=new xn;I.viewport=new Ae;const M=[O,I],E=new Fw;let A=null,at=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let z=L[K];return z===void 0&&(z=new Pl,L[K]=z),z.getTargetRaySpace()},this.getControllerGrip=function(K){let z=L[K];return z===void 0&&(z=new Pl,L[K]=z),z.getGripSpace()},this.getHand=function(K){let z=L[K];return z===void 0&&(z=new Pl,L[K]=z),z.getHandSpace()};function it(K){const z=S.indexOf(K.inputSource);if(z===-1)return;const B=L[z];B!==void 0&&(B.update(K.inputSource,K.frame,c||o),B.dispatchEvent({type:K.type,data:K.inputSource}))}function dt(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",dt),s.removeEventListener("inputsourceschange",xt);for(let K=0;K<L.length;K++){const z=S[K];z!==null&&(S[K]=null,L[K].disconnect(z))}A=null,at=null,_.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,w=null,Et.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(j.width,j.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",dt),s.addEventListener("inputsourceschange",xt),g.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(j),s.renderState.layers===void 0){const z={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,z),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new ys(p.framebufferWidth,p.framebufferHeight,{format:Dn,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let z=null,B=null,U=null;g.depth&&(U=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=g.stencil?cr:Qs,B=g.stencil?lr:xs);const V={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(V),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new ys(f.textureWidth,f.textureHeight,{format:Dn,type:wi,depthTexture:new Bp(f.textureWidth,f.textureHeight,B,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Et.setContext(s),Et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function xt(K){for(let z=0;z<K.removed.length;z++){const B=K.removed[z],U=S.indexOf(B);U>=0&&(S[U]=null,L[U].disconnect(B))}for(let z=0;z<K.added.length;z++){const B=K.added[z];let U=S.indexOf(B);if(U===-1){for(let Y=0;Y<L.length;Y++)if(Y>=S.length){S.push(B),U=Y;break}else if(S[Y]===null){S[Y]=B,U=Y;break}if(U===-1)break}const V=L[U];V&&V.connect(B)}}const W=new tt,k=new tt;function q(K,z,B){W.setFromMatrixPosition(z.matrixWorld),k.setFromMatrixPosition(B.matrixWorld);const U=W.distanceTo(k),V=z.projectionMatrix.elements,Y=B.projectionMatrix.elements,ft=V[14]/(V[10]-1),y=V[14]/(V[10]+1),R=(V[9]+1)/V[5],H=(V[9]-1)/V[5],b=(V[8]-1)/V[0],nt=(Y[8]+1)/Y[0],et=ft*b,lt=ft*nt,ct=U/(-b+nt),bt=ct*-b;if(z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(bt),K.translateZ(ct),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),V[10]===-1)K.projectionMatrix.copy(z.projectionMatrix),K.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const Q=ft+ct,C=y+ct,x=et-bt,G=lt+(U-bt),st=R*y/C*Q,mt=H*y/C*Q;K.projectionMatrix.makePerspective(x,G,st,mt,Q,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function _t(K,z){z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let z=K.near,B=K.far;_.texture!==null&&(_.depthNear>0&&(z=_.depthNear),_.depthFar>0&&(B=_.depthFar)),E.near=I.near=O.near=z,E.far=I.far=O.far=B,(A!==E.near||at!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,at=E.far),O.layers.mask=K.layers.mask|2,I.layers.mask=K.layers.mask|4,E.layers.mask=O.layers.mask|I.layers.mask;const U=K.parent,V=E.cameras;_t(E,U);for(let Y=0;Y<V.length;Y++)_t(V[Y],U);V.length===2?q(E,O,I):E.projectionMatrix.copy(O.projectionMatrix),N(K,E,U)};function N(K,z,B){B===null?K.matrix.copy(z.matrixWorld):(K.matrix.copy(B.matrixWorld),K.matrix.invert(),K.matrix.multiply(z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(z.projectionMatrix),K.projectionMatrixInverse.copy(z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let D=null;function ht(K,z){if(u=z.getViewerPose(c||o),v=z,u!==null){const B=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let U=!1;B.length!==E.cameras.length&&(E.cameras.length=0,U=!0);for(let Y=0;Y<B.length;Y++){const ft=B[Y];let y=null;if(p!==null)y=p.getViewport(ft);else{const H=d.getViewSubImage(f,ft);y=H.viewport,Y===0&&(t.setRenderTargetTextures(w,H.colorTexture,f.ignoreDepthValues?void 0:H.depthStencilTexture),t.setRenderTarget(w))}let R=M[Y];R===void 0&&(R=new xn,R.layers.enable(Y),R.viewport=new Ae,M[Y]=R),R.matrix.fromArray(ft.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ft.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(y.x,y.y,y.width,y.height),Y===0&&(E.matrix.copy(R.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),U===!0&&E.cameras.push(R)}const V=s.enabledFeatures;if(V&&V.includes("depth-sensing")){const Y=d.getDepthInformation(B[0]);Y&&Y.isValid&&Y.texture&&_.init(t,Y,s.renderState)}}for(let B=0;B<L.length;B++){const U=S[B],V=L[B];U!==null&&V!==void 0&&V.update(U,z,c||o)}D&&D(K,z),z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:z}),v=null}const Et=new Op;Et.setAnimationLoop(ht),this.setAnimationLoop=function(K){D=K},this.dispose=function(){}}}const rs=new ei,Gw=new Se;function Ww(n,t){function e(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Ip(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function s(g,h,w,L,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(g,h):h.isMeshToonMaterial?(r(g,h),d(g,h)):h.isMeshPhongMaterial?(r(g,h),u(g,h)):h.isMeshStandardMaterial?(r(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,S)):h.isMeshMatcapMaterial?(r(g,h),v(g,h)):h.isMeshDepthMaterial?r(g,h):h.isMeshDistanceMaterial?(r(g,h),_(g,h)):h.isMeshNormalMaterial?r(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,w,L):h.isSpriteMaterial?c(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,e(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===an&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,e(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===an&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,e(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,e(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const w=t.get(h),L=w.envMap,S=w.envMapRotation;L&&(g.envMap.value=L,rs.copy(S),rs.x*=-1,rs.y*=-1,rs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),g.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(rs)),g.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,w,L){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*w,g.scale.value=L*.5,h.map&&(g.map.value=h.map,e(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,e(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,e(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,w){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,h){h.matcap&&(g.matcap.value=h.matcap)}function _(g,h){const w=t.get(h).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $w(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,L){const S=L.program;i.uniformBlockBinding(w,S)}function c(w,L){let S=s[w.id];S===void 0&&(v(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",g));const j=L.program;i.updateUBOMapping(w,j);const F=t.render.frame;r[w.id]!==F&&(f(w),r[w.id]=F)}function u(w){const L=d();w.__bindingPointIndex=L;const S=n.createBuffer(),j=w.__size,F=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,j,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,L,S),S}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const L=s[w.id],S=w.uniforms,j=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,L);for(let F=0,O=S.length;F<O;F++){const I=Array.isArray(S[F])?S[F]:[S[F]];for(let M=0,E=I.length;M<E;M++){const A=I[M];if(p(A,F,M,j)===!0){const at=A.__offset,it=Array.isArray(A.value)?A.value:[A.value];let dt=0;for(let xt=0;xt<it.length;xt++){const W=it[xt],k=_(W);typeof W=="number"||typeof W=="boolean"?(A.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,at+dt,A.__data)):W.isMatrix3?(A.__data[0]=W.elements[0],A.__data[1]=W.elements[1],A.__data[2]=W.elements[2],A.__data[3]=0,A.__data[4]=W.elements[3],A.__data[5]=W.elements[4],A.__data[6]=W.elements[5],A.__data[7]=0,A.__data[8]=W.elements[6],A.__data[9]=W.elements[7],A.__data[10]=W.elements[8],A.__data[11]=0):(W.toArray(A.__data,dt),dt+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,at,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,L,S,j){const F=w.value,O=L+"_"+S;if(j[O]===void 0)return typeof F=="number"||typeof F=="boolean"?j[O]=F:j[O]=F.clone(),!0;{const I=j[O];if(typeof F=="number"||typeof F=="boolean"){if(I!==F)return j[O]=F,!0}else if(I.equals(F)===!1)return I.copy(F),!0}return!1}function v(w){const L=w.uniforms;let S=0;const j=16;for(let O=0,I=L.length;O<I;O++){const M=Array.isArray(L[O])?L[O]:[L[O]];for(let E=0,A=M.length;E<A;E++){const at=M[E],it=Array.isArray(at.value)?at.value:[at.value];for(let dt=0,xt=it.length;dt<xt;dt++){const W=it[dt],k=_(W),q=S%j,_t=q%k.boundary,N=q+_t;S+=_t,N!==0&&j-N<k.storage&&(S+=j-N),at.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=S,S+=k.storage}}}const F=S%j;return F>0&&(S+=j-F),w.__size=S,w.__cache={},this}function _(w){const L={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(L.boundary=4,L.storage=4):w.isVector2?(L.boundary=8,L.storage=8):w.isVector3||w.isColor?(L.boundary=16,L.storage=12):w.isVector4?(L.boundary=16,L.storage=16):w.isMatrix3?(L.boundary=48,L.storage=48):w.isMatrix4?(L.boundary=64,L.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),L}function g(w){const L=w.target;L.removeEventListener("dispose",g);const S=o.indexOf(L.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[L.id]),delete s[L.id],delete r[L.id]}function h(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Xw{constructor(t={}){const{canvas:e=Ub(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),_=new Int32Array(4);let g=null,h=null;const w=[],L=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Mi,this.toneMappingExposure=1;const S=this;let j=!1,F=0,O=0,I=null,M=-1,E=null;const A=new Ae,at=new Ae;let it=null;const dt=new qt(0);let xt=0,W=e.width,k=e.height,q=1,_t=null,N=null;const D=new Ae(0,0,W,k),ht=new Ae(0,0,W,k);let Et=!1;const K=new xu;let z=!1,B=!1;const U=new Se,V=new Se,Y=new tt,ft=new Ae,y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function H(){return I===null?q:1}let b=i;function nt(P,Z){return e.getContext(P,Z)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${du}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Dt,!1),b===null){const Z="webgl2";if(b=nt(Z,P),b===null)throw nt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let et,lt,ct,bt,Q,C,x,G,st,mt,ut,ot,T,$,Tt,rt,wt,Ut,Rt,St,Gt,$t,se,X;function Ct(){et=new ZS(b),et.init(),$t=new Ow(b,et),lt=new $S(b,et,t,$t),ct=new Iw(b,et),lt.reverseDepthBuffer&&f&&ct.buffers.depth.setReversed(!0),bt=new tE(b),Q=new vw,C=new Nw(b,et,ct,Q,lt,$t,bt),x=new qS(S),G=new KS(S),st=new a1(b),se=new GS(b,st),mt=new JS(b,st,bt,se),ut=new nE(b,mt,st,bt),Rt=new eE(b,lt,C),rt=new XS(Q),ot=new _w(S,x,G,et,lt,se,rt),T=new Ww(S,Q),$=new yw,Tt=new Tw(et),Ut=new HS(S,x,G,ct,ut,p,l),wt=new Lw(S,ut,lt),X=new $w(b,bt,lt,ct),St=new WS(b,et,bt),Gt=new QS(b,et,bt),bt.programs=ot.programs,S.capabilities=lt,S.extensions=et,S.properties=Q,S.renderLists=$,S.shadowMap=wt,S.state=ct,S.info=bt}Ct();const vt=new Hw(S,b);this.xr=vt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const P=et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(P){P!==void 0&&(q=P,this.setSize(W,k,!1))},this.getSize=function(P){return P.set(W,k)},this.setSize=function(P,Z,pt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=P,k=Z,e.width=Math.floor(P*q),e.height=Math.floor(Z*q),pt===!0&&(e.style.width=P+"px",e.style.height=Z+"px"),this.setViewport(0,0,P,Z)},this.getDrawingBufferSize=function(P){return P.set(W*q,k*q).floor()},this.setDrawingBufferSize=function(P,Z,pt){W=P,k=Z,q=pt,e.width=Math.floor(P*pt),e.height=Math.floor(Z*pt),this.setViewport(0,0,P,Z)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(D)},this.setViewport=function(P,Z,pt,gt){P.isVector4?D.set(P.x,P.y,P.z,P.w):D.set(P,Z,pt,gt),ct.viewport(A.copy(D).multiplyScalar(q).round())},this.getScissor=function(P){return P.copy(ht)},this.setScissor=function(P,Z,pt,gt){P.isVector4?ht.set(P.x,P.y,P.z,P.w):ht.set(P,Z,pt,gt),ct.scissor(at.copy(ht).multiplyScalar(q).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(P){ct.setScissorTest(Et=P)},this.setOpaqueSort=function(P){_t=P},this.setTransparentSort=function(P){N=P},this.getClearColor=function(P){return P.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(P=!0,Z=!0,pt=!0){let gt=0;if(P){let J=!1;if(I!==null){const At=I.texture.format;J=At===_u||At===gu||At===mu}if(J){const At=I.texture.type,Nt=At===wi||At===xs||At===Jr||At===lr||At===hu||At===pu,Bt=Ut.getClearColor(),Vt=Ut.getClearAlpha(),Kt=Bt.r,Qt=Bt.g,zt=Bt.b;Nt?(v[0]=Kt,v[1]=Qt,v[2]=zt,v[3]=Vt,b.clearBufferuiv(b.COLOR,0,v)):(_[0]=Kt,_[1]=Qt,_[2]=zt,_[3]=Vt,b.clearBufferiv(b.COLOR,0,_))}else gt|=b.COLOR_BUFFER_BIT}Z&&(gt|=b.DEPTH_BUFFER_BIT),pt&&(gt|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Dt,!1),$.dispose(),Tt.dispose(),Q.dispose(),x.dispose(),G.dispose(),ut.dispose(),se.dispose(),X.dispose(),ot.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Mu),vt.removeEventListener("sessionend",Su),Zi.stop()};function Mt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const P=bt.autoReset,Z=wt.enabled,pt=wt.autoUpdate,gt=wt.needsUpdate,J=wt.type;Ct(),bt.autoReset=P,wt.enabled=Z,wt.autoUpdate=pt,wt.needsUpdate=gt,wt.type=J}function Dt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Yt(P){const Z=P.target;Z.removeEventListener("dispose",Yt),we(Z)}function we(P){ke(P),Q.remove(P)}function ke(P){const Z=Q.get(P).programs;Z!==void 0&&(Z.forEach(function(pt){ot.releaseProgram(pt)}),P.isShaderMaterial&&ot.releaseShaderCache(P))}this.renderBufferDirect=function(P,Z,pt,gt,J,At){Z===null&&(Z=y);const Nt=J.isMesh&&J.matrixWorld.determinant()<0,Bt=Yp(P,Z,pt,gt,J);ct.setMaterial(gt,Nt);let Vt=pt.index,Kt=1;if(gt.wireframe===!0){if(Vt=mt.getWireframeAttribute(pt),Vt===void 0)return;Kt=2}const Qt=pt.drawRange,zt=pt.attributes.position;let re=Qt.start*Kt,ve=(Qt.start+Qt.count)*Kt;At!==null&&(re=Math.max(re,At.start*Kt),ve=Math.min(ve,(At.start+At.count)*Kt)),Vt!==null?(re=Math.max(re,0),ve=Math.min(ve,Vt.count)):zt!=null&&(re=Math.max(re,0),ve=Math.min(ve,zt.count));const ye=ve-re;if(ye<0||ye===1/0)return;se.setup(J,gt,Bt,pt,Vt);let sn,ae=St;if(Vt!==null&&(sn=st.get(Vt),ae=Gt,ae.setIndex(sn)),J.isMesh)gt.wireframe===!0?(ct.setLineWidth(gt.wireframeLinewidth*H()),ae.setMode(b.LINES)):ae.setMode(b.TRIANGLES);else if(J.isLine){let kt=gt.linewidth;kt===void 0&&(kt=1),ct.setLineWidth(kt*H()),J.isLineSegments?ae.setMode(b.LINES):J.isLineLoop?ae.setMode(b.LINE_LOOP):ae.setMode(b.LINE_STRIP)}else J.isPoints?ae.setMode(b.POINTS):J.isSprite&&ae.setMode(b.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)ae.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ae.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const kt=J._multiDrawStarts,ii=J._multiDrawCounts,le=J._multiDrawCount,Tn=Vt?st.get(Vt).bytesPerElement:1,Es=Q.get(gt).currentProgram.getUniforms();for(let ln=0;ln<le;ln++)Es.setValue(b,"_gl_DrawID",ln),ae.render(kt[ln]/Tn,ii[ln])}else if(J.isInstancedMesh)ae.renderInstances(re,ye,J.count);else if(pt.isInstancedBufferGeometry){const kt=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,ii=Math.min(pt.instanceCount,kt);ae.renderInstances(re,ye,ii)}else ae.render(re,ye)};function fe(P,Z,pt){P.transparent===!0&&P.side===vi&&P.forceSinglePass===!1?(P.side=an,P.needsUpdate=!0,oo(P,Z,pt),P.side=ji,P.needsUpdate=!0,oo(P,Z,pt),P.side=vi):oo(P,Z,pt)}this.compile=function(P,Z,pt=null){pt===null&&(pt=P),h=Tt.get(pt),h.init(Z),L.push(h),pt.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),P!==pt&&P.traverseVisible(function(J){J.isLight&&J.layers.test(Z.layers)&&(h.pushLight(J),J.castShadow&&h.pushShadow(J))}),h.setupLights();const gt=new Set;return P.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const At=J.material;if(At)if(Array.isArray(At))for(let Nt=0;Nt<At.length;Nt++){const Bt=At[Nt];fe(Bt,pt,J),gt.add(Bt)}else fe(At,pt,J),gt.add(At)}),L.pop(),h=null,gt},this.compileAsync=function(P,Z,pt=null){const gt=this.compile(P,Z,pt);return new Promise(J=>{function At(){if(gt.forEach(function(Nt){Q.get(Nt).currentProgram.isReady()&&gt.delete(Nt)}),gt.size===0){J(P);return}setTimeout(At,10)}et.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let wn=null;function ni(P){wn&&wn(P)}function Mu(){Zi.stop()}function Su(){Zi.start()}const Zi=new Op;Zi.setAnimationLoop(ni),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(P){wn=P,vt.setAnimationLoop(P),P===null?Zi.stop():Zi.start()},vt.addEventListener("sessionstart",Mu),vt.addEventListener("sessionend",Su),this.render=function(P,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(Z),Z=vt.getCamera()),P.isScene===!0&&P.onBeforeRender(S,P,Z,I),h=Tt.get(P,L.length),h.init(Z),L.push(h),V.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),K.setFromProjectionMatrix(V),B=this.localClippingEnabled,z=rt.init(this.clippingPlanes,B),g=$.get(P,w.length),g.init(),w.push(g),vt.enabled===!0&&vt.isPresenting===!0){const At=S.xr.getDepthSensingMesh();At!==null&&Va(At,Z,-1/0,S.sortObjects)}Va(P,Z,0,S.sortObjects),g.finish(),S.sortObjects===!0&&g.sort(_t,N),R=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,R&&Ut.addToRenderList(g,P),this.info.render.frame++,z===!0&&rt.beginShadows();const pt=h.state.shadowsArray;wt.render(pt,P,Z),z===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=g.opaque,J=g.transmissive;if(h.setupLights(),Z.isArrayCamera){const At=Z.cameras;if(J.length>0)for(let Nt=0,Bt=At.length;Nt<Bt;Nt++){const Vt=At[Nt];wu(gt,J,P,Vt)}R&&Ut.render(P);for(let Nt=0,Bt=At.length;Nt<Bt;Nt++){const Vt=At[Nt];Eu(g,P,Vt,Vt.viewport)}}else J.length>0&&wu(gt,J,P,Z),R&&Ut.render(P),Eu(g,P,Z);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(S,P,Z),se.resetDefaultState(),M=-1,E=null,L.pop(),L.length>0?(h=L[L.length-1],z===!0&&rt.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Va(P,Z,pt,gt){if(P.visible===!1)return;if(P.layers.test(Z.layers)){if(P.isGroup)pt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Z);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||K.intersectsSprite(P)){gt&&ft.setFromMatrixPosition(P.matrixWorld).applyMatrix4(V);const Nt=ut.update(P),Bt=P.material;Bt.visible&&g.push(P,Nt,Bt,pt,ft.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||K.intersectsObject(P))){const Nt=ut.update(P),Bt=P.material;if(gt&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ft.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ft.copy(Nt.boundingSphere.center)),ft.applyMatrix4(P.matrixWorld).applyMatrix4(V)),Array.isArray(Bt)){const Vt=Nt.groups;for(let Kt=0,Qt=Vt.length;Kt<Qt;Kt++){const zt=Vt[Kt],re=Bt[zt.materialIndex];re&&re.visible&&g.push(P,Nt,re,pt,ft.z,zt)}}else Bt.visible&&g.push(P,Nt,Bt,pt,ft.z,null)}}const At=P.children;for(let Nt=0,Bt=At.length;Nt<Bt;Nt++)Va(At[Nt],Z,pt,gt)}function Eu(P,Z,pt,gt){const J=P.opaque,At=P.transmissive,Nt=P.transparent;h.setupLightsView(pt),z===!0&&rt.setGlobalState(S.clippingPlanes,pt),gt&&ct.viewport(A.copy(gt)),J.length>0&&ro(J,Z,pt),At.length>0&&ro(At,Z,pt),Nt.length>0&&ro(Nt,Z,pt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function wu(P,Z,pt,gt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[gt.id]===void 0&&(h.state.transmissionRenderTarget[gt.id]=new ys(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?no:wi,minFilter:ms,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const At=h.state.transmissionRenderTarget[gt.id],Nt=gt.viewport||A;At.setSize(Nt.z,Nt.w);const Bt=S.getRenderTarget();S.setRenderTarget(At),S.getClearColor(dt),xt=S.getClearAlpha(),xt<1&&S.setClearColor(16777215,.5),S.clear(),R&&Ut.render(pt);const Vt=S.toneMapping;S.toneMapping=Mi;const Kt=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),h.setupLightsView(gt),z===!0&&rt.setGlobalState(S.clippingPlanes,gt),ro(P,pt,gt),C.updateMultisampleRenderTarget(At),C.updateRenderTargetMipmap(At),et.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let zt=0,re=Z.length;zt<re;zt++){const ve=Z[zt],ye=ve.object,sn=ve.geometry,ae=ve.material,kt=ve.group;if(ae.side===vi&&ye.layers.test(gt.layers)){const ii=ae.side;ae.side=an,ae.needsUpdate=!0,Tu(ye,pt,gt,sn,ae,kt),ae.side=ii,ae.needsUpdate=!0,Qt=!0}}Qt===!0&&(C.updateMultisampleRenderTarget(At),C.updateRenderTargetMipmap(At))}S.setRenderTarget(Bt),S.setClearColor(dt,xt),Kt!==void 0&&(gt.viewport=Kt),S.toneMapping=Vt}function ro(P,Z,pt){const gt=Z.isScene===!0?Z.overrideMaterial:null;for(let J=0,At=P.length;J<At;J++){const Nt=P[J],Bt=Nt.object,Vt=Nt.geometry,Kt=gt===null?Nt.material:gt,Qt=Nt.group;Bt.layers.test(pt.layers)&&Tu(Bt,Z,pt,Vt,Kt,Qt)}}function Tu(P,Z,pt,gt,J,At){P.onBeforeRender(S,Z,pt,gt,J,At),P.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),J.onBeforeRender(S,Z,pt,gt,P,At),J.transparent===!0&&J.side===vi&&J.forceSinglePass===!1?(J.side=an,J.needsUpdate=!0,S.renderBufferDirect(pt,Z,gt,J,P,At),J.side=ji,J.needsUpdate=!0,S.renderBufferDirect(pt,Z,gt,J,P,At),J.side=vi):S.renderBufferDirect(pt,Z,gt,J,P,At),P.onAfterRender(S,Z,pt,gt,J,At)}function oo(P,Z,pt){Z.isScene!==!0&&(Z=y);const gt=Q.get(P),J=h.state.lights,At=h.state.shadowsArray,Nt=J.state.version,Bt=ot.getParameters(P,J.state,At,Z,pt),Vt=ot.getProgramCacheKey(Bt);let Kt=gt.programs;gt.environment=P.isMeshStandardMaterial?Z.environment:null,gt.fog=Z.fog,gt.envMap=(P.isMeshStandardMaterial?G:x).get(P.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&P.envMap===null?Z.environmentRotation:P.envMapRotation,Kt===void 0&&(P.addEventListener("dispose",Yt),Kt=new Map,gt.programs=Kt);let Qt=Kt.get(Vt);if(Qt!==void 0){if(gt.currentProgram===Qt&&gt.lightsStateVersion===Nt)return Cu(P,Bt),Qt}else Bt.uniforms=ot.getUniforms(P),P.onBeforeCompile(Bt,S),Qt=ot.acquireProgram(Bt,Vt),Kt.set(Vt,Qt),gt.uniforms=Bt.uniforms;const zt=gt.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(zt.clippingPlanes=rt.uniform),Cu(P,Bt),gt.needsLights=Zp(P),gt.lightsStateVersion=Nt,gt.needsLights&&(zt.ambientLightColor.value=J.state.ambient,zt.lightProbe.value=J.state.probe,zt.directionalLights.value=J.state.directional,zt.directionalLightShadows.value=J.state.directionalShadow,zt.spotLights.value=J.state.spot,zt.spotLightShadows.value=J.state.spotShadow,zt.rectAreaLights.value=J.state.rectArea,zt.ltc_1.value=J.state.rectAreaLTC1,zt.ltc_2.value=J.state.rectAreaLTC2,zt.pointLights.value=J.state.point,zt.pointLightShadows.value=J.state.pointShadow,zt.hemisphereLights.value=J.state.hemi,zt.directionalShadowMap.value=J.state.directionalShadowMap,zt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,zt.spotShadowMap.value=J.state.spotShadowMap,zt.spotLightMatrix.value=J.state.spotLightMatrix,zt.spotLightMap.value=J.state.spotLightMap,zt.pointShadowMap.value=J.state.pointShadowMap,zt.pointShadowMatrix.value=J.state.pointShadowMatrix),gt.currentProgram=Qt,gt.uniformsList=null,Qt}function Au(P){if(P.uniformsList===null){const Z=P.currentProgram.getUniforms();P.uniformsList=ta.seqWithValue(Z.seq,P.uniforms)}return P.uniformsList}function Cu(P,Z){const pt=Q.get(P);pt.outputColorSpace=Z.outputColorSpace,pt.batching=Z.batching,pt.batchingColor=Z.batchingColor,pt.instancing=Z.instancing,pt.instancingColor=Z.instancingColor,pt.instancingMorph=Z.instancingMorph,pt.skinning=Z.skinning,pt.morphTargets=Z.morphTargets,pt.morphNormals=Z.morphNormals,pt.morphColors=Z.morphColors,pt.morphTargetsCount=Z.morphTargetsCount,pt.numClippingPlanes=Z.numClippingPlanes,pt.numIntersection=Z.numClipIntersection,pt.vertexAlphas=Z.vertexAlphas,pt.vertexTangents=Z.vertexTangents,pt.toneMapping=Z.toneMapping}function Yp(P,Z,pt,gt,J){Z.isScene!==!0&&(Z=y),C.resetTextureUnits();const At=Z.fog,Nt=gt.isMeshStandardMaterial?Z.environment:null,Bt=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:hr,Vt=(gt.isMeshStandardMaterial?G:x).get(gt.envMap||Nt),Kt=gt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,Qt=!!pt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),zt=!!pt.morphAttributes.position,re=!!pt.morphAttributes.normal,ve=!!pt.morphAttributes.color;let ye=Mi;gt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ye=S.toneMapping);const sn=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,ae=sn!==void 0?sn.length:0,kt=Q.get(gt),ii=h.state.lights;if(z===!0&&(B===!0||P!==E)){const gn=P===E&&gt.id===M;rt.setState(gt,P,gn)}let le=!1;gt.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==ii.state.version||kt.outputColorSpace!==Bt||J.isBatchedMesh&&kt.batching===!1||!J.isBatchedMesh&&kt.batching===!0||J.isBatchedMesh&&kt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&kt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&kt.instancing===!1||!J.isInstancedMesh&&kt.instancing===!0||J.isSkinnedMesh&&kt.skinning===!1||!J.isSkinnedMesh&&kt.skinning===!0||J.isInstancedMesh&&kt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&kt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&kt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&kt.instancingMorph===!1&&J.morphTexture!==null||kt.envMap!==Vt||gt.fog===!0&&kt.fog!==At||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==rt.numPlanes||kt.numIntersection!==rt.numIntersection)||kt.vertexAlphas!==Kt||kt.vertexTangents!==Qt||kt.morphTargets!==zt||kt.morphNormals!==re||kt.morphColors!==ve||kt.toneMapping!==ye||kt.morphTargetsCount!==ae)&&(le=!0):(le=!0,kt.__version=gt.version);let Tn=kt.currentProgram;le===!0&&(Tn=oo(gt,Z,J));let Es=!1,ln=!1,gr=!1;const be=Tn.getUniforms(),Hn=kt.uniforms;if(ct.useProgram(Tn.program)&&(Es=!0,ln=!0,gr=!0),gt.id!==M&&(M=gt.id,ln=!0),Es||E!==P){ct.buffers.depth.getReversed()?(U.copy(P.projectionMatrix),Ob(U),Fb(U),be.setValue(b,"projectionMatrix",U)):be.setValue(b,"projectionMatrix",P.projectionMatrix),be.setValue(b,"viewMatrix",P.matrixWorldInverse);const Ci=be.map.cameraPosition;Ci!==void 0&&Ci.setValue(b,Y.setFromMatrixPosition(P.matrixWorld)),lt.logarithmicDepthBuffer&&be.setValue(b,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&be.setValue(b,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,ln=!0,gr=!0)}if(J.isSkinnedMesh){be.setOptional(b,J,"bindMatrix"),be.setOptional(b,J,"bindMatrixInverse");const gn=J.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),be.setValue(b,"boneTexture",gn.boneTexture,C))}J.isBatchedMesh&&(be.setOptional(b,J,"batchingTexture"),be.setValue(b,"batchingTexture",J._matricesTexture,C),be.setOptional(b,J,"batchingIdTexture"),be.setValue(b,"batchingIdTexture",J._indirectTexture,C),be.setOptional(b,J,"batchingColorTexture"),J._colorsTexture!==null&&be.setValue(b,"batchingColorTexture",J._colorsTexture,C));const _r=pt.morphAttributes;if((_r.position!==void 0||_r.normal!==void 0||_r.color!==void 0)&&Rt.update(J,pt,Tn),(ln||kt.receiveShadow!==J.receiveShadow)&&(kt.receiveShadow=J.receiveShadow,be.setValue(b,"receiveShadow",J.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Hn.envMap.value=Vt,Hn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&Z.environment!==null&&(Hn.envMapIntensity.value=Z.environmentIntensity),ln&&(be.setValue(b,"toneMappingExposure",S.toneMappingExposure),kt.needsLights&&Kp(Hn,gr),At&&gt.fog===!0&&T.refreshFogUniforms(Hn,At),T.refreshMaterialUniforms(Hn,gt,q,k,h.state.transmissionRenderTarget[P.id]),ta.upload(b,Au(kt),Hn,C)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(ta.upload(b,Au(kt),Hn,C),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&be.setValue(b,"center",J.center),be.setValue(b,"modelViewMatrix",J.modelViewMatrix),be.setValue(b,"normalMatrix",J.normalMatrix),be.setValue(b,"modelMatrix",J.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const gn=gt.uniformsGroups;for(let Ci=0,Ri=gn.length;Ci<Ri;Ci++){const Ru=gn[Ci];X.update(Ru,Tn),X.bind(Ru,Tn)}}return Tn}function Kp(P,Z){P.ambientLightColor.needsUpdate=Z,P.lightProbe.needsUpdate=Z,P.directionalLights.needsUpdate=Z,P.directionalLightShadows.needsUpdate=Z,P.pointLights.needsUpdate=Z,P.pointLightShadows.needsUpdate=Z,P.spotLights.needsUpdate=Z,P.spotLightShadows.needsUpdate=Z,P.rectAreaLights.needsUpdate=Z,P.hemisphereLights.needsUpdate=Z}function Zp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,Z,pt){Q.get(P.texture).__webglTexture=Z,Q.get(P.depthTexture).__webglTexture=pt;const gt=Q.get(P);gt.__hasExternalTextures=!0,gt.__autoAllocateDepthBuffer=pt===void 0,gt.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),gt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,Z){const pt=Q.get(P);pt.__webglFramebuffer=Z,pt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(P,Z=0,pt=0){I=P,F=Z,O=pt;let gt=!0,J=null,At=!1,Nt=!1;if(P){const Vt=Q.get(P);if(Vt.__useDefaultFramebuffer!==void 0)ct.bindFramebuffer(b.FRAMEBUFFER,null),gt=!1;else if(Vt.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(Vt.__hasExternalTextures)C.rebindTextures(P,Q.get(P.texture).__webglTexture,Q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const zt=P.depthTexture;if(Vt.__boundDepthTexture!==zt){if(zt!==null&&Q.has(zt)&&(P.width!==zt.image.width||P.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Nt=!0);const Qt=Q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Qt[Z])?J=Qt[Z][pt]:J=Qt[Z],At=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?J=Q.get(P).__webglMultisampledFramebuffer:Array.isArray(Qt)?J=Qt[pt]:J=Qt,A.copy(P.viewport),at.copy(P.scissor),it=P.scissorTest}else A.copy(D).multiplyScalar(q).floor(),at.copy(ht).multiplyScalar(q).floor(),it=Et;if(ct.bindFramebuffer(b.FRAMEBUFFER,J)&&gt&&ct.drawBuffers(P,J),ct.viewport(A),ct.scissor(at),ct.setScissorTest(it),At){const Vt=Q.get(P.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Vt.__webglTexture,pt)}else if(Nt){const Vt=Q.get(P.texture),Kt=Z||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Vt.__webglTexture,pt||0,Kt)}M=-1},this.readRenderTargetPixels=function(P,Z,pt,gt,J,At,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){ct.bindFramebuffer(b.FRAMEBUFFER,Bt);try{const Vt=P.texture,Kt=Vt.format,Qt=Vt.type;if(!lt.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=P.width-gt&&pt>=0&&pt<=P.height-J&&b.readPixels(Z,pt,gt,J,$t.convert(Kt),$t.convert(Qt),At)}finally{const Vt=I!==null?Q.get(I).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(P,Z,pt,gt,J,At,Nt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){const Vt=P.texture,Kt=Vt.format,Qt=Vt.type;if(!lt.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Z>=0&&Z<=P.width-gt&&pt>=0&&pt<=P.height-J){ct.bindFramebuffer(b.FRAMEBUFFER,Bt);const zt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels(Z,pt,gt,J,$t.convert(Kt),$t.convert(Qt),0);const re=I!==null?Q.get(I).__webglFramebuffer:null;ct.bindFramebuffer(b.FRAMEBUFFER,re);const ve=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Nb(b,ve,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(zt),b.deleteSync(ve),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,Z=null,pt=0){P.isTexture!==!0&&(Dr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Z=arguments[0]||null,P=arguments[1]);const gt=Math.pow(2,-pt),J=Math.floor(P.image.width*gt),At=Math.floor(P.image.height*gt),Nt=Z!==null?Z.x:0,Bt=Z!==null?Z.y:0;C.setTexture2D(P,0),b.copyTexSubImage2D(b.TEXTURE_2D,pt,0,0,Nt,Bt,J,At),ct.unbindTexture()},this.copyTextureToTexture=function(P,Z,pt=null,gt=null,J=0){P.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture function signature has changed."),gt=arguments[0]||null,P=arguments[1],Z=arguments[2],J=arguments[3]||0,pt=null);let At,Nt,Bt,Vt,Kt,Qt,zt,re,ve;const ye=P.isCompressedTexture?P.mipmaps[J]:P.image;pt!==null?(At=pt.max.x-pt.min.x,Nt=pt.max.y-pt.min.y,Bt=pt.isBox3?pt.max.z-pt.min.z:1,Vt=pt.min.x,Kt=pt.min.y,Qt=pt.isBox3?pt.min.z:0):(At=ye.width,Nt=ye.height,Bt=ye.depth||1,Vt=0,Kt=0,Qt=0),gt!==null?(zt=gt.x,re=gt.y,ve=gt.z):(zt=0,re=0,ve=0);const sn=$t.convert(Z.format),ae=$t.convert(Z.type);let kt;Z.isData3DTexture?(C.setTexture3D(Z,0),kt=b.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(C.setTexture2DArray(Z,0),kt=b.TEXTURE_2D_ARRAY):(C.setTexture2D(Z,0),kt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment);const ii=b.getParameter(b.UNPACK_ROW_LENGTH),le=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Tn=b.getParameter(b.UNPACK_SKIP_PIXELS),Es=b.getParameter(b.UNPACK_SKIP_ROWS),ln=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ye.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ye.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Vt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Kt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Qt);const gr=P.isDataArrayTexture||P.isData3DTexture,be=Z.isDataArrayTexture||Z.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Hn=Q.get(P),_r=Q.get(Z),gn=Q.get(Hn.__renderTarget),Ci=Q.get(_r.__renderTarget);ct.bindFramebuffer(b.READ_FRAMEBUFFER,gn.__webglFramebuffer),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<Bt;Ri++)gr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(P).__webglTexture,J,Qt+Ri),P.isDepthTexture?(be&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Q.get(Z).__webglTexture,J,ve+Ri),b.blitFramebuffer(Vt,Kt,At,Nt,zt,re,At,Nt,b.DEPTH_BUFFER_BIT,b.NEAREST)):be?b.copyTexSubImage3D(kt,J,zt,re,ve+Ri,Vt,Kt,At,Nt):b.copyTexSubImage2D(kt,J,zt,re,ve+Ri,Vt,Kt,At,Nt);ct.bindFramebuffer(b.READ_FRAMEBUFFER,null),ct.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else be?P.isDataTexture||P.isData3DTexture?b.texSubImage3D(kt,J,zt,re,ve,At,Nt,Bt,sn,ae,ye.data):Z.isCompressedArrayTexture?b.compressedTexSubImage3D(kt,J,zt,re,ve,At,Nt,Bt,sn,ye.data):b.texSubImage3D(kt,J,zt,re,ve,At,Nt,Bt,sn,ae,ye):P.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,zt,re,At,Nt,sn,ae,ye.data):P.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,zt,re,ye.width,ye.height,sn,ye.data):b.texSubImage2D(b.TEXTURE_2D,J,zt,re,At,Nt,sn,ae,ye);b.pixelStorei(b.UNPACK_ROW_LENGTH,ii),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,le),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Tn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Es),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ln),J===0&&Z.generateMipmaps&&b.generateMipmap(kt),ct.unbindTexture()},this.copyTextureToTexture3D=function(P,Z,pt=null,gt=null,J=0){return P.isTexture!==!0&&(Dr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),pt=arguments[0]||null,gt=arguments[1]||null,P=arguments[2],Z=arguments[3],J=arguments[4]||0),Dr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,Z,pt,gt,J)},this.initRenderTarget=function(P){Q.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),ct.unbindTexture()},this.resetState=function(){F=0,O=0,I=null,ct.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class qw extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=$i()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$i()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new tt;class pa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=me(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),i=me(i,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gp extends Ss{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const Tr=new tt,ks=new tt,Hs=new tt,Gs=new Wt,Ar=new Wt,Wp=new Se,No=new tt,Cr=new tt,Oo=new tt,Tf=new Wt,Ll=new Wt,Af=new Wt;class Yw extends Be{constructor(t=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new tn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jw(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new pa(i,3,0,!1)),zs.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=zs,this.material=t,this.center=new Wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Hs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Fo(No.set(-.5,-.5,0),Hs,o,ks,s,r),Fo(Cr.set(.5,-.5,0),Hs,o,ks,s,r),Fo(Oo.set(.5,.5,0),Hs,o,ks,s,r),Tf.set(0,0),Ll.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(No,Cr,Oo,!1,Tr);if(a===null&&(Fo(Cr.set(-.5,.5,0),Hs,o,ks,s,r),Ll.set(0,1),a=t.ray.intersectTriangle(No,Oo,Cr,!1,Tr),a===null))return;const l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:fn.getInterpolation(Tr,No,Cr,Oo,Tf,Ll,Af,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fo(n,t,e,i,s,r){Gs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ar.x=r*Gs.x-s*Gs.y,Ar.y=s*Gs.x+r*Gs.y):Ar.copy(Gs),n.copy(t),n.x+=Ar.x,n.y+=Ar.y,n.applyMatrix4(Wp)}class ma extends Ss{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new tt,_a=new tt,Cf=new Se,Rr=new Fa,Bo=new Oa,Dl=new tt,Rf=new tt;class Ur extends Be{constructor(t=new tn,e=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,t.ray.intersectsSphere(Bo)===!1)return;Cf.copy(s).invert(),Rr.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=u.getX(_),w=u.getX(_+1),L=Vo(this,t,Rr,l,h,w);L&&e.push(L)}if(this.isLineLoop){const _=u.getX(v-1),g=u.getX(p),h=Vo(this,t,Rr,l,_,g);h&&e.push(h)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=p,g=v-1;_<g;_+=c){const h=Vo(this,t,Rr,l,_,_+1);h&&e.push(h)}if(this.isLineLoop){const _=Vo(this,t,Rr,l,v-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Vo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,_a,Dl,Rf)>i)return;Dl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Dl);if(!(l<t.near||l>t.far))return{distance:l,point:Rf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pf=new tt,Lf=new tt;class $p extends Ur{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kw extends nn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zo=new tt,ko=new tt,Il=new tt,Ho=new fn;class Zw extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Hr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:g,c:h}=Ho;if(_.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Ho.getNormal(Il),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){const L=(w+1)%3,S=d[w],j=d[L],F=Ho[u[w]],O=Ho[u[L]],I=`${S}_${j}`,M=`${j}_${S}`;M in f&&f[M]?(Il.dot(f[M].normal)<=r&&(p.push(F.x,F.y,F.z),p.push(O.x,O.y,O.z)),f[M]=null):I in f||(f[I]={index0:c[w],index1:c[L],normal:Il.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:g}=f[v];zo.fromBufferAttribute(a,_),ko.fromBufferAttribute(a,g),p.push(zo.x,zo.y,zo.z),p.push(ko.x,ko.y,ko.z)}this.setAttribute("position",new Mn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Df extends Ss{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ul=new Se,If=new tt,Uf=new tt;class Jw{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xu,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qw extends Jw{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nl extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Qw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tT extends Xp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nf=new Se;class eT{constructor(t,e,i=0,s=1/0){this.ray=new Fa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,i=[]){return kc(t,this,i,e),i.sort(Of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)kc(t[s],this,i,e);return i.sort(Of),i}}function Of(n,t){return n.distance-t.distance}function kc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],t,e,!0)}}class Ff{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nT extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new qt(i),s=new qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,v=-a;f<=e;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===r?i:s;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const u=new tn;u.setAttribute("position",new Mn(l,3)),u.setAttribute("color",new Mn(c,3));const d=new ma({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iT extends Ms{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);const Bf={type:"change"},bu={type:"start"},qp={type:"end"},Go=new Fa,Vf=new zi,sT=Math.cos(70*Ib.DEG2RAD),Le=new tt,rn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6;class rT extends iT{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:Xs.ROTATE,TWO:Xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new bs,this._lastTargetPosition=new tt,this._quat=new bs().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new tt,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new tt,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aT.bind(this),this._onPointerDown=oT.bind(this),this._onPointerUp=lT.bind(this),this._onContextMenu=mT.bind(this),this._onMouseWheel=dT.bind(this),this._onKeyDown=fT.bind(this),this._onTouchStart=hT.bind(this),this._onTouchMove=pT.bind(this),this._onMouseDown=cT.bind(this),this._onMouseMove=uT.bind(this),this._interceptControlDown=gT.bind(this),this._interceptControlUp=_T.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Le.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new tt(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new tt(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Go.origin.copy(this.object.position),Go.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Go.direction))<sT?this.object.lookAt(this.target):(Vf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Go.intersectPlane(Vf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function aT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qp),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ge.DOLLY;break;case Zs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ge.ROTATE}break;case Zs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(bu)}function uT(n){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dT(n){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(qp))}function fT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function hT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ge.TOUCH_ROTATE;break;case Xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case Xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ge.TOUCH_DOLLY_PAN;break;case Xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(bu)}function pT(n){switch(this._trackPointer(n),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ge.NONE}}function mT(n){this.enabled!==!1&&n.preventDefault()}function gT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _T(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},xT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},yT={style:{display:"flex","align-items":"center",gap:"8px"}},bT={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},MT={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},ST={style:{color:"#00d2ff","font-weight":"bold"}},ET={style:{color:"#ecc94b"}},wT={style:{color:"#e2e8f0"}},TT={style:{color:"#e2e8f0"}},AT={style:{color:"#63b3ed"}},CT={style:{color:"#e2e8f0"}},RT={style:{color:"#e2e8f0"}},PT={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},LT={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},DT={style:{display:"flex","align-items":"center",gap:"6px"}},IT={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},UT={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},NT={style:{color:"#48bb78"}},OT={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},FT={style:{color:"#ecc94b"}},BT={style:{color:"#63b3ed"}},VT=Ti({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=jt(null),i=jt(null),s=jt("current"),r=jt({visible:!1,x:0,y:0}),o=Fe(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(W){s.value=W,M()}let l,c,u,d,f,p,v,_=[],g=null,h=new js,w=new js,L=null;function S(W){const _t=Math.max(0,Math.min(1,(W-65)/31)),N=new qt;return _t<.25?N.lerpColors(new qt(16007006),new qt(16347926),_t/.25):_t<.5?N.lerpColors(new qt(16347926),new qt(15381256),(_t-.25)/.25):_t<.75?N.lerpColors(new qt(15381256),new qt(1096065),(_t-.5)/.25):_t<.9?N.lerpColors(new qt(1096065),new qt(440020),(_t-.75)/.15):N.lerpColors(new qt(440020),new qt(9133302),(_t-.9)/.1),N}function j(W,k=24,q="#94a3b8"){const _t=document.createElement("canvas");_t.width=512,_t.height=128;const N=_t.getContext("2d");N.fillStyle="transparent",N.fillRect(0,0,_t.width,_t.height),N.font=`bold ${k*2}px "Fira Code", monospace`,N.fillStyle=q,N.textAlign="center",N.textBaseline="middle",N.fillText(W,_t.width/2,_t.height/2);const D=new Kw(_t);D.minFilter=Ln;const ht=new Gp({map:D,transparent:!0,depthWrite:!1}),Et=new Yw(ht);return Et.scale.set(4,1,1),Et}function F(){if(!c||!d||!e.value)return;const W=e.value.clientWidth||800,k=e.value.clientHeight||600;if(W===0||k===0)return;c.aspect=W/k,c.updateProjectionMatrix();const q=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(C=>C.voltageTarget))]:[12],_t=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(C=>C.loadTarget))]:[1],N=Math.max(1,q.length),D=Math.max(1,_t.length),ht=Math.max(18,Math.min(65,N*2.2)),Et=Math.max(18,Math.min(65,D*2.2)),K=12,z=ht+8,B=Et+8,U=K+4,V=c.fov*Math.PI/180,Y=Math.max(.1,c.aspect),ft=(z+B)*.72,R=(U*1.1+(z+B)*.35)/(2*Math.tan(V/2)*.74),H=ft/(2*Math.tan(V/2)*Y*.74),b=Math.max(R,H,22),nt=.56,et=Math.PI/4,lt=K*.38,ct=b*Math.cos(nt)*Math.sin(et),bt=lt+b*Math.sin(nt),Q=b*Math.cos(nt)*Math.cos(et);c.position.set(ct,bt,Q),c.near=.5,c.far=Math.max(3e3,b*25),c.updateProjectionMatrix(),d.target.set(0,lt,0),d.minDistance=Math.max(5,b*.15),d.maxDistance=Math.max(120,b*6),d.update()}function O(){F()}function I(){if(!e.value)return;const W=e.value.clientWidth||800,k=e.value.clientHeight||600;l=new qw,l.background=new qt(461588),l.fog=null,c=new xn(45,W/k,.5,3e3),u=new Xw({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(W,k),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=Mi,e.value.appendChild(u.domElement),d=new rT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const q=new tT(16777215,.88);l.add(q);const _t=new Nl(16777215,.45);_t.position.set(40,60,40),l.add(_t);const N=new Nl(16777215,.35);N.position.set(-40,50,-40),l.add(N);const D=new Nl(16777215,.25);D.position.set(0,40,-50),l.add(D),p=new eT,v=new Wt(-999,-999),l.add(h),l.add(w),L=new ResizeObserver(()=>{xt()}),L.observe(e.value),window.addEventListener("resize",xt),e.value.addEventListener("mousemove",E),e.value.addEventListener("mouseleave",A),M(),F(),dt()}function M(){if(!l)return;for(;h.children.length>0;){const $=h.children[0];h.remove($)}for(;w.children.length>0;){const $=w.children[0];w.remove($)}_=[],g=null,i.value=null,r.value.visible=!1;const W=t.points;if(!W||W.length===0)return;const k=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort(($,Tt)=>$-Tt):[...new Set(W.map($=>$.voltageTarget))].sort(($,Tt)=>$-Tt),q=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort(($,Tt)=>$-Tt):[...new Set(W.map($=>$.loadTarget))].sort(($,Tt)=>$-Tt),_t=Math.max(1,k.length),N=Math.max(1,q.length),D=Math.max(18,Math.min(65,_t*2.2)),ht=Math.max(18,Math.min(65,N*2.2)),Et=12,K=_t>1?D/(_t-1):D,z=N>1?ht/(N-1):ht,B=Math.max(.12,Math.min(1.5,K*.7)),U=Math.max(.12,Math.min(1.5,z*.7)),V=new Map;W.forEach($=>{if($.status==="completed"||$.timestamp>0){const Tt=`${$.voltageTarget.toFixed(3)}_${$.loadTarget.toFixed(3)}`;V.set(Tt,$)}});const ft=Math.max(D,ht)+14,y=Math.max(12,Math.min(40,Math.max(_t,N))),R=new nT(ft,y,165063,1976635);R.position.set(0,0,0),h.add(R);const H=new so(ft*1.4,ft*1.4),b=new Df({color:725280,roughness:.7,metalness:.1}),nt=new In(H,b);nt.rotation.x=-Math.PI/2,nt.position.y=-.05,nt.receiveShadow=!0,h.add(nt);const et=new ma({color:3718648,linewidth:2}),lt=new tn().setFromPoints([new tt(-D/2-1,0,ht/2+1),new tt(D/2+2,0,ht/2+1)]);h.add(new Ur(lt,et));const ct=j("X: 输入电压 Vin (V)",22,"#38bdf8");ct.position.set(0,.4,ht/2+3.2),ct.scale.set(7.5,1.9,1),h.add(ct);const bt=10,Q=Math.max(1,Math.ceil(_t/bt));k.forEach(($,Tt)=>{if(Tt%Q===0||Tt===_t-1){const rt=-D/2+(_t>1?Tt/(_t-1)*D:0),wt=j(`${$}V`,16,"#94a3b8");wt.position.set(rt,.2,ht/2+1.8),wt.scale.set(Math.min(3.2,K*1.5),.9,1),h.add(wt)}});const C=new tn().setFromPoints([new tt(-D/2-1,0,ht/2+1),new tt(-D/2-1,0,-ht/2-2)]);h.add(new Ur(C,et));const x=s.value==="power"||t.loadMode==="CW",G=x?"W":"A",mt=j(x?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");mt.position.set(-D/2-3.8,.4,0),mt.scale.set(8.5,2.1,1),h.add(mt);const ut=Math.max(1,Math.ceil(N/bt));q.forEach(($,Tt)=>{if(Tt%ut===0||Tt===N-1){const rt=ht/2-(N>1?Tt/(N-1)*ht:0),wt=j(`${$}${G}`,16,"#94a3b8");wt.position.set(-D/2-2.2,.2,rt),wt.scale.set(Math.min(3.2,z*1.5),.9,1),h.add(wt)}});const ot=new tn().setFromPoints([new tt(-D/2-1,0,ht/2+1),new tt(-D/2-1,Et+1.5,ht/2+1)]);h.add(new Ur(ot,et));const T=j("Z: 转换效率 η (%)",22,"#10b981");T.position.set(-D/2-1,Et+2.4,ht/2+1),T.scale.set(7.5,1.9,1),h.add(T),[20,40,60,80,100].forEach($=>{const Tt=$/100*Et,rt=j(`${$}%`,16,"#6ee7b7");rt.position.set(-D/2-2,Tt,ht/2+1),rt.scale.set(2.8,.8,1),h.add(rt);const wt=new tn().setFromPoints([new tt(-D/2-.8,Tt,ht/2+1),new tt(-D/2-.2,Tt,ht/2+1)]);h.add(new Ur(wt,et))}),k.forEach(($,Tt)=>{q.forEach((rt,wt)=>{const Ut=`${$.toFixed(3)}_${rt.toFixed(3)}`,Rt=V.get(Ut);if(!Rt)return;const St=-D/2+(_t>1?Tt/(_t-1)*D:0),Gt=ht/2-(N>1?wt/(N-1)*ht:0),$t=Math.max(.5,Math.min(100,Rt.efficiency)),se=Math.max(.2,$t/100*Et),X=new pr(B,se,U);X.translate(0,se/2,0),X.computeBoundingBox(),X.computeBoundingSphere();const Ct=S($t),vt=new Df({color:Ct,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),Mt=new In(X,vt);Mt.position.set(St,0,Gt),Mt.castShadow=!0,Mt.receiveShadow=!0,Mt.__barPoint=Rt;const It=new Zw(X),Dt=new ma({color:16777215,transparent:!0,opacity:.25}),Yt=new $p(It,Dt);Mt.add(Yt),w.add(Mt),Mt.scale.set(1,.01,1),_.push({mesh:Mt,wireframe:Yt,point:Rt,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:se,material:vt,origColor:Ct.clone()})})}),F()}function E(W){if(!e.value)return;const k=e.value.getBoundingClientRect();v.x=(W.clientX-k.left)/k.width*2-1,v.y=-((W.clientY-k.top)/k.height)*2+1,r.value.x=W.clientX-k.left,r.value.y=W.clientY-k.top}function A(){v.x=-999,v.y=-999,r.value.visible=!1,g&&at()}function at(){g&&(g.targetElevation=0,g.wireframe.material.opacity=.25,g.wireframe.material.color.set(16777215),g=null,i.value=null,r.value.visible=!1)}function it(){if(!c||!l||_.length===0)return;p.setFromCamera(v,c);const W=_.map(q=>q.mesh),k=p.intersectObjects(W,!1);if(k.length>0){const q=k[0].object,_t=_.find(N=>N.mesh===q);_t&&_t!==g&&(g&&at(),g=_t,i.value=_t.point,r.value.visible=!0,_t.targetElevation=1.2,_t.wireframe.material.opacity=.9,_t.wireframe.material.color.set(54015))}else g&&at()}function dt(){f=requestAnimationFrame(dt),d&&d.update(),it(),_.forEach(W=>{W.currentScaleY+=(W.targetScaleY-W.currentScaleY)*.1,W.mesh.scale.y=W.currentScaleY,W.currentElevation+=(W.targetElevation-W.currentElevation)*.15,W.mesh.position.y=W.baseY+W.currentElevation}),u&&l&&c&&u.render(l,c)}function xt(){if(!e.value||!u||!c)return;const W=e.value.clientWidth,k=e.value.clientHeight;W===0||k===0||(c.aspect=W/k,c.updateProjectionMatrix(),u.setSize(W,k))}return _s(()=>t.points,()=>{M()},{deep:!0}),dr(()=>{I()}),fr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",xt),L&&(L.disconnect(),L=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(W,k)=>(Ot(),Ft("div",vT,[m("div",xT,[m("div",yT,[k[2]||(k[2]=jr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-ec765298><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-ec765298></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-ec765298></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-ec765298></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-ec765298>3D 空间特征柱状图</span>',2)),m("span",bT,"| X: Vin | Y: "+yt(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ot(),Ft("div",MT,[m("span",ST," 选定点 #"+yt(i.value.stepIndex)+": ",1),m("span",null,[k[3]||(k[3]=Lt("Vin: ",-1)),m("b",ET,yt(i.value.vin.toFixed(3))+"V",1)]),m("span",null,[k[4]||(k[4]=Lt("Iin: ",-1)),m("b",wT,yt(i.value.iin.toFixed(3))+"A",1)]),m("span",null,[k[5]||(k[5]=Lt("Pin: ",-1)),m("b",TT,yt(i.value.pin.toFixed(3))+"W",1)]),m("span",null,[k[6]||(k[6]=Lt("Vout: ",-1)),m("b",AT,yt(i.value.vout.toFixed(3))+"V",1)]),m("span",null,[k[7]||(k[7]=Lt("Iout: ",-1)),m("b",CT,yt(i.value.iout.toFixed(3))+"A",1)]),m("span",null,[k[8]||(k[8]=Lt("Pout: ",-1)),m("b",RT,yt(i.value.pout.toFixed(3))+"W",1)]),m("span",PT," 效率 η: "+yt(i.value.efficiency.toFixed(2))+"% ",1)])):(Ot(),Ft("div",LT,[...k[9]||(k[9]=[m("span",{style:{color:"#ecc94b"}},"💡",-1),m("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),m("div",DT,[m("div",IT,[m("button",{class:"btn",style:de({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[0]||(k[0]=q=>a("current"))}," Y: 负载电流 (A) ",4),m("button",{class:"btn",style:de({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:k[1]||(k[1]=q=>a("power"))}," Y: 输出功率 (W) ",4)]),m("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:O,title:"重置视角"}," 重置视角 ")])]),m("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ot(),Ft("div",{key:0,style:de([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[m("div",UT,[m("span",null,"采样点 #"+yt(i.value.stepIndex),1),m("span",NT,"η = "+yt(i.value.efficiency.toFixed(2))+"%",1)]),m("div",OT,[m("div",null,[k[10]||(k[10]=Lt("Vin: ",-1)),m("span",FT,yt(i.value.vin.toFixed(2))+"V",1)]),m("div",null,[k[11]||(k[11]=Lt("Vout: ",-1)),m("span",BT,yt(i.value.vout.toFixed(2))+"V",1)]),m("div",null,[k[12]||(k[12]=Lt("Iin: ",-1)),m("span",null,yt(i.value.iin.toFixed(3))+"A",1)]),m("div",null,[k[13]||(k[13]=Lt("Iout: ",-1)),m("span",null,yt(i.value.iout.toFixed(3))+"A",1)]),m("div",null,[k[14]||(k[14]=Lt("Pin: ",-1)),m("span",null,yt(i.value.pin.toFixed(2))+"W",1)]),m("div",null,[k[15]||(k[15]=Lt("Pout: ",-1)),m("span",null,yt(i.value.pout.toFixed(2))+"W",1)])])],4)):Me("",!0),k[16]||(k[16]=jr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-ec765298><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-ec765298><span data-v-ec765298>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-ec765298>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-ec765298></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-ec765298><span data-v-ec765298>&lt;70% 低效</span><span data-v-ec765298>85%</span><span data-v-ec765298>&gt;95% 高效</span></div></div>',1))],512)]))}}),zT=au(VT,[["__scopeId","data-v-ec765298"]]),kT={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},HT={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},GT={style:{display:"flex","align-items":"center",gap:"12px"}},WT={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},$T={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},XT={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},qT={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},jT={style:{color:"#68d391","font-size":"13px"}},YT={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},KT={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},ZT={style:{color:"#4fd1c5","font-size":"12px"}},JT={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},QT={style:{color:"#ecc94b"}},tA={style:{display:"flex","align-items":"center",gap:"8px"}},eA={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},nA=["value"],iA={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},sA={style:{width:"100%",height:"100%",position:"relative"}},rA={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},oA={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},aA={style:{flex:"1",overflow:"auto",padding:"12px"}},lA={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},cA={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},uA={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},dA={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},fA=["onClick"],hA={key:1,style:{color:"#4a5568"}},pA={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},mA={style:{color:"#63b3ed","font-weight":"bold"}},gA={style:{color:"#ecc94b"}},_A={style:{color:"#63b3ed"}},vA={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},xA=Ti({__name:"Result3DView",setup(n){const t=Uv(),e=lp(),i=jt(null),s=jt([]),r=jt(""),o=jt(null),a=jt("3d");async function l(){const v=t.params.id||"";if(s.value=await up(),v){const _=await Q0(v);if(_){i.value=_,r.value=_.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(v,_){if(i.value)return i.value.points.find(g=>Math.abs(g.voltageTarget-v)<1e-4&&Math.abs(g.loadTarget-_)<1e-4)}function u(v){return v>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:v>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:v>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&jo(i.value)}function p(){window.opener?window.close():e.push("/")}return _s(()=>t.params.id,()=>{l()}),dr(()=>{l()}),(v,_)=>{var h,w,L,S,j,F,O,I;const g=iu("router-link");return Ot(),Ft("div",kT,[m("header",HT,[m("div",GT,[Ie(g,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:eu(()=>[..._[5]||(_[5]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Lt(" 控制台 ",-1)])]),_:1}),m("div",null,[m("div",WT,[m("span",null,yt(((h=i.value)==null?void 0:h.title)||"测试结果数据查看"),1),_[6]||(_[6]=m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),m("div",$T," 测试时间: "+yt(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+yt((L=(w=i.value)==null?void 0:w.config)==null?void 0:L.voltageMin)+"V~"+yt((j=(S=i.value)==null?void 0:S.config)==null?void 0:j.voltageMax)+"V, "+yt((O=(F=i.value)==null?void 0:F.config)==null?void 0:O.loadMode),1)])]),(I=i.value)!=null&&I.summary?(Ot(),Ft("div",XT,[m("div",qT,[m("span",null,[_[7]||(_[7]=Lt("峰值效率 η_max: ",-1)),m("b",jT,yt(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ot(),Ft("span",YT," (@"+yt(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+yt(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Me("",!0)]),m("div",KT,[m("span",null,[_[8]||(_[8]=Lt("平均效率 η_avg: ",-1)),m("b",ZT,yt(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),m("div",JT,[m("span",null,[_[9]||(_[9]=Lt("矩阵测试点: ",-1)),m("b",QT,yt(i.value.points.length)+" 点",1)])])])):Me("",!0),m("div",tA,[m("div",eA,[m("button",{class:"btn",style:de({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[0]||(_[0]=M=>a.value="3d")}," 3D 空间柱状图 ",4),m("button",{class:"btn",style:de({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[1]||(_[1]=M=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?ne((Ot(),Ft("select",{key:0,"onUpdate:modelValue":_[2]||(_[2]=M=>r.value=M),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ot(!0),Ft(Pe,null,xi(s.value,M=>(Ot(),Ft("option",{key:M.id,value:M.id},yt(M.title),9,nA))),128))],544)),[[Ks,r.value]]):Me("",!0),i.value?(Ot(),Ft("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[..._[10]||(_[10]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),m("polyline",{points:"7 10 12 15 17 10"}),m("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Lt(" 下载 CSV ",-1)])])):Me("",!0),m("button",{class:"btn",style:{padding:"4px 8px"},onClick:p,title:"关闭页面"}," ✕ ")])]),m("div",iA,[ne(m("div",sA,[i.value&&i.value.points.length>0?(Ot(),ou(zT,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ot(),Ft("div",rA," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[Ju,a.value==="3d"]]),ne(m("div",oA,[_[17]||(_[17]=jr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),m("div",aA,[i.value?(Ot(),Ft("table",lA,[m("thead",null,[m("tr",cA,[m("th",uA," 负载 ("+yt(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ot(!0),Ft(Pe,null,xi(i.value.voltageSteps,M=>(Ot(),Ft("th",{key:M,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},yt(M)+"V ",1))),128))])]),m("tbody",null,[(Ot(!0),Ft(Pe,null,xi(i.value.loadSteps,M=>(Ot(),Ft("tr",{key:M,style:{"border-bottom":"1px solid #2d3748"}},[m("td",dA,yt(M)+yt(i.value.config.loadMode==="CC"?"A":"W"),1),(Ot(!0),Ft(Pe,null,xi(i.value.voltageSteps,E=>(Ot(),Ft("td",{key:E,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:_[3]||(_[3]=A=>A.currentTarget.style.transform="scale(1.04)"),onMouseleave:_[4]||(_[4]=A=>A.currentTarget.style.transform="scale(1.0)"),onClick:A=>o.value=c(E,M)||null},[c(E,M)?(Ot(),Ft("div",{key:0,style:de([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(E,M).efficiency)])},yt(c(E,M).efficiency.toFixed(2))+"% ",5)):(Ot(),Ft("span",hA,"--"))],40,fA))),128))]))),128))])])):Me("",!0)]),o.value?(Ot(),Ft("div",pA,[m("span",mA," 选定点 (#"+yt(o.value.stepIndex)+"): ",1),m("span",null,"目标: "+yt(o.value.voltageTarget)+"V / "+yt(o.value.loadTarget)+yt(o.value.loadMode),1),m("span",null,[_[11]||(_[11]=Lt("实测Vin: ",-1)),m("b",gA,yt(o.value.vin.toFixed(3))+"V",1)]),m("span",null,[_[12]||(_[12]=Lt("实测Iin: ",-1)),m("b",null,yt(o.value.iin.toFixed(3))+"A",1)]),m("span",null,[_[13]||(_[13]=Lt("实测Pin: ",-1)),m("b",null,yt(o.value.pin.toFixed(3))+"W",1)]),m("span",null,[_[14]||(_[14]=Lt("实测Vout: ",-1)),m("b",_A,yt(o.value.vout.toFixed(3))+"V",1)]),m("span",null,[_[15]||(_[15]=Lt("实测Iout: ",-1)),m("b",null,yt(o.value.iout.toFixed(3))+"A",1)]),m("span",null,[_[16]||(_[16]=Lt("实测Pout: ",-1)),m("b",null,yt(o.value.pout.toFixed(3))+"W",1)]),m("span",vA," 效率 η: "+yt(o.value.efficiency.toFixed(2))+"% ",1)])):Me("",!0)],512),[[Ju,a.value==="matrix"]])])])}}}),yA={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},bA={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},MA={style:{display:"flex","align-items":"center",gap:"12px"}},SA={style:{display:"flex","align-items":"center",gap:"10px"}},EA={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},wA={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},TA={style:{flex:"1","border-right":"1px solid #2d3748",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},AA={class:"group-box",style:{"margin-top":"0","border-color":"#2b6cb0"}},CA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},RA={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},PA={style:{"font-family":"monospace",color:"#63b3ed"}},LA={style:{display:"flex","align-items":"center",gap:"6px"}},DA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},IA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},UA={style:{display:"flex",gap:"6px"}},NA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},OA={style:{display:"flex",gap:"6px"}},FA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},BA={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},VA={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},zA={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},kA={style:{"margin-bottom":"12px"}},HA={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},GA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ecc94b"}},WA={style:{color:"#ecc94b","font-weight":"bold","font-size":"16px"}},$A={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #48bb78"}},XA={style:{color:"#48bb78","font-weight":"bold","font-size":"16px"}},qA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},jA={style:{color:"#ed8936","font-weight":"bold","font-size":"16px"}},YA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},KA={style:{display:"flex",gap:"6px"}},ZA={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},JA={class:"group-box",style:{"margin-top":"0","border-color":"#c05621"}},QA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},tC={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},eC={style:{"font-family":"monospace",color:"#ed8936"}},nC={style:{display:"flex","align-items":"center",gap:"6px"}},iC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},sC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},rC={style:{display:"flex",gap:"6px"}},oC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},aC={style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},lC={style:{color:"#ed8936","font-family":"monospace"}},cC={style:{display:"flex",gap:"6px"}},uC=["step"],dC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},fC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},hC={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},pC={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},mC={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},gC={style:{"margin-bottom":"12px"}},_C={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},vC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #63b3ed"}},xC={style:{color:"#63b3ed","font-weight":"bold","font-size":"15px"}},yC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},bC={style:{color:"#ed8936","font-weight":"bold","font-size":"15px"}},MC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #f56565"}},SC={style:{color:"#f56565","font-weight":"bold","font-size":"15px"}},EC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #9f7aea"}},wC={style:{color:"#b794f4","font-weight":"bold","font-size":"15px"}},TC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},AC={style:{display:"flex",gap:"6px"}},CC={style:{height:"180px","background-color":"#0d1117","border-top":"1px solid #2d3748",display:"flex","flex-direction":"column"}},RC={style:{height:"28px","background-color":"#161b22","border-bottom":"1px solid #30363d",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 12px","font-size":"11px","font-weight":"bold"}},PC={style:{color:"#6e7681"}},LC={key:0,style:{color:"#484f58","font-style":"italic"}},DC=Ti({__name:"SingleInstrumentView",setup(n){const t=da.getInstance(),e=jt(!1),i=jt(115200),s=jt(115200),r=jt(5),o=jt(2),a=jt(!1),l=jt(""),c=yn({vin:0,iin:0,pin:0}),u=jt("CC"),d=jt(1),f=jt(!1),p=jt(!1),v=jt(""),_=yn({vout:0,iout:0,pout:0,r:0}),g=jt([]),h=jt(null);function w(z,B="#7ee787"){const U=new Date().toLocaleTimeString();g.value.push({time:U,text:z,color:B}),g.value.length>300&&g.value.shift(),setTimeout(()=>{h.value&&(h.value.scrollTop=h.value.scrollHeight)},10)}const L=Fe(()=>{switch(u.value){case"CC":return"A";case"CV":return"V";case"CW":return"W";case"CR":return"Ω"}}),S=Fe(()=>{switch(u.value){case"CC":return"0 ~ 30A (步进 0.1A)";case"CV":return"0 ~ 60V (步进 0.5V)";case"CW":return"0 ~ 150W (步进 1W)";case"CR":return"0.1 ~ 1000Ω (步进 1Ω)"}}),j=Fe(()=>{switch(u.value){case"CC":return .1;case"CV":return .5;case"CW":return 1;case"CR":return .5}});function F(){switch(u.value){case"CC":d.value=1;break;case"CV":d.value=5;break;case"CW":d.value=10;break;case"CR":d.value=5;break}}async function O(){try{await t.setPsuVoltageOnly(r.value),w(`[PSU] 设置电压指令成功 (:APPLy CH1,${r.value.toFixed(3)},${o.value.toFixed(3)}) -> ${r.value.toFixed(3)} V`,"#ecc94b")}catch(z){w(`[PSU 错误] 设置电压失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function I(){try{await t.setPsuCurrentLimitOnly(o.value),w(`[PSU] 设置限流指令成功 (:APPLy CH1,${r.value.toFixed(3)},${o.value.toFixed(3)}) -> ${o.value.toFixed(3)} A`,"#48bb78")}catch(z){w(`[PSU 错误] 设置限流失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function M(z){try{await t.setPsuOutput(z,r.value,o.value),a.value=z,w(`[PSU] 电源输出开关指令已生效 -> ${z?"开启 (ON)":"关闭 (OFF)"}`,z?"#3fb950":"#f85149")}catch(B){w(`[PSU 错误] 输出切换失败: ${(B==null?void 0:B.message)||B}`,"#f85149")}}async function E(){const z=l.value.trim();if(z){w(`[PSU TX] >> ${z}`,"#58a6ff");try{const B=await t.sendPsuRawSCPI(z);w(`[PSU RX] << ${B}`,"#7ee787")}catch(B){w(`[PSU ERR] << ${(B==null?void 0:B.message)||B}`,"#f85149")}l.value=""}}async function A(){if(t.psu.state.connected)await t.psu.disconnect(),a.value=!1,w("[PSU] 电源连接已断开","#a0aec0");else try{if(e.value)t.psu.connectVirtual(),w("[PSU] 虚拟仿真电源驱动已连接","#3fb950");else{await t.psu.connectPhysical(i.value),w(`[PSU] 物理电源串口连接成功 (${i.value}bps)`,"#3fb950");const z=await t.queryPsuStatus();a.value=z.outputOn,z.setVoltage>0&&(r.value=z.setVoltage),z.setCurrentLimit>0&&(o.value=z.setCurrentLimit)}}catch(z){w(`[PSU 错误] 连接失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function at(){try{await t.setLoadModeAndValue(u.value,d.value),w(`[LOAD] 应用设定成功: 模式=${u.value}, 目标值=${d.value} ${L.value}`,"#ed8936")}catch(z){w(`[LOAD 错误] 应用负载设定失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function it(z){try{await t.setLoadModeAndValue(u.value,d.value),await t.setLoadInputState(z),f.value=z,w(`[LOAD] 负载带载开关已生效 -> ${z?"带载中 (ON)":"停止带载 (OFF)"}`,z?"#3fb950":"#f85149")}catch(B){w(`[LOAD 错误] 带载开关失败: ${(B==null?void 0:B.message)||B}`,"#f85149")}}async function dt(){p.value=!p.value;try{await t.setLoadShortState(p.value),w(`[LOAD] 短路测试状态切换 -> ${p.value?"短路开启 (ON)":"短路关闭 (OFF)"}`,"#e3b341")}catch(z){w(`[LOAD 错误] 短路测试指令失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function xt(){try{await t.clearLoadProtectionState(),w("[LOAD] 保护状态已复位 (:INP 0)","#58a6ff")}catch(z){w(`[LOAD 错误] 清除保护失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}async function W(){const z=v.value.trim();if(z){w(`[LOAD TX] >> ${z}`,"#f0883e");try{const B=await t.sendLoadRawSCPI(z);w(`[LOAD RX] << ${B}`,"#7ee787")}catch(B){w(`[LOAD ERR] << ${(B==null?void 0:B.message)||B}`,"#f85149")}v.value=""}}async function k(){if(t.load.state.connected)await t.load.disconnect(),f.value=!1,w("[LOAD] 电子负载连接已断开","#a0aec0");else try{if(e.value)t.load.connectVirtual(),w("[LOAD] 虚拟仿真电子负载驱动已连接","#3fb950");else{await t.load.connectPhysical(s.value),w(`[LOAD] 物理电子负载串口连接成功 (${s.value}bps)`,"#3fb950");const z=await t.queryLoadStatus();f.value=z.inputOn,u.value=z.mode,z.targetVal>0&&(d.value=z.targetVal)}}catch(z){w(`[LOAD 错误] 连接失败: ${(z==null?void 0:z.message)||z}`,"#f85149")}}function q(){e.value?(t.autoConnectVirtual(),w("🧪 已切换至虚拟仿真演示模式","#3fb950")):(t.emergencyStopAll(),t.psu.disconnect(),t.load.disconnect(),w("🔌 已切换至物理真实串口模式，请点击连接打开串口","#58a6ff"))}async function _t(){await t.emergencyStopAll(),a.value=!1,f.value=!1,w("🛑 紧急停止已触发: 电源输出已关闭，负载已停止带载","#f85149")}let N=null,D=!1,ht=0;async function Et(){if(!D){D=!0;try{const z=await t.measureAsync();if(c.vin=z.vin,c.iin=z.iin,c.pin=z.pin,_.vout=z.vout,_.iout=z.iout,_.pout=z.pout,_.r=z.iout>.005?z.vout/z.iout:0,ht++,ht%4===0){if(t.psu.state.connected){const B=await t.queryPsuStatus();a.value=B.outputOn;const U=document.activeElement;(U==null?void 0:U.getAttribute("data-field"))!=="psuSetV"&&B.setVoltage>0&&(r.value=B.setVoltage),(U==null?void 0:U.getAttribute("data-field"))!=="psuSetI"&&B.setCurrentLimit>0&&(o.value=B.setCurrentLimit)}if(t.load.state.connected){const B=await t.queryLoadStatus();f.value=B.inputOn,p.value=B.isShort;const U=document.activeElement;(U==null?void 0:U.getAttribute("data-field"))!=="loadMode"&&(u.value=B.mode),(U==null?void 0:U.getAttribute("data-field"))!=="loadParamVal"&&B.targetVal>0&&(d.value=B.targetVal)}}}catch{}finally{D=!1}}}function K(){t.emergencyStopAll().catch(()=>{})}return dr(()=>{w("单仪器测试工作台已启动就绪。可独立调试电源电压/限流/开关与电子负载四模拉载。","#58a6ff"),N=window.setInterval(Et,350),window.addEventListener("beforeunload",K)}),fr(()=>{N&&clearInterval(N),window.removeEventListener("beforeunload",K)}),(z,B)=>{const U=iu("router-link");return Ot(),Ft("div",yA,[m("header",bA,[m("div",MA,[Ie(U,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回测试工作台主界面"},{default:eu(()=>[...B[14]||(B[14]=[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[m("polyline",{points:"15 18 9 12 15 6"})],-1),Lt(" 返回控制台 ",-1)])]),_:1}),B[15]||(B[15]=m("div",null,[m("div",{style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},[m("span",null,"🔧 仪器底层单体测试与硬件调试工作台 (Single Instrument Debugger)"),m("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#2c5282",color:"#90cdf4",border:"1px solid #3182ce"}}," 单仪器独立控制 ")]),m("div",{style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}}," 支持电源独立加压/限流/开关输出，负载四模(CC/CV/CP/CR)单独带载，以及原始 SCPI 串口收发 ")],-1))]),m("div",SA,[m("label",EA,[ne(m("input",{type:"checkbox","onUpdate:modelValue":B[0]||(B[0]=V=>e.value=V),onChange:q},null,544),[[Bi,e.value]]),B[16]||(B[16]=Lt(" 🧪 仿真演示驱动 ",-1))]),m("button",{class:"btn btn-danger",style:{padding:"4px 12px","font-weight":"bold","font-size":"11.5px"},onClick:_t}," 🛑 一键关闭所有输出 ")])]),m("div",wA,[m("div",TA,[m("div",AA,[B[29]||(B[29]=m("div",{class:"group-title",style:{color:"#63b3ed"}},[m("span",null,"⚡ 高精度直流电源单体测试 (RIGOL DP700 系列)")],-1)),m("div",CA,[m("div",RA,[m("span",{style:de([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Zt(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),B[17]||(B[17]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"电源状态:",-1)),m("span",PA,yt(Zt(t).psu.state.portName),1)]),m("div",LA,[!Zt(t).psu.state.connected&&!e.value?ne((Ot(),Ft("select",{key:0,"onUpdate:modelValue":B[1]||(B[1]=V=>i.value=V),style:{padding:"2px 4px","font-size":"11px",background:"#1a202c",color:"#e2e8f0",border:"1px solid #4a5568","border-radius":"4px"},title:"选择电源波特率"},[...B[18]||(B[18]=[m("option",{value:115200},"115200",-1),m("option",{value:9600},"9600",-1),m("option",{value:19200},"19200",-1),m("option",{value:38400},"38400",-1)])],512)),[[Ks,i.value,void 0,{number:!0}]]):Me("",!0),m("button",{class:"btn",style:de([{backgroundColor:Zt(t).psu.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:A},yt(Zt(t).psu.state.connected?"断开连接":"连接电源"),5)])]),m("div",DA,[m("div",IA,[B[19]||(B[19]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定输出电压 (V):"),m("span",{style:{color:"#ecc94b","font-family":"monospace"}},"0 ~ 60V")],-1)),m("div",UA,[ne(m("input",{type:"number","onUpdate:modelValue":B[2]||(B[2]=V=>r.value=V),"data-field":"psuSetV",step:"0.5",min:"0",max:"60",style:{flex:"1","font-weight":"bold",color:"#ecc94b","font-size":"14px"}},null,512),[[We,r.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:O}," 应用电压 ")])]),m("div",NA,[B[20]||(B[20]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[m("span",null,"设定最大限流 (A):"),m("span",{style:{color:"#48bb78","font-family":"monospace"}},"0 ~ 10A")],-1)),m("div",OA,[ne(m("input",{type:"number","onUpdate:modelValue":B[3]||(B[3]=V=>o.value=V),"data-field":"psuSetI",step:"0.1",min:"0.1",max:"10",style:{flex:"1","font-weight":"bold",color:"#48bb78","font-size":"14px"}},null,512),[[We,o.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:I}," 应用限流 ")])])]),m("div",FA,[m("button",{class:"btn",style:de([{backgroundColor:a.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:a.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:B[4]||(B[4]=V=>M(!0))}," ▶ 开始输出 (Output ON) ",4),m("button",{class:"btn",style:de([{backgroundColor:a.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:B[5]||(B[5]=V=>M(!1))}," ⏹ 停止输出 (Output OFF) ",4)]),m("div",BA,[a.value?(Ot(),Ft("span",VA," ● 电源通道输出已开启 (ON) ")):(Ot(),Ft("span",zA," ○ 电源通道输出已关闭 (OFF) "))]),m("div",kA,[B[27]||(B[27]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 电源实测遥测数据 (Telemetry): ",-1)),m("div",HA,[m("div",GA,[B[22]||(B[22]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vin:",-1)),m("div",WA,[Lt(yt(c.vin.toFixed(3))+" ",1),B[21]||(B[21]=m("span",{style:{"font-size":"10px"}},"V",-1))])]),m("div",$A,[B[24]||(B[24]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iin:",-1)),m("div",XA,[Lt(yt(c.iin.toFixed(3))+" ",1),B[23]||(B[23]=m("span",{style:{"font-size":"10px"}},"A",-1))])]),m("div",qA,[B[26]||(B[26]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pin:",-1)),m("div",jA,[Lt(yt(c.pin.toFixed(3))+" ",1),B[25]||(B[25]=m("span",{style:{"font-size":"10px"}},"W",-1))])])])]),m("div",YA,[B[28]||(B[28]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送电源原始 SCPI 指令 (如 :MEAS:ALL? 或 *IDN?):",-1)),m("div",KA,[ne(m("input",{type:"text","onUpdate:modelValue":B[6]||(B[6]=V=>l.value=V),placeholder:":APPL CH1,12,2 或 :OUTP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(E,["enter"])},null,544),[[We,l.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:E}," 发送指令 ")])])])]),m("div",ZA,[m("div",JA,[B[44]||(B[44]=m("div",{class:"group-title",style:{color:"#ed8936"}},[m("span",null,"🔋 可编程电子负载单体测试 (UNI-T UTL8500 系列)")],-1)),m("div",QA,[m("div",tC,[m("span",{style:de([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:Zt(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),B[30]||(B[30]=m("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"负载状态:",-1)),m("span",eC,yt(Zt(t).load.state.portName),1)]),m("div",nC,[!Zt(t).load.state.connected&&!e.value?ne((Ot(),Ft("select",{key:0,"onUpdate:modelValue":B[7]||(B[7]=V=>s.value=V),style:{padding:"2px 4px","font-size":"11px",background:"#1a202c",color:"#e2e8f0",border:"1px solid #4a5568","border-radius":"4px"},title:"选择负载波特率"},[...B[31]||(B[31]=[m("option",{value:115200},"115200",-1),m("option",{value:9600},"9600",-1),m("option",{value:19200},"19200",-1),m("option",{value:38400},"38400",-1)])],512)),[[Ks,s.value,void 0,{number:!0}]]):Me("",!0),m("button",{class:"btn",style:de([{backgroundColor:Zt(t).load.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:k},yt(Zt(t).load.state.connected?"断开连接":"连接负载"),5)])]),m("div",iC,[m("div",sC,[B[33]||(B[33]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px"}}," 工作模式选择: ",-1)),m("div",rC,[ne(m("select",{"onUpdate:modelValue":B[8]||(B[8]=V=>u.value=V),"data-field":"loadMode",style:{flex:"1","font-weight":"bold",color:"#63b3ed"},onChange:F},[...B[32]||(B[32]=[m("option",{value:"CC"},"CC (定电流模式)",-1),m("option",{value:"CV"},"CV (定电压模式)",-1),m("option",{value:"CW"},"CP/CW (定功率模式)",-1),m("option",{value:"CR"},"CR (定电阻模式)",-1)])],544),[[Ks,u.value]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:at}," 应用模式 ")])]),m("div",oC,[m("div",aC,[m("span",null,"设定值 ("+yt(L.value)+"):",1),m("span",lC,yt(S.value),1)]),m("div",cC,[ne(m("input",{type:"number","onUpdate:modelValue":B[9]||(B[9]=V=>d.value=V),"data-field":"loadParamVal",step:j.value,min:"0",style:{flex:"1","font-weight":"bold",color:"#ed8936","font-size":"14px"}},null,8,uC),[[We,d.value,void 0,{number:!0}]]),m("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:at}," 应用设定 ")])])]),m("div",dC,[m("button",{class:"btn",style:de([{backgroundColor:p.value?"#744210":"#2d3748",borderColor:"#d69e2e",color:"#fbd38d"},{padding:"6px","font-size":"11.5px","font-weight":"bold"}]),onClick:dt}," ⚡ "+yt(p.value?"退出短路测试 (Short OFF)":"短路测试 (Short ON)"),5),m("button",{class:"btn",style:{"background-color":"#2d3748",color:"#90cdf4","border-color":"#3182ce",padding:"6px","font-size":"11.5px","font-weight":"bold"},onClick:xt}," 🛡️ 清除保护状态 (Clear Prot) ")]),m("div",fC,[m("button",{class:"btn",style:de([{backgroundColor:f.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:f.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:B[10]||(B[10]=V=>it(!0))}," ▶ 开始带载 (Input ON) ",4),m("button",{class:"btn",style:de([{backgroundColor:f.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:B[11]||(B[11]=V=>it(!1))}," ⏹ 停止带载 (Input OFF) ",4)]),m("div",hC,[f.value?(Ot(),Ft("span",pC," ● 电子负载正在拉载 (ON) ")):(Ot(),Ft("span",mC," ○ 电子负载带载已关闭 (OFF) "))]),m("div",gC,[B[42]||(B[42]=m("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 负载实测遥测数据 (Telemetry): ",-1)),m("div",_C,[m("div",vC,[B[35]||(B[35]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vout:",-1)),m("div",xC,[Lt(yt(_.vout.toFixed(3))+" ",1),B[34]||(B[34]=m("span",{style:{"font-size":"9px"}},"V",-1))])]),m("div",yC,[B[37]||(B[37]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iout:",-1)),m("div",bC,[Lt(yt(_.iout.toFixed(3))+" ",1),B[36]||(B[36]=m("span",{style:{"font-size":"9px"}},"A",-1))])]),m("div",MC,[B[39]||(B[39]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pout:",-1)),m("div",SC,[Lt(yt(_.pout.toFixed(3))+" ",1),B[38]||(B[38]=m("span",{style:{"font-size":"9px"}},"W",-1))])]),m("div",EC,[B[41]||(B[41]=m("div",{style:{color:"#a0aec0","font-size":"10px"}},"等效电阻 R:",-1)),m("div",wC,[Lt(yt(_.r.toFixed(2))+" ",1),B[40]||(B[40]=m("span",{style:{"font-size":"9px"}},"Ω",-1))])])])]),m("div",TC,[B[43]||(B[43]=m("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送负载原始 SCPI 指令 (如 :MEAS:VOLT? 或 :SOUR:CURR 2.0):",-1)),m("div",AC,[ne(m("input",{type:"text","onUpdate:modelValue":B[12]||(B[12]=V=>v.value=V),placeholder:":SOUR:FUNC CC 或 :SOUR:INP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(W,["enter"])},null,544),[[We,v.value]]),m("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:W}," 发送指令 ")])])])])]),m("div",CC,[m("div",RC,[B[45]||(B[45]=m("span",{style:{color:"#7ee787",display:"flex","align-items":"center",gap:"6px"}},[m("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[m("polyline",{points:"4 17 10 11 4 5"}),m("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]),Lt(" 底盘通信终端交互日志 (Serial & SCPI Terminal Log) ")],-1)),m("button",{class:"btn",style:{padding:"1px 6px","font-size":"10px"},onClick:B[13]||(B[13]=V=>g.value=[])}," 清空日志 ")]),m("div",{ref_key:"logContainerRef",ref:h,style:{flex:"1","overflow-y":"auto",padding:"8px 12px","font-family":"'Consolas', monospace","font-size":"11px","line-height":"1.5",color:"#7ee787"}},[(Ot(!0),Ft(Pe,null,xi(g.value,(V,Y)=>(Ot(),Ft("div",{key:Y,style:de({color:V.color})},[m("span",PC,"["+yt(V.time)+"]",1),Lt(" "+yt(V.text),1)],4))),128)),g.value.length===0?(Ot(),Ft("div",LC," 等待指令输入与硬件交互... ")):Me("",!0)],512)])])}}}),IC=[{path:"/",name:"Console",component:Wy},{path:"/single-instrument",name:"SingleInstrument",component:DC},{path:"/debug",redirect:"/single-instrument"},{path:"/result/:id",name:"Result3D",component:xA,props:!0}],UC=Iv({history:dv(),routes:IC}),jp=b_(T_);jp.use(UC);jp.mount("#app");
