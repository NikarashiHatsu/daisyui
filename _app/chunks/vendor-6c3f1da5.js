function h(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function O(t){return t()}function C(){return Object.create(null)}function b(t){t.forEach(O)}function Q(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let x;function _t(t,e){return x||(x=document.createElement("a")),x.href=e,t===x.href}function V(t){return Object.keys(t).length===0}function X(t,...e){if(t==null)return h;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function gt(t,e,n){t.$$.on_destroy.push(X(e,n))}function pt(t,e,n,i){if(t){const l=z(t,e,n,i);return t[0](l)}}function z(t,e,n,i){return t[1]&&i?K(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],c=Math.max(e.dirty.length,l.length);for(let o=0;o<c;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function yt(t,e,n,i,l,s){if(l){const c=z(e,n,i,s);t.p(c,l)}}function xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function St(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let w=!1;function Y(){w=!0}function Z(){w=!1}function tt(t,e,n,i){for(;t<e;){const l=t+(e-t>>1);n(l)<=i?t=l+1:e=l}return t}function et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&r.push(u)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let l=0;for(let r=0;r<e.length;r++){const a=e[r].claim_order,u=(l>0&&e[n[l]].claim_order<=a?l+1:tt(1,l,y=>e[n[y]].claim_order,a))-1;i[r]=n[u]+1;const f=u+1;n[f]=r,l=Math.max(f,l)}const s=[],c=[];let o=e.length-1;for(let r=n[l]+1;r!=0;r=i[r-1]){for(s.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);s.reverse(),c.sort((r,a)=>r.claim_order-a.claim_order);for(let r=0,a=0;r<c.length;r++){for(;a<s.length&&c[r].claim_order>=s[a].claim_order;)a++;const u=a<s.length?s[a]:null;t.insertBefore(c[r],u)}}function nt(t,e){if(w){for(et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function it(t,e,n){t.insertBefore(e,n||null)}function ct(t,e,n){w&&!n?nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function ot(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Et(){return I(" ")}function vt(){return I("")}function wt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,l=!1){G(t);const s=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,l?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function F(t,e,n,i){return P(t,l=>l.nodeName===e,l=>{const s=[];for(let c=0;c<l.attributes.length;c++){const o=l.attributes[c];n[o.name]||s.push(o.name)}s.forEach(c=>l.removeAttribute(c))},()=>i(e))}function qt(t,e,n){return F(t,e,n,D)}function Lt(t,e,n){return F(t,e,n,ot)}function lt(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Tt(t){return lt(t," ")}function j(t,e,n){for(let i=n;i<t.length;i+=1){const l=t[i];if(l.nodeType===8&&l.textContent.trim()===e)return i}return t.length}function It(t){const e=j(t,"HTML_TAG_START",0),n=j(t,"HTML_TAG_END",e);if(e===n)return new M;G(t);const i=t.splice(e,n-e+1);v(i[0]),v(i[i.length-1]);const l=i.slice(1,i.length-1);for(const s of l)s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new M(l)}function kt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Nt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e=document.body){return Array.from(e.querySelectorAll(t))}class at{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=D(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)it(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}class M extends at{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)ct(this.t,this.n[n],e)}}let p;function g(t){p=t}function $(){if(!p)throw new Error("Function called outside component initialization");return p}function Mt(t){$().$$.on_mount.push(t)}function Ht(t){$().$$.after_update.push(t)}function Bt(t,e){$().$$.context.set(t,e)}function Ot(t){return $().$$.context.get(t)}const _=[],H=[],A=[],B=[],R=Promise.resolve();let L=!1;function W(){L||(L=!0,R.then(J))}function zt(){return W(),R}function T(t){A.push(t)}const q=new Set;let S=0;function J(){const t=p;do{for(;S<_.length;){const e=_[S];S++,g(e),st(e.$$)}for(g(null),_.length=0,S=0;H.length;)H.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];q.has(n)||(q.add(n),n())}A.length=0}while(_.length);for(;B.length;)B.pop()();L=!1,q.clear(),g(t)}function st(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const E=new Set;let d;function Dt(){d={r:0,c:[],p:d}}function Gt(){d.r||b(d.c),d=d.p}function ut(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function Ft(t,e){const n={},i={},l={$$scope:1};let s=t.length;for(;s--;){const c=t[s],o=e[s];if(o){for(const r in c)r in o||(i[r]=1);for(const r in o)l[r]||(n[r]=o[r],l[r]=1);t[s]=o}else for(const r in c)l[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function Rt(t){return typeof t=="object"&&t!==null?t:{}}function Wt(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function ft(t,e,n,i){const{fragment:l,on_mount:s,on_destroy:c,after_update:o}=t.$$;l&&l.m(e,n),i||T(()=>{const r=s.map(O).filter(Q);c?c.push(...r):b(r),t.$$.on_mount=[]}),o.forEach(T)}function dt(t,e){const n=t.$$;n.fragment!==null&&(b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){t.$$.dirty[0]===-1&&(_.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,l,s,c,o=[-1]){const r=p;g(t);const a=t.$$={fragment:null,ctx:null,props:s,update:h,not_equal:l,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:C(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};c&&c(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(f,y,...k)=>{const N=k.length?k[0]:y;return a.ctx&&l(a.ctx[f],a.ctx[f]=N)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](N),u&&mt(t,f)),y}):[],a.update(),u=!0,b(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){Y();const f=rt(e.target);a.fragment&&a.fragment.l(f),f.forEach(v)}else a.fragment&&a.fragment.c();e.intro&&ut(t.$$.fragment),ft(t,e.target,e.anchor,e.customElement),Z(),J()}g(r)}class Qt{$destroy(){dt(this,1),this.$destroy=h}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!V(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const m=[];function Ut(t,e=h){let n;const i=new Set;function l(o){if(U(t,o)&&(t=o,n)){const r=!m.length;for(const a of i)a[1](),m.push(a,t);if(r){for(let a=0;a<m.length;a+=2)m[a][0](m[a+1]);m.length=0}}}function s(o){l(o(t))}function c(o,r=h){const a=[o,r];return i.add(a),i.size===1&&(n=e(l)||h),o(t),()=>{i.delete(a),i.size===0&&(n(),n=null)}}return{set:l,update:s,subscribe:c}}var Vt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ht={exports:{}};(function(t,e){function n(){var c=document.querySelector("[data-toggle-theme]");(function(o=localStorage.getItem("theme")){localStorage.getItem("theme")&&(document.documentElement.setAttribute("data-theme",o),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(r=>{r.classList.add(c.getAttribute("data-act-class"))}))})(),c&&[...document.querySelectorAll("[data-toggle-theme]")].forEach(o=>{o.addEventListener("click",function(){var r=o.getAttribute("data-toggle-theme");if(r){var a=r.split(",");document.documentElement.getAttribute("data-theme")==a[0]?a.length==1?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("theme")):(document.documentElement.setAttribute("data-theme",a[1]),localStorage.setItem("theme",a[1])):(document.documentElement.setAttribute("data-theme",a[0]),localStorage.setItem("theme",a[0]))}[...document.querySelectorAll("[data-toggle-theme]")].forEach(u=>{u.classList.toggle(this.getAttribute("data-act-class"))})})})}function i(){(function(c=localStorage.getItem("theme")){if(c!=null&&c!="")if(localStorage.getItem("theme")&&localStorage.getItem("theme")!=""){document.documentElement.setAttribute("data-theme",c);var o=document.querySelector("[data-set-theme='"+c.toString()+"']");o&&([...document.querySelectorAll("[data-set-theme]")].forEach(r=>{r.classList.remove(r.getAttribute("data-act-class"))}),o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class")))}else{var o=document.querySelector("[data-set-theme='']");o.getAttribute("data-act-class")&&o.classList.add(o.getAttribute("data-act-class"))}})(),[...document.querySelectorAll("[data-set-theme]")].forEach(c=>{c.addEventListener("click",function(){document.documentElement.setAttribute("data-theme",this.getAttribute("data-set-theme")),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("[data-set-theme]")].forEach(o=>{o.classList.remove(o.getAttribute("data-act-class"))}),c.getAttribute("data-act-class")&&c.classList.add(c.getAttribute("data-act-class"))})})}function l(){(function(c=localStorage.getItem("theme")){if(localStorage.getItem("theme")){document.documentElement.setAttribute("data-theme",c);var o=document.querySelector("select[data-choose-theme] [value='"+c.toString()+"']");o&&[...document.querySelectorAll("select[data-choose-theme] [value='"+c.toString()+"']")].forEach(r=>{r.selected=!0})}})(),document.querySelector("select[data-choose-theme]")&&[...document.querySelectorAll("select[data-choose-theme]")].forEach(c=>{c.addEventListener("change",function(){document.documentElement.setAttribute("data-theme",this.value),localStorage.setItem("theme",document.documentElement.getAttribute("data-theme")),[...document.querySelectorAll("select[data-choose-theme] [value='"+localStorage.getItem("theme")+"']")].forEach(o=>{o.selected=!0})})})}function s(c=!0){c===!0?document.addEventListener("DOMContentLoaded",function(o){n(),l(),i()}):(n(),l(),i())}t.exports={themeChange:s}})(ht);export{M as $,Rt as A,dt as B,K as C,Ut as D,zt as E,ot as F,Lt as G,nt as H,gt as I,jt as J,h as K,_t as L,wt as M,Q as N,At as O,b as P,H as Q,pt as R,Qt as S,yt as T,xt as U,bt as V,Ot as W,ht as X,Ct as Y,Vt as Z,St as _,rt as a,It as a0,$t as b,qt as c,v as d,D as e,Nt as f,ct as g,lt as h,Kt as i,kt as j,Et as k,vt as l,Tt as m,Dt as n,Pt as o,Gt as p,ut as q,Bt as r,U as s,I as t,Ht as u,Mt as v,Wt as w,Jt as x,ft as y,Ft as z};