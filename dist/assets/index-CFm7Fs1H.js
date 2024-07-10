const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-bUEfA-Ap.js","assets/Dashboard-B5WhQ8_E.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Zr(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const de={},ln=[],De=()=>{},Dl=()=>!1,Us=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ei=t=>t.startsWith("onUpdate:"),me=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ul=Object.prototype.hasOwnProperty,Z=(t,e)=>Ul.call(t,e),H=Array.isArray,un=t=>$s(t)==="[object Map]",ba=t=>$s(t)==="[object Set]",q=t=>typeof t=="function",_e=t=>typeof t=="string",xt=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",ya=t=>(fe(t)||q(t))&&q(t.then)&&q(t.catch),wa=Object.prototype.toString,$s=t=>wa.call(t),$l=t=>$s(t).slice(8,-1),Ia=t=>$s(t)==="[object Object]",ni=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pn=Zr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Fl=/-(\w)/g,_n=Fs(t=>t.replace(Fl,(e,n)=>n?n.toUpperCase():"")),Bl=/\B([A-Z])/g,En=Fs(t=>t.replace(Bl,"-$1").toLowerCase()),Ea=Fs(t=>t.charAt(0).toUpperCase()+t.slice(1)),or=Fs(t=>t?`on${Ea(t)}`:""),Pt=(t,e)=>!Object.is(t,e),ar=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sa=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Hl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},jl=t=>{const e=_e(t)?Number(t):NaN;return isNaN(e)?t:e};let Hi;const Ca=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function si(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Kl(s):si(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(_e(t)||fe(t))return t}const Vl=/;(?![^(]*\))/g,Wl=/:([^]+)/,zl=/\/\*[^]*?\*\//g;function Kl(t){const e={};return t.replace(zl,"").split(Vl).forEach(n=>{if(n){const s=n.split(Wl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Bs(t){let e="";if(_e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Bs(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ql="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Gl=Zr(ql);function Ta(t){return!!t||t===""}const Ra=t=>!!(t&&t.__v_isRef===!0),Tr=t=>_e(t)?t:t==null?"":H(t)||fe(t)&&(t.toString===wa||!q(t.toString))?Ra(t)?Tr(t.value):JSON.stringify(t,Aa,2):String(t),Aa=(t,e)=>Ra(e)?Aa(t,e.value):un(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[cr(s,i)+" =>"]=r,n),{})}:ba(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>cr(n))}:xt(e)?cr(e):fe(e)&&!H(e)&&!Ia(e)?String(e):e,cr=(t,e="")=>{var n;return xt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class ka{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Pa(t){return new ka(t)}function Jl(t,e=xe){e&&e.active&&e.effects.push(t)}function Oa(){return xe}function Ql(t){xe&&xe.cleanups.push(t)}let Gt;class ri{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Jl(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Lt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Yl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Nt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Tt,n=Gt;try{return Tt=!0,Gt=this,this._runnings++,ji(this),this.fn()}finally{Vi(this),this._runnings--,Gt=n,Tt=e}}stop(){this.active&&(ji(this),Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Yl(t){return t.value}function ji(t){t._trackId++,t._depsLength=0}function Vi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)xa(t.deps[e],t);t.deps.length=t._depsLength}}function xa(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Tt=!0,Rr=0;const La=[];function Lt(){La.push(Tt),Tt=!1}function Nt(){const t=La.pop();Tt=t===void 0?!0:t}function ii(){Rr++}function oi(){for(Rr--;!Rr&&Ar.length;)Ar.shift()()}function Na(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&xa(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Ar=[];function Ma(t,e,n){ii();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Ar.push(s.scheduler)))}oi()}const Da=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ss=new WeakMap,Jt=Symbol(""),kr=Symbol("");function Pe(t,e,n){if(Tt&&Gt){let s=Ss.get(t);s||Ss.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Da(()=>s.delete(n))),Na(Gt,r)}}function ct(t,e,n,s,r,i){const o=Ss.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&H(t)){const a=Number(s);o.forEach((l,d)=>{(d==="length"||!xt(d)&&d>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":H(t)?ni(n)&&c.push(o.get("length")):(c.push(o.get(Jt)),un(t)&&c.push(o.get(kr)));break;case"delete":H(t)||(c.push(o.get(Jt)),un(t)&&c.push(o.get(kr)));break;case"set":un(t)&&c.push(o.get(Jt));break}ii();for(const a of c)a&&Ma(a,4);oi()}function Xl(t,e){const n=Ss.get(t);return n&&n.get(e)}const Zl=Zr("__proto__,__v_isRef,__isVue"),Ua=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xt)),Wi=eu();function eu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let i=0,o=this.length;i<o;i++)Pe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lt(),ii();const s=ee(this)[e].apply(this,n);return oi(),Nt(),s}}),t}function tu(t){xt(t)||(t=String(t));const e=ee(this);return Pe(e,"has",t),e.hasOwnProperty(t)}class $a{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?pu:ja:i?Ha:Ba).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){if(o&&Z(Wi,n))return Reflect.get(Wi,n,s);if(n==="hasOwnProperty")return tu}const c=Reflect.get(e,n,s);return(xt(n)?Ua.has(n):Zl(n))||(r||Pe(e,"get",n),i)?c:ve(c)?o&&ni(n)?c:c.value:fe(c)?r?Wa(c):Jn(c):c}}class Fa extends $a{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const a=$n(i);if(!Cs(s)&&!$n(s)&&(i=ee(i),s=ee(s)),!H(e)&&ve(i)&&!ve(s))return a?!1:(i.value=s,!0)}const o=H(e)&&ni(n)?Number(n)<e.length:Z(e,n),c=Reflect.set(e,n,s,r);return e===ee(r)&&(o?Pt(s,i)&&ct(e,"set",n,s):ct(e,"add",n,s)),c}deleteProperty(e,n){const s=Z(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&ct(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!xt(n)||!Ua.has(n))&&Pe(e,"has",n),s}ownKeys(e){return Pe(e,"iterate",H(e)?"length":Jt),Reflect.ownKeys(e)}}class nu extends $a{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const su=new Fa,ru=new nu,iu=new Fa(!0);const ai=t=>t,Hs=t=>Reflect.getPrototypeOf(t);function is(t,e,n=!1,s=!1){t=t.__v_raw;const r=ee(t),i=ee(e);n||(Pt(e,i)&&Pe(r,"get",e),Pe(r,"get",i));const{has:o}=Hs(r),c=s?ai:n?di:Fn;if(o.call(r,e))return c(t.get(e));if(o.call(r,i))return c(t.get(i));t!==r&&t.get(e)}function os(t,e=!1){const n=this.__v_raw,s=ee(n),r=ee(t);return e||(Pt(t,r)&&Pe(s,"has",t),Pe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function as(t,e=!1){return t=t.__v_raw,!e&&Pe(ee(t),"iterate",Jt),Reflect.get(t,"size",t)}function zi(t){t=ee(t);const e=ee(this);return Hs(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Ki(t,e){e=ee(e);const n=ee(this),{has:s,get:r}=Hs(n);let i=s.call(n,t);i||(t=ee(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Pt(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function qi(t){const e=ee(this),{has:n,get:s}=Hs(e);let r=n.call(e,t);r||(t=ee(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ct(e,"delete",t,void 0),i}function Gi(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function cs(t,e){return function(s,r){const i=this,o=i.__v_raw,c=ee(o),a=e?ai:t?di:Fn;return!t&&Pe(c,"iterate",Jt),o.forEach((l,d)=>s.call(r,a(l),a(d),i))}}function ls(t,e,n){return function(...s){const r=this.__v_raw,i=ee(r),o=un(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=r[t](...s),d=n?ai:e?di:Fn;return!e&&Pe(i,"iterate",a?kr:Jt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:c?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ou(){const t={get(i){return is(this,i)},get size(){return as(this)},has:os,add:zi,set:Ki,delete:qi,clear:Gi,forEach:cs(!1,!1)},e={get(i){return is(this,i,!1,!0)},get size(){return as(this)},has:os,add:zi,set:Ki,delete:qi,clear:Gi,forEach:cs(!1,!0)},n={get(i){return is(this,i,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:cs(!0,!1)},s={get(i){return is(this,i,!0,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ls(i,!1,!1),n[i]=ls(i,!0,!1),e[i]=ls(i,!1,!0),s[i]=ls(i,!0,!0)}),[t,n,e,s]}const[au,cu,lu,uu]=ou();function ci(t,e){const n=e?t?uu:lu:t?cu:au;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,i)}const du={get:ci(!1,!1)},fu={get:ci(!1,!0)},hu={get:ci(!0,!1)};const Ba=new WeakMap,Ha=new WeakMap,ja=new WeakMap,pu=new WeakMap;function gu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mu(t){return t.__v_skip||!Object.isExtensible(t)?0:gu($l(t))}function Jn(t){return $n(t)?t:li(t,!1,su,du,Ba)}function Va(t){return li(t,!1,iu,fu,Ha)}function Wa(t){return li(t,!0,ru,hu,ja)}function li(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=mu(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Qt(t){return $n(t)?Qt(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function Cs(t){return!!(t&&t.__v_isShallow)}function za(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function ui(t){return Object.isExtensible(t)&&Sa(t,"__v_skip",!0),t}const Fn=t=>fe(t)?Jn(t):t,di=t=>fe(t)?Wa(t):t;class Ka{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ri(()=>e(this._value),()=>ps(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ee(this);return(!e._cacheable||e.effect.dirty)&&Pt(e._value,e._value=e.effect.run())&&ps(e,4),qa(e),e.effect._dirtyLevel>=2&&ps(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function _u(t,e,n=!1){let s,r;const i=q(t);return i?(s=t,r=De):(s=t.get,r=t.set),new Ka(s,r,i||!r,n)}function qa(t){var e;Tt&&Gt&&(t=ee(t),Na(Gt,(e=t.dep)!=null?e:t.dep=Da(()=>t.dep=void 0,t instanceof Ka?t:void 0)))}function ps(t,e=4,n,s){t=ee(t);const r=t.dep;r&&Ma(r,e)}function ve(t){return!!(t&&t.__v_isRef===!0)}function He(t){return Ga(t,!1)}function vu(t){return Ga(t,!0)}function Ga(t,e){return ve(t)?t:new bu(t,e)}class bu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Fn(e)}get value(){return qa(this),this._value}set value(e){const n=this.__v_isShallow||Cs(e)||$n(e);e=n?e:ee(e),Pt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Fn(e),ps(this,4))}}function ae(t){return ve(t)?t.value:t}const yu={get:(t,e,n)=>ae(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ve(r)&&!ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ja(t){return Qt(t)?t:new Proxy(t,yu)}function wu(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Eu(t,n);return e}class Iu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Xl(ee(this._object),this._key)}}function Eu(t,e,n){const s=t[e];return ve(s)?s:new Iu(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rt(t,e,n,s){try{return s?t(...s):t()}catch(r){js(r,e,n)}}function $e(t,e,n,s){if(q(t)){const r=Rt(t,e,n,s);return r&&ya(r)&&r.catch(i=>{js(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push($e(t[i],e,n,s));return r}}function js(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Lt(),Rt(a,null,10,[t,o,c]),Nt();return}}Su(t,n,r,s)}function Su(t,e,n,s=!0){console.error(t)}let Bn=!1,Pr=!1;const Se=[];let Je=0;const dn=[];let bt=null,Wt=0;const Qa=Promise.resolve();let fi=null;function hi(t){const e=fi||Qa;return t?e.then(this?t.bind(this):t):e}function Cu(t){let e=Je+1,n=Se.length;for(;e<n;){const s=e+n>>>1,r=Se[s],i=Hn(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function pi(t){(!Se.length||!Se.includes(t,Bn&&t.allowRecurse?Je+1:Je))&&(t.id==null?Se.push(t):Se.splice(Cu(t.id),0,t),Ya())}function Ya(){!Bn&&!Pr&&(Pr=!0,fi=Qa.then(Za))}function Tu(t){const e=Se.indexOf(t);e>Je&&Se.splice(e,1)}function Ru(t){H(t)?dn.push(...t):(!bt||!bt.includes(t,t.allowRecurse?Wt+1:Wt))&&dn.push(t),Ya()}function Ji(t,e,n=Bn?Je+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function Xa(t){if(dn.length){const e=[...new Set(dn)].sort((n,s)=>Hn(n)-Hn(s));if(dn.length=0,bt){bt.push(...e);return}for(bt=e,Wt=0;Wt<bt.length;Wt++){const n=bt[Wt];n.active!==!1&&n()}bt=null,Wt=0}}const Hn=t=>t.id==null?1/0:t.id,Au=(t,e)=>{const n=Hn(t)-Hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Za(t){Pr=!1,Bn=!0,Se.sort(Au);try{for(Je=0;Je<Se.length;Je++){const e=Se[Je];e&&e.active!==!1&&Rt(e,null,14)}}finally{Je=0,Se.length=0,Xa(),Bn=!1,fi=null,(Se.length||dn.length)&&Za()}}function ku(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[d]||de;p&&(r=n.map(g=>_e(g)?g.trim():g)),f&&(r=n.map(Hl))}let c,a=s[c=or(e)]||s[c=or(_n(e))];!a&&i&&(a=s[c=or(En(e))]),a&&$e(a,t,6,r);const l=s[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,$e(l,t,6,r)}}function ec(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},c=!1;if(!q(t)){const a=l=>{const d=ec(l,e,!0);d&&(c=!0,me(o,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(fe(t)&&s.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):me(o,i),fe(t)&&s.set(t,o),o)}function Vs(t,e){return!t||!Us(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,En(e))||Z(t,e))}let Ue=null,Ws=null;function Ts(t){const e=Ue;return Ue=t,Ws=t&&t.type.__scopeId||null,e}function en(t){Ws=t}function tn(){Ws=null}function vn(t,e=Ue,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ao(-1);const i=Ts(e);let o;try{o=t(...r)}finally{Ts(i),s._d&&ao(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function lr(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:d,props:f,data:p,setupState:g,ctx:S,inheritAttrs:A}=t,B=Ts(t);let F,N;try{if(n.shapeFlag&4){const G=r||s,K=G;F=Ge(l.call(K,G,d,f,g,p,S)),N=c}else{const G=e;F=Ge(G.length>1?G(f,{attrs:c,slots:o,emit:a}):G(f,null)),N=e.props?c:Pu(c)}}catch(G){Ln.length=0,js(G,t,1),F=oe(Le)}let O=F;if(N&&A!==!1){const G=Object.keys(N),{shapeFlag:K}=O;G.length&&K&7&&(i&&G.some(ei)&&(N=Ou(N,i)),O=Ot(O,N,!1,!0))}return n.dirs&&(O=Ot(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,Ts(B),F}const Pu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Us(n))&&((e||(e={}))[n]=t[n]);return e},Ou=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function xu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Qi(s,o,l):!!o;if(a&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==s[p]&&!Vs(l,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?Qi(s,o,l):!0:!!o;return!1}function Qi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Vs(n,i))return!0}return!1}function Lu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nu=Symbol.for("v-ndc"),Mu=t=>t.__isSuspense;function Du(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Ru(t)}function zs(t,e,n=we,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Lt();const c=Qn(n),a=$e(e,n,t,o);return c(),Nt(),a});return s?r.unshift(i):r.push(i),i}}const dt=t=>(e,n=we)=>{(!Ys||t==="sp")&&zs(t,(...s)=>e(...s),n)},Uu=dt("bm"),Ks=dt("m"),$u=dt("bu"),Fu=dt("u"),tc=dt("bum"),qs=dt("um"),Bu=dt("sp"),Hu=dt("rtg"),ju=dt("rtc");function Vu(t,e=we){zs("ec",t,e)}function Ft(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const c=r[o];i&&(c.oldValue=i[o].value);let a=c.dir[s];a&&(Lt(),$e(a,n,8,[t.el,c,t,e]),Nt())}}/*! #__NO_SIDE_EFFECTS__ */function Ne(t,e){return q(t)?me({name:t.name},e,{setup:t}):t}const gs=t=>!!t.type.__asyncLoader,Or=t=>t?Sc(t)?vi(t):Or(t.parent):null,On=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,pi(t.update)}),$nextTick:t=>t.n||(t.n=hi.bind(t.proxy)),$watch:t=>ud.bind(t)}),ur=(t,e)=>t!==de&&!t.__isScriptSetup&&Z(t,e),Wu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ur(s,e))return o[e]=1,s[e];if(r!==de&&Z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==de&&Z(n,e))return o[e]=4,n[e];xr&&(o[e]=0)}}const d=On[e];let f,p;if(d)return e==="$attrs"&&Pe(t.attrs,"get",""),d(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==de&&Z(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ur(r,e)?(r[e]=n,!0):s!==de&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let c;return!!n[o]||t!==de&&Z(t,o)||ur(e,o)||(c=i[0])&&Z(c,o)||Z(s,o)||Z(On,o)||Z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yi(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xr=!0;function zu(t){const e=gi(t),n=t.proxy,s=t.ctx;xr=!1,e.beforeCreate&&Xi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:c,provide:a,inject:l,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:S,activated:A,deactivated:B,beforeDestroy:F,beforeUnmount:N,destroyed:O,unmounted:G,render:K,renderTracked:D,renderTriggered:Q,errorCaptured:W,serverPrefetch:R,expose:V,inheritAttrs:Y,components:x,directives:te,filters:ge}=e;if(l&&Ku(l,s,null),o)for(const ce in o){const ne=o[ce];q(ne)&&(s[ce]=ne.bind(n))}if(r){const ce=r.call(n,n);fe(ce)&&(t.data=Jn(ce))}if(xr=!0,i)for(const ce in i){const ne=i[ce],et=q(ne)?ne.bind(n,n):q(ne.get)?ne.get.bind(n,n):De,ft=!q(ne)&&q(ne.set)?ne.set.bind(n):De,We=Ce({get:et,set:ft});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ae=>We.value=Ae})}if(c)for(const ce in c)nc(c[ce],s,n,ce);if(a){const ce=q(a)?a.call(n):a;Reflect.ownKeys(ce).forEach(ne=>{ms(ne,ce[ne])})}d&&Xi(d,t,"c");function X(ce,ne){H(ne)?ne.forEach(et=>ce(et.bind(n))):ne&&ce(ne.bind(n))}if(X(Uu,f),X(Ks,p),X($u,g),X(Fu,S),X(dd,A),X(fd,B),X(Vu,W),X(ju,D),X(Hu,Q),X(tc,N),X(qs,G),X(Bu,R),H(V))if(V.length){const ce=t.exposed||(t.exposed={});V.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:et=>n[ne]=et})})}else t.exposed||(t.exposed={});K&&t.render===De&&(t.render=K),Y!=null&&(t.inheritAttrs=Y),x&&(t.components=x),te&&(t.directives=te)}function Ku(t,e,n=De){H(t)&&(t=Lr(t));for(const s in t){const r=t[s];let i;fe(r)?"default"in r?i=Qe(r.from||s,r.default,!0):i=Qe(r.from||s):i=Qe(r),ve(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Xi(t,e,n){$e(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function nc(t,e,n,s){const r=s.includes(".")?gc(n,s):()=>n[s];if(_e(t)){const i=e[t];q(i)&&xn(r,i)}else if(q(t))xn(r,t.bind(n));else if(fe(t))if(H(t))t.forEach(i=>nc(i,e,n,s));else{const i=q(t.handler)?t.handler.bind(n):e[t.handler];q(i)&&xn(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!r.length&&!n&&!s?a=e:(a={},r.length&&r.forEach(l=>Rs(a,l,o,!0)),Rs(a,e,o)),fe(e)&&i.set(e,a),a}function Rs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Rs(t,i,n,!0),r&&r.forEach(o=>Rs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=qu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const qu={data:Zi,props:eo,emits:eo,methods:An,computed:An,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:An,directives:An,watch:Ju,provide:Zi,inject:Gu};function Zi(t,e){return e?t?function(){return me(q(t)?t.call(this,this):t,q(e)?e.call(this,this):e)}:e:t}function Gu(t,e){return An(Lr(t),Lr(e))}function Lr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?me(Object.create(null),t,e):e}function eo(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:me(Object.create(null),Yi(t),Yi(e??{})):e}function Ju(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function sc(){return{app:null,config:{isNativeTag:Dl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qu=0;function Yu(t,e){return function(s,r=null){q(s)||(s=me({},s)),r!=null&&!fe(r)&&(r=null);const i=sc(),o=new WeakSet;let c=!1;const a=i.app={_uid:Qu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Od,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&q(l.install)?(o.add(l),l.install(a,...d)):q(l)&&(o.add(l),l(a,...d))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,d){return d?(i.components[l]=d,a):i.components[l]},directive(l,d){return d?(i.directives[l]=d,a):i.directives[l]},mount(l,d,f){if(!c){const p=oe(s,r);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(p,l):t(p,l,f),c=!0,a._container=l,l.__vue_app__=a,vi(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,d){return i.provides[l]=d,a},runWithContext(l){const d=fn;fn=a;try{return l()}finally{fn=d}}};return a}}let fn=null;function ms(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function Qe(t,e,n=!1){const s=we||Ue;if(s||fn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:fn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&q(e)?e.call(s&&s.proxy):e}}function Xu(){return!!(we||Ue||fn)}const rc={},ic=()=>Object.create(rc),oc=t=>Object.getPrototypeOf(t)===rc;function Zu(t,e,n,s=!1){const r={},i=ic();t.propsDefaults=Object.create(null),ac(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Va(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ed(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,c=ee(r),[a]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(Vs(t.emitsOptions,p))continue;const g=e[p];if(a)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const S=_n(p);r[S]=Nr(a,c,S,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{ac(t,e,r,i)&&(l=!0);let d;for(const f in c)(!e||!Z(e,f)&&((d=En(f))===f||!Z(e,d)))&&(a?n&&(n[f]!==void 0||n[d]!==void 0)&&(r[f]=Nr(a,c,f,void 0,t,!0)):delete r[f]);if(i!==c)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&ct(t.attrs,"set","")}function ac(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Pn(a))continue;const l=e[a];let d;r&&Z(r,d=_n(a))?!i||!i.includes(d)?n[d]=l:(c||(c={}))[d]=l:Vs(t.emitsOptions,a)||(!(a in s)||l!==s[a])&&(s[a]=l,o=!0)}if(i){const a=ee(n),l=c||de;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Nr(r,a,f,l[f],t,!Z(l,f))}}return o}function Nr(t,e,n,s,r,i){const o=t[n];if(o!=null){const c=Z(o,"default");if(c&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&q(a)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const d=Qn(r);s=l[n]=a.call(null,e),d()}}else s=a}o[0]&&(i&&!c?s=!1:o[1]&&(s===""||s===En(n))&&(s=!0))}return s}function cc(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},c=[];let a=!1;if(!q(t)){const d=f=>{a=!0;const[p,g]=cc(f,e,!0);me(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return fe(t)&&s.set(t,ln),ln;if(H(i))for(let d=0;d<i.length;d++){const f=_n(i[d]);to(f)&&(o[f]=de)}else if(i)for(const d in i){const f=_n(d);if(to(f)){const p=i[d],g=o[f]=H(p)||q(p)?{type:p}:me({},p);if(g){const S=ro(Boolean,g.type),A=ro(String,g.type);g[0]=S>-1,g[1]=A<0||S<A,(S>-1||Z(g,"default"))&&c.push(f)}}}const l=[o,c];return fe(t)&&s.set(t,l),l}function to(t){return t[0]!=="$"&&!Pn(t)}function no(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function so(t,e){return no(t)===no(e)}function ro(t,e){return H(e)?e.findIndex(n=>so(n,t)):q(e)&&so(e,t)?0:-1}const lc=t=>t[0]==="_"||t==="$stable",mi=t=>H(t)?t.map(Ge):[Ge(t)],td=(t,e,n)=>{if(e._n)return e;const s=vn((...r)=>mi(e(...r)),n);return s._c=!1,s},uc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(lc(r))continue;const i=t[r];if(q(i))e[r]=td(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},dc=(t,e)=>{const n=mi(e);t.slots.default=()=>n},nd=(t,e)=>{const n=t.slots=ic();if(t.vnode.shapeFlag&32){const s=e._;s?(me(n,e),Sa(n,"_",s,!0)):uc(e,n)}else e&&dc(t,e)},sd=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(me(r,e),!n&&c===1&&delete r._):(i=!e.$stable,uc(e,r)),o=e}else e&&(dc(t,e),o={default:1});if(i)for(const c in r)!lc(c)&&o[c]==null&&delete r[c]};function Mr(t,e,n,s,r=!1){if(H(t)){t.forEach((p,g)=>Mr(p,e&&(H(e)?e[g]:e),n,s,r));return}if(gs(s)&&!r)return;const i=s.shapeFlag&4?vi(s.component):s.el,o=r?null:i,{i:c,r:a}=t,l=e&&e.r,d=c.refs===de?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==a&&(_e(l)?(d[l]=null,Z(f,l)&&(f[l]=null)):ve(l)&&(l.value=null)),q(a))Rt(a,c,12,[o,d]);else{const p=_e(a),g=ve(a);if(p||g){const S=()=>{if(t.f){const A=p?Z(f,a)?f[a]:d[a]:a.value;r?H(A)&&ti(A,i):H(A)?A.includes(i)||A.push(i):p?(d[a]=[i],Z(f,a)&&(f[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else p?(d[a]=o,Z(f,a)&&(f[a]=o)):g&&(a.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,ke(S,n)):S()}}}const ke=Du;function rd(t){return id(t)}function id(t,e){const n=Ca();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=De,insertStaticContent:S}=t,A=(u,h,m,b=null,_=null,I=null,C=void 0,w=null,E=!!h.dynamicChildren)=>{if(u===h)return;u&&!Kt(u,h)&&(b=v(u),Ae(u,_,I,!0),u=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:y,ref:P,shapeFlag:$}=h;switch(y){case Js:B(u,h,m,b);break;case Le:F(u,h,m,b);break;case _s:u==null&&N(h,m,b,C);break;case qe:x(u,h,m,b,_,I,C,w,E);break;default:$&1?K(u,h,m,b,_,I,C,w,E):$&6?te(u,h,m,b,_,I,C,w,E):($&64||$&128)&&y.process(u,h,m,b,_,I,C,w,E,M)}P!=null&&_&&Mr(P,u&&u.ref,I,h||u,!h)},B=(u,h,m,b)=>{if(u==null)s(h.el=c(h.children),m,b);else{const _=h.el=u.el;h.children!==u.children&&l(_,h.children)}},F=(u,h,m,b)=>{u==null?s(h.el=a(h.children||""),m,b):h.el=u.el},N=(u,h,m,b)=>{[u.el,u.anchor]=S(u.children,h,m,b,u.el,u.anchor)},O=({el:u,anchor:h},m,b)=>{let _;for(;u&&u!==h;)_=p(u),s(u,m,b),u=_;s(h,m,b)},G=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),r(u),u=m;r(h)},K=(u,h,m,b,_,I,C,w,E)=>{h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),u==null?D(h,m,b,_,I,C,w,E):R(u,h,_,I,C,w,E)},D=(u,h,m,b,_,I,C,w)=>{let E,y;const{props:P,shapeFlag:$,transition:U,dirs:z}=u;if(E=u.el=o(u.type,I,P&&P.is,P),$&8?d(E,u.children):$&16&&W(u.children,E,null,b,_,dr(u,I),C,w),z&&Ft(u,null,b,"created"),Q(E,u,u.scopeId,C,b),P){for(const ue in P)ue!=="value"&&!Pn(ue)&&i(E,ue,null,P[ue],I,u.children,b,_,Ee);"value"in P&&i(E,"value",null,P.value,I),(y=P.onVnodeBeforeMount)&&Ke(y,b,u)}z&&Ft(u,null,b,"beforeMount");const J=od(_,U);J&&U.beforeEnter(E),s(E,h,m),((y=P&&P.onVnodeMounted)||J||z)&&ke(()=>{y&&Ke(y,b,u),J&&U.enter(E),z&&Ft(u,null,b,"mounted")},_)},Q=(u,h,m,b,_)=>{if(m&&g(u,m),b)for(let I=0;I<b.length;I++)g(u,b[I]);if(_){let I=_.subTree;if(h===I){const C=_.vnode;Q(u,C,C.scopeId,C.slotScopeIds,_.parent)}}},W=(u,h,m,b,_,I,C,w,E=0)=>{for(let y=E;y<u.length;y++){const P=u[y]=w?wt(u[y]):Ge(u[y]);A(null,P,h,m,b,_,I,C,w)}},R=(u,h,m,b,_,I,C)=>{const w=h.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:P}=h;E|=u.patchFlag&16;const $=u.props||de,U=h.props||de;let z;if(m&&Bt(m,!1),(z=U.onVnodeBeforeUpdate)&&Ke(z,m,h,u),P&&Ft(h,u,m,"beforeUpdate"),m&&Bt(m,!0),y?V(u.dynamicChildren,y,w,m,b,dr(h,_),I):C||ne(u,h,w,null,m,b,dr(h,_),I,!1),E>0){if(E&16)Y(w,h,$,U,m,b,_);else if(E&2&&$.class!==U.class&&i(w,"class",null,U.class,_),E&4&&i(w,"style",$.style,U.style,_),E&8){const J=h.dynamicProps;for(let ue=0;ue<J.length;ue++){const se=J[ue],be=$[se],Fe=U[se];(Fe!==be||se==="value")&&i(w,se,be,Fe,_,u.children,m,b,Ee)}}E&1&&u.children!==h.children&&d(w,h.children)}else!C&&y==null&&Y(w,h,$,U,m,b,_);((z=U.onVnodeUpdated)||P)&&ke(()=>{z&&Ke(z,m,h,u),P&&Ft(h,u,m,"updated")},b)},V=(u,h,m,b,_,I,C)=>{for(let w=0;w<h.length;w++){const E=u[w],y=h[w],P=E.el&&(E.type===qe||!Kt(E,y)||E.shapeFlag&70)?f(E.el):m;A(E,y,P,null,b,_,I,C,!0)}},Y=(u,h,m,b,_,I,C)=>{if(m!==b){if(m!==de)for(const w in m)!Pn(w)&&!(w in b)&&i(u,w,m[w],null,C,h.children,_,I,Ee);for(const w in b){if(Pn(w))continue;const E=b[w],y=m[w];E!==y&&w!=="value"&&i(u,w,y,E,C,h.children,_,I,Ee)}"value"in b&&i(u,"value",m.value,b.value,C)}},x=(u,h,m,b,_,I,C,w,E)=>{const y=h.el=u?u.el:c(""),P=h.anchor=u?u.anchor:c("");let{patchFlag:$,dynamicChildren:U,slotScopeIds:z}=h;z&&(w=w?w.concat(z):z),u==null?(s(y,m,b),s(P,m,b),W(h.children||[],m,P,_,I,C,w,E)):$>0&&$&64&&U&&u.dynamicChildren?(V(u.dynamicChildren,U,m,_,I,C,w),(h.key!=null||_&&h===_.subTree)&&fc(u,h,!0)):ne(u,h,m,P,_,I,C,w,E)},te=(u,h,m,b,_,I,C,w,E)=>{h.slotScopeIds=w,u==null?h.shapeFlag&512?_.ctx.activate(h,m,b,C,E):ge(h,m,b,_,I,C,E):ye(u,h,E)},ge=(u,h,m,b,_,I,C)=>{const w=u.component=Sd(u,b,_);if(Gs(u)&&(w.ctx.renderer=M),Td(w),w.asyncDep){if(_&&_.registerDep(w,X,C),!u.el){const E=w.subTree=oe(Le);F(null,E,h,m)}}else X(w,u,h,m,_,I,C)},ye=(u,h,m)=>{const b=h.component=u.component;if(xu(u,h,m))if(b.asyncDep&&!b.asyncResolved){ce(b,h,m);return}else b.next=h,Tu(b.update),b.effect.dirty=!0,b.update();else h.el=u.el,b.vnode=h},X=(u,h,m,b,_,I,C)=>{const w=()=>{if(u.isMounted){let{next:P,bu:$,u:U,parent:z,vnode:J}=u;{const on=hc(u);if(on){P&&(P.el=J.el,ce(u,P,C)),on.asyncDep.then(()=>{u.isUnmounted||w()});return}}let ue=P,se;Bt(u,!1),P?(P.el=J.el,ce(u,P,C)):P=J,$&&ar($),(se=P.props&&P.props.onVnodeBeforeUpdate)&&Ke(se,z,P,J),Bt(u,!0);const be=lr(u),Fe=u.subTree;u.subTree=be,A(Fe,be,f(Fe.el),v(Fe),u,_,I),P.el=be.el,ue===null&&Lu(u,be.el),U&&ke(U,_),(se=P.props&&P.props.onVnodeUpdated)&&ke(()=>Ke(se,z,P,J),_)}else{let P;const{el:$,props:U}=h,{bm:z,m:J,parent:ue}=u,se=gs(h);if(Bt(u,!1),z&&ar(z),!se&&(P=U&&U.onVnodeBeforeMount)&&Ke(P,ue,h),Bt(u,!0),$&&he){const be=()=>{u.subTree=lr(u),he($,u.subTree,u,_,null)};se?h.type.__asyncLoader().then(()=>!u.isUnmounted&&be()):be()}else{const be=u.subTree=lr(u);A(null,be,m,b,u,_,I),h.el=be.el}if(J&&ke(J,_),!se&&(P=U&&U.onVnodeMounted)){const be=h;ke(()=>Ke(P,ue,be),_)}(h.shapeFlag&256||ue&&gs(ue.vnode)&&ue.vnode.shapeFlag&256)&&u.a&&ke(u.a,_),u.isMounted=!0,h=m=b=null}},E=u.effect=new ri(w,De,()=>pi(y),u.scope),y=u.update=()=>{E.dirty&&E.run()};y.id=u.uid,Bt(u,!0),y()},ce=(u,h,m)=>{h.component=u;const b=u.vnode.props;u.vnode=h,u.next=null,ed(u,h.props,b,m),sd(u,h.children,m),Lt(),Ji(u),Nt()},ne=(u,h,m,b,_,I,C,w,E=!1)=>{const y=u&&u.children,P=u?u.shapeFlag:0,$=h.children,{patchFlag:U,shapeFlag:z}=h;if(U>0){if(U&128){ft(y,$,m,b,_,I,C,w,E);return}else if(U&256){et(y,$,m,b,_,I,C,w,E);return}}z&8?(P&16&&Ee(y,_,I),$!==y&&d(m,$)):P&16?z&16?ft(y,$,m,b,_,I,C,w,E):Ee(y,_,I,!0):(P&8&&d(m,""),z&16&&W($,m,b,_,I,C,w,E))},et=(u,h,m,b,_,I,C,w,E)=>{u=u||ln,h=h||ln;const y=u.length,P=h.length,$=Math.min(y,P);let U;for(U=0;U<$;U++){const z=h[U]=E?wt(h[U]):Ge(h[U]);A(u[U],z,m,null,_,I,C,w,E)}y>P?Ee(u,_,I,!0,!1,$):W(h,m,b,_,I,C,w,E,$)},ft=(u,h,m,b,_,I,C,w,E)=>{let y=0;const P=h.length;let $=u.length-1,U=P-1;for(;y<=$&&y<=U;){const z=u[y],J=h[y]=E?wt(h[y]):Ge(h[y]);if(Kt(z,J))A(z,J,m,null,_,I,C,w,E);else break;y++}for(;y<=$&&y<=U;){const z=u[$],J=h[U]=E?wt(h[U]):Ge(h[U]);if(Kt(z,J))A(z,J,m,null,_,I,C,w,E);else break;$--,U--}if(y>$){if(y<=U){const z=U+1,J=z<P?h[z].el:b;for(;y<=U;)A(null,h[y]=E?wt(h[y]):Ge(h[y]),m,J,_,I,C,w,E),y++}}else if(y>U)for(;y<=$;)Ae(u[y],_,I,!0),y++;else{const z=y,J=y,ue=new Map;for(y=J;y<=U;y++){const Oe=h[y]=E?wt(h[y]):Ge(h[y]);Oe.key!=null&&ue.set(Oe.key,y)}let se,be=0;const Fe=U-J+1;let on=!1,$i=0;const Cn=new Array(Fe);for(y=0;y<Fe;y++)Cn[y]=0;for(y=z;y<=$;y++){const Oe=u[y];if(be>=Fe){Ae(Oe,_,I,!0);continue}let ze;if(Oe.key!=null)ze=ue.get(Oe.key);else for(se=J;se<=U;se++)if(Cn[se-J]===0&&Kt(Oe,h[se])){ze=se;break}ze===void 0?Ae(Oe,_,I,!0):(Cn[ze-J]=y+1,ze>=$i?$i=ze:on=!0,A(Oe,h[ze],m,null,_,I,C,w,E),be++)}const Fi=on?ad(Cn):ln;for(se=Fi.length-1,y=Fe-1;y>=0;y--){const Oe=J+y,ze=h[Oe],Bi=Oe+1<P?h[Oe+1].el:b;Cn[y]===0?A(null,ze,m,Bi,_,I,C,w,E):on&&(se<0||y!==Fi[se]?We(ze,m,Bi,2):se--)}}},We=(u,h,m,b,_=null)=>{const{el:I,type:C,transition:w,children:E,shapeFlag:y}=u;if(y&6){We(u.component.subTree,h,m,b);return}if(y&128){u.suspense.move(h,m,b);return}if(y&64){C.move(u,h,m,M);return}if(C===qe){s(I,h,m);for(let $=0;$<E.length;$++)We(E[$],h,m,b);s(u.anchor,h,m);return}if(C===_s){O(u,h,m);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(I),s(I,h,m),ke(()=>w.enter(I),_);else{const{leave:$,delayLeave:U,afterLeave:z}=w,J=()=>s(I,h,m),ue=()=>{$(I,()=>{J(),z&&z()})};U?U(I,J,ue):ue()}else s(I,h,m)},Ae=(u,h,m,b=!1,_=!1)=>{const{type:I,props:C,ref:w,children:E,dynamicChildren:y,shapeFlag:P,patchFlag:$,dirs:U,memoIndex:z}=u;if($===-2&&(_=!1),w!=null&&Mr(w,null,m,u,!0),z!=null&&(h.renderCache[z]=void 0),P&256){h.ctx.deactivate(u);return}const J=P&1&&U,ue=!gs(u);let se;if(ue&&(se=C&&C.onVnodeBeforeUnmount)&&Ke(se,h,u),P&6)rs(u.component,m,b);else{if(P&128){u.suspense.unmount(m,b);return}J&&Ft(u,null,h,"beforeUnmount"),P&64?u.type.remove(u,h,m,M,b):y&&(I!==qe||$>0&&$&64)?Ee(y,h,m,!1,!0):(I===qe&&$&384||!_&&P&16)&&Ee(E,h,m),b&&sn(u)}(ue&&(se=C&&C.onVnodeUnmounted)||J)&&ke(()=>{se&&Ke(se,h,u),J&&Ft(u,null,h,"unmounted")},m)},sn=u=>{const{type:h,el:m,anchor:b,transition:_}=u;if(h===qe){rn(m,b);return}if(h===_s){G(u);return}const I=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:w}=_,E=()=>C(m,I);w?w(u.el,I,E):E()}else I()},rn=(u,h)=>{let m;for(;u!==h;)m=p(u),r(u),u=m;r(h)},rs=(u,h,m)=>{const{bum:b,scope:_,update:I,subTree:C,um:w,m:E,a:y}=u;io(E),io(y),b&&ar(b),_.stop(),I&&(I.active=!1,Ae(C,u,h,m)),w&&ke(w,h),ke(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(u,h,m,b=!1,_=!1,I=0)=>{for(let C=I;C<u.length;C++)Ae(u[C],h,m,b,_)},v=u=>u.shapeFlag&6?v(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let k=!1;const T=(u,h,m)=>{u==null?h._vnode&&Ae(h._vnode,null,null,!0):A(h._vnode||null,u,h,null,null,null,m),k||(k=!0,Ji(),Xa(),k=!1),h._vnode=u},M={p:A,um:Ae,m:We,r:sn,mt:ge,mc:W,pc:ne,pbc:V,n:v,o:t};let re,he;return{render:T,hydrate:re,createApp:Yu(T,re)}}function dr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Bt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function od(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function fc(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=wt(r[i]),c.el=o.el),!n&&c.patchFlag!==-2&&fc(o,c)),c.type===Js&&(c.el=o.el)}}function ad(t){const e=t.slice(),n=[0];let s,r,i,o,c;const a=t.length;for(s=0;s<a;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function hc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:hc(e)}function io(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const cd=Symbol.for("v-scx"),ld=()=>Qe(cd),us={};function xn(t,e,n){return pc(t,e,n)}function pc(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:c}=de){if(e&&i){const D=e;e=(...Q)=>{D(...Q),K()}}const a=we,l=D=>s===!0?D:zt(D,s===!1?1:void 0);let d,f=!1,p=!1;if(ve(t)?(d=()=>t.value,f=Cs(t)):Qt(t)?(d=()=>l(t),f=!0):H(t)?(p=!0,f=t.some(D=>Qt(D)||Cs(D)),d=()=>t.map(D=>{if(ve(D))return D.value;if(Qt(D))return l(D);if(q(D))return Rt(D,a,2)})):q(t)?e?d=()=>Rt(t,a,2):d=()=>(g&&g(),$e(t,a,3,[S])):d=De,e&&s){const D=d;d=()=>zt(D())}let g,S=D=>{g=O.onStop=()=>{Rt(D,a,4),g=O.onStop=void 0}},A;if(Ys)if(S=De,e?n&&$e(e,a,3,[d(),p?[]:void 0,S]):d(),r==="sync"){const D=ld();A=D.__watcherHandles||(D.__watcherHandles=[])}else return De;let B=p?new Array(t.length).fill(us):us;const F=()=>{if(!(!O.active||!O.dirty))if(e){const D=O.run();(s||f||(p?D.some((Q,W)=>Pt(Q,B[W])):Pt(D,B)))&&(g&&g(),$e(e,a,3,[D,B===us?void 0:p&&B[0]===us?[]:B,S]),B=D)}else O.run()};F.allowRecurse=!!e;let N;r==="sync"?N=F:r==="post"?N=()=>ke(F,a&&a.suspense):(F.pre=!0,a&&(F.id=a.uid),N=()=>pi(F));const O=new ri(d,De,N),G=Oa(),K=()=>{O.stop(),G&&ti(G.effects,O)};return e?n?F():B=O.run():r==="post"?ke(O.run.bind(O),a&&a.suspense):O.run(),A&&A.push(K),K}function ud(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?gc(s,t):()=>s[t]:t.bind(s,s);let i;q(e)?i=e:(i=e.handler,n=e);const o=Qn(this),c=pc(r,i.bind(s),n);return o(),c}function gc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function zt(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ve(t))zt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)zt(t[s],e,n);else if(ba(t)||un(t))t.forEach(s=>{zt(s,e,n)});else if(Ia(t)){for(const s in t)zt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&zt(t[s],e,n)}return t}const Gs=t=>t.type.__isKeepAlive;function dd(t,e){mc(t,"a",e)}function fd(t,e){mc(t,"da",e)}function mc(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(zs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Gs(r.parent.vnode)&&hd(s,e,n,r),r=r.parent}}function hd(t,e,n,s){const r=zs(e,t,s,!0);qs(()=>{ti(s[e],r)},n)}const yt=Symbol("_leaveCb"),ds=Symbol("_enterCb");function pd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ks(()=>{t.isMounted=!0}),tc(()=>{t.isUnmounting=!0}),t}const Me=[Function,Array],_c={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Me,onEnter:Me,onAfterEnter:Me,onEnterCancelled:Me,onBeforeLeave:Me,onLeave:Me,onAfterLeave:Me,onLeaveCancelled:Me,onBeforeAppear:Me,onAppear:Me,onAfterAppear:Me,onAppearCancelled:Me},vc=t=>{const e=t.subTree;return e.component?vc(e.component):e},gd={name:"BaseTransition",props:_c,setup(t,{slots:e}){const n=Cd(),s=pd();return()=>{const r=e.default&&yc(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const p of r)if(p.type!==Le){i=p;break}}const o=ee(t),{mode:c}=o;if(s.isLeaving)return fr(i);const a=oo(i);if(!a)return fr(i);let l=Dr(a,o,s,n,p=>l=p);As(a,l);const d=n.subTree,f=d&&oo(d);if(f&&f.type!==Le&&!Kt(a,f)&&vc(n).type!==Le){const p=Dr(f,o,s,n);if(As(f,p),c==="out-in"&&a.type!==Le)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},fr(i);c==="in-out"&&a.type!==Le&&(p.delayLeave=(g,S,A)=>{const B=bc(s,f);B[String(f.key)]=f,g[yt]=()=>{S(),g[yt]=void 0,delete l.delayedLeave},l.delayedLeave=A})}return i}}},md=gd;function bc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Dr(t,e,n,s,r){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:S,onLeaveCancelled:A,onBeforeAppear:B,onAppear:F,onAfterAppear:N,onAppearCancelled:O}=e,G=String(t.key),K=bc(n,t),D=(R,V)=>{R&&$e(R,s,9,V)},Q=(R,V)=>{const Y=V[1];D(R,V),H(R)?R.every(x=>x.length<=1)&&Y():R.length<=1&&Y()},W={mode:o,persisted:c,beforeEnter(R){let V=a;if(!n.isMounted)if(i)V=B||a;else return;R[yt]&&R[yt](!0);const Y=K[G];Y&&Kt(t,Y)&&Y.el[yt]&&Y.el[yt](),D(V,[R])},enter(R){let V=l,Y=d,x=f;if(!n.isMounted)if(i)V=F||l,Y=N||d,x=O||f;else return;let te=!1;const ge=R[ds]=ye=>{te||(te=!0,ye?D(x,[R]):D(Y,[R]),W.delayedLeave&&W.delayedLeave(),R[ds]=void 0)};V?Q(V,[R,ge]):ge()},leave(R,V){const Y=String(t.key);if(R[ds]&&R[ds](!0),n.isUnmounting)return V();D(p,[R]);let x=!1;const te=R[yt]=ge=>{x||(x=!0,V(),ge?D(A,[R]):D(S,[R]),R[yt]=void 0,K[Y]===t&&delete K[Y])};K[Y]=t,g?Q(g,[R,te]):te()},clone(R){const V=Dr(R,e,n,s,r);return r&&r(V),V}};return W}function fr(t){if(Gs(t))return t=Ot(t),t.children=null,t}function oo(t){if(!Gs(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&q(n.default))return n.default()}}function As(t,e){t.shapeFlag&6&&t.component?As(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yc(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&r++,s=s.concat(yc(o.children,e,c))):(e||o.type!==Le)&&s.push(c!=null?Ot(o,{key:c}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const _d=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),Js=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),_s=Symbol.for("v-stc"),Ln=[];let Be=null;function pe(t=!1){Ln.push(Be=t?null:[])}function vd(){Ln.pop(),Be=Ln[Ln.length-1]||null}let jn=1;function ao(t){jn+=t}function wc(t){return t.dynamicChildren=jn>0?Be||ln:null,vd(),jn>0&&Be&&Be.push(t),t}function Ie(t,e,n,s,r,i){return wc(L(t,e,n,s,r,i,!0))}function Qs(t,e,n,s,r){return wc(oe(t,e,n,s,r,!0))}function Ur(t){return t?t.__v_isVNode===!0:!1}function Kt(t,e){return t.type===e.type&&t.key===e.key}const Ic=({key:t})=>t??null,vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||ve(t)||q(t)?{i:Ue,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,s=0,r=null,i=t===qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ic(e),ref:e&&vs(e),scopeId:Ws,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ue};return c?(_i(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),jn>0&&!o&&Be&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Be.push(a),a}const oe=bd;function bd(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Nu)&&(t=Le),Ur(t)){const c=Ot(t,e,!0);return n&&_i(c,n),jn>0&&!i&&Be&&(c.shapeFlag&6?Be[Be.indexOf(t)]=c:Be.push(c)),c.patchFlag=-2,c}if(Pd(t)&&(t=t.__vccOpts),e){e=yd(e);let{class:c,style:a}=e;c&&!_e(c)&&(e.class=Bs(c)),fe(a)&&(za(a)&&!H(a)&&(a=me({},a)),e.style=si(a))}const o=_e(t)?1:Mu(t)?128:_d(t)?64:fe(t)?4:q(t)?2:0;return L(t,e,n,s,r,o,i,!0)}function yd(t){return t?za(t)||oc(t)?me({},t):t:null}function Ot(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?wd(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ic(l),ref:e&&e.ref?n&&i?H(i)?i.concat(vs(e)):[i,vs(e)]:vs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&As(d,a.clone(d)),d}function kn(t=" ",e=0){return oe(Js,null,t,e)}function Ec(t,e){const n=oe(_s,null,t);return n.staticCount=e,n}function lt(t="",e=!1){return e?(pe(),Qs(Le,null,t)):oe(Le,null,t)}function Ge(t){return t==null||typeof t=="boolean"?oe(Le):H(t)?oe(qe,null,t.slice()):typeof t=="object"?wt(t):oe(Js,null,String(t))}function wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function _i(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),_i(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!oc(e)?e._ctx=Ue:r===3&&Ue&&(Ue.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else q(e)?(e={default:e,_ctx:Ue},n=32):(e=String(e),s&64?(n=16,e=[kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function wd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Bs([e.class,s.class]));else if(r==="style")e.style=si([e.style,s.style]);else if(Us(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ke(t,e,n,s=null){$e(t,e,7,[n,s])}const Id=sc();let Ed=0;function Sd(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Id,i={uid:Ed++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ka(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cc(s,r),emitsOptions:ec(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ku.bind(null,i),t.ce&&t.ce(i),i}let we=null;const Cd=()=>we||Ue;let ks,$r;{const t=Ca(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ks=e("__VUE_INSTANCE_SETTERS__",n=>we=n),$r=e("__VUE_SSR_SETTERS__",n=>Ys=n)}const Qn=t=>{const e=we;return ks(t),t.scope.on(),()=>{t.scope.off(),ks(e)}},co=()=>{we&&we.scope.off(),ks(null)};function Sc(t){return t.vnode.shapeFlag&4}let Ys=!1;function Td(t,e=!1){e&&$r(e);const{props:n,children:s}=t.vnode,r=Sc(t);Zu(t,n,r,e),nd(t,s);const i=r?Rd(t,e):void 0;return e&&$r(!1),i}function Rd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wu);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?kd(t):null,i=Qn(t);Lt();const o=Rt(s,t,0,[t.props,r]);if(Nt(),i(),ya(o)){if(o.then(co,co),e)return o.then(c=>{lo(t,c,e)}).catch(c=>{js(c,t,0)});t.asyncDep=o}else lo(t,o,e)}else Cc(t,e)}function lo(t,e,n){q(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Ja(e)),Cc(t,n)}let uo;function Cc(t,e,n){const s=t.type;if(!t.render){if(!e&&uo&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=s,l=me(me({isCustomElement:i,delimiters:c},o),a);s.render=uo(r,l)}}t.render=s.render||De}{const r=Qn(t);Lt();try{zu(t)}finally{Nt(),r()}}}const Ad={get(t,e){return Pe(t,"get",""),t[e]}};function kd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ad),slots:t.slots,emit:t.emit,expose:e}}function vi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ja(ui(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}})):t.proxy}function Pd(t){return q(t)&&"__vccOpts"in t}const Ce=(t,e)=>_u(t,e,Ys);function bi(t,e,n){const s=arguments.length;return s===2?fe(e)&&!H(e)?Ur(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ur(n)&&(n=[n]),oe(t,e,n))}const Od="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const xd="http://www.w3.org/2000/svg",Ld="http://www.w3.org/1998/Math/MathML",nt=typeof document<"u"?document:null,fo=nt&&nt.createElement("template"),Nd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?nt.createElementNS(xd,t):e==="mathml"?nt.createElementNS(Ld,t):n?nt.createElement(t,{is:n}):nt.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>nt.createTextNode(t),createComment:t=>nt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{fo.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const c=fo.content;if(s==="svg"||s==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pt="transition",Tn="animation",Vn=Symbol("_vtc"),Yn=(t,{slots:e})=>bi(md,Md(t),e);Yn.displayName="Transition";const Tc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yn.props=me({},_c,Tc);const Ht=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},ho=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Md(t){const e={};for(const x in t)x in Tc||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,S=Dd(r),A=S&&S[0],B=S&&S[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:O,onLeave:G,onLeaveCancelled:K,onBeforeAppear:D=F,onAppear:Q=N,onAppearCancelled:W=O}=e,R=(x,te,ge)=>{jt(x,te?d:c),jt(x,te?l:o),ge&&ge()},V=(x,te)=>{x._isLeaving=!1,jt(x,f),jt(x,g),jt(x,p),te&&te()},Y=x=>(te,ge)=>{const ye=x?Q:N,X=()=>R(te,x,ge);Ht(ye,[te,X]),po(()=>{jt(te,x?a:i),gt(te,x?d:c),ho(ye)||go(te,s,A,X)})};return me(e,{onBeforeEnter(x){Ht(F,[x]),gt(x,i),gt(x,o)},onBeforeAppear(x){Ht(D,[x]),gt(x,a),gt(x,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(x,te){x._isLeaving=!0;const ge=()=>V(x,te);gt(x,f),gt(x,p),Fd(),po(()=>{x._isLeaving&&(jt(x,f),gt(x,g),ho(G)||go(x,s,B,ge))}),Ht(G,[x,ge])},onEnterCancelled(x){R(x,!1),Ht(O,[x])},onAppearCancelled(x){R(x,!0),Ht(W,[x])},onLeaveCancelled(x){V(x),Ht(K,[x])}})}function Dd(t){if(t==null)return null;if(fe(t))return[hr(t.enter),hr(t.leave)];{const e=hr(t);return[e,e]}}function hr(t){return jl(t)}function gt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vn]||(t[Vn]=new Set)).add(e)}function jt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Vn];n&&(n.delete(e),n.size||(t[Vn]=void 0))}function po(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ud=0;function go(t,e,n,s){const r=t._endId=++Ud,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=$d(t,e);if(!o)return s();const l=o+"end";let d=0;const f=()=>{t.removeEventListener(l,p),i()},p=g=>{g.target===t&&++d>=a&&f()};setTimeout(()=>{d<a&&f()},c+1),t.addEventListener(l,p)}function $d(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${pt}Delay`),i=s(`${pt}Duration`),o=mo(r,i),c=s(`${Tn}Delay`),a=s(`${Tn}Duration`),l=mo(c,a);let d=null,f=0,p=0;e===pt?o>0&&(d=pt,f=o,p=i.length):e===Tn?l>0&&(d=Tn,f=l,p=a.length):(f=Math.max(o,l),d=f>0?o>l?pt:Tn:null,p=d?d===pt?i.length:a.length:0);const g=d===pt&&/\b(transform|all)(,|$)/.test(s(`${pt}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:g}}function mo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>_o(n)+_o(t[s])))}function _o(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Fd(){return document.body.offsetHeight}function Bd(t,e,n){const s=t[Vn];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vo=Symbol("_vod"),Hd=Symbol("_vsh"),jd=Symbol(""),Vd=/(^|;)\s*display\s*:/;function Wd(t,e,n){const s=t.style,r=_e(n);let i=!1;if(n&&!r){if(e)if(_e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&bs(s,c,"")}else for(const o in e)n[o]==null&&bs(s,o,"");for(const o in n)o==="display"&&(i=!0),bs(s,o,n[o])}else if(r){if(e!==n){const o=s[jd];o&&(n+=";"+o),s.cssText=n,i=Vd.test(n)}}else e&&t.removeAttribute("style");vo in t&&(t[vo]=i?s.display:"",t[Hd]&&(s.display="none"))}const bo=/\s*!important$/;function bs(t,e,n){if(H(n))n.forEach(s=>bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=zd(t,e);bo.test(n)?t.setProperty(En(s),n.replace(bo,""),"important"):t[s]=n}}const yo=["Webkit","Moz","ms"],pr={};function zd(t,e){const n=pr[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return pr[e]=s;s=Ea(s);for(let r=0;r<yo.length;r++){const i=yo[r]+s;if(i in t)return pr[e]=i}return e}const wo="http://www.w3.org/1999/xlink";function Io(t,e,n,s,r,i=Gl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(wo,e.slice(6,e.length)):t.setAttributeNS(wo,e,n):n==null||i&&!Ta(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xt(n)?String(n):n)}function Kd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(l!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ta(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function qd(t,e,n,s){t.addEventListener(e,n,s)}function Gd(t,e,n,s){t.removeEventListener(e,n,s)}const Eo=Symbol("_vei");function Jd(t,e,n,s,r=null){const i=t[Eo]||(t[Eo]={}),o=i[e];if(s&&o)o.value=s;else{const[c,a]=Qd(e);if(s){const l=i[e]=Zd(s,r);qd(t,c,l,a)}else o&&(Gd(t,c,o,a),i[e]=void 0)}}const So=/(?:Once|Passive|Capture)$/;function Qd(t){let e;if(So.test(t)){e={};let s;for(;s=t.match(So);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let gr=0;const Yd=Promise.resolve(),Xd=()=>gr||(Yd.then(()=>gr=0),gr=Date.now());function Zd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$e(ef(s,n.value),e,5,[s])};return n.value=t,n.attached=Xd(),n}function ef(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Co=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,tf=(t,e,n,s,r,i,o,c,a)=>{const l=r==="svg";e==="class"?Bd(t,s,l):e==="style"?Wd(t,n,s):Us(e)?ei(e)||Jd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):nf(t,e,s,l))?(Kd(t,e,s,i,o,c,a),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Io(t,e,s,l,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Io(t,e,s,l))};function nf(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Co(e)&&q(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Co(e)&&_e(n)?!1:e in t}const sf=["ctrl","shift","alt","meta"],rf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>sf.some(n=>t[`${n}Key`]&&!e.includes(n))},V_=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const c=rf[e[o]];if(c&&c(r,e))return}return t(r,...i)})},of=me({patchProp:tf},Nd);let To;function af(){return To||(To=rd(of))}const cf=(...t)=>{const e=af().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=uf(s);if(!r)return;const i=e._component;!q(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,lf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function lf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function uf(t){return _e(t)?document.querySelector(t):t}var df=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Rc;const Xs=t=>Rc=t,Ac=Symbol();function Fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Nn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nn||(Nn={}));function ff(){const t=Pa(!0),e=t.run(()=>He({}));let n=[],s=[];const r=ui({install(i){Xs(r),r._a=i,i.provide(Ac,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!df?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const kc=()=>{};function Ro(t,e,n,s=kc){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Oa()&&Ql(r),r}function an(t,...e){t.slice().forEach(n=>{n(...e)})}const hf=t=>t();function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Fr(r)&&Fr(s)&&t.hasOwnProperty(n)&&!ve(s)&&!Qt(s)?t[n]=Br(r,s):t[n]=s}return t}const pf=Symbol();function gf(t){return!Fr(t)||!t.hasOwnProperty(pf)}const{assign:vt}=Object;function mf(t){return!!(ve(t)&&t.effect)}function _f(t,e,n,s){const{state:r,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=r?r():{});const d=wu(n.state.value[t]);return vt(d,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=ui(Ce(()=>{Xs(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return a=Pc(t,l,e,n,s,!0),a}function Pc(t,e,n={},s,r,i){let o;const c=vt({actions:{}},n),a={deep:!0};let l,d,f=[],p=[],g;const S=s.state.value[t];!i&&!S&&(s.state.value[t]={}),He({});let A;function B(W){let R;l=d=!1,typeof W=="function"?(W(s.state.value[t]),R={type:Nn.patchFunction,storeId:t,events:g}):(Br(s.state.value[t],W),R={type:Nn.patchObject,payload:W,storeId:t,events:g});const V=A=Symbol();hi().then(()=>{A===V&&(l=!0)}),d=!0,an(f,R,s.state.value[t])}const F=i?function(){const{state:R}=n,V=R?R():{};this.$patch(Y=>{vt(Y,V)})}:kc;function N(){o.stop(),f=[],p=[],s._s.delete(t)}function O(W,R){return function(){Xs(s);const V=Array.from(arguments),Y=[],x=[];function te(X){Y.push(X)}function ge(X){x.push(X)}an(p,{args:V,name:W,store:K,after:te,onError:ge});let ye;try{ye=R.apply(this&&this.$id===t?this:K,V)}catch(X){throw an(x,X),X}return ye instanceof Promise?ye.then(X=>(an(Y,X),X)).catch(X=>(an(x,X),Promise.reject(X))):(an(Y,ye),ye)}}const G={_p:s,$id:t,$onAction:Ro.bind(null,p),$patch:B,$reset:F,$subscribe(W,R={}){const V=Ro(f,W,R.detached,()=>Y()),Y=o.run(()=>xn(()=>s.state.value[t],x=>{(R.flush==="sync"?d:l)&&W({storeId:t,type:Nn.direct,events:g},x)},vt({},a,R)));return V},$dispose:N},K=Jn(G);s._s.set(t,K);const Q=(s._a&&s._a.runWithContext||hf)(()=>s._e.run(()=>(o=Pa()).run(e)));for(const W in Q){const R=Q[W];if(ve(R)&&!mf(R)||Qt(R))i||(S&&gf(R)&&(ve(R)?R.value=S[W]:Br(R,S[W])),s.state.value[t][W]=R);else if(typeof R=="function"){const V=O(W,R);Q[W]=V,c.actions[W]=R}}return vt(K,Q),vt(ee(K),Q),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:W=>{B(R=>{vt(R,W)})}}),s._p.forEach(W=>{vt(K,o.run(()=>W({store:K,app:s._a,pinia:s,options:c})))}),S&&i&&n.hydrate&&n.hydrate(K.$state,S),l=!0,d=!0,K}function Oc(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(c,a){const l=Xu();return c=c||(l?Qe(Ac,null):null),c&&Xs(c),c=Rc,c._s.has(s)||(i?Pc(s,e,r,c):_f(s,r,c)),c._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const cn=typeof document<"u";function vf(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function mr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ve(r)?r.map(t):t(r)}return n}const Mn=()=>{},Ve=Array.isArray,xc=/#/g,bf=/&/g,yf=/\//g,wf=/=/g,If=/\?/g,Lc=/\+/g,Ef=/%5B/g,Sf=/%5D/g,Nc=/%5E/g,Cf=/%60/g,Mc=/%7B/g,Tf=/%7C/g,Dc=/%7D/g,Rf=/%20/g;function yi(t){return encodeURI(""+t).replace(Tf,"|").replace(Ef,"[").replace(Sf,"]")}function Af(t){return yi(t).replace(Mc,"{").replace(Dc,"}").replace(Nc,"^")}function Hr(t){return yi(t).replace(Lc,"%2B").replace(Rf,"+").replace(xc,"%23").replace(bf,"%26").replace(Cf,"`").replace(Mc,"{").replace(Dc,"}").replace(Nc,"^")}function kf(t){return Hr(t).replace(wf,"%3D")}function Pf(t){return yi(t).replace(xc,"%23").replace(If,"%3F")}function Of(t){return t==null?"":Pf(t).replace(yf,"%2F")}function Wn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const xf=/\/$/,Lf=t=>t.replace(xf,"");function _r(t,e,n="/"){let s,r={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Uf(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Wn(o)}}function Nf(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ao(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Mf(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&Uc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Uc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Df(t[n],e[n]))return!1;return!0}function Df(t,e){return Ve(t)?ko(t,e):Ve(e)?ko(e,t):t===e}function ko(t,e){return Ve(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Uf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function $f(t){if(!t)if(cn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Lf(t)}const Ff=/^[^#]+#/;function Bf(t,e){return t.replace(Ff,"#")+e}function Hf(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Zs=()=>({left:window.scrollX,top:window.scrollY});function jf(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Hf(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Po(t,e){return(history.state?history.state.position-e:-1)+t}const jr=new Map;function Vf(t,e){jr.set(t,e)}function Wf(t){const e=jr.get(t);return jr.delete(t),e}let zf=()=>location.protocol+"//"+location.host;function $c(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,a=r.slice(c);return a[0]!=="/"&&(a="/"+a),Ao(a,"")}return Ao(n,t)+s+r}function Kf(t,e,n,s){let r=[],i=[],o=null;const c=({state:p})=>{const g=$c(t,location),S=n.value,A=e.value;let B=0;if(p){if(n.value=g,e.value=p,o&&o===S){o=null;return}B=A?p.position-A.position:0}else s(g);r.forEach(F=>{F(n.value,S,{delta:B,type:zn.pop,direction:B?B>0?Dn.forward:Dn.back:Dn.unknown})})};function a(){o=n.value}function l(p){r.push(p);const g=()=>{const S=r.indexOf(p);S>-1&&r.splice(S,1)};return i.push(g),g}function d(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:Zs()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function Oo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Zs():null}}function qf(t){const{history:e,location:n}=window,s={value:$c(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:zf()+t+a;try{e[d?"replaceState":"pushState"](l,"",p),r.value=l}catch(g){console.error(g),n[d?"replace":"assign"](p)}}function o(a,l){const d=ie({},e.state,Oo(r.value.back,a,r.value.forward,!0),l,{position:r.value.position});i(a,d,!0),s.value=a}function c(a,l){const d=ie({},r.value,e.state,{forward:a,scroll:Zs()});i(d.current,d,!0);const f=ie({},Oo(s.value,a,null),{position:d.position+1},l);i(a,f,!1),s.value=a}return{location:s,state:r,push:c,replace:o}}function Gf(t){t=$f(t);const e=qf(t),n=Kf(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ie({location:"",base:t,go:s,createHref:Bf.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Jf(t){return typeof t=="string"||t&&typeof t=="object"}function Fc(t){return typeof t=="string"||typeof t=="symbol"}const Bc=Symbol("");var xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(xo||(xo={}));function yn(t,e){return ie(new Error,{type:t,[Bc]:!0},e)}function tt(t,e){return t instanceof Error&&Bc in t&&(e==null||!!(t.type&e))}const Lo="[^/]+?",Qf={sensitive:!1,strict:!1,start:!0,end:!0},Yf=/[.+*?^${}()[\]/\\]/g;function Xf(t,e){const n=ie({},Qf,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const d=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(Yf,"\\$&"),g+=40;else if(p.type===1){const{value:S,repeatable:A,optional:B,regexp:F}=p;i.push({name:S,repeatable:A,optional:B});const N=F||Lo;if(N!==Lo){g+=10;try{new RegExp(`(${N})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${S}" (${N}): `+G.message)}}let O=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(O=B&&l.length<2?`(?:/${O})`:"/"+O),B&&(O+="?"),r+=O,g+=20,B&&(g+=-8),A&&(g+=-20),N===".*"&&(g+=-50)}d.push(g)}s.push(d)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(l){const d=l.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const g=d[p]||"",S=i[p-1];f[S.name]=g&&S.repeatable?g.split("/"):g}return f}function a(l){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of p)if(g.type===0)d+=g.value;else if(g.type===1){const{value:S,repeatable:A,optional:B}=g,F=S in l?l[S]:"";if(Ve(F)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const N=Ve(F)?F.join("/"):F;if(!N)if(B)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);d+=N}}return d||"/"}return{re:o,score:s,keys:i,parse:c,stringify:a}}function Zf(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Hc(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Zf(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(No(s))return 1;if(No(r))return-1}return r.length-s.length}function No(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eh={type:0,value:""},th=/[a-zA-Z0-9_]/;function nh(t){if(!t)return[[]];if(t==="/")return[[eh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let c=0,a,l="",d="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:a==="("?n=2:th.test(a)?p():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function sh(t,e,n){const s=Xf(nh(t.path),n),r=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rh(t,e){const n=[],s=new Map;e=Uo({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,g){const S=!g,A=ih(f);A.aliasOf=g&&g.record;const B=Uo(e,f),F=[A];if("alias"in f){const G=typeof f.alias=="string"?[f.alias]:f.alias;for(const K of G)F.push(ie({},A,{components:g?g.record.components:A.components,path:K,aliasOf:g?g.record:A}))}let N,O;for(const G of F){const{path:K}=G;if(p&&K[0]!=="/"){const D=p.record.path,Q=D[D.length-1]==="/"?"":"/";G.path=p.record.path+(K&&Q+K)}if(N=sh(G,p,B),g?g.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),S&&f.name&&!Do(N)&&o(f.name)),jc(N)&&a(N),A.children){const D=A.children;for(let Q=0;Q<D.length;Q++)i(D[Q],N,g&&g.children[Q])}g=g||N}return O?()=>{o(O)}:Mn}function o(f){if(Fc(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const p=ch(f,n);n.splice(p,0,f),f.record.name&&!Do(f)&&s.set(f.record.name,f)}function l(f,p){let g,S={},A,B;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw yn(1,{location:f});B=g.record.name,S=ie(Mo(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Mo(f.params,g.keys.map(O=>O.name))),A=g.stringify(S)}else if(f.path!=null)A=f.path,g=n.find(O=>O.re.test(A)),g&&(S=g.parse(A),B=g.record.name);else{if(g=p.name?s.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw yn(1,{location:f,currentLocation:p});B=g.record.name,S=ie({},p.params,f.params),A=g.stringify(S)}const F=[];let N=g;for(;N;)F.unshift(N.record),N=N.parent;return{name:B,path:A,params:S,matched:F,meta:ah(F)}}t.forEach(f=>i(f));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:r}}function Mo(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function ih(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:oh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function oh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Do(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function ah(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Uo(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function ch(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Hc(t,e[i])<0?s=i:n=i+1}const r=lh(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function lh(t){let e=t;for(;e=e.parent;)if(jc(e)&&Hc(t,e)===0)return e}function jc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function uh(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Lc," "),o=i.indexOf("="),c=Wn(o<0?i:i.slice(0,o)),a=o<0?null:Wn(i.slice(o+1));if(c in e){let l=e[c];Ve(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function $o(t){let e="";for(let n in t){const s=t[n];if(n=kf(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(s)?s.map(i=>i&&Hr(i)):[s&&Hr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dh(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ve(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const fh=Symbol(""),Fo=Symbol(""),wi=Symbol(""),Vc=Symbol(""),Vr=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function It(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(yn(4,{from:n,to:e})):p instanceof Error?a(p):Jf(p)?a(yn(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),c())},d=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(d);t.length<3&&(f=f.then(l)),f.catch(p=>a(p))})}function vr(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(hh(a)){const d=(a.__vccOpts||a)[e];d&&i.push(It(d,n,s,o,c,r))}else{let l=a();i.push(()=>l.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const f=vf(d)?d.default:d;o.components[c]=f;const g=(f.__vccOpts||f)[e];return g&&It(g,n,s,o,c,r)()}))}}return i}function hh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bo(t){const e=Qe(wi),n=Qe(Vc),s=Ce(()=>{const a=ae(t.to);return e.resolve(a)}),r=Ce(()=>{const{matched:a}=s.value,{length:l}=a,d=a[l-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(bn.bind(null,d));if(p>-1)return p;const g=Ho(a[l-2]);return l>1&&Ho(d)===g&&f[f.length-1].path!==g?f.findIndex(bn.bind(null,a[l-2])):p}),i=Ce(()=>r.value>-1&&mh(n.params,s.value.params)),o=Ce(()=>r.value>-1&&r.value===n.matched.length-1&&Uc(n.params,s.value.params));function c(a={}){return gh(a)?e[ae(t.replace)?"replace":"push"](ae(t.to)).catch(Mn):Promise.resolve()}return{route:s,href:Ce(()=>s.value.href),isActive:i,isExactActive:o,navigate:c}}const ph=Ne({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bo,setup(t,{slots:e}){const n=Jn(Bo(t)),{options:s}=Qe(wi),r=Ce(()=>({[jo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:bi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ii=ph;function gh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function mh(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ve(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ho(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jo=(t,e,n)=>t??e??n,_h=Ne({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Qe(Vr),r=Ce(()=>t.route||s.value),i=Qe(Fo,0),o=Ce(()=>{let l=ae(i);const{matched:d}=r.value;let f;for(;(f=d[l])&&!f.components;)l++;return l}),c=Ce(()=>r.value.matched[o.value]);ms(Fo,Ce(()=>o.value+1)),ms(fh,c),ms(Vr,r);const a=He();return xn(()=>[a.value,c.value,t.name],([l,d,f],[p,g,S])=>{d&&(d.instances[f]=l,g&&g!==d&&l&&l===p&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),l&&d&&(!g||!bn(d,g)||!p)&&(d.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=r.value,d=t.name,f=c.value,p=f&&f.components[d];if(!p)return Vo(n.default,{Component:p,route:l});const g=f.props[d],S=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=bi(p,ie({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[d]=null)},ref:a}));return Vo(n.default,{Component:B,route:l})||B}}});function Vo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wc=_h;function vh(t){const e=rh(t.routes,t),n=t.parseQuery||uh,s=t.stringifyQuery||$o,r=t.history,i=Rn(),o=Rn(),c=Rn(),a=vu(mt);let l=mt;cn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=mr.bind(null,v=>""+v),f=mr.bind(null,Of),p=mr.bind(null,Wn);function g(v,k){let T,M;return Fc(v)?(T=e.getRecordMatcher(v),M=k):M=v,e.addRoute(M,T)}function S(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function A(){return e.getRoutes().map(v=>v.record)}function B(v){return!!e.getRecordMatcher(v)}function F(v,k){if(k=ie({},k||a.value),typeof v=="string"){const h=_r(n,v,k.path),m=e.resolve({path:h.path},k),b=r.createHref(h.fullPath);return ie(h,m,{params:p(m.params),hash:Wn(h.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=ie({},v,{path:_r(n,v.path,k.path).path});else{const h=ie({},v.params);for(const m in h)h[m]==null&&delete h[m];T=ie({},v,{params:f(h)}),k.params=f(k.params)}const M=e.resolve(T,k),re=v.hash||"";M.params=d(p(M.params));const he=Nf(s,ie({},v,{hash:Af(re),path:M.path})),u=r.createHref(he);return ie({fullPath:he,hash:re,query:s===$o?dh(v.query):v.query||{}},M,{redirectedFrom:void 0,href:u})}function N(v){return typeof v=="string"?_r(n,v,a.value.path):ie({},v)}function O(v,k){if(l!==v)return yn(8,{from:k,to:v})}function G(v){return Q(v)}function K(v){return G(ie(N(v),{replace:!0}))}function D(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let M=typeof T=="function"?T(v):T;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),ie({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function Q(v,k){const T=l=F(v),M=a.value,re=v.state,he=v.force,u=v.replace===!0,h=D(T);if(h)return Q(ie(N(h),{state:typeof h=="object"?ie({},re,h.state):re,force:he,replace:u}),k||T);const m=T;m.redirectedFrom=k;let b;return!he&&Mf(s,M,T)&&(b=yn(16,{to:m,from:M}),We(M,M,!0,!1)),(b?Promise.resolve(b):V(m,M)).catch(_=>tt(_)?tt(_,2)?_:ft(_):ne(_,m,M)).then(_=>{if(_){if(tt(_,2))return Q(ie({replace:u},N(_.to),{state:typeof _.to=="object"?ie({},re,_.to.state):re,force:he}),k||m)}else _=x(m,M,!0,u,re);return Y(m,M,_),_})}function W(v,k){const T=O(v,k);return T?Promise.reject(T):Promise.resolve()}function R(v){const k=rn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(v):v()}function V(v,k){let T;const[M,re,he]=bh(v,k);T=vr(M.reverse(),"beforeRouteLeave",v,k);for(const h of M)h.leaveGuards.forEach(m=>{T.push(It(m,v,k))});const u=W.bind(null,v,k);return T.push(u),Ee(T).then(()=>{T=[];for(const h of i.list())T.push(It(h,v,k));return T.push(u),Ee(T)}).then(()=>{T=vr(re,"beforeRouteUpdate",v,k);for(const h of re)h.updateGuards.forEach(m=>{T.push(It(m,v,k))});return T.push(u),Ee(T)}).then(()=>{T=[];for(const h of he)if(h.beforeEnter)if(Ve(h.beforeEnter))for(const m of h.beforeEnter)T.push(It(m,v,k));else T.push(It(h.beforeEnter,v,k));return T.push(u),Ee(T)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),T=vr(he,"beforeRouteEnter",v,k,R),T.push(u),Ee(T))).then(()=>{T=[];for(const h of o.list())T.push(It(h,v,k));return T.push(u),Ee(T)}).catch(h=>tt(h,8)?h:Promise.reject(h))}function Y(v,k,T){c.list().forEach(M=>R(()=>M(v,k,T)))}function x(v,k,T,M,re){const he=O(v,k);if(he)return he;const u=k===mt,h=cn?history.state:{};T&&(M||u?r.replace(v.fullPath,ie({scroll:u&&h&&h.scroll},re)):r.push(v.fullPath,re)),a.value=v,We(v,k,T,u),ft()}let te;function ge(){te||(te=r.listen((v,k,T)=>{if(!rs.listening)return;const M=F(v),re=D(M);if(re){Q(ie(re,{replace:!0}),M).catch(Mn);return}l=M;const he=a.value;cn&&Vf(Po(he.fullPath,T.delta),Zs()),V(M,he).catch(u=>tt(u,12)?u:tt(u,2)?(Q(u.to,M).then(h=>{tt(h,20)&&!T.delta&&T.type===zn.pop&&r.go(-1,!1)}).catch(Mn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),ne(u,M,he))).then(u=>{u=u||x(M,he,!1),u&&(T.delta&&!tt(u,8)?r.go(-T.delta,!1):T.type===zn.pop&&tt(u,20)&&r.go(-1,!1)),Y(M,he,u)}).catch(Mn)}))}let ye=Rn(),X=Rn(),ce;function ne(v,k,T){ft(v);const M=X.list();return M.length?M.forEach(re=>re(v,k,T)):console.error(v),Promise.reject(v)}function et(){return ce&&a.value!==mt?Promise.resolve():new Promise((v,k)=>{ye.add([v,k])})}function ft(v){return ce||(ce=!v,ge(),ye.list().forEach(([k,T])=>v?T(v):k()),ye.reset()),v}function We(v,k,T,M){const{scrollBehavior:re}=t;if(!cn||!re)return Promise.resolve();const he=!T&&Wf(Po(v.fullPath,0))||(M||!T)&&history.state&&history.state.scroll||null;return hi().then(()=>re(v,k,he)).then(u=>u&&jf(u)).catch(u=>ne(u,v,k))}const Ae=v=>r.go(v);let sn;const rn=new Set,rs={currentRoute:a,listening:!0,addRoute:g,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:B,getRoutes:A,resolve:F,options:t,push:G,replace:K,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:X.add,isReady:et,install(v){const k=this;v.component("RouterLink",Ii),v.component("RouterView",Wc),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ae(a)}),cn&&!sn&&a.value===mt&&(sn=!0,G(r.location).catch(re=>{}));const T={};for(const re in mt)Object.defineProperty(T,re,{get:()=>a.value[re],enumerable:!0});v.provide(wi,k),v.provide(Vc,Va(T)),v.provide(Vr,a);const M=v.unmount;rn.add(v),v.unmount=function(){rn.delete(v),rn.size<1&&(l=mt,te&&te(),te=null,a.value=mt,sn=!1,ce=!1),M()}}};function Ee(v){return v.reduce((k,T)=>k.then(()=>R(T)),Promise.resolve())}return rs}function bh(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>bn(l,c))?s.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>bn(l,a))||r.push(a))}return[n,s,r]}const yh=Ne({__name:"index",setup(t){return(e,n)=>(pe(),Qs(ae(Wc)))}}),wh="modulepreload",Ih=function(t){return"/"+t},Wo={},Eh=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(c=>{if(c=Ih(c),c in Wo)return;Wo[c]=!0;const a=c.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":wh,a||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),a)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Ei="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1.5rem'%20width='1.5rem'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%230065FE'%20d='M256%20192l-39.5-39.5c4.9-12.6%207.5-26.2%207.5-40.5C224%2050.1%20173.9%200%20112%200S0%2050.1%200%20112s50.1%20112%20112%20112c14.3%200%2027.9-2.7%2040.5-7.5L192%20256l-39.5%2039.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1%20288%200%20338.1%200%20400s50.1%20112%20112%20112s112-50.1%20112-112c0-14.3-2.7-27.9-7.5-40.5L499.2%2076.8c7.1-7.1%207.1-18.5%200-25.6c-28.3-28.3-74.1-28.3-102.4%200L256%20192zm22.6%20150.6L396.8%20460.8c28.3%2028.3%2074.1%2028.3%20102.4%200c7.1-7.1%207.1-18.5%200-25.6L342.6%20278.6l-64%2064zM64%20112a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm48%20240a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z'/%3e%3c/svg%3e",Mt=Oc("togglers",()=>{const t=He(!1),e=He(!1),n=He(!1);return{isMobileNavOpen:t,toggleMobileNav:()=>{t.value=!t.value},isUserMenuOpen:e,toggleUserMenu:()=>{e.value=!e.value},isAuthenticationOpen:n,toggleAuthentication:()=>{n.value=!n.value}}}),Dt=t=>(en("data-v-bf9ded93"),t=t(),tn(),t),Sh=["aria-haspopup"],Ch=Dt(()=>L("div",{class:"logo"},[L("img",{src:Ei,alt:"logo"})],-1)),Th=Dt(()=>L("div",{class:"logo-line"},null,-1)),Rh=Dt(()=>L("p",{class:"logo-text"},"SCISSOR",-1)),Ah={key:0,class:"nav-urls"},kh=Dt(()=>L("li",null,[L("a",{href:"#about"},"Features")],-1)),Ph=Dt(()=>L("li",null,[L("a",{href:"#faq"},"FAQs")],-1)),Oh=[kh,Ph],xh=Dt(()=>L("div",{class:"line"},null,-1)),Lh=Dt(()=>L("div",{class:"line"},null,-1)),Nh=Dt(()=>L("div",{class:"line"},null,-1)),Mh=[xh,Lh,Nh],Dh=Ne({__name:"Nav",setup(t){const e=Mt(),n=He(window.innerWidth),s=()=>{n.value=window.innerWidth};return Ks(()=>{window.addEventListener("resize",s)}),qs(()=>{window.removeEventListener("resize",s)}),(r,i)=>(pe(),Ie("nav",{"aria-haspopup":ae(e).isAuthenticationOpen},[oe(ae(Ii),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:vn(()=>[Ch,Th,Rh]),_:1}),n.value>=600?(pe(),Ie("ul",Ah,Oh)):lt("",!0),n.value>=600?(pe(),Ie("button",{key:1,onClick:i[0]||(i[0]=o=>ae(e).toggleAuthentication()),class:"login"}," Login ")):lt("",!0),n.value<600?(pe(),Ie("div",{key:2,class:"hamburger",onClick:i[1]||(i[1]=o=>ae(e).toggleMobileNav())},Mh)):lt("",!0)],8,Sh))}}),Ze=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Uh=Ze(Dh,[["__scopeId","data-v-bf9ded93"]]),er="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cpath%20d='M50%2023.3333L60%2023.3333C62.1887%2023.3333%2064.356%2023.7643%2066.3781%2024.6019C68.4002%2025.4395%2070.2375%2026.6672%2071.7851%2028.2148C73.3328%2029.7624%2074.5604%2031.5998%2075.398%2033.6219C76.2356%2035.644%2076.6667%2037.8112%2076.6667%2039.9999C76.6667%2042.1886%2076.2356%2044.3559%2075.398%2046.378C74.5604%2048.4001%2073.3328%2050.2374%2071.7851%2051.785C70.2375%2053.3327%2068.4002%2054.5603%2066.3781%2055.3979C64.356%2056.2355%2062.1887%2056.6666%2060%2056.6666H50M30%2056.6666H20C17.8113%2056.6666%2015.644%2056.2355%2013.6219%2055.3979C11.5998%2054.5603%209.76253%2053.3327%208.21488%2051.785C5.08928%2048.6594%203.33333%2044.4202%203.33333%2039.9999C3.33333%2035.5796%205.08928%2031.3404%208.21488%2028.2148C11.3405%2025.0892%2015.5797%2023.3333%2020%2023.3333H30'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.6667%2040H53.3333'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",$h="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='41'%20height='12'%20viewBox='0%200%2041%2012'%20fill='none'%3e%3cpath%20d='M1%205C0.447715%205%200%205.44772%200%206C0%206.55228%200.447715%207%201%207L1%205ZM41%206L31%200.226497V11.7735L41%206ZM1%207L32%207V5L1%205L1%207Z'%20fill='%23005AE2'/%3e%3c/svg%3e",Ut=t=>(en("data-v-5280e4f7"),t=t(),tn(),t),Fh=["aria-haspopup"],Bh={class:"intro"},Hh=Ut(()=>L("div",{class:"intro-text-container"},[L("p",{class:"intro-text"}," Optimize Your Online Experience with Our Advanced URL Shortening Solution "),L("p",{class:"intro-description"}," Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. ")],-1)),jh={class:"intro-cta-container"},Vh=Ut(()=>L("a",{href:"#about",class:"intro-cta-text"},"Learn More",-1)),Wh={class:"hero-visuals-container"},zh={class:"hero-visual-image"},Kh={class:"coupled-links"},qh=Ut(()=>L("div",{class:"link"},[L("img",{src:er,alt:"link"})],-1)),Gh=Ut(()=>L("div",{class:"link"},[L("img",{src:er,alt:"link"})],-1)),Jh={key:0,class:"link"},Qh=Ut(()=>L("img",{src:er,alt:"link"},null,-1)),Yh=[Qh],Xh=Ut(()=>L("div",{class:"arrow"},[L("img",{src:$h,alt:"arrow"})],-1)),Zh=Ut(()=>L("div",{class:"link"},[L("img",{src:er,alt:"link"})],-1)),ep=Ut(()=>L("p",{class:"hero-visual-text"},[kn(" Seamlessly transform your long "),L("span",{class:"hero-visual-text-highlight"},"URLs"),kn(" into "),L("span",{class:"hero-visual-text-highlight"},"concise"),kn(" and "),L("span",{class:"hero-visual-text-highlight"},"shareable"),kn(" links with just few clicks. ")],-1)),tp=Ne({__name:"Hero",setup(t){const e=Mt(),n=He(window.innerWidth),s=()=>{n.value=window.innerWidth};return Ks(()=>{window.addEventListener("resize",s)}),qs(()=>{window.removeEventListener("resize",s)}),(r,i)=>(pe(),Ie("section",{"aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Bh,[Hh,L("div",jh,[L("button",{onClick:i[0]||(i[0]=(...o)=>ae(e).toggleAuthentication&&ae(e).toggleAuthentication(...o)),class:"intro-cta-button"},"Get Started"),Vh])]),L("div",Wh,[L("div",zh,[L("div",Kh,[qh,Gh,n.value>=450?(pe(),Ie("div",Jh,Yh)):lt("",!0)]),Xh,Zh]),ep])],8,Fh))}}),np=Ze(tp,[["__scopeId","data-v-5280e4f7"]]),zc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='6'%20height='48'%20viewBox='0%200%206%2048'%20fill='none'%3e%3cpath%20d='M3%200V48'%20stroke='url(%23paint0_linear_1_196)'%20stroke-width='5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_196'%20x1='3.05'%20y1='0'%20x2='3.05'%20y2='48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23112232'/%3e%3cstop%20offset='1'%20stop-color='%234D6B88'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",sp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_203)'%3e%3cpath%20d='M15.1%207H18.1C18.7566%207%2019.4068%207.12933%2020.0134%207.3806C20.6201%207.63188%2021.1712%208.00017%2021.6355%208.46447C22.0998%208.92876%2022.4681%209.47996%2022.7194%2010.0866C22.9707%2010.6932%2023.1%2011.3434%2023.1%2012C23.1%2012.6566%2022.9707%2013.3068%2022.7194%2013.9134C22.4681%2014.52%2022.0998%2015.0712%2021.6355%2015.5355C21.1712%2015.9998%2020.6201%2016.3681%2020.0134%2016.6194C19.4068%2016.8707%2018.7566%2017%2018.1%2017H15.1M9.10001%2017H6.10001C5.4434%2017%204.79322%2016.8707%204.18659%2016.6194C3.57996%2016.3681%203.02877%2015.9998%202.56447%2015.5355C1.62679%2014.5979%201.10001%2013.3261%201.10001%2012C1.10001%2010.6739%201.62679%209.40215%202.56447%208.46447C3.50215%207.52678%204.77392%207%206.10001%207H9.10001'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.10001%2012H16.1'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_203'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",rp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cpath%20d='M11.1%204H4.10001C3.56957%204%203.06087%204.21071%202.68579%204.58579C2.31072%204.96086%202.10001%205.46957%202.10001%206V20C2.10001%2020.5304%202.31072%2021.0391%202.68579%2021.4142C3.06087%2021.7893%203.56957%2022%204.10001%2022H18.1C18.6304%2022%2019.1391%2021.7893%2019.5142%2021.4142C19.8893%2021.0391%2020.1%2020.5304%2020.1%2020V13'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6%202.49998C18.9978%202.10216%2019.5374%201.87866%2020.1%201.87866C20.6626%201.87866%2021.2022%202.10216%2021.6%202.49998C21.9978%202.89781%2022.2213%203.43737%2022.2213%203.99998C22.2213%204.56259%2021.9978%205.10216%2021.6%205.49998L12.1%2015L8.10001%2016L9.10001%2012L18.6%202.49998Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",ip="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%3e%3cpath%20d='M10.8859%203.06763H3.88589V10.0676H10.8859V3.06763Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%203.06763H14.8859V10.0676H21.8859V3.06763Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%2014.0676H14.8859V21.0676H21.8859V14.0676Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8859%2014.0676H3.88589V21.0676H10.8859V14.0676Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",op="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_236)'%3e%3cpath%20d='M21.1%2012H17.1L14.1%2021L8.10001%203L5.10001%2012H1.10001'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_236'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ap=["aria-haspopup"],cp=Ec('<div class="stats-container" data-v-bdd10bc4><p class="stats-heading" data-v-bdd10bc4> One Stop, <br data-v-bdd10bc4>Four <span class="stats-heading-highlight" data-v-bdd10bc4>Possibilities</span>. </p><div class="stats" data-v-bdd10bc4><div class="stat-box-container" id="stat-box-container1" data-v-bdd10bc4><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>12M</p><p class="stat-text" data-v-bdd10bc4>Active Users</p></div><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>60M</p><p class="stat-text" data-v-bdd10bc4>Links &amp; QR codes created</p></div></div><div class="stat-box-container" data-v-bdd10bc4><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>1B</p><p class="stat-text" data-v-bdd10bc4>Clicked &amp; Scanned connections</p></div><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>300K</p><p class="stat-text" data-v-bdd10bc4>App Integrations</p></div></div></div></div><div class="about-container" data-v-bdd10bc4><div class="why-choose-container" data-v-bdd10bc4><div class="why-choose-heading-container" data-v-bdd10bc4><div class="why-choose-heading-line" data-v-bdd10bc4><img src="'+zc+'" alt="line" data-v-bdd10bc4></div><p class="why-choose-heading" data-v-bdd10bc4> Why Choose <span class="why-choose-heading-highlight" data-v-bdd10bc4>Scissor</span></p></div><p class="why-choose-text" data-v-bdd10bc4> Scissor is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p></div><div class="features-container" data-v-bdd10bc4><div class="features-box-container" data-v-bdd10bc4><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+sp+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>URL Shortening</p><p class="feature-box-text" data-v-bdd10bc4> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects. </p></div></div><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+rp+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>Custom URLs</p><p class="feature-box-text" data-v-bdd10bc4> With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. </p></div></div></div><div class="features-box-container" data-v-bdd10bc4><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+ip+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>QR Codes</p><p class="feature-box-text" data-v-bdd10bc4> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution. </p></div></div><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+op+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>Data Analytics</p><p class="feature-box-text" data-v-bdd10bc4> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress. </p></div></div></div></div></div>',2),lp=[cp],up=Ne({__name:"About",setup(t){const e=Mt();return(n,s)=>(pe(),Ie("section",{id:"about","aria-haspopup":ae(e).isAuthenticationOpen},lp,8,ap))}}),dp=Ze(up,[["__scopeId","data-v-bdd10bc4"]]),fp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%205V19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",hp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Kc=t=>(en("data-v-316a6584"),t=t(),tn(),t),pp={class:"faq-question-container"},gp={class:"faq-question"},mp={key:0,class:"plus-icon"},_p=Kc(()=>L("img",{src:fp,alt:"plus"},null,-1)),vp=[_p],bp={key:1,class:"minus-icon"},yp=Kc(()=>L("img",{src:hp,alt:"minus"},null,-1)),wp=[yp],Ip={key:0,class:"faq-answer"},Ep=Ne({__name:"FAQBlocks",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(t){const e=He(!1),n=()=>{e.value=!e.value};return(s,r)=>(pe(),Ie("div",{class:Bs(["faq-block",{active:e.value}]),onClick:n},[L("div",pp,[L("p",gp,Tr(t.question),1),e.value?lt("",!0):(pe(),Ie("div",mp,vp)),e.value?(pe(),Ie("div",bp,wp)):lt("",!0)]),oe(Yn,{name:"fade",mode:"out-in"},{default:vn(()=>[e.value?(pe(),Ie("p",Ip,Tr(t.answer),1)):lt("",!0)]),_:1})],2))}}),fs=Ze(Ep,[["__scopeId","data-v-316a6584"]]),Sp=t=>(en("data-v-8efe8e3d"),t=t(),tn(),t),Cp=["aria-haspopup"],Tp={class:"faqs-container"},Rp=Sp(()=>L("div",{class:"faq-header-container"},[L("div",{class:"faq-header-line"},[L("img",{src:zc,alt:"line"})]),L("p",{class:"faq-header"},"FAQs")],-1)),Ap={class:"faq-blocks"},kp=Ne({__name:"FAQ",setup(t){const e=Mt();return(n,s)=>(pe(),Ie("section",{id:"faq","aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Tp,[Rp,L("div",Ap,[oe(fs,{question:"How does URL shortening work?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."}),oe(fs,{question:"Is it necessary to create an account to use the URL shortening service?",answer:"Yes! As creating one unlocks a treasure trove of link-wrangling superpowers like crafting custom links,performance tracking of your links, and more. "}),oe(fs,{question:" What is a QR Code?",answer:"Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is usually in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number."}),oe(fs,{question:"What can a QR Code do?",answer:"Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes."})])])],8,Cp))}}),Pp=Ze(kp,[["__scopeId","data-v-8efe8e3d"]]),Op=t=>(en("data-v-587c4790"),t=t(),tn(),t),xp=["aria-haspopup"],Lp={class:"CTA-container"},Np=Op(()=>L("p",{class:"CTA-text"},"Revolutionizing Link Optimization!",-1)),Mp=Ne({__name:"CTA",setup(t){const e=Mt();return(n,s)=>(pe(),Ie("section",{"aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Lp,[Np,L("button",{onClick:s[0]||(s[0]=(...r)=>ae(e).toggleAuthentication&&ae(e).toggleAuthentication(...r)),class:"CTA-button"},"Get Started")])],8,xp))}}),Dp=Ze(Mp,[["__scopeId","data-v-587c4790"]]),Up="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23005ae2'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e",tr=t=>(en("data-v-630bf274"),t=t(),tn(),t),$p=["aria-haspopup"],Fp=tr(()=>L("div",{class:"logo"},[L("img",{src:Ei,alt:"logo"})],-1)),Bp=tr(()=>L("div",{class:"logo-line"},null,-1)),Hp=tr(()=>L("p",{class:"logo-text"},"SCISSOR",-1)),jp={class:"login-and-escape-container"},Vp=tr(()=>L("img",{src:Up,alt:"escape"},null,-1)),Wp=[Vp],zp=Ne({__name:"MobileNav",setup(t){const e=Mt();return(n,s)=>(pe(),Qs(Yn,{name:"mobile-nav",mode:"out-in"},{default:vn(()=>[ae(e).isMobileNavOpen===!0?(pe(),Ie("div",{key:0,class:"mobile-nav","aria-haspopup":ae(e).isAuthenticationOpen},[L("nav",null,[oe(ae(Ii),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:vn(()=>[Fp,Bp,Hp]),_:1}),L("div",jp,[L("button",{onClick:s[0]||(s[0]=r=>ae(e).toggleAuthentication()),class:"login"},"Login"),L("button",{class:"close-btn",onClick:s[1]||(s[1]=(...r)=>ae(e).toggleMobileNav&&ae(e).toggleMobileNav(...r))},Wp)])])],8,$p)):lt("",!0)]),_:1}))}}),Kp=Ze(zp,[["__scopeId","data-v-630bf274"]]),qp=["aria-haspopup"],Gp=Ec('<div class="logo-container" data-v-90938e72><div class="logo" data-v-90938e72><img src="'+Ei+'" alt="logo" data-v-90938e72></div><div class="logo-line" data-v-90938e72></div><p class="logo-text" data-v-90938e72>SCISSOR</p></div><a href="https://www.github.com/favorodera/scissor" target="_blank" rel="noopener noreferrer" data-v-90938e72>favorodera</a>',2),Jp=[Gp],Qp=Ne({__name:"Footer",setup(t){const e=Mt();return(n,s)=>(pe(),Ie("footer",{"aria-haspopup":ae(e).isAuthenticationOpen},Jp,8,qp))}}),Yp=Ze(Qp,[["__scopeId","data-v-90938e72"]]),Xp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23FFFFFF'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e";var zo={};/**
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
 */const qc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Zp=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Gc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,d=i>>2,f=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),s.push(n[d],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zp(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||l==null||f==null)throw new eg;const p=i<<2|c>>4;if(s.push(p),l!==64){const g=c<<4&240|l>>2;if(s.push(g),f!==64){const S=l<<6&192|f;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tg=function(t){const e=qc(t);return Gc.encodeByteArray(e,!0)},Jc=function(t){return tg(t).replace(/\./g,"")},Qc=function(t){try{return Gc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ng(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sg=()=>ng().__FIREBASE_DEFAULTS__,rg=()=>{if(typeof process>"u"||typeof zo>"u")return;const t=zo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ig=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Qc(t[1]);return e&&JSON.parse(e)},Si=()=>{try{return sg()||rg()||ig()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},og=t=>{var e,n;return(n=(e=Si())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Yc=()=>{var t;return(t=Si())===null||t===void 0?void 0:t.config},Xc=t=>{var e;return(e=Si())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ag{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function lg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ug(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dg(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fg(){try{return typeof indexedDB=="object"}catch{return!1}}function hg(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const pg="FirebaseError";class $t extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=pg,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?gg(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new $t(r,c,s)}}function gg(t,e){return t.replace(mg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const mg=/\{\$([^}]+)}/g;function _g(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Ko(i)&&Ko(o)){if(!Ps(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ko(t){return t!==null&&typeof t=="object"}/**
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
 */function Zn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function vg(t,e){const n=new bg(t,e);return n.subscribe.bind(n)}class bg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");yg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=br),r.error===void 0&&(r.error=br),r.complete===void 0&&(r.complete=br);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function br(){}/**
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
 */function nn(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vt="[DEFAULT]";/**
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
 */class wg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ag;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Eg(e))try{this.getOrInitializeService({instanceIdentifier:Vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Vt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vt){return this.instances.has(e)}getOptions(e=Vt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ig(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Vt){return this.component?this.component.multipleInstances?e:Vt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ig(t){return t===Vt?void 0:t}function Eg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Cg={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Tg=le.INFO,Rg={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Ag=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Rg[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Tg,this._logHandler=Ag,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const kg=(t,e)=>e.some(n=>t instanceof n);let qo,Go;function Pg(){return qo||(qo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Og(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const el=new WeakMap,Wr=new WeakMap,tl=new WeakMap,yr=new WeakMap,Ci=new WeakMap;function xg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(At(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&el.set(n,t)}).catch(()=>{}),Ci.set(e,t),e}function Lg(t){if(Wr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Wr.set(t,e)}let zr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return At(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ng(t){zr=t(zr)}function Mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(wr(this),e,...n);return tl.set(s,e.sort?e.sort():[e]),At(s)}:Og().includes(t)?function(...e){return t.apply(wr(this),e),At(el.get(this))}:function(...e){return At(t.apply(wr(this),e))}}function Dg(t){return typeof t=="function"?Mg(t):(t instanceof IDBTransaction&&Lg(t),kg(t,Pg())?new Proxy(t,zr):t)}function At(t){if(t instanceof IDBRequest)return xg(t);if(yr.has(t))return yr.get(t);const e=Dg(t);return e!==t&&(yr.set(t,e),Ci.set(e,t)),e}const wr=t=>Ci.get(t);function Ug(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=At(o);return s&&o.addEventListener("upgradeneeded",a=>{s(At(o.result),a.oldVersion,a.newVersion,At(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const $g=["get","getKey","getAll","getAllKeys","count"],Fg=["put","add","delete","clear"],Ir=new Map;function Jo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ir.get(e))return Ir.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Fg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||$g.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return Ir.set(e,i),i}Ng(t=>({...t,get:(e,n,s)=>Jo(e,n)||t.get(e,n,s),has:(e,n)=>!!Jo(e,n)||t.has(e,n)}));/**
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
 */class Bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kr="@firebase/app",Qo="0.10.6";/**
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
 */const Xt=new Zc("@firebase/app"),jg="@firebase/app-compat",Vg="@firebase/analytics-compat",Wg="@firebase/analytics",zg="@firebase/app-check-compat",Kg="@firebase/app-check",qg="@firebase/auth",Gg="@firebase/auth-compat",Jg="@firebase/database",Qg="@firebase/database-compat",Yg="@firebase/functions",Xg="@firebase/functions-compat",Zg="@firebase/installations",em="@firebase/installations-compat",tm="@firebase/messaging",nm="@firebase/messaging-compat",sm="@firebase/performance",rm="@firebase/performance-compat",im="@firebase/remote-config",om="@firebase/remote-config-compat",am="@firebase/storage",cm="@firebase/storage-compat",lm="@firebase/firestore",um="@firebase/vertexai-preview",dm="@firebase/firestore-compat",fm="firebase",hm="10.12.3";/**
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
 */const qr="[DEFAULT]",pm={[Kr]:"fire-core",[jg]:"fire-core-compat",[Wg]:"fire-analytics",[Vg]:"fire-analytics-compat",[Kg]:"fire-app-check",[zg]:"fire-app-check-compat",[qg]:"fire-auth",[Gg]:"fire-auth-compat",[Jg]:"fire-rtdb",[Qg]:"fire-rtdb-compat",[Yg]:"fire-fn",[Xg]:"fire-fn-compat",[Zg]:"fire-iid",[em]:"fire-iid-compat",[tm]:"fire-fcm",[nm]:"fire-fcm-compat",[sm]:"fire-perf",[rm]:"fire-perf-compat",[im]:"fire-rc",[om]:"fire-rc-compat",[am]:"fire-gcs",[cm]:"fire-gcs-compat",[lm]:"fire-fst",[dm]:"fire-fst-compat",[um]:"fire-vertex","fire-js":"fire-js",[fm]:"fire-js-all"};/**
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
 */const Os=new Map,gm=new Map,Gr=new Map;function Yo(t,e){try{t.container.addComponent(e)}catch(n){Xt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Gr.has(e))return Xt.debug(`There were multiple attempts to register component ${e}.`),!1;Gr.set(e,t);for(const n of Os.values())Yo(n,t);for(const n of gm.values())Yo(n,t);return!0}function nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function rt(t){return t.settings!==void 0}/**
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
 */const mm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new Xn("app","Firebase",mm);/**
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
 */class _m{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const es=hm;function sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(n||(n=Yc()),!n)throw kt.create("no-options");const i=Os.get(r);if(i){if(Ps(n,i.options)&&Ps(s,i.config))return i;throw kt.create("duplicate-app",{appName:r})}const o=new Sg(r);for(const a of Gr.values())o.addComponent(a);const c=new _m(n,s,o);return Os.set(r,c),c}function vm(t=qr){const e=Os.get(t);if(!e&&t===qr&&Yc())return sl();if(!e)throw kt.create("no-app",{appName:t});return e}function hn(t,e,n){var s;let r=(s=pm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xt.warn(c.join(" "));return}Kn(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bm="firebase-heartbeat-database",ym=1,qn="firebase-heartbeat-store";let Er=null;function rl(){return Er||(Er=Ug(bm,ym,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),Er}async function wm(t){try{const n=(await rl()).transaction(qn),s=await n.objectStore(qn).get(il(t));return await n.done,s}catch(e){if(e instanceof $t)Xt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xt.warn(n.message)}}}async function Xo(t,e){try{const s=(await rl()).transaction(qn,"readwrite");await s.objectStore(qn).put(e,il(t)),await s.done}catch(n){if(n instanceof $t)Xt.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xt.warn(s.message)}}}function il(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Im=1024,Em=30*24*60*60*1e3;class Sm{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Tm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Em}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zo(),{heartbeatsToSend:s,unsentEntries:r}=Cm(this._heartbeatsCache.heartbeats),i=Jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zo(){return new Date().toISOString().substring(0,10)}function Cm(t,e=Im){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ea(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ea(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fg()?hg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ea(t){return Jc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rm(t){Kn(new wn("platform-logger",e=>new Bg(e),"PRIVATE")),Kn(new wn("heartbeat",e=>new Sm(e),"PRIVATE")),hn(Kr,Qo,t),hn(Kr,Qo,"esm2017"),hn("fire-js","")}Rm("");var Am="firebase",km="10.12.3";/**
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
 */hn(Am,km,"app");function Ti(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function ol(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pm=ol,al=new Xn("auth","Firebase",ol());/**
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
 */const xs=new Zc("@firebase/auth");function Om(t,...e){xs.logLevel<=le.WARN&&xs.warn(`Auth (${es}): ${t}`,...e)}function ys(t,...e){xs.logLevel<=le.ERROR&&xs.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function Xe(t,...e){throw Ai(t,...e)}function je(t,...e){return Ai(t,...e)}function Ri(t,e,n){const s=Object.assign(Object.assign({},Pm()),{[e]:n});return new Xn("auth","Firebase",s).create(e,{appName:t.name})}function Yt(t){return Ri(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function xm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xe(t,"argument-error"),Ri(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ai(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return al.create(t,...e)}function j(t,e,...n){if(!t)throw Ai(e,...n)}function it(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function ut(t,e){t||it(e)}/**
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
 */function Jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lm(){return ta()==="http:"||ta()==="https:"}function ta(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Nm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lm()||lg()||"connection"in navigator)?navigator.onLine:!0}function Mm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,ut(n>e,"Short delay should be less than long delay!"),this.isMobile=cg()||ug()}get(){return Nm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ki(t,e){ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cl{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;it("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;it("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;it("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Dm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Um=new ts(3e4,6e4);function Pi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,s,r={}){return ll(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),cl.fetch()(ul(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ll(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Dm),e);try{const r=new Fm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw hs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw hs(t,"user-disabled",o);const d=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ri(t,d,l);Xe(t,d)}}catch(r){if(r instanceof $t)throw r;Xe(t,"network-request-failed",{message:String(r)})}}async function $m(t,e,n,s,r={}){const i=await Sn(t,e,n,s,r);return"mfaPendingCredential"in i&&Xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ul(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ki(t.config,r):`${t.config.apiScheme}://${r}`}class Fm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(je(this.auth,"network-request-failed")),Um.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=je(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Bm(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function dl(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Un(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hm(t,e=!1){const n=nn(t),s=await n.getIdToken(e),r=Oi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Un(Sr(r.auth_time)),issuedAtTime:Un(Sr(r.iat)),expirationTime:Un(Sr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Sr(t){return Number(t)*1e3}function Oi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const r=Qc(n);return r?JSON.parse(r):(ys("Failed to decode base64 JWT payload"),null)}catch(r){return ys("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function na(t){const e=Oi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $t&&jm(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Vm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gn(t,dl(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fl(i.providerUserInfo):[],c=zm(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Qr(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Wm(t){const e=nn(t);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zm(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function fl(t){return t.map(e=>{var{providerId:n}=e,s=Ti(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Km(t,e){const n=await ll(t,{},async()=>{const s=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=ul(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",cl.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qm(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Pi(t,e))}/**
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
 */class pn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):na(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=na(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Km(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new pn;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pn,this.toJSON())}_performRefresh(){return it("not implemented")}}/**
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
 */function _t(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ti(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Qr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Hm(this,e)}reload(){return Wm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ls(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(Yt(this.auth));const e=await this.getIdToken();return await Gn(this,Bm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,c,a,l,d;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,B=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,F=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:G,isAnonymous:K,providerData:D,stsTokenManager:Q}=n;j(O&&Q,e,"internal-error");const W=pn.fromJSON(this.name,Q);j(typeof O=="string",e,"internal-error"),_t(f,e.name),_t(p,e.name),j(typeof G=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),_t(g,e.name),_t(S,e.name),_t(A,e.name),_t(B,e.name),_t(F,e.name),_t(N,e.name);const R=new ot({uid:O,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:K,photoURL:S,phoneNumber:g,tenantId:A,stsTokenManager:W,createdAt:F,lastLoginAt:N});return D&&Array.isArray(D)&&(R.providerData=D.map(V=>Object.assign({},V))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new pn;r.updateFromServerResponse(n);const i=new ot({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ls(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];j(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?fl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new pn;c.updateFromIdToken(s);const a=new ot({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Qr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const sa=new Map;function at(t){ut(t instanceof Function,"Expected a class definition");let e=sa.get(t);return e?(ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sa.set(t,e),e)}/**
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
 */class hl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hl.type="NONE";const ra=hl;/**
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
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class gn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ws(this.userKey,r.apiKey,i),this.fullPersistenceKey=ws("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new gn(at(ra),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||at(ra);const o=ws(s,e.config.apiKey,e.name);let c=null;for(const l of n)try{const d=await l._get(o);if(d){const f=ot._fromJSON(e,d);l!==i&&(c=f),i=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new gn(i,e,s):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new gn(i,e,s))}}/**
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
 */function ia(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ml(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(bl(e))return"Webos";if(xi(e))return"Safari";if((e.includes("chrome/")||gl(e))&&!e.includes("edge/"))return"Chrome";if(_l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pl(t=Te()){return/firefox\//i.test(t)}function xi(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gl(t=Te()){return/crios\//i.test(t)}function ml(t=Te()){return/iemobile/i.test(t)}function _l(t=Te()){return/android/i.test(t)}function vl(t=Te()){return/blackberry/i.test(t)}function bl(t=Te()){return/webos/i.test(t)}function nr(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gm(t=Te()){var e;return nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Jm(){return dg()&&document.documentMode===10}function yl(t=Te()){return nr(t)||_l(t)||bl(t)||vl(t)||/windows phone/i.test(t)||ml(t)}function Qm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function wl(t,e=[]){let n;switch(t){case"Browser":n=ia(Te());break;case"Worker":n=`${ia(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${s}`}/**
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
 */class Ym{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Xm(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Pi(t,e))}/**
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
 */const Zm=6;class e0{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Zm,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class t0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oa(this),this.idTokenSubscription=new oa(this),this.beforeStateQueue=new Ym(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=al,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await gn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await dl(this,{idToken:e}),s=await ot._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(Yt(this));const n=e?nn(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(Yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(Yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xm(this),n=new e0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await qm(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await gn.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Om(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function sr(t){return nn(t)}class oa{constructor(e){this.auth=e,this.observer=null,this.addObserver=vg(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Li={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function n0(t){Li=t}function s0(t){return Li.loadJS(t)}function r0(){return Li.gapiScript}function i0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function o0(t,e){const n=nl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ps(i,e??{}))return r;Xe(r,"already-initialized")}return n.initialize({options:e})}function a0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function c0(t,e,n){const s=sr(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=Il(e),{host:o,port:c}=l0(e),a=c===null?"":`:${c}`;s.config.emulator={url:`${i}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),u0()}function Il(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function l0(t){const e=Il(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:aa(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:aa(o)}}}function aa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function u0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class El{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return it("not implemented")}_getIdTokenResponse(e){return it("not implemented")}_linkToIdToken(e,n){return it("not implemented")}_getReauthenticationResolver(e){return it("not implemented")}}/**
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
 */async function mn(t,e){return $m(t,"POST","/v1/accounts:signInWithIdp",Pi(t,e))}/**
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
 */const d0="http://localhost";class Zt extends El{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ti(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return mn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,mn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,mn(e,n)}buildRequest(){const e={requestUri:d0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
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
 */class Ni{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends Ni{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends ns{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class st extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:st.PROVIDER_ID,signInMethod:st.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return st.credentialFromTaggedObject(e)}static credentialFromError(e){return st.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return st.credential(n,s)}catch{return null}}}st.GOOGLE_SIGN_IN_METHOD="google.com";st.PROVIDER_ID="google.com";/**
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
 */class St extends ns{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
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
 */class Ct extends ns{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Ct.credential(n,s)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ot._fromIdTokenResponse(e,s,r),o=ca(s);return new In({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ca(s);return new In({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ca(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ns extends $t{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ns(e,n,s,r)}}function Sl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(t,i,e,s):i})}async function f0(t,e,n=!1){const s=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",s)}/**
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
 */async function h0(t,e,n=!1){const{auth:s}=t;if(rt(s.app))return Promise.reject(Yt(s));const r="reauthenticate";try{const i=await Gn(t,Sl(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=Oi(i.idToken);j(o,s,"internal-error");const{sub:c}=o;return j(t.uid===c,s,"user-mismatch"),In._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Xe(s,"user-mismatch"),i}}/**
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
 */async function p0(t,e,n=!1){if(rt(t.app))return Promise.reject(Yt(t));const s="signIn",r=await Sl(t,s,e),i=await In._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function g0(t,e,n,s){return nn(t).onIdTokenChanged(e,n,s)}function m0(t,e,n){return nn(t).beforeAuthStateChanged(e,n)}function _0(t){return nn(t).signOut()}const Ms="__sak";/**
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
 */class Cl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function v0(){const t=Te();return xi(t)||nr(t)}const b0=1e3,y0=10;class Tl extends Cl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=v0()&&Qm(),this.fallbackToPolling=yl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Jm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,y0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},b0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tl.type="LOCAL";const w0=Tl;/**
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
 */class Rl extends Cl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Rl.type="SESSION";const Al=Rl;/**
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
 */function I0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await I0(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
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
 */function Mi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class E0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Mi("",20);r.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function S0(t){Ye().location.href=t}/**
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
 */function kl(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function C0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function T0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R0(){return kl()?self:null}/**
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
 */const Pl="firebaseLocalStorageDb",A0=1,Ds="firebaseLocalStorage",Ol="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([Ds],e?"readwrite":"readonly").objectStore(Ds)}function k0(){const t=indexedDB.deleteDatabase(Pl);return new ss(t).toPromise()}function Yr(){const t=indexedDB.open(Pl,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ds,{keyPath:Ol})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ds)?e(s):(s.close(),await k0(),e(await Yr()))})})}async function la(t,e,n){const s=ir(t,!0).put({[Ol]:e,value:n});return new ss(s).toPromise()}async function P0(t,e){const n=ir(t,!1).get(e),s=await new ss(n).toPromise();return s===void 0?null:s.value}function ua(t,e){const n=ir(t,!0).delete(e);return new ss(n).toPromise()}const O0=800,x0=3;class xl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>x0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(R0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await C0(),!this.activeServiceWorker)return;this.sender=new E0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||T0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yr();return await la(e,Ms,"1"),await ua(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>la(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>P0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ua(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),O0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xl.type="LOCAL";const L0=xl;new ts(3e4,6e4);/**
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
 */function Ll(t,e){return e?at(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Di extends El{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return mn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function N0(t){return p0(t.auth,new Di(t),t.bypassAuthState)}function M0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),h0(n,new Di(t),t.bypassAuthState)}async function D0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),f0(n,new Di(t),t.bypassAuthState)}/**
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
 */class Nl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return N0;case"linkViaPopup":case"linkViaRedirect":return D0;case"reauthViaPopup":case"reauthViaRedirect":return M0;default:Xe(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const U0=new ts(2e3,1e4);async function $0(t,e,n){if(rt(t.app))return Promise.reject(je(t,"operation-not-supported-in-this-environment"));const s=sr(t);xm(t,e,Ni);const r=Ll(s,n);return new qt(s,"signInViaPopup",e,r).executeNotNull()}class qt extends Nl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Mi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}qt.currentPopupAction=null;/**
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
 */const F0="pendingRedirect",Is=new Map;class B0 extends Nl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const s=await H0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H0(t,e){const n=W0(e),s=V0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function j0(t,e){Is.set(t._key(),e)}function V0(t){return at(t._redirectPersistence)}function W0(t){return ws(F0,t.config.apiKey,t.name)}async function z0(t,e,n=!1){if(rt(t.app))return Promise.reject(Yt(t));const s=sr(t),r=Ll(s,e),o=await new B0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const K0=10*60*1e3;class q0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!G0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ml(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=K0&&this.cachedEventUids.clear(),this.cachedEventUids.has(da(e))}saveEventToCache(e){this.cachedEventUids.add(da(e)),this.lastProcessedEventTime=Date.now()}}function da(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ml({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function G0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ml(t);default:return!1}}/**
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
 */async function J0(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const Q0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Y0=/^https?/;async function X0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await J0(t);for(const n of e)try{if(Z0(n))return}catch{}Xe(t,"unauthorized-domain")}function Z0(t){const e=Jr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!Y0.test(n))return!1;if(Q0.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const e_=new ts(3e4,6e4);function fa(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function t_(t){return new Promise((e,n)=>{var s,r,i;function o(){fa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fa(),n(je(t,"network-request-failed"))},timeout:e_.get()})}if(!((r=(s=Ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const c=i0("iframefcb");return Ye()[c]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},s0(`${r0()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Es=null,e})}let Es=null;function n_(t){return Es=Es||t_(t),Es}/**
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
 */const s_=new ts(5e3,15e3),r_="__/auth/iframe",i_="emulator/auth/iframe",o_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},a_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function c_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ki(e,i_):`https://${t.config.authDomain}/${r_}`,s={apiKey:e.apiKey,appName:t.name,v:es},r=a_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Zn(s).slice(1)}`}async function l_(t){const e=await n_(t),n=Ye().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:c_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:o_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),c=Ye().setTimeout(()=>{i(o)},s_.get());function a(){Ye().clearTimeout(c),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const u_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d_=500,f_=600,h_="_blank",p_="http://localhost";class ha{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g_(t,e,n,s=d_,r=f_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const a=Object.assign(Object.assign({},u_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=gl(l)?h_:n),pl(l)&&(e=e||p_,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(Gm(l)&&c!=="_self")return m_(e||"",c),new ha(null);const f=window.open(e||"",c,d);j(f,t,"popup-blocked");try{f.focus()}catch{}return new ha(f)}function m_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const __="__/auth/handler",v_="emulator/auth/handler",b_=encodeURIComponent("fac");async function pa(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:es,eventId:r};if(e instanceof Ni){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_g(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ns){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),l=a?`#${b_}=${encodeURIComponent(a)}`:"";return`${y_(t)}?${Zn(c).slice(1)}${l}`}function y_({config:t}){return t.emulator?ki(t,v_):`https://${t.authDomain}/${__}`}/**
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
 */const Cr="webStorageSupport";class w_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Al,this._completeRedirectFn=z0,this._overrideRedirectResult=j0}async _openPopup(e,n,s,r){var i;ut((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await pa(e,n,s,Jr(),r);return g_(e,o,Mi())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await pa(e,n,s,Jr(),r);return S0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ut(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await l_(e),s=new q0(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cr,{type:Cr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Cr];o!==void 0&&n(!!o),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=X0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yl()||xi()||nr()}}const I_=w_;var ga="@firebase/auth",ma="1.7.5";/**
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
 */class E_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C_(t){Kn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wl(t)},l=new t0(s,r,i,a);return a0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new wn("auth-internal",e=>{const n=sr(e.getProvider("auth").getImmediate());return(s=>new E_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(ga,ma,S_(t)),hn(ga,ma,"esm2017")}/**
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
 */const T_=5*60,R_=Xc("authIdTokenMaxAge")||T_;let _a=null;const A_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>R_)return;const r=n==null?void 0:n.token;_a!==r&&(_a=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function k_(t=vm()){const e=nl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=o0(t,{popupRedirectResolver:I_,persistence:[L0,w0,Al]}),s=Xc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=A_(i.toString());m0(n,o,()=>o(n.currentUser)),g0(n,c=>o(c))}}const r=og("auth");return r&&c0(n,`http://${r}`),n}function P_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}n0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",P_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C_("Browser");const O_={apiKey:"AIzaSyCC64Nn4jBqVsSnEkyRXk_2XGTzwL2VDFM",authDomain:"scissortool.firebaseapp.com",projectId:"scissortool",storageBucket:"scissortool.appspot.com",messagingSenderId:"881658314273",appId:"1:881658314273:web:1bdcd991530b9d36a76d60"},x_=sl(O_),L_=new st,va=k_(x_),N_=Oc("authentication",()=>{const t=He(null),e=He(!1),n=localStorage.getItem("userData"),s=Ce(()=>{var a;return n?JSON.parse(n).displayName.split(" ")[0]:(a=t.value)==null?void 0:a.displayName.split(" ")[0]}),r=Ce(()=>{var a;return n?JSON.parse(n).email:(a=t.value)==null?void 0:a.email}),i=Ce(()=>{var a;return n?JSON.parse(n).photoURL:(a=t.value)==null?void 0:a.photoURL}),o=async()=>{try{const a=await $0(va,L_);return t.value=a.user,localStorage.setItem("userData",JSON.stringify(t.value)),Xr.push("/dashboard"),e.value=!0,t.value}catch{return null}},c=async()=>{try{return _0(va),t.value=null,localStorage.removeItem("userData"),Xr.push("/"),e.value=!1,t.value}catch{return null}};return{userData:Ce(()=>t.value),isLoggedIn:e,signIn:o,logOut:c,username:s,userEmail:r,userImage:i}}),M_=t=>(en("data-v-d6525ea9"),t=t(),tn(),t),D_={key:0,class:"authentication-container"},U_=M_(()=>L("img",{src:Xp,alt:" escape"},null,-1)),$_=[U_],F_=Ne({__name:"Authentication",setup(t){const e=N_(),n=Mt();return(s,r)=>(pe(),Qs(Yn,{name:"authentication",mode:"out-in"},{default:vn(()=>[ae(n).isAuthenticationOpen===!0?(pe(),Ie("div",D_,[L("button",{class:"close-btn",onClick:r[0]||(r[0]=i=>ae(n).toggleAuthentication())},$_),L("button",{class:"authentication-button",onClick:r[1]||(r[1]=i=>ae(e).signIn())}," SignUp or Login with Google ")])):lt("",!0)]),_:1}))}}),B_=Ze(F_,[["__scopeId","data-v-d6525ea9"]]),H_=Ne({__name:"Home",setup(t){return(e,n)=>(pe(),Ie("section",null,[oe(Uh),oe(Kp),oe(np),oe(dp),oe(Pp),oe(Dp),oe(Yp),oe(B_)]))}}),j_=Ze(H_,[["__scopeId","data-v-89d282cb"]]),Xr=vh({history:Gf("/"),routes:[{path:"/",name:"home",component:j_},{path:"/dashboard",name:"dashboard",component:()=>Eh(()=>import("./Dashboard-bUEfA-Ap.js"),__vite__mapDeps([0,1]))}]}),Ui=cf(yh);Ui.use(ff());Ui.use(Xr);Ui.mount(".root-container");export{Yn as T,Ze as _,Ne as a,L as b,Ie as c,Oc as d,Ec as e,tn as f,oe as g,N_ as h,Mt as i,Qs as j,vn as k,lt as l,Uu as m,Xr as n,pe as o,en as p,He as r,Tr as t,ae as u,V_ as w};
