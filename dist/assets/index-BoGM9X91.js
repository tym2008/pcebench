var $p=Object.defineProperty;var jp=(n,t,e)=>t in n?$p(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var fe=(n,t,e)=>jp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const he={},ns=[],Wn=()=>{},If=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ca=n=>n.startsWith("onUpdate:"),Ne=Object.assign,Bc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},qp=Object.prototype.hasOwnProperty,ee=(n,t)=>qp.call(n,t),zt=Array.isArray,Di=n=>Gr(n)==="[object Map]",cs=n=>Gr(n)==="[object Set]",bu=n=>Gr(n)==="[object Date]",Xt=n=>typeof n=="function",be=n=>typeof n=="string",Xn=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",Uf=n=>(ae(n)||Xt(n))&&Xt(n.then)&&Xt(n.catch),Nf=Object.prototype.toString,Gr=n=>Nf.call(n),Yp=n=>Gr(n).slice(8,-1),Of=n=>Gr(n)==="[object Object]",kc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tr=Fc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Kp=/-\w/g,Ze=ua(n=>n.replace(Kp,t=>t.slice(1).toUpperCase())),Zp=/\B([A-Z])/g,hs=ua(n=>n.replace(Zp,"-$1").toLowerCase()),da=ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),La=ua(n=>n?`on${da(n)}`:""),Hn=(n,t)=>!Object.is(n,t),No=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Ff=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},fa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Eu;const ha=()=>Eu||(Eu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Wr(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?em(i):Wr(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||ae(n))return n}const Jp=/;(?![^(]*\))/g,Qp=/:([^]+)/,tm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function em(n){const t={};return n.replace(tm,e=>e.startsWith("/*")?"":e).split(Jp).forEach(e=>{if(e){const i=e.split(Qp);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ye(n){let t="";if(be(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=ye(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const nm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",im=Fc(nm);function Bf(n){return!!n||n===""}function sm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Oi(n[s],t[s],e);return i}function wu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Oi(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function rm(n,t,e){let i=Di(n),s=Di(t);if(i||s||(i=cs(n),s=cs(t),i||s))return i&&s?wu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Oi(n[a],t[a],e))return!1}return String(n)===String(t)}function Tu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Oi(n,t,e){if(n===t)return!0;let i=bu(n),s=bu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Xn(n),s=Xn(t),i||s?n===t:(i=zt(n),s=zt(t),i||s?i&&s?Tu(n,t,e,sm):!1:(i=ae(n),s=ae(t),i||s?!i||!s?!1:Tu(n,t,e,rm):String(n)===String(t))))}function om(n,t){return n.findIndex(e=>Oi(e,t))}const kf=n=>!!(n&&n.__v_isRef===!0),Et=n=>be(n)?n:n==null?"":zt(n)||ae(n)&&(n.toString===Nf||!Xt(n.toString))?kf(n)?Et(n.value):JSON.stringify(n,zf,2):String(n),zf=(n,t)=>kf(t)?zf(n,t.value):Di(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ia(i,r)+" =>"]=s,e),{})}:cs(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ia(e))}:Xn(t)?Ia(t):ae(t)&&!zt(t)&&!Of(t)?String(t):t,Ia=(n,t="")=>{var e;return Xn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class am{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ue&&(Ue.active?(this.parent=Ue,this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ue;try{return Ue=this,t()}finally{Ue=e}}}on(){++this._on===1&&(this.prevScope=Ue,Ue=this)}off(){if(this._on>0&&--this._on===0){if(Ue===this)Ue=this.prevScope;else{let t=Ue;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function lm(){return Ue}let ge;const Ua=new WeakSet;class Vf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ue&&(Ue.active?Ue.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ua.has(this)&&(Ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),Wf(this);const t=ge,e=Cn;ge=this,Cn=!0;try{return this.fn()}finally{Xf(this),ge=t,Cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Hc(t);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rl(this)&&this.run()}get dirty(){return Rl(this)}}let Hf=0,Ar,Cr;function Gf(n,t=!1){if(n.flags|=8,t){n.next=Cr,Cr=n;return}n.next=Ar,Ar=n}function zc(){Hf++}function Vc(){if(--Hf>0)return;if(Cr){let t=Cr;for(Cr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Ar;){let t=Ar;for(Ar=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Wf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Hc(i),cm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Rl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&($f(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function $f(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ur)||(n.globalVersion=Ur,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Rl(n))))return;n.flags|=2;const t=n.dep,e=ge,i=Cn;ge=n,Cn=!0;try{Wf(n);const s=n.fn(n._value);(t.version===0||Hn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ge=e,Cn=i,Xf(n),n.flags&=-3}}function Hc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Hc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function cm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Cn=!0;const jf=[];function $n(){jf.push(Cn),Cn=!1}function jn(){const n=jf.pop();Cn=n===void 0?!0:n}function Au(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ge;ge=void 0;try{t()}finally{ge=e}}}let Ur=0;class um{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ge||!Cn||ge===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ge)e=this.activeLink=new um(ge,this),ge.deps?(e.prevDep=ge.depsTail,ge.depsTail.nextDep=e,ge.depsTail=e):ge.deps=ge.depsTail=e,qf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ge.depsTail,e.nextDep=void 0,ge.depsTail.nextDep=e,ge.depsTail=e,ge.deps===e&&(ge.deps=i)}return e}trigger(t){this.version++,Ur++,this.notify(t)}notify(t){zc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Vc()}}}function qf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)qf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Pl=new WeakMap,as=Symbol(""),Dl=Symbol(""),Nr=Symbol("");function ke(n,t,e){if(Cn&&ge){let i=Pl.get(n);i||Pl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new Gc),s.map=i,s.key=e),s.track()}}function ci(n,t,e,i,s,r){const o=Pl.get(n);if(!o){Ur++;return}const a=l=>{l&&l.trigger()};if(zc(),t==="clear")o.forEach(a);else{const l=zt(n),c=l&&kc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Nr||!Xn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Nr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(as)),Di(n)&&a(o.get(Dl)));break;case"delete":l||(a(o.get(as)),Di(n)&&a(o.get(Dl)));break;case"set":Di(n)&&a(o.get(as));break}}Vc()}function _s(n){const t=re(n);return t===n||(ke(t,"iterate",Nr),mn(n))?t:qn(n)?Li(n)?t.map(e=>Fi(_n(e))):t.map(Fi):t.map(_n)}function pa(n){return ke(n=re(n),"iterate",Nr),n}function Bn(n,t){return qn(n)?Fi(Li(n)?_n(t):t):_n(t)}const dm={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,n=>Bn(this,n))},concat(...n){return _s(this).concat(...n.map(t=>zt(t)?_s(t):t))},entries(){return Na(this,"entries",n=>(n[1]=Bn(this,n[1]),n))},every(n,t){return Jn(this,"every",n,t,void 0,arguments)},filter(n,t){return Jn(this,"filter",n,t,e=>e.map(i=>Bn(this,i)),arguments)},find(n,t){return Jn(this,"find",n,t,e=>Bn(this,e),arguments)},findIndex(n,t){return Jn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Jn(this,"findLast",n,t,e=>Bn(this,e),arguments)},findLastIndex(n,t){return Jn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Jn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Oa(this,"includes",n)},indexOf(...n){return Oa(this,"indexOf",n)},join(n){return _s(this).join(n)},lastIndexOf(...n){return Oa(this,"lastIndexOf",n)},map(n,t){return Jn(this,"map",n,t,void 0,arguments)},pop(){return cr(this,"pop")},push(...n){return cr(this,"push",n)},reduce(n,...t){return Ru(this,"reduce",n,t)},reduceRight(n,...t){return Ru(this,"reduceRight",n,t)},shift(){return cr(this,"shift")},some(n,t){return Jn(this,"some",n,t,void 0,arguments)},splice(...n){return cr(this,"splice",n)},toReversed(){return _s(this).toReversed()},toSorted(n){return _s(this).toSorted(n)},toSpliced(...n){return _s(this).toSpliced(...n)},unshift(...n){return cr(this,"unshift",n)},values(){return Na(this,"values",n=>Bn(this,n))}};function Na(n,t,e){const i=pa(n),s=i[t],r=s.call(i);if(i!==n&&!mn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Cu(r.next(),e),s!==Yf[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Cu(r._next(),e)}return r}function Cu(n,t){return n.done||(n.value=t(n.value)),n}const Yf=Array.prototype;function Jn(n,t,e,i,s,r){const o=pa(n),a=o!==n&&!mn(n),l=o[t];if(l!==Yf[t]){const d=l.apply(n,r);return a?_n(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Bn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ru(n,t,e,i){const s=pa(n),r=s!==n&&!mn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Bn(n,c)),e.call(this,c,Bn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Bn(n,l):l}function Oa(n,t,e){const i=re(n);ke(i,"iterate",Nr);const s=i[t](...e);return(s===-1||s===!1)&&$c(e[0])?(e[0]=re(e[0]),i[t](...e)):s}function cr(n,t,e=[]){$n(),zc();const i=re(n)[t].apply(n,e);return Vc(),jn(),i}const fm=Fc("__proto__,__v_isRef,__isVue"),Kf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xn));function hm(n){Xn(n)||(n=String(n));const t=re(this);return ke(t,"has",n),t.hasOwnProperty(n)}class Zf{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?bm:eh:r?th:Qf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=zt(t);if(!s){let l;if(o&&(l=dm[e]))return l;if(e==="hasOwnProperty")return hm}const a=Reflect.get(t,e,Ve(t)?t:i);if((Xn(e)?Kf.has(e):fm(e))||(s||ke(t,"get",e),r))return a;if(Ve(a)){const l=o&&kc(e)?a:a.value;return s&&ae(l)?Il(l):l}return ae(a)?s?Il(a):qs(a):a}}class Jf extends Zf{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=zt(t)&&kc(e);if(!this._isShallow){const c=qn(r);if(!mn(i)&&!qn(i)&&(r=re(r),i=re(i)),!o&&Ve(r)&&!Ve(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ee(t,e),l=Reflect.set(t,e,i,Ve(t)?t:s);return t===re(s)&&l&&(a?Hn(i,r)&&ci(t,"set",e,i):ci(t,"add",e,i)),l}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&ci(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Xn(e)||!Kf.has(e))&&ke(t,"has",e),i}ownKeys(t){return ke(t,"iterate",zt(t)?"length":as),Reflect.ownKeys(t)}}class pm extends Zf{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const mm=new Jf,gm=new pm,_m=new Jf(!0);const Ll=n=>n,Jr=n=>Reflect.getPrototypeOf(n);function vm(n,t,e){return function(...i){const s=this.__v_raw,r=re(s),o=Di(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ll:t?Fi:_n;return!t&&ke(r,"iterate",l?Dl:as),Ne(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function Qr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function xm(n,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);n||(Hn(s,a)&&ke(o,"get",s),ke(o,"get",a));const{has:l}=Jr(o),c=t?Ll:n?Fi:_n;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&ke(re(s),"iterate",as),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return n||(Hn(s,a)&&ke(o,"has",s),ke(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Ll:n?Fi:_n;return!n&&ke(l,"iterate",as),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Ne(e,n?{add:Qr("add"),set:Qr("set"),delete:Qr("delete"),clear:Qr("clear")}:{add(s){const r=re(this),o=Jr(r),a=re(s),l=!t&&!mn(s)&&!qn(s)?a:s;return o.has.call(r,l)||Hn(s,l)&&o.has.call(r,s)||Hn(a,l)&&o.has.call(r,a)||(r.add(l),ci(r,"add",l,l)),this},set(s,r){!t&&!mn(r)&&!qn(r)&&(r=re(r));const o=re(this),{has:a,get:l}=Jr(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Hn(r,u)&&ci(o,"set",s,r):ci(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=Jr(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ci(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&ci(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=vm(s,n,t)}),e}function Wc(n,t){const e=xm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const ym={get:Wc(!1,!1)},Mm={get:Wc(!1,!0)},Sm={get:Wc(!0,!1)};const Qf=new WeakMap,th=new WeakMap,eh=new WeakMap,bm=new WeakMap;function Em(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qs(n){return qn(n)?n:Xc(n,!1,mm,ym,Qf)}function nh(n){return Xc(n,!1,_m,Mm,th)}function Il(n){return Xc(n,!0,gm,Sm,eh)}function Xc(n,t,e,i,s){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Em(Yp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Li(n){return qn(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function qn(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function $c(n){return n?!!n.__v_raw:!1}function re(n){const t=n&&n.__v_raw;return t?re(t):n}function wm(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&Ff(n,"__v_skip",!0),n}const _n=n=>ae(n)?qs(n):n,Fi=n=>ae(n)?Il(n):n;function Ve(n){return n?n.__v_isRef===!0:!1}function Te(n){return ih(n,!1)}function Tm(n){return ih(n,!0)}function ih(n,t){return Ve(n)?n:new Am(n,t)}class Am{constructor(t,e){this.dep=new Gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:_n(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||mn(t)||qn(t);t=i?t:re(t),Hn(t,e)&&(this._rawValue=t,this._value=i?t:_n(t),this.dep.trigger())}}function $e(n){return Ve(n)?n.value:n}const Cm={get:(n,t,e)=>t==="__v_raw"?n:$e(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ve(s)&&!Ve(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function sh(n){return Li(n)?n:new Proxy(n,Cm)}class Rm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new Gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ur-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return Gf(this,!0),!0}get value(){const t=this.dep.track();return $f(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pm(n,t,e=!1){let i,s;return Xt(n)?i=n:(i=n.get,s=n.set),new Rm(i,s,e)}const to={},Xo=new WeakMap;let Ki;function Dm(n,t=!1,e=Ki){if(e){let i=Xo.get(e);i||Xo.set(e,i=[]),i.push(n)}}function Lm(n,t,e=he){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=M=>s?M:mn(M)||s===!1||s===0?ui(M,1):ui(M);let u,d,f,h,g=!1,v=!1;if(Ve(n)?(d=()=>n.value,g=mn(n)):Li(n)?(d=()=>c(n),g=!0):zt(n)?(v=!0,g=n.some(M=>Li(M)||mn(M)),d=()=>n.map(M=>{if(Ve(M))return M.value;if(Li(M))return c(M);if(Xt(M))return l?l(M,2):M()})):Xt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){$n();try{f()}finally{jn()}}const M=Ki;Ki=u;try{return l?l(n,3,[h]):n(h)}finally{Ki=M}}:d=Wn,t&&s){const M=d,W=s===!0?1/0:s;d=()=>ui(M(),W)}const m=lm(),p=()=>{u.stop(),m&&m.active&&Bc(m.effects,u)};if(r&&t){const M=t;t=(...W)=>{try{return M(...W)}finally{p()}}}let C=v?new Array(n.length).fill(to):to;const A=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const W=u.run();if(M||s||g||(v?W.some((F,I)=>Hn(F,C[I])):Hn(W,C))){const F=Ki;$n();try{f&&f(),Ki=u;const I=[W,C===to?void 0:v&&C[0]===to?[]:C,h];C=W,l?l(t,3,I):t(...I)}finally{Ki=F,jn()}}}else u.run()};return a&&a(A),u=new Vf(d),u.scheduler=o?()=>o(A,!1):A,h=M=>Dm(M,!1,u),f=u.onStop=()=>{const M=Xo.get(u);if(M){if(l)l(M,4);else for(const W of M)W();Xo.delete(u)}},t?i?A(!0):C=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ui(n,t=1/0,e){if(t<=0||!ae(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ve(n))ui(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)ui(n[i],t,e);else if(cs(n)||Di(n))n.forEach(i=>{ui(i,t,e)});else if(Of(n)){for(const i in n)ui(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ui(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xr(n,t,e,i){try{return i?n(...i):n()}catch(s){ma(s,t,e)}}function Ln(n,t,e,i){if(Xt(n)){const s=Xr(n,t,e,i);return s&&Uf(s)&&s.catch(r=>{ma(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],t,e,i));return s}}function ma(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){$n(),Xr(r,null,10,[n,l,c]),jn();return}}Im(n,e,s,i,o)}function Im(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const je=[];let En=-1;const kn=[];let Ai=null,Os=0;const rh=Promise.resolve();let $o=null;function jc(n){const t=$o||rh;return n?t.then(this?n.bind(this):n):t}function Um(n){let t=En+1,e=je.length;for(;t<e;){const i=t+e>>>1,s=je[i],r=Or(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function qc(n){if(!(n.flags&1)){const t=Or(n),e=je[je.length-1];!e||!(n.flags&2)&&t>=Or(e)?je.push(n):je.splice(Um(t),0,n),n.flags|=1,oh()}}function oh(){$o||($o=rh.then(ch))}function Nm(n){if(!zt(n))Ai&&n.id===-1?Ai.splice(Os+1,0,n):n.flags&1||(kn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)kn.push(n[t]);oh()}function ah(n,t,e,i=En+1){for(;i<je.length;i++){const s=je[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;je.splice(i,1),i=n?i-1:En,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function lh(n,t,e=0){if(kn.length){let i=kn,s=0;if(t){i=[];for(let o=0;o<kn.length;o++){const a=kn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?kn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Or(o)-Or(a));if(kn.length=s,Ai){for(let o=0;o<r.length;o++)Ai.push(r[o]);return}for(Ai=r,Os=0;Os<Ai.length;Os++){const o=Ai[Os];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Ai=null,Os=0}}let Fa=!1;function Om(n,t){if(Fa){n();return}const e=t===void 0?void 0:new Set(kn);n(),Fa=!0;try{ah(void 0,t),lh(void 0,e,t)}finally{Fa=!1}}const Or=n=>n.id==null?n.flags&2?-1:1/0:n.id;function ch(n){try{for(En=0;En<je.length;En++){const t=je[En];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Xr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;En<je.length;En++){const t=je[En];t&&(t.flags&=-2)}En=-1,je.length=0,lh(),$o=null,(je.length||kn.length)&&ch()}}let cn=null,uh=null;function jo(n){const t=cn;return cn=n,uh=n&&n.type.__scopeId||null,t}function dh(n,t=cn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Zo(-1);const r=jo(t),o=ls.length;let a;try{a=n(...s)}finally{for(let l=ls.length;l>o;l--)Nh();jo(r),i._d&&Zo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function hn(n,t){if(cn===null)return n;const e=Sa(cn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=he]=t[s];r&&(Xt(r)&&(r={mounted:r,updated:r}),r.deep&&ui(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Hi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&($n(),Ln(l,e,8,[n.el,a,n,t]),jn())}}function Oo(n,t){if(ze){let e=ze.provides;const i=ze.parent&&ze.parent.provides;i===e&&(e=ze.provides=Object.create(i)),e[n]=t}}function Rn(n,t,e=!1){const i=Ug();if(i||Gs){let s=Gs?Gs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Xt(t)?t.call(i&&i.proxy):t}}const Fm=Symbol.for("v-scx"),Bm=()=>Rn(Fm);function Hs(n,t,e){return fh(n,t,e)}function fh(n,t,e=he){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ne({},e),l=t&&i||!t&&r!=="post";let c;if(zr){if(r==="sync"){const h=Bm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Wn,h.resume=Wn,h.pause=Wn,h}}const u=ze;a.call=(h,g,v)=>Ln(h,u,g,v);let d=!1;r==="post"?a.scheduler=h=>{h.i=u,en(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():qc(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Lm(n,t,a);return zr&&(c?c.push(f):l&&f()),f}function km(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?hh(i,n):()=>i[n]:n.bind(i,i);let r;Xt(t)?r=t:(r=t.handler,e=t);const o=$r(this),a=fh(s,r.bind(i),e);return o(),a}function hh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const zm=Symbol("_vte"),ga=n=>n.__isTeleport,Ba=Symbol("_leaveCb");function Vm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==In){t=e;break}}return t}function ph(n){if(!Yc(n))return ga(n.type)&&n.children?Vm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Xt(e.default))return e.default()}}function qo(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;qo(ga(e.type)&&ph(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Le&&zt(n.children)){const e=Sh(n.children,!1);e&&qo(e,t)}}function Ul(n){if(n.component)return Ul(n.component.subTree);if(n.type===Le){const t=zt(n.children)&&Sh(n.children,!1);return t?Ul(t):void 0}if(n.type!==In)return n}function Nn(n,t){return Xt(n)?Ne({name:n.name},t,{setup:n}):n}function mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const Yo=new WeakMap;function Rr(n,t,e,i,s=!1){if(zt(n)){n.forEach((v,m)=>Rr(v,t&&(zt(t)?t[m]:t),e,i,s));return}if(Pr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Sa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===he?a.refs={}:a.refs,d=a.setupState,f=re(d),h=d===he?If:v=>Pu(u,v)?!1:ee(f,v),g=(v,m)=>!(m&&Pu(u,m));if(c!=null&&c!==l){if(Du(t),be(c))u[c]=null,h(c)&&(d[c]=null);else if(Ve(c)){const v=t;g(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Xt(l))Xr(l,a,12,[o,u]);else{const v=be(l),m=Ve(l);if(v||m){const p=()=>{if(n.f){const C=v?h(l)?d[l]:u[l]:g()||!n.k?l.value:u[n.k];if(s)zt(C)&&Bc(C,r);else if(zt(C))C.includes(r)||C.push(r);else if(v)u[l]=[r],h(l)&&(d[l]=u[l]);else{const A=[r];g(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else v?(u[l]=o,h(l)&&(d[l]=o)):m&&(g(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{p(),Yo.delete(n)};C.id=-1,Yo.set(n,C),en(C,e)}else Du(n),p()}}}function Du(n){const t=Yo.get(n);t&&(t.flags|=8,Yo.delete(n))}ha().requestIdleCallback;ha().cancelIdleCallback;const Pr=n=>!!n.type.__asyncLoader,Yc=n=>n.type.__isKeepAlive;function Hm(n,t){gh(n,"a",t)}function Gm(n,t){gh(n,"da",t)}function gh(n,t,e=ze){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(_a(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Yc(s.parent.vnode)&&Wm(i,t,e,s),s=s.parent}}function Wm(n,t,e,i){const s=_a(t,n,i,!0);xa(()=>{Bc(i[t],s)},e)}function _a(n,t,e=ze,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{$n();const a=$r(e),l=Ln(t,e,n,o);return a(),jn(),l});return i?s.unshift(r):s.push(r),r}}const _i=n=>(t,e=ze)=>{(!zr||n==="sp")&&_a(n,(...i)=>t(...i),e)},Xm=_i("bm"),va=_i("m"),$m=_i("bu"),jm=_i("u"),qm=_i("bum"),xa=_i("um"),Ym=_i("sp"),Km=_i("rtg"),Zm=_i("rtc");function Jm(n,t=ze){_a("ec",n,t)}const Qm="components";function _h(n,t){return eg(Qm,n,!0,t)||n}const tg=Symbol.for("v-ndc");function eg(n,t,e=!0,i=!1){const s=cn||ze;if(s){const r=s.type;{const a=kg(r,!1);if(a&&(a===t||a===Ze(t)||a===da(Ze(t))))return r}const o=Lu(s[n]||r[n],t)||Lu(s.appContext[n],t);return!o&&i?r:o}}function Lu(n,t){return n&&(n[t]||n[Ze(t)]||n[da(Ze(t))])}function Bs(n,t,e,i){let s;const r=e,o=zt(n);if(o||be(n)){const a=o&&Li(n);let l=!1,c=!1;a&&(l=!mn(n),c=qn(n),n=pa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?Fi(_n(n[u])):_n(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ae(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Nl=n=>n?kh(n)?Sa(n):Nl(n.parent):null,Dr=Ne(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Nl(n.parent),$root:n=>Nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>xh(n),$forceUpdate:n=>n.f||(n.f=()=>{qc(n.update)}),$nextTick:n=>n.n||(n.n=jc.bind(n.proxy)),$watch:n=>km.bind(n)}),ka=(n,t)=>n!==he&&!n.__isScriptSetup&&ee(n,t),ng={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ka(i,t))return o[t]=1,i[t];if(s!==he&&ee(s,t))return o[t]=2,s[t];if(ee(r,t))return o[t]=3,r[t];if(e!==he&&ee(e,t))return o[t]=4,e[t];Ol&&(o[t]=0)}}const c=Dr[t];let u,d;if(c)return t==="$attrs"&&ke(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==he&&ee(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ee(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ka(s,t)?(s[t]=e,!0):i!==he&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==he&&a[0]!=="$"&&ee(n,a)||ka(t,a)||ee(r,a)||ee(i,a)||ee(Dr,a)||ee(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Iu(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Ol=!0;function ig(n){const t=xh(n),e=n.proxy,i=n.ctx;Ol=!1,t.beforeCreate&&Uu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:C,destroyed:A,unmounted:M,render:W,renderTracked:F,renderTriggered:I,errorCaptured:$,serverPrefetch:P,expose:w,inheritAttrs:O,components:ht,directives:nt,filters:tt}=t;if(c&&sg(c,i,null),o)for(const Y in o){const z=o[Y];Xt(z)&&(i[Y]=z.bind(e))}if(s){const Y=s.call(e,e);ae(Y)&&(n.data=qs(Y))}if(Ol=!0,r)for(const Y in r){const z=r[Y],lt=Xt(z)?z.bind(e,e):Xt(z.get)?z.get.bind(e,e):Wn,D=!Xt(z)&&Xt(z.set)?z.set.bind(e):Wn,T=Ye({get:lt,set:D});Object.defineProperty(i,Y,{enumerable:!0,configurable:!0,get:()=>T.value,set:ft=>T.value=ft})}if(a)for(const Y in a)vh(a[Y],i,e,Y);if(l){const Y=Xt(l)?l.call(e):l;Reflect.ownKeys(Y).forEach(z=>{Oo(z,Y[z])})}u&&Uu(u,n,"c");function st(Y,z){zt(z)?z.forEach(lt=>Y(lt.bind(e))):z&&Y(z.bind(e))}if(st(Xm,d),st(va,f),st($m,h),st(jm,g),st(Hm,v),st(Gm,m),st(Jm,$),st(Zm,F),st(Km,I),st(qm,C),st(xa,M),st(Ym,P),zt(w))if(w.length){const Y=n.exposed||(n.exposed={});w.forEach(z=>{Object.defineProperty(Y,z,{get:()=>e[z],set:lt=>e[z]=lt,enumerable:!0})})}else n.exposed||(n.exposed={});W&&n.render===Wn&&(n.render=W),O!=null&&(n.inheritAttrs=O),ht&&(n.components=ht),nt&&(n.directives=nt),P&&mh(n)}function sg(n,t,e=Wn){zt(n)&&(n=Fl(n));for(const i in n){const s=n[i];let r;ae(s)?"default"in s?r=Rn(s.from||i,s.default,!0):r=Rn(s.from||i):r=Rn(s),Ve(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Uu(n,t,e){Ln(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function vh(n,t,e,i){let s=i.includes(".")?hh(e,i):()=>e[i];if(be(n)){const r=t[n];Xt(r)&&Hs(s,r)}else if(Xt(n))Hs(s,n.bind(e));else if(ae(n))if(zt(n))n.forEach(r=>vh(r,t,e,i));else{const r=Xt(n.handler)?n.handler.bind(e):t[n.handler];Xt(r)&&Hs(s,r,n)}}function xh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>Ko(l,c,o,!0)),Ko(l,t,o)),ae(t)&&r.set(t,l),l}function Ko(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Ko(n,r,e,!0),s&&s.forEach(o=>Ko(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=rg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const rg={data:Nu,props:Ou,emits:Ou,methods:Mr,computed:Mr,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:Mr,directives:Mr,watch:ag,provide:Nu,inject:og};function Nu(n,t){return t?n?function(){return Ne(Xt(n)?n.call(this,this):n,Xt(t)?t.call(this,this):t)}:t:n}function og(n,t){return Mr(Fl(n),Fl(t))}function Fl(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Ge(n,t){return n?[...new Set([].concat(n,t))]:t}function Mr(n,t){return n?Ne(Object.create(null),n,t):t}function Ou(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:Ne(Object.create(null),Iu(n),Iu(t??{})):t}function ag(n,t){if(!n)return t;if(!t)return n;const e=Ne(Object.create(null),n);for(const i in t)e[i]=Ge(n[i],t[i]);return e}function yh(){return{app:null,config:{isNativeTag:If,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let lg=0;function cg(n,t){return function(i,s=null){Xt(i)||(i=Ne({},i)),s!=null&&!ae(s)&&(s=null);const r=yh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:lg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Vg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Xt(u.install)?(o.add(u),u.install(c,...d)):Xt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Ee(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Sa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Gs;Gs=c;try{return u()}finally{Gs=d}}};return c}}let Gs=null;const ug=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Ze(t)}Modifiers`]||n[`${hs(t)}Modifiers`];function dg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||he;let s=e;const r=t.startsWith("update:"),o=r&&ug(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>be(u)?u.trim():u)),o.number&&(s=s.map(fa)));let a,l=i[a=La(t)]||i[a=La(Ze(t))];!l&&r&&(l=i[a=La(hs(t))]),l&&Ln(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,s)}}const fg=new WeakMap;function Mh(n,t,e=!1){const i=e?fg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Xt(n)){const l=c=>{const u=Mh(c,t,!0);u&&(a=!0,Ne(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ae(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>o[l]=null):Ne(o,r),ae(n)&&i.set(n,o),o)}function ya(n,t){return!n||!la(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,hs(t))||ee(n,t))}function Fu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=n,m=jo(n);let p,C;try{if(e.shapeFlag&4){const M=s||i,W=M;p=zn(c.call(W,M,u,d,h,f,g)),C=a}else{const M=t;p=zn(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),C=t.props?a:hg(a)}}catch(M){ls.length=0,ma(M,n,1),p=Ee(In)}let A=p;if(C&&v!==!1){const M=Object.keys(C),{shapeFlag:W}=A;M.length&&W&7&&(r&&M.some(ca)&&(C=pg(C,r)),A=Ys(A,C,!1,!0))}if(e.dirs&&(A=Ys(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition){const M=ga(A.type)&&ph(A)||A;qo(M,e.transition)}return p=A,jo(m),p}function Sh(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Br(s)){if(s.type!==In||s.children==="v-if"){if(e)return;e=s}}else return}return e}const hg=n=>{let t;for(const e in n)(e==="class"||e==="style"||la(e))&&((t||(t={}))[e]=n[e]);return t},pg=(n,t)=>{const e={};for(const i in n)(!ca(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function mg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Bu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(bh(o,i,f)&&!ya(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Bu(i,o,c):!0:!!o;return!1}function Bu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ee(n,r)||bh(t,n,r)&&!ya(e,r))return!0}return!1}function bh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ae(i)&&ae(s)?!Oi(i,s):i!==s}function gg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Eh={},wh=()=>Object.create(Eh),Th=n=>Object.getPrototypeOf(n)===Eh;function _g(n,t,e,i=!1){const s={},r=wh();n.propsDefaults=Object.create(null),Ah(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:nh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function vg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=re(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ya(n.emitsOptions,f))continue;const h=t[f];if(l)if(ee(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const g=Ze(f);s[g]=Bl(l,a,g,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Ah(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ee(t,d)&&((u=hs(d))===d||!ee(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Bl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ee(t,d))&&(delete r[d],c=!0)}c&&ci(n.attrs,"set","")}function Ah(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Tr(l))continue;const c=t[l];let u;s&&ee(s,u=Ze(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ya(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=re(e),c=a||he;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Bl(s,l,d,c[d],n,!ee(c,d))}}return o}function Bl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Xt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=$r(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===hs(e))&&(i=!0))}return i}const xg=new WeakMap;function Ch(n,t,e=!1){const i=e?xg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Xt(n)){const u=d=>{l=!0;const[f,h]=Ch(d,t,!0);Ne(o,f),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ae(n)&&i.set(n,ns),ns;if(zt(r))for(let u=0;u<r.length;u++){const d=Ze(r[u]);ku(d)&&(o[d]=he)}else if(r)for(const u in r){const d=Ze(u);if(ku(d)){const f=r[u],h=o[d]=zt(f)||Xt(f)?{type:f}:Ne({},f),g=h.type;let v=!1,m=!0;if(zt(g))for(let p=0;p<g.length;++p){const C=g[p],A=Xt(C)&&C.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Xt(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||ee(h,"default"))&&a.push(d)}}const c=[o,a];return ae(n)&&i.set(n,c),c}function ku(n){return n[0]!=="$"&&!Tr(n)}const Kc=n=>n==="_"||n==="_ctx"||n==="$stable",Zc=n=>zt(n)?n.map(zn):[zn(n)],yg=(n,t,e)=>{if(t._n)return t;const i=dh((...s)=>Zc(t(...s)),e);return i._c=!1,i},Rh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Kc(s))continue;const r=n[s];if(Xt(r))t[s]=yg(s,r,i);else if(r!=null){const o=Zc(r);t[s]=()=>o}}},Ph=(n,t)=>{const e=Zc(t);n.slots.default=()=>e},Dh=(n,t,e)=>{for(const i in t)(e||!Kc(i))&&(n[i]=t[i])},Mg=(n,t,e)=>{const i=n.slots=wh();if(n.vnode.shapeFlag&32){const s=t._;s?(Dh(i,t,e),e&&Ff(i,"_",s,!0)):Rh(t,i)}else t&&Ph(n,t)},Sg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=he;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Dh(s,t,e):(r=!t.$stable,Rh(t,s)),o=t}else t&&(Ph(n,t),o={default:1});if(r)for(const a in s)!Kc(a)&&o[a]==null&&delete s[a]},en=Ag;function bg(n){return Eg(n)}function Eg(n,t){const e=ha();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Wn,insertStaticContent:g}=n,v=(S,R,U,x=null,Z=null,Q=null,rt=void 0,j=null,dt=!!R.dynamicChildren)=>{if(S===R)return;S&&!ur(S,R)&&(x=L(S),ft(S,Z,Q,!0),S=null),R.patchFlag===-2&&(dt=!1,R.dynamicChildren=null),R.dynamicChildren&&S&&S.dynamicChildren&&S.dynamicChildren.hasOnce&&(R.dynamicChildren===ns&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:H,ref:b,shapeFlag:_}=R;switch(H){case Ma:m(S,R,U,x);break;case In:p(S,R,U,x);break;case Fo:S==null&&C(R,U,x,rt);break;case Le:ht(S,R,U,x,Z,Q,rt,j,dt);break;default:_&1?W(S,R,U,x,Z,Q,rt,j,dt):_&6?nt(S,R,U,x,Z,Q,rt,j,dt):(_&64||_&128)&&H.process(S,R,U,x,Z,Q,rt,j,dt,et)}b!=null&&Z?Rr(b,S&&S.ref,Q,R||S,!R):b==null&&S&&S.ref!=null&&Rr(S.ref,null,Q,S,!0)},m=(S,R,U,x)=>{if(S==null)i(R.el=a(R.children),U,x);else{const Z=R.el=S.el;R.children!==S.children&&c(Z,R.children)}},p=(S,R,U,x)=>{S==null?i(R.el=l(R.children||""),U,x):R.el=S.el},C=(S,R,U,x)=>{[S.el,S.anchor]=g(S.children,R,U,x,S.el,S.anchor)},A=({el:S,anchor:R},U,x)=>{let Z;for(;S&&S!==R;)Z=f(S),i(S,U,x),S=Z;i(R,U,x)},M=({el:S,anchor:R})=>{let U;for(;S&&S!==R;)U=f(S),s(S),S=U;s(R)},W=(S,R,U,x,Z,Q,rt,j,dt)=>{if(R.type==="svg"?rt="svg":R.type==="math"&&(rt="mathml"),S==null)F(R,U,x,Z,Q,rt,j,dt);else{const H=S.el&&S.el._isVueCE?S.el:null;try{H&&H._beginPatch(),P(S,R,Z,Q,rt,j,dt)}finally{H&&H._endPatch()}}},F=(S,R,U,x,Z,Q,rt,j)=>{let dt,H;const{props:b,shapeFlag:_,transition:N,dirs:J}=S;if(dt=S.el=o(S.type,Q,b&&b.is,b),_&8?u(dt,S.children):_&16&&$(S.children,dt,null,x,Z,za(S,Q),rt,j),J&&Hi(S,null,x,"created"),I(dt,S,S.scopeId,rt,x),b){for(const it in b)it!=="value"&&!Tr(it)&&r(dt,it,null,b[it],Q,x);"value"in b&&r(dt,"value",null,b.value,Q),(H=b.onVnodeBeforeMount)&&Fn(H,x,S)}J&&Hi(S,null,x,"beforeMount");const ut=wg(Z,N);ut&&N.beforeEnter(dt),i(dt,R,U),((H=b&&b.onVnodeMounted)||ut||J)&&en(()=>{try{H&&Fn(H,x,S),ut&&N.enter(dt),J&&Hi(S,null,x,"mounted")}finally{}},Z)},I=(S,R,U,x,Z)=>{if(U&&h(S,U),x)for(let Q=0;Q<x.length;Q++)h(S,x[Q]);if(Z){let Q=Z.subTree;if(R===Q||Uh(Q.type)&&(Q.ssContent===R||Q.ssFallback===R)){const rt=Z.vnode;I(S,rt,rt.scopeId,rt.slotScopeIds,Z.parent)}}},$=(S,R,U,x,Z,Q,rt,j,dt=0)=>{for(let H=dt;H<S.length;H++){const b=S[H]=j?li(S[H]):zn(S[H]);v(null,b,R,U,x,Z,Q,rt,j)}},P=(S,R,U,x,Z,Q,rt)=>{const j=R.el=S.el;let{patchFlag:dt,dynamicChildren:H,dirs:b}=R;dt|=S.patchFlag&16;const _=S.props||he,N=R.props||he;let J;if(U&&Gi(U,!1),(J=N.onVnodeBeforeUpdate)&&Fn(J,U,R,S),b&&Hi(R,S,U,"beforeUpdate"),U&&Gi(U,!0),H&&(!S.dynamicChildren||S.dynamicChildren.length!==H.length)&&(dt=0,rt=!1,H=null),(_.innerHTML&&N.innerHTML==null||_.textContent&&N.textContent==null)&&u(j,""),H?w(S.dynamicChildren,H,j,U,x,za(R,Z),Q):rt||z(S,R,j,null,U,x,za(R,Z),Q,!1),dt>0){if(dt&16)O(j,_,N,U,Z);else if(dt&2&&_.class!==N.class&&r(j,"class",null,N.class,Z),dt&4&&r(j,"style",_.style,N.style,Z),dt&8){const ut=R.dynamicProps;for(let it=0;it<ut.length;it++){const St=ut[it],yt=_[St],Mt=N[St];(Mt!==yt||St==="value")&&r(j,St,yt,Mt,Z,U)}}dt&1&&S.children!==R.children&&u(j,R.children)}else!rt&&H==null&&O(j,_,N,U,Z);((J=N.onVnodeUpdated)||b)&&en(()=>{J&&Fn(J,U,R,S),b&&Hi(R,S,U,"updated")},x)},w=(S,R,U,x,Z,Q,rt)=>{for(let j=0;j<R.length;j++){const dt=S[j],H=R[j],b=dt.el||kl(dt),_=b&&(dt.type===Le||!ur(dt,H)||dt.shapeFlag&198)?d(b):U;v(dt,H,_,null,x,Z,Q,rt,!0)}},O=(S,R,U,x,Z)=>{if(R!==U){if(R!==he)for(const Q in R)!Tr(Q)&&!(Q in U)&&r(S,Q,R[Q],null,Z,x);for(const Q in U){if(Tr(Q))continue;const rt=U[Q],j=R[Q];rt!==j&&Q!=="value"&&r(S,Q,j,rt,Z,x)}"value"in U&&r(S,"value",R.value,U.value,Z)}},ht=(S,R,U,x,Z,Q,rt,j,dt)=>{const H=R.el=S?S.el:a(""),b=R.anchor=S?S.anchor:a("");let{patchFlag:_,dynamicChildren:N,slotScopeIds:J}=R;J&&(j=j?j.concat(J):J),S==null?(i(H,U,x),i(b,U,x),$(R.children||[],U,b,Z,Q,rt,j,dt)):_>0&&_&64&&N&&S.dynamicChildren&&S.dynamicChildren.length===N.length?(w(S.dynamicChildren,N,U,Z,Q,rt,j),(R.key!=null||Z&&R===Z.subTree)&&Lh(S,R,!0)):z(S,R,U,b,Z,Q,rt,j,dt)},nt=(S,R,U,x,Z,Q,rt,j,dt)=>{R.slotScopeIds=j,S==null?R.shapeFlag&512?Z.ctx.activate(R,U,x,rt,dt):tt(R,U,x,Z,Q,rt,dt):B(S,R,dt)},tt=(S,R,U,x,Z,Q,rt)=>{const j=S.component=Ig(S,x,Z);if(Yc(S)&&(j.ctx.renderer=et),Ng(j,!1,rt),j.asyncDep){if(Z&&Z.registerDep(j,st,rt,Q),!S.el){const dt=j.subTree=Ee(In);p(null,dt,R,U),S.placeholder=dt.el}}else st(j,S,R,U,Z,Q,rt)},B=(S,R,U)=>{const x=R.component=S.component;if(mg(S,R,U))if(x.asyncDep&&!x.asyncResolved){R.el=S.el,R.placeholder=S.placeholder,Y(x,R,U);return}else x.next=R,x.update();else R.el=S.el,R.placeholder=S.placeholder,x.vnode=R},st=(S,R,U,x,Z,Q,rt)=>{const j=()=>{if(S.isMounted){let{next:_,bu:N,u:J,parent:ut,vnode:it}=S;{const xt=Ih(S);if(xt){_&&(_.el=it.el,Y(S,_,rt)),xt.asyncDep.then(()=>{en(()=>{S.isUnmounted||H()},Z)});return}}let St=_,yt;Gi(S,!1),_?(_.el=it.el,Y(S,_,rt)):_=it,N&&No(N),(yt=_.props&&_.props.onVnodeBeforeUpdate)&&Fn(yt,ut,_,it),Gi(S,!0);const Mt=Fu(S),Ht=S.subTree;S.subTree=Mt,v(Ht,Mt,d(Ht.el),L(Ht),S,Z,Q),_.el=Mt.el,St===null&&gg(S,Mt.el),J&&en(J,Z),(yt=_.props&&_.props.onVnodeUpdated)&&en(()=>Fn(yt,ut,_,it),Z)}else{let _;const{el:N,props:J}=R,{bm:ut,m:it,parent:St,root:yt,type:Mt}=S,Ht=Pr(R);Gi(S,!1),ut&&No(ut),!Ht&&(_=J&&J.onVnodeBeforeMount)&&Fn(_,St,R),Gi(S,!0);{yt.ce&&yt.ce._hasShadowRoot()&&yt.ce._injectChildStyle(Mt,S.parent?S.parent.type:void 0);const xt=S.subTree=Fu(S);v(null,xt,U,x,S,Z,Q),R.el=xt.el}if(it&&en(it,Z),!Ht&&(_=J&&J.onVnodeMounted)){const xt=R;en(()=>Fn(_,St,xt),Z)}(R.shapeFlag&256||St&&Pr(St.vnode)&&St.vnode.shapeFlag&256)&&S.a&&en(S.a,Z),S.isMounted=!0,R=U=x=null}};S.scope.on();const dt=S.effect=new Vf(j);S.scope.off();const H=S.update=dt.run.bind(dt),b=S.job=dt.runIfDirty.bind(dt);b.i=S,b.id=S.uid,dt.scheduler=()=>qc(b),Gi(S,!0),H()},Y=(S,R,U)=>{R.component=S;const x=S.vnode.props;S.vnode=R,S.next=null,vg(S,R.props,x,U),Sg(S,R.children,U),$n(),ah(S),jn()},z=(S,R,U,x,Z,Q,rt,j,dt=!1)=>{const H=S&&S.children,b=S?S.shapeFlag:0,_=R.children,{patchFlag:N,shapeFlag:J}=R;if(N>0){if(N&128){D(H,_,U,x,Z,Q,rt,j,dt);return}else if(N&256){lt(H,_,U,x,Z,Q,rt,j,dt);return}}J&8?(b&16&&gt(H,Z,Q),_!==H&&u(U,_)):b&16?J&16?D(H,_,U,x,Z,Q,rt,j,dt):gt(H,Z,Q,!0):(b&8&&u(U,""),J&16&&$(_,U,x,Z,Q,rt,j,dt))},lt=(S,R,U,x,Z,Q,rt,j,dt)=>{S=S||ns,R=R||ns;const H=S.length,b=R.length,_=Math.min(H,b);let N;for(N=0;N<_;N++){const J=R[N]=dt?li(R[N]):zn(R[N]);v(S[N],J,U,null,Z,Q,rt,j,dt)}H>b?gt(S,Z,Q,!0,!1,_):$(R,U,x,Z,Q,rt,j,dt,_)},D=(S,R,U,x,Z,Q,rt,j,dt)=>{let H=0;const b=R.length;let _=S.length-1,N=b-1;for(;H<=_&&H<=N;){const J=S[H],ut=R[H]=dt?li(R[H]):zn(R[H]);if(ur(J,ut))v(J,ut,U,null,Z,Q,rt,j,dt);else break;H++}for(;H<=_&&H<=N;){const J=S[_],ut=R[N]=dt?li(R[N]):zn(R[N]);if(ur(J,ut))v(J,ut,U,null,Z,Q,rt,j,dt);else break;_--,N--}if(H>_){if(H<=N){const J=N+1,ut=J<b?R[J].el:x;for(;H<=N;)v(null,R[H]=dt?li(R[H]):zn(R[H]),U,ut,Z,Q,rt,j,dt),H++}}else if(H>N)for(;H<=_;)ft(S[H],Z,Q,!0),H++;else{const J=H,ut=H,it=new Map;for(H=ut;H<=N;H++){const Lt=R[H]=dt?li(R[H]):zn(R[H]);Lt.key!=null&&it.set(Lt.key,H)}let St,yt=0;const Mt=N-ut+1;let Ht=!1,xt=0;const At=new Array(Mt);for(H=0;H<Mt;H++)At[H]=0;for(H=J;H<=_;H++){const Lt=S[H];if(yt>=Mt){ft(Lt,Z,Q,!0);continue}let Tt;if(Lt.key!=null)Tt=it.get(Lt.key);else for(St=ut;St<=N;St++)if(At[St-ut]===0&&ur(Lt,R[St])){Tt=St;break}Tt===void 0?ft(Lt,Z,Q,!0):(At[Tt-ut]=H+1,Tt>=xt?xt=Tt:Ht=!0,v(Lt,R[Tt],U,null,Z,Q,rt,j,dt),yt++)}const Bt=Ht?Tg(At):ns;for(St=Bt.length-1,H=Mt-1;H>=0;H--){const Lt=ut+H,Tt=R[Lt],Jt=R[Lt+1],$t=Lt+1<b?Jt.el||kl(Jt):x;At[H]===0?v(null,Tt,U,$t,Z,Q,rt,j,dt):Ht&&(St<0||H!==Bt[St]?T(Tt,U,$t,2):St--)}}},T=(S,R,U,x,Z=null)=>{const{el:Q,type:rt,transition:j,children:dt,shapeFlag:H}=S;if(H&6){T(S.component.subTree,R,U,x);return}if(H&128){S.suspense.move(R,U,x);return}if(H&64){rt.move(S,R,U,et);return}if(rt===Le){i(Q,R,U);for(let _=0;_<dt.length;_++)T(dt[_],R,U,x);i(S.anchor,R,U);return}if(rt===Fo){A(S,R,U);return}if(x!==2&&H&1&&j)if(x===0)j.persisted&&!Q[Ba]?i(Q,R,U):(j.beforeEnter(Q),i(Q,R,U),en(()=>j.enter(Q),Z));else{const{leave:_,delayLeave:N,afterLeave:J}=j,ut=()=>{S.ctx.isUnmounted?s(Q):i(Q,R,U)},it=()=>{const St=Q._isLeaving||!!Q[Ba];Q._isLeaving&&Q[Ba](!0),j.persisted&&!St?ut():_(Q,()=>{ut(),J&&J()})};N?N(Q,ut,it):it()}else i(Q,R,U)},ft=(S,R,U,x=!1,Z=!1)=>{const{type:Q,props:rt,ref:j,children:dt,dynamicChildren:H,shapeFlag:b,patchFlag:_,dirs:N,cacheIndex:J,memo:ut}=S;if((_===-2||H&&H.hasOnce)&&(Z=!1),j!=null&&($n(),Rr(j,null,U,S,!0),jn()),J!=null&&(!S.ctx||S.ctx===R)&&(R.renderCache[J]=void 0),b&256){R.ctx.deactivate(S);return}const it=b&1&&N,St=!Pr(S);let yt;if(St&&(yt=rt&&rt.onVnodeBeforeUnmount)&&Fn(yt,R,S),b&6)ct(S.component,U,x);else{if(b&128){S.suspense.unmount(U,x);return}it&&Hi(S,null,R,"beforeUnmount"),b&64?S.type.remove(S,R,U,et,x):H&&!H.hasOnce&&(Q!==Le||_>0&&_&64)?gt(H,R,U,!1,!0):(Q===Le&&_&384||!Z&&b&16)&&gt(dt,R,U),x&&vt(S)}const Mt=ut!=null&&J==null;(St&&(yt=rt&&rt.onVnodeUnmounted)||it||Mt)&&en(()=>{yt&&Fn(yt,R,S),it&&Hi(S,null,R,"unmounted"),Mt&&(S.el=null)},U)},vt=S=>{const{type:R,el:U,anchor:x,transition:Z}=S,Q=R===Le;if(Q&&!Z){q(U,x);return}if(R===Fo){M(S),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave();return}const rt=Q?Ul(S):S,j=()=>{Q?d(U)&&q(U,x):s(U),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(rt&&rt.shapeFlag&1&&Z&&!Z.persisted){const{leave:dt,delayLeave:H}=Z,b=rt.el,_=()=>dt(b,j);H?H(b,j,_):_()}else j()},q=(S,R)=>{let U;for(;S!==R;)U=f(S),s(S),S=U;s(R)},ct=(S,R,U)=>{const{bum:x,scope:Z,job:Q,subTree:rt,um:j,m:dt,a:H}=S;zu(dt),zu(H),x&&No(x),Z.stop(),Q?(Q.flags|=8,ft(rt,S,R,U)):S.vnode.el&&rt&&(rt.transition=S.vnode.transition,ft(rt,S,R,U)),j&&en(j,R),en(()=>{S.isUnmounted=!0},R)},gt=(S,R,U,x=!1,Z=!1,Q=0)=>{for(let rt=Q;rt<S.length;rt++)ft(S[rt],R,U,x,Z)},L=S=>{if(S.shapeFlag&6)return L(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const R=f(S.anchor||S.el),U=R&&R[zm];return U?f(U):R},K=(S,R,U)=>{const x=S&&R._vnode?void 0:S&&S.component?S.component.uid:Lg();Om(()=>{S==null?R._vnode&&ft(R._vnode,null,null,!0):v(R._vnode||null,S,R,null,null,null,U),R._vnode=S},x)},et={p:v,um:ft,m:T,r:vt,mt:tt,mc:$,pc:z,pbc:w,n:L,o:n};return{render:K,hydrate:void 0,createApp:cg(K)}}function za({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function wg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Lh(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=li(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Lh(o,a)),a.type===Ma&&(a.patchFlag===-1&&(a=s[r]=li(a)),a.el=o.el),a.type===In&&!a.el&&(a.el=o.el)}}function Tg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Ih(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ih(t)}function zu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function kl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?kl(t.subTree):null}const Uh=n=>n.__isSuspense;function Ag(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):Nm(n)}const Le=Symbol.for("v-fgt"),Ma=Symbol.for("v-txt"),In=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),ls=[];let un=null;function Ft(n=!1){ls.push(un=n?null:[])}function Nh(){ls.pop(),un=ls[ls.length-1]||null}let Fr=1;function Zo(n,t=!1){Fr+=n,n<0&&un&&t&&(un.hasOnce=!0)}function Oh(n){return n.dynamicChildren=Fr>0?un||ns:null,Nh(),Fr>0&&un&&un.push(n),n}function kt(n,t,e,i,s,r){return Oh(y(n,t,e,i,s,r,!0))}function Jc(n,t,e,i,s){return Oh(Ee(n,t,e,i,s,!0))}function Br(n){return n?n.__v_isVNode===!0:!1}function ur(n,t){return n.type===t.type&&n.key===t.key}const Fh=({key:n})=>n??null,Bo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||Ve(n)||Xt(n)?{i:cn,r:n,k:t,f:!!e}:n:null);function y(n,t=null,e=null,i=0,s=null,r=n===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Fh(t),ref:t&&Bo(t),scopeId:uh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:cn};return a?(Jo(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),Fr>0&&!o&&un&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&un.push(l),l}const Ee=Cg;function Cg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===tg)&&(n=In),Br(n)){const a=Ys(n,t,!0);return e&&Jo(a,e),Fr>0&&!r&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag=-2,a}if(zg(n)&&(n=n.__vccOpts),t){t=Rg(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=ye(a)),ae(l)&&($c(l)&&!zt(l)&&(l=Ne({},l)),t.style=Wr(l))}const o=be(n)?1:Uh(n)?128:ga(n)?64:ae(n)?4:Xt(n)?2:0;return y(n,t,e,i,s,o,r,!0)}function Rg(n){return n?$c(n)||Th(n)?Ne({},n):n:null}function Ys(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Pg(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Fh(c),ref:t&&t.ref?e&&r?zt(r)?r.concat(Bo(t)):[r,Bo(t)]:Bo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Le?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Ys(n.ssContent),ssFallback:n.ssFallback&&Ys(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&qo(u,l.clone(u)),u}function Zt(n=" ",t=0){return Ee(Ma,null,n,t)}function Bi(n,t){const e=Ee(Fo,null,n);return e.staticCount=t,e}function fi(n="",t=!1){return t?(Ft(),Jc(In,null,n)):Ee(In,null,n)}function zn(n){return n==null||typeof n=="boolean"?Ee(In):zt(n)?Ee(Le,null,n.slice()):Br(n)?li(n):Ee(Ma,null,String(n))}function li(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Ys(n)}function Jo(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Jo(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Th(t)?t._ctx=cn:s===3&&cn&&(cn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Xt(t)){if(i&65){Jo(n,{default:t});return}t={default:t,_ctx:cn},e=32}else t=String(t),i&64?(e=16,t=[Zt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Pg(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ye([t.class,i.class]));else if(s==="style")t.style=Wr([t.style,i.style]);else if(la(s)){const r=t[s],o=i[s];o&&r!==o&&!(zt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ca(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Fn(n,t,e,i=null){Ln(n,t,7,[e,i])}const Dg=yh();let Bh=0;function Lg(){return Bh}function Ig(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Dg,r={uid:Bh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ch(i,s),emitsOptions:Mh(i,s),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=dg.bind(null,r),n.ce&&n.ce(r),r}let ze=null;const Ug=()=>ze||cn;let Qo,kr;{const n=ha(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Qo=t("__VUE_INSTANCE_SETTERS__",e=>ze=e),kr=t("__VUE_SSR_SETTERS__",e=>zr=e)}const $r=n=>{const t=ze;return Qo(n),n.scope.on(),()=>{n.scope.off(),Qo(t)}},Vu=()=>{ze&&ze.scope.off(),Qo(null)};function kh(n){return n.vnode.shapeFlag&4}let zr=!1;function Ng(n,t=!1,e=!1){t&&kr(t);const{props:i,children:s}=n.vnode,r=kh(n);_g(n,i,r,t),Mg(n,s,e||t);const o=r?Og(n,t):void 0;return t&&kr(!1),o}function Og(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ng);const{setup:i}=e;if(i){$n();const s=n.setupContext=i.length>1?Bg(n):null,r=$r(n),o=Xr(i,n,0,[n.props,s]),a=Uf(o);if(jn(),r(),(a||n.sp)&&!Pr(n)&&mh(n),a){if(o.then(Vu,Vu),t)return o.then(l=>{kr(!0);try{Hu(n,l,t)}finally{kr(!1)}}).catch(l=>{ma(l,n,0)});n.asyncDep=o}else Hu(n,o)}else zh(n)}function Hu(n,t,e){Xt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=sh(t)),zh(n)}function zh(n,t,e){const i=n.type;n.render||(n.render=i.render||Wn);{const s=$r(n);$n();try{ig(n)}finally{jn(),s()}}}const Fg={get(n,t){return ke(n,"get",""),n[t]}};function Bg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Fg),slots:n.slots,emit:n.emit,expose:t}}function Sa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(sh(wm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Dr)return Dr[e](n)},has(t,e){return e in t||e in Dr}})):n.proxy}function kg(n,t=!0){return Xt(n)?n.displayName||n.name:n.name||t&&n.__name}function zg(n){return Xt(n)&&"__vccOpts"in n}const Ye=(n,t)=>Pm(n,t,zr);function Vh(n,t,e){try{Zo(-1);const i=arguments.length;return i===2?ae(t)&&!zt(t)?Br(t)?Ee(n,null,[t]):Ee(n,t):Ee(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Br(e)&&(e=[e]),Ee(n,t,e))}finally{Zo(1)}}const Vg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zl;const Gu=typeof window<"u"&&window.trustedTypes;if(Gu)try{zl=Gu.createPolicy("vue",{createHTML:n=>n})}catch{}const Hh=zl?n=>zl.createHTML(n):n=>n,Hg="http://www.w3.org/2000/svg",Gg="http://www.w3.org/1998/Math/MathML",ai=typeof document<"u"?document:null,Wu=ai&&ai.createElement("template"),Wg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ai.createElementNS(Hg,n):t==="mathml"?ai.createElementNS(Gg,n):e?ai.createElement(n,{is:e}):ai.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ai.createTextNode(n),createComment:n=>ai.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ai.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Wu.innerHTML=Hh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Wu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Xg=Symbol("_vtc");function $g(n,t,e){const i=n[Xg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Xu=Symbol("_vod"),jg=Symbol("_vsh"),qg=Symbol(""),Yg=/(?:^|;)\s*display\s*:/;function Kg(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Sr(i,a,"")}else for(const o in t)e[o]==null&&Sr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Jg(n,o,!be(t)&&t?t[o]:void 0,a)||Sr(i,o,a):Sr(i,o,"")}}else if(s){if(t!==e){const o=i[qg];o&&(e+=";"+o),i.cssText=e,r=Yg.test(e)}}else t&&n.removeAttribute("style");Xu in n&&((!s||t!==e)&&(n[Xu]=r?i.display:""),n[jg]&&(i.display="none"))}const eo=/\s*!important$/;function Sr(n,t,e){if(zt(e))e.forEach(i=>Sr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))eo.test(e)?n.setProperty(t,e.replace(eo,""),"important"):n.setProperty(t,e);else{const i=Zg(n,t);eo.test(e)?n.setProperty(hs(i),e.replace(eo,""),"important"):n[i]=e}}const $u=["Webkit","Moz","ms"],Va={};function Zg(n,t){const e=Va[t];if(e)return e;let i=Ze(t);if(i!=="filter"&&i in n)return Va[t]=i;i=da(i);for(let s=0;s<$u.length;s++){const r=$u[s]+i;if(r in n)return Va[t]=r}return t}function Jg(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const ju="http://www.w3.org/1999/xlink";function qu(n,t,e,i,s,r=im(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(ju,t.slice(6,t.length)):n.setAttributeNS(ju,t,e):e==null||r&&!Bf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Xn(e)?String(e):e)}function Yu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Hh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Bf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function Ji(n,t,e,i){n.addEventListener(t,e,i)}function Qg(n,t,e,i){n.removeEventListener(t,e,i)}const Ku=Symbol("_vei");function t0(n,t,e,i,s=null){const r=n[Ku]||(n[Ku]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=i0(t);if(i){const c=r[t]=o0(i,s);Ji(n,a,c,l)}else o&&(Qg(n,a,o,l),r[t]=void 0)}}const e0=/(Once|Passive|Capture)$/,n0=/^on:?(?:Once|Passive|Capture)$/;function i0(n){let t,e;for(;(e=n.match(e0))&&!n0.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):hs(n.slice(2)),t]}let Ha=0;const s0=Promise.resolve(),r0=()=>Ha||(s0.then(()=>Ha=0),Ha=Date.now());function o0(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(zt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Ln(c,t,5,a)}}else Ln(s,t,5,[i])};return e.value=n,e.attached=r0(),e}const Zu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,a0=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?$g(n,i,o):t==="style"?Kg(n,e,i):la(t)?ca(t)||t0(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):l0(n,t,i,o))?(Yu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qu(n,t,i,o,r,t!=="value")):n._isVueCE&&(c0(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?Yu(n,Ze(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),qu(n,t,i,o))};function l0(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Zu(t)&&Xt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zu(t)&&be(e)?!1:t in n}function c0(n,t){const e=n._def.props;if(!e)return!1;const i=Ze(t);return Array.isArray(e)?e.some(s=>Ze(s)===i):Object.keys(e).some(s=>Ze(s)===i)}const ta=n=>{const t=n.props["onUpdate:modelValue"]||!1;return zt(t)?e=>No(t,e):t};function u0(n){n.target.composing=!0}function Ju(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const is=Symbol("_assign"),no=Symbol("_initialValue");function Ga(n,t,e){return t&&(n=n.trim()),e&&(n=fa(n)),n}const Qn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[no]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[no]=n.defaultValue.replace(/\r\n?/g,`
`))),n[is]=ta(s);const r=i||s.props&&s.props.type==="number";Ji(n,t?"change":"input",o=>{o.target.composing||n[is](Ga(n.value,e,r))}),(e||r)&&Ji(n,"change",()=>{n.value=Ga(n.value,e,r)}),t||(Ji(n,"compositionstart",u0),Ji(n,"compositionend",Ju),Ji(n,"change",Ju))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[no];delete n[no],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[is](Ga(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[is]=ta(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?fa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Vl={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,Ji(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?fa(ea(l)):ea(l)),r=n.multiple,o=r?cs(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?zt(o)?s.slice():s:o];try{n[is](o)}finally{jc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[is]=ta(i)},mounted(n,{value:t}){Qu(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[is]=ta(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!d0(t,e[1],e[0]))&&Qu(n,t)}};function d0(n,t,e){if(!e||zt(n))return Oi(n,t);if(cs(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function Qu(n,t){const e=n.multiple,i=zt(t);if(!(e&&!i&&!cs(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=ea(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=om(t,a)>-1}else o.selected=t.has(a);else if(Oi(ea(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function ea(n){return"_value"in n?n._value:n.value}const f0=Ne({patchProp:a0},Wg);let td;function h0(){return td||(td=bg(f0))}const p0=(...n)=>{const t=h0().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=g0(i);if(!s)return;const r=t._component;!Xt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,m0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function m0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function g0(n){return be(n)?document.querySelector(n):n}const Gh=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},_0={};function v0(n,t){const e=_h("router-view");return Ft(),Jc(e)}const x0=Gh(_0,[["render",v0]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Fs=typeof document<"u";function Wh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function y0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Wh(n.default)}const se=Object.assign;function Wa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Un(s)?s.map(n):n(s)}return e}const Lr=()=>{},Un=Array.isArray;function ed(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Xh=/#/g,M0=/&/g,S0=/\//g,b0=/=/g,E0=/\?/g,$h=/\+/g,w0=/%5B/g,T0=/%5D/g,jh=/%5E/g,A0=/%60/g,qh=/%7B/g,C0=/%7C/g,Yh=/%7D/g,R0=/%20/g;function Qc(n){return n==null?"":encodeURI(""+n).replace(C0,"|").replace(w0,"[").replace(T0,"]")}function P0(n){return Qc(n).replace(qh,"{").replace(Yh,"}").replace(jh,"^")}function Hl(n){return Qc(n).replace($h,"%2B").replace(R0,"+").replace(Xh,"%23").replace(M0,"%26").replace(A0,"`").replace(qh,"{").replace(Yh,"}").replace(jh,"^")}function D0(n){return Hl(n).replace(b0,"%3D")}function L0(n){return Qc(n).replace(Xh,"%23").replace(E0,"%3F")}function I0(n){return L0(n).replace(S0,"%2F")}function Vr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const U0=/\/$/,N0=n=>n.replace(U0,"");function Xa(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=k0(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Vr(o)}}function O0(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function nd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function F0(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Ks(t.matched[i],e.matched[s])&&Kh(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Ks(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function Kh(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!B0(n[e],t[e]))return!1;return!0}function B0(n,t){return Un(n)?id(n,t):Un(t)?id(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function id(n,t){return Un(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function k0(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const yi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Gl=function(n){return n.pop="pop",n.push="push",n}({}),$a=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function z0(n){if(!n)if(Fs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),N0(n)}const V0=/^[^#]+#/;function H0(n,t){return n.replace(V0,"#")+t}function G0(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function W0(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=G0(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function sd(n,t){return(history.state?history.state.position-t:-1)+n}const Wl=new Map;function X0(n,t){Wl.set(n,t)}function $0(n){const t=Wl.get(n);return Wl.delete(n),t}function j0(n){return typeof n=="string"||n&&typeof n=="object"}function Zh(n){return typeof n=="string"||typeof n=="symbol"}let Se=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const Jh=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function Zs(n,t){return se(new Error,{type:n,[Jh]:!0},t)}function ti(n,t){return n instanceof Error&&Jh in n&&(t==null||!!(n.type&t))}const q0=["params","query","hash"];function Y0(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of q0)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function K0(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace($h," "),r=s.indexOf("="),o=Vr(r<0?s:s.slice(0,r)),a=r<0?null:Vr(s.slice(r+1));if(o in t){let l=t[o];Un(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function rd(n){let t="";for(let e in n){const i=n[e];if(e=D0(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Un(i)?i.map(s=>s&&Hl(s)):[i&&Hl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function Z0(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Un(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const J0=Symbol(""),od=Symbol(""),Ea=Symbol(""),tu=Symbol(""),Xl=Symbol("");function dr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Ci(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Zs(Se.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):j0(f)?l(Zs(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function ja(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Wh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ci(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=y0(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Ci(f,e,i,o,a,s)()}))}}return r}function Q0(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Ks(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Ks(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let t_=()=>location.protocol+"//"+location.host;function Qh(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),nd(a,"")}return nd(e,n)+i+s}function e_(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=Qh(n,location),g=e.value,v=t.value;let m=0;if(f){if(e.value=h,t.value=f,o&&o===g){o=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(e.value,g,{delta:m,type:Gl.pop,direction:m?m>0?$a.forward:$a.back:$a.unknown})})};function l(){o=e.value}function c(f){s.push(f);const h=()=>{const g=s.indexOf(f);g>-1&&s.splice(g,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(se({},f.state,{scroll:ba()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function ad(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?ba():null}}function n_(n){const{history:t,location:e}=window,i={value:Qh(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:t_()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),e[u?"replace":"assign"](f)}}function o(l,c){r(l,se({},t.state,ad(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=se({},s.value,t.state,{forward:l,scroll:ba()});r(u.current,u,!0),r(l,se({},ad(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function i_(n){n=z0(n);const t=n_(n),e=e_(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=se({location:"",base:n,go:i,createHref:H0.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function s_(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),i_(n)}let ss=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ce=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ce||{});const r_={type:ss.Static,value:""},o_=/[a-zA-Z0-9_]/;function a_(n){if(!n)return[[]];if(n==="/")return[[r_]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=Ce.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ce.Static?r.push({type:ss.Static,value:c}):e===Ce.Param||e===Ce.ParamRegExp||e===Ce.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ss.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ce.ParamRegExp){i=e,e=Ce.EscapeNext;continue}switch(e){case Ce.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ce.Param):f();break;case Ce.EscapeNext:f(),e=i;break;case Ce.Param:l==="("?e=Ce.ParamRegExp:o_.test(l)?f():(d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ce.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ce.ParamRegExpEnd:u+=l;break;case Ce.ParamRegExpEnd:d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const ld="[^/]+?",l_={sensitive:!1,strict:!1,start:!0,end:!0};var Xe=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Xe||{});const c_=/[.+*?^${}()[\]/\\]/g;function u_(n,t){const e=se({},l_,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Xe.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Xe.Segment+(e.sensitive?Xe.BonusCaseSensitive:0);if(f.type===ss.Static)d||(s+="/"),s+=f.value.replace(c_,"\\$&"),h+=Xe.Static;else if(f.type===ss.Param){const{value:g,repeatable:v,optional:m,regexp:p}=f;r.push({name:g,repeatable:v,optional:m});const C=p||ld;if(C!==ld){h+=Xe.BonusCustomRegExp;try{`${C}`}catch(M){throw new Error(`Invalid custom RegExp for param "${g}" (${C}): `+M.message)}}let A=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,h+=Xe.Dynamic,m&&(h+=Xe.BonusOptional),v&&(h+=Xe.BonusRepeatable),C===".*"&&(h+=Xe.BonusWildcard)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Xe.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=r[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===ss.Static)u+=h.value;else if(h.type===ss.Param){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Un(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const C=Un(p)?p.join("/"):p;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function d_(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Xe.Static+Xe.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Xe.Static+Xe.Segment?1:-1:0}function tp(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=d_(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(cd(i))return 1;if(cd(s))return-1}return s.length-i.length}function cd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const f_={strict:!1,end:!0,sensitive:!1};function h_(n,t,e){const i=u_(a_(n.path),e),s=se(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function p_(n,t){const e=[],i=new Map;t=ed(f_,t);function s(d){return i.get(d)}function r(d,f,h){const g=!h,v=dd(d);v.aliasOf=h&&h.record;const m=ed(t,d),p=[v];if("alias"in d){const M=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of M)p.push(dd(se({},v,{components:h?h.record.components:v.components,path:W,aliasOf:h?h.record:v})))}let C,A;for(const M of p){const{path:W}=M;if(f&&W[0]!=="/"){const F=f.record.path,I=F[F.length-1]==="/"?"":"/";M.path=f.record.path+(W&&I+W)}if(C=h_(M,f,m),h?h.alias.push(C):(A=A||C,A!==C&&A.alias.push(C),g&&d.name&&!fd(C)&&o(d.name)),ep(C)&&l(C),v.children){const F=v.children;for(let I=0;I<F.length;I++)r(F[I],C,h&&h.children[I])}h=h||C}return A?()=>{o(A)}:Lr}function o(d){if(Zh(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=__(d,e);e.splice(f,0,d),d.record.name&&!fd(d)&&i.set(d.record.name,d)}function c(d,f){let h,g={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Zs(Se.MATCHER_NOT_FOUND,{location:d});m=h.record.name,g=se(ud(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&ud(d.params,h.keys.map(A=>A.name))),v=h.stringify(g)}else if(d.path!=null)v=d.path,h=e.find(A=>A.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):e.find(A=>A.re.test(f.path)),!h)throw Zs(Se.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,g=se({},f.params,d.params),v=h.stringify(g)}const p=[];let C=h;for(;C;)p.unshift(C.record),C=C.parent;return{name:m,path:v,params:g,matched:p,meta:g_(p)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function ud(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function dd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:m_(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function m_(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function fd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function g_(n){return n.reduce((t,e)=>se(t,e.meta),{})}function __(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;tp(n,t[r])<0?i=r:e=r+1}const s=v_(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function v_(n){let t=n;for(;t=t.parent;)if(ep(t)&&tp(n,t)===0)return t}function ep({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function hd(n){const t=Rn(Ea),e=Rn(tu),i=Ye(()=>{const l=$e(n.to);return t.resolve(l)}),s=Ye(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(Ks.bind(null,u));if(f>-1)return f;const h=pd(l[c-2]);return c>1&&pd(u)===h&&d[d.length-1].path!==h?d.findIndex(Ks.bind(null,l[c-2])):f}),r=Ye(()=>s.value>-1&&b_(e.params,i.value.params)),o=Ye(()=>s.value>-1&&s.value===e.matched.length-1&&Kh(e.params,i.value.params));function a(l={}){if(S_(l)){const c=t[$e(n.replace)?"replace":"push"]($e(n.to)).catch(Lr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ye(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function x_(n){return n.length===1?n[0]:n}const y_=Nn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hd,setup(n,{slots:t}){const e=qs(hd(n)),{options:i}=Rn(Ea),s=Ye(()=>({[md(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[md(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&x_(t.default(e));return n.custom?r:Vh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),M_=y_;function S_(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function b_(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Un(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function pd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const md=(n,t,e)=>n??t??e,E_=Nn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Rn(Xl),s=Ye(()=>n.route||i.value),r=Rn(od,0),o=Ye(()=>{let c=$e(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ye(()=>s.value.matched[o.value]);Oo(od,Ye(()=>o.value+1)),Oo(J0,a),Oo(Xl,s);const l=Te();return Hs(()=>[l.value,a.value,n.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ks(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return gd(e.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Vh(f,se({},g,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return gd(e.default,{Component:m,route:c})||m}}});function gd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const w_=E_;function T_(n){const t=p_(n.routes,n),e=n.parseQuery||K0,i=n.stringifyQuery||rd,s=n.history,r=dr(),o=dr(),a=dr(),l=Tm(yi);let c=yi;Fs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Wa.bind(null,L=>""+L),d=Wa.bind(null,I0),f=Wa.bind(null,Vr);function h(L,K){let et,mt;return Zh(L)?(et=t.getRecordMatcher(L),mt=K):mt=L,t.addRoute(mt,et)}function g(L){const K=t.getRecordMatcher(L);K&&t.removeRoute(K)}function v(){return t.getRoutes().map(L=>L.record)}function m(L){return!!t.getRecordMatcher(L)}function p(L,K){if(K=se({},K||l.value),typeof L=="string"){const x=Xa(e,L,K.path),Z=t.resolve({path:x.path},K),Q=s.createHref(x.fullPath);return se(x,Z,{params:f(Z.params),hash:Vr(x.hash),redirectedFrom:void 0,href:Q})}let et;if(L.path!=null)et=se({},L,{path:Xa(e,L.path,K.path).path});else{const x=se({},L.params);for(const Z in x)x[Z]==null&&delete x[Z];et=se({},L,{params:d(x)}),K.params=d(K.params)}const mt=t.resolve(et,K),S=L.hash||"";mt.params=u(f(mt.params));const R=O0(i,se({},L,{hash:P0(S),path:mt.path})),U=s.createHref(R);return se({fullPath:R,hash:S,query:i===rd?Z0(L.query):L.query||{}},mt,{redirectedFrom:void 0,href:U})}function C(L){return typeof L=="string"?Xa(e,L,l.value.path):se({},L)}function A(L,K){if(c!==L)return Zs(Se.NAVIGATION_CANCELLED,{from:K,to:L})}function M(L){return I(L)}function W(L){return M(se(C(L),{replace:!0}))}function F(L,K){const et=L.matched[L.matched.length-1];if(et&&et.redirect){const{redirect:mt}=et;let S=typeof mt=="function"?mt(L,K):mt;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=C(S):{path:S},S.params={}),se({query:L.query,hash:L.hash,params:S.path!=null?{}:L.params},S)}}function I(L,K){const et=c=p(L),mt=l.value,S=L.state,R=L.force,U=L.replace===!0,x=F(et,mt);if(x)return I(se(C(x),{state:typeof x=="object"?se({},S,x.state):S,force:R,replace:U}),K||et);const Z=et;Z.redirectedFrom=K;let Q;return!R&&F0(i,mt,et)&&(Q=Zs(Se.NAVIGATION_DUPLICATED,{to:Z,from:mt}),T(mt,mt,!0,!1)),(Q?Promise.resolve(Q):w(Z,mt)).catch(rt=>ti(rt)?ti(rt,Se.NAVIGATION_GUARD_REDIRECT)?rt:D(rt):z(rt,Z,mt)).then(rt=>{if(rt){if(ti(rt,Se.NAVIGATION_GUARD_REDIRECT))return I(se({replace:U},C(rt.to),{state:typeof rt.to=="object"?se({},S,rt.to.state):S,force:R}),K||Z)}else rt=ht(Z,mt,!0,U,S);return O(Z,mt,rt),rt})}function $(L,K){const et=A(L,K);return et?Promise.reject(et):Promise.resolve()}function P(L){const K=q.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(L):L()}function w(L,K){let et;const[mt,S,R]=Q0(L,K);et=ja(mt.reverse(),"beforeRouteLeave",L,K);for(const x of mt)x.leaveGuards.forEach(Z=>{et.push(Ci(Z,L,K))});const U=$.bind(null,L,K);return et.push(U),gt(et).then(()=>{et=[];for(const x of r.list())et.push(Ci(x,L,K));return et.push(U),gt(et)}).then(()=>{et=ja(S,"beforeRouteUpdate",L,K);for(const x of S)x.updateGuards.forEach(Z=>{et.push(Ci(Z,L,K))});return et.push(U),gt(et)}).then(()=>{et=[];for(const x of R)if(x.beforeEnter)if(Un(x.beforeEnter))for(const Z of x.beforeEnter)et.push(Ci(Z,L,K));else et.push(Ci(x.beforeEnter,L,K));return et.push(U),gt(et)}).then(()=>(L.matched.forEach(x=>x.enterCallbacks={}),et=ja(R,"beforeRouteEnter",L,K,P),et.push(U),gt(et))).then(()=>{et=[];for(const x of o.list())et.push(Ci(x,L,K));return et.push(U),gt(et)}).catch(x=>ti(x,Se.NAVIGATION_CANCELLED)?x:Promise.reject(x))}function O(L,K,et){a.list().forEach(mt=>P(()=>mt(L,K,et)))}function ht(L,K,et,mt,S){const R=A(L,K);if(R)return R;const U=K===yi,x=Fs?history.state:{};et&&(mt||U?s.replace(L.fullPath,se({scroll:U&&x&&x.scroll},S)):s.push(L.fullPath,S)),l.value=L,T(L,K,et,U),D()}let nt;function tt(){nt||(nt=s.listen((L,K,et)=>{if(!ct.listening)return;const mt=p(L),S=F(mt,ct.currentRoute.value);if(S){I(se(S,{replace:!0,force:!0}),mt).catch(Lr);return}c=mt;const R=l.value;Fs&&X0(sd(R.fullPath,et.delta),ba()),w(mt,R).catch(U=>ti(U,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?U:ti(U,Se.NAVIGATION_GUARD_REDIRECT)?(I(se(C(U.to),{force:!0}),mt).then(x=>{ti(x,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!et.delta&&et.type===Gl.pop&&s.go(-1,!1)}).catch(Lr),Promise.reject()):(et.delta&&s.go(-et.delta,!1),z(U,mt,R))).then(U=>{U=U||ht(mt,R,!1),U&&(et.delta&&!ti(U,Se.NAVIGATION_CANCELLED)?s.go(-et.delta,!1):et.type===Gl.pop&&ti(U,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),O(mt,R,U)}).catch(Lr)}))}let B=dr(),st=dr(),Y;function z(L,K,et){D(L);const mt=st.list();return mt.length?mt.forEach(S=>S(L,K,et)):console.error(L),Promise.reject(L)}function lt(){return Y&&l.value!==yi?Promise.resolve():new Promise((L,K)=>{B.add([L,K])})}function D(L){return Y||(Y=!L,tt(),B.list().forEach(([K,et])=>L?et(L):K()),B.reset()),L}function T(L,K,et,mt){const{scrollBehavior:S}=n;if(!Fs||!S)return Promise.resolve();const R=!et&&$0(sd(L.fullPath,0))||(mt||!et)&&history.state&&history.state.scroll||null;return jc().then(()=>S(L,K,R)).then(U=>U&&W0(U)).catch(U=>z(U,L,K))}const ft=L=>s.go(L);let vt;const q=new Set,ct={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:M,replace:W,go:ft,back:()=>ft(-1),forward:()=>ft(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:lt,install(L){L.component("RouterLink",M_),L.component("RouterView",w_),L.config.globalProperties.$router=ct,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>$e(l)}),Fs&&!vt&&l.value===yi&&(vt=!0,M(s.location).catch(mt=>{}));const K={};for(const mt in yi)Object.defineProperty(K,mt,{get:()=>l.value[mt],enumerable:!0});L.provide(Ea,ct),L.provide(tu,nh(K)),L.provide(Xl,l);const et=L.unmount;q.add(L),L.unmount=function(){q.delete(L),q.size<1&&(c=yi,nt&&nt(),nt=null,l.value=yi,vt=!1,Y=!1),et()}}};function gt(L){return L.reduce((K,et)=>K.then(()=>P(et)),Promise.resolve())}return ct}function A_(){return Rn(Ea)}function C_(n){return Rn(tu)}var eu={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var D=new OffscreenCanvas(1,1),T=D.getContext("2d");T.fillRect(0,0,1,1);var ft=D.transferToImageBitmap();T.createPattern(ft,"no-repeat")}catch{return!1}return!0}();function l(){}function c(D){var T=e.exports.Promise,ft=T!==void 0?T:t.Promise;return typeof ft=="function"?new ft(D):(D(l,l),null)}var u=function(D,T){return{transform:function(ft){if(D)return ft;if(T.has(ft))return T.get(ft);var vt=new OffscreenCanvas(ft.width,ft.height),q=vt.getContext("2d");return q.drawImage(ft,0,0),T.set(ft,vt),vt},clear:function(){T.clear()}}}(a,new Map),d=function(){var D=Math.floor(16.666666666666668),T,ft,vt={},q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(T=function(ct){var gt=Math.random();return vt[gt]=requestAnimationFrame(function L(K){q===K||q+D-1<K?(q=K,delete vt[gt],ct()):vt[gt]=requestAnimationFrame(L)}),gt},ft=function(ct){vt[ct]&&cancelAnimationFrame(vt[ct])}):(T=function(ct){return setTimeout(ct,D)},ft=function(ct){return clearTimeout(ct)}),{frame:T,cancel:ft}}(),f=function(){var D,T,ft={};function vt(q){function ct(gt,L){q.postMessage({options:gt||{},callback:L})}q.init=function(L){var K=L.transferControlToOffscreen();q.postMessage({canvas:K},[K])},q.fire=function(L,K,et){if(T)return ct(L,null),T;var mt=Math.random().toString(36).slice(2);return T=c(function(S){function R(U){U.data.callback===mt&&(delete ft[mt],q.removeEventListener("message",R),T=null,u.clear(),et(),S())}q.addEventListener("message",R),ct(L,mt),ft[mt]=R.bind(null,{data:{callback:mt}})}),T},q.reset=function(){q.postMessage({reset:!0});for(var L in ft)ft[L](),delete ft[L]}}return function(){if(D)return D;if(!i&&r){var q=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{D=new Worker(URL.createObjectURL(new Blob([q])))}catch(ct){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ct),null}vt(D)}return D}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function g(D,T){return T?T(D):D}function v(D){return D!=null}function m(D,T,ft){return g(D&&v(D[T])?D[T]:h[T],ft)}function p(D){return D<0?0:Math.floor(D)}function C(D,T){return Math.floor(Math.random()*(T-D))+D}function A(D){return parseInt(D,16)}function M(D){return D.map(W)}function W(D){var T=String(D).replace(/[^0-9a-f]/gi,"");return T.length<6&&(T=T[0]+T[0]+T[1]+T[1]+T[2]+T[2]),{r:A(T.substring(0,2)),g:A(T.substring(2,4)),b:A(T.substring(4,6))}}function F(D){var T=m(D,"origin",Object);return T.x=m(T,"x",Number),T.y=m(T,"y",Number),T}function I(D){D.width=document.documentElement.clientWidth,D.height=document.documentElement.clientHeight}function $(D){var T=D.getBoundingClientRect();D.width=T.width,D.height=T.height}function P(D){var T=document.createElement("canvas");return T.style.position="fixed",T.style.top="0px",T.style.left="0px",T.style.pointerEvents="none",T.style.zIndex=D,T}function w(D,T,ft,vt,q,ct,gt,L,K){D.save(),D.translate(T,ft),D.rotate(ct),D.scale(vt,q),D.arc(0,0,1,gt,L,K),D.restore()}function O(D){var T=D.angle*(Math.PI/180),ft=D.spread*(Math.PI/180);return{x:D.x,y:D.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:D.startVelocity*.5+Math.random()*D.startVelocity,angle2D:-T+(.5*ft-Math.random()*ft),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:D.color,shape:D.shape,tick:0,totalTicks:D.ticks,decay:D.decay,drift:D.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:D.gravity*3,ovalScalar:.6,scalar:D.scalar,flat:D.flat}}function ht(D,T){T.x+=Math.cos(T.angle2D)*T.velocity+T.drift,T.y+=Math.sin(T.angle2D)*T.velocity+T.gravity,T.velocity*=T.decay,T.flat?(T.wobble=0,T.wobbleX=T.x+10*T.scalar,T.wobbleY=T.y+10*T.scalar,T.tiltSin=0,T.tiltCos=0,T.random=1):(T.wobble+=T.wobbleSpeed,T.wobbleX=T.x+10*T.scalar*Math.cos(T.wobble),T.wobbleY=T.y+10*T.scalar*Math.sin(T.wobble),T.tiltAngle+=.1,T.tiltSin=Math.sin(T.tiltAngle),T.tiltCos=Math.cos(T.tiltAngle),T.random=Math.random()+2);var ft=T.tick++/T.totalTicks,vt=T.x+T.random*T.tiltCos,q=T.y+T.random*T.tiltSin,ct=T.wobbleX+T.random*T.tiltCos,gt=T.wobbleY+T.random*T.tiltSin;if(D.fillStyle="rgba("+T.color.r+", "+T.color.g+", "+T.color.b+", "+(1-ft)+")",D.beginPath(),o&&T.shape.type==="path"&&typeof T.shape.path=="string"&&Array.isArray(T.shape.matrix))D.fill(Y(T.shape.path,T.shape.matrix,T.x,T.y,Math.abs(ct-vt)*.1,Math.abs(gt-q)*.1,Math.PI/10*T.wobble));else if(T.shape.type==="bitmap"){var L=Math.PI/10*T.wobble,K=Math.abs(ct-vt)*.1,et=Math.abs(gt-q)*.1,mt=T.shape.bitmap.width*T.scalar,S=T.shape.bitmap.height*T.scalar,R=new DOMMatrix([Math.cos(L)*K,Math.sin(L)*K,-Math.sin(L)*et,Math.cos(L)*et,T.x,T.y]);R.multiplySelf(new DOMMatrix(T.shape.matrix));var U=D.createPattern(u.transform(T.shape.bitmap),"no-repeat");U.setTransform(R),D.globalAlpha=1-ft,D.fillStyle=U,D.fillRect(T.x-mt/2,T.y-S/2,mt,S),D.globalAlpha=1}else if(T.shape==="circle")D.ellipse?D.ellipse(T.x,T.y,Math.abs(ct-vt)*T.ovalScalar,Math.abs(gt-q)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI):w(D,T.x,T.y,Math.abs(ct-vt)*T.ovalScalar,Math.abs(gt-q)*T.ovalScalar,Math.PI/10*T.wobble,0,2*Math.PI);else if(T.shape==="star")for(var x=Math.PI/2*3,Z=4*T.scalar,Q=8*T.scalar,rt=T.x,j=T.y,dt=5,H=Math.PI/dt;dt--;)rt=T.x+Math.cos(x)*Q,j=T.y+Math.sin(x)*Q,D.lineTo(rt,j),x+=H,rt=T.x+Math.cos(x)*Z,j=T.y+Math.sin(x)*Z,D.lineTo(rt,j),x+=H;else D.moveTo(Math.floor(T.x),Math.floor(T.y)),D.lineTo(Math.floor(T.wobbleX),Math.floor(q)),D.lineTo(Math.floor(ct),Math.floor(gt)),D.lineTo(Math.floor(vt),Math.floor(T.wobbleY));return D.closePath(),D.fill(),T.tick<T.totalTicks}function nt(D,T,ft,vt,q){var ct=T.slice(),gt=D.getContext("2d"),L,K,et=c(function(mt){function S(){L=K=null,gt.clearRect(0,0,vt.width,vt.height),u.clear(),q(),mt()}function R(){i&&!(vt.width===s.width&&vt.height===s.height)&&(vt.width=D.width=s.width,vt.height=D.height=s.height),!vt.width&&!vt.height&&(ft(D),vt.width=D.width,vt.height=D.height),gt.clearRect(0,0,vt.width,vt.height),ct=ct.filter(function(U){return ht(gt,U)}),ct.length?L=d.frame(R):S()}L=d.frame(R),K=S});return{addFettis:function(mt){return ct=ct.concat(mt),et},canvas:D,promise:et,reset:function(){L&&d.cancel(L),K&&K()}}}function tt(D,T){var ft=!D,vt=!!m(T||{},"resize"),q=!1,ct=m(T,"disableForReducedMotion",Boolean),gt=r&&!!m(T||{},"useWorker"),L=gt?f():null,K=ft?I:$,et=D&&L?!!D.__confetti_initialized:!1,mt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,S;function R(x,Z,Q){for(var rt=m(x,"particleCount",p),j=m(x,"angle",Number),dt=m(x,"spread",Number),H=m(x,"startVelocity",Number),b=m(x,"decay",Number),_=m(x,"gravity",Number),N=m(x,"drift",Number),J=m(x,"colors",M),ut=m(x,"ticks",Number),it=m(x,"shapes"),St=m(x,"scalar"),yt=!!m(x,"flat"),Mt=F(x),Ht=rt,xt=[],At=D.width*Mt.x,Bt=D.height*Mt.y;Ht--;)xt.push(O({x:At,y:Bt,angle:j,spread:dt,startVelocity:H,color:J[Ht%J.length],shape:it[C(0,it.length)],ticks:ut,decay:b,gravity:_,drift:N,scalar:St,flat:yt}));return S?S.addFettis(xt):(S=nt(D,xt,K,Z,Q),S.promise)}function U(x){var Z=ct||m(x,"disableForReducedMotion",Boolean),Q=m(x,"zIndex",Number);if(Z&&mt)return c(function(H){H()});ft&&S?D=S.canvas:ft&&!D&&(D=P(Q),document.body.appendChild(D)),vt&&!et&&K(D);var rt={width:D.width,height:D.height};L&&!et&&L.init(D),et=!0,L&&(D.__confetti_initialized=!0);function j(){if(L){var H={getBoundingClientRect:function(){if(!ft)return D.getBoundingClientRect()}};K(H),L.postMessage({resize:{width:H.width,height:H.height}});return}rt.width=rt.height=null}function dt(){S=null,vt&&(q=!1,t.removeEventListener("resize",j)),ft&&D&&(document.body.contains(D)&&document.body.removeChild(D),D=null,et=!1)}return vt&&!q&&(q=!0,t.addEventListener("resize",j,!1)),L?L.fire(x,rt,dt):R(x,rt,dt)}return U.reset=function(){L&&L.reset(),S&&S.reset()},U}var B;function st(){return B||(B=tt(null,{useWorker:!0,resize:!0})),B}function Y(D,T,ft,vt,q,ct,gt){var L=new Path2D(D),K=new Path2D;K.addPath(L,new DOMMatrix(T));var et=new Path2D;return et.addPath(K,new DOMMatrix([Math.cos(gt)*q,Math.sin(gt)*q,-Math.sin(gt)*ct,Math.cos(gt)*ct,ft,vt])),et}function z(D){if(!o)throw new Error("path confetti are not supported in this browser");var T,ft;typeof D=="string"?T=D:(T=D.path,ft=D.matrix);var vt=new Path2D(T),q=document.createElement("canvas"),ct=q.getContext("2d");if(!ft){for(var gt=1e3,L=gt,K=gt,et=0,mt=0,S,R,U=0;U<gt;U+=2)for(var x=0;x<gt;x+=2)ct.isPointInPath(vt,U,x,"nonzero")&&(L=Math.min(L,U),K=Math.min(K,x),et=Math.max(et,U),mt=Math.max(mt,x));S=et-L,R=mt-K;var Z=10,Q=Math.min(Z/S,Z/R);ft=[Q,0,0,Q,-Math.round(S/2+L)*Q,-Math.round(R/2+K)*Q]}return{type:"path",path:T,matrix:ft}}function lt(D){var T,ft=1,vt="#000000",q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof D=="string"?T=D:(T=D.text,ft="scalar"in D?D.scalar:ft,q="fontFamily"in D?D.fontFamily:q,vt="color"in D?D.color:vt);var ct=10*ft,gt=""+ct+"px "+q,L=new OffscreenCanvas(ct,ct),K=L.getContext("2d");K.font=gt;var et=K.measureText(T),mt=Math.ceil(et.actualBoundingBoxRight+et.actualBoundingBoxLeft),S=Math.ceil(et.actualBoundingBoxAscent+et.actualBoundingBoxDescent),R=2,U=et.actualBoundingBoxLeft+R,x=et.actualBoundingBoxAscent+R;mt+=R+R,S+=R+R,L=new OffscreenCanvas(mt,S),K=L.getContext("2d"),K.font=gt,K.fillStyle=vt,K.fillText(T,U,x);var Z=1/ft;return{type:"bitmap",bitmap:L.transferToImageBitmap(),matrix:[Z,0,0,Z,-mt*Z/2,-S*Z/2]}}e.exports=function(){return st().apply(this,arguments)},e.exports.reset=function(){st().reset()},e.exports.create=tt,e.exports.shapeFromPath=z,e.exports.shapeFromText=lt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),eu,!1);const R_=eu.exports;eu.exports.create;const P_={class:"w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20 px-6 py-3 flex items-center justify-between sticky top-0 z-30 shadow-md"},D_={class:"flex items-center space-x-3"},L_=["disabled"],I_=Nn({__name:"HeaderNav",props:{psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},hasData:{type:Boolean},latestTestId:{}},emits:["open-serial-modal","toggle-history","export-csv","open-3d-new-window"],setup(n){return(t,e)=>(Ft(),kt("header",P_,[e[8]||(e[8]=Bi('<div class="flex items-center space-x-3"><div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/20"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg></div><div><h1 class="text-base font-bold tracking-tight text-white flex items-center gap-2"><span>电源芯片转换效率 3D 自动化测试工作台</span><span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"> Web Serial + 3D Edition </span></h1><p class="text-xs text-slate-400 font-mono"> RIGOL DP700 直流电源 &amp; UNI-T UTL8500 电子负载 (支持纯浏览器COM口直连 &amp; 仿真驱动) </p></div></div>',1)),y("div",D_,[y("button",{onClick:e[0]||(e[0]=i=>t.$emit("open-serial-modal")),class:ye(["flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all",n.psuConnected?"bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:border-emerald-400":"bg-rose-950/40 border-rose-500/40 text-rose-300 hover:border-rose-400"])},[y("span",{class:ye(["w-2 h-2 rounded-full",n.psuConnected?"bg-emerald-400 animate-pulse":"bg-rose-400"])},null,2),y("span",null,"电源 (DP700): "+Et(n.psuPortName),1)],2),y("button",{onClick:e[1]||(e[1]=i=>t.$emit("open-serial-modal")),class:ye(["flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all",n.loadConnected?"bg-emerald-950/40 border-emerald-500/40 text-emerald-300 hover:border-emerald-400":"bg-rose-950/40 border-rose-500/40 text-rose-300 hover:border-rose-400"])},[y("span",{class:ye(["w-2 h-2 rounded-full",n.loadConnected?"bg-emerald-400 animate-pulse":"bg-rose-400"])},null,2),y("span",null,"负载 (UTL8500): "+Et(n.loadPortName),1)],2),y("button",{onClick:e[2]||(e[2]=i=>t.$emit("toggle-history")),class:"flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all shadow",title:"查看最近5条 IndexedDB 测试记录"},[...e[5]||(e[5]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-cyan-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("circle",{cx:"12",cy:"12",r:"10"}),y("polyline",{points:"12 6 12 12 16 14"})],-1),y("span",null,"测试历史 (5条)",-1)])]),y("button",{onClick:e[3]||(e[3]=i=>t.$emit("export-csv")),disabled:!n.hasData,class:ye(["flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg font-medium text-xs transition-all shadow",n.hasData?"bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-900/30":"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"])},[...e[6]||(e[6]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y("polyline",{points:"7 10 12 15 17 10"}),y("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),y("span",null,"导出 CSV",-1)])],10,L_),n.latestTestId?(Ft(),kt("button",{key:0,onClick:e[4]||(e[4]=i=>t.$emit("open-3d-new-window")),class:"flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-medium text-xs transition-all shadow shadow-cyan-900/30",title:"在新窗口打开当前测试数据的 3D 可视化视图"},[...e[7]||(e[7]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),y("polyline",{points:"15 3 21 3 21 9"}),y("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),y("span",null,"新窗口 3D 视图",-1)])])):fi("",!0)])]))}}),U_={class:"glass-panel p-5"},N_={class:"flex items-center justify-between mb-4"},O_={class:"flex items-center space-x-3 text-xs font-mono"},F_={class:"text-cyan-400 font-bold"},B_={class:"w-32 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700"},k_={class:"text-emerald-400 font-semibold"},z_={class:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"},V_={class:"glass-card p-3 border-l-4 border-amber-400 flex flex-col justify-between"},H_={class:"flex items-center justify-between text-[11px] text-slate-400 font-mono"},G_={class:"text-amber-400/80"},W_={class:"mt-2 text-2xl font-bold font-mono text-amber-400"},X_={class:"glass-card p-3 border-l-4 border-amber-500/70 flex flex-col justify-between"},$_={class:"mt-2 text-2xl font-bold font-mono text-slate-200"},j_={class:"glass-card p-3 border-l-4 border-amber-600/70 flex flex-col justify-between"},q_={class:"mt-2 text-2xl font-bold font-mono text-slate-200"},Y_={class:"glass-card p-3 border-l-4 border-sky-400 flex flex-col justify-between"},K_={class:"mt-2 text-2xl font-bold font-mono text-sky-400"},Z_={class:"glass-card p-3 border-l-4 border-sky-500/70 flex flex-col justify-between"},J_={class:"flex items-center justify-between text-[11px] text-slate-400 font-mono"},Q_={class:"text-sky-400/80"},tv={class:"mt-2 text-2xl font-bold font-mono text-slate-200"},ev={class:"glass-card p-3 border-l-4 border-sky-600/70 flex flex-col justify-between"},nv={class:"mt-2 text-2xl font-bold font-mono text-slate-200"},iv=Nn({__name:"DashboardMetrics",props:{metrics:{}},setup(n){function t(i){return i>=92?"border-emerald-400 bg-emerald-950/20 shadow-lg shadow-emerald-950/40":i>=85?"border-cyan-400 bg-cyan-950/20":i>=75?"border-amber-400 bg-amber-950/20":"border-rose-500 bg-rose-950/20"}function e(i){return i>=92?"text-emerald-400":i>=85?"text-cyan-400":i>=75?"text-amber-400":"text-rose-400"}return(i,s)=>(Ft(),kt("div",U_,[y("div",N_,[s[1]||(s[1]=y("div",{class:"flex items-center space-x-2"},[y("span",{class:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"}),y("h2",{class:"text-xs font-bold tracking-wider text-slate-300 uppercase"},"实时仪器遥测仪表盘")],-1)),y("div",O_,[s[0]||(s[0]=y("span",{class:"text-slate-400"},"步进进度:",-1)),y("span",F_,Et(n.metrics.currentStep)+" / "+Et(n.metrics.totalSteps)+" 点",1),y("div",B_,[y("div",{class:"bg-gradient-to-r from-cyan-500 to-emerald-400 h-2 rounded-full transition-all duration-300",style:Wr({width:`${n.metrics.progressPercent}%`})},null,4)]),y("span",k_,Et(n.metrics.progressPercent.toFixed(1))+"%",1)])]),y("div",z_,[y("div",V_,[y("div",H_,[s[2]||(s[2]=y("span",null,"输入电压 (Vin)",-1)),y("span",G_,"目标: "+Et(n.metrics.activeTargetV.toFixed(2))+"V",1)]),y("div",W_,[Zt(Et(n.metrics.vin.toFixed(3))+" ",1),s[3]||(s[3]=y("span",{class:"text-xs font-normal text-slate-400"},"V",-1))])]),y("div",X_,[s[5]||(s[5]=y("div",{class:"text-[11px] text-slate-400 font-mono"},"输入电流 (Iin)",-1)),y("div",$_,[Zt(Et(n.metrics.iin.toFixed(3))+" ",1),s[4]||(s[4]=y("span",{class:"text-xs font-normal text-slate-400"},"A",-1))])]),y("div",j_,[s[7]||(s[7]=y("div",{class:"text-[11px] text-slate-400 font-mono"},"输入功率 (Pin)",-1)),y("div",q_,[Zt(Et(n.metrics.pin.toFixed(3))+" ",1),s[6]||(s[6]=y("span",{class:"text-xs font-normal text-slate-400"},"W",-1))])]),y("div",Y_,[s[9]||(s[9]=y("div",{class:"text-[11px] text-slate-400 font-mono"},"输出电压 (Vout)",-1)),y("div",K_,[Zt(Et(n.metrics.vout.toFixed(3))+" ",1),s[8]||(s[8]=y("span",{class:"text-xs font-normal text-slate-400"},"V",-1))])]),y("div",Z_,[y("div",J_,[s[10]||(s[10]=y("span",null,"输出电流 (Iout)",-1)),y("span",Q_,"目标: "+Et(n.metrics.activeTargetLoad.toFixed(2)),1)]),y("div",tv,[Zt(Et(n.metrics.iout.toFixed(3))+" ",1),s[11]||(s[11]=y("span",{class:"text-xs font-normal text-slate-400"},"A",-1))])]),y("div",ev,[s[13]||(s[13]=y("div",{class:"text-[11px] text-slate-400 font-mono"},"输出功率 (Pout)",-1)),y("div",nv,[Zt(Et(n.metrics.pout.toFixed(3))+" ",1),s[12]||(s[12]=y("span",{class:"text-xs font-normal text-slate-400"},"W",-1))])]),y("div",{class:ye(["glass-card p-3 border-l-4 flex flex-col justify-between transition-all",t(n.metrics.efficiency)])},[s[15]||(s[15]=y("div",{class:"text-[11px] font-mono text-slate-300 font-semibold flex items-center justify-between"},[y("span",null,"转换效率 (η)"),y("span",{class:"text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/10 text-emerald-400"},"Pout/Pin")],-1)),y("div",{class:ye(["mt-2 text-2xl font-bold font-mono",e(n.metrics.efficiency)])},[Zt(Et(n.metrics.efficiency.toFixed(2))+" ",1),s[14]||(s[14]=y("span",{class:"text-xs font-normal text-slate-400"},"%",-1))],2)],2)])]))}}),sv={class:"glass-panel p-5 flex flex-col justify-between"},rv={class:"flex items-center justify-between pb-3 border-b border-slate-800 mb-4"},ov={class:"text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700"},av={class:"mb-4"},lv={class:"grid grid-cols-2 sm:grid-cols-4 gap-2.5"},cv=["disabled"],uv=["disabled"],dv=["disabled"],fv=["disabled"],hv={class:"mb-4"},pv={class:"text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-2 flex items-center justify-between"},mv={class:"flex rounded bg-slate-800 p-0.5 border border-slate-700 text-[10px] font-mono"},gv=["disabled"],_v=["disabled"],vv={class:"grid grid-cols-3 gap-2.5"},xv={class:"block text-[11px] text-slate-400 font-mono mb-1"},yv=["disabled"],Mv={class:"block text-[11px] text-slate-400 font-mono mb-1"},Sv=["disabled"],bv={class:"block text-[11px] text-slate-400 font-mono mb-1"},Ev=["disabled"],wv={class:"mb-5 grid grid-cols-2 gap-2.5"},Tv=["disabled"],Av=["disabled"],Cv={class:"pt-3 border-t border-slate-800 flex items-center space-x-3"},Rv=["disabled"],Pv=Nn({__name:"SweepConfigCard",props:{config:{},isRunning:{type:Boolean},isPaused:{type:Boolean}},emits:["start-test","pause-test","resume-test","stop-test"],setup(n){const t=n,e=Ye(()=>{const s=Math.max(1,Math.floor((t.config.voltageMax-t.config.voltageMin)/t.config.voltageStep)+1),r=Math.max(1,Math.floor((t.config.loadMax-t.config.loadMin)/t.config.loadStep)+1);return s*r}),i=Ye(()=>{const s=Math.round(e.value*t.config.stepDwellTime);if(s<60)return`${s}秒`;const r=Math.floor(s/60),o=s%60;return`${r}分${o}秒`});return(s,r)=>(Ft(),kt("div",sv,[y("div",null,[y("div",rv,[r[15]||(r[15]=y("div",{class:"flex items-center space-x-2"},[y("div",{class:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),y("h2",{class:"text-xs font-bold tracking-wider text-slate-200 uppercase"},"2D 双向矩阵扫描参数设定")],-1)),y("span",ov," 共 "+Et(e.value)+" 个矩阵测试点 (~"+Et(i.value)+") ",1)]),y("div",av,[r[20]||(r[20]=y("div",{class:"text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5"},[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M13 2L3 14h9l-1 8 10-12h-9l1-8z"})]),Zt(" 输入电压扫描范围 (Input Voltage) ")],-1)),y("div",lv,[y("div",null,[r[16]||(r[16]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"起始电压 (下限 V)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[0]||(r[0]=o=>n.config.voltageMin=o),disabled:n.isRunning,step:"0.5",min:"0",class:"w-full font-mono text-xs"},null,8,cv),[[Qn,n.config.voltageMin,void 0,{number:!0}]])]),y("div",null,[r[17]||(r[17]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"终止电压 (上限 V)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[1]||(r[1]=o=>n.config.voltageMax=o),disabled:n.isRunning,step:"0.5",min:"0",class:"w-full font-mono text-xs"},null,8,uv),[[Qn,n.config.voltageMax,void 0,{number:!0}]])]),y("div",null,[r[18]||(r[18]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"电压步长 (Step V)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[2]||(r[2]=o=>n.config.voltageStep=o),disabled:n.isRunning,step:"0.2",min:"0.1",class:"w-full font-mono text-xs"},null,8,dv),[[Qn,n.config.voltageStep,void 0,{number:!0}]])]),y("div",null,[r[19]||(r[19]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"输入限流 (A)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[3]||(r[3]=o=>n.config.inputCurrentLimit=o),disabled:n.isRunning,step:"0.5",min:"0.5",class:"w-full font-mono text-xs"},null,8,fv),[[Qn,n.config.inputCurrentLimit,void 0,{number:!0}]])])])]),y("div",hv,[y("div",pv,[r[21]||(r[21]=y("div",{class:"flex items-center gap-1.5"},[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),y("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]),Zt(" 负载扫描范围 (Load Range & Mode) ")],-1)),y("div",mv,[y("button",{type:"button",onClick:r[4]||(r[4]=o=>!n.isRunning&&(n.config.loadMode="CC")),disabled:n.isRunning,class:ye(["px-2 py-0.5 rounded transition-all",n.config.loadMode==="CC"?"bg-sky-500 text-slate-950 font-bold":"text-slate-400 hover:text-slate-200"])}," CC (恒流 A) ",10,gv),y("button",{type:"button",onClick:r[5]||(r[5]=o=>!n.isRunning&&(n.config.loadMode="CW")),disabled:n.isRunning,class:ye(["px-2 py-0.5 rounded transition-all",n.config.loadMode==="CW"?"bg-sky-500 text-slate-950 font-bold":"text-slate-400 hover:text-slate-200"])}," CW (恒功率 W) ",10,_v)])]),y("div",vv,[y("div",null,[y("label",xv," 起始负载 (下限 "+Et(n.config.loadMode==="CC"?"A":"W")+") ",1),hn(y("input",{type:"number","onUpdate:modelValue":r[6]||(r[6]=o=>n.config.loadMin=o),disabled:n.isRunning,step:"0.2",min:"0",class:"w-full font-mono text-xs"},null,8,yv),[[Qn,n.config.loadMin,void 0,{number:!0}]])]),y("div",null,[y("label",Mv," 终止负载 (上限 "+Et(n.config.loadMode==="CC"?"A":"W")+") ",1),hn(y("input",{type:"number","onUpdate:modelValue":r[7]||(r[7]=o=>n.config.loadMax=o),disabled:n.isRunning,step:"0.2",min:"0",class:"w-full font-mono text-xs"},null,8,Sv),[[Qn,n.config.loadMax,void 0,{number:!0}]])]),y("div",null,[y("label",bv," 负载步长 (Step "+Et(n.config.loadMode==="CC"?"A":"W")+") ",1),hn(y("input",{type:"number","onUpdate:modelValue":r[8]||(r[8]=o=>n.config.loadStep=o),disabled:n.isRunning,step:"0.2",min:"0.05",class:"w-full font-mono text-xs"},null,8,Ev),[[Qn,n.config.loadStep,void 0,{number:!0}]])])])]),y("div",wv,[y("div",null,[r[22]||(r[22]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"每点驻留稳定时间 (秒)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[9]||(r[9]=o=>n.config.stepDwellTime=o),disabled:n.isRunning,step:"0.2",min:"0.4",class:"w-full font-mono text-xs"},null,8,Tv),[[Qn,n.config.stepDwellTime,void 0,{number:!0}]])]),y("div",null,[r[23]||(r[23]=y("label",{class:"block text-[11px] text-slate-400 font-mono mb-1"},"高频稳态采样频率 (Hz)",-1)),hn(y("input",{type:"number","onUpdate:modelValue":r[10]||(r[10]=o=>n.config.sampleRateHz=o),disabled:n.isRunning,step:"5",min:"10",max:"50",class:"w-full font-mono text-xs"},null,8,Av),[[Qn,n.config.sampleRateHz,void 0,{number:!0}]])])])]),y("div",Cv,[n.isRunning?n.isPaused?(Ft(),kt("button",{key:2,onClick:r[13]||(r[13]=o=>s.$emit("resume-test")),class:"flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-950/50 flex items-center justify-center gap-2 transition-all"},[...r[26]||(r[26]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 fill-current",viewBox:"0 0 24 24"},[y("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),y("span",null,"▶ 继续测试",-1)])])):(Ft(),kt("button",{key:1,onClick:r[12]||(r[12]=o=>s.$emit("pause-test")),class:"flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-950/50 flex items-center justify-center gap-2 transition-all"},[...r[25]||(r[25]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 fill-current",viewBox:"0 0 24 24"},[y("rect",{x:"6",y:"4",width:"4",height:"16"}),y("rect",{x:"14",y:"4",width:"4",height:"16"})],-1),y("span",null,"⏸ 暂停测试",-1)])])):(Ft(),kt("button",{key:0,onClick:r[11]||(r[11]=o=>s.$emit("start-test")),class:"flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-950/50 flex items-center justify-center gap-2 transition-all"},[...r[24]||(r[24]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 fill-current",viewBox:"0 0 24 24"},[y("polygon",{points:"5 3 19 12 5 21 5 3"})],-1),y("span",null,"▶ 开始全自动矩阵测试",-1)])])),y("button",{onClick:r[14]||(r[14]=o=>s.$emit("stop-test")),disabled:!n.isRunning,class:ye(["py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5",n.isRunning?"bg-rose-900/60 hover:bg-rose-800/80 text-rose-200 border border-rose-500/40 shadow-lg shadow-rose-950/40":"bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed"])},[...r[27]||(r[27]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 fill-current",viewBox:"0 0 24 24"},[y("rect",{x:"5",y:"5",width:"14",height:"14",rx:"2",ry:"2"})],-1),y("span",null,"⏹ 终止",-1)])],10,Rv)])]))}}),Dv={class:"glass-panel p-5 flex flex-col h-full"},Lv={class:"flex items-center justify-between pb-3 border-b border-slate-800 mb-3"},Iv={class:"flex items-center space-x-3"},Uv={class:"flex rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs font-medium"},Nv={class:"text-xs font-mono text-slate-400"},Ov={class:"text-cyan-400"},Fv={key:0,class:"flex-1 overflow-auto"},Bv={key:0,class:"h-64 flex flex-col items-center justify-center text-slate-500 text-xs"},kv={key:1,class:"inline-block min-w-full align-middle"},zv={class:"min-w-full divide-y divide-slate-800 text-center font-mono text-xs"},Vv={class:"bg-slate-900/90 text-slate-300"},Hv={class:"divide-y divide-slate-800/60"},Gv={class:"p-2.5 text-left font-semibold text-sky-400 border-r border-slate-800 sticky left-0 bg-slate-900/95 z-10"},Wv=["onClick"],Xv={key:0,class:"py-1 px-1.5 rounded bg-cyan-500/20 border border-cyan-400 text-cyan-300 animate-pulse font-bold"},$v={key:2,class:"py-1 px-1.5 text-slate-600 font-mono text-[11px]"},jv={key:1,class:"text-slate-700"},qv={key:1,class:"flex-1 overflow-auto"},Yv={class:"min-w-full divide-y divide-slate-800 font-mono text-xs text-right"},Kv={class:"divide-y divide-slate-800/60"},Zv={class:"p-2 text-center text-slate-400"},Jv={class:"p-2"},Qv={class:"p-2"},tx={class:"p-2 font-bold text-amber-400"},ex={class:"p-2"},nx={class:"p-2"},ix={class:"p-2 font-bold text-sky-400"},sx={class:"p-2"},rx={class:"p-2"},ox={class:"p-2 text-center font-bold"},ax={key:1,class:"text-cyan-400 animate-pulse"},lx={key:2,class:"text-slate-600"},cx={class:"p-2 text-center"},ux=Nn({__name:"MatrixTable",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},emits:["select-point"],setup(n,{emit:t}){const e=n,i=t,s=Te("matrix"),r=Ye(()=>e.points.filter(u=>u.status==="completed").length);function o(u,d){return e.points.find(f=>Math.abs(f.voltageTarget-u)<1e-4&&Math.abs(f.loadTarget-d)<1e-4)}function a(u){u&&u.status==="completed"&&i("select-point",u)}function l(u){return u>=92?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":u>=85?"bg-cyan-500/20 text-cyan-300 border border-cyan-500/30":u>=75?"bg-amber-500/20 text-amber-300 border border-amber-500/30":"bg-rose-500/20 text-rose-300 border border-rose-500/30"}function c(u){return u>=92?"text-emerald-400":u>=85?"text-cyan-400":u>=75?"text-amber-400":"text-rose-400"}return(u,d)=>(Ft(),kt("div",Dv,[y("div",Lv,[y("div",Iv,[y("div",Uv,[y("button",{onClick:d[0]||(d[0]=f=>s.value="matrix"),class:ye(["px-3 py-1 rounded-md transition-all flex items-center gap-1.5",s.value==="matrix"?"bg-cyan-500 text-slate-950 font-bold shadow":"text-slate-400 hover:text-slate-200"])},[...d[2]||(d[2]=[Bi('<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向效率矩阵表 ',2)])],2),y("button",{onClick:d[1]||(d[1]=f=>s.value="list"),class:ye(["px-3 py-1 rounded-md transition-all flex items-center gap-1.5",s.value==="list"?"bg-cyan-500 text-slate-950 font-bold shadow":"text-slate-400 hover:text-slate-200"])},[...d[3]||(d[3]=[Bi('<svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg> 步进采样流水明细 ',2)])],2)])]),y("div",Nv,[d[4]||(d[4]=Zt(" 已测点数: ",-1)),y("b",Ov,Et(r.value),1),Zt(" / "+Et(n.points.length),1)])]),s.value==="matrix"?(Ft(),kt("div",Fv,[n.voltageSteps.length===0||n.loadSteps.length===0?(Ft(),kt("div",Bv,[...d[5]||(d[5]=[y("span",null,"尚未配置测试矩阵",-1)])])):(Ft(),kt("div",kv,[y("table",zv,[y("thead",null,[y("tr",Vv,[d[6]||(d[6]=y("th",{class:"p-2.5 text-left border-r border-slate-800 sticky left-0 bg-slate-900 z-10"}," 负载 \\ 电压 ",-1)),(Ft(!0),kt(Le,null,Bs(n.voltageSteps,f=>(Ft(),kt("th",{key:f,class:"p-2.5 min-w-[76px] font-semibold text-amber-400"},Et(f)+"V ",1))),128))])]),y("tbody",Hv,[(Ft(!0),kt(Le,null,Bs(n.loadSteps,f=>(Ft(),kt("tr",{key:f,class:"hover:bg-slate-800/30 transition-colors"},[y("td",Gv,Et(f)+Et(n.loadMode==="CC"?"A":"W"),1),(Ft(!0),kt(Le,null,Bs(n.voltageSteps,h=>(Ft(),kt("td",{key:h,class:"p-2 border-r border-slate-800/40 relative cursor-pointer",onClick:g=>a(o(h,f))},[o(h,f)?(Ft(),kt(Le,{key:0},[o(h,f).status==="running"?(Ft(),kt("div",Xv," 采样中... ")):o(h,f).status==="completed"?(Ft(),kt("div",{key:1,class:ye(["py-1 px-1.5 rounded transition-transform hover:scale-105 font-bold",l(o(h,f).efficiency)])},Et(o(h,f).efficiency.toFixed(1))+"% ",3)):(Ft(),kt("div",$v," -- "))],64)):(Ft(),kt("span",jv,"--"))],8,Wv))),128))]))),128))])])]))])):(Ft(),kt("div",qv,[y("table",Yv,[d[7]||(d[7]=y("thead",{class:"bg-slate-900/90 text-slate-400 sticky top-0 z-10 text-[11px]"},[y("tr",null,[y("th",{class:"p-2 text-center"},"步号"),y("th",{class:"p-2"},"目标Vin(V)"),y("th",{class:"p-2"},"目标负载"),y("th",{class:"p-2 text-amber-300"},"实测Vin(V)"),y("th",{class:"p-2 text-slate-300"},"实测Iin(A)"),y("th",{class:"p-2 text-slate-300"},"实测Pin(W)"),y("th",{class:"p-2 text-sky-300"},"实测Vout(V)"),y("th",{class:"p-2 text-slate-300"},"实测Iout(A)"),y("th",{class:"p-2 text-slate-300"},"实测Pout(W)"),y("th",{class:"p-2 text-emerald-400 text-center"},"转换效率 η"),y("th",{class:"p-2 text-center"},"状态")])],-1)),y("tbody",Kv,[(Ft(!0),kt(Le,null,Bs(n.points,f=>(Ft(),kt("tr",{key:f.stepIndex,class:ye(["hover:bg-slate-800/40 transition-colors",{"bg-cyan-950/20":f.status==="running"}])},[y("td",Zv,"#"+Et(f.stepIndex),1),y("td",Jv,Et(f.voltageTarget.toFixed(2)),1),y("td",Qv,Et(f.loadTarget.toFixed(2))+" "+Et(f.loadMode),1),y("td",tx,Et(f.status!=="pending"?f.vin.toFixed(3):"--"),1),y("td",ex,Et(f.status!=="pending"?f.iin.toFixed(3):"--"),1),y("td",nx,Et(f.status!=="pending"?f.pin.toFixed(3):"--"),1),y("td",ix,Et(f.status!=="pending"?f.vout.toFixed(3):"--"),1),y("td",sx,Et(f.status!=="pending"?f.iout.toFixed(3):"--"),1),y("td",rx,Et(f.status!=="pending"?f.pout.toFixed(3):"--"),1),y("td",ox,[f.status==="completed"?(Ft(),kt("span",{key:0,class:ye(c(f.efficiency))},Et(f.efficiency.toFixed(2))+"% ",3)):f.status==="running"?(Ft(),kt("span",ax,"测定中")):(Ft(),kt("span",lx,"--"))]),y("td",cx,[y("span",{class:ye(["px-2 py-0.5 rounded text-[10px]",{"bg-emerald-950 text-emerald-400 border border-emerald-500/30":f.status==="completed","bg-cyan-950 text-cyan-400 border border-cyan-500/30 animate-pulse":f.status==="running","bg-slate-800 text-slate-500":f.status==="pending"}])},Et(f.status==="completed"?"已完成":f.status==="running"?"采样中":"等待"),3)])],2))),128))])])]))]))}}),dx={key:0,class:"fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4"},fx={class:"relative w-full max-w-lg bg-slate-900 border border-cyan-500/30 rounded-2xl p-6 shadow-2xl z-10 flex flex-col gap-5"},hx={class:"flex items-center justify-between pb-3 border-b border-slate-800"},px={class:"bg-gradient-to-r from-cyan-950/40 via-indigo-950/40 to-slate-900 border border-cyan-500/30 rounded-xl p-3.5 flex items-center justify-between"},mx={class:"glass-card p-4 border border-slate-800"},gx={class:"flex items-center justify-between mb-2.5"},_x={class:"flex items-center space-x-2"},vx={class:"text-[11px] font-mono text-slate-400"},xx={class:"flex items-center space-x-2"},yx=["disabled"],Mx={class:"glass-card p-4 border border-slate-800"},Sx={class:"flex items-center justify-between mb-2.5"},bx={class:"flex items-center space-x-2"},Ex={class:"text-[11px] font-mono text-slate-400"},wx={class:"flex items-center space-x-2"},Tx=["disabled"],Ax={key:0,class:"p-3 rounded-xl bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-mono"},Cx=Nn({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=Te(9600),e=Te(9600);return(i,s)=>n.isOpen?(Ft(),kt("div",dx,[y("div",{class:"fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity",onClick:s[0]||(s[0]=r=>i.$emit("close"))}),y("div",fx,[y("div",hx,[s[10]||(s[10]=Bi('<div class="flex items-center space-x-2.5"><div class="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg></div><div><h3 class="text-sm font-bold text-white">仪器串口连接设置 (Web Serial)</h3><p class="text-[11px] text-slate-400 font-mono">支持 Chrome/Edge 浏览器原生 COM 口直连或内置仿真</p></div></div>',1)),y("button",{onClick:s[1]||(s[1]=r=>i.$emit("close")),class:"p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"},[...s[9]||(s[9]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),y("div",px,[s[11]||(s[11]=y("div",null,[y("div",{class:"text-xs font-bold text-cyan-300 flex items-center gap-1.5"},[y("span",{class:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"}),Zt(" 内置仿真驱动 (Virtual Mode) ")]),y("div",{class:"text-[11px] text-slate-400 mt-0.5"},"无物理仪器时直接进行 2D 双向矩阵扫描与 3D 动画演示")],-1)),y("button",{onClick:s[2]||(s[2]=r=>i.$emit("connect-virtual")),class:"px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-950/50 transition-all"}," 一键启用仿真驱动 ")]),y("div",mx,[y("div",gx,[y("div",_x,[y("span",{class:ye(["w-2.5 h-2.5 rounded-full",n.psuConnected?"bg-emerald-400":"bg-slate-600"])},null,2),s[12]||(s[12]=y("span",{class:"text-xs font-bold text-slate-200"},"直流电源 (RIGOL DP700)",-1))]),y("span",vx,Et(n.psuPortName),1)]),y("div",xx,[hn(y("select",{"onUpdate:modelValue":s[3]||(s[3]=r=>t.value=r),disabled:n.psuConnected,class:"text-xs py-1.5"},[...s[13]||(s[13]=[y("option",{value:9600},"9600 bps (标准)",-1),y("option",{value:19200},"19200 bps",-1),y("option",{value:38400},"38400 bps",-1),y("option",{value:115200},"115200 bps",-1)])],8,yx),[[Vl,t.value,void 0,{number:!0}]]),n.psuConnected?(Ft(),kt("button",{key:1,onClick:s[5]||(s[5]=r=>i.$emit("disconnect-psu")),class:"flex-1 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-mono font-medium transition-all"}," 断开电源串口 ")):(Ft(),kt("button",{key:0,onClick:s[4]||(s[4]=r=>i.$emit("connect-physical-psu",t.value)),class:"flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-medium transition-all"}," 浏览器选择电源 COM 口 "))])]),y("div",Mx,[y("div",Sx,[y("div",bx,[y("span",{class:ye(["w-2.5 h-2.5 rounded-full",n.loadConnected?"bg-emerald-400":"bg-slate-600"])},null,2),s[14]||(s[14]=y("span",{class:"text-xs font-bold text-slate-200"},"可编程电子负载 (UNI-T UTL8500)",-1))]),y("span",Ex,Et(n.loadPortName),1)]),y("div",wx,[hn(y("select",{"onUpdate:modelValue":s[6]||(s[6]=r=>e.value=r),disabled:n.loadConnected,class:"text-xs py-1.5"},[...s[15]||(s[15]=[y("option",{value:9600},"9600 bps (标准)",-1),y("option",{value:19200},"19200 bps",-1),y("option",{value:38400},"38400 bps",-1),y("option",{value:115200},"115200 bps",-1)])],8,Tx),[[Vl,e.value,void 0,{number:!0}]]),n.loadConnected?(Ft(),kt("button",{key:1,onClick:s[8]||(s[8]=r=>i.$emit("disconnect-load")),class:"flex-1 py-1.5 rounded-lg bg-rose-950/50 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs font-mono font-medium transition-all"}," 断开负载串口 ")):(Ft(),kt("button",{key:0,onClick:s[7]||(s[7]=r=>i.$emit("connect-physical-load",e.value)),class:"flex-1 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-400 border border-sky-500/30 text-xs font-mono font-medium transition-all"}," 浏览器选择负载 COM 口 "))])]),n.webSerialSupported?fi("",!0):(Ft(),kt("div",Ax,[...s[16]||(s[16]=[Zt(" ⚠️ 检测到当前浏览器不支持 Web Serial API。您可直接使用上方",-1),y("b",null,"【一键启用仿真驱动】",-1),Zt("进行无障碍测试，或切换至最新版 Chrome / Edge 浏览器。 ",-1)])]))])])):fi("",!0)}}),Rx={key:0,class:"fixed inset-0 z-50 overflow-hidden flex justify-end"},Px={class:"relative w-full max-w-md bg-slate-900 border-l border-cyan-500/30 p-6 flex flex-col h-full shadow-2xl z-10"},Dx={class:"flex items-center justify-between pb-4 border-b border-slate-800 mb-4"},Lx={key:0,class:"flex-1 flex flex-col items-center justify-center text-center text-slate-500"},Ix={key:1,class:"flex-1 overflow-y-auto space-y-3 pr-1"},Ux={class:"flex items-center justify-between mb-1.5"},Nx={class:"text-xs font-bold text-cyan-300 font-mono"},Ox={class:"text-[10px] text-slate-400 font-mono"},Fx={class:"grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-400 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80 mb-3"},Bx={class:"text-slate-200"},kx={class:"text-slate-200"},zx={class:"text-cyan-400 font-bold"},Vx={class:"text-emerald-400 font-bold"},Hx={class:"flex items-center justify-between pt-2 border-t border-slate-800 text-xs"},Gx=["onClick"],Wx={class:"flex items-center space-x-1.5"},Xx=["onClick"],$x=["onClick"],jx=Nn({__name:"HistoryDrawer",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-3d","export-record-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ft(),kt("div",Rx,[y("div",{class:"fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity",onClick:e[0]||(e[0]=i=>t.$emit("close"))}),y("div",Px,[y("div",Dx,[e[3]||(e[3]=Bi('<div class="flex items-center space-x-2"><div class="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"><svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg></div><div><h3 class="text-sm font-bold text-white">IndexedDB 测试历史记录</h3><p class="text-[11px] text-slate-400 font-mono">本地浏览器自动保存最近 5 条测试数据</p></div></div>',1)),y("button",{onClick:e[1]||(e[1]=i=>t.$emit("close")),class:"p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all"},[...e[2]||(e[2]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),n.records.length===0?(Ft(),kt("div",Lx,[...e[4]||(e[4]=[Bi('<svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-slate-600 mb-3 stroke-1" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg><p class="text-sm font-medium">暂无历史测试记录</p><p class="text-xs text-slate-600 mt-1">每次矩阵测试完成时将自动存储于浏览器 IndexedDB</p>',3)])])):(Ft(),kt("div",Ix,[(Ft(!0),kt(Le,null,Bs(n.records,i=>{var s,r;return Ft(),kt("div",{key:i.id,class:"glass-card p-4 hover:border-cyan-500/40 transition-all flex flex-col justify-between"},[y("div",null,[y("div",Ux,[y("span",Nx,Et(i.title),1),y("span",Ox,Et(new Date(i.createdAt).toLocaleTimeString()),1)]),y("div",Fx,[y("div",null,[e[5]||(e[5]=Zt("范围: ",-1)),y("span",Bx,Et(i.config.voltageMin)+"V~"+Et(i.config.voltageMax)+"V",1)]),y("div",null,[e[6]||(e[6]=Zt("模式: ",-1)),y("span",kx,Et(i.config.loadMode)+" ("+Et(i.config.loadMin)+"~"+Et(i.config.loadMax)+")",1)]),y("div",null,[e[7]||(e[7]=Zt("总点数: ",-1)),y("span",zx,Et(i.points.length)+" 点",1)]),y("div",null,[e[8]||(e[8]=Zt("最高效率: ",-1)),y("span",Vx,Et(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),y("div",Hx,[y("button",{onClick:o=>t.$emit("open-3d",i.id),class:"px-2.5 py-1 rounded bg-cyan-600/30 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 font-medium transition-all flex items-center gap-1 border border-cyan-500/30"},[...e[9]||(e[9]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),y("polyline",{points:"15 3 21 3 21 9"}),y("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Zt(" 新窗口 3D 展现 ",-1)])],8,Gx),y("div",Wx,[y("button",{onClick:o=>t.$emit("export-record-csv",i),class:"p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all",title:"导出此记录为 CSV"},[...e[10]||(e[10]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y("polyline",{points:"7 10 12 15 17 10"}),y("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,Xx),y("button",{onClick:o=>t.$emit("delete-record",i.id),class:"p-1.5 rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-all",title:"删除记录"},[...e[11]||(e[11]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("polyline",{points:"3 6 5 6 21 6"}),y("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,$x)])])])}),128))]))])])):fi("",!0)}});class qx{constructor(){fe(this,"connected",!0);fe(this,"outputOn",!1);fe(this,"targetVoltage",5);fe(this,"currentVoltage",5);fe(this,"currentLimit",3);fe(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t}isOutputOn(){return this.outputOn}setVoltage(t){this.targetVoltage=Math.max(0,t),this.currentVoltage=this.targetVoltage}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=(Math.random()-.5)*.008,e=Math.max(0,this.currentVoltage+t);let i=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&e>1){const o=this.linkedLoad.measure(e).pout,l=.938-.006*Math.abs(e-8.8),c=(Math.random()-.5)*.004,u=Math.min(.965,Math.max(.72,l+c)),d=o>.01?o/u:e*.02;i=Math.min(this.currentLimit,d/e+(Math.random()-.5)*.003)}const s=e*i;return{vin:Math.round(e*1e3)/1e3,iin:Math.round(i*1e3)/1e3,pin:Math.round(s*1e3)/1e3}}}class Yx{constructor(){fe(this,"connected",!0);fe(this,"inputOn",!1);fe(this,"mode","CC");fe(this,"targetCurrent",1);fe(this,"targetPower",10);fe(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t}isInputOn(){return this.inputOn}setMode(t){this.mode=t}setCurrent(t){this.targetCurrent=Math.max(0,t)}setPower(t){this.targetPower=Math.max(0,t)}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if((t??10)<1)return{vout:0,iout:0,pout:0};const i=5;let s=0,r=0;if(this.mode==="CC"){s=this.targetCurrent+(Math.random()-.5)*.004;const o=i-s*.015+(Math.random()-.5)*.003;return r=o*s,{vout:Math.max(0,Math.round(o*1e3)/1e3),iout:Math.max(0,Math.round(s*1e3)/1e3),pout:Math.max(0,Math.round(r*1e3)/1e3)}}else{r=this.targetPower+(Math.random()-.5)*.01;const o=i-r/i*.015+(Math.random()-.5)*.003;return s=r/o,{vout:Math.max(0,Math.round(o*1e3)/1e3),iout:Math.max(0,Math.round(s*1e3)/1e3),pout:Math.max(0,Math.round(r*1e3)/1e3)}}}}class _d{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setOutput(t){return`:OUTP CH1,${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT? CH1
`,`:MEAS:CURR? CH1
`,`:MEAS:POWE? CH1
`]}}class io{static setMode(t){return`:SOUR:FUNC ${t}
`}static setCurrent(t){return`:SOUR:CURR ${t.toFixed(3)}
`}static setPower(t){return`:SOUR:POW ${t.toFixed(3)}
`}static setInput(t){return`:SOUR:INP ${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT?
`,`:MEAS:CURR?
`,`:MEAS:POW?
`]}}class vd{constructor(t){fe(this,"type");fe(this,"isVirtual",!0);fe(this,"port",null);fe(this,"reader",null);fe(this,"writer",null);fe(this,"encoder",null);fe(this,"decoder",null);fe(this,"readBuffer","");fe(this,"virtualPsu",new qx);fe(this,"virtualLoad",new Yx);fe(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){try{this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer)throw new Error("Port writer not initialized");await this.writer.write(t)}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e)break;t&&(this.readBuffer+=t)}}catch(t){console.warn("Read stream terminated:",t)}}}const es=class es{constructor(){fe(this,"psu",new vd("PSU"));fe(this,"load",new vd("LOAD"));this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu)}static getInstance(){return es.instance||(es.instance=new es),es.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(_d.setVoltageAndLimit(e,i)),await this.psu.write(_d.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(io.setMode(e)),e==="CC"?await this.load.write(io.setCurrent(i)):await this.load.write(io.setPower(i)),await this.load.write(io.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};fe(es,"instance");let $l=es;const Kx="PowerChipTesterDB",Zx=1,vn="test_runs",np=5;function wa(){return new Promise((n,t)=>{const e=indexedDB.open(Kx,Zx);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(vn)||s.createObjectStore(vn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function Jx(n){const t=await wa();return new Promise((e,i)=>{const s=t.transaction([vn],"readwrite");s.objectStore(vn).put(n),s.oncomplete=async()=>{try{await ey(t),e()}catch(o){console.warn("Pruning error:",o),e()}},s.onerror=()=>i(s.error)})}async function ip(){const n=await wa();return new Promise((t,e)=>{const o=n.transaction([vn],"readonly").objectStore(vn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<np?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Qx(n){const t=await wa();return new Promise((e,i)=>{const o=t.transaction([vn],"readonly").objectStore(vn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function ty(n){const t=await wa();return new Promise((e,i)=>{const s=t.transaction([vn],"readwrite");s.objectStore(vn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function ey(n){return new Promise((t,e)=>{const s=n.transaction([vn],"readwrite").objectStore(vn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>np&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function jl(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(h=>`"${h}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(h=>{const g=n.voltageSteps.map(v=>{const m=n.points.find(p=>Math.abs(p.voltageTarget-v)<1e-4&&Math.abs(p.loadTarget-h)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${h}",${g.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(h=>{i.push([h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),`"${h.loadMode}"`,h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2),`"${h.status}"`].join(","))});const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const ny={class:"min-h-screen flex flex-col bg-slate-950 text-slate-100"},iy={class:"flex-1 p-6 flex flex-col gap-5 max-w-[1600px] w-full mx-auto"},sy={class:"grid grid-cols-1 lg:grid-cols-12 gap-5 flex-1 min-h-[500px]"},ry={class:"lg:col-span-5 flex flex-col"},oy={class:"lg:col-span-7 flex flex-col"},ay=Nn({__name:"ConsoleView",setup(n){const t=$l.getInstance(),e=Te(!1),i=Te(!1),s=Te([]),r=Te(!1),o=Te(!1);let a=null,l=null;const c=qs({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3.5,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:30}),u=Te([]),d=Te([]),f=Te([]),h=Te(null),g=qs({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0});function v(){const lt=[];for(let vt=c.voltageMin;vt<=c.voltageMax+1e-5;vt+=c.voltageStep)lt.push(Math.round(vt*100)/100);const D=[];for(let vt=c.loadMin;vt<=c.loadMax+1e-5;vt+=c.loadStep)D.push(Math.round(vt*100)/100);u.value=lt,d.value=D;const T=[];let ft=1;for(const vt of lt)for(const q of D)T.push({stepIndex:ft++,voltageTarget:vt,loadTarget:q,loadMode:c.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});f.value=T,g.totalSteps=T.length,g.currentStep=0,g.progressPercent=0}async function m(){t.isBothConnected()||t.autoConnectVirtual(),v(),r.value=!0,o.value=!1,a=new AbortController,W();try{let lt=0;for(let D=0;D<f.value.length&&!a.signal.aborted;D++){for(;o.value&&!a.signal.aborted;)await new Promise(U=>setTimeout(U,200));const T=f.value[D];T.status="running",g.activeTargetV=T.voltageTarget,g.activeTargetLoad=T.loadTarget,g.currentStep=D+1,await t.setPsuOutput(!0,T.voltageTarget,c.inputCurrentLimit),await t.setLoadInput(!0,c.loadMode,T.loadTarget);const ft=c.stepDwellTime*1e3,vt=Math.min(150,ft*.15),q=Math.round(1e3/c.sampleRateHz),ct=performance.now();let gt=0,L=0,K=0,et=0,mt=0,S=0,R=0;for(;performance.now()-ct<ft&&!a.signal.aborted;){for(;o.value&&!a.signal.aborted;)await new Promise(Z=>setTimeout(Z,200));const U=performance.now()-ct,x=t.measure();g.vin=x.vin,g.iin=x.iin,g.pin=x.pin,g.vout=x.vout,g.iout=x.iout,g.pout=x.pout,g.efficiency=x.efficiency,U>=vt&&U<=ft-vt&&(gt+=x.vin,L+=x.iin,K+=x.pin,et+=x.vout,mt+=x.iout,S+=x.pout,R++),await new Promise(Z=>setTimeout(Z,q))}if(R>0)T.vin=Math.round(gt/R*1e3)/1e3,T.iin=Math.round(L/R*1e3)/1e3,T.pin=Math.round(K/R*1e3)/1e3,T.vout=Math.round(et/R*1e3)/1e3,T.iout=Math.round(mt/R*1e3)/1e3,T.pout=Math.round(S/R*1e3)/1e3,T.efficiency=T.pin>.01?Math.min(100,Math.round(T.pout/T.pin*1e4)/100):0;else{const U=t.measure();T.vin=U.vin,T.iin=U.iin,T.pin=U.pin,T.vout=U.vout,T.iout=U.iout,T.pout=U.pout,T.efficiency=U.efficiency}T.status="completed",T.timestamp=Date.now(),lt++,g.progressPercent=lt/f.value.length*100}a.signal.aborted||await p()}catch(lt){console.error("Test execution error:",lt),alert("测试执行过程中发生异常："+String(lt))}finally{r.value=!1,o.value=!1,F()}}async function p(){await t.emergencyStopAll();const lt=f.value.filter(K=>K.status==="completed");let D=0,T=100,ft=0,vt;lt.forEach(K=>{K.efficiency>D&&(D=K.efficiency,vt=K),K.efficiency<T&&(T=K.efficiency),ft+=K.efficiency});const q=lt.length>0?ft/lt.length:0,ct=`test_${Date.now()}`,gt=new Date,L={id:ct,title:`芯片效率扫描 [${c.voltageMin}V-${c.voltageMax}V | ${c.loadMode}]`,createdAt:gt.toISOString(),config:{...c},voltageSteps:[...u.value],loadSteps:[...d.value],points:JSON.parse(JSON.stringify(f.value)),summary:{totalPoints:f.value.length,completedPoints:lt.length,maxEfficiency:Math.round(D*100)/100,minEfficiency:Math.round(T*100)/100,avgEfficiency:Math.round(q*100)/100,optimalPoint:vt,durationSeconds:Math.round(lt.length*c.stepDwellTime)}};h.value=L,await Jx(L),await O(),R_({particleCount:80,spread:70,origin:{y:.6},colors:["#38bdf8","#10b981","#f59e0b","#8b5cf6"]}),I(ct)}function C(){o.value=!0}function A(){o.value=!1}async function M(){a&&a.abort(),r.value=!1,o.value=!1,await t.emergencyStopAll(),F()}function W(){l&&clearInterval(l),l=window.setInterval(()=>{if(!r.value){const lt=t.measure();g.vin=lt.vin,g.iin=lt.iin,g.pin=lt.pin,g.vout=lt.vout,g.iout=lt.iout,g.pout=lt.pout,g.efficiency=lt.efficiency}},100)}function F(){l&&(clearInterval(l),l=null)}function I(lt){var vt;const D=lt||((vt=h.value)==null?void 0:vt.id);if(!D){alert("暂无已完成的测试数据可供 3D 展现！");return}const ft=`${window.location.href.split("#")[0]}#/result/${D}`;window.open(ft,"_blank")}function $(){h.value&&jl(h.value)}function P(lt){jl(lt)}async function w(lt){await ty(lt),await O()}async function O(){try{s.value=await ip()}catch(lt){console.warn("Failed to load history:",lt)}}async function ht(){await O(),i.value=!0}function nt(){t.autoConnectVirtual(),e.value=!1}async function tt(lt){try{await t.psu.connectPhysical(lt)}catch(D){alert("连接电源串口失败: "+((D==null?void 0:D.message)||D))}}async function B(){await t.psu.disconnect()}async function st(lt){try{await t.load.connectPhysical(lt)}catch(D){alert("连接负载串口失败: "+((D==null?void 0:D.message)||D))}}async function Y(){await t.load.disconnect()}function z(lt){g.vin=lt.vin,g.iin=lt.iin,g.pin=lt.pin,g.vout=lt.vout,g.iout=lt.iout,g.pout=lt.pout,g.efficiency=lt.efficiency}return va(async()=>{t.autoConnectVirtual(),v(),W(),await O()}),xa(()=>{F()}),(lt,D)=>{var T;return Ft(),kt("div",ny,[Ee(I_,{"psu-connected":$e(t).psu.state.connected,"psu-port-name":$e(t).psu.state.portName,"load-connected":$e(t).load.state.connected,"load-port-name":$e(t).load.state.portName,"has-data":h.value!==null&&h.value.points.some(ft=>ft.status==="completed"),"latest-test-id":(T=h.value)==null?void 0:T.id,onOpenSerialModal:D[0]||(D[0]=ft=>e.value=!0),onToggleHistory:ht,onExportCsv:$,onOpen3dNewWindow:D[1]||(D[1]=ft=>{var vt;return I((vt=h.value)==null?void 0:vt.id)})},null,8,["psu-connected","psu-port-name","load-connected","load-port-name","has-data","latest-test-id"]),y("main",iy,[Ee(iv,{metrics:g},null,8,["metrics"]),y("div",sy,[y("div",ry,[Ee(Pv,{config:c,"is-running":r.value,"is-paused":o.value,onStartTest:m,onPauseTest:C,onResumeTest:A,onStopTest:M},null,8,["config","is-running","is-paused"])]),y("div",oy,[Ee(ux,{points:f.value,"voltage-steps":u.value,"load-steps":d.value,"load-mode":c.loadMode,onSelectPoint:z},null,8,["points","voltage-steps","load-steps","load-mode"])])])]),Ee(Cx,{"is-open":e.value,"psu-connected":$e(t).psu.state.connected,"psu-port-name":$e(t).psu.state.portName,"load-connected":$e(t).load.state.connected,"load-port-name":$e(t).load.state.portName,"web-serial-supported":$e(t).psu.isWebSerialSupported(),onClose:D[2]||(D[2]=ft=>e.value=!1),onConnectVirtual:nt,onConnectPhysicalPsu:tt,onDisconnectPsu:B,onConnectPhysicalLoad:st,onDisconnectLoad:Y},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),Ee(jx,{"is-open":i.value,records:s.value,onClose:D[3]||(D[3]=ft=>i.value=!1),onOpen3d:I,onExportRecordCsv:P,onDeleteRecord:w},null,8,["is-open","records"])])}}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nu="170",Ws={ROTATE:0,DOLLY:1,PAN:2},ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ly=0,xd=1,cy=2,sp=1,rp=2,oi=3,ki=0,nn=1,di=2,Ii=0,Xs=1,yd=2,Md=3,Sd=4,uy=5,Qi=100,dy=101,fy=102,hy=103,py=104,my=200,gy=201,_y=202,vy=203,ql=204,Yl=205,xy=206,yy=207,My=208,Sy=209,by=210,Ey=211,wy=212,Ty=213,Ay=214,Kl=0,Zl=1,Jl=2,Js=3,Ql=4,tc=5,ec=6,nc=7,op=0,Cy=1,Ry=2,Ui=0,Py=1,Dy=2,Ly=3,Iy=4,Uy=5,Ny=6,Oy=7,ap=300,Qs=301,tr=302,ic=303,sc=304,Ta=306,rc=1e3,rs=1001,oc=1002,Pn=1003,Fy=1004,so=1005,wn=1006,qa=1007,os=1008,gi=1009,lp=1010,cp=1011,Hr=1012,iu=1013,us=1014,hi=1015,jr=1016,su=1017,ru=1018,er=1020,up=35902,dp=1021,fp=1022,Tn=1023,hp=1024,pp=1025,$s=1026,nr=1027,mp=1028,ou=1029,gp=1030,au=1031,lu=1033,ko=33776,zo=33777,Vo=33778,Ho=33779,ac=35840,lc=35841,cc=35842,uc=35843,dc=36196,fc=37492,hc=37496,pc=37808,mc=37809,gc=37810,_c=37811,vc=37812,xc=37813,yc=37814,Mc=37815,Sc=37816,bc=37817,Ec=37818,wc=37819,Tc=37820,Ac=37821,Go=36492,Cc=36494,Rc=36495,_p=36283,Pc=36284,Dc=36285,Lc=36286,By=3200,ky=3201,vp=0,zy=1,Pi="",pn="srgb",sr="srgb-linear",Aa="linear",le="srgb",vs=7680,bd=519,Vy=512,Hy=513,Gy=514,xp=515,Wy=516,Xy=517,$y=518,jy=519,Ic=35044,Ed="300 es",pi=2e3,na=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ir=Math.PI/180,Uc=180/Math.PI;function Ni(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[i&255]+Fe[i>>8&255]+Fe[i>>16&255]+Fe[i>>24&255]).toLowerCase()}function qe(n,t,e){return Math.max(t,Math.min(e,n))}function qy(n,t){return(n%t+t)%t}function Ya(n,t,e){return(1-e)*n+e*t}function Gn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Yy={DEG2RAD:Ir};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=s[0],m=s[3],p=s[6],C=s[1],A=s[4],M=s[7],W=s[2],F=s[5],I=s[8];return r[0]=o*v+a*C+l*W,r[3]=o*m+a*A+l*F,r[6]=o*p+a*M+l*I,r[1]=c*v+u*C+d*W,r[4]=c*m+u*A+d*F,r[7]=c*p+u*M+d*I,r[2]=f*v+h*C+g*W,r[5]=f*m+h*A+g*F,r[8]=f*p+h*M+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,g=e*d+i*f+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ka.makeScale(t,e)),this}rotate(t){return this.premultiply(Ka.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ka.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ka=new Yt;function yp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ky(){const n=ia("canvas");return n.style.display="block",n}const wd={};function br(n){n in wd||(wd[n]=!0,console.warn(n))}function Zy(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Jy(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Qy(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=mi(n.r),n.g=mi(n.g),n.b=mi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=js(n.r),n.g=js(n.g),n.b=js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?Aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Td=[.64,.33,.3,.6,.15,.06],Ad=[.2126,.7152,.0722],Cd=[.3127,.329],Rd=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pd=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[sr]:{primaries:Td,whitePoint:Cd,transfer:Aa,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:Ad,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:Td,whitePoint:Cd,transfer:le,toXYZ:Rd,fromXYZ:Pd,luminanceCoefficients:Ad,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}});let xs;class tM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=ia("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(mi(e[i]/255)*255):e[i]=mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eM=0;class Mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Za(s[o].image)):r.push(Za(s[o]))}else r=Za(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Za(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?tM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;class Je extends ps{constructor(t=Je.DEFAULT_IMAGE,e=Je.DEFAULT_MAPPING,i=rs,s=rs,r=wn,o=os,a=Tn,l=gi,c=Je.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Ni(),this.name="",this.source=new Mp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ap)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rc:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case oc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rc:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case oc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=ap;Je.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,M=(h+1)/2,W=(p+1)/2,F=(u+f)/4,I=(d+v)/4,$=(g+m)/4;return A>M&&A>W?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=F/i,r=I/i):M>W?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=F/s,r=$/s):W<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(W),i=I/r,s=$/r),this.set(i,s,r,e),this}let C=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-g)/C,this.y=(d-v)/C,this.z=(f-u)/C,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends ps{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends iM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Sp extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends Je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*v,C=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const W=Math.sqrt(A),F=Math.atan2(W,p*C);m=Math.sin(m*F)/W,a=Math.sin(a*F)/W}const M=a*C;if(l=l*m+f*M,c=c*m+h*M,u=u*m+g*M,d=d*m+v*M,m===1-a){const W=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=W,c*=W,u*=W,d*=W}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],g=r[o+3];return t[e]=a*g+u*d+l*h-c*f,t[e+1]=l*g+u*f+c*d-a*h,t[e+2]=c*g+u*h+a*f-l*d,t[e+3]=u*g-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,i=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ja=new k,Dd=new fs;class qr{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ro.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(t.matrixWorld),this.union(ro)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),oo.subVectors(this.max,fr),ys.subVectors(t.a,fr),Ms.subVectors(t.b,fr),Ss.subVectors(t.c,fr),Mi.subVectors(Ms,ys),Si.subVectors(Ss,Ms),Wi.subVectors(ys,Ss);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Wi.z,Wi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Wi.z,0,-Wi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Wi.y,Wi.x,0];return!Qa(e,ys,Ms,Ss,oo)||(e=[1,0,0,0,1,0,0,0,1],!Qa(e,ys,Ms,Ss,oo))?!1:(ao.crossVectors(Mi,Si),e=[ao.x,ao.y,ao.z],Qa(e,ys,Ms,Ss,oo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ei=[new k,new k,new k,new k,new k,new k,new k,new k],Mn=new k,ro=new qr,ys=new k,Ms=new k,Ss=new k,Mi=new k,Si=new k,Wi=new k,fr=new k,oo=new k,ao=new k,Xi=new k;function Qa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Xi.fromArray(n,r);const a=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),u=i.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rM=new qr,hr=new k,tl=new k;class Ca{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):rM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);const e=hr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(tl)),this.expandByPoint(hr.copy(t.center).sub(tl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,el=new k,lo=new k,bi=new k,nl=new k,co=new k,il=new k;class Ra{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){el.copy(t).add(e).multiplyScalar(.5),lo.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(el);const r=t.distanceTo(e)*.5,o=-this.direction.dot(lo),a=bi.dot(this.direction),l=-bi.dot(lo),c=bi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=r*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(el).addScaledVector(lo,f),h}intersectSphere(t,e){ni.subVectors(t.center,this.origin);const i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){nl.subVectors(e,t),co.subVectors(i,t),il.crossVectors(nl,co);let o=this.direction.dot(il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);const l=a*this.direction.dot(co.crossVectors(bi,co));if(l<0)return null;const c=a*this.direction.dot(nl.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(il);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,g,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+g*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=g+h*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;e[0]=f+v*a,e[4]=g*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-g,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=g+h*a,e[1]=h+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,h=o*d,g=a*u,v=a*d;e[0]=l*u,e[4]=g*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,h=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=g*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+g,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,h=o*c,g=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-g,e[2]=g*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oM,t,aM)}lookAt(t,e,i){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),Ei.crossVectors(i,rn),Ei.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),Ei.crossVectors(i,rn)),Ei.normalize(),uo.crossVectors(rn,Ei),s[0]=Ei.x,s[4]=uo.x,s[8]=rn.x,s[1]=Ei.y,s[5]=uo.y,s[9]=rn.y,s[2]=Ei.z,s[6]=uo.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],C=i[3],A=i[7],M=i[11],W=i[15],F=s[0],I=s[4],$=s[8],P=s[12],w=s[1],O=s[5],ht=s[9],nt=s[13],tt=s[2],B=s[6],st=s[10],Y=s[14],z=s[3],lt=s[7],D=s[11],T=s[15];return r[0]=o*F+a*w+l*tt+c*z,r[4]=o*I+a*O+l*B+c*lt,r[8]=o*$+a*ht+l*st+c*D,r[12]=o*P+a*nt+l*Y+c*T,r[1]=u*F+d*w+f*tt+h*z,r[5]=u*I+d*O+f*B+h*lt,r[9]=u*$+d*ht+f*st+h*D,r[13]=u*P+d*nt+f*Y+h*T,r[2]=g*F+v*w+m*tt+p*z,r[6]=g*I+v*O+m*B+p*lt,r[10]=g*$+v*ht+m*st+p*D,r[14]=g*P+v*nt+m*Y+p*T,r[3]=C*F+A*w+M*tt+W*z,r[7]=C*I+A*O+M*B+W*lt,r[11]=C*$+A*ht+M*st+W*D,r[15]=C*P+A*nt+M*Y+W*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+v*(+e*l*h-e*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+e*c*d-e*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],g=t[12],v=t[13],m=t[14],p=t[15],C=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,A=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,M=u*v*c-g*d*c+g*a*h-o*v*h-u*a*p+o*d*p,W=g*d*l-u*v*l-g*a*f+o*v*f+u*a*m-o*d*m,F=e*C+i*A+s*M+r*W;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/F;return t[0]=C*I,t[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*I,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*I,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*I,t[4]=A*I,t[5]=(u*m*r-g*f*r+g*s*h-e*m*h-u*s*p+e*f*p)*I,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*h+e*l*h)*I,t[8]=M*I,t[9]=(g*d*r-u*v*r-g*i*h+e*v*h+u*i*p-e*d*p)*I,t[10]=(o*v*r-g*a*r+g*i*c-e*v*c-o*i*p+e*a*p)*I,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*h-e*a*h)*I,t[12]=W*I,t[13]=(u*v*s-g*d*s+g*i*f-e*v*f-u*i*m+e*d*m)*I,t[14]=(g*a*s-o*v*s-g*i*l+e*v*l+o*i*m-e*a*m)*I,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,g=r*d,v=o*u,m=o*d,p=a*d,C=l*c,A=l*u,M=l*d,W=i.x,F=i.y,I=i.z;return s[0]=(1-(v+p))*W,s[1]=(h+M)*W,s[2]=(g-A)*W,s[3]=0,s[4]=(h-M)*F,s[5]=(1-(f+p))*F,s[6]=(m+C)*F,s[7]=0,s[8]=(g+A)*I,s[9]=(m-C)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const o=bs.set(s[4],s[5],s[6]).length(),a=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Sn.copy(this);const c=1/r,u=1/o,d=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=d,Sn.elements[9]*=d,Sn.elements[10]*=d,e.setFromRotationMatrix(Sn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=pi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let h,g;if(a===pi)h=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===na)h=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=pi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,h=(i+s)*u;let g,v;if(a===pi)g=(o+r)*d,v=-2*d;else if(a===na)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const bs=new k,Sn=new _e,oM=new k(0,0,0),aM=new k(1,1,1),Ei=new k,uo=new k,rn=new k,Ld=new _e,Id=new fs;class Yn{constructor(t=0,e=0,i=0,s=Yn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Id.setFromEuler(this),this.setFromQuaternion(Id,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yn.DEFAULT_ORDER="XYZ";class cu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let lM=0;const Ud=new k,Es=new fs,ii=new _e,fo=new k,pr=new k,cM=new k,uM=new fs,Nd=new k(1,0,0),Od=new k(0,1,0),Fd=new k(0,0,1),Bd={type:"added"},dM={type:"removed"},ws={type:"childadded",child:null},sl={type:"childremoved",child:null};class Ie extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ie.DEFAULT_UP.clone();const t=new k,e=new Yn,i=new fs,s=new k(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Nd,t)}rotateY(t){return this.rotateOnAxis(Od,t)}rotateZ(t){return this.rotateOnAxis(Fd,t)}translateOnAxis(t,e){return Ud.copy(t).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nd,t)}translateY(t){return this.translateOnAxis(Od,t)}translateZ(t){return this.translateOnAxis(Fd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fo.copy(t):fo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(pr,fo,this.up):ii.lookAt(fo,pr,this.up),this.quaternion.setFromRotationMatrix(ii),s&&(ii.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(ii),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bd),ws.child=t,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dM),sl.child=t,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bd),ws.child=t,this.dispatchEvent(ws),ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,t,cM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pr,uM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ie.DEFAULT_UP=new k(0,1,0);Ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new k,si=new k,rl=new k,ri=new k,Ts=new k,As=new k,kd=new k,ol=new k,al=new k,ll=new k,cl=new de,ul=new de,dl=new de;class ln{constructor(t=new k,e=new k,i=new k){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bn.subVectors(t,e),s.cross(bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bn.subVectors(s,e),si.subVectors(i,e),rl.subVectors(t,e);const o=bn.dot(bn),a=bn.dot(si),l=bn.dot(rl),c=si.dot(si),u=si.dot(rl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-h-g,g,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ri)===null?!1:ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ri.x),l.addScaledVector(o,ri.y),l.addScaledVector(a,ri.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return cl.setScalar(0),ul.setScalar(0),dl.setScalar(0),cl.fromBufferAttribute(t,e),ul.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(cl,r.x),o.addScaledVector(ul,r.y),o.addScaledVector(dl,r.z),o}static isFrontFacing(t,e,i,s){return bn.subVectors(i,e),si.subVectors(t,e),bn.cross(si).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),si.subVectors(this.a,this.b),bn.cross(si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return ln.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ts.subVectors(s,i),As.subVectors(r,i),ol.subVectors(t,i);const l=Ts.dot(ol),c=As.dot(ol);if(l<=0&&c<=0)return e.copy(i);al.subVectors(t,s);const u=Ts.dot(al),d=As.dot(al);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ts,o);ll.subVectors(t,r);const h=Ts.dot(ll),g=As.dot(ll);if(g>=0&&h<=g)return e.copy(r);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(As,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return kd.subVectors(r,s),a=(d-u)/(d-u+(h-g)),e.copy(s).addScaledVector(kd,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Ts,o).addScaledVector(As,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},ho={h:0,s:0,l:0};function fl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=qy(t,1),e=qe(e,0,1),i=qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=fl(o,r,t+1/3),this.g=fl(o,r,t),this.b=fl(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const i=bp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return Qt.fromWorkingColorSpace(Be.copy(this),t),Math.round(qe(Be.r*255,0,255))*65536+Math.round(qe(Be.g*255,0,255))*256+Math.round(qe(Be.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Be.copy(this),e);const i=Be.r,s=Be.g,r=Be.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=pn){Qt.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,i=Be.g,s=Be.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(wi),this.setHSL(wi.h+t,wi.s+e,wi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(wi),t.getHSL(ho);const i=Ya(wi.h,ho.h,e),s=Ya(wi.s,ho.s,e),r=Ya(wi.l,ho.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Gt;Gt.NAMES=bp;let fM=0;class ms extends ps{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fM++}),this.uuid=Ni(),this.name="",this.blending=Xs,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ql,this.blendDst=Yl,this.blendEquation=Qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ql&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==Qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ep extends ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new k,po=new Vt;class Dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ic,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)po.fromBufferAttribute(this,e),po.applyMatrix3(t),this.setXY(e,po.x,po.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ic&&(t.usage=this.usage),t}}class wp extends Dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Tp extends Dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class gn extends Dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hM=0;const fn=new _e,hl=new Ie,Cs=new k,on=new qr,mr=new qr,De=new k;class Ke extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yp(t)?Tp:wp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,i){return fn.makeTranslation(t,e,i),this.applyMatrix4(fn),this}scale(t,e,i){return fn.makeScale(t,e,i),this.applyMatrix4(fn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];on.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(on.min,mr.min),on.expandByPoint(De),De.addVectors(on.max,mr.max),on.expandByPoint(De)):(on.expandByPoint(mr.min),on.expandByPoint(mr.max))}on.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)De.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(t,c),De.add(Cs)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let $=0;$<i.count;$++)a[$]=new k,l[$]=new k;const c=new k,u=new k,d=new k,f=new Vt,h=new Vt,g=new Vt,v=new k,m=new k;function p($,P,w){c.fromBufferAttribute(i,$),u.fromBufferAttribute(i,P),d.fromBufferAttribute(i,w),f.fromBufferAttribute(r,$),h.fromBufferAttribute(r,P),g.fromBufferAttribute(r,w),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const O=1/(h.x*g.y-g.x*h.y);isFinite(O)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(O),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(O),a[$].add(v),a[P].add(v),a[w].add(v),l[$].add(m),l[P].add(m),l[w].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let $=0,P=C.length;$<P;++$){const w=C[$],O=w.start,ht=w.count;for(let nt=O,tt=O+ht;nt<tt;nt+=3)p(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const A=new k,M=new k,W=new k,F=new k;function I($){W.fromBufferAttribute(s,$),F.copy(W);const P=a[$];A.copy(P),A.sub(W.multiplyScalar(W.dot(P))).normalize(),M.crossVectors(F,P);const O=M.dot(l[$])<0?-1:1;o.setXYZW($,A.x,A.y,A.z,O)}for(let $=0,P=C.length;$<P;++$){const w=C[$],O=w.start,ht=w.count;for(let nt=O,tt=O+ht;nt<tt;nt+=3)I(t.getX(nt+0)),I(t.getX(nt+1)),I(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,d=new k;if(t)for(let f=0,h=t.count;f<h;f+=3){const g=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new Dn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zd=new _e,$i=new Ra,mo=new Ca,Vd=new k,go=new k,_o=new k,vo=new k,pl=new k,xo=new k,Hd=new k,yo=new k;class An extends Ie{constructor(t=new Ke,e=new Ep){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){xo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(pl.fromBufferAttribute(d,t),o?xo.addScaledVector(pl,u):xo.addScaledVector(pl.sub(e),u))}e.add(xo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(mo.containsPoint($i.origin)===!1&&($i.intersectSphere(mo,Vd)===null||$i.origin.distanceToSquared(Vd)>(t.far-t.near)**2))&&(zd.copy(r).invert(),$i.copy(t.ray).applyMatrix4(zd),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),A=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=C,W=A;M<W;M+=3){const F=a.getX(M),I=a.getX(M+1),$=a.getX(M+2);s=Mo(this,p,t,i,c,u,d,F,I,$),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const C=a.getX(m),A=a.getX(m+1),M=a.getX(m+2);s=Mo(this,o,t,i,c,u,d,C,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=o[m.materialIndex],C=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=C,W=A;M<W;M+=3){const F=M,I=M+1,$=M+2;s=Mo(this,p,t,i,c,u,d,F,I,$),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const C=m,A=m+1,M=m+2;s=Mo(this,o,t,i,c,u,d,C,A,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function pM(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ki,a),l===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(yo);return c<e.near||c>e.far?null:{distance:c,point:yo.clone(),object:n}}function Mo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,go),n.getVertexPosition(l,_o),n.getVertexPosition(c,vo);const u=pM(n,t,e,i,go,_o,vo,Hd);if(u){const d=new k;ln.getBarycoord(Hd,go,_o,vo,d),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,d,new Vt)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,d,new Vt)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};ln.getNormal(go,_o,vo,f.normal),u.face=f,u.barycoord=d}return u}class rr extends Ke{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(u,3)),this.setAttribute("uv",new gn(d,2));function g(v,m,p,C,A,M,W,F,I,$,P){const w=M/I,O=W/$,ht=M/2,nt=W/2,tt=F/2,B=I+1,st=$+1;let Y=0,z=0;const lt=new k;for(let D=0;D<st;D++){const T=D*O-nt;for(let ft=0;ft<B;ft++){const vt=ft*w-ht;lt[v]=vt*C,lt[m]=T*A,lt[p]=tt,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[m]=0,lt[p]=F>0?1:-1,u.push(lt.x,lt.y,lt.z),d.push(ft/I),d.push(1-D/$),Y+=1}}for(let D=0;D<$;D++)for(let T=0;T<I;T++){const ft=f+T+B*D,vt=f+T+B*(D+1),q=f+(T+1)+B*(D+1),ct=f+(T+1)+B*D;l.push(ft,vt,ct),l.push(vt,q,ct),z+=6}a.addGroup(h,z,P),h+=z,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ir(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function We(n){const t={};for(let e=0;e<n.length;e++){const i=ir(n[e]);for(const s in i)t[s]=i[s]}return t}function mM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ap(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const gM={clone:ir,merge:We};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zi extends ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ir(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Cp extends Ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new k,Gd=new Vt,Wd=new Vt;class an extends Cp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Uc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Uc*2*Math.atan(Math.tan(Ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Gd,Wd),e.subVectors(Wd,Gd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ir*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Rs=-90,Ps=1;class xM extends Ie{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an(Rs,Ps,t,e);s.layers=this.layers,this.add(s);const r=new an(Rs,Ps,t,e);r.layers=this.layers,this.add(r);const o=new an(Rs,Ps,t,e);o.layers=this.layers,this.add(o);const a=new an(Rs,Ps,t,e);a.layers=this.layers,this.add(a);const l=new an(Rs,Ps,t,e);l.layers=this.layers,this.add(l);const c=new an(Rs,Ps,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rp extends Je{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Qs,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yM extends ds{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Rp(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rr(5,5,5),r=new zi({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ii});r.uniforms.tEquirect.value=e;const o=new An(s,r),a=e.minFilter;return e.minFilter===os&&(e.minFilter=wn),new xM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const ml=new k,MM=new k,SM=new Yt;class Ri{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ml.subVectors(i,e).cross(MM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ml),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||SM.getNormalMatrix(t),s=this.coplanarPoint(ml).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Ca,So=new k;class uu{constructor(t=new Ri,e=new Ri,i=new Ri,s=new Ri,r=new Ri,o=new Ri){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],g=s[9],v=s[10],m=s[11],p=s[12],C=s[13],A=s[14],M=s[15];if(i[0].setComponents(l-r,f-c,m-h,M-p).normalize(),i[1].setComponents(l+r,f+c,m+h,M+p).normalize(),i[2].setComponents(l+o,f+u,m+g,M+C).normalize(),i[3].setComponents(l-o,f-u,m-g,M-C).normalize(),i[4].setComponents(l-a,f-d,m-v,M-A).normalize(),e===pi)i[5].setComponents(l+a,f+d,m+v,M+A).normalize();else if(e===na)i[5].setComponents(a,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(So.x=s.normal.x>0?t.max.x:t.min.x,So.y=s.normal.y>0?t.max.y:t.min.y,So.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function bM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Yr extends Ke{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const C=p*f-o;for(let A=0;A<c;A++){const M=A*d-r;g.push(M,-C,0),v.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){const A=C+c*p,M=C+c*(p+1),W=C+1+c*(p+1),F=C+1+c*p;h.push(A,M,F),h.push(M,W,F)}this.setIndex(h),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.width,t.height,t.widthSegments,t.heightSegments)}}var EM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
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
#endif`,IM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jM=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YM=`vec3 transformedNormal = objectNormal;
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
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nS=`#ifdef USE_ENVMAP
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
#endif`,iS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
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
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mS=`uniform bool receiveShadow;
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
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
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
#endif`,SS=`struct PhysicalMaterial {
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
}`,bS=`
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
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
#endif`,wS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,PS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IS=`#if defined( USE_POINTS_UV )
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
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,NS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`#ifdef USE_MORPHTARGETS
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$S=`#ifdef USE_NORMALMAP
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
#endif`,jS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,QS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lb=`float getShadowMask() {
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
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,hb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
#endif`,vb=`#ifdef USE_TRANSMISSION
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Eb=`uniform sampler2D t2D;
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
}`,wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`#include <common>
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
}`,Pb=`#if DEPTH_PACKING == 3200
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
}`,Db=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Ib=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`uniform float scale;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,Fb=`#include <common>
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
}`,Bb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,zb=`#define LAMBERT
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
}`,Vb=`#define MATCAP
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
}`,Hb=`#define MATCAP
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
}`,Gb=`#define NORMAL
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
}`,Wb=`#define NORMAL
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
}`,Xb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,jb=`#define STANDARD
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
}`,qb=`#define STANDARD
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
}`,Yb=`#define TOON
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
}`,Kb=`#define TOON
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
}`,Zb=`uniform float size;
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
}`,Jb=`uniform vec3 diffuse;
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
}`,Qb=`#include <common>
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
}`,tE=`uniform vec3 color;
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
}`,eE=`uniform float rotation;
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
}`,nE=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:EM,alphahash_pars_fragment:wM,alphamap_fragment:TM,alphamap_pars_fragment:AM,alphatest_fragment:CM,alphatest_pars_fragment:RM,aomap_fragment:PM,aomap_pars_fragment:DM,batching_pars_vertex:LM,batching_vertex:IM,begin_vertex:UM,beginnormal_vertex:NM,bsdfs:OM,iridescence_fragment:FM,bumpmap_pars_fragment:BM,clipping_planes_fragment:kM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:HM,color_fragment:GM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:$M,common:jM,cube_uv_reflection_fragment:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:KM,displacementmap_vertex:ZM,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:tS,colorspace_pars_fragment:eS,envmap_fragment:nS,envmap_common_pars_fragment:iS,envmap_pars_fragment:sS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:gS,envmap_vertex:oS,fog_vertex:aS,fog_pars_vertex:lS,fog_fragment:cS,fog_pars_fragment:uS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:fS,lights_lambert_fragment:hS,lights_lambert_pars_fragment:pS,lights_pars_begin:mS,lights_toon_fragment:_S,lights_toon_pars_fragment:vS,lights_phong_fragment:xS,lights_phong_pars_fragment:yS,lights_physical_fragment:MS,lights_physical_pars_fragment:SS,lights_fragment_begin:bS,lights_fragment_maps:ES,lights_fragment_end:wS,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:CS,logdepthbuf_vertex:RS,map_fragment:PS,map_pars_fragment:DS,map_particle_fragment:LS,map_particle_pars_fragment:IS,metalnessmap_fragment:US,metalnessmap_pars_fragment:NS,morphinstance_vertex:OS,morphcolor_vertex:FS,morphnormal_vertex:BS,morphtarget_pars_vertex:kS,morphtarget_vertex:zS,normal_fragment_begin:VS,normal_fragment_maps:HS,normal_pars_fragment:GS,normal_pars_vertex:WS,normal_vertex:XS,normalmap_pars_fragment:$S,clearcoat_normal_fragment_begin:jS,clearcoat_normal_fragment_maps:qS,clearcoat_pars_fragment:YS,iridescence_pars_fragment:KS,opaque_fragment:ZS,packing:JS,premultiplied_alpha_fragment:QS,project_vertex:tb,dithering_fragment:eb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:rb,shadowmap_pars_vertex:ob,shadowmap_vertex:ab,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:db,skinnormal_vertex:fb,specularmap_fragment:hb,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:vb,uv_pars_fragment:xb,uv_pars_vertex:yb,uv_vertex:Mb,worldpos_vertex:Sb,background_vert:bb,background_frag:Eb,backgroundCube_vert:wb,backgroundCube_frag:Tb,cube_vert:Ab,cube_frag:Cb,depth_vert:Rb,depth_frag:Pb,distanceRGBA_vert:Db,distanceRGBA_frag:Lb,equirect_vert:Ib,equirect_frag:Ub,linedashed_vert:Nb,linedashed_frag:Ob,meshbasic_vert:Fb,meshbasic_frag:Bb,meshlambert_vert:kb,meshlambert_frag:zb,meshmatcap_vert:Vb,meshmatcap_frag:Hb,meshnormal_vert:Gb,meshnormal_frag:Wb,meshphong_vert:Xb,meshphong_frag:$b,meshphysical_vert:jb,meshphysical_frag:qb,meshtoon_vert:Yb,meshtoon_frag:Kb,points_vert:Zb,points_frag:Jb,shadow_vert:Qb,shadow_frag:tE,sprite_vert:eE,sprite_frag:nE},wt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Vn={basic:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:We([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:We([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:We([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:We([wt.points,wt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:We([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:We([wt.common,wt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:We([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:We([wt.sprite,wt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:We([wt.common,wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:We([wt.lights,wt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Vn.physical={uniforms:We([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};const bo={r:0,b:0,g:0},qi=new Yn,iE=new _e;function sE(n,t,e,i,s,r,o){const a=new Gt(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function g(C){let A=C.isScene===!0?C.background:null;return A&&A.isTexture&&(A=(C.backgroundBlurriness>0?e:t).get(A)),A}function v(C){let A=!1;const M=g(C);M===null?p(a,l):M&&M.isColor&&(p(M,1),A=!0);const W=n.xr.getEnvironmentBlendMode();W==="additive"?i.buffers.color.setClear(0,0,0,1,o):W==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,A){const M=g(A);M&&(M.isCubeTexture||M.mapping===Ta)?(u===void 0&&(u=new An(new rr(1,1,1),new zi({name:"BackgroundCubeMaterial",uniforms:ir(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(W,F,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(A.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(iE.makeRotationFromEuler(qi)),u.material.toneMapped=Qt.getTransfer(M.colorSpace)!==le,(d!==M||f!==M.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,h=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new An(new Yr(2,2),new zi({name:"BackgroundMaterial",uniforms:ir(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==le,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,A){C.getRGB(bo,Ap(n)),i.buffers.color.setClear(bo.r,bo.g,bo.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(C,A=1){a.set(C),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,p(a,l)},render:v,addToRenderList:m}}function rE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,O,ht,nt,tt){let B=!1;const st=d(nt,ht,O);r!==st&&(r=st,c(r.object)),B=h(w,nt,ht,tt),B&&g(w,nt,ht,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(w,O,ht,nt),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,O,ht){const nt=ht.wireframe===!0;let tt=i[w.id];tt===void 0&&(tt={},i[w.id]=tt);let B=tt[O.id];B===void 0&&(B={},tt[O.id]=B);let st=B[nt];return st===void 0&&(st=f(l()),B[nt]=st),st}function f(w){const O=[],ht=[],nt=[];for(let tt=0;tt<e;tt++)O[tt]=0,ht[tt]=0,nt[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ht,attributeDivisors:nt,object:w,attributes:{},index:null}}function h(w,O,ht,nt){const tt=r.attributes,B=O.attributes;let st=0;const Y=ht.getAttributes();for(const z in Y)if(Y[z].location>=0){const D=tt[z];let T=B[z];if(T===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(T=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(T=w.instanceColor)),D===void 0||D.attribute!==T||T&&D.data!==T.data)return!0;st++}return r.attributesNum!==st||r.index!==nt}function g(w,O,ht,nt){const tt={},B=O.attributes;let st=0;const Y=ht.getAttributes();for(const z in Y)if(Y[z].location>=0){let D=B[z];D===void 0&&(z==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),z==="instanceColor"&&w.instanceColor&&(D=w.instanceColor));const T={};T.attribute=D,D&&D.data&&(T.data=D.data),tt[z]=T,st++}r.attributes=tt,r.attributesNum=st,r.index=nt}function v(){const w=r.newAttributes;for(let O=0,ht=w.length;O<ht;O++)w[O]=0}function m(w){p(w,0)}function p(w,O){const ht=r.newAttributes,nt=r.enabledAttributes,tt=r.attributeDivisors;ht[w]=1,nt[w]===0&&(n.enableVertexAttribArray(w),nt[w]=1),tt[w]!==O&&(n.vertexAttribDivisor(w,O),tt[w]=O)}function C(){const w=r.newAttributes,O=r.enabledAttributes;for(let ht=0,nt=O.length;ht<nt;ht++)O[ht]!==w[ht]&&(n.disableVertexAttribArray(ht),O[ht]=0)}function A(w,O,ht,nt,tt,B,st){st===!0?n.vertexAttribIPointer(w,O,ht,tt,B):n.vertexAttribPointer(w,O,ht,nt,tt,B)}function M(w,O,ht,nt){v();const tt=nt.attributes,B=ht.getAttributes(),st=O.defaultAttributeValues;for(const Y in B){const z=B[Y];if(z.location>=0){let lt=tt[Y];if(lt===void 0&&(Y==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),Y==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),lt!==void 0){const D=lt.normalized,T=lt.itemSize,ft=t.get(lt);if(ft===void 0)continue;const vt=ft.buffer,q=ft.type,ct=ft.bytesPerElement,gt=q===n.INT||q===n.UNSIGNED_INT||lt.gpuType===iu;if(lt.isInterleavedBufferAttribute){const L=lt.data,K=L.stride,et=lt.offset;if(L.isInstancedInterleavedBuffer){for(let mt=0;mt<z.locationSize;mt++)p(z.location+mt,L.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let mt=0;mt<z.locationSize;mt++)m(z.location+mt);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let mt=0;mt<z.locationSize;mt++)A(z.location+mt,T/z.locationSize,q,D,K*ct,(et+T/z.locationSize*mt)*ct,gt)}else{if(lt.isInstancedBufferAttribute){for(let L=0;L<z.locationSize;L++)p(z.location+L,lt.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let L=0;L<z.locationSize;L++)m(z.location+L);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let L=0;L<z.locationSize;L++)A(z.location+L,T/z.locationSize,q,D,T*ct,T/z.locationSize*L*ct,gt)}}else if(st!==void 0){const D=st[Y];if(D!==void 0)switch(D.length){case 2:n.vertexAttrib2fv(z.location,D);break;case 3:n.vertexAttrib3fv(z.location,D);break;case 4:n.vertexAttrib4fv(z.location,D);break;default:n.vertexAttrib1fv(z.location,D)}}}}C()}function W(){$();for(const w in i){const O=i[w];for(const ht in O){const nt=O[ht];for(const tt in nt)u(nt[tt].object),delete nt[tt];delete O[ht]}delete i[w]}}function F(w){if(i[w.id]===void 0)return;const O=i[w.id];for(const ht in O){const nt=O[ht];for(const tt in nt)u(nt[tt].object),delete nt[tt];delete O[ht]}delete i[w.id]}function I(w){for(const O in i){const ht=i[O];if(ht[w.id]===void 0)continue;const nt=ht[w.id];for(const tt in nt)u(nt[tt].object),delete nt[tt];delete ht[w.id]}}function $(){P(),o=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:$,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:F,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function oE(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=u[v]*f[v];e.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function aE(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Tn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const $=I===jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==gi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==hi&&!$)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),W=g>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:C,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:W,maxSamples:F}}function lE(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ri,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,A=C*4;let M=p.clippingState||null;l.value=M,M=u(g,f,A,h);for(let W=0;W!==A;++W)M[W]=e[W];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,M=h;A!==v;++A,M+=4)o.copy(d[A]).applyMatrix4(C,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function cE(n){let t=new WeakMap;function e(o,a){return a===ic?o.mapping=Qs:a===sc&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ic||a===sc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new yM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Dp extends Cp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const zs=4,Xd=[.125,.215,.35,.446,.526,.582],ts=20,gl=new Dp,$d=new Gt;let _l=null,vl=0,xl=0,yl=!1;const Zi=(1+Math.sqrt(5))/2,Ds=1/Zi,jd=[new k(-Zi,Ds,0),new k(Zi,Ds,0),new k(-Ds,0,Zi),new k(Ds,0,Zi),new k(0,Zi,-Ds),new k(0,Zi,Ds),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class qd{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,t.scissorTest=!1,Eo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qs||t.mapping===tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:jr,format:Tn,colorSpace:sr,depthBuffer:!1},s=Yd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uE(r)),this._blurMaterial=dE(r,t,e)}return s}_compileMaterial(t){const e=new An(this._lodPlanes[0],t);this._renderer.compile(e,gl)}_sceneToCubeUV(t,e,i,s){const a=new an(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor($d),u.toneMapping=Ui,u.autoClear=!1;const h=new Ep({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new An(new rr,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy($d),v=!0);for(let p=0;p<6;p++){const C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const A=this._cubeSize;Eo(s,C*A,p>2?A:0,A,A),u.setRenderTarget(s),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Qs||t.mapping===tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new An(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Eo(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,gl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jd[(s-r-1)%jd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new An(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ts-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):ts;m>ts&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let C=0;for(let I=0;I<ts;++I){const $=I/v,P=Math.exp(-$*$/2);p.push(P),I===0?C+=P:I<m&&(C+=2*P)}for(let I=0;I<p.length;I++)p[I]=p[I]/C;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=g,f.mipInt.value=A-i;const M=this._sizeLods[s],W=3*M*(s>A-zs?s-A+zs:0),F=4*(this._cubeSize-M);Eo(e,W,F,3*M,2*M),l.setRenderTarget(e),l.render(d,gl)}}function uE(n){const t=[],e=[],i=[];let s=n;const r=n-zs+1+Xd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-zs?l=Xd[o-n+zs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,v=3,m=2,p=1,C=new Float32Array(v*g*h),A=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let F=0;F<h;F++){const I=F%3*2/3-1,$=F>2?0:-1,P=[I,$,0,I+2/3,$,0,I+2/3,$+1,0,I,$,0,I+2/3,$+1,0,I,$+1,0];C.set(P,v*g*F),A.set(f,m*g*F);const w=[F,F,F,F,F,F];M.set(w,p*g*F)}const W=new Ke;W.setAttribute("position",new Dn(C,v)),W.setAttribute("uv",new Dn(A,m)),W.setAttribute("faceIndex",new Dn(M,p)),t.push(W),s>zs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yd(n,t,e){const i=new ds(n,t,e);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Eo(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function dE(n,t,e){const i=new Float32Array(ts),s=new k(0,1,0);return new zi({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Kd(){return new zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Zd(){return new zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function fE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ic||l===sc,u=l===Qs||l===tr;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new qd(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new qd(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function hE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&br("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function pE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(h!==null){const C=h.array;v=h.version;for(let A=0,M=C.length;A<M;A+=3){const W=C[A+0],F=C[A+1],I=C[A+2];f.push(W,F,F,I,I,W)}}else if(g!==void 0){const C=g.array;v=g.version;for(let A=0,M=C.length/3-1;A<M;A+=3){const W=A+0,F=A+1,I=A+2;f.push(W,F,F,I,I,W)}}else return;const m=new(yp(f)?Tp:wp)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,r,f*o,g),e.update(h,i,g))}function u(f,h,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];e.update(m,i,1)}function d(f,h,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,g);let p=0;for(let C=0;C<g;C++)p+=h[C]*v[C];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function _E(n,t,e){const i=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){$.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var h=w;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let W=a.attributes.position.count*M,F=1;W>t.maxTextureSize&&(F=Math.ceil(W/t.maxTextureSize),W=t.maxTextureSize);const I=new Float32Array(W*F*4*d),$=new Sp(I,W,F,d);$.type=hi,$.needsUpdate=!0;const P=M*4;for(let O=0;O<d;O++){const ht=p[O],nt=C[O],tt=A[O],B=W*F*4*O;for(let st=0;st<ht.count;st++){const Y=st*P;g===!0&&(s.fromBufferAttribute(ht,st),I[B+Y+0]=s.x,I[B+Y+1]=s.y,I[B+Y+2]=s.z,I[B+Y+3]=0),v===!0&&(s.fromBufferAttribute(nt,st),I[B+Y+4]=s.x,I[B+Y+5]=s.y,I[B+Y+6]=s.z,I[B+Y+7]=0),m===!0&&(s.fromBufferAttribute(tt,st),I[B+Y+8]=s.x,I[B+Y+9]=s.y,I[B+Y+10]=s.z,I[B+Y+11]=tt.itemSize===4?s.w:1)}}f={count:d,texture:$,size:new Vt(W,F)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function vE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Lp extends Je{constructor(t,e,i,s,r,o,a,l,c,u=$s){if(u!==$s&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$s&&(i=us),i===void 0&&u===nr&&(i=er),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ip=new Je,Jd=new Lp(1,1),Up=new Sp,Np=new sM,Op=new Rp,Qd=[],tf=[],ef=new Float32Array(16),nf=new Float32Array(9),sf=new Float32Array(4);function or(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Qd[s];if(r===void 0&&(r=new Float32Array(s),Qd[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Re(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Pe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Pa(n,t){let e=tf[t];e===void 0&&(e=new Int32Array(t),tf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function xE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function yE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2fv(this.addr,t),Pe(e,t)}}function ME(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;n.uniform3fv(this.addr,t),Pe(e,t)}}function SE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4fv(this.addr,t),Pe(e,t)}}function bE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;sf.set(i),n.uniformMatrix2fv(this.addr,!1,sf),Pe(e,i)}}function EE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;nf.set(i),n.uniformMatrix3fv(this.addr,!1,nf),Pe(e,i)}}function wE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Re(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,i))return;ef.set(i),n.uniformMatrix4fv(this.addr,!1,ef),Pe(e,i)}}function TE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function AE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2iv(this.addr,t),Pe(e,t)}}function CE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3iv(this.addr,t),Pe(e,t)}}function RE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4iv(this.addr,t),Pe(e,t)}}function PE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function DE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;n.uniform2uiv(this.addr,t),Pe(e,t)}}function LE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;n.uniform3uiv(this.addr,t),Pe(e,t)}}function IE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;n.uniform4uiv(this.addr,t),Pe(e,t)}}function UE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Jd.compareFunction=xp,r=Jd):r=Ip,e.setTexture2D(t||r,s)}function NE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Np,s)}function OE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Op,s)}function FE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Up,s)}function BE(n){switch(n){case 5126:return xE;case 35664:return yE;case 35665:return ME;case 35666:return SE;case 35674:return bE;case 35675:return EE;case 35676:return wE;case 5124:case 35670:return TE;case 35667:case 35671:return AE;case 35668:case 35672:return CE;case 35669:case 35673:return RE;case 5125:return PE;case 36294:return DE;case 36295:return LE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return UE;case 35679:case 36299:case 36307:return NE;case 35680:case 36300:case 36308:case 36293:return OE;case 36289:case 36303:case 36311:case 36292:return FE}}function kE(n,t){n.uniform1fv(this.addr,t)}function zE(n,t){const e=or(t,this.size,2);n.uniform2fv(this.addr,e)}function VE(n,t){const e=or(t,this.size,3);n.uniform3fv(this.addr,e)}function HE(n,t){const e=or(t,this.size,4);n.uniform4fv(this.addr,e)}function GE(n,t){const e=or(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function WE(n,t){const e=or(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function XE(n,t){const e=or(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $E(n,t){n.uniform1iv(this.addr,t)}function jE(n,t){n.uniform2iv(this.addr,t)}function qE(n,t){n.uniform3iv(this.addr,t)}function YE(n,t){n.uniform4iv(this.addr,t)}function KE(n,t){n.uniform1uiv(this.addr,t)}function ZE(n,t){n.uniform2uiv(this.addr,t)}function JE(n,t){n.uniform3uiv(this.addr,t)}function QE(n,t){n.uniform4uiv(this.addr,t)}function t1(n,t,e){const i=this.cache,s=t.length,r=Pa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ip,r[o])}function e1(n,t,e){const i=this.cache,s=t.length,r=Pa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Np,r[o])}function n1(n,t,e){const i=this.cache,s=t.length,r=Pa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Op,r[o])}function i1(n,t,e){const i=this.cache,s=t.length,r=Pa(e,s);Re(i,r)||(n.uniform1iv(this.addr,r),Pe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Up,r[o])}function s1(n){switch(n){case 5126:return kE;case 35664:return zE;case 35665:return VE;case 35666:return HE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return $E;case 35667:case 35671:return jE;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return KE;case 36294:return ZE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}class r1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=BE(e.type)}}class o1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=s1(e.type)}}class a1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function rf(n,t){n.seq.push(t),n.map[t.id]=t}function l1(n,t,e){const i=n.name,s=i.length;for(Ml.lastIndex=0;;){const r=Ml.exec(i),o=Ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){rf(e,c===void 0?new r1(a,n,t):new o1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new a1(a),rf(e,d)),e=d}}}class Wo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);l1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function of(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const c1=37297;let u1=0;function d1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const af=new Yt;function f1(n){Qt._getMatrix(af,Qt.workingColorSpace,n);const t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Aa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function lf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+d1(n.getShaderSource(t),o)}else return s}function h1(n,t){const e=f1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function p1(n,t){let e;switch(t){case Py:e="Linear";break;case Dy:e="Reinhard";break;case Ly:e="Cineon";break;case Iy:e="ACESFilmic";break;case Ny:e="AgX";break;case Oy:e="Neutral";break;case Uy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const wo=new k;function m1(){Qt.getLuminanceCoefficients(wo);const n=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function g1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function _1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function v1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Er(n){return n!==""}function cf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(n){return n.replace(x1,M1)}const y1=new Map;function M1(n,t){let e=Kt[t];if(e===void 0){const i=y1.get(t);if(i!==void 0)e=Kt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Nc(e)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function df(n){return n.replace(S1,b1)}function b1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ff(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function E1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===sp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===rp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function w1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qs:case tr:t="ENVMAP_TYPE_CUBE";break;case Ta:t="ENVMAP_TYPE_CUBE_UV";break}return t}function T1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:t="ENVMAP_MODE_REFRACTION";break}return t}function A1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case op:t="ENVMAP_BLENDING_MULTIPLY";break;case Cy:t="ENVMAP_BLENDING_MIX";break;case Ry:t="ENVMAP_BLENDING_ADD";break}return t}function C1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function R1(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=E1(e),c=w1(e),u=T1(e),d=A1(e),f=C1(e),h=g1(e),g=_1(r),v=s.createProgram();let m,p,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(m=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ui?"#define TONE_MAPPING":"",e.toneMapping!==Ui?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Ui?p1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,h1("linearToOutputTexel",e.outputColorSpace),m1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Er).join(`
`)),o=Nc(o),o=cf(o,e),o=uf(o,e),a=Nc(a),a=cf(a,e),a=uf(a,e),o=df(o),a=df(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=C+m+o,M=C+p+a,W=of(s,s.VERTEX_SHADER,A),F=of(s,s.FRAGMENT_SHADER,M);s.attachShader(v,W),s.attachShader(v,F),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(O){if(n.debug.checkShaderErrors){const ht=s.getProgramInfoLog(v).trim(),nt=s.getShaderInfoLog(W).trim(),tt=s.getShaderInfoLog(F).trim();let B=!0,st=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,W,F);else{const Y=lf(s,W,"vertex"),z=lf(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ht+`
`+Y+`
`+z)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(nt===""||tt==="")&&(st=!1);st&&(O.diagnostics={runnable:B,programLog:ht,vertexShader:{log:nt,prefix:m},fragmentShader:{log:tt,prefix:p}})}s.deleteShader(W),s.deleteShader(F),$=new Wo(s,v),P=v1(s,v)}let $;this.getUniforms=function(){return $===void 0&&I(this),$};let P;this.getAttributes=function(){return P===void 0&&I(this),P};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(v,c1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=u1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=W,this.fragmentShader=F,this}let P1=0;class D1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new L1(t),e.set(t,i)),i}}class L1{constructor(t){this.id=P1++,this.code=t,this.usedTimes=0}}function I1(n,t,e,i,s,r,o){const a=new cu,l=new D1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(P){return c.add(P),P===0?"uv":`uv${P}`}function m(P,w,O,ht,nt){const tt=ht.fog,B=nt.geometry,st=P.isMeshStandardMaterial?ht.environment:null,Y=(P.isMeshStandardMaterial?e:t).get(P.envMap||st),z=Y&&Y.mapping===Ta?Y.image.height:null,lt=g[P.type];P.precision!==null&&(h=s.getMaxPrecision(P.precision),h!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",h,"instead."));const D=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,T=D!==void 0?D.length:0;let ft=0;B.morphAttributes.position!==void 0&&(ft=1),B.morphAttributes.normal!==void 0&&(ft=2),B.morphAttributes.color!==void 0&&(ft=3);let vt,q,ct,gt;if(lt){const oe=Vn[lt];vt=oe.vertexShader,q=oe.fragmentShader}else vt=P.vertexShader,q=P.fragmentShader,l.update(P),ct=l.getVertexShaderID(P),gt=l.getFragmentShaderID(P);const L=n.getRenderTarget(),K=n.state.buffers.depth.getReversed(),et=nt.isInstancedMesh===!0,mt=nt.isBatchedMesh===!0,S=!!P.map,R=!!P.matcap,U=!!Y,x=!!P.aoMap,Z=!!P.lightMap,Q=!!P.bumpMap,rt=!!P.normalMap,j=!!P.displacementMap,dt=!!P.emissiveMap,H=!!P.metalnessMap,b=!!P.roughnessMap,_=P.anisotropy>0,N=P.clearcoat>0,J=P.dispersion>0,ut=P.iridescence>0,it=P.sheen>0,St=P.transmission>0,yt=_&&!!P.anisotropyMap,Mt=N&&!!P.clearcoatMap,Ht=N&&!!P.clearcoatNormalMap,xt=N&&!!P.clearcoatRoughnessMap,At=ut&&!!P.iridescenceMap,Bt=ut&&!!P.iridescenceThicknessMap,Lt=it&&!!P.sheenColorMap,Tt=it&&!!P.sheenRoughnessMap,Jt=!!P.specularMap,$t=!!P.specularColorMap,pe=!!P.specularIntensityMap,V=St&&!!P.transmissionMap,Ct=St&&!!P.thicknessMap,pt=!!P.gradientMap,_t=!!P.alphaMap,Dt=P.alphaTest>0,Rt=!!P.alphaHash,jt=!!P.extensions;let Me=Ui;P.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Me=n.toneMapping);const Oe={shaderID:lt,shaderType:P.type,shaderName:P.name,vertexShader:vt,fragmentShader:q,defines:P.defines,customVertexShaderID:ct,customFragmentShaderID:gt,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:h,batching:mt,batchingColor:mt&&nt._colorsTexture!==null,instancing:et,instancingColor:et&&nt.instanceColor!==null,instancingMorph:et&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:sr,alphaToCoverage:!!P.alphaToCoverage,map:S,matcap:R,envMap:U,envMapMode:U&&Y.mapping,envMapCubeUVHeight:z,aoMap:x,lightMap:Z,bumpMap:Q,normalMap:rt,displacementMap:f&&j,emissiveMap:dt,normalMapObjectSpace:rt&&P.normalMapType===zy,normalMapTangentSpace:rt&&P.normalMapType===vp,metalnessMap:H,roughnessMap:b,anisotropy:_,anisotropyMap:yt,clearcoat:N,clearcoatMap:Mt,clearcoatNormalMap:Ht,clearcoatRoughnessMap:xt,dispersion:J,iridescence:ut,iridescenceMap:At,iridescenceThicknessMap:Bt,sheen:it,sheenColorMap:Lt,sheenRoughnessMap:Tt,specularMap:Jt,specularColorMap:$t,specularIntensityMap:pe,transmission:St,transmissionMap:V,thicknessMap:Ct,gradientMap:pt,opaque:P.transparent===!1&&P.blending===Xs&&P.alphaToCoverage===!1,alphaMap:_t,alphaTest:Dt,alphaHash:Rt,combine:P.combine,mapUv:S&&v(P.map.channel),aoMapUv:x&&v(P.aoMap.channel),lightMapUv:Z&&v(P.lightMap.channel),bumpMapUv:Q&&v(P.bumpMap.channel),normalMapUv:rt&&v(P.normalMap.channel),displacementMapUv:j&&v(P.displacementMap.channel),emissiveMapUv:dt&&v(P.emissiveMap.channel),metalnessMapUv:H&&v(P.metalnessMap.channel),roughnessMapUv:b&&v(P.roughnessMap.channel),anisotropyMapUv:yt&&v(P.anisotropyMap.channel),clearcoatMapUv:Mt&&v(P.clearcoatMap.channel),clearcoatNormalMapUv:Ht&&v(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(P.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(P.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&v(P.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(P.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(P.sheenRoughnessMap.channel),specularMapUv:Jt&&v(P.specularMap.channel),specularColorMapUv:$t&&v(P.specularColorMap.channel),specularIntensityMapUv:pe&&v(P.specularIntensityMap.channel),transmissionMapUv:V&&v(P.transmissionMap.channel),thicknessMapUv:Ct&&v(P.thicknessMap.channel),alphaMapUv:_t&&v(P.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(rt||_),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!B.attributes.uv&&(S||_t),fog:!!tt,useFog:P.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:K,skinning:nt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:S&&P.map.isVideoTexture===!0&&Qt.getTransfer(P.map.colorSpace)===le,decodeVideoTextureEmissive:dt&&P.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(P.emissiveMap.colorSpace)===le,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===di,flipSided:P.side===nn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:jt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&P.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function p(P){const w=[];if(P.shaderID?w.push(P.shaderID):(w.push(P.customVertexShaderID),w.push(P.customFragmentShaderID)),P.defines!==void 0)for(const O in P.defines)w.push(O),w.push(P.defines[O]);return P.isRawShaderMaterial===!1&&(C(w,P),A(w,P),w.push(n.outputColorSpace)),w.push(P.customProgramCacheKey),w.join()}function C(P,w){P.push(w.precision),P.push(w.outputColorSpace),P.push(w.envMapMode),P.push(w.envMapCubeUVHeight),P.push(w.mapUv),P.push(w.alphaMapUv),P.push(w.lightMapUv),P.push(w.aoMapUv),P.push(w.bumpMapUv),P.push(w.normalMapUv),P.push(w.displacementMapUv),P.push(w.emissiveMapUv),P.push(w.metalnessMapUv),P.push(w.roughnessMapUv),P.push(w.anisotropyMapUv),P.push(w.clearcoatMapUv),P.push(w.clearcoatNormalMapUv),P.push(w.clearcoatRoughnessMapUv),P.push(w.iridescenceMapUv),P.push(w.iridescenceThicknessMapUv),P.push(w.sheenColorMapUv),P.push(w.sheenRoughnessMapUv),P.push(w.specularMapUv),P.push(w.specularColorMapUv),P.push(w.specularIntensityMapUv),P.push(w.transmissionMapUv),P.push(w.thicknessMapUv),P.push(w.combine),P.push(w.fogExp2),P.push(w.sizeAttenuation),P.push(w.morphTargetsCount),P.push(w.morphAttributeCount),P.push(w.numDirLights),P.push(w.numPointLights),P.push(w.numSpotLights),P.push(w.numSpotLightMaps),P.push(w.numHemiLights),P.push(w.numRectAreaLights),P.push(w.numDirLightShadows),P.push(w.numPointLightShadows),P.push(w.numSpotLightShadows),P.push(w.numSpotLightShadowsWithMaps),P.push(w.numLightProbes),P.push(w.shadowMapType),P.push(w.toneMapping),P.push(w.numClippingPlanes),P.push(w.numClipIntersection),P.push(w.depthPacking)}function A(P,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),P.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),P.push(a.mask)}function M(P){const w=g[P.type];let O;if(w){const ht=Vn[w];O=gM.clone(ht.uniforms)}else O=P.uniforms;return O}function W(P,w){let O;for(let ht=0,nt=u.length;ht<nt;ht++){const tt=u[ht];if(tt.cacheKey===w){O=tt,++O.usedTimes;break}}return O===void 0&&(O=new R1(n,w,P,r),u.push(O)),O}function F(P){if(--P.usedTimes===0){const w=u.indexOf(P);u[w]=u[u.length-1],u.pop(),P.destroy()}}function I(P){l.remove(P)}function $(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:W,releaseProgram:F,releaseShaderCache:I,programs:u,dispose:$}}function U1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function N1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,h,g,v,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,f,h,g,v,m){const p=o(d,f,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(d,f,h,g,v,m){const p=o(d,f,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||N1),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function O1(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new pf,n.set(i,[o])):s>=r.length?(o=new pf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function F1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new Gt};break;case"SpotLight":e={position:new k,direction:new k,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new k,halfWidth:new k,halfHeight:new k};break}return n[t.id]=e,e}}}function B1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let k1=0;function z1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function V1(n){const t=new F1,e=B1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const s=new k,r=new _e,o=new _e;function a(c){let u=0,d=0,f=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,C=0,A=0,M=0,W=0,F=0,I=0;c.sort(z1);for(let P=0,w=c.length;P<w;P++){const O=c[P],ht=O.color,nt=O.intensity,tt=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=ht.r*nt,d+=ht.g*nt,f+=ht.b*nt;else if(O.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(O.sh.coefficients[st],nt);I++}else if(O.isDirectionalLight){const st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const Y=O.shadow,z=e.get(O);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=B,i.directionalShadowMatrix[h]=O.shadow.matrix,C++}i.directional[h]=st,h++}else if(O.isSpotLight){const st=t.get(O);st.position.setFromMatrixPosition(O.matrixWorld),st.color.copy(ht).multiplyScalar(nt),st.distance=tt,st.coneCos=Math.cos(O.angle),st.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),st.decay=O.decay,i.spot[v]=st;const Y=O.shadow;if(O.map&&(i.spotLightMap[W]=O.map,W++,Y.updateMatrices(O),O.castShadow&&F++),i.spotLightMatrix[v]=Y.matrix,O.castShadow){const z=e.get(O);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=B,M++}v++}else if(O.isRectAreaLight){const st=t.get(O);st.color.copy(ht).multiplyScalar(nt),st.halfWidth.set(O.width*.5,0,0),st.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=st,m++}else if(O.isPointLight){const st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),st.distance=O.distance,st.decay=O.decay,O.castShadow){const Y=O.shadow,z=e.get(O);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=B,i.pointShadowMatrix[g]=O.shadow.matrix,A++}i.point[g]=st,g++}else if(O.isHemisphereLight){const st=t.get(O);st.skyColor.copy(O.color).multiplyScalar(nt),st.groundColor.copy(O.groundColor).multiplyScalar(nt),i.hemi[p]=st,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const $=i.hash;($.directionalLength!==h||$.pointLength!==g||$.spotLength!==v||$.rectAreaLength!==m||$.hemiLength!==p||$.numDirectionalShadows!==C||$.numPointShadows!==A||$.numSpotShadows!==M||$.numSpotMaps!==W||$.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=M+W-F,i.spotLightMap.length=W,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=I,$.directionalLength=h,$.pointLength=g,$.spotLength=v,$.rectAreaLength=m,$.hemiLength=p,$.numDirectionalShadows=C,$.numPointShadows=A,$.numSpotShadows=M,$.numSpotMaps=W,$.numLightProbes=I,i.version=k1++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){const A=c[p];if(A.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(A.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(A.width*.5,0,0),M.halfHeight.set(0,A.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(A.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(A.matrixWorld),M.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const M=i.hemi[v];M.direction.setFromMatrixPosition(A.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function mf(n){const t=new V1(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function H1(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new mf(n),t.set(s,[a])):r>=o.length?(a=new mf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class G1 extends ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=By,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class W1 extends ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const X1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function j1(n,t,e){let i=new uu;const s=new Vt,r=new Vt,o=new de,a=new G1({depthPacking:ky}),l=new W1,c={},u=e.maxTextureSize,d={[ki]:nn,[nn]:ki,[di]:di},f=new zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:X1,fragmentShader:$1}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new An(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sp;let p=this.type;this.render=function(F,I,$){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||F.length===0)return;const P=n.getRenderTarget(),w=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),ht=n.state;ht.setBlending(Ii),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const nt=p!==oi&&this.type===oi,tt=p===oi&&this.type!==oi;for(let B=0,st=F.length;B<st;B++){const Y=F[B],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const lt=z.getFrameExtents();if(s.multiply(lt),r.copy(z.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/lt.x),s.x=r.x*lt.x,z.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/lt.y),s.y=r.y*lt.y,z.mapSize.y=r.y)),z.map===null||nt===!0||tt===!0){const T=this.type!==oi?{minFilter:Pn,magFilter:Pn}:{};z.map!==null&&z.map.dispose(),z.map=new ds(s.x,s.y,T),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const D=z.getViewportCount();for(let T=0;T<D;T++){const ft=z.getViewport(T);o.set(r.x*ft.x,r.y*ft.y,r.x*ft.z,r.y*ft.w),ht.viewport(o),z.updateMatrices(Y,T),i=z.getFrustum(),M(I,$,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===oi&&C(z,$),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(P,w,O)};function C(F,I){const $=t.update(v);f.defines.VSM_SAMPLES!==F.blurSamples&&(f.defines.VSM_SAMPLES=F.blurSamples,h.defines.VSM_SAMPLES=F.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ds(s.x,s.y)),f.uniforms.shadow_pass.value=F.map.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(I,null,$,f,v,null),h.uniforms.shadow_pass.value=F.mapPass.texture,h.uniforms.resolution.value=F.mapSize,h.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(I,null,$,h,v,null)}function A(F,I,$,P){let w=null;const O=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(O!==void 0)w=O;else if(w=$.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ht=w.uuid,nt=I.uuid;let tt=c[ht];tt===void 0&&(tt={},c[ht]=tt);let B=tt[nt];B===void 0&&(B=w.clone(),tt[nt]=B,I.addEventListener("dispose",W)),w=B}if(w.visible=I.visible,w.wireframe=I.wireframe,P===oi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:d[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,$.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ht=n.properties.get(w);ht.light=$}return w}function M(F,I,$,P,w){if(F.visible===!1)return;if(F.layers.test(I.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&w===oi)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);const nt=t.update(F),tt=F.material;if(Array.isArray(tt)){const B=nt.groups;for(let st=0,Y=B.length;st<Y;st++){const z=B[st],lt=tt[z.materialIndex];if(lt&&lt.visible){const D=A(F,lt,P,w);F.onBeforeShadow(n,F,I,$,nt,D,z),n.renderBufferDirect($,null,nt,D,F,z),F.onAfterShadow(n,F,I,$,nt,D,z)}}}else if(tt.visible){const B=A(F,tt,P,w);F.onBeforeShadow(n,F,I,$,nt,B,null),n.renderBufferDirect($,null,nt,B,F,null),F.onAfterShadow(n,F,I,$,nt,B,null)}}const ht=F.children;for(let nt=0,tt=ht.length;nt<tt;nt++)M(ht[nt],I,$,P,w)}function W(F){F.target.removeEventListener("dispose",W);for(const $ in c){const P=c[$],w=F.target.uuid;w in P&&(P[w].dispose(),delete P[w])}}}const q1={[Kl]:Zl,[Jl]:ec,[Ql]:nc,[Js]:tc,[Zl]:Kl,[ec]:Jl,[nc]:Ql,[tc]:Js};function Y1(n,t){function e(){let V=!1;const Ct=new de;let pt=null;const _t=new de(0,0,0,0);return{setMask:function(Dt){pt!==Dt&&!V&&(n.colorMask(Dt,Dt,Dt,Dt),pt=Dt)},setLocked:function(Dt){V=Dt},setClear:function(Dt,Rt,jt,Me,Oe){Oe===!0&&(Dt*=Me,Rt*=Me,jt*=Me),Ct.set(Dt,Rt,jt,Me),_t.equals(Ct)===!1&&(n.clearColor(Dt,Rt,jt,Me),_t.copy(Ct))},reset:function(){V=!1,pt=null,_t.set(-1,0,0,0)}}}function i(){let V=!1,Ct=!1,pt=null,_t=null,Dt=null;return{setReversed:function(Rt){if(Ct!==Rt){const jt=t.get("EXT_clip_control");Ct?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Dt;Dt=null,this.setClear(Me)}Ct=Rt},getReversed:function(){return Ct},setTest:function(Rt){Rt?L(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(Rt){pt!==Rt&&!V&&(n.depthMask(Rt),pt=Rt)},setFunc:function(Rt){if(Ct&&(Rt=q1[Rt]),_t!==Rt){switch(Rt){case Kl:n.depthFunc(n.NEVER);break;case Zl:n.depthFunc(n.ALWAYS);break;case Jl:n.depthFunc(n.LESS);break;case Js:n.depthFunc(n.LEQUAL);break;case Ql:n.depthFunc(n.EQUAL);break;case tc:n.depthFunc(n.GEQUAL);break;case ec:n.depthFunc(n.GREATER);break;case nc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Rt}},setLocked:function(Rt){V=Rt},setClear:function(Rt){Dt!==Rt&&(Ct&&(Rt=1-Rt),n.clearDepth(Rt),Dt=Rt)},reset:function(){V=!1,pt=null,_t=null,Dt=null,Ct=!1}}}function s(){let V=!1,Ct=null,pt=null,_t=null,Dt=null,Rt=null,jt=null,Me=null,Oe=null;return{setTest:function(oe){V||(oe?L(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(oe){Ct!==oe&&!V&&(n.stencilMask(oe),Ct=oe)},setFunc:function(oe,xn,Kn){(pt!==oe||_t!==xn||Dt!==Kn)&&(n.stencilFunc(oe,xn,Kn),pt=oe,_t=xn,Dt=Kn)},setOp:function(oe,xn,Kn){(Rt!==oe||jt!==xn||Me!==Kn)&&(n.stencilOp(oe,xn,Kn),Rt=oe,jt=xn,Me=Kn)},setLocked:function(oe){V=oe},setClear:function(oe){Oe!==oe&&(n.clearStencil(oe),Oe=oe)},reset:function(){V=!1,Ct=null,pt=null,_t=null,Dt=null,Rt=null,jt=null,Me=null,Oe=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,A=null,M=null,W=null,F=null,I=new Gt(0,0,0),$=0,P=!1,w=null,O=null,ht=null,nt=null,tt=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,Y=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),st=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),st=Y>=2);let lt=null,D={};const T=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),vt=new de().fromArray(T),q=new de().fromArray(ft);function ct(V,Ct,pt,_t){const Dt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(V,Rt),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<pt;jt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Ct+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Rt}const gt={};gt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(Js),Q(!1),rt(xd),L(n.CULL_FACE),x(Ii);function L(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function K(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function et(V,Ct){return d[V]!==Ct?(n.bindFramebuffer(V,Ct),d[V]=Ct,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ct),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function mt(V,Ct){let pt=h,_t=!1;if(V){pt=f.get(Ct),pt===void 0&&(pt=[],f.set(Ct,pt));const Dt=V.textures;if(pt.length!==Dt.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,jt=Dt.length;Rt<jt;Rt++)pt[Rt]=n.COLOR_ATTACHMENT0+Rt;pt.length=Dt.length,_t=!0}}else pt[0]!==n.BACK&&(pt[0]=n.BACK,_t=!0);_t&&n.drawBuffers(pt)}function S(V){return g!==V?(n.useProgram(V),g=V,!0):!1}const R={[Qi]:n.FUNC_ADD,[dy]:n.FUNC_SUBTRACT,[fy]:n.FUNC_REVERSE_SUBTRACT};R[hy]=n.MIN,R[py]=n.MAX;const U={[my]:n.ZERO,[gy]:n.ONE,[_y]:n.SRC_COLOR,[ql]:n.SRC_ALPHA,[by]:n.SRC_ALPHA_SATURATE,[My]:n.DST_COLOR,[xy]:n.DST_ALPHA,[vy]:n.ONE_MINUS_SRC_COLOR,[Yl]:n.ONE_MINUS_SRC_ALPHA,[Sy]:n.ONE_MINUS_DST_COLOR,[yy]:n.ONE_MINUS_DST_ALPHA,[Ey]:n.CONSTANT_COLOR,[wy]:n.ONE_MINUS_CONSTANT_COLOR,[Ty]:n.CONSTANT_ALPHA,[Ay]:n.ONE_MINUS_CONSTANT_ALPHA};function x(V,Ct,pt,_t,Dt,Rt,jt,Me,Oe,oe){if(V===Ii){v===!0&&(K(n.BLEND),v=!1);return}if(v===!1&&(L(n.BLEND),v=!0),V!==uy){if(V!==m||oe!==P){if((p!==Qi||M!==Qi)&&(n.blendEquation(n.FUNC_ADD),p=Qi,M=Qi),oe)switch(V){case Xs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.ONE,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Xs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Md:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}C=null,A=null,W=null,F=null,I.set(0,0,0),$=0,m=V,P=oe}return}Dt=Dt||Ct,Rt=Rt||pt,jt=jt||_t,(Ct!==p||Dt!==M)&&(n.blendEquationSeparate(R[Ct],R[Dt]),p=Ct,M=Dt),(pt!==C||_t!==A||Rt!==W||jt!==F)&&(n.blendFuncSeparate(U[pt],U[_t],U[Rt],U[jt]),C=pt,A=_t,W=Rt,F=jt),(Me.equals(I)===!1||Oe!==$)&&(n.blendColor(Me.r,Me.g,Me.b,Oe),I.copy(Me),$=Oe),m=V,P=!1}function Z(V,Ct){V.side===di?K(n.CULL_FACE):L(n.CULL_FACE);let pt=V.side===nn;Ct&&(pt=!pt),Q(pt),V.blending===Xs&&V.transparent===!1?x(Ii):x(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const _t=V.stencilWrite;a.setTest(_t),_t&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),dt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(V){w!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),w=V)}function rt(V){V!==ly?(L(n.CULL_FACE),V!==O&&(V===xd?n.cullFace(n.BACK):V===cy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),O=V}function j(V){V!==ht&&(st&&n.lineWidth(V),ht=V)}function dt(V,Ct,pt){V?(L(n.POLYGON_OFFSET_FILL),(nt!==Ct||tt!==pt)&&(n.polygonOffset(Ct,pt),nt=Ct,tt=pt)):K(n.POLYGON_OFFSET_FILL)}function H(V){V?L(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function b(V){V===void 0&&(V=n.TEXTURE0+B-1),lt!==V&&(n.activeTexture(V),lt=V)}function _(V,Ct,pt){pt===void 0&&(lt===null?pt=n.TEXTURE0+B-1:pt=lt);let _t=D[pt];_t===void 0&&(_t={type:void 0,texture:void 0},D[pt]=_t),(_t.type!==V||_t.texture!==Ct)&&(lt!==pt&&(n.activeTexture(pt),lt=pt),n.bindTexture(V,Ct||gt[V]),_t.type=V,_t.texture=Ct)}function N(){const V=D[lt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(V){vt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),vt.copy(V))}function Tt(V){q.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),q.copy(V))}function Jt(V,Ct){let pt=c.get(Ct);pt===void 0&&(pt=new WeakMap,c.set(Ct,pt));let _t=pt.get(V);_t===void 0&&(_t=n.getUniformBlockIndex(Ct,V.name),pt.set(V,_t))}function $t(V,Ct){const _t=c.get(Ct).get(V);l.get(Ct)!==_t&&(n.uniformBlockBinding(Ct,_t,V.__bindingPointIndex),l.set(Ct,_t))}function pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},lt=null,D={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,C=null,A=null,M=null,W=null,F=null,I=new Gt(0,0,0),$=0,P=!1,w=null,O=null,ht=null,nt=null,tt=null,vt.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:K,bindFramebuffer:et,drawBuffers:mt,useProgram:S,setBlending:x,setMaterial:Z,setFlipSided:Q,setCullFace:rt,setLineWidth:j,setPolygonOffset:dt,setScissorTest:H,activeTexture:b,bindTexture:_,unbindTexture:N,compressedTexImage2D:J,compressedTexImage3D:ut,texImage2D:At,texImage3D:Bt,updateUBOMapping:Jt,uniformBlockBinding:$t,texStorage2D:Ht,texStorage3D:xt,texSubImage2D:it,texSubImage3D:St,compressedTexSubImage2D:yt,compressedTexSubImage3D:Mt,scissor:Lt,viewport:Tt,reset:pe}}function gf(n,t,e,i){const s=K1(i);switch(e){case dp:return n*t;case hp:return n*t;case pp:return n*t*2;case mp:return n*t/s.components*s.byteLength;case ou:return n*t/s.components*s.byteLength;case gp:return n*t*2/s.components*s.byteLength;case au:return n*t*2/s.components*s.byteLength;case fp:return n*t*3/s.components*s.byteLength;case Tn:return n*t*4/s.components*s.byteLength;case lu:return n*t*4/s.components*s.byteLength;case ko:case zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case lc:case uc:return Math.max(n,16)*Math.max(t,8)/4;case ac:case cc:return Math.max(n,8)*Math.max(t,8)/2;case dc:case fc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case hc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case _c:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case vc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case bc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Tc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ac:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Go:case Cc:case Rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case _p:case Pc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Dc:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function K1(n){switch(n){case gi:case lp:return{byteLength:1,components:1};case Hr:case cp:case jr:return{byteLength:2,components:1};case su:case ru:return{byteLength:2,components:4};case us:case iu:case hi:return{byteLength:4,components:1};case up:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Z1(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return h?new OffscreenCanvas(b,_):ia("canvas")}function v(b,_,N){let J=1;const ut=H(b);if((ut.width>N||ut.height>N)&&(J=N/Math.max(ut.width,ut.height)),J<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const it=Math.floor(J*ut.width),St=Math.floor(J*ut.height);d===void 0&&(d=g(it,St));const yt=_?g(it,St):d;return yt.width=it,yt.height=St,yt.getContext("2d").drawImage(b,0,0,it,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+it+"x"+St+")."),yt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function C(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(b,_,N,J,ut=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let it=_;if(_===n.RED&&(N===n.FLOAT&&(it=n.R32F),N===n.HALF_FLOAT&&(it=n.R16F),N===n.UNSIGNED_BYTE&&(it=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(it=n.R8UI),N===n.UNSIGNED_SHORT&&(it=n.R16UI),N===n.UNSIGNED_INT&&(it=n.R32UI),N===n.BYTE&&(it=n.R8I),N===n.SHORT&&(it=n.R16I),N===n.INT&&(it=n.R32I)),_===n.RG&&(N===n.FLOAT&&(it=n.RG32F),N===n.HALF_FLOAT&&(it=n.RG16F),N===n.UNSIGNED_BYTE&&(it=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(it=n.RG8UI),N===n.UNSIGNED_SHORT&&(it=n.RG16UI),N===n.UNSIGNED_INT&&(it=n.RG32UI),N===n.BYTE&&(it=n.RG8I),N===n.SHORT&&(it=n.RG16I),N===n.INT&&(it=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(it=n.RGB8UI),N===n.UNSIGNED_SHORT&&(it=n.RGB16UI),N===n.UNSIGNED_INT&&(it=n.RGB32UI),N===n.BYTE&&(it=n.RGB8I),N===n.SHORT&&(it=n.RGB16I),N===n.INT&&(it=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),N===n.UNSIGNED_INT&&(it=n.RGBA32UI),N===n.BYTE&&(it=n.RGBA8I),N===n.SHORT&&(it=n.RGBA16I),N===n.INT&&(it=n.RGBA32I)),_===n.RGB&&N===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),_===n.RGBA){const St=ut?Aa:Qt.getTransfer(J);N===n.FLOAT&&(it=n.RGBA32F),N===n.HALF_FLOAT&&(it=n.RGBA16F),N===n.UNSIGNED_BYTE&&(it=St===le?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(b,_){let N;return b?_===null||_===us||_===er?N=n.DEPTH24_STENCIL8:_===hi?N=n.DEPTH32F_STENCIL8:_===Hr&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===us||_===er?N=n.DEPTH_COMPONENT24:_===hi?N=n.DEPTH_COMPONENT32F:_===Hr&&(N=n.DEPTH_COMPONENT16),N}function W(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pn&&b.minFilter!==wn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function F(b){const _=b.target;_.removeEventListener("dispose",F),$(_),_.isVideoTexture&&u.delete(_)}function I(b){const _=b.target;_.removeEventListener("dispose",I),w(_)}function $(b){const _=i.get(b);if(_.__webglInit===void 0)return;const N=b.source,J=f.get(N);if(J){const ut=J[_.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&P(b),Object.keys(J).length===0&&f.delete(N)}i.remove(b)}function P(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const N=b.source,J=f.get(N);delete J[_.__cacheKey],o.memory.textures--}function w(b){const _=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ut=0;ut<_.__webglFramebuffer[J].length;ut++)n.deleteFramebuffer(_.__webglFramebuffer[J][ut]);else n.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)n.deleteFramebuffer(_.__webglFramebuffer[J]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=b.textures;for(let J=0,ut=N.length;J<ut;J++){const it=i.get(N[J]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(N[J])}i.remove(b)}let O=0;function ht(){O=0}function nt(){const b=O;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),O+=1,b}function tt(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function B(b,_){const N=i.get(b);if(b.isVideoTexture&&j(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(N,b,_);return}}e.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function st(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){q(N,b,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function Y(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){q(N,b,_);return}e.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function z(b,_){const N=i.get(b);if(b.version>0&&N.__version!==b.version){ct(N,b,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const lt={[rc]:n.REPEAT,[rs]:n.CLAMP_TO_EDGE,[oc]:n.MIRRORED_REPEAT},D={[Pn]:n.NEAREST,[Fy]:n.NEAREST_MIPMAP_NEAREST,[so]:n.NEAREST_MIPMAP_LINEAR,[wn]:n.LINEAR,[qa]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},T={[Vy]:n.NEVER,[jy]:n.ALWAYS,[Hy]:n.LESS,[xp]:n.LEQUAL,[Gy]:n.EQUAL,[$y]:n.GEQUAL,[Wy]:n.GREATER,[Xy]:n.NOTEQUAL};function ft(b,_){if(_.type===hi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===wn||_.magFilter===qa||_.magFilter===so||_.magFilter===os||_.minFilter===wn||_.minFilter===qa||_.minFilter===so||_.minFilter===os)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,lt[_.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,lt[_.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,lt[_.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,D[_.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,D[_.minFilter]),_.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,T[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Pn||_.minFilter!==so&&_.minFilter!==os||_.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");n.texParameterf(b,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function vt(b,_){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",F));const J=_.source;let ut=f.get(J);ut===void 0&&(ut={},f.set(J,ut));const it=tt(_);if(it!==b.__cacheKey){ut[it]===void 0&&(ut[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ut[it].usedTimes++;const St=ut[b.__cacheKey];St!==void 0&&(ut[b.__cacheKey].usedTimes--,St.usedTimes===0&&P(_)),b.__cacheKey=it,b.__webglTexture=ut[it].texture}return N}function q(b,_,N){let J=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=n.TEXTURE_3D);const ut=vt(b,_),it=_.source;e.bindTexture(J,b.__webglTexture,n.TEXTURE0+N);const St=i.get(it);if(it.version!==St.__version||ut===!0){e.activeTexture(n.TEXTURE0+N);const yt=Qt.getPrimaries(Qt.workingColorSpace),Mt=_.colorSpace===Pi?null:Qt.getPrimaries(_.colorSpace),Ht=_.colorSpace===Pi||yt===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);let xt=v(_.image,!1,s.maxTextureSize);xt=dt(_,xt);const At=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type);let Lt=A(_.internalFormat,At,Bt,_.colorSpace,_.isVideoTexture);ft(J,_);let Tt;const Jt=_.mipmaps,$t=_.isVideoTexture!==!0,pe=St.__version===void 0||ut===!0,V=it.dataReady,Ct=W(_,xt);if(_.isDepthTexture)Lt=M(_.format===nr,_.type),pe&&($t?e.texStorage2D(n.TEXTURE_2D,1,Lt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,xt.width,xt.height,0,At,Bt,null));else if(_.isDataTexture)if(Jt.length>0){$t&&pe&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let pt=0,_t=Jt.length;pt<_t;pt++)Tt=Jt[pt],$t?V&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,At,Bt,Tt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Tt.width,Tt.height,0,At,Bt,Tt.data);_.generateMipmaps=!1}else $t?(pe&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,xt.width,xt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,At,Bt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,xt.width,xt.height,0,At,Bt,xt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$t&&pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,Jt[0].width,Jt[0].height,xt.depth);for(let pt=0,_t=Jt.length;pt<_t;pt++)if(Tt=Jt[pt],_.format!==Tn)if(At!==null)if($t){if(V)if(_.layerUpdates.size>0){const Dt=gf(Tt.width,Tt.height,_.format,_.type);for(const Rt of _.layerUpdates){const jt=Tt.data.subarray(Rt*Dt/Tt.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,Rt,Tt.width,Tt.height,1,At,jt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,xt.depth,At,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Tt.width,Tt.height,xt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,xt.depth,At,Bt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,Lt,Tt.width,Tt.height,xt.depth,0,At,Bt,Tt.data)}else{$t&&pe&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let pt=0,_t=Jt.length;pt<_t;pt++)Tt=Jt[pt],_.format!==Tn?At!==null?$t?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,Lt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?V&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,At,Bt,Tt.data):e.texImage2D(n.TEXTURE_2D,pt,Lt,Tt.width,Tt.height,0,At,Bt,Tt.data)}else if(_.isDataArrayTexture)if($t){if(pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,xt.width,xt.height,xt.depth),V)if(_.layerUpdates.size>0){const pt=gf(xt.width,xt.height,_.format,_.type);for(const _t of _.layerUpdates){const Dt=xt.data.subarray(_t*pt/xt.data.BYTES_PER_ELEMENT,(_t+1)*pt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,At,Bt,Dt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,At,Bt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,xt.width,xt.height,xt.depth,0,At,Bt,xt.data);else if(_.isData3DTexture)$t?(pe&&e.texStorage3D(n.TEXTURE_3D,Ct,Lt,xt.width,xt.height,xt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,At,Bt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,xt.width,xt.height,xt.depth,0,At,Bt,xt.data);else if(_.isFramebufferTexture){if(pe)if($t)e.texStorage2D(n.TEXTURE_2D,Ct,Lt,xt.width,xt.height);else{let pt=xt.width,_t=xt.height;for(let Dt=0;Dt<Ct;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Lt,pt,_t,0,At,Bt,null),pt>>=1,_t>>=1}}else if(Jt.length>0){if($t&&pe){const pt=H(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,pt.width,pt.height)}for(let pt=0,_t=Jt.length;pt<_t;pt++)Tt=Jt[pt],$t?V&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,At,Bt,Tt):e.texImage2D(n.TEXTURE_2D,pt,Lt,At,Bt,Tt);_.generateMipmaps=!1}else if($t){if(pe){const pt=H(xt);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,pt.width,pt.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Bt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,At,Bt,xt);m(_)&&p(J),St.__version=it.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ct(b,_,N){if(_.image.length!==6)return;const J=vt(b,_),ut=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+N);const it=i.get(ut);if(ut.version!==it.__version||J===!0){e.activeTexture(n.TEXTURE0+N);const St=Qt.getPrimaries(Qt.workingColorSpace),yt=_.colorSpace===Pi?null:Qt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Pi||St===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Ht=_.isCompressedTexture||_.image[0].isCompressedTexture,xt=_.image[0]&&_.image[0].isDataTexture,At=[];for(let _t=0;_t<6;_t++)!Ht&&!xt?At[_t]=v(_.image[_t],!0,s.maxCubemapSize):At[_t]=xt?_.image[_t].image:_.image[_t],At[_t]=dt(_,At[_t]);const Bt=At[0],Lt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Jt=A(_.internalFormat,Lt,Tt,_.colorSpace),$t=_.isVideoTexture!==!0,pe=it.__version===void 0||J===!0,V=ut.dataReady;let Ct=W(_,Bt);ft(n.TEXTURE_CUBE_MAP,_);let pt;if(Ht){$t&&pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Jt,Bt.width,Bt.height);for(let _t=0;_t<6;_t++){pt=At[_t].mipmaps;for(let Dt=0;Dt<pt.length;Dt++){const Rt=pt[Dt];_.format!==Tn?Lt!==null?$t?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,Jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Rt.width,Rt.height,Lt,Tt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,Jt,Rt.width,Rt.height,0,Lt,Tt,Rt.data)}}}else{if(pt=_.mipmaps,$t&&pe){pt.length>0&&Ct++;const _t=H(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){$t?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,At[_t].width,At[_t].height,Lt,Tt,At[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,At[_t].width,At[_t].height,0,Lt,Tt,At[_t].data);for(let Dt=0;Dt<pt.length;Dt++){const jt=pt[Dt].image[_t].image;$t?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,jt.width,jt.height,Lt,Tt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,Jt,jt.width,jt.height,0,Lt,Tt,jt.data)}}else{$t?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt,Tt,At[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Lt,Tt,At[_t]);for(let Dt=0;Dt<pt.length;Dt++){const Rt=pt[Dt];$t?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Lt,Tt,Rt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,Jt,Lt,Tt,Rt.image[_t])}}}m(_)&&p(n.TEXTURE_CUBE_MAP),it.__version=ut.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function gt(b,_,N,J,ut,it){const St=r.convert(N.format,N.colorSpace),yt=r.convert(N.type),Mt=A(N.internalFormat,St,yt,N.colorSpace),Ht=i.get(_),xt=i.get(N);if(xt.__renderTarget=_,!Ht.__hasExternalTextures){const At=Math.max(1,_.width>>it),Bt=Math.max(1,_.height>>it);ut===n.TEXTURE_3D||ut===n.TEXTURE_2D_ARRAY?e.texImage3D(ut,it,Mt,At,Bt,_.depth,0,St,yt,null):e.texImage2D(ut,it,Mt,At,Bt,0,St,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ut,xt.__webglTexture,0,Q(_)):(ut===n.TEXTURE_2D||ut>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ut,xt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function L(b,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,b),_.depthBuffer){const J=_.depthTexture,ut=J&&J.isDepthTexture?J.type:null,it=M(_.stencilBuffer,ut),St=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=Q(_);rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,it,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,it,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,it,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,b)}else{const J=_.textures;for(let ut=0;ut<J.length;ut++){const it=J[ut],St=r.convert(it.format,it.colorSpace),yt=r.convert(it.type),Mt=A(it.internalFormat,St,yt,it.colorSpace),Ht=Q(_);N&&rt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Mt,_.width,_.height):rt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ht,Mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Mt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function K(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),B(_.depthTexture,0);const ut=J.__webglTexture,it=Q(_);if(_.depthTexture.format===$s)rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ut,0);else if(_.depthTexture.format===nr)rt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function et(b){const _=i.get(b),N=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const J=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const ut=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ut)};J.addEventListener("dispose",ut),_.__depthDisposeCallback=ut}_.__boundDepthTexture=J}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");K(_.__webglFramebuffer,b)}else if(N){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=n.createRenderbuffer(),L(_.__webglDepthbuffer[J],b,!1);else{const ut=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),L(_.__webglDepthbuffer,b,!1);else{const J=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(b,_,N){const J=i.get(b);_!==void 0&&gt(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&et(b)}function S(b){const _=b.texture,N=i.get(b),J=i.get(_);b.addEventListener("dispose",I);const ut=b.textures,it=b.isWebGLCubeRenderTarget===!0,St=ut.length>1;if(St||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=_.version,o.memory.textures++),it){N.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[yt]=[];for(let Mt=0;Mt<_.mipmaps.length;Mt++)N.__webglFramebuffer[yt][Mt]=n.createFramebuffer()}else N.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let yt=0;yt<_.mipmaps.length;yt++)N.__webglFramebuffer[yt]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(St)for(let yt=0,Mt=ut.length;yt<Mt;yt++){const Ht=i.get(ut[yt]);Ht.__webglTexture===void 0&&(Ht.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&rt(b)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){const Mt=ut[yt];N.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[yt]);const Ht=r.convert(Mt.format,Mt.colorSpace),xt=r.convert(Mt.type),At=A(Mt.internalFormat,Ht,xt,Mt.colorSpace,b.isXRRenderTarget===!0),Bt=Q(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt,At,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,N.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),L(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ft(n.TEXTURE_CUBE_MAP,_);for(let yt=0;yt<6;yt++)if(_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)gt(N.__webglFramebuffer[yt][Mt],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Mt);else gt(N.__webglFramebuffer[yt],b,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(_)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let yt=0,Mt=ut.length;yt<Mt;yt++){const Ht=ut[yt],xt=i.get(Ht);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),ft(n.TEXTURE_2D,Ht),gt(N.__webglFramebuffer,b,Ht,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),m(Ht)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(yt=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,J.__webglTexture),ft(yt,_),_.mipmaps&&_.mipmaps.length>0)for(let Mt=0;Mt<_.mipmaps.length;Mt++)gt(N.__webglFramebuffer[Mt],b,_,n.COLOR_ATTACHMENT0,yt,Mt);else gt(N.__webglFramebuffer,b,_,n.COLOR_ATTACHMENT0,yt,0);m(_)&&p(yt),e.unbindTexture()}b.depthBuffer&&et(b)}function R(b){const _=b.textures;for(let N=0,J=_.length;N<J;N++){const ut=_[N];if(m(ut)){const it=C(b),St=i.get(ut).__webglTexture;e.bindTexture(it,St),p(it),e.unbindTexture()}}}const U=[],x=[];function Z(b){if(b.samples>0){if(rt(b)===!1){const _=b.textures,N=b.width,J=b.height;let ut=n.COLOR_BUFFER_BIT;const it=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=i.get(b),yt=_.length>1;if(yt)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ut|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ut|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[Mt]);const Ht=i.get(_[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ht,0)}n.blitFramebuffer(0,0,N,J,0,0,N,J,ut,n.NEAREST),l===!0&&(U.length=0,x.length=0,U.push(n.COLOR_ATTACHMENT0+Mt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(U.push(it),x.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,St.__webglColorRenderbuffer[Mt]);const Ht=i.get(_[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Ht,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const _=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Q(b){return Math.min(s.maxSamples,b.samples)}function rt(b){const _=i.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function j(b){const _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function dt(b,_){const N=b.colorSpace,J=b.format,ut=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||N!==sr&&N!==Pi&&(Qt.getTransfer(N)===le?(J!==Tn||ut!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function H(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=ht,this.setTexture2D=B,this.setTexture2DArray=st,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=mt,this.setupRenderTarget=S,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=rt}function J1(n,t){function e(i,s=Pi){let r;const o=Qt.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ru)return n.UNSIGNED_SHORT_5_5_5_1;if(i===up)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lp)return n.BYTE;if(i===cp)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===iu)return n.INT;if(i===us)return n.UNSIGNED_INT;if(i===hi)return n.FLOAT;if(i===jr)return n.HALF_FLOAT;if(i===dp)return n.ALPHA;if(i===fp)return n.RGB;if(i===Tn)return n.RGBA;if(i===hp)return n.LUMINANCE;if(i===pp)return n.LUMINANCE_ALPHA;if(i===$s)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===mp)return n.RED;if(i===ou)return n.RED_INTEGER;if(i===gp)return n.RG;if(i===au)return n.RG_INTEGER;if(i===lu)return n.RGBA_INTEGER;if(i===ko||i===zo||i===Vo||i===Ho)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ko)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ko)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ac||i===lc||i===cc||i===uc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dc||i===fc||i===hc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===dc||i===fc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===hc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===wc||i===Tc||i===Ac)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===pc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Cc||i===Rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Go)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Cc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_p||i===Pc||i===Dc||i===Lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Go)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Q1 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Vs extends Ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Vs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
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

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Je,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new zi({vertexShader:ew,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new An(new Yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sw extends ps{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=new iw,m=e.getContextAttributes();let p=null,C=null;const A=[],M=[],W=new Vt;let F=null;const I=new an;I.viewport=new de;const $=new an;$.viewport=new de;const P=[I,$],w=new Q1;let O=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ct=A[q];return ct===void 0&&(ct=new Sl,A[q]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(q){let ct=A[q];return ct===void 0&&(ct=new Sl,A[q]=ct),ct.getGripSpace()},this.getHand=function(q){let ct=A[q];return ct===void 0&&(ct=new Sl,A[q]=ct),ct.getHandSpace()};function nt(q){const ct=M.indexOf(q.inputSource);if(ct===-1)return;const gt=A[ct];gt!==void 0&&(gt.update(q.inputSource,q.frame,c||o),gt.dispatchEvent({type:q.type,data:q.inputSource}))}function tt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",B);for(let q=0;q<A.length;q++){const ct=M[q];ct!==null&&(M[q]=null,A[q].disconnect(ct))}O=null,ht=null,v.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,C=null,vt.stop(),i.isPresenting=!1,t.setPixelRatio(F),t.setSize(W.width,W.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(W),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),C=new ds(h.framebufferWidth,h.framebufferHeight,{format:Tn,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,gt=null,L=null;m.depth&&(L=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?nr:$s,gt=m.stencil?er:us);const K={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(K),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new ds(f.textureWidth,f.textureHeight,{format:Tn,type:gi,depthTexture:new Lp(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),vt.setContext(s),vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(q){for(let ct=0;ct<q.removed.length;ct++){const gt=q.removed[ct],L=M.indexOf(gt);L>=0&&(M[L]=null,A[L].disconnect(gt))}for(let ct=0;ct<q.added.length;ct++){const gt=q.added[ct];let L=M.indexOf(gt);if(L===-1){for(let et=0;et<A.length;et++)if(et>=M.length){M.push(gt),L=et;break}else if(M[et]===null){M[et]=gt,L=et;break}if(L===-1)break}const K=A[L];K&&K.connect(gt)}}const st=new k,Y=new k;function z(q,ct,gt){st.setFromMatrixPosition(ct.matrixWorld),Y.setFromMatrixPosition(gt.matrixWorld);const L=st.distanceTo(Y),K=ct.projectionMatrix.elements,et=gt.projectionMatrix.elements,mt=K[14]/(K[10]-1),S=K[14]/(K[10]+1),R=(K[9]+1)/K[5],U=(K[9]-1)/K[5],x=(K[8]-1)/K[0],Z=(et[8]+1)/et[0],Q=mt*x,rt=mt*Z,j=L/(-x+Z),dt=j*-x;if(ct.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(dt),q.translateZ(j),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),K[10]===-1)q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const H=mt+j,b=S+j,_=Q-dt,N=rt+(L-dt),J=R*S/b*H,ut=U*S/b*H;q.projectionMatrix.makePerspective(_,N,J,ut,H,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,ct){ct===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ct.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ct=q.near,gt=q.far;v.texture!==null&&(v.depthNear>0&&(ct=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),w.near=$.near=I.near=ct,w.far=$.far=I.far=gt,(O!==w.near||ht!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),O=w.near,ht=w.far),I.layers.mask=q.layers.mask|2,$.layers.mask=q.layers.mask|4,w.layers.mask=I.layers.mask|$.layers.mask;const L=q.parent,K=w.cameras;lt(w,L);for(let et=0;et<K.length;et++)lt(K[et],L);K.length===2?z(w,I,$):w.projectionMatrix.copy(I.projectionMatrix),D(q,w,L)};function D(q,ct,gt){gt===null?q.matrix.copy(ct.matrixWorld):(q.matrix.copy(gt.matrixWorld),q.matrix.invert(),q.matrix.multiply(ct.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ct.projectionMatrix),q.projectionMatrixInverse.copy(ct.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Uc*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let T=null;function ft(q,ct){if(u=ct.getViewerPose(c||o),g=ct,u!==null){const gt=u.views;h!==null&&(t.setRenderTargetFramebuffer(C,h.framebuffer),t.setRenderTarget(C));let L=!1;gt.length!==w.cameras.length&&(w.cameras.length=0,L=!0);for(let et=0;et<gt.length;et++){const mt=gt[et];let S=null;if(h!==null)S=h.getViewport(mt);else{const U=d.getViewSubImage(f,mt);S=U.viewport,et===0&&(t.setRenderTargetTextures(C,U.colorTexture,f.ignoreDepthValues?void 0:U.depthStencilTexture),t.setRenderTarget(C))}let R=P[et];R===void 0&&(R=new an,R.layers.enable(et),R.viewport=new de,P[et]=R),R.matrix.fromArray(mt.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(mt.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(S.x,S.y,S.width,S.height),et===0&&(w.matrix.copy(R.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),L===!0&&w.cameras.push(R)}const K=s.enabledFeatures;if(K&&K.includes("depth-sensing")){const et=d.getDepthInformation(gt[0]);et&&et.isValid&&et.texture&&v.init(t,et,s.renderState)}}for(let gt=0;gt<A.length;gt++){const L=M[gt],K=A[gt];L!==null&&K!==void 0&&K.update(L,ct,c||o)}T&&T(q,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),g=null}const vt=new Pp;vt.setAnimationLoop(ft),this.setAnimationLoop=function(q){T=q},this.dispose=function(){}}}const Yi=new Yn,rw=new _e;function ow(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ap(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,A,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===nn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===nn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const C=t.get(p),A=C.envMap,M=C.envMapRotation;A&&(m.envMap.value=A,Yi.copy(M),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(rw.makeRotationFromEuler(Yi)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const C=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function aw(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){const M=A.program;i.uniformBlockBinding(C,M)}function c(C,A){let M=s[C.id];M===void 0&&(g(C),M=u(C),s[C.id]=M,C.addEventListener("dispose",m));const W=A.program;i.updateUBOMapping(C,W);const F=t.render.frame;r[C.id]!==F&&(f(C),r[C.id]=F)}function u(C){const A=d();C.__bindingPointIndex=A;const M=n.createBuffer(),W=C.__size,F=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,W,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,M),M}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const A=s[C.id],M=C.uniforms,W=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let F=0,I=M.length;F<I;F++){const $=Array.isArray(M[F])?M[F]:[M[F]];for(let P=0,w=$.length;P<w;P++){const O=$[P];if(h(O,F,P,W)===!0){const ht=O.__offset,nt=Array.isArray(O.value)?O.value:[O.value];let tt=0;for(let B=0;B<nt.length;B++){const st=nt[B],Y=v(st);typeof st=="number"||typeof st=="boolean"?(O.__data[0]=st,n.bufferSubData(n.UNIFORM_BUFFER,ht+tt,O.__data)):st.isMatrix3?(O.__data[0]=st.elements[0],O.__data[1]=st.elements[1],O.__data[2]=st.elements[2],O.__data[3]=0,O.__data[4]=st.elements[3],O.__data[5]=st.elements[4],O.__data[6]=st.elements[5],O.__data[7]=0,O.__data[8]=st.elements[6],O.__data[9]=st.elements[7],O.__data[10]=st.elements[8],O.__data[11]=0):(st.toArray(O.__data,tt),tt+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ht,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(C,A,M,W){const F=C.value,I=A+"_"+M;if(W[I]===void 0)return typeof F=="number"||typeof F=="boolean"?W[I]=F:W[I]=F.clone(),!0;{const $=W[I];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return W[I]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function g(C){const A=C.uniforms;let M=0;const W=16;for(let I=0,$=A.length;I<$;I++){const P=Array.isArray(A[I])?A[I]:[A[I]];for(let w=0,O=P.length;w<O;w++){const ht=P[w],nt=Array.isArray(ht.value)?ht.value:[ht.value];for(let tt=0,B=nt.length;tt<B;tt++){const st=nt[tt],Y=v(st),z=M%W,lt=z%Y.boundary,D=z+lt;M+=lt,D!==0&&W-D<Y.storage&&(M+=W-D),ht.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=M,M+=Y.storage}}}const F=M%W;return F>0&&(M+=W-F),C.__size=M,C.__cache={},this}function v(C){const A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),A}function m(C){const A=C.target;A.removeEventListener("dispose",m);const M=o.indexOf(A.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class lw{constructor(t={}){const{canvas:e=Ky(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const C=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=Ui,this.toneMappingExposure=1;const M=this;let W=!1,F=0,I=0,$=null,P=-1,w=null;const O=new de,ht=new de;let nt=null;const tt=new Gt(0);let B=0,st=e.width,Y=e.height,z=1,lt=null,D=null;const T=new de(0,0,st,Y),ft=new de(0,0,st,Y);let vt=!1;const q=new uu;let ct=!1,gt=!1;const L=new _e,K=new _e,et=new k,mt=new de,S={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function U(){return $===null?z:1}let x=i;function Z(E,G){return e.getContext(E,G)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nu}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),x===null){const G="webgl2";if(x=Z(G,E),x===null)throw Z(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,rt,j,dt,H,b,_,N,J,ut,it,St,yt,Mt,Ht,xt,At,Bt,Lt,Tt,Jt,$t,pe,V;function Ct(){Q=new hE(x),Q.init(),$t=new J1(x,Q),rt=new aE(x,Q,t,$t),j=new Y1(x,Q),rt.reverseDepthBuffer&&f&&j.buffers.depth.setReversed(!0),dt=new gE(x),H=new U1,b=new Z1(x,Q,j,H,rt,$t,dt),_=new cE(M),N=new fE(M),J=new bM(x),pe=new rE(x,J),ut=new pE(x,J,dt,pe),it=new vE(x,ut,J,dt),Lt=new _E(x,rt,b),xt=new lE(H),St=new I1(M,_,N,Q,rt,pe,xt),yt=new ow(M,H),Mt=new O1,Ht=new H1(Q),Bt=new sE(M,_,N,j,it,h,l),At=new j1(M,it,rt),V=new aw(x,dt,rt,j),Tt=new oE(x,Q,dt),Jt=new mE(x,Q,dt),dt.programs=St.programs,M.capabilities=rt,M.extensions=Q,M.properties=H,M.renderLists=Mt,M.shadowMap=At,M.state=j,M.info=dt}Ct();const pt=new sw(M,x);this.xr=pt,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(E){E!==void 0&&(z=E,this.setSize(st,Y,!1))},this.getSize=function(E){return E.set(st,Y)},this.setSize=function(E,G,ot=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=E,Y=G,e.width=Math.floor(E*z),e.height=Math.floor(G*z),ot===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(st*z,Y*z).floor()},this.setDrawingBufferSize=function(E,G,ot){st=E,Y=G,z=ot,e.width=Math.floor(E*ot),e.height=Math.floor(G*ot),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(O)},this.getViewport=function(E){return E.copy(T)},this.setViewport=function(E,G,ot,at){E.isVector4?T.set(E.x,E.y,E.z,E.w):T.set(E,G,ot,at),j.viewport(O.copy(T).multiplyScalar(z).round())},this.getScissor=function(E){return E.copy(ft)},this.setScissor=function(E,G,ot,at){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,G,ot,at),j.scissor(ht.copy(ft).multiplyScalar(z).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(E){j.setScissorTest(vt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor.apply(Bt,arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha.apply(Bt,arguments)},this.clear=function(E=!0,G=!0,ot=!0){let at=0;if(E){let X=!1;if($!==null){const bt=$.texture.format;X=bt===lu||bt===au||bt===ou}if(X){const bt=$.texture.type,Pt=bt===gi||bt===us||bt===Hr||bt===er||bt===su||bt===ru,It=Bt.getClearColor(),Ut=Bt.getClearAlpha(),Wt=It.r,qt=It.g,Nt=It.b;Pt?(g[0]=Wt,g[1]=qt,g[2]=Nt,g[3]=Ut,x.clearBufferuiv(x.COLOR,0,g)):(v[0]=Wt,v[1]=qt,v[2]=Nt,v[3]=Ut,x.clearBufferiv(x.COLOR,0,v))}else at|=x.COLOR_BUFFER_BIT}G&&(at|=x.DEPTH_BUFFER_BIT),ot&&(at|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Mt.dispose(),Ht.dispose(),H.dispose(),_.dispose(),N.dispose(),it.dispose(),pe.dispose(),V.dispose(),St.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",mu),pt.removeEventListener("sessionend",gu),Vi.stop()};function _t(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const E=dt.autoReset,G=At.enabled,ot=At.autoUpdate,at=At.needsUpdate,X=At.type;Ct(),dt.autoReset=E,At.enabled=G,At.autoUpdate=ot,At.needsUpdate=at,At.type=X}function Rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function jt(E){const G=E.target;G.removeEventListener("dispose",jt),Me(G)}function Me(E){Oe(E),H.remove(E)}function Oe(E){const G=H.get(E).programs;G!==void 0&&(G.forEach(function(ot){St.releaseProgram(ot)}),E.isShaderMaterial&&St.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,ot,at,X,bt){G===null&&(G=S);const Pt=X.isMesh&&X.matrixWorld.determinant()<0,It=Gp(E,G,ot,at,X);j.setMaterial(at,Pt);let Ut=ot.index,Wt=1;if(at.wireframe===!0){if(Ut=ut.getWireframeAttribute(ot),Ut===void 0)return;Wt=2}const qt=ot.drawRange,Nt=ot.attributes.position;let te=qt.start*Wt,me=(qt.start+qt.count)*Wt;bt!==null&&(te=Math.max(te,bt.start*Wt),me=Math.min(me,(bt.start+bt.count)*Wt)),Ut!==null?(te=Math.max(te,0),me=Math.min(me,Ut.count)):Nt!=null&&(te=Math.max(te,0),me=Math.min(me,Nt.count));const ve=me-te;if(ve<0||ve===1/0)return;pe.setup(X,at,It,ot,Ut);let Qe,ne=Tt;if(Ut!==null&&(Qe=J.get(Ut),ne=Jt,ne.setIndex(Qe)),X.isMesh)at.wireframe===!0?(j.setLineWidth(at.wireframeLinewidth*U()),ne.setMode(x.LINES)):ne.setMode(x.TRIANGLES);else if(X.isLine){let Ot=at.linewidth;Ot===void 0&&(Ot=1),j.setLineWidth(Ot*U()),X.isLineSegments?ne.setMode(x.LINES):X.isLineLoop?ne.setMode(x.LINE_LOOP):ne.setMode(x.LINE_STRIP)}else X.isPoints?ne.setMode(x.POINTS):X.isSprite&&ne.setMode(x.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ne.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ne.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,Zn=X._multiDrawCounts,ie=X._multiDrawCount,yn=Ut?J.get(Ut).bytesPerElement:1,gs=H.get(at).currentProgram.getUniforms();for(let sn=0;sn<ie;sn++)gs.setValue(x,"_gl_DrawID",sn),ne.render(Ot[sn]/yn,Zn[sn])}else if(X.isInstancedMesh)ne.renderInstances(te,ve,X.count);else if(ot.isInstancedBufferGeometry){const Ot=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Zn=Math.min(ot.instanceCount,Ot);ne.renderInstances(te,ve,Zn)}else ne.render(te,ve)};function oe(E,G,ot){E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=nn,E.needsUpdate=!0,Zr(E,G,ot),E.side=ki,E.needsUpdate=!0,Zr(E,G,ot),E.side=di):Zr(E,G,ot)}this.compile=function(E,G,ot=null){ot===null&&(ot=E),p=Ht.get(ot),p.init(G),A.push(p),ot.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),E!==ot&&E.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const at=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const bt=X.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const It=bt[Pt];oe(It,ot,X),at.add(It)}else oe(bt,ot,X),at.add(bt)}),A.pop(),p=null,at},this.compileAsync=function(E,G,ot=null){const at=this.compile(E,G,ot);return new Promise(X=>{function bt(){if(at.forEach(function(Pt){H.get(Pt).currentProgram.isReady()&&at.delete(Pt)}),at.size===0){X(E);return}setTimeout(bt,10)}Q.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let xn=null;function Kn(E){xn&&xn(E)}function mu(){Vi.stop()}function gu(){Vi.start()}const Vi=new Pp;Vi.setAnimationLoop(Kn),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(E){xn=E,pt.setAnimationLoop(E),E===null?Vi.stop():Vi.start()},pt.addEventListener("sessionstart",mu),pt.addEventListener("sessionend",gu),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(G),G=pt.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,G,$),p=Ht.get(E,A.length),p.init(G),A.push(p),K.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),q.setFromProjectionMatrix(K),gt=this.localClippingEnabled,ct=xt.init(this.clippingPlanes,gt),m=Mt.get(E,C.length),m.init(),C.push(m),pt.enabled===!0&&pt.isPresenting===!0){const bt=M.xr.getDepthSensingMesh();bt!==null&&Da(bt,G,-1/0,M.sortObjects)}Da(E,G,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(lt,D),R=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,R&&Bt.addToRenderList(m,E),this.info.render.frame++,ct===!0&&xt.beginShadows();const ot=p.state.shadowsArray;At.render(ot,E,G),ct===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const bt=G.cameras;if(X.length>0)for(let Pt=0,It=bt.length;Pt<It;Pt++){const Ut=bt[Pt];vu(at,X,E,Ut)}R&&Bt.render(E);for(let Pt=0,It=bt.length;Pt<It;Pt++){const Ut=bt[Pt];_u(m,E,Ut,Ut.viewport)}}else X.length>0&&vu(at,X,E,G),R&&Bt.render(E),_u(m,E,G);$!==null&&(b.updateMultisampleRenderTarget($),b.updateRenderTargetMipmap($)),E.isScene===!0&&E.onAfterRender(M,E,G),pe.resetDefaultState(),P=-1,w=null,A.pop(),A.length>0?(p=A[A.length-1],ct===!0&&xt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Da(E,G,ot,at){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)ot=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){at&&mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const Pt=it.update(E),It=E.material;It.visible&&m.push(E,Pt,It,ot,mt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){const Pt=it.update(E),It=E.material;if(at&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),mt.copy(E.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),mt.copy(Pt.boundingSphere.center)),mt.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(It)){const Ut=Pt.groups;for(let Wt=0,qt=Ut.length;Wt<qt;Wt++){const Nt=Ut[Wt],te=It[Nt.materialIndex];te&&te.visible&&m.push(E,Pt,te,ot,mt.z,Nt)}}else It.visible&&m.push(E,Pt,It,ot,mt.z,null)}}const bt=E.children;for(let Pt=0,It=bt.length;Pt<It;Pt++)Da(bt[Pt],G,ot,at)}function _u(E,G,ot,at){const X=E.opaque,bt=E.transmissive,Pt=E.transparent;p.setupLightsView(ot),ct===!0&&xt.setGlobalState(M.clippingPlanes,ot),at&&j.viewport(O.copy(at)),X.length>0&&Kr(X,G,ot),bt.length>0&&Kr(bt,G,ot),Pt.length>0&&Kr(Pt,G,ot),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function vu(E,G,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[at.id]===void 0&&(p.state.transmissionRenderTarget[at.id]=new ds(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?jr:gi,minFilter:os,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const bt=p.state.transmissionRenderTarget[at.id],Pt=at.viewport||O;bt.setSize(Pt.z,Pt.w);const It=M.getRenderTarget();M.setRenderTarget(bt),M.getClearColor(tt),B=M.getClearAlpha(),B<1&&M.setClearColor(16777215,.5),M.clear(),R&&Bt.render(ot);const Ut=M.toneMapping;M.toneMapping=Ui;const Wt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),p.setupLightsView(at),ct===!0&&xt.setGlobalState(M.clippingPlanes,at),Kr(E,ot,at),b.updateMultisampleRenderTarget(bt),b.updateRenderTargetMipmap(bt),Q.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Nt=0,te=G.length;Nt<te;Nt++){const me=G[Nt],ve=me.object,Qe=me.geometry,ne=me.material,Ot=me.group;if(ne.side===di&&ve.layers.test(at.layers)){const Zn=ne.side;ne.side=nn,ne.needsUpdate=!0,xu(ve,ot,at,Qe,ne,Ot),ne.side=Zn,ne.needsUpdate=!0,qt=!0}}qt===!0&&(b.updateMultisampleRenderTarget(bt),b.updateRenderTargetMipmap(bt))}M.setRenderTarget(It),M.setClearColor(tt,B),Wt!==void 0&&(at.viewport=Wt),M.toneMapping=Ut}function Kr(E,G,ot){const at=G.isScene===!0?G.overrideMaterial:null;for(let X=0,bt=E.length;X<bt;X++){const Pt=E[X],It=Pt.object,Ut=Pt.geometry,Wt=at===null?Pt.material:at,qt=Pt.group;It.layers.test(ot.layers)&&xu(It,G,ot,Ut,Wt,qt)}}function xu(E,G,ot,at,X,bt){E.onBeforeRender(M,G,ot,at,X,bt),E.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(M,G,ot,at,E,bt),X.transparent===!0&&X.side===di&&X.forceSinglePass===!1?(X.side=nn,X.needsUpdate=!0,M.renderBufferDirect(ot,G,at,X,E,bt),X.side=ki,X.needsUpdate=!0,M.renderBufferDirect(ot,G,at,X,E,bt),X.side=di):M.renderBufferDirect(ot,G,at,X,E,bt),E.onAfterRender(M,G,ot,at,X,bt)}function Zr(E,G,ot){G.isScene!==!0&&(G=S);const at=H.get(E),X=p.state.lights,bt=p.state.shadowsArray,Pt=X.state.version,It=St.getParameters(E,X.state,bt,G,ot),Ut=St.getProgramCacheKey(It);let Wt=at.programs;at.environment=E.isMeshStandardMaterial?G.environment:null,at.fog=G.fog,at.envMap=(E.isMeshStandardMaterial?N:_).get(E.envMap||at.environment),at.envMapRotation=at.environment!==null&&E.envMap===null?G.environmentRotation:E.envMapRotation,Wt===void 0&&(E.addEventListener("dispose",jt),Wt=new Map,at.programs=Wt);let qt=Wt.get(Ut);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===Pt)return Mu(E,It),qt}else It.uniforms=St.getUniforms(E),E.onBeforeCompile(It,M),qt=St.acquireProgram(It,Ut),Wt.set(Ut,qt),at.uniforms=It.uniforms;const Nt=at.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=xt.uniform),Mu(E,It),at.needsLights=Xp(E),at.lightsStateVersion=Pt,at.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.directionalShadowMap.value=X.state.directionalShadowMap,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotShadowMap.value=X.state.spotShadowMap,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMap.value=X.state.pointShadowMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function yu(E){if(E.uniformsList===null){const G=E.currentProgram.getUniforms();E.uniformsList=Wo.seqWithValue(G.seq,E.uniforms)}return E.uniformsList}function Mu(E,G){const ot=H.get(E);ot.outputColorSpace=G.outputColorSpace,ot.batching=G.batching,ot.batchingColor=G.batchingColor,ot.instancing=G.instancing,ot.instancingColor=G.instancingColor,ot.instancingMorph=G.instancingMorph,ot.skinning=G.skinning,ot.morphTargets=G.morphTargets,ot.morphNormals=G.morphNormals,ot.morphColors=G.morphColors,ot.morphTargetsCount=G.morphTargetsCount,ot.numClippingPlanes=G.numClippingPlanes,ot.numIntersection=G.numClipIntersection,ot.vertexAlphas=G.vertexAlphas,ot.vertexTangents=G.vertexTangents,ot.toneMapping=G.toneMapping}function Gp(E,G,ot,at,X){G.isScene!==!0&&(G=S),b.resetTextureUnits();const bt=G.fog,Pt=at.isMeshStandardMaterial?G.environment:null,It=$===null?M.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:sr,Ut=(at.isMeshStandardMaterial?N:_).get(at.envMap||Pt),Wt=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,qt=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Nt=!!ot.morphAttributes.position,te=!!ot.morphAttributes.normal,me=!!ot.morphAttributes.color;let ve=Ui;at.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ve=M.toneMapping);const Qe=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,ne=Qe!==void 0?Qe.length:0,Ot=H.get(at),Zn=p.state.lights;if(ct===!0&&(gt===!0||E!==w)){const dn=E===w&&at.id===P;xt.setState(at,E,dn)}let ie=!1;at.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Zn.state.version||Ot.outputColorSpace!==It||X.isBatchedMesh&&Ot.batching===!1||!X.isBatchedMesh&&Ot.batching===!0||X.isBatchedMesh&&Ot.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ot.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ot.instancing===!1||!X.isInstancedMesh&&Ot.instancing===!0||X.isSkinnedMesh&&Ot.skinning===!1||!X.isSkinnedMesh&&Ot.skinning===!0||X.isInstancedMesh&&Ot.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ot.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ot.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ot.instancingMorph===!1&&X.morphTexture!==null||Ot.envMap!==Ut||at.fog===!0&&Ot.fog!==bt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==xt.numPlanes||Ot.numIntersection!==xt.numIntersection)||Ot.vertexAlphas!==Wt||Ot.vertexTangents!==qt||Ot.morphTargets!==Nt||Ot.morphNormals!==te||Ot.morphColors!==me||Ot.toneMapping!==ve||Ot.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ot.__version=at.version);let yn=Ot.currentProgram;ie===!0&&(yn=Zr(at,G,X));let gs=!1,sn=!1,ar=!1;const xe=yn.getUniforms(),On=Ot.uniforms;if(j.useProgram(yn.program)&&(gs=!0,sn=!0,ar=!0),at.id!==P&&(P=at.id,sn=!0),gs||w!==E){j.buffers.depth.getReversed()?(L.copy(E.projectionMatrix),Jy(L),Qy(L),xe.setValue(x,"projectionMatrix",L)):xe.setValue(x,"projectionMatrix",E.projectionMatrix),xe.setValue(x,"viewMatrix",E.matrixWorldInverse);const vi=xe.map.cameraPosition;vi!==void 0&&vi.setValue(x,et.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&xe.setValue(x,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&xe.setValue(x,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,sn=!0,ar=!0)}if(X.isSkinnedMesh){xe.setOptional(x,X,"bindMatrix"),xe.setOptional(x,X,"bindMatrixInverse");const dn=X.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),xe.setValue(x,"boneTexture",dn.boneTexture,b))}X.isBatchedMesh&&(xe.setOptional(x,X,"batchingTexture"),xe.setValue(x,"batchingTexture",X._matricesTexture,b),xe.setOptional(x,X,"batchingIdTexture"),xe.setValue(x,"batchingIdTexture",X._indirectTexture,b),xe.setOptional(x,X,"batchingColorTexture"),X._colorsTexture!==null&&xe.setValue(x,"batchingColorTexture",X._colorsTexture,b));const lr=ot.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Lt.update(X,ot,yn),(sn||Ot.receiveShadow!==X.receiveShadow)&&(Ot.receiveShadow=X.receiveShadow,xe.setValue(x,"receiveShadow",X.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(On.envMap.value=Ut,On.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&G.environment!==null&&(On.envMapIntensity.value=G.environmentIntensity),sn&&(xe.setValue(x,"toneMappingExposure",M.toneMappingExposure),Ot.needsLights&&Wp(On,ar),bt&&at.fog===!0&&yt.refreshFogUniforms(On,bt),yt.refreshMaterialUniforms(On,at,z,Y,p.state.transmissionRenderTarget[E.id]),Wo.upload(x,yu(Ot),On,b)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Wo.upload(x,yu(Ot),On,b),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&xe.setValue(x,"center",X.center),xe.setValue(x,"modelViewMatrix",X.modelViewMatrix),xe.setValue(x,"normalMatrix",X.normalMatrix),xe.setValue(x,"modelMatrix",X.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const dn=at.uniformsGroups;for(let vi=0,xi=dn.length;vi<xi;vi++){const Su=dn[vi];V.update(Su,yn),V.bind(Su,yn)}}return yn}function Wp(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Xp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(E,G,ot){H.get(E.texture).__webglTexture=G,H.get(E.depthTexture).__webglTexture=ot;const at=H.get(E);at.__hasExternalTextures=!0,at.__autoAllocateDepthBuffer=ot===void 0,at.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),at.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,G){const ot=H.get(E);ot.__webglFramebuffer=G,ot.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,ot=0){$=E,F=G,I=ot;let at=!0,X=null,bt=!1,Pt=!1;if(E){const Ut=H.get(E);if(Ut.__useDefaultFramebuffer!==void 0)j.bindFramebuffer(x.FRAMEBUFFER,null),at=!1;else if(Ut.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Ut.__hasExternalTextures)b.rebindTextures(E,H.get(E.texture).__webglTexture,H.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&H.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Wt=E.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Pt=!0);const qt=H.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[G])?X=qt[G][ot]:X=qt[G],bt=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?X=H.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?X=qt[ot]:X=qt,O.copy(E.viewport),ht.copy(E.scissor),nt=E.scissorTest}else O.copy(T).multiplyScalar(z).floor(),ht.copy(ft).multiplyScalar(z).floor(),nt=vt;if(j.bindFramebuffer(x.FRAMEBUFFER,X)&&at&&j.drawBuffers(E,X),j.viewport(O),j.scissor(ht),j.setScissorTest(nt),bt){const Ut=H.get(E.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,ot)}else if(Pt){const Ut=H.get(E.texture),Wt=G||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Ut.__webglTexture,ot||0,Wt)}P=-1},this.readRenderTargetPixels=function(E,G,ot,at,X,bt,Pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){j.bindFramebuffer(x.FRAMEBUFFER,It);try{const Ut=E.texture,Wt=Ut.format,qt=Ut.type;if(!rt.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-at&&ot>=0&&ot<=E.height-X&&x.readPixels(G,ot,at,X,$t.convert(Wt),$t.convert(qt),bt)}finally{const Ut=$!==null?H.get($).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(E,G,ot,at,X,bt,Pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){const Ut=E.texture,Wt=Ut.format,qt=Ut.type;if(!rt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=E.width-at&&ot>=0&&ot<=E.height-X){j.bindFramebuffer(x.FRAMEBUFFER,It);const Nt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Nt),x.bufferData(x.PIXEL_PACK_BUFFER,bt.byteLength,x.STREAM_READ),x.readPixels(G,ot,at,X,$t.convert(Wt),$t.convert(qt),0);const te=$!==null?H.get($).__webglFramebuffer:null;j.bindFramebuffer(x.FRAMEBUFFER,te);const me=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Zy(x,me,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Nt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,bt),x.deleteBuffer(Nt),x.deleteSync(me),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,G=null,ot=0){E.isTexture!==!0&&(br("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1]);const at=Math.pow(2,-ot),X=Math.floor(E.image.width*at),bt=Math.floor(E.image.height*at),Pt=G!==null?G.x:0,It=G!==null?G.y:0;b.setTexture2D(E,0),x.copyTexSubImage2D(x.TEXTURE_2D,ot,0,0,Pt,It,X,bt),j.unbindTexture()},this.copyTextureToTexture=function(E,G,ot=null,at=null,X=0){E.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture function signature has changed."),at=arguments[0]||null,E=arguments[1],G=arguments[2],X=arguments[3]||0,ot=null);let bt,Pt,It,Ut,Wt,qt,Nt,te,me;const ve=E.isCompressedTexture?E.mipmaps[X]:E.image;ot!==null?(bt=ot.max.x-ot.min.x,Pt=ot.max.y-ot.min.y,It=ot.isBox3?ot.max.z-ot.min.z:1,Ut=ot.min.x,Wt=ot.min.y,qt=ot.isBox3?ot.min.z:0):(bt=ve.width,Pt=ve.height,It=ve.depth||1,Ut=0,Wt=0,qt=0),at!==null?(Nt=at.x,te=at.y,me=at.z):(Nt=0,te=0,me=0);const Qe=$t.convert(G.format),ne=$t.convert(G.type);let Ot;G.isData3DTexture?(b.setTexture3D(G,0),Ot=x.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(b.setTexture2DArray(G,0),Ot=x.TEXTURE_2D_ARRAY):(b.setTexture2D(G,0),Ot=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,G.unpackAlignment);const Zn=x.getParameter(x.UNPACK_ROW_LENGTH),ie=x.getParameter(x.UNPACK_IMAGE_HEIGHT),yn=x.getParameter(x.UNPACK_SKIP_PIXELS),gs=x.getParameter(x.UNPACK_SKIP_ROWS),sn=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,ve.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ve.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Ut),x.pixelStorei(x.UNPACK_SKIP_ROWS,Wt),x.pixelStorei(x.UNPACK_SKIP_IMAGES,qt);const ar=E.isDataArrayTexture||E.isData3DTexture,xe=G.isDataArrayTexture||G.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const On=H.get(E),lr=H.get(G),dn=H.get(On.__renderTarget),vi=H.get(lr.__renderTarget);j.bindFramebuffer(x.READ_FRAMEBUFFER,dn.__webglFramebuffer),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let xi=0;xi<It;xi++)ar&&x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,H.get(E).__webglTexture,X,qt+xi),E.isDepthTexture?(xe&&x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,H.get(G).__webglTexture,X,me+xi),x.blitFramebuffer(Ut,Wt,bt,Pt,Nt,te,bt,Pt,x.DEPTH_BUFFER_BIT,x.NEAREST)):xe?x.copyTexSubImage3D(Ot,X,Nt,te,me+xi,Ut,Wt,bt,Pt):x.copyTexSubImage2D(Ot,X,Nt,te,me+xi,Ut,Wt,bt,Pt);j.bindFramebuffer(x.READ_FRAMEBUFFER,null),j.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else xe?E.isDataTexture||E.isData3DTexture?x.texSubImage3D(Ot,X,Nt,te,me,bt,Pt,It,Qe,ne,ve.data):G.isCompressedArrayTexture?x.compressedTexSubImage3D(Ot,X,Nt,te,me,bt,Pt,It,Qe,ve.data):x.texSubImage3D(Ot,X,Nt,te,me,bt,Pt,It,Qe,ne,ve):E.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,X,Nt,te,bt,Pt,Qe,ne,ve.data):E.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,X,Nt,te,ve.width,ve.height,Qe,ve.data):x.texSubImage2D(x.TEXTURE_2D,X,Nt,te,bt,Pt,Qe,ne,ve);x.pixelStorei(x.UNPACK_ROW_LENGTH,Zn),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,ie),x.pixelStorei(x.UNPACK_SKIP_PIXELS,yn),x.pixelStorei(x.UNPACK_SKIP_ROWS,gs),x.pixelStorei(x.UNPACK_SKIP_IMAGES,sn),X===0&&G.generateMipmaps&&x.generateMipmap(Ot),j.unbindTexture()},this.copyTextureToTexture3D=function(E,G,ot=null,at=null,X=0){return E.isTexture!==!0&&(br("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ot=arguments[0]||null,at=arguments[1]||null,E=arguments[2],G=arguments[3],X=arguments[4]||0),br('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,G,ot,at,X)},this.initRenderTarget=function(E){H.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){F=0,I=0,$=null,j.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class fu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cw extends Ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const He=new k;class sa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Gn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ce(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),i=ce(i,this.array),s=ce(s,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new sa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Fp extends ms{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ls;const gr=new k,Is=new k,Us=new k,Ns=new Vt,_r=new Vt,Bp=new _e,To=new k,vr=new k,Ao=new k,_f=new Vt,bl=new Vt,vf=new Vt;class dw extends Ie{constructor(t=new Fp){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uw(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new sa(i,3,0,!1)),Ls.setAttribute("uv",new sa(i,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Bp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-Us.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Co(To.set(-.5,-.5,0),Us,o,Is,s,r),Co(vr.set(.5,-.5,0),Us,o,Is,s,r),Co(Ao.set(.5,.5,0),Us,o,Is,s,r),_f.set(0,0),bl.set(1,0),vf.set(1,1);let a=t.ray.intersectTriangle(To,vr,Ao,!1,gr);if(a===null&&(Co(vr.set(-.5,.5,0),Us,o,Is,s,r),bl.set(0,1),a=t.ray.intersectTriangle(To,Ao,vr,!1,gr),a===null))return;const l=t.ray.origin.distanceTo(gr);l<t.near||l>t.far||e.push({distance:l,point:gr.clone(),uv:ln.getInterpolation(gr,To,vr,Ao,_f,bl,vf,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Co(n,t,e,i,s,r){Ns.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(_r.x=r*Ns.x-s*Ns.y,_r.y=s*Ns.x+r*Ns.y):_r.copy(Ns),n.copy(t),n.x+=_r.x,n.y+=_r.y,n.applyMatrix4(Bp)}class ra extends ms{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oa=new k,aa=new k,xf=new _e,xr=new Ra,Ro=new Ca,El=new k,yf=new k;class wr extends Ie{constructor(t=new Ke,e=new ra){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)oa.fromBufferAttribute(e,s-1),aa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=oa.distanceTo(aa);t.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ro.radius+=r,t.ray.intersectsSphere(Ro)===!1)return;xf.copy(s).invert(),xr.copy(t.ray).applyMatrix4(xf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=u.getX(v),C=u.getX(v+1),A=Po(this,t,xr,l,p,C);A&&e.push(A)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(h),p=Po(this,t,xr,l,v,m);p&&e.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let v=h,m=g-1;v<m;v+=c){const p=Po(this,t,xr,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Po(this,t,xr,l,g-1,h);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Po(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(oa.fromBufferAttribute(o,s),aa.fromBufferAttribute(o,r),e.distanceSqToSegment(oa,aa,El,yf)>i)return;El.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(El);if(!(l<t.near||l>t.far))return{distance:l,point:yf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Mf=new k,Sf=new k;class kp extends wr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Mf.fromBufferAttribute(e,s),Sf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Mf.distanceTo(Sf);t.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fw extends Je{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Do=new k,Lo=new k,wl=new k,Io=new ln;class hw extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ir*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:p}=Io;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),Io.getNormal(wl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){const A=(C+1)%3,M=d[C],W=d[A],F=Io[u[C]],I=Io[u[A]],$=`${M}_${W}`,P=`${W}_${M}`;P in f&&f[P]?(wl.dot(f[P].normal)<=r&&(h.push(F.x,F.y,F.z),h.push(I.x,I.y,I.z)),f[P]=null):$ in f||(f[$]={index0:c[C],index1:c[A],normal:wl.clone()})}}for(const g in f)if(f[g]){const{index0:v,index1:m}=f[g];Do.fromBufferAttribute(a,v),Lo.fromBufferAttribute(a,m),h.push(Do.x,Do.y,Do.z),h.push(Lo.x,Lo.y,Lo.z)}this.setAttribute("position",new gn(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class bf extends ms{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vp,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hu extends Ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Tl=new _e,Ef=new k,wf=new k;class zp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uu,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tf=new _e,yr=new k,Al=new k;class pw extends zp{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),i.position.copy(yr),Al.copy(i.position),Al.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Al),i.updateMatrixWorld(),s.makeTranslation(-yr.x,-yr.y,-yr.z),Tf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf)}}class mw extends hu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new pw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gw extends zp{constructor(){super(new Dp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Af extends hu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ie.DEFAULT_UP),this.updateMatrix(),this.target=new Ie,this.shadow=new gw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _w extends hu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cf=new _e;class vw{constructor(t,e,i=0,s=1/0){this.ray=new Ra(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new cu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cf),this}intersectObject(t,e=!0,i=[]){return Oc(t,this,i,e),i.sort(Rf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Oc(t[s],this,i,e);return i.sort(Rf),i}}function Rf(n,t){return n.distance-t.distance}function Oc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Oc(r[o],t,e,!0)}}class Pf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xw extends kp{constructor(t=10,e=10,i=4473924,s=8947848){i=new Gt(i),s=new Gt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,h=0,g=-a;f<=e;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const v=f===r?i:s;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const u=new Ke;u.setAttribute("position",new gn(l,3)),u.setAttribute("color",new gn(c,3));const d=new ra({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class yw extends ps{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);const Df={type:"change"},pu={type:"start"},Vp={type:"end"},Uo=new Ra,Lf=new Ri,Mw=Math.cos(70*Yy.DEG2RAD),Ae=new k,tn=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Cl=1e-6;class Sw extends yw{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ws.ROTATE,MIDDLE:Ws.DOLLY,RIGHT:Ws.PAN},this.touches={ONE:ks.ROTATE,TWO:ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new fs,this._lastTargetPosition=new k,this._quat=new fs().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pf,this._sphericalDelta=new Pf,this._scale=1,this._panOffset=new k,this._rotateStart=new Vt,this._rotateEnd=new Vt,this._rotateDelta=new Vt,this._panStart=new Vt,this._panEnd=new Vt,this._panDelta=new Vt,this._dollyStart=new Vt,this._dollyEnd=new Vt,this._dollyDelta=new Vt,this._dollyDirection=new k,this._mouse=new Vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Ew.bind(this),this._onPointerDown=bw.bind(this),this._onPointerUp=ww.bind(this),this._onContextMenu=Lw.bind(this),this._onMouseWheel=Cw.bind(this),this._onKeyDown=Rw.bind(this),this._onTouchStart=Pw.bind(this),this._onTouchMove=Dw.bind(this),this._onMouseDown=Tw.bind(this),this._onMouseMove=Aw.bind(this),this._interceptControlDown=Iw.bind(this),this._interceptControlUp=Uw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new k(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new k(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Uo.origin.copy(this.object.position),Uo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uo.direction))<Mw?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uo.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Cl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Cl||this._lastTargetPosition.distanceToSquared(this.target)>Cl?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function bw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Ew(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ww(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vp),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Tw(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ue.DOLLY;break;case Ws.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}break;case Ws.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(pu)}function Aw(n){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Cw(n){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(n.preventDefault(),this.dispatchEvent(pu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vp))}function Rw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function Pw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ks.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ue.TOUCH_ROTATE;break;case ks.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case ks.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ue.TOUCH_DOLLY_PAN;break;case ks.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(pu)}function Dw(n){switch(this._trackPointer(n),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ue.NONE}}function Lw(n){this.enabled!==!1&&n.preventDefault()}function Iw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Uw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nw={class:"relative w-full h-full flex flex-col select-none overflow-hidden bg-slate-950"},Ow={class:"z-10 px-6 py-3 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg flex flex-wrap items-center justify-between gap-4 transition-all duration-300"},Fw={class:"flex items-center space-x-3"},Bw={class:"text-sm text-slate-300 font-mono"},kw={key:0,class:"flex items-center flex-wrap gap-3 font-mono text-xs bg-slate-950/80 px-4 py-2 rounded-lg border border-cyan-500/40 animate-fade-in shadow-inner"},zw={class:"inline-flex items-center gap-1.5 text-cyan-400 font-semibold"},Vw={class:"text-slate-300"},Hw={class:"text-amber-400 font-bold"},Gw={class:"text-slate-300"},Ww={class:"text-slate-200"},Xw={class:"text-slate-300"},$w={class:"text-slate-200"},jw={class:"text-slate-300"},qw={class:"text-sky-400 font-bold"},Yw={class:"text-slate-300"},Kw={class:"text-slate-200"},Zw={class:"text-slate-300"},Jw={class:"text-slate-200"},Qw={class:"text-emerald-400 font-bold text-sm bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30"},tT={key:1,class:"text-xs text-slate-400 flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-lg border border-slate-800"},eT={class:"flex items-center space-x-2"},nT={class:"flex rounded-lg bg-slate-800/80 p-0.5 border border-slate-700 text-xs font-medium"},iT={class:"font-bold text-cyan-300 border-b border-slate-700/80 pb-1 mb-1 flex items-center justify-between gap-4"},sT={class:"text-emerald-400"},rT={class:"grid grid-cols-2 gap-x-3 gap-y-0.5 text-[11px]"},oT={class:"text-amber-300"},aT={class:"text-sky-300"},lT={class:"text-slate-300"},cT={class:"text-slate-300"},uT={class:"text-slate-300"},dT={class:"text-slate-300"},fT=Nn({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=Te(null),i=Te(null),s=Te("current"),r=Te({visible:!1,x:0,y:0}),o=Ye(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(tt){s.value=tt,I()}let l,c,u,d,f,h,g,v=[],m=null,p=new Vs,C=new Vs;function A(tt){const Y=Math.max(0,Math.min(1,(tt-65)/31)),z=new Gt;return Y<.25?z.lerpColors(new Gt(16007006),new Gt(16347926),Y/.25):Y<.5?z.lerpColors(new Gt(16347926),new Gt(15381256),(Y-.25)/.25):Y<.75?z.lerpColors(new Gt(15381256),new Gt(1096065),(Y-.5)/.25):Y<.9?z.lerpColors(new Gt(1096065),new Gt(440020),(Y-.75)/.15):z.lerpColors(new Gt(440020),new Gt(9133302),(Y-.9)/.1),z}function M(tt,B=24,st="#94a3b8"){const Y=document.createElement("canvas");Y.width=512,Y.height=128;const z=Y.getContext("2d");z.fillStyle="transparent",z.fillRect(0,0,Y.width,Y.height),z.font=`bold ${B*2}px "Fira Code", monospace`,z.fillStyle=st,z.textAlign="center",z.textBaseline="middle",z.fillText(tt,Y.width/2,Y.height/2);const lt=new fw(Y);lt.minFilter=wn;const D=new Fp({map:lt,transparent:!0,depthWrite:!1}),T=new dw(D);return T.scale.set(4,1,1),T}function W(){if(!e.value)return;const tt=e.value.clientWidth,B=e.value.clientHeight;l=new cw,l.background=new Gt(461588),l.fog=new fu(461588,.015),c=new an(45,tt/B,.1,1e3),c.position.set(24,22,28),u=new lw({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(tt,B),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=rp,e.value.appendChild(u.domElement),d=new Sw(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02,d.minDistance=6,d.maxDistance=80,d.target.set(0,4,0);const st=new _w(16777215,.85);l.add(st);const Y=new Af(16777215,1.2);Y.position.set(30,40,25),Y.castShadow=!0,Y.shadow.mapSize.width=1024,Y.shadow.mapSize.height=1024,l.add(Y);const z=new Af(3718648,.6);z.position.set(-25,20,-25),l.add(z);const lt=new mw(1096065,.8,50);lt.position.set(0,15,0),l.add(lt),h=new vw,g=new Vt(-999,-999),l.add(p),l.add(C),window.addEventListener("resize",nt),e.value.addEventListener("mousemove",$),e.value.addEventListener("mouseleave",P),I(),ht()}function F(){!d||!c||(c.position.set(24,22,28),d.target.set(0,4,0),d.update())}function I(){if(!l)return;for(;p.children.length>0;){const j=p.children[0];p.remove(j)}for(;C.children.length>0;){const j=C.children[0];C.remove(j)}v=[],m=null,i.value=null,r.value.visible=!1;const tt=t.points;if(!tt||tt.length===0)return;const B=[...new Set(tt.map(j=>j.voltageTarget))].sort((j,dt)=>j-dt),st=tt.map(j=>s.value==="current"?j.iout:j.pout),Y=[...new Set(st.map(j=>Math.round(j*10)/10))].sort((j,dt)=>j-dt),z=Math.max(1,B.length),lt=Math.max(1,Y.length),D=18,T=18,ft=10,vt=z>1?D/(z-1):D,q=lt>1?T/(lt-1):T,ct=Math.min(1.2,D/z*.65),gt=Math.min(1.2,T/lt*.65),L=new xw(Math.max(D,T)+4,Math.max(z,lt)+2,165063,1976635);L.position.set(0,0,0),p.add(L);const K=new Yr(36,36),et=new bf({color:725280,roughness:.7,metalness:.1}),mt=new An(K,et);mt.rotation.x=-Math.PI/2,mt.position.y=-.05,mt.receiveShadow=!0,p.add(mt);const S=new ra({color:3718648,linewidth:2}),R=new Ke().setFromPoints([new k(-D/2-1,0,T/2+1),new k(D/2+2,0,T/2+1)]);p.add(new wr(R,S));const U=M("X: 输入电压 Vin (V)",22,"#38bdf8");U.position.set(0,.4,T/2+2.8),U.scale.set(7,1.8,1),p.add(U),B.forEach((j,dt)=>{const H=-D/2+dt*vt,b=M(`${j}V`,16,"#94a3b8");b.position.set(H,.2,T/2+1.8),b.scale.set(3,.9,1),p.add(b)});const x=new Ke().setFromPoints([new k(-D/2-1,0,-T/2-1),new k(-D/2-1,0,T/2+2)]);p.add(new wr(x,S));const Z=M(s.value==="current"?"Y: 负载电流 Iout (A)":"Y: 输出功率 Pout (W)",22,"#f59e0b");Z.position.set(-D/2-3.2,.4,0),Z.scale.set(8,2,1),p.add(Z),Y.forEach((j,dt)=>{const H=-T/2+dt*q,b=M(s.value==="current"?`${j}A`:`${j}W`,16,"#94a3b8");b.position.set(-D/2-1.8,.2,H),b.scale.set(3,.9,1),p.add(b)});const Q=new Ke().setFromPoints([new k(-D/2-1,0,T/2+1),new k(-D/2-1,ft+1.5,T/2+1)]);p.add(new wr(Q,S));const rt=M("Z: 转换效率 η (%)",22,"#10b981");rt.position.set(-D/2-1,ft+2.2,T/2+1),rt.scale.set(7,1.8,1),p.add(rt),[20,40,60,80,100].forEach(j=>{const dt=j/100*ft,H=M(`${j}%`,16,"#6ee7b7");H.position.set(-D/2-2,dt,T/2+1),H.scale.set(2.8,.8,1),p.add(H);const b=new Ke().setFromPoints([new k(-D/2-.8,dt,T/2+1),new k(-D/2-.2,dt,T/2+1)]);p.add(new wr(b,S))}),tt.forEach(j=>{const dt=B.indexOf(j.voltageTarget),H=Math.round((s.value==="current"?j.iout:j.pout)*10)/10;let b=Y.indexOf(H);b===-1&&(b=0);const _=-D/2+(dt>=0?dt:0)*vt,N=-T/2+b*q,J=Math.max(1,Math.min(100,j.efficiency)),ut=Math.max(.2,J/100*ft),it=new rr(ct,ut,gt);it.translate(0,ut/2,0);const St=A(J),yt=new bf({color:St,roughness:.35,metalness:.25,emissive:St,emissiveIntensity:.12}),Mt=new An(it,yt);Mt.position.set(_,0,N),Mt.castShadow=!0,Mt.receiveShadow=!0,Mt.__barPoint=j;const Ht=new hw(it),xt=new ra({color:16777215,transparent:!0,opacity:.25}),At=new kp(Ht,xt);Mt.add(At),C.add(Mt),Mt.scale.set(1,.01,1),v.push({mesh:Mt,point:j,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ut,material:yt,origColor:St.clone()})})}function $(tt){if(!e.value)return;const B=e.value.getBoundingClientRect();g.x=(tt.clientX-B.left)/B.width*2-1,g.y=-((tt.clientY-B.top)/B.height)*2+1,r.value.x=tt.clientX-B.left,r.value.y=tt.clientY-B.top}function P(){g.x=-999,g.y=-999,r.value.visible=!1,m&&w()}function w(){m&&(m.targetElevation=0,m.material.emissive.copy(m.origColor),m.material.emissiveIntensity=.12,m=null,i.value=null,r.value.visible=!1)}function O(){if(!c||!l||v.length===0)return;h.setFromCamera(g,c);const tt=v.map(st=>st.mesh),B=h.intersectObjects(tt,!1);if(B.length>0){const st=B[0].object,Y=v.find(z=>z.mesh===st);Y&&Y!==m&&(m&&w(),m=Y,i.value=Y.point,r.value.visible=!0,Y.targetElevation=1.2,Y.material.emissive.set(3718648),Y.material.emissiveIntensity=.65)}else m&&w()}function ht(){f=requestAnimationFrame(ht),d&&d.update(),O(),v.forEach(tt=>{tt.currentScaleY+=(tt.targetScaleY-tt.currentScaleY)*.1,tt.mesh.scale.y=tt.currentScaleY,tt.currentElevation+=(tt.targetElevation-tt.currentElevation)*.15,tt.mesh.position.y=tt.baseY+tt.currentElevation}),u&&l&&c&&u.render(l,c)}function nt(){if(!e.value||!u||!c)return;const tt=e.value.clientWidth,B=e.value.clientHeight;c.aspect=tt/B,c.updateProjectionMatrix(),u.setSize(tt,B)}return Hs(()=>t.points,()=>{I()},{deep:!0}),va(()=>{W()}),xa(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",nt),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(tt,B)=>(Ft(),kt("div",Nw,[y("div",Ow,[y("div",Fw,[B[3]||(B[3]=Bi('<div class="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400" data-v-14deed45><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-14deed45><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-14deed45></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-14deed45></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-14deed45></line></svg></div>',1)),y("div",null,[B[2]||(B[2]=y("div",{class:"text-xs font-semibold tracking-wider text-cyan-400 uppercase"},"3D 矩阵效率空间图谱",-1)),y("div",Bw," X轴: 输入电压 (Vin)  |  Y轴: "+Et(o.value)+"  |  Z轴(高度): 转换效率 (η) ",1)])]),i.value?(Ft(),kt("div",kw,[y("span",zw,[B[4]||(B[4]=y("span",{class:"w-2 h-2 rounded-full bg-cyan-400 animate-ping"},null,-1)),Zt(" 选定测试点 [步#"+Et(i.value.stepIndex)+"]: ",1)]),y("span",Vw,[B[5]||(B[5]=Zt("Vin: ",-1)),y("b",Hw,Et(i.value.vin.toFixed(3))+" V",1)]),B[11]||(B[11]=y("span",{class:"text-slate-400"},"|",-1)),y("span",Gw,[B[6]||(B[6]=Zt("Iin: ",-1)),y("b",Ww,Et(i.value.iin.toFixed(3))+" A",1)]),B[12]||(B[12]=y("span",{class:"text-slate-400"},"|",-1)),y("span",Xw,[B[7]||(B[7]=Zt("Pin: ",-1)),y("b",$w,Et(i.value.pin.toFixed(3))+" W",1)]),B[13]||(B[13]=y("span",{class:"text-slate-400"},"|",-1)),y("span",jw,[B[8]||(B[8]=Zt("Vout: ",-1)),y("b",qw,Et(i.value.vout.toFixed(3))+" V",1)]),B[14]||(B[14]=y("span",{class:"text-slate-400"},"|",-1)),y("span",Yw,[B[9]||(B[9]=Zt("Iout: ",-1)),y("b",Kw,Et(i.value.iout.toFixed(3))+" A",1)]),B[15]||(B[15]=y("span",{class:"text-slate-400"},"|",-1)),y("span",Zw,[B[10]||(B[10]=Zt("Pout: ",-1)),y("b",Jw,Et(i.value.pout.toFixed(3))+" W",1)]),B[16]||(B[16]=y("span",{class:"text-slate-400"},"|",-1)),y("span",Qw," 效率 η: "+Et(i.value.efficiency.toFixed(2))+"% ",1)])):(Ft(),kt("div",tT,[...B[17]||(B[17]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4 text-cyan-400 animate-bounce",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("circle",{cx:"12",cy:"12",r:"10"}),y("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),y("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})],-1),y("span",null,"💡 移动鼠标悬停在任意 3D 柱体上可将其浮起并查看精确测量参数；按住左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),y("div",eT,[y("div",nT,[y("button",{onClick:B[0]||(B[0]=st=>a("current")),class:ye(["px-2.5 py-1 rounded-md transition-all",s.value==="current"?"bg-cyan-500 text-slate-950 font-bold shadow":"text-slate-400 hover:text-slate-200"])}," Y: 负载电流 (A) ",2),y("button",{onClick:B[1]||(B[1]=st=>a("power")),class:ye(["px-2.5 py-1 rounded-md transition-all",s.value==="power"?"bg-cyan-500 text-slate-950 font-bold shadow":"text-slate-400 hover:text-slate-200"])}," Y: 输出功率 (W) ",2)]),y("button",{onClick:F,class:"px-2.5 py-1 text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 rounded-lg border border-slate-700 transition-all flex items-center gap-1.5",title:"恢复初始视角"},[...B[18]||(B[18]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}),y("path",{d:"M3 3v5h5"})],-1),Zt(" 重置视角 ",-1)])])])]),y("div",{ref_key:"mountRef",ref:e,class:"relative flex-1 w-full h-full cursor-grab active:cursor-grabbing"},[r.value.visible&&i.value?(Ft(),kt("div",{key:0,style:Wr({left:`${r.value.x}px`,top:`${r.value.y}px`}),class:"pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full mb-3 px-3 py-2 bg-slate-900/95 border border-cyan-400/60 rounded-lg shadow-2xl text-xs font-mono text-slate-100 backdrop-blur-md whitespace-nowrap transition-transform duration-75"},[y("div",iT,[y("span",null,"点 #"+Et(i.value.stepIndex),1),y("span",sT,"η = "+Et(i.value.efficiency.toFixed(2))+"%",1)]),y("div",rT,[y("div",null,[B[19]||(B[19]=Zt("Vin: ",-1)),y("span",oT,Et(i.value.vin.toFixed(2))+"V",1)]),y("div",null,[B[20]||(B[20]=Zt("Vout: ",-1)),y("span",aT,Et(i.value.vout.toFixed(2))+"V",1)]),y("div",null,[B[21]||(B[21]=Zt("Iin: ",-1)),y("span",lT,Et(i.value.iin.toFixed(3))+"A",1)]),y("div",null,[B[22]||(B[22]=Zt("Iout: ",-1)),y("span",cT,Et(i.value.iout.toFixed(3))+"A",1)]),y("div",null,[B[23]||(B[23]=Zt("Pin: ",-1)),y("span",uT,Et(i.value.pin.toFixed(2))+"W",1)]),y("div",null,[B[24]||(B[24]=Zt("Pout: ",-1)),y("span",dT,Et(i.value.pout.toFixed(2))+"W",1)])]),B[25]||(B[25]=y("div",{class:"absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-slate-900 border-r border-b border-cyan-400/60 rotate-45"},null,-1))],4)):fi("",!0),B[26]||(B[26]=Bi('<div class="absolute bottom-6 right-6 z-10 px-4 py-3 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-800 shadow-xl flex flex-col gap-1.5 pointer-events-auto" data-v-14deed45><div class="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between" data-v-14deed45><span data-v-14deed45>效率色谱 (η)</span><span class="font-mono text-cyan-400" data-v-14deed45>0% ~ 100%</span></div><div class="h-3 w-44 rounded-full bg-gradient-to-r from-rose-600 via-amber-500 via-emerald-500 via-cyan-400 to-indigo-500 shadow-inner" data-v-14deed45></div><div class="flex justify-between text-[10px] font-mono text-slate-400" data-v-14deed45><span data-v-14deed45>&lt;70% 低效</span><span data-v-14deed45>85%</span><span data-v-14deed45>&gt;95% 高效</span></div></div>',1))],512)]))}}),hT=Gh(fT,[["__scopeId","data-v-14deed45"]]),pT={class:"w-screen h-screen flex flex-col bg-slate-950 text-slate-100 overflow-hidden select-none"},mT={class:"px-6 py-3 bg-slate-900/90 backdrop-blur-md border-b border-cyan-500/20 flex flex-wrap items-center justify-between gap-4 z-20 shadow-md"},gT={class:"flex items-center space-x-3"},_T={class:"text-sm font-bold text-white flex items-center gap-2"},vT={class:"text-[11px] text-slate-400 font-mono"},xT={key:0,class:"flex items-center flex-wrap gap-2.5 text-xs font-mono"},yT={class:"px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5 shadow"},MT={class:"text-emerald-400 font-bold text-sm"},ST={key:0,class:"text-[10px] text-emerald-400/80"},bT={class:"px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5"},ET={class:"text-cyan-400 font-bold"},wT={class:"px-3 py-1.5 rounded-lg bg-amber-950/40 border border-amber-500/30 text-amber-300 flex items-center gap-1.5"},TT={class:"text-amber-400 font-bold"},AT={class:"flex items-center space-x-2"},CT={key:0,class:"relative"},RT=["value"],PT={class:"flex-1 w-full h-full relative"},DT={key:1,class:"w-full h-full flex flex-col items-center justify-center text-slate-500 gap-3"},LT=Nn({__name:"Result3DView",setup(n){const t=C_(),e=A_(),i=Te(null),s=Te([]),r=Te("");async function o(){const u=t.params.id||"";if(s.value=await ip(),u){const d=await Qx(u);if(d){i.value=d,r.value=d.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function a(){r.value&&e.replace(`/result/${r.value}`)}function l(){i.value&&jl(i.value)}function c(){window.opener?window.close():e.push("/")}return Hs(()=>t.params.id,()=>{o()}),va(()=>{o()}),(u,d)=>{var h,g,v,m,p,C,A,M;const f=_h("router-link");return Ft(),kt("div",pT,[y("header",mT,[y("div",gT,[Ee(f,{to:"/",class:"p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all flex items-center gap-1.5 text-xs font-medium",title:"返回控制台"},{default:dh(()=>[...d[1]||(d[1]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("polyline",{points:"15 18 9 12 15 6"})],-1),Zt(" 控制台 ",-1)])]),_:1}),y("div",null,[y("h1",_T,[y("span",null,Et(((h=i.value)==null?void 0:h.title)||"3D 效率矩阵空间图谱"),1),d[2]||(d[2]=y("span",{class:"text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"}," 独立可视化新窗口 ",-1))]),y("p",vT," 测试时间: "+Et(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+Et((v=(g=i.value)==null?void 0:g.config)==null?void 0:v.voltageMin)+"V~"+Et((p=(m=i.value)==null?void 0:m.config)==null?void 0:p.voltageMax)+"V, "+Et((A=(C=i.value)==null?void 0:C.config)==null?void 0:A.loadMode),1)])]),(M=i.value)!=null&&M.summary?(Ft(),kt("div",xT,[y("div",yT,[d[4]||(d[4]=y("span",{class:"w-2 h-2 rounded-full bg-emerald-400"},null,-1)),y("span",null,[d[3]||(d[3]=Zt("峰值效率 η_max: ",-1)),y("b",MT,Et(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ft(),kt("span",ST," (@"+Et(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+Et(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):fi("",!0)]),y("div",bT,[y("span",null,[d[5]||(d[5]=Zt("平均效率 η_avg: ",-1)),y("b",ET,Et(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),y("div",wT,[y("span",null,[d[6]||(d[6]=Zt("矩阵测试点数: ",-1)),y("b",TT,Et(i.value.points.length)+" 点",1)])])])):fi("",!0),y("div",AT,[s.value.length>1?(Ft(),kt("div",CT,[hn(y("select",{"onUpdate:modelValue":d[0]||(d[0]=W=>r.value=W),onChange:a,class:"text-xs font-mono py-1.5 px-2 bg-slate-800 border-slate-700 text-slate-200 rounded-lg outline-none cursor-pointer"},[(Ft(!0),kt(Le,null,Bs(s.value,W=>(Ft(),kt("option",{key:W.id,value:W.id},Et(W.title)+" ("+Et(new Date(W.createdAt).toLocaleTimeString())+") ",9,RT))),128))],544),[[Vl,r.value]])])):fi("",!0),i.value?(Ft(),kt("button",{key:1,onClick:l,class:"px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow"},[...d[7]||(d[7]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-3.5 h-3.5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),y("polyline",{points:"7 10 12 15 17 10"}),y("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Zt(" 下载 CSV 报告 ",-1)])])):fi("",!0),y("button",{onClick:c,class:"p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-all",title:"关闭窗口"},[...d[8]||(d[8]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[y("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),y("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])])]),y("div",PT,[i.value&&i.value.points.length>0?(Ft(),Jc(hT,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ft(),kt("div",DT,[...d[9]||(d[9]=[y("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-12 h-12 text-cyan-500 animate-spin",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[y("circle",{cx:"12",cy:"12",r:"10","stroke-opacity":"0.25"}),y("path",{d:"M12 2a10 10 0 0 1 10 10","stroke-linecap":"round"})],-1),y("p",{class:"text-sm font-mono"},"正在从 IndexedDB 加载 3D 矩阵效率数据...",-1)])]))])])}}}),IT=[{path:"/",name:"Console",component:ay},{path:"/result/:id",name:"Result3D",component:LT,props:!0}],UT=T_({history:s_(),routes:IT}),Hp=p0(x0);Hp.use(UT);Hp.mount("#app");
