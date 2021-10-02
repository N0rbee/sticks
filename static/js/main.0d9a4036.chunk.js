(this.webpackJsonpsticks=this.webpackJsonpsticks||[]).push([[0],{10:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var c=r(1),n=r.n(c),s=r(4),a=r.n(s),l=(r(10),r(2)),i=r(3),o=r(0);var b=function(e){var t=e.top,r=e.left,c=e.rotation,n=e.selected,s=e.currentPlayer,a={width:"6px",height:"162px",top:"".concat(t,"px"),left:"".concat(r,"px"),transform:"rotate(".concat(c,"deg)")},l="bg-yellow-400 border-white";return n&&(l=1===s?"bg-green-400 border-green-600":"bg-red-400 border-red-600"),Object(o.jsx)("div",{className:"absolute z-10 border ".concat(l),style:a})};var j=function(e){var t=e.dispatch,r=e.onHowToPlay,c=e.onSettings;return Object(o.jsx)("header",{className:"bg-gray-100 border-b border-gray-200 fixed inset-x-0 top-0 z-20 py-3",children:Object(o.jsxs)("nav",{className:"flex justify-between items-center max-w-2xl mx-auto text-gray-700",children:[Object(o.jsx)("span",{className:"text-lg",children:"Sticks"}),Object(o.jsxs)("ul",{className:"text-sm",children:[Object(o.jsx)("li",{className:"inline-block px-2 border-r border-gray-400",children:Object(o.jsx)("button",{onClick:function(){return t({type:"restart"})},children:"New Game"})}),Object(o.jsx)("li",{className:"inline-block px-2 border-r border-gray-400",children:Object(o.jsx)("button",{onClick:c,children:"Settings"})}),Object(o.jsx)("li",{className:"inline-block px-2 border-r border-gray-400",children:Object(o.jsx)("button",{onClick:r,children:"How to play"})}),Object(o.jsx)("li",{className:"inline-block pl-2",children:Object(o.jsx)("a",{href:"https://github.com/N0rbee/sticks",children:"GitHub"})})]})]})})};var d=function(e){var t=e.total,r=e.currentPlayer;return Object(o.jsxs)("div",{className:"flex justify-between",children:[Object(o.jsx)("div",{className:1===r?"":"invisible",children:Object(o.jsx)("span",{className:"font-bold text-3xl text-green-500",children:"Player 1"})}),Object(o.jsxs)("div",{className:"text-center",children:[Object(o.jsx)("span",{className:"block text-lg",children:"Remaining"}),Object(o.jsx)("span",{className:"text-3xl font-light",children:t})]}),Object(o.jsx)("div",{className:0===r?"":"invisible",children:Object(o.jsx)("span",{className:"font-bold text-3xl text-red-500",children:"Player 2"})})]})};var x=function(e){var t=e.dispatch,r=e.inputNumber,c=e.selectedNumber,n=e.min,s=e.max,a=e.currentPlayer;return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"removeSticks"})},children:[Object(o.jsx)("div",{className:"text-center my-4",children:Object(o.jsxs)("button",{className:"text-sm tracking-wider uppercase shadow text-white py-2 px-4 rounded ".concat(1===a?"bg-green-400":"bg-red-400"),type:"submit",disabled:c<n,children:["Take ",c," sticks"]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"w-full",type:"range",onChange:function(e){return t({type:"selectSticks",payload:{value:e.target.value}})},value:r,min:n,max:s,step:1}),Object(o.jsxs)("div",{className:"flex justify-between text-sm",children:[Object(o.jsxs)("span",{children:["Min.: ",n]}),String(r)!==String(c)&&Object(o.jsxs)("span",{className:"text-red-500",children:[r," forced to ",c]}),Object(o.jsxs)("span",{children:["Max.: ",s]})]})]})]})};var u=function(e){var t=e.winner;return""===t?null:Object(o.jsxs)("div",{className:"fixed inset-x-0 top-1/3 text-white shadow z-20 text-center p-8 ".concat("Player 1"===t?"bg-green-400":"bg-red-400"),children:[Object(o.jsx)("h2",{className:"text-6xl",children:"Winner"}),Object(o.jsx)("p",{className:"text-4xl bold mt-4",children:t})]})};var m=function(e){var t=e.open,r=e.title,c=e.onClose,n=e.children;return t?a.a.createPortal(Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"fixed inset-0 bg-black z-20 opacity-20",onClick:c}),Object(o.jsxs)("div",{className:"fixed left-1/2 top-1/4 bg-white border border-gray-300 w-80 z-20 transform -translate-x-1/2",children:[Object(o.jsxs)("header",{className:"border-b border-gray-300 bg-gray-100 flex justify-between items-center pl-2 text-gray-600",children:[Object(o.jsx)("h1",{className:"font-bold",children:r}),Object(o.jsx)("button",{className:"text-4xl px-2",onClick:c,children:"\xd7"})]}),Object(o.jsx)("div",{className:"px-6 py-4",children:n})]})]}),document.getElementById("modal")):null};var h=function(e){var t=e.open,r=e.onClose;return Object(o.jsx)(m,{open:t,title:"How to play",onClose:r,children:Object(o.jsx)("p",{children:'There are "N" sticks on the table. A player in his or her turn can pick min. "a" or max. "b" sticks. The player who can\'t pick or can only pick min. "a" sticks loses the game.'})})};function p(e,t){var r="";return isNaN(e)?r="No an Integer":(e<t[0]||e>t[1])&&(r="Out of range"),r}var O=function(e){var t=e.open,r=e.onClose,n=e.onSave,s=Object(c.useState)(100),a=Object(l.a)(s,2),i=a[0],b=a[1],j=Object(c.useState)(1),d=Object(l.a)(j,2),x=d[0],u=d[1],h=Object(c.useState)(10),O=Object(l.a)(h,2),N=O[0],f=O[1],v=Object(c.useMemo)((function(){return function(e,t){var r=parseInt(e);isNaN(r)?r=100:r<10?r=10:r>1e3&&(r=1e3);var c=parseInt(t);isNaN(c)&&(c=1);var n=r-2;return{total:[10,1e3],min:[1,n],max:[Math.min(c,n)+1,r-1]}}(i,x)}),[i,x]),y=Object(c.useState)({total:"",min:"",max:""}),g=Object(l.a)(y,2),k=g[0],w=g[1];return Object(o.jsx)(m,{open:t,title:"Settings",onClose:r,children:Object(o.jsxs)("form",{className:"flex flex-col items-center",onSubmit:function(e){e.preventDefault();var t=p(i,v.total),c=p(x,v.min),s=p(N,v.max);w({total:t,min:c,max:s}),""===t&&""===c&&""===s&&(n(i,x,N),r())},children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"mb-2",children:[Object(o.jsxs)("label",{className:"inline-block w-32",children:["Starting ",Object(o.jsxs)("small",{children:["[",v.total[0],", ",v.total[1],"]"]})]}),Object(o.jsx)("input",{className:"border border-gray-400 w-16 px-0.5",type:"text",onChange:function(e){return b(e.target.value)},value:i}),k.total&&Object(o.jsx)("small",{className:"text-red-500 ml-1",children:k.total})]}),Object(o.jsxs)("div",{className:"mb-2",children:[Object(o.jsxs)("label",{className:"inline-block w-32",children:["Min. ",Object(o.jsxs)("small",{children:["[",v.min[0],", ",v.min[1],"]"]})]}),Object(o.jsx)("input",{className:"border border-gray-400 w-16 px-0.5",type:"text",onChange:function(e){return u(e.target.value)},value:x}),k.min&&Object(o.jsx)("small",{className:"text-red-500 ml-1",children:k.min})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{className:"inline-block w-32",children:["Max. ",Object(o.jsxs)("small",{children:["[",v.max[0],", ",v.max[1],"]"]})]}),Object(o.jsx)("input",{className:"border border-gray-400 w-16 px-0.5",type:"text",onChange:function(e){return f(e.target.value)},value:N}),k.max&&Object(o.jsx)("small",{className:"text-red-500 ml-1",children:k.max})]})]}),Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsx)("button",{className:"text-sm tracking-wider uppercase bg-blue-400 shadow text-white py-2 px-4 rounded",type:"submit",children:"Save & New Game"})})]})})},N={MIN:1,MAX:10,TOTAL:100};function f(e){for(var t=[],r=0;r<e;r++)t.push({id:r,isSelected:!1,top:Math.floor(338*Math.random()),left:Math.floor(338*Math.random())+78,rotation:Math.floor(180*Math.random())});return{sticks:t,inputNumber:0,selectedNumber:0,currentPlayer:1}}function v(e,t){switch(t.type){case"selectSticks":var r=parseInt(t.payload.value);r=isNaN(r)||e.sticks.length<=N.MIN||r<N.MIN?0:Math.min(r,N.MAX,e.sticks.length-1);var c=e.sticks.length-r;return Object(i.a)(Object(i.a)({},e),{},{sticks:e.sticks.map((function(e){return e.id<c?Object(i.a)(Object(i.a)({},e),{},{selected:!1}):Object(i.a)(Object(i.a)({},e),{},{selected:!0})})),inputNumber:t.payload.value,selectedNumber:r});case"removeSticks":var n=e.sticks.filter((function(e){return!e.selected}));return Object(i.a)(Object(i.a)({},e),{},{sticks:n,inputNumber:0,selectedNumber:0,currentPlayer:(e.currentPlayer+1)%2});case"restart":return f(N.TOTAL);default:return e}}var y=function(){var e=Object(c.useReducer)(v,N.TOTAL,f),t=Object(l.a)(e,2),r=t[0],n=t[1],s=Object(c.useState)(!1),a=Object(l.a)(s,2),i=a[0],m=a[1],p=Object(c.useState)(!1),y=Object(l.a)(p,2),g=y[0],k=y[1];return Object(o.jsxs)("main",{children:[Object(o.jsx)(j,{dispatch:n,onHowToPlay:function(){return m(!0)},onSettings:function(){return k(!0)}}),Object(o.jsxs)("section",{className:"max-w-2xl mx-auto mt-16",children:[Object(o.jsx)(d,{total:r.sticks.length,currentPlayer:r.currentPlayer}),Object(o.jsx)("div",{className:"relative mx-auto my-2",style:{width:"500px",height:"500px"},children:r.sticks.map((function(e){return Object(o.jsx)(b,{selected:e.selected,top:e.top,left:e.left,rotation:e.rotation,currentPlayer:r.currentPlayer},e.id)}))}),Object(o.jsx)(x,{dispatch:n,inputNumber:r.inputNumber,selectedNumber:r.selectedNumber,min:N.MIN,max:N.MAX,currentPlayer:r.currentPlayer})]}),Object(o.jsx)(u,{winner:r.sticks.length<=N.MIN?1===r.currentPlayer?"Player 2":"Player 1":""}),Object(o.jsx)(h,{open:i,onClose:function(){return m(!1)}}),Object(o.jsx)(O,{open:g,onClose:function(){return k(!1)},onSave:function(e,t,r){N.TOTAL=e,N.MIN=t,N.MAX=r,n({type:"restart"})}})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.0d9a4036.chunk.js.map