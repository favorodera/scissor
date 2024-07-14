const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-xvZHN8ZJ.js","assets/Dashboard-B5ld2KMZ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function el(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const xe={},Kr=[],xt=()=>{},P_=()=>!1,jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tl=t=>t.startsWith("onUpdate:"),We=Object.assign,nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},C_=Object.prototype.hasOwnProperty,Te=(t,e)=>C_.call(t,e),ce=Array.isArray,Wr=t=>qo(t)==="[object Map]",wf=t=>qo(t)==="[object Set]",de=t=>typeof t=="function",Ge=t=>typeof t=="string",Zn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",Tf=t=>(Me(t)||de(t))&&de(t.then)&&de(t.catch),If=Object.prototype.toString,qo=t=>If.call(t),k_=t=>qo(t).slice(8,-1),Af=t=>qo(t)==="[object Object]",rl=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=el(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ho=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},O_=/-(\w)/g,Zt=Ho(t=>t.replace(O_,(e,n)=>n?n.toUpperCase():"")),N_=/\B([A-Z])/g,fs=Ho(t=>t.replace(N_,"-$1").toLowerCase()),zo=Ho(t=>t.charAt(0).toUpperCase()+t.slice(1)),ja=Ho(t=>t?`on${zo(t)}`:""),Gn=(t,e)=>!Object.is(t,e),io=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},bf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},dc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},D_=t=>{const e=Ge(t)?Number(t):NaN;return isNaN(e)?t:e};let oh;const Rf=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?L_(r):sl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Me(t))return t}const V_=/;(?![^(]*\))/g,x_=/:([^]+)/,M_=/\/\*[^]*?\*\//g;function L_(t){const e={};return t.replace(M_,"").split(V_).forEach(n=>{if(n){const r=n.split(x_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ko(t){let e="";if(Ge(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=Ko(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const F_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",U_=el(F_);function Sf(t){return!!t||t===""}const Pf=t=>!!(t&&t.__v_isRef===!0),fc=t=>Ge(t)?t:t==null?"":ce(t)||Me(t)&&(t.toString===If||!de(t.toString))?Pf(t)?fc(t.value):JSON.stringify(t,Cf,2):String(t),Cf=(t,e)=>Pf(e)?Cf(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[qa(r,i)+" =>"]=s,n),{})}:wf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:Zn(e)?qa(e):Me(e)&&!ce(e)&&!Af(e)?String(e):e,qa=(t,e="")=>{var n;return Zn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class kf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Of(t){return new kf(t)}function B_(t,e=bt){e&&e.active&&e.effects.push(t)}function Nf(){return bt}function $_(t){bt&&bt.cleanups.push(t)}let yr;class il{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,B_(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,er();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(j_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),tr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jn,n=yr;try{return jn=!0,yr=this,this._runnings++,ah(this),this.fn()}finally{ch(this),this._runnings--,yr=n,jn=e}}stop(){this.active&&(ah(this),ch(this),this.onStop&&this.onStop(),this.active=!1)}}function j_(t){return t.value}function ah(t){t._trackId++,t._depsLength=0}function ch(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Df(t.deps[e],t);t.deps.length=t._depsLength}}function Df(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let jn=!0,pc=0;const Vf=[];function er(){Vf.push(jn),jn=!1}function tr(){const t=Vf.pop();jn=t===void 0?!0:t}function ol(){pc++}function al(){for(pc--;!pc&&gc.length;)gc.shift()()}function xf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Df(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const gc=[];function Mf(t,e,n){ol();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&gc.push(r.scheduler)))}al()}const Lf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},wo=new WeakMap,vr=Symbol(""),mc=Symbol("");function Et(t,e,n){if(jn&&yr){let r=wo.get(t);r||wo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Lf(()=>r.delete(n))),xf(yr,s)}}function pn(t,e,n,r,s,i){const a=wo.get(t);if(!a)return;let c=[];if(e==="clear")c=[...a.values()];else if(n==="length"&&ce(t)){const l=Number(r);a.forEach((h,f)=>{(f==="length"||!Zn(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(a.get(n)),e){case"add":ce(t)?rl(n)&&c.push(a.get("length")):(c.push(a.get(vr)),Wr(t)&&c.push(a.get(mc)));break;case"delete":ce(t)||(c.push(a.get(vr)),Wr(t)&&c.push(a.get(mc)));break;case"set":Wr(t)&&c.push(a.get(vr));break}ol();for(const l of c)l&&Mf(l,4);al()}function q_(t,e){const n=wo.get(t);return n&&n.get(e)}const H_=el("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zn)),lh=z_();function z_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Ie(this);for(let i=0,a=this.length;i<a;i++)Et(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Ie)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){er(),ol();const r=Ie(this)[e].apply(this,n);return al(),tr(),r}}),t}function K_(t){Zn(t)||(t=String(t));const e=Ie(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Uf{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?iy:qf:i?jf:$f).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){if(a&&Te(lh,n))return Reflect.get(lh,n,r);if(n==="hasOwnProperty")return K_}const c=Reflect.get(e,n,r);return(Zn(n)?Ff.has(n):H_(n))||(s||Et(e,"get",n),i)?c:Xe(c)?a&&rl(n)?c:c.value:Me(c)?s?zf(c):_i(c):c}}class Bf extends Uf{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ei(i);if(!To(r)&&!ei(r)&&(i=Ie(i),r=Ie(r)),!ce(e)&&Xe(i)&&!Xe(r))return l?!1:(i.value=r,!0)}const a=ce(e)&&rl(n)?Number(n)<e.length:Te(e,n),c=Reflect.set(e,n,r,s);return e===Ie(s)&&(a?Gn(r,i)&&pn(e,"set",n,r):pn(e,"add",n,r)),c}deleteProperty(e,n){const r=Te(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&pn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zn(n)||!Ff.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ce(e)?"length":vr),Reflect.ownKeys(e)}}class W_ extends Uf{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const G_=new Bf,Q_=new W_,J_=new Bf(!0);const cl=t=>t,Wo=t=>Reflect.getPrototypeOf(t);function Ki(t,e,n=!1,r=!1){t=t.__v_raw;const s=Ie(t),i=Ie(e);n||(Gn(e,i)&&Et(s,"get",e),Et(s,"get",i));const{has:a}=Wo(s),c=r?cl:n?dl:ti;if(a.call(s,e))return c(t.get(e));if(a.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Wi(t,e=!1){const n=this.__v_raw,r=Ie(n),s=Ie(t);return e||(Gn(t,s)&&Et(r,"has",t),Et(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Gi(t,e=!1){return t=t.__v_raw,!e&&Et(Ie(t),"iterate",vr),Reflect.get(t,"size",t)}function uh(t){t=Ie(t);const e=Ie(this);return Wo(e).has.call(e,t)||(e.add(t),pn(e,"add",t,t)),this}function hh(t,e){e=Ie(e);const n=Ie(this),{has:r,get:s}=Wo(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const a=s.call(n,t);return n.set(t,e),i?Gn(e,a)&&pn(n,"set",t,e):pn(n,"add",t,e),this}function dh(t){const e=Ie(this),{has:n,get:r}=Wo(e);let s=n.call(e,t);s||(t=Ie(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&pn(e,"delete",t,void 0),i}function fh(){const t=Ie(this),e=t.size!==0,n=t.clear();return e&&pn(t,"clear",void 0,void 0),n}function Qi(t,e){return function(r,s){const i=this,a=i.__v_raw,c=Ie(a),l=e?cl:t?dl:ti;return!t&&Et(c,"iterate",vr),a.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function Ji(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=Wr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?cl:e?dl:ti;return!e&&Et(i,"iterate",l?mc:vr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function X_(){const t={get(i){return Ki(this,i)},get size(){return Gi(this)},has:Wi,add:uh,set:hh,delete:dh,clear:fh,forEach:Qi(!1,!1)},e={get(i){return Ki(this,i,!1,!0)},get size(){return Gi(this)},has:Wi,add:uh,set:hh,delete:dh,clear:fh,forEach:Qi(!1,!0)},n={get(i){return Ki(this,i,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Qi(!0,!1)},r={get(i){return Ki(this,i,!0,!0)},get size(){return Gi(this,!0)},has(i){return Wi.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ji(i,!1,!1),n[i]=Ji(i,!0,!1),e[i]=Ji(i,!1,!0),r[i]=Ji(i,!0,!0)}),[t,n,e,r]}const[Y_,Z_,ey,ty]=X_();function ll(t,e){const n=e?t?ty:ey:t?Z_:Y_;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Te(n,s)&&s in r?n:r,s,i)}const ny={get:ll(!1,!1)},ry={get:ll(!1,!0)},sy={get:ll(!0,!1)};const $f=new WeakMap,jf=new WeakMap,qf=new WeakMap,iy=new WeakMap;function oy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ay(t){return t.__v_skip||!Object.isExtensible(t)?0:oy(k_(t))}function _i(t){return ei(t)?t:ul(t,!1,G_,ny,$f)}function Hf(t){return ul(t,!1,J_,ry,jf)}function zf(t){return ul(t,!0,Q_,sy,qf)}function ul(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=ay(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Er(t){return ei(t)?Er(t.__v_raw):!!(t&&t.__v_isReactive)}function ei(t){return!!(t&&t.__v_isReadonly)}function To(t){return!!(t&&t.__v_isShallow)}function Kf(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function hl(t){return Object.isExtensible(t)&&bf(t,"__v_skip",!0),t}const ti=t=>Me(t)?_i(t):t,dl=t=>Me(t)?zf(t):t;class Wf{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new il(()=>e(this._value),()=>oo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Ie(this);return(!e._cacheable||e.effect.dirty)&&Gn(e._value,e._value=e.effect.run())&&oo(e,4),Gf(e),e.effect._dirtyLevel>=2&&oo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function cy(t,e,n=!1){let r,s;const i=de(t);return i?(r=t,s=xt):(r=t.get,s=t.set),new Wf(r,s,i||!s,n)}function Gf(t){var e;jn&&yr&&(t=Ie(t),xf(yr,(e=t.dep)!=null?e:t.dep=Lf(()=>t.dep=void 0,t instanceof Wf?t:void 0)))}function oo(t,e=4,n,r){t=Ie(t);const s=t.dep;s&&Mf(s,e)}function Xe(t){return!!(t&&t.__v_isRef===!0)}function Wt(t){return Qf(t,!1)}function ly(t){return Qf(t,!0)}function Qf(t,e){return Xe(t)?t:new uy(t,e)}class uy{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Ie(e),this._value=n?e:ti(e)}get value(){return Gf(this),this._value}set value(e){const n=this.__v_isShallow||To(e)||ei(e);e=n?e:Ie(e),Gn(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:ti(e),oo(this,4))}}function ke(t){return Xe(t)?t.value:t}const hy={get:(t,e,n)=>ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Xe(s)&&!Xe(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Jf(t){return Er(t)?t:new Proxy(t,hy)}function dy(t){const e=ce(t)?new Array(t.length):{};for(const n in t)e[n]=py(t,n);return e}class fy{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return q_(Ie(this._object),this._key)}}function py(t,e,n){const r=t[e];return Xe(r)?r:new fy(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){Go(s,e,n)}}function Mt(t,e,n,r){if(de(t)){const s=qn(t,e,n,r);return s&&Tf(s)&&s.catch(i=>{Go(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Mt(t[i],e,n,r));return s}}function Go(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const a=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,a,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){er(),qn(l,null,10,[t,a,c]),tr();return}}gy(t,n,s,r)}function gy(t,e,n,r=!0){console.error(t)}let ni=!1,_c=!1;const dt=[];let Kt=0;const Gr=[];let Dn=null,pr=0;const Xf=Promise.resolve();let fl=null;function pl(t){const e=fl||Xf;return t?e.then(this?t.bind(this):t):e}function my(t){let e=Kt+1,n=dt.length;for(;e<n;){const r=e+n>>>1,s=dt[r],i=ri(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function gl(t){(!dt.length||!dt.includes(t,ni&&t.allowRecurse?Kt+1:Kt))&&(t.id==null?dt.push(t):dt.splice(my(t.id),0,t),Yf())}function Yf(){!ni&&!_c&&(_c=!0,fl=Xf.then(ep))}function _y(t){const e=dt.indexOf(t);e>Kt&&dt.splice(e,1)}function yy(t){ce(t)?Gr.push(...t):(!Dn||!Dn.includes(t,t.allowRecurse?pr+1:pr))&&Gr.push(t),Yf()}function ph(t,e,n=ni?Kt+1:0){for(;n<dt.length;n++){const r=dt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;dt.splice(n,1),n--,r()}}}function Zf(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,r)=>ri(n)-ri(r));if(Gr.length=0,Dn){Dn.push(...e);return}for(Dn=e,pr=0;pr<Dn.length;pr++){const n=Dn[pr];n.active!==!1&&n()}Dn=null,pr=0}}const ri=t=>t.id==null?1/0:t.id,vy=(t,e)=>{const n=ri(t)-ri(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ep(t){_c=!1,ni=!0,dt.sort(vy);try{for(Kt=0;Kt<dt.length;Kt++){const e=dt[Kt];e&&e.active!==!1&&qn(e,null,14)}}finally{Kt=0,dt.length=0,Zf(),ni=!1,fl=null,(dt.length||Gr.length)&&ep()}}function Ey(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||xe;let s=n;const i=e.startsWith("update:"),a=i&&e.slice(7);if(a&&a in r){const f=`${a==="modelValue"?"model":a}Modifiers`,{number:p,trim:m}=r[f]||xe;m&&(s=n.map(w=>Ge(w)?w.trim():w)),p&&(s=n.map(dc))}let c,l=r[c=ja(e)]||r[c=ja(Zt(e))];!l&&i&&(l=r[c=ja(fs(e))]),l&&Mt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Mt(h,t,6,s)}}function tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!de(t)){const l=h=>{const f=tp(h,e,!0);f&&(c=!0,We(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Me(t)&&r.set(t,null),null):(ce(i)?i.forEach(l=>a[l]=null):We(a,i),Me(t)&&r.set(t,a),a)}function Qo(t,e){return!t||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Te(t,e[0].toLowerCase()+e.slice(1))||Te(t,fs(e))||Te(t,e))}let _t=null,Jo=null;function Io(t){const e=_t;return _t=t,Jo=t&&t.type.__scopeId||null,e}function kr(t){Jo=t}function Or(){Jo=null}function es(t,e=_t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=Io(e);let a;try{a=t(...s)}finally{Io(i),r._d&&Sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ha(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:w,ctx:C,inheritAttrs:O}=t,N=Io(t);let z,$;try{if(n.shapeFlag&4){const te=s||r,ie=te;z=zt(h.call(ie,te,f,p,w,m,C)),$=c}else{const te=e;z=zt(te.length>1?te(p,{attrs:c,slots:a,emit:l}):te(p,null)),$=e.props?c:wy(c)}}catch(te){zs.length=0,Go(te,t,1),z=Ce(Rt)}let U=z;if($&&O!==!1){const te=Object.keys($),{shapeFlag:ie}=U;te.length&&ie&7&&(i&&te.some(tl)&&($=Ty($,i)),U=Qn(U,$,!1,!0))}return n.dirs&&(U=Qn(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&(U.transition=n.transition),z=U,Io(N),z}const wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||jo(n))&&((e||(e={}))[n]=t[n]);return e},Ty=(t,e)=>{const n={};for(const r in t)(!tl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iy(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(a[m]!==r[m]&&!Qo(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?gh(r,a,h):!0:!!a;return!1}function gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Qo(n,i))return!0}return!1}function Ay({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const by="components";function QS(t,e){return Sy(by,t,!0,e)||t}const Ry=Symbol.for("v-ndc");function Sy(t,e,n=!0,r=!1){const s=_t||et;if(s){const i=s.type;{const c=Iv(i,!1);if(c&&(c===e||c===Zt(e)||c===zo(Zt(e))))return i}const a=mh(s[t]||i[t],e)||mh(s.appContext[t],e);return!a&&r?i:a}}function mh(t,e){return t&&(t[e]||t[Zt(e)]||t[zo(Zt(e))])}const Py=t=>t.__isSuspense;function Cy(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):yy(t)}function Xo(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{er();const c=yi(n),l=Mt(e,n,t,a);return c(),tr(),l});return r?s.unshift(i):s.push(i),i}}const vn=t=>(e,n=et)=>{(!ra||t==="sp")&&Xo(t,(...r)=>e(...r),n)},ky=vn("bm"),Yo=vn("m"),Oy=vn("bu"),Ny=vn("u"),np=vn("bum"),Zo=vn("um"),Dy=vn("sp"),Vy=vn("rtg"),xy=vn("rtc");function My(t,e=et){Xo("ec",t,e)}function JS(t,e){if(_t===null)return t;const n=sa(_t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=xe]=e[s];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(er(),Mt(l,n,8,[t.el,c,t,e]),tr())}}function XS(t,e,n,r){let s;const i=n;if(ce(t)||Ge(t)){s=new Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=e(t[a],a,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const h=a[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}/*! #__NO_SIDE_EFFECTS__ */function Ct(t,e){return de(t)?We({name:t.name},e,{setup:t}):t}const ao=t=>!!t.type.__asyncLoader,yc=t=>t?bp(t)?sa(t):yc(t.parent):null,qs=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yc(t.parent),$root:t=>yc(t.root),$emit:t=>t.emit,$options:t=>ml(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,gl(t.update)}),$nextTick:t=>t.n||(t.n=pl.bind(t.proxy)),$watch:t=>rv.bind(t)}),za=(t,e)=>t!==xe&&!t.__isScriptSetup&&Te(t,e),Ly={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(za(r,e))return a[e]=1,r[e];if(s!==xe&&Te(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Te(h,e))return a[e]=3,i[e];if(n!==xe&&Te(n,e))return a[e]=4,n[e];vc&&(a[e]=0)}}const f=qs[e];let p,m;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==xe&&Te(n,e))return a[e]=4,n[e];if(m=l.config.globalProperties,Te(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return za(s,e)?(s[e]=n,!0):r!==xe&&Te(r,e)?(r[e]=n,!0):Te(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==xe&&Te(t,a)||za(e,a)||(c=i[0])&&Te(c,a)||Te(r,a)||Te(qs,a)||Te(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Te(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _h(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let vc=!0;function Fy(t){const e=ml(t),n=t.proxy,r=t.ctx;vc=!1,e.beforeCreate&&yh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:w,updated:C,activated:O,deactivated:N,beforeDestroy:z,beforeUnmount:$,destroyed:U,unmounted:te,render:ie,renderTracked:G,renderTriggered:R,errorCaptured:y,serverPrefetch:_,expose:T,inheritAttrs:b,components:A,directives:E,filters:Re}=e;if(h&&Uy(h,r,null),a)for(const ye in a){const ge=a[ye];de(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);Me(ye)&&(t.data=_i(ye))}if(vc=!0,i)for(const ye in i){const ge=i[ye],Tt=de(ge)?ge.bind(n,n):de(ge.get)?ge.get.bind(n,n):xt,Lt=!de(ge)&&de(ge.set)?ge.set.bind(n):xt,kt=Vt({get:Tt,set:Lt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>kt.value,set:Fe=>kt.value=Fe})}if(c)for(const ye in c)rp(c[ye],r,n,ye);if(l){const ye=de(l)?l.call(n):l;Reflect.ownKeys(ye).forEach(ge=>{co(ge,ye[ge])})}f&&yh(f,t,"c");function pe(ye,ge){ce(ge)?ge.forEach(Tt=>ye(Tt.bind(n))):ge&&ye(ge.bind(n))}if(pe(ky,p),pe(Yo,m),pe(Oy,w),pe(Ny,C),pe(sv,O),pe(iv,N),pe(My,y),pe(xy,G),pe(Vy,R),pe(np,$),pe(Zo,te),pe(Dy,_),ce(T))if(T.length){const ye=t.exposed||(t.exposed={});T.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:Tt=>n[ge]=Tt})})}else t.exposed||(t.exposed={});ie&&t.render===xt&&(t.render=ie),b!=null&&(t.inheritAttrs=b),A&&(t.components=A),E&&(t.directives=E)}function Uy(t,e,n=xt){ce(t)&&(t=Ec(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Gt(s.from||r,s.default,!0):i=Gt(s.from||r):i=Gt(s),Xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function yh(t,e,n){Mt(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function rp(t,e,n,r){const s=r.includes(".")?mp(n,r):()=>n[r];if(Ge(t)){const i=e[t];de(i)&&Hs(s,i)}else if(de(t))Hs(s,t.bind(n));else if(Me(t))if(ce(t))t.forEach(i=>rp(i,e,n,r));else{const i=de(t.handler)?t.handler.bind(n):e[t.handler];de(i)&&Hs(s,i,t)}}function ml(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ao(l,h,a,!0)),Ao(l,e,a)),Me(e)&&i.set(e,l),l}function Ao(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ao(t,i,n,!0),s&&s.forEach(a=>Ao(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=By[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const By={data:vh,props:Eh,emits:Eh,methods:Ls,computed:Ls,beforeCreate:mt,created:mt,beforeMount:mt,mounted:mt,beforeUpdate:mt,updated:mt,beforeDestroy:mt,beforeUnmount:mt,destroyed:mt,unmounted:mt,activated:mt,deactivated:mt,errorCaptured:mt,serverPrefetch:mt,components:Ls,directives:Ls,watch:jy,provide:vh,inject:$y};function vh(t,e){return e?t?function(){return We(de(t)?t.call(this,this):t,de(e)?e.call(this,this):e)}:e:t}function $y(t,e){return Ls(Ec(t),Ec(e))}function Ec(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ls(t,e){return t?We(Object.create(null),t,e):e}function Eh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:We(Object.create(null),_h(t),_h(e??{})):e}function jy(t,e){if(!t)return e;if(!e)return t;const n=We(Object.create(null),t);for(const r in e)n[r]=mt(t[r],e[r]);return n}function sp(){return{app:null,config:{isNativeTag:P_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qy=0;function Hy(t,e){return function(r,s=null){de(r)||(r=We({},r)),s!=null&&!Me(s)&&(s=null);const i=sp(),a=new WeakSet;let c=!1;const l=i.app={_uid:qy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(h){},use(h,...f){return a.has(h)||(h&&de(h.install)?(a.add(h),h.install(l,...f)):de(h)&&(a.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const m=Ce(r,s);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),c=!0,l._container=h,h.__vue_app__=l,sa(m.component)}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=Qr;Qr=l;try{return h()}finally{Qr=f}}};return l}}let Qr=null;function co(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Gt(t,e,n=!1){const r=et||_t;if(r||Qr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&de(e)?e.call(r&&r.proxy):e}}function zy(){return!!(et||_t||Qr)}const ip={},op=()=>Object.create(ip),ap=t=>Object.getPrototypeOf(t)===ip;function Ky(t,e,n,r=!1){const s={},i=op();t.propsDefaults=Object.create(null),cp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Hf(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Wy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=Ie(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Qo(t.emitsOptions,m))continue;const w=e[m];if(l)if(Te(i,m))w!==i[m]&&(i[m]=w,h=!0);else{const C=Zt(m);s[C]=wc(l,c,C,w,t,!1)}else w!==i[m]&&(i[m]=w,h=!0)}}}else{cp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Te(e,p)&&((f=fs(p))===p||!Te(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=wc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Te(e,p))&&(delete i[p],h=!0)}h&&pn(t.attrs,"set","")}function cp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(js(l))continue;const h=e[l];let f;s&&Te(s,f=Zt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Qo(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=Ie(n),h=c||xe;for(let f=0;f<i.length;f++){const p=i[f];n[p]=wc(s,l,p,h[p],t,!Te(h,p))}}return a}function wc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=Te(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&de(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=yi(s);r=h[n]=l.call(null,e),f()}}else r=l}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===fs(n))&&(r=!0))}return r}function lp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!de(t)){const f=p=>{l=!0;const[m,w]=lp(p,e,!0);We(a,m),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Me(t)&&r.set(t,Kr),Kr;if(ce(i))for(let f=0;f<i.length;f++){const p=Zt(i[f]);wh(p)&&(a[p]=xe)}else if(i)for(const f in i){const p=Zt(f);if(wh(p)){const m=i[f],w=a[p]=ce(m)||de(m)?{type:m}:We({},m);if(w){const C=Ah(Boolean,w.type),O=Ah(String,w.type);w[0]=C>-1,w[1]=O<0||C<O,(C>-1||Te(w,"default"))&&c.push(p)}}}const h=[a,c];return Me(t)&&r.set(t,h),h}function wh(t){return t[0]!=="$"&&!js(t)}function Th(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ih(t,e){return Th(t)===Th(e)}function Ah(t,e){return ce(e)?e.findIndex(n=>Ih(n,t)):de(e)&&Ih(e,t)?0:-1}const up=t=>t[0]==="_"||t==="$stable",_l=t=>ce(t)?t.map(zt):[zt(t)],Gy=(t,e,n)=>{if(e._n)return e;const r=es((...s)=>_l(e(...s)),n);return r._c=!1,r},hp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(up(s))continue;const i=t[s];if(de(i))e[s]=Gy(s,i,r);else if(i!=null){const a=_l(i);e[s]=()=>a}}},dp=(t,e)=>{const n=_l(e);t.slots.default=()=>n},Qy=(t,e)=>{const n=t.slots=op();if(t.vnode.shapeFlag&32){const r=e._;r?(We(n,e),bf(n,"_",r,!0)):hp(e,n)}else e&&dp(t,e)},Jy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=xe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(We(s,e),!n&&c===1&&delete s._):(i=!e.$stable,hp(e,s)),a=e}else e&&(dp(t,e),a={default:1});if(i)for(const c in s)!up(c)&&a[c]==null&&delete s[c]};function Tc(t,e,n,r,s=!1){if(ce(t)){t.forEach((m,w)=>Tc(m,e&&(ce(e)?e[w]:e),n,r,s));return}if(ao(r)&&!s)return;const i=r.shapeFlag&4?sa(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===xe?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Ge(h)?(f[h]=null,Te(p,h)&&(p[h]=null)):Xe(h)&&(h.value=null)),de(l))qn(l,c,12,[a,f]);else{const m=Ge(l),w=Xe(l);if(m||w){const C=()=>{if(t.f){const O=m?Te(p,l)?p[l]:f[l]:l.value;s?ce(O)&&nl(O,i):ce(O)?O.includes(i)||O.push(i):m?(f[l]=[i],Te(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else m?(f[l]=a,Te(p,l)&&(p[l]=a)):w&&(l.value=a,t.k&&(f[t.k]=a))};a?(C.id=-1,yt(C,n)):C()}}}const yt=Cy;function Xy(t){return Yy(t)}function Yy(t,e){const n=Rf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:w=xt,insertStaticContent:C}=t,O=(v,I,P,x=null,D=null,j=null,K=void 0,B=null,q=!!I.dynamicChildren)=>{if(v===I)return;v&&!gr(v,I)&&(x=V(v),Fe(v,D,j,!0),v=null),I.patchFlag===-2&&(q=!1,I.dynamicChildren=null);const{type:M,ref:Q,shapeFlag:re}=I;switch(M){case ta:N(v,I,P,x);break;case Rt:z(v,I,P,x);break;case lo:v==null&&$(I,P,x,K);break;case Ht:A(v,I,P,x,D,j,K,B,q);break;default:re&1?ie(v,I,P,x,D,j,K,B,q):re&6?E(v,I,P,x,D,j,K,B,q):(re&64||re&128)&&M.process(v,I,P,x,D,j,K,B,q,Y)}Q!=null&&D&&Tc(Q,v&&v.ref,j,I||v,!I)},N=(v,I,P,x)=>{if(v==null)r(I.el=c(I.children),P,x);else{const D=I.el=v.el;I.children!==v.children&&h(D,I.children)}},z=(v,I,P,x)=>{v==null?r(I.el=l(I.children||""),P,x):I.el=v.el},$=(v,I,P,x)=>{[v.el,v.anchor]=C(v.children,I,P,x,v.el,v.anchor)},U=({el:v,anchor:I},P,x)=>{let D;for(;v&&v!==I;)D=m(v),r(v,P,x),v=D;r(I,P,x)},te=({el:v,anchor:I})=>{let P;for(;v&&v!==I;)P=m(v),s(v),v=P;s(I)},ie=(v,I,P,x,D,j,K,B,q)=>{I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),v==null?G(I,P,x,D,j,K,B,q):_(v,I,D,j,K,B,q)},G=(v,I,P,x,D,j,K,B)=>{let q,M;const{props:Q,shapeFlag:re,transition:ne,dirs:ee}=v;if(q=v.el=a(v.type,j,Q&&Q.is,Q),re&8?f(q,v.children):re&16&&y(v.children,q,null,x,D,Ka(v,j),K,B),ee&&lr(v,null,x,"created"),R(q,v,v.scopeId,K,x),Q){for(const Se in Q)Se!=="value"&&!js(Se)&&i(q,Se,null,Q[Se],j,v.children,x,D,Ye);"value"in Q&&i(q,"value",null,Q.value,j),(M=Q.onVnodeBeforeMount)&&qt(M,x,v)}ee&&lr(v,null,x,"beforeMount");const se=Zy(D,ne);se&&ne.beforeEnter(q),r(q,I,P),((M=Q&&Q.onVnodeMounted)||se||ee)&&yt(()=>{M&&qt(M,x,v),se&&ne.enter(q),ee&&lr(v,null,x,"mounted")},D)},R=(v,I,P,x,D)=>{if(P&&w(v,P),x)for(let j=0;j<x.length;j++)w(v,x[j]);if(D){let j=D.subTree;if(I===j){const K=D.vnode;R(v,K,K.scopeId,K.slotScopeIds,D.parent)}}},y=(v,I,P,x,D,j,K,B,q=0)=>{for(let M=q;M<v.length;M++){const Q=v[M]=B?xn(v[M]):zt(v[M]);O(null,Q,I,P,x,D,j,K,B)}},_=(v,I,P,x,D,j,K)=>{const B=I.el=v.el;let{patchFlag:q,dynamicChildren:M,dirs:Q}=I;q|=v.patchFlag&16;const re=v.props||xe,ne=I.props||xe;let ee;if(P&&ur(P,!1),(ee=ne.onVnodeBeforeUpdate)&&qt(ee,P,I,v),Q&&lr(I,v,P,"beforeUpdate"),P&&ur(P,!0),M?T(v.dynamicChildren,M,B,P,x,Ka(I,D),j):K||ge(v,I,B,null,P,x,Ka(I,D),j,!1),q>0){if(q&16)b(B,I,re,ne,P,x,D);else if(q&2&&re.class!==ne.class&&i(B,"class",null,ne.class,D),q&4&&i(B,"style",re.style,ne.style,D),q&8){const se=I.dynamicProps;for(let Se=0;Se<se.length;Se++){const we=se[Se],qe=re[we],It=ne[we];(It!==qe||we==="value")&&i(B,we,qe,It,D,v.children,P,x,Ye)}}q&1&&v.children!==I.children&&f(B,I.children)}else!K&&M==null&&b(B,I,re,ne,P,x,D);((ee=ne.onVnodeUpdated)||Q)&&yt(()=>{ee&&qt(ee,P,I,v),Q&&lr(I,v,P,"updated")},x)},T=(v,I,P,x,D,j,K)=>{for(let B=0;B<I.length;B++){const q=v[B],M=I[B],Q=q.el&&(q.type===Ht||!gr(q,M)||q.shapeFlag&70)?p(q.el):P;O(q,M,Q,null,x,D,j,K,!0)}},b=(v,I,P,x,D,j,K)=>{if(P!==x){if(P!==xe)for(const B in P)!js(B)&&!(B in x)&&i(v,B,P[B],null,K,I.children,D,j,Ye);for(const B in x){if(js(B))continue;const q=x[B],M=P[B];q!==M&&B!=="value"&&i(v,B,M,q,K,I.children,D,j,Ye)}"value"in x&&i(v,"value",P.value,x.value,K)}},A=(v,I,P,x,D,j,K,B,q)=>{const M=I.el=v?v.el:c(""),Q=I.anchor=v?v.anchor:c("");let{patchFlag:re,dynamicChildren:ne,slotScopeIds:ee}=I;ee&&(B=B?B.concat(ee):ee),v==null?(r(M,P,x),r(Q,P,x),y(I.children||[],P,Q,D,j,K,B,q)):re>0&&re&64&&ne&&v.dynamicChildren?(T(v.dynamicChildren,ne,P,D,j,K,B),(I.key!=null||D&&I===D.subTree)&&fp(v,I,!0)):ge(v,I,P,Q,D,j,K,B,q)},E=(v,I,P,x,D,j,K,B,q)=>{I.slotScopeIds=B,v==null?I.shapeFlag&512?D.ctx.activate(I,P,x,K,q):Re(I,P,x,D,j,K,q):Le(v,I,q)},Re=(v,I,P,x,D,j,K)=>{const B=v.component=_v(v,x,D);if(ea(v)&&(B.ctx.renderer=Y),vv(B),B.asyncDep){if(D&&D.registerDep(B,pe,K),!v.el){const q=B.subTree=Ce(Rt);z(null,q,I,P)}}else pe(B,v,I,P,D,j,K)},Le=(v,I,P)=>{const x=I.component=v.component;if(Iy(v,I,P))if(x.asyncDep&&!x.asyncResolved){ye(x,I,P);return}else x.next=I,_y(x.update),x.effect.dirty=!0,x.update();else I.el=v.el,x.vnode=I},pe=(v,I,P,x,D,j,K)=>{const B=()=>{if(v.isMounted){let{next:Q,bu:re,u:ne,parent:ee,vnode:se}=v;{const Ot=pp(v);if(Ot){Q&&(Q.el=se.el,ye(v,Q,K)),Ot.asyncDep.then(()=>{v.isUnmounted||B()});return}}let Se=Q,we;ur(v,!1),Q?(Q.el=se.el,ye(v,Q,K)):Q=se,re&&io(re),(we=Q.props&&Q.props.onVnodeBeforeUpdate)&&qt(we,ee,Q,se),ur(v,!0);const qe=Ha(v),It=v.subTree;v.subTree=qe,O(It,qe,p(It.el),V(It),v,D,j),Q.el=qe.el,Se===null&&Ay(v,qe.el),ne&&yt(ne,D),(we=Q.props&&Q.props.onVnodeUpdated)&&yt(()=>qt(we,ee,Q,se),D)}else{let Q;const{el:re,props:ne}=I,{bm:ee,m:se,parent:Se}=v,we=ao(I);if(ur(v,!1),ee&&io(ee),!we&&(Q=ne&&ne.onVnodeBeforeMount)&&qt(Q,Se,I),ur(v,!0),re&&Oe){const qe=()=>{v.subTree=Ha(v),Oe(re,v.subTree,v,D,null)};we?I.type.__asyncLoader().then(()=>!v.isUnmounted&&qe()):qe()}else{const qe=v.subTree=Ha(v);O(null,qe,P,x,v,D,j),I.el=qe.el}if(se&&yt(se,D),!we&&(Q=ne&&ne.onVnodeMounted)){const qe=I;yt(()=>qt(Q,Se,qe),D)}(I.shapeFlag&256||Se&&ao(Se.vnode)&&Se.vnode.shapeFlag&256)&&v.a&&yt(v.a,D),v.isMounted=!0,I=P=x=null}},q=v.effect=new il(B,xt,()=>gl(M),v.scope),M=v.update=()=>{q.dirty&&q.run()};M.id=v.uid,ur(v,!0),M()},ye=(v,I,P)=>{I.component=v;const x=v.vnode.props;v.vnode=I,v.next=null,Wy(v,I.props,x,P),Jy(v,I.children,P),er(),ph(v),tr()},ge=(v,I,P,x,D,j,K,B,q=!1)=>{const M=v&&v.children,Q=v?v.shapeFlag:0,re=I.children,{patchFlag:ne,shapeFlag:ee}=I;if(ne>0){if(ne&128){Lt(M,re,P,x,D,j,K,B,q);return}else if(ne&256){Tt(M,re,P,x,D,j,K,B,q);return}}ee&8?(Q&16&&Ye(M,D,j),re!==M&&f(P,re)):Q&16?ee&16?Lt(M,re,P,x,D,j,K,B,q):Ye(M,D,j,!0):(Q&8&&f(P,""),ee&16&&y(re,P,x,D,j,K,B,q))},Tt=(v,I,P,x,D,j,K,B,q)=>{v=v||Kr,I=I||Kr;const M=v.length,Q=I.length,re=Math.min(M,Q);let ne;for(ne=0;ne<re;ne++){const ee=I[ne]=q?xn(I[ne]):zt(I[ne]);O(v[ne],ee,P,null,D,j,K,B,q)}M>Q?Ye(v,D,j,!0,!1,re):y(I,P,x,D,j,K,B,q,re)},Lt=(v,I,P,x,D,j,K,B,q)=>{let M=0;const Q=I.length;let re=v.length-1,ne=Q-1;for(;M<=re&&M<=ne;){const ee=v[M],se=I[M]=q?xn(I[M]):zt(I[M]);if(gr(ee,se))O(ee,se,P,null,D,j,K,B,q);else break;M++}for(;M<=re&&M<=ne;){const ee=v[re],se=I[ne]=q?xn(I[ne]):zt(I[ne]);if(gr(ee,se))O(ee,se,P,null,D,j,K,B,q);else break;re--,ne--}if(M>re){if(M<=ne){const ee=ne+1,se=ee<Q?I[ee].el:x;for(;M<=ne;)O(null,I[M]=q?xn(I[M]):zt(I[M]),P,se,D,j,K,B,q),M++}}else if(M>ne)for(;M<=re;)Fe(v[M],D,j,!0),M++;else{const ee=M,se=M,Se=new Map;for(M=se;M<=ne;M++){const pt=I[M]=q?xn(I[M]):zt(I[M]);pt.key!=null&&Se.set(pt.key,M)}let we,qe=0;const It=ne-se+1;let Ot=!1,Es=0;const In=new Array(It);for(M=0;M<It;M++)In[M]=0;for(M=ee;M<=re;M++){const pt=v[M];if(qe>=It){Fe(pt,D,j,!0);continue}let Nt;if(pt.key!=null)Nt=Se.get(pt.key);else for(we=se;we<=ne;we++)if(In[we-se]===0&&gr(pt,I[we])){Nt=we;break}Nt===void 0?Fe(pt,D,j,!0):(In[Nt-se]=M+1,Nt>=Es?Es=Nt:Ot=!0,O(pt,I[Nt],P,null,D,j,K,B,q),qe++)}const Vr=Ot?ev(In):Kr;for(we=Vr.length-1,M=It-1;M>=0;M--){const pt=se+M,Nt=I[pt],xr=pt+1<Q?I[pt+1].el:x;In[M]===0?O(null,Nt,P,xr,D,j,K,B,q):Ot&&(we<0||M!==Vr[we]?kt(Nt,P,xr,2):we--)}}},kt=(v,I,P,x,D=null)=>{const{el:j,type:K,transition:B,children:q,shapeFlag:M}=v;if(M&6){kt(v.component.subTree,I,P,x);return}if(M&128){v.suspense.move(I,P,x);return}if(M&64){K.move(v,I,P,Y);return}if(K===Ht){r(j,I,P);for(let re=0;re<q.length;re++)kt(q[re],I,P,x);r(v.anchor,I,P);return}if(K===lo){U(v,I,P);return}if(x!==2&&M&1&&B)if(x===0)B.beforeEnter(j),r(j,I,P),yt(()=>B.enter(j),D);else{const{leave:re,delayLeave:ne,afterLeave:ee}=B,se=()=>r(j,I,P),Se=()=>{re(j,()=>{se(),ee&&ee()})};ne?ne(j,se,Se):Se()}else r(j,I,P)},Fe=(v,I,P,x=!1,D=!1)=>{const{type:j,props:K,ref:B,children:q,dynamicChildren:M,shapeFlag:Q,patchFlag:re,dirs:ne,memoIndex:ee}=v;if(re===-2&&(D=!1),B!=null&&Tc(B,null,P,v,!0),ee!=null&&(I.renderCache[ee]=void 0),Q&256){I.ctx.deactivate(v);return}const se=Q&1&&ne,Se=!ao(v);let we;if(Se&&(we=K&&K.onVnodeBeforeUnmount)&&qt(we,I,v),Q&6)jt(v.component,P,x);else{if(Q&128){v.suspense.unmount(P,x);return}se&&lr(v,null,I,"beforeUnmount"),Q&64?v.type.remove(v,I,P,Y,x):M&&(j!==Ht||re>0&&re&64)?Ye(M,I,P,!1,!0):(j===Ht&&re&384||!D&&Q&16)&&Ye(q,I,P),x&&Ue(v)}(Se&&(we=K&&K.onVnodeUnmounted)||se)&&yt(()=>{we&&qt(we,I,v),se&&lr(v,null,I,"unmounted")},P)},Ue=v=>{const{type:I,el:P,anchor:x,transition:D}=v;if(I===Ht){Tn(P,x);return}if(I===lo){te(v);return}const j=()=>{s(P),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(v.shapeFlag&1&&D&&!D.persisted){const{leave:K,delayLeave:B}=D,q=()=>K(P,j);B?B(v.el,j,q):q()}else j()},Tn=(v,I)=>{let P;for(;v!==I;)P=m(v),s(v),v=P;s(I)},jt=(v,I,P)=>{const{bum:x,scope:D,update:j,subTree:K,um:B,m:q,a:M}=v;bh(q),bh(M),x&&io(x),D.stop(),j&&(j.active=!1,Fe(K,v,I,P)),B&&yt(B,I),yt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Ye=(v,I,P,x=!1,D=!1,j=0)=>{for(let K=j;K<v.length;K++)Fe(v[K],I,P,x,D)},V=v=>v.shapeFlag&6?V(v.component.subTree):v.shapeFlag&128?v.suspense.next():m(v.anchor||v.el);let J=!1;const W=(v,I,P)=>{v==null?I._vnode&&Fe(I._vnode,null,null,!0):O(I._vnode||null,v,I,null,null,null,P),J||(J=!0,ph(),Zf(),J=!1),I._vnode=v},Y={p:O,um:Fe,m:kt,r:Ue,mt:Re,mc:y,pc:ge,pbc:T,n:V,o:t};let ve,Oe;return{render:W,hydrate:ve,createApp:Hy(W,ve)}}function Ka({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ur({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Zy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fp(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=xn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&fp(a,c)),c.type===ta&&(c.el=a.el)}}function ev(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function pp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pp(e)}function bh(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const tv=Symbol.for("v-scx"),nv=()=>Gt(tv),Xi={};function Hs(t,e,n){return gp(t,e,n)}function gp(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:a,onTrigger:c}=xe){if(e&&i){const G=e;e=(...R)=>{G(...R),ie()}}const l=et,h=G=>r===!0?G:Ln(G,r===!1?1:void 0);let f,p=!1,m=!1;if(Xe(t)?(f=()=>t.value,p=To(t)):Er(t)?(f=()=>h(t),p=!0):ce(t)?(m=!0,p=t.some(G=>Er(G)||To(G)),f=()=>t.map(G=>{if(Xe(G))return G.value;if(Er(G))return h(G);if(de(G))return qn(G,l,2)})):de(t)?e?f=()=>qn(t,l,2):f=()=>(w&&w(),Mt(t,l,3,[C])):f=xt,e&&r){const G=f;f=()=>Ln(G())}let w,C=G=>{w=U.onStop=()=>{qn(G,l,4),w=U.onStop=void 0}},O;if(ra)if(C=xt,e?n&&Mt(e,l,3,[f(),m?[]:void 0,C]):f(),s==="sync"){const G=nv();O=G.__watcherHandles||(G.__watcherHandles=[])}else return xt;let N=m?new Array(t.length).fill(Xi):Xi;const z=()=>{if(!(!U.active||!U.dirty))if(e){const G=U.run();(r||p||(m?G.some((R,y)=>Gn(R,N[y])):Gn(G,N)))&&(w&&w(),Mt(e,l,3,[G,N===Xi?void 0:m&&N[0]===Xi?[]:N,C]),N=G)}else U.run()};z.allowRecurse=!!e;let $;s==="sync"?$=z:s==="post"?$=()=>yt(z,l&&l.suspense):(z.pre=!0,l&&(z.id=l.uid),$=()=>gl(z));const U=new il(f,xt,$),te=Nf(),ie=()=>{U.stop(),te&&nl(te.effects,U)};return e?n?z():N=U.run():s==="post"?yt(U.run.bind(U),l&&l.suspense):U.run(),O&&O.push(ie),ie}function rv(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?mp(r,t):()=>r[t]:t.bind(r,r);let i;de(e)?i=e:(i=e.handler,n=e);const a=yi(this),c=gp(s,i.bind(r),n);return a(),c}function mp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ln(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Xe(t))Ln(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)Ln(t[r],e,n);else if(wf(t)||Wr(t))t.forEach(r=>{Ln(r,e,n)});else if(Af(t)){for(const r in t)Ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ln(t[r],e,n)}return t}const ea=t=>t.type.__isKeepAlive;function sv(t,e){_p(t,"a",e)}function iv(t,e){_p(t,"da",e)}function _p(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ea(s.parent.vnode)&&ov(r,e,n,s),s=s.parent}}function ov(t,e,n,r){const s=Xo(e,t,r,!0);Zo(()=>{nl(r[e],s)},n)}const Vn=Symbol("_leaveCb"),Yi=Symbol("_enterCb");function av(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yo(()=>{t.isMounted=!0}),np(()=>{t.isUnmounting=!0}),t}const Dt=[Function,Array],yp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dt,onEnter:Dt,onAfterEnter:Dt,onEnterCancelled:Dt,onBeforeLeave:Dt,onLeave:Dt,onAfterLeave:Dt,onLeaveCancelled:Dt,onBeforeAppear:Dt,onAppear:Dt,onAfterAppear:Dt,onAppearCancelled:Dt},vp=t=>{const e=t.subTree;return e.component?vp(e.component):e},cv={name:"BaseTransition",props:yp,setup(t,{slots:e}){const n=yv(),r=av();return()=>{const s=e.default&&wp(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const m of s)if(m.type!==Rt){i=m;break}}const a=Ie(t),{mode:c}=a;if(r.isLeaving)return Wa(i);const l=Rh(i);if(!l)return Wa(i);let h=Ic(l,a,r,n,m=>h=m);bo(l,h);const f=n.subTree,p=f&&Rh(f);if(p&&p.type!==Rt&&!gr(l,p)&&vp(n).type!==Rt){const m=Ic(p,a,r,n);if(bo(p,m),c==="out-in"&&l.type!==Rt)return r.isLeaving=!0,m.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Wa(i);c==="in-out"&&l.type!==Rt&&(m.delayLeave=(w,C,O)=>{const N=Ep(r,p);N[String(p.key)]=p,w[Vn]=()=>{C(),w[Vn]=void 0,delete h.delayedLeave},h.delayedLeave=O})}return i}}},lv=cv;function Ep(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Ic(t,e,n,r,s){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:h,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:m,onLeave:w,onAfterLeave:C,onLeaveCancelled:O,onBeforeAppear:N,onAppear:z,onAfterAppear:$,onAppearCancelled:U}=e,te=String(t.key),ie=Ep(n,t),G=(_,T)=>{_&&Mt(_,r,9,T)},R=(_,T)=>{const b=T[1];G(_,T),ce(_)?_.every(A=>A.length<=1)&&b():_.length<=1&&b()},y={mode:a,persisted:c,beforeEnter(_){let T=l;if(!n.isMounted)if(i)T=N||l;else return;_[Vn]&&_[Vn](!0);const b=ie[te];b&&gr(t,b)&&b.el[Vn]&&b.el[Vn](),G(T,[_])},enter(_){let T=h,b=f,A=p;if(!n.isMounted)if(i)T=z||h,b=$||f,A=U||p;else return;let E=!1;const Re=_[Yi]=Le=>{E||(E=!0,Le?G(A,[_]):G(b,[_]),y.delayedLeave&&y.delayedLeave(),_[Yi]=void 0)};T?R(T,[_,Re]):Re()},leave(_,T){const b=String(t.key);if(_[Yi]&&_[Yi](!0),n.isUnmounting)return T();G(m,[_]);let A=!1;const E=_[Vn]=Re=>{A||(A=!0,T(),Re?G(O,[_]):G(C,[_]),_[Vn]=void 0,ie[b]===t&&delete ie[b])};ie[b]=t,w?R(w,[_,E]):E()},clone(_){const T=Ic(_,e,n,r,s);return s&&s(T),T}};return y}function Wa(t){if(ea(t))return t=Qn(t),t.children=null,t}function Rh(t){if(!ea(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&de(n.default))return n.default()}}function bo(t,e){t.shapeFlag&6&&t.component?bo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Ht?(a.patchFlag&128&&s++,r=r.concat(wp(a.children,e,c))):(e||a.type!==Rt)&&r.push(c!=null?Qn(a,{key:c}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}const uv=t=>t.__isTeleport,Ht=Symbol.for("v-fgt"),ta=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),lo=Symbol.for("v-stc"),zs=[];let Ut=null;function He(t=!1){zs.push(Ut=t?null:[])}function hv(){zs.pop(),Ut=zs[zs.length-1]||null}let si=1;function Sh(t){si+=t}function Tp(t){return t.dynamicChildren=si>0?Ut||Kr:null,hv(),si>0&&Ut&&Ut.push(t),t}function st(t,e,n,r,s,i){return Tp(X(t,e,n,r,s,i,!0))}function na(t,e,n,r,s){return Tp(Ce(t,e,n,r,s,!0))}function Ac(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const Ip=({key:t})=>t??null,uo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Xe(t)||de(t)?{i:_t,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===Ht?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ip(e),ref:e&&uo(e),scopeId:Jo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_t};return c?(yl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),si>0&&!a&&Ut&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ut.push(l),l}const Ce=dv;function dv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ry)&&(t=Rt),Ac(t)){const c=Qn(t,e,!0);return n&&yl(c,n),si>0&&!i&&Ut&&(c.shapeFlag&6?Ut[Ut.indexOf(t)]=c:Ut.push(c)),c.patchFlag=-2,c}if(Av(t)&&(t=t.__vccOpts),e){e=fv(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Ko(c)),Me(l)&&(Kf(l)&&!ce(l)&&(l=We({},l)),e.style=sl(l))}const a=Ge(t)?1:Py(t)?128:uv(t)?64:Me(t)?4:de(t)?2:0;return X(t,e,n,r,s,a,i,!0)}function fv(t){return t?Kf(t)||ap(t)?We({},t):t:null}function Qn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?pv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Ip(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(uo(e)):[i,uo(e)]:uo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ht?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&bo(f,l.clone(f)),f}function Fs(t=" ",e=0){return Ce(ta,null,t,e)}function Ap(t,e){const n=Ce(lo,null,t);return n.staticCount=e,n}function gn(t="",e=!1){return e?(He(),na(Rt,null,t)):Ce(Rt,null,t)}function zt(t){return t==null||typeof t=="boolean"?Ce(Rt):ce(t)?Ce(Ht,null,t.slice()):typeof t=="object"?xn(t):Ce(ta,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function yl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),yl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!ap(e)?e._ctx=_t:s===3&&_t&&(_t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else de(e)?(e={default:e,_ctx:_t},n=32):(e=String(e),r&64?(n=16,e=[Fs(e)]):n=8);t.children=e,t.shapeFlag|=n}function pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ko([e.class,r.class]));else if(s==="style")e.style=sl([e.style,r.style]);else if(jo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function qt(t,e,n,r=null){Mt(t,e,7,[n,r])}const gv=sp();let mv=0;function _v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gv,i={uid:mv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lp(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:r.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ey.bind(null,i),t.ce&&t.ce(i),i}let et=null;const yv=()=>et||_t;let Ro,bc;{const t=Rf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Ro=e("__VUE_INSTANCE_SETTERS__",n=>et=n),bc=e("__VUE_SSR_SETTERS__",n=>ra=n)}const yi=t=>{const e=et;return Ro(t),t.scope.on(),()=>{t.scope.off(),Ro(e)}},Ph=()=>{et&&et.scope.off(),Ro(null)};function bp(t){return t.vnode.shapeFlag&4}let ra=!1;function vv(t,e=!1){e&&bc(e);const{props:n,children:r}=t.vnode,s=bp(t);Ky(t,n,s,e),Qy(t,r);const i=s?Ev(t,e):void 0;return e&&bc(!1),i}function Ev(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ly);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Tv(t):null,i=yi(t);er();const a=qn(r,t,0,[t.props,s]);if(tr(),i(),Tf(a)){if(a.then(Ph,Ph),e)return a.then(c=>{Ch(t,c,e)}).catch(c=>{Go(c,t,0)});t.asyncDep=a}else Ch(t,a,e)}else Rp(t,e)}function Ch(t,e,n){de(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Jf(e)),Rp(t,n)}let kh;function Rp(t,e,n){const r=t.type;if(!t.render){if(!e&&kh&&!r.render){const s=r.template||ml(t).template;if(s){const{isCustomElement:i,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=We(We({isCustomElement:i,delimiters:c},a),l);r.render=kh(s,h)}}t.render=r.render||xt}{const s=yi(t);er();try{Fy(t)}finally{tr(),s()}}}const wv={get(t,e){return Et(t,"get",""),t[e]}};function Tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,wv),slots:t.slots,emit:t.emit,expose:e}}function sa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jf(hl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in qs)return qs[n](t)},has(e,n){return n in e||n in qs}})):t.proxy}function Iv(t,e=!0){return de(t)?t.displayName||t.name:t.name||e&&t.__name}function Av(t){return de(t)&&"__vccOpts"in t}const Vt=(t,e)=>cy(t,e,ra);function vl(t,e,n){const r=arguments.length;return r===2?Me(e)&&!ce(e)?Ac(e)?Ce(t,null,[e]):Ce(t,e):Ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ac(n)&&(n=[n]),Ce(t,e,n))}const bv="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Rv="http://www.w3.org/2000/svg",Sv="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,Oh=cn&&cn.createElement("template"),Pv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?cn.createElementNS(Rv,t):e==="mathml"?cn.createElementNS(Sv,t):n?cn.createElement(t,{is:n}):cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>cn.createTextNode(t),createComment:t=>cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Oh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pn="transition",Vs="animation",ii=Symbol("_vtc"),vi=(t,{slots:e})=>vl(lv,Cv(t),e);vi.displayName="Transition";const Sp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};vi.props=We({},yp,Sp);const hr=(t,e=[])=>{ce(t)?t.forEach(n=>n(...e)):t&&t(...e)},Nh=t=>t?ce(t)?t.some(e=>e.length>1):t.length>1:!1;function Cv(t){const e={};for(const A in t)A in Sp||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:h=a,appearToClass:f=c,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,C=kv(s),O=C&&C[0],N=C&&C[1],{onBeforeEnter:z,onEnter:$,onEnterCancelled:U,onLeave:te,onLeaveCancelled:ie,onBeforeAppear:G=z,onAppear:R=$,onAppearCancelled:y=U}=e,_=(A,E,Re)=>{dr(A,E?f:c),dr(A,E?h:a),Re&&Re()},T=(A,E)=>{A._isLeaving=!1,dr(A,p),dr(A,w),dr(A,m),E&&E()},b=A=>(E,Re)=>{const Le=A?R:$,pe=()=>_(E,A,Re);hr(Le,[E,pe]),Dh(()=>{dr(E,A?l:i),Cn(E,A?f:c),Nh(Le)||Vh(E,r,O,pe)})};return We(e,{onBeforeEnter(A){hr(z,[A]),Cn(A,i),Cn(A,a)},onBeforeAppear(A){hr(G,[A]),Cn(A,l),Cn(A,h)},onEnter:b(!1),onAppear:b(!0),onLeave(A,E){A._isLeaving=!0;const Re=()=>T(A,E);Cn(A,p),Cn(A,m),Dv(),Dh(()=>{A._isLeaving&&(dr(A,p),Cn(A,w),Nh(te)||Vh(A,r,N,Re))}),hr(te,[A,Re])},onEnterCancelled(A){_(A,!1),hr(U,[A])},onAppearCancelled(A){_(A,!0),hr(y,[A])},onLeaveCancelled(A){T(A),hr(ie,[A])}})}function kv(t){if(t==null)return null;if(Me(t))return[Ga(t.enter),Ga(t.leave)];{const e=Ga(t);return[e,e]}}function Ga(t){return D_(t)}function Cn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ii]||(t[ii]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ii];n&&(n.delete(e),n.size||(t[ii]=void 0))}function Dh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ov=0;function Vh(t,e,n,r){const s=t._endId=++Ov,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:a,timeout:c,propCount:l}=Nv(t,e);if(!a)return r();const h=a+"end";let f=0;const p=()=>{t.removeEventListener(h,m),i()},m=w=>{w.target===t&&++f>=l&&p()};setTimeout(()=>{f<l&&p()},c+1),t.addEventListener(h,m)}function Nv(t,e){const n=window.getComputedStyle(t),r=C=>(n[C]||"").split(", "),s=r(`${Pn}Delay`),i=r(`${Pn}Duration`),a=xh(s,i),c=r(`${Vs}Delay`),l=r(`${Vs}Duration`),h=xh(c,l);let f=null,p=0,m=0;e===Pn?a>0&&(f=Pn,p=a,m=i.length):e===Vs?h>0&&(f=Vs,p=h,m=l.length):(p=Math.max(a,h),f=p>0?a>h?Pn:Vs:null,m=f?f===Pn?i.length:l.length:0);const w=f===Pn&&/\b(transform|all)(,|$)/.test(r(`${Pn}Property`).toString());return{type:f,timeout:p,propCount:m,hasTransform:w}}function xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Mh(n)+Mh(t[r])))}function Mh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Dv(){return document.body.offsetHeight}function Vv(t,e,n){const r=t[ii];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lh=Symbol("_vod"),xv=Symbol("_vsh"),Mv=Symbol(""),Lv=/(^|;)\s*display\s*:/;function Fv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&ho(r,c,"")}else for(const a in e)n[a]==null&&ho(r,a,"");for(const a in n)a==="display"&&(i=!0),ho(r,a,n[a])}else if(s){if(e!==n){const a=r[Mv];a&&(n+=";"+a),r.cssText=n,i=Lv.test(n)}}else e&&t.removeAttribute("style");Lh in t&&(t[Lh]=i?r.display:"",t[xv]&&(r.display="none"))}const Fh=/\s*!important$/;function ho(t,e,n){if(ce(n))n.forEach(r=>ho(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Uv(t,e);Fh.test(n)?t.setProperty(fs(r),n.replace(Fh,""),"important"):t[r]=n}}const Uh=["Webkit","Moz","ms"],Qa={};function Uv(t,e){const n=Qa[e];if(n)return n;let r=Zt(e);if(r!=="filter"&&r in t)return Qa[e]=r;r=zo(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in t)return Qa[e]=i}return e}const Bh="http://www.w3.org/1999/xlink";function $h(t,e,n,r,s,i=U_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Bh,e.slice(6,e.length)):t.setAttributeNS(Bh,e,n):n==null||i&&!Sf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zn(n)?String(n):n)}function Bv(t,e,n,r,s,i,a){if(e==="innerHTML"||e==="textContent"){r&&a(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?"":String(n);(h!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=Sf(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function $r(t,e,n,r){t.addEventListener(e,n,r)}function $v(t,e,n,r){t.removeEventListener(e,n,r)}const jh=Symbol("_vei");function jv(t,e,n,r,s=null){const i=t[jh]||(t[jh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=qv(e);if(r){const h=i[e]=Kv(r,s);$r(t,c,h,l)}else a&&($v(t,c,a,l),i[e]=void 0)}}const qh=/(?:Once|Passive|Capture)$/;function qv(t){let e;if(qh.test(t)){e={};let r;for(;r=t.match(qh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fs(t.slice(2)),e]}let Ja=0;const Hv=Promise.resolve(),zv=()=>Ja||(Hv.then(()=>Ja=0),Ja=Date.now());function Kv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Mt(Wv(r,n.value),e,5,[r])};return n.value=t,n.attached=zv(),n}function Wv(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Gv=(t,e,n,r,s,i,a,c,l)=>{const h=s==="svg";e==="class"?Vv(t,r,h):e==="style"?Fv(t,n,r):jo(e)?tl(e)||jv(t,e,n,r,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(t,e,r,h))?(Bv(t,e,r,i,a,c,l),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&$h(t,e,r,h,a,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),$h(t,e,r,h))};function Qv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hh(e)&&de(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hh(e)&&Ge(n)?!1:e in t}const zh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>io(e,n):e};function Jv(t){t.target.composing=!0}function Kh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xa=Symbol("_assign"),YS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Xa]=zh(s);const i=r||s.props&&s.props.type==="number";$r(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=dc(c)),t[Xa](c)}),n&&$r(t,"change",()=>{t.value=t.value.trim()}),e||($r(t,"compositionstart",Jv),$r(t,"compositionend",Kh),$r(t,"change",Kh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Xa]=zh(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?dc(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Xv=["ctrl","shift","alt","meta"],Yv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Xv.some(n=>t[`${n}Key`]&&!e.includes(n))},ZS=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=Yv[e[a]];if(c&&c(s,e))return}return t(s,...i)})},Zv=We({patchProp:Gv},Pv);let Wh;function e0(){return Wh||(Wh=Xy(Zv))}const t0=(...t)=>{const e=e0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=r0(r);if(!s)return;const i=e._component;!de(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const a=n(s,!1,n0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function n0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function r0(t){return Ge(t)?document.querySelector(t):t}var s0=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Pp;const ia=t=>Pp=t,Cp=Symbol();function Rc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ks;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ks||(Ks={}));function i0(){const t=Of(!0),e=t.run(()=>Wt({}));let n=[],r=[];const s=hl({install(i){ia(s),s._a=i,i.provide(Cp,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return!this._a&&!s0?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const kp=()=>{};function Gh(t,e,n,r=kp){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Nf()&&$_(s),s}function Br(t,...e){t.slice().forEach(n=>{n(...e)})}const o0=t=>t();function Sc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Rc(s)&&Rc(r)&&t.hasOwnProperty(n)&&!Xe(r)&&!Er(r)?t[n]=Sc(s,r):t[n]=r}return t}const a0=Symbol();function c0(t){return!Rc(t)||!t.hasOwnProperty(a0)}const{assign:Nn}=Object;function l0(t){return!!(Xe(t)&&t.effect)}function u0(t,e,n,r){const{state:s,actions:i,getters:a}=e,c=n.state.value[t];let l;function h(){c||(n.state.value[t]=s?s():{});const f=dy(n.state.value[t]);return Nn(f,i,Object.keys(a||{}).reduce((p,m)=>(p[m]=hl(Vt(()=>{ia(n);const w=n._s.get(t);return a[m].call(w,w)})),p),{}))}return l=Op(t,h,e,n,r,!0),l}function Op(t,e,n={},r,s,i){let a;const c=Nn({actions:{}},n),l={deep:!0};let h,f,p=[],m=[],w;const C=r.state.value[t];!i&&!C&&(r.state.value[t]={}),Wt({});let O;function N(y){let _;h=f=!1,typeof y=="function"?(y(r.state.value[t]),_={type:Ks.patchFunction,storeId:t,events:w}):(Sc(r.state.value[t],y),_={type:Ks.patchObject,payload:y,storeId:t,events:w});const T=O=Symbol();pl().then(()=>{O===T&&(h=!0)}),f=!0,Br(p,_,r.state.value[t])}const z=i?function(){const{state:_}=n,T=_?_():{};this.$patch(b=>{Nn(b,T)})}:kp;function $(){a.stop(),p=[],m=[],r._s.delete(t)}function U(y,_){return function(){ia(r);const T=Array.from(arguments),b=[],A=[];function E(pe){b.push(pe)}function Re(pe){A.push(pe)}Br(m,{args:T,name:y,store:ie,after:E,onError:Re});let Le;try{Le=_.apply(this&&this.$id===t?this:ie,T)}catch(pe){throw Br(A,pe),pe}return Le instanceof Promise?Le.then(pe=>(Br(b,pe),pe)).catch(pe=>(Br(A,pe),Promise.reject(pe))):(Br(b,Le),Le)}}const te={_p:r,$id:t,$onAction:Gh.bind(null,m),$patch:N,$reset:z,$subscribe(y,_={}){const T=Gh(p,y,_.detached,()=>b()),b=a.run(()=>Hs(()=>r.state.value[t],A=>{(_.flush==="sync"?f:h)&&y({storeId:t,type:Ks.direct,events:w},A)},Nn({},l,_)));return T},$dispose:$},ie=_i(te);r._s.set(t,ie);const R=(r._a&&r._a.runWithContext||o0)(()=>r._e.run(()=>(a=Of()).run(e)));for(const y in R){const _=R[y];if(Xe(_)&&!l0(_)||Er(_))i||(C&&c0(_)&&(Xe(_)?_.value=C[y]:Sc(_,C[y])),r.state.value[t][y]=_);else if(typeof _=="function"){const T=U(y,_);R[y]=T,c.actions[y]=_}}return Nn(ie,R),Nn(Ie(ie),R),Object.defineProperty(ie,"$state",{get:()=>r.state.value[t],set:y=>{N(_=>{Nn(_,y)})}}),r._p.forEach(y=>{Nn(ie,a.run(()=>y({store:ie,app:r._a,pinia:r,options:c})))}),C&&i&&n.hydrate&&n.hydrate(ie.$state,C),h=!0,f=!0,ie}function El(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function a(c,l){const h=zy();return c=c||(h?Gt(Cp,null):null),c&&ia(c),c=Pp,c._s.has(r)||(i?Op(r,e,s,c):u0(r,s,c)),c._s.get(r)}return a.$id=r,a}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const jr=typeof document<"u";function h0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Pe=Object.assign;function Ya(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Ws=()=>{},$t=Array.isArray,Np=/#/g,d0=/&/g,f0=/\//g,p0=/=/g,g0=/\?/g,Dp=/\+/g,m0=/%5B/g,_0=/%5D/g,Vp=/%5E/g,y0=/%60/g,xp=/%7B/g,v0=/%7C/g,Mp=/%7D/g,E0=/%20/g;function wl(t){return encodeURI(""+t).replace(v0,"|").replace(m0,"[").replace(_0,"]")}function w0(t){return wl(t).replace(xp,"{").replace(Mp,"}").replace(Vp,"^")}function Pc(t){return wl(t).replace(Dp,"%2B").replace(E0,"+").replace(Np,"%23").replace(d0,"%26").replace(y0,"`").replace(xp,"{").replace(Mp,"}").replace(Vp,"^")}function T0(t){return Pc(t).replace(p0,"%3D")}function I0(t){return wl(t).replace(Np,"%23").replace(g0,"%3F")}function A0(t){return t==null?"":I0(t).replace(f0,"%2F")}function oi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const b0=/\/$/,R0=t=>t.replace(b0,"");function Za(t,e,n="/"){let r,s={},i="",a="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),a=e.slice(c,e.length)),r=k0(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:oi(a)}}function S0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Qh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function P0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ts(e.matched[r],n.matched[s])&&Lp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ts(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Lp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!C0(t[n],e[n]))return!1;return!0}function C0(t,e){return $t(t)?Jh(t,e):$t(e)?Jh(e,t):t===e}function Jh(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function k0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,c;for(a=0;a<r.length;a++)if(c=r[a],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ai;(function(t){t.pop="pop",t.push="push"})(ai||(ai={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function O0(t){if(!t)if(jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),R0(t)}const N0=/^[^#]+#/;function D0(t,e){return t.replace(N0,"#")+e}function V0(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oa=()=>({left:window.scrollX,top:window.scrollY});function x0(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=V0(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Xh(t,e){return(history.state?history.state.position-e:-1)+t}const Cc=new Map;function M0(t,e){Cc.set(t,e)}function L0(t){const e=Cc.get(t);return Cc.delete(t),e}let F0=()=>location.protocol+"//"+location.host;function Fp(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),Qh(l,"")}return Qh(n,t)+r+s}function U0(t,e,n,r){let s=[],i=[],a=null;const c=({state:m})=>{const w=Fp(t,location),C=n.value,O=e.value;let N=0;if(m){if(n.value=w,e.value=m,a&&a===C){a=null;return}N=O?m.position-O.position:0}else r(w);s.forEach(z=>{z(n.value,C,{delta:N,type:ai.pop,direction:N?N>0?Gs.forward:Gs.back:Gs.unknown})})};function l(){a=n.value}function h(m){s.push(m);const w=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(w),w}function f(){const{history:m}=window;m.state&&m.replaceState(Pe({},m.state,{scroll:oa()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function Yh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oa():null}}function B0(t){const{history:e,location:n}=window,r={value:Fp(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:F0()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(w){console.error(w),n[f?"replace":"assign"](m)}}function a(l,h){const f=Pe({},e.state,Yh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Pe({},s.value,e.state,{forward:l,scroll:oa()});i(f.current,f,!0);const p=Pe({},Yh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:a}}function $0(t){t=O0(t);const e=B0(t),n=U0(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:D0.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function j0(t){return typeof t=="string"||t&&typeof t=="object"}function Up(t){return typeof t=="string"||typeof t=="symbol"}const Bp=Symbol("");var Zh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Zh||(Zh={}));function ns(t,e){return Pe(new Error,{type:t,[Bp]:!0},e)}function an(t,e){return t instanceof Error&&Bp in t&&(e==null||!!(t.type&e))}const ed="[^/]+?",q0={sensitive:!1,strict:!1,start:!0,end:!0},H0=/[.+*?^${}()[\]/\\]/g;function z0(t,e){const n=Pe({},q0,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let w=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(H0,"\\$&"),w+=40;else if(m.type===1){const{value:C,repeatable:O,optional:N,regexp:z}=m;i.push({name:C,repeatable:O,optional:N});const $=z||ed;if($!==ed){w+=10;try{new RegExp(`(${$})`)}catch(te){throw new Error(`Invalid custom RegExp for param "${C}" (${$}): `+te.message)}}let U=O?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(U=N&&h.length<2?`(?:/${U})`:"/"+U),N&&(U+="?"),s+=U,w+=20,N&&(w+=-8),O&&(w+=-20),$===".*"&&(w+=-50)}f.push(w)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(a),p={};if(!f)return null;for(let m=1;m<f.length;m++){const w=f[m]||"",C=i[m-1];p[C.name]=w&&C.repeatable?w.split("/"):w}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const w of m)if(w.type===0)f+=w.value;else if(w.type===1){const{value:C,repeatable:O,optional:N}=w,z=C in h?h[C]:"";if($t(z)&&!O)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const $=$t(z)?z.join("/"):z;if(!$)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=$}}return f||"/"}return{re:a,score:r,keys:i,parse:c,stringify:l}}function K0(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $p(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=K0(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(td(r))return 1;if(td(s))return-1}return s.length-r.length}function td(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const W0={type:0,value:""},G0=/[a-zA-Z0-9_]/;function Q0(t){if(!t)return[[]];if(t==="/")return[[W0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),a()):l===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:l==="("?n=2:G0.test(l)?m():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function J0(t,e,n){const r=z0(Q0(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function X0(t,e){const n=[],r=new Map;e=sd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,w){const C=!w,O=Y0(p);O.aliasOf=w&&w.record;const N=sd(e,p),z=[O];if("alias"in p){const te=typeof p.alias=="string"?[p.alias]:p.alias;for(const ie of te)z.push(Pe({},O,{components:w?w.record.components:O.components,path:ie,aliasOf:w?w.record:O}))}let $,U;for(const te of z){const{path:ie}=te;if(m&&ie[0]!=="/"){const G=m.record.path,R=G[G.length-1]==="/"?"":"/";te.path=m.record.path+(ie&&R+ie)}if($=J0(te,m,N),w?w.alias.push($):(U=U||$,U!==$&&U.alias.push($),C&&p.name&&!rd($)&&a(p.name)),jp($)&&l($),O.children){const G=O.children;for(let R=0;R<G.length;R++)i(G[R],$,w&&w.children[R])}w=w||$}return U?()=>{a(U)}:Ws}function a(p){if(Up(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function c(){return n}function l(p){const m=tE(p,n);n.splice(m,0,p),p.record.name&&!rd(p)&&r.set(p.record.name,p)}function h(p,m){let w,C={},O,N;if("name"in p&&p.name){if(w=r.get(p.name),!w)throw ns(1,{location:p});N=w.record.name,C=Pe(nd(m.params,w.keys.filter(U=>!U.optional).concat(w.parent?w.parent.keys.filter(U=>U.optional):[]).map(U=>U.name)),p.params&&nd(p.params,w.keys.map(U=>U.name))),O=w.stringify(C)}else if(p.path!=null)O=p.path,w=n.find(U=>U.re.test(O)),w&&(C=w.parse(O),N=w.record.name);else{if(w=m.name?r.get(m.name):n.find(U=>U.re.test(m.path)),!w)throw ns(1,{location:p,currentLocation:m});N=w.record.name,C=Pe({},m.params,p.params),O=w.stringify(C)}const z=[];let $=w;for(;$;)z.unshift($.record),$=$.parent;return{name:N,path:O,params:C,matched:z,meta:eE(z)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function nd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Y0(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Z0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Z0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eE(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function sd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function tE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$p(t,e[i])<0?r=i:n=i+1}const s=nE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function nE(t){let e=t;for(;e=e.parent;)if(jp(e)&&$p(t,e)===0)return e}function jp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function rE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Dp," "),a=i.indexOf("="),c=oi(a<0?i:i.slice(0,a)),l=a<0?null:oi(i.slice(a+1));if(c in e){let h=e[c];$t(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function id(t){let e="";for(let n in t){const r=t[n];if(n=T0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&Pc(i)):[r&&Pc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function sE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const iE=Symbol(""),od=Symbol(""),Tl=Symbol(""),qp=Symbol(""),kc=Symbol("");function xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(ns(4,{from:n,to:e})):m instanceof Error?l(m):j0(m)?l(ns(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function ec(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const c in a.components){let l=a.components[c];if(!(e!=="beforeRouteEnter"&&!a.instances[c]))if(oE(l)){const f=(l.__vccOpts||l)[e];f&&i.push(Mn(f,n,r,a,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${a.path}"`));const p=h0(f)?f.default:f;a.components[c]=p;const w=(p.__vccOpts||p)[e];return w&&Mn(w,n,r,a,c,s)()}))}}return i}function oE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ad(t){const e=Gt(Tl),n=Gt(qp),r=Vt(()=>{const l=ke(t.to);return e.resolve(l)}),s=Vt(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(ts.bind(null,f));if(m>-1)return m;const w=cd(l[h-2]);return h>1&&cd(f)===w&&p[p.length-1].path!==w?p.findIndex(ts.bind(null,l[h-2])):m}),i=Vt(()=>s.value>-1&&lE(n.params,r.value.params)),a=Vt(()=>s.value>-1&&s.value===n.matched.length-1&&Lp(n.params,r.value.params));function c(l={}){return cE(l)?e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(Ws):Promise.resolve()}return{route:r,href:Vt(()=>r.value.href),isActive:i,isExactActive:a,navigate:c}}const aE=Ct({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ad,setup(t,{slots:e}){const n=_i(ad(t)),{options:r}=Gt(Tl),s=Vt(()=>({[ld(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ld(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:vl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Il=aE;function cE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function cd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ld=(t,e,n)=>t??e??n,uE=Ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Gt(kc),s=Vt(()=>t.route||r.value),i=Gt(od,0),a=Vt(()=>{let h=ke(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Vt(()=>s.value.matched[a.value]);co(od,Vt(()=>a.value+1)),co(iE,c),co(kc,s);const l=Wt();return Hs(()=>[l.value,c.value,t.name],([h,f,p],[m,w,C])=>{f&&(f.instances[p]=h,w&&w!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=w.leaveGuards),f.updateGuards.size||(f.updateGuards=w.updateGuards))),h&&f&&(!w||!ts(f,w)||!m)&&(f.enterCallbacks[p]||[]).forEach(O=>O(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return ud(n.default,{Component:m,route:h});const w=p.props[f],C=w?w===!0?h.params:typeof w=="function"?w(h):w:null,N=vl(m,Pe({},C,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return ud(n.default,{Component:N,route:h})||N}}});function ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Hp=uE;function hE(t){const e=X0(t.routes,t),n=t.parseQuery||rE,r=t.stringifyQuery||id,s=t.history,i=xs(),a=xs(),c=xs(),l=ly(kn);let h=kn;jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Ya.bind(null,V=>""+V),p=Ya.bind(null,A0),m=Ya.bind(null,oi);function w(V,J){let W,Y;return Up(V)?(W=e.getRecordMatcher(V),Y=J):Y=V,e.addRoute(Y,W)}function C(V){const J=e.getRecordMatcher(V);J&&e.removeRoute(J)}function O(){return e.getRoutes().map(V=>V.record)}function N(V){return!!e.getRecordMatcher(V)}function z(V,J){if(J=Pe({},J||l.value),typeof V=="string"){const I=Za(n,V,J.path),P=e.resolve({path:I.path},J),x=s.createHref(I.fullPath);return Pe(I,P,{params:m(P.params),hash:oi(I.hash),redirectedFrom:void 0,href:x})}let W;if(V.path!=null)W=Pe({},V,{path:Za(n,V.path,J.path).path});else{const I=Pe({},V.params);for(const P in I)I[P]==null&&delete I[P];W=Pe({},V,{params:p(I)}),J.params=p(J.params)}const Y=e.resolve(W,J),ve=V.hash||"";Y.params=f(m(Y.params));const Oe=S0(r,Pe({},V,{hash:w0(ve),path:Y.path})),v=s.createHref(Oe);return Pe({fullPath:Oe,hash:ve,query:r===id?sE(V.query):V.query||{}},Y,{redirectedFrom:void 0,href:v})}function $(V){return typeof V=="string"?Za(n,V,l.value.path):Pe({},V)}function U(V,J){if(h!==V)return ns(8,{from:J,to:V})}function te(V){return R(V)}function ie(V){return te(Pe($(V),{replace:!0}))}function G(V){const J=V.matched[V.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let Y=typeof W=="function"?W(V):W;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=$(Y):{path:Y},Y.params={}),Pe({query:V.query,hash:V.hash,params:Y.path!=null?{}:V.params},Y)}}function R(V,J){const W=h=z(V),Y=l.value,ve=V.state,Oe=V.force,v=V.replace===!0,I=G(W);if(I)return R(Pe($(I),{state:typeof I=="object"?Pe({},ve,I.state):ve,force:Oe,replace:v}),J||W);const P=W;P.redirectedFrom=J;let x;return!Oe&&P0(r,Y,W)&&(x=ns(16,{to:P,from:Y}),kt(Y,Y,!0,!1)),(x?Promise.resolve(x):T(P,Y)).catch(D=>an(D)?an(D,2)?D:Lt(D):ge(D,P,Y)).then(D=>{if(D){if(an(D,2))return R(Pe({replace:v},$(D.to),{state:typeof D.to=="object"?Pe({},ve,D.to.state):ve,force:Oe}),J||P)}else D=A(P,Y,!0,v,ve);return b(P,Y,D),D})}function y(V,J){const W=U(V,J);return W?Promise.reject(W):Promise.resolve()}function _(V){const J=Tn.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(V):V()}function T(V,J){let W;const[Y,ve,Oe]=dE(V,J);W=ec(Y.reverse(),"beforeRouteLeave",V,J);for(const I of Y)I.leaveGuards.forEach(P=>{W.push(Mn(P,V,J))});const v=y.bind(null,V,J);return W.push(v),Ye(W).then(()=>{W=[];for(const I of i.list())W.push(Mn(I,V,J));return W.push(v),Ye(W)}).then(()=>{W=ec(ve,"beforeRouteUpdate",V,J);for(const I of ve)I.updateGuards.forEach(P=>{W.push(Mn(P,V,J))});return W.push(v),Ye(W)}).then(()=>{W=[];for(const I of Oe)if(I.beforeEnter)if($t(I.beforeEnter))for(const P of I.beforeEnter)W.push(Mn(P,V,J));else W.push(Mn(I.beforeEnter,V,J));return W.push(v),Ye(W)}).then(()=>(V.matched.forEach(I=>I.enterCallbacks={}),W=ec(Oe,"beforeRouteEnter",V,J,_),W.push(v),Ye(W))).then(()=>{W=[];for(const I of a.list())W.push(Mn(I,V,J));return W.push(v),Ye(W)}).catch(I=>an(I,8)?I:Promise.reject(I))}function b(V,J,W){c.list().forEach(Y=>_(()=>Y(V,J,W)))}function A(V,J,W,Y,ve){const Oe=U(V,J);if(Oe)return Oe;const v=J===kn,I=jr?history.state:{};W&&(Y||v?s.replace(V.fullPath,Pe({scroll:v&&I&&I.scroll},ve)):s.push(V.fullPath,ve)),l.value=V,kt(V,J,W,v),Lt()}let E;function Re(){E||(E=s.listen((V,J,W)=>{if(!jt.listening)return;const Y=z(V),ve=G(Y);if(ve){R(Pe(ve,{replace:!0}),Y).catch(Ws);return}h=Y;const Oe=l.value;jr&&M0(Xh(Oe.fullPath,W.delta),oa()),T(Y,Oe).catch(v=>an(v,12)?v:an(v,2)?(R(v.to,Y).then(I=>{an(I,20)&&!W.delta&&W.type===ai.pop&&s.go(-1,!1)}).catch(Ws),Promise.reject()):(W.delta&&s.go(-W.delta,!1),ge(v,Y,Oe))).then(v=>{v=v||A(Y,Oe,!1),v&&(W.delta&&!an(v,8)?s.go(-W.delta,!1):W.type===ai.pop&&an(v,20)&&s.go(-1,!1)),b(Y,Oe,v)}).catch(Ws)}))}let Le=xs(),pe=xs(),ye;function ge(V,J,W){Lt(V);const Y=pe.list();return Y.length?Y.forEach(ve=>ve(V,J,W)):console.error(V),Promise.reject(V)}function Tt(){return ye&&l.value!==kn?Promise.resolve():new Promise((V,J)=>{Le.add([V,J])})}function Lt(V){return ye||(ye=!V,Re(),Le.list().forEach(([J,W])=>V?W(V):J()),Le.reset()),V}function kt(V,J,W,Y){const{scrollBehavior:ve}=t;if(!jr||!ve)return Promise.resolve();const Oe=!W&&L0(Xh(V.fullPath,0))||(Y||!W)&&history.state&&history.state.scroll||null;return pl().then(()=>ve(V,J,Oe)).then(v=>v&&x0(v)).catch(v=>ge(v,V,J))}const Fe=V=>s.go(V);let Ue;const Tn=new Set,jt={currentRoute:l,listening:!0,addRoute:w,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:O,resolve:z,options:t,push:te,replace:ie,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:c.add,onError:pe.add,isReady:Tt,install(V){const J=this;V.component("RouterLink",Il),V.component("RouterView",Hp),V.config.globalProperties.$router=J,Object.defineProperty(V.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(l)}),jr&&!Ue&&l.value===kn&&(Ue=!0,te(s.location).catch(ve=>{}));const W={};for(const ve in kn)Object.defineProperty(W,ve,{get:()=>l.value[ve],enumerable:!0});V.provide(Tl,J),V.provide(qp,Hf(W)),V.provide(kc,l);const Y=V.unmount;Tn.add(V),V.unmount=function(){Tn.delete(V),Tn.size<1&&(h=kn,E&&E(),E=null,l.value=kn,Ue=!1,ye=!1),Y()}}};function Ye(V){return V.reduce((J,W)=>J.then(()=>_(W)),Promise.resolve())}return jt}function dE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const c=e.matched[a];c&&(t.matched.find(h=>ts(h,c))?r.push(c):n.push(c));const l=t.matched[a];l&&(e.matched.find(h=>ts(h,l))||s.push(l))}return[n,r,s]}const fE=Ct({__name:"index",setup(t){return(e,n)=>(He(),na(ke(Hp)))}}),pE="modulepreload",gE=function(t){return"/"+t},hd={},mE=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));s=Promise.all(n.map(c=>{if(c=gE(c),c in hd)return;hd[c]=!0;const l=c.endsWith(".css"),h=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":pE,l||(f.as="script",f.crossOrigin=""),f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),l)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return s.then(()=>e()).catch(i=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i})},zp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='6'%20height='48'%20viewBox='0%200%206%2048'%20fill='none'%3e%3cpath%20d='M3%200V48'%20stroke='url(%23paint0_linear_1_196)'%20stroke-width='5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_196'%20x1='3.05'%20y1='0'%20x2='3.05'%20y2='48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23112232'/%3e%3cstop%20offset='1'%20stop-color='%234D6B88'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",_E="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_203)'%3e%3cpath%20d='M15.1%207H18.1C18.7566%207%2019.4068%207.12933%2020.0134%207.3806C20.6201%207.63188%2021.1712%208.00017%2021.6355%208.46447C22.0998%208.92876%2022.4681%209.47996%2022.7194%2010.0866C22.9707%2010.6932%2023.1%2011.3434%2023.1%2012C23.1%2012.6566%2022.9707%2013.3068%2022.7194%2013.9134C22.4681%2014.52%2022.0998%2015.0712%2021.6355%2015.5355C21.1712%2015.9998%2020.6201%2016.3681%2020.0134%2016.6194C19.4068%2016.8707%2018.7566%2017%2018.1%2017H15.1M9.10001%2017H6.10001C5.4434%2017%204.79322%2016.8707%204.18659%2016.6194C3.57996%2016.3681%203.02877%2015.9998%202.56447%2015.5355C1.62679%2014.5979%201.10001%2013.3261%201.10001%2012C1.10001%2010.6739%201.62679%209.40215%202.56447%208.46447C3.50215%207.52678%204.77392%207%206.10001%207H9.10001'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.10001%2012H16.1'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_203'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",yE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cpath%20d='M11.1%204H4.10001C3.56957%204%203.06087%204.21071%202.68579%204.58579C2.31072%204.96086%202.10001%205.46957%202.10001%206V20C2.10001%2020.5304%202.31072%2021.0391%202.68579%2021.4142C3.06087%2021.7893%203.56957%2022%204.10001%2022H18.1C18.6304%2022%2019.1391%2021.7893%2019.5142%2021.4142C19.8893%2021.0391%2020.1%2020.5304%2020.1%2020V13'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6%202.49998C18.9978%202.10216%2019.5374%201.87866%2020.1%201.87866C20.6626%201.87866%2021.2022%202.10216%2021.6%202.49998C21.9978%202.89781%2022.2213%203.43737%2022.2213%203.99998C22.2213%204.56259%2021.9978%205.10216%2021.6%205.49998L12.1%2015L8.10001%2016L9.10001%2012L18.6%202.49998Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",vE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%3e%3cpath%20d='M10.8859%203.06763H3.88589V10.0676H10.8859V3.06763Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%203.06763H14.8859V10.0676H21.8859V3.06763Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%2014.0676H14.8859V21.0676H21.8859V14.0676Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8859%2014.0676H3.88589V21.0676H10.8859V14.0676Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",EE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_236)'%3e%3cpath%20d='M21.1%2012H17.1L14.1%2021L8.10001%203L5.10001%2012H1.10001'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_236'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",En=El("togglers",()=>{const t=Wt(!1),e=Wt(!1),n=Wt(!1);return{isMobileNavOpen:t,toggleMobileNav:()=>{t.value=!t.value},isUserMenuOpen:e,toggleUserMenu:()=>{e.value=!e.value},isAuthenticationPopupOpen:n,toggleAuthenticationPopup:()=>{n.value=!n.value}}}),wE=["aria-haspopup"],TE=Ap('<div class="stats-container" data-v-fd269c37><p class="stats-heading" data-v-fd269c37> One Stop, <br data-v-fd269c37>Four <span class="stats-heading-highlight" data-v-fd269c37>Possibilities</span>. </p><div class="stats" data-v-fd269c37><div class="stat-box-container" id="stat-box-container1" data-v-fd269c37><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>12M</p><p class="stat-text" data-v-fd269c37>Active Users</p></div><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>60M</p><p class="stat-text" data-v-fd269c37>Links &amp; QR codes created</p></div></div><div class="stat-box-container" data-v-fd269c37><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>1B</p><p class="stat-text" data-v-fd269c37>Clicked &amp; Scanned connections</p></div><div class="stat-box" data-v-fd269c37><p class="stat-number" data-v-fd269c37>300K</p><p class="stat-text" data-v-fd269c37>App Integrations</p></div></div></div></div><div class="about-container" data-v-fd269c37><div class="why-choose-container" data-v-fd269c37><div class="why-choose-heading-container" data-v-fd269c37><div class="why-choose-heading-line" data-v-fd269c37><img src="'+zp+'" alt="line" data-v-fd269c37></div><p class="why-choose-heading" data-v-fd269c37> Why Choose <span class="why-choose-heading-highlight" data-v-fd269c37>Scissor</span></p></div><p class="why-choose-text" data-v-fd269c37> Scissor is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p></div><div class="features-container" data-v-fd269c37><div class="features-box-container" data-v-fd269c37><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+_E+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>URL Shortening</p><p class="feature-box-text" data-v-fd269c37> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects. </p></div></div><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+yE+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>Custom URLs</p><p class="feature-box-text" data-v-fd269c37> With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. </p></div></div></div><div class="features-box-container" data-v-fd269c37><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+vE+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>QR Codes</p><p class="feature-box-text" data-v-fd269c37> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution. </p></div></div><div class="feature-box" data-v-fd269c37><div class="feature-box-icon" data-v-fd269c37><img src="'+EE+'" alt="link" data-v-fd269c37></div><div class="feature-box-text-container" data-v-fd269c37><p class="feature-box-text-header" data-v-fd269c37>Data Analytics</p><p class="feature-box-text" data-v-fd269c37> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress. </p></div></div></div></div></div>',2),IE=[TE],AE=Ct({__name:"About",setup(t){const e=En();return(n,r)=>(He(),st("section",{id:"about","aria-haspopup":ke(e).isAuthenticationPopupOpen},IE,8,wE))}}),rn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bE=rn(AE,[["__scopeId","data-v-fd269c37"]]),RE="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23FFFFFF'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e";var dd={};/**
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
 */const Kp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},SE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Wp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,w=h&63;l||(w=64,a||(m=64)),r.push(n[f],n[p],n[m],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):SE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new PE;const m=i<<2|c>>4;if(r.push(m),h!==64){const w=c<<4&240|h>>2;if(r.push(w),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CE=function(t){const e=Kp(t);return Wp.encodeByteArray(e,!0)},So=function(t){return CE(t).replace(/\./g,"")},Gp=function(t){try{return Wp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const OE=()=>kE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},DE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Gp(t[1]);return e&&JSON.parse(e)},aa=()=>{try{return OE()||NE()||DE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qp=t=>{var e,n;return(n=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},VE=t=>{const e=Qp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Jp=()=>{var t;return(t=aa())===null||t===void 0?void 0:t.config},Xp=t=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class xE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ME(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[So(JSON.stringify(n)),So(JSON.stringify(a)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function FE(){var t;const e=(t=aa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function UE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function BE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $E(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jE(){return!FE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function HE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const zE="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zE,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ei.prototype.create)}}class Ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?KE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new wn(s,c,r)}}function KE(t,e){return t.replace(WE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WE=/\{\$([^}]+)}/g;function GE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ci(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(fd(i)&&fd(a)){if(!ci(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function fd(t){return t!==null&&typeof t=="object"}/**
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
 */function wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function QE(t,e){const n=new JE(t,e);return n.subscribe.bind(n)}class JE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=tc),s.error===void 0&&(s.error=tc),s.complete===void 0&&(s.complete=tc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tc(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class YE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ew(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZE(t){return t===fr?void 0:t}function ew(t){return t.instantiationMode==="EAGER"}/**
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
 */class tw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new YE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const nw={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},rw=_e.INFO,sw={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},iw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=sw[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Al{constructor(e){this.name=e,this._logLevel=rw,this._logHandler=iw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const ow=(t,e)=>e.some(n=>t instanceof n);let pd,gd;function aw(){return pd||(pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cw(){return gd||(gd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yp=new WeakMap,Oc=new WeakMap,Zp=new WeakMap,nc=new WeakMap,bl=new WeakMap;function lw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Hn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Yp.set(n,t)}).catch(()=>{}),bl.set(e,t),e}function uw(t){if(Oc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Oc.set(t,e)}let Nc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Oc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hw(t){Nc=t(Nc)}function dw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rc(this),e,...n);return Zp.set(r,e.sort?e.sort():[e]),Hn(r)}:cw().includes(t)?function(...e){return t.apply(rc(this),e),Hn(Yp.get(this))}:function(...e){return Hn(t.apply(rc(this),e))}}function fw(t){return typeof t=="function"?dw(t):(t instanceof IDBTransaction&&uw(t),ow(t,aw())?new Proxy(t,Nc):t)}function Hn(t){if(t instanceof IDBRequest)return lw(t);if(nc.has(t))return nc.get(t);const e=fw(t);return e!==t&&(nc.set(t,e),bl.set(e,t)),e}const rc=t=>bl.get(t);function pw(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Hn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Hn(a.result),l.oldVersion,l.newVersion,Hn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const gw=["get","getKey","getAll","getAllKeys","count"],mw=["put","add","delete","clear"],sc=new Map;function md(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sc.get(e))return sc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gw.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return sc.set(e,i),i}hw(t=>({...t,get:(e,n,r)=>md(e,n)||t.get(e,n,r),has:(e,n)=>!!md(e,n)||t.has(e,n)}));/**
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
 */class _w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dc="@firebase/app",_d="0.10.6";/**
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
 */const Ar=new Al("@firebase/app"),vw="@firebase/app-compat",Ew="@firebase/analytics-compat",ww="@firebase/analytics",Tw="@firebase/app-check-compat",Iw="@firebase/app-check",Aw="@firebase/auth",bw="@firebase/auth-compat",Rw="@firebase/database",Sw="@firebase/database-compat",Pw="@firebase/functions",Cw="@firebase/functions-compat",kw="@firebase/installations",Ow="@firebase/installations-compat",Nw="@firebase/messaging",Dw="@firebase/messaging-compat",Vw="@firebase/performance",xw="@firebase/performance-compat",Mw="@firebase/remote-config",Lw="@firebase/remote-config-compat",Fw="@firebase/storage",Uw="@firebase/storage-compat",Bw="@firebase/firestore",$w="@firebase/vertexai-preview",jw="@firebase/firestore-compat",qw="firebase",Hw="10.12.3";/**
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
 */const Vc="[DEFAULT]",zw={[Dc]:"fire-core",[vw]:"fire-core-compat",[ww]:"fire-analytics",[Ew]:"fire-analytics-compat",[Iw]:"fire-app-check",[Tw]:"fire-app-check-compat",[Aw]:"fire-auth",[bw]:"fire-auth-compat",[Rw]:"fire-rtdb",[Sw]:"fire-rtdb-compat",[Pw]:"fire-fn",[Cw]:"fire-fn-compat",[kw]:"fire-iid",[Ow]:"fire-iid-compat",[Nw]:"fire-fcm",[Dw]:"fire-fcm-compat",[Vw]:"fire-perf",[xw]:"fire-perf-compat",[Mw]:"fire-rc",[Lw]:"fire-rc-compat",[Fw]:"fire-gcs",[Uw]:"fire-gcs-compat",[Bw]:"fire-fst",[jw]:"fire-fst-compat",[$w]:"fire-vertex","fire-js":"fire-js",[qw]:"fire-js-all"};/**
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
 */const Po=new Map,Kw=new Map,xc=new Map;function yd(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(xc.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;xc.set(e,t);for(const n of Po.values())yd(n,t);for(const n of Kw.values())yd(n,t);return!0}function Rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t.settings!==void 0}/**
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
 */const Ww={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new Ei("app","Firebase",Ww);/**
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
 */class Gw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const ps=Hw;function eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Jp()),!n)throw zn.create("no-options");const i=Po.get(s);if(i){if(ci(n,i.options)&&ci(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const a=new tw(s);for(const l of xc.values())a.addComponent(l);const c=new Gw(n,r,a);return Po.set(s,c),c}function tg(t=Vc){const e=Po.get(t);if(!e&&t===Vc&&Jp())return eg();if(!e)throw zn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=zw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(c.join(" "));return}rs(new Ir(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Qw="firebase-heartbeat-database",Jw=1,li="firebase-heartbeat-store";let ic=null;function ng(){return ic||(ic=pw(Qw,Jw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(li)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),ic}async function Xw(t){try{const n=(await ng()).transaction(li),r=await n.objectStore(li).get(rg(t));return await n.done,r}catch(e){if(e instanceof wn)Ar.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function vd(t,e){try{const r=(await ng()).transaction(li,"readwrite");await r.objectStore(li).put(e,rg(t)),await r.done}catch(n){if(n instanceof wn)Ar.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yw=1024,Zw=30*24*60*60*1e3;class eT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ed();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=Zw}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ed(),{heartbeatsToSend:r,unsentEntries:s}=tT(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ed(){return new Date().toISOString().substring(0,10)}function tT(t,e=Yw){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?HE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wd(t){return So(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rT(t){rs(new Ir("platform-logger",e=>new _w(e),"PRIVATE")),rs(new Ir("heartbeat",e=>new eT(e),"PRIVATE")),Kn(Dc,_d,t),Kn(Dc,_d,"esm2017"),Kn("fire-js","")}rT("");var sT="firebase",iT="10.12.3";/**
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
 */Kn(sT,iT,"app");function Sl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=sg,ig=new Ei("auth","Firebase",sg());/**
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
 */const Co=new Al("@firebase/auth");function aT(t,...e){Co.logLevel<=_e.WARN&&Co.warn(`Auth (${ps}): ${t}`,...e)}function fo(t,...e){Co.logLevel<=_e.ERROR&&Co.error(`Auth (${ps}): ${t}`,...e)}/**
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
 */function en(t,...e){throw Cl(t,...e)}function Bt(t,...e){return Cl(t,...e)}function Pl(t,e,n){const r=Object.assign(Object.assign({},oT()),{[e]:n});return new Ei("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return Pl(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function cT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(t,"argument-error"),Pl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ig.create(t,...e)}function le(t,e,...n){if(!t)throw Cl(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function mn(t,e){t||hn(e)}/**
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
 */function Mc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lT(){return Td()==="http:"||Td()==="https:"}function Td(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function uT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lT()||UE()||"connection"in navigator)?navigator.onLine:!0}function hT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ti{constructor(e,n){this.shortDelay=e,this.longDelay=n,mn(n>e,"Short delay should be less than long delay!"),this.isMobile=LE()||BE()}get(){return uT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kl(t,e){mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class og{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const dT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fT=new Ti(3e4,6e4);function Ol(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gs(t,e,n,r,s={}){return ag(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=wi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),og.fetch()(cg(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function ag(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dT),e);try{const s=new gT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Zi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Zi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw Zi(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pl(t,f,h);en(t,f)}}catch(s){if(s instanceof wn)throw s;en(t,"network-request-failed",{message:String(s)})}}async function pT(t,e,n,r,s={}){const i=await gs(t,e,n,r,s);return"mfaPendingCredential"in i&&en(t,"multi-factor-auth-required",{_serverResponse:i}),i}function cg(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?kl(t.config,s):`${t.config.apiScheme}://${s}`}class gT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Bt(this.auth,"network-request-failed")),fT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Bt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function mT(t,e){return gs(t,"POST","/v1/accounts:delete",e)}async function lg(t,e){return gs(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _T(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Nl(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(oc(s.auth_time)),issuedAtTime:Qs(oc(s.iat)),expirationTime:Qs(oc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(t){return Number(t)*1e3}function Nl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Gp(n);return s?JSON.parse(s):(fo("Failed to decode base64 JWT payload"),null)}catch(s){return fo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Id(t){const e=Nl(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ui(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&yT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function yT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class vT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ui(t,lg(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ug(i.providerUserInfo):[],c=wT(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Lc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function ET(t){const e=wt(t);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ug(t){return t.map(e=>{var{providerId:n}=e,r=Sl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function TT(t,e){const n=await ag(t,{},async()=>{const r=wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=cg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",og.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function IT(t,e){return gs(t,"POST","/v2/accounts:revokeToken",Ol(t,e))}/**
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
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Id(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Id(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await TT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Jr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function On(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Sl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Lc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ui(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _T(this,e)}reload(){return ET(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await ui(this,mT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:te,isAnonymous:ie,providerData:G,stsTokenManager:R}=n;le(U&&R,e,"internal-error");const y=Jr.fromJSON(this.name,R);le(typeof U=="string",e,"internal-error"),On(p,e.name),On(m,e.name),le(typeof te=="boolean",e,"internal-error"),le(typeof ie=="boolean",e,"internal-error"),On(w,e.name),On(C,e.name),On(O,e.name),On(N,e.name),On(z,e.name),On($,e.name);const _=new dn({uid:U,auth:e,email:m,emailVerified:te,displayName:p,isAnonymous:ie,photoURL:C,phoneNumber:w,tenantId:O,stsTokenManager:y,createdAt:z,lastLoginAt:$});return G&&Array.isArray(G)&&(_.providerData=G.map(T=>Object.assign({},T))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jr;s.updateFromServerResponse(n);const i=new dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ug(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jr;c.updateFromIdToken(r);const l=new dn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Lc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Ad=new Map;function fn(t){mn(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
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
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hg.type="NONE";const bd=hg;/**
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
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class Xr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xr(fn(bd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||fn(bd);const a=po(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){const p=dn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Xr(i,e,r))}}/**
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
 */function Rd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mg(e))return"Blackberry";if(_g(e))return"Webos";if(Dl(e))return"Safari";if((e.includes("chrome/")||fg(e))&&!e.includes("edge/"))return"Chrome";if(gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dg(t=ot()){return/firefox\//i.test(t)}function Dl(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fg(t=ot()){return/crios\//i.test(t)}function pg(t=ot()){return/iemobile/i.test(t)}function gg(t=ot()){return/android/i.test(t)}function mg(t=ot()){return/blackberry/i.test(t)}function _g(t=ot()){return/webos/i.test(t)}function ca(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AT(t=ot()){var e;return ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bT(){return $E()&&document.documentMode===10}function yg(t=ot()){return ca(t)||gg(t)||_g(t)||mg(t)||/windows phone/i.test(t)||pg(t)}function RT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function vg(t,e=[]){let n;switch(t){case"Browser":n=Rd(ot());break;case"Worker":n=`${Rd(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ps}/${r}`}/**
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
 */class ST{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PT(t,e={}){return gs(t,"GET","/v2/passwordPolicy",Ol(t,e))}/**
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
 */const CT=6;class kT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:CT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class OT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sd(this),this.idTokenSubscription=new Sd(this),this.beforeStateQueue=new ST(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await lg(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(wr(this));const n=e?wt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),n=new kT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await IT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Xr.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function la(t){return wt(t)}class Sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=QE(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NT(t){Vl=t}function DT(t){return Vl.loadJS(t)}function VT(){return Vl.gapiScript}function xT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function MT(t,e){const n=Rl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ci(i,e??{}))return s;en(s,"already-initialized")}return n.initialize({options:e})}function LT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FT(t,e,n){const r=la(t);le(r._canInitEmulator,r,"emulator-config-failed"),le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Eg(e),{host:a,port:c}=UT(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),BT()}function Eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UT(t){const e=Eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pd(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Pd(a)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function BT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
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
 */async function Yr(t,e){return pT(t,"POST","/v1/accounts:signInWithIdp",Ol(t,e))}/**
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
 */const $T="http://localhost";class br extends wg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):en("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Sl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new br(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:$T,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wi(n)}return e}}/**
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
 */class xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ii extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Ii{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Ii{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class Un extends Ii{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Bn extends Ii{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),a=Cd(r);return new ss({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cd(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oo(e,n,r,s)}}function Tg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,r):i})}async function jT(t,e,n=!1){const r=await ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ss._forOperation(t,"link",r)}/**
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
 */async function qT(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(wr(r));const s="reauthenticate";try{const i=await ui(t,Tg(r,s,e,t),n);le(i.idToken,r,"internal-error");const a=Nl(i.idToken);le(a,r,"internal-error");const{sub:c}=a;return le(t.uid===c,r,"user-mismatch"),ss._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function HT(t,e,n=!1){if(un(t.app))return Promise.reject(wr(t));const r="signIn",s=await Tg(t,r,e),i=await ss._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function zT(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function KT(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function WT(t){return wt(t).signOut()}const No="__sak";/**
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
 */class Ig{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function GT(){const t=ot();return Dl(t)||ca(t)}const QT=1e3,JT=10;class Ag extends Ig{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GT()&&RT(),this.fallbackToPolling=yg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);bT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ag.type="LOCAL";const XT=Ag;/**
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
 */class bg extends Ig{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}bg.type="SESSION";const Rg=bg;/**
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
 */function YT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ua{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ua(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await YT(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ua.receivers=[];/**
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
 */function Ml(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ZT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Ml("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Qt(){return window}function eI(t){Qt().location.href=t}/**
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
 */function Sg(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function tI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function rI(){return Sg()?self:null}/**
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
 */const Pg="firebaseLocalStorageDb",sI=1,Do="firebaseLocalStorage",Cg="fbase_key";class Ai{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ha(t,e){return t.transaction([Do],e?"readwrite":"readonly").objectStore(Do)}function iI(){const t=indexedDB.deleteDatabase(Pg);return new Ai(t).toPromise()}function Fc(){const t=indexedDB.open(Pg,sI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Do,{keyPath:Cg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Do)?e(r):(r.close(),await iI(),e(await Fc()))})})}async function kd(t,e,n){const r=ha(t,!0).put({[Cg]:e,value:n});return new Ai(r).toPromise()}async function oI(t,e){const n=ha(t,!1).get(e),r=await new Ai(n).toPromise();return r===void 0?null:r.value}function Od(t,e){const n=ha(t,!0).delete(e);return new Ai(n).toPromise()}const aI=800,cI=3;class kg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ua._getInstance(rI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new ZT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fc();return await kd(e,No,"1"),await Od(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>kd(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>oI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Od(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ha(s,!1).getAll();return new Ai(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kg.type="LOCAL";const lI=kg;new Ti(3e4,6e4);/**
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
 */function Og(t,e){return e?fn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ll extends wg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uI(t){return HT(t.auth,new Ll(t),t.bypassAuthState)}function hI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),qT(n,new Ll(t),t.bypassAuthState)}async function dI(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),jT(n,new Ll(t),t.bypassAuthState)}/**
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
 */class Ng{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uI;case"linkViaPopup":case"linkViaRedirect":return dI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:en(this.auth,"internal-error")}}resolve(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fI=new Ti(2e3,1e4);async function pI(t,e,n){if(un(t.app))return Promise.reject(Bt(t,"operation-not-supported-in-this-environment"));const r=la(t);cT(t,e,xl);const s=Og(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends Ng{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){mn(this.filter.length===1,"Popup operations only handle one event");const e=Ml();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fI.get())};e()}}mr.currentPopupAction=null;/**
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
 */const gI="pendingRedirect",go=new Map;class mI extends Ng{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(t,e){const n=EI(e),r=vI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function yI(t,e){go.set(t._key(),e)}function vI(t){return fn(t._redirectPersistence)}function EI(t){return po(gI,t.config.apiKey,t.name)}async function wI(t,e,n=!1){if(un(t.app))return Promise.reject(wr(t));const r=la(t),s=Og(r,e),a=await new mI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const TI=10*60*1e3;class II{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Dg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Bt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nd(e))}saveEventToCache(e){this.cachedEventUids.add(Nd(e)),this.lastProcessedEventTime=Date.now()}}function Nd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dg(t);default:return!1}}/**
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
 */async function bI(t,e={}){return gs(t,"GET","/v1/projects",e)}/**
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
 */const RI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SI=/^https?/;async function PI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bI(t);for(const n of e)try{if(CI(n))return}catch{}en(t,"unauthorized-domain")}function CI(t){const e=Mc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!SI.test(n))return!1;if(RI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const kI=new Ti(3e4,6e4);function Dd(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function OI(t){return new Promise((e,n)=>{var r,s,i;function a(){Dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Dd(),n(Bt(t,"network-request-failed"))},timeout:kI.get()})}if(!((s=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qt().gapi)===null||i===void 0)&&i.load)a();else{const c=xT("iframefcb");return Qt()[c]=()=>{gapi.load?a():n(Bt(t,"network-request-failed"))},DT(`${VT()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw mo=null,e})}let mo=null;function NI(t){return mo=mo||OI(t),mo}/**
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
 */const DI=new Ti(5e3,15e3),VI="__/auth/iframe",xI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kl(e,xI):`https://${t.config.authDomain}/${VI}`,r={apiKey:e.apiKey,appName:t.name,v:ps},s=LI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${wi(r).slice(1)}`}async function UI(t){const e=await NI(t),n=Qt().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:FI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Bt(t,"network-request-failed"),c=Qt().setTimeout(()=>{i(a)},DI.get());function l(){Qt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const BI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$I=500,jI=600,qI="_blank",HI="http://localhost";class Vd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(t,e,n,r=$I,s=jI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},BI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ot().toLowerCase();n&&(c=fg(h)?qI:n),dg(h)&&(e=e||HI,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[w,C])=>`${m}${w}=${C},`,"");if(AT(h)&&c!=="_self")return KI(e||"",c),new Vd(null);const p=window.open(e||"",c,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Vd(p)}function KI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const WI="__/auth/handler",GI="emulator/auth/handler",QI=encodeURIComponent("fac");async function xd(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ps,eventId:s};if(e instanceof xl){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",GE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ii){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${QI}=${encodeURIComponent(l)}`:"";return`${JI(t)}?${wi(c).slice(1)}${h}`}function JI({config:t}){return t.emulator?kl(t,GI):`https://${t.authDomain}/${WI}`}/**
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
 */const ac="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rg,this._completeRedirectFn=wI,this._overrideRedirectResult=yI}async _openPopup(e,n,r,s){var i;mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await xd(e,n,r,Mc(),s);return zI(e,a,Ml())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xd(e,n,r,Mc(),s);return eI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new II(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ac,{type:ac},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ac];a!==void 0&&n(!!a),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yg()||Dl()||ca()}}const YI=XI;var Md="@firebase/auth",Ld="1.7.5";/**
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
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function eA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tA(t){rs(new Ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vg(t)},h=new OT(r,s,i,l);return LT(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new Ir("auth-internal",e=>{const n=la(e.getProvider("auth").getImmediate());return(r=>new ZI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Md,Ld,eA(t)),Kn(Md,Ld,"esm2017")}/**
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
 */const nA=5*60,rA=Xp("authIdTokenMaxAge")||nA;let Fd=null;const sA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>rA)return;const s=n==null?void 0:n.token;Fd!==s&&(Fd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iA(t=tg()){const e=Rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=MT(t,{popupRedirectResolver:YI,persistence:[lI,XT,Rg]}),r=Xp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=sA(i.toString());KT(n,a,()=>a(n.currentUser)),zT(n,c=>a(c))}}const s=Qp("auth");return s&&FT(n,`http://${s}`),n}function oA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Bt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",oA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tA("Browser");var Ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,Vg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,y){function _(){}_.prototype=y.prototype,R.D=y.prototype,R.prototype=new _,R.prototype.constructor=R,R.C=function(T,b,A){for(var E=Array(arguments.length-2),Re=2;Re<arguments.length;Re++)E[Re-2]=arguments[Re];return y.prototype[b].apply(T,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,y,_){_||(_=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(b=0;16>b;++b)T[b]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=R.g[0],_=R.g[1],b=R.g[2];var A=R.g[3],E=y+(A^_&(b^A))+T[0]+3614090360&4294967295;y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+T[1]+3905402710&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+T[2]+606105819&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+T[3]+3250441966&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+T[4]+4118548399&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+T[5]+1200080426&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+T[6]+2821735955&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+T[7]+4249261313&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+T[8]+1770035416&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+T[9]+2336552879&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+T[10]+4294925233&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+T[11]+2304563134&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(A^_&(b^A))+T[12]+1804603682&4294967295,y=_+(E<<7&4294967295|E>>>25),E=A+(b^y&(_^b))+T[13]+4254626195&4294967295,A=y+(E<<12&4294967295|E>>>20),E=b+(_^A&(y^_))+T[14]+2792965006&4294967295,b=A+(E<<17&4294967295|E>>>15),E=_+(y^b&(A^y))+T[15]+1236535329&4294967295,_=b+(E<<22&4294967295|E>>>10),E=y+(b^A&(_^b))+T[1]+4129170786&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+T[6]+3225465664&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+T[11]+643717713&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+T[0]+3921069994&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+T[5]+3593408605&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+T[10]+38016083&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+T[15]+3634488961&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+T[4]+3889429448&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+T[9]+568446438&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+T[14]+3275163606&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+T[3]+4107603335&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+T[8]+1163531501&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(b^A&(_^b))+T[13]+2850285829&4294967295,y=_+(E<<5&4294967295|E>>>27),E=A+(_^b&(y^_))+T[2]+4243563512&4294967295,A=y+(E<<9&4294967295|E>>>23),E=b+(y^_&(A^y))+T[7]+1735328473&4294967295,b=A+(E<<14&4294967295|E>>>18),E=_+(A^y&(b^A))+T[12]+2368359562&4294967295,_=b+(E<<20&4294967295|E>>>12),E=y+(_^b^A)+T[5]+4294588738&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+T[8]+2272392833&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+T[11]+1839030562&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+T[14]+4259657740&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+T[1]+2763975236&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+T[4]+1272893353&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+T[7]+4139469664&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+T[10]+3200236656&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+T[13]+681279174&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+T[0]+3936430074&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+T[3]+3572445317&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+T[6]+76029189&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(_^b^A)+T[9]+3654602809&4294967295,y=_+(E<<4&4294967295|E>>>28),E=A+(y^_^b)+T[12]+3873151461&4294967295,A=y+(E<<11&4294967295|E>>>21),E=b+(A^y^_)+T[15]+530742520&4294967295,b=A+(E<<16&4294967295|E>>>16),E=_+(b^A^y)+T[2]+3299628645&4294967295,_=b+(E<<23&4294967295|E>>>9),E=y+(b^(_|~A))+T[0]+4096336452&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+T[7]+1126891415&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+T[14]+2878612391&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+T[5]+4237533241&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+T[12]+1700485571&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+T[3]+2399980690&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+T[10]+4293915773&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+T[1]+2240044497&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+T[8]+1873313359&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+T[15]+4264355552&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+T[6]+2734768916&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+T[13]+1309151649&4294967295,_=b+(E<<21&4294967295|E>>>11),E=y+(b^(_|~A))+T[4]+4149444226&4294967295,y=_+(E<<6&4294967295|E>>>26),E=A+(_^(y|~b))+T[11]+3174756917&4294967295,A=y+(E<<10&4294967295|E>>>22),E=b+(y^(A|~_))+T[2]+718787259&4294967295,b=A+(E<<15&4294967295|E>>>17),E=_+(A^(b|~y))+T[9]+3951481745&4294967295,R.g[0]=R.g[0]+y&4294967295,R.g[1]=R.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,R.g[2]=R.g[2]+b&4294967295,R.g[3]=R.g[3]+A&4294967295}r.prototype.u=function(R,y){y===void 0&&(y=R.length);for(var _=y-this.blockSize,T=this.B,b=this.h,A=0;A<y;){if(b==0)for(;A<=_;)s(this,R,A),A+=this.blockSize;if(typeof R=="string"){for(;A<y;)if(T[b++]=R.charCodeAt(A++),b==this.blockSize){s(this,T),b=0;break}}else for(;A<y;)if(T[b++]=R[A++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var y=1;y<R.length-8;++y)R[y]=0;var _=8*this.o;for(y=R.length-8;y<R.length;++y)R[y]=_&255,_/=256;for(this.u(R),R=Array(16),y=_=0;4>y;++y)for(var T=0;32>T;T+=8)R[_++]=this.g[y]>>>T&255;return R};function i(R,y){var _=c;return Object.prototype.hasOwnProperty.call(_,R)?_[R]:_[R]=y(R)}function a(R,y){this.h=y;for(var _=[],T=!0,b=R.length-1;0<=b;b--){var A=R[b]|0;T&&A==y||(_[b]=A,T=!1)}this.g=_}var c={};function l(R){return-128<=R&&128>R?i(R,function(y){return new a([y|0],0>y?-1:0)}):new a([R|0],0>R?-1:0)}function h(R){if(isNaN(R)||!isFinite(R))return p;if(0>R)return N(h(-R));for(var y=[],_=1,T=0;R>=_;T++)y[T]=R/_|0,_*=4294967296;return new a(y,0)}function f(R,y){if(R.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(R.charAt(0)=="-")return N(f(R.substring(1),y));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),T=p,b=0;b<R.length;b+=8){var A=Math.min(8,R.length-b),E=parseInt(R.substring(b,b+A),y);8>A?(A=h(Math.pow(y,A)),T=T.j(A).add(h(E))):(T=T.j(_),T=T.add(h(E)))}return T}var p=l(0),m=l(1),w=l(16777216);t=a.prototype,t.m=function(){if(O(this))return-N(this).m();for(var R=0,y=1,_=0;_<this.g.length;_++){var T=this.i(_);R+=(0<=T?T:4294967296+T)*y,y*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(C(this))return"0";if(O(this))return"-"+N(this).toString(R);for(var y=h(Math.pow(R,6)),_=this,T="";;){var b=te(_,y).g;_=z(_,b.j(y));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(R);if(_=b,C(_))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function C(R){if(R.h!=0)return!1;for(var y=0;y<R.g.length;y++)if(R.g[y]!=0)return!1;return!0}function O(R){return R.h==-1}t.l=function(R){return R=z(this,R),O(R)?-1:C(R)?0:1};function N(R){for(var y=R.g.length,_=[],T=0;T<y;T++)_[T]=~R.g[T];return new a(_,~R.h).add(m)}t.abs=function(){return O(this)?N(this):this},t.add=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],T=0,b=0;b<=y;b++){var A=T+(this.i(b)&65535)+(R.i(b)&65535),E=(A>>>16)+(this.i(b)>>>16)+(R.i(b)>>>16);T=E>>>16,A&=65535,E&=65535,_[b]=E<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(R,y){return R.add(N(y))}t.j=function(R){if(C(this)||C(R))return p;if(O(this))return O(R)?N(this).j(N(R)):N(N(this).j(R));if(O(R))return N(this.j(N(R)));if(0>this.l(w)&&0>R.l(w))return h(this.m()*R.m());for(var y=this.g.length+R.g.length,_=[],T=0;T<2*y;T++)_[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<R.g.length;b++){var A=this.i(T)>>>16,E=this.i(T)&65535,Re=R.i(b)>>>16,Le=R.i(b)&65535;_[2*T+2*b]+=E*Le,$(_,2*T+2*b),_[2*T+2*b+1]+=A*Le,$(_,2*T+2*b+1),_[2*T+2*b+1]+=E*Re,$(_,2*T+2*b+1),_[2*T+2*b+2]+=A*Re,$(_,2*T+2*b+2)}for(T=0;T<y;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=y;T<2*y;T++)_[T]=0;return new a(_,0)};function $(R,y){for(;(R[y]&65535)!=R[y];)R[y+1]+=R[y]>>>16,R[y]&=65535,y++}function U(R,y){this.g=R,this.h=y}function te(R,y){if(C(y))throw Error("division by zero");if(C(R))return new U(p,p);if(O(R))return y=te(N(R),y),new U(N(y.g),N(y.h));if(O(y))return y=te(R,N(y)),new U(N(y.g),y.h);if(30<R.g.length){if(O(R)||O(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,T=y;0>=T.l(R);)_=ie(_),T=ie(T);var b=G(_,1),A=G(T,1);for(T=G(T,2),_=G(_,2);!C(T);){var E=A.add(T);0>=E.l(R)&&(b=b.add(_),A=E),T=G(T,1),_=G(_,1)}return y=z(R,b.j(y)),new U(b,y)}for(b=p;0<=R.l(y);){for(_=Math.max(1,Math.floor(R.m()/y.m())),T=Math.ceil(Math.log(_)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(_),E=A.j(y);O(E)||0<E.l(R);)_-=T,A=h(_),E=A.j(y);C(A)&&(A=m),b=b.add(A),R=z(R,E)}return new U(b,R)}t.A=function(R){return te(this,R).h},t.and=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)&R.i(T);return new a(_,this.h&R.h)},t.or=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)|R.i(T);return new a(_,this.h|R.h)},t.xor=function(R){for(var y=Math.max(this.g.length,R.g.length),_=[],T=0;T<y;T++)_[T]=this.i(T)^R.i(T);return new a(_,this.h^R.h)};function ie(R){for(var y=R.g.length+1,_=[],T=0;T<y;T++)_[T]=R.i(T)<<1|R.i(T-1)>>>31;return new a(_,R.h)}function G(R,y){var _=y>>5;y%=32;for(var T=R.g.length-_,b=[],A=0;A<T;A++)b[A]=0<y?R.i(A+_)>>>y|R.i(A+_+1)<<32-y:R.i(A+_);return new a(b,R.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Tr=a}).apply(typeof Ud<"u"?Ud:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xg,Mg,Us,Lg,_o,Uc,Fg,Ug,Bg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var S=o[g];if(!(S in d))break e;d=d[S]}o=o[o.length-1],g=d[o],u=u(g),u!=g&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,g=!1,S={next:function(){if(!g&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return S[Symbol.iterator]=function(){return S},S}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var S=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(S,g),o.apply(u,S)}}return function(){return o.apply(u,arguments)}}function m(o,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function w(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(g,S,k){for(var H=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)H[Ne-2]=arguments[Ne];return u.prototype[S].apply(g,H)}}function O(o){const u=o.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=o[g];return d}return[]}function N(o,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const S=o.length||0,k=g.length||0;o.length=S+k;for(let H=0;H<k;H++)o[S+H]=g[H]}else o.push(g)}}class z{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function U(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function te(o){return te[" "](o),o}te[" "]=function(){};var ie=U().indexOf("Gecko")!=-1&&!(U().toLowerCase().indexOf("webkit")!=-1&&U().indexOf("Edge")==-1)&&!(U().indexOf("Trident")!=-1||U().indexOf("MSIE")!=-1)&&U().indexOf("Edge")==-1;function G(o,u,d){for(const g in o)u.call(d,o[g],g,o)}function R(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let d,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(d in g)o[d]=g[d];for(let k=0;k<_.length;k++)d=_[k],Object.prototype.hasOwnProperty.call(g,d)&&(o[d]=g[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function A(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Tt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Re{constructor(){this.h=this.g=null}add(u,d){const g=Le.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Le=new z(()=>new pe,o=>o.reset());class pe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,Tt=new Re,Lt=()=>{const o=c.Promise.resolve(void 0);ye=()=>{o.then(kt)}};var kt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){A(d)}var u=Le;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Tn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function jt(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ie){e:{try{te(u.nodeName);var S=!0;break e}catch{}S=!1}S||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ye[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jt.aa.h.call(this)}}C(jt,Ue);var Ye={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var V="closure_listenable_"+(1e6*Math.random()|0),J=0;function W(o,u,d,g,S){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=S,this.key=++J,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ve(o){this.src=o,this.g={},this.h=0}ve.prototype.add=function(o,u,d,g,S){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var H=v(o,u,g,S);return-1<H?(u=o[H],d||(u.fa=!1)):(u=new W(u,this.src,k,!!g,S),u.fa=d,o.push(u)),u};function Oe(o,u){var d=u.type;if(d in o.g){var g=o.g[d],S=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=S)&&Array.prototype.splice.call(g,S,1),k&&(Y(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function v(o,u,d,g){for(var S=0;S<o.length;++S){var k=o[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==g)return S}return-1}var I="closure_lm_"+(1e6*Math.random()|0),P={};function x(o,u,d,g,S){if(Array.isArray(u)){for(var k=0;k<u.length;k++)x(o,u[k],d,g,S);return null}return d=ne(d),o&&o[V]?o.K(u,d,h(g)?!!g.capture:!!g,S):D(o,u,d,!1,g,S)}function D(o,u,d,g,S,k){if(!u)throw Error("Invalid event type");var H=h(S)?!!S.capture:!!S,Ne=Q(o);if(Ne||(o[I]=Ne=new ve(o)),d=Ne.add(u,d,g,H,k),d.proxy)return d;if(g=j(),d.proxy=g,g.src=o,g.listener=d,o.addEventListener)Tn||(S=H),S===void 0&&(S=!1),o.addEventListener(u.toString(),g,S);else if(o.attachEvent)o.attachEvent(q(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function j(){function o(d){return u.call(o.src,o.listener,d)}const u=M;return o}function K(o,u,d,g,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)K(o,u[k],d,g,S);else g=h(g)?!!g.capture:!!g,d=ne(d),o&&o[V]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=v(k,d,g,S),-1<d&&(Y(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=Q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=v(u,d,g,S)),(d=-1<o?u[o]:null)&&B(d))}function B(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[V])Oe(u.i,o);else{var d=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(d,g,o.capture):u.detachEvent?u.detachEvent(q(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(Oe(d,o),d.h==0&&(d.src=null,u[I]=null)):Y(o)}}}function q(o){return o in P?P[o]:P[o]="on"+o}function M(o,u){if(o.da)o=!0;else{u=new jt(u,this);var d=o.listener,g=o.ha||o.src;o.fa&&B(o),o=d.call(g,u)}return o}function Q(o){return o=o[I],o instanceof ve?o:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[re]||(o[re]=function(u){return o.handleEvent(u)}),o[re])}function ee(){Fe.call(this),this.i=new ve(this),this.M=this,this.F=null}C(ee,Fe),ee.prototype[V]=!0,ee.prototype.removeEventListener=function(o,u,d,g){K(this,o,u,d,g)};function se(o,u){var d,g=o.F;if(g)for(d=[];g;g=g.F)d.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var S=u;u=new Ue(g,o),T(u,S)}if(S=!0,d)for(var k=d.length-1;0<=k;k--){var H=u.g=d[k];S=Se(H,g,!0,u)&&S}if(H=u.g=o,S=Se(H,g,!0,u)&&S,S=Se(H,g,!1,u)&&S,d)for(k=0;k<d.length;k++)H=u.g=d[k],S=Se(H,g,!1,u)&&S}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],g=0;g<d.length;g++)Y(d[g]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,d,g){return this.i.add(String(o),u,!1,d,g)},ee.prototype.L=function(o,u,d,g){return this.i.add(String(o),u,!0,d,g)};function Se(o,u,d,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var S=!0,k=0;k<u.length;++k){var H=u[k];if(H&&!H.da&&H.capture==d){var Ne=H.listener,tt=H.ha||H.src;H.fa&&Oe(o.i,H),S=Ne.call(tt,g)!==!1&&S}}return S&&!g.defaultPrevented}function we(o,u,d){if(typeof o=="function")d&&(o=m(o,d));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function qe(o){o.g=we(()=>{o.g=null,o.i&&(o.i=!1,qe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class It extends Fe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:qe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ot(o){Fe.call(this),this.h=o,this.g={}}C(Ot,Fe);var Es=[];function In(o){G(o.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},o),o.g={}}Ot.prototype.N=function(){Ot.aa.N.call(this),In(this)},Ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,pt=c.JSON.parse,Nt=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function xr(){}xr.prototype.h=null;function gu(o){return o.h||(o.h=o.i())}function mu(){}var ws={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Pa(){Ue.call(this,"d")}C(Pa,Ue);function Ca(){Ue.call(this,"c")}C(Ca,Ue);var ir={},_u=null;function Ni(){return _u=_u||new ee}ir.La="serverreachability";function yu(o){Ue.call(this,ir.La,o)}C(yu,Ue);function Ts(o){const u=Ni();se(u,new yu(u))}ir.STAT_EVENT="statevent";function vu(o,u){Ue.call(this,ir.STAT_EVENT,o),this.stat=u}C(vu,Ue);function gt(o){const u=Ni();se(u,new vu(u,o))}ir.Ma="timingevent";function Eu(o,u){Ue.call(this,ir.Ma,o),this.size=u}C(Eu,Ue);function Is(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function i_(o,u,d,g,S,k){o.info(function(){if(o.g)if(k)for(var H="",Ne=k.split("&"),tt=0;tt<Ne.length;tt++){var Ae=Ne[tt].split("=");if(1<Ae.length){var at=Ae[0];Ae=Ae[1];var ct=at.split("_");H=2<=ct.length&&ct[1]=="type"?H+(at+"="+Ae+"&"):H+(at+"=redacted&")}}else H=null;else H=k;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+u+`
`+d+`
`+H})}function o_(o,u,d,g,S,k,H){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+H})}function Mr(o,u,d,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+c_(o,d)+(g?" "+g:"")})}function a_(o,u){o.info(function(){return"TIMEOUT: "+u})}As.prototype.info=function(){};function c_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var g=d[o];if(!(2>g.length)){var S=g[1];if(Array.isArray(S)&&!(1>S.length)){var k=S[0];if(k!="noop"&&k!="stop"&&k!="close")for(var H=1;H<S.length;H++)S[H]=""}}}}return Vr(d)}catch{return u}}var Di={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ka;function Vi(){}C(Vi,xr),Vi.prototype.g=function(){return new XMLHttpRequest},Vi.prototype.i=function(){return{}},ka=new Vi;function An(o,u,d,g){this.j=o,this.i=u,this.l=d,this.R=g||1,this.U=new Ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Iu={},Oa={};function Na(o,u,d){o.L=1,o.v=Fi(sn(u)),o.m=d,o.P=!0,Au(o,null)}function Au(o,u){o.F=Date.now(),xi(o),o.A=sn(o.v);var d=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),Fu(d.i,"t",g),o.C=0,d=o.j.J,o.h=new Tu,o.g=nh(o.j,d?u:null,!o.m),0<o.O&&(o.M=new It(m(o.Y,o,o.g),o.O)),u=o.U,d=o.g,g=o.ca;var S="readystatechange";Array.isArray(S)||(S&&(Es[0]=S.toString()),S=Es);for(var k=0;k<S.length;k++){var H=x(d,S[k],g||u.handleEvent,!1,u.h||u);if(!H)break;u.g[H.key]=H}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Ts(),i_(o.i,o.u,o.A,o.l,o.R,o.m)}An.prototype.ca=function(o){o=o.target;const u=this.M;u&&on(o)==3?u.j():this.Y(o)},An.prototype.Y=function(o){try{if(o==this.g)e:{const ct=on(this.g);var u=this.g.Ba();const Ur=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||zu(this.g)))){this.J||ct!=4||u==7||(u==8||0>=Ur?Ts(3):Ts(2)),Da(this);var d=this.g.Z();this.X=d;t:if(bu(this)){var g=zu(this.g);o="";var S=g.length,k=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),bs(this);var H="";break t}this.h.i=new c.TextDecoder}for(u=0;u<S;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==S-1)});g.length=0,this.h.g+=o,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=d==200,o_(this.i,this.u,this.A,this.l,this.R,ct,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,tt=this.g;if((Ne=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ne)){var Ae=Ne;break t}}Ae=null}if(d=Ae)Mr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Va(this,d);else{this.o=!1,this.s=3,gt(12),or(this),bs(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<H.length;)if(Ft=l_(this,H),Ft==Oa){ct==4&&(this.s=4,gt(14),d=!1),Mr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Iu){this.s=4,gt(15),Mr(this.i,this.l,H,"[Invalid Chunk]"),d=!1;break}else Mr(this.i,this.l,Ft,null),Va(this,Ft);if(bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||H.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)Mr(this.i,this.l,H,"[Invalid Chunked Response]"),or(this),bs(this);else if(0<H.length&&!this.W){this.W=!0;var at=this.j;at.g==this&&at.ba&&!at.M&&(at.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),Ba(at),at.M=!0,gt(11))}}else Mr(this.i,this.l,H,null),Va(this,H);ct==4&&or(this),this.o&&!this.J&&(ct==4?Yu(this.j,this):(this.o=!1,xi(this)))}else R_(this.g),d==400&&0<H.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),or(this),bs(this)}}}catch{}finally{}};function bu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function l_(o,u){var d=o.C,g=u.indexOf(`
`,d);return g==-1?Oa:(d=Number(u.substring(d,g)),isNaN(d)?Iu:(g+=1,g+d>u.length?Oa:(u=u.slice(g,g+d),o.C=g+d,u)))}An.prototype.cancel=function(){this.J=!0,or(this)};function xi(o){o.S=Date.now()+o.I,Ru(o,o.I)}function Ru(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(m(o.ba,o),u)}function Da(o){o.B&&(c.clearTimeout(o.B),o.B=null)}An.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(a_(this.i,this.A),this.L!=2&&(Ts(),gt(17)),or(this),this.s=2,bs(this)):Ru(this,this.S-o)};function bs(o){o.j.G==0||o.J||Yu(o.j,o)}function or(o){Da(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,In(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Va(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||xa(d.h,o))){if(!o.K&&xa(d.h,o)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)qi(d),$i(d);else break e;Ua(d),gt(18)}}else d.za=S[1],0<d.za-d.T&&37500>S[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(m(d.Za,d),6e3));if(1>=Cu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else cr(d,11)}else if((o.K||d.g==o)&&qi(d),!$(u))for(S=d.Da.g.parse(u),u=0;u<S.length;u++){let Ae=S[u];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const at=Ae[3];at!=null&&(d.la=at,d.j.info("VER="+d.la));const ct=Ae[4];ct!=null&&(d.Aa=ct,d.j.info("SVER="+d.Aa));const Ur=Ae[5];Ur!=null&&typeof Ur=="number"&&0<Ur&&(g=1.5*Ur,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ft=o.g;if(Ft){const zi=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var k=g.h;k.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ma(k,k.h),k.h=null))}if(g.D){const $a=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;$a&&(g.ya=$a,Ve(g.I,g.D,$a))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var H=o;if(g.qa=th(g,g.J?g.ia:null,g.W),H.K){ku(g.h,H);var Ne=H,tt=g.L;tt&&(Ne.I=tt),Ne.B&&(Da(Ne),xi(Ne)),g.g=H}else Ju(g);0<d.i.length&&ji(d)}else Ae[0]!="stop"&&Ae[0]!="close"||cr(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?cr(d,7):Fa(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}Ts(4)}catch{}}var u_=class{constructor(o,u){this.g=o,this.map=u}};function Su(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Pu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Cu(o){return o.h?1:o.g?o.g.size:0}function xa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ma(o,u){o.g?o.g.add(u):o.h=u}function ku(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Su.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ou(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return O(o.i)}function h_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,g=0;g<d;g++)u.push(o[g]);return u}u=[],d=0;for(g in o)u[d++]=o[g];return u}function d_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const g in o)u[d++]=g;return u}}}function Nu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=d_(o),g=h_(o),S=g.length,k=0;k<S;k++)u.call(void 0,g[k],d&&d[k],o)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var g=o[d].indexOf("="),S=null;if(0<=g){var k=o[d].substring(0,g);S=o[d].substring(g+1)}else k=o[d];u(k,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,Mi(this,o.j),this.o=o.o,this.g=o.g,Li(this,o.s),this.l=o.l;var u=o.i,d=new Ps;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Vu(this,d),this.m=o.m}else o&&(u=String(o).match(Du))?(this.h=!1,Mi(this,u[1]||"",!0),this.o=Rs(u[2]||""),this.g=Rs(u[3]||"",!0),Li(this,u[4]),this.l=Rs(u[5]||"",!0),Vu(this,u[6]||"",!0),this.m=Rs(u[7]||"")):(this.h=!1,this.i=new Ps(null,this.h))}ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ss(u,xu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ss(u,xu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ss(d,d.charAt(0)=="/"?m_:g_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ss(d,y_)),o.join("")};function sn(o){return new ar(o)}function Mi(o,u,d){o.j=d?Rs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Li(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Vu(o,u,d){u instanceof Ps?(o.i=u,v_(o.i,o.h)):(d||(u=Ss(u,__)),o.i=new Ps(u,o.h))}function Ve(o,u,d){o.i.set(u,d)}function Fi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ss(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,p_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function p_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var xu=/[#\/\?@]/g,g_=/[#\?:]/g,m_=/[#\?]/g,__=/[#\?@]/g,y_=/#/g;function Ps(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function bn(o){o.g||(o.g=new Map,o.h=0,o.i&&f_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ps.prototype,t.add=function(o,u){bn(this),this.i=null,o=Lr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Mu(o,u){bn(o),u=Lr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Lu(o,u){return bn(o),u=Lr(o,u),o.g.has(u)}t.forEach=function(o,u){bn(this),this.g.forEach(function(d,g){d.forEach(function(S){o.call(u,S,g,this)},this)},this)},t.na=function(){bn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const S=o[g];for(let k=0;k<S.length;k++)d.push(u[g])}return d},t.V=function(o){bn(this);let u=[];if(typeof o=="string")Lu(this,o)&&(u=u.concat(this.g.get(Lr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return bn(this),this.i=null,o=Lr(this,o),Lu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Fu(o,u,d){Mu(o,u),0<d.length&&(o.i=null,o.g.set(Lr(o,u),O(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const k=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var S=k;H[g]!==""&&(S+="="+encodeURIComponent(String(H[g]))),o.push(S)}}return this.i=o.join("&")};function Lr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function v_(o,u){u&&!o.j&&(bn(o),o.i=null,o.g.forEach(function(d,g){var S=g.toLowerCase();g!=S&&(Mu(this,g),Fu(this,S,d))},o)),o.j=u}function E_(o,u){const d=new As;if(c.Image){const g=new Image;g.onload=w(Rn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=w(Rn,d,"TestLoadImage: error",!1,u,g),g.onabort=w(Rn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=w(Rn,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function w_(o,u){const d=new As,g=new AbortController,S=setTimeout(()=>{g.abort(),Rn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(S),k.ok?Rn(d,"TestPingServer: ok",!0,u):Rn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Rn(d,"TestPingServer: error",!1,u)})}function Rn(o,u,d,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(d)}catch{}}function T_(){this.g=new Nt}function I_(o,u,d){const g=d||"";try{Nu(o,function(S,k){let H=S;h(S)&&(H=Vr(S)),u.push(g+k+"="+encodeURIComponent(H))})}catch(S){throw u.push(g+"type="+encodeURIComponent("_badmap")),S}}function Cs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Cs,xr),Cs.prototype.g=function(){return new Ui(this.l,this.j)},Cs.prototype.i=function(o){return function(){return o}}({});function Ui(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ui,ee),t=Ui.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Os(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ks(this):Os(this),this.readyState==3&&Uu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ks(this))},t.Qa=function(o){this.g&&(this.response=o,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Os(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Bu(o){let u="";return G(o,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function La(o,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Bu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ve(o,u,d))}function $e(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C($e,ee);var A_=/^https?$/i,b_=["POST","PUT"];t=$e.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ka.g(),this.v=this.o?gu(this.o):gu(ka),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){$u(this,k);return}if(o=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)d.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())d.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(b_,u,void 0))||g||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,H]of d)this.g.setRequestHeader(k,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){$u(this,k)}};function $u(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ju(o),Bi(o)}function ju(o){o.A||(o.A=!0,se(o,"complete"),se(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,se(this,"complete"),se(this,"abort"),Bi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bi(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qu(this):this.bb())},t.bb=function(){qu(this)};function qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||on(o)!=4||o.Z()!=2)){if(o.u&&on(o)==4)we(o.Ea,0,o);else if(se(o,"readystatechange"),on(o)==4){o.h=!1;try{const H=o.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=H===0){var S=String(o.D).match(Du)[1]||null;!S&&c.self&&c.self.location&&(S=c.self.location.protocol.slice(0,-1)),g=!A_.test(S?S.toLowerCase():"")}d=g}if(d)se(o,"complete"),se(o,"success");else{o.m=6;try{var k=2<on(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",ju(o)}}finally{Bi(o)}}}}function Bi(o,u){if(o.g){Hu(o);const d=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||se(o,"ready");try{d.onreadystatechange=g}catch{}}}function Hu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function on(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),pt(u)}};function zu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function R_(o){const u={};o=(o.g&&2<=on(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if($(o[g]))continue;var d=b(o[g]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}R(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Ku(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,o),this.cb=Ns("retryDelaySeedMs",1e4,o),this.Wa=Ns("forwardChannelMaxRetries",2,o),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(o&&o.concurrentRequestLimit),this.Da=new T_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ku.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,g){gt(0),this.W=o,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=th(this,null,this.W),ji(this)};function Fa(o){if(Wu(o),o.G==3){var u=o.U++,d=sn(o.I);if(Ve(d,"SID",o.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Ds(o,d),u=new An(o,o.j,u),u.L=2,u.v=Fi(sn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=nh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}eh(o)}function $i(o){o.g&&(Ba(o),o.g.cancel(),o.g=null)}function Wu(o){$i(o),o.u&&(c.clearTimeout(o.u),o.u=null),qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ji(o){if(!Pu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ye||Lt(),ge||(ye(),ge=!0),Tt.add(u,o),o.B=0}}function S_(o,u){return Cu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(m(o.Ga,o,u),Zu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const S=new An(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(S.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Qu(this,S,u),d=sn(this.I),Ve(d,"RID",o),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Ds(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Bu(k)))+"&"+u:this.m&&La(d,this.m,k)),Ma(this.h,S),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),S.T=!0,Na(S,d,null)):Na(S,d,u),this.G=2}}else this.G==3&&(o?Gu(this,o):this.i.length==0||Pu(this.h)||Gu(this))};function Gu(o,u){var d;u?d=u.l:d=o.U++;const g=sn(o.I);Ve(g,"SID",o.K),Ve(g,"RID",d),Ve(g,"AID",o.T),Ds(o,g),o.m&&o.o&&La(g,o.m,o.o),d=new An(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Qu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ma(o.h,d),Na(d,g,u)}function Ds(o,u){o.H&&G(o.H,function(d,g){Ve(u,g,d)}),o.l&&Nu({},function(d,g){Ve(u,g,d)})}function Qu(o,u,d){d=Math.min(o.i.length,d);var g=o.l?m(o.l.Na,o.l,o):null;e:{var S=o.i;let k=-1;for(;;){const H=["count="+d];k==-1?0<d?(k=S[0].g,H.push("ofs="+k)):k=0:H.push("ofs="+k);let Ne=!0;for(let tt=0;tt<d;tt++){let Ae=S[tt].g;const at=S[tt].map;if(Ae-=k,0>Ae)k=Math.max(0,S[tt].g-100),Ne=!1;else try{I_(at,H,"req"+Ae+"_")}catch{g&&g(at)}}if(Ne){g=H.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,g}function Ju(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ye||Lt(),ge||(ye(),ge=!0),Tt.add(u,o),o.v=0}}function Ua(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(m(o.Fa,o),Zu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),$i(this),Xu(this))};function Ba(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Xu(o){o.g=new An(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=sn(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),Ds(o,u),o.m&&o.o&&La(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Fi(sn(u)),d.m=null,d.P=!0,Au(d,o)}t.Za=function(){this.C!=null&&(this.C=null,$i(this),Ua(this),gt(19))};function qi(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Yu(o,u){var d=null;if(o.g==u){qi(o),Ba(o),o.g=null;var g=2}else if(xa(o.h,u))d=u.D,ku(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var S=o.B;g=Ni(),se(g,new Eu(g,d)),ji(o)}else Ju(o);else if(S=u.s,S==3||S==0&&0<u.X||!(g==1&&S_(o,u)||g==2&&Ua(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),S){case 1:cr(o,5);break;case 4:cr(o,10);break;case 3:cr(o,6);break;default:cr(o,2)}}}function Zu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function cr(o,u){if(o.j.info("Error code "+u),u==2){var d=m(o.fb,o),g=o.Xa;const S=!g;g=new ar(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mi(g,"https"),Fi(g),S?E_(g.toString(),d):w_(g.toString(),d)}else gt(2);o.G=0,o.l&&o.l.sa(u),eh(o),Wu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function eh(o){if(o.G=0,o.ka=[],o.l){const u=Ou(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,O(o.i),o.i.length=0),o.l.ra()}}function th(o,u,d){var g=d instanceof ar?sn(d):new ar(d);if(g.g!="")u&&(g.g=u+"."+g.g),Li(g,g.s);else{var S=c.location;g=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;var k=new ar(null);g&&Mi(k,g),u&&(k.g=u),S&&Li(k,S),d&&(k.l=d),g=k}return d=o.D,u=o.ya,d&&u&&Ve(g,d,u),Ve(g,"VER",o.la),Ds(o,g),g}function nh(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new $e(new Cs({eb:d})):new $e(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rh(){}t=rh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hi(){}Hi.prototype.g=function(o,u){return new At(o,u)};function At(o,u){ee.call(this),this.g=new Ku(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Fr(this)}C(At,ee),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Fa(this.g)},At.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Vr(o),o=d);u.i.push(new u_(u.Ya++,o)),u.G==3&&ji(u)},At.prototype.N=function(){this.g.l=null,delete this.j,Fa(this.g),delete this.g,At.aa.N.call(this)};function sh(o){Pa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(sh,Pa);function ih(){Ca.call(this),this.status=1}C(ih,Ca);function Fr(o){this.g=o}C(Fr,rh),Fr.prototype.ua=function(){se(this.g,"a")},Fr.prototype.ta=function(o){se(this.g,new sh(o))},Fr.prototype.sa=function(o){se(this.g,new ih)},Fr.prototype.ra=function(){se(this.g,"b")},Hi.prototype.createWebChannel=Hi.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Bg=function(){return new Hi},Ug=function(){return Ni()},Fg=ir,Uc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Di.NO_ERROR=0,Di.TIMEOUT=8,Di.HTTP_ERROR=6,_o=Di,wu.COMPLETE="complete",Lg=wu,mu.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Us=mu,Mg=Cs,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,xg=$e}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const Bd="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let ms="10.12.3";/**
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
 */const Rr=new Al("@firebase/firestore");function Ms(){return Rr.logLevel}function Z(t,...e){if(Rr.logLevel<=_e.DEBUG){const n=e.map(Fl);Rr.debug(`Firestore (${ms}): ${t}`,...n)}}function _n(t,...e){if(Rr.logLevel<=_e.ERROR){const n=e.map(Fl);Rr.error(`Firestore (${ms}): ${t}`,...n)}}function is(t,...e){if(Rr.logLevel<=_e.WARN){const n=e.map(Fl);Rr.warn(`Firestore (${ms}): ${t}`,...n)}}function Fl(t){if(typeof t=="string")return t;try{/**
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
 */function ue(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function De(t,e){t||ue()}function fe(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Wn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $g{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class cA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lA{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Wn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Wn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new $g(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new ut(e)}}class uA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class hA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new dA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function pA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class jg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=pA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function os(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new Je(0,0))}static max(){return new he(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class hi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ue(),r===void 0?r=e.length-n:r>e.length-n&&ue(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return hi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof hi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),a=n.get(s);if(i<a)return-1;if(i>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class je extends hi{construct(e,n,r){return new je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new oe(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new je(n)}static emptyPath(){return new je([])}}const gA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends hi{construct(e,n,r){return new rt(e,n,r)}static isValidIdentifier(e){return gA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new rt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new oe(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new oe(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new oe(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new rt(n)}static emptyPath(){return new rt([])}}/**
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
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(je.fromString(e))}static fromName(e){return new ae(je.fromString(e).popFirst(5))}static empty(){return new ae(je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new je(e.slice()))}}function mA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=he.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Jn(s,ae.empty(),e)}function _A(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(he.min(),ae.empty(),-1)}static max(){return new Jn(he.max(),ae.empty(),-1)}}function yA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ae.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const vA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class EA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bi(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==vA)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ue(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function wA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ri(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ul.oe=-1;function da(t){return t==null}function Vo(t){return t===0&&1/t==-1/0}function TA(t){return typeof t=="number"&&Number.isInteger(t)&&!Vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function $d(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Nr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function qg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Be{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ue();const e=this.left.check();if(e!==this.right.check())throw ue();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ue()}get value(){throw ue()}get color(){throw ue()}get left(){throw ue()}get right(){throw ue()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class it{constructor(e){this.comparator=e,this.data=new Be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jd(this.data.getIterator())}getIteratorFrom(e){return new jd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new it(this.comparator);return n.data=e,n}}class jd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(rt.comparator)}static empty(){return new St([])}unionWith(e){let n=new it(rt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return os(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Hg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hg("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const IA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(De(!!t),typeof t=="string"){let e=0;const n=IA.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Sr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function Bl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $l(t){const e=t.mapValue.fields.__previous_value__;return Bl(e)?$l(e):e}function di(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
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
 */class AA{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class fi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const no={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bl(t)?4:bA(t)?9007199254740991:10:ue()}function tn(t,e){if(t===e)return!0;const n=Pr(t);if(n!==Pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),c=Xn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Sr(s.bytesValue).isEqual(Sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ke(s.doubleValue),c=Ke(i.doubleValue);return a===c?Vo(a)===Vo(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return os(t.arrayValue.values||[],e.arrayValue.values||[],tn);case 10:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if($d(a)!==$d(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!tn(a[l],c[l])))return!1;return!0}(t,e);default:return ue()}}function pi(t,e){return(t.values||[]).find(n=>tn(n,e))!==void 0}function as(t,e){if(t===e)return 0;const n=Pr(t),r=Pr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=Ke(i.integerValue||i.doubleValue),l=Ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return qd(t.timestampValue,e.timestampValue);case 4:return qd(di(t),di(e));case 5:return be(t.stringValue,e.stringValue);case 6:return function(i,a){const c=Sr(i),l=Sr(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=be(c[h],l[h]);if(f!==0)return f}return be(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=be(Ke(i.latitude),Ke(a.latitude));return c!==0?c:be(Ke(i.longitude),Ke(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,a){const c=i.values||[],l=a.values||[];for(let h=0;h<c.length&&h<l.length;++h){const f=as(c[h],l[h]);if(f)return f}return be(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,a){if(i===no.mapValue&&a===no.mapValue)return 0;if(i===no.mapValue)return 1;if(a===no.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=be(l[p],f[p]);if(m!==0)return m;const w=as(c[l[p]],h[f[p]]);if(w!==0)return w}return be(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ue()}}function qd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Xn(t),r=Xn(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function cs(t){return Bc(t)}function Bc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ae.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Bc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bc(n.fields[a])}`;return s+"}"}(t.mapValue):ue()}function $c(t){return!!t&&"integerValue"in t}function jl(t){return!!t&&"arrayValue"in t}function Hd(t){return!!t&&"nullValue"in t}function zd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function Js(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Nr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Js(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Js(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class vt{constructor(e){this.value=e}static empty(){return new vt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Js(n)}setAll(e){let n=rt.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Js(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Nr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new vt(Js(this.value))}}function zg(t){const e=[];return Nr(t.fields,(n,r)=>{const s=new rt([n]);if(yo(r)){const i=zg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new St(e)}/**
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
 */class ht{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ht(e,0,he.min(),he.min(),he.min(),vt.empty(),0)}static newFoundDocument(e,n,r,s){return new ht(e,1,n,he.min(),r,s,0)}static newNoDocument(e,n){return new ht(e,2,n,he.min(),he.min(),vt.empty(),0)}static newUnknownDocument(e,n){return new ht(e,3,n,he.min(),he.min(),vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(he.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xo{constructor(e,n){this.position=e,this.inclusive=n}}function Kd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=ae.comparator(ae.fromName(a.referenceValue),n.key):r=as(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function RA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Kg{}class Qe extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PA(e,n,r):n==="array-contains"?new OA(e,r):n==="in"?new NA(e,r):n==="not-in"?new DA(e,r):n==="array-contains-any"?new VA(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CA(e,r):new kA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(as(n,this.value)):n!==null&&Pr(this.value)===Pr(n)&&this.matchesComparison(as(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ue()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return Wg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Wg(t){return t.op==="and"}function Gg(t){return SA(t)&&Wg(t)}function SA(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function jc(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(Gg(t))return t.filters.map(e=>jc(e)).join(",");{const e=t.filters.map(n=>jc(n)).join(",");return`${t.op}(${e})`}}function Qg(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&tn(r.value,s.value)}(t,e):t instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Qg(a,s.filters[c]),!0):!1}(t,e):void ue()}function Jg(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(Jg).join(" ,")+"}"}(t):"Filter"}class PA extends Qe{constructor(e,n,r){super(e,n,r),this.key=ae.fromName(r.referenceValue)}matches(e){const n=ae.comparator(e.key,this.key);return this.matchesComparison(n)}}class CA extends Qe{constructor(e,n){super(e,"in",n),this.keys=Xg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kA extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Xg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ae.fromName(r.referenceValue))}class OA extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jl(n)&&pi(n.arrayValue,this.value)}}class NA extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&pi(this.value.arrayValue,n)}}class DA extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(pi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!pi(this.value.arrayValue,n)}}class VA extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>pi(this.value.arrayValue,r))}}/**
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
 */class xA{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function Gd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new xA(t,e,n,r,s,i,a)}function ql(t){const e=fe(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>jc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.ue=n}return e.ue}function Hl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Qg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wd(t.startAt,e.startAt)&&Wd(t.endAt,e.endAt)}function qc(t){return ae.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fa{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function MA(t,e,n,r,s,i,a,c){return new fa(t,e,n,r,s,i,a,c)}function zl(t){return new fa(t)}function Qd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function LA(t){return t.collectionGroup!==null}function Xs(t){const e=fe(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new it(rt.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mo(i,r))}),n.has(rt.keyField().canonicalString())||e.ce.push(new Mo(rt.keyField(),r))}return e.ce}function Jt(t){const e=fe(t);return e.le||(e.le=FA(e,Xs(t))),e.le}function FA(t,e){if(t.limitType==="F")return Gd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)});const n=t.endAt?new xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new xo(t.startAt.position,t.startAt.inclusive):null;return Gd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Hc(t,e,n){return new fa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pa(t,e){return Hl(Jt(t),Jt(e))&&t.limitType===e.limitType}function Yg(t){return`${ql(Jt(t))}|lt:${t.limitType}`}function qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Jg(s)).join(", ")}]`),da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(Jt(t))}; limitType=${t.limitType})`}function ga(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ae.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Xs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Kd(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Xs(r),s)||r.endAt&&!function(a,c,l){const h=Kd(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Xs(r),s))}(t,e)}function UA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zg(t){return(e,n)=>{let r=!1;for(const s of Xs(t)){const i=BA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function BA(t,e,n){const r=t.field.isKeyField()?ae.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?as(l,h):ue()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ue()}}/**
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
 */class _s{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Nr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return qg(this.inner)}size(){return this.innerSize}}/**
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
 */const $A=new Be(ae.comparator);function yn(){return $A}const em=new Be(ae.comparator);function Bs(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function tm(t){let e=em;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function _r(){return Ys()}function nm(){return Ys()}function Ys(){return new _s(t=>t.toString(),(t,e)=>t.isEqual(e))}const jA=new Be(ae.comparator),qA=new it(ae.comparator);function me(...t){let e=qA;for(const n of t)e=e.add(n);return e}const HA=new it(be);function zA(){return HA}/**
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
 */function rm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function sm(t){return{integerValue:""+t}}function KA(t,e){return TA(e)?sm(e):rm(t,e)}/**
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
 */class ma{constructor(){this._=void 0}}function WA(t,e,n){return t instanceof Lo?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bl(i)&&(i=$l(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(n,e):t instanceof ls?om(t,e):t instanceof gi?am(t,e):function(s,i){const a=im(s,i),c=Jd(a)+Jd(s.Pe);return $c(a)&&$c(s.Pe)?sm(c):rm(s.serializer,c)}(t,e)}function GA(t,e,n){return t instanceof ls?om(t,e):t instanceof gi?am(t,e):n}function im(t,e){return t instanceof Fo?function(r){return $c(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Lo extends ma{}class ls extends ma{constructor(e){super(),this.elements=e}}function om(t,e){const n=cm(e);for(const r of t.elements)n.some(s=>tn(s,r))||n.push(r);return{arrayValue:{values:n}}}class gi extends ma{constructor(e){super(),this.elements=e}}function am(t,e){let n=cm(e);for(const r of t.elements)n=n.filter(s=>!tn(s,r));return{arrayValue:{values:n}}}class Fo extends ma{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Jd(t){return Ke(t.integerValue||t.doubleValue)}function cm(t){return jl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class QA{constructor(e,n){this.field=e,this.transform=n}}function JA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ls&&s instanceof ls||r instanceof gi&&s instanceof gi?os(r.elements,s.elements,tn):r instanceof Fo&&s instanceof Fo?tn(r.Pe,s.Pe):r instanceof Lo&&s instanceof Lo}(t.transform,e.transform)}class XA{constructor(e,n){this.version=e,this.transformResults=n}}class Xt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Xt}static exists(e){return new Xt(void 0,e)}static updateTime(e){return new Xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _a{}function lm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hm(t.key,Xt.none()):new Si(t.key,t.data,Xt.none());{const n=t.data,r=vt.empty();let s=new it(rt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new nr(t.key,r,new St(s.toArray()),Xt.none())}}function YA(t,e,n){t instanceof Si?function(s,i,a){const c=s.value.clone(),l=Yd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof nr?function(s,i,a){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Yd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(um(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Zs(t,e,n,r){return t instanceof Si?function(i,a,c,l){if(!vo(i.precondition,a))return c;const h=i.value.clone(),f=Zd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof nr?function(i,a,c,l){if(!vo(i.precondition,a))return c;const h=Zd(i.fieldTransforms,l,a),f=a.data;return f.setAll(um(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,c){return vo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function ZA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=im(r.transform,s||null);i!=null&&(n===null&&(n=vt.empty()),n.set(r.field,i))}return n||null}function Xd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&os(r,s,(i,a)=>JA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Si extends _a{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class nr extends _a{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function um(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yd(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,GA(a,c,n[s]))}return r}function Zd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,WA(i,a,e))}return r}class hm extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eb extends _a{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class tb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=lm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(he.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),me())}isEqual(e){return this.batchId===e.batchId&&os(this.mutations,e.mutations,(n,r)=>Xd(n,r))&&os(this.baseMutations,e.baseMutations,(n,r)=>Xd(n,r))}}class Kl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return jA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Kl(e,n,r,s)}}/**
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
 */class nb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class rb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ze,Ee;function sb(t){switch(t){default:return ue();case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0}}function dm(t){if(t===void 0)return _n("GRPC error has no .code"),F.UNKNOWN;switch(t){case ze.OK:return F.OK;case ze.CANCELLED:return F.CANCELLED;case ze.UNKNOWN:return F.UNKNOWN;case ze.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ze.INTERNAL:return F.INTERNAL;case ze.UNAVAILABLE:return F.UNAVAILABLE;case ze.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ze.NOT_FOUND:return F.NOT_FOUND;case ze.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ze.ABORTED:return F.ABORTED;case ze.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ze.DATA_LOSS:return F.DATA_LOSS;default:return ue()}}(Ee=ze||(ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function ib(){return new TextEncoder}/**
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
 */const ob=new Tr([4294967295,4294967295],0);function ef(t){const e=ib().encode(t),n=new Vg;return n.update(e),new Uint8Array(n.digest())}function tf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Wl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Tr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(ob)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ef(e),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Wl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ie===0)return;const n=ef(e),[r,s]=tf(n);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ya{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ya(he.min(),s,new Be(be),yn(),me())}}class Pi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pi(r,n,me(),me(),me())}}/**
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
 */class Eo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class fm{constructor(e,n){this.targetId=e,this.me=n}}class pm{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class nf{constructor(){this.fe=0,this.ge=sf(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=me(),n=me(),r=me();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ue()}}),new Pi(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=sf()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class ab{constructor(e){this.Le=e,this.Be=new Map,this.ke=yn(),this.qe=rf(),this.Qe=new Be(be)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ue()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(qc(i))if(r===0){const a=new ae(i.path);this.Ue(n,a,ht.newNoDocument(a,he.min()))}else De(r===1);else{const a=this.Ye(n);if(a!==r){const c=this.Ze(e),l=c?this.Xe(c,e,a):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=Sr(r).toUint8Array()}catch(l){if(l instanceof Hg)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Wl(a,s,i)}catch(l){return is(l instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&qc(c.target)){const l=new ae(c.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,ht.newNoDocument(l,e))}i.be&&(n.set(a,i.Ce()),i.ve())}});let r=me();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(e));const s=new ya(e,n,this.Qe,this.ke,r);return this.ke=yn(),this.qe=rf(),this.Qe=new Be(be),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new nf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new it(be),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new nf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function rf(){return new Be(ae.comparator)}function sf(){return new Be(ae.comparator)}const cb={asc:"ASCENDING",desc:"DESCENDING"},lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ub={and:"AND",or:"OR"};class hb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zc(t,e){return t.useProto3Json||da(e)?e:{value:e}}function Uo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function db(t,e){return Uo(t,e.toTimestamp())}function Yt(t){return De(!!t),he.fromTimestamp(function(n){const r=Xn(n);return new Je(r.seconds,r.nanos)}(t))}function Gl(t,e){return Kc(t,e).canonicalString()}function Kc(t,e){const n=function(s){return new je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mm(t){const e=je.fromString(t);return De(wm(e)),e}function Wc(t,e){return Gl(t.databaseId,e.path)}function cc(t,e){const n=mm(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ae(ym(n))}function _m(t,e){return Gl(t.databaseId,e)}function fb(t){const e=mm(t);return e.length===4?je.emptyPath():ym(e)}function Gc(t){return new je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ym(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function of(t,e,n){return{name:Wc(t,e),fields:n.value.mapValue.fields}}function pb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ue()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(De(f===void 0||typeof f=="string"),ft.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?F.UNKNOWN:dm(h.code);return new oe(f,h.message||"")}(a);n=new pm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=cc(t,r.document.name),i=Yt(r.document.updateTime),a=r.document.createTime?Yt(r.document.createTime):he.min(),c=new vt({mapValue:{fields:r.document.fields}}),l=ht.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Eo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=cc(t,r.document),i=r.readTime?Yt(r.readTime):he.min(),a=ht.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Eo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=cc(t,r.document),i=r.removedTargetIds||[];n=new Eo([],i,s,null)}else{if(!("filter"in e))return ue();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new rb(s,i),c=r.targetId;n=new fm(c,a)}}return n}function gb(t,e){let n;if(e instanceof Si)n={update:of(t,e.key,e.value)};else if(e instanceof hm)n={delete:Wc(t,e.key)};else if(e instanceof nr)n={update:of(t,e.key,e.data),updateMask:Ab(e.fieldMask)};else{if(!(e instanceof eb))return ue();n={verify:Wc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Lo)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ls)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof gi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Fo)return{fieldPath:a.field.canonicalString(),increment:c.Pe};throw ue()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:db(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ue()}(t,e.precondition)),n}function mb(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?Yt(s.updateTime):Yt(i);return a.isEqual(he.min())&&(a=Yt(i)),new XA(a,s.transformResults||[])}(n,e))):[]}function _b(t,e){return{documents:[_m(t,e.path)]}}function yb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=_m(t,s);const i=function(h){if(h.length!==0)return Em(nn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(m){return{field:Hr(m.field),direction:wb(m.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=zc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function vb(t){let e=fb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const m=vm(p);return m instanceof nn&&Gg(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(C){return new Mo(zr(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,da(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(p){const m=!!p.before,w=p.values||[];return new xo(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,w=p.values||[];return new xo(w,m)}(n.endAt)),MA(e,s,a,i,c,"F",l,h)}function Eb(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ue()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=zr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=zr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return Qe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return ue()}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ue()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>vm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ue()}}(n.compositeFilter.op))}(t):ue()}function wb(t){return cb[t]}function Tb(t){return lb[t]}function Ib(t){return ub[t]}function Hr(t){return{fieldPath:t.canonicalString()}}function zr(t){return rt.fromServerFormat(t.fieldPath)}function Em(t){return t instanceof Qe?function(n){if(n.op==="=="){if(zd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NAN"}};if(Hd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(zd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NAN"}};if(Hd(n.value))return{unaryFilter:{field:Hr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hr(n.field),op:Tb(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(s=>Em(s));return r.length===1?r[0]:{compositeFilter:{op:Ib(n.op),filters:r}}}(t):ue()}function Ab(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,s,i=he.min(),a=he.min(),c=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class bb{constructor(e){this.ct=e}}function Rb(t){const e=vb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Hc(e,e.limit,"L"):e}/**
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
 */class Sb{constructor(){this._n=new Pb}addToCollectionParentIndex(e,n){return this._n.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Jn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Pb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new it(je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new it(je.comparator)).toArray()}}/**
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
 */class us{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new us(0)}static Ln(){return new us(-1)}}/**
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
 */class Cb{constructor(){this.changes=new _s(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class kb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ob{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Zs(r.mutation,s,St.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,me()).next(()=>r))}getLocalViewOfDocuments(e,n,r=me()){const s=_r();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Bs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=_r();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,me()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=yn();const a=Ys(),c=function(){return Ys()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof nr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Zs(f.mutation,h,f.mutation.getFieldMask(),Je.now())):a.set(h.key,St.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new kb(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Ys();let s=new Be((a,c)=>a-c),i=me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||St.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||me()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=nm();f.forEach(m=>{if(!i.has(m)){const w=lm(n.get(m),r.get(m));w!==null&&p.set(m,w),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return ae.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):LA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(_r());let c=-1,l=i;return a.next(h=>L.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{l=l.insert(f,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,me())).next(f=>({batchId:c,changes:tm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ae(n)).next(r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const h=function(p,m){return new fa(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ht.newInvalidDocument(f)))});let c=Bs();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Zs(f.mutation,h,St.empty(),Je.now()),ga(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class Nb{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return L.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Rb(s.bundledQuery),readTime:Yt(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Db{constructor(){this.overlays=new Be(ae.comparator),this.hr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=_r();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=_r(),i=n.length+1,a=new ae(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Be((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=_r(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=_r(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return L.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new nb(n,r));let i=this.hr.get(n);i===void 0&&(i=me(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Ql{constructor(){this.Pr=new it(Ze.Ir),this.Tr=new it(Ze.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ze(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ae(new je([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ae(new je([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=me();return this.Tr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ae.comparator(e.key,n.key)||be(e.pr,n.pr)}static Er(e,n){return be(e.pr,n.pr)||ae.comparator(e.key,n.key)}}/**
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
 */class Vb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new it(Ze.Ir)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new tb(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.wr=this.wr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],a=>{const c=this.Sr(a.pr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new it(be);return n.forEach(s=>{const i=new Ze(s,0),a=new Ze(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],c=>{r=r.add(c.pr)})}),L.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ae.isDocumentKey(i)||(i=i.child(""));const a=new Ze(new ae(i),0);let c=new it(be);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},a),L.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return L.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ze(n,0),s=this.wr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xb{constructor(e){this.vr=e,this.docs=function(){return new Be(ae.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ht.newInvalidDocument(n))}getEntries(e,n){let r=yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ht.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=yn();const a=n.path,c=new ae(a.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||yA(_A(f),r)<=0||(s.has(f.key)||ga(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ue()}Fr(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Mb(this)}getSize(e){return L.resolve(this.size)}}class Mb extends Cb{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Lb{constructor(e){this.persistence=e,this.Mr=new _s(n=>ql(n),Hl),this.lastRemoteSnapshotVersion=he.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ql,this.targetCount=0,this.Lr=us.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),L.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.qn(n),L.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Nr.containsKey(n))}}/**
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
 */class Fb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Ul(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Lb(this),this.indexManager=new Sb,this.remoteDocumentCache=function(s){return new xb(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new bb(n),this.$r=new Nb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Db,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Vb(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new Ub(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return L.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class Ub extends EA{constructor(e){super(),this.currentSequenceNumber=e}}class Jl{constructor(e){this.persistence=e,this.zr=new Ql,this.jr=null}static Hr(e){return new Jl(e)}get Jr(){if(this.jr)return this.jr;throw ue()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),L.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Jr,r=>{const s=ae.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,he.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return L.or([()=>L.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Xl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=me(),s=me();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Xl(e,n.fromCache,r,s)}}/**
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
 */class Bb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class $b{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return jE()?8:wA(ot())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Bb;return this.Ji(e,n,a).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,a,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ms()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),L.resolve()):(Ms()<=_e.DEBUG&&Z("QueryEngine","Query:",qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ms()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Jt(n))):L.resolve())}ji(e,n){if(Qd(n))return L.resolve(null);let r=Jt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Hc(n,null,"F"),r=Jt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=me(...i);return this.zi.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,a,l.readTime)?this.ji(e,Hc(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return Qd(n)||s.isEqual(he.min())?L.resolve(null):this.zi.getDocuments(e,r).next(i=>{const a=this.Zi(n,i);return this.Xi(n,a,r,s)?L.resolve(null):(Ms()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),qr(n)),this.es(e,a,n,mA(s,-1)).next(c=>c))})}Zi(e,n){let r=new it(Zg(e));return n.forEach((s,i)=>{ga(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ms()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",qr(n)),this.zi.getDocumentsMatchingQuery(e,n,Jn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */class jb{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Be(be),this.rs=new _s(i=>ql(i),Hl),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ob(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function qb(t,e,n,r){return new jb(t,e,n,r)}async function Tm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=me();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:a,addedBatchIds:c}))})})}function Hb(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,m=p.keys();let w=L.resolve();return m.forEach(C=>{w=w.next(()=>f.getEntry(l,C)).next(O=>{const N=h.docVersions.get(C);De(N!==null),O.version.compareTo(N)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=me();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Im(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function zb(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.Qr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,f.addedDocuments,p)));let w=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(ft.EMPTY_BYTE_STRING,he.min()).withLastLimboFreeSnapshotVersion(he.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),function(O,N,z){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(m,w,f)&&c.push(n.Qr.updateTargetData(i,w))});let l=yn(),h=me();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(Kb(i,a,e.documentUpdates).next(f=>{l=f.cs,h=f.ls})),!r.isEqual(he.min())){const f=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function Kb(t,e,n){let r=me(),s=me();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=yn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(he.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:a,ls:s}})}function Wb(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Gb(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Qr.allocateTargetId(r).next(a=>(s=new $n(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Qc(t,e,n){const r=fe(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Ri(a))throw a;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function af(t,e,n){const r=fe(t);let s=he.min(),i=me();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const p=fe(l),m=p.rs.get(f);return m!==void 0?L.resolve(p.ns.get(m)):p.Qr.getTargetData(h,f)}(r,a,Jt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?s:he.min(),n?i:me())).next(c=>(Qb(r,UA(e),c),{documents:c,hs:i})))}function Qb(t,e,n){let r=t.ss.get(e)||he.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class cf{constructor(){this.activeTargetIds=zA()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Jb{constructor(){this.no=new cf,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new cf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Xb{io(e){}shutdown(){}}/**
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
 */class lf{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ro=null;function lc(){return ro===null?ro=function(){return 268435456+Math.round(2147483648*Math.random())}():ro++,"0x"+ro.toString(16)}/**
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
 */const Yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Zb{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const lt="WebChannelConnection";class e2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,a){const c=lc(),l=this.vo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,a),this.Mo(n,l,h,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw is("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}xo(n,r,s,i,a,c){return this.Co(n,r,s,i,a)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>n[a]=i),s&&s.headers.forEach((i,a)=>n[a]=i)}vo(n,r){const s=Yb[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=lc();return new Promise((a,c)=>{const l=new xg;l.setWithCredentials(!0),l.listenOnce(Lg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case _o.NO_ERROR:const f=l.getResponseJson();Z(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case _o.TIMEOUT:Z(lt,`RPC '${e}' ${i} timed out`),c(new oe(F.DEADLINE_EXCEEDED,"Request time out"));break;case _o.HTTP_ERROR:const p=l.getStatus();if(Z(lt,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const C=function(N){const z=N.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(z)>=0?z:F.UNKNOWN}(w.status);c(new oe(C,w.message))}else c(new oe(F.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new oe(F.UNAVAILABLE,"Connection failed."));break;default:ue()}}finally{Z(lt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(lt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=lc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Bg(),c=Ug(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Mg({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(lt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=a.createWebChannel(f,l);let m=!1,w=!1;const C=new Zb({lo:N=>{w?Z(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(Z(lt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(lt,`RPC '${e}' stream ${s} sending:`,N),p.send(N))},ho:()=>p.close()}),O=(N,z,$)=>{N.listen(z,U=>{try{$(U)}catch(te){setTimeout(()=>{throw te},0)}})};return O(p,Us.EventType.OPEN,()=>{w||(Z(lt,`RPC '${e}' stream ${s} transport opened.`),C.mo())}),O(p,Us.EventType.CLOSE,()=>{w||(w=!0,Z(lt,`RPC '${e}' stream ${s} transport closed`),C.po())}),O(p,Us.EventType.ERROR,N=>{w||(w=!0,is(lt,`RPC '${e}' stream ${s} transport errored:`,N),C.po(new oe(F.UNAVAILABLE,"The operation could not be completed")))}),O(p,Us.EventType.MESSAGE,N=>{var z;if(!w){const $=N.data[0];De(!!$);const U=$,te=U.error||((z=U[0])===null||z===void 0?void 0:z.error);if(te){Z(lt,`RPC '${e}' stream ${s} received error:`,te);const ie=te.status;let G=function(_){const T=ze[_];if(T!==void 0)return dm(T)}(ie),R=te.message;G===void 0&&(G=F.INTERNAL,R="Unknown error status: "+ie+" with message "+te.message),w=!0,C.po(new oe(G,R)),p.close()}else Z(lt,`RPC '${e}' stream ${s} received:`,$),C.yo($)}}),O(c,Fg.STAT_EVENT,N=>{N.stat===Uc.PROXY?Z(lt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Uc.NOPROXY&&Z(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function uc(){return typeof document<"u"?document:null}/**
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
 */function va(t){return new hb(t,!0)}/**
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
 */class Am{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class bm{constructor(e,n,r,s,i,a,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Am(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new oe(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t2 extends bm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=pb(this.serializer,e),r=function(i){if(!("targetChange"in i))return he.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?he.min():a.readTime?Yt(a.readTime):he.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Gc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=qc(l)?{documents:_b(i,l)}:{query:yb(i,l)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=gm(i,a.resumeToken);const h=zc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(he.min())>0){c.readTime=Uo(i,a.snapshotVersion.toTimestamp());const h=zc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=Eb(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Gc(this.serializer),n.removeTarget=e,this.i_(n)}}class n2 extends bm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=mb(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.A_(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Gc(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gb(this.serializer,r))};this.i_(n)}}/**
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
 */class r2 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new oe(F.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(e,Kc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(F.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.xo(e,Kc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new oe(F.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class s2{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(_n(n),this.y_=!1):Z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class i2{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{r.enqueueAndForget(async()=>{Dr(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=fe(l);h.M_.add(4),await Ci(h),h.N_.set("Unknown"),h.M_.delete(4),await Ea(h)}(this))})}),this.N_=new s2(r,s)}}async function Ea(t){if(Dr(t))for(const e of t.x_)await e(!0)}async function Ci(t){for(const e of t.x_)await e(!1)}function Rm(t,e){const n=fe(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),tu(n)?eu(n):ys(n).Xo()&&Zl(n,e))}function Yl(t,e){const n=fe(t),r=ys(n);n.F_.delete(e),r.Xo()&&Sm(n,e),n.F_.size===0&&(r.Xo()?r.n_():Dr(n)&&n.N_.set("Unknown"))}function Zl(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(he.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).P_(e)}function Sm(t,e){t.L_.xe(e),ys(t).I_(e)}function eu(t){t.L_=new ab({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.N_.w_()}function tu(t){return Dr(t)&&!ys(t).Zo()&&t.F_.size>0}function Dr(t){return fe(t).M_.size===0}function Pm(t){t.L_=void 0}async function o2(t){t.N_.set("Online")}async function a2(t){t.F_.forEach((e,n)=>{Zl(t,e)})}async function c2(t,e){Pm(t),tu(t)?(t.N_.D_(e),eu(t)):t.N_.set("Unknown")}async function l2(t,e,n){if(t.N_.set("Online"),e instanceof pm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(t,r)}else if(e instanceof Eo?t.L_.Ke(e):e instanceof fm?t.L_.He(e):t.L_.We(e),!n.isEqual(he.min()))try{const r=await Im(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.L_.rt(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.F_.get(h);f&&i.F_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.F_.get(l);if(!f)return;i.F_.set(l,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),Sm(i,l);const p=new $n(f.target,l,h,f.sequenceNumber);Zl(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await Bo(t,r)}}async function Bo(t,e,n){if(!Ri(e))throw e;t.M_.add(1),await Ci(t),t.N_.set("Offline"),n||(n=()=>Im(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Ea(t)})}function Cm(t,e){return e().catch(n=>Bo(t,n,e))}async function wa(t){const e=fe(t),n=Yn(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;u2(e);)try{const s=await Wb(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,h2(e,s)}catch(s){await Bo(e,s)}km(e)&&Om(e)}function u2(t){return Dr(t)&&t.v_.length<10}function h2(t,e){t.v_.push(e);const n=Yn(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function km(t){return Dr(t)&&!Yn(t).Zo()&&t.v_.length>0}function Om(t){Yn(t).start()}async function d2(t){Yn(t).V_()}async function f2(t){const e=Yn(t);for(const n of t.v_)e.d_(n.mutations)}async function p2(t,e,n){const r=t.v_.shift(),s=Kl.from(r,e,n);await Cm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wa(t)}async function g2(t,e){e&&Yn(t).E_&&await async function(r,s){if(function(a){return sb(a)&&a!==F.ABORTED}(s.code)){const i=r.v_.shift();Yn(r).t_(),await Cm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wa(r)}}(t,e),km(t)&&Om(t)}async function uf(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Dr(n);n.M_.add(3),await Ci(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Ea(n)}async function m2(t,e){const n=fe(t);e?(n.M_.delete(2),await Ea(n)):e||(n.M_.add(2),await Ci(n),n.N_.set("Unknown"))}function ys(t){return t.B_||(t.B_=function(n,r,s){const i=fe(n);return i.f_(),new t2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:o2.bind(null,t),To:a2.bind(null,t),Ao:c2.bind(null,t),h_:l2.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),tu(t)?eu(t):t.N_.set("Unknown")):(await t.B_.stop(),Pm(t))})),t.B_}function Yn(t){return t.k_||(t.k_=function(n,r,s){const i=fe(n);return i.f_(),new n2(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:d2.bind(null,t),Ao:g2.bind(null,t),R_:f2.bind(null,t),A_:p2.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await wa(t)):(await t.k_.stop(),t.v_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new nu(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Ri(t))return new oe(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ae.comparator(n.key,r.key):(n,r)=>ae.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Be(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hf{constructor(){this.q_=new Be(ae.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ue():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new hs(e,n,Zr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _2{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class y2{constructor(){this.queries=new _s(e=>Yg(e),pa),this.onlineState="Unknown",this.z_=new Set}}async function v2(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new _2,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=ru(a,`Initialization of query '${qr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&su(n)}async function E2(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.U_.indexOf(e);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function w2(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.U_)c.H_(s)&&(r=!0);a.K_=s}}r&&su(n)}function T2(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function su(t){t.z_.forEach(e=>{e.next()})}var Jc,df;(df=Jc||(Jc={})).J_="default",df.Cache="cache";class I2{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Jc.Cache}}/**
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
 */class Nm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class A2{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=me(),this.mutatedKeys=me(),this.Ia=Zg(e),this.Ta=new Zr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new hf,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const m=s.get(f),w=ga(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let N=!1;m&&w?m.data.isEqual(w.data)?C!==O&&(r.track({type:3,doc:w}),N=!0):this.Ra(m,w)||(r.track({type:2,doc:w}),N=!0,(l&&this.Ia(w,l)>0||h&&this.Ia(w,h)<0)&&(c=!0)):!m&&w?(r.track({type:0,doc:w}),N=!0):m&&!w&&(r.track({type:1,doc:m}),N=!0,(l||h)&&(c=!0)),N&&(w?(a=a.add(w),i=O?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:a,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((f,p)=>function(w,C){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ue()}};return O(w)-O(C)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,a.length!==0||h?{snapshot:new hs(this.query,e.Ta,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new hf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=me(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Dm(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Nm(r))}),n}pa(e){this.la=e.hs,this.Pa=me();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return hs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class b2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class R2{constructor(e){this.key=e,this.wa=!1}}class S2{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new _s(c=>Yg(c),pa),this.Da=new Map,this.Ca=new Set,this.va=new Be(ae.comparator),this.Fa=new Map,this.Ma=new Ql,this.xa={},this.Oa=new Map,this.Na=us.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function P2(t,e,n=!0){const r=Um(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Vm(r,e,n,!0),s}async function C2(t,e){const n=Um(t);await Vm(n,e,!0,!1)}async function Vm(t,e,n,r){const s=await Gb(t.localStore,Jt(e)),i=s.targetId,a=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await k2(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Rm(t.remoteStore,s),c}async function k2(t,e,n,r,s){t.Ba=(p,m,w)=>async function(O,N,z,$){let U=N.view.da(z);U.Xi&&(U=await af(O.localStore,N.query,!1).then(({documents:R})=>N.view.da(R,U)));const te=$&&$.targetChanges.get(N.targetId),ie=$&&$.targetMismatches.get(N.targetId)!=null,G=N.view.applyChanges(U,O.isPrimaryClient,te,ie);return pf(O,N.targetId,G.fa),G.snapshot}(t,p,m,w);const i=await af(t.localStore,e,!0),a=new A2(e,i.hs),c=a.da(i.documents),l=Pi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);pf(t,n,h.fa);const f=new b2(e,n,a);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function O2(t,e,n){const r=fe(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(a=>!pa(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yl(r.remoteStore,s.targetId),Xc(r,s.targetId)}).catch(bi)):(Xc(r,s.targetId),await Qc(r.localStore,s.targetId,!0))}async function N2(t,e){const n=fe(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yl(n.remoteStore,r.targetId))}async function D2(t,e,n){const r=B2(t);try{const s=await function(a,c){const l=fe(a),h=Je.now(),f=c.reduce((w,C)=>w.add(C.key),me());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let C=yn(),O=me();return l.os.getEntries(w,f).next(N=>{C=N,C.forEach((z,$)=>{$.isValidDocument()||(O=O.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,C)).next(N=>{p=N;const z=[];for(const $ of c){const U=ZA($,p.get($.key).overlayedDocument);U!=null&&z.push(new nr($.key,U,zg(U.value.mapValue),Xt.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,z,c)}).next(N=>{m=N;const z=N.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(w,N.batchId,z)})}).then(()=>({batchId:m.batchId,changes:tm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.xa[a.currentUser.toKey()];h||(h=new Be(be)),h=h.insert(c,l),a.xa[a.currentUser.toKey()]=h}(r,s.batchId,n),await ki(r,s.changes),await wa(r.remoteStore)}catch(s){const i=ru(s,"Failed to persist write");n.reject(i)}}async function xm(t,e){const n=fe(t);try{const r=await zb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Fa.get(i);a&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?De(a.wa):s.removedDocuments.size>0&&(De(a.wa),a.wa=!1))}),await ki(n,r,e)}catch(r){await bi(r)}}function ff(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,a)=>{const c=a.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=fe(a);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const m of p.U_)m.j_(c)&&(h=!0)}),h&&su(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V2(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let a=new Be(ae.comparator);a=a.insert(i,ht.newNoDocument(i,he.min()));const c=me().add(i),l=new ya(he.min(),new Map,new Be(be),a,c);await xm(r,l),r.va=r.va.remove(i),r.Fa.delete(e),iu(r)}else await Qc(r.localStore,e,!1).then(()=>Xc(r,e,n)).catch(bi)}async function x2(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await Hb(n.localStore,e);Lm(n,r,null),Mm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ki(n,s)}catch(s){await bi(s)}}async function M2(t,e,n){const r=fe(t);try{const s=await function(a,c){const l=fe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(De(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Lm(r,e,n),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ki(r,s)}catch(s){await bi(s)}}function Mm(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Lm(t,e,n){const r=fe(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Xc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Fm(t,r)})}function Fm(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Yl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),iu(t))}function pf(t,e,n){for(const r of n)r instanceof Nm?(t.Ma.addReference(r.key,e),L2(t,r)):r instanceof Dm?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Fm(t,r.key)):ue()}function L2(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),iu(t))}function iu(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ae(je.fromString(e)),r=t.Na.next();t.Fa.set(r,new R2(n)),t.va=t.va.insert(n,r),Rm(t.remoteStore,new $n(Jt(zl(n.path)),r,"TargetPurposeLimboResolution",Ul.oe))}}async function ki(t,e,n){const r=fe(t),s=[],i=[],a=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{a.push(r.Ba(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Xl.Ki(l.targetId,h);i.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(l,h){const f=fe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(h,m=>L.forEach(m.qi,w=>f.persistence.referenceDelegate.addReference(p,m.targetId,w)).next(()=>L.forEach(m.Qi,w=>f.persistence.referenceDelegate.removeReference(p,m.targetId,w)))))}catch(p){if(!Ri(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const w=f.ns.get(m),C=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(m,O)}}}(r.localStore,i))}async function F2(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await Tm(n.localStore,e);n.currentUser=e,function(i,a){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new oe(F.CANCELLED,a))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(n,r.us)}}function U2(t,e){const n=fe(t),r=n.Fa.get(e);if(r&&r.wa)return me().add(r.key);{let s=me();const i=n.Da.get(e);if(!i)return s;for(const a of i){const c=n.ba.get(a);s=s.unionWith(c.view.Ea)}return s}}function Um(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=U2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V2.bind(null,e),e.Sa.h_=w2.bind(null,e.eventManager),e.Sa.ka=T2.bind(null,e.eventManager),e}function B2(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=x2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=M2.bind(null,e),e}class gf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=va(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return qb(this.persistence,new $b,e.initialUser,this.serializer)}createPersistence(e){return new Fb(Jl.Hr,this.serializer)}createSharedClientState(e){return new Jb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $2{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ff(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=F2.bind(null,this.syncEngine),await m2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new y2}()}createDatastore(e){const n=va(e.databaseInfo.databaseId),r=function(i){return new e2(i)}(e.databaseInfo);return function(i,a,c,l){return new r2(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new i2(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ff(this.syncEngine,n,0),function(){return lf.D()?new lf:new Xb}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const p=new S2(s,i,a,c,l,h);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=fe(r);Z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Ci(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class j2{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class q2{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=jg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oe(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ru(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function hc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await z2(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>uf(e.remoteStore,s)),t._onlineComponents=e}function H2(t){return t.name==="FirebaseError"?t.code===F.FAILED_PRECONDITION||t.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function z2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!H2(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await hc(t,new gf)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await hc(t,new gf);return t._offlineComponents}async function Bm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await mf(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await mf(t,new $2))),t._onlineComponents}function K2(t){return Bm(t).then(e=>e.syncEngine)}async function W2(t){const e=await Bm(t),n=e.eventManager;return n.onListen=P2.bind(null,e.syncEngine),n.onUnlisten=O2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=C2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=N2.bind(null,e.syncEngine),n}function G2(t,e,n={}){const r=new Wn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new j2({next:m=>{a.enqueueAndForget(()=>E2(i,p));const w=m.docs.has(c);!w&&m.fromCache?h.reject(new oe(F.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&m.fromCache&&l&&l.source==="server"?h.reject(new oe(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new I2(zl(c.path),f,{includeMetadataChanges:!0,ra:!0});return v2(i,p)}(await W2(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $m(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const _f=new Map;/**
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
 */function Q2(t,e,n){if(!n)throw new oe(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J2(t,e,n,r){if(e===!0&&r===!0)throw new oe(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yf(t){if(!ae.isDocumentKey(t))throw new oe(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ou(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ue()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ou(t);throw new oe(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class vf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$m((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oe(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new oe(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new aA;switch(r.type){case"firstParty":return new hA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new oe(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_f.get(n);r&&(Z("ComponentProvider","Removing Datastore"),_f.delete(n),r.terminate())}(this),Promise.resolve()}}function X2(t,e,n,r={}){var s;const i=(t=Cr(t,au))._getSettings(),a=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=ut.MOCK_USER;else{c=ME(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new oe(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ut(h)}t._authCredentials=new cA(new $g(c,l))}}/**
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
 */class cu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cu(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class mi extends cu{constructor(e,n,r){super(e,n,zl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new ae(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function jm(t,e,...n){if(t=wt(t),arguments.length===1&&(e=jg.newId()),Q2("doc","path",e),t instanceof au){const r=je.fromString(e,...n);return yf(r),new Pt(t,null,new ae(r))}{if(!(t instanceof Pt||t instanceof mi))throw new oe(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(je.fromString(e,...n));return yf(r),new Pt(t.firestore,t instanceof mi?t.converter:null,new ae(r))}}/**
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
 */class Y2{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Am(this,"async_queue_retry"),this.hu=()=>{const n=uc();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=uc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=uc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Wn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ri(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw _n("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=nu.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ue()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Ta extends au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Y2}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Hm(this),this._firestoreClient.terminate()}}function Z2(t,e){const n=typeof t=="object"?t:tg(),r=typeof t=="string"?t:"(default)",s=Rl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=VE("firestore");i&&X2(s,...i)}return s}function qm(t){return t._firestoreClient||Hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Hm(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new AA(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,$m(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new q2(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class ds{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ds(ft.fromBase64String(e))}catch(n){throw new oe(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ds(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ia{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Aa{constructor(e){this._methodName=e}}/**
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
 */class lu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */const eR=/^__.*__$/;class tR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new nr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Si(e,this.data,n,this.fieldTransforms)}}class zm{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new nr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Km(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ue()}}class ba{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new ba(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return $o(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(Km(this.fu)&&eR.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class nR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||va(e)}Fu(e,n,r,s=!1){return new ba({fu:e,methodName:n,vu:r,path:rt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wm(t){const e=t._freezeSettings(),n=va(t._databaseId);return new nR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function rR(t,e,n,r,s,i={}){const a=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);hu("Data must be an object, but it was:",a,r);const c=Gm(r,a);let l,h;if(i.merge)l=new St(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Yc(e,p,n);if(!a.contains(m))throw new oe(F.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Jm(f,m)||f.push(m)}l=new St(f),h=a.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=a.fieldTransforms;return new tR(new vt(c),l,h)}class Ra extends Aa{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ra}}function sR(t,e,n){return new ba({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class uu extends Aa{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=sR(this,e,!0),r=this.Mu.map(i=>Oi(i,n)),s=new ls(r);return new QA(e.path,s)}isEqual(e){return e instanceof uu&&ci(this.Mu,e.Mu)}}function iR(t,e,n,r){const s=t.Fu(1,e,n);hu("Data must be an object, but it was:",s,r);const i=[],a=vt.empty();Nr(r,(l,h)=>{const f=du(e,l,n);h=wt(h);const p=s.Su(f);if(h instanceof Ra)i.push(f);else{const m=Oi(h,p);m!=null&&(i.push(f),a.set(f,m))}});const c=new St(i);return new zm(a,c,s.fieldTransforms)}function oR(t,e,n,r,s,i){const a=t.Fu(1,e,n),c=[Yc(e,r,n)],l=[s];if(i.length%2!=0)throw new oe(F.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Yc(e,i[m])),l.push(i[m+1]);const h=[],f=vt.empty();for(let m=c.length-1;m>=0;--m)if(!Jm(h,c[m])){const w=c[m];let C=l[m];C=wt(C);const O=a.Su(w);if(C instanceof Ra)h.push(w);else{const N=Oi(C,O);N!=null&&(h.push(w),f.set(w,N))}}const p=new St(h);return new zm(f,p,a.fieldTransforms)}function Oi(t,e){if(Qm(t=wt(t)))return hu("Unsupported field value:",e,t),Gm(t,e);if(t instanceof Aa)return function(r,s){if(!Km(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Oi(c,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:Uo(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Uo(s.serializer,i)}}if(r instanceof lu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ds)return{bytesValue:gm(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gl(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${ou(r)}`)}(t,e)}function Gm(t,e){const n={};return qg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nr(t,(r,s)=>{const i=Oi(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof lu||t instanceof ds||t instanceof Pt||t instanceof Aa)}function hu(t,e,n){if(!Qm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ou(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Yc(t,e,n){if((e=wt(e))instanceof Ia)return e._internalPath;if(typeof e=="string")return du(t,e);throw $o("Field path arguments must be of type string or ",t,!1,void 0,n)}const aR=new RegExp("[~\\*/\\[\\]]");function du(t,e,n){if(e.search(aR)>=0)throw $o(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ia(...e.split("."))._internalPath}catch{throw $o(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function $o(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new oe(F.INVALID_ARGUMENT,c+t+l)}function Jm(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cR extends Xm{data(){return super.data()}}function Ym(t,e){return typeof e=="string"?du(t,e):e instanceof Ia?e._internalPath:e._delegate._internalPath}class lR{convertValue(e,n="none"){switch(Pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ue()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Nr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new lu(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$l(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=je.fromString(e);De(wm(r));const s=new fi(r.get(1),r.get(3)),i=new ae(r.popFirst(5));return s.isEqual(n)||_n(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function uR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class hR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zm extends Xm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new dR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class dR extends Zm{data(e={}){return super.data(e)}}/**
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
 */function e_(t){t=Cr(t,Pt);const e=Cr(t.firestore,Ta);return G2(qm(e),t._key).then(n=>gR(e,t,n))}class fR extends lR{constructor(e){super(),this.firestore=e}convertBytes(e){return new ds(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function pR(t,e,n){t=Cr(t,Pt);const r=Cr(t.firestore,Ta),s=uR(t.converter,e);return t_(r,[rR(Wm(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Xt.none())])}function r1(t,e,n,...r){t=Cr(t,Pt);const s=Cr(t.firestore,Ta),i=Wm(s);let a;return a=typeof(e=wt(e))=="string"||e instanceof Ia?oR(i,"updateDoc",t._key,e,n,r):iR(i,"updateDoc",t._key,e),t_(s,[a.toMutation(t._key,Xt.exists(!0))])}function t_(t,e){return function(r,s){const i=new Wn;return r.asyncQueue.enqueueAndForget(async()=>D2(await K2(r),s,i)),i.promise}(qm(t),e)}function gR(t,e,n){const r=n.docs.get(e._key),s=new fR(t);return new Zm(t,s,e._key,r,new hR(n.hasPendingWrites,n.fromCache),e.converter)}function s1(...t){return new uu("arrayUnion",t)}(function(e,n=!0){(function(s){ms=s})(ps),rs(new Ir("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ta(new lA(r.getProvider("auth-internal")),new fA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new oe(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Kn(Bd,"4.6.4",e),Kn(Bd,"4.6.4","esm2017")})();const mR={apiKey:"AIzaSyCC64Nn4jBqVsSnEkyRXk_2XGTzwL2VDFM",authDomain:"scissortool.firebaseapp.com",projectId:"scissortool",storageBucket:"scissortool.appspot.com",messagingSenderId:"881658314273",appId:"1:881658314273:web:1bdcd991530b9d36a76d60"},n_=eg(mR),_R=new ln,Ef=iA(n_),r_=Z2(n_),yR=El("database",()=>{const t=Wt(),e=localStorage.getItem("userEmail"),n=localStorage.getItem("userData"),r=n?JSON.parse(n).userInfo.email:"",s=n?JSON.parse(n).userInfo.name:"",i=n?JSON.parse(n).userInfo.image:"";return{userData:t,fetchUserData:async c=>{var l,h;try{const f=jm(r_,"userData",c),p=await e_(f);t.value={userInfo:(l=p.data())==null?void 0:l.userInfo,linksInfo:(h=p.data())==null?void 0:h.linksInfo},localStorage.setItem("userData",JSON.stringify(t.value))}catch(f){console.error("Error fetching user data:",f)}},email:r,name:s,image:i,parsedUserData:n,userEmail:e}}),vR=El("authentication",()=>{const{toggleAuthenticationPopup:t,toggleUserMenu:e}=En(),{fetchUserData:n}=yR();return{signIn:async()=>{var i,a,c,l,h,f;try{const p=await pI(Ef,_R);t();const m=jm(r_,"userData",(i=p.user)==null?void 0:i.email);(await e_(m)).exists()===!1?await pR(m,{userInfo:{name:(a=p.user)==null?void 0:a.displayName,email:(c=p.user)==null?void 0:c.email,image:(l=p.user)==null?void 0:l.photoURL},linksInfo:[]}):await n((h=p.user)==null?void 0:h.email),localStorage.setItem("userEmail",(f=p.user)==null?void 0:f.email),await Zc.push("/dashboard"),window.location.reload()}catch{return null}},logOut:async()=>{try{return WT(Ef),e(),localStorage.removeItem("userEmail"),localStorage.removeItem("linksInfo"),Zc.push("/"),null}catch{}}}}),ER=t=>(kr("data-v-d414a30e"),t=t(),Or(),t),wR={key:0,class:"authentication-container"},TR=ER(()=>X("img",{src:RE,alt:" escape"},null,-1)),IR=[TR],AR=Ct({__name:"Authentication",setup(t){const e=vR(),n=En();return(r,s)=>(He(),na(vi,{name:"authentication",mode:"out-in"},{default:es(()=>[ke(n).isAuthenticationPopupOpen===!0?(He(),st("div",wR,[X("button",{class:"close-btn",onClick:s[0]||(s[0]=i=>ke(n).toggleAuthenticationPopup())},IR),X("button",{class:"authentication-button",onClick:s[1]||(s[1]=i=>ke(e).signIn())}," SignUp or Login with Google ")])):gn("",!0)]),_:1}))}}),bR=rn(AR,[["__scopeId","data-v-d414a30e"]]),RR=t=>(kr("data-v-de140d21"),t=t(),Or(),t),SR=["aria-haspopup"],PR={class:"CTA-container"},CR=RR(()=>X("p",{class:"CTA-text"},"Revolutionizing Link Optimization!",-1)),kR=Ct({__name:"CTA",setup(t){const e=En();return(n,r)=>(He(),st("section",{"aria-haspopup":ke(e).isAuthenticationPopupOpen},[X("div",PR,[CR,X("button",{onClick:r[0]||(r[0]=(...s)=>ke(e).toggleAuthenticationPopup&&ke(e).toggleAuthenticationPopup(...s)),class:"CTA-button"},"Get Started")])],8,SR))}}),OR=rn(kR,[["__scopeId","data-v-de140d21"]]),NR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%205V19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",DR="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",s_=t=>(kr("data-v-316a6584"),t=t(),Or(),t),VR={class:"faq-question-container"},xR={class:"faq-question"},MR={key:0,class:"plus-icon"},LR=s_(()=>X("img",{src:NR,alt:"plus"},null,-1)),FR=[LR],UR={key:1,class:"minus-icon"},BR=s_(()=>X("img",{src:DR,alt:"minus"},null,-1)),$R=[BR],jR={key:0,class:"faq-answer"},qR=Ct({__name:"FAQBlocks",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(t){const e=Wt(!1),n=()=>{e.value=!e.value};return(r,s)=>(He(),st("div",{class:Ko(["faq-block",{active:e.value}]),onClick:n},[X("div",VR,[X("p",xR,fc(t.question),1),e.value?gn("",!0):(He(),st("div",MR,FR)),e.value?(He(),st("div",UR,$R)):gn("",!0)]),Ce(vi,{name:"fade",mode:"out-in"},{default:es(()=>[e.value?(He(),st("p",jR,fc(t.answer),1)):gn("",!0)]),_:1})],2))}}),so=rn(qR,[["__scopeId","data-v-316a6584"]]),HR=t=>(kr("data-v-1e5f84e4"),t=t(),Or(),t),zR=["aria-haspopup"],KR={class:"faqs-container"},WR=HR(()=>X("div",{class:"faq-header-container"},[X("div",{class:"faq-header-line"},[X("img",{src:zp,alt:"line"})]),X("p",{class:"faq-header"},"FAQs")],-1)),GR={class:"faq-blocks"},QR=Ct({__name:"FAQ",setup(t){const e=En();return(n,r)=>(He(),st("section",{id:"faq","aria-haspopup":ke(e).isAuthenticationPopupOpen},[X("div",KR,[WR,X("div",GR,[Ce(so,{question:"How does URL shortening work?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."}),Ce(so,{question:"Is it necessary to create an account to use the URL shortening service?",answer:"Yes! As creating one unlocks a treasure trove of link-wrangling superpowers like crafting custom links,performance tracking of your links, and more. "}),Ce(so,{question:" What is a QR Code?",answer:"Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is usually in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number."}),Ce(so,{question:"What can a QR Code do?",answer:"Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes."})])])],8,zR))}}),JR=rn(QR,[["__scopeId","data-v-1e5f84e4"]]),fu="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1.5rem'%20width='1.5rem'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%230065FE'%20d='M256%20192l-39.5-39.5c4.9-12.6%207.5-26.2%207.5-40.5C224%2050.1%20173.9%200%20112%200S0%2050.1%200%20112s50.1%20112%20112%20112c14.3%200%2027.9-2.7%2040.5-7.5L192%20256l-39.5%2039.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1%20288%200%20338.1%200%20400s50.1%20112%20112%20112s112-50.1%20112-112c0-14.3-2.7-27.9-7.5-40.5L499.2%2076.8c7.1-7.1%207.1-18.5%200-25.6c-28.3-28.3-74.1-28.3-102.4%200L256%20192zm22.6%20150.6L396.8%20460.8c28.3%2028.3%2074.1%2028.3%20102.4%200c7.1-7.1%207.1-18.5%200-25.6L342.6%20278.6l-64%2064zM64%20112a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm48%20240a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z'/%3e%3c/svg%3e",XR=["aria-haspopup"],YR=Ap('<div class="logo-container" data-v-8a3d745d><div class="logo" data-v-8a3d745d><img src="'+fu+'" alt="logo" data-v-8a3d745d></div><div class="logo-line" data-v-8a3d745d></div><p class="logo-text" data-v-8a3d745d>SCISSOR</p></div><a href="https://www.github.com/favorodera/scissor" target="_blank" rel="noopener noreferrer" data-v-8a3d745d>favorodera</a>',2),ZR=[YR],eS=Ct({__name:"Footer",setup(t){const e=En();return(n,r)=>(He(),st("footer",{"aria-haspopup":ke(e).isAuthenticationPopupOpen},ZR,8,XR))}}),tS=rn(eS,[["__scopeId","data-v-8a3d745d"]]),Sa="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cpath%20d='M50%2023.3333L60%2023.3333C62.1887%2023.3333%2064.356%2023.7643%2066.3781%2024.6019C68.4002%2025.4395%2070.2375%2026.6672%2071.7851%2028.2148C73.3328%2029.7624%2074.5604%2031.5998%2075.398%2033.6219C76.2356%2035.644%2076.6667%2037.8112%2076.6667%2039.9999C76.6667%2042.1886%2076.2356%2044.3559%2075.398%2046.378C74.5604%2048.4001%2073.3328%2050.2374%2071.7851%2051.785C70.2375%2053.3327%2068.4002%2054.5603%2066.3781%2055.3979C64.356%2056.2355%2062.1887%2056.6666%2060%2056.6666H50M30%2056.6666H20C17.8113%2056.6666%2015.644%2056.2355%2013.6219%2055.3979C11.5998%2054.5603%209.76253%2053.3327%208.21488%2051.785C5.08928%2048.6594%203.33333%2044.4202%203.33333%2039.9999C3.33333%2035.5796%205.08928%2031.3404%208.21488%2028.2148C11.3405%2025.0892%2015.5797%2023.3333%2020%2023.3333H30'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.6667%2040H53.3333'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",nS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='41'%20height='12'%20viewBox='0%200%2041%2012'%20fill='none'%3e%3cpath%20d='M1%205C0.447715%205%200%205.44772%200%206C0%206.55228%200.447715%207%201%207L1%205ZM41%206L31%200.226497V11.7735L41%206ZM1%207L32%207V5L1%205L1%207Z'%20fill='%23005AE2'/%3e%3c/svg%3e",rr=t=>(kr("data-v-c497702e"),t=t(),Or(),t),rS=["aria-haspopup"],sS={class:"intro"},iS=rr(()=>X("div",{class:"intro-text-container"},[X("p",{class:"intro-text"}," Optimize Your Online Experience with Our Advanced URL Shortening Solution "),X("p",{class:"intro-description"}," Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. ")],-1)),oS={class:"intro-cta-container"},aS=rr(()=>X("a",{href:"#about",class:"intro-cta-text"},"Learn More",-1)),cS={class:"hero-visuals-container"},lS={class:"hero-visual-image"},uS={class:"coupled-links"},hS=rr(()=>X("div",{class:"link"},[X("img",{src:Sa,alt:"link"})],-1)),dS=rr(()=>X("div",{class:"link"},[X("img",{src:Sa,alt:"link"})],-1)),fS={key:0,class:"link"},pS=rr(()=>X("img",{src:Sa,alt:"link"},null,-1)),gS=[pS],mS=rr(()=>X("div",{class:"arrow"},[X("img",{src:nS,alt:"arrow"})],-1)),_S=rr(()=>X("div",{class:"link"},[X("img",{src:Sa,alt:"link"})],-1)),yS=rr(()=>X("p",{class:"hero-visual-text"},[Fs(" Seamlessly transform your long "),X("span",{class:"hero-visual-text-highlight"},"URLs"),Fs(" into "),X("span",{class:"hero-visual-text-highlight"},"concise"),Fs(" and "),X("span",{class:"hero-visual-text-highlight"},"shareable"),Fs(" links with just few clicks. ")],-1)),vS=Ct({__name:"Hero",setup(t){const e=En(),n=Wt(window.innerWidth),r=()=>{n.value=window.innerWidth};return Yo(()=>{window.addEventListener("resize",r)}),Zo(()=>{window.removeEventListener("resize",r)}),(s,i)=>(He(),st("section",{"aria-haspopup":ke(e).isAuthenticationPopupOpen},[X("div",sS,[iS,X("div",oS,[X("button",{onClick:i[0]||(i[0]=(...a)=>ke(e).toggleAuthenticationPopup&&ke(e).toggleAuthenticationPopup(...a)),class:"intro-cta-button"}," Get Started "),aS])]),X("div",cS,[X("div",lS,[X("div",uS,[hS,dS,n.value>=450?(He(),st("div",fS,gS)):gn("",!0)]),mS,_S]),yS])],8,rS))}}),ES=rn(vS,[["__scopeId","data-v-c497702e"]]),wS="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23005ae2'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e",vs=t=>(kr("data-v-2666b0fe"),t=t(),Or(),t),TS=["aria-haspopup"],IS=vs(()=>X("div",{class:"logo"},[X("img",{src:fu,alt:"logo"})],-1)),AS=vs(()=>X("div",{class:"logo-line"},null,-1)),bS=vs(()=>X("p",{class:"logo-text"},"SCISSOR",-1)),RS={class:"login-and-escape-container"},SS=vs(()=>X("img",{src:wS,alt:"escape"},null,-1)),PS=[SS],CS=vs(()=>X("a",{class:"mobile-nav-url",href:"#about"},"Features",-1)),kS=vs(()=>X("a",{class:"mobile-nav-url",href:"faq"}," FAQs",-1)),OS=Ct({__name:"MobileNav",setup(t){const e=En();return(n,r)=>(He(),na(vi,{name:"mobile-nav",mode:"out-in"},{default:es(()=>[ke(e).isMobileNavOpen===!0?(He(),st("div",{key:0,class:"mobile-nav","aria-haspopup":ke(e).isAuthenticationPopupOpen},[X("nav",null,[Ce(ke(Il),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:es(()=>[IS,AS,bS]),_:1}),X("div",RS,[X("button",{onClick:r[0]||(r[0]=s=>ke(e).toggleAuthenticationPopup()),class:"login"},"Login"),X("button",{class:"close-btn",onClick:r[1]||(r[1]=(...s)=>ke(e).toggleMobileNav&&ke(e).toggleMobileNav(...s))},PS)])]),CS,kS],8,TS)):gn("",!0)]),_:1}))}}),NS=rn(OS,[["__scopeId","data-v-2666b0fe"]]),sr=t=>(kr("data-v-6bc8a897"),t=t(),Or(),t),DS=["aria-haspopup"],VS=sr(()=>X("div",{class:"logo"},[X("img",{src:fu,alt:"logo"})],-1)),xS=sr(()=>X("div",{class:"logo-line"},null,-1)),MS=sr(()=>X("p",{class:"logo-text"},"SCISSOR",-1)),LS={key:0,class:"nav-urls"},FS=sr(()=>X("li",null,[X("a",{href:"#about"},"Features")],-1)),US=sr(()=>X("li",null,[X("a",{href:"#faq"},"FAQs")],-1)),BS=[FS,US],$S=sr(()=>X("div",{class:"line"},null,-1)),jS=sr(()=>X("div",{class:"line"},null,-1)),qS=sr(()=>X("div",{class:"line"},null,-1)),HS=[$S,jS,qS],zS=Ct({__name:"Nav",setup(t){const e=En(),n=Wt(window.innerWidth),r=()=>{n.value=window.innerWidth};return Yo(()=>{window.addEventListener("resize",r)}),Zo(()=>{window.removeEventListener("resize",r)}),(s,i)=>(He(),st("nav",{"aria-haspopup":ke(e).isAuthenticationPopupOpen},[Ce(ke(Il),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:es(()=>[VS,xS,MS]),_:1}),n.value>=600?(He(),st("ul",LS,BS)):gn("",!0),n.value>=600?(He(),st("button",{key:1,onClick:i[0]||(i[0]=a=>ke(e).toggleAuthenticationPopup()),class:"login"}," Login ")):gn("",!0),n.value<600?(He(),st("div",{key:2,class:"hamburger",onClick:i[1]||(i[1]=a=>ke(e).toggleMobileNav())},HS)):gn("",!0)],8,DS))}}),KS=rn(zS,[["__scopeId","data-v-6bc8a897"]]),WS=Ct({__name:"Home",setup(t){return(e,n)=>(He(),st("section",null,[Ce(KS),Ce(NS),Ce(ES),Ce(bE),Ce(JR),Ce(OR),Ce(tS),Ce(bR)]))}}),GS=rn(WS,[["__scopeId","data-v-e124ed88"]]),Zc=hE({history:$0("/"),routes:[{path:"/",name:"home",component:GS},{path:"/dashboard",name:"dashboard",component:()=>mE(()=>import("./Dashboard-xvZHN8ZJ.js"),__vite__mapDeps([0,1]))}]}),pu=t0(fE);pu.use(i0());pu.use(Zc);pu.mount(".root-container");export{ky as A,QS as B,Fs as C,Ht as F,vi as T,rn as _,r1 as a,jm as b,r_ as c,El as d,s1 as e,Ef as f,Ct as g,st as h,X as i,ke as j,Xe as k,ZS as l,Or as m,En as n,He as o,kr as p,Ce as q,XS as r,vR as s,fc as t,yR as u,YS as v,JS as w,na as x,es as y,gn as z};
