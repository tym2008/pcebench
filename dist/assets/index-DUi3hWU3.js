var Kp=Object.defineProperty;var Zp=(n,t,e)=>t in n?Kp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Qt=(n,t,e)=>Zp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Vc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const me={},cs=[],Yn=()=>{},Ff=()=>!1,ma=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ga=n=>n.startsWith("onUpdate:"),Fe=Object.assign,Hc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Jp=Object.prototype.hasOwnProperty,se=(n,t)=>Jp.call(n,t),Wt=Array.isArray,Bi=n=>jr(n)==="[object Map]",Mi=n=>jr(n)==="[object Set]",Au=n=>jr(n)==="[object Date]",qt=n=>typeof n=="function",Ee=n=>typeof n=="string",qn=n=>typeof n=="symbol",ue=n=>n!==null&&typeof n=="object",Bf=n=>(ue(n)||qt(n))&&qt(n.then)&&qt(n.catch),zf=Object.prototype.toString,jr=n=>zf.call(n),Qp=n=>jr(n).slice(8,-1),kf=n=>jr(n)==="[object Object]",Gc=n=>Ee(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Pr=Vc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},tm=/-\w/g,Qe=_a(n=>n.replace(tm,t=>t.slice(1).toUpperCase())),em=/\B([A-Z])/g,xs=_a(n=>n.replace(em,"-$1").toLowerCase()),va=_a(n=>n.charAt(0).toUpperCase()+n.slice(1)),Fa=_a(n=>n?`on${va(n)}`:""),Xn=(n,t)=>!Object.is(n,t),Ho=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Vf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},xa=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Cu;const ya=()=>Cu||(Cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ge(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ee(i)?rm(i):Ge(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ee(n)||ue(n))return n}const nm=/;(?![^(]*\))/g,im=/:([^]+)/,sm=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function rm(n){const t={};return n.replace(sm,e=>e.startsWith("/*")?"":e).split(nm).forEach(e=>{if(e){const i=e.split(im);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function di(n){let t="";if(Ee(n))t=n;else if(Wt(n))for(let e=0;e<n.length;e++){const i=di(n[e]);i&&(t+=i+" ")}else if(ue(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const om="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",am=Vc(om);function Hf(n){return!!n||n===""}function lm(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Nn(n[s],t[s],e);return i}function Ru(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Nn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function cm(n,t,e){let i=Bi(n),s=Bi(t);if(i||s||(i=Mi(n),s=Mi(t),i||s))return i&&s?Ru(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Nn(n[a],t[a],e))return!1}return String(n)===String(t)}function Pu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Nn(n,t,e){if(n===t)return!0;let i=Au(n),s=Au(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=qn(n),s=qn(t),i||s?n===t:(i=Wt(n),s=Wt(t),i||s?i&&s?Pu(n,t,e,lm):!1:(i=ue(n),s=ue(t),i||s?!i||!s?!1:Pu(n,t,e,cm):String(n)===String(t))))}function Wc(n,t){return n.findIndex(e=>Nn(e,t))}const Gf=n=>!!(n&&n.__v_isRef===!0),St=n=>Ee(n)?n:n==null?"":Wt(n)||ue(n)&&(n.toString===zf||!qt(n.toString))?Gf(n)?St(n.value):JSON.stringify(n,Wf,2):String(n),Wf=(n,t)=>Gf(t)?Wf(n,t.value):Bi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Ba(i,r)+" =>"]=s,e),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Ba(e))}:qn(t)?Ba(t):ue(t)&&!Wt(t)&&!kf(t)?String(t):t,Ba=(n,t="")=>{var e;return qn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class um{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Oe;try{return Oe=this,t()}finally{Oe=e}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let t=Oe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dm(){return Oe}let _e;const za=new WeakSet;class Xf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,za.has(this)&&(za.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Yf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Du(this),jf(this);const t=_e,e=Dn;_e=this,Dn=!0;try{return this.fn()}finally{qf(this),_e=t,Dn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Yc(t);this.deps=this.depsTail=void 0,Du(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?za.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ul(this)&&this.run()}get dirty(){return Ul(this)}}let $f=0,Dr,Lr;function Yf(n,t=!1){if(n.flags|=8,t){n.next=Lr,Lr=n;return}n.next=Dr,Dr=n}function Xc(){$f++}function $c(){if(--$f>0)return;if(Lr){let t=Lr;for(Lr=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Dr;){let t=Dr;for(Dr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function jf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Yc(i),fm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Ul(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Br)||(n.globalVersion=Br,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Ul(n))))return;n.flags|=2;const t=n.dep,e=_e,i=Dn;_e=n,Dn=!0;try{jf(n);const s=n.fn(n._value);(t.version===0||Xn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{_e=e,Dn=i,qf(n),n.flags&=-3}}function Yc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Yc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function fm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let Dn=!0;const Zf=[];function Kn(){Zf.push(Dn),Dn=!1}function Zn(){const n=Zf.pop();Dn=n===void 0?!0:n}function Du(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=_e;_e=void 0;try{t()}finally{_e=e}}}let Br=0;class hm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class jc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!Dn||_e===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==_e)e=this.activeLink=new hm(_e,this),_e.deps?(e.prevDep=_e.depsTail,_e.depsTail.nextDep=e,_e.depsTail=e):_e.deps=_e.depsTail=e,Jf(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=_e.depsTail,e.nextDep=void 0,_e.depsTail.nextDep=e,_e.depsTail=e,_e.deps===e&&(_e.deps=i)}return e}trigger(t){this.version++,Br++,this.notify(t)}notify(t){Xc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{$c()}}}function Jf(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Jf(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Nl=new WeakMap,hs=Symbol(""),Ol=Symbol(""),zr=Symbol("");function Ve(n,t,e){if(Dn&&_e){let i=Nl.get(n);i||Nl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new jc),s.map=i,s.key=e),s.track()}}function hi(n,t,e,i,s,r){const o=Nl.get(n);if(!o){Br++;return}const a=l=>{l&&l.trigger()};if(Xc(),t==="clear")o.forEach(a);else{const l=Wt(n),c=l&&Gc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===zr||!qn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(zr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(hs)),Bi(n)&&a(o.get(Ol)));break;case"delete":l||(a(o.get(hs)),Bi(n)&&a(o.get(Ol)));break;case"set":Bi(n)&&a(o.get(hs));break}}$c()}function bs(n){const t=le(n);return t===n||(Ve(t,"iterate",zr),vn(n))?t:Jn(n)?zi(n)?t.map(e=>Hi(yn(e))):t.map(Hi):t.map(yn)}function Ma(n){return Ve(n=le(n),"iterate",zr),n}function Vn(n,t){return Jn(n)?Hi(zi(n)?yn(t):t):yn(t)}const pm={__proto__:null,[Symbol.iterator](){return ka(this,Symbol.iterator,n=>Vn(this,n))},concat(...n){return bs(this).concat(...n.map(t=>Wt(t)?bs(t):t))},entries(){return ka(this,"entries",n=>(n[1]=Vn(this,n[1]),n))},every(n,t){return ni(this,"every",n,t,void 0,arguments)},filter(n,t){return ni(this,"filter",n,t,e=>e.map(i=>Vn(this,i)),arguments)},find(n,t){return ni(this,"find",n,t,e=>Vn(this,e),arguments)},findIndex(n,t){return ni(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ni(this,"findLast",n,t,e=>Vn(this,e),arguments)},findLastIndex(n,t){return ni(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ni(this,"forEach",n,t,void 0,arguments)},includes(...n){return Va(this,"includes",n)},indexOf(...n){return Va(this,"indexOf",n)},join(n){return bs(this).join(n)},lastIndexOf(...n){return Va(this,"lastIndexOf",n)},map(n,t){return ni(this,"map",n,t,void 0,arguments)},pop(){return hr(this,"pop")},push(...n){return hr(this,"push",n)},reduce(n,...t){return Iu(this,"reduce",n,t)},reduceRight(n,...t){return Iu(this,"reduceRight",n,t)},shift(){return hr(this,"shift")},some(n,t){return ni(this,"some",n,t,void 0,arguments)},splice(...n){return hr(this,"splice",n)},toReversed(){return bs(this).toReversed()},toSorted(n){return bs(this).toSorted(n)},toSpliced(...n){return bs(this).toSpliced(...n)},unshift(...n){return hr(this,"unshift",n)},values(){return ka(this,"values",n=>Vn(this,n))}};function ka(n,t,e){const i=Ma(n),s=i[t],r=s.call(i);if(i!==n&&!vn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Lu(r.next(),e),s!==Qf[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Lu(r._next(),e)}return r}function Lu(n,t){return n.done||(n.value=t(n.value)),n}const Qf=Array.prototype;function ni(n,t,e,i,s,r){const o=Ma(n),a=o!==n&&!vn(n),l=o[t];if(l!==Qf[t]){const d=l.apply(n,r);return a?yn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Vn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Iu(n,t,e,i){const s=Ma(n),r=s!==n&&!vn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Vn(n,c)),e.call(this,c,Vn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Vn(n,l):l}function Va(n,t,e){const i=le(n);Ve(i,"iterate",zr);const s=i[t](...e);return(s===-1||s===!1)&&Zc(e[0])?(e[0]=le(e[0]),i[t](...e)):s}function hr(n,t,e=[]){Kn(),Xc();const i=le(n)[t].apply(n,e);return $c(),Zn(),i}const mm=Vc("__proto__,__v_isRef,__isVue"),th=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function gm(n){qn(n)||(n=String(n));const t=le(this);return Ve(t,"has",n),t.hasOwnProperty(n)}class eh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?wm:rh:r?sh:ih).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Wt(t);if(!s){let l;if(o&&(l=pm[e]))return l;if(e==="hasOwnProperty")return gm}const a=Reflect.get(t,e,We(t)?t:i);if((qn(e)?th.has(e):mm(e))||(s||Ve(t,"get",e),r))return a;if(We(a)){const l=o&&Gc(e)?a:a.value;return s&&ue(l)?Bl(l):l}return ue(a)?s?Bl(a):jn(a):a}}class nh extends eh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Wt(t)&&Gc(e);if(!this._isShallow){const c=Jn(r);if(!vn(i)&&!Jn(i)&&(r=le(r),i=le(i)),!o&&We(r)&&!We(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:se(t,e),l=Reflect.set(t,e,i,We(t)?t:s);return t===le(s)&&l&&(a?Xn(i,r)&&hi(t,"set",e,i):hi(t,"add",e,i)),l}deleteProperty(t,e){const i=se(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&hi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!qn(e)||!th.has(e))&&Ve(t,"has",e),i}ownKeys(t){return Ve(t,"iterate",Wt(t)?"length":hs),Reflect.ownKeys(t)}}class _m extends eh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const vm=new nh,xm=new _m,ym=new nh(!0);const Fl=n=>n,so=n=>Reflect.getPrototypeOf(n);function Mm(n,t,e){return function(...i){const s=this.__v_raw,r=le(s),o=Bi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Fl:t?Hi:yn;return!t&&Ve(r,"iterate",l?Ol:hs),Fe(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ro(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Sm(n,t){const e={get(s){const r=this.__v_raw,o=le(r),a=le(s);n||(Xn(s,a)&&Ve(o,"get",s),Ve(o,"get",a));const{has:l}=so(o),c=t?Fl:n?Hi:yn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ve(le(s),"iterate",hs),s.size},has(s){const r=this.__v_raw,o=le(r),a=le(s);return n||(Xn(s,a)&&Ve(o,"has",s),Ve(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=le(a),c=t?Fl:n?Hi:yn;return!n&&Ve(l,"iterate",hs),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Fe(e,n?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){const r=le(this),o=so(r),a=le(s),l=!t&&!vn(s)&&!Jn(s)?a:s;return o.has.call(r,l)||Xn(s,l)&&o.has.call(r,s)||Xn(a,l)&&o.has.call(r,a)||(r.add(l),hi(r,"add",l,l)),this},set(s,r){!t&&!vn(r)&&!Jn(r)&&(r=le(r));const o=le(this),{has:a,get:l}=so(o);let c=a.call(o,s);c||(s=le(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Xn(r,u)&&hi(o,"set",s,r):hi(o,"add",s,r),this},delete(s){const r=le(this),{has:o,get:a}=so(r);let l=o.call(r,s);l||(s=le(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&hi(r,"delete",s,void 0),c},clear(){const s=le(this),r=s.size!==0,o=s.clear();return r&&hi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Mm(s,n,t)}),e}function qc(n,t){const e=Sm(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(se(e,s)&&s in i?e:i,s,r)}const bm={get:qc(!1,!1)},Em={get:qc(!1,!0)},Tm={get:qc(!0,!1)};const ih=new WeakMap,sh=new WeakMap,rh=new WeakMap,wm=new WeakMap;function Am(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jn(n){return Jn(n)?n:Kc(n,!1,vm,bm,ih)}function oh(n){return Kc(n,!1,ym,Em,sh)}function Bl(n){return Kc(n,!0,xm,Tm,rh)}function Kc(n,t,e,i,s){if(!ue(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Am(Qp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function zi(n){return Jn(n)?zi(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function vn(n){return!!(n&&n.__v_isShallow)}function Zc(n){return n?!!n.__v_raw:!1}function le(n){const t=n&&n.__v_raw;return t?le(t):n}function Cm(n){return!se(n,"__v_skip")&&Object.isExtensible(n)&&Vf(n,"__v_skip",!0),n}const yn=n=>ue(n)?jn(n):n,Hi=n=>ue(n)?Bl(n):n;function We(n){return n?n.__v_isRef===!0:!1}function ne(n){return ah(n,!1)}function Rm(n){return ah(n,!0)}function ah(n,t){return We(n)?n:new Pm(n,t)}class Pm{constructor(t,e){this.dep=new jc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:le(t),this._value=e?t:yn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||vn(t)||Jn(t);t=i?t:le(t),Xn(t,e)&&(this._rawValue=t,this._value=i?t:yn(t),this.dep.trigger())}}function Te(n){return We(n)?n.value:n}const Dm={get:(n,t,e)=>t==="__v_raw"?n:Te(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return We(s)&&!We(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function lh(n){return zi(n)?n:new Proxy(n,Dm)}class Lm{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new jc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Br-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return Yf(this,!0),!0}get value(){const t=this.dep.track();return Kf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Im(n,t,e=!1){let i,s;return qt(n)?i=n:(i=n.get,s=n.set),new Lm(i,s,e)}const oo={},Qo=new WeakMap;let ns;function Um(n,t=!1,e=ns){if(e){let i=Qo.get(e);i||Qo.set(e,i=[]),i.push(n)}}function Nm(n,t,e=me){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=T=>s?T:vn(T)||s===!1||s===0?pi(T,1):pi(T);let u,d,f,h,v=!1,_=!1;if(We(n)?(d=()=>n.value,v=vn(n)):zi(n)?(d=()=>c(n),v=!0):Wt(n)?(_=!0,v=n.some(T=>zi(T)||vn(T)),d=()=>n.map(T=>{if(We(T))return T.value;if(zi(T))return c(T);if(qt(T))return l?l(T,2):T()})):qt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){Kn();try{f()}finally{Zn()}}const T=ns;ns=u;try{return l?l(n,3,[h]):n(h)}finally{ns=T}}:d=Yn,t&&s){const T=d,k=s===!0?1/0:s;d=()=>pi(T(),k)}const m=dm(),p=()=>{u.stop(),m&&m.active&&Hc(m.effects,u)};if(r&&t){const T=t;t=(...k)=>{try{return T(...k)}finally{p()}}}let D=_?new Array(n.length).fill(oo):oo;const P=T=>{if(!(!(u.flags&1)||!u.dirty&&!T))if(t){const k=u.run();if(T||s||v||(_?k.some((V,N)=>Xn(V,D[N])):Xn(k,D))){const V=ns;Kn();try{f&&f(),ns=u;const N=[k,D===oo?void 0:_&&D[0]===oo?[]:D,h];D=k,l?l(t,3,N):t(...N)}finally{ns=V,Zn()}}}else u.run()};return a&&a(P),u=new Xf(d),u.scheduler=o?()=>o(P,!1):P,h=T=>Um(T,!1,u),f=u.onStop=()=>{const T=Qo.get(u);if(T){if(l)l(T,4);else for(const k of T)k();Qo.delete(u)}},t?i?P(!0):D=u.run():o?o(P.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function pi(n,t=1/0,e){if(t<=0||!ue(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,We(n))pi(n.value,t,e);else if(Wt(n))for(let i=0;i<n.length;i++)pi(n[i],t,e);else if(Mi(n)||Bi(n))n.forEach(i=>{pi(i,t,e)});else if(kf(n)){for(const i in n)pi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&pi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qr(n,t,e,i){try{return i?n(...i):n()}catch(s){Sa(s,t,e)}}function On(n,t,e,i){if(qt(n)){const s=qr(n,t,e,i);return s&&Bf(s)&&s.catch(r=>{Sa(r,t,e)}),s}if(Wt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(On(n[r],t,e,i));return s}}function Sa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Kn(),qr(r,null,10,[n,l,c]),Zn();return}}Om(n,e,s,i,o)}function Om(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const qe=[];let An=-1;const Hn=[];let Ii=null,Hs=0;const ch=Promise.resolve();let ta=null;function Jc(n){const t=ta||ch;return n?t.then(this?n.bind(this):n):t}function Fm(n){let t=An+1,e=qe.length;for(;t<e;){const i=t+e>>>1,s=qe[i],r=kr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Qc(n){if(!(n.flags&1)){const t=kr(n),e=qe[qe.length-1];!e||!(n.flags&2)&&t>=kr(e)?qe.push(n):qe.splice(Fm(t),0,n),n.flags|=1,uh()}}function uh(){ta||(ta=ch.then(hh))}function Bm(n){if(!Wt(n))Ii&&n.id===-1?Ii.splice(Hs+1,0,n):n.flags&1||(Hn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Hn.push(n[t]);uh()}function dh(n,t,e,i=An+1){for(;i<qe.length;i++){const s=qe[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;qe.splice(i,1),i=n?i-1:An,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function fh(n,t,e=0){if(Hn.length){let i=Hn,s=0;if(t){i=[];for(let o=0;o<Hn.length;o++){const a=Hn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Hn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>kr(o)-kr(a));if(Hn.length=s,Ii){for(let o=0;o<r.length;o++)Ii.push(r[o]);return}for(Ii=r,Hs=0;Hs<Ii.length;Hs++){const o=Ii[Hs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Ii=null,Hs=0}}let Ha=!1;function zm(n,t){if(Ha){n();return}const e=t===void 0?void 0:new Set(Hn);n(),Ha=!0;try{dh(void 0,t),fh(void 0,e,t)}finally{Ha=!1}}const kr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function hh(n){try{for(An=0;An<qe.length;An++){const t=qe[An];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;An<qe.length;An++){const t=qe[An];t&&(t.flags&=-2)}An=-1,qe.length=0,fh(),ta=null,(qe.length||Hn.length)&&hh()}}let dn=null,ph=null;function ea(n){const t=dn;return dn=n,ph=n&&n.type.__scopeId||null,t}function mh(n,t=dn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&ra(-1);const r=ea(t),o=ms.length;let a;try{a=n(...s)}finally{for(let l=ms.length;l>o;l--)zh();ea(r),i._d&&ra(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function pe(n,t){if(dn===null)return n;const e=Aa(dn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=me]=t[s];r&&(qt(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ji(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Kn(),On(l,e,8,[n.el,a,n,t]),Zn())}}function Go(n,t){if(He){let e=He.provides;const i=He.parent&&He.parent.provides;i===e&&(e=He.provides=Object.create(i)),e[n]=t}}function Ln(n,t,e=!1){const i=Fg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&qt(t)?t.call(i&&i.proxy):t}}const km=Symbol.for("v-scx"),Vm=()=>Ln(km);function ps(n,t,e){return gh(n,t,e)}function gh(n,t,e=me){const{immediate:i,deep:s,flush:r,once:o}=e,a=Fe({},e),l=t&&i||!t&&r!=="post";let c;if(Xr){if(r==="sync"){const h=Vm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Yn,h.resume=Yn,h.pause=Yn,h}}const u=He;a.call=(h,v,_)=>On(h,u,v,_);let d=!1;r==="post"?a.scheduler=h=>{h.i=u,sn(h,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(h,v)=>{v?h():Qc(h)}),a.augmentJob=h=>{t&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=Nm(n,t,a);return Xr&&(c?c.push(f):l&&f()),f}function Hm(n,t,e){const i=this.proxy,s=Ee(n)?n.includes(".")?_h(i,n):()=>i[n]:n.bind(i,i);let r;qt(t)?r=t:(r=t.handler,e=t);const o=Jr(this),a=gh(s,r.bind(i),e);return o(),a}function _h(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Gm=Symbol("_vte"),ba=n=>n.__isTeleport,Ga=Symbol("_leaveCb");function Wm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==Fn){t=e;break}}return t}function vh(n){if(!tu(n))return ba(n.type)&&n.children?Wm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&qt(e.default))return e.default()}}function na(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;na(ba(e.type)&&vh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Re&&Wt(n.children)){const e=wh(n.children,!1);e&&na(e,t)}}function zl(n){if(n.component)return zl(n.component.subTree);if(n.type===Re){const t=Wt(n.children)&&wh(n.children,!1);return t?zl(t):void 0}if(n.type!==Fn)return n}function $i(n,t){return qt(n)?Fe({name:n.name},t,{setup:n}):n}function xh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Uu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const ia=new WeakMap;function Ir(n,t,e,i,s=!1){if(Wt(n)){n.forEach((_,m)=>Ir(_,t&&(Wt(t)?t[m]:t),e,i,s));return}if(Ur(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ir(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Aa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===me?a.refs={}:a.refs,d=a.setupState,f=le(d),h=d===me?Ff:_=>Uu(u,_)?!1:se(f,_),v=(_,m)=>!(m&&Uu(u,m));if(c!=null&&c!==l){if(Nu(t),Ee(c))u[c]=null,h(c)&&(d[c]=null);else if(We(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(qt(l))qr(l,a,12,[o,u]);else{const _=Ee(l),m=We(l);if(_||m){const p=()=>{if(n.f){const D=_?h(l)?d[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Wt(D)&&Hc(D,r);else if(Wt(D))D.includes(r)||D.push(r);else if(_)u[l]=[r],h(l)&&(d[l]=u[l]);else{const P=[r];v(l,n.k)&&(l.value=P),n.k&&(u[n.k]=P)}}else _?(u[l]=o,h(l)&&(d[l]=o)):m&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const D=()=>{p(),ia.delete(n)};D.id=-1,ia.set(n,D),sn(D,e)}else Nu(n),p()}}}function Nu(n){const t=ia.get(n);t&&(t.flags|=8,ia.delete(n))}ya().requestIdleCallback;ya().cancelIdleCallback;const Ur=n=>!!n.type.__asyncLoader,tu=n=>n.type.__isKeepAlive;function Xm(n,t){yh(n,"a",t)}function $m(n,t){yh(n,"da",t)}function yh(n,t,e=He){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ea(t,i,e),e){let s=e.parent;for(;s&&s.parent;)tu(s.parent.vnode)&&Ym(i,t,e,s),s=s.parent}}function Ym(n,t,e,i){const s=Ea(t,n,i,!0);Zr(()=>{Hc(i[t],s)},e)}function Ea(n,t,e=He,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Kn();const a=Jr(e),l=On(t,e,n,o);return a(),Zn(),l});return i?s.unshift(r):s.push(r),r}}const bi=n=>(t,e=He)=>{(!Xr||n==="sp")&&Ea(n,(...i)=>t(...i),e)},jm=bi("bm"),Kr=bi("m"),qm=bi("bu"),Km=bi("u"),Zm=bi("bum"),Zr=bi("um"),Jm=bi("sp"),Qm=bi("rtg"),tg=bi("rtc");function eg(n,t=He){Ea("ec",n,t)}const ng="components";function Mh(n,t){return sg(ng,n,!0,t)||n}const ig=Symbol.for("v-ndc");function sg(n,t,e=!0,i=!1){const s=dn||He;if(s){const r=s.type;{const a=Hg(r,!1);if(a&&(a===t||a===Qe(t)||a===va(Qe(t))))return r}const o=Ou(s[n]||r[n],t)||Ou(s.appContext[n],t);return!o&&i?r:o}}function Ou(n,t){return n&&(n[t]||n[Qe(t)]||n[va(Qe(t))])}function Fi(n,t,e,i){let s;const r=e,o=Wt(n);if(o||Ee(n)){const a=o&&zi(n);let l=!1,c=!1;a&&(l=!vn(n),c=Jn(n),n=Ma(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?Hi(yn(n[u])):yn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(ue(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const kl=n=>n?Gh(n)?Aa(n):kl(n.parent):null,Nr=Fe(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>kl(n.parent),$root:n=>kl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bh(n),$forceUpdate:n=>n.f||(n.f=()=>{Qc(n.update)}),$nextTick:n=>n.n||(n.n=Jc.bind(n.proxy)),$watch:n=>Hm.bind(n)}),Wa=(n,t)=>n!==me&&!n.__isScriptSetup&&se(n,t),rg={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(Wa(i,t))return o[t]=1,i[t];if(s!==me&&se(s,t))return o[t]=2,s[t];if(se(r,t))return o[t]=3,r[t];if(e!==me&&se(e,t))return o[t]=4,e[t];Vl&&(o[t]=0)}}const c=Nr[t];let u,d;if(c)return t==="$attrs"&&Ve(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==me&&se(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,se(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return Wa(s,t)?(s[t]=e,!0):i!==me&&se(i,t)?(i[t]=e,!0):se(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==me&&a[0]!=="$"&&se(n,a)||Wa(t,a)||se(r,a)||se(i,a)||se(Nr,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:se(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Fu(n){return Wt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Vl=!0;function og(n){const t=bh(n),e=n.proxy,i=n.ctx;Vl=!1,t.beforeCreate&&Bu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:v,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:D,destroyed:P,unmounted:T,render:k,renderTracked:V,renderTriggered:N,errorCaptured:I,serverPrefetch:E,expose:w,inheritAttrs:C,components:et,directives:nt,filters:ot}=t;if(c&&ag(c,i,null),o)for(const B in o){const X=o[B];qt(X)&&(i[B]=X.bind(e))}if(s){const B=s.call(e,e);ue(B)&&(n.data=jn(B))}if(Vl=!0,r)for(const B in r){const X=r[B],ht=qt(X)?X.bind(e,e):qt(X.get)?X.get.bind(e,e):Yn,U=!qt(X)&&qt(X.set)?X.set.bind(e):Yn,L=Ze({get:ht,set:U});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>L.value,set:dt=>L.value=dt})}if(a)for(const B in a)Sh(a[B],i,e,B);if(l){const B=qt(l)?l.call(e):l;Reflect.ownKeys(B).forEach(X=>{Go(X,B[X])})}u&&Bu(u,n,"c");function H(B,X){Wt(X)?X.forEach(ht=>B(ht.bind(e))):X&&B(X.bind(e))}if(H(jm,d),H(Kr,f),H(qm,h),H(Km,v),H(Xm,_),H($m,m),H(eg,I),H(tg,V),H(Qm,N),H(Zm,D),H(Zr,T),H(Jm,E),Wt(w))if(w.length){const B=n.exposed||(n.exposed={});w.forEach(X=>{Object.defineProperty(B,X,{get:()=>e[X],set:ht=>e[X]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});k&&n.render===Yn&&(n.render=k),C!=null&&(n.inheritAttrs=C),et&&(n.components=et),nt&&(n.directives=nt),E&&xh(n)}function ag(n,t,e=Yn){Wt(n)&&(n=Hl(n));for(const i in n){const s=n[i];let r;ue(s)?"default"in s?r=Ln(s.from||i,s.default,!0):r=Ln(s.from||i):r=Ln(s),We(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Bu(n,t,e){On(Wt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sh(n,t,e,i){let s=i.includes(".")?_h(e,i):()=>e[i];if(Ee(n)){const r=t[n];qt(r)&&ps(s,r)}else if(qt(n))ps(s,n.bind(e));else if(ue(n))if(Wt(n))n.forEach(r=>Sh(r,t,e,i));else{const r=qt(n.handler)?n.handler.bind(e):t[n.handler];qt(r)&&ps(s,r,n)}}function bh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>sa(l,c,o,!0)),sa(l,t,o)),ue(t)&&r.set(t,l),l}function sa(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&sa(n,r,e,!0),s&&s.forEach(o=>sa(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=lg[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const lg={data:zu,props:ku,emits:ku,methods:Tr,computed:Tr,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Tr,directives:Tr,watch:ug,provide:zu,inject:cg};function zu(n,t){return t?n?function(){return Fe(qt(n)?n.call(this,this):n,qt(t)?t.call(this,this):t)}:t:n}function cg(n,t){return Tr(Hl(n),Hl(t))}function Hl(n){if(Wt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function $e(n,t){return n?[...new Set([].concat(n,t))]:t}function Tr(n,t){return n?Fe(Object.create(null),n,t):t}function ku(n,t){return n?Wt(n)&&Wt(t)?[...new Set([...n,...t])]:Fe(Object.create(null),Fu(n),Fu(t??{})):t}function ug(n,t){if(!n)return t;if(!t)return n;const e=Fe(Object.create(null),n);for(const i in t)e[i]=$e(n[i],t[i]);return e}function Eh(){return{app:null,config:{isNativeTag:Ff,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let dg=0;function fg(n,t){return function(i,s=null){qt(i)||(i=Fe({},i)),s!=null&&!ue(s)&&(s=null);const r=Eh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:dg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Wg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&qt(u.install)?(o.add(u),u.install(c,...d)):qt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||Ue(i,s);return h.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(h,u,f),l=!0,c._container=u,u.__vue_app__=c,Aa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(On(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ys;Ys=c;try{return u()}finally{Ys=d}}};return c}}let Ys=null;const hg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${Qe(t)}Modifiers`]||n[`${xs(t)}Modifiers`];function pg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||me;let s=e;const r=t.startsWith("update:"),o=r&&hg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ee(u)?u.trim():u)),o.number&&(s=s.map(xa)));let a,l=i[a=Fa(t)]||i[a=Fa(Qe(t))];!l&&r&&(l=i[a=Fa(xs(t))]),l&&On(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,On(c,n,6,s)}}const mg=new WeakMap;function Th(n,t,e=!1){const i=e?mg:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qt(n)){const l=c=>{const u=Th(c,t,!0);u&&(a=!0,Fe(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ue(n)&&i.set(n,null),null):(Wt(r)?r.forEach(l=>o[l]=null):Fe(o,r),ue(n)&&i.set(n,o),o)}function Ta(n,t){return!n||!ma(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),se(n,t[0].toLowerCase()+t.slice(1))||se(n,xs(t))||se(n,t))}function Vu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:v,inheritAttrs:_}=n,m=ea(n);let p,D;try{if(e.shapeFlag&4){const T=s||i,k=T;p=Gn(c.call(k,T,u,d,h,f,v)),D=a}else{const T=t;p=Gn(T.length>1?T(d,{attrs:a,slots:o,emit:l}):T(d,null)),D=t.props?a:gg(a)}}catch(T){ms.length=0,Sa(T,n,1),p=Ue(Fn)}let P=p;if(D&&_!==!1){const T=Object.keys(D),{shapeFlag:k}=P;T.length&&k&7&&(r&&T.some(ga)&&(D=_g(D,r)),P=Js(P,D,!1,!0))}if(e.dirs&&(P=Js(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(e.dirs):e.dirs),e.transition){const T=ba(P.type)&&vh(P)||P;na(T,e.transition)}return p=P,ea(m),p}function wh(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Hr(s)){if(s.type!==Fn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const gg=n=>{let t;for(const e in n)(e==="class"||e==="style"||ma(e))&&((t||(t={}))[e]=n[e]);return t},_g=(n,t)=>{const e={};for(const i in n)(!ga(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function vg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Hu(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ah(o,i,f)&&!Ta(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Hu(i,o,c):!0:!!o;return!1}function Hu(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!se(n,r)||Ah(t,n,r)&&!Ta(e,r))return!0}return!1}function Ah(n,t,e){const i=n[e],s=t[e];return e==="style"&&ue(i)&&ue(s)?!Nn(i,s):i!==s}function xg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ch={},Rh=()=>Object.create(Ch),Ph=n=>Object.getPrototypeOf(n)===Ch;function yg(n,t,e,i=!1){const s={},r=Rh();n.propsDefaults=Object.create(null),Dh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:oh(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Mg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=le(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ta(n.emitsOptions,f))continue;const h=t[f];if(l)if(se(r,f))h!==r[f]&&(r[f]=h,c=!0);else{const v=Qe(f);s[v]=Gl(l,a,v,h,n,!1)}else h!==r[f]&&(r[f]=h,c=!0)}}}else{Dh(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!se(t,d)&&((u=xs(d))===d||!se(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Gl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!se(t,d))&&(delete r[d],c=!0)}c&&hi(n.attrs,"set","")}function Dh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Pr(l))continue;const c=t[l];let u;s&&se(s,u=Qe(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ta(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=le(e),c=a||me;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Gl(s,l,d,c[d],n,!se(c,d))}}return o}function Gl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=Jr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===xs(e))&&(i=!0))}return i}const Sg=new WeakMap;function Lh(n,t,e=!1){const i=e?Sg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qt(n)){const u=d=>{l=!0;const[f,h]=Lh(d,t,!0);Fe(o,f),h&&a.push(...h)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ue(n)&&i.set(n,cs),cs;if(Wt(r))for(let u=0;u<r.length;u++){const d=Qe(r[u]);Gu(d)&&(o[d]=me)}else if(r)for(const u in r){const d=Qe(u);if(Gu(d)){const f=r[u],h=o[d]=Wt(f)||qt(f)?{type:f}:Fe({},f),v=h.type;let _=!1,m=!0;if(Wt(v))for(let p=0;p<v.length;++p){const D=v[p],P=qt(D)&&D.name;if(P==="Boolean"){_=!0;break}else P==="String"&&(m=!1)}else _=qt(v)&&v.name==="Boolean";h[0]=_,h[1]=m,(_||se(h,"default"))&&a.push(d)}}const c=[o,a];return ue(n)&&i.set(n,c),c}function Gu(n){return n[0]!=="$"&&!Pr(n)}const eu=n=>n==="_"||n==="_ctx"||n==="$stable",nu=n=>Wt(n)?n.map(Gn):[Gn(n)],bg=(n,t,e)=>{if(t._n)return t;const i=mh((...s)=>nu(t(...s)),e);return i._c=!1,i},Ih=(n,t,e)=>{const i=n._ctx;for(const s in n){if(eu(s))continue;const r=n[s];if(qt(r))t[s]=bg(s,r,i);else if(r!=null){const o=nu(r);t[s]=()=>o}}},Uh=(n,t)=>{const e=nu(t);n.slots.default=()=>e},Nh=(n,t,e)=>{for(const i in t)(e||!eu(i))&&(n[i]=t[i])},Eg=(n,t,e)=>{const i=n.slots=Rh();if(n.vnode.shapeFlag&32){const s=t._;s?(Nh(i,t,e),e&&Vf(i,"_",s,!0)):Ih(t,i)}else t&&Uh(n,t)},Tg=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=me;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Nh(s,t,e):(r=!t.$stable,Ih(t,s)),o=t}else t&&(Uh(n,t),o={default:1});if(r)for(const a in s)!eu(a)&&o[a]==null&&delete s[a]},sn=Pg;function wg(n){return Ag(n)}function Ag(n,t){const e=ya();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Yn,insertStaticContent:v}=n,_=(S,R,z,b=null,Q=null,J=null,st=void 0,rt=null,Z=!!R.dynamicChildren)=>{if(S===R)return;S&&!pr(S,R)&&(b=O(S),dt(S,Q,J,!0),S=null),R.patchFlag===-2&&(Z=!1,R.dynamicChildren=null),R.dynamicChildren&&S&&S.dynamicChildren&&S.dynamicChildren.hasOnce&&(R.dynamicChildren===cs&&(R.dynamicChildren=[]),R.dynamicChildren.hasOnce=!0);const{type:M,ref:y,shapeFlag:g}=R;switch(M){case wa:m(S,R,z,b);break;case Fn:p(S,R,z,b);break;case Wo:S==null&&D(R,z,b,st);break;case Re:et(S,R,z,b,Q,J,st,rt,Z);break;default:g&1?k(S,R,z,b,Q,J,st,rt,Z):g&6?nt(S,R,z,b,Q,J,st,rt,Z):(g&64||g&128)&&M.process(S,R,z,b,Q,J,st,rt,Z,$)}y!=null&&Q?Ir(y,S&&S.ref,J,R||S,!R):y==null&&S&&S.ref!=null&&Ir(S.ref,null,J,S,!0)},m=(S,R,z,b)=>{if(S==null)i(R.el=a(R.children),z,b);else{const Q=R.el=S.el;R.children!==S.children&&c(Q,R.children)}},p=(S,R,z,b)=>{S==null?i(R.el=l(R.children||""),z,b):R.el=S.el},D=(S,R,z,b)=>{[S.el,S.anchor]=v(S.children,R,z,b,S.el,S.anchor)},P=({el:S,anchor:R},z,b)=>{let Q;for(;S&&S!==R;)Q=f(S),i(S,z,b),S=Q;i(R,z,b)},T=({el:S,anchor:R})=>{let z;for(;S&&S!==R;)z=f(S),s(S),S=z;s(R)},k=(S,R,z,b,Q,J,st,rt,Z)=>{if(R.type==="svg"?st="svg":R.type==="math"&&(st="mathml"),S==null)V(R,z,b,Q,J,st,rt,Z);else{const M=S.el&&S.el._isVueCE?S.el:null;try{M&&M._beginPatch(),E(S,R,Q,J,st,rt,Z)}finally{M&&M._endPatch()}}},V=(S,R,z,b,Q,J,st,rt)=>{let Z,M;const{props:y,shapeFlag:g,transition:F,dirs:tt}=S;if(Z=S.el=o(S.type,J,y&&y.is,y),g&8?u(Z,S.children):g&16&&I(S.children,Z,null,b,Q,Xa(S,J),st,rt),tt&&ji(S,null,b,"created"),N(Z,S,S.scopeId,st,b),y){for(const it in y)it!=="value"&&!Pr(it)&&r(Z,it,null,y[it],J,b);"value"in y&&r(Z,"value",null,y.value,J),(M=y.onVnodeBeforeMount)&&kn(M,b,S)}tt&&ji(S,null,b,"beforeMount");const lt=Cg(Q,F);lt&&F.beforeEnter(Z),i(Z,R,z),((M=y&&y.onVnodeMounted)||lt||tt)&&sn(()=>{try{M&&kn(M,b,S),lt&&F.enter(Z),tt&&ji(S,null,b,"mounted")}finally{}},Q)},N=(S,R,z,b,Q)=>{if(z&&h(S,z),b)for(let J=0;J<b.length;J++)h(S,b[J]);if(Q){let J=Q.subTree;if(R===J||Bh(J.type)&&(J.ssContent===R||J.ssFallback===R)){const st=Q.vnode;N(S,st,st.scopeId,st.slotScopeIds,Q.parent)}}},I=(S,R,z,b,Q,J,st,rt,Z=0)=>{for(let M=Z;M<S.length;M++){const y=S[M]=rt?fi(S[M]):Gn(S[M]);_(null,y,R,z,b,Q,J,st,rt)}},E=(S,R,z,b,Q,J,st)=>{const rt=R.el=S.el;let{patchFlag:Z,dynamicChildren:M,dirs:y}=R;Z|=S.patchFlag&16;const g=S.props||me,F=R.props||me;let tt;if(z&&qi(z,!1),(tt=F.onVnodeBeforeUpdate)&&kn(tt,z,R,S),y&&ji(R,S,z,"beforeUpdate"),z&&qi(z,!0),M&&(!S.dynamicChildren||S.dynamicChildren.length!==M.length)&&(Z=0,st=!1,M=null),(g.innerHTML&&F.innerHTML==null||g.textContent&&F.textContent==null)&&u(rt,""),M?w(S.dynamicChildren,M,rt,z,b,Xa(R,Q),J):st||X(S,R,rt,null,z,b,Xa(R,Q),J,!1),Z>0){if(Z&16)C(rt,g,F,z,Q);else if(Z&2&&g.class!==F.class&&r(rt,"class",null,F.class,Q),Z&4&&r(rt,"style",g.style,F.style,Q),Z&8){const lt=R.dynamicProps;for(let it=0;it<lt.length;it++){const wt=lt[it],yt=g[wt],gt=F[wt];(gt!==yt||wt==="value")&&r(rt,wt,yt,gt,Q,z)}}Z&1&&S.children!==R.children&&u(rt,R.children)}else!st&&M==null&&C(rt,g,F,z,Q);((tt=F.onVnodeUpdated)||y)&&sn(()=>{tt&&kn(tt,z,R,S),y&&ji(R,S,z,"updated")},b)},w=(S,R,z,b,Q,J,st)=>{for(let rt=0;rt<R.length;rt++){const Z=S[rt],M=R[rt],y=Z.el||Wl(Z),g=y&&(Z.type===Re||!pr(Z,M)||Z.shapeFlag&198)?d(y):z;_(Z,M,g,null,b,Q,J,st,!0)}},C=(S,R,z,b,Q)=>{if(R!==z){if(R!==me)for(const J in R)!Pr(J)&&!(J in z)&&r(S,J,R[J],null,Q,b);for(const J in z){if(Pr(J))continue;const st=z[J],rt=R[J];st!==rt&&J!=="value"&&r(S,J,rt,st,Q,b)}"value"in z&&r(S,"value",R.value,z.value,Q)}},et=(S,R,z,b,Q,J,st,rt,Z)=>{const M=R.el=S?S.el:a(""),y=R.anchor=S?S.anchor:a("");let{patchFlag:g,dynamicChildren:F,slotScopeIds:tt}=R;tt&&(rt=rt?rt.concat(tt):tt),S==null?(i(M,z,b),i(y,z,b),I(R.children||[],z,y,Q,J,st,rt,Z)):g>0&&g&64&&F&&S.dynamicChildren&&S.dynamicChildren.length===F.length?(w(S.dynamicChildren,F,z,Q,J,st,rt),(R.key!=null||Q&&R===Q.subTree)&&Oh(S,R,!0)):X(S,R,z,y,Q,J,st,rt,Z)},nt=(S,R,z,b,Q,J,st,rt,Z)=>{R.slotScopeIds=rt,S==null?R.shapeFlag&512?Q.ctx.activate(R,z,b,st,Z):ot(R,z,b,Q,J,st,Z):mt(S,R,Z)},ot=(S,R,z,b,Q,J,st)=>{const rt=S.component=Og(S,b,Q);if(tu(S)&&(rt.ctx.renderer=$),Bg(rt,!1,st),rt.asyncDep){if(Q&&Q.registerDep(rt,H,st,J),!S.el){const Z=rt.subTree=Ue(Fn);p(null,Z,R,z),S.placeholder=Z.el}}else H(rt,S,R,z,Q,J,st)},mt=(S,R,z)=>{const b=R.component=S.component;if(vg(S,R,z))if(b.asyncDep&&!b.asyncResolved){R.el=S.el,R.placeholder=S.placeholder,B(b,R,z);return}else b.next=R,b.update();else R.el=S.el,R.placeholder=S.placeholder,b.vnode=R},H=(S,R,z,b,Q,J,st)=>{const rt=()=>{if(S.isMounted){let{next:g,bu:F,u:tt,parent:lt,vnode:it}=S;{const vt=Fh(S);if(vt){g&&(g.el=it.el,B(S,g,st)),vt.asyncDep.then(()=>{sn(()=>{S.isUnmounted||M()},Q)});return}}let wt=g,yt;qi(S,!1),g?(g.el=it.el,B(S,g,st)):g=it,F&&Ho(F),(yt=g.props&&g.props.onVnodeBeforeUpdate)&&kn(yt,lt,g,it),qi(S,!0);const gt=Vu(S),Rt=S.subTree;S.subTree=gt,_(Rt,gt,d(Rt.el),O(Rt),S,Q,J),g.el=gt.el,wt===null&&xg(S,gt.el),tt&&sn(tt,Q),(yt=g.props&&g.props.onVnodeUpdated)&&sn(()=>kn(yt,lt,g,it),Q)}else{let g;const{el:F,props:tt}=R,{bm:lt,m:it,parent:wt,root:yt,type:gt}=S,Rt=Ur(R);qi(S,!1),lt&&Ho(lt),!Rt&&(g=tt&&tt.onVnodeBeforeMount)&&kn(g,wt,R),qi(S,!0);{yt.ce&&yt.ce._hasShadowRoot()&&yt.ce._injectChildStyle(gt,S.parent?S.parent.type:void 0);const vt=S.subTree=Vu(S);_(null,vt,z,b,S,Q,J),R.el=vt.el}if(it&&sn(it,Q),!Rt&&(g=tt&&tt.onVnodeMounted)){const vt=R;sn(()=>kn(g,wt,vt),Q)}(R.shapeFlag&256||wt&&Ur(wt.vnode)&&wt.vnode.shapeFlag&256)&&S.a&&sn(S.a,Q),S.isMounted=!0,R=z=b=null}};S.scope.on();const Z=S.effect=new Xf(rt);S.scope.off();const M=S.update=Z.run.bind(Z),y=S.job=Z.runIfDirty.bind(Z);y.i=S,y.id=S.uid,Z.scheduler=()=>Qc(y),qi(S,!0),M()},B=(S,R,z)=>{R.component=S;const b=S.vnode.props;S.vnode=R,S.next=null,Mg(S,R.props,b,z),Tg(S,R.children,z),Kn(),dh(S),Zn()},X=(S,R,z,b,Q,J,st,rt,Z=!1)=>{const M=S&&S.children,y=S?S.shapeFlag:0,g=R.children,{patchFlag:F,shapeFlag:tt}=R;if(F>0){if(F&128){U(M,g,z,b,Q,J,st,rt,Z);return}else if(F&256){ht(M,g,z,b,Q,J,st,rt,Z);return}}tt&8?(y&16&&_t(M,Q,J),g!==M&&u(z,g)):y&16?tt&16?U(M,g,z,b,Q,J,st,rt,Z):_t(M,Q,J,!0):(y&8&&u(z,""),tt&16&&I(g,z,b,Q,J,st,rt,Z))},ht=(S,R,z,b,Q,J,st,rt,Z)=>{S=S||cs,R=R||cs;const M=S.length,y=R.length,g=Math.min(M,y);let F;for(F=0;F<g;F++){const tt=R[F]=Z?fi(R[F]):Gn(R[F]);_(S[F],tt,z,null,Q,J,st,rt,Z)}M>y?_t(S,Q,J,!0,!1,g):I(R,z,b,Q,J,st,rt,Z,g)},U=(S,R,z,b,Q,J,st,rt,Z)=>{let M=0;const y=R.length;let g=S.length-1,F=y-1;for(;M<=g&&M<=F;){const tt=S[M],lt=R[M]=Z?fi(R[M]):Gn(R[M]);if(pr(tt,lt))_(tt,lt,z,null,Q,J,st,rt,Z);else break;M++}for(;M<=g&&M<=F;){const tt=S[g],lt=R[F]=Z?fi(R[F]):Gn(R[F]);if(pr(tt,lt))_(tt,lt,z,null,Q,J,st,rt,Z);else break;g--,F--}if(M>g){if(M<=F){const tt=F+1,lt=tt<y?R[tt].el:b;for(;M<=F;)_(null,R[M]=Z?fi(R[M]):Gn(R[M]),z,lt,Q,J,st,rt,Z),M++}}else if(M>F)for(;M<=g;)dt(S[M],Q,J,!0),M++;else{const tt=M,lt=M,it=new Map;for(M=lt;M<=F;M++){const It=R[M]=Z?fi(R[M]):Gn(R[M]);It.key!=null&&it.set(It.key,M)}let wt,yt=0;const gt=F-lt+1;let Rt=!1,vt=0;const Tt=new Array(gt);for(M=0;M<gt;M++)Tt[M]=0;for(M=tt;M<=g;M++){const It=S[M];if(yt>=gt){dt(It,Q,J,!0);continue}let Mt;if(It.key!=null)Mt=it.get(It.key);else for(wt=lt;wt<=F;wt++)if(Tt[wt-lt]===0&&pr(It,R[wt])){Mt=wt;break}Mt===void 0?dt(It,Q,J,!0):(Tt[Mt-lt]=M+1,Mt>=vt?vt=Mt:Rt=!0,_(It,R[Mt],z,null,Q,J,st,rt,Z),yt++)}const Ot=Rt?Rg(Tt):cs;for(wt=Ot.length-1,M=gt-1;M>=0;M--){const It=lt+M,Mt=R[It],kt=R[It+1],Nt=It+1<y?kt.el||Wl(kt):b;Tt[M]===0?_(null,Mt,z,Nt,Q,J,st,rt,Z):Rt&&(wt<0||M!==Ot[wt]?L(Mt,z,Nt,2):wt--)}}},L=(S,R,z,b,Q=null)=>{const{el:J,type:st,transition:rt,children:Z,shapeFlag:M}=S;if(M&6){L(S.component.subTree,R,z,b);return}if(M&128){S.suspense.move(R,z,b);return}if(M&64){st.move(S,R,z,$);return}if(st===Re){i(J,R,z);for(let g=0;g<Z.length;g++)L(Z[g],R,z,b);i(S.anchor,R,z);return}if(st===Wo){P(S,R,z);return}if(b!==2&&M&1&&rt)if(b===0)rt.persisted&&!J[Ga]?i(J,R,z):(rt.beforeEnter(J),i(J,R,z),sn(()=>rt.enter(J),Q));else{const{leave:g,delayLeave:F,afterLeave:tt}=rt,lt=()=>{S.ctx.isUnmounted?s(J):i(J,R,z)},it=()=>{const wt=J._isLeaving||!!J[Ga];J._isLeaving&&J[Ga](!0),rt.persisted&&!wt?lt():g(J,()=>{lt(),tt&&tt()})};F?F(J,lt,it):it()}else i(J,R,z)},dt=(S,R,z,b=!1,Q=!1)=>{const{type:J,props:st,ref:rt,children:Z,dynamicChildren:M,shapeFlag:y,patchFlag:g,dirs:F,cacheIndex:tt,memo:lt}=S;if((g===-2||M&&M.hasOnce)&&(Q=!1),rt!=null&&(Kn(),Ir(rt,null,z,S,!0),Zn()),tt!=null&&(!S.ctx||S.ctx===R)&&(R.renderCache[tt]=void 0),y&256){R.ctx.deactivate(S);return}const it=y&1&&F,wt=!Ur(S);let yt;if(wt&&(yt=st&&st.onVnodeBeforeUnmount)&&kn(yt,R,S),y&6)at(S.component,z,b);else{if(y&128){S.suspense.unmount(z,b);return}it&&ji(S,null,R,"beforeUnmount"),y&64?S.type.remove(S,R,z,$,b):M&&!M.hasOnce&&(J!==Re||g>0&&g&64)?_t(M,R,z,!1,!0):(J===Re&&g&384||!Q&&y&16)&&_t(Z,R,z),b&&bt(S)}const gt=lt!=null&&tt==null;(wt&&(yt=st&&st.onVnodeUnmounted)||it||gt)&&sn(()=>{yt&&kn(yt,R,S),it&&ji(S,null,R,"unmounted"),gt&&(S.el=null)},z)},bt=S=>{const{type:R,el:z,anchor:b,transition:Q}=S,J=R===Re;if(J&&!Q){Y(z,b);return}if(R===Wo){T(S),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave();return}const st=J?zl(S):S,rt=()=>{J?d(z)&&Y(z,b):s(z),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(st&&st.shapeFlag&1&&Q&&!Q.persisted){const{leave:Z,delayLeave:M}=Q,y=st.el,g=()=>Z(y,rt);M?M(y,rt,g):g()}else rt()},Y=(S,R)=>{let z;for(;S!==R;)z=f(S),s(S),S=z;s(R)},at=(S,R,z)=>{const{bum:b,scope:Q,job:J,subTree:st,um:rt,m:Z,a:M}=S;Wu(Z),Wu(M),b&&Ho(b),Q.stop(),J?(J.flags|=8,dt(st,S,R,z)):S.vnode.el&&st&&(st.transition=S.vnode.transition,dt(st,S,R,z)),rt&&sn(rt,R),sn(()=>{S.isUnmounted=!0},R)},_t=(S,R,z,b=!1,Q=!1,J=0)=>{for(let st=J;st<S.length;st++)dt(S[st],R,z,b,Q)},O=S=>{if(S.shapeFlag&6)return O(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const R=f(S.anchor||S.el),z=R&&R[Gm];return z?f(z):R},G=(S,R,z)=>{const b=S&&R._vnode?void 0:S&&S.component?S.component.uid:Ng();zm(()=>{S==null?R._vnode&&dt(R._vnode,null,null,!0):_(R._vnode||null,S,R,null,null,null,z),R._vnode=S},b)},$={p:_,um:dt,m:L,r:bt,mt:ot,mc:I,pc:X,pbc:w,n:O,o:n};return{render:G,hydrate:void 0,createApp:fg(G)}}function Xa({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function qi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Cg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Oh(n,t,e=!1){const i=n.children,s=t.children;if(Wt(i)&&Wt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Oh(o,a)),a.type===wa&&(a.patchFlag===-1&&(a=s[r]=fi(a)),a.el=o.el),a.type===Fn&&!a.el&&(a.el=o.el)}}function Rg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Fh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fh(t)}function Wu(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function Wl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?Wl(t.subTree):null}const Bh=n=>n.__isSuspense;function Pg(n,t){t&&t.pendingBranch?Wt(n)?t.effects.push(...n):t.effects.push(n):Bm(n)}const Re=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Fn=Symbol.for("v-cmt"),Wo=Symbol.for("v-stc"),ms=[];let fn=null;function Ht(n=!1){ms.push(fn=n?null:[])}function zh(){ms.pop(),fn=ms[ms.length-1]||null}let Vr=1;function ra(n,t=!1){Vr+=n,n<0&&fn&&t&&(fn.hasOnce=!0)}function kh(n){return n.dynamicChildren=Vr>0?fn||cs:null,zh(),Vr>0&&fn&&fn.push(n),n}function Gt(n,t,e,i,s,r){return kh(x(n,t,e,i,s,r,!0))}function iu(n,t,e,i,s){return kh(Ue(n,t,e,i,s,!0))}function Hr(n){return n?n.__v_isVNode===!0:!1}function pr(n,t){return n.type===t.type&&n.key===t.key}const Vh=({key:n})=>n??null,Xo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ee(n)||We(n)||qt(n)?{i:dn,r:n,k:t,f:!!e}:n:null);function x(n,t=null,e=null,i=0,s=null,r=n===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Vh(t),ref:t&&Xo(t),scopeId:ph,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:dn};return a?(oa(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ee(e)?8:16),Vr>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Ue=Dg;function Dg(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===ig)&&(n=Fn),Hr(n)){const a=Js(n,t,!0);return e&&oa(a,e),Vr>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(n)]=a:fn.push(a)),a.patchFlag=-2,a}if(Gg(n)&&(n=n.__vccOpts),t){t=Lg(t);let{class:a,style:l}=t;a&&!Ee(a)&&(t.class=di(a)),ue(l)&&(Zc(l)&&!Wt(l)&&(l=Fe({},l)),t.style=Ge(l))}const o=Ee(n)?1:Bh(n)?128:ba(n)?64:ue(n)?4:qt(n)?2:0;return x(n,t,e,i,s,o,r,!0)}function Lg(n){return n?Zc(n)||Ph(n)?Fe({},n):n:null}function Js(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ig(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Vh(c),ref:t&&t.ref?e&&r?Wt(r)?r.concat(Xo(t)):[r,Xo(t)]:Xo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Re?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Js(n.ssContent),ssFallback:n.ssFallback&&Js(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&na(u,l.clone(u)),u}function Ut(n=" ",t=0){return Ue(wa,null,n,t)}function Gr(n,t){const e=Ue(Wo,null,n);return e.staticCount=t,e}function Ie(n="",t=!1){return t?(Ht(),iu(Fn,null,n)):Ue(Fn,null,n)}function Gn(n){return n==null||typeof n=="boolean"?Ue(Fn):Wt(n)?Ue(Re,null,n.slice()):Hr(n)?fi(n):Ue(wa,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Js(n)}function oa(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Wt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),oa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Ph(t)?t._ctx=dn:s===3&&dn&&(dn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(qt(t)){if(i&65){oa(n,{default:t});return}t={default:t,_ctx:dn},e=32}else t=String(t),i&64?(e=16,t=[Ut(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ig(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=di([t.class,i.class]));else if(s==="style")t.style=Ge([t.style,i.style]);else if(ma(s)){const r=t[s],o=i[s];o&&r!==o&&!(Wt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ga(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function kn(n,t,e,i=null){On(n,t,7,[e,i])}const Ug=Eh();let Hh=0;function Ng(){return Hh}function Og(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Ug,r={uid:Hh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lh(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:me,inheritAttrs:i.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=pg.bind(null,r),n.ce&&n.ce(r),r}let He=null;const Fg=()=>He||dn;let aa,Wr;{const n=ya(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};aa=t("__VUE_INSTANCE_SETTERS__",e=>He=e),Wr=t("__VUE_SSR_SETTERS__",e=>Xr=e)}const Jr=n=>{const t=He;return aa(n),n.scope.on(),()=>{n.scope.off(),aa(t)}},Xu=()=>{He&&He.scope.off(),aa(null)};function Gh(n){return n.vnode.shapeFlag&4}let Xr=!1;function Bg(n,t=!1,e=!1){t&&Wr(t);const{props:i,children:s}=n.vnode,r=Gh(n);yg(n,i,r,t),Eg(n,s,e||t);const o=r?zg(n,t):void 0;return t&&Wr(!1),o}function zg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,rg);const{setup:i}=e;if(i){Kn();const s=n.setupContext=i.length>1?Vg(n):null,r=Jr(n),o=qr(i,n,0,[n.props,s]),a=Bf(o);if(Zn(),r(),(a||n.sp)&&!Ur(n)&&xh(n),a){if(o.then(Xu,Xu),t)return o.then(l=>{Wr(!0);try{$u(n,l,t)}finally{Wr(!1)}}).catch(l=>{Sa(l,n,0)});n.asyncDep=o}else $u(n,o)}else Wh(n)}function $u(n,t,e){qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:ue(t)&&(n.setupState=lh(t)),Wh(n)}function Wh(n,t,e){const i=n.type;n.render||(n.render=i.render||Yn);{const s=Jr(n);Kn();try{og(n)}finally{Zn(),s()}}}const kg={get(n,t){return Ve(n,"get",""),n[t]}};function Vg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,kg),slots:n.slots,emit:n.emit,expose:t}}function Aa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(lh(Cm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Nr)return Nr[e](n)},has(t,e){return e in t||e in Nr}})):n.proxy}function Hg(n,t=!0){return qt(n)?n.displayName||n.name:n.name||t&&n.__name}function Gg(n){return qt(n)&&"__vccOpts"in n}const Ze=(n,t)=>Im(n,t,Xr);function Xh(n,t,e){try{ra(-1);const i=arguments.length;return i===2?ue(t)&&!Wt(t)?Hr(t)?Ue(n,null,[t]):Ue(n,t):Ue(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Hr(e)&&(e=[e]),Ue(n,t,e))}finally{ra(1)}}const Wg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Xl=Yu.createPolicy("vue",{createHTML:n=>n})}catch{}const $h=Xl?n=>Xl.createHTML(n):n=>n,Xg="http://www.w3.org/2000/svg",$g="http://www.w3.org/1998/Math/MathML",ui=typeof document<"u"?document:null,ju=ui&&ui.createElement("template"),Yg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?ui.createElementNS(Xg,n):t==="mathml"?ui.createElementNS($g,n):e?ui.createElement(n,{is:e}):ui.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ui.createTextNode(n),createComment:n=>ui.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ui.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{ju.innerHTML=$h(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ju.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},jg=Symbol("_vtc");function qg(n,t,e){const i=n[jg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const la=Symbol("_vod"),Yh=Symbol("_vsh"),qu={name:"show",beforeMount(n,{value:t},{transition:e}){n[la]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):mr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),mr(n,!0),i.enter(n)):i.leave(n,()=>{mr(n,!1)}):mr(n,t))},beforeUnmount(n,{value:t}){mr(n,t)}};function mr(n,t){n.style.display=t?n[la]:"none",n[Yh]=!t}const Kg=Symbol(""),Zg=/(?:^|;)\s*display\s*:/;function Jg(n,t,e){const i=n.style,s=Ee(e);let r=!1;if(e&&!s){if(t)if(Ee(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&wr(i,a,"")}else for(const o in t)e[o]==null&&wr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?t_(n,o,!Ee(t)&&t?t[o]:void 0,a)||wr(i,o,a):wr(i,o,"")}}else if(s){if(t!==e){const o=i[Kg];o&&(e+=";"+o),i.cssText=e,r=Zg.test(e)}}else t&&n.removeAttribute("style");la in n&&((!s||t!==e)&&(n[la]=r?i.display:""),n[Yh]&&(i.display="none"))}const ao=/\s*!important$/;function wr(n,t,e){if(Wt(e))e.forEach(i=>wr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))ao.test(e)?n.setProperty(t,e.replace(ao,""),"important"):n.setProperty(t,e);else{const i=Qg(n,t);ao.test(e)?n.setProperty(xs(i),e.replace(ao,""),"important"):n[i]=e}}const Ku=["Webkit","Moz","ms"],$a={};function Qg(n,t){const e=$a[t];if(e)return e;let i=Qe(t);if(i!=="filter"&&i in n)return $a[t]=i;i=va(i);for(let s=0;s<Ku.length;s++){const r=Ku[s]+i;if(r in n)return $a[t]=r}return t}function t_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ee(i)&&e===i}const Zu="http://www.w3.org/1999/xlink";function Ju(n,t,e,i,s,r=am(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Zu,t.slice(6,t.length)):n.setAttributeNS(Zu,t,e):e==null||r&&!Hf(e)?n.removeAttribute(t):n.setAttribute(t,r?"":qn(e)?String(e):e)}function Qu(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?$h(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=Hf(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function mi(n,t,e,i){n.addEventListener(t,e,i)}function e_(n,t,e,i){n.removeEventListener(t,e,i)}const td=Symbol("_vei");function n_(n,t,e,i,s=null){const r=n[td]||(n[td]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=r_(t);if(i){const c=r[t]=l_(i,s);mi(n,a,c,l)}else o&&(e_(n,a,o,l),r[t]=void 0)}}const i_=/(Once|Passive|Capture)$/,s_=/^on:?(?:Once|Passive|Capture)$/;function r_(n){let t,e;for(;(e=n.match(i_))&&!s_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):xs(n.slice(2)),t]}let Ya=0;const o_=Promise.resolve(),a_=()=>Ya||(o_.then(()=>Ya=0),Ya=Date.now());function l_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Wt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&On(c,t,5,a)}}else On(s,t,5,[i])};return e.value=n,e.attached=a_(),e}const ed=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,c_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?qg(n,i,o):t==="style"?Jg(n,e,i):ma(t)?ga(t)||n_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):u_(n,t,i,o))?(Qu(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ju(n,t,i,o,r,t!=="value")):n._isVueCE&&(d_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ee(i)))?Qu(n,Qe(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Ju(n,t,i,o))};function u_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&ed(t)&&qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ed(t)&&Ee(e)?!1:t in n}function d_(n,t){const e=n._def.props;if(!e)return!1;const i=Qe(t);return Array.isArray(e)?e.some(s=>Qe(s)===i):Object.keys(e).some(s=>Qe(s)===i)}const Gi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Wt(t)?e=>Ho(t,e):t};function f_(n){n.target.composing=!0}function nd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const hn=Symbol("_assign"),lo=Symbol("_initialValue");function ja(n,t,e){return t&&(n=n.trim()),e&&(n=xa(n)),n}const cn={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[lo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[lo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[hn]=Gi(s);const r=i||s.props&&s.props.type==="number";mi(n,t?"change":"input",o=>{o.target.composing||n[hn](ja(n.value,e,r))}),(e||r)&&mi(n,"change",()=>{n.value=ja(n.value,e,r)}),t||(mi(n,"compositionstart",f_),mi(n,"compositionend",nd),mi(n,"change",nd))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[lo];delete n[lo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[hn](ja(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[hn]=Gi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?xa(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},is={deep:!0,created(n,t,e){n[hn]=Gi(e),mi(n,"change",()=>{const i=n._modelValue,s=Qs(n),r=n.checked,o=n[hn];if(Wt(i)){const a=Wc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Mi(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(jh(n,r))})},mounted:id,beforeUpdate(n,t,e){n[hn]=Gi(e),id(n,t,e)}};function id(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Wt(t))s=Wc(t,i.props.value)>-1;else if(Mi(t))s=t.has(i.props.value);else{if(t===e)return;s=Nn(t,jh(n,!0))}n.checked!==s&&(n.checked=s)}const sd={created(n,{value:t},e){n.checked=Nn(t,e.props.value),n[hn]=Gi(e),mi(n,"change",()=>{n[hn](Qs(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[hn]=Gi(i),t!==e&&(n.checked=Nn(t,i.props.value))}},$l={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,mi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?xa(Qs(l)):Qs(l)),r=n.multiple,o=r?Mi(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Wt(o)?s.slice():s:o];try{n[hn](o)}finally{Jc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[hn]=Gi(i)},mounted(n,{value:t}){rd(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[hn]=Gi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!h_(t,e[1],e[0]))&&rd(n,t)}};function h_(n,t,e){if(!e||Wt(n))return Nn(n,t);if(Mi(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function rd(n,t){const e=n.multiple,i=Wt(t);if(!(e&&!i&&!Mi(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Qs(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=Wc(t,a)>-1}else o.selected=t.has(a);else if(Nn(Qs(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Qs(n){return"_value"in n?n._value:n.value}function jh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const p_=["ctrl","shift","alt","meta"],m_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>p_.some(e=>n[`${e}Key`]&&!t.includes(e))},rs=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=m_[t[o]];if(a&&a(s,t))return}return n(s,...r)})},g_=Fe({patchProp:c_},Yg);let od;function __(){return od||(od=wg(g_))}const v_=(...n)=>{const t=__().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=y_(i);if(!s)return;const r=t._component;!qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,x_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function x_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function y_(n){return Ee(n)?document.querySelector(n):n}const su=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},M_={};function S_(n,t){const e=Mh("router-view");return Ht(),iu(e)}const b_=su(M_,[["render",S_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Gs=typeof document<"u";function qh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function E_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&qh(n.default)}const ae=Object.assign;function qa(n,t){const e={};for(const i in t){const s=t[i];e[i]=Bn(s)?s.map(n):n(s)}return e}const Or=()=>{},Bn=Array.isArray;function ad(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Kh=/#/g,T_=/&/g,w_=/\//g,A_=/=/g,C_=/\?/g,Zh=/\+/g,R_=/%5B/g,P_=/%5D/g,Jh=/%5E/g,D_=/%60/g,Qh=/%7B/g,L_=/%7C/g,tp=/%7D/g,I_=/%20/g;function ru(n){return n==null?"":encodeURI(""+n).replace(L_,"|").replace(R_,"[").replace(P_,"]")}function U_(n){return ru(n).replace(Qh,"{").replace(tp,"}").replace(Jh,"^")}function Yl(n){return ru(n).replace(Zh,"%2B").replace(I_,"+").replace(Kh,"%23").replace(T_,"%26").replace(D_,"`").replace(Qh,"{").replace(tp,"}").replace(Jh,"^")}function N_(n){return Yl(n).replace(A_,"%3D")}function O_(n){return ru(n).replace(Kh,"%23").replace(C_,"%3F")}function F_(n){return O_(n).replace(w_,"%2F")}function $r(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const B_=/\/$/,z_=n=>n.replace(B_,"");function Ka(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=G_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:$r(o)}}function k_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ld(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function V_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&tr(t.matched[i],e.matched[s])&&ep(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function tr(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function ep(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!H_(n[e],t[e]))return!1;return!0}function H_(n,t){return Bn(n)?cd(n,t):Bn(t)?cd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function cd(n,t){return Bn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function G_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const wi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let jl=function(n){return n.pop="pop",n.push="push",n}({}),Za=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function W_(n){if(!n)if(Gs){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),z_(n)}const X_=/^[^#]+#/;function $_(n,t){return n.replace(X_,"#")+t}function Y_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const Ca=()=>({left:window.scrollX,top:window.scrollY});function j_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=Y_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function ud(n,t){return(history.state?history.state.position-t:-1)+n}const ql=new Map;function q_(n,t){ql.set(n,t)}function K_(n){const t=ql.get(n);return ql.delete(n),t}function Z_(n){return typeof n=="string"||n&&typeof n=="object"}function np(n){return typeof n=="string"||typeof n=="symbol"}let Se=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const ip=Symbol("");Se.MATCHER_NOT_FOUND+"",Se.NAVIGATION_GUARD_REDIRECT+"",Se.NAVIGATION_ABORTED+"",Se.NAVIGATION_CANCELLED+"",Se.NAVIGATION_DUPLICATED+"";function er(n,t){return ae(new Error,{type:n,[ip]:!0},t)}function ii(n,t){return n instanceof Error&&ip in n&&(t==null||!!(n.type&t))}const J_=["params","query","hash"];function Q_(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of J_)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function tv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Zh," "),r=s.indexOf("="),o=$r(r<0?s:s.slice(0,r)),a=r<0?null:$r(s.slice(r+1));if(o in t){let l=t[o];Bn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function dd(n){let t="";for(let e in n){const i=n[e];if(e=N_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(Bn(i)?i.map(s=>s&&Yl(s)):[i&&Yl(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function ev(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=Bn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const nv=Symbol(""),fd=Symbol(""),Ra=Symbol(""),ou=Symbol(""),Kl=Symbol("");function gr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Ui(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(er(Se.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):Z_(f)?l(er(Se.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Ja(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(qh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ui(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=E_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Ui(f,e,i,o,a,s)()}))}}return r}function iv(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>tr(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>tr(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let sv=()=>location.protocol+"//"+location.host;function sp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),ld(a,"")}return ld(e,n)+i+s}function rv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const h=sp(n,location),v=e.value,_=t.value;let m=0;if(f){if(e.value=h,t.value=f,o&&o===v){o=null;return}m=_?f.position-_.position:0}else i(h);s.forEach(p=>{p(e.value,v,{delta:m,type:jl.pop,direction:m?m>0?Za.forward:Za.back:Za.unknown})})};function l(){o=e.value}function c(f){s.push(f);const h=()=>{const v=s.indexOf(f);v>-1&&s.splice(v,1)};return r.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ae({},f.state,{scroll:Ca()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function hd(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?Ca():null}}function ov(n){const{history:t,location:e}=window,i={value:sp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:sv()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(h){console.error(h),e[u?"replace":"assign"](f)}}function o(l,c){r(l,ae({},t.state,hd(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ae({},s.value,t.state,{forward:l,scroll:Ca()});r(u.current,u,!0),r(l,ae({},hd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function av(n){n=W_(n);const t=ov(n),e=rv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ae({location:"",base:n,go:i,createHref:$_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function lv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),av(n)}let us=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Ce=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Ce||{});const cv={type:us.Static,value:""},uv=/[a-zA-Z0-9_]/;function dv(n){if(!n)return[[]];if(n==="/")return[[cv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(h){throw new Error(`ERR (${e})/"${c}": ${h}`)}let e=Ce.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Ce.Static?r.push({type:us.Static,value:c}):e===Ce.Param||e===Ce.ParamRegExp||e===Ce.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:us.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Ce.ParamRegExp){i=e,e=Ce.EscapeNext;continue}switch(e){case Ce.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Ce.Param):f();break;case Ce.EscapeNext:f(),e=i;break;case Ce.Param:l==="("?e=Ce.ParamRegExp:uv.test(l)?f():(d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ce.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Ce.ParamRegExpEnd:u+=l;break;case Ce.ParamRegExpEnd:d(),e=Ce.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Ce.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const pd="[^/]+?",fv={sensitive:!1,strict:!1,start:!0,end:!0};var je=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(je||{});const hv=/[.+*?^${}()[\]/\\]/g;function pv(n,t){const e=ae({},fv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[je.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=je.Segment+(e.sensitive?je.BonusCaseSensitive:0);if(f.type===us.Static)d||(s+="/"),s+=f.value.replace(hv,"\\$&"),h+=je.Static;else if(f.type===us.Param){const{value:v,repeatable:_,optional:m,regexp:p}=f;r.push({name:v,repeatable:_,optional:m});const D=p||pd;if(D!==pd){h+=je.BonusCustomRegExp;try{`${D}`}catch(T){throw new Error(`Invalid custom RegExp for param "${v}" (${D}): `+T.message)}}let P=_?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(P=m&&c.length<2?`(?:/${P})`:"/"+P),m&&(P+="?"),s+=P,h+=je.Dynamic,m&&(h+=je.BonusOptional),_&&(h+=je.BonusRepeatable),D===".*"&&(h+=je.BonusWildcard)}u.push(h)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=je.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",v=r[f-1];d[v.name]=h&&v.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===us.Static)u+=h.value;else if(h.type===us.Param){const{value:v,repeatable:_,optional:m}=h,p=v in c?c[v]:"";if(Bn(p)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const D=Bn(p)?p.join("/"):p;if(!D)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=D}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function mv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===je.Static+je.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===je.Static+je.Segment?1:-1:0}function rp(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=mv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(md(i))return 1;if(md(s))return-1}return s.length-i.length}function md(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const gv={strict:!1,end:!0,sensitive:!1};function _v(n,t,e){const i=pv(dv(n.path),e),s=ae(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function vv(n,t){const e=[],i=new Map;t=ad(gv,t);function s(d){return i.get(d)}function r(d,f,h){const v=!h,_=_d(d);_.aliasOf=h&&h.record;const m=ad(t,d),p=[_];if("alias"in d){const T=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of T)p.push(_d(ae({},_,{components:h?h.record.components:_.components,path:k,aliasOf:h?h.record:_})))}let D,P;for(const T of p){const{path:k}=T;if(f&&k[0]!=="/"){const V=f.record.path,N=V[V.length-1]==="/"?"":"/";T.path=f.record.path+(k&&N+k)}if(D=_v(T,f,m),h?h.alias.push(D):(P=P||D,P!==D&&P.alias.push(D),v&&d.name&&!vd(D)&&o(d.name)),op(D)&&l(D),_.children){const V=_.children;for(let N=0;N<V.length;N++)r(V[N],D,h&&h.children[N])}h=h||D}return P?()=>{o(P)}:Or}function o(d){if(np(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Mv(d,e);e.splice(f,0,d),d.record.name&&!vd(d)&&i.set(d.record.name,d)}function c(d,f){let h,v={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw er(Se.MATCHER_NOT_FOUND,{location:d});m=h.record.name,v=ae(gd(f.params,h.keys.filter(P=>!P.optional).concat(h.parent?h.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),d.params&&gd(d.params,h.keys.map(P=>P.name))),_=h.stringify(v)}else if(d.path!=null)_=d.path,h=e.find(P=>P.re.test(_)),h&&(v=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):e.find(P=>P.re.test(f.path)),!h)throw er(Se.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,v=ae({},f.params,d.params),_=h.stringify(v)}const p=[];let D=h;for(;D;)p.unshift(D.record),D=D.parent;return{name:m,path:_,params:v,matched:p,meta:yv(p)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function gd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function _d(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:xv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function xv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function vd(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function yv(n){return n.reduce((t,e)=>ae(t,e.meta),{})}function Mv(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;rp(n,t[r])<0?i=r:e=r+1}const s=Sv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function Sv(n){let t=n;for(;t=t.parent;)if(op(t)&&rp(n,t)===0)return t}function op({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function xd(n){const t=Ln(Ra),e=Ln(ou),i=Ze(()=>{const l=Te(n.to);return t.resolve(l)}),s=Ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(tr.bind(null,u));if(f>-1)return f;const h=yd(l[c-2]);return c>1&&yd(u)===h&&d[d.length-1].path!==h?d.findIndex(tr.bind(null,l[c-2])):f}),r=Ze(()=>s.value>-1&&Av(e.params,i.value.params)),o=Ze(()=>s.value>-1&&s.value===e.matched.length-1&&ep(e.params,i.value.params));function a(l={}){if(wv(l)){const c=t[Te(n.replace)?"replace":"push"](Te(n.to)).catch(Or);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Ze(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function bv(n){return n.length===1?n[0]:n}const Ev=$i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:xd,setup(n,{slots:t}){const e=jn(xd(n)),{options:i}=Ln(Ra),s=Ze(()=>({[Md(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[Md(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&bv(t.default(e));return n.custom?r:Xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Tv=Ev;function wv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Av(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!Bn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function yd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Md=(n,t,e)=>n??t??e,Cv=$i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Ln(Kl),s=Ze(()=>n.route||i.value),r=Ln(fd,0),o=Ze(()=>{let c=Te(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ze(()=>s.value.matched[o.value]);Go(fd,Ze(()=>o.value+1)),Go(nv,a),Go(Kl,s);const l=ne();return ps(()=>[l.value,a.value,n.name],([c,u,d],[f,h,v])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!tr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Sd(e.default,{Component:f,route:c});const h=d.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Xh(f,ae({},v,t,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Sd(e.default,{Component:m,route:c})||m}}});function Sd(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Rv=Cv;function Pv(n){const t=vv(n.routes,n),e=n.parseQuery||tv,i=n.stringifyQuery||dd,s=n.history,r=gr(),o=gr(),a=gr(),l=Rm(wi);let c=wi;Gs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qa.bind(null,O=>""+O),d=qa.bind(null,F_),f=qa.bind(null,$r);function h(O,G){let $,ct;return np(O)?($=t.getRecordMatcher(O),ct=G):ct=O,t.addRoute(ct,$)}function v(O){const G=t.getRecordMatcher(O);G&&t.removeRoute(G)}function _(){return t.getRoutes().map(O=>O.record)}function m(O){return!!t.getRecordMatcher(O)}function p(O,G){if(G=ae({},G||l.value),typeof O=="string"){const b=Ka(e,O,G.path),Q=t.resolve({path:b.path},G),J=s.createHref(b.fullPath);return ae(b,Q,{params:f(Q.params),hash:$r(b.hash),redirectedFrom:void 0,href:J})}let $;if(O.path!=null)$=ae({},O,{path:Ka(e,O.path,G.path).path});else{const b=ae({},O.params);for(const Q in b)b[Q]==null&&delete b[Q];$=ae({},O,{params:d(b)}),G.params=d(G.params)}const ct=t.resolve($,G),S=O.hash||"";ct.params=u(f(ct.params));const R=k_(i,ae({},O,{hash:U_(S),path:ct.path})),z=s.createHref(R);return ae({fullPath:R,hash:S,query:i===dd?ev(O.query):O.query||{}},ct,{redirectedFrom:void 0,href:z})}function D(O){return typeof O=="string"?Ka(e,O,l.value.path):ae({},O)}function P(O,G){if(c!==O)return er(Se.NAVIGATION_CANCELLED,{from:G,to:O})}function T(O){return N(O)}function k(O){return T(ae(D(O),{replace:!0}))}function V(O,G){const $=O.matched[O.matched.length-1];if($&&$.redirect){const{redirect:ct}=$;let S=typeof ct=="function"?ct(O,G):ct;return typeof S=="string"&&(S=S.includes("?")||S.includes("#")?S=D(S):{path:S},S.params={}),ae({query:O.query,hash:O.hash,params:S.path!=null?{}:O.params},S)}}function N(O,G){const $=c=p(O),ct=l.value,S=O.state,R=O.force,z=O.replace===!0,b=V($,ct);if(b)return N(ae(D(b),{state:typeof b=="object"?ae({},S,b.state):S,force:R,replace:z}),G||$);const Q=$;Q.redirectedFrom=G;let J;return!R&&V_(i,ct,$)&&(J=er(Se.NAVIGATION_DUPLICATED,{to:Q,from:ct}),L(ct,ct,!0,!1)),(J?Promise.resolve(J):w(Q,ct)).catch(st=>ii(st)?ii(st,Se.NAVIGATION_GUARD_REDIRECT)?st:U(st):X(st,Q,ct)).then(st=>{if(st){if(ii(st,Se.NAVIGATION_GUARD_REDIRECT))return N(ae({replace:z},D(st.to),{state:typeof st.to=="object"?ae({},S,st.to.state):S,force:R}),G||Q)}else st=et(Q,ct,!0,z,S);return C(Q,ct,st),st})}function I(O,G){const $=P(O,G);return $?Promise.reject($):Promise.resolve()}function E(O){const G=Y.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(O):O()}function w(O,G){let $;const[ct,S,R]=iv(O,G);$=Ja(ct.reverse(),"beforeRouteLeave",O,G);for(const b of ct)b.leaveGuards.forEach(Q=>{$.push(Ui(Q,O,G))});const z=I.bind(null,O,G);return $.push(z),_t($).then(()=>{$=[];for(const b of r.list())$.push(Ui(b,O,G));return $.push(z),_t($)}).then(()=>{$=Ja(S,"beforeRouteUpdate",O,G);for(const b of S)b.updateGuards.forEach(Q=>{$.push(Ui(Q,O,G))});return $.push(z),_t($)}).then(()=>{$=[];for(const b of R)if(b.beforeEnter)if(Bn(b.beforeEnter))for(const Q of b.beforeEnter)$.push(Ui(Q,O,G));else $.push(Ui(b.beforeEnter,O,G));return $.push(z),_t($)}).then(()=>(O.matched.forEach(b=>b.enterCallbacks={}),$=Ja(R,"beforeRouteEnter",O,G,E),$.push(z),_t($))).then(()=>{$=[];for(const b of o.list())$.push(Ui(b,O,G));return $.push(z),_t($)}).catch(b=>ii(b,Se.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function C(O,G,$){a.list().forEach(ct=>E(()=>ct(O,G,$)))}function et(O,G,$,ct,S){const R=P(O,G);if(R)return R;const z=G===wi,b=Gs?history.state:{};$&&(ct||z?s.replace(O.fullPath,ae({scroll:z&&b&&b.scroll},S)):s.push(O.fullPath,S)),l.value=O,L(O,G,$,z),U()}let nt;function ot(){nt||(nt=s.listen((O,G,$)=>{if(!at.listening)return;const ct=p(O),S=V(ct,at.currentRoute.value);if(S){N(ae(S,{replace:!0,force:!0}),ct).catch(Or);return}c=ct;const R=l.value;Gs&&q_(ud(R.fullPath,$.delta),Ca()),w(ct,R).catch(z=>ii(z,Se.NAVIGATION_ABORTED|Se.NAVIGATION_CANCELLED)?z:ii(z,Se.NAVIGATION_GUARD_REDIRECT)?(N(ae(D(z.to),{force:!0}),ct).then(b=>{ii(b,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&!$.delta&&$.type===jl.pop&&s.go(-1,!1)}).catch(Or),Promise.reject()):($.delta&&s.go(-$.delta,!1),X(z,ct,R))).then(z=>{z=z||et(ct,R,!1),z&&($.delta&&!ii(z,Se.NAVIGATION_CANCELLED)?s.go(-$.delta,!1):$.type===jl.pop&&ii(z,Se.NAVIGATION_ABORTED|Se.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),C(ct,R,z)}).catch(Or)}))}let mt=gr(),H=gr(),B;function X(O,G,$){U(O);const ct=H.list();return ct.length?ct.forEach(S=>S(O,G,$)):console.error(O),Promise.reject(O)}function ht(){return B&&l.value!==wi?Promise.resolve():new Promise((O,G)=>{mt.add([O,G])})}function U(O){return B||(B=!O,ot(),mt.list().forEach(([G,$])=>O?$(O):G()),mt.reset()),O}function L(O,G,$,ct){const{scrollBehavior:S}=n;if(!Gs||!S)return Promise.resolve();const R=!$&&K_(ud(O.fullPath,0))||(ct||!$)&&history.state&&history.state.scroll||null;return Jc().then(()=>S(O,G,R)).then(z=>z&&j_(z)).catch(z=>X(z,O,G))}const dt=O=>s.go(O);let bt;const Y=new Set,at={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:n,push:T,replace:k,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:ht,install(O){O.component("RouterLink",Tv),O.component("RouterView",Rv),O.config.globalProperties.$router=at,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(l)}),Gs&&!bt&&l.value===wi&&(bt=!0,T(s.location).catch(ct=>{}));const G={};for(const ct in wi)Object.defineProperty(G,ct,{get:()=>l.value[ct],enumerable:!0});O.provide(Ra,at),O.provide(ou,oh(G)),O.provide(Kl,l);const $=O.unmount;Y.add(O),O.unmount=function(){Y.delete(O),Y.size<1&&(c=wi,nt&&nt(),nt=null,l.value=wi,bt=!1,B=!1),$()}}};function _t(O){return O.reduce((G,$)=>G.then(()=>E($)),Promise.resolve())}return at}function Dv(){return Ln(Ra)}function Lv(n){return Ln(ou)}var au={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var U=new OffscreenCanvas(1,1),L=U.getContext("2d");L.fillRect(0,0,1,1);var dt=U.transferToImageBitmap();L.createPattern(dt,"no-repeat")}catch{return!1}return!0}();function l(){}function c(U){var L=e.exports.Promise,dt=L!==void 0?L:t.Promise;return typeof dt=="function"?new dt(U):(U(l,l),null)}var u=function(U,L){return{transform:function(dt){if(U)return dt;if(L.has(dt))return L.get(dt);var bt=new OffscreenCanvas(dt.width,dt.height),Y=bt.getContext("2d");return Y.drawImage(dt,0,0),L.set(dt,bt),bt},clear:function(){L.clear()}}}(a,new Map),d=function(){var U=Math.floor(16.666666666666668),L,dt,bt={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(L=function(at){var _t=Math.random();return bt[_t]=requestAnimationFrame(function O(G){Y===G||Y+U-1<G?(Y=G,delete bt[_t],at()):bt[_t]=requestAnimationFrame(O)}),_t},dt=function(at){bt[at]&&cancelAnimationFrame(bt[at])}):(L=function(at){return setTimeout(at,U)},dt=function(at){return clearTimeout(at)}),{frame:L,cancel:dt}}(),f=function(){var U,L,dt={};function bt(Y){function at(_t,O){Y.postMessage({options:_t||{},callback:O})}Y.init=function(O){var G=O.transferControlToOffscreen();Y.postMessage({canvas:G},[G])},Y.fire=function(O,G,$){if(L)return at(O,null),L;var ct=Math.random().toString(36).slice(2);return L=c(function(S){function R(z){z.data.callback===ct&&(delete dt[ct],Y.removeEventListener("message",R),L=null,u.clear(),$(),S())}Y.addEventListener("message",R),at(O,ct),dt[ct]=R.bind(null,{data:{callback:ct}})}),L},Y.reset=function(){Y.postMessage({reset:!0});for(var O in dt)dt[O](),delete dt[O]}}return function(){if(U)return U;if(!i&&r){var Y=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([Y])))}catch(at){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",at),null}bt(U)}return U}}(),h={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(U,L){return L?L(U):U}function _(U){return U!=null}function m(U,L,dt){return v(U&&_(U[L])?U[L]:h[L],dt)}function p(U){return U<0?0:Math.floor(U)}function D(U,L){return Math.floor(Math.random()*(L-U))+U}function P(U){return parseInt(U,16)}function T(U){return U.map(k)}function k(U){var L=String(U).replace(/[^0-9a-f]/gi,"");return L.length<6&&(L=L[0]+L[0]+L[1]+L[1]+L[2]+L[2]),{r:P(L.substring(0,2)),g:P(L.substring(2,4)),b:P(L.substring(4,6))}}function V(U){var L=m(U,"origin",Object);return L.x=m(L,"x",Number),L.y=m(L,"y",Number),L}function N(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function I(U){var L=U.getBoundingClientRect();U.width=L.width,U.height=L.height}function E(U){var L=document.createElement("canvas");return L.style.position="fixed",L.style.top="0px",L.style.left="0px",L.style.pointerEvents="none",L.style.zIndex=U,L}function w(U,L,dt,bt,Y,at,_t,O,G){U.save(),U.translate(L,dt),U.rotate(at),U.scale(bt,Y),U.arc(0,0,1,_t,O,G),U.restore()}function C(U){var L=U.angle*(Math.PI/180),dt=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-L+(.5*dt-Math.random()*dt),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function et(U,L){L.x+=Math.cos(L.angle2D)*L.velocity+L.drift,L.y+=Math.sin(L.angle2D)*L.velocity+L.gravity,L.velocity*=L.decay,L.flat?(L.wobble=0,L.wobbleX=L.x+10*L.scalar,L.wobbleY=L.y+10*L.scalar,L.tiltSin=0,L.tiltCos=0,L.random=1):(L.wobble+=L.wobbleSpeed,L.wobbleX=L.x+10*L.scalar*Math.cos(L.wobble),L.wobbleY=L.y+10*L.scalar*Math.sin(L.wobble),L.tiltAngle+=.1,L.tiltSin=Math.sin(L.tiltAngle),L.tiltCos=Math.cos(L.tiltAngle),L.random=Math.random()+2);var dt=L.tick++/L.totalTicks,bt=L.x+L.random*L.tiltCos,Y=L.y+L.random*L.tiltSin,at=L.wobbleX+L.random*L.tiltCos,_t=L.wobbleY+L.random*L.tiltSin;if(U.fillStyle="rgba("+L.color.r+", "+L.color.g+", "+L.color.b+", "+(1-dt)+")",U.beginPath(),o&&L.shape.type==="path"&&typeof L.shape.path=="string"&&Array.isArray(L.shape.matrix))U.fill(B(L.shape.path,L.shape.matrix,L.x,L.y,Math.abs(at-bt)*.1,Math.abs(_t-Y)*.1,Math.PI/10*L.wobble));else if(L.shape.type==="bitmap"){var O=Math.PI/10*L.wobble,G=Math.abs(at-bt)*.1,$=Math.abs(_t-Y)*.1,ct=L.shape.bitmap.width*L.scalar,S=L.shape.bitmap.height*L.scalar,R=new DOMMatrix([Math.cos(O)*G,Math.sin(O)*G,-Math.sin(O)*$,Math.cos(O)*$,L.x,L.y]);R.multiplySelf(new DOMMatrix(L.shape.matrix));var z=U.createPattern(u.transform(L.shape.bitmap),"no-repeat");z.setTransform(R),U.globalAlpha=1-dt,U.fillStyle=z,U.fillRect(L.x-ct/2,L.y-S/2,ct,S),U.globalAlpha=1}else if(L.shape==="circle")U.ellipse?U.ellipse(L.x,L.y,Math.abs(at-bt)*L.ovalScalar,Math.abs(_t-Y)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI):w(U,L.x,L.y,Math.abs(at-bt)*L.ovalScalar,Math.abs(_t-Y)*L.ovalScalar,Math.PI/10*L.wobble,0,2*Math.PI);else if(L.shape==="star")for(var b=Math.PI/2*3,Q=4*L.scalar,J=8*L.scalar,st=L.x,rt=L.y,Z=5,M=Math.PI/Z;Z--;)st=L.x+Math.cos(b)*J,rt=L.y+Math.sin(b)*J,U.lineTo(st,rt),b+=M,st=L.x+Math.cos(b)*Q,rt=L.y+Math.sin(b)*Q,U.lineTo(st,rt),b+=M;else U.moveTo(Math.floor(L.x),Math.floor(L.y)),U.lineTo(Math.floor(L.wobbleX),Math.floor(Y)),U.lineTo(Math.floor(at),Math.floor(_t)),U.lineTo(Math.floor(bt),Math.floor(L.wobbleY));return U.closePath(),U.fill(),L.tick<L.totalTicks}function nt(U,L,dt,bt,Y){var at=L.slice(),_t=U.getContext("2d"),O,G,$=c(function(ct){function S(){O=G=null,_t.clearRect(0,0,bt.width,bt.height),u.clear(),Y(),ct()}function R(){i&&!(bt.width===s.width&&bt.height===s.height)&&(bt.width=U.width=s.width,bt.height=U.height=s.height),!bt.width&&!bt.height&&(dt(U),bt.width=U.width,bt.height=U.height),_t.clearRect(0,0,bt.width,bt.height),at=at.filter(function(z){return et(_t,z)}),at.length?O=d.frame(R):S()}O=d.frame(R),G=S});return{addFettis:function(ct){return at=at.concat(ct),$},canvas:U,promise:$,reset:function(){O&&d.cancel(O),G&&G()}}}function ot(U,L){var dt=!U,bt=!!m(L||{},"resize"),Y=!1,at=m(L,"disableForReducedMotion",Boolean),_t=r&&!!m(L||{},"useWorker"),O=_t?f():null,G=dt?N:I,$=U&&O?!!U.__confetti_initialized:!1,ct=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,S;function R(b,Q,J){for(var st=m(b,"particleCount",p),rt=m(b,"angle",Number),Z=m(b,"spread",Number),M=m(b,"startVelocity",Number),y=m(b,"decay",Number),g=m(b,"gravity",Number),F=m(b,"drift",Number),tt=m(b,"colors",T),lt=m(b,"ticks",Number),it=m(b,"shapes"),wt=m(b,"scalar"),yt=!!m(b,"flat"),gt=V(b),Rt=st,vt=[],Tt=U.width*gt.x,Ot=U.height*gt.y;Rt--;)vt.push(C({x:Tt,y:Ot,angle:rt,spread:Z,startVelocity:M,color:tt[Rt%tt.length],shape:it[D(0,it.length)],ticks:lt,decay:y,gravity:g,drift:F,scalar:wt,flat:yt}));return S?S.addFettis(vt):(S=nt(U,vt,G,Q,J),S.promise)}function z(b){var Q=at||m(b,"disableForReducedMotion",Boolean),J=m(b,"zIndex",Number);if(Q&&ct)return c(function(M){M()});dt&&S?U=S.canvas:dt&&!U&&(U=E(J),document.body.appendChild(U)),bt&&!$&&G(U);var st={width:U.width,height:U.height};O&&!$&&O.init(U),$=!0,O&&(U.__confetti_initialized=!0);function rt(){if(O){var M={getBoundingClientRect:function(){if(!dt)return U.getBoundingClientRect()}};G(M),O.postMessage({resize:{width:M.width,height:M.height}});return}st.width=st.height=null}function Z(){S=null,bt&&(Y=!1,t.removeEventListener("resize",rt)),dt&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,$=!1)}return bt&&!Y&&(Y=!0,t.addEventListener("resize",rt,!1)),O?O.fire(b,st,Z):R(b,st,Z)}return z.reset=function(){O&&O.reset(),S&&S.reset()},z}var mt;function H(){return mt||(mt=ot(null,{useWorker:!0,resize:!0})),mt}function B(U,L,dt,bt,Y,at,_t){var O=new Path2D(U),G=new Path2D;G.addPath(O,new DOMMatrix(L));var $=new Path2D;return $.addPath(G,new DOMMatrix([Math.cos(_t)*Y,Math.sin(_t)*Y,-Math.sin(_t)*at,Math.cos(_t)*at,dt,bt])),$}function X(U){if(!o)throw new Error("path confetti are not supported in this browser");var L,dt;typeof U=="string"?L=U:(L=U.path,dt=U.matrix);var bt=new Path2D(L),Y=document.createElement("canvas"),at=Y.getContext("2d");if(!dt){for(var _t=1e3,O=_t,G=_t,$=0,ct=0,S,R,z=0;z<_t;z+=2)for(var b=0;b<_t;b+=2)at.isPointInPath(bt,z,b,"nonzero")&&(O=Math.min(O,z),G=Math.min(G,b),$=Math.max($,z),ct=Math.max(ct,b));S=$-O,R=ct-G;var Q=10,J=Math.min(Q/S,Q/R);dt=[J,0,0,J,-Math.round(S/2+O)*J,-Math.round(R/2+G)*J]}return{type:"path",path:L,matrix:dt}}function ht(U){var L,dt=1,bt="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?L=U:(L=U.text,dt="scalar"in U?U.scalar:dt,Y="fontFamily"in U?U.fontFamily:Y,bt="color"in U?U.color:bt);var at=10*dt,_t=""+at+"px "+Y,O=new OffscreenCanvas(at,at),G=O.getContext("2d");G.font=_t;var $=G.measureText(L),ct=Math.ceil($.actualBoundingBoxRight+$.actualBoundingBoxLeft),S=Math.ceil($.actualBoundingBoxAscent+$.actualBoundingBoxDescent),R=2,z=$.actualBoundingBoxLeft+R,b=$.actualBoundingBoxAscent+R;ct+=R+R,S+=R+R,O=new OffscreenCanvas(ct,S),G=O.getContext("2d"),G.font=_t,G.fillStyle=bt,G.fillText(L,z,b);var Q=1/dt;return{type:"bitmap",bitmap:O.transferToImageBitmap(),matrix:[Q,0,0,Q,-ct*Q/2,-S*Q/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=ot,e.exports.shapeFromPath=X,e.exports.shapeFromText=ht})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),au,!1);const Iv=au.exports;au.exports.create;const Uv={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden","user-select":"none"}},Nv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px",gap:"8px"}},Ov={style:{display:"flex","align-items":"center",gap:"12px","font-size":"11px","font-weight":"bold","white-space":"nowrap"}},Fv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 电源输入电压"},Bv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 芯片输出电压"},zv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 电源输入电流"},kv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 芯片负载电流"},Vv={style:{height:"30px","background-color":"#15191e","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-size":"11px",gap:"12px","overflow-x":"auto"}},Hv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Gv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Wv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #1e3a8a"}},Xv=["disabled"],$v=["disabled"],Yv={style:{display:"flex","align-items":"center",gap:"2px"}},jv=["onClick","title"],qv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Kv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Zv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #065f46"}},Jv=["disabled"],Qv=["disabled"],t0={style:{display:"flex","align-items":"center",gap:"2px"}},e0=["onClick","title"],n0={style:{"font-weight":"bold","border-bottom":"1px solid #2d3748","padding-bottom":"2px","margin-bottom":"3px",display:"flex","justify-content":"space-between",gap:"10px"}},i0={style:{color:"#94a3b8"}},s0={style:{color:"#ecc94b"}},r0={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"2px 10px"}},co=300,o0=$i({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=ne(null),s=ne(null),r=jn({vin:!0,vout:!0,iin:!0,iout:!0}),o=jn({auto:!0,min:0,max:20}),a=jn({auto:!0,min:0,max:5});function l(N){o.auto=!1,o.min=0,o.max=N}function c(N){a.auto=!1,a.min=0,a.max=N}const u=[];let d=0;const f=ne(null),h=ne(0),v=ne(0);function _(N){u.push(N),u.length>co&&u.shift()}ps(()=>e.latestSample,N=>{N&&_(N)});function m(){const N=s.value;if(!N||!i.value)return;const I=i.value.clientWidth,E=i.value.clientHeight;if(I===0||E===0)return;const w=window.devicePixelRatio||1;N.width=Math.floor(I*w),N.height=Math.floor(E*w);const C=N.getContext("2d");if(!C)return;C.scale(w,w),C.fillStyle="#121519",C.fillRect(0,0,I,E);const et=52,nt=52,ot=22,mt=22,H=I-et-nt,B=E-ot-mt;if(H<=10||B<=10)return;let X=o.min,ht=o.max;if(o.auto){let G=10,$=0;if(u.length>0){let ct=0,S=0;if(u.forEach(R=>{r.vin&&(R.vin>ct&&(ct=R.vin),R.vin<S&&(S=R.vin)),r.vout&&(R.vout>ct&&(ct=R.vout),R.vout<S&&(S=R.vout))}),ct>0){const R=ct*1.15;R<=15?G=Math.max(5,Math.ceil(R)):R<=30?G=Math.ceil(R/5)*5:R<=100?G=Math.ceil(R/10)*10:G=Math.ceil(R/20)*20}}X=$,ht=G,o.min=X,o.max=ht}ht<=X&&(ht=X+1);const U=ht-X;let L=a.min,dt=a.max;if(a.auto){let G=3,$=0;if(u.length>0){let ct=0,S=0;if(u.forEach(R=>{r.iin&&(R.iin>ct&&(ct=R.iin),R.iin<S&&(S=R.iin)),r.iout&&(R.iout>ct&&(ct=R.iout),R.iout<S&&(S=R.iout))}),ct>0){const R=ct*1.2;R<=2?G=Math.max(.5,Math.ceil(R*10)/10):R<=10?G=Math.ceil(R):G=Math.ceil(R/2)*2}}L=$,dt=G,a.min=L,a.max=dt}dt<=L&&(dt=L+.1);const bt=dt-L,Y=5,at=8;C.strokeStyle="#1e293b",C.lineWidth=1,C.setLineDash([3,3]);for(let G=0;G<=Y;G++){const $=ot+B/Y*G;C.beginPath(),C.moveTo(et,$),C.lineTo(et+H,$),C.stroke()}for(let G=0;G<=at;G++){const $=et+H/at*G;C.beginPath(),C.moveTo($,ot),C.lineTo($,ot+B),C.stroke()}C.setLineDash([]),C.strokeStyle="#334155",C.lineWidth=1,C.strokeRect(et,ot,H,B),C.font='10px "Consolas", monospace',C.textAlign="right",C.textBaseline="middle",C.fillStyle="#38bdf8";for(let G=0;G<=Y;G++){const $=ot+B/Y*G,ct=ht-U/Y*G,S=U>=10?`${ct.toFixed(1)}V`:`${ct.toFixed(2)}V`;C.fillText(S,et-6,$),C.strokeStyle="#0284c7",C.beginPath(),C.moveTo(et-4,$),C.lineTo(et,$),C.stroke()}C.textAlign="left",C.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',C.fillStyle="#00d2ff",C.fillText("⚡ 电压 (V)",et-34,ot-8),C.font='10px "Consolas", monospace',C.textAlign="left",C.textBaseline="middle",C.fillStyle="#34d399";for(let G=0;G<=Y;G++){const $=ot+B/Y*G,ct=dt-bt/Y*G,S=bt>=5?`${ct.toFixed(2)}A`:`${ct.toFixed(3)}A`;C.fillText(S,et+H+6,$),C.strokeStyle="#059669",C.beginPath(),C.moveTo(et+H,$),C.lineTo(et+H+4,$),C.stroke()}if(C.textAlign="right",C.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',C.fillStyle="#06d6a0",C.fillText("🔋 电流 (A)",et+H+34,ot-8),C.font='10px "Consolas", monospace',C.fillStyle="#64748b",C.textAlign="center",C.textBaseline="top",u.length>1){const G=u[0].t,$=u[u.length-1].t,ct=Math.max(.1,($-G)/1e3);for(let S=0;S<=at;S+=2){const R=et+H/at*S,z=ct*(1-S/at),b=S===at?"0.0s":`-${z.toFixed(1)}s`;C.fillText(b,R,ot+B+5)}}else C.fillText("时间轴 (Time)",et+H/2,ot+B+5);if(u.length<2){C.fillStyle="#475569",C.font='12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',C.textAlign="center",C.textBaseline="middle",C.fillText("⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...",et+H/2,ot+B/2);return}C.save(),C.beginPath(),C.rect(et,ot,H,B),C.clip();function _t(G,$){if(!C)return;C.strokeStyle=$,C.lineWidth=1.8,C.beginPath();const ct=u.length;for(let S=0;S<ct;S++){const R=et+S/(co-1)*H,z=u[S][G],b=ot+B-(z-X)/U*B;S===0?C.moveTo(R,b):C.lineTo(R,b)}C.stroke()}function O(G,$){if(!C)return;C.strokeStyle=$,C.lineWidth=1.8,C.beginPath();const ct=u.length;for(let S=0;S<ct;S++){const R=et+S/(co-1)*H,z=u[S][G],b=ot+B-(z-L)/bt*B;S===0?C.moveTo(R,b):C.lineTo(R,b)}C.stroke()}if(r.vin&&_t("vin","#00d2ff"),r.vout&&_t("vout","#ffd166"),r.iin&&O("iin","#06d6a0"),r.iout&&O("iout","#ef476f"),f.value&&h.value>=et&&h.value<=et+H){C.strokeStyle="#94a3b8",C.lineWidth=1,C.setLineDash([2,2]),C.beginPath(),C.moveTo(h.value,ot),C.lineTo(h.value,ot+B),C.stroke(),C.setLineDash([]);const G=f.value;if(r.vin){const $=ot+B-(G.vin-X)/U*B;C.fillStyle="#00d2ff",C.beginPath(),C.arc(h.value,$,3.5,0,Math.PI*2),C.fill()}if(r.vout){const $=ot+B-(G.vout-X)/U*B;C.fillStyle="#ffd166",C.beginPath(),C.arc(h.value,$,3.5,0,Math.PI*2),C.fill()}if(r.iin){const $=ot+B-(G.iin-L)/bt*B;C.fillStyle="#06d6a0",C.beginPath(),C.arc(h.value,$,3.5,0,Math.PI*2),C.fill()}if(r.iout){const $=ot+B-(G.iout-L)/bt*B;C.fillStyle="#ef476f",C.beginPath(),C.arc(h.value,$,3.5,0,Math.PI*2),C.fill()}}C.restore()}function p(N){if(!i.value)return;const I=i.value.getBoundingClientRect(),E=N.clientX-I.left,w=N.clientY-I.top,C=52,nt=I.width-C-52;if(E>=C&&E<=C+nt&&u.length>1){const ot=(E-C)/nt,mt=Math.min(u.length-1,Math.max(0,Math.round(ot*(co-1)))),H=u[mt];if(H){const B=u[0].t,ht=(u[u.length-1].t-B)/1e3,U=(H.t-B)/1e3,L=ht-U;f.value={idx:mt+1,relTime:L>.05?`-${L.toFixed(2)}s`:"最新点",vin:H.vin,vout:H.vout,iin:H.iin,iout:H.iout},h.value=E,v.value=w;return}}f.value=null}function D(){f.value=null}function P(N){if(!i.value)return;const I=i.value.getBoundingClientRect(),E=N.clientX-I.left,w=I.width,C=52,et=52,nt=N.deltaY<0?-1:1;if(E<=C+35){N.preventDefault(),o.auto=!1;const ot=Math.max(1,o.max-o.min),mt=ot>20?5:ot>5?2:1;o.max=Math.max(o.min+1,Math.round((o.max+nt*mt)*10)/10)}else if(E>=w-et-35){N.preventDefault(),a.auto=!1;const ot=Math.max(.2,a.max-a.min),mt=ot>5?1:ot>1?.5:.2;a.max=Math.max(a.min+.2,Math.round((a.max+nt*mt)*10)/10)}}function T(N){if(!i.value)return;const I=i.value.getBoundingClientRect(),E=N.clientX-I.left,w=I.width;E<=52+35?o.auto=!0:E>=w-52-35&&(a.auto=!0)}function k(){u.length=0,f.value=null}function V(){m(),d=requestAnimationFrame(V)}return Kr(()=>{V()}),Zr(()=>{cancelAnimationFrame(d)}),t({clear:k}),(N,I)=>(Ht(),Gt("div",Uv,[x("div",Nv,[I[18]||(I[18]=x("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[x("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Ut(" 实时参数时域波形 (双纵坐标轴) ")],-1)),x("div",Ov,[x("label",Fv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[0]||(I[0]=E=>r.vin=E)},null,512),[[is,r.vin]]),I[14]||(I[14]=Ut(" Vin (电源电压) ",-1))]),x("label",Bv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[1]||(I[1]=E=>r.vout=E)},null,512),[[is,r.vout]]),I[15]||(I[15]=Ut(" Vout (负载电压) ",-1))]),x("label",zv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[2]||(I[2]=E=>r.iin=E)},null,512),[[is,r.iin]]),I[16]||(I[16]=Ut(" Iin (电源电流) ",-1))]),x("label",kv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[3]||(I[3]=E=>r.iout=E)},null,512),[[is,r.iout]]),I[17]||(I[17]=Ut(" Iout (负载电流) ",-1))])]),x("button",{class:"btn",style:{padding:"2px 8px","font-size":"10.5px","background-color":"#2d3748",color:"#a0aec0",border:"1px solid #4a5568"},onClick:k,title:"清空当前波形缓存"}," 清空波形 ")]),x("div",Vv,[x("div",Hv,[I[24]||(I[24]=x("span",{style:{color:"#00d2ff","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," ⚡ 左纵轴 (电压): ",-1)),x("label",Gv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[4]||(I[4]=E=>o.auto=E)},null,512),[[is,o.auto]]),I[19]||(I[19]=x("span",null,"自适应",-1))]),x("div",Wv,[I[20]||(I[20]=x("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),pe(x("input",{type:"number","onUpdate:modelValue":I[5]||(I[5]=E=>o.min=E),disabled:o.auto,onChange:I[6]||(I[6]=E=>o.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围下限",step:"1"},null,40,Xv),[[cn,o.min,void 0,{number:!0}]]),I[21]||(I[21]=x("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),pe(x("input",{type:"number","onUpdate:modelValue":I[7]||(I[7]=E=>o.max=E),disabled:o.auto,onChange:I[8]||(I[8]=E=>o.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围上限",step:"1"},null,40,$v),[[cn,o.max,void 0,{number:!0}]]),I[22]||(I[22]=x("span",{style:{color:"#38bdf8","font-weight":"bold","font-size":"10.5px"}},"V",-1))]),x("div",Yv,[I[23]||(I[23]=x("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ht(),Gt(Re,null,Fi([15,30,60],E=>x("button",{key:E,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:w=>l(E),title:`锁定 0 ~ ${E}V 范围`},St(E)+"V ",9,jv)),64))])]),x("div",qv,[I[30]||(I[30]=x("span",{style:{color:"#06d6a0","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," 🔋 右纵轴 (电流): ",-1)),x("label",Kv,[pe(x("input",{type:"checkbox","onUpdate:modelValue":I[9]||(I[9]=E=>a.auto=E)},null,512),[[is,a.auto]]),I[25]||(I[25]=x("span",null,"自适应",-1))]),x("div",Zv,[I[26]||(I[26]=x("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),pe(x("input",{type:"number","onUpdate:modelValue":I[10]||(I[10]=E=>a.min=E),disabled:a.auto,onChange:I[11]||(I[11]=E=>a.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围下限",step:"0.5"},null,40,Jv),[[cn,a.min,void 0,{number:!0}]]),I[27]||(I[27]=x("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),pe(x("input",{type:"number","onUpdate:modelValue":I[12]||(I[12]=E=>a.max=E),disabled:a.auto,onChange:I[13]||(I[13]=E=>a.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围上限",step:"0.5"},null,40,Qv),[[cn,a.max,void 0,{number:!0}]]),I[28]||(I[28]=x("span",{style:{color:"#34d399","font-weight":"bold","font-size":"10.5px"}},"A",-1))]),x("div",t0,[I[29]||(I[29]=x("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ht(),Gt(Re,null,Fi([2,5,10],E=>x("button",{key:E,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:w=>c(E),title:`锁定 0 ~ ${E}A 范围`},St(E)+"A ",9,e0)),64))])])]),x("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519",cursor:"crosshair",overflow:"hidden"},onMousemove:p,onMouseleave:D,onWheel:P,onDblclick:T},[x("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512),f.value?(Ht(),Gt("div",{key:0,style:Ge([{left:`${h.value}px`,top:`${v.value}px`},{position:"absolute",transform:"translate(-50%, -100%)","margin-top":"-10px","pointer-events":"none","z-index":"20","background-color":"rgba(22, 27, 34, 0.95)",border:"1px solid #38bdf8","border-radius":"4px",padding:"5px 8px","font-family":"'Consolas', monospace","font-size":"10.5px",color:"#e2e8f0","box-shadow":"0 4px 12px rgba(0,0,0,0.7)","white-space":"nowrap"}])},[x("div",n0,[x("span",i0,"采样点 #"+St(f.value.idx),1),x("span",s0,St(f.value.relTime),1)]),x("div",r0,[x("div",null,[I[31]||(I[31]=x("span",{style:{color:"#00d2ff","font-weight":"bold"}},"Vin:",-1)),Ut(" "+St(f.value.vin.toFixed(3))+"V",1)]),x("div",null,[I[32]||(I[32]=x("span",{style:{color:"#06d6a0","font-weight":"bold"}},"Iin:",-1)),Ut(" "+St(f.value.iin.toFixed(3))+"A",1)]),x("div",null,[I[33]||(I[33]=x("span",{style:{color:"#ffd166","font-weight":"bold"}},"Vout:",-1)),Ut(" "+St(f.value.vout.toFixed(3))+"V",1)]),x("div",null,[I[34]||(I[34]=x("span",{style:{color:"#ef476f","font-weight":"bold"}},"Iout:",-1)),Ut(" "+St(f.value.iout.toFixed(3))+"A",1)])])],4)):Ie("",!0)],544)]))}}),a0=su(o0,[["__scopeId","data-v-50507eef"]]),l0={class:"modal-card",style:{"max-width":"680px"}},c0={class:"modal-header"},u0={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},d0={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},f0={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},h0={style:{display:"flex","align-items":"center",gap:"8px"}},p0={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},m0={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},g0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},_0={style:{color:"#ecc94b"}},v0={style:{color:"#63b3ed"}},x0={style:{color:"#e2e8f0"}},y0={style:{color:"#48bb78"}},M0={style:{display:"flex","align-items":"center",gap:"6px"}},S0=["onClick"],b0=["onClick"],E0=["onClick"],T0={class:"modal-footer"},w0=$i({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ht(),Gt("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=rs(i=>t.$emit("close"),["self"]))},[x("div",l0,[x("div",c0,[e[5]||(e[5]=x("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[x("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("circle",{cx:"12",cy:"12",r:"10"}),x("polyline",{points:"12 6 12 12 16 14"})]),Ut(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),x("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),x("div",u0,[n.records.length===0?(Ht(),Gt("div",d0," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):Ie("",!0),(Ht(!0),Gt(Re,null,Fi(n.records,i=>{var s,r;return Ht(),Gt("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[x("div",f0,[x("div",h0,[x("span",p0,St(i.title),1),x("span",m0,St(new Date(i.createdAt).toLocaleString()),1)]),x("div",g0,[x("span",null,[e[6]||(e[6]=Ut("电压: ",-1)),x("b",_0,St(i.config.voltageMin)+"V ~ "+St(i.config.voltageMax)+"V",1)]),x("span",null,[e[7]||(e[7]=Ut("负载: ",-1)),x("b",v0,St(i.config.loadMin)+" ~ "+St(i.config.loadMax)+" ("+St(i.config.loadMode)+")",1)]),x("span",null,[e[8]||(e[8]=Ut("点数: ",-1)),x("b",x0,St(i.points.length),1)]),x("span",null,[e[9]||(e[9]=Ut("最高效率: ",-1)),x("b",y0,St(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),x("div",M0,[x("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),x("polyline",{points:"15 3 21 3 21 9"}),x("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Ut(" 进入数据查看 ",-1)])],8,S0),x("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),x("polyline",{points:"7 10 12 15 17 10"}),x("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,b0),x("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("polyline",{points:"3 6 5 6 21 6"}),x("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,E0)])],32)}),128))]),x("div",T0,[x("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):Ie("",!0)}}),A0={class:"modal-card",style:{"max-width":"520px"}},C0={class:"modal-header"},R0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},P0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},D0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},L0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},I0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},U0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},N0={style:{display:"flex","align-items":"center",gap:"6px"}},O0=["disabled"],F0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},B0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},z0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},k0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},V0={style:{display:"flex","align-items":"center",gap:"6px"}},H0=["disabled"],G0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},W0={class:"modal-footer"},X0=$i({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=ne(9600),e=ne(9600);return(i,s)=>n.isOpen?(Ht(),Gt("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=rs(r=>i.$emit("close"),["self"]))},[x("div",A0,[x("div",C0,[s[10]||(s[10]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),x("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),x("div",R0,[x("div",P0,[s[11]||(s[11]=x("div",null,[x("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[x("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Ut(" 内置仿真演示驱动 (Virtual Simulation) ")]),x("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),x("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),x("div",D0,[x("div",L0,[x("span",I0,[x("span",{style:Ge([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Ut(" 直流电源 (RIGOL DP700) ",-1))]),x("span",U0,St(n.psuPortName),1)]),x("div",N0,[pe(x("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[x("option",{value:9600},"9600 bps (标准)",-1),x("option",{value:19200},"19200 bps",-1),x("option",{value:38400},"38400 bps",-1),x("option",{value:115200},"115200 bps",-1)])],8,O0),[[$l,t.value,void 0,{number:!0}]]),n.psuConnected?(Ht(),Gt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ht(),Gt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),x("div",F0,[x("div",B0,[x("span",z0,[x("span",{style:Ge([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Ut(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),x("span",k0,St(n.loadPortName),1)]),x("div",V0,[pe(x("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[x("option",{value:9600},"9600 bps (标准)",-1),x("option",{value:19200},"19200 bps",-1),x("option",{value:38400},"38400 bps",-1),x("option",{value:115200},"115200 bps",-1)])],8,H0),[[$l,e.value,void 0,{number:!0}]]),n.loadConnected?(Ht(),Gt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ht(),Gt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?Ie("",!0):(Ht(),Gt("div",G0,[...s[16]||(s[16]=[Ut(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),x("b",null,"【启用仿真】",-1),Ut("无障碍测试。 ",-1)])]))]),x("div",W0,[x("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):Ie("",!0)}});class $0{constructor(){Qt(this,"connected",!0);Qt(this,"outputOn",!1);Qt(this,"targetVoltage",5);Qt(this,"currentVoltage",0);Qt(this,"lastVoltage",0);Qt(this,"voltageChangeTime",0);Qt(this,"currentLimit",3);Qt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}}class Y0{constructor(){Qt(this,"connected",!0);Qt(this,"inputOn",!1);Qt(this,"mode","CC");Qt(this,"targetCurrent",1);Qt(this,"currentCurrent",0);Qt(this,"lastCurrent",0);Qt(this,"targetPower",10);Qt(this,"currentPower",0);Qt(this,"lastPower",0);Qt(this,"loadChangeTime",0);Qt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}setMode(t){this.mode=t}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};if((t??10)<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class bd{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setOutput(t){return`:OUTP CH1,${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT? CH1
`,`:MEAS:CURR? CH1
`,`:MEAS:POWE? CH1
`]}}class uo{static setMode(t){return`:SOUR:FUNC ${t}
`}static setCurrent(t){return`:SOUR:CURR ${t.toFixed(3)}
`}static setPower(t){return`:SOUR:POW ${t.toFixed(3)}
`}static setInput(t){return`:SOUR:INP ${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT?
`,`:MEAS:CURR?
`,`:MEAS:POW?
`]}}class Ed{constructor(t){Qt(this,"type");Qt(this,"isVirtual",!0);Qt(this,"port",null);Qt(this,"reader",null);Qt(this,"writer",null);Qt(this,"encoder",null);Qt(this,"decoder",null);Qt(this,"readBuffer","");Qt(this,"isDisconnecting",!1);Qt(this,"onLostCallback",null);Qt(this,"disconnectListener",null);Qt(this,"virtualPsu",new $0);Qt(this,"virtualLoad",new Y0);Qt(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");try{await this.writer.write(t)}catch(e){throw this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(e==null?void 0:e.message)||e}`),e}}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const ls=class ls{constructor(){Qt(this,"psu",new Ed("PSU"));Qt(this,"load",new Ed("LOAD"));Qt(this,"onDeviceLostListener",null);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason};const e=this.load.checkAlive();return e.alive?{ok:!0}:(this.load.handleDeviceLost(e.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:e.reason})}static getInstance(){return ls.instance||(ls.instance=new ls),ls.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(bd.setVoltageAndLimit(e,i)),await this.psu.write(bd.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(uo.setMode(e)),e==="CC"?await this.load.write(uo.setCurrent(i)):await this.load.write(uo.setPower(i)),await this.load.write(uo.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};Qt(ls,"instance");let Zl=ls;const j0="PowerChipTesterDB",q0=1,Mn="test_runs",ap=5;function Pa(){return new Promise((n,t)=>{const e=indexedDB.open(j0,q0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(Mn)||s.createObjectStore(Mn,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function K0(n){const t=await Pa(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([Mn],"readwrite");r.objectStore(Mn).put(e),r.oncomplete=async()=>{try{await Q0(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function lp(){const n=await Pa();return new Promise((t,e)=>{const o=n.transaction([Mn],"readonly").objectStore(Mn).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<ap?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Z0(n){const t=await Pa();return new Promise((e,i)=>{const o=t.transaction([Mn],"readonly").objectStore(Mn).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function J0(n){const t=await Pa();return new Promise((e,i)=>{const s=t.transaction([Mn],"readwrite");s.objectStore(Mn).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function Q0(n){return new Promise((t,e)=>{const s=n.transaction([Mn],"readwrite").objectStore(Mn),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>ap&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function $o(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(h=>`"${h}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(h=>{const v=n.voltageSteps.map(_=>{const m=n.points.find(p=>Math.abs(p.voltageTarget-_)<1e-4&&Math.abs(p.loadTarget-h)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${h}",${v.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(h=>{i.push([h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),`"${h.loadMode}"`,h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2),`"${h.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压/负载跳变前后0.1s的暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.1s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(h=>{i.push([h.relTime.toFixed(4),h.stepIndex,h.voltageTarget.toFixed(2),h.loadTarget.toFixed(2),h.stepRelTime.toFixed(4),h.isValidForAvg?'"YES"':'"NO(0.1s过滤)"',h.vin.toFixed(4),h.iin.toFixed(4),h.pin.toFixed(4),h.vout.toFixed(4),h.iout.toFixed(4),h.pout.toFixed(4),h.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const tx={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},ex={class:"menubar"},nx={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},ix={style:{display:"flex","align-items":"center",gap:"5px"}},sx={style:{display:"flex","align-items":"center",gap:"5px"}},rx={class:"panel-left"},ox={class:"group-box"},ax={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},lx={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},cx={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"6px"}},ux=["value"],dx={style:{display:"flex","align-items":"center",gap:"4px"}},fx=["value"],hx={class:"group-box"},px={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},mx={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},gx={style:{"margin-bottom":"6px"}},_x={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},vx=["disabled"],xx=["disabled"],yx=["disabled"],Mx={style:{"margin-bottom":"6px"}},Sx={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},bx={style:{display:"flex",gap:"4px"}},Ex={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Tx=["disabled"],wx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Ax=["disabled"],Cx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Rx={style:{"font-size":"10px",color:"#a0aec0"}},Px=["disabled"],Dx={style:{"font-size":"10px",color:"#a0aec0"}},Lx=["disabled"],Ix={style:{"font-size":"10px",color:"#a0aec0"}},Ux=["disabled"],Nx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Ox=["disabled"],Fx=["disabled"],Bx=["disabled"],zx={class:"group-box"},kx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Vx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Hx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},Gx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Wx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},Xx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},$x={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Yx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Kx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Zx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},Jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Qx={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},ty={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},ey={style:{display:"flex","flex-direction":"column",gap:"6px"}},ny={style:{display:"flex",gap:"6px"}},iy=["disabled"],sy=["disabled"],ry={class:"panel-right"},oy={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},ay={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},ly={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},cy={style:{color:"#48bb78"}},uy={style:{flex:"1",overflow:"auto"}},dy={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},fy={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},hy={style:{padding:"4px 6px"}},py={style:{padding:"4px 6px"}},my={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},gy={style:{padding:"4px 6px"}},_y={style:{padding:"4px 6px"}},vy={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},xy={style:{padding:"4px 6px"}},yy={style:{padding:"4px 6px"}},My={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},Sy={key:0,style:{color:"#48bb78"}},by={key:1,style:{color:"#00d2ff"}},Ey={key:2,style:{color:"#4a5568"}},Ty={style:{padding:"4px 6px","text-align":"center"}},wy={class:"statusbar"},Ay={key:0,style:{color:"#48bb78"}},Cy={key:1},Ry={class:"device-lost-modal"},Py={class:"device-lost-header"},Dy={class:"device-lost-body"},Ly={class:"device-lost-info-grid"},Iy={class:"info-row"},Uy={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},Ny={class:"info-row"},Oy={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},Fy={class:"info-row"},By={class:"info-val"},zy={class:"info-row"},ky={class:"info-val",style:{"font-family":"monospace"}},Vy={class:"device-lost-footer"},Hy=$i({__name:"ConsoleView",setup(n){const t=Zl.getInstance(),e=ne(null),i=ne(!1),s=ne(!1),r=ne(!0),o=ne([]),a=jn({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),l=ne(null),c=ne(void 0),u=ne([]),d=ne(!1),f=ne(!1),h=ne("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let v=null,_=null;const m=jn({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),p=ne([]),D=ne([]),P=ne([]),T=ne(null),k=jn({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),V=Ze(()=>{const Z=Math.max(1,Math.floor((m.voltageMax-m.voltageMin)/m.voltageStep)+1),M=Math.max(1,Math.floor((m.loadMax-m.loadMin)/m.loadStep)+1);return Z*M}),N=Ze(()=>P.value.filter(Z=>Z.status==="completed").length),I=Ze(()=>P.value.filter(Z=>Z.status==="completed"));function E(Z){e.value=e.value===Z?null:Z}function w(){e.value=null}function C(){const Z=[];for(let F=m.voltageMin;F<=m.voltageMax+1e-5;F+=m.voltageStep)Z.push(Math.round(F*100)/100);const M=[];for(let F=m.loadMin;F<=m.loadMax+1e-5;F+=m.loadStep)M.push(Math.round(F*100)/100);p.value=Z,D.value=M;const y=[];let g=1;for(const F of Z)for(const tt of M)y.push({stepIndex:g++,voltageTarget:F,loadTarget:tt,loadMode:m.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});P.value=y,k.totalSteps=y.length,k.currentStep=0,k.progressPercent=0}function et(Z,M,y){console.error(`%c[SERIAL DEVICE LOST] %c${Z} (${M}): ${y}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),a.visible=!0,a.deviceType=Z,a.deviceName=M,a.reason=y,a.timestamp=new Date().toLocaleTimeString(),d.value&&(f.value=!0,h.value=`⚠️ 警告: 检测到串口设备【${M}】异常断开/丢失！测试已自动紧急暂停。`,t.emergencyStopAll().catch(()=>{}))}function nt(){a.visible=!1,s.value=!0}async function ot(){a.visible=!1,r.value=!0,t.autoConnectVirtual(),h.value="已切换为仿真驱动模式，测试已恢复",f.value=!1}async function mt(){a.visible=!1,v&&v.abort(),await B()}async function H(){t.isBothConnected()||t.autoConnectVirtual(),C(),u.value=[],l.value&&l.value.clear(),c.value=void 0,d.value=!0,f.value=!1,v=new AbortController,h.value="正在执行全自动 2D 矩阵效率测试...",L();const Z=performance.now();try{let M=0;for(let y=0;y<P.value.length&&!v.signal.aborted;y++){for(;f.value&&!v.signal.aborted;)await new Promise(Mt=>setTimeout(Mt,200));const g=P.value[y];g.status="running",k.activeTargetV=g.voltageTarget,k.activeTargetLoad=g.loadTarget,k.currentStep=y+1,h.value=`正在测试步 #${g.stepIndex} (Vin: ${g.voltageTarget.toFixed(2)}V, 负载: ${g.loadTarget.toFixed(2)}${g.loadMode})...`;try{await t.setPsuOutput(!0,g.voltageTarget,m.inputCurrentLimit),await t.setLoadInput(!0,m.loadMode,g.loadTarget)}catch(Mt){for(et("PSU",t.psu.state.model,`发送控制指令失败: ${(Mt==null?void 0:Mt.message)||Mt}`);f.value&&!v.signal.aborted;)await new Promise(kt=>setTimeout(kt,200));if(v.signal.aborted)break}const F=m.stepDwellTime*1e3,tt=m.stepDwellTime,lt=.1,it=Math.max(10,Math.round(1e3/(m.sampleRateHz||8))),wt=performance.now(),yt=[],gt=[],Rt=[],vt=[],Tt=[],Ot=[];let It=0;for(;It<F&&!v.signal.aborted;){for(;f.value&&!v.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));const Mt=performance.now();It=Mt-wt;const kt=It/1e3,Nt=(Mt-Z)/1e3;if(!t.checkHealth().ok){for(;f.value&&!v.signal.aborted;)await new Promise(Ct=>setTimeout(Ct,200));if(v.signal.aborted)break}const W=tt>.2?kt>=lt&&kt<=tt-lt:!0,Et=t.measure();k.vin=Et.vin,k.iin=Et.iin,k.pin=Et.pin,k.vout=Et.vout,k.iout=Et.iout,k.pout=Et.pout,k.efficiency=Et.efficiency,c.value={t:Mt,vin:Et.vin,vout:Et.vout,iin:Et.iin,iout:Et.iout};const pt={timestamp:Date.now(),relTime:Math.round(Nt*1e3)/1e3,stepIndex:g.stepIndex,voltageTarget:g.voltageTarget,loadTarget:g.loadTarget,stepRelTime:Math.round(kt*1e3)/1e3,isValidForAvg:W,vin:Et.vin,iin:Et.iin,pin:Et.pin,vout:Et.vout,iout:Et.iout,pout:Et.pout,efficiency:Et.efficiency};u.value.push(pt),W&&(yt.push(Et.vin),gt.push(Et.iin),Rt.push(Et.pin),vt.push(Et.vout),Tt.push(Et.iout),Ot.push(Et.pout));const xt=performance.now()-Mt,Dt=Math.max(2,it-xt);await new Promise(Ct=>setTimeout(Ct,Dt))}if(yt.length>0){const Mt=yt.length;g.vin=Math.round(yt.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.iin=Math.round(gt.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.pin=Math.round(Rt.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.vout=Math.round(vt.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.iout=Math.round(Tt.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.pout=Math.round(Ot.reduce((kt,Nt)=>kt+Nt,0)/Mt*1e3)/1e3,g.efficiency=g.pin>.001?Math.min(100,Math.max(0,Math.round(g.pout/g.pin*1e4)/100)):0}else{const Mt=t.measure();g.vin=Mt.vin,g.iin=Mt.iin,g.pin=Mt.pin,g.vout=Mt.vout,g.iout=Mt.iout,g.pout=Mt.pout,g.efficiency=Mt.efficiency}g.status="completed",g.timestamp=Date.now(),M++,k.progressPercent=M/P.value.length*100}v.signal.aborted||await B()}catch(M){console.error("Test execution error:",M),h.value="测试执行异常: "+String(M),alert("测试执行过程中发生异常："+String(M))}finally{d.value=!1,f.value=!1,dt()}}async function B(){await t.emergencyStopAll(),h.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const Z=P.value.filter(Tt=>Tt.status==="completed");let M=0,y=100,g=0,F;Z.forEach(Tt=>{Tt.efficiency>M&&(M=Tt.efficiency,F=Tt),Tt.efficiency<y&&(y=Tt.efficiency),g+=Tt.efficiency});const tt=Z.length>0?g/Z.length:0,lt=`test_${Date.now()}`,it=new Date,wt=JSON.parse(JSON.stringify(m)),yt=JSON.parse(JSON.stringify(P.value)),gt=F?JSON.parse(JSON.stringify(F)):void 0,Rt=JSON.parse(JSON.stringify(u.value)),vt={id:lt,title:`芯片双向矩阵扫描 [${m.voltageMin}V-${m.voltageMax}V | ${m.loadMode}]`,createdAt:it.toISOString(),config:wt,voltageSteps:[...p.value],loadSteps:[...D.value],points:yt,rawSamples:Rt,summary:{totalPoints:P.value.length,completedPoints:Z.length,maxEfficiency:Math.round(M*100)/100,minEfficiency:Math.round(y*100)/100,avgEfficiency:Math.round(tt*100)/100,optimalPoint:gt,durationSeconds:Math.round(Z.length*m.stepDwellTime)}};T.value=vt,await K0(vt),await O(),Iv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),bt(lt)}function X(){f.value=!0,h.value="测试已暂停"}function ht(){f.value=!1,h.value="测试已继续运行"}async function U(){v&&v.abort(),d.value=!1,f.value=!1,await t.emergencyStopAll(),dt(),h.value="测试已手动终止"}function L(){_&&clearInterval(_),_=window.setInterval(()=>{if(t.checkHealth(),!d.value){const Z=t.measure();k.vin=Z.vin,k.iin=Z.iin,k.pin=Z.pin,k.vout=Z.vout,k.iout=Z.iout,k.pout=Z.pout,k.efficiency=Z.efficiency}},200)}function dt(){_&&(clearInterval(_),_=null)}function bt(Z){var F;const M=Z||((F=T.value)==null?void 0:F.id);if(!M){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const g=`${window.location.href.split("#")[0]}#/result/${M}`;window.open(g,"_blank")}function Y(){if(T.value)$o(T.value);else if(I.value.length>0){const Z={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(m)),voltageSteps:[...p.value],loadSteps:[...D.value],points:JSON.parse(JSON.stringify(P.value)),rawSamples:JSON.parse(JSON.stringify(u.value)),summary:{totalPoints:P.value.length,completedPoints:I.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};$o(Z)}else alert("当前无可用测试数据可供导出！")}function at(Z){$o(Z)}async function _t(Z){await J0(Z),await O()}async function O(){try{o.value=await lp()}catch(Z){console.warn("Failed to load history:",Z)}}async function G(){await O(),i.value=!0}function $(){P.value=[],u.value=[],T.value=null,c.value=void 0,l.value&&l.value.clear(),C(),h.value="图表与数据已清空"}function ct(){r.value?(t.autoConnectVirtual(),h.value="已启用内置仿真驱动模式 (Virtual Mode)"):(t.psu.disconnect(),t.load.disconnect(),h.value="已关闭仿真模式，请配置物理串口设备")}function S(){t.psu.state.connected?(t.psu.disconnect(),h.value="电源串口已断开"):s.value=!0}function R(){t.load.state.connected?(t.load.disconnect(),h.value="电子负载串口已断开"):s.value=!0}function z(){r.value=!0,t.autoConnectVirtual(),s.value=!1,h.value="仿真驱动已就绪"}async function b(Z){try{await t.psu.connectPhysical(Z),r.value=!1,h.value=`电源串口已连接 (${Z}bps)`}catch(M){alert("连接电源串口失败: "+((M==null?void 0:M.message)||M))}}async function Q(){await t.psu.disconnect(),h.value="电源串口已断开"}async function J(Z){try{await t.load.connectPhysical(Z),r.value=!1,h.value=`负载串口已连接 (${Z}bps)`}catch(M){alert("连接负载串口失败: "+((M==null?void 0:M.message)||M))}}async function st(){await t.load.disconnect(),h.value="负载串口已断开"}function rt(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}return Kr(async()=>{t.setOnDeviceLost(et),t.autoConnectVirtual(),C(),L(),await O()}),Zr(()=>{dt()}),(Z,M)=>(Ht(),Gt("div",tx,[x("div",ex,[x("div",{class:di(["menu-item",{active:e.value==="file"}]),onClick:M[3]||(M[3]=y=>E("file"))},[M[36]||(M[36]=Ut(" 文件 (File) ",-1)),e.value==="file"?(Ht(),Gt("div",{key:0,class:"dropdown-menu",onClick:M[2]||(M[2]=rs(()=>{},["stop"]))},[x("div",{class:"dropdown-item",onClick:M[0]||(M[0]=y=>{Y(),w()})},[...M[33]||(M[33]=[x("span",null,"导出测试结果 CSV (Export CSV)...",-1),x("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),M[35]||(M[35]=x("div",{class:"dropdown-divider"},null,-1)),x("div",{class:"dropdown-item",onClick:M[1]||(M[1]=y=>w())},[...M[34]||(M[34]=[x("span",null,"退出 (Exit)",-1),x("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):Ie("",!0)],2),x("div",{class:di(["menu-item",{active:e.value==="view"}]),onClick:M[6]||(M[6]=y=>E("view"))},[M[38]||(M[38]=Ut(" 视图 (View) ",-1)),e.value==="view"?(Ht(),Gt("div",{key:0,class:"dropdown-menu",onClick:M[5]||(M[5]=rs(()=>{},["stop"]))},[x("div",{class:"dropdown-item",onClick:M[4]||(M[4]=y=>{$(),w()})},[...M[37]||(M[37]=[x("span",null,"清空图表数据 (Clear Charts)",-1)])])])):Ie("",!0)],2),x("div",{class:di(["menu-item",{active:e.value==="tools"}]),onClick:M[10]||(M[10]=y=>E("tools"))},[M[42]||(M[42]=Ut(" 工具 (Tools) ",-1)),e.value==="tools"?(Ht(),Gt("div",{key:0,class:"dropdown-menu",onClick:M[9]||(M[9]=rs(()=>{},["stop"]))},[x("div",{class:"dropdown-item",onClick:M[7]||(M[7]=y=>{G(),w()})},[...M[39]||(M[39]=[x("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),x("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),M[41]||(M[41]=x("div",{class:"dropdown-divider"},null,-1)),x("div",{class:"dropdown-item",onClick:M[8]||(M[8]=y=>{s.value=!0,w()})},[...M[40]||(M[40]=[x("span",null,"打开串口硬件连接设置...",-1)])])])):Ie("",!0)],2),x("div",{class:di(["menu-item",{active:e.value==="help"}]),onClick:M[13]||(M[13]=y=>E("help"))},[M[44]||(M[44]=Ut(" 帮助 (Help) ",-1)),e.value==="help"?(Ht(),Gt("div",{key:0,class:"dropdown-menu",onClick:M[12]||(M[12]=rs(()=>{},["stop"]))},[x("div",{class:"dropdown-item",onClick:M[11]||(M[11]=y=>{rt(),w()})},[...M[43]||(M[43]=[x("span",null,"关于工作台 (About Workbench)...",-1)])])])):Ie("",!0)],2),x("div",nx,[x("span",ix,[x("span",{style:Ge([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Te(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Ut(" 电源: "+St(Te(t).psu.state.portName),1)]),x("span",sx,[x("span",{style:Ge([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:Te(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Ut(" 负载: "+St(Te(t).load.state.portName),1)]),T.value?(Ht(),Gt("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:M[14]||(M[14]=y=>bt(T.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...M[45]||(M[45]=[x("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[x("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),x("polyline",{points:"15 3 21 3 21 9"}),x("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Ut(" 打开 3D/2D 数据视图 ",-1)])])):Ie("",!0)])]),x("div",{class:"workbench-body",onClick:w},[x("div",rx,[x("div",ox,[M[49]||(M[49]=x("div",{class:"group-title"},[x("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),x("div",ax,[x("label",lx,[pe(x("input",{type:"checkbox","onUpdate:modelValue":M[15]||(M[15]=y=>r.value=y),onChange:ct},null,544),[[is,r.value]]),M[46]||(M[46]=Ut(" 🧪 启用仿真演示模式 ",-1))]),x("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:M[16]||(M[16]=y=>s.value=!0)}," ⚙ 配置 ")]),x("div",cx,[M[47]||(M[47]=x("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),x("input",{type:"text",readonly:"",value:Te(t).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,ux),x("button",{class:di(["btn",Te(t).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:S},St(Te(t).psu.state.connected?"断开":"连接"),3)]),x("div",dx,[M[48]||(M[48]=x("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),x("input",{type:"text",readonly:"",value:Te(t).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,fx),x("button",{class:di(["btn",Te(t).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:R},St(Te(t).load.state.connected?"断开":"连接"),3)])]),x("div",hx,[x("div",px,[M[50]||(M[50]=x("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),x("span",mx," 总点数: "+St(V.value)+" 点 ",1)]),x("div",gx,[M[54]||(M[54]=x("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),x("div",_x,[x("div",null,[M[51]||(M[51]=x("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[17]||(M[17]=y=>m.voltageMin=y),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,vx),[[cn,m.voltageMin,void 0,{number:!0}]])]),x("div",null,[M[52]||(M[52]=x("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[18]||(M[18]=y=>m.voltageMax=y),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,xx),[[cn,m.voltageMax,void 0,{number:!0}]])]),x("div",null,[M[53]||(M[53]=x("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[19]||(M[19]=y=>m.voltageStep=y),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,yx),[[cn,m.voltageStep,void 0,{number:!0}]])])])]),x("div",Mx,[x("div",Sx,[M[57]||(M[57]=x("span",null,"负载扫描范围 (Load):",-1)),x("div",bx,[x("label",Ex,[pe(x("input",{type:"radio",value:"CC","onUpdate:modelValue":M[20]||(M[20]=y=>m.loadMode=y),disabled:d.value},null,8,Tx),[[sd,m.loadMode]]),M[55]||(M[55]=Ut(" CC恒流 ",-1))]),x("label",wx,[pe(x("input",{type:"radio",value:"CW","onUpdate:modelValue":M[21]||(M[21]=y=>m.loadMode=y),disabled:d.value},null,8,Ax),[[sd,m.loadMode]]),M[56]||(M[56]=Ut(" CW恒功率 ",-1))])])]),x("div",Cx,[x("div",null,[x("span",Rx,"起始("+St(m.loadMode==="CC"?"A":"W")+"):",1),pe(x("input",{type:"number","onUpdate:modelValue":M[22]||(M[22]=y=>m.loadMin=y),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,Px),[[cn,m.loadMin,void 0,{number:!0}]])]),x("div",null,[x("span",Dx,"终止("+St(m.loadMode==="CC"?"A":"W")+"):",1),pe(x("input",{type:"number","onUpdate:modelValue":M[23]||(M[23]=y=>m.loadMax=y),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,Lx),[[cn,m.loadMax,void 0,{number:!0}]])]),x("div",null,[x("span",Ix,"步长("+St(m.loadMode==="CC"?"A":"W")+"):",1),pe(x("input",{type:"number","onUpdate:modelValue":M[24]||(M[24]=y=>m.loadStep=y),disabled:d.value,step:"0.1",style:{width:"100%"}},null,8,Ux),[[cn,m.loadStep,void 0,{number:!0}]])])])]),x("div",Nx,[x("div",null,[M[58]||(M[58]=x("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[25]||(M[25]=y=>m.inputCurrentLimit=y),disabled:d.value,step:"0.5",style:{width:"100%"}},null,8,Ox),[[cn,m.inputCurrentLimit,void 0,{number:!0}]])]),x("div",null,[M[59]||(M[59]=x("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[26]||(M[26]=y=>m.stepDwellTime=y),disabled:d.value,step:"0.2",style:{width:"100%"}},null,8,Fx),[[cn,m.stepDwellTime,void 0,{number:!0}]])]),x("div",null,[M[60]||(M[60]=x("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),pe(x("input",{type:"number","onUpdate:modelValue":M[27]||(M[27]=y=>m.sampleRateHz=y),disabled:d.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,Bx),[[cn,m.sampleRateHz,void 0,{number:!0}]])])])]),x("div",zx,[M[74]||(M[74]=x("div",{class:"group-title"},[x("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),x("div",kx,[x("div",Vx,[M[62]||(M[62]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),x("div",Hx,[Ut(St(k.vin.toFixed(3))+" ",1),M[61]||(M[61]=x("span",{style:{"font-size":"10px"}},"V",-1))])]),x("div",Gx,[M[64]||(M[64]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),x("div",Wx,[Ut(St(k.vout.toFixed(3))+" ",1),M[63]||(M[63]=x("span",{style:{"font-size":"10px"}},"V",-1))])]),x("div",Xx,[M[66]||(M[66]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),x("div",$x,[Ut(St(k.iin.toFixed(3))+" ",1),M[65]||(M[65]=x("span",{style:{"font-size":"10px"}},"A",-1))])]),x("div",Yx,[M[68]||(M[68]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),x("div",jx,[Ut(St(k.iout.toFixed(3))+" ",1),M[67]||(M[67]=x("span",{style:{"font-size":"10px"}},"A",-1))])]),x("div",qx,[M[70]||(M[70]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),x("div",Kx,[Ut(St(k.pin.toFixed(3))+" ",1),M[69]||(M[69]=x("span",{style:{"font-size":"10px"}},"W",-1))])]),x("div",Zx,[M[72]||(M[72]=x("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),x("div",Jx,[Ut(St(k.pout.toFixed(3))+" ",1),M[71]||(M[71]=x("span",{style:{"font-size":"10px"}},"W",-1))])])]),x("div",Qx,[M[73]||(M[73]=x("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),x("span",ty,St(k.efficiency.toFixed(2))+" % ",1)])]),x("div",ey,[d.value?f.value?(Ht(),Gt("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:ht}," ▶ 继续测试 ")):(Ht(),Gt("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:X}," ⏸ 暂停测试 ")):(Ht(),Gt("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:H}," ▶ 开始矩阵测试 ")),x("div",ny,[x("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!d.value,onClick:U}," ⏹ 结束 ",8,iy),x("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:I.value.length===0,onClick:Y}," 📊 导出CSV ",8,sy)])])]),x("div",ry,[Ue(a0,{ref_key:"waveformRef",ref:l,"latest-sample":c.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),x("div",oy,[x("div",ay,[M[76]||(M[76]=x("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),x("span",ly,[M[75]||(M[75]=Ut(" 已完成: ",-1)),x("b",cy,St(N.value),1),Ut(" / "+St(P.value.length)+" 步 ",1)])]),x("div",uy,[x("table",dy,[M[77]||(M[77]=x("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[x("tr",{style:{"border-bottom":"1px solid #2d3748"}},[x("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),x("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),x("th",{style:{padding:"5px 6px"}},"目标负载"),x("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),x("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),x("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),x("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),x("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),x("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),x("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),x("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),x("tbody",null,[(Ht(!0),Gt(Re,null,Fi(P.value,y=>(Ht(),Gt("tr",{key:y.stepIndex,style:Ge([{"border-bottom":"1px solid #1e2530"},{backgroundColor:y.status==="running"?"#1a365d":"transparent"}])},[x("td",fy,"#"+St(y.stepIndex),1),x("td",hy,St(y.voltageTarget.toFixed(2)),1),x("td",py,St(y.loadTarget.toFixed(2))+" "+St(y.loadMode),1),x("td",my,St(y.status!=="pending"?y.vin.toFixed(4):"--"),1),x("td",gy,St(y.status!=="pending"?y.iin.toFixed(4):"--"),1),x("td",_y,St(y.status!=="pending"?y.pin.toFixed(4):"--"),1),x("td",vy,St(y.status!=="pending"?y.vout.toFixed(4):"--"),1),x("td",xy,St(y.status!=="pending"?y.iout.toFixed(4):"--"),1),x("td",yy,St(y.status!=="pending"?y.pout.toFixed(4):"--"),1),x("td",My,[y.status==="completed"?(Ht(),Gt("span",Sy,St(y.efficiency.toFixed(2))+"% ",1)):y.status==="running"?(Ht(),Gt("span",by,"测定中")):(Ht(),Gt("span",Ey,"--"))]),x("td",Ty,[x("span",{style:Ge([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:y.status==="completed"?"#22543d":y.status==="running"?"#2b6cb0":"#2d3748",color:y.status==="completed"?"#9ae6b4":y.status==="running"?"#bee3f8":"#718096"}])},St(y.status==="completed"?"已完成":y.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),x("div",wy,[x("span",null,St(h.value),1),d.value?(Ht(),Gt("span",Ay," 正在测试第 "+St(k.currentStep)+" / "+St(k.totalSteps)+" 点 ("+St(k.progressPercent.toFixed(1))+"%) ",1)):(Ht(),Gt("span",Cy,"就绪 (Ready)"))]),Ue(w0,{"is-open":i.value,records:o.value,onClose:M[28]||(M[28]=y=>i.value=!1),onOpenResult:bt,onExportCsv:at,onDeleteRecord:_t},null,8,["is-open","records"]),Ue(X0,{"is-open":s.value,"psu-connected":Te(t).psu.state.connected,"psu-port-name":Te(t).psu.state.portName,"load-connected":Te(t).load.state.connected,"load-port-name":Te(t).load.state.portName,"web-serial-supported":Te(t).psu.isWebSerialSupported(),onClose:M[29]||(M[29]=y=>s.value=!1),onConnectVirtual:z,onConnectPhysicalPsu:b,onDisconnectPsu:Q,onConnectPhysicalLoad:J,onDisconnectLoad:st},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),a.visible?(Ht(),Gt("div",{key:0,class:"device-lost-overlay",onClick:M[32]||(M[32]=rs(y=>a.visible=!1,["self"]))},[x("div",Ry,[x("div",Py,[M[78]||(M[78]=Gr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 串口硬件设备异常丢失警告！ </span></div>',1)),x("button",{class:"btn",style:{padding:"2px 7px"},onClick:M[30]||(M[30]=y=>a.visible=!1)},"✕")]),x("div",Dy,[M[83]||(M[83]=x("div",{class:"device-lost-alert-banner"},[x("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 检测到串口通信链路中断 / 硬件连接丢失！ "),x("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，电源输出已安全切断。 ")],-1)),x("div",Ly,[x("div",Iy,[M[79]||(M[79]=x("span",{class:"info-label"},"丢失仪器:",-1)),x("span",Uy,St(a.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+St(a.deviceName),1)]),x("div",Ny,[M[80]||(M[80]=x("span",{class:"info-label"},"异常原因:",-1)),x("span",Oy,St(a.reason),1)]),x("div",Fy,[M[81]||(M[81]=x("span",{class:"info-label"},"测试进度:",-1)),x("span",By,"已完成 "+St(N.value)+" / "+St(P.value.length)+" 点 (当前步已挂起)",1)]),x("div",zy,[M[82]||(M[82]=x("span",{class:"info-label"},"发生时间:",-1)),x("span",ky,St(a.timestamp),1)])]),M[84]||(M[84]=x("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查设备电源及 USB 串口线物理连接。重新连接后可点击【恢复测试】无缝继续；亦可一键切换为内置仿真模式继续验证。 ",-1))]),x("div",Vy,[x("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:nt}," ⚙ 重新连接串口硬件 "),x("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:ot}," 🧪 切换仿真模式并继续测试 "),x("button",{class:"btn btn-danger",onClick:mt}," 💾 终止测试并保存已测结果 "),x("button",{class:"btn",onClick:M[31]||(M[31]=y=>a.visible=!1)}," 保持暂停 ")])])])):Ie("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lu="170",js={ROTATE:0,DOLLY:1,PAN:2},Ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gy=0,Td=1,Wy=2,cp=1,Xy=2,ci=3,Wi=0,rn=1,gi=2,ki=0,qs=1,wd=2,Ad=3,Cd=4,$y=5,os=100,Yy=101,jy=102,qy=103,Ky=104,Zy=200,Jy=201,Qy=202,tM=203,Jl=204,Ql=205,eM=206,nM=207,iM=208,sM=209,rM=210,oM=211,aM=212,lM=213,cM=214,tc=0,ec=1,nc=2,nr=3,ic=4,sc=5,rc=6,oc=7,up=0,uM=1,dM=2,xi=0,fM=1,hM=2,pM=3,mM=4,gM=5,_M=6,vM=7,dp=300,ir=301,sr=302,ac=303,lc=304,Da=306,cc=1e3,ds=1001,uc=1002,In=1003,xM=1004,fo=1005,Cn=1006,Qa=1007,fs=1008,Si=1009,fp=1010,hp=1011,Yr=1012,cu=1013,gs=1014,_i=1015,Qr=1016,uu=1017,du=1018,rr=1020,pp=35902,mp=1021,gp=1022,Rn=1023,_p=1024,vp=1025,Ks=1026,or=1027,xp=1028,fu=1029,yp=1030,hu=1031,pu=1033,Yo=33776,jo=33777,qo=33778,Ko=33779,dc=35840,fc=35841,hc=35842,pc=35843,mc=36196,gc=37492,_c=37496,vc=37808,xc=37809,yc=37810,Mc=37811,Sc=37812,bc=37813,Ec=37814,Tc=37815,wc=37816,Ac=37817,Cc=37818,Rc=37819,Pc=37820,Dc=37821,Zo=36492,Lc=36494,Ic=36495,Mp=36283,Uc=36284,Nc=36285,Oc=36286,yM=3200,MM=3201,Sp=0,SM=1,Oi="",gn="srgb",lr="srgb-linear",La="linear",de="srgb",Es=7680,Rd=519,bM=512,EM=513,TM=514,bp=515,wM=516,AM=517,CM=518,RM=519,Fc=35044,Pd="300 es",vi=2e3,ca=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fr=Math.PI/180,Bc=180/Math.PI;function Vi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function PM(n,t){return(n%t+t)%t}function tl(n,t,e){return(1-e)*n+e*t}function $n(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function fe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const DM={DEG2RAD:Fr};class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,i,s,r,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],v=i[8],_=s[0],m=s[3],p=s[6],D=s[1],P=s[4],T=s[7],k=s[2],V=s[5],N=s[8];return r[0]=o*_+a*D+l*k,r[3]=o*m+a*P+l*V,r[6]=o*p+a*T+l*N,r[1]=c*_+u*D+d*k,r[4]=c*m+u*P+d*V,r[7]=c*p+u*T+d*N,r[2]=f*_+h*D+v*k,r[5]=f*m+h*P+v*V,r[8]=f*p+h*T+v*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,h=c*r-o*l,v=e*d+i*f+s*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=d*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=h*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(el.makeScale(t,e)),this}rotate(t){return this.premultiply(el.makeRotation(-t)),this}translate(t,e){return this.premultiply(el.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const el=new Zt;function Ep(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LM(){const n=ua("canvas");return n.style.display="block",n}const Dd={};function Ar(n){n in Dd||(Dd[n]=!0,console.warn(n))}function IM(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function UM(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function NM(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===de&&(n.r=yi(n.r),n.g=yi(n.g),n.b=yi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===de&&(n.r=Zs(n.r),n.g=Zs(n.g),n.b=Zs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Oi?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function yi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ld=[.64,.33,.3,.6,.15,.06],Id=[.2126,.7152,.0722],Ud=[.3127,.329],Nd=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Od=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[lr]:{primaries:Ld,whitePoint:Ud,transfer:La,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:Ld,whitePoint:Ud,transfer:de,toXYZ:Nd,fromXYZ:Od,luminanceCoefficients:Id,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}});let Ts;class OM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=ua("canvas")),Ts.width=t.width,Ts.height=t.height;const i=Ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ua("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=yi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yi(e[i]/255)*255):e[i]=yi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let FM=0;class Tp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(nl(s[o].image)):r.push(nl(s[o]))}else r=nl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?OM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BM=0;class tn extends ys{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,i=ds,s=ds,r=Cn,o=fs,a=Rn,l=Si,c=tn.DEFAULT_ANISOTROPY,u=Oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=Vi(),this.name="",this.source=new Tp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case cc:t.x=t.x-Math.floor(t.x);break;case ds:t.x=t.x<0?0:1;break;case uc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case cc:t.y=t.y-Math.floor(t.y);break;case ds:t.y=t.y<0?0:1;break;case uc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=dp;tn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],v=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(v+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(c+1)/2,T=(h+1)/2,k=(p+1)/2,V=(u+f)/4,N=(d+_)/4,I=(v+m)/4;return P>T&&P>k?P<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(P),s=V/i,r=N/i):T>k?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=V/s,r=I/s):k<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),i=N/r,s=I/r),this.set(i,s,r,e),this}let D=Math.sqrt((m-v)*(m-v)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(D)<.001&&(D=1),this.x=(m-v)/D,this.y=(d-_)/D,this.z=(f-u)/D,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zM extends ys{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new tn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends zM{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wp extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends tn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vs{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],h=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=h,t[e+2]=v,t[e+3]=_;return}if(d!==_||l!==f||c!==h||u!==v){let m=1-a;const p=l*f+c*h+u*v+d*_,D=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){const k=Math.sqrt(P),V=Math.atan2(k,p*D);m=Math.sin(m*V)/k,a=Math.sin(a*V)/k}const T=a*D;if(l=l*m+f*T,c=c*m+h*T,u=u*m+v*T,d=d*m+_*T,m===1-a){const k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],h=r[o+2],v=r[o+3];return t[e]=a*v+u*d+l*h-c*f,t[e+1]=l*v+u*f+c*d-a*h,t[e+2]=c*v+u*h+a*f-l*d,t[e+3]=u*v-a*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),h=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"YXZ":this._x=f*u*d+c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"ZXY":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d-f*h*v;break;case"ZYX":this._x=f*u*d-c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d+f*h*v;break;case"YZX":this._x=f*u*d+c*h*v,this._y=c*h*d+f*u*v,this._z=c*u*v-f*h*d,this._w=c*u*d-f*h*v;break;case"XZY":this._x=f*u*d-c*h*v,this._y=c*h*d-f*u*v,this._z=c*u*v+f*h*d,this._w=c*u*d+f*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-e;return this._w=h*o+e*this._w,this._x=h*i+e*this._x,this._y=h*s+e*this._y,this._z=h*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,e=0,i=0){K.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return il.copy(this).projectOnVector(t),this.sub(il)}reflect(t){return this.sub(il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new K,Fd=new vs;class to{constructor(t=new K(1/0,1/0,1/0),e=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,En):En.fromBufferAttribute(r,o),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),po.subVectors(this.max,_r),ws.subVectors(t.a,_r),As.subVectors(t.b,_r),Cs.subVectors(t.c,_r),Ai.subVectors(As,ws),Ci.subVectors(Cs,As),Ki.subVectors(ws,Cs);let e=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-Ki.y,Ki.x,0];return!sl(e,ws,As,Cs,po)||(e=[1,0,0,0,1,0,0,0,1],!sl(e,ws,As,Cs,po))?!1:(mo.crossVectors(Ai,Ci),e=[mo.x,mo.y,mo.z],sl(e,ws,As,Cs,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const si=[new K,new K,new K,new K,new K,new K,new K,new K],En=new K,ho=new to,ws=new K,As=new K,Cs=new K,Ai=new K,Ci=new K,Ki=new K,_r=new K,po=new K,mo=new K,Zi=new K;function sl(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Zi.fromArray(n,r);const a=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),u=i.dot(Zi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const VM=new to,vr=new K,rl=new K;class Ia{constructor(t=new K,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):VM.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(vr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(rl)),this.expandByPoint(vr.copy(t.center).sub(rl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ri=new K,ol=new K,go=new K,Ri=new K,al=new K,_o=new K,ll=new K;class Ua{constructor(t=new K,e=new K(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ri)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ri.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ri.copy(this.origin).addScaledVector(this.direction,e),ri.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ol.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(ol);const r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=Ri.dot(this.direction),l=-Ri.dot(go),c=Ri.lengthSq(),u=Math.abs(1-o*o);let d,f,h,v;if(u>0)if(d=o*l-a,f=o*a-l,v=r*u,d>=0)if(f>=-v)if(f<=v){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ol).addScaledVector(go,f),h}intersectSphere(t,e){ri.subVectors(t.center,this.origin);const i=ri.dot(this.direction),s=ri.dot(ri)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ri)!==null}intersectTriangle(t,e,i,s,r){al.subVectors(e,t),_o.subVectors(i,t),ll.crossVectors(al,_o);let o=this.direction.dot(ll),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(_o.crossVectors(Ri,_o));if(l<0)return null;const c=a*this.direction.dot(al.cross(Ri));if(c<0||l+c>o)return null;const u=-a*Ri.dot(ll);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,i,s,r,o,a,l,c,u,d,f,h,v,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,h,v,_,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,h,v,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=v,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,h=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+v*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=v+h*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,h=l*d,v=c*u,_=c*d;e[0]=f+_*a,e[4]=v*a-h,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=h*a-v,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,h=l*d,v=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=v+h*a,e[1]=h+v*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,h=o*d,v=a*u,_=a*d;e[0]=l*u,e[4]=v*c-h,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=h*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,h=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=v*d+h,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=h*d+v,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,h=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=h*d-v,e[2]=v*d-h,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(HM,t,GM)}lookAt(t,e,i){const s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),Pi.crossVectors(i,an),Pi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Pi.crossVectors(i,an)),Pi.normalize(),vo.crossVectors(an,Pi),s[0]=Pi.x,s[4]=vo.x,s[8]=an.x,s[1]=Pi.y,s[5]=vo.y,s[9]=an.y,s[2]=Pi.z,s[6]=vo.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],v=i[2],_=i[6],m=i[10],p=i[14],D=i[3],P=i[7],T=i[11],k=i[15],V=s[0],N=s[4],I=s[8],E=s[12],w=s[1],C=s[5],et=s[9],nt=s[13],ot=s[2],mt=s[6],H=s[10],B=s[14],X=s[3],ht=s[7],U=s[11],L=s[15];return r[0]=o*V+a*w+l*ot+c*X,r[4]=o*N+a*C+l*mt+c*ht,r[8]=o*I+a*et+l*H+c*U,r[12]=o*E+a*nt+l*B+c*L,r[1]=u*V+d*w+f*ot+h*X,r[5]=u*N+d*C+f*mt+h*ht,r[9]=u*I+d*et+f*H+h*U,r[13]=u*E+d*nt+f*B+h*L,r[2]=v*V+_*w+m*ot+p*X,r[6]=v*N+_*C+m*mt+p*ht,r[10]=v*I+_*et+m*H+p*U,r[14]=v*E+_*nt+m*B+p*L,r[3]=D*V+P*w+T*ot+k*X,r[7]=D*N+P*C+T*mt+k*ht,r[11]=D*I+P*et+T*H+k*U,r[15]=D*E+P*nt+T*B+k*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],v=t[3],_=t[7],m=t[11],p=t[15];return v*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*h-i*l*h)+_*(+e*l*h-e*c*f+r*o*f-s*o*h+s*c*u-r*l*u)+m*(+e*c*d-e*a*h-r*o*d+i*o*h+r*a*u-i*c*u)+p*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],v=t[12],_=t[13],m=t[14],p=t[15],D=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,P=v*f*c-u*m*c-v*l*h+o*m*h+u*l*p-o*f*p,T=u*_*c-v*d*c+v*a*h-o*_*h-u*a*p+o*d*p,k=v*d*l-u*_*l-v*a*f+o*_*f+u*a*m-o*d*m,V=e*D+i*P+s*T+r*k;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/V;return t[0]=D*N,t[1]=(_*f*r-d*m*r-_*s*h+i*m*h+d*s*p-i*f*p)*N,t[2]=(a*m*r-_*l*r+_*s*c-i*m*c-a*s*p+i*l*p)*N,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*h-i*l*h)*N,t[4]=P*N,t[5]=(u*m*r-v*f*r+v*s*h-e*m*h-u*s*p+e*f*p)*N,t[6]=(v*l*r-o*m*r-v*s*c+e*m*c+o*s*p-e*l*p)*N,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*h+e*l*h)*N,t[8]=T*N,t[9]=(v*d*r-u*_*r-v*i*h+e*_*h+u*i*p-e*d*p)*N,t[10]=(o*_*r-v*a*r+v*i*c-e*_*c-o*i*p+e*a*p)*N,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*h-e*a*h)*N,t[12]=k*N,t[13]=(u*_*s-v*d*s+v*i*f-e*_*f-u*i*m+e*d*m)*N,t[14]=(v*a*s-o*_*s-v*i*l+e*_*l+o*i*m-e*a*m)*N,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,h=r*u,v=r*d,_=o*u,m=o*d,p=a*d,D=l*c,P=l*u,T=l*d,k=i.x,V=i.y,N=i.z;return s[0]=(1-(_+p))*k,s[1]=(h+T)*k,s[2]=(v-P)*k,s[3]=0,s[4]=(h-T)*V,s[5]=(1-(f+p))*V,s[6]=(m+D)*V,s[7]=0,s[8]=(v+P)*N,s[9]=(m-D)*N,s[10]=(1-(f+_))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Rs.set(s[0],s[1],s[2]).length();const o=Rs.set(s[4],s[5],s[6]).length(),a=Rs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Tn.copy(this);const c=1/r,u=1/o,d=1/a;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=d,Tn.elements[9]*=d,Tn.elements[10]*=d,e.setFromRotationMatrix(Tn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=vi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let h,v;if(a===vi)h=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===ca)h=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=vi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,h=(i+s)*u;let v,_;if(a===vi)v=(o+r)*d,_=-2*d;else if(a===ca)v=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Rs=new K,Tn=new ye,HM=new K(0,0,0),GM=new K(1,1,1),Pi=new K,vo=new K,an=new K,Bd=new ye,zd=new vs;class Qn{constructor(t=0,e=0,i=0,s=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Bd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zd.setFromEuler(this),this.setFromQuaternion(zd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class mu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let WM=0;const kd=new K,Ps=new vs,oi=new ye,xo=new K,xr=new K,XM=new K,$M=new vs,Vd=new K(1,0,0),Hd=new K(0,1,0),Gd=new K(0,0,1),Wd={type:"added"},YM={type:"removed"},Ds={type:"childadded",child:null},cl={type:"childremoved",child:null};class Ne extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:WM++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new K,e=new Qn,i=new vs,s=new K(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Zt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Vd,t)}rotateY(t){return this.rotateOnAxis(Hd,t)}rotateZ(t){return this.rotateOnAxis(Gd,t)}translateOnAxis(t,e){return kd.copy(t).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vd,t)}translateY(t){return this.translateOnAxis(Hd,t)}translateZ(t){return this.translateOnAxis(Gd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?xo.copy(t):xo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(xr,xo,this.up):oi.lookAt(xo,xr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(oi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(YM),cl.child=t,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),oi.multiply(t.parent.matrixWorld)),t.applyMatrix4(oi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,XM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,$M,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),h=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new K(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new K,ai=new K,ul=new K,li=new K,Ls=new K,Is=new K,Xd=new K,dl=new K,fl=new K,hl=new K,pl=new be,ml=new be,gl=new be;class un{constructor(t=new K,e=new K,i=new K){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){wn.subVectors(s,e),ai.subVectors(i,e),ul.subVectors(t,e);const o=wn.dot(wn),a=wn.dot(ai),l=wn.dot(ul),c=ai.dot(ai),u=ai.dot(ul),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,v=(o*u-a*l)*f;return r.set(1-h-v,v,h)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return pl.setScalar(0),ml.setScalar(0),gl.setScalar(0),pl.fromBufferAttribute(t,e),ml.fromBufferAttribute(t,i),gl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(pl,r.x),o.addScaledVector(ml,r.y),o.addScaledVector(gl,r.z),o}static isFrontFacing(t,e,i,s){return wn.subVectors(i,e),ai.subVectors(t,e),wn.cross(ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),wn.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Ls.subVectors(s,i),Is.subVectors(r,i),dl.subVectors(t,i);const l=Ls.dot(dl),c=Is.dot(dl);if(l<=0&&c<=0)return e.copy(i);fl.subVectors(t,s);const u=Ls.dot(fl),d=Is.dot(fl);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Ls,o);hl.subVectors(t,r);const h=Ls.dot(hl),v=Is.dot(hl);if(v>=0&&h<=v)return e.copy(r);const _=h*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Is,a);const m=u*v-h*d;if(m<=0&&d-u>=0&&h-v>=0)return Xd.subVectors(r,s),a=(d-u)/(d-u+(h-v)),e.copy(s).addScaledVector(Xd,a);const p=1/(m+_+f);return o=_*p,a=f*p,e.copy(i).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},yo={h:0,s:0,l:0};function _l(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=i,te.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=te.workingColorSpace){if(t=PM(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=gn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return te.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ke(ke.r*255,0,255))*65536+Math.round(Ke(ke.g*255,0,255))*256+Math.round(Ke(ke.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(ke.copy(this),e);const i=ke.r,s=ke.g,r=ke.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=gn){te.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,i=ke.g,s=ke.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(yo);const i=tl(Di.h,yo.h,e),s=tl(Di.s,yo.s,e),r=tl(Di.l,yo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new $t;$t.NAMES=Ap;let jM=0;class Ms extends ys{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Vi(),this.name="",this.blending=qs,this.side=Wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(i.blending=this.blending),this.side!==Wi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cp extends Ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const we=new K,Mo=new Xt;class Un{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Fc,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$n(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$n(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$n(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fc&&(t.usage=this.usage),t}}class Rp extends Un{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Pp extends Un{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class xn extends Un{constructor(t,e,i){super(new Float32Array(t),e,i)}}let qM=0;const mn=new ye,vl=new Ne,Us=new K,ln=new to,yr=new to,Le=new K;class Je extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ep(t)?Pp:Rp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,i){return mn.makeTranslation(t,e,i),this.applyMatrix4(mn),this}scale(t,e,i){return mn.makeScale(t,e,i),this.applyMatrix4(mn),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(ln.min,yr.min),ln.expandByPoint(Le),Le.addVectors(ln.max,yr.max),ln.expandByPoint(Le)):(ln.expandByPoint(yr.min),ln.expandByPoint(yr.max))}ln.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(Us.fromBufferAttribute(t,c),Le.add(Us)),s=Math.max(s,i.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new K,l[I]=new K;const c=new K,u=new K,d=new K,f=new Xt,h=new Xt,v=new Xt,_=new K,m=new K;function p(I,E,w){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,w),f.fromBufferAttribute(r,I),h.fromBufferAttribute(r,E),v.fromBufferAttribute(r,w),u.sub(c),d.sub(c),h.sub(f),v.sub(f);const C=1/(h.x*v.y-v.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(d,-h.y).multiplyScalar(C),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(C),a[I].add(_),a[E].add(_),a[w].add(_),l[I].add(m),l[E].add(m),l[w].add(m))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let I=0,E=D.length;I<E;++I){const w=D[I],C=w.start,et=w.count;for(let nt=C,ot=C+et;nt<ot;nt+=3)p(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const P=new K,T=new K,k=new K,V=new K;function N(I){k.fromBufferAttribute(s,I),V.copy(k);const E=a[I];P.copy(E),P.sub(k.multiplyScalar(k.dot(E))).normalize(),T.crossVectors(V,E);const C=T.dot(l[I])<0?-1:1;o.setXYZW(I,P.x,P.y,P.z,C)}for(let I=0,E=D.length;I<E;++I){const w=D[I],C=w.start,et=w.count;for(let nt=C,ot=C+et;nt<ot;nt+=3)N(t.getX(nt+0)),N(t.getX(nt+1)),N(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const s=new K,r=new K,o=new K,a=new K,l=new K,c=new K,u=new K,d=new K;if(t)for(let f=0,h=t.count;f<h;f+=3){const v=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,v=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[v++]=c[h++]}return new Un(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=t(f,i);l.push(h)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $d=new ye,Ji=new Ua,So=new Ia,Yd=new K,bo=new K,Eo=new K,To=new K,xl=new K,wo=new K,jd=new K,Ao=new K;class Pn extends Ne{constructor(t=new Je,e=new Cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(xl.fromBufferAttribute(d,t),o?wo.addScaledVector(xl,u):wo.addScaledVector(xl.sub(e),u))}e.add(wo)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(So.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(So,Yd)===null||Ji.origin.distanceToSquared(Yd)>(t.far-t.near)**2))&&($d.copy(r).invert(),Ji.copy(t.ray).applyMatrix4($d),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],D=Math.max(m.start,h.start),P=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let T=D,k=P;T<k;T+=3){const V=a.getX(T),N=a.getX(T+1),I=a.getX(T+2);s=Co(this,p,t,i,c,u,d,V,N,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const D=a.getX(m),P=a.getX(m+1),T=a.getX(m+2);s=Co(this,o,t,i,c,u,d,D,P,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=f.length;v<_;v++){const m=f[v],p=o[m.materialIndex],D=Math.max(m.start,h.start),P=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=D,k=P;T<k;T+=3){const V=T,N=T+1,I=T+2;s=Co(this,p,t,i,c,u,d,V,N,I),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=v,p=_;m<p;m+=3){const D=m,P=m+1,T=m+2;s=Co(this,o,t,i,c,u,d,D,P,T),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function KM(n,t,e,i,s,r,o,a){let l;if(t.side===rn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Wi,a),l===null)return null;Ao.copy(a),Ao.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Ao);return c<e.near||c>e.far?null:{distance:c,point:Ao.clone(),object:n}}function Co(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,bo),n.getVertexPosition(l,Eo),n.getVertexPosition(c,To);const u=KM(n,t,e,i,bo,Eo,To,jd);if(u){const d=new K;un.getBarycoord(jd,bo,Eo,To,d),s&&(u.uv=un.getInterpolatedAttribute(s,a,l,c,d,new Xt)),r&&(u.uv1=un.getInterpolatedAttribute(r,a,l,c,d,new Xt)),o&&(u.normal=un.getInterpolatedAttribute(o,a,l,c,d,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};un.getNormal(bo,Eo,To,f.normal),u.face=f,u.barycoord=d}return u}class cr extends Je{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2));function v(_,m,p,D,P,T,k,V,N,I,E){const w=T/N,C=k/I,et=T/2,nt=k/2,ot=V/2,mt=N+1,H=I+1;let B=0,X=0;const ht=new K;for(let U=0;U<H;U++){const L=U*C-nt;for(let dt=0;dt<mt;dt++){const bt=dt*w-et;ht[_]=bt*D,ht[m]=L*P,ht[p]=ot,c.push(ht.x,ht.y,ht.z),ht[_]=0,ht[m]=0,ht[p]=V>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(dt/N),d.push(1-U/I),B+=1}}for(let U=0;U<I;U++)for(let L=0;L<N;L++){const dt=f+L+mt*U,bt=f+L+mt*(U+1),Y=f+(L+1)+mt*(U+1),at=f+(L+1)+mt*U;l.push(dt,bt,at),l.push(bt,Y,at),X+=6}a.addGroup(h,X,E),h+=X,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){const t={};for(let e=0;e<n.length;e++){const i=ar(n[e]);for(const s in i)t[s]=i[s]}return t}function ZM(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Dp(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const JM={clone:ar,merge:Ye};var QM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=QM,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=ZM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Lp extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new K,qd=new Xt,Kd=new Xt;class _n extends Lp{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bc*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,qd,Kd),e.subVectors(Kd,qd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ns=-90,Os=1;class eS extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(Ns,Os,t,e);s.layers=this.layers,this.add(s);const r=new _n(Ns,Os,t,e);r.layers=this.layers,this.add(r);const o=new _n(Ns,Os,t,e);o.layers=this.layers,this.add(o);const a=new _n(Ns,Os,t,e);a.layers=this.layers,this.add(a);const l=new _n(Ns,Os,t,e);l.layers=this.layers,this.add(l);const c=new _n(Ns,Os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Ip extends tn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ir,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nS extends _s{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ip(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new Xi({name:"CubemapFromEquirect",uniforms:ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ki});r.uniforms.tEquirect.value=e;const o=new Pn(s,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Cn),new eS(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const yl=new K,iS=new K,sS=new Zt;class Ni{constructor(t=new K(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=yl.subVectors(i,e).cross(iS.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(yl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||sS.getNormalMatrix(t),s=this.coplanarPoint(yl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Ia,Ro=new K;class gu{constructor(t=new Ni,e=new Ni,i=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=vi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],h=s[8],v=s[9],_=s[10],m=s[11],p=s[12],D=s[13],P=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,m-h,T-p).normalize(),i[1].setComponents(l+r,f+c,m+h,T+p).normalize(),i[2].setComponents(l+o,f+u,m+v,T+D).normalize(),i[3].setComponents(l-o,f-u,m-v,T-D).normalize(),i[4].setComponents(l-a,f-d,m-_,T-P).normalize(),e===vi)i[5].setComponents(l+a,f+d,m+_,T+P).normalize();else if(e===ca)i[5].setComponents(a,d,_,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ro.x=s.normal.x>0?t.max.x:t.min.x,Ro.y=s.normal.y>0?t.max.y:t.min.y,Ro.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Up(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function rS(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,v)=>h.start-v.start);let f=0;for(let h=1;h<d.length;h++){const v=d[f],_=d[h];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,v=d.length;h<v;h++){const _=d[h];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class eo extends Je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,h=[],v=[],_=[],m=[];for(let p=0;p<u;p++){const D=p*f-o;for(let P=0;P<c;P++){const T=P*d-r;v.push(T,-D,0),_.push(0,0,1),m.push(P/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let D=0;D<a;D++){const P=D+c*p,T=D+c*(p+1),k=D+1+c*(p+1),V=D+1+c*p;h.push(P,T,V),h.push(T,k,V)}this.setIndex(h),this.setAttribute("position",new xn(v,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.width,t.height,t.widthSegments,t.heightSegments)}}var oS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aS=`#ifdef USE_ALPHAHASH
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
#endif`,lS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fS=`#ifdef USE_AOMAP
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
#endif`,hS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pS=`#ifdef USE_BATCHING
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
#endif`,mS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xS=`#ifdef USE_IRIDESCENCE
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
#endif`,yS=`#ifdef USE_BUMPMAP
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
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,AS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,RS=`#define PI 3.141592653589793
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
} // validated`,PS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,US=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OS="gl_FragColor = linearToOutputTexel( gl_FragColor );",FS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,BS=`#ifdef USE_ENVMAP
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
#endif`,zS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kS=`#ifdef USE_ENVMAP
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
#endif`,VS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YS=`#ifdef USE_GRADIENTMAP
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
}`,jS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZS=`uniform bool receiveShadow;
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
#endif`,JS=`#ifdef USE_ENVMAP
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
#endif`,QS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
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
#endif`,sb=`struct PhysicalMaterial {
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
}`,rb=`
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
#endif`,ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,ab=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mb=`#if defined( USE_POINTS_UV )
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
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Eb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Db=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ib=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ob=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wb=`float getShadowMask() {
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
}`,Xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Yb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,eE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,oE=`uniform sampler2D t2D;
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
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dE=`#include <common>
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
}`,fE=`#if DEPTH_PACKING == 3200
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
}`,hE=`#define DISTANCE
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
}`,pE=`#define DISTANCE
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
}`,mE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_E=`uniform float scale;
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
}`,vE=`uniform vec3 diffuse;
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
}`,xE=`#include <common>
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
}`,yE=`uniform vec3 diffuse;
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
}`,ME=`#define LAMBERT
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
}`,SE=`#define LAMBERT
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
}`,bE=`#define MATCAP
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
}`,EE=`#define MATCAP
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
}`,TE=`#define NORMAL
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
}`,wE=`#define NORMAL
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
}`,AE=`#define PHONG
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
}`,CE=`#define PHONG
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
}`,RE=`#define STANDARD
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
}`,PE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,LE=`#define TOON
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
}`,IE=`uniform float size;
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
}`,UE=`uniform vec3 diffuse;
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
}`,NE=`#include <common>
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
}`,OE=`uniform vec3 color;
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
}`,FE=`uniform float rotation;
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
}`,BE=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:oS,alphahash_pars_fragment:aS,alphamap_fragment:lS,alphamap_pars_fragment:cS,alphatest_fragment:uS,alphatest_pars_fragment:dS,aomap_fragment:fS,aomap_pars_fragment:hS,batching_pars_vertex:pS,batching_vertex:mS,begin_vertex:gS,beginnormal_vertex:_S,bsdfs:vS,iridescence_fragment:xS,bumpmap_pars_fragment:yS,clipping_planes_fragment:MS,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:bS,clipping_planes_vertex:ES,color_fragment:TS,color_pars_fragment:wS,color_pars_vertex:AS,color_vertex:CS,common:RS,cube_uv_reflection_fragment:PS,defaultnormal_vertex:DS,displacementmap_pars_vertex:LS,displacementmap_vertex:IS,emissivemap_fragment:US,emissivemap_pars_fragment:NS,colorspace_fragment:OS,colorspace_pars_fragment:FS,envmap_fragment:BS,envmap_common_pars_fragment:zS,envmap_pars_fragment:kS,envmap_pars_vertex:VS,envmap_physical_pars_fragment:JS,envmap_vertex:HS,fog_vertex:GS,fog_pars_vertex:WS,fog_fragment:XS,fog_pars_fragment:$S,gradientmap_pars_fragment:YS,lightmap_pars_fragment:jS,lights_lambert_fragment:qS,lights_lambert_pars_fragment:KS,lights_pars_begin:ZS,lights_toon_fragment:QS,lights_toon_pars_fragment:tb,lights_phong_fragment:eb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:sb,lights_fragment_begin:rb,lights_fragment_maps:ob,lights_fragment_end:ab,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:db,map_fragment:fb,map_pars_fragment:hb,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:xb,morphnormal_vertex:yb,morphtarget_pars_vertex:Mb,morphtarget_vertex:Sb,normal_fragment_begin:bb,normal_fragment_maps:Eb,normal_pars_fragment:Tb,normal_pars_vertex:wb,normal_vertex:Ab,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Pb,clearcoat_pars_fragment:Db,iridescence_pars_fragment:Lb,opaque_fragment:Ib,packing:Ub,premultiplied_alpha_fragment:Nb,project_vertex:Ob,dithering_fragment:Fb,dithering_pars_fragment:Bb,roughnessmap_fragment:zb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Vb,shadowmap_pars_vertex:Hb,shadowmap_vertex:Gb,shadowmask_pars_fragment:Wb,skinbase_vertex:Xb,skinning_pars_vertex:$b,skinning_vertex:Yb,skinnormal_vertex:jb,specularmap_fragment:qb,specularmap_pars_fragment:Kb,tonemapping_fragment:Zb,tonemapping_pars_fragment:Jb,transmission_fragment:Qb,transmission_pars_fragment:tE,uv_pars_fragment:eE,uv_pars_vertex:nE,uv_vertex:iE,worldpos_vertex:sE,background_vert:rE,background_frag:oE,backgroundCube_vert:aE,backgroundCube_frag:lE,cube_vert:cE,cube_frag:uE,depth_vert:dE,depth_frag:fE,distanceRGBA_vert:hE,distanceRGBA_frag:pE,equirect_vert:mE,equirect_frag:gE,linedashed_vert:_E,linedashed_frag:vE,meshbasic_vert:xE,meshbasic_frag:yE,meshlambert_vert:ME,meshlambert_frag:SE,meshmatcap_vert:bE,meshmatcap_frag:EE,meshnormal_vert:TE,meshnormal_frag:wE,meshphong_vert:AE,meshphong_frag:CE,meshphysical_vert:RE,meshphysical_frag:PE,meshtoon_vert:DE,meshtoon_frag:LE,points_vert:IE,points_frag:UE,shadow_vert:NE,shadow_frag:OE,sprite_vert:FE,sprite_frag:BE},Pt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Wn={basic:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ye([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ye([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ye([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ye([Pt.points,Pt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ye([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ye([Pt.common,Pt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ye([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ye([Pt.sprite,Pt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ye([Pt.common,Pt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ye([Pt.lights,Pt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Wn.physical={uniforms:Ye([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Po={r:0,b:0,g:0},ts=new Qn,zE=new ye;function kE(n,t,e,i,s,r,o){const a=new $t(0);let l=r===!0?0:1,c,u,d=null,f=0,h=null;function v(D){let P=D.isScene===!0?D.background:null;return P&&P.isTexture&&(P=(D.backgroundBlurriness>0?e:t).get(P)),P}function _(D){let P=!1;const T=v(D);T===null?p(a,l):T&&T.isColor&&(p(T,1),P=!0);const k=n.xr.getEnvironmentBlendMode();k==="additive"?i.buffers.color.setClear(0,0,0,1,o):k==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(D,P){const T=v(P);T&&(T.isCubeTexture||T.mapping===Da)?(u===void 0&&(u=new Pn(new cr(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:ar(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,V,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(P.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zE.makeRotationFromEuler(ts)),u.material.toneMapped=te.getTransfer(T.colorSpace)!==de,(d!==T||f!==T.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),u.layers.enableAll(),D.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Pn(new eo(2,2),new Xi({name:"BackgroundMaterial",uniforms:ar(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:Wi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,c.material.toneMapped=te.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(d!==T||f!==T.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=T,f=T.version,h=n.toneMapping),c.layers.enableAll(),D.unshift(c,c.geometry,c.material,0,0,null))}function p(D,P){D.getRGB(Po,Dp(n)),i.buffers.color.setClear(Po.r,Po.g,Po.b,P,o)}return{getClearColor:function(){return a},setClearColor:function(D,P=1){a.set(D),l=P,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(D){l=D,p(a,l)},render:_,addToRenderList:m}}function VE(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(w,C,et,nt,ot){let mt=!1;const H=d(nt,et,C);r!==H&&(r=H,c(r.object)),mt=h(w,nt,et,ot),mt&&v(w,nt,et,ot),ot!==null&&t.update(ot,n.ELEMENT_ARRAY_BUFFER),(mt||o)&&(o=!1,T(w,C,et,nt),ot!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ot).buffer))}function l(){return n.createVertexArray()}function c(w){return n.bindVertexArray(w)}function u(w){return n.deleteVertexArray(w)}function d(w,C,et){const nt=et.wireframe===!0;let ot=i[w.id];ot===void 0&&(ot={},i[w.id]=ot);let mt=ot[C.id];mt===void 0&&(mt={},ot[C.id]=mt);let H=mt[nt];return H===void 0&&(H=f(l()),mt[nt]=H),H}function f(w){const C=[],et=[],nt=[];for(let ot=0;ot<e;ot++)C[ot]=0,et[ot]=0,nt[ot]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:et,attributeDivisors:nt,object:w,attributes:{},index:null}}function h(w,C,et,nt){const ot=r.attributes,mt=C.attributes;let H=0;const B=et.getAttributes();for(const X in B)if(B[X].location>=0){const U=ot[X];let L=mt[X];if(L===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(L=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(L=w.instanceColor)),U===void 0||U.attribute!==L||L&&U.data!==L.data)return!0;H++}return r.attributesNum!==H||r.index!==nt}function v(w,C,et,nt){const ot={},mt=C.attributes;let H=0;const B=et.getAttributes();for(const X in B)if(B[X].location>=0){let U=mt[X];U===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(U=w.instanceColor));const L={};L.attribute=U,U&&U.data&&(L.data=U.data),ot[X]=L,H++}r.attributes=ot,r.attributesNum=H,r.index=nt}function _(){const w=r.newAttributes;for(let C=0,et=w.length;C<et;C++)w[C]=0}function m(w){p(w,0)}function p(w,C){const et=r.newAttributes,nt=r.enabledAttributes,ot=r.attributeDivisors;et[w]=1,nt[w]===0&&(n.enableVertexAttribArray(w),nt[w]=1),ot[w]!==C&&(n.vertexAttribDivisor(w,C),ot[w]=C)}function D(){const w=r.newAttributes,C=r.enabledAttributes;for(let et=0,nt=C.length;et<nt;et++)C[et]!==w[et]&&(n.disableVertexAttribArray(et),C[et]=0)}function P(w,C,et,nt,ot,mt,H){H===!0?n.vertexAttribIPointer(w,C,et,ot,mt):n.vertexAttribPointer(w,C,et,nt,ot,mt)}function T(w,C,et,nt){_();const ot=nt.attributes,mt=et.getAttributes(),H=C.defaultAttributeValues;for(const B in mt){const X=mt[B];if(X.location>=0){let ht=ot[B];if(ht===void 0&&(B==="instanceMatrix"&&w.instanceMatrix&&(ht=w.instanceMatrix),B==="instanceColor"&&w.instanceColor&&(ht=w.instanceColor)),ht!==void 0){const U=ht.normalized,L=ht.itemSize,dt=t.get(ht);if(dt===void 0)continue;const bt=dt.buffer,Y=dt.type,at=dt.bytesPerElement,_t=Y===n.INT||Y===n.UNSIGNED_INT||ht.gpuType===cu;if(ht.isInterleavedBufferAttribute){const O=ht.data,G=O.stride,$=ht.offset;if(O.isInstancedInterleavedBuffer){for(let ct=0;ct<X.locationSize;ct++)p(X.location+ct,O.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ct=0;ct<X.locationSize;ct++)m(X.location+ct);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let ct=0;ct<X.locationSize;ct++)P(X.location+ct,L/X.locationSize,Y,U,G*at,($+L/X.locationSize*ct)*at,_t)}else{if(ht.isInstancedBufferAttribute){for(let O=0;O<X.locationSize;O++)p(X.location+O,ht.meshPerAttribute);w.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let O=0;O<X.locationSize;O++)m(X.location+O);n.bindBuffer(n.ARRAY_BUFFER,bt);for(let O=0;O<X.locationSize;O++)P(X.location+O,L/X.locationSize,Y,U,L*at,L/X.locationSize*O*at,_t)}}else if(H!==void 0){const U=H[B];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(X.location,U);break;case 3:n.vertexAttrib3fv(X.location,U);break;case 4:n.vertexAttrib4fv(X.location,U);break;default:n.vertexAttrib1fv(X.location,U)}}}}D()}function k(){I();for(const w in i){const C=i[w];for(const et in C){const nt=C[et];for(const ot in nt)u(nt[ot].object),delete nt[ot];delete C[et]}delete i[w]}}function V(w){if(i[w.id]===void 0)return;const C=i[w.id];for(const et in C){const nt=C[et];for(const ot in nt)u(nt[ot].object),delete nt[ot];delete C[et]}delete i[w.id]}function N(w){for(const C in i){const et=i[C];if(et[w.id]===void 0)continue;const nt=et[w.id];for(const ot in nt)u(nt[ot].object),delete nt[ot];delete et[w.id]}}function I(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:E,dispose:k,releaseStatesOfGeometry:V,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:m,disableUnusedAttributes:D}}function HE(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let v=0;v<d;v++)h+=u[v];e.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=u[_]*f[_];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function GE(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Rn&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const I=N===Qr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Si&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==_i&&!I)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),D=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),T=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),k=v>0,V=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:T,vertexTextures:k,maxSamples:V}}function WE(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ni,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||s;return s=f,i=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){const v=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||v===null||v.length===0||r&&!m)r?u(null):c();else{const D=r?0:i,P=D*4;let T=p.clippingState||null;l.value=T,T=u(v,f,P,h);for(let k=0;k!==P;++k)T[k]=e[k];p.clippingState=T,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=D}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,h,v){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,v!==!0||m===null){const p=h+_*4,D=f.matrixWorldInverse;a.getNormalMatrix(D),(m===null||m.length<p)&&(m=new Float32Array(p));for(let P=0,T=h;P!==_;++P,T+=4)o.copy(d[P]).applyMatrix4(D,a),o.normal.toArray(m,T),m[T+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function XE(n){let t=new WeakMap;function e(o,a){return a===ac?o.mapping=ir:a===lc&&(o.mapping=sr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ac||a===lc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nS(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Np extends Lp{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xs=4,Zd=[.125,.215,.35,.446,.526,.582],as=20,Ml=new Np,Jd=new $t;let Sl=null,bl=0,El=0,Tl=!1;const ss=(1+Math.sqrt(5))/2,Fs=1/ss,Qd=[new K(-ss,Fs,0),new K(ss,Fs,0),new K(-Fs,0,ss),new K(Fs,0,ss),new K(0,ss,-Fs),new K(0,ss,Fs),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class tf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sl,bl,El),this._renderer.xr.enabled=Tl,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sl=this._renderer.getRenderTarget(),bl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Qr,format:Rn,colorSpace:lr,depthBuffer:!1},s=ef(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$E(r)),this._blurMaterial=YE(r,t,e)}return s}_compileMaterial(t){const e=new Pn(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,i,s){const a=new _n(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Jd),u.toneMapping=xi,u.autoClear=!1;const h=new Cp({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new Pn(new cr,h);let _=!1;const m=t.background;m?m.isColor&&(h.color.copy(m),t.background=null,_=!0):(h.color.copy(Jd),_=!0);for(let p=0;p<6;p++){const D=p%3;D===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):D===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const P=this._cubeSize;Do(s,D*P,p>2?P:0,P,P),u.setRenderTarget(s),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ir||t.mapping===sr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nf());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Ml)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qd[(s-r-1)%Qd.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Pn(this._lodPlanes[s],c),f=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*as-1),_=r/v,m=isFinite(r)?1+Math.floor(u*_):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let D=0;for(let N=0;N<as;++N){const I=N/_,E=Math.exp(-I*I/2);p.push(E),N===0?D+=E:N<m&&(D+=2*E)}for(let N=0;N<p.length;N++)p[N]=p[N]/D;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:P}=this;f.dTheta.value=v,f.mipInt.value=P-i;const T=this._sizeLods[s],k=3*T*(s>P-Xs?s-P+Xs:0),V=4*(this._cubeSize-T);Do(e,k,V,3*T,2*T),l.setRenderTarget(e),l.render(d,Ml)}}function $E(n){const t=[],e=[],i=[];let s=n;const r=n-Xs+1+Zd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xs?l=Zd[o-n+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,v=6,_=3,m=2,p=1,D=new Float32Array(_*v*h),P=new Float32Array(m*v*h),T=new Float32Array(p*v*h);for(let V=0;V<h;V++){const N=V%3*2/3-1,I=V>2?0:-1,E=[N,I,0,N+2/3,I,0,N+2/3,I+1,0,N,I,0,N+2/3,I+1,0,N,I+1,0];D.set(E,_*v*V),P.set(f,m*v*V);const w=[V,V,V,V,V,V];T.set(w,p*v*V)}const k=new Je;k.setAttribute("position",new Un(D,_)),k.setAttribute("uv",new Un(P,m)),k.setAttribute("faceIndex",new Un(T,p)),t.push(k),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ef(n,t,e){const i=new _s(n,t,e);return i.texture.mapping=Da,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function YE(n,t,e){const i=new Float32Array(as),s=new K(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function nf(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_u(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function sf(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function _u(){return`

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
	`}function jE(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ac||l===lc,u=l===ir||l===sr;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&s(h)?(e===null&&(e=new tf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function qE(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ar("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function KE(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const _=f.morphAttributes[v];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const h=r.get(f);h&&(t.remove(h),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const v in f)t.update(f[v],n.ARRAY_BUFFER);const h=d.morphAttributes;for(const v in h){const _=h[v];for(let m=0,p=_.length;m<p;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(d){const f=[],h=d.index,v=d.attributes.position;let _=0;if(h!==null){const D=h.array;_=h.version;for(let P=0,T=D.length;P<T;P+=3){const k=D[P+0],V=D[P+1],N=D[P+2];f.push(k,V,V,N,N,k)}}else if(v!==void 0){const D=v.array;_=v.version;for(let P=0,T=D.length/3-1;P<T;P+=3){const k=P+0,V=P+1,N=P+2;f.push(k,V,V,N,N,k)}}else return;const m=new(Ep(f)?Pp:Rp)(f,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const f=r.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function ZE(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*o),e.update(h,i,1)}function c(f,h,v){v!==0&&(n.drawElementsInstanced(i,h,r,f*o,v),e.update(h,i,v))}function u(f,h,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];e.update(m,i,1)}function d(f,h,v,_){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,r,f,0,_,0,v);let p=0;for(let D=0;D<v;D++)p+=h[D]*_[D];e.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function JE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function QE(n,t,e){const i=new WeakMap,s=new be;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let w=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",w)};var h=w;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],D=a.morphAttributes.normal||[],P=a.morphAttributes.color||[];let T=0;v===!0&&(T=1),_===!0&&(T=2),m===!0&&(T=3);let k=a.attributes.position.count*T,V=1;k>t.maxTextureSize&&(V=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const N=new Float32Array(k*V*4*d),I=new wp(N,k,V,d);I.type=_i,I.needsUpdate=!0;const E=T*4;for(let C=0;C<d;C++){const et=p[C],nt=D[C],ot=P[C],mt=k*V*4*C;for(let H=0;H<et.count;H++){const B=H*E;v===!0&&(s.fromBufferAttribute(et,H),N[mt+B+0]=s.x,N[mt+B+1]=s.y,N[mt+B+2]=s.z,N[mt+B+3]=0),_===!0&&(s.fromBufferAttribute(nt,H),N[mt+B+4]=s.x,N[mt+B+5]=s.y,N[mt+B+6]=s.z,N[mt+B+7]=0),m===!0&&(s.fromBufferAttribute(ot,H),N[mt+B+8]=s.x,N[mt+B+9]=s.y,N[mt+B+10]=s.z,N[mt+B+11]=ot.itemSize===4?s.w:1)}}f={count:d,texture:I,size:new Xt(k,V)},i.set(a,f),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function t1(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Op extends tn{constructor(t,e,i,s,r,o,a,l,c,u=Ks){if(u!==Ks&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ks&&(i=gs),i===void 0&&u===or&&(i=rr),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:In,this.minFilter=l!==void 0?l:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Fp=new tn,rf=new Op(1,1),Bp=new wp,zp=new kM,kp=new Ip,of=[],af=[],lf=new Float32Array(16),cf=new Float32Array(9),uf=new Float32Array(4);function ur(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=of[s];if(r===void 0&&(r=new Float32Array(s),of[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Na(n,t){let e=af[t];e===void 0&&(e=new Int32Array(t),af[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function e1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function n1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function i1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function s1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function r1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),De(e,i)}}function o1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;cf.set(i),n.uniformMatrix3fv(this.addr,!1,cf),De(e,i)}}function a1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Pe(e,i))return;lf.set(i),n.uniformMatrix4fv(this.addr,!1,lf),De(e,i)}}function l1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function c1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function u1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function d1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function f1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function h1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function m1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function g1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(rf.compareFunction=bp,r=rf):r=Fp,e.setTexture2D(t||r,s)}function _1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zp,s)}function v1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||kp,s)}function x1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Bp,s)}function y1(n){switch(n){case 5126:return e1;case 35664:return n1;case 35665:return i1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return a1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return u1;case 35669:case 35673:return d1;case 5125:return f1;case 36294:return h1;case 36295:return p1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return v1;case 36289:case 36303:case 36311:case 36292:return x1}}function M1(n,t){n.uniform1fv(this.addr,t)}function S1(n,t){const e=ur(t,this.size,2);n.uniform2fv(this.addr,e)}function b1(n,t){const e=ur(t,this.size,3);n.uniform3fv(this.addr,e)}function E1(n,t){const e=ur(t,this.size,4);n.uniform4fv(this.addr,e)}function T1(n,t){const e=ur(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function w1(n,t){const e=ur(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function A1(n,t){const e=ur(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function C1(n,t){n.uniform1iv(this.addr,t)}function R1(n,t){n.uniform2iv(this.addr,t)}function P1(n,t){n.uniform3iv(this.addr,t)}function D1(n,t){n.uniform4iv(this.addr,t)}function L1(n,t){n.uniform1uiv(this.addr,t)}function I1(n,t){n.uniform2uiv(this.addr,t)}function U1(n,t){n.uniform3uiv(this.addr,t)}function N1(n,t){n.uniform4uiv(this.addr,t)}function O1(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Fp,r[o])}function F1(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||zp,r[o])}function B1(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||kp,r[o])}function z1(n,t,e){const i=this.cache,s=t.length,r=Na(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Bp,r[o])}function k1(n){switch(n){case 5126:return M1;case 35664:return S1;case 35665:return b1;case 35666:return E1;case 35674:return T1;case 35675:return w1;case 35676:return A1;case 5124:case 35670:return C1;case 35667:case 35671:return R1;case 35668:case 35672:return P1;case 35669:case 35673:return D1;case 5125:return L1;case 36294:return I1;case 36295:return U1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}class V1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=y1(e.type)}}class H1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k1(e.type)}}class G1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const wl=/(\w+)(\])?(\[|\.)?/g;function df(n,t){n.seq.push(t),n.map[t.id]=t}function W1(n,t,e){const i=n.name,s=i.length;for(wl.lastIndex=0;;){const r=wl.exec(i),o=wl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){df(e,c===void 0?new V1(a,n,t):new H1(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new G1(a),df(e,d)),e=d}}}class Jo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W1(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function ff(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const X1=37297;let $1=0;function Y1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const hf=new Zt;function j1(n){te._getMatrix(hf,te.workingColorSpace,n);const t=`mat3( ${hf.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(n)){case La:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y1(n.getShaderSource(t),o)}else return s}function q1(n,t){const e=j1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function K1(n,t){let e;switch(t){case fM:e="Linear";break;case hM:e="Reinhard";break;case pM:e="Cineon";break;case mM:e="ACESFilmic";break;case _M:e="AgX";break;case vM:e="Neutral";break;case gM:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Lo=new K;function Z1(){te.getLuminanceCoefficients(Lo);const n=Lo.x.toFixed(4),t=Lo.y.toFixed(4),e=Lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cr).join(`
`)}function Q1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function tT(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Cr(n){return n!==""}function mf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eT=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(eT,iT)}const nT=new Map;function iT(n,t){let e=Jt[t];if(e===void 0){const i=nT.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return zc(e)}const sT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _f(n){return n.replace(sT,rT)}function rT(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function oT(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ci&&(t="SHADOWMAP_TYPE_VSM"),t}function aT(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lT(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case sr:t="ENVMAP_MODE_REFRACTION";break}return t}function cT(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case up:t="ENVMAP_BLENDING_MULTIPLY";break;case uM:t="ENVMAP_BLENDING_MIX";break;case dM:t="ENVMAP_BLENDING_ADD";break}return t}function uT(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function dT(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=oT(e),c=aT(e),u=lT(e),d=cT(e),f=uT(e),h=J1(e),v=Q1(r),_=s.createProgram();let m,p,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Cr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Cr).join(`
`),p.length>0&&(p+=`
`)):(m=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),p=[vf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?Jt.tonemapping_pars_fragment:"",e.toneMapping!==xi?K1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,q1("linearToOutputTexel",e.outputColorSpace),Z1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cr).join(`
`)),o=zc(o),o=mf(o,e),o=gf(o,e),a=zc(a),a=mf(a,e),a=gf(a,e),o=_f(o),a=_f(a),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Pd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=D+m+o,T=D+p+a,k=ff(s,s.VERTEX_SHADER,P),V=ff(s,s.FRAGMENT_SHADER,T);s.attachShader(_,k),s.attachShader(_,V),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function N(C){if(n.debug.checkShaderErrors){const et=s.getProgramInfoLog(_).trim(),nt=s.getShaderInfoLog(k).trim(),ot=s.getShaderInfoLog(V).trim();let mt=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,k,V);else{const B=pf(s,k,"vertex"),X=pf(s,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+et+`
`+B+`
`+X)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(nt===""||ot==="")&&(H=!1);H&&(C.diagnostics={runnable:mt,programLog:et,vertexShader:{log:nt,prefix:m},fragmentShader:{log:ot,prefix:p}})}s.deleteShader(k),s.deleteShader(V),I=new Jo(s,_),E=tT(s,_)}let I;this.getUniforms=function(){return I===void 0&&N(this),I};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(_,X1)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=k,this.fragmentShader=V,this}let fT=0;class hT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new pT(t),e.set(t,i)),i}}class pT{constructor(t){this.id=fT++,this.code=t,this.usedTimes=0}}function mT(n,t,e,i,s,r,o){const a=new mu,l=new hT,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let h=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,w,C,et,nt){const ot=et.fog,mt=nt.geometry,H=E.isMeshStandardMaterial?et.environment:null,B=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),X=B&&B.mapping===Da?B.image.height:null,ht=v[E.type];E.precision!==null&&(h=s.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));const U=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,L=U!==void 0?U.length:0;let dt=0;mt.morphAttributes.position!==void 0&&(dt=1),mt.morphAttributes.normal!==void 0&&(dt=2),mt.morphAttributes.color!==void 0&&(dt=3);let bt,Y,at,_t;if(ht){const ce=Wn[ht];bt=ce.vertexShader,Y=ce.fragmentShader}else bt=E.vertexShader,Y=E.fragmentShader,l.update(E),at=l.getVertexShaderID(E),_t=l.getFragmentShaderID(E);const O=n.getRenderTarget(),G=n.state.buffers.depth.getReversed(),$=nt.isInstancedMesh===!0,ct=nt.isBatchedMesh===!0,S=!!E.map,R=!!E.matcap,z=!!B,b=!!E.aoMap,Q=!!E.lightMap,J=!!E.bumpMap,st=!!E.normalMap,rt=!!E.displacementMap,Z=!!E.emissiveMap,M=!!E.metalnessMap,y=!!E.roughnessMap,g=E.anisotropy>0,F=E.clearcoat>0,tt=E.dispersion>0,lt=E.iridescence>0,it=E.sheen>0,wt=E.transmission>0,yt=g&&!!E.anisotropyMap,gt=F&&!!E.clearcoatMap,Rt=F&&!!E.clearcoatNormalMap,vt=F&&!!E.clearcoatRoughnessMap,Tt=lt&&!!E.iridescenceMap,Ot=lt&&!!E.iridescenceThicknessMap,It=it&&!!E.sheenColorMap,Mt=it&&!!E.sheenRoughnessMap,kt=!!E.specularMap,Nt=!!E.specularColorMap,ie=!!E.specularIntensityMap,W=wt&&!!E.transmissionMap,Et=wt&&!!E.thicknessMap,pt=!!E.gradientMap,xt=!!E.alphaMap,Dt=E.alphaTest>0,Ct=!!E.alphaHash,Yt=!!E.extensions;let Me=xi;E.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=n.toneMapping);const Be={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:bt,fragmentShader:Y,defines:E.defines,customVertexShaderID:at,customFragmentShaderID:_t,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:ct,batchingColor:ct&&nt._colorsTexture!==null,instancing:$,instancingColor:$&&nt.instanceColor!==null,instancingMorph:$&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?n.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:lr,alphaToCoverage:!!E.alphaToCoverage,map:S,matcap:R,envMap:z,envMapMode:z&&B.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:Q,bumpMap:J,normalMap:st,displacementMap:f&&rt,emissiveMap:Z,normalMapObjectSpace:st&&E.normalMapType===SM,normalMapTangentSpace:st&&E.normalMapType===Sp,metalnessMap:M,roughnessMap:y,anisotropy:g,anisotropyMap:yt,clearcoat:F,clearcoatMap:gt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:vt,dispersion:tt,iridescence:lt,iridescenceMap:Tt,iridescenceThicknessMap:Ot,sheen:it,sheenColorMap:It,sheenRoughnessMap:Mt,specularMap:kt,specularColorMap:Nt,specularIntensityMap:ie,transmission:wt,transmissionMap:W,thicknessMap:Et,gradientMap:pt,opaque:E.transparent===!1&&E.blending===qs&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:Dt,alphaHash:Ct,combine:E.combine,mapUv:S&&_(E.map.channel),aoMapUv:b&&_(E.aoMap.channel),lightMapUv:Q&&_(E.lightMap.channel),bumpMapUv:J&&_(E.bumpMap.channel),normalMapUv:st&&_(E.normalMap.channel),displacementMapUv:rt&&_(E.displacementMap.channel),emissiveMapUv:Z&&_(E.emissiveMap.channel),metalnessMapUv:M&&_(E.metalnessMap.channel),roughnessMapUv:y&&_(E.roughnessMap.channel),anisotropyMapUv:yt&&_(E.anisotropyMap.channel),clearcoatMapUv:gt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&_(E.sheenRoughnessMap.channel),specularMapUv:kt&&_(E.specularMap.channel),specularColorMapUv:Nt&&_(E.specularColorMap.channel),specularIntensityMapUv:ie&&_(E.specularIntensityMap.channel),transmissionMapUv:W&&_(E.transmissionMap.channel),thicknessMapUv:Et&&_(E.thicknessMap.channel),alphaMapUv:xt&&_(E.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(st||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!mt.attributes.uv&&(S||xt),fog:!!ot,useFog:E.fog===!0,fogExp2:!!ot&&ot.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:G,skinning:nt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:dt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,decodeVideoTexture:S&&E.map.isVideoTexture===!0&&te.getTransfer(E.map.colorSpace)===de,decodeVideoTextureEmissive:Z&&E.emissiveMap.isVideoTexture===!0&&te.getTransfer(E.emissiveMap.colorSpace)===de,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gi,flipSided:E.side===rn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Yt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&E.extensions.multiDraw===!0||ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function p(E){const w=[];if(E.shaderID?w.push(E.shaderID):(w.push(E.customVertexShaderID),w.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)w.push(C),w.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(D(w,E),P(w,E),w.push(n.outputColorSpace)),w.push(E.customProgramCacheKey),w.join()}function D(E,w){E.push(w.precision),E.push(w.outputColorSpace),E.push(w.envMapMode),E.push(w.envMapCubeUVHeight),E.push(w.mapUv),E.push(w.alphaMapUv),E.push(w.lightMapUv),E.push(w.aoMapUv),E.push(w.bumpMapUv),E.push(w.normalMapUv),E.push(w.displacementMapUv),E.push(w.emissiveMapUv),E.push(w.metalnessMapUv),E.push(w.roughnessMapUv),E.push(w.anisotropyMapUv),E.push(w.clearcoatMapUv),E.push(w.clearcoatNormalMapUv),E.push(w.clearcoatRoughnessMapUv),E.push(w.iridescenceMapUv),E.push(w.iridescenceThicknessMapUv),E.push(w.sheenColorMapUv),E.push(w.sheenRoughnessMapUv),E.push(w.specularMapUv),E.push(w.specularColorMapUv),E.push(w.specularIntensityMapUv),E.push(w.transmissionMapUv),E.push(w.thicknessMapUv),E.push(w.combine),E.push(w.fogExp2),E.push(w.sizeAttenuation),E.push(w.morphTargetsCount),E.push(w.morphAttributeCount),E.push(w.numDirLights),E.push(w.numPointLights),E.push(w.numSpotLights),E.push(w.numSpotLightMaps),E.push(w.numHemiLights),E.push(w.numRectAreaLights),E.push(w.numDirLightShadows),E.push(w.numPointLightShadows),E.push(w.numSpotLightShadows),E.push(w.numSpotLightShadowsWithMaps),E.push(w.numLightProbes),E.push(w.shadowMapType),E.push(w.toneMapping),E.push(w.numClippingPlanes),E.push(w.numClipIntersection),E.push(w.depthPacking)}function P(E,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),E.push(a.mask)}function T(E){const w=v[E.type];let C;if(w){const et=Wn[w];C=JM.clone(et.uniforms)}else C=E.uniforms;return C}function k(E,w){let C;for(let et=0,nt=u.length;et<nt;et++){const ot=u[et];if(ot.cacheKey===w){C=ot,++C.usedTimes;break}}return C===void 0&&(C=new dT(n,w,E,r),u.push(C)),C}function V(E){if(--E.usedTimes===0){const w=u.indexOf(E);u[w]=u[u.length-1],u.pop(),E.destroy()}}function N(E){l.remove(E)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:k,releaseProgram:V,releaseShaderCache:N,programs:u,dispose:I}}function gT(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function _T(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function xf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,h,v,_,m){let p=n[t];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:v,renderOrder:d.renderOrder,z:_,group:m},n[t]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=_,p.group=m),t++,p}function a(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.push(p):h.transparent===!0?s.push(p):e.push(p)}function l(d,f,h,v,_,m){const p=o(d,f,h,v,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?s.unshift(p):e.unshift(p)}function c(d,f){e.length>1&&e.sort(d||_T),i.length>1&&i.sort(f||xf),s.length>1&&s.sort(f||xf)}function u(){for(let d=t,f=n.length;d<f;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function vT(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new yf,n.set(i,[o])):s>=r.length?(o=new yf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function xT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new K,color:new $t};break;case"SpotLight":e={position:new K,direction:new K,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new K,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new K,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new K,halfWidth:new K,halfHeight:new K};break}return n[t.id]=e,e}}}function yT(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let MT=0;function ST(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function bT(n){const t=new xT,e=yT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new K);const s=new K,r=new ye,o=new ye;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,v=0,_=0,m=0,p=0,D=0,P=0,T=0,k=0,V=0,N=0;c.sort(ST);for(let E=0,w=c.length;E<w;E++){const C=c[E],et=C.color,nt=C.intensity,ot=C.distance,mt=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=et.r*nt,d+=et.g*nt,f+=et.b*nt;else if(C.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(C.sh.coefficients[H],nt);N++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const B=C.shadow,X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,i.directionalShadow[h]=X,i.directionalShadowMap[h]=mt,i.directionalShadowMatrix[h]=C.shadow.matrix,D++}i.directional[h]=H,h++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(et).multiplyScalar(nt),H.distance=ot,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,i.spot[_]=H;const B=C.shadow;if(C.map&&(i.spotLightMap[k]=C.map,k++,B.updateMatrices(C),C.castShadow&&V++),i.spotLightMatrix[_]=B.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,i.spotShadow[_]=X,i.spotShadowMap[_]=mt,T++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(et).multiplyScalar(nt),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=H,m++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const B=C.shadow,X=e.get(C);X.shadowIntensity=B.intensity,X.shadowBias=B.bias,X.shadowNormalBias=B.normalBias,X.shadowRadius=B.radius,X.shadowMapSize=B.mapSize,X.shadowCameraNear=B.camera.near,X.shadowCameraFar=B.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=mt,i.pointShadowMatrix[v]=C.shadow.matrix,P++}i.point[v]=H,v++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(nt),H.groundColor.copy(C.groundColor).multiplyScalar(nt),i.hemi[p]=H,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pt.LTC_FLOAT_1,i.rectAreaLTC2=Pt.LTC_FLOAT_2):(i.rectAreaLTC1=Pt.LTC_HALF_1,i.rectAreaLTC2=Pt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const I=i.hash;(I.directionalLength!==h||I.pointLength!==v||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==D||I.numPointShadows!==P||I.numSpotShadows!==T||I.numSpotMaps!==k||I.numLightProbes!==N)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=D,i.directionalShadowMap.length=D,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=D,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=T+k-V,i.spotLightMap.length=k,i.numSpotLightShadowsWithMaps=V,i.numLightProbes=N,I.directionalLength=h,I.pointLength=v,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=D,I.numPointShadows=P,I.numSpotShadows=T,I.numSpotMaps=k,I.numLightProbes=N,i.version=MT++)}function l(c,u){let d=0,f=0,h=0,v=0,_=0;const m=u.matrixWorldInverse;for(let p=0,D=c.length;p<D;p++){const P=c[p];if(P.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),d++}else if(P.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(P.matrixWorld),s.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),h++}else if(P.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(m),o.identity(),r.copy(P.matrixWorld),r.premultiply(m),o.extractRotation(r),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),v++}else if(P.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(m),f++}else if(P.isHemisphereLight){const T=i.hemi[_];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Mf(n){const t=new bT(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ET(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Mf(n),t.set(s,[a])):r>=o.length?(a=new Mf(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class TT extends Ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wT extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const AT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CT=`uniform sampler2D shadow_pass;
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
}`;function RT(n,t,e){let i=new gu;const s=new Xt,r=new Xt,o=new be,a=new TT({depthPacking:MM}),l=new wT,c={},u=e.maxTextureSize,d={[Wi]:rn,[rn]:Wi,[gi]:gi},f=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:AT,fragmentShader:CT}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const v=new Je;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cp;let p=this.type;this.render=function(V,N,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||V.length===0)return;const E=n.getRenderTarget(),w=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),et=n.state;et.setBlending(ki),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const nt=p!==ci&&this.type===ci,ot=p===ci&&this.type!==ci;for(let mt=0,H=V.length;mt<H;mt++){const B=V[mt],X=B.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const ht=X.getFrameExtents();if(s.multiply(ht),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,X.mapSize.y=r.y)),X.map===null||nt===!0||ot===!0){const L=this.type!==ci?{minFilter:In,magFilter:In}:{};X.map!==null&&X.map.dispose(),X.map=new _s(s.x,s.y,L),X.map.texture.name=B.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const U=X.getViewportCount();for(let L=0;L<U;L++){const dt=X.getViewport(L);o.set(r.x*dt.x,r.y*dt.y,r.x*dt.z,r.y*dt.w),et.viewport(o),X.updateMatrices(B,L),i=X.getFrustum(),T(N,I,X.camera,B,this.type)}X.isPointLightShadow!==!0&&this.type===ci&&D(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,w,C)};function D(V,N){const I=t.update(_);f.defines.VSM_SAMPLES!==V.blurSamples&&(f.defines.VSM_SAMPLES=V.blurSamples,h.defines.VSM_SAMPLES=V.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new _s(s.x,s.y)),f.uniforms.shadow_pass.value=V.map.texture,f.uniforms.resolution.value=V.mapSize,f.uniforms.radius.value=V.radius,n.setRenderTarget(V.mapPass),n.clear(),n.renderBufferDirect(N,null,I,f,_,null),h.uniforms.shadow_pass.value=V.mapPass.texture,h.uniforms.resolution.value=V.mapSize,h.uniforms.radius.value=V.radius,n.setRenderTarget(V.map),n.clear(),n.renderBufferDirect(N,null,I,h,_,null)}function P(V,N,I,E){let w=null;const C=I.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(C!==void 0)w=C;else if(w=I.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const et=w.uuid,nt=N.uuid;let ot=c[et];ot===void 0&&(ot={},c[et]=ot);let mt=ot[nt];mt===void 0&&(mt=w.clone(),ot[nt]=mt,N.addEventListener("dispose",k)),w=mt}if(w.visible=N.visible,w.wireframe=N.wireframe,E===ci?w.side=N.shadowSide!==null?N.shadowSide:N.side:w.side=N.shadowSide!==null?N.shadowSide:d[N.side],w.alphaMap=N.alphaMap,w.alphaTest=N.alphaTest,w.map=N.map,w.clipShadows=N.clipShadows,w.clippingPlanes=N.clippingPlanes,w.clipIntersection=N.clipIntersection,w.displacementMap=N.displacementMap,w.displacementScale=N.displacementScale,w.displacementBias=N.displacementBias,w.wireframeLinewidth=N.wireframeLinewidth,w.linewidth=N.linewidth,I.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const et=n.properties.get(w);et.light=I}return w}function T(V,N,I,E,w){if(V.visible===!1)return;if(V.layers.test(N.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===ci)&&(!V.frustumCulled||i.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,V.matrixWorld);const nt=t.update(V),ot=V.material;if(Array.isArray(ot)){const mt=nt.groups;for(let H=0,B=mt.length;H<B;H++){const X=mt[H],ht=ot[X.materialIndex];if(ht&&ht.visible){const U=P(V,ht,E,w);V.onBeforeShadow(n,V,N,I,nt,U,X),n.renderBufferDirect(I,null,nt,U,V,X),V.onAfterShadow(n,V,N,I,nt,U,X)}}}else if(ot.visible){const mt=P(V,ot,E,w);V.onBeforeShadow(n,V,N,I,nt,mt,null),n.renderBufferDirect(I,null,nt,mt,V,null),V.onAfterShadow(n,V,N,I,nt,mt,null)}}const et=V.children;for(let nt=0,ot=et.length;nt<ot;nt++)T(et[nt],N,I,E,w)}function k(V){V.target.removeEventListener("dispose",k);for(const I in c){const E=c[I],w=V.target.uuid;w in E&&(E[w].dispose(),delete E[w])}}}const PT={[tc]:ec,[nc]:rc,[ic]:oc,[nr]:sc,[ec]:tc,[rc]:nc,[oc]:ic,[sc]:nr};function DT(n,t){function e(){let W=!1;const Et=new be;let pt=null;const xt=new be(0,0,0,0);return{setMask:function(Dt){pt!==Dt&&!W&&(n.colorMask(Dt,Dt,Dt,Dt),pt=Dt)},setLocked:function(Dt){W=Dt},setClear:function(Dt,Ct,Yt,Me,Be){Be===!0&&(Dt*=Me,Ct*=Me,Yt*=Me),Et.set(Dt,Ct,Yt,Me),xt.equals(Et)===!1&&(n.clearColor(Dt,Ct,Yt,Me),xt.copy(Et))},reset:function(){W=!1,pt=null,xt.set(-1,0,0,0)}}}function i(){let W=!1,Et=!1,pt=null,xt=null,Dt=null;return{setReversed:function(Ct){if(Et!==Ct){const Yt=t.get("EXT_clip_control");Et?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const Me=Dt;Dt=null,this.setClear(Me)}Et=Ct},getReversed:function(){return Et},setTest:function(Ct){Ct?O(n.DEPTH_TEST):G(n.DEPTH_TEST)},setMask:function(Ct){pt!==Ct&&!W&&(n.depthMask(Ct),pt=Ct)},setFunc:function(Ct){if(Et&&(Ct=PT[Ct]),xt!==Ct){switch(Ct){case tc:n.depthFunc(n.NEVER);break;case ec:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case nr:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case oc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xt=Ct}},setLocked:function(Ct){W=Ct},setClear:function(Ct){Dt!==Ct&&(Et&&(Ct=1-Ct),n.clearDepth(Ct),Dt=Ct)},reset:function(){W=!1,pt=null,xt=null,Dt=null,Et=!1}}}function s(){let W=!1,Et=null,pt=null,xt=null,Dt=null,Ct=null,Yt=null,Me=null,Be=null;return{setTest:function(ce){W||(ce?O(n.STENCIL_TEST):G(n.STENCIL_TEST))},setMask:function(ce){Et!==ce&&!W&&(n.stencilMask(ce),Et=ce)},setFunc:function(ce,Sn,ti){(pt!==ce||xt!==Sn||Dt!==ti)&&(n.stencilFunc(ce,Sn,ti),pt=ce,xt=Sn,Dt=ti)},setOp:function(ce,Sn,ti){(Ct!==ce||Yt!==Sn||Me!==ti)&&(n.stencilOp(ce,Sn,ti),Ct=ce,Yt=Sn,Me=ti)},setLocked:function(ce){W=ce},setClear:function(ce){Be!==ce&&(n.clearStencil(ce),Be=ce)},reset:function(){W=!1,Et=null,pt=null,xt=null,Dt=null,Ct=null,Yt=null,Me=null,Be=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,D=null,P=null,T=null,k=null,V=null,N=new $t(0,0,0),I=0,E=!1,w=null,C=null,et=null,nt=null,ot=null;const mt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,B=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=B>=1):X.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=B>=2);let ht=null,U={};const L=n.getParameter(n.SCISSOR_BOX),dt=n.getParameter(n.VIEWPORT),bt=new be().fromArray(L),Y=new be().fromArray(dt);function at(W,Et,pt,xt){const Dt=new Uint8Array(4),Ct=n.createTexture();n.bindTexture(W,Ct),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<pt;Yt++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Et,0,n.RGBA,1,1,xt,0,n.RGBA,n.UNSIGNED_BYTE,Dt):n.texImage2D(Et+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Dt);return Ct}const _t={};_t[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),_t[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),_t[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(n.DEPTH_TEST),o.setFunc(nr),J(!1),st(Td),O(n.CULL_FACE),b(ki);function O(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function G(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function $(W,Et){return d[W]!==Et?(n.bindFramebuffer(W,Et),d[W]=Et,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Et),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Et),!0):!1}function ct(W,Et){let pt=h,xt=!1;if(W){pt=f.get(Et),pt===void 0&&(pt=[],f.set(Et,pt));const Dt=W.textures;if(pt.length!==Dt.length||pt[0]!==n.COLOR_ATTACHMENT0){for(let Ct=0,Yt=Dt.length;Ct<Yt;Ct++)pt[Ct]=n.COLOR_ATTACHMENT0+Ct;pt.length=Dt.length,xt=!0}}else pt[0]!==n.BACK&&(pt[0]=n.BACK,xt=!0);xt&&n.drawBuffers(pt)}function S(W){return v!==W?(n.useProgram(W),v=W,!0):!1}const R={[os]:n.FUNC_ADD,[Yy]:n.FUNC_SUBTRACT,[jy]:n.FUNC_REVERSE_SUBTRACT};R[qy]=n.MIN,R[Ky]=n.MAX;const z={[Zy]:n.ZERO,[Jy]:n.ONE,[Qy]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[rM]:n.SRC_ALPHA_SATURATE,[iM]:n.DST_COLOR,[eM]:n.DST_ALPHA,[tM]:n.ONE_MINUS_SRC_COLOR,[Ql]:n.ONE_MINUS_SRC_ALPHA,[sM]:n.ONE_MINUS_DST_COLOR,[nM]:n.ONE_MINUS_DST_ALPHA,[oM]:n.CONSTANT_COLOR,[aM]:n.ONE_MINUS_CONSTANT_COLOR,[lM]:n.CONSTANT_ALPHA,[cM]:n.ONE_MINUS_CONSTANT_ALPHA};function b(W,Et,pt,xt,Dt,Ct,Yt,Me,Be,ce){if(W===ki){_===!0&&(G(n.BLEND),_=!1);return}if(_===!1&&(O(n.BLEND),_=!0),W!==$y){if(W!==m||ce!==E){if((p!==os||T!==os)&&(n.blendEquation(n.FUNC_ADD),p=os,T=os),ce)switch(W){case qs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.ONE,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case qs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ad:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Cd:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,P=null,k=null,V=null,N.set(0,0,0),I=0,m=W,E=ce}return}Dt=Dt||Et,Ct=Ct||pt,Yt=Yt||xt,(Et!==p||Dt!==T)&&(n.blendEquationSeparate(R[Et],R[Dt]),p=Et,T=Dt),(pt!==D||xt!==P||Ct!==k||Yt!==V)&&(n.blendFuncSeparate(z[pt],z[xt],z[Ct],z[Yt]),D=pt,P=xt,k=Ct,V=Yt),(Me.equals(N)===!1||Be!==I)&&(n.blendColor(Me.r,Me.g,Me.b,Be),N.copy(Me),I=Be),m=W,E=!1}function Q(W,Et){W.side===gi?G(n.CULL_FACE):O(n.CULL_FACE);let pt=W.side===rn;Et&&(pt=!pt),J(pt),W.blending===qs&&W.transparent===!1?b(ki):b(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const xt=W.stencilWrite;a.setTest(xt),xt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?O(n.SAMPLE_ALPHA_TO_COVERAGE):G(n.SAMPLE_ALPHA_TO_COVERAGE)}function J(W){w!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),w=W)}function st(W){W!==Gy?(O(n.CULL_FACE),W!==C&&(W===Td?n.cullFace(n.BACK):W===Wy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):G(n.CULL_FACE),C=W}function rt(W){W!==et&&(H&&n.lineWidth(W),et=W)}function Z(W,Et,pt){W?(O(n.POLYGON_OFFSET_FILL),(nt!==Et||ot!==pt)&&(n.polygonOffset(Et,pt),nt=Et,ot=pt)):G(n.POLYGON_OFFSET_FILL)}function M(W){W?O(n.SCISSOR_TEST):G(n.SCISSOR_TEST)}function y(W){W===void 0&&(W=n.TEXTURE0+mt-1),ht!==W&&(n.activeTexture(W),ht=W)}function g(W,Et,pt){pt===void 0&&(ht===null?pt=n.TEXTURE0+mt-1:pt=ht);let xt=U[pt];xt===void 0&&(xt={type:void 0,texture:void 0},U[pt]=xt),(xt.type!==W||xt.texture!==Et)&&(ht!==pt&&(n.activeTexture(pt),ht=pt),n.bindTexture(W,Et||_t[W]),xt.type=W,xt.texture=Et)}function F(){const W=U[ht];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function lt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function yt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Rt(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ot(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function It(W){bt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),bt.copy(W))}function Mt(W){Y.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function kt(W,Et){let pt=c.get(Et);pt===void 0&&(pt=new WeakMap,c.set(Et,pt));let xt=pt.get(W);xt===void 0&&(xt=n.getUniformBlockIndex(Et,W.name),pt.set(W,xt))}function Nt(W,Et){const xt=c.get(Et).get(W);l.get(Et)!==xt&&(n.uniformBlockBinding(Et,xt,W.__bindingPointIndex),l.set(Et,xt))}function ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,U={},d={},f=new WeakMap,h=[],v=null,_=!1,m=null,p=null,D=null,P=null,T=null,k=null,V=null,N=new $t(0,0,0),I=0,E=!1,w=null,C=null,et=null,nt=null,ot=null,bt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:O,disable:G,bindFramebuffer:$,drawBuffers:ct,useProgram:S,setBlending:b,setMaterial:Q,setFlipSided:J,setCullFace:st,setLineWidth:rt,setPolygonOffset:Z,setScissorTest:M,activeTexture:y,bindTexture:g,unbindTexture:F,compressedTexImage2D:tt,compressedTexImage3D:lt,texImage2D:Tt,texImage3D:Ot,updateUBOMapping:kt,uniformBlockBinding:Nt,texStorage2D:Rt,texStorage3D:vt,texSubImage2D:it,texSubImage3D:wt,compressedTexSubImage2D:yt,compressedTexSubImage3D:gt,scissor:It,viewport:Mt,reset:ie}}function Sf(n,t,e,i){const s=LT(i);switch(e){case mp:return n*t;case _p:return n*t;case vp:return n*t*2;case xp:return n*t/s.components*s.byteLength;case fu:return n*t/s.components*s.byteLength;case yp:return n*t*2/s.components*s.byteLength;case hu:return n*t*2/s.components*s.byteLength;case gp:return n*t*3/s.components*s.byteLength;case Rn:return n*t*4/s.components*s.byteLength;case pu:return n*t*4/s.components*s.byteLength;case Yo:case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case qo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case fc:case pc:return Math.max(n,16)*Math.max(t,8)/4;case dc:case hc:return Math.max(n,8)*Math.max(t,8)/2;case mc:case gc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Pc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Lc:case Ic:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Mp:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nc:case Oc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function LT(n){switch(n){case Si:case fp:return{byteLength:1,components:1};case Yr:case hp:case Qr:return{byteLength:2,components:1};case uu:case du:return{byteLength:2,components:4};case gs:case cu:case _i:return{byteLength:4,components:1};case pp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function IT(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(y,g){return h?new OffscreenCanvas(y,g):ua("canvas")}function _(y,g,F){let tt=1;const lt=M(y);if((lt.width>F||lt.height>F)&&(tt=F/Math.max(lt.width,lt.height)),tt<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const it=Math.floor(tt*lt.width),wt=Math.floor(tt*lt.height);d===void 0&&(d=v(it,wt));const yt=g?v(it,wt):d;return yt.width=it,yt.height=wt,yt.getContext("2d").drawImage(y,0,0,it,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+it+"x"+wt+")."),yt}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function D(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(y,g,F,tt,lt=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let it=g;if(g===n.RED&&(F===n.FLOAT&&(it=n.R32F),F===n.HALF_FLOAT&&(it=n.R16F),F===n.UNSIGNED_BYTE&&(it=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(it=n.R8UI),F===n.UNSIGNED_SHORT&&(it=n.R16UI),F===n.UNSIGNED_INT&&(it=n.R32UI),F===n.BYTE&&(it=n.R8I),F===n.SHORT&&(it=n.R16I),F===n.INT&&(it=n.R32I)),g===n.RG&&(F===n.FLOAT&&(it=n.RG32F),F===n.HALF_FLOAT&&(it=n.RG16F),F===n.UNSIGNED_BYTE&&(it=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(it=n.RG8UI),F===n.UNSIGNED_SHORT&&(it=n.RG16UI),F===n.UNSIGNED_INT&&(it=n.RG32UI),F===n.BYTE&&(it=n.RG8I),F===n.SHORT&&(it=n.RG16I),F===n.INT&&(it=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(it=n.RGB8UI),F===n.UNSIGNED_SHORT&&(it=n.RGB16UI),F===n.UNSIGNED_INT&&(it=n.RGB32UI),F===n.BYTE&&(it=n.RGB8I),F===n.SHORT&&(it=n.RGB16I),F===n.INT&&(it=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),F===n.UNSIGNED_INT&&(it=n.RGBA32UI),F===n.BYTE&&(it=n.RGBA8I),F===n.SHORT&&(it=n.RGBA16I),F===n.INT&&(it=n.RGBA32I)),g===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),g===n.RGBA){const wt=lt?La:te.getTransfer(tt);F===n.FLOAT&&(it=n.RGBA32F),F===n.HALF_FLOAT&&(it=n.RGBA16F),F===n.UNSIGNED_BYTE&&(it=wt===de?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function T(y,g){let F;return y?g===null||g===gs||g===rr?F=n.DEPTH24_STENCIL8:g===_i?F=n.DEPTH32F_STENCIL8:g===Yr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===gs||g===rr?F=n.DEPTH_COMPONENT24:g===_i?F=n.DEPTH_COMPONENT32F:g===Yr&&(F=n.DEPTH_COMPONENT16),F}function k(y,g){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==In&&y.minFilter!==Cn?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function V(y){const g=y.target;g.removeEventListener("dispose",V),I(g),g.isVideoTexture&&u.delete(g)}function N(y){const g=y.target;g.removeEventListener("dispose",N),w(g)}function I(y){const g=i.get(y);if(g.__webglInit===void 0)return;const F=y.source,tt=f.get(F);if(tt){const lt=tt[g.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(y),Object.keys(tt).length===0&&f.delete(F)}i.remove(y)}function E(y){const g=i.get(y);n.deleteTexture(g.__webglTexture);const F=y.source,tt=f.get(F);delete tt[g.__cacheKey],o.memory.textures--}function w(y){const g=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(g.__webglFramebuffer[tt]))for(let lt=0;lt<g.__webglFramebuffer[tt].length;lt++)n.deleteFramebuffer(g.__webglFramebuffer[tt][lt]);else n.deleteFramebuffer(g.__webglFramebuffer[tt]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[tt])}else{if(Array.isArray(g.__webglFramebuffer))for(let tt=0;tt<g.__webglFramebuffer.length;tt++)n.deleteFramebuffer(g.__webglFramebuffer[tt]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let tt=0;tt<g.__webglColorRenderbuffer.length;tt++)g.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[tt]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let tt=0,lt=F.length;tt<lt;tt++){const it=i.get(F[tt]);it.__webglTexture&&(n.deleteTexture(it.__webglTexture),o.memory.textures--),i.remove(F[tt])}i.remove(y)}let C=0;function et(){C=0}function nt(){const y=C;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),C+=1,y}function ot(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function mt(y,g){const F=i.get(y);if(y.isVideoTexture&&rt(y),y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){const tt=y.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,y,g);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function H(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Y(F,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function B(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){Y(F,y,g);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function X(y,g){const F=i.get(y);if(y.version>0&&F.__version!==y.version){at(F,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const ht={[cc]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[uc]:n.MIRRORED_REPEAT},U={[In]:n.NEAREST,[xM]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[Qa]:n.LINEAR_MIPMAP_NEAREST,[fs]:n.LINEAR_MIPMAP_LINEAR},L={[bM]:n.NEVER,[RM]:n.ALWAYS,[EM]:n.LESS,[bp]:n.LEQUAL,[TM]:n.EQUAL,[CM]:n.GEQUAL,[wM]:n.GREATER,[AM]:n.NOTEQUAL};function dt(y,g){if(g.type===_i&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Cn||g.magFilter===Qa||g.magFilter===fo||g.magFilter===fs||g.minFilter===Cn||g.minFilter===Qa||g.minFilter===fo||g.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ht[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ht[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ht[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,U[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,U[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,L[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===In||g.minFilter!==fo&&g.minFilter!==fs||g.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function bt(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",V));const tt=g.source;let lt=f.get(tt);lt===void 0&&(lt={},f.set(tt,lt));const it=ot(g);if(it!==y.__cacheKey){lt[it]===void 0&&(lt[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),lt[it].usedTimes++;const wt=lt[y.__cacheKey];wt!==void 0&&(lt[y.__cacheKey].usedTimes--,wt.usedTimes===0&&E(g)),y.__cacheKey=it,y.__webglTexture=lt[it].texture}return F}function Y(y,g,F){let tt=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(tt=n.TEXTURE_3D);const lt=bt(y,g),it=g.source;e.bindTexture(tt,y.__webglTexture,n.TEXTURE0+F);const wt=i.get(it);if(it.version!==wt.__version||lt===!0){e.activeTexture(n.TEXTURE0+F);const yt=te.getPrimaries(te.workingColorSpace),gt=g.colorSpace===Oi?null:te.getPrimaries(g.colorSpace),Rt=g.colorSpace===Oi||yt===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let vt=_(g.image,!1,s.maxTextureSize);vt=Z(g,vt);const Tt=r.convert(g.format,g.colorSpace),Ot=r.convert(g.type);let It=P(g.internalFormat,Tt,Ot,g.colorSpace,g.isVideoTexture);dt(tt,g);let Mt;const kt=g.mipmaps,Nt=g.isVideoTexture!==!0,ie=wt.__version===void 0||lt===!0,W=it.dataReady,Et=k(g,vt);if(g.isDepthTexture)It=T(g.format===or,g.type),ie&&(Nt?e.texStorage2D(n.TEXTURE_2D,1,It,vt.width,vt.height):e.texImage2D(n.TEXTURE_2D,0,It,vt.width,vt.height,0,Tt,Ot,null));else if(g.isDataTexture)if(kt.length>0){Nt&&ie&&e.texStorage2D(n.TEXTURE_2D,Et,It,kt[0].width,kt[0].height);for(let pt=0,xt=kt.length;pt<xt;pt++)Mt=kt[pt],Nt?W&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Tt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,pt,It,Mt.width,Mt.height,0,Tt,Ot,Mt.data);g.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(n.TEXTURE_2D,Et,It,vt.width,vt.height),W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt.width,vt.height,Tt,Ot,vt.data)):e.texImage2D(n.TEXTURE_2D,0,It,vt.width,vt.height,0,Tt,Ot,vt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,It,kt[0].width,kt[0].height,vt.depth);for(let pt=0,xt=kt.length;pt<xt;pt++)if(Mt=kt[pt],g.format!==Rn)if(Tt!==null)if(Nt){if(W)if(g.layerUpdates.size>0){const Dt=Sf(Mt.width,Mt.height,g.format,g.type);for(const Ct of g.layerUpdates){const Yt=Mt.data.subarray(Ct*Dt/Mt.data.BYTES_PER_ELEMENT,(Ct+1)*Dt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,Ct,Mt.width,Mt.height,1,Tt,Yt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,vt.depth,Tt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,pt,It,Mt.width,Mt.height,vt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,pt,0,0,0,Mt.width,Mt.height,vt.depth,Tt,Ot,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,pt,It,Mt.width,Mt.height,vt.depth,0,Tt,Ot,Mt.data)}else{Nt&&ie&&e.texStorage2D(n.TEXTURE_2D,Et,It,kt[0].width,kt[0].height);for(let pt=0,xt=kt.length;pt<xt;pt++)Mt=kt[pt],g.format!==Rn?Tt!==null?Nt?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Tt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,pt,It,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?W&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Mt.width,Mt.height,Tt,Ot,Mt.data):e.texImage2D(n.TEXTURE_2D,pt,It,Mt.width,Mt.height,0,Tt,Ot,Mt.data)}else if(g.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Et,It,vt.width,vt.height,vt.depth),W)if(g.layerUpdates.size>0){const pt=Sf(vt.width,vt.height,g.format,g.type);for(const xt of g.layerUpdates){const Dt=vt.data.subarray(xt*pt/vt.data.BYTES_PER_ELEMENT,(xt+1)*pt/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xt,vt.width,vt.height,1,Tt,Ot,Dt)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Tt,Ot,vt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,It,vt.width,vt.height,vt.depth,0,Tt,Ot,vt.data);else if(g.isData3DTexture)Nt?(ie&&e.texStorage3D(n.TEXTURE_3D,Et,It,vt.width,vt.height,vt.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Tt,Ot,vt.data)):e.texImage3D(n.TEXTURE_3D,0,It,vt.width,vt.height,vt.depth,0,Tt,Ot,vt.data);else if(g.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(n.TEXTURE_2D,Et,It,vt.width,vt.height);else{let pt=vt.width,xt=vt.height;for(let Dt=0;Dt<Et;Dt++)e.texImage2D(n.TEXTURE_2D,Dt,It,pt,xt,0,Tt,Ot,null),pt>>=1,xt>>=1}}else if(kt.length>0){if(Nt&&ie){const pt=M(kt[0]);e.texStorage2D(n.TEXTURE_2D,Et,It,pt.width,pt.height)}for(let pt=0,xt=kt.length;pt<xt;pt++)Mt=kt[pt],Nt?W&&e.texSubImage2D(n.TEXTURE_2D,pt,0,0,Tt,Ot,Mt):e.texImage2D(n.TEXTURE_2D,pt,It,Tt,Ot,Mt);g.generateMipmaps=!1}else if(Nt){if(ie){const pt=M(vt);e.texStorage2D(n.TEXTURE_2D,Et,It,pt.width,pt.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,Ot,vt)}else e.texImage2D(n.TEXTURE_2D,0,It,Tt,Ot,vt);m(g)&&p(tt),wt.__version=it.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function at(y,g,F){if(g.image.length!==6)return;const tt=bt(y,g),lt=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const it=i.get(lt);if(lt.version!==it.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);const wt=te.getPrimaries(te.workingColorSpace),yt=g.colorSpace===Oi?null:te.getPrimaries(g.colorSpace),gt=g.colorSpace===Oi||wt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const Rt=g.isCompressedTexture||g.image[0].isCompressedTexture,vt=g.image[0]&&g.image[0].isDataTexture,Tt=[];for(let xt=0;xt<6;xt++)!Rt&&!vt?Tt[xt]=_(g.image[xt],!0,s.maxCubemapSize):Tt[xt]=vt?g.image[xt].image:g.image[xt],Tt[xt]=Z(g,Tt[xt]);const Ot=Tt[0],It=r.convert(g.format,g.colorSpace),Mt=r.convert(g.type),kt=P(g.internalFormat,It,Mt,g.colorSpace),Nt=g.isVideoTexture!==!0,ie=it.__version===void 0||tt===!0,W=lt.dataReady;let Et=k(g,Ot);dt(n.TEXTURE_CUBE_MAP,g);let pt;if(Rt){Nt&&ie&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,kt,Ot.width,Ot.height);for(let xt=0;xt<6;xt++){pt=Tt[xt].mipmaps;for(let Dt=0;Dt<pt.length;Dt++){const Ct=pt[Dt];g.format!==Rn?It!==null?Nt?W&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Ct.width,Ct.height,It,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,kt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,0,0,Ct.width,Ct.height,It,Mt,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt,kt,Ct.width,Ct.height,0,It,Mt,Ct.data)}}}else{if(pt=g.mipmaps,Nt&&ie){pt.length>0&&Et++;const xt=M(Tt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Et,kt,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(vt){Nt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Tt[xt].width,Tt[xt].height,It,Mt,Tt[xt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,kt,Tt[xt].width,Tt[xt].height,0,It,Mt,Tt[xt].data);for(let Dt=0;Dt<pt.length;Dt++){const Yt=pt[Dt].image[xt].image;Nt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,Yt.width,Yt.height,It,Mt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,kt,Yt.width,Yt.height,0,It,Mt,Yt.data)}}else{Nt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,It,Mt,Tt[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,kt,It,Mt,Tt[xt]);for(let Dt=0;Dt<pt.length;Dt++){const Ct=pt[Dt];Nt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,0,0,It,Mt,Ct.image[xt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Dt+1,kt,It,Mt,Ct.image[xt])}}}m(g)&&p(n.TEXTURE_CUBE_MAP),it.__version=lt.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function _t(y,g,F,tt,lt,it){const wt=r.convert(F.format,F.colorSpace),yt=r.convert(F.type),gt=P(F.internalFormat,wt,yt,F.colorSpace),Rt=i.get(g),vt=i.get(F);if(vt.__renderTarget=g,!Rt.__hasExternalTextures){const Tt=Math.max(1,g.width>>it),Ot=Math.max(1,g.height>>it);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,it,gt,Tt,Ot,g.depth,0,wt,yt,null):e.texImage2D(lt,it,gt,Tt,Ot,0,wt,yt,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),st(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,lt,vt.__webglTexture,0,J(g)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,lt,vt.__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function O(y,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const tt=g.depthTexture,lt=tt&&tt.isDepthTexture?tt.type:null,it=T(g.stencilBuffer,lt),wt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,yt=J(g);st(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,yt,it,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,it,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,it,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,y)}else{const tt=g.textures;for(let lt=0;lt<tt.length;lt++){const it=tt[lt],wt=r.convert(it.format,it.colorSpace),yt=r.convert(it.type),gt=P(it.internalFormat,wt,yt,it.colorSpace),Rt=J(g);F&&st(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,gt,g.width,g.height):st(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Rt,gt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,gt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(g.depthTexture);tt.__renderTarget=g,(!tt.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),mt(g.depthTexture,0);const lt=tt.__webglTexture,it=J(g);if(g.depthTexture.format===Ks)st(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,lt,0);else if(g.depthTexture.format===or)st(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0,it):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function $(y){const g=i.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const tt=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),tt){const lt=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,tt.removeEventListener("dispose",lt)};tt.addEventListener("dispose",lt),g.__depthDisposeCallback=lt}g.__boundDepthTexture=tt}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");G(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[tt]),g.__webglDepthbuffer[tt]===void 0)g.__webglDepthbuffer[tt]=n.createRenderbuffer(),O(g.__webglDepthbuffer[tt],y,!1);else{const lt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=g.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,lt,n.RENDERBUFFER,it)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),O(g.__webglDepthbuffer,y,!1);else{const tt=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,lt=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,lt),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,lt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(y,g,F){const tt=i.get(y);g!==void 0&&_t(tt.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&$(y)}function S(y){const g=y.texture,F=i.get(y),tt=i.get(g);y.addEventListener("dispose",N);const lt=y.textures,it=y.isWebGLCubeRenderTarget===!0,wt=lt.length>1;if(wt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=g.version,o.memory.textures++),it){F.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[yt]=[];for(let gt=0;gt<g.mipmaps.length;gt++)F.__webglFramebuffer[yt][gt]=n.createFramebuffer()}else F.__webglFramebuffer[yt]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let yt=0;yt<g.mipmaps.length;yt++)F.__webglFramebuffer[yt]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(wt)for(let yt=0,gt=lt.length;yt<gt;yt++){const Rt=i.get(lt[yt]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=n.createTexture(),o.memory.textures++)}if(y.samples>0&&st(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let yt=0;yt<lt.length;yt++){const gt=lt[yt];F.__webglColorRenderbuffer[yt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[yt]);const Rt=r.convert(gt.format,gt.colorSpace),vt=r.convert(gt.type),Tt=P(gt.internalFormat,Rt,vt,gt.colorSpace,y.isXRRenderTarget===!0),Ot=J(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ot,Tt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,F.__webglColorRenderbuffer[yt])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),O(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(it){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),dt(n.TEXTURE_CUBE_MAP,g);for(let yt=0;yt<6;yt++)if(g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)_t(F.__webglFramebuffer[yt][gt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,gt);else _t(F.__webglFramebuffer[yt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(g)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let yt=0,gt=lt.length;yt<gt;yt++){const Rt=lt[yt],vt=i.get(Rt);e.bindTexture(n.TEXTURE_2D,vt.__webglTexture),dt(n.TEXTURE_2D,Rt),_t(F.__webglFramebuffer,y,Rt,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,0),m(Rt)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let yt=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(yt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(yt,tt.__webglTexture),dt(yt,g),g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)_t(F.__webglFramebuffer[gt],y,g,n.COLOR_ATTACHMENT0,yt,gt);else _t(F.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,yt,0);m(g)&&p(yt),e.unbindTexture()}y.depthBuffer&&$(y)}function R(y){const g=y.textures;for(let F=0,tt=g.length;F<tt;F++){const lt=g[F];if(m(lt)){const it=D(y),wt=i.get(lt).__webglTexture;e.bindTexture(it,wt),p(it),e.unbindTexture()}}}const z=[],b=[];function Q(y){if(y.samples>0){if(st(y)===!1){const g=y.textures,F=y.width,tt=y.height;let lt=n.COLOR_BUFFER_BIT;const it=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(y),yt=g.length>1;if(yt)for(let gt=0;gt<g.length;gt++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<g.length;gt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),yt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Rt=i.get(g[gt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,F,tt,0,0,F,tt,lt,n.NEAREST),l===!0&&(z.length=0,b.length=0,z.push(n.COLOR_ATTACHMENT0+gt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(z.push(it),b.push(it),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,b)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,z))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),yt)for(let gt=0;gt<g.length;gt++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);const Rt=i.get(g[gt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+gt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function J(y){return Math.min(s.maxSamples,y.samples)}function st(y){const g=i.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function rt(y){const g=o.render.frame;u.get(y)!==g&&(u.set(y,g),y.update())}function Z(y,g){const F=y.colorSpace,tt=y.format,lt=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==lr&&F!==Oi&&(te.getTransfer(F)===de?(tt!==Rn||lt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function M(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=et,this.setTexture2D=mt,this.setTexture2DArray=H,this.setTexture3D=B,this.setTextureCube=X,this.rebindTextures=ct,this.setupRenderTarget=S,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=st}function UT(n,t){function e(i,s=Oi){let r;const o=te.getTransfer(s);if(i===Si)return n.UNSIGNED_BYTE;if(i===uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===du)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fp)return n.BYTE;if(i===hp)return n.SHORT;if(i===Yr)return n.UNSIGNED_SHORT;if(i===cu)return n.INT;if(i===gs)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Qr)return n.HALF_FLOAT;if(i===mp)return n.ALPHA;if(i===gp)return n.RGB;if(i===Rn)return n.RGBA;if(i===_p)return n.LUMINANCE;if(i===vp)return n.LUMINANCE_ALPHA;if(i===Ks)return n.DEPTH_COMPONENT;if(i===or)return n.DEPTH_STENCIL;if(i===xp)return n.RED;if(i===fu)return n.RED_INTEGER;if(i===yp)return n.RG;if(i===hu)return n.RG_INTEGER;if(i===pu)return n.RGBA_INTEGER;if(i===Yo||i===jo||i===qo||i===Ko)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dc||i===fc||i===hc||i===pc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===mc||i===gc||i===_c)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===mc||i===gc)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===_c)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vc||i===xc||i===yc||i===Mc||i===Sc||i===bc||i===Ec||i===Tc||i===wc||i===Ac||i===Cc||i===Rc||i===Pc||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===yc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===bc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ec)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Rc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Lc||i===Ic)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zo)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Mp||i===Uc||i===Nc||i===Oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Zo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===rr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class NT extends _n{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class $s extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OT={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,v=.005;c.inputState.pinching&&f>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OT)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new $s;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const FT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BT=`
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

}`;class zT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Xi({vertexShader:FT,fragmentShader:BT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kT extends ys{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,v=null;const _=new zT,m=e.getContextAttributes();let p=null,D=null;const P=[],T=[],k=new Xt;let V=null;const N=new _n;N.viewport=new be;const I=new _n;I.viewport=new be;const E=[N,I],w=new NT;let C=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=P[Y];return at===void 0&&(at=new Al,P[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=P[Y];return at===void 0&&(at=new Al,P[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=P[Y];return at===void 0&&(at=new Al,P[Y]=at),at.getHandSpace()};function nt(Y){const at=T.indexOf(Y.inputSource);if(at===-1)return;const _t=P[at];_t!==void 0&&(_t.update(Y.inputSource,Y.frame,c||o),_t.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ot(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",ot),s.removeEventListener("inputsourceschange",mt);for(let Y=0;Y<P.length;Y++){const at=T[Y];at!==null&&(T[Y]=null,P[Y].disconnect(at))}C=null,et=null,_.reset(),t.setRenderTarget(p),h=null,f=null,d=null,s=null,D=null,bt.stop(),i.isPresenting=!1,t.setPixelRatio(V),t.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",ot),s.addEventListener("inputsourceschange",mt),m.xrCompatible!==!0&&await e.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(k),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),D=new _s(h.framebufferWidth,h.framebufferHeight,{format:Rn,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,_t=null,O=null;m.depth&&(O=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?or:Ks,_t=m.stencil?rr:gs);const G={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(G),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),D=new _s(f.textureWidth,f.textureHeight,{format:Rn,type:Si,depthTexture:new Op(f.textureWidth,f.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),bt.setContext(s),bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function mt(Y){for(let at=0;at<Y.removed.length;at++){const _t=Y.removed[at],O=T.indexOf(_t);O>=0&&(T[O]=null,P[O].disconnect(_t))}for(let at=0;at<Y.added.length;at++){const _t=Y.added[at];let O=T.indexOf(_t);if(O===-1){for(let $=0;$<P.length;$++)if($>=T.length){T.push(_t),O=$;break}else if(T[$]===null){T[$]=_t,O=$;break}if(O===-1)break}const G=P[O];G&&G.connect(_t)}}const H=new K,B=new K;function X(Y,at,_t){H.setFromMatrixPosition(at.matrixWorld),B.setFromMatrixPosition(_t.matrixWorld);const O=H.distanceTo(B),G=at.projectionMatrix.elements,$=_t.projectionMatrix.elements,ct=G[14]/(G[10]-1),S=G[14]/(G[10]+1),R=(G[9]+1)/G[5],z=(G[9]-1)/G[5],b=(G[8]-1)/G[0],Q=($[8]+1)/$[0],J=ct*b,st=ct*Q,rt=O/(-b+Q),Z=rt*-b;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Z),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),G[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const M=ct+rt,y=S+rt,g=J-Z,F=st+(O-Z),tt=R*S/y*M,lt=z*S/y*M;Y.projectionMatrix.makePerspective(g,F,tt,lt,M,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,_t=Y.far;_.texture!==null&&(_.depthNear>0&&(at=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),w.near=I.near=N.near=at,w.far=I.far=N.far=_t,(C!==w.near||et!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,et=w.far),N.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,w.layers.mask=N.layers.mask|I.layers.mask;const O=Y.parent,G=w.cameras;ht(w,O);for(let $=0;$<G.length;$++)ht(G[$],O);G.length===2?X(w,N,I):w.projectionMatrix.copy(N.projectionMatrix),U(Y,w,O)};function U(Y,at,_t){_t===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(_t.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)};let L=null;function dt(Y,at){if(u=at.getViewerPose(c||o),v=at,u!==null){const _t=u.views;h!==null&&(t.setRenderTargetFramebuffer(D,h.framebuffer),t.setRenderTarget(D));let O=!1;_t.length!==w.cameras.length&&(w.cameras.length=0,O=!0);for(let $=0;$<_t.length;$++){const ct=_t[$];let S=null;if(h!==null)S=h.getViewport(ct);else{const z=d.getViewSubImage(f,ct);S=z.viewport,$===0&&(t.setRenderTargetTextures(D,z.colorTexture,f.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(D))}let R=E[$];R===void 0&&(R=new _n,R.layers.enable($),R.viewport=new be,E[$]=R),R.matrix.fromArray(ct.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ct.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(S.x,S.y,S.width,S.height),$===0&&(w.matrix.copy(R.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),O===!0&&w.cameras.push(R)}const G=s.enabledFeatures;if(G&&G.includes("depth-sensing")){const $=d.getDepthInformation(_t[0]);$&&$.isValid&&$.texture&&_.init(t,$,s.renderState)}}for(let _t=0;_t<P.length;_t++){const O=T[_t],G=P[_t];O!==null&&G!==void 0&&G.update(O,at,c||o)}L&&L(Y,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),v=null}const bt=new Up;bt.setAnimationLoop(dt),this.setAnimationLoop=function(Y){L=Y},this.dispose=function(){}}}const es=new Qn,VT=new ye;function HT(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Dp(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,D,P,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,D,P):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const D=t.get(p),P=D.envMap,T=D.envMapRotation;P&&(m.envMap.value=P,es.copy(T),es.x*=-1,es.y*=-1,es.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(VT.makeRotationFromEuler(es)),m.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,D,P){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*D,m.scale.value=P*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,D){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=D.texture,m.transmissionSamplerSize.value.set(D.width,D.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const D=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(D.matrixWorld),m.nearDistance.value=D.shadow.camera.near,m.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function GT(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(D,P){const T=P.program;i.uniformBlockBinding(D,T)}function c(D,P){let T=s[D.id];T===void 0&&(v(D),T=u(D),s[D.id]=T,D.addEventListener("dispose",m));const k=P.program;i.updateUBOMapping(D,k);const V=t.render.frame;r[D.id]!==V&&(f(D),r[D.id]=V)}function u(D){const P=d();D.__bindingPointIndex=P;const T=n.createBuffer(),k=D.__size,V=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,k,V),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,T),T}function d(){for(let D=0;D<a;D++)if(o.indexOf(D)===-1)return o.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(D){const P=s[D.id],T=D.uniforms,k=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let V=0,N=T.length;V<N;V++){const I=Array.isArray(T[V])?T[V]:[T[V]];for(let E=0,w=I.length;E<w;E++){const C=I[E];if(h(C,V,E,k)===!0){const et=C.__offset,nt=Array.isArray(C.value)?C.value:[C.value];let ot=0;for(let mt=0;mt<nt.length;mt++){const H=nt[mt],B=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,et+ot,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,ot),ot+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,et,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(D,P,T,k){const V=D.value,N=P+"_"+T;if(k[N]===void 0)return typeof V=="number"||typeof V=="boolean"?k[N]=V:k[N]=V.clone(),!0;{const I=k[N];if(typeof V=="number"||typeof V=="boolean"){if(I!==V)return k[N]=V,!0}else if(I.equals(V)===!1)return I.copy(V),!0}return!1}function v(D){const P=D.uniforms;let T=0;const k=16;for(let N=0,I=P.length;N<I;N++){const E=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,C=E.length;w<C;w++){const et=E[w],nt=Array.isArray(et.value)?et.value:[et.value];for(let ot=0,mt=nt.length;ot<mt;ot++){const H=nt[ot],B=_(H),X=T%k,ht=X%B.boundary,U=X+ht;T+=ht,U!==0&&k-U<B.storage&&(T+=k-U),et.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=T,T+=B.storage}}}const V=T%k;return V>0&&(T+=k-V),D.__size=T,D.__cache={},this}function _(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function m(D){const P=D.target;P.removeEventListener("dispose",m);const T=o.indexOf(P.__bindingPointIndex);o.splice(T,1),n.deleteBuffer(s[P.id]),delete s[P.id],delete r[P.id]}function p(){for(const D in s)n.deleteBuffer(s[D]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class WT{constructor(t={}){const{canvas:e=LM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const D=[],P=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gn,this.toneMapping=xi,this.toneMappingExposure=1;const T=this;let k=!1,V=0,N=0,I=null,E=-1,w=null;const C=new be,et=new be;let nt=null;const ot=new $t(0);let mt=0,H=e.width,B=e.height,X=1,ht=null,U=null;const L=new be(0,0,H,B),dt=new be(0,0,H,B);let bt=!1;const Y=new gu;let at=!1,_t=!1;const O=new ye,G=new ye,$=new K,ct=new be,S={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function z(){return I===null?X:1}let b=i;function Q(A,j){return e.getContext(A,j)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lu}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Ct,!1),b===null){const j="webgl2";if(b=Q(j,A),b===null)throw Q(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let J,st,rt,Z,M,y,g,F,tt,lt,it,wt,yt,gt,Rt,vt,Tt,Ot,It,Mt,kt,Nt,ie,W;function Et(){J=new qE(b),J.init(),Nt=new UT(b,J),st=new GE(b,J,t,Nt),rt=new DT(b,J),st.reverseDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),Z=new JE(b),M=new gT,y=new IT(b,J,rt,M,st,Nt,Z),g=new XE(T),F=new jE(T),tt=new rS(b),ie=new VE(b,tt),lt=new KE(b,tt,Z,ie),it=new t1(b,lt,tt,Z),It=new QE(b,st,y),vt=new WE(M),wt=new mT(T,g,F,J,st,ie,vt),yt=new HT(T,M),gt=new vT,Rt=new ET(J),Ot=new kE(T,g,F,rt,it,h,l),Tt=new RT(T,it,st),W=new GT(b,Z,st,rt),Mt=new HE(b,J,Z),kt=new ZE(b,J,Z),Z.programs=wt.programs,T.capabilities=st,T.extensions=J,T.properties=M,T.renderLists=gt,T.shadowMap=Tt,T.state=rt,T.info=Z}Et();const pt=new kT(T,b);this.xr=pt,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const A=J.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=J.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(H,B,!1))},this.getSize=function(A){return A.set(H,B)},this.setSize=function(A,j,ut=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,B=j,e.width=Math.floor(A*X),e.height=Math.floor(j*X),ut===!0&&(e.style.width=A+"px",e.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(H*X,B*X).floor()},this.setDrawingBufferSize=function(A,j,ut){H=A,B=j,X=ut,e.width=Math.floor(A*ut),e.height=Math.floor(j*ut),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(C)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,j,ut,ft){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,j,ut,ft),rt.viewport(C.copy(L).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,j,ut,ft){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,j,ut,ft),rt.scissor(et.copy(dt).multiplyScalar(X).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(A){rt.setScissorTest(bt=A)},this.setOpaqueSort=function(A){ht=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(A=!0,j=!0,ut=!0){let ft=0;if(A){let q=!1;if(I!==null){const At=I.texture.format;q=At===pu||At===hu||At===fu}if(q){const At=I.texture.type,Lt=At===Si||At===gs||At===Yr||At===rr||At===uu||At===du,Ft=Ot.getClearColor(),Bt=Ot.getClearAlpha(),jt=Ft.r,Kt=Ft.g,zt=Ft.b;Lt?(v[0]=jt,v[1]=Kt,v[2]=zt,v[3]=Bt,b.clearBufferuiv(b.COLOR,0,v)):(_[0]=jt,_[1]=Kt,_[2]=zt,_[3]=Bt,b.clearBufferiv(b.COLOR,0,_))}else ft|=b.COLOR_BUFFER_BIT}j&&(ft|=b.DEPTH_BUFFER_BIT),ut&&(ft|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Ct,!1),gt.dispose(),Rt.dispose(),M.dispose(),g.dispose(),F.dispose(),it.dispose(),ie.dispose(),W.dispose(),wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",xu),pt.removeEventListener("sessionend",yu),Yi.stop()};function xt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Z.autoReset,j=Tt.enabled,ut=Tt.autoUpdate,ft=Tt.needsUpdate,q=Tt.type;Et(),Z.autoReset=A,Tt.enabled=j,Tt.autoUpdate=ut,Tt.needsUpdate=ft,Tt.type=q}function Ct(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Yt(A){const j=A.target;j.removeEventListener("dispose",Yt),Me(j)}function Me(A){Be(A),M.remove(A)}function Be(A){const j=M.get(A).programs;j!==void 0&&(j.forEach(function(ut){wt.releaseProgram(ut)}),A.isShaderMaterial&&wt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,ut,ft,q,At){j===null&&(j=S);const Lt=q.isMesh&&q.matrixWorld.determinant()<0,Ft=Yp(A,j,ut,ft,q);rt.setMaterial(ft,Lt);let Bt=ut.index,jt=1;if(ft.wireframe===!0){if(Bt=lt.getWireframeAttribute(ut),Bt===void 0)return;jt=2}const Kt=ut.drawRange,zt=ut.attributes.position;let ee=Kt.start*jt,ge=(Kt.start+Kt.count)*jt;At!==null&&(ee=Math.max(ee,At.start*jt),ge=Math.min(ge,(At.start+At.count)*jt)),Bt!==null?(ee=Math.max(ee,0),ge=Math.min(ge,Bt.count)):zt!=null&&(ee=Math.max(ee,0),ge=Math.min(ge,zt.count));const ve=ge-ee;if(ve<0||ve===1/0)return;ie.setup(q,ft,Ft,ut,Bt);let en,re=Mt;if(Bt!==null&&(en=tt.get(Bt),re=kt,re.setIndex(en)),q.isMesh)ft.wireframe===!0?(rt.setLineWidth(ft.wireframeLinewidth*z()),re.setMode(b.LINES)):re.setMode(b.TRIANGLES);else if(q.isLine){let Vt=ft.linewidth;Vt===void 0&&(Vt=1),rt.setLineWidth(Vt*z()),q.isLineSegments?re.setMode(b.LINES):q.isLineLoop?re.setMode(b.LINE_LOOP):re.setMode(b.LINE_STRIP)}else q.isPoints?re.setMode(b.POINTS):q.isSprite&&re.setMode(b.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)re.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))re.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Vt=q._multiDrawStarts,ei=q._multiDrawCounts,oe=q._multiDrawCount,bn=Bt?tt.get(Bt).bytesPerElement:1,Ss=M.get(ft).currentProgram.getUniforms();for(let on=0;on<oe;on++)Ss.setValue(b,"_gl_DrawID",on),re.render(Vt[on]/bn,ei[on])}else if(q.isInstancedMesh)re.renderInstances(ee,ve,q.count);else if(ut.isInstancedBufferGeometry){const Vt=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,ei=Math.min(ut.instanceCount,Vt);re.renderInstances(ee,ve,ei)}else re.render(ee,ve)};function ce(A,j,ut){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,io(A,j,ut),A.side=Wi,A.needsUpdate=!0,io(A,j,ut),A.side=gi):io(A,j,ut)}this.compile=function(A,j,ut=null){ut===null&&(ut=A),p=Rt.get(ut),p.init(j),P.push(p),ut.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),A!==ut&&A.traverseVisible(function(q){q.isLight&&q.layers.test(j.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const ft=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const At=q.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){const Ft=At[Lt];ce(Ft,ut,q),ft.add(Ft)}else ce(At,ut,q),ft.add(At)}),P.pop(),p=null,ft},this.compileAsync=function(A,j,ut=null){const ft=this.compile(A,j,ut);return new Promise(q=>{function At(){if(ft.forEach(function(Lt){M.get(Lt).currentProgram.isReady()&&ft.delete(Lt)}),ft.size===0){q(A);return}setTimeout(At,10)}J.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Sn=null;function ti(A){Sn&&Sn(A)}function xu(){Yi.stop()}function yu(){Yi.start()}const Yi=new Up;Yi.setAnimationLoop(ti),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(A){Sn=A,pt.setAnimationLoop(A),A===null?Yi.stop():Yi.start()},pt.addEventListener("sessionstart",xu),pt.addEventListener("sessionend",yu),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(j),j=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,j,I),p=Rt.get(A,P.length),p.init(j),P.push(p),G.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Y.setFromProjectionMatrix(G),_t=this.localClippingEnabled,at=vt.init(this.clippingPlanes,_t),m=gt.get(A,D.length),m.init(),D.push(m),pt.enabled===!0&&pt.isPresenting===!0){const At=T.xr.getDepthSensingMesh();At!==null&&Oa(At,j,-1/0,T.sortObjects)}Oa(A,j,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(ht,U),R=pt.enabled===!1||pt.isPresenting===!1||pt.hasDepthSensing()===!1,R&&Ot.addToRenderList(m,A),this.info.render.frame++,at===!0&&vt.beginShadows();const ut=p.state.shadowsArray;Tt.render(ut,A,j),at===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=m.opaque,q=m.transmissive;if(p.setupLights(),j.isArrayCamera){const At=j.cameras;if(q.length>0)for(let Lt=0,Ft=At.length;Lt<Ft;Lt++){const Bt=At[Lt];Su(ft,q,A,Bt)}R&&Ot.render(A);for(let Lt=0,Ft=At.length;Lt<Ft;Lt++){const Bt=At[Lt];Mu(m,A,Bt,Bt.viewport)}}else q.length>0&&Su(ft,q,A,j),R&&Ot.render(A),Mu(m,A,j);I!==null&&(y.updateMultisampleRenderTarget(I),y.updateRenderTargetMipmap(I)),A.isScene===!0&&A.onAfterRender(T,A,j),ie.resetDefaultState(),E=-1,w=null,P.pop(),P.length>0?(p=P[P.length-1],at===!0&&vt.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,D.pop(),D.length>0?m=D[D.length-1]:m=null};function Oa(A,j,ut,ft){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)ut=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){ft&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(G);const Lt=it.update(A),Ft=A.material;Ft.visible&&m.push(A,Lt,Ft,ut,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const Lt=it.update(A),Ft=A.material;if(ft&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ct.copy(Lt.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(G)),Array.isArray(Ft)){const Bt=Lt.groups;for(let jt=0,Kt=Bt.length;jt<Kt;jt++){const zt=Bt[jt],ee=Ft[zt.materialIndex];ee&&ee.visible&&m.push(A,Lt,ee,ut,ct.z,zt)}}else Ft.visible&&m.push(A,Lt,Ft,ut,ct.z,null)}}const At=A.children;for(let Lt=0,Ft=At.length;Lt<Ft;Lt++)Oa(At[Lt],j,ut,ft)}function Mu(A,j,ut,ft){const q=A.opaque,At=A.transmissive,Lt=A.transparent;p.setupLightsView(ut),at===!0&&vt.setGlobalState(T.clippingPlanes,ut),ft&&rt.viewport(C.copy(ft)),q.length>0&&no(q,j,ut),At.length>0&&no(At,j,ut),Lt.length>0&&no(Lt,j,ut),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function Su(A,j,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ft.id]===void 0&&(p.state.transmissionRenderTarget[ft.id]=new _s(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qr:Si,minFilter:fs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const At=p.state.transmissionRenderTarget[ft.id],Lt=ft.viewport||C;At.setSize(Lt.z,Lt.w);const Ft=T.getRenderTarget();T.setRenderTarget(At),T.getClearColor(ot),mt=T.getClearAlpha(),mt<1&&T.setClearColor(16777215,.5),T.clear(),R&&Ot.render(ut);const Bt=T.toneMapping;T.toneMapping=xi;const jt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),p.setupLightsView(ft),at===!0&&vt.setGlobalState(T.clippingPlanes,ft),no(A,ut,ft),y.updateMultisampleRenderTarget(At),y.updateRenderTargetMipmap(At),J.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let zt=0,ee=j.length;zt<ee;zt++){const ge=j[zt],ve=ge.object,en=ge.geometry,re=ge.material,Vt=ge.group;if(re.side===gi&&ve.layers.test(ft.layers)){const ei=re.side;re.side=rn,re.needsUpdate=!0,bu(ve,ut,ft,en,re,Vt),re.side=ei,re.needsUpdate=!0,Kt=!0}}Kt===!0&&(y.updateMultisampleRenderTarget(At),y.updateRenderTargetMipmap(At))}T.setRenderTarget(Ft),T.setClearColor(ot,mt),jt!==void 0&&(ft.viewport=jt),T.toneMapping=Bt}function no(A,j,ut){const ft=j.isScene===!0?j.overrideMaterial:null;for(let q=0,At=A.length;q<At;q++){const Lt=A[q],Ft=Lt.object,Bt=Lt.geometry,jt=ft===null?Lt.material:ft,Kt=Lt.group;Ft.layers.test(ut.layers)&&bu(Ft,j,ut,Bt,jt,Kt)}}function bu(A,j,ut,ft,q,At){A.onBeforeRender(T,j,ut,ft,q,At),A.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(T,j,ut,ft,A,At),q.transparent===!0&&q.side===gi&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,T.renderBufferDirect(ut,j,ft,q,A,At),q.side=Wi,q.needsUpdate=!0,T.renderBufferDirect(ut,j,ft,q,A,At),q.side=gi):T.renderBufferDirect(ut,j,ft,q,A,At),A.onAfterRender(T,j,ut,ft,q,At)}function io(A,j,ut){j.isScene!==!0&&(j=S);const ft=M.get(A),q=p.state.lights,At=p.state.shadowsArray,Lt=q.state.version,Ft=wt.getParameters(A,q.state,At,j,ut),Bt=wt.getProgramCacheKey(Ft);let jt=ft.programs;ft.environment=A.isMeshStandardMaterial?j.environment:null,ft.fog=j.fog,ft.envMap=(A.isMeshStandardMaterial?F:g).get(A.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,jt===void 0&&(A.addEventListener("dispose",Yt),jt=new Map,ft.programs=jt);let Kt=jt.get(Bt);if(Kt!==void 0){if(ft.currentProgram===Kt&&ft.lightsStateVersion===Lt)return Tu(A,Ft),Kt}else Ft.uniforms=wt.getUniforms(A),A.onBeforeCompile(Ft,T),Kt=wt.acquireProgram(Ft,Bt),jt.set(Bt,Kt),ft.uniforms=Ft.uniforms;const zt=ft.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(zt.clippingPlanes=vt.uniform),Tu(A,Ft),ft.needsLights=qp(A),ft.lightsStateVersion=Lt,ft.needsLights&&(zt.ambientLightColor.value=q.state.ambient,zt.lightProbe.value=q.state.probe,zt.directionalLights.value=q.state.directional,zt.directionalLightShadows.value=q.state.directionalShadow,zt.spotLights.value=q.state.spot,zt.spotLightShadows.value=q.state.spotShadow,zt.rectAreaLights.value=q.state.rectArea,zt.ltc_1.value=q.state.rectAreaLTC1,zt.ltc_2.value=q.state.rectAreaLTC2,zt.pointLights.value=q.state.point,zt.pointLightShadows.value=q.state.pointShadow,zt.hemisphereLights.value=q.state.hemi,zt.directionalShadowMap.value=q.state.directionalShadowMap,zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,zt.spotShadowMap.value=q.state.spotShadowMap,zt.spotLightMatrix.value=q.state.spotLightMatrix,zt.spotLightMap.value=q.state.spotLightMap,zt.pointShadowMap.value=q.state.pointShadowMap,zt.pointShadowMatrix.value=q.state.pointShadowMatrix),ft.currentProgram=Kt,ft.uniformsList=null,Kt}function Eu(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=Jo.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function Tu(A,j){const ut=M.get(A);ut.outputColorSpace=j.outputColorSpace,ut.batching=j.batching,ut.batchingColor=j.batchingColor,ut.instancing=j.instancing,ut.instancingColor=j.instancingColor,ut.instancingMorph=j.instancingMorph,ut.skinning=j.skinning,ut.morphTargets=j.morphTargets,ut.morphNormals=j.morphNormals,ut.morphColors=j.morphColors,ut.morphTargetsCount=j.morphTargetsCount,ut.numClippingPlanes=j.numClippingPlanes,ut.numIntersection=j.numClipIntersection,ut.vertexAlphas=j.vertexAlphas,ut.vertexTangents=j.vertexTangents,ut.toneMapping=j.toneMapping}function Yp(A,j,ut,ft,q){j.isScene!==!0&&(j=S),y.resetTextureUnits();const At=j.fog,Lt=ft.isMeshStandardMaterial?j.environment:null,Ft=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:lr,Bt=(ft.isMeshStandardMaterial?F:g).get(ft.envMap||Lt),jt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,Kt=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),zt=!!ut.morphAttributes.position,ee=!!ut.morphAttributes.normal,ge=!!ut.morphAttributes.color;let ve=xi;ft.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ve=T.toneMapping);const en=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,re=en!==void 0?en.length:0,Vt=M.get(ft),ei=p.state.lights;if(at===!0&&(_t===!0||A!==w)){const pn=A===w&&ft.id===E;vt.setState(ft,A,pn)}let oe=!1;ft.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ei.state.version||Vt.outputColorSpace!==Ft||q.isBatchedMesh&&Vt.batching===!1||!q.isBatchedMesh&&Vt.batching===!0||q.isBatchedMesh&&Vt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Vt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Vt.instancing===!1||!q.isInstancedMesh&&Vt.instancing===!0||q.isSkinnedMesh&&Vt.skinning===!1||!q.isSkinnedMesh&&Vt.skinning===!0||q.isInstancedMesh&&Vt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Vt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Vt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Vt.instancingMorph===!1&&q.morphTexture!==null||Vt.envMap!==Bt||ft.fog===!0&&Vt.fog!==At||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==vt.numPlanes||Vt.numIntersection!==vt.numIntersection)||Vt.vertexAlphas!==jt||Vt.vertexTangents!==Kt||Vt.morphTargets!==zt||Vt.morphNormals!==ee||Vt.morphColors!==ge||Vt.toneMapping!==ve||Vt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Vt.__version=ft.version);let bn=Vt.currentProgram;oe===!0&&(bn=io(ft,j,q));let Ss=!1,on=!1,dr=!1;const xe=bn.getUniforms(),zn=Vt.uniforms;if(rt.useProgram(bn.program)&&(Ss=!0,on=!0,dr=!0),ft.id!==E&&(E=ft.id,on=!0),Ss||w!==A){rt.buffers.depth.getReversed()?(O.copy(A.projectionMatrix),UM(O),NM(O),xe.setValue(b,"projectionMatrix",O)):xe.setValue(b,"projectionMatrix",A.projectionMatrix),xe.setValue(b,"viewMatrix",A.matrixWorldInverse);const Ei=xe.map.cameraPosition;Ei!==void 0&&Ei.setValue(b,$.setFromMatrixPosition(A.matrixWorld)),st.logarithmicDepthBuffer&&xe.setValue(b,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&xe.setValue(b,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,on=!0,dr=!0)}if(q.isSkinnedMesh){xe.setOptional(b,q,"bindMatrix"),xe.setOptional(b,q,"bindMatrixInverse");const pn=q.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),xe.setValue(b,"boneTexture",pn.boneTexture,y))}q.isBatchedMesh&&(xe.setOptional(b,q,"batchingTexture"),xe.setValue(b,"batchingTexture",q._matricesTexture,y),xe.setOptional(b,q,"batchingIdTexture"),xe.setValue(b,"batchingIdTexture",q._indirectTexture,y),xe.setOptional(b,q,"batchingColorTexture"),q._colorsTexture!==null&&xe.setValue(b,"batchingColorTexture",q._colorsTexture,y));const fr=ut.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&It.update(q,ut,bn),(on||Vt.receiveShadow!==q.receiveShadow)&&(Vt.receiveShadow=q.receiveShadow,xe.setValue(b,"receiveShadow",q.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(zn.envMap.value=Bt,zn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&j.environment!==null&&(zn.envMapIntensity.value=j.environmentIntensity),on&&(xe.setValue(b,"toneMappingExposure",T.toneMappingExposure),Vt.needsLights&&jp(zn,dr),At&&ft.fog===!0&&yt.refreshFogUniforms(zn,At),yt.refreshMaterialUniforms(zn,ft,X,B,p.state.transmissionRenderTarget[A.id]),Jo.upload(b,Eu(Vt),zn,y)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Jo.upload(b,Eu(Vt),zn,y),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&xe.setValue(b,"center",q.center),xe.setValue(b,"modelViewMatrix",q.modelViewMatrix),xe.setValue(b,"normalMatrix",q.normalMatrix),xe.setValue(b,"modelMatrix",q.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const pn=ft.uniformsGroups;for(let Ei=0,Ti=pn.length;Ei<Ti;Ei++){const wu=pn[Ei];W.update(wu,bn),W.bind(wu,bn)}}return bn}function jp(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function qp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(A,j,ut){M.get(A.texture).__webglTexture=j,M.get(A.depthTexture).__webglTexture=ut;const ft=M.get(A);ft.__hasExternalTextures=!0,ft.__autoAllocateDepthBuffer=ut===void 0,ft.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ft.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const ut=M.get(A);ut.__webglFramebuffer=j,ut.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,ut=0){I=A,V=j,N=ut;let ft=!0,q=null,At=!1,Lt=!1;if(A){const Bt=M.get(A);if(Bt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(b.FRAMEBUFFER,null),ft=!1;else if(Bt.__webglFramebuffer===void 0)y.setupRenderTarget(A);else if(Bt.__hasExternalTextures)y.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const zt=A.depthTexture;if(Bt.__boundDepthTexture!==zt){if(zt!==null&&M.has(zt)&&(A.width!==zt.image.width||A.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(A)}}const jt=A.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Lt=!0);const Kt=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Kt[j])?q=Kt[j][ut]:q=Kt[j],At=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?q=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Kt)?q=Kt[ut]:q=Kt,C.copy(A.viewport),et.copy(A.scissor),nt=A.scissorTest}else C.copy(L).multiplyScalar(X).floor(),et.copy(dt).multiplyScalar(X).floor(),nt=bt;if(rt.bindFramebuffer(b.FRAMEBUFFER,q)&&ft&&rt.drawBuffers(A,q),rt.viewport(C),rt.scissor(et),rt.setScissorTest(nt),At){const Bt=M.get(A.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+j,Bt.__webglTexture,ut)}else if(Lt){const Bt=M.get(A.texture),jt=j||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Bt.__webglTexture,ut||0,jt)}E=-1},this.readRenderTargetPixels=function(A,j,ut,ft,q,At,Lt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){rt.bindFramebuffer(b.FRAMEBUFFER,Ft);try{const Bt=A.texture,jt=Bt.format,Kt=Bt.type;if(!st.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ft&&ut>=0&&ut<=A.height-q&&b.readPixels(j,ut,ft,q,Nt.convert(jt),Nt.convert(Kt),At)}finally{const Bt=I!==null?M.get(I).__webglFramebuffer:null;rt.bindFramebuffer(b.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(A,j,ut,ft,q,At,Lt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ft=Ft[Lt]),Ft){const Bt=A.texture,jt=Bt.format,Kt=Bt.type;if(!st.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-ft&&ut>=0&&ut<=A.height-q){rt.bindFramebuffer(b.FRAMEBUFFER,Ft);const zt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.bufferData(b.PIXEL_PACK_BUFFER,At.byteLength,b.STREAM_READ),b.readPixels(j,ut,ft,q,Nt.convert(jt),Nt.convert(Kt),0);const ee=I!==null?M.get(I).__webglFramebuffer:null;rt.bindFramebuffer(b.FRAMEBUFFER,ee);const ge=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await IM(b,ge,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,At),b.deleteBuffer(zt),b.deleteSync(ge),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,ut=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const ft=Math.pow(2,-ut),q=Math.floor(A.image.width*ft),At=Math.floor(A.image.height*ft),Lt=j!==null?j.x:0,Ft=j!==null?j.y:0;y.setTexture2D(A,0),b.copyTexSubImage2D(b.TEXTURE_2D,ut,0,0,Lt,Ft,q,At),rt.unbindTexture()},this.copyTextureToTexture=function(A,j,ut=null,ft=null,q=0){A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture function signature has changed."),ft=arguments[0]||null,A=arguments[1],j=arguments[2],q=arguments[3]||0,ut=null);let At,Lt,Ft,Bt,jt,Kt,zt,ee,ge;const ve=A.isCompressedTexture?A.mipmaps[q]:A.image;ut!==null?(At=ut.max.x-ut.min.x,Lt=ut.max.y-ut.min.y,Ft=ut.isBox3?ut.max.z-ut.min.z:1,Bt=ut.min.x,jt=ut.min.y,Kt=ut.isBox3?ut.min.z:0):(At=ve.width,Lt=ve.height,Ft=ve.depth||1,Bt=0,jt=0,Kt=0),ft!==null?(zt=ft.x,ee=ft.y,ge=ft.z):(zt=0,ee=0,ge=0);const en=Nt.convert(j.format),re=Nt.convert(j.type);let Vt;j.isData3DTexture?(y.setTexture3D(j,0),Vt=b.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(y.setTexture2DArray(j,0),Vt=b.TEXTURE_2D_ARRAY):(y.setTexture2D(j,0),Vt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,j.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,j.unpackAlignment);const ei=b.getParameter(b.UNPACK_ROW_LENGTH),oe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),bn=b.getParameter(b.UNPACK_SKIP_PIXELS),Ss=b.getParameter(b.UNPACK_SKIP_ROWS),on=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ve.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ve.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Bt),b.pixelStorei(b.UNPACK_SKIP_ROWS,jt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Kt);const dr=A.isDataArrayTexture||A.isData3DTexture,xe=j.isDataArrayTexture||j.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const zn=M.get(A),fr=M.get(j),pn=M.get(zn.__renderTarget),Ei=M.get(fr.__renderTarget);rt.bindFramebuffer(b.READ_FRAMEBUFFER,pn.__webglFramebuffer),rt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Ti=0;Ti<Ft;Ti++)dr&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(A).__webglTexture,q,Kt+Ti),A.isDepthTexture?(xe&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,M.get(j).__webglTexture,q,ge+Ti),b.blitFramebuffer(Bt,jt,At,Lt,zt,ee,At,Lt,b.DEPTH_BUFFER_BIT,b.NEAREST)):xe?b.copyTexSubImage3D(Vt,q,zt,ee,ge+Ti,Bt,jt,At,Lt):b.copyTexSubImage2D(Vt,q,zt,ee,ge+Ti,Bt,jt,At,Lt);rt.bindFramebuffer(b.READ_FRAMEBUFFER,null),rt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else xe?A.isDataTexture||A.isData3DTexture?b.texSubImage3D(Vt,q,zt,ee,ge,At,Lt,Ft,en,re,ve.data):j.isCompressedArrayTexture?b.compressedTexSubImage3D(Vt,q,zt,ee,ge,At,Lt,Ft,en,ve.data):b.texSubImage3D(Vt,q,zt,ee,ge,At,Lt,Ft,en,re,ve):A.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,q,zt,ee,At,Lt,en,re,ve.data):A.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,q,zt,ee,ve.width,ve.height,en,ve.data):b.texSubImage2D(b.TEXTURE_2D,q,zt,ee,At,Lt,en,re,ve);b.pixelStorei(b.UNPACK_ROW_LENGTH,ei),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,oe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,bn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ss),b.pixelStorei(b.UNPACK_SKIP_IMAGES,on),q===0&&j.generateMipmaps&&b.generateMipmap(Vt),rt.unbindTexture()},this.copyTextureToTexture3D=function(A,j,ut=null,ft=null,q=0){return A.isTexture!==!0&&(Ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ut=arguments[0]||null,ft=arguments[1]||null,A=arguments[2],j=arguments[3],q=arguments[4]||0),Ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,ut,ft,q)},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&y.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),rt.unbindTexture()},this.resetState=function(){V=0,N=0,I=null,rt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class XT extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $T{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Fc,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new K;class da{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=$n(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=fe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$n(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),i=fe(i,this.array),s=fe(s,this.array),r=fe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Un(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new da(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Vp extends Ms{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bs;const Mr=new K,zs=new K,ks=new K,Vs=new Xt,Sr=new Xt,Hp=new ye,Io=new K,br=new K,Uo=new K,bf=new Xt,Cl=new Xt,Ef=new Xt;class YT extends Ne{constructor(t=new Vp){if(super(),this.isSprite=!0,this.type="Sprite",Bs===void 0){Bs=new Je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $T(e,5);Bs.setIndex([0,1,2,0,2,3]),Bs.setAttribute("position",new da(i,3,0,!1)),Bs.setAttribute("uv",new da(i,2,3,!1))}this.geometry=Bs,this.material=t,this.center=new Xt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Hp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-ks.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;No(Io.set(-.5,-.5,0),ks,o,zs,s,r),No(br.set(.5,-.5,0),ks,o,zs,s,r),No(Uo.set(.5,.5,0),ks,o,zs,s,r),bf.set(0,0),Cl.set(1,0),Ef.set(1,1);let a=t.ray.intersectTriangle(Io,br,Uo,!1,Mr);if(a===null&&(No(br.set(-.5,.5,0),ks,o,zs,s,r),Cl.set(0,1),a=t.ray.intersectTriangle(Io,Uo,br,!1,Mr),a===null))return;const l=t.ray.origin.distanceTo(Mr);l<t.near||l>t.far||e.push({distance:l,point:Mr.clone(),uv:un.getInterpolation(Mr,Io,br,Uo,bf,Cl,Ef,new Xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function No(n,t,e,i,s,r){Vs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Sr.x=r*Vs.x-s*Vs.y,Sr.y=s*Vs.x+r*Vs.y):Sr.copy(Vs),n.copy(t),n.x+=Sr.x,n.y+=Sr.y,n.applyMatrix4(Hp)}class fa extends Ms{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ha=new K,pa=new K,Tf=new ye,Er=new Ua,Oo=new Ia,Rl=new K,wf=new K;class Rr extends Ne{constructor(t=new Je,e=new fa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ha.fromBufferAttribute(e,s-1),pa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ha.distanceTo(pa);t.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Oo.copy(i.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Tf.copy(s).invert(),Er.copy(t.ray).applyMatrix4(Tf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=h,m=v-1;_<m;_+=c){const p=u.getX(_),D=u.getX(_+1),P=Fo(this,t,Er,l,p,D);P&&e.push(P)}if(this.isLineLoop){const _=u.getX(v-1),m=u.getX(h),p=Fo(this,t,Er,l,_,m);p&&e.push(p)}}else{const h=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let _=h,m=v-1;_<m;_+=c){const p=Fo(this,t,Er,l,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Fo(this,t,Er,l,v-1,h);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(ha.fromBufferAttribute(o,s),pa.fromBufferAttribute(o,r),e.distanceSqToSegment(ha,pa,Rl,wf)>i)return;Rl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Rl);if(!(l<t.near||l>t.far))return{distance:l,point:wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Af=new K,Cf=new K;class Gp extends Rr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Af.fromBufferAttribute(e,s),Cf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Af.distanceTo(Cf);t.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class jT extends tn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Bo=new K,zo=new K,Pl=new K,ko=new un;class qT extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Fr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},h=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:m,c:p}=ko;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),ko.getNormal(Pl),d[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let D=0;D<3;D++){const P=(D+1)%3,T=d[D],k=d[P],V=ko[u[D]],N=ko[u[P]],I=`${T}_${k}`,E=`${k}_${T}`;E in f&&f[E]?(Pl.dot(f[E].normal)<=r&&(h.push(V.x,V.y,V.z),h.push(N.x,N.y,N.z)),f[E]=null):I in f||(f[I]={index0:c[D],index1:c[P],normal:Pl.clone()})}}for(const v in f)if(f[v]){const{index0:_,index1:m}=f[v];Bo.fromBufferAttribute(a,_),zo.fromBufferAttribute(a,m),h.push(Bo.x,Bo.y,Bo.z),h.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new xn(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Rf extends Ms{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sp,this.normalScale=new Xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wp extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Dl=new ye,Pf=new K,Df=new K;class KT{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gu,this._frameExtents=new Xt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Pf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pf),Df.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Df),e.updateMatrixWorld(),Dl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Dl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ZT extends KT{constructor(){super(new Np(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ll extends Wp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new ZT}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class JT extends Wp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Lf=new ye;class QT{constructor(t,e,i=0,s=1/0){this.ray=new Ua(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new mu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lf),this}intersectObject(t,e=!0,i=[]){return kc(t,this,i,e),i.sort(If),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)kc(t[s],this,i,e);return i.sort(If),i}}function If(n,t){return n.distance-t.distance}function kc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)kc(r[o],t,e,!0)}}class Uf{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ke(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tw extends Gp{constructor(t=10,e=10,i=4473924,s=8947848){i=new $t(i),s=new $t(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,h=0,v=-a;f<=e;f++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=f===r?i:s;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const u=new Je;u.setAttribute("position",new xn(l,3)),u.setAttribute("color",new xn(c,3));const d=new fa({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class ew extends ys{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lu);const Nf={type:"change"},vu={type:"start"},Xp={type:"end"},Vo=new Ua,Of=new Ni,nw=Math.cos(70*DM.DEG2RAD),Ae=new K,nn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Il=1e-6;class iw extends ew{constructor(t,e=null){super(t,e),this.state=he.NONE,this.enabled=!0,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ws.ROTATE,TWO:Ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new vs,this._lastTargetPosition=new K,this._quat=new vs().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uf,this._sphericalDelta=new Uf,this._scale=1,this._panOffset=new K,this._rotateStart=new Xt,this._rotateEnd=new Xt,this._rotateDelta=new Xt,this._panStart=new Xt,this._panEnd=new Xt,this._panDelta=new Xt,this._dollyStart=new Xt,this._dollyEnd=new Xt,this._dollyDelta=new Xt,this._dollyDirection=new K,this._mouse=new Xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rw.bind(this),this._onPointerDown=sw.bind(this),this._onPointerUp=ow.bind(this),this._onContextMenu=hw.bind(this),this._onMouseWheel=cw.bind(this),this._onKeyDown=uw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=fw.bind(this),this._onMouseDown=aw.bind(this),this._onMouseMove=lw.bind(this),this._interceptControlDown=pw.bind(this),this._interceptControlUp=mw.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nf),this.update(),this.state=he.NONE}update(t=null){const e=this.object.position;Ae.copy(e).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=nn:i>Math.PI&&(i-=nn),s<-Math.PI?s+=nn:s>Math.PI&&(s-=nn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new K(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new K(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Vo.origin.copy(this.object.position),Vo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Vo.direction))<nw?this.object.lookAt(this.target):(Of.setFromNormalAndCoplanarPoint(this.object.up,this.target),Vo.intersectPlane(Of,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Il||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Il||this._lastTargetPosition.distanceToSquared(this.target)>Il?(this.dispatchEvent(Nf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?nn/60*this.autoRotateSpeed*t:nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ae.setFromMatrixColumn(e,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,e){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(e,1):(Ae.setFromMatrixColumn(e,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ae.copy(s).sub(this.target);let r=Ae.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-nn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sw(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function rw(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ow(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Xp),this.state=he.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function aw(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case js.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=he.DOLLY;break;case js.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}break;case js.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(vu)}function lw(n){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function cw(n){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(n.preventDefault(),this.dispatchEvent(vu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Xp))}function uw(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function dw(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=he.TOUCH_ROTATE;break;case Ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case Ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=he.TOUCH_DOLLY_PAN;break;case Ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(vu)}function fw(n){switch(this._trackPointer(n),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=he.NONE}}function hw(n){this.enabled!==!1&&n.preventDefault()}function pw(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mw(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gw={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},_w={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},vw={style:{display:"flex","align-items":"center",gap:"8px"}},xw={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},yw={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},Mw={style:{color:"#00d2ff","font-weight":"bold"}},Sw={style:{color:"#ecc94b"}},bw={style:{color:"#e2e8f0"}},Ew={style:{color:"#e2e8f0"}},Tw={style:{color:"#63b3ed"}},ww={style:{color:"#e2e8f0"}},Aw={style:{color:"#e2e8f0"}},Cw={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},Rw={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},Pw={style:{display:"flex","align-items":"center",gap:"6px"}},Dw={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},Lw={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},Iw={style:{color:"#48bb78"}},Uw={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},Nw={style:{color:"#ecc94b"}},Ow={style:{color:"#63b3ed"}},Fw=$i({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=ne(null),i=ne(null),s=ne("current"),r=ne({visible:!1,x:0,y:0}),o=Ze(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(H){s.value=H,E()}let l,c,u,d,f,h,v,_=[],m=null,p=new $s,D=new $s,P=null;function T(H){const ht=Math.max(0,Math.min(1,(H-65)/31)),U=new $t;return ht<.25?U.lerpColors(new $t(16007006),new $t(16347926),ht/.25):ht<.5?U.lerpColors(new $t(16347926),new $t(15381256),(ht-.25)/.25):ht<.75?U.lerpColors(new $t(15381256),new $t(1096065),(ht-.5)/.25):ht<.9?U.lerpColors(new $t(1096065),new $t(440020),(ht-.75)/.15):U.lerpColors(new $t(440020),new $t(9133302),(ht-.9)/.1),U}function k(H,B=24,X="#94a3b8"){const ht=document.createElement("canvas");ht.width=512,ht.height=128;const U=ht.getContext("2d");U.fillStyle="transparent",U.fillRect(0,0,ht.width,ht.height),U.font=`bold ${B*2}px "Fira Code", monospace`,U.fillStyle=X,U.textAlign="center",U.textBaseline="middle",U.fillText(H,ht.width/2,ht.height/2);const L=new jT(ht);L.minFilter=Cn;const dt=new Vp({map:L,transparent:!0,depthWrite:!1}),bt=new YT(dt);return bt.scale.set(4,1,1),bt}function V(){if(!c||!d||!e.value)return;const H=e.value.clientWidth||800,B=e.value.clientHeight||600;if(H===0||B===0)return;c.aspect=H/B,c.updateProjectionMatrix();const X=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(y=>y.voltageTarget))]:[12],ht=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(y=>y.loadTarget))]:[1],U=Math.max(1,X.length),L=Math.max(1,ht.length),dt=Math.max(18,Math.min(65,U*2.2)),bt=Math.max(18,Math.min(65,L*2.2)),Y=12,at=dt+8,_t=bt+8,O=Y+4,G=c.fov*Math.PI/180,$=Math.max(.1,c.aspect),ct=(at+_t)*.72,R=(O*1.1+(at+_t)*.35)/(2*Math.tan(G/2)*.74),z=ct/(2*Math.tan(G/2)*$*.74),b=Math.max(R,z,22),Q=.56,J=Math.PI/4,st=Y*.38,rt=b*Math.cos(Q)*Math.sin(J),Z=st+b*Math.sin(Q),M=b*Math.cos(Q)*Math.cos(J);c.position.set(rt,Z,M),c.near=.5,c.far=Math.max(3e3,b*25),c.updateProjectionMatrix(),d.target.set(0,st,0),d.minDistance=Math.max(5,b*.15),d.maxDistance=Math.max(120,b*6),d.update()}function N(){V()}function I(){if(!e.value)return;const H=e.value.clientWidth||800,B=e.value.clientHeight||600;l=new XT,l.background=new $t(461588),l.fog=null,c=new _n(45,H/B,.5,3e3),u=new WT({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(H,B),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=xi,e.value.appendChild(u.domElement),d=new iw(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const X=new JT(16777215,.88);l.add(X);const ht=new Ll(16777215,.45);ht.position.set(40,60,40),l.add(ht);const U=new Ll(16777215,.35);U.position.set(-40,50,-40),l.add(U);const L=new Ll(16777215,.25);L.position.set(0,40,-50),l.add(L),h=new QT,v=new Xt(-999,-999),l.add(p),l.add(D),P=new ResizeObserver(()=>{mt()}),P.observe(e.value),window.addEventListener("resize",mt),e.value.addEventListener("mousemove",w),e.value.addEventListener("mouseleave",C),E(),V(),ot()}function E(){if(!l)return;for(;p.children.length>0;){const gt=p.children[0];p.remove(gt)}for(;D.children.length>0;){const gt=D.children[0];D.remove(gt)}_=[],m=null,i.value=null,r.value.visible=!1;const H=t.points;if(!H||H.length===0)return;const B=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((gt,Rt)=>gt-Rt):[...new Set(H.map(gt=>gt.voltageTarget))].sort((gt,Rt)=>gt-Rt),X=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((gt,Rt)=>gt-Rt):[...new Set(H.map(gt=>gt.loadTarget))].sort((gt,Rt)=>gt-Rt),ht=Math.max(1,B.length),U=Math.max(1,X.length),L=Math.max(18,Math.min(65,ht*2.2)),dt=Math.max(18,Math.min(65,U*2.2)),bt=12,Y=ht>1?L/(ht-1):L,at=U>1?dt/(U-1):dt,_t=Math.max(.12,Math.min(1.5,Y*.7)),O=Math.max(.12,Math.min(1.5,at*.7)),G=new Map;H.forEach(gt=>{if(gt.status==="completed"||gt.timestamp>0){const Rt=`${gt.voltageTarget.toFixed(3)}_${gt.loadTarget.toFixed(3)}`;G.set(Rt,gt)}});const ct=Math.max(L,dt)+14,S=Math.max(12,Math.min(40,Math.max(ht,U))),R=new tw(ct,S,165063,1976635);R.position.set(0,0,0),p.add(R);const z=new eo(ct*1.4,ct*1.4),b=new Rf({color:725280,roughness:.7,metalness:.1}),Q=new Pn(z,b);Q.rotation.x=-Math.PI/2,Q.position.y=-.05,Q.receiveShadow=!0,p.add(Q);const J=new fa({color:3718648,linewidth:2}),st=new Je().setFromPoints([new K(-L/2-1,0,dt/2+1),new K(L/2+2,0,dt/2+1)]);p.add(new Rr(st,J));const rt=k("X: 输入电压 Vin (V)",22,"#38bdf8");rt.position.set(0,.4,dt/2+3.2),rt.scale.set(7.5,1.9,1),p.add(rt);const Z=10,M=Math.max(1,Math.ceil(ht/Z));B.forEach((gt,Rt)=>{if(Rt%M===0||Rt===ht-1){const vt=-L/2+(ht>1?Rt/(ht-1)*L:0),Tt=k(`${gt}V`,16,"#94a3b8");Tt.position.set(vt,.2,dt/2+1.8),Tt.scale.set(Math.min(3.2,Y*1.5),.9,1),p.add(Tt)}});const y=new Je().setFromPoints([new K(-L/2-1,0,-dt/2-1),new K(-L/2-1,0,dt/2+2)]);p.add(new Rr(y,J));const g=s.value==="power"||t.loadMode==="CW",F=g?"W":"A",lt=k(g?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");lt.position.set(-L/2-3.8,.4,0),lt.scale.set(8.5,2.1,1),p.add(lt);const it=Math.max(1,Math.ceil(U/Z));X.forEach((gt,Rt)=>{if(Rt%it===0||Rt===U-1){const vt=-dt/2+(U>1?Rt/(U-1)*dt:0),Tt=k(`${gt}${F}`,16,"#94a3b8");Tt.position.set(-L/2-2.2,.2,vt),Tt.scale.set(Math.min(3.2,at*1.5),.9,1),p.add(Tt)}});const wt=new Je().setFromPoints([new K(-L/2-1,0,dt/2+1),new K(-L/2-1,bt+1.5,dt/2+1)]);p.add(new Rr(wt,J));const yt=k("Z: 转换效率 η (%)",22,"#10b981");yt.position.set(-L/2-1,bt+2.4,dt/2+1),yt.scale.set(7.5,1.9,1),p.add(yt),[20,40,60,80,100].forEach(gt=>{const Rt=gt/100*bt,vt=k(`${gt}%`,16,"#6ee7b7");vt.position.set(-L/2-2,Rt,dt/2+1),vt.scale.set(2.8,.8,1),p.add(vt);const Tt=new Je().setFromPoints([new K(-L/2-.8,Rt,dt/2+1),new K(-L/2-.2,Rt,dt/2+1)]);p.add(new Rr(Tt,J))}),B.forEach((gt,Rt)=>{X.forEach((vt,Tt)=>{const Ot=`${gt.toFixed(3)}_${vt.toFixed(3)}`,It=G.get(Ot);if(!It)return;const Mt=-L/2+(ht>1?Rt/(ht-1)*L:0),kt=-dt/2+(U>1?Tt/(U-1)*dt:0),Nt=Math.max(.5,Math.min(100,It.efficiency)),ie=Math.max(.2,Nt/100*bt),W=new cr(_t,ie,O);W.translate(0,ie/2,0),W.computeBoundingBox(),W.computeBoundingSphere();const Et=T(Nt),pt=new Rf({color:Et,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),xt=new Pn(W,pt);xt.position.set(Mt,0,kt),xt.castShadow=!0,xt.receiveShadow=!0,xt.__barPoint=It;const Dt=new qT(W),Ct=new fa({color:16777215,transparent:!0,opacity:.25}),Yt=new Gp(Dt,Ct);xt.add(Yt),D.add(xt),xt.scale.set(1,.01,1),_.push({mesh:xt,wireframe:Yt,point:It,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ie,material:pt,origColor:Et.clone()})})}),V()}function w(H){if(!e.value)return;const B=e.value.getBoundingClientRect();v.x=(H.clientX-B.left)/B.width*2-1,v.y=-((H.clientY-B.top)/B.height)*2+1,r.value.x=H.clientX-B.left,r.value.y=H.clientY-B.top}function C(){v.x=-999,v.y=-999,r.value.visible=!1,m&&et()}function et(){m&&(m.targetElevation=0,m.wireframe.material.opacity=.25,m.wireframe.material.color.set(16777215),m=null,i.value=null,r.value.visible=!1)}function nt(){if(!c||!l||_.length===0)return;h.setFromCamera(v,c);const H=_.map(X=>X.mesh),B=h.intersectObjects(H,!1);if(B.length>0){const X=B[0].object,ht=_.find(U=>U.mesh===X);ht&&ht!==m&&(m&&et(),m=ht,i.value=ht.point,r.value.visible=!0,ht.targetElevation=1.2,ht.wireframe.material.opacity=.9,ht.wireframe.material.color.set(54015))}else m&&et()}function ot(){f=requestAnimationFrame(ot),d&&d.update(),nt(),_.forEach(H=>{H.currentScaleY+=(H.targetScaleY-H.currentScaleY)*.1,H.mesh.scale.y=H.currentScaleY,H.currentElevation+=(H.targetElevation-H.currentElevation)*.15,H.mesh.position.y=H.baseY+H.currentElevation}),u&&l&&c&&u.render(l,c)}function mt(){if(!e.value||!u||!c)return;const H=e.value.clientWidth,B=e.value.clientHeight;H===0||B===0||(c.aspect=H/B,c.updateProjectionMatrix(),u.setSize(H,B))}return ps(()=>t.points,()=>{E()},{deep:!0}),Kr(()=>{I()}),Zr(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",mt),P&&(P.disconnect(),P=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(H,B)=>(Ht(),Gt("div",gw,[x("div",_w,[x("div",vw,[B[2]||(B[2]=Gr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5e3b1907><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-5e3b1907></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-5e3b1907></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-5e3b1907></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-5e3b1907>3D 空间特征柱状图</span>',2)),x("span",xw,"| X: Vin | Y: "+St(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ht(),Gt("div",yw,[x("span",Mw," 选定点 #"+St(i.value.stepIndex)+": ",1),x("span",null,[B[3]||(B[3]=Ut("Vin: ",-1)),x("b",Sw,St(i.value.vin.toFixed(3))+"V",1)]),x("span",null,[B[4]||(B[4]=Ut("Iin: ",-1)),x("b",bw,St(i.value.iin.toFixed(3))+"A",1)]),x("span",null,[B[5]||(B[5]=Ut("Pin: ",-1)),x("b",Ew,St(i.value.pin.toFixed(3))+"W",1)]),x("span",null,[B[6]||(B[6]=Ut("Vout: ",-1)),x("b",Tw,St(i.value.vout.toFixed(3))+"V",1)]),x("span",null,[B[7]||(B[7]=Ut("Iout: ",-1)),x("b",ww,St(i.value.iout.toFixed(3))+"A",1)]),x("span",null,[B[8]||(B[8]=Ut("Pout: ",-1)),x("b",Aw,St(i.value.pout.toFixed(3))+"W",1)]),x("span",Cw," 效率 η: "+St(i.value.efficiency.toFixed(2))+"% ",1)])):(Ht(),Gt("div",Rw,[...B[9]||(B[9]=[x("span",{style:{color:"#ecc94b"}},"💡",-1),x("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),x("div",Pw,[x("div",Dw,[x("button",{class:"btn",style:Ge({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:B[0]||(B[0]=X=>a("current"))}," Y: 负载电流 (A) ",4),x("button",{class:"btn",style:Ge({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:B[1]||(B[1]=X=>a("power"))}," Y: 输出功率 (W) ",4)]),x("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:N,title:"重置视角"}," 重置视角 ")])]),x("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ht(),Gt("div",{key:0,style:Ge([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[x("div",Lw,[x("span",null,"采样点 #"+St(i.value.stepIndex),1),x("span",Iw,"η = "+St(i.value.efficiency.toFixed(2))+"%",1)]),x("div",Uw,[x("div",null,[B[10]||(B[10]=Ut("Vin: ",-1)),x("span",Nw,St(i.value.vin.toFixed(2))+"V",1)]),x("div",null,[B[11]||(B[11]=Ut("Vout: ",-1)),x("span",Ow,St(i.value.vout.toFixed(2))+"V",1)]),x("div",null,[B[12]||(B[12]=Ut("Iin: ",-1)),x("span",null,St(i.value.iin.toFixed(3))+"A",1)]),x("div",null,[B[13]||(B[13]=Ut("Iout: ",-1)),x("span",null,St(i.value.iout.toFixed(3))+"A",1)]),x("div",null,[B[14]||(B[14]=Ut("Pin: ",-1)),x("span",null,St(i.value.pin.toFixed(2))+"W",1)]),x("div",null,[B[15]||(B[15]=Ut("Pout: ",-1)),x("span",null,St(i.value.pout.toFixed(2))+"W",1)])])],4)):Ie("",!0),B[16]||(B[16]=Gr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-5e3b1907><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-5e3b1907><span data-v-5e3b1907>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-5e3b1907>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-5e3b1907></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-5e3b1907><span data-v-5e3b1907>&lt;70% 低效</span><span data-v-5e3b1907>85%</span><span data-v-5e3b1907>&gt;95% 高效</span></div></div>',1))],512)]))}}),Bw=su(Fw,[["__scopeId","data-v-5e3b1907"]]),zw={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},kw={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},Vw={style:{display:"flex","align-items":"center",gap:"12px"}},Hw={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},Gw={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},Ww={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},Xw={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},$w={style:{color:"#68d391","font-size":"13px"}},Yw={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},jw={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},qw={style:{color:"#4fd1c5","font-size":"12px"}},Kw={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},Zw={style:{color:"#ecc94b"}},Jw={style:{display:"flex","align-items":"center",gap:"8px"}},Qw={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},tA=["value"],eA={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},nA={style:{width:"100%",height:"100%",position:"relative"}},iA={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},sA={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},rA={style:{flex:"1",overflow:"auto",padding:"12px"}},oA={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},aA={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},lA={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},cA={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},uA=["onClick"],dA={key:1,style:{color:"#4a5568"}},fA={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},hA={style:{color:"#63b3ed","font-weight":"bold"}},pA={style:{color:"#ecc94b"}},mA={style:{color:"#63b3ed"}},gA={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},_A=$i({__name:"Result3DView",setup(n){const t=Lv(),e=Dv(),i=ne(null),s=ne([]),r=ne(""),o=ne(null),a=ne("3d");async function l(){const v=t.params.id||"";if(s.value=await lp(),v){const _=await Z0(v);if(_){i.value=_,r.value=_.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(v,_){if(i.value)return i.value.points.find(m=>Math.abs(m.voltageTarget-v)<1e-4&&Math.abs(m.loadTarget-_)<1e-4)}function u(v){return v>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:v>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:v>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&$o(i.value)}function h(){window.opener?window.close():e.push("/")}return ps(()=>t.params.id,()=>{l()}),Kr(()=>{l()}),(v,_)=>{var p,D,P,T,k,V,N,I;const m=Mh("router-link");return Ht(),Gt("div",zw,[x("header",kw,[x("div",Vw,[Ue(m,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:mh(()=>[..._[5]||(_[5]=[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[x("polyline",{points:"15 18 9 12 15 6"})],-1),Ut(" 控制台 ",-1)])]),_:1}),x("div",null,[x("div",Hw,[x("span",null,St(((p=i.value)==null?void 0:p.title)||"测试结果数据查看"),1),_[6]||(_[6]=x("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),x("div",Gw," 测试时间: "+St(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+St((P=(D=i.value)==null?void 0:D.config)==null?void 0:P.voltageMin)+"V~"+St((k=(T=i.value)==null?void 0:T.config)==null?void 0:k.voltageMax)+"V, "+St((N=(V=i.value)==null?void 0:V.config)==null?void 0:N.loadMode),1)])]),(I=i.value)!=null&&I.summary?(Ht(),Gt("div",Ww,[x("div",Xw,[x("span",null,[_[7]||(_[7]=Ut("峰值效率 η_max: ",-1)),x("b",$w,St(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ht(),Gt("span",Yw," (@"+St(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+St(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):Ie("",!0)]),x("div",jw,[x("span",null,[_[8]||(_[8]=Ut("平均效率 η_avg: ",-1)),x("b",qw,St(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),x("div",Kw,[x("span",null,[_[9]||(_[9]=Ut("矩阵测试点: ",-1)),x("b",Zw,St(i.value.points.length)+" 点",1)])])])):Ie("",!0),x("div",Jw,[x("div",Qw,[x("button",{class:"btn",style:Ge({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[0]||(_[0]=E=>a.value="3d")}," 3D 空间柱状图 ",4),x("button",{class:"btn",style:Ge({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:_[1]||(_[1]=E=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?pe((Ht(),Gt("select",{key:0,"onUpdate:modelValue":_[2]||(_[2]=E=>r.value=E),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ht(!0),Gt(Re,null,Fi(s.value,E=>(Ht(),Gt("option",{key:E.id,value:E.id},St(E.title),9,tA))),128))],544)),[[$l,r.value]]):Ie("",!0),i.value?(Ht(),Gt("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[..._[10]||(_[10]=[x("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[x("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),x("polyline",{points:"7 10 12 15 17 10"}),x("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Ut(" 下载 CSV ",-1)])])):Ie("",!0),x("button",{class:"btn",style:{padding:"4px 8px"},onClick:h,title:"关闭页面"}," ✕ ")])]),x("div",eA,[pe(x("div",nA,[i.value&&i.value.points.length>0?(Ht(),iu(Bw,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ht(),Gt("div",iA," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[qu,a.value==="3d"]]),pe(x("div",sA,[_[17]||(_[17]=Gr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),x("div",rA,[i.value?(Ht(),Gt("table",oA,[x("thead",null,[x("tr",aA,[x("th",lA," 负载 ("+St(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ht(!0),Gt(Re,null,Fi(i.value.voltageSteps,E=>(Ht(),Gt("th",{key:E,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},St(E)+"V ",1))),128))])]),x("tbody",null,[(Ht(!0),Gt(Re,null,Fi(i.value.loadSteps,E=>(Ht(),Gt("tr",{key:E,style:{"border-bottom":"1px solid #2d3748"}},[x("td",cA,St(E)+St(i.value.config.loadMode==="CC"?"A":"W"),1),(Ht(!0),Gt(Re,null,Fi(i.value.voltageSteps,w=>(Ht(),Gt("td",{key:w,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:_[3]||(_[3]=C=>C.currentTarget.style.transform="scale(1.04)"),onMouseleave:_[4]||(_[4]=C=>C.currentTarget.style.transform="scale(1.0)"),onClick:C=>o.value=c(w,E)||null},[c(w,E)?(Ht(),Gt("div",{key:0,style:Ge([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(w,E).efficiency)])},St(c(w,E).efficiency.toFixed(2))+"% ",5)):(Ht(),Gt("span",dA,"--"))],40,uA))),128))]))),128))])])):Ie("",!0)]),o.value?(Ht(),Gt("div",fA,[x("span",hA," 选定点 (#"+St(o.value.stepIndex)+"): ",1),x("span",null,"目标: "+St(o.value.voltageTarget)+"V / "+St(o.value.loadTarget)+St(o.value.loadMode),1),x("span",null,[_[11]||(_[11]=Ut("实测Vin: ",-1)),x("b",pA,St(o.value.vin.toFixed(3))+"V",1)]),x("span",null,[_[12]||(_[12]=Ut("实测Iin: ",-1)),x("b",null,St(o.value.iin.toFixed(3))+"A",1)]),x("span",null,[_[13]||(_[13]=Ut("实测Pin: ",-1)),x("b",null,St(o.value.pin.toFixed(3))+"W",1)]),x("span",null,[_[14]||(_[14]=Ut("实测Vout: ",-1)),x("b",mA,St(o.value.vout.toFixed(3))+"V",1)]),x("span",null,[_[15]||(_[15]=Ut("实测Iout: ",-1)),x("b",null,St(o.value.iout.toFixed(3))+"A",1)]),x("span",null,[_[16]||(_[16]=Ut("实测Pout: ",-1)),x("b",null,St(o.value.pout.toFixed(3))+"W",1)]),x("span",gA," 效率 η: "+St(o.value.efficiency.toFixed(2))+"% ",1)])):Ie("",!0)],512),[[qu,a.value==="matrix"]])])])}}}),vA=[{path:"/",name:"Console",component:Hy},{path:"/result/:id",name:"Result3D",component:_A,props:!0}],xA=Pv({history:lv(),routes:vA}),$p=v_(b_);$p.use(xA);$p.mount("#app");
