import{bQ as s,aM as g,bt as m,aL as o,aN as b,bR as d,bf as S,bv as y,bh as P,bS as w,D as O}from"./index-ClR9mido.js";function x(n){return n}function T(n,e,t){switch(t.length){case 0:return n.call(e);case 1:return n.call(e,t[0]);case 2:return n.call(e,t[0],t[1]);case 3:return n.call(e,t[0],t[1],t[2])}return n.apply(e,t)}var A=800,I=16,E=Date.now;function N(n){var e=0,t=0;return function(){var a=E(),r=I-(a-t);if(t=a,r>0){if(++e>=A)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function C(n){return function(){return n}}var L=s?function(n,e){return s(n,"toString",{configurable:!0,enumerable:!1,value:C(e),writable:!0})}:x,M=N(L),f=Math.max;function R(n,e,t){return e=f(e===void 0?n.length-1:e,0),function(){for(var a=arguments,r=-1,i=f(a.length-e,0),u=Array(i);++r<i;)u[r]=a[e+r];r=-1;for(var l=Array(e+1);++r<e;)l[r]=a[r];return l[e]=t(u),T(n,this,l)}}var _=9007199254740991;function k(n){return typeof n=="number"&&n>-1&&n%1==0&&n<=_}var F="[object Arguments]";function c(n){return g(n)&&m(n)==F}var p=Object.prototype,G=p.hasOwnProperty,H=p.propertyIsEnumerable,v=c(function(){return arguments}())?c:function(n){return g(n)&&G.call(n,"callee")&&!H.call(n,"callee")};function D(n,e){for(var t=-1,a=e.length,r=n.length;++t<a;)n[r+t]=e[t];return n}var h=o?o.isConcatSpreadable:void 0;function z(n){return b(n)||v(n)||!!(h&&n&&n[h])}function B(n,e,t,a,r){var i=-1,u=n.length;for(t||(t=z),r||(r=[]);++i<u;){var l=n[i];t(l)?D(r,l):r[r.length]=l}return r}function K(n){var e=n==null?0:n.length;return e?B(n):[]}function Q(n){return M(R(n,void 0,K),n+"")}function U(n,e){return n!=null&&e in Object(n)}function X(n,e,t){e=d(e,n);for(var a=-1,r=e.length,i=!1;++a<r;){var u=S(e[a]);if(!(i=n!=null&&t(n,u)))break;n=n[u]}return i||++a!=r?i:(r=n==null?0:n.length,!!r&&k(r)&&y(u,r)&&(b(n)||v(n)))}function $(n,e){return n!=null&&X(n,e,U)}function q(n,e,t){for(var a=-1,r=e.length,i={};++a<r;){var u=e[a],l=P(n,u);t(l,u)&&w(i,d(u,n),l)}return i}function J(n,e){return q(n,e,function(t,a){return $(n,a)})}var V=Q(function(n,e){return n==null?{}:J(n,e)});const W=O({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Z=n=>V(W,n);export{D as a,k as b,v as c,$ as h,x as i,V as p,Z as u};
