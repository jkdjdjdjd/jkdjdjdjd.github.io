import{D as o,a8 as u,aA as v,r as c,I as s,ad as t,ag as f,R as m,J as p,bq as y,y as C}from"./index-ClR9mido.js";const g=["",void 0,null],O=void 0,b=o({emptyValues:Array,valueOnClear:{type:[String,Number,Boolean,Function],default:void 0,validator:e=>u(e)?!e():!e}}),A=(e,n)=>{let a=v();a.value||(a=c({}));const l=s(()=>e.emptyValues||a.value.emptyValues||g),r=s(()=>u(e.valueOnClear)?e.valueOnClear():e.valueOnClear!==void 0?e.valueOnClear:u(a.value.valueOnClear)?a.value.valueOnClear():a.value.valueOnClear!==void 0?a.value.valueOnClear:O),i=d=>l.value.includes(d);return l.value.includes(r.value),{emptyValues:l,valueOnClear:r,isEmptyValue:i}},E=o({a11y:{type:Boolean,default:!0},locale:{type:t(Object)},size:f,button:{type:t(Object)},experimentalFeatures:{type:t(Object)},keyboardNavigation:{type:Boolean,default:!0},message:{type:t(Object)},zIndex:Number,namespace:{type:String,default:"el"},...b}),V={},j=m({name:"ElConfigProvider",props:E,setup(e,{slots:n}){p(()=>e.message,l=>{Object.assign(V,l??{})},{immediate:!0,deep:!0});const a=y(e);return()=>C(n,"default",{config:a==null?void 0:a.value})}});export{j as C,b as a,V as m,A as u};
