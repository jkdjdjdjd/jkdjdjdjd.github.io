import{d as n}from"./debounce-gG6lPOQr.js";import{aa as l}from"./index-ClR9mido.js";var g="Expected a function";function u(e,t,r){var i=!0,a=!0;if(typeof e!="function")throw new TypeError(g);return l(r)&&(i="leading"in r?!!r.leading:i,a="trailing"in r?!!r.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}export{u as t};
