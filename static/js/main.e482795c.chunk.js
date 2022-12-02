(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(5),r=a.n(c),l=(a(18),a(1)),o=(a(20),a(21),a(2));a(3);var m=function(e){var t=e.updateCart,a=e.cart,n=e.item;return i.a.createElement("div",{class:"items"},i.a.createElement("img",{src:n.image}),i.a.createElement("h3",null,n.name),i.a.createElement("p",null,"$",n.price),i.a.createElement("button",{onClick:function(){console.log(e.item.name),t([].concat(Object(o.a)(a),[n]))}},"Add to Cart"))};var u=function(e){var t=e.cart,a=e.setCart,n=e.total;return i.a.createElement("div",{class:"cart"},i.a.createElement("h2",{class:"cartName"},"Cart  "),i.a.createElement("div",null,t.map(function(e,n){return i.a.createElement("p",{key:n},e.name,"    ",i.a.createElement("button",{onClick:function(){console.log(n,t.splice(n,1)),a(Object(o.a)(t))}},"-"))})),i.a.createElement("h4",null,"Total: $",n))},s=[{name:"Steinway Grand Piano",type:"Piano",acoustic:1,price:1e4,image:"/devFinal./images/steinway.png",favorite:!1},{name:"Martin Acoustic Guitar",type:"Guitar",acoustic:1,price:3e3,image:"/devFinal./images/martin.jpeg",favorite:!1},{name:"Rhodes MK8",type:"Keyboard",acoustic:0,price:5e3,image:"/devFinal./images/rhodes.jpeg",favorite:!1},{name:"Yamaha YPG 235",type:"Keyboard",acoustic:0,price:300,image:"/devFinal./images/ypg.jpeg",favorite:!1},{name:"Gibson SG Special",type:"Guitar",acoustic:0,price:400,image:"/devFinal./images/gibson.jpeg",favorite:!1},{name:"Taylor Acoustic-Electric Guitar",type:"Guitar",acoustic:2,price:3e3,image:"/devFinal./images/taylor.jpeg",favorite:!1},{name:"AKG Microphone",type:"Microphone",acoustic:0,price:400,image:"/devFinal./images/akg.jpeg",favorite:!1},{name:"Neuman Microphone",type:"Microphone",acoustic:0,price:700,image:"/devFinal./images/neuman.jpeg",favorite:!1},{name:"Shure SM58",type:"Microphone",acoustic:0,price:300,image:"/devFinal./images/sm58.jpeg",favorite:!1},{name:"Moog Synthesizer",type:"Synthesizer",acoustic:0,price:1e3,image:"/devFinal./images/synth.jpeg",favorite:!1},{name:"Moog Theremin",type:"Theremin",acoustic:0,price:15e3,image:"/devFinal./images/theremin.jpeg",favorite:!1},{name:"Yamaha Violin",type:"Violin",acoustic:1,price:2e3,image:"/devFinal./images/violin.jpeg",favorite:!1}],p=[].concat(s);var f=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),o=Object(l.a)(r,2),f=o[0],g=o[1],y=Object(n.useState)("clear"),d=Object(l.a)(y,2),E=d[0],b=d[1],v=Object(n.useState)("clear"),h=Object(l.a)(v,2),k=h[0],j=h[1],C=p,M=function(){switch(E){case"all":C=p;break;case"acoustic":C=p.filter(function(e){return e.acoustic>0});break;case"electric":C=p.filter(function(e){return 1!==e.acoustic});break;case"price":C=s.sort(function(e,t){return e.price-t.price})}switch(k){case"clear":break;case"guitar":C=C.filter(function(e){return"Guitar"===e.type});break;case"piano":C=C.filter(function(e){return"Piano"===e.type});break;case"keyboard":C=C.filter(function(e){return"Keyboard"===e.type});break;case"mic":C=C.filter(function(e){return"Microphone"===e.type});break;case"synth":C=C.filter(function(e){return"Synthesizer"===e.type});break;case"theremin":C=C.filter(function(e){return"Theremin"===e.type});break;case"violin":C=C.filter(function(e){return"Violin"===e.type})}return C};return M(),Object(n.useEffect)(function(){!function(){var e=0;a.forEach(function(t){return e+=t.price}),g(e)}()}),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Music Shoppe"),i.a.createElement("div",{class:"criteria"},i.a.createElement("form",{id:"filtering"},i.a.createElement("button",{type:"reset",name:"misc1",onClick:function(){b("all"),j("clear"),M()}},"No filter"),i.a.createElement("h2",{class:"miscName"},"Miscellaneous"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"misc",onClick:function(){b("acoustic"),M()}}),"Acoustic"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"misc",onClick:function(){b("electric"),M()}}),"Electric"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"misc",onClick:function(){b("price"),M()}}),"By Price"),i.a.createElement("h2",null,"Instrument"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("guitar"),M()}}),"Guitar"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("piano"),M()}}),"Piano"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("keyboard"),M()}}),"Keyboard"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("mic"),M()}}),"Microphone"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("synth"),M()}}),"Synth"),i.a.createElement("label",null,i.a.createElement("input",{type:"radio",name:"inst",onClick:function(){j("theremin"),M()}}),"Theremin"))),i.a.createElement("div",{class:"instruments"},C.map(function(e,t){return i.a.createElement(m,{item:e,key:t,cart:a,updateCart:c,total:f,setTotal:g})})),i.a.createElement("div",{class:"cart"},i.a.createElement(u,{cart:a,total:f,setCart:c})))};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)))},3:function(e,t,a){},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.e482795c.chunk.js.map