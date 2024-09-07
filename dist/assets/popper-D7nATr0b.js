import{bB as kt,ad as B,I as R,a8 as De,J as _,x as Ke,Q as hn,aD as Oe,ah as Ft,m as f,K as bn,r as F,M as Se,bC as bt,bD as yn,bE as wn,bF as On,D as ee,G as Ze,N as Ce,R as L,y as ie,a1 as se,S as Me,a2 as le,o as Z,c as $e,n as jt,a0 as En,b6 as Je,A as _t,bG as Tn,ak as Cn,F as Rn,bH as An,bI as xn,d as Re,bJ as Dt,aZ as He,ar as Lt,v as fe,w as te,aq as Xe,Z as Ae,az as Pn,a6 as Nt,aX as yt,ai as Sn,bi as we,X as Mn,Y as Bn,aF as In,bK as kn,bL as Fn,bM as jn,t as _n}from"./index-ClR9mido.js";import{u as $t}from"./index-BCZ2JZN9.js";import{i as Dn,h as wt,f as Ln}from"./index-6DeqQRHY.js";import{E as Nn}from"./focus-trap-BVJif58M.js";const Y=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)};function $n(e){return e===void 0}const Hn=kt({type:B(Boolean),default:null}),Wn=kt({type:B(Function)}),Ht=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Hn,[n]:Wn};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:c,onHide:d})=>{const b=hn(),{emit:g}=b,m=b.props,v=R(()=>De(m[n])),E=R(()=>m[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(c)&&c(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},T=O=>{if(m.disabled===!0||De(l)&&!l())return;const x=v.value&&Oe;x&&g(t,!0),(E.value||!x)&&p(O)},h=O=>{if(m.disabled===!0||!Oe)return;const x=v.value&&Oe;x&&g(t,!1),(E.value||!x)&&w(O)},C=O=>{Ft(O)&&(m.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?p():w()))},A=()=>{i.value?h():T()};return _(()=>m[e],C),s&&b.appContext.config.globalProperties.$route!==void 0&&_(()=>({...b.proxy.$route}),()=>{s.value&&i.value&&h()}),Ke(()=>{C(m[e])}),{hide:h,show:T,toggle:A,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};Ht("modelValue");var H="top",q="bottom",z="right",W="left",Ye="auto",Be=[H,q,z,W],ce="start",xe="end",Kn="clippingParents",Wt="viewport",ye="popper",qn="reference",Ot=Be.reduce(function(e,t){return e.concat([t+"-"+ce,t+"-"+xe])},[]),Qe=[].concat(Be,[Ye]).reduce(function(e,t){return e.concat([t,t+"-"+ce,t+"-"+xe])},[]),zn="beforeRead",Un="read",Vn="afterRead",Zn="beforeMain",Jn="main",Gn="afterMain",Xn="beforeWrite",Yn="write",Qn="afterWrite",eo=[zn,Un,Vn,Zn,Jn,Gn,Xn,Yn,Qn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function K(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function et(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function to(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!K(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function no(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=i.reduce(function(s,l){return s[l]="",s},{});!K(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var Kt={name:"applyStyles",enabled:!0,phase:"write",fn:to,effect:no,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(K(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=ve(n.width)/i||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function tt(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function qt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&et(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Q(e){return U(e).getComputedStyle(e)}function oo(e){return["table","td","th"].indexOf(G(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function qe(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||ne(e)}function Et(e){return!K(e)||Q(e).position==="fixed"?null:e.offsetParent}function ro(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&K(e)){var o=Q(e);if(o.position==="fixed")return null}var r=qe(e);for(et(r)&&(r=r.host);K(r)&&["html","body"].indexOf(G(r))<0;){var a=Q(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Ie(e){for(var t=U(e),n=Et(e);n&&oo(n)&&Q(n).position==="static";)n=Et(n);return n&&(G(n)==="html"||G(n)==="body"&&Q(n).position==="static")?t:n||ro(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,n){return ae(e,We(t,n))}function ao(e,t,n){var o=Ee(e,t,n);return o>n?n:o}function zt(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},zt(),e)}function Vt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var io=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ut(typeof e!="number"?e:Vt(e,Be))};function so(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,u=J(n.placement),s=nt(u),l=[W,z].indexOf(u)>=0,c=l?"height":"width";if(!(!a||!i)){var d=io(r.padding,n),b=tt(a),g=s==="y"?H:W,m=s==="y"?q:z,v=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],E=i[s]-n.rects.reference[s],p=Ie(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,T=v/2-E/2,h=d[g],C=w-b[c]-d[m],A=w/2-b[c]/2+T,O=Ee(h,A,C),x=s;n.modifiersData[o]=(t={},t[x]=O,t.centerOffset=O-A,t)}}function lo(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!qt(t.elements.popper,r)||(t.elements.arrow=r))}var uo={name:"arrow",enabled:!0,phase:"main",fn:so,effect:lo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var po={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fo(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Tt(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,d=e.isFixed,b=i.x,g=b===void 0?0:b,m=i.y,v=m===void 0?0:m,E=typeof c=="function"?c({x:g,y:v}):{x:g,y:v};g=E.x,v=E.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),T=W,h=H,C=window;if(l){var A=Ie(n),O="clientHeight",x="clientWidth";if(A===U(n)&&(A=ne(n),Q(A).position!=="static"&&u==="absolute"&&(O="scrollHeight",x="scrollWidth")),A=A,r===H||(r===W||r===z)&&a===xe){h=q;var k=d&&A===C&&C.visualViewport?C.visualViewport.height:A[O];v-=k-o.height,v*=s?1:-1}if(r===W||(r===H||r===q)&&a===xe){T=z;var P=d&&A===C&&C.visualViewport?C.visualViewport.width:A[x];g-=P-o.width,g*=s?1:-1}}var M=Object.assign({position:u},l&&po),D=c===!0?fo({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},M,(S={},S[h]=w?"0":"",S[T]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},M,(t={},t[h]=w?v+"px":"",t[T]=p?g+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,u=n.roundOffsets,s=u===void 0?!0:u,l={placement:J(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Tt(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Tt(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function vo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,u=i===void 0?!0:i,s=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",n.update,Le)}),u&&s.addEventListener("resize",n.update,Le),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",n.update,Le)}),u&&s.removeEventListener("resize",n.update,Le)}}var Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vo,data:{}},go={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return go[t]})}var mo={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return mo[t]})}function ot(e){var t=U(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function rt(e){return ge(ne(e)).left+ot(e).scrollLeft}function ho(e){var t=U(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:i+rt(e),y:u}}function bo(e){var t,n=ne(e),o=ot(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+rt(e),s=-o.scrollTop;return Q(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function at(e){var t=Q(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Gt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:K(e)&&at(e)?e:Gt(qe(e))}function Te(e,t){var n;t===void 0&&(t=[]);var o=Gt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=U(o),i=r?[a].concat(a.visualViewport||[],at(o)?o:[]):o,u=t.concat(i);return r?u:u.concat(Te(qe(i)))}function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function yo(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Rt(e,t){return t===Wt?Ge(ho(e)):de(t)?yo(t):Ge(bo(ne(e)))}function wo(e){var t=Te(qe(e)),n=["absolute","fixed"].indexOf(Q(e).position)>=0,o=n&&K(e)?Ie(e):e;return de(o)?t.filter(function(r){return de(r)&&qt(r,o)&&G(r)!=="body"}):[]}function Oo(e,t,n){var o=t==="clippingParents"?wo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(u,s){var l=Rt(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Rt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Xt(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,a=o?me(o):null,i=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,s;switch(r){case H:s={x:i,y:t.y-n.height};break;case q:s={x:i,y:t.y+t.height};break;case z:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-n.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?nt(r):null;if(l!=null){var c=l==="y"?"height":"width";switch(a){case ce:s[l]=s[l]-(t[c]/2-n[c]/2);break;case xe:s[l]=s[l]+(t[c]/2-n[c]/2);break}}return s}function Pe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?Kn:a,u=n.rootBoundary,s=u===void 0?Wt:u,l=n.elementContext,c=l===void 0?ye:l,d=n.altBoundary,b=d===void 0?!1:d,g=n.padding,m=g===void 0?0:g,v=Ut(typeof m!="number"?m:Vt(m,Be)),E=c===ye?qn:ye,p=e.rects.popper,w=e.elements[b?E:c],T=Oo(de(w)?w:w.contextElement||ne(e.elements.popper),i,s),h=ge(e.elements.reference),C=Xt({reference:h,element:p,strategy:"absolute",placement:r}),A=Ge(Object.assign({},p,C)),O=c===ye?A:h,x={top:T.top-O.top+v.top,bottom:O.bottom-T.bottom+v.bottom,left:T.left-O.left+v.left,right:O.right-T.right+v.right},k=e.modifiersData.offset;if(c===ye&&k){var P=k[r];Object.keys(x).forEach(function(M){var D=[z,q].indexOf(M)>=0?1:-1,S=[H,q].indexOf(M)>=0?"y":"x";x[M]+=P[S]*D})}return x}function Eo(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,u=n.flipVariations,s=n.allowedAutoPlacements,l=s===void 0?Qe:s,c=me(o),d=c?u?Ot:Ot.filter(function(m){return me(m)===c}):Be,b=d.filter(function(m){return l.indexOf(m)>=0});b.length===0&&(b=d);var g=b.reduce(function(m,v){return m[v]=Pe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[J(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function To(e){if(J(e)===Ye)return[];var t=Ne(e);return[Ct(e),t,Ct(t)]}function Co(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!0:i,s=n.fallbackPlacements,l=n.padding,c=n.boundary,d=n.rootBoundary,b=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,v=n.allowedAutoPlacements,E=t.options.placement,p=J(E),w=p===E,T=s||(w||!m?[Ne(E)]:To(E)),h=[E].concat(T).reduce(function(oe,X){return oe.concat(J(X)===Ye?Eo(t,{placement:X,boundary:c,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,A=t.rects.popper,O=new Map,x=!0,k=h[0],P=0;P<h.length;P++){var M=h[P],D=J(M),S=me(M)===ce,N=[H,q].indexOf(D)>=0,j=N?"width":"height",I=Pe(t,{placement:M,boundary:c,rootBoundary:d,altBoundary:b,padding:l}),y=N?S?z:W:S?q:H;C[j]>A[j]&&(y=Ne(y));var $=Ne(y),V=[];if(a&&V.push(I[D]<=0),u&&V.push(I[y]<=0,I[$]<=0),V.every(function(oe){return oe})){k=M,x=!1;break}O.set(M,V)}if(x)for(var ke=m?3:1,ze=function(oe){var X=h.find(function(je){var be=O.get(je);if(be)return be.slice(0,oe).every(function(ue){return ue})});if(X)return k=X,"break"},he=ke;he>0;he--){var Fe=ze(he);if(Fe==="break")break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}}var Ro={name:"flip",enabled:!0,phase:"main",fn:Co,requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function xt(e){return[H,z,q,W].some(function(t){return e[t]>=0})}function Ao(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=Pe(t,{elementContext:"reference"}),u=Pe(t,{altBoundary:!0}),s=At(i,o),l=At(u,r,a),c=xt(s),d=xt(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var xo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ao};function Po(e,t,n){var o=J(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,z].indexOf(o)>=0?{x:u,y:i}:{x:i,y:u}}function So(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=Qe.reduce(function(c,d){return c[d]=Po(d,t.rects,a),c},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=i}var Mo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:So};function Bo(e){var t=e.state,n=e.name;t.modifiersData[n]=Xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Yt={name:"popperOffsets",enabled:!0,phase:"read",fn:Bo,data:{}};function Io(e){return e==="x"?"y":"x"}function ko(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!1:i,s=n.boundary,l=n.rootBoundary,c=n.altBoundary,d=n.padding,b=n.tether,g=b===void 0?!0:b,m=n.tetherOffset,v=m===void 0?0:m,E=Pe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:c}),p=J(t.placement),w=me(t.placement),T=!w,h=nt(p),C=Io(h),A=t.modifiersData.popperOffsets,O=t.rects.reference,x=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(A){if(a){var S,N=h==="y"?H:W,j=h==="y"?q:z,I=h==="y"?"height":"width",y=A[h],$=y+E[N],V=y-E[j],ke=g?-x[I]/2:0,ze=w===ce?O[I]:x[I],he=w===ce?-x[I]:-O[I],Fe=t.elements.arrow,oe=g&&Fe?tt(Fe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:zt(),je=X[N],be=X[j],ue=Ee(0,O[I],oe[I]),pn=T?O[I]/2-ke-ue-je-P.mainAxis:ze-ue-je-P.mainAxis,fn=T?-O[I]/2+ke+ue+be+P.mainAxis:he+ue+be+P.mainAxis,Ue=t.elements.arrow&&Ie(t.elements.arrow),cn=Ue?h==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ut=(S=M==null?void 0:M[h])!=null?S:0,dn=y+pn-ut-cn,vn=y+fn-ut,pt=Ee(g?We($,dn):$,y,g?ae(V,vn):V);A[h]=pt,D[h]=pt-y}if(u){var ft,gn=h==="x"?H:W,mn=h==="x"?q:z,re=A[C],_e=C==="y"?"height":"width",ct=re+E[gn],dt=re-E[mn],Ve=[H,W].indexOf(p)!==-1,vt=(ft=M==null?void 0:M[C])!=null?ft:0,gt=Ve?ct:re-O[_e]-x[_e]-vt+P.altAxis,mt=Ve?re+O[_e]+x[_e]-vt-P.altAxis:dt,ht=g&&Ve?ao(gt,re,mt):Ee(g?gt:ct,re,g?mt:dt);A[C]=ht,D[C]=ht-re}t.modifiersData[o]=D}}var Fo={name:"preventOverflow",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"]};function jo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function _o(e){return e===U(e)||!K(e)?ot(e):jo(e)}function Do(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Lo(e,t,n){n===void 0&&(n=!1);var o=K(t),r=K(t)&&Do(t),a=ne(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||at(a))&&(u=_o(t)),K(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=rt(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function No(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!n.has(u)){var s=t.get(u);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function $o(e){var t=No(e);return eo.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function Ho(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Wo(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function it(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?Pt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},c=[],d=!1,b={state:l,setOptions:function(v){var E=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,E),l.scrollParents={reference:de(i)?Te(i):i.contextElement?Te(i.contextElement):[],popper:Te(u)};var p=$o(Wo([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),b.update()},forceUpdate:function(){if(!d){var v=l.elements,E=v.reference,p=v.popper;if(St(E,p)){l.rects={reference:Lo(E,Ie(p),l.options.strategy==="fixed"),popper:tt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(x){return l.modifiersData[x.name]=Object.assign({},x.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var T=l.orderedModifiers[w],h=T.fn,C=T.options,A=C===void 0?{}:C,O=T.name;typeof h=="function"&&(l=h({state:l,options:A,name:O,instance:b})||l)}}}},update:Ho(function(){return new Promise(function(v){b.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!St(i,u))return b;b.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var E=v.name,p=v.options,w=p===void 0?{}:p,T=v.effect;if(typeof T=="function"){var h=T({state:l,name:E,instance:b,options:w}),C=function(){};c.push(h||C)}})}function m(){c.forEach(function(v){return v()}),c=[]}return b}}it();var Ko=[Jt,Yt,Zt,Kt];it({defaultModifiers:Ko});var qo=[Jt,Yt,Zt,Kt,Mo,Ro,Fo,uo,xo],zo=it({defaultModifiers:qo});const Uo=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Vo(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=R(()=>{const{onFirstUpdate:s,placement:l,strategy:c,modifiers:d}=f(n);return{onFirstUpdate:s,placement:l||"bottom",strategy:c||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=bn(),i=F({styles:{popper:{position:f(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return _(r,s=>{const l=f(a);l&&l.setOptions(s)},{deep:!0}),_([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=zo(s,l,f(r)))}),Se(()=>{u()}),{state:R(()=>{var s;return{...((s=f(a))==null?void 0:s.state)||{}}}),styles:R(()=>f(i).styles),attributes:R(()=>f(i).attributes),update:()=>{var s;return(s=f(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=f(a))==null?void 0:s.forceUpdate()},instanceRef:R(()=>f(a))}};function Vo(e){const t=Object.keys(e.elements),n=bt(t.map(r=>[r,e.styles[r]||{}])),o=bt(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function Mt(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return yn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let Bt;const Qt=()=>{const e=On(),t=Dn(),n=R(()=>`${e.value}-popper-container-${t.prefix}`),o=R(()=>`#${n.value}`);return{id:n,selector:o}},Zo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Jo=()=>{const{id:e,selector:t}=Qt();return wn(()=>{Oe&&!Bt&&!document.body.querySelector(t.value)&&(Bt=Zo(e.value))}),{id:e,selector:t}},Go=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Xo=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:u}=Mt();return{onOpen:c=>{a(()=>{o(c);const d=f(n);Ze(d)&&d>0&&i(()=>{r(c)},d)},f(e))},onClose:c=>{u(),a(()=>{r(c)},f(t))}}},en=Symbol("elForwardRef"),Yo=e=>{Ce(en,{setForwardRef:n=>{e.value=n}})},Qo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),tn=Symbol("popperContent"),er=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],nn=ee({role:{type:String,values:er,default:"tooltip"}}),tr=L({name:"ElPopper",inheritAttrs:!1}),nr=L({...tr,props:nn,setup(e,{expose:t}){const n=e,o=F(),r=F(),a=F(),i=F(),u=R(()=>n.role),s={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ce(st,s),(l,c)=>ie(l.$slots,"default")}});var or=se(nr,[["__file","popper.vue"]]);const on=ee({arrowOffset:{type:Number,default:5}}),rr=L({name:"ElPopperArrow",inheritAttrs:!1}),ar=L({...rr,props:on,setup(e,{expose:t}){const n=e,o=Me("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=le(tn,void 0);return _(()=>n.arrowOffset,u=>{r.value=u}),Se(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(Z(),$e("span",{ref_key:"arrowRef",ref:a,class:jt(f(o).e("arrow")),style:En(f(i)),"data-popper-arrow":""},null,6))}});var ir=se(ar,[["__file","arrow.vue"]]);const sr="ElOnlyChild",lr=L({name:sr,setup(e,{slots:t,attrs:n}){var o;const r=le(en),a=Qo((o=r==null?void 0:r.setForwardRef)!=null?o:Je);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,n);if(!u||u.length>1)return null;const s=rn(u);return s?_t(Tn(s,n),[[a]]):null}}});function rn(e){if(!e)return null;const t=e;for(const n of t){if(Cn(n))switch(n.type){case xn:continue;case An:case"svg":return It(n);case Rn:return rn(n.children);default:return n}return It(n)}return null}function It(e){const t=Me("only-child");return Re("span",{class:t.e("content")},[e])}const an=ee({virtualRef:{type:B(Object)},virtualTriggering:Boolean,onMouseenter:{type:B(Function)},onMouseleave:{type:B(Function)},onClick:{type:B(Function)},onKeydown:{type:B(Function)},onFocus:{type:B(Function)},onBlur:{type:B(Function)},onContextmenu:{type:B(Function)},id:String,open:Boolean}),ur=L({name:"ElPopperTrigger",inheritAttrs:!1}),pr=L({...ur,props:an,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(st,void 0);Yo(r);const a=R(()=>u.value?n.id:void 0),i=R(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=R(()=>{if(o&&o.value!=="tooltip")return o.value}),s=R(()=>u.value?`${n.open}`:void 0);let l;return Ke(()=>{_(()=>n.virtualRef,c=>{c&&(r.value=Dt(c))},{immediate:!0}),_(r,(c,d)=>{l==null||l(),l=void 0,He(c)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(b=>{var g;const m=n[b];m&&(c.addEventListener(b.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,b.slice(2).toLowerCase(),m))}),l=_([a,i,u,s],b=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{Lt(b[m])?c.removeAttribute(g):c.setAttribute(g,b[m])})},{immediate:!0})),He(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(b=>d.removeAttribute(b))},{immediate:!0})}),Se(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(c,d)=>c.virtualTriggering?Ae("v-if",!0):(Z(),fe(f(lr),Xe({key:0},c.$attrs,{"aria-controls":f(a),"aria-describedby":f(i),"aria-expanded":f(s),"aria-haspopup":f(u)}),{default:te(()=>[ie(c.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var fr=se(pr,[["__file","trigger.vue"]]);const cr=["fixed","absolute"],dr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:B(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Qe,default:"bottom"},popperOptions:{type:B(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),sn=ee({...dr,id:String,style:{type:B([String,Array,Object])},className:{type:B([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:B([String,Array,Object])},popperStyle:{type:B([String,Array,Object])},referenceEl:{type:B(Object)},triggerTargetEl:{type:B(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...$t(["ariaLabel"])}),vr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},gr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...hr(e),...t]};return br(a,r==null?void 0:r.modifiers),a},mr=e=>{if(Oe)return Dt(e)};function hr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function br(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const yr=0,wr=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(st,void 0),a=F(),i=F(),u=R(()=>({name:"eventListeners",enabled:!!e.visible})),s=R(()=>{var p;const w=f(a),T=(p=f(i))!=null?p:yr;return{name:"arrow",enabled:!$n(w),options:{element:w,padding:T}}}),l=R(()=>({onFirstUpdate:()=>{m()},...gr(e,[f(s),f(u)])})),c=R(()=>mr(e.referenceEl)||f(o)),{attributes:d,state:b,styles:g,update:m,forceUpdate:v,instanceRef:E}=Uo(c,n,l);return _(E,p=>t.value=p),Ke(()=>{_(()=>{var p;return(p=f(c))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:E,state:b,styles:g,role:r,forceUpdate:v,update:m}},Or=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=Pn(),a=Me("popper"),i=R(()=>f(t).popper),u=F(Ze(e.zIndex)?e.zIndex:r()),s=R(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=R(()=>[{zIndex:f(u)},f(n).popper,e.popperStyle||{}]),c=R(()=>o.value==="dialog"?"false":void 0),d=R(()=>f(n).arrow||{});return{ariaModal:c,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ze(e.zIndex)?e.zIndex:r()}}},Er=(e,t)=>{const n=F(!1),o=F();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var c;((c=l.detail)==null?void 0:c.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Tr=L({name:"ElPopperContent"}),Cr=L({...Tr,props:sn,emits:vr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:c}=Er(o,n),{attributes:d,arrowRef:b,contentRef:g,styles:m,instanceRef:v,role:E,update:p}=wr(o),{ariaModal:w,arrowStyle:T,contentAttrs:h,contentClass:C,contentStyle:A,updateZIndex:O}=Or(o,{styles:m,attributes:d,role:E}),x=le(wt,void 0),k=F();Ce(tn,{arrowStyle:T,arrowRef:b,arrowOffset:k}),x&&Ce(wt,{...x,addInputId:Je,removeInputId:Je});let P;const M=(S=!0)=>{p(),S&&O()},D=()=>{M(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return Ke(()=>{_(()=>o.triggerTargetEl,(S,N)=>{P==null||P(),P=void 0;const j=f(S||g.value),I=f(N||g.value);He(j)&&(P=_([E,()=>o.ariaLabel,w,()=>o.id],y=>{["role","aria-label","aria-modal","id"].forEach(($,V)=>{Lt(y[V])?j.removeAttribute($):j.setAttribute($,y[V])})},{immediate:!0})),I!==j&&He(I)&&["role","aria-label","aria-modal","id"].forEach(y=>{I.removeAttribute(y)})},{immediate:!0}),_(()=>o.visible,D,{immediate:!0})}),Se(()=>{P==null||P(),P=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:M,contentStyle:A}),(S,N)=>(Z(),$e("div",Xe({ref_key:"contentRef",ref:g},f(h),{style:f(A),class:f(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=j=>S.$emit("mouseenter",j)),onMouseleave:N[1]||(N[1]=j=>S.$emit("mouseleave",j))}),[Re(f(Nn),{trapped:f(a),"trap-on-focus-in":!0,"focus-trap-el":f(g),"focus-start-el":f(r),onFocusAfterTrapped:f(u),onFocusAfterReleased:f(i),onFocusin:f(s),onFocusoutPrevented:f(l),onReleaseRequested:f(c)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Rr=se(Cr,[["__file","content.vue"]]);const Ar=Nt(or),lt=Symbol("elTooltip"),ln=ee({...Go,...sn,appendTo:{type:B([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,visible:{type:B(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...$t(["ariaLabel"])}),un=ee({...an,disabled:Boolean,trigger:{type:B([String,Array]),default:"hover"},triggerKeys:{type:B(Array),default:()=>[yt.enter,yt.space]}}),{useModelToggleProps:xr,useModelToggleEmits:Pr,useModelToggle:Sr}=Ht("visible"),Mr=ee({...nn,...xr,...ln,...un,...on,showArrow:{type:Boolean,default:!0}}),Br=[...Pr,"before-show","before-hide","show","hide","open","close"],Ir=(e,t)=>Sn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Ir(f(e),t)&&n(o)},kr=L({name:"ElTooltipTrigger"}),Fr=L({...kr,props:un,setup(e,{expose:t}){const n=e,o=Me("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=le(lt,void 0),c=F(null),d=()=>{if(f(r)||n.disabled)return!0},b=we(n,"trigger"),g=Y(d,pe(b,"hover",u)),m=Y(d,pe(b,"hover",s)),v=Y(d,pe(b,"click",h=>{h.button===0&&l(h)})),E=Y(d,pe(b,"focus",u)),p=Y(d,pe(b,"focus",s)),w=Y(d,pe(b,"contextmenu",h=>{h.preventDefault(),l(h)})),T=Y(d,h=>{const{code:C}=h;n.triggerKeys.includes(C)&&(h.preventDefault(),l(h))});return t({triggerRef:c}),(h,C)=>(Z(),fe(f(fr),{id:f(a),"virtual-ref":h.virtualRef,open:f(i),"virtual-triggering":h.virtualTriggering,class:jt(f(o).e("trigger")),onBlur:f(p),onClick:f(v),onContextmenu:f(w),onFocus:f(E),onMouseenter:f(g),onMouseleave:f(m),onKeydown:f(T)},{default:te(()=>[ie(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var jr=se(Fr,[["__file","trigger.vue"]]);const _r=L({name:"ElTooltipContent",inheritAttrs:!1}),Dr=L({..._r,props:ln,setup(e,{expose:t}){const n=e,{selector:o}=Qt(),r=Me("tooltip"),a=F(null),i=F(!1),{controlled:u,id:s,open:l,trigger:c,onClose:d,onOpen:b,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:E}=le(lt,void 0),p=R(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=R(()=>n.persistent);Se(()=>{i.value=!0});const T=R(()=>f(w)?!0:f(l)),h=R(()=>n.disabled?!1:f(l)),C=R(()=>n.appendTo||o.value),A=R(()=>{var y;return(y=n.style)!=null?y:{}}),O=R(()=>!f(l)),x=()=>{m()},k=()=>{if(f(u))return!0},P=Y(k,()=>{n.enterable&&f(c)==="hover"&&b()}),M=Y(k,()=>{f(c)==="hover"&&d()}),D=()=>{var y,$;($=(y=a.value)==null?void 0:y.updatePopper)==null||$.call(y),v==null||v()},S=()=>{E==null||E()},N=()=>{g(),I=kn(R(()=>{var y;return(y=a.value)==null?void 0:y.popperContentRef}),()=>{if(f(u))return;f(c)!=="hover"&&d()})},j=()=>{n.virtualTriggering||d()};let I;return _(()=>f(l),y=>{y||I==null||I()},{flush:"post"}),_(()=>n.content,()=>{var y,$;($=(y=a.value)==null?void 0:y.updatePopper)==null||$.call(y)}),t({contentRef:a}),(y,$)=>(Z(),fe(In,{disabled:!y.teleported,to:f(C)},[Re(Bn,{name:f(p),onAfterLeave:x,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:te(()=>[f(T)?_t((Z(),fe(f(Rr),Xe({key:0,id:f(s),ref_key:"contentRef",ref:a},y.$attrs,{"aria-label":y.ariaLabel,"aria-hidden":f(O),"boundaries-padding":y.boundariesPadding,"fallback-placements":y.fallbackPlacements,"gpu-acceleration":y.gpuAcceleration,offset:y.offset,placement:y.placement,"popper-options":y.popperOptions,strategy:y.strategy,effect:y.effect,enterable:y.enterable,pure:y.pure,"popper-class":y.popperClass,"popper-style":[y.popperStyle,f(A)],"reference-el":y.referenceEl,"trigger-target-el":y.triggerTargetEl,visible:f(h),"z-index":y.zIndex,onMouseenter:f(P),onMouseleave:f(M),onBlur:j,onClose:f(d)}),{default:te(()=>[i.value?Ae("v-if",!0):ie(y.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Mn,f(h)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Lr=se(Dr,[["__file","content.vue"]]);const Nr=["innerHTML"],$r={key:1},Hr=L({name:"ElTooltip"}),Wr=L({...Hr,props:Mr,emits:Br,setup(e,{expose:t,emit:n}){const o=e;Jo();const r=Ln(),a=F(),i=F(),u=()=>{var p;const w=f(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=F(!1),l=F(),{show:c,hide:d,hasUpdateHandler:b}=Sr({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=Xo({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:c,close:d}),v=R(()=>Ft(o.visible)&&!b.value);Ce(lt,{controlled:v,id:r,open:Fn(s),trigger:we(o,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{f(s)?m(p):g(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),_(()=>o.disabled,p=>{p&&s.value&&(s.value=!1)});const E=p=>{var w,T;const h=(T=(w=i.value)==null?void 0:w.contentRef)==null?void 0:T.popperContentRef,C=(p==null?void 0:p.relatedTarget)||document.activeElement;return h&&h.contains(C)};return jn(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:E,updatePopper:u,onOpen:g,onClose:m,hide:d}),(p,w)=>(Z(),fe(f(Ar),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(jr,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Lr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),$e("span",{key:0,innerHTML:p.content},null,8,Nr)):(Z(),$e("span",$r,_n(p.content),1))]),p.showArrow?(Z(),fe(f(ir),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var Kr=se(Wr,[["__file","tooltip.vue"]]);const Zr=Nt(Kr);export{Zr as E,Qe as a,$n as i,ln as u};
