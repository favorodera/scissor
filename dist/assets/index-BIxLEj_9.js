const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-B7vneKH4.js","assets/Dashboard-C5xou10W.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function kl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Oe={},Vr=[],Nt=()=>{},ym=()=>!1,So=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ol=t=>t.startsWith("onUpdate:"),He=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vm=Object.prototype.hasOwnProperty,ve=(t,e)=>vm.call(t,e),oe=Array.isArray,Mr=t=>Po(t)==="[object Map]",Of=t=>Po(t)==="[object Set]",ce=t=>typeof t=="function",qe=t=>typeof t=="string",Kn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Nf=t=>(De(t)||ce(t))&&ce(t.then)&&ce(t.catch),Df=Object.prototype.toString,Po=t=>Df.call(t),Em=t=>Po(t).slice(8,-1),xf=t=>Po(t)==="[object Object]",Dl=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wm=/-(\w)/g,Qt=Co(t=>t.replace(wm,(e,n)=>n?n.toUpperCase():"")),Im=/\B([A-Z])/g,es=Co(t=>t.replace(Im,"-$1").toLowerCase()),ko=Co(t=>t.charAt(0).toUpperCase()+t.slice(1)),Aa=Co(t=>t?`on${ko(t)}`:""),Bn=(t,e)=>!Object.is(t,e),Hi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Vf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Wa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Tm=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let bu;const Mf=()=>bu||(bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?Sm(r):xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||De(t))return t}const Am=/;(?![^(]*\))/g,bm=/:([^]+)/,Rm=/\/\*[^]*?\*\//g;function Sm(t){const e={};return t.replace(Rm,"").split(Am).forEach(n=>{if(n){const r=n.split(bm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Oo(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Oo(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=kl(Pm);function Lf(t){return!!t||t===""}const Ff=t=>!!(t&&t.__v_isRef===!0),Ga=t=>qe(t)?t:t==null?"":oe(t)||De(t)&&(t.toString===Df||!ce(t.toString))?Ff(t)?Ga(t.value):JSON.stringify(t,Uf,2):String(t),Uf=(t,e)=>Ff(e)?Uf(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ba(r,i)+" =>"]=s,n),{})}:Of(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ba(n))}:Kn(e)?ba(e):De(e)&&!oe(e)&&!xf(e)?String(e):e,ba=(t,e="")=>{var n;return Kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let It;class $f{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=It,!e&&It&&(this.index=(It.scopes||(It.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=It;try{return It=this,e()}finally{It=n}}}on(){It=this}off(){It=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Bf(t){return new $f(t)}function km(t,e=It){e&&e.active&&e.effects.push(t)}function jf(){return It}function Om(t){It&&It.cleanups.push(t)}let hr;class Vl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,km(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Wn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Nm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Gn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mn,n=hr;try{return Mn=!0,hr=this,this._runnings++,Ru(this),this.fn()}finally{Su(this),this._runnings--,hr=n,Mn=e}}stop(){this.active&&(Ru(this),Su(this),this.onStop&&this.onStop(),this.active=!1)}}function Nm(t){return t.value}function Ru(t){t._trackId++,t._depsLength=0}function Su(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Hf(t.deps[e],t);t.deps.length=t._depsLength}}function Hf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mn=!0,Qa=0;const qf=[];function Wn(){qf.push(Mn),Mn=!1}function Gn(){const t=qf.pop();Mn=t===void 0?!0:t}function Ml(){Qa++}function Ll(){for(Qa--;!Qa&&Ja.length;)Ja.shift()()}function zf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Hf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ja=[];function Kf(t,e,n){Ml();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Ja.push(r.scheduler)))}Ll()}const Wf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ro=new WeakMap,fr=Symbol(""),Xa=Symbol("");function mt(t,e,n){if(Mn&&hr){let r=ro.get(t);r||ro.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Wf(()=>r.delete(n))),zf(hr,s)}}function cn(t,e,n,r,s,i){const a=ro.get(t);if(!a)return;let l=[];if(e==="clear")l=[...a.values()];else if(n==="length"&&oe(t)){const c=Number(r);a.forEach((h,d)=>{(d==="length"||!Kn(d)&&d>=c)&&l.push(h)})}else switch(n!==void 0&&l.push(a.get(n)),e){case"add":oe(t)?Dl(n)&&l.push(a.get("length")):(l.push(a.get(fr)),Mr(t)&&l.push(a.get(Xa)));break;case"delete":oe(t)||(l.push(a.get(fr)),Mr(t)&&l.push(a.get(Xa)));break;case"set":Mr(t)&&l.push(a.get(fr));break}Ml();for(const c of l)c&&Kf(c,4);Ll()}function Dm(t,e){const n=ro.get(t);return n&&n.get(e)}const xm=kl("__proto__,__v_isRef,__isVue"),Gf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kn)),Pu=Vm();function Vm(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ee(this);for(let i=0,a=this.length;i<a;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ee)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Wn(),Ml();const r=Ee(this)[e].apply(this,n);return Ll(),Gn(),r}}),t}function Mm(t){Kn(t)||(t=String(t));const e=Ee(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Qf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Qm:Zf:i?Yf:Xf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){if(a&&ve(Pu,n))return Reflect.get(Pu,n,r);if(n==="hasOwnProperty")return Mm}const l=Reflect.get(e,n,r);return(Kn(n)?Gf.has(n):xm(n))||(s||mt(e,"get",n),i)?l:ze(l)?a&&Dl(n)?l:l.value:De(l)?s?td(l):ri(l):l}}class Jf extends Qf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Us(i);if(!so(r)&&!Us(r)&&(i=Ee(i),r=Ee(r)),!oe(e)&&ze(i)&&!ze(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&Dl(n)?Number(n)<e.length:ve(e,n),l=Reflect.set(e,n,r,s);return e===Ee(s)&&(a?Bn(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),l}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Kn(n)||!Gf.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",oe(e)?"length":fr),Reflect.ownKeys(e)}}class Lm extends Qf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Fm=new Jf,Um=new Lm,$m=new Jf(!0);const Fl=t=>t,No=t=>Reflect.getPrototypeOf(t);function Ci(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ee(t),i=Ee(e);n||(Bn(e,i)&&mt(s,"get",e),mt(s,"get",i));const{has:a}=No(s),l=r?Fl:n?jl:$s;if(a.call(s,e))return l(t.get(e));if(a.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function ki(t,e=!1){const n=this.__v_raw,r=Ee(n),s=Ee(t);return e||(Bn(t,s)&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Oi(t,e=!1){return t=t.__v_raw,!e&&mt(Ee(t),"iterate",fr),Reflect.get(t,"size",t)}function Cu(t){t=Ee(t);const e=Ee(this);return No(e).has.call(e,t)||(e.add(t),cn(e,"add",t,t)),this}function ku(t,e){e=Ee(e);const n=Ee(this),{has:r,get:s}=No(n);let i=r.call(n,t);i||(t=Ee(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?Bn(e,a)&&cn(n,"set",t,e):cn(n,"add",t,e),this}function Ou(t){const e=Ee(this),{has:n,get:r}=No(e);let s=n.call(e,t);s||(t=Ee(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&cn(e,"delete",t,void 0),i}function Nu(){const t=Ee(this),e=t.size!==0,n=t.clear();return e&&cn(t,"clear",void 0,void 0),n}function Ni(t,e){return function(r,s){const i=this,a=i.__v_raw,l=Ee(a),c=e?Fl:t?jl:$s;return!t&&mt(l,"iterate",fr),a.forEach((h,d)=>r.call(s,c(h),c(d),i))}}function Di(t,e,n){return function(...r){const s=this.__v_raw,i=Ee(s),a=Mr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?Fl:e?jl:$s;return!e&&mt(i,"iterate",c?Xa:fr),{next(){const{value:p,done:_}=h.next();return _?{value:p,done:_}:{value:l?[d(p[0]),d(p[1])]:d(p),done:_}},[Symbol.iterator](){return this}}}}function In(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bm(){const t={get(i){return Ci(this,i)},get size(){return Oi(this)},has:ki,add:Cu,set:ku,delete:Ou,clear:Nu,forEach:Ni(!1,!1)},e={get(i){return Ci(this,i,!1,!0)},get size(){return Oi(this)},has:ki,add:Cu,set:ku,delete:Ou,clear:Nu,forEach:Ni(!1,!0)},n={get(i){return Ci(this,i,!0)},get size(){return Oi(this,!0)},has(i){return ki.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Ni(!0,!1)},r={get(i){return Ci(this,i,!0,!0)},get size(){return Oi(this,!0)},has(i){return ki.call(this,i,!0)},add:In("add"),set:In("set"),delete:In("delete"),clear:In("clear"),forEach:Ni(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Di(i,!1,!1),n[i]=Di(i,!0,!1),e[i]=Di(i,!1,!0),r[i]=Di(i,!0,!0)}),[t,n,e,r]}const[jm,Hm,qm,zm]=Bm();function Ul(t,e){const n=e?t?zm:qm:t?Hm:jm;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const Km={get:Ul(!1,!1)},Wm={get:Ul(!1,!0)},Gm={get:Ul(!0,!1)};const Xf=new WeakMap,Yf=new WeakMap,Zf=new WeakMap,Qm=new WeakMap;function Jm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xm(t){return t.__v_skip||!Object.isExtensible(t)?0:Jm(Em(t))}function ri(t){return Us(t)?t:$l(t,!1,Fm,Km,Xf)}function ed(t){return $l(t,!1,$m,Wm,Yf)}function td(t){return $l(t,!0,Um,Gm,Zf)}function $l(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=Xm(t);if(a===0)return t;const l=new Proxy(t,a===2?r:n);return s.set(t,l),l}function dr(t){return Us(t)?dr(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function so(t){return!!(t&&t.__v_isShallow)}function nd(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Bl(t){return Object.isExtensible(t)&&Vf(t,"__v_skip",!0),t}const $s=t=>De(t)?ri(t):t,jl=t=>De(t)?td(t):t;class rd{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Vl(()=>e(this._value),()=>qi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ee(this);return(!e._cacheable||e.effect.dirty)&&Bn(e._value,e._value=e.effect.run())&&qi(e,4),sd(e),e.effect._dirtyLevel>=2&&qi(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ym(t,e,n=!1){let r,s;const i=ce(t);return i?(r=t,s=Nt):(r=t.get,s=t.set),new rd(r,s,i||!s,n)}function sd(t){var e;Mn&&hr&&(t=Ee(t),zf(hr,(e=t.dep)!=null?e:t.dep=Wf(()=>t.dep=void 0,t instanceof rd?t:void 0)))}function qi(t,e=4,n,r){t=Ee(t);const s=t.dep;s&&Kf(s,e)}function ze(t){return!!(t&&t.__v_isRef===!0)}function un(t){return id(t,!1)}function Zm(t){return id(t,!0)}function id(t,e){return ze(t)?t:new e_(t,e)}class e_{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ee(e),this._value=n?e:$s(e)}get value(){return sd(this),this._value}set value(e){const n=this.__v_isShallow||so(e)||Us(e);e=n?e:Ee(e),Bn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:$s(e),qi(this,4))}}function Re(t){return ze(t)?t.value:t}const t_={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ze(s)&&!ze(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function od(t){return dr(t)?t:new Proxy(t,t_)}function n_(t){const e=oe(t)?new Array(t.length):{};for(const n in t)e[n]=s_(t,n);return e}class r_{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Dm(Ee(this._object),this._key)}}function s_(t,e,n){const r=t[e];return ze(r)?r:new r_(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(t,e,n,r){try{return r?t(...r):t()}catch(s){Do(s,e,n)}}function Dt(t,e,n,r){if(ce(t)){const s=Ln(t,e,n,r);return s&&Nf(s)&&s.catch(i=>{Do(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}}function Do(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,a,l)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Wn(),Ln(c,null,10,[t,a,l]),Gn();return}}i_(t,n,s,r)}function i_(t,e,n,r=!0){console.error(t)}let Bs=!1,Ya=!1;const ct=[];let qt=0;const Lr=[];let Pn=null,ar=0;const ad=Promise.resolve();let Hl=null;function ql(t){const e=Hl||ad;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=qt+1,n=ct.length;for(;e<n;){const r=e+n>>>1,s=ct[r],i=js(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function zl(t){(!ct.length||!ct.includes(t,Bs&&t.allowRecurse?qt+1:qt))&&(t.id==null?ct.push(t):ct.splice(o_(t.id),0,t),ld())}function ld(){!Bs&&!Ya&&(Ya=!0,Hl=ad.then(ud))}function a_(t){const e=ct.indexOf(t);e>qt&&ct.splice(e,1)}function l_(t){oe(t)?Lr.push(...t):(!Pn||!Pn.includes(t,t.allowRecurse?ar+1:ar))&&Lr.push(t),ld()}function Du(t,e,n=Bs?qt+1:0){for(;n<ct.length;n++){const r=ct[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ct.splice(n,1),n--,r()}}}function cd(t){if(Lr.length){const e=[...new Set(Lr)].sort((n,r)=>js(n)-js(r));if(Lr.length=0,Pn){Pn.push(...e);return}for(Pn=e,ar=0;ar<Pn.length;ar++){const n=Pn[ar];n.active!==!1&&n()}Pn=null,ar=0}}const js=t=>t.id==null?1/0:t.id,c_=(t,e)=>{const n=js(t)-js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ud(t){Ya=!1,Bs=!0,ct.sort(c_);try{for(qt=0;qt<ct.length;qt++){const e=ct[qt];e&&e.active!==!1&&Ln(e,null,14)}}finally{qt=0,ct.length=0,cd(),Bs=!1,Hl=null,(ct.length||Lr.length)&&ud()}}function u_(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in r){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:_}=r[d]||Oe;_&&(s=n.map(A=>qe(A)?A.trim():A)),p&&(s=n.map(Wa))}let l,c=r[l=Aa(e)]||r[l=Aa(Qt(e))];!c&&i&&(c=r[l=Aa(es(e))]),c&&Dt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Dt(h,t,6,s)}}function hd(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ce(t)){const c=h=>{const d=hd(h,e,!0);d&&(l=!0,He(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(De(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):He(a,i),De(t)&&r.set(t,a),a)}function xo(t,e){return!t||!So(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,es(e))||ve(t,e))}let pt=null,Vo=null;function io(t){const e=pt;return pt=t,Vo=t&&t.type.__scopeId||null,e}function Tr(t){Vo=t}function Ar(){Vo=null}function Hr(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ku(-1);const i=io(e);let a;try{a=t(...s)}finally{io(i),r._d&&Ku(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ra(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:_,setupState:A,ctx:k,inheritAttrs:x}=t,V=io(t);let K,H;try{if(n.shapeFlag&4){const ee=s||r,ie=ee;K=Ht(h.call(ie,ee,d,p,A,_,k)),H=l}else{const ee=e;K=Ht(ee.length>1?ee(p,{attrs:l,slots:a,emit:c}):ee(p,null)),H=e.props?l:h_(l)}}catch(ee){ks.length=0,Do(ee,t,1),K=be(Tt)}let $=K;if(H&&x!==!1){const ee=Object.keys(H),{shapeFlag:ie}=$;ee.length&&ie&7&&(i&&ee.some(Ol)&&(H=f_(H,i)),$=jn($,H,!1,!0))}return n.dirs&&($=jn($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),K=$,io(V),K}const h_=t=>{let e;for(const n in t)(n==="class"||n==="style"||So(n))&&((e||(e={}))[n]=t[n]);return e},f_=(t,e)=>{const n={};for(const r in t)(!Ol(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function d_(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?xu(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const _=d[p];if(a[_]!==r[_]&&!xo(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?xu(r,a,h):!0:!!a;return!1}function xu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xo(n,i))return!0}return!1}function p_({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const g_="components";function n1(t,e){return __(g_,t,!0,e)||t}const m_=Symbol.for("v-ndc");function __(t,e,n=!0,r=!1){const s=pt||Ge;if(s){const i=s.type;{const l=dy(i,!1);if(l&&(l===e||l===Qt(e)||l===ko(Qt(e))))return i}const a=Vu(s[t]||i[t],e)||Vu(s.appContext[t],e);return!a&&r?i:a}}function Vu(t,e){return t&&(t[e]||t[Qt(e)]||t[ko(Qt(e))])}const y_=t=>t.__isSuspense;function v_(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):l_(t)}function Mo(t,e,n=Ge,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Wn();const l=si(n),c=Dt(e,n,t,a);return l(),Gn(),c});return r?s.unshift(i):s.push(i),i}}const pn=t=>(e,n=Ge)=>{(!jo||t==="sp")&&Mo(t,(...r)=>e(...r),n)},E_=pn("bm"),Lo=pn("m"),w_=pn("bu"),I_=pn("u"),fd=pn("bum"),Fo=pn("um"),T_=pn("sp"),A_=pn("rtg"),b_=pn("rtc");function R_(t,e=Ge){Mo("ec",t,e)}function r1(t,e){if(pt===null)return t;const n=Ho(pt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Oe]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&Nn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Wn(),Dt(c,n,8,[t.el,l,t,e]),Gn())}}/*! #__NO_SIDE_EFFECTS__ */function Rt(t,e){return ce(t)?He({name:t.name},e,{setup:t}):t}const zi=t=>!!t.type.__asyncLoader,Za=t=>t?Vd(t)?Ho(t):Za(t.parent):null,Ps=He(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Za(t.parent),$root:t=>Za(t.root),$emit:t=>t.emit,$options:t=>Kl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,zl(t.update)}),$nextTick:t=>t.n||(t.n=ql.bind(t.proxy)),$watch:t=>W_.bind(t)}),Sa=(t,e)=>t!==Oe&&!t.__isScriptSetup&&ve(t,e),S_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const A=a[e];if(A!==void 0)switch(A){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Sa(r,e))return a[e]=1,r[e];if(s!==Oe&&ve(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&ve(h,e))return a[e]=3,i[e];if(n!==Oe&&ve(n,e))return a[e]=4,n[e];el&&(a[e]=0)}}const d=Ps[e];let p,_;if(d)return e==="$attrs"&&mt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&ve(n,e))return a[e]=4,n[e];if(_=c.config.globalProperties,ve(_,e))return _[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Sa(s,e)?(s[e]=n,!0):r!==Oe&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Oe&&ve(t,a)||Sa(e,a)||(l=i[0])&&ve(l,a)||ve(r,a)||ve(Ps,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let el=!0;function P_(t){const e=Kl(t),n=t.proxy,r=t.ctx;el=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:_,beforeUpdate:A,updated:k,activated:x,deactivated:V,beforeDestroy:K,beforeUnmount:H,destroyed:$,unmounted:ee,render:ie,renderTracked:G,renderTriggered:R,errorCaptured:y,serverPrefetch:m,expose:w,inheritAttrs:b,components:T,directives:E,filters:Ie}=e;if(h&&C_(h,r,null),a)for(const ge in a){const fe=a[ge];ce(fe)&&(r[ge]=fe.bind(n))}if(s){const ge=s.call(n,n);De(ge)&&(t.data=ri(ge))}if(el=!0,i)for(const ge in i){const fe=i[ge],vt=ce(fe)?fe.bind(n,n):ce(fe.get)?fe.get.bind(n,n):Nt,xt=!ce(fe)&&ce(fe.set)?fe.set.bind(n):Nt,St=Ot({get:vt,set:xt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>St.value,set:Ve=>St.value=Ve})}if(l)for(const ge in l)dd(l[ge],r,n,ge);if(c){const ge=ce(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(fe=>{Ki(fe,ge[fe])})}d&&Lu(d,t,"c");function he(ge,fe){oe(fe)?fe.forEach(vt=>ge(vt.bind(n))):fe&&ge(fe.bind(n))}if(he(E_,p),he(Lo,_),he(w_,A),he(I_,k),he(G_,x),he(Q_,V),he(R_,y),he(b_,G),he(A_,R),he(fd,H),he(Fo,ee),he(T_,m),oe(w))if(w.length){const ge=t.exposed||(t.exposed={});w.forEach(fe=>{Object.defineProperty(ge,fe,{get:()=>n[fe],set:vt=>n[fe]=vt})})}else t.exposed||(t.exposed={});ie&&t.render===Nt&&(t.render=ie),b!=null&&(t.inheritAttrs=b),T&&(t.components=T),E&&(t.directives=E)}function C_(t,e,n=Nt){oe(t)&&(t=tl(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=zt(s.from||r,s.default,!0):i=zt(s.from||r):i=zt(s),ze(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Lu(t,e,n){Dt(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dd(t,e,n,r){const s=r.includes(".")?Rd(n,r):()=>n[r];if(qe(t)){const i=e[t];ce(i)&&Cs(s,i)}else if(ce(t))Cs(s,t.bind(n));else if(De(t))if(oe(t))t.forEach(i=>dd(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Cs(s,i,t)}}function Kl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>oo(c,h,a,!0)),oo(c,e,a)),De(e)&&i.set(e,c),c}function oo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&oo(t,i,n,!0),s&&s.forEach(a=>oo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=k_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const k_={data:Fu,props:Uu,emits:Uu,methods:As,computed:As,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:As,directives:As,watch:N_,provide:Fu,inject:O_};function Fu(t,e){return e?t?function(){return He(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function O_(t,e){return As(tl(t),tl(e))}function tl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function dt(t,e){return t?[...new Set([].concat(t,e))]:e}function As(t,e){return t?He(Object.create(null),t,e):e}function Uu(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:He(Object.create(null),Mu(t),Mu(e??{})):e}function N_(t,e){if(!t)return e;if(!e)return t;const n=He(Object.create(null),t);for(const r in e)n[r]=dt(t[r],e[r]);return n}function pd(){return{app:null,config:{isNativeTag:ym,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let D_=0;function x_(t,e){return function(r,s=null){ce(r)||(r=He({},r)),s!=null&&!De(s)&&(s=null);const i=pd(),a=new WeakSet;let l=!1;const c=i.app={_uid:D_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:gy,get config(){return i.config},set config(h){},use(h,...d){return a.has(h)||(h&&ce(h.install)?(a.add(h),h.install(c,...d)):ce(h)&&(a.add(h),h(c,...d))),c},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),c},component(h,d){return d?(i.components[h]=d,c):i.components[h]},directive(h,d){return d?(i.directives[h]=d,c):i.directives[h]},mount(h,d,p){if(!l){const _=be(r,s);return _.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&e?e(_,h):t(_,h,p),l=!0,c._container=h,h.__vue_app__=c,Ho(_.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(h,d){return i.provides[h]=d,c},runWithContext(h){const d=Fr;Fr=c;try{return h()}finally{Fr=d}}};return c}}let Fr=null;function Ki(t,e){if(Ge){let n=Ge.provides;const r=Ge.parent&&Ge.parent.provides;r===n&&(n=Ge.provides=Object.create(r)),n[t]=e}}function zt(t,e,n=!1){const r=Ge||pt;if(r||Fr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Fr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}function V_(){return!!(Ge||pt||Fr)}const gd={},md=()=>Object.create(gd),_d=t=>Object.getPrototypeOf(t)===gd;function M_(t,e,n,r=!1){const s={},i=md();t.propsDefaults=Object.create(null),yd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ed(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function L_(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ee(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let _=d[p];if(xo(t.emitsOptions,_))continue;const A=e[_];if(c)if(ve(i,_))A!==i[_]&&(i[_]=A,h=!0);else{const k=Qt(_);s[k]=nl(c,l,k,A,t,!1)}else A!==i[_]&&(i[_]=A,h=!0)}}}else{yd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!ve(e,p)&&((d=es(p))===p||!ve(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=nl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ve(e,p))&&(delete i[p],h=!0)}h&&cn(t.attrs,"set","")}function yd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ss(c))continue;const h=e[c];let d;s&&ve(s,d=Qt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:xo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ee(n),h=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=nl(s,c,p,h[p],t,!ve(h,p))}}return a}function nl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=ve(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ce(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=si(s);r=h[n]=c.call(null,e),d()}}else r=c}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===es(n))&&(r=!0))}return r}function vd(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ce(t)){const d=p=>{c=!0;const[_,A]=vd(p,e,!0);He(a,_),A&&l.push(...A)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return De(t)&&r.set(t,Vr),Vr;if(oe(i))for(let d=0;d<i.length;d++){const p=Qt(i[d]);$u(p)&&(a[p]=Oe)}else if(i)for(const d in i){const p=Qt(d);if($u(p)){const _=i[d],A=a[p]=oe(_)||ce(_)?{type:_}:He({},_);if(A){const k=Hu(Boolean,A.type),x=Hu(String,A.type);A[0]=k>-1,A[1]=x<0||k<x,(k>-1||ve(A,"default"))&&l.push(p)}}}const h=[a,l];return De(t)&&r.set(t,h),h}function $u(t){return t[0]!=="$"&&!Ss(t)}function Bu(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function ju(t,e){return Bu(t)===Bu(e)}function Hu(t,e){return oe(e)?e.findIndex(n=>ju(n,t)):ce(e)&&ju(e,t)?0:-1}const Ed=t=>t[0]==="_"||t==="$stable",Wl=t=>oe(t)?t.map(Ht):[Ht(t)],F_=(t,e,n)=>{if(e._n)return e;const r=Hr((...s)=>Wl(e(...s)),n);return r._c=!1,r},wd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ed(s))continue;const i=t[s];if(ce(i))e[s]=F_(s,i,r);else if(i!=null){const a=Wl(i);e[s]=()=>a}}},Id=(t,e)=>{const n=Wl(e);t.slots.default=()=>n},U_=(t,e)=>{const n=t.slots=md();if(t.vnode.shapeFlag&32){const r=e._;r?(He(n,e),Vf(n,"_",r,!0)):wd(e,n)}else e&&Id(t,e)},$_=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:(He(s,e),!n&&l===1&&delete s._):(i=!e.$stable,wd(e,s)),a=e}else e&&(Id(t,e),a={default:1});if(i)for(const l in s)!Ed(l)&&a[l]==null&&delete s[l]};function rl(t,e,n,r,s=!1){if(oe(t)){t.forEach((_,A)=>rl(_,e&&(oe(e)?e[A]:e),n,r,s));return}if(zi(r)&&!s)return;const i=r.shapeFlag&4?Ho(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState;if(h!=null&&h!==c&&(qe(h)?(d[h]=null,ve(p,h)&&(p[h]=null)):ze(h)&&(h.value=null)),ce(c))Ln(c,l,12,[a,d]);else{const _=qe(c),A=ze(c);if(_||A){const k=()=>{if(t.f){const x=_?ve(p,c)?p[c]:d[c]:c.value;s?oe(x)&&Nl(x,i):oe(x)?x.includes(i)||x.push(i):_?(d[c]=[i],ve(p,c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else _?(d[c]=a,ve(p,c)&&(p[c]=a)):A&&(c.value=a,t.k&&(d[t.k]=a))};a?(k.id=-1,gt(k,n)):k()}}}const gt=v_;function B_(t){return j_(t)}function j_(t,e){const n=Mf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:_,setScopeId:A=Nt,insertStaticContent:k}=t,x=(v,I,P,D=null,O=null,B=null,z=void 0,F=null,j=!!I.dynamicChildren)=>{if(v===I)return;v&&!lr(v,I)&&(D=N(v),Ve(v,O,B,!0),v=null),I.patchFlag===-2&&(j=!1,I.dynamicChildren=null);const{type:M,ref:Q,shapeFlag:ne}=I;switch(M){case $o:V(v,I,P,D);break;case Tt:K(v,I,P,D);break;case Wi:v==null&&H(I,P,D,z);break;case jt:T(v,I,P,D,O,B,z,F,j);break;default:ne&1?ie(v,I,P,D,O,B,z,F,j):ne&6?E(v,I,P,D,O,B,z,F,j):(ne&64||ne&128)&&M.process(v,I,P,D,O,B,z,F,j,X)}Q!=null&&O&&rl(Q,v&&v.ref,B,I||v,!I)},V=(v,I,P,D)=>{if(v==null)r(I.el=l(I.children),P,D);else{const O=I.el=v.el;I.children!==v.children&&h(O,I.children)}},K=(v,I,P,D)=>{v==null?r(I.el=c(I.children||""),P,D):I.el=v.el},H=(v,I,P,D)=>{[v.el,v.anchor]=k(v.children,I,P,D,v.el,v.anchor)},$=({el:v,anchor:I},P,D)=>{let O;for(;v&&v!==I;)O=_(v),r(v,P,D),v=O;r(I,P,D)},ee=({el:v,anchor:I})=>{let P;for(;v&&v!==I;)P=_(v),s(v),v=P;s(I)},ie=(v,I,P,D,O,B,z,F,j)=>{I.type==="svg"?z="svg":I.type==="math"&&(z="mathml"),v==null?G(I,P,D,O,B,z,F,j):m(v,I,O,B,z,F,j)},G=(v,I,P,D,O,B,z,F)=>{let j,M;const{props:Q,shapeFlag:ne,transition:te,dirs:Z}=v;if(j=v.el=a(v.type,B,Q&&Q.is,Q),ne&8?d(j,v.children):ne&16&&y(v.children,j,null,D,O,Pa(v,B),z,F),Z&&nr(v,null,D,"created"),R(j,v,v.scopeId,z,D),Q){for(const Te in Q)Te!=="value"&&!Ss(Te)&&i(j,Te,null,Q[Te],B,v.children,D,O,Ke);"value"in Q&&i(j,"value",null,Q.value,B),(M=Q.onVnodeBeforeMount)&&Bt(M,D,v)}Z&&nr(v,null,D,"beforeMount");const se=H_(O,te);se&&te.beforeEnter(j),r(j,I,P),((M=Q&&Q.onVnodeMounted)||se||Z)&&gt(()=>{M&&Bt(M,D,v),se&&te.enter(j),Z&&nr(v,null,D,"mounted")},O)},R=(v,I,P,D,O)=>{if(P&&A(v,P),D)for(let B=0;B<D.length;B++)A(v,D[B]);if(O){let B=O.subTree;if(I===B){const z=O.vnode;R(v,z,z.scopeId,z.slotScopeIds,O.parent)}}},y=(v,I,P,D,O,B,z,F,j=0)=>{for(let M=j;M<v.length;M++){const Q=v[M]=F?kn(v[M]):Ht(v[M]);x(null,Q,I,P,D,O,B,z,F)}},m=(v,I,P,D,O,B,z)=>{const F=I.el=v.el;let{patchFlag:j,dynamicChildren:M,dirs:Q}=I;j|=v.patchFlag&16;const ne=v.props||Oe,te=I.props||Oe;let Z;if(P&&rr(P,!1),(Z=te.onVnodeBeforeUpdate)&&Bt(Z,P,I,v),Q&&nr(I,v,P,"beforeUpdate"),P&&rr(P,!0),M?w(v.dynamicChildren,M,F,P,D,Pa(I,O),B):z||fe(v,I,F,null,P,D,Pa(I,O),B,!1),j>0){if(j&16)b(F,I,ne,te,P,D,O);else if(j&2&&ne.class!==te.class&&i(F,"class",null,te.class,O),j&4&&i(F,"style",ne.style,te.style,O),j&8){const se=I.dynamicProps;for(let Te=0;Te<se.length;Te++){const ye=se[Te],Ue=ne[ye],Et=te[ye];(Et!==Ue||ye==="value")&&i(F,ye,Ue,Et,O,v.children,P,D,Ke)}}j&1&&v.children!==I.children&&d(F,I.children)}else!z&&M==null&&b(F,I,ne,te,P,D,O);((Z=te.onVnodeUpdated)||Q)&&gt(()=>{Z&&Bt(Z,P,I,v),Q&&nr(I,v,P,"updated")},D)},w=(v,I,P,D,O,B,z)=>{for(let F=0;F<I.length;F++){const j=v[F],M=I[F],Q=j.el&&(j.type===jt||!lr(j,M)||j.shapeFlag&70)?p(j.el):P;x(j,M,Q,null,D,O,B,z,!0)}},b=(v,I,P,D,O,B,z)=>{if(P!==D){if(P!==Oe)for(const F in P)!Ss(F)&&!(F in D)&&i(v,F,P[F],null,z,I.children,O,B,Ke);for(const F in D){if(Ss(F))continue;const j=D[F],M=P[F];j!==M&&F!=="value"&&i(v,F,M,j,z,I.children,O,B,Ke)}"value"in D&&i(v,"value",P.value,D.value,z)}},T=(v,I,P,D,O,B,z,F,j)=>{const M=I.el=v?v.el:l(""),Q=I.anchor=v?v.anchor:l("");let{patchFlag:ne,dynamicChildren:te,slotScopeIds:Z}=I;Z&&(F=F?F.concat(Z):Z),v==null?(r(M,P,D),r(Q,P,D),y(I.children||[],P,Q,O,B,z,F,j)):ne>0&&ne&64&&te&&v.dynamicChildren?(w(v.dynamicChildren,te,P,O,B,z,F),(I.key!=null||O&&I===O.subTree)&&Td(v,I,!0)):fe(v,I,P,Q,O,B,z,F,j)},E=(v,I,P,D,O,B,z,F,j)=>{I.slotScopeIds=F,v==null?I.shapeFlag&512?O.ctx.activate(I,P,D,z,j):Ie(I,P,D,O,B,z,j):xe(v,I,j)},Ie=(v,I,P,D,O,B,z)=>{const F=v.component=ay(v,D,O);if(Uo(v)&&(F.ctx.renderer=X),cy(F),F.asyncDep){if(O&&O.registerDep(F,he,z),!v.el){const j=F.subTree=be(Tt);K(null,j,I,P)}}else he(F,v,I,P,O,B,z)},xe=(v,I,P)=>{const D=I.component=v.component;if(d_(v,I,P))if(D.asyncDep&&!D.asyncResolved){ge(D,I,P);return}else D.next=I,a_(D.update),D.effect.dirty=!0,D.update();else I.el=v.el,D.vnode=I},he=(v,I,P,D,O,B,z)=>{const F=()=>{if(v.isMounted){let{next:Q,bu:ne,u:te,parent:Z,vnode:se}=v;{const Pt=Ad(v);if(Pt){Q&&(Q.el=se.el,ge(v,Q,z)),Pt.asyncDep.then(()=>{v.isUnmounted||F()});return}}let Te=Q,ye;rr(v,!1),Q?(Q.el=se.el,ge(v,Q,z)):Q=se,ne&&Hi(ne),(ye=Q.props&&Q.props.onVnodeBeforeUpdate)&&Bt(ye,Z,Q,se),rr(v,!0);const Ue=Ra(v),Et=v.subTree;v.subTree=Ue,x(Et,Ue,p(Et.el),N(Et),v,O,B),Q.el=Ue.el,Te===null&&p_(v,Ue.el),te&&gt(te,O),(ye=Q.props&&Q.props.onVnodeUpdated)&&gt(()=>Bt(ye,Z,Q,se),O)}else{let Q;const{el:ne,props:te}=I,{bm:Z,m:se,parent:Te}=v,ye=zi(I);if(rr(v,!1),Z&&Hi(Z),!ye&&(Q=te&&te.onVnodeBeforeMount)&&Bt(Q,Te,I),rr(v,!0),ne&&Se){const Ue=()=>{v.subTree=Ra(v),Se(ne,v.subTree,v,O,null)};ye?I.type.__asyncLoader().then(()=>!v.isUnmounted&&Ue()):Ue()}else{const Ue=v.subTree=Ra(v);x(null,Ue,P,D,v,O,B),I.el=Ue.el}if(se&&gt(se,O),!ye&&(Q=te&&te.onVnodeMounted)){const Ue=I;gt(()=>Bt(Q,Te,Ue),O)}(I.shapeFlag&256||Te&&zi(Te.vnode)&&Te.vnode.shapeFlag&256)&&v.a&&gt(v.a,O),v.isMounted=!0,I=P=D=null}},j=v.effect=new Vl(F,Nt,()=>zl(M),v.scope),M=v.update=()=>{j.dirty&&j.run()};M.id=v.uid,rr(v,!0),M()},ge=(v,I,P)=>{I.component=v;const D=v.vnode.props;v.vnode=I,v.next=null,L_(v,I.props,D,P),$_(v,I.children,P),Wn(),Du(v),Gn()},fe=(v,I,P,D,O,B,z,F,j=!1)=>{const M=v&&v.children,Q=v?v.shapeFlag:0,ne=I.children,{patchFlag:te,shapeFlag:Z}=I;if(te>0){if(te&128){xt(M,ne,P,D,O,B,z,F,j);return}else if(te&256){vt(M,ne,P,D,O,B,z,F,j);return}}Z&8?(Q&16&&Ke(M,O,B),ne!==M&&d(P,ne)):Q&16?Z&16?xt(M,ne,P,D,O,B,z,F,j):Ke(M,O,B,!0):(Q&8&&d(P,""),Z&16&&y(ne,P,D,O,B,z,F,j))},vt=(v,I,P,D,O,B,z,F,j)=>{v=v||Vr,I=I||Vr;const M=v.length,Q=I.length,ne=Math.min(M,Q);let te;for(te=0;te<ne;te++){const Z=I[te]=j?kn(I[te]):Ht(I[te]);x(v[te],Z,P,null,O,B,z,F,j)}M>Q?Ke(v,O,B,!0,!1,ne):y(I,P,D,O,B,z,F,j,ne)},xt=(v,I,P,D,O,B,z,F,j)=>{let M=0;const Q=I.length;let ne=v.length-1,te=Q-1;for(;M<=ne&&M<=te;){const Z=v[M],se=I[M]=j?kn(I[M]):Ht(I[M]);if(lr(Z,se))x(Z,se,P,null,O,B,z,F,j);else break;M++}for(;M<=ne&&M<=te;){const Z=v[ne],se=I[te]=j?kn(I[te]):Ht(I[te]);if(lr(Z,se))x(Z,se,P,null,O,B,z,F,j);else break;ne--,te--}if(M>ne){if(M<=te){const Z=te+1,se=Z<Q?I[Z].el:D;for(;M<=te;)x(null,I[M]=j?kn(I[M]):Ht(I[M]),P,se,O,B,z,F,j),M++}}else if(M>te)for(;M<=ne;)Ve(v[M],O,B,!0),M++;else{const Z=M,se=M,Te=new Map;for(M=se;M<=te;M++){const ht=I[M]=j?kn(I[M]):Ht(I[M]);ht.key!=null&&Te.set(ht.key,M)}let ye,Ue=0;const Et=te-se+1;let Pt=!1,os=0;const yn=new Array(Et);for(M=0;M<Et;M++)yn[M]=0;for(M=Z;M<=ne;M++){const ht=v[M];if(Ue>=Et){Ve(ht,O,B,!0);continue}let Ct;if(ht.key!=null)Ct=Te.get(ht.key);else for(ye=se;ye<=te;ye++)if(yn[ye-se]===0&&lr(ht,I[ye])){Ct=ye;break}Ct===void 0?Ve(ht,O,B,!0):(yn[Ct-se]=M+1,Ct>=os?os=Ct:Pt=!0,x(ht,I[Ct],P,null,O,B,z,F,j),Ue++)}const br=Pt?q_(yn):Vr;for(ye=br.length-1,M=Et-1;M>=0;M--){const ht=se+M,Ct=I[ht],Rr=ht+1<Q?I[ht+1].el:D;yn[M]===0?x(null,Ct,P,Rr,O,B,z,F,j):Pt&&(ye<0||M!==br[ye]?St(Ct,P,Rr,2):ye--)}}},St=(v,I,P,D,O=null)=>{const{el:B,type:z,transition:F,children:j,shapeFlag:M}=v;if(M&6){St(v.component.subTree,I,P,D);return}if(M&128){v.suspense.move(I,P,D);return}if(M&64){z.move(v,I,P,X);return}if(z===jt){r(B,I,P);for(let ne=0;ne<j.length;ne++)St(j[ne],I,P,D);r(v.anchor,I,P);return}if(z===Wi){$(v,I,P);return}if(D!==2&&M&1&&F)if(D===0)F.beforeEnter(B),r(B,I,P),gt(()=>F.enter(B),O);else{const{leave:ne,delayLeave:te,afterLeave:Z}=F,se=()=>r(B,I,P),Te=()=>{ne(B,()=>{se(),Z&&Z()})};te?te(B,se,Te):Te()}else r(B,I,P)},Ve=(v,I,P,D=!1,O=!1)=>{const{type:B,props:z,ref:F,children:j,dynamicChildren:M,shapeFlag:Q,patchFlag:ne,dirs:te,memoIndex:Z}=v;if(ne===-2&&(O=!1),F!=null&&rl(F,null,P,v,!0),Z!=null&&(I.renderCache[Z]=void 0),Q&256){I.ctx.deactivate(v);return}const se=Q&1&&te,Te=!zi(v);let ye;if(Te&&(ye=z&&z.onVnodeBeforeUnmount)&&Bt(ye,I,v),Q&6)$t(v.component,P,D);else{if(Q&128){v.suspense.unmount(P,D);return}se&&nr(v,null,I,"beforeUnmount"),Q&64?v.type.remove(v,I,P,X,D):M&&(B!==jt||ne>0&&ne&64)?Ke(M,I,P,!1,!0):(B===jt&&ne&384||!O&&Q&16)&&Ke(j,I,P),D&&Me(v)}(Te&&(ye=z&&z.onVnodeUnmounted)||se)&&gt(()=>{ye&&Bt(ye,I,v),se&&nr(v,null,I,"unmounted")},P)},Me=v=>{const{type:I,el:P,anchor:D,transition:O}=v;if(I===jt){_n(P,D);return}if(I===Wi){ee(v);return}const B=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:z,delayLeave:F}=O,j=()=>z(P,B);F?F(v.el,B,j):j()}else B()},_n=(v,I)=>{let P;for(;v!==I;)P=_(v),s(v),v=P;s(I)},$t=(v,I,P)=>{const{bum:D,scope:O,update:B,subTree:z,um:F,m:j,a:M}=v;qu(j),qu(M),D&&Hi(D),O.stop(),B&&(B.active=!1,Ve(z,v,I,P)),F&&gt(F,I),gt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ke=(v,I,P,D=!1,O=!1,B=0)=>{for(let z=B;z<v.length;z++)Ve(v[z],I,P,D,O)},N=v=>v.shapeFlag&6?N(v.component.subTree):v.shapeFlag&128?v.suspense.next():_(v.anchor||v.el);let J=!1;const W=(v,I,P)=>{v==null?I._vnode&&Ve(I._vnode,null,null,!0):x(I._vnode||null,v,I,null,null,null,P),J||(J=!0,Du(),cd(),J=!1),I._vnode=v},X={p:x,um:Ve,m:St,r:Me,mt:Ie,mc:y,pc:fe,pbc:w,n:N,o:t};let me,Se;return{render:W,hydrate:me,createApp:x_(W,me)}}function Pa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function H_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Td(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=kn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Td(a,l)),l.type===$o&&(l.el=a.el)}}function q_(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Ad(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ad(e)}function qu(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const z_=Symbol.for("v-scx"),K_=()=>zt(z_),xi={};function Cs(t,e,n){return bd(t,e,n)}function bd(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:l}=Oe){if(e&&i){const G=e;e=(...R)=>{G(...R),ie()}}const c=Ge,h=G=>r===!0?G:Nn(G,r===!1?1:void 0);let d,p=!1,_=!1;if(ze(t)?(d=()=>t.value,p=so(t)):dr(t)?(d=()=>h(t),p=!0):oe(t)?(_=!0,p=t.some(G=>dr(G)||so(G)),d=()=>t.map(G=>{if(ze(G))return G.value;if(dr(G))return h(G);if(ce(G))return Ln(G,c,2)})):ce(t)?e?d=()=>Ln(t,c,2):d=()=>(A&&A(),Dt(t,c,3,[k])):d=Nt,e&&r){const G=d;d=()=>Nn(G())}let A,k=G=>{A=$.onStop=()=>{Ln(G,c,4),A=$.onStop=void 0}},x;if(jo)if(k=Nt,e?n&&Dt(e,c,3,[d(),_?[]:void 0,k]):d(),s==="sync"){const G=K_();x=G.__watcherHandles||(G.__watcherHandles=[])}else return Nt;let V=_?new Array(t.length).fill(xi):xi;const K=()=>{if(!(!$.active||!$.dirty))if(e){const G=$.run();(r||p||(_?G.some((R,y)=>Bn(R,V[y])):Bn(G,V)))&&(A&&A(),Dt(e,c,3,[G,V===xi?void 0:_&&V[0]===xi?[]:V,k]),V=G)}else $.run()};K.allowRecurse=!!e;let H;s==="sync"?H=K:s==="post"?H=()=>gt(K,c&&c.suspense):(K.pre=!0,c&&(K.id=c.uid),H=()=>zl(K));const $=new Vl(d,Nt,H),ee=jf(),ie=()=>{$.stop(),ee&&Nl(ee.effects,$)};return e?n?K():V=$.run():s==="post"?gt($.run.bind($),c&&c.suspense):$.run(),x&&x.push(ie),ie}function W_(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Rd(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=si(this),l=bd(s,i.bind(r),n);return a(),l}function Rd(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Nn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ze(t))Nn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Nn(t[r],e,n);else if(Of(t)||Mr(t))t.forEach(r=>{Nn(r,e,n)});else if(xf(t)){for(const r in t)Nn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Nn(t[r],e,n)}return t}const Uo=t=>t.type.__isKeepAlive;function G_(t,e){Sd(t,"a",e)}function Q_(t,e){Sd(t,"da",e)}function Sd(t,e,n=Ge){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Mo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Uo(s.parent.vnode)&&J_(r,e,n,s),s=s.parent}}function J_(t,e,n,r){const s=Mo(e,t,r,!0);Fo(()=>{Nl(r[e],s)},n)}const Cn=Symbol("_leaveCb"),Vi=Symbol("_enterCb");function X_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Lo(()=>{t.isMounted=!0}),fd(()=>{t.isUnmounting=!0}),t}const kt=[Function,Array],Pd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kt,onEnter:kt,onAfterEnter:kt,onEnterCancelled:kt,onBeforeLeave:kt,onLeave:kt,onAfterLeave:kt,onLeaveCancelled:kt,onBeforeAppear:kt,onAppear:kt,onAfterAppear:kt,onAppearCancelled:kt},Cd=t=>{const e=t.subTree;return e.component?Cd(e.component):e},Y_={name:"BaseTransition",props:Pd,setup(t,{slots:e}){const n=ly(),r=X_();return()=>{const s=e.default&&Od(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const _ of s)if(_.type!==Tt){i=_;break}}const a=Ee(t),{mode:l}=a;if(r.isLeaving)return Ca(i);const c=zu(i);if(!c)return Ca(i);let h=sl(c,a,r,n,_=>h=_);ao(c,h);const d=n.subTree,p=d&&zu(d);if(p&&p.type!==Tt&&!lr(c,p)&&Cd(n).type!==Tt){const _=sl(p,a,r,n);if(ao(p,_),l==="out-in"&&c.type!==Tt)return r.isLeaving=!0,_.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ca(i);l==="in-out"&&c.type!==Tt&&(_.delayLeave=(A,k,x)=>{const V=kd(r,p);V[String(p.key)]=p,A[Cn]=()=>{k(),A[Cn]=void 0,delete h.delayedLeave},h.delayedLeave=x})}return i}}},Z_=Y_;function kd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function sl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:_,onLeave:A,onAfterLeave:k,onLeaveCancelled:x,onBeforeAppear:V,onAppear:K,onAfterAppear:H,onAppearCancelled:$}=e,ee=String(t.key),ie=kd(n,t),G=(m,w)=>{m&&Dt(m,r,9,w)},R=(m,w)=>{const b=w[1];G(m,w),oe(m)?m.every(T=>T.length<=1)&&b():m.length<=1&&b()},y={mode:a,persisted:l,beforeEnter(m){let w=c;if(!n.isMounted)if(i)w=V||c;else return;m[Cn]&&m[Cn](!0);const b=ie[ee];b&&lr(t,b)&&b.el[Cn]&&b.el[Cn](),G(w,[m])},enter(m){let w=h,b=d,T=p;if(!n.isMounted)if(i)w=K||h,b=H||d,T=$||p;else return;let E=!1;const Ie=m[Vi]=xe=>{E||(E=!0,xe?G(T,[m]):G(b,[m]),y.delayedLeave&&y.delayedLeave(),m[Vi]=void 0)};w?R(w,[m,Ie]):Ie()},leave(m,w){const b=String(t.key);if(m[Vi]&&m[Vi](!0),n.isUnmounting)return w();G(_,[m]);let T=!1;const E=m[Cn]=Ie=>{T||(T=!0,w(),Ie?G(x,[m]):G(k,[m]),m[Cn]=void 0,ie[b]===t&&delete ie[b])};ie[b]=t,A?R(A,[m,E]):E()},clone(m){const w=sl(m,e,n,r,s);return s&&s(w),w}};return y}function Ca(t){if(Uo(t))return t=jn(t),t.children=null,t}function zu(t){if(!Uo(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ce(n.default))return n.default()}}function ao(t,e){t.shapeFlag&6&&t.component?ao(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Od(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===jt?(a.patchFlag&128&&s++,r=r.concat(Od(a.children,e,l))):(e||a.type!==Tt)&&r.push(l!=null?jn(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const ey=t=>t.__isTeleport,jt=Symbol.for("v-fgt"),$o=Symbol.for("v-txt"),Tt=Symbol.for("v-cmt"),Wi=Symbol.for("v-stc"),ks=[];let Lt=null;function $e(t=!1){ks.push(Lt=t?null:[])}function ty(){ks.pop(),Lt=ks[ks.length-1]||null}let Hs=1;function Ku(t){Hs+=t}function Nd(t){return t.dynamicChildren=Hs>0?Lt||Vr:null,ty(),Hs>0&&Lt&&Lt.push(t),t}function nt(t,e,n,r,s,i){return Nd(Y(t,e,n,r,s,i,!0))}function Bo(t,e,n,r,s){return Nd(be(t,e,n,r,s,!0))}function il(t){return t?t.__v_isVNode===!0:!1}function lr(t,e){return t.type===e.type&&t.key===e.key}const Dd=({key:t})=>t??null,Gi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||ze(t)||ce(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function Y(t,e=null,n=null,r=0,s=null,i=t===jt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dd(e),ref:e&&Gi(e),scopeId:Vo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return l?(Gl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Hs>0&&!a&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const be=ny;function ny(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===m_)&&(t=Tt),il(t)){const l=jn(t,e,!0);return n&&Gl(l,n),Hs>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(py(t)&&(t=t.__vccOpts),e){e=ry(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=Oo(l)),De(c)&&(nd(c)&&!oe(c)&&(c=He({},c)),e.style=xl(c))}const a=qe(t)?1:y_(t)?128:ey(t)?64:De(t)?4:ce(t)?2:0;return Y(t,e,n,r,s,a,i,!0)}function ry(t){return t?nd(t)||_d(t)?He({},t):t:null}function jn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?sy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Dd(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(Gi(e)):[i,Gi(e)]:Gi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==jt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ao(d,c.clone(d)),d}function bs(t=" ",e=0){return be($o,null,t,e)}function xd(t,e){const n=be(Wi,null,t);return n.staticCount=e,n}function hn(t="",e=!1){return e?($e(),Bo(Tt,null,t)):be(Tt,null,t)}function Ht(t){return t==null||typeof t=="boolean"?be(Tt):oe(t)?be(jt,null,t.slice()):typeof t=="object"?kn(t):be($o,null,String(t))}function kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function Gl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Gl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_d(e)?e._ctx=pt:s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[bs(e)]):n=8);t.children=e,t.shapeFlag|=n}function sy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Oo([e.class,r.class]));else if(s==="style")e.style=xl([e.style,r.style]);else if(So(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Bt(t,e,n,r=null){Dt(t,e,7,[n,r])}const iy=pd();let oy=0;function ay(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||iy,i={uid:oy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new $f(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vd(r,s),emitsOptions:hd(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=u_.bind(null,i),t.ce&&t.ce(i),i}let Ge=null;const ly=()=>Ge||pt;let lo,ol;{const t=Mf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};lo=e("__VUE_INSTANCE_SETTERS__",n=>Ge=n),ol=e("__VUE_SSR_SETTERS__",n=>jo=n)}const si=t=>{const e=Ge;return lo(t),t.scope.on(),()=>{t.scope.off(),lo(e)}},Wu=()=>{Ge&&Ge.scope.off(),lo(null)};function Vd(t){return t.vnode.shapeFlag&4}let jo=!1;function cy(t,e=!1){e&&ol(e);const{props:n,children:r}=t.vnode,s=Vd(t);M_(t,n,s,e),U_(t,r);const i=s?uy(t,e):void 0;return e&&ol(!1),i}function uy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,S_);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?fy(t):null,i=si(t);Wn();const a=Ln(r,t,0,[t.props,s]);if(Gn(),i(),Nf(a)){if(a.then(Wu,Wu),e)return a.then(l=>{Gu(t,l,e)}).catch(l=>{Do(l,t,0)});t.asyncDep=a}else Gu(t,a,e)}else Md(t,e)}function Gu(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=od(e)),Md(t,n)}let Qu;function Md(t,e,n){const r=t.type;if(!t.render){if(!e&&Qu&&!r.render){const s=r.template||Kl(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=He(He({isCustomElement:i,delimiters:l},a),c);r.render=Qu(s,h)}}t.render=r.render||Nt}{const s=si(t);Wn();try{P_(t)}finally{Gn(),s()}}}const hy={get(t,e){return mt(t,"get",""),t[e]}};function fy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,hy),slots:t.slots,emit:t.emit,expose:e}}function Ho(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(od(Bl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ps)return Ps[n](t)},has(e,n){return n in e||n in Ps}})):t.proxy}function dy(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function py(t){return ce(t)&&"__vccOpts"in t}const Ot=(t,e)=>Ym(t,e,jo);function Ql(t,e,n){const r=arguments.length;return r===2?De(e)&&!oe(e)?il(e)?be(t,null,[e]):be(t,e):be(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&il(n)&&(n=[n]),be(t,e,n))}const gy="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const my="http://www.w3.org/2000/svg",_y="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,Ju=nn&&nn.createElement("template"),yy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?nn.createElementNS(my,t):e==="mathml"?nn.createElementNS(_y,t):n?nn.createElement(t,{is:n}):nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ju.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=Ju.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Tn="transition",Es="animation",qs=Symbol("_vtc"),ii=(t,{slots:e})=>Ql(Z_,vy(t),e);ii.displayName="Transition";const Ld={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ii.props=He({},Pd,Ld);const sr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xu=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function vy(t){const e={};for(const T in t)T in Ld||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:_=`${n}-leave-active`,leaveToClass:A=`${n}-leave-to`}=t,k=Ey(s),x=k&&k[0],V=k&&k[1],{onBeforeEnter:K,onEnter:H,onEnterCancelled:$,onLeave:ee,onLeaveCancelled:ie,onBeforeAppear:G=K,onAppear:R=H,onAppearCancelled:y=$}=e,m=(T,E,Ie)=>{ir(T,E?d:l),ir(T,E?h:a),Ie&&Ie()},w=(T,E)=>{T._isLeaving=!1,ir(T,p),ir(T,A),ir(T,_),E&&E()},b=T=>(E,Ie)=>{const xe=T?R:H,he=()=>m(E,T,Ie);sr(xe,[E,he]),Yu(()=>{ir(E,T?c:i),An(E,T?d:l),Xu(xe)||Zu(E,r,x,he)})};return He(e,{onBeforeEnter(T){sr(K,[T]),An(T,i),An(T,a)},onBeforeAppear(T){sr(G,[T]),An(T,c),An(T,h)},onEnter:b(!1),onAppear:b(!0),onLeave(T,E){T._isLeaving=!0;const Ie=()=>w(T,E);An(T,p),An(T,_),Ty(),Yu(()=>{T._isLeaving&&(ir(T,p),An(T,A),Xu(ee)||Zu(T,r,V,Ie))}),sr(ee,[T,Ie])},onEnterCancelled(T){m(T,!1),sr($,[T])},onAppearCancelled(T){m(T,!0),sr(y,[T])},onLeaveCancelled(T){w(T),sr(ie,[T])}})}function Ey(t){if(t==null)return null;if(De(t))return[ka(t.enter),ka(t.leave)];{const e=ka(t);return[e,e]}}function ka(t){return Tm(t)}function An(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[qs]||(t[qs]=new Set)).add(e)}function ir(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[qs];n&&(n.delete(e),n.size||(t[qs]=void 0))}function Yu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let wy=0;function Zu(t,e,n,r){const s=t._endId=++wy,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Iy(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,_),i()},_=A=>{A.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,_)}function Iy(t,e){const n=window.getComputedStyle(t),r=k=>(n[k]||"").split(", "),s=r(`${Tn}Delay`),i=r(`${Tn}Duration`),a=eh(s,i),l=r(`${Es}Delay`),c=r(`${Es}Duration`),h=eh(l,c);let d=null,p=0,_=0;e===Tn?a>0&&(d=Tn,p=a,_=i.length):e===Es?h>0&&(d=Es,p=h,_=c.length):(p=Math.max(a,h),d=p>0?a>h?Tn:Es:null,_=d?d===Tn?i.length:c.length:0);const A=d===Tn&&/\b(transform|all)(,|$)/.test(r(`${Tn}Property`).toString());return{type:d,timeout:p,propCount:_,hasTransform:A}}function eh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>th(n)+th(t[r])))}function th(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ty(){return document.body.offsetHeight}function Ay(t,e,n){const r=t[qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const nh=Symbol("_vod"),by=Symbol("_vsh"),Ry=Symbol(""),Sy=/(^|;)\s*display\s*:/;function Py(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Qi(r,l,"")}else for(const a in e)n[a]==null&&Qi(r,a,"");for(const a in n)a==="display"&&(i=!0),Qi(r,a,n[a])}else if(s){if(e!==n){const a=r[Ry];a&&(n+=";"+a),r.cssText=n,i=Sy.test(n)}}else e&&t.removeAttribute("style");nh in t&&(t[nh]=i?r.display:"",t[by]&&(r.display="none"))}const rh=/\s*!important$/;function Qi(t,e,n){if(oe(n))n.forEach(r=>Qi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Cy(t,e);rh.test(n)?t.setProperty(es(r),n.replace(rh,""),"important"):t[r]=n}}const sh=["Webkit","Moz","ms"],Oa={};function Cy(t,e){const n=Oa[e];if(n)return n;let r=Qt(e);if(r!=="filter"&&r in t)return Oa[e]=r;r=ko(r);for(let s=0;s<sh.length;s++){const i=sh[s]+r;if(i in t)return Oa[e]=i}return e}const ih="http://www.w3.org/1999/xlink";function oh(t,e,n,r,s,i=Cm(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ih,e.slice(6,e.length)):t.setAttributeNS(ih,e,n):n==null||i&&!Lf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Kn(n)?String(n):n)}function ky(t,e,n,r,s,i,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,s,i),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const h=l==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(h!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=Lf(n):n==null&&h==="string"?(n="",c=!0):h==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Nr(t,e,n,r){t.addEventListener(e,n,r)}function Oy(t,e,n,r){t.removeEventListener(e,n,r)}const ah=Symbol("_vei");function Ny(t,e,n,r,s=null){const i=t[ah]||(t[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Dy(e);if(r){const h=i[e]=My(r,s);Nr(t,l,h,c)}else a&&(Oy(t,l,a,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function Dy(t){let e;if(lh.test(t)){e={};let r;for(;r=t.match(lh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let Na=0;const xy=Promise.resolve(),Vy=()=>Na||(xy.then(()=>Na=0),Na=Date.now());function My(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(Ly(r,n.value),e,5,[r])};return n.value=t,n.attached=Vy(),n}function Ly(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Fy=(t,e,n,r,s,i,a,l,c)=>{const h=s==="svg";e==="class"?Ay(t,r,h):e==="style"?Py(t,n,r):So(e)?Ol(e)||Ny(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Uy(t,e,r,h))?(ky(t,e,r,i,a,l,c),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&oh(t,e,r,h,a,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),oh(t,e,r,h))};function Uy(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ch(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(e)&&qe(n)?!1:e in t}const uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Hi(e,n):e};function $y(t){t.target.composing=!0}function hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Da=Symbol("_assign"),s1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Da]=uh(s);const i=r||s.props&&s.props.type==="number";Nr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Wa(l)),t[Da](l)}),n&&Nr(t,"change",()=>{t.value=t.value.trim()}),e||(Nr(t,"compositionstart",$y),Nr(t,"compositionend",hh),Nr(t,"change",hh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Da]=uh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Wa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},By=["ctrl","shift","alt","meta"],jy={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>By.some(n=>t[`${n}Key`]&&!e.includes(n))},i1=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=jy[e[a]];if(l&&l(s,e))return}return t(s,...i)})},Hy=He({patchProp:Fy},yy);let fh;function qy(){return fh||(fh=B_(Hy))}const zy=(...t)=>{const e=qy().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Wy(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,Ky(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Ky(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Wy(t){return qe(t)?document.querySelector(t):t}var Gy=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Fd;const qo=t=>Fd=t,Ud=Symbol();function al(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Os;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Os||(Os={}));function Qy(){const t=Bf(!0),e=t.run(()=>un({}));let n=[],r=[];const s=Bl({install(i){qo(s),s._a=i,i.provide(Ud,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!Gy?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const $d=()=>{};function dh(t,e,n,r=$d){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&jf()&&Om(s),s}function Or(t,...e){t.slice().forEach(n=>{n(...e)})}const Jy=t=>t();function ll(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];al(s)&&al(r)&&t.hasOwnProperty(n)&&!ze(r)&&!dr(r)?t[n]=ll(s,r):t[n]=r}return t}const Xy=Symbol();function Yy(t){return!al(t)||!t.hasOwnProperty(Xy)}const{assign:Sn}=Object;function Zy(t){return!!(ze(t)&&t.effect)}function ev(t,e,n,r){const{state:s,actions:i,getters:a}=e,l=n.state.value[t];let c;function h(){l||(n.state.value[t]=s?s():{});const d=n_(n.state.value[t]);return Sn(d,i,Object.keys(a||{}).reduce((p,_)=>(p[_]=Bl(Ot(()=>{qo(n);const A=n._s.get(t);return a[_].call(A,A)})),p),{}))}return c=Bd(t,h,e,n,r,!0),c}function Bd(t,e,n={},r,s,i){let a;const l=Sn({actions:{}},n),c={deep:!0};let h,d,p=[],_=[],A;const k=r.state.value[t];!i&&!k&&(r.state.value[t]={}),un({});let x;function V(y){let m;h=d=!1,typeof y=="function"?(y(r.state.value[t]),m={type:Os.patchFunction,storeId:t,events:A}):(ll(r.state.value[t],y),m={type:Os.patchObject,payload:y,storeId:t,events:A});const w=x=Symbol();ql().then(()=>{x===w&&(h=!0)}),d=!0,Or(p,m,r.state.value[t])}const K=i?function(){const{state:m}=n,w=m?m():{};this.$patch(b=>{Sn(b,w)})}:$d;function H(){a.stop(),p=[],_=[],r._s.delete(t)}function $(y,m){return function(){qo(r);const w=Array.from(arguments),b=[],T=[];function E(he){b.push(he)}function Ie(he){T.push(he)}Or(_,{args:w,name:y,store:ie,after:E,onError:Ie});let xe;try{xe=m.apply(this&&this.$id===t?this:ie,w)}catch(he){throw Or(T,he),he}return xe instanceof Promise?xe.then(he=>(Or(b,he),he)).catch(he=>(Or(T,he),Promise.reject(he))):(Or(b,xe),xe)}}const ee={_p:r,$id:t,$onAction:dh.bind(null,_),$patch:V,$reset:K,$subscribe(y,m={}){const w=dh(p,y,m.detached,()=>b()),b=a.run(()=>Cs(()=>r.state.value[t],T=>{(m.flush==="sync"?d:h)&&y({storeId:t,type:Os.direct,events:A},T)},Sn({},c,m)));return w},$dispose:H},ie=ri(ee);r._s.set(t,ie);const R=(r._a&&r._a.runWithContext||Jy)(()=>r._e.run(()=>(a=Bf()).run(e)));for(const y in R){const m=R[y];if(ze(m)&&!Zy(m)||dr(m))i||(k&&Yy(m)&&(ze(m)?m.value=k[y]:ll(m,k[y])),r.state.value[t][y]=m);else if(typeof m=="function"){const w=$(y,m);R[y]=w,l.actions[y]=m}}return Sn(ie,R),Sn(Ee(ie),R),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{V(m=>{Sn(m,y)})}}),r._p.forEach(y=>{Sn(ie,a.run(()=>y({store:ie,app:r._a,pinia:r,options:l})))}),k&&i&&n.hydrate&&n.hydrate(ie.$state,k),h=!0,d=!0,ie}function jd(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(l,c){const h=V_();return l=l||(h?zt(Ud,null):null),l&&qo(l),l=Fd,l._s.has(r)||(i?Bd(r,e,s,l):ev(r,s,l)),l._s.get(r)}return a.$id=r,a}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Dr=typeof document<"u";function tv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function xa(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ut(s)?s.map(t):t(s)}return n}const Ns=()=>{},Ut=Array.isArray,Hd=/#/g,nv=/&/g,rv=/\//g,sv=/=/g,iv=/\?/g,qd=/\+/g,ov=/%5B/g,av=/%5D/g,zd=/%5E/g,lv=/%60/g,Kd=/%7B/g,cv=/%7C/g,Wd=/%7D/g,uv=/%20/g;function Jl(t){return encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function hv(t){return Jl(t).replace(Kd,"{").replace(Wd,"}").replace(zd,"^")}function cl(t){return Jl(t).replace(qd,"%2B").replace(uv,"+").replace(Hd,"%23").replace(nv,"%26").replace(lv,"`").replace(Kd,"{").replace(Wd,"}").replace(zd,"^")}function fv(t){return cl(t).replace(sv,"%3D")}function dv(t){return Jl(t).replace(Hd,"%23").replace(iv,"%3F")}function pv(t){return t==null?"":dv(t).replace(rv,"%2F")}function zs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gv=/\/$/,mv=t=>t.replace(gv,"");function Va(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Ev(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:zs(a)}}function _v(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&qr(e.matched[r],n.matched[s])&&Gd(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Gd(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vv(t[n],e[n]))return!1;return!0}function vv(t,e){return Ut(t)?gh(t,e):Ut(e)?gh(e,t):t===e}function gh(t,e){return Ut(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Ev(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const bn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ks;(function(t){t.pop="pop",t.push="push"})(Ks||(Ks={}));var Ds;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ds||(Ds={}));function wv(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mv(t)}const Iv=/^[^#]+#/;function Tv(t,e){return t.replace(Iv,"#")+e}function Av(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const zo=()=>({left:window.scrollX,top:window.scrollY});function bv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Av(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mh(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function Rv(t,e){ul.set(t,e)}function Sv(t){const e=ul.get(t);return ul.delete(t),e}let Pv=()=>location.protocol+"//"+location.host;function Qd(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ph(c,"")}return ph(n,t)+r+s}function Cv(t,e,n,r){let s=[],i=[],a=null;const l=({state:_})=>{const A=Qd(t,location),k=n.value,x=e.value;let V=0;if(_){if(n.value=A,e.value=_,a&&a===k){a=null;return}V=x?_.position-x.position:0}else r(A);s.forEach(K=>{K(n.value,k,{delta:V,type:Ks.pop,direction:V?V>0?Ds.forward:Ds.back:Ds.unknown})})};function c(){a=n.value}function h(_){s.push(_);const A=()=>{const k=s.indexOf(_);k>-1&&s.splice(k,1)};return i.push(A),A}function d(){const{history:_}=window;_.state&&_.replaceState(Ae({},_.state,{scroll:zo()}),"")}function p(){for(const _ of i)_();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function _h(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?zo():null}}function kv(t){const{history:e,location:n}=window,r={value:Qd(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),_=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Pv()+t+c;try{e[d?"replaceState":"pushState"](h,"",_),s.value=h}catch(A){console.error(A),n[d?"replace":"assign"](_)}}function a(c,h){const d=Ae({},e.state,_h(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ae({},s.value,e.state,{forward:c,scroll:zo()});i(d.current,d,!0);const p=Ae({},_h(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Ov(t){t=wv(t);const e=kv(t),n=Cv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:Tv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Nv(t){return typeof t=="string"||t&&typeof t=="object"}function Jd(t){return typeof t=="string"||typeof t=="symbol"}const Xd=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function zr(t,e){return Ae(new Error,{type:t,[Xd]:!0},e)}function tn(t,e){return t instanceof Error&&Xd in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",Dv={sensitive:!1,strict:!1,start:!0,end:!0},xv=/[.+*?^${}()[\]/\\]/g;function Vv(t,e){const n=Ae({},Dv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const _=h[p];let A=40+(n.sensitive?.25:0);if(_.type===0)p||(s+="/"),s+=_.value.replace(xv,"\\$&"),A+=40;else if(_.type===1){const{value:k,repeatable:x,optional:V,regexp:K}=_;i.push({name:k,repeatable:x,optional:V});const H=K||vh;if(H!==vh){A+=10;try{new RegExp(`(${H})`)}catch(ee){throw new Error(`Invalid custom RegExp for param "${k}" (${H}): `+ee.message)}}let $=x?`((?:${H})(?:/(?:${H}))*)`:`(${H})`;p||($=V&&h.length<2?`(?:/${$})`:"/"+$),V&&($+="?"),s+=$,A+=20,V&&(A+=-8),x&&(A+=-20),H===".*"&&(A+=-50)}d.push(A)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let _=1;_<d.length;_++){const A=d[_]||"",k=i[_-1];p[k.name]=A&&k.repeatable?A.split("/"):A}return p}function c(h){let d="",p=!1;for(const _ of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const A of _)if(A.type===0)d+=A.value;else if(A.type===1){const{value:k,repeatable:x,optional:V}=A,K=k in h?h[k]:"";if(Ut(K)&&!x)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const H=Ut(K)?K.join("/"):K;if(!H)if(V)_.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);d+=H}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function Mv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Yd(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Mv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eh(r))return 1;if(Eh(s))return-1}return s.length-r.length}function Eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Lv={type:0,value:""},Fv=/[a-zA-Z0-9_]/;function Uv(t){if(!t)return[[]];if(t==="/")return[[Lv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(A){throw new Error(`ERR (${n})/"${h}": ${A}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function _(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):_();break;case 4:_(),n=r;break;case 1:c==="("?n=2:Fv.test(c)?_():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function $v(t,e,n){const r=Vv(Uv(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Bv(t,e){const n=[],r=new Map;e=Th({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,_,A){const k=!A,x=jv(p);x.aliasOf=A&&A.record;const V=Th(e,p),K=[x];if("alias"in p){const ee=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of ee)K.push(Ae({},x,{components:A?A.record.components:x.components,path:ie,aliasOf:A?A.record:x}))}let H,$;for(const ee of K){const{path:ie}=ee;if(_&&ie[0]!=="/"){const G=_.record.path,R=G[G.length-1]==="/"?"":"/";ee.path=_.record.path+(ie&&R+ie)}if(H=$v(ee,_,V),A?A.alias.push(H):($=$||H,$!==H&&$.alias.push(H),k&&p.name&&!Ih(H)&&a(p.name)),Zd(H)&&c(H),x.children){const G=x.children;for(let R=0;R<G.length;R++)i(G[R],H,A&&A.children[R])}A=A||H}return $?()=>{a($)}:Ns}function a(p){if(Jd(p)){const _=r.get(p);_&&(r.delete(p),n.splice(n.indexOf(_),1),_.children.forEach(a),_.alias.forEach(a))}else{const _=n.indexOf(p);_>-1&&(n.splice(_,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const _=zv(p,n);n.splice(_,0,p),p.record.name&&!Ih(p)&&r.set(p.record.name,p)}function h(p,_){let A,k={},x,V;if("name"in p&&p.name){if(A=r.get(p.name),!A)throw zr(1,{location:p});V=A.record.name,k=Ae(wh(_.params,A.keys.filter($=>!$.optional).concat(A.parent?A.parent.keys.filter($=>$.optional):[]).map($=>$.name)),p.params&&wh(p.params,A.keys.map($=>$.name))),x=A.stringify(k)}else if(p.path!=null)x=p.path,A=n.find($=>$.re.test(x)),A&&(k=A.parse(x),V=A.record.name);else{if(A=_.name?r.get(_.name):n.find($=>$.re.test(_.path)),!A)throw zr(1,{location:p,currentLocation:_});V=A.record.name,k=Ae({},_.params,p.params),x=A.stringify(k)}const K=[];let H=A;for(;H;)K.unshift(H.record),H=H.parent;return{name:V,path:x,params:k,matched:K,meta:qv(K)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function wh(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jv(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Hv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Hv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qv(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Th(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function zv(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Yd(t,e[i])<0?r=i:n=i+1}const s=Kv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Kv(t){let e=t;for(;e=e.parent;)if(Zd(e)&&Yd(t,e)===0)return e}function Zd({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Wv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(qd," "),a=i.indexOf("="),l=zs(a<0?i:i.slice(0,a)),c=a<0?null:zs(i.slice(a+1));if(l in e){let h=e[l];Ut(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ah(t){let e="";for(let n in t){const r=t[n];if(n=fv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ut(r)?r.map(i=>i&&cl(i)):[r&&cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ut(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Qv=Symbol(""),bh=Symbol(""),Xl=Symbol(""),ep=Symbol(""),hl=Symbol("");function ws(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function On(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=_=>{_===!1?c(zr(4,{from:n,to:e})):_ instanceof Error?c(_):Nv(_)?c(zr(2,{from:e,to:_})):(a&&r.enterCallbacks[s]===a&&typeof _=="function"&&a.push(_),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(_=>c(_))})}function Ma(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Jv(c)){const d=(c.__vccOpts||c)[e];d&&i.push(On(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${a.path}"`));const p=tv(d)?d.default:d;a.components[l]=p;const A=(p.__vccOpts||p)[e];return A&&On(A,n,r,a,l,s)()}))}}return i}function Jv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Rh(t){const e=zt(Xl),n=zt(ep),r=Ot(()=>{const c=Re(t.to);return e.resolve(c)}),s=Ot(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const _=p.findIndex(qr.bind(null,d));if(_>-1)return _;const A=Sh(c[h-2]);return h>1&&Sh(d)===A&&p[p.length-1].path!==A?p.findIndex(qr.bind(null,c[h-2])):_}),i=Ot(()=>s.value>-1&&Zv(n.params,r.value.params)),a=Ot(()=>s.value>-1&&s.value===n.matched.length-1&&Gd(n.params,r.value.params));function l(c={}){return Yv(c)?e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Ns):Promise.resolve()}return{route:r,href:Ot(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}const Xv=Rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Rh,setup(t,{slots:e}){const n=ri(Rh(t)),{options:r}=zt(Xl),s=Ot(()=>({[Ph(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ph(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ql("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Yl=Xv;function Yv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ut(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Sh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ph=(t,e,n)=>t??e??n,e0=Rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=zt(hl),s=Ot(()=>t.route||r.value),i=zt(bh,0),a=Ot(()=>{let h=Re(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Ot(()=>s.value.matched[a.value]);Ki(bh,Ot(()=>a.value+1)),Ki(Qv,l),Ki(hl,s);const c=un();return Cs(()=>[c.value,l.value,t.name],([h,d,p],[_,A,k])=>{d&&(d.instances[p]=h,A&&A!==d&&h&&h===_&&(d.leaveGuards.size||(d.leaveGuards=A.leaveGuards),d.updateGuards.size||(d.updateGuards=A.updateGuards))),h&&d&&(!A||!qr(d,A)||!_)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,_=p&&p.components[d];if(!_)return Ch(n.default,{Component:_,route:h});const A=p.props[d],k=A?A===!0?h.params:typeof A=="function"?A(h):A:null,V=Ql(_,Ae({},k,e,{onVnodeUnmounted:K=>{K.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Ch(n.default,{Component:V,route:h})||V}}});function Ch(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const tp=e0;function t0(t){const e=Bv(t.routes,t),n=t.parseQuery||Wv,r=t.stringifyQuery||Ah,s=t.history,i=ws(),a=ws(),l=ws(),c=Zm(bn);let h=bn;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=xa.bind(null,N=>""+N),p=xa.bind(null,pv),_=xa.bind(null,zs);function A(N,J){let W,X;return Jd(N)?(W=e.getRecordMatcher(N),X=J):X=N,e.addRoute(X,W)}function k(N){const J=e.getRecordMatcher(N);J&&e.removeRoute(J)}function x(){return e.getRoutes().map(N=>N.record)}function V(N){return!!e.getRecordMatcher(N)}function K(N,J){if(J=Ae({},J||c.value),typeof N=="string"){const I=Va(n,N,J.path),P=e.resolve({path:I.path},J),D=s.createHref(I.fullPath);return Ae(I,P,{params:_(P.params),hash:zs(I.hash),redirectedFrom:void 0,href:D})}let W;if(N.path!=null)W=Ae({},N,{path:Va(n,N.path,J.path).path});else{const I=Ae({},N.params);for(const P in I)I[P]==null&&delete I[P];W=Ae({},N,{params:p(I)}),J.params=p(J.params)}const X=e.resolve(W,J),me=N.hash||"";X.params=d(_(X.params));const Se=_v(r,Ae({},N,{hash:hv(me),path:X.path})),v=s.createHref(Se);return Ae({fullPath:Se,hash:me,query:r===Ah?Gv(N.query):N.query||{}},X,{redirectedFrom:void 0,href:v})}function H(N){return typeof N=="string"?Va(n,N,c.value.path):Ae({},N)}function $(N,J){if(h!==N)return zr(8,{from:J,to:N})}function ee(N){return R(N)}function ie(N){return ee(Ae(H(N),{replace:!0}))}function G(N){const J=N.matched[N.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let X=typeof W=="function"?W(N):W;return typeof X=="string"&&(X=X.includes("?")||X.includes("#")?X=H(X):{path:X},X.params={}),Ae({query:N.query,hash:N.hash,params:X.path!=null?{}:N.params},X)}}function R(N,J){const W=h=K(N),X=c.value,me=N.state,Se=N.force,v=N.replace===!0,I=G(W);if(I)return R(Ae(H(I),{state:typeof I=="object"?Ae({},me,I.state):me,force:Se,replace:v}),J||W);const P=W;P.redirectedFrom=J;let D;return!Se&&yv(r,X,W)&&(D=zr(16,{to:P,from:X}),St(X,X,!0,!1)),(D?Promise.resolve(D):w(P,X)).catch(O=>tn(O)?tn(O,2)?O:xt(O):fe(O,P,X)).then(O=>{if(O){if(tn(O,2))return R(Ae({replace:v},H(O.to),{state:typeof O.to=="object"?Ae({},me,O.to.state):me,force:Se}),J||P)}else O=T(P,X,!0,v,me);return b(P,X,O),O})}function y(N,J){const W=$(N,J);return W?Promise.reject(W):Promise.resolve()}function m(N){const J=_n.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(N):N()}function w(N,J){let W;const[X,me,Se]=n0(N,J);W=Ma(X.reverse(),"beforeRouteLeave",N,J);for(const I of X)I.leaveGuards.forEach(P=>{W.push(On(P,N,J))});const v=y.bind(null,N,J);return W.push(v),Ke(W).then(()=>{W=[];for(const I of i.list())W.push(On(I,N,J));return W.push(v),Ke(W)}).then(()=>{W=Ma(me,"beforeRouteUpdate",N,J);for(const I of me)I.updateGuards.forEach(P=>{W.push(On(P,N,J))});return W.push(v),Ke(W)}).then(()=>{W=[];for(const I of Se)if(I.beforeEnter)if(Ut(I.beforeEnter))for(const P of I.beforeEnter)W.push(On(P,N,J));else W.push(On(I.beforeEnter,N,J));return W.push(v),Ke(W)}).then(()=>(N.matched.forEach(I=>I.enterCallbacks={}),W=Ma(Se,"beforeRouteEnter",N,J,m),W.push(v),Ke(W))).then(()=>{W=[];for(const I of a.list())W.push(On(I,N,J));return W.push(v),Ke(W)}).catch(I=>tn(I,8)?I:Promise.reject(I))}function b(N,J,W){l.list().forEach(X=>m(()=>X(N,J,W)))}function T(N,J,W,X,me){const Se=$(N,J);if(Se)return Se;const v=J===bn,I=Dr?history.state:{};W&&(X||v?s.replace(N.fullPath,Ae({scroll:v&&I&&I.scroll},me)):s.push(N.fullPath,me)),c.value=N,St(N,J,W,v),xt()}let E;function Ie(){E||(E=s.listen((N,J,W)=>{if(!$t.listening)return;const X=K(N),me=G(X);if(me){R(Ae(me,{replace:!0}),X).catch(Ns);return}h=X;const Se=c.value;Dr&&Rv(mh(Se.fullPath,W.delta),zo()),w(X,Se).catch(v=>tn(v,12)?v:tn(v,2)?(R(v.to,X).then(I=>{tn(I,20)&&!W.delta&&W.type===Ks.pop&&s.go(-1,!1)}).catch(Ns),Promise.reject()):(W.delta&&s.go(-W.delta,!1),fe(v,X,Se))).then(v=>{v=v||T(X,Se,!1),v&&(W.delta&&!tn(v,8)?s.go(-W.delta,!1):W.type===Ks.pop&&tn(v,20)&&s.go(-1,!1)),b(X,Se,v)}).catch(Ns)}))}let xe=ws(),he=ws(),ge;function fe(N,J,W){xt(N);const X=he.list();return X.length?X.forEach(me=>me(N,J,W)):console.error(N),Promise.reject(N)}function vt(){return ge&&c.value!==bn?Promise.resolve():new Promise((N,J)=>{xe.add([N,J])})}function xt(N){return ge||(ge=!N,Ie(),xe.list().forEach(([J,W])=>N?W(N):J()),xe.reset()),N}function St(N,J,W,X){const{scrollBehavior:me}=t;if(!Dr||!me)return Promise.resolve();const Se=!W&&Sv(mh(N.fullPath,0))||(X||!W)&&history.state&&history.state.scroll||null;return ql().then(()=>me(N,J,Se)).then(v=>v&&bv(v)).catch(v=>fe(v,N,J))}const Ve=N=>s.go(N);let Me;const _n=new Set,$t={currentRoute:c,listening:!0,addRoute:A,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:x,resolve:K,options:t,push:ee,replace:ie,go:Ve,back:()=>Ve(-1),forward:()=>Ve(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:he.add,isReady:vt,install(N){const J=this;N.component("RouterLink",Yl),N.component("RouterView",tp),N.config.globalProperties.$router=J,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(c)}),Dr&&!Me&&c.value===bn&&(Me=!0,ee(s.location).catch(me=>{}));const W={};for(const me in bn)Object.defineProperty(W,me,{get:()=>c.value[me],enumerable:!0});N.provide(Xl,J),N.provide(ep,ed(W)),N.provide(hl,c);const X=N.unmount;_n.add(N),N.unmount=function(){_n.delete(N),_n.size<1&&(h=bn,E&&E(),E=null,c.value=bn,Me=!1,ge=!1),X()}}};function Ke(N){return N.reduce((J,W)=>J.then(()=>m(W)),Promise.resolve())}return $t}function n0(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>qr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>qr(h,c))||s.push(c))}return[n,r,s]}const r0=Rt({__name:"index",setup(t){return(e,n)=>($e(),Bo(Re(tp)))}}),s0="modulepreload",i0=function(t){return"/"+t},kh={},o0=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(l=>{if(l=i0(l),l in kh)return;kh[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":s0,c||(d.as="script",d.crossOrigin=""),d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),c)return new Promise((p,_)=>{d.addEventListener("load",p),d.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}return s.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},Zl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1.5rem'%20width='1.5rem'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%230065FE'%20d='M256%20192l-39.5-39.5c4.9-12.6%207.5-26.2%207.5-40.5C224%2050.1%20173.9%200%20112%200S0%2050.1%200%20112s50.1%20112%20112%20112c14.3%200%2027.9-2.7%2040.5-7.5L192%20256l-39.5%2039.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1%20288%200%20338.1%200%20400s50.1%20112%20112%20112s112-50.1%20112-112c0-14.3-2.7-27.9-7.5-40.5L499.2%2076.8c7.1-7.1%207.1-18.5%200-25.6c-28.3-28.3-74.1-28.3-102.4%200L256%20192zm22.6%20150.6L396.8%20460.8c28.3%2028.3%2074.1%2028.3%20102.4%200c7.1-7.1%207.1-18.5%200-25.6L342.6%20278.6l-64%2064zM64%20112a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm48%20240a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z'/%3e%3c/svg%3e",gn=jd("togglers",()=>{const t=un(!1),e=un(!1),n=un(!1);return{isMobileNavOpen:t,toggleMobileNav:()=>{t.value=!t.value},isUserMenuOpen:e,toggleUserMenu:()=>{e.value=!e.value},isAuthenticationPopupOpen:n,toggleAuthenticationPopup:()=>{n.value=!n.value}}}),Qn=t=>(Tr("data-v-6bc8a897"),t=t(),Ar(),t),a0=["aria-haspopup"],l0=Qn(()=>Y("div",{class:"logo"},[Y("img",{src:Zl,alt:"logo"})],-1)),c0=Qn(()=>Y("div",{class:"logo-line"},null,-1)),u0=Qn(()=>Y("p",{class:"logo-text"},"SCISSOR",-1)),h0={key:0,class:"nav-urls"},f0=Qn(()=>Y("li",null,[Y("a",{href:"#about"},"Features")],-1)),d0=Qn(()=>Y("li",null,[Y("a",{href:"#faq"},"FAQs")],-1)),p0=[f0,d0],g0=Qn(()=>Y("div",{class:"line"},null,-1)),m0=Qn(()=>Y("div",{class:"line"},null,-1)),_0=Qn(()=>Y("div",{class:"line"},null,-1)),y0=[g0,m0,_0],v0=Rt({__name:"Nav",setup(t){const e=gn(),n=un(window.innerWidth),r=()=>{n.value=window.innerWidth};return Lo(()=>{window.addEventListener("resize",r)}),Fo(()=>{window.removeEventListener("resize",r)}),(s,i)=>($e(),nt("nav",{"aria-haspopup":Re(e).isAuthenticationPopupOpen},[be(Re(Yl),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:Hr(()=>[l0,c0,u0]),_:1}),n.value>=600?($e(),nt("ul",h0,p0)):hn("",!0),n.value>=600?($e(),nt("button",{key:1,onClick:i[0]||(i[0]=a=>Re(e).toggleAuthenticationPopup()),class:"login"}," Login ")):hn("",!0),n.value<600?($e(),nt("div",{key:2,class:"hamburger",onClick:i[1]||(i[1]=a=>Re(e).toggleMobileNav())},y0)):hn("",!0)],8,a0))}}),Yt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},E0=Yt(v0,[["__scopeId","data-v-6bc8a897"]]),Ko="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cpath%20d='M50%2023.3333L60%2023.3333C62.1887%2023.3333%2064.356%2023.7643%2066.3781%2024.6019C68.4002%2025.4395%2070.2375%2026.6672%2071.7851%2028.2148C73.3328%2029.7624%2074.5604%2031.5998%2075.398%2033.6219C76.2356%2035.644%2076.6667%2037.8112%2076.6667%2039.9999C76.6667%2042.1886%2076.2356%2044.3559%2075.398%2046.378C74.5604%2048.4001%2073.3328%2050.2374%2071.7851%2051.785C70.2375%2053.3327%2068.4002%2054.5603%2066.3781%2055.3979C64.356%2056.2355%2062.1887%2056.6666%2060%2056.6666H50M30%2056.6666H20C17.8113%2056.6666%2015.644%2056.2355%2013.6219%2055.3979C11.5998%2054.5603%209.76253%2053.3327%208.21488%2051.785C5.08928%2048.6594%203.33333%2044.4202%203.33333%2039.9999C3.33333%2035.5796%205.08928%2031.3404%208.21488%2028.2148C11.3405%2025.0892%2015.5797%2023.3333%2020%2023.3333H30'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.6667%2040H53.3333'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",w0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='41'%20height='12'%20viewBox='0%200%2041%2012'%20fill='none'%3e%3cpath%20d='M1%205C0.447715%205%200%205.44772%200%206C0%206.55228%200.447715%207%201%207L1%205ZM41%206L31%200.226497V11.7735L41%206ZM1%207L32%207V5L1%205L1%207Z'%20fill='%23005AE2'/%3e%3c/svg%3e",Jn=t=>(Tr("data-v-c497702e"),t=t(),Ar(),t),I0=["aria-haspopup"],T0={class:"intro"},A0=Jn(()=>Y("div",{class:"intro-text-container"},[Y("p",{class:"intro-text"}," Optimize Your Online Experience with Our Advanced URL Shortening Solution "),Y("p",{class:"intro-description"}," Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. ")],-1)),b0={class:"intro-cta-container"},R0=Jn(()=>Y("a",{href:"#about",class:"intro-cta-text"},"Learn More",-1)),S0={class:"hero-visuals-container"},P0={class:"hero-visual-image"},C0={class:"coupled-links"},k0=Jn(()=>Y("div",{class:"link"},[Y("img",{src:Ko,alt:"link"})],-1)),O0=Jn(()=>Y("div",{class:"link"},[Y("img",{src:Ko,alt:"link"})],-1)),N0={key:0,class:"link"},D0=Jn(()=>Y("img",{src:Ko,alt:"link"},null,-1)),x0=[D0],V0=Jn(()=>Y("div",{class:"arrow"},[Y("img",{src:w0,alt:"arrow"})],-1)),M0=Jn(()=>Y("div",{class:"link"},[Y("img",{src:Ko,alt:"link"})],-1)),L0=Jn(()=>Y("p",{class:"hero-visual-text"},[bs(" Seamlessly transform your long "),Y("span",{class:"hero-visual-text-highlight"},"URLs"),bs(" into "),Y("span",{class:"hero-visual-text-highlight"},"concise"),bs(" and "),Y("span",{class:"hero-visual-text-highlight"},"shareable"),bs(" links with just few clicks. ")],-1)),F0=Rt({__name:"Hero",setup(t){const e=gn(),n=un(window.innerWidth),r=()=>{n.value=window.innerWidth};return Lo(()=>{window.addEventListener("resize",r)}),Fo(()=>{window.removeEventListener("resize",r)}),(s,i)=>($e(),nt("section",{"aria-haspopup":Re(e).isAuthenticationPopupOpen},[Y("div",T0,[A0,Y("div",b0,[Y("button",{onClick:i[0]||(i[0]=(...a)=>Re(e).toggleAuthenticationPopup&&Re(e).toggleAuthenticationPopup(...a)),class:"intro-cta-button"}," Get Started "),R0])]),Y("div",S0,[Y("div",P0,[Y("div",C0,[k0,O0,n.value>=450?($e(),nt("div",N0,x0)):hn("",!0)]),V0,M0]),L0])],8,I0))}}),U0=Yt(F0,[["__scopeId","data-v-c497702e"]]),np="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='6'%20height='48'%20viewBox='0%200%206%2048'%20fill='none'%3e%3cpath%20d='M3%200V48'%20stroke='url(%23paint0_linear_1_196)'%20stroke-width='5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_196'%20x1='3.05'%20y1='0'%20x2='3.05'%20y2='48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23112232'/%3e%3cstop%20offset='1'%20stop-color='%234D6B88'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",$0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_203)'%3e%3cpath%20d='M15.1%207H18.1C18.7566%207%2019.4068%207.12933%2020.0134%207.3806C20.6201%207.63188%2021.1712%208.00017%2021.6355%208.46447C22.0998%208.92876%2022.4681%209.47996%2022.7194%2010.0866C22.9707%2010.6932%2023.1%2011.3434%2023.1%2012C23.1%2012.6566%2022.9707%2013.3068%2022.7194%2013.9134C22.4681%2014.52%2022.0998%2015.0712%2021.6355%2015.5355C21.1712%2015.9998%2020.6201%2016.3681%2020.0134%2016.6194C19.4068%2016.8707%2018.7566%2017%2018.1%2017H15.1M9.10001%2017H6.10001C5.4434%2017%204.79322%2016.8707%204.18659%2016.6194C3.57996%2016.3681%203.02877%2015.9998%202.56447%2015.5355C1.62679%2014.5979%201.10001%2013.3261%201.10001%2012C1.10001%2010.6739%201.62679%209.40215%202.56447%208.46447C3.50215%207.52678%204.77392%207%206.10001%207H9.10001'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.10001%2012H16.1'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_203'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",B0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cpath%20d='M11.1%204H4.10001C3.56957%204%203.06087%204.21071%202.68579%204.58579C2.31072%204.96086%202.10001%205.46957%202.10001%206V20C2.10001%2020.5304%202.31072%2021.0391%202.68579%2021.4142C3.06087%2021.7893%203.56957%2022%204.10001%2022H18.1C18.6304%2022%2019.1391%2021.7893%2019.5142%2021.4142C19.8893%2021.0391%2020.1%2020.5304%2020.1%2020V13'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6%202.49998C18.9978%202.10216%2019.5374%201.87866%2020.1%201.87866C20.6626%201.87866%2021.2022%202.10216%2021.6%202.49998C21.9978%202.89781%2022.2213%203.43737%2022.2213%203.99998C22.2213%204.56259%2021.9978%205.10216%2021.6%205.49998L12.1%2015L8.10001%2016L9.10001%2012L18.6%202.49998Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",j0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%3e%3cpath%20d='M10.8859%203.06763H3.88589V10.0676H10.8859V3.06763Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%203.06763H14.8859V10.0676H21.8859V3.06763Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%2014.0676H14.8859V21.0676H21.8859V14.0676Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8859%2014.0676H3.88589V21.0676H10.8859V14.0676Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",H0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_236)'%3e%3cpath%20d='M21.1%2012H17.1L14.1%2021L8.10001%203L5.10001%2012H1.10001'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_236'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",q0=["aria-haspopup"],z0=xd('<div class="stats-container" data-v-fd269c37><p class="stats-heading" data-v-fd269c37> One Stop, <br data-v-fd269c37>Four <span class="stats-heading-highlight" data-v-fd269c37>Possibilities</span>. </p><div class="stats" data-v-fd269c37><div class="stat-box-container" id="stat-box-container1" data-v-fd269c37><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>12M</p><p class="stat-text" data-v-fd269c37>Active Users</p></div><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>60M</p><p class="stat-text" data-v-fd269c37>Links &amp; QR codes created</p></div></div><div class="stat-box-container" data-v-fd269c37><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>1B</p><p class="stat-text" data-v-fd269c37>Clicked &amp; Scanned connections</p></div><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>300K</p><p class="stat-text" data-v-fd269c37>App Integrations</p></div></div></div></div><div class="about-container" data-v-fd269c37><div class="why-choose-container" data-v-fd269c37><div class="why-choose-heading-container" data-v-fd269c37><div class="why-choose-heading-line" data-v-fd269c37><img src="'+np+'" alt="line" data-v-fd269c37></div><p class="why-choose-heading" data-v-fd269c37> Why Choose <span class="why-choose-heading-highlight" data-v-fd269c37>Scissor</span></p></div><p class="why-choose-text" data-v-fd269c37> Scissor is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p></div><div class="features-container" data-v-fd269c37><div class="features-box-container" data-v-fd269c37><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+$0+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>URL Shortening</p><p class="feature-box-text" data-v-fd269c37> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects. </p></div></div><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+B0+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>Custom URLs</p><p class="feature-box-text" data-v-fd269c37> With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. </p></div></div></div><div class="features-box-container" data-v-fd269c37><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+j0+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>QR Codes</p><p class="feature-box-text" data-v-fd269c37> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution. </p></div></div><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+H0+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>Data Analytics</p><p class="feature-box-text" data-v-fd269c37> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress. </p></div></div></div></div></div>',2),K0=[z0],W0=Rt({__name:"About",setup(t){const e=gn();return(n,r)=>($e(),nt("section",{id:"about","aria-haspopup":Re(e).isAuthenticationPopupOpen},K0,8,q0))}}),G0=Yt(W0,[["__scopeId","data-v-fd269c37"]]),Q0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%205V19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",J0="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",rp=t=>(Tr("data-v-316a6584"),t=t(),Ar(),t),X0={class:"faq-question-container"},Y0={class:"faq-question"},Z0={key:0,class:"plus-icon"},eE=rp(()=>Y("img",{src:Q0,alt:"plus"},null,-1)),tE=[eE],nE={key:1,class:"minus-icon"},rE=rp(()=>Y("img",{src:J0,alt:"minus"},null,-1)),sE=[rE],iE={key:0,class:"faq-answer"},oE=Rt({__name:"FAQBlocks",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(t){const e=un(!1),n=()=>{e.value=!e.value};return(r,s)=>($e(),nt("div",{class:Oo(["faq-block",{active:e.value}]),onClick:n},[Y("div",X0,[Y("p",Y0,Ga(t.question),1),e.value?hn("",!0):($e(),nt("div",Z0,tE)),e.value?($e(),nt("div",nE,sE)):hn("",!0)]),be(ii,{name:"fade",mode:"out-in"},{default:Hr(()=>[e.value?($e(),nt("p",iE,Ga(t.answer),1)):hn("",!0)]),_:1})],2))}}),Mi=Yt(oE,[["__scopeId","data-v-316a6584"]]),aE=t=>(Tr("data-v-1e5f84e4"),t=t(),Ar(),t),lE=["aria-haspopup"],cE={class:"faqs-container"},uE=aE(()=>Y("div",{class:"faq-header-container"},[Y("div",{class:"faq-header-line"},[Y("img",{src:np,alt:"line"})]),Y("p",{class:"faq-header"},"FAQs")],-1)),hE={class:"faq-blocks"},fE=Rt({__name:"FAQ",setup(t){const e=gn();return(n,r)=>($e(),nt("section",{id:"faq","aria-haspopup":Re(e).isAuthenticationPopupOpen},[Y("div",cE,[uE,Y("div",hE,[be(Mi,{question:"How does URL shortening work?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."}),be(Mi,{question:"Is it necessary to create an account to use the URL shortening service?",answer:"Yes! As creating one unlocks a treasure trove of link-wrangling superpowers like crafting custom links,performance tracking of your links, and more. "}),be(Mi,{question:" What is a QR Code?",answer:"Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is usually in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number."}),be(Mi,{question:"What can a QR Code do?",answer:"Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes."})])])],8,lE))}}),dE=Yt(fE,[["__scopeId","data-v-1e5f84e4"]]),pE=t=>(Tr("data-v-de140d21"),t=t(),Ar(),t),gE=["aria-haspopup"],mE={class:"CTA-container"},_E=pE(()=>Y("p",{class:"CTA-text"},"Revolutionizing Link Optimization!",-1)),yE=Rt({__name:"CTA",setup(t){const e=gn();return(n,r)=>($e(),nt("section",{"aria-haspopup":Re(e).isAuthenticationPopupOpen},[Y("div",mE,[_E,Y("button",{onClick:r[0]||(r[0]=(...s)=>Re(e).toggleAuthenticationPopup&&Re(e).toggleAuthenticationPopup(...s)),class:"CTA-button"},"Get Started")])],8,gE))}}),vE=Yt(yE,[["__scopeId","data-v-de140d21"]]),EE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23005ae2'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e",Wo=t=>(Tr("data-v-51ffcf2a"),t=t(),Ar(),t),wE=["aria-haspopup"],IE=Wo(()=>Y("div",{class:"logo"},[Y("img",{src:Zl,alt:"logo"})],-1)),TE=Wo(()=>Y("div",{class:"logo-line"},null,-1)),AE=Wo(()=>Y("p",{class:"logo-text"},"SCISSOR",-1)),bE={class:"login-and-escape-container"},RE=Wo(()=>Y("img",{src:EE,alt:"escape"},null,-1)),SE=[RE],PE=Rt({__name:"MobileNav",setup(t){const e=gn();return(n,r)=>($e(),Bo(ii,{name:"mobile-nav",mode:"out-in"},{default:Hr(()=>[Re(e).isMobileNavOpen===!0?($e(),nt("div",{key:0,class:"mobile-nav","aria-haspopup":Re(e).isAuthenticationPopupOpen},[Y("nav",null,[be(Re(Yl),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:Hr(()=>[IE,TE,AE]),_:1}),Y("div",bE,[Y("button",{onClick:r[0]||(r[0]=s=>Re(e).toggleAuthenticationPopup()),class:"login"},"Login"),Y("button",{class:"close-btn",onClick:r[1]||(r[1]=(...s)=>Re(e).toggleMobileNav&&Re(e).toggleMobileNav(...s))},SE)])])],8,wE)):hn("",!0)]),_:1}))}}),CE=Yt(PE,[["__scopeId","data-v-51ffcf2a"]]),kE=["aria-haspopup"],OE=xd('<div class="logo-container" data-v-8a3d745d><div class="logo" data-v-8a3d745d><img src="'+Zl+'" alt="logo" data-v-8a3d745d></div><div class="logo-line" data-v-8a3d745d></div><p class="logo-text" data-v-8a3d745d>SCISSOR</p></div><a href="https://www.github.com/favorodera/scissor" target="_blank" rel="noopener noreferrer" data-v-8a3d745d>favorodera</a>',2),NE=[OE],DE=Rt({__name:"Footer",setup(t){const e=gn();return(n,r)=>($e(),nt("footer",{"aria-haspopup":Re(e).isAuthenticationPopupOpen},NE,8,kE))}}),xE=Yt(DE,[["__scopeId","data-v-8a3d745d"]]),VE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23FFFFFF'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e";var Oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ME=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},ip={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,A=h&63;c||(A=64,a||(_=64)),r.push(n[d],n[p],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new LE;const _=i<<2|l>>4;if(r.push(_),h!==64){const A=l<<4&240|h>>2;if(r.push(A),p!==64){const k=h<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FE=function(t){const e=sp(t);return ip.encodeByteArray(e,!0)},co=function(t){return FE(t).replace(/\./g,"")},op=function(t){try{return ip.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $E=()=>UE().__FIREBASE_DEFAULTS__,BE=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&op(t[1]);return e&&JSON.parse(e)},Go=()=>{try{return $E()||BE()||jE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ap=t=>{var e,n;return(n=(e=Go())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},HE=t=>{const e=ap(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},lp=()=>{var t;return(t=Go())===null||t===void 0?void 0:t.config},cp=t=>{var e;return(e=Go())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[co(JSON.stringify(n)),co(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function WE(){var t;const e=(t=Go())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function QE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JE(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XE(){return!WE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function YE(){try{return typeof indexedDB=="object"}catch{return!1}}function ZE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ew,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?tw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new mn(s,l,r)}}function tw(t,e){return t.replace(nw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nw=/\{\$([^}]+)}/g;function rw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ws(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Nh(i)&&Nh(a)){if(!Ws(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function sw(t,e){const n=new iw(t,e);return n.subscribe.bind(n)}class iw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ow(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=La),s.error===void 0&&(s.error=La),s.complete===void 0&&(s.complete=La);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function La(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return t&&t._delegate?t._delegate:t}class _r{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cw(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lw(t){return t===or?void 0:t}function cw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const hw={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},fw=de.INFO,dw={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},pw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=dw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=fw,this._logHandler=pw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const gw=(t,e)=>e.some(n=>t instanceof n);let Dh,xh;function mw(){return Dh||(Dh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _w(){return xh||(xh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const up=new WeakMap,fl=new WeakMap,hp=new WeakMap,Fa=new WeakMap,tc=new WeakMap;function yw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Fn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&up.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function vw(t){if(fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});fl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ew(t){dl=t(dl)}function ww(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ua(this),e,...n);return hp.set(r,e.sort?e.sort():[e]),Fn(r)}:_w().includes(t)?function(...e){return t.apply(Ua(this),e),Fn(up.get(this))}:function(...e){return Fn(t.apply(Ua(this),e))}}function Iw(t){return typeof t=="function"?ww(t):(t instanceof IDBTransaction&&vw(t),gw(t,mw())?new Proxy(t,dl):t)}function Fn(t){if(t instanceof IDBRequest)return yw(t);if(Fa.has(t))return Fa.get(t);const e=Iw(t);return e!==t&&(Fa.set(t,e),tc.set(e,t)),e}const Ua=t=>tc.get(t);function Tw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Fn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Fn(a.result),c.oldVersion,c.newVersion,Fn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Aw=["get","getKey","getAll","getAllKeys","count"],bw=["put","add","delete","clear"],$a=new Map;function Vh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Aw.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return $a.set(e,i),i}Ew(t=>({...t,get:(e,n,r)=>Vh(e,n)||t.get(e,n,r),has:(e,n)=>!!Vh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Sw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",Mh="0.10.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=new ec("@firebase/app"),Pw="@firebase/app-compat",Cw="@firebase/analytics-compat",kw="@firebase/analytics",Ow="@firebase/app-check-compat",Nw="@firebase/app-check",Dw="@firebase/auth",xw="@firebase/auth-compat",Vw="@firebase/database",Mw="@firebase/database-compat",Lw="@firebase/functions",Fw="@firebase/functions-compat",Uw="@firebase/installations",$w="@firebase/installations-compat",Bw="@firebase/messaging",jw="@firebase/messaging-compat",Hw="@firebase/performance",qw="@firebase/performance-compat",zw="@firebase/remote-config",Kw="@firebase/remote-config-compat",Ww="@firebase/storage",Gw="@firebase/storage-compat",Qw="@firebase/firestore",Jw="@firebase/vertexai-preview",Xw="@firebase/firestore-compat",Yw="firebase",Zw="10.12.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="[DEFAULT]",eI={[pl]:"fire-core",[Pw]:"fire-core-compat",[kw]:"fire-analytics",[Cw]:"fire-analytics-compat",[Nw]:"fire-app-check",[Ow]:"fire-app-check-compat",[Dw]:"fire-auth",[xw]:"fire-auth-compat",[Vw]:"fire-rtdb",[Mw]:"fire-rtdb-compat",[Lw]:"fire-fn",[Fw]:"fire-fn-compat",[Uw]:"fire-iid",[$w]:"fire-iid-compat",[Bw]:"fire-fcm",[jw]:"fire-fcm-compat",[Hw]:"fire-perf",[qw]:"fire-perf-compat",[zw]:"fire-rc",[Kw]:"fire-rc-compat",[Ww]:"fire-gcs",[Gw]:"fire-gcs-compat",[Qw]:"fire-fst",[Xw]:"fire-fst-compat",[Jw]:"fire-vertex","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,tI=new Map,ml=new Map;function Lh(t,e){try{t.container.addComponent(e)}catch(n){yr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kr(t){const e=t.name;if(ml.has(e))return yr.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of uo.values())Lh(n,t);for(const n of tI.values())Lh(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function sn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new oi("app","Firebase",nI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=Zw;function fp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(n||(n=lp()),!n)throw Un.create("no-options");const i=uo.get(s);if(i){if(Ws(n,i.options)&&Ws(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new uw(s);for(const c of ml.values())a.addComponent(c);const l=new rI(n,r,a);return uo.set(s,l),l}function dp(t=gl){const e=uo.get(t);if(!e&&t===gl&&lp())return fp();if(!e)throw Un.create("no-app",{appName:t});return e}function $n(t,e,n){var r;let s=(r=eI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yr.warn(l.join(" "));return}Kr(new _r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="firebase-heartbeat-database",iI=1,Gs="firebase-heartbeat-store";let Ba=null;function pp(){return Ba||(Ba=Tw(sI,iI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Ba}async function oI(t){try{const n=(await pp()).transaction(Gs),r=await n.objectStore(Gs).get(gp(t));return await n.done,r}catch(e){if(e instanceof mn)yr.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yr.warn(n.message)}}}async function Fh(t,e){try{const r=(await pp()).transaction(Gs,"readwrite");await r.objectStore(Gs).put(e,gp(t)),await r.done}catch(n){if(n instanceof mn)yr.warn(n.message);else{const r=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yr.warn(r.message)}}}function gp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=1024,lI=30*24*60*60*1e3;class cI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Uh();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=lI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uh(),{heartbeatsToSend:r,unsentEntries:s}=uI(this._heartbeatsCache.heartbeats),i=co(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Uh(){return new Date().toISOString().substring(0,10)}function uI(t,e=aI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),$h(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),$h(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return YE()?ZE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await oI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $h(t){return co(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){Kr(new _r("platform-logger",e=>new Rw(e),"PRIVATE")),Kr(new _r("heartbeat",e=>new cI(e),"PRIVATE")),$n(pl,Mh,t),$n(pl,Mh,"esm2017"),$n("fire-js","")}fI("");var dI="firebase",pI="10.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$n(dI,pI,"app");function rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function mp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const gI=mp,_p=new oi("auth","Firebase",mp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new ec("@firebase/auth");function mI(t,...e){ho.logLevel<=de.WARN&&ho.warn(`Auth (${ts}): ${t}`,...e)}function Ji(t,...e){ho.logLevel<=de.ERROR&&ho.error(`Auth (${ts}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw ic(t,...e)}function Ft(t,...e){return ic(t,...e)}function sc(t,e,n){const r=Object.assign(Object.assign({},gI()),{[e]:n});return new oi("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return sc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _I(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),sc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ic(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _p.create(t,...e)}function ae(t,e,...n){if(!t)throw ic(e,...n)}function on(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ji(e),new Error(e)}function fn(t,e){t||on(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function yI(){return Bh()==="http:"||Bh()==="https:"}function Bh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yI()||GE()||"connection"in navigator)?navigator.onLine:!0}function EI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=KE()||QE()}get(){return vI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;on("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;on("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;on("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=new li(3e4,6e4);function ac(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ns(t,e,n,r,s={}){return vp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=ai(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yp.fetch()(Ep(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function vp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},wI),e);try{const s=new AI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Li(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Li(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Li(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw Li(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sc(t,d,h);Jt(t,d)}}catch(s){if(s instanceof mn)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function TI(t,e,n,r,s={}){const i=await ns(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ep(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?oc(t.config,s):`${t.config.apiScheme}://${s}`}class AI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ft(this.auth,"network-request-failed")),II.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Li(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ft(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(t,e){return ns(t,"POST","/v1/accounts:delete",e)}async function wp(t,e){return ns(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RI(t,e=!1){const n=_t(t),r=await n.getIdToken(e),s=lc(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(ja(s.auth_time)),issuedAtTime:xs(ja(s.iat)),expirationTime:xs(ja(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ja(t){return Number(t)*1e3}function lc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ji("JWT malformed, contained fewer than 3 sections"),null;try{const s=op(n);return s?JSON.parse(s):(Ji("Failed to decode base64 JWT payload"),null)}catch(s){return Ji("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function jh(t){const e=lc(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&SI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function SI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Qs(t,wp(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ip(i.providerUserInfo):[],l=kI(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new yl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function CI(t){const e=_t(t);await fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ip(t){return t.map(e=>{var{providerId:n}=e,r=rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){const n=await vp(t,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=Ep(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",yp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function NI(t,e){return ns(t,"POST","/v2/accounts:revokeToken",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=jh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await OI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Ur;return r&&(ae(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ur,this.toJSON())}_performRefresh(){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new PI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return RI(this,e)}reload(){return CI(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(sn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Qs(this,bI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(s=n.email)!==null&&s!==void 0?s:void 0,A=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,V=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,K=(h=n.createdAt)!==null&&h!==void 0?h:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:$,emailVerified:ee,isAnonymous:ie,providerData:G,stsTokenManager:R}=n;ae($&&R,e,"internal-error");const y=Ur.fromJSON(this.name,R);ae(typeof $=="string",e,"internal-error"),Rn(p,e.name),Rn(_,e.name),ae(typeof ee=="boolean",e,"internal-error"),ae(typeof ie=="boolean",e,"internal-error"),Rn(A,e.name),Rn(k,e.name),Rn(x,e.name),Rn(V,e.name),Rn(K,e.name),Rn(H,e.name);const m=new an({uid:$,auth:e,email:_,emailVerified:ee,displayName:p,isAnonymous:ie,photoURL:k,phoneNumber:A,tenantId:x,stsTokenManager:y,createdAt:K,lastLoginAt:H});return G&&Array.isArray(G)&&(m.providerData=G.map(w=>Object.assign({},w))),V&&(m._redirectEventId=V),m}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ur;s.updateFromServerResponse(n);const i=new an({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ip(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ur;l.updateFromIdToken(r);const c=new an({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new Map;function ln(t){fn(t instanceof Function,"Expected a class definition");let e=Hh.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Tp.type="NONE";const qh=Tp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t,e,n){return`firebase:${t}:${e}:${n}`}class $r{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Xi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Xi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new $r(ln(qh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||ln(qh);const a=Xi(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){const p=an._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new $r(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new $r(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pp(e))return"Blackberry";if(Cp(e))return"Webos";if(cc(e))return"Safari";if((e.includes("chrome/")||bp(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ap(t=rt()){return/firefox\//i.test(t)}function cc(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bp(t=rt()){return/crios\//i.test(t)}function Rp(t=rt()){return/iemobile/i.test(t)}function Sp(t=rt()){return/android/i.test(t)}function Pp(t=rt()){return/blackberry/i.test(t)}function Cp(t=rt()){return/webos/i.test(t)}function Qo(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DI(t=rt()){var e;return Qo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xI(){return JE()&&document.documentMode===10}function kp(t=rt()){return Qo(t)||Sp(t)||Cp(t)||Pp(t)||/windows phone/i.test(t)||Rp(t)}function VI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e=[]){let n;switch(t){case"Browser":n=zh(rt());break;case"Worker":n=`${zh(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t,e={}){return ns(t,"GET","/v2/passwordPolicy",ac(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=6;class UI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:FI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new MI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await $r.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wp(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(sn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(sn(this.app))return Promise.reject(pr(this));const n=e?_t(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return sn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return sn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LI(this),n=new UI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await NI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ln(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await $r.create(this,[ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&mI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jo(t){return _t(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=sw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BI(t){uc=t}function jI(t){return uc.loadJS(t)}function HI(){return uc.gapiScript}function qI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ws(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function KI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WI(t,e,n){const r=Jo(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Np(e),{host:a,port:l}=GI(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),QI()}function Np(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function GI(t){const e=Np(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Wh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Wh(a)}}}function Wh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return on("not implemented")}_getIdTokenResponse(e){return on("not implemented")}_linkToIdToken(e,n){return on("not implemented")}_getReauthenticationResolver(e){return on("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Br(t,e){return TI(t,"POST","/v1/accounts:signInWithIdp",ac(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI="http://localhost";class vr extends Dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Br(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Br(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Br(e,n)}buildRequest(){const e={requestUri:JI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ai(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ci{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return rn.credential(n,r)}catch{return null}}}rn.GOOGLE_SIGN_IN_METHOD="google.com";rn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends ci{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ci{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await an._fromIdTokenResponse(e,r,s),a=Gh(r);return new Wr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Gh(r);return new Wr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Gh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,po.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new po(e,n,r,s)}}function xp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?po._fromErrorAndOperation(t,i,e,r):i})}async function XI(t,e,n=!1){const r=await Qs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Wr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e,n=!1){const{auth:r}=t;if(sn(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Qs(t,xp(r,s,e,t),n);ae(i.idToken,r,"internal-error");const a=lc(i.idToken);ae(a,r,"internal-error");const{sub:l}=a;return ae(t.uid===l,r,"user-mismatch"),Wr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e,n=!1){if(sn(t.app))return Promise.reject(pr(t));const r="signIn",s=await xp(t,r,e),i=await Wr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function eT(t,e,n,r){return _t(t).onIdTokenChanged(e,n,r)}function tT(t,e,n){return _t(t).beforeAuthStateChanged(e,n)}function nT(t){return _t(t).signOut()}const go="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(go,"1"),this.storage.removeItem(go),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){const t=rt();return cc(t)||Qo(t)}const sT=1e3,iT=10;class Mp extends Vp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rT()&&VI(),this.fallbackToPolling=kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);xI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mp.type="LOCAL";const oT=Mp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp extends Vp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Lp.type="SESSION";const Fp=Lp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await aT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=fc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function cT(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function uT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fT(){return Up()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firebaseLocalStorageDb",dT=1,mo="firebaseLocalStorage",Bp="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(t,e){return t.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function pT(){const t=indexedDB.deleteDatabase($p);return new ui(t).toPromise()}function vl(){const t=indexedDB.open($p,dT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(mo,{keyPath:Bp})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(mo)?e(r):(r.close(),await pT(),e(await vl()))})})}async function Qh(t,e,n){const r=Yo(t,!0).put({[Bp]:e,value:n});return new ui(r).toPromise()}async function gT(t,e){const n=Yo(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function Jh(t,e){const n=Yo(t,!0).delete(e);return new ui(n).toPromise()}const mT=800,_T=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_T)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Up()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xo._getInstance(fT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uT(),!this.activeServiceWorker)return;this.sender=new lT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await Qh(e,go,"1"),await Jh(e,go),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Qh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yo(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const yT=jp;new li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hp(t,e){return e?ln(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Br(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Br(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Br(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vT(t){return ZI(t.auth,new dc(t),t.bypassAuthState)}function ET(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),YI(n,new dc(t),t.bypassAuthState)}async function wT(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),XI(n,new dc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vT;case"linkViaPopup":case"linkViaRedirect":return wT;case"reauthViaPopup":case"reauthViaRedirect":return ET;default:Jt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=new li(2e3,1e4);async function TT(t,e,n){if(sn(t.app))return Promise.reject(Ft(t,"operation-not-supported-in-this-environment"));const r=Jo(t);_I(t,e,hc);const s=Hp(r,n);return new cr(r,"signInViaPopup",e,s).executeNotNull()}class cr extends qp{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IT.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT="pendingRedirect",Yi=new Map;class bT extends qp{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yi.get(this.auth._key());if(!e){try{const r=await RT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yi.set(this.auth._key(),e)}return this.bypassAuthState||Yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RT(t,e){const n=CT(e),r=PT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ST(t,e){Yi.set(t._key(),e)}function PT(t){return ln(t._redirectPersistence)}function CT(t){return Xi(AT,t.config.apiKey,t.name)}async function kT(t,e,n=!1){if(sn(t.app))return Promise.reject(pr(t));const r=Jo(t),s=Hp(r,e),a=await new bT(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=10*60*1e3;class NT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ft(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xh(e))}saveEventToCache(e){this.cachedEventUids.add(Xh(e)),this.lastProcessedEventTime=Date.now()}}function Xh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e={}){return ns(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MT=/^https?/;async function LT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xT(t);for(const n of e)try{if(FT(n))return}catch{}Jt(t,"unauthorized-domain")}function FT(t){const e=_l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!MT.test(n))return!1;if(VT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT=new li(3e4,6e4);function Yh(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $T(t){return new Promise((e,n)=>{var r,s,i;function a(){Yh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yh(),n(Ft(t,"network-request-failed"))},timeout:UT.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)a();else{const l=qI("iframefcb");return Kt()[l]=()=>{gapi.load?a():n(Ft(t,"network-request-failed"))},jI(`${HI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function BT(t){return Zi=Zi||$T(t),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT=new li(5e3,15e3),HT="__/auth/iframe",qT="emulator/auth/iframe",zT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WT(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oc(e,qT):`https://${t.config.authDomain}/${HT}`,r={apiKey:e.apiKey,appName:t.name,v:ts},s=KT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ai(r).slice(1)}`}async function GT(t){const e=await BT(t),n=Kt().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:WT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ft(t,"network-request-failed"),l=Kt().setTimeout(()=>{i(a)},jT.get());function c(){Kt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},JT=500,XT=600,YT="_blank",ZT="http://localhost";class Zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function e2(t,e,n,r=JT,s=XT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},QT),{width:r.toString(),height:s.toString(),top:i,left:a}),h=rt().toLowerCase();n&&(l=bp(h)?YT:n),Ap(h)&&(e=e||ZT,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[A,k])=>`${_}${A}=${k},`,"");if(DI(h)&&l!=="_self")return t2(e||"",l),new Zh(null);const p=window.open(e||"",l,d);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Zh(p)}function t2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="__/auth/handler",r2="emulator/auth/handler",s2=encodeURIComponent("fac");async function ef(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:s};if(e instanceof hc){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",rw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof ci){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${s2}=${encodeURIComponent(c)}`:"";return`${i2(t)}?${ai(l).slice(1)}${h}`}function i2({config:t}){return t.emulator?oc(t,r2):`https://${t.authDomain}/${n2}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="webStorageSupport";class o2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fp,this._completeRedirectFn=kT,this._overrideRedirectResult=ST}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await ef(e,n,r,_l(),s);return e2(e,a,fc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ef(e,n,r,_l(),s);return cT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GT(e),r=new NT(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ha,{type:Ha},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ha];a!==void 0&&n(!!a),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kp()||cc()||Qo()}}const a2=o2;var tf="@firebase/auth",nf="1.7.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u2(t){Kr(new _r("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ae(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Op(t)},h=new $I(r,s,i,c);return KI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new _r("auth-internal",e=>{const n=Jo(e.getProvider("auth").getImmediate());return(r=>new l2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(tf,nf,c2(t)),$n(tf,nf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h2=5*60,f2=cp("authIdTokenMaxAge")||h2;let rf=null;const d2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>f2)return;const s=n==null?void 0:n.token;rf!==s&&(rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function p2(t=dp()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zI(t,{popupRedirectResolver:a2,persistence:[yT,oT,Fp]}),r=cp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=d2(i.toString());tT(n,a,()=>a(n.currentUser)),eT(n,l=>a(l))}}const s=ap("auth");return s&&WI(n,`http://${s}`),n}function g2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}BI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ft("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",g2().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u2("Browser");var sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function m(){}m.prototype=y.prototype,R.D=y.prototype,R.prototype=new m,R.prototype.constructor=R,R.C=function(w,b,T){for(var E=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)E[Ie-2]=arguments[Ie];return y.prototype[b].apply(w,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,m){m||(m=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(m++)|y.charCodeAt(m++)<<8|y.charCodeAt(m++)<<16|y.charCodeAt(m++)<<24;else for(b=0;16>b;++b)w[b]=y[m++]|y[m++]<<8|y[m++]<<16|y[m++]<<24;y=R.g[0],m=R.g[1],b=R.g[2];var T=R.g[3],E=y+(T^m&(b^T))+w[0]+3614090360&4294967295;y=m+(E<<7&4294967295|E>>>25),E=T+(b^y&(m^b))+w[1]+3905402710&4294967295,T=y+(E<<12&4294967295|E>>>20),E=b+(m^T&(y^m))+w[2]+606105819&4294967295,b=T+(E<<17&4294967295|E>>>15),E=m+(y^b&(T^y))+w[3]+3250441966&4294967295,m=b+(E<<22&4294967295|E>>>10),E=y+(T^m&(b^T))+w[4]+4118548399&4294967295,y=m+(E<<7&4294967295|E>>>25),E=T+(b^y&(m^b))+w[5]+1200080426&4294967295,T=y+(E<<12&4294967295|E>>>20),E=b+(m^T&(y^m))+w[6]+2821735955&4294967295,b=T+(E<<17&4294967295|E>>>15),E=m+(y^b&(T^y))+w[7]+4249261313&4294967295,m=b+(E<<22&4294967295|E>>>10),E=y+(T^m&(b^T))+w[8]+1770035416&4294967295,y=m+(E<<7&4294967295|E>>>25),E=T+(b^y&(m^b))+w[9]+2336552879&4294967295,T=y+(E<<12&4294967295|E>>>20),E=b+(m^T&(y^m))+w[10]+4294925233&4294967295,b=T+(E<<17&4294967295|E>>>15),E=m+(y^b&(T^y))+w[11]+2304563134&4294967295,m=b+(E<<22&4294967295|E>>>10),E=y+(T^m&(b^T))+w[12]+1804603682&4294967295,y=m+(E<<7&4294967295|E>>>25),E=T+(b^y&(m^b))+w[13]+4254626195&4294967295,T=y+(E<<12&4294967295|E>>>20),E=b+(m^T&(y^m))+w[14]+2792965006&4294967295,b=T+(E<<17&4294967295|E>>>15),E=m+(y^b&(T^y))+w[15]+1236535329&4294967295,m=b+(E<<22&4294967295|E>>>10),E=y+(b^T&(m^b))+w[1]+4129170786&4294967295,y=m+(E<<5&4294967295|E>>>27),E=T+(m^b&(y^m))+w[6]+3225465664&4294967295,T=y+(E<<9&4294967295|E>>>23),E=b+(y^m&(T^y))+w[11]+643717713&4294967295,b=T+(E<<14&4294967295|E>>>18),E=m+(T^y&(b^T))+w[0]+3921069994&4294967295,m=b+(E<<20&4294967295|E>>>12),E=y+(b^T&(m^b))+w[5]+3593408605&4294967295,y=m+(E<<5&4294967295|E>>>27),E=T+(m^b&(y^m))+w[10]+38016083&4294967295,T=y+(E<<9&4294967295|E>>>23),E=b+(y^m&(T^y))+w[15]+3634488961&4294967295,b=T+(E<<14&4294967295|E>>>18),E=m+(T^y&(b^T))+w[4]+3889429448&4294967295,m=b+(E<<20&4294967295|E>>>12),E=y+(b^T&(m^b))+w[9]+568446438&4294967295,y=m+(E<<5&4294967295|E>>>27),E=T+(m^b&(y^m))+w[14]+3275163606&4294967295,T=y+(E<<9&4294967295|E>>>23),E=b+(y^m&(T^y))+w[3]+4107603335&4294967295,b=T+(E<<14&4294967295|E>>>18),E=m+(T^y&(b^T))+w[8]+1163531501&4294967295,m=b+(E<<20&4294967295|E>>>12),E=y+(b^T&(m^b))+w[13]+2850285829&4294967295,y=m+(E<<5&4294967295|E>>>27),E=T+(m^b&(y^m))+w[2]+4243563512&4294967295,T=y+(E<<9&4294967295|E>>>23),E=b+(y^m&(T^y))+w[7]+1735328473&4294967295,b=T+(E<<14&4294967295|E>>>18),E=m+(T^y&(b^T))+w[12]+2368359562&4294967295,m=b+(E<<20&4294967295|E>>>12),E=y+(m^b^T)+w[5]+4294588738&4294967295,y=m+(E<<4&4294967295|E>>>28),E=T+(y^m^b)+w[8]+2272392833&4294967295,T=y+(E<<11&4294967295|E>>>21),E=b+(T^y^m)+w[11]+1839030562&4294967295,b=T+(E<<16&4294967295|E>>>16),E=m+(b^T^y)+w[14]+4259657740&4294967295,m=b+(E<<23&4294967295|E>>>9),E=y+(m^b^T)+w[1]+2763975236&4294967295,y=m+(E<<4&4294967295|E>>>28),E=T+(y^m^b)+w[4]+1272893353&4294967295,T=y+(E<<11&4294967295|E>>>21),E=b+(T^y^m)+w[7]+4139469664&4294967295,b=T+(E<<16&4294967295|E>>>16),E=m+(b^T^y)+w[10]+3200236656&4294967295,m=b+(E<<23&4294967295|E>>>9),E=y+(m^b^T)+w[13]+681279174&4294967295,y=m+(E<<4&4294967295|E>>>28),E=T+(y^m^b)+w[0]+3936430074&4294967295,T=y+(E<<11&4294967295|E>>>21),E=b+(T^y^m)+w[3]+3572445317&4294967295,b=T+(E<<16&4294967295|E>>>16),E=m+(b^T^y)+w[6]+76029189&4294967295,m=b+(E<<23&4294967295|E>>>9),E=y+(m^b^T)+w[9]+3654602809&4294967295,y=m+(E<<4&4294967295|E>>>28),E=T+(y^m^b)+w[12]+3873151461&4294967295,T=y+(E<<11&4294967295|E>>>21),E=b+(T^y^m)+w[15]+530742520&4294967295,b=T+(E<<16&4294967295|E>>>16),E=m+(b^T^y)+w[2]+3299628645&4294967295,m=b+(E<<23&4294967295|E>>>9),E=y+(b^(m|~T))+w[0]+4096336452&4294967295,y=m+(E<<6&4294967295|E>>>26),E=T+(m^(y|~b))+w[7]+1126891415&4294967295,T=y+(E<<10&4294967295|E>>>22),E=b+(y^(T|~m))+w[14]+2878612391&4294967295,b=T+(E<<15&4294967295|E>>>17),E=m+(T^(b|~y))+w[5]+4237533241&4294967295,m=b+(E<<21&4294967295|E>>>11),E=y+(b^(m|~T))+w[12]+1700485571&4294967295,y=m+(E<<6&4294967295|E>>>26),E=T+(m^(y|~b))+w[3]+2399980690&4294967295,T=y+(E<<10&4294967295|E>>>22),E=b+(y^(T|~m))+w[10]+4293915773&4294967295,b=T+(E<<15&4294967295|E>>>17),E=m+(T^(b|~y))+w[1]+2240044497&4294967295,m=b+(E<<21&4294967295|E>>>11),E=y+(b^(m|~T))+w[8]+1873313359&4294967295,y=m+(E<<6&4294967295|E>>>26),E=T+(m^(y|~b))+w[15]+4264355552&4294967295,T=y+(E<<10&4294967295|E>>>22),E=b+(y^(T|~m))+w[6]+2734768916&4294967295,b=T+(E<<15&4294967295|E>>>17),E=m+(T^(b|~y))+w[13]+1309151649&4294967295,m=b+(E<<21&4294967295|E>>>11),E=y+(b^(m|~T))+w[4]+4149444226&4294967295,y=m+(E<<6&4294967295|E>>>26),E=T+(m^(y|~b))+w[11]+3174756917&4294967295,T=y+(E<<10&4294967295|E>>>22),E=b+(y^(T|~m))+w[2]+718787259&4294967295,b=T+(E<<15&4294967295|E>>>17),E=m+(T^(b|~y))+w[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+T&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var m=y-this.blockSize,w=this.B,b=this.h,T=0;T<y;){if(b==0)for(;T<=m;)s(this,R,T),T+=this.blockSize;if(typeof R=="string"){for(;T<y;)if(w[b++]=R.charCodeAt(T++),b==this.blockSize){s(this,w),b=0;break}}else for(;T<y;)if(w[b++]=R[T++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var m=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=m&255,m/=256;for(this.u(R),R=Array(16),y=m=0;4>y;++y)for(var w=0;32>w;w+=8)R[m++]=this.g[y]>>>w&255;return R};function i(R,y){var m=l;return Object.prototype.hasOwnProperty.call(m,R)?m[R]:m[R]=y(R)}function a(R,y){this.h=y;for(var m=[],w=!0,b=R.length-1;0<=b;b--){var T=R[b]|0;w&&T==y||(m[b]=T,w=!1)}this.g=m}var l={};function c(R){return-128<=R&&128>R?i(R,function(y){return new a([y|0],0>y?-1:0)}):new a([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return V(h(-R));for(var y=[],m=1,w=0;R>=m;w++)y[w]=R/m|0,m*=4294967296;return new a(y,0)}function d(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return V(d(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=h(Math.pow(y,8)),w=p,b=0;b<R.length;b+=8){var T=Math.min(8,R.length-b),E=parseInt(R.substring(b,b+T),y);8>T?(T=h(Math.pow(y,T)),w=w.j(T).add(h(E))):(w=w.j(m),w=w.add(h(E)))}return w}var p=c(0),_=c(1),A=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-V(this).m();for(var R=0,y=1,m=0;m<this.g.length;m++){var w=this.i(m);R+=(0<=w?w:4294967296+w)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(k(this))return"0";if(x(this))return"-"+V(this).toString(R);for(var y=h(Math.pow(R,6)),m=this,w="";;){var b=ee(m,y).g;m=K(m,b.j(y));var T=((0<m.g.length?m.g[0]:m.h)>>>0).toString(R);if(m=b,k(m))return T+w;for(;6>T.length;)T="0"+T;w=T+w}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function k(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function x(R){return R.h==-1}t.l=function(R){return R=K(this,R),x(R)?-1:k(R)?0:1};function V(R){for(var y=R.g.length,m=[],w=0;w<y;w++)m[w]=~R.g[w];return new a(m,~R.h).add(_)}t.abs=function(){return x(this)?V(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),m=[],w=0,b=0;b<=y;b++){var T=w+(this.i(b)&65535)+(R.i(b)&65535),E=(T>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);w=E>>>16,T&=65535,E&=65535,m[b]=E<<16|T}return new a(m,m[m.length-1]&-2147483648?-1:0)};function K(R,y){return R.add(V(y))}t.j=function(R){if(k(this)||k(R))return p;if(x(this))return x(R)?V(this).j(V(R)):V(V(this).j(R));if(x(R))return V(this.j(V(R)));if(0>this.l(A)&&0>R.l(A))return h(this.m()*R.m());for(var y=this.g.length+R.g.length,m=[],w=0;w<2*y;w++)m[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<R.g.length;b++){var T=this.i(w)>>>16,E=this.i(w)&65535,Ie=R.i(b)>>>16,xe=R.i(b)&65535;m[2*w+2*b]+=E*xe,H(m,2*w+2*b),m[2*w+2*b+1]+=T*xe,H(m,2*w+2*b+1),m[2*w+2*b+1]+=E*Ie,H(m,2*w+2*b+1),m[2*w+2*b+2]+=T*Ie,H(m,2*w+2*b+2)}for(w=0;w<y;w++)m[w]=m[2*w+1]<<16|m[2*w];for(w=y;w<2*y;w++)m[w]=0;return new a(m,0)};function H(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function $(R,y){this.g=R,this.h=y}function ee(R,y){if(k(y))throw Error("division by zero");if(k(R))return new $(p,p);if(x(R))return y=ee(V(R),y),new $(V(y.g),V(y.h));if(x(y))return y=ee(R,V(y)),new $(V(y.g),y.h);if(30<R.g.length){if(x(R)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var m=_,w=y;0>=w.l(R);)m=ie(m),w=ie(w);var b=G(m,1),T=G(w,1);for(w=G(w,2),m=G(m,2);!k(w);){var E=T.add(w);0>=E.l(R)&&(b=b.add(m),T=E),w=G(w,1),m=G(m,1)}return y=K(R,b.j(y)),new $(b,y)}for(b=p;0<=R.l(y);){for(m=Math.max(1,Math.floor(R.m()/y.m())),w=Math.ceil(Math.log(m)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),T=h(m),E=T.j(y);x(E)||0<E.l(R);)m-=w,T=h(m),E=T.j(y);k(T)&&(T=_),b=b.add(T),R=K(R,E)}return new $(b,R)}t.A=function(R){return ee(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),m=[],w=0;w<y;w++)m[w]=this.i(w)&R.i(w);return new a(m,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),m=[],w=0;w<y;w++)m[w]=this.i(w)|R.i(w);return new a(m,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),m=[],w=0;w<y;w++)m[w]=this.i(w)^R.i(w);return new a(m,this.h^R.h)};function ie(R){for(var y=R.g.length+1,m=[],w=0;w<y;w++)m[w]=R.i(w)<<1|R.i(w-1)>>>31;return new a(m,R.h)}function G(R,y){var m=y>>5;y%=32;for(var w=R.g.length-m,b=[],T=0;T<w;T++)b[T]=0<y?R.i(T+m)>>>y|R.i(T+m+1)<<32-y:R.i(T+m);return new a(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Kp=a}).apply(typeof sf<"u"?sf:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,Gp,Rs,Qp,eo,El,Jp,Xp,Yp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in f))break e;f=f[S]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,S={next:function(){if(!g&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,_.apply(null,arguments)}function A(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function k(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,S,C){for(var q=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)q[Pe-2]=arguments[Pe];return u.prototype[S].apply(g,q)}}function x(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function V(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const S=o.length||0,C=g.length||0;o.length=S+C;for(let q=0;q<C;q++)o[S+q]=g[q]}else o.push(g)}}class K{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function H(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function ee(o){return ee[" "](o),o}ee[" "]=function(){};var ie=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function G(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function R(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)o[f]=g[f];for(let C=0;C<m.length;C++)f=m[C],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function T(o){l.setTimeout(()=>{throw o},0)}function E(){var o=vt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ie{constructor(){this.h=this.g=null}add(u,f){const g=xe.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var xe=new K(()=>new he,o=>o.reset());class he{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,fe=!1,vt=new Ie,xt=()=>{const o=l.Promise.resolve(void 0);ge=()=>{o.then(St)}};var St=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){T(f)}var u=xe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}fe=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var _n=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function $t(o,u){if(Me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ie){e:{try{ee(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ke[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&$t.aa.h.call(this)}}k($t,Me);var Ke={2:"touch",3:"pen",4:"mouse"};$t.prototype.h=function(){$t.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var N="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(o,u,f,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=S,this.key=++J,this.da=this.fa=!1}function X(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function me(o){this.src=o,this.g={},this.h=0}me.prototype.add=function(o,u,f,g,S){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var q=v(o,u,g,S);return-1<q?(u=o[q],f||(u.fa=!1)):(u=new W(u,this.src,C,!!g,S),u.fa=f,o.push(u)),u};function Se(o,u){var f=u.type;if(f in o.g){var g=o.g[f],S=Array.prototype.indexOf.call(g,u,void 0),C;(C=0<=S)&&Array.prototype.splice.call(g,S,1),C&&(X(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function v(o,u,f,g){for(var S=0;S<o.length;++S){var C=o[S];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==g)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),P={};function D(o,u,f,g,S){if(Array.isArray(u)){for(var C=0;C<u.length;C++)D(o,u[C],f,g,S);return null}return f=te(f),o&&o[N]?o.K(u,f,h(g)?!!g.capture:!!g,S):O(o,u,f,!1,g,S)}function O(o,u,f,g,S,C){if(!u)throw Error("Invalid event type");var q=h(S)?!!S.capture:!!S,Pe=Q(o);if(Pe||(o[I]=Pe=new me(o)),f=Pe.add(u,f,g,q,C),f.proxy)return f;if(g=B(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)_n||(S=q),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(j(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function B(){function o(f){return u.call(o.src,o.listener,f)}const u=M;return o}function z(o,u,f,g,S){if(Array.isArray(u))for(var C=0;C<u.length;C++)z(o,u[C],f,g,S);else g=h(g)?!!g.capture:!!g,f=te(f),o&&o[N]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=v(C,f,g,S),-1<f&&(X(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,f,g,S)),(f=-1<o?u[o]:null)&&F(f))}function F(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[N])Se(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(j(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=Q(u))?(Se(f,o),f.h==0&&(f.src=null,u[I]=null)):X(o)}}}function j(o){return o in P?P[o]:P[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new $t(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&F(o),o=f.call(g,u)}return o}function Q(o){return o=o[I],o instanceof me?o:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(o){return typeof o=="function"?o:(o[ne]||(o[ne]=function(u){return o.handleEvent(u)}),o[ne])}function Z(){Ve.call(this),this.i=new me(this),this.M=this,this.F=null}k(Z,Ve),Z.prototype[N]=!0,Z.prototype.removeEventListener=function(o,u,f,g){z(this,o,u,f,g)};function se(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Me(u,o);else if(u instanceof Me)u.target=u.target||o;else{var S=u;u=new Me(g,o),w(u,S)}if(S=!0,f)for(var C=f.length-1;0<=C;C--){var q=u.g=f[C];S=Te(q,g,!0,u)&&S}if(q=u.g=o,S=Te(q,g,!0,u)&&S,S=Te(q,g,!1,u)&&S,f)for(C=0;C<f.length;C++)q=u.g=f[C],S=Te(q,g,!1,u)&&S}Z.prototype.N=function(){if(Z.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)X(f[g]);delete o.g[u],o.h--}}this.F=null},Z.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},Z.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function Te(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,C=0;C<u.length;++C){var q=u[C];if(q&&!q.da&&q.capture==f){var Pe=q.listener,Ye=q.ha||q.src;q.fa&&Se(o.i,q),S=Pe.call(Ye,g)!==!1&&S}}return S&&!g.defaultPrevented}function ye(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ue(o){o.g=ye(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Et extends Ve{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pt(o){Ve.call(this),this.h=o,this.g={}}k(Pt,Ve);var os=[];function yn(o){G(o.g,function(u,f){this.g.hasOwnProperty(f)&&F(u)},o),o.g={}}Pt.prototype.N=function(){Pt.aa.N.call(this),yn(this)},Pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var br=l.JSON.stringify,ht=l.JSON.parse,Ct=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Rr(){}Rr.prototype.h=null;function xc(o){return o.h||(o.h=o.i())}function Vc(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ua(){Me.call(this,"d")}k(ua,Me);function ha(){Me.call(this,"c")}k(ha,Me);var Yn={},Mc=null;function gi(){return Mc=Mc||new Z}Yn.La="serverreachability";function Lc(o){Me.call(this,Yn.La,o)}k(Lc,Me);function ls(o){const u=gi();se(u,new Lc(u))}Yn.STAT_EVENT="statevent";function Fc(o,u){Me.call(this,Yn.STAT_EVENT,o),this.stat=u}k(Fc,Me);function ft(o){const u=gi();se(u,new Fc(u,o))}Yn.Ma="timingevent";function Uc(o,u){Me.call(this,Yn.Ma,o),this.size=u}k(Uc,Me);function cs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function Qg(o,u,f,g,S,C){o.info(function(){if(o.g)if(C)for(var q="",Pe=C.split("&"),Ye=0;Ye<Pe.length;Ye++){var we=Pe[Ye].split("=");if(1<we.length){var st=we[0];we=we[1];var it=st.split("_");q=2<=it.length&&it[1]=="type"?q+(st+"="+we+"&"):q+(st+"=redacted&")}}else q=null;else q=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+f+`
`+q})}function Jg(o,u,f,g,S,C,q){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+f+`
`+C+" "+q})}function Sr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Yg(o,f)+(g?" "+g:"")})}function Xg(o,u){o.info(function(){return"TIMEOUT: "+u})}us.prototype.info=function(){};function Yg(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var C=S[0];if(C!="noop"&&C!="stop"&&C!="close")for(var q=1;q<S.length;q++)S[q]=""}}}}return br(f)}catch{return u}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$c={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fa;function _i(){}k(_i,Rr),_i.prototype.g=function(){return new XMLHttpRequest},_i.prototype.i=function(){return{}},fa=new _i;function vn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new Pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bc}function Bc(){this.i=null,this.g="",this.h=!1}var jc={},da={};function pa(o,u,f){o.L=1,o.v=wi(Zt(u)),o.m=f,o.P=!0,Hc(o,null)}function Hc(o,u){o.F=Date.now(),yi(o),o.A=Zt(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),ru(f.i,"t",g),o.C=0,f=o.j.J,o.h=new Bc,o.g=wu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Et(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(os[0]=S.toString()),S=os);for(var C=0;C<S.length;C++){var q=D(f,S[C],g||u.handleEvent,!1,u.h||u);if(!q)break;u.g[q.key]=q}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ls(),Qg(o.i,o.u,o.A,o.l,o.R,o.m)}vn.prototype.ca=function(o){o=o.target;const u=this.M;u&&en(o)==3?u.j():this.Y(o)},vn.prototype.Y=function(o){try{if(o==this.g)e:{const it=en(this.g);var u=this.g.Ba();const kr=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||uu(this.g)))){this.J||it!=4||u==7||(u==8||0>=kr?ls(3):ls(2)),ga(this);var f=this.g.Z();this.X=f;t:if(qc(this)){var g=uu(this.g);o="";var S=g.length,C=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),hs(this);var q="";break t}this.h.i=new l.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(C&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=f==200,Jg(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ye=this.g;if((Pe=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(Pe)){var we=Pe;break t}}we=null}if(f=we)Sr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ma(this,f);else{this.o=!1,this.s=3,ft(12),Zn(this),hs(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<q.length;)if(Vt=Zg(this,q),Vt==da){it==4&&(this.s=4,ft(14),f=!1),Sr(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==jc){this.s=4,ft(15),Sr(this.i,this.l,q,"[Invalid Chunk]"),f=!1;break}else Sr(this.i,this.l,Vt,null),ma(this,Vt);if(qc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||q.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Sr(this.i,this.l,q,"[Invalid Chunked Response]"),Zn(this),hs(this);else if(0<q.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Ia(st),st.M=!0,ft(11))}}else Sr(this.i,this.l,q,null),ma(this,q);it==4&&Zn(this),this.o&&!this.J&&(it==4?_u(this.j,this):(this.o=!1,yi(this)))}else mm(this.g),f==400&&0<q.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Zn(this),hs(this)}}}catch{}finally{}};function qc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Zg(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?da:(f=Number(u.substring(f,g)),isNaN(f)?jc:(g+=1,g+f>u.length?da:(u=u.slice(g,g+f),o.C=g+f,u)))}vn.prototype.cancel=function(){this.J=!0,Zn(this)};function yi(o){o.S=Date.now()+o.I,zc(o,o.I)}function zc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=cs(_(o.ba,o),u)}function ga(o){o.B&&(l.clearTimeout(o.B),o.B=null)}vn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Xg(this.i,this.A),this.L!=2&&(ls(),ft(17)),Zn(this),this.s=2,hs(this)):zc(this,this.S-o)};function hs(o){o.j.G==0||o.J||_u(o.j,o)}function Zn(o){ga(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,yn(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ma(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||_a(f.h,o))){if(!o.K&&_a(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ri(f),Ai(f);else break e;wa(f),ft(18)}}else f.za=S[1],0<f.za-f.T&&37500>S[2]&&f.F&&f.v==0&&!f.C&&(f.C=cs(_(f.Za,f),6e3));if(1>=Gc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else tr(f,11)}else if((o.K||f.g==o)&&Ri(f),!H(u))for(S=f.Da.g.parse(u),u=0;u<S.length;u++){let we=S[u];if(f.T=we[0],we=we[1],f.G==2)if(we[0]=="c"){f.K=we[1],f.ia=we[2];const st=we[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const it=we[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const kr=we[5];kr!=null&&typeof kr=="number"&&0<kr&&(g=1.5*kr,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Vt=o.g;if(Vt){const Pi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Pi){var C=g.h;C.g||Pi.indexOf("spdy")==-1&&Pi.indexOf("quic")==-1&&Pi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(ya(C,C.h),C.h=null))}if(g.D){const Ta=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ta&&(g.ya=Ta,ke(g.I,g.D,Ta))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var q=o;if(g.qa=Eu(g,g.J?g.ia:null,g.W),q.K){Qc(g.h,q);var Pe=q,Ye=g.L;Ye&&(Pe.I=Ye),Pe.B&&(ga(Pe),yi(Pe)),g.g=q}else gu(g);0<f.i.length&&bi(f)}else we[0]!="stop"&&we[0]!="close"||tr(f,7);else f.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?tr(f,7):Ea(f):we[0]!="noop"&&f.l&&f.l.ta(we),f.v=0)}}ls(4)}catch{}}var em=class{constructor(o,u){this.g=o,this.map=u}};function Kc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Gc(o){return o.h?1:o.g?o.g.size:0}function _a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ya(o,u){o.g?o.g.add(u):o.h=u}function Qc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Kc.prototype.cancel=function(){if(this.i=Jc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Jc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return x(o.i)}function tm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function nm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function Xc(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=nm(o),g=tm(o),S=g.length,C=0;C<S;C++)u.call(void 0,g[C],f&&f[C],o)}var Yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),S=null;if(0<=g){var C=o[f].substring(0,g);S=o[f].substring(g+1)}else C=o[f];u(C,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,vi(this,o.j),this.o=o.o,this.g=o.g,Ei(this,o.s),this.l=o.l;var u=o.i,f=new ps;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Zc(this,f),this.m=o.m}else o&&(u=String(o).match(Yc))?(this.h=!1,vi(this,u[1]||"",!0),this.o=fs(u[2]||""),this.g=fs(u[3]||"",!0),Ei(this,u[4]),this.l=fs(u[5]||"",!0),Zc(this,u[6]||"",!0),this.m=fs(u[7]||"")):(this.h=!1,this.i=new ps(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ds(u,eu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ds(u,eu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ds(f,f.charAt(0)=="/"?om:im,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ds(f,lm)),o.join("")};function Zt(o){return new er(o)}function vi(o,u,f){o.j=f?fs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ei(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Zc(o,u,f){u instanceof ps?(o.i=u,cm(o.i,o.h)):(f||(u=ds(u,am)),o.i=new ps(u,o.h))}function ke(o,u,f){o.i.set(u,f)}function wi(o){return ke(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function fs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ds(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,sm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function sm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var eu=/[#\/\?@]/g,im=/[#\?:]/g,om=/[#\?]/g,am=/[#\?@]/g,lm=/#/g;function ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function En(o){o.g||(o.g=new Map,o.h=0,o.i&&rm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ps.prototype,t.add=function(o,u){En(this),this.i=null,o=Pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function tu(o,u){En(o),u=Pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function nu(o,u){return En(o),u=Pr(o,u),o.g.has(u)}t.forEach=function(o,u){En(this),this.g.forEach(function(f,g){f.forEach(function(S){o.call(u,S,g,this)},this)},this)},t.na=function(){En(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const S=o[g];for(let C=0;C<S.length;C++)f.push(u[g])}return f},t.V=function(o){En(this);let u=[];if(typeof o=="string")nu(this,o)&&(u=u.concat(this.g.get(Pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return En(this),this.i=null,o=Pr(this,o),nu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ru(o,u,f){tu(o,u),0<f.length&&(o.i=null,o.g.set(Pr(o,u),x(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const C=encodeURIComponent(String(g)),q=this.V(g);for(g=0;g<q.length;g++){var S=C;q[g]!==""&&(S+="="+encodeURIComponent(String(q[g]))),o.push(S)}}return this.i=o.join("&")};function Pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function cm(o,u){u&&!o.j&&(En(o),o.i=null,o.g.forEach(function(f,g){var S=g.toLowerCase();g!=S&&(tu(this,g),ru(this,S,f))},o)),o.j=u}function um(o,u){const f=new us;if(l.Image){const g=new Image;g.onload=A(wn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=A(wn,f,"TestLoadImage: error",!1,u,g),g.onabort=A(wn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=A(wn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function hm(o,u){const f=new us,g=new AbortController,S=setTimeout(()=>{g.abort(),wn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?wn(f,"TestPingServer: ok",!0,u):wn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),wn(f,"TestPingServer: error",!1,u)})}function wn(o,u,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function fm(){this.g=new Ct}function dm(o,u,f){const g=f||"";try{Xc(o,function(S,C){let q=S;h(S)&&(q=br(S)),u.push(g+C+"="+encodeURIComponent(q))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function gs(o){this.l=o.Ub||null,this.j=o.eb||!1}k(gs,Rr),gs.prototype.g=function(){return new Ii(this.l,this.j)},gs.prototype.i=function(o){return function(){return o}}({});function Ii(o,u){Z.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ii,Z),t=Ii.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,_s(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;su(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function su(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ms(this):_s(this),this.readyState==3&&su(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ms(this))},t.Qa=function(o){this.g&&(this.response=o,ms(this))},t.ga=function(){this.g&&ms(this)};function ms(o){o.readyState=4,o.l=null,o.j=null,o.v=null,_s(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function _s(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ii.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function iu(o){let u="";return G(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function va(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=iu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):ke(o,u,f))}function Fe(o){Z.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Fe,Z);var pm=/^https?$/i,gm=["POST","PUT"];t=Fe.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fa.g(),this.v=this.o?xc(this.o):xc(fa),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){ou(this,C);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(gm,u,void 0))||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,q]of f)this.g.setRequestHeader(C,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){ou(this,C)}};function ou(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,au(o),Ti(o)}function au(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),Ti(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Fe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lu(this):this.bb())},t.bb=function(){lu(this)};function lu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||en(o)!=4||o.Z()!=2)){if(o.u&&en(o)==4)ye(o.Ea,0,o);else if(se(o,"readystatechange"),en(o)==4){o.h=!1;try{const q=o.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=q===0){var S=String(o.D).match(Yc)[1]||null;!S&&l.self&&l.self.location&&(S=l.self.location.protocol.slice(0,-1)),g=!pm.test(S?S.toLowerCase():"")}f=g}if(f)se(o,"complete"),se(o,"success");else{o.m=6;try{var C=2<en(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",au(o)}}finally{Ti(o)}}}}function Ti(o,u){if(o.g){cu(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{f.onreadystatechange=g}catch{}}}function cu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function en(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),ht(u)}};function uu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mm(o){const u={};o=(o.g&&2<=en(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(H(o[g]))continue;var f=b(o[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[S]||[];u[S]=C,C.push(f)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function hu(o){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ys("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ys("baseRetryDelayMs",5e3,o),this.cb=ys("retryDelaySeedMs",1e4,o),this.Wa=ys("forwardChannelMaxRetries",2,o),this.wa=ys("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Kc(o&&o.concurrentRequestLimit),this.Da=new fm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){ft(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Eu(this,null,this.W),bi(this)};function Ea(o){if(fu(o),o.G==3){var u=o.U++,f=Zt(o.I);if(ke(f,"SID",o.K),ke(f,"RID",u),ke(f,"TYPE","terminate"),vs(o,f),u=new vn(o,o.j,u),u.L=2,u.v=wi(Zt(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=wu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),yi(u)}vu(o)}function Ai(o){o.g&&(Ia(o),o.g.cancel(),o.g=null)}function fu(o){Ai(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ri(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function bi(o){if(!Wc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||xt(),fe||(ge(),fe=!0),vt.add(u,o),o.B=0}}function _m(o,u){return Gc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=cs(_(o.Ga,o,u),yu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new vn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=y(C),w(C,this.S)):C=this.S),this.m!==null||this.O||(S.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=pu(this,S,u),f=Zt(this.I),ke(f,"RID",o),ke(f,"CVER",22),this.D&&ke(f,"X-HTTP-Session-Id",this.D),vs(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(iu(C)))+"&"+u:this.m&&va(f,this.m,C)),ya(this.h,S),this.Ua&&ke(f,"TYPE","init"),this.P?(ke(f,"$req",u),ke(f,"SID","null"),S.T=!0,pa(S,f,null)):pa(S,f,u),this.G=2}}else this.G==3&&(o?du(this,o):this.i.length==0||Wc(this.h)||du(this))};function du(o,u){var f;u?f=u.l:f=o.U++;const g=Zt(o.I);ke(g,"SID",o.K),ke(g,"RID",f),ke(g,"AID",o.T),vs(o,g),o.m&&o.o&&va(g,o.m,o.o),f=new vn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=pu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ya(o.h,f),pa(f,g,u)}function vs(o,u){o.H&&G(o.H,function(f,g){ke(u,g,f)}),o.l&&Xc({},function(f,g){ke(u,g,f)})}function pu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?_(o.l.Na,o.l,o):null;e:{var S=o.i;let C=-1;for(;;){const q=["count="+f];C==-1?0<f?(C=S[0].g,q.push("ofs="+C)):C=0:q.push("ofs="+C);let Pe=!0;for(let Ye=0;Ye<f;Ye++){let we=S[Ye].g;const st=S[Ye].map;if(we-=C,0>we)C=Math.max(0,S[Ye].g-100),Pe=!1;else try{dm(st,q,"req"+we+"_")}catch{g&&g(st)}}if(Pe){g=q.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function gu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||xt(),fe||(ge(),fe=!0),vt.add(u,o),o.v=0}}function wa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=cs(_(o.Fa,o),yu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=cs(_(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Ai(this),mu(this))};function Ia(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function mu(o){o.g=new vn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=Zt(o.qa);ke(u,"RID","rpc"),ke(u,"SID",o.K),ke(u,"AID",o.T),ke(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ke(u,"TO",o.ja),ke(u,"TYPE","xmlhttp"),vs(o,u),o.m&&o.o&&va(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=wi(Zt(u)),f.m=null,f.P=!0,Hc(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Ai(this),wa(this),ft(19))};function Ri(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function _u(o,u){var f=null;if(o.g==u){Ri(o),Ia(o),o.g=null;var g=2}else if(_a(o.h,u))f=u.D,Qc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=gi(),se(g,new Uc(g,f)),bi(o)}else gu(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&_m(o,u)||g==2&&wa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),S){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function yu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),g=o.Xa;const S=!g;g=new er(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||vi(g,"https"),wi(g),S?um(g.toString(),f):hm(g.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),vu(o),fu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function vu(o){if(o.G=0,o.ka=[],o.l){const u=Jc(o.h);(u.length!=0||o.i.length!=0)&&(V(o.ka,u),V(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function Eu(o,u,f){var g=f instanceof er?Zt(f):new er(f);if(g.g!="")u&&(g.g=u+"."+g.g),Ei(g,g.s);else{var S=l.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var C=new er(null);g&&vi(C,g),u&&(C.g=u),S&&Ei(C,S),f&&(C.l=f),g=C}return f=o.D,u=o.ya,f&&u&&ke(g,f,u),ke(g,"VER",o.la),vs(o,g),g}function wu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new gs({eb:f})):new Fe(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Iu(){}t=Iu.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Si(){}Si.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){Z.call(this),this.g=new hu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!H(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!H(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Cr(this)}k(wt,Z),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Ea(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=br(o),o=f);u.i.push(new em(u.Ya++,o)),u.G==3&&bi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Ea(this.g),delete this.g,wt.aa.N.call(this)};function Tu(o){ua.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}k(Tu,ua);function Au(){ha.call(this),this.status=1}k(Au,ha);function Cr(o){this.g=o}k(Cr,Iu),Cr.prototype.ua=function(){se(this.g,"a")},Cr.prototype.ta=function(o){se(this.g,new Tu(o))},Cr.prototype.sa=function(o){se(this.g,new Au)},Cr.prototype.ra=function(){se(this.g,"b")},Si.prototype.createWebChannel=Si.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Yp=function(){return new Si},Xp=function(){return gi()},Jp=Yn,El={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,eo=mi,$c.COMPLETE="complete",Qp=$c,Vc.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",Z.prototype.listen=Z.prototype.K,Rs=Vc,Gp=gs,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,Wp=Fe}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});const of="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="10.12.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new ec("@firebase/firestore");function Is(){return Er.logLevel}function re(t,...e){if(Er.logLevel<=de.DEBUG){const n=e.map(pc);Er.debug(`Firestore (${rs}): ${t}`,...n)}}function wr(t,...e){if(Er.logLevel<=de.ERROR){const n=e.map(pc);Er.error(`Firestore (${rs}): ${t}`,...n)}}function _o(t,...e){if(Er.logLevel<=de.WARN){const n=e.map(pc);Er.warn(`Firestore (${rs}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${rs}) INTERNAL ASSERTION FAILED: `+t;throw wr(e),new Error(e)}function Xe(t,e){t||pe()}function Ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class _2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class y2{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Xe(typeof r.accessToken=="string"),new Zp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new at(e)}}class v2{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class E2{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new v2(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class w2{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class I2{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Xe(typeof n.token=="string"),this.R=n.token,new w2(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=T2(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Ce(t,e){return t<e?-1:t>e?1:0}function Gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ce(this.nanoseconds,e.nanoseconds):Ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Le(e)}static min(){return new Le(new Je(0,0))}static max(){return new Le(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Js.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Js?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends Js{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const A2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Js{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return A2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new le(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(je.fromString(e))}static fromName(e){return new ue(je.fromString(e).popFirst(5))}static empty(){return new ue(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new je(e.slice()))}}function b2(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Le.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Hn(s,ue.empty(),e)}function R2(t){return new Hn(t.readTime,t.key,-1)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(Le.min(),ue.empty(),-1)}static max(){return new Hn(Le.max(),ue.empty(),-1)}}function S2(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:Ce(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==P2)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function k2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}ng.oe=-1;function gc(t){return t==null}function yo(t){return t===0&&1/t==-1/0}function O2(t){return typeof t=="number"&&Number.isInteger(t)&&!yo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new yt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new yt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.comparator=e,this.data=new yt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lf(this.data.getIterator())}getIteratorFrom(e){return new lf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class lf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new bt([])}unionWith(e){let n=new ut(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new N2("Invalid base64 string: "+i):i}}(e);return new dn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new dn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const D2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if(Xe(!!t),typeof t=="string"){let e=0;const n=D2.exec(t);if(Xe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xs(t){return typeof t=="string"?dn.fromBase64String(t):dn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sg(t){const e=t.mapValue.fields.__previous_value__;return mc(e)?sg(e):e}function vo(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,n,r,s,i,a,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Eo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Eo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Eo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mc(t)?4:V2(t)?9007199254740991:10:pe()}function Xt(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ir(s.timestampValue),l=Ir(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xs(s.bytesValue).isEqual(Xs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return et(s.geoPointValue.latitude)===et(i.geoPointValue.latitude)&&et(s.geoPointValue.longitude)===et(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return et(s.integerValue)===et(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=et(s.doubleValue),l=et(i.doubleValue);return a===l?yo(a)===yo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(af(a)!==af(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!Xt(a[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function Ys(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Jr(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return Ce(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ce(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=et(i.integerValue||i.doubleValue),c=et(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return cf(t.timestampValue,e.timestampValue);case 4:return cf(vo(t),vo(e));case 5:return Ce(t.stringValue,e.stringValue);case 6:return function(i,a){const l=Xs(i),c=Xs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ce(l[h],c[h]);if(d!==0)return d}return Ce(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ce(et(i.latitude),et(a.latitude));return l!==0?l:Ce(et(i.longitude),et(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const l=i.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const d=Jr(l[h],c[h]);if(d)return d}return Ce(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===$i.mapValue&&a===$i.mapValue)return 0;if(i===$i.mapValue)return 1;if(a===$i.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const _=Ce(c[p],d[p]);if(_!==0)return _;const A=Jr(l[c[p]],h[d[p]]);if(A!==0)return A}return Ce(c.length,d.length)}(t.mapValue,e.mapValue);default:throw pe()}}function cf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ce(t,e);const n=Ir(t),r=Ir(e),s=Ce(n.seconds,r.seconds);return s!==0?s:Ce(n.nanos,r.nanos)}function Xr(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wl(n.fields[a])}`;return s+"}"}(t.mapValue):pe()}function Il(t){return!!t&&"integerValue"in t}function _c(t){return!!t&&"arrayValue"in t}function to(t){return!!t&&"mapValue"in t}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!to(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Vs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());to(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];to(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(Vs(this.value))}}function ig(t){const e=[];return ss(t.fields,(n,r)=>{const s=new tt([n]);if(to(r)){const i=ig(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Mt(e,0,Le.min(),Le.min(),Le.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new Mt(e,1,n,Le.min(),r,s,0)}static newNoDocument(e,n){return new Mt(e,2,n,Le.min(),Le.min(),At.empty(),0)}static newUnknownDocument(e,n){return new Mt(e,3,n,Le.min(),Le.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.position=e,this.inclusive=n}}function uf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ue.comparator(ue.fromName(a.referenceValue),n.key):r=Jr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n="asc"){this.field=e,this.dir=n}}function M2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{}class Qe extends og{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F2(e,n,r):n==="array-contains"?new B2(e,r):n==="in"?new j2(e,r):n==="not-in"?new H2(e,r):n==="array-contains-any"?new q2(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U2(e,r):new $2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Jr(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Jr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends og{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new qn(e,n)}matches(e){return ag(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ag(t){return t.op==="and"}function lg(t){return L2(t)&&ag(t)}function L2(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function Tl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+Xr(t.value);if(lg(t))return t.filters.map(e=>Tl(e)).join(",");{const e=t.filters.map(n=>Tl(n)).join(",");return`${t.op}(${e})`}}function cg(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(t,e):t instanceof qn?function(r,s){return s instanceof qn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&cg(a,s.filters[l]),!0):!1}(t,e):void pe()}function ug(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${Xr(n.value)}`}(t):t instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(ug).join(" ,")+"}"}(t):"Filter"}class F2 extends Qe{constructor(e,n,r){super(e,n,r),this.key=ue.fromName(r.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class U2 extends Qe{constructor(e,n){super(e,"in",n),this.keys=hg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $2 extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=hg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function hg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ue.fromName(r.referenceValue))}class B2 extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _c(n)&&Ys(n.arrayValue,this.value)}}class j2 extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ys(this.value.arrayValue,n)}}class H2 extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ys(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ys(this.value.arrayValue,n)}}class q2 extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_c(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ys(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.ue=null}}function ff(t,e=null,n=[],r=[],s=null,i=null,a=null){return new z2(t,e,n,r,s,i,a)}function yc(t){const e=Ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Tl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xr(r)).join(",")),e.ue=n}return e.ue}function vc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hf(t.startAt,e.startAt)&&hf(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function K2(t,e,n,r,s,i,a,l){return new ea(t,e,n,r,s,i,a,l)}function W2(t){return new ea(t)}function df(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function G2(t){return t.collectionGroup!==null}function Ms(t){const e=Ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ut(tt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Io(i,r))}),n.has(tt.keyField().canonicalString())||e.ce.push(new Io(tt.keyField(),r))}return e.ce}function mr(t){const e=Ne(t);return e.le||(e.le=Q2(e,Ms(t))),e.le}function Q2(t,e){if(t.limitType==="F")return ff(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Io(s.field,i)});const n=t.endAt?new wo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new wo(t.startAt.position,t.startAt.inclusive):null;return ff(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e,n){return new ea(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fg(t,e){return vc(mr(t),mr(e))&&t.limitType===e.limitType}function dg(t){return`${yc(mr(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>ug(s)).join(", ")}]`),gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Xr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Xr(s)).join(",")),`Target(${r})`}(mr(t))}; limitType=${t.limitType})`}function Ec(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ue.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ms(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=uf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ms(r),s)||r.endAt&&!function(a,l,c){const h=uf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ms(r),s))}(t,e)}function J2(t){return(e,n)=>{let r=!1;for(const s of Ms(t)){const i=X2(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X2(t,e,n){const r=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jr(c,h):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2=new yt(ue.comparator);function To(){return Y2}const pg=new yt(ue.comparator);function Bi(...t){let e=pg;for(const n of t)e=e.insert(n.key,n);return e}function gg(t){let e=pg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ur(){return Ls()}function mg(){return Ls()}function Ls(){return new is(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z2=new yt(ue.comparator),eA=new ut(ue.comparator);function lt(...t){let e=eA;for(const n of t)e=e.add(n);return e}const tA=new ut(Ce);function nA(){return tA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yo(e)?"-0":e}}function yg(t){return{integerValue:""+t}}function rA(t,e){return O2(e)?yg(e):_g(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this._=void 0}}function sA(t,e,n){return t instanceof Ao?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mc(i)&&(i=sg(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof Yr?Eg(t,e):t instanceof Zs?wg(t,e):function(s,i){const a=vg(s,i),l=pf(a)+pf(s.Pe);return Il(a)&&Il(s.Pe)?yg(l):_g(s.serializer,l)}(t,e)}function iA(t,e,n){return t instanceof Yr?Eg(t,e):t instanceof Zs?wg(t,e):n}function vg(t,e){return t instanceof bo?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ao extends ta{}class Yr extends ta{constructor(e){super(),this.elements=e}}function Eg(t,e){const n=Ig(e);for(const r of t.elements)n.some(s=>Xt(s,r))||n.push(r);return{arrayValue:{values:n}}}class Zs extends ta{constructor(e){super(),this.elements=e}}function wg(t,e){let n=Ig(e);for(const r of t.elements)n=n.filter(s=>!Xt(s,r));return{arrayValue:{values:n}}}class bo extends ta{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function pf(t){return et(t.integerValue||t.doubleValue)}function Ig(t){return _c(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.field=e,this.transform=n}}function aA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Zs&&s instanceof Zs?Gr(r.elements,s.elements,Xt):r instanceof bo&&s instanceof bo?Xt(r.Pe,s.Pe):r instanceof Ao&&s instanceof Ao}(t.transform,e.transform)}class lA{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function no(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class na{}function Tg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bg(t.key,Wt.none()):new hi(t.key,t.data,Wt.none());{const n=t.data,r=At.empty();let s=new ut(tt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Xn(t.key,r,new bt(s.toArray()),Wt.none())}}function cA(t,e,n){t instanceof hi?function(s,i,a){const l=s.value.clone(),c=mf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Xn?function(s,i,a){if(!no(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=mf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Ag(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Fs(t,e,n,r){return t instanceof hi?function(i,a,l,c){if(!no(i.precondition,a))return l;const h=i.value.clone(),d=_f(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Xn?function(i,a,l,c){if(!no(i.precondition,a))return l;const h=_f(i.fieldTransforms,c,a),d=a.data;return d.setAll(Ag(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return no(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function uA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vg(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,(i,a)=>aA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hi extends na{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends na{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ag(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function mf(t,e,n){const r=new Map;Xe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,iA(a,l,n[s]))}return r}function _f(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,sA(i,a,e))}return r}class bg extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends na{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Fs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Tg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),lt())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>gf(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>gf(n,r))}}class wc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Xe(e.mutations.length===r.length);let s=function(){return Z2}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new wc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,_e;function pA(t){switch(t){default:return pe();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function gA(t){if(t===void 0)return wr("GRPC error has no .code"),U.UNKNOWN;switch(t){case Be.OK:return U.OK;case Be.CANCELLED:return U.CANCELLED;case Be.UNKNOWN:return U.UNKNOWN;case Be.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Be.INTERNAL:return U.INTERNAL;case Be.UNAVAILABLE:return U.UNAVAILABLE;case Be.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Be.NOT_FOUND:return U.NOT_FOUND;case Be.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Be.ABORTED:return U.ABORTED;case Be.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Be.DATA_LOSS:return U.DATA_LOSS;default:return pe()}}(_e=Be||(Be={}))[_e.OK=0]="OK",_e[_e.CANCELLED=1]="CANCELLED",_e[_e.UNKNOWN=2]="UNKNOWN",_e[_e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_e[_e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_e[_e.NOT_FOUND=5]="NOT_FOUND",_e[_e.ALREADY_EXISTS=6]="ALREADY_EXISTS",_e[_e.PERMISSION_DENIED=7]="PERMISSION_DENIED",_e[_e.UNAUTHENTICATED=16]="UNAUTHENTICATED",_e[_e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_e[_e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_e[_e.ABORTED=10]="ABORTED",_e[_e.OUT_OF_RANGE=11]="OUT_OF_RANGE",_e[_e.UNIMPLEMENTED=12]="UNIMPLEMENTED",_e[_e.INTERNAL=13]="INTERNAL",_e[_e.UNAVAILABLE=14]="UNAVAILABLE",_e[_e.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Kp([4294967295,4294967295],0);class mA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _A(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yA(t,e){return bl(t,e.toTimestamp())}function jr(t){return Xe(!!t),Le.fromTimestamp(function(n){const r=Ir(n);return new Je(r.seconds,r.nanos)}(t))}function Rg(t,e){return Rl(t,e).canonicalString()}function Rl(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vA(t){const e=je.fromString(t);return Xe(SA(e)),e}function Sl(t,e){return Rg(t.databaseId,e.path)}function EA(t){const e=vA(t);return e.length===4?je.emptyPath():IA(e)}function wA(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function IA(t){return Xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function TA(t,e){let n;if(e instanceof hi)n={update:yf(t,e.key,e.value)};else if(e instanceof bg)n={delete:Sl(t,e.key)};else if(e instanceof Xn)n={update:yf(t,e.key,e.data),updateMask:RA(e.fieldMask)};else{if(!(e instanceof hA))return pe();n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Ao)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof bo)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function AA(t,e){return t&&t.length>0?(Xe(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?jr(s.updateTime):jr(i);return a.isEqual(Le.min())&&(a=jr(i)),new lA(a,s.transformResults||[])}(n,e))):[]}function bA(t){let e=EA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Xe(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const _=Sg(p);return _ instanceof qn&&lg(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(_=>function(k){return new Io(xr(k.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(p){let _;return _=typeof p=="object"?p.value:p,gc(_)?null:_}(n.limit));let c=null;n.startAt&&(c=function(p){const _=!!p.before,A=p.values||[];return new wo(A,_)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const _=!p.before,A=p.values||[];return new wo(A,_)}(n.endAt)),K2(e,s,a,i,l,"F",c,h)}function Sg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(n.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(r=>Sg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function xr(t){return tt.fromServerFormat(t.fieldPath)}function RA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.ct=e}}function CA(t){const e=bA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Al(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(){this._n=new OA}addToCollectionParentIndex(e,n){return this._n.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Hn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class OA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ut(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ut(je.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Zr(0)}static Ln(){return new Zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.changes=new is(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Fs(r.mutation,s,bt.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,lt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=lt()){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Bi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,lt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=To();const a=Ls(),l=function(){return Ls()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Xn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Fs(d.mutation,h,d.mutation.getFieldMask(),Je.now())):a.set(h.key,bt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new DA(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Ls();let s=new yt((a,l)=>a-l),i=lt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||bt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||lt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=mg();d.forEach(_=>{if(!i.has(_)){const A=Tg(n.get(_),r.get(_));A!==null&&p.set(_,A),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ue.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):G2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(ur());let l=-1,c=i;return a.next(h=>L.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?L.resolve():this.remoteDocumentCache.getEntry(e,d).next(_=>{c=c.insert(d,_)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,lt())).next(d=>({batchId:l,changes:gg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(r=>{let s=Bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Bi();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const h=function(p,_){return new ea(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,_)=>{a=a.insert(p,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Mt.newInvalidDocument(d)))});let l=Bi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Fs(d.mutation,h,bt.empty(),Je.now()),Ec(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:jr(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:CA(s.bundledQuery),readTime:jr(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.overlays=new yt(ue.comparator),this.hr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ur();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=ur(),i=n.length+1,a=new ue(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new yt((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=ur(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return L.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dA(n,r));let i=this.hr.get(n);i===void 0&&(i=lt(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.Pr=new ut(We.Ir),this.Tr=new ut(We.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new We(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ue(new je([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ue(new je([])),r=new We(n,e),s=new We(n,e+1);let i=lt();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new We(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ue.comparator(e.key,n.key)||Ce(e.pr,n.pr)}static Er(e,n){return Ce(e.pr,n.pr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ut(We.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.wr=this.wr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const l=this.Sr(a.pr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(Ce);return n.forEach(s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],l=>{r=r.add(l.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ue.isDocumentKey(i)||(i=i.child(""));const a=new We(new ue(i),0);let l=new ut(Ce);return this.wr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.pr)),!0)},a),L.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Xe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new We(n,0),s=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.vr=e,this.docs=function(){return new yt(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Mt.newInvalidDocument(n))}getEntries(e,n){let r=To();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Mt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=To();const a=n.path,l=new ue(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||S2(R2(d),r)<=0||(s.has(d.key)||Ec(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Fr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new UA(this)}getSize(e){return L.resolve(this.size)}}class UA extends NA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.persistence=e,this.Mr=new is(n=>yc(n),vc),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ic,this.targetCount=0,this.Lr=Zr.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.qn(n),L.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.Br={},this.overlays={},this.kr=new ng(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new $A(this),this.indexManager=new kA,this.remoteDocumentCache=function(s){return new FA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new PA(n),this.$r=new VA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new MA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new LA(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new jA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class jA extends C2{constructor(e){super(),this.currentSequenceNumber=e}}class Tc{constructor(e){this.persistence=e,this.zr=new Ic,this.jr=null}static Hr(e){return new Tc(e)}get Jr(){if(this.jr)return this.jr;throw pe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const s=ue.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,Le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=lt(),s=lt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ac(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return XE()?8:k2(rt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new HA;return this.Ji(e,n,a).next(l=>{if(i.result=l,this.Ui)return this.Yi(e,n,a,l.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Is()<=de.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(Is()<=de.DEBUG&&re("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Is()<=de.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mr(n))):L.resolve())}ji(e,n){if(df(n))return L.resolve(null);let r=mr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Al(n,null,"F"),r=mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=lt(...i);return this.zi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.Zi(n,l);return this.Xi(n,h,a,c.readTime)?this.ji(e,Al(n,null,"F")):this.es(e,h,n,c)}))})))}Hi(e,n,r,s){return df(n)||s.isEqual(Le.min())?L.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?L.resolve(null):(Is()<=de.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.es(e,a,n,b2(s,-1)).next(l=>l))})}Zi(e,n){let r=new ut(J2(e));return n.forEach((s,i)=>{Ec(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Is()<=de.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.zi.getDocumentsMatchingQuery(e,n,Hn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new yt(Ce),this.rs=new is(i=>yc(i),vc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function KA(t,e,n,r){return new zA(t,e,n,r)}async function Pg(t,e){const n=Ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=lt();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({us:h,removedBatchIds:a,addedBatchIds:l}))})})}function WA(t,e){const n=Ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,_=p.keys();let A=L.resolve();return _.forEach(k=>{A=A.next(()=>d.getEntry(c,k)).next(x=>{const V=h.docVersions.get(k);Xe(V!==null),x.version.compareTo(V)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=lt();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function GA(t){const e=Ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function QA(t,e){const n=Ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class vf{constructor(){this.activeTargetIds=nA()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JA{constructor(){this.no=new vf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new vf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ji=null;function qa(){return ji===null?ji=function(){return 268435456+Math.round(2147483648*Math.random())}():ji++,"0x"+ji.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class eb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const l=qa(),c=this.vo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(n,c,h,s).then(d=>(re("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw _o("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}xo(n,r,s,i,a,l){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=YA[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=qa();return new Promise((a,l)=>{const c=new Wp;c.setWithCredentials(!0),c.listenOnce(Qp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case eo.NO_ERROR:const d=c.getResponseJson();re(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case eo.TIMEOUT:re(ot,`RPC '${e}' ${i} timed out`),l(new le(U.DEADLINE_EXCEEDED,"Request time out"));break;case eo.HTTP_ERROR:const p=c.getStatus();if(re(ot,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const k=function(V){const K=V.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(K)>=0?K:U.UNKNOWN}(A.status);l(new le(k,A.message))}else l(new le(U.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new le(U.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(ot,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);re(ot,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=qa(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Yp(),l=Xp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Gp({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");re(ot,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let _=!1,A=!1;const k=new ZA({lo:V=>{A?re(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(_||(re(ot,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),re(ot,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},ho:()=>p.close()}),x=(V,K,H)=>{V.listen(K,$=>{try{H($)}catch(ee){setTimeout(()=>{throw ee},0)}})};return x(p,Rs.EventType.OPEN,()=>{A||(re(ot,`RPC '${e}' stream ${s} transport opened.`),k.mo())}),x(p,Rs.EventType.CLOSE,()=>{A||(A=!0,re(ot,`RPC '${e}' stream ${s} transport closed`),k.po())}),x(p,Rs.EventType.ERROR,V=>{A||(A=!0,_o(ot,`RPC '${e}' stream ${s} transport errored:`,V),k.po(new le(U.UNAVAILABLE,"The operation could not be completed")))}),x(p,Rs.EventType.MESSAGE,V=>{var K;if(!A){const H=V.data[0];Xe(!!H);const $=H,ee=$.error||((K=$[0])===null||K===void 0?void 0:K.error);if(ee){re(ot,`RPC '${e}' stream ${s} received error:`,ee);const ie=ee.status;let G=function(m){const w=Be[m];if(w!==void 0)return gA(w)}(ie),R=ee.message;G===void 0&&(G=U.INTERNAL,R="Unknown error status: "+ie+" with message "+ee.message),A=!0,k.po(new le(G,R)),p.close()}else re(ot,`RPC '${e}' stream ${s} received:`,H),k.yo(H)}}),x(l,Jp.STAT_EVENT,V=>{V.stat===El.PROXY?re(ot,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===El.NOPROXY&&re(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.fo()},0),k}}function za(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(t){return new mA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n,r,s,i,a,l,c){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Cg(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(wr(n.toString()),wr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new le(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class nb extends tb{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=AA(e.writeResults,e.commitTime),r=jr(e.commitTime);return this.listener.A_(r,n)}return Xe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=wA(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TA(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Rl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le(U.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.xo(e,Rl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new le(U.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class sb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(wr(n),this.y_=!1):re("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{di(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Ne(c);h.M_.add(4),await fi(h),h.N_.set("Unknown"),h.M_.delete(4),await sa(h)}(this))})}),this.N_=new sb(r,s)}}async function sa(t){if(di(t))for(const e of t.x_)await e(!0)}async function fi(t){for(const e of t.x_)await e(!1)}function di(t){return Ne(t).M_.size===0}async function kg(t,e,n){if(!Zo(e))throw e;t.M_.add(1),await fi(t),t.N_.set("Offline"),n||(n=()=>GA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await sa(t)})}function Og(t,e){return e().catch(n=>kg(t,n,e))}async function ia(t){const e=Ne(t),n=zn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;ob(e);)try{const s=await QA(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,ab(e,s)}catch(s){await kg(e,s)}Ng(e)&&Dg(e)}function ob(t){return di(t)&&t.v_.length<10}function ab(t,e){t.v_.push(e);const n=zn(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Ng(t){return di(t)&&!zn(t).Zo()&&t.v_.length>0}function Dg(t){zn(t).start()}async function lb(t){zn(t).V_()}async function cb(t){const e=zn(t);for(const n of t.v_)e.d_(n.mutations)}async function ub(t,e,n){const r=t.v_.shift(),s=wc.from(r,e,n);await Og(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ia(t)}async function hb(t,e){e&&zn(t).E_&&await async function(r,s){if(function(a){return pA(a)&&a!==U.ABORTED}(s.code)){const i=r.v_.shift();zn(r).t_(),await Og(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ia(r)}}(t,e),Ng(t)&&Dg(t)}async function wf(t,e){const n=Ne(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=di(n);n.M_.add(3),await fi(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await sa(n)}async function fb(t,e){const n=Ne(t);e?(n.M_.delete(2),await sa(n)):e||(n.M_.add(2),await fi(n),n.N_.set("Unknown"))}function zn(t){return t.k_||(t.k_=function(n,r,s){const i=Ne(n);return i.f_(),new nb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:lb.bind(null,t),Ao:hb.bind(null,t),R_:cb.bind(null,t),A_:ub.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ia(t)):(await t.k_.stop(),t.v_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new bc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xg(t,e){if(wr("AsyncQueue",`${e}: ${t}`),Zo(t))return new le(U.UNAVAILABLE,`${e}: ${t}`);throw t}class db{constructor(){this.queries=new is(e=>dg(e),fg),this.onlineState="Unknown",this.z_=new Set}}function pb(t){t.z_.forEach(e=>{e.next()})}var If,Tf;(Tf=If||(If={})).J_="default",Tf.Cache="cache";class gb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new is(l=>dg(l),fg),this.Da=new Map,this.Ca=new Set,this.va=new yt(ue.comparator),this.Fa=new Map,this.Ma=new Ic,this.xa={},this.Oa=new Map,this.Na=Zr.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function mb(t,e,n){const r=Eb(t);try{const s=await function(a,l){const c=Ne(a),h=Je.now(),d=l.reduce((A,k)=>A.add(k.key),lt());let p,_;return c.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=To(),x=lt();return c.os.getEntries(A,d).next(V=>{k=V,k.forEach((K,H)=>{H.isValidDocument()||(x=x.add(K))})}).next(()=>c.localDocuments.getOverlayedDocuments(A,k)).next(V=>{p=V;const K=[];for(const H of l){const $=uA(H,p.get(H.key).overlayedDocument);$!=null&&K.push(new Xn(H.key,$,ig($.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(A,h,K,l)}).next(V=>{_=V;const K=V.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(A,V.batchId,K)})}).then(()=>({batchId:_.batchId,changes:gg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.xa[a.currentUser.toKey()];h||(h=new yt(Ce)),h=h.insert(l,c),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,n),await oa(r,s.changes),await ia(r.remoteStore)}catch(s){const i=xg(s,"Failed to persist write");n.reject(i)}}function Af(t,e,n){const r=Ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const l=a.view.j_(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Ne(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const _ of p.U_)_.j_(l)&&(h=!0)}),h&&pb(c)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _b(t,e){const n=Ne(t),r=e.batch.batchId;try{const s=await WA(n.localStore,e);Mg(n,r,null),Vg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oa(n,s)}catch(s){await tg(s)}}async function yb(t,e,n){const r=Ne(t);try{const s=await function(a,l){const c=Ne(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Xe(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);Mg(r,e,n),Vg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oa(r,s)}catch(s){await tg(s)}}function Vg(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Mg(t,e,n){const r=Ne(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}async function oa(t,e,n){const r=Ne(t),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{a.push(r.Ba(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Ac.Ki(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(c,h){const d=Ne(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,_=>L.forEach(_.qi,A=>d.persistence.referenceDelegate.addReference(p,_.targetId,A)).next(()=>L.forEach(_.Qi,A=>d.persistence.referenceDelegate.removeReference(p,_.targetId,A)))))}catch(p){if(!Zo(p))throw p;re("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const _=p.targetId;if(!p.fromCache){const A=d.ns.get(_),k=A.snapshotVersion,x=A.withLastLimboFreeSnapshotVersion(k);d.ns=d.ns.insert(_,x)}}}(r.localStore,i))}async function vb(t,e){const n=Ne(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await Pg(n.localStore,e);n.currentUser=e,function(i,a){i.Oa.forEach(l=>{l.forEach(c=>{c.reject(new le(U.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oa(n,r.us)}}function Eb(t){const e=Ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_b.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yb.bind(null,e),e}class bf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ra(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return KA(this.persistence,new qA,e.initialUser,this.serializer)}createPersistence(e){return new BA(Tc.Hr,this.serializer)}createSharedClientState(e){return new JA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class wb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vb.bind(null,this.syncEngine),await fb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new db}()}createDatastore(e){const n=ra(e.databaseInfo.databaseId),r=function(i){return new eb(i)}(e.databaseInfo);return function(i,a,l,c){return new rb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new ib(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Af(this.syncEngine,n,0),function(){return Ef.D()?new Ef:new XA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new gb(s,i,a,l,c,h);return d&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=Ne(r);re("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await fi(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=eg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{re("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(re("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ka(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Pg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Rf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ab(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>wf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>wf(e.remoteStore,s)),t._onlineComponents=e}function Tb(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ab(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ka(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Tb(n))throw n;_o("Error using user provided cache. Falling back to memory cache: "+n),await Ka(t,new bf)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Ka(t,new bf);return t._offlineComponents}async function bb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Rf(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Rf(t,new wb))),t._onlineComponents}function Rb(t){return bb(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t,e,n){if(!n)throw new le(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pb(t,e,n,r){if(e===!0&&r===!0)throw new le(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pf(t){if(!ue.isDocumentKey(t))throw new le(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Rc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function ei(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rc(t);throw new le(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new le(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new le(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m2;switch(r.type){case"firstParty":return new E2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sf.get(n);r&&(re("ComponentProvider","Removing Datastore"),Sf.delete(n),r.terminate())}(this),Promise.resolve()}}function Cb(t,e,n,r={}){var s;const i=(t=ei(t,Sc))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&_o("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=at.MOCK_USER;else{l=zE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new le(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new at(h)}t._authCredentials=new _2(new Zp(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pc(this.firestore,e,this._query)}}class Gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gt(this.firestore,e,this._key)}}class ti extends Pc{constructor(e,n,r){super(e,n,W2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gt(this.firestore,null,new ue(e))}withConverter(e){return new ti(this.firestore,e,this._path)}}function kb(t,e,...n){if(t=_t(t),arguments.length===1&&(e=eg.newId()),Sb("doc","path",e),t instanceof Sc){const r=je.fromString(e,...n);return Pf(r),new Gt(t,null,new ue(r))}{if(!(t instanceof Gt||t instanceof ti))throw new le(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return Pf(r),new Gt(t.firestore,t instanceof ti?t.converter:null,new ue(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Cg(this,"async_queue_retry"),this.hu=()=>{const n=za();n&&re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=za();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=za();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new gr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Zo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw wr("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=bc.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&pe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Cc extends Sc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Ob}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Fg(this),this._firestoreClient.terminate()}}function Nb(t,e){const n=typeof t=="object"?t:dp(),r=typeof t=="string"?t:"(default)",s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=HE("firestore");i&&Cb(s,...i)}return s}function Db(t){return t._firestoreClient||Fg(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fg(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new x2(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Lg(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Ib(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ni(dn.fromBase64String(e))}catch(n){throw new le(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ni(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ce(this._lat,e._lat)||Ce(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=/^__.*__$/;class Vb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms):new hi(e,this.data,n,this.fieldTransforms)}}class $g{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Xn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class la{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new la(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ro(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Bg(this.fu)&&xb.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ra(e)}Fu(e,n,r,s=!1){return new la({fu:e,methodName:n,vu:r,path:tt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jg(t){const e=t._freezeSettings(),n=ra(t._databaseId);return new Mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lb(t,e,n,r,s,i={}){const a=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);Nc("Data must be an object, but it was:",a,r);const l=Hg(r,a);let c,h;if(i.merge)c=new bt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const _=Pl(e,p,n);if(!a.contains(_))throw new le(U.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Kg(d,_)||d.push(_)}c=new bt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new Vb(new At(l),c,h)}class ca extends aa{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ca}}function Fb(t,e,n){return new la({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Oc extends aa{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=Fb(this,e,!0),r=this.Mu.map(i=>pi(i,n)),s=new Yr(r);return new oA(e.path,s)}isEqual(e){return e instanceof Oc&&Ws(this.Mu,e.Mu)}}function Ub(t,e,n,r){const s=t.Fu(1,e,n);Nc("Data must be an object, but it was:",s,r);const i=[],a=At.empty();ss(r,(c,h)=>{const d=zg(e,c,n);h=_t(h);const p=s.Su(d);if(h instanceof ca)i.push(d);else{const _=pi(h,p);_!=null&&(i.push(d),a.set(d,_))}});const l=new bt(i);return new $g(a,l,s.fieldTransforms)}function $b(t,e,n,r,s,i){const a=t.Fu(1,e,n),l=[Pl(e,r,n)],c=[s];if(i.length%2!=0)throw new le(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(Pl(e,i[_])),c.push(i[_+1]);const h=[],d=At.empty();for(let _=l.length-1;_>=0;--_)if(!Kg(h,l[_])){const A=l[_];let k=c[_];k=_t(k);const x=a.Su(A);if(k instanceof ca)h.push(A);else{const V=pi(k,x);V!=null&&(h.push(A),d.set(A,V))}}const p=new bt(h);return new $g(d,p,a.fieldTransforms)}function pi(t,e){if(qg(t=_t(t)))return Nc("Unsupported field value:",e,t),Hg(t,e);if(t instanceof aa)return function(r,s){if(!Bg(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=pi(l,s.bu(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=_t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:bl(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bl(s.serializer,i)}}if(r instanceof Ug)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ni)return{bytesValue:_A(s.serializer,r._byteString)};if(r instanceof Gt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rg(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Rc(r)}`)}(t,e)}function Hg(t,e){const n={};return rg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ss(t,(r,s)=>{const i=pi(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function qg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Ug||t instanceof ni||t instanceof Gt||t instanceof aa)}function Nc(t,e,n){if(!qg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Rc(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Pl(t,e,n){if((e=_t(e))instanceof kc)return e._internalPath;if(typeof e=="string")return zg(t,e);throw Ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const Bb=new RegExp("[~\\*/\\[\\]]");function zg(t,e,n){if(e.search(Bb)>=0)throw Ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kc(...e.split("."))._internalPath}catch{throw Ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ro(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new le(U.INVALID_ARGUMENT,l+t+c)}function Kg(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function Hb(t,e,n){t=ei(t,Gt);const r=ei(t.firestore,Cc),s=jb(t.converter,e);return Wg(r,[Lb(jg(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Wt.none())])}function c1(t,e,n,...r){t=ei(t,Gt);const s=ei(t.firestore,Cc),i=jg(s);let a;return a=typeof(e=_t(e))=="string"||e instanceof kc?$b(i,"updateDoc",t._key,e,n,r):Ub(i,"updateDoc",t._key,e),Wg(s,[a.toMutation(t._key,Wt.exists(!0))])}function Wg(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>mb(await Rb(r),s,i)),i.promise}(Db(t),e)}function u1(...t){return new Oc("arrayUnion",t)}(function(e,n=!0){(function(s){rs=s})(ts),Kr(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Cc(new y2(r.getProvider("auth-internal")),new I2(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new le(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Eo(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),$n(of,"4.6.4",e),$n(of,"4.6.4","esm2017")})();const qb={apiKey:"AIzaSyCC64Nn4jBqVsSnEkyRXk_2XGTzwL2VDFM",authDomain:"scissortool.firebaseapp.com",projectId:"scissortool",storageBucket:"scissortool.appspot.com",messagingSenderId:"881658314273",appId:"1:881658314273:web:1bdcd991530b9d36a76d60"},Gg=fp(qb),zb=new rn,kf=p2(Gg),Kb=Nb(Gg),Wb=jd("authentication",()=>{const{toggleAuthenticationPopup:t,toggleUserMenu:e}=gn();return{signIn:async()=>{var s,i,a,l;try{const c=await TT(kf,zb);t(),await Hb(kb(Kb,"userData",(s=c.user)==null?void 0:s.email),{userInfo:{name:(i=c.user)==null?void 0:i.displayName,email:(a=c.user)==null?void 0:a.email,image:(l=c.user)==null?void 0:l.photoURL},linksInfo:[],qrCodeInfo:[]}),Cl.push("/dashboard")}catch{return null}},logOut:async()=>{try{return nT(kf),e(),Cl.push("/"),null}catch{}}}}),Gb=t=>(Tr("data-v-d414a30e"),t=t(),Ar(),t),Qb={key:0,class:"authentication-container"},Jb=Gb(()=>Y("img",{src:VE,alt:" escape"},null,-1)),Xb=[Jb],Yb=Rt({__name:"Authentication",setup(t){const e=Wb(),n=gn();return(r,s)=>($e(),Bo(ii,{name:"authentication",mode:"out-in"},{default:Hr(()=>[Re(n).isAuthenticationPopupOpen===!0?($e(),nt("div",Qb,[Y("button",{class:"close-btn",onClick:s[0]||(s[0]=i=>Re(n).toggleAuthenticationPopup())},Xb),Y("button",{class:"authentication-button",onClick:s[1]||(s[1]=i=>Re(e).signIn())}," SignUp or Login with Google ")])):hn("",!0)]),_:1}))}}),Zb=Yt(Yb,[["__scopeId","data-v-d414a30e"]]),e1=Rt({__name:"Home",setup(t){return(e,n)=>($e(),nt("section",null,[be(E0),be(CE),be(U0),be(G0),be(dE),be(vE),be(xE),be(Zb)]))}}),t1=Yt(e1,[["__scopeId","data-v-89d282cb"]]),Cl=t0({history:Ov("/"),routes:[{path:"/",name:"home",component:t1},{path:"/dashboard",name:"dashboard",component:()=>o0(()=>import("./Dashboard-B7vneKH4.js"),__vite__mapDeps([0,1]))}]}),Dc=zy(r0);Dc.use(Qy());Dc.use(Cl);Dc.mount(".root-container");export{n1 as A,bs as B,ii as T,Yt as _,kb as a,Kb as b,kf as c,jd as d,u1 as e,Rt as f,nt as g,Y as h,Re as i,ze as j,i1 as k,Ar as l,xd as m,gn as n,$e as o,Tr as p,be as q,un as r,Wb as s,Bo as t,c1 as u,s1 as v,r1 as w,Hr as x,hn as y,Ga as z};
