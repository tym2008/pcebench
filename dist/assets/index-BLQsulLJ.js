var Qp=Object.defineProperty;var tm=(n,t,e)=>t in n?Qp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var he=(n,t,e)=>tm(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const pe={},rs=[],$n=()=>{},zf=()=>!1,ha=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pa=n=>n.startsWith("onUpdate:"),Be=Object.assign,kc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},em=Object.prototype.hasOwnProperty,ee=(n,t)=>em.call(n,t),kt=Array.isArray,Ni=n=>qr(n)==="[object Map]",vi=n=>qr(n)==="[object Set]",wu=n=>qr(n)==="[object Date]",$t=n=>typeof n=="function",be=n=>typeof n=="string",qn=n=>typeof n=="symbol",ae=n=>n!==null&&typeof n=="object",kf=n=>(ae(n)||$t(n))&&$t(n.then)&&$t(n.catch),Vf=Object.prototype.toString,qr=n=>Vf.call(n),nm=n=>qr(n).slice(8,-1),Hf=n=>qr(n)==="[object Object]",Vc=n=>be(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=zc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},im=/-\w/g,Qe=ma(n=>n.replace(im,t=>t.slice(1).toUpperCase())),sm=/\B([A-Z])/g,gs=ma(n=>n.replace(sm,"-$1").toLowerCase()),ga=ma(n=>n.charAt(0).toUpperCase()+n.slice(1)),Na=ma(n=>n?`on${ga(n)}`:""),Wn=(n,t)=>!Object.is(n,t),ko=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Gf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},_a=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Au;const va=()=>Au||(Au=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ie(n){if(kt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=be(i)?lm(i):Ie(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(be(n)||ae(n))return n}const rm=/;(?![^(]*\))/g,om=/:([^]+)/,am=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function lm(n){const t={};return n.replace(am,e=>e.startsWith("/*")?"":e).split(rm).forEach(e=>{if(e){const i=e.split(om);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function ci(n){let t="";if(be(n))t=n;else if(kt(n))for(let e=0;e<n.length;e++){const i=ci(n[e]);i&&(t+=i+" ")}else if(ae(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const cm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",um=zc(cm);function Wf(n){return!!n||n===""}function dm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Un(n[s],t[s],e);return i}function Cu(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Un(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function fm(n,t,e){let i=Ni(n),s=Ni(t);if(i||s||(i=vi(n),s=vi(t),i||s))return i&&s?Cu(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Un(n[a],t[a],e))return!1}return String(n)===String(t)}function Ru(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Un(n,t,e){if(n===t)return!0;let i=wu(n),s=wu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=qn(n),s=qn(t),i||s?n===t:(i=kt(n),s=kt(t),i||s?i&&s?Ru(n,t,e,dm):!1:(i=ae(n),s=ae(t),i||s?!i||!s?!1:Ru(n,t,e,fm):String(n)===String(t))))}function Hc(n,t){return n.findIndex(e=>Un(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),St=n=>be(n)?n:n==null?"":kt(n)||ae(n)&&(n.toString===Vf||!$t(n.toString))?Xf(n)?St(n.value):JSON.stringify(n,$f,2):String(n),$f=(n,t)=>Xf(t)?$f(n,t.value):Ni(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Oa(i,r)+" =>"]=s,e),{})}:vi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Oa(e))}:qn(t)?Oa(t):ae(t)&&!kt(t)&&!Hf(t)?String(t):t,Oa=(n,t="")=>{var e;return qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class hm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function pm(){return Oe}let _e;const Fa=new WeakSet;class qf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Fa.has(this)&&(Fa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||jf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),Kf(this);const t=_e,e=Pn;_e=this,Pn=!0;try{return this.fn()}finally{Zf(this),_e=t,Pn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Xc(t);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Fa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ll(this)&&this.run()}get dirty(){return Ll(this)}}let Yf=0,Dr,Lr;function jf(n,t=!1){if(n.flags|=8,t){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function Gc(){Yf++}function Wc(){if(--Yf>0)return;if(Lr){let t=Lr;for(Lr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Dr;){let t=Dr;for(Dr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Kf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Zf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Xc(i),mm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ll(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Jf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Jf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ll(n))))return;n.flags|=2;const t=n.dep,e=_e,i=Pn;_e=n,Pn=!0;try{Kf(n);const s=n.fn(n._value);(t.version===0||Wn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,Pn=i,Zf(n),n.flags&=-3}}function Xc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Xc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function mm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Pn=!0;const Qf=[];function Yn(){Qf.push(Pn),Pn=!1}function jn(){const n=Qf.pop();Pn=n===void 0?!0:n}function Pu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Br=0;class gm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Pn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new gm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,th(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){Gc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Wc()}}}function th(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)th(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Il=new WeakMap,cs=Symbol(""),Ul=Symbol(""),zr=Symbol("");function He(n,t,e){if(Pn&&_e){let i=Il.get(n);i||Il.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new $c),s.map=i,s.key=e),s.track()}}function di(n,t,e,i,s,r){const o=Il.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Gc(),t==="clear")o.forEach(a);else{const l=kt(n),c=l&&Vc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zr||!qn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(zr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(cs)),Ni(n)&&a(o.get(Ul)));break;case"delete":l||(a(o.get(cs)),Ni(n)&&a(o.get(Ul)));break;case"set":Ni(n)&&a(o.get(cs));break}}Wc()}function ys(n){const t=re(n);return t===n||(He(t,"iterate",zr),_n(n))?t:Kn(n)?Oi(n)?t.map(e=>ki(xn(e))):t.map(ki):t.map(xn)}function xa(n){return He(n=re(n),"iterate",zr),n}function kn(n,t){return Kn(n)?ki(Oi(n)?xn(t):t):xn(t)}const _m={__proto__:null,[Symbol.iterator](){return Ba(this,Symbol.iterator,n=>kn(this,n))},concat(...n){return ys(this).concat(...n.map(t=>kt(t)?ys(t):t))},entries(){return Ba(this,"entries",n=>(n[1]=kn(this,n[1]),n))},every(n,t){return ti(this,"every",n,t,void 0,arguments)},filter(n,t){return ti(this,"filter",n,t,e=>e.map(i=>kn(this,i)),arguments)},find(n,t){return ti(this,"find",n,t,e=>kn(this,e),arguments)},findIndex(n,t){return ti(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ti(this,"findLast",n,t,e=>kn(this,e),arguments)},findLastIndex(n,t){return ti(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ti(this,"forEach",n,t,void 0,arguments)},includes(...n){return za(this,"includes",n)},indexOf(...n){return za(this,"indexOf",n)},join(n){return ys(this).join(n)},lastIndexOf(...n){return za(this,"lastIndexOf",n)},map(n,t){return ti(this,"map",n,t,void 0,arguments)},pop(){return fr(this,"pop")},push(...n){return fr(this,"push",n)},reduce(n,...t){return Lu(this,"reduce",n,t)},reduceRight(n,...t){return Lu(this,"reduceRight",n,t)},shift(){return fr(this,"shift")},some(n,t){return ti(this,"some",n,t,void 0,arguments)},splice(...n){return fr(this,"splice",n)},toReversed(){return ys(this).toReversed()},toSorted(n){return ys(this).toSorted(n)},toSpliced(...n){return ys(this).toSpliced(...n)},unshift(...n){return fr(this,"unshift",n)},values(){return Ba(this,"values",n=>kn(this,n))}};function Ba(n,t,e){const i=xa(n),s=i[t],r=s.call(i);if(i!==n&&!_n(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Du(r.next(),e),s!==eh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Du(r._next(),e)}return r}function Du(n,t){return n.done||(n.value=t(n.value)),n}const eh=Array.prototype;function ti(n,t,e,i,s,r){const o=xa(n),a=o!==n&&!_n(n),l=o[t];if(l!==eh[t]){const d=l.apply(n,r);return a?xn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,kn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Lu(n,t,e,i){const s=xa(n),r=s!==n&&!_n(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=kn(n,c)),e.call(this,c,kn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?kn(n,l):l}function za(n,t,e){const i=re(n);He(i,"iterate",zr);const s=i[t](...e);return(s===-1||s===!1)&&jc(e[0])?(e[0]=re(e[0]),i[t](...e)):s}function fr(n,t,e=[]){Yn(),Gc();const i=re(n)[t].apply(n,e);return Wc(),jn(),i}const vm=zc("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function xm(n){qn(n)||(n=String(n));const t=re(this);return He(t,"has",n),t.hasOwnProperty(n)}class ih{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Rm:ah:r?oh:rh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=kt(t);if(!s){let l;if(o&&(l=_m[e]))return l;if(e==="hasOwnProperty")return xm}const a=Reflect.get(t,e,We(t)?t:i);if((qn(e)?nh.has(e):vm(e))||(s||He(t,"get",e),r))return a;if(We(a)){const l=o&&Vc(e)?a:a.value;return s&&ae(l)?Ol(l):l}return ae(a)?s?Ol(a):fs(a):a}}class sh extends ih{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=kt(t)&&Vc(e);if(!this._isShallow){const c=Kn(r);if(!_n(i)&&!Kn(i)&&(r=re(r),i=re(i)),!o&&We(r)&&!We(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:ee(t,e),l=Reflect.set(t,e,i,We(t)?t:s);return t===re(s)&&l&&(a?Wn(i,r)&&di(t,"set",e,i):di(t,"add",e,i)),l}deleteProperty(t,e){const i=ee(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&di(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!qn(e)||!nh.has(e))&&He(t,"has",e),i}ownKeys(t){return He(t,"iterate",kt(t)?"length":cs),Reflect.ownKeys(t)}}class ym extends ih{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Mm=new sh,Sm=new ym,bm=new sh(!0);const Nl=n=>n,io=n=>Reflect.getPrototypeOf(n);function Em(n,t,e){return function(...i){const s=this.__v_raw,r=re(s),o=Ni(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Nl:t?ki:xn;return!t&&He(r,"iterate",l?Ul:cs),Be(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function so(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Tm(n,t){const e={get(s){const r=this.__v_raw,o=re(r),a=re(s);n||(Wn(s,a)&&He(o,"get",s),He(o,"get",a));const{has:l}=io(o),c=t?Nl:n?ki:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&He(re(s),"iterate",cs),s.size},has(s){const r=this.__v_raw,o=re(r),a=re(s);return n||(Wn(s,a)&&He(o,"has",s),He(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=re(a),c=t?Nl:n?ki:xn;return!n&&He(l,"iterate",cs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Be(e,n?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(s){const r=re(this),o=io(r),a=re(s),l=!t&&!_n(s)&&!Kn(s)?a:s;return o.has.call(r,l)||Wn(s,l)&&o.has.call(r,s)||Wn(a,l)&&o.has.call(r,a)||(r.add(l),di(r,"add",l,l)),this},set(s,r){!t&&!_n(r)&&!Kn(r)&&(r=re(r));const o=re(this),{has:a,get:l}=io(o);let c=a.call(o,s);c||(s=re(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Wn(r,u)&&di(o,"set",s,r):di(o,"add",s,r),this},delete(s){const r=re(this),{has:o,get:a}=io(r);let l=o.call(r,s);l||(s=re(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&di(r,"delete",s,void 0),c},clear(){const s=re(this),r=s.size!==0,o=s.clear();return r&&di(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Em(s,n,t)}),e}function qc(n,t){const e=Tm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(ee(e,s)&&s in i?e:i,s,r)}const wm={get:qc(!1,!1)},Am={get:qc(!1,!0)},Cm={get:qc(!0,!1)};const rh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Rm=new WeakMap;function Pm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function fs(n){return Kn(n)?n:Yc(n,!1,Mm,wm,rh)}function lh(n){return Yc(n,!1,bm,Am,oh)}function Ol(n){return Yc(n,!0,Sm,Cm,ah)}function Yc(n,t,e,i,s){if(!ae(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Pm(nm(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Oi(n){return Kn(n)?Oi(n.__v_raw):!!(n&&n.__v_isReactive)}function Kn(n){return!!(n&&n.__v_isReadonly)}function _n(n){return!!(n&&n.__v_isShallow)}function jc(n){return n?!!n.__v_raw:!1}function re(n){const t=n&&n.__v_raw;return t?re(t):n}function Dm(n){return!ee(n,"__v_skip")&&Object.isExtensible(n)&&Gf(n,"__v_skip",!0),n}const xn=n=>ae(n)?fs(n):n,ki=n=>ae(n)?Ol(n):n;function We(n){return n?n.__v_isRef===!0:!1}function ce(n){return ch(n,!1)}function Lm(n){return ch(n,!0)}function ch(n,t){return We(n)?n:new Im(n,t)}class Im{constructor(t,e){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:re(t),this._value=e?t:xn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||_n(t)||Kn(t);t=i?t:re(t),Wn(t,e)&&(this._rawValue=t,this._value=i?t:xn(t),this.dep.trigger())}}function Ee(n){return We(n)?n.value:n}const Um={get:(n,t,e)=>t==="__v_raw"?n:Ee(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return We(s)&&!We(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function uh(n){return Oi(n)?n:new Proxy(n,Um)}class Nm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return jf(this,!0),!0}get value(){const t=this.dep.track();return Jf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Om(n,t,e=!1){let i,s;return $t(n)?i=n:(i=n.get,s=n.set),new Nm(i,s,e)}const ro={},Zo=new WeakMap;let ts;function Fm(n,t=!1,e=ts){if(e){let i=Zo.get(e);i||Zo.set(e,i=[]),i.push(n)}}function Bm(n,t,e=pe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=y=>s?y:_n(y)||s===!1||s===0?fi(y,1):fi(y);let u,d,f,p,_=!1,v=!1;if(We(n)?(d=()=>n.value,_=_n(n)):Oi(n)?(d=()=>c(n),_=!0):kt(n)?(v=!0,_=n.some(y=>Oi(y)||_n(y)),d=()=>n.map(y=>{if(We(y))return y.value;if(Oi(y))return c(y);if($t(y))return l?l(y,2):y()})):$t(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){Yn();try{f()}finally{jn()}}const y=ts;ts=u;try{return l?l(n,3,[p]):n(p)}finally{ts=y}}:d=$n,t&&s){const y=d,X=s===!0?1/0:s;d=()=>fi(y(),X)}const m=pm(),h=()=>{u.stop(),m&&m.active&&kc(m.effects,u)};if(r&&t){const y=t;t=(...X)=>{try{return y(...X)}finally{h()}}}let C=v?new Array(n.length).fill(ro):ro;const E=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const X=u.run();if(y||s||_||(v?X.some((B,I)=>Wn(B,C[I])):Wn(X,C))){const B=ts;Yn();try{f&&f(),ts=u;const I=[X,C===ro?void 0:v&&C[0]===ro?[]:C,p];C=X,l?l(t,3,I):t(...I)}finally{ts=B,jn()}}}else u.run()};return a&&a(E),u=new qf(d),u.scheduler=o?()=>o(E,!1):E,p=y=>Fm(y,!1,u),f=u.onStop=()=>{const y=Zo.get(u);if(y){if(l)l(y,4);else for(const X of y)X();Zo.delete(u)}},t?i?E(!0):C=u.run():o?o(E.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function fi(n,t=1/0,e){if(t<=0||!ae(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,We(n))fi(n.value,t,e);else if(kt(n))for(let i=0;i<n.length;i++)fi(n[i],t,e);else if(vi(n)||Ni(n))n.forEach(i=>{fi(i,t,e)});else if(Hf(n)){for(const i in n)fi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&fi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Yr(n,t,e,i){try{return i?n(...i):n()}catch(s){ya(s,t,e)}}function Nn(n,t,e,i){if($t(n)){const s=Yr(n,t,e,i);return s&&kf(s)&&s.catch(r=>{ya(r,t,e)}),s}if(kt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Nn(n[r],t,e,i));return s}}function ya(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||pe;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Yn(),Yr(r,null,10,[n,l,c]),jn();return}}zm(n,e,s,i,o)}function zm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const je=[];let wn=-1;const Vn=[];let Di=null,zs=0;const dh=Promise.resolve();let Jo=null;function Kc(n){const t=Jo||dh;return n?t.then(this?n.bind(this):n):t}function km(n){let t=wn+1,e=je.length;for(;t<e;){const i=t+e>>>1,s=je[i],r=kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Zc(n){if(!(n.flags&1)){const t=kr(n),e=je[je.length-1];!e||!(n.flags&2)&&t>=kr(e)?je.push(n):je.splice(km(t),0,n),n.flags|=1,fh()}}function fh(){Jo||(Jo=dh.then(mh))}function Vm(n){if(!kt(n))Di&&n.id===-1?Di.splice(zs+1,0,n):n.flags&1||(Vn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Vn.push(n[t]);fh()}function hh(n,t,e,i=wn+1){for(;i<je.length;i++){const s=je[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;je.splice(i,1),i=n?i-1:wn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ph(n,t,e=0){if(Vn.length){let i=Vn,s=0;if(t){i=[];for(let o=0;o<Vn.length;o++){const a=Vn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Vn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>kr(o)-kr(a));if(Vn.length=s,Di){for(let o=0;o<r.length;o++)Di.push(r[o]);return}for(Di=r,zs=0;zs<Di.length;zs++){const o=Di[zs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Di=null,zs=0}}let ka=!1;function Hm(n,t){if(ka){n();return}const e=t===void 0?void 0:new Set(Vn);n(),ka=!0;try{hh(void 0,t),ph(void 0,e,t)}finally{ka=!1}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mh(n){try{for(wn=0;wn<je.length;wn++){const t=je[wn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Yr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;wn<je.length;wn++){const t=je[wn];t&&(t.flags&=-2)}wn=-1,je.length=0,ph(),Jo=null,(je.length||Vn.length)&&mh()}}let dn=null,gh=null;function Qo(n){const t=dn;return dn=n,gh=n&&n.type.__scopeId||null,t}function _h(n,t=dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ia(-1);const r=Qo(t),o=ds.length;let a;try{a=n(...s)}finally{for(let l=ds.length;l>o;l--)Vh();Qo(r),i._d&&ia(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function De(n,t){if(dn===null)return n;const e=Ta(dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=pe]=t[s];r&&($t(r)&&(r={mounted:r,updated:r}),r.deep&&fi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function $i(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Yn(),Nn(l,e,8,[n.el,a,n,t]),jn())}}function Vo(n,t){if(Ge){let e=Ge.provides;const i=Ge.parent&&Ge.parent.provides;i===e&&(e=Ge.provides=Object.create(i)),e[n]=t}}function Dn(n,t,e=!1){const i=kg();if(i||$s){let s=$s?$s._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&$t(t)?t.call(i&&i.proxy):t}}const Gm=Symbol.for("v-scx"),Wm=()=>Dn(Gm);function us(n,t,e){return vh(n,t,e)}function vh(n,t,e=pe){const{immediate:i,deep:s,flush:r,once:o}=e,a=Be({},e),l=t&&i||!t&&r!=="post";let c;if(Wr){if(r==="sync"){const p=Wm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=$n,p.resume=$n,p.pause=$n,p}}const u=Ge;a.call=(p,_,v)=>Nn(p,u,_,v);let d=!1;r==="post"?a.scheduler=p=>{p.i=u,sn(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,_)=>{_?p():Zc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Bm(n,t,a);return Wr&&(c?c.push(f):l&&f()),f}function Xm(n,t,e){const i=this.proxy,s=be(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;$t(t)?r=t:(r=t.handler,e=t);const o=Zr(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ma=n=>n.__isTeleport,Va=Symbol("_leaveCb");function qm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==On){t=e;break}}return t}function yh(n){if(!Jc(n))return Ma(n.type)&&n.children?qm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&$t(e.default))return e.default()}}function ta(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;ta(Ma(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Fe&&kt(n.children)){const e=Ch(n.children,!1);e&&ta(e,t)}}function Fl(n){if(n.component)return Fl(n.component.subTree);if(n.type===Fe){const t=kt(n.children)&&Ch(n.children,!1);return t?Fl(t):void 0}if(n.type!==On)return n}function Wi(n,t){return $t(n)?Be({name:n.name},t,{setup:n}):n}function Mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Iu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ea=new WeakMap;function Ir(n,t,e,i,s=!1){if(kt(n)){n.forEach((v,m)=>Ir(v,t&&(kt(t)?t[m]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Ta(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===pe?a.refs={}:a.refs,d=a.setupState,f=re(d),p=d===pe?zf:v=>Iu(u,v)?!1:ee(f,v),_=(v,m)=>!(m&&Iu(u,m));if(c!=null&&c!==l){if(Uu(t),be(c))u[c]=null,p(c)&&(d[c]=null);else if(We(c)){const v=t;_(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if($t(l))Yr(l,a,12,[o,u]);else{const v=be(l),m=We(l);if(v||m){const h=()=>{if(n.f){const C=v?p(l)?d[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)kt(C)&&kc(C,r);else if(kt(C))C.includes(r)||C.push(r);else if(v)u[l]=[r],p(l)&&(d[l]=u[l]);else{const E=[r];_(l,n.k)&&(l.value=E),n.k&&(u[n.k]=E)}}else v?(u[l]=o,p(l)&&(d[l]=o)):m&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const C=()=>{h(),ea.delete(n)};C.id=-1,ea.set(n,C),sn(C,e)}else Uu(n),h()}}}function Uu(n){const t=ea.get(n);t&&(t.flags|=8,ea.delete(n))}va().requestIdleCallback;va().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,Jc=n=>n.type.__isKeepAlive;function Ym(n,t){Sh(n,"a",t)}function jm(n,t){Sh(n,"da",t)}function Sh(n,t,e=Ge){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Sa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Jc(s.parent.vnode)&&Km(i,t,e,s),s=s.parent}}function Km(n,t,e,i){const s=Sa(t,n,i,!0);Kr(()=>{kc(i[t],s)},e)}function Sa(n,t,e=Ge,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Yn();const a=Zr(e),l=Nn(t,e,n,o);return a(),jn(),l});return i?s.unshift(r):s.push(r),r}}const yi=n=>(t,e=Ge)=>{(!Wr||n==="sp")&&Sa(n,(...i)=>t(...i),e)},Zm=yi("bm"),jr=yi("m"),Jm=yi("bu"),Qm=yi("u"),tg=yi("bum"),Kr=yi("um"),eg=yi("sp"),ng=yi("rtg"),ig=yi("rtc");function sg(n,t=Ge){Sa("ec",n,t)}const rg="components";function bh(n,t){return ag(rg,n,!0,t)||n}const og=Symbol.for("v-ndc");function ag(n,t,e=!0,i=!1){const s=dn||Ge;if(s){const r=s.type;{const a=Xg(r,!1);if(a&&(a===t||a===Qe(t)||a===ga(Qe(t))))return r}const o=Nu(s[n]||r[n],t)||Nu(s.appContext[n],t);return!o&&i?r:o}}function Nu(n,t){return n&&(n[t]||n[Qe(t)]||n[ga(Qe(t))])}function Vs(n,t,e,i){let s;const r=e,o=kt(n);if(o||be(n)){const a=o&&Oi(n);let l=!1,c=!1;a&&(l=!_n(n),c=Kn(n),n=xa(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?ki(xn(n[u])):xn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ae(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Bl=n=>n?Xh(n)?Ta(n):Bl(n.parent):null,Nr=Be(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Bl(n.parent),$root:n=>Bl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Th(n),$forceUpdate:n=>n.f||(n.f=()=>{Zc(n.update)}),$nextTick:n=>n.n||(n.n=Kc.bind(n.proxy)),$watch:n=>Xm.bind(n)}),Ha=(n,t)=>n!==pe&&!n.__isScriptSetup&&ee(n,t),lg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Ha(i,t))return o[t]=1,i[t];if(s!==pe&&ee(s,t))return o[t]=2,s[t];if(ee(r,t))return o[t]=3,r[t];if(e!==pe&&ee(e,t))return o[t]=4,e[t];zl&&(o[t]=0)}}const c=Nr[t];let u,d;if(c)return t==="$attrs"&&He(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==pe&&ee(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,ee(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Ha(s,t)?(s[t]=e,!0):i!==pe&&ee(i,t)?(i[t]=e,!0):ee(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==pe&&a[0]!=="$"&&ee(n,a)||Ha(t,a)||ee(r,a)||ee(i,a)||ee(Nr,a)||ee(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:ee(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ou(n){return kt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let zl=!0;function cg(n){const t=Th(n),e=n.proxy,i=n.ctx;zl=!1,t.beforeCreate&&Fu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:C,destroyed:E,unmounted:y,render:X,renderTracked:B,renderTriggered:I,errorCaptured:z,serverPrefetch:A,expose:T,inheritAttrs:O,components:ct,directives:it,filters:et}=t;if(c&&ug(c,i,null),o)for(const j in o){const k=o[j];$t(k)&&(i[j]=k.bind(e))}if(s){const j=s.call(e,e);ae(j)&&(n.data=fs(j))}if(zl=!0,r)for(const j in r){const k=r[j],Mt=$t(k)?k.bind(e,e):$t(k.get)?k.get.bind(e,e):$n,N=!$t(k)&&$t(k.set)?k.set.bind(e):$n,P=Ze({get:Mt,set:N});Object.defineProperty(i,j,{enumerable:!0,configurable:!0,get:()=>P.value,set:mt=>P.value=mt})}if(a)for(const j in a)Eh(a[j],i,e,j);if(l){const j=$t(l)?l.call(e):l;Reflect.ownKeys(j).forEach(k=>{Vo(k,j[k])})}u&&Fu(u,n,"c");function st(j,k){kt(k)?k.forEach(Mt=>j(Mt.bind(e))):k&&j(k.bind(e))}if(st(Zm,d),st(jr,f),st(Jm,p),st(Qm,_),st(Ym,v),st(jm,m),st(sg,z),st(ig,B),st(ng,I),st(tg,C),st(Kr,y),st(eg,A),kt(T))if(T.length){const j=n.exposed||(n.exposed={});T.forEach(k=>{Object.defineProperty(j,k,{get:()=>e[k],set:Mt=>e[k]=Mt,enumerable:!0})})}else n.exposed||(n.exposed={});X&&n.render===$n&&(n.render=X),O!=null&&(n.inheritAttrs=O),ct&&(n.components=ct),it&&(n.directives=it),A&&Mh(n)}function ug(n,t,e=$n){kt(n)&&(n=kl(n));for(const i in n){const s=n[i];let r;ae(s)?"default"in s?r=Dn(s.from||i,s.default,!0):r=Dn(s.from||i):r=Dn(s),We(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Fu(n,t,e){Nn(kt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Eh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(be(n)){const r=t[n];$t(r)&&us(s,r)}else if($t(n))us(s,n.bind(e));else if(ae(n))if(kt(n))n.forEach(r=>Eh(r,t,e,i));else{const r=$t(n.handler)?n.handler.bind(e):t[n.handler];$t(r)&&us(s,r,n)}}function Th(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>na(l,c,o,!0)),na(l,t,o)),ae(t)&&r.set(t,l),l}function na(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&na(n,r,e,!0),s&&s.forEach(o=>na(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=dg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const dg={data:Bu,props:zu,emits:zu,methods:Er,computed:Er,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Er,directives:Er,watch:hg,provide:Bu,inject:fg};function Bu(n,t){return t?n?function(){return Be($t(n)?n.call(this,this):n,$t(t)?t.call(this,this):t)}:t:n}function fg(n,t){return Er(kl(n),kl(t))}function kl(n){if(kt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function $e(n,t){return n?[...new Set([].concat(n,t))]:t}function Er(n,t){return n?Be(Object.create(null),n,t):t}function zu(n,t){return n?kt(n)&&kt(t)?[...new Set([...n,...t])]:Be(Object.create(null),Ou(n),Ou(t??{})):t}function hg(n,t){if(!n)return t;if(!t)return n;const e=Be(Object.create(null),n);for(const i in t)e[i]=$e(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:zf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pg=0;function mg(n,t){return function(i,s=null){$t(i)||(i=Be({},i)),s!=null&&!ae(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:pg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:qg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&$t(u.install)?(o.add(u),u.install(c,...d)):$t(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ue(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ta(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Nn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=$s;$s=c;try{return u()}finally{$s=d}}};return c}}let $s=null;const gg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${gs(t)}Modifiers`];function _g(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||pe;let s=e;const r=t.startsWith("update:"),o=r&&gg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>be(u)?u.trim():u)),o.number&&(s=s.map(_a)));let a,l=i[a=Na(t)]||i[a=Na(Qe(t))];!l&&r&&(l=i[a=Na(gs(t))]),l&&Nn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Nn(c,n,6,s)}}const vg=new WeakMap;function Ah(n,t,e=!1){const i=e?vg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!$t(n)){const l=c=>{const u=Ah(c,t,!0);u&&(a=!0,Be(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ae(n)&&i.set(n,null),null):(kt(r)?r.forEach(l=>o[l]=null):Be(o,r),ae(n)&&i.set(n,o),o)}function ba(n,t){return!n||!ha(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ee(n,t[0].toLowerCase()+t.slice(1))||ee(n,gs(t))||ee(n,t))}function ku(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:_,inheritAttrs:v}=n,m=Qo(n);let h,C;try{if(e.shapeFlag&4){const y=s||i,X=y;h=Hn(c.call(X,y,u,d,p,f,_)),C=a}else{const y=t;h=Hn(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),C=t.props?a:xg(a)}}catch(y){ds.length=0,ya(y,n,1),h=Ue(On)}let E=h;if(C&&v!==!1){const y=Object.keys(C),{shapeFlag:X}=E;y.length&&X&7&&(r&&y.some(pa)&&(C=yg(C,r)),E=Zs(E,C,!1,!0))}if(e.dirs&&(E=Zs(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(e.dirs):e.dirs),e.transition){const y=Ma(E.type)&&yh(E)||E;ta(y,e.transition)}return h=E,Qo(m),h}function Ch(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Hr(s)){if(s.type!==On||s.children==="v-if"){if(e)return;e=s}}else return}return e}const xg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ha(e))&&((t||(t={}))[e]=n[e]);return t},yg=(n,t)=>{const e={};for(const i in n)(!pa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Mg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Vu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Rh(o,i,f)&&!ba(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Vu(i,o,c):!0:!!o;return!1}function Vu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!ee(n,r)||Rh(t,n,r)&&!ba(e,r))return!0}return!1}function Rh(n,t,e){const i=n[e],s=t[e];return e==="style"&&ae(i)&&ae(s)?!Un(i,s):i!==s}function Sg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ph={},Dh=()=>Object.create(Ph),Lh=n=>Object.getPrototypeOf(n)===Ph;function bg(n,t,e,i=!1){const s={},r=Dh();n.propsDefaults=Object.create(null),Ih(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:lh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Eg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=re(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ba(n.emitsOptions,f))continue;const p=t[f];if(l)if(ee(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const _=Qe(f);s[_]=Vl(l,a,_,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Ih(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!ee(t,d)&&((u=gs(d))===d||!ee(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Vl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!ee(t,d))&&(delete r[d],c=!0)}c&&di(n.attrs,"set","")}function Ih(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Pr(l))continue;const c=t[l];let u;s&&ee(s,u=Qe(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:ba(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=re(e),c=a||pe;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Vl(s,l,d,c[d],n,!ee(c,d))}}return o}function Vl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=ee(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$t(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Zr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===gs(e))&&(i=!0))}return i}const Tg=new WeakMap;function Uh(n,t,e=!1){const i=e?Tg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!$t(n)){const u=d=>{l=!0;const[f,p]=Uh(d,t,!0);Be(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ae(n)&&i.set(n,rs),rs;if(kt(r))for(let u=0;u<r.length;u++){const d=Qe(r[u]);Hu(d)&&(o[d]=pe)}else if(r)for(const u in r){const d=Qe(u);if(Hu(d)){const f=r[u],p=o[d]=kt(f)||$t(f)?{type:f}:Be({},f),_=p.type;let v=!1,m=!0;if(kt(_))for(let h=0;h<_.length;++h){const C=_[h],E=$t(C)&&C.name;if(E==="Boolean"){v=!0;break}else E==="String"&&(m=!1)}else v=$t(_)&&_.name==="Boolean";p[0]=v,p[1]=m,(v||ee(p,"default"))&&a.push(d)}}const c=[o,a];return ae(n)&&i.set(n,c),c}function Hu(n){return n[0]!=="$"&&!Pr(n)}const Qc=n=>n==="_"||n==="_ctx"||n==="$stable",tu=n=>kt(n)?n.map(Hn):[Hn(n)],wg=(n,t,e)=>{if(t._n)return t;const i=_h((...s)=>tu(t(...s)),e);return i._c=!1,i},Nh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Qc(s))continue;const r=n[s];if($t(r))t[s]=wg(s,r,i);else if(r!=null){const o=tu(r);t[s]=()=>o}}},Oh=(n,t)=>{const e=tu(t);n.slots.default=()=>e},Fh=(n,t,e)=>{for(const i in t)(e||!Qc(i))&&(n[i]=t[i])},Ag=(n,t,e)=>{const i=n.slots=Dh();if(n.vnode.shapeFlag&32){const s=t._;s?(Fh(i,t,e),e&&Gf(i,"_",s,!0)):Nh(t,i)}else t&&Oh(n,t)},Cg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=pe;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Fh(s,t,e):(r=!t.$stable,Nh(t,s)),o=t}else t&&(Oh(n,t),o={default:1});if(r)for(const a in s)!Qc(a)&&o[a]==null&&delete s[a]},sn=Ig;function Rg(n){return Pg(n)}function Pg(n,t){const e=va();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=$n,insertStaticContent:_}=n,v=(b,R,D,g=null,L=null,K=null,Z=void 0,$=null,ut=!!R.dynamicChildren)=>{if(b===R)return;b&&!hr(b,R)&&(g=U(b),mt(b,L,K,!0),b=null),R.patchFlag===-2&&(ut=!1,R.dynamicChildren=null),R.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(R.dynamicChildren===rs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:H,ref:S,shapeFlag:x}=R;switch(H){case Ea:m(b,R,D,g);break;case On:h(b,R,D,g);break;case Ho:b==null&&C(R,D,g,Z);break;case Fe:ct(b,R,D,g,L,K,Z,$,ut);break;default:x&1?X(b,R,D,g,L,K,Z,$,ut):x&6?it(b,R,D,g,L,K,Z,$,ut):(x&64||x&128)&&H.process(b,R,D,g,L,K,Z,$,ut,ot)}S!=null&&L?Ir(S,b&&b.ref,K,R||b,!R):S==null&&b&&b.ref!=null&&Ir(b.ref,null,K,b,!0)},m=(b,R,D,g)=>{if(b==null)i(R.el=a(R.children),D,g);else{const L=R.el=b.el;R.children!==b.children&&c(L,R.children)}},h=(b,R,D,g)=>{b==null?i(R.el=l(R.children||""),D,g):R.el=b.el},C=(b,R,D,g)=>{[b.el,b.anchor]=_(b.children,R,D,g,b.el,b.anchor)},E=({el:b,anchor:R},D,g)=>{let L;for(;b&&b!==R;)L=f(b),i(b,D,g),b=L;i(R,D,g)},y=({el:b,anchor:R})=>{let D;for(;b&&b!==R;)D=f(b),s(b),b=D;s(R)},X=(b,R,D,g,L,K,Z,$,ut)=>{if(R.type==="svg"?Z="svg":R.type==="math"&&(Z="mathml"),b==null)B(R,D,g,L,K,Z,$,ut);else{const H=b.el&&b.el._isVueCE?b.el:null;try{H&&H._beginPatch(),A(b,R,L,K,Z,$,ut)}finally{H&&H._endPatch()}}},B=(b,R,D,g,L,K,Z,$)=>{let ut,H;const{props:S,shapeFlag:x,transition:F,dirs:J}=b;if(ut=b.el=o(b.type,K,S&&S.is,S),x&8?u(ut,b.children):x&16&&z(b.children,ut,null,g,L,Ga(b,K),Z,$),J&&$i(b,null,g,"created"),I(ut,b,b.scopeId,Z,g),S){for(const tt in S)tt!=="value"&&!Pr(tt)&&r(ut,tt,null,S[tt],K,g);"value"in S&&r(ut,"value",null,S.value,K),(H=S.onVnodeBeforeMount)&&zn(H,g,b)}J&&$i(b,null,g,"beforeMount");const rt=Dg(L,F);rt&&F.beforeEnter(ut),i(ut,R,D),((H=S&&S.onVnodeMounted)||rt||J)&&sn(()=>{try{H&&zn(H,g,b),rt&&F.enter(ut),J&&$i(b,null,g,"mounted")}finally{}},L)},I=(b,R,D,g,L)=>{if(D&&p(b,D),g)for(let K=0;K<g.length;K++)p(b,g[K]);if(L){let K=L.subTree;if(R===K||kh(K.type)&&(K.ssContent===R||K.ssFallback===R)){const Z=L.vnode;I(b,Z,Z.scopeId,Z.slotScopeIds,L.parent)}}},z=(b,R,D,g,L,K,Z,$,ut=0)=>{for(let H=ut;H<b.length;H++){const S=b[H]=$?ui(b[H]):Hn(b[H]);v(null,S,R,D,g,L,K,Z,$)}},A=(b,R,D,g,L,K,Z)=>{const $=R.el=b.el;let{patchFlag:ut,dynamicChildren:H,dirs:S}=R;ut|=b.patchFlag&16;const x=b.props||pe,F=R.props||pe;let J;if(D&&qi(D,!1),(J=F.onVnodeBeforeUpdate)&&zn(J,D,R,b),S&&$i(R,b,D,"beforeUpdate"),D&&qi(D,!0),H&&(!b.dynamicChildren||b.dynamicChildren.length!==H.length)&&(ut=0,Z=!1,H=null),(x.innerHTML&&F.innerHTML==null||x.textContent&&F.textContent==null)&&u($,""),H?T(b.dynamicChildren,H,$,D,g,Ga(R,L),K):Z||k(b,R,$,null,D,g,Ga(R,L),K,!1),ut>0){if(ut&16)O($,x,F,D,L);else if(ut&2&&x.class!==F.class&&r($,"class",null,F.class,L),ut&4&&r($,"style",x.style,F.style,L),ut&8){const rt=R.dynamicProps;for(let tt=0;tt<rt.length;tt++){const vt=rt[tt],pt=x[vt],yt=F[vt];(yt!==pt||vt==="value")&&r($,vt,pt,yt,L,D)}}ut&1&&b.children!==R.children&&u($,R.children)}else!Z&&H==null&&O($,x,F,D,L);((J=F.onVnodeUpdated)||S)&&sn(()=>{J&&zn(J,D,R,b),S&&$i(R,b,D,"updated")},g)},T=(b,R,D,g,L,K,Z)=>{for(let $=0;$<R.length;$++){const ut=b[$],H=R[$],S=ut.el||Hl(ut),x=S&&(ut.type===Fe||!hr(ut,H)||ut.shapeFlag&198)?d(S):D;v(ut,H,x,null,g,L,K,Z,!0)}},O=(b,R,D,g,L)=>{if(R!==D){if(R!==pe)for(const K in R)!Pr(K)&&!(K in D)&&r(b,K,R[K],null,L,g);for(const K in D){if(Pr(K))continue;const Z=D[K],$=R[K];Z!==$&&K!=="value"&&r(b,K,$,Z,L,g)}"value"in D&&r(b,"value",R.value,D.value,L)}},ct=(b,R,D,g,L,K,Z,$,ut)=>{const H=R.el=b?b.el:a(""),S=R.anchor=b?b.anchor:a("");let{patchFlag:x,dynamicChildren:F,slotScopeIds:J}=R;J&&($=$?$.concat(J):J),b==null?(i(H,D,g),i(S,D,g),z(R.children||[],D,S,L,K,Z,$,ut)):x>0&&x&64&&F&&b.dynamicChildren&&b.dynamicChildren.length===F.length?(T(b.dynamicChildren,F,D,L,K,Z,$),(R.key!=null||L&&R===L.subTree)&&Bh(b,R,!0)):k(b,R,D,S,L,K,Z,$,ut)},it=(b,R,D,g,L,K,Z,$,ut)=>{R.slotScopeIds=$,b==null?R.shapeFlag&512?L.ctx.activate(R,D,g,Z,ut):et(R,D,g,L,K,Z,ut):W(b,R,ut)},et=(b,R,D,g,L,K,Z)=>{const $=b.component=zg(b,g,L);if(Jc(b)&&($.ctx.renderer=ot),Vg($,!1,Z),$.asyncDep){if(L&&L.registerDep($,st,Z,K),!b.el){const ut=$.subTree=Ue(On);h(null,ut,R,D),b.placeholder=ut.el}}else st($,b,R,D,L,K,Z)},W=(b,R,D)=>{const g=R.component=b.component;if(Mg(b,R,D))if(g.asyncDep&&!g.asyncResolved){R.el=b.el,R.placeholder=b.placeholder,j(g,R,D);return}else g.next=R,g.update();else R.el=b.el,R.placeholder=b.placeholder,g.vnode=R},st=(b,R,D,g,L,K,Z)=>{const $=()=>{if(b.isMounted){let{next:x,bu:F,u:J,parent:rt,vnode:tt}=b;{const xt=zh(b);if(xt){x&&(x.el=tt.el,j(b,x,Z)),xt.asyncDep.then(()=>{sn(()=>{b.isUnmounted||H()},L)});return}}let vt=x,pt;qi(b,!1),x?(x.el=tt.el,j(b,x,Z)):x=tt,F&&ko(F),(pt=x.props&&x.props.onVnodeBeforeUpdate)&&zn(pt,rt,x,tt),qi(b,!0);const yt=ku(b),Gt=b.subTree;b.subTree=yt,v(Gt,yt,d(Gt.el),U(Gt),b,L,K),x.el=yt.el,vt===null&&Sg(b,yt.el),J&&sn(J,L),(pt=x.props&&x.props.onVnodeUpdated)&&sn(()=>zn(pt,rt,x,tt),L)}else{let x;const{el:F,props:J}=R,{bm:rt,m:tt,parent:vt,root:pt,type:yt}=b,Gt=Ur(R);qi(b,!1),rt&&ko(rt),!Gt&&(x=J&&J.onVnodeBeforeMount)&&zn(x,vt,R),qi(b,!0);{pt.ce&&pt.ce._hasShadowRoot()&&pt.ce._injectChildStyle(yt,b.parent?b.parent.type:void 0);const xt=b.subTree=ku(b);v(null,xt,D,g,b,L,K),R.el=xt.el}if(tt&&sn(tt,L),!Gt&&(x=J&&J.onVnodeMounted)){const xt=R;sn(()=>zn(x,vt,xt),L)}(R.shapeFlag&256||vt&&Ur(vt.vnode)&&vt.vnode.shapeFlag&256)&&b.a&&sn(b.a,L),b.isMounted=!0,R=D=g=null}};b.scope.on();const ut=b.effect=new qf($);b.scope.off();const H=b.update=ut.run.bind(ut),S=b.job=ut.runIfDirty.bind(ut);S.i=b,S.id=b.uid,ut.scheduler=()=>Zc(S),qi(b,!0),H()},j=(b,R,D)=>{R.component=b;const g=b.vnode.props;b.vnode=R,b.next=null,Eg(b,R.props,g,D),Cg(b,R.children,D),Yn(),hh(b),jn()},k=(b,R,D,g,L,K,Z,$,ut=!1)=>{const H=b&&b.children,S=b?b.shapeFlag:0,x=R.children,{patchFlag:F,shapeFlag:J}=R;if(F>0){if(F&128){N(H,x,D,g,L,K,Z,$,ut);return}else if(F&256){Mt(H,x,D,g,L,K,Z,$,ut);return}}J&8?(S&16&&gt(H,L,K),x!==H&&u(D,x)):S&16?J&16?N(H,x,D,g,L,K,Z,$,ut):gt(H,L,K,!0):(S&8&&u(D,""),J&16&&z(x,D,g,L,K,Z,$,ut))},Mt=(b,R,D,g,L,K,Z,$,ut)=>{b=b||rs,R=R||rs;const H=b.length,S=R.length,x=Math.min(H,S);let F;for(F=0;F<x;F++){const J=R[F]=ut?ui(R[F]):Hn(R[F]);v(b[F],J,D,null,L,K,Z,$,ut)}H>S?gt(b,L,K,!0,!1,x):z(R,D,g,L,K,Z,$,ut,x)},N=(b,R,D,g,L,K,Z,$,ut)=>{let H=0;const S=R.length;let x=b.length-1,F=S-1;for(;H<=x&&H<=F;){const J=b[H],rt=R[H]=ut?ui(R[H]):Hn(R[H]);if(hr(J,rt))v(J,rt,D,null,L,K,Z,$,ut);else break;H++}for(;H<=x&&H<=F;){const J=b[x],rt=R[F]=ut?ui(R[F]):Hn(R[F]);if(hr(J,rt))v(J,rt,D,null,L,K,Z,$,ut);else break;x--,F--}if(H>x){if(H<=F){const J=F+1,rt=J<S?R[J].el:g;for(;H<=F;)v(null,R[H]=ut?ui(R[H]):Hn(R[H]),D,rt,L,K,Z,$,ut),H++}}else if(H>F)for(;H<=x;)mt(b[H],L,K,!0),H++;else{const J=H,rt=H,tt=new Map;for(H=rt;H<=F;H++){const Lt=R[H]=ut?ui(R[H]):Hn(R[H]);Lt.key!=null&&tt.set(Lt.key,H)}let vt,pt=0;const yt=F-rt+1;let Gt=!1,xt=0;const At=new Array(yt);for(H=0;H<yt;H++)At[H]=0;for(H=J;H<=x;H++){const Lt=b[H];if(pt>=yt){mt(Lt,L,K,!0);continue}let wt;if(Lt.key!=null)wt=tt.get(Lt.key);else for(vt=rt;vt<=F;vt++)if(At[vt-rt]===0&&hr(Lt,R[vt])){wt=vt;break}wt===void 0?mt(Lt,L,K,!0):(At[wt-rt]=H+1,wt>=xt?xt=wt:Gt=!0,v(Lt,R[wt],D,null,L,K,Z,$,ut),pt++)}const zt=Gt?Lg(At):rs;for(vt=zt.length-1,H=yt-1;H>=0;H--){const Lt=rt+H,wt=R[Lt],Jt=R[Lt+1],qt=Lt+1<S?Jt.el||Hl(Jt):g;At[H]===0?v(null,wt,D,qt,L,K,Z,$,ut):Gt&&(vt<0||H!==zt[vt]?P(wt,D,qt,2):vt--)}}},P=(b,R,D,g,L=null)=>{const{el:K,type:Z,transition:$,children:ut,shapeFlag:H}=b;if(H&6){P(b.component.subTree,R,D,g);return}if(H&128){b.suspense.move(R,D,g);return}if(H&64){Z.move(b,R,D,ot);return}if(Z===Fe){i(K,R,D);for(let x=0;x<ut.length;x++)P(ut[x],R,D,g);i(b.anchor,R,D);return}if(Z===Ho){E(b,R,D);return}if(g!==2&&H&1&&$)if(g===0)$.persisted&&!K[Va]?i(K,R,D):($.beforeEnter(K),i(K,R,D),sn(()=>$.enter(K),L));else{const{leave:x,delayLeave:F,afterLeave:J}=$,rt=()=>{b.ctx.isUnmounted?s(K):i(K,R,D)},tt=()=>{const vt=K._isLeaving||!!K[Va];K._isLeaving&&K[Va](!0),$.persisted&&!vt?rt():x(K,()=>{rt(),J&&J()})};F?F(K,rt,tt):tt()}else i(K,R,D)},mt=(b,R,D,g=!1,L=!1)=>{const{type:K,props:Z,ref:$,children:ut,dynamicChildren:H,shapeFlag:S,patchFlag:x,dirs:F,cacheIndex:J,memo:rt}=b;if((x===-2||H&&H.hasOnce)&&(L=!1),$!=null&&(Yn(),Ir($,null,D,b,!0),jn()),J!=null&&(!b.ctx||b.ctx===R)&&(R.renderCache[J]=void 0),S&256){R.ctx.deactivate(b);return}const tt=S&1&&F,vt=!Ur(b);let pt;if(vt&&(pt=Z&&Z.onVnodeBeforeUnmount)&&zn(pt,R,b),S&6)dt(b.component,D,g);else{if(S&128){b.suspense.unmount(D,g);return}tt&&$i(b,null,R,"beforeUnmount"),S&64?b.type.remove(b,R,D,ot,g):H&&!H.hasOnce&&(K!==Fe||x>0&&x&64)?gt(H,R,D,!1,!0):(K===Fe&&x&384||!L&&S&16)&&gt(ut,R,D),g&&bt(b)}const yt=rt!=null&&J==null;(vt&&(pt=Z&&Z.onVnodeUnmounted)||tt||yt)&&sn(()=>{pt&&zn(pt,R,b),tt&&$i(b,null,R,"unmounted"),yt&&(b.el=null)},D)},bt=b=>{const{type:R,el:D,anchor:g,transition:L}=b,K=R===Fe;if(K&&!L){Q(D,g);return}if(R===Ho){y(b),L&&!L.persisted&&L.afterLeave&&L.afterLeave();return}const Z=K?Fl(b):b,$=()=>{K?d(D)&&Q(D,g):s(D),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(Z&&Z.shapeFlag&1&&L&&!L.persisted){const{leave:ut,delayLeave:H}=L,S=Z.el,x=()=>ut(S,$);H?H(S,$,x):x()}else $()},Q=(b,R)=>{let D;for(;b!==R;)D=f(b),s(b),b=D;s(R)},dt=(b,R,D)=>{const{bum:g,scope:L,job:K,subTree:Z,um:$,m:ut,a:H}=b;Gu(ut),Gu(H),g&&ko(g),L.stop(),K?(K.flags|=8,mt(Z,b,R,D)):b.vnode.el&&Z&&(Z.transition=b.vnode.transition,mt(Z,b,R,D)),$&&sn($,R),sn(()=>{b.isUnmounted=!0},R)},gt=(b,R,D,g=!1,L=!1,K=0)=>{for(let Z=K;Z<b.length;Z++)mt(b[Z],R,D,g,L)},U=b=>{if(b.shapeFlag&6)return U(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const R=f(b.anchor||b.el),D=R&&R[$m];return D?f(D):R},nt=(b,R,D)=>{const g=b&&R._vnode?void 0:b&&b.component?b.component.uid:Bg();Hm(()=>{b==null?R._vnode&&mt(R._vnode,null,null,!0):v(R._vnode||null,b,R,null,null,null,D),R._vnode=b},g)},ot={p:v,um:mt,m:P,r:bt,mt:et,mc:z,pc:k,pbc:T,n:U,o:n};return{render:nt,hydrate:void 0,createApp:mg(nt)}}function Ga({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Dg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Bh(n,t,e=!1){const i=n.children,s=t.children;if(kt(i)&&kt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ui(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Bh(o,a)),a.type===Ea&&(a.patchFlag===-1&&(a=s[r]=ui(a)),a.el=o.el),a.type===On&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function zh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:zh(t)}function Gu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Hl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Hl(t.subTree):null}const kh=n=>n.__isSuspense;function Ig(n,t){t&&t.pendingBranch?kt(n)?t.effects.push(...n):t.effects.push(n):Vm(n)}const Fe=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),On=Symbol.for("v-cmt"),Ho=Symbol.for("v-stc"),ds=[];let fn=null;function Bt(n=!1){ds.push(fn=n?null:[])}function Vh(){ds.pop(),fn=ds[ds.length-1]||null}let Vr=1;function ia(n,t=!1){Vr+=n,n<0&&fn&&t&&(fn.hasOnce=!0)}function Hh(n){return n.dynamicChildren=Vr>0?fn||rs:null,Vh(),Vr>0&&fn&&fn.push(n),n}function Vt(n,t,e,i,s,r){return Hh(M(n,t,e,i,s,r,!0))}function eu(n,t,e,i,s){return Hh(Ue(n,t,e,i,s,!0))}function Hr(n){return n?n.__v_isVNode===!0:!1}function hr(n,t){return n.type===t.type&&n.key===t.key}const Gh=({key:n})=>n??null,Go=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?be(n)||We(n)||$t(n)?{i:dn,r:n,k:t,f:!!e}:n:null);function M(n,t=null,e=null,i=0,s=null,r=n===Fe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Gh(t),ref:t&&Go(t),scopeId:gh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(ra(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=be(e)?8:16),Vr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Ue=Ug;function Ug(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===og)&&(n=On),Hr(n)){const a=Zs(n,t,!0);return e&&ra(a,e),Vr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ng(t);let{class:a,style:l}=t;a&&!be(a)&&(t.class=ci(a)),ae(l)&&(jc(l)&&!kt(l)&&(l=Be({},l)),t.style=Ie(l))}const o=be(n)?1:kh(n)?128:Ma(n)?64:ae(n)?4:$t(n)?2:0;return M(n,t,e,i,s,o,r,!0)}function Ng(n){return n?jc(n)||Lh(n)?Be({},n):n:null}function Zs(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Og(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Gh(c),ref:t&&t.ref?e&&r?kt(r)?r.concat(Go(t)):[r,Go(t)]:Go(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Fe?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Zs(n.ssContent),ssFallback:n.ssFallback&&Zs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ta(u,l.clone(u)),u}function Ot(n=" ",t=0){return Ue(Ea,null,n,t)}function sa(n,t){const e=Ue(Ho,null,n);return e.staticCount=t,e}function Le(n="",t=!1){return t?(Bt(),eu(On,null,n)):Ue(On,null,n)}function Hn(n){return n==null||typeof n=="boolean"?Ue(On):kt(n)?Ue(Fe,null,n.slice()):Hr(n)?ui(n):Ue(Ea,null,String(n))}function ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Zs(n)}function ra(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(kt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),ra(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=dn:s===3&&dn&&(dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if($t(t)){if(i&65){ra(n,{default:t});return}t={default:t,_ctx:dn},e=32}else t=String(t),i&64?(e=16,t=[Ot(t)]):e=8;n.children=t,n.shapeFlag|=e}function Og(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=ci([t.class,i.class]));else if(s==="style")t.style=Ie([t.style,i.style]);else if(ha(s)){const r=t[s],o=i[s];o&&r!==o&&!(kt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!pa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function zn(n,t,e,i=null){Nn(n,t,7,[e,i])}const Fg=wh();let Wh=0;function Bg(){return Wh}function zg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Fg,r={uid:Wh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Uh(i,s),emitsOptions:Ah(i,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:i.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=_g.bind(null,r),n.ce&&n.ce(r),r}let Ge=null;const kg=()=>Ge||dn;let oa,Gr;{const n=va(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};oa=t("__VUE_INSTANCE_SETTERS__",e=>Ge=e),Gr=t("__VUE_SSR_SETTERS__",e=>Wr=e)}const Zr=n=>{const t=Ge;return oa(n),n.scope.on(),()=>{n.scope.off(),oa(t)}},Wu=()=>{Ge&&Ge.scope.off(),oa(null)};function Xh(n){return n.vnode.shapeFlag&4}let Wr=!1;function Vg(n,t=!1,e=!1){t&&Gr(t);const{props:i,children:s}=n.vnode,r=Xh(n);bg(n,i,r,t),Ag(n,s,e||t);const o=r?Hg(n,t):void 0;return t&&Gr(!1),o}function Hg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lg);const{setup:i}=e;if(i){Yn();const s=n.setupContext=i.length>1?Wg(n):null,r=Zr(n),o=Yr(i,n,0,[n.props,s]),a=kf(o);if(jn(),r(),(a||n.sp)&&!Ur(n)&&Mh(n),a){if(o.then(Wu,Wu),t)return o.then(l=>{Gr(!0);try{Xu(n,l,t)}finally{Gr(!1)}}).catch(l=>{ya(l,n,0)});n.asyncDep=o}else Xu(n,o)}else $h(n)}function Xu(n,t,e){$t(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ae(t)&&(n.setupState=uh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||$n);{const s=Zr(n);Yn();try{cg(n)}finally{jn(),s()}}}const Gg={get(n,t){return He(n,"get",""),n[t]}};function Wg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Gg),slots:n.slots,emit:n.emit,expose:t}}function Ta(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(uh(Dm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Nr)return Nr[e](n)},has(t,e){return e in t||e in Nr}})):n.proxy}function Xg(n,t=!0){return $t(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return $t(n)&&"__vccOpts"in n}const Ze=(n,t)=>Om(n,t,Wr);function qh(n,t,e){try{ia(-1);const i=arguments.length;return i===2?ae(t)&&!kt(t)?Hr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Hr(e)&&(e=[e]),Ue(n,t,e))}finally{ia(1)}}const qg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gl;const $u=typeof window<"u"&&window.trustedTypes;if($u)try{Gl=$u.createPolicy("vue",{createHTML:n=>n})}catch{}const Yh=Gl?n=>Gl.createHTML(n):n=>n,Yg="http://www.w3.org/2000/svg",jg="http://www.w3.org/1998/Math/MathML",li=typeof document<"u"?document:null,qu=li&&li.createElement("template"),Kg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?li.createElementNS(Yg,n):t==="mathml"?li.createElementNS(jg,n):e?li.createElement(n,{is:e}):li.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>li.createTextNode(n),createComment:n=>li.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>li.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{qu.innerHTML=Yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Zg=Symbol("_vtc");function Jg(n,t,e){const i=n[Zg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const Yu=Symbol("_vod"),Qg=Symbol("_vsh"),t_=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function n_(n,t,e){const i=n.style,s=be(e);let r=!1;if(e&&!s){if(t)if(be(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Tr(i,a,"")}else for(const o in t)e[o]==null&&Tr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?s_(n,o,!be(t)&&t?t[o]:void 0,a)||Tr(i,o,a):Tr(i,o,"")}}else if(s){if(t!==e){const o=i[t_];o&&(e+=";"+o),i.cssText=e,r=e_.test(e)}}else t&&n.removeAttribute("style");Yu in n&&((!s||t!==e)&&(n[Yu]=r?i.display:""),n[Qg]&&(i.display="none"))}const oo=/\s*!important$/;function Tr(n,t,e){if(kt(e))e.forEach(i=>Tr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))oo.test(e)?n.setProperty(t,e.replace(oo,""),"important"):n.setProperty(t,e);else{const i=i_(n,t);oo.test(e)?n.setProperty(gs(i),e.replace(oo,""),"important"):n[i]=e}}const ju=["Webkit","Moz","ms"],Wa={};function i_(n,t){const e=Wa[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return Wa[t]=i;i=ga(i);for(let s=0;s<ju.length;s++){const r=ju[s]+i;if(r in n)return Wa[t]=r}return t}function s_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&be(i)&&e===i}const Ku="http://www.w3.org/1999/xlink";function Zu(n,t,e,i,s,r=um(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ku,t.slice(6,t.length)):n.setAttributeNS(Ku,t,e):e==null||r&&!Wf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":qn(e)?String(e):e)}function Ju(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Yh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Wf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function hi(n,t,e,i){n.addEventListener(t,e,i)}function r_(n,t,e,i){n.removeEventListener(t,e,i)}const Qu=Symbol("_vei");function o_(n,t,e,i,s=null){const r=n[Qu]||(n[Qu]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=c_(t);if(i){const c=r[t]=f_(i,s);hi(n,a,c,l)}else o&&(r_(n,a,o,l),r[t]=void 0)}}const a_=/(Once|Passive|Capture)$/,l_=/^on:?(?:Once|Passive|Capture)$/;function c_(n){let t,e;for(;(e=n.match(a_))&&!l_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):gs(n.slice(2)),t]}let Xa=0;const u_=Promise.resolve(),d_=()=>Xa||(u_.then(()=>Xa=0),Xa=Date.now());function f_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(kt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Nn(c,t,5,a)}}else Nn(s,t,5,[i])};return e.value=n,e.attached=d_(),e}const td=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,h_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Jg(n,i,o):t==="style"?n_(n,e,i):ha(t)?pa(t)||o_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):p_(n,t,i,o))?(Ju(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Zu(n,t,i,o,r,t!=="value")):n._isVueCE&&(m_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!be(i)))?Ju(n,Qe(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Zu(n,t,i,o))};function p_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&td(t)&&$t(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return td(t)&&be(e)?!1:t in n}function m_(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(s=>Qe(s)===i):Object.keys(e).some(s=>Qe(s)===i)}const Vi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return kt(t)?e=>ko(t,e):t};function g_(n){n.target.composing=!0}function ed(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),ao=Symbol("_initialValue");function $a(n,t,e){return t&&(n=n.trim()),e&&(n=_a(n)),n}const bi={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[ao]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[ao]=n.defaultValue.replace(/\r\n?/g,`
`))),n[hn]=Vi(s);const r=i||s.props&&s.props.type==="number";hi(n,t?"change":"input",o=>{o.target.composing||n[hn]($a(n.value,e,r))}),(e||r)&&hi(n,"change",()=>{n.value=$a(n.value,e,r)}),t||(hi(n,"compositionstart",g_),hi(n,"compositionend",ed),hi(n,"change",ed))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[ao];delete n[ao],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[hn]($a(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[hn]=Vi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?_a(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},wr={deep:!0,created(n,t,e){n[hn]=Vi(e),hi(n,"change",()=>{const i=n._modelValue,s=Js(n),r=n.checked,o=n[hn];if(kt(i)){const a=Hc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(vi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(jh(n,r))})},mounted:nd,beforeUpdate(n,t,e){n[hn]=Vi(e),nd(n,t,e)}};function nd(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(kt(t))s=Hc(t,i.props.value)>-1;else if(vi(t))s=t.has(i.props.value);else{if(t===e)return;s=Un(t,jh(n,!0))}n.checked!==s&&(n.checked=s)}const id={created(n,{value:t},e){n.checked=Un(t,e.props.value),n[hn]=Vi(e),hi(n,"change",()=>{n[hn](Js(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[hn]=Vi(i),t!==e&&(n.checked=Un(t,i.props.value))}},Wl={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,hi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?_a(Js(l)):Js(l)),r=n.multiple,o=r?vi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?kt(o)?s.slice():s:o];try{n[hn](o)}finally{Kc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[hn]=Vi(i)},mounted(n,{value:t}){sd(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[hn]=Vi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!__(t,e[1],e[0]))&&sd(n,t)}};function __(n,t,e){if(!e||kt(n))return Un(n,t);if(vi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function sd(n,t){const e=n.multiple,i=kt(t);if(!(e&&!i&&!vi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Js(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Hc(t,a)>-1}else o.selected=t.has(a);else if(Un(Js(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Js(n){return"_value"in n?n._value:n.value}function jh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const v_=["ctrl","shift","alt","meta"],x_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>v_.some(e=>n[`${e}Key`]&&!t.includes(e))},Hs=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=x_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},y_=Be({patchProp:h_},Kg);let rd;function M_(){return rd||(rd=Rg(y_))}const S_=(...n)=>{const t=M_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=E_(i);if(!s)return;const r=t._component;!$t(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,b_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function b_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function E_(n){return be(n)?document.querySelector(n):n}const Kh=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},T_={};function w_(n,t){const e=bh("router-view");return Bt(),eu(e)}const A_=Kh(T_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ks=typeof document<"u";function Zh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function C_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Zh(n.default)}const se=Object.assign;function qa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Fn(s)?s.map(n):n(s)}return e}const Or=()=>{},Fn=Array.isArray;function od(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Jh=/#/g,R_=/&/g,P_=/\//g,D_=/=/g,L_=/\?/g,Qh=/\+/g,I_=/%5B/g,U_=/%5D/g,tp=/%5E/g,N_=/%60/g,ep=/%7B/g,O_=/%7C/g,np=/%7D/g,F_=/%20/g;function nu(n){return n==null?"":encodeURI(""+n).replace(O_,"|").replace(I_,"[").replace(U_,"]")}function B_(n){return nu(n).replace(ep,"{").replace(np,"}").replace(tp,"^")}function Xl(n){return nu(n).replace(Qh,"%2B").replace(F_,"+").replace(Jh,"%23").replace(R_,"%26").replace(N_,"`").replace(ep,"{").replace(np,"}").replace(tp,"^")}function z_(n){return Xl(n).replace(D_,"%3D")}function k_(n){return nu(n).replace(Jh,"%23").replace(L_,"%3F")}function V_(n){return k_(n).replace(P_,"%2F")}function Xr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const H_=/\/$/,G_=n=>n.replace(H_,"");function Ya(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=q_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Xr(o)}}function W_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ad(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function X_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&Qs(t.matched[i],e.matched[s])&&ip(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function Qs(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ip(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return Fn(n)?ld(n,t):Fn(t)?ld(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function ld(n,t){return Fn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function q_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ei={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let $l=function(n){return n.pop="pop",n.push="push",n}({}),ja=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function Y_(n){if(!n)if(ks){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),G_(n)}const j_=/^[^#]+#/;function K_(n,t){return n.replace(j_,"#")+t}function Z_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function J_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Z_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function cd(n,t){return(history.state?history.state.position-t:-1)+n}const ql=new Map;function Q_(n,t){ql.set(n,t)}function tv(n){const t=ql.get(n);return ql.delete(n),t}function ev(n){return typeof n=="string"||n&&typeof n=="object"}function sp(n){return typeof n=="string"||typeof n=="symbol"}let Se=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const rp=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function tr(n,t){return se(new Error,{type:n,[rp]:!0},t)}function ei(n,t){return n instanceof Error&&rp in n&&(t==null||!!(n.type&t))}const nv=["params","query","hash"];function iv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of nv)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function sv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Qh," "),r=s.indexOf("="),o=Xr(r<0?s:s.slice(0,r)),a=r<0?null:Xr(s.slice(r+1));if(o in t){let l=t[o];Fn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function ud(n){let t="";for(let e in n){const i=n[e];if(e=z_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Fn(i)?i.map(s=>s&&Xl(s)):[i&&Xl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function rv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Fn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const ov=Symbol(""),dd=Symbol(""),Aa=Symbol(""),iu=Symbol(""),Yl=Symbol("");function pr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Li(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(tr(Se.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):ev(f)?l(tr(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Ka(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Zh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Li(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=C_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Li(f,e,i,o,a,s)()}))}}return r}function av(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>Qs(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>Qs(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lv=()=>location.protocol+"//"+location.host;function op(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ad(a,"")}return ad(e,n)+i+s}function cv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=op(n,location),_=e.value,v=t.value;let m=0;if(f){if(e.value=p,t.value=f,o&&o===_){o=null;return}m=v?f.position-v.position:0}else i(p);s.forEach(h=>{h(e.value,_,{delta:m,type:$l.pop,direction:m?m>0?ja.forward:ja.back:ja.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const _=s.indexOf(f);_>-1&&s.splice(_,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(se({},f.state,{scroll:wa()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function fd(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?wa():null}}function uv(n){const{history:t,location:e}=window,i={value:op(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:lv()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){r(l,se({},t.state,fd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=se({},s.value,t.state,{forward:l,scroll:wa()});r(u.current,u,!0),r(l,se({},fd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function dv(n){n=Y_(n);const t=uv(n),e=cv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=se({location:"",base:n,go:i,createHref:K_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function fv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),dv(n)}let os=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ae=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ae||{});const hv={type:os.Static,value:""},pv=/[a-zA-Z0-9_]/;function mv(n){if(!n)return[[]];if(n==="/")return[[hv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=Ae.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ae.Static?r.push({type:os.Static,value:c}):e===Ae.Param||e===Ae.ParamRegExp||e===Ae.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:os.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ae.ParamRegExp){i=e,e=Ae.EscapeNext;continue}switch(e){case Ae.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ae.Param):f();break;case Ae.EscapeNext:f(),e=i;break;case Ae.Param:l==="("?e=Ae.ParamRegExp:pv.test(l)?f():(d(),e=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ae.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ae.ParamRegExpEnd:u+=l;break;case Ae.ParamRegExpEnd:d(),e=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const hd="[^/]+?",gv={sensitive:!1,strict:!1,start:!0,end:!0};var Ye=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ye||{});const _v=/[.+*?^${}()[\]/\\]/g;function vv(n,t){const e=se({},gv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Ye.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Ye.Segment+(e.sensitive?Ye.BonusCaseSensitive:0);if(f.type===os.Static)d||(s+="/"),s+=f.value.replace(_v,"\\$&"),p+=Ye.Static;else if(f.type===os.Param){const{value:_,repeatable:v,optional:m,regexp:h}=f;r.push({name:_,repeatable:v,optional:m});const C=h||hd;if(C!==hd){p+=Ye.BonusCustomRegExp;try{`${C}`}catch(y){throw new Error(`Invalid custom RegExp for param "${_}" (${C}): `+y.message)}}let E=v?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,p+=Ye.Dynamic,m&&(p+=Ye.BonusOptional),v&&(p+=Ye.BonusRepeatable),C===".*"&&(p+=Ye.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Ye.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",_=r[f-1];d[_.name]=p&&_.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===os.Static)u+=p.value;else if(p.type===os.Param){const{value:_,repeatable:v,optional:m}=p,h=_ in c?c[_]:"";if(Fn(h)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const C=Fn(h)?h.join("/"):h;if(!C)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${_}"`);u+=C}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function xv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ye.Static+Ye.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ye.Static+Ye.Segment?1:-1:0}function ap(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=xv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(pd(i))return 1;if(pd(s))return-1}return s.length-i.length}function pd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const yv={strict:!1,end:!0,sensitive:!1};function Mv(n,t,e){const i=vv(mv(n.path),e),s=se(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function Sv(n,t){const e=[],i=new Map;t=od(yv,t);function s(d){return i.get(d)}function r(d,f,p){const _=!p,v=gd(d);v.aliasOf=p&&p.record;const m=od(t,d),h=[v];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const X of y)h.push(gd(se({},v,{components:p?p.record.components:v.components,path:X,aliasOf:p?p.record:v})))}let C,E;for(const y of h){const{path:X}=y;if(f&&X[0]!=="/"){const B=f.record.path,I=B[B.length-1]==="/"?"":"/";y.path=f.record.path+(X&&I+X)}if(C=Mv(y,f,m),p?p.alias.push(C):(E=E||C,E!==C&&E.alias.push(C),_&&d.name&&!_d(C)&&o(d.name)),lp(C)&&l(C),v.children){const B=v.children;for(let I=0;I<B.length;I++)r(B[I],C,p&&p.children[I])}p=p||C}return E?()=>{o(E)}:Or}function o(d){if(sp(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Tv(d,e);e.splice(f,0,d),d.record.name&&!_d(d)&&i.set(d.record.name,d)}function c(d,f){let p,_={},v,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw tr(Se.MATCHER_NOT_FOUND,{location:d});m=p.record.name,_=se(md(f.params,p.keys.filter(E=>!E.optional).concat(p.parent?p.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),d.params&&md(d.params,p.keys.map(E=>E.name))),v=p.stringify(_)}else if(d.path!=null)v=d.path,p=e.find(E=>E.re.test(v)),p&&(_=p.parse(v),m=p.record.name);else{if(p=f.name?i.get(f.name):e.find(E=>E.re.test(f.path)),!p)throw tr(Se.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,_=se({},f.params,d.params),v=p.stringify(_)}const h=[];let C=p;for(;C;)h.unshift(C.record),C=C.parent;return{name:m,path:v,params:_,matched:h,meta:Ev(h)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function md(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function gd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:bv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function _d(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Ev(n){return n.reduce((t,e)=>se(t,e.meta),{})}function Tv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;ap(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(lp(t)&&ap(n,t)===0)return t}function lp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function vd(n){const t=Dn(Aa),e=Dn(iu),i=Ze(()=>{const l=Ee(n.to);return t.resolve(l)}),s=Ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(Qs.bind(null,u));if(f>-1)return f;const p=xd(l[c-2]);return c>1&&xd(u)===p&&d[d.length-1].path!==p?d.findIndex(Qs.bind(null,l[c-2])):f}),r=Ze(()=>s.value>-1&&Dv(e.params,i.value.params)),o=Ze(()=>s.value>-1&&s.value===e.matched.length-1&&ip(e.params,i.value.params));function a(l={}){if(Pv(l)){const c=t[Ee(n.replace)?"replace":"push"](Ee(n.to)).catch(Or);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Av(n){return n.length===1?n[0]:n}const Cv=Wi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vd,setup(n,{slots:t}){const e=fs(vd(n)),{options:i}=Dn(Aa),s=Ze(()=>({[yd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[yd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Av(t.default(e));return n.custom?r:qh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Rv=Cv;function Pv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Dv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Fn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function xd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const yd=(n,t,e)=>n??t??e,Lv=Wi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Dn(Yl),s=Ze(()=>n.route||i.value),r=Dn(dd,0),o=Ze(()=>{let c=Ee(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ze(()=>s.value.matched[o.value]);Vo(dd,Ze(()=>o.value+1)),Vo(ov,a),Vo(Yl,s);const l=ce();return us(()=>[l.value,a.value,n.name],([c,u,d],[f,p,_])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Qs(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Md(e.default,{Component:f,route:c});const p=d.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=qh(f,se({},_,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Md(e.default,{Component:m,route:c})||m}}});function Md(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Iv=Lv;function Uv(n){const t=Sv(n.routes,n),e=n.parseQuery||sv,i=n.stringifyQuery||ud,s=n.history,r=pr(),o=pr(),a=pr(),l=Lm(Ei);let c=Ei;ks&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,U=>""+U),d=qa.bind(null,V_),f=qa.bind(null,Xr);function p(U,nt){let ot,ht;return sp(U)?(ot=t.getRecordMatcher(U),ht=nt):ht=U,t.addRoute(ht,ot)}function _(U){const nt=t.getRecordMatcher(U);nt&&t.removeRoute(nt)}function v(){return t.getRoutes().map(U=>U.record)}function m(U){return!!t.getRecordMatcher(U)}function h(U,nt){if(nt=se({},nt||l.value),typeof U=="string"){const g=Ya(e,U,nt.path),L=t.resolve({path:g.path},nt),K=s.createHref(g.fullPath);return se(g,L,{params:f(L.params),hash:Xr(g.hash),redirectedFrom:void 0,href:K})}let ot;if(U.path!=null)ot=se({},U,{path:Ya(e,U.path,nt.path).path});else{const g=se({},U.params);for(const L in g)g[L]==null&&delete g[L];ot=se({},U,{params:d(g)}),nt.params=d(nt.params)}const ht=t.resolve(ot,nt),b=U.hash||"";ht.params=u(f(ht.params));const R=W_(i,se({},U,{hash:B_(b),path:ht.path})),D=s.createHref(R);return se({fullPath:R,hash:b,query:i===ud?rv(U.query):U.query||{}},ht,{redirectedFrom:void 0,href:D})}function C(U){return typeof U=="string"?Ya(e,U,l.value.path):se({},U)}function E(U,nt){if(c!==U)return tr(Se.NAVIGATION_CANCELLED,{from:nt,to:U})}function y(U){return I(U)}function X(U){return y(se(C(U),{replace:!0}))}function B(U,nt){const ot=U.matched[U.matched.length-1];if(ot&&ot.redirect){const{redirect:ht}=ot;let b=typeof ht=="function"?ht(U,nt):ht;return typeof b=="string"&&(b=b.includes("?")||b.includes("#")?b=C(b):{path:b},b.params={}),se({query:U.query,hash:U.hash,params:b.path!=null?{}:U.params},b)}}function I(U,nt){const ot=c=h(U),ht=l.value,b=U.state,R=U.force,D=U.replace===!0,g=B(ot,ht);if(g)return I(se(C(g),{state:typeof g=="object"?se({},b,g.state):b,force:R,replace:D}),nt||ot);const L=ot;L.redirectedFrom=nt;let K;return!R&&X_(i,ht,ot)&&(K=tr(Se.NAVIGATION_DUPLICATED,{to:L,from:ht}),P(ht,ht,!0,!1)),(K?Promise.resolve(K):T(L,ht)).catch(Z=>ei(Z)?ei(Z,Se.NAVIGATION_GUARD_REDIRECT)?Z:N(Z):k(Z,L,ht)).then(Z=>{if(Z){if(ei(Z,Se.NAVIGATION_GUARD_REDIRECT))return I(se({replace:D},C(Z.to),{state:typeof Z.to=="object"?se({},b,Z.to.state):b,force:R}),nt||L)}else Z=ct(L,ht,!0,D,b);return O(L,ht,Z),Z})}function z(U,nt){const ot=E(U,nt);return ot?Promise.reject(ot):Promise.resolve()}function A(U){const nt=Q.values().next().value;return nt&&typeof nt.runWithContext=="function"?nt.runWithContext(U):U()}function T(U,nt){let ot;const[ht,b,R]=av(U,nt);ot=Ka(ht.reverse(),"beforeRouteLeave",U,nt);for(const g of ht)g.leaveGuards.forEach(L=>{ot.push(Li(L,U,nt))});const D=z.bind(null,U,nt);return ot.push(D),gt(ot).then(()=>{ot=[];for(const g of r.list())ot.push(Li(g,U,nt));return ot.push(D),gt(ot)}).then(()=>{ot=Ka(b,"beforeRouteUpdate",U,nt);for(const g of b)g.updateGuards.forEach(L=>{ot.push(Li(L,U,nt))});return ot.push(D),gt(ot)}).then(()=>{ot=[];for(const g of R)if(g.beforeEnter)if(Fn(g.beforeEnter))for(const L of g.beforeEnter)ot.push(Li(L,U,nt));else ot.push(Li(g.beforeEnter,U,nt));return ot.push(D),gt(ot)}).then(()=>(U.matched.forEach(g=>g.enterCallbacks={}),ot=Ka(R,"beforeRouteEnter",U,nt,A),ot.push(D),gt(ot))).then(()=>{ot=[];for(const g of o.list())ot.push(Li(g,U,nt));return ot.push(D),gt(ot)}).catch(g=>ei(g,Se.NAVIGATION_CANCELLED)?g:Promise.reject(g))}function O(U,nt,ot){a.list().forEach(ht=>A(()=>ht(U,nt,ot)))}function ct(U,nt,ot,ht,b){const R=E(U,nt);if(R)return R;const D=nt===Ei,g=ks?history.state:{};ot&&(ht||D?s.replace(U.fullPath,se({scroll:D&&g&&g.scroll},b)):s.push(U.fullPath,b)),l.value=U,P(U,nt,ot,D),N()}let it;function et(){it||(it=s.listen((U,nt,ot)=>{if(!dt.listening)return;const ht=h(U),b=B(ht,dt.currentRoute.value);if(b){I(se(b,{replace:!0,force:!0}),ht).catch(Or);return}c=ht;const R=l.value;ks&&Q_(cd(R.fullPath,ot.delta),wa()),T(ht,R).catch(D=>ei(D,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?D:ei(D,Se.NAVIGATION_GUARD_REDIRECT)?(I(se(C(D.to),{force:!0}),ht).then(g=>{ei(g,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!ot.delta&&ot.type===$l.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):(ot.delta&&s.go(-ot.delta,!1),k(D,ht,R))).then(D=>{D=D||ct(ht,R,!1),D&&(ot.delta&&!ei(D,Se.NAVIGATION_CANCELLED)?s.go(-ot.delta,!1):ot.type===$l.pop&&ei(D,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),O(ht,R,D)}).catch(Or)}))}let W=pr(),st=pr(),j;function k(U,nt,ot){N(U);const ht=st.list();return ht.length?ht.forEach(b=>b(U,nt,ot)):console.error(U),Promise.reject(U)}function Mt(){return j&&l.value!==Ei?Promise.resolve():new Promise((U,nt)=>{W.add([U,nt])})}function N(U){return j||(j=!U,et(),W.list().forEach(([nt,ot])=>U?ot(U):nt()),W.reset()),U}function P(U,nt,ot,ht){const{scrollBehavior:b}=n;if(!ks||!b)return Promise.resolve();const R=!ot&&tv(cd(U.fullPath,0))||(ht||!ot)&&history.state&&history.state.scroll||null;return Kc().then(()=>b(U,nt,R)).then(D=>D&&J_(D)).catch(D=>k(D,U,nt))}const mt=U=>s.go(U);let bt;const Q=new Set,dt={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:n,push:y,replace:X,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:st.add,isReady:Mt,install(U){U.component("RouterLink",Rv),U.component("RouterView",Iv),U.config.globalProperties.$router=dt,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>Ee(l)}),ks&&!bt&&l.value===Ei&&(bt=!0,y(s.location).catch(ht=>{}));const nt={};for(const ht in Ei)Object.defineProperty(nt,ht,{get:()=>l.value[ht],enumerable:!0});U.provide(Aa,dt),U.provide(iu,lh(nt)),U.provide(Yl,l);const ot=U.unmount;Q.add(U),U.unmount=function(){Q.delete(U),Q.size<1&&(c=Ei,it&&it(),it=null,l.value=Ei,bt=!1,j=!1),ot()}}};function gt(U){return U.reduce((nt,ot)=>nt.then(()=>A(ot)),Promise.resolve())}return dt}function Nv(){return Dn(Aa)}function Ov(n){return Dn(iu)}var su={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),P=N.getContext("2d");P.fillRect(0,0,1,1);var mt=N.transferToImageBitmap();P.createPattern(mt,"no-repeat")}catch{return!1}return!0}();function l(){}function c(N){var P=e.exports.Promise,mt=P!==void 0?P:t.Promise;return typeof mt=="function"?new mt(N):(N(l,l),null)}var u=function(N,P){return{transform:function(mt){if(N)return mt;if(P.has(mt))return P.get(mt);var bt=new OffscreenCanvas(mt.width,mt.height),Q=bt.getContext("2d");return Q.drawImage(mt,0,0),P.set(mt,bt),bt},clear:function(){P.clear()}}}(a,new Map),d=function(){var N=Math.floor(16.666666666666668),P,mt,bt={},Q=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(P=function(dt){var gt=Math.random();return bt[gt]=requestAnimationFrame(function U(nt){Q===nt||Q+N-1<nt?(Q=nt,delete bt[gt],dt()):bt[gt]=requestAnimationFrame(U)}),gt},mt=function(dt){bt[dt]&&cancelAnimationFrame(bt[dt])}):(P=function(dt){return setTimeout(dt,N)},mt=function(dt){return clearTimeout(dt)}),{frame:P,cancel:mt}}(),f=function(){var N,P,mt={};function bt(Q){function dt(gt,U){Q.postMessage({options:gt||{},callback:U})}Q.init=function(U){var nt=U.transferControlToOffscreen();Q.postMessage({canvas:nt},[nt])},Q.fire=function(U,nt,ot){if(P)return dt(U,null),P;var ht=Math.random().toString(36).slice(2);return P=c(function(b){function R(D){D.data.callback===ht&&(delete mt[ht],Q.removeEventListener("message",R),P=null,u.clear(),ot(),b())}Q.addEventListener("message",R),dt(U,ht),mt[ht]=R.bind(null,{data:{callback:ht}})}),P},Q.reset=function(){Q.postMessage({reset:!0});for(var U in mt)mt[U](),delete mt[U]}}return function(){if(N)return N;if(!i&&r){var Q=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([Q])))}catch(dt){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",dt),null}bt(N)}return N}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(N,P){return P?P(N):N}function v(N){return N!=null}function m(N,P,mt){return _(N&&v(N[P])?N[P]:p[P],mt)}function h(N){return N<0?0:Math.floor(N)}function C(N,P){return Math.floor(Math.random()*(P-N))+N}function E(N){return parseInt(N,16)}function y(N){return N.map(X)}function X(N){var P=String(N).replace(/[^0-9a-f]/gi,"");return P.length<6&&(P=P[0]+P[0]+P[1]+P[1]+P[2]+P[2]),{r:E(P.substring(0,2)),g:E(P.substring(2,4)),b:E(P.substring(4,6))}}function B(N){var P=m(N,"origin",Object);return P.x=m(P,"x",Number),P.y=m(P,"y",Number),P}function I(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function z(N){var P=N.getBoundingClientRect();N.width=P.width,N.height=P.height}function A(N){var P=document.createElement("canvas");return P.style.position="fixed",P.style.top="0px",P.style.left="0px",P.style.pointerEvents="none",P.style.zIndex=N,P}function T(N,P,mt,bt,Q,dt,gt,U,nt){N.save(),N.translate(P,mt),N.rotate(dt),N.scale(bt,Q),N.arc(0,0,1,gt,U,nt),N.restore()}function O(N){var P=N.angle*(Math.PI/180),mt=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-P+(.5*mt-Math.random()*mt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function ct(N,P){P.x+=Math.cos(P.angle2D)*P.velocity+P.drift,P.y+=Math.sin(P.angle2D)*P.velocity+P.gravity,P.velocity*=P.decay,P.flat?(P.wobble=0,P.wobbleX=P.x+10*P.scalar,P.wobbleY=P.y+10*P.scalar,P.tiltSin=0,P.tiltCos=0,P.random=1):(P.wobble+=P.wobbleSpeed,P.wobbleX=P.x+10*P.scalar*Math.cos(P.wobble),P.wobbleY=P.y+10*P.scalar*Math.sin(P.wobble),P.tiltAngle+=.1,P.tiltSin=Math.sin(P.tiltAngle),P.tiltCos=Math.cos(P.tiltAngle),P.random=Math.random()+2);var mt=P.tick++/P.totalTicks,bt=P.x+P.random*P.tiltCos,Q=P.y+P.random*P.tiltSin,dt=P.wobbleX+P.random*P.tiltCos,gt=P.wobbleY+P.random*P.tiltSin;if(N.fillStyle="rgba("+P.color.r+", "+P.color.g+", "+P.color.b+", "+(1-mt)+")",N.beginPath(),o&&P.shape.type==="path"&&typeof P.shape.path=="string"&&Array.isArray(P.shape.matrix))N.fill(j(P.shape.path,P.shape.matrix,P.x,P.y,Math.abs(dt-bt)*.1,Math.abs(gt-Q)*.1,Math.PI/10*P.wobble));else if(P.shape.type==="bitmap"){var U=Math.PI/10*P.wobble,nt=Math.abs(dt-bt)*.1,ot=Math.abs(gt-Q)*.1,ht=P.shape.bitmap.width*P.scalar,b=P.shape.bitmap.height*P.scalar,R=new DOMMatrix([Math.cos(U)*nt,Math.sin(U)*nt,-Math.sin(U)*ot,Math.cos(U)*ot,P.x,P.y]);R.multiplySelf(new DOMMatrix(P.shape.matrix));var D=N.createPattern(u.transform(P.shape.bitmap),"no-repeat");D.setTransform(R),N.globalAlpha=1-mt,N.fillStyle=D,N.fillRect(P.x-ht/2,P.y-b/2,ht,b),N.globalAlpha=1}else if(P.shape==="circle")N.ellipse?N.ellipse(P.x,P.y,Math.abs(dt-bt)*P.ovalScalar,Math.abs(gt-Q)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI):T(N,P.x,P.y,Math.abs(dt-bt)*P.ovalScalar,Math.abs(gt-Q)*P.ovalScalar,Math.PI/10*P.wobble,0,2*Math.PI);else if(P.shape==="star")for(var g=Math.PI/2*3,L=4*P.scalar,K=8*P.scalar,Z=P.x,$=P.y,ut=5,H=Math.PI/ut;ut--;)Z=P.x+Math.cos(g)*K,$=P.y+Math.sin(g)*K,N.lineTo(Z,$),g+=H,Z=P.x+Math.cos(g)*L,$=P.y+Math.sin(g)*L,N.lineTo(Z,$),g+=H;else N.moveTo(Math.floor(P.x),Math.floor(P.y)),N.lineTo(Math.floor(P.wobbleX),Math.floor(Q)),N.lineTo(Math.floor(dt),Math.floor(gt)),N.lineTo(Math.floor(bt),Math.floor(P.wobbleY));return N.closePath(),N.fill(),P.tick<P.totalTicks}function it(N,P,mt,bt,Q){var dt=P.slice(),gt=N.getContext("2d"),U,nt,ot=c(function(ht){function b(){U=nt=null,gt.clearRect(0,0,bt.width,bt.height),u.clear(),Q(),ht()}function R(){i&&!(bt.width===s.width&&bt.height===s.height)&&(bt.width=N.width=s.width,bt.height=N.height=s.height),!bt.width&&!bt.height&&(mt(N),bt.width=N.width,bt.height=N.height),gt.clearRect(0,0,bt.width,bt.height),dt=dt.filter(function(D){return ct(gt,D)}),dt.length?U=d.frame(R):b()}U=d.frame(R),nt=b});return{addFettis:function(ht){return dt=dt.concat(ht),ot},canvas:N,promise:ot,reset:function(){U&&d.cancel(U),nt&&nt()}}}function et(N,P){var mt=!N,bt=!!m(P||{},"resize"),Q=!1,dt=m(P,"disableForReducedMotion",Boolean),gt=r&&!!m(P||{},"useWorker"),U=gt?f():null,nt=mt?I:z,ot=N&&U?!!N.__confetti_initialized:!1,ht=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function R(g,L,K){for(var Z=m(g,"particleCount",h),$=m(g,"angle",Number),ut=m(g,"spread",Number),H=m(g,"startVelocity",Number),S=m(g,"decay",Number),x=m(g,"gravity",Number),F=m(g,"drift",Number),J=m(g,"colors",y),rt=m(g,"ticks",Number),tt=m(g,"shapes"),vt=m(g,"scalar"),pt=!!m(g,"flat"),yt=B(g),Gt=Z,xt=[],At=N.width*yt.x,zt=N.height*yt.y;Gt--;)xt.push(O({x:At,y:zt,angle:$,spread:ut,startVelocity:H,color:J[Gt%J.length],shape:tt[C(0,tt.length)],ticks:rt,decay:S,gravity:x,drift:F,scalar:vt,flat:pt}));return b?b.addFettis(xt):(b=it(N,xt,nt,L,K),b.promise)}function D(g){var L=dt||m(g,"disableForReducedMotion",Boolean),K=m(g,"zIndex",Number);if(L&&ht)return c(function(H){H()});mt&&b?N=b.canvas:mt&&!N&&(N=A(K),document.body.appendChild(N)),bt&&!ot&&nt(N);var Z={width:N.width,height:N.height};U&&!ot&&U.init(N),ot=!0,U&&(N.__confetti_initialized=!0);function $(){if(U){var H={getBoundingClientRect:function(){if(!mt)return N.getBoundingClientRect()}};nt(H),U.postMessage({resize:{width:H.width,height:H.height}});return}Z.width=Z.height=null}function ut(){b=null,bt&&(Q=!1,t.removeEventListener("resize",$)),mt&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,ot=!1)}return bt&&!Q&&(Q=!0,t.addEventListener("resize",$,!1)),U?U.fire(g,Z,ut):R(g,Z,ut)}return D.reset=function(){U&&U.reset(),b&&b.reset()},D}var W;function st(){return W||(W=et(null,{useWorker:!0,resize:!0})),W}function j(N,P,mt,bt,Q,dt,gt){var U=new Path2D(N),nt=new Path2D;nt.addPath(U,new DOMMatrix(P));var ot=new Path2D;return ot.addPath(nt,new DOMMatrix([Math.cos(gt)*Q,Math.sin(gt)*Q,-Math.sin(gt)*dt,Math.cos(gt)*dt,mt,bt])),ot}function k(N){if(!o)throw new Error("path confetti are not supported in this browser");var P,mt;typeof N=="string"?P=N:(P=N.path,mt=N.matrix);var bt=new Path2D(P),Q=document.createElement("canvas"),dt=Q.getContext("2d");if(!mt){for(var gt=1e3,U=gt,nt=gt,ot=0,ht=0,b,R,D=0;D<gt;D+=2)for(var g=0;g<gt;g+=2)dt.isPointInPath(bt,D,g,"nonzero")&&(U=Math.min(U,D),nt=Math.min(nt,g),ot=Math.max(ot,D),ht=Math.max(ht,g));b=ot-U,R=ht-nt;var L=10,K=Math.min(L/b,L/R);mt=[K,0,0,K,-Math.round(b/2+U)*K,-Math.round(R/2+nt)*K]}return{type:"path",path:P,matrix:mt}}function Mt(N){var P,mt=1,bt="#000000",Q='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?P=N:(P=N.text,mt="scalar"in N?N.scalar:mt,Q="fontFamily"in N?N.fontFamily:Q,bt="color"in N?N.color:bt);var dt=10*mt,gt=""+dt+"px "+Q,U=new OffscreenCanvas(dt,dt),nt=U.getContext("2d");nt.font=gt;var ot=nt.measureText(P),ht=Math.ceil(ot.actualBoundingBoxRight+ot.actualBoundingBoxLeft),b=Math.ceil(ot.actualBoundingBoxAscent+ot.actualBoundingBoxDescent),R=2,D=ot.actualBoundingBoxLeft+R,g=ot.actualBoundingBoxAscent+R;ht+=R+R,b+=R+R,U=new OffscreenCanvas(ht,b),nt=U.getContext("2d"),nt.font=gt,nt.fillStyle=bt,nt.fillText(P,D,g);var L=1/mt;return{type:"bitmap",bitmap:U.transferToImageBitmap(),matrix:[L,0,0,L,-ht*L/2,-b*L/2]}}e.exports=function(){return st().apply(this,arguments)},e.exports.reset=function(){st().reset()},e.exports.create=et,e.exports.shapeFromPath=k,e.exports.shapeFromText=Mt})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),su,!1);const Fv=su.exports;su.exports.create;const Bv={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},zv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px"}},kv={style:{display:"flex","align-items":"center",gap:"14px","font-size":"11px","font-weight":"bold"}},Vv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Hv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Gv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Wv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"}},Sd=300,Xv=Wi({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=ce(null),s=ce(null),r=fs({vin:!0,vout:!0,iin:!0,iout:!0}),o=[];let a=0;function l(d){o.push(d),o.length>Sd&&o.shift()}us(()=>e.latestSample,d=>{d&&l(d)});function c(){const d=s.value;if(!d||!i.value)return;const f=d.width=i.value.clientWidth,p=d.height=i.value.clientHeight,_=d.getContext("2d");if(!_)return;_.fillStyle="#121519",_.fillRect(0,0,f,p);const v=45,m=15,h=15,C=25,E=f-v-m,y=p-h-C;if(E<=10||y<=10)return;_.strokeStyle="#1e2530",_.lineWidth=1,_.setLineDash([3,3]);const X=5;for(let O=0;O<=X;O++){const ct=h+y/X*O;_.beginPath(),_.moveTo(v,ct),_.lineTo(v+E,ct),_.stroke()}const B=8;for(let O=0;O<=B;O++){const ct=v+E/B*O;_.beginPath(),_.moveTo(ct,h),_.lineTo(ct,h+y),_.stroke()}_.setLineDash([]),_.strokeStyle="#2d3748",_.strokeRect(v,h,E,y);let I=15,z=4;o.forEach(O=>{O.vin>I&&(I=O.vin+2),O.vout>I&&(I=O.vout+2),O.iin>z&&(z=O.iin+1),O.iout>z&&(z=O.iout+1)}),_.fillStyle="#718096",_.font="10px Consolas, monospace",_.textAlign="right",_.textBaseline="middle";for(let O=0;O<=X;O++){const ct=h+y/X*O,it=I-I/X*O;_.fillText(`${it.toFixed(1)}V`,v-6,ct)}if(o.length<2){_.fillStyle="#4a5568",_.textAlign="center",_.fillText("等待采样数据流...",v+E/2,h+y/2);return}const A=_;function T(O,ct,it){if(!A)return;A.strokeStyle=ct,A.lineWidth=1.6,A.beginPath();const et=o.length;for(let W=0;W<et;W++){const st=v+W/(Sd-1)*E,j=o[W][O]||0,k=h+y-Math.max(0,j)/it*y;W===0?A.moveTo(st,k):A.lineTo(st,k)}A.stroke()}r.vin&&T("vin","#00d2ff",I),r.vout&&T("vout","#ffd166",I),r.iin&&T("iin","#06d6a0",z*(I/z)),r.iout&&T("iout","#ef476f",z*(I/z))}function u(){c(),a=requestAnimationFrame(u)}return jr(()=>{u()}),Kr(()=>{cancelAnimationFrame(a)}),t({clear(){o.length=0}}),(d,f)=>(Bt(),Vt("div",Bv,[M("div",zv,[f[8]||(f[8]=M("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[M("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Ot(" 实时参数时域波形 (Real-time Waveforms) ")],-1)),M("div",kv,[M("label",Vv,[De(M("input",{type:"checkbox","onUpdate:modelValue":f[0]||(f[0]=p=>r.vin=p)},null,512),[[wr,r.vin]]),f[4]||(f[4]=Ot(" Vin (电源电压) ",-1))]),M("label",Hv,[De(M("input",{type:"checkbox","onUpdate:modelValue":f[1]||(f[1]=p=>r.vout=p)},null,512),[[wr,r.vout]]),f[5]||(f[5]=Ot(" Vout (负载电压) ",-1))]),M("label",Gv,[De(M("input",{type:"checkbox","onUpdate:modelValue":f[2]||(f[2]=p=>r.iin=p)},null,512),[[wr,r.iin]]),f[6]||(f[6]=Ot(" Iin (电源电流) ",-1))]),M("label",Wv,[De(M("input",{type:"checkbox","onUpdate:modelValue":f[3]||(f[3]=p=>r.iout=p)},null,512),[[wr,r.iout]]),f[7]||(f[7]=Ot(" Iout (负载电流) ",-1))])])]),M("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519"}},[M("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512)],512)]))}}),$v={class:"modal-card",style:{"max-width":"680px"}},qv={class:"modal-header"},Yv={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},jv={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},Kv={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},Zv={style:{display:"flex","align-items":"center",gap:"8px"}},Jv={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},Qv={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},t0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},e0={style:{color:"#ecc94b"}},n0={style:{color:"#63b3ed"}},i0={style:{color:"#e2e8f0"}},s0={style:{color:"#48bb78"}},r0={style:{display:"flex","align-items":"center",gap:"6px"}},o0=["onClick"],a0=["onClick"],l0=["onClick"],c0={class:"modal-footer"},u0=Wi({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Bt(),Vt("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=Hs(i=>t.$emit("close"),["self"]))},[M("div",$v,[M("div",qv,[e[5]||(e[5]=M("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[M("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("circle",{cx:"12",cy:"12",r:"10"}),M("polyline",{points:"12 6 12 12 16 14"})]),Ot(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),M("div",Yv,[n.records.length===0?(Bt(),Vt("div",jv," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Le("",!0),(Bt(!0),Vt(Fe,null,Vs(n.records,i=>{var s,r;return Bt(),Vt("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[M("div",Kv,[M("div",Zv,[M("span",Jv,St(i.title),1),M("span",Qv,St(new Date(i.createdAt).toLocaleString()),1)]),M("div",t0,[M("span",null,[e[6]||(e[6]=Ot("电压: ",-1)),M("b",e0,St(i.config.voltageMin)+"V ~ "+St(i.config.voltageMax)+"V",1)]),M("span",null,[e[7]||(e[7]=Ot("负载: ",-1)),M("b",n0,St(i.config.loadMin)+" ~ "+St(i.config.loadMax)+" ("+St(i.config.loadMode)+")",1)]),M("span",null,[e[8]||(e[8]=Ot("点数: ",-1)),M("b",i0,St(i.points.length),1)]),M("span",null,[e[9]||(e[9]=Ot("最高效率: ",-1)),M("b",s0,St(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),M("div",r0,[M("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Ot(" 进入数据查看 ",-1)])],8,o0),M("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,a0),M("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"3 6 5 6 21 6"}),M("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,l0)])],32)}),128))]),M("div",c0,[M("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Le("",!0)}}),d0={class:"modal-card",style:{"max-width":"520px"}},f0={class:"modal-header"},h0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},p0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},m0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},g0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},_0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},v0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},x0={style:{display:"flex","align-items":"center",gap:"6px"}},y0=["disabled"],M0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},S0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},b0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},E0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},T0={style:{display:"flex","align-items":"center",gap:"6px"}},w0=["disabled"],A0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},C0={class:"modal-footer"},R0=Wi({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=ce(9600),e=ce(9600);return(i,s)=>n.isOpen?(Bt(),Vt("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=Hs(r=>i.$emit("close"),["self"]))},[M("div",d0,[M("div",f0,[s[10]||(s[10]=sa('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),M("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),M("div",h0,[M("div",p0,[s[11]||(s[11]=M("div",null,[M("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[M("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Ot(" 内置仿真演示驱动 (Virtual Simulation) ")]),M("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),M("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),M("div",m0,[M("div",g0,[M("span",_0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Ot(" 直流电源 (RIGOL DP700) ",-1))]),M("span",v0,St(n.psuPortName),1)]),M("div",x0,[De(M("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,y0),[[Wl,t.value,void 0,{number:!0}]]),n.psuConnected?(Bt(),Vt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Bt(),Vt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),M("div",M0,[M("div",S0,[M("span",b0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Ot(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),M("span",E0,St(n.loadPortName),1)]),M("div",T0,[De(M("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[M("option",{value:9600},"9600 bps (标准)",-1),M("option",{value:19200},"19200 bps",-1),M("option",{value:38400},"38400 bps",-1),M("option",{value:115200},"115200 bps",-1)])],8,w0),[[Wl,e.value,void 0,{number:!0}]]),n.loadConnected?(Bt(),Vt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Bt(),Vt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Le("",!0):(Bt(),Vt("div",A0,[...s[16]||(s[16]=[Ot(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),M("b",null,"【启用仿真】",-1),Ot("无障碍测试。 ",-1)])]))]),M("div",C0,[M("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Le("",!0)}});class P0{constructor(){he(this,"connected",!0);he(this,"outputOn",!1);he(this,"targetVoltage",5);he(this,"currentVoltage",5);he(this,"currentLimit",3);he(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t}isOutputOn(){return this.outputOn}setVoltage(t){this.targetVoltage=Math.max(0,t),this.currentVoltage=this.targetVoltage}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=(Math.random()-.5)*.008,e=Math.max(0,this.currentVoltage+t);let i=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&e>1){const o=this.linkedLoad.measure(e).pout,l=.938-.006*Math.abs(e-8.8),c=(Math.random()-.5)*.004,u=Math.min(.965,Math.max(.72,l+c)),d=o>.01?o/u:e*.02;i=Math.min(this.currentLimit,d/e+(Math.random()-.5)*.003)}const s=e*i;return{vin:Math.round(e*1e3)/1e3,iin:Math.round(i*1e3)/1e3,pin:Math.round(s*1e3)/1e3}}}class D0{constructor(){he(this,"connected",!0);he(this,"inputOn",!1);he(this,"mode","CC");he(this,"targetCurrent",1);he(this,"targetPower",10);he(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t}isInputOn(){return this.inputOn}setMode(t){this.mode=t}setCurrent(t){this.targetCurrent=Math.max(0,t)}setPower(t){this.targetPower=Math.max(0,t)}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if((t??10)<1)return{vout:0,iout:0,pout:0};const i=5;let s=0,r=0;if(this.mode==="CC"){s=this.targetCurrent+(Math.random()-.5)*.004;const o=i-s*.015+(Math.random()-.5)*.003;return r=o*s,{vout:Math.max(0,Math.round(o*1e3)/1e3),iout:Math.max(0,Math.round(s*1e3)/1e3),pout:Math.max(0,Math.round(r*1e3)/1e3)}}else{r=this.targetPower+(Math.random()-.5)*.01;const o=i-r/i*.015+(Math.random()-.5)*.003;return s=r/o,{vout:Math.max(0,Math.round(o*1e3)/1e3),iout:Math.max(0,Math.round(s*1e3)/1e3),pout:Math.max(0,Math.round(r*1e3)/1e3)}}}}class bd{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setOutput(t){return`:OUTP CH1,${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT? CH1
`,`:MEAS:CURR? CH1
`,`:MEAS:POWE? CH1
`]}}class lo{static setMode(t){return`:SOUR:FUNC ${t}
`}static setCurrent(t){return`:SOUR:CURR ${t.toFixed(3)}
`}static setPower(t){return`:SOUR:POW ${t.toFixed(3)}
`}static setInput(t){return`:SOUR:INP ${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT?
`,`:MEAS:CURR?
`,`:MEAS:POW?
`]}}class Ed{constructor(t){he(this,"type");he(this,"isVirtual",!0);he(this,"port",null);he(this,"reader",null);he(this,"writer",null);he(this,"encoder",null);he(this,"decoder",null);he(this,"readBuffer","");he(this,"virtualPsu",new P0);he(this,"virtualLoad",new D0);he(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){try{this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer)throw new Error("Port writer not initialized");await this.writer.write(t)}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e)break;t&&(this.readBuffer+=t)}}catch(t){console.warn("Read stream terminated:",t)}}}const ss=class ss{constructor(){he(this,"psu",new Ed("PSU"));he(this,"load",new Ed("LOAD"));this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu)}static getInstance(){return ss.instance||(ss.instance=new ss),ss.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(bd.setVoltageAndLimit(e,i)),await this.psu.write(bd.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(lo.setMode(e)),e==="CC"?await this.load.write(lo.setCurrent(i)):await this.load.write(lo.setPower(i)),await this.load.write(lo.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};he(ss,"instance");let jl=ss;const L0="PowerChipTesterDB",I0=1,yn="test_runs",cp=5;function Ca(){return new Promise((n,t)=>{const e=indexedDB.open(L0,I0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(yn)||s.createObjectStore(yn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function U0(n){const t=await Ca(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([yn],"readwrite");r.objectStore(yn).put(e),r.oncomplete=async()=>{try{await F0(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Ca();return new Promise((t,e)=>{const o=n.transaction([yn],"readonly").objectStore(yn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function N0(n){const t=await Ca();return new Promise((e,i)=>{const o=t.transaction([yn],"readonly").objectStore(yn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function O0(n){const t=await Ca();return new Promise((e,i)=>{const s=t.transaction([yn],"readwrite");s.objectStore(yn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function F0(n){return new Promise((t,e)=>{const s=n.transaction([yn],"readwrite").objectStore(yn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function Wo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(p=>`"${p}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(p=>{const _=n.voltageSteps.map(v=>{const m=n.points.find(h=>Math.abs(h.voltageTarget-v)<1e-4&&Math.abs(h.loadTarget-p)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${p}",${_.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(p=>{i.push([p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),`"${p.loadMode}"`,p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2),`"${p.status}"`].join(","))});const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const B0={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},z0={class:"menubar"},k0={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},V0={style:{display:"flex","align-items":"center",gap:"5px"}},H0={style:{display:"flex","align-items":"center",gap:"5px"}},G0={class:"panel-left"},W0={class:"group-box"},X0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},$0={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},q0={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"6px"}},Y0=["value"],j0={style:{display:"flex","align-items":"center",gap:"4px"}},K0=["value"],Z0={class:"group-box"},J0={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},Q0={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},tx={style:{"margin-bottom":"6px"}},ex={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},nx=["disabled"],ix=["disabled"],sx=["disabled"],rx={style:{"margin-bottom":"6px"}},ox={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},ax={style:{display:"flex",gap:"4px"}},lx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},cx=["disabled"],ux={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},dx=["disabled"],fx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},hx={style:{"font-size":"10px",color:"#a0aec0"}},px=["disabled"],mx={style:{"font-size":"10px",color:"#a0aec0"}},gx=["disabled"],_x={style:{"font-size":"10px",color:"#a0aec0"}},vx=["disabled"],xx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"6px"}},yx=["disabled"],Mx=["disabled"],Sx={class:"group-box"},bx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Ex={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Tx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},wx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Ax={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Cx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},Rx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Px={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Dx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Lx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Ix={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Ux={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},Nx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Ox={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},Fx={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},Bx={style:{display:"flex","flex-direction":"column",gap:"6px"}},zx={style:{display:"flex",gap:"6px"}},kx=["disabled"],Vx=["disabled"],Hx={class:"panel-right"},Gx={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},Wx={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},Xx={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},$x={style:{color:"#48bb78"}},qx={style:{flex:"1",overflow:"auto"}},Yx={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},jx={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},Kx={style:{padding:"4px 6px"}},Zx={style:{padding:"4px 6px"}},Jx={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},Qx={style:{padding:"4px 6px"}},ty={style:{padding:"4px 6px"}},ey={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},ny={style:{padding:"4px 6px"}},iy={style:{padding:"4px 6px"}},sy={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},ry={key:0,style:{color:"#48bb78"}},oy={key:1,style:{color:"#00d2ff"}},ay={key:2,style:{color:"#4a5568"}},ly={style:{padding:"4px 6px","text-align":"center"}},cy={class:"statusbar"},uy={key:0,style:{color:"#48bb78"}},dy={key:1},fy=Wi({__name:"ConsoleView",setup(n){const t=jl.getInstance(),e=ce(null),i=ce(!1),s=ce(!1),r=ce(!0),o=ce([]),a=ce(null),l=ce(void 0),c=ce(!1),u=ce(!1),d=ce("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let f=null,p=null;const _=fs({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:30}),v=ce([]),m=ce([]),h=ce([]),C=ce(null),E=fs({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),y=Ze(()=>{const D=Math.max(1,Math.floor((_.voltageMax-_.voltageMin)/_.voltageStep)+1),g=Math.max(1,Math.floor((_.loadMax-_.loadMin)/_.loadStep)+1);return D*g}),X=Ze(()=>h.value.filter(D=>D.status==="completed").length),B=Ze(()=>h.value.filter(D=>D.status==="completed"));function I(D){e.value=e.value===D?null:D}function z(){e.value=null}function A(){const D=[];for(let Z=_.voltageMin;Z<=_.voltageMax+1e-5;Z+=_.voltageStep)D.push(Math.round(Z*100)/100);const g=[];for(let Z=_.loadMin;Z<=_.loadMax+1e-5;Z+=_.loadStep)g.push(Math.round(Z*100)/100);v.value=D,m.value=g;const L=[];let K=1;for(const Z of D)for(const $ of g)L.push({stepIndex:K++,voltageTarget:Z,loadTarget:$,loadMode:_.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});h.value=L,E.totalSteps=L.length,E.currentStep=0,E.progressPercent=0}async function T(){t.isBothConnected()||t.autoConnectVirtual(),A(),a.value&&a.value.clear(),c.value=!0,u.value=!1,f=new AbortController,d.value="正在执行全自动 2D 矩阵效率测试...",W();try{let D=0;for(let g=0;g<h.value.length&&!f.signal.aborted;g++){for(;u.value&&!f.signal.aborted;)await new Promise(vt=>setTimeout(vt,200));const L=h.value[g];L.status="running",E.activeTargetV=L.voltageTarget,E.activeTargetLoad=L.loadTarget,E.currentStep=g+1,d.value=`正在测试步 #${L.stepIndex} (Vin: ${L.voltageTarget.toFixed(2)}V, 负载: ${L.loadTarget.toFixed(2)}${L.loadMode})...`,await t.setPsuOutput(!0,L.voltageTarget,_.inputCurrentLimit),await t.setLoadInput(!0,_.loadMode,L.loadTarget);const K=_.stepDwellTime*1e3,Z=Math.min(150,K*.15),$=Math.round(1e3/_.sampleRateHz),ut=performance.now();let H=0,S=0,x=0,F=0,J=0,rt=0,tt=0;for(;performance.now()-ut<K&&!f.signal.aborted;){for(;u.value&&!f.signal.aborted;)await new Promise(yt=>setTimeout(yt,200));const vt=performance.now()-ut,pt=t.measure();E.vin=pt.vin,E.iin=pt.iin,E.pin=pt.pin,E.vout=pt.vout,E.iout=pt.iout,E.pout=pt.pout,E.efficiency=pt.efficiency,l.value={t:performance.now(),vin:pt.vin,vout:pt.vout,iin:pt.iin,iout:pt.iout},vt>=Z&&vt<=K-Z&&(H+=pt.vin,S+=pt.iin,x+=pt.pin,F+=pt.vout,J+=pt.iout,rt+=pt.pout,tt++),await new Promise(yt=>setTimeout(yt,$))}if(tt>0)L.vin=Math.round(H/tt*1e3)/1e3,L.iin=Math.round(S/tt*1e3)/1e3,L.pin=Math.round(x/tt*1e3)/1e3,L.vout=Math.round(F/tt*1e3)/1e3,L.iout=Math.round(J/tt*1e3)/1e3,L.pout=Math.round(rt/tt*1e3)/1e3,L.efficiency=L.pin>.01?Math.min(100,Math.round(L.pout/L.pin*1e4)/100):0;else{const vt=t.measure();L.vin=vt.vin,L.iin=vt.iin,L.pin=vt.pin,L.vout=vt.vout,L.iout=vt.iout,L.pout=vt.pout,L.efficiency=vt.efficiency}L.status="completed",L.timestamp=Date.now(),D++,E.progressPercent=D/h.value.length*100}f.signal.aborted||await O()}catch(D){console.error("Test execution error:",D),d.value="测试执行异常: "+String(D),alert("测试执行过程中发生异常："+String(D))}finally{c.value=!1,u.value=!1,st()}}async function O(){await t.emergencyStopAll(),d.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const D=h.value.filter(rt=>rt.status==="completed");let g=0,L=100,K=0,Z;D.forEach(rt=>{rt.efficiency>g&&(g=rt.efficiency,Z=rt),rt.efficiency<L&&(L=rt.efficiency),K+=rt.efficiency});const $=D.length>0?K/D.length:0,ut=`test_${Date.now()}`,H=new Date,S=JSON.parse(JSON.stringify(_)),x=JSON.parse(JSON.stringify(h.value)),F=Z?JSON.parse(JSON.stringify(Z)):void 0,J={id:ut,title:`芯片双向矩阵扫描 [${_.voltageMin}V-${_.voltageMax}V | ${_.loadMode}]`,createdAt:H.toISOString(),config:S,voltageSteps:[...v.value],loadSteps:[...m.value],points:x,summary:{totalPoints:h.value.length,completedPoints:D.length,maxEfficiency:Math.round(g*100)/100,minEfficiency:Math.round(L*100)/100,avgEfficiency:Math.round($*100)/100,optimalPoint:F,durationSeconds:Math.round(D.length*_.stepDwellTime)}};C.value=J,await U0(J),await P(),Fv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),j(ut)}function ct(){u.value=!0,d.value="测试已暂停"}function it(){u.value=!1,d.value="测试已继续运行"}async function et(){f&&f.abort(),c.value=!1,u.value=!1,await t.emergencyStopAll(),st(),d.value="测试已手动终止"}function W(){p&&clearInterval(p),p=window.setInterval(()=>{if(!c.value){const D=t.measure();E.vin=D.vin,E.iin=D.iin,E.pin=D.pin,E.vout=D.vout,E.iout=D.iout,E.pout=D.pout,E.efficiency=D.efficiency,l.value={t:performance.now(),vin:D.vin,vout:D.vout,iin:D.iin,iout:D.iout}}},100)}function st(){p&&(clearInterval(p),p=null)}function j(D){var Z;const g=D||((Z=C.value)==null?void 0:Z.id);if(!g){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const K=`${window.location.href.split("#")[0]}#/result/${g}`;window.open(K,"_blank")}function k(){if(C.value)Wo(C.value);else if(B.value.length>0){const D={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(_)),voltageSteps:[...v.value],loadSteps:[...m.value],points:JSON.parse(JSON.stringify(h.value)),summary:{totalPoints:h.value.length,completedPoints:B.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};Wo(D)}else alert("当前无可用测试数据可供导出！")}function Mt(D){Wo(D)}async function N(D){await O0(D),await P()}async function P(){try{o.value=await up()}catch(D){console.warn("Failed to load history:",D)}}async function mt(){await P(),i.value=!0}function bt(){h.value=[],C.value=null,a.value&&a.value.clear(),A(),d.value="图表与数据已清空"}function Q(){r.value?(t.autoConnectVirtual(),d.value="已启用内置仿真驱动模式 (Virtual Mode)"):(t.psu.disconnect(),t.load.disconnect(),d.value="已关闭仿真模式，请配置物理串口设备")}function dt(){t.psu.state.connected?(t.psu.disconnect(),d.value="电源串口已断开"):s.value=!0}function gt(){t.load.state.connected?(t.load.disconnect(),d.value="电子负载串口已断开"):s.value=!0}function U(){r.value=!0,t.autoConnectVirtual(),s.value=!1,d.value="仿真驱动已就绪"}async function nt(D){try{await t.psu.connectPhysical(D),r.value=!1,d.value=`电源串口已连接 (${D}bps)`}catch(g){alert("连接电源串口失败: "+((g==null?void 0:g.message)||g))}}async function ot(){await t.psu.disconnect(),d.value="电源串口已断开"}async function ht(D){try{await t.load.connectPhysical(D),r.value=!1,d.value=`负载串口已连接 (${D}bps)`}catch(g){alert("连接负载串口失败: "+((g==null?void 0:g.message)||g))}}async function b(){await t.load.disconnect(),d.value="负载串口已断开"}function R(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}return jr(async()=>{t.autoConnectVirtual(),A(),W(),await P()}),Kr(()=>{st()}),(D,g)=>(Bt(),Vt("div",B0,[M("div",z0,[M("div",{class:ci(["menu-item",{active:e.value==="file"}]),onClick:g[3]||(g[3]=L=>I("file"))},[g[32]||(g[32]=Ot(" 文件 (File) ",-1)),e.value==="file"?(Bt(),Vt("div",{key:0,class:"dropdown-menu",onClick:g[2]||(g[2]=Hs(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:g[0]||(g[0]=L=>{k(),z()})},[...g[29]||(g[29]=[M("span",null,"导出测试结果 CSV (Export CSV)...",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),g[31]||(g[31]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:g[1]||(g[1]=L=>z())},[...g[30]||(g[30]=[M("span",null,"退出 (Exit)",-1),M("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Le("",!0)],2),M("div",{class:ci(["menu-item",{active:e.value==="view"}]),onClick:g[6]||(g[6]=L=>I("view"))},[g[34]||(g[34]=Ot(" 视图 (View) ",-1)),e.value==="view"?(Bt(),Vt("div",{key:0,class:"dropdown-menu",onClick:g[5]||(g[5]=Hs(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:g[4]||(g[4]=L=>{bt(),z()})},[...g[33]||(g[33]=[M("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Le("",!0)],2),M("div",{class:ci(["menu-item",{active:e.value==="tools"}]),onClick:g[10]||(g[10]=L=>I("tools"))},[g[38]||(g[38]=Ot(" 工具 (Tools) ",-1)),e.value==="tools"?(Bt(),Vt("div",{key:0,class:"dropdown-menu",onClick:g[9]||(g[9]=Hs(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:g[7]||(g[7]=L=>{mt(),z()})},[...g[35]||(g[35]=[M("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),M("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),g[37]||(g[37]=M("div",{class:"dropdown-divider"},null,-1)),M("div",{class:"dropdown-item",onClick:g[8]||(g[8]=L=>{s.value=!0,z()})},[...g[36]||(g[36]=[M("span",null,"打开串口硬件连接设置...",-1)])])])):Le("",!0)],2),M("div",{class:ci(["menu-item",{active:e.value==="help"}]),onClick:g[13]||(g[13]=L=>I("help"))},[g[40]||(g[40]=Ot(" 帮助 (Help) ",-1)),e.value==="help"?(Bt(),Vt("div",{key:0,class:"dropdown-menu",onClick:g[12]||(g[12]=Hs(()=>{},["stop"]))},[M("div",{class:"dropdown-item",onClick:g[11]||(g[11]=L=>{R(),z()})},[...g[39]||(g[39]=[M("span",null,"关于工作台 (About Workbench)...",-1)])])])):Le("",!0)],2),M("div",k0,[M("span",V0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Ot(" 电源: "+St(Ee(t).psu.state.portName),1)]),M("span",H0,[M("span",{style:Ie([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Ee(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Ot(" 负载: "+St(Ee(t).load.state.portName),1)]),C.value?(Bt(),Vt("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:g[14]||(g[14]=L=>j(C.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...g[41]||(g[41]=[M("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),M("polyline",{points:"15 3 21 3 21 9"}),M("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Ot(" 打开 3D/2D 数据视图 ",-1)])])):Le("",!0)])]),M("div",{class:"workbench-body",onClick:z},[M("div",G0,[M("div",W0,[g[45]||(g[45]=M("div",{class:"group-title"},[M("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),M("div",X0,[M("label",$0,[De(M("input",{type:"checkbox","onUpdate:modelValue":g[15]||(g[15]=L=>r.value=L),onChange:Q},null,544),[[wr,r.value]]),g[42]||(g[42]=Ot(" 🧪 启用仿真演示模式 ",-1))]),M("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:g[16]||(g[16]=L=>s.value=!0)}," ⚙ 配置 ")]),M("div",q0,[g[43]||(g[43]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,Y0),M("button",{class:ci(["btn",Ee(t).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:dt},St(Ee(t).psu.state.connected?"断开":"连接"),3)]),M("div",j0,[g[44]||(g[44]=M("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),M("input",{type:"text",readonly:"",value:Ee(t).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,K0),M("button",{class:ci(["btn",Ee(t).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:gt},St(Ee(t).load.state.connected?"断开":"连接"),3)])]),M("div",Z0,[M("div",J0,[g[46]||(g[46]=M("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),M("span",Q0," 总点数: "+St(y.value)+" 点 ",1)]),M("div",tx,[g[50]||(g[50]=M("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),M("div",ex,[M("div",null,[g[47]||(g[47]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),De(M("input",{type:"number","onUpdate:modelValue":g[17]||(g[17]=L=>_.voltageMin=L),disabled:c.value,step:"0.5",style:{width:"100%"}},null,8,nx),[[bi,_.voltageMin,void 0,{number:!0}]])]),M("div",null,[g[48]||(g[48]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),De(M("input",{type:"number","onUpdate:modelValue":g[18]||(g[18]=L=>_.voltageMax=L),disabled:c.value,step:"0.5",style:{width:"100%"}},null,8,ix),[[bi,_.voltageMax,void 0,{number:!0}]])]),M("div",null,[g[49]||(g[49]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),De(M("input",{type:"number","onUpdate:modelValue":g[19]||(g[19]=L=>_.voltageStep=L),disabled:c.value,step:"0.2",style:{width:"100%"}},null,8,sx),[[bi,_.voltageStep,void 0,{number:!0}]])])])]),M("div",rx,[M("div",ox,[g[53]||(g[53]=M("span",null,"负载扫描范围 (Load):",-1)),M("div",ax,[M("label",lx,[De(M("input",{type:"radio",value:"CC","onUpdate:modelValue":g[20]||(g[20]=L=>_.loadMode=L),disabled:c.value},null,8,cx),[[id,_.loadMode]]),g[51]||(g[51]=Ot(" CC恒流 ",-1))]),M("label",ux,[De(M("input",{type:"radio",value:"CW","onUpdate:modelValue":g[21]||(g[21]=L=>_.loadMode=L),disabled:c.value},null,8,dx),[[id,_.loadMode]]),g[52]||(g[52]=Ot(" CW恒功率 ",-1))])])]),M("div",fx,[M("div",null,[M("span",hx,"起始("+St(_.loadMode==="CC"?"A":"W")+"):",1),De(M("input",{type:"number","onUpdate:modelValue":g[22]||(g[22]=L=>_.loadMin=L),disabled:c.value,step:"0.2",style:{width:"100%"}},null,8,px),[[bi,_.loadMin,void 0,{number:!0}]])]),M("div",null,[M("span",mx,"终止("+St(_.loadMode==="CC"?"A":"W")+"):",1),De(M("input",{type:"number","onUpdate:modelValue":g[23]||(g[23]=L=>_.loadMax=L),disabled:c.value,step:"0.2",style:{width:"100%"}},null,8,gx),[[bi,_.loadMax,void 0,{number:!0}]])]),M("div",null,[M("span",_x,"步长("+St(_.loadMode==="CC"?"A":"W")+"):",1),De(M("input",{type:"number","onUpdate:modelValue":g[24]||(g[24]=L=>_.loadStep=L),disabled:c.value,step:"0.1",style:{width:"100%"}},null,8,vx),[[bi,_.loadStep,void 0,{number:!0}]])])])]),M("div",xx,[M("div",null,[g[54]||(g[54]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),De(M("input",{type:"number","onUpdate:modelValue":g[25]||(g[25]=L=>_.inputCurrentLimit=L),disabled:c.value,step:"0.5",style:{width:"100%"}},null,8,yx),[[bi,_.inputCurrentLimit,void 0,{number:!0}]])]),M("div",null,[g[55]||(g[55]=M("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留稳定(秒):",-1)),De(M("input",{type:"number","onUpdate:modelValue":g[26]||(g[26]=L=>_.stepDwellTime=L),disabled:c.value,step:"0.2",style:{width:"100%"}},null,8,Mx),[[bi,_.stepDwellTime,void 0,{number:!0}]])])])]),M("div",Sx,[g[69]||(g[69]=M("div",{class:"group-title"},[M("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),M("div",bx,[M("div",Ex,[g[57]||(g[57]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),M("div",Tx,[Ot(St(E.vin.toFixed(3))+" ",1),g[56]||(g[56]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",wx,[g[59]||(g[59]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),M("div",Ax,[Ot(St(E.vout.toFixed(3))+" ",1),g[58]||(g[58]=M("span",{style:{"font-size":"10px"}},"V",-1))])]),M("div",Cx,[g[61]||(g[61]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),M("div",Rx,[Ot(St(E.iin.toFixed(3))+" ",1),g[60]||(g[60]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Px,[g[63]||(g[63]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),M("div",Dx,[Ot(St(E.iout.toFixed(3))+" ",1),g[62]||(g[62]=M("span",{style:{"font-size":"10px"}},"A",-1))])]),M("div",Lx,[g[65]||(g[65]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),M("div",Ix,[Ot(St(E.pin.toFixed(3))+" ",1),g[64]||(g[64]=M("span",{style:{"font-size":"10px"}},"W",-1))])]),M("div",Ux,[g[67]||(g[67]=M("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),M("div",Nx,[Ot(St(E.pout.toFixed(3))+" ",1),g[66]||(g[66]=M("span",{style:{"font-size":"10px"}},"W",-1))])])]),M("div",Ox,[g[68]||(g[68]=M("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),M("span",Fx,St(E.efficiency.toFixed(2))+" % ",1)])]),M("div",Bx,[c.value?u.value?(Bt(),Vt("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:it}," ▶ 继续测试 ")):(Bt(),Vt("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:ct}," ⏸ 暂停测试 ")):(Bt(),Vt("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:T}," ▶ 开始矩阵测试 ")),M("div",zx,[M("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!c.value,onClick:et}," ⏹ 结束 ",8,kx),M("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:B.value.length===0,onClick:k}," 📊 导出CSV ",8,Vx)])])]),M("div",Hx,[Ue(Xv,{ref_key:"waveformRef",ref:a,"latest-sample":l.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),M("div",Gx,[M("div",Wx,[g[71]||(g[71]=M("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),M("span",Xx,[g[70]||(g[70]=Ot(" 已完成: ",-1)),M("b",$x,St(X.value),1),Ot(" / "+St(h.value.length)+" 步 ",1)])]),M("div",qx,[M("table",Yx,[g[72]||(g[72]=M("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[M("tr",{style:{"border-bottom":"1px solid #2d3748"}},[M("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),M("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),M("th",{style:{padding:"5px 6px"}},"目标负载"),M("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),M("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),M("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),M("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),M("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),M("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),M("tbody",null,[(Bt(!0),Vt(Fe,null,Vs(h.value,L=>(Bt(),Vt("tr",{key:L.stepIndex,style:Ie([{"border-bottom":"1px solid #1e2530"},{backgroundColor:L.status==="running"?"#1a365d":"transparent"}])},[M("td",jx,"#"+St(L.stepIndex),1),M("td",Kx,St(L.voltageTarget.toFixed(2)),1),M("td",Zx,St(L.loadTarget.toFixed(2))+" "+St(L.loadMode),1),M("td",Jx,St(L.status!=="pending"?L.vin.toFixed(4):"--"),1),M("td",Qx,St(L.status!=="pending"?L.iin.toFixed(4):"--"),1),M("td",ty,St(L.status!=="pending"?L.pin.toFixed(4):"--"),1),M("td",ey,St(L.status!=="pending"?L.vout.toFixed(4):"--"),1),M("td",ny,St(L.status!=="pending"?L.iout.toFixed(4):"--"),1),M("td",iy,St(L.status!=="pending"?L.pout.toFixed(4):"--"),1),M("td",sy,[L.status==="completed"?(Bt(),Vt("span",ry,St(L.efficiency.toFixed(2))+"% ",1)):L.status==="running"?(Bt(),Vt("span",oy,"测定中")):(Bt(),Vt("span",ay,"--"))]),M("td",ly,[M("span",{style:Ie([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:L.status==="completed"?"#22543d":L.status==="running"?"#2b6cb0":"#2d3748",color:L.status==="completed"?"#9ae6b4":L.status==="running"?"#bee3f8":"#718096"}])},St(L.status==="completed"?"已完成":L.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),M("div",cy,[M("span",null,St(d.value),1),c.value?(Bt(),Vt("span",uy," 正在测试第 "+St(E.currentStep)+" / "+St(E.totalSteps)+" 点 ("+St(E.progressPercent.toFixed(1))+"%) ",1)):(Bt(),Vt("span",dy,"就绪 (Ready)"))]),Ue(u0,{"is-open":i.value,records:o.value,onClose:g[27]||(g[27]=L=>i.value=!1),onOpenResult:j,onExportCsv:Mt,onDeleteRecord:N},null,8,["is-open","records"]),Ue(R0,{"is-open":s.value,"psu-connected":Ee(t).psu.state.connected,"psu-port-name":Ee(t).psu.state.portName,"load-connected":Ee(t).load.state.connected,"load-port-name":Ee(t).load.state.portName,"web-serial-supported":Ee(t).psu.isWebSerialSupported(),onClose:g[28]||(g[28]=L=>s.value=!1),onConnectVirtual:U,onConnectPhysicalPsu:nt,onDisconnectPsu:ot,onConnectPhysicalLoad:ht,onDisconnectLoad:b},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"])]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ru="170",qs={ROTATE:0,DOLLY:1,PAN:2},Gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hy=0,Td=1,py=2,dp=1,fp=2,ai=3,Hi=0,rn=1,pi=2,Fi=0,Ys=1,wd=2,Ad=3,Cd=4,my=5,ns=100,gy=101,_y=102,vy=103,xy=104,yy=200,My=201,Sy=202,by=203,Kl=204,Zl=205,Ey=206,Ty=207,wy=208,Ay=209,Cy=210,Ry=211,Py=212,Dy=213,Ly=214,Jl=0,Ql=1,tc=2,er=3,ec=4,nc=5,ic=6,sc=7,hp=0,Iy=1,Uy=2,Bi=0,Ny=1,Oy=2,Fy=3,By=4,zy=5,ky=6,Vy=7,pp=300,nr=301,ir=302,rc=303,oc=304,Ra=306,ac=1e3,as=1001,lc=1002,Ln=1003,Hy=1004,co=1005,An=1006,Za=1007,ls=1008,xi=1009,mp=1010,gp=1011,$r=1012,ou=1013,hs=1014,mi=1015,Jr=1016,au=1017,lu=1018,sr=1020,_p=35902,vp=1021,xp=1022,Cn=1023,yp=1024,Mp=1025,js=1026,rr=1027,Sp=1028,cu=1029,bp=1030,uu=1031,du=1033,Xo=33776,$o=33777,qo=33778,Yo=33779,cc=35840,uc=35841,dc=35842,fc=35843,hc=36196,pc=37492,mc=37496,gc=37808,_c=37809,vc=37810,xc=37811,yc=37812,Mc=37813,Sc=37814,bc=37815,Ec=37816,Tc=37817,wc=37818,Ac=37819,Cc=37820,Rc=37821,jo=36492,Pc=36494,Dc=36495,Ep=36283,Lc=36284,Ic=36285,Uc=36286,Gy=3200,Wy=3201,Tp=0,Xy=1,Ui="",gn="srgb",ar="srgb-linear",Pa="linear",le="srgb",Ms=7680,Rd=519,$y=512,qy=513,Yy=514,wp=515,jy=516,Ky=517,Zy=518,Jy=519,Nc=35044,Pd="300 es",gi=2e3,aa=2001;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Oc=180/Math.PI;function zi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function Qy(n,t){return(n%t+t)%t}function Ja(n,t,e){return(1-e)*n+e*t}function Xn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const tM={DEG2RAD:Fr};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,i,s,r,o,a,l,c){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],_=i[8],v=s[0],m=s[3],h=s[6],C=s[1],E=s[4],y=s[7],X=s[2],B=s[5],I=s[8];return r[0]=o*v+a*C+l*X,r[3]=o*m+a*E+l*B,r[6]=o*h+a*y+l*I,r[1]=c*v+u*C+d*X,r[4]=c*m+u*E+d*B,r[7]=c*h+u*y+d*I,r[2]=f*v+p*C+_*X,r[5]=f*m+p*E+_*B,r[8]=f*h+p*y+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,_=e*d+i*f+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qa.makeScale(t,e)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Kt;function Ap(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function la(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function eM(){const n=la("canvas");return n.style.display="block",n}const Dd={};function Ar(n){n in Dd||(Dd[n]=!0,console.warn(n))}function nM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function iM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function sM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===le&&(n.r=_i(n.r),n.g=_i(n.g),n.b=_i(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===le&&(n.r=Ks(n.r),n.g=Ks(n.g),n.b=Ks(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Ui?Pa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function _i(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ld=[.64,.33,.3,.6,.15,.06],Id=[.2126,.7152,.0722],Ud=[.3127,.329],Nd=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[ar]:{primaries:Ld,whitePoint:Ud,transfer:Pa,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Ld,whitePoint:Ud,transfer:le,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Ss;class rM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=la("canvas")),Ss.width=t.width,Ss.height=t.height;const i=Ss.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=la("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=_i(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_i(e[i]/255)*255):e[i]=_i(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let oM=0;class Cp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tl(s[o].image)):r.push(tl(s[o]))}else r=tl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function tl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let aM=0;class tn extends _s{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=as,s=as,r=An,o=ls,a=Cn,l=xi,c=tn.DEFAULT_ANISOTROPY,u=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=zi(),this.name="",this.source=new Cp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ac:t.x=t.x-Math.floor(t.x);break;case as:t.x=t.x<0?0:1;break;case lc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ac:t.y=t.y-Math.floor(t.y);break;case as:t.y=t.y<0?0:1;break;case lc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=pp;tn.DEFAULT_ANISOTROPY=1;class fe{constructor(t=0,e=0,i=0,s=1){fe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],_=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,y=(p+1)/2,X=(h+1)/2,B=(u+f)/4,I=(d+v)/4,z=(_+m)/4;return E>y&&E>X?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=B/i,r=I/i):y>X?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=B/s,r=z/s):X<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(X),i=I/r,s=z/r),this.set(i,s,r,e),this}let C=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(d-v)/C,this.z=(f-u)/C,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lM extends _s{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new fe(0,0,t,e),this.scissorTest=!1,this.viewport=new fe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ps extends lM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Rp extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cM extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],_=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(d!==v||l!==f||c!==p||u!==_){let m=1-a;const h=l*f+c*p+u*_+d*v,C=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const X=Math.sqrt(E),B=Math.atan2(X,h*C);m=Math.sin(m*B)/X,a=Math.sin(a*B)/X}const y=a*C;if(l=l*m+f*y,c=c*m+p*y,u=u*m+_*y,d=d*m+v*y,m===1-a){const X=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=X,c*=X,u*=X,d*=X}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],_=r[o+3];return t[e]=a*_+u*d+l*p-c*f,t[e+1]=l*_+u*f+c*d-a*p,t[e+2]=c*_+u*p+a*f-l*d,t[e+3]=u*_-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"YXZ":this._x=f*u*d+c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"ZXY":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d-f*p*_;break;case"ZYX":this._x=f*u*d-c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d+f*p*_;break;case"YZX":this._x=f*u*d+c*p*_,this._y=c*p*d+f*u*_,this._z=c*u*_-f*p*d,this._w=c*u*d-f*p*_;break;case"XZY":this._x=f*u*d-c*p*_,this._y=c*p*d-f*u*_,this._z=c*u*_+f*p*d,this._w=c*u*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,e=0,i=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new V,Fd=new ms;class Qr{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),uo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(t.matrixWorld),this.union(uo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),fo.subVectors(this.max,mr),bs.subVectors(t.a,mr),Es.subVectors(t.b,mr),Ts.subVectors(t.c,mr),Ti.subVectors(Es,bs),wi.subVectors(Ts,Es),Yi.subVectors(bs,Ts);let e=[0,-Ti.z,Ti.y,0,-wi.z,wi.y,0,-Yi.z,Yi.y,Ti.z,0,-Ti.x,wi.z,0,-wi.x,Yi.z,0,-Yi.x,-Ti.y,Ti.x,0,-wi.y,wi.x,0,-Yi.y,Yi.x,0];return!nl(e,bs,Es,Ts,fo)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,bs,Es,Ts,fo))?!1:(ho.crossVectors(Ti,wi),e=[ho.x,ho.y,ho.z],nl(e,bs,Es,Ts,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ni=[new V,new V,new V,new V,new V,new V,new V,new V],bn=new V,uo=new Qr,bs=new V,Es=new V,Ts=new V,Ti=new V,wi=new V,Yi=new V,mr=new V,fo=new V,ho=new V,ji=new V;function nl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ji.fromArray(n,r);const a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),l=t.dot(ji),c=e.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uM=new Qr,gr=new V,il=new V;class Da{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):uM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(gr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(il)),this.expandByPoint(gr.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new V,sl=new V,po=new V,Ai=new V,rl=new V,mo=new V,ol=new V;class La{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){sl.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),Ai.copy(this.origin).sub(sl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=Ai.dot(this.direction),l=-Ai.dot(po),c=Ai.lengthSq(),u=Math.abs(1-o*o);let d,f,p,_;if(u>0)if(d=o*l-a,f=o*a-l,_=r*u,d>=0)if(f>=-_)if(f<=_){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sl).addScaledVector(po,f),p}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const i=ii.dot(this.direction),s=ii.dot(ii)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,i,s,r){rl.subVectors(e,t),mo.subVectors(i,t),ol.crossVectors(rl,mo);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ai.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(Ai,mo));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Ai));if(c<0||l+c>o)return null;const u=-a*Ai.dot(ol);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,_,v,m){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,_,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,_,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=_,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ws.setFromMatrixColumn(t,0).length(),r=1/ws.setFromMatrixColumn(t,1).length(),o=1/ws.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+_*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=_+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,_=c*u,v=c*d;e[0]=f+v*a,e[4]=_*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-_,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,_=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=_+p*a,e[1]=p+_*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,_=a*u,v=a*d;e[0]=l*u,e[4]=_*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=_*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+_,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,p=o*c,_=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=p*d-_,e[2]=_*d-p,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dM,t,fM)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Ci.crossVectors(i,an),Ci.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Ci.crossVectors(i,an)),Ci.normalize(),go.crossVectors(an,Ci),s[0]=Ci.x,s[4]=go.x,s[8]=an.x,s[1]=Ci.y,s[5]=go.y,s[9]=an.y,s[2]=Ci.z,s[6]=go.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],_=i[2],v=i[6],m=i[10],h=i[14],C=i[3],E=i[7],y=i[11],X=i[15],B=s[0],I=s[4],z=s[8],A=s[12],T=s[1],O=s[5],ct=s[9],it=s[13],et=s[2],W=s[6],st=s[10],j=s[14],k=s[3],Mt=s[7],N=s[11],P=s[15];return r[0]=o*B+a*T+l*et+c*k,r[4]=o*I+a*O+l*W+c*Mt,r[8]=o*z+a*ct+l*st+c*N,r[12]=o*A+a*it+l*j+c*P,r[1]=u*B+d*T+f*et+p*k,r[5]=u*I+d*O+f*W+p*Mt,r[9]=u*z+d*ct+f*st+p*N,r[13]=u*A+d*it+f*j+p*P,r[2]=_*B+v*T+m*et+h*k,r[6]=_*I+v*O+m*W+h*Mt,r[10]=_*z+v*ct+m*st+h*N,r[14]=_*A+v*it+m*j+h*P,r[3]=C*B+E*T+y*et+X*k,r[7]=C*I+E*O+y*W+X*Mt,r[11]=C*z+E*ct+y*st+X*N,r[15]=C*A+E*it+y*j+X*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],_=t[3],v=t[7],m=t[11],h=t[15];return _*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],_=t[12],v=t[13],m=t[14],h=t[15],C=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,E=_*f*c-u*m*c-_*l*p+o*m*p+u*l*h-o*f*h,y=u*v*c-_*d*c+_*a*p-o*v*p-u*a*h+o*d*h,X=_*d*l-u*v*l-_*a*f+o*v*f+u*a*m-o*d*m,B=e*C+i*E+s*y+r*X;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/B;return t[0]=C*I,t[1]=(v*f*r-d*m*r-v*s*p+i*m*p+d*s*h-i*f*h)*I,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*I,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*I,t[4]=E*I,t[5]=(u*m*r-_*f*r+_*s*p-e*m*p-u*s*h+e*f*h)*I,t[6]=(_*l*r-o*m*r-_*s*c+e*m*c+o*s*h-e*l*h)*I,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*I,t[8]=y*I,t[9]=(_*d*r-u*v*r-_*i*p+e*v*p+u*i*h-e*d*h)*I,t[10]=(o*v*r-_*a*r+_*i*c-e*v*c-o*i*h+e*a*h)*I,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*I,t[12]=X*I,t[13]=(u*v*s-_*d*s+_*i*f-e*v*f-u*i*m+e*d*m)*I,t[14]=(_*a*s-o*v*s-_*i*l+e*v*l+o*i*m-e*a*m)*I,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*I,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,_=r*d,v=o*u,m=o*d,h=a*d,C=l*c,E=l*u,y=l*d,X=i.x,B=i.y,I=i.z;return s[0]=(1-(v+h))*X,s[1]=(p+y)*X,s[2]=(_-E)*X,s[3]=0,s[4]=(p-y)*B,s[5]=(1-(f+h))*B,s[6]=(m+C)*B,s[7]=0,s[8]=(_+E)*I,s[9]=(m-C)*I,s[10]=(1-(f+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ws.set(s[0],s[1],s[2]).length();const o=ws.set(s[4],s[5],s[6]).length(),a=ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const c=1/r,u=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=u,En.elements[5]*=u,En.elements[6]*=u,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,e.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=gi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,_;if(a===gi)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===aa)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=gi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u;let _,v;if(a===gi)_=(o+r)*d,v=-2*d;else if(a===aa)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ws=new V,En=new ve,dM=new V(0,0,0),fM=new V(1,1,1),Ci=new V,go=new V,an=new V,Bd=new ve,zd=new ms;class Zn{constructor(t=0,e=0,i=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class fu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let hM=0;const kd=new V,As=new ms,si=new ve,_o=new V,_r=new V,pM=new V,mM=new ms,Vd=new V(1,0,0),Hd=new V(0,1,0),Gd=new V(0,0,1),Wd={type:"added"},gM={type:"removed"},Cs={type:"childadded",child:null},al={type:"childremoved",child:null};class Ne extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new V,e=new Zn,i=new ms,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new Kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Hd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Hd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_o.copy(t):_o.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(_r,_o,this.up):si.lookAt(_o,_r,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),As.setFromRotationMatrix(si),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wd),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gM),al.child=t,this.dispatchEvent(al),al.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wd),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,pM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,mM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new V(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new V,ri=new V,ll=new V,oi=new V,Rs=new V,Ps=new V,Xd=new V,cl=new V,ul=new V,dl=new V,fl=new fe,hl=new fe,pl=new fe;class un{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Tn.subVectors(t,e),s.cross(Tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Tn.subVectors(s,e),ri.subVectors(i,e),ll.subVectors(t,e);const o=Tn.dot(Tn),a=Tn.dot(ri),l=Tn.dot(ll),c=ri.dot(ri),u=ri.dot(ll),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-p-_,_,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return fl.setScalar(0),hl.setScalar(0),pl.setScalar(0),fl.fromBufferAttribute(t,e),hl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fl,r.x),o.addScaledVector(hl,r.y),o.addScaledVector(pl,r.z),o}static isFrontFacing(t,e,i,s){return Tn.subVectors(i,e),ri.subVectors(t,e),Tn.cross(ri).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Tn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Tn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Rs.subVectors(s,i),Ps.subVectors(r,i),cl.subVectors(t,i);const l=Rs.dot(cl),c=Ps.dot(cl);if(l<=0&&c<=0)return e.copy(i);ul.subVectors(t,s);const u=Rs.dot(ul),d=Ps.dot(ul);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Rs,o);dl.subVectors(t,r);const p=Rs.dot(dl),_=Ps.dot(dl);if(_>=0&&p<=_)return e.copy(r);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(i).addScaledVector(Ps,a);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Xd.subVectors(r,s),a=(d-u)/(d-u+(p-_)),e.copy(s).addScaledVector(Xd,a);const h=1/(m+v+f);return o=v*h,a=f*h,e.copy(i).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},vo={h:0,s:0,l:0};function ml(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Wt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qt.workingColorSpace){if(t=Qy(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ml(o,r,t+1/3),this.g=ml(o,r,t),this.b=ml(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Pp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_i(t.r),this.g=_i(t.g),this.b=_i(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return Qt.fromWorkingColorSpace(Ve.copy(this),t),Math.round(Ke(Ve.r*255,0,255))*65536+Math.round(Ke(Ve.g*255,0,255))*256+Math.round(Ke(Ve.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ve.copy(this),e);const i=Ve.r,s=Ve.g,r=Ve.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ve.copy(this),e),t.r=Ve.r,t.g=Ve.g,t.b=Ve.b,t}getStyle(t=gn){Qt.fromWorkingColorSpace(Ve.copy(this),t);const e=Ve.r,i=Ve.g,s=Ve.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(vo);const i=Ja(Ri.h,vo.h,e),s=Ja(Ri.s,vo.s,e),r=Ja(Ri.l,vo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ve=new Wt;Wt.NAMES=Pp;let _M=0;class vs extends _s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=zi(),this.name="",this.blending=Ys,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kl,this.blendDst=Zl,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(i.blending=this.blending),this.side!==Hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Dp extends vs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=hp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new V,xo=new Ht;class In{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nc,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)xo.fromBufferAttribute(this,e),xo.applyMatrix3(t),this.setXY(e,xo.x,xo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nc&&(t.usage=this.usage),t}}class Lp extends In{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Ip extends In{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends In{constructor(t,e,i){super(new Float32Array(t),e,i)}}let vM=0;const mn=new ve,gl=new Ne,Ds=new V,ln=new Qr,vr=new Qr,Pe=new V;class Je extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ap(t)?Ip:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return gl.lookAt(t),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(ln.min,vr.min),ln.expandByPoint(Pe),Pe.addVectors(ln.max,vr.max),ln.expandByPoint(Pe)):(ln.expandByPoint(vr.min),ln.expandByPoint(vr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Pe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Pe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pe.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(t,c),Pe.add(Ds)),s=Math.max(s,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let z=0;z<i.count;z++)a[z]=new V,l[z]=new V;const c=new V,u=new V,d=new V,f=new Ht,p=new Ht,_=new Ht,v=new V,m=new V;function h(z,A,T){c.fromBufferAttribute(i,z),u.fromBufferAttribute(i,A),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,z),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,T),u.sub(c),d.sub(c),p.sub(f),_.sub(f);const O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(v.copy(u).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(O),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(O),a[z].add(v),a[A].add(v),a[T].add(v),l[z].add(m),l[A].add(m),l[T].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:t.count}]);for(let z=0,A=C.length;z<A;++z){const T=C[z],O=T.start,ct=T.count;for(let it=O,et=O+ct;it<et;it+=3)h(t.getX(it+0),t.getX(it+1),t.getX(it+2))}const E=new V,y=new V,X=new V,B=new V;function I(z){X.fromBufferAttribute(s,z),B.copy(X);const A=a[z];E.copy(A),E.sub(X.multiplyScalar(X.dot(A))).normalize(),y.crossVectors(B,A);const O=y.dot(l[z])<0?-1:1;o.setXYZW(z,E.x,E.y,E.z,O)}for(let z=0,A=C.length;z<A;++z){const T=C[z],O=T.start,ct=T.count;for(let it=O,et=O+ct;it<et;it+=3)I(t.getX(it+0)),I(t.getX(it+1)),I(t.getX(it+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,d=new V;if(t)for(let f=0,p=t.count;f<p;f+=3){const _=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Pe.fromBufferAttribute(t,e),Pe.normalize(),t.setXYZ(e,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[_++]=c[p++]}return new In(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new ve,Ki=new La,yo=new Da,qd=new V,Mo=new V,So=new V,bo=new V,_l=new V,Eo=new V,Yd=new V,To=new V;class Rn extends Ne{constructor(t=new Je,e=new Dp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(_l.fromBufferAttribute(d,t),o?Eo.addScaledVector(_l,u):Eo.addScaledVector(_l.sub(e),u))}e.add(Eo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(r),Ki.copy(t.ray).recast(t.near),!(yo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(yo,qd)===null||Ki.origin.distanceToSquared(qd)>(t.far-t.near)**2))&&($d.copy(r).invert(),Ki.copy(t.ray).applyMatrix4($d),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],C=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,X=E;y<X;y+=3){const B=a.getX(y),I=a.getX(y+1),z=a.getX(y+2);s=wo(this,h,t,i,c,u,d,B,I,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const C=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);s=wo(this,o,t,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,v=f.length;_<v;_++){const m=f[_],h=o[m.materialIndex],C=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=C,X=E;y<X;y+=3){const B=y,I=y+1,z=y+2;s=wo(this,h,t,i,c,u,d,B,I,z),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,h=v;m<h;m+=3){const C=m,E=m+1,y=m+2;s=wo(this,o,t,i,c,u,d,C,E,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function xM(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Hi,a),l===null)return null;To.copy(a),To.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(To);return c<e.near||c>e.far?null:{distance:c,point:To.clone(),object:n}}function wo(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Mo),n.getVertexPosition(l,So),n.getVertexPosition(c,bo);const u=xM(n,t,e,i,Mo,So,bo,Yd);if(u){const d=new V;un.getBarycoord(Yd,Mo,So,bo,d),s&&(u.uv=un.getInterpolatedAttribute(s,a,l,c,d,new Ht)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,l,c,d,new Ht)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,d,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};un.getNormal(Mo,So,bo,f.normal),u.face=f,u.barycoord=d}return u}class lr extends Je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(d,2));function _(v,m,h,C,E,y,X,B,I,z,A){const T=y/I,O=X/z,ct=y/2,it=X/2,et=B/2,W=I+1,st=z+1;let j=0,k=0;const Mt=new V;for(let N=0;N<st;N++){const P=N*O-it;for(let mt=0;mt<W;mt++){const bt=mt*T-ct;Mt[v]=bt*C,Mt[m]=P*E,Mt[h]=et,c.push(Mt.x,Mt.y,Mt.z),Mt[v]=0,Mt[m]=0,Mt[h]=B>0?1:-1,u.push(Mt.x,Mt.y,Mt.z),d.push(mt/I),d.push(1-N/z),j+=1}}for(let N=0;N<z;N++)for(let P=0;P<I;P++){const mt=f+P+W*N,bt=f+P+W*(N+1),Q=f+(P+1)+W*(N+1),dt=f+(P+1)+W*N;l.push(mt,bt,dt),l.push(bt,Q,dt),k+=6}a.addGroup(p,k,A),p+=k,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){const t={};for(let e=0;e<n.length;e++){const i=or(n[e]);for(const s in i)t[s]=i[s]}return t}function yM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Up(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const MM={clone:or,merge:qe};var SM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends vs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SM,this.fragmentShader=bM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=yM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Np extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new V,jd=new Ht,Kd=new Ht;class cn extends Np{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oc*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,jd,Kd),e.subVectors(Kd,jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Is=1;class EM extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new cn(Ls,Is,t,e);s.layers=this.layers,this.add(s);const r=new cn(Ls,Is,t,e);r.layers=this.layers,this.add(r);const o=new cn(Ls,Is,t,e);o.layers=this.layers,this.add(o);const a=new cn(Ls,Is,t,e);a.layers=this.layers,this.add(a);const l=new cn(Ls,Is,t,e);l.layers=this.layers,this.add(l);const c=new cn(Ls,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===gi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Op extends tn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:nr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TM extends ps{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Op(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new lr(5,5,5),r=new Gi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Fi});r.uniforms.tEquirect.value=e;const o=new Rn(s,r),a=e.minFilter;return e.minFilter===ls&&(e.minFilter=An),new EM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const vl=new V,wM=new V,AM=new Kt;class Ii{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=vl.subVectors(i,e).cross(wM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(vl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||AM.getNormalMatrix(t),s=this.coplanarPoint(vl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new Da,Ao=new V;class hu{constructor(t=new Ii,e=new Ii,i=new Ii,s=new Ii,r=new Ii,o=new Ii){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=gi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],_=s[9],v=s[10],m=s[11],h=s[12],C=s[13],E=s[14],y=s[15];if(i[0].setComponents(l-r,f-c,m-p,y-h).normalize(),i[1].setComponents(l+r,f+c,m+p,y+h).normalize(),i[2].setComponents(l+o,f+u,m+_,y+C).normalize(),i[3].setComponents(l-o,f-u,m-_,y-C).normalize(),i[4].setComponents(l-a,f-d,m-v,y-E).normalize(),e===gi)i[5].setComponents(l+a,f+d,m+v,y+E).normalize();else if(e===aa)i[5].setComponents(a,d,v,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(t){return Zi.center.set(0,0,0),Zi.radius=.7071067811865476,Zi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ao.x=s.normal.x>0?t.max.x:t.min.x,Ao.y=s.normal.y>0?t.max.y:t.min.y,Ao.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fp(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function CM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,_)=>p.start-_.start);let f=0;for(let p=1;p<d.length;p++){const _=d[f],v=d[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,_=d.length;p<_;p++){const v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class to extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],_=[],v=[],m=[];for(let h=0;h<u;h++){const C=h*f-o;for(let E=0;E<c;E++){const y=E*d-r;_.push(y,-C,0),v.push(0,0,1),m.push(E/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let C=0;C<a;C++){const E=C+c*h,y=C+c*(h+1),X=C+1+c*(h+1),B=C+1+c*h;p.push(E,y,B),p.push(y,X,B)}this.setIndex(p),this.setAttribute("position",new vn(_,3)),this.setAttribute("normal",new vn(v,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.width,t.height,t.widthSegments,t.heightSegments)}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,DM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
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
#endif`,OM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
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
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,VM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HM=`#ifdef USE_IRIDESCENCE
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
#endif`,GM=`#ifdef USE_BUMPMAP
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,JM=`#define PI 3.141592653589793
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
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tS=`vec3 transformedNormal = objectNormal;
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
#endif`,eS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rS="gl_FragColor = linearToOutputTexel( gl_FragColor );",oS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gS=`#ifdef USE_GRADIENTMAP
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
}`,_S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yS=`uniform bool receiveShadow;
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
#endif`,MS=`#ifdef USE_ENVMAP
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
#endif`,SS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ES=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wS=`PhysicalMaterial material;
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
#endif`,AS=`struct PhysicalMaterial {
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
}`,CS=`
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
#endif`,RS=`#if defined( RE_IndirectDiffuse )
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
#endif`,PS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,DS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,US=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,NS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BS=`#if defined( USE_POINTS_UV )
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
#endif`,zS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WS=`#ifdef USE_MORPHTARGETS
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
#endif`,XS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
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
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ib=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ob=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ab=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hb=`float getShadowMask() {
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
}`,pb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mb=`#ifdef USE_SKINNING
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
#endif`,gb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_b=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rb=`uniform sampler2D t2D;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`#include <common>
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
}`,Nb=`#if DEPTH_PACKING == 3200
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
}`,Ob=`#define DISTANCE
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
}`,Fb=`#define DISTANCE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`uniform float scale;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Gb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,Xb=`#define LAMBERT
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
}`,$b=`#define MATCAP
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
}`,qb=`#define MATCAP
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
}`,Yb=`#define NORMAL
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
}`,jb=`#define NORMAL
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
}`,Kb=`#define PHONG
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
}`,Zb=`#define PHONG
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
}`,Jb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,tE=`#define TOON
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
}`,eE=`#define TOON
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,rE=`uniform vec3 color;
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
}`,oE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:RM,alphahash_pars_fragment:PM,alphamap_fragment:DM,alphamap_pars_fragment:LM,alphatest_fragment:IM,alphatest_pars_fragment:UM,aomap_fragment:NM,aomap_pars_fragment:OM,batching_pars_vertex:FM,batching_vertex:BM,begin_vertex:zM,beginnormal_vertex:kM,bsdfs:VM,iridescence_fragment:HM,bumpmap_pars_fragment:GM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:jM,color_pars_vertex:KM,color_vertex:ZM,common:JM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:tS,displacementmap_pars_vertex:eS,displacementmap_vertex:nS,emissivemap_fragment:iS,emissivemap_pars_fragment:sS,colorspace_fragment:rS,colorspace_pars_fragment:oS,envmap_fragment:aS,envmap_common_pars_fragment:lS,envmap_pars_fragment:cS,envmap_pars_vertex:uS,envmap_physical_pars_fragment:MS,envmap_vertex:dS,fog_vertex:fS,fog_pars_vertex:hS,fog_fragment:pS,fog_pars_fragment:mS,gradientmap_pars_fragment:gS,lightmap_pars_fragment:_S,lights_lambert_fragment:vS,lights_lambert_pars_fragment:xS,lights_pars_begin:yS,lights_toon_fragment:SS,lights_toon_pars_fragment:bS,lights_phong_fragment:ES,lights_phong_pars_fragment:TS,lights_physical_fragment:wS,lights_physical_pars_fragment:AS,lights_fragment_begin:CS,lights_fragment_maps:RS,lights_fragment_end:PS,logdepthbuf_fragment:DS,logdepthbuf_pars_fragment:LS,logdepthbuf_pars_vertex:IS,logdepthbuf_vertex:US,map_fragment:NS,map_pars_fragment:OS,map_particle_fragment:FS,map_particle_pars_fragment:BS,metalnessmap_fragment:zS,metalnessmap_pars_fragment:kS,morphinstance_vertex:VS,morphcolor_vertex:HS,morphnormal_vertex:GS,morphtarget_pars_vertex:WS,morphtarget_vertex:XS,normal_fragment_begin:$S,normal_fragment_maps:qS,normal_pars_fragment:YS,normal_pars_vertex:jS,normal_vertex:KS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:QS,clearcoat_pars_fragment:tb,iridescence_pars_fragment:eb,opaque_fragment:nb,packing:ib,premultiplied_alpha_fragment:sb,project_vertex:rb,dithering_fragment:ob,dithering_pars_fragment:ab,roughnessmap_fragment:lb,roughnessmap_pars_fragment:cb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:db,shadowmap_vertex:fb,shadowmask_pars_fragment:hb,skinbase_vertex:pb,skinning_pars_vertex:mb,skinning_vertex:gb,skinnormal_vertex:_b,specularmap_fragment:vb,specularmap_pars_fragment:xb,tonemapping_fragment:yb,tonemapping_pars_fragment:Mb,transmission_fragment:Sb,transmission_pars_fragment:bb,uv_pars_fragment:Eb,uv_pars_vertex:Tb,uv_vertex:wb,worldpos_vertex:Ab,background_vert:Cb,background_frag:Rb,backgroundCube_vert:Pb,backgroundCube_frag:Db,cube_vert:Lb,cube_frag:Ib,depth_vert:Ub,depth_frag:Nb,distanceRGBA_vert:Ob,distanceRGBA_frag:Fb,equirect_vert:Bb,equirect_frag:zb,linedashed_vert:kb,linedashed_frag:Vb,meshbasic_vert:Hb,meshbasic_frag:Gb,meshlambert_vert:Wb,meshlambert_frag:Xb,meshmatcap_vert:$b,meshmatcap_frag:qb,meshnormal_vert:Yb,meshnormal_frag:jb,meshphong_vert:Kb,meshphong_frag:Zb,meshphysical_vert:Jb,meshphysical_frag:Qb,meshtoon_vert:tE,meshtoon_frag:eE,points_vert:nE,points_frag:iE,shadow_vert:sE,shadow_frag:rE,sprite_vert:oE,sprite_frag:aE},Tt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Gn={basic:{uniforms:qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:qe([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:qe([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:qe([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:qe([Tt.points,Tt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:qe([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:qe([Tt.common,Tt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:qe([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:qe([Tt.sprite,Tt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:qe([Tt.common,Tt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:qe([Tt.lights,Tt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};Gn.physical={uniforms:qe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Co={r:0,b:0,g:0},Ji=new Zn,lE=new ve;function cE(n,t,e,i,s,r,o){const a=new Wt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function _(C){let E=C.isScene===!0?C.background:null;return E&&E.isTexture&&(E=(C.backgroundBlurriness>0?e:t).get(E)),E}function v(C){let E=!1;const y=_(C);y===null?h(a,l):y&&y.isColor&&(h(y,1),E=!0);const X=n.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,o):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(C,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===Ra)?(u===void 0&&(u=new Rn(new lr(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:or(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(X,B,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ji.copy(E.backgroundRotation),Ji.x*=-1,Ji.y*=-1,Ji.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ji.y*=-1,Ji.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Ji)),u.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,(d!==y||f!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),u.layers.enableAll(),C.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Rn(new to(2,2),new Gi({name:"BackgroundMaterial",uniforms:or(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function h(C,E){C.getRGB(Co,Up(n)),i.buffers.color.setClear(Co.r,Co.g,Co.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(C,E=1){a.set(C),l=E,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,h(a,l)},render:v,addToRenderList:m}}function uE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,O,ct,it,et){let W=!1;const st=d(it,ct,O);r!==st&&(r=st,c(r.object)),W=p(T,it,ct,et),W&&_(T,it,ct,et),et!==null&&t.update(et,n.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(T,O,ct,it),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(et).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function d(T,O,ct){const it=ct.wireframe===!0;let et=i[T.id];et===void 0&&(et={},i[T.id]=et);let W=et[O.id];W===void 0&&(W={},et[O.id]=W);let st=W[it];return st===void 0&&(st=f(l()),W[it]=st),st}function f(T){const O=[],ct=[],it=[];for(let et=0;et<e;et++)O[et]=0,ct[et]=0,it[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:ct,attributeDivisors:it,object:T,attributes:{},index:null}}function p(T,O,ct,it){const et=r.attributes,W=O.attributes;let st=0;const j=ct.getAttributes();for(const k in j)if(j[k].location>=0){const N=et[k];let P=W[k];if(P===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(P=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(P=T.instanceColor)),N===void 0||N.attribute!==P||P&&N.data!==P.data)return!0;st++}return r.attributesNum!==st||r.index!==it}function _(T,O,ct,it){const et={},W=O.attributes;let st=0;const j=ct.getAttributes();for(const k in j)if(j[k].location>=0){let N=W[k];N===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(N=T.instanceColor));const P={};P.attribute=N,N&&N.data&&(P.data=N.data),et[k]=P,st++}r.attributes=et,r.attributesNum=st,r.index=it}function v(){const T=r.newAttributes;for(let O=0,ct=T.length;O<ct;O++)T[O]=0}function m(T){h(T,0)}function h(T,O){const ct=r.newAttributes,it=r.enabledAttributes,et=r.attributeDivisors;ct[T]=1,it[T]===0&&(n.enableVertexAttribArray(T),it[T]=1),et[T]!==O&&(n.vertexAttribDivisor(T,O),et[T]=O)}function C(){const T=r.newAttributes,O=r.enabledAttributes;for(let ct=0,it=O.length;ct<it;ct++)O[ct]!==T[ct]&&(n.disableVertexAttribArray(ct),O[ct]=0)}function E(T,O,ct,it,et,W,st){st===!0?n.vertexAttribIPointer(T,O,ct,et,W):n.vertexAttribPointer(T,O,ct,it,et,W)}function y(T,O,ct,it){v();const et=it.attributes,W=ct.getAttributes(),st=O.defaultAttributeValues;for(const j in W){const k=W[j];if(k.location>=0){let Mt=et[j];if(Mt===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(Mt=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(Mt=T.instanceColor)),Mt!==void 0){const N=Mt.normalized,P=Mt.itemSize,mt=t.get(Mt);if(mt===void 0)continue;const bt=mt.buffer,Q=mt.type,dt=mt.bytesPerElement,gt=Q===n.INT||Q===n.UNSIGNED_INT||Mt.gpuType===ou;if(Mt.isInterleavedBufferAttribute){const U=Mt.data,nt=U.stride,ot=Mt.offset;if(U.isInstancedInterleavedBuffer){for(let ht=0;ht<k.locationSize;ht++)h(k.location+ht,U.meshPerAttribute);T.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ht=0;ht<k.locationSize;ht++)m(k.location+ht);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ht=0;ht<k.locationSize;ht++)E(k.location+ht,P/k.locationSize,Q,N,nt*dt,(ot+P/k.locationSize*ht)*dt,gt)}else{if(Mt.isInstancedBufferAttribute){for(let U=0;U<k.locationSize;U++)h(k.location+U,Mt.meshPerAttribute);T.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let U=0;U<k.locationSize;U++)m(k.location+U);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let U=0;U<k.locationSize;U++)E(k.location+U,P/k.locationSize,Q,N,P*dt,P/k.locationSize*U*dt,gt)}}else if(st!==void 0){const N=st[j];if(N!==void 0)switch(N.length){case 2:n.vertexAttrib2fv(k.location,N);break;case 3:n.vertexAttrib3fv(k.location,N);break;case 4:n.vertexAttrib4fv(k.location,N);break;default:n.vertexAttrib1fv(k.location,N)}}}}C()}function X(){z();for(const T in i){const O=i[T];for(const ct in O){const it=O[ct];for(const et in it)u(it[et].object),delete it[et];delete O[ct]}delete i[T]}}function B(T){if(i[T.id]===void 0)return;const O=i[T.id];for(const ct in O){const it=O[ct];for(const et in it)u(it[et].object),delete it[et];delete O[ct]}delete i[T.id]}function I(T){for(const O in i){const ct=i[O];if(ct[T.id]===void 0)continue;const it=ct[T.id];for(const et in it)u(it[et].object),delete it[et];delete ct[T.id]}}function z(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:z,resetDefaultState:A,dispose:X,releaseStatesOfGeometry:B,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:C}}function dE(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let _=0;_<d;_++)p+=u[_];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let v=0;v<d;v++)_+=u[v]*f[v];e.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fE(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==Cn&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const z=I===Jr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==xi&&i.convert(I)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==mi&&!z)}function l(I){if(I==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),X=_>0,B=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:C,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:X,maxSamples:B}}function hE(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ii,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const C=r?0:i,E=C*4;let y=h.clippingState||null;l.value=y,y=u(_,f,E,p);for(let X=0;X!==E;++X)y[X]=e[X];h.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const h=p+v*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<h)&&(m=new Float32Array(h));for(let E=0,y=p;E!==v;++E,y+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function pE(n){let t=new WeakMap;function e(o,a){return a===rc?o.mapping=nr:a===oc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===rc||a===oc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Bp extends Np{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ws=4,Zd=[.125,.215,.35,.446,.526,.582],is=20,xl=new Bp,Jd=new Wt;let yl=null,Ml=0,Sl=0,bl=!1;const es=(1+Math.sqrt(5))/2,Us=1/es,Qd=[new V(-es,Us,0),new V(es,Us,0),new V(-Us,0,es),new V(Us,0,es),new V(0,es,-Us),new V(0,es,Us),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,Ml,Sl),this._renderer.xr.enabled=bl,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Sl=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:An,minFilter:An,generateMipmaps:!1,type:Jr,format:Cn,colorSpace:ar,depthBuffer:!1},s=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mE(r)),this._blurMaterial=gE(r,t,e)}return s}_compileMaterial(t){const e=new Rn(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,i,s){const a=new cn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jd),u.toneMapping=Bi,u.autoClear=!1;const p=new Dp({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),_=new Rn(new lr,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(Jd),v=!0);for(let h=0;h<6;h++){const C=h%3;C===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):C===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const E=this._cubeSize;Ro(s,C*E,h>2?E:0,E,E),u.setRenderTarget(s),v&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ro(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,xl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qd[(s-r-1)%Qd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Rn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*is-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):is;m>is&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const h=[];let C=0;for(let I=0;I<is;++I){const z=I/v,A=Math.exp(-z*z/2);h.push(A),I===0?C+=A:I<m&&(C+=2*A)}for(let I=0;I<h.length;I++)h[I]=h[I]/C;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const y=this._sizeLods[s],X=3*y*(s>E-Ws?s-E+Ws:0),B=4*(this._cubeSize-y);Ro(e,X,B,3*y,2*y),l.setRenderTarget(e),l.render(d,xl)}}function mE(n){const t=[],e=[],i=[];let s=n;const r=n-Ws+1+Zd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ws?l=Zd[o-n+Ws-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,h=1,C=new Float32Array(v*_*p),E=new Float32Array(m*_*p),y=new Float32Array(h*_*p);for(let B=0;B<p;B++){const I=B%3*2/3-1,z=B>2?0:-1,A=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];C.set(A,v*_*B),E.set(f,m*_*B);const T=[B,B,B,B,B,B];y.set(T,h*_*B)}const X=new Je;X.setAttribute("position",new In(C,v)),X.setAttribute("uv",new In(E,m)),X.setAttribute("faceIndex",new In(y,h)),t.push(X),s>Ws&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ef(n,t,e){const i=new ps(n,t,e);return i.texture.mapping=Ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ro(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function gE(n,t,e){const i=new Float32Array(is),s=new V(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function nf(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

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
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function sf(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function pu(){return`

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
	`}function _E(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===rc||l===oc,u=l===nr||l===ir;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function vE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function xE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,h=v.length;m<h;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const C=p.array;v=p.version;for(let E=0,y=C.length;E<y;E+=3){const X=C[E+0],B=C[E+1],I=C[E+2];f.push(X,B,B,I,I,X)}}else if(_!==void 0){const C=_.array;v=_.version;for(let E=0,y=C.length/3-1;E<y;E+=3){const X=E+0,B=E+1,I=E+2;f.push(X,B,B,I,I,X)}}else return;const m=new(Ap(f)?Ip:Lp)(f,1);m.version=v;const h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function yE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,_){_!==0&&(n.drawElementsInstanced(i,p,r,f*o,_),e.update(p,i,_))}function u(f,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];e.update(m,i,1)}function d(f,p,_,v){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,_);let h=0;for(let C=0;C<_;C++)h+=p[C]*v[C];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function ME(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function SE(n,t,e){const i=new WeakMap,s=new fe;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],C=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;_===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let X=a.attributes.position.count*y,B=1;X>t.maxTextureSize&&(B=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const I=new Float32Array(X*B*4*d),z=new Rp(I,X,B,d);z.type=mi,z.needsUpdate=!0;const A=y*4;for(let O=0;O<d;O++){const ct=h[O],it=C[O],et=E[O],W=X*B*4*O;for(let st=0;st<ct.count;st++){const j=st*A;_===!0&&(s.fromBufferAttribute(ct,st),I[W+j+0]=s.x,I[W+j+1]=s.y,I[W+j+2]=s.z,I[W+j+3]=0),v===!0&&(s.fromBufferAttribute(it,st),I[W+j+4]=s.x,I[W+j+5]=s.y,I[W+j+6]=s.z,I[W+j+7]=0),m===!0&&(s.fromBufferAttribute(et,st),I[W+j+8]=s.x,I[W+j+9]=s.y,I[W+j+10]=s.z,I[W+j+11]=et.itemSize===4?s.w:1)}}f={count:d,texture:z,size:new Ht(X,B)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const v=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function bE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class zp extends tn{constructor(t,e,i,s,r,o,a,l,c,u=js){if(u!==js&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===js&&(i=hs),i===void 0&&u===rr&&(i=sr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const kp=new tn,rf=new zp(1,1),Vp=new Rp,Hp=new cM,Gp=new Op,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function cr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ia(n,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function EE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function TE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function wE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function AE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function CE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),Re(e,i)}}function RE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),Re(e,i)}}function PE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),Re(e,i)}}function DE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function LE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function IE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function UE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function NE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function OE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function FE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function BE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function zE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=wp,r=rf):r=kp,e.setTexture2D(t||r,s)}function kE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hp,s)}function VE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gp,s)}function HE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Vp,s)}function GE(n){switch(n){case 5126:return EE;case 35664:return TE;case 35665:return wE;case 35666:return AE;case 35674:return CE;case 35675:return RE;case 35676:return PE;case 5124:case 35670:return DE;case 35667:case 35671:return LE;case 35668:case 35672:return IE;case 35669:case 35673:return UE;case 5125:return NE;case 36294:return OE;case 36295:return FE;case 36296:return BE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return VE;case 36289:case 36303:case 36311:case 36292:return HE}}function WE(n,t){n.uniform1fv(this.addr,t)}function XE(n,t){const e=cr(t,this.size,2);n.uniform2fv(this.addr,e)}function $E(n,t){const e=cr(t,this.size,3);n.uniform3fv(this.addr,e)}function qE(n,t){const e=cr(t,this.size,4);n.uniform4fv(this.addr,e)}function YE(n,t){const e=cr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jE(n,t){const e=cr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function KE(n,t){const e=cr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ZE(n,t){n.uniform1iv(this.addr,t)}function JE(n,t){n.uniform2iv(this.addr,t)}function QE(n,t){n.uniform3iv(this.addr,t)}function t1(n,t){n.uniform4iv(this.addr,t)}function e1(n,t){n.uniform1uiv(this.addr,t)}function n1(n,t){n.uniform2uiv(this.addr,t)}function i1(n,t){n.uniform3uiv(this.addr,t)}function s1(n,t){n.uniform4uiv(this.addr,t)}function r1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||kp,r[o])}function o1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Hp,r[o])}function a1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Gp,r[o])}function l1(n,t,e){const i=this.cache,s=t.length,r=Ia(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Vp,r[o])}function c1(n){switch(n){case 5126:return WE;case 35664:return XE;case 35665:return $E;case 35666:return qE;case 35674:return YE;case 35675:return jE;case 35676:return KE;case 5124:case 35670:return ZE;case 35667:case 35671:return JE;case 35668:case 35672:return QE;case 35669:case 35673:return t1;case 5125:return e1;case 36294:return n1;case 36295:return i1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=GE(e.type)}}class d1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=c1(e.type)}}class f1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const El=/(\w+)(\])?(\[|\.)?/g;function df(n,t){n.seq.push(t),n.map[t.id]=t}function h1(n,t,e){const i=n.name,s=i.length;for(El.lastIndex=0;;){const r=El.exec(i),o=El.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(e,c===void 0?new u1(a,n,t):new d1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new f1(a),df(e,d)),e=d}}}class Ko{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);h1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ff(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const p1=37297;let m1=0;function g1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const hf=new Kt;function _1(n){Qt._getMatrix(hf,Qt.workingColorSpace,n);const t=`mat3( ${hf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case Pa:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+g1(n.getShaderSource(t),o)}else return s}function v1(n,t){const e=_1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function x1(n,t){let e;switch(t){case Ny:e="Linear";break;case Oy:e="Reinhard";break;case Fy:e="Cineon";break;case By:e="ACESFilmic";break;case ky:e="AgX";break;case Vy:e="Neutral";break;case zy:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Po=new V;function y1(){Qt.getLuminanceCoefficients(Po);const n=Po.x.toFixed(4),t=Po.y.toFixed(4),e=Po.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function S1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function b1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function mf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(n){return n.replace(E1,w1)}const T1=new Map;function w1(n,t){let e=Zt[t];if(e===void 0){const i=T1.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fc(e)}const A1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(n){return n.replace(A1,C1)}function C1(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function R1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===fp?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function P1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function L1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hp:t="ENVMAP_BLENDING_MULTIPLY";break;case Iy:t="ENVMAP_BLENDING_MIX";break;case Uy:t="ENVMAP_BLENDING_ADD";break}return t}function I1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function U1(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=R1(e),c=P1(e),u=D1(e),d=L1(e),f=I1(e),p=M1(e),_=S1(r),v=s.createProgram();let m,h,C=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Cr).join(`
`),h.length>0&&(h+=`
`)):(m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),h=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bi?"#define TONE_MAPPING":"",e.toneMapping!==Bi?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Bi?x1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,v1("linearToOutputTexel",e.outputColorSpace),y1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=Fc(o),o=mf(o,e),o=gf(o,e),a=Fc(a),a=mf(a,e),a=gf(a,e),o=_f(o),a=_f(a),e.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=C+m+o,y=C+h+a,X=ff(s,s.VERTEX_SHADER,E),B=ff(s,s.FRAGMENT_SHADER,y);s.attachShader(v,X),s.attachShader(v,B),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(O){if(n.debug.checkShaderErrors){const ct=s.getProgramInfoLog(v).trim(),it=s.getShaderInfoLog(X).trim(),et=s.getShaderInfoLog(B).trim();let W=!0,st=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,X,B);else{const j=pf(s,X,"vertex"),k=pf(s,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+ct+`
`+j+`
`+k)}else ct!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ct):(it===""||et==="")&&(st=!1);st&&(O.diagnostics={runnable:W,programLog:ct,vertexShader:{log:it,prefix:m},fragmentShader:{log:et,prefix:h}})}s.deleteShader(X),s.deleteShader(B),z=new Ko(s,v),A=b1(s,v)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let A;this.getAttributes=function(){return A===void 0&&I(this),A};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,p1)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=m1++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=X,this.fragmentShader=B,this}let N1=0;class O1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new F1(t),e.set(t,i)),i}}class F1{constructor(t){this.id=N1++,this.code=t,this.usedTimes=0}}function B1(n,t,e,i,s,r,o){const a=new fu,l=new O1,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,T,O,ct,it){const et=ct.fog,W=it.geometry,st=A.isMeshStandardMaterial?ct.environment:null,j=(A.isMeshStandardMaterial?e:t).get(A.envMap||st),k=j&&j.mapping===Ra?j.image.height:null,Mt=_[A.type];A.precision!==null&&(p=s.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const N=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,P=N!==void 0?N.length:0;let mt=0;W.morphAttributes.position!==void 0&&(mt=1),W.morphAttributes.normal!==void 0&&(mt=2),W.morphAttributes.color!==void 0&&(mt=3);let bt,Q,dt,gt;if(Mt){const oe=Gn[Mt];bt=oe.vertexShader,Q=oe.fragmentShader}else bt=A.vertexShader,Q=A.fragmentShader,l.update(A),dt=l.getVertexShaderID(A),gt=l.getFragmentShaderID(A);const U=n.getRenderTarget(),nt=n.state.buffers.depth.getReversed(),ot=it.isInstancedMesh===!0,ht=it.isBatchedMesh===!0,b=!!A.map,R=!!A.matcap,D=!!j,g=!!A.aoMap,L=!!A.lightMap,K=!!A.bumpMap,Z=!!A.normalMap,$=!!A.displacementMap,ut=!!A.emissiveMap,H=!!A.metalnessMap,S=!!A.roughnessMap,x=A.anisotropy>0,F=A.clearcoat>0,J=A.dispersion>0,rt=A.iridescence>0,tt=A.sheen>0,vt=A.transmission>0,pt=x&&!!A.anisotropyMap,yt=F&&!!A.clearcoatMap,Gt=F&&!!A.clearcoatNormalMap,xt=F&&!!A.clearcoatRoughnessMap,At=rt&&!!A.iridescenceMap,zt=rt&&!!A.iridescenceThicknessMap,Lt=tt&&!!A.sheenColorMap,wt=tt&&!!A.sheenRoughnessMap,Jt=!!A.specularMap,qt=!!A.specularColorMap,me=!!A.specularIntensityMap,G=vt&&!!A.transmissionMap,Ct=vt&&!!A.thicknessMap,ft=!!A.gradientMap,_t=!!A.alphaMap,Dt=A.alphaTest>0,Rt=!!A.alphaHash,Yt=!!A.extensions;let Me=Bi;A.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Me=n.toneMapping);const ze={shaderID:Mt,shaderType:A.type,shaderName:A.name,vertexShader:bt,fragmentShader:Q,defines:A.defines,customVertexShaderID:dt,customFragmentShaderID:gt,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:ht,batchingColor:ht&&it._colorsTexture!==null,instancing:ot,instancingColor:ot&&it.instanceColor!==null,instancingMorph:ot&&it.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:U===null?n.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ar,alphaToCoverage:!!A.alphaToCoverage,map:b,matcap:R,envMap:D,envMapMode:D&&j.mapping,envMapCubeUVHeight:k,aoMap:g,lightMap:L,bumpMap:K,normalMap:Z,displacementMap:f&&$,emissiveMap:ut,normalMapObjectSpace:Z&&A.normalMapType===Xy,normalMapTangentSpace:Z&&A.normalMapType===Tp,metalnessMap:H,roughnessMap:S,anisotropy:x,anisotropyMap:pt,clearcoat:F,clearcoatMap:yt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:xt,dispersion:J,iridescence:rt,iridescenceMap:At,iridescenceThicknessMap:zt,sheen:tt,sheenColorMap:Lt,sheenRoughnessMap:wt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:me,transmission:vt,transmissionMap:G,thicknessMap:Ct,gradientMap:ft,opaque:A.transparent===!1&&A.blending===Ys&&A.alphaToCoverage===!1,alphaMap:_t,alphaTest:Dt,alphaHash:Rt,combine:A.combine,mapUv:b&&v(A.map.channel),aoMapUv:g&&v(A.aoMap.channel),lightMapUv:L&&v(A.lightMap.channel),bumpMapUv:K&&v(A.bumpMap.channel),normalMapUv:Z&&v(A.normalMap.channel),displacementMapUv:$&&v(A.displacementMap.channel),emissiveMapUv:ut&&v(A.emissiveMap.channel),metalnessMapUv:H&&v(A.metalnessMap.channel),roughnessMapUv:S&&v(A.roughnessMap.channel),anisotropyMapUv:pt&&v(A.anisotropyMap.channel),clearcoatMapUv:yt&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(A.sheenRoughnessMap.channel),specularMapUv:Jt&&v(A.specularMap.channel),specularColorMapUv:qt&&v(A.specularColorMap.channel),specularIntensityMapUv:me&&v(A.specularIntensityMap.channel),transmissionMapUv:G&&v(A.transmissionMap.channel),thicknessMapUv:Ct&&v(A.thicknessMap.channel),alphaMapUv:_t&&v(A.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Z||x),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!W.attributes.uv&&(b||_t),fog:!!et,useFog:A.fog===!0,fogExp2:!!et&&et.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:nt,skinning:it.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:mt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:b&&A.map.isVideoTexture===!0&&Qt.getTransfer(A.map.colorSpace)===le,decodeVideoTextureEmissive:ut&&A.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(A.emissiveMap.colorSpace)===le,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pi,flipSided:A.side===rn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Yt&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&A.extensions.multiDraw===!0||ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function h(A){const T=[];if(A.shaderID?T.push(A.shaderID):(T.push(A.customVertexShaderID),T.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)T.push(O),T.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(C(T,A),E(T,A),T.push(n.outputColorSpace)),T.push(A.customProgramCacheKey),T.join()}function C(A,T){A.push(T.precision),A.push(T.outputColorSpace),A.push(T.envMapMode),A.push(T.envMapCubeUVHeight),A.push(T.mapUv),A.push(T.alphaMapUv),A.push(T.lightMapUv),A.push(T.aoMapUv),A.push(T.bumpMapUv),A.push(T.normalMapUv),A.push(T.displacementMapUv),A.push(T.emissiveMapUv),A.push(T.metalnessMapUv),A.push(T.roughnessMapUv),A.push(T.anisotropyMapUv),A.push(T.clearcoatMapUv),A.push(T.clearcoatNormalMapUv),A.push(T.clearcoatRoughnessMapUv),A.push(T.iridescenceMapUv),A.push(T.iridescenceThicknessMapUv),A.push(T.sheenColorMapUv),A.push(T.sheenRoughnessMapUv),A.push(T.specularMapUv),A.push(T.specularColorMapUv),A.push(T.specularIntensityMapUv),A.push(T.transmissionMapUv),A.push(T.thicknessMapUv),A.push(T.combine),A.push(T.fogExp2),A.push(T.sizeAttenuation),A.push(T.morphTargetsCount),A.push(T.morphAttributeCount),A.push(T.numDirLights),A.push(T.numPointLights),A.push(T.numSpotLights),A.push(T.numSpotLightMaps),A.push(T.numHemiLights),A.push(T.numRectAreaLights),A.push(T.numDirLightShadows),A.push(T.numPointLightShadows),A.push(T.numSpotLightShadows),A.push(T.numSpotLightShadowsWithMaps),A.push(T.numLightProbes),A.push(T.shadowMapType),A.push(T.toneMapping),A.push(T.numClippingPlanes),A.push(T.numClipIntersection),A.push(T.depthPacking)}function E(A,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),A.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),A.push(a.mask)}function y(A){const T=_[A.type];let O;if(T){const ct=Gn[T];O=MM.clone(ct.uniforms)}else O=A.uniforms;return O}function X(A,T){let O;for(let ct=0,it=u.length;ct<it;ct++){const et=u[ct];if(et.cacheKey===T){O=et,++O.usedTimes;break}}return O===void 0&&(O=new U1(n,T,A,r),u.push(O)),O}function B(A){if(--A.usedTimes===0){const T=u.indexOf(A);u[T]=u[u.length-1],u.pop(),A.destroy()}}function I(A){l.remove(A)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:X,releaseProgram:B,releaseShaderCache:I,programs:u,dispose:z}}function z1(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function k1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,_,v,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=v,h.group=m),t++,h}function a(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,_,v,m){const h=o(d,f,p,_,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||k1),i.length>1&&i.sort(f||xf),s.length>1&&s.sort(f||xf)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function V1(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function H1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new Wt};break;case"SpotLight":e={position:new V,direction:new V,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function G1(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let W1=0;function X1(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function $1(n){const t=new H1,e=G1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new ve,o=new ve;function a(c){let u=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,_=0,v=0,m=0,h=0,C=0,E=0,y=0,X=0,B=0,I=0;c.sort(X1);for(let A=0,T=c.length;A<T;A++){const O=c[A],ct=O.color,it=O.intensity,et=O.distance,W=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=ct.r*it,d+=ct.g*it,f+=ct.b*it;else if(O.isLightProbe){for(let st=0;st<9;st++)i.probe[st].addScaledVector(O.sh.coefficients[st],it);I++}else if(O.isDirectionalLight){const st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const j=O.shadow,k=e.get(O);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=O.shadow.matrix,C++}i.directional[p]=st,p++}else if(O.isSpotLight){const st=t.get(O);st.position.setFromMatrixPosition(O.matrixWorld),st.color.copy(ct).multiplyScalar(it),st.distance=et,st.coneCos=Math.cos(O.angle),st.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),st.decay=O.decay,i.spot[v]=st;const j=O.shadow;if(O.map&&(i.spotLightMap[X]=O.map,X++,j.updateMatrices(O),O.castShadow&&B++),i.spotLightMatrix[v]=j.matrix,O.castShadow){const k=e.get(O);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=W,y++}v++}else if(O.isRectAreaLight){const st=t.get(O);st.color.copy(ct).multiplyScalar(it),st.halfWidth.set(O.width*.5,0,0),st.halfHeight.set(0,O.height*.5,0),i.rectArea[m]=st,m++}else if(O.isPointLight){const st=t.get(O);if(st.color.copy(O.color).multiplyScalar(O.intensity),st.distance=O.distance,st.decay=O.decay,O.castShadow){const j=O.shadow,k=e.get(O);k.shadowIntensity=j.intensity,k.shadowBias=j.bias,k.shadowNormalBias=j.normalBias,k.shadowRadius=j.radius,k.shadowMapSize=j.mapSize,k.shadowCameraNear=j.camera.near,k.shadowCameraFar=j.camera.far,i.pointShadow[_]=k,i.pointShadowMap[_]=W,i.pointShadowMatrix[_]=O.shadow.matrix,E++}i.point[_]=st,_++}else if(O.isHemisphereLight){const st=t.get(O);st.skyColor.copy(O.color).multiplyScalar(it),st.groundColor.copy(O.groundColor).multiplyScalar(it),i.hemi[h]=st,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Tt.LTC_FLOAT_1,i.rectAreaLTC2=Tt.LTC_FLOAT_2):(i.rectAreaLTC1=Tt.LTC_HALF_1,i.rectAreaLTC2=Tt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const z=i.hash;(z.directionalLength!==p||z.pointLength!==_||z.spotLength!==v||z.rectAreaLength!==m||z.hemiLength!==h||z.numDirectionalShadows!==C||z.numPointShadows!==E||z.numSpotShadows!==y||z.numSpotMaps!==X||z.numLightProbes!==I)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=C,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=y+X-B,i.spotLightMap.length=X,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,z.directionalLength=p,z.pointLength=_,z.spotLength=v,z.rectAreaLength=m,z.hemiLength=h,z.numDirectionalShadows=C,z.numPointShadows=E,z.numSpotShadows=y,z.numSpotMaps=X,z.numLightProbes=I,i.version=W1++)}function l(c,u){let d=0,f=0,p=0,_=0,v=0;const m=u.matrixWorldInverse;for(let h=0,C=c.length;h<C;h++){const E=c[h];if(E.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(E.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Mf(n){const t=new $1(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function q1(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mf(n),t.set(s,[a])):r>=o.length?(a=new Mf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Y1 extends vs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Gy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j1 extends vs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const K1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z1=`uniform sampler2D shadow_pass;
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
}`;function J1(n,t,e){let i=new hu;const s=new Ht,r=new Ht,o=new fe,a=new Y1({depthPacking:Wy}),l=new j1,c={},u=e.maxTextureSize,d={[Hi]:rn,[rn]:Hi,[pi]:pi},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:K1,fragmentShader:Z1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Je;_.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Rn(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let h=this.type;this.render=function(B,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;const A=n.getRenderTarget(),T=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),ct=n.state;ct.setBlending(Fi),ct.buffers.color.setClear(1,1,1,1),ct.buffers.depth.setTest(!0),ct.setScissorTest(!1);const it=h!==ai&&this.type===ai,et=h===ai&&this.type!==ai;for(let W=0,st=B.length;W<st;W++){const j=B[W],k=j.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const Mt=k.getFrameExtents();if(s.multiply(Mt),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Mt.x),s.x=r.x*Mt.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Mt.y),s.y=r.y*Mt.y,k.mapSize.y=r.y)),k.map===null||it===!0||et===!0){const P=this.type!==ai?{minFilter:Ln,magFilter:Ln}:{};k.map!==null&&k.map.dispose(),k.map=new ps(s.x,s.y,P),k.map.texture.name=j.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const N=k.getViewportCount();for(let P=0;P<N;P++){const mt=k.getViewport(P);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),ct.viewport(o),k.updateMatrices(j,P),i=k.getFrustum(),y(I,z,k.camera,j,this.type)}k.isPointLightShadow!==!0&&this.type===ai&&C(k,z),k.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(A,T,O)};function C(B,I){const z=t.update(v);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,p.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ps(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(I,null,z,f,v,null),p.uniforms.shadow_pass.value=B.mapPass.texture,p.uniforms.resolution.value=B.mapSize,p.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(I,null,z,p,v,null)}function E(B,I,z,A){let T=null;const O=z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(O!==void 0)T=O;else if(T=z.isPointLight===!0?l:a,n.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ct=T.uuid,it=I.uuid;let et=c[ct];et===void 0&&(et={},c[ct]=et);let W=et[it];W===void 0&&(W=T.clone(),et[it]=W,I.addEventListener("dispose",X)),T=W}if(T.visible=I.visible,T.wireframe=I.wireframe,A===ai?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:d[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ct=n.properties.get(T);ct.light=z}return T}function y(B,I,z,A,T){if(B.visible===!1)return;if(B.layers.test(I.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&T===ai)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,B.matrixWorld);const it=t.update(B),et=B.material;if(Array.isArray(et)){const W=it.groups;for(let st=0,j=W.length;st<j;st++){const k=W[st],Mt=et[k.materialIndex];if(Mt&&Mt.visible){const N=E(B,Mt,A,T);B.onBeforeShadow(n,B,I,z,it,N,k),n.renderBufferDirect(z,null,it,N,B,k),B.onAfterShadow(n,B,I,z,it,N,k)}}}else if(et.visible){const W=E(B,et,A,T);B.onBeforeShadow(n,B,I,z,it,W,null),n.renderBufferDirect(z,null,it,W,B,null),B.onAfterShadow(n,B,I,z,it,W,null)}}const ct=B.children;for(let it=0,et=ct.length;it<et;it++)y(ct[it],I,z,A,T)}function X(B){B.target.removeEventListener("dispose",X);for(const z in c){const A=c[z],T=B.target.uuid;T in A&&(A[T].dispose(),delete A[T])}}}const Q1={[Jl]:Ql,[tc]:ic,[ec]:sc,[er]:nc,[Ql]:Jl,[ic]:tc,[sc]:ec,[nc]:er};function tT(n,t){function e(){let G=!1;const Ct=new fe;let ft=null;const _t=new fe(0,0,0,0);return{setMask:function(Dt){ft!==Dt&&!G&&(n.colorMask(Dt,Dt,Dt,Dt),ft=Dt)},setLocked:function(Dt){G=Dt},setClear:function(Dt,Rt,Yt,Me,ze){ze===!0&&(Dt*=Me,Rt*=Me,Yt*=Me),Ct.set(Dt,Rt,Yt,Me),_t.equals(Ct)===!1&&(n.clearColor(Dt,Rt,Yt,Me),_t.copy(Ct))},reset:function(){G=!1,ft=null,_t.set(-1,0,0,0)}}}function i(){let G=!1,Ct=!1,ft=null,_t=null,Dt=null;return{setReversed:function(Rt){if(Ct!==Rt){const Yt=t.get("EXT_clip_control");Ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Dt;Dt=null,this.setClear(Me)}Ct=Rt},getReversed:function(){return Ct},setTest:function(Rt){Rt?U(n.DEPTH_TEST):nt(n.DEPTH_TEST)},setMask:function(Rt){ft!==Rt&&!G&&(n.depthMask(Rt),ft=Rt)},setFunc:function(Rt){if(Ct&&(Rt=Q1[Rt]),_t!==Rt){switch(Rt){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case tc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case ec:n.depthFunc(n.EQUAL);break;case nc:n.depthFunc(n.GEQUAL);break;case ic:n.depthFunc(n.GREATER);break;case sc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}_t=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){Dt!==Rt&&(Ct&&(Rt=1-Rt),n.clearDepth(Rt),Dt=Rt)},reset:function(){G=!1,ft=null,_t=null,Dt=null,Ct=!1}}}function s(){let G=!1,Ct=null,ft=null,_t=null,Dt=null,Rt=null,Yt=null,Me=null,ze=null;return{setTest:function(oe){G||(oe?U(n.STENCIL_TEST):nt(n.STENCIL_TEST))},setMask:function(oe){Ct!==oe&&!G&&(n.stencilMask(oe),Ct=oe)},setFunc:function(oe,Mn,Jn){(ft!==oe||_t!==Mn||Dt!==Jn)&&(n.stencilFunc(oe,Mn,Jn),ft=oe,_t=Mn,Dt=Jn)},setOp:function(oe,Mn,Jn){(Rt!==oe||Yt!==Mn||Me!==Jn)&&(n.stencilOp(oe,Mn,Jn),Rt=oe,Yt=Mn,Me=Jn)},setLocked:function(oe){G=oe},setClear:function(oe){ze!==oe&&(n.clearStencil(oe),ze=oe)},reset:function(){G=!1,Ct=null,ft=null,_t=null,Dt=null,Rt=null,Yt=null,Me=null,ze=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,C=null,E=null,y=null,X=null,B=null,I=new Wt(0,0,0),z=0,A=!1,T=null,O=null,ct=null,it=null,et=null;const W=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,j=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(k)[1]),st=j>=1):k.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),st=j>=2);let Mt=null,N={};const P=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),bt=new fe().fromArray(P),Q=new fe().fromArray(mt);function dt(G,Ct,ft,_t){const Dt=new Uint8Array(4),Rt=n.createTexture();n.bindTexture(G,Rt),n.texParameteri(G,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(G,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<ft;Yt++)G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?n.texImage3D(Ct,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Ct+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Rt}const gt={};gt[n.TEXTURE_2D]=dt(n.TEXTURE_2D,n.TEXTURE_2D,1),gt[n.TEXTURE_CUBE_MAP]=dt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[n.TEXTURE_2D_ARRAY]=dt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),gt[n.TEXTURE_3D]=dt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(n.DEPTH_TEST),o.setFunc(er),K(!1),Z(Td),U(n.CULL_FACE),g(Fi);function U(G){u[G]!==!0&&(n.enable(G),u[G]=!0)}function nt(G){u[G]!==!1&&(n.disable(G),u[G]=!1)}function ot(G,Ct){return d[G]!==Ct?(n.bindFramebuffer(G,Ct),d[G]=Ct,G===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Ct),G===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Ct),!0):!1}function ht(G,Ct){let ft=p,_t=!1;if(G){ft=f.get(Ct),ft===void 0&&(ft=[],f.set(Ct,ft));const Dt=G.textures;if(ft.length!==Dt.length||ft[0]!==n.COLOR_ATTACHMENT0){for(let Rt=0,Yt=Dt.length;Rt<Yt;Rt++)ft[Rt]=n.COLOR_ATTACHMENT0+Rt;ft.length=Dt.length,_t=!0}}else ft[0]!==n.BACK&&(ft[0]=n.BACK,_t=!0);_t&&n.drawBuffers(ft)}function b(G){return _!==G?(n.useProgram(G),_=G,!0):!1}const R={[ns]:n.FUNC_ADD,[gy]:n.FUNC_SUBTRACT,[_y]:n.FUNC_REVERSE_SUBTRACT};R[vy]=n.MIN,R[xy]=n.MAX;const D={[yy]:n.ZERO,[My]:n.ONE,[Sy]:n.SRC_COLOR,[Kl]:n.SRC_ALPHA,[Cy]:n.SRC_ALPHA_SATURATE,[wy]:n.DST_COLOR,[Ey]:n.DST_ALPHA,[by]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[Ay]:n.ONE_MINUS_DST_COLOR,[Ty]:n.ONE_MINUS_DST_ALPHA,[Ry]:n.CONSTANT_COLOR,[Py]:n.ONE_MINUS_CONSTANT_COLOR,[Dy]:n.CONSTANT_ALPHA,[Ly]:n.ONE_MINUS_CONSTANT_ALPHA};function g(G,Ct,ft,_t,Dt,Rt,Yt,Me,ze,oe){if(G===Fi){v===!0&&(nt(n.BLEND),v=!1);return}if(v===!1&&(U(n.BLEND),v=!0),G!==my){if(G!==m||oe!==A){if((h!==ns||y!==ns)&&(n.blendEquation(n.FUNC_ADD),h=ns,y=ns),oe)switch(G){case Ys:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}C=null,E=null,X=null,B=null,I.set(0,0,0),z=0,m=G,A=oe}return}Dt=Dt||Ct,Rt=Rt||ft,Yt=Yt||_t,(Ct!==h||Dt!==y)&&(n.blendEquationSeparate(R[Ct],R[Dt]),h=Ct,y=Dt),(ft!==C||_t!==E||Rt!==X||Yt!==B)&&(n.blendFuncSeparate(D[ft],D[_t],D[Rt],D[Yt]),C=ft,E=_t,X=Rt,B=Yt),(Me.equals(I)===!1||ze!==z)&&(n.blendColor(Me.r,Me.g,Me.b,ze),I.copy(Me),z=ze),m=G,A=!1}function L(G,Ct){G.side===pi?nt(n.CULL_FACE):U(n.CULL_FACE);let ft=G.side===rn;Ct&&(ft=!ft),K(ft),G.blending===Ys&&G.transparent===!1?g(Fi):g(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),r.setMask(G.colorWrite);const _t=G.stencilWrite;a.setTest(_t),_t&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ut(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?U(n.SAMPLE_ALPHA_TO_COVERAGE):nt(n.SAMPLE_ALPHA_TO_COVERAGE)}function K(G){T!==G&&(G?n.frontFace(n.CW):n.frontFace(n.CCW),T=G)}function Z(G){G!==hy?(U(n.CULL_FACE),G!==O&&(G===Td?n.cullFace(n.BACK):G===py?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):nt(n.CULL_FACE),O=G}function $(G){G!==ct&&(st&&n.lineWidth(G),ct=G)}function ut(G,Ct,ft){G?(U(n.POLYGON_OFFSET_FILL),(it!==Ct||et!==ft)&&(n.polygonOffset(Ct,ft),it=Ct,et=ft)):nt(n.POLYGON_OFFSET_FILL)}function H(G){G?U(n.SCISSOR_TEST):nt(n.SCISSOR_TEST)}function S(G){G===void 0&&(G=n.TEXTURE0+W-1),Mt!==G&&(n.activeTexture(G),Mt=G)}function x(G,Ct,ft){ft===void 0&&(Mt===null?ft=n.TEXTURE0+W-1:ft=Mt);let _t=N[ft];_t===void 0&&(_t={type:void 0,texture:void 0},N[ft]=_t),(_t.type!==G||_t.texture!==Ct)&&(Mt!==ft&&(n.activeTexture(ft),Mt=ft),n.bindTexture(G,Ct||gt[G]),_t.type=G,_t.texture=Ct)}function F(){const G=N[Mt];G!==void 0&&G.type!==void 0&&(n.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(){try{n.texSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Gt(){try{n.texStorage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{n.texStorage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function zt(){try{n.texImage3D.apply(n,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(G){bt.equals(G)===!1&&(n.scissor(G.x,G.y,G.z,G.w),bt.copy(G))}function wt(G){Q.equals(G)===!1&&(n.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function Jt(G,Ct){let ft=c.get(Ct);ft===void 0&&(ft=new WeakMap,c.set(Ct,ft));let _t=ft.get(G);_t===void 0&&(_t=n.getUniformBlockIndex(Ct,G.name),ft.set(G,_t))}function qt(G,Ct){const _t=c.get(Ct).get(G);l.get(Ct)!==_t&&(n.uniformBlockBinding(Ct,_t,G.__bindingPointIndex),l.set(Ct,_t))}function me(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Mt=null,N={},d={},f=new WeakMap,p=[],_=null,v=!1,m=null,h=null,C=null,E=null,y=null,X=null,B=null,I=new Wt(0,0,0),z=0,A=!1,T=null,O=null,ct=null,it=null,et=null,bt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:nt,bindFramebuffer:ot,drawBuffers:ht,useProgram:b,setBlending:g,setMaterial:L,setFlipSided:K,setCullFace:Z,setLineWidth:$,setPolygonOffset:ut,setScissorTest:H,activeTexture:S,bindTexture:x,unbindTexture:F,compressedTexImage2D:J,compressedTexImage3D:rt,texImage2D:At,texImage3D:zt,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:Gt,texStorage3D:xt,texSubImage2D:tt,texSubImage3D:vt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Lt,viewport:wt,reset:me}}function Sf(n,t,e,i){const s=eT(i);switch(e){case vp:return n*t;case yp:return n*t;case Mp:return n*t*2;case Sp:return n*t/s.components*s.byteLength;case cu:return n*t/s.components*s.byteLength;case bp:return n*t*2/s.components*s.byteLength;case uu:return n*t*2/s.components*s.byteLength;case xp:return n*t*3/s.components*s.byteLength;case Cn:return n*t*4/s.components*s.byteLength;case du:return n*t*4/s.components*s.byteLength;case Xo:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Yo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case uc:case fc:return Math.max(n,16)*Math.max(t,8)/4;case cc:case dc:return Math.max(n,8)*Math.max(t,8)/2;case hc:case pc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case _c:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case yc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case jo:case Pc:case Dc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ep:case Lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eT(n){switch(n){case xi:case mp:return{byteLength:1,components:1};case $r:case gp:case Jr:return{byteLength:2,components:1};case au:case lu:return{byteLength:2,components:4};case hs:case ou:case mi:return{byteLength:4,components:1};case _p:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ht,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,x){return p?new OffscreenCanvas(S,x):la("canvas")}function v(S,x,F){let J=1;const rt=H(S);if((rt.width>F||rt.height>F)&&(J=F/Math.max(rt.width,rt.height)),J<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const tt=Math.floor(J*rt.width),vt=Math.floor(J*rt.height);d===void 0&&(d=_(tt,vt));const pt=x?_(tt,vt):d;return pt.width=tt,pt.height=vt,pt.getContext("2d").drawImage(S,0,0,tt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+vt+")."),pt}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){n.generateMipmap(S)}function C(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(S,x,F,J,rt=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tt=x;if(x===n.RED&&(F===n.FLOAT&&(tt=n.R32F),F===n.HALF_FLOAT&&(tt=n.R16F),F===n.UNSIGNED_BYTE&&(tt=n.R8)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.R8UI),F===n.UNSIGNED_SHORT&&(tt=n.R16UI),F===n.UNSIGNED_INT&&(tt=n.R32UI),F===n.BYTE&&(tt=n.R8I),F===n.SHORT&&(tt=n.R16I),F===n.INT&&(tt=n.R32I)),x===n.RG&&(F===n.FLOAT&&(tt=n.RG32F),F===n.HALF_FLOAT&&(tt=n.RG16F),F===n.UNSIGNED_BYTE&&(tt=n.RG8)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RG8UI),F===n.UNSIGNED_SHORT&&(tt=n.RG16UI),F===n.UNSIGNED_INT&&(tt=n.RG32UI),F===n.BYTE&&(tt=n.RG8I),F===n.SHORT&&(tt=n.RG16I),F===n.INT&&(tt=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RGB8UI),F===n.UNSIGNED_SHORT&&(tt=n.RGB16UI),F===n.UNSIGNED_INT&&(tt=n.RGB32UI),F===n.BYTE&&(tt=n.RGB8I),F===n.SHORT&&(tt=n.RGB16I),F===n.INT&&(tt=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(tt=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(tt=n.RGBA16UI),F===n.UNSIGNED_INT&&(tt=n.RGBA32UI),F===n.BYTE&&(tt=n.RGBA8I),F===n.SHORT&&(tt=n.RGBA16I),F===n.INT&&(tt=n.RGBA32I)),x===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(tt=n.RGB9_E5),x===n.RGBA){const vt=rt?Pa:Qt.getTransfer(J);F===n.FLOAT&&(tt=n.RGBA32F),F===n.HALF_FLOAT&&(tt=n.RGBA16F),F===n.UNSIGNED_BYTE&&(tt=vt===le?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function y(S,x){let F;return S?x===null||x===hs||x===sr?F=n.DEPTH24_STENCIL8:x===mi?F=n.DEPTH32F_STENCIL8:x===$r&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hs||x===sr?F=n.DEPTH_COMPONENT24:x===mi?F=n.DEPTH_COMPONENT32F:x===$r&&(F=n.DEPTH_COMPONENT16),F}function X(S,x){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Ln&&S.minFilter!==An?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function B(S){const x=S.target;x.removeEventListener("dispose",B),z(x),x.isVideoTexture&&u.delete(x)}function I(S){const x=S.target;x.removeEventListener("dispose",I),T(x)}function z(S){const x=i.get(S);if(x.__webglInit===void 0)return;const F=S.source,J=f.get(F);if(J){const rt=J[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(S),Object.keys(J).length===0&&f.delete(F)}i.remove(S)}function A(S){const x=i.get(S);n.deleteTexture(x.__webglTexture);const F=S.source,J=f.get(F);delete J[x.__cacheKey],o.memory.textures--}function T(S){const x=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let rt=0;rt<x.__webglFramebuffer[J].length;rt++)n.deleteFramebuffer(x.__webglFramebuffer[J][rt]);else n.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)n.deleteFramebuffer(x.__webglFramebuffer[J]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=S.textures;for(let J=0,rt=F.length;J<rt;J++){const tt=i.get(F[J]);tt.__webglTexture&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),i.remove(F[J])}i.remove(S)}let O=0;function ct(){O=0}function it(){const S=O;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),O+=1,S}function et(S){const x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function W(S,x){const F=i.get(S);if(S.isVideoTexture&&$(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const J=S.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(F,S,x);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function st(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){Q(F,S,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function j(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){Q(F,S,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function k(S,x){const F=i.get(S);if(S.version>0&&F.__version!==S.version){dt(F,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}const Mt={[ac]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[lc]:n.MIRRORED_REPEAT},N={[Ln]:n.NEAREST,[Hy]:n.NEAREST_MIPMAP_NEAREST,[co]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[ls]:n.LINEAR_MIPMAP_LINEAR},P={[$y]:n.NEVER,[Jy]:n.ALWAYS,[qy]:n.LESS,[wp]:n.LEQUAL,[Yy]:n.EQUAL,[Zy]:n.GEQUAL,[jy]:n.GREATER,[Ky]:n.NOTEQUAL};function mt(S,x){if(x.type===mi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===An||x.magFilter===Za||x.magFilter===co||x.magFilter===ls||x.minFilter===An||x.minFilter===Za||x.minFilter===co||x.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,Mt[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Mt[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Mt[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,N[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,N[x.minFilter]),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,P[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ln||x.minFilter!==co&&x.minFilter!==ls||x.type===mi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function bt(S,x){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",B));const J=x.source;let rt=f.get(J);rt===void 0&&(rt={},f.set(J,rt));const tt=et(x);if(tt!==S.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),rt[tt].usedTimes++;const vt=rt[S.__cacheKey];vt!==void 0&&(rt[S.__cacheKey].usedTimes--,vt.usedTimes===0&&A(x)),S.__cacheKey=tt,S.__webglTexture=rt[tt].texture}return F}function Q(S,x,F){let J=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=n.TEXTURE_3D);const rt=bt(S,x),tt=x.source;e.bindTexture(J,S.__webglTexture,n.TEXTURE0+F);const vt=i.get(tt);if(tt.version!==vt.__version||rt===!0){e.activeTexture(n.TEXTURE0+F);const pt=Qt.getPrimaries(Qt.workingColorSpace),yt=x.colorSpace===Ui?null:Qt.getPrimaries(x.colorSpace),Gt=x.colorSpace===Ui||pt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let xt=v(x.image,!1,s.maxTextureSize);xt=ut(x,xt);const At=r.convert(x.format,x.colorSpace),zt=r.convert(x.type);let Lt=E(x.internalFormat,At,zt,x.colorSpace,x.isVideoTexture);mt(J,x);let wt;const Jt=x.mipmaps,qt=x.isVideoTexture!==!0,me=vt.__version===void 0||rt===!0,G=tt.dataReady,Ct=X(x,xt);if(x.isDepthTexture)Lt=y(x.format===rr,x.type),me&&(qt?e.texStorage2D(n.TEXTURE_2D,1,Lt,xt.width,xt.height):e.texImage2D(n.TEXTURE_2D,0,Lt,xt.width,xt.height,0,At,zt,null));else if(x.isDataTexture)if(Jt.length>0){qt&&me&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let ft=0,_t=Jt.length;ft<_t;ft++)wt=Jt[ft],qt?G&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,zt,wt.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,wt.width,wt.height,0,At,zt,wt.data);x.generateMipmaps=!1}else qt?(me&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,xt.width,xt.height),G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt.width,xt.height,At,zt,xt.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,xt.width,xt.height,0,At,zt,xt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qt&&me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,Jt[0].width,Jt[0].height,xt.depth);for(let ft=0,_t=Jt.length;ft<_t;ft++)if(wt=Jt[ft],x.format!==Cn)if(At!==null)if(qt){if(G)if(x.layerUpdates.size>0){const Dt=Sf(wt.width,wt.height,x.format,x.type);for(const Rt of x.layerUpdates){const Yt=wt.data.subarray(Rt*Dt/wt.data.BYTES_PER_ELEMENT,(Rt+1)*Dt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,Rt,wt.width,wt.height,1,At,Yt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,xt.depth,At,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,wt.width,wt.height,xt.depth,0,wt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?G&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,ft,0,0,0,wt.width,wt.height,xt.depth,At,zt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,ft,Lt,wt.width,wt.height,xt.depth,0,At,zt,wt.data)}else{qt&&me&&e.texStorage2D(n.TEXTURE_2D,Ct,Lt,Jt[0].width,Jt[0].height);for(let ft=0,_t=Jt.length;ft<_t;ft++)wt=Jt[ft],x.format!==Cn?At!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,ft,Lt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?G&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,wt.width,wt.height,At,zt,wt.data):e.texImage2D(n.TEXTURE_2D,ft,Lt,wt.width,wt.height,0,At,zt,wt.data)}else if(x.isDataArrayTexture)if(qt){if(me&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ct,Lt,xt.width,xt.height,xt.depth),G)if(x.layerUpdates.size>0){const ft=Sf(xt.width,xt.height,x.format,x.type);for(const _t of x.layerUpdates){const Dt=xt.data.subarray(_t*ft/xt.data.BYTES_PER_ELEMENT,(_t+1)*ft/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,_t,xt.width,xt.height,1,At,zt,Dt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,At,zt,xt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,xt.width,xt.height,xt.depth,0,At,zt,xt.data);else if(x.isData3DTexture)qt?(me&&e.texStorage3D(n.TEXTURE_3D,Ct,Lt,xt.width,xt.height,xt.depth),G&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,At,zt,xt.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,xt.width,xt.height,xt.depth,0,At,zt,xt.data);else if(x.isFramebufferTexture){if(me)if(qt)e.texStorage2D(n.TEXTURE_2D,Ct,Lt,xt.width,xt.height);else{let ft=xt.width,_t=xt.height;for(let Dt=0;Dt<Ct;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,Lt,ft,_t,0,At,zt,null),ft>>=1,_t>>=1}}else if(Jt.length>0){if(qt&&me){const ft=H(Jt[0]);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,ft.width,ft.height)}for(let ft=0,_t=Jt.length;ft<_t;ft++)wt=Jt[ft],qt?G&&e.texSubImage2D(n.TEXTURE_2D,ft,0,0,At,zt,wt):e.texImage2D(n.TEXTURE_2D,ft,Lt,At,zt,wt);x.generateMipmaps=!1}else if(qt){if(me){const ft=H(xt);e.texStorage2D(n.TEXTURE_2D,Ct,Lt,ft.width,ft.height)}G&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,zt,xt)}else e.texImage2D(n.TEXTURE_2D,0,Lt,At,zt,xt);m(x)&&h(J),vt.__version=tt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function dt(S,x,F){if(x.image.length!==6)return;const J=bt(S,x),rt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const tt=i.get(rt);if(rt.version!==tt.__version||J===!0){e.activeTexture(n.TEXTURE0+F);const vt=Qt.getPrimaries(Qt.workingColorSpace),pt=x.colorSpace===Ui?null:Qt.getPrimaries(x.colorSpace),yt=x.colorSpace===Ui||vt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const Gt=x.isCompressedTexture||x.image[0].isCompressedTexture,xt=x.image[0]&&x.image[0].isDataTexture,At=[];for(let _t=0;_t<6;_t++)!Gt&&!xt?At[_t]=v(x.image[_t],!0,s.maxCubemapSize):At[_t]=xt?x.image[_t].image:x.image[_t],At[_t]=ut(x,At[_t]);const zt=At[0],Lt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),Jt=E(x.internalFormat,Lt,wt,x.colorSpace),qt=x.isVideoTexture!==!0,me=tt.__version===void 0||J===!0,G=rt.dataReady;let Ct=X(x,zt);mt(n.TEXTURE_CUBE_MAP,x);let ft;if(Gt){qt&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Jt,zt.width,zt.height);for(let _t=0;_t<6;_t++){ft=At[_t].mipmaps;for(let Dt=0;Dt<ft.length;Dt++){const Rt=ft[Dt];x.format!==Cn?Lt!==null?qt?G&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Rt.width,Rt.height,Lt,Rt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,Jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,0,0,Rt.width,Rt.height,Lt,wt,Rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt,Jt,Rt.width,Rt.height,0,Lt,wt,Rt.data)}}}else{if(ft=x.mipmaps,qt&&me){ft.length>0&&Ct++;const _t=H(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Ct,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(xt){qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,At[_t].width,At[_t].height,Lt,wt,At[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,At[_t].width,At[_t].height,0,Lt,wt,At[_t].data);for(let Dt=0;Dt<ft.length;Dt++){const Yt=ft[Dt].image[_t].image;qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Yt.width,Yt.height,Lt,wt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,Jt,Yt.width,Yt.height,0,Lt,wt,Yt.data)}}else{qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Lt,wt,At[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Lt,wt,At[_t]);for(let Dt=0;Dt<ft.length;Dt++){const Rt=ft[Dt];qt?G&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,0,0,Lt,wt,Rt.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Dt+1,Jt,Lt,wt,Rt.image[_t])}}}m(x)&&h(n.TEXTURE_CUBE_MAP),tt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function gt(S,x,F,J,rt,tt){const vt=r.convert(F.format,F.colorSpace),pt=r.convert(F.type),yt=E(F.internalFormat,vt,pt,F.colorSpace),Gt=i.get(x),xt=i.get(F);if(xt.__renderTarget=x,!Gt.__hasExternalTextures){const At=Math.max(1,x.width>>tt),zt=Math.max(1,x.height>>tt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,yt,At,zt,x.depth,0,vt,pt,null):e.texImage2D(rt,tt,yt,At,zt,0,vt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),Z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,rt,xt.__webglTexture,0,K(x)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,rt,xt.__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function U(S,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer){const J=x.depthTexture,rt=J&&J.isDepthTexture?J.type:null,tt=y(x.stencilBuffer,rt),vt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=K(x);Z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,tt,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,tt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,S)}else{const J=x.textures;for(let rt=0;rt<J.length;rt++){const tt=J[rt],vt=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),yt=E(tt.internalFormat,vt,pt,tt.colorSpace),Gt=K(x);F&&Z(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,yt,x.width,x.height):Z(x)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Gt,yt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,yt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nt(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const rt=J.__webglTexture,tt=K(x);if(x.depthTexture.format===js)Z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,rt,0);else if(x.depthTexture.format===rr)Z(x)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0,tt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function ot(S){const x=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==S.depthTexture){const J=S.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const rt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",rt)};J.addEventListener("dispose",rt),x.__depthDisposeCallback=rt}x.__boundDepthTexture=J}if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");nt(x.__webglFramebuffer,S)}else if(F){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=n.createRenderbuffer(),U(x.__webglDepthbuffer[J],S,!1);else{const rt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,tt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),U(x.__webglDepthbuffer,S,!1);else{const J=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,rt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ht(S,x,F){const J=i.get(S);x!==void 0&&gt(J.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ot(S)}function b(S){const x=S.texture,F=i.get(S),J=i.get(x);S.addEventListener("dispose",I);const rt=S.textures,tt=S.isWebGLCubeRenderTarget===!0,vt=rt.length>1;if(vt||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=x.version,o.memory.textures++),tt){F.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[pt]=[];for(let yt=0;yt<x.mipmaps.length;yt++)F.__webglFramebuffer[pt][yt]=n.createFramebuffer()}else F.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let pt=0;pt<x.mipmaps.length;pt++)F.__webglFramebuffer[pt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(vt)for(let pt=0,yt=rt.length;pt<yt;pt++){const Gt=i.get(rt[pt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&Z(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pt=0;pt<rt.length;pt++){const yt=rt[pt];F.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[pt]);const Gt=r.convert(yt.format,yt.colorSpace),xt=r.convert(yt.type),At=E(yt.internalFormat,Gt,xt,yt.colorSpace,S.isXRRenderTarget===!0),zt=K(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,At,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,F.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),U(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(tt){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),mt(n.TEXTURE_CUBE_MAP,x);for(let pt=0;pt<6;pt++)if(x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)gt(F.__webglFramebuffer[pt][yt],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else gt(F.__webglFramebuffer[pt],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(x)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let pt=0,yt=rt.length;pt<yt;pt++){const Gt=rt[pt],xt=i.get(Gt);e.bindTexture(n.TEXTURE_2D,xt.__webglTexture),mt(n.TEXTURE_2D,Gt),gt(F.__webglFramebuffer,S,Gt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(Gt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(pt=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,J.__webglTexture),mt(pt,x),x.mipmaps&&x.mipmaps.length>0)for(let yt=0;yt<x.mipmaps.length;yt++)gt(F.__webglFramebuffer[yt],S,x,n.COLOR_ATTACHMENT0,pt,yt);else gt(F.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,pt,0);m(x)&&h(pt),e.unbindTexture()}S.depthBuffer&&ot(S)}function R(S){const x=S.textures;for(let F=0,J=x.length;F<J;F++){const rt=x[F];if(m(rt)){const tt=C(S),vt=i.get(rt).__webglTexture;e.bindTexture(tt,vt),h(tt),e.unbindTexture()}}}const D=[],g=[];function L(S){if(S.samples>0){if(Z(S)===!1){const x=S.textures,F=S.width,J=S.height;let rt=n.COLOR_BUFFER_BIT;const tt=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(S),pt=x.length>1;if(pt)for(let yt=0;yt<x.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let yt=0;yt<x.length;yt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const Gt=i.get(x[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,F,J,0,0,F,J,rt,n.NEAREST),l===!0&&(D.length=0,g.length=0,D.push(n.COLOR_ATTACHMENT0+yt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(D.push(tt),g.push(tt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,g)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<x.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[yt]);const Gt=i.get(x[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const x=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function K(S){return Math.min(s.maxSamples,S.samples)}function Z(S){const x=i.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function $(S){const x=o.render.frame;u.get(S)!==x&&(u.set(S,x),S.update())}function ut(S,x){const F=S.colorSpace,J=S.format,rt=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==ar&&F!==Ui&&(Qt.getTransfer(F)===le?(J!==Cn||rt!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}function H(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=it,this.resetTextureUnits=ct,this.setTexture2D=W,this.setTexture2DArray=st,this.setTexture3D=j,this.setTextureCube=k,this.rebindTextures=ht,this.setupRenderTarget=b,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=L,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Z}function iT(n,t){function e(i,s=Ui){let r;const o=Qt.getTransfer(s);if(i===xi)return n.UNSIGNED_BYTE;if(i===au)return n.UNSIGNED_SHORT_4_4_4_4;if(i===lu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_p)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return n.BYTE;if(i===gp)return n.SHORT;if(i===$r)return n.UNSIGNED_SHORT;if(i===ou)return n.INT;if(i===hs)return n.UNSIGNED_INT;if(i===mi)return n.FLOAT;if(i===Jr)return n.HALF_FLOAT;if(i===vp)return n.ALPHA;if(i===xp)return n.RGB;if(i===Cn)return n.RGBA;if(i===yp)return n.LUMINANCE;if(i===Mp)return n.LUMINANCE_ALPHA;if(i===js)return n.DEPTH_COMPONENT;if(i===rr)return n.DEPTH_STENCIL;if(i===Sp)return n.RED;if(i===cu)return n.RED_INTEGER;if(i===bp)return n.RG;if(i===uu)return n.RG_INTEGER;if(i===du)return n.RGBA_INTEGER;if(i===Xo||i===$o||i===qo||i===Yo)if(o===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Xo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===dc||i===fc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===hc||i===pc)return o===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===gc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Tc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rc)return o===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jo||i===Pc||i===Dc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===jo)return o===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ep||i===Lc||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ic)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class sT extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rT={type:"move"};class Tl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&f>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const oT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aT=`
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

}`;class lT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Gi({vertexShader:oT,fragmentShader:aT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Rn(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cT extends _s{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,_=null;const v=new lT,m=e.getContextAttributes();let h=null,C=null;const E=[],y=[],X=new Ht;let B=null;const I=new cn;I.viewport=new fe;const z=new cn;z.viewport=new fe;const A=[I,z],T=new sT;let O=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let dt=E[Q];return dt===void 0&&(dt=new Tl,E[Q]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(Q){let dt=E[Q];return dt===void 0&&(dt=new Tl,E[Q]=dt),dt.getGripSpace()},this.getHand=function(Q){let dt=E[Q];return dt===void 0&&(dt=new Tl,E[Q]=dt),dt.getHandSpace()};function it(Q){const dt=y.indexOf(Q.inputSource);if(dt===-1)return;const gt=E[dt];gt!==void 0&&(gt.update(Q.inputSource,Q.frame,c||o),gt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function et(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",et),s.removeEventListener("inputsourceschange",W);for(let Q=0;Q<E.length;Q++){const dt=y[Q];dt!==null&&(y[Q]=null,E[Q].disconnect(dt))}O=null,ct=null,v.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,C=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(B),t.setSize(X.width,X.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",et),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(X),s.renderState.layers===void 0){const dt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,dt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),C=new ps(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let dt=null,gt=null,U=null;m.depth&&(U=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=m.stencil?rr:js,gt=m.stencil?sr:hs);const nt={colorFormat:e.RGBA8,depthFormat:U,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),C=new ps(f.textureWidth,f.textureHeight,{format:Cn,type:xi,depthTexture:new zp(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Q){for(let dt=0;dt<Q.removed.length;dt++){const gt=Q.removed[dt],U=y.indexOf(gt);U>=0&&(y[U]=null,E[U].disconnect(gt))}for(let dt=0;dt<Q.added.length;dt++){const gt=Q.added[dt];let U=y.indexOf(gt);if(U===-1){for(let ot=0;ot<E.length;ot++)if(ot>=y.length){y.push(gt),U=ot;break}else if(y[ot]===null){y[ot]=gt,U=ot;break}if(U===-1)break}const nt=E[U];nt&&nt.connect(gt)}}const st=new V,j=new V;function k(Q,dt,gt){st.setFromMatrixPosition(dt.matrixWorld),j.setFromMatrixPosition(gt.matrixWorld);const U=st.distanceTo(j),nt=dt.projectionMatrix.elements,ot=gt.projectionMatrix.elements,ht=nt[14]/(nt[10]-1),b=nt[14]/(nt[10]+1),R=(nt[9]+1)/nt[5],D=(nt[9]-1)/nt[5],g=(nt[8]-1)/nt[0],L=(ot[8]+1)/ot[0],K=ht*g,Z=ht*L,$=U/(-g+L),ut=$*-g;if(dt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ut),Q.translateZ($),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),nt[10]===-1)Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const H=ht+$,S=b+$,x=K-ut,F=Z+(U-ut),J=R*b/S*H,rt=D*b/S*H;Q.projectionMatrix.makePerspective(x,F,J,rt,H,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,dt){dt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(dt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let dt=Q.near,gt=Q.far;v.texture!==null&&(v.depthNear>0&&(dt=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),T.near=z.near=I.near=dt,T.far=z.far=I.far=gt,(O!==T.near||ct!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,ct=T.far),I.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,T.layers.mask=I.layers.mask|z.layers.mask;const U=Q.parent,nt=T.cameras;Mt(T,U);for(let ot=0;ot<nt.length;ot++)Mt(nt[ot],U);nt.length===2?k(T,I,z):T.projectionMatrix.copy(I.projectionMatrix),N(Q,T,U)};function N(Q,dt,gt){gt===null?Q.matrix.copy(dt.matrixWorld):(Q.matrix.copy(gt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(dt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(dt.projectionMatrix),Q.projectionMatrixInverse.copy(dt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Oc*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let P=null;function mt(Q,dt){if(u=dt.getViewerPose(c||o),_=dt,u!==null){const gt=u.views;p!==null&&(t.setRenderTargetFramebuffer(C,p.framebuffer),t.setRenderTarget(C));let U=!1;gt.length!==T.cameras.length&&(T.cameras.length=0,U=!0);for(let ot=0;ot<gt.length;ot++){const ht=gt[ot];let b=null;if(p!==null)b=p.getViewport(ht);else{const D=d.getViewSubImage(f,ht);b=D.viewport,ot===0&&(t.setRenderTargetTextures(C,D.colorTexture,f.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(C))}let R=A[ot];R===void 0&&(R=new cn,R.layers.enable(ot),R.viewport=new fe,A[ot]=R),R.matrix.fromArray(ht.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ht.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(b.x,b.y,b.width,b.height),ot===0&&(T.matrix.copy(R.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),U===!0&&T.cameras.push(R)}const nt=s.enabledFeatures;if(nt&&nt.includes("depth-sensing")){const ot=d.getDepthInformation(gt[0]);ot&&ot.isValid&&ot.texture&&v.init(t,ot,s.renderState)}}for(let gt=0;gt<E.length;gt++){const U=y[gt],nt=E[gt];U!==null&&nt!==void 0&&nt.update(U,dt,c||o)}P&&P(Q,dt),dt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:dt}),_=null}const bt=new Fp;bt.setAnimationLoop(mt),this.setAnimationLoop=function(Q){P=Q},this.dispose=function(){}}}const Qi=new Zn,uT=new ve;function dT(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Up(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,C,E,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,C,E):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===rn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===rn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const C=t.get(h),E=C.envMap,y=C.envMapRotation;E&&(m.envMap.value=E,Qi.copy(y),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),m.envMapRotation.value.setFromMatrix4(uT.makeRotationFromEuler(Qi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,C,E){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*C,m.scale.value=E*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,C){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===rn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const C=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,E){const y=E.program;i.uniformBlockBinding(C,y)}function c(C,E){let y=s[C.id];y===void 0&&(_(C),y=u(C),s[C.id]=y,C.addEventListener("dispose",m));const X=E.program;i.updateUBOMapping(C,X);const B=t.render.frame;r[C.id]!==B&&(f(C),r[C.id]=B)}function u(C){const E=d();C.__bindingPointIndex=E;const y=n.createBuffer(),X=C.__size,B=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,X,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,y),y}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){const E=s[C.id],y=C.uniforms,X=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let B=0,I=y.length;B<I;B++){const z=Array.isArray(y[B])?y[B]:[y[B]];for(let A=0,T=z.length;A<T;A++){const O=z[A];if(p(O,B,A,X)===!0){const ct=O.__offset,it=Array.isArray(O.value)?O.value:[O.value];let et=0;for(let W=0;W<it.length;W++){const st=it[W],j=v(st);typeof st=="number"||typeof st=="boolean"?(O.__data[0]=st,n.bufferSubData(n.UNIFORM_BUFFER,ct+et,O.__data)):st.isMatrix3?(O.__data[0]=st.elements[0],O.__data[1]=st.elements[1],O.__data[2]=st.elements[2],O.__data[3]=0,O.__data[4]=st.elements[3],O.__data[5]=st.elements[4],O.__data[6]=st.elements[5],O.__data[7]=0,O.__data[8]=st.elements[6],O.__data[9]=st.elements[7],O.__data[10]=st.elements[8],O.__data[11]=0):(st.toArray(O.__data,et),et+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ct,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(C,E,y,X){const B=C.value,I=E+"_"+y;if(X[I]===void 0)return typeof B=="number"||typeof B=="boolean"?X[I]=B:X[I]=B.clone(),!0;{const z=X[I];if(typeof B=="number"||typeof B=="boolean"){if(z!==B)return X[I]=B,!0}else if(z.equals(B)===!1)return z.copy(B),!0}return!1}function _(C){const E=C.uniforms;let y=0;const X=16;for(let I=0,z=E.length;I<z;I++){const A=Array.isArray(E[I])?E[I]:[E[I]];for(let T=0,O=A.length;T<O;T++){const ct=A[T],it=Array.isArray(ct.value)?ct.value:[ct.value];for(let et=0,W=it.length;et<W;et++){const st=it[et],j=v(st),k=y%X,Mt=k%j.boundary,N=k+Mt;y+=Mt,N!==0&&X-N<j.storage&&(y+=X-N),ct.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ct.__offset=y,y+=j.storage}}}const B=y%X;return B>0&&(y+=X-B),C.__size=y,C.__cache={},this}function v(C){const E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){const E=C.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function h(){for(const C in s)n.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class hT{constructor(t={}){const{canvas:e=eM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const C=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=Bi,this.toneMappingExposure=1;const y=this;let X=!1,B=0,I=0,z=null,A=-1,T=null;const O=new fe,ct=new fe;let it=null;const et=new Wt(0);let W=0,st=e.width,j=e.height,k=1,Mt=null,N=null;const P=new fe(0,0,st,j),mt=new fe(0,0,st,j);let bt=!1;const Q=new hu;let dt=!1,gt=!1;const U=new ve,nt=new ve,ot=new V,ht=new fe,b={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function D(){return z===null?k:1}let g=i;function L(w,q){return e.getContext(w,q)}try{const w={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ru}`),e.addEventListener("webglcontextlost",_t,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),g===null){const q="webgl2";if(g=L(q,w),g===null)throw L(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let K,Z,$,ut,H,S,x,F,J,rt,tt,vt,pt,yt,Gt,xt,At,zt,Lt,wt,Jt,qt,me,G;function Ct(){K=new vE(g),K.init(),qt=new iT(g,K),Z=new fE(g,K,t,qt),$=new tT(g,K),Z.reverseDepthBuffer&&f&&$.buffers.depth.setReversed(!0),ut=new ME(g),H=new z1,S=new nT(g,K,$,H,Z,qt,ut),x=new pE(y),F=new _E(y),J=new CM(g),me=new uE(g,J),rt=new xE(g,J,ut,me),tt=new bE(g,rt,J,ut),Lt=new SE(g,Z,S),xt=new hE(H),vt=new B1(y,x,F,K,Z,me,xt),pt=new dT(y,H),yt=new V1,Gt=new q1(K),zt=new cE(y,x,F,$,tt,p,l),At=new J1(y,tt,Z),G=new fT(g,ut,Z,$),wt=new dE(g,K,ut),Jt=new yE(g,K,ut),ut.programs=vt.programs,y.capabilities=Z,y.extensions=K,y.properties=H,y.renderLists=yt,y.shadowMap=At,y.state=$,y.info=ut}Ct();const ft=new cT(y,g);this.xr=ft,this.getContext=function(){return g},this.getContextAttributes=function(){return g.getContextAttributes()},this.forceContextLoss=function(){const w=K.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=K.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(w){w!==void 0&&(k=w,this.setSize(st,j,!1))},this.getSize=function(w){return w.set(st,j)},this.setSize=function(w,q,at=!0){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}st=w,j=q,e.width=Math.floor(w*k),e.height=Math.floor(q*k),at===!0&&(e.style.width=w+"px",e.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(st*k,j*k).floor()},this.setDrawingBufferSize=function(w,q,at){st=w,j=q,k=at,e.width=Math.floor(w*at),e.height=Math.floor(q*at),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(O)},this.getViewport=function(w){return w.copy(P)},this.setViewport=function(w,q,at,lt){w.isVector4?P.set(w.x,w.y,w.z,w.w):P.set(w,q,at,lt),$.viewport(O.copy(P).multiplyScalar(k).round())},this.getScissor=function(w){return w.copy(mt)},this.setScissor=function(w,q,at,lt){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,q,at,lt),$.scissor(ct.copy(mt).multiplyScalar(k).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(w){$.setScissorTest(bt=w)},this.setOpaqueSort=function(w){Mt=w},this.setTransparentSort=function(w){N=w},this.getClearColor=function(w){return w.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor.apply(zt,arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha.apply(zt,arguments)},this.clear=function(w=!0,q=!0,at=!0){let lt=0;if(w){let Y=!1;if(z!==null){const Et=z.texture.format;Y=Et===du||Et===uu||Et===cu}if(Y){const Et=z.texture.type,Pt=Et===xi||Et===hs||Et===$r||Et===sr||Et===au||Et===lu,It=zt.getClearColor(),Ut=zt.getClearAlpha(),Xt=It.r,jt=It.g,Nt=It.b;Pt?(_[0]=Xt,_[1]=jt,_[2]=Nt,_[3]=Ut,g.clearBufferuiv(g.COLOR,0,_)):(v[0]=Xt,v[1]=jt,v[2]=Nt,v[3]=Ut,g.clearBufferiv(g.COLOR,0,v))}else lt|=g.COLOR_BUFFER_BIT}q&&(lt|=g.DEPTH_BUFFER_BIT),at&&(lt|=g.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),g.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_t,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),yt.dispose(),Gt.dispose(),H.dispose(),x.dispose(),F.dispose(),tt.dispose(),me.dispose(),G.dispose(),vt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",vu),ft.removeEventListener("sessionend",xu),Xi.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const w=ut.autoReset,q=At.enabled,at=At.autoUpdate,lt=At.needsUpdate,Y=At.type;Ct(),ut.autoReset=w,At.enabled=q,At.autoUpdate=at,At.needsUpdate=lt,At.type=Y}function Rt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Yt(w){const q=w.target;q.removeEventListener("dispose",Yt),Me(q)}function Me(w){ze(w),H.remove(w)}function ze(w){const q=H.get(w).programs;q!==void 0&&(q.forEach(function(at){vt.releaseProgram(at)}),w.isShaderMaterial&&vt.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,at,lt,Y,Et){q===null&&(q=b);const Pt=Y.isMesh&&Y.matrixWorld.determinant()<0,It=Kp(w,q,at,lt,Y);$.setMaterial(lt,Pt);let Ut=at.index,Xt=1;if(lt.wireframe===!0){if(Ut=rt.getWireframeAttribute(at),Ut===void 0)return;Xt=2}const jt=at.drawRange,Nt=at.attributes.position;let te=jt.start*Xt,ge=(jt.start+jt.count)*Xt;Et!==null&&(te=Math.max(te,Et.start*Xt),ge=Math.min(ge,(Et.start+Et.count)*Xt)),Ut!==null?(te=Math.max(te,0),ge=Math.min(ge,Ut.count)):Nt!=null&&(te=Math.max(te,0),ge=Math.min(ge,Nt.count));const xe=ge-te;if(xe<0||xe===1/0)return;me.setup(Y,lt,It,at,Ut);let en,ne=wt;if(Ut!==null&&(en=J.get(Ut),ne=Jt,ne.setIndex(en)),Y.isMesh)lt.wireframe===!0?($.setLineWidth(lt.wireframeLinewidth*D()),ne.setMode(g.LINES)):ne.setMode(g.TRIANGLES);else if(Y.isLine){let Ft=lt.linewidth;Ft===void 0&&(Ft=1),$.setLineWidth(Ft*D()),Y.isLineSegments?ne.setMode(g.LINES):Y.isLineLoop?ne.setMode(g.LINE_LOOP):ne.setMode(g.LINE_STRIP)}else Y.isPoints?ne.setMode(g.POINTS):Y.isSprite&&ne.setMode(g.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)ne.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))ne.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ft=Y._multiDrawStarts,Qn=Y._multiDrawCounts,ie=Y._multiDrawCount,Sn=Ut?J.get(Ut).bytesPerElement:1,xs=H.get(lt).currentProgram.getUniforms();for(let on=0;on<ie;on++)xs.setValue(g,"_gl_DrawID",on),ne.render(Ft[on]/Sn,Qn[on])}else if(Y.isInstancedMesh)ne.renderInstances(te,xe,Y.count);else if(at.isInstancedBufferGeometry){const Ft=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Qn=Math.min(at.instanceCount,Ft);ne.renderInstances(te,xe,Qn)}else ne.render(te,xe)};function oe(w,q,at){w.transparent===!0&&w.side===pi&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,no(w,q,at),w.side=Hi,w.needsUpdate=!0,no(w,q,at),w.side=pi):no(w,q,at)}this.compile=function(w,q,at=null){at===null&&(at=w),h=Gt.get(at),h.init(q),E.push(h),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),w!==at&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(h.pushLight(Y),Y.castShadow&&h.pushShadow(Y))}),h.setupLights();const lt=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Et=Y.material;if(Et)if(Array.isArray(Et))for(let Pt=0;Pt<Et.length;Pt++){const It=Et[Pt];oe(It,at,Y),lt.add(It)}else oe(Et,at,Y),lt.add(Et)}),E.pop(),h=null,lt},this.compileAsync=function(w,q,at=null){const lt=this.compile(w,q,at);return new Promise(Y=>{function Et(){if(lt.forEach(function(Pt){H.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){Y(w);return}setTimeout(Et,10)}K.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Mn=null;function Jn(w){Mn&&Mn(w)}function vu(){Xi.stop()}function xu(){Xi.start()}const Xi=new Fp;Xi.setAnimationLoop(Jn),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(w){Mn=w,ft.setAnimationLoop(w),w===null?Xi.stop():Xi.start()},ft.addEventListener("sessionstart",vu),ft.addEventListener("sessionend",xu),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(q),q=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,q,z),h=Gt.get(w,E.length),h.init(q),E.push(h),nt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(nt),gt=this.localClippingEnabled,dt=xt.init(this.clippingPlanes,gt),m=yt.get(w,C.length),m.init(),C.push(m),ft.enabled===!0&&ft.isPresenting===!0){const Et=y.xr.getDepthSensingMesh();Et!==null&&Ua(Et,q,-1/0,y.sortObjects)}Ua(w,q,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Mt,N),R=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,R&&zt.addToRenderList(m,w),this.info.render.frame++,dt===!0&&xt.beginShadows();const at=h.state.shadowsArray;At.render(at,w,q),dt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=m.opaque,Y=m.transmissive;if(h.setupLights(),q.isArrayCamera){const Et=q.cameras;if(Y.length>0)for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ut=Et[Pt];Mu(lt,Y,w,Ut)}R&&zt.render(w);for(let Pt=0,It=Et.length;Pt<It;Pt++){const Ut=Et[Pt];yu(m,w,Ut,Ut.viewport)}}else Y.length>0&&Mu(lt,Y,w,q),R&&zt.render(w),yu(m,w,q);z!==null&&(S.updateMultisampleRenderTarget(z),S.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(y,w,q),me.resetDefaultState(),A=-1,T=null,E.pop(),E.length>0?(h=E[E.length-1],dt===!0&&xt.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Ua(w,q,at,lt){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)at=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){lt&&ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(nt);const Pt=tt.update(w),It=w.material;It.visible&&m.push(w,Pt,It,at,ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){const Pt=tt.update(w),It=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ht.copy(w.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),ht.copy(Pt.boundingSphere.center)),ht.applyMatrix4(w.matrixWorld).applyMatrix4(nt)),Array.isArray(It)){const Ut=Pt.groups;for(let Xt=0,jt=Ut.length;Xt<jt;Xt++){const Nt=Ut[Xt],te=It[Nt.materialIndex];te&&te.visible&&m.push(w,Pt,te,at,ht.z,Nt)}}else It.visible&&m.push(w,Pt,It,at,ht.z,null)}}const Et=w.children;for(let Pt=0,It=Et.length;Pt<It;Pt++)Ua(Et[Pt],q,at,lt)}function yu(w,q,at,lt){const Y=w.opaque,Et=w.transmissive,Pt=w.transparent;h.setupLightsView(at),dt===!0&&xt.setGlobalState(y.clippingPlanes,at),lt&&$.viewport(O.copy(lt)),Y.length>0&&eo(Y,q,at),Et.length>0&&eo(Et,q,at),Pt.length>0&&eo(Pt,q,at),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function Mu(w,q,at,lt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[lt.id]===void 0&&(h.state.transmissionRenderTarget[lt.id]=new ps(1,1,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float")?Jr:xi,minFilter:ls,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const Et=h.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||O;Et.setSize(Pt.z,Pt.w);const It=y.getRenderTarget();y.setRenderTarget(Et),y.getClearColor(et),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),R&&zt.render(at);const Ut=y.toneMapping;y.toneMapping=Bi;const Xt=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),h.setupLightsView(lt),dt===!0&&xt.setGlobalState(y.clippingPlanes,lt),eo(w,at,lt),S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et),K.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Nt=0,te=q.length;Nt<te;Nt++){const ge=q[Nt],xe=ge.object,en=ge.geometry,ne=ge.material,Ft=ge.group;if(ne.side===pi&&xe.layers.test(lt.layers)){const Qn=ne.side;ne.side=rn,ne.needsUpdate=!0,Su(xe,at,lt,en,ne,Ft),ne.side=Qn,ne.needsUpdate=!0,jt=!0}}jt===!0&&(S.updateMultisampleRenderTarget(Et),S.updateRenderTargetMipmap(Et))}y.setRenderTarget(It),y.setClearColor(et,W),Xt!==void 0&&(lt.viewport=Xt),y.toneMapping=Ut}function eo(w,q,at){const lt=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Et=w.length;Y<Et;Y++){const Pt=w[Y],It=Pt.object,Ut=Pt.geometry,Xt=lt===null?Pt.material:lt,jt=Pt.group;It.layers.test(at.layers)&&Su(It,q,at,Ut,Xt,jt)}}function Su(w,q,at,lt,Y,Et){w.onBeforeRender(y,q,at,lt,Y,Et),w.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(y,q,at,lt,w,Et),Y.transparent===!0&&Y.side===pi&&Y.forceSinglePass===!1?(Y.side=rn,Y.needsUpdate=!0,y.renderBufferDirect(at,q,lt,Y,w,Et),Y.side=Hi,Y.needsUpdate=!0,y.renderBufferDirect(at,q,lt,Y,w,Et),Y.side=pi):y.renderBufferDirect(at,q,lt,Y,w,Et),w.onAfterRender(y,q,at,lt,Y,Et)}function no(w,q,at){q.isScene!==!0&&(q=b);const lt=H.get(w),Y=h.state.lights,Et=h.state.shadowsArray,Pt=Y.state.version,It=vt.getParameters(w,Y.state,Et,q,at),Ut=vt.getProgramCacheKey(It);let Xt=lt.programs;lt.environment=w.isMeshStandardMaterial?q.environment:null,lt.fog=q.fog,lt.envMap=(w.isMeshStandardMaterial?F:x).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,Xt===void 0&&(w.addEventListener("dispose",Yt),Xt=new Map,lt.programs=Xt);let jt=Xt.get(Ut);if(jt!==void 0){if(lt.currentProgram===jt&&lt.lightsStateVersion===Pt)return Eu(w,It),jt}else It.uniforms=vt.getUniforms(w),w.onBeforeCompile(It,y),jt=vt.acquireProgram(It,Ut),Xt.set(Ut,jt),lt.uniforms=It.uniforms;const Nt=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Nt.clippingPlanes=xt.uniform),Eu(w,It),lt.needsLights=Jp(w),lt.lightsStateVersion=Pt,lt.needsLights&&(Nt.ambientLightColor.value=Y.state.ambient,Nt.lightProbe.value=Y.state.probe,Nt.directionalLights.value=Y.state.directional,Nt.directionalLightShadows.value=Y.state.directionalShadow,Nt.spotLights.value=Y.state.spot,Nt.spotLightShadows.value=Y.state.spotShadow,Nt.rectAreaLights.value=Y.state.rectArea,Nt.ltc_1.value=Y.state.rectAreaLTC1,Nt.ltc_2.value=Y.state.rectAreaLTC2,Nt.pointLights.value=Y.state.point,Nt.pointLightShadows.value=Y.state.pointShadow,Nt.hemisphereLights.value=Y.state.hemi,Nt.directionalShadowMap.value=Y.state.directionalShadowMap,Nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Nt.spotShadowMap.value=Y.state.spotShadowMap,Nt.spotLightMatrix.value=Y.state.spotLightMatrix,Nt.spotLightMap.value=Y.state.spotLightMap,Nt.pointShadowMap.value=Y.state.pointShadowMap,Nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),lt.currentProgram=jt,lt.uniformsList=null,jt}function bu(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Ko.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Eu(w,q){const at=H.get(w);at.outputColorSpace=q.outputColorSpace,at.batching=q.batching,at.batchingColor=q.batchingColor,at.instancing=q.instancing,at.instancingColor=q.instancingColor,at.instancingMorph=q.instancingMorph,at.skinning=q.skinning,at.morphTargets=q.morphTargets,at.morphNormals=q.morphNormals,at.morphColors=q.morphColors,at.morphTargetsCount=q.morphTargetsCount,at.numClippingPlanes=q.numClippingPlanes,at.numIntersection=q.numClipIntersection,at.vertexAlphas=q.vertexAlphas,at.vertexTangents=q.vertexTangents,at.toneMapping=q.toneMapping}function Kp(w,q,at,lt,Y){q.isScene!==!0&&(q=b),S.resetTextureUnits();const Et=q.fog,Pt=lt.isMeshStandardMaterial?q.environment:null,It=z===null?y.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ar,Ut=(lt.isMeshStandardMaterial?F:x).get(lt.envMap||Pt),Xt=lt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,jt=!!at.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),Nt=!!at.morphAttributes.position,te=!!at.morphAttributes.normal,ge=!!at.morphAttributes.color;let xe=Bi;lt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(xe=y.toneMapping);const en=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ne=en!==void 0?en.length:0,Ft=H.get(lt),Qn=h.state.lights;if(dt===!0&&(gt===!0||w!==T)){const pn=w===T&&lt.id===A;xt.setState(lt,w,pn)}let ie=!1;lt.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Qn.state.version||Ft.outputColorSpace!==It||Y.isBatchedMesh&&Ft.batching===!1||!Y.isBatchedMesh&&Ft.batching===!0||Y.isBatchedMesh&&Ft.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ft.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ft.instancing===!1||!Y.isInstancedMesh&&Ft.instancing===!0||Y.isSkinnedMesh&&Ft.skinning===!1||!Y.isSkinnedMesh&&Ft.skinning===!0||Y.isInstancedMesh&&Ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ft.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ft.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ft.instancingMorph===!1&&Y.morphTexture!==null||Ft.envMap!==Ut||lt.fog===!0&&Ft.fog!==Et||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==xt.numPlanes||Ft.numIntersection!==xt.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==jt||Ft.morphTargets!==Nt||Ft.morphNormals!==te||Ft.morphColors!==ge||Ft.toneMapping!==xe||Ft.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Ft.__version=lt.version);let Sn=Ft.currentProgram;ie===!0&&(Sn=no(lt,q,Y));let xs=!1,on=!1,ur=!1;const ye=Sn.getUniforms(),Bn=Ft.uniforms;if($.useProgram(Sn.program)&&(xs=!0,on=!0,ur=!0),lt.id!==A&&(A=lt.id,on=!0),xs||T!==w){$.buffers.depth.getReversed()?(U.copy(w.projectionMatrix),iM(U),sM(U),ye.setValue(g,"projectionMatrix",U)):ye.setValue(g,"projectionMatrix",w.projectionMatrix),ye.setValue(g,"viewMatrix",w.matrixWorldInverse);const Mi=ye.map.cameraPosition;Mi!==void 0&&Mi.setValue(g,ot.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&ye.setValue(g,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&ye.setValue(g,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,on=!0,ur=!0)}if(Y.isSkinnedMesh){ye.setOptional(g,Y,"bindMatrix"),ye.setOptional(g,Y,"bindMatrixInverse");const pn=Y.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ye.setValue(g,"boneTexture",pn.boneTexture,S))}Y.isBatchedMesh&&(ye.setOptional(g,Y,"batchingTexture"),ye.setValue(g,"batchingTexture",Y._matricesTexture,S),ye.setOptional(g,Y,"batchingIdTexture"),ye.setValue(g,"batchingIdTexture",Y._indirectTexture,S),ye.setOptional(g,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ye.setValue(g,"batchingColorTexture",Y._colorsTexture,S));const dr=at.morphAttributes;if((dr.position!==void 0||dr.normal!==void 0||dr.color!==void 0)&&Lt.update(Y,at,Sn),(on||Ft.receiveShadow!==Y.receiveShadow)&&(Ft.receiveShadow=Y.receiveShadow,ye.setValue(g,"receiveShadow",Y.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Bn.envMap.value=Ut,Bn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&q.environment!==null&&(Bn.envMapIntensity.value=q.environmentIntensity),on&&(ye.setValue(g,"toneMappingExposure",y.toneMappingExposure),Ft.needsLights&&Zp(Bn,ur),Et&&lt.fog===!0&&pt.refreshFogUniforms(Bn,Et),pt.refreshMaterialUniforms(Bn,lt,k,j,h.state.transmissionRenderTarget[w.id]),Ko.upload(g,bu(Ft),Bn,S)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(Ko.upload(g,bu(Ft),Bn,S),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&ye.setValue(g,"center",Y.center),ye.setValue(g,"modelViewMatrix",Y.modelViewMatrix),ye.setValue(g,"normalMatrix",Y.normalMatrix),ye.setValue(g,"modelMatrix",Y.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const pn=lt.uniformsGroups;for(let Mi=0,Si=pn.length;Mi<Si;Mi++){const Tu=pn[Mi];G.update(Tu,Sn),G.bind(Tu,Sn)}}return Sn}function Zp(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Jp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,q,at){H.get(w.texture).__webglTexture=q,H.get(w.depthTexture).__webglTexture=at;const lt=H.get(w);lt.__hasExternalTextures=!0,lt.__autoAllocateDepthBuffer=at===void 0,lt.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),lt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){const at=H.get(w);at.__webglFramebuffer=q,at.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(w,q=0,at=0){z=w,B=q,I=at;let lt=!0,Y=null,Et=!1,Pt=!1;if(w){const Ut=H.get(w);if(Ut.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(g.FRAMEBUFFER,null),lt=!1;else if(Ut.__webglFramebuffer===void 0)S.setupRenderTarget(w);else if(Ut.__hasExternalTextures)S.rebindTextures(w,H.get(w.texture).__webglTexture,H.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Nt=w.depthTexture;if(Ut.__boundDepthTexture!==Nt){if(Nt!==null&&H.has(Nt)&&(w.width!==Nt.image.width||w.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(w)}}const Xt=w.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Pt=!0);const jt=H.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[q])?Y=jt[q][at]:Y=jt[q],Et=!0):w.samples>0&&S.useMultisampledRTT(w)===!1?Y=H.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?Y=jt[at]:Y=jt,O.copy(w.viewport),ct.copy(w.scissor),it=w.scissorTest}else O.copy(P).multiplyScalar(k).floor(),ct.copy(mt).multiplyScalar(k).floor(),it=bt;if($.bindFramebuffer(g.FRAMEBUFFER,Y)&&lt&&$.drawBuffers(w,Y),$.viewport(O),$.scissor(ct),$.setScissorTest(it),Et){const Ut=H.get(w.texture);g.framebufferTexture2D(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,g.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ut.__webglTexture,at)}else if(Pt){const Ut=H.get(w.texture),Xt=q||0;g.framebufferTextureLayer(g.FRAMEBUFFER,g.COLOR_ATTACHMENT0,Ut.__webglTexture,at||0,Xt)}A=-1},this.readRenderTargetPixels=function(w,q,at,lt,Y,Et,Pt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){$.bindFramebuffer(g.FRAMEBUFFER,It);try{const Ut=w.texture,Xt=Ut.format,jt=Ut.type;if(!Z.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-lt&&at>=0&&at<=w.height-Y&&g.readPixels(q,at,lt,Y,qt.convert(Xt),qt.convert(jt),Et)}finally{const Ut=z!==null?H.get(z).__webglFramebuffer:null;$.bindFramebuffer(g.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(w,q,at,lt,Y,Et,Pt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=H.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Pt!==void 0&&(It=It[Pt]),It){const Ut=w.texture,Xt=Ut.format,jt=Ut.type;if(!Z.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=w.width-lt&&at>=0&&at<=w.height-Y){$.bindFramebuffer(g.FRAMEBUFFER,It);const Nt=g.createBuffer();g.bindBuffer(g.PIXEL_PACK_BUFFER,Nt),g.bufferData(g.PIXEL_PACK_BUFFER,Et.byteLength,g.STREAM_READ),g.readPixels(q,at,lt,Y,qt.convert(Xt),qt.convert(jt),0);const te=z!==null?H.get(z).__webglFramebuffer:null;$.bindFramebuffer(g.FRAMEBUFFER,te);const ge=g.fenceSync(g.SYNC_GPU_COMMANDS_COMPLETE,0);return g.flush(),await nM(g,ge,4),g.bindBuffer(g.PIXEL_PACK_BUFFER,Nt),g.getBufferSubData(g.PIXEL_PACK_BUFFER,0,Et),g.deleteBuffer(Nt),g.deleteSync(ge),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,at=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1]);const lt=Math.pow(2,-at),Y=Math.floor(w.image.width*lt),Et=Math.floor(w.image.height*lt),Pt=q!==null?q.x:0,It=q!==null?q.y:0;S.setTexture2D(w,0),g.copyTexSubImage2D(g.TEXTURE_2D,at,0,0,Pt,It,Y,Et),$.unbindTexture()},this.copyTextureToTexture=function(w,q,at=null,lt=null,Y=0){w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),lt=arguments[0]||null,w=arguments[1],q=arguments[2],Y=arguments[3]||0,at=null);let Et,Pt,It,Ut,Xt,jt,Nt,te,ge;const xe=w.isCompressedTexture?w.mipmaps[Y]:w.image;at!==null?(Et=at.max.x-at.min.x,Pt=at.max.y-at.min.y,It=at.isBox3?at.max.z-at.min.z:1,Ut=at.min.x,Xt=at.min.y,jt=at.isBox3?at.min.z:0):(Et=xe.width,Pt=xe.height,It=xe.depth||1,Ut=0,Xt=0,jt=0),lt!==null?(Nt=lt.x,te=lt.y,ge=lt.z):(Nt=0,te=0,ge=0);const en=qt.convert(q.format),ne=qt.convert(q.type);let Ft;q.isData3DTexture?(S.setTexture3D(q,0),Ft=g.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(S.setTexture2DArray(q,0),Ft=g.TEXTURE_2D_ARRAY):(S.setTexture2D(q,0),Ft=g.TEXTURE_2D),g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL,q.flipY),g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),g.pixelStorei(g.UNPACK_ALIGNMENT,q.unpackAlignment);const Qn=g.getParameter(g.UNPACK_ROW_LENGTH),ie=g.getParameter(g.UNPACK_IMAGE_HEIGHT),Sn=g.getParameter(g.UNPACK_SKIP_PIXELS),xs=g.getParameter(g.UNPACK_SKIP_ROWS),on=g.getParameter(g.UNPACK_SKIP_IMAGES);g.pixelStorei(g.UNPACK_ROW_LENGTH,xe.width),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,xe.height),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Ut),g.pixelStorei(g.UNPACK_SKIP_ROWS,Xt),g.pixelStorei(g.UNPACK_SKIP_IMAGES,jt);const ur=w.isDataArrayTexture||w.isData3DTexture,ye=q.isDataArrayTexture||q.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Bn=H.get(w),dr=H.get(q),pn=H.get(Bn.__renderTarget),Mi=H.get(dr.__renderTarget);$.bindFramebuffer(g.READ_FRAMEBUFFER,pn.__webglFramebuffer),$.bindFramebuffer(g.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Si=0;Si<It;Si++)ur&&g.framebufferTextureLayer(g.READ_FRAMEBUFFER,g.COLOR_ATTACHMENT0,H.get(w).__webglTexture,Y,jt+Si),w.isDepthTexture?(ye&&g.framebufferTextureLayer(g.DRAW_FRAMEBUFFER,g.COLOR_ATTACHMENT0,H.get(q).__webglTexture,Y,ge+Si),g.blitFramebuffer(Ut,Xt,Et,Pt,Nt,te,Et,Pt,g.DEPTH_BUFFER_BIT,g.NEAREST)):ye?g.copyTexSubImage3D(Ft,Y,Nt,te,ge+Si,Ut,Xt,Et,Pt):g.copyTexSubImage2D(Ft,Y,Nt,te,ge+Si,Ut,Xt,Et,Pt);$.bindFramebuffer(g.READ_FRAMEBUFFER,null),$.bindFramebuffer(g.DRAW_FRAMEBUFFER,null)}else ye?w.isDataTexture||w.isData3DTexture?g.texSubImage3D(Ft,Y,Nt,te,ge,Et,Pt,It,en,ne,xe.data):q.isCompressedArrayTexture?g.compressedTexSubImage3D(Ft,Y,Nt,te,ge,Et,Pt,It,en,xe.data):g.texSubImage3D(Ft,Y,Nt,te,ge,Et,Pt,It,en,ne,xe):w.isDataTexture?g.texSubImage2D(g.TEXTURE_2D,Y,Nt,te,Et,Pt,en,ne,xe.data):w.isCompressedTexture?g.compressedTexSubImage2D(g.TEXTURE_2D,Y,Nt,te,xe.width,xe.height,en,xe.data):g.texSubImage2D(g.TEXTURE_2D,Y,Nt,te,Et,Pt,en,ne,xe);g.pixelStorei(g.UNPACK_ROW_LENGTH,Qn),g.pixelStorei(g.UNPACK_IMAGE_HEIGHT,ie),g.pixelStorei(g.UNPACK_SKIP_PIXELS,Sn),g.pixelStorei(g.UNPACK_SKIP_ROWS,xs),g.pixelStorei(g.UNPACK_SKIP_IMAGES,on),Y===0&&q.generateMipmaps&&g.generateMipmap(Ft),$.unbindTexture()},this.copyTextureToTexture3D=function(w,q,at=null,lt=null,Y=0){return w.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),at=arguments[0]||null,lt=arguments[1]||null,w=arguments[2],q=arguments[3],Y=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,at,lt,Y)},this.initRenderTarget=function(w){H.get(w).__webglFramebuffer===void 0&&S.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?S.setTextureCube(w,0):w.isData3DTexture?S.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?S.setTexture2DArray(w,0):S.setTexture2D(w,0),$.unbindTexture()},this.resetState=function(){B=0,I=0,z=null,$.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class mu{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new mu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pT extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nc,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new V;class ca{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Xn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new In(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wp extends vs{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ns;const xr=new V,Os=new V,Fs=new V,Bs=new Ht,yr=new Ht,Xp=new ve,Do=new V,Mr=new V,Lo=new V,bf=new Ht,wl=new Ht,Ef=new Ht;class gT extends Ne{constructor(t=new Wp){if(super(),this.isSprite=!0,this.type="Sprite",Ns===void 0){Ns=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mT(e,5);Ns.setIndex([0,1,2,0,2,3]),Ns.setAttribute("position",new ca(i,3,0,!1)),Ns.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=Ns,this.material=t,this.center=new Ht(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),Xp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Io(Do.set(-.5,-.5,0),Fs,o,Os,s,r),Io(Mr.set(.5,-.5,0),Fs,o,Os,s,r),Io(Lo.set(.5,.5,0),Fs,o,Os,s,r),bf.set(0,0),wl.set(1,0),Ef.set(1,1);let a=t.ray.intersectTriangle(Do,Mr,Lo,!1,xr);if(a===null&&(Io(Mr.set(-.5,.5,0),Fs,o,Os,s,r),wl.set(0,1),a=t.ray.intersectTriangle(Do,Lo,Mr,!1,xr),a===null))return;const l=t.ray.origin.distanceTo(xr);l<t.near||l>t.far||e.push({distance:l,point:xr.clone(),uv:un.getInterpolation(xr,Do,Mr,Lo,bf,wl,Ef,new Ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Io(n,t,e,i,s,r){Bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(yr.x=r*Bs.x-s*Bs.y,yr.y=s*Bs.x+r*Bs.y):yr.copy(Bs),n.copy(t),n.x+=yr.x,n.y+=yr.y,n.applyMatrix4(Xp)}class ua extends vs{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const da=new V,fa=new V,Tf=new ve,Sr=new La,Uo=new Da,Al=new V,wf=new V;class Rr extends Ne{constructor(t=new Je,e=new ua){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)da.fromBufferAttribute(e,s-1),fa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=da.distanceTo(fa);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(s),Uo.radius+=r,t.ray.intersectsSphere(Uo)===!1)return;Tf.copy(s).invert(),Sr.copy(t.ray).applyMatrix4(Tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const h=u.getX(v),C=u.getX(v+1),E=No(this,t,Sr,l,h,C);E&&e.push(E)}if(this.isLineLoop){const v=u.getX(_-1),m=u.getX(p),h=No(this,t,Sr,l,v,m);h&&e.push(h)}}else{const p=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let v=p,m=_-1;v<m;v+=c){const h=No(this,t,Sr,l,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=No(this,t,Sr,l,_-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function No(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(da.fromBufferAttribute(o,s),fa.fromBufferAttribute(o,r),e.distanceSqToSegment(da,fa,Al,wf)>i)return;Al.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Al);if(!(l<t.near||l>t.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Af=new V,Cf=new V;class $p extends Rr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Af.fromBufferAttribute(e,s),Cf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Af.distanceTo(Cf);t.setAttribute("lineDistance",new vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _T extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Oo=new V,Fo=new V,Cl=new V,Bo=new un;class vT extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Fr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let _=0;_<l;_+=3){o?(c[0]=o.getX(_),c[1]=o.getX(_+1),c[2]=o.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:v,b:m,c:h}=Bo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Bo.getNormal(Cl),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){const E=(C+1)%3,y=d[C],X=d[E],B=Bo[u[C]],I=Bo[u[E]],z=`${y}_${X}`,A=`${X}_${y}`;A in f&&f[A]?(Cl.dot(f[A].normal)<=r&&(p.push(B.x,B.y,B.z),p.push(I.x,I.y,I.z)),f[A]=null):z in f||(f[z]={index0:c[C],index1:c[E],normal:Cl.clone()})}}for(const _ in f)if(f[_]){const{index0:v,index1:m}=f[_];Oo.fromBufferAttribute(a,v),Fo.fromBufferAttribute(a,m),p.push(Oo.x,Oo.y,Oo.z),p.push(Fo.x,Fo.y,Fo.z)}this.setAttribute("position",new vn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rf extends vs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tp,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gu extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Rl=new ve,Pf=new V,Df=new V;class qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hu,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new fe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),Rl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Lf=new ve,br=new V,Pl=new V;class xT extends qp{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ht(4,2),this._viewportCount=6,this._viewports=[new fe(2,1,1,1),new fe(0,1,1,1),new fe(3,1,1,1),new fe(1,1,1,1),new fe(3,0,1,1),new fe(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),i.position.copy(br),Pl.copy(i.position),Pl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Pl),i.updateMatrixWorld(),s.makeTranslation(-br.x,-br.y,-br.z),Lf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lf)}}class yT extends gu{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new xT}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class MT extends qp{constructor(){super(new Bp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class If extends gu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ST extends gu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Uf=new ve;class bT{constructor(t,e,i=0,s=1/0){this.ray=new La(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new fu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Uf),this}intersectObject(t,e=!0,i=[]){return Bc(t,this,i,e),i.sort(Nf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Bc(t[s],this,i,e);return i.sort(Nf),i}}function Nf(n,t){return n.distance-t.distance}function Bc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Bc(r[o],t,e,!0)}}class Of{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ET extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new Wt(i),s=new Wt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,_=-a;f<=e;f++,_+=o){l.push(-a,0,_,a,0,_),l.push(_,0,-a,_,0,a);const v=f===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new Je;u.setAttribute("position",new vn(l,3)),u.setAttribute("color",new vn(c,3));const d=new ua({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class TT extends _s{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ru}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ru);const Ff={type:"change"},_u={type:"start"},Yp={type:"end"},zo=new La,Bf=new Ii,wT=Math.cos(70*tM.DEG2RAD),we=new V,nn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dl=1e-6;class AT extends TT{constructor(t,e=null){super(t,e),this.state=de.NONE,this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:Gs.ROTATE,TWO:Gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new ms,this._lastTargetPosition=new V,this._quat=new ms().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Of,this._sphericalDelta=new Of,this._scale=1,this._panOffset=new V,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new V,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=RT.bind(this),this._onPointerDown=CT.bind(this),this._onPointerUp=PT.bind(this),this._onContextMenu=FT.bind(this),this._onMouseWheel=IT.bind(this),this._onKeyDown=UT.bind(this),this._onTouchStart=NT.bind(this),this._onTouchMove=OT.bind(this),this._onMouseDown=DT.bind(this),this._onMouseMove=LT.bind(this),this._interceptControlDown=BT.bind(this),this._interceptControlUp=zT.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ff),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;we.copy(e).sub(this.target),we.applyQuaternion(this._quat),this._spherical.setFromVector3(we),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(we.setFromSpherical(this._spherical),we.applyQuaternion(this._quatInverse),e.copy(this.target).add(we),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=we.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=we.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zo.origin.copy(this.object.position),zo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zo.direction))<wT?this.object.lookAt(this.target):(Bf.setFromNormalAndCoplanarPoint(this.object.up,this.target),zo.intersectPlane(Bf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dl||this._lastTargetPosition.distanceToSquared(this.target)>Dl?(this.dispatchEvent(Ff),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){we.setFromMatrixColumn(e,0),we.multiplyScalar(-t),this._panOffset.add(we)}_panUp(t,e){this.screenSpacePanning===!0?we.setFromMatrixColumn(e,1):(we.setFromMatrixColumn(e,0),we.crossVectors(this.object.up,we)),we.multiplyScalar(t),this._panOffset.add(we)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;we.copy(s).sub(this.target);let r=we.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function CT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function RT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function PT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Yp),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function DT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(_u)}function LT(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function IT(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(_u),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Yp))}function UT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function NT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case Gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case Gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case Gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(_u)}function OT(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function FT(n){this.enabled!==!1&&n.preventDefault()}function BT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zT(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},VT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},HT={style:{display:"flex","align-items":"center",gap:"8px"}},GT={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},WT={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},XT={style:{color:"#00d2ff","font-weight":"bold"}},$T={style:{color:"#ecc94b"}},qT={style:{color:"#e2e8f0"}},YT={style:{color:"#e2e8f0"}},jT={style:{color:"#63b3ed"}},KT={style:{color:"#e2e8f0"}},ZT={style:{color:"#e2e8f0"}},JT={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},QT={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},tw={style:{display:"flex","align-items":"center",gap:"6px"}},ew={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},nw={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},iw={style:{color:"#48bb78"}},sw={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},rw={style:{color:"#ecc94b"}},ow={style:{color:"#63b3ed"}},aw=Wi({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=ce(null),i=ce(null),s=ce("current"),r=ce({visible:!1,x:0,y:0}),o=Ze(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(et){s.value=et,I()}let l,c,u,d,f,p,_,v=[],m=null,h=new Xs,C=new Xs;function E(et){const j=Math.max(0,Math.min(1,(et-65)/31)),k=new Wt;return j<.25?k.lerpColors(new Wt(16007006),new Wt(16347926),j/.25):j<.5?k.lerpColors(new Wt(16347926),new Wt(15381256),(j-.25)/.25):j<.75?k.lerpColors(new Wt(15381256),new Wt(1096065),(j-.5)/.25):j<.9?k.lerpColors(new Wt(1096065),new Wt(440020),(j-.75)/.15):k.lerpColors(new Wt(440020),new Wt(9133302),(j-.9)/.1),k}function y(et,W=24,st="#94a3b8"){const j=document.createElement("canvas");j.width=512,j.height=128;const k=j.getContext("2d");k.fillStyle="transparent",k.fillRect(0,0,j.width,j.height),k.font=`bold ${W*2}px "Fira Code", monospace`,k.fillStyle=st,k.textAlign="center",k.textBaseline="middle",k.fillText(et,j.width/2,j.height/2);const Mt=new _T(j);Mt.minFilter=An;const N=new Wp({map:Mt,transparent:!0,depthWrite:!1}),P=new gT(N);return P.scale.set(4,1,1),P}function X(){if(!e.value)return;const et=e.value.clientWidth,W=e.value.clientHeight;l=new pT,l.background=new Wt(461588),l.fog=new mu(461588,.015),c=new cn(45,et/W,.1,1e3),c.position.set(24,22,28),u=new hT({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(et,W),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=fp,e.value.appendChild(u.domElement),d=new AT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02,d.minDistance=6,d.maxDistance=80,d.target.set(0,4,0);const st=new ST(16777215,.85);l.add(st);const j=new If(16777215,1.2);j.position.set(30,40,25),j.castShadow=!0,j.shadow.mapSize.width=1024,j.shadow.mapSize.height=1024,l.add(j);const k=new If(3718648,.6);k.position.set(-25,20,-25),l.add(k);const Mt=new yT(1096065,.8,50);Mt.position.set(0,15,0),l.add(Mt),p=new bT,_=new Ht(-999,-999),l.add(h),l.add(C),window.addEventListener("resize",it),e.value.addEventListener("mousemove",z),e.value.addEventListener("mouseleave",A),I(),ct()}function B(){!d||!c||(c.position.set(24,22,28),d.target.set(0,4,0),d.update())}function I(){if(!l)return;for(;h.children.length>0;){const $=h.children[0];h.remove($)}for(;C.children.length>0;){const $=C.children[0];C.remove($)}v=[],m=null,i.value=null,r.value.visible=!1;const et=t.points;if(!et||et.length===0)return;const W=[...new Set(et.map($=>$.voltageTarget))].sort(($,ut)=>$-ut),st=et.map($=>s.value==="current"?$.iout:$.pout),j=[...new Set(st.map($=>Math.round($*10)/10))].sort(($,ut)=>$-ut),k=Math.max(1,W.length),Mt=Math.max(1,j.length),N=18,P=18,mt=10,bt=k>1?N/(k-1):N,Q=Mt>1?P/(Mt-1):P,dt=Math.min(1.2,N/k*.65),gt=Math.min(1.2,P/Mt*.65),U=new ET(Math.max(N,P)+4,Math.max(k,Mt)+2,165063,1976635);U.position.set(0,0,0),h.add(U);const nt=new to(36,36),ot=new Rf({color:725280,roughness:.7,metalness:.1}),ht=new Rn(nt,ot);ht.rotation.x=-Math.PI/2,ht.position.y=-.05,ht.receiveShadow=!0,h.add(ht);const b=new ua({color:3718648,linewidth:2}),R=new Je().setFromPoints([new V(-N/2-1,0,P/2+1),new V(N/2+2,0,P/2+1)]);h.add(new Rr(R,b));const D=y("X: 输入电压 Vin (V)",22,"#38bdf8");D.position.set(0,.4,P/2+2.8),D.scale.set(7,1.8,1),h.add(D),W.forEach(($,ut)=>{const H=-N/2+ut*bt,S=y(`${$}V`,16,"#94a3b8");S.position.set(H,.2,P/2+1.8),S.scale.set(3,.9,1),h.add(S)});const g=new Je().setFromPoints([new V(-N/2-1,0,-P/2-1),new V(-N/2-1,0,P/2+2)]);h.add(new Rr(g,b));const L=y(s.value==="current"?"Y: 负载电流 Iout (A)":"Y: 输出功率 Pout (W)",22,"#f59e0b");L.position.set(-N/2-3.2,.4,0),L.scale.set(8,2,1),h.add(L),j.forEach(($,ut)=>{const H=-P/2+ut*Q,S=y(s.value==="current"?`${$}A`:`${$}W`,16,"#94a3b8");S.position.set(-N/2-1.8,.2,H),S.scale.set(3,.9,1),h.add(S)});const K=new Je().setFromPoints([new V(-N/2-1,0,P/2+1),new V(-N/2-1,mt+1.5,P/2+1)]);h.add(new Rr(K,b));const Z=y("Z: 转换效率 η (%)",22,"#10b981");Z.position.set(-N/2-1,mt+2.2,P/2+1),Z.scale.set(7,1.8,1),h.add(Z),[20,40,60,80,100].forEach($=>{const ut=$/100*mt,H=y(`${$}%`,16,"#6ee7b7");H.position.set(-N/2-2,ut,P/2+1),H.scale.set(2.8,.8,1),h.add(H);const S=new Je().setFromPoints([new V(-N/2-.8,ut,P/2+1),new V(-N/2-.2,ut,P/2+1)]);h.add(new Rr(S,b))}),et.forEach($=>{const ut=W.indexOf($.voltageTarget),H=Math.round((s.value==="current"?$.iout:$.pout)*10)/10;let S=j.indexOf(H);S===-1&&(S=0);const x=-N/2+(ut>=0?ut:0)*bt,F=-P/2+S*Q,J=Math.max(1,Math.min(100,$.efficiency)),rt=Math.max(.2,J/100*mt),tt=new lr(dt,rt,gt);tt.translate(0,rt/2,0);const vt=E(J),pt=new Rf({color:vt,roughness:.35,metalness:.25,emissive:vt,emissiveIntensity:.12}),yt=new Rn(tt,pt);yt.position.set(x,0,F),yt.castShadow=!0,yt.receiveShadow=!0,yt.__barPoint=$;const Gt=new vT(tt),xt=new ua({color:16777215,transparent:!0,opacity:.25}),At=new $p(Gt,xt);yt.add(At),C.add(yt),yt.scale.set(1,.01,1),v.push({mesh:yt,point:$,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:rt,material:pt,origColor:vt.clone()})})}function z(et){if(!e.value)return;const W=e.value.getBoundingClientRect();_.x=(et.clientX-W.left)/W.width*2-1,_.y=-((et.clientY-W.top)/W.height)*2+1,r.value.x=et.clientX-W.left,r.value.y=et.clientY-W.top}function A(){_.x=-999,_.y=-999,r.value.visible=!1,m&&T()}function T(){m&&(m.targetElevation=0,m.material.emissive.copy(m.origColor),m.material.emissiveIntensity=.12,m=null,i.value=null,r.value.visible=!1)}function O(){if(!c||!l||v.length===0)return;p.setFromCamera(_,c);const et=v.map(st=>st.mesh),W=p.intersectObjects(et,!1);if(W.length>0){const st=W[0].object,j=v.find(k=>k.mesh===st);j&&j!==m&&(m&&T(),m=j,i.value=j.point,r.value.visible=!0,j.targetElevation=1.2,j.material.emissive.set(3718648),j.material.emissiveIntensity=.65)}else m&&T()}function ct(){f=requestAnimationFrame(ct),d&&d.update(),O(),v.forEach(et=>{et.currentScaleY+=(et.targetScaleY-et.currentScaleY)*.1,et.mesh.scale.y=et.currentScaleY,et.currentElevation+=(et.targetElevation-et.currentElevation)*.15,et.mesh.position.y=et.baseY+et.currentElevation}),u&&l&&c&&u.render(l,c)}function it(){if(!e.value||!u||!c)return;const et=e.value.clientWidth,W=e.value.clientHeight;c.aspect=et/W,c.updateProjectionMatrix(),u.setSize(et,W)}return us(()=>t.points,()=>{I()},{deep:!0}),jr(()=>{X()}),Kr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",it),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(et,W)=>(Bt(),Vt("div",kT,[M("div",VT,[M("div",HT,[W[2]||(W[2]=sa('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-51c1de34><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-51c1de34></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-51c1de34></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-51c1de34></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-51c1de34>3D 空间特征柱状图</span>',2)),M("span",GT,"| X: Vin | Y: "+St(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Bt(),Vt("div",WT,[M("span",XT," 选定点 #"+St(i.value.stepIndex)+": ",1),M("span",null,[W[3]||(W[3]=Ot("Vin: ",-1)),M("b",$T,St(i.value.vin.toFixed(3))+"V",1)]),M("span",null,[W[4]||(W[4]=Ot("Iin: ",-1)),M("b",qT,St(i.value.iin.toFixed(3))+"A",1)]),M("span",null,[W[5]||(W[5]=Ot("Pin: ",-1)),M("b",YT,St(i.value.pin.toFixed(3))+"W",1)]),M("span",null,[W[6]||(W[6]=Ot("Vout: ",-1)),M("b",jT,St(i.value.vout.toFixed(3))+"V",1)]),M("span",null,[W[7]||(W[7]=Ot("Iout: ",-1)),M("b",KT,St(i.value.iout.toFixed(3))+"A",1)]),M("span",null,[W[8]||(W[8]=Ot("Pout: ",-1)),M("b",ZT,St(i.value.pout.toFixed(3))+"W",1)]),M("span",JT," 效率 η: "+St(i.value.efficiency.toFixed(2))+"% ",1)])):(Bt(),Vt("div",QT,[...W[9]||(W[9]=[M("span",{style:{color:"#ecc94b"}},"💡",-1),M("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),M("div",tw,[M("div",ew,[M("button",{class:"btn",style:Ie({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:W[0]||(W[0]=st=>a("current"))}," Y: 负载电流 (A) ",4),M("button",{class:"btn",style:Ie({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:W[1]||(W[1]=st=>a("power"))}," Y: 输出功率 (W) ",4)]),M("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:B,title:"重置视角"}," 重置视角 ")])]),M("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Bt(),Vt("div",{key:0,style:Ie([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[M("div",nw,[M("span",null,"采样点 #"+St(i.value.stepIndex),1),M("span",iw,"η = "+St(i.value.efficiency.toFixed(2))+"%",1)]),M("div",sw,[M("div",null,[W[10]||(W[10]=Ot("Vin: ",-1)),M("span",rw,St(i.value.vin.toFixed(2))+"V",1)]),M("div",null,[W[11]||(W[11]=Ot("Vout: ",-1)),M("span",ow,St(i.value.vout.toFixed(2))+"V",1)]),M("div",null,[W[12]||(W[12]=Ot("Iin: ",-1)),M("span",null,St(i.value.iin.toFixed(3))+"A",1)]),M("div",null,[W[13]||(W[13]=Ot("Iout: ",-1)),M("span",null,St(i.value.iout.toFixed(3))+"A",1)]),M("div",null,[W[14]||(W[14]=Ot("Pin: ",-1)),M("span",null,St(i.value.pin.toFixed(2))+"W",1)]),M("div",null,[W[15]||(W[15]=Ot("Pout: ",-1)),M("span",null,St(i.value.pout.toFixed(2))+"W",1)])])],4)):Le("",!0),W[16]||(W[16]=sa('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-51c1de34><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-51c1de34><span data-v-51c1de34>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-51c1de34>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-51c1de34></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-51c1de34><span data-v-51c1de34>&lt;70% 低效</span><span data-v-51c1de34>85%</span><span data-v-51c1de34>&gt;95% 高效</span></div></div>',1))],512)]))}}),lw=Kh(aw,[["__scopeId","data-v-51c1de34"]]),cw={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},uw={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},dw={style:{display:"flex","align-items":"center",gap:"12px"}},fw={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},hw={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},pw={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},mw={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},gw={style:{color:"#68d391","font-size":"13px"}},_w={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},vw={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},xw={style:{color:"#4fd1c5","font-size":"12px"}},yw={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},Mw={style:{color:"#ecc94b"}},Sw={style:{display:"flex","align-items":"center",gap:"8px"}},bw={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},Ew=["value"],Tw={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},ww={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},Aw={style:{flex:"1",overflow:"auto",padding:"12px"}},Cw={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},Rw={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},Pw={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},Dw={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},Lw=["onClick"],Iw={key:1,style:{color:"#4a5568"}},Uw={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},Nw={style:{color:"#63b3ed","font-weight":"bold"}},Ow={style:{color:"#ecc94b"}},Fw={style:{color:"#63b3ed"}},Bw={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},zw=Wi({__name:"Result3DView",setup(n){const t=Ov(),e=Nv(),i=ce(null),s=ce([]),r=ce(""),o=ce(null),a=ce("3d");async function l(){const _=t.params.id||"";if(s.value=await up(),_){const v=await N0(_);if(v){i.value=v,r.value=v.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(_,v){if(i.value)return i.value.points.find(m=>Math.abs(m.voltageTarget-_)<1e-4&&Math.abs(m.loadTarget-v)<1e-4)}function u(_){return _>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:_>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:_>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&Wo(i.value)}function p(){window.opener?window.close():e.push("/")}return us(()=>t.params.id,()=>{l()}),jr(()=>{l()}),(_,v)=>{var h,C,E,y,X,B,I,z;const m=bh("router-link");return Bt(),Vt("div",cw,[M("header",uw,[M("div",dw,[Ue(m,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:_h(()=>[...v[6]||(v[6]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[M("polyline",{points:"15 18 9 12 15 6"})],-1),Ot(" 控制台 ",-1)])]),_:1}),M("div",null,[M("div",fw,[M("span",null,St(((h=i.value)==null?void 0:h.title)||"测试结果数据查看"),1),v[7]||(v[7]=M("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),M("div",hw," 测试时间: "+St(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+St((E=(C=i.value)==null?void 0:C.config)==null?void 0:E.voltageMin)+"V~"+St((X=(y=i.value)==null?void 0:y.config)==null?void 0:X.voltageMax)+"V, "+St((I=(B=i.value)==null?void 0:B.config)==null?void 0:I.loadMode),1)])]),(z=i.value)!=null&&z.summary?(Bt(),Vt("div",pw,[M("div",mw,[M("span",null,[v[8]||(v[8]=Ot("峰值效率 η_max: ",-1)),M("b",gw,St(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Bt(),Vt("span",_w," (@"+St(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+St(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Le("",!0)]),M("div",vw,[M("span",null,[v[9]||(v[9]=Ot("平均效率 η_avg: ",-1)),M("b",xw,St(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),M("div",yw,[M("span",null,[v[10]||(v[10]=Ot("矩阵测试点: ",-1)),M("b",Mw,St(i.value.points.length)+" 点",1)])])])):Le("",!0),M("div",Sw,[M("div",bw,[M("button",{class:"btn",style:Ie({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[0]||(v[0]=A=>a.value="3d")}," 3D 空间柱状图 ",4),M("button",{class:"btn",style:Ie({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[1]||(v[1]=A=>a.value="matrix")}," 2D 效率矩阵表 ",4),M("button",{class:"btn",style:Ie({backgroundColor:a.value==="split"?"#3182ce":"transparent",color:a.value==="split"?"#ffffff":"#a0aec0",fontWeight:a.value==="split"?"bold":"normal",border:"none",padding:"3px 8px"}),onClick:v[2]||(v[2]=A=>a.value="split")}," 并排双视图 ",4)]),s.value.length>1?De((Bt(),Vt("select",{key:0,"onUpdate:modelValue":v[3]||(v[3]=A=>r.value=A),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Bt(!0),Vt(Fe,null,Vs(s.value,A=>(Bt(),Vt("option",{key:A.id,value:A.id},St(A.title),9,Ew))),128))],544)),[[Wl,r.value]]):Le("",!0),i.value?(Bt(),Vt("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[...v[11]||(v[11]=[M("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[M("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),M("polyline",{points:"7 10 12 15 17 10"}),M("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ot(" 下载 CSV ",-1)])])):Le("",!0),M("button",{class:"btn",style:{padding:"4px 8px"},onClick:p,title:"关闭页面"}," ✕ ")])]),M("div",Tw,[a.value==="3d"||a.value==="split"?(Bt(),Vt("div",{key:0,style:Ie({flex:a.value==="split"?"1.2":"1",height:"100%",position:"relative",borderRight:a.value==="split"?"1px solid #2d3748":"none"})},[i.value&&i.value.points.length>0?(Bt(),eu(lw,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Bt(),Vt("div",ww," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],4)):Le("",!0),a.value==="matrix"||a.value==="split"?(Bt(),Vt("div",{key:1,style:Ie({flex:(a.value==="split","1"),height:"100%",display:"flex",flexDirection:"column",backgroundColor:"#171b22",overflow:"hidden"})},[v[18]||(v[18]=sa('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),M("div",Aw,[i.value?(Bt(),Vt("table",Cw,[M("thead",null,[M("tr",Rw,[M("th",Pw," 负载 ("+St(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Bt(!0),Vt(Fe,null,Vs(i.value.voltageSteps,A=>(Bt(),Vt("th",{key:A,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},St(A)+"V ",1))),128))])]),M("tbody",null,[(Bt(!0),Vt(Fe,null,Vs(i.value.loadSteps,A=>(Bt(),Vt("tr",{key:A,style:{"border-bottom":"1px solid #2d3748"}},[M("td",Dw,St(A)+St(i.value.config.loadMode==="CC"?"A":"W"),1),(Bt(!0),Vt(Fe,null,Vs(i.value.voltageSteps,T=>(Bt(),Vt("td",{key:T,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:v[4]||(v[4]=O=>O.currentTarget.style.transform="scale(1.04)"),onMouseleave:v[5]||(v[5]=O=>O.currentTarget.style.transform="scale(1.0)"),onClick:O=>o.value=c(T,A)||null},[c(T,A)?(Bt(),Vt("div",{key:0,style:Ie([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(T,A).efficiency)])},St(c(T,A).efficiency.toFixed(2))+"% ",5)):(Bt(),Vt("span",Iw,"--"))],40,Lw))),128))]))),128))])])):Le("",!0)]),o.value?(Bt(),Vt("div",Uw,[M("span",Nw," 选定点 (#"+St(o.value.stepIndex)+"): ",1),M("span",null,"目标: "+St(o.value.voltageTarget)+"V / "+St(o.value.loadTarget)+St(o.value.loadMode),1),M("span",null,[v[12]||(v[12]=Ot("实测Vin: ",-1)),M("b",Ow,St(o.value.vin.toFixed(3))+"V",1)]),M("span",null,[v[13]||(v[13]=Ot("实测Iin: ",-1)),M("b",null,St(o.value.iin.toFixed(3))+"A",1)]),M("span",null,[v[14]||(v[14]=Ot("实测Pin: ",-1)),M("b",null,St(o.value.pin.toFixed(3))+"W",1)]),M("span",null,[v[15]||(v[15]=Ot("实测Vout: ",-1)),M("b",Fw,St(o.value.vout.toFixed(3))+"V",1)]),M("span",null,[v[16]||(v[16]=Ot("实测Iout: ",-1)),M("b",null,St(o.value.iout.toFixed(3))+"A",1)]),M("span",null,[v[17]||(v[17]=Ot("实测Pout: ",-1)),M("b",null,St(o.value.pout.toFixed(3))+"W",1)]),M("span",Bw," 效率 η: "+St(o.value.efficiency.toFixed(2))+"% ",1)])):Le("",!0)],4)):Le("",!0)])])}}}),kw=[{path:"/",name:"Console",component:fy},{path:"/result/:id",name:"Result3D",component:zw,props:!0}],Vw=Uv({history:fv(),routes:kw}),jp=S_(A_);jp.use(Vw);jp.mount("#app");
