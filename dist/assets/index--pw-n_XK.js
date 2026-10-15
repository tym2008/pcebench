var Jp=Object.defineProperty;var Qp=(n,t,e)=>t in n?Jp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Qt=(n,t,e)=>Qp(n,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hc(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const ge={},ds=[],qn=()=>{},kf=()=>!1,va=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),xa=n=>n.startsWith("onUpdate:"),He=Object.assign,Gc=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},tm=Object.prototype.hasOwnProperty,oe=(n,t)=>tm.call(n,t),Gt=Array.isArray,Vi=n=>Jr(n)==="[object Map]",Si=n=>Jr(n)==="[object Set]",Pu=n=>Jr(n)==="[object Date]",qt=n=>typeof n=="function",Ae=n=>typeof n=="string",Kn=n=>typeof n=="symbol",fe=n=>n!==null&&typeof n=="object",Vf=n=>(fe(n)||qt(n))&&qt(n.then)&&qt(n.catch),Hf=Object.prototype.toString,Jr=n=>Hf.call(n),em=n=>Jr(n).slice(8,-1),Gf=n=>Jr(n)==="[object Object]",Wc=n=>Ae(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ya=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},nm=/-\w/g,en=ya(n=>n.replace(nm,t=>t.slice(1).toUpperCase())),im=/\B([A-Z])/g,qi=ya(n=>n.replace(im,"-$1").toLowerCase()),ba=ya(n=>n.charAt(0).toUpperCase()+n.slice(1)),ka=ya(n=>n?`on${ba(n)}`:""),jn=(n,t)=>!Object.is(n,t),Go=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Wf=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Ma=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Lu;const Sa=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ye(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=Ae(i)?am(i):ye(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(Ae(n)||fe(n))return n}const sm=/;(?![^(]*\))/g,rm=/:([^]+)/,om=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function am(n){const t={};return n.replace(om,e=>e.startsWith("/*")?"":e).split(sm).forEach(e=>{if(e){const i=e.split(rm);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function fi(n){let t="";if(Ae(n))t=n;else if(Gt(n))for(let e=0;e<n.length;e++){const i=fi(n[e]);i&&(t+=i+" ")}else if(fe(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",cm=Hc(lm);function $f(n){return!!n||n===""}function um(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=Fn(n[s],t[s],e);return i}function Du(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&Fn(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function dm(n,t,e){let i=Vi(n),s=Vi(t);if(i||s||(i=Si(n),s=Si(t),i||s))return i&&s?Du(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!Fn(n[a],t[a],e))return!1}return String(n)===String(t)}function Iu(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function Fn(n,t,e){if(n===t)return!0;let i=Pu(n),s=Pu(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=Kn(n),s=Kn(t),i||s?n===t:(i=Gt(n),s=Gt(t),i||s?i&&s?Iu(n,t,e,um):!1:(i=fe(n),s=fe(t),i||s?!i||!s?!1:Iu(n,t,e,dm):String(n)===String(t))))}function $c(n,t){return n.findIndex(e=>Fn(e,t))}const Xf=n=>!!(n&&n.__v_isRef===!0),xt=n=>Ae(n)?n:n==null?"":Gt(n)||fe(n)&&(n.toString===Hf||!qt(n.toString))?Xf(n)?xt(n.value):JSON.stringify(n,jf,2):String(n),jf=(n,t)=>Xf(t)?jf(n,t.value):Vi(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Va(i,r)+" =>"]=s,e),{})}:Si(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Va(e))}:Kn(t)?Va(t):fe(t)&&!Gt(t)&&!Gf(t)?String(t):t,Va=(n,t="")=>{var e;return Kn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ve;class fm{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ve&&(Ve.active?(this.parent=Ve,this.index=(Ve.scopes||(Ve.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Ve;try{return Ve=this,t()}finally{Ve=e}}}on(){++this._on===1&&(this.prevScope=Ve,Ve=this)}off(){if(this._on>0&&--this._on===0){if(Ve===this)Ve=this.prevScope;else{let t=Ve;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function hm(){return Ve}let xe;const Ha=new WeakSet;class Yf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ve&&(Ve.active?Ve.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ha.has(this)&&(Ha.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Uu(this),Zf(this);const t=xe,e=In;xe=this,In=!0;try{return this.fn()}finally{Jf(this),xe=t,In=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Yc(t);this.deps=this.depsTail=void 0,Uu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ha.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fl(this)&&this.run()}get dirty(){return Fl(this)}}let qf=0,Nr,Or;function Kf(n,t=!1){if(n.flags|=8,t){n.next=Or,Or=n;return}n.next=Nr,Nr=n}function Xc(){qf++}function jc(){if(--qf>0)return;if(Or){let t=Or;for(Or=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Nr;){let t=Nr;for(Nr=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function Zf(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Jf(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Yc(i),pm(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Fl(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function Qf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Hr)||(n.globalVersion=Hr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Fl(n))))return;n.flags|=2;const t=n.dep,e=xe,i=In;xe=n,In=!0;try{Zf(n);const s=n.fn(n._value);(t.version===0||jn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{xe=e,In=i,Jf(n),n.flags&=-3}}function Yc(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Yc(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function pm(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let In=!0;const th=[];function Zn(){th.push(In),In=!1}function Jn(){const n=th.pop();In=n===void 0?!0:n}function Uu(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=xe;xe=void 0;try{t()}finally{xe=e}}}let Hr=0;class mm{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!xe||!In||xe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==xe)e=this.activeLink=new mm(xe,this),xe.deps?(e.prevDep=xe.depsTail,xe.depsTail.nextDep=e,xe.depsTail=e):xe.deps=xe.depsTail=e,eh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=xe.depsTail,e.nextDep=void 0,xe.depsTail.nextDep=e,xe.depsTail=e,xe.deps===e&&(xe.deps=i)}return e}trigger(t){this.version++,Hr++,this.notify(t)}notify(t){Xc();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{jc()}}}function eh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)eh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Bl=new WeakMap,ms=Symbol(""),zl=Symbol(""),Gr=Symbol("");function $e(n,t,e){if(In&&xe){let i=Bl.get(n);i||Bl.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new qc),s.map=i,s.key=e),s.track()}}function pi(n,t,e,i,s,r){const o=Bl.get(n);if(!o){Hr++;return}const a=l=>{l&&l.trigger()};if(Xc(),t==="clear")o.forEach(a);else{const l=Gt(n),c=l&&Wc(e);if(l&&e==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Gr||!Kn(f)&&f>=u)&&a(d)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Gr)),t){case"add":l?c&&a(o.get("length")):(a(o.get(ms)),Vi(n)&&a(o.get(zl)));break;case"delete":l||(a(o.get(ms)),Vi(n)&&a(o.get(zl)));break;case"set":Vi(n)&&a(o.get(ms));break}}jc()}function Es(n){const t=ue(n);return t===n||($e(t,"iterate",Gr),bn(n))?t:Qn(n)?Hi(n)?t.map(e=>$i(Sn(e))):t.map($i):t.map(Sn)}function Ea(n){return $e(n=ue(n),"iterate",Gr),n}function Gn(n,t){return Qn(n)?$i(Hi(n)?Sn(t):t):Sn(t)}const gm={__proto__:null,[Symbol.iterator](){return Ga(this,Symbol.iterator,n=>Gn(this,n))},concat(...n){return Es(this).concat(...n.map(t=>Gt(t)?Es(t):t))},entries(){return Ga(this,"entries",n=>(n[1]=Gn(this,n[1]),n))},every(n,t){return ii(this,"every",n,t,void 0,arguments)},filter(n,t){return ii(this,"filter",n,t,e=>e.map(i=>Gn(this,i)),arguments)},find(n,t){return ii(this,"find",n,t,e=>Gn(this,e),arguments)},findIndex(n,t){return ii(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return ii(this,"findLast",n,t,e=>Gn(this,e),arguments)},findLastIndex(n,t){return ii(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return ii(this,"forEach",n,t,void 0,arguments)},includes(...n){return Wa(this,"includes",n)},indexOf(...n){return Wa(this,"indexOf",n)},join(n){return Es(this).join(n)},lastIndexOf(...n){return Wa(this,"lastIndexOf",n)},map(n,t){return ii(this,"map",n,t,void 0,arguments)},pop(){return gr(this,"pop")},push(...n){return gr(this,"push",n)},reduce(n,...t){return Ou(this,"reduce",n,t)},reduceRight(n,...t){return Ou(this,"reduceRight",n,t)},shift(){return gr(this,"shift")},some(n,t){return ii(this,"some",n,t,void 0,arguments)},splice(...n){return gr(this,"splice",n)},toReversed(){return Es(this).toReversed()},toSorted(n){return Es(this).toSorted(n)},toSpliced(...n){return Es(this).toSpliced(...n)},unshift(...n){return gr(this,"unshift",n)},values(){return Ga(this,"values",n=>Gn(this,n))}};function Ga(n,t,e){const i=Ea(n),s=i[t],r=s.call(i);if(i!==n&&!bn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>Nu(r.next(),e),s!==nh[t]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>Nu(r._next(),e)}return r}function Nu(n,t){return n.done||(n.value=t(n.value)),n}const nh=Array.prototype;function ii(n,t,e,i,s,r){const o=Ea(n),a=o!==n&&!bn(n),l=o[t];if(l!==nh[t]){const d=l.apply(n,r);return a?Sn(d):d}let c=e;o!==n&&(a?c=function(d,f){return e.call(this,Gn(n,d),f,n)}:e.length>2&&(c=function(d,f){return e.call(this,d,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Ou(n,t,e,i){const s=Ea(n),r=s!==n&&!bn(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Gn(n,c)),e.call(this,c,Gn(n,u),d,n)}):e.length>3&&(o=function(c,u,d){return e.call(this,c,u,d,n)}));const l=s[t](o,...i);return a?Gn(n,l):l}function Wa(n,t,e){const i=ue(n);$e(i,"iterate",Gr);const s=i[t](...e);return(s===-1||s===!1)&&Jc(e[0])?(e[0]=ue(e[0]),i[t](...e)):s}function gr(n,t,e=[]){Zn(),Xc();const i=ue(n)[t].apply(n,e);return jc(),Jn(),i}const _m=Hc("__proto__,__v_isRef,__isVue"),ih=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Kn));function vm(n){Kn(n)||(n=String(n));const t=ue(this);return $e(t,"has",n),t.hasOwnProperty(n)}class sh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Cm:lh:r?ah:oh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Gt(t);if(!s){let l;if(o&&(l=gm[e]))return l;if(e==="hasOwnProperty")return vm}const a=Reflect.get(t,e,je(t)?t:i);if((Kn(e)?ih.has(e):_m(e))||(s||$e(t,"get",e),r))return a;if(je(a)){const l=o&&Wc(e)?a:a.value;return s&&fe(l)?Vl(l):l}return fe(a)?s?Vl(a):yn(a):a}}class rh extends sh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Gt(t)&&Wc(e);if(!this._isShallow){const c=Qn(r);if(!bn(i)&&!Qn(i)&&(r=ue(r),i=ue(i)),!o&&je(r)&&!je(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:oe(t,e),l=Reflect.set(t,e,i,je(t)?t:s);return t===ue(s)&&l&&(a?jn(i,r)&&pi(t,"set",e,i):pi(t,"add",e,i)),l}deleteProperty(t,e){const i=oe(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&pi(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!Kn(e)||!ih.has(e))&&$e(t,"has",e),i}ownKeys(t){return $e(t,"iterate",Gt(t)?"length":ms),Reflect.ownKeys(t)}}class xm extends sh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ym=new rh,bm=new xm,Mm=new rh(!0);const kl=n=>n,oo=n=>Reflect.getPrototypeOf(n);function Sm(n,t,e){return function(...i){const s=this.__v_raw,r=ue(s),o=Vi(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?kl:t?$i:Sn;return!t&&$e(r,"iterate",l?zl:ms),He(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}}})}}function ao(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Em(n,t){const e={get(s){const r=this.__v_raw,o=ue(r),a=ue(s);n||(jn(s,a)&&$e(o,"get",s),$e(o,"get",a));const{has:l}=oo(o),c=t?kl:n?$i:Sn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&$e(ue(s),"iterate",ms),s.size},has(s){const r=this.__v_raw,o=ue(r),a=ue(s);return n||(jn(s,a)&&$e(o,"has",s),$e(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ue(a),c=t?kl:n?$i:Sn;return!n&&$e(l,"iterate",ms),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return He(e,n?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(s){const r=ue(this),o=oo(r),a=ue(s),l=!t&&!bn(s)&&!Qn(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),pi(r,"add",l,l)),this},set(s,r){!t&&!bn(r)&&!Qn(r)&&(r=ue(r));const o=ue(this),{has:a,get:l}=oo(o);let c=a.call(o,s);c||(s=ue(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?jn(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=ue(this),{has:o,get:a}=oo(r);let l=o.call(r,s);l||(s=ue(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=ue(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Sm(s,n,t)}),e}function Kc(n,t){const e=Em(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?t:s==="__v_raw"?i:Reflect.get(oe(e,s)&&s in i?e:i,s,r)}const wm={get:Kc(!1,!1)},Tm={get:Kc(!1,!0)},Am={get:Kc(!0,!1)};const oh=new WeakMap,ah=new WeakMap,lh=new WeakMap,Cm=new WeakMap;function Rm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function yn(n){return Qn(n)?n:Zc(n,!1,ym,wm,oh)}function ch(n){return Zc(n,!1,Mm,Tm,ah)}function Vl(n){return Zc(n,!0,bm,Am,lh)}function Zc(n,t,e,i,s){if(!fe(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=Rm(em(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Hi(n){return Qn(n)?Hi(n.__v_raw):!!(n&&n.__v_isReactive)}function Qn(n){return!!(n&&n.__v_isReadonly)}function bn(n){return!!(n&&n.__v_isShallow)}function Jc(n){return n?!!n.__v_raw:!1}function ue(n){const t=n&&n.__v_raw;return t?ue(t):n}function Pm(n){return!oe(n,"__v_skip")&&Object.isExtensible(n)&&Wf(n,"__v_skip",!0),n}const Sn=n=>fe(n)?yn(n):n,$i=n=>fe(n)?Vl(n):n;function je(n){return n?n.__v_isRef===!0:!1}function Yt(n){return uh(n,!1)}function Lm(n){return uh(n,!0)}function uh(n,t){return je(n)?n:new Dm(n,t)}class Dm{constructor(t,e){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:ue(t),this._value=e?t:Sn(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||bn(t)||Qn(t);t=i?t:ue(t),jn(t,e)&&(this._rawValue=t,this._value=i?t:Sn(t),this.dep.trigger())}}function de(n){return je(n)?n.value:n}const Im={get:(n,t,e)=>t==="__v_raw"?n:de(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return je(s)&&!je(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function dh(n){return Hi(n)?n:new Proxy(n,Im)}class Um{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&xe!==this)return Kf(this,!0),!0}get value(){const t=this.dep.track();return Qf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Nm(n,t,e=!1){let i,s;return qt(n)?i=n:(i=n.get,s=n.set),new Um(i,s,e)}const lo={},ta=new WeakMap;let rs;function Om(n,t=!1,e=rs){if(e){let i=ta.get(e);i||ta.set(e,i=[]),i.push(n)}}function Fm(n,t,e=ge){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=w=>s?w:bn(w)||s===!1||s===0?mi(w,1):mi(w);let u,d,f,p,x=!1,v=!1;if(je(n)?(d=()=>n.value,x=bn(n)):Hi(n)?(d=()=>c(n),x=!0):Gt(n)?(v=!0,x=n.some(w=>Hi(w)||bn(w)),d=()=>n.map(w=>{if(je(w))return w.value;if(Hi(w))return c(w);if(qt(w))return l?l(w,2):w()})):qt(n)?t?d=l?()=>l(n,2):n:d=()=>{if(f){Zn();try{f()}finally{Jn()}}const w=rs;rs=u;try{return l?l(n,3,[p]):n(p)}finally{rs=w}}:d=qn,t&&s){const w=d,X=s===!0?1/0:s;d=()=>mi(w(),X)}const m=hm(),h=()=>{u.stop(),m&&m.active&&Gc(m.effects,u)};if(r&&t){const w=t;t=(...X)=>{try{return w(...X)}finally{h()}}}let I=v?new Array(n.length).fill(lo):lo;const D=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(t){const X=u.run();if(w||s||x||(v?X.some((O,N)=>jn(O,I[N])):jn(X,I))){const O=rs;Zn();try{f&&f(),rs=u;const N=[X,I===lo?void 0:v&&I[0]===lo?[]:I,p];I=X,l?l(t,3,N):t(...N)}finally{rs=O,Jn()}}}else u.run()};return a&&a(D),u=new Yf(d),u.scheduler=o?()=>o(D,!1):D,p=w=>Om(w,!1,u),f=u.onStop=()=>{const w=ta.get(u);if(w){if(l)l(w,4);else for(const X of w)X();ta.delete(u)}},t?i?D(!0):I=u.run():o?o(D.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function mi(n,t=1/0,e){if(t<=0||!fe(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,je(n))mi(n.value,t,e);else if(Gt(n))for(let i=0;i<n.length;i++)mi(n[i],t,e);else if(Si(n)||Vi(n))n.forEach(i=>{mi(i,t,e)});else if(Gf(n)){for(const i in n)mi(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mi(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qr(n,t,e,i){try{return i?n(...i):n()}catch(s){wa(s,t,e)}}function Bn(n,t,e,i){if(qt(n)){const s=Qr(n,t,e,i);return s&&Vf(s)&&s.catch(r=>{wa(r,t,e)}),s}if(Gt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Bn(n[r],t,e,i));return s}}function wa(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,l,c)===!1)return}a=a.parent}if(r){Zn(),Qr(r,null,10,[n,l,c]),Jn();return}}Bm(n,e,s,i,o)}function Bm(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Je=[];let Rn=-1;const Wn=[];let Oi=null,Gs=0;const fh=Promise.resolve();let ea=null;function Qc(n){const t=ea||fh;return n?t.then(this?n.bind(this):n):t}function zm(n){let t=Rn+1,e=Je.length;for(;t<e;){const i=t+e>>>1,s=Je[i],r=Wr(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function tu(n){if(!(n.flags&1)){const t=Wr(n),e=Je[Je.length-1];!e||!(n.flags&2)&&t>=Wr(e)?Je.push(n):Je.splice(zm(t),0,n),n.flags|=1,hh()}}function hh(){ea||(ea=fh.then(gh))}function km(n){if(!Gt(n))Oi&&n.id===-1?Oi.splice(Gs+1,0,n):n.flags&1||(Wn.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)Wn.push(n[t]);hh()}function ph(n,t,e,i=Rn+1){for(;i<Je.length;i++){const s=Je[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||t!==void 0&&!(s.id>=t))continue;Je.splice(i,1),i=n?i-1:Rn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function mh(n,t,e=0){if(Wn.length){let i=Wn,s=0;if(t){i=[];for(let o=0;o<Wn.length;o++){const a=Wn[o];(a.i!==void 0?!a.i||a.i.uid<e:t.has(a))?Wn[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Wr(o)-Wr(a));if(Wn.length=s,Oi){for(let o=0;o<r.length;o++)Oi.push(r[o]);return}for(Oi=r,Gs=0;Gs<Oi.length;Gs++){const o=Oi[Gs];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Oi=null,Gs=0}}let $a=!1;function Vm(n,t){if($a){n();return}const e=t===void 0?void 0:new Set(Wn);n(),$a=!0;try{ph(void 0,t),mh(void 0,e,t)}finally{$a=!1}}const Wr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function gh(n){try{for(Rn=0;Rn<Je.length;Rn++){const t=Je[Rn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Qr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Rn<Je.length;Rn++){const t=Je[Rn];t&&(t.flags&=-2)}Rn=-1,Je.length=0,mh(),ea=null,(Je.length||Wn.length)&&gh()}}let fn=null,_h=null;function na(n){const t=fn;return fn=n,_h=n&&n.type.__scopeId||null,t}function eu(n,t=fn,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&oa(-1);const r=na(t),o=_s.length;let a;try{a=n(...s)}finally{for(let l=_s.length;l>o;l--)kh();na(r),i._d&&oa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ee(n,t){if(fn===null)return n;const e=Pa(fn),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=ge]=t[s];r&&(qt(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Zi(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Zn(),Bn(l,e,8,[n.el,a,n,t]),Jn())}}function Wo(n,t){if(Xe){let e=Xe.provides;const i=Xe.parent&&Xe.parent.provides;i===e&&(e=Xe.provides=Object.create(i)),e[n]=t}}function Un(n,t,e=!1){const i=zg();if(i||Ys){let s=Ys?Ys._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&qt(t)?t.call(i&&i.proxy):t}}const Hm=Symbol.for("v-scx"),Gm=()=>Un(Hm);function gs(n,t,e){return vh(n,t,e)}function vh(n,t,e=ge){const{immediate:i,deep:s,flush:r,once:o}=e,a=He({},e),l=t&&i||!t&&r!=="post";let c;if(qr){if(r==="sync"){const p=Gm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=qn,p.resume=qn,p.pause=qn,p}}const u=Xe;a.call=(p,x,v)=>Bn(p,u,x,v);let d=!1;r==="post"?a.scheduler=p=>{p.i=u,on(p,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(p,x)=>{x?p():tu(p)}),a.augmentJob=p=>{t&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=Fm(n,t,a);return qr&&(c?c.push(f):l&&f()),f}function Wm(n,t,e){const i=this.proxy,s=Ae(n)?n.includes(".")?xh(i,n):()=>i[n]:n.bind(i,i);let r;qt(t)?r=t:(r=t.handler,e=t);const o=to(this),a=vh(s,r.bind(i),e);return o(),a}function xh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const $m=Symbol("_vte"),Ta=n=>n.__isTeleport,Xa=Symbol("_leaveCb");function Xm(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==zn){t=e;break}}return t}function yh(n){if(!nu(n))return Ta(n.type)&&n.children?Xm(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&qt(e.default))return e.default()}}function ia(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;ia(Ta(e.type)&&yh(e)||e,t)}else if(n.shapeFlag&128)n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback);else if(n.transition=t,n.type===Re&&Gt(n.children)){const e=Ah(n.children,!1);e&&ia(e,t)}}function Hl(n){if(n.component)return Hl(n.component.subTree);if(n.type===Re){const t=Gt(n.children)&&Ah(n.children,!1);return t?Hl(t):void 0}if(n.type!==zn)return n}function wi(n,t){return qt(n)?He({name:n.name},t,{setup:n}):n}function bh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Fu(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const sa=new WeakMap;function Fr(n,t,e,i,s=!1){if(Gt(n)){n.forEach((v,m)=>Fr(v,t&&(Gt(t)?t[m]:t),e,i,s));return}if(Br(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Pa(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===ge?a.refs={}:a.refs,d=a.setupState,f=ue(d),p=d===ge?kf:v=>Fu(u,v)?!1:oe(f,v),x=(v,m)=>!(m&&Fu(u,m));if(c!=null&&c!==l){if(Bu(t),Ae(c))u[c]=null,p(c)&&(d[c]=null);else if(je(c)){const v=t;x(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(qt(l))Qr(l,a,12,[o,u]);else{const v=Ae(l),m=je(l);if(v||m){const h=()=>{if(n.f){const I=v?p(l)?d[l]:u[l]:x()||!n.k?l.value:u[n.k];if(s)Gt(I)&&Gc(I,r);else if(Gt(I))I.includes(r)||I.push(r);else if(v)u[l]=[r],p(l)&&(d[l]=u[l]);else{const D=[r];x(l,n.k)&&(l.value=D),n.k&&(u[n.k]=D)}}else v?(u[l]=o,p(l)&&(d[l]=o)):m&&(x(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const I=()=>{h(),sa.delete(n)};I.id=-1,sa.set(n,I),on(I,e)}else Bu(n),h()}}}function Bu(n){const t=sa.get(n);t&&(t.flags|=8,sa.delete(n))}Sa().requestIdleCallback;Sa().cancelIdleCallback;const Br=n=>!!n.type.__asyncLoader,nu=n=>n.type.__isKeepAlive;function jm(n,t){Mh(n,"a",t)}function Ym(n,t){Mh(n,"da",t)}function Mh(n,t,e=Xe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Aa(t,i,e),e){let s=e.parent;for(;s&&s.parent;)nu(s.parent.vnode)&&qm(i,t,e,s),s=s.parent}}function qm(n,t,e,i){const s=Aa(t,n,i,!0);ur(()=>{Gc(i[t],s)},e)}function Aa(n,t,e=Xe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{Zn();const a=to(e),l=Bn(t,e,n,o);return a(),Jn(),l});return i?s.unshift(r):s.push(r),r}}const Ti=n=>(t,e=Xe)=>{(!qr||n==="sp")&&Aa(n,(...i)=>t(...i),e)},Km=Ti("bm"),cr=Ti("m"),Zm=Ti("bu"),Jm=Ti("u"),Qm=Ti("bum"),ur=Ti("um"),tg=Ti("sp"),eg=Ti("rtg"),ng=Ti("rtc");function ig(n,t=Xe){Aa("ec",n,t)}const sg="components";function iu(n,t){return og(sg,n,!0,t)||n}const rg=Symbol.for("v-ndc");function og(n,t,e=!0,i=!1){const s=fn||Xe;if(s){const r=s.type;{const a=Wg(r,!1);if(a&&(a===t||a===en(t)||a===ba(en(t))))return r}const o=zu(s[n]||r[n],t)||zu(s.appContext[n],t);return!o&&i?r:o}}function zu(n,t){return n&&(n[t]||n[en(t)]||n[ba(en(t))])}function vi(n,t,e,i){let s;const r=e,o=Gt(n);if(o||Ae(n)){const a=o&&Hi(n);let l=!1,c=!1;a&&(l=!bn(n),c=Qn(n),n=Ea(n)),s=new Array(n.length);for(let u=0,d=n.length;u<d;u++)s[u]=t(l?c?$i(Sn(n[u])):Sn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(fe(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Gl=n=>n?Wh(n)?Pa(n):Gl(n.parent):null,zr=He(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gl(n.parent),$root:n=>Gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Eh(n),$forceUpdate:n=>n.f||(n.f=()=>{tu(n.update)}),$nextTick:n=>n.n||(n.n=Qc.bind(n.proxy)),$watch:n=>Wm.bind(n)}),ja=(n,t)=>n!==ge&&!n.__isScriptSetup&&oe(n,t),ag={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(ja(i,t))return o[t]=1,i[t];if(s!==ge&&oe(s,t))return o[t]=2,s[t];if(oe(r,t))return o[t]=3,r[t];if(e!==ge&&oe(e,t))return o[t]=4,e[t];Wl&&(o[t]=0)}}const c=zr[t];let u,d;if(c)return t==="$attrs"&&$e(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==ge&&oe(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,oe(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return ja(s,t)?(s[t]=e,!0):i!==ge&&oe(i,t)?(i[t]=e,!0):oe(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==ge&&a[0]!=="$"&&oe(n,a)||ja(t,a)||oe(r,a)||oe(i,a)||oe(zr,a)||oe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:oe(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function ku(n){return Gt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let Wl=!0;function lg(n){const t=Eh(n),e=n.proxy,i=n.ctx;Wl=!1,t.beforeCreate&&Vu(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:x,activated:v,deactivated:m,beforeDestroy:h,beforeUnmount:I,destroyed:D,unmounted:w,render:X,renderTracked:O,renderTriggered:N,errorCaptured:U,serverPrefetch:E,expose:T,inheritAttrs:A,components:et,directives:nt,filters:rt}=t;if(c&&cg(c,i,null),o)for(const z in o){const $=o[z];qt($)&&(i[z]=$.bind(e))}if(s){const z=s.call(e,e);fe(z)&&(n.data=yn(z))}if(Wl=!0,r)for(const z in r){const $=r[z],ht=qt($)?$.bind(e,e):qt($.get)?$.get.bind(e,e):qn,R=!qt($)&&qt($.set)?$.set.bind(e):qn,b=Be({get:ht,set:R});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>b.value,set:ct=>b.value=ct})}if(a)for(const z in a)Sh(a[z],i,e,z);if(l){const z=qt(l)?l.call(e):l;Reflect.ownKeys(z).forEach($=>{Wo($,z[$])})}u&&Vu(u,n,"c");function H(z,$){Gt($)?$.forEach(ht=>z(ht.bind(e))):$&&z($.bind(e))}if(H(Km,d),H(cr,f),H(Zm,p),H(Jm,x),H(jm,v),H(Ym,m),H(ig,U),H(ng,O),H(eg,N),H(Qm,I),H(ur,w),H(tg,E),Gt(T))if(T.length){const z=n.exposed||(n.exposed={});T.forEach($=>{Object.defineProperty(z,$,{get:()=>e[$],set:ht=>e[$]=ht,enumerable:!0})})}else n.exposed||(n.exposed={});X&&n.render===qn&&(n.render=X),A!=null&&(n.inheritAttrs=A),et&&(n.components=et),nt&&(n.directives=nt),E&&bh(n)}function cg(n,t,e=qn){Gt(n)&&(n=$l(n));for(const i in n){const s=n[i];let r;fe(s)?"default"in s?r=Un(s.from||i,s.default,!0):r=Un(s.from||i):r=Un(s),je(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Vu(n,t,e){Bn(Gt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Sh(n,t,e,i){let s=i.includes(".")?xh(e,i):()=>e[i];if(Ae(n)){const r=t[n];qt(r)&&gs(s,r)}else if(qt(n))gs(s,n.bind(e));else if(fe(n))if(Gt(n))n.forEach(r=>Sh(r,t,e,i));else{const r=qt(n.handler)?n.handler.bind(e):t[n.handler];qt(r)&&gs(s,r,n)}}function Eh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>ra(l,c,o,!0)),ra(l,t,o)),fe(t)&&r.set(t,l),l}function ra(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&ra(n,r,e,!0),s&&s.forEach(o=>ra(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=ug[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const ug={data:Hu,props:Gu,emits:Gu,methods:Rr,computed:Rr,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Rr,directives:Rr,watch:fg,provide:Hu,inject:dg};function Hu(n,t){return t?n?function(){return He(qt(n)?n.call(this,this):n,qt(t)?t.call(this,this):t)}:t:n}function dg(n,t){return Rr($l(n),$l(t))}function $l(n){if(Gt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function qe(n,t){return n?[...new Set([].concat(n,t))]:t}function Rr(n,t){return n?He(Object.create(null),n,t):t}function Gu(n,t){return n?Gt(n)&&Gt(t)?[...new Set([...n,...t])]:He(Object.create(null),ku(n),ku(t??{})):t}function fg(n,t){if(!n)return t;if(!t)return n;const e=He(Object.create(null),n);for(const i in t)e[i]=qe(n[i],t[i]);return e}function wh(){return{app:null,config:{isNativeTag:kf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hg=0;function pg(n,t){return function(i,s=null){qt(i)||(i=He({},i)),s!=null&&!fe(s)&&(s=null);const r=wh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:hg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xg,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&qt(u.install)?(o.add(u),u.install(c,...d)):qt(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Ie(i,s);return p.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Pa(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Bn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Ys;Ys=c;try{return u()}finally{Ys=d}}};return c}}let Ys=null;const mg=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${en(t)}Modifiers`]||n[`${qi(t)}Modifiers`];function gg(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||ge;let s=e;const r=t.startsWith("update:"),o=r&&mg(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>Ae(u)?u.trim():u)),o.number&&(s=s.map(Ma)));let a,l=i[a=ka(t)]||i[a=ka(en(t))];!l&&r&&(l=i[a=ka(qi(t))]),l&&Bn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Bn(c,n,6,s)}}const _g=new WeakMap;function Th(n,t,e=!1){const i=e?_g:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!qt(n)){const l=c=>{const u=Th(c,t,!0);u&&(a=!0,He(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(fe(n)&&i.set(n,null),null):(Gt(r)?r.forEach(l=>o[l]=null):He(o,r),fe(n)&&i.set(n,o),o)}function Ca(n,t){return!n||!va(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),oe(n,t[0].toLowerCase()+t.slice(1))||oe(n,qi(t))||oe(n,t))}function Wu(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:x,inheritAttrs:v}=n,m=na(n);let h,I;try{if(e.shapeFlag&4){const w=s||i,X=w;h=$n(c.call(X,w,u,d,p,f,x)),I=a}else{const w=t;h=$n(w.length>1?w(d,{attrs:a,slots:o,emit:l}):w(d,null)),I=t.props?a:vg(a)}}catch(w){_s.length=0,wa(w,n,1),h=Ie(zn)}let D=h;if(I&&v!==!1){const w=Object.keys(I),{shapeFlag:X}=D;w.length&&X&7&&(r&&w.some(xa)&&(I=xg(I,r)),D=Qs(D,I,!1,!0))}if(e.dirs&&(D=Qs(D,null,!1,!0),D.dirs=D.dirs?D.dirs.concat(e.dirs):e.dirs),e.transition){const w=Ta(D.type)&&yh(D)||D;ia(w,e.transition)}return h=D,na(m),h}function Ah(n,t=!0){let e;for(let i=0;i<n.length;i++){const s=n[i];if(Xr(s)){if(s.type!==zn||s.children==="v-if"){if(e)return;e=s}}else return}return e}const vg=n=>{let t;for(const e in n)(e==="class"||e==="style"||va(e))&&((t||(t={}))[e]=n[e]);return t},xg=(n,t)=>{const e={};for(const i in n)(!xa(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function yg(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(Ch(o,i,f)&&!Ca(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!oe(n,r)||Ch(t,n,r)&&!Ca(e,r))return!0}return!1}function Ch(n,t,e){const i=n[e],s=t[e];return e==="style"&&fe(i)&&fe(s)?!Fn(i,s):i!==s}function bg({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Rh={},Ph=()=>Object.create(Rh),Lh=n=>Object.getPrototypeOf(n)===Rh;function Mg(n,t,e,i=!1){const s={},r=Ph();n.propsDefaults=Object.create(null),Dh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:ch(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Sg(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=ue(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(Ca(n.emitsOptions,f))continue;const p=t[f];if(l)if(oe(r,f))p!==r[f]&&(r[f]=p,c=!0);else{const x=en(f);s[x]=Xl(l,a,x,p,n,!1)}else p!==r[f]&&(r[f]=p,c=!0)}}}else{Dh(n,t,s,r)&&(c=!0);let u;for(const d in a)(!t||!oe(t,d)&&((u=qi(d))===d||!oe(t,u)))&&(l?e&&(e[d]!==void 0||e[u]!==void 0)&&(s[d]=Xl(l,a,d,void 0,n,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!oe(t,d))&&(delete r[d],c=!0)}c&&pi(n.attrs,"set","")}function Dh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Ur(l))continue;const c=t[l];let u;s&&oe(s,u=en(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Ca(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ue(e),c=a||ge;for(let u=0;u<r.length;u++){const d=r[u];e[d]=Xl(s,l,d,c[d],n,!oe(c,d))}}return o}function Xl(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qt(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=to(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===qi(e))&&(i=!0))}return i}const Eg=new WeakMap;function Ih(n,t,e=!1){const i=e?Eg:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!qt(n)){const u=d=>{l=!0;const[f,p]=Ih(d,t,!0);He(o,f),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return fe(n)&&i.set(n,ds),ds;if(Gt(r))for(let u=0;u<r.length;u++){const d=en(r[u]);Xu(d)&&(o[d]=ge)}else if(r)for(const u in r){const d=en(u);if(Xu(d)){const f=r[u],p=o[d]=Gt(f)||qt(f)?{type:f}:He({},f),x=p.type;let v=!1,m=!0;if(Gt(x))for(let h=0;h<x.length;++h){const I=x[h],D=qt(I)&&I.name;if(D==="Boolean"){v=!0;break}else D==="String"&&(m=!1)}else v=qt(x)&&x.name==="Boolean";p[0]=v,p[1]=m,(v||oe(p,"default"))&&a.push(d)}}const c=[o,a];return fe(n)&&i.set(n,c),c}function Xu(n){return n[0]!=="$"&&!Ur(n)}const su=n=>n==="_"||n==="_ctx"||n==="$stable",ru=n=>Gt(n)?n.map($n):[$n(n)],wg=(n,t,e)=>{if(t._n)return t;const i=eu((...s)=>ru(t(...s)),e);return i._c=!1,i},Uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(su(s))continue;const r=n[s];if(qt(r))t[s]=wg(s,r,i);else if(r!=null){const o=ru(r);t[s]=()=>o}}},Nh=(n,t)=>{const e=ru(t);n.slots.default=()=>e},Oh=(n,t,e)=>{for(const i in t)(e||!su(i))&&(n[i]=t[i])},Tg=(n,t,e)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const s=t._;s?(Oh(i,t,e),e&&Wf(i,"_",s,!0)):Uh(t,i)}else t&&Nh(n,t)},Ag=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=ge;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Oh(s,t,e):(r=!t.$stable,Uh(t,s)),o=t}else t&&(Nh(n,t),o={default:1});if(r)for(const a in s)!su(a)&&o[a]==null&&delete s[a]},on=Dg;function Cg(n){return Rg(n)}function Rg(n,t){const e=Sa();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=qn,insertStaticContent:x}=n,v=(M,L,k,S=null,tt=null,Q=null,ot=void 0,at=null,_t=!!L.dynamicChildren)=>{if(M===L)return;M&&!_r(M,L)&&(S=B(M),ct(M,tt,Q,!0),M=null),L.patchFlag===-2&&(_t=!1,L.dynamicChildren=null),L.dynamicChildren&&M&&M.dynamicChildren&&M.dynamicChildren.hasOnce&&(L.dynamicChildren===ds&&(L.dynamicChildren=[]),L.dynamicChildren.hasOnce=!0);const{type:q,ref:C,shapeFlag:_}=L;switch(q){case Ra:m(M,L,k,S);break;case zn:h(M,L,k,S);break;case $o:M==null&&I(L,k,S,ot);break;case Re:et(M,L,k,S,tt,Q,ot,at,_t);break;default:_&1?X(M,L,k,S,tt,Q,ot,at,_t):_&6?nt(M,L,k,S,tt,Q,ot,at,_t):(_&64||_&128)&&q.process(M,L,k,S,tt,Q,ot,at,_t,j)}C!=null&&tt?Fr(C,M&&M.ref,Q,L||M,!L):C==null&&M&&M.ref!=null&&Fr(M.ref,null,Q,M,!0)},m=(M,L,k,S)=>{if(M==null)i(L.el=a(L.children),k,S);else{const tt=L.el=M.el;L.children!==M.children&&c(tt,L.children)}},h=(M,L,k,S)=>{M==null?i(L.el=l(L.children||""),k,S):L.el=M.el},I=(M,L,k,S)=>{[M.el,M.anchor]=x(M.children,L,k,S,M.el,M.anchor)},D=({el:M,anchor:L},k,S)=>{let tt;for(;M&&M!==L;)tt=f(M),i(M,k,S),M=tt;i(L,k,S)},w=({el:M,anchor:L})=>{let k;for(;M&&M!==L;)k=f(M),s(M),M=k;s(L)},X=(M,L,k,S,tt,Q,ot,at,_t)=>{if(L.type==="svg"?ot="svg":L.type==="math"&&(ot="mathml"),M==null)O(L,k,S,tt,Q,ot,at,_t);else{const q=M.el&&M.el._isVueCE?M.el:null;try{q&&q._beginPatch(),E(M,L,tt,Q,ot,at,_t)}finally{q&&q._endPatch()}}},O=(M,L,k,S,tt,Q,ot,at)=>{let _t,q;const{props:C,shapeFlag:_,transition:y,dirs:F}=M;if(_t=M.el=o(M.type,Q,C&&C.is,C),_&8?u(_t,M.children):_&16&&U(M.children,_t,null,S,tt,Ya(M,Q),ot,at),F&&Zi(M,null,S,"created"),N(_t,M,M.scopeId,ot,S),C){for(const V in C)V!=="value"&&!Ur(V)&&r(_t,V,null,C[V],Q,S);"value"in C&&r(_t,"value",null,C.value,Q),(q=C.onVnodeBeforeMount)&&Hn(q,S,M)}F&&Zi(M,null,S,"beforeMount");const it=Pg(tt,y);it&&y.beforeEnter(_t),i(_t,L,k),((q=C&&C.onVnodeMounted)||it||F)&&on(()=>{try{q&&Hn(q,S,M),it&&y.enter(_t),F&&Zi(M,null,S,"mounted")}finally{}},tt)},N=(M,L,k,S,tt)=>{if(k&&p(M,k),S)for(let Q=0;Q<S.length;Q++)p(M,S[Q]);if(tt){let Q=tt.subTree;if(L===Q||zh(Q.type)&&(Q.ssContent===L||Q.ssFallback===L)){const ot=tt.vnode;N(M,ot,ot.scopeId,ot.slotScopeIds,tt.parent)}}},U=(M,L,k,S,tt,Q,ot,at,_t=0)=>{for(let q=_t;q<M.length;q++){const C=M[q]=at?hi(M[q]):$n(M[q]);v(null,C,L,k,S,tt,Q,ot,at)}},E=(M,L,k,S,tt,Q,ot)=>{const at=L.el=M.el;let{patchFlag:_t,dynamicChildren:q,dirs:C}=L;_t|=M.patchFlag&16;const _=M.props||ge,y=L.props||ge;let F;if(k&&Ji(k,!1),(F=y.onVnodeBeforeUpdate)&&Hn(F,k,L,M),C&&Zi(L,M,k,"beforeUpdate"),k&&Ji(k,!0),q&&(!M.dynamicChildren||M.dynamicChildren.length!==q.length)&&(_t=0,ot=!1,q=null),(_.innerHTML&&y.innerHTML==null||_.textContent&&y.textContent==null)&&u(at,""),q?T(M.dynamicChildren,q,at,k,S,Ya(L,tt),Q):ot||$(M,L,at,null,k,S,Ya(L,tt),Q,!1),_t>0){if(_t&16)A(at,_,y,k,tt);else if(_t&2&&_.class!==y.class&&r(at,"class",null,y.class,tt),_t&4&&r(at,"style",_.style,y.style,tt),_t&8){const it=L.dynamicProps;for(let V=0;V<it.length;V++){const Et=it[V],St=_[Et],vt=y[Et];(vt!==St||Et==="value")&&r(at,Et,St,vt,tt,k)}}_t&1&&M.children!==L.children&&u(at,L.children)}else!ot&&q==null&&A(at,_,y,k,tt);((F=y.onVnodeUpdated)||C)&&on(()=>{F&&Hn(F,k,L,M),C&&Zi(L,M,k,"updated")},S)},T=(M,L,k,S,tt,Q,ot)=>{for(let at=0;at<L.length;at++){const _t=M[at],q=L[at],C=_t.el||jl(_t),_=C&&(_t.type===Re||!_r(_t,q)||_t.shapeFlag&198)?d(C):k;v(_t,q,_,null,S,tt,Q,ot,!0)}},A=(M,L,k,S,tt)=>{if(L!==k){if(L!==ge)for(const Q in L)!Ur(Q)&&!(Q in k)&&r(M,Q,L[Q],null,tt,S);for(const Q in k){if(Ur(Q))continue;const ot=k[Q],at=L[Q];ot!==at&&Q!=="value"&&r(M,Q,at,ot,tt,S)}"value"in k&&r(M,"value",L.value,k.value,tt)}},et=(M,L,k,S,tt,Q,ot,at,_t)=>{const q=L.el=M?M.el:a(""),C=L.anchor=M?M.anchor:a("");let{patchFlag:_,dynamicChildren:y,slotScopeIds:F}=L;F&&(at=at?at.concat(F):F),M==null?(i(q,k,S),i(C,k,S),U(L.children||[],k,C,tt,Q,ot,at,_t)):_>0&&_&64&&y&&M.dynamicChildren&&M.dynamicChildren.length===y.length?(T(M.dynamicChildren,y,k,tt,Q,ot,at),(L.key!=null||tt&&L===tt.subTree)&&Fh(M,L,!0)):$(M,L,k,C,tt,Q,ot,at,_t)},nt=(M,L,k,S,tt,Q,ot,at,_t)=>{L.slotScopeIds=at,M==null?L.shapeFlag&512?tt.ctx.activate(L,k,S,ot,_t):rt(L,k,S,tt,Q,ot,_t):mt(M,L,_t)},rt=(M,L,k,S,tt,Q,ot)=>{const at=M.component=Bg(M,S,tt);if(nu(M)&&(at.ctx.renderer=j),kg(at,!1,ot),at.asyncDep){if(tt&&tt.registerDep(at,H,ot,Q),!M.el){const _t=at.subTree=Ie(zn);h(null,_t,L,k),M.placeholder=_t.el}}else H(at,M,L,k,tt,Q,ot)},mt=(M,L,k)=>{const S=L.component=M.component;if(yg(M,L,k))if(S.asyncDep&&!S.asyncResolved){L.el=M.el,L.placeholder=M.placeholder,z(S,L,k);return}else S.next=L,S.update();else L.el=M.el,L.placeholder=M.placeholder,S.vnode=L},H=(M,L,k,S,tt,Q,ot)=>{const at=()=>{if(M.isMounted){let{next:_,bu:y,u:F,parent:it,vnode:V}=M;{const bt=Bh(M);if(bt){_&&(_.el=V.el,z(M,_,ot)),bt.asyncDep.then(()=>{on(()=>{M.isUnmounted||q()},tt)});return}}let Et=_,St;Ji(M,!1),_?(_.el=V.el,z(M,_,ot)):_=V,y&&Go(y),(St=_.props&&_.props.onVnodeBeforeUpdate)&&Hn(St,it,_,V),Ji(M,!0);const vt=Wu(M),Pt=M.subTree;M.subTree=vt,v(Pt,vt,d(Pt.el),B(Pt),M,tt,Q),_.el=vt.el,Et===null&&bg(M,vt.el),F&&on(F,tt),(St=_.props&&_.props.onVnodeUpdated)&&on(()=>Hn(St,it,_,V),tt)}else{let _;const{el:y,props:F}=L,{bm:it,m:V,parent:Et,root:St,type:vt}=M,Pt=Br(L);Ji(M,!1),it&&Go(it),!Pt&&(_=F&&F.onVnodeBeforeMount)&&Hn(_,Et,L),Ji(M,!0);{St.ce&&St.ce._hasShadowRoot()&&St.ce._injectChildStyle(vt,M.parent?M.parent.type:void 0);const bt=M.subTree=Wu(M);v(null,bt,k,S,M,tt,Q),L.el=bt.el}if(V&&on(V,tt),!Pt&&(_=F&&F.onVnodeMounted)){const bt=L;on(()=>Hn(_,Et,bt),tt)}(L.shapeFlag&256||Et&&Br(Et.vnode)&&Et.vnode.shapeFlag&256)&&M.a&&on(M.a,tt),M.isMounted=!0,L=k=S=null}};M.scope.on();const _t=M.effect=new Yf(at);M.scope.off();const q=M.update=_t.run.bind(_t),C=M.job=_t.runIfDirty.bind(_t);C.i=M,C.id=M.uid,_t.scheduler=()=>tu(C),Ji(M,!0),q()},z=(M,L,k)=>{L.component=M;const S=M.vnode.props;M.vnode=L,M.next=null,Sg(M,L.props,S,k),Ag(M,L.children,k),Zn(),ph(M),Jn()},$=(M,L,k,S,tt,Q,ot,at,_t=!1)=>{const q=M&&M.children,C=M?M.shapeFlag:0,_=L.children,{patchFlag:y,shapeFlag:F}=L;if(y>0){if(y&128){R(q,_,k,S,tt,Q,ot,at,_t);return}else if(y&256){ht(q,_,k,S,tt,Q,ot,at,_t);return}}F&8?(C&16&&yt(q,tt,Q),_!==q&&u(k,_)):C&16?F&16?R(q,_,k,S,tt,Q,ot,at,_t):yt(q,tt,Q,!0):(C&8&&u(k,""),F&16&&U(_,k,S,tt,Q,ot,at,_t))},ht=(M,L,k,S,tt,Q,ot,at,_t)=>{M=M||ds,L=L||ds;const q=M.length,C=L.length,_=Math.min(q,C);let y;for(y=0;y<_;y++){const F=L[y]=_t?hi(L[y]):$n(L[y]);v(M[y],F,k,null,tt,Q,ot,at,_t)}q>C?yt(M,tt,Q,!0,!1,_):U(L,k,S,tt,Q,ot,at,_t,_)},R=(M,L,k,S,tt,Q,ot,at,_t)=>{let q=0;const C=L.length;let _=M.length-1,y=C-1;for(;q<=_&&q<=y;){const F=M[q],it=L[q]=_t?hi(L[q]):$n(L[q]);if(_r(F,it))v(F,it,k,null,tt,Q,ot,at,_t);else break;q++}for(;q<=_&&q<=y;){const F=M[_],it=L[y]=_t?hi(L[y]):$n(L[y]);if(_r(F,it))v(F,it,k,null,tt,Q,ot,at,_t);else break;_--,y--}if(q>_){if(q<=y){const F=y+1,it=F<C?L[F].el:S;for(;q<=y;)v(null,L[q]=_t?hi(L[q]):$n(L[q]),k,it,tt,Q,ot,at,_t),q++}}else if(q>y)for(;q<=_;)ct(M[q],tt,Q,!0),q++;else{const F=q,it=q,V=new Map;for(q=it;q<=y;q++){const Ut=L[q]=_t?hi(L[q]):$n(L[q]);Ut.key!=null&&V.set(Ut.key,q)}let Et,St=0;const vt=y-it+1;let Pt=!1,bt=0;const At=new Array(vt);for(q=0;q<vt;q++)At[q]=0;for(q=F;q<=_;q++){const Ut=M[q];if(St>=vt){ct(Ut,tt,Q,!0);continue}let Tt;if(Ut.key!=null)Tt=V.get(Ut.key);else for(Et=it;Et<=y;Et++)if(At[Et-it]===0&&_r(Ut,L[Et])){Tt=Et;break}Tt===void 0?ct(Ut,tt,Q,!0):(At[Tt-it]=q+1,Tt>=bt?bt=Tt:Pt=!0,v(Ut,L[Tt],k,null,tt,Q,ot,at,_t),St++)}const Ft=Pt?Lg(At):ds;for(Et=Ft.length-1,q=vt-1;q>=0;q--){const Ut=it+q,Tt=L[Ut],Kt=L[Ut+1],Wt=Ut+1<C?Kt.el||jl(Kt):S;At[q]===0?v(null,Tt,k,Wt,tt,Q,ot,at,_t):Pt&&(Et<0||q!==Ft[Et]?b(Tt,k,Wt,2):Et--)}}},b=(M,L,k,S,tt=null)=>{const{el:Q,type:ot,transition:at,children:_t,shapeFlag:q}=M;if(q&6){b(M.component.subTree,L,k,S);return}if(q&128){M.suspense.move(L,k,S);return}if(q&64){ot.move(M,L,k,j);return}if(ot===Re){i(Q,L,k);for(let _=0;_<_t.length;_++)b(_t[_],L,k,S);i(M.anchor,L,k);return}if(ot===$o){D(M,L,k);return}if(S!==2&&q&1&&at)if(S===0)at.persisted&&!Q[Xa]?i(Q,L,k):(at.beforeEnter(Q),i(Q,L,k),on(()=>at.enter(Q),tt));else{const{leave:_,delayLeave:y,afterLeave:F}=at,it=()=>{M.ctx.isUnmounted?s(Q):i(Q,L,k)},V=()=>{const Et=Q._isLeaving||!!Q[Xa];Q._isLeaving&&Q[Xa](!0),at.persisted&&!Et?it():_(Q,()=>{it(),F&&F()})};y?y(Q,it,V):V()}else i(Q,L,k)},ct=(M,L,k,S=!1,tt=!1)=>{const{type:Q,props:ot,ref:at,children:_t,dynamicChildren:q,shapeFlag:C,patchFlag:_,dirs:y,cacheIndex:F,memo:it}=M;if((_===-2||q&&q.hasOnce)&&(tt=!1),at!=null&&(Zn(),Fr(at,null,k,M,!0),Jn()),F!=null&&(!M.ctx||M.ctx===L)&&(L.renderCache[F]=void 0),C&256){L.ctx.deactivate(M);return}const V=C&1&&y,Et=!Br(M);let St;if(Et&&(St=ot&&ot.onVnodeBeforeUnmount)&&Hn(St,L,M),C&6)lt(M.component,k,S);else{if(C&128){M.suspense.unmount(k,S);return}V&&Zi(M,null,L,"beforeUnmount"),C&64?M.type.remove(M,L,k,j,S):q&&!q.hasOnce&&(Q!==Re||_>0&&_&64)?yt(q,L,k,!1,!0):(Q===Re&&_&384||!tt&&C&16)&&yt(_t,L,k),S&&gt(M)}const vt=it!=null&&F==null;(Et&&(St=ot&&ot.onVnodeUnmounted)||V||vt)&&on(()=>{St&&Hn(St,L,M),V&&Zi(M,null,L,"unmounted"),vt&&(M.el=null)},k)},gt=M=>{const{type:L,el:k,anchor:S,transition:tt}=M,Q=L===Re;if(Q&&!tt){Y(k,S);return}if(L===$o){w(M),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave();return}const ot=Q?Hl(M):M,at=()=>{Q?d(k)&&Y(k,S):s(k),tt&&!tt.persisted&&tt.afterLeave&&tt.afterLeave()};if(ot&&ot.shapeFlag&1&&tt&&!tt.persisted){const{leave:_t,delayLeave:q}=tt,C=ot.el,_=()=>_t(C,at);q?q(C,at,_):_()}else at()},Y=(M,L)=>{let k;for(;M!==L;)k=f(M),s(M),M=k;s(L)},lt=(M,L,k)=>{const{bum:S,scope:tt,job:Q,subTree:ot,um:at,m:_t,a:q}=M;ju(_t),ju(q),S&&Go(S),tt.stop(),Q?(Q.flags|=8,ct(ot,M,L,k)):M.vnode.el&&ot&&(ot.transition=M.vnode.transition,ct(ot,M,L,k)),at&&on(at,L),on(()=>{M.isUnmounted=!0},L)},yt=(M,L,k,S=!1,tt=!1,Q=0)=>{for(let ot=Q;ot<M.length;ot++)ct(M[ot],L,k,S,tt)},B=M=>{if(M.shapeFlag&6)return B(M.component.subTree);if(M.shapeFlag&128)return M.suspense.next();const L=f(M.anchor||M.el),k=L&&L[$m];return k?f(k):L},G=(M,L,k)=>{const S=M&&L._vnode?void 0:M&&M.component?M.component.uid:Fg();Vm(()=>{M==null?L._vnode&&ct(L._vnode,null,null,!0):v(L._vnode||null,M,L,null,null,null,k),L._vnode=M},S)},j={p:v,um:ct,m:b,r:gt,mt:rt,mc:U,pc:$,pbc:T,n:B,o:n};return{render:G,hydrate:void 0,createApp:pg(G)}}function Ya({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function Ji({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Pg(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Fh(n,t,e=!1){const i=n.children,s=t.children;if(Gt(i)&&Gt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Fh(o,a)),a.type===Ra&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===zn&&!a.el&&(a.el=o.el)}}function Lg(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bh(t)}function ju(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function jl(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?jl(t.subTree):null}const zh=n=>n.__isSuspense;function Dg(n,t){t&&t.pendingBranch?Gt(n)?t.effects.push(...n):t.effects.push(n):km(n)}const Re=Symbol.for("v-fgt"),Ra=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),$o=Symbol.for("v-stc"),_s=[];let hn=null;function Ot(n=!1){_s.push(hn=n?null:[])}function kh(){_s.pop(),hn=_s[_s.length-1]||null}let $r=1;function oa(n,t=!1){$r+=n,n<0&&hn&&t&&(hn.hasOnce=!0)}function Vh(n){return n.dynamicChildren=$r>0?hn||ds:null,kh(),$r>0&&hn&&hn.push(n),n}function Bt(n,t,e,i,s,r){return Vh(g(n,t,e,i,s,r,!0))}function ou(n,t,e,i,s){return Vh(Ie(n,t,e,i,s,!0))}function Xr(n){return n?n.__v_isVNode===!0:!1}function _r(n,t){return n.type===t.type&&n.key===t.key}const Hh=({key:n})=>n??null,Xo=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?Ae(n)||je(n)||qt(n)?{i:fn,r:n,k:t,f:!!e}:n:null);function g(n,t=null,e=null,i=0,s=null,r=n===Re?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Hh(t),ref:t&&Xo(t),scopeId:_h,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:fn};return a?(aa(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=Ae(e)?8:16),$r>0&&!o&&hn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&hn.push(l),l}const Ie=Ig;function Ig(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===rg)&&(n=zn),Xr(n)){const a=Qs(n,t,!0);return e&&aa(a,e),$r>0&&!r&&hn&&(a.shapeFlag&6?hn[hn.indexOf(n)]=a:hn.push(a)),a.patchFlag=-2,a}if($g(n)&&(n=n.__vccOpts),t){t=Ug(t);let{class:a,style:l}=t;a&&!Ae(a)&&(t.class=fi(a)),fe(l)&&(Jc(l)&&!Gt(l)&&(l=He({},l)),t.style=ye(l))}const o=Ae(n)?1:zh(n)?128:Ta(n)?64:fe(n)?4:qt(n)?2:0;return g(n,t,e,i,s,o,r,!0)}function Ug(n){return n?Jc(n)||Lh(n)?He({},n):n:null}function Qs(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Ng(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Hh(c),ref:t&&t.ref?e&&r?Gt(r)?r.concat(Xo(t)):[r,Xo(t)]:Xo(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Re?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qs(n.ssContent),ssFallback:n.ssFallback&&Qs(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&ia(u,l.clone(u)),u}function Dt(n=" ",t=0){return Ie(Ra,null,n,t)}function jr(n,t){const e=Ie($o,null,n);return e.staticCount=t,e}function De(n="",t=!1){return t?(Ot(),ou(zn,null,n)):Ie(zn,null,n)}function $n(n){return n==null||typeof n=="boolean"?Ie(zn):Gt(n)?Ie(Re,null,n.slice()):Xr(n)?hi(n):Ie(Ra,null,String(n))}function hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qs(n)}function aa(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Gt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),aa(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Lh(t)?t._ctx=fn:s===3&&fn&&(fn.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(qt(t)){if(i&65){aa(n,{default:t});return}t={default:t,_ctx:fn},e=32}else t=String(t),i&64?(e=16,t=[Dt(t)]):e=8;n.children=t,n.shapeFlag|=e}function Ng(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=fi([t.class,i.class]));else if(s==="style")t.style=ye([t.style,i.style]);else if(va(s)){const r=t[s],o=i[s];o&&r!==o&&!(Gt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!xa(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Hn(n,t,e,i=null){Bn(n,t,7,[e,i])}const Og=wh();let Gh=0;function Fg(){return Gh}function Bg(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Og,r={uid:Gh++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:Th(i,s),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:i.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=gg.bind(null,r),n.ce&&n.ce(r),r}let Xe=null;const zg=()=>Xe||fn;let la,Yr;{const n=Sa(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};la=t("__VUE_INSTANCE_SETTERS__",e=>Xe=e),Yr=t("__VUE_SSR_SETTERS__",e=>qr=e)}const to=n=>{const t=Xe;return la(n),n.scope.on(),()=>{n.scope.off(),la(t)}},Yu=()=>{Xe&&Xe.scope.off(),la(null)};function Wh(n){return n.vnode.shapeFlag&4}let qr=!1;function kg(n,t=!1,e=!1){t&&Yr(t);const{props:i,children:s}=n.vnode,r=Wh(n);Mg(n,i,r,t),Tg(n,s,e||t);const o=r?Vg(n,t):void 0;return t&&Yr(!1),o}function Vg(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,ag);const{setup:i}=e;if(i){Zn();const s=n.setupContext=i.length>1?Gg(n):null,r=to(n),o=Qr(i,n,0,[n.props,s]),a=Vf(o);if(Jn(),r(),(a||n.sp)&&!Br(n)&&bh(n),a){if(o.then(Yu,Yu),t)return o.then(l=>{Yr(!0);try{qu(n,l,t)}finally{Yr(!1)}}).catch(l=>{wa(l,n,0)});n.asyncDep=o}else qu(n,o)}else $h(n)}function qu(n,t,e){qt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:fe(t)&&(n.setupState=dh(t)),$h(n)}function $h(n,t,e){const i=n.type;n.render||(n.render=i.render||qn);{const s=to(n);Zn();try{lg(n)}finally{Jn(),s()}}}const Hg={get(n,t){return $e(n,"get",""),n[t]}};function Gg(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,Hg),slots:n.slots,emit:n.emit,expose:t}}function Pa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(dh(Pm(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in zr)return zr[e](n)},has(t,e){return e in t||e in zr}})):n.proxy}function Wg(n,t=!0){return qt(n)?n.displayName||n.name:n.name||t&&n.__name}function $g(n){return qt(n)&&"__vccOpts"in n}const Be=(n,t)=>Nm(n,t,qr);function Xh(n,t,e){try{oa(-1);const i=arguments.length;return i===2?fe(t)&&!Gt(t)?Xr(t)?Ie(n,null,[t]):Ie(n,t):Ie(n,null,t):(i>3?e=Array.prototype.slice.call(arguments,2):i===3&&Xr(e)&&(e=[e]),Ie(n,t,e))}finally{oa(1)}}const Xg="3.5.44";/**
* @vue/runtime-dom v3.5.44
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Yl;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{Yl=Ku.createPolicy("vue",{createHTML:n=>n})}catch{}const jh=Yl?n=>Yl.createHTML(n):n=>n,jg="http://www.w3.org/2000/svg",Yg="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,Zu=di&&di.createElement("template"),qg={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?di.createElementNS(jg,n):t==="mathml"?di.createElementNS(Yg,n):e?di.createElement(n,{is:e}):di.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>di.createTextNode(n),createComment:n=>di.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>di.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Zu.innerHTML=jh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Kg=Symbol("_vtc");function Zg(n,t,e){const i=n[Kg];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const ca=Symbol("_vod"),Yh=Symbol("_vsh"),Ju={name:"show",beforeMount(n,{value:t},{transition:e}){n[ca]=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):vr(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:i}){!t!=!e&&(i?t?(i.beforeEnter(n),vr(n,!0),i.enter(n)):i.leave(n,()=>{vr(n,!1)}):vr(n,t))},beforeUnmount(n,{value:t}){vr(n,t)}};function vr(n,t){n.style.display=t?n[ca]:"none",n[Yh]=!t}const Jg=Symbol(""),Qg=/(?:^|;)\s*display\s*:/;function t_(n,t,e){const i=n.style,s=Ae(e);let r=!1;if(e&&!s){if(t)if(Ae(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Pr(i,a,"")}else for(const o in t)e[o]==null&&Pr(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?n_(n,o,!Ae(t)&&t?t[o]:void 0,a)||Pr(i,o,a):Pr(i,o,"")}}else if(s){if(t!==e){const o=i[Jg];o&&(e+=";"+o),i.cssText=e,r=Qg.test(e)}}else t&&n.removeAttribute("style");ca in n&&((!s||t!==e)&&(n[ca]=r?i.display:""),n[Yh]&&(i.display="none"))}const co=/\s*!important$/;function Pr(n,t,e){if(Gt(e))e.forEach(i=>Pr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))co.test(e)?n.setProperty(t,e.replace(co,""),"important"):n.setProperty(t,e);else{const i=e_(n,t);co.test(e)?n.setProperty(qi(i),e.replace(co,""),"important"):n[i]=e}}const Qu=["Webkit","Moz","ms"],qa={};function e_(n,t){const e=qa[t];if(e)return e;let i=en(t);if(i!=="filter"&&i in n)return qa[t]=i;i=ba(i);for(let s=0;s<Qu.length;s++){const r=Qu[s]+i;if(r in n)return qa[t]=r}return t}function n_(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Ae(i)&&e===i}const td="http://www.w3.org/1999/xlink";function ed(n,t,e,i,s,r=cm(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(td,t.slice(6,t.length)):n.setAttributeNS(td,t,e):e==null||r&&!$f(e)?n.removeAttribute(t):n.setAttribute(t,r?"":Kn(e)?String(e):e)}function nd(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?jh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=$f(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function gi(n,t,e,i){n.addEventListener(t,e,i)}function i_(n,t,e,i){n.removeEventListener(t,e,i)}const id=Symbol("_vei");function s_(n,t,e,i,s=null){const r=n[id]||(n[id]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=a_(t);if(i){const c=r[t]=u_(i,s);gi(n,a,c,l)}else o&&(i_(n,a,o,l),r[t]=void 0)}}const r_=/(Once|Passive|Capture)$/,o_=/^on:?(?:Once|Passive|Capture)$/;function a_(n){let t,e;for(;(e=n.match(r_))&&!o_.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):qi(n.slice(2)),t]}let Ka=0;const l_=Promise.resolve(),c_=()=>Ka||(l_.then(()=>Ka=0),Ka=Date.now());function u_(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Gt(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&Bn(c,t,5,a)}}else Bn(s,t,5,[i])};return e.value=n,e.attached=c_(),e}const sd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,d_=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Zg(n,i,o):t==="style"?t_(n,e,i):va(t)?xa(t)||s_(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):f_(n,t,i,o))?(nd(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ed(n,t,i,o,r,t!=="value")):n._isVueCE&&(h_(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!Ae(i)))?nd(n,en(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),ed(n,t,i,o))};function f_(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sd(t)&&qt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sd(t)&&Ae(e)?!1:t in n}function h_(n,t){const e=n._def.props;if(!e)return!1;const i=en(t);return Array.isArray(e)?e.some(s=>en(s)===i):Object.keys(e).some(s=>en(s)===i)}const Xi=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Gt(t)?e=>Go(t,e):t};function p_(n){n.target.composing=!0}function rd(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pn=Symbol("_assign"),uo=Symbol("_initialValue");function Za(n,t,e){return t&&(n=n.trim()),e&&(n=Ma(n)),n}const Fe={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[uo]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[uo]=n.defaultValue.replace(/\r\n?/g,`
`))),n[pn]=Xi(s);const r=i||s.props&&s.props.type==="number";gi(n,t?"change":"input",o=>{o.target.composing||n[pn](Za(n.value,e,r))}),(e||r)&&gi(n,"change",()=>{n.value=Za(n.value,e,r)}),t||(gi(n,"compositionstart",p_),gi(n,"compositionend",rd),gi(n,"change",rd))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[uo];delete n[uo],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[pn](Za(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[pn]=Xi(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Ma(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},Fi={deep:!0,created(n,t,e){n[pn]=Xi(e),gi(n,"change",()=>{const i=n._modelValue,s=tr(n),r=n.checked,o=n[pn];if(Gt(i)){const a=$c(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(Si(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(qh(n,r))})},mounted:od,beforeUpdate(n,t,e){n[pn]=Xi(e),od(n,t,e)}};function od(n,{value:t,oldValue:e},i){n._modelValue=t;let s;if(Gt(t))s=$c(t,i.props.value)>-1;else if(Si(t))s=t.has(i.props.value);else{if(t===e)return;s=Fn(t,qh(n,!0))}n.checked!==s&&(n.checked=s)}const ad={created(n,{value:t},e){n.checked=Fn(t,e.props.value),n[pn]=Xi(e),gi(n,"change",()=>{n[pn](tr(n))})},beforeUpdate(n,{value:t,oldValue:e},i){n[pn]=Xi(i),t!==e&&(n.checked=Fn(t,i.props.value))}},ua={deep:!0,created(n,{value:t,modifiers:{number:e}},i){n._modelValue=t,gi(n,"change",()=>{const s=Array.prototype.filter.call(n.options,l=>l.selected).map(l=>e?Ma(tr(l)):tr(l)),r=n.multiple,o=r?Si(n._modelValue)?new Set(s):s:s[0],a=n._pendingValue=[r,r?Gt(o)?s.slice():s:o];try{n[pn](o)}finally{Qc(()=>{n._pendingValue===a&&(n._pendingValue=void 0)})}}),n[pn]=Xi(i)},mounted(n,{value:t}){ld(n,t)},beforeUpdate(n,{value:t},e){n._modelValue=t,n[pn]=Xi(e)},updated(n,{value:t}){const e=n._pendingValue;n._pendingValue=void 0,(!e||e[0]!==n.multiple||!m_(t,e[1],e[0]))&&ld(n,t)}};function m_(n,t,e){if(!e||Gt(n))return Fn(n,t);if(Si(n)){if(n.size!==t.length)return!1;for(const i of t)if(!n.has(i))return!1;return!0}return!1}function ld(n,t){const e=n.multiple,i=Gt(t);if(!(e&&!i&&!Si(t))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=tr(o);if(e)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=t.some(c=>String(c)===String(a)):o.selected=$c(t,a)>-1}else o.selected=t.has(a);else if(Fn(tr(o),t)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function tr(n){return"_value"in n?n._value:n.value}function qh(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const g_=["ctrl","shift","alt","meta"],__={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>g_.some(e=>n[`${e}Key`]&&!t.includes(e))},as=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=__[t[o]];if(a&&a(s,t))return}return n(s,...r)})},v_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cd=(n,t)=>{const e=n._withKeys||(n._withKeys={}),i=t.join(".");return e[i]||(e[i]=s=>{if(!("key"in s))return;const r=qi(s.key);if(t.some(o=>o===r||v_[o]===r))return n(s)})},x_=He({patchProp:d_},qg);let ud;function y_(){return ud||(ud=Cg(x_))}const b_=(...n)=>{const t=y_().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=S_(i);if(!s)return;const r=t._component;!qt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,M_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function M_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function S_(n){return Ae(n)?document.querySelector(n):n}const au=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},E_={};function w_(n,t){const e=iu("router-view");return Ot(),ou(e)}const T_=au(E_,[["render",w_]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ws=typeof document<"u";function Kh(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function A_(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Kh(n.default)}const ce=Object.assign;function Ja(n,t){const e={};for(const i in t){const s=t[i];e[i]=kn(s)?s.map(n):n(s)}return e}const kr=()=>{},kn=Array.isArray;function dd(n,t){const e={};for(const i in n)e[i]=i in t?t[i]:n[i];return e}const Zh=/#/g,C_=/&/g,R_=/\//g,P_=/=/g,L_=/\?/g,Jh=/\+/g,D_=/%5B/g,I_=/%5D/g,Qh=/%5E/g,U_=/%60/g,tp=/%7B/g,N_=/%7C/g,ep=/%7D/g,O_=/%20/g;function lu(n){return n==null?"":encodeURI(""+n).replace(N_,"|").replace(D_,"[").replace(I_,"]")}function F_(n){return lu(n).replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function ql(n){return lu(n).replace(Jh,"%2B").replace(O_,"+").replace(Zh,"%23").replace(C_,"%26").replace(U_,"`").replace(tp,"{").replace(ep,"}").replace(Qh,"^")}function B_(n){return ql(n).replace(P_,"%3D")}function z_(n){return lu(n).replace(Zh,"%23").replace(L_,"%3F")}function k_(n){return z_(n).replace(R_,"%2F")}function Kr(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const V_=/\/$/,H_=n=>n.replace(V_,"");function Qa(n,t,e="/"){let i,s={},r="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=t.slice(0,l),r=t.slice(l,a>0?a:t.length),s=n(r.slice(1))),a>=0&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=X_(i??t,e),{fullPath:i+r+o,path:i,query:s,hash:Kr(o)}}function G_(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function fd(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function W_(n,t,e){const i=t.matched.length-1,s=e.matched.length-1;return i>-1&&i===s&&er(t.matched[i],e.matched[s])&&np(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function er(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function np(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(var e in n)if(!$_(n[e],t[e]))return!1;return!0}function $_(n,t){return kn(n)?hd(n,t):kn(t)?hd(t,n):(n==null?void 0:n.valueOf())===(t==null?void 0:t.valueOf())}function hd(n,t){return kn(t)?n.length===t.length&&n.every((e,i)=>e===t[i]):n.length===1&&n[0]===t}function X_(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=e.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")r>1&&r--;else break;return e.slice(0,r).join("/")+"/"+i.slice(o).join("/")}const Ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Kl=function(n){return n.pop="pop",n.push="push",n}({}),tl=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function j_(n){if(!n)if(Ws){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),H_(n)}const Y_=/^[^#]+#/;function q_(n,t){return n.replace(Y_,"#")+t}function K_(n,t){const e=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:t.behavior,left:i.left-e.left-(t.left||0),top:i.top-e.top-(t.top||0)}}const La=()=>({left:window.scrollX,top:window.scrollY});function Z_(n){let t;if("el"in n){const e=n.el,i=typeof e=="string"&&e.startsWith("#"),s=typeof e=="string"?i?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!s)return;t=K_(s,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function pd(n,t){return(history.state?history.state.position-t:-1)+n}const Zl=new Map;function J_(n,t){Zl.set(n,t)}function Q_(n){const t=Zl.get(n);return Zl.delete(n),t}function tv(n){return typeof n=="string"||n&&typeof n=="object"}function ip(n){return typeof n=="string"||typeof n=="symbol"}let we=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const sp=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function nr(n,t){return ce(new Error,{type:n,[sp]:!0},t)}function si(n,t){return n instanceof Error&&sp in n&&(t==null||!!(n.type&t))}const ev=["params","query","hash"];function nv(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const t={};for(const e of ev)e in n&&(t[e]=n[e]);return JSON.stringify(t,null,2)}function iv(n){const t={};if(n===""||n==="?")return t;const e=(n[0]==="?"?n.slice(1):n).split("&");for(let i=0;i<e.length;++i){const s=e[i].replace(Jh," "),r=s.indexOf("="),o=Kr(r<0?s:s.slice(0,r)),a=r<0?null:Kr(s.slice(r+1));if(o in t){let l=t[o];kn(l)||(l=t[o]=[l]),l.push(a)}else t[o]=a}return t}function md(n){let t="";for(let e in n){const i=n[e];if(e=B_(e),i==null){i!==void 0&&(t+=(t.length?"&":"")+e);continue}(kn(i)?i.map(s=>s&&ql(s)):[i&&ql(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+e,s!=null&&(t+="="+s))})}return t}function sv(n){const t={};for(const e in n){const i=n[e];i!==void 0&&(t[e]=kn(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return t}const rv=Symbol(""),gd=Symbol(""),Da=Symbol(""),cu=Symbol(""),Jl=Symbol("");function xr(){let n=[];function t(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function e(){n=[]}return{add:t,list:()=>n.slice(),reset:e}}function Bi(n,t,e,i,s,r=o=>o()){const o=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(nr(we.NAVIGATION_ABORTED,{from:e,to:t})):f instanceof Error?l(f):tv(f)?l(nr(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:f})):(o&&i.enterCallbacks[s]===o&&typeof f=="function"&&o.push(f),a())},u=r(()=>n.call(i&&i.instances[s],t,e,c));let d=Promise.resolve(u);n.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function el(n,t,e,i,s=r=>r()){const r=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(Kh(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Bi(c,e,i,o,a,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=A_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[t];return f&&Bi(f,e,i,o,a,s)()}))}}return r}function ov(n,t){const e=[],i=[],s=[],r=Math.max(t.matched.length,n.matched.length);for(let o=0;o<r;o++){const a=t.matched[o];a&&(n.matched.find(c=>er(c,a))?i.push(a):e.push(a));const l=n.matched[o];l&&(t.matched.find(c=>er(c,l))||s.push(l))}return[e,i,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let av=()=>location.protocol+"//"+location.host;function rp(n,t){const{pathname:e,search:i,hash:s}=t,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),fd(a,"")}return fd(e,n)+i+s}function lv(n,t,e,i){let s=[],r=[],o=null;const a=({state:f})=>{const p=rp(n,location),x=e.value,v=t.value;let m=0;if(f){if(e.value=p,t.value=f,o&&o===x){o=null;return}m=v?f.position-v.position:0}else i(p);s.forEach(h=>{h(e.value,x,{delta:m,type:Kl.pop,direction:m?m>0?tl.forward:tl.back:tl.unknown})})};function l(){o=e.value}function c(f){s.push(f);const p=()=>{const x=s.indexOf(f);x>-1&&s.splice(x,1)};return r.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ce({},f.state,{scroll:La()}),"")}}function d(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function _d(n,t,e,i=!1,s=!1){return{back:n,current:t,forward:e,replaced:i,position:window.history.length,scroll:s?La():null}}function cv(n){const{history:t,location:e}=window,i={value:rp(n,e)},s={value:t.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=n.indexOf("#"),f=d>-1?(e.host&&document.querySelector("base")?n:n.slice(d))+l:av()+n+l;try{t[u?"replaceState":"pushState"](c,"",f),s.value=c}catch(p){console.error(p),e[u?"replace":"assign"](f)}}function o(l,c){r(l,ce({},t.state,_d(s.value.back,l,s.value.forward,!0),c,{position:s.value.position}),!0),i.value=l}function a(l,c){const u=ce({},s.value,t.state,{forward:l,scroll:La()});r(u.current,u,!0),r(l,ce({},_d(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:s,push:a,replace:o}}function uv(n){n=j_(n);const t=cv(n),e=lv(n,t.state,t.location,t.replace);function i(r,o=!0){o||e.pauseListeners(),history.go(r)}const s=ce({location:"",base:n,go:i,createHref:q_.bind(null,n)},t,e);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function dv(n){return n=location.host?n||location.pathname+location.search:"",n.includes("#")||(n+="#"),uv(n)}let fs=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var Le=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(Le||{});const fv={type:fs.Static,value:""},hv=/[a-zA-Z0-9_]/;function pv(n){if(!n)return[[]];if(n==="/")return[[fv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(p){throw new Error(`ERR (${e})/"${c}": ${p}`)}let e=Le.Static,i=e;const s=[];let r;function o(){r&&s.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(e===Le.Static?r.push({type:fs.Static,value:c}):e===Le.Param||e===Le.ParamRegExp||e===Le.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:fs.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&e!==Le.ParamRegExp){i=e,e=Le.EscapeNext;continue}switch(e){case Le.Static:l==="/"?(c&&d(),o()):l===":"?(d(),e=Le.Param):f();break;case Le.EscapeNext:f(),e=i;break;case Le.Param:l==="("?e=Le.ParamRegExp:hv.test(l)?f():(d(),e=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Le.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:e=Le.ParamRegExpEnd:u+=l;break;case Le.ParamRegExpEnd:d(),e=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:t("Unknown state");break}}return e===Le.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),s}const vd="[^/]+?",mv={sensitive:!1,strict:!1,start:!0,end:!0};var Ze=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Ze||{});const gv=/[.+*?^${}()[\]/\\]/g;function _v(n,t){const e=ce({},mv,t),i=[];let s=e.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[Ze.Root];e.strict&&!c.length&&(s+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=Ze.Segment+(e.sensitive?Ze.BonusCaseSensitive:0);if(f.type===fs.Static)d||(s+="/"),s+=f.value.replace(gv,"\\$&"),p+=Ze.Static;else if(f.type===fs.Param){const{value:x,repeatable:v,optional:m,regexp:h}=f;r.push({name:x,repeatable:v,optional:m});const I=h||vd;if(I!==vd){p+=Ze.BonusCustomRegExp;try{`${I}`}catch(w){throw new Error(`Invalid custom RegExp for param "${x}" (${I}): `+w.message)}}let D=v?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;d||(D=m&&c.length<2?`(?:/${D})`:"/"+D),m&&(D+="?"),s+=D,p+=Ze.Dynamic,m&&(p+=Ze.BonusOptional),v&&(p+=Ze.BonusRepeatable),I===".*"&&(p+=Ze.BonusWildcard)}u.push(p)}i.push(u)}if(e.strict&&e.end){const c=i.length-1;i[c][i[c].length-1]+=Ze.BonusStrict}e.strict||(s+="/?"),e.end?s+="$":e.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,e.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",x=r[f-1];d[x.name]=p&&x.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of n){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===fs.Static)u+=p.value;else if(p.type===fs.Param){const{value:x,repeatable:v,optional:m}=p,h=x in c?c[x]:"";if(kn(h)&&!v)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const I=kn(h)?h.join("/"):h;if(!I)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${x}"`);u+=I}}return u||"/"}return{re:o,score:i,keys:r,parse:a,stringify:l}}function vv(n,t){let e=0;for(;e<n.length&&e<t.length;){const i=t[e]-n[e];if(i)return i;e++}return n.length<t.length?n.length===1&&n[0]===Ze.Static+Ze.Segment?-1:1:n.length>t.length?t.length===1&&t[0]===Ze.Static+Ze.Segment?1:-1:0}function op(n,t){let e=0;const i=n.score,s=t.score;for(;e<i.length&&e<s.length;){const r=vv(i[e],s[e]);if(r)return r;e++}if(Math.abs(s.length-i.length)===1){if(xd(i))return 1;if(xd(s))return-1}return s.length-i.length}function xd(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const xv={strict:!1,end:!0,sensitive:!1};function yv(n,t,e){const i=_v(pv(n.path),e),s=ce(i,{record:n,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function bv(n,t){const e=[],i=new Map;t=dd(xv,t);function s(d){return i.get(d)}function r(d,f,p){const x=!p,v=bd(d);v.aliasOf=p&&p.record;const m=dd(t,d),h=[v];if("alias"in d){const w=typeof d.alias=="string"?[d.alias]:d.alias;for(const X of w)h.push(bd(ce({},v,{components:p?p.record.components:v.components,path:X,aliasOf:p?p.record:v})))}let I,D;for(const w of h){const{path:X}=w;if(f&&X[0]!=="/"){const O=f.record.path,N=O[O.length-1]==="/"?"":"/";w.path=f.record.path+(X&&N+X)}if(I=yv(w,f,m),p?p.alias.push(I):(D=D||I,D!==I&&D.alias.push(I),x&&d.name&&!Md(I)&&o(d.name)),ap(I)&&l(I),v.children){const O=v.children;for(let N=0;N<O.length;N++)r(O[N],I,p&&p.children[N])}p=p||I}return D?()=>{o(D)}:kr}function o(d){if(ip(d)){const f=i.get(d);f&&(i.delete(d),e.splice(e.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=e.indexOf(d);f>-1&&(e.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return e}function l(d){const f=Ev(d,e);e.splice(f,0,d),d.record.name&&!Md(d)&&i.set(d.record.name,d)}function c(d,f){let p,x={},v,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw nr(we.MATCHER_NOT_FOUND,{location:d});m=p.record.name,x=ce(yd(f.params,p.keys.filter(D=>!D.optional).concat(p.parent?p.parent.keys.filter(D=>D.optional):[]).map(D=>D.name)),d.params&&yd(d.params,p.keys.map(D=>D.name))),v=p.stringify(x)}else if(d.path!=null)v=d.path,p=e.find(D=>D.re.test(v)),p&&(x=p.parse(v),m=p.record.name);else{if(p=f.name?i.get(f.name):e.find(D=>D.re.test(f.path)),!p)throw nr(we.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,x=ce({},f.params,d.params),v=p.stringify(x)}const h=[];let I=p;for(;I;)h.unshift(I.record),I=I.parent;return{name:m,path:v,params:x,matched:h,meta:Sv(h)}}n.forEach(d=>r(d));function u(){e.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:s}}function yd(n,t){const e={};for(const i of t)i in n&&(e[i]=n[i]);return e}function bd(n){const t={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Mv(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Mv(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const i in n.components)t[i]=typeof e=="object"?e[i]:e;return t}function Md(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Sv(n){return n.reduce((t,e)=>ce(t,e.meta),{})}function Ev(n,t){let e=0,i=t.length;for(;e!==i;){const r=e+i>>1;op(n,t[r])<0?i=r:e=r+1}const s=wv(n);return s&&(i=t.lastIndexOf(s,i-1)),i}function wv(n){let t=n;for(;t=t.parent;)if(ap(t)&&op(n,t)===0)return t}function ap({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Sd(n){const t=Un(Da),e=Un(cu),i=Be(()=>{const l=de(n.to);return t.resolve(l)}),s=Be(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=e.matched;if(!u||!d.length)return-1;const f=d.findIndex(er.bind(null,u));if(f>-1)return f;const p=Ed(l[c-2]);return c>1&&Ed(u)===p&&d[d.length-1].path!==p?d.findIndex(er.bind(null,l[c-2])):f}),r=Be(()=>s.value>-1&&Pv(e.params,i.value.params)),o=Be(()=>s.value>-1&&s.value===e.matched.length-1&&np(e.params,i.value.params));function a(l={}){if(Rv(l)){const c=t[de(n.replace)?"replace":"push"](de(n.to)).catch(kr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Be(()=>i.value.href),isActive:r,isExactActive:o,navigate:a}}function Tv(n){return n.length===1?n[0]:n}const Av=wi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Sd,setup(n,{slots:t}){const e=yn(Sd(n)),{options:i}=Un(Da),s=Be(()=>({[wd(n.activeClass,i.linkActiveClass,"router-link-active")]:e.isActive,[wd(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const r=t.default&&Tv(t.default(e));return n.custom?r:Xh("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:s.value},r)}}}),Cv=Av;function Rv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function Pv(n,t){for(const e in t){const i=t[e],s=n[e];if(typeof i=="string"){if(i!==s)return!1}else if(!kn(s)||s.length!==i.length||i.some((r,o)=>r.valueOf()!==s[o].valueOf()))return!1}return!0}function Ed(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const wd=(n,t,e)=>n??t??e,Lv=wi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const i=Un(Jl),s=Be(()=>n.route||i.value),r=Un(gd,0),o=Be(()=>{let c=de(r);const{matched:u}=s.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Be(()=>s.value.matched[o.value]);Wo(gd,Be(()=>o.value+1)),Wo(rv,a),Wo(Jl,s);const l=Yt();return gs(()=>[l.value,a.value,n.name],([c,u,d],[f,p,x])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!er(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,d=a.value,f=d&&d.components[u];if(!f)return Td(e.default,{Component:f,route:c});const p=d.props[u],x=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=Xh(f,ce({},x,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Td(e.default,{Component:m,route:c})||m}}});function Td(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const Dv=Lv;function Iv(n){const t=bv(n.routes,n),e=n.parseQuery||iv,i=n.stringifyQuery||md,s=n.history,r=xr(),o=xr(),a=xr(),l=Lm(Ri);let c=Ri;Ws&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ja.bind(null,B=>""+B),d=Ja.bind(null,k_),f=Ja.bind(null,Kr);function p(B,G){let j,ut;return ip(B)?(j=t.getRecordMatcher(B),ut=G):ut=B,t.addRoute(ut,j)}function x(B){const G=t.getRecordMatcher(B);G&&t.removeRoute(G)}function v(){return t.getRoutes().map(B=>B.record)}function m(B){return!!t.getRecordMatcher(B)}function h(B,G){if(G=ce({},G||l.value),typeof B=="string"){const S=Qa(e,B,G.path),tt=t.resolve({path:S.path},G),Q=s.createHref(S.fullPath);return ce(S,tt,{params:f(tt.params),hash:Kr(S.hash),redirectedFrom:void 0,href:Q})}let j;if(B.path!=null)j=ce({},B,{path:Qa(e,B.path,G.path).path});else{const S=ce({},B.params);for(const tt in S)S[tt]==null&&delete S[tt];j=ce({},B,{params:d(S)}),G.params=d(G.params)}const ut=t.resolve(j,G),M=B.hash||"";ut.params=u(f(ut.params));const L=G_(i,ce({},B,{hash:F_(M),path:ut.path})),k=s.createHref(L);return ce({fullPath:L,hash:M,query:i===md?sv(B.query):B.query||{}},ut,{redirectedFrom:void 0,href:k})}function I(B){return typeof B=="string"?Qa(e,B,l.value.path):ce({},B)}function D(B,G){if(c!==B)return nr(we.NAVIGATION_CANCELLED,{from:G,to:B})}function w(B){return N(B)}function X(B){return w(ce(I(B),{replace:!0}))}function O(B,G){const j=B.matched[B.matched.length-1];if(j&&j.redirect){const{redirect:ut}=j;let M=typeof ut=="function"?ut(B,G):ut;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=I(M):{path:M},M.params={}),ce({query:B.query,hash:B.hash,params:M.path!=null?{}:B.params},M)}}function N(B,G){const j=c=h(B),ut=l.value,M=B.state,L=B.force,k=B.replace===!0,S=O(j,ut);if(S)return N(ce(I(S),{state:typeof S=="object"?ce({},M,S.state):M,force:L,replace:k}),G||j);const tt=j;tt.redirectedFrom=G;let Q;return!L&&W_(i,ut,j)&&(Q=nr(we.NAVIGATION_DUPLICATED,{to:tt,from:ut}),b(ut,ut,!0,!1)),(Q?Promise.resolve(Q):T(tt,ut)).catch(ot=>si(ot)?si(ot,we.NAVIGATION_GUARD_REDIRECT)?ot:R(ot):$(ot,tt,ut)).then(ot=>{if(ot){if(si(ot,we.NAVIGATION_GUARD_REDIRECT))return N(ce({replace:k},I(ot.to),{state:typeof ot.to=="object"?ce({},M,ot.to.state):M,force:L}),G||tt)}else ot=et(tt,ut,!0,k,M);return A(tt,ut,ot),ot})}function U(B,G){const j=D(B,G);return j?Promise.reject(j):Promise.resolve()}function E(B){const G=Y.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(B):B()}function T(B,G){let j;const[ut,M,L]=ov(B,G);j=el(ut.reverse(),"beforeRouteLeave",B,G);for(const S of ut)S.leaveGuards.forEach(tt=>{j.push(Bi(tt,B,G))});const k=U.bind(null,B,G);return j.push(k),yt(j).then(()=>{j=[];for(const S of r.list())j.push(Bi(S,B,G));return j.push(k),yt(j)}).then(()=>{j=el(M,"beforeRouteUpdate",B,G);for(const S of M)S.updateGuards.forEach(tt=>{j.push(Bi(tt,B,G))});return j.push(k),yt(j)}).then(()=>{j=[];for(const S of L)if(S.beforeEnter)if(kn(S.beforeEnter))for(const tt of S.beforeEnter)j.push(Bi(tt,B,G));else j.push(Bi(S.beforeEnter,B,G));return j.push(k),yt(j)}).then(()=>(B.matched.forEach(S=>S.enterCallbacks={}),j=el(L,"beforeRouteEnter",B,G,E),j.push(k),yt(j))).then(()=>{j=[];for(const S of o.list())j.push(Bi(S,B,G));return j.push(k),yt(j)}).catch(S=>si(S,we.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function A(B,G,j){a.list().forEach(ut=>E(()=>ut(B,G,j)))}function et(B,G,j,ut,M){const L=D(B,G);if(L)return L;const k=G===Ri,S=Ws?history.state:{};j&&(ut||k?s.replace(B.fullPath,ce({scroll:k&&S&&S.scroll},M)):s.push(B.fullPath,M)),l.value=B,b(B,G,j,k),R()}let nt;function rt(){nt||(nt=s.listen((B,G,j)=>{if(!lt.listening)return;const ut=h(B),M=O(ut,lt.currentRoute.value);if(M){N(ce(M,{replace:!0,force:!0}),ut).catch(kr);return}c=ut;const L=l.value;Ws&&J_(pd(L.fullPath,j.delta),La()),T(ut,L).catch(k=>si(k,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?k:si(k,we.NAVIGATION_GUARD_REDIRECT)?(N(ce(I(k.to),{force:!0}),ut).then(S=>{si(S,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===Kl.pop&&s.go(-1,!1)}).catch(kr),Promise.reject()):(j.delta&&s.go(-j.delta,!1),$(k,ut,L))).then(k=>{k=k||et(ut,L,!1),k&&(j.delta&&!si(k,we.NAVIGATION_CANCELLED)?s.go(-j.delta,!1):j.type===Kl.pop&&si(k,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),A(ut,L,k)}).catch(kr)}))}let mt=xr(),H=xr(),z;function $(B,G,j){R(B);const ut=H.list();return ut.length?ut.forEach(M=>M(B,G,j)):console.error(B),Promise.reject(B)}function ht(){return z&&l.value!==Ri?Promise.resolve():new Promise((B,G)=>{mt.add([B,G])})}function R(B){return z||(z=!B,rt(),mt.list().forEach(([G,j])=>B?j(B):G()),mt.reset()),B}function b(B,G,j,ut){const{scrollBehavior:M}=n;if(!Ws||!M)return Promise.resolve();const L=!j&&Q_(pd(B.fullPath,0))||(ut||!j)&&history.state&&history.state.scroll||null;return Qc().then(()=>M(B,G,L)).then(k=>k&&Z_(k)).catch(k=>$(k,B,G))}const ct=B=>s.go(B);let gt;const Y=new Set,lt={currentRoute:l,listening:!0,addRoute:p,removeRoute:x,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:v,resolve:h,options:n,push:w,replace:X,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:ht,install(B){B.component("RouterLink",Cv),B.component("RouterView",Dv),B.config.globalProperties.$router=lt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>de(l)}),Ws&&!gt&&l.value===Ri&&(gt=!0,w(s.location).catch(ut=>{}));const G={};for(const ut in Ri)Object.defineProperty(G,ut,{get:()=>l.value[ut],enumerable:!0});B.provide(Da,lt),B.provide(cu,ch(G)),B.provide(Jl,l);const j=B.unmount;Y.add(B),B.unmount=function(){Y.delete(B),Y.size<1&&(c=Ri,nt&&nt(),nt=null,l.value=Ri,gt=!1,z=!1),j()}}};function yt(B){return B.reduce((G,j)=>G.then(()=>E(j)),Promise.resolve())}return lt}function lp(){return Un(Da)}function Uv(n){return Un(cu)}var uu={};(function n(t,e,i,s){var r=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D=="function"&&typeof DOMMatrix=="function",a=function(){if(!t.OffscreenCanvas)return!1;try{var R=new OffscreenCanvas(1,1),b=R.getContext("2d");b.fillRect(0,0,1,1);var ct=R.transferToImageBitmap();b.createPattern(ct,"no-repeat")}catch{return!1}return!0}();function l(){}function c(R){var b=e.exports.Promise,ct=b!==void 0?b:t.Promise;return typeof ct=="function"?new ct(R):(R(l,l),null)}var u=function(R,b){return{transform:function(ct){if(R)return ct;if(b.has(ct))return b.get(ct);var gt=new OffscreenCanvas(ct.width,ct.height),Y=gt.getContext("2d");return Y.drawImage(ct,0,0),b.set(ct,gt),gt},clear:function(){b.clear()}}}(a,new Map),d=function(){var R=Math.floor(16.666666666666668),b,ct,gt={},Y=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(b=function(lt){var yt=Math.random();return gt[yt]=requestAnimationFrame(function B(G){Y===G||Y+R-1<G?(Y=G,delete gt[yt],lt()):gt[yt]=requestAnimationFrame(B)}),yt},ct=function(lt){gt[lt]&&cancelAnimationFrame(gt[lt])}):(b=function(lt){return setTimeout(lt,R)},ct=function(lt){return clearTimeout(lt)}),{frame:b,cancel:ct}}(),f=function(){var R,b,ct={};function gt(Y){function lt(yt,B){Y.postMessage({options:yt||{},callback:B})}Y.init=function(B){var G=B.transferControlToOffscreen();Y.postMessage({canvas:G},[G])},Y.fire=function(B,G,j){if(b)return lt(B,null),b;var ut=Math.random().toString(36).slice(2);return b=c(function(M){function L(k){k.data.callback===ut&&(delete ct[ut],Y.removeEventListener("message",L),b=null,u.clear(),j(),M())}Y.addEventListener("message",L),lt(B,ut),ct[ut]=L.bind(null,{data:{callback:ut}})}),b},Y.reset=function(){Y.postMessage({reset:!0});for(var B in ct)ct[B](),delete ct[B]}}return function(){if(R)return R;if(!i&&r){var Y=["var CONFETTI, SIZE = {}, module = {};","("+n.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([Y])))}catch(lt){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",lt),null}gt(R)}return R}}(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function x(R,b){return b?b(R):R}function v(R){return R!=null}function m(R,b,ct){return x(R&&v(R[b])?R[b]:p[b],ct)}function h(R){return R<0?0:Math.floor(R)}function I(R,b){return Math.floor(Math.random()*(b-R))+R}function D(R){return parseInt(R,16)}function w(R){return R.map(X)}function X(R){var b=String(R).replace(/[^0-9a-f]/gi,"");return b.length<6&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]),{r:D(b.substring(0,2)),g:D(b.substring(2,4)),b:D(b.substring(4,6))}}function O(R){var b=m(R,"origin",Object);return b.x=m(b,"x",Number),b.y=m(b,"y",Number),b}function N(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function U(R){var b=R.getBoundingClientRect();R.width=b.width,R.height=b.height}function E(R){var b=document.createElement("canvas");return b.style.position="fixed",b.style.top="0px",b.style.left="0px",b.style.pointerEvents="none",b.style.zIndex=R,b}function T(R,b,ct,gt,Y,lt,yt,B,G){R.save(),R.translate(b,ct),R.rotate(lt),R.scale(gt,Y),R.arc(0,0,1,yt,B,G),R.restore()}function A(R){var b=R.angle*(Math.PI/180),ct=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-b+(.5*ct-Math.random()*ct),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function et(R,b){b.x+=Math.cos(b.angle2D)*b.velocity+b.drift,b.y+=Math.sin(b.angle2D)*b.velocity+b.gravity,b.velocity*=b.decay,b.flat?(b.wobble=0,b.wobbleX=b.x+10*b.scalar,b.wobbleY=b.y+10*b.scalar,b.tiltSin=0,b.tiltCos=0,b.random=1):(b.wobble+=b.wobbleSpeed,b.wobbleX=b.x+10*b.scalar*Math.cos(b.wobble),b.wobbleY=b.y+10*b.scalar*Math.sin(b.wobble),b.tiltAngle+=.1,b.tiltSin=Math.sin(b.tiltAngle),b.tiltCos=Math.cos(b.tiltAngle),b.random=Math.random()+2);var ct=b.tick++/b.totalTicks,gt=b.x+b.random*b.tiltCos,Y=b.y+b.random*b.tiltSin,lt=b.wobbleX+b.random*b.tiltCos,yt=b.wobbleY+b.random*b.tiltSin;if(R.fillStyle="rgba("+b.color.r+", "+b.color.g+", "+b.color.b+", "+(1-ct)+")",R.beginPath(),o&&b.shape.type==="path"&&typeof b.shape.path=="string"&&Array.isArray(b.shape.matrix))R.fill(z(b.shape.path,b.shape.matrix,b.x,b.y,Math.abs(lt-gt)*.1,Math.abs(yt-Y)*.1,Math.PI/10*b.wobble));else if(b.shape.type==="bitmap"){var B=Math.PI/10*b.wobble,G=Math.abs(lt-gt)*.1,j=Math.abs(yt-Y)*.1,ut=b.shape.bitmap.width*b.scalar,M=b.shape.bitmap.height*b.scalar,L=new DOMMatrix([Math.cos(B)*G,Math.sin(B)*G,-Math.sin(B)*j,Math.cos(B)*j,b.x,b.y]);L.multiplySelf(new DOMMatrix(b.shape.matrix));var k=R.createPattern(u.transform(b.shape.bitmap),"no-repeat");k.setTransform(L),R.globalAlpha=1-ct,R.fillStyle=k,R.fillRect(b.x-ut/2,b.y-M/2,ut,M),R.globalAlpha=1}else if(b.shape==="circle")R.ellipse?R.ellipse(b.x,b.y,Math.abs(lt-gt)*b.ovalScalar,Math.abs(yt-Y)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI):T(R,b.x,b.y,Math.abs(lt-gt)*b.ovalScalar,Math.abs(yt-Y)*b.ovalScalar,Math.PI/10*b.wobble,0,2*Math.PI);else if(b.shape==="star")for(var S=Math.PI/2*3,tt=4*b.scalar,Q=8*b.scalar,ot=b.x,at=b.y,_t=5,q=Math.PI/_t;_t--;)ot=b.x+Math.cos(S)*Q,at=b.y+Math.sin(S)*Q,R.lineTo(ot,at),S+=q,ot=b.x+Math.cos(S)*tt,at=b.y+Math.sin(S)*tt,R.lineTo(ot,at),S+=q;else R.moveTo(Math.floor(b.x),Math.floor(b.y)),R.lineTo(Math.floor(b.wobbleX),Math.floor(Y)),R.lineTo(Math.floor(lt),Math.floor(yt)),R.lineTo(Math.floor(gt),Math.floor(b.wobbleY));return R.closePath(),R.fill(),b.tick<b.totalTicks}function nt(R,b,ct,gt,Y){var lt=b.slice(),yt=R.getContext("2d"),B,G,j=c(function(ut){function M(){B=G=null,yt.clearRect(0,0,gt.width,gt.height),u.clear(),Y(),ut()}function L(){i&&!(gt.width===s.width&&gt.height===s.height)&&(gt.width=R.width=s.width,gt.height=R.height=s.height),!gt.width&&!gt.height&&(ct(R),gt.width=R.width,gt.height=R.height),yt.clearRect(0,0,gt.width,gt.height),lt=lt.filter(function(k){return et(yt,k)}),lt.length?B=d.frame(L):M()}B=d.frame(L),G=M});return{addFettis:function(ut){return lt=lt.concat(ut),j},canvas:R,promise:j,reset:function(){B&&d.cancel(B),G&&G()}}}function rt(R,b){var ct=!R,gt=!!m(b||{},"resize"),Y=!1,lt=m(b,"disableForReducedMotion",Boolean),yt=r&&!!m(b||{},"useWorker"),B=yt?f():null,G=ct?N:U,j=R&&B?!!R.__confetti_initialized:!1,ut=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,M;function L(S,tt,Q){for(var ot=m(S,"particleCount",h),at=m(S,"angle",Number),_t=m(S,"spread",Number),q=m(S,"startVelocity",Number),C=m(S,"decay",Number),_=m(S,"gravity",Number),y=m(S,"drift",Number),F=m(S,"colors",w),it=m(S,"ticks",Number),V=m(S,"shapes"),Et=m(S,"scalar"),St=!!m(S,"flat"),vt=O(S),Pt=ot,bt=[],At=R.width*vt.x,Ft=R.height*vt.y;Pt--;)bt.push(A({x:At,y:Ft,angle:at,spread:_t,startVelocity:q,color:F[Pt%F.length],shape:V[I(0,V.length)],ticks:it,decay:C,gravity:_,drift:y,scalar:Et,flat:St}));return M?M.addFettis(bt):(M=nt(R,bt,G,tt,Q),M.promise)}function k(S){var tt=lt||m(S,"disableForReducedMotion",Boolean),Q=m(S,"zIndex",Number);if(tt&&ut)return c(function(q){q()});ct&&M?R=M.canvas:ct&&!R&&(R=E(Q),document.body.appendChild(R)),gt&&!j&&G(R);var ot={width:R.width,height:R.height};B&&!j&&B.init(R),j=!0,B&&(R.__confetti_initialized=!0);function at(){if(B){var q={getBoundingClientRect:function(){if(!ct)return R.getBoundingClientRect()}};G(q),B.postMessage({resize:{width:q.width,height:q.height}});return}ot.width=ot.height=null}function _t(){M=null,gt&&(Y=!1,t.removeEventListener("resize",at)),ct&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,j=!1)}return gt&&!Y&&(Y=!0,t.addEventListener("resize",at,!1)),B?B.fire(S,ot,_t):L(S,ot,_t)}return k.reset=function(){B&&B.reset(),M&&M.reset()},k}var mt;function H(){return mt||(mt=rt(null,{useWorker:!0,resize:!0})),mt}function z(R,b,ct,gt,Y,lt,yt){var B=new Path2D(R),G=new Path2D;G.addPath(B,new DOMMatrix(b));var j=new Path2D;return j.addPath(G,new DOMMatrix([Math.cos(yt)*Y,Math.sin(yt)*Y,-Math.sin(yt)*lt,Math.cos(yt)*lt,ct,gt])),j}function $(R){if(!o)throw new Error("path confetti are not supported in this browser");var b,ct;typeof R=="string"?b=R:(b=R.path,ct=R.matrix);var gt=new Path2D(b),Y=document.createElement("canvas"),lt=Y.getContext("2d");if(!ct){for(var yt=1e3,B=yt,G=yt,j=0,ut=0,M,L,k=0;k<yt;k+=2)for(var S=0;S<yt;S+=2)lt.isPointInPath(gt,k,S,"nonzero")&&(B=Math.min(B,k),G=Math.min(G,S),j=Math.max(j,k),ut=Math.max(ut,S));M=j-B,L=ut-G;var tt=10,Q=Math.min(tt/M,tt/L);ct=[Q,0,0,Q,-Math.round(M/2+B)*Q,-Math.round(L/2+G)*Q]}return{type:"path",path:b,matrix:ct}}function ht(R){var b,ct=1,gt="#000000",Y='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?b=R:(b=R.text,ct="scalar"in R?R.scalar:ct,Y="fontFamily"in R?R.fontFamily:Y,gt="color"in R?R.color:gt);var lt=10*ct,yt=""+lt+"px "+Y,B=new OffscreenCanvas(lt,lt),G=B.getContext("2d");G.font=yt;var j=G.measureText(b),ut=Math.ceil(j.actualBoundingBoxRight+j.actualBoundingBoxLeft),M=Math.ceil(j.actualBoundingBoxAscent+j.actualBoundingBoxDescent),L=2,k=j.actualBoundingBoxLeft+L,S=j.actualBoundingBoxAscent+L;ut+=L+L,M+=L+L,B=new OffscreenCanvas(ut,M),G=B.getContext("2d"),G.font=yt,G.fillStyle=gt,G.fillText(b,k,S);var tt=1/ct;return{type:"bitmap",bitmap:B.transferToImageBitmap(),matrix:[tt,0,0,tt,-ut*tt/2,-M*tt/2]}}e.exports=function(){return H().apply(this,arguments)},e.exports.reset=function(){H().reset()},e.exports.create=rt,e.exports.shapeFromPath=$,e.exports.shapeFromText=ht})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),uu,!1);const Nv=uu.exports;uu.exports.create;const Ov={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden","user-select":"none"}},Fv={style:{height:"32px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px",gap:"8px"}},Bv={style:{display:"flex","align-items":"center",gap:"12px","font-size":"11px","font-weight":"bold","white-space":"nowrap"}},zv={style:{color:"#00d2ff",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 电源输入电压"},kv={style:{color:"#ffd166",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"左纵轴: 芯片输出电压"},Vv={style:{color:"#06d6a0",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 电源输入电流"},Hv={style:{color:"#ef476f",display:"flex","align-items":"center",gap:"4px",cursor:"pointer"},title:"右纵轴: 芯片负载电流"},Gv={style:{height:"30px","background-color":"#15191e","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-size":"11px",gap:"12px","overflow-x":"auto"}},Wv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},$v={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Xv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #1e3a8a"}},jv=["disabled"],Yv=["disabled"],qv={style:{display:"flex","align-items":"center",gap:"2px"}},Kv=["onClick","title"],Zv={style:{display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},Jv={style:{display:"flex","align-items":"center",gap:"3px",color:"#cbd5e1",cursor:"pointer"},title:"自动根据数据峰值伸缩"},Qv={style:{display:"flex","align-items":"center",gap:"3px",background:"#0f172a",padding:"1px 6px","border-radius":"3px",border:"1px solid #065f46"}},t0=["disabled"],e0=["disabled"],n0={style:{display:"flex","align-items":"center",gap:"2px"}},i0=["onClick","title"],s0={style:{"font-weight":"bold","border-bottom":"1px solid #2d3748","padding-bottom":"2px","margin-bottom":"3px",display:"flex","justify-content":"space-between",gap:"10px"}},r0={style:{color:"#94a3b8"}},o0={style:{color:"#ecc94b"}},a0={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"2px 10px"}},fo=300,l0=wi({__name:"WaveformChart",props:{latestSample:{}},setup(n,{expose:t}){const e=n,i=Yt(null),s=Yt(null),r=yn({vin:!0,vout:!0,iin:!0,iout:!0}),o=yn({auto:!0,min:0,max:20}),a=yn({auto:!0,min:0,max:5});function l(N){o.auto=!1,o.min=0,o.max=N}function c(N){a.auto=!1,a.min=0,a.max=N}const u=[];let d=0;const f=Yt(null),p=Yt(0),x=Yt(0);function v(N){u.push(N),u.length>fo&&u.shift()}gs(()=>e.latestSample,N=>{N&&v(N)});function m(){const N=s.value;if(!N||!i.value)return;const U=i.value.clientWidth,E=i.value.clientHeight;if(U===0||E===0)return;const T=window.devicePixelRatio||1;N.width=Math.floor(U*T),N.height=Math.floor(E*T);const A=N.getContext("2d");if(!A)return;A.scale(T,T),A.fillStyle="#121519",A.fillRect(0,0,U,E);const et=52,nt=52,rt=22,mt=22,H=U-et-nt,z=E-rt-mt;if(H<=10||z<=10)return;let $=o.min,ht=o.max;if(o.auto){let G=10,j=0;if(u.length>0){let ut=0,M=0;if(u.forEach(L=>{r.vin&&(L.vin>ut&&(ut=L.vin),L.vin<M&&(M=L.vin)),r.vout&&(L.vout>ut&&(ut=L.vout),L.vout<M&&(M=L.vout))}),ut>0){const L=ut*1.15;L<=15?G=Math.max(5,Math.ceil(L)):L<=30?G=Math.ceil(L/5)*5:L<=100?G=Math.ceil(L/10)*10:G=Math.ceil(L/20)*20}}$=j,ht=G,o.min=$,o.max=ht}ht<=$&&(ht=$+1);const R=ht-$;let b=a.min,ct=a.max;if(a.auto){let G=3,j=0;if(u.length>0){let ut=0,M=0;if(u.forEach(L=>{r.iin&&(L.iin>ut&&(ut=L.iin),L.iin<M&&(M=L.iin)),r.iout&&(L.iout>ut&&(ut=L.iout),L.iout<M&&(M=L.iout))}),ut>0){const L=ut*1.2;L<=2?G=Math.max(.5,Math.ceil(L*10)/10):L<=10?G=Math.ceil(L):G=Math.ceil(L/2)*2}}b=j,ct=G,a.min=b,a.max=ct}ct<=b&&(ct=b+.1);const gt=ct-b,Y=5,lt=8;A.strokeStyle="#1e293b",A.lineWidth=1,A.setLineDash([3,3]);for(let G=0;G<=Y;G++){const j=rt+z/Y*G;A.beginPath(),A.moveTo(et,j),A.lineTo(et+H,j),A.stroke()}for(let G=0;G<=lt;G++){const j=et+H/lt*G;A.beginPath(),A.moveTo(j,rt),A.lineTo(j,rt+z),A.stroke()}A.setLineDash([]),A.strokeStyle="#334155",A.lineWidth=1,A.strokeRect(et,rt,H,z),A.font='10px "Consolas", monospace',A.textAlign="right",A.textBaseline="middle",A.fillStyle="#38bdf8";for(let G=0;G<=Y;G++){const j=rt+z/Y*G,ut=ht-R/Y*G,M=R>=10?`${ut.toFixed(1)}V`:`${ut.toFixed(2)}V`;A.fillText(M,et-6,j),A.strokeStyle="#0284c7",A.beginPath(),A.moveTo(et-4,j),A.lineTo(et,j),A.stroke()}A.textAlign="left",A.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.fillStyle="#00d2ff",A.fillText("⚡ 电压 (V)",et-34,rt-8),A.font='10px "Consolas", monospace',A.textAlign="left",A.textBaseline="middle",A.fillStyle="#34d399";for(let G=0;G<=Y;G++){const j=rt+z/Y*G,ut=ct-gt/Y*G,M=gt>=5?`${ut.toFixed(2)}A`:`${ut.toFixed(3)}A`;A.fillText(M,et+H+6,j),A.strokeStyle="#059669",A.beginPath(),A.moveTo(et+H,j),A.lineTo(et+H+4,j),A.stroke()}if(A.textAlign="right",A.font='bold 10px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.fillStyle="#06d6a0",A.fillText("🔋 电流 (A)",et+H+34,rt-8),A.font='10px "Consolas", monospace',A.fillStyle="#64748b",A.textAlign="center",A.textBaseline="top",u.length>1){const G=u[0].t,j=u[u.length-1].t,ut=Math.max(.1,(j-G)/1e3);for(let M=0;M<=lt;M+=2){const L=et+H/lt*M,k=ut*(1-M/lt),S=M===lt?"0.0s":`-${k.toFixed(1)}s`;A.fillText(S,L,rt+z+5)}}else A.fillText("时间轴 (Time)",et+H/2,rt+z+5);if(u.length<2){A.fillStyle="#475569",A.font='12px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',A.textAlign="center",A.textBaseline="middle",A.fillText("⚡ 仪器待机中，开始测试后将实时连续绘制高频电压与电流波形...",et+H/2,rt+z/2);return}A.save(),A.beginPath(),A.rect(et,rt,H,z),A.clip();function yt(G,j){if(!A)return;A.strokeStyle=j,A.lineWidth=1.8,A.beginPath();const ut=u.length;for(let M=0;M<ut;M++){const L=et+M/(fo-1)*H,k=u[M][G],S=rt+z-(k-$)/R*z;M===0?A.moveTo(L,S):A.lineTo(L,S)}A.stroke()}function B(G,j){if(!A)return;A.strokeStyle=j,A.lineWidth=1.8,A.beginPath();const ut=u.length;for(let M=0;M<ut;M++){const L=et+M/(fo-1)*H,k=u[M][G],S=rt+z-(k-b)/gt*z;M===0?A.moveTo(L,S):A.lineTo(L,S)}A.stroke()}if(r.vin&&yt("vin","#00d2ff"),r.vout&&yt("vout","#ffd166"),r.iin&&B("iin","#06d6a0"),r.iout&&B("iout","#ef476f"),f.value&&p.value>=et&&p.value<=et+H){A.strokeStyle="#94a3b8",A.lineWidth=1,A.setLineDash([2,2]),A.beginPath(),A.moveTo(p.value,rt),A.lineTo(p.value,rt+z),A.stroke(),A.setLineDash([]);const G=f.value;if(r.vin){const j=rt+z-(G.vin-$)/R*z;A.fillStyle="#00d2ff",A.beginPath(),A.arc(p.value,j,3.5,0,Math.PI*2),A.fill()}if(r.vout){const j=rt+z-(G.vout-$)/R*z;A.fillStyle="#ffd166",A.beginPath(),A.arc(p.value,j,3.5,0,Math.PI*2),A.fill()}if(r.iin){const j=rt+z-(G.iin-b)/gt*z;A.fillStyle="#06d6a0",A.beginPath(),A.arc(p.value,j,3.5,0,Math.PI*2),A.fill()}if(r.iout){const j=rt+z-(G.iout-b)/gt*z;A.fillStyle="#ef476f",A.beginPath(),A.arc(p.value,j,3.5,0,Math.PI*2),A.fill()}}A.restore()}function h(N){if(!i.value)return;const U=i.value.getBoundingClientRect(),E=N.clientX-U.left,T=N.clientY-U.top,A=52,nt=U.width-A-52;if(E>=A&&E<=A+nt&&u.length>1){const rt=(E-A)/nt,mt=Math.min(u.length-1,Math.max(0,Math.round(rt*(fo-1)))),H=u[mt];if(H){const z=u[0].t,ht=(u[u.length-1].t-z)/1e3,R=(H.t-z)/1e3,b=ht-R;f.value={idx:mt+1,relTime:b>.05?`-${b.toFixed(2)}s`:"最新点",vin:H.vin,vout:H.vout,iin:H.iin,iout:H.iout},p.value=E,x.value=T;return}}f.value=null}function I(){f.value=null}function D(N){if(!i.value)return;const U=i.value.getBoundingClientRect(),E=N.clientX-U.left,T=U.width,A=52,et=52,nt=N.deltaY<0?-1:1;if(E<=A+35){N.preventDefault(),o.auto=!1;const rt=Math.max(1,o.max-o.min),mt=rt>20?5:rt>5?2:1;o.max=Math.max(o.min+1,Math.round((o.max+nt*mt)*10)/10)}else if(E>=T-et-35){N.preventDefault(),a.auto=!1;const rt=Math.max(.2,a.max-a.min),mt=rt>5?1:rt>1?.5:.2;a.max=Math.max(a.min+.2,Math.round((a.max+nt*mt)*10)/10)}}function w(N){if(!i.value)return;const U=i.value.getBoundingClientRect(),E=N.clientX-U.left,T=U.width;E<=52+35?o.auto=!0:E>=T-52-35&&(a.auto=!0)}function X(){u.length=0,f.value=null}function O(){m(),d=requestAnimationFrame(O)}return cr(()=>{O()}),ur(()=>{cancelAnimationFrame(d)}),t({clear:X}),(N,U)=>(Ot(),Bt("div",Ov,[g("div",Fv,[U[18]||(U[18]=g("span",{style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12px",display:"flex","align-items":"center",gap:"6px","white-space":"nowrap"}},[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"#00d2ff","stroke-width":"2"},[g("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})]),Dt(" 实时参数时域波形 (双纵坐标轴) ")],-1)),g("div",Bv,[g("label",zv,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[0]||(U[0]=E=>r.vin=E)},null,512),[[Fi,r.vin]]),U[14]||(U[14]=Dt(" Vin (电源电压) ",-1))]),g("label",kv,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[1]||(U[1]=E=>r.vout=E)},null,512),[[Fi,r.vout]]),U[15]||(U[15]=Dt(" Vout (负载电压) ",-1))]),g("label",Vv,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[2]||(U[2]=E=>r.iin=E)},null,512),[[Fi,r.iin]]),U[16]||(U[16]=Dt(" Iin (电源电流) ",-1))]),g("label",Hv,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[3]||(U[3]=E=>r.iout=E)},null,512),[[Fi,r.iout]]),U[17]||(U[17]=Dt(" Iout (负载电流) ",-1))])]),g("button",{class:"btn",style:{padding:"2px 8px","font-size":"10.5px","background-color":"#2d3748",color:"#a0aec0",border:"1px solid #4a5568"},onClick:X,title:"清空当前波形缓存"}," 清空波形 ")]),g("div",Gv,[g("div",Wv,[U[24]||(U[24]=g("span",{style:{color:"#00d2ff","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," ⚡ 左纵轴 (电压): ",-1)),g("label",$v,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[4]||(U[4]=E=>o.auto=E)},null,512),[[Fi,o.auto]]),U[19]||(U[19]=g("span",null,"自适应",-1))]),g("div",Xv,[U[20]||(U[20]=g("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),ee(g("input",{type:"number","onUpdate:modelValue":U[5]||(U[5]=E=>o.min=E),disabled:o.auto,onChange:U[6]||(U[6]=E=>o.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围下限",step:"1"},null,40,jv),[[Fe,o.min,void 0,{number:!0}]]),U[21]||(U[21]=g("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),ee(g("input",{type:"number","onUpdate:modelValue":U[7]||(U[7]=E=>o.max=E),disabled:o.auto,onChange:U[8]||(U[8]=E=>o.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#38bdf8","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电压范围上限",step:"1"},null,40,Yv),[[Fe,o.max,void 0,{number:!0}]]),U[22]||(U[22]=g("span",{style:{color:"#38bdf8","font-weight":"bold","font-size":"10.5px"}},"V",-1))]),g("div",qv,[U[23]||(U[23]=g("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ot(),Bt(Re,null,vi([15,30,60],E=>g("button",{key:E,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:T=>l(E),title:`锁定 0 ~ ${E}V 范围`},xt(E)+"V ",9,Kv)),64))])]),g("div",Zv,[U[30]||(U[30]=g("span",{style:{color:"#06d6a0","font-weight":"bold",display:"flex","align-items":"center",gap:"3px"}}," 🔋 右纵轴 (电流): ",-1)),g("label",Jv,[ee(g("input",{type:"checkbox","onUpdate:modelValue":U[9]||(U[9]=E=>a.auto=E)},null,512),[[Fi,a.auto]]),U[25]||(U[25]=g("span",null,"自适应",-1))]),g("div",Qv,[U[26]||(U[26]=g("span",{style:{color:"#64748b","font-size":"10px"}},"Min:",-1)),ee(g("input",{type:"number","onUpdate:modelValue":U[10]||(U[10]=E=>a.min=E),disabled:a.auto,onChange:U[11]||(U[11]=E=>a.auto=!1),style:{width:"38px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围下限",step:"0.5"},null,40,t0),[[Fe,a.min,void 0,{number:!0}]]),U[27]||(U[27]=g("span",{style:{color:"#64748b","font-size":"10px"}},"~ Max:",-1)),ee(g("input",{type:"number","onUpdate:modelValue":U[12]||(U[12]=E=>a.max=E),disabled:a.auto,onChange:U[13]||(U[13]=E=>a.auto=!1),style:{width:"44px",padding:"1px 2px",background:"#1e293b",border:"1px solid #334155",color:"#34d399","font-family":"'Consolas', monospace","font-size":"10.5px","border-radius":"2px","text-align":"center"},title:"电流范围上限",step:"0.5"},null,40,e0),[[Fe,a.max,void 0,{number:!0}]]),U[28]||(U[28]=g("span",{style:{color:"#34d399","font-weight":"bold","font-size":"10.5px"}},"A",-1))]),g("div",n0,[U[29]||(U[29]=g("span",{style:{color:"#64748b","font-size":"10px"}},"预设:",-1)),(Ot(),Bt(Re,null,vi([2,5,10],E=>g("button",{key:E,class:"btn",style:{padding:"1px 5px","font-size":"10px",background:"#1e293b",color:"#94a3b8",border:"1px solid #334155"},onClick:T=>c(E),title:`锁定 0 ~ ${E}A 范围`},xt(E)+"A ",9,i0)),64))])])]),g("div",{ref_key:"containerRef",ref:i,style:{flex:"1",width:"100%",position:"relative","background-color":"#121519",cursor:"crosshair",overflow:"hidden"},onMousemove:h,onMouseleave:I,onWheel:D,onDblclick:w},[g("canvas",{ref_key:"canvasRef",ref:s,style:{width:"100%",height:"100%",display:"block"}},null,512),f.value?(Ot(),Bt("div",{key:0,style:ye([{left:`${p.value}px`,top:`${x.value}px`},{position:"absolute",transform:"translate(-50%, -100%)","margin-top":"-10px","pointer-events":"none","z-index":"20","background-color":"rgba(22, 27, 34, 0.95)",border:"1px solid #38bdf8","border-radius":"4px",padding:"5px 8px","font-family":"'Consolas', monospace","font-size":"10.5px",color:"#e2e8f0","box-shadow":"0 4px 12px rgba(0,0,0,0.7)","white-space":"nowrap"}])},[g("div",s0,[g("span",r0,"采样点 #"+xt(f.value.idx),1),g("span",o0,xt(f.value.relTime),1)]),g("div",a0,[g("div",null,[U[31]||(U[31]=g("span",{style:{color:"#00d2ff","font-weight":"bold"}},"Vin:",-1)),Dt(" "+xt(f.value.vin.toFixed(3))+"V",1)]),g("div",null,[U[32]||(U[32]=g("span",{style:{color:"#06d6a0","font-weight":"bold"}},"Iin:",-1)),Dt(" "+xt(f.value.iin.toFixed(3))+"A",1)]),g("div",null,[U[33]||(U[33]=g("span",{style:{color:"#ffd166","font-weight":"bold"}},"Vout:",-1)),Dt(" "+xt(f.value.vout.toFixed(3))+"V",1)]),g("div",null,[U[34]||(U[34]=g("span",{style:{color:"#ef476f","font-weight":"bold"}},"Iout:",-1)),Dt(" "+xt(f.value.iout.toFixed(3))+"A",1)])])],4)):De("",!0)],544)]))}}),c0=au(l0,[["__scopeId","data-v-50507eef"]]),u0={class:"modal-card",style:{"max-width":"680px"}},d0={class:"modal-header"},f0={class:"modal-body",style:{padding:"12px",gap:"8px",display:"flex","flex-direction":"column"}},h0={key:0,style:{padding:"30px","text-align":"center",color:"#718096"}},p0={style:{flex:"1",display:"flex","flex-direction":"column",gap:"4px"}},m0={style:{display:"flex","align-items":"center",gap:"8px"}},g0={style:{"font-weight":"bold",color:"#e2e8f0","font-size":"12.5px"}},_0={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"monospace"}},v0={style:{"font-size":"11px",color:"#a0aec0","font-family":"'Consolas', monospace",display:"flex",gap:"14px"}},x0={style:{color:"#ecc94b"}},y0={style:{color:"#63b3ed"}},b0={style:{color:"#e2e8f0"}},M0={style:{color:"#48bb78"}},S0={style:{display:"flex","align-items":"center",gap:"6px"}},E0=["onClick"],w0=["onClick"],T0=["onClick"],A0={class:"modal-footer"},C0=wi({__name:"HistoryModal",props:{isOpen:{type:Boolean},records:{}},emits:["close","open-result","export-csv","delete-record"],setup(n){return(t,e)=>n.isOpen?(Ot(),Bt("div",{key:0,class:"modal-backdrop",onClick:e[4]||(e[4]=as(i=>t.$emit("close"),["self"]))},[g("div",u0,[g("div",d0,[e[5]||(e[5]=g("span",{style:{display:"flex","align-items":"center",gap:"8px",color:"#63b3ed"}},[g("svg",{class:"icon-md",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("circle",{cx:"12",cy:"12",r:"10"}),g("polyline",{points:"12 6 12 12 16 14"})]),Dt(" 历史测试数据查看 (IndexedDB 最近 5 条) ")],-1)),g("button",{class:"btn",style:{padding:"2px 6px"},onClick:e[0]||(e[0]=i=>t.$emit("close"))},"✕")]),g("div",f0,[n.records.length===0?(Ot(),Bt("div",h0," 暂无历史测试数据，执行测试后系统将自动保存最近 5 条测试记录至本地 IndexedDB。 ")):De("",!0),(Ot(!0),Bt(Re,null,vi(n.records,i=>{var s,r;return Ot(),Bt("div",{key:i.id,style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between",gap:"10px",transition:"border-color 0.15s"},onMouseenter:e[1]||(e[1]=o=>o.currentTarget.style.borderColor="#4a5568"),onMouseleave:e[2]||(e[2]=o=>o.currentTarget.style.borderColor="#2d3748")},[g("div",p0,[g("div",m0,[g("span",g0,xt(i.title),1),g("span",_0,xt(new Date(i.createdAt).toLocaleString()),1)]),g("div",v0,[g("span",null,[e[6]||(e[6]=Dt("电压: ",-1)),g("b",x0,xt(i.config.voltageMin)+"V ~ "+xt(i.config.voltageMax)+"V",1)]),g("span",null,[e[7]||(e[7]=Dt("负载: ",-1)),g("b",y0,xt(i.config.loadMin)+" ~ "+xt(i.config.loadMax)+" ("+xt(i.config.loadMode)+")",1)]),g("span",null,[e[8]||(e[8]=Dt("点数: ",-1)),g("b",b0,xt(i.points.length),1)]),g("span",null,[e[9]||(e[9]=Dt("最高效率: ",-1)),g("b",M0,xt(((r=(s=i.summary)==null?void 0:s.maxEfficiency)==null?void 0:r.toFixed(2))??"--")+"%",1)])])]),g("div",S0,[g("button",{class:"btn btn-primary",style:{padding:"5px 12px","font-weight":"bold"},onClick:o=>t.$emit("open-result",i.id),title:"在新窗口打开该条测试记录的 2D 矩阵表和 3D 柱状图"},[...e[10]||(e[10]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),g("polyline",{points:"15 3 21 3 21 9"}),g("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 进入数据查看 ",-1)])],8,E0),g("button",{class:"btn",style:{padding:"5px 8px"},onClick:o=>t.$emit("export-csv",i),title:"导出此条记录为 CSV 文件"},[...e[11]||(e[11]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),g("polyline",{points:"7 10 12 15 17 10"}),g("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1)])],8,w0),g("button",{class:"btn btn-danger",style:{padding:"5px 8px"},onClick:o=>t.$emit("delete-record",i.id),title:"删除此记录"},[...e[12]||(e[12]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("polyline",{points:"3 6 5 6 21 6"}),g("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})],-1)])],8,T0)])],32)}),128))]),g("div",A0,[g("button",{class:"btn",onClick:e[3]||(e[3]=i=>t.$emit("close"))},"关闭")])])])):De("",!0)}}),R0={class:"modal-card",style:{"max-width":"520px"}},P0={class:"modal-header"},L0={class:"modal-body",style:{display:"flex","flex-direction":"column",gap:"10px",padding:"14px"}},D0={style:{"background-color":"#171b22",border:"1px solid #3182ce","border-radius":"6px",padding:"10px 12px",display:"flex","align-items":"center","justify-content":"space-between"}},I0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},U0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},N0={style:{"font-weight":"bold",color:"#ecc94b","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},O0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},F0={style:{display:"flex","align-items":"center",gap:"6px"}},B0=["disabled"],z0={style:{"background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",padding:"10px 12px"}},k0={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},V0={style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},H0={style:{"font-size":"11px","font-family":"monospace",color:"#a0aec0"}},G0={style:{display:"flex","align-items":"center",gap:"6px"}},W0=["disabled"],$0={key:0,style:{padding:"8px 10px","background-color":"#744210","border-radius":"4px",color:"#fbd38d","font-size":"11px"}},X0={class:"modal-footer"},j0=wi({__name:"SerialConfigModal",props:{isOpen:{type:Boolean},psuConnected:{type:Boolean},psuPortName:{},loadConnected:{type:Boolean},loadPortName:{},webSerialSupported:{type:Boolean}},emits:["close","connect-virtual","connect-physical-psu","disconnect-psu","connect-physical-load","disconnect-load"],setup(n){const t=Yt(9600),e=Yt(9600);return(i,s)=>n.isOpen?(Ot(),Bt("div",{key:0,class:"modal-backdrop",onClick:s[9]||(s[9]=as(r=>i.$emit("close"),["self"]))},[g("div",R0,[g("div",P0,[s[10]||(s[10]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#63b3ed" stroke-width="2"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg><span style="font-weight:bold;color:#ffffff;font-size:13px;">仪器串口硬件连接 (Web Serial)</span></div>',1)),g("button",{class:"btn",style:{padding:"2px 6px"},onClick:s[0]||(s[0]=r=>i.$emit("close"))},"✕")]),g("div",L0,[g("div",D0,[s[11]||(s[11]=g("div",null,[g("div",{style:{"font-weight":"bold",color:"#63b3ed","font-size":"12px",display:"flex","align-items":"center",gap:"6px"}},[g("span",{style:{width:"7px",height:"7px","background-color":"#00d2ff","border-radius":"50%"}}),Dt(" 内置仿真演示驱动 (Virtual Simulation) ")]),g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-top":"2px"}}," 无需接入物理仪器即可直接体验 2D 扫描与 3D 动画图谱 ")],-1)),g("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:s[1]||(s[1]=r=>i.$emit("connect-virtual"))}," 启用仿真 ")]),g("div",I0,[g("div",U0,[g("span",N0,[g("span",{style:ye([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.psuConnected?"#48bb78":"#e53e3e"}])},null,4),s[12]||(s[12]=Dt(" 直流电源 (RIGOL DP700) ",-1))]),g("span",O0,xt(n.psuPortName),1)]),g("div",F0,[ee(g("select",{"onUpdate:modelValue":s[2]||(s[2]=r=>t.value=r),disabled:n.psuConnected,style:{flex:"1"}},[...s[13]||(s[13]=[g("option",{value:9600},"9600 bps (标准)",-1),g("option",{value:19200},"19200 bps",-1),g("option",{value:38400},"38400 bps",-1),g("option",{value:115200},"115200 bps",-1)])],8,B0),[[ua,t.value,void 0,{number:!0}]]),n.psuConnected?(Ot(),Bt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[4]||(s[4]=r=>i.$emit("disconnect-psu"))}," 断开 ")):(Ot(),Bt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[3]||(s[3]=r=>i.$emit("connect-physical-psu",t.value))}," 选择 COM 端口 "))])]),g("div",z0,[g("div",k0,[g("span",V0,[g("span",{style:ye([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:n.loadConnected?"#48bb78":"#e53e3e"}])},null,4),s[14]||(s[14]=Dt(" 可编程电子负载 (UNI-T UTL8500) ",-1))]),g("span",H0,xt(n.loadPortName),1)]),g("div",G0,[ee(g("select",{"onUpdate:modelValue":s[5]||(s[5]=r=>e.value=r),disabled:n.loadConnected,style:{flex:"1"}},[...s[15]||(s[15]=[g("option",{value:9600},"9600 bps (标准)",-1),g("option",{value:19200},"19200 bps",-1),g("option",{value:38400},"38400 bps",-1),g("option",{value:115200},"115200 bps",-1)])],8,W0),[[ua,e.value,void 0,{number:!0}]]),n.loadConnected?(Ot(),Bt("button",{key:1,class:"btn btn-danger",style:{padding:"4px 12px"},onClick:s[7]||(s[7]=r=>i.$emit("disconnect-load"))}," 断开 ")):(Ot(),Bt("button",{key:0,class:"btn btn-primary",style:{padding:"4px 12px"},onClick:s[6]||(s[6]=r=>i.$emit("connect-physical-load",e.value))}," 选择 COM 端口 "))])]),n.webSerialSupported?De("",!0):(Ot(),Bt("div",$0,[...s[16]||(s[16]=[Dt(" ⚠️ 当前浏览器未检测到 Web Serial API（推荐 Chrome 或 Edge 浏览器）。您可直接使用上方",-1),g("b",null,"【启用仿真】",-1),Dt("无障碍测试。 ",-1)])]))]),g("div",X0,[g("button",{class:"btn",onClick:s[8]||(s[8]=r=>i.$emit("close"))},"确定")])])])):De("",!0)}});class Y0{constructor(){Qt(this,"connected",!0);Qt(this,"outputOn",!1);Qt(this,"targetVoltage",5);Qt(this,"currentVoltage",0);Qt(this,"lastVoltage",0);Qt(this,"voltageChangeTime",0);Qt(this,"currentLimit",3);Qt(this,"linkedLoad",null)}linkLoad(t){this.linkedLoad=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setOutput(t){this.outputOn=t,t?(this.lastVoltage=this.currentVoltage,this.voltageChangeTime=performance.now()):this.currentVoltage=0}isOutputOn(){return this.outputOn}setVoltage(t){this.lastVoltage=this.outputOn?this.currentVoltage:0,this.targetVoltage=Math.max(0,t),this.voltageChangeTime=performance.now()}setCurrentLimit(t){this.currentLimit=Math.max(.1,t)}measure(){if(!this.connected||!this.outputOn)return{vin:0,iin:0,pin:0};const t=performance.now()-this.voltageChangeTime;if(t<60){const o=Math.min(1,Math.max(0,t/60));this.currentVoltage=this.lastVoltage+(this.targetVoltage-this.lastVoltage)*(1-Math.exp(-o*4))}else this.currentVoltage=this.targetVoltage;const e=(Math.random()-.5)*.012,i=Math.max(0,this.currentVoltage+e);let s=.02;if(this.linkedLoad&&this.linkedLoad.isInputOn()&&i>1){const a=this.linkedLoad.measure(i).pout,c=.938-.006*Math.abs(i-8.8),u=(Math.random()-.5)*.004,d=Math.min(.965,Math.max(.72,c+u)),f=a>.01?a/d:i*.02;s=Math.min(this.currentLimit,f/i+(Math.random()-.5)*.003)}const r=i*s;return{vin:Math.round(i*1e3)/1e3,iin:Math.round(s*1e3)/1e3,pin:Math.round(r*1e3)/1e3}}getTargetVoltage(){return this.targetVoltage}getCurrentLimit(){return this.currentLimit}}class q0{constructor(){Qt(this,"connected",!0);Qt(this,"inputOn",!1);Qt(this,"mode","CC");Qt(this,"targetCurrent",1);Qt(this,"currentCurrent",0);Qt(this,"lastCurrent",0);Qt(this,"targetPower",10);Qt(this,"currentPower",0);Qt(this,"lastPower",0);Qt(this,"targetVoltage",5);Qt(this,"targetResistance",5);Qt(this,"loadChangeTime",0);Qt(this,"linkedSupply",null)}linkSupply(t){this.linkedSupply=t}isConnected(){return this.connected}setConnected(t){this.connected=t}setInput(t){this.inputOn=t,t?(this.lastCurrent=this.currentCurrent,this.lastPower=this.currentPower,this.loadChangeTime=performance.now()):(this.currentCurrent=0,this.currentPower=0)}isInputOn(){return this.inputOn}getMode(){return this.mode}setMode(t){this.mode=t,this.loadChangeTime=performance.now()}setCurrent(t){this.lastCurrent=this.inputOn?this.currentCurrent:0,this.targetCurrent=Math.max(0,t),this.loadChangeTime=performance.now()}setPower(t){this.lastPower=this.inputOn?this.currentPower:0,this.targetPower=Math.max(0,t),this.loadChangeTime=performance.now()}setVoltage(t){this.targetVoltage=Math.max(.1,t),this.loadChangeTime=performance.now()}setResistance(t){this.targetResistance=Math.max(.1,t),this.loadChangeTime=performance.now()}getTargetCurrent(){return this.targetCurrent}getTargetPower(){return this.targetPower}getTargetVoltage(){return this.targetVoltage}getTargetResistance(){return this.targetResistance}measure(t){if(!this.connected||!this.inputOn)return{vout:0,iout:0,pout:0};const e=t??10;if(e<1)return{vout:0,iout:0,pout:0};const i=performance.now()-this.loadChangeTime,s=Math.min(1,Math.max(0,i/50)),r=5;let o=0,a=0;if(this.mode==="CC"){this.currentCurrent=this.lastCurrent+(this.targetCurrent-this.lastCurrent)*(1-Math.exp(-s*4)),o=this.currentCurrent+(Math.random()-.5)*.004;const l=r-o*.015+(Math.random()-.5)*.003;return a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CW"){this.currentPower=this.lastPower+(this.targetPower-this.lastPower)*(1-Math.exp(-s*4)),a=this.currentPower+(Math.random()-.5)*.01;const l=r-a/r*.015+(Math.random()-.5)*.003;return o=a/l,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else if(this.mode==="CV"){const l=this.targetVoltage+(Math.random()-.5)*.003;return o=Math.max(.1,Math.min(15,(e-l)*1.5))+(Math.random()-.5)*.005,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}else{const l=r+(Math.random()-.5)*.003;return o=Math.max(.01,l/this.targetResistance)+(Math.random()-.5)*.002,a=l*o,{vout:Math.max(0,Math.round(l*1e3)/1e3),iout:Math.max(0,Math.round(o*1e3)/1e3),pout:Math.max(0,Math.round(a*1e3)/1e3)}}}}class yr{static setVoltageAndLimit(t,e){return`:APPL CH1,${t.toFixed(3)},${e.toFixed(3)}
`}static setVoltage(t){return`:VOLT ${t.toFixed(3)}
`}static setCurrentLimit(t){return`:CURR ${t.toFixed(3)}
`}static setOutput(t){return`:OUTP CH1,${t?"ON":"OFF"}
`}static measureAll(){return[`:MEAS:VOLT? CH1
`,`:MEAS:CURR? CH1
`,`:MEAS:POWE? CH1
`]}}class gn{static setMode(t){return`:SOUR:FUNC ${t==="CW"?"CP":t}
`}static setCurrent(t){return`:SOUR:CURR ${t.toFixed(3)}
`}static setPower(t){return`:SOUR:POW ${t.toFixed(3)}
`}static setVoltage(t){return`:SOUR:VOLT ${t.toFixed(3)}
`}static setResistance(t){return`:SOUR:RES ${t.toFixed(3)}
`}static setInput(t){return`:SOUR:INP ${t?"ON":"OFF"}
`}static setShort(t){return`:SOUR:SHOR ${t?"ON":"OFF"}
`}static clearProtection(){return`:PROT:CLE
`}static measureAll(){return[`:MEAS:VOLT?
`,`:MEAS:CURR?
`,`:MEAS:POW?
`]}}class Ad{constructor(t){Qt(this,"type");Qt(this,"isVirtual",!0);Qt(this,"port",null);Qt(this,"reader",null);Qt(this,"writer",null);Qt(this,"encoder",null);Qt(this,"decoder",null);Qt(this,"readBuffer","");Qt(this,"isDisconnecting",!1);Qt(this,"onLostCallback",null);Qt(this,"disconnectListener",null);Qt(this,"virtualPsu",new Y0);Qt(this,"virtualLoad",new q0);Qt(this,"state",{connected:!1,portName:"未连接",isVirtual:!0,model:"",baudRate:9600});this.type=t,this.state.model=t==="PSU"?"RIGOL DP700":"UNI-T UTL8500"}setOnDeviceLost(t){this.onLostCallback=t}handleDeviceLost(t){!this.state.connected||this.isDisconnecting||(this.state.connected=!1,this.state.portName="已丢失 (断开连接)",console.error(`[WebSerial 串口丢失] 设备: ${this.type} (${this.state.model}), 原因: ${t}`),this.onLostCallback&&this.onLostCallback(this.type,this.state.model,t))}checkAlive(){return this.state.connected?this.isVirtual&&!(this.type==="PSU"?this.virtualPsu.isConnected():this.virtualLoad.isConnected())?{alive:!1,reason:"虚拟仿真设备已离线"}:{alive:!0}:{alive:!1,reason:"设备连接已断开"}}isWebSerialSupported(){return typeof navigator<"u"&&"serial"in navigator}async connectPhysical(t=9600){if(!this.isWebSerialSupported())throw new Error("当前浏览器不支持 Web Serial API，请使用 Chrome / Edge 浏览器，或使用内置仿真模式。");try{return this.port=await navigator.serial.requestPort(),await this.port.open({baudRate:t}),this.isDisconnecting=!1,"serial"in navigator&&navigator.serial.addEventListener&&(this.disconnectListener=e=>{e.target===this.port&&this.handleDeviceLost("物理 USB 串口硬件已被拔出或连接中断")},navigator.serial.addEventListener("disconnect",this.disconnectListener)),this.encoder=new TextEncoderStream,this.encoder.readable.pipeTo(this.port.writable),this.writer=this.encoder.writable.getWriter(),this.decoder=new TextDecoderStream,this.port.readable.pipeTo(this.decoder.writable),this.reader=this.decoder.readable.getReader(),this.isVirtual=!1,this.state.connected=!0,this.state.isVirtual=!1,this.state.portName=`COM (USB-Serial ${t}bps)`,this.state.baudRate=t,this.startContinuousRead(),!0}catch(e){throw console.error(`Failed to connect physical ${this.type}:`,e),this.disconnect(),e}}connectVirtual(){this.isVirtual=!0,this.isDisconnecting=!1,this.state.connected=!0,this.state.isVirtual=!0,this.state.portName=this.type==="PSU"?"VIRTUAL_DP700 (仿真驱动)":"VIRTUAL_UTL8500 (仿真驱动)",this.type==="PSU"?this.virtualPsu.setConnected(!0):this.virtualLoad.setConnected(!0)}async disconnect(){this.isDisconnecting=!0;try{this.disconnectListener&&"serial"in navigator&&navigator.serial.removeEventListener&&(navigator.serial.removeEventListener("disconnect",this.disconnectListener),this.disconnectListener=null),this.reader&&(await this.reader.cancel().catch(()=>{}),this.reader=null),this.writer&&(await this.writer.close().catch(()=>{}),this.writer=null),this.port&&(await this.port.close().catch(()=>{}),this.port=null)}catch(t){console.warn("Disconnect error:",t)}finally{this.isDisconnecting=!1,this.state.connected=!1,this.state.portName="未连接",this.type==="PSU"?this.virtualPsu.setConnected(!1):this.virtualLoad.setConnected(!1)}}async write(t){if(!this.isVirtual){if(!this.writer||!this.state.connected)throw this.handleDeviceLost("串口未连接或已丢失写入句柄"),new Error("串口未连接或写入句柄丢失");try{await this.writer.write(t)}catch(e){throw this.handleDeviceLost(`向串口发送指令失败 (设备可能已断开): ${(e==null?void 0:e.message)||e}`),e}}}async startContinuousRead(){if(this.reader)try{for(;;){const{value:t,done:e}=await this.reader.read();if(e){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost("串口数据读取流意外终止 (物理设备可能已断开)");break}t&&(this.readBuffer+=t)}}catch(t){this.state.connected&&!this.isDisconnecting&&this.handleDeviceLost(`串口数据流读取异常: ${(t==null?void 0:t.message)||t}`)}}}const us=class us{constructor(){Qt(this,"psu",new Ad("PSU"));Qt(this,"load",new Ad("LOAD"));Qt(this,"onDeviceLostListener",null);this.psu.virtualPsu.linkLoad(this.load.virtualLoad),this.load.virtualLoad.linkSupply(this.psu.virtualPsu),this.psu.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)}),this.load.setOnDeviceLost((t,e,i)=>{this.onDeviceLostListener&&this.onDeviceLostListener(t,e,i)})}setOnDeviceLost(t){this.onDeviceLostListener=t}checkHealth(){const t=this.psu.checkAlive();if(!t.alive)return this.psu.handleDeviceLost(t.reason||"电源健康检查失败"),{ok:!1,failedDevice:"PSU",name:this.psu.state.model,reason:t.reason};const e=this.load.checkAlive();return e.alive?{ok:!0}:(this.load.handleDeviceLost(e.reason||"负载健康检查失败"),{ok:!1,failedDevice:"LOAD",name:this.load.state.model,reason:e.reason})}static getInstance(){return us.instance||(us.instance=new us),us.instance}isBothConnected(){return this.psu.state.connected&&this.load.state.connected}autoConnectVirtual(){this.psu.state.connected||this.psu.connectVirtual(),this.load.state.connected||this.load.connectVirtual()}async setPsuOutput(t,e,i){this.psu.isVirtual?(this.psu.virtualPsu.setOutput(t),this.psu.virtualPsu.setVoltage(e),this.psu.virtualPsu.setCurrentLimit(i)):(await this.psu.write(yr.setVoltageAndLimit(e,i)),await this.psu.write(yr.setOutput(t)))}async setLoadInput(t,e,i){this.load.isVirtual?(this.load.virtualLoad.setInput(t),this.load.virtualLoad.setMode(e),e==="CC"?this.load.virtualLoad.setCurrent(i):this.load.virtualLoad.setPower(i)):(await this.load.write(gn.setMode(e)),e==="CC"?await this.load.write(gn.setCurrent(i)):await this.load.write(gn.setPower(i)),await this.load.write(gn.setInput(t)))}measure(){const t=this.psu.virtualPsu.measure(),e=this.load.virtualLoad.measure(t.vin),i=t.pin>.01?e.pout/t.pin*100:0;return{vin:t.vin,iin:t.iin,pin:t.pin,vout:e.vout,iout:e.iout,pout:e.pout,efficiency:Math.min(100,Math.max(0,Math.round(i*100)/100))}}async setPsuVoltageOnly(t){this.psu.isVirtual?this.psu.virtualPsu.setVoltage(t):await this.psu.write(yr.setVoltage(t))}async setPsuCurrentLimitOnly(t){this.psu.isVirtual?this.psu.virtualPsu.setCurrentLimit(t):await this.psu.write(yr.setCurrentLimit(t))}async setPsuOutputState(t){this.psu.isVirtual?this.psu.virtualPsu.setOutput(t):await this.psu.write(yr.setOutput(t))}async setLoadModeAndValue(t,e){this.load.isVirtual?(this.load.virtualLoad.setMode(t),t==="CC"?this.load.virtualLoad.setCurrent(e):t==="CW"?this.load.virtualLoad.setPower(e):t==="CV"?this.load.virtualLoad.setVoltage(e):t==="CR"&&this.load.virtualLoad.setResistance(e)):(await this.load.write(gn.setMode(t)),t==="CC"?await this.load.write(gn.setCurrent(e)):t==="CW"?await this.load.write(gn.setPower(e)):t==="CV"?await this.load.write(gn.setVoltage(e)):t==="CR"&&await this.load.write(gn.setResistance(e)))}async setLoadInputState(t){this.load.isVirtual?this.load.virtualLoad.setInput(t):await this.load.write(gn.setInput(t))}async setLoadShortState(t){this.load.isVirtual||await this.load.write(gn.setShort(t))}async clearLoadProtectionState(){this.load.isVirtual||await this.load.write(gn.clearProtection())}async sendPsuRawSCPI(t){const e=t.trim();if(!e)return"";if(this.psu.isVirtual){if(e.toUpperCase().includes("*IDN?"))return"RIGOL TECHNOLOGIES,DP711,DP7A234500001,00.01.02";if(e.toUpperCase().includes(":MEAS")){const i=this.psu.virtualPsu.measure();return`${i.vin.toFixed(3)},${i.iin.toFixed(3)},${i.pin.toFixed(3)}`}return"OK (仿真执行)"}return await this.psu.write(e+`
`),"已发送至电源串口"}async sendLoadRawSCPI(t){const e=t.trim();if(!e)return"";if(this.load.isVirtual){if(e.toUpperCase().includes("*IDN?"))return"UNI-T,UTL8511,UTL8500A10098,V1.04";if(e.toUpperCase().includes(":MEAS")){const i=this.load.virtualLoad.measure();return`${i.vout.toFixed(3)},${i.iout.toFixed(3)},${i.pout.toFixed(3)}`}return"OK (仿真执行)"}return await this.load.write(e+`
`),"已发送至负载串口"}async emergencyStopAll(){try{await this.setPsuOutput(!1,0,0),await this.setLoadInput(!1,"CC",0)}catch(t){console.warn("Emergency stop error:",t)}}};Qt(us,"instance");let da=us;const K0="PowerChipTesterDB",Z0=1,En="test_runs",cp=5;function Ia(){return new Promise((n,t)=>{const e=indexedDB.open(K0,Z0);e.onupgradeneeded=i=>{const s=i.target.result;s.objectStoreNames.contains(En)||s.createObjectStore(En,{keyPath:"id"}).createIndex("createdAt","createdAt",{unique:!1})},e.onsuccess=()=>{n(e.result)},e.onerror=()=>{t(e.error)}})}async function J0(n){const t=await Ia(),e=JSON.parse(JSON.stringify(n));return new Promise((i,s)=>{const r=t.transaction([En],"readwrite");r.objectStore(En).put(e),r.oncomplete=async()=>{try{await ex(t),i()}catch(a){console.warn("Pruning error:",a),i()}},r.onerror=()=>s(r.error)})}async function up(){const n=await Ia();return new Promise((t,e)=>{const o=n.transaction([En],"readonly").objectStore(En).index("createdAt").openCursor(null,"prev"),a=[];o.onsuccess=l=>{const c=l.target.result;c&&a.length<cp?(a.push(c.value),c.continue()):t(a)},o.onerror=()=>e(o.error)})}async function Q0(n){const t=await Ia();return new Promise((e,i)=>{const o=t.transaction([En],"readonly").objectStore(En).get(n);o.onsuccess=()=>{e(o.result||null)},o.onerror=()=>i(o.error)})}async function tx(n){const t=await Ia();return new Promise((e,i)=>{const s=t.transaction([En],"readwrite");s.objectStore(En).delete(n),s.oncomplete=()=>e(),s.onerror=()=>i(s.error)})}async function ex(n){return new Promise((t,e)=>{const s=n.transaction([En],"readwrite").objectStore(En),o=s.index("createdAt").openCursor(null,"prev");let a=0;const l=[];o.onsuccess=c=>{const u=c.target.result;u?(a++,a>cp&&l.push(u.value.id),u.continue()):(l.length>0&&l.forEach(d=>s.delete(d)),t())},o.onerror=()=>e(o.error)})}function jo(n,t){var c,u,d,f;const e=`效率测试矩阵_${n.config.loadMode}_${new Date(n.createdAt).toISOString().slice(0,19).replace(/[:T]/g,"_")}.csv`,i=[];i.push('"电源转换芯片效率测试系统 - 2D 双向矩阵测试数据报告"'),i.push(`"测试任务标题","${n.title}"`),i.push(`"测试时间","${new Date(n.createdAt).toLocaleString()}"`),i.push(`"输入电压范围","${n.config.voltageMin} V ~ ${n.config.voltageMax} V (步长: ${n.config.voltageStep} V)"`),i.push(`"输入限流","${n.config.inputCurrentLimit} A"`),i.push(`"负载扫描范围","${n.config.loadMin} ~ ${n.config.loadMax} ${n.config.loadMode==="CC"?"A":"W"} (步长: ${n.config.loadStep}) (模式: ${n.config.loadMode})"`),i.push(`"每点驻留时间","${n.config.stepDwellTime} 秒"`),i.push(`"总测试点数","${n.points.length}"`),i.push(`"最高转换效率","${((u=(c=n.summary)==null?void 0:c.maxEfficiency)==null?void 0:u.toFixed(2))??"--"} %"`),i.push(`"平均转换效率","${((f=(d=n.summary)==null?void 0:d.avgEfficiency)==null?void 0:f.toFixed(2))??"--"} %"`),i.push(""),i.push('"=== 2D 转换效率矩阵概览表 (η %) ==="');const s=n.voltageSteps.map(p=>`"${p}V"`).join(",");i.push(`"负载(${n.config.loadMode==="CC"?"A":"W"}) \\ 电压(V)",${s}`),n.loadSteps.forEach(p=>{const x=n.voltageSteps.map(v=>{const m=n.points.find(h=>Math.abs(h.voltageTarget-v)<1e-4&&Math.abs(h.loadTarget-p)<1e-4);return m&&m.status==="completed"?m.efficiency.toFixed(2):'""'});i.push(`"${p}",${x.join(",")}`)}),i.push(""),i.push('"=== 详细测量采样明细表 ==="'),i.push(`"步号","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","负载模式","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","转换效率η(%)","状态"`),n.points.forEach(p=>{i.push([p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),`"${p.loadMode}"`,p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2),`"${p.status}"`].join(","))}),n.rawSamples&&n.rawSamples.length>0&&(i.push(""),i.push('"=== 高频原始采样数据 (Raw Sample Traces) ==="'),i.push(`"采样说明","包含每一个连续采样点；其中'是否计入均值'标明是否排除了电压切换后0.5s内被忽略的数据及步间暂态数据"`),i.push(`"总采样点数","${n.rawSamples.length}"`),i.push(`"相对时间(s)","步骤号(Step)","目标电压(V)","目标负载(${n.config.loadMode==="CC"?"A":"W"})","步内时间(s)","是否计入均值(0.5s过滤)","实测Vin(V)","实测Iin(A)","实测Pin(W)","实测Vout(V)","实测Iout(A)","实测Pout(W)","瞬时效率(%)"`),n.rawSamples.forEach(p=>{i.push([p.relTime.toFixed(4),p.stepIndex,p.voltageTarget.toFixed(2),p.loadTarget.toFixed(2),p.stepRelTime.toFixed(4),p.isValidForAvg?'"YES"':'"NO(0.5s切换/暂态过滤)"',p.vin.toFixed(4),p.iin.toFixed(4),p.pin.toFixed(4),p.vout.toFixed(4),p.iout.toFixed(4),p.pout.toFixed(4),p.efficiency.toFixed(2)].join(","))}));const r="\uFEFF"+i.join(`\r
`),o=new Blob([r],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(o),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",e),document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a)}const nx={style:{width:"100%",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519"}},ix={class:"menubar"},sx={style:{"margin-left":"auto",display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},rx={style:{display:"flex","align-items":"center",gap:"5px"}},ox={style:{display:"flex","align-items":"center",gap:"5px"}},ax={class:"panel-left"},lx={class:"group-box"},cx={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"8px"}},ux={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},dx={style:{display:"flex","align-items":"center",gap:"4px","margin-bottom":"6px"}},fx=["value"],hx={style:{display:"flex","align-items":"center",gap:"4px"}},px=["value"],mx={class:"group-box"},gx={class:"group-title",style:{"justify-content":"space-between",width:"100%"}},_x={style:{"font-size":"10px",color:"#a0aec0","font-family":"monospace","font-weight":"normal"}},vx={style:{"margin-bottom":"6px"}},xx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},yx=["disabled"],bx=["disabled"],Mx=["disabled"],Sx={style:{"margin-bottom":"6px"}},Ex={style:{"font-size":"11px",color:"#63b3ed","font-weight":"bold","margin-bottom":"3px",display:"flex","justify-content":"space-between"}},wx={style:{display:"flex",gap:"4px"}},Tx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Ax=["disabled"],Cx={style:{cursor:"pointer",color:"#e2e8f0","font-size":"10.5px"}},Rx=["disabled"],Px={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Lx={style:{"font-size":"10px",color:"#a0aec0"}},Dx=["disabled"],Ix={style:{"font-size":"10px",color:"#a0aec0"}},Ux=["disabled"],Nx={style:{"font-size":"10px",color:"#a0aec0"}},Ox=["disabled"],Fx={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"4px"}},Bx=["disabled"],zx=["disabled"],kx=["disabled"],Vx={class:"group-box"},Hx={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"4px","font-family":"'Consolas', monospace","font-size":"11.5px"}},Gx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ecc94b"}},Wx={style:{color:"#ecc94b","font-weight":"bold","font-size":"14px"}},$x={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #63b3ed"}},Xx={style:{color:"#63b3ed","font-weight":"bold","font-size":"14px"}},jx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #48bb78"}},Yx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #ed8936"}},Kx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Zx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #9f7aea"}},Jx={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},Qx={style:{"background-color":"#121519",padding:"4px 6px","border-radius":"4px","border-left":"3px solid #f56565"}},ty={style:{color:"#e2e8f0","font-weight":"bold","font-size":"13px"}},ey={style:{"margin-top":"6px","background-color":"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2f855a",display:"flex","align-items":"center","justify-content":"space-between"}},ny={style:{color:"#48bb78","font-weight":"bold","font-family":"'Consolas', monospace","font-size":"20px"}},iy={style:{display:"flex","flex-direction":"column",gap:"6px"}},sy={style:{display:"flex",gap:"6px"}},ry=["disabled"],oy=["disabled"],ay={class:"panel-right"},ly={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#171b22",border:"1px solid #2d3748","border-radius":"6px",overflow:"hidden"}},cy={style:{height:"30px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 10px","font-weight":"bold","font-size":"12px",color:"#e2e8f0"}},uy={style:{"font-size":"11px","font-family":"'Consolas', monospace","font-weight":"normal",color:"#a0aec0"}},dy={style:{color:"#48bb78"}},fy={style:{flex:"1",overflow:"auto"}},hy={style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11px","text-align":"right"}},py={style:{padding:"4px 6px","text-align":"center",color:"#718096"}},my={style:{padding:"4px 6px"}},gy={style:{padding:"4px 6px"}},_y={style:{padding:"4px 6px",color:"#ecc94b","font-weight":"bold"}},vy={style:{padding:"4px 6px"}},xy={style:{padding:"4px 6px"}},yy={style:{padding:"4px 6px",color:"#63b3ed","font-weight":"bold"}},by={style:{padding:"4px 6px"}},My={style:{padding:"4px 6px"}},Sy={style:{padding:"4px 6px","text-align":"center","font-weight":"bold"}},Ey={key:0,style:{color:"#48bb78"}},wy={key:1,style:{color:"#00d2ff"}},Ty={key:2,style:{color:"#4a5568"}},Ay={style:{padding:"4px 6px","text-align":"center"}},Cy={class:"statusbar"},Ry={key:0,style:{color:"#48bb78"}},Py={key:1},Ly={class:"device-lost-modal"},Dy={class:"device-lost-header"},Iy={class:"device-lost-body"},Uy={class:"device-lost-info-grid"},Ny={class:"info-row"},Oy={class:"info-val",style:{color:"#ecc94b","font-weight":"bold"}},Fy={class:"info-row"},By={class:"info-val",style:{color:"#fc8181","font-weight":"500"}},zy={class:"info-row"},ky={class:"info-val"},Vy={class:"info-row"},Hy={class:"info-val",style:{"font-family":"monospace"}},Gy={class:"device-lost-footer"},Wy=wi({__name:"ConsoleView",setup(n){const t=lp(),e=da.getInstance(),i=Yt(null),s=Yt(!1),r=Yt(!1),o=Yt(!0),a=Yt([]),l=yn({visible:!1,deviceType:"PSU",deviceName:"",reason:"",timestamp:""}),c=Yt(null),u=Yt(void 0),d=Yt([]),f=Yt(!1),p=Yt(!1),x=Yt("就绪 (Ready) - 请连接设备或开启仿真模式后开始测试");let v=null,m=null;const h=yn({voltageMin:5,voltageMax:12,voltageStep:1,inputCurrentLimit:3,loadMin:.5,loadMax:2.5,loadStep:.5,loadMode:"CC",stepDwellTime:1,sampleRateHz:8}),I=Yt([]),D=Yt([]),w=Yt([]),X=Yt(null),O=yn({vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,activeTargetV:5,activeTargetLoad:1,progressPercent:0,currentStep:0,totalSteps:0}),N=Be(()=>{const _=Math.max(1,Math.floor((h.voltageMax-h.voltageMin)/h.voltageStep)+1),y=Math.max(1,Math.floor((h.loadMax-h.loadMin)/h.loadStep)+1);return _*y}),U=Be(()=>w.value.filter(_=>_.status==="completed").length),E=Be(()=>w.value.filter(_=>_.status==="completed"));function T(_){i.value=i.value===_?null:_}function A(){i.value=null}function et(){const _=[];for(let V=h.voltageMin;V<=h.voltageMax+1e-5;V+=h.voltageStep)_.push(Math.round(V*100)/100);const y=[];for(let V=h.loadMin;V<=h.loadMax+1e-5;V+=h.loadStep)y.push(Math.round(V*100)/100);I.value=_,D.value=y;const F=[];let it=1;for(const V of _)for(const Et of y)F.push({stepIndex:it++,voltageTarget:V,loadTarget:Et,loadMode:h.loadMode,vin:0,iin:0,pin:0,vout:0,iout:0,pout:0,efficiency:0,status:"pending",timestamp:0});w.value=F,O.totalSteps=F.length,O.currentStep=0,O.progressPercent=0}function nt(_,y,F){console.error(`%c[SERIAL DEVICE LOST] %c${_} (${y}): ${F}`,"color: white; background: #e53e3e; font-size: 14px; font-weight: bold; padding: 2px 6px; border-radius: 3px;","color: #fc8181; font-size: 13px; font-weight: bold;"),l.visible=!0,l.deviceType=_,l.deviceName=y,l.reason=F,l.timestamp=new Date().toLocaleTimeString(),f.value&&(p.value=!0,x.value=`⚠️ 警告: 检测到串口设备【${y}】异常断开/丢失！测试已自动紧急暂停。`,e.emergencyStopAll().catch(()=>{}))}function rt(){l.visible=!1,r.value=!0}async function mt(){l.visible=!1,o.value=!0,e.autoConnectVirtual(),x.value="已切换为仿真驱动模式，测试已恢复",p.value=!1}async function H(){l.visible=!1,v&&v.abort(),await $()}async function z(){e.isBothConnected()||e.autoConnectVirtual(),et(),d.value=[],c.value&&c.value.clear(),u.value=void 0,f.value=!0,p.value=!1,v=new AbortController,x.value="正在执行全自动 2D 矩阵效率测试...",ct();const _=performance.now();try{let y=0,F=-999999;for(let it=0;it<w.value.length&&!v.signal.aborted;it++){for(;p.value&&!v.signal.aborted;)await new Promise(Mt=>setTimeout(Mt,200));const V=w.value[it];V.status="running",O.activeTargetV=V.voltageTarget,O.activeTargetLoad=V.loadTarget,O.currentStep=it+1;const Et=it===0||Math.abs(V.voltageTarget-F)>1e-4;F=V.voltageTarget;try{await e.setPsuOutput(!0,V.voltageTarget,h.inputCurrentLimit),await e.setLoadInput(!0,h.loadMode,V.loadTarget)}catch(Mt){for(nt("PSU",e.psu.state.model,`发送控制指令失败: ${(Mt==null?void 0:Mt.message)||Mt}`);p.value&&!v.signal.aborted;)await new Promise(st=>setTimeout(st,200));if(v.signal.aborted)break}if(Et){x.value=`正在切换电压至 ${V.voltageTarget.toFixed(2)}V，等待 0.5s 硬件稳压与数据过滤...`;const Mt=500,st=performance.now(),pt=Math.max(10,Math.round(1e3/(h.sampleRateHz||8)));for(;performance.now()-st<Mt&&!v.signal.aborted;){for(;p.value&&!v.signal.aborted;)await new Promise(Ee=>setTimeout(Ee,200));const Rt=performance.now(),wt=e.measure();O.vin=wt.vin,O.iin=wt.iin,O.pin=wt.pin,O.vout=wt.vout,O.iout=wt.iout,O.pout=wt.pout,O.efficiency=wt.efficiency,u.value={t:Rt,vin:wt.vin,vout:wt.vout,iin:wt.iin,iout:wt.iout};const It={timestamp:Date.now(),relTime:Math.round((Rt-_)/1e3*1e3)/1e3,stepIndex:V.stepIndex,voltageTarget:V.voltageTarget,loadTarget:V.loadTarget,stepRelTime:Math.round((Rt-st)/1e3*1e3)/1e3,isValidForAvg:!1,vin:wt.vin,iin:wt.iin,pin:wt.pin,vout:wt.vout,iout:wt.iout,pout:wt.pout,efficiency:wt.efficiency};d.value.push(It);const _e=performance.now()-Rt;await new Promise(Ee=>setTimeout(Ee,Math.max(5,pt-_e)))}}if(v.signal.aborted)break;x.value=`正在测试步 #${V.stepIndex} (Vin: ${V.voltageTarget.toFixed(2)}V, 负载: ${V.loadTarget.toFixed(2)}${V.loadMode})...`;const St=h.stepDwellTime*1e3,vt=h.stepDwellTime,Pt=.1,bt=Math.max(10,Math.round(1e3/(h.sampleRateHz||8))),At=performance.now(),Ft=[],Ut=[],Tt=[],Kt=[],Wt=[],ne=[];let W=0;for(;W<St&&!v.signal.aborted;){for(;p.value&&!v.signal.aborted;)await new Promise(ke=>setTimeout(ke,200));const Mt=performance.now();W=Mt-At;const st=W/1e3,pt=(Mt-_)/1e3;if(!e.checkHealth().ok){for(;p.value&&!v.signal.aborted;)await new Promise(ke=>setTimeout(ke,200));if(v.signal.aborted)break}const wt=vt>.2?st>=Pt&&st<=vt-Pt:!0,It=e.measure();O.vin=It.vin,O.iin=It.iin,O.pin=It.pin,O.vout=It.vout,O.iout=It.iout,O.pout=It.pout,O.efficiency=It.efficiency,u.value={t:Mt,vin:It.vin,vout:It.vout,iin:It.iin,iout:It.iout};const _e={timestamp:Date.now(),relTime:Math.round(pt*1e3)/1e3,stepIndex:V.stepIndex,voltageTarget:V.voltageTarget,loadTarget:V.loadTarget,stepRelTime:Math.round(st*1e3)/1e3,isValidForAvg:wt,vin:It.vin,iin:It.iin,pin:It.pin,vout:It.vout,iout:It.iout,pout:It.pout,efficiency:It.efficiency};d.value.push(_e),wt&&(Ft.push(It.vin),Ut.push(It.iin),Tt.push(It.pin),Kt.push(It.vout),Wt.push(It.iout),ne.push(It.pout));const Ee=performance.now()-Mt,re=Math.max(2,bt-Ee);await new Promise(ke=>setTimeout(ke,re))}if(Ft.length>0){const Mt=Ft.length;V.vin=Math.round(Ft.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.iin=Math.round(Ut.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.pin=Math.round(Tt.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.vout=Math.round(Kt.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.iout=Math.round(Wt.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.pout=Math.round(ne.reduce((st,pt)=>st+pt,0)/Mt*1e3)/1e3,V.efficiency=V.pin>.001?Math.min(100,Math.max(0,Math.round(V.pout/V.pin*1e4)/100)):0}else{const Mt=e.measure();V.vin=Mt.vin,V.iin=Mt.iin,V.pin=Mt.pin,V.vout=Mt.vout,V.iout=Mt.iout,V.pout=Mt.pout,V.efficiency=Mt.efficiency}V.status="completed",V.timestamp=Date.now(),y++,O.progressPercent=y/w.value.length*100}v.signal.aborted||await $()}catch(y){console.error("Test execution error:",y),x.value="测试执行异常: "+String(y),alert("测试执行过程中发生异常："+String(y))}finally{f.value=!1,p.value=!1,gt()}}async function $(){await e.emergencyStopAll(),x.value="全套矩阵测试已完成！正在保存数据并在新窗口打开 2D 矩阵与 3D 柱状图可视化...";const _=w.value.filter(Tt=>Tt.status==="completed");let y=0,F=100,it=0,V;_.forEach(Tt=>{Tt.efficiency>y&&(y=Tt.efficiency,V=Tt),Tt.efficiency<F&&(F=Tt.efficiency),it+=Tt.efficiency});const Et=_.length>0?it/_.length:0,St=`test_${Date.now()}`,vt=new Date,Pt=JSON.parse(JSON.stringify(h)),bt=JSON.parse(JSON.stringify(w.value)),At=V?JSON.parse(JSON.stringify(V)):void 0,Ft=JSON.parse(JSON.stringify(d.value)),Ut={id:St,title:`芯片双向矩阵扫描 [${h.voltageMin}V-${h.voltageMax}V | ${h.loadMode}]`,createdAt:vt.toISOString(),config:Pt,voltageSteps:[...I.value],loadSteps:[...D.value],points:bt,rawSamples:Ft,summary:{totalPoints:w.value.length,completedPoints:_.length,maxEfficiency:Math.round(y*100)/100,minEfficiency:Math.round(F*100)/100,avgEfficiency:Math.round(Et*100)/100,optimalPoint:At,durationSeconds:Math.round(_.length*h.stepDwellTime)}};X.value=Ut,await J0(Ut),await G(),Nv({particleCount:80,spread:70,origin:{y:.6},colors:["#00d2ff","#48bb78","#ecc94b","#9f7aea"]}),Y(St)}function ht(){p.value=!0,x.value="测试已暂停"}function R(){p.value=!1,x.value="测试已继续运行"}async function b(){v&&v.abort(),f.value=!1,p.value=!1,await e.emergencyStopAll(),gt(),x.value="测试已手动终止"}function ct(){m&&clearInterval(m),m=window.setInterval(()=>{if(e.checkHealth(),!f.value){const _=e.measure();O.vin=_.vin,O.iin=_.iin,O.pin=_.pin,O.vout=_.vout,O.iout=_.iout,O.pout=_.pout,O.efficiency=_.efficiency}},200)}function gt(){m&&(clearInterval(m),m=null)}function Y(_){var V;const y=_||((V=X.value)==null?void 0:V.id);if(!y){alert("暂无已完成的测试数据可供查看！请先运行测试或在【工具->历史数据查看】中选择一条历史记录。");return}const it=`${window.location.href.split("#")[0]}#/result/${y}`;window.open(it,"_blank")}function lt(){if(X.value)jo(X.value);else if(E.value.length>0){const _={title:"电源芯片效率测试明细",createdAt:new Date().toISOString(),config:JSON.parse(JSON.stringify(h)),voltageSteps:[...I.value],loadSteps:[...D.value],points:JSON.parse(JSON.stringify(w.value)),rawSamples:JSON.parse(JSON.stringify(d.value)),summary:{totalPoints:w.value.length,completedPoints:E.value.length,maxEfficiency:0,minEfficiency:0,avgEfficiency:0,durationSeconds:0}};jo(_)}else alert("当前无可用测试数据可供导出！")}function yt(_){jo(_)}async function B(_){await tx(_),await G()}async function G(){try{a.value=await up()}catch(_){console.warn("Failed to load history:",_)}}async function j(){await G(),s.value=!0}function ut(){w.value=[],d.value=[],X.value=null,u.value=void 0,c.value&&c.value.clear(),et(),x.value="图表与数据已清空"}function M(){o.value?(e.autoConnectVirtual(),x.value="已启用内置仿真驱动模式 (Virtual Mode)"):(e.psu.disconnect(),e.load.disconnect(),x.value="已关闭仿真模式，请配置物理串口设备")}function L(){e.psu.state.connected?(e.psu.disconnect(),x.value="电源串口已断开"):r.value=!0}function k(){e.load.state.connected?(e.load.disconnect(),x.value="电子负载串口已断开"):r.value=!0}function S(){o.value=!0,e.autoConnectVirtual(),r.value=!1,x.value="仿真驱动已就绪"}async function tt(_){try{await e.psu.connectPhysical(_),o.value=!1,x.value=`电源串口已连接 (${_}bps)`}catch(y){alert("连接电源串口失败: "+((y==null?void 0:y.message)||y))}}async function Q(){await e.psu.disconnect(),x.value="电源串口已断开"}async function ot(_){try{await e.load.connectPhysical(_),o.value=!1,x.value=`负载串口已连接 (${_}bps)`}catch(y){alert("连接负载串口失败: "+((y==null?void 0:y.message)||y))}}async function at(){await e.load.disconnect(),x.value="负载串口已断开"}function _t(){alert(`电源转换芯片效率测试系统 (Power Converter Efficiency Tester)
版本: 2.0.0 (Vue 3 + Web Serial + Three.js 3D Edition)
完全适配 RIGOL DP700 直流电源与 UNI-T UTL8500 电子负载。
支持 2D 双向全自动矩阵扫描与 3D 空间交互式图谱展现。`)}function q(){t.push("/single-instrument")}function C(_){(_.ctrlKey||_.metaKey)&&(_.key==="d"||_.key==="D")&&(_.preventDefault(),q())}return cr(async()=>{e.setOnDeviceLost(nt),e.autoConnectVirtual(),et(),ct(),await G(),window.addEventListener("keydown",C)}),ur(()=>{gt(),window.removeEventListener("keydown",C)}),(_,y)=>(Ot(),Bt("div",nx,[g("div",ix,[g("div",{class:fi(["menu-item",{active:i.value==="file"}]),onClick:y[3]||(y[3]=F=>T("file"))},[y[38]||(y[38]=Dt(" 文件 (File) ",-1)),i.value==="file"?(Ot(),Bt("div",{key:0,class:"dropdown-menu",onClick:y[2]||(y[2]=as(()=>{},["stop"]))},[g("div",{class:"dropdown-item",onClick:y[0]||(y[0]=F=>{lt(),A()})},[...y[35]||(y[35]=[g("span",null,"导出测试结果 CSV (Export CSV)...",-1),g("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+E",-1)])]),y[37]||(y[37]=g("div",{class:"dropdown-divider"},null,-1)),g("div",{class:"dropdown-item",onClick:y[1]||(y[1]=F=>A())},[...y[36]||(y[36]=[g("span",null,"退出 (Exit)",-1),g("span",{style:{"font-size":"10px",color:"#718096","font-family":"monospace"}},"Ctrl+Q",-1)])])])):De("",!0)],2),g("div",{class:fi(["menu-item",{active:i.value==="view"}]),onClick:y[6]||(y[6]=F=>T("view"))},[y[40]||(y[40]=Dt(" 视图 (View) ",-1)),i.value==="view"?(Ot(),Bt("div",{key:0,class:"dropdown-menu",onClick:y[5]||(y[5]=as(()=>{},["stop"]))},[g("div",{class:"dropdown-item",onClick:y[4]||(y[4]=F=>{ut(),A()})},[...y[39]||(y[39]=[g("span",null,"清空图表数据 (Clear Charts)",-1)])])])):De("",!0)],2),g("div",{class:fi(["menu-item",{active:i.value==="tools"}]),onClick:y[11]||(y[11]=F=>T("tools"))},[y[46]||(y[46]=Dt(" 工具 (Tools) ",-1)),i.value==="tools"?(Ot(),Bt("div",{key:0,class:"dropdown-menu",onClick:y[10]||(y[10]=as(()=>{},["stop"]))},[g("div",{class:"dropdown-item",onClick:y[7]||(y[7]=F=>{j(),A()})},[...y[41]||(y[41]=[g("span",{style:{color:"#63b3ed","font-weight":"bold"}},"历史数据查看 (最近5条)...",-1),g("span",{style:{"font-size":"10px",color:"#63b3ed","font-family":"monospace"}},"IndexedDB",-1)])]),y[44]||(y[44]=g("div",{class:"dropdown-divider"},null,-1)),g("div",{class:"dropdown-item",onClick:y[8]||(y[8]=F=>{q(),A()})},[...y[42]||(y[42]=[g("span",{style:{color:"#48bb78","font-weight":"bold"}},"🔧 单仪器测试 / 硬件单体调试工具...",-1),g("span",{style:{"font-size":"10px",color:"#48bb78","font-family":"monospace"}},"Ctrl+D",-1)])]),y[45]||(y[45]=g("div",{class:"dropdown-divider"},null,-1)),g("div",{class:"dropdown-item",onClick:y[9]||(y[9]=F=>{r.value=!0,A()})},[...y[43]||(y[43]=[g("span",null,"打开串口硬件连接设置...",-1)])])])):De("",!0)],2),g("div",{class:fi(["menu-item",{active:i.value==="help"}]),onClick:y[14]||(y[14]=F=>T("help"))},[y[48]||(y[48]=Dt(" 帮助 (Help) ",-1)),i.value==="help"?(Ot(),Bt("div",{key:0,class:"dropdown-menu",onClick:y[13]||(y[13]=as(()=>{},["stop"]))},[g("div",{class:"dropdown-item",onClick:y[12]||(y[12]=F=>{_t(),A()})},[...y[47]||(y[47]=[g("span",null,"关于工作台 (About Workbench)...",-1)])])])):De("",!0)],2),g("div",sx,[g("span",rx,[g("span",{style:ye([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:de(e).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 电源: "+xt(de(e).psu.state.portName),1)]),g("span",ox,[g("span",{style:ye([{width:"7px",height:"7px","border-radius":"50%"},{backgroundColor:de(e).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),Dt(" 负载: "+xt(de(e).load.state.portName),1)]),g("button",{class:"btn",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold","background-color":"#234e52",color:"#81e6d9",border:"1px solid #319795"},onClick:y[15]||(y[15]=F=>q()),title:"打开电源/负载底层单仪器独立调试工作台 (Ctrl+D)"}," 🔧 单仪器测试 "),X.value?(Ot(),Bt("button",{key:0,class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px","font-weight":"bold"},onClick:y[16]||(y[16]=F=>Y(X.value.id)),title:"在新窗口打开当前测试结果的 2D 矩阵与 3D 柱状图"},[...y[49]||(y[49]=[g("svg",{class:"icon-xs",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),g("polyline",{points:"15 3 21 3 21 9"}),g("line",{x1:"10",y1:"14",x2:"21",y2:"3"})],-1),Dt(" 打开 3D/2D 数据视图 ",-1)])])):De("",!0)])]),g("div",{class:"workbench-body",onClick:A},[g("div",ax,[g("div",lx,[y[53]||(y[53]=g("div",{class:"group-title"},[g("span",null,"🔌 仪器连接 (Instrument Ports)")],-1)),g("div",cx,[g("label",ux,[ee(g("input",{type:"checkbox","onUpdate:modelValue":y[17]||(y[17]=F=>o.value=F),onChange:M},null,544),[[Fi,o.value]]),y[50]||(y[50]=Dt(" 🧪 启用仿真演示模式 ",-1))]),g("button",{class:"btn",style:{padding:"2px 6px","font-size":"11px"},onClick:y[18]||(y[18]=F=>r.value=!0)}," ⚙ 配置 ")]),g("div",dx,[y[51]||(y[51]=g("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"电源:",-1)),g("input",{type:"text",readonly:"",value:de(e).psu.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,fx),g("button",{class:fi(["btn",de(e).psu.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:L},xt(de(e).psu.state.connected?"断开":"连接"),3)]),g("div",hx,[y[52]||(y[52]=g("span",{style:{width:"36px",color:"#63b3ed","font-weight":"bold","font-size":"11px"}},"负载:",-1)),g("input",{type:"text",readonly:"",value:de(e).load.state.portName,style:{flex:"1",padding:"2px 6px","font-size":"11px"}},null,8,px),g("button",{class:fi(["btn",de(e).load.state.connected?"btn-danger":"btn-primary"]),style:{padding:"3px 8px","font-weight":"bold"},onClick:k},xt(de(e).load.state.connected?"断开":"连接"),3)])]),g("div",mx,[g("div",gx,[y[54]||(y[54]=g("span",null,"⚙ 2D 矩阵扫描测试参数",-1)),g("span",_x," 总点数: "+xt(N.value)+" 点 ",1)]),g("div",vx,[y[58]||(y[58]=g("div",{style:{"font-size":"11px",color:"#ecc94b","font-weight":"bold","margin-bottom":"3px"}}," 输入电压扫描范围 (Vin): ",-1)),g("div",xx,[g("div",null,[y[55]||(y[55]=g("span",{style:{"font-size":"10px",color:"#a0aec0"}},"起始(V):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[19]||(y[19]=F=>h.voltageMin=F),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,yx),[[Fe,h.voltageMin,void 0,{number:!0}]])]),g("div",null,[y[56]||(y[56]=g("span",{style:{"font-size":"10px",color:"#a0aec0"}},"终止(V):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[20]||(y[20]=F=>h.voltageMax=F),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,bx),[[Fe,h.voltageMax,void 0,{number:!0}]])]),g("div",null,[y[57]||(y[57]=g("span",{style:{"font-size":"10px",color:"#a0aec0"}},"步长(V):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[21]||(y[21]=F=>h.voltageStep=F),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Mx),[[Fe,h.voltageStep,void 0,{number:!0}]])])])]),g("div",Sx,[g("div",Ex,[y[61]||(y[61]=g("span",null,"负载扫描范围 (Load):",-1)),g("div",wx,[g("label",Tx,[ee(g("input",{type:"radio",value:"CC","onUpdate:modelValue":y[22]||(y[22]=F=>h.loadMode=F),disabled:f.value},null,8,Ax),[[ad,h.loadMode]]),y[59]||(y[59]=Dt(" CC恒流 ",-1))]),g("label",Cx,[ee(g("input",{type:"radio",value:"CW","onUpdate:modelValue":y[23]||(y[23]=F=>h.loadMode=F),disabled:f.value},null,8,Rx),[[ad,h.loadMode]]),y[60]||(y[60]=Dt(" CW恒功率 ",-1))])])]),g("div",Px,[g("div",null,[g("span",Lx,"起始("+xt(h.loadMode==="CC"?"A":"W")+"):",1),ee(g("input",{type:"number","onUpdate:modelValue":y[24]||(y[24]=F=>h.loadMin=F),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Dx),[[Fe,h.loadMin,void 0,{number:!0}]])]),g("div",null,[g("span",Ix,"终止("+xt(h.loadMode==="CC"?"A":"W")+"):",1),ee(g("input",{type:"number","onUpdate:modelValue":y[25]||(y[25]=F=>h.loadMax=F),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,Ux),[[Fe,h.loadMax,void 0,{number:!0}]])]),g("div",null,[g("span",Nx,"步长("+xt(h.loadMode==="CC"?"A":"W")+"):",1),ee(g("input",{type:"number","onUpdate:modelValue":y[26]||(y[26]=F=>h.loadStep=F),disabled:f.value,step:"0.1",style:{width:"100%"}},null,8,Ox),[[Fe,h.loadStep,void 0,{number:!0}]])])])]),g("div",Fx,[g("div",null,[y[62]||(y[62]=g("span",{style:{"font-size":"10px",color:"#a0aec0"}},"电源限流(A):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[27]||(y[27]=F=>h.inputCurrentLimit=F),disabled:f.value,step:"0.5",style:{width:"100%"}},null,8,Bx),[[Fe,h.inputCurrentLimit,void 0,{number:!0}]])]),g("div",null,[y[63]||(y[63]=g("span",{style:{"font-size":"10px",color:"#a0aec0"}},"每步驻留(秒):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[28]||(y[28]=F=>h.stepDwellTime=F),disabled:f.value,step:"0.2",style:{width:"100%"}},null,8,zx),[[Fe,h.stepDwellTime,void 0,{number:!0}]])]),g("div",null,[y[64]||(y[64]=g("span",{style:{"font-size":"10px",color:"#63b3ed","font-weight":"bold"}},"采样频率(Hz):",-1)),ee(g("input",{type:"number","onUpdate:modelValue":y[29]||(y[29]=F=>h.sampleRateHz=F),disabled:f.value,min:"1",max:"100",step:"1",style:{width:"100%","font-weight":"bold",color:"#63b3ed"},title:"仪器高频连续采样频率 (默认 8Hz)"},null,8,kx),[[Fe,h.sampleRateHz,void 0,{number:!0}]])])])]),g("div",Vx,[y[78]||(y[78]=g("div",{class:"group-title"},[g("span",null,"📊 实时参数遥测 (0.2s 刷新)")],-1)),g("div",Hx,[g("div",Gx,[y[66]||(y[66]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电压 Vin:",-1)),g("div",Wx,[Dt(xt(O.vin.toFixed(3))+" ",1),y[65]||(y[65]=g("span",{style:{"font-size":"10px"}},"V",-1))])]),g("div",$x,[y[68]||(y[68]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电压 Vout:",-1)),g("div",Xx,[Dt(xt(O.vout.toFixed(3))+" ",1),y[67]||(y[67]=g("span",{style:{"font-size":"10px"}},"V",-1))])]),g("div",jx,[y[70]||(y[70]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入电流 Iin:",-1)),g("div",Yx,[Dt(xt(O.iin.toFixed(3))+" ",1),y[69]||(y[69]=g("span",{style:{"font-size":"10px"}},"A",-1))])]),g("div",qx,[y[72]||(y[72]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出电流 Iout:",-1)),g("div",Kx,[Dt(xt(O.iout.toFixed(3))+" ",1),y[71]||(y[71]=g("span",{style:{"font-size":"10px"}},"A",-1))])]),g("div",Zx,[y[74]||(y[74]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输入功率 Pin:",-1)),g("div",Jx,[Dt(xt(O.pin.toFixed(3))+" ",1),y[73]||(y[73]=g("span",{style:{"font-size":"10px"}},"W",-1))])]),g("div",Qx,[y[76]||(y[76]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"输出功率 Pout:",-1)),g("div",ty,[Dt(xt(O.pout.toFixed(3))+" ",1),y[75]||(y[75]=g("span",{style:{"font-size":"10px"}},"W",-1))])])]),g("div",ey,[y[77]||(y[77]=g("span",{style:{color:"#48bb78","font-weight":"bold","font-size":"12px"}},"转换效率 (η):",-1)),g("span",ny,xt(O.efficiency.toFixed(2))+" % ",1)])]),g("div",iy,[f.value?p.value?(Ot(),Bt("button",{key:2,class:"btn btn-primary",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:R}," ▶ 继续测试 ")):(Ot(),Bt("button",{key:1,class:"btn btn-warning",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:ht}," ⏸ 暂停测试 ")):(Ot(),Bt("button",{key:0,class:"btn btn-success",style:{height:"38px","font-size":"13px","font-weight":"bold"},onClick:z}," ▶ 开始矩阵测试 ")),g("div",sy,[g("button",{class:"btn btn-danger",style:{flex:"1",height:"32px"},disabled:!f.value,onClick:b}," ⏹ 结束 ",8,ry),g("button",{class:"btn",style:{flex:"1",height:"32px"},disabled:E.value.length===0,onClick:lt}," 📊 导出CSV ",8,oy)])])]),g("div",ay,[Ie(c0,{ref_key:"waveformRef",ref:c,"latest-sample":u.value,style:{height:"48%","min-height":"220px"}},null,8,["latest-sample"]),g("div",ly,[g("div",cy,[y[80]||(y[80]=g("span",null,"📋 步进明细数据表 (Step Summary Table)",-1)),g("span",uy,[y[79]||(y[79]=Dt(" 已完成: ",-1)),g("b",dy,xt(U.value),1),Dt(" / "+xt(w.value.length)+" 步 ",1)])]),g("div",fy,[g("table",hy,[y[81]||(y[81]=g("thead",{style:{"background-color":"#121519",color:"#a0aec0",position:"sticky",top:"0","z-index":"5"}},[g("tr",{style:{"border-bottom":"1px solid #2d3748"}},[g("th",{style:{padding:"5px 6px","text-align":"center"}},"步号"),g("th",{style:{padding:"5px 6px"}},"目标Vin(V)"),g("th",{style:{padding:"5px 6px"}},"目标负载"),g("th",{style:{padding:"5px 6px",color:"#ecc94b"}},"平均Vin(V)"),g("th",{style:{padding:"5px 6px"}},"平均Iin(A)"),g("th",{style:{padding:"5px 6px"}},"平均Pin(W)"),g("th",{style:{padding:"5px 6px",color:"#63b3ed"}},"平均Vout(V)"),g("th",{style:{padding:"5px 6px"}},"平均Iout(A)"),g("th",{style:{padding:"5px 6px"}},"平均Pout(W)"),g("th",{style:{padding:"5px 6px",color:"#48bb78","text-align":"center"}},"效率 η(%)"),g("th",{style:{padding:"5px 6px","text-align":"center"}},"状态")])],-1)),g("tbody",null,[(Ot(!0),Bt(Re,null,vi(w.value,F=>(Ot(),Bt("tr",{key:F.stepIndex,style:ye([{"border-bottom":"1px solid #1e2530"},{backgroundColor:F.status==="running"?"#1a365d":"transparent"}])},[g("td",py,"#"+xt(F.stepIndex),1),g("td",my,xt(F.voltageTarget.toFixed(2)),1),g("td",gy,xt(F.loadTarget.toFixed(2))+" "+xt(F.loadMode),1),g("td",_y,xt(F.status!=="pending"?F.vin.toFixed(4):"--"),1),g("td",vy,xt(F.status!=="pending"?F.iin.toFixed(4):"--"),1),g("td",xy,xt(F.status!=="pending"?F.pin.toFixed(4):"--"),1),g("td",yy,xt(F.status!=="pending"?F.vout.toFixed(4):"--"),1),g("td",by,xt(F.status!=="pending"?F.iout.toFixed(4):"--"),1),g("td",My,xt(F.status!=="pending"?F.pout.toFixed(4):"--"),1),g("td",Sy,[F.status==="completed"?(Ot(),Bt("span",Ey,xt(F.efficiency.toFixed(2))+"% ",1)):F.status==="running"?(Ot(),Bt("span",wy,"测定中")):(Ot(),Bt("span",Ty,"--"))]),g("td",Ay,[g("span",{style:ye([{padding:"1px 5px","border-radius":"3px","font-size":"10px"},{backgroundColor:F.status==="completed"?"#22543d":F.status==="running"?"#2b6cb0":"#2d3748",color:F.status==="completed"?"#9ae6b4":F.status==="running"?"#bee3f8":"#718096"}])},xt(F.status==="completed"?"已完成":F.status==="running"?"测试中":"等待"),5)])],4))),128))])])])])])]),g("div",Cy,[g("span",null,xt(x.value),1),f.value?(Ot(),Bt("span",Ry," 正在测试第 "+xt(O.currentStep)+" / "+xt(O.totalSteps)+" 点 ("+xt(O.progressPercent.toFixed(1))+"%) ",1)):(Ot(),Bt("span",Py,"就绪 (Ready)"))]),Ie(C0,{"is-open":s.value,records:a.value,onClose:y[30]||(y[30]=F=>s.value=!1),onOpenResult:Y,onExportCsv:yt,onDeleteRecord:B},null,8,["is-open","records"]),Ie(j0,{"is-open":r.value,"psu-connected":de(e).psu.state.connected,"psu-port-name":de(e).psu.state.portName,"load-connected":de(e).load.state.connected,"load-port-name":de(e).load.state.portName,"web-serial-supported":de(e).psu.isWebSerialSupported(),onClose:y[31]||(y[31]=F=>r.value=!1),onConnectVirtual:S,onConnectPhysicalPsu:tt,onDisconnectPsu:Q,onConnectPhysicalLoad:ot,onDisconnectLoad:at},null,8,["is-open","psu-connected","psu-port-name","load-connected","load-port-name","web-serial-supported"]),l.visible?(Ot(),Bt("div",{key:0,class:"device-lost-overlay",onClick:y[34]||(y[34]=as(F=>l.visible=!1,["self"]))},[g("div",Ly,[g("div",Dy,[y[82]||(y[82]=jr('<div style="display:flex;align-items:center;gap:8px;"><svg class="icon-md" viewBox="0 0 24 24" fill="none" stroke="#fc8181" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg><span style="font-size:14px;font-weight:bold;color:#fc8181;"> ⚠️ 串口硬件设备异常丢失警告！ </span></div>',1)),g("button",{class:"btn",style:{padding:"2px 7px"},onClick:y[32]||(y[32]=F=>l.visible=!1)},"✕")]),g("div",Iy,[y[87]||(y[87]=g("div",{class:"device-lost-alert-banner"},[g("div",{style:{"font-weight":"bold",color:"#feb2b2","margin-bottom":"4px","font-size":"13px"}}," ⚠️ 检测到串口通信链路中断 / 硬件连接丢失！ "),g("div",{style:{"font-size":"11.5px",color:"#fed7d7"}}," 为保护被测芯片及仪器电路安全，测试引擎已自动紧急暂停 (PAUSED)，电源输出已安全切断。 ")],-1)),g("div",Uy,[g("div",Ny,[y[83]||(y[83]=g("span",{class:"info-label"},"丢失仪器:",-1)),g("span",Oy,xt(l.deviceType==="PSU"?"直流电源 (PSU)":"电子负载 (Electronic Load)")+" - "+xt(l.deviceName),1)]),g("div",Fy,[y[84]||(y[84]=g("span",{class:"info-label"},"异常原因:",-1)),g("span",By,xt(l.reason),1)]),g("div",zy,[y[85]||(y[85]=g("span",{class:"info-label"},"测试进度:",-1)),g("span",ky,"已完成 "+xt(U.value)+" / "+xt(w.value.length)+" 点 (当前步已挂起)",1)]),g("div",Vy,[y[86]||(y[86]=g("span",{class:"info-label"},"发生时间:",-1)),g("span",Hy,xt(l.timestamp),1)])]),y[88]||(y[88]=g("p",{style:{"font-size":"11.5px",color:"#a0aec0",margin:"12px 0 0 0","line-height":"1.5"}}," 请检查设备电源及 USB 串口线物理连接。重新连接后可点击【恢复测试】无缝继续；亦可一键切换为内置仿真模式继续验证。 ",-1))]),g("div",Gy,[g("button",{class:"btn btn-primary",style:{"font-weight":"bold"},onClick:rt}," ⚙ 重新连接串口硬件 "),g("button",{class:"btn btn-warning",style:{"font-weight":"bold"},onClick:mt}," 🧪 切换仿真模式并继续测试 "),g("button",{class:"btn btn-danger",onClick:H}," 💾 终止测试并保存已测结果 "),g("button",{class:"btn",onClick:y[33]||(y[33]=F=>l.visible=!1)}," 保持暂停 ")])])])):De("",!0)]))}});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const du="170",qs={ROTATE:0,DOLLY:1,PAN:2},$s={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$y=0,Cd=1,Xy=2,dp=1,jy=2,ui=3,ji=0,an=1,_i=2,Gi=0,Ks=1,Rd=2,Pd=3,Ld=4,Yy=5,ls=100,qy=101,Ky=102,Zy=103,Jy=104,Qy=200,tb=201,eb=202,nb=203,Ql=204,tc=205,ib=206,sb=207,rb=208,ob=209,ab=210,lb=211,cb=212,ub=213,db=214,ec=0,nc=1,ic=2,ir=3,sc=4,rc=5,oc=6,ac=7,fp=0,fb=1,hb=2,bi=0,pb=1,mb=2,gb=3,_b=4,vb=5,xb=6,yb=7,hp=300,sr=301,rr=302,lc=303,cc=304,Ua=306,uc=1e3,hs=1001,dc=1002,Nn=1003,bb=1004,ho=1005,Pn=1006,nl=1007,ps=1008,Ei=1009,pp=1010,mp=1011,Zr=1012,fu=1013,vs=1014,xi=1015,eo=1016,hu=1017,pu=1018,or=1020,gp=35902,_p=1021,vp=1022,Ln=1023,xp=1024,yp=1025,Zs=1026,ar=1027,bp=1028,mu=1029,Mp=1030,gu=1031,_u=1033,Yo=33776,qo=33777,Ko=33778,Zo=33779,fc=35840,hc=35841,pc=35842,mc=35843,gc=36196,_c=37492,vc=37496,xc=37808,yc=37809,bc=37810,Mc=37811,Sc=37812,Ec=37813,wc=37814,Tc=37815,Ac=37816,Cc=37817,Rc=37818,Pc=37819,Lc=37820,Dc=37821,Jo=36492,Ic=36494,Uc=36495,Sp=36283,Nc=36284,Oc=36285,Fc=36286,Mb=3200,Sb=3201,Ep=0,Eb=1,ki="",vn="srgb",dr="srgb-linear",Na="linear",he="srgb",ws=7680,Dd=519,wb=512,Tb=513,Ab=514,wp=515,Cb=516,Rb=517,Pb=518,Lb=519,Bc=35044,Id="300 es",yi=2e3,fa=2001;class bs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vr=Math.PI/180,zc=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function Qe(n,t,e){return Math.max(t,Math.min(e,n))}function Db(n,t){return(n%t+t)%t}function il(n,t,e){return(1-e)*n+e*t}function Yn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ib={DEG2RAD:Vr};class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,r,o,a,l,c){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],x=i[8],v=s[0],m=s[3],h=s[6],I=s[1],D=s[4],w=s[7],X=s[2],O=s[5],N=s[8];return r[0]=o*v+a*I+l*X,r[3]=o*m+a*D+l*O,r[6]=o*h+a*w+l*N,r[1]=c*v+u*I+d*X,r[4]=c*m+u*D+d*O,r[7]=c*h+u*w+d*N,r[2]=f*v+p*I+x*X,r[5]=f*m+p*D+x*O,r[8]=f*h+p*w+x*N,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,x=e*d+i*f+s*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=d*v,t[1]=(s*c-u*i)*v,t[2]=(a*i-s*o)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-a*e)*v,t[6]=p*v,t[7]=(i*l-c*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new Jt;function Tp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ub(){const n=ha("canvas");return n.style.display="block",n}const Ud={};function Lr(n){n in Ud||(Ud[n]=!0,console.warn(n))}function Nb(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Ob(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Fb(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ie={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(n.r=Mi(n.r),n.g=Mi(n.g),n.b=Mi(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ki?Na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nd=[.64,.33,.3,.6,.15,.06],Od=[.2126,.7152,.0722],Fd=[.3127,.329],Bd=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zd=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[dr]:{primaries:Nd,whitePoint:Fd,transfer:Na,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:Nd,whitePoint:Fd,transfer:he,toXYZ:Bd,fromXYZ:zd,luminanceCoefficients:Od,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}});let Ts;class Bb{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ts===void 0&&(Ts=ha("canvas")),Ts.width=t.width,Ts.height=t.height;const i=Ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Mi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Mi(e[i]/255)*255):e[i]=Mi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zb=0;class Ap{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(rl(s[o].image)):r.push(rl(s[o]))}else r=rl(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function rl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Bb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kb=0;class nn extends bs{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=hs,s=hs,r=Pn,o=ps,a=Ln,l=Ei,c=nn.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=Wi(),this.name="",this.source=new Ap(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case uc:t.x=t.x-Math.floor(t.x);break;case hs:t.x=t.x<0?0:1;break;case dc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case uc:t.y=t.y-Math.floor(t.y);break;case hs:t.y=t.y<0?0:1;break;case dc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=hp;nn.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,s=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],x=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const D=(c+1)/2,w=(p+1)/2,X=(h+1)/2,O=(u+f)/4,N=(d+v)/4,U=(x+m)/4;return D>w&&D>X?D<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(D),s=O/i,r=N/i):w>X?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=O/s,r=U/s):X<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(X),i=N/r,s=U/r),this.set(i,s,r,e),this}let I=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(I)<.001&&(I=1),this.x=(m-x)/I,this.y=(d-v)/I,this.z=(f-u)/I,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vb extends bs{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new nn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ap(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xs extends Vb{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Cp extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hb extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=hs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ys{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3];const f=r[o+0],p=r[o+1],x=r[o+2],v=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=x,t[e+3]=v;return}if(d!==v||l!==f||c!==p||u!==x){let m=1-a;const h=l*f+c*p+u*x+d*v,I=h>=0?1:-1,D=1-h*h;if(D>Number.EPSILON){const X=Math.sqrt(D),O=Math.atan2(X,h*I);m=Math.sin(m*O)/X,a=Math.sin(a*O)/X}const w=a*I;if(l=l*m+f*w,c=c*m+p*w,u=u*m+x*w,d=d*m+v*w,m===1-a){const X=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=X,c*=X,u*=X,d*=X}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=r[o],f=r[o+1],p=r[o+2],x=r[o+3];return t[e]=a*x+u*d+l*p-c*f,t[e+1]=l*x+u*f+c*d-a*p,t[e+2]=c*x+u*p+a*f-l*d,t[e+3]=u*x-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),d=a(r/2),f=l(i/2),p=l(s/2),x=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"YXZ":this._x=f*u*d+c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"ZXY":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d-f*p*x;break;case"ZYX":this._x=f*u*d-c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d+f*p*x;break;case"YZX":this._x=f*u*d+c*p*x,this._y=c*p*d+f*u*x,this._z=c*u*x-f*p*d,this._w=c*u*d-f*p*x;break;case"XZY":this._x=f*u*d-c*p*x,this._y=c*p*d-f*u*x,this._z=c*u*x+f*p*d,this._w=c*u*d+f*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Qe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,e=0,i=0){J.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kd.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*u,this.y=i+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ol.copy(this).projectOnVector(t),this.sub(ol)}reflect(t){return this.sub(ol.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Qe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ol=new J,kd=new ys;class no{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Tn):Tn.fromBufferAttribute(r,o),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),po.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(t.matrixWorld),this.union(po)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),mo.subVectors(this.max,br),As.subVectors(t.a,br),Cs.subVectors(t.b,br),Rs.subVectors(t.c,br),Pi.subVectors(Cs,As),Li.subVectors(Rs,Cs),Qi.subVectors(As,Rs);let e=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-Qi.z,Qi.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,Qi.z,0,-Qi.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-Qi.y,Qi.x,0];return!al(e,As,Cs,Rs,mo)||(e=[1,0,0,0,1,0,0,0,1],!al(e,As,Cs,Rs,mo))?!1:(go.crossVectors(Pi,Li),e=[go.x,go.y,go.z],al(e,As,Cs,Rs,mo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ri=[new J,new J,new J,new J,new J,new J,new J,new J],Tn=new J,po=new no,As=new J,Cs=new J,Rs=new J,Pi=new J,Li=new J,Qi=new J,br=new J,mo=new J,go=new J,ts=new J;function al(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){ts.fromArray(n,r);const a=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=t.dot(ts),c=e.dot(ts),u=i.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Gb=new no,Mr=new J,ll=new J;class Oa{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Gb.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mr.subVectors(t,this.center);const e=Mr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Mr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ll.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mr.copy(t.center).add(ll)),this.expandByPoint(Mr.copy(t.center).sub(ll))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new J,cl=new J,_o=new J,Di=new J,ul=new J,vo=new J,dl=new J;class Fa{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,oi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=oi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(oi.copy(this.origin).addScaledVector(this.direction,e),oi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){cl.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),Di.copy(this.origin).sub(cl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(_o),a=Di.dot(this.direction),l=-Di.dot(_o),c=Di.lengthSq(),u=Math.abs(1-o*o);let d,f,p,x;if(u>0)if(d=o*l-a,f=o*a-l,x=r*u,d>=0)if(f>=-x)if(f<=x){const v=1/u;d*=v,f*=v,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-x?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=x?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(cl).addScaledVector(_o,f),p}intersectSphere(t,e){oi.subVectors(t.center,this.origin);const i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,oi)!==null}intersectTriangle(t,e,i,s,r){ul.subVectors(e,t),vo.subVectors(i,t),dl.crossVectors(ul,vo);let o=this.direction.dot(dl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const l=a*this.direction.dot(vo.crossVectors(Di,vo));if(l<0)return null;const c=a*this.direction.dot(ul.cross(Di));if(c<0||l+c>o)return null;const u=-a*Di.dot(dl);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,e,i,s,r,o,a,l,c,u,d,f,p,x,v,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,d,f,p,x,v,m)}set(t,e,i,s,r,o,a,l,c,u,d,f,p,x,v,m){const h=this.elements;return h[0]=t,h[4]=e,h[8]=i,h[12]=s,h[1]=r,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=x,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Ps.setFromMatrixColumn(t,0).length(),r=1/Ps.setFromMatrixColumn(t,1).length(),o=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*u,p=o*d,x=a*u,v=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=f-v*c,e[9]=-a*l,e[2]=v-f*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,p=l*d,x=c*u,v=c*d;e[0]=f+v*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-x,e[6]=v+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,p=l*d,x=c*u,v=c*d;e[0]=f-v*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,p=o*d,x=a*u,v=a*d;e[0]=l*u,e[4]=x*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=v-f*d,e[8]=x*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+x,e[10]=f-v*d}else if(t.order==="XZY"){const f=o*l,p=o*c,x=a*l,v=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=o*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wb,t,$b)}lookAt(t,e,i){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),Ii.crossVectors(i,cn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),Ii.crossVectors(i,cn)),Ii.normalize(),xo.crossVectors(cn,Ii),s[0]=Ii.x,s[4]=xo.x,s[8]=cn.x,s[1]=Ii.y,s[5]=xo.y,s[9]=cn.y,s[2]=Ii.z,s[6]=xo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],x=i[2],v=i[6],m=i[10],h=i[14],I=i[3],D=i[7],w=i[11],X=i[15],O=s[0],N=s[4],U=s[8],E=s[12],T=s[1],A=s[5],et=s[9],nt=s[13],rt=s[2],mt=s[6],H=s[10],z=s[14],$=s[3],ht=s[7],R=s[11],b=s[15];return r[0]=o*O+a*T+l*rt+c*$,r[4]=o*N+a*A+l*mt+c*ht,r[8]=o*U+a*et+l*H+c*R,r[12]=o*E+a*nt+l*z+c*b,r[1]=u*O+d*T+f*rt+p*$,r[5]=u*N+d*A+f*mt+p*ht,r[9]=u*U+d*et+f*H+p*R,r[13]=u*E+d*nt+f*z+p*b,r[2]=x*O+v*T+m*rt+h*$,r[6]=x*N+v*A+m*mt+h*ht,r[10]=x*U+v*et+m*H+h*R,r[14]=x*E+v*nt+m*z+h*b,r[3]=I*O+D*T+w*rt+X*$,r[7]=I*N+D*A+w*mt+X*ht,r[11]=I*U+D*et+w*H+X*R,r[15]=I*E+D*nt+w*z+X*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],x=t[3],v=t[7],m=t[11],h=t[15];return x*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*p-i*l*p)+v*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+m*(+e*c*d-e*a*p-r*o*d+i*o*p+r*a*u-i*c*u)+h*(-s*a*u-e*l*d+e*a*f+s*o*d-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],x=t[12],v=t[13],m=t[14],h=t[15],I=d*m*c-v*f*c+v*l*p-a*m*p-d*l*h+a*f*h,D=x*f*c-u*m*c-x*l*p+o*m*p+u*l*h-o*f*h,w=u*v*c-x*d*c+x*a*p-o*v*p-u*a*h+o*d*h,X=x*d*l-u*v*l-x*a*f+o*v*f+u*a*m-o*d*m,O=e*I+i*D+s*w+r*X;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/O;return t[0]=I*N,t[1]=(v*f*r-d*m*r-v*s*p+i*m*p+d*s*h-i*f*h)*N,t[2]=(a*m*r-v*l*r+v*s*c-i*m*c-a*s*h+i*l*h)*N,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*p-i*l*p)*N,t[4]=D*N,t[5]=(u*m*r-x*f*r+x*s*p-e*m*p-u*s*h+e*f*h)*N,t[6]=(x*l*r-o*m*r-x*s*c+e*m*c+o*s*h-e*l*h)*N,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*N,t[8]=w*N,t[9]=(x*d*r-u*v*r-x*i*p+e*v*p+u*i*h-e*d*h)*N,t[10]=(o*v*r-x*a*r+x*i*c-e*v*c-o*i*h+e*a*h)*N,t[11]=(u*a*r-o*d*r-u*i*c+e*d*c+o*i*p-e*a*p)*N,t[12]=X*N,t[13]=(u*v*s-x*d*s+x*i*f-e*v*f-u*i*m+e*d*m)*N,t[14]=(x*a*s-o*v*s-x*i*l+e*v*l+o*i*m-e*a*m)*N,t[15]=(o*d*s-u*a*s+u*i*l-e*d*l-o*i*f+e*a*f)*N,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,x=r*d,v=o*u,m=o*d,h=a*d,I=l*c,D=l*u,w=l*d,X=i.x,O=i.y,N=i.z;return s[0]=(1-(v+h))*X,s[1]=(p+w)*X,s[2]=(x-D)*X,s[3]=0,s[4]=(p-w)*O,s[5]=(1-(f+h))*O,s[6]=(m+I)*O,s[7]=0,s[8]=(x+D)*N,s[9]=(m-I)*N,s[10]=(1-(f+v))*N,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Ps.set(s[0],s[1],s[2]).length();const o=Ps.set(s[4],s[5],s[6]).length(),a=Ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],An.copy(this);const c=1/r,u=1/o,d=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,e.setFromRotationMatrix(An),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=yi){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s);let p,x;if(a===yi)p=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===fa)p=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yi){const l=this.elements,c=1/(e-t),u=1/(i-s),d=1/(o-r),f=(e+t)*c,p=(i+s)*u;let x,v;if(a===yi)x=(o+r)*d,v=-2*d;else if(a===fa)x=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ps=new J,An=new Se,Wb=new J(0,0,0),$b=new J(1,1,1),Ii=new J,xo=new J,cn=new J,Vd=new Se,Hd=new ys;class ti{constructor(t=0,e=0,i=0,s=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Vd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class vu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Xb=0;const Gd=new J,Ls=new ys,ai=new Se,yo=new J,Sr=new J,jb=new J,Yb=new ys,Wd=new J(1,0,0),$d=new J(0,1,0),Xd=new J(0,0,1),jd={type:"added"},qb={type:"removed"},Ds={type:"childadded",child:null},fl={type:"childremoved",child:null};class ze extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xb++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ze.DEFAULT_UP.clone();const t=new J,e=new ti,i=new ys,s=new J(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Jt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(Wd,t)}rotateY(t){return this.rotateOnAxis($d,t)}rotateZ(t){return this.rotateOnAxis(Xd,t)}translateOnAxis(t,e){return Gd.copy(t).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wd,t)}translateY(t){return this.translateOnAxis($d,t)}translateZ(t){return this.translateOnAxis(Xd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yo.copy(t):yo.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Sr,yo,this.up):ai.lookAt(yo,Sr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Ls.setFromRotationMatrix(ai),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qb),fl.child=t,this.dispatchEvent(fl),fl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ai.multiply(t.parent.matrixWorld)),t.applyMatrix4(ai),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jd),Ds.child=t,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,jb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Yb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ze.DEFAULT_UP=new J(0,1,0);ze.DEFAULT_MATRIX_AUTO_UPDATE=!0;ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new J,li=new J,hl=new J,ci=new J,Is=new J,Us=new J,Yd=new J,pl=new J,ml=new J,gl=new J,_l=new Te,vl=new Te,xl=new Te;class dn{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Cn.subVectors(t,e),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Cn.subVectors(s,e),li.subVectors(i,e),hl.subVectors(t,e);const o=Cn.dot(Cn),a=Cn.dot(li),l=Cn.dot(hl),c=li.dot(li),u=li.dot(hl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,x=(o*u-a*l)*f;return r.set(1-p-x,x,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(o,ci.y),l.addScaledVector(a,ci.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return _l.setScalar(0),vl.setScalar(0),xl.setScalar(0),_l.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,i),xl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_l,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(xl,r.z),o}static isFrontFacing(t,e,i,s){return Cn.subVectors(i,e),li.subVectors(t,e),Cn.cross(li).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Cn.cross(li).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Is.subVectors(s,i),Us.subVectors(r,i),pl.subVectors(t,i);const l=Is.dot(pl),c=Us.dot(pl);if(l<=0&&c<=0)return e.copy(i);ml.subVectors(t,s);const u=Is.dot(ml),d=Us.dot(ml);if(u>=0&&d<=u)return e.copy(s);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Is,o);gl.subVectors(t,r);const p=Is.dot(gl),x=Us.dot(gl);if(x>=0&&p<=x)return e.copy(r);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(i).addScaledVector(Us,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Yd.subVectors(r,s),a=(d-u)/(d-u+(p-x)),e.copy(s).addScaledVector(Yd,a);const h=1/(m+v+f);return o=v*h,a=f*h,e.copy(i).addScaledVector(Is,o).addScaledVector(Us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},bo={h:0,s:0,l:0};function yl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=i,ie.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ie.workingColorSpace){if(t=Db(t,1),e=Qe(e,0,1),i=Qe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=yl(o,r,t+1/3),this.g=yl(o,r,t),this.b=yl(o,r,t-1/3)}return ie.toWorkingColorSpace(this,s),this}setStyle(t,e=vn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=vn){const i=Rp[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=vn){return ie.fromWorkingColorSpace(We.copy(this),t),Math.round(Qe(We.r*255,0,255))*65536+Math.round(Qe(We.g*255,0,255))*256+Math.round(Qe(We.b*255,0,255))}getHexString(t=vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(We.copy(this),e);const i=We.r,s=We.g,r=We.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=vn){ie.fromWorkingColorSpace(We.copy(this),t);const e=We.r,i=We.g,s=We.b;return t!==vn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ui),this.setHSL(Ui.h+t,Ui.s+e,Ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ui),t.getHSL(bo);const i=il(Ui.h,bo.h,e),s=il(Ui.s,bo.s,e),r=il(Ui.l,bo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const We=new Xt;Xt.NAMES=Rp;let Kb=0;class Ms extends bs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kb++}),this.uuid=Wi(),this.name="",this.blending=Ks,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ql,this.blendDst=tc,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ql&&(i.blendSrc=this.blendSrc),this.blendDst!==tc&&(i.blendDst=this.blendDst),this.blendEquation!==ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pp extends Ms{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new J,Mo=new $t;class On{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Bc,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Bc&&(t.usage=this.usage),t}}class Lp extends On{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Dp extends On{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Mn extends On{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Zb=0;const _n=new Se,bl=new ze,Ns=new J,un=new no,Er=new no,Oe=new J;class tn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zb++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tp(t)?Dp:Lp)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return bl.lookAt(t),bl.updateMatrix(),this.applyMatrix4(bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];un.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Er.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(un.min,Er.min),un.expandByPoint(Oe),Oe.addVectors(un.max,Er.max),un.expandByPoint(Oe)):(un.expandByPoint(Er.min),un.expandByPoint(Er.max))}un.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Oe.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Oe.add(Ns)),s=Math.max(s,i.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new J,l[U]=new J;const c=new J,u=new J,d=new J,f=new $t,p=new $t,x=new $t,v=new J,m=new J;function h(U,E,T){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,T),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,E),x.fromBufferAttribute(r,T),u.sub(c),d.sub(c),p.sub(f),x.sub(f);const A=1/(p.x*x.y-x.x*p.y);isFinite(A)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(A),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(A),a[U].add(v),a[E].add(v),a[T].add(v),l[U].add(m),l[E].add(m),l[T].add(m))}let I=this.groups;I.length===0&&(I=[{start:0,count:t.count}]);for(let U=0,E=I.length;U<E;++U){const T=I[U],A=T.start,et=T.count;for(let nt=A,rt=A+et;nt<rt;nt+=3)h(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const D=new J,w=new J,X=new J,O=new J;function N(U){X.fromBufferAttribute(s,U),O.copy(X);const E=a[U];D.copy(E),D.sub(X.multiplyScalar(X.dot(E))).normalize(),w.crossVectors(O,E);const A=w.dot(l[U])<0?-1:1;o.setXYZW(U,D.x,D.y,D.z,A)}for(let U=0,E=I.length;U<E;++U){const T=I[U],A=T.start,et=T.count;for(let nt=A,rt=A+et;nt<rt;nt+=3)N(t.getX(nt+0)),N(t.getX(nt+1)),N(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new J,r=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(t)for(let f=0,p=t.count;f<p;f+=3){const x=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let h=0;h<u;h++)f[x++]=c[p++]}return new On(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new tn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=t(f,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qd=new Se,es=new Fa,So=new Oa,Kd=new J,Eo=new J,wo=new J,To=new J,Ml=new J,Ao=new J,Zd=new J,Co=new J;class Dn extends ze{constructor(t=new tn,e=new Pp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],d=r[l];u!==0&&(Ml.fromBufferAttribute(d,t),o?Ao.addScaledVector(Ml,u):Ao.addScaledVector(Ml.sub(e),u))}e.add(Ao)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),So.copy(i.boundingSphere),So.applyMatrix4(r),es.copy(t.ray).recast(t.near),!(So.containsPoint(es.origin)===!1&&(es.intersectSphere(So,Kd)===null||es.origin.distanceToSquared(Kd)>(t.far-t.near)**2))&&(qd.copy(r).invert(),es.copy(t.ray).applyMatrix4(qd),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],h=o[m.materialIndex],I=Math.max(m.start,p.start),D=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=I,X=D;w<X;w+=3){const O=a.getX(w),N=a.getX(w+1),U=a.getX(w+2);s=Ro(this,h,t,i,c,u,d,O,N,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const I=a.getX(m),D=a.getX(m+1),w=a.getX(m+2);s=Ro(this,o,t,i,c,u,d,I,D,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=f.length;x<v;x++){const m=f[x],h=o[m.materialIndex],I=Math.max(m.start,p.start),D=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=I,X=D;w<X;w+=3){const O=w,N=w+1,U=w+2;s=Ro(this,h,t,i,c,u,d,O,N,U),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,h=v;m<h;m+=3){const I=m,D=m+1,w=m+2;s=Ro(this,o,t,i,c,u,d,I,D,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Jb(n,t,e,i,s,r,o,a){let l;if(t.side===an?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ji,a),l===null)return null;Co.copy(a),Co.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Ro(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Eo),n.getVertexPosition(l,wo),n.getVertexPosition(c,To);const u=Jb(n,t,e,i,Eo,wo,To,Zd);if(u){const d=new J;dn.getBarycoord(Zd,Eo,wo,To,d),s&&(u.uv=dn.getInterpolatedAttribute(s,a,l,c,d,new $t)),r&&(u.uv1=dn.getInterpolatedAttribute(r,a,l,c,d,new $t)),o&&(u.normal=dn.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};dn.getNormal(Eo,wo,To,f.normal),u.face=f,u.barycoord=d}return u}class fr extends tn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(d,2));function x(v,m,h,I,D,w,X,O,N,U,E){const T=w/N,A=X/U,et=w/2,nt=X/2,rt=O/2,mt=N+1,H=U+1;let z=0,$=0;const ht=new J;for(let R=0;R<H;R++){const b=R*A-nt;for(let ct=0;ct<mt;ct++){const gt=ct*T-et;ht[v]=gt*I,ht[m]=b*D,ht[h]=rt,c.push(ht.x,ht.y,ht.z),ht[v]=0,ht[m]=0,ht[h]=O>0?1:-1,u.push(ht.x,ht.y,ht.z),d.push(ct/N),d.push(1-R/U),z+=1}}for(let R=0;R<U;R++)for(let b=0;b<N;b++){const ct=f+b+mt*R,gt=f+b+mt*(R+1),Y=f+(b+1)+mt*(R+1),lt=f+(b+1)+mt*R;l.push(ct,gt,lt),l.push(gt,Y,lt),$+=6}a.addGroup(p,$,E),p+=$,f+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function lr(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ke(n){const t={};for(let e=0;e<n.length;e++){const i=lr(n[e]);for(const s in i)t[s]=i[s]}return t}function Qb(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ip(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const tM={clone:lr,merge:Ke};var eM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ms{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eM,this.fragmentShader=nM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=Qb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Up extends ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new J,Jd=new $t,Qd=new $t;class xn extends Up{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(Vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-t/Ni.z)}getViewSize(t,e){return this.getViewBounds(t,Jd,Qd),e.subVectors(Qd,Jd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Os=-90,Fs=1;class iM extends ze{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new xn(Os,Fs,t,e);s.layers=this.layers,this.add(s);const r=new xn(Os,Fs,t,e);r.layers=this.layers,this.add(r);const o=new xn(Os,Fs,t,e);o.layers=this.layers,this.add(o);const a=new xn(Os,Fs,t,e);a.layers=this.layers,this.add(a);const l=new xn(Os,Fs,t,e);l.layers=this.layers,this.add(l);const c=new xn(Os,Fs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Np extends nn{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sM extends xs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Np(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fr(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Gi});r.uniforms.tEquirect.value=e;const o=new Dn(s,r),a=e.minFilter;return e.minFilter===ps&&(e.minFilter=Pn),new iM(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const Sl=new J,rM=new J,oM=new Jt;class zi{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Sl.subVectors(i,e).cross(rM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||oM.getNormalMatrix(t),s=this.coplanarPoint(Sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ns=new Oa,Po=new J;class xu{constructor(t=new zi,e=new zi,i=new zi,s=new zi,r=new zi,o=new zi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],x=s[9],v=s[10],m=s[11],h=s[12],I=s[13],D=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,m-p,w-h).normalize(),i[1].setComponents(l+r,f+c,m+p,w+h).normalize(),i[2].setComponents(l+o,f+u,m+x,w+I).normalize(),i[3].setComponents(l-o,f-u,m-x,w-I).normalize(),i[4].setComponents(l-a,f-d,m-v,w-D).normalize(),e===yi)i[5].setComponents(l+a,f+d,m+v,w+D).normalize();else if(e===fa)i[5].setComponents(a,d,v,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(t){return ns.center.set(0,0,0),ns.radius=.7071067811865476,ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Po.x=s.normal.x>0?t.max.x:t.min.x,Po.y=s.normal.y>0?t.max.y:t.min.y,Po.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Op(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function aM(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let f=0;for(let p=1;p<d.length;p++){const x=d[f],v=d[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,x=d.length;p<x;p++){const v=d[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class io extends tn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],x=[],v=[],m=[];for(let h=0;h<u;h++){const I=h*f-o;for(let D=0;D<c;D++){const w=D*d-r;x.push(w,-I,0),v.push(0,0,1),m.push(D/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let I=0;I<a;I++){const D=I+c*h,w=I+c*(h+1),X=I+1+c*(h+1),O=I+1+c*h;p.push(D,w,O),p.push(w,X,O)}this.setIndex(p),this.setAttribute("position",new Mn(x,3)),this.setAttribute("normal",new Mn(v,3)),this.setAttribute("uv",new Mn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.width,t.height,t.widthSegments,t.heightSegments)}}var lM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cM=`#ifdef USE_ALPHAHASH
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
#endif`,uM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pM=`#ifdef USE_AOMAP
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
#endif`,mM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bM=`#ifdef USE_IRIDESCENCE
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
#endif`,MM=`#ifdef USE_BUMPMAP
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
#endif`,SM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,LM=`#define PI 3.141592653589793
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
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IM=`vec3 transformedNormal = objectNormal;
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
#endif`,UM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,FM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",zM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qM=`#ifdef USE_GRADIENTMAP
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
}`,KM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,e1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,i1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r1=`PhysicalMaterial material;
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
#endif`,o1=`struct PhysicalMaterial {
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
}`,a1=`
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
#endif`,l1=`#if defined( RE_IndirectDiffuse )
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
#endif`,c1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,u1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_1=`#if defined( USE_POINTS_UV )
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
#endif`,v1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,b1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,M1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S1=`#ifdef USE_MORPHTARGETS
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
#endif`,E1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,L1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,D1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,I1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,U1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,B1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X1=`float getShadowMask() {
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
}`,j1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Y1=`#ifdef USE_SKINNING
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
#endif`,q1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K1=`#ifdef USE_SKINNING
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
#endif`,Z1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q1=`#if defined( TONE_MAPPING )
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
}`,zS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:lM,alphahash_pars_fragment:cM,alphamap_fragment:uM,alphamap_pars_fragment:dM,alphatest_fragment:fM,alphatest_pars_fragment:hM,aomap_fragment:pM,aomap_pars_fragment:mM,batching_pars_vertex:gM,batching_vertex:_M,begin_vertex:vM,beginnormal_vertex:xM,bsdfs:yM,iridescence_fragment:bM,bumpmap_pars_fragment:MM,clipping_planes_fragment:SM,clipping_planes_pars_fragment:EM,clipping_planes_pars_vertex:wM,clipping_planes_vertex:TM,color_fragment:AM,color_pars_fragment:CM,color_pars_vertex:RM,color_vertex:PM,common:LM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:IM,displacementmap_pars_vertex:UM,displacementmap_vertex:NM,emissivemap_fragment:OM,emissivemap_pars_fragment:FM,colorspace_fragment:BM,colorspace_pars_fragment:zM,envmap_fragment:kM,envmap_common_pars_fragment:VM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:t1,envmap_vertex:WM,fog_vertex:$M,fog_pars_vertex:XM,fog_fragment:jM,fog_pars_fragment:YM,gradientmap_pars_fragment:qM,lightmap_pars_fragment:KM,lights_lambert_fragment:ZM,lights_lambert_pars_fragment:JM,lights_pars_begin:QM,lights_toon_fragment:e1,lights_toon_pars_fragment:n1,lights_phong_fragment:i1,lights_phong_pars_fragment:s1,lights_physical_fragment:r1,lights_physical_pars_fragment:o1,lights_fragment_begin:a1,lights_fragment_maps:l1,lights_fragment_end:c1,logdepthbuf_fragment:u1,logdepthbuf_pars_fragment:d1,logdepthbuf_pars_vertex:f1,logdepthbuf_vertex:h1,map_fragment:p1,map_pars_fragment:m1,map_particle_fragment:g1,map_particle_pars_fragment:_1,metalnessmap_fragment:v1,metalnessmap_pars_fragment:x1,morphinstance_vertex:y1,morphcolor_vertex:b1,morphnormal_vertex:M1,morphtarget_pars_vertex:S1,morphtarget_vertex:E1,normal_fragment_begin:w1,normal_fragment_maps:T1,normal_pars_fragment:A1,normal_pars_vertex:C1,normal_vertex:R1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:L1,clearcoat_normal_fragment_maps:D1,clearcoat_pars_fragment:I1,iridescence_pars_fragment:U1,opaque_fragment:N1,packing:O1,premultiplied_alpha_fragment:F1,project_vertex:B1,dithering_fragment:z1,dithering_pars_fragment:k1,roughnessmap_fragment:V1,roughnessmap_pars_fragment:H1,shadowmap_pars_fragment:G1,shadowmap_pars_vertex:W1,shadowmap_vertex:$1,shadowmask_pars_fragment:X1,skinbase_vertex:j1,skinning_pars_vertex:Y1,skinning_vertex:q1,skinnormal_vertex:K1,specularmap_fragment:Z1,specularmap_pars_fragment:J1,tonemapping_fragment:Q1,tonemapping_pars_fragment:tS,transmission_fragment:eS,transmission_pars_fragment:nS,uv_pars_fragment:iS,uv_pars_vertex:sS,uv_vertex:rS,worldpos_vertex:oS,background_vert:aS,background_frag:lS,backgroundCube_vert:cS,backgroundCube_frag:uS,cube_vert:dS,cube_frag:fS,depth_vert:hS,depth_frag:pS,distanceRGBA_vert:mS,distanceRGBA_frag:gS,equirect_vert:_S,equirect_frag:vS,linedashed_vert:xS,linedashed_frag:yS,meshbasic_vert:bS,meshbasic_frag:MS,meshlambert_vert:SS,meshlambert_frag:ES,meshmatcap_vert:wS,meshmatcap_frag:TS,meshnormal_vert:AS,meshnormal_frag:CS,meshphong_vert:RS,meshphong_frag:PS,meshphysical_vert:LS,meshphysical_frag:DS,meshtoon_vert:IS,meshtoon_frag:US,points_vert:NS,points_frag:OS,shadow_vert:FS,shadow_frag:BS,sprite_vert:zS,sprite_frag:kS},Lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Xn={basic:{uniforms:Ke([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ke([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ke([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ke([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ke([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ke([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ke([Lt.points,Lt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ke([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ke([Lt.common,Lt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ke([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ke([Lt.sprite,Lt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ke([Lt.common,Lt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ke([Lt.lights,Lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Xn.physical={uniforms:Ke([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Lo={r:0,b:0,g:0},is=new ti,VS=new Se;function HS(n,t,e,i,s,r,o){const a=new Xt(0);let l=r===!0?0:1,c,u,d=null,f=0,p=null;function x(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?e:t).get(D)),D}function v(I){let D=!1;const w=x(I);w===null?h(a,l):w&&w.isColor&&(h(w,1),D=!0);const X=n.xr.getEnvironmentBlendMode();X==="additive"?i.buffers.color.setClear(0,0,0,1,o):X==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(I,D){const w=x(D);w&&(w.isCubeTexture||w.mapping===Ua)?(u===void 0&&(u=new Dn(new fr(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:lr(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(X,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),is.copy(D.backgroundRotation),is.x*=-1,is.y*=-1,is.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(VS.makeRotationFromEuler(is)),u.material.toneMapped=ie.getTransfer(w.colorSpace)!==he,(d!==w||f!==w.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),u.layers.enableAll(),I.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Dn(new io(2,2),new Yi({name:"BackgroundMaterial",uniforms:lr(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,c.material.toneMapped=ie.getTransfer(w.colorSpace)!==he,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,p=n.toneMapping),c.layers.enableAll(),I.unshift(c,c.geometry,c.material,0,0,null))}function h(I,D){I.getRGB(Lo,Ip(n)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,D,o)}return{getClearColor:function(){return a},setClearColor:function(I,D=1){a.set(I),l=D,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(I){l=I,h(a,l)},render:v,addToRenderList:m}}function GS(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(T,A,et,nt,rt){let mt=!1;const H=d(nt,et,A);r!==H&&(r=H,c(r.object)),mt=p(T,nt,et,rt),mt&&x(T,nt,et,rt),rt!==null&&t.update(rt,n.ELEMENT_ARRAY_BUFFER),(mt||o)&&(o=!1,w(T,A,et,nt),rt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function u(T){return n.deleteVertexArray(T)}function d(T,A,et){const nt=et.wireframe===!0;let rt=i[T.id];rt===void 0&&(rt={},i[T.id]=rt);let mt=rt[A.id];mt===void 0&&(mt={},rt[A.id]=mt);let H=mt[nt];return H===void 0&&(H=f(l()),mt[nt]=H),H}function f(T){const A=[],et=[],nt=[];for(let rt=0;rt<e;rt++)A[rt]=0,et[rt]=0,nt[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:et,attributeDivisors:nt,object:T,attributes:{},index:null}}function p(T,A,et,nt){const rt=r.attributes,mt=A.attributes;let H=0;const z=et.getAttributes();for(const $ in z)if(z[$].location>=0){const R=rt[$];let b=mt[$];if(b===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(b=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(b=T.instanceColor)),R===void 0||R.attribute!==b||b&&R.data!==b.data)return!0;H++}return r.attributesNum!==H||r.index!==nt}function x(T,A,et,nt){const rt={},mt=A.attributes;let H=0;const z=et.getAttributes();for(const $ in z)if(z[$].location>=0){let R=mt[$];R===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(R=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(R=T.instanceColor));const b={};b.attribute=R,R&&R.data&&(b.data=R.data),rt[$]=b,H++}r.attributes=rt,r.attributesNum=H,r.index=nt}function v(){const T=r.newAttributes;for(let A=0,et=T.length;A<et;A++)T[A]=0}function m(T){h(T,0)}function h(T,A){const et=r.newAttributes,nt=r.enabledAttributes,rt=r.attributeDivisors;et[T]=1,nt[T]===0&&(n.enableVertexAttribArray(T),nt[T]=1),rt[T]!==A&&(n.vertexAttribDivisor(T,A),rt[T]=A)}function I(){const T=r.newAttributes,A=r.enabledAttributes;for(let et=0,nt=A.length;et<nt;et++)A[et]!==T[et]&&(n.disableVertexAttribArray(et),A[et]=0)}function D(T,A,et,nt,rt,mt,H){H===!0?n.vertexAttribIPointer(T,A,et,rt,mt):n.vertexAttribPointer(T,A,et,nt,rt,mt)}function w(T,A,et,nt){v();const rt=nt.attributes,mt=et.getAttributes(),H=A.defaultAttributeValues;for(const z in mt){const $=mt[z];if($.location>=0){let ht=rt[z];if(ht===void 0&&(z==="instanceMatrix"&&T.instanceMatrix&&(ht=T.instanceMatrix),z==="instanceColor"&&T.instanceColor&&(ht=T.instanceColor)),ht!==void 0){const R=ht.normalized,b=ht.itemSize,ct=t.get(ht);if(ct===void 0)continue;const gt=ct.buffer,Y=ct.type,lt=ct.bytesPerElement,yt=Y===n.INT||Y===n.UNSIGNED_INT||ht.gpuType===fu;if(ht.isInterleavedBufferAttribute){const B=ht.data,G=B.stride,j=ht.offset;if(B.isInstancedInterleavedBuffer){for(let ut=0;ut<$.locationSize;ut++)h($.location+ut,B.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ut=0;ut<$.locationSize;ut++)m($.location+ut);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let ut=0;ut<$.locationSize;ut++)D($.location+ut,b/$.locationSize,Y,R,G*lt,(j+b/$.locationSize*ut)*lt,yt)}else{if(ht.isInstancedBufferAttribute){for(let B=0;B<$.locationSize;B++)h($.location+B,ht.meshPerAttribute);T.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let B=0;B<$.locationSize;B++)m($.location+B);n.bindBuffer(n.ARRAY_BUFFER,gt);for(let B=0;B<$.locationSize;B++)D($.location+B,b/$.locationSize,Y,R,b*lt,b/$.locationSize*B*lt,yt)}}else if(H!==void 0){const R=H[z];if(R!==void 0)switch(R.length){case 2:n.vertexAttrib2fv($.location,R);break;case 3:n.vertexAttrib3fv($.location,R);break;case 4:n.vertexAttrib4fv($.location,R);break;default:n.vertexAttrib1fv($.location,R)}}}}I()}function X(){U();for(const T in i){const A=i[T];for(const et in A){const nt=A[et];for(const rt in nt)u(nt[rt].object),delete nt[rt];delete A[et]}delete i[T]}}function O(T){if(i[T.id]===void 0)return;const A=i[T.id];for(const et in A){const nt=A[et];for(const rt in nt)u(nt[rt].object),delete nt[rt];delete A[et]}delete i[T.id]}function N(T){for(const A in i){const et=i[A];if(et[T.id]===void 0)continue;const nt=et[T.id];for(const rt in nt)u(nt[rt].object),delete nt[rt];delete et[T.id]}}function U(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:E,dispose:X,releaseStatesOfGeometry:O,releaseStatesOfProgram:N,initAttributes:v,enableAttribute:m,disableUnusedAttributes:I}}function WS(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),e.update(u,i,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];e.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],f[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v]*f[v];e.update(x,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function $S(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(N){return!(N!==Ln&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(N){const U=N===eo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==Ei&&i.convert(N)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==xi&&!U)}function l(N){if(N==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),I=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),X=x>0,O=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:X,maxSamples:O}}function XS(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new zi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?u(null):c();else{const I=r?0:i,D=I*4;let w=h.clippingState||null;l.value=w,w=u(x,f,D,p);for(let X=0;X!==D;++X)w[X]=e[X];h.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,f,p,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const h=p+v*4,I=f.matrixWorldInverse;a.getNormalMatrix(I),(m===null||m.length<h)&&(m=new Float32Array(h));for(let D=0,w=p;D!==v;++D,w+=4)o.copy(d[D]).applyMatrix4(I,a),o.normal.toArray(m,w),m[w+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function jS(n){let t=new WeakMap;function e(o,a){return a===lc?o.mapping=sr:a===cc&&(o.mapping=rr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lc||a===cc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new sM(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Fp extends Up{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Xs=4,tf=[.125,.215,.35,.446,.526,.582],cs=20,El=new Fp,ef=new Xt;let wl=null,Tl=0,Al=0,Cl=!1;const os=(1+Math.sqrt(5))/2,Bs=1/os,nf=[new J(-os,Bs,0),new J(os,Bs,0),new J(-Bs,0,os),new J(Bs,0,os),new J(0,os,-Bs),new J(0,os,Bs),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl,Tl,Al),this._renderer.xr.enabled=Cl,t.scissorTest=!1,Do(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),Cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:eo,format:Ln,colorSpace:dr,depthBuffer:!1},s=rf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rf(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YS(r)),this._blurMaterial=qS(r,t,e)}return s}_compileMaterial(t){const e=new Dn(this._lodPlanes[0],t);this._renderer.compile(e,El)}_sceneToCubeUV(t,e,i,s){const a=new xn(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ef),u.toneMapping=bi,u.autoClear=!1;const p=new Pp({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),x=new Dn(new fr,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(ef),v=!0);for(let h=0;h<6;h++){const I=h%3;I===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):I===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const D=this._cubeSize;Do(s,I*D,h>2?D:0,D,D),u.setRenderTarget(s),v&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===sr||t.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=of());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Dn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Do(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,El)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nf[(s-r-1)%nf.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Dn(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cs-1),v=r/x,m=isFinite(r)?1+Math.floor(u*v):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const h=[];let I=0;for(let N=0;N<cs;++N){const U=N/v,E=Math.exp(-U*U/2);h.push(E),N===0?I+=E:N<m&&(I+=2*E)}for(let N=0;N<h.length;N++)h[N]=h[N]/I;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:D}=this;f.dTheta.value=x,f.mipInt.value=D-i;const w=this._sizeLods[s],X=3*w*(s>D-Xs?s-D+Xs:0),O=4*(this._cubeSize-w);Do(e,X,O,3*w,2*w),l.setRenderTarget(e),l.render(d,El)}}function YS(n){const t=[],e=[],i=[];let s=n;const r=n-Xs+1+tf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Xs?l=tf[o-n+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,v=3,m=2,h=1,I=new Float32Array(v*x*p),D=new Float32Array(m*x*p),w=new Float32Array(h*x*p);for(let O=0;O<p;O++){const N=O%3*2/3-1,U=O>2?0:-1,E=[N,U,0,N+2/3,U,0,N+2/3,U+1,0,N,U,0,N+2/3,U+1,0,N,U+1,0];I.set(E,v*x*O),D.set(f,m*x*O);const T=[O,O,O,O,O,O];w.set(T,h*x*O)}const X=new tn;X.setAttribute("position",new On(I,v)),X.setAttribute("uv",new On(D,m)),X.setAttribute("faceIndex",new On(w,h)),t.push(X),s>Xs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function rf(n,t,e){const i=new xs(n,t,e);return i.texture.mapping=Ua,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Do(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function qS(n,t,e){const i=new Float32Array(cs),s=new J(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function of(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function af(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function KS(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===lc||l===cc,u=l===sr||l===rr;if(c||u){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new sf(n)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function ZS(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Lr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function JS(n,t,e,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const x in f.attributes)t.remove(f.attributes[x]);for(const x in f.morphAttributes){const v=f.morphAttributes[x];for(let m=0,h=v.length;m<h;m++)t.remove(v[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const x in f)t.update(f[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const v=p[x];for(let m=0,h=v.length;m<h;m++)t.update(v[m],n.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,x=d.attributes.position;let v=0;if(p!==null){const I=p.array;v=p.version;for(let D=0,w=I.length;D<w;D+=3){const X=I[D+0],O=I[D+1],N=I[D+2];f.push(X,O,O,N,N,X)}}else if(x!==void 0){const I=x.array;v=x.version;for(let D=0,w=I.length/3-1;D<w;D+=3){const X=D+0,O=D+1,N=D+2;f.push(X,O,O,N,N,X)}}else return;const m=new(Tp(f)?Dp:Lp)(f,1);m.version=v;const h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){const f=r.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function QS(n,t,e){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,r,f*o),e.update(p,i,1)}function c(f,p,x){x!==0&&(n.drawElementsInstanced(i,p,r,f*o,x),e.update(p,i,x))}function u(f,p,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,f,0,x);let m=0;for(let h=0;h<x;h++)m+=p[h];e.update(m,i,1)}function d(f,p,x,v){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,f,0,v,0,x);let h=0;for(let I=0;I<x;I++)h+=p[I]*v[I];e.update(h,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function tE(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function eE(n,t,e){const i=new WeakMap,s=new Te;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let T=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],I=a.morphAttributes.normal||[],D=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),v===!0&&(w=2),m===!0&&(w=3);let X=a.attributes.position.count*w,O=1;X>t.maxTextureSize&&(O=Math.ceil(X/t.maxTextureSize),X=t.maxTextureSize);const N=new Float32Array(X*O*4*d),U=new Cp(N,X,O,d);U.type=xi,U.needsUpdate=!0;const E=w*4;for(let A=0;A<d;A++){const et=h[A],nt=I[A],rt=D[A],mt=X*O*4*A;for(let H=0;H<et.count;H++){const z=H*E;x===!0&&(s.fromBufferAttribute(et,H),N[mt+z+0]=s.x,N[mt+z+1]=s.y,N[mt+z+2]=s.z,N[mt+z+3]=0),v===!0&&(s.fromBufferAttribute(nt,H),N[mt+z+4]=s.x,N[mt+z+5]=s.y,N[mt+z+6]=s.z,N[mt+z+7]=0),m===!0&&(s.fromBufferAttribute(rt,H),N[mt+z+8]=s.x,N[mt+z+9]=s.y,N[mt+z+10]=s.z,N[mt+z+11]=rt.itemSize===4?s.w:1)}}f={count:d,texture:U,size:new $t(X,O)},i.set(a,f),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function nE(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Bp extends nn{constructor(t,e,i,s,r,o,a,l,c,u=Zs){if(u!==Zs&&u!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Zs&&(i=vs),i===void 0&&u===ar&&(i=or),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zp=new nn,lf=new Bp(1,1),kp=new Cp,Vp=new Hb,Hp=new Np,cf=[],uf=[],df=new Float32Array(16),ff=new Float32Array(9),hf=new Float32Array(4);function hr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=cf[s];if(r===void 0&&(r=new Float32Array(s),cf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ba(n,t){let e=uf[t];e===void 0&&(e=new Int32Array(t),uf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function iE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function rE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function oE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function aE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;hf.set(i),n.uniformMatrix2fv(this.addr,!1,hf),Ne(e,i)}}function lE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;ff.set(i),n.uniformMatrix3fv(this.addr,!1,ff),Ne(e,i)}}function cE(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;df.set(i),n.uniformMatrix4fv(this.addr,!1,df),Ne(e,i)}}function uE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function dE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function fE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function hE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function pE(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function mE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function gE(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function _E(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function vE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=wp,r=lf):r=zp,e.setTexture2D(t||r,s)}function xE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vp,s)}function yE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Hp,s)}function bE(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||kp,s)}function ME(n){switch(n){case 5126:return iE;case 35664:return sE;case 35665:return rE;case 35666:return oE;case 35674:return aE;case 35675:return lE;case 35676:return cE;case 5124:case 35670:return uE;case 35667:case 35671:return dE;case 35668:case 35672:return fE;case 35669:case 35673:return hE;case 5125:return pE;case 36294:return mE;case 36295:return gE;case 36296:return _E;case 35678:case 36198:case 36298:case 36306:case 35682:return vE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return yE;case 36289:case 36303:case 36311:case 36292:return bE}}function SE(n,t){n.uniform1fv(this.addr,t)}function EE(n,t){const e=hr(t,this.size,2);n.uniform2fv(this.addr,e)}function wE(n,t){const e=hr(t,this.size,3);n.uniform3fv(this.addr,e)}function TE(n,t){const e=hr(t,this.size,4);n.uniform4fv(this.addr,e)}function AE(n,t){const e=hr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function CE(n,t){const e=hr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function RE(n,t){const e=hr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function PE(n,t){n.uniform1iv(this.addr,t)}function LE(n,t){n.uniform2iv(this.addr,t)}function DE(n,t){n.uniform3iv(this.addr,t)}function IE(n,t){n.uniform4iv(this.addr,t)}function UE(n,t){n.uniform1uiv(this.addr,t)}function NE(n,t){n.uniform2uiv(this.addr,t)}function OE(n,t){n.uniform3uiv(this.addr,t)}function FE(n,t){n.uniform4uiv(this.addr,t)}function BE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||zp,r[o])}function zE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Vp,r[o])}function kE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Hp,r[o])}function VE(n,t,e){const i=this.cache,s=t.length,r=Ba(e,s);Ue(i,r)||(n.uniform1iv(this.addr,r),Ne(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||kp,r[o])}function HE(n){switch(n){case 5126:return SE;case 35664:return EE;case 35665:return wE;case 35666:return TE;case 35674:return AE;case 35675:return CE;case 35676:return RE;case 5124:case 35670:return PE;case 35667:case 35671:return LE;case 35668:case 35672:return DE;case 35669:case 35673:return IE;case 5125:return UE;case 36294:return NE;case 36295:return OE;case 36296:return FE;case 35678:case 36198:case 36298:case 36306:case 35682:return BE;case 35679:case 36299:case 36307:return zE;case 35680:case 36300:case 36308:case 36293:return kE;case 36289:case 36303:case 36311:case 36292:return VE}}class GE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ME(e.type)}}class WE{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=HE(e.type)}}class $E{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Rl=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function XE(n,t,e){const i=n.name,s=i.length;for(Rl.lastIndex=0;;){const r=Rl.exec(i),o=Rl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){pf(e,c===void 0?new GE(a,n,t):new WE(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new $E(a),pf(e,d)),e=d}}}class Qo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);XE(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const jE=37297;let YE=0;function qE(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const gf=new Jt;function KE(n){ie._getMatrix(gf,ie.workingColorSpace,n);const t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(n)){case Na:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function _f(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+qE(n.getShaderSource(t),o)}else return s}function ZE(n,t){const e=KE(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function JE(n,t){let e;switch(t){case pb:e="Linear";break;case mb:e="Reinhard";break;case gb:e="Cineon";break;case _b:e="ACESFilmic";break;case xb:e="AgX";break;case yb:e="Neutral";break;case vb:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Io=new J;function QE(){ie.getLuminanceCoefficients(Io);const n=Io.x.toFixed(4),t=Io.y.toFixed(4),e=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tw(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function ew(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nw(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Dr(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iw=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(n){return n.replace(iw,rw)}const sw=new Map;function rw(n,t){let e=te[t];if(e===void 0){const i=sw.get(t);if(i!==void 0)e=te[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const ow=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yf(n){return n.replace(ow,aw)}function aw(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function lw(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===dp?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jy?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function cw(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case Ua:t="ENVMAP_TYPE_CUBE_UV";break}return t}function uw(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function dw(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:t="ENVMAP_BLENDING_MULTIPLY";break;case fb:t="ENVMAP_BLENDING_MIX";break;case hb:t="ENVMAP_BLENDING_ADD";break}return t}function fw(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function hw(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=lw(e),c=cw(e),u=uw(e),d=dw(e),f=fw(e),p=tw(e),x=ew(r),v=s.createProgram();let m,h,I=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Dr).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Dr).join(`
`),h.length>0&&(h+=`
`)):(m=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),h=[bf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?te.tonemapping_pars_fragment:"",e.toneMapping!==bi?JE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ZE("linearToOutputTexel",e.outputColorSpace),QE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=kc(o),o=vf(o,e),o=xf(o,e),a=kc(a),a=vf(a,e),a=xf(a,e),o=yf(o),a=yf(a),e.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const D=I+m+o,w=I+h+a,X=mf(s,s.VERTEX_SHADER,D),O=mf(s,s.FRAGMENT_SHADER,w);s.attachShader(v,X),s.attachShader(v,O),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function N(A){if(n.debug.checkShaderErrors){const et=s.getProgramInfoLog(v).trim(),nt=s.getShaderInfoLog(X).trim(),rt=s.getShaderInfoLog(O).trim();let mt=!0,H=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,X,O);else{const z=_f(s,X,"vertex"),$=_f(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+et+`
`+z+`
`+$)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(nt===""||rt==="")&&(H=!1);H&&(A.diagnostics={runnable:mt,programLog:et,vertexShader:{log:nt,prefix:m},fragmentShader:{log:rt,prefix:h}})}s.deleteShader(X),s.deleteShader(O),U=new Qo(s,v),E=nw(s,v)}let U;this.getUniforms=function(){return U===void 0&&N(this),U};let E;this.getAttributes=function(){return E===void 0&&N(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(v,jE)),T},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=YE++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=X,this.fragmentShader=O,this}let pw=0;class mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new gw(t),e.set(t,i)),i}}class gw{constructor(t){this.id=pw++,this.code=t,this.usedTimes=0}}function _w(n,t,e,i,s,r,o){const a=new vu,l=new mw,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,T,A,et,nt){const rt=et.fog,mt=nt.geometry,H=E.isMeshStandardMaterial?et.environment:null,z=(E.isMeshStandardMaterial?e:t).get(E.envMap||H),$=z&&z.mapping===Ua?z.image.height:null,ht=x[E.type];E.precision!==null&&(p=s.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const R=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,b=R!==void 0?R.length:0;let ct=0;mt.morphAttributes.position!==void 0&&(ct=1),mt.morphAttributes.normal!==void 0&&(ct=2),mt.morphAttributes.color!==void 0&&(ct=3);let gt,Y,lt,yt;if(ht){const re=Xn[ht];gt=re.vertexShader,Y=re.fragmentShader}else gt=E.vertexShader,Y=E.fragmentShader,l.update(E),lt=l.getVertexShaderID(E),yt=l.getFragmentShaderID(E);const B=n.getRenderTarget(),G=n.state.buffers.depth.getReversed(),j=nt.isInstancedMesh===!0,ut=nt.isBatchedMesh===!0,M=!!E.map,L=!!E.matcap,k=!!z,S=!!E.aoMap,tt=!!E.lightMap,Q=!!E.bumpMap,ot=!!E.normalMap,at=!!E.displacementMap,_t=!!E.emissiveMap,q=!!E.metalnessMap,C=!!E.roughnessMap,_=E.anisotropy>0,y=E.clearcoat>0,F=E.dispersion>0,it=E.iridescence>0,V=E.sheen>0,Et=E.transmission>0,St=_&&!!E.anisotropyMap,vt=y&&!!E.clearcoatMap,Pt=y&&!!E.clearcoatNormalMap,bt=y&&!!E.clearcoatRoughnessMap,At=it&&!!E.iridescenceMap,Ft=it&&!!E.iridescenceThicknessMap,Ut=V&&!!E.sheenColorMap,Tt=V&&!!E.sheenRoughnessMap,Kt=!!E.specularMap,Wt=!!E.specularColorMap,ne=!!E.specularIntensityMap,W=Et&&!!E.transmissionMap,Mt=Et&&!!E.thicknessMap,st=!!E.gradientMap,pt=!!E.alphaMap,Rt=E.alphaTest>0,wt=!!E.alphaHash,It=!!E.extensions;let _e=bi;E.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(_e=n.toneMapping);const Ee={shaderID:ht,shaderType:E.type,shaderName:E.name,vertexShader:gt,fragmentShader:Y,defines:E.defines,customVertexShaderID:lt,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:ut,batchingColor:ut&&nt._colorsTexture!==null,instancing:j,instancingColor:j&&nt.instanceColor!==null,instancingMorph:j&&nt.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:dr,alphaToCoverage:!!E.alphaToCoverage,map:M,matcap:L,envMap:k,envMapMode:k&&z.mapping,envMapCubeUVHeight:$,aoMap:S,lightMap:tt,bumpMap:Q,normalMap:ot,displacementMap:f&&at,emissiveMap:_t,normalMapObjectSpace:ot&&E.normalMapType===Eb,normalMapTangentSpace:ot&&E.normalMapType===Ep,metalnessMap:q,roughnessMap:C,anisotropy:_,anisotropyMap:St,clearcoat:y,clearcoatMap:vt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:bt,dispersion:F,iridescence:it,iridescenceMap:At,iridescenceThicknessMap:Ft,sheen:V,sheenColorMap:Ut,sheenRoughnessMap:Tt,specularMap:Kt,specularColorMap:Wt,specularIntensityMap:ne,transmission:Et,transmissionMap:W,thicknessMap:Mt,gradientMap:st,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:pt,alphaTest:Rt,alphaHash:wt,combine:E.combine,mapUv:M&&v(E.map.channel),aoMapUv:S&&v(E.aoMap.channel),lightMapUv:tt&&v(E.lightMap.channel),bumpMapUv:Q&&v(E.bumpMap.channel),normalMapUv:ot&&v(E.normalMap.channel),displacementMapUv:at&&v(E.displacementMap.channel),emissiveMapUv:_t&&v(E.emissiveMap.channel),metalnessMapUv:q&&v(E.metalnessMap.channel),roughnessMapUv:C&&v(E.roughnessMap.channel),anisotropyMapUv:St&&v(E.anisotropyMap.channel),clearcoatMapUv:vt&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(E.sheenRoughnessMap.channel),specularMapUv:Kt&&v(E.specularMap.channel),specularColorMapUv:Wt&&v(E.specularColorMap.channel),specularIntensityMapUv:ne&&v(E.specularIntensityMap.channel),transmissionMapUv:W&&v(E.transmissionMap.channel),thicknessMapUv:Mt&&v(E.thicknessMap.channel),alphaMapUv:pt&&v(E.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(ot||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!mt.attributes.uv&&(M||pt),fog:!!rt,useFog:E.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:G,skinning:nt.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:b,morphTextureStride:ct,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:_e,decodeVideoTexture:M&&E.map.isVideoTexture===!0&&ie.getTransfer(E.map.colorSpace)===he,decodeVideoTextureEmissive:_t&&E.emissiveMap.isVideoTexture===!0&&ie.getTransfer(E.emissiveMap.colorSpace)===he,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===_i,flipSided:E.side===an,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:It&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&E.extensions.multiDraw===!0||ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function h(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const A in E.defines)T.push(A),T.push(E.defines[A]);return E.isRawShaderMaterial===!1&&(I(T,E),D(T,E),T.push(n.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function I(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function D(E,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function w(E){const T=x[E.type];let A;if(T){const et=Xn[T];A=tM.clone(et.uniforms)}else A=E.uniforms;return A}function X(E,T){let A;for(let et=0,nt=u.length;et<nt;et++){const rt=u[et];if(rt.cacheKey===T){A=rt,++A.usedTimes;break}}return A===void 0&&(A=new hw(n,T,E,r),u.push(A)),A}function O(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function N(E){l.remove(E)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:X,releaseProgram:O,releaseShaderCache:N,programs:u,dispose:U}}function vw(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function xw(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Mf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,p,x,v,m){let h=n[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},n[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=x,h.renderOrder=d.renderOrder,h.z=v,h.group=m),t++,h}function a(d,f,p,x,v,m){const h=o(d,f,p,x,v,m);p.transmission>0?i.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,x,v,m){const h=o(d,f,p,x,v,m);p.transmission>0?i.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||xw),i.length>1&&i.sort(f||Mf),s.length>1&&s.sort(f||Mf)}function u(){for(let d=t,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function yw(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Sf,n.set(i,[o])):s>=r.length?(o=new Sf,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function bw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new J,color:new Xt};break;case"SpotLight":e={position:new J,direction:new J,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function Mw(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Sw=0;function Ew(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ww(n){const t=new bw,e=Mw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const s=new J,r=new Se,o=new Se;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,x=0,v=0,m=0,h=0,I=0,D=0,w=0,X=0,O=0,N=0;c.sort(Ew);for(let E=0,T=c.length;E<T;E++){const A=c[E],et=A.color,nt=A.intensity,rt=A.distance,mt=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)u+=et.r*nt,d+=et.g*nt,f+=et.b*nt;else if(A.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(A.sh.coefficients[H],nt);N++}else if(A.isDirectionalLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const z=A.shadow,$=e.get(A);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=mt,i.directionalShadowMatrix[p]=A.shadow.matrix,I++}i.directional[p]=H,p++}else if(A.isSpotLight){const H=t.get(A);H.position.setFromMatrixPosition(A.matrixWorld),H.color.copy(et).multiplyScalar(nt),H.distance=rt,H.coneCos=Math.cos(A.angle),H.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),H.decay=A.decay,i.spot[v]=H;const z=A.shadow;if(A.map&&(i.spotLightMap[X]=A.map,X++,z.updateMatrices(A),A.castShadow&&O++),i.spotLightMatrix[v]=z.matrix,A.castShadow){const $=e.get(A);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,i.spotShadow[v]=$,i.spotShadowMap[v]=mt,w++}v++}else if(A.isRectAreaLight){const H=t.get(A);H.color.copy(et).multiplyScalar(nt),H.halfWidth.set(A.width*.5,0,0),H.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=H,m++}else if(A.isPointLight){const H=t.get(A);if(H.color.copy(A.color).multiplyScalar(A.intensity),H.distance=A.distance,H.decay=A.decay,A.castShadow){const z=A.shadow,$=e.get(A);$.shadowIntensity=z.intensity,$.shadowBias=z.bias,$.shadowNormalBias=z.normalBias,$.shadowRadius=z.radius,$.shadowMapSize=z.mapSize,$.shadowCameraNear=z.camera.near,$.shadowCameraFar=z.camera.far,i.pointShadow[x]=$,i.pointShadowMap[x]=mt,i.pointShadowMatrix[x]=A.shadow.matrix,D++}i.point[x]=H,x++}else if(A.isHemisphereLight){const H=t.get(A);H.skyColor.copy(A.color).multiplyScalar(nt),H.groundColor.copy(A.groundColor).multiplyScalar(nt),i.hemi[h]=H,h++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const U=i.hash;(U.directionalLength!==p||U.pointLength!==x||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==I||U.numPointShadows!==D||U.numSpotShadows!==w||U.numSpotMaps!==X||U.numLightProbes!==N)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=h,i.directionalShadow.length=I,i.directionalShadowMap.length=I,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=I,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=w+X-O,i.spotLightMap.length=X,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=N,U.directionalLength=p,U.pointLength=x,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=I,U.numPointShadows=D,U.numSpotShadows=w,U.numSpotMaps=X,U.numLightProbes=N,i.version=Sw++)}function l(c,u){let d=0,f=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let h=0,I=c.length;h<I;h++){const D=c[h];if(D.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(D.isSpotLight){const w=i.spot[p];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(D.matrixWorld),s.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(D.isRectAreaLight){const w=i.rectArea[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(m),o.identity(),r.copy(D.matrixWorld),r.premultiply(m),o.extractRotation(r),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(D.isPointLight){const w=i.point[f];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(m),f++}else if(D.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Ef(n){const t=new ww(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Tw(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ef(n),t.set(s,[a])):r>=o.length?(a=new Ef(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Aw extends Ms{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cw extends Ms{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rw=`void main() {
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
}`;function Lw(n,t,e){let i=new xu;const s=new $t,r=new $t,o=new Te,a=new Aw({depthPacking:Sb}),l=new Cw,c={},u=e.maxTextureSize,d={[ji]:an,[an]:ji,[_i]:_i},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:Rw,fragmentShader:Pw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const x=new tn;x.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Dn(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dp;let h=this.type;this.render=function(O,N,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||O.length===0)return;const E=n.getRenderTarget(),T=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),et=n.state;et.setBlending(Gi),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const nt=h!==ui&&this.type===ui,rt=h===ui&&this.type!==ui;for(let mt=0,H=O.length;mt<H;mt++){const z=O[mt],$=z.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ht=$.getFrameExtents();if(s.multiply(ht),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ht.x),s.x=r.x*ht.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ht.y),s.y=r.y*ht.y,$.mapSize.y=r.y)),$.map===null||nt===!0||rt===!0){const b=this.type!==ui?{minFilter:Nn,magFilter:Nn}:{};$.map!==null&&$.map.dispose(),$.map=new xs(s.x,s.y,b),$.map.texture.name=z.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const R=$.getViewportCount();for(let b=0;b<R;b++){const ct=$.getViewport(b);o.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),et.viewport(o),$.updateMatrices(z,b),i=$.getFrustum(),w(N,U,$.camera,z,this.type)}$.isPointLightShadow!==!0&&this.type===ui&&I($,U),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(E,T,A)};function I(O,N){const U=t.update(v);f.defines.VSM_SAMPLES!==O.blurSamples&&(f.defines.VSM_SAMPLES=O.blurSamples,p.defines.VSM_SAMPLES=O.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new xs(s.x,s.y)),f.uniforms.shadow_pass.value=O.map.texture,f.uniforms.resolution.value=O.mapSize,f.uniforms.radius.value=O.radius,n.setRenderTarget(O.mapPass),n.clear(),n.renderBufferDirect(N,null,U,f,v,null),p.uniforms.shadow_pass.value=O.mapPass.texture,p.uniforms.resolution.value=O.mapSize,p.uniforms.radius.value=O.radius,n.setRenderTarget(O.map),n.clear(),n.renderBufferDirect(N,null,U,p,v,null)}function D(O,N,U,E){let T=null;const A=U.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(A!==void 0)T=A;else if(T=U.isPointLight===!0?l:a,n.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const et=T.uuid,nt=N.uuid;let rt=c[et];rt===void 0&&(rt={},c[et]=rt);let mt=rt[nt];mt===void 0&&(mt=T.clone(),rt[nt]=mt,N.addEventListener("dispose",X)),T=mt}if(T.visible=N.visible,T.wireframe=N.wireframe,E===ui?T.side=N.shadowSide!==null?N.shadowSide:N.side:T.side=N.shadowSide!==null?N.shadowSide:d[N.side],T.alphaMap=N.alphaMap,T.alphaTest=N.alphaTest,T.map=N.map,T.clipShadows=N.clipShadows,T.clippingPlanes=N.clippingPlanes,T.clipIntersection=N.clipIntersection,T.displacementMap=N.displacementMap,T.displacementScale=N.displacementScale,T.displacementBias=N.displacementBias,T.wireframeLinewidth=N.wireframeLinewidth,T.linewidth=N.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const et=n.properties.get(T);et.light=U}return T}function w(O,N,U,E,T){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&T===ui)&&(!O.frustumCulled||i.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,O.matrixWorld);const nt=t.update(O),rt=O.material;if(Array.isArray(rt)){const mt=nt.groups;for(let H=0,z=mt.length;H<z;H++){const $=mt[H],ht=rt[$.materialIndex];if(ht&&ht.visible){const R=D(O,ht,E,T);O.onBeforeShadow(n,O,N,U,nt,R,$),n.renderBufferDirect(U,null,nt,R,O,$),O.onAfterShadow(n,O,N,U,nt,R,$)}}}else if(rt.visible){const mt=D(O,rt,E,T);O.onBeforeShadow(n,O,N,U,nt,mt,null),n.renderBufferDirect(U,null,nt,mt,O,null),O.onAfterShadow(n,O,N,U,nt,mt,null)}}const et=O.children;for(let nt=0,rt=et.length;nt<rt;nt++)w(et[nt],N,U,E,T)}function X(O){O.target.removeEventListener("dispose",X);for(const U in c){const E=c[U],T=O.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const Dw={[ec]:nc,[ic]:oc,[sc]:ac,[ir]:rc,[nc]:ec,[oc]:ic,[ac]:sc,[rc]:ir};function Iw(n,t){function e(){let W=!1;const Mt=new Te;let st=null;const pt=new Te(0,0,0,0);return{setMask:function(Rt){st!==Rt&&!W&&(n.colorMask(Rt,Rt,Rt,Rt),st=Rt)},setLocked:function(Rt){W=Rt},setClear:function(Rt,wt,It,_e,Ee){Ee===!0&&(Rt*=_e,wt*=_e,It*=_e),Mt.set(Rt,wt,It,_e),pt.equals(Mt)===!1&&(n.clearColor(Rt,wt,It,_e),pt.copy(Mt))},reset:function(){W=!1,st=null,pt.set(-1,0,0,0)}}}function i(){let W=!1,Mt=!1,st=null,pt=null,Rt=null;return{setReversed:function(wt){if(Mt!==wt){const It=t.get("EXT_clip_control");Mt?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const _e=Rt;Rt=null,this.setClear(_e)}Mt=wt},getReversed:function(){return Mt},setTest:function(wt){wt?B(n.DEPTH_TEST):G(n.DEPTH_TEST)},setMask:function(wt){st!==wt&&!W&&(n.depthMask(wt),st=wt)},setFunc:function(wt){if(Mt&&(wt=Dw[wt]),pt!==wt){switch(wt){case ec:n.depthFunc(n.NEVER);break;case nc:n.depthFunc(n.ALWAYS);break;case ic:n.depthFunc(n.LESS);break;case ir:n.depthFunc(n.LEQUAL);break;case sc:n.depthFunc(n.EQUAL);break;case rc:n.depthFunc(n.GEQUAL);break;case oc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=wt}},setLocked:function(wt){W=wt},setClear:function(wt){Rt!==wt&&(Mt&&(wt=1-wt),n.clearDepth(wt),Rt=wt)},reset:function(){W=!1,st=null,pt=null,Rt=null,Mt=!1}}}function s(){let W=!1,Mt=null,st=null,pt=null,Rt=null,wt=null,It=null,_e=null,Ee=null;return{setTest:function(re){W||(re?B(n.STENCIL_TEST):G(n.STENCIL_TEST))},setMask:function(re){Mt!==re&&!W&&(n.stencilMask(re),Mt=re)},setFunc:function(re,ke,ei){(st!==re||pt!==ke||Rt!==ei)&&(n.stencilFunc(re,ke,ei),st=re,pt=ke,Rt=ei)},setOp:function(re,ke,ei){(wt!==re||It!==ke||_e!==ei)&&(n.stencilOp(re,ke,ei),wt=re,It=ke,_e=ei)},setLocked:function(re){W=re},setClear:function(re){Ee!==re&&(n.clearStencil(re),Ee=re)},reset:function(){W=!1,Mt=null,st=null,pt=null,Rt=null,wt=null,It=null,_e=null,Ee=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],x=null,v=!1,m=null,h=null,I=null,D=null,w=null,X=null,O=null,N=new Xt(0,0,0),U=0,E=!1,T=null,A=null,et=null,nt=null,rt=null;const mt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,z=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec($)[1]),H=z>=1):$.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),H=z>=2);let ht=null,R={};const b=n.getParameter(n.SCISSOR_BOX),ct=n.getParameter(n.VIEWPORT),gt=new Te().fromArray(b),Y=new Te().fromArray(ct);function lt(W,Mt,st,pt){const Rt=new Uint8Array(4),wt=n.createTexture();n.bindTexture(W,wt),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<st;It++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(Mt+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return wt}const yt={};yt[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(ir),Q(!1),ot(Cd),B(n.CULL_FACE),S(Gi);function B(W){u[W]!==!0&&(n.enable(W),u[W]=!0)}function G(W){u[W]!==!1&&(n.disable(W),u[W]=!1)}function j(W,Mt){return d[W]!==Mt?(n.bindFramebuffer(W,Mt),d[W]=Mt,W===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Mt),W===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function ut(W,Mt){let st=p,pt=!1;if(W){st=f.get(Mt),st===void 0&&(st=[],f.set(Mt,st));const Rt=W.textures;if(st.length!==Rt.length||st[0]!==n.COLOR_ATTACHMENT0){for(let wt=0,It=Rt.length;wt<It;wt++)st[wt]=n.COLOR_ATTACHMENT0+wt;st.length=Rt.length,pt=!0}}else st[0]!==n.BACK&&(st[0]=n.BACK,pt=!0);pt&&n.drawBuffers(st)}function M(W){return x!==W?(n.useProgram(W),x=W,!0):!1}const L={[ls]:n.FUNC_ADD,[qy]:n.FUNC_SUBTRACT,[Ky]:n.FUNC_REVERSE_SUBTRACT};L[Zy]=n.MIN,L[Jy]=n.MAX;const k={[Qy]:n.ZERO,[tb]:n.ONE,[eb]:n.SRC_COLOR,[Ql]:n.SRC_ALPHA,[ab]:n.SRC_ALPHA_SATURATE,[rb]:n.DST_COLOR,[ib]:n.DST_ALPHA,[nb]:n.ONE_MINUS_SRC_COLOR,[tc]:n.ONE_MINUS_SRC_ALPHA,[ob]:n.ONE_MINUS_DST_COLOR,[sb]:n.ONE_MINUS_DST_ALPHA,[lb]:n.CONSTANT_COLOR,[cb]:n.ONE_MINUS_CONSTANT_COLOR,[ub]:n.CONSTANT_ALPHA,[db]:n.ONE_MINUS_CONSTANT_ALPHA};function S(W,Mt,st,pt,Rt,wt,It,_e,Ee,re){if(W===Gi){v===!0&&(G(n.BLEND),v=!1);return}if(v===!1&&(B(n.BLEND),v=!0),W!==Yy){if(W!==m||re!==E){if((h!==ls||w!==ls)&&(n.blendEquation(n.FUNC_ADD),h=ls,w=ls),re)switch(W){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.ONE,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Pd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ld:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}I=null,D=null,X=null,O=null,N.set(0,0,0),U=0,m=W,E=re}return}Rt=Rt||Mt,wt=wt||st,It=It||pt,(Mt!==h||Rt!==w)&&(n.blendEquationSeparate(L[Mt],L[Rt]),h=Mt,w=Rt),(st!==I||pt!==D||wt!==X||It!==O)&&(n.blendFuncSeparate(k[st],k[pt],k[wt],k[It]),I=st,D=pt,X=wt,O=It),(_e.equals(N)===!1||Ee!==U)&&(n.blendColor(_e.r,_e.g,_e.b,Ee),N.copy(_e),U=Ee),m=W,E=!1}function tt(W,Mt){W.side===_i?G(n.CULL_FACE):B(n.CULL_FACE);let st=W.side===an;Mt&&(st=!st),Q(st),W.blending===Ks&&W.transparent===!1?S(Gi):S(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);const pt=W.stencilWrite;a.setTest(pt),pt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),_t(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):G(n.SAMPLE_ALPHA_TO_COVERAGE)}function Q(W){T!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),T=W)}function ot(W){W!==$y?(B(n.CULL_FACE),W!==A&&(W===Cd?n.cullFace(n.BACK):W===Xy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):G(n.CULL_FACE),A=W}function at(W){W!==et&&(H&&n.lineWidth(W),et=W)}function _t(W,Mt,st){W?(B(n.POLYGON_OFFSET_FILL),(nt!==Mt||rt!==st)&&(n.polygonOffset(Mt,st),nt=Mt,rt=st)):G(n.POLYGON_OFFSET_FILL)}function q(W){W?B(n.SCISSOR_TEST):G(n.SCISSOR_TEST)}function C(W){W===void 0&&(W=n.TEXTURE0+mt-1),ht!==W&&(n.activeTexture(W),ht=W)}function _(W,Mt,st){st===void 0&&(ht===null?st=n.TEXTURE0+mt-1:st=ht);let pt=R[st];pt===void 0&&(pt={type:void 0,texture:void 0},R[st]=pt),(pt.type!==W||pt.texture!==Mt)&&(ht!==st&&(n.activeTexture(st),ht=st),n.bindTexture(W,Mt||yt[W]),pt.type=W,pt.texture=Mt)}function y(){const W=R[ht];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function it(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Et(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function At(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(W){gt.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function Tt(W){Y.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Y.copy(W))}function Kt(W,Mt){let st=c.get(Mt);st===void 0&&(st=new WeakMap,c.set(Mt,st));let pt=st.get(W);pt===void 0&&(pt=n.getUniformBlockIndex(Mt,W.name),st.set(W,pt))}function Wt(W,Mt){const pt=c.get(Mt).get(W);l.get(Mt)!==pt&&(n.uniformBlockBinding(Mt,pt,W.__bindingPointIndex),l.set(Mt,pt))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ht=null,R={},d={},f=new WeakMap,p=[],x=null,v=!1,m=null,h=null,I=null,D=null,w=null,X=null,O=null,N=new Xt(0,0,0),U=0,E=!1,T=null,A=null,et=null,nt=null,rt=null,gt.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:G,bindFramebuffer:j,drawBuffers:ut,useProgram:M,setBlending:S,setMaterial:tt,setFlipSided:Q,setCullFace:ot,setLineWidth:at,setPolygonOffset:_t,setScissorTest:q,activeTexture:C,bindTexture:_,unbindTexture:y,compressedTexImage2D:F,compressedTexImage3D:it,texImage2D:At,texImage3D:Ft,updateUBOMapping:Kt,uniformBlockBinding:Wt,texStorage2D:Pt,texStorage3D:bt,texSubImage2D:V,texSubImage3D:Et,compressedTexSubImage2D:St,compressedTexSubImage3D:vt,scissor:Ut,viewport:Tt,reset:ne}}function wf(n,t,e,i){const s=Uw(i);switch(e){case _p:return n*t;case xp:return n*t;case yp:return n*t*2;case bp:return n*t/s.components*s.byteLength;case mu:return n*t/s.components*s.byteLength;case Mp:return n*t*2/s.components*s.byteLength;case gu:return n*t*2/s.components*s.byteLength;case vp:return n*t*3/s.components*s.byteLength;case Ln:return n*t*4/s.components*s.byteLength;case _u:return n*t*4/s.components*s.byteLength;case Yo:case qo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ko:case Zo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hc:case mc:return Math.max(n,16)*Math.max(t,8)/4;case fc:case pc:return Math.max(n,8)*Math.max(t,8)/2;case gc:case _c:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case vc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xc:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case yc:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case bc:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Sc:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ec:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Tc:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Cc:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Rc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Pc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Lc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Ic:case Uc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Sp:case Nc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oc:case Fc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Uw(n){switch(n){case Ei:case pp:return{byteLength:1,components:1};case Zr:case mp:case eo:return{byteLength:2,components:1};case hu:case pu:return{byteLength:2,components:4};case vs:case fu:case xi:return{byteLength:4,components:1};case gp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Nw(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new $t,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return p?new OffscreenCanvas(C,_):ha("canvas")}function v(C,_,y){let F=1;const it=q(C);if((it.width>y||it.height>y)&&(F=y/Math.max(it.width,it.height)),F<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const V=Math.floor(F*it.width),Et=Math.floor(F*it.height);d===void 0&&(d=x(V,Et));const St=_?x(V,Et):d;return St.width=V,St.height=Et,St.getContext("2d").drawImage(C,0,0,V,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+V+"x"+Et+")."),St}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),C;return C}function m(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function I(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function D(C,_,y,F,it=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=_;if(_===n.RED&&(y===n.FLOAT&&(V=n.R32F),y===n.HALF_FLOAT&&(V=n.R16F),y===n.UNSIGNED_BYTE&&(V=n.R8)),_===n.RED_INTEGER&&(y===n.UNSIGNED_BYTE&&(V=n.R8UI),y===n.UNSIGNED_SHORT&&(V=n.R16UI),y===n.UNSIGNED_INT&&(V=n.R32UI),y===n.BYTE&&(V=n.R8I),y===n.SHORT&&(V=n.R16I),y===n.INT&&(V=n.R32I)),_===n.RG&&(y===n.FLOAT&&(V=n.RG32F),y===n.HALF_FLOAT&&(V=n.RG16F),y===n.UNSIGNED_BYTE&&(V=n.RG8)),_===n.RG_INTEGER&&(y===n.UNSIGNED_BYTE&&(V=n.RG8UI),y===n.UNSIGNED_SHORT&&(V=n.RG16UI),y===n.UNSIGNED_INT&&(V=n.RG32UI),y===n.BYTE&&(V=n.RG8I),y===n.SHORT&&(V=n.RG16I),y===n.INT&&(V=n.RG32I)),_===n.RGB_INTEGER&&(y===n.UNSIGNED_BYTE&&(V=n.RGB8UI),y===n.UNSIGNED_SHORT&&(V=n.RGB16UI),y===n.UNSIGNED_INT&&(V=n.RGB32UI),y===n.BYTE&&(V=n.RGB8I),y===n.SHORT&&(V=n.RGB16I),y===n.INT&&(V=n.RGB32I)),_===n.RGBA_INTEGER&&(y===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),y===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),y===n.UNSIGNED_INT&&(V=n.RGBA32UI),y===n.BYTE&&(V=n.RGBA8I),y===n.SHORT&&(V=n.RGBA16I),y===n.INT&&(V=n.RGBA32I)),_===n.RGB&&y===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),_===n.RGBA){const Et=it?Na:ie.getTransfer(F);y===n.FLOAT&&(V=n.RGBA32F),y===n.HALF_FLOAT&&(V=n.RGBA16F),y===n.UNSIGNED_BYTE&&(V=Et===he?n.SRGB8_ALPHA8:n.RGBA8),y===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),y===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function w(C,_){let y;return C?_===null||_===vs||_===or?y=n.DEPTH24_STENCIL8:_===xi?y=n.DEPTH32F_STENCIL8:_===Zr&&(y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===vs||_===or?y=n.DEPTH_COMPONENT24:_===xi?y=n.DEPTH_COMPONENT32F:_===Zr&&(y=n.DEPTH_COMPONENT16),y}function X(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nn&&C.minFilter!==Pn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function O(C){const _=C.target;_.removeEventListener("dispose",O),U(_),_.isVideoTexture&&u.delete(_)}function N(C){const _=C.target;_.removeEventListener("dispose",N),T(_)}function U(C){const _=i.get(C);if(_.__webglInit===void 0)return;const y=C.source,F=f.get(y);if(F){const it=F[_.__cacheKey];it.usedTimes--,it.usedTimes===0&&E(C),Object.keys(F).length===0&&f.delete(y)}i.remove(C)}function E(C){const _=i.get(C);n.deleteTexture(_.__webglTexture);const y=C.source,F=f.get(y);delete F[_.__cacheKey],o.memory.textures--}function T(C){const _=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let it=0;it<_.__webglFramebuffer[F].length;it++)n.deleteFramebuffer(_.__webglFramebuffer[F][it]);else n.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)n.deleteFramebuffer(_.__webglFramebuffer[F]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const y=C.textures;for(let F=0,it=y.length;F<it;F++){const V=i.get(y[F]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(y[F])}i.remove(C)}let A=0;function et(){A=0}function nt(){const C=A;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),A+=1,C}function rt(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function mt(C,_){const y=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&y.__version!==C.version){const F=C.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(y,C,_);return}}e.bindTexture(n.TEXTURE_2D,y.__webglTexture,n.TEXTURE0+_)}function H(C,_){const y=i.get(C);if(C.version>0&&y.__version!==C.version){Y(y,C,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,y.__webglTexture,n.TEXTURE0+_)}function z(C,_){const y=i.get(C);if(C.version>0&&y.__version!==C.version){Y(y,C,_);return}e.bindTexture(n.TEXTURE_3D,y.__webglTexture,n.TEXTURE0+_)}function $(C,_){const y=i.get(C);if(C.version>0&&y.__version!==C.version){lt(y,C,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+_)}const ht={[uc]:n.REPEAT,[hs]:n.CLAMP_TO_EDGE,[dc]:n.MIRRORED_REPEAT},R={[Nn]:n.NEAREST,[bb]:n.NEAREST_MIPMAP_NEAREST,[ho]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[nl]:n.LINEAR_MIPMAP_NEAREST,[ps]:n.LINEAR_MIPMAP_LINEAR},b={[wb]:n.NEVER,[Lb]:n.ALWAYS,[Tb]:n.LESS,[wp]:n.LEQUAL,[Ab]:n.EQUAL,[Pb]:n.GEQUAL,[Cb]:n.GREATER,[Rb]:n.NOTEQUAL};function ct(C,_){if(_.type===xi&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Pn||_.magFilter===nl||_.magFilter===ho||_.magFilter===ps||_.minFilter===Pn||_.minFilter===nl||_.minFilter===ho||_.minFilter===ps)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ht[_.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,R[_.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,R[_.minFilter]),_.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,b[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Nn||_.minFilter!==ho&&_.minFilter!==ps||_.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const y=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function gt(C,_){let y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",O));const F=_.source;let it=f.get(F);it===void 0&&(it={},f.set(F,it));const V=rt(_);if(V!==C.__cacheKey){it[V]===void 0&&(it[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,y=!0),it[V].usedTimes++;const Et=it[C.__cacheKey];Et!==void 0&&(it[C.__cacheKey].usedTimes--,Et.usedTimes===0&&E(_)),C.__cacheKey=V,C.__webglTexture=it[V].texture}return y}function Y(C,_,y){let F=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=n.TEXTURE_3D);const it=gt(C,_),V=_.source;e.bindTexture(F,C.__webglTexture,n.TEXTURE0+y);const Et=i.get(V);if(V.version!==Et.__version||it===!0){e.activeTexture(n.TEXTURE0+y);const St=ie.getPrimaries(ie.workingColorSpace),vt=_.colorSpace===ki?null:ie.getPrimaries(_.colorSpace),Pt=_.colorSpace===ki||St===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let bt=v(_.image,!1,s.maxTextureSize);bt=_t(_,bt);const At=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type);let Ut=D(_.internalFormat,At,Ft,_.colorSpace,_.isVideoTexture);ct(F,_);let Tt;const Kt=_.mipmaps,Wt=_.isVideoTexture!==!0,ne=Et.__version===void 0||it===!0,W=V.dataReady,Mt=X(_,bt);if(_.isDepthTexture)Ut=w(_.format===ar,_.type),ne&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,Ut,bt.width,bt.height):e.texImage2D(n.TEXTURE_2D,0,Ut,bt.width,bt.height,0,At,Ft,null));else if(_.isDataTexture)if(Kt.length>0){Wt&&ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Ut,Kt[0].width,Kt[0].height);for(let st=0,pt=Kt.length;st<pt;st++)Tt=Kt[st],Wt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Tt.width,Tt.height,At,Ft,Tt.data):e.texImage2D(n.TEXTURE_2D,st,Ut,Tt.width,Tt.height,0,At,Ft,Tt.data);_.generateMipmaps=!1}else Wt?(ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Ut,bt.width,bt.height),W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt.width,bt.height,At,Ft,bt.data)):e.texImage2D(n.TEXTURE_2D,0,Ut,bt.width,bt.height,0,At,Ft,bt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Wt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Ut,Kt[0].width,Kt[0].height,bt.depth);for(let st=0,pt=Kt.length;st<pt;st++)if(Tt=Kt[st],_.format!==Ln)if(At!==null)if(Wt){if(W)if(_.layerUpdates.size>0){const Rt=wf(Tt.width,Tt.height,_.format,_.type);for(const wt of _.layerUpdates){const It=Tt.data.subarray(wt*Rt/Tt.data.BYTES_PER_ELEMENT,(wt+1)*Rt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,wt,Tt.width,Tt.height,1,At,It)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Tt.width,Tt.height,bt.depth,At,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,Ut,Tt.width,Tt.height,bt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?W&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,Tt.width,Tt.height,bt.depth,At,Ft,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,Ut,Tt.width,Tt.height,bt.depth,0,At,Ft,Tt.data)}else{Wt&&ne&&e.texStorage2D(n.TEXTURE_2D,Mt,Ut,Kt[0].width,Kt[0].height);for(let st=0,pt=Kt.length;st<pt;st++)Tt=Kt[st],_.format!==Ln?At!==null?Wt?W&&e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,Tt.width,Tt.height,At,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,Ut,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,Tt.width,Tt.height,At,Ft,Tt.data):e.texImage2D(n.TEXTURE_2D,st,Ut,Tt.width,Tt.height,0,At,Ft,Tt.data)}else if(_.isDataArrayTexture)if(Wt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,Ut,bt.width,bt.height,bt.depth),W)if(_.layerUpdates.size>0){const st=wf(bt.width,bt.height,_.format,_.type);for(const pt of _.layerUpdates){const Rt=bt.data.subarray(pt*st/bt.data.BYTES_PER_ELEMENT,(pt+1)*st/bt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,bt.width,bt.height,1,At,Ft,Rt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,At,Ft,bt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ut,bt.width,bt.height,bt.depth,0,At,Ft,bt.data);else if(_.isData3DTexture)Wt?(ne&&e.texStorage3D(n.TEXTURE_3D,Mt,Ut,bt.width,bt.height,bt.depth),W&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,At,Ft,bt.data)):e.texImage3D(n.TEXTURE_3D,0,Ut,bt.width,bt.height,bt.depth,0,At,Ft,bt.data);else if(_.isFramebufferTexture){if(ne)if(Wt)e.texStorage2D(n.TEXTURE_2D,Mt,Ut,bt.width,bt.height);else{let st=bt.width,pt=bt.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Ut,st,pt,0,At,Ft,null),st>>=1,pt>>=1}}else if(Kt.length>0){if(Wt&&ne){const st=q(Kt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,Ut,st.width,st.height)}for(let st=0,pt=Kt.length;st<pt;st++)Tt=Kt[st],Wt?W&&e.texSubImage2D(n.TEXTURE_2D,st,0,0,At,Ft,Tt):e.texImage2D(n.TEXTURE_2D,st,Ut,At,Ft,Tt);_.generateMipmaps=!1}else if(Wt){if(ne){const st=q(bt);e.texStorage2D(n.TEXTURE_2D,Mt,Ut,st.width,st.height)}W&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,At,Ft,bt)}else e.texImage2D(n.TEXTURE_2D,0,Ut,At,Ft,bt);m(_)&&h(F),Et.__version=V.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function lt(C,_,y){if(_.image.length!==6)return;const F=gt(C,_),it=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+y);const V=i.get(it);if(it.version!==V.__version||F===!0){e.activeTexture(n.TEXTURE0+y);const Et=ie.getPrimaries(ie.workingColorSpace),St=_.colorSpace===ki?null:ie.getPrimaries(_.colorSpace),vt=_.colorSpace===ki||Et===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const Pt=_.isCompressedTexture||_.image[0].isCompressedTexture,bt=_.image[0]&&_.image[0].isDataTexture,At=[];for(let pt=0;pt<6;pt++)!Pt&&!bt?At[pt]=v(_.image[pt],!0,s.maxCubemapSize):At[pt]=bt?_.image[pt].image:_.image[pt],At[pt]=_t(_,At[pt]);const Ft=At[0],Ut=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Kt=D(_.internalFormat,Ut,Tt,_.colorSpace),Wt=_.isVideoTexture!==!0,ne=V.__version===void 0||F===!0,W=it.dataReady;let Mt=X(_,Ft);ct(n.TEXTURE_CUBE_MAP,_);let st;if(Pt){Wt&&ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Kt,Ft.width,Ft.height);for(let pt=0;pt<6;pt++){st=At[pt].mipmaps;for(let Rt=0;Rt<st.length;Rt++){const wt=st[Rt];_.format!==Ln?Ut!==null?Wt?W&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,0,0,wt.width,wt.height,Ut,wt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,Kt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,0,0,wt.width,wt.height,Ut,Tt,wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt,Kt,wt.width,wt.height,0,Ut,Tt,wt.data)}}}else{if(st=_.mipmaps,Wt&&ne){st.length>0&&Mt++;const pt=q(At[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,Kt,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(bt){Wt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,At[pt].width,At[pt].height,Ut,Tt,At[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,At[pt].width,At[pt].height,0,Ut,Tt,At[pt].data);for(let Rt=0;Rt<st.length;Rt++){const It=st[Rt].image[pt].image;Wt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,0,0,It.width,It.height,Ut,Tt,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,Kt,It.width,It.height,0,Ut,Tt,It.data)}}else{Wt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ut,Tt,At[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Kt,Ut,Tt,At[pt]);for(let Rt=0;Rt<st.length;Rt++){const wt=st[Rt];Wt?W&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,0,0,Ut,Tt,wt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Rt+1,Kt,Ut,Tt,wt.image[pt])}}}m(_)&&h(n.TEXTURE_CUBE_MAP),V.__version=it.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function yt(C,_,y,F,it,V){const Et=r.convert(y.format,y.colorSpace),St=r.convert(y.type),vt=D(y.internalFormat,Et,St,y.colorSpace),Pt=i.get(_),bt=i.get(y);if(bt.__renderTarget=_,!Pt.__hasExternalTextures){const At=Math.max(1,_.width>>V),Ft=Math.max(1,_.height>>V);it===n.TEXTURE_3D||it===n.TEXTURE_2D_ARRAY?e.texImage3D(it,V,vt,At,Ft,_.depth,0,Et,St,null):e.texImage2D(it,V,vt,At,Ft,0,Et,St,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,F,it,bt.__webglTexture,0,Q(_)):(it===n.TEXTURE_2D||it>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,F,it,bt.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function B(C,_,y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),_.depthBuffer){const F=_.depthTexture,it=F&&F.isDepthTexture?F.type:null,V=w(_.stencilBuffer,it),Et=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=Q(_);ot(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St,V,_.width,_.height):y?n.renderbufferStorageMultisample(n.RENDERBUFFER,St,V,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,V,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Et,n.RENDERBUFFER,C)}else{const F=_.textures;for(let it=0;it<F.length;it++){const V=F[it],Et=r.convert(V.format,V.colorSpace),St=r.convert(V.type),vt=D(V.internalFormat,Et,St,V.colorSpace),Pt=Q(_);y&&ot(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,vt,_.width,_.height):ot(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,vt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,vt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function G(C,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=i.get(_.depthTexture);F.__renderTarget=_,(!F.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),mt(_.depthTexture,0);const it=F.__webglTexture,V=Q(_);if(_.depthTexture.format===Zs)ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(_.depthTexture.format===ar)ot(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function j(C){const _=i.get(C),y=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const F=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){const it=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",it)};F.addEventListener("dispose",it),_.__depthDisposeCallback=it}_.__boundDepthTexture=F}if(C.depthTexture&&!_.__autoAllocateDepthBuffer){if(y)throw new Error("target.depthTexture not supported in Cube render targets");G(_.__webglFramebuffer,C)}else if(y){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=n.createRenderbuffer(),B(_.__webglDepthbuffer[F],C,!1);else{const it=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[F];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),B(_.__webglDepthbuffer,C,!1);else{const F=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,it=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,it),n.framebufferRenderbuffer(n.FRAMEBUFFER,F,n.RENDERBUFFER,it)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,_,y){const F=i.get(C);_!==void 0&&yt(F.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),y!==void 0&&j(C)}function M(C){const _=C.texture,y=i.get(C),F=i.get(_);C.addEventListener("dispose",N);const it=C.textures,V=C.isWebGLCubeRenderTarget===!0,Et=it.length>1;if(Et||(F.__webglTexture===void 0&&(F.__webglTexture=n.createTexture()),F.__version=_.version,o.memory.textures++),V){y.__webglFramebuffer=[];for(let St=0;St<6;St++)if(_.mipmaps&&_.mipmaps.length>0){y.__webglFramebuffer[St]=[];for(let vt=0;vt<_.mipmaps.length;vt++)y.__webglFramebuffer[St][vt]=n.createFramebuffer()}else y.__webglFramebuffer[St]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){y.__webglFramebuffer=[];for(let St=0;St<_.mipmaps.length;St++)y.__webglFramebuffer[St]=n.createFramebuffer()}else y.__webglFramebuffer=n.createFramebuffer();if(Et)for(let St=0,vt=it.length;St<vt;St++){const Pt=i.get(it[St]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ot(C)===!1){y.__webglMultisampledFramebuffer=n.createFramebuffer(),y.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,y.__webglMultisampledFramebuffer);for(let St=0;St<it.length;St++){const vt=it[St];y.__webglColorRenderbuffer[St]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,y.__webglColorRenderbuffer[St]);const Pt=r.convert(vt.format,vt.colorSpace),bt=r.convert(vt.type),At=D(vt.internalFormat,Pt,bt,vt.colorSpace,C.isXRRenderTarget===!0),Ft=Q(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,At,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+St,n.RENDERBUFFER,y.__webglColorRenderbuffer[St])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(y.__webglDepthRenderbuffer=n.createRenderbuffer(),B(y.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture),ct(n.TEXTURE_CUBE_MAP,_);for(let St=0;St<6;St++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)yt(y.__webglFramebuffer[St][vt],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,vt);else yt(y.__webglFramebuffer[St],C,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);m(_)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let St=0,vt=it.length;St<vt;St++){const Pt=it[St],bt=i.get(Pt);e.bindTexture(n.TEXTURE_2D,bt.__webglTexture),ct(n.TEXTURE_2D,Pt),yt(y.__webglFramebuffer,C,Pt,n.COLOR_ATTACHMENT0+St,n.TEXTURE_2D,0),m(Pt)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let St=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(St=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,F.__webglTexture),ct(St,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)yt(y.__webglFramebuffer[vt],C,_,n.COLOR_ATTACHMENT0,St,vt);else yt(y.__webglFramebuffer,C,_,n.COLOR_ATTACHMENT0,St,0);m(_)&&h(St),e.unbindTexture()}C.depthBuffer&&j(C)}function L(C){const _=C.textures;for(let y=0,F=_.length;y<F;y++){const it=_[y];if(m(it)){const V=I(C),Et=i.get(it).__webglTexture;e.bindTexture(V,Et),h(V),e.unbindTexture()}}}const k=[],S=[];function tt(C){if(C.samples>0){if(ot(C)===!1){const _=C.textures,y=C.width,F=C.height;let it=n.COLOR_BUFFER_BIT;const V=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=i.get(C),St=_.length>1;if(St)for(let vt=0;vt<_.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vt=0;vt<_.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(it|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(it|=n.STENCIL_BUFFER_BIT)),St){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const Pt=i.get(_[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,y,F,0,0,y,F,it,n.NEAREST),l===!0&&(k.length=0,S.length=0,k.push(n.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(k.push(V),S.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,k))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),St)for(let vt=0;vt<_.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Et.__webglColorRenderbuffer[vt]);const Pt=i.get(_[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Et.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const _=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Q(C){return Math.min(s.maxSamples,C.samples)}function ot(C){const _=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function at(C){const _=o.render.frame;u.get(C)!==_&&(u.set(C,_),C.update())}function _t(C,_){const y=C.colorSpace,F=C.format,it=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||y!==dr&&y!==ki&&(ie.getTransfer(y)===he?(F!==Ln||it!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",y)),_}function q(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=et,this.setTexture2D=mt,this.setTexture2DArray=H,this.setTexture3D=z,this.setTextureCube=$,this.rebindTextures=ut,this.setupRenderTarget=M,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=j,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ot}function Ow(n,t){function e(i,s=ki){let r;const o=ie.getTransfer(s);if(i===Ei)return n.UNSIGNED_BYTE;if(i===hu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===pp)return n.BYTE;if(i===mp)return n.SHORT;if(i===Zr)return n.UNSIGNED_SHORT;if(i===fu)return n.INT;if(i===vs)return n.UNSIGNED_INT;if(i===xi)return n.FLOAT;if(i===eo)return n.HALF_FLOAT;if(i===_p)return n.ALPHA;if(i===vp)return n.RGB;if(i===Ln)return n.RGBA;if(i===xp)return n.LUMINANCE;if(i===yp)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===bp)return n.RED;if(i===mu)return n.RED_INTEGER;if(i===Mp)return n.RG;if(i===gu)return n.RG_INTEGER;if(i===_u)return n.RGBA_INTEGER;if(i===Yo||i===qo||i===Ko||i===Zo)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Yo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Yo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ko)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fc||i===hc||i===pc||i===mc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gc||i===_c||i===vc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gc||i===_c)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xc||i===yc||i===bc||i===Mc||i===Sc||i===Ec||i===wc||i===Tc||i===Ac||i===Cc||i===Rc||i===Pc||i===Lc||i===Dc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ec)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===wc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Tc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ac)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Lc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Dc)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Jo||i===Ic||i===Uc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Jo)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Uc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sp||i===Nc||i===Oc||i===Fc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Fw extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class js extends ze{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new js,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new js,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new js,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&f>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new js;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kw=`
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

}`;class Vw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new nn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Yi({vertexShader:zw,fragmentShader:kw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Dn(new io(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hw extends bs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,x=null;const v=new Vw,m=e.getContextAttributes();let h=null,I=null;const D=[],w=[],X=new $t;let O=null;const N=new xn;N.viewport=new Te;const U=new xn;U.viewport=new Te;const E=[N,U],T=new Fw;let A=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let lt=D[Y];return lt===void 0&&(lt=new Pl,D[Y]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(Y){let lt=D[Y];return lt===void 0&&(lt=new Pl,D[Y]=lt),lt.getGripSpace()},this.getHand=function(Y){let lt=D[Y];return lt===void 0&&(lt=new Pl,D[Y]=lt),lt.getHandSpace()};function nt(Y){const lt=w.indexOf(Y.inputSource);if(lt===-1)return;const yt=D[lt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,c||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function rt(){s.removeEventListener("select",nt),s.removeEventListener("selectstart",nt),s.removeEventListener("selectend",nt),s.removeEventListener("squeeze",nt),s.removeEventListener("squeezestart",nt),s.removeEventListener("squeezeend",nt),s.removeEventListener("end",rt),s.removeEventListener("inputsourceschange",mt);for(let Y=0;Y<D.length;Y++){const lt=w[Y];lt!==null&&(w[Y]=null,D[Y].disconnect(lt))}A=null,et=null,v.reset(),t.setRenderTarget(h),p=null,f=null,d=null,s=null,I=null,gt.stop(),i.isPresenting=!1,t.setPixelRatio(O),t.setSize(X.width,X.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(h=t.getRenderTarget(),s.addEventListener("select",nt),s.addEventListener("selectstart",nt),s.addEventListener("selectend",nt),s.addEventListener("squeeze",nt),s.addEventListener("squeezestart",nt),s.addEventListener("squeezeend",nt),s.addEventListener("end",rt),s.addEventListener("inputsourceschange",mt),m.xrCompatible!==!0&&await e.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(X),s.renderState.layers===void 0){const lt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),I=new xs(p.framebufferWidth,p.framebufferHeight,{format:Ln,type:Ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let lt=null,yt=null,B=null;m.depth&&(B=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=m.stencil?ar:Zs,yt=m.stencil?or:vs);const G={colorFormat:e.RGBA8,depthFormat:B,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(G),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),I=new xs(f.textureWidth,f.textureHeight,{format:Ln,type:Ei,depthTexture:new Bp(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),gt.setContext(s),gt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function mt(Y){for(let lt=0;lt<Y.removed.length;lt++){const yt=Y.removed[lt],B=w.indexOf(yt);B>=0&&(w[B]=null,D[B].disconnect(yt))}for(let lt=0;lt<Y.added.length;lt++){const yt=Y.added[lt];let B=w.indexOf(yt);if(B===-1){for(let j=0;j<D.length;j++)if(j>=w.length){w.push(yt),B=j;break}else if(w[j]===null){w[j]=yt,B=j;break}if(B===-1)break}const G=D[B];G&&G.connect(yt)}}const H=new J,z=new J;function $(Y,lt,yt){H.setFromMatrixPosition(lt.matrixWorld),z.setFromMatrixPosition(yt.matrixWorld);const B=H.distanceTo(z),G=lt.projectionMatrix.elements,j=yt.projectionMatrix.elements,ut=G[14]/(G[10]-1),M=G[14]/(G[10]+1),L=(G[9]+1)/G[5],k=(G[9]-1)/G[5],S=(G[8]-1)/G[0],tt=(j[8]+1)/j[0],Q=ut*S,ot=ut*tt,at=B/(-S+tt),_t=at*-S;if(lt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(_t),Y.translateZ(at),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),G[10]===-1)Y.projectionMatrix.copy(lt.projectionMatrix),Y.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const q=ut+at,C=M+at,_=Q-_t,y=ot+(B-_t),F=L*M/C*q,it=k*M/C*q;Y.projectionMatrix.makePerspective(_,y,F,it,q,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ht(Y,lt){lt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(lt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let lt=Y.near,yt=Y.far;v.texture!==null&&(v.depthNear>0&&(lt=v.depthNear),v.depthFar>0&&(yt=v.depthFar)),T.near=U.near=N.near=lt,T.far=U.far=N.far=yt,(A!==T.near||et!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,et=T.far),N.layers.mask=Y.layers.mask|2,U.layers.mask=Y.layers.mask|4,T.layers.mask=N.layers.mask|U.layers.mask;const B=Y.parent,G=T.cameras;ht(T,B);for(let j=0;j<G.length;j++)ht(G[j],B);G.length===2?$(T,N,U):T.projectionMatrix.copy(N.projectionMatrix),R(Y,T,B)};function R(Y,lt,yt){yt===null?Y.matrix.copy(lt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(lt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(lt.projectionMatrix),Y.projectionMatrixInverse.copy(lt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=zc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(T)};let b=null;function ct(Y,lt){if(u=lt.getViewerPose(c||o),x=lt,u!==null){const yt=u.views;p!==null&&(t.setRenderTargetFramebuffer(I,p.framebuffer),t.setRenderTarget(I));let B=!1;yt.length!==T.cameras.length&&(T.cameras.length=0,B=!0);for(let j=0;j<yt.length;j++){const ut=yt[j];let M=null;if(p!==null)M=p.getViewport(ut);else{const k=d.getViewSubImage(f,ut);M=k.viewport,j===0&&(t.setRenderTargetTextures(I,k.colorTexture,f.ignoreDepthValues?void 0:k.depthStencilTexture),t.setRenderTarget(I))}let L=E[j];L===void 0&&(L=new xn,L.layers.enable(j),L.viewport=new Te,E[j]=L),L.matrix.fromArray(ut.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(ut.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(M.x,M.y,M.width,M.height),j===0&&(T.matrix.copy(L.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),B===!0&&T.cameras.push(L)}const G=s.enabledFeatures;if(G&&G.includes("depth-sensing")){const j=d.getDepthInformation(yt[0]);j&&j.isValid&&j.texture&&v.init(t,j,s.renderState)}}for(let yt=0;yt<D.length;yt++){const B=w[yt],G=D[yt];B!==null&&G!==void 0&&G.update(B,lt,c||o)}b&&b(Y,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),x=null}const gt=new Op;gt.setAnimationLoop(ct),this.setAnimationLoop=function(Y){b=Y},this.dispose=function(){}}}const ss=new ti,Gw=new Se;function Ww(n,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Ip(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,I,D,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(r(m,h),x(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,I,D):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===an&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===an&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const I=t.get(h),D=I.envMap,w=I.envMapRotation;D&&(m.envMap.value=D,ss.copy(w),ss.x*=-1,ss.y*=-1,ss.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),m.envMapRotation.value.setFromMatrix4(Gw.makeRotationFromEuler(ss)),m.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,I,D){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*I,m.scale.value=D*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,I){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===an&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=I.texture,m.transmissionSamplerSize.value.set(I.width,I.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){const I=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(I.matrixWorld),m.nearDistance.value=I.shadow.camera.near,m.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function $w(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(I,D){const w=D.program;i.uniformBlockBinding(I,w)}function c(I,D){let w=s[I.id];w===void 0&&(x(I),w=u(I),s[I.id]=w,I.addEventListener("dispose",m));const X=D.program;i.updateUBOMapping(I,X);const O=t.render.frame;r[I.id]!==O&&(f(I),r[I.id]=O)}function u(I){const D=d();I.__bindingPointIndex=D;const w=n.createBuffer(),X=I.__size,O=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,X,O),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,D,w),w}function d(){for(let I=0;I<a;I++)if(o.indexOf(I)===-1)return o.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(I){const D=s[I.id],w=I.uniforms,X=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,D);for(let O=0,N=w.length;O<N;O++){const U=Array.isArray(w[O])?w[O]:[w[O]];for(let E=0,T=U.length;E<T;E++){const A=U[E];if(p(A,O,E,X)===!0){const et=A.__offset,nt=Array.isArray(A.value)?A.value:[A.value];let rt=0;for(let mt=0;mt<nt.length;mt++){const H=nt[mt],z=v(H);typeof H=="number"||typeof H=="boolean"?(A.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,et+rt,A.__data)):H.isMatrix3?(A.__data[0]=H.elements[0],A.__data[1]=H.elements[1],A.__data[2]=H.elements[2],A.__data[3]=0,A.__data[4]=H.elements[3],A.__data[5]=H.elements[4],A.__data[6]=H.elements[5],A.__data[7]=0,A.__data[8]=H.elements[6],A.__data[9]=H.elements[7],A.__data[10]=H.elements[8],A.__data[11]=0):(H.toArray(A.__data,rt),rt+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,et,A.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(I,D,w,X){const O=I.value,N=D+"_"+w;if(X[N]===void 0)return typeof O=="number"||typeof O=="boolean"?X[N]=O:X[N]=O.clone(),!0;{const U=X[N];if(typeof O=="number"||typeof O=="boolean"){if(U!==O)return X[N]=O,!0}else if(U.equals(O)===!1)return U.copy(O),!0}return!1}function x(I){const D=I.uniforms;let w=0;const X=16;for(let N=0,U=D.length;N<U;N++){const E=Array.isArray(D[N])?D[N]:[D[N]];for(let T=0,A=E.length;T<A;T++){const et=E[T],nt=Array.isArray(et.value)?et.value:[et.value];for(let rt=0,mt=nt.length;rt<mt;rt++){const H=nt[rt],z=v(H),$=w%X,ht=$%z.boundary,R=$+ht;w+=ht,R!==0&&X-R<z.storage&&(w+=X-R),et.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=w,w+=z.storage}}}const O=w%X;return O>0&&(w+=X-O),I.__size=w,I.__cache={},this}function v(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function m(I){const D=I.target;D.removeEventListener("dispose",m);const w=o.indexOf(D.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[D.id]),delete s[D.id],delete r[D.id]}function h(){for(const I in s)n.deleteBuffer(s[I]);o=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Xw{constructor(t={}){const{canvas:e=Ub(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const x=new Uint32Array(4),v=new Int32Array(4);let m=null,h=null;const I=[],D=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=bi,this.toneMappingExposure=1;const w=this;let X=!1,O=0,N=0,U=null,E=-1,T=null;const A=new Te,et=new Te;let nt=null;const rt=new Xt(0);let mt=0,H=e.width,z=e.height,$=1,ht=null,R=null;const b=new Te(0,0,H,z),ct=new Te(0,0,H,z);let gt=!1;const Y=new xu;let lt=!1,yt=!1;const B=new Se,G=new Se,j=new J,ut=new Te,M={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let L=!1;function k(){return U===null?$:1}let S=i;function tt(P,K){return e.getContext(P,K)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${du}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),S===null){const K="webgl2";if(S=tt(K,P),S===null)throw tt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Q,ot,at,_t,q,C,_,y,F,it,V,Et,St,vt,Pt,bt,At,Ft,Ut,Tt,Kt,Wt,ne,W;function Mt(){Q=new ZS(S),Q.init(),Wt=new Ow(S,Q),ot=new $S(S,Q,t,Wt),at=new Iw(S,Q),ot.reverseDepthBuffer&&f&&at.buffers.depth.setReversed(!0),_t=new tE(S),q=new vw,C=new Nw(S,Q,at,q,ot,Wt,_t),_=new jS(w),y=new KS(w),F=new aM(S),ne=new GS(S,F),it=new JS(S,F,_t,ne),V=new nE(S,it,F,_t),Ut=new eE(S,ot,C),bt=new XS(q),Et=new _w(w,_,y,Q,ot,ne,bt),St=new Ww(w,q),vt=new yw,Pt=new Tw(Q),Ft=new HS(w,_,y,at,V,p,l),At=new Lw(w,V,ot),W=new $w(S,_t,ot,at),Tt=new WS(S,Q,_t),Kt=new QS(S,Q,_t),_t.programs=Et.programs,w.capabilities=ot,w.extensions=Q,w.properties=q,w.renderLists=vt,w.shadowMap=At,w.state=at,w.info=_t}Mt();const st=new Hw(w,S);this.xr=st,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const P=Q.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Q.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(P){P!==void 0&&($=P,this.setSize(H,z,!1))},this.getSize=function(P){return P.set(H,z)},this.setSize=function(P,K,dt=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,z=K,e.width=Math.floor(P*$),e.height=Math.floor(K*$),dt===!0&&(e.style.width=P+"px",e.style.height=K+"px"),this.setViewport(0,0,P,K)},this.getDrawingBufferSize=function(P){return P.set(H*$,z*$).floor()},this.setDrawingBufferSize=function(P,K,dt){H=P,z=K,$=dt,e.width=Math.floor(P*dt),e.height=Math.floor(K*dt),this.setViewport(0,0,P,K)},this.getCurrentViewport=function(P){return P.copy(A)},this.getViewport=function(P){return P.copy(b)},this.setViewport=function(P,K,dt,ft){P.isVector4?b.set(P.x,P.y,P.z,P.w):b.set(P,K,dt,ft),at.viewport(A.copy(b).multiplyScalar($).round())},this.getScissor=function(P){return P.copy(ct)},this.setScissor=function(P,K,dt,ft){P.isVector4?ct.set(P.x,P.y,P.z,P.w):ct.set(P,K,dt,ft),at.scissor(et.copy(ct).multiplyScalar($).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(P){at.setScissorTest(gt=P)},this.setOpaqueSort=function(P){ht=P},this.setTransparentSort=function(P){R=P},this.getClearColor=function(P){return P.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(P=!0,K=!0,dt=!0){let ft=0;if(P){let Z=!1;if(U!==null){const Ct=U.texture.format;Z=Ct===_u||Ct===gu||Ct===mu}if(Z){const Ct=U.texture.type,Nt=Ct===Ei||Ct===vs||Ct===Zr||Ct===or||Ct===hu||Ct===pu,zt=Ft.getClearColor(),kt=Ft.getClearAlpha(),jt=zt.r,Zt=zt.g,Vt=zt.b;Nt?(x[0]=jt,x[1]=Zt,x[2]=Vt,x[3]=kt,S.clearBufferuiv(S.COLOR,0,x)):(v[0]=jt,v[1]=Zt,v[2]=Vt,v[3]=kt,S.clearBufferiv(S.COLOR,0,v))}else ft|=S.COLOR_BUFFER_BIT}K&&(ft|=S.DEPTH_BUFFER_BIT),dt&&(ft|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),vt.dispose(),Pt.dispose(),q.dispose(),_.dispose(),y.dispose(),V.dispose(),ne.dispose(),W.dispose(),Et.dispose(),st.dispose(),st.removeEventListener("sessionstart",Mu),st.removeEventListener("sessionend",Su),Ki.stop()};function pt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const P=_t.autoReset,K=At.enabled,dt=At.autoUpdate,ft=At.needsUpdate,Z=At.type;Mt(),_t.autoReset=P,At.enabled=K,At.autoUpdate=dt,At.needsUpdate=ft,At.type=Z}function wt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function It(P){const K=P.target;K.removeEventListener("dispose",It),_e(K)}function _e(P){Ee(P),q.remove(P)}function Ee(P){const K=q.get(P).programs;K!==void 0&&(K.forEach(function(dt){Et.releaseProgram(dt)}),P.isShaderMaterial&&Et.releaseShaderCache(P))}this.renderBufferDirect=function(P,K,dt,ft,Z,Ct){K===null&&(K=M);const Nt=Z.isMesh&&Z.matrixWorld.determinant()<0,zt=qp(P,K,dt,ft,Z);at.setMaterial(ft,Nt);let kt=dt.index,jt=1;if(ft.wireframe===!0){if(kt=it.getWireframeAttribute(dt),kt===void 0)return;jt=2}const Zt=dt.drawRange,Vt=dt.attributes.position;let se=Zt.start*jt,ve=(Zt.start+Zt.count)*jt;Ct!==null&&(se=Math.max(se,Ct.start*jt),ve=Math.min(ve,(Ct.start+Ct.count)*jt)),kt!==null?(se=Math.max(se,0),ve=Math.min(ve,kt.count)):Vt!=null&&(se=Math.max(se,0),ve=Math.min(ve,Vt.count));const be=ve-se;if(be<0||be===1/0)return;ne.setup(Z,ft,zt,dt,kt);let sn,ae=Tt;if(kt!==null&&(sn=F.get(kt),ae=Kt,ae.setIndex(sn)),Z.isMesh)ft.wireframe===!0?(at.setLineWidth(ft.wireframeLinewidth*k()),ae.setMode(S.LINES)):ae.setMode(S.TRIANGLES);else if(Z.isLine){let Ht=ft.linewidth;Ht===void 0&&(Ht=1),at.setLineWidth(Ht*k()),Z.isLineSegments?ae.setMode(S.LINES):Z.isLineLoop?ae.setMode(S.LINE_LOOP):ae.setMode(S.LINE_STRIP)}else Z.isPoints?ae.setMode(S.POINTS):Z.isSprite&&ae.setMode(S.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ae.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))ae.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Ht=Z._multiDrawStarts,ni=Z._multiDrawCounts,le=Z._multiDrawCount,wn=kt?F.get(kt).bytesPerElement:1,Ss=q.get(ft).currentProgram.getUniforms();for(let ln=0;ln<le;ln++)Ss.setValue(S,"_gl_DrawID",ln),ae.render(Ht[ln]/wn,ni[ln])}else if(Z.isInstancedMesh)ae.renderInstances(se,be,Z.count);else if(dt.isInstancedBufferGeometry){const Ht=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,ni=Math.min(dt.instanceCount,Ht);ae.renderInstances(se,be,ni)}else ae.render(se,be)};function re(P,K,dt){P.transparent===!0&&P.side===_i&&P.forceSinglePass===!1?(P.side=an,P.needsUpdate=!0,ro(P,K,dt),P.side=ji,P.needsUpdate=!0,ro(P,K,dt),P.side=_i):ro(P,K,dt)}this.compile=function(P,K,dt=null){dt===null&&(dt=P),h=Pt.get(dt),h.init(K),D.push(h),dt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),P!==dt&&P.traverseVisible(function(Z){Z.isLight&&Z.layers.test(K.layers)&&(h.pushLight(Z),Z.castShadow&&h.pushShadow(Z))}),h.setupLights();const ft=new Set;return P.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Ct=Z.material;if(Ct)if(Array.isArray(Ct))for(let Nt=0;Nt<Ct.length;Nt++){const zt=Ct[Nt];re(zt,dt,Z),ft.add(zt)}else re(Ct,dt,Z),ft.add(Ct)}),D.pop(),h=null,ft},this.compileAsync=function(P,K,dt=null){const ft=this.compile(P,K,dt);return new Promise(Z=>{function Ct(){if(ft.forEach(function(Nt){q.get(Nt).currentProgram.isReady()&&ft.delete(Nt)}),ft.size===0){Z(P);return}setTimeout(Ct,10)}Q.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let ke=null;function ei(P){ke&&ke(P)}function Mu(){Ki.stop()}function Su(){Ki.start()}const Ki=new Op;Ki.setAnimationLoop(ei),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(P){ke=P,st.setAnimationLoop(P),P===null?Ki.stop():Ki.start()},st.addEventListener("sessionstart",Mu),st.addEventListener("sessionend",Su),this.render=function(P,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(K),K=st.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,K,U),h=Pt.get(P,D.length),h.init(K),D.push(h),G.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y.setFromProjectionMatrix(G),yt=this.localClippingEnabled,lt=bt.init(this.clippingPlanes,yt),m=vt.get(P,I.length),m.init(),I.push(m),st.enabled===!0&&st.isPresenting===!0){const Ct=w.xr.getDepthSensingMesh();Ct!==null&&za(Ct,K,-1/0,w.sortObjects)}za(P,K,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ht,R),L=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,L&&Ft.addToRenderList(m,P),this.info.render.frame++,lt===!0&&bt.beginShadows();const dt=h.state.shadowsArray;At.render(dt,P,K),lt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=m.opaque,Z=m.transmissive;if(h.setupLights(),K.isArrayCamera){const Ct=K.cameras;if(Z.length>0)for(let Nt=0,zt=Ct.length;Nt<zt;Nt++){const kt=Ct[Nt];wu(ft,Z,P,kt)}L&&Ft.render(P);for(let Nt=0,zt=Ct.length;Nt<zt;Nt++){const kt=Ct[Nt];Eu(m,P,kt,kt.viewport)}}else Z.length>0&&wu(ft,Z,P,K),L&&Ft.render(P),Eu(m,P,K);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),P.isScene===!0&&P.onAfterRender(w,P,K),ne.resetDefaultState(),E=-1,T=null,D.pop(),D.length>0?(h=D[D.length-1],lt===!0&&bt.setGlobalState(w.clippingPlanes,h.state.camera)):h=null,I.pop(),I.length>0?m=I[I.length-1]:m=null};function za(P,K,dt,ft){if(P.visible===!1)return;if(P.layers.test(K.layers)){if(P.isGroup)dt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(K);else if(P.isLight)h.pushLight(P),P.castShadow&&h.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){ft&&ut.setFromMatrixPosition(P.matrixWorld).applyMatrix4(G);const Nt=V.update(P),zt=P.material;zt.visible&&m.push(P,Nt,zt,dt,ut.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){const Nt=V.update(P),zt=P.material;if(ft&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ut.copy(P.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),ut.copy(Nt.boundingSphere.center)),ut.applyMatrix4(P.matrixWorld).applyMatrix4(G)),Array.isArray(zt)){const kt=Nt.groups;for(let jt=0,Zt=kt.length;jt<Zt;jt++){const Vt=kt[jt],se=zt[Vt.materialIndex];se&&se.visible&&m.push(P,Nt,se,dt,ut.z,Vt)}}else zt.visible&&m.push(P,Nt,zt,dt,ut.z,null)}}const Ct=P.children;for(let Nt=0,zt=Ct.length;Nt<zt;Nt++)za(Ct[Nt],K,dt,ft)}function Eu(P,K,dt,ft){const Z=P.opaque,Ct=P.transmissive,Nt=P.transparent;h.setupLightsView(dt),lt===!0&&bt.setGlobalState(w.clippingPlanes,dt),ft&&at.viewport(A.copy(ft)),Z.length>0&&so(Z,K,dt),Ct.length>0&&so(Ct,K,dt),Nt.length>0&&so(Nt,K,dt),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function wu(P,K,dt,ft){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[ft.id]===void 0&&(h.state.transmissionRenderTarget[ft.id]=new xs(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?eo:Ei,minFilter:ps,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const Ct=h.state.transmissionRenderTarget[ft.id],Nt=ft.viewport||A;Ct.setSize(Nt.z,Nt.w);const zt=w.getRenderTarget();w.setRenderTarget(Ct),w.getClearColor(rt),mt=w.getClearAlpha(),mt<1&&w.setClearColor(16777215,.5),w.clear(),L&&Ft.render(dt);const kt=w.toneMapping;w.toneMapping=bi;const jt=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),h.setupLightsView(ft),lt===!0&&bt.setGlobalState(w.clippingPlanes,ft),so(P,dt,ft),C.updateMultisampleRenderTarget(Ct),C.updateRenderTargetMipmap(Ct),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Vt=0,se=K.length;Vt<se;Vt++){const ve=K[Vt],be=ve.object,sn=ve.geometry,ae=ve.material,Ht=ve.group;if(ae.side===_i&&be.layers.test(ft.layers)){const ni=ae.side;ae.side=an,ae.needsUpdate=!0,Tu(be,dt,ft,sn,ae,Ht),ae.side=ni,ae.needsUpdate=!0,Zt=!0}}Zt===!0&&(C.updateMultisampleRenderTarget(Ct),C.updateRenderTargetMipmap(Ct))}w.setRenderTarget(zt),w.setClearColor(rt,mt),jt!==void 0&&(ft.viewport=jt),w.toneMapping=kt}function so(P,K,dt){const ft=K.isScene===!0?K.overrideMaterial:null;for(let Z=0,Ct=P.length;Z<Ct;Z++){const Nt=P[Z],zt=Nt.object,kt=Nt.geometry,jt=ft===null?Nt.material:ft,Zt=Nt.group;zt.layers.test(dt.layers)&&Tu(zt,K,dt,kt,jt,Zt)}}function Tu(P,K,dt,ft,Z,Ct){P.onBeforeRender(w,K,dt,ft,Z,Ct),P.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(w,K,dt,ft,P,Ct),Z.transparent===!0&&Z.side===_i&&Z.forceSinglePass===!1?(Z.side=an,Z.needsUpdate=!0,w.renderBufferDirect(dt,K,ft,Z,P,Ct),Z.side=ji,Z.needsUpdate=!0,w.renderBufferDirect(dt,K,ft,Z,P,Ct),Z.side=_i):w.renderBufferDirect(dt,K,ft,Z,P,Ct),P.onAfterRender(w,K,dt,ft,Z,Ct)}function ro(P,K,dt){K.isScene!==!0&&(K=M);const ft=q.get(P),Z=h.state.lights,Ct=h.state.shadowsArray,Nt=Z.state.version,zt=Et.getParameters(P,Z.state,Ct,K,dt),kt=Et.getProgramCacheKey(zt);let jt=ft.programs;ft.environment=P.isMeshStandardMaterial?K.environment:null,ft.fog=K.fog,ft.envMap=(P.isMeshStandardMaterial?y:_).get(P.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&P.envMap===null?K.environmentRotation:P.envMapRotation,jt===void 0&&(P.addEventListener("dispose",It),jt=new Map,ft.programs=jt);let Zt=jt.get(kt);if(Zt!==void 0){if(ft.currentProgram===Zt&&ft.lightsStateVersion===Nt)return Cu(P,zt),Zt}else zt.uniforms=Et.getUniforms(P),P.onBeforeCompile(zt,w),Zt=Et.acquireProgram(zt,kt),jt.set(kt,Zt),ft.uniforms=zt.uniforms;const Vt=ft.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Vt.clippingPlanes=bt.uniform),Cu(P,zt),ft.needsLights=Zp(P),ft.lightsStateVersion=Nt,ft.needsLights&&(Vt.ambientLightColor.value=Z.state.ambient,Vt.lightProbe.value=Z.state.probe,Vt.directionalLights.value=Z.state.directional,Vt.directionalLightShadows.value=Z.state.directionalShadow,Vt.spotLights.value=Z.state.spot,Vt.spotLightShadows.value=Z.state.spotShadow,Vt.rectAreaLights.value=Z.state.rectArea,Vt.ltc_1.value=Z.state.rectAreaLTC1,Vt.ltc_2.value=Z.state.rectAreaLTC2,Vt.pointLights.value=Z.state.point,Vt.pointLightShadows.value=Z.state.pointShadow,Vt.hemisphereLights.value=Z.state.hemi,Vt.directionalShadowMap.value=Z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Vt.spotShadowMap.value=Z.state.spotShadowMap,Vt.spotLightMatrix.value=Z.state.spotLightMatrix,Vt.spotLightMap.value=Z.state.spotLightMap,Vt.pointShadowMap.value=Z.state.pointShadowMap,Vt.pointShadowMatrix.value=Z.state.pointShadowMatrix),ft.currentProgram=Zt,ft.uniformsList=null,Zt}function Au(P){if(P.uniformsList===null){const K=P.currentProgram.getUniforms();P.uniformsList=Qo.seqWithValue(K.seq,P.uniforms)}return P.uniformsList}function Cu(P,K){const dt=q.get(P);dt.outputColorSpace=K.outputColorSpace,dt.batching=K.batching,dt.batchingColor=K.batchingColor,dt.instancing=K.instancing,dt.instancingColor=K.instancingColor,dt.instancingMorph=K.instancingMorph,dt.skinning=K.skinning,dt.morphTargets=K.morphTargets,dt.morphNormals=K.morphNormals,dt.morphColors=K.morphColors,dt.morphTargetsCount=K.morphTargetsCount,dt.numClippingPlanes=K.numClippingPlanes,dt.numIntersection=K.numClipIntersection,dt.vertexAlphas=K.vertexAlphas,dt.vertexTangents=K.vertexTangents,dt.toneMapping=K.toneMapping}function qp(P,K,dt,ft,Z){K.isScene!==!0&&(K=M),C.resetTextureUnits();const Ct=K.fog,Nt=ft.isMeshStandardMaterial?K.environment:null,zt=U===null?w.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:dr,kt=(ft.isMeshStandardMaterial?y:_).get(ft.envMap||Nt),jt=ft.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,Zt=!!dt.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),Vt=!!dt.morphAttributes.position,se=!!dt.morphAttributes.normal,ve=!!dt.morphAttributes.color;let be=bi;ft.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(be=w.toneMapping);const sn=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,ae=sn!==void 0?sn.length:0,Ht=q.get(ft),ni=h.state.lights;if(lt===!0&&(yt===!0||P!==T)){const mn=P===T&&ft.id===E;bt.setState(ft,P,mn)}let le=!1;ft.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==ni.state.version||Ht.outputColorSpace!==zt||Z.isBatchedMesh&&Ht.batching===!1||!Z.isBatchedMesh&&Ht.batching===!0||Z.isBatchedMesh&&Ht.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ht.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ht.instancing===!1||!Z.isInstancedMesh&&Ht.instancing===!0||Z.isSkinnedMesh&&Ht.skinning===!1||!Z.isSkinnedMesh&&Ht.skinning===!0||Z.isInstancedMesh&&Ht.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ht.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ht.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ht.instancingMorph===!1&&Z.morphTexture!==null||Ht.envMap!==kt||ft.fog===!0&&Ht.fog!==Ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==bt.numPlanes||Ht.numIntersection!==bt.numIntersection)||Ht.vertexAlphas!==jt||Ht.vertexTangents!==Zt||Ht.morphTargets!==Vt||Ht.morphNormals!==se||Ht.morphColors!==ve||Ht.toneMapping!==be||Ht.morphTargetsCount!==ae)&&(le=!0):(le=!0,Ht.__version=ft.version);let wn=Ht.currentProgram;le===!0&&(wn=ro(ft,K,Z));let Ss=!1,ln=!1,pr=!1;const Me=wn.getUniforms(),Vn=Ht.uniforms;if(at.useProgram(wn.program)&&(Ss=!0,ln=!0,pr=!0),ft.id!==E&&(E=ft.id,ln=!0),Ss||T!==P){at.buffers.depth.getReversed()?(B.copy(P.projectionMatrix),Ob(B),Fb(B),Me.setValue(S,"projectionMatrix",B)):Me.setValue(S,"projectionMatrix",P.projectionMatrix),Me.setValue(S,"viewMatrix",P.matrixWorldInverse);const Ai=Me.map.cameraPosition;Ai!==void 0&&Ai.setValue(S,j.setFromMatrixPosition(P.matrixWorld)),ot.logarithmicDepthBuffer&&Me.setValue(S,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Me.setValue(S,"isOrthographic",P.isOrthographicCamera===!0),T!==P&&(T=P,ln=!0,pr=!0)}if(Z.isSkinnedMesh){Me.setOptional(S,Z,"bindMatrix"),Me.setOptional(S,Z,"bindMatrixInverse");const mn=Z.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Me.setValue(S,"boneTexture",mn.boneTexture,C))}Z.isBatchedMesh&&(Me.setOptional(S,Z,"batchingTexture"),Me.setValue(S,"batchingTexture",Z._matricesTexture,C),Me.setOptional(S,Z,"batchingIdTexture"),Me.setValue(S,"batchingIdTexture",Z._indirectTexture,C),Me.setOptional(S,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Me.setValue(S,"batchingColorTexture",Z._colorsTexture,C));const mr=dt.morphAttributes;if((mr.position!==void 0||mr.normal!==void 0||mr.color!==void 0)&&Ut.update(Z,dt,wn),(ln||Ht.receiveShadow!==Z.receiveShadow)&&(Ht.receiveShadow=Z.receiveShadow,Me.setValue(S,"receiveShadow",Z.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Vn.envMap.value=kt,Vn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&K.environment!==null&&(Vn.envMapIntensity.value=K.environmentIntensity),ln&&(Me.setValue(S,"toneMappingExposure",w.toneMappingExposure),Ht.needsLights&&Kp(Vn,pr),Ct&&ft.fog===!0&&St.refreshFogUniforms(Vn,Ct),St.refreshMaterialUniforms(Vn,ft,$,z,h.state.transmissionRenderTarget[P.id]),Qo.upload(S,Au(Ht),Vn,C)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Qo.upload(S,Au(Ht),Vn,C),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Me.setValue(S,"center",Z.center),Me.setValue(S,"modelViewMatrix",Z.modelViewMatrix),Me.setValue(S,"normalMatrix",Z.normalMatrix),Me.setValue(S,"modelMatrix",Z.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const mn=ft.uniformsGroups;for(let Ai=0,Ci=mn.length;Ai<Ci;Ai++){const Ru=mn[Ai];W.update(Ru,wn),W.bind(Ru,wn)}}return wn}function Kp(P,K){P.ambientLightColor.needsUpdate=K,P.lightProbe.needsUpdate=K,P.directionalLights.needsUpdate=K,P.directionalLightShadows.needsUpdate=K,P.pointLights.needsUpdate=K,P.pointLightShadows.needsUpdate=K,P.spotLights.needsUpdate=K,P.spotLightShadows.needsUpdate=K,P.rectAreaLights.needsUpdate=K,P.hemisphereLights.needsUpdate=K}function Zp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(P,K,dt){q.get(P.texture).__webglTexture=K,q.get(P.depthTexture).__webglTexture=dt;const ft=q.get(P);ft.__hasExternalTextures=!0,ft.__autoAllocateDepthBuffer=dt===void 0,ft.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ft.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,K){const dt=q.get(P);dt.__webglFramebuffer=K,dt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(P,K=0,dt=0){U=P,O=K,N=dt;let ft=!0,Z=null,Ct=!1,Nt=!1;if(P){const kt=q.get(P);if(kt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(S.FRAMEBUFFER,null),ft=!1;else if(kt.__webglFramebuffer===void 0)C.setupRenderTarget(P);else if(kt.__hasExternalTextures)C.rebindTextures(P,q.get(P.texture).__webglTexture,q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Vt=P.depthTexture;if(kt.__boundDepthTexture!==Vt){if(Vt!==null&&q.has(Vt)&&(P.width!==Vt.image.width||P.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(P)}}const jt=P.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Nt=!0);const Zt=q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Zt[K])?Z=Zt[K][dt]:Z=Zt[K],Ct=!0):P.samples>0&&C.useMultisampledRTT(P)===!1?Z=q.get(P).__webglMultisampledFramebuffer:Array.isArray(Zt)?Z=Zt[dt]:Z=Zt,A.copy(P.viewport),et.copy(P.scissor),nt=P.scissorTest}else A.copy(b).multiplyScalar($).floor(),et.copy(ct).multiplyScalar($).floor(),nt=gt;if(at.bindFramebuffer(S.FRAMEBUFFER,Z)&&ft&&at.drawBuffers(P,Z),at.viewport(A),at.scissor(et),at.setScissorTest(nt),Ct){const kt=q.get(P.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+K,kt.__webglTexture,dt)}else if(Nt){const kt=q.get(P.texture),jt=K||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,kt.__webglTexture,dt||0,jt)}E=-1},this.readRenderTargetPixels=function(P,K,dt,ft,Z,Ct,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){at.bindFramebuffer(S.FRAMEBUFFER,zt);try{const kt=P.texture,jt=kt.format,Zt=kt.type;if(!ot.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=P.width-ft&&dt>=0&&dt<=P.height-Z&&S.readPixels(K,dt,ft,Z,Wt.convert(jt),Wt.convert(Zt),Ct)}finally{const kt=U!==null?q.get(U).__webglFramebuffer:null;at.bindFramebuffer(S.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,K,dt,ft,Z,Ct,Nt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){const kt=P.texture,jt=kt.format,Zt=kt.type;if(!ot.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=P.width-ft&&dt>=0&&dt<=P.height-Z){at.bindFramebuffer(S.FRAMEBUFFER,zt);const Vt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Vt),S.bufferData(S.PIXEL_PACK_BUFFER,Ct.byteLength,S.STREAM_READ),S.readPixels(K,dt,ft,Z,Wt.convert(jt),Wt.convert(Zt),0);const se=U!==null?q.get(U).__webglFramebuffer:null;at.bindFramebuffer(S.FRAMEBUFFER,se);const ve=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Nb(S,ve,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Vt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ct),S.deleteBuffer(Vt),S.deleteSync(ve),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,K=null,dt=0){P.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1]);const ft=Math.pow(2,-dt),Z=Math.floor(P.image.width*ft),Ct=Math.floor(P.image.height*ft),Nt=K!==null?K.x:0,zt=K!==null?K.y:0;C.setTexture2D(P,0),S.copyTexSubImage2D(S.TEXTURE_2D,dt,0,0,Nt,zt,Z,Ct),at.unbindTexture()},this.copyTextureToTexture=function(P,K,dt=null,ft=null,Z=0){P.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),ft=arguments[0]||null,P=arguments[1],K=arguments[2],Z=arguments[3]||0,dt=null);let Ct,Nt,zt,kt,jt,Zt,Vt,se,ve;const be=P.isCompressedTexture?P.mipmaps[Z]:P.image;dt!==null?(Ct=dt.max.x-dt.min.x,Nt=dt.max.y-dt.min.y,zt=dt.isBox3?dt.max.z-dt.min.z:1,kt=dt.min.x,jt=dt.min.y,Zt=dt.isBox3?dt.min.z:0):(Ct=be.width,Nt=be.height,zt=be.depth||1,kt=0,jt=0,Zt=0),ft!==null?(Vt=ft.x,se=ft.y,ve=ft.z):(Vt=0,se=0,ve=0);const sn=Wt.convert(K.format),ae=Wt.convert(K.type);let Ht;K.isData3DTexture?(C.setTexture3D(K,0),Ht=S.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(C.setTexture2DArray(K,0),Ht=S.TEXTURE_2D_ARRAY):(C.setTexture2D(K,0),Ht=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,K.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,K.unpackAlignment);const ni=S.getParameter(S.UNPACK_ROW_LENGTH),le=S.getParameter(S.UNPACK_IMAGE_HEIGHT),wn=S.getParameter(S.UNPACK_SKIP_PIXELS),Ss=S.getParameter(S.UNPACK_SKIP_ROWS),ln=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,be.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,be.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,kt),S.pixelStorei(S.UNPACK_SKIP_ROWS,jt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Zt);const pr=P.isDataArrayTexture||P.isData3DTexture,Me=K.isDataArrayTexture||K.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const Vn=q.get(P),mr=q.get(K),mn=q.get(Vn.__renderTarget),Ai=q.get(mr.__renderTarget);at.bindFramebuffer(S.READ_FRAMEBUFFER,mn.__webglFramebuffer),at.bindFramebuffer(S.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ci=0;Ci<zt;Ci++)pr&&S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,q.get(P).__webglTexture,Z,Zt+Ci),P.isDepthTexture?(Me&&S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,q.get(K).__webglTexture,Z,ve+Ci),S.blitFramebuffer(kt,jt,Ct,Nt,Vt,se,Ct,Nt,S.DEPTH_BUFFER_BIT,S.NEAREST)):Me?S.copyTexSubImage3D(Ht,Z,Vt,se,ve+Ci,kt,jt,Ct,Nt):S.copyTexSubImage2D(Ht,Z,Vt,se,ve+Ci,kt,jt,Ct,Nt);at.bindFramebuffer(S.READ_FRAMEBUFFER,null),at.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else Me?P.isDataTexture||P.isData3DTexture?S.texSubImage3D(Ht,Z,Vt,se,ve,Ct,Nt,zt,sn,ae,be.data):K.isCompressedArrayTexture?S.compressedTexSubImage3D(Ht,Z,Vt,se,ve,Ct,Nt,zt,sn,be.data):S.texSubImage3D(Ht,Z,Vt,se,ve,Ct,Nt,zt,sn,ae,be):P.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Z,Vt,se,Ct,Nt,sn,ae,be.data):P.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Z,Vt,se,be.width,be.height,sn,be.data):S.texSubImage2D(S.TEXTURE_2D,Z,Vt,se,Ct,Nt,sn,ae,be);S.pixelStorei(S.UNPACK_ROW_LENGTH,ni),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,le),S.pixelStorei(S.UNPACK_SKIP_PIXELS,wn),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ss),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ln),Z===0&&K.generateMipmaps&&S.generateMipmap(Ht),at.unbindTexture()},this.copyTextureToTexture3D=function(P,K,dt=null,ft=null,Z=0){return P.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),dt=arguments[0]||null,ft=arguments[1]||null,P=arguments[2],K=arguments[3],Z=arguments[4]||0),Lr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,K,dt,ft,Z)},this.initRenderTarget=function(P){q.get(P).__webglFramebuffer===void 0&&C.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?C.setTextureCube(P,0):P.isData3DTexture?C.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?C.setTexture2DArray(P,0):C.setTexture2D(P,0),at.unbindTexture()},this.resetState=function(){O=0,N=0,U=null,at.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}class jw extends ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yw{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Bc,this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ye=new J;class pa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Yn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=pe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Yn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),i=pe(i,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new On(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gp extends Ms{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let zs;const wr=new J,ks=new J,Vs=new J,Hs=new $t,Tr=new $t,Wp=new Se,Uo=new J,Ar=new J,No=new J,Tf=new $t,Ll=new $t,Af=new $t;class qw extends ze{constructor(t=new Gp){if(super(),this.isSprite=!0,this.type="Sprite",zs===void 0){zs=new tn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Yw(e,5);zs.setIndex([0,1,2,0,2,3]),zs.setAttribute("position",new pa(i,3,0,!1)),zs.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=zs,this.material=t,this.center=new $t(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),Wp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Vs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Oo(Uo.set(-.5,-.5,0),Vs,o,ks,s,r),Oo(Ar.set(.5,-.5,0),Vs,o,ks,s,r),Oo(No.set(.5,.5,0),Vs,o,ks,s,r),Tf.set(0,0),Ll.set(1,0),Af.set(1,1);let a=t.ray.intersectTriangle(Uo,Ar,No,!1,wr);if(a===null&&(Oo(Ar.set(-.5,.5,0),Vs,o,ks,s,r),Ll.set(0,1),a=t.ray.intersectTriangle(Uo,No,Ar,!1,wr),a===null))return;const l=t.ray.origin.distanceTo(wr);l<t.near||l>t.far||e.push({distance:l,point:wr.clone(),uv:dn.getInterpolation(wr,Uo,Ar,No,Tf,Ll,Af,new $t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oo(n,t,e,i,s,r){Hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Tr.x=r*Hs.x-s*Hs.y,Tr.y=s*Hs.x+r*Hs.y):Tr.copy(Hs),n.copy(t),n.x+=Tr.x,n.y+=Tr.y,n.applyMatrix4(Wp)}class ma extends Ms{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ga=new J,_a=new J,Cf=new Se,Cr=new Fa,Fo=new Oa,Dl=new J,Rf=new J;class Ir extends ze{constructor(t=new tn,e=new ma){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)ga.fromBufferAttribute(e,s-1),_a.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=ga.distanceTo(_a);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,t.ray.intersectsSphere(Fo)===!1)return;Cf.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(Cf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){const h=u.getX(v),I=u.getX(v+1),D=Bo(this,t,Cr,l,h,I);D&&e.push(D)}if(this.isLineLoop){const v=u.getX(x-1),m=u.getX(p),h=Bo(this,t,Cr,l,v,m);h&&e.push(h)}}else{const p=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let v=p,m=x-1;v<m;v+=c){const h=Bo(this,t,Cr,l,v,v+1);h&&e.push(h)}if(this.isLineLoop){const v=Bo(this,t,Cr,l,x-1,p);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Bo(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(ga.fromBufferAttribute(o,s),_a.fromBufferAttribute(o,r),e.distanceSqToSegment(ga,_a,Dl,Rf)>i)return;Dl.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Dl);if(!(l<t.near||l>t.far))return{distance:l,point:Rf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Pf=new J,Lf=new J;class $p extends Ir{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Pf.fromBufferAttribute(e,s),Lf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Pf.distanceTo(Lf);t.setAttribute("lineDistance",new Mn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kw extends nn{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const zo=new J,ko=new J,Il=new J,Vo=new dn;class Zw extends tn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Vr*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),f={},p=[];for(let x=0;x<l;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:v,b:m,c:h}=Vo;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),h.fromBufferAttribute(a,c[2]),Vo.getNormal(Il),d[0]=`${Math.round(v.x*s)},${Math.round(v.y*s)},${Math.round(v.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(h.x*s)},${Math.round(h.y*s)},${Math.round(h.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let I=0;I<3;I++){const D=(I+1)%3,w=d[I],X=d[D],O=Vo[u[I]],N=Vo[u[D]],U=`${w}_${X}`,E=`${X}_${w}`;E in f&&f[E]?(Il.dot(f[E].normal)<=r&&(p.push(O.x,O.y,O.z),p.push(N.x,N.y,N.z)),f[E]=null):U in f||(f[U]={index0:c[I],index1:c[D],normal:Il.clone()})}}for(const x in f)if(f[x]){const{index0:v,index1:m}=f[x];zo.fromBufferAttribute(a,v),ko.fromBufferAttribute(a,m),p.push(zo.x,zo.y,zo.z),p.push(ko.x,ko.y,ko.z)}this.setAttribute("position",new Mn(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Df extends Ms{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ep,this.normalScale=new $t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Xp extends ze{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ul=new Se,If=new J,Uf=new J;class Jw{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new $t(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xu,this._frameExtents=new $t(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;If.setFromMatrixPosition(t.matrixWorld),e.position.copy(If),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),Ul.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qw extends Jw{constructor(){super(new Fp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nl extends Xp{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ze.DEFAULT_UP),this.updateMatrix(),this.target=new ze,this.shadow=new Qw}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class tT extends Xp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Nf=new Se;class eT{constructor(t,e,i=0,s=1/0){this.ray=new Fa(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new vu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nf),this}intersectObject(t,e=!0,i=[]){return Vc(t,this,i,e),i.sort(Of),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Vc(t[s],this,i,e);return i.sort(Of),i}}function Of(n,t){return n.distance-t.distance}function Vc(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Vc(r[o],t,e,!0)}}class Ff{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Qe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nT extends $p{constructor(t=10,e=10,i=4473924,s=8947848){i=new Xt(i),s=new Xt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let f=0,p=0,x=-a;f<=e;f++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const v=f===r?i:s;v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3,v.toArray(c,p),p+=3}const u=new tn;u.setAttribute("position",new Mn(l,3)),u.setAttribute("color",new Mn(c,3));const d=new ma({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class iT extends bs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:du}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=du);const Bf={type:"change"},bu={type:"start"},jp={type:"end"},Ho=new Fa,zf=new zi,sT=Math.cos(70*Ib.DEG2RAD),Pe=new J,rn=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ol=1e-6;class rT extends iT{constructor(t,e=null){super(t,e),this.state=me.NONE,this.enabled=!0,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qs.ROTATE,MIDDLE:qs.DOLLY,RIGHT:qs.PAN},this.touches={ONE:$s.ROTATE,TWO:$s.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ys,this._lastTargetPosition=new J,this._quat=new ys().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ff,this._sphericalDelta=new Ff,this._scale=1,this._panOffset=new J,this._rotateStart=new $t,this._rotateEnd=new $t,this._rotateDelta=new $t,this._panStart=new $t,this._panEnd=new $t,this._panDelta=new $t,this._dollyStart=new $t,this._dollyEnd=new $t,this._dollyDelta=new $t,this._dollyDirection=new J,this._mouse=new $t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aT.bind(this),this._onPointerDown=oT.bind(this),this._onPointerUp=lT.bind(this),this._onContextMenu=mT.bind(this),this._onMouseWheel=dT.bind(this),this._onKeyDown=fT.bind(this),this._onTouchStart=hT.bind(this),this._onTouchMove=pT.bind(this),this._onMouseDown=cT.bind(this),this._onMouseMove=uT.bind(this),this._interceptControlDown=gT.bind(this),this._interceptControlUp=_T.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bf),this.update(),this.state=me.NONE}update(t=null){const e=this.object.position;Pe.copy(e).sub(this.target),Pe.applyQuaternion(this._quat),this._spherical.setFromVector3(Pe),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=rn:i>Math.PI&&(i-=rn),s<-Math.PI?s+=rn:s>Math.PI&&(s-=rn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Pe.setFromSpherical(this._spherical),Pe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Pe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Pe.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new J(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new J(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Pe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ho.origin.copy(this.object.position),Ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ho.direction))<sT?this.object.lookAt(this.target):(zf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ho.intersectPlane(zf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ol||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ol||this._lastTargetPosition.distanceToSquared(this.target)>Ol?(this.dispatchEvent(Bf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?rn/60*this.autoRotateSpeed*t:rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Pe.setFromMatrixColumn(e,0),Pe.multiplyScalar(-t),this._panOffset.add(Pe)}_panUp(t,e){this.screenSpacePanning===!0?Pe.setFromMatrixColumn(e,1):(Pe.setFromMatrixColumn(e,0),Pe.crossVectors(this.object.up,Pe)),Pe.multiplyScalar(t),this._panOffset.add(Pe)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Pe.copy(s).sub(this.target);let r=Pe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-rn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new $t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function oT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function aT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function lT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jp),this.state=me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function cT(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=me.DOLLY;break;case qs.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}break;case qs.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bu)}function uT(n){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dT(n){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(n.preventDefault(),this.dispatchEvent(bu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(jp))}function fT(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function hT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case $s.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=me.TOUCH_ROTATE;break;case $s.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case $s.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=me.TOUCH_DOLLY_PAN;break;case $s.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(bu)}function pT(n){switch(this._trackPointer(n),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=me.NONE}}function mT(n){this.enabled!==!1&&n.preventDefault()}function gT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _T(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const vT={style:{position:"relative",width:"100%",height:"100%",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#070b14","user-select":"none"}},xT={style:{height:"44px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 14px",gap:"12px","z-index":"10"}},yT={style:{display:"flex","align-items":"center",gap:"8px"}},bT={style:{color:"#718096","font-size":"11px","font-family":"monospace"}},MT={key:0,style:{"background-color":"#121519",border:"1px solid #00d2ff",padding:"3px 10px","border-radius":"4px",display:"flex","align-items":"center",gap:"10px","font-family":"'Consolas', monospace","font-size":"11px",animation:"fadeIn 0.15s ease-out"}},ST={style:{color:"#00d2ff","font-weight":"bold"}},ET={style:{color:"#ecc94b"}},wT={style:{color:"#e2e8f0"}},TT={style:{color:"#e2e8f0"}},AT={style:{color:"#63b3ed"}},CT={style:{color:"#e2e8f0"}},RT={style:{color:"#e2e8f0"}},PT={style:{"background-color":"#1c4532",color:"#48bb78","font-weight":"bold",padding:"1px 6px","border-radius":"3px",border:"1px solid #276749"}},LT={key:1,style:{"font-size":"11px",color:"#718096",display:"flex","align-items":"center",gap:"6px"}},DT={style:{display:"flex","align-items":"center",gap:"6px"}},IT={style:{display:"flex","background-color":"#121519",padding:"2px","border-radius":"4px",border:"1px solid #2d3748","font-size":"10.5px"}},UT={style:{"font-weight":"bold",color:"#00d2ff","border-bottom":"1px solid #2d3748","padding-bottom":"3px","margin-bottom":"4px",display:"flex","justify-content":"space-between",gap:"14px"}},NT={style:{color:"#48bb78"}},OT={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"3px 10px","font-size":"10.5px"}},FT={style:{color:"#ecc94b"}},BT={style:{color:"#63b3ed"}},zT=wi({__name:"ThreeBarChart",props:{points:{},voltageSteps:{},loadSteps:{},loadMode:{}},setup(n){const t=n,e=Yt(null),i=Yt(null),s=Yt("current"),r=Yt({visible:!1,x:0,y:0}),o=Be(()=>s.value==="current"?"输出电流 Iout (A)":"输出功率 Pout (W)");function a(H){s.value=H,E()}let l,c,u,d,f,p,x,v=[],m=null,h=new js,I=new js,D=null;function w(H){const ht=Math.max(0,Math.min(1,(H-65)/31)),R=new Xt;return ht<.25?R.lerpColors(new Xt(16007006),new Xt(16347926),ht/.25):ht<.5?R.lerpColors(new Xt(16347926),new Xt(15381256),(ht-.25)/.25):ht<.75?R.lerpColors(new Xt(15381256),new Xt(1096065),(ht-.5)/.25):ht<.9?R.lerpColors(new Xt(1096065),new Xt(440020),(ht-.75)/.15):R.lerpColors(new Xt(440020),new Xt(9133302),(ht-.9)/.1),R}function X(H,z=24,$="#94a3b8"){const ht=document.createElement("canvas");ht.width=512,ht.height=128;const R=ht.getContext("2d");R.fillStyle="transparent",R.fillRect(0,0,ht.width,ht.height),R.font=`bold ${z*2}px "Fira Code", monospace`,R.fillStyle=$,R.textAlign="center",R.textBaseline="middle",R.fillText(H,ht.width/2,ht.height/2);const b=new Kw(ht);b.minFilter=Pn;const ct=new Gp({map:b,transparent:!0,depthWrite:!1}),gt=new qw(ct);return gt.scale.set(4,1,1),gt}function O(){if(!c||!d||!e.value)return;const H=e.value.clientWidth||800,z=e.value.clientHeight||600;if(H===0||z===0)return;c.aspect=H/z,c.updateProjectionMatrix();const $=t.voltageSteps&&t.voltageSteps.length>0?t.voltageSteps:t.points?[...new Set(t.points.map(C=>C.voltageTarget))]:[12],ht=t.loadSteps&&t.loadSteps.length>0?t.loadSteps:t.points?[...new Set(t.points.map(C=>C.loadTarget))]:[1],R=Math.max(1,$.length),b=Math.max(1,ht.length),ct=Math.max(18,Math.min(65,R*2.2)),gt=Math.max(18,Math.min(65,b*2.2)),Y=12,lt=ct+8,yt=gt+8,B=Y+4,G=c.fov*Math.PI/180,j=Math.max(.1,c.aspect),ut=(lt+yt)*.72,L=(B*1.1+(lt+yt)*.35)/(2*Math.tan(G/2)*.74),k=ut/(2*Math.tan(G/2)*j*.74),S=Math.max(L,k,22),tt=.56,Q=Math.PI/4,ot=Y*.38,at=S*Math.cos(tt)*Math.sin(Q),_t=ot+S*Math.sin(tt),q=S*Math.cos(tt)*Math.cos(Q);c.position.set(at,_t,q),c.near=.5,c.far=Math.max(3e3,S*25),c.updateProjectionMatrix(),d.target.set(0,ot,0),d.minDistance=Math.max(5,S*.15),d.maxDistance=Math.max(120,S*6),d.update()}function N(){O()}function U(){if(!e.value)return;const H=e.value.clientWidth||800,z=e.value.clientHeight||600;l=new jw,l.background=new Xt(461588),l.fog=null,c=new xn(45,H/z,.5,3e3),u=new Xw({antialias:!0,alpha:!0,powerPreference:"high-performance"}),u.setSize(H,z),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=bi,e.value.appendChild(u.domElement),d=new rT(c,u.domElement),d.enableDamping=!0,d.dampingFactor=.06,d.maxPolarAngle=Math.PI/2-.02;const $=new tT(16777215,.88);l.add($);const ht=new Nl(16777215,.45);ht.position.set(40,60,40),l.add(ht);const R=new Nl(16777215,.35);R.position.set(-40,50,-40),l.add(R);const b=new Nl(16777215,.25);b.position.set(0,40,-50),l.add(b),p=new eT,x=new $t(-999,-999),l.add(h),l.add(I),D=new ResizeObserver(()=>{mt()}),D.observe(e.value),window.addEventListener("resize",mt),e.value.addEventListener("mousemove",T),e.value.addEventListener("mouseleave",A),E(),O(),rt()}function E(){if(!l)return;for(;h.children.length>0;){const vt=h.children[0];h.remove(vt)}for(;I.children.length>0;){const vt=I.children[0];I.remove(vt)}v=[],m=null,i.value=null,r.value.visible=!1;const H=t.points;if(!H||H.length===0)return;const z=t.voltageSteps&&t.voltageSteps.length>0?[...t.voltageSteps].sort((vt,Pt)=>vt-Pt):[...new Set(H.map(vt=>vt.voltageTarget))].sort((vt,Pt)=>vt-Pt),$=t.loadSteps&&t.loadSteps.length>0?[...t.loadSteps].sort((vt,Pt)=>vt-Pt):[...new Set(H.map(vt=>vt.loadTarget))].sort((vt,Pt)=>vt-Pt),ht=Math.max(1,z.length),R=Math.max(1,$.length),b=Math.max(18,Math.min(65,ht*2.2)),ct=Math.max(18,Math.min(65,R*2.2)),gt=12,Y=ht>1?b/(ht-1):b,lt=R>1?ct/(R-1):ct,yt=Math.max(.12,Math.min(1.5,Y*.7)),B=Math.max(.12,Math.min(1.5,lt*.7)),G=new Map;H.forEach(vt=>{if(vt.status==="completed"||vt.timestamp>0){const Pt=`${vt.voltageTarget.toFixed(3)}_${vt.loadTarget.toFixed(3)}`;G.set(Pt,vt)}});const ut=Math.max(b,ct)+14,M=Math.max(12,Math.min(40,Math.max(ht,R))),L=new nT(ut,M,165063,1976635);L.position.set(0,0,0),h.add(L);const k=new io(ut*1.4,ut*1.4),S=new Df({color:725280,roughness:.7,metalness:.1}),tt=new Dn(k,S);tt.rotation.x=-Math.PI/2,tt.position.y=-.05,tt.receiveShadow=!0,h.add(tt);const Q=new ma({color:3718648,linewidth:2}),ot=new tn().setFromPoints([new J(-b/2-1,0,ct/2+1),new J(b/2+2,0,ct/2+1)]);h.add(new Ir(ot,Q));const at=X("X: 输入电压 Vin (V)",22,"#38bdf8");at.position.set(0,.4,ct/2+3.2),at.scale.set(7.5,1.9,1),h.add(at);const _t=10,q=Math.max(1,Math.ceil(ht/_t));z.forEach((vt,Pt)=>{if(Pt%q===0||Pt===ht-1){const bt=-b/2+(ht>1?Pt/(ht-1)*b:0),At=X(`${vt}V`,16,"#94a3b8");At.position.set(bt,.2,ct/2+1.8),At.scale.set(Math.min(3.2,Y*1.5),.9,1),h.add(At)}});const C=new tn().setFromPoints([new J(-b/2-1,0,-ct/2-1),new J(-b/2-1,0,ct/2+2)]);h.add(new Ir(C,Q));const _=s.value==="power"||t.loadMode==="CW",y=_?"W":"A",it=X(_?"Y: 负载功率 Pout (W)":"Y: 负载电流 Iout (A)",22,"#f59e0b");it.position.set(-b/2-3.8,.4,0),it.scale.set(8.5,2.1,1),h.add(it);const V=Math.max(1,Math.ceil(R/_t));$.forEach((vt,Pt)=>{if(Pt%V===0||Pt===R-1){const bt=-ct/2+(R>1?Pt/(R-1)*ct:0),At=X(`${vt}${y}`,16,"#94a3b8");At.position.set(-b/2-2.2,.2,bt),At.scale.set(Math.min(3.2,lt*1.5),.9,1),h.add(At)}});const Et=new tn().setFromPoints([new J(-b/2-1,0,ct/2+1),new J(-b/2-1,gt+1.5,ct/2+1)]);h.add(new Ir(Et,Q));const St=X("Z: 转换效率 η (%)",22,"#10b981");St.position.set(-b/2-1,gt+2.4,ct/2+1),St.scale.set(7.5,1.9,1),h.add(St),[20,40,60,80,100].forEach(vt=>{const Pt=vt/100*gt,bt=X(`${vt}%`,16,"#6ee7b7");bt.position.set(-b/2-2,Pt,ct/2+1),bt.scale.set(2.8,.8,1),h.add(bt);const At=new tn().setFromPoints([new J(-b/2-.8,Pt,ct/2+1),new J(-b/2-.2,Pt,ct/2+1)]);h.add(new Ir(At,Q))}),z.forEach((vt,Pt)=>{$.forEach((bt,At)=>{const Ft=`${vt.toFixed(3)}_${bt.toFixed(3)}`,Ut=G.get(Ft);if(!Ut)return;const Tt=-b/2+(ht>1?Pt/(ht-1)*b:0),Kt=-ct/2+(R>1?At/(R-1)*ct:0),Wt=Math.max(.5,Math.min(100,Ut.efficiency)),ne=Math.max(.2,Wt/100*gt),W=new fr(yt,ne,B);W.translate(0,ne/2,0),W.computeBoundingBox(),W.computeBoundingSphere();const Mt=w(Wt),st=new Df({color:Mt,roughness:.35,metalness:.15,emissive:0,emissiveIntensity:0}),pt=new Dn(W,st);pt.position.set(Tt,0,Kt),pt.castShadow=!0,pt.receiveShadow=!0,pt.__barPoint=Ut;const Rt=new Zw(W),wt=new ma({color:16777215,transparent:!0,opacity:.25}),It=new $p(Rt,wt);pt.add(It),I.add(pt),pt.scale.set(1,.01,1),v.push({mesh:pt,wireframe:It,point:Ut,baseY:0,targetElevation:0,currentElevation:0,targetScaleY:1,currentScaleY:.01,fullHeight:ne,material:st,origColor:Mt.clone()})})}),O()}function T(H){if(!e.value)return;const z=e.value.getBoundingClientRect();x.x=(H.clientX-z.left)/z.width*2-1,x.y=-((H.clientY-z.top)/z.height)*2+1,r.value.x=H.clientX-z.left,r.value.y=H.clientY-z.top}function A(){x.x=-999,x.y=-999,r.value.visible=!1,m&&et()}function et(){m&&(m.targetElevation=0,m.wireframe.material.opacity=.25,m.wireframe.material.color.set(16777215),m=null,i.value=null,r.value.visible=!1)}function nt(){if(!c||!l||v.length===0)return;p.setFromCamera(x,c);const H=v.map($=>$.mesh),z=p.intersectObjects(H,!1);if(z.length>0){const $=z[0].object,ht=v.find(R=>R.mesh===$);ht&&ht!==m&&(m&&et(),m=ht,i.value=ht.point,r.value.visible=!0,ht.targetElevation=1.2,ht.wireframe.material.opacity=.9,ht.wireframe.material.color.set(54015))}else m&&et()}function rt(){f=requestAnimationFrame(rt),d&&d.update(),nt(),v.forEach(H=>{H.currentScaleY+=(H.targetScaleY-H.currentScaleY)*.1,H.mesh.scale.y=H.currentScaleY,H.currentElevation+=(H.targetElevation-H.currentElevation)*.15,H.mesh.position.y=H.baseY+H.currentElevation}),u&&l&&c&&u.render(l,c)}function mt(){if(!e.value||!u||!c)return;const H=e.value.clientWidth,z=e.value.clientHeight;H===0||z===0||(c.aspect=H/z,c.updateProjectionMatrix(),u.setSize(H,z))}return gs(()=>t.points,()=>{E()},{deep:!0}),cr(()=>{U()}),ur(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",mt),D&&(D.disconnect(),D=null),u&&u.domElement&&(u.domElement.remove(),u.dispose())}),(H,z)=>(Ot(),Bt("div",vT,[g("div",xT,[g("div",yT,[z[2]||(z[2]=jr('<svg class="icon-md" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d2ff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5e3b1907><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" data-v-5e3b1907></path><polyline points="3.27 6.96 12 12.01 20.73 6.96" data-v-5e3b1907></polyline><line x1="12" y1="22.08" x2="12" y2="12" data-v-5e3b1907></line></svg><span style="font-weight:bold;color:#00d2ff;font-size:12px;" data-v-5e3b1907>3D 空间特征柱状图</span>',2)),g("span",bT,"| X: Vin | Y: "+xt(o.value)+" | Z(高度): 效率 η",1)]),i.value?(Ot(),Bt("div",MT,[g("span",ST," 选定点 #"+xt(i.value.stepIndex)+": ",1),g("span",null,[z[3]||(z[3]=Dt("Vin: ",-1)),g("b",ET,xt(i.value.vin.toFixed(3))+"V",1)]),g("span",null,[z[4]||(z[4]=Dt("Iin: ",-1)),g("b",wT,xt(i.value.iin.toFixed(3))+"A",1)]),g("span",null,[z[5]||(z[5]=Dt("Pin: ",-1)),g("b",TT,xt(i.value.pin.toFixed(3))+"W",1)]),g("span",null,[z[6]||(z[6]=Dt("Vout: ",-1)),g("b",AT,xt(i.value.vout.toFixed(3))+"V",1)]),g("span",null,[z[7]||(z[7]=Dt("Iout: ",-1)),g("b",CT,xt(i.value.iout.toFixed(3))+"A",1)]),g("span",null,[z[8]||(z[8]=Dt("Pout: ",-1)),g("b",RT,xt(i.value.pout.toFixed(3))+"W",1)]),g("span",PT," 效率 η: "+xt(i.value.efficiency.toFixed(2))+"% ",1)])):(Ot(),Bt("div",LT,[...z[9]||(z[9]=[g("span",{style:{color:"#ecc94b"}},"💡",-1),g("span",null,"移动鼠标悬停在 3D 柱体上可浮起并查看具体参数；左键拖拽旋转视角，滚轮缩放，右键平移。",-1)])])),g("div",DT,[g("div",IT,[g("button",{class:"btn",style:ye({backgroundColor:s.value==="current"?"#2b6cb0":"transparent",color:s.value==="current"?"#ffffff":"#a0aec0",fontWeight:s.value==="current"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:z[0]||(z[0]=$=>a("current"))}," Y: 负载电流 (A) ",4),g("button",{class:"btn",style:ye({backgroundColor:s.value==="power"?"#2b6cb0":"transparent",color:s.value==="power"?"#ffffff":"#a0aec0",fontWeight:s.value==="power"?"bold":"normal",border:"none",padding:"2px 6px"}),onClick:z[1]||(z[1]=$=>a("power"))}," Y: 输出功率 (W) ",4)]),g("button",{class:"btn",style:{padding:"3px 8px","font-size":"11px"},onClick:N,title:"重置视角"}," 重置视角 ")])]),g("div",{ref_key:"mountRef",ref:e,style:{flex:"1",width:"100%",height:"100%",position:"relative",cursor:"grab"}},[r.value.visible&&i.value?(Ot(),Bt("div",{key:0,style:ye([{left:`${r.value.x}px`,top:`${r.value.y}px`},{"pointer-events":"none",position:"absolute","z-index":"20",transform:"translate(-50%, -100%)","margin-top":"-12px",padding:"8px 10px","background-color":"rgba(26, 30, 36, 0.95)",border:"1px solid #00d2ff","border-radius":"6px","box-shadow":"0 8px 20px rgba(0,0,0,0.8)","font-family":"'Consolas', monospace","font-size":"11px",color:"#e2e8f0","white-space":"nowrap"}])},[g("div",UT,[g("span",null,"采样点 #"+xt(i.value.stepIndex),1),g("span",NT,"η = "+xt(i.value.efficiency.toFixed(2))+"%",1)]),g("div",OT,[g("div",null,[z[10]||(z[10]=Dt("Vin: ",-1)),g("span",FT,xt(i.value.vin.toFixed(2))+"V",1)]),g("div",null,[z[11]||(z[11]=Dt("Vout: ",-1)),g("span",BT,xt(i.value.vout.toFixed(2))+"V",1)]),g("div",null,[z[12]||(z[12]=Dt("Iin: ",-1)),g("span",null,xt(i.value.iin.toFixed(3))+"A",1)]),g("div",null,[z[13]||(z[13]=Dt("Iout: ",-1)),g("span",null,xt(i.value.iout.toFixed(3))+"A",1)]),g("div",null,[z[14]||(z[14]=Dt("Pin: ",-1)),g("span",null,xt(i.value.pin.toFixed(2))+"W",1)]),g("div",null,[z[15]||(z[15]=Dt("Pout: ",-1)),g("span",null,xt(i.value.pout.toFixed(2))+"W",1)])])],4)):De("",!0),z[16]||(z[16]=jr('<div style="position:absolute;bottom:16px;right:16px;z-index:10;padding:8px 12px;background-color:rgba(26, 30, 36, 0.85);border-radius:6px;border:1px solid #2d3748;display:flex;flex-direction:column;gap:4px;pointer-events:auto;" data-v-5e3b1907><div style="font-size:10px;font-weight:bold;color:#a0aec0;display:flex;justify-content:space-between;" data-v-5e3b1907><span data-v-5e3b1907>效率色谱 (η)</span><span style="font-family:monospace;color:#00d2ff;" data-v-5e3b1907>0% ~ 100%</span></div><div style="height:8px;width:140px;border-radius:4px;background:linear-gradient(to right, #f43f5e, #f59e0b, #48bb78, #00d2ff, #8b5cf6);" data-v-5e3b1907></div><div style="display:flex;justify-content:space-between;font-size:9px;font-family:monospace;color:#718096;" data-v-5e3b1907><span data-v-5e3b1907>&lt;70% 低效</span><span data-v-5e3b1907>85%</span><span data-v-5e3b1907>&gt;95% 高效</span></div></div>',1))],512)]))}}),kT=au(zT,[["__scopeId","data-v-5e3b1907"]]),VT={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},HT={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},GT={style:{display:"flex","align-items":"center",gap:"12px"}},WT={style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},$T={style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}},XT={key:0,style:{display:"flex","align-items":"center",gap:"10px","font-size":"11px","font-family":"'Consolas', monospace"}},jT={style:{"background-color":"#1c4532",border:"1px solid #276749",color:"#9ae6b4",padding:"3px 8px","border-radius":"4px",display:"flex","align-items":"center",gap:"6px"}},YT={style:{color:"#68d391","font-size":"13px"}},qT={key:0,style:{"font-size":"10px",color:"#c6f6d5"}},KT={style:{"background-color":"#234e52",border:"1px solid #285e61",color:"#81e6d9",padding:"3px 8px","border-radius":"4px"}},ZT={style:{color:"#4fd1c5","font-size":"12px"}},JT={style:{"background-color":"#2d3748",border:"1px solid #4a5568",color:"#e2e8f0",padding:"3px 8px","border-radius":"4px"}},QT={style:{color:"#ecc94b"}},tA={style:{display:"flex","align-items":"center",gap:"8px"}},eA={style:{display:"flex","background-color":"#2d3748",padding:"2px","border-radius":"4px","font-size":"11px"}},nA=["value"],iA={style:{flex:"1",width:"100%",height:"100%",overflow:"hidden",position:"relative"}},sA={style:{width:"100%",height:"100%",position:"relative"}},rA={key:1,style:{width:"100%",height:"100%",display:"flex","align-items":"center","justify-content":"center",color:"#718096","font-size":"13px"}},oA={style:{width:"100%",height:"100%",display:"flex","flex-direction":"column","background-color":"#171b22",overflow:"hidden"}},aA={style:{flex:"1",overflow:"auto",padding:"12px"}},lA={key:0,style:{width:"100%","border-collapse":"collapse","font-family":"'Consolas', monospace","font-size":"11.5px","text-align":"center"}},cA={style:{"background-color":"#121519",color:"#e2e8f0","border-bottom":"2px solid #2d3748"}},uA={style:{padding:"8px 10px","text-align":"left","border-right":"1px solid #2d3748","background-color":"#121519",position:"sticky",left:"0","z-index":"5"}},dA={style:{padding:"8px 10px","text-align":"left","font-weight":"bold",color:"#63b3ed","border-right":"1px solid #2d3748","background-color":"#171b22",position:"sticky",left:"0","z-index":"5"}},fA=["onClick"],hA={key:1,style:{color:"#4a5568"}},pA={key:0,style:{padding:"8px 14px","background-color":"#121519","border-top":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between","font-family":"'Consolas', monospace","font-size":"11px"}},mA={style:{color:"#63b3ed","font-weight":"bold"}},gA={style:{color:"#ecc94b"}},_A={style:{color:"#63b3ed"}},vA={style:{color:"#48bb78","font-weight":"bold","font-size":"13px"}},xA=wi({__name:"Result3DView",setup(n){const t=Uv(),e=lp(),i=Yt(null),s=Yt([]),r=Yt(""),o=Yt(null),a=Yt("3d");async function l(){const x=t.params.id||"";if(s.value=await up(),x){const v=await Q0(x);if(v){i.value=v,r.value=v.id;return}}s.value.length>0&&(i.value=s.value[0],r.value=s.value[0].id)}function c(x,v){if(i.value)return i.value.points.find(m=>Math.abs(m.voltageTarget-x)<1e-4&&Math.abs(m.loadTarget-v)<1e-4)}function u(x){return x>=90?{backgroundColor:"#1c4532",color:"#9ae6b4",border:"1px solid #276749"}:x>=85?{backgroundColor:"#234e52",color:"#81e6d9",border:"1px solid #285e61"}:x>=75?{backgroundColor:"#744210",color:"#fbd38d",border:"1px solid #975a16"}:{backgroundColor:"#742a2a",color:"#feb2b2",border:"1px solid #9b2c2c"}}function d(){r.value&&e.replace(`/result/${r.value}`)}function f(){i.value&&jo(i.value)}function p(){window.opener?window.close():e.push("/")}return gs(()=>t.params.id,()=>{l()}),cr(()=>{l()}),(x,v)=>{var h,I,D,w,X,O,N,U;const m=iu("router-link");return Ot(),Bt("div",VT,[g("header",HT,[g("div",GT,[Ie(m,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回控制台"},{default:eu(()=>[...v[5]||(v[5]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 控制台 ",-1)])]),_:1}),g("div",null,[g("div",WT,[g("span",null,xt(((h=i.value)==null?void 0:h.title)||"测试结果数据查看"),1),v[6]||(v[6]=g("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#234e52",color:"#4fd1c5",border:"1px solid #319795"}}," 独立结果可视化 ",-1))]),g("div",$T," 测试时间: "+xt(i.value?new Date(i.value.createdAt).toLocaleString():"--")+" | 规格: "+xt((D=(I=i.value)==null?void 0:I.config)==null?void 0:D.voltageMin)+"V~"+xt((X=(w=i.value)==null?void 0:w.config)==null?void 0:X.voltageMax)+"V, "+xt((N=(O=i.value)==null?void 0:O.config)==null?void 0:N.loadMode),1)])]),(U=i.value)!=null&&U.summary?(Ot(),Bt("div",XT,[g("div",jT,[g("span",null,[v[7]||(v[7]=Dt("峰值效率 η_max: ",-1)),g("b",YT,xt(i.value.summary.maxEfficiency.toFixed(2))+"%",1)]),i.value.summary.optimalPoint?(Ot(),Bt("span",qT," (@"+xt(i.value.summary.optimalPoint.vin.toFixed(1))+"V, "+xt(i.value.summary.optimalPoint.iout.toFixed(2))+"A) ",1)):De("",!0)]),g("div",KT,[g("span",null,[v[8]||(v[8]=Dt("平均效率 η_avg: ",-1)),g("b",ZT,xt(i.value.summary.avgEfficiency.toFixed(2))+"%",1)])]),g("div",JT,[g("span",null,[v[9]||(v[9]=Dt("矩阵测试点: ",-1)),g("b",QT,xt(i.value.points.length)+" 点",1)])])])):De("",!0),g("div",tA,[g("div",eA,[g("button",{class:"btn",style:ye({backgroundColor:a.value==="3d"?"#3182ce":"transparent",color:a.value==="3d"?"#ffffff":"#a0aec0",fontWeight:a.value==="3d"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:v[0]||(v[0]=E=>a.value="3d")}," 3D 空间柱状图 ",4),g("button",{class:"btn",style:ye({backgroundColor:a.value==="matrix"?"#3182ce":"transparent",color:a.value==="matrix"?"#ffffff":"#a0aec0",fontWeight:a.value==="matrix"?"bold":"normal",border:"none",padding:"3px 10px"}),onClick:v[1]||(v[1]=E=>a.value="matrix")}," 2D 效率矩阵表 ",4)]),s.value.length>1?ee((Ot(),Bt("select",{key:0,"onUpdate:modelValue":v[2]||(v[2]=E=>r.value=E),onChange:d,style:{padding:"3px 6px","font-size":"11px","max-width":"170px"}},[(Ot(!0),Bt(Re,null,vi(s.value,E=>(Ot(),Bt("option",{key:E.id,value:E.id},xt(E.title),9,nA))),128))],544)),[[ua,r.value]]):De("",!0),i.value?(Ot(),Bt("button",{key:1,class:"btn btn-success",style:{padding:"4px 10px","font-weight":"bold"},onClick:f},[...v[10]||(v[10]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}),g("polyline",{points:"7 10 12 15 17 10"}),g("line",{x1:"12",y1:"15",x2:"12",y2:"3"})],-1),Dt(" 下载 CSV ",-1)])])):De("",!0),g("button",{class:"btn",style:{padding:"4px 8px"},onClick:p,title:"关闭页面"}," ✕ ")])]),g("div",iA,[ee(g("div",sA,[i.value&&i.value.points.length>0?(Ot(),ou(kT,{key:0,points:i.value.points,"voltage-steps":i.value.voltageSteps,"load-steps":i.value.loadSteps,"load-mode":i.value.config.loadMode},null,8,["points","voltage-steps","load-steps","load-mode"])):(Ot(),Bt("div",rA," 正在从 IndexedDB 加载 3D 矩阵效率数据... "))],512),[[Ju,a.value==="3d"]]),ee(g("div",oA,[v[17]||(v[17]=jr('<div style="height:34px;background-color:#1a1e24;border-bottom:1px solid #2d3748;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-weight:bold;font-size:12px;"><span style="color:#63b3ed;display:flex;align-items:center;gap:6px;"><svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg> 2D 双向芯片效率特征矩阵表 (η vs Vin, Load) </span><div style="display:flex;align-items:center;gap:8px;font-size:10px;font-family:monospace;"><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#22543d;border:1px solid #38a169;border-radius:2px;"></span> &gt;90% 高效</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#234e52;border:1px solid #319795;border-radius:2px;"></span> 85~90%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#744210;border:1px solid #d69e2e;border-radius:2px;"></span> 75~85%</span><span style="display:flex;align-items:center;gap:4px;"><span style="width:10px;height:10px;background-color:#742a2a;border:1px solid #e53e3e;border-radius:2px;"></span> &lt;75% 低效</span></div></div>',1)),g("div",aA,[i.value?(Ot(),Bt("table",lA,[g("thead",null,[g("tr",cA,[g("th",uA," 负载 ("+xt(i.value.config.loadMode==="CC"?"A":"W")+") \\ 电压 (V) ",1),(Ot(!0),Bt(Re,null,vi(i.value.voltageSteps,E=>(Ot(),Bt("th",{key:E,style:{padding:"8px 10px","min-width":"80px",color:"#ecc94b","font-weight":"bold","border-right":"1px solid #2d3748"}},xt(E)+"V ",1))),128))])]),g("tbody",null,[(Ot(!0),Bt(Re,null,vi(i.value.loadSteps,E=>(Ot(),Bt("tr",{key:E,style:{"border-bottom":"1px solid #2d3748"}},[g("td",dA,xt(E)+xt(i.value.config.loadMode==="CC"?"A":"W"),1),(Ot(!0),Bt(Re,null,vi(i.value.voltageSteps,T=>(Ot(),Bt("td",{key:T,style:{padding:"6px","border-right":"1px solid #2d3748",cursor:"pointer",transition:"transform 0.1s"},onMouseenter:v[3]||(v[3]=A=>A.currentTarget.style.transform="scale(1.04)"),onMouseleave:v[4]||(v[4]=A=>A.currentTarget.style.transform="scale(1.0)"),onClick:A=>o.value=c(T,E)||null},[c(T,E)?(Ot(),Bt("div",{key:0,style:ye([{padding:"5px 6px","border-radius":"4px","font-weight":"bold","font-size":"12px"},u(c(T,E).efficiency)])},xt(c(T,E).efficiency.toFixed(2))+"% ",5)):(Ot(),Bt("span",hA,"--"))],40,fA))),128))]))),128))])])):De("",!0)]),o.value?(Ot(),Bt("div",pA,[g("span",mA," 选定点 (#"+xt(o.value.stepIndex)+"): ",1),g("span",null,"目标: "+xt(o.value.voltageTarget)+"V / "+xt(o.value.loadTarget)+xt(o.value.loadMode),1),g("span",null,[v[11]||(v[11]=Dt("实测Vin: ",-1)),g("b",gA,xt(o.value.vin.toFixed(3))+"V",1)]),g("span",null,[v[12]||(v[12]=Dt("实测Iin: ",-1)),g("b",null,xt(o.value.iin.toFixed(3))+"A",1)]),g("span",null,[v[13]||(v[13]=Dt("实测Pin: ",-1)),g("b",null,xt(o.value.pin.toFixed(3))+"W",1)]),g("span",null,[v[14]||(v[14]=Dt("实测Vout: ",-1)),g("b",_A,xt(o.value.vout.toFixed(3))+"V",1)]),g("span",null,[v[15]||(v[15]=Dt("实测Iout: ",-1)),g("b",null,xt(o.value.iout.toFixed(3))+"A",1)]),g("span",null,[v[16]||(v[16]=Dt("实测Pout: ",-1)),g("b",null,xt(o.value.pout.toFixed(3))+"W",1)]),g("span",vA," 效率 η: "+xt(o.value.efficiency.toFixed(2))+"% ",1)])):De("",!0)],512),[[Ju,a.value==="matrix"]])])])}}}),yA={style:{width:"100vw",height:"100vh",display:"flex","flex-direction":"column",overflow:"hidden","background-color":"#121519",color:"#e2e8f0","font-family":"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"}},bA={style:{height:"48px","background-color":"#1a1e24","border-bottom":"1px solid #2d3748",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 16px","z-index":"30",gap:"12px"}},MA={style:{display:"flex","align-items":"center",gap:"12px"}},SA={style:{display:"flex","align-items":"center",gap:"10px"}},EA={style:{color:"#68d391","font-weight":"bold","font-size":"11.5px",display:"flex","align-items":"center",gap:"5px",cursor:"pointer"}},wA={style:{flex:"1",display:"flex",overflow:"hidden",position:"relative"}},TA={style:{flex:"1","border-right":"1px solid #2d3748",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},AA={class:"group-box",style:{"margin-top":"0","border-color":"#2b6cb0"}},CA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},RA={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},PA={style:{"font-family":"monospace",color:"#63b3ed"}},LA={style:{display:"flex","align-items":"center",gap:"6px"}},DA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},IA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},UA={style:{display:"flex",gap:"6px"}},NA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},OA={style:{display:"flex",gap:"6px"}},FA={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},BA={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},zA={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},kA={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},VA={style:{"margin-bottom":"12px"}},HA={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},GA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ecc94b"}},WA={style:{color:"#ecc94b","font-weight":"bold","font-size":"16px"}},$A={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #48bb78"}},XA={style:{color:"#48bb78","font-weight":"bold","font-size":"16px"}},jA={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},YA={style:{color:"#ed8936","font-weight":"bold","font-size":"16px"}},qA={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},KA={style:{display:"flex",gap:"6px"}},ZA={style:{flex:"1",display:"flex","flex-direction":"column","background-color":"#15191e","overflow-y":"auto",padding:"14px"}},JA={class:"group-box",style:{"margin-top":"0","border-color":"#c05621"}},QA={style:{display:"flex","align-items":"center","justify-content":"space-between","margin-bottom":"12px",background:"#121519",padding:"6px 10px","border-radius":"4px",border:"1px solid #2d3748"}},tC={style:{display:"flex","align-items":"center",gap:"8px","font-size":"11px"}},eC={style:{"font-family":"monospace",color:"#ed8936"}},nC={style:{display:"flex","align-items":"center",gap:"6px"}},iC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},sC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},rC={style:{display:"flex",gap:"6px"}},oC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},aC={style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},lC={style:{color:"#ed8936","font-family":"monospace"}},cC={style:{display:"flex",gap:"6px"}},uC=["step"],dC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},fC={style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"10px","margin-bottom":"12px"}},hC={style:{"text-align":"center","margin-bottom":"12px","font-size":"12px","font-weight":"bold"}},pC={key:0,style:{color:"#68d391",background:"#1c4532",padding:"3px 12px","border-radius":"12px",border:"1px solid #276749"}},mC={key:1,style:{color:"#fc8181",background:"#742a2a",padding:"3px 12px","border-radius":"12px",border:"1px solid #9b2c2c"}},gC={style:{"margin-bottom":"12px"}},_C={style:{display:"grid","grid-template-columns":"1fr 1fr 1fr 1fr",gap:"8px","font-family":"'Consolas', monospace"}},vC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #63b3ed"}},xC={style:{color:"#63b3ed","font-weight":"bold","font-size":"15px"}},yC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #ed8936"}},bC={style:{color:"#ed8936","font-weight":"bold","font-size":"15px"}},MC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #f56565"}},SC={style:{color:"#f56565","font-weight":"bold","font-size":"15px"}},EC={style:{"background-color":"#121519",padding:"6px 8px","border-radius":"4px","border-left":"3px solid #9f7aea"}},wC={style:{color:"#b794f4","font-weight":"bold","font-size":"15px"}},TC={style:{background:"#121519",padding:"8px 10px","border-radius":"4px",border:"1px solid #2d3748"}},AC={style:{display:"flex",gap:"6px"}},CC={style:{height:"180px","background-color":"#0d1117","border-top":"1px solid #2d3748",display:"flex","flex-direction":"column"}},RC={style:{height:"28px","background-color":"#161b22","border-bottom":"1px solid #30363d",display:"flex","align-items":"center","justify-content":"space-between",padding:"0 12px","font-size":"11px","font-weight":"bold"}},PC={style:{color:"#6e7681"}},LC={key:0,style:{color:"#484f58","font-style":"italic"}},DC=wi({__name:"SingleInstrumentView",setup(n){const t=da.getInstance(),e=Yt(t.psu.isVirtual),i=Yt(5),s=Yt(2),r=Yt(!1),o=Yt(""),a=yn({vin:0,iin:0,pin:0}),l=Yt("CC"),c=Yt(1),u=Yt(!1),d=Yt(!1),f=Yt(""),p=yn({vout:0,iout:0,pout:0,r:0}),x=Yt([]),v=Yt(null);function m(R,b="#7ee787"){const ct=new Date().toLocaleTimeString();x.value.push({time:ct,text:R,color:b}),x.value.length>300&&x.value.shift(),setTimeout(()=>{v.value&&(v.value.scrollTop=v.value.scrollHeight)},10)}const h=Be(()=>{switch(l.value){case"CC":return"A";case"CV":return"V";case"CW":return"W";case"CR":return"Ω"}}),I=Be(()=>{switch(l.value){case"CC":return"0 ~ 30A (步进 0.1A)";case"CV":return"0 ~ 60V (步进 0.5V)";case"CW":return"0 ~ 150W (步进 1W)";case"CR":return"0.1 ~ 1000Ω (步进 1Ω)"}}),D=Be(()=>{switch(l.value){case"CC":return .1;case"CV":return .5;case"CW":return 1;case"CR":return .5}});function w(){switch(l.value){case"CC":c.value=1;break;case"CV":c.value=5;break;case"CW":c.value=10;break;case"CR":c.value=5;break}}async function X(){try{await t.setPsuVoltageOnly(i.value),m(`[PSU] 设置电压指令成功: ${i.value.toFixed(3)} V`,"#ecc94b")}catch(R){m(`[PSU 错误] 设置电压失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function O(){try{await t.setPsuCurrentLimitOnly(s.value),m(`[PSU] 设置限流指令成功: ${s.value.toFixed(3)} A`,"#48bb78")}catch(R){m(`[PSU 错误] 设置限流失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function N(R){try{await t.setPsuOutput(R,i.value,s.value),r.value=R,m(`[PSU] 电源输出开关指令已生效 -> ${R?"开启 (ON)":"关闭 (OFF)"}`,R?"#3fb950":"#f85149")}catch(b){m(`[PSU 错误] 输出切换失败: ${(b==null?void 0:b.message)||b}`,"#f85149")}}async function U(){const R=o.value.trim();if(R){m(`[PSU TX] >> ${R}`,"#58a6ff");try{const b=await t.sendPsuRawSCPI(R);m(`[PSU RX] << ${b}`,"#7ee787")}catch(b){m(`[PSU ERR] << ${(b==null?void 0:b.message)||b}`,"#f85149")}o.value=""}}async function E(){if(t.psu.state.connected)await t.psu.disconnect(),r.value=!1,m("[PSU] 电源连接已断开","#a0aec0");else try{e.value?(t.psu.connectVirtual(),m("[PSU] 虚拟仿真电源驱动已连接","#3fb950")):(await t.psu.connectPhysical(9600),m("[PSU] 物理电源串口连接成功","#3fb950"))}catch(R){m(`[PSU 错误] 连接失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function T(){try{await t.setLoadModeAndValue(l.value,c.value),m(`[LOAD] 应用设定成功: 模式=${l.value}, 目标值=${c.value} ${h.value}`,"#ed8936")}catch(R){m(`[LOAD 错误] 应用负载设定失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function A(R){try{await t.setLoadModeAndValue(l.value,c.value),await t.setLoadInputState(R),u.value=R,m(`[LOAD] 负载带载开关已生效 -> ${R?"带载中 (ON)":"停止带载 (OFF)"}`,R?"#3fb950":"#f85149")}catch(b){m(`[LOAD 错误] 带载开关失败: ${(b==null?void 0:b.message)||b}`,"#f85149")}}async function et(){d.value=!d.value;try{await t.setLoadShortState(d.value),m(`[LOAD] 短路测试状态切换 -> ${d.value?"短路开启 (ON)":"短路关闭 (OFF)"}`,"#e3b341")}catch(R){m(`[LOAD 错误] 短路测试指令失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function nt(){try{await t.clearLoadProtectionState(),m("[LOAD] 保护状态清除指令已发送 (:PROT:CLE)","#58a6ff")}catch(R){m(`[LOAD 错误] 清除保护失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}async function rt(){const R=f.value.trim();if(R){m(`[LOAD TX] >> ${R}`,"#f0883e");try{const b=await t.sendLoadRawSCPI(R);m(`[LOAD RX] << ${b}`,"#7ee787")}catch(b){m(`[LOAD ERR] << ${(b==null?void 0:b.message)||b}`,"#f85149")}f.value=""}}async function mt(){if(t.load.state.connected)await t.load.disconnect(),u.value=!1,m("[LOAD] 电子负载连接已断开","#a0aec0");else try{e.value?(t.load.connectVirtual(),m("[LOAD] 虚拟仿真电子负载驱动已连接","#3fb950")):(await t.load.connectPhysical(9600),m("[LOAD] 物理电子负载串口连接成功","#3fb950"))}catch(R){m(`[LOAD 错误] 连接失败: ${(R==null?void 0:R.message)||R}`,"#f85149")}}function H(){e.value?(t.autoConnectVirtual(),m("🧪 已切换至虚拟仿真演示模式","#3fb950")):(t.emergencyStopAll(),t.psu.disconnect(),t.load.disconnect(),m("🔌 已切换至物理真实串口模式，请点击连接打开串口","#58a6ff"))}async function z(){await t.emergencyStopAll(),r.value=!1,u.value=!1,m("🛑 紧急停止已触发: 电源输出已关闭，负载已停止带载","#f85149")}let $=null;function ht(){const R=t.measure();a.vin=R.vin,a.iin=R.iin,a.pin=R.pin,p.vout=R.vout,p.iout=R.iout,p.pout=R.pout,p.r=R.iout>.005?R.vout/R.iout:0}return cr(()=>{m("单仪器测试工作台已启动就绪。可独立调试电源电压/限流/开关与电子负载四模拉载。","#58a6ff"),$=window.setInterval(ht,150)}),ur(()=>{$&&clearInterval($)}),(R,b)=>{const ct=iu("router-link");return Ot(),Bt("div",yA,[g("header",bA,[g("div",MA,[Ie(ct,{to:"/",class:"btn",style:{padding:"4px 10px","font-weight":"bold","background-color":"#2b6cb0",color:"white","border-color":"#3182ce"},title:"返回测试工作台主界面"},{default:eu(()=>[...b[12]||(b[12]=[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[g("polyline",{points:"15 18 9 12 15 6"})],-1),Dt(" 返回控制台 ",-1)])]),_:1}),b[13]||(b[13]=g("div",null,[g("div",{style:{"font-weight":"bold","font-size":"13px",color:"#ffffff",display:"flex","align-items":"center",gap:"8px"}},[g("span",null,"🔧 仪器底层单体测试与硬件调试工作台 (Single Instrument Debugger)"),g("span",{style:{"font-size":"10px","font-family":"monospace",padding:"1px 6px","border-radius":"3px","background-color":"#2c5282",color:"#90cdf4",border:"1px solid #3182ce"}}," 单仪器独立控制 ")]),g("div",{style:{"font-size":"10.5px",color:"#a0aec0","font-family":"'Consolas', monospace"}}," 支持电源独立加压/限流/开关输出，负载四模(CC/CV/CP/CR)单独带载，以及原始 SCPI 串口收发 ")],-1))]),g("div",SA,[g("label",EA,[ee(g("input",{type:"checkbox","onUpdate:modelValue":b[0]||(b[0]=gt=>e.value=gt),onChange:H},null,544),[[Fi,e.value]]),b[14]||(b[14]=Dt(" 🧪 仿真演示驱动 ",-1))]),g("button",{class:"btn btn-danger",style:{padding:"4px 12px","font-weight":"bold","font-size":"11.5px"},onClick:z}," 🛑 一键关闭所有输出 ")])]),g("div",wA,[g("div",TA,[g("div",AA,[b[26]||(b[26]=g("div",{class:"group-title",style:{color:"#63b3ed"}},[g("span",null,"⚡ 高精度直流电源单体测试 (RIGOL DP700 系列)")],-1)),g("div",CA,[g("div",RA,[g("span",{style:ye([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:de(t).psu.state.connected?"#48bb78":"#e53e3e"}])},null,4),b[15]||(b[15]=g("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"电源状态:",-1)),g("span",PA,xt(de(t).psu.state.portName),1)]),g("div",LA,[g("button",{class:"btn",style:ye([{backgroundColor:de(t).psu.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:E},xt(de(t).psu.state.connected?"断开连接":"连接电源"),5)])]),g("div",DA,[g("div",IA,[b[16]||(b[16]=g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[g("span",null,"设定输出电压 (V):"),g("span",{style:{color:"#ecc94b","font-family":"monospace"}},"0 ~ 60V")],-1)),g("div",UA,[ee(g("input",{type:"number","onUpdate:modelValue":b[1]||(b[1]=gt=>i.value=gt),step:"0.5",min:"0",max:"60",style:{flex:"1","font-weight":"bold",color:"#ecc94b","font-size":"14px"}},null,512),[[Fe,i.value,void 0,{number:!0}]]),g("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:X}," 应用电压 ")])]),g("div",NA,[b[17]||(b[17]=g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px",display:"flex","justify-content":"space-between"}},[g("span",null,"设定最大限流 (A):"),g("span",{style:{color:"#48bb78","font-family":"monospace"}},"0 ~ 10A")],-1)),g("div",OA,[ee(g("input",{type:"number","onUpdate:modelValue":b[2]||(b[2]=gt=>s.value=gt),step:"0.1",min:"0.1",max:"10",style:{flex:"1","font-weight":"bold",color:"#48bb78","font-size":"14px"}},null,512),[[Fe,s.value,void 0,{number:!0}]]),g("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:O}," 应用限流 ")])])]),g("div",FA,[g("button",{class:"btn",style:ye([{backgroundColor:r.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:r.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:b[3]||(b[3]=gt=>N(!0))}," ▶ 开始输出 (Output ON) ",4),g("button",{class:"btn",style:ye([{backgroundColor:r.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:b[4]||(b[4]=gt=>N(!1))}," ⏹ 停止输出 (Output OFF) ",4)]),g("div",BA,[r.value?(Ot(),Bt("span",zA," ● 电源通道输出已开启 (ON) ")):(Ot(),Bt("span",kA," ○ 电源通道输出已关闭 (OFF) "))]),g("div",VA,[b[24]||(b[24]=g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 电源实测遥测数据 (Telemetry): ",-1)),g("div",HA,[g("div",GA,[b[19]||(b[19]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vin:",-1)),g("div",WA,[Dt(xt(a.vin.toFixed(3))+" ",1),b[18]||(b[18]=g("span",{style:{"font-size":"10px"}},"V",-1))])]),g("div",$A,[b[21]||(b[21]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iin:",-1)),g("div",XA,[Dt(xt(a.iin.toFixed(3))+" ",1),b[20]||(b[20]=g("span",{style:{"font-size":"10px"}},"A",-1))])]),g("div",jA,[b[23]||(b[23]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pin:",-1)),g("div",YA,[Dt(xt(a.pin.toFixed(3))+" ",1),b[22]||(b[22]=g("span",{style:{"font-size":"10px"}},"W",-1))])])])]),g("div",qA,[b[25]||(b[25]=g("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送电源原始 SCPI 指令 (如 :MEAS:ALL? 或 *IDN?):",-1)),g("div",KA,[ee(g("input",{type:"text","onUpdate:modelValue":b[5]||(b[5]=gt=>o.value=gt),placeholder:":APPL CH1,12,2 或 :OUTP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(U,["enter"])},null,544),[[Fe,o.value]]),g("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:U}," 发送指令 ")])])])]),g("div",ZA,[g("div",JA,[b[40]||(b[40]=g("div",{class:"group-title",style:{color:"#ed8936"}},[g("span",null,"🔋 可编程电子负载单体测试 (UNI-T UTL8500 系列)")],-1)),g("div",QA,[g("div",tC,[g("span",{style:ye([{width:"8px",height:"8px","border-radius":"50%"},{backgroundColor:de(t).load.state.connected?"#48bb78":"#e53e3e"}])},null,4),b[27]||(b[27]=g("span",{style:{color:"#cbd5e1","font-weight":"bold"}},"负载状态:",-1)),g("span",eC,xt(de(t).load.state.portName),1)]),g("div",nC,[g("button",{class:"btn",style:ye([{backgroundColor:de(t).load.state.connected?"#742a2a":"#234e52",color:"white"},{padding:"2px 8px","font-size":"11px"}]),onClick:mt},xt(de(t).load.state.connected?"断开连接":"连接负载"),5)])]),g("div",iC,[g("div",sC,[b[29]||(b[29]=g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"4px"}}," 工作模式选择: ",-1)),g("div",rC,[ee(g("select",{"onUpdate:modelValue":b[6]||(b[6]=gt=>l.value=gt),style:{flex:"1","font-weight":"bold",color:"#63b3ed"},onChange:w},[...b[28]||(b[28]=[g("option",{value:"CC"},"CC (定电流模式)",-1),g("option",{value:"CV"},"CV (定电压模式)",-1),g("option",{value:"CW"},"CP/CW (定功率模式)",-1),g("option",{value:"CR"},"CR (定电阻模式)",-1)])],544),[[ua,l.value]]),g("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:T}," 应用模式 ")])]),g("div",oC,[g("div",aC,[g("span",null,"设定值 ("+xt(h.value)+"):",1),g("span",lC,xt(I.value),1)]),g("div",cC,[ee(g("input",{type:"number","onUpdate:modelValue":b[7]||(b[7]=gt=>c.value=gt),step:D.value,min:"0",style:{flex:"1","font-weight":"bold",color:"#ed8936","font-size":"14px"}},null,8,uC),[[Fe,c.value,void 0,{number:!0}]]),g("button",{class:"btn btn-primary",style:{padding:"2px 8px","font-size":"11px"},onClick:T}," 应用设定 ")])])]),g("div",dC,[g("button",{class:"btn",style:ye([{backgroundColor:d.value?"#744210":"#2d3748",borderColor:"#d69e2e",color:"#fbd38d"},{padding:"6px","font-size":"11.5px","font-weight":"bold"}]),onClick:et}," ⚡ "+xt(d.value?"退出短路测试 (Short OFF)":"短路测试 (Short ON)"),5),g("button",{class:"btn",style:{"background-color":"#2d3748",color:"#90cdf4","border-color":"#3182ce",padding:"6px","font-size":"11.5px","font-weight":"bold"},onClick:nt}," 🛡️ 清除保护状态 (Clear Prot) ")]),g("div",fC,[g("button",{class:"btn",style:ye([{backgroundColor:u.value?"#1c4532":"#22543d",borderColor:"#38a169",color:"#68d391",boxShadow:u.value?"0 0 10px rgba(72, 187, 120, 0.4)":"none"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:b[8]||(b[8]=gt=>A(!0))}," ▶ 开始带载 (Input ON) ",4),g("button",{class:"btn",style:ye([{backgroundColor:u.value?"#9b2c2c":"#742a2a",borderColor:"#e53e3e",color:"#feb2b2"},{padding:"8px","font-weight":"bold","font-size":"13px"}]),onClick:b[9]||(b[9]=gt=>A(!1))}," ⏹ 停止带载 (Input OFF) ",4)]),g("div",hC,[u.value?(Ot(),Bt("span",pC," ● 电子负载正在拉载 (ON) ")):(Ot(),Bt("span",mC," ○ 电子负载带载已关闭 (OFF) "))]),g("div",gC,[b[38]||(b[38]=g("div",{style:{"font-size":"11px",color:"#a0aec0","margin-bottom":"6px","font-weight":"bold"}}," 📊 负载实测遥测数据 (Telemetry): ",-1)),g("div",_C,[g("div",vC,[b[31]||(b[31]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电压 Vout:",-1)),g("div",xC,[Dt(xt(p.vout.toFixed(3))+" ",1),b[30]||(b[30]=g("span",{style:{"font-size":"9px"}},"V",-1))])]),g("div",yC,[b[33]||(b[33]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测电流 Iout:",-1)),g("div",bC,[Dt(xt(p.iout.toFixed(3))+" ",1),b[32]||(b[32]=g("span",{style:{"font-size":"9px"}},"A",-1))])]),g("div",MC,[b[35]||(b[35]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"实测功率 Pout:",-1)),g("div",SC,[Dt(xt(p.pout.toFixed(3))+" ",1),b[34]||(b[34]=g("span",{style:{"font-size":"9px"}},"W",-1))])]),g("div",EC,[b[37]||(b[37]=g("div",{style:{color:"#a0aec0","font-size":"10px"}},"等效电阻 R:",-1)),g("div",wC,[Dt(xt(p.r.toFixed(2))+" ",1),b[36]||(b[36]=g("span",{style:{"font-size":"9px"}},"Ω",-1))])])])]),g("div",TC,[b[39]||(b[39]=g("div",{style:{"font-size":"10.5px",color:"#718096","margin-bottom":"4px"}},"发送负载原始 SCPI 指令 (如 :MEAS:VOLT? 或 :SOUR:CURR 2.0):",-1)),g("div",AC,[ee(g("input",{type:"text","onUpdate:modelValue":b[10]||(b[10]=gt=>f.value=gt),placeholder:":SOUR:FUNC CC 或 :SOUR:INP ON",style:{flex:"1","font-family":"'Consolas', monospace","font-size":"11px"},onKeyup:cd(rt,["enter"])},null,544),[[Fe,f.value]]),g("button",{class:"btn",style:{padding:"2px 10px","font-size":"11px"},onClick:rt}," 发送指令 ")])])])])]),g("div",CC,[g("div",RC,[b[41]||(b[41]=g("span",{style:{color:"#7ee787",display:"flex","align-items":"center",gap:"6px"}},[g("svg",{class:"icon-sm",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[g("polyline",{points:"4 17 10 11 4 5"}),g("line",{x1:"12",y1:"19",x2:"20",y2:"19"})]),Dt(" 底盘通信终端交互日志 (Serial & SCPI Terminal Log) ")],-1)),g("button",{class:"btn",style:{padding:"1px 6px","font-size":"10px"},onClick:b[11]||(b[11]=gt=>x.value=[])}," 清空日志 ")]),g("div",{ref_key:"logContainerRef",ref:v,style:{flex:"1","overflow-y":"auto",padding:"8px 12px","font-family":"'Consolas', monospace","font-size":"11px","line-height":"1.5",color:"#7ee787"}},[(Ot(!0),Bt(Re,null,vi(x.value,(gt,Y)=>(Ot(),Bt("div",{key:Y,style:ye({color:gt.color})},[g("span",PC,"["+xt(gt.time)+"]",1),Dt(" "+xt(gt.text),1)],4))),128)),x.value.length===0?(Ot(),Bt("div",LC," 等待指令输入与硬件交互... ")):De("",!0)],512)])])}}}),IC=[{path:"/",name:"Console",component:Wy},{path:"/single-instrument",name:"SingleInstrument",component:DC},{path:"/debug",redirect:"/single-instrument"},{path:"/result/:id",name:"Result3D",component:xA,props:!0}],UC=Iv({history:dv(),routes:IC}),Yp=b_(T_);Yp.use(UC);Yp.mount("#app");
