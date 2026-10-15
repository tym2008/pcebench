var Qp=Object.defineProperty;var tm=(n,t,e)=>t in n?Qp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Qt=(n,t,e)=>tm(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const me={},as=[],$n=()=>{},zf=()=>!1,ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pa=n=>n.startsWith("onUpdate:"),Be=Object.assign,kc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},em=Object.prototype.hasOwnProperty,ie=(n,t)=>em.call(n,t),Gt=Array.isArray,Ni=n=>Yr(n)==="[object Map]",xi=n=>Yr(n)==="[object Set]",wu=n=>Yr(n)==="[object Date]",Yt=n=>typeof n=="function",be=n=>typeof n=="string",qn=n=>typeof n=="symbol",ue=n=>n!==null&&typeof n=="object",kf=n=>(ue(n)||Yt(n))&&Yt(n.then)&&Yt(n.catch),Vf=Object.prototype.toString,Yr=n=>Vf.call(n),nm=n=>Yr(n).slice(8,-1),Hf=n=>Yr(n)==="[object Object]",Vc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},im=/-\w/g,Qe=ma(n=>n.replace(im,t=>t.slice(1).toUpperCase())),sm=/\B([A-Z])/g,_s=ma(n=>n.replace(sm,"-$1").toLowerCase()),ga=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=ma(n=>n?`on${ga(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Vo=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Gf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_a=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Au;const va=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ie(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?lm(i):Ie(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||ue(n))return n}const rm=/;(?![^(]*\))/g,om=/:([^]+)/,am=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function lm(n){const t={};return n.replace(am,e=>e.startsWith("/*")?"":e).split(rm).forEach(e=>{if(e){const i=e.split(om);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ui(n){let t="";if(be(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=ui(n[e]);i&&(t+=i+" ")}else if(ue(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",um=zc(cm);function Wf(n){return!!n||n===""}function dm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Un(n[s],t[s],e);return i}function Cu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Un(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function fm(n,t,e){let i=Ni(n),s=Ni(t);if(i||s||(i=xi(n),s=xi(t),i||s))return i&&s?Cu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Un(n[a],t[a],e))return!1}return String(n)===String(t)}function Ru(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Un(n,t,e){if(n===t)return!0;let i=wu(n),s=wu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=qn(n),s=qn(t),i||s?n===t:(i=Gt(n),s=Gt(t),i||s?i&&s?Ru(n,t,e,dm):!1:(i=ue(n),s=ue(t),i||s?!i||!s?!1:Ru(n,t,e,fm):String(n)===String(t))))}function Hc(n,t){return n.findIndex(e=>Un(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),Et=n=>be(n)?n:n==null?"":Gt(n)||ue(n)&&(n.toString===Vf||!Yt(n.toString))?Xf(n)?Et(n.value):JSON.stringify(n,$f,2):String(n),$f=(n,t)=>Xf(t)?$f(n,t.value):Ni(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Oa(i,r)+" =>"]=s,e),{})}:xi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oa(e))}:qn(t)?Oa(t):ue(t)&&!Gt(t)&&!Hf(t)?String(t):t,Oa=(n,t="")=>{var e;return qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class hm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pm(){return Oe}let _e;const Fa=new WeakSet;class qf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),Kf(this);const t=_e,e=Pn;_e=this,Pn=!0;try{return this.fn()}finally{Zf(this),_e=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xc(t);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let Yf=0,Dr,Lr;function jf(n,t=!1){if(n.flags|=8,t){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function Gc(){Yf++}function Wc(){if(--Yf>0)return;if(Lr){let t=Lr;for(Lr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Dr;){let t=Dr;for(Dr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Kf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Xc(i),mm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ll(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Jf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Jf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ll(n))))return;n.flags|=2;const t=n.dep,e=_e,i=Pn;_e=n,Pn=!0;try{Kf(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,Pn=i,Zf(n),n.flags&=-3}}function Xc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Xc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function mm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const Qf=[];function Yn(){Qf.push(Pn),Pn=!1}function jn(){const n=Qf.pop();Pn=n===void 0?!0:n}function Pu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Br=0;class gm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Pn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new gm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,th(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){Gc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Wc()}}}function th(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)th(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Il=new WeakMap,ds=Symbol(""),Ul=Symbol(""),zr=Symbol("");function He(n,t,e){if(Pn&&_e){let i=Il.get(n);i||Il.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new $c),s.map=i,s.key=e),s.track()}}function fi(n,t,e,i,s,r){const o=Il.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Gc(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&Vc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zr||!qn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(zr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ds)),Ni(n)&&a(o.get(Ul)));break;case"delete":l||(a(o.get(ds)),Ni(n)&&a(o.get(Ul)));break;case"set":Ni(n)&&a(o.get(ds));break}}Wc()}function Ms(n){const t=ae(n);return t===n||(He(t,"iterate",zr),_n(n))?t:Kn(n)?Fi(n)?t.map(e=>Vi(xn(e))):t.map(Vi):t.map(xn)}function xa(n){return He(n=ae(n),"iterate",zr),n}function kn(n,t){return Kn(n)?Vi(Fi(n)?xn(t):t):xn(t)}const _m={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,n=>kn(this,n))},concat(...n){return Ms(this).concat(...n.map(t=>Gt(t)?Ms(t):t))},entries(){return Ba(this,"entries",n=>(n[1]=kn(this,n[1]),n))},every(n,t){return ti(this,"every",n,t,void 0,arguments)},filter(n,t){return ti(this,"filter",n,t,e=>e.map(i=>kn(this,i)),arguments)},find(n,t){return ti(this,"find",n,t,e=>kn(this,e),arguments)},findIndex(n,t){return ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ti(this,"findLast",n,t,e=>kn(this,e),arguments)},findLastIndex(n,t){return ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return Ms(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,t){return ti(this,"map",n,t,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...t){return Lu(this,"reduce",n,t)},reduceRight(n,...t){return Lu(this,"reduceRight",n,t)},shift(){return fr(this,"shift")},some(n,t){return ti(this,"some",n,t,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return Ms(this).toReversed()},toSorted(n){return Ms(this).toSorted(n)},toSpliced(...n){return Ms(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return Ba(this,"values",n=>kn(this,n))}};function Ba(n,t,e){const i=xa(n),s=i[t],r=s.call(i);if(i!==n&&!_n(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Du(r.next(),e),s!==eh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Du(r._next(),e)}return r}function Du(n,t){return n.done||(n.value=t(n.value)),n}const eh=Array.prototype;function ti(n,t,e,i,s,r){const o=xa(n),a=o!==n&&!_n(n),l=o[t];if(l!==eh[t]){const d=l.apply(n,r);return a?xn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,kn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Lu(n,t,e,i){const s=xa(n),r=s!==n&&!_n(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=kn(n,c)),e.call(this,c,kn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?kn(n,l):l}function za(n,t,e){const i=ae(n);He(i,"iterate",zr);const s=i[t](...e);return(s===-1||s===!1)&&jc(e[0])?(e[0]=ae(e[0]),i[t](...e)):s}function fr(n,t,e=[]){Yn(),Gc();const i=ae(n)[t].apply(n,e);return Wc(),jn(),i}const vm=zc("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function xm(n){qn(n)||(n=String(n));const t=ae(this);return He(t,"has",n),t.hasOwnProperty(n)}class ih{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Rm:ah:r?oh:rh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=_m[e]))return l;if(e==="hasOwnProperty")return xm}const a=Reflect.get(t,e,We(t)?t:i);if((qn(e)?nh.has(e):vm(e))||(s||He(t,"get",e),r))return a;if(We(a)){const l=o&&Vc(e)?a:a.value;return s&&ue(l)?Ol(l):l}return ue(a)?s?Ol(a):Oi(a):a}}class sh extends ih{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Gt(t)&&Vc(e);if(!this._isShallow){const c=Kn(r);if(!_n(i)&&!Kn(i)&&(r=ae(r),i=ae(i)),!o&&We(r)&&!We(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ie(t,e),l=Reflect.set(t,e,i,We(t)?t:s);return t===ae(s)&&l&&(a?Wn(i,r)&&fi(t,"set",e,i):fi(t,"add",e,i)),l}deleteProperty(t,e){const i=ie(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&fi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!qn(e)||!nh.has(e))&&He(t,"has",e),i}ownKeys(t){return He(t,"iterate",Gt(t)?"length":ds),Reflect.ownKeys(t)}}class ym extends ih{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Mm=new sh,Sm=new ym,bm=new sh(!0);const Nl=n=>n,so=n=>Reflect.getPrototypeOf(n);function Em(n,t,e){return function(...i){const s=this.__v_raw,r=ae(s),o=Ni(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Nl:t?Vi:xn;return!t&&He(r,"iterate",l?Ul:ds),Be(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ro(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Tm(n,t){const e={get(s){const r=this.__v_raw,o=ae(r),a=ae(s);n||(Wn(s,a)&&He(o,"get",s),He(o,"get",a));const{has:l}=so(o),c=t?Nl:n?Vi:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&He(ae(s),"iterate",ds),s.size},has(s){const r=this.__v_raw,o=ae(r),a=ae(s);return n||(Wn(s,a)&&He(o,"has",s),He(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ae(a),c=t?Nl:n?Vi:xn;return!n&&He(l,"iterate",ds),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Be(e,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){const r=ae(this),o=so(r),a=ae(s),l=!t&&!_n(s)&&!Kn(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),fi(r,"add",l,l)),this},set(s,r){!t&&!_n(r)&&!Kn(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=so(o);let c=a.call(o,s);c||(s=ae(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&fi(o,"set",s,r):fi(o,"add",s,r),this},delete(s){const r=ae(this),{has:o,get:a}=so(r);let l=o.call(r,s);l||(s=ae(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&fi(r,"delete",s,void 0),c},clear(){const s=ae(this),r=s.size!==0,o=s.clear();return r&&fi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Em(s,n,t)}),e}function qc(n,t){const e=Tm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ie(e,s)&&s in i?e:i,s,r)}const wm={get:qc(!1,!1)},Am={get:qc(!1,!0)},Cm={get:qc(!0,!1)};const rh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Rm=new WeakMap;function Pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oi(n){return Kn(n)?n:Yc(n,!1,Mm,wm,rh)}function lh(n){return Yc(n,!1,bm,Am,oh)}function Ol(n){return Yc(n,!0,Sm,Cm,ah)}function Yc(n,t,e,i,s){if(!ue(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Pm(nm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Fi(n){return Kn(n)?Fi(n.__v_raw):!!(n&&n.__v_isReactive)}function Kn(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function jc(n){return n?!!n.__v_raw:!1}function ae(n){const t=n&&n.__v_raw;return t?ae(t):n}function Dm(n){return!ie(n,"__v_skip")&&Object.isExtensible(n)&&Gf(n,"__v_skip",!0),n}const xn=n=>ue(n)?Oi(n):n,Vi=n=>ue(n)?Ol(n):n;function We(n){return n?n.__v_isRef===!0:!1}function ce(n){return ch(n,!1)}function Lm(n){return ch(n,!0)}function ch(n,t){return We(n)?n:new Im(n,t)}class Im{constructor(t,e){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ae(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||_n(t)||Kn(t);t=i?t:ae(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function Ee(n){return We(n)?n.value:n}const Um={get:(n,t,e)=>t==="__v_raw"?n:Ee(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return We(s)&&!We(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function uh(n){return Fi(n)?n:new Proxy(n,Um)}class Nm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return jf(this,!0),!0}get value(){const t=this.dep.track();return Jf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Om(n,t,e=!1){let i,s;return Yt(n)?i=n:(i=n.get,s=n.set),new Nm(i,s,e)}const oo={},Jo=new WeakMap;let es;function Fm(n,t=!1,e=es){if(e){let i=Jo.get(e);i||Jo.set(e,i=[]),i.push(n)}}function Bm(n,t,e=me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:_n(S)||s===!1||s===0?hi(S,1):hi(S);let u,d,f,h,_=!1,v=!1;if(We(n)?(d=()=>n.value,_=_n(n)):Fi(n)?(d=()=>c(n),_=!0):Gt(n)?(v=!0,_=n.some(S=>Fi(S)||_n(S)),d=()=>n.map(S=>{if(We(S))return S.value;if(Fi(S))return c(S);if(Yt(S))return l?l(S,2):S()})):Yt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){Yn();try{f()}finally{jn()}}const S=es;es=u;try{return l?l(n,3,[h]):n(h)}finally{es=S}}:d=$n,t&&s){const S=d,B=s===!0?1/0:s;d=()=>hi(S(),B)}const m=pm(),p=()=>{u.stop(),m&&m.active&&kc(m.effects,u)};if(r&&t){const S=t;t=(...B)=>{try{return S(...B)}finally{p()}}}let R=v?new Array(n.length).fill(oo):oo;const A=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const B=u.run();if(S||s||_||(v?B.some((z,I)=>Wn(z,R[I])):Wn(B,R))){const z=es;Yn();try{f&&f(),es=u;const I=[B,R===oo?void 0:v&&R[0]===oo?[]:R,h];R=B,l?l(t,3,I):t(...I)}finally{es=z,jn()}}}else u.run()};return a&&a(A),u=new qf(d),u.scheduler=o?()=>o(A,!1):A,h=S=>Fm(S,!1,u),f=u.onStop=()=>{const S=Jo.get(u);if(S){if(l)l(S,4);else for(const B of S)B();Jo.delete(u)}},t?i?A(!0):R=u.run():o?o(A.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function hi(n,t=1/0,e){if(t<=0||!ue(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,We(n))hi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)hi(n[i],t,e);else if(xi(n)||Ni(n))n.forEach(i=>{hi(i,t,e)});else if(Hf(n)){for(const i in n)hi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&hi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,t,e,i){try{return i?n(...i):n()}catch(s){ya(s,t,e)}}function Nn(n,t,e,i){if(Yt(n)){const s=jr(n,t,e,i);return s&&kf(s)&&s.catch(r=>{ya(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],t,e,i));return s}}function ya(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Yn(),jr(r,null,10,[n,l,c]),jn();return}}zm(n,e,s,i,o)}function zm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const je=[];let wn=-1;const Vn=[];let Di=null,ks=0;const dh=Promise.resolve();let Qo=null;function Kc(n){const t=Qo||dh;return n?t.then(this?n.bind(this):n):t}function km(n){let t=wn+1,e=je.length;for(;t<e;){const i=t+e>>>1,s=je[i],r=kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Zc(n){if(!(n.flags&1)){const t=kr(n),e=je[je.length-1];!e||!(n.flags&2)&&t>=kr(e)?je.push(n):je.splice(km(t),0,n),n.flags|=1,fh()}}function fh(){Qo||(Qo=dh.then(mh))}function Vm(n){if(!Gt(n))Di&&n.id===-1?Di.splice(ks+1,0,n):n.flags&1||(Vn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Vn.push(n[t]);fh()}function hh(n,t,e,i=wn+1){for(;i<je.length;i++){const s=je[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;je.splice(i,1),i=n?i-1:wn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ph(n,t,e=0){if(Vn.length){let i=Vn,s=0;if(t){i=[];for(let o=0;o<Vn.length;o++){const a=Vn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Vn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>kr(o)-kr(a));if(Vn.length=s,Di){for(let o=0;o<r.length;o++)Di.push(r[o]);return}for(Di=r,ks=0;ks<Di.length;ks++){const o=Di[ks];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Di=null,ks=0}}let ka=!1;function Hm(n,t){if(ka){n();return}const e=t===void 0?void 0:new Set(Vn);n(),ka=!0;try{hh(void 0,t),ph(void 0,e,t)}finally{ka=!1}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mh(n){try{for(wn=0;wn<je.length;wn++){const t=je[wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;wn<je.length;wn++){const t=je[wn];t&&(t.flags&=-2)}wn=-1,je.length=0,ph(),Qo=null,(je.length||Vn.length)&&mh()}}let dn=null,gh=null;function ta(n){const t=dn;return dn=n,gh=n&&n.type.__scopeId||null,t}function _h(n,t=dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&sa(-1);const r=ta(t),o=hs.length;let a;try{a=n(...s)}finally{for(let l=hs.length;l>o;l--)Vh();ta(r),i._d&&sa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ce(n,t){if(dn===null)return n;const e=Ta(dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=me]=t[s];r&&(Yt(r)&&(r={mounted:r,updated:r}),r.deep&&hi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function qi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Yn(),Nn(l,e,8,[n.el,a,n,t]),jn())}}function Ho(n,t){if(Ge){let e=Ge.provides;const i=Ge.parent&&Ge.parent.provides;i===e&&(e=Ge.provides=Object.create(i)),e[n]=t}}function Dn(n,t,e=!1){const i=kg();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Yt(t)?t.call(i&&i.proxy):t}}const Gm=Symbol.for("v-scx"),Wm=()=>Dn(Gm);function fs(n,t,e){return vh(n,t,e)}function vh(n,t,e=me){const{immediate:i,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&i||!t&&r!=="post";let c;if(Xr){if(r==="sync"){const h=Wm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=$n,h.resume=$n,h.pause=$n,h}}const u=Ge;a.call=(h,_,v)=>Nn(h,u,_,v);let d=!1;r==="post"?a.scheduler=h=>{h.i=u,sn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,_)=>{_?h():Zc(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Bm(n,t,a);return Xr&&(c?c.push(f):l&&f()),f}function Xm(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;Yt(t)?r=t:(r=t.handler,e=t);const o=Jr(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ma=n=>n.__isTeleport,Va=Symbol("_leaveCb");function qm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==On){t=e;break}}return t}function yh(n){if(!Jc(n))return Ma(n.type)&&n.children?qm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Yt(e.default))return e.default()}}function ea(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;ea(Ma(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Fe&&Gt(n.children)){const e=Ch(n.children,!1);e&&ea(e,t)}}function Fl(n){if(n.component)return Fl(n.component.subTree);if(n.type===Fe){const t=Gt(n.children)&&Ch(n.children,!1);return t?Fl(t):void 0}if(n.type!==On)return n}function Xi(n,t){return Yt(n)?Be({name:n.name},t,{setup:n}):n}function Mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Iu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const na=new WeakMap;function Ir(n,t,e,i,s=!1){if(Gt(n)){n.forEach((v,m)=>Ir(v,t&&(Gt(t)?t[m]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ta(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===me?a.refs={}:a.refs,d=a.setupState,f=ae(d),h=d===me?zf:v=>Iu(u,v)?!1:ie(f,v),_=(v,m)=>!(m&&Iu(u,m));if(c!=null&&c!==l){if(Uu(t),be(c))u[c]=null,h(c)&&(d[c]=null);else if(We(c)){const v=t;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(Yt(l))jr(l,a,12,[o,u]);else{const v=be(l),m=We(l);if(v||m){const p=()=>{if(n.f){const R=v?h(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)Gt(R)&&kc(R,r);else if(Gt(R))R.includes(r)||R.push(r);else if(v)u[l]=[r],h(l)&&(d[l]=u[l]);else{const A=[r];_(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else v?(u[l]=o,h(l)&&(d[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const R=()=>{p(),na.delete(n)};R.id=-1,na.set(n,R),sn(R,e)}else Uu(n),p()}}}function Uu(n){const t=na.get(n);t&&(t.flags|=8,na.delete(n))}va().requestIdleCallback;va().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,Jc=n=>n.type.__isKeepAlive;function Ym(n,t){Sh(n,"a",t)}function jm(n,t){Sh(n,"da",t)}function Sh(n,t,e=Ge){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Sa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Jc(s.parent.vnode)&&Km(i,t,e,s),s=s.parent}}function Km(n,t,e,i){const s=Sa(t,n,i,!0);Zr(()=>{kc(i[t],s)},e)}function Sa(n,t,e=Ge,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Yn();const a=Jr(e),l=Nn(t,e,n,o);return a(),jn(),l});return i?s.unshift(r):s.push(r),r}}const Mi=n=>(t,e=Ge)=>{(!Xr||n==="sp")&&Sa(n,(...i)=>t(...i),e)},Zm=Mi("bm"),Kr=Mi("m"),Jm=Mi("bu"),Qm=Mi("u"),tg=Mi("bum"),Zr=Mi("um"),eg=Mi("sp"),ng=Mi("rtg"),ig=Mi("rtc");function sg(n,t=Ge){Sa("ec",n,t)}const rg="components";function bh(n,t){return ag(rg,n,!0,t)||n}const og=Symbol.for("v-ndc");function ag(n,t,e=!0,i=!1){const s=dn||Ge;if(s){const r=s.type;{const a=Xg(r,!1);if(a&&(a===t||a===Qe(t)||a===ga(Qe(t))))return r}const o=Nu(s[n]||r[n],t)||Nu(s.appContext[n],t);return!o&&i?r:o}}function Nu(n,t){return n&&(n[t]||n[Qe(t)]||n[ga(Qe(t))])}function Hs(n,t,e,i){let s;const r=e,o=Gt(n);if(o||be(n)){const a=o&&Fi(n);let l=!1,c=!1;a&&(l=!_n(n),c=Kn(n),n=xa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?Vi(xn(n[u])):xn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ue(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Bl=n=>n?Xh(n)?Ta(n):Bl(n.parent):null,Nr=Be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bl(n.parent),$root:n=>Bl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Th(n),$forceUpdate:n=>n.f||(n.f=()=>{Zc(n.update)}),$nextTick:n=>n.n||(n.n=Kc.bind(n.proxy)),$watch:n=>Xm.bind(n)}),Ha=(n,t)=>n!==me&&!n.__isScriptSetup&&ie(n,t),lg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ha(i,t))return o[t]=1,i[t];if(s!==me&&ie(s,t))return o[t]=2,s[t];if(ie(r,t))return o[t]=3,r[t];if(e!==me&&ie(e,t))return o[t]=4,e[t];zl&&(o[t]=0)}}const c=Nr[t];let u,d;if(c)return t==="$attrs"&&He(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==me&&ie(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ie(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ha(s,t)?(s[t]=e,!0):i!==me&&ie(i,t)?(i[t]=e,!0):ie(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==me&&a[0]!=="$"&&ie(n,a)||Ha(t,a)||ie(r,a)||ie(i,a)||ie(Nr,a)||ie(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ie(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ou(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let zl=!0;function cg(n){const t=Th(n),e=n.proxy,i=n.ctx;zl=!1,t.beforeCreate&&Fu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:_,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:R,destroyed:A,unmounted:S,render:B,renderTracked:z,renderTriggered:I,errorCaptured:H,serverPrefetch:C,expose:T,inheritAttrs:N,components:ut,directives:nt,filters:Q}=t;if(c&&ug(c,i,null),o)for(const X in o){const k=o[X];Yt(k)&&(i[X]=k.bind(e))}if(s){const X=s.call(e,e);ue(X)&&(n.data=Oi(X))}if(zl=!0,r)for(const X in r){const k=r[X],vt=Yt(k)?k.bind(e,e):Yt(k.get)?k.get.bind(e,e):$n,U=!Yt(k)&&Yt(k.set)?k.set.bind(e):$n,D=Ze({get:vt,set:U});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>D.value,set:gt=>D.value=gt})}if(a)for(const X in a)Eh(a[X],i,e,X);if(l){const X=Yt(l)?l.call(e):l;Reflect.ownKeys(X).forEach(k=>{Ho(k,X[k])})}u&&Fu(u,n,"c");function et(X,k){Gt(k)?k.forEach(vt=>X(vt.bind(e))):k&&X(k.bind(e))}if(et(Zm,d),et(Kr,f),et(Jm,h),et(Qm,_),et(Ym,v),et(jm,m),et(sg,H),et(ig,z),et(ng,I),et(tg,R),et(Zr,S),et(eg,C),Gt(T))if(T.length){const X=n.exposed||(n.exposed={});T.forEach(k=>{Object.defineProperty(X,k,{get:()=>e[k],set:vt=>e[k]=vt,enumerable:!0})})}else n.exposed||(n.exposed={});B&&n.render===$n&&(n.render=B),N!=null&&(n.inheritAttrs=N),ut&&(n.components=ut),nt&&(n.directives=nt),C&&Mh(n)}function ug(n,t,e=$n){Gt(n)&&(n=kl(n));for(const i in n){const s=n[i];let r;ue(s)?"default"in s?r=Dn(s.from||i,s.default,!0):r=Dn(s.from||i):r=Dn(s),We(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Fu(n,t,e){Nn(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Eh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(be(n)){const r=t[n];Yt(r)&&fs(s,r)}else if(Yt(n))fs(s,n.bind(e));else if(ue(n))if(Gt(n))n.forEach(r=>Eh(r,t,e,i));else{const r=Yt(n.handler)?n.handler.bind(e):t[n.handler];Yt(r)&&fs(s,r,n)}}function Th(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ia(l,c,o,!0)),ia(l,t,o)),ue(t)&&r.set(t,l),l}function ia(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ia(n,r,e,!0),s&&s.forEach(o=>ia(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=dg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const dg={data:Bu,props:zu,emits:zu,methods:Er,computed:Er,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Er,directives:Er,watch:hg,provide:Bu,inject:fg};function Bu(n,t){return t?n?function(){return Be(Yt(n)?n.call(this,this):n,Yt(t)?t.call(this,this):t)}:t:n}function fg(n,t){return Er(kl(n),kl(t))}function kl(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function $e(n,t){return n?[...new Set([].concat(n,t))]:t}function Er(n,t){return n?Be(Object.create(null),n,t):t}function zu(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:Be(Object.create(null),Ou(n),Ou(t??{})):t}function hg(n,t){if(!n)return t;if(!t)return n;const e=Be(Object.create(null),n);for(const i in t)e[i]=$e(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pg=0;function mg(n,t){return function(i,s=null){Yt(i)||(i=Be({},i)),s!=null&&!ue(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:pg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Yt(u.install)?(o.add(u),u.install(c,...d)):Yt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Ue(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Ta(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=$s;$s=c;try{return u()}finally{$s=d}}};return c}}let $s=null;const gg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${_s(t)}Modifiers`];function _g(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||me;let s=e;const r=t.startsWith("update:"),o=r&&gg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>be(u)?u.trim():u)),o.number&&(s=s.map(_a)));let a,l=i[a=Na(t)]||i[a=Na(Qe(t))];!l&&r&&(l=i[a=Na(_s(t))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}const vg=new WeakMap;function Ah(n,t,e=!1){const i=e?vg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Yt(n)){const l=c=>{const u=Ah(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ue(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):Be(o,r),ue(n)&&i.set(n,o),o)}function ba(n,t){return!n||!ha(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(n,t[0].toLowerCase()+t.slice(1))||ie(n,_s(t))||ie(n,t))}function ku(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:_,inheritAttrs:v}=n,m=ta(n);let p,R;try{if(e.shapeFlag&4){const S=s||i,B=S;p=Hn(c.call(B,S,u,d,h,f,_)),R=a}else{const S=t;p=Hn(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),R=t.props?a:xg(a)}}catch(S){hs.length=0,ya(S,n,1),p=Ue(On)}let A=p;if(R&&v!==!1){const S=Object.keys(R),{shapeFlag:B}=A;S.length&&B&7&&(r&&S.some(pa)&&(R=yg(R,r)),A=Zs(A,R,!1,!0))}if(e.dirs&&(A=Zs(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition){const S=Ma(A.type)&&yh(A)||A;ea(S,e.transition)}return p=A,ta(m),p}function Ch(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Hr(s)){if(s.type!==On||s.children==="v-if"){if(e)return;e=s}}else return}return e}const xg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ha(e))&&((t||(t={}))[e]=n[e]);return t},yg=(n,t)=>{const e={};for(const i in n)(!pa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Mg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Rh(o,i,f)&&!ba(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ie(n,r)||Rh(t,n,r)&&!ba(e,r))return!0}return!1}function Rh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ue(i)&&ue(s)?!Un(i,s):i!==s}function Sg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ph={},Dh=()=>Object.create(Ph),Lh=n=>Object.getPrototypeOf(n)===Ph;function bg(n,t,e,i=!1){const s={},r=Dh();n.propsDefaults=Object.create(null),Ih(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:lh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Eg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ae(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ba(n.emitsOptions,f))continue;const h=t[f];if(l)if(ie(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const _=Qe(f);s[_]=Vl(l,a,_,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Ih(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ie(t,d)&&((u=_s(d))===d||!ie(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Vl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ie(t,d))&&(delete r[d],c=!0)}c&&fi(n.attrs,"set","")}function Ih(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Pr(l))continue;const c=t[l];let u;s&&ie(s,u=Qe(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ae(e),c=a||me;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Vl(s,l,d,c[d],n,!ie(c,d))}}return o}function Vl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ie(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Yt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Jr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===_s(e))&&(i=!0))}return i}const Tg=new WeakMap;function Uh(n,t,e=!1){const i=e?Tg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Yt(n)){const u=d=>{l=!0;const[f,h]=Uh(d,t,!0);Be(o,f),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ue(n)&&i.set(n,as),as;if(Gt(r))for(let u=0;u<r.length;u++){const d=Qe(r[u]);Hu(d)&&(o[d]=me)}else if(r)for(const u in r){const d=Qe(u);if(Hu(d)){const f=r[u],h=o[d]=Gt(f)||Yt(f)?{type:f}:Be({},f),_=h.type;let v=!1,m=!0;if(Gt(_))for(let p=0;p<_.length;++p){const R=_[p],A=Yt(R)&&R.name;if(A==="Boolean"){v=!0;break}else A==="String"&&(m=!1)}else v=Yt(_)&&_.name==="Boolean";h[0]=v,h[1]=m,(v||ie(h,"default"))&&a.push(d)}}const c=[o,a];return ue(n)&&i.set(n,c),c}function Hu(n){return n[0]!=="$"&&!Pr(n)}const Qc=n=>n==="_"||n==="_ctx"||n==="$stable",tu=n=>Gt(n)?n.map(Hn):[Hn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=_h((...s)=>tu(t(...s)),e);return i._c=!1,i},Nh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Qc(s))continue;const r=n[s];if(Yt(r))t[s]=wg(s,r,i);else if(r!=null){const o=tu(r);t[s]=()=>o}}},Oh=(n,t)=>{const e=tu(t);n.slots.default=()=>e},Fh=(n,t,e)=>{for(const i in t)(e||!Qc(i))&&(n[i]=t[i])},Ag=(n,t,e)=>{const i=n.slots=Dh();if(n.vnode.shapeFlag&32){const s=t._;s?(Fh(i,t,e),e&&Gf(i,"_",s,!0)):Nh(t,i)}else t&&Oh(n,t)},Cg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Fh(s,t,e):(r=!t.$stable,Nh(t,s)),o=t}else t&&(Oh(n,t),o={default:1});if(r)for(const a in s)!Qc(a)&&o[a]==null&&delete s[a]},sn=Ig;function Rg(n){return Pg(n)}function Pg(n,t){const e=va();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=$n,insertStaticContent:_}=n,v=(E,P,F,b=null,J=null,Z=null,rt=void 0,ot=null,Y=!!P.dynamicChildren)=>{if(E===P)return;E&&!hr(E,P)&&(b=L(E),gt(E,J,Z,!0),E=null),P.patchFlag===-2&&(Y=!1,P.dynamicChildren=null),P.dynamicChildren&&E&&E.dynamicChildren&&E.dynamicChildren.hasOnce&&(P.dynamicChildren===as&&(P.dynamicChildren=[]),P.dynamicChildren.hasOnce=!0);const{type:y,ref:x,shapeFlag:g}=P;switch(y){case Ea:m(E,P,F,b);break;case On:p(E,P,F,b);break;case Go:E==null&&R(P,F,b,rt);break;case Fe:ut(E,P,F,b,J,Z,rt,ot,Y);break;default:g&1?B(E,P,F,b,J,Z,rt,ot,Y):g&6?nt(E,P,F,b,J,Z,rt,ot,Y):(g&64||g&128)&&y.process(E,P,F,b,J,Z,rt,ot,Y,st)}x!=null&&J?Ir(x,E&&E.ref,Z,P||E,!P):x==null&&E&&E.ref!=null&&Ir(E.ref,null,Z,E,!0)},m=(E,P,F,b)=>{if(E==null)i(P.el=a(P.children),F,b);else{const J=P.el=E.el;P.children!==E.children&&c(J,P.children)}},p=(E,P,F,b)=>{E==null?i(P.el=l(P.children||""),F,b):P.el=E.el},R=(E,P,F,b)=>{[E.el,E.anchor]=_(E.children,P,F,b,E.el,E.anchor)},A=({el:E,anchor:P},F,b)=>{let J;for(;E&&E!==P;)J=f(E),i(E,F,b),E=J;i(P,F,b)},S=({el:E,anchor:P})=>{let F;for(;E&&E!==P;)F=f(E),s(E),E=F;s(P)},B=(E,P,F,b,J,Z,rt,ot,Y)=>{if(P.type==="svg"?rt="svg":P.type==="math"&&(rt="mathml"),E==null)z(P,F,b,J,Z,rt,ot,Y);else{const y=E.el&&E.el._isVueCE?E.el:null;try{y&&y._beginPatch(),C(E,P,J,Z,rt,ot,Y)}finally{y&&y._endPatch()}}},z=(E,P,F,b,J,Z,rt,ot)=>{let Y,y;const{props:x,shapeFlag:g,transition:O,dirs:j}=E;if(Y=E.el=o(E.type,Z,x&&x.is,x),g&8?u(Y,E.children):g&16&&H(E.children,Y,null,b,J,Ga(E,Z),rt,ot),j&&qi(E,null,b,"created"),I(Y,E,E.scopeId,rt,b),x){for(const it in x)it!=="value"&&!Pr(it)&&r(Y,it,null,x[it],Z,b);"value"in x&&r(Y,"value",null,x.value,Z),(y=x.onVnodeBeforeMount)&&zn(y,b,E)}j&&qi(E,null,b,"beforeMount");const at=Dg(J,O);at&&O.beforeEnter(Y),i(Y,P,F),((y=x&&x.onVnodeMounted)||at||j)&&sn(()=>{try{y&&zn(y,b,E),at&&O.enter(Y),j&&qi(E,null,b,"mounted")}finally{}},J)},I=(E,P,F,b,J)=>{if(F&&h(E,F),b)for(let Z=0;Z<b.length;Z++)h(E,b[Z]);if(J){let Z=J.subTree;if(P===Z||kh(Z.type)&&(Z.ssContent===P||Z.ssFallback===P)){const rt=J.vnode;I(E,rt,rt.scopeId,rt.slotScopeIds,J.parent)}}},H=(E,P,F,b,J,Z,rt,ot,Y=0)=>{for(let y=Y;y<E.length;y++){const x=E[y]=ot?di(E[y]):Hn(E[y]);v(null,x,P,F,b,J,Z,rt,ot)}},C=(E,P,F,b,J,Z,rt)=>{const ot=P.el=E.el;let{patchFlag:Y,dynamicChildren:y,dirs:x}=P;Y|=E.patchFlag&16;const g=E.props||me,O=P.props||me;let j;if(F&&Yi(F,!1),(j=O.onVnodeBeforeUpdate)&&zn(j,F,P,E),x&&qi(P,E,F,"beforeUpdate"),F&&Yi(F,!0),y&&(!E.dynamicChildren||E.dynamicChildren.length!==y.length)&&(Y=0,rt=!1,y=null),(g.innerHTML&&O.innerHTML==null||g.textContent&&O.textContent==null)&&u(ot,""),y?T(E.dynamicChildren,y,ot,F,b,Ga(P,J),Z):rt||k(E,P,ot,null,F,b,Ga(P,J),Z,!1),Y>0){if(Y&16)N(ot,g,O,F,J);else if(Y&2&&g.class!==O.class&&r(ot,"class",null,O.class,J),Y&4&&r(ot,"style",g.style,O.style,J),Y&8){const at=P.dynamicProps;for(let it=0;it<at.length;it++){const pt=at[it],ht=g[pt],bt=O[pt];(bt!==ht||pt==="value")&&r(ot,pt,ht,bt,J,F)}}Y&1&&E.children!==P.children&&u(ot,P.children)}else!rt&&y==null&&N(ot,g,O,F,J);((j=O.onVnodeUpdated)||x)&&sn(()=>{j&&zn(j,F,P,E),x&&qi(P,E,F,"updated")},b)},T=(E,P,F,b,J,Z,rt)=>{for(let ot=0;ot<P.length;ot++){const Y=E[ot],y=P[ot],x=Y.el||Hl(Y),g=x&&(Y.type===Fe||!hr(Y,y)||Y.shapeFlag&198)?d(x):F;v(Y,y,g,null,b,J,Z,rt,!0)}},N=(E,P,F,b,J)=>{if(P!==F){if(P!==me)for(const Z in P)!Pr(Z)&&!(Z in F)&&r(E,Z,P[Z],null,J,b);for(const Z in F){if(Pr(Z))continue;const rt=F[Z],ot=P[Z];rt!==ot&&Z!=="value"&&r(E,Z,ot,rt,J,b)}"value"in F&&r(E,"value",P.value,F.value,J)}},ut=(E,P,F,b,J,Z,rt,ot,Y)=>{const y=P.el=E?E.el:a(""),x=P.anchor=E?E.anchor:a("");let{patchFlag:g,dynamicChildren:O,slotScopeIds:j}=P;j&&(ot=ot?ot.concat(j):j),E==null?(i(y,F,b),i(x,F,b),H(P.children||[],F,x,J,Z,rt,ot,Y)):g>0&&g&64&&O&&E.dynamicChildren&&E.dynamicChildren.length===O.length?(T(E.dynamicChildren,O,F,J,Z,rt,ot),(P.key!=null||J&&P===J.subTree)&&Bh(E,P,!0)):k(E,P,F,x,J,Z,rt,ot,Y)},nt=(E,P,F,b,J,Z,rt,ot,Y)=>{P.slotScopeIds=ot,E==null?P.shapeFlag&512?J.ctx.activate(P,F,b,rt,Y):Q(P,F,b,J,Z,rt,Y):W(E,P,Y)},Q=(E,P,F,b,J,Z,rt)=>{const ot=E.component=zg(E,b,J);if(Jc(E)&&(ot.ctx.renderer=st),Vg(ot,!1,rt),ot.asyncDep){if(J&&J.registerDep(ot,et,rt,Z),!E.el){const Y=ot.subTree=Ue(On);p(null,Y,P,F),E.placeholder=Y.el}}else et(ot,E,P,F,J,Z,rt)},W=(E,P,F)=>{const b=P.component=E.component;if(Mg(E,P,F))if(b.asyncDep&&!b.asyncResolved){P.el=E.el,P.placeholder=E.placeholder,X(b,P,F);return}else b.next=P,b.update();else P.el=E.el,P.placeholder=E.placeholder,b.vnode=P},et=(E,P,F,b,J,Z,rt)=>{const ot=()=>{if(E.isMounted){let{next:g,bu:O,u:j,parent:at,vnode:it}=E;{const yt=zh(E);if(yt){g&&(g.el=it.el,X(E,g,rt)),yt.asyncDep.then(()=>{sn(()=>{E.isUnmounted||y()},J)});return}}let pt=g,ht;Yi(E,!1),g?(g.el=it.el,X(E,g,rt)):g=it,O&&Vo(O),(ht=g.props&&g.props.onVnodeBeforeUpdate)&&zn(ht,at,g,it),Yi(E,!0);const bt=ku(E),It=E.subTree;E.subTree=bt,v(It,bt,d(It.el),L(It),E,J,Z),g.el=bt.el,pt===null&&Sg(E,bt.el),j&&sn(j,J),(ht=g.props&&g.props.onVnodeUpdated)&&sn(()=>zn(ht,at,g,it),J)}else{let g;const{el:O,props:j}=P,{bm:at,m:it,parent:pt,root:ht,type:bt}=E,It=Ur(P);Yi(E,!1),at&&Vo(at),!It&&(g=j&&j.onVnodeBeforeMount)&&zn(g,pt,P),Yi(E,!0);{ht.ce&&ht.ce._hasShadowRoot()&&ht.ce._injectChildStyle(bt,E.parent?E.parent.type:void 0);const yt=E.subTree=ku(E);v(null,yt,F,b,E,J,Z),P.el=yt.el}if(it&&sn(it,J),!It&&(g=j&&j.onVnodeMounted)){const yt=P;sn(()=>zn(g,pt,yt),J)}(P.shapeFlag&256||pt&&Ur(pt.vnode)&&pt.vnode.shapeFlag&256)&&E.a&&sn(E.a,J),E.isMounted=!0,P=F=b=null}};E.scope.on();const Y=E.effect=new qf(ot);E.scope.off();const y=E.update=Y.run.bind(Y),x=E.job=Y.runIfDirty.bind(Y);x.i=E,x.id=E.uid,Y.scheduler=()=>Zc(x),Yi(E,!0),y()},X=(E,P,F)=>{P.component=E;const b=E.vnode.props;E.vnode=P,E.next=null,Eg(E,P.props,b,F),Cg(E,P.children,F),Yn(),hh(E),jn()},k=(E,P,F,b,J,Z,rt,ot,Y=!1)=>{const y=E&&E.children,x=E?E.shapeFlag:0,g=P.children,{patchFlag:O,shapeFlag:j}=P;if(O>0){if(O&128){U(y,g,F,b,J,Z,rt,ot,Y);return}else if(O&256){vt(y,g,F,b,J,Z,rt,ot,Y);return}}j&8?(x&16&&_t(y,J,Z),g!==y&&u(F,g)):x&16?j&16?U(y,g,F,b,J,Z,rt,ot,Y):_t(y,J,Z,!0):(x&8&&u(F,""),j&16&&H(g,F,b,J,Z,rt,ot,Y))},vt=(E,P,F,b,J,Z,rt,ot,Y)=>{E=E||as,P=P||as;const y=E.length,x=P.length,g=Math.min(y,x);let O;for(O=0;O<g;O++){const j=P[O]=Y?di(P[O]):Hn(P[O]);v(E[O],j,F,null,J,Z,rt,ot,Y)}y>x?_t(E,J,Z,!0,!1,g):H(P,F,b,J,Z,rt,ot,Y,g)},U=(E,P,F,b,J,Z,rt,ot,Y)=>{let y=0;const x=P.length;let g=E.length-1,O=x-1;for(;y<=g&&y<=O;){const j=E[y],at=P[y]=Y?di(P[y]):Hn(P[y]);if(hr(j,at))v(j,at,F,null,J,Z,rt,ot,Y);else break;y++}for(;y<=g&&y<=O;){const j=E[g],at=P[O]=Y?di(P[O]):Hn(P[O]);if(hr(j,at))v(j,at,F,null,J,Z,rt,ot,Y);else break;g--,O--}if(y>g){if(y<=O){const j=O+1,at=j<x?P[j].el:b;for(;y<=O;)v(null,P[y]=Y?di(P[y]):Hn(P[y]),F,at,J,Z,rt,ot,Y),y++}}else if(y>O)for(;y<=g;)gt(E[y],J,Z,!0),y++;else{const j=y,at=y,it=new Map;for(y=at;y<=O;y++){const Lt=P[y]=Y?di(P[y]):Hn(P[y]);Lt.key!=null&&it.set(Lt.key,y)}let pt,ht=0;const bt=O-at+1;let It=!1,yt=0;const Tt=new Array(bt);for(y=0;y<bt;y++)Tt[y]=0;for(y=j;y<=g;y++){const Lt=E[y];if(ht>=bt){gt(Lt,J,Z,!0);continue}let St;if(Lt.key!=null)St=it.get(Lt.key);else for(pt=at;pt<=O;pt++)if(Tt[pt-at]===0&&hr(Lt,P[pt])){St=pt;break}St===void 0?gt(Lt,J,Z,!0):(Tt[St-at]=y+1,St>=yt?yt=St:It=!0,v(Lt,P[St],F,null,J,Z,rt,ot,Y),ht++)}const Ot=It?Lg(Tt):as;for(pt=Ot.length-1,y=bt-1;y>=0;y--){const Lt=at+y,St=P[Lt],Nt=P[Lt+1],Ut=Lt+1<x?Nt.el||Hl(Nt):b;Tt[y]===0?v(null,St,F,Ut,J,Z,rt,ot,Y):It&&(pt<0||y!==Ot[pt]?D(St,F,Ut,2):pt--)}}},D=(E,P,F,b,J=null)=>{const{el:Z,type:rt,transition:ot,children:Y,shapeFlag:y}=E;if(y&6){D(E.component.subTree,P,F,b);return}if(y&128){E.suspense.move(P,F,b);return}if(y&64){rt.move(E,P,F,st);return}if(rt===Fe){i(Z,P,F);for(let g=0;g<Y.length;g++)D(Y[g],P,F,b);i(E.anchor,P,F);return}if(rt===Go){A(E,P,F);return}if(b!==2&&y&1&&ot)if(b===0)ot.persisted&&!Z[Va]?i(Z,P,F):(ot.beforeEnter(Z),i(Z,P,F),sn(()=>ot.enter(Z),J));else{const{leave:g,delayLeave:O,afterLeave:j}=ot,at=()=>{E.ctx.isUnmounted?s(Z):i(Z,P,F)},it=()=>{const pt=Z._isLeaving||!!Z[Va];Z._isLeaving&&Z[Va](!0),ot.persisted&&!pt?at():g(Z,()=>{at(),j&&j()})};O?O(Z,at,it):it()}else i(Z,P,F)},gt=(E,P,F,b=!1,J=!1)=>{const{type:Z,props:rt,ref:ot,children:Y,dynamicChildren:y,shapeFlag:x,patchFlag:g,dirs:O,cacheIndex:j,memo:at}=E;if((g===-2||y&&y.hasOnce)&&(J=!1),ot!=null&&(Yn(),Ir(ot,null,F,E,!0),jn()),j!=null&&(!E.ctx||E.ctx===P)&&(P.renderCache[j]=void 0),x&256){P.ctx.deactivate(E);return}const it=x&1&&O,pt=!Ur(E);let ht;if(pt&&(ht=rt&&rt.onVnodeBeforeUnmount)&&zn(ht,P,E),x&6)dt(E.component,F,b);else{if(x&128){E.suspense.unmount(F,b);return}it&&qi(E,null,P,"beforeUnmount"),x&64?E.type.remove(E,P,F,st,b):y&&!y.hasOnce&&(Z!==Fe||g>0&&g&64)?_t(y,P,F,!1,!0):(Z===Fe&&g&384||!J&&x&16)&&_t(Y,P,F),b&&wt(E)}const bt=at!=null&&j==null;(pt&&(ht=rt&&rt.onVnodeUnmounted)||it||bt)&&sn(()=>{ht&&zn(ht,P,E),it&&qi(E,null,P,"unmounted"),bt&&(E.el=null)},F)},wt=E=>{const{type:P,el:F,anchor:b,transition:J}=E,Z=P===Fe;if(Z&&!J){K(F,b);return}if(P===Go){S(E),J&&!J.persisted&&J.afterLeave&&J.afterLeave();return}const rt=Z?Fl(E):E,ot=()=>{Z?d(F)&&K(F,b):s(F),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(rt&&rt.shapeFlag&1&&J&&!J.persisted){const{leave:Y,delayLeave:y}=J,x=rt.el,g=()=>Y(x,ot);y?y(x,ot,g):g()}else ot()},K=(E,P)=>{let F;for(;E!==P;)F=f(E),s(E),E=F;s(P)},dt=(E,P,F)=>{const{bum:b,scope:J,job:Z,subTree:rt,um:ot,m:Y,a:y}=E;Gu(Y),Gu(y),b&&Vo(b),J.stop(),Z?(Z.flags|=8,gt(rt,E,P,F)):E.vnode.el&&rt&&(rt.transition=E.vnode.transition,gt(rt,E,P,F)),ot&&sn(ot,P),sn(()=>{E.isUnmounted=!0},P)},_t=(E,P,F,b=!1,J=!1,Z=0)=>{for(let rt=Z;rt<E.length;rt++)gt(E[rt],P,F,b,J)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const P=f(E.anchor||E.el),F=P&&P[$m];return F?f(F):P},tt=(E,P,F)=>{const b=E&&P._vnode?void 0:E&&E.component?E.component.uid:Bg();Hm(()=>{E==null?P._vnode&&gt(P._vnode,null,null,!0):v(P._vnode||null,E,P,null,null,null,F),P._vnode=E},b)},st={p:v,um:gt,m:D,r:wt,mt:Q,mc:H,pc:k,pbc:T,n:L,o:n};return{render:tt,hydrate:void 0,createApp:mg(tt)}}function Ga({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Yi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Dg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Bh(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Bh(o,a)),a.type===Ea&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function zh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zh(t)}function Gu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Hl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Hl(t.subTree):null}const kh=n=>n.__isSuspense;function Ig(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):Vm(n)}const Fe=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Go=Symbol.for("v-stc"),hs=[];let fn=null;function Ht(n=!1){hs.push(fn=n?null:[])}function Vh(){hs.pop(),fn=hs[hs.length-1]||null}let Vr=1;function sa(n,t=!1){Vr+=n,n<0&&fn&&t&&(fn.hasOnce=!0)}function Hh(n){return n.dynamicChildren=Vr>0?fn||as:null,Vh(),Vr>0&&fn&&fn.push(n),n}function Wt(n,t,e,i,s,r){return Hh(M(n,t,e,i,s,r,!0))}function eu(n,t,e,i,s){return Hh(Ue(n,t,e,i,s,!0))}function Hr(n){return n?n.__v_isVNode===!0:!1}function hr(n,t){return n.type===t.type&&n.key===t.key}const Gh=({key:n})=>n??null,Wo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||We(n)||Yt(n)?{i:dn,r:n,k:t,f:!!e}:n:null);function M(n,t=null,e=null,i=0,s=null,r=n===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Gh(t),ref:t&&Wo(t),scopeId:gh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(ra(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),Vr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Ue=Ug;function Ug(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===og)&&(n=On),Hr(n)){const a=Zs(n,t,!0);return e&&ra(a,e),Vr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ng(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=ui(a)),ue(l)&&(jc(l)&&!Gt(l)&&(l=Be({},l)),t.style=Ie(l))}const o=be(n)?1:kh(n)?128:Ma(n)?64:ue(n)?4:Yt(n)?2:0;return M(n,t,e,i,s,o,r,!0)}function Ng(n){return n?jc(n)||Lh(n)?Be({},n):n:null}function Zs(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Og(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Gh(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Wo(t)):[r,Wo(t)]:Wo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Fe?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zs(n.ssContent),ssFallback:n.ssFallback&&Zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ea(u,l.clone(u)),u}function kt(n=" ",t=0){return Ue(Ea,null,n,t)}function Gr(n,t){const e=Ue(Go,null,n);return e.staticCount=t,e}function Re(n="",t=!1){return t?(Ht(),eu(On,null,n)):Ue(On,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Ue(On):Gt(n)?Ue(Fe,null,n.slice()):Hr(n)?di(n):Ue(Ea,null,String(n))}function di(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zs(n)}function ra(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ra(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=dn:s===3&&dn&&(dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Yt(t)){if(i&65){ra(n,{default:t});return}t={default:t,_ctx:dn},e=32}else t=String(t),i&64?(e=16,t=[kt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Og(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ui([t.class,i.class]));else if(s==="style")t.style=Ie([t.style,i.style]);else if(ha(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!pa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function zn(n,t,e,i=null){Nn(n,t,7,[e,i])}const Fg=wh();let Wh=0;function Bg(){return Wh}function zg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Fg,r={uid:Wh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uh(i,s),emitsOptions:Ah(i,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=_g.bind(null,r),n.ce&&n.ce(r),r}let Ge=null;const kg=()=>Ge||dn;let oa,Wr;{const n=va(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oa=t("__VUE_INSTANCE_SETTERS__",e=>Ge=e),Wr=t("__VUE_SSR_SETTERS__",e=>Xr=e)}const Jr=n=>{const t=Ge;return oa(n),n.scope.on(),()=>{n.scope.off(),oa(t)}},Wu=()=>{Ge&&Ge.scope.off(),oa(null)};function Xh(n){return n.vnode.shapeFlag&4}let Xr=!1;function Vg(n,t=!1,e=!1){t&&Wr(t);const{props:i,children:s}=n.vnode,r=Xh(n);bg(n,i,r,t),Ag(n,s,e||t);const o=r?Hg(n,t):void 0;return t&&Wr(!1),o}function Hg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lg);const{setup:i}=e;if(i){Yn();const s=n.setupContext=i.length>1?Wg(n):null,r=Jr(n),o=jr(i,n,0,[n.props,s]),a=kf(o);if(jn(),r(),(a||n.sp)&&!Ur(n)&&Mh(n),a){if(o.then(Wu,Wu),t)return o.then(l=>{Wr(!0);try{Xu(n,l,t)}finally{Wr(!1)}}).catch(l=>{ya(l,n,0)});n.asyncDep=o}else Xu(n,o)}else $h(n)}function Xu(n,t,e){Yt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ue(t)&&(n.setupState=uh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||$n);{const s=Jr(n);Yn();try{cg(n)}finally{jn(),s()}}}const Gg={get(n,t){return He(n,"get",""),n[t]}};function Wg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Gg),slots:n.slots,emit:n.emit,expose:t}}function Ta(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(uh(Dm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Nr)return Nr[e](n)},has(t,e){return e in t||e in Nr}})):n.proxy}function Xg(n,t=!0){return Yt(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return Yt(n)&&"__vccOpts"in n}const Ze=(n,t)=>Om(n,t,Xr);function qh(n,t,e){try{sa(-1);const i=arguments.length;return i===2?ue(t)&&!Gt(t)?Hr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Hr(e)&&(e=[e]),Ue(n,t,e))}finally{sa(1)}}const qg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{Gl=$u.createPolicy("vue",{createHTML:n=>n})}catch{}const Yh=Gl?n=>Gl.createHTML(n):n=>n,Yg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",ci=typeof document<"u"?document:null,qu=ci&&ci.createElement("template"),Kg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ci.createElementNS(Yg,n):t==="mathml"?ci.createElementNS(jg,n):e?ci.createElement(n,{is:e}):ci.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ci.createTextNode(n),createComment:n=>ci.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ci.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=Yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Zg=Symbol("_vtc");function Jg(n,t,e){const i=n[Zg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Yu=Symbol("_vod"),Qg=Symbol("_vsh"),t_=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function n_(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Tr(i,a,"")}else for(const o in t)e[o]==null&&Tr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?s_(n,o,!be(t)&&t?t[o]:void 0,a)||Tr(i,o,a):Tr(i,o,"")}}else if(s){if(t!==e){const o=i[t_];o&&(e+=";"+o),i.cssText=e,r=e_.test(e)}}else t&&n.removeAttribute("style");Yu in n&&((!s||t!==e)&&(n[Yu]=r?i.display:""),n[Qg]&&(i.display="none"))}const ao=/\s*!important$/;function Tr(n,t,e){if(Gt(e))e.forEach(i=>Tr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))ao.test(e)?n.setProperty(t,e.replace(ao,""),"important"):n.setProperty(t,e);else{const i=i_(n,t);ao.test(e)?n.setProperty(_s(i),e.replace(ao,""),"important"):n[i]=e}}const ju=["Webkit","Moz","ms"],Wa={};function i_(n,t){const e=Wa[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return Wa[t]=i;i=ga(i);for(let s=0;s<ju.length;s++){const r=ju[s]+i;if(r in n)return Wa[t]=r}return t}function s_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const Ku="http://www.w3.org/1999/xlink";function Zu(n,t,e,i,s,r=um(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ku,t.slice(6,t.length)):n.setAttributeNS(Ku,t,e):e==null||r&&!Wf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":qn(e)?String(e):e)}function Ju(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Yh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Wf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function pi(n,t,e,i){n.addEventListener(t,e,i)}function r_(n,t,e,i){n.removeEventListener(t,e,i)}const Qu=Symbol("_vei");function o_(n,t,e,i,s=null){const r=n[Qu]||(n[Qu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=c_(t);if(i){const c=r[t]=f_(i,s);pi(n,a,c,l)}else o&&(r_(n,a,o,l),r[t]=void 0)}}const a_=/(Once|Passive|Capture)$/,l_=/^on:?(?:Once|Passive|Capture)$/;function c_(n){let t,e;for(;(e=n.match(a_))&&!l_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):_s(n.slice(2)),t]}let Xa=0;const u_=Promise.resolve(),d_=()=>Xa||(u_.then(()=>Xa=0),Xa=Date.now());function f_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Gt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Nn(c,t,5,a)}}else Nn(s,t,5,[i])};return e.value=n,e.attached=d_(),e}const td=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Jg(n,i,o):t==="style"?n_(n,e,i):ha(t)?pa(t)||o_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):p_(n,t,i,o))?(Ju(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zu(n,t,i,o,r,t!=="value")):n._isVueCE&&(m_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?Ju(n,Qe(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Zu(n,t,i,o))};function p_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&td(t)&&Yt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return td(t)&&be(e)?!1:t in n}function m_(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(s=>Qe(s)===i):Object.keys(e).some(s=>Qe(s)===i)}const Hi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Vo(t,e):t};function g_(n){n.target.composing=!0}function ed(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),lo=Symbol("_initialValue");function $a(n,t,e){return t&&(n=n.trim()),e&&(n=_a(n)),n}const ei={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[lo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[lo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[hn]=Hi(s);const r=i||s.props&&s.props.type==="number";pi(n,t?"change":"input",o=>{o.target.composing||n[hn]($a(n.value,e,r))}),(e||r)&&pi(n,"change",()=>{n.value=$a(n.value,e,r)}),t||(pi(n,"compositionstart",g_),pi(n,"compositionend",ed),pi(n,"change",ed))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[lo];delete n[lo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[hn]($a(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[hn]=Hi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?_a(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},wr={deep:!0,created(n,t,e){n[hn]=Hi(e),pi(n,"change",()=>{const i=n._modelValue,s=Js(n),r=n.checked,o=n[hn];if(Gt(i)){const a=Hc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(xi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(jh(n,r))})},mounted:nd,beforeUpdate(n,t,e){n[hn]=Hi(e),nd(n,t,e)}};function nd(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Gt(t))s=Hc(t,i.props.value)>-1;else if(xi(t))s=t.has(i.props.value);else{if(t===e)return;s=Un(t,jh(n,!0))}n.checked!==s&&(n.checked=s)}const id={created(n,{value:t},e){n.checked=Un(t,e.props.value),n[hn]=Hi(e),pi(n,"change",()=>{n[hn](Js(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[hn]=Hi(i),t!==e&&(n.checked=Un(t,i.props.value))}},Wl={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,pi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?_a(Js(l)):Js(l)),r=n.multiple,o=r?xi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Gt(o)?s.slice():s:o];try{n[hn](o)}finally{Kc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[hn]=Hi(i)},mounted(n,{value:t}){sd(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[hn]=Hi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!__(t,e[1],e[0]))&&sd(n,t)}};function __(n,t,e){if(!e||Gt(n))return Un(n,t);if(xi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function sd(n,t){const e=n.multiple,i=Gt(t);if(!(e&&!i&&!xi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Js(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Hc(t,a)>-1}else o.selected=t.has(a);else if(Un(Js(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Js(n){return"_value"in n?n._value:n.value}function jh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const v_=["ctrl","shift","alt","meta"],x_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>v_.some(e=>n[`${e}Key`]&&!t.includes(e))},is=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=x_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},y_=Be({patchProp:h_},Kg);let rd;function M_(){return rd||(rd=Rg(y_))}const S_=(...n)=>{const t=M_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=E_(i);if(!s)return;const r=t._component;!Yt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,b_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function b_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function E_(n){return be(n)?document.querySelector(n):n}const Kh=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},T_={};function w_(n,t){const e=bh("router-view");return Ht(),eu(e)}const A_=Kh(T_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Vs=typeof document<"u";function Zh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function C_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Zh(n.default)}const oe=Object.assign;function qa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Fn(s)?s.map(n):n(s)}return e}const Or=()=>{},Fn=Array.isArray;function od(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Jh=/#/g,R_=/&/g,P_=/\//g,D_=/=/g,L_=/\?/g,Qh=/\+/g,I_=/%5B/g,U_=/%5D/g,tp=/%5E/g,N_=/%60/g,ep=/%7B/g,O_=/%7C/g,np=/%7D/g,F_=/%20/g;function nu(n){return n==null?"":encodeURI(""+n).replace(O_,"|").replace(I_,"[").replace(U_,"]")}function B_(n){return nu(n).replace(ep,"{").replace(np,"}").replace(tp,"^")}function Xl(n){return nu(n).replace(Qh,"%2B").replace(F_,"+").replace(Jh,"%23").replace(R_,"%26").replace(N_,"`").replace(ep,"{").replace(np,"}").replace(tp,"^")}function z_(n){return Xl(n).replace(D_,"%3D")}function k_(n){return nu(n).replace(Jh,"%23").replace(L_,"%3F")}function V_(n){return k_(n).replace(P_,"%2F")}function $r(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const H_=/\/$/,G_=n=>n.replace(H_,"");function Ya(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=q_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:$r(o)}}function W_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ad(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function X_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Qs(t.matched[i],e.matched[s])&&ip(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Qs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ip(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return Fn(n)?ld(n,t):Fn(t)?ld(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function ld(n,t){return Fn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function q_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let $l=function(n){return n.pop="pop",n.push="push",n}({}),ja=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Y_(n){if(!n)if(Vs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),G_(n)}const j_=/^[^#]+#/;function K_(n,t){return n.replace(j_,"#")+t}function Z_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function J_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Z_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cd(n,t){return(history.state?history.state.position-t:-1)+n}const ql=new Map;function Q_(n,t){ql.set(n,t)}function tv(n){const t=ql.get(n);return ql.delete(n),t}function ev(n){return typeof n=="string"||n&&typeof n=="object"}function sp(n){return typeof n=="string"||typeof n=="symbol"}let Se=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const rp=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function tr(n,t){return oe(new Error,{type:n,[rp]:!0},t)}function ni(n,t){return n instanceof Error&&rp in n&&(t==null||!!(n.type&t))}const nv=["params","query","hash"];function iv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of nv)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function sv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Qh," "),r=s.indexOf("="),o=$r(r<0?s:s.slice(0,r)),a=r<0?null:$r(s.slice(r+1));if(o in t){let l=t[o];Fn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function ud(n){let t="";for(let e in n){const i=n[e];if(e=z_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Fn(i)?i.map(s=>s&&Xl(s)):[i&&Xl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function rv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const ov=Symbol(""),dd=Symbol(""),Aa=Symbol(""),iu=Symbol(""),Yl=Symbol("");function pr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Li(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(tr(Se.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):ev(f)?l(tr(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Ka(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Zh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Li(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=C_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Li(f,e,i,o,a,s)()}))}}return r}function av(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Qs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Qs(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lv=()=>location.protocol+"//"+location.host;function op(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ad(a,"")}return ad(e,n)+i+s}function cv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=op(n,location),_=e.value,v=t.value;let m=0;if(f){if(e.value=h,t.value=f,o&&o===_){o=null;return}m=v?f.position-v.position:0}else i(h);s.forEach(p=>{p(e.value,_,{delta:m,type:$l.pop,direction:m?m>0?ja.forward:ja.back:ja.unknown})})};function l(){o=e.value}function c(f){s.push(f);const h=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(oe({},f.state,{scroll:wa()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function fd(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?wa():null}}function uv(n){const{history:t,location:e}=window,i={value:op(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:lv()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),e[u?"replace":"assign"](f)}}function o(l,c){r(l,oe({},t.state,fd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=oe({},s.value,t.state,{forward:l,scroll:wa()});r(u.current,u,!0),r(l,oe({},fd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function dv(n){n=Y_(n);const t=uv(n),e=cv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=oe({location:"",base:n,go:i,createHref:K_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function fv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),dv(n)}let ls=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ae=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ae||{});const hv={type:ls.Static,value:""},pv=/[a-zA-Z0-9_]/;function mv(n){if(!n)return[[]];if(n==="/")return[[hv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=Ae.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ae.Static?r.push({type:ls.Static,value:c}):e===Ae.Param||e===Ae.ParamRegExp||e===Ae.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:ls.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ae.ParamRegExp){i=e,e=Ae.EscapeNext;continue}switch(e){case Ae.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ae.Param):f();break;case Ae.EscapeNext:f(),e=i;break;case Ae.Param:l==="("?e=Ae.ParamRegExp:pv.test(l)?f():(d(),e=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ae.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ae.ParamRegExpEnd:u+=l;break;case Ae.ParamRegExpEnd:d(),e=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const hd="[^/]+?",gv={sensitive:!1,strict:!1,start:!0,end:!0};var Ye=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ye||{});const _v=/[.+*?^${}()[\]/\\]/g;function vv(n,t){const e=oe({},gv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Ye.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Ye.Segment+(e.sensitive?Ye.BonusCaseSensitive:0);if(f.type===ls.Static)d||(s+="/"),s+=f.value.replace(_v,"\\$&"),h+=Ye.Static;else if(f.type===ls.Param){const{value:_,repeatable:v,optional:m,regexp:p}=f;r.push({name:_,repeatable:v,optional:m});const R=p||hd;if(R!==hd){h+=Ye.BonusCustomRegExp;try{`${R}`}catch(S){throw new Error(`Invalid custom RegExp for param "${_}" (${R}): `+S.message)}}let A=v?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;d||(A=m&&c.length<2?`(?:/${A})`:"/"+A),m&&(A+="?"),s+=A,h+=Ye.Dynamic,m&&(h+=Ye.BonusOptional),v&&(h+=Ye.BonusRepeatable),R===".*"&&(h+=Ye.BonusWildcard)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Ye.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",_=r[f-1];d[_.name]=h&&_.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===ls.Static)u+=h.value;else if(h.type===ls.Param){const{value:_,repeatable:v,optional:m}=h,p=_ in c?c[_]:"";if(Fn(p)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const R=Fn(p)?p.join("/"):p;if(!R)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=R}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function xv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ye.Static+Ye.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ye.Static+Ye.Segment?1:-1:0}function ap(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=xv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(pd(i))return 1;if(pd(s))return-1}return s.length-i.length}function pd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const yv={strict:!1,end:!0,sensitive:!1};function Mv(n,t,e){const i=vv(mv(n.path),e),s=oe(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Sv(n,t){const e=[],i=new Map;t=od(yv,t);function s(d){return i.get(d)}function r(d,f,h){const _=!h,v=gd(d);v.aliasOf=h&&h.record;const m=od(t,d),p=[v];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const B of S)p.push(gd(oe({},v,{components:h?h.record.components:v.components,path:B,aliasOf:h?h.record:v})))}let R,A;for(const S of p){const{path:B}=S;if(f&&B[0]!=="/"){const z=f.record.path,I=z[z.length-1]==="/"?"":"/";S.path=f.record.path+(B&&I+B)}if(R=Mv(S,f,m),h?h.alias.push(R):(A=A||R,A!==R&&A.alias.push(R),_&&d.name&&!_d(R)&&o(d.name)),lp(R)&&l(R),v.children){const z=v.children;for(let I=0;I<z.length;I++)r(z[I],R,h&&h.children[I])}h=h||R}return A?()=>{o(A)}:Or}function o(d){if(sp(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Tv(d,e);e.splice(f,0,d),d.record.name&&!_d(d)&&i.set(d.record.name,d)}function c(d,f){let h,_={},v,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw tr(Se.MATCHER_NOT_FOUND,{location:d});m=h.record.name,_=oe(md(f.params,h.keys.filter(A=>!A.optional).concat(h.parent?h.parent.keys.filter(A=>A.optional):[]).map(A=>A.name)),d.params&&md(d.params,h.keys.map(A=>A.name))),v=h.stringify(_)}else if(d.path!=null)v=d.path,h=e.find(A=>A.re.test(v)),h&&(_=h.parse(v),m=h.record.name);else{if(h=f.name?i.get(f.name):e.find(A=>A.re.test(f.path)),!h)throw tr(Se.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,_=oe({},f.params,d.params),v=h.stringify(_)}const p=[];let R=h;for(;R;)p.unshift(R.record),R=R.parent;return{name:m,path:v,params:_,matched:p,meta:Ev(p)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function md(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function gd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:bv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function _d(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ev(n){return n.reduce((t,e)=>oe(t,e.meta),{})}function Tv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;ap(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(lp(t)&&ap(n,t)===0)return t}function lp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function vd(n){const t=Dn(Aa),e=Dn(iu),i=Ze(()=>{const l=Ee(n.to);return t.resolve(l)}),s=Ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(Qs.bind(null,u));if(f>-1)return f;const h=xd(l[c-2]);return c>1&&xd(u)===h&&d[d.length-1].path!==h?d.findIndex(Qs.bind(null,l[c-2])):f}),r=Ze(()=>s.value>-1&&Dv(e.params,i.value.params)),o=Ze(()=>s.value>-1&&s.value===e.matched.length-1&&ip(e.params,i.value.params));function a(l={}){if(Pv(l)){const c=t[Ee(n.replace)?"replace":"push"](Ee(n.to)).catch(Or);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Av(n){return n.length===1?n[0]:n}const Cv=Xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vd,setup(n,{slots:t}){const e=Oi(vd(n)),{options:i}=Dn(Aa),s=Ze(()=>({[yd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[yd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Av(t.default(e));return n.custom?r:qh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Rv=Cv;function Pv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Dv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Fn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function xd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yd=(n,t,e)=>n??t??e,Lv=Xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Dn(Yl),s=Ze(()=>n.route||i.value),r=Dn(dd,0),o=Ze(()=>{let c=Ee(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ze(()=>s.value.matched[o.value]);Ho(dd,Ze(()=>o.value+1)),Ho(ov,a),Ho(Yl,s);const l=ce();return fs(()=>[l.value,a.value,n.name],([c,u,d],[f,h,_])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Qs(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Md(e.default,{Component:f,route:c});const h=d.props[u],_=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=qh(f,oe({},_,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Md(e.default,{Component:m,route:c})||m}}});function Md(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Iv=Lv;function Uv(n){const t=Sv(n.routes,n),e=n.parseQuery||sv,i=n.stringifyQuery||ud,s=n.history,r=pr(),o=pr(),a=pr(),l=Lm(Ei);let c=Ei;Vs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,L=>""+L),d=qa.bind(null,V_),f=qa.bind(null,$r);function h(L,tt){let st,mt;return sp(L)?(st=t.getRecordMatcher(L),mt=tt):mt=L,t.addRoute(mt,st)}function _(L){const tt=t.getRecordMatcher(L);tt&&t.removeRoute(tt)}function v(){return t.getRoutes().map(L=>L.record)}function m(L){return!!t.getRecordMatcher(L)}function p(L,tt){if(tt=oe({},tt||l.value),typeof L=="string"){const b=Ya(e,L,tt.path),J=t.resolve({path:b.path},tt),Z=s.createHref(b.fullPath);return oe(b,J,{params:f(J.params),hash:$r(b.hash),redirectedFrom:void 0,href:Z})}let st;if(L.path!=null)st=oe({},L,{path:Ya(e,L.path,tt.path).path});else{const b=oe({},L.params);for(const J in b)b[J]==null&&delete b[J];st=oe({},L,{params:d(b)}),tt.params=d(tt.params)}const mt=t.resolve(st,tt),E=L.hash||"";mt.params=u(f(mt.params));const P=W_(i,oe({},L,{hash:B_(E),path:mt.path})),F=s.createHref(P);return oe({fullPath:P,hash:E,query:i===ud?rv(L.query):L.query||{}},mt,{redirectedFrom:void 0,href:F})}function R(L){return typeof L=="string"?Ya(e,L,l.value.path):oe({},L)}function A(L,tt){if(c!==L)return tr(Se.NAVIGATION_CANCELLED,{from:tt,to:L})}function S(L){return I(L)}function B(L){return S(oe(R(L),{replace:!0}))}function z(L,tt){const st=L.matched[L.matched.length-1];if(st&&st.redirect){const{redirect:mt}=st;let E=typeof mt=="function"?mt(L,tt):mt;return typeof E=="string"&&(E=E.includes("?")||E.includes("#")?E=R(E):{path:E},E.params={}),oe({query:L.query,hash:L.hash,params:E.path!=null?{}:L.params},E)}}function I(L,tt){const st=c=p(L),mt=l.value,E=L.state,P=L.force,F=L.replace===!0,b=z(st,mt);if(b)return I(oe(R(b),{state:typeof b=="object"?oe({},E,b.state):E,force:P,replace:F}),tt||st);const J=st;J.redirectedFrom=tt;let Z;return!P&&X_(i,mt,st)&&(Z=tr(Se.NAVIGATION_DUPLICATED,{to:J,from:mt}),D(mt,mt,!0,!1)),(Z?Promise.resolve(Z):T(J,mt)).catch(rt=>ni(rt)?ni(rt,Se.NAVIGATION_GUARD_REDIRECT)?rt:U(rt):k(rt,J,mt)).then(rt=>{if(rt){if(ni(rt,Se.NAVIGATION_GUARD_REDIRECT))return I(oe({replace:F},R(rt.to),{state:typeof rt.to=="object"?oe({},E,rt.to.state):E,force:P}),tt||J)}else rt=ut(J,mt,!0,F,E);return N(J,mt,rt),rt})}function H(L,tt){const st=A(L,tt);return st?Promise.reject(st):Promise.resolve()}function C(L){const tt=K.values().next().value;return tt&&typeof tt.runWithContext=="function"?tt.runWithContext(L):L()}function T(L,tt){let st;const[mt,E,P]=av(L,tt);st=Ka(mt.reverse(),"beforeRouteLeave",L,tt);for(const b of mt)b.leaveGuards.forEach(J=>{st.push(Li(J,L,tt))});const F=H.bind(null,L,tt);return st.push(F),_t(st).then(()=>{st=[];for(const b of r.list())st.push(Li(b,L,tt));return st.push(F),_t(st)}).then(()=>{st=Ka(E,"beforeRouteUpdate",L,tt);for(const b of E)b.updateGuards.forEach(J=>{st.push(Li(J,L,tt))});return st.push(F),_t(st)}).then(()=>{st=[];for(const b of P)if(b.beforeEnter)if(Fn(b.beforeEnter))for(const J of b.beforeEnter)st.push(Li(J,L,tt));else st.push(Li(b.beforeEnter,L,tt));return st.push(F),_t(st)}).then(()=>(L.matched.forEach(b=>b.enterCallbacks={}),st=Ka(P,"beforeRouteEnter",L,tt,C),st.push(F),_t(st))).then(()=>{st=[];for(const b of o.list())st.push(Li(b,L,tt));return st.push(F),_t(st)}).catch(b=>ni(b,Se.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function N(L,tt,st){a.list().forEach(mt=>C(()=>mt(L,tt,st)))}function ut(L,tt,st,mt,E){const P=A(L,tt);if(P)return P;const F=tt===Ei,b=Vs?history.state:{};st&&(mt||F?s.replace(L.fullPath,oe({scroll:F&&b&&b.scroll},E)):s.push(L.fullPath,E)),l.value=L,D(L,tt,st,F),U()}let nt;function Q(){nt||(nt=s.listen((L,tt,st)=>{if(!dt.listening)return;const mt=p(L),E=z(mt,dt.currentRoute.value);if(E){I(oe(E,{replace:!0,force:!0}),mt).catch(Or);return}c=mt;const P=l.value;Vs&&Q_(cd(P.fullPath,st.delta),wa()),T(mt,P).catch(F=>ni(F,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?F:ni(F,Se.NAVIGATION_GUARD_REDIRECT)?(I(oe(R(F.to),{force:!0}),mt).then(b=>{ni(b,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!st.delta&&st.type===$l.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):(st.delta&&s.go(-st.delta,!1),k(F,mt,P))).then(F=>{F=F||ut(mt,P,!1),F&&(st.delta&&!ni(F,Se.NAVIGATION_CANCELLED)?s.go(-st.delta,!1):st.type===$l.pop&&ni(F,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),N(mt,P,F)}).catch(Or)}))}let W=pr(),et=pr(),X;function k(L,tt,st){U(L);const mt=et.list();return mt.length?mt.forEach(E=>E(L,tt,st)):console.error(L),Promise.reject(L)}function vt(){return X&&l.value!==Ei?Promise.resolve():new Promise((L,tt)=>{W.add([L,tt])})}function U(L){return X||(X=!L,Q(),W.list().forEach(([tt,st])=>L?st(L):tt()),W.reset()),L}function D(L,tt,st,mt){const{scrollBehavior:E}=n;if(!Vs||!E)return Promise.resolve();const P=!st&&tv(cd(L.fullPath,0))||(mt||!st)&&history.state&&history.state.scroll||null;return Kc().then(()=>E(L,tt,P)).then(F=>F&&J_(F)).catch(F=>k(F,L,tt))}const gt=L=>s.go(L);let wt;const K=new Set,dt={currentRoute:l,listening:!0,addRoute:h,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:n,push:S,replace:B,go:gt,back:()=>gt(-1),forward:()=>gt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:et.add,isReady:vt,install(L){L.component("RouterLink",Rv),L.component("RouterView",Iv),L.config.globalProperties.$router=dt,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(l)}),Vs&&!wt&&l.value===Ei&&(wt=!0,S(s.location).catch(mt=>{}));const tt={};for(const mt in Ei)Object.defineProperty(tt,mt,{get:()=>l.value[mt],enumerable:!0});L.provide(Aa,dt),L.provide(iu,lh(tt)),L.provide(Yl,l);const st=L.unmount;K.add(L),L.unmount=function(){K.delete(L),K.size<1&&(c=Ei,nt&&nt(),nt=null,l.value=Ei,wt=!1,X=!1),st()}}};function _t(L){return L.reduce((tt,st)=>tt.then(()=>C(st)),Promise.resolve())}return dt}function Nv(){return Dn(Aa)}function Ov(n){return Dn(iu)}var su={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var U=new OffscreenCanvas(1,1),D=U.getContext("2d");D.fillRect(0,0,1,1);var gt=U.transferToImageBitmap();D.createPattern(gt,"no-repeat")}catch{return!1}return!0}();function l(){}function c(U){var D=e.exports.Promise,gt=D!==void 0?D:t.Promise;return typeof gt=="function"?new gt(U):(U(l,l),null)}var u=function(U,D){return{transform:function(gt){if(U)return gt;if(D.has(gt))return D.get(gt);var wt=new OffscreenCanvas(gt.width,gt.height),K=wt.getContext("2d");return K.drawImage(gt,0,0),D.set(gt,wt),wt},clear:function(){D.clear()}}}(a,new Map),d=function(){var U=Math.floor(16.666666666666668),D,gt,wt={},K=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(D=function(dt){var _t=Math.random();return wt[_t]=requestAnimationFrame(function L(tt){K===tt||K+U-1<tt?(K=tt,delete wt[_t],dt()):wt[_t]=requestAnimationFrame(L)}),_t},gt=function(dt){wt[dt]&&cancelAnimationFrame(wt[dt])}):(D=function(dt){return setTimeout(dt,U)},gt=function(dt){return clearTimeout(dt)}),{frame:D,cancel:gt}}(),f=function(){var U,D,gt={};function wt(K){function dt(_t,L){K.postMessage({options:_t||{},callback:L})}K.init=function(L){var tt=L.transferControlToOffscreen();K.postMessage({canvas:tt},[tt])},K.fire=function(L,tt,st){if(D)return dt(L,null),D;var mt=Math.random().toString(36).slice(2);return D=c(function(E){function P(F){F.data.callback===mt&&(delete gt[mt],K.removeEventListener("message",P),D=null,u.clear(),st(),E())}K.addEventListener("message",P),dt(L,mt),gt[mt]=P.bind(null,{data:{callback:mt}})}),D},K.reset=function(){K.postMessage({reset:!0});for(var L in gt)gt[L](),delete gt[L]}}return function(){if(U)return U;if(!i&&r){var K=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([K])))}catch(dt){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",dt),null}wt(U)}return U}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(U,D){return D?D(U):U}function v(U){return U!=null}function m(U,D,gt){return _(U&&v(U[D])?U[D]:h[D],gt)}function p(U){return U<0?0:Math.floor(U)}function R(U,D){return Math.floor(Math.random()*(D-U))+U}function A(U){return parseInt(U,16)}function S(U){return U.map(B)}function B(U){var D=String(U).replace(/[^0-9a-f]/gi,"");return D.length<6&&(D=D[0]+D[0]+D[1]+D[1]+D[2]+D[2]),{r:A(D.substring(0,2)),g:A(D.substring(2,4)),b:A(D.substring(4,6))}}function z(U){var D=m(U,"origin",Object);return D.x=m(D,"x",Number),D.y=m(D,"y",Number),D}function I(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function H(U){var D=U.getBoundingClientRect();U.width=D.width,U.height=D.height}function C(U){var D=document.createElement("canvas");return D.style.position="fixed",D.style.top="0px",D.style.left="0px",D.style.pointerEvents="none",D.style.zIndex=U,D}function T(U,D,gt,wt,K,dt,_t,L,tt){U.save(),U.translate(D,gt),U.rotate(dt),U.scale(wt,K),U.arc(0,0,1,_t,L,tt),U.restore()}function N(U){var D=U.angle*(Math.PI/180),gt=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-D+(.5*gt-Math.random()*gt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function ut(U,D){D.x+=Math.cos(D.angle2D)*D.velocity+D.drift,D.y+=Math.sin(D.angle2D)*D.velocity+D.gravity,D.velocity*=D.decay,D.flat?(D.wobble=0,D.wobbleX=D.x+10*D.scalar,D.wobbleY=D.y+10*D.scalar,D.tiltSin=0,D.tiltCos=0,D.random=1):(D.wobble+=D.wobbleSpeed,D.wobbleX=D.x+10*D.scalar*Math.cos(D.wobble),D.wobbleY=D.y+10*D.scalar*Math.sin(D.wobble),D.tiltAngle+=.1,D.tiltSin=Math.sin(D.tiltAngle),D.tiltCos=Math.cos(D.tiltAngle),D.random=Math.random()+2);var gt=D.tick++/D.totalTicks,wt=D.x+D.random*D.tiltCos,K=D.y+D.random*D.tiltSin,dt=D.wobbleX+D.random*D.tiltCos,_t=D.wobbleY+D.random*D.tiltSin;if(U.fillStyle="rgba("+D.color.r+", "+D.color.g+", "+D.color.b+", "+(1-gt)+")",U.beginPath(),o&&D.shape.type==="path"&&typeof D.shape.path=="string"&&Array.isArray(D.shape.matrix))U.fill(X(D.shape.path,D.shape.matrix,D.x,D.y,Math.abs(dt-wt)*.1,Math.abs(_t-K)*.1,Math.PI/10*D.wobble));else if(D.shape.type==="bitmap"){var L=Math.PI/10*D.wobble,tt=Math.abs(dt-wt)*.1,st=Math.abs(_t-K)*.1,mt=D.shape.bitmap.width*D.scalar,E=D.shape.bitmap.height*D.scalar,P=new DOMMatrix([Math.cos(L)*tt,Math.sin(L)*tt,-Math.sin(L)*st,Math.cos(L)*st,D.x,D.y]);P.multiplySelf(new DOMMatrix(D.shape.matrix));var F=U.createPattern(u.transform(D.shape.bitmap),"no-repeat");F.setTransform(P),U.globalAlpha=1-gt,U.fillStyle=F,U.fillRect(D.x-mt/2,D.y-E/2,mt,E),U.globalAlpha=1}else if(D.shape==="circle")U.ellipse?U.ellipse(D.x,D.y,Math.abs(dt-wt)*D.ovalScalar,Math.abs(_t-K)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI):T(U,D.x,D.y,Math.abs(dt-wt)*D.ovalScalar,Math.abs(_t-K)*D.ovalScalar,Math.PI/10*D.wobble,0,2*Math.PI);else if(D.shape==="star")for(var b=Math.PI/2*3,J=4*D.scalar,Z=8*D.scalar,rt=D.x,ot=D.y,Y=5,y=Math.PI/Y;Y--;)rt=D.x+Math.cos(b)*Z,ot=D.y+Math.sin(b)*Z,U.lineTo(rt,ot),b+=y,rt=D.x+Math.cos(b)*J,ot=D.y+Math.sin(b)*J,U.lineTo(rt,ot),b+=y;else U.moveTo(Math.floor(D.x),Math.floor(D.y)),U.lineTo(Math.floor(D.wobbleX),Math.floor(K)),U.lineTo(Math.floor(dt),Math.floor(_t)),U.lineTo(Math.floor(wt),Math.floor(D.wobbleY));return U.closePath(),U.fill(),D.tick<D.totalTicks}function nt(U,D,gt,wt,K){var dt=D.slice(),_t=U.getContext("2d"),L,tt,st=c(function(mt){function E(){L=tt=null,_t.clearRect(0,0,wt.width,wt.height),u.clear(),K(),mt()}function P(){i&&!(wt.width===s.width&&wt.height===s.height)&&(wt.width=U.width=s.width,wt.height=U.height=s.height),!wt.width&&!wt.height&&(gt(U),wt.width=U.width,wt.height=U.height),_t.clearRect(0,0,wt.width,wt.height),dt=dt.filter(function(F){return ut(_t,F)}),dt.length?L=d.frame(P):E()}L=d.frame(P),tt=E});return{addFettis:function(mt){return dt=dt.concat(mt),st},canvas:U,promise:st,reset:function(){L&&d.cancel(L),tt&&tt()}}}function Q(U,D){var gt=!U,wt=!!m(D||{},"resize"),K=!1,dt=m(D,"disableForReducedMotion",Boolean),_t=r&&!!m(D||{},"useWorker"),L=_t?f():null,tt=gt?I:H,st=U&&L?!!U.__confetti_initialized:!1,mt=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,E;function P(b,J,Z){for(var rt=m(b,"particleCount",p),ot=m(b,"angle",Number),Y=m(b,"spread",Number),y=m(b,"startVelocity",Number),x=m(b,"decay",Number),g=m(b,"gravity",Number),O=m(b,"drift",Number),j=m(b,"colors",S),at=m(b,"ticks",Number),it=m(b,"shapes"),pt=m(b,"scalar"),ht=!!m(b,"flat"),bt=z(b),It=rt,yt=[],Tt=U.width*bt.x,Ot=U.height*bt.y;It--;)yt.push(N({x:Tt,y:Ot,angle:ot,spread:Y,startVelocity:y,color:j[It%j.length],shape:it[R(0,it.length)],ticks:at,decay:x,gravity:g,drift:O,scalar:pt,flat:ht}));return E?E.addFettis(yt):(E=nt(U,yt,tt,J,Z),E.promise)}function F(b){var J=dt||m(b,"disableForReducedMotion",Boolean),Z=m(b,"zIndex",Number);if(J&&mt)return c(function(y){y()});gt&&E?U=E.canvas:gt&&!U&&(U=C(Z),document.body.appendChild(U)),wt&&!st&&tt(U);var rt={width:U.width,height:U.height};L&&!st&&L.init(U),st=!0,L&&(U.__confetti_initialized=!0);function ot(){if(L){var y={getBoundingClientRect:function(){if(!gt)return U.getBoundingClientRect()}};tt(y),L.postMessage({resize:{width:y.width,height:y.height}});return}rt.width=rt.height=null}function Y(){E=null,wt&&(K=!1,t.removeEventListener("resize",ot)),gt&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,st=!1)}return wt&&!K&&(K=!0,t.addEventListener("resize",ot,!1)),L?L.fire(b,rt,Y):P(b,rt,Y)}return F.reset=function(){L&&L.reset(),E&&E.reset()},F}var W;function et(){return W||(W=Q(null,{useWorker:!0,resize:!0})),W}function X(U,D,gt,wt,K,dt,_t){var L=new Path2D(U),tt=new Path2D;tt.addPath(L,new DOMMatrix(D));var st=new Path2D;return st.addPath(tt,new DOMMatrix([Math.cos(_t)*K,Math.sin(_t)*K,-Math.sin(_t)*dt,Math.cos(_t)*dt,gt,wt])),st}function k(U){if(!o)throw new Error("path confetti are not supported in this browser");var D,gt;typeof U=="string"?D=U:(D=U.path,gt=U.matrix);var wt=new Path2D(D),K=document.createElement("canvas"),dt=K.getContext("2d");if(!gt){for(var _t=1e3,L=_t,tt=_t,st=0,mt=0,E,P,F=0;F<_t;F+=2)for(var b=0;b<_t;b+=2)dt.isPointInPath(wt,F,b,"nonzero")&&(L=Math.min(L,F),tt=Math.min(tt,b),st=Math.max(st,F),mt=Math.max(mt,b));E=st-L,P=mt-tt;var J=10,Z=Math.min(J/E,J/P);gt=[Z,0,0,Z,-Math.round(E/2+L)*Z,-Math.round(P/2+tt)*Z]}return{type:"path",path:D,matrix:gt}}function vt(U){var D,gt=1,wt="#000000",K='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?D=U:(D=U.text,gt="scalar"in U?U.scalar:gt,K="fontFamily"in U?U.fontFamily:K,wt="color"in U?U.color:wt);var dt=10*gt,_t=""+dt+"px "+K,L=new OffscreenCanvas(dt,dt),tt=L.getContext("2d");tt.font=_t;var st=tt.measureText(D),mt=Math.ceil(st.actualBoundingBoxRight+st.actualBoundingBoxLeft),E=Math.ceil(st.actualBoundingBoxAscent+st.actualBoundingBoxDescent),P=2,F=st.actualBoundingBoxLeft+P,b=st.actualBoundingBoxAscent+P;mt+=P+P,E+=P+P,L=new OffscreenCanvas(mt,E),tt=L.getContext("2d"),tt.font=_t,tt.fillStyle=wt,tt.fillText(D,F,b);var J=1/gt;return{type:"bitmap",bitmap:L.transferToImageBitmap(),matrix:[J,0,0,J,-mt*J/2,-E*J/2]}}e.exports=function(){return et().apply(this,arguments)},e.exports.reset=function(){et().reset()},e.exports.create=Q,e.exports.shapeFromPath=k,e.exports.shapeFromText=vt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),su,!1);const Fv=su.exports;su.exports.create;const Bv={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},zv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px"}},kv={style:{display:"flex","align-items":"center",gap:"14px","font-size":"11px","font-weight":"bold"}},Vv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Hv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Gv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Wv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Sd=300,Xv=Xi({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=ce(null),s=ce(null),r=Oi({vin:!0,vout:!0,iin:!0,iout:!0}),o=[];let a=0;function l(d){o.push(d),o.length>Sd&&o.shift()}fs(()=>e.latestSample,d=>{d&&l(d)});function c(){const d=s.value;if(!d||!i.value)return;const f=d.width=i.value.clientWidth,h=d.height=i.value.clientHeight,_=d.getContext("2d");if(!_)return;_.fillStyle="#121519",_.fillRect(0,0,f,h);const v=45,m=15,p=15,R=25,A=f-v-m,S=h-p-R;if(A<=10||S<=10)return;_.strokeStyle="#1e2530",_.lineWidth=1,_.setLineDash([3,3]);const B=5;for(let N=0;N<=B;N++){const ut=p+S/B*N;_.beginPath(),_.moveTo(v,ut),_.lineTo(v+A,ut),_.stroke()}const z=8;for(let N=0;N<=z;N++){const ut=v+A/z*N;_.beginPath(),_.moveTo(ut,p),_.lineTo(ut,p+S),_.stroke()}_.setLineDash([]),_.strokeStyle="#2d3748",_.strokeRect(v,p,A,S);let I=15,H=4;o.forEach(N=>{N.vin>I&&(I=N.vin+2),N.vout>I&&(I=N.vout+2),N.iin>H&&(H=N.iin+1),N.iout>H&&(H=N.iout+1)}),_.fillStyle="#718096",_.font="10px Consolas, monospace",_.textAlign="right",_.textBaseline="middle";for(let N=0;N<=B;N++){const ut=p+S/B*N,nt=I-I/B*N;_.fillText(`${nt.toFixed(1)}V`,v-6,ut)}if(o.length<2){_.fillStyle="#4a5568",_.textAlign="center",_.fillText("等待采样数据流...",v+A/2,p+S/2);return}const C=_;function T(N,ut,nt){if(!C)return;C.strokeStyle=ut,C.lineWidth=1.6,C.beginPath();const Q=o.length;for(let W=0;W<Q;W++){const et=v+W/(Sd-1)*A,X=o[W][N]||0,k=p+S-Math.max(0,X)/nt*S;W===0?C.moveTo(et,k):C.lineTo(et,k)}C.stroke()}r.vin&&T("vin","#00d2ff",I),r.vout&&T("vout","#ffd166",I),r.iin&&T("iin","#06d6a0",H*(I/H)),r.iout&&T("iout","#ef476f",H*(I/H))}function u(){c(),a=requestAnimationFrame(u)}return Kr(()=>{u()}),Zr(()=>{cancelAnimationFrame(a)}),t({clear(){o.length=0}}),(d,f)=>(Ht(),Wt("div",Bv,[M("div",zv,[f[8]||(f[8]=M("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[M("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),kt(" 实时参数时域波形 (Real-time Waveforms) ")],-1)),M("div",kv,[M("label",Vv,[Ce(M("input",{type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=h=>r.vin=h)},null,512),[[wr,r.vin]]),f[4]||(f[4]=kt(" Vin (电源电压) ",-1))]),M("label",Hv,[Ce(M("input",{type:"checkbox","onUpdate:modelValue":f[1]||(f[1]=h=>r.vout=h)},null,512),[[wr,r.vout]]),f[5]||(f[5]=kt(" Vout (负载电压) ",-1))]),M("label",Gv,[Ce(M("input",{type:"checkbox","onUpdate:modelValue":f[2]||(f[2]=h=>r.iin=h)},null,512),[[wr,r.iin]]),f[6]||(f[6]=kt(" Iin (电源电流) ",-1))]),M("label",Wv,[Ce(M("input",{type:"checkbox","onUpdate:modelValue":f[3]||(f[3]=h=>r.iout=h)},null,512),[[wr,r.iout]]),f[7]||(f[7]=kt(" Iout (负载电流) ",-1))])])]),M("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519"}},[M("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512)],512)]))}}),$v={class:"modal-card",style:{"max-width":"680px"}},qv={class:"modal-header"},Yv={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},jv={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},Kv={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},Zv={style:{display:"flex","align-items":"center",gap:"8px"}},Jv={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},Qv={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},t0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},e0={style:{color:"#ecc94b"}},n0={style:{color:"#63b3ed"}},i0={style:{color:"#e2e8f0"}},s0={style:{color:"#48bb78"}},r0={style:{display:"flex","align-items":"center",gap:"6px"}},o0=["onClick"],a0=["onClick"],l0=["onClick"],c0={class:"modal-footer"},u0=Xi({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ht(),Wt("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=is(i=>t.$emit("close"),["self"]))},[M("div",$v,[M("div",qv,[e[5]||(e[5]=M("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[M("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("circle",{cx:"12",cy:"12",r:"10"}),M("polyline",{points:"12 6 12 12 16 14"})]),kt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),M("div",Yv,[n.records.length===0?(Ht(),Wt("div",jv," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Re("",!0),(Ht(!0),Wt(Fe,null,Hs(n.records,i=>{var s,r;return Ht(),Wt("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[M("div",Kv,[M("div",Zv,[M("span",Jv,Et(i.title),1),M("span",Qv,Et(new Date(i.createdAt).toLocaleString()),1)]),M("div",t0,[M("span",null,[e[6]||(e[6]=kt("电压: ",-1)),M("b",e0,Et(i.config.voltageMin)+"V ~ "+Et(i.config.voltageMax)+"V",1)]),M("span",null,[e[7]||(e[7]=kt("负载: ",-1)),M("b",n0,Et(i.config.loadMin)+" ~ "+Et(i.config.loadMax)+" ("+Et(i.config.loadMode)+")",1)]),M("span",null,[e[8]||(e[8]=kt("点数: ",-1)),M("b",i0,Et(i.points.length),1)]),M("span",null,[e[9]||(e[9]=kt("最高效率: ",-1)),M("b",s0,Et(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),M("div",r0,[M("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),kt(" 进入数据查看 ",-1)])],8,o0),M("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,a0),M("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"3 6 5 6 21 6"}),M("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,l0)])],32)}),128))]),M("div",c0,[M("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Re("",!0)}}),d0={class:"modal-card",style:{"max-width":"520px"}},f0={class:"modal-header"},h0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},p0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},m0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},g0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},_0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},v0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},x0={style:{display:"flex","align-items":"center",gap:"6px"}},y0=["disabled"],M0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},S0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},b0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},E0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},T0={style:{display:"flex","align-items":"center",gap:"6px"}},w0=["disabled"],A0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},C0={class:"modal-footer"},R0=Xi({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=ce(9600),e=ce(9600);return(i,s)=>n.isOpen?(Ht(),Wt("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=is(r=>i.$emit("close"),["self"]))},[M("div",d0,[M("div",f0,[s[10]||(s[10]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),M("div",h0,[M("div",p0,[s[11]||(s[11]=M("div",null,[M("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),kt(" 内置仿真演示驱动 (Virtual Simulation) ")]),M("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),M("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),M("div",m0,[M("div",g0,[M("span",_0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=kt(" 直流电源 (RIGOL DP700) ",-1))]),M("span",v0,Et(n.psuPortName),1)]),M("div",x0,[Ce(M("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,y0),[[Wl,t.value,void 0,{number:!0}]]),n.psuConnected?(Ht(),Wt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),M("div",M0,[M("div",S0,[M("span",b0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=kt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),M("span",E0,Et(n.loadPortName),1)]),M("div",T0,[Ce(M("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,w0),[[Wl,e.value,void 0,{number:!0}]]),n.loadConnected?(Ht(),Wt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Re("",!0):(Ht(),Wt("div",A0,[...s[16]||(s[16]=[kt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),M("b",null,"【启用仿真】",-1),kt("无障碍测试。 ",-1)])]))]),M("div",C0,[M("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Re("",!0)}});class P0{constructor(){Qt(this,"connected",!0);Qt(this,"outputOn",!1);Qt(this,"targetVoltage",5);Qt(this,"currentVoltage",0);Qt(this,"lastVoltage",0);Qt(this,"voltageChangeTime",0);Qt(this,"currentLimit",3);Qt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}}class D0{constructor(){Qt(this,"connected",!0);Qt(this,"inputOn",!1);Qt(this,"mode","CC");Qt(this,"targetCurrent",1);Qt(this,"currentCurrent",0);Qt(this,"lastCurrent",0);Qt(this,"targetPower",10);Qt(this,"currentPower",0);Qt(this,"lastPower",0);Qt(this,"loadChangeTime",0);Qt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}setMode(t){this.mode=t}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if((t??10)<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class bd{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
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
`]}}class Ed{constructor(t){Qt(this,"type");Qt(this,"isVirtual",!0);Qt(this,"port",null);Qt(this,"reader",null);Qt(this,"writer",null);Qt(this,"encoder",null);Qt(this,"decoder",null);Qt(this,"readBuffer","");Qt(this,"isDisconnecting",!1);Qt(this,"onLostCallback",null);Qt(this,"disconnectListener",null);Qt(this,"virtualPsu",new P0);Qt(this,"virtualLoad",new D0);Qt(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");try{await this.writer.write(t)}catch(e){throw this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(e==null?void 0:e.message)||e}`),e}}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const os=class os{constructor(){Qt(this,"psu",new Ed("PSU"));Qt(this,"load",new Ed("LOAD"));Qt(this,"onDeviceLostListener",null);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason};const e=this.load.checkAlive();return e.alive?{ok:!0}:(this.load.handleDeviceLost(e.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:e.reason})}static getInstance(){return os.instance||(os.instance=new os),os.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(bd.setVoltageAndLimit(e,i)),await this.psu.write(bd.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(co.setMode(e)),e==="CC"?await this.load.write(co.setCurrent(i)):await this.load.write(co.setPower(i)),await this.load.write(co.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};Qt(os,"instance");let jl=os;const L0="PowerChipTesterDB",I0=1,yn="test_runs",cp=5;function Ca(){return new Promise((n,t)=>{const e=indexedDB.open(L0,I0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(yn)||s.createObjectStore(yn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function U0(n){const t=await Ca(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([yn],"readwrite");r.objectStore(yn).put(e),r.oncomplete=async()=>{try{await F0(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Ca();return new Promise((t,e)=>{const o=n.transaction([yn],"readonly").objectStore(yn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function N0(n){const t=await Ca();return new Promise((e,i)=>{const o=t.transaction([yn],"readonly").objectStore(yn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function O0(n){const t=await Ca();return new Promise((e,i)=>{const s=t.transaction([yn],"readwrite");s.objectStore(yn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function F0(n){return new Promise((t,e)=>{const s=n.transaction([yn],"readwrite").objectStore(yn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function Xo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(h=>`"${h}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(h=>{const _=n.voltageSteps.map(v=>{const m=n.points.find(p=>Math.abs(p.voltageTarget-v)<1e-4&&Math.abs(p.loadTarget-h)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${h}",${_.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(h=>{i.push([h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),`"${h.loadMode}"`,h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2),`"${h.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压/负载跳变前后0.1s的暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.1s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(h=>{i.push([h.relTime.toFixed(4),h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),h.stepRelTime.toFixed(4),h.isValidForAvg?'"YES"':'"NO(0.1s过滤)"',h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const B0={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},z0={class:"menubar"},k0={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},V0={style:{display:"flex","align-items":"center",gap:"5px"}},H0={style:{display:"flex","align-items":"center",gap:"5px"}},G0={class:"panel-left"},W0={class:"group-box"},X0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},$0={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},q0={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"6px"}},Y0=["value"],j0={style:{display:"flex","align-items":"center",gap:"4px"}},K0=["value"],Z0={class:"group-box"},J0={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},Q0={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},tx={style:{"margin-bottom":"6px"}},ex={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},nx=["disabled"],ix=["disabled"],sx=["disabled"],rx={style:{"margin-bottom":"6px"}},ox={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},ax={style:{display:"flex",gap:"4px"}},lx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},cx=["disabled"],ux={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},dx=["disabled"],fx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},hx={style:{"font-size":"10px",color:"#a0aec0"}},px=["disabled"],mx={style:{"font-size":"10px",color:"#a0aec0"}},gx=["disabled"],_x={style:{"font-size":"10px",color:"#a0aec0"}},vx=["disabled"],xx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},yx=["disabled"],Mx=["disabled"],Sx=["disabled"],bx={class:"group-box"},Ex={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Tx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},wx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},Ax={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Cx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Rx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},Px={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Dx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Lx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Ix={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Ux={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Nx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},Ox={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Fx={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},Bx={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},zx={style:{display:"flex","flex-direction":"column",gap:"6px"}},kx={style:{display:"flex",gap:"6px"}},Vx=["disabled"],Hx=["disabled"],Gx={class:"panel-right"},Wx={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},Xx={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},$x={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},qx={style:{color:"#48bb78"}},Yx={style:{flex:"1",overflow:"auto"}},jx={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},Kx={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},Zx={style:{padding:"4px 6px"}},Jx={style:{padding:"4px 6px"}},Qx={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},ty={style:{padding:"4px 6px"}},ey={style:{padding:"4px 6px"}},ny={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},iy={style:{padding:"4px 6px"}},sy={style:{padding:"4px 6px"}},ry={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},oy={key:0,style:{color:"#48bb78"}},ay={key:1,style:{color:"#00d2ff"}},ly={key:2,style:{color:"#4a5568"}},cy={style:{padding:"4px 6px","text-align":"center"}},uy={class:"statusbar"},dy={key:0,style:{color:"#48bb78"}},fy={key:1},hy={class:"device-lost-modal"},py={class:"device-lost-header"},my={class:"device-lost-body"},gy={class:"device-lost-info-grid"},_y={class:"info-row"},vy={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},xy={class:"info-row"},yy={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},My={class:"info-row"},Sy={class:"info-val"},by={class:"info-row"},Ey={class:"info-val",style:{"font-family":"monospace"}},Ty={class:"device-lost-footer"},wy=Xi({__name:"ConsoleView",setup(n){const t=jl.getInstance(),e=ce(null),i=ce(!1),s=ce(!1),r=ce(!0),o=ce([]),a=Oi({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),l=ce(null),c=ce(void 0),u=ce([]),d=ce(!1),f=ce(!1),h=ce("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let _=null,v=null;const m=Oi({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),p=ce([]),R=ce([]),A=ce([]),S=ce(null),B=Oi({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),z=Ze(()=>{const Y=Math.max(1,Math.floor((m.voltageMax-m.voltageMin)/m.voltageStep)+1),y=Math.max(1,Math.floor((m.loadMax-m.loadMin)/m.loadStep)+1);return Y*y}),I=Ze(()=>A.value.filter(Y=>Y.status==="completed").length),H=Ze(()=>A.value.filter(Y=>Y.status==="completed"));function C(Y){e.value=e.value===Y?null:Y}function T(){e.value=null}function N(){const Y=[];for(let O=m.voltageMin;O<=m.voltageMax+1e-5;O+=m.voltageStep)Y.push(Math.round(O*100)/100);const y=[];for(let O=m.loadMin;O<=m.loadMax+1e-5;O+=m.loadStep)y.push(Math.round(O*100)/100);p.value=Y,R.value=y;const x=[];let g=1;for(const O of Y)for(const j of y)x.push({stepIndex:g++,voltageTarget:O,loadTarget:j,loadMode:m.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});A.value=x,B.totalSteps=x.length,B.currentStep=0,B.progressPercent=0}function ut(Y,y,x){console.error(`%c[SERIAL DEVICE LOST] %c${Y} (${y}): ${x}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),a.visible=!0,a.deviceType=Y,a.deviceName=y,a.reason=x,a.timestamp=new Date().toLocaleTimeString(),d.value&&(f.value=!0,h.value=`⚠️ 警告: 检测到串口设备【${y}】异常断开/丢失！测试已自动紧急暂停。`,t.emergencyStopAll().catch(()=>{}))}function nt(){a.visible=!1,s.value=!0}async function Q(){a.visible=!1,r.value=!0,t.autoConnectVirtual(),h.value="已切换为仿真驱动模式，测试已恢复",f.value=!1}async function W(){a.visible=!1,_&&_.abort(),await X()}async function et(){t.isBothConnected()||t.autoConnectVirtual(),N(),u.value=[],l.value&&l.value.clear(),c.value=void 0,d.value=!0,f.value=!1,_=new AbortController,h.value="正在执行全自动 2D 矩阵效率测试...",D();const Y=performance.now();try{let y=0;for(let x=0;x<A.value.length&&!_.signal.aborted;x++){for(;f.value&&!_.signal.aborted;)await new Promise(St=>setTimeout(St,200));const g=A.value[x];g.status="running",B.activeTargetV=g.voltageTarget,B.activeTargetLoad=g.loadTarget,B.currentStep=x+1,h.value=`正在测试步 #${g.stepIndex} (Vin: ${g.voltageTarget.toFixed(2)}V, 负载: ${g.loadTarget.toFixed(2)}${g.loadMode})...`;try{await t.setPsuOutput(!0,g.voltageTarget,m.inputCurrentLimit),await t.setLoadInput(!0,m.loadMode,g.loadTarget)}catch(St){for(ut("PSU",t.psu.state.model,`发送控制指令失败: ${(St==null?void 0:St.message)||St}`);f.value&&!_.signal.aborted;)await new Promise(Nt=>setTimeout(Nt,200));if(_.signal.aborted)break}const O=m.stepDwellTime*1e3,j=m.stepDwellTime,at=.1,it=Math.max(10,Math.round(1e3/(m.sampleRateHz||8))),pt=performance.now(),ht=[],bt=[],It=[],yt=[],Tt=[],Ot=[];let Lt=0;for(;Lt<O&&!_.signal.aborted;){for(;f.value&&!_.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));const St=performance.now();Lt=St-pt;const Nt=Lt/1e3,Ut=(St-Y)/1e3;if(!t.checkHealth().ok){for(;f.value&&!_.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));if(_.signal.aborted)break}const V=j>.2?Nt>=at&&Nt<=j-at:!0,Mt=t.measure();B.vin=Mt.vin,B.iin=Mt.iin,B.pin=Mt.pin,B.vout=Mt.vout,B.iout=Mt.iout,B.pout=Mt.pout,B.efficiency=Mt.efficiency,c.value={t:St,vin:Mt.vin,vout:Mt.vout,iin:Mt.iin,iout:Mt.iout};const ft={timestamp:Date.now(),relTime:Math.round(Ut*1e3)/1e3,stepIndex:g.stepIndex,voltageTarget:g.voltageTarget,loadTarget:g.loadTarget,stepRelTime:Math.round(Nt*1e3)/1e3,isValidForAvg:V,vin:Mt.vin,iin:Mt.iin,pin:Mt.pin,vout:Mt.vout,iout:Mt.iout,pout:Mt.pout,efficiency:Mt.efficiency};u.value.push(ft),V&&(ht.push(Mt.vin),bt.push(Mt.iin),It.push(Mt.pin),yt.push(Mt.vout),Tt.push(Mt.iout),Ot.push(Mt.pout));const xt=performance.now()-St,Pt=Math.max(2,it-xt);await new Promise(Ct=>setTimeout(Ct,Pt))}if(ht.length>0){const St=ht.length;g.vin=Math.round(ht.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.iin=Math.round(bt.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.pin=Math.round(It.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.vout=Math.round(yt.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.iout=Math.round(Tt.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.pout=Math.round(Ot.reduce((Nt,Ut)=>Nt+Ut,0)/St*1e3)/1e3,g.efficiency=g.pin>.001?Math.min(100,Math.max(0,Math.round(g.pout/g.pin*1e4)/100)):0}else{const St=t.measure();g.vin=St.vin,g.iin=St.iin,g.pin=St.pin,g.vout=St.vout,g.iout=St.iout,g.pout=St.pout,g.efficiency=St.efficiency}g.status="completed",g.timestamp=Date.now(),y++,B.progressPercent=y/A.value.length*100}_.signal.aborted||await X()}catch(y){console.error("Test execution error:",y),h.value="测试执行异常: "+String(y),alert("测试执行过程中发生异常："+String(y))}finally{d.value=!1,f.value=!1,gt()}}async function X(){await t.emergencyStopAll(),h.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const Y=A.value.filter(Tt=>Tt.status==="completed");let y=0,x=100,g=0,O;Y.forEach(Tt=>{Tt.efficiency>y&&(y=Tt.efficiency,O=Tt),Tt.efficiency<x&&(x=Tt.efficiency),g+=Tt.efficiency});const j=Y.length>0?g/Y.length:0,at=`test_${Date.now()}`,it=new Date,pt=JSON.parse(JSON.stringify(m)),ht=JSON.parse(JSON.stringify(A.value)),bt=O?JSON.parse(JSON.stringify(O)):void 0,It=JSON.parse(JSON.stringify(u.value)),yt={id:at,title:`芯片双向矩阵扫描 [${m.voltageMin}V-${m.voltageMax}V | ${m.loadMode}]`,createdAt:it.toISOString(),config:pt,voltageSteps:[...p.value],loadSteps:[...R.value],points:ht,rawSamples:It,summary:{totalPoints:A.value.length,completedPoints:Y.length,maxEfficiency:Math.round(y*100)/100,minEfficiency:Math.round(x*100)/100,avgEfficiency:Math.round(j*100)/100,optimalPoint:bt,durationSeconds:Math.round(Y.length*m.stepDwellTime)}};S.value=yt,await U0(yt),await L(),Fv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),wt(at)}function k(){f.value=!0,h.value="测试已暂停"}function vt(){f.value=!1,h.value="测试已继续运行"}async function U(){_&&_.abort(),d.value=!1,f.value=!1,await t.emergencyStopAll(),gt(),h.value="测试已手动终止"}function D(){v&&clearInterval(v),v=window.setInterval(()=>{if(t.checkHealth(),!d.value){const Y=t.measure();B.vin=Y.vin,B.iin=Y.iin,B.pin=Y.pin,B.vout=Y.vout,B.iout=Y.iout,B.pout=Y.pout,B.efficiency=Y.efficiency}},200)}function gt(){v&&(clearInterval(v),v=null)}function wt(Y){var O;const y=Y||((O=S.value)==null?void 0:O.id);if(!y){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const g=`${window.location.href.split("#")[0]}#/result/${y}`;window.open(g,"_blank")}function K(){if(S.value)Xo(S.value);else if(H.value.length>0){const Y={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(m)),voltageSteps:[...p.value],loadSteps:[...R.value],points:JSON.parse(JSON.stringify(A.value)),rawSamples:JSON.parse(JSON.stringify(u.value)),summary:{totalPoints:A.value.length,completedPoints:H.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};Xo(Y)}else alert("当前无可用测试数据可供导出！")}function dt(Y){Xo(Y)}async function _t(Y){await O0(Y),await L()}async function L(){try{o.value=await up()}catch(Y){console.warn("Failed to load history:",Y)}}async function tt(){await L(),i.value=!0}function st(){A.value=[],u.value=[],S.value=null,c.value=void 0,l.value&&l.value.clear(),N(),h.value="图表与数据已清空"}function mt(){r.value?(t.autoConnectVirtual(),h.value="已启用内置仿真驱动模式 (Virtual Mode)"):(t.psu.disconnect(),t.load.disconnect(),h.value="已关闭仿真模式，请配置物理串口设备")}function E(){t.psu.state.connected?(t.psu.disconnect(),h.value="电源串口已断开"):s.value=!0}function P(){t.load.state.connected?(t.load.disconnect(),h.value="电子负载串口已断开"):s.value=!0}function F(){r.value=!0,t.autoConnectVirtual(),s.value=!1,h.value="仿真驱动已就绪"}async function b(Y){try{await t.psu.connectPhysical(Y),r.value=!1,h.value=`电源串口已连接 (${Y}bps)`}catch(y){alert("连接电源串口失败: "+((y==null?void 0:y.message)||y))}}async function J(){await t.psu.disconnect(),h.value="电源串口已断开"}async function Z(Y){try{await t.load.connectPhysical(Y),r.value=!1,h.value=`负载串口已连接 (${Y}bps)`}catch(y){alert("连接负载串口失败: "+((y==null?void 0:y.message)||y))}}async function rt(){await t.load.disconnect(),h.value="负载串口已断开"}function ot(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}return Kr(async()=>{t.setOnDeviceLost(ut),t.autoConnectVirtual(),N(),D(),await L()}),Zr(()=>{gt()}),(Y,y)=>(Ht(),Wt("div",B0,[M("div",z0,[M("div",{class:ui(["menu-item",{active:e.value==="file"}]),onClick:y[3]||(y[3]=x=>C("file"))},[y[36]||(y[36]=kt(" 文件 (File) ",-1)),e.value==="file"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[2]||(y[2]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[0]||(y[0]=x=>{K(),T()})},[...y[33]||(y[33]=[M("span",null,"导出测试结果 CSV (Export CSV)...",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),y[35]||(y[35]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:y[1]||(y[1]=x=>T())},[...y[34]||(y[34]=[M("span",null,"退出 (Exit)",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Re("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="view"}]),onClick:y[6]||(y[6]=x=>C("view"))},[y[38]||(y[38]=kt(" 视图 (View) ",-1)),e.value==="view"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[5]||(y[5]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[4]||(y[4]=x=>{st(),T()})},[...y[37]||(y[37]=[M("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Re("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="tools"}]),onClick:y[10]||(y[10]=x=>C("tools"))},[y[42]||(y[42]=kt(" 工具 (Tools) ",-1)),e.value==="tools"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[9]||(y[9]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[7]||(y[7]=x=>{tt(),T()})},[...y[39]||(y[39]=[M("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),M("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),y[41]||(y[41]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:y[8]||(y[8]=x=>{s.value=!0,T()})},[...y[40]||(y[40]=[M("span",null,"打开串口硬件连接设置...",-1)])])])):Re("",!0)],2),M("div",{class:ui(["menu-item",{active:e.value==="help"}]),onClick:y[13]||(y[13]=x=>C("help"))},[y[44]||(y[44]=kt(" 帮助 (Help) ",-1)),e.value==="help"?(Ht(),Wt("div",{key:0,class:"dropdown-menu",onClick:y[12]||(y[12]=is(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:y[11]||(y[11]=x=>{ot(),T()})},[...y[43]||(y[43]=[M("span",null,"关于工作台 (About Workbench)...",-1)])])])):Re("",!0)],2),M("div",k0,[M("span",V0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),kt(" 电源: "+Et(Ee(t).psu.state.portName),1)]),M("span",H0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),kt(" 负载: "+Et(Ee(t).load.state.portName),1)]),S.value?(Ht(),Wt("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:y[14]||(y[14]=x=>wt(S.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...y[45]||(y[45]=[M("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),kt(" 打开 3D/2D 数据视图 ",-1)])])):Re("",!0)])]),M("div",{class:"workbench-body",onClick:T},[M("div",G0,[M("div",W0,[y[49]||(y[49]=M("div",{class:"group-title"},[M("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),M("div",X0,[M("label",$0,[Ce(M("input",{type:"checkbox","onUpdate:modelValue":y[15]||(y[15]=x=>r.value=x),onChange:mt},null,544),[[wr,r.value]]),y[46]||(y[46]=kt(" 🧪 启用仿真演示模式 ",-1))]),M("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:y[16]||(y[16]=x=>s.value=!0)}," ⚙ 配置 ")]),M("div",q0,[y[47]||(y[47]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,Y0),M("button",{class:ui(["btn",Ee(t).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:E},Et(Ee(t).psu.state.connected?"断开":"连接"),3)]),M("div",j0,[y[48]||(y[48]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,K0),M("button",{class:ui(["btn",Ee(t).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:P},Et(Ee(t).load.state.connected?"断开":"连接"),3)])]),M("div",Z0,[M("div",J0,[y[50]||(y[50]=M("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),M("span",Q0," 总点数: "+Et(z.value)+" 点 ",1)]),M("div",tx,[y[54]||(y[54]=M("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),M("div",ex,[M("div",null,[y[51]||(y[51]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[17]||(y[17]=x=>m.voltageMin=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,nx),[[ei,m.voltageMin,void 0,{number:!0}]])]),M("div",null,[y[52]||(y[52]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[18]||(y[18]=x=>m.voltageMax=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,ix),[[ei,m.voltageMax,void 0,{number:!0}]])]),M("div",null,[y[53]||(y[53]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[19]||(y[19]=x=>m.voltageStep=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,sx),[[ei,m.voltageStep,void 0,{number:!0}]])])])]),M("div",rx,[M("div",ox,[y[57]||(y[57]=M("span",null,"负载扫描范围 (Load):",-1)),M("div",ax,[M("label",lx,[Ce(M("input",{type:"radio",value:"CC","onUpdate:modelValue":y[20]||(y[20]=x=>m.loadMode=x),disabled:d.value},null,8,cx),[[id,m.loadMode]]),y[55]||(y[55]=kt(" CC恒流 ",-1))]),M("label",ux,[Ce(M("input",{type:"radio",value:"CW","onUpdate:modelValue":y[21]||(y[21]=x=>m.loadMode=x),disabled:d.value},null,8,dx),[[id,m.loadMode]]),y[56]||(y[56]=kt(" CW恒功率 ",-1))])])]),M("div",fx,[M("div",null,[M("span",hx,"起始("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Ce(M("input",{type:"number","onUpdate:modelValue":y[22]||(y[22]=x=>m.loadMin=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,px),[[ei,m.loadMin,void 0,{number:!0}]])]),M("div",null,[M("span",mx,"终止("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Ce(M("input",{type:"number","onUpdate:modelValue":y[23]||(y[23]=x=>m.loadMax=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,gx),[[ei,m.loadMax,void 0,{number:!0}]])]),M("div",null,[M("span",_x,"步长("+Et(m.loadMode==="CC"?"A":"W")+"):",1),Ce(M("input",{type:"number","onUpdate:modelValue":y[24]||(y[24]=x=>m.loadStep=x),disabled:d.value,step:"0.1",style:{width:"100%"}},null,8,vx),[[ei,m.loadStep,void 0,{number:!0}]])])])]),M("div",xx,[M("div",null,[y[58]||(y[58]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[25]||(y[25]=x=>m.inputCurrentLimit=x),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,yx),[[ei,m.inputCurrentLimit,void 0,{number:!0}]])]),M("div",null,[y[59]||(y[59]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[26]||(y[26]=x=>m.stepDwellTime=x),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,Mx),[[ei,m.stepDwellTime,void 0,{number:!0}]])]),M("div",null,[y[60]||(y[60]=M("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),Ce(M("input",{type:"number","onUpdate:modelValue":y[27]||(y[27]=x=>m.sampleRateHz=x),disabled:d.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,Sx),[[ei,m.sampleRateHz,void 0,{number:!0}]])])])]),M("div",bx,[y[74]||(y[74]=M("div",{class:"group-title"},[M("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),M("div",Ex,[M("div",Tx,[y[62]||(y[62]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),M("div",wx,[kt(Et(B.vin.toFixed(3))+" ",1),y[61]||(y[61]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",Ax,[y[64]||(y[64]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),M("div",Cx,[kt(Et(B.vout.toFixed(3))+" ",1),y[63]||(y[63]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",Rx,[y[66]||(y[66]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),M("div",Px,[kt(Et(B.iin.toFixed(3))+" ",1),y[65]||(y[65]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Dx,[y[68]||(y[68]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),M("div",Lx,[kt(Et(B.iout.toFixed(3))+" ",1),y[67]||(y[67]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Ix,[y[70]||(y[70]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),M("div",Ux,[kt(Et(B.pin.toFixed(3))+" ",1),y[69]||(y[69]=M("span",{style:{"font-size":"10px"}},"W",-1))])]),M("div",Nx,[y[72]||(y[72]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),M("div",Ox,[kt(Et(B.pout.toFixed(3))+" ",1),y[71]||(y[71]=M("span",{style:{"font-size":"10px"}},"W",-1))])])]),M("div",Fx,[y[73]||(y[73]=M("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),M("span",Bx,Et(B.efficiency.toFixed(2))+" % ",1)])]),M("div",zx,[d.value?f.value?(Ht(),Wt("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:vt}," ▶ 继续测试 ")):(Ht(),Wt("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:k}," ⏸ 暂停测试 ")):(Ht(),Wt("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:et}," ▶ 开始矩阵测试 ")),M("div",kx,[M("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!d.value,onClick:U}," ⏹ 结束 ",8,Vx),M("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:H.value.length===0,onClick:K}," 📊 导出CSV ",8,Hx)])])]),M("div",Gx,[Ue(Xv,{ref_key:"waveformRef",ref:l,"latest-sample":c.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),M("div",Wx,[M("div",Xx,[y[76]||(y[76]=M("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),M("span",$x,[y[75]||(y[75]=kt(" 已完成: ",-1)),M("b",qx,Et(I.value),1),kt(" / "+Et(A.value.length)+" 步 ",1)])]),M("div",Yx,[M("table",jx,[y[77]||(y[77]=M("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[M("tr",{style:{"border-bottom":"1px solid #2d3748"}},[M("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),M("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),M("th",{style:{padding:"5px 6px"}},"目标负载"),M("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),M("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),M("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),M("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),M("tbody",null,[(Ht(!0),Wt(Fe,null,Hs(A.value,x=>(Ht(),Wt("tr",{key:x.stepIndex,style:Ie([{"border-bottom":"1px solid #1e2530"},{backgroundColor:x.status==="running"?"#1a365d":"transparent"}])},[M("td",Kx,"#"+Et(x.stepIndex),1),M("td",Zx,Et(x.voltageTarget.toFixed(2)),1),M("td",Jx,Et(x.loadTarget.toFixed(2))+" "+Et(x.loadMode),1),M("td",Qx,Et(x.status!=="pending"?x.vin.toFixed(4):"--"),1),M("td",ty,Et(x.status!=="pending"?x.iin.toFixed(4):"--"),1),M("td",ey,Et(x.status!=="pending"?x.pin.toFixed(4):"--"),1),M("td",ny,Et(x.status!=="pending"?x.vout.toFixed(4):"--"),1),M("td",iy,Et(x.status!=="pending"?x.iout.toFixed(4):"--"),1),M("td",sy,Et(x.status!=="pending"?x.pout.toFixed(4):"--"),1),M("td",ry,[x.status==="completed"?(Ht(),Wt("span",oy,Et(x.efficiency.toFixed(2))+"% ",1)):x.status==="running"?(Ht(),Wt("span",ay,"测定中")):(Ht(),Wt("span",ly,"--"))]),M("td",cy,[M("span",{style:Ie([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:x.status==="completed"?"#22543d":x.status==="running"?"#2b6cb0":"#2d3748",color:x.status==="completed"?"#9ae6b4":x.status==="running"?"#bee3f8":"#718096"}])},Et(x.status==="completed"?"已完成":x.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),M("div",uy,[M("span",null,Et(h.value),1),d.value?(Ht(),Wt("span",dy," 正在测试第 "+Et(B.currentStep)+" / "+Et(B.totalSteps)+" 点 ("+Et(B.progressPercent.toFixed(1))+"%) ",1)):(Ht(),Wt("span",fy,"就绪 (Ready)"))]),Ue(u0,{"is-open":i.value,records:o.value,onClose:y[28]||(y[28]=x=>i.value=!1),onOpenResult:wt,onExportCsv:dt,onDeleteRecord:_t},null,8,["is-open","records"]),Ue(R0,{"is-open":s.value,"psu-connected":Ee(t).psu.state.connected,"psu-port-name":Ee(t).psu.state.portName,"load-connected":Ee(t).load.state.connected,"load-port-name":Ee(t).load.state.portName,"web-serial-supported":Ee(t).psu.isWebSerialSupported(),onClose:y[29]||(y[29]=x=>s.value=!1),onConnectVirtual:F,onConnectPhysicalPsu:b,onDisconnectPsu:J,onConnectPhysicalLoad:Z,onDisconnectLoad:rt},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),a.visible?(Ht(),Wt("div",{key:0,class:"device-lost-overlay",onClick:y[32]||(y[32]=is(x=>a.visible=!1,["self"]))},[M("div",hy,[M("div",py,[y[78]||(y[78]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 串口硬件设备异常丢失警告！ </span></div>',1)),M("button",{class:"btn",style:{padding:"2px 7px"},onClick:y[30]||(y[30]=x=>a.visible=!1)},"✕")]),M("div",my,[y[83]||(y[83]=M("div",{class:"device-lost-alert-banner"},[M("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 检测到串口通信链路中断 / 硬件连接丢失！ "),M("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，电源输出已安全切断。 ")],-1)),M("div",gy,[M("div",_y,[y[79]||(y[79]=M("span",{class:"info-label"},"丢失仪器:",-1)),M("span",vy,Et(a.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+Et(a.deviceName),1)]),M("div",xy,[y[80]||(y[80]=M("span",{class:"info-label"},"异常原因:",-1)),M("span",yy,Et(a.reason),1)]),M("div",My,[y[81]||(y[81]=M("span",{class:"info-label"},"测试进度:",-1)),M("span",Sy,"已完成 "+Et(I.value)+" / "+Et(A.value.length)+" 点 (当前步已挂起)",1)]),M("div",by,[y[82]||(y[82]=M("span",{class:"info-label"},"发生时间:",-1)),M("span",Ey,Et(a.timestamp),1)])]),y[84]||(y[84]=M("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查设备电源及 USB 串口线物理连接。重新连接后可点击【恢复测试】无缝继续；亦可一键切换为内置仿真模式继续验证。 ",-1))]),M("div",Ty,[M("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:nt}," ⚙ 重新连接串口硬件 "),M("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:Q}," 🧪 切换仿真模式并继续测试 "),M("button",{class:"btn btn-danger",onClick:W}," 💾 终止测试并保存已测结果 "),M("button",{class:"btn",onClick:y[31]||(y[31]=x=>a.visible=!1)}," 保持暂停 ")])])])):Re("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="170",qs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ay=0,Td=1,Cy=2,dp=1,fp=2,li=3,Gi=0,rn=1,mi=2,Bi=0,Ys=1,wd=2,Ad=3,Cd=4,Ry=5,ss=100,Py=101,Dy=102,Ly=103,Iy=104,Uy=200,Ny=201,Oy=202,Fy=203,Kl=204,Zl=205,By=206,zy=207,ky=208,Vy=209,Hy=210,Gy=211,Wy=212,Xy=213,$y=214,Jl=0,Ql=1,tc=2,er=3,ec=4,nc=5,ic=6,sc=7,hp=0,qy=1,Yy=2,zi=0,jy=1,Ky=2,Zy=3,Jy=4,Qy=5,tM=6,eM=7,pp=300,nr=301,ir=302,rc=303,oc=304,Ra=306,ac=1e3,cs=1001,lc=1002,Ln=1003,nM=1004,uo=1005,An=1006,Za=1007,us=1008,yi=1009,mp=1010,gp=1011,qr=1012,ou=1013,ps=1014,gi=1015,Qr=1016,au=1017,lu=1018,sr=1020,_p=35902,vp=1021,xp=1022,Cn=1023,yp=1024,Mp=1025,js=1026,rr=1027,Sp=1028,cu=1029,bp=1030,uu=1031,du=1033,$o=33776,qo=33777,Yo=33778,jo=33779,cc=35840,uc=35841,dc=35842,fc=35843,hc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,yc=37812,Mc=37813,Sc=37814,bc=37815,Ec=37816,Tc=37817,wc=37818,Ac=37819,Cc=37820,Rc=37821,Ko=36492,Pc=36494,Dc=36495,Ep=36283,Lc=36284,Ic=36285,Uc=36286,iM=3200,sM=3201,Tp=0,rM=1,Ui="",gn="srgb",ar="srgb-linear",Pa="linear",de="srgb",Ss=7680,Rd=519,oM=512,aM=513,lM=514,wp=515,cM=516,uM=517,dM=518,fM=519,Nc=35044,Pd="300 es",_i=2e3,aa=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Oc=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function hM(n,t){return(n%t+t)%t}function Ja(n,t,e){return(1-e)*n+e*t}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pM={DEG2RAD:Fr};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],_=i[8],v=s[0],m=s[3],p=s[6],R=s[1],A=s[4],S=s[7],B=s[2],z=s[5],I=s[8];return r[0]=o*v+a*R+l*B,r[3]=o*m+a*A+l*z,r[6]=o*p+a*S+l*I,r[1]=c*v+u*R+d*B,r[4]=c*m+u*A+d*z,r[7]=c*p+u*S+d*I,r[2]=f*v+h*R+_*B,r[5]=f*m+h*A+_*z,r[8]=f*p+h*S+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,_=e*d+i*f+s*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=h*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Zt;function Ap(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mM(){const n=la("canvas");return n.style.display="block",n}const Dd={};function Ar(n){n in Dd||(Dd[n]=!0,console.warn(n))}function gM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function _M(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=vi(n.r),n.g=vi(n.g),n.b=vi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ld=[.64,.33,.3,.6,.15,.06],Id=[.2126,.7152,.0722],Ud=[.3127,.329],Nd=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[ar]:{primaries:Ld,whitePoint:Ud,transfer:Pa,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Ld,whitePoint:Ud,transfer:de,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let bs;class xM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=la("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yM=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tl(s[o].image)):r.push(tl(s[o]))}else r=tl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let MM=0;class tn extends vs{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=cs,s=cs,r=An,o=us,a=Cn,l=yi,c=tn.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ki(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=pp;tn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,i=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],_=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(h+1)/2,B=(p+1)/2,z=(u+f)/4,I=(d+v)/4,H=(_+m)/4;return A>S&&A>B?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=z/i,r=I/i):S>B?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=z/s,r=H/s):B<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),i=I/r,s=H/r),this.set(i,s,r,e),this}let R=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(d-v)/R,this.z=(f-u)/R,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends vs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ms extends SM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rp extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class bM extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==h||u!==_){let m=1-a;const p=l*f+c*h+u*_+d*v,R=p>=0?1:-1,A=1-p*p;if(A>Number.EPSILON){const B=Math.sqrt(A),z=Math.atan2(B,p*R);m=Math.sin(m*z)/B,a=Math.sin(a*z)/B}const S=a*R;if(l=l*m+f*S,c=c*m+h*S,u=u*m+_*S,d=d*m+v*S,m===1-a){const B=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=B,c*=B,u*=B,d*=B}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*h-c*f,t[e+1]=l*_+u*f+c*d-a*h,t[e+2]=c*_+u*h+a*f-l*d,t[e+3]=u*_-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"YXZ":this._x=f*u*d+c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"ZXY":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d-f*h*_;break;case"ZYX":this._x=f*u*d-c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d+f*h*_;break;case"YZX":this._x=f*u*d+c*h*_,this._y=c*h*d+f*u*_,this._z=c*u*_-f*h*d,this._w=c*u*d-f*h*_;break;case"XZY":this._x=f*u*d-c*h*_,this._y=c*h*d-f*u*_,this._z=c*u*_+f*h*d,this._w=c*u*d+f*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,i=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new G,Fd=new gs;class to{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),ho.subVectors(this.max,mr),Es.subVectors(t.a,mr),Ts.subVectors(t.b,mr),ws.subVectors(t.c,mr),Ti.subVectors(Ts,Es),wi.subVectors(ws,Ts),ji.subVectors(Es,ws);let e=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-ji.z,ji.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,ji.z,0,-ji.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-ji.y,ji.x,0];return!nl(e,Es,Ts,ws,ho)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Es,Ts,ws,ho))?!1:(po.crossVectors(Ti,wi),e=[po.x,po.y,po.z],nl(e,Es,Ts,ws,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ii),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ii=[new G,new G,new G,new G,new G,new G,new G,new G],bn=new G,fo=new to,Es=new G,Ts=new G,ws=new G,Ti=new G,wi=new G,ji=new G,mr=new G,ho=new G,po=new G,Ki=new G;function nl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ki.fromArray(n,r);const a=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const EM=new to,gr=new G,il=new G;class Da{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):EM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(il)),this.expandByPoint(gr.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new G,sl=new G,mo=new G,Ai=new G,rl=new G,go=new G,ol=new G;class La{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){sl.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(sl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(mo),a=Ai.dot(this.direction),l=-Ai.dot(mo),c=Ai.lengthSq(),u=Math.abs(1-o*o);let d,f,h,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sl).addScaledVector(mo,f),h}intersectSphere(t,e){si.subVectors(t.center,this.origin);const i=si.dot(this.direction),s=si.dot(si)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,i,s,r){rl.subVectors(e,t),go.subVectors(i,t),ol.crossVectors(rl,go);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const l=a*this.direction.dot(go.crossVectors(Ai,go));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(ol);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+h*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f+v*a,e[4]=_*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,_=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+h*a,e[1]=h+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,h=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=_*c-h,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=h*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=_*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+_,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,h=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=h*d-_,e[2]=_*d-h,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(TM,t,wM)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ci.crossVectors(i,an),Ci.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ci.crossVectors(i,an)),Ci.normalize(),_o.crossVectors(an,Ci),s[0]=Ci.x,s[4]=_o.x,s[8]=an.x,s[1]=Ci.y,s[5]=_o.y,s[9]=an.y,s[2]=Ci.z,s[6]=_o.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],_=i[2],v=i[6],m=i[10],p=i[14],R=i[3],A=i[7],S=i[11],B=i[15],z=s[0],I=s[4],H=s[8],C=s[12],T=s[1],N=s[5],ut=s[9],nt=s[13],Q=s[2],W=s[6],et=s[10],X=s[14],k=s[3],vt=s[7],U=s[11],D=s[15];return r[0]=o*z+a*T+l*Q+c*k,r[4]=o*I+a*N+l*W+c*vt,r[8]=o*H+a*ut+l*et+c*U,r[12]=o*C+a*nt+l*X+c*D,r[1]=u*z+d*T+f*Q+h*k,r[5]=u*I+d*N+f*W+h*vt,r[9]=u*H+d*ut+f*et+h*U,r[13]=u*C+d*nt+f*X+h*D,r[2]=_*z+v*T+m*Q+p*k,r[6]=_*I+v*N+m*W+p*vt,r[10]=_*H+v*ut+m*et+p*U,r[14]=_*C+v*nt+m*X+p*D,r[3]=R*z+A*T+S*Q+B*k,r[7]=R*I+A*N+S*W+B*vt,r[11]=R*H+A*ut+S*et+B*U,r[15]=R*C+A*nt+S*X+B*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+v*(+e*l*h-e*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+e*c*d-e*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],_=t[12],v=t[13],m=t[14],p=t[15],R=d*m*c-v*f*c+v*l*h-a*m*h-d*l*p+a*f*p,A=_*f*c-u*m*c-_*l*h+o*m*h+u*l*p-o*f*p,S=u*v*c-_*d*c+_*a*h-o*v*h-u*a*p+o*d*p,B=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,z=e*R+i*A+s*S+r*B;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=R*I,t[1]=(v*f*r-d*m*r-v*s*h+i*m*h+d*s*p-i*f*p)*I,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*p+i*l*p)*I,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*I,t[4]=A*I,t[5]=(u*m*r-_*f*r+_*s*h-e*m*h-u*s*p+e*f*p)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*p-e*l*p)*I,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*h+e*l*h)*I,t[8]=S*I,t[9]=(_*d*r-u*v*r-_*i*h+e*v*h+u*i*p-e*d*p)*I,t[10]=(o*v*r-_*a*r+_*i*c-e*v*c-o*i*p+e*a*p)*I,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*h-e*a*h)*I,t[12]=B*I,t[13]=(u*v*s-_*d*s+_*i*f-e*v*f-u*i*m+e*d*m)*I,t[14]=(_*a*s-o*v*s-_*i*l+e*v*l+o*i*m-e*a*m)*I,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,_=r*d,v=o*u,m=o*d,p=a*d,R=l*c,A=l*u,S=l*d,B=i.x,z=i.y,I=i.z;return s[0]=(1-(v+p))*B,s[1]=(h+S)*B,s[2]=(_-A)*B,s[3]=0,s[4]=(h-S)*z,s[5]=(1-(f+p))*z,s[6]=(m+R)*z,s[7]=0,s[8]=(_+A)*I,s[9]=(m-R)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=As.set(s[0],s[1],s[2]).length();const o=As.set(s[4],s[5],s[6]).length(),a=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,u=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=_i){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let h,_;if(a===_i)h=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===aa)h=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=_i){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,h=(i+s)*u;let _,v;if(a===_i)_=(o+r)*d,v=-2*d;else if(a===aa)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const As=new G,En=new ve,TM=new G(0,0,0),wM=new G(1,1,1),Ci=new G,_o=new G,an=new G,Bd=new ve,zd=new gs;class Zn{constructor(t=0,e=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const kd=new G,Cs=new gs,ri=new ve,vo=new G,_r=new G,CM=new G,RM=new gs,Vd=new G(1,0,0),Hd=new G(0,1,0),Gd=new G(0,0,1),Wd={type:"added"},PM={type:"removed"},Rs={type:"childadded",child:null},al={type:"childremoved",child:null};class Ne extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new G,e=new Zn,i=new gs,s=new G(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Zt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Hd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Hd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vo.copy(t):vo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(_r,vo,this.up):ri.lookAt(vo,_r,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(ri),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(PM),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wd),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,CM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,RM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new G(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new G,oi=new G,ll=new G,ai=new G,Ps=new G,Ds=new G,Xd=new G,cl=new G,ul=new G,dl=new G,fl=new pe,hl=new pe,pl=new pe;class un{constructor(t=new G,e=new G,i=new G){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),oi.subVectors(i,e),ll.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(oi),l=Tn.dot(ll),c=oi.dot(oi),u=oi.dot(ll),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-h-_,_,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fl.setScalar(0),hl.setScalar(0),pl.setScalar(0),fl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),oi.subVectors(t,e),Tn.cross(oi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Tn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ps.subVectors(s,i),Ds.subVectors(r,i),cl.subVectors(t,i);const l=Ps.dot(cl),c=Ds.dot(cl);if(l<=0&&c<=0)return e.copy(i);ul.subVectors(t,s);const u=Ps.dot(ul),d=Ds.dot(ul);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ps,o);dl.subVectors(t,r);const h=Ps.dot(dl),_=Ds.dot(dl);if(_>=0&&h<=_)return e.copy(r);const v=h*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ds,a);const m=u*_-h*d;if(m<=0&&d-u>=0&&h-_>=0)return Xd.subVectors(r,s),a=(d-u)/(d-u+(h-_)),e.copy(s).addScaledVector(Xd,a);const p=1/(m+v+f);return o=v*p,a=f*p,e.copy(i).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},xo={h:0,s:0,l:0};function ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=hM(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ml(o,r,t+1/3),this.g=ml(o,r,t),this.b=ml(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Pp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return te.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ke(Ve.r*255,0,255))*65536+Math.round(Ke(Ve.g*255,0,255))*256+Math.round(Ke(Ve.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=gn){te.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,s=Ve.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(xo);const i=Ja(Ri.h,xo.h,e),s=Ja(Ri.s,xo.s,e),r=Ja(Ri.l,xo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new $t;$t.NAMES=Pp;let DM=0;class xs extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=ki(),this.name="",this.blending=Ys,this.side=Gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Zl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dp extends xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new G,yo=new Xt;class In{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}}class Lp extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ip extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}}let LM=0;const mn=new ve,gl=new Ne,Ls=new G,ln=new to,vr=new to,Le=new G;class Je extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ap(t)?Ip:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(ln.min,vr.min),ln.expandByPoint(Le),Le.addVectors(ln.max,vr.max),ln.expandByPoint(Le)):(ln.expandByPoint(vr.min),ln.expandByPoint(vr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(Ls.fromBufferAttribute(t,c),Le.add(Ls)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<i.count;H++)a[H]=new G,l[H]=new G;const c=new G,u=new G,d=new G,f=new Xt,h=new Xt,_=new Xt,v=new G,m=new G;function p(H,C,T){c.fromBufferAttribute(i,H),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,H),h.fromBufferAttribute(r,C),_.fromBufferAttribute(r,T),u.sub(c),d.sub(c),h.sub(f),_.sub(f);const N=1/(h.x*_.y-_.x*h.y);isFinite(N)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-h.y).multiplyScalar(N),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(N),a[H].add(v),a[C].add(v),a[T].add(v),l[H].add(m),l[C].add(m),l[T].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let H=0,C=R.length;H<C;++H){const T=R[H],N=T.start,ut=T.count;for(let nt=N,Q=N+ut;nt<Q;nt+=3)p(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const A=new G,S=new G,B=new G,z=new G;function I(H){B.fromBufferAttribute(s,H),z.copy(B);const C=a[H];A.copy(C),A.sub(B.multiplyScalar(B.dot(C))).normalize(),S.crossVectors(z,C);const N=S.dot(l[H])<0?-1:1;o.setXYZW(H,A.x,A.y,A.z,N)}for(let H=0,C=R.length;H<C;++H){const T=R[H],N=T.start,ut=T.count;for(let nt=N,Q=N+ut;nt<Q;nt+=3)I(t.getX(nt+0)),I(t.getX(nt+1)),I(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,d=new G;if(t)for(let f=0,h=t.count;f<h;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)f[_++]=c[h++]}return new In(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new ve,Zi=new La,Mo=new Da,qd=new G,So=new G,bo=new G,Eo=new G,_l=new G,To=new G,Yd=new G,wo=new G;class Rn extends Ne{constructor(t=new Je,e=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(_l.fromBufferAttribute(d,t),o?To.addScaledVector(_l,u):To.addScaledVector(_l.sub(e),u))}e.add(To)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Zi.copy(t.ray).recast(t.near),!(Mo.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Mo,qd)===null||Zi.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&($d.copy(r).invert(),Zi.copy(t.ray).applyMatrix4($d),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],R=Math.max(m.start,h.start),A=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,B=A;S<B;S+=3){const z=a.getX(S),I=a.getX(S+1),H=a.getX(S+2);s=Ao(this,p,t,i,c,u,d,z,I,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const R=a.getX(m),A=a.getX(m+1),S=a.getX(m+2);s=Ao(this,o,t,i,c,u,d,R,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],p=o[m.materialIndex],R=Math.max(m.start,h.start),A=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=R,B=A;S<B;S+=3){const z=S,I=S+1,H=S+2;s=Ao(this,p,t,i,c,u,d,z,I,H),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=_,p=v;m<p;m+=3){const R=m,A=m+1,S=m+2;s=Ao(this,o,t,i,c,u,d,R,A,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function IM(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Gi,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:n}}function Ao(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,bo),n.getVertexPosition(c,Eo);const u=IM(n,t,e,i,So,bo,Eo,Yd);if(u){const d=new G;un.getBarycoord(Yd,So,bo,Eo,d),s&&(u.uv=un.getInterpolatedAttribute(s,a,l,c,d,new Xt)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,l,c,d,new Xt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,d,new G),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new G,materialIndex:0};un.getNormal(So,bo,Eo,f.normal),u.face=f,u.barycoord=d}return u}class lr extends Je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function _(v,m,p,R,A,S,B,z,I,H,C){const T=S/I,N=B/H,ut=S/2,nt=B/2,Q=z/2,W=I+1,et=H+1;let X=0,k=0;const vt=new G;for(let U=0;U<et;U++){const D=U*N-nt;for(let gt=0;gt<W;gt++){const wt=gt*T-ut;vt[v]=wt*R,vt[m]=D*A,vt[p]=Q,c.push(vt.x,vt.y,vt.z),vt[v]=0,vt[m]=0,vt[p]=z>0?1:-1,u.push(vt.x,vt.y,vt.z),d.push(gt/I),d.push(1-U/H),X+=1}}for(let U=0;U<H;U++)for(let D=0;D<I;D++){const gt=f+D+W*U,wt=f+D+W*(U+1),K=f+(D+1)+W*(U+1),dt=f+(D+1)+W*U;l.push(gt,wt,dt),l.push(wt,K,dt),k+=6}a.addGroup(h,k,C),h+=k,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=or(n[e]);for(const s in i)t[s]=i[s]}return t}function UM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Up(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const NM={clone:or,merge:qe};var OM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=UM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Np extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=_i}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new G,jd=new Xt,Kd=new Xt;class cn extends Np{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,jd,Kd),e.subVectors(Kd,jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Us=1;class BM extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Is,Us,t,e);s.layers=this.layers,this.add(s);const r=new cn(Is,Us,t,e);r.layers=this.layers,this.add(r);const o=new cn(Is,Us,t,e);o.layers=this.layers,this.add(o);const a=new cn(Is,Us,t,e);a.layers=this.layers,this.add(a);const l=new cn(Is,Us,t,e);l.layers=this.layers,this.add(l);const c=new cn(Is,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===_i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Op extends tn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zM extends ms{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Op(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Wi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Bi});r.uniforms.tEquirect.value=e;const o=new Rn(s,r),a=e.minFilter;return e.minFilter===us&&(e.minFilter=An),new BM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const vl=new G,kM=new G,VM=new Zt;class Ii{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vl.subVectors(i,e).cross(kM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||VM.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ji=new Da,Co=new G;class hu{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=_i){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],_=s[9],v=s[10],m=s[11],p=s[12],R=s[13],A=s[14],S=s[15];if(i[0].setComponents(l-r,f-c,m-h,S-p).normalize(),i[1].setComponents(l+r,f+c,m+h,S+p).normalize(),i[2].setComponents(l+o,f+u,m+_,S+R).normalize(),i[3].setComponents(l-o,f-u,m-_,S-R).normalize(),i[4].setComponents(l-a,f-d,m-v,S-A).normalize(),e===_i)i[5].setComponents(l+a,f+d,m+v,S+A).normalize();else if(e===aa)i[5].setComponents(a,d,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){return Ji.center.set(0,0,0),Ji.radius=.7071067811865476,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function HM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,_)=>h.start-_.start);let f=0;for(let h=1;h<d.length;h++){const _=d[f],v=d[h];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,_=d.length;h<_;h++){const v=d[h];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class eo extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const R=p*f-o;for(let A=0;A<c;A++){const S=A*d-r;_.push(S,-R,0),v.push(0,0,1),m.push(A/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<a;R++){const A=R+c*p,S=R+c*(p+1),B=R+1+c*(p+1),z=R+1+c*p;h.push(A,S,z),h.push(S,B,z)}this.setIndex(h),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var GM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WM=`#ifdef USE_ALPHAHASH
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
#endif`,XM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,YM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jM=`#ifdef USE_AOMAP
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
#endif`,KM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZM=`#ifdef USE_BATCHING
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
#endif`,JM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nS=`#ifdef USE_IRIDESCENCE
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
#endif`,iS=`#ifdef USE_BUMPMAP
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
#endif`,sS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fS=`#define PI 3.141592653589793
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
} // validated`,hS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pS=`vec3 transformedNormal = objectNormal;
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
#endif`,mS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_S=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xS="gl_FragColor = linearToOutputTexel( gl_FragColor );",yS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MS=`#ifdef USE_ENVMAP
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
#endif`,SS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bS=`#ifdef USE_ENVMAP
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
#endif`,ES=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PS=`#ifdef USE_GRADIENTMAP
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
}`,DS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,LS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,US=`uniform bool receiveShadow;
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
#endif`,NS=`#ifdef USE_ENVMAP
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
#endif`,OS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kS=`PhysicalMaterial material;
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
#endif`,VS=`struct PhysicalMaterial {
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
}`,HS=`
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
#endif`,GS=`#if defined( RE_IndirectDiffuse )
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
#endif`,WS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,KS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ZS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JS=`#if defined( USE_POINTS_UV )
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
#endif`,QS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ib=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sb=`#ifdef USE_MORPHTARGETS
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
#endif`,rb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ab=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ub=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,db=`#ifdef USE_NORMALMAP
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
#endif`,fb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ab=`float getShadowMask() {
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
}`,Cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rb=`#ifdef USE_SKINNING
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
#endif`,Pb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Db=`#ifdef USE_SKINNING
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
#endif`,Lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ob=`#ifdef USE_TRANSMISSION
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
#endif`,Fb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gb=`uniform sampler2D t2D;
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`#include <common>
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
}`,jb=`#if DEPTH_PACKING == 3200
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
}`,Kb=`#define DISTANCE
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
}`,Zb=`#define DISTANCE
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
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tE=`uniform float scale;
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
}`,eE=`uniform vec3 diffuse;
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
}`,nE=`#include <common>
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
}`,iE=`uniform vec3 diffuse;
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
}`,sE=`#define LAMBERT
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
}`,rE=`#define LAMBERT
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
}`,oE=`#define MATCAP
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
}`,aE=`#define MATCAP
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
}`,lE=`#define NORMAL
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
}`,cE=`#define NORMAL
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
}`,uE=`#define PHONG
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
}`,dE=`#define PHONG
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
}`,fE=`#define STANDARD
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
}`,hE=`#define STANDARD
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
}`,pE=`#define TOON
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
}`,mE=`#define TOON
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
}`,gE=`uniform float size;
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
}`,_E=`uniform vec3 diffuse;
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
}`,vE=`#include <common>
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
}`,xE=`uniform vec3 color;
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
}`,yE=`uniform float rotation;
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
}`,ME=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:GM,alphahash_pars_fragment:WM,alphamap_fragment:XM,alphamap_pars_fragment:$M,alphatest_fragment:qM,alphatest_pars_fragment:YM,aomap_fragment:jM,aomap_pars_fragment:KM,batching_pars_vertex:ZM,batching_vertex:JM,begin_vertex:QM,beginnormal_vertex:tS,bsdfs:eS,iridescence_fragment:nS,bumpmap_pars_fragment:iS,clipping_planes_fragment:sS,clipping_planes_pars_fragment:rS,clipping_planes_pars_vertex:oS,clipping_planes_vertex:aS,color_fragment:lS,color_pars_fragment:cS,color_pars_vertex:uS,color_vertex:dS,common:fS,cube_uv_reflection_fragment:hS,defaultnormal_vertex:pS,displacementmap_pars_vertex:mS,displacementmap_vertex:gS,emissivemap_fragment:_S,emissivemap_pars_fragment:vS,colorspace_fragment:xS,colorspace_pars_fragment:yS,envmap_fragment:MS,envmap_common_pars_fragment:SS,envmap_pars_fragment:bS,envmap_pars_vertex:ES,envmap_physical_pars_fragment:NS,envmap_vertex:TS,fog_vertex:wS,fog_pars_vertex:AS,fog_fragment:CS,fog_pars_fragment:RS,gradientmap_pars_fragment:PS,lightmap_pars_fragment:DS,lights_lambert_fragment:LS,lights_lambert_pars_fragment:IS,lights_pars_begin:US,lights_toon_fragment:OS,lights_toon_pars_fragment:FS,lights_phong_fragment:BS,lights_phong_pars_fragment:zS,lights_physical_fragment:kS,lights_physical_pars_fragment:VS,lights_fragment_begin:HS,lights_fragment_maps:GS,lights_fragment_end:WS,logdepthbuf_fragment:XS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:qS,logdepthbuf_vertex:YS,map_fragment:jS,map_pars_fragment:KS,map_particle_fragment:ZS,map_particle_pars_fragment:JS,metalnessmap_fragment:QS,metalnessmap_pars_fragment:tb,morphinstance_vertex:eb,morphcolor_vertex:nb,morphnormal_vertex:ib,morphtarget_pars_vertex:sb,morphtarget_vertex:rb,normal_fragment_begin:ob,normal_fragment_maps:ab,normal_pars_fragment:lb,normal_pars_vertex:cb,normal_vertex:ub,normalmap_pars_fragment:db,clearcoat_normal_fragment_begin:fb,clearcoat_normal_fragment_maps:hb,clearcoat_pars_fragment:pb,iridescence_pars_fragment:mb,opaque_fragment:gb,packing:_b,premultiplied_alpha_fragment:vb,project_vertex:xb,dithering_fragment:yb,dithering_pars_fragment:Mb,roughnessmap_fragment:Sb,roughnessmap_pars_fragment:bb,shadowmap_pars_fragment:Eb,shadowmap_pars_vertex:Tb,shadowmap_vertex:wb,shadowmask_pars_fragment:Ab,skinbase_vertex:Cb,skinning_pars_vertex:Rb,skinning_vertex:Pb,skinnormal_vertex:Db,specularmap_fragment:Lb,specularmap_pars_fragment:Ib,tonemapping_fragment:Ub,tonemapping_pars_fragment:Nb,transmission_fragment:Ob,transmission_pars_fragment:Fb,uv_pars_fragment:Bb,uv_pars_vertex:zb,uv_vertex:kb,worldpos_vertex:Vb,background_vert:Hb,background_frag:Gb,backgroundCube_vert:Wb,backgroundCube_frag:Xb,cube_vert:$b,cube_frag:qb,depth_vert:Yb,depth_frag:jb,distanceRGBA_vert:Kb,distanceRGBA_frag:Zb,equirect_vert:Jb,equirect_frag:Qb,linedashed_vert:tE,linedashed_frag:eE,meshbasic_vert:nE,meshbasic_frag:iE,meshlambert_vert:sE,meshlambert_frag:rE,meshmatcap_vert:oE,meshmatcap_frag:aE,meshnormal_vert:lE,meshnormal_frag:cE,meshphong_vert:uE,meshphong_frag:dE,meshphysical_vert:fE,meshphysical_frag:hE,meshtoon_vert:pE,meshtoon_frag:mE,points_vert:gE,points_frag:_E,shadow_vert:vE,shadow_frag:xE,sprite_vert:yE,sprite_frag:ME},Rt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Gn={basic:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([Rt.points,Rt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([Rt.common,Rt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([Rt.sprite,Rt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:qe([Rt.common,Rt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:qe([Rt.lights,Rt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Gn.physical={uniforms:qe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Ro={r:0,b:0,g:0},Qi=new Zn,SE=new ve;function bE(n,t,e,i,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function _(R){let A=R.isScene===!0?R.background:null;return A&&A.isTexture&&(A=(R.backgroundBlurriness>0?e:t).get(A)),A}function v(R){let A=!1;const S=_(R);S===null?p(a,l):S&&S.isColor&&(p(S,1),A=!0);const B=n.xr.getEnvironmentBlendMode();B==="additive"?i.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(R,A){const S=_(A);S&&(S.isCubeTexture||S.mapping===Ra)?(u===void 0&&(u=new Rn(new lr(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(B,z,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qi.copy(A.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(SE.makeRotationFromEuler(Qi)),u.material.toneMapped=te.getTransfer(S.colorSpace)!==de,(d!==S||f!==S.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Rn(new eo(2,2),new Wi({name:"BackgroundMaterial",uniforms:or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Gi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=te.getTransfer(S.colorSpace)!==de,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function p(R,A){R.getRGB(Ro,Up(n)),i.buffers.color.setClear(Ro.r,Ro.g,Ro.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(R,A=1){a.set(R),l=A,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,p(a,l)},render:v,addToRenderList:m}}function EE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,N,ut,nt,Q){let W=!1;const et=d(nt,ut,N);r!==et&&(r=et,c(r.object)),W=h(T,nt,ut,Q),W&&_(T,nt,ut,Q),Q!==null&&t.update(Q,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,S(T,N,ut,nt),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function d(T,N,ut){const nt=ut.wireframe===!0;let Q=i[T.id];Q===void 0&&(Q={},i[T.id]=Q);let W=Q[N.id];W===void 0&&(W={},Q[N.id]=W);let et=W[nt];return et===void 0&&(et=f(l()),W[nt]=et),et}function f(T){const N=[],ut=[],nt=[];for(let Q=0;Q<e;Q++)N[Q]=0,ut[Q]=0,nt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:ut,attributeDivisors:nt,object:T,attributes:{},index:null}}function h(T,N,ut,nt){const Q=r.attributes,W=N.attributes;let et=0;const X=ut.getAttributes();for(const k in X)if(X[k].location>=0){const U=Q[k];let D=W[k];if(D===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(D=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(D=T.instanceColor)),U===void 0||U.attribute!==D||D&&U.data!==D.data)return!0;et++}return r.attributesNum!==et||r.index!==nt}function _(T,N,ut,nt){const Q={},W=N.attributes;let et=0;const X=ut.getAttributes();for(const k in X)if(X[k].location>=0){let U=W[k];U===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const D={};D.attribute=U,U&&U.data&&(D.data=U.data),Q[k]=D,et++}r.attributes=Q,r.attributesNum=et,r.index=nt}function v(){const T=r.newAttributes;for(let N=0,ut=T.length;N<ut;N++)T[N]=0}function m(T){p(T,0)}function p(T,N){const ut=r.newAttributes,nt=r.enabledAttributes,Q=r.attributeDivisors;ut[T]=1,nt[T]===0&&(n.enableVertexAttribArray(T),nt[T]=1),Q[T]!==N&&(n.vertexAttribDivisor(T,N),Q[T]=N)}function R(){const T=r.newAttributes,N=r.enabledAttributes;for(let ut=0,nt=N.length;ut<nt;ut++)N[ut]!==T[ut]&&(n.disableVertexAttribArray(ut),N[ut]=0)}function A(T,N,ut,nt,Q,W,et){et===!0?n.vertexAttribIPointer(T,N,ut,Q,W):n.vertexAttribPointer(T,N,ut,nt,Q,W)}function S(T,N,ut,nt){v();const Q=nt.attributes,W=ut.getAttributes(),et=N.defaultAttributeValues;for(const X in W){const k=W[X];if(k.location>=0){let vt=Q[X];if(vt===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(vt=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(vt=T.instanceColor)),vt!==void 0){const U=vt.normalized,D=vt.itemSize,gt=t.get(vt);if(gt===void 0)continue;const wt=gt.buffer,K=gt.type,dt=gt.bytesPerElement,_t=K===n.INT||K===n.UNSIGNED_INT||vt.gpuType===ou;if(vt.isInterleavedBufferAttribute){const L=vt.data,tt=L.stride,st=vt.offset;if(L.isInstancedInterleavedBuffer){for(let mt=0;mt<k.locationSize;mt++)p(k.location+mt,L.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let mt=0;mt<k.locationSize;mt++)m(k.location+mt);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let mt=0;mt<k.locationSize;mt++)A(k.location+mt,D/k.locationSize,K,U,tt*dt,(st+D/k.locationSize*mt)*dt,_t)}else{if(vt.isInstancedBufferAttribute){for(let L=0;L<k.locationSize;L++)p(k.location+L,vt.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let L=0;L<k.locationSize;L++)m(k.location+L);n.bindBuffer(n.ARRAY_BUFFER,wt);for(let L=0;L<k.locationSize;L++)A(k.location+L,D/k.locationSize,K,U,D*dt,D/k.locationSize*L*dt,_t)}}else if(et!==void 0){const U=et[X];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(k.location,U);break;case 3:n.vertexAttrib3fv(k.location,U);break;case 4:n.vertexAttrib4fv(k.location,U);break;default:n.vertexAttrib1fv(k.location,U)}}}}R()}function B(){H();for(const T in i){const N=i[T];for(const ut in N){const nt=N[ut];for(const Q in nt)u(nt[Q].object),delete nt[Q];delete N[ut]}delete i[T]}}function z(T){if(i[T.id]===void 0)return;const N=i[T.id];for(const ut in N){const nt=N[ut];for(const Q in nt)u(nt[Q].object),delete nt[Q];delete N[ut]}delete i[T.id]}function I(T){for(const N in i){const ut=i[N];if(ut[T.id]===void 0)continue;const nt=ut[T.id];for(const Q in nt)u(nt[Q].object),delete nt[Q];delete ut[T.id]}}function H(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:H,resetDefaultState:C,dispose:B,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:R}}function TE(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let _=0;_<d;_++)h+=u[_];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wE(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const H=I===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==yi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==gi&&!H)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,z=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:B,maxSamples:z}}function AE(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ii,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const R=r?0:i,A=R*4;let S=p.clippingState||null;l.value=S,S=u(_,f,A,h);for(let B=0;B!==A;++B)S[B]=e[B];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const p=h+v*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,S=h;A!==v;++A,S+=4)o.copy(d[A]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function CE(n){let t=new WeakMap;function e(o,a){return a===rc?o.mapping=nr:a===oc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Bp extends Np{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ws=4,Zd=[.125,.215,.35,.446,.526,.582],rs=20,xl=new Bp,Jd=new $t;let yl=null,Ml=0,Sl=0,bl=!1;const ns=(1+Math.sqrt(5))/2,Ns=1/ns,Qd=[new G(-ns,Ns,0),new G(ns,Ns,0),new G(-Ns,0,ns),new G(Ns,0,ns),new G(0,ns,-Ns),new G(0,ns,Ns),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Ml,Sl),this._renderer.xr.enabled=bl,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Qr,format:Cn,colorSpace:ar,depthBuffer:!1},s=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RE(r)),this._blurMaterial=PE(r,t,e)}return s}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,i,s){const a=new cn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jd),u.toneMapping=zi,u.autoClear=!1;const h=new Dp({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Rn(new lr,h);let v=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,v=!0):(h.color.copy(Jd),v=!0);for(let p=0;p<6;p++){const R=p%3;R===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):R===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const A=this._cubeSize;Po(s,R*A,p>2?A:0,A,A),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Po(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,xl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qd[(s-r-1)%Qd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Rn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*rs-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let R=0;for(let I=0;I<rs;++I){const H=I/v,C=Math.exp(-H*H/2);p.push(C),I===0?R+=C:I<m&&(R+=2*C)}for(let I=0;I<p.length;I++)p[I]=p[I]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:A}=this;f.dTheta.value=_,f.mipInt.value=A-i;const S=this._sizeLods[s],B=3*S*(s>A-Ws?s-A+Ws:0),z=4*(this._cubeSize-S);Po(e,B,z,3*S,2*S),l.setRenderTarget(e),l.render(d,xl)}}function RE(n){const t=[],e=[],i=[];let s=n;const r=n-Ws+1+Zd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ws?l=Zd[o-n+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,_=6,v=3,m=2,p=1,R=new Float32Array(v*_*h),A=new Float32Array(m*_*h),S=new Float32Array(p*_*h);for(let z=0;z<h;z++){const I=z%3*2/3-1,H=z>2?0:-1,C=[I,H,0,I+2/3,H,0,I+2/3,H+1,0,I,H,0,I+2/3,H+1,0,I,H+1,0];R.set(C,v*_*z),A.set(f,m*_*z);const T=[z,z,z,z,z,z];S.set(T,p*_*z)}const B=new Je;B.setAttribute("position",new In(R,v)),B.setAttribute("uv",new In(A,m)),B.setAttribute("faceIndex",new In(S,p)),t.push(B),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ef(n,t,e){const i=new ms(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function PE(n,t,e){const i=new Float32Array(rs),s=new G(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function nf(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function sf(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function DE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===oc,u=l===nr||l===ir;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function LE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function IE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const _ in h){const v=h[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,_=d.attributes.position;let v=0;if(h!==null){const R=h.array;v=h.version;for(let A=0,S=R.length;A<S;A+=3){const B=R[A+0],z=R[A+1],I=R[A+2];f.push(B,z,z,I,I,B)}}else if(_!==void 0){const R=_.array;v=_.version;for(let A=0,S=R.length/3-1;A<S;A+=3){const B=A+0,z=A+1,I=A+2;f.push(B,z,z,I,I,B)}}else return;const m=new(Ap(f)?Ip:Lp)(f,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function UE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,_){_!==0&&(n.drawElementsInstanced(i,h,r,f*o,_),e.update(h,i,_))}function u(f,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=h[p];e.update(m,i,1)}function d(f,h,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,v,0,_);let p=0;for(let R=0;R<_;R++)p+=h[R]*v[R];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function NE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function OE(n,t,e){const i=new WeakMap,s=new pe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){H.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var h=T;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let B=a.attributes.position.count*S,z=1;B>t.maxTextureSize&&(z=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const I=new Float32Array(B*z*4*d),H=new Rp(I,B,z,d);H.type=gi,H.needsUpdate=!0;const C=S*4;for(let N=0;N<d;N++){const ut=p[N],nt=R[N],Q=A[N],W=B*z*4*N;for(let et=0;et<ut.count;et++){const X=et*C;_===!0&&(s.fromBufferAttribute(ut,et),I[W+X+0]=s.x,I[W+X+1]=s.y,I[W+X+2]=s.z,I[W+X+3]=0),v===!0&&(s.fromBufferAttribute(nt,et),I[W+X+4]=s.x,I[W+X+5]=s.y,I[W+X+6]=s.z,I[W+X+7]=0),m===!0&&(s.fromBufferAttribute(Q,et),I[W+X+8]=s.x,I[W+X+9]=s.y,I[W+X+10]=s.z,I[W+X+11]=Q.itemSize===4?s.w:1)}}f={count:d,texture:H,size:new Xt(B,z)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function FE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class zp extends tn{constructor(t,e,i,s,r,o,a,l,c,u=js){if(u!==js&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=ps),i===void 0&&u===rr&&(i=sr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kp=new tn,rf=new zp(1,1),Vp=new Rp,Hp=new bM,Gp=new Op,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function cr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function BE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function kE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function VE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function HE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),De(e,i)}}function GE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),De(e,i)}}function WE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),De(e,i)}}function XE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function qE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function YE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function jE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function KE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function ZE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function JE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function QE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=wp,r=rf):r=kp,e.setTexture2D(t||r,s)}function t1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hp,s)}function e1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gp,s)}function n1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function i1(n){switch(n){case 5126:return BE;case 35664:return zE;case 35665:return kE;case 35666:return VE;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return $E;case 35668:case 35672:return qE;case 35669:case 35673:return YE;case 5125:return jE;case 36294:return KE;case 36295:return ZE;case 36296:return JE;case 35678:case 36198:case 36298:case 36306:case 35682:return QE;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return e1;case 36289:case 36303:case 36311:case 36292:return n1}}function s1(n,t){n.uniform1fv(this.addr,t)}function r1(n,t){const e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function o1(n,t){const e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function a1(n,t){const e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function l1(n,t){const e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function c1(n,t){const e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function u1(n,t){const e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function d1(n,t){n.uniform1iv(this.addr,t)}function f1(n,t){n.uniform2iv(this.addr,t)}function h1(n,t){n.uniform3iv(this.addr,t)}function p1(n,t){n.uniform4iv(this.addr,t)}function m1(n,t){n.uniform1uiv(this.addr,t)}function g1(n,t){n.uniform2uiv(this.addr,t)}function _1(n,t){n.uniform3uiv(this.addr,t)}function v1(n,t){n.uniform4uiv(this.addr,t)}function x1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kp,r[o])}function y1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hp,r[o])}function M1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gp,r[o])}function S1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function b1(n){switch(n){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return a1;case 35674:return l1;case 35675:return c1;case 35676:return u1;case 5124:case 35670:return d1;case 35667:case 35671:return f1;case 35668:case 35672:return h1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return _1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return x1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return S1}}class E1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=i1(e.type)}}class T1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=b1(e.type)}}class w1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const El=/(\w+)(\])?(\[|\.)?/g;function df(n,t){n.seq.push(t),n.map[t.id]=t}function A1(n,t,e){const i=n.name,s=i.length;for(El.lastIndex=0;;){const r=El.exec(i),o=El.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(e,c===void 0?new E1(a,n,t):new T1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new w1(a),df(e,d)),e=d}}}class Zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);A1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ff(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const C1=37297;let R1=0;function P1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const hf=new Zt;function D1(n){te._getMatrix(hf,te.workingColorSpace,n);const t=`mat3( ${hf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+P1(n.getShaderSource(t),o)}else return s}function L1(n,t){const e=D1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I1(n,t){let e;switch(t){case jy:e="Linear";break;case Ky:e="Reinhard";break;case Zy:e="Cineon";break;case Jy:e="ACESFilmic";break;case tM:e="AgX";break;case eM:e="Neutral";break;case Qy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new G;function U1(){te.getLuminanceCoefficients(Do);const n=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function O1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function F1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function mf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(B1,k1)}const z1=new Map;function k1(n,t){let e=Jt[t];if(e===void 0){const i=z1.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const V1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(n){return n.replace(V1,H1)}function H1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function G1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===li&&(t="SHADOWMAP_TYPE_VSM"),t}function W1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function $1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hp:t="ENVMAP_BLENDING_MULTIPLY";break;case qy:t="ENVMAP_BLENDING_MIX";break;case Yy:t="ENVMAP_BLENDING_ADD";break}return t}function q1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Y1(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=G1(e),c=W1(e),u=X1(e),d=$1(e),f=q1(e),h=N1(e),_=O1(r),v=s.createProgram();let m,p,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zi?"#define TONE_MAPPING":"",e.toneMapping!==zi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==zi?I1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,L1("linearToOutputTexel",e.outputColorSpace),U1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Fc(o),o=mf(o,e),o=gf(o,e),a=Fc(a),a=mf(a,e),a=gf(a,e),o=_f(o),a=_f(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const A=R+m+o,S=R+p+a,B=ff(s,s.VERTEX_SHADER,A),z=ff(s,s.FRAGMENT_SHADER,S);s.attachShader(v,B),s.attachShader(v,z),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(N){if(n.debug.checkShaderErrors){const ut=s.getProgramInfoLog(v).trim(),nt=s.getShaderInfoLog(B).trim(),Q=s.getShaderInfoLog(z).trim();let W=!0,et=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,B,z);else{const X=pf(s,B,"vertex"),k=pf(s,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ut+`
`+X+`
`+k)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(nt===""||Q==="")&&(et=!1);et&&(N.diagnostics={runnable:W,programLog:ut,vertexShader:{log:nt,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(B),s.deleteShader(z),H=new Zo(s,v),C=F1(s,v)}let H;this.getUniforms=function(){return H===void 0&&I(this),H};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,C1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=z,this}let j1=0;class K1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Z1(t),e.set(t,i)),i}}class Z1{constructor(t){this.id=j1++,this.code=t,this.usedTimes=0}}function J1(n,t,e,i,s,r,o){const a=new fu,l=new K1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,T,N,ut,nt){const Q=ut.fog,W=nt.geometry,et=C.isMeshStandardMaterial?ut.environment:null,X=(C.isMeshStandardMaterial?e:t).get(C.envMap||et),k=X&&X.mapping===Ra?X.image.height:null,vt=_[C.type];C.precision!==null&&(h=s.getMaxPrecision(C.precision),h!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",h,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,D=U!==void 0?U.length:0;let gt=0;W.morphAttributes.position!==void 0&&(gt=1),W.morphAttributes.normal!==void 0&&(gt=2),W.morphAttributes.color!==void 0&&(gt=3);let wt,K,dt,_t;if(vt){const le=Gn[vt];wt=le.vertexShader,K=le.fragmentShader}else wt=C.vertexShader,K=C.fragmentShader,l.update(C),dt=l.getVertexShaderID(C),_t=l.getFragmentShaderID(C);const L=n.getRenderTarget(),tt=n.state.buffers.depth.getReversed(),st=nt.isInstancedMesh===!0,mt=nt.isBatchedMesh===!0,E=!!C.map,P=!!C.matcap,F=!!X,b=!!C.aoMap,J=!!C.lightMap,Z=!!C.bumpMap,rt=!!C.normalMap,ot=!!C.displacementMap,Y=!!C.emissiveMap,y=!!C.metalnessMap,x=!!C.roughnessMap,g=C.anisotropy>0,O=C.clearcoat>0,j=C.dispersion>0,at=C.iridescence>0,it=C.sheen>0,pt=C.transmission>0,ht=g&&!!C.anisotropyMap,bt=O&&!!C.clearcoatMap,It=O&&!!C.clearcoatNormalMap,yt=O&&!!C.clearcoatRoughnessMap,Tt=at&&!!C.iridescenceMap,Ot=at&&!!C.iridescenceThicknessMap,Lt=it&&!!C.sheenColorMap,St=it&&!!C.sheenRoughnessMap,Nt=!!C.specularMap,Ut=!!C.specularColorMap,ne=!!C.specularIntensityMap,V=pt&&!!C.transmissionMap,Mt=pt&&!!C.thicknessMap,ft=!!C.gradientMap,xt=!!C.alphaMap,Pt=C.alphaTest>0,Ct=!!C.alphaHash,jt=!!C.extensions;let Me=zi;C.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Me=n.toneMapping);const ze={shaderID:vt,shaderType:C.type,shaderName:C.name,vertexShader:wt,fragmentShader:K,defines:C.defines,customVertexShaderID:dt,customFragmentShaderID:_t,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:h,batching:mt,batchingColor:mt&&nt._colorsTexture!==null,instancing:st,instancingColor:st&&nt.instanceColor!==null,instancingMorph:st&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:L===null?n.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:ar,alphaToCoverage:!!C.alphaToCoverage,map:E,matcap:P,envMap:F,envMapMode:F&&X.mapping,envMapCubeUVHeight:k,aoMap:b,lightMap:J,bumpMap:Z,normalMap:rt,displacementMap:f&&ot,emissiveMap:Y,normalMapObjectSpace:rt&&C.normalMapType===rM,normalMapTangentSpace:rt&&C.normalMapType===Tp,metalnessMap:y,roughnessMap:x,anisotropy:g,anisotropyMap:ht,clearcoat:O,clearcoatMap:bt,clearcoatNormalMap:It,clearcoatRoughnessMap:yt,dispersion:j,iridescence:at,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:it,sheenColorMap:Lt,sheenRoughnessMap:St,specularMap:Nt,specularColorMap:Ut,specularIntensityMap:ne,transmission:pt,transmissionMap:V,thicknessMap:Mt,gradientMap:ft,opaque:C.transparent===!1&&C.blending===Ys&&C.alphaToCoverage===!1,alphaMap:xt,alphaTest:Pt,alphaHash:Ct,combine:C.combine,mapUv:E&&v(C.map.channel),aoMapUv:b&&v(C.aoMap.channel),lightMapUv:J&&v(C.lightMap.channel),bumpMapUv:Z&&v(C.bumpMap.channel),normalMapUv:rt&&v(C.normalMap.channel),displacementMapUv:ot&&v(C.displacementMap.channel),emissiveMapUv:Y&&v(C.emissiveMap.channel),metalnessMapUv:y&&v(C.metalnessMap.channel),roughnessMapUv:x&&v(C.roughnessMap.channel),anisotropyMapUv:ht&&v(C.anisotropyMap.channel),clearcoatMapUv:bt&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:It&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(C.sheenRoughnessMap.channel),specularMapUv:Nt&&v(C.specularMap.channel),specularColorMapUv:Ut&&v(C.specularColorMap.channel),specularIntensityMapUv:ne&&v(C.specularIntensityMap.channel),transmissionMapUv:V&&v(C.transmissionMap.channel),thicknessMapUv:Mt&&v(C.thicknessMap.channel),alphaMapUv:xt&&v(C.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(rt||g),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!W.attributes.uv&&(E||xt),fog:!!Q,useFog:C.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:tt,skinning:nt.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:E&&C.map.isVideoTexture===!0&&te.getTransfer(C.map.colorSpace)===de,decodeVideoTextureEmissive:Y&&C.emissiveMap.isVideoTexture===!0&&te.getTransfer(C.emissiveMap.colorSpace)===de,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===mi,flipSided:C.side===rn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:jt&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&C.extensions.multiDraw===!0||mt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function p(C){const T=[];if(C.shaderID?T.push(C.shaderID):(T.push(C.customVertexShaderID),T.push(C.customFragmentShaderID)),C.defines!==void 0)for(const N in C.defines)T.push(N),T.push(C.defines[N]);return C.isRawShaderMaterial===!1&&(R(T,C),A(T,C),T.push(n.outputColorSpace)),T.push(C.customProgramCacheKey),T.join()}function R(C,T){C.push(T.precision),C.push(T.outputColorSpace),C.push(T.envMapMode),C.push(T.envMapCubeUVHeight),C.push(T.mapUv),C.push(T.alphaMapUv),C.push(T.lightMapUv),C.push(T.aoMapUv),C.push(T.bumpMapUv),C.push(T.normalMapUv),C.push(T.displacementMapUv),C.push(T.emissiveMapUv),C.push(T.metalnessMapUv),C.push(T.roughnessMapUv),C.push(T.anisotropyMapUv),C.push(T.clearcoatMapUv),C.push(T.clearcoatNormalMapUv),C.push(T.clearcoatRoughnessMapUv),C.push(T.iridescenceMapUv),C.push(T.iridescenceThicknessMapUv),C.push(T.sheenColorMapUv),C.push(T.sheenRoughnessMapUv),C.push(T.specularMapUv),C.push(T.specularColorMapUv),C.push(T.specularIntensityMapUv),C.push(T.transmissionMapUv),C.push(T.thicknessMapUv),C.push(T.combine),C.push(T.fogExp2),C.push(T.sizeAttenuation),C.push(T.morphTargetsCount),C.push(T.morphAttributeCount),C.push(T.numDirLights),C.push(T.numPointLights),C.push(T.numSpotLights),C.push(T.numSpotLightMaps),C.push(T.numHemiLights),C.push(T.numRectAreaLights),C.push(T.numDirLightShadows),C.push(T.numPointLightShadows),C.push(T.numSpotLightShadows),C.push(T.numSpotLightShadowsWithMaps),C.push(T.numLightProbes),C.push(T.shadowMapType),C.push(T.toneMapping),C.push(T.numClippingPlanes),C.push(T.numClipIntersection),C.push(T.depthPacking)}function A(C,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),C.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),C.push(a.mask)}function S(C){const T=_[C.type];let N;if(T){const ut=Gn[T];N=NM.clone(ut.uniforms)}else N=C.uniforms;return N}function B(C,T){let N;for(let ut=0,nt=u.length;ut<nt;ut++){const Q=u[ut];if(Q.cacheKey===T){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new Y1(n,T,C,r),u.push(N)),N}function z(C){if(--C.usedTimes===0){const T=u.indexOf(C);u[T]=u[u.length-1],u.pop(),C.destroy()}}function I(C){l.remove(C)}function H(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:B,releaseProgram:z,releaseShaderCache:I,programs:u,dispose:H}}function Q1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function tT(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,h,_,v,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function a(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(d,f,h,_,v,m){const p=o(d,f,h,_,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||tT),i.length>1&&i.sort(f||xf),s.length>1&&s.sort(f||xf)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function eT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function nT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new $t};break;case"SpotLight":e={position:new G,direction:new G,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new G,halfWidth:new G,halfHeight:new G};break}return n[t.id]=e,e}}}function iT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let sT=0;function rT(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function oT(n){const t=new nT,e=iT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const s=new G,r=new ve,o=new ve;function a(c){let u=0,d=0,f=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,_=0,v=0,m=0,p=0,R=0,A=0,S=0,B=0,z=0,I=0;c.sort(rT);for(let C=0,T=c.length;C<T;C++){const N=c[C],ut=N.color,nt=N.intensity,Q=N.distance,W=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=ut.r*nt,d+=ut.g*nt,f+=ut.b*nt;else if(N.isLightProbe){for(let et=0;et<9;et++)i.probe[et].addScaledVector(N.sh.coefficients[et],nt);I++}else if(N.isDirectionalLight){const et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const X=N.shadow,k=e.get(N);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=W,i.directionalShadowMatrix[h]=N.shadow.matrix,R++}i.directional[h]=et,h++}else if(N.isSpotLight){const et=t.get(N);et.position.setFromMatrixPosition(N.matrixWorld),et.color.copy(ut).multiplyScalar(nt),et.distance=Q,et.coneCos=Math.cos(N.angle),et.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),et.decay=N.decay,i.spot[v]=et;const X=N.shadow;if(N.map&&(i.spotLightMap[B]=N.map,B++,X.updateMatrices(N),N.castShadow&&z++),i.spotLightMatrix[v]=X.matrix,N.castShadow){const k=e.get(N);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=W,S++}v++}else if(N.isRectAreaLight){const et=t.get(N);et.color.copy(ut).multiplyScalar(nt),et.halfWidth.set(N.width*.5,0,0),et.halfHeight.set(0,N.height*.5,0),i.rectArea[m]=et,m++}else if(N.isPointLight){const et=t.get(N);if(et.color.copy(N.color).multiplyScalar(N.intensity),et.distance=N.distance,et.decay=N.decay,N.castShadow){const X=N.shadow,k=e.get(N);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=N.shadow.matrix,A++}i.point[_]=et,_++}else if(N.isHemisphereLight){const et=t.get(N);et.skyColor.copy(N.color).multiplyScalar(nt),et.groundColor.copy(N.groundColor).multiplyScalar(nt),i.hemi[p]=et,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Rt.LTC_FLOAT_1,i.rectAreaLTC2=Rt.LTC_FLOAT_2):(i.rectAreaLTC1=Rt.LTC_HALF_1,i.rectAreaLTC2=Rt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const H=i.hash;(H.directionalLength!==h||H.pointLength!==_||H.spotLength!==v||H.rectAreaLength!==m||H.hemiLength!==p||H.numDirectionalShadows!==R||H.numPointShadows!==A||H.numSpotShadows!==S||H.numSpotMaps!==B||H.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+B-z,i.spotLightMap.length=B,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=I,H.directionalLength=h,H.pointLength=_,H.spotLength=v,H.rectAreaLength=m,H.hemiLength=p,H.numDirectionalShadows=R,H.numPointShadows=A,H.numSpotShadows=S,H.numSpotMaps=B,H.numLightProbes=I,i.version=sT++)}function l(c,u){let d=0,f=0,h=0,_=0,v=0;const m=u.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){const A=c[p];if(A.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(A.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),h++}else if(A.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(A.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(m),f++}else if(A.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Mf(n){const t=new oT(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function aT(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mf(n),t.set(s,[a])):r>=o.length?(a=new Mf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class lT extends xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class cT extends xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const uT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dT=`uniform sampler2D shadow_pass;
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
}`;function fT(n,t,e){let i=new hu;const s=new Xt,r=new Xt,o=new pe,a=new lT({depthPacking:sM}),l=new cT,c={},u=e.maxTextureSize,d={[Gi]:rn,[rn]:Gi,[mi]:mi},f=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:uT,fragmentShader:dT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let p=this.type;this.render=function(z,I,H){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||z.length===0)return;const C=n.getRenderTarget(),T=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),ut=n.state;ut.setBlending(Bi),ut.buffers.color.setClear(1,1,1,1),ut.buffers.depth.setTest(!0),ut.setScissorTest(!1);const nt=p!==li&&this.type===li,Q=p===li&&this.type!==li;for(let W=0,et=z.length;W<et;W++){const X=z[W],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const vt=k.getFrameExtents();if(s.multiply(vt),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/vt.x),s.x=r.x*vt.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/vt.y),s.y=r.y*vt.y,k.mapSize.y=r.y)),k.map===null||nt===!0||Q===!0){const D=this.type!==li?{minFilter:Ln,magFilter:Ln}:{};k.map!==null&&k.map.dispose(),k.map=new ms(s.x,s.y,D),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const U=k.getViewportCount();for(let D=0;D<U;D++){const gt=k.getViewport(D);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),ut.viewport(o),k.updateMatrices(X,D),i=k.getFrustum(),S(I,H,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===li&&R(k,H),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,T,N)};function R(z,I){const H=t.update(v);f.defines.VSM_SAMPLES!==z.blurSamples&&(f.defines.VSM_SAMPLES=z.blurSamples,h.defines.VSM_SAMPLES=z.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new ms(s.x,s.y)),f.uniforms.shadow_pass.value=z.map.texture,f.uniforms.resolution.value=z.mapSize,f.uniforms.radius.value=z.radius,n.setRenderTarget(z.mapPass),n.clear(),n.renderBufferDirect(I,null,H,f,v,null),h.uniforms.shadow_pass.value=z.mapPass.texture,h.uniforms.resolution.value=z.mapSize,h.uniforms.radius.value=z.radius,n.setRenderTarget(z.map),n.clear(),n.renderBufferDirect(I,null,H,h,v,null)}function A(z,I,H,C){let T=null;const N=H.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(N!==void 0)T=N;else if(T=H.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ut=T.uuid,nt=I.uuid;let Q=c[ut];Q===void 0&&(Q={},c[ut]=Q);let W=Q[nt];W===void 0&&(W=T.clone(),Q[nt]=W,I.addEventListener("dispose",B)),T=W}if(T.visible=I.visible,T.wireframe=I.wireframe,C===li?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:d[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,H.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ut=n.properties.get(T);ut.light=H}return T}function S(z,I,H,C,T){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&T===li)&&(!z.frustumCulled||i.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,z.matrixWorld);const nt=t.update(z),Q=z.material;if(Array.isArray(Q)){const W=nt.groups;for(let et=0,X=W.length;et<X;et++){const k=W[et],vt=Q[k.materialIndex];if(vt&&vt.visible){const U=A(z,vt,C,T);z.onBeforeShadow(n,z,I,H,nt,U,k),n.renderBufferDirect(H,null,nt,U,z,k),z.onAfterShadow(n,z,I,H,nt,U,k)}}}else if(Q.visible){const W=A(z,Q,C,T);z.onBeforeShadow(n,z,I,H,nt,W,null),n.renderBufferDirect(H,null,nt,W,z,null),z.onAfterShadow(n,z,I,H,nt,W,null)}}const ut=z.children;for(let nt=0,Q=ut.length;nt<Q;nt++)S(ut[nt],I,H,C,T)}function B(z){z.target.removeEventListener("dispose",B);for(const H in c){const C=c[H],T=z.target.uuid;T in C&&(C[T].dispose(),delete C[T])}}}const hT={[Jl]:Ql,[tc]:ic,[ec]:sc,[er]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:er};function pT(n,t){function e(){let V=!1;const Mt=new pe;let ft=null;const xt=new pe(0,0,0,0);return{setMask:function(Pt){ft!==Pt&&!V&&(n.colorMask(Pt,Pt,Pt,Pt),ft=Pt)},setLocked:function(Pt){V=Pt},setClear:function(Pt,Ct,jt,Me,ze){ze===!0&&(Pt*=Me,Ct*=Me,jt*=Me),Mt.set(Pt,Ct,jt,Me),xt.equals(Mt)===!1&&(n.clearColor(Pt,Ct,jt,Me),xt.copy(Mt))},reset:function(){V=!1,ft=null,xt.set(-1,0,0,0)}}}function i(){let V=!1,Mt=!1,ft=null,xt=null,Pt=null;return{setReversed:function(Ct){if(Mt!==Ct){const jt=t.get("EXT_clip_control");Mt?jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.ZERO_TO_ONE_EXT):jt.clipControlEXT(jt.LOWER_LEFT_EXT,jt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Pt;Pt=null,this.setClear(Me)}Mt=Ct},getReversed:function(){return Mt},setTest:function(Ct){Ct?L(n.DEPTH_TEST):tt(n.DEPTH_TEST)},setMask:function(Ct){ft!==Ct&&!V&&(n.depthMask(Ct),ft=Ct)},setFunc:function(Ct){if(Mt&&(Ct=hT[Ct]),xt!==Ct){switch(Ct){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ct}},setLocked:function(Ct){V=Ct},setClear:function(Ct){Pt!==Ct&&(Mt&&(Ct=1-Ct),n.clearDepth(Ct),Pt=Ct)},reset:function(){V=!1,ft=null,xt=null,Pt=null,Mt=!1}}}function s(){let V=!1,Mt=null,ft=null,xt=null,Pt=null,Ct=null,jt=null,Me=null,ze=null;return{setTest:function(le){V||(le?L(n.STENCIL_TEST):tt(n.STENCIL_TEST))},setMask:function(le){Mt!==le&&!V&&(n.stencilMask(le),Mt=le)},setFunc:function(le,Mn,Jn){(ft!==le||xt!==Mn||Pt!==Jn)&&(n.stencilFunc(le,Mn,Jn),ft=le,xt=Mn,Pt=Jn)},setOp:function(le,Mn,Jn){(Ct!==le||jt!==Mn||Me!==Jn)&&(n.stencilOp(le,Mn,Jn),Ct=le,jt=Mn,Me=Jn)},setLocked:function(le){V=le},setClear:function(le){ze!==le&&(n.clearStencil(le),ze=le)},reset:function(){V=!1,Mt=null,ft=null,xt=null,Pt=null,Ct=null,jt=null,Me=null,ze=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,R=null,A=null,S=null,B=null,z=null,I=new $t(0,0,0),H=0,C=!1,T=null,N=null,ut=null,nt=null,Q=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,X=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),et=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),et=X>=2);let vt=null,U={};const D=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),wt=new pe().fromArray(D),K=new pe().fromArray(gt);function dt(V,Mt,ft,xt){const Pt=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(V,Ct),n.texParameteri(V,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(V,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<ft;jt++)V===n.TEXTURE_3D||V===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Pt):n.texImage2D(Mt+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Pt);return Ct}const _t={};_t[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),L(n.DEPTH_TEST),o.setFunc(er),Z(!1),rt(Td),L(n.CULL_FACE),b(Bi);function L(V){u[V]!==!0&&(n.enable(V),u[V]=!0)}function tt(V){u[V]!==!1&&(n.disable(V),u[V]=!1)}function st(V,Mt){return d[V]!==Mt?(n.bindFramebuffer(V,Mt),d[V]=Mt,V===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Mt),V===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function mt(V,Mt){let ft=h,xt=!1;if(V){ft=f.get(Mt),ft===void 0&&(ft=[],f.set(Mt,ft));const Pt=V.textures;if(ft.length!==Pt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,jt=Pt.length;Ct<jt;Ct++)ft[Ct]=n.COLOR_ATTACHMENT0+Ct;ft.length=Pt.length,xt=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,xt=!0);xt&&n.drawBuffers(ft)}function E(V){return _!==V?(n.useProgram(V),_=V,!0):!1}const P={[ss]:n.FUNC_ADD,[Py]:n.FUNC_SUBTRACT,[Dy]:n.FUNC_REVERSE_SUBTRACT};P[Ly]=n.MIN,P[Iy]=n.MAX;const F={[Uy]:n.ZERO,[Ny]:n.ONE,[Oy]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[Hy]:n.SRC_ALPHA_SATURATE,[ky]:n.DST_COLOR,[By]:n.DST_ALPHA,[Fy]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[Vy]:n.ONE_MINUS_DST_COLOR,[zy]:n.ONE_MINUS_DST_ALPHA,[Gy]:n.CONSTANT_COLOR,[Wy]:n.ONE_MINUS_CONSTANT_COLOR,[Xy]:n.CONSTANT_ALPHA,[$y]:n.ONE_MINUS_CONSTANT_ALPHA};function b(V,Mt,ft,xt,Pt,Ct,jt,Me,ze,le){if(V===Bi){v===!0&&(tt(n.BLEND),v=!1);return}if(v===!1&&(L(n.BLEND),v=!0),V!==Ry){if(V!==m||le!==C){if((p!==ss||S!==ss)&&(n.blendEquation(n.FUNC_ADD),p=ss,S=ss),le)switch(V){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}R=null,A=null,B=null,z=null,I.set(0,0,0),H=0,m=V,C=le}return}Pt=Pt||Mt,Ct=Ct||ft,jt=jt||xt,(Mt!==p||Pt!==S)&&(n.blendEquationSeparate(P[Mt],P[Pt]),p=Mt,S=Pt),(ft!==R||xt!==A||Ct!==B||jt!==z)&&(n.blendFuncSeparate(F[ft],F[xt],F[Ct],F[jt]),R=ft,A=xt,B=Ct,z=jt),(Me.equals(I)===!1||ze!==H)&&(n.blendColor(Me.r,Me.g,Me.b,ze),I.copy(Me),H=ze),m=V,C=!1}function J(V,Mt){V.side===mi?tt(n.CULL_FACE):L(n.CULL_FACE);let ft=V.side===rn;Mt&&(ft=!ft),Z(ft),V.blending===Ys&&V.transparent===!1?b(Bi):b(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const xt=V.stencilWrite;a.setTest(xt),xt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Y(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?L(n.SAMPLE_ALPHA_TO_COVERAGE):tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Z(V){T!==V&&(V?n.frontFace(n.CW):n.frontFace(n.CCW),T=V)}function rt(V){V!==Ay?(L(n.CULL_FACE),V!==N&&(V===Td?n.cullFace(n.BACK):V===Cy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):tt(n.CULL_FACE),N=V}function ot(V){V!==ut&&(et&&n.lineWidth(V),ut=V)}function Y(V,Mt,ft){V?(L(n.POLYGON_OFFSET_FILL),(nt!==Mt||Q!==ft)&&(n.polygonOffset(Mt,ft),nt=Mt,Q=ft)):tt(n.POLYGON_OFFSET_FILL)}function y(V){V?L(n.SCISSOR_TEST):tt(n.SCISSOR_TEST)}function x(V){V===void 0&&(V=n.TEXTURE0+W-1),vt!==V&&(n.activeTexture(V),vt=V)}function g(V,Mt,ft){ft===void 0&&(vt===null?ft=n.TEXTURE0+W-1:ft=vt);let xt=U[ft];xt===void 0&&(xt={type:void 0,texture:void 0},U[ft]=xt),(xt.type!==V||xt.texture!==Mt)&&(vt!==ft&&(n.activeTexture(ft),vt=ft),n.bindTexture(V,Mt||_t[V]),xt.type=V,xt.texture=Mt)}function O(){const V=U[vt];V!==void 0&&V.type!==void 0&&(n.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function j(){try{n.compressedTexImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function at(){try{n.compressedTexImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{n.texSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{n.texStorage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{n.texStorage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Lt(V){wt.equals(V)===!1&&(n.scissor(V.x,V.y,V.z,V.w),wt.copy(V))}function St(V){K.equals(V)===!1&&(n.viewport(V.x,V.y,V.z,V.w),K.copy(V))}function Nt(V,Mt){let ft=c.get(Mt);ft===void 0&&(ft=new WeakMap,c.set(Mt,ft));let xt=ft.get(V);xt===void 0&&(xt=n.getUniformBlockIndex(Mt,V.name),ft.set(V,xt))}function Ut(V,Mt){const xt=c.get(Mt).get(V);l.get(Mt)!==xt&&(n.uniformBlockBinding(Mt,xt,V.__bindingPointIndex),l.set(Mt,xt))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},vt=null,U={},d={},f=new WeakMap,h=[],_=null,v=!1,m=null,p=null,R=null,A=null,S=null,B=null,z=null,I=new $t(0,0,0),H=0,C=!1,T=null,N=null,ut=null,nt=null,Q=null,wt.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:L,disable:tt,bindFramebuffer:st,drawBuffers:mt,useProgram:E,setBlending:b,setMaterial:J,setFlipSided:Z,setCullFace:rt,setLineWidth:ot,setPolygonOffset:Y,setScissorTest:y,activeTexture:x,bindTexture:g,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:at,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:Nt,uniformBlockBinding:Ut,texStorage2D:It,texStorage3D:yt,texSubImage2D:it,texSubImage3D:pt,compressedTexSubImage2D:ht,compressedTexSubImage3D:bt,scissor:Lt,viewport:St,reset:ne}}function Sf(n,t,e,i){const s=mT(i);switch(e){case vp:return n*t;case yp:return n*t;case Mp:return n*t*2;case Sp:return n*t/s.components*s.byteLength;case cu:return n*t/s.components*s.byteLength;case bp:return n*t*2/s.components*s.byteLength;case uu:return n*t*2/s.components*s.byteLength;case xp:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case du:return n*t*4/s.components*s.byteLength;case $o:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Yo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(t,8)/4;case cc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ko:case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ep:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mT(n){switch(n){case yi:case mp:return{byteLength:1,components:1};case qr:case gp:case Qr:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case ps:case ou:case gi:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function gT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(x,g){return h?new OffscreenCanvas(x,g):la("canvas")}function v(x,g,O){let j=1;const at=y(x);if((at.width>O||at.height>O)&&(j=O/Math.max(at.width,at.height)),j<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const it=Math.floor(j*at.width),pt=Math.floor(j*at.height);d===void 0&&(d=_(it,pt));const ht=g?_(it,pt):d;return ht.width=it,ht.height=pt,ht.getContext("2d").drawImage(x,0,0,it,pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+it+"x"+pt+")."),ht}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),x;return x}function m(x){return x.generateMipmaps}function p(x){n.generateMipmap(x)}function R(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,g,O,j,at=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let it=g;if(g===n.RED&&(O===n.FLOAT&&(it=n.R32F),O===n.HALF_FLOAT&&(it=n.R16F),O===n.UNSIGNED_BYTE&&(it=n.R8)),g===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(it=n.R8UI),O===n.UNSIGNED_SHORT&&(it=n.R16UI),O===n.UNSIGNED_INT&&(it=n.R32UI),O===n.BYTE&&(it=n.R8I),O===n.SHORT&&(it=n.R16I),O===n.INT&&(it=n.R32I)),g===n.RG&&(O===n.FLOAT&&(it=n.RG32F),O===n.HALF_FLOAT&&(it=n.RG16F),O===n.UNSIGNED_BYTE&&(it=n.RG8)),g===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(it=n.RG8UI),O===n.UNSIGNED_SHORT&&(it=n.RG16UI),O===n.UNSIGNED_INT&&(it=n.RG32UI),O===n.BYTE&&(it=n.RG8I),O===n.SHORT&&(it=n.RG16I),O===n.INT&&(it=n.RG32I)),g===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(it=n.RGB8UI),O===n.UNSIGNED_SHORT&&(it=n.RGB16UI),O===n.UNSIGNED_INT&&(it=n.RGB32UI),O===n.BYTE&&(it=n.RGB8I),O===n.SHORT&&(it=n.RGB16I),O===n.INT&&(it=n.RGB32I)),g===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),O===n.UNSIGNED_INT&&(it=n.RGBA32UI),O===n.BYTE&&(it=n.RGBA8I),O===n.SHORT&&(it=n.RGBA16I),O===n.INT&&(it=n.RGBA32I)),g===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),g===n.RGBA){const pt=at?Pa:te.getTransfer(j);O===n.FLOAT&&(it=n.RGBA32F),O===n.HALF_FLOAT&&(it=n.RGBA16F),O===n.UNSIGNED_BYTE&&(it=pt===de?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function S(x,g){let O;return x?g===null||g===ps||g===sr?O=n.DEPTH24_STENCIL8:g===gi?O=n.DEPTH32F_STENCIL8:g===qr&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ps||g===sr?O=n.DEPTH_COMPONENT24:g===gi?O=n.DEPTH_COMPONENT32F:g===qr&&(O=n.DEPTH_COMPONENT16),O}function B(x,g){return m(x)===!0||x.isFramebufferTexture&&x.minFilter!==Ln&&x.minFilter!==An?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function z(x){const g=x.target;g.removeEventListener("dispose",z),H(g),g.isVideoTexture&&u.delete(g)}function I(x){const g=x.target;g.removeEventListener("dispose",I),T(g)}function H(x){const g=i.get(x);if(g.__webglInit===void 0)return;const O=x.source,j=f.get(O);if(j){const at=j[g.__cacheKey];at.usedTimes--,at.usedTimes===0&&C(x),Object.keys(j).length===0&&f.delete(O)}i.remove(x)}function C(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const O=x.source,j=f.get(O);delete j[g.__cacheKey],o.memory.textures--}function T(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let at=0;at<g.__webglFramebuffer[j].length;at++)n.deleteFramebuffer(g.__webglFramebuffer[j][at]);else n.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)n.deleteFramebuffer(g.__webglFramebuffer[j]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=x.textures;for(let j=0,at=O.length;j<at;j++){const it=i.get(O[j]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(x)}let N=0;function ut(){N=0}function nt(){const x=N;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),N+=1,x}function Q(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function W(x,g){const O=i.get(x);if(x.isVideoTexture&&ot(x),x.isRenderTargetTexture===!1&&x.version>0&&O.__version!==x.version){const j=x.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,x,g);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+g)}function et(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){K(O,x,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+g)}function X(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){K(O,x,g);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+g)}function k(x,g){const O=i.get(x);if(x.version>0&&O.__version!==x.version){dt(O,x,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+g)}const vt={[ac]:n.REPEAT,[cs]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},U={[Ln]:n.NEAREST,[nM]:n.NEAREST_MIPMAP_NEAREST,[uo]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[us]:n.LINEAR_MIPMAP_LINEAR},D={[oM]:n.NEVER,[fM]:n.ALWAYS,[aM]:n.LESS,[wp]:n.LEQUAL,[lM]:n.EQUAL,[dM]:n.GEQUAL,[cM]:n.GREATER,[uM]:n.NOTEQUAL};function gt(x,g){if(g.type===gi&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===An||g.magFilter===Za||g.magFilter===uo||g.magFilter===us||g.minFilter===An||g.minFilter===Za||g.minFilter===uo||g.minFilter===us)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,vt[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,vt[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,vt[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,U[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,U[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,D[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Ln||g.minFilter!==uo&&g.minFilter!==us||g.type===gi&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function wt(x,g){let O=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",z));const j=g.source;let at=f.get(j);at===void 0&&(at={},f.set(j,at));const it=Q(g);if(it!==x.__cacheKey){at[it]===void 0&&(at[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),at[it].usedTimes++;const pt=at[x.__cacheKey];pt!==void 0&&(at[x.__cacheKey].usedTimes--,pt.usedTimes===0&&C(g)),x.__cacheKey=it,x.__webglTexture=at[it].texture}return O}function K(x,g,O){let j=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=n.TEXTURE_3D);const at=wt(x,g),it=g.source;e.bindTexture(j,x.__webglTexture,n.TEXTURE0+O);const pt=i.get(it);if(it.version!==pt.__version||at===!0){e.activeTexture(n.TEXTURE0+O);const ht=te.getPrimaries(te.workingColorSpace),bt=g.colorSpace===Ui?null:te.getPrimaries(g.colorSpace),It=g.colorSpace===Ui||ht===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let yt=v(g.image,!1,s.maxTextureSize);yt=Y(g,yt);const Tt=r.convert(g.format,g.colorSpace),Ot=r.convert(g.type);let Lt=A(g.internalFormat,Tt,Ot,g.colorSpace,g.isVideoTexture);gt(j,g);let St;const Nt=g.mipmaps,Ut=g.isVideoTexture!==!0,ne=pt.__version===void 0||at===!0,V=it.dataReady,Mt=B(g,yt);if(g.isDepthTexture)Lt=S(g.format===rr,g.type),ne&&(Ut?e.texStorage2D(n.TEXTURE_2D,1,Lt,yt.width,yt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,yt.width,yt.height,0,Tt,Ot,null));else if(g.isDataTexture)if(Nt.length>0){Ut&&ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Lt,Nt[0].width,Nt[0].height);for(let ft=0,xt=Nt.length;ft<xt;ft++)St=Nt[ft],Ut?V&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Tt,Ot,St.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,Tt,Ot,St.data);g.generateMipmaps=!1}else Ut?(ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Lt,yt.width,yt.height),V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,yt.width,yt.height,Tt,Ot,yt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,yt.width,yt.height,0,Tt,Ot,yt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ut&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Lt,Nt[0].width,Nt[0].height,yt.depth);for(let ft=0,xt=Nt.length;ft<xt;ft++)if(St=Nt[ft],g.format!==Cn)if(Tt!==null)if(Ut){if(V)if(g.layerUpdates.size>0){const Pt=Sf(St.width,St.height,g.format,g.type);for(const Ct of g.layerUpdates){const jt=St.data.subarray(Ct*Pt/St.data.BYTES_PER_ELEMENT,(Ct+1)*Pt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Ct,St.width,St.height,1,Tt,jt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,St.width,St.height,yt.depth,Tt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,St.width,St.height,yt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?V&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,St.width,St.height,yt.depth,Tt,Ot,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,St.width,St.height,yt.depth,0,Tt,Ot,St.data)}else{Ut&&ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Lt,Nt[0].width,Nt[0].height);for(let ft=0,xt=Nt.length;ft<xt;ft++)St=Nt[ft],g.format!==Cn?Tt!==null?Ut?V&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Tt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?V&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,St.width,St.height,Tt,Ot,St.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,St.width,St.height,0,Tt,Ot,St.data)}else if(g.isDataArrayTexture)if(Ut){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Lt,yt.width,yt.height,yt.depth),V)if(g.layerUpdates.size>0){const ft=Sf(yt.width,yt.height,g.format,g.type);for(const xt of g.layerUpdates){const Pt=yt.data.subarray(xt*ft/yt.data.BYTES_PER_ELEMENT,(xt+1)*ft/yt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,yt.width,yt.height,1,Tt,Ot,Pt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,Tt,Ot,yt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,yt.width,yt.height,yt.depth,0,Tt,Ot,yt.data);else if(g.isData3DTexture)Ut?(ne&&e.texStorage3D(n.TEXTURE_3D,Mt,Lt,yt.width,yt.height,yt.depth),V&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,Tt,Ot,yt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,yt.width,yt.height,yt.depth,0,Tt,Ot,yt.data);else if(g.isFramebufferTexture){if(ne)if(Ut)e.texStorage2D(n.TEXTURE_2D,Mt,Lt,yt.width,yt.height);else{let ft=yt.width,xt=yt.height;for(let Pt=0;Pt<Mt;Pt++)e.texImage2D(n.TEXTURE_2D,Pt,Lt,ft,xt,0,Tt,Ot,null),ft>>=1,xt>>=1}}else if(Nt.length>0){if(Ut&&ne){const ft=y(Nt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Lt,ft.width,ft.height)}for(let ft=0,xt=Nt.length;ft<xt;ft++)St=Nt[ft],Ut?V&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,Tt,Ot,St):e.texImage2D(n.TEXTURE_2D,ft,Lt,Tt,Ot,St);g.generateMipmaps=!1}else if(Ut){if(ne){const ft=y(yt);e.texStorage2D(n.TEXTURE_2D,Mt,Lt,ft.width,ft.height)}V&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Ot,yt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,Tt,Ot,yt);m(g)&&p(j),pt.__version=it.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function dt(x,g,O){if(g.image.length!==6)return;const j=wt(x,g),at=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+O);const it=i.get(at);if(at.version!==it.__version||j===!0){e.activeTexture(n.TEXTURE0+O);const pt=te.getPrimaries(te.workingColorSpace),ht=g.colorSpace===Ui?null:te.getPrimaries(g.colorSpace),bt=g.colorSpace===Ui||pt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const It=g.isCompressedTexture||g.image[0].isCompressedTexture,yt=g.image[0]&&g.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!It&&!yt?Tt[xt]=v(g.image[xt],!0,s.maxCubemapSize):Tt[xt]=yt?g.image[xt].image:g.image[xt],Tt[xt]=Y(g,Tt[xt]);const Ot=Tt[0],Lt=r.convert(g.format,g.colorSpace),St=r.convert(g.type),Nt=A(g.internalFormat,Lt,St,g.colorSpace),Ut=g.isVideoTexture!==!0,ne=it.__version===void 0||j===!0,V=at.dataReady;let Mt=B(g,Ot);gt(n.TEXTURE_CUBE_MAP,g);let ft;if(It){Ut&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Nt,Ot.width,Ot.height);for(let xt=0;xt<6;xt++){ft=Tt[xt].mipmaps;for(let Pt=0;Pt<ft.length;Pt++){const Ct=ft[Pt];g.format!==Cn?Lt!==null?Ut?V&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,Ct.width,Ct.height,Lt,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,Nt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,Ct.width,Ct.height,Lt,St,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,Nt,Ct.width,Ct.height,0,Lt,St,Ct.data)}}}else{if(ft=g.mipmaps,Ut&&ne){ft.length>0&&Mt++;const xt=y(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Nt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(yt){Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,Lt,St,Tt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Nt,Tt[xt].width,Tt[xt].height,0,Lt,St,Tt[xt].data);for(let Pt=0;Pt<ft.length;Pt++){const jt=ft[Pt].image[xt].image;Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,jt.width,jt.height,Lt,St,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,Nt,jt.width,jt.height,0,Lt,St,jt.data)}}else{Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Lt,St,Tt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Nt,Lt,St,Tt[xt]);for(let Pt=0;Pt<ft.length;Pt++){const Ct=ft[Pt];Ut?V&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,Lt,St,Ct.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,Nt,Lt,St,Ct.image[xt])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),it.__version=at.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function _t(x,g,O,j,at,it){const pt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),bt=A(O.internalFormat,pt,ht,O.colorSpace),It=i.get(g),yt=i.get(O);if(yt.__renderTarget=g,!It.__hasExternalTextures){const Tt=Math.max(1,g.width>>it),Ot=Math.max(1,g.height>>it);at===n.TEXTURE_3D||at===n.TEXTURE_2D_ARRAY?e.texImage3D(at,it,bt,Tt,Ot,g.depth,0,pt,ht,null):e.texImage2D(at,it,bt,Tt,Ot,0,pt,ht,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),rt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,at,yt.__webglTexture,0,Z(g)):(at===n.TEXTURE_2D||at>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,at,yt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function L(x,g,O){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const j=g.depthTexture,at=j&&j.isDepthTexture?j.type:null,it=S(g.stencilBuffer,at),pt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=Z(g);rt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht,it,g.width,g.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,it,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,it,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pt,n.RENDERBUFFER,x)}else{const j=g.textures;for(let at=0;at<j.length;at++){const it=j[at],pt=r.convert(it.format,it.colorSpace),ht=r.convert(it.type),bt=A(it.internalFormat,pt,ht,it.colorSpace),It=Z(g);O&&rt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,It,bt,g.width,g.height):rt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,It,bt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,bt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function tt(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(g.depthTexture);j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),W(g.depthTexture,0);const at=j.__webglTexture,it=Z(g);if(g.depthTexture.format===js)rt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,at,0);else if(g.depthTexture.format===rr)rt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function st(x){const g=i.get(x),O=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const j=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const at=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",at)};j.addEventListener("dispose",at),g.__depthDisposeCallback=at}g.__boundDepthTexture=j}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");tt(g.__webglFramebuffer,x)}else if(O){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=n.createRenderbuffer(),L(g.__webglDepthbuffer[j],x,!1);else{const at=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,at,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),L(g.__webglDepthbuffer,x,!1);else{const j=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,at),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,at)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function mt(x,g,O){const j=i.get(x);g!==void 0&&_t(j.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&st(x)}function E(x){const g=x.texture,O=i.get(x),j=i.get(g);x.addEventListener("dispose",I);const at=x.textures,it=x.isWebGLCubeRenderTarget===!0,pt=at.length>1;if(pt||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=g.version,o.memory.textures++),it){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let bt=0;bt<g.mipmaps.length;bt++)O.__webglFramebuffer[ht][bt]=n.createFramebuffer()}else O.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<g.mipmaps.length;ht++)O.__webglFramebuffer[ht]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(pt)for(let ht=0,bt=at.length;ht<bt;ht++){const It=i.get(at[ht]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&rt(x)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){const bt=at[ht];O.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const It=r.convert(bt.format,bt.colorSpace),yt=r.convert(bt.type),Tt=A(bt.internalFormat,It,yt,bt.colorSpace,x.isXRRenderTarget===!0),Ot=Z(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Tt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),L(O.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),gt(n.TEXTURE_CUBE_MAP,g);for(let ht=0;ht<6;ht++)if(g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)_t(O.__webglFramebuffer[ht][bt],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,bt);else _t(O.__webglFramebuffer[ht],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let ht=0,bt=at.length;ht<bt;ht++){const It=at[ht],yt=i.get(It);e.bindTexture(n.TEXTURE_2D,yt.__webglTexture),gt(n.TEXTURE_2D,It),_t(O.__webglFramebuffer,x,It,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),m(It)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ht=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),gt(ht,g),g.mipmaps&&g.mipmaps.length>0)for(let bt=0;bt<g.mipmaps.length;bt++)_t(O.__webglFramebuffer[bt],x,g,n.COLOR_ATTACHMENT0,ht,bt);else _t(O.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ht,0);m(g)&&p(ht),e.unbindTexture()}x.depthBuffer&&st(x)}function P(x){const g=x.textures;for(let O=0,j=g.length;O<j;O++){const at=g[O];if(m(at)){const it=R(x),pt=i.get(at).__webglTexture;e.bindTexture(it,pt),p(it),e.unbindTexture()}}}const F=[],b=[];function J(x){if(x.samples>0){if(rt(x)===!1){const g=x.textures,O=x.width,j=x.height;let at=n.COLOR_BUFFER_BIT;const it=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=i.get(x),ht=g.length>1;if(ht)for(let bt=0;bt<g.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let bt=0;bt<g.length;bt++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(at|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(at|=n.STENCIL_BUFFER_BIT)),ht){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pt.__webglColorRenderbuffer[bt]);const It=i.get(g[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,It,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,at,n.NEAREST),l===!0&&(F.length=0,b.length=0,F.push(n.COLOR_ATTACHMENT0+bt),x.depthBuffer&&x.resolveDepthBuffer===!1&&(F.push(it),b.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,F))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let bt=0;bt<g.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,pt.__webglColorRenderbuffer[bt]);const It=i.get(g[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,It,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Z(x){return Math.min(s.maxSamples,x.samples)}function rt(x){const g=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ot(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function Y(x,g){const O=x.colorSpace,j=x.format,at=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||O!==ar&&O!==Ui&&(te.getTransfer(O)===de?(j!==Cn||at!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function y(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=ut,this.setTexture2D=W,this.setTexture2DArray=et,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=mt,this.setupRenderTarget=E,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=rt}function _T(n,t){function e(i,s=Ui){let r;const o=te.getTransfer(s);if(i===yi)return n.UNSIGNED_BYTE;if(i===au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return n.BYTE;if(i===gp)return n.SHORT;if(i===qr)return n.UNSIGNED_SHORT;if(i===ou)return n.INT;if(i===ps)return n.UNSIGNED_INT;if(i===gi)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===vp)return n.ALPHA;if(i===xp)return n.RGB;if(i===Cn)return n.RGBA;if(i===yp)return n.LUMINANCE;if(i===Mp)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===bp)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===du)return n.RGBA_INTEGER;if(i===$o||i===qo||i===Yo||i===jo)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===$o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===$o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===pc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ko||i===Pc||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ko)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===Lc||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ko)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class vT extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,_=.005;c.inputState.pinching&&f>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const yT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Wi({vertexShader:yT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends vs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,_=null;const v=new ST,m=e.getContextAttributes();let p=null,R=null;const A=[],S=[],B=new Xt;let z=null;const I=new cn;I.viewport=new pe;const H=new cn;H.viewport=new pe;const C=[I,H],T=new vT;let N=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let dt=A[K];return dt===void 0&&(dt=new Tl,A[K]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(K){let dt=A[K];return dt===void 0&&(dt=new Tl,A[K]=dt),dt.getGripSpace()},this.getHand=function(K){let dt=A[K];return dt===void 0&&(dt=new Tl,A[K]=dt),dt.getHandSpace()};function nt(K){const dt=S.indexOf(K.inputSource);if(dt===-1)return;const _t=A[dt];_t!==void 0&&(_t.update(K.inputSource,K.frame,c||o),_t.dispatchEvent({type:K.type,data:K.inputSource}))}function Q(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",W);for(let K=0;K<A.length;K++){const dt=S[K];dt!==null&&(S[K]=null,A[K].disconnect(dt))}N=null,ut=null,v.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,R=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(z),t.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),R=new ms(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,_t=null,L=null;m.depth&&(L=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?rr:js,_t=m.stencil?sr:ps);const tt={colorFormat:e.RGBA8,depthFormat:L,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),R=new ms(f.textureWidth,f.textureHeight,{format:Cn,type:yi,depthTexture:new zp(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(K){for(let dt=0;dt<K.removed.length;dt++){const _t=K.removed[dt],L=S.indexOf(_t);L>=0&&(S[L]=null,A[L].disconnect(_t))}for(let dt=0;dt<K.added.length;dt++){const _t=K.added[dt];let L=S.indexOf(_t);if(L===-1){for(let st=0;st<A.length;st++)if(st>=S.length){S.push(_t),L=st;break}else if(S[st]===null){S[st]=_t,L=st;break}if(L===-1)break}const tt=A[L];tt&&tt.connect(_t)}}const et=new G,X=new G;function k(K,dt,_t){et.setFromMatrixPosition(dt.matrixWorld),X.setFromMatrixPosition(_t.matrixWorld);const L=et.distanceTo(X),tt=dt.projectionMatrix.elements,st=_t.projectionMatrix.elements,mt=tt[14]/(tt[10]-1),E=tt[14]/(tt[10]+1),P=(tt[9]+1)/tt[5],F=(tt[9]-1)/tt[5],b=(tt[8]-1)/tt[0],J=(st[8]+1)/st[0],Z=mt*b,rt=mt*J,ot=L/(-b+J),Y=ot*-b;if(dt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Y),K.translateZ(ot),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),tt[10]===-1)K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const y=mt+ot,x=E+ot,g=Z-Y,O=rt+(L-Y),j=P*E/x*y,at=F*E/x*y;K.projectionMatrix.makePerspective(g,O,j,at,y,x),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function vt(K,dt){dt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(dt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let dt=K.near,_t=K.far;v.texture!==null&&(v.depthNear>0&&(dt=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),T.near=H.near=I.near=dt,T.far=H.far=I.far=_t,(N!==T.near||ut!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),N=T.near,ut=T.far),I.layers.mask=K.layers.mask|2,H.layers.mask=K.layers.mask|4,T.layers.mask=I.layers.mask|H.layers.mask;const L=K.parent,tt=T.cameras;vt(T,L);for(let st=0;st<tt.length;st++)vt(tt[st],L);tt.length===2?k(T,I,H):T.projectionMatrix.copy(I.projectionMatrix),U(K,T,L)};function U(K,dt,_t){_t===null?K.matrix.copy(dt.matrixWorld):(K.matrix.copy(_t.matrixWorld),K.matrix.invert(),K.matrix.multiply(dt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(dt.projectionMatrix),K.projectionMatrixInverse.copy(dt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Oc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let D=null;function gt(K,dt){if(u=dt.getViewerPose(c||o),_=dt,u!==null){const _t=u.views;h!==null&&(t.setRenderTargetFramebuffer(R,h.framebuffer),t.setRenderTarget(R));let L=!1;_t.length!==T.cameras.length&&(T.cameras.length=0,L=!0);for(let st=0;st<_t.length;st++){const mt=_t[st];let E=null;if(h!==null)E=h.getViewport(mt);else{const F=d.getViewSubImage(f,mt);E=F.viewport,st===0&&(t.setRenderTargetTextures(R,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),t.setRenderTarget(R))}let P=C[st];P===void 0&&(P=new cn,P.layers.enable(st),P.viewport=new pe,C[st]=P),P.matrix.fromArray(mt.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(mt.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(E.x,E.y,E.width,E.height),st===0&&(T.matrix.copy(P.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),L===!0&&T.cameras.push(P)}const tt=s.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const st=d.getDepthInformation(_t[0]);st&&st.isValid&&st.texture&&v.init(t,st,s.renderState)}}for(let _t=0;_t<A.length;_t++){const L=S[_t],tt=A[_t];L!==null&&tt!==void 0&&tt.update(L,dt,c||o)}D&&D(K,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const wt=new Fp;wt.setAnimationLoop(gt),this.setAnimationLoop=function(K){D=K},this.dispose=function(){}}}const ts=new Zn,ET=new ve;function TT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Up(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,A,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,R,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const R=t.get(p),A=R.envMap,S=R.envMapRotation;A&&(m.envMap.value=A,ts.copy(S),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(ts)),m.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const R=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function wT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,A){const S=A.program;i.uniformBlockBinding(R,S)}function c(R,A){let S=s[R.id];S===void 0&&(_(R),S=u(R),s[R.id]=S,R.addEventListener("dispose",m));const B=A.program;i.updateUBOMapping(R,B);const z=t.render.frame;r[R.id]!==z&&(f(R),r[R.id]=z)}function u(R){const A=d();R.__bindingPointIndex=A;const S=n.createBuffer(),B=R.__size,z=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,B,z),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const A=s[R.id],S=R.uniforms,B=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let z=0,I=S.length;z<I;z++){const H=Array.isArray(S[z])?S[z]:[S[z]];for(let C=0,T=H.length;C<T;C++){const N=H[C];if(h(N,z,C,B)===!0){const ut=N.__offset,nt=Array.isArray(N.value)?N.value:[N.value];let Q=0;for(let W=0;W<nt.length;W++){const et=nt[W],X=v(et);typeof et=="number"||typeof et=="boolean"?(N.__data[0]=et,n.bufferSubData(n.UNIFORM_BUFFER,ut+Q,N.__data)):et.isMatrix3?(N.__data[0]=et.elements[0],N.__data[1]=et.elements[1],N.__data[2]=et.elements[2],N.__data[3]=0,N.__data[4]=et.elements[3],N.__data[5]=et.elements[4],N.__data[6]=et.elements[5],N.__data[7]=0,N.__data[8]=et.elements[6],N.__data[9]=et.elements[7],N.__data[10]=et.elements[8],N.__data[11]=0):(et.toArray(N.__data,Q),Q+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ut,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(R,A,S,B){const z=R.value,I=A+"_"+S;if(B[I]===void 0)return typeof z=="number"||typeof z=="boolean"?B[I]=z:B[I]=z.clone(),!0;{const H=B[I];if(typeof z=="number"||typeof z=="boolean"){if(H!==z)return B[I]=z,!0}else if(H.equals(z)===!1)return H.copy(z),!0}return!1}function _(R){const A=R.uniforms;let S=0;const B=16;for(let I=0,H=A.length;I<H;I++){const C=Array.isArray(A[I])?A[I]:[A[I]];for(let T=0,N=C.length;T<N;T++){const ut=C[T],nt=Array.isArray(ut.value)?ut.value:[ut.value];for(let Q=0,W=nt.length;Q<W;Q++){const et=nt[Q],X=v(et),k=S%B,vt=k%X.boundary,U=k+vt;S+=vt,U!==0&&B-U<X.storage&&(S+=B-U),ut.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ut.__offset=S,S+=X.storage}}}const z=S%B;return z>0&&(S+=B-z),R.__size=S,R.__cache={},this}function v(R){const A={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(A.boundary=4,A.storage=4):R.isVector2?(A.boundary=8,A.storage=8):R.isVector3||R.isColor?(A.boundary=16,A.storage=12):R.isVector4?(A.boundary=16,A.storage=16):R.isMatrix3?(A.boundary=48,A.storage=48):R.isMatrix4?(A.boundary=64,A.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),A}function m(R){const A=R.target;A.removeEventListener("dispose",m);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(const R in s)n.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class AT{constructor(t={}){const{canvas:e=mM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const R=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=zi,this.toneMappingExposure=1;const S=this;let B=!1,z=0,I=0,H=null,C=-1,T=null;const N=new pe,ut=new pe;let nt=null;const Q=new $t(0);let W=0,et=e.width,X=e.height,k=1,vt=null,U=null;const D=new pe(0,0,et,X),gt=new pe(0,0,et,X);let wt=!1;const K=new hu;let dt=!1,_t=!1;const L=new ve,tt=new ve,st=new G,mt=new pe,E={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let P=!1;function F(){return H===null?k:1}let b=i;function J(w,$){return e.getContext(w,$)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),b===null){const $="webgl2";if(b=J($,w),b===null)throw J($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Z,rt,ot,Y,y,x,g,O,j,at,it,pt,ht,bt,It,yt,Tt,Ot,Lt,St,Nt,Ut,ne,V;function Mt(){Z=new LE(b),Z.init(),Ut=new _T(b,Z),rt=new wE(b,Z,t,Ut),ot=new pT(b,Z),rt.reverseDepthBuffer&&f&&ot.buffers.depth.setReversed(!0),Y=new NE(b),y=new Q1,x=new gT(b,Z,ot,y,rt,Ut,Y),g=new CE(S),O=new DE(S),j=new HM(b),ne=new EE(b,j),at=new IE(b,j,Y,ne),it=new FE(b,at,j,Y),Lt=new OE(b,rt,x),yt=new AE(y),pt=new J1(S,g,O,Z,rt,ne,yt),ht=new TT(S,y),bt=new eT,It=new aT(Z),Ot=new bE(S,g,O,ot,it,h,l),Tt=new fT(S,it,rt),V=new wT(b,Y,rt,ot),St=new TE(b,Z,Y),Nt=new UE(b,Z,Y),Y.programs=pt.programs,S.capabilities=rt,S.extensions=Z,S.properties=y,S.renderLists=bt,S.shadowMap=Tt,S.state=ot,S.info=Y}Mt();const ft=new bT(S,b);this.xr=ft,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Z.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Z.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(et,X,!1))},this.getSize=function(w){return w.set(et,X)},this.setSize=function(w,$,lt=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,X=$,e.width=Math.floor(w*k),e.height=Math.floor($*k),lt===!0&&(e.style.width=w+"px",e.style.height=$+"px"),this.setViewport(0,0,w,$)},this.getDrawingBufferSize=function(w){return w.set(et*k,X*k).floor()},this.setDrawingBufferSize=function(w,$,lt){et=w,X=$,k=lt,e.width=Math.floor(w*lt),e.height=Math.floor($*lt),this.setViewport(0,0,w,$)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(D)},this.setViewport=function(w,$,lt,ct){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,$,lt,ct),ot.viewport(N.copy(D).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(gt)},this.setScissor=function(w,$,lt,ct){w.isVector4?gt.set(w.x,w.y,w.z,w.w):gt.set(w,$,lt,ct),ot.scissor(ut.copy(gt).multiplyScalar(k).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(w){ot.setScissorTest(wt=w)},this.setOpaqueSort=function(w){vt=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(w=!0,$=!0,lt=!0){let ct=0;if(w){let q=!1;if(H!==null){const At=H.texture.format;q=At===du||At===uu||At===cu}if(q){const At=H.texture.type,Dt=At===yi||At===ps||At===qr||At===sr||At===au||At===lu,Ft=Ot.getClearColor(),Bt=Ot.getClearAlpha(),qt=Ft.r,Kt=Ft.g,zt=Ft.b;Dt?(_[0]=qt,_[1]=Kt,_[2]=zt,_[3]=Bt,b.clearBufferuiv(b.COLOR,0,_)):(v[0]=qt,v[1]=Kt,v[2]=zt,v[3]=Bt,b.clearBufferiv(b.COLOR,0,v))}else ct|=b.COLOR_BUFFER_BIT}$&&(ct|=b.DEPTH_BUFFER_BIT),lt&&(ct|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),bt.dispose(),It.dispose(),y.dispose(),g.dispose(),O.dispose(),it.dispose(),ne.dispose(),V.dispose(),pt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",vu),ft.removeEventListener("sessionend",xu),$i.stop()};function xt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=Y.autoReset,$=Tt.enabled,lt=Tt.autoUpdate,ct=Tt.needsUpdate,q=Tt.type;Mt(),Y.autoReset=w,Tt.enabled=$,Tt.autoUpdate=lt,Tt.needsUpdate=ct,Tt.type=q}function Ct(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function jt(w){const $=w.target;$.removeEventListener("dispose",jt),Me($)}function Me(w){ze(w),y.remove(w)}function ze(w){const $=y.get(w).programs;$!==void 0&&($.forEach(function(lt){pt.releaseProgram(lt)}),w.isShaderMaterial&&pt.releaseShaderCache(w))}this.renderBufferDirect=function(w,$,lt,ct,q,At){$===null&&($=E);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=Kp(w,$,lt,ct,q);ot.setMaterial(ct,Dt);let Bt=lt.index,qt=1;if(ct.wireframe===!0){if(Bt=at.getWireframeAttribute(lt),Bt===void 0)return;qt=2}const Kt=lt.drawRange,zt=lt.attributes.position;let ee=Kt.start*qt,ge=(Kt.start+Kt.count)*qt;At!==null&&(ee=Math.max(ee,At.start*qt),ge=Math.min(ge,(At.start+At.count)*qt)),Bt!==null?(ee=Math.max(ee,0),ge=Math.min(ge,Bt.count)):zt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,zt.count));const xe=ge-ee;if(xe<0||xe===1/0)return;ne.setup(q,ct,Ft,lt,Bt);let en,se=St;if(Bt!==null&&(en=j.get(Bt),se=Nt,se.setIndex(en)),q.isMesh)ct.wireframe===!0?(ot.setLineWidth(ct.wireframeLinewidth*F()),se.setMode(b.LINES)):se.setMode(b.TRIANGLES);else if(q.isLine){let Vt=ct.linewidth;Vt===void 0&&(Vt=1),ot.setLineWidth(Vt*F()),q.isLineSegments?se.setMode(b.LINES):q.isLineLoop?se.setMode(b.LINE_LOOP):se.setMode(b.LINE_STRIP)}else q.isPoints?se.setMode(b.POINTS):q.isSprite&&se.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)se.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))se.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,Qn=q._multiDrawCounts,re=q._multiDrawCount,Sn=Bt?j.get(Bt).bytesPerElement:1,ys=y.get(ct).currentProgram.getUniforms();for(let on=0;on<re;on++)ys.setValue(b,"_gl_DrawID",on),se.render(Vt[on]/Sn,Qn[on])}else if(q.isInstancedMesh)se.renderInstances(ee,xe,q.count);else if(lt.isInstancedBufferGeometry){const Vt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Qn=Math.min(lt.instanceCount,Vt);se.renderInstances(ee,xe,Qn)}else se.render(ee,xe)};function le(w,$,lt){w.transparent===!0&&w.side===mi&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,io(w,$,lt),w.side=Gi,w.needsUpdate=!0,io(w,$,lt),w.side=mi):io(w,$,lt)}this.compile=function(w,$,lt=null){lt===null&&(lt=w),p=It.get(lt),p.init($),A.push(p),lt.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),w!==lt&&w.traverseVisible(function(q){q.isLight&&q.layers.test($.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ct=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const At=q.material;if(At)if(Array.isArray(At))for(let Dt=0;Dt<At.length;Dt++){const Ft=At[Dt];le(Ft,lt,q),ct.add(Ft)}else le(At,lt,q),ct.add(At)}),A.pop(),p=null,ct},this.compileAsync=function(w,$,lt=null){const ct=this.compile(w,$,lt);return new Promise(q=>{function At(){if(ct.forEach(function(Dt){y.get(Dt).currentProgram.isReady()&&ct.delete(Dt)}),ct.size===0){q(w);return}setTimeout(At,10)}Z.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Mn=null;function Jn(w){Mn&&Mn(w)}function vu(){$i.stop()}function xu(){$i.start()}const $i=new Fp;$i.setAnimationLoop(Jn),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(w){Mn=w,ft.setAnimationLoop(w),w===null?$i.stop():$i.start()},ft.addEventListener("sessionstart",vu),ft.addEventListener("sessionend",xu),this.render=function(w,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera($),$=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(S,w,$,H),p=It.get(w,A.length),p.init($),A.push(p),tt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),K.setFromProjectionMatrix(tt),_t=this.localClippingEnabled,dt=yt.init(this.clippingPlanes,_t),m=bt.get(w,R.length),m.init(),R.push(m),ft.enabled===!0&&ft.isPresenting===!0){const At=S.xr.getDepthSensingMesh();At!==null&&Ua(At,$,-1/0,S.sortObjects)}Ua(w,$,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(vt,U),P=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,P&&Ot.addToRenderList(m,w),this.info.render.frame++,dt===!0&&yt.beginShadows();const lt=p.state.shadowsArray;Tt.render(lt,w,$),dt===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=m.opaque,q=m.transmissive;if(p.setupLights(),$.isArrayCamera){const At=$.cameras;if(q.length>0)for(let Dt=0,Ft=At.length;Dt<Ft;Dt++){const Bt=At[Dt];Mu(ct,q,w,Bt)}P&&Ot.render(w);for(let Dt=0,Ft=At.length;Dt<Ft;Dt++){const Bt=At[Dt];yu(m,w,Bt,Bt.viewport)}}else q.length>0&&Mu(ct,q,w,$),P&&Ot.render(w),yu(m,w,$);H!==null&&(x.updateMultisampleRenderTarget(H),x.updateRenderTargetMipmap(H)),w.isScene===!0&&w.onAfterRender(S,w,$),ne.resetDefaultState(),C=-1,T=null,A.pop(),A.length>0?(p=A[A.length-1],dt===!0&&yt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Ua(w,$,lt,ct){if(w.visible===!1)return;if(w.layers.test($.layers)){if(w.isGroup)lt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update($);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){ct&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(tt);const Dt=it.update(w),Ft=w.material;Ft.visible&&m.push(w,Dt,Ft,lt,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Dt=it.update(w),Ft=w.material;if(ct&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),mt.copy(Dt.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(tt)),Array.isArray(Ft)){const Bt=Dt.groups;for(let qt=0,Kt=Bt.length;qt<Kt;qt++){const zt=Bt[qt],ee=Ft[zt.materialIndex];ee&&ee.visible&&m.push(w,Dt,ee,lt,mt.z,zt)}}else Ft.visible&&m.push(w,Dt,Ft,lt,mt.z,null)}}const At=w.children;for(let Dt=0,Ft=At.length;Dt<Ft;Dt++)Ua(At[Dt],$,lt,ct)}function yu(w,$,lt,ct){const q=w.opaque,At=w.transmissive,Dt=w.transparent;p.setupLightsView(lt),dt===!0&&yt.setGlobalState(S.clippingPlanes,lt),ct&&ot.viewport(N.copy(ct)),q.length>0&&no(q,$,lt),At.length>0&&no(At,$,lt),Dt.length>0&&no(Dt,$,lt),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Mu(w,$,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ct.id]===void 0&&(p.state.transmissionRenderTarget[ct.id]=new ms(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Qr:yi,minFilter:us,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const At=p.state.transmissionRenderTarget[ct.id],Dt=ct.viewport||N;At.setSize(Dt.z,Dt.w);const Ft=S.getRenderTarget();S.setRenderTarget(At),S.getClearColor(Q),W=S.getClearAlpha(),W<1&&S.setClearColor(16777215,.5),S.clear(),P&&Ot.render(lt);const Bt=S.toneMapping;S.toneMapping=zi;const qt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),p.setupLightsView(ct),dt===!0&&yt.setGlobalState(S.clippingPlanes,ct),no(w,lt,ct),x.updateMultisampleRenderTarget(At),x.updateRenderTargetMipmap(At),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let zt=0,ee=$.length;zt<ee;zt++){const ge=$[zt],xe=ge.object,en=ge.geometry,se=ge.material,Vt=ge.group;if(se.side===mi&&xe.layers.test(ct.layers)){const Qn=se.side;se.side=rn,se.needsUpdate=!0,Su(xe,lt,ct,en,se,Vt),se.side=Qn,se.needsUpdate=!0,Kt=!0}}Kt===!0&&(x.updateMultisampleRenderTarget(At),x.updateRenderTargetMipmap(At))}S.setRenderTarget(Ft),S.setClearColor(Q,W),qt!==void 0&&(ct.viewport=qt),S.toneMapping=Bt}function no(w,$,lt){const ct=$.isScene===!0?$.overrideMaterial:null;for(let q=0,At=w.length;q<At;q++){const Dt=w[q],Ft=Dt.object,Bt=Dt.geometry,qt=ct===null?Dt.material:ct,Kt=Dt.group;Ft.layers.test(lt.layers)&&Su(Ft,$,lt,Bt,qt,Kt)}}function Su(w,$,lt,ct,q,At){w.onBeforeRender(S,$,lt,ct,q,At),w.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(S,$,lt,ct,w,At),q.transparent===!0&&q.side===mi&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,S.renderBufferDirect(lt,$,ct,q,w,At),q.side=Gi,q.needsUpdate=!0,S.renderBufferDirect(lt,$,ct,q,w,At),q.side=mi):S.renderBufferDirect(lt,$,ct,q,w,At),w.onAfterRender(S,$,lt,ct,q,At)}function io(w,$,lt){$.isScene!==!0&&($=E);const ct=y.get(w),q=p.state.lights,At=p.state.shadowsArray,Dt=q.state.version,Ft=pt.getParameters(w,q.state,At,$,lt),Bt=pt.getProgramCacheKey(Ft);let qt=ct.programs;ct.environment=w.isMeshStandardMaterial?$.environment:null,ct.fog=$.fog,ct.envMap=(w.isMeshStandardMaterial?O:g).get(w.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&w.envMap===null?$.environmentRotation:w.envMapRotation,qt===void 0&&(w.addEventListener("dispose",jt),qt=new Map,ct.programs=qt);let Kt=qt.get(Bt);if(Kt!==void 0){if(ct.currentProgram===Kt&&ct.lightsStateVersion===Dt)return Eu(w,Ft),Kt}else Ft.uniforms=pt.getUniforms(w),w.onBeforeCompile(Ft,S),Kt=pt.acquireProgram(Ft,Bt),qt.set(Bt,Kt),ct.uniforms=Ft.uniforms;const zt=ct.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=yt.uniform),Eu(w,Ft),ct.needsLights=Jp(w),ct.lightsStateVersion=Dt,ct.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.directionalShadowMap.value=q.state.directionalShadowMap,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotShadowMap.value=q.state.spotShadowMap,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMap.value=q.state.pointShadowMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix),ct.currentProgram=Kt,ct.uniformsList=null,Kt}function bu(w){if(w.uniformsList===null){const $=w.currentProgram.getUniforms();w.uniformsList=Zo.seqWithValue($.seq,w.uniforms)}return w.uniformsList}function Eu(w,$){const lt=y.get(w);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function Kp(w,$,lt,ct,q){$.isScene!==!0&&($=E),x.resetTextureUnits();const At=$.fog,Dt=ct.isMeshStandardMaterial?$.environment:null,Ft=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:ar,Bt=(ct.isMeshStandardMaterial?O:g).get(ct.envMap||Dt),qt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Kt=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),zt=!!lt.morphAttributes.position,ee=!!lt.morphAttributes.normal,ge=!!lt.morphAttributes.color;let xe=zi;ct.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(xe=S.toneMapping);const en=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,se=en!==void 0?en.length:0,Vt=y.get(ct),Qn=p.state.lights;if(dt===!0&&(_t===!0||w!==T)){const pn=w===T&&ct.id===C;yt.setState(ct,w,pn)}let re=!1;ct.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Qn.state.version||Vt.outputColorSpace!==Ft||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==Bt||ct.fog===!0&&Vt.fog!==At||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==yt.numPlanes||Vt.numIntersection!==yt.numIntersection)||Vt.vertexAlphas!==qt||Vt.vertexTangents!==Kt||Vt.morphTargets!==zt||Vt.morphNormals!==ee||Vt.morphColors!==ge||Vt.toneMapping!==xe||Vt.morphTargetsCount!==se)&&(re=!0):(re=!0,Vt.__version=ct.version);let Sn=Vt.currentProgram;re===!0&&(Sn=io(ct,$,q));let ys=!1,on=!1,ur=!1;const ye=Sn.getUniforms(),Bn=Vt.uniforms;if(ot.useProgram(Sn.program)&&(ys=!0,on=!0,ur=!0),ct.id!==C&&(C=ct.id,on=!0),ys||T!==w){ot.buffers.depth.getReversed()?(L.copy(w.projectionMatrix),_M(L),vM(L),ye.setValue(b,"projectionMatrix",L)):ye.setValue(b,"projectionMatrix",w.projectionMatrix),ye.setValue(b,"viewMatrix",w.matrixWorldInverse);const Si=ye.map.cameraPosition;Si!==void 0&&Si.setValue(b,st.setFromMatrixPosition(w.matrixWorld)),rt.logarithmicDepthBuffer&&ye.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&ye.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,on=!0,ur=!0)}if(q.isSkinnedMesh){ye.setOptional(b,q,"bindMatrix"),ye.setOptional(b,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ye.setValue(b,"boneTexture",pn.boneTexture,x))}q.isBatchedMesh&&(ye.setOptional(b,q,"batchingTexture"),ye.setValue(b,"batchingTexture",q._matricesTexture,x),ye.setOptional(b,q,"batchingIdTexture"),ye.setValue(b,"batchingIdTexture",q._indirectTexture,x),ye.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&ye.setValue(b,"batchingColorTexture",q._colorsTexture,x));const dr=lt.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Lt.update(q,lt,Sn),(on||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,ye.setValue(b,"receiveShadow",q.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(Bn.envMap.value=Bt,Bn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&$.environment!==null&&(Bn.envMapIntensity.value=$.environmentIntensity),on&&(ye.setValue(b,"toneMappingExposure",S.toneMappingExposure),Vt.needsLights&&Zp(Bn,ur),At&&ct.fog===!0&&ht.refreshFogUniforms(Bn,At),ht.refreshMaterialUniforms(Bn,ct,k,X,p.state.transmissionRenderTarget[w.id]),Zo.upload(b,bu(Vt),Bn,x)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Zo.upload(b,bu(Vt),Bn,x),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&ye.setValue(b,"center",q.center),ye.setValue(b,"modelViewMatrix",q.modelViewMatrix),ye.setValue(b,"normalMatrix",q.normalMatrix),ye.setValue(b,"modelMatrix",q.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const pn=ct.uniformsGroups;for(let Si=0,bi=pn.length;Si<bi;Si++){const Tu=pn[Si];V.update(Tu,Sn),V.bind(Tu,Sn)}}return Sn}function Zp(w,$){w.ambientLightColor.needsUpdate=$,w.lightProbe.needsUpdate=$,w.directionalLights.needsUpdate=$,w.directionalLightShadows.needsUpdate=$,w.pointLights.needsUpdate=$,w.pointLightShadows.needsUpdate=$,w.spotLights.needsUpdate=$,w.spotLightShadows.needsUpdate=$,w.rectAreaLights.needsUpdate=$,w.hemisphereLights.needsUpdate=$}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(w,$,lt){y.get(w.texture).__webglTexture=$,y.get(w.depthTexture).__webglTexture=lt;const ct=y.get(w);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=lt===void 0,ct.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,$){const lt=y.get(w);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(w,$=0,lt=0){H=w,z=$,I=lt;let ct=!0,q=null,At=!1,Dt=!1;if(w){const Bt=y.get(w);if(Bt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(b.FRAMEBUFFER,null),ct=!1;else if(Bt.__webglFramebuffer===void 0)x.setupRenderTarget(w);else if(Bt.__hasExternalTextures)x.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const zt=w.depthTexture;if(Bt.__boundDepthTexture!==zt){if(zt!==null&&y.has(zt)&&(w.width!==zt.image.width||w.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(w)}}const qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Dt=!0);const Kt=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Kt[$])?q=Kt[$][lt]:q=Kt[$],At=!0):w.samples>0&&x.useMultisampledRTT(w)===!1?q=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Kt)?q=Kt[lt]:q=Kt,N.copy(w.viewport),ut.copy(w.scissor),nt=w.scissorTest}else N.copy(D).multiplyScalar(k).floor(),ut.copy(gt).multiplyScalar(k).floor(),nt=wt;if(ot.bindFramebuffer(b.FRAMEBUFFER,q)&&ct&&ot.drawBuffers(w,q),ot.viewport(N),ot.scissor(ut),ot.setScissorTest(nt),At){const Bt=y.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+$,Bt.__webglTexture,lt)}else if(Dt){const Bt=y.get(w.texture),qt=$||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Bt.__webglTexture,lt||0,qt)}C=-1},this.readRenderTargetPixels=function(w,$,lt,ct,q,At,Dt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){ot.bindFramebuffer(b.FRAMEBUFFER,Ft);try{const Bt=w.texture,qt=Bt.format,Kt=Bt.type;if(!rt.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=w.width-ct&&lt>=0&&lt<=w.height-q&&b.readPixels($,lt,ct,q,Ut.convert(qt),Ut.convert(Kt),At)}finally{const Bt=H!==null?y.get(H).__webglFramebuffer:null;ot.bindFramebuffer(b.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(w,$,lt,ct,q,At,Dt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ft=Ft[Dt]),Ft){const Bt=w.texture,qt=Bt.format,Kt=Bt.type;if(!rt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=w.width-ct&&lt>=0&&lt<=w.height-q){ot.bindFramebuffer(b.FRAMEBUFFER,Ft);const zt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels($,lt,ct,q,Ut.convert(qt),Ut.convert(Kt),0);const ee=H!==null?y.get(H).__webglFramebuffer:null;ot.bindFramebuffer(b.FRAMEBUFFER,ee);const ge=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await gM(b,ge,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(zt),b.deleteSync(ge),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,$=null,lt=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1]);const ct=Math.pow(2,-lt),q=Math.floor(w.image.width*ct),At=Math.floor(w.image.height*ct),Dt=$!==null?$.x:0,Ft=$!==null?$.y:0;x.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,lt,0,0,Dt,Ft,q,At),ot.unbindTexture()},this.copyTextureToTexture=function(w,$,lt=null,ct=null,q=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,w=arguments[1],$=arguments[2],q=arguments[3]||0,lt=null);let At,Dt,Ft,Bt,qt,Kt,zt,ee,ge;const xe=w.isCompressedTexture?w.mipmaps[q]:w.image;lt!==null?(At=lt.max.x-lt.min.x,Dt=lt.max.y-lt.min.y,Ft=lt.isBox3?lt.max.z-lt.min.z:1,Bt=lt.min.x,qt=lt.min.y,Kt=lt.isBox3?lt.min.z:0):(At=xe.width,Dt=xe.height,Ft=xe.depth||1,Bt=0,qt=0,Kt=0),ct!==null?(zt=ct.x,ee=ct.y,ge=ct.z):(zt=0,ee=0,ge=0);const en=Ut.convert($.format),se=Ut.convert($.type);let Vt;$.isData3DTexture?(x.setTexture3D($,0),Vt=b.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(x.setTexture2DArray($,0),Vt=b.TEXTURE_2D_ARRAY):(x.setTexture2D($,0),Vt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,$.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,$.unpackAlignment);const Qn=b.getParameter(b.UNPACK_ROW_LENGTH),re=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Sn=b.getParameter(b.UNPACK_SKIP_PIXELS),ys=b.getParameter(b.UNPACK_SKIP_ROWS),on=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,xe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,xe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(b.UNPACK_SKIP_ROWS,qt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kt);const ur=w.isDataArrayTexture||w.isData3DTexture,ye=$.isDataArrayTexture||$.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=y.get(w),dr=y.get($),pn=y.get(Bn.__renderTarget),Si=y.get(dr.__renderTarget);ot.bindFramebuffer(b.READ_FRAMEBUFFER,pn.__webglFramebuffer),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let bi=0;bi<Ft;bi++)ur&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,y.get(w).__webglTexture,q,Kt+bi),w.isDepthTexture?(ye&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,y.get($).__webglTexture,q,ge+bi),b.blitFramebuffer(Bt,qt,At,Dt,zt,ee,At,Dt,b.DEPTH_BUFFER_BIT,b.NEAREST)):ye?b.copyTexSubImage3D(Vt,q,zt,ee,ge+bi,Bt,qt,At,Dt):b.copyTexSubImage2D(Vt,q,zt,ee,ge+bi,Bt,qt,At,Dt);ot.bindFramebuffer(b.READ_FRAMEBUFFER,null),ot.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?b.texSubImage3D(Vt,q,zt,ee,ge,At,Dt,Ft,en,se,xe.data):$.isCompressedArrayTexture?b.compressedTexSubImage3D(Vt,q,zt,ee,ge,At,Dt,Ft,en,xe.data):b.texSubImage3D(Vt,q,zt,ee,ge,At,Dt,Ft,en,se,xe):w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,q,zt,ee,At,Dt,en,se,xe.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,q,zt,ee,xe.width,xe.height,en,xe.data):b.texSubImage2D(b.TEXTURE_2D,q,zt,ee,At,Dt,en,se,xe);b.pixelStorei(b.UNPACK_ROW_LENGTH,Qn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,re),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Sn),b.pixelStorei(b.UNPACK_SKIP_ROWS,ys),b.pixelStorei(b.UNPACK_SKIP_IMAGES,on),q===0&&$.generateMipmaps&&b.generateMipmap(Vt),ot.unbindTexture()},this.copyTextureToTexture3D=function(w,$,lt=null,ct=null,q=0){return w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ct=arguments[1]||null,w=arguments[2],$=arguments[3],q=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,$,lt,ct,q)},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&x.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?x.setTextureCube(w,0):w.isData3DTexture?x.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?x.setTexture2DArray(w,0):x.setTexture2D(w,0),ot.unbindTexture()},this.resetState=function(){z=0,I=0,H=null,ot.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class mu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new mu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CT extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class RT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new G;class ca{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new In(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wp extends xs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Os;const xr=new G,Fs=new G,Bs=new G,zs=new Xt,yr=new Xt,Xp=new ve,Lo=new G,Mr=new G,Io=new G,bf=new Xt,wl=new Xt,Ef=new Xt;class PT extends Ne{constructor(t=new Wp){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new RT(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new ca(i,3,0,!1)),Os.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),Xp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Bs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-Bs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Uo(Lo.set(-.5,-.5,0),Bs,o,Fs,s,r),Uo(Mr.set(.5,-.5,0),Bs,o,Fs,s,r),Uo(Io.set(.5,.5,0),Bs,o,Fs,s,r),bf.set(0,0),wl.set(1,0),Ef.set(1,1);let a=t.ray.intersectTriangle(Lo,Mr,Io,!1,xr);if(a===null&&(Uo(Mr.set(-.5,.5,0),Bs,o,Fs,s,r),wl.set(0,1),a=t.ray.intersectTriangle(Lo,Io,Mr,!1,xr),a===null))return;const l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:un.getInterpolation(xr,Lo,Mr,Io,bf,wl,Ef,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Uo(n,t,e,i,s,r){zs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(yr.x=r*zs.x-s*zs.y,yr.y=s*zs.x+r*zs.y):yr.copy(zs),n.copy(t),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(Xp)}class ua extends xs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new G,fa=new G,Tf=new ve,Sr=new La,No=new Da,Al=new G,wf=new G;class Rr extends Ne{constructor(t=new Je,e=new ua){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;Tf.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(Tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=h,m=_-1;v<m;v+=c){const p=u.getX(v),R=u.getX(v+1),A=Oo(this,t,Sr,l,p,R);A&&e.push(A)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(h),p=Oo(this,t,Sr,l,v,m);p&&e.push(p)}}else{const h=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=h,m=_-1;v<m;v+=c){const p=Oo(this,t,Sr,l,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=Oo(this,t,Sr,l,_-1,h);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Oo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,Al,wf)>i)return;Al.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Al);if(!(l<t.near||l>t.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Af=new G,Cf=new G;class $p extends Rr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Af.fromBufferAttribute(e,s),Cf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Af.distanceTo(Cf);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class DT extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Fo=new G,Bo=new G,Cl=new G,zo=new un;class LT extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Fr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:p}=zo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),zo.getNormal(Cl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let R=0;R<3;R++){const A=(R+1)%3,S=d[R],B=d[A],z=zo[u[R]],I=zo[u[A]],H=`${S}_${B}`,C=`${B}_${S}`;C in f&&f[C]?(Cl.dot(f[C].normal)<=r&&(h.push(z.x,z.y,z.z),h.push(I.x,I.y,I.z)),f[C]=null):H in f||(f[H]={index0:c[R],index1:c[A],normal:Cl.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:m}=f[_];Fo.fromBufferAttribute(a,v),Bo.fromBufferAttribute(a,m),h.push(Fo.x,Fo.y,Fo.z),h.push(Bo.x,Bo.y,Bo.z)}this.setAttribute("position",new vn(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rf extends xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gu extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Rl=new ve,Pf=new G,Df=new G;class qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lf=new ve,br=new G,Pl=new G;class IT extends qp{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xt(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),i.position.copy(br),Pl.copy(i.position),Pl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Pl),i.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),Lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}}class UT extends gu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new IT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class NT extends qp{constructor(){super(new Bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class If extends gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new NT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class OT extends gu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Uf=new ve;class FT{constructor(t,e,i=0,s=1/0){this.ray=new La(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(Nf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(Nf),i}}function Nf(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],t,e,!0)}}class Of{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class BT extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,h=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3,v.toArray(c,h),h+=3}const u=new Je;u.setAttribute("position",new vn(l,3)),u.setAttribute("color",new vn(c,3));const d=new ua({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zT extends vs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);const Ff={type:"change"},_u={type:"start"},Yp={type:"end"},ko=new La,Bf=new Ii,kT=Math.cos(70*pM.DEG2RAD),we=new G,nn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dl=1e-6;class VT extends zT{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new gs,this._lastTargetPosition=new G,this._quat=new gs().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Of,this._sphericalDelta=new Of,this._scale=1,this._panOffset=new G,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new G,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=GT.bind(this),this._onPointerDown=HT.bind(this),this._onPointerUp=WT.bind(this),this._onContextMenu=ZT.bind(this),this._onMouseWheel=qT.bind(this),this._onKeyDown=YT.bind(this),this._onTouchStart=jT.bind(this),this._onTouchMove=KT.bind(this),this._onMouseDown=XT.bind(this),this._onMouseMove=$T.bind(this),this._interceptControlDown=JT.bind(this),this._interceptControlUp=QT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ff),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ko.origin.copy(this.object.position),ko.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ko.direction))<kT?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),ko.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dl||this._lastTargetPosition.distanceToSquared(this.target)>Dl?(this.dispatchEvent(Ff),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function HT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function GT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function WT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yp),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function XT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(_u)}function $T(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function qT(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(_u),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yp))}function YT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function jT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(_u)}function KT(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function ZT(n){this.enabled!==!1&&n.preventDefault()}function JT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function QT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const tw={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},ew={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},nw={style:{display:"flex","align-items":"center",gap:"8px"}},iw={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},sw={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},rw={style:{color:"#00d2ff","font-weight":"bold"}},ow={style:{color:"#ecc94b"}},aw={style:{color:"#e2e8f0"}},lw={style:{color:"#e2e8f0"}},cw={style:{color:"#63b3ed"}},uw={style:{color:"#e2e8f0"}},dw={style:{color:"#e2e8f0"}},fw={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},hw={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},pw={style:{display:"flex","align-items":"center",gap:"6px"}},mw={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},gw={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},_w={style:{color:"#48bb78"}},vw={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},xw={style:{color:"#ecc94b"}},yw={style:{color:"#63b3ed"}},Mw=Xi({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=ce(null),i=ce(null),s=ce("current"),r=ce({visible:!1,x:0,y:0}),o=Ze(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(Q){s.value=Q,I()}let l,c,u,d,f,h,_,v=[],m=null,p=new Xs,R=new Xs;function A(Q){const X=Math.max(0,Math.min(1,(Q-65)/31)),k=new $t;return X<.25?k.lerpColors(new $t(16007006),new $t(16347926),X/.25):X<.5?k.lerpColors(new $t(16347926),new $t(15381256),(X-.25)/.25):X<.75?k.lerpColors(new $t(15381256),new $t(1096065),(X-.5)/.25):X<.9?k.lerpColors(new $t(1096065),new $t(440020),(X-.75)/.15):k.lerpColors(new $t(440020),new $t(9133302),(X-.9)/.1),k}function S(Q,W=24,et="#94a3b8"){const X=document.createElement("canvas");X.width=512,X.height=128;const k=X.getContext("2d");k.fillStyle="transparent",k.fillRect(0,0,X.width,X.height),k.font=`bold ${W*2}px "Fira Code", monospace`,k.fillStyle=et,k.textAlign="center",k.textBaseline="middle",k.fillText(Q,X.width/2,X.height/2);const vt=new DT(X);vt.minFilter=An;const U=new Wp({map:vt,transparent:!0,depthWrite:!1}),D=new PT(U);return D.scale.set(4,1,1),D}function B(){if(!e.value)return;const Q=e.value.clientWidth,W=e.value.clientHeight;l=new CT,l.background=new $t(461588),l.fog=new mu(461588,.015),c=new cn(45,Q/W,.1,1e3),c.position.set(24,22,28),u=new AT({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(Q,W),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=fp,e.value.appendChild(u.domElement),d=new VT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02,d.minDistance=6,d.maxDistance=80,d.target.set(0,4,0);const et=new OT(16777215,.85);l.add(et);const X=new If(16777215,1.2);X.position.set(30,40,25),X.castShadow=!0,X.shadow.mapSize.width=1024,X.shadow.mapSize.height=1024,l.add(X);const k=new If(3718648,.6);k.position.set(-25,20,-25),l.add(k);const vt=new UT(1096065,.8,50);vt.position.set(0,15,0),l.add(vt),h=new FT,_=new Xt(-999,-999),l.add(p),l.add(R),window.addEventListener("resize",nt),e.value.addEventListener("mousemove",H),e.value.addEventListener("mouseleave",C),I(),ut()}function z(){if(!d||!c)return;const Q=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps.length:8,W=t.loadSteps&&t.loadSteps.length>0?t.loadSteps.length:8,et=Math.max(18,Math.min(65,Q*2.2)),X=Math.max(18,Math.min(65,W*2.2)),k=Math.max(et,X);c.position.set(k*1.15,k*.95,k*1.25),d.target.set(0,4,0),d.update()}function I(){if(!l)return;for(;p.children.length>0;){const pt=p.children[0];p.remove(pt)}for(;R.children.length>0;){const pt=R.children[0];R.remove(pt)}v=[],m=null,i.value=null,r.value.visible=!1;const Q=t.points;if(!Q||Q.length===0)return;const W=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((pt,ht)=>pt-ht):[...new Set(Q.map(pt=>pt.voltageTarget))].sort((pt,ht)=>pt-ht),et=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((pt,ht)=>pt-ht):[...new Set(Q.map(pt=>pt.loadTarget))].sort((pt,ht)=>pt-ht),X=Math.max(1,W.length),k=Math.max(1,et.length),vt=Math.max(18,Math.min(65,X*2.2)),U=Math.max(18,Math.min(65,k*2.2)),D=12,gt=X>1?vt/(X-1):vt,wt=k>1?U/(k-1):U,K=Math.max(.12,Math.min(1.5,gt*.7)),dt=Math.max(.12,Math.min(1.5,wt*.7)),_t=new Map;Q.forEach(pt=>{if(pt.status==="completed"||pt.timestamp>0){const ht=`${pt.voltageTarget.toFixed(3)}_${pt.loadTarget.toFixed(3)}`;_t.set(ht,pt)}});const L=Math.max(vt,U),tt=L+14,st=Math.max(12,Math.min(40,Math.max(X,k))),mt=new BT(tt,st,165063,1976635);mt.position.set(0,0,0),p.add(mt);const E=new eo(tt*1.4,tt*1.4),P=new Rf({color:725280,roughness:.7,metalness:.1}),F=new Rn(E,P);F.rotation.x=-Math.PI/2,F.position.y=-.05,F.receiveShadow=!0,p.add(F);const b=new ua({color:3718648,linewidth:2}),J=new Je().setFromPoints([new G(-vt/2-1,0,U/2+1),new G(vt/2+2,0,U/2+1)]);p.add(new Rr(J,b));const Z=S("X: 输入电压 Vin (V)",22,"#38bdf8");Z.position.set(0,.4,U/2+3.2),Z.scale.set(7.5,1.9,1),p.add(Z);const rt=10,ot=Math.max(1,Math.ceil(X/rt));W.forEach((pt,ht)=>{if(ht%ot===0||ht===X-1){const bt=-vt/2+(X>1?ht/(X-1)*vt:0),It=S(`${pt}V`,16,"#94a3b8");It.position.set(bt,.2,U/2+1.8),It.scale.set(Math.min(3.2,gt*1.5),.9,1),p.add(It)}});const Y=new Je().setFromPoints([new G(-vt/2-1,0,-U/2-1),new G(-vt/2-1,0,U/2+2)]);p.add(new Rr(Y,b));const y=s.value==="power"||t.loadMode==="CW",x=y?"W":"A",O=S(y?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");O.position.set(-vt/2-3.8,.4,0),O.scale.set(8.5,2.1,1),p.add(O);const j=Math.max(1,Math.ceil(k/rt));et.forEach((pt,ht)=>{if(ht%j===0||ht===k-1){const bt=-U/2+(k>1?ht/(k-1)*U:0),It=S(`${pt}${x}`,16,"#94a3b8");It.position.set(-vt/2-2.2,.2,bt),It.scale.set(Math.min(3.2,wt*1.5),.9,1),p.add(It)}});const at=new Je().setFromPoints([new G(-vt/2-1,0,U/2+1),new G(-vt/2-1,D+1.5,U/2+1)]);p.add(new Rr(at,b));const it=S("Z: 转换效率 η (%)",22,"#10b981");it.position.set(-vt/2-1,D+2.4,U/2+1),it.scale.set(7.5,1.9,1),p.add(it),[20,40,60,80,100].forEach(pt=>{const ht=pt/100*D,bt=S(`${pt}%`,16,"#6ee7b7");bt.position.set(-vt/2-2,ht,U/2+1),bt.scale.set(2.8,.8,1),p.add(bt);const It=new Je().setFromPoints([new G(-vt/2-.8,ht,U/2+1),new G(-vt/2-.2,ht,U/2+1)]);p.add(new Rr(It,b))}),W.forEach((pt,ht)=>{et.forEach((bt,It)=>{const yt=`${pt.toFixed(3)}_${bt.toFixed(3)}`,Tt=_t.get(yt);if(!Tt)return;const Ot=-vt/2+(X>1?ht/(X-1)*vt:0),Lt=-U/2+(k>1?It/(k-1)*U:0),St=Math.max(.5,Math.min(100,Tt.efficiency)),Nt=Math.max(.2,St/100*D),Ut=new lr(K,Nt,dt);Ut.translate(0,Nt/2,0),Ut.computeBoundingBox(),Ut.computeBoundingSphere();const ne=A(St),V=new Rf({color:ne,roughness:.35,metalness:.25,emissive:ne,emissiveIntensity:.12}),Mt=new Rn(Ut,V);Mt.position.set(Ot,0,Lt),Mt.castShadow=!0,Mt.receiveShadow=!0,Mt.__barPoint=Tt;const ft=new LT(Ut),xt=new ua({color:16777215,transparent:!0,opacity:.25}),Pt=new $p(ft,xt);Mt.add(Pt),R.add(Mt),Mt.scale.set(1,.01,1),v.push({mesh:Mt,point:Tt,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:Nt,material:V,origColor:ne.clone()})})}),c&&d&&(c.position.set(L*1.15,L*.95,L*1.25),c.far=Math.max(2e3,L*30),c.updateProjectionMatrix(),d.maxDistance=L*8,d.minDistance=3,d.target.set(0,D*.35,0),d.update())}function H(Q){if(!e.value)return;const W=e.value.getBoundingClientRect();_.x=(Q.clientX-W.left)/W.width*2-1,_.y=-((Q.clientY-W.top)/W.height)*2+1,r.value.x=Q.clientX-W.left,r.value.y=Q.clientY-W.top}function C(){_.x=-999,_.y=-999,r.value.visible=!1,m&&T()}function T(){m&&(m.targetElevation=0,m.material.emissive.copy(m.origColor),m.material.emissiveIntensity=.12,m=null,i.value=null,r.value.visible=!1)}function N(){if(!c||!l||v.length===0)return;h.setFromCamera(_,c);const Q=v.map(et=>et.mesh),W=h.intersectObjects(Q,!1);if(W.length>0){const et=W[0].object,X=v.find(k=>k.mesh===et);X&&X!==m&&(m&&T(),m=X,i.value=X.point,r.value.visible=!0,X.targetElevation=1.2,X.material.emissive.set(3718648),X.material.emissiveIntensity=.65)}else m&&T()}function ut(){f=requestAnimationFrame(ut),d&&d.update(),N(),v.forEach(Q=>{Q.currentScaleY+=(Q.targetScaleY-Q.currentScaleY)*.1,Q.mesh.scale.y=Q.currentScaleY,Q.currentElevation+=(Q.targetElevation-Q.currentElevation)*.15,Q.mesh.position.y=Q.baseY+Q.currentElevation}),u&&l&&c&&u.render(l,c)}function nt(){if(!e.value||!u||!c)return;const Q=e.value.clientWidth,W=e.value.clientHeight;c.aspect=Q/W,c.updateProjectionMatrix(),u.setSize(Q,W)}return fs(()=>t.points,()=>{I()},{deep:!0}),Kr(()=>{B()}),Zr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",nt),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(Q,W)=>(Ht(),Wt("div",tw,[M("div",ew,[M("div",nw,[W[2]||(W[2]=Gr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-002e0958><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-002e0958></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-002e0958></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-002e0958></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-002e0958>3D 空间特征柱状图</span>',2)),M("span",iw,"| X: Vin | Y: "+Et(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ht(),Wt("div",sw,[M("span",rw," 选定点 #"+Et(i.value.stepIndex)+": ",1),M("span",null,[W[3]||(W[3]=kt("Vin: ",-1)),M("b",ow,Et(i.value.vin.toFixed(3))+"V",1)]),M("span",null,[W[4]||(W[4]=kt("Iin: ",-1)),M("b",aw,Et(i.value.iin.toFixed(3))+"A",1)]),M("span",null,[W[5]||(W[5]=kt("Pin: ",-1)),M("b",lw,Et(i.value.pin.toFixed(3))+"W",1)]),M("span",null,[W[6]||(W[6]=kt("Vout: ",-1)),M("b",cw,Et(i.value.vout.toFixed(3))+"V",1)]),M("span",null,[W[7]||(W[7]=kt("Iout: ",-1)),M("b",uw,Et(i.value.iout.toFixed(3))+"A",1)]),M("span",null,[W[8]||(W[8]=kt("Pout: ",-1)),M("b",dw,Et(i.value.pout.toFixed(3))+"W",1)]),M("span",fw," 效率 η: "+Et(i.value.efficiency.toFixed(2))+"% ",1)])):(Ht(),Wt("div",hw,[...W[9]||(W[9]=[M("span",{style:{color:"#ecc94b"}},"💡",-1),M("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),M("div",pw,[M("div",mw,[M("button",{class:"btn",style:Ie({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:W[0]||(W[0]=et=>a("current"))}," Y: 负载电流 (A) ",4),M("button",{class:"btn",style:Ie({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:W[1]||(W[1]=et=>a("power"))}," Y: 输出功率 (W) ",4)]),M("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:z,title:"重置视角"}," 重置视角 ")])]),M("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ht(),Wt("div",{key:0,style:Ie([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[M("div",gw,[M("span",null,"采样点 #"+Et(i.value.stepIndex),1),M("span",_w,"η = "+Et(i.value.efficiency.toFixed(2))+"%",1)]),M("div",vw,[M("div",null,[W[10]||(W[10]=kt("Vin: ",-1)),M("span",xw,Et(i.value.vin.toFixed(2))+"V",1)]),M("div",null,[W[11]||(W[11]=kt("Vout: ",-1)),M("span",yw,Et(i.value.vout.toFixed(2))+"V",1)]),M("div",null,[W[12]||(W[12]=kt("Iin: ",-1)),M("span",null,Et(i.value.iin.toFixed(3))+"A",1)]),M("div",null,[W[13]||(W[13]=kt("Iout: ",-1)),M("span",null,Et(i.value.iout.toFixed(3))+"A",1)]),M("div",null,[W[14]||(W[14]=kt("Pin: ",-1)),M("span",null,Et(i.value.pin.toFixed(2))+"W",1)]),M("div",null,[W[15]||(W[15]=kt("Pout: ",-1)),M("span",null,Et(i.value.pout.toFixed(2))+"W",1)])])],4)):Re("",!0),W[16]||(W[16]=Gr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-002e0958><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-002e0958><span data-v-002e0958>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-002e0958>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-002e0958></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-002e0958><span data-v-002e0958>&lt;70% 低效</span><span data-v-002e0958>85%</span><span data-v-002e0958>&gt;95% 高效</span></div></div>',1))],512)]))}}),Sw=Kh(Mw,[["__scopeId","data-v-002e0958"]]),bw={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},Ew={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},Tw={style:{display:"flex","align-items":"center",gap:"12px"}},ww={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},Aw={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},Cw={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},Rw={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},Pw={style:{color:"#68d391","font-size":"13px"}},Dw={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},Lw={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},Iw={style:{color:"#4fd1c5","font-size":"12px"}},Uw={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},Nw={style:{color:"#ecc94b"}},Ow={style:{display:"flex","align-items":"center",gap:"8px"}},Fw={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},Bw=["value"],zw={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},kw={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},Vw={style:{flex:"1",overflow:"auto",padding:"12px"}},Hw={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},Gw={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},Ww={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},Xw={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},$w=["onClick"],qw={key:1,style:{color:"#4a5568"}},Yw={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},jw={style:{color:"#63b3ed","font-weight":"bold"}},Kw={style:{color:"#ecc94b"}},Zw={style:{color:"#63b3ed"}},Jw={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},Qw=Xi({__name:"Result3DView",setup(n){const t=Ov(),e=Nv(),i=ce(null),s=ce([]),r=ce(""),o=ce(null),a=ce("3d");async function l(){const _=t.params.id||"";if(s.value=await up(),_){const v=await N0(_);if(v){i.value=v,r.value=v.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(_,v){if(i.value)return i.value.points.find(m=>Math.abs(m.voltageTarget-_)<1e-4&&Math.abs(m.loadTarget-v)<1e-4)}function u(_){return _>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:_>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:_>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&Xo(i.value)}function h(){window.opener?window.close():e.push("/")}return fs(()=>t.params.id,()=>{l()}),Kr(()=>{l()}),(_,v)=>{var p,R,A,S,B,z,I,H;const m=bh("router-link");return Ht(),Wt("div",bw,[M("header",Ew,[M("div",Tw,[Ue(m,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:_h(()=>[...v[6]||(v[6]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"15 18 9 12 15 6"})],-1),kt(" 控制台 ",-1)])]),_:1}),M("div",null,[M("div",ww,[M("span",null,Et(((p=i.value)==null?void 0:p.title)||"测试结果数据查看"),1),v[7]||(v[7]=M("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),M("div",Aw," 测试时间: "+Et(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+Et((A=(R=i.value)==null?void 0:R.config)==null?void 0:A.voltageMin)+"V~"+Et((B=(S=i.value)==null?void 0:S.config)==null?void 0:B.voltageMax)+"V, "+Et((I=(z=i.value)==null?void 0:z.config)==null?void 0:I.loadMode),1)])]),(H=i.value)!=null&&H.summary?(Ht(),Wt("div",Cw,[M("div",Rw,[M("span",null,[v[8]||(v[8]=kt("峰值效率 η_max: ",-1)),M("b",Pw,Et(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ht(),Wt("span",Dw," (@"+Et(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+Et(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Re("",!0)]),M("div",Lw,[M("span",null,[v[9]||(v[9]=kt("平均效率 η_avg: ",-1)),M("b",Iw,Et(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),M("div",Uw,[M("span",null,[v[10]||(v[10]=kt("矩阵测试点: ",-1)),M("b",Nw,Et(i.value.points.length)+" 点",1)])])])):Re("",!0),M("div",Ow,[M("div",Fw,[M("button",{class:"btn",style:Ie({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[0]||(v[0]=C=>a.value="3d")}," 3D 空间柱状图 ",4),M("button",{class:"btn",style:Ie({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[1]||(v[1]=C=>a.value="matrix")}," 2D 效率矩阵表 ",4),M("button",{class:"btn",style:Ie({backgroundColor:a.value==="split"?"#3182ce":"transparent",color:a.value==="split"?"#ffffff":"#a0aec0",fontWeight:a.value==="split"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[2]||(v[2]=C=>a.value="split")}," 并排双视图 ",4)]),s.value.length>1?Ce((Ht(),Wt("select",{key:0,"onUpdate:modelValue":v[3]||(v[3]=C=>r.value=C),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ht(!0),Wt(Fe,null,Hs(s.value,C=>(Ht(),Wt("option",{key:C.id,value:C.id},Et(C.title),9,Bw))),128))],544)),[[Wl,r.value]]):Re("",!0),i.value?(Ht(),Wt("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[...v[11]||(v[11]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),kt(" 下载 CSV ",-1)])])):Re("",!0),M("button",{class:"btn",style:{padding:"4px 8px"},onClick:h,title:"关闭页面"}," ✕ ")])]),M("div",zw,[a.value==="3d"||a.value==="split"?(Ht(),Wt("div",{key:0,style:Ie({flex:a.value==="split"?"1.2":"1",height:"100%",position:"relative",borderRight:a.value==="split"?"1px solid #2d3748":"none"})},[i.value&&i.value.points.length>0?(Ht(),eu(Sw,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ht(),Wt("div",kw," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],4)):Re("",!0),a.value==="matrix"||a.value==="split"?(Ht(),Wt("div",{key:1,style:Ie({flex:(a.value==="split","1"),height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#171b22",overflow:"hidden"})},[v[18]||(v[18]=Gr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),M("div",Vw,[i.value?(Ht(),Wt("table",Hw,[M("thead",null,[M("tr",Gw,[M("th",Ww," 负载 ("+Et(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ht(!0),Wt(Fe,null,Hs(i.value.voltageSteps,C=>(Ht(),Wt("th",{key:C,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},Et(C)+"V ",1))),128))])]),M("tbody",null,[(Ht(!0),Wt(Fe,null,Hs(i.value.loadSteps,C=>(Ht(),Wt("tr",{key:C,style:{"border-bottom":"1px solid #2d3748"}},[M("td",Xw,Et(C)+Et(i.value.config.loadMode==="CC"?"A":"W"),1),(Ht(!0),Wt(Fe,null,Hs(i.value.voltageSteps,T=>(Ht(),Wt("td",{key:T,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:v[4]||(v[4]=N=>N.currentTarget.style.transform="scale(1.04)"),onMouseleave:v[5]||(v[5]=N=>N.currentTarget.style.transform="scale(1.0)"),onClick:N=>o.value=c(T,C)||null},[c(T,C)?(Ht(),Wt("div",{key:0,style:Ie([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(T,C).efficiency)])},Et(c(T,C).efficiency.toFixed(2))+"% ",5)):(Ht(),Wt("span",qw,"--"))],40,$w))),128))]))),128))])])):Re("",!0)]),o.value?(Ht(),Wt("div",Yw,[M("span",jw," 选定点 (#"+Et(o.value.stepIndex)+"): ",1),M("span",null,"目标: "+Et(o.value.voltageTarget)+"V / "+Et(o.value.loadTarget)+Et(o.value.loadMode),1),M("span",null,[v[12]||(v[12]=kt("实测Vin: ",-1)),M("b",Kw,Et(o.value.vin.toFixed(3))+"V",1)]),M("span",null,[v[13]||(v[13]=kt("实测Iin: ",-1)),M("b",null,Et(o.value.iin.toFixed(3))+"A",1)]),M("span",null,[v[14]||(v[14]=kt("实测Pin: ",-1)),M("b",null,Et(o.value.pin.toFixed(3))+"W",1)]),M("span",null,[v[15]||(v[15]=kt("实测Vout: ",-1)),M("b",Zw,Et(o.value.vout.toFixed(3))+"V",1)]),M("span",null,[v[16]||(v[16]=kt("实测Iout: ",-1)),M("b",null,Et(o.value.iout.toFixed(3))+"A",1)]),M("span",null,[v[17]||(v[17]=kt("实测Pout: ",-1)),M("b",null,Et(o.value.pout.toFixed(3))+"W",1)]),M("span",Jw," 效率 η: "+Et(o.value.efficiency.toFixed(2))+"% ",1)])):Re("",!0)],4)):Re("",!0)])])}}}),tA=[{path:"/",name:"Console",component:wy},{path:"/result/:id",name:"Result3D",component:Qw,props:!0}],eA=Uv({history:fv(),routes:tA}),jp=S_(A_);jp.use(eA);jp.mount("#app");
