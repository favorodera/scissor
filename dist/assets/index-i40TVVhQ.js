const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-CQN9pLV6.js","assets/Dashboard-m8n4osd4.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ei(t,e){const n=new Set(t.split(","));return s=>n.has(s)}const de={},un=[],Ue=()=>{},Ul=()=>!1,Us=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ti=t=>t.startsWith("onUpdate:"),me=Object.assign,ni=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},$l=Object.prototype.hasOwnProperty,Z=(t,e)=>$l.call(t,e),H=Array.isArray,dn=t=>$s(t)==="[object Map]",wa=t=>$s(t)==="[object Set]",K=t=>typeof t=="function",_e=t=>typeof t=="string",Nt=t=>typeof t=="symbol",fe=t=>t!==null&&typeof t=="object",Ia=t=>(fe(t)||K(t))&&K(t.then)&&K(t.catch),Ea=Object.prototype.toString,$s=t=>Ea.call(t),Fl=t=>$s(t).slice(8,-1),Sa=t=>$s(t)==="[object Object]",si=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pn=ei(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Bl=/-(\w)/g,Xe=Fs(t=>t.replace(Bl,(e,n)=>n?n.toUpperCase():"")),Hl=/\B([A-Z])/g,En=Fs(t=>t.replace(Hl,"-$1").toLowerCase()),Bs=Fs(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Fs(t=>t?`on${Bs(t)}`:""),xt=(t,e)=>!Object.is(t,e),cr=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ca=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},jl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Vl=t=>{const e=_e(t)?Number(t):NaN;return isNaN(e)?t:e};let ji;const Ta=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ri(t){if(H(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?ql(s):ri(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(_e(t)||fe(t))return t}const Wl=/;(?![^(]*\))/g,zl=/:([^]+)/,Kl=/\/\*[^]*?\*\//g;function ql(t){const e={};return t.replace(Kl,"").split(Wl).forEach(n=>{if(n){const s=n.split(zl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Hs(t){let e="";if(_e(t))e=t;else if(H(t))for(let n=0;n<t.length;n++){const s=Hs(t[n]);s&&(e+=s+" ")}else if(fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jl=ei(Gl);function Ra(t){return!!t||t===""}const Aa=t=>!!(t&&t.__v_isRef===!0),Rr=t=>_e(t)?t:t==null?"":H(t)||fe(t)&&(t.toString===Ea||!K(t.toString))?Aa(t)?Rr(t.value):JSON.stringify(t,ka,2):String(t),ka=(t,e)=>Aa(e)?ka(t,e.value):dn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[lr(s,i)+" =>"]=r,n),{})}:wa(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lr(n))}:Nt(e)?lr(e):fe(e)&&!H(e)&&!Sa(e)?String(e):e,lr=(t,e="")=>{var n;return Nt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xe;class Pa{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!e&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xe;try{return xe=this,e()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Oa(t){return new Pa(t)}function Ql(t,e=xe){e&&e.active&&e.effects.push(t)}function xa(){return xe}function Yl(t){xe&&xe.cleanups.push(t)}let Jt;class ii{constructor(e,n,s,r){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ql(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Mt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Xl(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Dt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=At,n=Jt;try{return At=!0,Jt=this,this._runnings++,Vi(this),this.fn()}finally{Wi(this),this._runnings--,Jt=n,At=e}}stop(){this.active&&(Vi(this),Wi(this),this.onStop&&this.onStop(),this.active=!1)}}function Xl(t){return t.value}function Vi(t){t._trackId++,t._depsLength=0}function Wi(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)La(t.deps[e],t);t.deps.length=t._depsLength}}function La(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let At=!0,Ar=0;const Na=[];function Mt(){Na.push(At),At=!1}function Dt(){const t=Na.pop();At=t===void 0?!0:t}function oi(){Ar++}function ai(){for(Ar--;!Ar&&kr.length;)kr.shift()()}function Ma(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&La(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kr=[];function Da(t,e,n){oi();for(const s of t.keys()){let r;s._dirtyLevel<e&&(r??(r=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(r??(r=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&kr.push(s.scheduler)))}ai()}const Ua=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Ss=new WeakMap,Qt=Symbol(""),Pr=Symbol("");function Pe(t,e,n){if(At&&Jt){let s=Ss.get(t);s||Ss.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Ua(()=>s.delete(n))),Ma(Jt,r)}}function lt(t,e,n,s,r,i){const o=Ss.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&H(t)){const a=Number(s);o.forEach((l,d)=>{(d==="length"||!Nt(d)&&d>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":H(t)?si(n)&&c.push(o.get("length")):(c.push(o.get(Qt)),dn(t)&&c.push(o.get(Pr)));break;case"delete":H(t)||(c.push(o.get(Qt)),dn(t)&&c.push(o.get(Pr)));break;case"set":dn(t)&&c.push(o.get(Qt));break}oi();for(const a of c)a&&Da(a,4);ai()}function Zl(t,e){const n=Ss.get(t);return n&&n.get(e)}const eu=ei("__proto__,__v_isRef,__isVue"),$a=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nt)),zi=tu();function tu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let i=0,o=this.length;i<o;i++)Pe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Mt(),oi();const s=ee(this)[e].apply(this,n);return ai(),Dt(),s}}),t}function nu(t){Nt(t)||(t=String(t));const e=ee(this);return Pe(e,"has",t),e.hasOwnProperty(t)}class Fa{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?gu:Va:i?ja:Ha).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=H(e);if(!r){if(o&&Z(zi,n))return Reflect.get(zi,n,s);if(n==="hasOwnProperty")return nu}const c=Reflect.get(e,n,s);return(Nt(n)?$a.has(n):eu(n))||(r||Pe(e,"get",n),i)?c:ve(c)?o&&si(n)?c:c.value:fe(c)?r?za(c):Jn(c):c}}class Ba extends Fa{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const a=$n(i);if(!Cs(s)&&!$n(s)&&(i=ee(i),s=ee(s)),!H(e)&&ve(i)&&!ve(s))return a?!1:(i.value=s,!0)}const o=H(e)&&si(n)?Number(n)<e.length:Z(e,n),c=Reflect.set(e,n,s,r);return e===ee(r)&&(o?xt(s,i)&&lt(e,"set",n,s):lt(e,"add",n,s)),c}deleteProperty(e,n){const s=Z(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&lt(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Nt(n)||!$a.has(n))&&Pe(e,"has",n),s}ownKeys(e){return Pe(e,"iterate",H(e)?"length":Qt),Reflect.ownKeys(e)}}class su extends Fa{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const ru=new Ba,iu=new su,ou=new Ba(!0);const ci=t=>t,js=t=>Reflect.getPrototypeOf(t);function is(t,e,n=!1,s=!1){t=t.__v_raw;const r=ee(t),i=ee(e);n||(xt(e,i)&&Pe(r,"get",e),Pe(r,"get",i));const{has:o}=js(r),c=s?ci:n?fi:Fn;if(o.call(r,e))return c(t.get(e));if(o.call(r,i))return c(t.get(i));t!==r&&t.get(e)}function os(t,e=!1){const n=this.__v_raw,s=ee(n),r=ee(t);return e||(xt(t,r)&&Pe(s,"has",t),Pe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function as(t,e=!1){return t=t.__v_raw,!e&&Pe(ee(t),"iterate",Qt),Reflect.get(t,"size",t)}function Ki(t){t=ee(t);const e=ee(this);return js(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function qi(t,e){e=ee(e);const n=ee(this),{has:s,get:r}=js(n);let i=s.call(n,t);i||(t=ee(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?xt(e,o)&&lt(n,"set",t,e):lt(n,"add",t,e),this}function Gi(t){const e=ee(this),{has:n,get:s}=js(e);let r=n.call(e,t);r||(t=ee(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&lt(e,"delete",t,void 0),i}function Ji(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&lt(t,"clear",void 0,void 0),n}function cs(t,e){return function(s,r){const i=this,o=i.__v_raw,c=ee(o),a=e?ci:t?fi:Fn;return!t&&Pe(c,"iterate",Qt),o.forEach((l,d)=>s.call(r,a(l),a(d),i))}}function ls(t,e,n){return function(...s){const r=this.__v_raw,i=ee(r),o=dn(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=r[t](...s),d=n?ci:e?fi:Fn;return!e&&Pe(i,"iterate",a?Pr:Qt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:c?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function au(){const t={get(i){return is(this,i)},get size(){return as(this)},has:os,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:cs(!1,!1)},e={get(i){return is(this,i,!1,!0)},get size(){return as(this)},has:os,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:cs(!1,!0)},n={get(i){return is(this,i,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:cs(!0,!1)},s={get(i){return is(this,i,!0,!0)},get size(){return as(this,!0)},has(i){return os.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ls(i,!1,!1),n[i]=ls(i,!0,!1),e[i]=ls(i,!1,!0),s[i]=ls(i,!0,!0)}),[t,n,e,s]}const[cu,lu,uu,du]=au();function li(t,e){const n=e?t?du:uu:t?lu:cu;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Z(n,r)&&r in s?n:s,r,i)}const fu={get:li(!1,!1)},hu={get:li(!1,!0)},pu={get:li(!0,!1)};const Ha=new WeakMap,ja=new WeakMap,Va=new WeakMap,gu=new WeakMap;function mu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _u(t){return t.__v_skip||!Object.isExtensible(t)?0:mu(Fl(t))}function Jn(t){return $n(t)?t:ui(t,!1,ru,fu,Ha)}function Wa(t){return ui(t,!1,ou,hu,ja)}function za(t){return ui(t,!0,iu,pu,Va)}function ui(t,e,n,s,r){if(!fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=_u(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return r.set(t,c),c}function Yt(t){return $n(t)?Yt(t.__v_raw):!!(t&&t.__v_isReactive)}function $n(t){return!!(t&&t.__v_isReadonly)}function Cs(t){return!!(t&&t.__v_isShallow)}function Ka(t){return t?!!t.__v_raw:!1}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function di(t){return Object.isExtensible(t)&&Ca(t,"__v_skip",!0),t}const Fn=t=>fe(t)?Jn(t):t,fi=t=>fe(t)?za(t):t;class qa{constructor(e,n,s,r){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new ii(()=>e(this._value),()=>ps(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ee(this);return(!e._cacheable||e.effect.dirty)&&xt(e._value,e._value=e.effect.run())&&ps(e,4),Ga(e),e.effect._dirtyLevel>=2&&ps(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function vu(t,e,n=!1){let s,r;const i=K(t);return i?(s=t,r=Ue):(s=t.get,r=t.set),new qa(s,r,i||!r,n)}function Ga(t){var e;At&&Jt&&(t=ee(t),Ma(Jt,(e=t.dep)!=null?e:t.dep=Ua(()=>t.dep=void 0,t instanceof qa?t:void 0)))}function ps(t,e=4,n,s){t=ee(t);const r=t.dep;r&&Da(r,e)}function ve(t){return!!(t&&t.__v_isRef===!0)}function He(t){return Ja(t,!1)}function bu(t){return Ja(t,!0)}function Ja(t,e){return ve(t)?t:new yu(t,e)}class yu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:Fn(e)}get value(){return Ga(this),this._value}set value(e){const n=this.__v_isShallow||Cs(e)||$n(e);e=n?e:ee(e),xt(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Fn(e),ps(this,4))}}function ae(t){return ve(t)?t.value:t}const wu={get:(t,e,n)=>ae(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ve(r)&&!ve(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Qa(t){return Yt(t)?t:new Proxy(t,wu)}function Iu(t){const e=H(t)?new Array(t.length):{};for(const n in t)e[n]=Su(t,n);return e}class Eu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Zl(ee(this._object),this._key)}}function Su(t,e,n){const s=t[e];return ve(s)?s:new Eu(t,e,n)}/**
* @vue/runtime-core v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function kt(t,e,n,s){try{return s?t(...s):t()}catch(r){Vs(r,e,n)}}function $e(t,e,n,s){if(K(t)){const r=kt(t,e,n,s);return r&&Ia(r)&&r.catch(i=>{Vs(i,e,n)}),r}if(H(t)){const r=[];for(let i=0;i<t.length;i++)r.push($e(t[i],e,n,s));return r}}function Vs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){Mt(),kt(a,null,10,[t,o,c]),Dt();return}}Cu(t,n,r,s)}function Cu(t,e,n,s=!0){console.error(t)}let Bn=!1,Or=!1;const Se=[];let Je=0;const fn=[];let wt=null,zt=0;const Ya=Promise.resolve();let hi=null;function pi(t){const e=hi||Ya;return t?e.then(this?t.bind(this):t):e}function Tu(t){let e=Je+1,n=Se.length;for(;e<n;){const s=e+n>>>1,r=Se[s],i=Hn(r);i<t||i===t&&r.pre?e=s+1:n=s}return e}function gi(t){(!Se.length||!Se.includes(t,Bn&&t.allowRecurse?Je+1:Je))&&(t.id==null?Se.push(t):Se.splice(Tu(t.id),0,t),Xa())}function Xa(){!Bn&&!Or&&(Or=!0,hi=Ya.then(ec))}function Ru(t){const e=Se.indexOf(t);e>Je&&Se.splice(e,1)}function Au(t){H(t)?fn.push(...t):(!wt||!wt.includes(t,t.allowRecurse?zt+1:zt))&&fn.push(t),Xa()}function Qi(t,e,n=Bn?Je+1:0){for(;n<Se.length;n++){const s=Se[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;Se.splice(n,1),n--,s()}}}function Za(t){if(fn.length){const e=[...new Set(fn)].sort((n,s)=>Hn(n)-Hn(s));if(fn.length=0,wt){wt.push(...e);return}for(wt=e,zt=0;zt<wt.length;zt++){const n=wt[zt];n.active!==!1&&n()}wt=null,zt=0}}const Hn=t=>t.id==null?1/0:t.id,ku=(t,e)=>{const n=Hn(t)-Hn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ec(t){Or=!1,Bn=!0,Se.sort(ku);try{for(Je=0;Je<Se.length;Je++){const e=Se[Je];e&&e.active!==!1&&kt(e,null,14)}}finally{Je=0,Se.length=0,Za(),Bn=!1,hi=null,(Se.length||fn.length)&&ec()}}function Pu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||de;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=s[d]||de;p&&(r=n.map(g=>_e(g)?g.trim():g)),f&&(r=n.map(jl))}let c,a=s[c=ar(e)]||s[c=ar(Xe(e))];!a&&i&&(a=s[c=ar(En(e))]),a&&$e(a,t,6,r);const l=s[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,$e(l,t,6,r)}}function tc(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},c=!1;if(!K(t)){const a=l=>{const d=tc(l,e,!0);d&&(c=!0,me(o,d))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(fe(t)&&s.set(t,null),null):(H(i)?i.forEach(a=>o[a]=null):me(o,i),fe(t)&&s.set(t,o),o)}function Ws(t,e){return!t||!Us(e)?!1:(e=e.slice(2).replace(/Once$/,""),Z(t,e[0].toLowerCase()+e.slice(1))||Z(t,En(e))||Z(t,e))}let Ne=null,zs=null;function Ts(t){const e=Ne;return Ne=t,zs=t&&t.type.__scopeId||null,e}function tn(t){zs=t}function nn(){zs=null}function vn(t,e=Ne,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&lo(-1);const i=Ts(e);let o;try{o=t(...r)}finally{Ts(i),s._d&&lo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ur(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:d,props:f,data:p,setupState:g,ctx:S,inheritAttrs:A}=t,B=Ts(t);let F,N;try{if(n.shapeFlag&4){const G=r||s,q=G;F=Ge(l.call(q,G,d,f,g,p,S)),N=c}else{const G=e;F=Ge(G.length>1?G(f,{attrs:c,slots:o,emit:a}):G(f,null)),N=e.props?c:Ou(c)}}catch(G){Ln.length=0,Vs(G,t,1),F=oe(Le)}let O=F;if(N&&A!==!1){const G=Object.keys(N),{shapeFlag:q}=O;G.length&&q&7&&(i&&G.some(ti)&&(N=xu(N,i)),O=Lt(O,N,!1,!0))}return n.dirs&&(O=Lt(O,null,!1,!0),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),F=O,Ts(B),F}const Ou=t=>{let e;for(const n in t)(n==="class"||n==="style"||Us(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!ti(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Lu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?Yi(s,o,l):!!o;if(a&8){const d=e.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(o[p]!==s[p]&&!Ws(l,p))return!0}}}else return(r||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?Yi(s,o,l):!0:!!o;return!1}function Yi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Ws(n,i))return!0}return!1}function Nu({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mu="components";function q_(t,e){return Uu(Mu,t,!0,e)||t}const Du=Symbol.for("v-ndc");function Uu(t,e,n=!0,s=!1){const r=Ne||ye;if(r){const i=r.type;{const c=Ld(i,!1);if(c&&(c===e||c===Xe(e)||c===Bs(Xe(e))))return i}const o=Xi(r[t]||i[t],e)||Xi(r.appContext[t],e);return!o&&s?i:o}}function Xi(t,e){return t&&(t[e]||t[Xe(e)]||t[Bs(Xe(e))])}const $u=t=>t.__isSuspense;function Fu(t,e){e&&e.pendingBranch?H(t)?e.effects.push(...t):e.effects.push(t):Au(t)}function Ks(t,e,n=ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Mt();const c=Qn(n),a=$e(e,n,t,o);return c(),Dt(),a});return s?r.unshift(i):r.push(i),i}}const ft=t=>(e,n=ye)=>{(!Xs||t==="sp")&&Ks(t,(...s)=>e(...s),n)},Bu=ft("bm"),qs=ft("m"),Hu=ft("bu"),ju=ft("u"),nc=ft("bum"),Gs=ft("um"),Vu=ft("sp"),Wu=ft("rtg"),zu=ft("rtc");function Ku(t,e=ye){Ks("ec",t,e)}function Bt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const c=r[o];i&&(c.oldValue=i[o].value);let a=c.dir[s];a&&(Mt(),$e(a,n,8,[t.el,c,t,e]),Dt())}}/*! #__NO_SIDE_EFFECTS__ */function Me(t,e){return K(t)?me({name:t.name},e,{setup:t}):t}const gs=t=>!!t.type.__asyncLoader,xr=t=>t?Cc(t)?bi(t):xr(t.parent):null,On=me(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xr(t.parent),$root:t=>xr(t.root),$emit:t=>t.emit,$options:t=>mi(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,gi(t.update)}),$nextTick:t=>t.n||(t.n=pi.bind(t.proxy)),$watch:t=>hd.bind(t)}),dr=(t,e)=>t!==de&&!t.__isScriptSetup&&Z(t,e),qu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(dr(s,e))return o[e]=1,s[e];if(r!==de&&Z(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Z(l,e))return o[e]=3,i[e];if(n!==de&&Z(n,e))return o[e]=4,n[e];Lr&&(o[e]=0)}}const d=On[e];let f,p;if(d)return e==="$attrs"&&Pe(t.attrs,"get",""),d(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==de&&Z(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,Z(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return dr(r,e)?(r[e]=n,!0):s!==de&&Z(s,e)?(s[e]=n,!0):Z(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let c;return!!n[o]||t!==de&&Z(t,o)||dr(e,o)||(c=i[0])&&Z(c,o)||Z(s,o)||Z(On,o)||Z(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Z(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Zi(t){return H(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Lr=!0;function Gu(t){const e=mi(t),n=t.proxy,s=t.ctx;Lr=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:c,provide:a,inject:l,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:S,activated:A,deactivated:B,beforeDestroy:F,beforeUnmount:N,destroyed:O,unmounted:G,render:q,renderTracked:D,renderTriggered:Q,errorCaptured:W,serverPrefetch:R,expose:V,inheritAttrs:Y,components:x,directives:te,filters:ge}=e;if(l&&Ju(l,s,null),o)for(const ce in o){const ne=o[ce];K(ne)&&(s[ce]=ne.bind(n))}if(r){const ce=r.call(n,n);fe(ce)&&(t.data=Jn(ce))}if(Lr=!0,i)for(const ce in i){const ne=i[ce],tt=K(ne)?ne.bind(n,n):K(ne.get)?ne.get.bind(n,n):Ue,pt=!K(ne)&&K(ne.set)?ne.set.bind(n):Ue,We=Ce({get:tt,set:pt});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>We.value,set:Ae=>We.value=Ae})}if(c)for(const ce in c)sc(c[ce],s,n,ce);if(a){const ce=K(a)?a.call(n):a;Reflect.ownKeys(ce).forEach(ne=>{ms(ne,ce[ne])})}d&&eo(d,t,"c");function X(ce,ne){H(ne)?ne.forEach(tt=>ce(tt.bind(n))):ne&&ce(ne.bind(n))}if(X(Bu,f),X(qs,p),X(Hu,g),X(ju,S),X(pd,A),X(gd,B),X(Ku,W),X(zu,D),X(Wu,Q),X(nc,N),X(Gs,G),X(Vu,R),H(V))if(V.length){const ce=t.exposed||(t.exposed={});V.forEach(ne=>{Object.defineProperty(ce,ne,{get:()=>n[ne],set:tt=>n[ne]=tt})})}else t.exposed||(t.exposed={});q&&t.render===Ue&&(t.render=q),Y!=null&&(t.inheritAttrs=Y),x&&(t.components=x),te&&(t.directives=te)}function Ju(t,e,n=Ue){H(t)&&(t=Nr(t));for(const s in t){const r=t[s];let i;fe(r)?"default"in r?i=Qe(r.from||s,r.default,!0):i=Qe(r.from||s):i=Qe(r),ve(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function eo(t,e,n){$e(H(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function sc(t,e,n,s){const r=s.includes(".")?mc(n,s):()=>n[s];if(_e(t)){const i=e[t];K(i)&&xn(r,i)}else if(K(t))xn(r,t.bind(n));else if(fe(t))if(H(t))t.forEach(i=>sc(i,e,n,s));else{const i=K(t.handler)?t.handler.bind(n):e[t.handler];K(i)&&xn(r,i,t)}}function mi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!r.length&&!n&&!s?a=e:(a={},r.length&&r.forEach(l=>Rs(a,l,o,!0)),Rs(a,e,o)),fe(e)&&i.set(e,a),a}function Rs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Rs(t,i,n,!0),r&&r.forEach(o=>Rs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=Qu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Qu={data:to,props:no,emits:no,methods:An,computed:An,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:An,directives:An,watch:Xu,provide:to,inject:Yu};function to(t,e){return e?t?function(){return me(K(t)?t.call(this,this):t,K(e)?e.call(this,this):e)}:e:t}function Yu(t,e){return An(Nr(t),Nr(e))}function Nr(t){if(H(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function An(t,e){return t?me(Object.create(null),t,e):e}function no(t,e){return t?H(t)&&H(e)?[...new Set([...t,...e])]:me(Object.create(null),Zi(t),Zi(e??{})):e}function Xu(t,e){if(!t)return e;if(!e)return t;const n=me(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function rc(){return{app:null,config:{isNativeTag:Ul,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zu=0;function ed(t,e){return function(s,r=null){K(s)||(s=me({},s)),r!=null&&!fe(r)&&(r=null);const i=rc(),o=new WeakSet;let c=!1;const a=i.app={_uid:Zu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Md,get config(){return i.config},set config(l){},use(l,...d){return o.has(l)||(l&&K(l.install)?(o.add(l),l.install(a,...d)):K(l)&&(o.add(l),l(a,...d))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,d){return d?(i.components[l]=d,a):i.components[l]},directive(l,d){return d?(i.directives[l]=d,a):i.directives[l]},mount(l,d,f){if(!c){const p=oe(s,r);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),d&&e?e(p,l):t(p,l,f),c=!0,a._container=l,l.__vue_app__=a,bi(p.component)}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,d){return i.provides[l]=d,a},runWithContext(l){const d=hn;hn=a;try{return l()}finally{hn=d}}};return a}}let hn=null;function ms(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function Qe(t,e,n=!1){const s=ye||Ne;if(s||hn){const r=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:hn._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&K(e)?e.call(s&&s.proxy):e}}function td(){return!!(ye||Ne||hn)}const ic={},oc=()=>Object.create(ic),ac=t=>Object.getPrototypeOf(t)===ic;function nd(t,e,n,s=!1){const r={},i=oc();t.propsDefaults=Object.create(null),cc(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Wa(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function sd(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,c=ee(r),[a]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(Ws(t.emitsOptions,p))continue;const g=e[p];if(a)if(Z(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const S=Xe(p);r[S]=Mr(a,c,S,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{cc(t,e,r,i)&&(l=!0);let d;for(const f in c)(!e||!Z(e,f)&&((d=En(f))===f||!Z(e,d)))&&(a?n&&(n[f]!==void 0||n[d]!==void 0)&&(r[f]=Mr(a,c,f,void 0,t,!0)):delete r[f]);if(i!==c)for(const f in i)(!e||!Z(e,f))&&(delete i[f],l=!0)}l&&lt(t.attrs,"set","")}function cc(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(Pn(a))continue;const l=e[a];let d;r&&Z(r,d=Xe(a))?!i||!i.includes(d)?n[d]=l:(c||(c={}))[d]=l:Ws(t.emitsOptions,a)||(!(a in s)||l!==s[a])&&(s[a]=l,o=!0)}if(i){const a=ee(n),l=c||de;for(let d=0;d<i.length;d++){const f=i[d];n[f]=Mr(r,a,f,l[f],t,!Z(l,f))}}return o}function Mr(t,e,n,s,r,i){const o=t[n];if(o!=null){const c=Z(o,"default");if(c&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&K(a)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const d=Qn(r);s=l[n]=a.call(null,e),d()}}else s=a}o[0]&&(i&&!c?s=!1:o[1]&&(s===""||s===En(n))&&(s=!0))}return s}function lc(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},c=[];let a=!1;if(!K(t)){const d=f=>{a=!0;const[p,g]=lc(f,e,!0);me(o,p),g&&c.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!a)return fe(t)&&s.set(t,un),un;if(H(i))for(let d=0;d<i.length;d++){const f=Xe(i[d]);so(f)&&(o[f]=de)}else if(i)for(const d in i){const f=Xe(d);if(so(f)){const p=i[d],g=o[f]=H(p)||K(p)?{type:p}:me({},p);if(g){const S=oo(Boolean,g.type),A=oo(String,g.type);g[0]=S>-1,g[1]=A<0||S<A,(S>-1||Z(g,"default"))&&c.push(f)}}}const l=[o,c];return fe(t)&&s.set(t,l),l}function so(t){return t[0]!=="$"&&!Pn(t)}function ro(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function io(t,e){return ro(t)===ro(e)}function oo(t,e){return H(e)?e.findIndex(n=>io(n,t)):K(e)&&io(e,t)?0:-1}const uc=t=>t[0]==="_"||t==="$stable",_i=t=>H(t)?t.map(Ge):[Ge(t)],rd=(t,e,n)=>{if(e._n)return e;const s=vn((...r)=>_i(e(...r)),n);return s._c=!1,s},dc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(uc(r))continue;const i=t[r];if(K(i))e[r]=rd(r,i,s);else if(i!=null){const o=_i(i);e[r]=()=>o}}},fc=(t,e)=>{const n=_i(e);t.slots.default=()=>n},id=(t,e)=>{const n=t.slots=oc();if(t.vnode.shapeFlag&32){const s=e._;s?(me(n,e),Ca(n,"_",s,!0)):dc(e,n)}else e&&fc(t,e)},od=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=de;if(s.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(me(r,e),!n&&c===1&&delete r._):(i=!e.$stable,dc(e,r)),o=e}else e&&(fc(t,e),o={default:1});if(i)for(const c in r)!uc(c)&&o[c]==null&&delete r[c]};function Dr(t,e,n,s,r=!1){if(H(t)){t.forEach((p,g)=>Dr(p,e&&(H(e)?e[g]:e),n,s,r));return}if(gs(s)&&!r)return;const i=s.shapeFlag&4?bi(s.component):s.el,o=r?null:i,{i:c,r:a}=t,l=e&&e.r,d=c.refs===de?c.refs={}:c.refs,f=c.setupState;if(l!=null&&l!==a&&(_e(l)?(d[l]=null,Z(f,l)&&(f[l]=null)):ve(l)&&(l.value=null)),K(a))kt(a,c,12,[o,d]);else{const p=_e(a),g=ve(a);if(p||g){const S=()=>{if(t.f){const A=p?Z(f,a)?f[a]:d[a]:a.value;r?H(A)&&ni(A,i):H(A)?A.includes(i)||A.push(i):p?(d[a]=[i],Z(f,a)&&(f[a]=d[a])):(a.value=[i],t.k&&(d[t.k]=a.value))}else p?(d[a]=o,Z(f,a)&&(f[a]=o)):g&&(a.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,ke(S,n)):S()}}}const ke=Fu;function ad(t){return cd(t)}function cd(t,e){const n=Ta();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=Ue,insertStaticContent:S}=t,A=(u,h,m,b=null,_=null,I=null,C=void 0,w=null,E=!!h.dynamicChildren)=>{if(u===h)return;u&&!qt(u,h)&&(b=v(u),Ae(u,_,I,!0),u=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:y,ref:P,shapeFlag:$}=h;switch(y){case Qs:B(u,h,m,b);break;case Le:F(u,h,m,b);break;case _s:u==null&&N(h,m,b,C);break;case qe:x(u,h,m,b,_,I,C,w,E);break;default:$&1?q(u,h,m,b,_,I,C,w,E):$&6?te(u,h,m,b,_,I,C,w,E):($&64||$&128)&&y.process(u,h,m,b,_,I,C,w,E,M)}P!=null&&_&&Dr(P,u&&u.ref,I,h||u,!h)},B=(u,h,m,b)=>{if(u==null)s(h.el=c(h.children),m,b);else{const _=h.el=u.el;h.children!==u.children&&l(_,h.children)}},F=(u,h,m,b)=>{u==null?s(h.el=a(h.children||""),m,b):h.el=u.el},N=(u,h,m,b)=>{[u.el,u.anchor]=S(u.children,h,m,b,u.el,u.anchor)},O=({el:u,anchor:h},m,b)=>{let _;for(;u&&u!==h;)_=p(u),s(u,m,b),u=_;s(h,m,b)},G=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),r(u),u=m;r(h)},q=(u,h,m,b,_,I,C,w,E)=>{h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),u==null?D(h,m,b,_,I,C,w,E):R(u,h,_,I,C,w,E)},D=(u,h,m,b,_,I,C,w)=>{let E,y;const{props:P,shapeFlag:$,transition:U,dirs:z}=u;if(E=u.el=o(u.type,I,P&&P.is,P),$&8?d(E,u.children):$&16&&W(u.children,E,null,b,_,fr(u,I),C,w),z&&Bt(u,null,b,"created"),Q(E,u,u.scopeId,C,b),P){for(const ue in P)ue!=="value"&&!Pn(ue)&&i(E,ue,null,P[ue],I,u.children,b,_,Ee);"value"in P&&i(E,"value",null,P.value,I),(y=P.onVnodeBeforeMount)&&Ke(y,b,u)}z&&Bt(u,null,b,"beforeMount");const J=ld(_,U);J&&U.beforeEnter(E),s(E,h,m),((y=P&&P.onVnodeMounted)||J||z)&&ke(()=>{y&&Ke(y,b,u),J&&U.enter(E),z&&Bt(u,null,b,"mounted")},_)},Q=(u,h,m,b,_)=>{if(m&&g(u,m),b)for(let I=0;I<b.length;I++)g(u,b[I]);if(_){let I=_.subTree;if(h===I){const C=_.vnode;Q(u,C,C.scopeId,C.slotScopeIds,_.parent)}}},W=(u,h,m,b,_,I,C,w,E=0)=>{for(let y=E;y<u.length;y++){const P=u[y]=w?Et(u[y]):Ge(u[y]);A(null,P,h,m,b,_,I,C,w)}},R=(u,h,m,b,_,I,C)=>{const w=h.el=u.el;let{patchFlag:E,dynamicChildren:y,dirs:P}=h;E|=u.patchFlag&16;const $=u.props||de,U=h.props||de;let z;if(m&&Ht(m,!1),(z=U.onVnodeBeforeUpdate)&&Ke(z,m,h,u),P&&Bt(h,u,m,"beforeUpdate"),m&&Ht(m,!0),y?V(u.dynamicChildren,y,w,m,b,fr(h,_),I):C||ne(u,h,w,null,m,b,fr(h,_),I,!1),E>0){if(E&16)Y(w,h,$,U,m,b,_);else if(E&2&&$.class!==U.class&&i(w,"class",null,U.class,_),E&4&&i(w,"style",$.style,U.style,_),E&8){const J=h.dynamicProps;for(let ue=0;ue<J.length;ue++){const se=J[ue],be=$[se],Fe=U[se];(Fe!==be||se==="value")&&i(w,se,be,Fe,_,u.children,m,b,Ee)}}E&1&&u.children!==h.children&&d(w,h.children)}else!C&&y==null&&Y(w,h,$,U,m,b,_);((z=U.onVnodeUpdated)||P)&&ke(()=>{z&&Ke(z,m,h,u),P&&Bt(h,u,m,"updated")},b)},V=(u,h,m,b,_,I,C)=>{for(let w=0;w<h.length;w++){const E=u[w],y=h[w],P=E.el&&(E.type===qe||!qt(E,y)||E.shapeFlag&70)?f(E.el):m;A(E,y,P,null,b,_,I,C,!0)}},Y=(u,h,m,b,_,I,C)=>{if(m!==b){if(m!==de)for(const w in m)!Pn(w)&&!(w in b)&&i(u,w,m[w],null,C,h.children,_,I,Ee);for(const w in b){if(Pn(w))continue;const E=b[w],y=m[w];E!==y&&w!=="value"&&i(u,w,y,E,C,h.children,_,I,Ee)}"value"in b&&i(u,"value",m.value,b.value,C)}},x=(u,h,m,b,_,I,C,w,E)=>{const y=h.el=u?u.el:c(""),P=h.anchor=u?u.anchor:c("");let{patchFlag:$,dynamicChildren:U,slotScopeIds:z}=h;z&&(w=w?w.concat(z):z),u==null?(s(y,m,b),s(P,m,b),W(h.children||[],m,P,_,I,C,w,E)):$>0&&$&64&&U&&u.dynamicChildren?(V(u.dynamicChildren,U,m,_,I,C,w),(h.key!=null||_&&h===_.subTree)&&hc(u,h,!0)):ne(u,h,m,P,_,I,C,w,E)},te=(u,h,m,b,_,I,C,w,E)=>{h.slotScopeIds=w,u==null?h.shapeFlag&512?_.ctx.activate(h,m,b,C,E):ge(h,m,b,_,I,C,E):we(u,h,E)},ge=(u,h,m,b,_,I,C)=>{const w=u.component=Rd(u,b,_);if(Js(u)&&(w.ctx.renderer=M),kd(w),w.asyncDep){if(_&&_.registerDep(w,X,C),!u.el){const E=w.subTree=oe(Le);F(null,E,h,m)}}else X(w,u,h,m,_,I,C)},we=(u,h,m)=>{const b=h.component=u.component;if(Lu(u,h,m))if(b.asyncDep&&!b.asyncResolved){ce(b,h,m);return}else b.next=h,Ru(b.update),b.effect.dirty=!0,b.update();else h.el=u.el,b.vnode=h},X=(u,h,m,b,_,I,C)=>{const w=()=>{if(u.isMounted){let{next:P,bu:$,u:U,parent:z,vnode:J}=u;{const an=pc(u);if(an){P&&(P.el=J.el,ce(u,P,C)),an.asyncDep.then(()=>{u.isUnmounted||w()});return}}let ue=P,se;Ht(u,!1),P?(P.el=J.el,ce(u,P,C)):P=J,$&&cr($),(se=P.props&&P.props.onVnodeBeforeUpdate)&&Ke(se,z,P,J),Ht(u,!0);const be=ur(u),Fe=u.subTree;u.subTree=be,A(Fe,be,f(Fe.el),v(Fe),u,_,I),P.el=be.el,ue===null&&Nu(u,be.el),U&&ke(U,_),(se=P.props&&P.props.onVnodeUpdated)&&ke(()=>Ke(se,z,P,J),_)}else{let P;const{el:$,props:U}=h,{bm:z,m:J,parent:ue}=u,se=gs(h);if(Ht(u,!1),z&&cr(z),!se&&(P=U&&U.onVnodeBeforeMount)&&Ke(P,ue,h),Ht(u,!0),$&&he){const be=()=>{u.subTree=ur(u),he($,u.subTree,u,_,null)};se?h.type.__asyncLoader().then(()=>!u.isUnmounted&&be()):be()}else{const be=u.subTree=ur(u);A(null,be,m,b,u,_,I),h.el=be.el}if(J&&ke(J,_),!se&&(P=U&&U.onVnodeMounted)){const be=h;ke(()=>Ke(P,ue,be),_)}(h.shapeFlag&256||ue&&gs(ue.vnode)&&ue.vnode.shapeFlag&256)&&u.a&&ke(u.a,_),u.isMounted=!0,h=m=b=null}},E=u.effect=new ii(w,Ue,()=>gi(y),u.scope),y=u.update=()=>{E.dirty&&E.run()};y.id=u.uid,Ht(u,!0),y()},ce=(u,h,m)=>{h.component=u;const b=u.vnode.props;u.vnode=h,u.next=null,sd(u,h.props,b,m),od(u,h.children,m),Mt(),Qi(u),Dt()},ne=(u,h,m,b,_,I,C,w,E=!1)=>{const y=u&&u.children,P=u?u.shapeFlag:0,$=h.children,{patchFlag:U,shapeFlag:z}=h;if(U>0){if(U&128){pt(y,$,m,b,_,I,C,w,E);return}else if(U&256){tt(y,$,m,b,_,I,C,w,E);return}}z&8?(P&16&&Ee(y,_,I),$!==y&&d(m,$)):P&16?z&16?pt(y,$,m,b,_,I,C,w,E):Ee(y,_,I,!0):(P&8&&d(m,""),z&16&&W($,m,b,_,I,C,w,E))},tt=(u,h,m,b,_,I,C,w,E)=>{u=u||un,h=h||un;const y=u.length,P=h.length,$=Math.min(y,P);let U;for(U=0;U<$;U++){const z=h[U]=E?Et(h[U]):Ge(h[U]);A(u[U],z,m,null,_,I,C,w,E)}y>P?Ee(u,_,I,!0,!1,$):W(h,m,b,_,I,C,w,E,$)},pt=(u,h,m,b,_,I,C,w,E)=>{let y=0;const P=h.length;let $=u.length-1,U=P-1;for(;y<=$&&y<=U;){const z=u[y],J=h[y]=E?Et(h[y]):Ge(h[y]);if(qt(z,J))A(z,J,m,null,_,I,C,w,E);else break;y++}for(;y<=$&&y<=U;){const z=u[$],J=h[U]=E?Et(h[U]):Ge(h[U]);if(qt(z,J))A(z,J,m,null,_,I,C,w,E);else break;$--,U--}if(y>$){if(y<=U){const z=U+1,J=z<P?h[z].el:b;for(;y<=U;)A(null,h[y]=E?Et(h[y]):Ge(h[y]),m,J,_,I,C,w,E),y++}}else if(y>U)for(;y<=$;)Ae(u[y],_,I,!0),y++;else{const z=y,J=y,ue=new Map;for(y=J;y<=U;y++){const Oe=h[y]=E?Et(h[y]):Ge(h[y]);Oe.key!=null&&ue.set(Oe.key,y)}let se,be=0;const Fe=U-J+1;let an=!1,Fi=0;const Cn=new Array(Fe);for(y=0;y<Fe;y++)Cn[y]=0;for(y=z;y<=$;y++){const Oe=u[y];if(be>=Fe){Ae(Oe,_,I,!0);continue}let ze;if(Oe.key!=null)ze=ue.get(Oe.key);else for(se=J;se<=U;se++)if(Cn[se-J]===0&&qt(Oe,h[se])){ze=se;break}ze===void 0?Ae(Oe,_,I,!0):(Cn[ze-J]=y+1,ze>=Fi?Fi=ze:an=!0,A(Oe,h[ze],m,null,_,I,C,w,E),be++)}const Bi=an?ud(Cn):un;for(se=Bi.length-1,y=Fe-1;y>=0;y--){const Oe=J+y,ze=h[Oe],Hi=Oe+1<P?h[Oe+1].el:b;Cn[y]===0?A(null,ze,m,Hi,_,I,C,w,E):an&&(se<0||y!==Bi[se]?We(ze,m,Hi,2):se--)}}},We=(u,h,m,b,_=null)=>{const{el:I,type:C,transition:w,children:E,shapeFlag:y}=u;if(y&6){We(u.component.subTree,h,m,b);return}if(y&128){u.suspense.move(h,m,b);return}if(y&64){C.move(u,h,m,M);return}if(C===qe){s(I,h,m);for(let $=0;$<E.length;$++)We(E[$],h,m,b);s(u.anchor,h,m);return}if(C===_s){O(u,h,m);return}if(b!==2&&y&1&&w)if(b===0)w.beforeEnter(I),s(I,h,m),ke(()=>w.enter(I),_);else{const{leave:$,delayLeave:U,afterLeave:z}=w,J=()=>s(I,h,m),ue=()=>{$(I,()=>{J(),z&&z()})};U?U(I,J,ue):ue()}else s(I,h,m)},Ae=(u,h,m,b=!1,_=!1)=>{const{type:I,props:C,ref:w,children:E,dynamicChildren:y,shapeFlag:P,patchFlag:$,dirs:U,memoIndex:z}=u;if($===-2&&(_=!1),w!=null&&Dr(w,null,m,u,!0),z!=null&&(h.renderCache[z]=void 0),P&256){h.ctx.deactivate(u);return}const J=P&1&&U,ue=!gs(u);let se;if(ue&&(se=C&&C.onVnodeBeforeUnmount)&&Ke(se,h,u),P&6)rs(u.component,m,b);else{if(P&128){u.suspense.unmount(m,b);return}J&&Bt(u,null,h,"beforeUnmount"),P&64?u.type.remove(u,h,m,M,b):y&&(I!==qe||$>0&&$&64)?Ee(y,h,m,!1,!0):(I===qe&&$&384||!_&&P&16)&&Ee(E,h,m),b&&rn(u)}(ue&&(se=C&&C.onVnodeUnmounted)||J)&&ke(()=>{se&&Ke(se,h,u),J&&Bt(u,null,h,"unmounted")},m)},rn=u=>{const{type:h,el:m,anchor:b,transition:_}=u;if(h===qe){on(m,b);return}if(h===_s){G(u);return}const I=()=>{r(m),_&&!_.persisted&&_.afterLeave&&_.afterLeave()};if(u.shapeFlag&1&&_&&!_.persisted){const{leave:C,delayLeave:w}=_,E=()=>C(m,I);w?w(u.el,I,E):E()}else I()},on=(u,h)=>{let m;for(;u!==h;)m=p(u),r(u),u=m;r(h)},rs=(u,h,m)=>{const{bum:b,scope:_,update:I,subTree:C,um:w,m:E,a:y}=u;ao(E),ao(y),b&&cr(b),_.stop(),I&&(I.active=!1,Ae(C,u,h,m)),w&&ke(w,h),ke(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ee=(u,h,m,b=!1,_=!1,I=0)=>{for(let C=I;C<u.length;C++)Ae(u[C],h,m,b,_)},v=u=>u.shapeFlag&6?v(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let k=!1;const T=(u,h,m)=>{u==null?h._vnode&&Ae(h._vnode,null,null,!0):A(h._vnode||null,u,h,null,null,null,m),k||(k=!0,Qi(),Za(),k=!1),h._vnode=u},M={p:A,um:Ae,m:We,r:rn,mt:ge,mc:W,pc:ne,pbc:V,n:v,o:t};let re,he;return{render:T,hydrate:re,createApp:ed(T,re)}}function fr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ht({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ld(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hc(t,e,n=!1){const s=t.children,r=e.children;if(H(s)&&H(r))for(let i=0;i<s.length;i++){const o=s[i];let c=r[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=r[i]=Et(r[i]),c.el=o.el),!n&&c.patchFlag!==-2&&hc(o,c)),c.type===Qs&&(c.el=o.el)}}function ud(t){const e=t.slice(),n=[0];let s,r,i,o,c;const a=t.length;for(s=0;s<a;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function pc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:pc(e)}function ao(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const dd=Symbol.for("v-scx"),fd=()=>Qe(dd),us={};function xn(t,e,n){return gc(t,e,n)}function gc(t,e,{immediate:n,deep:s,flush:r,once:i,onTrack:o,onTrigger:c}=de){if(e&&i){const D=e;e=(...Q)=>{D(...Q),q()}}const a=ye,l=D=>s===!0?D:Kt(D,s===!1?1:void 0);let d,f=!1,p=!1;if(ve(t)?(d=()=>t.value,f=Cs(t)):Yt(t)?(d=()=>l(t),f=!0):H(t)?(p=!0,f=t.some(D=>Yt(D)||Cs(D)),d=()=>t.map(D=>{if(ve(D))return D.value;if(Yt(D))return l(D);if(K(D))return kt(D,a,2)})):K(t)?e?d=()=>kt(t,a,2):d=()=>(g&&g(),$e(t,a,3,[S])):d=Ue,e&&s){const D=d;d=()=>Kt(D())}let g,S=D=>{g=O.onStop=()=>{kt(D,a,4),g=O.onStop=void 0}},A;if(Xs)if(S=Ue,e?n&&$e(e,a,3,[d(),p?[]:void 0,S]):d(),r==="sync"){const D=fd();A=D.__watcherHandles||(D.__watcherHandles=[])}else return Ue;let B=p?new Array(t.length).fill(us):us;const F=()=>{if(!(!O.active||!O.dirty))if(e){const D=O.run();(s||f||(p?D.some((Q,W)=>xt(Q,B[W])):xt(D,B)))&&(g&&g(),$e(e,a,3,[D,B===us?void 0:p&&B[0]===us?[]:B,S]),B=D)}else O.run()};F.allowRecurse=!!e;let N;r==="sync"?N=F:r==="post"?N=()=>ke(F,a&&a.suspense):(F.pre=!0,a&&(F.id=a.uid),N=()=>gi(F));const O=new ii(d,Ue,N),G=xa(),q=()=>{O.stop(),G&&ni(G.effects,O)};return e?n?F():B=O.run():r==="post"?ke(O.run.bind(O),a&&a.suspense):O.run(),A&&A.push(q),q}function hd(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?mc(s,t):()=>s[t]:t.bind(s,s);let i;K(e)?i=e:(i=e.handler,n=e);const o=Qn(this),c=gc(r,i.bind(s),n);return o(),c}function mc(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Kt(t,e=1/0,n){if(e<=0||!fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ve(t))Kt(t.value,e,n);else if(H(t))for(let s=0;s<t.length;s++)Kt(t[s],e,n);else if(wa(t)||dn(t))t.forEach(s=>{Kt(s,e,n)});else if(Sa(t)){for(const s in t)Kt(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Kt(t[s],e,n)}return t}const Js=t=>t.type.__isKeepAlive;function pd(t,e){_c(t,"a",e)}function gd(t,e){_c(t,"da",e)}function _c(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ks(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&md(s,e,n,r),r=r.parent}}function md(t,e,n,s){const r=Ks(e,t,s,!0);Gs(()=>{ni(s[e],r)},n)}const It=Symbol("_leaveCb"),ds=Symbol("_enterCb");function _d(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qs(()=>{t.isMounted=!0}),nc(()=>{t.isUnmounting=!0}),t}const De=[Function,Array],vc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},bc=t=>{const e=t.subTree;return e.component?bc(e.component):e},vd={name:"BaseTransition",props:vc,setup(t,{slots:e}){const n=Ad(),s=_d();return()=>{const r=e.default&&wc(e.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){for(const p of r)if(p.type!==Le){i=p;break}}const o=ee(t),{mode:c}=o;if(s.isLeaving)return hr(i);const a=co(i);if(!a)return hr(i);let l=Ur(a,o,s,n,p=>l=p);As(a,l);const d=n.subTree,f=d&&co(d);if(f&&f.type!==Le&&!qt(a,f)&&bc(n).type!==Le){const p=Ur(f,o,s,n);if(As(f,p),c==="out-in"&&a.type!==Le)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},hr(i);c==="in-out"&&a.type!==Le&&(p.delayLeave=(g,S,A)=>{const B=yc(s,f);B[String(f.key)]=f,g[It]=()=>{S(),g[It]=void 0,delete l.delayedLeave},l.delayedLeave=A})}return i}}},bd=vd;function yc(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ur(t,e,n,s,r){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:d,onEnterCancelled:f,onBeforeLeave:p,onLeave:g,onAfterLeave:S,onLeaveCancelled:A,onBeforeAppear:B,onAppear:F,onAfterAppear:N,onAppearCancelled:O}=e,G=String(t.key),q=yc(n,t),D=(R,V)=>{R&&$e(R,s,9,V)},Q=(R,V)=>{const Y=V[1];D(R,V),H(R)?R.every(x=>x.length<=1)&&Y():R.length<=1&&Y()},W={mode:o,persisted:c,beforeEnter(R){let V=a;if(!n.isMounted)if(i)V=B||a;else return;R[It]&&R[It](!0);const Y=q[G];Y&&qt(t,Y)&&Y.el[It]&&Y.el[It](),D(V,[R])},enter(R){let V=l,Y=d,x=f;if(!n.isMounted)if(i)V=F||l,Y=N||d,x=O||f;else return;let te=!1;const ge=R[ds]=we=>{te||(te=!0,we?D(x,[R]):D(Y,[R]),W.delayedLeave&&W.delayedLeave(),R[ds]=void 0)};V?Q(V,[R,ge]):ge()},leave(R,V){const Y=String(t.key);if(R[ds]&&R[ds](!0),n.isUnmounting)return V();D(p,[R]);let x=!1;const te=R[It]=ge=>{x||(x=!0,V(),ge?D(A,[R]):D(S,[R]),R[It]=void 0,q[Y]===t&&delete q[Y])};q[Y]=t,g?Q(g,[R,te]):te()},clone(R){const V=Ur(R,e,n,s,r);return r&&r(V),V}};return W}function hr(t){if(Js(t))return t=Lt(t),t.children=null,t}function co(t){if(!Js(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&K(n.default))return n.default()}}function As(t,e){t.shapeFlag&6&&t.component?As(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wc(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===qe?(o.patchFlag&128&&r++,s=s.concat(wc(o.children,e,c))):(e||o.type!==Le)&&s.push(c!=null?Lt(o,{key:c}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}const yd=t=>t.__isTeleport,qe=Symbol.for("v-fgt"),Qs=Symbol.for("v-txt"),Le=Symbol.for("v-cmt"),_s=Symbol.for("v-stc"),Ln=[];let Be=null;function pe(t=!1){Ln.push(Be=t?null:[])}function wd(){Ln.pop(),Be=Ln[Ln.length-1]||null}let jn=1;function lo(t){jn+=t}function Ic(t){return t.dynamicChildren=jn>0?Be||un:null,wd(),jn>0&&Be&&Be.push(t),t}function Ie(t,e,n,s,r,i){return Ic(L(t,e,n,s,r,i,!0))}function Ys(t,e,n,s,r){return Ic(oe(t,e,n,s,r,!0))}function $r(t){return t?t.__v_isVNode===!0:!1}function qt(t,e){return t.type===e.type&&t.key===e.key}const Ec=({key:t})=>t??null,vs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?_e(t)||ve(t)||K(t)?{i:Ne,r:t,k:e,f:!!n}:t:null);function L(t,e=null,n=null,s=0,r=null,i=t===qe?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ec(e),ref:e&&vs(e),scopeId:zs,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ne};return c?(vi(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=_e(n)?8:16),jn>0&&!o&&Be&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Be.push(a),a}const oe=Id;function Id(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Du)&&(t=Le),$r(t)){const c=Lt(t,e,!0);return n&&vi(c,n),jn>0&&!i&&Be&&(c.shapeFlag&6?Be[Be.indexOf(t)]=c:Be.push(c)),c.patchFlag=-2,c}if(Nd(t)&&(t=t.__vccOpts),e){e=Ed(e);let{class:c,style:a}=e;c&&!_e(c)&&(e.class=Hs(c)),fe(a)&&(Ka(a)&&!H(a)&&(a=me({},a)),e.style=ri(a))}const o=_e(t)?1:$u(t)?128:yd(t)?64:fe(t)?4:K(t)?2:0;return L(t,e,n,s,r,o,i,!0)}function Ed(t){return t?Ka(t)||ac(t)?me({},t):t:null}function Lt(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:c,transition:a}=t,l=e?Sd(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Ec(l),ref:e&&e.ref?n&&i?H(i)?i.concat(vs(e)):[i,vs(e)]:vs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:a,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Lt(t.ssContent),ssFallback:t.ssFallback&&Lt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return a&&s&&As(d,a.clone(d)),d}function kn(t=" ",e=0){return oe(Qs,null,t,e)}function Sc(t,e){const n=oe(_s,null,t);return n.staticCount=e,n}function ut(t="",e=!1){return e?(pe(),Ys(Le,null,t)):oe(Le,null,t)}function Ge(t){return t==null||typeof t=="boolean"?oe(Le):H(t)?oe(qe,null,t.slice()):typeof t=="object"?Et(t):oe(Qs,null,String(t))}function Et(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Lt(t)}function vi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(H(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),vi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!ac(e)?e._ctx=Ne:r===3&&Ne&&(Ne.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else K(e)?(e={default:e,_ctx:Ne},n=32):(e=String(e),s&64?(n=16,e=[kn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Sd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Hs([e.class,s.class]));else if(r==="style")e.style=ri([e.style,s.style]);else if(Us(r)){const i=e[r],o=s[r];o&&i!==o&&!(H(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ke(t,e,n,s=null){$e(t,e,7,[n,s])}const Cd=rc();let Td=0;function Rd(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||Cd,i={uid:Td++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lc(s,r),emitsOptions:tc(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Pu.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const Ad=()=>ye||Ne;let ks,Fr;{const t=Ta(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ks=e("__VUE_INSTANCE_SETTERS__",n=>ye=n),Fr=e("__VUE_SSR_SETTERS__",n=>Xs=n)}const Qn=t=>{const e=ye;return ks(t),t.scope.on(),()=>{t.scope.off(),ks(e)}},uo=()=>{ye&&ye.scope.off(),ks(null)};function Cc(t){return t.vnode.shapeFlag&4}let Xs=!1;function kd(t,e=!1){e&&Fr(e);const{props:n,children:s}=t.vnode,r=Cc(t);nd(t,n,r,e),id(t,s);const i=r?Pd(t,e):void 0;return e&&Fr(!1),i}function Pd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,qu);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?xd(t):null,i=Qn(t);Mt();const o=kt(s,t,0,[t.props,r]);if(Dt(),i(),Ia(o)){if(o.then(uo,uo),e)return o.then(c=>{fo(t,c,e)}).catch(c=>{Vs(c,t,0)});t.asyncDep=o}else fo(t,o,e)}else Tc(t,e)}function fo(t,e,n){K(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:fe(e)&&(t.setupState=Qa(e)),Tc(t,n)}let ho;function Tc(t,e,n){const s=t.type;if(!t.render){if(!e&&ho&&!s.render){const r=s.template||mi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=s,l=me(me({isCustomElement:i,delimiters:c},o),a);s.render=ho(r,l)}}t.render=s.render||Ue}{const r=Qn(t);Mt();try{Gu(t)}finally{Dt(),r()}}}const Od={get(t,e){return Pe(t,"get",""),t[e]}};function xd(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Od),slots:t.slots,emit:t.emit,expose:e}}function bi(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qa(di(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}})):t.proxy}function Ld(t,e=!0){return K(t)?t.displayName||t.name:t.name||e&&t.__name}function Nd(t){return K(t)&&"__vccOpts"in t}const Ce=(t,e)=>vu(t,e,Xs);function yi(t,e,n){const s=arguments.length;return s===2?fe(e)&&!H(e)?$r(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&$r(n)&&(n=[n]),oe(t,e,n))}const Md="3.4.31";/**
* @vue/runtime-dom v3.4.31
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Dd="http://www.w3.org/2000/svg",Ud="http://www.w3.org/1998/Math/MathML",st=typeof document<"u"?document:null,po=st&&st.createElement("template"),$d={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?st.createElementNS(Dd,t):e==="mathml"?st.createElementNS(Ud,t):n?st.createElement(t,{is:n}):st.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>st.createTextNode(t),createComment:t=>st.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>st.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{po.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const c=po.content;if(s==="svg"||s==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mt="transition",Tn="animation",Vn=Symbol("_vtc"),Yn=(t,{slots:e})=>yi(bd,Fd(t),e);Yn.displayName="Transition";const Rc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Yn.props=me({},vc,Rc);const jt=(t,e=[])=>{H(t)?t.forEach(n=>n(...e)):t&&t(...e)},go=t=>t?H(t)?t.some(e=>e.length>1):t.length>1:!1;function Fd(t){const e={};for(const x in t)x in Rc||(e[x]=t[x]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:a=i,appearActiveClass:l=o,appearToClass:d=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,S=Bd(r),A=S&&S[0],B=S&&S[1],{onBeforeEnter:F,onEnter:N,onEnterCancelled:O,onLeave:G,onLeaveCancelled:q,onBeforeAppear:D=F,onAppear:Q=N,onAppearCancelled:W=O}=e,R=(x,te,ge)=>{Vt(x,te?d:c),Vt(x,te?l:o),ge&&ge()},V=(x,te)=>{x._isLeaving=!1,Vt(x,f),Vt(x,g),Vt(x,p),te&&te()},Y=x=>(te,ge)=>{const we=x?Q:N,X=()=>R(te,x,ge);jt(we,[te,X]),mo(()=>{Vt(te,x?a:i),_t(te,x?d:c),go(we)||_o(te,s,A,X)})};return me(e,{onBeforeEnter(x){jt(F,[x]),_t(x,i),_t(x,o)},onBeforeAppear(x){jt(D,[x]),_t(x,a),_t(x,l)},onEnter:Y(!1),onAppear:Y(!0),onLeave(x,te){x._isLeaving=!0;const ge=()=>V(x,te);_t(x,f),_t(x,p),Vd(),mo(()=>{x._isLeaving&&(Vt(x,f),_t(x,g),go(G)||_o(x,s,B,ge))}),jt(G,[x,ge])},onEnterCancelled(x){R(x,!1),jt(O,[x])},onAppearCancelled(x){R(x,!0),jt(W,[x])},onLeaveCancelled(x){V(x),jt(q,[x])}})}function Bd(t){if(t==null)return null;if(fe(t))return[pr(t.enter),pr(t.leave)];{const e=pr(t);return[e,e]}}function pr(t){return Vl(t)}function _t(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Vn]||(t[Vn]=new Set)).add(e)}function Vt(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Vn];n&&(n.delete(e),n.size||(t[Vn]=void 0))}function mo(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Hd=0;function _o(t,e,n,s){const r=t._endId=++Hd,i=()=>{r===t._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:c,propCount:a}=jd(t,e);if(!o)return s();const l=o+"end";let d=0;const f=()=>{t.removeEventListener(l,p),i()},p=g=>{g.target===t&&++d>=a&&f()};setTimeout(()=>{d<a&&f()},c+1),t.addEventListener(l,p)}function jd(t,e){const n=window.getComputedStyle(t),s=S=>(n[S]||"").split(", "),r=s(`${mt}Delay`),i=s(`${mt}Duration`),o=vo(r,i),c=s(`${Tn}Delay`),a=s(`${Tn}Duration`),l=vo(c,a);let d=null,f=0,p=0;e===mt?o>0&&(d=mt,f=o,p=i.length):e===Tn?l>0&&(d=Tn,f=l,p=a.length):(f=Math.max(o,l),d=f>0?o>l?mt:Tn:null,p=d?d===mt?i.length:a.length:0);const g=d===mt&&/\b(transform|all)(,|$)/.test(s(`${mt}Property`).toString());return{type:d,timeout:f,propCount:p,hasTransform:g}}function vo(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>bo(n)+bo(t[s])))}function bo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vd(){return document.body.offsetHeight}function Wd(t,e,n){const s=t[Vn];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const yo=Symbol("_vod"),zd=Symbol("_vsh"),Kd=Symbol(""),qd=/(^|;)\s*display\s*:/;function Gd(t,e,n){const s=t.style,r=_e(n);let i=!1;if(n&&!r){if(e)if(_e(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&bs(s,c,"")}else for(const o in e)n[o]==null&&bs(s,o,"");for(const o in n)o==="display"&&(i=!0),bs(s,o,n[o])}else if(r){if(e!==n){const o=s[Kd];o&&(n+=";"+o),s.cssText=n,i=qd.test(n)}}else e&&t.removeAttribute("style");yo in t&&(t[yo]=i?s.display:"",t[zd]&&(s.display="none"))}const wo=/\s*!important$/;function bs(t,e,n){if(H(n))n.forEach(s=>bs(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Jd(t,e);wo.test(n)?t.setProperty(En(s),n.replace(wo,""),"important"):t[s]=n}}const Io=["Webkit","Moz","ms"],gr={};function Jd(t,e){const n=gr[e];if(n)return n;let s=Xe(e);if(s!=="filter"&&s in t)return gr[e]=s;s=Bs(s);for(let r=0;r<Io.length;r++){const i=Io[r]+s;if(i in t)return gr[e]=i}return e}const Eo="http://www.w3.org/1999/xlink";function So(t,e,n,s,r,i=Jl(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Eo,e.slice(6,e.length)):t.setAttributeNS(Eo,e,n):n==null||i&&!Ra(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Nt(n)?String(n):n)}function Qd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,d=n==null?"":String(n);(l!==d||!("_value"in t))&&(t.value=d),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ra(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function Yd(t,e,n,s){t.addEventListener(e,n,s)}function Xd(t,e,n,s){t.removeEventListener(e,n,s)}const Co=Symbol("_vei");function Zd(t,e,n,s,r=null){const i=t[Co]||(t[Co]={}),o=i[e];if(s&&o)o.value=s;else{const[c,a]=ef(e);if(s){const l=i[e]=sf(s,r);Yd(t,c,l,a)}else o&&(Xd(t,c,o,a),i[e]=void 0)}}const To=/(?:Once|Passive|Capture)$/;function ef(t){let e;if(To.test(t)){e={};let s;for(;s=t.match(To);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let mr=0;const tf=Promise.resolve(),nf=()=>mr||(tf.then(()=>mr=0),mr=Date.now());function sf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;$e(rf(s,n.value),e,5,[s])};return n.value=t,n.attached=nf(),n}function rf(t,e){if(H(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Ro=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,of=(t,e,n,s,r,i,o,c,a)=>{const l=r==="svg";e==="class"?Wd(t,s,l):e==="style"?Gd(t,n,s):Us(e)?ti(e)||Zd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):af(t,e,s,l))?(Qd(t,e,s,i,o,c,a),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&So(t,e,s,l,o,e!=="value")):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),So(t,e,s,l))};function af(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ro(e)&&K(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ro(e)&&_e(n)?!1:e in t}const cf=["ctrl","shift","alt","meta"],lf={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>cf.some(n=>t[`${n}Key`]&&!e.includes(n))},G_=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const c=lf[e[o]];if(c&&c(r,e))return}return t(r,...i)})},uf=me({patchProp:of},$d);let Ao;function df(){return Ao||(Ao=ad(uf))}const ff=(...t)=>{const e=df().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=pf(s);if(!r)return;const i=e._component;!K(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,hf(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function hf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function pf(t){return _e(t)?document.querySelector(t):t}var gf=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ac;const Zs=t=>Ac=t,kc=Symbol();function Br(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Nn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nn||(Nn={}));function mf(){const t=Oa(!0),e=t.run(()=>He({}));let n=[],s=[];const r=di({install(i){Zs(r),r._a=i,i.provide(kc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!gf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Pc=()=>{};function ko(t,e,n,s=Pc){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&xa()&&Yl(r),r}function cn(t,...e){t.slice().forEach(n=>{n(...e)})}const _f=t=>t();function Hr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Br(r)&&Br(s)&&t.hasOwnProperty(n)&&!ve(s)&&!Yt(s)?t[n]=Hr(r,s):t[n]=s}return t}const vf=Symbol();function bf(t){return!Br(t)||!t.hasOwnProperty(vf)}const{assign:yt}=Object;function yf(t){return!!(ve(t)&&t.effect)}function wf(t,e,n,s){const{state:r,actions:i,getters:o}=e,c=n.state.value[t];let a;function l(){c||(n.state.value[t]=r?r():{});const d=Iu(n.state.value[t]);return yt(d,i,Object.keys(o||{}).reduce((f,p)=>(f[p]=di(Ce(()=>{Zs(n);const g=n._s.get(t);return o[p].call(g,g)})),f),{}))}return a=Oc(t,l,e,n,s,!0),a}function Oc(t,e,n={},s,r,i){let o;const c=yt({actions:{}},n),a={deep:!0};let l,d,f=[],p=[],g;const S=s.state.value[t];!i&&!S&&(s.state.value[t]={}),He({});let A;function B(W){let R;l=d=!1,typeof W=="function"?(W(s.state.value[t]),R={type:Nn.patchFunction,storeId:t,events:g}):(Hr(s.state.value[t],W),R={type:Nn.patchObject,payload:W,storeId:t,events:g});const V=A=Symbol();pi().then(()=>{A===V&&(l=!0)}),d=!0,cn(f,R,s.state.value[t])}const F=i?function(){const{state:R}=n,V=R?R():{};this.$patch(Y=>{yt(Y,V)})}:Pc;function N(){o.stop(),f=[],p=[],s._s.delete(t)}function O(W,R){return function(){Zs(s);const V=Array.from(arguments),Y=[],x=[];function te(X){Y.push(X)}function ge(X){x.push(X)}cn(p,{args:V,name:W,store:q,after:te,onError:ge});let we;try{we=R.apply(this&&this.$id===t?this:q,V)}catch(X){throw cn(x,X),X}return we instanceof Promise?we.then(X=>(cn(Y,X),X)).catch(X=>(cn(x,X),Promise.reject(X))):(cn(Y,we),we)}}const G={_p:s,$id:t,$onAction:ko.bind(null,p),$patch:B,$reset:F,$subscribe(W,R={}){const V=ko(f,W,R.detached,()=>Y()),Y=o.run(()=>xn(()=>s.state.value[t],x=>{(R.flush==="sync"?d:l)&&W({storeId:t,type:Nn.direct,events:g},x)},yt({},a,R)));return V},$dispose:N},q=Jn(G);s._s.set(t,q);const Q=(s._a&&s._a.runWithContext||_f)(()=>s._e.run(()=>(o=Oa()).run(e)));for(const W in Q){const R=Q[W];if(ve(R)&&!yf(R)||Yt(R))i||(S&&bf(R)&&(ve(R)?R.value=S[W]:Hr(R,S[W])),s.state.value[t][W]=R);else if(typeof R=="function"){const V=O(W,R);Q[W]=V,c.actions[W]=R}}return yt(q,Q),yt(ee(q),Q),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:W=>{B(R=>{yt(R,W)})}}),s._p.forEach(W=>{yt(q,o.run(()=>W({store:q,app:s._a,pinia:s,options:c})))}),S&&i&&n.hydrate&&n.hydrate(q.$state,S),l=!0,d=!0,q}function xc(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(c,a){const l=td();return c=c||(l?Qe(kc,null):null),c&&Zs(c),c=Ac,c._s.has(s)||(i?Oc(s,e,r,c):wf(s,r,c)),c._s.get(s)}return o.$id=s,o}/*!
  * vue-router v4.4.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof document<"u";function If(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ie=Object.assign;function _r(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ve(r)?r.map(t):t(r)}return n}const Mn=()=>{},Ve=Array.isArray,Lc=/#/g,Ef=/&/g,Sf=/\//g,Cf=/=/g,Tf=/\?/g,Nc=/\+/g,Rf=/%5B/g,Af=/%5D/g,Mc=/%5E/g,kf=/%60/g,Dc=/%7B/g,Pf=/%7C/g,Uc=/%7D/g,Of=/%20/g;function wi(t){return encodeURI(""+t).replace(Pf,"|").replace(Rf,"[").replace(Af,"]")}function xf(t){return wi(t).replace(Dc,"{").replace(Uc,"}").replace(Mc,"^")}function jr(t){return wi(t).replace(Nc,"%2B").replace(Of,"+").replace(Lc,"%23").replace(Ef,"%26").replace(kf,"`").replace(Dc,"{").replace(Uc,"}").replace(Mc,"^")}function Lf(t){return jr(t).replace(Cf,"%3D")}function Nf(t){return wi(t).replace(Lc,"%23").replace(Tf,"%3F")}function Mf(t){return t==null?"":Nf(t).replace(Sf,"%2F")}function Wn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Df=/\/$/,Uf=t=>t.replace(Df,"");function vr(t,e,n="/"){let s,r={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(s=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),r=t(i)),c>-1&&(s=s||e.slice(0,c),o=e.slice(c,e.length)),s=Hf(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Wn(o)}}function $f(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Po(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ff(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&$c(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $c(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bf(t[n],e[n]))return!1;return!0}function Bf(t,e){return Ve(t)?Oo(t,e):Ve(e)?Oo(e,t):t===e}function Oo(t,e){return Ve(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hf(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,c;for(o=0;o<s.length;o++)if(c=s[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Dn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Dn||(Dn={}));function jf(t){if(!t)if(ln){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Uf(t)}const Vf=/^[^#]+#/;function Wf(t,e){return t.replace(Vf,"#")+e}function zf(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const er=()=>({left:window.scrollX,top:window.scrollY});function Kf(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zf(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function xo(t,e){return(history.state?history.state.position-e:-1)+t}const Vr=new Map;function qf(t,e){Vr.set(t,e)}function Gf(t){const e=Vr.get(t);return Vr.delete(t),e}let Jf=()=>location.protocol+"//"+location.host;function Fc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let c=r.includes(t.slice(i))?t.slice(i).length:1,a=r.slice(c);return a[0]!=="/"&&(a="/"+a),Po(a,"")}return Po(n,t)+s+r}function Qf(t,e,n,s){let r=[],i=[],o=null;const c=({state:p})=>{const g=Fc(t,location),S=n.value,A=e.value;let B=0;if(p){if(n.value=g,e.value=p,o&&o===S){o=null;return}B=A?p.position-A.position:0}else s(g);r.forEach(F=>{F(n.value,S,{delta:B,type:zn.pop,direction:B?B>0?Dn.forward:Dn.back:Dn.unknown})})};function a(){o=n.value}function l(p){r.push(p);const g=()=>{const S=r.indexOf(p);S>-1&&r.splice(S,1)};return i.push(g),g}function d(){const{history:p}=window;p.state&&p.replaceState(ie({},p.state,{scroll:er()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:a,listen:l,destroy:f}}function Lo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?er():null}}function Yf(t){const{history:e,location:n}=window,s={value:Fc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,d){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+a:Jf()+t+a;try{e[d?"replaceState":"pushState"](l,"",p),r.value=l}catch(g){console.error(g),n[d?"replace":"assign"](p)}}function o(a,l){const d=ie({},e.state,Lo(r.value.back,a,r.value.forward,!0),l,{position:r.value.position});i(a,d,!0),s.value=a}function c(a,l){const d=ie({},r.value,e.state,{forward:a,scroll:er()});i(d.current,d,!0);const f=ie({},Lo(s.value,a,null),{position:d.position+1},l);i(a,f,!1),s.value=a}return{location:s,state:r,push:c,replace:o}}function Xf(t){t=jf(t);const e=Yf(t),n=Qf(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ie({location:"",base:t,go:s,createHref:Wf.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Zf(t){return typeof t=="string"||t&&typeof t=="object"}function Bc(t){return typeof t=="string"||typeof t=="symbol"}const Hc=Symbol("");var No;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(No||(No={}));function yn(t,e){return ie(new Error,{type:t,[Hc]:!0},e)}function nt(t,e){return t instanceof Error&&Hc in t&&(e==null||!!(t.type&e))}const Mo="[^/]+?",eh={sensitive:!1,strict:!1,start:!0,end:!0},th=/[.+*?^${}()[\]/\\]/g;function nh(t,e){const n=ie({},eh,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const d=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let f=0;f<l.length;f++){const p=l[f];let g=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(th,"\\$&"),g+=40;else if(p.type===1){const{value:S,repeatable:A,optional:B,regexp:F}=p;i.push({name:S,repeatable:A,optional:B});const N=F||Mo;if(N!==Mo){g+=10;try{new RegExp(`(${N})`)}catch(G){throw new Error(`Invalid custom RegExp for param "${S}" (${N}): `+G.message)}}let O=A?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;f||(O=B&&l.length<2?`(?:/${O})`:"/"+O),B&&(O+="?"),r+=O,g+=20,B&&(g+=-8),A&&(g+=-20),N===".*"&&(g+=-50)}d.push(g)}s.push(d)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function c(l){const d=l.match(o),f={};if(!d)return null;for(let p=1;p<d.length;p++){const g=d[p]||"",S=i[p-1];f[S.name]=g&&S.repeatable?g.split("/"):g}return f}function a(l){let d="",f=!1;for(const p of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const g of p)if(g.type===0)d+=g.value;else if(g.type===1){const{value:S,repeatable:A,optional:B}=g,F=S in l?l[S]:"";if(Ve(F)&&!A)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const N=Ve(F)?F.join("/"):F;if(!N)if(B)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${S}"`);d+=N}}return d||"/"}return{re:o,score:s,keys:i,parse:c,stringify:a}}function sh(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function jc(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=sh(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Do(s))return 1;if(Do(r))return-1}return r.length-s.length}function Do(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rh={type:0,value:""},ih=/[a-zA-Z0-9_]/;function oh(t){if(!t)return[[]];if(t==="/")return[[rh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let c=0,a,l="",d="";function f(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:d,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(l&&f(),o()):a===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:a==="("?n=2:ih.test(a)?p():(f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+a:n=3:d+=a;break;case 3:f(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),f(),o(),r}function ah(t,e,n){const s=nh(oh(t.path),n),r=ie(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function ch(t,e){const n=[],s=new Map;e=Fo({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,g){const S=!g,A=lh(f);A.aliasOf=g&&g.record;const B=Fo(e,f),F=[A];if("alias"in f){const G=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of G)F.push(ie({},A,{components:g?g.record.components:A.components,path:q,aliasOf:g?g.record:A}))}let N,O;for(const G of F){const{path:q}=G;if(p&&q[0]!=="/"){const D=p.record.path,Q=D[D.length-1]==="/"?"":"/";G.path=p.record.path+(q&&Q+q)}if(N=ah(G,p,B),g?g.alias.push(N):(O=O||N,O!==N&&O.alias.push(N),S&&f.name&&!$o(N)&&o(f.name)),Vc(N)&&a(N),A.children){const D=A.children;for(let Q=0;Q<D.length;Q++)i(D[Q],N,g&&g.children[Q])}g=g||N}return O?()=>{o(O)}:Mn}function o(f){if(Bc(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){const p=fh(f,n);n.splice(p,0,f),f.record.name&&!$o(f)&&s.set(f.record.name,f)}function l(f,p){let g,S={},A,B;if("name"in f&&f.name){if(g=s.get(f.name),!g)throw yn(1,{location:f});B=g.record.name,S=ie(Uo(p.params,g.keys.filter(O=>!O.optional).concat(g.parent?g.parent.keys.filter(O=>O.optional):[]).map(O=>O.name)),f.params&&Uo(f.params,g.keys.map(O=>O.name))),A=g.stringify(S)}else if(f.path!=null)A=f.path,g=n.find(O=>O.re.test(A)),g&&(S=g.parse(A),B=g.record.name);else{if(g=p.name?s.get(p.name):n.find(O=>O.re.test(p.path)),!g)throw yn(1,{location:f,currentLocation:p});B=g.record.name,S=ie({},p.params,f.params),A=g.stringify(S)}const F=[];let N=g;for(;N;)F.unshift(N.record),N=N.parent;return{name:B,path:A,params:S,matched:F,meta:dh(F)}}t.forEach(f=>i(f));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:r}}function Uo(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function lh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:uh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function uh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function $o(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dh(t){return t.reduce((e,n)=>ie(e,n.meta),{})}function Fo(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function fh(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;jc(t,e[i])<0?s=i:n=i+1}const r=hh(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function hh(t){let e=t;for(;e=e.parent;)if(Vc(e)&&jc(t,e)===0)return e}function Vc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ph(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Nc," "),o=i.indexOf("="),c=Wn(o<0?i:i.slice(0,o)),a=o<0?null:Wn(i.slice(o+1));if(c in e){let l=e[c];Ve(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function Bo(t){let e="";for(let n in t){const s=t[n];if(n=Lf(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ve(s)?s.map(i=>i&&jr(i)):[s&&jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gh(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ve(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const mh=Symbol(""),Ho=Symbol(""),Ii=Symbol(""),Wc=Symbol(""),Wr=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function St(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(yn(4,{from:n,to:e})):p instanceof Error?a(p):Zf(p)?a(yn(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),c())},d=i(()=>t.call(s&&s.instances[r],e,n,l));let f=Promise.resolve(d);t.length<3&&(f=f.then(l)),f.catch(p=>a(p))})}function br(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(_h(a)){const d=(a.__vccOpts||a)[e];d&&i.push(St(d,n,s,o,c,r))}else{let l=a();i.push(()=>l.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const f=If(d)?d.default:d;o.components[c]=f;const g=(f.__vccOpts||f)[e];return g&&St(g,n,s,o,c,r)()}))}}return i}function _h(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jo(t){const e=Qe(Ii),n=Qe(Wc),s=Ce(()=>{const a=ae(t.to);return e.resolve(a)}),r=Ce(()=>{const{matched:a}=s.value,{length:l}=a,d=a[l-1],f=n.matched;if(!d||!f.length)return-1;const p=f.findIndex(bn.bind(null,d));if(p>-1)return p;const g=Vo(a[l-2]);return l>1&&Vo(d)===g&&f[f.length-1].path!==g?f.findIndex(bn.bind(null,a[l-2])):p}),i=Ce(()=>r.value>-1&&yh(n.params,s.value.params)),o=Ce(()=>r.value>-1&&r.value===n.matched.length-1&&$c(n.params,s.value.params));function c(a={}){return bh(a)?e[ae(t.replace)?"replace":"push"](ae(t.to)).catch(Mn):Promise.resolve()}return{route:s,href:Ce(()=>s.value.href),isActive:i,isExactActive:o,navigate:c}}const vh=Me({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jo,setup(t,{slots:e}){const n=Jn(jo(t)),{options:s}=Qe(Ii),r=Ce(()=>({[Wo(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wo(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:yi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Ei=vh;function bh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yh(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ve(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Vo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wo=(t,e,n)=>t??e??n,wh=Me({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Qe(Wr),r=Ce(()=>t.route||s.value),i=Qe(Ho,0),o=Ce(()=>{let l=ae(i);const{matched:d}=r.value;let f;for(;(f=d[l])&&!f.components;)l++;return l}),c=Ce(()=>r.value.matched[o.value]);ms(Ho,Ce(()=>o.value+1)),ms(mh,c),ms(Wr,r);const a=He();return xn(()=>[a.value,c.value,t.name],([l,d,f],[p,g,S])=>{d&&(d.instances[f]=l,g&&g!==d&&l&&l===p&&(d.leaveGuards.size||(d.leaveGuards=g.leaveGuards),d.updateGuards.size||(d.updateGuards=g.updateGuards))),l&&d&&(!g||!bn(d,g)||!p)&&(d.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=r.value,d=t.name,f=c.value,p=f&&f.components[d];if(!p)return zo(n.default,{Component:p,route:l});const g=f.props[d],S=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=yi(p,ie({},S,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(f.instances[d]=null)},ref:a}));return zo(n.default,{Component:B,route:l})||B}}});function zo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zc=wh;function Ih(t){const e=ch(t.routes,t),n=t.parseQuery||ph,s=t.stringifyQuery||Bo,r=t.history,i=Rn(),o=Rn(),c=Rn(),a=bu(vt);let l=vt;ln&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=_r.bind(null,v=>""+v),f=_r.bind(null,Mf),p=_r.bind(null,Wn);function g(v,k){let T,M;return Bc(v)?(T=e.getRecordMatcher(v),M=k):M=v,e.addRoute(M,T)}function S(v){const k=e.getRecordMatcher(v);k&&e.removeRoute(k)}function A(){return e.getRoutes().map(v=>v.record)}function B(v){return!!e.getRecordMatcher(v)}function F(v,k){if(k=ie({},k||a.value),typeof v=="string"){const h=vr(n,v,k.path),m=e.resolve({path:h.path},k),b=r.createHref(h.fullPath);return ie(h,m,{params:p(m.params),hash:Wn(h.hash),redirectedFrom:void 0,href:b})}let T;if(v.path!=null)T=ie({},v,{path:vr(n,v.path,k.path).path});else{const h=ie({},v.params);for(const m in h)h[m]==null&&delete h[m];T=ie({},v,{params:f(h)}),k.params=f(k.params)}const M=e.resolve(T,k),re=v.hash||"";M.params=d(p(M.params));const he=$f(s,ie({},v,{hash:xf(re),path:M.path})),u=r.createHref(he);return ie({fullPath:he,hash:re,query:s===Bo?gh(v.query):v.query||{}},M,{redirectedFrom:void 0,href:u})}function N(v){return typeof v=="string"?vr(n,v,a.value.path):ie({},v)}function O(v,k){if(l!==v)return yn(8,{from:k,to:v})}function G(v){return Q(v)}function q(v){return G(ie(N(v),{replace:!0}))}function D(v){const k=v.matched[v.matched.length-1];if(k&&k.redirect){const{redirect:T}=k;let M=typeof T=="function"?T(v):T;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=N(M):{path:M},M.params={}),ie({query:v.query,hash:v.hash,params:M.path!=null?{}:v.params},M)}}function Q(v,k){const T=l=F(v),M=a.value,re=v.state,he=v.force,u=v.replace===!0,h=D(T);if(h)return Q(ie(N(h),{state:typeof h=="object"?ie({},re,h.state):re,force:he,replace:u}),k||T);const m=T;m.redirectedFrom=k;let b;return!he&&Ff(s,M,T)&&(b=yn(16,{to:m,from:M}),We(M,M,!0,!1)),(b?Promise.resolve(b):V(m,M)).catch(_=>nt(_)?nt(_,2)?_:pt(_):ne(_,m,M)).then(_=>{if(_){if(nt(_,2))return Q(ie({replace:u},N(_.to),{state:typeof _.to=="object"?ie({},re,_.to.state):re,force:he}),k||m)}else _=x(m,M,!0,u,re);return Y(m,M,_),_})}function W(v,k){const T=O(v,k);return T?Promise.reject(T):Promise.resolve()}function R(v){const k=on.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(v):v()}function V(v,k){let T;const[M,re,he]=Eh(v,k);T=br(M.reverse(),"beforeRouteLeave",v,k);for(const h of M)h.leaveGuards.forEach(m=>{T.push(St(m,v,k))});const u=W.bind(null,v,k);return T.push(u),Ee(T).then(()=>{T=[];for(const h of i.list())T.push(St(h,v,k));return T.push(u),Ee(T)}).then(()=>{T=br(re,"beforeRouteUpdate",v,k);for(const h of re)h.updateGuards.forEach(m=>{T.push(St(m,v,k))});return T.push(u),Ee(T)}).then(()=>{T=[];for(const h of he)if(h.beforeEnter)if(Ve(h.beforeEnter))for(const m of h.beforeEnter)T.push(St(m,v,k));else T.push(St(h.beforeEnter,v,k));return T.push(u),Ee(T)}).then(()=>(v.matched.forEach(h=>h.enterCallbacks={}),T=br(he,"beforeRouteEnter",v,k,R),T.push(u),Ee(T))).then(()=>{T=[];for(const h of o.list())T.push(St(h,v,k));return T.push(u),Ee(T)}).catch(h=>nt(h,8)?h:Promise.reject(h))}function Y(v,k,T){c.list().forEach(M=>R(()=>M(v,k,T)))}function x(v,k,T,M,re){const he=O(v,k);if(he)return he;const u=k===vt,h=ln?history.state:{};T&&(M||u?r.replace(v.fullPath,ie({scroll:u&&h&&h.scroll},re)):r.push(v.fullPath,re)),a.value=v,We(v,k,T,u),pt()}let te;function ge(){te||(te=r.listen((v,k,T)=>{if(!rs.listening)return;const M=F(v),re=D(M);if(re){Q(ie(re,{replace:!0}),M).catch(Mn);return}l=M;const he=a.value;ln&&qf(xo(he.fullPath,T.delta),er()),V(M,he).catch(u=>nt(u,12)?u:nt(u,2)?(Q(u.to,M).then(h=>{nt(h,20)&&!T.delta&&T.type===zn.pop&&r.go(-1,!1)}).catch(Mn),Promise.reject()):(T.delta&&r.go(-T.delta,!1),ne(u,M,he))).then(u=>{u=u||x(M,he,!1),u&&(T.delta&&!nt(u,8)?r.go(-T.delta,!1):T.type===zn.pop&&nt(u,20)&&r.go(-1,!1)),Y(M,he,u)}).catch(Mn)}))}let we=Rn(),X=Rn(),ce;function ne(v,k,T){pt(v);const M=X.list();return M.length?M.forEach(re=>re(v,k,T)):console.error(v),Promise.reject(v)}function tt(){return ce&&a.value!==vt?Promise.resolve():new Promise((v,k)=>{we.add([v,k])})}function pt(v){return ce||(ce=!v,ge(),we.list().forEach(([k,T])=>v?T(v):k()),we.reset()),v}function We(v,k,T,M){const{scrollBehavior:re}=t;if(!ln||!re)return Promise.resolve();const he=!T&&Gf(xo(v.fullPath,0))||(M||!T)&&history.state&&history.state.scroll||null;return pi().then(()=>re(v,k,he)).then(u=>u&&Kf(u)).catch(u=>ne(u,v,k))}const Ae=v=>r.go(v);let rn;const on=new Set,rs={currentRoute:a,listening:!0,addRoute:g,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:B,getRoutes:A,resolve:F,options:t,push:G,replace:q,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:X.add,isReady:tt,install(v){const k=this;v.component("RouterLink",Ei),v.component("RouterView",zc),v.config.globalProperties.$router=k,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>ae(a)}),ln&&!rn&&a.value===vt&&(rn=!0,G(r.location).catch(re=>{}));const T={};for(const re in vt)Object.defineProperty(T,re,{get:()=>a.value[re],enumerable:!0});v.provide(Ii,k),v.provide(Wc,Wa(T)),v.provide(Wr,a);const M=v.unmount;on.add(v),v.unmount=function(){on.delete(v),on.size<1&&(l=vt,te&&te(),te=null,a.value=vt,rn=!1,ce=!1),M()}}};function Ee(v){return v.reduce((k,T)=>k.then(()=>R(T)),Promise.resolve())}return rs}function Eh(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>bn(l,c))?s.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>bn(l,a))||r.push(a))}return[n,s,r]}const Sh=Me({__name:"index",setup(t){return(e,n)=>(pe(),Ys(ae(zc)))}}),Ch="modulepreload",Th=function(t){return"/"+t},Ko={},Rh=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(c=>{if(c=Th(c),c in Ko)return;Ko[c]=!0;const a=c.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${l}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":Ch,a||(d.as="script",d.crossOrigin=""),d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),a)return new Promise((f,p)=>{d.addEventListener("load",f),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return r.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},Si="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='1.5rem'%20width='1.5rem'%20viewBox='0%200%20512%20512'%3e%3cpath%20fill='%230065FE'%20d='M256%20192l-39.5-39.5c4.9-12.6%207.5-26.2%207.5-40.5C224%2050.1%20173.9%200%20112%200S0%2050.1%200%20112s50.1%20112%20112%20112c14.3%200%2027.9-2.7%2040.5-7.5L192%20256l-39.5%2039.5c-12.6-4.9-26.2-7.5-40.5-7.5C50.1%20288%200%20338.1%200%20400s50.1%20112%20112%20112s112-50.1%20112-112c0-14.3-2.7-27.9-7.5-40.5L499.2%2076.8c7.1-7.1%207.1-18.5%200-25.6c-28.3-28.3-74.1-28.3-102.4%200L256%20192zm22.6%20150.6L396.8%20460.8c28.3%2028.3%2074.1%2028.3%20102.4%200c7.1-7.1%207.1-18.5%200-25.6L342.6%20278.6l-64%2064zM64%20112a48%2048%200%201%201%2096%200%2048%2048%200%201%201%20-96%200zm48%20240a48%2048%200%201%201%200%2096%2048%2048%200%201%201%200-96z'/%3e%3c/svg%3e",ht=xc("togglers",()=>{const t=He(!1),e=He(!1),n=He(!1);return{isMobileNavOpen:t,toggleMobileNav:()=>{t.value=!t.value},isUserMenuOpen:e,toggleUserMenu:()=>{e.value=!e.value},isAuthenticationOpen:n,toggleAuthentication:()=>{n.value=!n.value}}}),Ut=t=>(tn("data-v-bf9ded93"),t=t(),nn(),t),Ah=["aria-haspopup"],kh=Ut(()=>L("div",{class:"logo"},[L("img",{src:Si,alt:"logo"})],-1)),Ph=Ut(()=>L("div",{class:"logo-line"},null,-1)),Oh=Ut(()=>L("p",{class:"logo-text"},"SCISSOR",-1)),xh={key:0,class:"nav-urls"},Lh=Ut(()=>L("li",null,[L("a",{href:"#about"},"Features")],-1)),Nh=Ut(()=>L("li",null,[L("a",{href:"#faq"},"FAQs")],-1)),Mh=[Lh,Nh],Dh=Ut(()=>L("div",{class:"line"},null,-1)),Uh=Ut(()=>L("div",{class:"line"},null,-1)),$h=Ut(()=>L("div",{class:"line"},null,-1)),Fh=[Dh,Uh,$h],Bh=Me({__name:"Nav",setup(t){const e=ht(),n=He(window.innerWidth),s=()=>{n.value=window.innerWidth};return qs(()=>{window.addEventListener("resize",s)}),Gs(()=>{window.removeEventListener("resize",s)}),(r,i)=>(pe(),Ie("nav",{"aria-haspopup":ae(e).isAuthenticationOpen},[oe(ae(Ei),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:vn(()=>[kh,Ph,Oh]),_:1}),n.value>=600?(pe(),Ie("ul",xh,Mh)):ut("",!0),n.value>=600?(pe(),Ie("button",{key:1,onClick:i[0]||(i[0]=o=>ae(e).toggleAuthentication()),class:"login"}," Login ")):ut("",!0),n.value<600?(pe(),Ie("div",{key:2,class:"hamburger",onClick:i[1]||(i[1]=o=>ae(e).toggleMobileNav())},Fh)):ut("",!0)],8,Ah))}}),et=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Hh=et(Bh,[["__scopeId","data-v-bf9ded93"]]),tr="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%3e%3cpath%20d='M50%2023.3333L60%2023.3333C62.1887%2023.3333%2064.356%2023.7643%2066.3781%2024.6019C68.4002%2025.4395%2070.2375%2026.6672%2071.7851%2028.2148C73.3328%2029.7624%2074.5604%2031.5998%2075.398%2033.6219C76.2356%2035.644%2076.6667%2037.8112%2076.6667%2039.9999C76.6667%2042.1886%2076.2356%2044.3559%2075.398%2046.378C74.5604%2048.4001%2073.3328%2050.2374%2071.7851%2051.785C70.2375%2053.3327%2068.4002%2054.5603%2066.3781%2055.3979C64.356%2056.2355%2062.1887%2056.6666%2060%2056.6666H50M30%2056.6666H20C17.8113%2056.6666%2015.644%2056.2355%2013.6219%2055.3979C11.5998%2054.5603%209.76253%2053.3327%208.21488%2051.785C5.08928%2048.6594%203.33333%2044.4202%203.33333%2039.9999C3.33333%2035.5796%205.08928%2031.3404%208.21488%2028.2148C11.3405%2025.0892%2015.5797%2023.3333%2020%2023.3333H30'%20stroke='%23FFFFFF'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M26.6667%2040H53.3333'%20stroke='%23ffffff'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",jh="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='41'%20height='12'%20viewBox='0%200%2041%2012'%20fill='none'%3e%3cpath%20d='M1%205C0.447715%205%200%205.44772%200%206C0%206.55228%200.447715%207%201%207L1%205ZM41%206L31%200.226497V11.7735L41%206ZM1%207L32%207V5L1%205L1%207Z'%20fill='%23005AE2'/%3e%3c/svg%3e",$t=t=>(tn("data-v-5280e4f7"),t=t(),nn(),t),Vh=["aria-haspopup"],Wh={class:"intro"},zh=$t(()=>L("div",{class:"intro-text-container"},[L("p",{class:"intro-text"}," Optimize Your Online Experience with Our Advanced URL Shortening Solution "),L("p",{class:"intro-description"}," Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement. ")],-1)),Kh={class:"intro-cta-container"},qh=$t(()=>L("a",{href:"#about",class:"intro-cta-text"},"Learn More",-1)),Gh={class:"hero-visuals-container"},Jh={class:"hero-visual-image"},Qh={class:"coupled-links"},Yh=$t(()=>L("div",{class:"link"},[L("img",{src:tr,alt:"link"})],-1)),Xh=$t(()=>L("div",{class:"link"},[L("img",{src:tr,alt:"link"})],-1)),Zh={key:0,class:"link"},ep=$t(()=>L("img",{src:tr,alt:"link"},null,-1)),tp=[ep],np=$t(()=>L("div",{class:"arrow"},[L("img",{src:jh,alt:"arrow"})],-1)),sp=$t(()=>L("div",{class:"link"},[L("img",{src:tr,alt:"link"})],-1)),rp=$t(()=>L("p",{class:"hero-visual-text"},[kn(" Seamlessly transform your long "),L("span",{class:"hero-visual-text-highlight"},"URLs"),kn(" into "),L("span",{class:"hero-visual-text-highlight"},"concise"),kn(" and "),L("span",{class:"hero-visual-text-highlight"},"shareable"),kn(" links with just few clicks. ")],-1)),ip=Me({__name:"Hero",setup(t){const e=ht(),n=He(window.innerWidth),s=()=>{n.value=window.innerWidth};return qs(()=>{window.addEventListener("resize",s)}),Gs(()=>{window.removeEventListener("resize",s)}),(r,i)=>(pe(),Ie("section",{"aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Wh,[zh,L("div",Kh,[L("button",{onClick:i[0]||(i[0]=(...o)=>ae(e).toggleAuthentication&&ae(e).toggleAuthentication(...o)),class:"intro-cta-button"},"Get Started"),qh])]),L("div",Gh,[L("div",Jh,[L("div",Qh,[Yh,Xh,n.value>=450?(pe(),Ie("div",Zh,tp)):ut("",!0)]),np,sp]),rp])],8,Vh))}}),op=et(ip,[["__scopeId","data-v-5280e4f7"]]),Kc="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='6'%20height='48'%20viewBox='0%200%206%2048'%20fill='none'%3e%3cpath%20d='M3%200V48'%20stroke='url(%23paint0_linear_1_196)'%20stroke-width='5'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1_196'%20x1='3.05'%20y1='0'%20x2='3.05'%20y2='48'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23112232'/%3e%3cstop%20offset='1'%20stop-color='%234D6B88'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",ap="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_203)'%3e%3cpath%20d='M15.1%207H18.1C18.7566%207%2019.4068%207.12933%2020.0134%207.3806C20.6201%207.63188%2021.1712%208.00017%2021.6355%208.46447C22.0998%208.92876%2022.4681%209.47996%2022.7194%2010.0866C22.9707%2010.6932%2023.1%2011.3434%2023.1%2012C23.1%2012.6566%2022.9707%2013.3068%2022.7194%2013.9134C22.4681%2014.52%2022.0998%2015.0712%2021.6355%2015.5355C21.1712%2015.9998%2020.6201%2016.3681%2020.0134%2016.6194C19.4068%2016.8707%2018.7566%2017%2018.1%2017H15.1M9.10001%2017H6.10001C5.4434%2017%204.79322%2016.8707%204.18659%2016.6194C3.57996%2016.3681%203.02877%2015.9998%202.56447%2015.5355C1.62679%2014.5979%201.10001%2013.3261%201.10001%2012C1.10001%2010.6739%201.62679%209.40215%202.56447%208.46447C3.50215%207.52678%204.77392%207%206.10001%207H9.10001'%20stroke='%23141414'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.10001%2012H16.1'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_203'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",cp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cpath%20d='M11.1%204H4.10001C3.56957%204%203.06087%204.21071%202.68579%204.58579C2.31072%204.96086%202.10001%205.46957%202.10001%206V20C2.10001%2020.5304%202.31072%2021.0391%202.68579%2021.4142C3.06087%2021.7893%203.56957%2022%204.10001%2022H18.1C18.6304%2022%2019.1391%2021.7893%2019.5142%2021.4142C19.8893%2021.0391%2020.1%2020.5304%2020.1%2020V13'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M18.6%202.49998C18.9978%202.10216%2019.5374%201.87866%2020.1%201.87866C20.6626%201.87866%2021.2022%202.10216%2021.6%202.49998C21.9978%202.89781%2022.2213%203.43737%2022.2213%203.99998C22.2213%204.56259%2021.9978%205.10216%2021.6%205.49998L12.1%2015L8.10001%2016L9.10001%2012L18.6%202.49998Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",lp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%3e%3cpath%20d='M10.8859%203.06763H3.88589V10.0676H10.8859V3.06763Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%203.06763H14.8859V10.0676H21.8859V3.06763Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21.8859%2014.0676H14.8859V21.0676H21.8859V14.0676Z'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M10.8859%2014.0676H3.88589V21.0676H10.8859V14.0676Z'%20stroke='%23005AE2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",up="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='25'%20height='24'%20viewBox='0%200%2025%2024'%20fill='none'%3e%3cg%20clip-path='url(%23clip0_1_236)'%3e%3cpath%20d='M21.1%2012H17.1L14.1%2021L8.10001%203L5.10001%2012H1.10001'%20stroke='%230065FE'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_236'%3e%3crect%20width='24'%20height='24'%20fill='white'%20transform='translate(0.100006)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",dp=["aria-haspopup"],fp=Sc('<div class="stats-container" data-v-bdd10bc4><p class="stats-heading" data-v-bdd10bc4> One Stop, <br data-v-bdd10bc4>Four <span class="stats-heading-highlight" data-v-bdd10bc4>Possibilities</span>. </p><div class="stats" data-v-bdd10bc4><div class="stat-box-container" id="stat-box-container1" data-v-bdd10bc4><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>12M</p><p class="stat-text" data-v-bdd10bc4>Active Users</p></div><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>60M</p><p class="stat-text" data-v-bdd10bc4>Links &amp; QR codes created</p></div></div><div class="stat-box-container" data-v-bdd10bc4><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>1B</p><p class="stat-text" data-v-bdd10bc4>Clicked &amp; Scanned connections</p></div><div class="stat-box" data-v-bdd10bc4><p class="stat-number" data-v-bdd10bc4>300K</p><p class="stat-text" data-v-bdd10bc4>App Integrations</p></div></div></div></div><div class="about-container" data-v-bdd10bc4><div class="why-choose-container" data-v-bdd10bc4><div class="why-choose-heading-container" data-v-bdd10bc4><div class="why-choose-heading-line" data-v-bdd10bc4><img src="'+Kc+'" alt="line" data-v-bdd10bc4></div><p class="why-choose-heading" data-v-bdd10bc4> Why Choose <span class="why-choose-heading-highlight" data-v-bdd10bc4>Scissor</span></p></div><p class="why-choose-text" data-v-bdd10bc4> Scissor is the hub of everything that has to do with your link management. We shorten your URLs, allow you creating custom ones for your personal, business, event usage. Our swift QR code creation, management and usage tracking with advance analytics for all of these is second to none. </p></div><div class="features-container" data-v-bdd10bc4><div class="features-box-container" data-v-bdd10bc4><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+ap+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>URL Shortening</p><p class="feature-box-text" data-v-bdd10bc4> Scissor allows you to shorten URLs of your business, events. Shorten your URL at scale, URL redirects. </p></div></div><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+cp+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>Custom URLs</p><p class="feature-box-text" data-v-bdd10bc4> With Scissor, you can create custom URLs, with the length you want! A solution for socials and businesses. </p></div></div></div><div class="features-box-container" data-v-bdd10bc4><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+lp+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>QR Codes</p><p class="feature-box-text" data-v-bdd10bc4> Generate QR codes to your business, events. Bring your audience and customers to your doorstep with this scan and go solution. </p></div></div><div class="feature-box" data-v-bdd10bc4><div class="feature-box-icon" data-v-bdd10bc4><img src="'+up+'" alt="link" data-v-bdd10bc4></div><div class="feature-box-text-container" data-v-bdd10bc4><p class="feature-box-text-header" data-v-bdd10bc4>Data Analytics</p><p class="feature-box-text" data-v-bdd10bc4> Receive data on the usage of either your shortened URL, custom URLs or generated QR codes. Embedded to monitor progress. </p></div></div></div></div></div>',2),hp=[fp],pp=Me({__name:"About",setup(t){const e=ht();return(n,s)=>(pe(),Ie("section",{id:"about","aria-haspopup":ae(e).isAuthenticationOpen},hp,8,dp))}}),gp=et(pp,[["__scopeId","data-v-bdd10bc4"]]),mp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M12%205V19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",_p="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3e%3cpath%20d='M5%2012H19'%20stroke='%23005ae2'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",qc=t=>(tn("data-v-316a6584"),t=t(),nn(),t),vp={class:"faq-question-container"},bp={class:"faq-question"},yp={key:0,class:"plus-icon"},wp=qc(()=>L("img",{src:mp,alt:"plus"},null,-1)),Ip=[wp],Ep={key:1,class:"minus-icon"},Sp=qc(()=>L("img",{src:_p,alt:"minus"},null,-1)),Cp=[Sp],Tp={key:0,class:"faq-answer"},Rp=Me({__name:"FAQBlocks",props:{question:{type:String,required:!0},answer:{type:String,required:!0}},setup(t){const e=He(!1),n=()=>{e.value=!e.value};return(s,r)=>(pe(),Ie("div",{class:Hs(["faq-block",{active:e.value}]),onClick:n},[L("div",vp,[L("p",bp,Rr(t.question),1),e.value?ut("",!0):(pe(),Ie("div",yp,Ip)),e.value?(pe(),Ie("div",Ep,Cp)):ut("",!0)]),oe(Yn,{name:"fade",mode:"out-in"},{default:vn(()=>[e.value?(pe(),Ie("p",Tp,Rr(t.answer),1)):ut("",!0)]),_:1})],2))}}),fs=et(Rp,[["__scopeId","data-v-316a6584"]]),Ap=t=>(tn("data-v-8efe8e3d"),t=t(),nn(),t),kp=["aria-haspopup"],Pp={class:"faqs-container"},Op=Ap(()=>L("div",{class:"faq-header-container"},[L("div",{class:"faq-header-line"},[L("img",{src:Kc,alt:"line"})]),L("p",{class:"faq-header"},"FAQs")],-1)),xp={class:"faq-blocks"},Lp=Me({__name:"FAQ",setup(t){const e=ht();return(n,s)=>(pe(),Ie("section",{id:"faq","aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Pp,[Op,L("div",xp,[oe(fs,{question:"How does URL shortening work?",answer:"URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination."}),oe(fs,{question:"Is it necessary to create an account to use the URL shortening service?",answer:"Yes! As creating one unlocks a treasure trove of link-wrangling superpowers like crafting custom links,performance tracking of your links, and more. "}),oe(fs,{question:" What is a QR Code?",answer:"Quick response or QR, is a type of barcode that can store a multitude of information. The obvious difference between a QR Code and Barcode is its appearance. A QR Code is usually in the shape of a square and contains smaller, even blocks similar to Tetris. A Barcode, on the other hand, has vertical bars in different thicknesses and is often accompanied by a serial number."}),oe(fs,{question:"What can a QR Code do?",answer:"Because of its versatility, a QR Code can be programmed to do a multitude of things. It can be split into two formats: Dynamic and Static. A Dynamic QR Code is useful for businesses or nonprofits in their marketing strategy because of its advantages. Though it needs a subscription to work, it is a small price to pay compared to the benefits it offers. Dynamic QR Code solutions are editable, which means if you made a mistake and only noticed it after the QR Codes are printed, you can easily log in to the dashboard and fix them without changing the appearance of the already printed Codes."})])])],8,kp))}}),Np=et(Lp,[["__scopeId","data-v-8efe8e3d"]]),Mp=t=>(tn("data-v-587c4790"),t=t(),nn(),t),Dp=["aria-haspopup"],Up={class:"CTA-container"},$p=Mp(()=>L("p",{class:"CTA-text"},"Revolutionizing Link Optimization!",-1)),Fp=Me({__name:"CTA",setup(t){const e=ht();return(n,s)=>(pe(),Ie("section",{"aria-haspopup":ae(e).isAuthenticationOpen},[L("div",Up,[$p,L("button",{onClick:s[0]||(s[0]=(...r)=>ae(e).toggleAuthentication&&ae(e).toggleAuthentication(...r)),class:"CTA-button"},"Get Started")])],8,Dp))}}),Bp=et(Fp,[["__scopeId","data-v-587c4790"]]),Hp="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23005ae2'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e",nr=t=>(tn("data-v-630bf274"),t=t(),nn(),t),jp=["aria-haspopup"],Vp=nr(()=>L("div",{class:"logo"},[L("img",{src:Si,alt:"logo"})],-1)),Wp=nr(()=>L("div",{class:"logo-line"},null,-1)),zp=nr(()=>L("p",{class:"logo-text"},"SCISSOR",-1)),Kp={class:"login-and-escape-container"},qp=nr(()=>L("img",{src:Hp,alt:"escape"},null,-1)),Gp=[qp],Jp=Me({__name:"MobileNav",setup(t){const e=ht();return(n,s)=>(pe(),Ys(Yn,{name:"mobile-nav",mode:"out-in"},{default:vn(()=>[ae(e).isMobileNavOpen===!0?(pe(),Ie("div",{key:0,class:"mobile-nav","aria-haspopup":ae(e).isAuthenticationOpen},[L("nav",null,[oe(ae(Ei),{to:"/",rel:"noopener noreferrer",class:"logo-container"},{default:vn(()=>[Vp,Wp,zp]),_:1}),L("div",Kp,[L("button",{onClick:s[0]||(s[0]=r=>ae(e).toggleAuthentication()),class:"login"},"Login"),L("button",{class:"close-btn",onClick:s[1]||(s[1]=(...r)=>ae(e).toggleMobileNav&&ae(e).toggleMobileNav(...r))},Gp)])])],8,jp)):ut("",!0)]),_:1}))}}),Qp=et(Jp,[["__scopeId","data-v-630bf274"]]),Yp=["aria-haspopup"],Xp=Sc('<div class="logo-container" data-v-90938e72><div class="logo" data-v-90938e72><img src="'+Si+'" alt="logo" data-v-90938e72></div><div class="logo-line" data-v-90938e72></div><p class="logo-text" data-v-90938e72>SCISSOR</p></div><a href="https://www.github.com/favorodera/scissor" target="_blank" rel="noopener noreferrer" data-v-90938e72>favorodera</a>',2),Zp=[Xp],eg=Me({__name:"Footer",setup(t){const e=ht();return(n,s)=>(pe(),Ie("footer",{"aria-haspopup":ae(e).isAuthenticationOpen},Zp,8,Yp))}}),tg=et(eg,[["__scopeId","data-v-90938e72"]]),ng="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='2rem'%20width='2rem'%20viewBox='0%200%20384%20512'%3e%3cpath%20fill='%23FFFFFF'%20d='M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z'/%3e%3c/svg%3e";var qo={};/**
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
 */const Gc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sg=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],c=t[n++],a=((r&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Jc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,c=o?t[r+1]:0,a=r+2<t.length,l=a?t[r+2]:0,d=i>>2,f=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,g=l&63;a||(g=64,o||(p=64)),s.push(n[d],n[f],n[p],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],c=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||c==null||l==null||f==null)throw new rg;const p=i<<2|c>>4;if(s.push(p),l!==64){const g=c<<4&240|l>>2;if(s.push(g),f!==64){const S=l<<6&192|f;s.push(S)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ig=function(t){const e=Gc(t);return Jc.encodeByteArray(e,!0)},Qc=function(t){return ig(t).replace(/\./g,"")},Yc=function(t){try{return Jc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function og(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ag=()=>og().__FIREBASE_DEFAULTS__,cg=()=>{if(typeof process>"u"||typeof qo>"u")return;const t=qo.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Yc(t[1]);return e&&JSON.parse(e)},Ci=()=>{try{return ag()||cg()||lg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ug=t=>{var e,n;return(n=(e=Ci())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xc=()=>{var t;return(t=Ci())===null||t===void 0?void 0:t.config},Zc=t=>{var e;return(e=Ci())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function hg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gg(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mg(){try{return typeof indexedDB=="object"}catch{return!1}}function _g(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vg="FirebaseError";class Ft extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vg,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xn.prototype.create)}}class Xn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?bg(i,s):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new Ft(r,c,s)}}function bg(t,e){return t.replace(yg,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const yg=/\{\$([^}]+)}/g;function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ps(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Go(i)&&Go(o)){if(!Ps(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Go(t){return t!==null&&typeof t=="object"}/**
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
 */function Zn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ig(t,e){const n=new Eg(t,e);return n.subscribe.bind(n)}class Eg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Sg(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=yr),r.error===void 0&&(r.error=yr),r.complete===void 0&&(r.complete=yr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Sg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yr(){}/**
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
 */function sn(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class Cg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dg;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rg(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);s===c&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Tg(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tg(t){return t===Wt?void 0:t}function Rg(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ag{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const kg={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Pg=le.INFO,Og={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},xg=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Og[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class el{constructor(e){this.name=e,this._logLevel=Pg,this._logHandler=xg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Lg=(t,e)=>e.some(n=>t instanceof n);let Jo,Qo;function Ng(){return Jo||(Jo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mg(){return Qo||(Qo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tl=new WeakMap,zr=new WeakMap,nl=new WeakMap,wr=new WeakMap,Ti=new WeakMap;function Dg(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tl.set(n,t)}).catch(()=>{}),Ti.set(e,t),e}function Ug(t){if(zr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zr.set(t,e)}let Kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $g(t){Kr=t(Kr)}function Fg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ir(this),e,...n);return nl.set(s,e.sort?e.sort():[e]),Pt(s)}:Mg().includes(t)?function(...e){return t.apply(Ir(this),e),Pt(tl.get(this))}:function(...e){return Pt(t.apply(Ir(this),e))}}function Bg(t){return typeof t=="function"?Fg(t):(t instanceof IDBTransaction&&Ug(t),Lg(t,Ng())?new Proxy(t,Kr):t)}function Pt(t){if(t instanceof IDBRequest)return Dg(t);if(wr.has(t))return wr.get(t);const e=Bg(t);return e!==t&&(wr.set(t,e),Ti.set(e,t)),e}const Ir=t=>Ti.get(t);function Hg(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),c=Pt(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Pt(o.result),a.oldVersion,a.newVersion,Pt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),r&&a.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const jg=["get","getKey","getAll","getAllKeys","count"],Vg=["put","add","delete","clear"],Er=new Map;function Yo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Er.get(e))return Er.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Vg.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||jg.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let l=a.store;return s&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),r&&a.done]))[0]};return Er.set(e,i),i}$g(t=>({...t,get:(e,n,s)=>Yo(e,n)||t.get(e,n,s),has:(e,n)=>!!Yo(e,n)||t.has(e,n)}));/**
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
 */class Wg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(zg(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function zg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qr="@firebase/app",Xo="0.10.6";/**
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
 */const Zt=new el("@firebase/app"),Kg="@firebase/app-compat",qg="@firebase/analytics-compat",Gg="@firebase/analytics",Jg="@firebase/app-check-compat",Qg="@firebase/app-check",Yg="@firebase/auth",Xg="@firebase/auth-compat",Zg="@firebase/database",em="@firebase/database-compat",tm="@firebase/functions",nm="@firebase/functions-compat",sm="@firebase/installations",rm="@firebase/installations-compat",im="@firebase/messaging",om="@firebase/messaging-compat",am="@firebase/performance",cm="@firebase/performance-compat",lm="@firebase/remote-config",um="@firebase/remote-config-compat",dm="@firebase/storage",fm="@firebase/storage-compat",hm="@firebase/firestore",pm="@firebase/vertexai-preview",gm="@firebase/firestore-compat",mm="firebase",_m="10.12.3";/**
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
 */const Gr="[DEFAULT]",vm={[qr]:"fire-core",[Kg]:"fire-core-compat",[Gg]:"fire-analytics",[qg]:"fire-analytics-compat",[Qg]:"fire-app-check",[Jg]:"fire-app-check-compat",[Yg]:"fire-auth",[Xg]:"fire-auth-compat",[Zg]:"fire-rtdb",[em]:"fire-rtdb-compat",[tm]:"fire-fn",[nm]:"fire-fn-compat",[sm]:"fire-iid",[rm]:"fire-iid-compat",[im]:"fire-fcm",[om]:"fire-fcm-compat",[am]:"fire-perf",[cm]:"fire-perf-compat",[lm]:"fire-rc",[um]:"fire-rc-compat",[dm]:"fire-gcs",[fm]:"fire-gcs-compat",[hm]:"fire-fst",[gm]:"fire-fst-compat",[pm]:"fire-vertex","fire-js":"fire-js",[mm]:"fire-js-all"};/**
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
 */const Os=new Map,bm=new Map,Jr=new Map;function Zo(t,e){try{t.container.addComponent(e)}catch(n){Zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Jr.has(e))return Zt.debug(`There were multiple attempts to register component ${e}.`),!1;Jr.set(e,t);for(const n of Os.values())Zo(n,t);for(const n of bm.values())Zo(n,t);return!0}function sl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function it(t){return t.settings!==void 0}/**
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
 */const ym={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Xn("app","Firebase",ym);/**
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
 */class wm{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
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
 */const es=_m;function rl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Ot.create("bad-app-name",{appName:String(r)});if(n||(n=Xc()),!n)throw Ot.create("no-options");const i=Os.get(r);if(i){if(Ps(n,i.options)&&Ps(s,i.config))return i;throw Ot.create("duplicate-app",{appName:r})}const o=new Ag(r);for(const a of Jr.values())o.addComponent(a);const c=new wm(n,s,o);return Os.set(r,c),c}function Im(t=Gr){const e=Os.get(t);if(!e&&t===Gr&&Xc())return rl();if(!e)throw Ot.create("no-app",{appName:t});return e}function pn(t,e,n){var s;let r=(s=vm[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zt.warn(c.join(" "));return}Kn(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Em="firebase-heartbeat-database",Sm=1,qn="firebase-heartbeat-store";let Sr=null;function il(){return Sr||(Sr=Hg(Em,Sm,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(qn)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Sr}async function Cm(t){try{const n=(await il()).transaction(qn),s=await n.objectStore(qn).get(ol(t));return await n.done,s}catch(e){if(e instanceof Ft)Zt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zt.warn(n.message)}}}async function ea(t,e){try{const s=(await il()).transaction(qn,"readwrite");await s.objectStore(qn).put(e,ol(t)),await s.done}catch(n){if(n instanceof Ft)Zt.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zt.warn(s.message)}}}function ol(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Tm=1024,Rm=30*24*60*60*1e3;class Am{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pm(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ta();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Rm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ta(),{heartbeatsToSend:s,unsentEntries:r}=km(this._heartbeatsCache.heartbeats),i=Qc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ta(){return new Date().toISOString().substring(0,10)}function km(t,e=Tm){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),na(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),na(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mg()?_g().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ea(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function na(t){return Qc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Om(t){Kn(new wn("platform-logger",e=>new Wg(e),"PRIVATE")),Kn(new wn("heartbeat",e=>new Am(e),"PRIVATE")),pn(qr,Xo,t),pn(qr,Xo,"esm2017"),pn("fire-js","")}Om("");var xm="firebase",Lm="10.12.3";/**
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
 */pn(xm,Lm,"app");function Ri(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function al(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nm=al,cl=new Xn("auth","Firebase",al());/**
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
 */const xs=new el("@firebase/auth");function Mm(t,...e){xs.logLevel<=le.WARN&&xs.warn(`Auth (${es}): ${t}`,...e)}function ys(t,...e){xs.logLevel<=le.ERROR&&xs.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function Ze(t,...e){throw ki(t,...e)}function je(t,...e){return ki(t,...e)}function Ai(t,e,n){const s=Object.assign(Object.assign({},Nm()),{[e]:n});return new Xn("auth","Firebase",s).create(e,{appName:t.name})}function Xt(t){return Ai(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dm(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ze(t,"argument-error"),Ai(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ki(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return cl.create(t,...e)}function j(t,e,...n){if(!t)throw ki(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function dt(t,e){t||ot(e)}/**
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
 */function Qr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Um(){return sa()==="http:"||sa()==="https:"}function sa(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $m(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Um()||hg()||"connection"in navigator)?navigator.onLine:!0}function Fm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=fg()||pg()}get(){return $m()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pi(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ll{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Hm=new ts(3e4,6e4);function Oi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Sn(t,e,n,s,r={}){return ul(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const c=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),ll.fetch()(dl(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ul(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bm),e);try{const r=new Vm(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw hs(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw hs(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw hs(t,"user-disabled",o);const d=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ai(t,d,l);Ze(t,d)}}catch(r){if(r instanceof Ft)throw r;Ze(t,"network-request-failed",{message:String(r)})}}async function jm(t,e,n,s,r={}){const i=await Sn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function dl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Pi(t.config,r):`${t.config.apiScheme}://${r}`}class Vm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(je(this.auth,"network-request-failed")),Hm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=je(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Wm(t,e){return Sn(t,"POST","/v1/accounts:delete",e)}async function fl(t,e){return Sn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Un(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zm(t,e=!1){const n=sn(t),s=await n.getIdToken(e),r=xi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Un(Cr(r.auth_time)),issuedAtTime:Un(Cr(r.iat)),expirationTime:Un(Cr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Cr(t){return Number(t)*1e3}function xi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const r=Yc(n);return r?JSON.parse(r):(ys("Failed to decode base64 JWT payload"),null)}catch(r){return ys("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ra(t){const e=xi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ft&&Km(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Km({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Yr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Un(this.lastLoginAt),this.creationTime=Un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ls(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gn(t,fl(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hl(i.providerUserInfo):[],c=Jm(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=a?l:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Yr(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function Gm(t){const e=sn(t);await Ls(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jm(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function hl(t){return t.map(e=>{var{providerId:n}=e,s=Ri(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Qm(t,e){const n=await ul(t,{},async()=>{const s=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=dl(t,r,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",ll.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ym(t,e){return Sn(t,"POST","/v2/accounts:revokeToken",Oi(t,e))}/**
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
 */class gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ra(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=ra(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Qm(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new gn;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
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
 */function bt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ri(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zm(this,e)}reload(){return Gm(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ls(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(it(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await Gn(this,Wm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,c,a,l,d;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,B=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,F=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:G,isAnonymous:q,providerData:D,stsTokenManager:Q}=n;j(O&&Q,e,"internal-error");const W=gn.fromJSON(this.name,Q);j(typeof O=="string",e,"internal-error"),bt(f,e.name),bt(p,e.name),j(typeof G=="boolean",e,"internal-error"),j(typeof q=="boolean",e,"internal-error"),bt(g,e.name),bt(S,e.name),bt(A,e.name),bt(B,e.name),bt(F,e.name),bt(N,e.name);const R=new at({uid:O,auth:e,email:p,emailVerified:G,displayName:f,isAnonymous:q,photoURL:S,phoneNumber:g,tenantId:A,stsTokenManager:W,createdAt:F,lastLoginAt:N});return D&&Array.isArray(D)&&(R.providerData=D.map(V=>Object.assign({},V))),B&&(R._redirectEventId=B),R}static async _fromIdTokenResponse(e,n,s=!1){const r=new gn;r.updateFromServerResponse(n);const i=new at({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Ls(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];j(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?hl(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),c=new gn;c.updateFromIdToken(s);const a=new at({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Yr(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
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
 */const ia=new Map;function ct(t){dt(t instanceof Function,"Expected a class definition");let e=ia.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ia.set(t,e),e)}/**
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
 */class pl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}pl.type="NONE";const oa=pl;/**
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
 */function ws(t,e,n){return`firebase:${t}:${e}:${n}`}class mn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ws(this.userKey,r.apiKey,i),this.fullPersistenceKey=ws("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new mn(ct(oa),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ct(oa);const o=ws(s,e.config.apiKey,e.name);let c=null;for(const l of n)try{const d=await l._get(o);if(d){const f=at._fromJSON(e,d);l!==i&&(c=f),i=l;break}}catch{}const a=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new mn(i,e,s):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new mn(i,e,s))}}/**
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
 */function aa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bl(e))return"Blackberry";if(yl(e))return"Webos";if(Li(e))return"Safari";if((e.includes("chrome/")||ml(e))&&!e.includes("edge/"))return"Chrome";if(vl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function gl(t=Te()){return/firefox\//i.test(t)}function Li(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ml(t=Te()){return/crios\//i.test(t)}function _l(t=Te()){return/iemobile/i.test(t)}function vl(t=Te()){return/android/i.test(t)}function bl(t=Te()){return/blackberry/i.test(t)}function yl(t=Te()){return/webos/i.test(t)}function sr(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xm(t=Te()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zm(){return gg()&&document.documentMode===10}function wl(t=Te()){return sr(t)||vl(t)||yl(t)||bl(t)||/windows phone/i.test(t)||_l(t)}function e0(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Il(t,e=[]){let n;switch(t){case"Browser":n=aa(Te());break;case"Worker":n=`${aa(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${s}`}/**
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
 */class t0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function n0(t,e={}){return Sn(t,"GET","/v2/passwordPolicy",Oi(t,e))}/**
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
 */const s0=6;class r0{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:s0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(r=a.containsLowercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class i0{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ca(this),this.idTokenSubscription=new ca(this),this.beforeStateQueue=new t0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ct(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await mn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fl(this,{idToken:e}),s=await at._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(it(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=r==null?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ls(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(it(this.app))return Promise.reject(Xt(this));const n=e?sn(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return it(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return it(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ct(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await n0(this),n=new r0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Ym(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ct(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await mn.create(this,[ct(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,r);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Il(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return sn(t)}class ca{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ig(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ni={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function o0(t){Ni=t}function a0(t){return Ni.loadJS(t)}function c0(){return Ni.gapiScript}function l0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function u0(t,e){const n=sl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ps(i,e??{}))return r;Ze(r,"already-initialized")}return n.initialize({options:e})}function d0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ct);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function f0(t,e,n){const s=rr(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=El(e),{host:o,port:c}=h0(e),a=c===null?"":`:${c}`;s.config.emulator={url:`${i}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),p0()}function El(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function h0(t){const e=El(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:la(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:la(o)}}}function la(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Sl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
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
 */async function _n(t,e){return jm(t,"POST","/v1/accounts:signInWithIdp",Oi(t,e))}/**
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
 */const g0="http://localhost";class en extends Sl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new en(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ri(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new en(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _n(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_n(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_n(e,n)}buildRequest(){const e={requestUri:g0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
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
 */class Mi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends Mi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ct extends ns{constructor(){super("facebook.com")}static credential(e){return en._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ct.credential(e.oauthAccessToken)}catch{return null}}}Ct.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ct.PROVIDER_ID="facebook.com";/**
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
 */class rt extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return en._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return rt.credential(n,s)}catch{return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Tt extends ns{constructor(){super("github.com")}static credential(e){return en._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tt.credential(e.oauthAccessToken)}catch{return null}}}Tt.GITHUB_SIGN_IN_METHOD="github.com";Tt.PROVIDER_ID="github.com";/**
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
 */class Rt extends ns{constructor(){super("twitter.com")}static credential(e,n){return en._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.TWITTER_SIGN_IN_METHOD="twitter.com";Rt.PROVIDER_ID="twitter.com";/**
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
 */class In{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await at._fromIdTokenResponse(e,s,r),o=ua(s);return new In({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=ua(s);return new In({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function ua(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ns extends Ft{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ns(e,n,s,r)}}function Cl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ns._fromErrorAndOperation(t,i,e,s):i})}async function m0(t,e,n=!1){const s=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",s)}/**
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
 */async function _0(t,e,n=!1){const{auth:s}=t;if(it(s.app))return Promise.reject(Xt(s));const r="reauthenticate";try{const i=await Gn(t,Cl(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=xi(i.idToken);j(o,s,"internal-error");const{sub:c}=o;return j(t.uid===c,s,"user-mismatch"),In._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),i}}/**
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
 */async function v0(t,e,n=!1){if(it(t.app))return Promise.reject(Xt(t));const s="signIn",r=await Cl(t,s,e),i=await In._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function b0(t,e,n,s){return sn(t).onIdTokenChanged(e,n,s)}function y0(t,e,n){return sn(t).beforeAuthStateChanged(e,n)}function w0(t){return sn(t).signOut()}const Ms="__sak";/**
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
 */class Tl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ms,"1"),this.storage.removeItem(Ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function I0(){const t=Te();return Li(t)||sr(t)}const E0=1e3,S0=10;class Rl extends Tl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=I0()&&e0(),this.fallbackToPolling=wl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,S0):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const C0=Rl;/**
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
 */class Al extends Tl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Al.type="SESSION";const kl=Al;/**
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
 */function T0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ir(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await T0(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
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
 */function Di(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class R0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=Di("",20);r.port1.start();const d=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(d),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ye(){return window}function A0(t){Ye().location.href=t}/**
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
 */function Pl(){return typeof Ye().WorkerGlobalScope<"u"&&typeof Ye().importScripts=="function"}async function k0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function P0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function O0(){return Pl()?self:null}/**
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
 */const Ol="firebaseLocalStorageDb",x0=1,Ds="firebaseLocalStorage",xl="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function or(t,e){return t.transaction([Ds],e?"readwrite":"readonly").objectStore(Ds)}function L0(){const t=indexedDB.deleteDatabase(Ol);return new ss(t).toPromise()}function Xr(){const t=indexedDB.open(Ol,x0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ds,{keyPath:xl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ds)?e(s):(s.close(),await L0(),e(await Xr()))})})}async function da(t,e,n){const s=or(t,!0).put({[xl]:e,value:n});return new ss(s).toPromise()}async function N0(t,e){const n=or(t,!1).get(e),s=await new ss(n).toPromise();return s===void 0?null:s.value}function fa(t,e){const n=or(t,!0).delete(e);return new ss(n).toPromise()}const M0=800,D0=3;class Ll{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>D0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(O0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await k0(),!this.activeServiceWorker)return;this.sender=new R0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||P0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xr();return await da(e,Ms,"1"),await fa(e,Ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>da(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>N0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=or(r,!1).getAll();return new ss(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ll.type="LOCAL";const U0=Ll;new ts(3e4,6e4);/**
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
 */function Nl(t,e){return e?ct(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ui extends Sl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _n(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _n(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _n(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $0(t){return v0(t.auth,new Ui(t),t.bypassAuthState)}function F0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),_0(n,new Ui(t),t.bypassAuthState)}async function B0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),m0(n,new Ui(t),t.bypassAuthState)}/**
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
 */class Ml{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $0;case"linkViaPopup":case"linkViaRedirect":return B0;case"reauthViaPopup":case"reauthViaRedirect":return F0;default:Ze(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H0=new ts(2e3,1e4);async function j0(t,e,n){if(it(t.app))return Promise.reject(je(t,"operation-not-supported-in-this-environment"));const s=rr(t);Dm(t,e,Mi);const r=Nl(s,n);return new Gt(s,"signInViaPopup",e,r).executeNotNull()}class Gt extends Ml{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Gt.currentPopupAction&&Gt.currentPopupAction.cancel(),Gt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=Di();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(je(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(je(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(je(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H0.get())};e()}}Gt.currentPopupAction=null;/**
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
 */const V0="pendingRedirect",Is=new Map;class W0 extends Ml{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Is.get(this.auth._key());if(!e){try{const s=await z0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Is.set(this.auth._key(),e)}return this.bypassAuthState||Is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function z0(t,e){const n=G0(e),s=q0(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function K0(t,e){Is.set(t._key(),e)}function q0(t){return ct(t._redirectPersistence)}function G0(t){return ws(V0,t.config.apiKey,t.name)}async function J0(t,e,n=!1){if(it(t.app))return Promise.reject(Xt(t));const s=rr(t),r=Nl(s,e),o=await new W0(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Q0=10*60*1e3;class Y0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Dl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(je(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(ha(e))}saveEventToCache(e){this.cachedEventUids.add(ha(e)),this.lastProcessedEventTime=Date.now()}}function ha(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Dl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dl(t);default:return!1}}/**
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
 */async function Z0(t,e={}){return Sn(t,"GET","/v1/projects",e)}/**
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
 */const e_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t_=/^https?/;async function n_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z0(t);for(const n of e)try{if(s_(n))return}catch{}Ze(t,"unauthorized-domain")}function s_(t){const e=Qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!t_.test(n))return!1;if(e_.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const r_=new ts(3e4,6e4);function pa(){const t=Ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function i_(t){return new Promise((e,n)=>{var s,r,i;function o(){pa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pa(),n(je(t,"network-request-failed"))},timeout:r_.get()})}if(!((r=(s=Ye().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ye().gapi)===null||i===void 0)&&i.load)o();else{const c=l0("iframefcb");return Ye()[c]=()=>{gapi.load?o():n(je(t,"network-request-failed"))},a0(`${c0()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw Es=null,e})}let Es=null;function o_(t){return Es=Es||i_(t),Es}/**
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
 */const a_=new ts(5e3,15e3),c_="__/auth/iframe",l_="emulator/auth/iframe",u_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},d_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function f_(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pi(e,l_):`https://${t.config.authDomain}/${c_}`,s={apiKey:e.apiKey,appName:t.name,v:es},r=d_.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Zn(s).slice(1)}`}async function h_(t){const e=await o_(t),n=Ye().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:f_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:u_,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=je(t,"network-request-failed"),c=Ye().setTimeout(()=>{i(o)},a_.get());function a(){Ye().clearTimeout(c),r(s)}s.ping(a).then(a,()=>{i(o)})}))}/**
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
 */const p_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},g_=500,m_=600,__="_blank",v_="http://localhost";class ga{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function b_(t,e,n,s=g_,r=m_){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const a=Object.assign(Object.assign({},p_),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Te().toLowerCase();n&&(c=ml(l)?__:n),gl(l)&&(e=e||v_,a.scrollbars="yes");const d=Object.entries(a).reduce((p,[g,S])=>`${p}${g}=${S},`,"");if(Xm(l)&&c!=="_self")return y_(e||"",c),new ga(null);const f=window.open(e||"",c,d);j(f,t,"popup-blocked");try{f.focus()}catch{}return new ga(f)}function y_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const w_="__/auth/handler",I_="emulator/auth/handler",E_=encodeURIComponent("fac");async function ma(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:es,eventId:r};if(e instanceof Mi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries({}))o[d]=f}if(e instanceof ns){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const a=await t._getAppCheckToken(),l=a?`#${E_}=${encodeURIComponent(a)}`:"";return`${S_(t)}?${Zn(c).slice(1)}${l}`}function S_({config:t}){return t.emulator?Pi(t,I_):`https://${t.authDomain}/${w_}`}/**
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
 */const Tr="webStorageSupport";class C_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kl,this._completeRedirectFn=J0,this._overrideRedirectResult=K0}async _openPopup(e,n,s,r){var i;dt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ma(e,n,s,Qr(),r);return b_(e,o,Di())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await ma(e,n,s,Qr(),r);return A0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(dt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await h_(e),s=new Y0(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Tr,{type:Tr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Tr];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return wl()||Li()||sr()}}const T_=C_;var _a="@firebase/auth",va="1.7.5";/**
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
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function A_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k_(t){Kn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Il(t)},l=new i0(s,r,i,a);return d0(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new wn("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(s=>new R_(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(_a,va,A_(t)),pn(_a,va,"esm2017")}/**
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
 */const P_=5*60,O_=Zc("authIdTokenMaxAge")||P_;let ba=null;const x_=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>O_)return;const r=n==null?void 0:n.token;ba!==r&&(ba=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function L_(t=Im()){const e=sl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=u0(t,{popupRedirectResolver:T_,persistence:[U0,C0,kl]}),s=Zc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=x_(i.toString());y0(n,o,()=>o(n.currentUser)),b0(n,c=>o(c))}}const r=ug("auth");return r&&f0(n,`http://${r}`),n}function N_(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}o0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=je("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",N_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k_("Browser");const M_={apiKey:"AIzaSyCC64Nn4jBqVsSnEkyRXk_2XGTzwL2VDFM",authDomain:"scissortool.firebaseapp.com",projectId:"scissortool",storageBucket:"scissortool.appspot.com",messagingSenderId:"881658314273",appId:"1:881658314273:web:1bdcd991530b9d36a76d60"},D_=rl(M_),U_=new rt,ya=L_(D_),$_=xc("authentication",()=>{const t=ht(),e=He(null),n=He(!1),s=localStorage.getItem("userData"),r=Ce(()=>{var l;return s?JSON.parse(s).displayName.split(" ")[0]:(l=e.value)==null?void 0:l.displayName.split(" ")[0]}),i=Ce(()=>{var l;return s?JSON.parse(s).email:(l=e.value)==null?void 0:l.email}),o=Ce(()=>{var l;return s?JSON.parse(s).photoURL:(l=e.value)==null?void 0:l.photoURL}),c=async()=>{try{const l=await j0(ya,U_);return e.value=l.user,localStorage.setItem("userData",JSON.stringify(e.value)),Zr.push("/dashboard"),n.value=!0,t.toggleAuthentication(),e.value}catch{return null}},a=async()=>{try{return w0(ya),e.value=null,localStorage.removeItem("userData"),Zr.push("/"),n.value=!1,t.isUserMenuOpen=!1,e.value}catch{return null}};return{userData:Ce(()=>e.value),isLoggedIn:n,signIn:c,logOut:a,username:r,userEmail:i,userImage:o}}),F_=t=>(tn("data-v-d6525ea9"),t=t(),nn(),t),B_={key:0,class:"authentication-container"},H_=F_(()=>L("img",{src:ng,alt:" escape"},null,-1)),j_=[H_],V_=Me({__name:"Authentication",setup(t){const e=$_(),n=ht();return(s,r)=>(pe(),Ys(Yn,{name:"authentication",mode:"out-in"},{default:vn(()=>[ae(n).isAuthenticationOpen===!0?(pe(),Ie("div",B_,[L("button",{class:"close-btn",onClick:r[0]||(r[0]=i=>ae(n).toggleAuthentication())},j_),L("button",{class:"authentication-button",onClick:r[1]||(r[1]=i=>ae(e).signIn())}," SignUp or Login with Google ")])):ut("",!0)]),_:1}))}}),W_=et(V_,[["__scopeId","data-v-d6525ea9"]]),z_=Me({__name:"Home",setup(t){return(e,n)=>(pe(),Ie("section",null,[oe(Hh),oe(Qp),oe(op),oe(gp),oe(Np),oe(Bp),oe(tg),oe(W_)]))}}),K_=et(z_,[["__scopeId","data-v-89d282cb"]]),Zr=Ih({history:Xf("/"),routes:[{path:"/",name:"home",component:K_},{path:"/dashboard",name:"dashboard",component:()=>Rh(()=>import("./Dashboard-CQN9pLV6.js"),__vite__mapDeps([0,1]))}]}),$i=ff(Sh);$i.use(mf());$i.use(Zr);$i.mount(".root-container");export{Yn as T,et as _,Me as a,L as b,Ie as c,xc as d,Sc as e,nn as f,ht as g,oe as h,$_ as i,Ys as j,vn as k,ut as l,Bu as m,Zr as n,pe as o,tn as p,q_ as q,He as r,kn as s,Rr as t,ae as u,G_ as w};
