import{_ as g,j as b,f,o as s,c as o,b as e,F as d,l as m,d as c,w as u,g as v,t as a,v as $,m as w,p as x,h as S,r as y,x as H,y as I,z as C,A as B}from"./index-ClR9mido.js";/* empty css             */import{g as N,E as R,a as P,b as G,c as E,d as T}from"./home-Bwc5przd.js";import{G as z}from"./GoodsItem-CktuxvNZ.js";import"./index-CqcoIh08.js";import"./vnode-D1sms20D.js";import"./throttle-Du3P3sCE.js";import"./debounce-gG6lPOQr.js";const L=l=>(x("data-v-492fb2ba"),l=l(),S(),l),D={class:"home-category"},V={class:"menu"},F={class:"layer"},U=L(()=>e("h4",null,[v("分类推荐 "),e("small",null,"根据您的购买或浏览记录推荐")],-1)),j=["src"],A={class:"info"},M={class:"name ellipsis-2"},q={class:"desc ellipsis"},J={class:"price"},K=L(()=>e("i",null,"¥",-1)),O={__name:"HomeCategory",setup(l){const n=b();return(p,_)=>{const h=f("RouterLink");return s(),o("div",D,[e("ul",V,[(s(!0),o(d,null,m(w(n).categoryList,r=>(s(),o("li",{key:r.id},[c(h,{to:"/"},{default:u(()=>[v(a(r.name),1)]),_:2},1024),(s(!0),o(d,null,m(r.children.splice(0,2),t=>(s(),$(h,{key:t.id,to:"/"},{default:u(()=>[v(a(t.name),1)]),_:2},1024))),128)),e("div",F,[U,e("ul",null,[(s(!0),o(d,null,m(r.goods,t=>(s(),o("li",{key:t.id},[c(h,{to:"/"},{default:u(()=>[e("img",{alt:"",src:t.picture},null,8,j),e("div",A,[e("p",M,a(t.name),1),e("p",q,a(t.desc),1),e("p",J,[K,v(a(t.price),1)])])]),_:2},1024)]))),128))])])]))),128))])])}}},Q=g(O,[["__scopeId","data-v-492fb2ba"]]),W={class:"home-banner"},X=["onClick","src"],Y={__name:"HomeBanner",setup(l){const n=y([]),p=async()=>{n.value=await N()};return H(()=>{p()}),(_,h)=>{const r=R,t=P;return s(),o("div",W,[c(t,{height:"500px"},{default:u(()=>[(s(!0),o(d,null,m(n.value,i=>(s(),$(r,{key:i.id},{default:u(()=>[e("img",{onClick:be=>_.$router.push(i.hrefUrl),src:i.imgUrl,alt:""},null,8,X)]),_:2},1024))),128))]),_:1})])}}},Z=g(Y,[["__scopeId","data-v-a96eb77a"]]),ee={class:"home-panel"},te={class:"container"},se={class:"head"},oe={__name:"HomePanel",props:{title:{type:String,default:"新鲜好物"},subTitle:{type:String,default:"新鲜出炉 品质靠谱"}},setup(l){return(n,p)=>(s(),o("div",ee,[e("div",te,[e("div",se,[e("h3",null,[v(a(l.title),1),e("small",null,a(l.subTitle),1)])]),e("div",null,[I(n.$slots,"default",{},void 0,!0)])])]))}},k=g(oe,[["__scopeId","data-v-3865c5e8"]]),ne={class:"goods-list"},ce=["src"],ae={class:"name"},le={class:"price"},re={__name:"HomeNew",setup(l){const n=y([]);return(async()=>{const _=await G();n.value=_})(),(_,h)=>{const r=f("RouterLink");return s(),o(d,null,[c(k,{title:"新鲜好物",subTitle:"新鲜出炉 品质靠谱"}),e("ul",ne,[(s(!0),o(d,null,m(n.value,t=>(s(),o("li",{key:t.id},[c(r,{to:`/rabbit/detail/${t.id}`},{default:u(()=>[e("img",{src:t.picture,alt:""},null,8,ce),e("p",ae,a(t.name),1),e("p",le,"¥"+a(t.price),1)]),_:2},1032,["to"])]))),128))])],64)}}},_e=g(re,[["__scopeId","data-v-6895c650"]]),ie={class:"goods-list"},ue={alt:""},de={class:"name"},pe={class:"desc"},me={__name:"HomeHot",setup(l){const n=y([]);return(async()=>{const _=await E();n.value=_})(),(_,h)=>{const r=f("RouterLink"),t=C("img-lazy");return s(),$(k,{title:"人气推荐","sub-title":"人气爆款 不容错过"},{default:u(()=>[e("ul",ie,[(s(!0),o(d,null,m(n.value,i=>(s(),o("li",{key:i.id},[c(r,{to:"/"},{default:u(()=>[B(e("img",ue,null,512),[[t,i.picture]]),e("p",de,a(i.title),1),e("p",pe,a(i.alt),1)]),_:2},1024)]))),128))])]),_:1})}}},he=g(me,[["__scopeId","data-v-2283129f"]]),ge={class:"home-product"},ve={class:"box"},fe=["src"],$e={class:"label"},ye={class:"goods-list"},ke={__name:"HomeProduct",setup(l){const n=y([]),p=async()=>{const _=await T();n.value=_};return H(()=>{p()}),(_,h)=>{const r=f("RouterLink");return s(),o("div",ge,[(s(!0),o(d,null,m(n.value,t=>(s(),$(k,{title:t.name,key:t.id},{default:u(()=>[e("div",ve,[c(r,{class:"cover",to:"/"},{default:u(()=>[e("img",{src:t.picture},null,8,fe),e("strong",$e,[e("span",null,a(t.name),1),e("span",null,a(t.saleInfo),1)])]),_:2},1024),e("ul",ye,[(s(!0),o(d,null,m(t.goods,i=>(s(),o("li",{key:i.id},[c(z,{good:i},null,8,["good"])]))),128))])])]),_:2},1032,["title"]))),128))])}}},He=g(ke,[["__scopeId","data-v-4b3c3ce6"]]),Le={class:"container"},Pe={__name:"index",setup(l){return(n,p)=>(s(),o("div",Le,[c(Q),c(Z),c(_e),c(he),c(He)]))}};export{Pe as default};
